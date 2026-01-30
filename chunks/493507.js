n.d(t, {
    A: () => O,
}),
    n(896048);
var r,
    l = n(311907),
    a = n(73153),
    i = n(217222),
    o = n(253932),
    s = n(617617),
    c = n(961350),
    u = n(309010),
    d = n(543465),
    _ = n(927813),
    f = n(469679);

function A(e, t, n) {
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
let p = 3 * _.A.Millis.DAY,
    b = !1,
    h = {};

function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
        n = {};
    for (let [r, { timestamp: l, isActive: a }] of Object.entries(e))
        null != l &&
            t - l < p &&
            a &&
            (n[r] = {
                timestamp: l,
                isActive: a,
            });
    return n;
}

function g(e) {
    if (!(e in h)) return !1;
    h[e].isActive = !1;
}

function I() {
    let e =
        !1 !== o.LJ.getSetting() &&
        f.T.getConfig({
            location: "ReplyNudgeStore",
        }).enabled;
    if (b === e) return !1;
    b = e;
}

function y() {
    let e = !1;
    for (let t of Object.keys(h)) d.Ay.isChannelMuted(null, t) && (delete h[t], (e = !0));
    return e;
}
class E extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        var t;
        (h = m(null != (t = null == e ? void 0 : e.nudgedChannels) ? t : {})),
            this.waitFor(c.default, s.A, i.A, d.Ay, u.A),
            this.syncWith([s.A, i.A], I),
            this.syncWith([d.Ay], y);
    }
    getState() {
        return {
            nudgedChannels: m(h),
        };
    }
    getNudgeTimestamp(e) {
        var t, n;
        return b && null != (t = null == (n = h[e]) ? void 0 : n.timestamp) ? t : null;
    }
    isChannelNudged(e) {
        var t;
        return !!b && (null == (t = h[e]) ? void 0 : t.isActive) === !0;
    }
}
A(E, "displayName", "ReplyNudgeStore"), A(E, "persistKey", "ReplyNudgeStore");
let O = new E(a.h, {
    REPLY_NUDGE_SET: function (e) {
        var t;
        let { channelId: n, timestamp: r } = e;
        if (d.Ay.isChannelMuted(null, n) || (null == (t = h[n]) ? void 0 : t.isActive) === !0) return !1;
        h[n] = {
            timestamp: r,
            isActive: !0,
        };
    },
    REPLY_NUDGE_CLEAR: function (e) {
        let { channelId: t } = e;
        return g(t);
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return g(t.channel_id);
    },
    MESSAGE_REACTION_ADD: function (e) {
        let { channelId: t, userId: n } = e;
        return n === c.default.getId() && g(t);
    },
    CHANNEL_SELECT: function () {
        let e = u.A.getLastSelectedChannelId();
        return null != e && g(e);
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return g(t);
    },
    LOGOUT: function () {
        (h = {}), (b = !1);
    },
});
