"use strict";
n.d(t, { A: () => B }), n(321073), n(134528), n(947204);
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
    h = n(309010),
    p = n(543465),
    g = n(954571),
    E = n(469679),
    A = n(575443),
    I = n(652215);
let T = new a.A("ReplyNudgeStore"),
    y = !1,
    S = !1,
    v = {},
    C = new Set();
function b(e, t) {
    let { maxNudgeAge: r, maxNudgeCount: i } = t,
        a = Date.now(),
        s = {},
        o = Object.entries(e);
    o.sort((e, t) => t[1].timestamp - e[1].timestamp);
    let l = 0;
    for (let [e, { timestamp: t, isActive: u, lastMessageId: c, affinity: h, authorId: p }] of o)
        if (null != t && a - t < A.Mk) {
            let o = a - t,
                E = _.Ay.lastMessageId(e),
                A = u && o >= r,
                T = u && l >= i,
                y = u && E !== c,
                S = u && !A && !T && !y,
                v = null;
            if (
                (A ? (v = "aged_out") : T ? (v = "evicted_max_count") : y && (v = "more_recent_message"),
                (s[e] = { timestamp: t, isActive: S, lastMessageId: c, affinity: h, authorId: p }),
                S)
            )
                l++;
            else if (u && !S) {
                let t = d.A.getChannel(e);
                Promise.resolve()
                    .then(n.bind(n, 645959))
                    .then((n) => {
                        let { default: r } = n;
                        g.default.track(I.HAw.REPLY_NUDGE_DISMISSED, {
                            channel_id: e,
                            channel_type: t?.type,
                            guild_id: t?.guild_id,
                            dismiss_method: v,
                            nudge_age_ms: o,
                            nudge_author_affinity: h,
                            nudge_author_id: p,
                            nudge_author_is_friend: f.A.isFriend(p),
                            nudge_message_id: c,
                            channel_dm_list_index: r.getPrivateChannelIds().indexOf(e),
                        });
                    });
            }
        }
    return T.info(`Pruned ${o.length - Object.keys(s).length} expired nudges`), s;
}
function N(e, t) {
    if (!(e in v)) return !1;
    let r = v[e];
    if (!r.isActive) return !1;
    let i = Date.now() - r.timestamp;
    v[e].isActive = !1;
    let a = d.A.getChannel(e);
    return (
        Promise.resolve()
            .then(n.bind(n, 645959))
            .then((n) => {
                let { default: s } = n;
                g.default.track(I.HAw.REPLY_NUDGE_DISMISSED, {
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
function R() {
    let e = [];
    for (let [t, { isActive: n }] of Object.entries(v)) n && e.push(t);
    return e;
}
function O(e) {
    let t = d.A.getChannel(e);
    if (null == t) return T.warn("getDMChannelAffinity: Unable to find channel", { channelId: e }), null;
    if (t?.isDM() !== !0) return T.warn("getDMChannelAffinity: Channel is not a DM", { channelId: e }), null;
    let n = t.getRecipientId();
    return o.A.getUserAffinity(n)?.dmProbability ?? null;
}
function D(e) {
    let { channelId: t, timestamp: r, lastMessageId: i, affinity: a, authorId: s } = e;
    if (p.Ay.isChannelMuted(null, t)) return !1;
    let { maxNudgeAge: o, maxNudgeCount: l } = E.T.getConfig({ location: "handleReplyNudgeSet" });
    if (t in (v = b(v, { maxNudgeAge: o, maxNudgeCount: l }))) return !1;
    let u = R();
    if (u.length >= l) {
        let e = u.at(-1),
            r = 1 / 0;
        for (let t of u) {
            let n = O(t);
            if (null == n) {
                T.warn("handleReplyNudgeSet: Nudge affinity is null", { nudgedChannelId: t });
                continue;
            }
            n < r && ((r = n), (e = t));
        }
        let i = O(t);
        if (null == i) return T.warn("handleReplyNudgeSet: New nudge affinity is null", { channelId: t }), !1;
        if (i < r)
            return (
                T.info("handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.", {
                    channelId: t,
                    lowestAffinity: r,
                    newNudgeAffinity: i,
                }),
                !1
            );
        T.info("handleReplyNudgeSet: Evicting nudge with lowest affinity", {
            channelId: t,
            lowestAffinity: r,
            newNudgeAffinity: i,
        });
        let a = v[e];
        if (a?.isActive) {
            let t = d.A.getChannel(e);
            Promise.resolve()
                .then(n.bind(n, 645959))
                .then((n) => {
                    let { default: r } = n;
                    g.default.track(I.HAw.REPLY_NUDGE_DISMISSED, {
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
        delete v[e];
    }
    (v[t] = { timestamp: r, isActive: !0, lastMessageId: i, affinity: a, authorId: s }), C.add(t);
}
function L(e) {
    let { channelId: t } = e;
    return N(t, "manual");
}
function w() {
    if (S) return !1;
    S = !0;
    let { maxNudgeAge: e, maxNudgeCount: t } = E.T.getConfig({ location: "handleNudgesInitialized" });
    v = b(v, { maxNudgeAge: e, maxNudgeCount: t });
}
function x(e) {
    let { message: t } = e;
    return N(t.channel_id, "message_sent");
}
function P(e) {
    let { channelId: t, userId: n } = e;
    return n === c.default.getId() && N(t, "reaction_added");
}
function M(e) {
    let { guildId: t, channelId: n } = e;
    return null != n && null == t && N(n, "channel_opened");
}
function k(e) {
    let {
        channel: { id: t },
    } = e;
    return N(t, "channel_deleted");
}
function U() {
    let {
            displayNudges: e,
            maxNudgeAge: t,
            maxNudgeCount: n,
        } = E.T.getConfig({ location: "handleNudgeVisibilityChange" }),
        r = !1 !== l.LJ.getSetting() && e;
    if (y === r) return !1;
    (y = r) && ((v = b(v, { maxNudgeAge: t, maxNudgeCount: n })), (C = new Set(R()))),
        !1 === l.LJ.getSetting() && ((v = {}), (C = new Set()));
}
function G() {
    let e = !1;
    for (let t of Object.keys(v))
        if (p.Ay.isChannelMuted(null, t)) {
            let r = v[t];
            if (r?.isActive) {
                let e = d.A.getChannel(t);
                Promise.resolve()
                    .then(n.bind(n, 645959))
                    .then((n) => {
                        let { default: i } = n;
                        g.default.track(I.HAw.REPLY_NUDGE_DISMISSED, {
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
            delete v[t], (e = !0);
        }
    return e;
}
function F() {
    (v = {}), (C = new Set()), (y = !1), (S = !1);
}
class V extends r.Ay.PersistedStore {
    static displayName = "ReplyNudgeStore";
    static persistKey = "ReplyNudgeStore";
    initialize(e) {
        (v = e?.nudgedChannels ?? {}),
            this.waitFor(s.A, c.default, d.A, _.Ay, f.A, h.A, o.A, p.Ay, u.A),
            this.syncWith([u.A, s.A], U),
            this.syncWith([p.Ay], G);
    }
    getState() {
        return { nudgedChannels: v };
    }
    getNudgeTimestamp(e) {
        if (!y) return null;
        let t = v[e];
        return null == t ? null : t.isActive || C.has(e) ? (v[e].timestamp ?? null) : null;
    }
    getNudgeDMTimestamp(e) {
        let t = this.getNudgeTimestamp(e);
        return null == t ? null : t + A.aw;
    }
    isChannelNudged(e) {
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!!y || !!t) && v[e]?.isActive === !0;
    }
    getChannelNudge(e) {
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return y || t ? (v[e] ?? null) : null;
    }
    isNudgesInitialized() {
        return S;
    }
}
let B = new V(i.h, {
    REPLY_NUDGE_SET: D,
    REPLY_NUDGE_CLEAR: L,
    REPLY_NUDGES_INITIALIZED: w,
    MESSAGE_CREATE: x,
    MESSAGE_REACTION_ADD: P,
    CHANNEL_SELECT: M,
    CHANNEL_DELETE: k,
    LOGOUT: F,
});
