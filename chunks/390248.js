"use strict";
n.d(t, {
    Kl: () => v,
    SW: () => A,
    Td: () => R,
    VL: () => T,
    Wi: () => M,
    _R: () => L,
    aY: () => P,
    bz: () => N,
    gm: () => y,
    hK: () => D,
    hv: () => I,
    j8: () => b,
    qZ: () => w,
    rA: () => S,
    rY: () => g,
    zt: () => C,
});
var i,
    r,
    s,
    a = n(687123),
    o = n(731738);
n(873298);
var l = n(36149);
n(865116);
var u = n(807393),
    c = n(207560),
    d = n(203389),
    _ = n(734057),
    h = n(174459),
    f = n(183041);
n(900019);
var p = n(338717),
    E = n(961440),
    m = n(652215);
n(375708);
var g =
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
    A =
        (((r = {}).EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = "explicit_media_obscured_false_positive_flow"),
        (r.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = "explicit_media_sender_false_positive_flow"),
        (r.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = "explicit_media_message_send_blocked"),
        (r.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = "explicit_media_add_media_to_forum_post_blocked"),
        r);
function I(e) {
    let { action: t, channelId: n, messageId: i, context: r } = e;
    if (null == n || null == i) return;
    let s = _.A.getChannel(n);
    h.default.track(m.HAw.EXPLICIT_MEDIA_ACTION, {
        action: t,
        guild_id: s?.guild_id,
        channel_id: n,
        message_id: i,
        user_is_underage: (0, d.L)(),
        context: r,
    });
}
var T = (((s = {}).UPDATE = "update"), (s.TIMEOUT = "timeout"), s);
function S(e, t) {
    let n = Math.min(Math.floor((Date.now() - e) / 1e3), 3);
    u.A.increment({
        name: o.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
        tags: [`timingBucket:${n}`, `source:${t}`, "metricVersion:1"],
    });
}
function y(e) {
    let { channelId: t, messageId: n, attachmentIds: i, embedIds: r } = e;
    if (null == t || null == n || ((i?.length ?? 0) === 0 && (r?.length ?? 0) === 0)) return;
    let s = _.A.getChannel(t);
    h.default.track(m.HAw.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: t,
        guild_id: s?.guild_id,
        message_id: n,
        embed_ids: r,
        user_is_underage: (0, d.L)(),
        scan_timeout_duration: f.MX,
        attachment_ids_v2: i,
    }),
        u.A.increment({ name: o.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, tags: ["metricVersion:1"] }),
        u.A.distribution(
            { name: o.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION },
            (i?.length ?? 0) + (r?.length ?? 0),
        );
}
function C(e) {
    let {
        channelId: t,
        numOfAttachments: n,
        numOfAttachmentsPendingScan: i,
        numOfEmbeds: r,
        numOfEmbedsPendingScan: s,
    } = e;
    if (null == t) return;
    let a = _.A.getChannel(t);
    h.default.track(m.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        channel_id: t,
        guild_id: a?.guild_id,
        num_of_attachments: n,
        num_of_attachments_pending_scan: i,
        num_of_embeds: r,
        num_of_embeds_pending_scan: s,
    });
    let l = i + s;
    l > 0 && u.A.distribution({ name: o.K.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 }, l);
}
function N(e) {
    let {
            messageId: t,
            channelId: n,
            numOfAttachments: i,
            numOfSelfHarmAttachments: r,
            numOfEmbeds: s,
            numOfGoreAttachments: a,
            numOfExplicitAttachments: o,
            numOfSelfHarmEmbeds: l,
            numOfGoreEmbeds: u,
            numOfExplicitEmbeds: c,
        } = e,
        d = o > 0 || c > 0,
        f = a > 0 || u > 0,
        p = r > 0 || l > 0;
    if (null == n || null == t || (!d && !f && !p)) return;
    let E = _.A.getChannel(n);
    h.default.track(m.HAw.REDACTABLE_MESSAGE_LOADED, {
        message_id: t,
        channel_id: n,
        channel_type: E?.type,
        guild_id: E?.guild_id,
        num_of_attachments: i,
        num_of_gore_attachments: a,
        num_of_explicit_attachments: o,
        num_of_self_harm_attachments: r,
        num_of_embeds: s,
        num_of_gore_embeds: u,
        num_of_explicit_embeds: c,
        num_of_self_harm_embeds: l,
        has_redactable_explicit: d,
        has_redactable_gore: f,
        has_redactable_self_harm: p,
    });
}
function v(e) {
    let {
        messageId: t,
        channelId: n,
        numOfAttachments: i,
        numOfExplicitAttachments: r,
        numOfEmbeds: s,
        numOfExplicitEmbeds: a,
    } = e;
    if (null == n) return;
    let o = _.A.getChannel(n);
    h.default.track(m.HAw.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
        message_id: t,
        channel_id: n,
        channel_type: o?.type,
        guild_id: o?.guild_id,
        num_of_attachments: i,
        num_of_explicit_attachments: r,
        num_of_embeds: s,
        num_of_explicit_embeds: a,
    });
}
function R(e) {
    let { attachments: t, embeds: n } = O(e),
        i = (function (e) {
            let { messageSnapshots: t } = e;
            return null == t || 0 === t.length
                ? t
                : t.map((e) => {
                      let { message: t } = e,
                          { attachments: n, embeds: i } = O(t);
                      return (t = t.merge({ attachments: n, embeds: i })), (e = e.merge({ message: t }));
                  });
        })(e);
    return e.merge({ attachments: t, embeds: n, messageSnapshots: i });
}
function O(e) {
    return {
        attachments: e.attachments.map((e) => ((e.content_scan_version = -1), e)),
        embeds: e.embeds.map((e) => ((e.contentScanVersion = -1), e)),
    };
}
let b = (e, t) => null != e && null != t && (e <= E._L || t <= E.jd);
function D() {
    let e = (0, c.d6)(a.t.SENSITIVE_CONTENT_SHOW_SETTING),
        t = (0, l.p9)();
    return e && t;
}
function L() {
    let e = (0, c.aX)(a.t.SENSITIVE_CONTENT_SHOW_SETTING),
        t = (0, l.i2)();
    return e && t;
}
function w(e) {
    return !!L() && null != e && p.tY.has(e);
}
function M(e) {
    let { obscure: t } = e;
    (0, l.$8)() && h.default.track(m.HAw.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, { toggle_direction: t ? "hide" : "show" });
}
function P(e) {
    return e.message_snapshots?.some(
        (e) =>
            (e.message?.attachments != null && e.message.attachments.length > 0) ||
            (e.message?.embeds != null && e.message.embeds.length > 0),
    );
}
