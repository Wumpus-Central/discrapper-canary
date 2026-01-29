n.d(t, {
    A: () => m,
}),
    n(896048);
var r,
    l = n(311907),
    a = n(73153),
    i = n(217222),
    o = n(253932),
    s = n(617617),
    c = n(961350),
    u = n(927813),
    d = n(469679);

function _(e, t, n) {
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
let f = 3 * u.A.Millis.DAY,
    A = !1,
    p = {};

function b() {
    let e =
        !1 !== o.LJ.getSetting() &&
        d.T.getConfig({
            location: "ReplyNudgeStore",
        }).enabled;
    if (A === e) return !1;
    A = e;
}
class h extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        var t;
        (p = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                n = {};
            for (let [r, l] of Object.entries(e)) null != l && t - l < f && (n[r] = l);
            return n;
        })(null != (t = null == e ? void 0 : e.nudgedChannels) ? t : {})),
            this.waitFor(c.default, s.A, i.A),
            this.syncWith([s.A, i.A], b);
    }
    getState() {
        return {
            nudgedChannels: p,
        };
    }
    getNudgeTimestamp(e) {
        var t;
        return A && null != (t = p[e]) ? t : null;
    }
    isChannelNudged(e) {
        return null != this.getNudgeTimestamp(e);
    }
}
_(h, "displayName", "ReplyNudgeStore"), _(h, "persistKey", "ReplyNudgeStore");
let m = new h(a.h, {
    REPLY_NUDGE_SET: function (e) {
        let { channelId: t, timestamp: n } = e;
        if (t in p) return !1;
        p[t] = n;
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        if (!(t.channel_id in p)) return !1;
        delete p[t.channel_id];
    },
    MESSAGE_REACTION_ADD: function (e) {
        let { channelId: t, userId: n } = e;
        if (n !== c.default.getId() || !(t in p)) return !1;
        delete p[t];
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        if (!(t in p)) return !1;
        delete p[t];
    },
    LOGOUT: function () {
        (p = {}), (A = !1);
    },
});
