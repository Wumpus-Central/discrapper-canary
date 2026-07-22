"use strict";
n.d(t, { R: () => O, V: () => C });
var i = n(367513),
    r = n(493336),
    a = n(608299),
    s = n(494921),
    l = n(280889),
    o = n(565150),
    d = n(95561),
    c = n(313961),
    u = n(795129),
    _ = n(550642),
    E = n(567231),
    A = n(522602),
    h = n(287809),
    I = n(174459),
    f = n(453771),
    p = n(428262),
    T = n(382287),
    m = n(652215),
    g = n(381941),
    S = n(202541),
    N = n(375708);
function C(e, t, n) {
    let i = h.default.getCurrentUser(),
        r = e.guild_id,
        a = f.o2(r),
        l = (0, _.R8)({ location: "web.showUploadFileSizeExceededError" }),
        o = (0, _.Jy)(l, a),
        c = Array.from(t).map((e) => e.size),
        u = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        E = c.reduce((e, t) => e + t, 0),
        A = c.length > 0 ? Math.max(...c) : 0,
        I = c.length;
    if (A > o) {
        let t = n?.reduce((e, t) => e + t, 0);
        (0, d.zV)(m.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: r,
            user_individual_file_size_limit: a,
            pre_compression_file_sizes: c,
            pre_compression_aggregate_file_size: E,
            num_attachments: I,
            error_type: g.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: u,
            post_compression_file_sizes: n,
            post_compression_aggregate_file_size: t,
            kestrel_variant: (0, _.H6)(l),
        }),
            (0, s.openUploadError)({
                title: N.intl.string(N.t["/tGlcj"]),
                help: (0, T.WQ)(i, r, l.enabled ? o : void 0),
                showPremiumUpsell: !(0, p.YE)(i, S.PremiumTypes.TIER_2),
                fileSize: A,
                kestrelTreated: l.enabled,
                effectiveMaxSize: l.enabled ? o : void 0,
            });
        return;
    }
    (0, s.openUploadError)({
        title: N.intl.string(N.t["/tGlcj"]),
        help: N.intl.formatToPlainString(N.t.tUOJdH, { maxSize: f.Hb(f.bB()) }),
        kestrelTreated: l.enabled,
    });
}
async function O(e, t, n) {
    let {
        filesMetadata: d,
        requireConfirm: _ = !0,
        isThumbnail: h = !1,
        origin: f,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != d && d.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let p = t.getGuildId(),
        S = Array.from(e),
        O = S.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if (
        (await Promise.resolve(),
        (await Promise.all(S.map(async (e) => !(e.size > 0) && (await (0, u._)(e)) === 0))).some(Boolean))
    )
        return void (0, s.openUploadError)({ title: N.intl.string(N.t.B3vFdU), help: N.intl.string(N.t["9ZpT2C"]) });
    if ((0, T.fJ)(S, p)) return void C(t, S);
    if (A.A.getUploadCount(t.id, n) + S.length > m.XgB) {
        (0, s.openUploadError)({
            title: N.intl.string(N.t.wOr6hB),
            help: N.intl.formatToPlainString(N.t["qqyp/e"], { limit: m.XgB }),
        }),
            I.default.track(m.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: A.A.getUploadCount(t.id, n),
                new_count: S.length,
            });
        return;
    }
    if (
        ((t.type !== m.rbe.GUILD_VOICE && t.type !== m.rbe.GUILD_STAGE_VOICE) ||
            c.A.getChatOpen(t.id) ||
            i.A.updateChatOpen(t.id, !0),
        _)
    ) {
        let e = S.map((e, t) => ({
            file: e,
            platform: o.xz.WEB,
            isThumbnail: h,
            origin: f,
            compressionMetadata: O[t],
            ...d?.[t],
        }));
        a.A.addFiles({ files: e, channelId: t.id, draftType: n });
    } else {
        let e = S.map((e, n) => {
            let i = null != d ? d[n] : {};
            return new l.bK(
                { file: e, platform: o.xz.WEB, isThumbnail: h, origin: f, compressionMetadata: O[n], ...i },
                t.id,
            );
        });
        r.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: g.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, n, i) => {
                (0, E.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: i });
            },
        });
    }
}
