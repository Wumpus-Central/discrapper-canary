"use strict";
n.d(t, { R: () => y, V: () => C });
var i = n(367513),
    r = n(493336),
    s = n(608299),
    a = n(494921),
    o = n(280889),
    l = n(565150),
    u = n(95561),
    c = n(313961),
    d = n(795129),
    _ = n(550642),
    h = n(567231),
    f = n(522602),
    E = n(287809),
    p = n(174459),
    m = n(453771),
    g = n(428262),
    A = n(382287),
    I = n(652215),
    T = n(381941),
    S = n(202541),
    N = n(375708);
function C(e, t, n) {
    let i = E.default.getCurrentUser(),
        r = e.guild_id,
        s = m.o2(r),
        o = (0, _.R8)({ location: "web.showUploadFileSizeExceededError" }),
        l = (0, _.Jy)(o, s),
        c = Array.from(t).map((e) => e.size),
        d = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        h = c.reduce((e, t) => e + t, 0),
        f = c.length > 0 ? Math.max(...c) : 0,
        p = c.length;
    if (f > l) {
        let t = n?.reduce((e, t) => e + t, 0);
        (0, u.zV)(I.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: r,
            user_individual_file_size_limit: s,
            pre_compression_file_sizes: c,
            pre_compression_aggregate_file_size: h,
            num_attachments: p,
            error_type: T.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: d,
            post_compression_file_sizes: n,
            post_compression_aggregate_file_size: t,
            kestrel_variant: (0, _.H6)(o),
        }),
            (0, a.openUploadError)({
                title: N.intl.string(N.t["/tGlcj"]),
                help: (0, A.WQ)(i, r, o.enabled ? l : void 0),
                showPremiumUpsell: !(0, g.YE)(i, S.PremiumTypes.TIER_2),
                fileSize: f,
                kestrelTreated: o.enabled,
                effectiveMaxSize: o.enabled ? l : void 0,
            });
        return;
    }
    (0, a.openUploadError)({
        title: N.intl.string(N.t["/tGlcj"]),
        help: N.intl.formatToPlainString(N.t.tUOJdH, { maxSize: m.Hb(m.bB()) }),
        kestrelTreated: o.enabled,
    });
}
async function y(e, t, n) {
    let {
        filesMetadata: u,
        requireConfirm: _ = !0,
        isThumbnail: E = !1,
        origin: m,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != u && u.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let g = t.getGuildId(),
        S = Array.from(e),
        y = S.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if (
        (await Promise.resolve(),
        (await Promise.all(S.map(async (e) => !(e.size > 0) && (await (0, d._)(e)) === 0))).some(Boolean))
    )
        return void (0, a.openUploadError)({ title: N.intl.string(N.t.B3vFdU), help: N.intl.string(N.t["9ZpT2C"]) });
    if ((0, A.fJ)(S, g)) return void C(t, S);
    if (f.A.getUploadCount(t.id, n) + S.length > I.XgB) {
        (0, a.openUploadError)({
            title: N.intl.string(N.t.wOr6hB),
            help: N.intl.formatToPlainString(N.t["qqyp/e"], { limit: I.XgB }),
        }),
            p.default.track(I.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: f.A.getUploadCount(t.id, n),
                new_count: S.length,
            });
        return;
    }
    if (
        ((t.type !== I.rbe.GUILD_VOICE && t.type !== I.rbe.GUILD_STAGE_VOICE) ||
            c.A.getChatOpen(t.id) ||
            i.A.updateChatOpen(t.id, !0),
        _)
    ) {
        let e = S.map((e, t) => ({
            file: e,
            platform: l.xz.WEB,
            isThumbnail: E,
            origin: m,
            compressionMetadata: y[t],
            ...u?.[t],
        }));
        s.A.addFiles({ files: e, channelId: t.id, draftType: n });
    } else {
        let e = S.map((e, n) => {
            let i = null != u ? u[n] : {};
            return new o.bK(
                { file: e, platform: l.xz.WEB, isThumbnail: E, origin: m, compressionMetadata: y[n], ...i },
                t.id,
            );
        });
        r.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: T.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, n, i) => {
                (0, h.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: i });
            },
        });
    }
}
