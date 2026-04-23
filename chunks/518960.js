n.d(t, { R: () => b, V: () => C });
var i = n(367513),
    l = n(843472),
    s = n(608299),
    a = n(23658),
    r = n(743445),
    o = n(565150),
    d = n(58149),
    c = n(313961),
    u = n(301169),
    h = n(522602),
    A = n(287809),
    _ = n(954571),
    m = n(453771),
    g = n(927578),
    p = n(382287),
    f = n(652215),
    E = n(381941),
    x = n(788868),
    I = n(985018);
function C(e, t, n) {
    let i = A.default.getCurrentUser(),
        l = e.guild_id,
        s = m.o2(l),
        r = Array.from(t).map((e) => e.size),
        o = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        c = r.reduce((e, t) => e + t, 0),
        u = r.length > 0 ? Math.max(...r) : 0,
        h = r.length;
    if (u > s) {
        let t = n?.reduce((e, t) => e + t, 0);
        (0, d.zV)(f.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: l,
            user_individual_file_size_limit: s,
            pre_compression_file_sizes: r,
            pre_compression_aggregate_file_size: c,
            num_attachments: h,
            error_type: E.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: o,
            post_compression_file_sizes: n,
            post_compression_aggregate_file_size: t,
        }),
            (0, a.openUploadError)({
                title: I.intl.string(I.t["/tGlcj"]),
                help: (0, p.WQ)(i, l),
                showPremiumUpsell: !(0, g.YE)(i, x.PremiumTypes.TIER_2),
                fileSize: u,
            });
        return;
    }
    (0, a.openUploadError)({
        title: I.intl.string(I.t["/tGlcj"]),
        help: I.intl.formatToPlainString(I.t.tUOJdH, { maxSize: m.Hb(m.bB()) }),
    });
}
async function b(e, t, n) {
    let {
        filesMetadata: d,
        requireConfirm: A = !0,
        isThumbnail: m = !1,
        origin: g,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != d && d.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let x = t.getGuildId(),
        b = Array.from(e),
        N = b.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if ((await Promise.resolve(), (0, p.fJ)(b, x))) return void C(t, b);
    if (h.A.getUploadCount(t.id, n) + b.length > f.XgB) {
        (0, a.openUploadError)({
            title: I.intl.string(I.t.wOr6hB),
            help: I.intl.formatToPlainString(I.t["qqyp/e"], { limit: f.XgB }),
        }),
            _.default.track(f.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: h.A.getUploadCount(t.id, n),
                new_count: b.length,
            });
        return;
    }
    if (
        ((t.type !== f.rbe.GUILD_VOICE && t.type !== f.rbe.GUILD_STAGE_VOICE) ||
            c.A.getChatOpen(t.id) ||
            i.A.updateChatOpen(t.id, !0),
        A)
    ) {
        let e = b.map((e, t) => ({
            file: e,
            platform: o.xz.WEB,
            isThumbnail: m,
            origin: g,
            compressionMetadata: N[t],
            ...d?.[t],
        }));
        s.A.addFiles({ files: e, channelId: t.id, draftType: n });
    } else {
        let e = b.map((e, n) => {
            let i = null != d ? d[n] : {};
            return new r.bK(
                { file: e, platform: o.xz.WEB, isThumbnail: m, origin: g, compressionMetadata: N[n], ...i },
                t.id,
            );
        });
        l.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: E.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, n, i) => {
                (0, u.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: i });
            },
        });
    }
}
