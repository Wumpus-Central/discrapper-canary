"use strict";
n.d(t, { A: () => eC }), n(321073);
var i = n(681154),
    r = n(17928),
    s = n(228366),
    a = n(99753),
    o = n(20805),
    l = n(832384),
    u = n(736056),
    c = n(698441),
    d = n(320095),
    _ = n(495544),
    f = n(734057),
    h = n(776096),
    p = n(71393),
    E = n(232835),
    m = n(576705),
    g = n(222823),
    A = n(994500),
    I = n(543465),
    T = n(927813),
    S = n(449054),
    N = n(105971),
    y = n(596720);
let C = {};
class v extends r.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        C = e ?? {};
    }
    filterStaffContent() {
        return !0 === C.filterStaffContent;
    }
    getDoubleTapBehavior() {
        return C.doubleTapBehavior ?? y.Ai.DEFAULT;
    }
    getState() {
        return C;
    }
    getUserAgnosticState() {
        return C;
    }
}
let O = new v(s.h, {
    SET_ICYMI_FILTERS: function (e) {
        C = e.filters;
    },
});
var R = n(449e3),
    b = n(859524),
    D = n(652215),
    L = n(424994);
let w = +T.A.Millis.DAY,
    M = 3 * T.A.Millis.DAY,
    P = [],
    x = null,
    U = 0,
    k = [],
    G = [],
    F = {},
    V = {},
    B = {},
    H = {},
    j = {},
    Y = {},
    W = 0,
    K = !1,
    z = !1,
    $ = !1,
    q = null,
    Z = null,
    X = 0,
    Q = [],
    J = [],
    ee = 0,
    et = [],
    en = 0,
    ei = !0,
    er = !1,
    es = new Set(),
    ea = !1,
    eo = !1,
    el = 0,
    eu = 0;
function ec(e, t) {
    if (Date.now() - U > 6 * T.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function ed(e) {
    if (!O.filterStaffContent()) return !0;
    if ((0, b.xj)(e)) {
        if (e.data.guild_id === y.VL) return !0;
        let t = p.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(D.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function e_(e, t, n, i) {
    let r = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < r.length ? r.splice((t + 1) * i, 0, e) : r.push(e);
        }),
        r
    );
}
function ef() {
    if (
        ((Q = Q.filter((e) => e.type !== y.Mm.RECOMMENDED_GUILDS)),
        (J = J.filter((e) => e.type !== y.Mm.RECOMMENDED_GUILDS)),
        0 === et.length)
    )
        return;
    let e = "recommendedGuilds",
        t = p.A.getGuildsArray().filter((e) => e.features.has(D.GuildFeatures.COMMUNITY)).length >= 5,
        n = R.A.getReadTimestamp(e);
    if (t && null != n && Date.now() - en > w && Date.now() - n < M) return;
    let i = { id: e, type: y.Mm.RECOMMENDED_GUILDS, score: 50 };
    if (((B[i.id] = i), (V[i.id] = i), 0 === Q.length)) J = [i, ...J];
    else if ((!t && Q.length < 5) || (t && Q.length < 10)) Q = [...Q, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        Q.splice(e, 0, i);
    } else Q.splice(5, 0, i);
}
function eh() {
    let e = new Set();
    if (
        (k.forEach((t) => {
            e.add(t.id);
        }),
        null != Z)
    )
        if (e.has(Z.id)) {
            let e = Z.id,
                t = Z.type,
                n = k.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((Z = k[n]), (k = k.filter((t) => t.id !== e)), (k = [Z, ...k]));
        } else (k = [Z, ...k]), e.add(Z.id);
    k.forEach((e) => {
        (V[e.id] = e),
            e.type === y.Mm.CUSTOM_STATUS &&
                (A.A.isBlockedOrIgnored(e.data.user_id) ? (H[e.id] = !0) : (B[e.id] = (0, b.YM)(e)));
    });
}
function ep(e) {
    let t, n, r, s, u;
    if ((k.length > 0 && ((P = k), (k = []), (G = [])), W++, null != e)) (Q = e.newUnread), (J = e.newRead);
    else {
        let [e, t] = eE(P);
        (Q = e), (J = t);
    }
    (function () {
        let e = p.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != j[n] && j[n] < 0) continue;
            let e = c.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, c.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = f.A.getChannel(n.channel_id);
                        if (!m.A.can(D.xBc.VIEW_CHANNEL, e)) continue;
                    }
                    if (
                        ((0, c.W$)(n, 2 * T.A.Seconds.DAY) || (0, c.Fd)(n)) &&
                        (null == B[n.id] && (B[n.id] = { id: n.id, type: y.Mm.GUILD_EVENT, score: 10, event_id: n.id }),
                        t.push({
                            id: n.id,
                            type: y.Mm.GUILD_EVENT,
                            score: 10,
                            data: { guild_id: n.guild_id, event_id: n.id, channel_id: n.channel_id ?? void 0 },
                        }),
                        ++i >= 1)
                    )
                        break;
                }
        }
        t.sort((e, t) => {
            let n = h.A.getGuildAffinity(e.data.guild_id),
                i = h.A.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let n = [],
            i = [];
        t.forEach((e) => {
            (V[e.id] = e), null != R.A.getReadTimestamp(e.id) ? i.push(e) : n.push(e);
        }),
            (Q = e_(Q, n, y.Mm.GUILD_EVENT, 7)),
            (J = e_(J, i, y.Mm.GUILD_EVENT, 7));
    })(),
        (t = new Set()),
        (n = {}),
        (r = []),
        (s = []),
        (u = a.A.getFeed(L.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5),
        u.forEach((e) => {
            if (
                t.has(e.content.id) ||
                (e.content.content_type !== i.ContentInventoryEntryType.PLAYED_GAME &&
                    e.content.content_type !== i.ContentInventoryEntryType.CUSTOM_STATUS &&
                    e.content.content_type !== i.ContentInventoryEntryType.TOP_GAME) ||
                (0, l.I5)(e.content)
            )
                return;
            if ((0, o.zD)(e.content)) {
                if (
                    (null == n[e.content.author_id] && (n[e.content.author_id] = new Set()),
                    n[e.content.author_id].has(e.content.extra.application_id))
                )
                    return;
                n[e.content.author_id].add(e.content.extra.application_id);
            }
            null == B[e.content.id] &&
                (B[e.content.id] = { id: e.content.id, type: y.Mm.ACTIVITY, score: 15, activity: e.content });
            let a = {
                id: e.content.id,
                type: y.Mm.ACTIVITY,
                score: 15,
                data: { user_id: e.content.author_id, content_id: e.content.id },
            };
            t.add(e.content.id), (V[a.id] = a), null != R.A.getReadTimestamp(a.id) ? s.push(a) : r.push(a);
        }),
        (Q = e_(Q, r, y.Mm.ACTIVITY, 5)),
        (J = e_(J, s, y.Mm.ACTIVITY, 5)),
        ef(),
        null != F.load_id &&
            x !== F.load_id &&
            (N.k.trackFeedLoaded({
                newTrackingProps: F,
                hasNewContent: z,
                unreadFeedItems: Q,
                readFeedItems: J,
                homeSessionId: "gravity",
            }),
            (x = F.load_id ?? null),
            (F = {})),
        (ee = 0),
        Q.length + J.length === 0 && (eo = !0),
        (0, b.kx)([...Q, ...J], 0, y.w5),
        (er = !1);
}
function eE(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let r = null != R.A.getReadTimestamp(e.id);
            e.type === y.Mm.MESSAGE &&
                e.data.message_context?.external_content_application_id == null &&
                (r = r || !(0, b.$r)(e.data.channel_id, e.data.message_id)),
                r ? t.push(e) : e.type === y.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, b.tI)(e.id, t.id))]
    );
}
function em(e, t) {
    let n = [],
        i = new Set(P.map((e) => e.id));
    for (let r of e)
        !(r.type === y.Mm.RECOMMENDED_GUILDS || i.has(r.id)) &&
            null == R.A.getReadTimestamp(r.id) &&
            (r.type !== y.Mm.MESSAGE || ((0, b.$r)(r.data.channel_id, r.data.message_id) && r.data.channel_id !== t)) &&
            n.push(r);
    return n;
}
function eg(e, t) {
    return e.filter((e) => !(0, b.xj)(e) || e.data.channel_id !== t);
}
function eA(e, t) {
    (0, b.Wu)(t) === b.n$.MUTED && ((P = eg(P, e)), (Q = eg(Q, e)), (J = eg(J, e)), (k = eg(k, e)), (G = eg(G, e)));
}
function eI(e, t) {
    return e.filter((e) => !(0, b.xj)(e) || e.data.guild_id !== t);
}
function eT(e, t) {
    (0, b.Wu)(t) === b.n$.MUTED && ((P = eI(P, e)), (Q = eI(Q, e)), (J = eI(J, e)), (k = eI(k, e)), (G = eI(G, e)));
}
function eS(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: s } = e,
        a = B[n];
    if (null == a || a.type !== y.Mm.MESSAGE) return !1;
    let o = _.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t
        ? (a.message = a.message.addReaction(r, o, e.colors, s))
        : (a.message = a.message.removeReaction(r, o, s));
}
function eN(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    Q.forEach((e, r) => {
        (r > ee || !$) && e.type === y.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let r = z,
        [s, a] = eE(k);
    if (((G = em(s, t)), (z = $ ? r && G.length >= y.$P : r && ec(i, k)), 0 === n.length && r === z)) return !1;
    0 !== n.length && ((Q = i), (J = [...J, ...n]));
}
class ey extends r.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        this.waitFor(_.default, f.A, a.A, u.A, h.A, c.Ay, p.A, O, R.A, E.A, m.A, g.Ay, A.A, I.Ay),
            null != e &&
                ((P = e.dehydratedItems ?? []).forEach((e) => {
                    V[e.id] = e;
                }),
                (j = e.customGuildScores ?? {}),
                (Y = e.customChannelScoresByGuild ?? {}),
                (X = e.numOpens ?? 0),
                (U = e.lastOpened ?? 0),
                (en = e.lastJoinedRecommendedGuild ?? 0),
                (eu = e.lastTakenICYMISurvey ?? 0));
    }
    getVersion() {
        return W;
    }
    getDehydratedItems() {
        return P;
    }
    getNewDehydratedItems() {
        return k;
    }
    getDehydratedItem(e) {
        return V[e] ?? null;
    }
    getHydratedItem(e) {
        return B[e] ?? null;
    }
    getMessage(e) {
        let t = B[e];
        return null == t || t.type !== y.Mm.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return B;
    }
    getUnreadDisplayItems() {
        return Q;
    }
    getNewUnreadDehydratedItems() {
        return G;
    }
    getReadDisplayItems() {
        return J;
    }
    getNextIndexToHydrate() {
        return ee;
    }
    getMissingItems() {
        return H;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === b.n$.MUTED || this.getCustomChannelScore(e, t) === b.n$.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == Y[e] || null == Y[e][t] ? b.n$.UNKNOWN : (0, b.Wu)(Y[e][t]);
    }
    getCustomGuildScore(e) {
        return j[e] ?? 0;
    }
    getCustomGuildScores() {
        return j;
    }
    hasNewContent() {
        return z;
    }
    getCurrentStatusAttachments(e) {
        return null == q || q[0] !== e ? [] : q[1];
    }
    getLoadId() {
        return x;
    }
    hasOpenedEnoughTimes() {
        return 5 === X;
    }
    hasOpened() {
        return $;
    }
    getDiscoverableGuilds() {
        return et;
    }
    videosMuted() {
        return ei;
    }
    isRefreshing() {
        return er;
    }
    isHydrating() {
        return es.size > 0;
    }
    notificationItem() {
        return Z;
    }
    getIsTabFocused() {
        return ea;
    }
    isFirstPageHydrated() {
        return eo;
    }
    lastScrollEvent() {
        return el;
    }
    lastTakenICYMISurvey() {
        return eu;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...Q, ...J].findIndex((e) => e.type === y.Mm.RECOMMENDED_GUILDS)
            : [...Q, ...J].filter((e) => null != B[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: P,
            numOpens: X,
            customGuildScores: j,
            customChannelScoresByGuild: Y,
            lastOpened: U,
            lastJoinedRecommendedGuild: en,
            lastTakenICYMISurvey: eu,
        };
    }
}
let eC = new ey(s.h, {
    LOGOUT: function () {
        (P = []),
            (k = []),
            (G = []),
            (V = {}),
            (F = {}),
            (B = {}),
            (H = {}),
            (x = null),
            (j = {}),
            (Y = {}),
            (W = 0),
            (K = !1),
            (z = !1),
            ($ = !1),
            (Q = []),
            (J = []),
            (ee = 0),
            (U = 0),
            (en = 0),
            (ei = !0),
            (er = !1),
            (es = new Set()),
            (Z = null),
            (ea = !1),
            (eo = !1),
            (q = null),
            (el = 0);
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
        let { messageItem: t, customStatusItem: n } = e;
        if (null != n) return (Z = n), null != x && ((k = k.length > 0 ? k : [...P]), eh(), ep()), !0;
        if (null != t) {
            let e = {
                id: t.message.id,
                type: y.Mm.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: D.rbe.GUILD_TEXT,
                },
            };
            if (
                ((V[t.message.id] = e),
                (B[t.message.id] = { ...e, message: (0, d.rh)(t.message) }),
                null == x && null == F)
            ) {
                let [t, n] = eE((P = [e, ...P]));
                (Q = t), (J = n);
            } else (k = [e, ...k]), ep();
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let t,
            { items: n, loadId: i, startTime: r, isInitialLoad: s, isReloading: a } = e;
        (t = new Set(y.H8)),
            (k = n
                .filter((e) => t.has(e.type))
                .filter(ed)
                .map((e) => {
                    if (e.type === y.Mm.MESSAGE && null != e.data.message_context) {
                        let t = {};
                        null != e.data.message_context.reply_message_id &&
                            0 !== parseInt(e.data.message_context.reply_message_id) &&
                            (t.reply_message_id = e.data.message_context.reply_message_id),
                            null != e.data.message_context.before_message_id &&
                                0 !== parseInt(e.data.message_context.before_message_id) &&
                                (t.before_message_id = e.data.message_context.before_message_id),
                            null != e.data.message_context.after_message_id &&
                                0 !== parseInt(e.data.message_context.after_message_id) &&
                                (t.after_message_id = e.data.message_context.after_message_id),
                            null != e.data.message_context.external_content_application_id &&
                                0 !== parseInt(e.data.message_context.external_content_application_id) &&
                                (t.external_content_application_id =
                                    e.data.message_context.external_content_application_id),
                            null != e.data.message_context.reference_message_id &&
                                0 !== parseInt(e.data.message_context.reference_message_id) &&
                                (t.reference_message_id = e.data.message_context.reference_message_id),
                            (e.data.message_context = t);
                    }
                    return e;
                })),
            eh(),
            (F = { load_id: i, load_time_millis: Date.now() - r, feed_item_ids: k.map((e) => e.id) });
        let [o, l] = eE(k);
        if (((G = em(o)), !$ || 0 === W || s))
            (W = 0), !ea && ec(o, k) ? ((z = !0), (K = !0)) : (z = !1), ep({ newUnread: o, newRead: l });
        else {
            W > 0 && (Z = null);
            let e = G.length > y.$P;
            a || (z = e), e && ((0, b.kx)([...o, ...l], 0, y.w5), o.length + l.length === 0 && (eo = !0));
        }
        N.k.trackFeedLoaded({
            newTrackingProps: F,
            hasNewContent: z,
            unreadFeedItems: o,
            readFeedItems: l,
            homeSessionId: ea ? "foreground_load" : "background_load",
        });
    },
    LOAD_ICYMI_HYDRATED: function (e) {
        let {
            messageItems: t,
            activityItems: n,
            requestMessageItems: i,
            requestActivityItems: r,
            startingIndex: s,
            endingIndex: a,
        } = e;
        (eo = !0), (B = { ...B });
        let o = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
            l = n.reduce((e, t) => ((e[t.id] = t), e), {});
        i.forEach((e) => {
            let t = o[e.message_id];
            if (null == t) {
                H[e.message_id] = !0;
                return;
            }
            let n = V[e.message_id];
            null == n &&
                (n = {
                    id: e.message_id,
                    type: y.Mm.MESSAGE,
                    score: -1,
                    data: {
                        guild_id: t.guild_id,
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        channel_type: D.rbe.GUILD_TEXT,
                        has_mention: !1,
                    },
                });
            let i = E.A.getMessage(t.channel_id, t.message.id);
            if (null != i) {
                let e = (0, b.Rh)(t, n);
                B[t.message.id] = { ...e, message: i };
            } else B[t.message.id] = (0, b.Rh)(t, n);
        }),
            r.forEach((e) => {
                let t = l[e.content_id];
                if (null == t) {
                    H[e.content_id] = !0;
                    return;
                }
                let n = V[e.content_id];
                if (null == n) {
                    H[e.content_id] = !0;
                    return;
                }
                B[t.id] = { ...n, activity: t };
            }),
            s === ee && (ee = a),
            es.delete((0, b.Vq)(s, a));
    },
    LOAD_ICYMI_CUSTOM_SCORES: function (e) {
        let { scores: t } = e;
        for (let e of t)
            for (let t of ((j[e.guild_id] = e.guild_score),
            eT(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                null == Y[e.guild_id] && (Y[e.guild_id] = {}),
                    (Y[e.guild_id][t] = e.custom_channel_scores[t]),
                    eA(t, e.custom_channel_scores[t]);
        (j = { ...j }), (Y = { ...Y });
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        (et = t.map((e) => (0, S.jE)(e.guild))), ef();
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: i } = e;
        null != i && ((j[n] = i), eT(n, i), (j = { ...j })),
            t?.forEach((e) => {
                let { channelId: t, score: i } = e;
                null == Y[n] && (Y[n] = {}), (Y[n][t] = i), eA(t, i), (Y = { ...Y });
            });
    },
    RELOAD_ICYMI: function () {
        if (0 === k.length) return !1;
        ep(), (z = !1);
    },
    ICYMI_TAB_OPENED: function () {
        ($ = !0), (U = Date.now()), K && ((K = !1), (z = !1)), X < 5 && X++;
    },
    ICYMI_FEEDBACK_GIVEN: function () {
        X = 6;
    },
    MESSAGE_REACTION_ADD: eS,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            i = B[t];
        if (null == i || i.type !== y.Mm.MESSAGE) return !1;
        let r = _.default.getId();
        i.message = i.message.addReactionBatch(n, r);
    },
    MESSAGE_REACTION_REMOVE: eS,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e,
            n = B[t];
        if (null == n || n.type !== y.Mm.MESSAGE) return !1;
        n.message = n.message.set("reactions", []);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e,
            i = B[t];
        if (null == i || i.type !== y.Mm.MESSAGE) return !1;
        i.message = i.message.removeReactionsForEmoji(n);
    },
    CHANNEL_ACK: eN,
    MESSAGE_ACK: eN,
    ICYMI_JOINED_RECOMMENDED_GUILD: function () {
        en = Date.now();
    },
    ICYMI_SET_VIDEOS_MUTED: function (e) {
        let { muted: t } = e;
        ei = t;
    },
    ICYMI_SET_REFRESHING: function (e) {
        let { refreshing: t } = e;
        er = t;
    },
    LOAD_ICYMI_HYDRATED_ATTEMPT: function (e) {
        let { hydrationId: t } = e;
        es.add(t);
    },
    LOAD_ICYMI_HYDRATED_FAILED: function (e) {
        let { hydrationId: t } = e;
        es.delete(t);
    },
    ICYMI_SET_FOCUSED_TAB: function (e) {
        let { focused: t } = e;
        ea = t;
    },
    LOAD_ICYMI_CURRENT_STATUS_MEDIA: function (e) {
        let { attachments: t, createdAtMs: n } = e;
        if (null == t || 0 === t.length) {
            q = null;
            return;
        }
        q = [n, [...t]];
    },
    ICYMI_SCROLL_EVENT: function (e) {
        let { timestamp: t } = e;
        el = t;
    },
    ICYMI_TAKE_SURVEY: function (e) {
        let { takenAt: t } = e;
        eu = t;
    },
});
