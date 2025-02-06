i.d(t, {
    G: () => b,
    d: () => E
}),
    i(653041),
    i(47120),
    i(411104);
var n = i(475179),
    l = i(166459),
    o = i(966390),
    d = i(531643),
    r = i(476326),
    a = i(367907),
    _ = i(358221),
    c = i(117530),
    p = i(594174),
    s = i(626135),
    u = i(403182),
    f = i(74538),
    g = i(979956),
    m = i(981631),
    h = i(959517),
    I = i(474936),
    T = i(388032);
function b(e, t) {
    let i = p.default.getCurrentUser(),
        n = e.getGuildId(),
        l = u.dg(n),
        o = [],
        r = 0,
        _ = 0,
        c = 0,
        s = [];
    for (let e of t) (c += 1), (r += e.size), o.push(e.size), e.size > _ && (_ = e.size), null != e.type ? s.push(e.type) : s.push('unknown');
    if (_ > l) {
        (0, a.yw)(m.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: n,
            user_individual_file_size_limit: l,
            pre_compression_file_sizes: o,
            pre_compression_aggregate_file_size: r,
            num_attachments: c,
            error_type: h.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: s
        }),
            (0, d.openUploadError)({
                title: T.intl.string(T.t['/tGlcn']),
                help: (0, g.BK)(i, n),
                showPremiumUpsell: !(0, f.M5)(i, I.p9.TIER_2),
                fileSize: _
            });
        return;
    }
    (0, d.openUploadError)({
        title: T.intl.string(T.t['/tGlcn']),
        help: T.intl.formatToPlainString(T.t.tUOJdH, { maxSize: u.Ng(u.OC()) })
    });
}
function E(e, t, i) {
    let { filesMetadata: a, requireConfirm: p = !0, showLargeMessageDialog: u = !1, isThumbnail: f = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != a && a.length !== e.length) throw Error('Unexpected mismatch between files and file metadata');
    let h = t.getGuildId();
    if ((0, g.Bf)(e, h)) {
        b(t, e);
        return;
    }
    if (c.Z.getUploadCount(t.id, i) + e.length > m.dN1) {
        (0, d.openUploadError)({
            title: T.intl.string(T.t.wOr6hI),
            help: T.intl.formatToPlainString(T.t['qqyp/f'], { limit: m.dN1 })
        }),
            s.default.track(m.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: c.Z.getUploadCount(t.id, i),
                new_count: e.length
            });
        return;
    }
    if (((t.type !== m.d4z.GUILD_VOICE && t.type !== m.d4z.GUILD_STAGE_VOICE) || _.Z.getChatOpen(t.id) || n.Z.updateChatOpen(t.id, !0), p)) {
        let n = Array.from(e).map((e, t) => ({
            file: e,
            platform: r.ow.WEB,
            isThumbnail: f,
            ...(null == a ? void 0 : a[t])
        }));
        l.Z.addFiles({
            files: n,
            channelId: t.id,
            showLargeMessageDialog: u,
            draftType: i
        });
    } else
        o.Z.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: i,
            isThumbnail: f,
            filesMetadata: a
        });
}
