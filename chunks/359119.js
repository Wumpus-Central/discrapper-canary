n.d(t, {
    ZP: () => N,
    ny: () => f,
    pj: () => d,
}),
    n(388685);
var r = n(442837),
    i = n(570140),
    a = n(592125);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = 5 * n(70956).Z.Millis.SECOND;
var d = (function (e) {
        return (
            (e[(e.STRANGER_DANGER = 1)] = "STRANGER_DANGER"),
            (e[(e.INAPPROPRIATE_CONVERSATION_TIER_1 = 2)] = "INAPPROPRIATE_CONVERSATION_TIER_1"),
            (e[(e.INAPPROPRIATE_CONVERSATION_TIER_2 = 3)] = "INAPPROPRIATE_CONVERSATION_TIER_2"),
            (e[(e.LIKELY_ATO = 4)] = "LIKELY_ATO"),
            e
        );
    })({}),
    f = (function (e) {
        return (e[(e.UPVOTE = 0)] = "UPVOTE"), (e[(e.DOWNVOTE = 1)] = "DOWNVOTE"), e;
    })({});
let p = [],
    _ = {},
    m = new Set();
function h(e) {
    return 2 === e.type || 3 === e.type;
}
function g(e) {
    let { safetyWarnings: t } = e;
    null != t &&
        ((_[e.id] = t),
        t.some((e) => h(e) && null != e.dismiss_timestamp && !C(e.dismiss_timestamp)) ? m.add(e.id) : m.delete(e.id)),
        null == t && (null != _[e.id] && delete _[e.id], m.delete(e.id));
}
function E(e) {
    g(e.channel);
}
function b(e) {
    e.channels.forEach((e) => {
        g(e);
    });
}
function y(e) {
    let { channel: t } = e;
    null != _[t.id] && delete _[t.id], m.delete(t.id);
}
function O(e) {
    let { channelId: t, warningId: n, feedbackType: r } = e,
        i = _[t];
    null != i && (_[t] = i.map((e) => (e.id === n ? c(s({}, e), { feedback_type: r }) : e)));
}
function v(e) {
    let { channelId: t } = e,
        n = _[t];
    m.delete(t), null != n && (_[t] = n.map((e) => c(s({}, e), { dismiss_timestamp: void 0 })));
}
function S(e) {
    let { channelId: t, warningIds: n } = e,
        r = _[t];
    if (null == r) return;
    let i = new Date().toISOString();
    _[t] = r.map((e) => (n.includes(e.id) ? c(s({}, e), { dismiss_timestamp: i }) : e));
}
function I(e) {
    let { channelId: t } = e;
    m.add(t);
}
function T() {
    (_ = {}),
        Object.values(a.Z.getMutablePrivateChannels()).forEach((e) => {
            g(e);
        });
}
function C(e) {
    return new Date(e).getTime() > Date.now() - u;
}
class A extends r.ZP.Store {
    initialize() {
        this.waitFor(a.Z);
    }
    getChannelSafetyWarning(e, t) {
        var n;
        return null == (n = _[e]) ? void 0 : n.find((e) => e.id === t);
    }
    getChannelSafetyWarnings(e) {
        var t;
        return null != (t = _[e]) ? t : p;
    }
    hasShownInitialTooltipForChannel(e) {
        return m.has(e);
    }
}
let N = new A(i.Z, {
    CHANNEL_CREATE: E,
    CHANNEL_DELETE: y,
    CHANNEL_UPDATES: b,
    CONNECTION_OPEN: T,
    CONNECTION_OPEN_SUPPLEMENTAL: T,
    CHANNEL_SAFETY_WARNING_FEEDBACK: O,
    CLEAR_CHANNEL_SAFETY_WARNINGS: v,
    DISMISS_CHANNEL_SAFETY_WARNINGS: S,
    ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: I,
});
