t.d(i, {
    A: () => L,
}),
    t(896048),
    t(638769),
    t(321073),
    t(134528),
    t(947204);
var n,
    l = t(311907),
    s = t(73153),
    a = t(626584),
    u = t(217222),
    r = t(21119),
    A = t(253932),
    d = t(617617),
    g = t(961350),
    f = t(734057),
    M = t(309010),
    o = t(543465),
    c = t(469679),
    m = t(575443);

function N(e, i, t) {
    return (
        i in e
            ? Object.defineProperty(e, i, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[i] = t),
        e
    );
}
let E = new a.A("ReplyNudgeStore"),
    h = !1,
    y = {},
    R = new Set();

function C(e, i) {
    let { maxNudgeAge: t, maxNudgeCount: n } = i,
        l = Date.now(),
        s = {},
        a = Object.entries(e);
    a.sort((e, i) => i[1].timestamp - e[1].timestamp);
    let u = 0;
    for (let [e, { timestamp: i, isActive: r }] of a)
        if (null != i && l - i < m.Mk) {
            let a = r && l - i < t && u < n;
            (s[e] = {
                timestamp: i,
                isActive: a,
            }),
                a && u++;
        }
    return E.info("Pruned ".concat(a.length - Object.keys(s).length, " expired nudges")), s;
}

function p(e) {
    if (!(e in y) || !y[e].isActive) return !1;
    y[e].isActive = !1;
}

function v() {
    let e = [];
    for (let [i, { isActive: t }] of Object.entries(y)) t && e.push(i);
    return e;
}

function O(e) {
    var i, t;
    let n = f.A.getChannel(e);
    if (null == n)
        return (
            E.warn("getDMChannelAffinity: Unable to find channel", {
                channelId: e,
            }),
            null
        );
    if ((null == n ? void 0 : n.isDM()) !== !0)
        return (
            E.warn("getDMChannelAffinity: Channel is not a DM", {
                channelId: e,
            }),
            null
        );
    let l = n.getRecipientId();
    return null != (i = null == (t = r.A.getUserAffinity(l)) ? void 0 : t.dmProbability) ? i : null;
}

function U() {
    let {
            displayNudges: e,
            maxNudgeAge: i,
            maxNudgeCount: t,
        } = c.T.getConfig({
            location: "handleNudgeVisibilityChange",
        }),
        n = !1 !== A.LJ.getSetting() && e;
    if (h === n) return !1;
    (h = n) &&
        ((y = C(y, {
            maxNudgeAge: i,
            maxNudgeCount: t,
        })),
        (R = new Set(v())));
}

function S() {
    let e = !1;
    for (let i of Object.keys(y)) o.Ay.isChannelMuted(null, i) && (delete y[i], (e = !0));
    return e;
}
class D extends (n = l.Ay.PersistedStore) {
    initialize(e) {
        var i;
        (y = null != (i = null == e ? void 0 : e.nudgedChannels) ? i : {}),
            this.waitFor(u.A, g.default, f.A, M.A, r.A, o.Ay, d.A),
            this.syncWith([d.A, u.A], U),
            this.syncWith([o.Ay], S);
    }
    getState() {
        return {
            nudgedChannels: y,
        };
    }
    getNudgeTimestamp(e) {
        if (!h) return null;
        let i = y[e];
        if (null == i) return null;
        if (i.isActive || R.has(e)) {
            var t;
            return null != (t = y[e].timestamp) ? t : null;
        }
        return null;
    }
    isChannelNudged(e) {
        var i;
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!!h || !!t) && (null == (i = y[e]) ? void 0 : i.isActive) === !0;
    }
}
N(D, "displayName", "ReplyNudgeStore"), N(D, "persistKey", "ReplyNudgeStore");
let L = new D(s.h, {
    REPLY_NUDGE_SET: function (e) {
        let { channelId: i, timestamp: t } = e;
        if (o.Ay.isChannelMuted(null, i)) return !1;
        let { maxNudgeAge: n, maxNudgeCount: l } = c.T.getConfig({
            location: "handleReplyNudgeSet",
        });
        if (
            i in
            (y = C(y, {
                maxNudgeAge: n,
                maxNudgeCount: l,
            }))
        )
            return !1;
        let s = v();
        if (s.length >= l) {
            let e = s.at(-1),
                t = 1 / 0;
            for (let i of s) {
                let n = O(i);
                if (null == n) {
                    E.warn("handleReplyNudgeSet: Nudge affinity is null", {
                        nudgedChannelId: i,
                    });
                    continue;
                }
                n < t && ((t = n), (e = i));
            }
            let n = O(i);
            if (null == n)
                return (
                    E.warn("handleReplyNudgeSet: New nudge affinity is null", {
                        channelId: i,
                    }),
                    !1
                );
            if (n < t)
                return (
                    E.info("handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.", {
                        channelId: i,
                        lowestAffinity: t,
                        newNudgeAffinity: n,
                    }),
                    !1
                );
            E.info("handleReplyNudgeSet: Evicting nudge with lowest affinity", {
                channelId: i,
                lowestAffinity: t,
                newNudgeAffinity: n,
            }),
                delete y[e];
        }
        (y[i] = {
            timestamp: t,
            isActive: !0,
        }),
            R.add(i);
    },
    REPLY_NUDGE_CLEAR: function (e) {
        let { channelId: i } = e;
        return p(i);
    },
    MESSAGE_CREATE: function (e) {
        let { message: i } = e;
        return p(i.channel_id);
    },
    MESSAGE_REACTION_ADD: function (e) {
        let { channelId: i, userId: t } = e;
        return t === g.default.getId() && p(i);
    },
    CHANNEL_SELECT: function () {
        let e = M.A.getLastSelectedChannelId();
        return null != e && p(e);
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: i },
        } = e;
        return p(i);
    },
    LOGOUT: function () {
        (y = {}), (R = new Set()), (h = !1);
    },
});
