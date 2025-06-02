n.d(t, {
    Cm: () => U,
    Hc: () => x,
    IV: () => k,
    Jl: () => H,
    KP: () => S,
    Ks: () => V,
    OP: () => L,
    PZ: () => T,
    Pq: () => D,
    QN: () => M,
    Sv: () => N,
    Tw: () => A,
    UU: () => R,
    Yy: () => P,
    aP: () => w,
    bR: () => F,
    lJ: () => I,
    m8: () => Z,
    oh: () => C,
    rA: () => Y,
    xx: () => j
}),
    n(997841);
var r = n(286379);
n(524437);
var i = n(81643),
    a = n(432877),
    o = n(768494),
    s = n(797614),
    l = n(182274),
    c = n(592125),
    u = n(699516),
    d = n(594174),
    f = n(626135),
    _ = n(630388),
    p = n(948561),
    h = n(704454),
    m = n(470734),
    g = n(656577),
    E = n(925513),
    b = n(721360),
    y = n(719548),
    O = n(981631);
n(388032);
let v = 1;
var I = (function (e) {
    return (e[(e.Attachment = 0)] = 'Attachment'), (e[(e.Embed = 1)] = 'Embed'), (e[(e.GenericMedia = 2)] = 'GenericMedia'), e;
})({});
function S(e, t) {
    var n, r, i, s;
    if (!t) return !1;
    if (a.ZP.get('obscure_blur_effect_enabled')) return !0;
    switch (e.type) {
        case 1:
            return (0, _.yE)(null != (n = e.media.flags) ? n : 0, O.xPJ.CONTAINS_EXPLICIT_MEDIA);
        case 0:
            return (0, _.yE)(null != (r = e.media.flags) ? r : 0, O.J0y.CONTAINS_EXPLICIT_MEDIA);
        case 2:
            return (0, _.yE)(null != (s = null == (i = e.media.contentScanMetadata) ? void 0 : i.flags) ? s : 0, o.Cb.EXPLICIT);
        default:
            return !1;
    }
}
function T(e) {
    var t;
    let n = d.default.getCurrentUser();
    if (null == n || (null == (t = e.author) ? void 0 : t.id) === n.id) return !1;
    let { explicitContentGuilds: r, explicitContentFriendDm: i, explicitContentNonFriendDm: a } = (0, g.l4)(),
        { goreContentGuilds: o, goreContentFriendDm: s, goreContentNonFriendDm: l } = (0, E.O6)(),
        f = (0, m.U2)('shouldRedactMessageMedia'),
        _ = c.Z.getChannel(e.channel_id);
    return null != _ && (_.isDM() || _.isGroupDM() ? (null != e.author && u.Z.getFriendIDs().includes(e.author.id) ? (0, b.v)(i) || (f && (0, b.v)(s)) : (0, b.v)(a) || (f && (0, b.v)(l))) : (0, b.v)(r) || (f && (0, b.v)(o)));
}
function A(e) {
    return T(e)
        ? {
              obscuredAttachments: e.attachments.filter((e) =>
                  S(
                      {
                          type: 0,
                          media: e
                      },
                      !0
                  )
              ),
              obscuredEmbeds: e.embeds.filter((e) =>
                  S(
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
function N(e) {
    return !a.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}
function C(e) {
    return !a.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}
var P = (function (e) {
        return (e.EXPLICIT_MEDIA_LEARN_MORE_VIEWED = 'explicit_media_learn_more_viewed'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = 'explicit_media_learn_more_click_settings'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = 'explicit_media_learn_more_click_learn_more'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = 'explicit_media_learn_more_click_dismiss'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = 'explicit_media_learn_more_click_false_positive'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY = 'explicit_media_learn_more_click_age_verify_reverify'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE = 'explicit_media_learn_more_click_age_verify_learn_more'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = 'explicit_media_false_positive_viewed'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = 'explicit_media_false_positive_click_confirm'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = 'explicit_media_false_positive_click_cancel'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = 'explicit_media_sender_false_positive_button_clicked'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = 'explicit_media_false_positive_clyde_message_sent'), e;
    })({}),
    R = (function (e) {
        return (e.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = 'explicit_media_obscured_false_positive_flow'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = 'explicit_media_sender_false_positive_flow'), (e.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = 'explicit_media_message_send_blocked'), (e.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = 'explicit_media_add_media_to_forum_post_blocked'), e;
    })({});
function w(e) {
    let { action: t, channelId: n, messageId: r, context: i } = e;
    if (null == n || null == r) return;
    let a = c.Z.getChannel(n);
    f.default.track(O.rMx.EXPLICIT_MEDIA_ACTION, {
        action: t,
        guild_id: null == a ? void 0 : a.guild_id,
        channel_id: n,
        message_id: r,
        user_is_underage: (0, l.U)(),
        context: i
    });
}
var D = (function (e) {
    return (e.UPDATE = 'update'), (e.TIMEOUT = 'timeout'), e;
})({});
function L(e, t) {
    let n = Math.min(Math.floor((Date.now() - e) / 1000), 3);
    s.Z.increment({
        name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
        tags: ['timingBucket:'.concat(n), 'source:'.concat(t), 'metricVersion:'.concat(v)]
    });
}
function x(e) {
    var t, n, i, a;
    let { channelId: o, messageId: u, attachmentIds: d, embedIds: _ } = e;
    if (null == o || null == u || ((null != (t = null == d ? void 0 : d.length) ? t : 0) === 0 && (null != (n = null == _ ? void 0 : _.length) ? n : 0) === 0)) return;
    let h = c.Z.getChannel(o);
    f.default.track(O.rMx.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: o,
        guild_id: null == h ? void 0 : h.guild_id,
        message_id: u,
        embed_ids: _,
        user_is_underage: (0, l.U)(),
        scan_timeout_duration: p.b2,
        attachment_ids_v2: d
    }),
        s.Z.increment({
            name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
            tags: ['metricVersion:'.concat(v)]
        }),
        s.Z.distribution({ name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION }, (null != (i = null == d ? void 0 : d.length) ? i : 0) + (null != (a = null == _ ? void 0 : _.length) ? a : 0));
}
function k(e) {
    let { channelId: t, numOfAttachments: n, numOfAttachmentsPendingScan: i, numOfEmbeds: a, numOfEmbedsPendingScan: o } = e;
    if (null == t) return;
    let l = c.Z.getChannel(t);
    f.default.track(O.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        channel_id: t,
        guild_id: null == l ? void 0 : l.guild_id,
        num_of_attachments: n,
        num_of_attachments_pending_scan: i,
        num_of_embeds: a,
        num_of_embeds_pending_scan: o
    });
    let u = i + o;
    u > 0 && s.Z.distribution({ name: r.V.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 }, u);
}
function M(e) {
    let { messageId: t, channelId: n, numOfAttachments: r, numOfEmbeds: i, numOfGoreAttachments: a, numOfExplicitAttachments: o, numOfGoreEmbeds: s, numOfExplicitEmbeds: l } = e,
        u = o > 0 || l > 0,
        d = a > 0 || s > 0;
    if (null == n || null == t || (!u && !d)) return;
    let _ = c.Z.getChannel(n);
    f.default.track(O.rMx.REDACTABLE_MESSAGE_LOADED, {
        message_id: t,
        channel_id: n,
        channel_type: null == _ ? void 0 : _.type,
        guild_id: null == _ ? void 0 : _.guild_id,
        num_of_attachments: r,
        num_of_gore_attachments: a,
        num_of_explicit_attachments: o,
        num_of_embeds: i,
        num_of_gore_embeds: s,
        num_of_explicit_embeds: l,
        has_redactable_explicit: u,
        has_redactable_gore: d
    });
}
function j(e) {
    let { messageId: t, channelId: n, numOfAttachments: r, numOfExplicitAttachments: i, numOfEmbeds: a, numOfExplicitEmbeds: o } = e;
    if (null == n) return;
    let s = c.Z.getChannel(n);
    f.default.track(O.rMx.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
        message_id: t,
        channel_id: n,
        channel_type: null == s ? void 0 : s.type,
        guild_id: null == s ? void 0 : s.guild_id,
        num_of_attachments: r,
        num_of_explicit_attachments: i,
        num_of_embeds: a,
        num_of_explicit_embeds: o
    });
}
function U(e) {
    let { attachments: t, embeds: n } = G(e),
        r = B(e);
    return (e = e.merge({
        attachments: t,
        embeds: n,
        messageSnapshots: r
    }));
}
function G(e) {
    return {
        attachments: e.attachments.map((e) => (null == e.content_scan_version && (e.content_scan_version = -1), e)),
        embeds: e.embeds.map((e) => (null == e.contentScanVersion && (e.contentScanVersion = -1), e))
    };
}
function B(e) {
    let { messageSnapshots: t } = e;
    return null == t || 0 === t.length
        ? t
        : t.map((e) => {
              let { message: t } = e,
                  { attachments: n, embeds: r } = G(t);
              return (
                  (t = t.merge({
                      attachments: n,
                      embeds: r
                  })),
                  (e = e.merge({ message: t }))
              );
          });
}
let F = (e, t) => null != e && null != t && (e <= y.LN || t <= y.iE);
function V() {
    let e = (0, h.G7)('explicit_media_redaction_utils'),
        t = (0, i.sf)();
    return e && t;
}
function Z() {
    let e = (0, h.UQ)('explicit_media_redaction_utils'),
        t = (0, i.L5)();
    return e && t;
}
function H(e) {
    let { obscure: t } = e;
    (0, i.M$)() && f.default.track(O.rMx.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, { toggle_direction: t ? 'hide' : 'show' });
}
function Y(e) {
    if (null != e.attachments) return e.attachments.some((e) => null != e.flags && (0, _.yE)(e.flags, O.J0y.CONTAINS_EXPLICIT_MEDIA));
    if (null != e.embeds) return e.embeds.some((e) => null != e.flags && (0, _.yE)(e.flags, O.xPJ.CONTAINS_EXPLICIT_MEDIA));
    let t = e;
    return null != t.messageSnapshots && t.messageSnapshots.some((e) => null != e.message && Y(e.message));
}
