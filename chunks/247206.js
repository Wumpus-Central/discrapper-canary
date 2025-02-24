n.d(t, {
    Cm: () => z,
    HH: () => x,
    Hc: () => W,
    IV: () => Y,
    KP: () => k,
    OP: () => H,
    Pq: () => V,
    Sv: () => U,
    Tw: () => j,
    UU: () => Z,
    Yy: () => B,
    aP: () => F,
    bR: () => X,
    l4: () => w,
    lJ: () => M,
    oh: () => G,
    tG: () => A,
    vx: () => D,
    xx: () => K,
    zj: () => L
}),
    n(789020);
var r = n(286379),
    i = n(524437);
n(191237);
var o = n(432877),
    a = n(768494),
    s = n(797614),
    l = n(182274),
    c = n(695346),
    u = n(592125),
    d = n(699516),
    f = n(594174),
    p = n(626135),
    _ = n(630388),
    h = n(948561),
    m = n(704454),
    g = n(719548),
    E = n(981631),
    v = n(973005);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
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
                b(e, t, n[t]);
            });
    }
    return e;
}
n(388032);
let O = {
        [v.TI.DISABLED.valueOf()]: i.Q4.SHOW,
        [v.TI.NON_FRIENDS.valueOf()]: i.Q4.SHOW,
        [v.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK
    },
    S = {
        [v.TI.DISABLED.valueOf()]: i.Q4.SHOW,
        [v.TI.NON_FRIENDS.valueOf()]: i.Q4.BLOCK,
        [v.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK
    },
    I = {
        [v.TI.DISABLED.valueOf()]: i.Q4.BLUR,
        [v.TI.NON_FRIENDS.valueOf()]: i.Q4.BLUR,
        [v.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK
    },
    T = {
        [v.TI.DISABLED.valueOf()]: i.Q4.BLUR,
        [v.TI.NON_FRIENDS.valueOf()]: i.Q4.BLOCK,
        [v.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK
    },
    N = 1,
    A = (e) => {
        let { setting: t, isDm: n = !1, isFriend: r = !1 } = e;
        if (null != t && t !== i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let o = f.default.getCurrentUser();
        return (0, m.bc)('resolveSettingWithDefaults')
            ? P({
                  isDm: n,
                  isFriend: r
              })
            : (0, m.g2)('resolveSettingWithDefaults')
              ? i.Q4.BLUR
              : (null == o ? void 0 : o.nsfwAllowed) === !1
                ? R({
                      isDm: n,
                      isFriend: r
                  })
                : C({
                      isDm: n,
                      isFriend: r
                  });
    },
    C = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return i.Q4.SHOW;
        let r = c.UP.getSetting();
        return n ? O[r] : S[r];
    },
    R = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return i.Q4.BLUR;
        let r = c.UP.getSetting();
        return n ? I[r] : T[r];
    },
    P = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? i.Q4.BLOCK : i.Q4.BLUR;
    },
    w = () => {
        let e = c.Sh.getSetting();
        return {
            explicitContentGuilds: A({ setting: null == e ? void 0 : e.explicitContentGuilds }),
            explicitContentNonFriendDm: A({
                setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                isDm: !0
            }),
            explicitContentFriendDm: A({
                setting: null == e ? void 0 : e.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        };
    };
function D(e) {
    return e === i.Q4.BLUR || e === i.Q4.BLOCK;
}
function x(e) {
    var t;
    let n = f.default.getCurrentUser();
    if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id) return !1;
    let { explicitContentGuilds: r, explicitContentFriendDm: i, explicitContentNonFriendDm: o } = w(),
        a = u.Z.getChannel(e.channel_id);
    return null != a && (a.isDM() || a.isGroupDM() ? (null != e.author && d.Z.getFriendIDs().includes(e.author.id) ? D(i) : D(o)) : D(r));
}
let L = (e) => {
    let t = w();
    c.Sh.updateSetting(y({}, t, e));
};
var M = (function (e) {
    return (e[(e.Attachment = 0)] = 'Attachment'), (e[(e.Embed = 1)] = 'Embed'), (e[(e.GenericMedia = 2)] = 'GenericMedia'), e;
})({});
function k(e, t) {
    var n, r, i, s;
    if (!t) return !1;
    if (o.ZP.get('obscure_blur_effect_enabled')) return !0;
    switch (e.type) {
        case 1:
            return (0, _.yE)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, E.xPJ.CONTAINS_EXPLICIT_MEDIA);
        case 0:
            return (0, _.yE)(null !== (r = e.media.flags) && void 0 !== r ? r : 0, E.J0y.CONTAINS_EXPLICIT_MEDIA);
        case 2:
            return (0, _.yE)(null !== (s = null === (i = e.media.contentScanMetadata) || void 0 === i ? void 0 : i.flags) && void 0 !== s ? s : 0, a.Cb.EXPLICIT);
        default:
            return !1;
    }
}
function j(e) {
    return x(e)
        ? {
              obscuredAttachments: e.attachments.filter((e) =>
                  k(
                      {
                          type: 0,
                          media: e
                      },
                      !0
                  )
              ),
              obscuredEmbeds: e.embeds.filter((e) =>
                  k(
                      {
                          type: 1,
                          media: e
                      },
                      !0
                  )
              )
          }
        : {
              obscuredAttachments: [],
              obscuredEmbeds: []
          };
}
function U(e) {
    return !o.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}
function G(e) {
    return !o.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}
var B = (function (e) {
        return (e.EXPLICIT_MEDIA_LEARN_MORE_VIEWED = 'explicit_media_learn_more_viewed'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = 'explicit_media_learn_more_click_settings'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = 'explicit_media_learn_more_click_learn_more'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = 'explicit_media_learn_more_click_dismiss'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = 'explicit_media_learn_more_click_false_positive'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = 'explicit_media_false_positive_viewed'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = 'explicit_media_false_positive_click_confirm'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = 'explicit_media_false_positive_click_cancel'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = 'explicit_media_sender_false_positive_button_clicked'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = 'explicit_media_false_positive_clyde_message_sent'), e;
    })({}),
    Z = (function (e) {
        return (e.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = 'explicit_media_obscured_false_positive_flow'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = 'explicit_media_sender_false_positive_flow'), (e.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = 'explicit_media_message_send_blocked'), (e.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = 'explicit_media_add_media_to_forum_post_blocked'), e;
    })({});
function F(e) {
    let { action: t, channelId: n, messageId: r, context: i } = e;
    if (null == n || null == r) return;
    let o = u.Z.getChannel(n);
    p.default.track(E.rMx.EXPLICIT_MEDIA_ACTION, {
        action: t,
        guild_id: null == o ? void 0 : o.guild_id,
        channel_id: n,
        message_id: r,
        user_is_underage: (0, l.U)(),
        context: i
    });
}
var V = (function (e) {
    return (e.UPDATE = 'update'), (e.TIMEOUT = 'timeout'), e;
})({});
function H(e, t) {
    let n = Math.min(Math.floor((Date.now() - e) / 1000), 3);
    s.Z.increment({
        name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
        tags: ['timingBucket:'.concat(n), 'source:'.concat(t), 'metricVersion:'.concat(N)]
    });
}
function W(e) {
    var t, n, i, o;
    let { channelId: a, messageId: c, attachmentIds: d, embedIds: f } = e;
    if (null == a || null == c || ((null !== (t = null == d ? void 0 : d.length) && void 0 !== t ? t : 0) === 0 && (null !== (n = null == f ? void 0 : f.length) && void 0 !== n ? n : 0) === 0)) return;
    let _ = u.Z.getChannel(a);
    p.default.track(E.rMx.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: a,
        guild_id: null == _ ? void 0 : _.guild_id,
        message_id: c,
        embed_ids: f,
        user_is_underage: (0, l.U)(),
        scan_timeout_duration: h.b2,
        attachment_ids_v2: d
    }),
        s.Z.increment({
            name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
            tags: ['metricVersion:'.concat(N)]
        }),
        s.Z.distribution({ name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION }, (null !== (i = null == d ? void 0 : d.length) && void 0 !== i ? i : 0) + (null !== (o = null == f ? void 0 : f.length) && void 0 !== o ? o : 0));
}
function Y(e) {
    let { channelId: t, numOfAttachments: n, numOfAttachmentsPendingScan: i, numOfEmbeds: o, numOfEmbedsPendingScan: a } = e;
    if (null == t) return;
    let l = u.Z.getChannel(t);
    p.default.track(E.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        channel_id: t,
        guild_id: null == l ? void 0 : l.guild_id,
        num_of_attachments: n,
        num_of_attachments_pending_scan: i,
        num_of_embeds: o,
        num_of_embeds_pending_scan: a
    });
    let c = i + a;
    c > 0 && s.Z.distribution({ name: r.V.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 }, c);
}
function K(e) {
    let { messageId: t, channelId: n, numOfAttachments: r, numOfExplicitAttachments: i, numOfEmbeds: o, numOfExplicitEmbeds: a } = e;
    if (null == n) return;
    let s = u.Z.getChannel(n);
    p.default.track(E.rMx.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
        message_id: t,
        channel_id: n,
        channel_type: null == s ? void 0 : s.type,
        guild_id: null == s ? void 0 : s.guild_id,
        num_of_attachments: r,
        num_of_explicit_attachments: i,
        num_of_embeds: o,
        num_of_explicit_embeds: a
    });
}
function z(e) {
    let { attachments: t, embeds: n } = q(e),
        r = Q(e);
    return (e = e.merge({
        attachments: t,
        embeds: n,
        messageSnapshots: r
    }));
}
function q(e) {
    return {
        attachments: e.attachments.map((e) => (null == e.content_scan_version && (e.content_scan_version = -1), e)),
        embeds: e.embeds.map((e) => (null == e.contentScanVersion && (e.contentScanVersion = -1), e))
    };
}
function Q(e) {
    let { messageSnapshots: t } = e;
    return null == t || 0 === t.length
        ? t
        : t.map((e) => {
              let { message: t } = e,
                  { attachments: n, embeds: r } = q(t);
              return (
                  (t = t.merge({
                      attachments: n,
                      embeds: r
                  })),
                  (e = e.merge({ message: t }))
              );
          });
}
let X = (e, t) => null != e && null != t && (e <= g.LN || t <= g.iE);
