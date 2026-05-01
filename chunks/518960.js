"use strict";
n.d(t, { R: () => y, V: () => N });
var i = n(367513),
    r = n(720149),
    s = n(608299),
    a = n(494921),
    o = n(417325),
    l = n(565150),
    u = n(95561),
    c = n(313961),
    d = n(550642),
    _ = n(567231),
    f = n(522602),
    h = n(287809),
    p = n(174459),
    E = n(453771),
    m = n(927578),
    g = n(382287),
    A = n(652215),
    I = n(381941),
    T = n(788868),
    S = n(375708);
function N(e, t, n) {
    let i = h.default.getCurrentUser(),
        r = e.guild_id,
        s = E.o2(r),
        o = (0, d.R8)({ location: "web.showUploadFileSizeExceededError" }),
        l = (0, d.Jy)(o, s),
        c = Array.from(t).map((e) => e.size),
        _ = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        f = c.reduce((e, t) => e + t, 0),
        p = c.length > 0 ? Math.max(...c) : 0,
        N = c.length;
    if (p > l) {
        let t = n?.reduce((e, t) => e + t, 0);
        (0, u.zV)(A.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: r,
            user_individual_file_size_limit: s,
            pre_compression_file_sizes: c,
            pre_compression_aggregate_file_size: f,
            num_attachments: N,
            error_type: I.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: _,
            post_compression_file_sizes: n,
            post_compression_aggregate_file_size: t,
            kestrel_variant: (0, d.H6)(o),
        }),
            (0, a.openUploadError)({
                title: S.intl.string(S.t["/tGlcj"]),
                help: (0, g.WQ)(i, r),
                showPremiumUpsell: !(0, m.YE)(i, T.PremiumTypes.TIER_2),
                fileSize: p,
            });
        return;
    }
    (0, a.openUploadError)({
        title: S.intl.string(S.t["/tGlcj"]),
        help: S.intl.formatToPlainString(S.t.tUOJdH, { maxSize: E.Hb(E.bB()) }),
    });
}
async function y(e, t, n) {
    let {
        filesMetadata: u,
        requireConfirm: d = !0,
        isThumbnail: h = !1,
        origin: E,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != u && u.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let m = t.getGuildId(),
        T = Array.from(e),
        y = T.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if ((await Promise.resolve(), (0, g.fJ)(T, m))) return void N(t, T);
    if (f.A.getUploadCount(t.id, n) + T.length > A.XgB) {
        (0, a.openUploadError)({
            title: S.intl.string(S.t.wOr6hB),
            help: S.intl.formatToPlainString(S.t["qqyp/e"], { limit: A.XgB }),
        }),
            p.default.track(A.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: f.A.getUploadCount(t.id, n),
                new_count: T.length,
            });
        return;
    }
    if (
        ((t.type !== A.rbe.GUILD_VOICE && t.type !== A.rbe.GUILD_STAGE_VOICE) ||
            c.A.getChatOpen(t.id) ||
            i.A.updateChatOpen(t.id, !0),
        d)
    ) {
        let e = T.map((e, t) => ({
            file: e,
            platform: l.xz.WEB,
            isThumbnail: h,
            origin: E,
            compressionMetadata: y[t],
            ...u?.[t],
        }));
        s.A.addFiles({ files: e, channelId: t.id, draftType: n });
    } else {
        let e = T.map((e, n) => {
            let i = null != u ? u[n] : {};
            return new o.bK(
                { file: e, platform: l.xz.WEB, isThumbnail: h, origin: E, compressionMetadata: y[n], ...i },
                t.id,
            );
        });
        r.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: I.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, n, i) => {
                (0, _.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: i });
            },
        });
    }
}
