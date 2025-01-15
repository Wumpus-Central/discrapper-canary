n.d(t, {
    G: function () {
        return _;
    },
    d: function () {
        return I;
    }
}),
    n(653041),
    n(47120),
    n(411104);
var i = n(475179),
    l = n(166459),
    r = n(966390),
    a = n(531643),
    s = n(476326),
    o = n(367907),
    c = n(358221),
    d = n(117530),
    u = n(594174),
    h = n(626135),
    p = n(403182),
    m = n(74538),
    f = n(979956),
    g = n(981631),
    C = n(959517),
    x = n(474936),
    v = n(388032);
function _(e, t) {
    let n = u.default.getCurrentUser(),
        i = e.getGuildId(),
        l = p.dg(i),
        r = [],
        s = 0,
        c = 0,
        d = 0,
        h = [];
    for (let e of t) (d += 1), (s += e.size), r.push(e.size), e.size > c && (c = e.size), null != e.type ? h.push(e.type) : h.push('unknown');
    if (c > l) {
        (0, o.yw)(g.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: i,
            user_individual_file_size_limit: l,
            pre_compression_file_sizes: r,
            pre_compression_aggregate_file_size: s,
            num_attachments: d,
            error_type: C.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: h
        }),
            (0, a.openUploadError)({
                title: v.intl.string(v.t['/tGlcn']),
                help: (0, f.BK)(n, i),
                showPremiumUpsell: !(0, m.M5)(n, x.p9.TIER_2),
                fileSize: c
            });
        return;
    }
    (0, a.openUploadError)({
        title: v.intl.string(v.t['/tGlcn']),
        help: v.intl.formatToPlainString(v.t.tUOJdH, { maxSize: p.Ng(p.OC()) })
    });
}
function I(e, t, n) {
    let { filesMetadata: o, requireConfirm: u = !0, showLargeMessageDialog: p = !1, isThumbnail: m = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != o && o.length !== e.length) throw Error('Unexpected mismatch between files and file metadata');
    let C = t.getGuildId();
    if ((0, f.Bf)(e, C)) {
        _(t, e);
        return;
    }
    if (d.Z.getUploadCount(t.id, n) + e.length > g.dN1) {
        (0, a.openUploadError)({
            title: v.intl.string(v.t.wOr6hI),
            help: v.intl.formatToPlainString(v.t['qqyp/f'], { limit: g.dN1 })
        }),
            h.default.track(g.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: d.Z.getUploadCount(t.id, n),
                new_count: e.length
            });
        return;
    }
    if (((t.type === g.d4z.GUILD_VOICE || t.type === g.d4z.GUILD_STAGE_VOICE) && !c.Z.getChatOpen(t.id) && i.Z.updateChatOpen(t.id, !0), u)) {
        let i = Array.from(e).map((e, t) => ({
            file: e,
            platform: s.ow.WEB,
            isThumbnail: m,
            ...(null == o ? void 0 : o[t])
        }));
        l.Z.addFiles({
            files: i,
            channelId: t.id,
            showLargeMessageDialog: p,
            draftType: n
        });
    } else
        r.Z.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: n,
            isThumbnail: m,
            filesMetadata: o
        });
}
