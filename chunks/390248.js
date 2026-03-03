"use strict";
n.d(t, {
    Kl: () => v,
    SW: () => E,
    Td: () => N,
    VL: () => A,
    Wi: () => w,
    _R: () => D,
    aY: () => M,
    bz: () => y,
    gm: () => T,
    hK: () => b,
    hv: () => g,
    j8: () => O,
    qZ: () => L,
    rA: () => I,
    rY: () => m,
    zt: () => S,
});
var r = n(687123),
    i = n(731738);
n(873298);
var s = n(36149);
n(865116);
var a = n(831062),
    o = n(207560),
    l = n(203389),
    u = n(734057),
    c = n(954571),
    d = n(581381);
n(900819);
var _ = n(338717),
    f = n(961440),
    p = n(652215);
n(985018);
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
    E = (function (e) {
        return (
            (e.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = "explicit_media_obscured_false_positive_flow"),
            (e.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = "explicit_media_sender_false_positive_flow"),
            (e.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = "explicit_media_message_send_blocked"),
            (e.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = "explicit_media_add_media_to_forum_post_blocked"),
            e
        );
    })({});
function g(e) {
    let { action: t, channelId: n, messageId: r, context: i } = e;
    if (null == n || null == r) return;
    let s = u.A.getChannel(n);
    c.default.track(p.HAw.EXPLICIT_MEDIA_ACTION, {
        action: t,
        guild_id: s?.guild_id,
        channel_id: n,
        message_id: r,
        user_is_underage: (0, l.L)(),
        context: i,
    });
}
var A = (function (e) {
    return (e.UPDATE = "update"), (e.TIMEOUT = "timeout"), e;
})({});
function I(e, t) {
    let n = Math.min(Math.floor((Date.now() - e) / 1e3), 3);
    a.A.increment({
        name: i.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
        tags: [`timingBucket:${n}`, `source:${t}`, `metricVersion:${h}`],
    });
}
function T(e) {
    let { channelId: t, messageId: n, attachmentIds: r, embedIds: s } = e;
    if (null == t || null == n || ((r?.length ?? 0) === 0 && (s?.length ?? 0) === 0)) return;
    let o = u.A.getChannel(t);
    c.default.track(p.HAw.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: t,
        guild_id: o?.guild_id,
        message_id: n,
        embed_ids: s,
        user_is_underage: (0, l.L)(),
        scan_timeout_duration: d.MX,
        attachment_ids_v2: r,
    }),
        a.A.increment({ name: i.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, tags: [`metricVersion:${h}`] }),
        a.A.distribution(
            { name: i.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION },
            (r?.length ?? 0) + (s?.length ?? 0),
        );
}
function S(e) {
    let {
        channelId: t,
        numOfAttachments: n,
        numOfAttachmentsPendingScan: r,
        numOfEmbeds: s,
        numOfEmbedsPendingScan: o,
    } = e;
    if (null == t) return;
    let l = u.A.getChannel(t);
    c.default.track(p.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        channel_id: t,
        guild_id: l?.guild_id,
        num_of_attachments: n,
        num_of_attachments_pending_scan: r,
        num_of_embeds: s,
        num_of_embeds_pending_scan: o,
    });
    let d = r + o;
    d > 0 && a.A.distribution({ name: i.K.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 }, d);
}
function y(e) {
    let {
            messageId: t,
            channelId: n,
            numOfAttachments: r,
            numOfSelfHarmAttachments: i,
            numOfEmbeds: s,
            numOfGoreAttachments: a,
            numOfExplicitAttachments: o,
            numOfSelfHarmEmbeds: l,
            numOfGoreEmbeds: d,
            numOfExplicitEmbeds: _,
        } = e,
        f = o > 0 || _ > 0,
        h = a > 0 || d > 0,
        m = i > 0 || l > 0;
    if (null == n || null == t || (!f && !h && !m)) return;
    let E = u.A.getChannel(n);
    c.default.track(p.HAw.REDACTABLE_MESSAGE_LOADED, {
        message_id: t,
        channel_id: n,
        channel_type: E?.type,
        guild_id: E?.guild_id,
        num_of_attachments: r,
        num_of_gore_attachments: a,
        num_of_explicit_attachments: o,
        num_of_self_harm_attachments: i,
        num_of_embeds: s,
        num_of_gore_embeds: d,
        num_of_explicit_embeds: _,
        num_of_self_harm_embeds: l,
        has_redactable_explicit: f,
        has_redactable_gore: h,
        has_redactable_self_harm: m,
    });
}
function v(e) {
    let {
        messageId: t,
        channelId: n,
        numOfAttachments: r,
        numOfExplicitAttachments: i,
        numOfEmbeds: s,
        numOfExplicitEmbeds: a,
    } = e;
    if (null == n) return;
    let o = u.A.getChannel(n);
    c.default.track(p.HAw.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
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
function N(e) {
    let { attachments: t, embeds: n } = C(e),
        r = R(e);
    return e.merge({ attachments: t, embeds: n, messageSnapshots: r });
}
function C(e) {
    return {
        attachments: e.attachments.map((e) => ((e.content_scan_version = -1), e)),
        embeds: e.embeds.map((e) => ((e.contentScanVersion = -1), e)),
    };
}
function R(e) {
    let { messageSnapshots: t } = e;
    return null == t || 0 === t.length
        ? t
        : t.map((e) => {
              let { message: t } = e,
                  { attachments: n, embeds: r } = C(t);
              return (t = t.merge({ attachments: n, embeds: r })), (e = e.merge({ message: t }));
          });
}
let O = (e, t) => null != e && null != t && (e <= f._L || t <= f.jd);
function b() {
    let e = (0, o.d6)(r.t.SENSITIVE_CONTENT_SHOW_SETTING),
        t = (0, s.p9)();
    return e && t;
}
function D() {
    let e = (0, o.aX)(r.t.SENSITIVE_CONTENT_SHOW_SETTING),
        t = (0, s.i2)();
    return e && t;
}
function L(e) {
    return !!D() && null != e && _.tY.has(e);
}
function w(e) {
    let { obscure: t } = e;
    (0, s.$8)() && c.default.track(p.HAw.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, { toggle_direction: t ? "hide" : "show" });
}
function M(e) {
    return e.message_snapshots?.some(
        (e) =>
            (e.message?.attachments != null && e.message.attachments.length > 0) ||
            (e.message?.embeds != null && e.message.embeds.length > 0),
    );
}
