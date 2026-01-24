n.d(t, {
    A: () => b,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(961350),
    o = n(927813),
    l = n(469679);

function c(e, t, n) {
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
let u = 3 * o.A.Millis.DAY,
    d = {};

function f() {
    return l.T.getConfig({
        location: "ReplyNudgeStore",
    }).enabled;
}

function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
        n = {};
    for (let [r, i] of Object.entries(e)) null != i && t - i < u && (n[r] = i);
    return n;
}

function _(e) {
    let { channelId: t, timestamp: n } = e;
    if (t in d) return !1;
    d[t] = n;
}

function h(e) {
    let { message: t } = e;
    if (!(t.channel_id in d)) return !1;
    delete d[t.channel_id];
}

function m(e) {
    let { channelId: t, userId: n } = e;
    if (n !== s.default.getId() || !(t in d)) return !1;
    delete d[t];
}

function g(e) {
    let {
        channel: { id: t },
    } = e;
    if (!(t in d)) return !1;
    delete d[t];
}

function E() {
    d = {};
}
class y extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        var t;
        (d = p(null != (t = null == e ? void 0 : e.nudgedChannels) ? t : {})), this.waitFor(s.default);
    }
    getState() {
        return {
            nudgedChannels: d,
        };
    }
    getNudgeTimestamp(e) {
        var t;
        return f() && null != (t = d[e]) ? t : null;
    }
    isChannelNudged(e) {
        return null != this.getNudgeTimestamp(e);
    }
}
c(y, "displayName", "ReplyNudgeStore"), c(y, "persistKey", "ReplyNudgeStore");
let b = new y(a.h, {
    REPLY_NUDGE_SET: _,
    MESSAGE_CREATE: h,
    MESSAGE_REACTION_ADD: m,
    CHANNEL_DELETE: g,
    LOGOUT: E,
});
