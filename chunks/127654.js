n.d(t, {
    G: () => T,
    d: () => E
}),
    n(653041),
    n(47120),
    n(411104);
var i = n(475179),
    o = n(166459),
    r = n(966390),
    l = n(531643),
    a = n(476326),
    c = n(367907),
    d = n(358221),
    _ = n(117530),
    p = n(594174),
    u = n(626135),
    s = n(403182),
    f = n(74538),
    g = n(979956),
    m = n(981631),
    h = n(959517),
    I = n(474936),
    b = n(388032);
function T(e, t) {
    let n = p.default.getCurrentUser(),
        i = e.getGuildId(),
        o = s.dg(i),
        r = [],
        a = 0,
        d = 0,
        _ = 0,
        u = [];
    for (let e of t) (_ += 1), (a += e.size), r.push(e.size), e.size > d && (d = e.size), null != e.type ? u.push(e.type) : u.push('unknown');
    if (d > o) {
        (0, c.yw)(m.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: i,
            user_individual_file_size_limit: o,
            pre_compression_file_sizes: r,
            pre_compression_aggregate_file_size: a,
            num_attachments: _,
            error_type: h.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: u
        }),
            (0, l.openUploadError)({
                title: b.NW.string(b.t['/tGlcn']),
                help: (0, g.BK)(n, i),
                showPremiumUpsell: !(0, f.M5)(n, I.p9.TIER_2),
                fileSize: d
            });
        return;
    }
    (0, l.openUploadError)({
        title: b.NW.string(b.t['/tGlcn']),
        help: b.NW.formatToPlainString(b.t.tUOJdH, { maxSize: s.Ng(s.OC()) })
    });
}
function E(e, t, n) {
    let { filesMetadata: c, requireConfirm: p = !0, showLargeMessageDialog: s = !1, isThumbnail: f = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != c && c.length !== e.length) throw Error('Unexpected mismatch between files and file metadata');
    let h = t.getGuildId();
    if ((0, g.Bf)(e, h)) return void T(t, e);
    if (_.Z.getUploadCount(t.id, n) + e.length > m.dN1) {
        (0, l.openUploadError)({
            title: b.NW.string(b.t.wOr6hI),
            help: b.NW.formatToPlainString(b.t['qqyp/f'], { limit: m.dN1 })
        }),
            u.default.track(m.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: _.Z.getUploadCount(t.id, n),
                new_count: e.length
            });
        return;
    }
    if (((t.type !== m.d4z.GUILD_VOICE && t.type !== m.d4z.GUILD_STAGE_VOICE) || d.Z.getChatOpen(t.id) || i.Z.updateChatOpen(t.id, !0), p)) {
        let i = Array.from(e).map((e, t) =>
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })(
                {
                    file: e,
                    platform: a.ow.WEB,
                    isThumbnail: f
                },
                null == c ? void 0 : c[t]
            )
        );
        o.Z.addFiles({
            files: i,
            channelId: t.id,
            showLargeMessageDialog: s,
            draftType: n
        });
    } else
        r.Z.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: n,
            isThumbnail: f,
            filesMetadata: c
        });
}
