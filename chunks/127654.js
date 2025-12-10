n.d(t, {
    G: () => I,
    d: () => T,
}),
    n(388685),
    n(415506);
var r = n(475179),
    i = n(904245),
    a = n(166459),
    o = n(531643),
    s = n(141795),
    l = n(476326),
    c = n(367907),
    u = n(358221),
    d = n(58873),
    f = n(117530),
    p = n(594174),
    _ = n(626135),
    m = n(403182),
    h = n(74538),
    g = n(979956),
    E = n(981631),
    b = n(959517),
    y = n(474936),
    O = n(388032);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t, n) {
    let r = p.default.getCurrentUser(),
        i = e.guild_id,
        a = m.dg(i),
        s = Array.from(t).map((e) => e.size),
        l = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        u = s.reduce((e, t) => e + t, 0),
        d = s.length > 0 ? Math.max(...s) : 0,
        f = s.length;
    if (d > a) {
        let t = null == n ? void 0 : n.reduce((e, t) => e + t, 0);
        (0, c.yw)(E.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: i,
            user_individual_file_size_limit: a,
            pre_compression_file_sizes: s,
            pre_compression_aggregate_file_size: u,
            num_attachments: f,
            error_type: b.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: l,
            post_compression_file_sizes: n,
            post_compression_aggregate_file_size: t,
        }),
            (0, o.openUploadError)({
                title: O.intl.string(O.t["/tGlcj"]),
                help: (0, g.BK)(r, i),
                showPremiumUpsell: !(0, h.M5)(r, y.PremiumTypes.TIER_2),
                fileSize: d,
            });
        return;
    }
    (0, o.openUploadError)({
        title: O.intl.string(O.t["/tGlcj"]),
        help: O.intl.formatToPlainString(O.t.tUOJdH, { maxSize: m.Ng(m.OC()) }),
    });
}
async function T(e, t, n) {
    let {
        filesMetadata: c,
        requireConfirm: p = !0,
        showLargeMessageDialog: m = !1,
        isThumbnail: h = !1,
        origin: y,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != c && c.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let v = t.getGuildId(),
        T = Array.from(e),
        C = T.map((e) => ({
            originalContentType: e.type,
            preCompressionSize: e.size,
        }));
    if ((await Promise.resolve(), (0, g.Bf)(T, v))) return void I(t, T);
    if (f.Z.getUploadCount(t.id, n) + T.length > E.dN1) {
        (0, o.openUploadError)({
            title: O.intl.string(O.t.wOr6hB),
            help: O.intl.formatToPlainString(O.t["qqyp/e"], { limit: E.dN1 }),
        }),
            _.default.track(E.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: f.Z.getUploadCount(t.id, n),
                new_count: T.length,
            });
        return;
    }
    if (
        ((t.type !== E.d4z.GUILD_VOICE && t.type !== E.d4z.GUILD_STAGE_VOICE) ||
            u.Z.getChatOpen(t.id) ||
            r.Z.updateChatOpen(t.id, !0),
        p)
    ) {
        let e = T.map((e, t) =>
            S(
                {
                    file: e,
                    platform: l.ow.WEB,
                    isThumbnail: h,
                    origin: y,
                    compressionMetadata: C[t],
                },
                null == c ? void 0 : c[t],
            ),
        );
        a.Z.addFiles({
            files: e,
            channelId: t.id,
            showLargeMessageDialog: m,
            draftType: n,
        });
    } else {
        let e = T.map((e, n) => {
            let r = null != c ? c[n] : {};
            return new s.nH(
                S(
                    {
                        file: e,
                        platform: l.ow.WEB,
                        isThumbnail: h,
                        origin: y,
                        compressionMetadata: C[n],
                    },
                    r,
                ),
                t.id,
            );
        });
        i.Z.sendMessage(
            t.id,
            {
                content: "",
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: [],
            },
            void 0,
            {
                eagerDispatch: !1,
                attachmentsToUpload: e,
                location: b.dy.INSTANT_UPLOAD,
                onAttachmentUploadError: (e, n, r) => {
                    (0, d.A)({
                        file: e,
                        guildId: t.getGuildId(),
                        analyticsLocations: [],
                        code: n,
                        reason: r,
                    });
                },
            },
        );
    }
}
