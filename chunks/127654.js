n.d(t, {
    G: () => T,
    d: () => S,
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
    _ = n(594174),
    p = n(626135),
    h = n(403182),
    m = n(74538),
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
function I(e) {
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
function T(e, t, n) {
    let r = _.default.getCurrentUser(),
        i = e.guild_id,
        a = h.dg(i),
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
                title: O.intl.string(O.t["/tGlcn"]),
                help: (0, g.BK)(r, i),
                showPremiumUpsell: !(0, m.M5)(r, y.p9.TIER_2),
                fileSize: d,
            });
        return;
    }
    (0, o.openUploadError)({
        title: O.intl.string(O.t["/tGlcn"]),
        help: O.intl.formatToPlainString(O.t.tUOJdH, { maxSize: h.Ng(h.OC()) }),
    });
}
function S(e, t, n) {
    let {
        filesMetadata: c,
        requireConfirm: _ = !0,
        showLargeMessageDialog: h = !1,
        isThumbnail: m = !1,
        origin: y,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != c && c.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let v = t.getGuildId(),
        S = Array.from(e);
    if ((0, g.Bf)(S, v)) return void T(t, S);
    if (f.Z.getUploadCount(t.id, n) + S.length > E.dN1) {
        (0, o.openUploadError)({
            title: O.intl.string(O.t.wOr6hI),
            help: O.intl.formatToPlainString(O.t["qqyp/f"], { limit: E.dN1 }),
        }),
            p.default.track(E.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: f.Z.getUploadCount(t.id, n),
                new_count: S.length,
            });
        return;
    }
    if (
        ((t.type !== E.d4z.GUILD_VOICE && t.type !== E.d4z.GUILD_STAGE_VOICE) ||
            u.Z.getChatOpen(t.id) ||
            r.Z.updateChatOpen(t.id, !0),
        _)
    ) {
        let e = S.map((e, t) =>
            I(
                {
                    file: e,
                    platform: l.ow.WEB,
                    isThumbnail: m,
                    origin: y,
                },
                null == c ? void 0 : c[t],
            ),
        );
        a.Z.addFiles({
            files: e,
            channelId: t.id,
            showLargeMessageDialog: h,
            draftType: n,
        });
    } else {
        let e = S.map((e, n) => {
            let r = null != c ? c[n] : {};
            return new s.nH(
                I(
                    {
                        file: e,
                        platform: l.ow.WEB,
                        isThumbnail: m,
                        origin: y,
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
