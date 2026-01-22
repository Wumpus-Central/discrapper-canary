n.d(t, {
    Kl: () => I,
    SW: () => E,
    Td: () => T,
    VL: () => y,
    Wi: () => x,
    _R: () => P,
    aY: () => L,
    bz: () => S,
    gm: () => A,
    hK: () => w,
    hv: () => b,
    j8: () => R,
    qZ: () => D,
    rA: () => O,
    rY: () => g,
    zt: () => v,
});
var r = n(687123),
    i = n(731738);
n(873298);
var a = n(36149);
n(865116);
var s = n(831062),
    o = n(207560),
    l = n(203389),
    c = n(64313),
    u = n(734057),
    d = n(954571),
    f = n(581381);
n(900819);
var p = n(338717),
    _ = n(961440),
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

function b(e) {
    let { action: t, channelId: n, messageId: r, context: i } = e;
    if (null == n || null == r) return;
    let a = u.A.getChannel(n);
    d.default.track(h.HAw.EXPLICIT_MEDIA_ACTION, {
        action: t,
        guild_id: null == a ? void 0 : a.guild_id,
        channel_id: n,
        message_id: r,
        user_is_underage: (0, l.L)(),
        context: i,
    });
}
var y = (function (e) {
    return (e.UPDATE = "update"), (e.TIMEOUT = "timeout"), e;
})({});

function O(e, t) {
    let n = Math.min(Math.floor((Date.now() - e) / 1e3), 3);
    s.A.increment({
        name: i.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
        tags: ["timingBucket:".concat(n), "source:".concat(t), "metricVersion:".concat(m)],
    });
}

function A(e) {
    var t, n, r, a;
    let { channelId: o, messageId: c, attachmentIds: p, embedIds: _ } = e;
    if (
        null == o ||
        null == c ||
        ((null != (t = null == p ? void 0 : p.length) ? t : 0) === 0 &&
            (null != (n = null == _ ? void 0 : _.length) ? n : 0) === 0)
    )
        return;
    let g = u.A.getChannel(o);
    d.default.track(h.HAw.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
        channel_id: o,
        guild_id: null == g ? void 0 : g.guild_id,
        message_id: c,
        embed_ids: _,
        user_is_underage: (0, l.L)(),
        scan_timeout_duration: f.MX,
        attachment_ids_v2: p,
    }),
        s.A.increment({
            name: i.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT,
            tags: ["metricVersion:".concat(m)],
        }),
        s.A.distribution(
            {
                name: i.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION,
            },
            (null != (r = null == p ? void 0 : p.length) ? r : 0) +
                (null != (a = null == _ ? void 0 : _.length) ? a : 0),
        );
}

function v(e) {
    let {
        channelId: t,
        numOfAttachments: n,
        numOfAttachmentsPendingScan: r,
        numOfEmbeds: a,
        numOfEmbedsPendingScan: o,
    } = e;
    if (null == t) return;
    let l = u.A.getChannel(t);
    d.default.track(h.HAw.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        channel_id: t,
        guild_id: null == l ? void 0 : l.guild_id,
        num_of_attachments: n,
        num_of_attachments_pending_scan: r,
        num_of_embeds: a,
        num_of_embeds_pending_scan: o,
    });
    let c = r + o;
    c > 0 &&
        s.A.distribution(
            {
                name: i.K.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2,
            },
            c,
        );
}

function S(e) {
    let {
            messageId: t,
            channelId: n,
            numOfAttachments: r,
            numOfSelfHarmAttachments: i,
            numOfEmbeds: a,
            numOfGoreAttachments: s,
            numOfExplicitAttachments: o,
            numOfSelfHarmEmbeds: l,
            numOfGoreEmbeds: c,
            numOfExplicitEmbeds: f,
        } = e,
        p = o > 0 || f > 0,
        _ = s > 0 || c > 0,
        m = i > 0 || l > 0;
    if (null == n || null == t || (!p && !_ && !m)) return;
    let g = u.A.getChannel(n);
    d.default.track(h.HAw.REDACTABLE_MESSAGE_LOADED, {
        message_id: t,
        channel_id: n,
        channel_type: null == g ? void 0 : g.type,
        guild_id: null == g ? void 0 : g.guild_id,
        num_of_attachments: r,
        num_of_gore_attachments: s,
        num_of_explicit_attachments: o,
        num_of_self_harm_attachments: i,
        num_of_embeds: a,
        num_of_gore_embeds: c,
        num_of_explicit_embeds: f,
        num_of_self_harm_embeds: l,
        has_redactable_explicit: p,
        has_redactable_gore: _,
        has_redactable_self_harm: m,
    });
}

function I(e) {
    let {
        messageId: t,
        channelId: n,
        numOfAttachments: r,
        numOfExplicitAttachments: i,
        numOfEmbeds: a,
        numOfExplicitEmbeds: s,
    } = e;
    if (null == n) return;
    let o = u.A.getChannel(n);
    d.default.track(h.HAw.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
        message_id: t,
        channel_id: n,
        channel_type: null == o ? void 0 : o.type,
        guild_id: null == o ? void 0 : o.guild_id,
        num_of_attachments: r,
        num_of_explicit_attachments: i,
        num_of_embeds: a,
        num_of_explicit_embeds: s,
    });
}

function T(e) {
    let { attachments: t, embeds: n } = C(e),
        r = N(e);
    return e.merge({
        attachments: t,
        embeds: n,
        messageSnapshots: r,
    });
}

function C(e) {
    return {
        attachments: e.attachments.map((e) => ((e.content_scan_version = -1), e)),
        embeds: e.embeds.map((e) => ((e.contentScanVersion = -1), e)),
    };
}

function N(e) {
    let { messageSnapshots: t } = e;
    return null == t || 0 === t.length
        ? t
        : t.map((e) => {
              let { message: t } = e,
                  { attachments: n, embeds: r } = C(t);
              return (
                  (t = t.merge({
                      attachments: n,
                      embeds: r,
                  })),
                  (e = e.merge({
                      message: t,
                  }))
              );
          });
}
let R = (e, t) => null != e && null != t && (e <= _._L || t <= _.jd);

function w() {
    let e = (0, o.d6)(r.t.SENSITIVE_CONTENT_SHOW_SETTING),
        t = (0, c.o)("explicit_media_redaction_utils"),
        n = e || t,
        i = (0, a.p9)();
    return n && i;
}

function P() {
    let e = (0, o.aX)(r.t.SENSITIVE_CONTENT_SHOW_SETTING),
        t = (0, c.j)("explicit_media_redaction_utils"),
        n = e || t,
        i = (0, a.i2)();
    return n && i;
}

function D(e) {
    return !!P() && null != e && p.tY.has(e);
}

function x(e) {
    let { obscure: t } = e;
    (0, a.$8)() &&
        d.default.track(h.HAw.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, {
            toggle_direction: t ? "hide" : "show",
        });
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
