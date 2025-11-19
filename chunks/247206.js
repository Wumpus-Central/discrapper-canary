n.d(t, {
    Cm: () => S,
    Hc: () => O,
    IV: () => v,
    JO: () => D,
    Jl: () => w,
    Ks: () => R,
    M0: () => L,
    OP: () => y,
    Pq: () => b,
    QN: () => I,
    UU: () => g,
    Yy: () => m,
    aP: () => E,
    m8: () => P,
    xx: () => T,
    yf: () => N,
});
var r = n(286379);
n(524437);
var i = n(81643);
n(432877);
var a = n(797614),
    o = n(182274),
    s = n(128064),
    l = n(312870),
    c = n(592125),
    u = n(626135),
    d = n(948561);
n(774863);
var f = n(936141),
    _ = n(719548),
    p = n(981631);
n(388032);
let h = 1;
var m = (function (e) {
        return (
            (e.EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed"),
            (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings"),
            (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more"),
            (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss"),
            (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive"),
            (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY =
                "explicit_media_learn_more_click_age_verify_reverify"),
            (e.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE =
                "explicit_media_learn_more_click_age_verify_learn_more"),
            (e.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed"),
            (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm"),
            (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel"),
            (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED =
                "explicit_media_sender_false_positive_button_clicked"),
            (e.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = "explicit_media_false_positive_clyde_message_sent"),
            e
        );
    })({}),
    g = (function (e) {
        return (
            (e.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = "explicit_media_obscured_false_positive_flow"),
            (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = "explicit_media_sender_false_positive_flow"),
            (e.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = "explicit_media_message_send_blocked"),
            (e.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = "explicit_media_add_media_to_forum_post_blocked"),
            e
        );
    })({});
function E(e) {
    let { action: t, channelId: n, messageId: r, context: i } = e;
    if (null == n || null == r) return;
    let a = c.Z.getChannel(n);
    u.default.track(p.rMx.EXPLICIT_MEDIA_ACTION, {
        action: t,
        guild_id: null == a ? void 0 : a.guild_id,
        channel_id: n,
        message_id: r,
        user_is_underage: (0, o.U)(),
        context: i,
    });
}
var b = (function (e) {
    return (e.UPDATE = "update"), (e.TIMEOUT = "timeout"), e;
})({});
function y(e, t) {
    let n = Math.min(Math.floor((Date.now() - e) / 1000), 3);
    a.Z.increment({
        name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
        tags: ["timingBucket:".concat(n), "source:".concat(t), "metricVersion:".concat(h)],
    });
}
function O(e) {
    var t, n, i, s;
    let { channelId: l, messageId: f, attachmentIds: _, embedIds: m } = e;
    if (
        null == l ||
        null == f ||
        ((null != (t = null == _ ? void 0 : _.length) ? t : 0) === 0 &&
            (null != (n = null == m ? void 0 : m.length) ? n : 0) === 0)
    )
        return;
    let g = c.Z.getChannel(l);
    u.default.track(p.rMx.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: l,
        guild_id: null == g ? void 0 : g.guild_id,
        message_id: f,
        embed_ids: m,
        user_is_underage: (0, o.U)(),
        scan_timeout_duration: d.b2,
        attachment_ids_v2: _,
    }),
        a.Z.increment({
            name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
            tags: ["metricVersion:".concat(h)],
        }),
        a.Z.distribution(
            { name: r.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION },
            (null != (i = null == _ ? void 0 : _.length) ? i : 0) +
                (null != (s = null == m ? void 0 : m.length) ? s : 0),
        );
}
function v(e) {
    let {
        channelId: t,
        numOfAttachments: n,
        numOfAttachmentsPendingScan: i,
        numOfEmbeds: o,
        numOfEmbedsPendingScan: s,
    } = e;
    if (null == t) return;
    let l = c.Z.getChannel(t);
    u.default.track(p.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        channel_id: t,
        guild_id: null == l ? void 0 : l.guild_id,
        num_of_attachments: n,
        num_of_attachments_pending_scan: i,
        num_of_embeds: o,
        num_of_embeds_pending_scan: s,
    });
    let d = i + s;
    d > 0 && a.Z.distribution({ name: r.V.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 }, d);
}
function I(e) {
    let {
            messageId: t,
            channelId: n,
            numOfAttachments: r,
            numOfSelfHarmAttachments: i,
            numOfEmbeds: a,
            numOfGoreAttachments: o,
            numOfExplicitAttachments: s,
            numOfSelfHarmEmbeds: l,
            numOfGoreEmbeds: d,
            numOfExplicitEmbeds: f,
        } = e,
        _ = s > 0 || f > 0,
        h = o > 0 || d > 0,
        m = i > 0 || l > 0;
    if (null == n || null == t || (!_ && !h && !m)) return;
    let g = c.Z.getChannel(n);
    u.default.track(p.rMx.REDACTABLE_MESSAGE_LOADED, {
        message_id: t,
        channel_id: n,
        channel_type: null == g ? void 0 : g.type,
        guild_id: null == g ? void 0 : g.guild_id,
        num_of_attachments: r,
        num_of_gore_attachments: o,
        num_of_explicit_attachments: s,
        num_of_self_harm_attachments: i,
        num_of_embeds: a,
        num_of_gore_embeds: d,
        num_of_explicit_embeds: f,
        num_of_self_harm_embeds: l,
        has_redactable_explicit: _,
        has_redactable_gore: h,
        has_redactable_self_harm: m,
    });
}
function T(e) {
    let {
        messageId: t,
        channelId: n,
        numOfAttachments: r,
        numOfExplicitAttachments: i,
        numOfEmbeds: a,
        numOfExplicitEmbeds: o,
    } = e;
    if (null == n) return;
    let s = c.Z.getChannel(n);
    u.default.track(p.rMx.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
        message_id: t,
        channel_id: n,
        channel_type: null == s ? void 0 : s.type,
        guild_id: null == s ? void 0 : s.guild_id,
        num_of_attachments: r,
        num_of_explicit_attachments: i,
        num_of_embeds: a,
        num_of_explicit_embeds: o,
    });
}
function S(e) {
    let { attachments: t, embeds: n } = A(e),
        r = C(e);
    return (e = e.merge({
        attachments: t,
        embeds: n,
        messageSnapshots: r,
    }));
}
function A(e) {
    return {
        attachments: e.attachments.map((e) => ((e.content_scan_version = -1), e)),
        embeds: e.embeds.map((e) => ((e.contentScanVersion = -1), e)),
    };
}
function C(e) {
    let { messageSnapshots: t } = e;
    return null == t || 0 === t.length
        ? t
        : t.map((e) => {
              let { message: t } = e,
                  { attachments: n, embeds: r } = A(t);
              return (
                  (t = t.merge({
                      attachments: n,
                      embeds: r,
                  })),
                  (e = e.merge({ message: t }))
              );
          });
}
let N = (e, t) => null != e && null != t && (e <= _.LN || t <= _.iE);
function R() {
    let e = (0, s.c_)("explicit_media_redaction_utils"),
        t = (0, l.U)("explicit_media_redaction_utils"),
        n = e || t,
        r = (0, i.sf)();
    return n && r;
}
function P() {
    let e = (0, s.pY)("explicit_media_redaction_utils"),
        t = (0, l.s)("explicit_media_redaction_utils"),
        n = e || t,
        r = (0, i.L5)();
    return n && r;
}
function D(e) {
    return !!P() && null != e && f.eq.has(e);
}
function w(e) {
    let { obscure: t } = e;
    (0, i.M$)() && u.default.track(p.rMx.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, { toggle_direction: t ? "hide" : "show" });
}
function L(e) {
    var t;
    return null == (t = e.message_snapshots)
        ? void 0
        : t.some((e) => {
              var t, n;
              return (
                  ((null == (t = e.message) ? void 0 : t.attachments) != null && e.message.attachments.length > 0) ||
                  ((null == (n = e.message) ? void 0 : n.embeds) != null && e.message.embeds.length > 0)
              );
          });
}
