"use strict";
n.d(t, { Ay: () => v, _j: () => o, fy: () => l });
var r = n(311907),
    i = n(73153),
    a = n(734057);
let s = 5 * n(927813).A.Millis.SECOND;
var o = (function (e) {
        return (
            (e[(e.STRANGER_DANGER = 1)] = "STRANGER_DANGER"),
            (e[(e.INAPPROPRIATE_CONVERSATION_TIER_1 = 2)] = "INAPPROPRIATE_CONVERSATION_TIER_1"),
            (e[(e.INAPPROPRIATE_CONVERSATION_TIER_2 = 3)] = "INAPPROPRIATE_CONVERSATION_TIER_2"),
            (e[(e.LIKELY_ATO = 4)] = "LIKELY_ATO"),
            e
        );
    })({}),
    l = (function (e) {
        return (e[(e.UPVOTE = 0)] = "UPVOTE"), (e[(e.DOWNVOTE = 1)] = "DOWNVOTE"), e;
    })({});
let u = [],
    c = {},
    d = new Set();
function _(e) {
    return 2 === e.type || 3 === e.type;
}
function f(e) {
    let { safetyWarnings: t } = e;
    null != t &&
        ((c[e.id] = t),
        t.some((e) => _(e) && null != e.dismiss_timestamp && !y(e.dismiss_timestamp)) ? d.add(e.id) : d.delete(e.id)),
        null == t && (null != c[e.id] && delete c[e.id], d.delete(e.id));
}
function p(e) {
    f(e.channel);
}
function h(e) {
    e.channels.forEach((e) => {
        f(e);
    });
}
function m(e) {
    let { channel: t } = e;
    null != c[t.id] && delete c[t.id], d.delete(t.id);
}
function g(e) {
    let { channelId: t, warningId: n, feedbackType: r } = e,
        i = c[t];
    null != i && (c[t] = i.map((e) => (e.id === n ? { ...e, feedback_type: r } : e)));
}
function E(e) {
    let { channelId: t } = e,
        n = c[t];
    d.delete(t), null != n && (c[t] = n.map((e) => ({ ...e, dismiss_timestamp: void 0 })));
}
function A(e) {
    let { channelId: t, warningIds: n } = e,
        r = c[t];
    if (null == r) return;
    let i = new Date().toISOString();
    c[t] = r.map((e) => (n.includes(e.id) ? { ...e, dismiss_timestamp: i } : e));
}
function I(e) {
    let { channelId: t } = e;
    d.add(t);
}
function T() {
    (c = {}),
        Object.values(a.A.getMutablePrivateChannels()).forEach((e) => {
            f(e);
        });
}
function y(e) {
    return new Date(e).getTime() > Date.now() - s;
}
class S extends r.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    getChannelSafetyWarning(e, t) {
        return c[e]?.find((e) => e.id === t);
    }
    getChannelSafetyWarnings(e) {
        return c[e] ?? u;
    }
    hasShownInitialTooltipForChannel(e) {
        return d.has(e);
    }
}
let v = new S(i.h, {
    CHANNEL_CREATE: p,
    CHANNEL_DELETE: m,
    CHANNEL_UPDATES: h,
    CONNECTION_OPEN: T,
    CONNECTION_OPEN_SUPPLEMENTAL: T,
    CHANNEL_SAFETY_WARNING_FEEDBACK: g,
    CLEAR_CHANNEL_SAFETY_WARNINGS: E,
    DISMISS_CHANNEL_SAFETY_WARNINGS: A,
    ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: I,
});
