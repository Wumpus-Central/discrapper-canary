n.d(t, {
    A: () => j,
}),
    n(896048),
    n(638769),
    n(321073),
    n(134528),
    n(947204);
var r,
    i = n(311907),
    a = n(73153),
    o = n(626584),
    s = n(217222),
    l = n(21119),
    c = n(253932),
    u = n(617617),
    d = n(961350),
    f = n(734057),
    p = n(309010),
    _ = n(543465),
    h = n(469679),
    m = n(575443);

function g(e, t, n) {
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
let E = new o.A("ReplyNudgeStore"),
    y = !1,
    b = {},
    O = new Set();

function v(e, t) {
    let { maxNudgeAge: n, maxNudgeCount: r } = t,
        i = Date.now(),
        a = {},
        o = Object.entries(e);
    o.sort((e, t) => t[1].timestamp - e[1].timestamp);
    let s = 0;
    for (let [e, { timestamp: t, isActive: l }] of o)
        if (null != t && i - t < m.Mk) {
            let o = l && i - t < n && s < r;
            (a[e] = {
                timestamp: t,
                isActive: o,
            }),
                o && s++;
        }
    return E.info("Pruned ".concat(o.length - Object.keys(a).length, " expired nudges")), a;
}

function A(e) {
    if (!(e in b) || !b[e].isActive) return !1;
    b[e].isActive = !1;
}

function I() {
    let e = [];
    for (let [t, { isActive: n }] of Object.entries(b)) n && e.push(t);
    return e;
}

function S(e) {
    var t, n;
    let r = f.A.getChannel(e);
    if (null == r)
        return (
            E.warn("getDMChannelAffinity: Unable to find channel", {
                channelId: e,
            }),
            null
        );
    if ((null == r ? void 0 : r.isDM()) !== !0)
        return (
            E.warn("getDMChannelAffinity: Channel is not a DM", {
                channelId: e,
            }),
            null
        );
    let i = r.getRecipientId();
    return null != (t = null == (n = l.A.getUserAffinity(i)) ? void 0 : n.dmProbability) ? t : null;
}

function T(e) {
    let { channelId: t, timestamp: n } = e;
    if (_.Ay.isChannelMuted(null, t)) return !1;
    let { maxNudgeAge: r, maxNudgeCount: i } = h.T.getConfig({
        location: "handleReplyNudgeSet",
    });
    if (
        t in
        (b = v(b, {
            maxNudgeAge: r,
            maxNudgeCount: i,
        }))
    )
        return !1;
    let a = I();
    if (a.length >= i) {
        let e = a.at(-1),
            n = 1 / 0;
        for (let t of a) {
            let r = S(t);
            if (null == r) {
                E.warn("handleReplyNudgeSet: Nudge affinity is null", {
                    nudgedChannelId: t,
                });
                continue;
            }
            r < n && ((n = r), (e = t));
        }
        let r = S(t);
        if (null == r)
            return (
                E.warn("handleReplyNudgeSet: New nudge affinity is null", {
                    channelId: t,
                }),
                !1
            );
        if (r < n)
            return (
                E.info("handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.", {
                    channelId: t,
                    lowestAffinity: n,
                    newNudgeAffinity: r,
                }),
                !1
            );
        E.info("handleReplyNudgeSet: Evicting nudge with lowest affinity", {
            channelId: t,
            lowestAffinity: n,
            newNudgeAffinity: r,
        }),
            delete b[e];
    }
    (b[t] = {
        timestamp: n,
        isActive: !0,
    }),
        O.add(t);
}

function C(e) {
    let { channelId: t } = e;
    return A(t);
}

function N(e) {
    let { message: t } = e;
    return A(t.channel_id);
}

function w(e) {
    let { channelId: t, userId: n } = e;
    return n === d.default.getId() && A(t);
}

function R() {
    let e = p.A.getLastSelectedChannelId();
    return null != e && A(e);
}

function P(e) {
    let {
        channel: { id: t },
    } = e;
    return A(t);
}

function D() {
    let {
            displayNudges: e,
            maxNudgeAge: t,
            maxNudgeCount: n,
        } = h.T.getConfig({
            location: "handleNudgeVisibilityChange",
        }),
        r = !1 !== c.LJ.getSetting() && e;
    if (y === r) return !1;
    (y = r) &&
        ((b = v(b, {
            maxNudgeAge: t,
            maxNudgeCount: n,
        })),
        (O = new Set(I())));
}

function L() {
    let e = !1;
    for (let t of Object.keys(b)) _.Ay.isChannelMuted(null, t) && (delete b[t], (e = !0));
    return e;
}

function x() {
    (b = {}), (O = new Set()), (y = !1);
}
class M extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        var t;
        (b = null != (t = null == e ? void 0 : e.nudgedChannels) ? t : {}),
            this.waitFor(s.A, d.default, f.A, p.A, l.A, _.Ay, u.A),
            this.syncWith([u.A, s.A], D),
            this.syncWith([_.Ay], L);
    }
    getState() {
        return {
            nudgedChannels: b,
        };
    }
    getNudgeTimestamp(e) {
        if (!y) return null;
        let t = b[e];
        if (null == t) return null;
        if (t.isActive || O.has(e)) {
            var n;
            return null != (n = b[e].timestamp) ? n : null;
        }
        return null;
    }
    isChannelNudged(e) {
        var t;
        let { includeInvisible: n = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!!y || !!n) && (null == (t = b[e]) ? void 0 : t.isActive) === !0;
    }
}
g(M, "displayName", "ReplyNudgeStore"), g(M, "persistKey", "ReplyNudgeStore");
let j = new M(a.h, {
    REPLY_NUDGE_SET: T,
    REPLY_NUDGE_CLEAR: C,
    MESSAGE_CREATE: N,
    MESSAGE_REACTION_ADD: w,
    CHANNEL_SELECT: R,
    CHANNEL_DELETE: P,
    LOGOUT: x,
});
