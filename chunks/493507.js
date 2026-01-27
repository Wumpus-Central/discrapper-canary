n.d(t, {
    A: () => f,
}),
    n(896048);
var r,
    l = n(311907),
    a = n(73153),
    i = n(961350),
    o = n(927813),
    s = n(469679);

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
class _ extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        var t;
        (d = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                n = {};
            for (let [r, l] of Object.entries(e)) null != l && t - l < u && (n[r] = l);
            return n;
        })(null != (t = null == e ? void 0 : e.nudgedChannels) ? t : {})),
            this.waitFor(i.default);
    }
    getState() {
        return {
            nudgedChannels: d,
        };
    }
    getNudgeTimestamp(e) {
        var t;
        return s.T.getConfig({
            location: "ReplyNudgeStore",
        }).enabled && null != (t = d[e])
            ? t
            : null;
    }
    isChannelNudged(e) {
        return null != this.getNudgeTimestamp(e);
    }
}
c(_, "displayName", "ReplyNudgeStore"), c(_, "persistKey", "ReplyNudgeStore");
let f = new _(a.h, {
    REPLY_NUDGE_SET: function (e) {
        let { channelId: t, timestamp: n } = e;
        if (t in d) return !1;
        d[t] = n;
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        if (!(t.channel_id in d)) return !1;
        delete d[t.channel_id];
    },
    MESSAGE_REACTION_ADD: function (e) {
        let { channelId: t, userId: n } = e;
        if (n !== i.default.getId() || !(t in d)) return !1;
        delete d[t];
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        if (!(t in d)) return !1;
        delete d[t];
    },
    LOGOUT: function () {
        d = {};
    },
});
