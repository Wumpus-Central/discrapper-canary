n.d(t, {
    Cm: () => q,
    HH: () => x,
    Hc: () => Y,
    IV: () => K,
    KP: () => k,
    Ks: () => $,
    OP: () => W,
    Pq: () => H,
    Sv: () => G,
    Tw: () => U,
    UU: () => V,
    Yy: () => F,
    aP: () => Z,
    bR: () => J,
    l4: () => w,
    lJ: () => j,
    oh: () => B,
    tG: () => C,
    vx: () => L,
    xx: () => z,
    zj: () => M
}),
    n(789020);
var r = n(286379),
    i = n(524437),
    o = n(191237),
    a = n(432877),
    s = n(768494),
    l = n(797614),
    c = n(182274),
    u = n(695346),
    d = n(592125),
    f = n(699516),
    p = n(594174),
    _ = n(626135),
    h = n(630388),
    m = n(948561),
    g = n(704454),
    E = n(719548),
    v = n(981631),
    b = n(973005);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
n(388032);
let S = {
        [b.TI.DISABLED.valueOf()]: i.Q4.SHOW,
        [b.TI.NON_FRIENDS.valueOf()]: i.Q4.SHOW,
        [b.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK
    },
    I = {
        [b.TI.DISABLED.valueOf()]: i.Q4.SHOW,
        [b.TI.NON_FRIENDS.valueOf()]: i.Q4.BLOCK,
        [b.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK
    },
    T = {
        [b.TI.DISABLED.valueOf()]: i.Q4.BLUR,
        [b.TI.NON_FRIENDS.valueOf()]: i.Q4.BLUR,
        [b.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK
    },
    N = {
        [b.TI.DISABLED.valueOf()]: i.Q4.BLUR,
        [b.TI.NON_FRIENDS.valueOf()]: i.Q4.BLOCK,
        [b.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK
    },
    A = 1,
    C = (e) => {
        let { setting: t, isDm: n = !1, isFriend: r = !1 } = e;
        if (null != t && t !== i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let o = p.default.getCurrentUser();
        return (0, g.bc)('resolveSettingWithDefaults')
            ? D({
                  isDm: n,
                  isFriend: r
              })
            : (0, g.g2)('resolveSettingWithDefaults')
              ? i.Q4.BLUR
              : (null == o ? void 0 : o.nsfwAllowed) === !1
                ? P({
                      isDm: n,
                      isFriend: r
                  })
                : R({
                      isDm: n,
                      isFriend: r
                  });
    },
    R = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return i.Q4.SHOW;
        let r = u.UP.getSetting();
        return n ? S[r] : I[r];
    },
    P = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return i.Q4.BLUR;
        let r = u.UP.getSetting();
        return n ? T[r] : N[r];
    },
    D = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? i.Q4.BLOCK : i.Q4.BLUR;
    },
    w = () => {
        let e = u.Sh.getSetting();
        return {
            explicitContentGuilds: C({ setting: null == e ? void 0 : e.explicitContentGuilds }),
            explicitContentNonFriendDm: C({
                setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                isDm: !0
            }),
            explicitContentFriendDm: C({
                setting: null == e ? void 0 : e.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        };
    };
function L(e) {
    return e === i.Q4.BLUR || e === i.Q4.BLOCK;
}
function x(e) {
    var t;
    let n = p.default.getCurrentUser();
    if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id) return !1;
    let { explicitContentGuilds: r, explicitContentFriendDm: i, explicitContentNonFriendDm: o } = w(),
        a = d.Z.getChannel(e.channel_id);
    return null != a && (a.isDM() || a.isGroupDM() ? (null != e.author && f.Z.getFriendIDs().includes(e.author.id) ? L(i) : L(o)) : L(r));
}
let M = (e) => {
    let t = w();
    u.Sh.updateSetting(O({}, t, e));
};
var j = (function (e) {
    return (e[(e.Attachment = 0)] = 'Attachment'), (e[(e.Embed = 1)] = 'Embed'), (e[(e.GenericMedia = 2)] = 'GenericMedia'), e;
})({});
function k(e, t) {
    var n, r, i, o;
    if (!t) return !1;
    if (a.ZP.get('obscure_blur_effect_enabled')) return !0;
    switch (e.type) {
        case 1:
            return (0, h.yE)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, v.xPJ.CONTAINS_EXPLICIT_MEDIA);
        case 0:
            return (0, h.yE)(null !== (r = e.media.flags) && void 0 !== r ? r : 0, v.J0y.CONTAINS_EXPLICIT_MEDIA);
        case 2:
            return (0, h.yE)(null !== (o = null === (i = e.media.contentScanMetadata) || void 0 === i ? void 0 : i.flags) && void 0 !== o ? o : 0, s.Cb.EXPLICIT);
        default:
            return !1;
    }
}
function U(e) {
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
function G(e) {
    return !a.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}
function B(e) {
    return !a.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}
var F = (function (e) {
        return (e.EXPLICIT_MEDIA_LEARN_MORE_VIEWED = 'explicit_media_learn_more_viewed'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = 'explicit_media_learn_more_click_settings'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = 'explicit_media_learn_more_click_learn_more'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = 'explicit_media_learn_more_click_dismiss'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = 'explicit_media_learn_more_click_false_positive'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = 'explicit_media_false_positive_viewed'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = 'explicit_media_false_positive_click_confirm'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = 'explicit_media_false_positive_click_cancel'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = 'explicit_media_sender_false_positive_button_clicked'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = 'explicit_media_false_positive_clyde_message_sent'), e;
    })({}),
    V = (function (e) {
        return (e.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = 'explicit_media_obscured_false_positive_flow'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = 'explicit_media_sender_false_positive_flow'), (e.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = 'explicit_media_message_send_blocked'), (e.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = 'explicit_media_add_media_to_forum_post_blocked'), e;
    })({});
function Z(e) {
    let { action: t, channelId: n, messageId: r, context: i } = e;
    if (null == n || null == r) return;
    let o = d.Z.getChannel(n);
    _.default.track(v.rMx.EXPLICIT_MEDIA_ACTION, {
        action: t,
        guild_id: null == o ? void 0 : o.guild_id,
        channel_id: n,
        message_id: r,
        user_is_underage: (0, c.U)(),
        context: i
    });
}
var H = (function (e) {
    return (e.UPDATE = 'update'), (e.TIMEOUT = 'timeout'), e;
})({});
function W(e, t) {
    let n = Math.min(Math.floor((Date.now() - e) / 1000), 3);
    l.Z.increment({
        name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
        tags: ['timingBucket:'.concat(n), 'source:'.concat(t), 'metricVersion:'.concat(A)]
    });
}
function Y(e) {
    var t, n, i, o;
    let { channelId: a, messageId: s, attachmentIds: u, embedIds: f } = e;
    if (null == a || null == s || ((null !== (t = null == u ? void 0 : u.length) && void 0 !== t ? t : 0) === 0 && (null !== (n = null == f ? void 0 : f.length) && void 0 !== n ? n : 0) === 0)) return;
    let p = d.Z.getChannel(a);
    _.default.track(v.rMx.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: a,
        guild_id: null == p ? void 0 : p.guild_id,
        message_id: s,
        embed_ids: f,
        user_is_underage: (0, c.U)(),
        scan_timeout_duration: m.b2,
        attachment_ids_v2: u
    }),
        l.Z.increment({
            name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
            tags: ['metricVersion:'.concat(A)]
        }),
        l.Z.distribution({ name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION }, (null !== (i = null == u ? void 0 : u.length) && void 0 !== i ? i : 0) + (null !== (o = null == f ? void 0 : f.length) && void 0 !== o ? o : 0));
}
function K(e) {
    let { channelId: t, numOfAttachments: n, numOfAttachmentsPendingScan: i, numOfEmbeds: o, numOfEmbedsPendingScan: a } = e;
    if (null == t) return;
    let s = d.Z.getChannel(t);
    _.default.track(v.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        channel_id: t,
        guild_id: null == s ? void 0 : s.guild_id,
        num_of_attachments: n,
        num_of_attachments_pending_scan: i,
        num_of_embeds: o,
        num_of_embeds_pending_scan: a
    });
    let c = i + a;
    c > 0 && l.Z.distribution({ name: r.V.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 }, c);
}
function z(e) {
    let { messageId: t, channelId: n, numOfAttachments: r, numOfExplicitAttachments: i, numOfEmbeds: o, numOfExplicitEmbeds: a } = e;
    if (null == n) return;
    let s = d.Z.getChannel(n);
    _.default.track(v.rMx.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
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
function q(e) {
    let { attachments: t, embeds: n } = Q(e),
        r = X(e);
    return (e = e.merge({
        attachments: t,
        embeds: n,
        messageSnapshots: r
    }));
}
function Q(e) {
    return {
        attachments: e.attachments.map((e) => (null == e.content_scan_version && (e.content_scan_version = -1), e)),
        embeds: e.embeds.map((e) => (null == e.contentScanVersion && (e.contentScanVersion = -1), e))
    };
}
function X(e) {
    let { messageSnapshots: t } = e;
    return null == t || 0 === t.length
        ? t
        : t.map((e) => {
              let { message: t } = e,
                  { attachments: n, embeds: r } = Q(t);
              return (
                  (t = t.merge({
                      attachments: n,
                      embeds: r
                  })),
                  (e = e.merge({ message: t }))
              );
          });
}
let J = (e, t) => null != e && null != t && (e <= E.LN || t <= E.iE);
function $() {
    let e = (0, g.G7)('explicit_media_redaction_utils'),
        t = o.Z.shouldShowTiggerPawtect();
    return e && t;
}
