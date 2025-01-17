r.d(n, {
    Cm: function () {
        return K;
    },
    HH: function () {
        return k;
    },
    Hc: function () {
        return H;
    },
    IV: function () {
        return Y;
    },
    KP: function () {
        return B;
    },
    OP: function () {
        return j;
    },
    Pq: function () {
        return o;
    },
    Sv: function () {
        return Z;
    },
    Tw: function () {
        return G;
    },
    UU: function () {
        return s;
    },
    Yy: function () {
        return a;
    },
    aP: function () {
        return V;
    },
    bR: function () {
        return Q;
    },
    l4: function () {
        return P;
    },
    lJ: function () {
        return i;
    },
    oh: function () {
        return F;
    },
    tG: function () {
        return L;
    },
    vx: function () {
        return M;
    },
    xx: function () {
        return W;
    },
    zj: function () {
        return U;
    }
});
var i,
    a,
    s,
    o,
    l = r(789020);
var u = r(286379),
    c = r(524437),
    d = r(432877),
    f = r(768494),
    _ = r(797614),
    h = r(182274),
    p = r(695346),
    m = r(592125),
    g = r(699516),
    E = r(594174),
    v = r(626135),
    I = r(630388),
    T = r(948561),
    b = r(651530),
    y = r(719548),
    S = r(981631),
    A = r(973005);
r(388032);
let N = {
        [A.TI.DISABLED.valueOf()]: c.Q4.SHOW,
        [A.TI.NON_FRIENDS.valueOf()]: c.Q4.SHOW,
        [A.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: c.Q4.BLOCK
    },
    C = {
        [A.TI.DISABLED.valueOf()]: c.Q4.SHOW,
        [A.TI.NON_FRIENDS.valueOf()]: c.Q4.BLOCK,
        [A.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: c.Q4.BLOCK
    },
    R = {
        [A.TI.DISABLED.valueOf()]: c.Q4.BLUR,
        [A.TI.NON_FRIENDS.valueOf()]: c.Q4.BLUR,
        [A.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: c.Q4.BLOCK
    },
    O = {
        [A.TI.DISABLED.valueOf()]: c.Q4.BLUR,
        [A.TI.NON_FRIENDS.valueOf()]: c.Q4.BLOCK,
        [A.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: c.Q4.BLOCK
    },
    D = 1,
    L = (e) => {
        let { setting: n, isDm: r = !1, isFriend: i = !1 } = e;
        if (null != n && n !== c.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return n;
        let a = E.default.getCurrentUser();
        return (null == a ? void 0 : a.nsfwAllowed) === !1
            ? w({
                  isDm: r,
                  isFriend: i
              })
            : x({
                  isDm: r,
                  isFriend: i
              });
    },
    x = (e) => {
        let { isDm: n = !1, isFriend: r = !1 } = e;
        if (!n) return c.Q4.SHOW;
        let i = p.UP.getSetting();
        return r ? N[i] : C[i];
    },
    w = (e) => {
        let { isDm: n = !1, isFriend: r = !1 } = e;
        if (!n) return c.Q4.BLUR;
        let i = p.UP.getSetting();
        return r ? R[i] : O[i];
    },
    P = () => {
        let e = p.Sh.getSetting();
        return {
            explicitContentGuilds: L({ setting: null == e ? void 0 : e.explicitContentGuilds }),
            explicitContentNonFriendDm: L({
                setting: null == e ? void 0 : e.explicitContentNonFriendDm,
                isDm: !0
            }),
            explicitContentFriendDm: L({
                setting: null == e ? void 0 : e.explicitContentFriendDm,
                isDm: !0,
                isFriend: !0
            })
        };
    };
function M(e) {
    return e === c.Q4.BLUR || e === c.Q4.BLOCK;
}
function k(e) {
    var n;
    if (!(0, b.Kh)()) return !1;
    let r = E.default.getCurrentUser();
    if (null == r || (null === (n = e.author) || void 0 === n ? void 0 : n.id) === r.id) return !1;
    let { explicitContentGuilds: i, explicitContentFriendDm: a, explicitContentNonFriendDm: s } = P(),
        o = m.Z.getChannel(e.channel_id);
    if (null == o) return !1;
    if (o.isDM() || o.isGroupDM()) return null != e.author && g.Z.getFriendIDs().includes(e.author.id) ? M(a) : M(s);
    return M(i);
}
let U = (e) => {
    let n = P();
    p.Sh.updateSetting({
        ...n,
        ...e
    });
};
function B(e, n) {
    var r, i, a, s;
    if (!n) return !1;
    if (d.ZP.get('obscure_blur_effect_enabled')) return !0;
    switch (e.type) {
        case 1:
            return (0, I.yE)(null !== (r = e.media.flags) && void 0 !== r ? r : 0, S.xPJ.CONTAINS_EXPLICIT_MEDIA);
        case 0:
            return (0, I.yE)(null !== (i = e.media.flags) && void 0 !== i ? i : 0, S.J0y.CONTAINS_EXPLICIT_MEDIA);
        case 2:
            return (0, I.yE)(null !== (s = null === (a = e.media.contentScanMetadata) || void 0 === a ? void 0 : a.flags) && void 0 !== s ? s : 0, f.Cb.EXPLICIT);
        default:
            return !1;
    }
}
function G(e) {
    return k(e)
        ? {
              obscuredAttachments: e.attachments.filter((e) =>
                  B(
                      {
                          type: 0,
                          media: e
                      },
                      !0
                  )
              ),
              obscuredEmbeds: e.embeds.filter((e) =>
                  B(
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
!(function (e) {
    (e[(e.Attachment = 0)] = 'Attachment'), (e[(e.Embed = 1)] = 'Embed'), (e[(e.GenericMedia = 2)] = 'GenericMedia');
})(i || (i = {}));
function Z(e) {
    return !d.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}
function F(e) {
    return !d.ZP.get('explicit_media_redaction_ignore_pending_scan') && null == e;
}
function V(e) {
    let { action: n, channelId: r, messageId: i, context: a } = e;
    if (null == r || null == i) return;
    let s = m.Z.getChannel(r);
    v.default.track(S.rMx.EXPLICIT_MEDIA_ACTION, {
        action: n,
        guild_id: null == s ? void 0 : s.guild_id,
        channel_id: r,
        message_id: i,
        user_is_underage: (0, h.U)(),
        context: a
    });
}
function j(e, n) {
    let r = Math.min(Math.floor((Date.now() - e) / 1000), 3);
    _.Z.increment({
        name: u.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
        tags: ['timingBucket:'.concat(r), 'source:'.concat(n), 'metricVersion:'.concat(D)]
    });
}
function H(e) {
    var n, r, i, a;
    let { channelId: s, messageId: o, attachmentIds: l, embedIds: c } = e;
    if (null == s || null == o || ((null !== (n = null == l ? void 0 : l.length) && void 0 !== n ? n : 0) === 0 && (null !== (r = null == c ? void 0 : c.length) && void 0 !== r ? r : 0) === 0)) return;
    let d = m.Z.getChannel(s);
    v.default.track(S.rMx.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: s,
        guild_id: null == d ? void 0 : d.guild_id,
        message_id: o,
        embed_ids: c,
        user_is_underage: (0, h.U)(),
        scan_timeout_duration: T.b2,
        attachment_ids_v2: l
    }),
        _.Z.increment({
            name: u.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
            tags: ['metricVersion:'.concat(D)]
        }),
        _.Z.distribution({ name: u.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION }, (null !== (i = null == l ? void 0 : l.length) && void 0 !== i ? i : 0) + (null !== (a = null == c ? void 0 : c.length) && void 0 !== a ? a : 0));
}
function Y(e) {
    let { channelId: n, numOfAttachments: r, numOfAttachmentsPendingScan: i, numOfEmbeds: a, numOfEmbedsPendingScan: s } = e;
    if (null == n) return;
    let o = m.Z.getChannel(n);
    v.default.track(S.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        channel_id: n,
        guild_id: null == o ? void 0 : o.guild_id,
        num_of_attachments: r,
        num_of_attachments_pending_scan: i,
        num_of_embeds: a,
        num_of_embeds_pending_scan: s
    });
    let l = i + s;
    l > 0 && _.Z.distribution({ name: u.V.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 }, l);
}
function W(e) {
    let { messageId: n, channelId: r, numOfAttachments: i, numOfExplicitAttachments: a, numOfEmbeds: s, numOfExplicitEmbeds: o } = e;
    if (null == r) return;
    let l = m.Z.getChannel(r);
    v.default.track(S.rMx.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
        message_id: n,
        channel_id: r,
        channel_type: null == l ? void 0 : l.type,
        guild_id: null == l ? void 0 : l.guild_id,
        num_of_attachments: i,
        num_of_explicit_attachments: a,
        num_of_embeds: s,
        num_of_explicit_embeds: o
    });
}
function K(e) {
    let { attachments: n, embeds: r } = z(e),
        i = q(e);
    return (e = e.merge({
        attachments: n,
        embeds: r,
        messageSnapshots: i
    }));
}
function z(e) {
    let n = e.attachments.map((e) => (null == e.content_scan_version && (e.content_scan_version = -1), e));
    return {
        attachments: n,
        embeds: e.embeds.map((e) => (null == e.contentScanVersion && (e.contentScanVersion = -1), e))
    };
}
function q(e) {
    let { messageSnapshots: n } = e;
    return null == n || 0 === n.length
        ? n
        : n.map((e) => {
              let { message: n } = e,
                  { attachments: r, embeds: i } = z(n);
              return (
                  (n = n.merge({
                      attachments: r,
                      embeds: i
                  })),
                  (e = e.merge({ message: n }))
              );
          });
}
!(function (e) {
    (e.EXPLICIT_MEDIA_LEARN_MORE_VIEWED = 'explicit_media_learn_more_viewed'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = 'explicit_media_learn_more_click_settings'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = 'explicit_media_learn_more_click_learn_more'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = 'explicit_media_learn_more_click_dismiss'), (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = 'explicit_media_learn_more_click_false_positive'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = 'explicit_media_false_positive_viewed'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = 'explicit_media_false_positive_click_confirm'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = 'explicit_media_false_positive_click_cancel'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = 'explicit_media_sender_false_positive_button_clicked'), (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = 'explicit_media_false_positive_clyde_message_sent');
})(a || (a = {})),
    !(function (e) {
        (e.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = 'explicit_media_obscured_false_positive_flow'), (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = 'explicit_media_sender_false_positive_flow'), (e.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = 'explicit_media_message_send_blocked'), (e.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = 'explicit_media_add_media_to_forum_post_blocked');
    })(s || (s = {})),
    !(function (e) {
        (e.UPDATE = 'update'), (e.TIMEOUT = 'timeout');
    })(o || (o = {}));
let Q = (e, n) => null != e && null != n && (e <= y.LN || n <= y.iE);
