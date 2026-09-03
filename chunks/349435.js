n.d(t, { Ay: () => f, _j: () => d, fy: () => c });
var i,
    r,
    a = n(17928),
    s = n(228366),
    l = n(734057);
let o = 5 * n(927813).A.Millis.SECOND;
var d =
        (((i = {})[(i.STRANGER_DANGER = 1)] = "STRANGER_DANGER"),
        (i[(i.INAPPROPRIATE_CONVERSATION_TIER_1 = 2)] = "INAPPROPRIATE_CONVERSATION_TIER_1"),
        (i[(i.INAPPROPRIATE_CONVERSATION_TIER_2 = 3)] = "INAPPROPRIATE_CONVERSATION_TIER_2"),
        (i[(i.LIKELY_ATO = 4)] = "LIKELY_ATO"),
        i),
    c = (((r = {})[(r.UPVOTE = 0)] = "UPVOTE"), (r[(r.DOWNVOTE = 1)] = "DOWNVOTE"), r);
let u = [],
    _ = {},
    E = new Set();
function A(e) {
    let { safetyWarnings: t } = e;
    null != t &&
        ((_[e.id] = t),
        t.some(
            (e) =>
                (2 === e.type || 3 === e.type) &&
                null != e.dismiss_timestamp &&
                !(new Date(e.dismiss_timestamp).getTime() > Date.now() - o),
        )
            ? E.add(e.id)
            : E.delete(e.id)),
        null == t && (null != _[e.id] && delete _[e.id], E.delete(e.id));
}
function h() {
    (_ = {}),
        Object.values(l.A.getMutablePrivateChannels()).forEach((e) => {
            A(e);
        });
}
class I extends a.Ay.Store {
    initialize() {
        this.waitFor(l.A);
    }
    getChannelSafetyWarning(e, t) {
        return _[e]?.find((e) => e.id === t);
    }
    getChannelSafetyWarnings(e) {
        return _[e] ?? u;
    }
    hasShownInitialTooltipForChannel(e) {
        return E.has(e);
    }
}
let f = new I(s.h, {
    CHANNEL_CREATE: function (e) {
        A(e.channel);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        null != _[t.id] && delete _[t.id], E.delete(t.id);
    },
    CHANNEL_UPDATES: function (e) {
        e.channels.forEach((e) => {
            A(e);
        });
    },
    CONNECTION_OPEN: h,
    CONNECTION_OPEN_SUPPLEMENTAL: h,
    CHANNEL_SAFETY_WARNING_FEEDBACK: function (e) {
        let { channelId: t, warningId: n, feedbackType: i } = e,
            r = _[t];
        null != r && (_[t] = r.map((e) => (e.id === n ? { ...e, feedback_type: i } : e)));
    },
    CLEAR_CHANNEL_SAFETY_WARNINGS: function (e) {
        let { channelId: t } = e,
            n = _[t];
        E.delete(t), null != n && (_[t] = n.map((e) => ({ ...e, dismiss_timestamp: void 0 })));
    },
    DISMISS_CHANNEL_SAFETY_WARNINGS: function (e) {
        let { channelId: t, warningIds: n } = e,
            i = _[t];
        if (null == i) return;
        let r = new Date().toISOString();
        _[t] = i.map((e) => (n.includes(e.id) ? { ...e, dismiss_timestamp: r } : e));
    },
    ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function (e) {
        let { channelId: t } = e;
        E.add(t);
    },
});
