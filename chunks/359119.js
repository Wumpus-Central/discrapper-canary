r.d(n, {
    ny: function () {
        return a;
    },
    pj: function () {
        return i;
    }
});
var i,
    a,
    o = r(47120);
var s = r(442837),
    l = r(570140),
    u = r(592125);
let c = 5 * r(70956).Z.Millis.SECOND;
!(function (e) {
    (e[(e.STRANGER_DANGER = 1)] = 'STRANGER_DANGER'), (e[(e.INAPPROPRIATE_CONVERSATION_TIER_1 = 2)] = 'INAPPROPRIATE_CONVERSATION_TIER_1'), (e[(e.INAPPROPRIATE_CONVERSATION_TIER_2 = 3)] = 'INAPPROPRIATE_CONVERSATION_TIER_2'), (e[(e.LIKELY_ATO = 4)] = 'LIKELY_ATO');
})(i || (i = {})),
    !(function (e) {
        (e[(e.UPVOTE = 0)] = 'UPVOTE'), (e[(e.DOWNVOTE = 1)] = 'DOWNVOTE');
    })(a || (a = {}));
let d = [],
    f = {},
    p = new Set();
function h(e) {
    return 2 === e.type || 3 === e.type;
}
function _(e) {
    let { safetyWarnings: n } = e;
    null != n && ((f[e.id] = n), n.some((e) => h(e) && null != e.dismiss_timestamp && !S(e.dismiss_timestamp)) ? p.add(e.id) : p.delete(e.id)), null == n && (null != f[e.id] && delete f[e.id], p.delete(e.id));
}
function m(e) {
    _(e.channel);
}
function g(e) {
    e.channels.forEach((e) => {
        _(e);
    });
}
function E(e) {
    let { channel: n } = e;
    null != f[n.id] && delete f[n.id], p.delete(n.id);
}
function v(e) {
    let { channelId: n, warningId: r, feedbackType: i } = e,
        a = f[n];
    if (null != a)
        f[n] = a.map((e) =>
            e.id === r
                ? {
                      ...e,
                      feedback_type: i
                  }
                : e
        );
}
function y(e) {
    let { channelId: n } = e,
        r = f[n];
    if ((p.delete(n), null != r))
        f[n] = r.map((e) => ({
            ...e,
            dismiss_timestamp: void 0
        }));
}
function b(e) {
    let { channelId: n, warningIds: r } = e,
        i = f[n];
    if (null == i) return;
    let a = new Date().toISOString();
    f[n] = i.map((e) =>
        r.includes(e.id)
            ? {
                  ...e,
                  dismiss_timestamp: a
              }
            : e
    );
}
function I(e) {
    let { channelId: n } = e;
    p.add(n);
}
function T() {
    (f = {}),
        Object.values(u.Z.getMutablePrivateChannels()).forEach((e) => {
            _(e);
        });
}
function S(e) {
    return new Date(e).getTime() > Date.now() - c;
}
class A extends s.ZP.Store {
    initialize() {
        this.waitFor(u.Z);
    }
    getChannelSafetyWarning(e, n) {
        var r;
        return null === (r = f[e]) || void 0 === r ? void 0 : r.find((e) => e.id === n);
    }
    getChannelSafetyWarnings(e) {
        var n;
        return null !== (n = f[e]) && void 0 !== n ? n : d;
    }
    hasShownInitialTooltipForChannel(e) {
        return p.has(e);
    }
}
n.ZP = new A(l.Z, {
    CHANNEL_CREATE: m,
    CHANNEL_DELETE: E,
    CHANNEL_UPDATES: g,
    CONNECTION_OPEN: T,
    CONNECTION_OPEN_SUPPLEMENTAL: T,
    CHANNEL_SAFETY_WARNING_FEEDBACK: v,
    CLEAR_CHANNEL_SAFETY_WARNINGS: y,
    DISMISS_CHANNEL_SAFETY_WARNINGS: b,
    ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: I
});
