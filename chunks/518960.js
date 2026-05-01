"use strict";
n.d(t, { R: () => O, V: () => N });
var i = n(367513),
    r = n(720149),
    s = n(608299),
    a = n(23658),
    o = n(743445),
    l = n(565150),
    _ = n(58149),
    d = n(313961),
    u = n(550642),
    c = n(301169),
    E = n(522602),
    h = n(287809),
    m = n(954571),
    f = n(453771),
    g = n(927578),
    A = n(382287),
    I = n(652215),
    p = n(381941),
    T = n(788868),
    S = n(985018);
function N(e, t, n) {
    let i = h.default.getCurrentUser(),
        r = e.guild_id,
        s = f.o2(r),
        o = (0, u.R8)({ location: "web.showUploadFileSizeExceededError" }),
        l = (0, u.Jy)(o, s),
        d = Array.from(t).map((e) => e.size),
        c = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        E = d.reduce((e, t) => e + t, 0),
        m = d.length > 0 ? Math.max(...d) : 0,
        N = d.length;
    if (m > l) {
        let t = n?.reduce((e, t) => e + t, 0);
        (0, _.zV)(I.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: r,
            user_individual_file_size_limit: s,
            pre_compression_file_sizes: d,
            pre_compression_aggregate_file_size: E,
            num_attachments: N,
            error_type: p.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: c,
            post_compression_file_sizes: n,
            post_compression_aggregate_file_size: t,
            kestrel_variant: (0, u.H6)(o),
        }),
            (0, a.openUploadError)({
                title: S.intl.string(S.t["/tGlcj"]),
                help: (0, A.WQ)(i, r),
                showPremiumUpsell: !(0, g.YE)(i, T.PremiumTypes.TIER_2),
                fileSize: m,
            });
        return;
    }
    (0, a.openUploadError)({
        title: S.intl.string(S.t["/tGlcj"]),
        help: S.intl.formatToPlainString(S.t.tUOJdH, { maxSize: f.Hb(f.bB()) }),
    });
}
async function O(e, t, n) {
    let {
        filesMetadata: _,
        requireConfirm: u = !0,
        isThumbnail: h = !1,
        origin: f,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != _ && _.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let g = t.getGuildId(),
        T = Array.from(e),
        O = T.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if ((await Promise.resolve(), (0, A.fJ)(T, g))) return void N(t, T);
    if (E.A.getUploadCount(t.id, n) + T.length > I.XgB) {
        (0, a.openUploadError)({
            title: S.intl.string(S.t.wOr6hB),
            help: S.intl.formatToPlainString(S.t["qqyp/e"], { limit: I.XgB }),
        }),
            m.default.track(I.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: E.A.getUploadCount(t.id, n),
                new_count: T.length,
            });
        return;
    }
    if (
        ((t.type !== I.rbe.GUILD_VOICE && t.type !== I.rbe.GUILD_STAGE_VOICE) ||
            d.A.getChatOpen(t.id) ||
            i.A.updateChatOpen(t.id, !0),
        u)
    ) {
        let e = T.map((e, t) => ({
            file: e,
            platform: l.xz.WEB,
            isThumbnail: h,
            origin: f,
            compressionMetadata: O[t],
            ..._?.[t],
        }));
        s.A.addFiles({ files: e, channelId: t.id, draftType: n });
    } else {
        let e = T.map((e, n) => {
            let i = null != _ ? _[n] : {};
            return new o.bK(
                { file: e, platform: l.xz.WEB, isThumbnail: h, origin: f, compressionMetadata: O[n], ...i },
                t.id,
            );
        });
        r.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: p.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, n, i) => {
                (0, c.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: i });
            },
        });
    }
}
