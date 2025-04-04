n.d(t, {
    ZP: () => C,
    ny: () => f,
    pj: () => d
}),
    n(47120);
var r = n(442837),
    i = n(570140),
    o = n(592125);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
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
        return (e[(e.STRANGER_DANGER = 1)] = 'STRANGER_DANGER'), (e[(e.INAPPROPRIATE_CONVERSATION_TIER_1 = 2)] = 'INAPPROPRIATE_CONVERSATION_TIER_1'), (e[(e.INAPPROPRIATE_CONVERSATION_TIER_2 = 3)] = 'INAPPROPRIATE_CONVERSATION_TIER_2'), (e[(e.LIKELY_ATO = 4)] = 'LIKELY_ATO'), e;
    })({}),
    f = (function (e) {
        return (e[(e.UPVOTE = 0)] = 'UPVOTE'), (e[(e.DOWNVOTE = 1)] = 'DOWNVOTE'), e;
    })({});
let _ = [],
    p = {},
    h = new Set();
function m(e) {
    return 2 === e.type || 3 === e.type;
}
function g(e) {
    let { safetyWarnings: t } = e;
    null != t && ((p[e.id] = t), t.some((e) => m(e) && null != e.dismiss_timestamp && !N(e.dismiss_timestamp)) ? h.add(e.id) : h.delete(e.id)), null == t && (null != p[e.id] && delete p[e.id], h.delete(e.id));
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
    null != p[t.id] && delete p[t.id], h.delete(t.id);
}
function v(e) {
    let { channelId: t, warningId: n, feedbackType: r } = e,
        i = p[t];
    null != i && (p[t] = i.map((e) => (e.id === n ? c(s({}, e), { feedback_type: r }) : e)));
}
function O(e) {
    let { channelId: t } = e,
        n = p[t];
    h.delete(t), null != n && (p[t] = n.map((e) => c(s({}, e), { dismiss_timestamp: void 0 })));
}
function I(e) {
    let { channelId: t, warningIds: n } = e,
        r = p[t];
    if (null == r) return;
    let i = new Date().toISOString();
    p[t] = r.map((e) => (n.includes(e.id) ? c(s({}, e), { dismiss_timestamp: i }) : e));
}
function S(e) {
    let { channelId: t } = e;
    h.add(t);
}
function T() {
    (p = {}),
        Object.values(o.Z.getMutablePrivateChannels()).forEach((e) => {
            g(e);
        });
}
function N(e) {
    return new Date(e).getTime() > Date.now() - u;
}
class A extends r.ZP.Store {
    initialize() {
        this.waitFor(o.Z);
    }
    getChannelSafetyWarning(e, t) {
        var n;
        return null == (n = p[e]) ? void 0 : n.find((e) => e.id === t);
    }
    getChannelSafetyWarnings(e) {
        var t;
        return null != (t = p[e]) ? t : _;
    }
    hasShownInitialTooltipForChannel(e) {
        return h.has(e);
    }
}
let C = new A(i.Z, {
    CHANNEL_CREATE: E,
    CHANNEL_DELETE: y,
    CHANNEL_UPDATES: b,
    CONNECTION_OPEN: T,
    CONNECTION_OPEN_SUPPLEMENTAL: T,
    CHANNEL_SAFETY_WARNING_FEEDBACK: v,
    CLEAR_CHANNEL_SAFETY_WARNINGS: O,
    DISMISS_CHANNEL_SAFETY_WARNINGS: I,
    ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: S
});
