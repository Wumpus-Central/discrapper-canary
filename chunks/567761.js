"use strict";
let i, r, s;
n.d(t, { default: () => ee }), n(321073);
var a = n(989349),
    o = n.n(a),
    l = n(17928),
    u = n(713402),
    c = n(228366),
    d = n(695870),
    _ = n(380335),
    h = n(157550);
n(134528), n(947204);
var f = n(626584),
    p = n(710195),
    E = n(427358),
    m = n(885386),
    g = n(617617),
    A = n(495544),
    I = n(734057),
    T = n(222823),
    S = n(994500),
    y = n(309010),
    N = n(543465),
    v = n(174459),
    C = n(945810),
    R = n(927813);
let O = (0, C.mj)({
        name: "2026-01-reply-nudge",
        kind: "user",
        defaultConfig: {
            enabled: !1,
            displayNudges: !1,
            minUserDMAffinity: -1,
            maxNudgeCount: 1,
            maxNudgeAge: 3 * R.A.Millis.DAY,
            minSinceReceiverMessageMs: 12 * R.A.Millis.HOUR,
            minLatestMessageAgeMs: 24 * R.A.Millis.HOUR,
        },
        variations: {
            0: {
                enabled: !0,
                displayNudges: !1,
                minUserDMAffinity: -1,
                maxNudgeCount: 2,
                maxNudgeAge: 3 * R.A.Millis.DAY,
                minSinceReceiverMessageMs: 12 * R.A.Millis.HOUR,
                minLatestMessageAgeMs: 24 * R.A.Millis.HOUR,
            },
            1: {
                enabled: !0,
                displayNudges: !0,
                minUserDMAffinity: -1,
                maxNudgeCount: 2,
                maxNudgeAge: 3 * R.A.Millis.DAY,
                minSinceReceiverMessageMs: 12 * R.A.Millis.HOUR,
                minLatestMessageAgeMs: 24 * R.A.Millis.HOUR,
            },
            2: {
                enabled: !0,
                displayNudges: !0,
                minUserDMAffinity: 0.05,
                maxNudgeCount: 2,
                maxNudgeAge: 3 * R.A.Millis.DAY,
                minSinceReceiverMessageMs: 12 * R.A.Millis.HOUR,
                minLatestMessageAgeMs: 24 * R.A.Millis.HOUR,
            },
            3: {
                enabled: !0,
                displayNudges: !0,
                minUserDMAffinity: -1,
                maxNudgeCount: 2,
                maxNudgeAge: 3 * R.A.Millis.DAY,
                minSinceReceiverMessageMs: 36 * R.A.Millis.HOUR,
                minLatestMessageAgeMs: 24 * R.A.Millis.HOUR,
            },
            4: {
                enabled: !0,
                displayNudges: !0,
                minUserDMAffinity: 0.05,
                maxNudgeCount: 2,
                maxNudgeAge: 3 * R.A.Millis.DAY,
                minSinceReceiverMessageMs: 36 * R.A.Millis.HOUR,
                minLatestMessageAgeMs: 24 * R.A.Millis.HOUR,
            },
            5: {
                enabled: !0,
                displayNudges: !0,
                minUserDMAffinity: -1,
                maxNudgeCount: 5,
                maxNudgeAge: 3 * R.A.Millis.DAY,
                minSinceReceiverMessageMs: 5 * R.A.Millis.MINUTE,
                minLatestMessageAgeMs: 5 * R.A.Millis.MINUTE,
            },
            6: {
                enabled: !0,
                displayNudges: !1,
                minUserDMAffinity: -1,
                maxNudgeCount: 5,
                maxNudgeAge: 3 * R.A.Millis.DAY,
                minSinceReceiverMessageMs: 6 * R.A.Millis.HOUR,
                minLatestMessageAgeMs: 6 * R.A.Millis.HOUR,
            },
        },
    }),
    b = 7 * R.A.Millis.DAY,
    D = -(3 * R.A.Millis.HOUR);
var L = n(652215);
let w = new f.A("ReplyNudgeStore"),
    M = !1,
    P = !1,
    x = {},
    k = new Set();
function U(e, t) {
    let { maxNudgeAge: i, maxNudgeCount: r } = t,
        s = Date.now(),
        a = {},
        o = Object.entries(e);
    o.sort((e, t) => t[1].timestamp - e[1].timestamp);
    let l = 0;
    for (let [e, { timestamp: t, isActive: u, lastMessageId: c, affinity: d, authorId: _ }] of o)
        if (null != t && s - t < b) {
            let o = s - t,
                h = T.Ay.lastMessageId(e),
                f = u && o >= i,
                p = u && l >= r,
                E = u && h !== c,
                m = u && !f && !p && !E,
                g = null;
            if (
                (f ? (g = "aged_out") : p ? (g = "evicted_max_count") : E && (g = "more_recent_message"),
                (a[e] = { timestamp: t, isActive: m, lastMessageId: c, affinity: d, authorId: _ }),
                m)
            )
                l++;
            else if (u) {
                let t = I.A.getChannel(e);
                Promise.resolve()
                    .then(n.bind(n, 567761))
                    .then((n) => {
                        let { default: i } = n;
                        v.default.track(L.HAw.REPLY_NUDGE_DISMISSED, {
                            channel_id: e,
                            channel_type: t?.type,
                            guild_id: t?.guild_id,
                            dismiss_method: g,
                            nudge_age_ms: o,
                            nudge_author_affinity: d,
                            nudge_author_id: _,
                            nudge_author_is_friend: S.A.isFriend(_),
                            nudge_message_id: c,
                            channel_dm_list_index: i.getPrivateChannelIds().indexOf(e),
                        });
                    });
            }
        }
    return w.info(`Pruned ${o.length - Object.keys(a).length} expired nudges`), a;
}
function G(e, t) {
    if (!(e in x)) return !1;
    let i = x[e];
    if (!i.isActive) return !1;
    let r = Date.now() - i.timestamp;
    x[e].isActive = !1;
    let s = I.A.getChannel(e);
    return (
        Promise.resolve()
            .then(n.bind(n, 567761))
            .then((n) => {
                let { default: a } = n;
                v.default.track(L.HAw.REPLY_NUDGE_DISMISSED, {
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
function F() {
    let e = [];
    for (let [t, { isActive: n }] of Object.entries(x)) n && e.push(t);
    return e;
}
function V() {
    let {
            displayNudges: e,
            maxNudgeAge: t,
            maxNudgeCount: n,
        } = O.getConfig({ location: "handleNudgeVisibilityChange" }),
        i = !1 !== m.LJ.getSetting() && e;
    if (M === i) return !1;
    (M = i) && ((x = U(x, { maxNudgeAge: t, maxNudgeCount: n })), (k = new Set(F()))),
        !1 === m.LJ.getSetting() && ((x = {}), (k = new Set()));
}
function B() {
    let e = !1;
    for (let t of Object.keys(x))
        if (N.Ay.isChannelMuted(null, t)) {
            let i = x[t];
            if (i?.isActive) {
                let e = I.A.getChannel(t);
                Promise.resolve()
                    .then(n.bind(n, 567761))
                    .then((n) => {
                        let { default: r } = n;
                        v.default.track(L.HAw.REPLY_NUDGE_DISMISSED, {
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
            delete x[t], (e = !0);
        }
    return e;
}
class H extends l.Ay.PersistedStore {
    static displayName = "ReplyNudgeStore";
    static persistKey = "ReplyNudgeStore";
    initialize(e) {
        (x = e?.nudgedChannels ?? {}),
            this.waitFor(p.A, A.default, I.A, T.Ay, S.A, y.A, E.A, N.Ay, g.A),
            this.syncWith([g.A, p.A], V),
            this.syncWith([N.Ay], B);
    }
    getState() {
        return { nudgedChannels: x };
    }
    getNudgeTimestamp(e) {
        if (!M) return null;
        let t = x[e];
        return null == t ? null : t.isActive || k.has(e) ? (x[e].timestamp ?? null) : null;
    }
    getNudgeDMTimestamp(e) {
        let t = this.getNudgeTimestamp(e);
        return null == t ? null : t + D;
    }
    isChannelNudged(e) {
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!!M || !!t) && x[e]?.isActive === !0;
    }
    getChannelNudge(e) {
        let { includeInvisible: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return M || t ? (x[e] ?? null) : null;
    }
    isNudgesInitialized() {
        return P;
    }
}
let j = new H(c.h, {
    REPLY_NUDGE_SET: function (e) {
        let { channelId: t, timestamp: i, lastMessageId: r, affinity: s, authorId: a } = e;
        if (N.Ay.isChannelMuted(null, t)) return !1;
        let { maxNudgeAge: o, maxNudgeCount: l } = O.getConfig({ location: "handleReplyNudgeSet" });
        if (t in (x = U(x, { maxNudgeAge: o, maxNudgeCount: l }))) return !1;
        let u = F();
        if (u.length >= l) {
            let e = u.at(-1),
                i = 1 / 0;
            for (let t of u) {
                let n = x[t];
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
            let r = x[e];
            if (r?.isActive) {
                let t = I.A.getChannel(e);
                Promise.resolve()
                    .then(n.bind(n, 567761))
                    .then((n) => {
                        let { default: i } = n;
                        v.default.track(L.HAw.REPLY_NUDGE_DISMISSED, {
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
            delete x[e];
        }
        (x[t] = { timestamp: i, isActive: !0, lastMessageId: r, affinity: s, authorId: a }), k.add(t);
    },
    REPLY_NUDGE_CLEAR: function (e) {
        let { channelId: t } = e;
        return G(t, "manual");
    },
    REPLY_NUDGES_INITIALIZED: function () {
        if (P) return !1;
        P = !0;
        let { maxNudgeAge: e, maxNudgeCount: t } = O.getConfig({ location: "handleNudgesInitialized" });
        x = U(x, { maxNudgeAge: e, maxNudgeCount: t });
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
        (x = {}), (k = new Set()), (M = !1), (P = !1);
    },
});
var Y = n(95701),
    W = n(71393),
    K = n(287809),
    $ = n(935208);
let z = new u.J(
    (e) => {
        let { isRequest: t, isFavorite: n } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
    },
    (e) => {
        let { lastMessageId: t, nudgeTimestamp: n } = e;
        return -Math.max($.default.extractTimestamp(t), n ?? 0);
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
                          i = $.default.fromTimestamp(e);
                      return $.default.compare(t, i) > 0 ? t : i;
                  }
                  return t;
              })(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: N.Ay.isMessagesFavorite(e.id),
        isRequest: _.A.isMessageRequest(e.id) || h.A.isSpam(e.id),
        nudgeTimestamp: j.getNudgeDMTimestamp(e.id),
    };
}
function X() {
    z.clear(),
        Object.values(I.A.getMutablePrivateChannels()).forEach((e) => {
            z.set(e.id, q(e));
        });
}
function Z() {
    let e = I.A.getMutablePrivateChannels();
    for (let t in e) z.set(t, q(e[t]));
}
let Q =
    ((i = []),
    (r = []),
    (s = []),
    () => {
        let e = z.values("FAVORITE"),
            t = z.values("DEFAULT");
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
        this.waitFor(I.A, W.A, _.A, T.Ay, h.A, N.Ay, K.default, j), this.syncWith([N.Ay, _.A, j], X);
    }
    getPrivateChannelIds() {
        return Q();
    }
    getSortedChannels() {
        return [z.values("FAVORITE"), z.values("DEFAULT")];
    }
    serializeForOverlay() {
        let e = {};
        return (
            z.values().forEach((t) => {
                let { channelId: n, lastMessageId: i } = t;
                e[n] = i;
            }),
            e
        );
    }
}
let ee = new J(c.h, {
    CONNECTION_OPEN: X,
    CONNECTION_OPEN_SUPPLEMENTAL: X,
    OVERLAY_INITIALIZE: X,
    CACHE_LOADED: Z,
    CACHE_LOADED_LAZY: Z,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        t.forEach((e) => {
            ((0, Y.Gw)(e.type) || z.has(e.id)) && z.set(e.id, q(e));
        });
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (!(0, Y.Gw)(t.type) || t.id === d.E) return !1;
        z.set(t.id, q(t));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return z.delete(t.id);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e;
        if (!z.has(t)) return !1;
        let i = I.A.getChannel(t);
        return null != i && z.set(t, q(i, n.id));
    },
    REPLY_NUDGE_SET: function (e) {
        let { channelId: t } = e;
        if (!z.has(t)) return !1;
        let n = I.A.getChannel(t);
        return null != n && z.set(t, q(n));
    },
    GUILD_CREATE: function (e) {
        let t = e.guild.id;
        return z.delete(t);
    },
    LOGOUT: function () {
        z.clear();
    },
});
