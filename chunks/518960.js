i.d(t, { R: () => P, V: () => C });
var r = i(367513),
    n = i(148494),
    l = i(608299),
    o = i(494921),
    a = i(280889),
    s = i(565150),
    d = i(658612),
    p = i(95561),
    m = i(198052),
    u = i(795129),
    c = i(346293),
    f = i(550642),
    g = i(823099),
    E = i(522602),
    h = i(287809),
    A = i(174459),
    S = i(453771),
    y = i(158045),
    T = i(292348),
    _ = i(382287),
    I = i(652215),
    w = i(381941),
    U = i(202541),
    z = i(375708);
function C(e, t, i) {
    let r = h.default.getCurrentUser(),
        n = e.guild_id,
        l = S.o2(n),
        a = (0, f.R8)({ location: "web.showUploadFileSizeExceededError" }),
        s = (0, f.Jy)(a, l),
        d = Array.from(t).map((e) => e.size),
        m = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        u = d.reduce((e, t) => e + t, 0),
        g = d.length > 0 ? Math.max(...d) : 0,
        E = d.length;
    if (g > s) {
        let t = i?.reduce((e, t) => e + t, 0);
        (0, p.zV)(
            I.HAw.FILE_SIZE_LIMIT_EXCEEDED,
            (0, c.s)({
                channelId: e.id,
                guildId: n,
                userIndividualFileSizeLimit: l,
                numAttachments: E,
                preCompressionFileSizes: d,
                preCompressionAggregateSize: u,
                postCompressionFileSizes: i,
                postCompressionAggregateSize: t,
                attachmentMimeTypes: m,
                errorType: w.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                kestrelVariant: (0, f.H6)(a),
            }),
        ),
            (0, o.openUploadError)({
                title: z.intl.string(z.t["/tGlcj"]),
                help: (0, _.WQ)(r, n, a.enabled ? s : void 0),
                showPremiumUpsell: !(0, y.YE)(r, U.PremiumTypes.TIER_2),
                fileSize: g,
                kestrelBeta: a.enabled && !a.isGA,
                kestrelGA: a.isGA,
                effectiveMaxSize: a.enabled ? s : void 0,
            });
        return;
    }
    (0, o.openUploadError)({
        title: z.intl.string(z.t["/tGlcj"]),
        help: z.intl.formatToPlainString(z.t.tUOJdH, {
            maxSize: S.Hb((0, T.jS)({ location: "showUploadFileSizeExceededError" })),
        }),
        kestrelBeta: a.enabled && !a.isGA,
        kestrelGA: a.isGA,
    });
}
async function P(e, t, i) {
    let {
        filesMetadata: p,
        requireConfirm: c = !0,
        isThumbnail: f = !1,
        origin: h,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != p && p.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let S = t.getGuildId(),
        y = Array.from(e),
        T = y.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if (
        (await Promise.resolve(),
        (await Promise.all(y.map(async (e) => !(e.size > 0) && (await (0, u._)(e)) === 0))).some(Boolean))
    )
        return void (0, o.openUploadError)({ title: z.intl.string(z.t.B3vFdU), help: z.intl.string(z.t["9ZpT2C"]) });
    let U = y.map((e, t) => ({
            file: e,
            platform: s.xz.WEB,
            isThumbnail: f,
            origin: h,
            compressionMetadata: T[t],
            ...p?.[t],
        })),
        P = await Promise.all(U.map(d.z)),
        b = P.map((e) => e.file);
    if ((0, _.fJ)(b, S)) return void C(t, b);
    if (E.A.getUploadCount(t.id, i) + P.length > I.XgB) {
        (0, o.openUploadError)({
            title: z.intl.string(z.t.wOr6hB),
            help: z.intl.formatToPlainString(z.t["qqyp/e"], { limit: I.XgB }),
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
        c)
    )
        l.A.addFiles({ files: P, channelId: t.id, draftType: i });
    else {
        let e = P.map((e) => new a.bK(e, t.id));
        n.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: w.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, i, r) => {
                (0, g.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: i, reason: r });
            },
        });
    }
}
