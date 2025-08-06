n.d(t, {
    G: () => T,
    d: () => S,
}),
    n(539854),
    n(388685),
    n(415506);
var r = n(475179),
    i = n(904245),
    o = n(166459),
    a = n(531643),
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
function T(e, t) {
    let n = _.default.getCurrentUser(),
        r = e.getGuildId(),
        i = h.dg(r),
        o = [],
        s = 0,
        l = 0,
        u = 0,
        d = [];
    for (let e of t)
        (u += 1),
            (s += e.size),
            o.push(e.size),
            e.size > l && (l = e.size),
            null != e.type ? d.push(e.type) : d.push("unknown");
    if (l > i) {
        (0, c.yw)(E.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: r,
            user_individual_file_size_limit: i,
            pre_compression_file_sizes: o,
            pre_compression_aggregate_file_size: s,
            num_attachments: u,
            error_type: b.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: d,
        }),
            (0, a.openUploadError)({
                title: O.intl.string(O.t["/tGlcn"]),
                help: (0, g.BK)(n, r),
                showPremiumUpsell: !(0, m.M5)(n, y.p9.TIER_2),
                fileSize: l,
            });
        return;
    }
    (0, a.openUploadError)({
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
        origin: b,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != c && c.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let y = t.getGuildId();
    if ((0, g.Bf)(e, y)) return void T(t, e);
    if (f.Z.getUploadCount(t.id, n) + e.length > E.dN1) {
        (0, a.openUploadError)({
            title: O.intl.string(O.t.wOr6hI),
            help: O.intl.formatToPlainString(O.t["qqyp/f"], { limit: E.dN1 }),
        }),
            p.default.track(E.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: f.Z.getUploadCount(t.id, n),
                new_count: e.length,
            });
        return;
    }
    if (
        ((t.type !== E.d4z.GUILD_VOICE && t.type !== E.d4z.GUILD_STAGE_VOICE) ||
            u.Z.getChatOpen(t.id) ||
            r.Z.updateChatOpen(t.id, !0),
        _)
    ) {
        let r = Array.from(e).map((e, t) =>
            I(
                {
                    file: e,
                    platform: l.ow.WEB,
                    isThumbnail: m,
                    origin: b,
                },
                null == c ? void 0 : c[t],
            ),
        );
        o.Z.addFiles({
            files: r,
            channelId: t.id,
            showLargeMessageDialog: h,
            draftType: n,
        });
    } else {
        let n = Array.from(e).map((e, n) => {
            let r = null != c ? c[n] : {};
            return new s.nH(
                I(
                    {
                        file: e,
                        platform: l.ow.WEB,
                        isThumbnail: m,
                        origin: b,
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
                attachmentsToUpload: n,
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
