n.d(t, {
    A: () => g,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(961350);

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
let l = 3 * n(927813).A.Millis.DAY,
    c = {};

function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
        n = {};
    for (let [r, i] of Object.entries(e)) null != i && t - i < l && (n[r] = i);
    return n;
}

function d(e) {
    let { channelId: t, timestamp: n } = e;
    if (t in c) return !1;
    c[t] = n;
}

function f(e) {
    let { message: t } = e;
    delete c[t.channel_id];
}

function p(e) {
    let { channelId: t, userId: n } = e;
    if (n !== s.default.getId()) return !1;
    delete c[t];
}

function _(e) {
    let {
        channel: { id: t },
    } = e;
    delete c[t];
}

function h() {
    c = {};
}
class m extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        var t;
        (c = u(null != (t = null == e ? void 0 : e.nudgedChannels) ? t : {})), this.waitFor(s.default);
    }
    getState() {
        return {
            nudgedChannels: c,
        };
    }
    getNudgeTimestamp(e) {
        var t;
        return null != (t = c[e]) ? t : null;
    }
    isChannelNudged(e) {
        return null != this.getNudgeTimestamp(e);
    }
}
o(m, "displayName", "ReplyNudgeStore"), o(m, "persistKey", "ReplyNudgeStore");
let g = new m(a.h, {
    REPLY_NUDGE_SET: d,
    MESSAGE_CREATE: f,
    MESSAGE_REACTION_ADD: p,
    CHANNEL_DELETE: _,
    LOGOUT: h,
});
