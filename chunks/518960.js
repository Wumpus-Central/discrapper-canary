i.d(t, { R: () => C, V: () => z });
var r = i(367513),
    n = i(148494),
    l = i(608299),
    a = i(494921),
    o = i(280889),
    s = i(565150),
    d = i(658612),
    p = i(95561),
    m = i(198052),
    u = i(795129),
    f = i(346293),
    c = i(550642),
    g = i(823099),
    E = i(522602),
    h = i(287809),
    A = i(174459),
    y = i(453771),
    T = i(158045),
    _ = i(382287),
    I = i(652215),
    S = i(381941),
    w = i(202541),
    U = i(375708);
function z(e, t, i) {
    let r = h.default.getCurrentUser(),
        n = e.guild_id,
        l = y.o2(n),
        o = (0, c.R8)({ location: "web.showUploadFileSizeExceededError" }),
        s = (0, c.Jy)(o, l),
        d = Array.from(t).map((e) => e.size),
        m = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        u = d.reduce((e, t) => e + t, 0),
        g = d.length > 0 ? Math.max(...d) : 0,
        E = d.length;
    if (g > s) {
        let t = i?.reduce((e, t) => e + t, 0);
        (0, p.zV)(
            I.HAw.FILE_SIZE_LIMIT_EXCEEDED,
            (0, f.s)({
                channelId: e.id,
                guildId: n,
                userIndividualFileSizeLimit: l,
                numAttachments: E,
                preCompressionFileSizes: d,
                preCompressionAggregateSize: u,
                postCompressionFileSizes: i,
                postCompressionAggregateSize: t,
                attachmentMimeTypes: m,
                errorType: S.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                kestrelVariant: (0, c.H6)(o),
            }),
        ),
            (0, a.openUploadError)({
                title: U.intl.string(U.t["/tGlcj"]),
                help: (0, _.WQ)(r, n, o.enabled ? s : void 0),
                showPremiumUpsell: !(0, T.YE)(r, w.PremiumTypes.TIER_2),
                fileSize: g,
                kestrelBeta: o.enabled && !o.isGA,
                kestrelGA: o.isGA,
                effectiveMaxSize: o.enabled ? s : void 0,
            });
        return;
    }
    (0, a.openUploadError)({
        title: U.intl.string(U.t["/tGlcj"]),
        help: U.intl.formatToPlainString(U.t.tUOJdH, { maxSize: y.Hb(y.bB()) }),
        kestrelBeta: o.enabled && !o.isGA,
        kestrelGA: o.isGA,
    });
}
async function C(e, t, i) {
    let {
        filesMetadata: p,
        requireConfirm: f = !0,
        isThumbnail: c = !1,
        origin: h,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != p && p.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let y = t.getGuildId(),
        T = Array.from(e),
        w = T.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if (
        (await Promise.resolve(),
        (await Promise.all(T.map(async (e) => !(e.size > 0) && (await (0, u._)(e)) === 0))).some(Boolean))
    )
        return void (0, a.openUploadError)({ title: U.intl.string(U.t.B3vFdU), help: U.intl.string(U.t["9ZpT2C"]) });
    let C = T.map((e, t) => ({
            file: e,
            platform: s.xz.WEB,
            isThumbnail: c,
            origin: h,
            compressionMetadata: w[t],
            ...p?.[t],
        })),
        P = await Promise.all(C.map(d.z)),
        b = P.map((e) => e.file);
    if ((0, _.fJ)(b, y)) return void z(t, b);
    if (E.A.getUploadCount(t.id, i) + P.length > I.XgB) {
        (0, a.openUploadError)({
            title: U.intl.string(U.t.wOr6hB),
            help: U.intl.formatToPlainString(U.t["qqyp/e"], { limit: I.XgB }),
        }),
            A.default.track(I.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: E.A.getUploadCount(t.id, i),
                new_count: P.length,
            });
        return;
    }
    if (
        ((t.type !== I.rbe.GUILD_VOICE && t.type !== I.rbe.GUILD_STAGE_VOICE) ||
            m.A.getChatOpen(t.id) ||
            r.A.updateChatOpen(t.id, !0),
        f)
    )
        l.A.addFiles({ files: P, channelId: t.id, draftType: i });
    else {
        let e = P.map((e) => new o.bK(e, t.id));
        n.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: S.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, i, r) => {
                (0, g.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: i, reason: r });
            },
        });
    }
}
