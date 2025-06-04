n.d(t, {
    Cm: () => G,
    Hc: () => k,
    IV: () => M,
    Jl: () => Y,
    KP: () => T,
    Ks: () => Z,
    OP: () => x,
    PZ: () => A,
    Pq: () => L,
    QN: () => j,
    Sv: () => C,
    Tw: () => N,
    UU: () => w,
    Yy: () => R,
    aP: () => D,
    bR: () => V,
    lJ: () => S,
    m8: () => H,
    oh: () => P,
    rA: () => W,
    xx: () => U
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
    m = n(774863),
    g = n(470734),
    E = n(656577),
    b = n(925513),
    y = n(721360),
    O = n(719548),
    v = n(981631);
n(388032);
let I = 1;
var S = (function (e) {
    return (e[(e.Attachment = 0)] = 'Attachment'), (e[(e.Embed = 1)] = 'Embed'), (e[(e.GenericMedia = 2)] = 'GenericMedia'), e;
})({});
function T(e, t) {
    var n, r, i, s;
    if (!t) return !1;
    if (a.ZP.get('obscure_blur_effect_explicit_content_enabled') || a.ZP.get('obscure_blur_effect_gore_content_enabled')) return !0;
    let l = (0, g.U2)('isMediaObscured');
    switch (e.type) {
        case 1:
            return (0, _.EB)(null != (n = e.media.flags) ? n : 0, l ? v.xPJ.CONTAINS_EXPLICIT_MEDIA | v.xPJ.CONTAINS_GORE_CONTENT : v.xPJ.CONTAINS_EXPLICIT_MEDIA);
        case 0:
            return (0, _.EB)(null != (r = e.media.flags) ? r : 0, l ? v.J0y.CONTAINS_EXPLICIT_MEDIA | v.J0y.CONTAINS_GORE_CONTENT : v.J0y.CONTAINS_EXPLICIT_MEDIA);
        case 2:
            return (0, _.EB)(null != (s = null == (i = e.media.contentScanMetadata) ? void 0 : i.flags) ? s : 0, l ? o.Cb.EXPLICIT | o.Cb.GORE : o.Cb.EXPLICIT);
        default:
            return !1;
    }
}
function A(e) {
    var t;
    let n = d.default.getCurrentUser();
    if (null == n || (null == (t = e.author) ? void 0 : t.id) === n.id) return !1;
    let { explicitContentGuilds: r, explicitContentFriendDm: i, explicitContentNonFriendDm: a } = (0, E.l4)(),
        { goreContentGuilds: o, goreContentFriendDm: s, goreContentNonFriendDm: l } = (0, b.O6)(),
        f = (0, g.U2)('shouldRedactMessageMedia'),
        _ = c.Z.getChannel(e.channel_id);
    return null != _ && (_.isDM() || _.isGroupDM() ? (null != e.author && u.Z.getFriendIDs().includes(e.author.id) ? (0, y.v)(i) || (f && (0, y.v)(s)) : (0, y.v)(a) || (f && (0, y.v)(l))) : (0, y.v)(r) || (f && (0, y.v)(o)));
}
function N(e) {
    return A(e)
        ? {
              obscuredAttachments: e.attachments.filter((e) =>
                  T(
                      {
                          type: 0,
                          media: e
                      },
                      !0
                  )
              ),
              obscuredEmbeds: e.embeds.filter((e) =>
                  T(
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
function C(e) {
    if (a.ZP.get('explicit_media_redaction_ignore_pending_scan') || 0 === e || -1 === e) return !1;
    let t = (0, g.U2)('isPendingScanVersion');
    return null == e || (t && e !== m.Z.validContentScanVersion);
}
function P(e) {
    if (a.ZP.get('explicit_media_redaction_ignore_pending_scan')) return !1;
    let t = null == e ? void 0 : e.version;
    if (0 === t || -1 === t) return !1;
    let n = (0, g.U2)('isPendingScan');
    return null == e || (n && e.version !== m.Z.validContentScanVersion);
}
var R = (function (e) {
        return (e.EXPLICIT_MEDIA_LEARN_MORE_VIEWED = 'explicit_media_learn_more_viewed'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = 'explicit_media_learn_more_click_settings'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = 'explicit_media_learn_more_click_learn_more'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = 'explicit_media_learn_more_click_dismiss'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = 'explicit_media_learn_more_click_false_positive'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY = 'explicit_media_learn_more_click_age_verify_reverify'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE = 'explicit_media_learn_more_click_age_verify_learn_more'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = 'explicit_media_false_positive_viewed'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = 'explicit_media_false_positive_click_confirm'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = 'explicit_media_false_positive_click_cancel'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = 'explicit_media_sender_false_positive_button_clicked'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = 'explicit_media_false_positive_clyde_message_sent'), e;
    })({}),
    w = (function (e) {
        return (e.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = 'explicit_media_obscured_false_positive_flow'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = 'explicit_media_sender_false_positive_flow'), (e.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = 'explicit_media_message_send_blocked'), (e.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = 'explicit_media_add_media_to_forum_post_blocked'), e;
    })({});
function D(e) {
    let { action: t, channelId: n, messageId: r, context: i } = e;
    if (null == n || null == r) return;
    let a = c.Z.getChannel(n);
    f.default.track(v.rMx.EXPLICIT_MEDIA_ACTION, {
        action: t,
        guild_id: null == a ? void 0 : a.guild_id,
        channel_id: n,
        message_id: r,
        user_is_underage: (0, l.U)(),
        context: i
    });
}
var L = (function (e) {
    return (e.UPDATE = 'update'), (e.TIMEOUT = 'timeout'), e;
})({});
function x(e, t) {
    let n = Math.min(Math.floor((Date.now() - e) / 1000), 3);
    s.Z.increment({
        name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
        tags: ['timingBucket:'.concat(n), 'source:'.concat(t), 'metricVersion:'.concat(I)]
    });
}
function k(e) {
    var t, n, i, a;
    let { channelId: o, messageId: u, attachmentIds: d, embedIds: _ } = e;
    if (null == o || null == u || ((null != (t = null == d ? void 0 : d.length) ? t : 0) === 0 && (null != (n = null == _ ? void 0 : _.length) ? n : 0) === 0)) return;
    let h = c.Z.getChannel(o);
    f.default.track(v.rMx.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
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
            tags: ['metricVersion:'.concat(I)]
        }),
        s.Z.distribution({ name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION }, (null != (i = null == d ? void 0 : d.length) ? i : 0) + (null != (a = null == _ ? void 0 : _.length) ? a : 0));
}
function M(e) {
    let { channelId: t, numOfAttachments: n, numOfAttachmentsPendingScan: i, numOfEmbeds: a, numOfEmbedsPendingScan: o } = e;
    if (null == t) return;
    let l = c.Z.getChannel(t);
    f.default.track(v.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
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
function j(e) {
    let { messageId: t, channelId: n, numOfAttachments: r, numOfEmbeds: i, numOfGoreAttachments: a, numOfExplicitAttachments: o, numOfGoreEmbeds: s, numOfExplicitEmbeds: l } = e,
        u = o > 0 || l > 0,
        d = a > 0 || s > 0;
    if (null == n || null == t || (!u && !d)) return;
    let _ = c.Z.getChannel(n);
    f.default.track(v.rMx.REDACTABLE_MESSAGE_LOADED, {
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
function U(e) {
    let { messageId: t, channelId: n, numOfAttachments: r, numOfExplicitAttachments: i, numOfEmbeds: a, numOfExplicitEmbeds: o } = e;
    if (null == n) return;
    let s = c.Z.getChannel(n);
    f.default.track(v.rMx.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
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
function G(e) {
    let { attachments: t, embeds: n } = B(e),
        r = F(e);
    return (e = e.merge({
        attachments: t,
        embeds: n,
        messageSnapshots: r
    }));
}
function B(e) {
    return {
        attachments: e.attachments.map((e) => ((e.content_scan_version = -1), e)),
        embeds: e.embeds.map((e) => ((e.contentScanVersion = -1), e))
    };
}
function F(e) {
    let { messageSnapshots: t } = e;
    return null == t || 0 === t.length
        ? t
        : t.map((e) => {
              let { message: t } = e,
                  { attachments: n, embeds: r } = B(t);
              return (
                  (t = t.merge({
                      attachments: n,
                      embeds: r
                  })),
                  (e = e.merge({ message: t }))
              );
          });
}
let V = (e, t) => null != e && null != t && (e <= O.LN || t <= O.iE);
function Z() {
    let e = (0, h.G7)('explicit_media_redaction_utils'),
        t = (0, i.sf)();
    return e && t;
}
function H() {
    let e = (0, h.UQ)('explicit_media_redaction_utils'),
        t = (0, i.L5)();
    return e && t;
}
function Y(e) {
    let { obscure: t } = e;
    (0, i.M$)() && f.default.track(v.rMx.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, { toggle_direction: t ? 'hide' : 'show' });
}
function W(e) {
    let t = !1;
    null != e.attachments && (t = t || e.attachments.some((e) => null != e.flags && (0, _.yE)(e.flags, v.J0y.CONTAINS_EXPLICIT_MEDIA))), null != e.embeds && (t = t || e.embeds.some((e) => null != e.flags && (0, _.yE)(e.flags, v.xPJ.CONTAINS_EXPLICIT_MEDIA)));
    let n = e;
    return null != n.messageSnapshots && (t = t || n.messageSnapshots.some((e) => null != e.message && W(e.message))), t;
}
