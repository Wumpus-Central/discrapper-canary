"use strict";
n.d(t, { A: () => P }), n(321073), n(134528), n(947204);
var r = n(311907),
    i = n(73153),
    a = n(626584),
    s = n(217222),
    o = n(21119),
    l = n(253932),
    u = n(617617),
    c = n(961350),
    d = n(734057),
    _ = n(309010),
    f = n(543465),
    p = n(469679),
    h = n(575443);
let m = new a.A("ReplyNudgeStore"),
    g = !1,
    E = {},
    A = new Set();
function I(e, t) {
    let { maxNudgeAge: n, maxNudgeCount: r } = t,
        i = Date.now(),
        a = {},
        s = Object.entries(e);
    s.sort((e, t) => t[1].timestamp - e[1].timestamp);
    let o = 0;
    for (let [e, { timestamp: t, isActive: l }] of s)
        if (null != t && i - t < h.Mk) {
            let s = l && i - t < n && o < r;
            (a[e] = { timestamp: t, isActive: s }), s && o++;
        }
    return m.info(`Pruned ${s.length - Object.keys(a).length} expired nudges`), a;
}
function T(e) {
    if (!(e in E) || !E[e].isActive) return !1;
    E[e].isActive = !1;
}
function y() {
    let e = [];
    for (let [t, { isActive: n }] of Object.entries(E)) n && e.push(t);
    return e;
}
function S(e) {
    let t = d.A.getChannel(e);
    if (null == t) return m.warn("getDMChannelAffinity: Unable to find channel", { channelId: e }), null;
    if (t?.isDM() !== !0) return m.warn("getDMChannelAffinity: Channel is not a DM", { channelId: e }), null;
    let n = t.getRecipientId();
    return o.A.getUserAffinity(n)?.dmProbability ?? null;
}
function v(e) {
    let { channelId: t, timestamp: n } = e;
    if (f.Ay.isChannelMuted(null, t)) return !1;
    let { maxNudgeAge: r, maxNudgeCount: i } = p.T.getConfig({ location: "handleReplyNudgeSet" });
    if (t in (E = I(E, { maxNudgeAge: r, maxNudgeCount: i }))) return !1;
    let a = y();
    if (a.length >= i) {
        let e = a.at(-1),
            n = 1 / 0;
        for (let t of a) {
            let r = S(t);
            if (null == r) {
                m.warn("handleReplyNudgeSet: Nudge affinity is null", { nudgedChannelId: t });
                continue;
            }
            r < n && ((n = r), (e = t));
        }
        let r = S(t);
        if (null == r) return m.warn("handleReplyNudgeSet: New nudge affinity is null", { channelId: t }), !1;
        if (r < n)
            return (
                m.info("handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.", {
                    channelId: t,
                    lowestAffinity: n,
                    newNudgeAffinity: r,
                }),
                !1
            );
        m.info("handleReplyNudgeSet: Evicting nudge with lowest affinity", {
            channelId: t,
            lowestAffinity: n,
            newNudgeAffinity: r,
        }),
            delete E[e];
    }
    (E[t] = { timestamp: n, isActive: !0 }), A.add(t);
}
function C(e) {
    let { channelId: t } = e;
    return T(t);
}
function b(e) {
    let { message: t } = e;
    return T(t.channel_id);
}
function N(e) {
    let { channelId: t, userId: n } = e;
    return n === c.default.getId() && T(t);
}
function R() {
    let e = _.A.getLastSelectedChannelId();
    return null != e && T(e);
}
function O(e) {
    let {
        channel: { id: t },
    } = e;
    return T(t);
}
function D() {
    let {
            displayNudges: e,
            maxNudgeAge: t,
            maxNudgeCount: n,
        } = p.T.getConfig({ location: "handleNudgeVisibilityChange" }),
        r = !1 !== l.LJ.getSetting() && e;
    if (g === r) return !1;
    (g = r) && ((E = I(E, { maxNudgeAge: t, maxNudgeCount: n })), (A = new Set(y())));
}
function L() {
    let e = !1;
    for (let t of Object.keys(E)) f.Ay.isChannelMuted(null, t) && (delete E[t], (e = !0));
    return e;
}
function w() {
    (E = {}), (A = new Set()), (g = !1);
}
class x extends r.Ay.PersistedStore {
    static displayName = "ReplyNudgeStore";
    static persistKey = "ReplyNudgeStore";
    initialize(e) {
        (E = e?.nudgedChannels ?? {}),
            this.waitFor(s.A, c.default, d.A, _.A, o.A, f.Ay, u.A),
            this.syncWith([u.A, s.A], D),
            this.syncWith([f.Ay], L);
    }
    getState() {
        return { nudgedChannels: E };
    }
    getNudgeTimestamp(e) {
        if (!g) return null;
        let t = E[e];
        return null == t ? null : t.isActive || A.has(e) ? (E[e].timestamp ?? null) : null;
    }
    isChannelNudged(e) {
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!!g || !!t) && E[e]?.isActive === !0;
    }
}
let P = new x(i.h, {
    REPLY_NUDGE_SET: v,
    REPLY_NUDGE_CLEAR: C,
    MESSAGE_CREATE: b,
    MESSAGE_REACTION_ADD: N,
    CHANNEL_SELECT: R,
    CHANNEL_DELETE: O,
    LOGOUT: w,
});
