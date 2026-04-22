"use strict";
n.d(t, {
    Kl: () => R,
    SW: () => A,
    Td: () => v,
    VL: () => T,
    Wi: () => M,
    _R: () => L,
    aY: () => P,
    bz: () => O,
    gm: () => y,
    hK: () => D,
    hv: () => I,
    j8: () => b,
    qZ: () => w,
    rA: () => S,
    rY: () => g,
    zt: () => N,
});
var r,
    i,
    s,
    a = n(687123),
    o = n(731738);
n(873298);
var l = n(36149);
n(865116);
var u = n(831062),
    d = n(207560),
    c = n(203389),
    _ = n(734057),
    f = n(954571),
    E = n(581381);
n(900819);
var h = n(338717),
    p = n(961440),
    m = n(652215);
n(985018);
var g =
        (((r = {}).EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed"),
        (r.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings"),
        (r.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more"),
        (r.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss"),
        (r.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive"),
        (r.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY = "explicit_media_learn_more_click_age_verify_reverify"),
        (r.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE =
            "explicit_media_learn_more_click_age_verify_learn_more"),
        (r.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed"),
        (r.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm"),
        (r.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel"),
        (r.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = "explicit_media_sender_false_positive_button_clicked"),
        (r.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = "explicit_media_false_positive_clyde_message_sent"),
        r),
    A =
        (((i = {}).EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = "explicit_media_obscured_false_positive_flow"),
        (i.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = "explicit_media_sender_false_positive_flow"),
        (i.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = "explicit_media_message_send_blocked"),
        (i.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = "explicit_media_add_media_to_forum_post_blocked"),
        i);
function I(e) {
    let { action: t, channelId: n, messageId: r, context: i } = e;
    if (null == n || null == r) return;
    let s = _.A.getChannel(n);
    f.default.track(m.HAw.EXPLICIT_MEDIA_ACTION, {
        action: t,
        guild_id: s?.guild_id,
        channel_id: n,
        message_id: r,
        user_is_underage: (0, c.L)(),
        context: i,
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
    let { channelId: t, messageId: n, attachmentIds: r, embedIds: i } = e;
    if (null == t || null == n || ((r?.length ?? 0) === 0 && (i?.length ?? 0) === 0)) return;
    let s = _.A.getChannel(t);
    f.default.track(m.HAw.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: t,
        guild_id: s?.guild_id,
        message_id: n,
        embed_ids: i,
        user_is_underage: (0, c.L)(),
        scan_timeout_duration: E.MX,
        attachment_ids_v2: r,
    }),
        u.A.increment({ name: o.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, tags: ["metricVersion:1"] }),
        u.A.distribution(
            { name: o.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION },
            (r?.length ?? 0) + (i?.length ?? 0),
        );
}
function N(e) {
    let {
        channelId: t,
        numOfAttachments: n,
        numOfAttachmentsPendingScan: r,
        numOfEmbeds: i,
        numOfEmbedsPendingScan: s,
    } = e;
    if (null == t) return;
    let a = _.A.getChannel(t);
    f.default.track(m.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        channel_id: t,
        guild_id: a?.guild_id,
        num_of_attachments: n,
        num_of_attachments_pending_scan: r,
        num_of_embeds: i,
        num_of_embeds_pending_scan: s,
    });
    let l = r + s;
    l > 0 && u.A.distribution({ name: o.K.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 }, l);
}
function O(e) {
    let {
            messageId: t,
            channelId: n,
            numOfAttachments: r,
            numOfSelfHarmAttachments: i,
            numOfEmbeds: s,
            numOfGoreAttachments: a,
            numOfExplicitAttachments: o,
            numOfSelfHarmEmbeds: l,
            numOfGoreEmbeds: u,
            numOfExplicitEmbeds: d,
        } = e,
        c = o > 0 || d > 0,
        E = a > 0 || u > 0,
        h = i > 0 || l > 0;
    if (null == n || null == t || (!c && !E && !h)) return;
    let p = _.A.getChannel(n);
    f.default.track(m.HAw.REDACTABLE_MESSAGE_LOADED, {
        message_id: t,
        channel_id: n,
        channel_type: p?.type,
        guild_id: p?.guild_id,
        num_of_attachments: r,
        num_of_gore_attachments: a,
        num_of_explicit_attachments: o,
        num_of_self_harm_attachments: i,
        num_of_embeds: s,
        num_of_gore_embeds: u,
        num_of_explicit_embeds: d,
        num_of_self_harm_embeds: l,
        has_redactable_explicit: c,
        has_redactable_gore: E,
        has_redactable_self_harm: h,
    });
}
function R(e) {
    let {
        messageId: t,
        channelId: n,
        numOfAttachments: r,
        numOfExplicitAttachments: i,
        numOfEmbeds: s,
        numOfExplicitEmbeds: a,
    } = e;
    if (null == n) return;
    let o = _.A.getChannel(n);
    f.default.track(m.HAw.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
        message_id: t,
        channel_id: n,
        channel_type: o?.type,
        guild_id: o?.guild_id,
        num_of_attachments: r,
        num_of_explicit_attachments: i,
        num_of_embeds: s,
        num_of_explicit_embeds: a,
    });
}
function v(e) {
    let { attachments: t, embeds: n } = C(e),
        r = (function (e) {
            let { messageSnapshots: t } = e;
            return null == t || 0 === t.length
                ? t
                : t.map((e) => {
                      let { message: t } = e,
                          { attachments: n, embeds: r } = C(t);
                      return (t = t.merge({ attachments: n, embeds: r })), (e = e.merge({ message: t }));
                  });
        })(e);
    return e.merge({ attachments: t, embeds: n, messageSnapshots: r });
}
function C(e) {
    return {
        attachments: e.attachments.map((e) => ((e.content_scan_version = -1), e)),
        embeds: e.embeds.map((e) => ((e.contentScanVersion = -1), e)),
    };
}
let b = (e, t) => null != e && null != t && (e <= p._L || t <= p.jd);
function D() {
    let e = (0, d.d6)(a.t.SENSITIVE_CONTENT_SHOW_SETTING),
        t = (0, l.p9)();
    return e && t;
}
function L() {
    let e = (0, d.aX)(a.t.SENSITIVE_CONTENT_SHOW_SETTING),
        t = (0, l.i2)();
    return e && t;
}
function w(e) {
    return !!L() && null != e && h.tY.has(e);
}
function M(e) {
    let { obscure: t } = e;
    (0, l.$8)() && f.default.track(m.HAw.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, { toggle_direction: t ? "hide" : "show" });
}
function P(e) {
    return e.message_snapshots?.some(
        (e) =>
            (e.message?.attachments != null && e.message.attachments.length > 0) ||
            (e.message?.embeds != null && e.message.embeds.length > 0),
    );
}
