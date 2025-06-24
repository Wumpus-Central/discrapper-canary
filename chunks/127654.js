i.d(e, {
    G: () => w,
    d: () => Z
}),
    i(539854),
    i(388685),
    i(415506);
var n = i(475179),
    r = i(904245),
    s = i(166459),
    o = i(531643),
    l = i(141795),
    a = i(476326),
    d = i(367907),
    u = i(358221),
    c = i(58873),
    h = i(117530),
    p = i(594174),
    g = i(626135),
    f = i(403182),
    m = i(74538),
    v = i(979956),
    O = i(981631),
    b = i(959517),
    y = i(474936),
    S = i(388032);
function E(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(i);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(i, t).enumerable;
                })
            )),
            n.forEach(function (e) {
                var n;
                (n = i[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = n);
            });
    }
    return t;
}
function w(t, e) {
    let i = p.default.getCurrentUser(),
        n = t.getGuildId(),
        r = f.dg(n),
        s = [],
        l = 0,
        a = 0,
        u = 0,
        c = [];
    for (let t of e) (u += 1), (l += t.size), s.push(t.size), t.size > a && (a = t.size), null != t.type ? c.push(t.type) : c.push('unknown');
    if (a > r) {
        (0, d.yw)(O.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: t.id,
            guild_id: n,
            user_individual_file_size_limit: r,
            pre_compression_file_sizes: s,
            pre_compression_aggregate_file_size: l,
            num_attachments: u,
            error_type: b.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: c
        }),
            (0, o.openUploadError)({
                title: S.intl.string(S.t['/tGlcn']),
                help: (0, v.BK)(i, n),
                showPremiumUpsell: !(0, m.M5)(i, y.p9.TIER_2),
                fileSize: a
            });
        return;
    }
    (0, o.openUploadError)({
        title: S.intl.string(S.t['/tGlcn']),
        help: S.intl.formatToPlainString(S.t.tUOJdH, { maxSize: f.Ng(f.OC()) })
    });
}
function Z(t, e, i) {
    let { filesMetadata: d, requireConfirm: p = !0, showLargeMessageDialog: f = !1, isThumbnail: m = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.length < 1) return;
    if (null != d && d.length !== t.length) throw Error('Unexpected mismatch between files and file metadata');
    let b = e.getGuildId();
    if ((0, v.Bf)(t, b)) return void w(e, t);
    if (h.Z.getUploadCount(e.id, i) + t.length > O.dN1) {
        (0, o.openUploadError)({
            title: S.intl.string(S.t.wOr6hI),
            help: S.intl.formatToPlainString(S.t['qqyp/f'], { limit: O.dN1 })
        }),
            g.default.track(O.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: h.Z.getUploadCount(e.id, i),
                new_count: t.length
            });
        return;
    }
    if (((e.type !== O.d4z.GUILD_VOICE && e.type !== O.d4z.GUILD_STAGE_VOICE) || u.Z.getChatOpen(e.id) || n.Z.updateChatOpen(e.id, !0), p)) {
        let n = Array.from(t).map((t, e) =>
            E(
                {
                    file: t,
                    platform: a.ow.WEB,
                    isThumbnail: m
                },
                null == d ? void 0 : d[e]
            )
        );
        s.Z.addFiles({
            files: n,
            channelId: e.id,
            showLargeMessageDialog: f,
            draftType: i
        });
    } else {
        let i = Array.from(t).map((t, i) => {
            let n = null != d ? d[i] : {};
            return new l.n(
                E(
                    {
                        file: t,
                        platform: a.ow.WEB,
                        isThumbnail: m
                    },
                    n
                ),
                e.id
            );
        });
        r.Z.sendMessage(
            e.id,
            {
                content: '',
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: []
            },
            void 0,
            {
                eagerDispatch: !1,
                attachmentsToUpload: i,
                onAttachmentUploadError: (t, i, n) => {
                    (0, c.A)({
                        file: t,
                        guildId: e.getGuildId(),
                        analyticsLocations: [],
                        code: i,
                        reason: n
                    });
                }
            }
        );
    }
}
