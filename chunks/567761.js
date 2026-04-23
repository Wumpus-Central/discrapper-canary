"use strict";
let i, r, s;
n.d(t, { default: () => ee }), n(321073);
var a = n(989349),
    o = n.n(a),
    l = n(17928),
    d = n(713402),
    _ = n(228366),
    u = n(695870),
    c = n(380335),
    E = n(157550);
n(134528), n(947204);
var h = n(626584),
    m = n(710195),
    f = n(427358),
    g = n(253932),
    p = n(617617),
    A = n(495544),
    I = n(734057),
    T = n(222823),
    S = n(994500),
    N = n(309010),
    C = n(543465),
    R = n(954571),
    O = n(945810),
    y = n(927813);
let v = (0, O.mj)({
        name: "2026-01-reply-nudge",
        kind: "user",
        defaultConfig: {
            enabled: !1,
            displayNudges: !1,
            minUserDMAffinity: -1,
            maxNudgeCount: 1,
            maxNudgeAge: 3 * y.A.Millis.DAY,
            minSinceReceiverMessageMs: 12 * y.A.Millis.HOUR,
            minLatestMessageAgeMs: 24 * y.A.Millis.HOUR,
        },
        variations: {
            0: {
                enabled: !0,
                displayNudges: !1,
                minUserDMAffinity: -1,
                maxNudgeCount: 2,
                maxNudgeAge: 3 * y.A.Millis.DAY,
                minSinceReceiverMessageMs: 12 * y.A.Millis.HOUR,
                minLatestMessageAgeMs: 24 * y.A.Millis.HOUR,
            },
            1: {
                enabled: !0,
                displayNudges: !0,
                minUserDMAffinity: -1,
                maxNudgeCount: 2,
                maxNudgeAge: 3 * y.A.Millis.DAY,
                minSinceReceiverMessageMs: 12 * y.A.Millis.HOUR,
                minLatestMessageAgeMs: 24 * y.A.Millis.HOUR,
            },
            2: {
                enabled: !0,
                displayNudges: !0,
                minUserDMAffinity: 0.05,
                maxNudgeCount: 2,
                maxNudgeAge: 3 * y.A.Millis.DAY,
                minSinceReceiverMessageMs: 12 * y.A.Millis.HOUR,
                minLatestMessageAgeMs: 24 * y.A.Millis.HOUR,
            },
            3: {
                enabled: !0,
                displayNudges: !0,
                minUserDMAffinity: -1,
                maxNudgeCount: 2,
                maxNudgeAge: 3 * y.A.Millis.DAY,
                minSinceReceiverMessageMs: 36 * y.A.Millis.HOUR,
                minLatestMessageAgeMs: 24 * y.A.Millis.HOUR,
            },
            4: {
                enabled: !0,
                displayNudges: !0,
                minUserDMAffinity: 0.05,
                maxNudgeCount: 2,
                maxNudgeAge: 3 * y.A.Millis.DAY,
                minSinceReceiverMessageMs: 36 * y.A.Millis.HOUR,
                minLatestMessageAgeMs: 24 * y.A.Millis.HOUR,
            },
            5: {
                enabled: !0,
                displayNudges: !0,
                minUserDMAffinity: -1,
                maxNudgeCount: 5,
                maxNudgeAge: 3 * y.A.Millis.DAY,
                minSinceReceiverMessageMs: 5 * y.A.Millis.MINUTE,
                minLatestMessageAgeMs: 5 * y.A.Millis.MINUTE,
            },
            6: {
                enabled: !0,
                displayNudges: !1,
                minUserDMAffinity: -1,
                maxNudgeCount: 5,
                maxNudgeAge: 3 * y.A.Millis.DAY,
                minSinceReceiverMessageMs: 6 * y.A.Millis.HOUR,
                minLatestMessageAgeMs: 6 * y.A.Millis.HOUR,
            },
        },
    }),
    D = 7 * y.A.Millis.DAY,
    L = -(3 * y.A.Millis.HOUR);
var b = n(652215);
let w = new h.A("ReplyNudgeStore"),
    P = !1,
    k = !1,
    M = {},
    U = new Set();
function x(e, t) {
    let { maxNudgeAge: i, maxNudgeCount: r } = t,
        s = Date.now(),
        a = {},
        o = Object.entries(e);
    o.sort((e, t) => t[1].timestamp - e[1].timestamp);
    let l = 0;
    for (let [e, { timestamp: t, isActive: d, lastMessageId: _, affinity: u, authorId: c }] of o)
        if (null != t && s - t < D) {
            let o = s - t,
                E = T.Ay.lastMessageId(e),
                h = d && o >= i,
                m = d && l >= r,
                f = d && E !== _,
                g = d && !h && !m && !f,
                p = null;
            if (
                (h ? (p = "aged_out") : m ? (p = "evicted_max_count") : f && (p = "more_recent_message"),
                (a[e] = { timestamp: t, isActive: g, lastMessageId: _, affinity: u, authorId: c }),
                g)
            )
                l++;
            else if (d) {
                let t = I.A.getChannel(e);
                Promise.resolve()
                    .then(n.bind(n, 567761))
                    .then((n) => {
                        let { default: i } = n;
                        R.default.track(b.HAw.REPLY_NUDGE_DISMISSED, {
                            channel_id: e,
                            channel_type: t?.type,
                            guild_id: t?.guild_id,
                            dismiss_method: p,
                            nudge_age_ms: o,
                            nudge_author_affinity: u,
                            nudge_author_id: c,
                            nudge_author_is_friend: S.A.isFriend(c),
                            nudge_message_id: _,
                            channel_dm_list_index: i.getPrivateChannelIds().indexOf(e),
                        });
                    });
            }
        }
    return w.info(`Pruned ${o.length - Object.keys(a).length} expired nudges`), a;
}
function G(e, t) {
    if (!(e in M)) return !1;
    let i = M[e];
    if (!i.isActive) return !1;
    let r = Date.now() - i.timestamp;
    M[e].isActive = !1;
    let s = I.A.getChannel(e);
    return (
        Promise.resolve()
            .then(n.bind(n, 567761))
            .then((n) => {
                let { default: a } = n;
                R.default.track(b.HAw.REPLY_NUDGE_DISMISSED, {
                    channel_id: e,
                    channel_type: s?.type,
                    guild_id: s?.guild_id,
                    dismiss_method: t,
                    nudge_age_ms: r,
                    nudge_author_affinity: i.affinity,
                    nudge_author_id: i.authorId,
                    nudge_message_id: i.lastMessageId,
                    nudge_author_is_friend: S.A.isFriend(i.authorId),
                    channel_dm_list_index: a.getPrivateChannelIds().indexOf(e),
                });
            }),
        !0
    );
}
function V() {
    let e = [];
    for (let [t, { isActive: n }] of Object.entries(M)) n && e.push(t);
    return e;
}
function F() {
    let {
            displayNudges: e,
            maxNudgeAge: t,
            maxNudgeCount: n,
        } = v.getConfig({ location: "handleNudgeVisibilityChange" }),
        i = !1 !== g.LJ.getSetting() && e;
    if (P === i) return !1;
    (P = i) && ((M = x(M, { maxNudgeAge: t, maxNudgeCount: n })), (U = new Set(V()))),
        !1 === g.LJ.getSetting() && ((M = {}), (U = new Set()));
}
function B() {
    let e = !1;
    for (let t of Object.keys(M))
        if (C.Ay.isChannelMuted(null, t)) {
            let i = M[t];
            if (i?.isActive) {
                let e = I.A.getChannel(t);
                Promise.resolve()
                    .then(n.bind(n, 567761))
                    .then((n) => {
                        let { default: r } = n;
                        R.default.track(b.HAw.REPLY_NUDGE_DISMISSED, {
                            channel_id: t,
                            channel_type: e?.type,
                            guild_id: e?.guild_id,
                            dismiss_method: "channel_muted",
                            nudge_age_ms: Date.now() - i.timestamp,
                            nudge_author_affinity: i.affinity,
                            nudge_author_id: i.authorId,
                            nudge_message_id: i.lastMessageId,
                            nudge_author_is_friend: S.A.isFriend(i.authorId),
                            channel_dm_list_index: r.getPrivateChannelIds().indexOf(t),
                        });
                    });
            }
            delete M[t], (e = !0);
        }
    return e;
}
class H extends l.Ay.PersistedStore {
    static displayName = "ReplyNudgeStore";
    static persistKey = "ReplyNudgeStore";
    initialize(e) {
        (M = e?.nudgedChannels ?? {}),
            this.waitFor(m.A, A.default, I.A, T.Ay, S.A, N.A, f.A, C.Ay, p.A),
            this.syncWith([p.A, m.A], F),
            this.syncWith([C.Ay], B);
    }
    getState() {
        return { nudgedChannels: M };
    }
    getNudgeTimestamp(e) {
        if (!P) return null;
        let t = M[e];
        return null == t ? null : t.isActive || U.has(e) ? (M[e].timestamp ?? null) : null;
    }
    getNudgeDMTimestamp(e) {
        let t = this.getNudgeTimestamp(e);
        return null == t ? null : t + L;
    }
    isChannelNudged(e) {
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!!P || !!t) && M[e]?.isActive === !0;
    }
    getChannelNudge(e) {
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return P || t ? (M[e] ?? null) : null;
    }
    isNudgesInitialized() {
        return k;
    }
}
let j = new H(_.h, {
    REPLY_NUDGE_SET: function (e) {
        let { channelId: t, timestamp: i, lastMessageId: r, affinity: s, authorId: a } = e;
        if (C.Ay.isChannelMuted(null, t)) return !1;
        let { maxNudgeAge: o, maxNudgeCount: l } = v.getConfig({ location: "handleReplyNudgeSet" });
        if (t in (M = x(M, { maxNudgeAge: o, maxNudgeCount: l }))) return !1;
        let d = V();
        if (d.length >= l) {
            let e = d.at(-1),
                i = 1 / 0;
            for (let t of d) {
                let n = M[t];
                null != n && n.affinity < i && ((i = n.affinity), (e = t));
            }
            if (s < i)
                return (
                    w.info("handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.", {
                        channelId: t,
                        lowestAffinity: i,
                        newNudgeAffinity: s,
                    }),
                    !1
                );
            w.info("handleReplyNudgeSet: Evicting nudge with lowest affinity", {
                channelId: t,
                lowestAffinity: i,
                newNudgeAffinity: s,
            });
            let r = M[e];
            if (r?.isActive) {
                let t = I.A.getChannel(e);
                Promise.resolve()
                    .then(n.bind(n, 567761))
                    .then((n) => {
                        let { default: i } = n;
                        R.default.track(b.HAw.REPLY_NUDGE_DISMISSED, {
                            channel_id: e,
                            channel_type: t?.type,
                            guild_id: t?.guild_id,
                            dismiss_method: "evicted_affinity",
                            nudge_age_ms: Date.now() - r.timestamp,
                            nudge_author_affinity: r.affinity,
                            nudge_author_id: r.authorId,
                            nudge_message_id: r.lastMessageId,
                            nudge_author_is_friend: S.A.isFriend(r.authorId),
                            channel_dm_list_index: i.getPrivateChannelIds().indexOf(e),
                        });
                    });
            }
            delete M[e];
        }
        (M[t] = { timestamp: i, isActive: !0, lastMessageId: r, affinity: s, authorId: a }), U.add(t);
    },
    REPLY_NUDGE_CLEAR: function (e) {
        let { channelId: t } = e;
        return G(t, "manual");
    },
    REPLY_NUDGES_INITIALIZED: function () {
        if (k) return !1;
        k = !0;
        let { maxNudgeAge: e, maxNudgeCount: t } = v.getConfig({ location: "handleNudgesInitialized" });
        M = x(M, { maxNudgeAge: e, maxNudgeCount: t });
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return G(t.channel_id, "message_sent");
    },
    MESSAGE_REACTION_ADD: function (e) {
        let { channelId: t, userId: n } = e;
        return n === A.default.getId() && G(t, "reaction_added");
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        return null != n && null == t && G(n, "channel_opened");
    },
    CHANNEL_DELETE: function (e) {
        let {
            channel: { id: t },
        } = e;
        return G(t, "channel_deleted");
    },
    LOGOUT: function () {
        (M = {}), (U = new Set()), (P = !1), (k = !1);
    },
});
var W = n(95701),
    Y = n(71393),
    K = n(287809),
    z = n(935208);
let $ = new d.J(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    (e) => {
        let { lastMessageId: t, nudgeTimestamp: n } = e;
        return -Math.max(z.default.extractTimestamp(t), n ?? 0);
    },
);
function q(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                  let t = T.Ay.lastMessageId(e.id) ?? e.lastMessageId ?? e.id,
                      n = e.isMessageRequestTimestamp;
                  if (null != n) {
                      let e = o()(n).valueOf(),
                          i = z.default.fromTimestamp(e);
                      return z.default.compare(t, i) > 0 ? t : i;
                  }
                  return t;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: c.A.isMessageRequest(e.id) || E.A.isSpam(e.id),
        nudgeTimestamp: j.getNudgeDMTimestamp(e.id),
    };
}
function X() {
    $.clear(),
        Object.values(I.A.getMutablePrivateChannels()).forEach((e) => {
            $.set(e.id, q(e));
        });
}
function Z() {
    let e = I.A.getMutablePrivateChannels();
    for (let t in e) $.set(t, q(e[t]));
}
let Q =
    ((i = []),
    (r = []),
    (s = []),
    () => {
        let e = $.values("FAVORITE"),
            t = $.values("DEFAULT");
        return (
            (i !== e || r !== t) &&
                ((s = []),
                e.forEach((e) => {
                    let { channelId: t } = e;
                    return s.push(t);
                }),
                (i = e),
                t.forEach((e) => {
                    let { channelId: t } = e;
                    return s.push(t);
                }),
                (r = t)),
            s
        );
    });
class J extends l.Ay.Store {
    static displayName = "PrivateChannelSortStore";
    initialize() {
        this.waitFor(I.A, Y.A, c.A, T.Ay, E.A, C.Ay, K.default, j), this.syncWith([C.Ay, c.A, j], X);
    }
    getPrivateChannelIds() {
        return Q();
    }
    getSortedChannels() {
        return [$.values("FAVORITE"), $.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            $.values().forEach((t) => {
                let { channelId: n, lastMessageId: i } = t;
                e[n] = i;
            }),
            e
        );
    }
}
let ee = new J(_.h, {
    CONNECTION_OPEN: X,
    CONNECTION_OPEN_SUPPLEMENTAL: X,
    OVERLAY_INITIALIZE: X,
    CACHE_LOADED: Z,
    CACHE_LOADED_LAZY: Z,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, W.Gw)(e.type) || $.has(e.id)) && $.set(e.id, q(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, W.Gw)(t.type) || t.id === u.E) return !1;
        $.set(t.id, q(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return $.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!$.has(t)) return !1;
        let i = I.A.getChannel(t);
        return null != i && $.set(t, q(i, n.id));
    },
    REPLY_NUDGE_SET: function (e) {
        let { channelId: t } = e;
        if (!$.has(t)) return !1;
        let n = I.A.getChannel(t);
        return null != n && $.set(t, q(n));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return $.delete(t);
    },
    LOGOUT: function () {
        $.clear();
    },
});
