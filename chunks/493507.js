t.d(i, {
    A: () => U,
}),
    t(638769),
    t(896048),
    t(134528),
    t(947204);
var n,
    l = t(311907),
    s = t(73153),
    a = t(626584),
    u = t(217222),
    r = t(21119),
    d = t(253932),
    A = t(617617),
    g = t(961350),
    f = t(734057),
    M = t(309010),
    o = t(543465),
    c = t(469679);

function m(e, i, t) {
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
let N = new a.A("ReplyNudgeStore"),
    E = !1,
    y = {};

function h(e, i) {
    let { maxNudgeAge: t, maxNudgeCount: n } = i,
        l = Date.now(),
        s = {},
        a = Object.entries(e);
    for (let [e, { timestamp: i, isActive: u }] of (a.sort((e, i) => i[1].timestamp - e[1].timestamp), a))
        if (
            null != i &&
            l - i < t &&
            u &&
            ((s[e] = {
                timestamp: i,
                isActive: u,
            }),
            Object.keys(s).length >= n)
        )
            break;
    return N.info("Pruned ".concat(a.length - Object.keys(s).length, " expired nudges")), s;
}

function C(e) {
    if (!(e in y)) return !1;
    y[e].isActive = !1;
}

function R(e) {
    var i, t;
    let n = f.A.getChannel(e);
    if (null == n)
        return (
            N.warn("getDMChannelAffinity: Unable to find channel", {
                channelId: e,
            }),
            null
        );
    if ((null == n ? void 0 : n.isDM()) !== !0)
        return (
            N.warn("getDMChannelAffinity: Channel is not a DM", {
                channelId: e,
            }),
            null
        );
    let l = n.getRecipientId();
    return null != (i = null == (t = r.A.getUserAffinity(l)) ? void 0 : t.dmProbability) ? i : null;
}

function p() {
    let {
            displayNudges: e,
            maxNudgeAge: i,
            maxNudgeCount: t,
        } = c.T.getConfig({
            location: "handleNudgeVisibilityChange",
        }),
        n = !1 !== d.LJ.getSetting() && e;
    if (E === n) return !1;
    (E = n) &&
        (y = h(y, {
            maxNudgeAge: i,
            maxNudgeCount: t,
        }));
}

function v() {
    let e = !1;
    for (let i of Object.keys(y)) o.Ay.isChannelMuted(null, i) && (delete y[i], (e = !0));
    return e;
}
class O extends (n = l.Ay.PersistedStore) {
    initialize(e) {
        var i;
        (y = null != (i = null == e ? void 0 : e.nudgedChannels) ? i : {}),
            this.waitFor(u.A, g.default, f.A, M.A, r.A, o.Ay, A.A),
            this.syncWith([A.A, u.A], p),
            this.syncWith([o.Ay], v);
    }
    getState() {
        return {
            nudgedChannels: y,
        };
    }
    getNudgeTimestamp(e) {
        var i, t;
        return E && null != (i = null == (t = y[e]) ? void 0 : t.timestamp) ? i : null;
    }
    isChannelNudged(e) {
        var i;
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!!E || !!t) && (null == (i = y[e]) ? void 0 : i.isActive) === !0;
    }
}
m(O, "displayName", "ReplyNudgeStore"), m(O, "persistKey", "ReplyNudgeStore");
let U = new O(s.h, {
    REPLY_NUDGE_SET: function (e) {
        let { channelId: i, timestamp: t } = e;
        if (o.Ay.isChannelMuted(null, i)) return !1;
        let { maxNudgeAge: n, maxNudgeCount: l } = c.T.getConfig({
            location: "handleReplyNudgeSet",
        });
        if (
            i in
            (y = h(y, {
                maxNudgeAge: n,
                maxNudgeCount: l,
            }))
        )
            return !1;
        if (Object.keys(y).length >= l) {
            let e = Object.keys(y),
                t = e.at(-1),
                n = 1 / 0;
            for (let i of e) {
                let e = R(i);
                if (null == e) {
                    N.warn("handleReplyNudgeSet: Nudge affinity is null", {
                        nudgedChannelId: i,
                    });
                    continue;
                }
                e < n && ((n = e), (t = i));
            }
            let l = R(i);
            if (null == l)
                return (
                    N.warn("handleReplyNudgeSet: New nudge affinity is null", {
                        channelId: i,
                    }),
                    !1
                );
            if (l < n)
                return (
                    N.info("handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.", {
                        channelId: i,
                        lowestAffinity: n,
                        newNudgeAffinity: l,
                    }),
                    !1
                );
            N.info("handleReplyNudgeSet: Evicting nudge with lowest affinity", {
                channelId: i,
                lowestAffinity: n,
                newNudgeAffinity: l,
            }),
                delete y[t];
        }
        y[i] = {
            timestamp: t,
            isActive: !0,
        };
    },
    REPLY_NUDGE_CLEAR: function (e) {
        let { channelId: i } = e;
        return C(i);
    },
    MESSAGE_CREATE: function (e) {
        let { message: i } = e;
        return C(i.channel_id);
    },
    MESSAGE_REACTION_ADD: function (e) {
        let { channelId: i, userId: t } = e;
        return t === g.default.getId() && C(i);
    },
    CHANNEL_SELECT: function () {
        let e = M.A.getLastSelectedChannelId();
        return null != e && C(e);
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: i },
        } = e;
        return C(i);
    },
    LOGOUT: function () {
        (y = {}), (E = !1);
    },
});
