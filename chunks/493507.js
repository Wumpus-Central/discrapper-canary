"use strict";
n.d(t, { A: () => V }), n(321073), n(134528), n(947204);
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
    f = n(309010),
    p = n(543465),
    h = n(954571),
    m = n(469679),
    g = n(575443),
    E = n(652215);
let A = new a.A("ReplyNudgeStore"),
    I = !1,
    T = !1,
    y = {},
    S = new Set();
function v(e, t) {
    let { maxNudgeAge: r, maxNudgeCount: i } = t,
        a = Date.now(),
        s = {},
        o = Object.entries(e);
    o.sort((e, t) => t[1].timestamp - e[1].timestamp);
    let l = 0;
    for (let [e, { timestamp: t, isActive: u, lastMessageId: c, affinity: f, authorId: p }] of o)
        if (null != t && a - t < g.Mk) {
            let o = a - t,
                m = _.Ay.lastMessageId(e),
                g = u && o >= r,
                A = u && l >= i,
                I = u && m !== c,
                T = u && !g && !A && !I,
                y = null;
            if (
                (g ? (y = "aged_out") : A ? (y = "evicted_max_count") : I && (y = "more_recent_message"),
                (s[e] = { timestamp: t, isActive: T, lastMessageId: c, affinity: f, authorId: p }),
                T)
            )
                l++;
            else if (u && !T) {
                let t = d.A.getChannel(e);
                Promise.resolve()
                    .then(n.bind(n, 645959))
                    .then((n) => {
                        let { default: r } = n;
                        h.default.track(E.HAw.REPLY_NUDGE_DISMISSED, {
                            channel_id: e,
                            channel_type: t?.type,
                            guild_id: t?.guild_id,
                            dismiss_method: y,
                            nudge_age_ms: o,
                            nudge_author_affinity: f,
                            nudge_author_id: p,
                            channel_dm_list_index: r.getPrivateChannelIds().indexOf(e),
                        });
                    });
            }
        }
    return A.info(`Pruned ${o.length - Object.keys(s).length} expired nudges`), s;
}
function C(e, t) {
    if (!(e in y)) return !1;
    let r = y[e];
    if (!r.isActive) return !1;
    let i = Date.now() - r.timestamp;
    y[e].isActive = !1;
    let a = d.A.getChannel(e);
    return (
        Promise.resolve()
            .then(n.bind(n, 645959))
            .then((n) => {
                let { default: s } = n;
                h.default.track(E.HAw.REPLY_NUDGE_DISMISSED, {
                    channel_id: e,
                    channel_type: a?.type,
                    guild_id: a?.guild_id,
                    dismiss_method: t,
                    nudge_age_ms: i,
                    nudge_author_affinity: r.affinity,
                    nudge_author_id: r.authorId,
                    channel_dm_list_index: s.getPrivateChannelIds().indexOf(e),
                });
            }),
        !0
    );
}
function b() {
    let e = [];
    for (let [t, { isActive: n }] of Object.entries(y)) n && e.push(t);
    return e;
}
function N(e) {
    let t = d.A.getChannel(e);
    if (null == t) return A.warn("getDMChannelAffinity: Unable to find channel", { channelId: e }), null;
    if (t?.isDM() !== !0) return A.warn("getDMChannelAffinity: Channel is not a DM", { channelId: e }), null;
    let n = t.getRecipientId();
    return o.A.getUserAffinity(n)?.dmProbability ?? null;
}
function R(e) {
    let { channelId: t, timestamp: r, lastMessageId: i, affinity: a, authorId: s } = e;
    if (p.Ay.isChannelMuted(null, t)) return !1;
    let { maxNudgeAge: o, maxNudgeCount: l } = m.T.getConfig({ location: "handleReplyNudgeSet" });
    if (t in (y = v(y, { maxNudgeAge: o, maxNudgeCount: l }))) return !1;
    let u = b();
    if (u.length >= l) {
        let e = u.at(-1),
            r = 1 / 0;
        for (let t of u) {
            let n = N(t);
            if (null == n) {
                A.warn("handleReplyNudgeSet: Nudge affinity is null", { nudgedChannelId: t });
                continue;
            }
            n < r && ((r = n), (e = t));
        }
        let i = N(t);
        if (null == i) return A.warn("handleReplyNudgeSet: New nudge affinity is null", { channelId: t }), !1;
        if (i < r)
            return (
                A.info("handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.", {
                    channelId: t,
                    lowestAffinity: r,
                    newNudgeAffinity: i,
                }),
                !1
            );
        A.info("handleReplyNudgeSet: Evicting nudge with lowest affinity", {
            channelId: t,
            lowestAffinity: r,
            newNudgeAffinity: i,
        });
        let a = y[e];
        if (a?.isActive) {
            let t = d.A.getChannel(e);
            Promise.resolve()
                .then(n.bind(n, 645959))
                .then((n) => {
                    let { default: r } = n;
                    h.default.track(E.HAw.REPLY_NUDGE_DISMISSED, {
                        channel_id: e,
                        channel_type: t?.type,
                        guild_id: t?.guild_id,
                        dismiss_method: "evicted_affinity",
                        nudge_age_ms: Date.now() - a.timestamp,
                        nudge_author_affinity: a.affinity,
                        nudge_author_id: a.authorId,
                        channel_dm_list_index: r.getPrivateChannelIds().indexOf(e),
                    });
                });
        }
        delete y[e];
    }
    (y[t] = { timestamp: r, isActive: !0, lastMessageId: i, affinity: a, authorId: s }), S.add(t);
}
function O(e) {
    let { channelId: t } = e;
    return C(t, "manual");
}
function D() {
    if (T) return !1;
    T = !0;
}
function L(e) {
    let { message: t } = e;
    return C(t.channel_id, "message_sent");
}
function w(e) {
    let { channelId: t, userId: n } = e;
    return n === c.default.getId() && C(t, "reaction_added");
}
function x() {
    let e = f.A.getLastSelectedChannelId();
    return null != e && C(e, "channel_opened");
}
function P(e) {
    let {
        channel: { id: t },
    } = e;
    return C(t, "channel_deleted");
}
function M() {
    let {
            displayNudges: e,
            maxNudgeAge: t,
            maxNudgeCount: n,
        } = m.T.getConfig({ location: "handleNudgeVisibilityChange" }),
        r = !1 !== l.LJ.getSetting() && e;
    if (I === r) return !1;
    (I = r) && ((y = v(y, { maxNudgeAge: t, maxNudgeCount: n })), (S = new Set(b()))),
        !1 === l.LJ.getSetting() && ((y = {}), (S = new Set()));
}
function k() {
    let e = !1;
    for (let t of Object.keys(y))
        if (p.Ay.isChannelMuted(null, t)) {
            let r = y[t];
            if (r?.isActive) {
                let e = d.A.getChannel(t);
                Promise.resolve()
                    .then(n.bind(n, 645959))
                    .then((n) => {
                        let { default: i } = n;
                        h.default.track(E.HAw.REPLY_NUDGE_DISMISSED, {
                            channel_id: t,
                            channel_type: e?.type,
                            guild_id: e?.guild_id,
                            dismiss_method: "channel_muted",
                            nudge_age_ms: Date.now() - r.timestamp,
                            nudge_author_affinity: r.affinity,
                            nudge_author_id: r.authorId,
                            channel_dm_list_index: i.getPrivateChannelIds().indexOf(t),
                        });
                    });
            }
            delete y[t], (e = !0);
        }
    return e;
}
function U() {
    (y = {}), (S = new Set()), (I = !1), (T = !1);
}
class G extends r.Ay.PersistedStore {
    static displayName = "ReplyNudgeStore";
    static persistKey = "ReplyNudgeStore";
    initialize(e) {
        (y = e?.nudgedChannels ?? {}),
            this.waitFor(s.A, c.default, d.A, f.A, o.A, p.Ay, u.A, _.Ay),
            this.syncWith([u.A, s.A], M),
            this.syncWith([p.Ay], k);
    }
    getState() {
        return { nudgedChannels: y };
    }
    getNudgeTimestamp(e) {
        if (!I) return null;
        let t = y[e];
        return null == t ? null : t.isActive || S.has(e) ? (y[e].timestamp ?? null) : null;
    }
    isChannelNudged(e) {
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!!I || !!t) && y[e]?.isActive === !0;
    }
    getChannelNudge(e) {
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return I || t ? (y[e] ?? null) : null;
    }
    isNudgesInitialized() {
        return T;
    }
}
let V = new G(i.h, {
    REPLY_NUDGE_SET: R,
    REPLY_NUDGE_CLEAR: O,
    REPLY_NUDGES_INITIALIZED: D,
    MESSAGE_CREATE: L,
    MESSAGE_REACTION_ADD: w,
    CHANNEL_SELECT: x,
    CHANNEL_DELETE: P,
    LOGOUT: U,
});
