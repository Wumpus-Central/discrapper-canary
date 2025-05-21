n.d(t, {
    G: () => v,
    d: () => j
}),
    n(539854),
    n(388685),
    n(415506);
var r = n(475179),
    i = n(166459),
    l = n(966390),
    a = n(531643),
    o = n(141795),
    s = n(476326),
    c = n(367907),
    u = n(358221),
    d = n(117530),
    p = n(594174),
    h = n(626135),
    f = n(403182),
    m = n(74538),
    g = n(979956),
    b = n(981631),
    _ = n(959517),
    x = n(474936),
    C = n(388032);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e, t) {
    let n = p.default.getCurrentUser(),
        r = e.getGuildId(),
        i = f.dg(r),
        l = [],
        o = 0,
        s = 0,
        u = 0,
        d = [];
    for (let e of t) (u += 1), (o += e.size), l.push(e.size), e.size > s && (s = e.size), null != e.type ? d.push(e.type) : d.push('unknown');
    if (s > i) {
        (0, c.yw)(b.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: r,
            user_individual_file_size_limit: i,
            pre_compression_file_sizes: l,
            pre_compression_aggregate_file_size: o,
            num_attachments: u,
            error_type: _.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: d
        }),
            (0, a.openUploadError)({
                title: C.intl.string(C.t['/tGlcn']),
                help: (0, g.BK)(n, r),
                showPremiumUpsell: !(0, m.M5)(n, x.p9.TIER_2),
                fileSize: s
            });
        return;
    }
    (0, a.openUploadError)({
        title: C.intl.string(C.t['/tGlcn']),
        help: C.intl.formatToPlainString(C.t.tUOJdH, { maxSize: f.Ng(f.OC()) })
    });
}
function j(e, t, n) {
    let { filesMetadata: c, requireConfirm: p = !0, showLargeMessageDialog: f = !1, isThumbnail: m = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != c && c.length !== e.length) throw Error('Unexpected mismatch between files and file metadata');
    let _ = t.getGuildId();
    if ((0, g.Bf)(e, _)) return void v(t, e);
    if (d.Z.getUploadCount(t.id, n) + e.length > b.dN1) {
        (0, a.openUploadError)({
            title: C.intl.string(C.t.wOr6hI),
            help: C.intl.formatToPlainString(C.t['qqyp/f'], { limit: b.dN1 })
        }),
            h.default.track(b.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: d.Z.getUploadCount(t.id, n),
                new_count: e.length
            });
        return;
    }
    if (((t.type !== b.d4z.GUILD_VOICE && t.type !== b.d4z.GUILD_STAGE_VOICE) || u.Z.getChatOpen(t.id) || r.Z.updateChatOpen(t.id, !0), p)) {
        let r = Array.from(e).map((e, t) =>
            y(
                {
                    file: e,
                    platform: s.ow.WEB,
                    isThumbnail: m
                },
                null == c ? void 0 : c[t]
            )
        );
        i.Z.addFiles({
            files: r,
            channelId: t.id,
            showLargeMessageDialog: f,
            draftType: n
        });
    } else {
        let r = Array.from(e).map((e, n) => {
            let r = null != c ? c[n] : {};
            return new o.n(
                y(
                    {
                        file: e,
                        platform: s.ow.WEB,
                        isThumbnail: m
                    },
                    r
                ),
                t.id
            );
        });
        l.Z.uploadFiles({
            channelId: t.id,
            uploads: r,
            draftType: n
        });
    }
}
