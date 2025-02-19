n.d(t, {
    G: () => v,
    d: () => y
}),
    n(653041),
    n(47120),
    n(411104);
var r = n(475179),
    i = n(166459),
    l = n(966390),
    o = n(531643),
    a = n(476326),
    s = n(367907),
    c = n(358221),
    u = n(117530),
    d = n(594174),
    p = n(626135),
    h = n(403182),
    f = n(74538),
    m = n(979956),
    g = n(981631),
    b = n(959517),
    _ = n(474936),
    C = n(388032);
function v(e, t) {
    let n = d.default.getCurrentUser(),
        r = e.getGuildId(),
        i = h.dg(r),
        l = [],
        a = 0,
        c = 0,
        u = 0,
        p = [];
    for (let e of t) (u += 1), (a += e.size), l.push(e.size), e.size > c && (c = e.size), null != e.type ? p.push(e.type) : p.push('unknown');
    if (c > i) {
        (0, s.yw)(g.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: r,
            user_individual_file_size_limit: i,
            pre_compression_file_sizes: l,
            pre_compression_aggregate_file_size: a,
            num_attachments: u,
            error_type: b.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: p
        }),
            (0, o.openUploadError)({
                title: C.NW.string(C.t['/tGlcn']),
                help: (0, m.BK)(n, r),
                showPremiumUpsell: !(0, f.M5)(n, _.p9.TIER_2),
                fileSize: c
            });
        return;
    }
    (0, o.openUploadError)({
        title: C.NW.string(C.t['/tGlcn']),
        help: C.NW.formatToPlainString(C.t.tUOJdH, { maxSize: h.Ng(h.OC()) })
    });
}
function y(e, t, n) {
    let { filesMetadata: s, requireConfirm: d = !0, showLargeMessageDialog: h = !1, isThumbnail: f = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != s && s.length !== e.length) throw Error('Unexpected mismatch between files and file metadata');
    let b = t.getGuildId();
    if ((0, m.Bf)(e, b)) {
        v(t, e);
        return;
    }
    if (u.Z.getUploadCount(t.id, n) + e.length > g.dN1) {
        (0, o.openUploadError)({
            title: C.NW.string(C.t.wOr6hI),
            help: C.NW.formatToPlainString(C.t['qqyp/f'], { limit: g.dN1 })
        }),
            p.default.track(g.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: u.Z.getUploadCount(t.id, n),
                new_count: e.length
            });
        return;
    }
    if (((t.type !== g.d4z.GUILD_VOICE && t.type !== g.d4z.GUILD_STAGE_VOICE) || c.Z.getChatOpen(t.id) || r.Z.updateChatOpen(t.id, !0), d)) {
        let r = Array.from(e).map((e, t) =>
            (function (e) {
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
            })(
                {
                    file: e,
                    platform: a.ow.WEB,
                    isThumbnail: f
                },
                null == s ? void 0 : s[t]
            )
        );
        i.Z.addFiles({
            files: r,
            channelId: t.id,
            showLargeMessageDialog: h,
            draftType: n
        });
    } else
        l.Z.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: n,
            isThumbnail: f,
            filesMetadata: s
        });
}
