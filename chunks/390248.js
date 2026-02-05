"use strict";
n.d(t, {
    Kl: () => C,
    SW: () => E,
    Td: () => b,
    VL: () => I,
    Wi: () => x,
    _R: () => L,
    aY: () => P,
    bz: () => v,
    gm: () => y,
    hK: () => D,
    hv: () => A,
    j8: () => O,
    qZ: () => w,
    rA: () => T,
    rY: () => g,
    zt: () => S,
});
var r = n(687123),
    i = n(731738);
n(873298);
var a = n(36149);
n(865116);
var s = n(831062),
    o = n(207560),
    l = n(203389),
    u = n(64313),
    c = n(734057),
    d = n(954571),
    _ = n(581381);
n(900819);
var f = n(338717),
    p = n(961440),
    h = n(652215);
n(985018);
let m = 1;
var g = (function (e) {
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
function A(e) {
    let { action: t, channelId: n, messageId: r, context: i } = e;
    if (null == n || null == r) return;
    let a = c.A.getChannel(n);
    d.default.track(h.HAw.EXPLICIT_MEDIA_ACTION, {
        action: t,
        guild_id: a?.guild_id,
        channel_id: n,
        message_id: r,
        user_is_underage: (0, l.L)(),
        context: i,
    });
}
var I = (function (e) {
    return (e.UPDATE = "update"), (e.TIMEOUT = "timeout"), e;
})({});
function T(e, t) {
    let n = Math.min(Math.floor((Date.now() - e) / 1e3), 3);
    s.A.increment({
        name: i.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
        tags: [`timingBucket:${n}`, `source:${t}`, `metricVersion:${m}`],
    });
}
function y(e) {
    let { channelId: t, messageId: n, attachmentIds: r, embedIds: a } = e;
    if (null == t || null == n || ((r?.length ?? 0) === 0 && (a?.length ?? 0) === 0)) return;
    let o = c.A.getChannel(t);
    d.default.track(h.HAw.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: t,
        guild_id: o?.guild_id,
        message_id: n,
        embed_ids: a,
        user_is_underage: (0, l.L)(),
        scan_timeout_duration: _.MX,
        attachment_ids_v2: r,
    }),
        s.A.increment({ name: i.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, tags: [`metricVersion:${m}`] }),
        s.A.distribution(
            { name: i.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION },
            (r?.length ?? 0) + (a?.length ?? 0),
        );
}
function S(e) {
    let {
        channelId: t,
        numOfAttachments: n,
        numOfAttachmentsPendingScan: r,
        numOfEmbeds: a,
        numOfEmbedsPendingScan: o,
    } = e;
    if (null == t) return;
    let l = c.A.getChannel(t);
    d.default.track(h.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        channel_id: t,
        guild_id: l?.guild_id,
        num_of_attachments: n,
        num_of_attachments_pending_scan: r,
        num_of_embeds: a,
        num_of_embeds_pending_scan: o,
    });
    let u = r + o;
    u > 0 && s.A.distribution({ name: i.K.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 }, u);
}
function v(e) {
    let {
            messageId: t,
            channelId: n,
            numOfAttachments: r,
            numOfSelfHarmAttachments: i,
            numOfEmbeds: a,
            numOfGoreAttachments: s,
            numOfExplicitAttachments: o,
            numOfSelfHarmEmbeds: l,
            numOfGoreEmbeds: u,
            numOfExplicitEmbeds: _,
        } = e,
        f = o > 0 || _ > 0,
        p = s > 0 || u > 0,
        m = i > 0 || l > 0;
    if (null == n || null == t || (!f && !p && !m)) return;
    let g = c.A.getChannel(n);
    d.default.track(h.HAw.REDACTABLE_MESSAGE_LOADED, {
        message_id: t,
        channel_id: n,
        channel_type: g?.type,
        guild_id: g?.guild_id,
        num_of_attachments: r,
        num_of_gore_attachments: s,
        num_of_explicit_attachments: o,
        num_of_self_harm_attachments: i,
        num_of_embeds: a,
        num_of_gore_embeds: u,
        num_of_explicit_embeds: _,
        num_of_self_harm_embeds: l,
        has_redactable_explicit: f,
        has_redactable_gore: p,
        has_redactable_self_harm: m,
    });
}
function C(e) {
    let {
        messageId: t,
        channelId: n,
        numOfAttachments: r,
        numOfExplicitAttachments: i,
        numOfEmbeds: a,
        numOfExplicitEmbeds: s,
    } = e;
    if (null == n) return;
    let o = c.A.getChannel(n);
    d.default.track(h.HAw.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
        message_id: t,
        channel_id: n,
        channel_type: o?.type,
        guild_id: o?.guild_id,
        num_of_attachments: r,
        num_of_explicit_attachments: i,
        num_of_embeds: a,
        num_of_explicit_embeds: s,
    });
}
function b(e) {
    let { attachments: t, embeds: n } = N(e),
        r = R(e);
    return e.merge({ attachments: t, embeds: n, messageSnapshots: r });
}
function N(e) {
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
                  { attachments: n, embeds: r } = N(t);
              return (t = t.merge({ attachments: n, embeds: r })), (e = e.merge({ message: t }));
          });
}
let O = (e, t) => null != e && null != t && (e <= p._L || t <= p.jd);
function D() {
    let e = (0, o.d6)(r.t.SENSITIVE_CONTENT_SHOW_SETTING),
        t = (0, u.o)("explicit_media_redaction_utils"),
        n = e || t,
        i = (0, a.p9)();
    return n && i;
}
function L() {
    let e = (0, o.aX)(r.t.SENSITIVE_CONTENT_SHOW_SETTING),
        t = (0, u.j)("explicit_media_redaction_utils"),
        n = e || t,
        i = (0, a.i2)();
    return n && i;
}
function w(e) {
    return !!L() && null != e && f.tY.has(e);
}
function x(e) {
    let { obscure: t } = e;
    (0, a.$8)() && d.default.track(h.HAw.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, { toggle_direction: t ? "hide" : "show" });
}
function P(e) {
    return e.message_snapshots?.some(
        (e) =>
            (e.message?.attachments != null && e.message.attachments.length > 0) ||
            (e.message?.embeds != null && e.message.embeds.length > 0),
    );
}
