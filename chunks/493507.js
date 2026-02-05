"use strict";
n.d(t, { A: () => F }), n(321073), n(134528), n(947204);
var r = n(311907),
    i = n(73153),
    a = n(626584),
    s = n(217222),
    o = n(21119),
    l = n(253932),
    u = n(617617),
    c = n(961350),
    d = n(734057),
    _ = n(222823),
    f = n(994500),
    p = n(309010),
    h = n(543465),
    m = n(954571),
    g = n(469679),
    E = n(575443),
    A = n(652215);
let I = new a.A("ReplyNudgeStore"),
    T = !1,
    y = !1,
    S = {},
    v = new Set();
function C(e, t) {
    let { maxNudgeAge: r, maxNudgeCount: i } = t,
        a = Date.now(),
        s = {},
        o = Object.entries(e);
    o.sort((e, t) => t[1].timestamp - e[1].timestamp);
    let l = 0;
    for (let [e, { timestamp: t, isActive: u, lastMessageId: c, affinity: p, authorId: h }] of o)
        if (null != t && a - t < E.Mk) {
            let o = a - t,
                g = _.Ay.lastMessageId(e),
                E = u && o >= r,
                I = u && l >= i,
                T = u && g !== c,
                y = u && !E && !I && !T,
                S = null;
            if (
                (E ? (S = "aged_out") : I ? (S = "evicted_max_count") : T && (S = "more_recent_message"),
                (s[e] = { timestamp: t, isActive: y, lastMessageId: c, affinity: p, authorId: h }),
                y)
            )
                l++;
            else if (u && !y) {
                let t = d.A.getChannel(e);
                Promise.resolve()
                    .then(n.bind(n, 645959))
                    .then((n) => {
                        let { default: r } = n;
                        m.default.track(A.HAw.REPLY_NUDGE_DISMISSED, {
                            channel_id: e,
                            channel_type: t?.type,
                            guild_id: t?.guild_id,
                            dismiss_method: S,
                            nudge_age_ms: o,
                            nudge_author_affinity: p,
                            nudge_author_id: h,
                            nudge_author_is_friend: f.A.isFriend(h),
                            nudge_message_id: c,
                            channel_dm_list_index: r.getPrivateChannelIds().indexOf(e),
                        });
                    });
            }
        }
    return I.info(`Pruned ${o.length - Object.keys(s).length} expired nudges`), s;
}
function b(e, t) {
    if (!(e in S)) return !1;
    let r = S[e];
    if (!r.isActive) return !1;
    let i = Date.now() - r.timestamp;
    S[e].isActive = !1;
    let a = d.A.getChannel(e);
    return (
        Promise.resolve()
            .then(n.bind(n, 645959))
            .then((n) => {
                let { default: s } = n;
                m.default.track(A.HAw.REPLY_NUDGE_DISMISSED, {
                    channel_id: e,
                    channel_type: a?.type,
                    guild_id: a?.guild_id,
                    dismiss_method: t,
                    nudge_age_ms: i,
                    nudge_author_affinity: r.affinity,
                    nudge_author_id: r.authorId,
                    nudge_message_id: r.lastMessageId,
                    nudge_author_is_friend: f.A.isFriend(r.authorId),
                    channel_dm_list_index: s.getPrivateChannelIds().indexOf(e),
                });
            }),
        !0
    );
}
function N() {
    let e = [];
    for (let [t, { isActive: n }] of Object.entries(S)) n && e.push(t);
    return e;
}
function R(e) {
    let t = d.A.getChannel(e);
    if (null == t) return I.warn("getDMChannelAffinity: Unable to find channel", { channelId: e }), null;
    if (t?.isDM() !== !0) return I.warn("getDMChannelAffinity: Channel is not a DM", { channelId: e }), null;
    let n = t.getRecipientId();
    return o.A.getUserAffinity(n)?.dmProbability ?? null;
}
function O(e) {
    let { channelId: t, timestamp: r, lastMessageId: i, affinity: a, authorId: s } = e;
    if (h.Ay.isChannelMuted(null, t)) return !1;
    let { maxNudgeAge: o, maxNudgeCount: l } = g.T.getConfig({ location: "handleReplyNudgeSet" });
    if (t in (S = C(S, { maxNudgeAge: o, maxNudgeCount: l }))) return !1;
    let u = N();
    if (u.length >= l) {
        let e = u.at(-1),
            r = 1 / 0;
        for (let t of u) {
            let n = R(t);
            if (null == n) {
                I.warn("handleReplyNudgeSet: Nudge affinity is null", { nudgedChannelId: t });
                continue;
            }
            n < r && ((r = n), (e = t));
        }
        let i = R(t);
        if (null == i) return I.warn("handleReplyNudgeSet: New nudge affinity is null", { channelId: t }), !1;
        if (i < r)
            return (
                I.info("handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.", {
                    channelId: t,
                    lowestAffinity: r,
                    newNudgeAffinity: i,
                }),
                !1
            );
        I.info("handleReplyNudgeSet: Evicting nudge with lowest affinity", {
            channelId: t,
            lowestAffinity: r,
            newNudgeAffinity: i,
        });
        let a = S[e];
        if (a?.isActive) {
            let t = d.A.getChannel(e);
            Promise.resolve()
                .then(n.bind(n, 645959))
                .then((n) => {
                    let { default: r } = n;
                    m.default.track(A.HAw.REPLY_NUDGE_DISMISSED, {
                        channel_id: e,
                        channel_type: t?.type,
                        guild_id: t?.guild_id,
                        dismiss_method: "evicted_affinity",
                        nudge_age_ms: Date.now() - a.timestamp,
                        nudge_author_affinity: a.affinity,
                        nudge_author_id: a.authorId,
                        nudge_message_id: a.lastMessageId,
                        nudge_author_is_friend: f.A.isFriend(a.authorId),
                        channel_dm_list_index: r.getPrivateChannelIds().indexOf(e),
                    });
                });
        }
        delete S[e];
    }
    (S[t] = { timestamp: r, isActive: !0, lastMessageId: i, affinity: a, authorId: s }), v.add(t);
}
function D(e) {
    let { channelId: t } = e;
    return b(t, "manual");
}
function L() {
    if (y) return !1;
    y = !0;
}
function w(e) {
    let { message: t } = e;
    return b(t.channel_id, "message_sent");
}
function x(e) {
    let { channelId: t, userId: n } = e;
    return n === c.default.getId() && b(t, "reaction_added");
}
function P() {
    let e = p.A.getLastSelectedChannelId();
    return null != e && b(e, "channel_opened");
}
function M(e) {
    let {
        channel: { id: t },
    } = e;
    return b(t, "channel_deleted");
}
function k() {
    let {
            displayNudges: e,
            maxNudgeAge: t,
            maxNudgeCount: n,
        } = g.T.getConfig({ location: "handleNudgeVisibilityChange" }),
        r = !1 !== l.LJ.getSetting() && e;
    if (T === r) return !1;
    (T = r) && ((S = C(S, { maxNudgeAge: t, maxNudgeCount: n })), (v = new Set(N()))),
        !1 === l.LJ.getSetting() && ((S = {}), (v = new Set()));
}
function U() {
    let e = !1;
    for (let t of Object.keys(S))
        if (h.Ay.isChannelMuted(null, t)) {
            let r = S[t];
            if (r?.isActive) {
                let e = d.A.getChannel(t);
                Promise.resolve()
                    .then(n.bind(n, 645959))
                    .then((n) => {
                        let { default: i } = n;
                        m.default.track(A.HAw.REPLY_NUDGE_DISMISSED, {
                            channel_id: t,
                            channel_type: e?.type,
                            guild_id: e?.guild_id,
                            dismiss_method: "channel_muted",
                            nudge_age_ms: Date.now() - r.timestamp,
                            nudge_author_affinity: r.affinity,
                            nudge_author_id: r.authorId,
                            nudge_message_id: r.lastMessageId,
                            nudge_author_is_friend: f.A.isFriend(r.authorId),
                            channel_dm_list_index: i.getPrivateChannelIds().indexOf(t),
                        });
                    });
            }
            delete S[t], (e = !0);
        }
    return e;
}
function G() {
    (S = {}), (v = new Set()), (T = !1), (y = !1);
}
class V extends r.Ay.PersistedStore {
    static displayName = "ReplyNudgeStore";
    static persistKey = "ReplyNudgeStore";
    initialize(e) {
        (S = e?.nudgedChannels ?? {}),
            this.waitFor(s.A, c.default, d.A, _.Ay, f.A, p.A, o.A, h.Ay, u.A),
            this.syncWith([u.A, s.A], k),
            this.syncWith([h.Ay], U);
    }
    getState() {
        return { nudgedChannels: S };
    }
    getNudgeTimestamp(e) {
        if (!T) return null;
        let t = S[e];
        return null == t ? null : t.isActive || v.has(e) ? (S[e].timestamp ?? null) : null;
    }
    isChannelNudged(e) {
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!!T || !!t) && S[e]?.isActive === !0;
    }
    getChannelNudge(e) {
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return T || t ? (S[e] ?? null) : null;
    }
    isNudgesInitialized() {
        return y;
    }
}
let F = new V(i.h, {
    REPLY_NUDGE_SET: O,
    REPLY_NUDGE_CLEAR: D,
    REPLY_NUDGES_INITIALIZED: L,
    MESSAGE_CREATE: w,
    MESSAGE_REACTION_ADD: x,
    CHANNEL_SELECT: P,
    CHANNEL_DELETE: M,
    LOGOUT: G,
});
