n.d(t, {
    Cm: () => Y,
    HH: () => D,
    Hc: () => V,
    IV: () => j,
    KP: () => P,
    OP: () => F,
    Pq: () => Z,
    Sv: () => M,
    Tw: () => w,
    UU: () => G,
    Yy: () => U,
    aP: () => B,
    bR: () => z,
    l4: () => R,
    lJ: () => L,
    oh: () => k,
    tG: () => A,
    vx: () => O,
    xx: () => H,
    zj: () => x
}),
    n(789020);
var i = n(286379),
    r = n(524437),
    a = n(432877),
    s = n(768494),
    o = n(797614),
    l = n(182274),
    u = n(695346),
    c = n(592125),
    d = n(699516),
    f = n(594174),
    _ = n(626135),
    p = n(630388),
    h = n(948561),
    m = n(651530),
    g = n(719548),
    E = n(981631),
    v = n(973005);
n(388032);
let y = {
        [v.TI.DISABLED.valueOf()]: r.Q4.SHOW,
        [v.TI.NON_FRIENDS.valueOf()]: r.Q4.SHOW,
        [v.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK
    },
    I = {
        [v.TI.DISABLED.valueOf()]: r.Q4.SHOW,
        [v.TI.NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
        [v.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK
    },
    b = {
        [v.TI.DISABLED.valueOf()]: r.Q4.BLUR,
        [v.TI.NON_FRIENDS.valueOf()]: r.Q4.BLUR,
        [v.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK
    },
    T = {
        [v.TI.DISABLED.valueOf()]: r.Q4.BLUR,
        [v.TI.NON_FRIENDS.valueOf()]: r.Q4.BLOCK,
        [v.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: r.Q4.BLOCK
    },
    S = 1,
    A = (e) => {
        let { setting: t, isDm: n = !1, isFriend: i = !1 } = e;
        if (null != t && t !== r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
        let a = f.default.getCurrentUser();
        return (null == a ? void 0 : a.nsfwAllowed) === !1
            ? C({
                  isDm: n,
                  isFriend: i
              })
            : N({
                  isDm: n,
                  isFriend: i
              });
    },
    N = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return r.Q4.SHOW;
        let i = u.UP.getSetting();
        return n ? y[i] : I[i];
    },
    C = (e) => {
        let { isDm: t = !1, isFriend: n = !1 } = e;
        if (!t) return r.Q4.BLUR;
        let i = u.UP.getSetting();
        return n ? b[i] : T[i];
    },
    R = () => {
        let e = u.Sh.getSetting();
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
function O(e) {
    return e === r.Q4.BLUR || e === r.Q4.BLOCK;
}
function D(e) {
    var t;
    if (!(0, m.Kh)()) return !1;
    let n = f.default.getCurrentUser();
    if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id) return !1;
    let { explicitContentGuilds: i, explicitContentFriendDm: r, explicitContentNonFriendDm: a } = R(),
        s = c.Z.getChannel(e.channel_id);
    return null != s && (s.isDM() || s.isGroupDM() ? (null != e.author && d.Z.getFriendIDs().includes(e.author.id) ? O(r) : O(a)) : O(i));
}
let x = (e) => {
    let t = R();
    u.Sh.updateSetting({
        ...t,
        ...e
    });
};
var L = (function (e) {
    return (e[(e.Attachment = 0)] = 'Attachment'), (e[(e.Embed = 1)] = 'Embed'), (e[(e.GenericMedia = 2)] = 'GenericMedia'), e;
})({});
function P(e, t) {
    var n, i, r, o;
    if (!t) return !1;
    if (a.ZP.get('obscure_blur_effect_enabled')) return !0;
    switch (e.type) {
        case 1:
            return (0, p.yE)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, E.xPJ.CONTAINS_EXPLICIT_MEDIA);
        case 0:
            return (0, p.yE)(null !== (i = e.media.flags) && void 0 !== i ? i : 0, E.J0y.CONTAINS_EXPLICIT_MEDIA);
        case 2:
            return (0, p.yE)(null !== (o = null === (r = e.media.contentScanMetadata) || void 0 === r ? void 0 : r.flags) && void 0 !== o ? o : 0, s.Cb.EXPLICIT);
        default:
            return !1;
    }
}
function w(e) {
    return D(e)
        ? {
              obscuredAttachments: e.attachments.filter((e) =>
                  P(
                      {
                          type: 0,
                          media: e
                      },
                      !0
                  )
              ),
              obscuredEmbeds: e.embeds.filter((e) =>
                  P(
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
function M(e) {
    return !a.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}
function k(e) {
    return !a.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}
var U = (function (e) {
        return (e.EXPLICIT_MEDIA_LEARN_MORE_VIEWED = 'explicit_media_learn_more_viewed'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = 'explicit_media_learn_more_click_settings'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = 'explicit_media_learn_more_click_learn_more'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = 'explicit_media_learn_more_click_dismiss'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = 'explicit_media_learn_more_click_false_positive'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = 'explicit_media_false_positive_viewed'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = 'explicit_media_false_positive_click_confirm'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = 'explicit_media_false_positive_click_cancel'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = 'explicit_media_sender_false_positive_button_clicked'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = 'explicit_media_false_positive_clyde_message_sent'), e;
    })({}),
    G = (function (e) {
        return (e.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = 'explicit_media_obscured_false_positive_flow'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = 'explicit_media_sender_false_positive_flow'), (e.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = 'explicit_media_message_send_blocked'), (e.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = 'explicit_media_add_media_to_forum_post_blocked'), e;
    })({});
function B(e) {
    let { action: t, channelId: n, messageId: i, context: r } = e;
    if (null == n || null == i) return;
    let a = c.Z.getChannel(n);
    _.default.track(E.rMx.EXPLICIT_MEDIA_ACTION, {
        action: t,
        guild_id: null == a ? void 0 : a.guild_id,
        channel_id: n,
        message_id: i,
        user_is_underage: (0, l.U)(),
        context: r
    });
}
var Z = (function (e) {
    return (e.UPDATE = 'update'), (e.TIMEOUT = 'timeout'), e;
})({});
function F(e, t) {
    let n = Math.min(Math.floor((Date.now() - e) / 1000), 3);
    o.Z.increment({
        name: i.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
        tags: ['timingBucket:'.concat(n), 'source:'.concat(t), 'metricVersion:'.concat(S)]
    });
}
function V(e) {
    var t, n, r, a;
    let { channelId: s, messageId: u, attachmentIds: d, embedIds: f } = e;
    if (null == s || null == u || ((null !== (t = null == d ? void 0 : d.length) && void 0 !== t ? t : 0) === 0 && (null !== (n = null == f ? void 0 : f.length) && void 0 !== n ? n : 0) === 0)) return;
    let p = c.Z.getChannel(s);
    _.default.track(E.rMx.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: s,
        guild_id: null == p ? void 0 : p.guild_id,
        message_id: u,
        embed_ids: f,
        user_is_underage: (0, l.U)(),
        scan_timeout_duration: h.b2,
        attachment_ids_v2: d
    }),
        o.Z.increment({
            name: i.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
            tags: ['metricVersion:'.concat(S)]
        }),
        o.Z.distribution({ name: i.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION }, (null !== (r = null == d ? void 0 : d.length) && void 0 !== r ? r : 0) + (null !== (a = null == f ? void 0 : f.length) && void 0 !== a ? a : 0));
}
function j(e) {
    let { channelId: t, numOfAttachments: n, numOfAttachmentsPendingScan: r, numOfEmbeds: a, numOfEmbedsPendingScan: s } = e;
    if (null == t) return;
    let l = c.Z.getChannel(t);
    _.default.track(E.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        channel_id: t,
        guild_id: null == l ? void 0 : l.guild_id,
        num_of_attachments: n,
        num_of_attachments_pending_scan: r,
        num_of_embeds: a,
        num_of_embeds_pending_scan: s
    });
    let u = r + s;
    u > 0 && o.Z.distribution({ name: i.V.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 }, u);
}
function H(e) {
    let { messageId: t, channelId: n, numOfAttachments: i, numOfExplicitAttachments: r, numOfEmbeds: a, numOfExplicitEmbeds: s } = e;
    if (null == n) return;
    let o = c.Z.getChannel(n);
    _.default.track(E.rMx.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
        message_id: t,
        channel_id: n,
        channel_type: null == o ? void 0 : o.type,
        guild_id: null == o ? void 0 : o.guild_id,
        num_of_attachments: i,
        num_of_explicit_attachments: r,
        num_of_embeds: a,
        num_of_explicit_embeds: s
    });
}
function Y(e) {
    let { attachments: t, embeds: n } = W(e),
        i = K(e);
    return (e = e.merge({
        attachments: t,
        embeds: n,
        messageSnapshots: i
    }));
}
function W(e) {
    return {
        attachments: e.attachments.map((e) => (null == e.content_scan_version && (e.content_scan_version = -1), e)),
        embeds: e.embeds.map((e) => (null == e.contentScanVersion && (e.contentScanVersion = -1), e))
    };
}
function K(e) {
    let { messageSnapshots: t } = e;
    return null == t || 0 === t.length
        ? t
        : t.map((e) => {
              let { message: t } = e,
                  { attachments: n, embeds: i } = W(t);
              return (
                  (t = t.merge({
                      attachments: n,
                      embeds: i
                  })),
                  (e = e.merge({ message: t }))
              );
          });
}
let z = (e, t) => null != e && null != t && (e <= g.LN || t <= g.iE);
