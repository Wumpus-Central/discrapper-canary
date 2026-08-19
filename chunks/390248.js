"use strict";
n.d(t, {
    Kl: () => R,
    SW: () => T,
    Td: () => L,
    VL: () => g,
    Wi: () => P,
    _R: () => b,
    aY: () => U,
    bz: () => O,
    gm: () => N,
    hK: () => v,
    hv: () => m,
    j8: () => D,
    qZ: () => M,
    rA: () => S,
    rY: () => p,
    zt: () => C,
});
var i,
    r,
    a,
    s = n(687123),
    l = n(731738);
n(873298);
var o = n(36149);
n(865116);
var d = n(807393),
    c = n(207560),
    u = n(203389),
    _ = n(734057),
    E = n(174459),
    A = n(183041);
n(900019);
var h = n(338717),
    I = n(961440),
    f = n(652215);
n(375708);
var p =
        (((i = {}).EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed"),
        (i.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings"),
        (i.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more"),
        (i.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss"),
        (i.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive"),
        (i.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY = "explicit_media_learn_more_click_age_verify_reverify"),
        (i.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE =
            "explicit_media_learn_more_click_age_verify_learn_more"),
        (i.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed"),
        (i.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm"),
        (i.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel"),
        (i.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = "explicit_media_sender_false_positive_button_clicked"),
        (i.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = "explicit_media_false_positive_clyde_message_sent"),
        i),
    T =
        (((r = {}).EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = "explicit_media_obscured_false_positive_flow"),
        (r.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = "explicit_media_sender_false_positive_flow"),
        (r.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = "explicit_media_message_send_blocked"),
        (r.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = "explicit_media_add_media_to_forum_post_blocked"),
        r);
function m(e) {
    let { action: t, channelId: n, messageId: i, context: r } = e;
    if (null == n || null == i) return;
    let a = _.A.getChannel(n);
    E.default.track(f.HAw.EXPLICIT_MEDIA_ACTION, {
        action: t,
        guild_id: a?.guild_id,
        channel_id: n,
        message_id: i,
        user_is_underage: (0, u.L)(),
        context: r,
    });
}
var g = (((a = {}).UPDATE = "update"), (a.TIMEOUT = "timeout"), a);
function S(e, t) {
    let n = Math.min(Math.floor((Date.now() - e) / 1e3), 3);
    d.A.increment({
        name: l.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
        tags: [`timingBucket:${n}`, `source:${t}`, "metricVersion:1"],
    });
}
function N(e) {
    let { channelId: t, messageId: n, attachmentIds: i, embedIds: r } = e;
    if (null == t || null == n || ((i?.length ?? 0) === 0 && (r?.length ?? 0) === 0)) return;
    let a = _.A.getChannel(t);
    E.default.track(f.HAw.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: t,
        guild_id: a?.guild_id,
        message_id: n,
        embed_ids: r,
        user_is_underage: (0, u.L)(),
        scan_timeout_duration: A.MX,
        attachment_ids_v2: i,
    }),
        d.A.increment({ name: l.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, tags: ["metricVersion:1"] }),
        d.A.distribution(
            { name: l.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION },
            (i?.length ?? 0) + (r?.length ?? 0),
        );
}
function C(e) {
    let {
        channelId: t,
        numOfAttachments: n,
        numOfAttachmentsPendingScan: i,
        numOfEmbeds: r,
        numOfEmbedsPendingScan: a,
    } = e;
    if (null == t) return;
    let s = _.A.getChannel(t);
    E.default.track(f.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        channel_id: t,
        guild_id: s?.guild_id,
        num_of_attachments: n,
        num_of_attachments_pending_scan: i,
        num_of_embeds: r,
        num_of_embeds_pending_scan: a,
    });
    let o = i + a;
    o > 0 && d.A.distribution({ name: l.K.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 }, o);
}
function O(e) {
    let {
            messageId: t,
            channelId: n,
            numOfAttachments: i,
            numOfSelfHarmAttachments: r,
            numOfEmbeds: a,
            numOfGoreAttachments: s,
            numOfExplicitAttachments: l,
            numOfSelfHarmEmbeds: o,
            numOfGoreEmbeds: d,
            numOfExplicitEmbeds: c,
        } = e,
        u = l > 0 || c > 0,
        A = s > 0 || d > 0,
        h = r > 0 || o > 0;
    if (null == n || null == t || (!u && !A && !h)) return;
    let I = _.A.getChannel(n);
    E.default.track(f.HAw.REDACTABLE_MESSAGE_LOADED, {
        message_id: t,
        channel_id: n,
        channel_type: I?.type,
        guild_id: I?.guild_id,
        num_of_attachments: i,
        num_of_gore_attachments: s,
        num_of_explicit_attachments: l,
        num_of_self_harm_attachments: r,
        num_of_embeds: a,
        num_of_gore_embeds: d,
        num_of_explicit_embeds: c,
        num_of_self_harm_embeds: o,
        has_redactable_explicit: u,
        has_redactable_gore: A,
        has_redactable_self_harm: h,
    });
}
function R(e) {
    let {
        messageId: t,
        channelId: n,
        numOfAttachments: i,
        numOfExplicitAttachments: r,
        numOfEmbeds: a,
        numOfExplicitEmbeds: s,
    } = e;
    if (null == n) return;
    let l = _.A.getChannel(n);
    E.default.track(f.HAw.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
        message_id: t,
        channel_id: n,
        channel_type: l?.type,
        guild_id: l?.guild_id,
        num_of_attachments: i,
        num_of_explicit_attachments: r,
        num_of_embeds: a,
        num_of_explicit_embeds: s,
    });
}
function L(e) {
    let { attachments: t, embeds: n } = y(e),
        i = (function (e) {
            let { messageSnapshots: t } = e;
            return null == t || 0 === t.length
                ? t
                : t.map((e) => {
                      let { message: t } = e,
                          { attachments: n, embeds: i } = y(t);
                      return (t = t.merge({ attachments: n, embeds: i })), (e = e.merge({ message: t }));
                  });
        })(e);
    return e.merge({ attachments: t, embeds: n, messageSnapshots: i });
}
function y(e) {
    return {
        attachments: e.attachments.map((e) => ((e.content_scan_version = -1), e)),
        embeds: e.embeds.map((e) => ((e.contentScanVersion = -1), e)),
    };
}
function D(e, t) {
    return null != e && null != t && (e <= I._L || t <= I.jd);
}
function v() {
    let e = (0, c.d6)(s.t.SENSITIVE_CONTENT_SHOW_SETTING),
        t = (0, o.p9)();
    return e && t;
}
function b() {
    let e = (0, c.aX)(s.t.SENSITIVE_CONTENT_SHOW_SETTING),
        t = (0, o.i2)();
    return e && t;
}
function M(e) {
    return !!b() && null != e && h.tY.has(e);
}
function P(e) {
    let { obscure: t } = e;
    (0, o.$8)() && E.default.track(f.HAw.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, { toggle_direction: t ? "hide" : "show" });
}
function U(e) {
    return e.message_snapshots?.some(
        (e) =>
            (e.message?.attachments != null && e.message.attachments.length > 0) ||
            (e.message?.embeds != null && e.message.embeds.length > 0),
    );
}
