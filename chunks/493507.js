"use strict";
n.d(t, { A: () => L }), n(321073), n(134528), n(947204);
var r = n(311907),
    i = n(73153),
    s = n(626584),
    a = n(217222),
    o = n(21119),
    l = n(253932),
    u = n(617617),
    d = n(961350),
    c = n(734057),
    _ = n(222823),
    f = n(994500),
    E = n(309010),
    h = n(543465),
    p = n(954571),
    m = n(469679),
    g = n(575443),
    A = n(652215);
let I = new s.A("ReplyNudgeStore"),
    T = !1,
    S = !1,
    y = {},
    N = new Set();
function O(e, t) {
    let { maxNudgeAge: r, maxNudgeCount: i } = t,
        s = Date.now(),
        a = {},
        o = Object.entries(e);
    o.sort((e, t) => t[1].timestamp - e[1].timestamp);
    let l = 0;
    for (let [e, { timestamp: t, isActive: u, lastMessageId: d, affinity: E, authorId: h }] of o)
        if (null != t && s - t < g.Mk) {
            let o = s - t,
                m = _.Ay.lastMessageId(e),
                g = u && o >= r,
                I = u && l >= i,
                T = u && m !== d,
                S = u && !g && !I && !T,
                y = null;
            if (
                (g ? (y = "aged_out") : I ? (y = "evicted_max_count") : T && (y = "more_recent_message"),
                (a[e] = { timestamp: t, isActive: S, lastMessageId: d, affinity: E, authorId: h }),
                S)
            )
                l++;
            else if (u) {
                let t = c.A.getChannel(e);
                Promise.resolve()
                    .then(n.bind(n, 645959))
                    .then((n) => {
                        let { default: r } = n;
                        p.default.track(A.HAw.REPLY_NUDGE_DISMISSED, {
                            channel_id: e,
                            channel_type: t?.type,
                            guild_id: t?.guild_id,
                            dismiss_method: y,
                            nudge_age_ms: o,
                            nudge_author_affinity: E,
                            nudge_author_id: h,
                            nudge_author_is_friend: f.A.isFriend(h),
                            nudge_message_id: d,
                            channel_dm_list_index: r.getPrivateChannelIds().indexOf(e),
                        });
                    });
            }
        }
    return I.info(`Pruned ${o.length - Object.keys(a).length} expired nudges`), a;
}
function R(e, t) {
    if (!(e in y)) return !1;
    let r = y[e];
    if (!r.isActive) return !1;
    let i = Date.now() - r.timestamp;
    y[e].isActive = !1;
    let s = c.A.getChannel(e);
    return (
        Promise.resolve()
            .then(n.bind(n, 645959))
            .then((n) => {
                let { default: a } = n;
                p.default.track(A.HAw.REPLY_NUDGE_DISMISSED, {
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
function v() {
    let e = [];
    for (let [t, { isActive: n }] of Object.entries(y)) n && e.push(t);
    return e;
}
function C() {
    let {
            displayNudges: e,
            maxNudgeAge: t,
            maxNudgeCount: n,
        } = m.T.getConfig({ location: "handleNudgeVisibilityChange" }),
        r = !1 !== l.LJ.getSetting() && e;
    if (T === r) return !1;
    (T = r) && ((y = O(y, { maxNudgeAge: t, maxNudgeCount: n })), (N = new Set(v()))),
        !1 === l.LJ.getSetting() && ((y = {}), (N = new Set()));
}
function b() {
    let e = !1;
    for (let t of Object.keys(y))
        if (h.Ay.isChannelMuted(null, t)) {
            let r = y[t];
            if (r?.isActive) {
                let e = c.A.getChannel(t);
                Promise.resolve()
                    .then(n.bind(n, 645959))
                    .then((n) => {
                        let { default: i } = n;
                        p.default.track(A.HAw.REPLY_NUDGE_DISMISSED, {
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
class D extends r.Ay.PersistedStore {
    static displayName = "ReplyNudgeStore";
    static persistKey = "ReplyNudgeStore";
    initialize(e) {
        (y = e?.nudgedChannels ?? {}),
            this.waitFor(a.A, d.default, c.A, _.Ay, f.A, E.A, o.A, h.Ay, u.A),
            this.syncWith([u.A, a.A], C),
            this.syncWith([h.Ay], b);
    }
    getState() {
        return { nudgedChannels: y };
    }
    getNudgeTimestamp(e) {
        if (!T) return null;
        let t = y[e];
        return null == t ? null : t.isActive || N.has(e) ? (y[e].timestamp ?? null) : null;
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
let L = new D(i.h, {
    REPLY_NUDGE_SET: function (e) {
        let { channelId: t, timestamp: r, lastMessageId: i, affinity: s, authorId: a } = e;
        if (h.Ay.isChannelMuted(null, t)) return !1;
        let { maxNudgeAge: o, maxNudgeCount: l } = m.T.getConfig({ location: "handleReplyNudgeSet" });
        if (t in (y = O(y, { maxNudgeAge: o, maxNudgeCount: l }))) return !1;
        let u = v();
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
                let t = c.A.getChannel(e);
                Promise.resolve()
                    .then(n.bind(n, 645959))
                    .then((n) => {
                        let { default: r } = n;
                        p.default.track(A.HAw.REPLY_NUDGE_DISMISSED, {
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
        (y[t] = { timestamp: r, isActive: !0, lastMessageId: i, affinity: s, authorId: a }), N.add(t);
    },
    REPLY_NUDGE_CLEAR: function (e) {
        let { channelId: t } = e;
        return R(t, "manual");
    },
    REPLY_NUDGES_INITIALIZED: function () {
        if (S) return !1;
        S = !0;
        let { maxNudgeAge: e, maxNudgeCount: t } = m.T.getConfig({ location: "handleNudgesInitialized" });
        y = O(y, { maxNudgeAge: e, maxNudgeCount: t });
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return R(t.channel_id, "message_sent");
    },
    MESSAGE_REACTION_ADD: function (e) {
        let { channelId: t, userId: n } = e;
        return n === d.default.getId() && R(t, "reaction_added");
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return null != n && null == t && R(n, "channel_opened");
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return R(t, "channel_deleted");
    },
    LOGOUT: function () {
        (y = {}), (N = new Set()), (T = !1), (S = !1);
    },
});
