"use strict";
n.d(t, { Ay: () => g, _j: () => d, fy: () => _ });
var i,
    r,
    s = n(17928),
    a = n(228366),
    o = n(734057);
let l = 5 * n(927813).A.Millis.SECOND;
var d =
        (((i = {})[(i.STRANGER_DANGER = 1)] = "STRANGER_DANGER"),
        (i[(i.INAPPROPRIATE_CONVERSATION_TIER_1 = 2)] = "INAPPROPRIATE_CONVERSATION_TIER_1"),
        (i[(i.INAPPROPRIATE_CONVERSATION_TIER_2 = 3)] = "INAPPROPRIATE_CONVERSATION_TIER_2"),
        (i[(i.LIKELY_ATO = 4)] = "LIKELY_ATO"),
        i),
    _ = (((r = {})[(r.UPVOTE = 0)] = "UPVOTE"), (r[(r.DOWNVOTE = 1)] = "DOWNVOTE"), r);
let u = [],
    c = {},
    E = new Set();
function h(e) {
    let { safetyWarnings: t } = e;
    null != t &&
        ((c[e.id] = t),
        t.some(
            (e) =>
                (2 === e.type || 3 === e.type) &&
                null != e.dismiss_timestamp &&
                !(new Date(e.dismiss_timestamp).getTime() > Date.now() - l),
        )
            ? E.add(e.id)
            : E.delete(e.id)),
        null == t && (null != c[e.id] && delete c[e.id], E.delete(e.id));
}
function m() {
    (c = {}),
        Object.values(o.A.getMutablePrivateChannels()).forEach((e) => {
            h(e);
        });
}
class f extends s.Ay.Store {
    initialize() {
        this.waitFor(o.A);
    }
    getChannelSafetyWarning(e, t) {
        return c[e]?.find((e) => e.id === t);
    }
    getChannelSafetyWarnings(e) {
        return c[e] ?? u;
    }
    hasShownInitialTooltipForChannel(e) {
        return E.has(e);
    }
}
let g = new f(a.h, {
    CHANNEL_CREATE: function (e) {
        h(e.channel);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null != c[t.id] && delete c[t.id], E.delete(t.id);
    },
    CHANNEL_UPDATES: function (e) {
        e.channels.forEach((e) => {
            h(e);
        });
    },
    CONNECTION_OPEN: m,
    CONNECTION_OPEN_SUPPLEMENTAL: m,
    CHANNEL_SAFETY_WARNING_FEEDBACK: function (e) {
        let { channelId: t, warningId: n, feedbackType: i } = e,
            r = c[t];
        null != r && (c[t] = r.map((e) => (e.id === n ? { ...e, feedback_type: i } : e)));
    },
    CLEAR_CHANNEL_SAFETY_WARNINGS: function (e) {
        let { channelId: t } = e,
            n = c[t];
        E.delete(t), null != n && (c[t] = n.map((e) => ({ ...e, dismiss_timestamp: void 0 })));
    },
    DISMISS_CHANNEL_SAFETY_WARNINGS: function (e) {
        let { channelId: t, warningIds: n } = e,
            i = c[t];
        if (null == i) return;
        let r = new Date().toISOString();
        c[t] = i.map((e) => (n.includes(e.id) ? { ...e, dismiss_timestamp: r } : e));
    },
    ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function (e) {
        let { channelId: t } = e;
        E.add(t);
    },
});
