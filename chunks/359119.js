n.d(t, {
    ZP: () => S,
    ny: () => l,
    pj: () => o
}),
    n(47120);
var i = n(442837),
    r = n(570140),
    a = n(592125);
let s = 5 * n(70956).Z.Millis.SECOND;
var o = (function (e) {
        return (e[(e.STRANGER_DANGER = 1)] = 'STRANGER_DANGER'), (e[(e.INAPPROPRIATE_CONVERSATION_TIER_1 = 2)] = 'INAPPROPRIATE_CONVERSATION_TIER_1'), (e[(e.INAPPROPRIATE_CONVERSATION_TIER_2 = 3)] = 'INAPPROPRIATE_CONVERSATION_TIER_2'), (e[(e.LIKELY_ATO = 4)] = 'LIKELY_ATO'), e;
    })({}),
    l = (function (e) {
        return (e[(e.UPVOTE = 0)] = 'UPVOTE'), (e[(e.DOWNVOTE = 1)] = 'DOWNVOTE'), e;
    })({});
let u = [],
    c = {},
    d = new Set();
function f(e) {
    return 2 === e.type || 3 === e.type;
}
function _(e) {
    let { safetyWarnings: t } = e;
    null != t && ((c[e.id] = t), t.some((e) => f(e) && null != e.dismiss_timestamp && !b(e.dismiss_timestamp)) ? d.add(e.id) : d.delete(e.id)), null == t && (null != c[e.id] && delete c[e.id], d.delete(e.id));
}
function p(e) {
    _(e.channel);
}
function h(e) {
    e.channels.forEach((e) => {
        _(e);
    });
}
function m(e) {
    let { channel: t } = e;
    null != c[t.id] && delete c[t.id], d.delete(t.id);
}
function g(e) {
    let { channelId: t, warningId: n, feedbackType: i } = e,
        r = c[t];
    null != r &&
        (c[t] = r.map((e) =>
            e.id === n
                ? {
                      ...e,
                      feedback_type: i
                  }
                : e
        ));
}
function E(e) {
    let { channelId: t } = e,
        n = c[t];
    d.delete(t),
        null != n &&
            (c[t] = n.map((e) => ({
                ...e,
                dismiss_timestamp: void 0
            })));
}
function v(e) {
    let { channelId: t, warningIds: n } = e,
        i = c[t];
    if (null == i) return;
    let r = new Date().toISOString();
    c[t] = i.map((e) =>
        n.includes(e.id)
            ? {
                  ...e,
                  dismiss_timestamp: r
              }
            : e
    );
}
function y(e) {
    let { channelId: t } = e;
    d.add(t);
}
function I() {
    (c = {}),
        Object.values(a.Z.getMutablePrivateChannels()).forEach((e) => {
            _(e);
        });
}
function b(e) {
    return new Date(e).getTime() > Date.now() - s;
}
class T extends i.ZP.Store {
    initialize() {
        this.waitFor(a.Z);
    }
    getChannelSafetyWarning(e, t) {
        var n;
        return null === (n = c[e]) || void 0 === n ? void 0 : n.find((e) => e.id === t);
    }
    getChannelSafetyWarnings(e) {
        var t;
        return null !== (t = c[e]) && void 0 !== t ? t : u;
    }
    hasShownInitialTooltipForChannel(e) {
        return d.has(e);
    }
}
let S = new T(r.Z, {
    CHANNEL_CREATE: p,
    CHANNEL_DELETE: m,
    CHANNEL_UPDATES: h,
    CONNECTION_OPEN: I,
    CONNECTION_OPEN_SUPPLEMENTAL: I,
    CHANNEL_SAFETY_WARNING_FEEDBACK: g,
    CLEAR_CHANNEL_SAFETY_WARNINGS: E,
    DISMISS_CHANNEL_SAFETY_WARNINGS: v,
    ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: y
});
