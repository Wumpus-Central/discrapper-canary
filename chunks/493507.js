"use strict";
n.d(t, { A: () => F }), n(321073), n(134528), n(947204);
var r = n(311907),
    i = n(73153),
    s = n(626584),
    a = n(217222),
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
    E = n(469679),
    g = n(575443),
    A = n(652215);
let I = new s.A("ReplyNudgeStore"),
    T = !1,
    S = !1,
    y = {},
    v = new Set();
function N(e, t) {
    let { maxNudgeAge: r, maxNudgeCount: i } = t,
        s = Date.now(),
        a = {},
        o = Object.entries(e);
    o.sort((e, t) => t[1].timestamp - e[1].timestamp);
    let l = 0;
    for (let [e, { timestamp: t, isActive: u, lastMessageId: c, affinity: p, authorId: h }] of o)
        if (null != t && s - t < g.Mk) {
            let o = s - t,
                E = _.Ay.lastMessageId(e),
                g = u && o >= r,
                I = u && l >= i,
                T = u && E !== c,
                S = u && !g && !I && !T,
                y = null;
            if (
                (g ? (y = "aged_out") : I ? (y = "evicted_max_count") : T && (y = "more_recent_message"),
                (a[e] = { timestamp: t, isActive: S, lastMessageId: c, affinity: p, authorId: h }),
                S)
            )
                l++;
            else if (u) {
                let t = d.A.getChannel(e);
                Promise.resolve()
                    .then(n.bind(n, 645959))
                    .then((n) => {
                        let { default: r } = n;
                        m.default.track(A.HAw.REPLY_NUDGE_DISMISSED, {
                            channel_id: e,
                            channel_type: t?.type,
                            guild_id: t?.guild_id,
                            dismiss_method: y,
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
    return I.info(`Pruned ${o.length - Object.keys(a).length} expired nudges`), a;
}
function C(e, t) {
    if (!(e in y)) return !1;
    let r = y[e];
    if (!r.isActive) return !1;
    let i = Date.now() - r.timestamp;
    y[e].isActive = !1;
    let s = d.A.getChannel(e);
    return (
        Promise.resolve()
            .then(n.bind(n, 645959))
            .then((n) => {
                let { default: a } = n;
                m.default.track(A.HAw.REPLY_NUDGE_DISMISSED, {
                    channel_id: e,
                    channel_type: s?.type,
                    guild_id: s?.guild_id,
                    dismiss_method: t,
                    nudge_age_ms: i,
                    nudge_author_affinity: r.affinity,
                    nudge_author_id: r.authorId,
                    nudge_message_id: r.lastMessageId,
                    nudge_author_is_friend: f.A.isFriend(r.authorId),
                    channel_dm_list_index: a.getPrivateChannelIds().indexOf(e),
                });
            }),
        !0
    );
}
function R() {
    let e = [];
    for (let [t, { isActive: n }] of Object.entries(y)) n && e.push(t);
    return e;
}
function O(e) {
    let { channelId: t, timestamp: r, lastMessageId: i, affinity: s, authorId: a } = e;
    if (h.Ay.isChannelMuted(null, t)) return !1;
    let { maxNudgeAge: o, maxNudgeCount: l } = E.T.getConfig({ location: "handleReplyNudgeSet" });
    if (t in (y = N(y, { maxNudgeAge: o, maxNudgeCount: l }))) return !1;
    let u = R();
    if (u.length >= l) {
        let e = u.at(-1),
            r = 1 / 0;
        for (let t of u) {
            let n = y[t];
            null != n && n.affinity < r && ((r = n.affinity), (e = t));
        }
        if (s < r)
            return (
                I.info("handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.", {
                    channelId: t,
                    lowestAffinity: r,
                    newNudgeAffinity: s,
                }),
                !1
            );
        I.info("handleReplyNudgeSet: Evicting nudge with lowest affinity", {
            channelId: t,
            lowestAffinity: r,
            newNudgeAffinity: s,
        });
        let i = y[e];
        if (i?.isActive) {
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
                        nudge_age_ms: Date.now() - i.timestamp,
                        nudge_author_affinity: i.affinity,
                        nudge_author_id: i.authorId,
                        nudge_message_id: i.lastMessageId,
                        nudge_author_is_friend: f.A.isFriend(i.authorId),
                        channel_dm_list_index: r.getPrivateChannelIds().indexOf(e),
                    });
                });
        }
        delete y[e];
    }
    (y[t] = { timestamp: r, isActive: !0, lastMessageId: i, affinity: s, authorId: a }), v.add(t);
}
function b(e) {
    let { channelId: t } = e;
    return C(t, "manual");
}
function D() {
    if (S) return !1;
    S = !0;
    let { maxNudgeAge: e, maxNudgeCount: t } = E.T.getConfig({ location: "handleNudgesInitialized" });
    y = N(y, { maxNudgeAge: e, maxNudgeCount: t });
}
function L(e) {
    let { message: t } = e;
    return C(t.channel_id, "message_sent");
}
function w(e) {
    let { channelId: t, userId: n } = e;
    return n === c.default.getId() && C(t, "reaction_added");
}
function M(e) {
    let { guildId: t, channelId: n } = e;
    return null != n && null == t && C(n, "channel_opened");
}
function x(e) {
    let {
        channel: { id: t },
    } = e;
    return C(t, "channel_deleted");
}
function P() {
    let {
            displayNudges: e,
            maxNudgeAge: t,
            maxNudgeCount: n,
        } = E.T.getConfig({ location: "handleNudgeVisibilityChange" }),
        r = !1 !== l.LJ.getSetting() && e;
    if (T === r) return !1;
    (T = r) && ((y = N(y, { maxNudgeAge: t, maxNudgeCount: n })), (v = new Set(R()))),
        !1 === l.LJ.getSetting() && ((y = {}), (v = new Set()));
}
function k() {
    let e = !1;
    for (let t of Object.keys(y))
        if (h.Ay.isChannelMuted(null, t)) {
            let r = y[t];
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
            delete y[t], (e = !0);
        }
    return e;
}
function U() {
    (y = {}), (v = new Set()), (T = !1), (S = !1);
}
class G extends r.Ay.PersistedStore {
    static displayName = "ReplyNudgeStore";
    static persistKey = "ReplyNudgeStore";
    initialize(e) {
        (y = e?.nudgedChannels ?? {}),
            this.waitFor(a.A, c.default, d.A, _.Ay, f.A, p.A, o.A, h.Ay, u.A),
            this.syncWith([u.A, a.A], P),
            this.syncWith([h.Ay], k);
    }
    getState() {
        return { nudgedChannels: y };
    }
    getNudgeTimestamp(e) {
        if (!T) return null;
        let t = y[e];
        return null == t ? null : t.isActive || v.has(e) ? (y[e].timestamp ?? null) : null;
    }
    getNudgeDMTimestamp(e) {
        let t = this.getNudgeTimestamp(e);
        return null == t ? null : t + g.aw;
    }
    isChannelNudged(e) {
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!!T || !!t) && y[e]?.isActive === !0;
    }
    getChannelNudge(e) {
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return T || t ? (y[e] ?? null) : null;
    }
    isNudgesInitialized() {
        return S;
    }
}
let F = new G(i.h, {
    REPLY_NUDGE_SET: O,
    REPLY_NUDGE_CLEAR: b,
    REPLY_NUDGES_INITIALIZED: D,
    MESSAGE_CREATE: L,
    MESSAGE_REACTION_ADD: w,
    CHANNEL_SELECT: M,
    CHANNEL_DELETE: x,
    LOGOUT: U,
});
