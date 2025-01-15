n.d(e, {
    G: function () {
        return b;
    },
    d: function () {
        return E;
    }
}),
    n(653041),
    n(47120),
    n(411104);
var i = n(475179),
    c = n(166459),
    o = n(966390),
    l = n(531643),
    r = n(476326),
    a = n(367907),
    f = n(358221),
    p = n(117530),
    u = n(594174),
    s = n(626135),
    _ = n(403182),
    d = n(74538),
    g = n(979956),
    m = n(981631),
    h = n(959517),
    I = n(474936),
    T = n(388032);
function b(t, e) {
    let n = u.default.getCurrentUser(),
        i = t.getGuildId(),
        c = _.dg(i),
        o = [],
        r = 0,
        f = 0,
        p = 0,
        s = [];
    for (let t of e) (p += 1), (r += t.size), o.push(t.size), t.size > f && (f = t.size), null != t.type ? s.push(t.type) : s.push('unknown');
    if (f > c) {
        (0, a.yw)(m.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: t.id,
            guild_id: i,
            user_individual_file_size_limit: c,
            pre_compression_file_sizes: o,
            pre_compression_aggregate_file_size: r,
            num_attachments: p,
            error_type: h.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: s
        }),
            (0, l.openUploadError)({
                title: T.intl.string(T.t['/tGlcn']),
                help: (0, g.BK)(n, i),
                showPremiumUpsell: !(0, d.M5)(n, I.p9.TIER_2),
                fileSize: f
            });
        return;
    }
    (0, l.openUploadError)({
        title: T.intl.string(T.t['/tGlcn']),
        help: T.intl.formatToPlainString(T.t.tUOJdH, { maxSize: _.Ng(_.OC()) })
    });
}
function E(t, e, n) {
    let { filesMetadata: a, requireConfirm: u = !0, showLargeMessageDialog: _ = !1, isThumbnail: d = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.length < 1) return;
    if (null != a && a.length !== t.length) throw Error('Unexpected mismatch between files and file metadata');
    let h = e.getGuildId();
    if ((0, g.Bf)(t, h)) {
        b(e, t);
        return;
    }
    if (p.Z.getUploadCount(e.id, n) + t.length > m.dN1) {
        (0, l.openUploadError)({
            title: T.intl.string(T.t.wOr6hI),
            help: T.intl.formatToPlainString(T.t['qqyp/f'], { limit: m.dN1 })
        }),
            s.default.track(m.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: p.Z.getUploadCount(e.id, n),
                new_count: t.length
            });
        return;
    }
    if (((e.type === m.d4z.GUILD_VOICE || e.type === m.d4z.GUILD_STAGE_VOICE) && !f.Z.getChatOpen(e.id) && i.Z.updateChatOpen(e.id, !0), u)) {
        let i = Array.from(t).map((t, e) => ({
            file: t,
            platform: r.ow.WEB,
            isThumbnail: d,
            ...(null == a ? void 0 : a[e])
        }));
        c.Z.addFiles({
            files: i,
            channelId: e.id,
            showLargeMessageDialog: _,
            draftType: n
        });
    } else
        o.Z.instantBatchUpload({
            channelId: e.id,
            files: t,
            draftType: n,
            isThumbnail: d,
            filesMetadata: a
        });
}
