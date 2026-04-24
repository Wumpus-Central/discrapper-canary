"use strict";
n.d(t, { R: () => S, V: () => I });
var r = n(367513),
    i = n(720149),
    a = n(608299),
    l = n(23658),
    s = n(743445),
    o = n(565150),
    c = n(58149),
    u = n(313961),
    d = n(550642),
    _ = n(301169),
    p = n(522602),
    f = n(287809),
    h = n(954571),
    m = n(453771),
    g = n(927578),
    b = n(382287),
    A = n(652215),
    E = n(381941),
    v = n(788868),
    y = n(985018);
function I(e, t, n) {
    let r = f.default.getCurrentUser(),
        i = e.guild_id,
        a = m.o2(i),
        s = (0, d.R8)({ location: "web.showUploadFileSizeExceededError" }),
        o = (0, d.Jy)(s, a),
        u = Array.from(t).map((e) => e.size),
        _ = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        p = u.reduce((e, t) => e + t, 0),
        h = u.length > 0 ? Math.max(...u) : 0,
        I = u.length;
    if (h > o) {
        let t = n?.reduce((e, t) => e + t, 0);
        (0, c.zV)(A.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: i,
            user_individual_file_size_limit: a,
            pre_compression_file_sizes: u,
            pre_compression_aggregate_file_size: p,
            num_attachments: I,
            error_type: E.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: _,
            post_compression_file_sizes: n,
            post_compression_aggregate_file_size: t,
            kestrel_variant: (0, d.H6)(s),
        }),
            (0, l.openUploadError)({
                title: y.intl.string(y.t["/tGlcj"]),
                help: (0, b.WQ)(r, i),
                showPremiumUpsell: !(0, g.YE)(r, v.PremiumTypes.TIER_2),
                fileSize: h,
            });
        return;
    }
    (0, l.openUploadError)({
        title: y.intl.string(y.t["/tGlcj"]),
        help: y.intl.formatToPlainString(y.t.tUOJdH, { maxSize: m.Hb(m.bB()) }),
    });
}
async function S(e, t, n) {
    let {
        filesMetadata: c,
        requireConfirm: d = !0,
        isThumbnail: f = !1,
        origin: m,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != c && c.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let g = t.getGuildId(),
        v = Array.from(e),
        S = v.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if ((await Promise.resolve(), (0, b.fJ)(v, g))) return void I(t, v);
    if (p.A.getUploadCount(t.id, n) + v.length > A.XgB) {
        (0, l.openUploadError)({
            title: y.intl.string(y.t.wOr6hB),
            help: y.intl.formatToPlainString(y.t["qqyp/e"], { limit: A.XgB }),
        }),
            h.default.track(A.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: p.A.getUploadCount(t.id, n),
                new_count: v.length,
            });
        return;
    }
    if (
        ((t.type !== A.rbe.GUILD_VOICE && t.type !== A.rbe.GUILD_STAGE_VOICE) ||
            u.A.getChatOpen(t.id) ||
            r.A.updateChatOpen(t.id, !0),
        d)
    ) {
        let e = v.map((e, t) => ({
            file: e,
            platform: o.xz.WEB,
            isThumbnail: f,
            origin: m,
            compressionMetadata: S[t],
            ...c?.[t],
        }));
        a.A.addFiles({ files: e, channelId: t.id, draftType: n });
    } else {
        let e = v.map((e, n) => {
            let r = null != c ? c[n] : {};
            return new s.bK(
                { file: e, platform: o.xz.WEB, isThumbnail: f, origin: m, compressionMetadata: S[n], ...r },
                t.id,
            );
        });
        i.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: E.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, n, r) => {
                (0, _.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: r });
            },
        });
    }
}
