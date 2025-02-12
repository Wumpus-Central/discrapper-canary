n.d(t, {
    G: () => v,
    d: () => y
}),
    n(653041),
    n(47120),
    n(411104);
var a = n(475179),
    i = n(166459),
    l = n(966390),
    s = n(531643),
    o = n(476326),
    r = n(367907),
    c = n(358221),
    d = n(117530),
    u = n(594174),
    m = n(626135),
    p = n(403182),
    g = n(74538),
    _ = n(979956),
    h = n(981631),
    f = n(959517),
    C = n(474936),
    E = n(388032);
function v(e, t) {
    let n = u.default.getCurrentUser(),
        a = e.getGuildId(),
        i = p.dg(a),
        l = [],
        o = 0,
        c = 0,
        d = 0,
        m = [];
    for (let e of t) (d += 1), (o += e.size), l.push(e.size), e.size > c && (c = e.size), null != e.type ? m.push(e.type) : m.push('unknown');
    if (c > i) {
        (0, r.yw)(h.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: a,
            user_individual_file_size_limit: i,
            pre_compression_file_sizes: l,
            pre_compression_aggregate_file_size: o,
            num_attachments: d,
            error_type: f.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: m
        }),
            (0, s.openUploadError)({
                title: E.intl.string(E.t['/tGlcn']),
                help: (0, _.BK)(n, a),
                showPremiumUpsell: !(0, g.M5)(n, C.p9.TIER_2),
                fileSize: c
            });
        return;
    }
    (0, s.openUploadError)({
        title: E.intl.string(E.t['/tGlcn']),
        help: E.intl.formatToPlainString(E.t.tUOJdH, { maxSize: p.Ng(p.OC()) })
    });
}
function y(e, t, n) {
    let { filesMetadata: r, requireConfirm: u = !0, showLargeMessageDialog: p = !1, isThumbnail: g = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != r && r.length !== e.length) throw Error('Unexpected mismatch between files and file metadata');
    let f = t.getGuildId();
    if ((0, _.Bf)(e, f)) {
        v(t, e);
        return;
    }
    if (d.Z.getUploadCount(t.id, n) + e.length > h.dN1) {
        (0, s.openUploadError)({
            title: E.intl.string(E.t.wOr6hI),
            help: E.intl.formatToPlainString(E.t['qqyp/f'], { limit: h.dN1 })
        }),
            m.default.track(h.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: d.Z.getUploadCount(t.id, n),
                new_count: e.length
            });
        return;
    }
    if (((t.type !== h.d4z.GUILD_VOICE && t.type !== h.d4z.GUILD_STAGE_VOICE) || c.Z.getChatOpen(t.id) || a.Z.updateChatOpen(t.id, !0), u)) {
        let a = Array.from(e).map((e, t) => ({
            file: e,
            platform: o.ow.WEB,
            isThumbnail: g,
            ...(null == r ? void 0 : r[t])
        }));
        i.Z.addFiles({
            files: a,
            channelId: t.id,
            showLargeMessageDialog: p,
            draftType: n
        });
    } else
        l.Z.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: n,
            isThumbnail: g,
            filesMetadata: r
        });
}
