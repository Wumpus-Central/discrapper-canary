n.d(t, {
    A: () => I,
}),
    n(896048);
var r,
    l = n(311907),
    a = n(73153),
    i = n(217222),
    o = n(253932),
    s = n(617617),
    c = n(961350),
    u = n(543465),
    d = n(927813),
    _ = n(469679);

function f(e, t, n) {
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
let A = 3 * d.A.Millis.DAY,
    p = !1,
    b = {};

function h() {
    let e =
        !1 !== o.LJ.getSetting() &&
        _.T.getConfig({
            location: "ReplyNudgeStore",
        }).enabled;
    if (p === e) return !1;
    p = e;
}

function m() {
    let e = !1;
    for (let t of Object.keys(b)) u.Ay.isChannelMuted(null, t) && (delete b[t], (e = !0));
    return e;
}
class g extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        var t;
        (b = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                n = {};
            for (let [r, l] of Object.entries(e)) null != l && t - l < A && (n[r] = l);
            return n;
        })(null != (t = null == e ? void 0 : e.nudgedChannels) ? t : {})),
            this.waitFor(c.default, s.A, i.A, u.Ay),
            this.syncWith([s.A, i.A], h),
            this.syncWith([u.Ay], m);
    }
    getState() {
        return {
            nudgedChannels: b,
        };
    }
    getNudgeTimestamp(e) {
        var t;
        return p && null != (t = b[e]) ? t : null;
    }
    isChannelNudged(e) {
        return null != this.getNudgeTimestamp(e);
    }
}
f(g, "displayName", "ReplyNudgeStore"), f(g, "persistKey", "ReplyNudgeStore");
let I = new g(a.h, {
    REPLY_NUDGE_SET: function (e) {
        let { channelId: t, timestamp: n } = e;
        if (u.Ay.isChannelMuted(null, t) || t in b) return !1;
        b[t] = n;
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        if (!(t.channel_id in b)) return !1;
        delete b[t.channel_id];
    },
    MESSAGE_REACTION_ADD: function (e) {
        let { channelId: t, userId: n } = e;
        if (n !== c.default.getId() || !(t in b)) return !1;
        delete b[t];
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        if (!(t in b)) return !1;
        delete b[t];
    },
    LOGOUT: function () {
        (b = {}), (p = !1);
    },
});
