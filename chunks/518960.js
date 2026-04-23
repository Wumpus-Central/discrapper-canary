n.d(t, { R: () => S, V: () => C });
var a = n(367513),
    i = n(720149),
    l = n(608299),
    r = n(23658),
    s = n(743445),
    o = n(565150),
    c = n(58149),
    d = n(313961),
    u = n(550642),
    m = n(301169),
    _ = n(522602),
    h = n(287809),
    p = n(954571),
    g = n(453771),
    f = n(927578),
    A = n(382287),
    b = n(652215),
    T = n(381941),
    E = n(788868),
    I = n(985018);
function C(e, t, n) {
    let a = h.default.getCurrentUser(),
        i = e.guild_id,
        l = g.o2(i),
        s = (0, u.R8)({ location: "web.showUploadFileSizeExceededError" }),
        o = (0, u.Jy)(s, l),
        d = Array.from(t).map((e) => e.size),
        m = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        _ = d.reduce((e, t) => e + t, 0),
        p = d.length > 0 ? Math.max(...d) : 0,
        C = d.length;
    if (p > o) {
        let t = n?.reduce((e, t) => e + t, 0);
        (0, c.zV)(b.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: i,
            user_individual_file_size_limit: l,
            pre_compression_file_sizes: d,
            pre_compression_aggregate_file_size: _,
            num_attachments: C,
            error_type: T.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: m,
            post_compression_file_sizes: n,
            post_compression_aggregate_file_size: t,
            kestrel_variant: (0, u.H6)(s),
        }),
            (0, r.openUploadError)({
                title: I.intl.string(I.t["/tGlcj"]),
                help: (0, A.WQ)(a, i),
                showPremiumUpsell: !(0, f.YE)(a, E.PremiumTypes.TIER_2),
                fileSize: p,
            });
        return;
    }
    (0, r.openUploadError)({
        title: I.intl.string(I.t["/tGlcj"]),
        help: I.intl.formatToPlainString(I.t.tUOJdH, { maxSize: g.Hb(g.bB()) }),
    });
}
async function S(e, t, n) {
    let {
        filesMetadata: c,
        requireConfirm: u = !0,
        isThumbnail: h = !1,
        origin: g,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != c && c.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let f = t.getGuildId(),
        E = Array.from(e),
        S = E.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if ((await Promise.resolve(), (0, A.fJ)(E, f))) return void C(t, E);
    if (_.A.getUploadCount(t.id, n) + E.length > b.XgB) {
        (0, r.openUploadError)({
            title: I.intl.string(I.t.wOr6hB),
            help: I.intl.formatToPlainString(I.t["qqyp/e"], { limit: b.XgB }),
        }),
            p.default.track(b.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: _.A.getUploadCount(t.id, n),
                new_count: E.length,
            });
        return;
    }
    if (
        ((t.type !== b.rbe.GUILD_VOICE && t.type !== b.rbe.GUILD_STAGE_VOICE) ||
            d.A.getChatOpen(t.id) ||
            a.A.updateChatOpen(t.id, !0),
        u)
    ) {
        let e = E.map((e, t) => ({
            file: e,
            platform: o.xz.WEB,
            isThumbnail: h,
            origin: g,
            compressionMetadata: S[t],
            ...c?.[t],
        }));
        l.A.addFiles({ files: e, channelId: t.id, draftType: n });
    } else {
        let e = E.map((e, n) => {
            let a = null != c ? c[n] : {};
            return new s.bK(
                { file: e, platform: o.xz.WEB, isThumbnail: h, origin: g, compressionMetadata: S[n], ...a },
                t.id,
            );
        });
        i.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: T.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, n, a) => {
                (0, m.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: a });
            },
        });
    }
}
