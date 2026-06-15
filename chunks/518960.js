i.d(t, { R: () => U, V: () => S });
var r = i(367513),
    n = i(720149),
    l = i(608299),
    a = i(494921),
    o = i(417325),
    s = i(565150),
    d = i(95561),
    p = i(313961),
    m = i(550642),
    u = i(567231),
    _ = i(522602),
    c = i(287809),
    f = i(174459),
    g = i(453771),
    h = i(428262),
    E = i(382287),
    A = i(652215),
    y = i(381941),
    T = i(788868),
    I = i(375708);
function S(e, t, i) {
    let r = c.default.getCurrentUser(),
        n = e.guild_id,
        l = g.o2(n),
        o = (0, m.R8)({ location: "web.showUploadFileSizeExceededError" }),
        s = (0, m.Jy)(o, l),
        p = Array.from(t).map((e) => e.size),
        u = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        _ = p.reduce((e, t) => e + t, 0),
        f = p.length > 0 ? Math.max(...p) : 0,
        S = p.length;
    if (f > s) {
        let t = i?.reduce((e, t) => e + t, 0);
        (0, d.zV)(A.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: n,
            user_individual_file_size_limit: l,
            pre_compression_file_sizes: p,
            pre_compression_aggregate_file_size: _,
            num_attachments: S,
            error_type: y.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: u,
            post_compression_file_sizes: i,
            post_compression_aggregate_file_size: t,
            kestrel_variant: (0, m.H6)(o),
        }),
            (0, a.openUploadError)({
                title: I.intl.string(I.t["/tGlcj"]),
                help: (0, E.WQ)(r, n, o.enabled ? s : void 0),
                showPremiumUpsell: !(0, h.YE)(r, T.PremiumTypes.TIER_2),
                fileSize: f,
                kestrelTreated: o.enabled,
                effectiveMaxSize: o.enabled ? s : void 0,
            });
        return;
    }
    (0, a.openUploadError)({
        title: I.intl.string(I.t["/tGlcj"]),
        help: I.intl.formatToPlainString(I.t.tUOJdH, { maxSize: g.Hb(g.bB()) }),
        kestrelTreated: o.enabled,
    });
}
async function U(e, t, i) {
    let {
        filesMetadata: d,
        requireConfirm: m = !0,
        isThumbnail: c = !1,
        origin: g,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != d && d.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let h = t.getGuildId(),
        T = Array.from(e),
        U = T.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if ((await Promise.resolve(), (0, E.fJ)(T, h))) return void S(t, T);
    if (_.A.getUploadCount(t.id, i) + T.length > A.XgB) {
        (0, a.openUploadError)({
            title: I.intl.string(I.t.wOr6hB),
            help: I.intl.formatToPlainString(I.t["qqyp/e"], { limit: A.XgB }),
        }),
            f.default.track(A.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: _.A.getUploadCount(t.id, i),
                new_count: T.length,
            });
        return;
    }
    if (
        ((t.type !== A.rbe.GUILD_VOICE && t.type !== A.rbe.GUILD_STAGE_VOICE) ||
            p.A.getChatOpen(t.id) ||
            r.A.updateChatOpen(t.id, !0),
        m)
    ) {
        let e = T.map((e, t) => ({
            file: e,
            platform: s.xz.WEB,
            isThumbnail: c,
            origin: g,
            compressionMetadata: U[t],
            ...d?.[t],
        }));
        l.A.addFiles({ files: e, channelId: t.id, draftType: i });
    } else {
        let e = T.map((e, i) => {
            let r = null != d ? d[i] : {};
            return new o.bK(
                { file: e, platform: s.xz.WEB, isThumbnail: c, origin: g, compressionMetadata: U[i], ...r },
                t.id,
            );
        });
        n.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: y.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, i, r) => {
                (0, u.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: i, reason: r });
            },
        });
    }
}
