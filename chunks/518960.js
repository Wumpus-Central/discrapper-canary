"use strict";
r.d(t, { R: () => v, V: () => I });
var i = r(367513),
    a = r(843472),
    n = r(608299),
    l = r(23658),
    s = r(743445),
    o = r(565150),
    c = r(58149),
    d = r(313961),
    u = r(301169),
    _ = r(522602),
    p = r(287809),
    h = r(954571),
    f = r(453771),
    m = r(927578),
    g = r(382287),
    b = r(652215),
    A = r(381941),
    E = r(788868),
    T = r(985018);
function I(e, t, r) {
    let i = p.default.getCurrentUser(),
        a = e.guild_id,
        n = f.o2(a),
        s = Array.from(t).map((e) => e.size),
        o = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        d = s.reduce((e, t) => e + t, 0),
        u = s.length > 0 ? Math.max(...s) : 0,
        _ = s.length;
    if (u > n) {
        let t = r?.reduce((e, t) => e + t, 0);
        (0, c.zV)(b.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: a,
            user_individual_file_size_limit: n,
            pre_compression_file_sizes: s,
            pre_compression_aggregate_file_size: d,
            num_attachments: _,
            error_type: A.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: o,
            post_compression_file_sizes: r,
            post_compression_aggregate_file_size: t,
        }),
            (0, l.openUploadError)({
                title: T.intl.string(T.t["/tGlcj"]),
                help: (0, g.WQ)(i, a),
                showPremiumUpsell: !(0, m.YE)(i, E.PremiumTypes.TIER_2),
                fileSize: u,
            });
        return;
    }
    (0, l.openUploadError)({
        title: T.intl.string(T.t["/tGlcj"]),
        help: T.intl.formatToPlainString(T.t.tUOJdH, { maxSize: f.Hb(f.bB()) }),
    });
}
async function v(e, t, r) {
    let {
        filesMetadata: c,
        requireConfirm: p = !0,
        isThumbnail: f = !1,
        origin: m,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != c && c.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let E = t.getGuildId(),
        v = Array.from(e),
        x = v.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if ((await Promise.resolve(), (0, g.fJ)(v, E))) return void I(t, v);
    if (_.A.getUploadCount(t.id, r) + v.length > b.XgB) {
        (0, l.openUploadError)({
            title: T.intl.string(T.t.wOr6hB),
            help: T.intl.formatToPlainString(T.t["qqyp/e"], { limit: b.XgB }),
        }),
            h.default.track(b.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: _.A.getUploadCount(t.id, r),
                new_count: v.length,
            });
        return;
    }
    if (
        ((t.type !== b.rbe.GUILD_VOICE && t.type !== b.rbe.GUILD_STAGE_VOICE) ||
            d.A.getChatOpen(t.id) ||
            i.A.updateChatOpen(t.id, !0),
        p)
    ) {
        let e = v.map((e, t) => ({
            file: e,
            platform: o.xz.WEB,
            isThumbnail: f,
            origin: m,
            compressionMetadata: x[t],
            ...c?.[t],
        }));
        n.A.addFiles({ files: e, channelId: t.id, draftType: r });
    } else {
        let e = v.map((e, r) => {
            let i = null != c ? c[r] : {};
            return new s.bK(
                { file: e, platform: o.xz.WEB, isThumbnail: f, origin: m, compressionMetadata: x[r], ...i },
                t.id,
            );
        });
        a.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: A.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, r, i) => {
                (0, u.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: r, reason: i });
            },
        });
    }
}
