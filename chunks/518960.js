i.d(t, { R: () => z, V: () => P });
var r = i(367513),
    n = i(148494),
    l = i(608299),
    o = i(494921),
    a = i(280889),
    s = i(565150),
    d = i(111542),
    p = i(95561),
    m = i(198052),
    u = i(795129),
    f = i(409481),
    g = i(346293),
    c = i(823099),
    h = i(522602),
    E = i(287809),
    A = i(174459),
    I = i(453771),
    T = i(158045),
    _ = i(292348),
    y = i(382287),
    S = i(652215),
    C = i(381941),
    U = i(202541),
    w = i(375708);
function P(e, t, i) {
    let r = E.default.getCurrentUser(),
        n = e.guild_id,
        l = I.o2(n),
        a = (0, f.C)(l),
        s = Array.from(t).map((e) => e.size),
        d = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        m = s.reduce((e, t) => e + t, 0),
        u = s.length > 0 ? Math.max(...s) : 0,
        c = s.length;
    if (u > a) {
        let t = i?.reduce((e, t) => e + t, 0);
        ((0, p.zV)(
            S.HAw.FILE_SIZE_LIMIT_EXCEEDED,
            (0, g.s)({
                channelId: e.id,
                guildId: n,
                userIndividualFileSizeLimit: l,
                numAttachments: c,
                preCompressionFileSizes: s,
                preCompressionAggregateSize: m,
                postCompressionFileSizes: i,
                postCompressionAggregateSize: t,
                attachmentMimeTypes: d,
                errorType: C.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            }),
        ),
            (0, o.openUploadError)({
                title: w.intl.string(w.t["/tGlcj"]),
                help: (0, y.WQ)(r, n, a),
                showPremiumUpsell: !(0, T.YE)(r, U.PremiumTypes.TIER_2),
                fileSize: u,
                effectiveMaxSize: a,
            }));
        return;
    }
    (0, o.openUploadError)({
        title: w.intl.string(w.t["/tGlcj"]),
        help: w.intl.formatToPlainString(w.t.tUOJdH, {
            maxSize: I.Hb((0, _.jS)({ location: "showUploadFileSizeExceededError" })),
        }),
    });
}
async function z(e, t, i) {
    let {
        filesMetadata: p,
        requireConfirm: f = !0,
        isThumbnail: g = !1,
        origin: E,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != p && p.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let I = t.getGuildId(),
        T = Array.from(e),
        _ = T.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if (
        (await Promise.resolve(),
        (await Promise.all(T.map(async (e) => !(e.size > 0) && (await (0, u._)(e)) === 0))).some(Boolean))
    )
        return void (0, o.openUploadError)({ title: w.intl.string(w.t.B3vFdU), help: w.intl.string(w.t["9ZpT2C"]) });
    let U = T.map((e, t) => ({
            file: e,
            platform: s.xz.WEB,
            isThumbnail: g,
            origin: E,
            compressionMetadata: _[t],
            ...p?.[t],
        })),
        z = await Promise.all(U.map(d.N)),
        L = z.map((e) => e.file);
    if ((0, y.fJ)({ files: L, guildId: I })) return void P(t, L);
    if (h.A.getUploadCount(t.id, i) + z.length > S.XgB) {
        ((0, o.openUploadError)({
            title: w.intl.string(w.t.wOr6hB),
            help: w.intl.formatToPlainString(w.t["qqyp/e"], { limit: S.XgB }),
        }),
            A.default.track(S.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: h.A.getUploadCount(t.id, i),
                new_count: z.length,
            }));
        return;
    }
    if (
        ((t.type !== S.rbe.GUILD_VOICE && t.type !== S.rbe.GUILD_STAGE_VOICE) ||
            m.A.getChatOpen(t.id) ||
            r.A.updateChatOpen(t.id, !0),
        f)
    )
        l.A.addFiles({ files: z, channelId: t.id, draftType: i });
    else {
        let e = z.map((e) => new a.bK(e, t.id));
        n.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: C.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, i, r) => {
                (0, c.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: i, reason: r });
            },
        });
    }
}
