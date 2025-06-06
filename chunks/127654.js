n.d(t, {
    G: () => j,
    d: () => O
}),
    n(539854),
    n(388685),
    n(415506);
var r = n(475179),
    i = n(904245),
    l = n(166459),
    a = n(531643),
    o = n(141795),
    s = n(476326),
    c = n(367907),
    u = n(358221),
    d = n(58873),
    p = n(117530),
    h = n(594174),
    f = n(626135),
    m = n(403182),
    g = n(74538),
    b = n(979956),
    _ = n(981631),
    y = n(959517),
    x = n(474936),
    C = n(388032);
function v(e) {
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
function j(e, t) {
    let n = h.default.getCurrentUser(),
        r = e.getGuildId(),
        i = m.dg(r),
        l = [],
        o = 0,
        s = 0,
        u = 0,
        d = [];
    for (let e of t) (u += 1), (o += e.size), l.push(e.size), e.size > s && (s = e.size), null != e.type ? d.push(e.type) : d.push('unknown');
    if (s > i) {
        (0, c.yw)(_.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: r,
            user_individual_file_size_limit: i,
            pre_compression_file_sizes: l,
            pre_compression_aggregate_file_size: o,
            num_attachments: u,
            error_type: y.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: d
        }),
            (0, a.openUploadError)({
                title: C.intl.string(C.t['/tGlcn']),
                help: (0, b.BK)(n, r),
                showPremiumUpsell: !(0, g.M5)(n, x.p9.TIER_2),
                fileSize: s
            });
        return;
    }
    (0, a.openUploadError)({
        title: C.intl.string(C.t['/tGlcn']),
        help: C.intl.formatToPlainString(C.t.tUOJdH, { maxSize: m.Ng(m.OC()) })
    });
}
function O(e, t, n) {
    let { filesMetadata: c, requireConfirm: h = !0, showLargeMessageDialog: m = !1, isThumbnail: g = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != c && c.length !== e.length) throw Error('Unexpected mismatch between files and file metadata');
    let y = t.getGuildId();
    if ((0, b.Bf)(e, y)) return void j(t, e);
    if (p.Z.getUploadCount(t.id, n) + e.length > _.dN1) {
        (0, a.openUploadError)({
            title: C.intl.string(C.t.wOr6hI),
            help: C.intl.formatToPlainString(C.t['qqyp/f'], { limit: _.dN1 })
        }),
            f.default.track(_.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: p.Z.getUploadCount(t.id, n),
                new_count: e.length
            });
        return;
    }
    if (((t.type !== _.d4z.GUILD_VOICE && t.type !== _.d4z.GUILD_STAGE_VOICE) || u.Z.getChatOpen(t.id) || r.Z.updateChatOpen(t.id, !0), h)) {
        let r = Array.from(e).map((e, t) =>
            v(
                {
                    file: e,
                    platform: s.ow.WEB,
                    isThumbnail: g
                },
                null == c ? void 0 : c[t]
            )
        );
        l.Z.addFiles({
            files: r,
            channelId: t.id,
            showLargeMessageDialog: m,
            draftType: n
        });
    } else {
        let n = Array.from(e).map((e, n) => {
            let r = null != c ? c[n] : {};
            return new o.n(
                v(
                    {
                        file: e,
                        platform: s.ow.WEB,
                        isThumbnail: g
                    },
                    r
                ),
                t.id
            );
        });
        i.Z.sendMessage(
            t.id,
            {
                content: '',
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: []
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
                        reason: r
                    });
                }
            }
        );
    }
}
