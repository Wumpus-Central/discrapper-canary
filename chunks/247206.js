n.d(t, {
    Cm: () => Q,
    HH: () => x,
    Hc: () => Y,
    IV: () => K,
    Jl: () => en,
    KP: () => j,
    Ks: () => ee,
    OP: () => W,
    Pq: () => H,
    QN: () => z,
    Sv: () => G,
    Tw: () => U,
    UU: () => V,
    Yy: () => F,
    aP: () => Z,
    bR: () => $,
    l4: () => D,
    lJ: () => k,
    m8: () => et,
    oh: () => B,
    tG: () => C,
    vx: () => L,
    xx: () => q,
    zj: () => M
}),
    n(789020);
var r = n(286379),
    i = n(524437),
    o = n(81643),
    a = n(432877),
    s = n(768494),
    l = n(797614),
    c = n(182274),
    u = n(695346),
    d = n(592125),
    f = n(699516),
    _ = n(594174),
    p = n(626135),
    h = n(630388),
    m = n(948561),
    g = n(704454),
    E = n(719548),
    b = n(981631),
    y = n(973005);
function v(e, t, n) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
n(388032);
let I = {
        [y.TI.DISABLED.valueOf()]: i.Q4.SHOW,
        [y.TI.NON_FRIENDS.valueOf()]: i.Q4.SHOW,
        [y.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK
    },
    S = {
        [y.TI.DISABLED.valueOf()]: i.Q4.SHOW,
        [y.TI.NON_FRIENDS.valueOf()]: i.Q4.BLOCK,
        [y.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK
    },
    T = {
        [y.TI.DISABLED.valueOf()]: i.Q4.BLUR,
        [y.TI.NON_FRIENDS.valueOf()]: i.Q4.BLUR,
        [y.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK
    },
    N = {
        [y.TI.DISABLED.valueOf()]: i.Q4.BLUR,
        [y.TI.NON_FRIENDS.valueOf()]: i.Q4.BLOCK,
        [y.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: i.Q4.BLOCK
    },
    A = 1,
    C = (e) => {
        let { setting: t, isDm: n = !1, isFriend: r = !1 } = e;
        if (null != t && t !== i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let o = _.default.getCurrentUser();
        return (0, g.bc)('resolveSettingWithDefaults')
            ? w({
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
        return n ? I[r] : S[r];
    },
    P = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return i.Q4.BLUR;
        let r = u.UP.getSetting();
        return n ? T[r] : N[r];
    },
    w = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        return t && !n ? i.Q4.BLOCK : i.Q4.BLUR;
    },
    D = () => {
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
    let n = _.default.getCurrentUser();
    if (null == n || (null == (t = e.author) ? void 0 : t.id) === n.id) return !1;
    let { explicitContentGuilds: r, explicitContentFriendDm: i, explicitContentNonFriendDm: o } = D(),
        a = d.Z.getChannel(e.channel_id);
    return null != a && (a.isDM() || a.isGroupDM() ? (null != e.author && f.Z.getFriendIDs().includes(e.author.id) ? L(i) : L(o)) : L(r));
}
let M = (e) => {
    let t = D();
    u.Sh.updateSetting(O({}, t, e));
};
var k = (function (e) {
    return (e[(e.Attachment = 0)] = 'Attachment'), (e[(e.Embed = 1)] = 'Embed'), (e[(e.GenericMedia = 2)] = 'GenericMedia'), e;
})({});
function j(e, t) {
    var n, r, i, o;
    if (!t) return !1;
    if (a.ZP.get('obscure_blur_effect_enabled')) return !0;
    switch (e.type) {
        case 1:
            return (0, h.yE)(null != (n = e.media.flags) ? n : 0, b.xPJ.CONTAINS_EXPLICIT_MEDIA);
        case 0:
            return (0, h.yE)(null != (r = e.media.flags) ? r : 0, b.J0y.CONTAINS_EXPLICIT_MEDIA);
        case 2:
            return (0, h.yE)(null != (o = null == (i = e.media.contentScanMetadata) ? void 0 : i.flags) ? o : 0, s.Cb.EXPLICIT);
        default:
            return !1;
    }
}
function U(e) {
    return x(e)
        ? {
              obscuredAttachments: e.attachments.filter((e) =>
                  j(
                      {
                          type: 0,
                          media: e
                      },
                      !0
                  )
              ),
              obscuredEmbeds: e.embeds.filter((e) =>
                  j(
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
        return (e.EXPLICIT_MEDIA_LEARN_MORE_VIEWED = 'explicit_media_learn_more_viewed'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = 'explicit_media_learn_more_click_settings'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = 'explicit_media_learn_more_click_learn_more'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = 'explicit_media_learn_more_click_dismiss'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = 'explicit_media_learn_more_click_false_positive'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY = 'explicit_media_learn_more_click_age_verify_reverify'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE = 'explicit_media_learn_more_click_age_verify_learn_more'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = 'explicit_media_false_positive_viewed'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = 'explicit_media_false_positive_click_confirm'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = 'explicit_media_false_positive_click_cancel'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = 'explicit_media_sender_false_positive_button_clicked'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = 'explicit_media_false_positive_clyde_message_sent'), e;
    })({}),
    V = (function (e) {
        return (e.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = 'explicit_media_obscured_false_positive_flow'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = 'explicit_media_sender_false_positive_flow'), (e.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = 'explicit_media_message_send_blocked'), (e.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = 'explicit_media_add_media_to_forum_post_blocked'), e;
    })({});
function Z(e) {
    let { action: t, channelId: n, messageId: r, context: i } = e;
    if (null == n || null == r) return;
    let o = d.Z.getChannel(n);
    p.default.track(b.rMx.EXPLICIT_MEDIA_ACTION, {
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
    if (null == a || null == s || ((null != (t = null == u ? void 0 : u.length) ? t : 0) === 0 && (null != (n = null == f ? void 0 : f.length) ? n : 0) === 0)) return;
    let _ = d.Z.getChannel(a);
    p.default.track(b.rMx.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: a,
        guild_id: null == _ ? void 0 : _.guild_id,
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
        l.Z.distribution({ name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION }, (null != (i = null == u ? void 0 : u.length) ? i : 0) + (null != (o = null == f ? void 0 : f.length) ? o : 0));
}
function K(e) {
    let { channelId: t, numOfAttachments: n, numOfAttachmentsPendingScan: i, numOfEmbeds: o, numOfEmbedsPendingScan: a } = e;
    if (null == t) return;
    let s = d.Z.getChannel(t);
    p.default.track(b.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
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
    let { messageId: t, channelId: n, numOfAttachments: r, numOfEmbeds: i, numOfGoreAttachments: o, numOfExplicitAttachments: a, numOfGoreEmbeds: s, numOfExplicitEmbeds: l } = e,
        c = a > 0 || l > 0,
        u = o > 0 || s > 0;
    if (null == n || null == t || (!c && !u)) return;
    let f = d.Z.getChannel(n);
    p.default.track(b.rMx.REDACTABLE_MESSAGE_LOADED, {
        message_id: t,
        channel_id: n,
        channel_type: null == f ? void 0 : f.type,
        guild_id: null == f ? void 0 : f.guild_id,
        num_of_attachments: r,
        num_of_gore_attachments: o,
        num_of_explicit_attachments: a,
        num_of_embeds: i,
        num_of_gore_embeds: s,
        num_of_explicit_embeds: l,
        has_redactable_explicit: c,
        has_redactable_gore: u
    });
}
function q(e) {
    let { messageId: t, channelId: n, numOfAttachments: r, numOfExplicitAttachments: i, numOfEmbeds: o, numOfExplicitEmbeds: a } = e;
    if (null == n) return;
    let s = d.Z.getChannel(n);
    p.default.track(b.rMx.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
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
function Q(e) {
    let { attachments: t, embeds: n } = X(e),
        r = J(e);
    return (e = e.merge({
        attachments: t,
        embeds: n,
        messageSnapshots: r
    }));
}
function X(e) {
    return {
        attachments: e.attachments.map((e) => (null == e.content_scan_version && (e.content_scan_version = -1), e)),
        embeds: e.embeds.map((e) => (null == e.contentScanVersion && (e.contentScanVersion = -1), e))
    };
}
function J(e) {
    let { messageSnapshots: t } = e;
    return null == t || 0 === t.length
        ? t
        : t.map((e) => {
              let { message: t } = e,
                  { attachments: n, embeds: r } = X(t);
              return (
                  (t = t.merge({
                      attachments: n,
                      embeds: r
                  })),
                  (e = e.merge({ message: t }))
              );
          });
}
let $ = (e, t) => null != e && null != t && (e <= E.LN || t <= E.iE);
function ee() {
    let e = (0, g.G7)('explicit_media_redaction_utils'),
        t = (0, o.sf)();
    return e && t;
}
function et() {
    let e = (0, g.UQ)('explicit_media_redaction_utils'),
        t = (0, o.L5)();
    return e && t;
}
function en(e) {
    let { obscure: t } = e;
    (0, o.M$)() && p.default.track(b.rMx.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, { toggle_direction: t ? 'hide' : 'show' });
}
