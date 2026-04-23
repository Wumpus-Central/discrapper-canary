"use strict";
n.d(t, { Ay: () => m, _j: () => u, fy: () => c });
var r,
    i,
    s = n(311907),
    a = n(73153),
    o = n(734057);
let l = 5 * n(927813).A.Millis.SECOND;
var u =
        (((r = {})[(r.STRANGER_DANGER = 1)] = "STRANGER_DANGER"),
        (r[(r.INAPPROPRIATE_CONVERSATION_TIER_1 = 2)] = "INAPPROPRIATE_CONVERSATION_TIER_1"),
        (r[(r.INAPPROPRIATE_CONVERSATION_TIER_2 = 3)] = "INAPPROPRIATE_CONVERSATION_TIER_2"),
        (r[(r.LIKELY_ATO = 4)] = "LIKELY_ATO"),
        r),
    c = (((i = {})[(i.UPVOTE = 0)] = "UPVOTE"), (i[(i.DOWNVOTE = 1)] = "DOWNVOTE"), i);
let d = [],
    _ = {},
    f = new Set();
function p(e) {
    let { safetyWarnings: t } = e;
    null != t &&
        ((_[e.id] = t),
        t.some(
            (e) =>
                (2 === e.type || 3 === e.type) &&
                null != e.dismiss_timestamp &&
                !(new Date(e.dismiss_timestamp).getTime() > Date.now() - l),
        )
            ? f.add(e.id)
            : f.delete(e.id)),
        null == t && (null != _[e.id] && delete _[e.id], f.delete(e.id));
}
function h() {
    (_ = {}),
        Object.values(o.A.getMutablePrivateChannels()).forEach((e) => {
            p(e);
        });
}
class E extends s.Ay.Store {
    initialize() {
        this.waitFor(o.A);
    }
    getChannelSafetyWarning(e, t) {
        return _[e]?.find((e) => e.id === t);
    }
    getChannelSafetyWarnings(e) {
        return _[e] ?? d;
    }
    hasShownInitialTooltipForChannel(e) {
        return f.has(e);
    }
}
let m = new E(a.h, {
    CHANNEL_CREATE: function (e) {
        p(e.channel);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null != _[t.id] && delete _[t.id], f.delete(t.id);
    },
    CHANNEL_UPDATES: function (e) {
        e.channels.forEach((e) => {
            p(e);
        });
    },
    CONNECTION_OPEN: h,
    CONNECTION_OPEN_SUPPLEMENTAL: h,
    CHANNEL_SAFETY_WARNING_FEEDBACK: function (e) {
        let { channelId: t, warningId: n, feedbackType: r } = e,
            i = _[t];
        null != i && (_[t] = i.map((e) => (e.id === n ? { ...e, feedback_type: r } : e)));
    },
    CLEAR_CHANNEL_SAFETY_WARNINGS: function (e) {
        let { channelId: t } = e,
            n = _[t];
        f.delete(t), null != n && (_[t] = n.map((e) => ({ ...e, dismiss_timestamp: void 0 })));
    },
    DISMISS_CHANNEL_SAFETY_WARNINGS: function (e) {
        let { channelId: t, warningIds: n } = e,
            r = _[t];
        if (null == r) return;
        let i = new Date().toISOString();
        _[t] = r.map((e) => (n.includes(e.id) ? { ...e, dismiss_timestamp: i } : e));
    },
    ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function (e) {
        let { channelId: t } = e;
        f.add(t);
    },
});
