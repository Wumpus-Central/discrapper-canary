"use strict";
n.d(t, { R: () => R, V: () => O });
var i = n(367513),
    r = n(148494),
    a = n(608299),
    s = n(494921),
    l = n(280889),
    o = n(565150),
    d = n(95561),
    c = n(313961),
    u = n(795129),
    _ = n(346293),
    E = n(550642),
    A = n(823099),
    h = n(522602),
    I = n(287809),
    f = n(174459),
    p = n(453771),
    T = n(158045),
    m = n(382287),
    g = n(652215),
    S = n(381941),
    N = n(202541),
    C = n(375708);
function O(e, t, n) {
    let i = I.default.getCurrentUser(),
        r = e.guild_id,
        a = p.o2(r),
        l = (0, E.R8)({ location: "web.showUploadFileSizeExceededError" }),
        o = (0, E.Jy)(l, a),
        c = Array.from(t).map((e) => e.size),
        u = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        A = c.reduce((e, t) => e + t, 0),
        h = c.length > 0 ? Math.max(...c) : 0,
        f = c.length;
    if (h > o) {
        let t = n?.reduce((e, t) => e + t, 0);
        (0, d.zV)(
            g.HAw.FILE_SIZE_LIMIT_EXCEEDED,
            (0, _.s)({
                channelId: e.id,
                guildId: r,
                userIndividualFileSizeLimit: a,
                numAttachments: f,
                preCompressionFileSizes: c,
                preCompressionAggregateSize: A,
                postCompressionFileSizes: n,
                postCompressionAggregateSize: t,
                attachmentMimeTypes: u,
                errorType: S.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                kestrelVariant: (0, E.H6)(l),
            }),
        ),
            (0, s.openUploadError)({
                title: C.intl.string(C.t["/tGlcj"]),
                help: (0, m.WQ)(i, r, l.enabled ? o : void 0),
                showPremiumUpsell: !(0, T.YE)(i, N.PremiumTypes.TIER_2),
                fileSize: h,
                kestrelBeta: l.enabled && !l.isGA,
                kestrelGA: l.isGA,
                effectiveMaxSize: l.enabled ? o : void 0,
            });
        return;
    }
    (0, s.openUploadError)({
        title: C.intl.string(C.t["/tGlcj"]),
        help: C.intl.formatToPlainString(C.t.tUOJdH, { maxSize: p.Hb(p.bB()) }),
        kestrelBeta: l.enabled && !l.isGA,
        kestrelGA: l.isGA,
    });
}
async function R(e, t, n) {
    let {
        filesMetadata: d,
        requireConfirm: _ = !0,
        isThumbnail: E = !1,
        origin: I,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != d && d.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let p = t.getGuildId(),
        T = Array.from(e),
        N = T.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if (
        (await Promise.resolve(),
        (await Promise.all(T.map(async (e) => !(e.size > 0) && (await (0, u._)(e)) === 0))).some(Boolean))
    )
        return void (0, s.openUploadError)({ title: C.intl.string(C.t.B3vFdU), help: C.intl.string(C.t["9ZpT2C"]) });
    if ((0, m.fJ)(T, p)) return void O(t, T);
    if (h.A.getUploadCount(t.id, n) + T.length > g.XgB) {
        (0, s.openUploadError)({
            title: C.intl.string(C.t.wOr6hB),
            help: C.intl.formatToPlainString(C.t["qqyp/e"], { limit: g.XgB }),
        }),
            f.default.track(g.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: h.A.getUploadCount(t.id, n),
                new_count: T.length,
            });
        return;
    }
    if (
        ((t.type !== g.rbe.GUILD_VOICE && t.type !== g.rbe.GUILD_STAGE_VOICE) ||
            c.A.getChatOpen(t.id) ||
            i.A.updateChatOpen(t.id, !0),
        _)
    ) {
        let e = T.map((e, t) => ({
            file: e,
            platform: o.xz.WEB,
            isThumbnail: E,
            origin: I,
            compressionMetadata: N[t],
            ...d?.[t],
        }));
        a.A.addFiles({ files: e, channelId: t.id, draftType: n });
    } else {
        let e = T.map((e, n) => {
            let i = null != d ? d[n] : {};
            return new l.bK(
                { file: e, platform: o.xz.WEB, isThumbnail: E, origin: I, compressionMetadata: N[n], ...i },
                t.id,
            );
        });
        r.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: S.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, n, i) => {
                (0, A.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: i });
            },
        });
    }
}
