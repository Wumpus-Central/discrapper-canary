i.d(t, { R: () => v, V: () => N });
var n = i(367513),
    l = i(843472),
    a = i(608299),
    r = i(23658),
    o = i(743445),
    s = i(565150),
    u = i(58149),
    d = i(313961),
    c = i(301169),
    h = i(522602),
    m = i(287809),
    p = i(954571),
    g = i(453771),
    A = i(927578),
    f = i(382287),
    T = i(652215),
    E = i(381941),
    I = i(788868),
    x = i(985018);
function N(e, t, i) {
    let n = m.default.getCurrentUser(),
        l = e.guild_id,
        a = g.o2(l),
        o = Array.from(t).map((e) => e.size),
        s = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        d = o.reduce((e, t) => e + t, 0),
        c = o.length > 0 ? Math.max(...o) : 0,
        h = o.length;
    if (c > a) {
        let t = i?.reduce((e, t) => e + t, 0);
        (0, u.zV)(T.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: l,
            user_individual_file_size_limit: a,
            pre_compression_file_sizes: o,
            pre_compression_aggregate_file_size: d,
            num_attachments: h,
            error_type: E.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: s,
            post_compression_file_sizes: i,
            post_compression_aggregate_file_size: t,
        }),
            (0, r.openUploadError)({
                title: x.intl.string(x.t["/tGlcj"]),
                help: (0, f.WQ)(n, l),
                showPremiumUpsell: !(0, A.YE)(n, I.PremiumTypes.TIER_2),
                fileSize: c,
            });
        return;
    }
    (0, r.openUploadError)({
        title: x.intl.string(x.t["/tGlcj"]),
        help: x.intl.formatToPlainString(x.t.tUOJdH, { maxSize: g.Hb(g.bB()) }),
    });
}
async function v(e, t, i) {
    let {
        filesMetadata: u,
        requireConfirm: m = !0,
        isThumbnail: g = !1,
        origin: A,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != u && u.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let I = t.getGuildId(),
        v = Array.from(e),
        R = v.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if ((await Promise.resolve(), (0, f.fJ)(v, I))) return void N(t, v);
    if (h.A.getUploadCount(t.id, i) + v.length > T.XgB) {
        (0, r.openUploadError)({
            title: x.intl.string(x.t.wOr6hB),
            help: x.intl.formatToPlainString(x.t["qqyp/e"], { limit: T.XgB }),
        }),
            p.default.track(T.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: h.A.getUploadCount(t.id, i),
                new_count: v.length,
            });
        return;
    }
    if (
        ((t.type !== T.rbe.GUILD_VOICE && t.type !== T.rbe.GUILD_STAGE_VOICE) ||
            d.A.getChatOpen(t.id) ||
            n.A.updateChatOpen(t.id, !0),
        m)
    ) {
        let e = v.map((e, t) => ({
            file: e,
            platform: s.xz.WEB,
            isThumbnail: g,
            origin: A,
            compressionMetadata: R[t],
            ...u?.[t],
        }));
        a.A.addFiles({ files: e, channelId: t.id, draftType: i });
    } else {
        let e = v.map((e, i) => {
            let n = null != u ? u[i] : {};
            return new o.bK(
                { file: e, platform: s.xz.WEB, isThumbnail: g, origin: A, compressionMetadata: R[i], ...n },
                t.id,
            );
        });
        l.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: E.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, i, n) => {
                (0, c.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: i, reason: n });
            },
        });
    }
}
