"use strict";
n.d(t, { A: () => eN }), n(321073);
var i = n(681154),
    r = n(17928),
    s = n(228366),
    a = n(99753),
    o = n(20805),
    l = n(751765),
    u = n(736056),
    c = n(698441),
    d = n(320095),
    _ = n(495544),
    h = n(734057),
    f = n(776096),
    p = n(71393),
    E = n(232835),
    m = n(576705),
    g = n(222823),
    A = n(994500),
    I = n(543465),
    T = n(927813),
    S = n(385648),
    y = n(105971),
    C = n(596720);
let N = {};
class v extends r.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        N = e ?? {};
    }
    filterStaffContent() {
        return !0 === N.filterStaffContent;
    }
    getDoubleTapBehavior() {
        return N.doubleTapBehavior ?? C.Ai.DEFAULT;
    }
    getState() {
        return N;
    }
    getUserAgnosticState() {
        return N;
    }
}
let R = new v(s.h, {
    SET_ICYMI_FILTERS: function (e) {
        N = e.filters;
    },
});
var O = n(449e3),
    b = n(859524),
    D = n(652215),
    L = n(424994);
let w = +T.A.Millis.DAY,
    M = 3 * T.A.Millis.DAY,
    P = [],
    x = null,
    k = 0,
    U = [],
    G = [],
    F = {},
    V = {},
    B = {},
    j = {},
    H = {},
    Y = {},
    W = 0,
    K = !1,
    $ = !1,
    z = !1,
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
    if (Date.now() - k > 6 * T.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function ed(e) {
    if (!R.filterStaffContent()) return !0;
    if ((0, b.xj)(e)) {
        if (e.data.guild_id === C.VL) return !0;
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
function eh() {
    if (
        ((Q = Q.filter((e) => e.type !== C.Mm.RECOMMENDED_GUILDS)),
        (J = J.filter((e) => e.type !== C.Mm.RECOMMENDED_GUILDS)),
        0 === et.length)
    )
        return;
    let e = "recommendedGuilds",
        t = p.A.getGuildsArray().filter((e) => e.features.has(D.GuildFeatures.COMMUNITY)).length >= 5,
        n = O.A.getReadTimestamp(e);
    if (t && null != n && Date.now() - en > w && Date.now() - n < M) return;
    let i = { id: e, type: C.Mm.RECOMMENDED_GUILDS, score: 50 };
    if (((B[i.id] = i), (V[i.id] = i), 0 === Q.length)) J = [i, ...J];
    else if ((!t && Q.length < 5) || (t && Q.length < 10)) Q = [...Q, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        Q.splice(e, 0, i);
    } else Q.splice(5, 0, i);
}
function ef() {
    let e = new Set();
    if (
        (U.forEach((t) => {
            e.add(t.id);
        }),
        null != Z)
    )
        if (e.has(Z.id)) {
            let e = Z.id,
                t = Z.type,
                n = U.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((Z = U[n]), (U = U.filter((t) => t.id !== e)), (U = [Z, ...U]));
        } else (U = [Z, ...U]), e.add(Z.id);
    U.forEach((e) => {
        (V[e.id] = e),
            e.type === C.Mm.CUSTOM_STATUS &&
                (A.A.isBlockedOrIgnored(e.data.user_id) ? (j[e.id] = !0) : (B[e.id] = (0, b.YM)(e)));
    });
}
function ep(e) {
    let t, n, r, s, u;
    if ((U.length > 0 && ((P = U), (U = []), (G = [])), W++, null != e)) (Q = e.newUnread), (J = e.newRead);
    else {
        let [e, t] = eE(P);
        (Q = e), (J = t);
    }
    (function () {
        let e = p.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != H[n] && H[n] < 0) continue;
            let e = c.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, c.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = h.A.getChannel(n.channel_id);
                        if (!m.A.can(D.xBc.VIEW_CHANNEL, e)) continue;
                    }
                    if (
                        ((0, c.W$)(n, 2 * T.A.Seconds.DAY) || (0, c.Fd)(n)) &&
                        (null == B[n.id] && (B[n.id] = { id: n.id, type: C.Mm.GUILD_EVENT, score: 10, event_id: n.id }),
                        t.push({
                            id: n.id,
                            type: C.Mm.GUILD_EVENT,
                            score: 10,
                            data: { guild_id: n.guild_id, event_id: n.id, channel_id: n.channel_id ?? void 0 },
                        }),
                        ++i >= 1)
                    )
                        break;
                }
        }
        t.sort((e, t) => {
            let n = f.A.getGuildAffinity(e.data.guild_id),
                i = f.A.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let n = [],
            i = [];
        t.forEach((e) => {
            (V[e.id] = e), null != O.A.getReadTimestamp(e.id) ? i.push(e) : n.push(e);
        }),
            (Q = e_(Q, n, C.Mm.GUILD_EVENT, 7)),
            (J = e_(J, i, C.Mm.GUILD_EVENT, 7));
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
                (B[e.content.id] = { id: e.content.id, type: C.Mm.ACTIVITY, score: 15, activity: e.content });
            let a = {
                id: e.content.id,
                type: C.Mm.ACTIVITY,
                score: 15,
                data: { user_id: e.content.author_id, content_id: e.content.id },
            };
            t.add(e.content.id), (V[a.id] = a), null != O.A.getReadTimestamp(a.id) ? s.push(a) : r.push(a);
        }),
        (Q = e_(Q, r, C.Mm.ACTIVITY, 5)),
        (J = e_(J, s, C.Mm.ACTIVITY, 5)),
        eh(),
        null != F.load_id &&
            x !== F.load_id &&
            (y.k.trackFeedLoaded({
                newTrackingProps: F,
                hasNewContent: $,
                unreadFeedItems: Q,
                readFeedItems: J,
                homeSessionId: "gravity",
            }),
            (x = F.load_id ?? null),
            (F = {})),
        (ee = 0),
        Q.length + J.length === 0 && (eo = !0),
        (0, b.kx)([...Q, ...J], 0, C.w5),
        (er = !1);
}
function eE(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let r = null != O.A.getReadTimestamp(e.id);
            e.type === C.Mm.MESSAGE &&
                e.data.message_context?.external_content_application_id == null &&
                (r = r || !(0, b.$r)(e.data.channel_id, e.data.message_id)),
                r ? t.push(e) : e.type === C.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, b.tI)(e.id, t.id))]
    );
}
function em(e, t) {
    let n = [],
        i = new Set(P.map((e) => e.id));
    for (let r of e)
        !(r.type === C.Mm.RECOMMENDED_GUILDS || i.has(r.id)) &&
            null == O.A.getReadTimestamp(r.id) &&
            (r.type !== C.Mm.MESSAGE || ((0, b.$r)(r.data.channel_id, r.data.message_id) && r.data.channel_id !== t)) &&
            n.push(r);
    return n;
}
function eg(e, t) {
    return e.filter((e) => !(0, b.xj)(e) || e.data.channel_id !== t);
}
function eA(e, t) {
    (0, b.Wu)(t) === b.n$.MUTED && ((P = eg(P, e)), (Q = eg(Q, e)), (J = eg(J, e)), (U = eg(U, e)), (G = eg(G, e)));
}
function eI(e, t) {
    return e.filter((e) => !(0, b.xj)(e) || e.data.guild_id !== t);
}
function eT(e, t) {
    (0, b.Wu)(t) === b.n$.MUTED && ((P = eI(P, e)), (Q = eI(Q, e)), (J = eI(J, e)), (U = eI(U, e)), (G = eI(G, e)));
}
function eS(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: s } = e,
        a = B[n];
    if (null == a || a.type !== C.Mm.MESSAGE) return !1;
    let o = _.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t
        ? (a.message = a.message.addReaction(r, o, e.colors, s))
        : (a.message = a.message.removeReaction(r, o, s));
}
function ey(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    Q.forEach((e, r) => {
        (r > ee || !z) && e.type === C.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let r = $,
        [s, a] = eE(U);
    if (((G = em(s, t)), ($ = z ? r && G.length >= C.$P : r && ec(i, U)), 0 === n.length && r === $)) return !1;
    0 !== n.length && ((Q = i), (J = [...J, ...n]));
}
class eC extends r.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        this.waitFor(_.default, h.A, a.A, u.A, f.A, c.Ay, p.A, R, O.A, E.A, m.A, g.Ay, A.A, I.Ay),
            null != e &&
                ((P = e.dehydratedItems ?? []).forEach((e) => {
                    V[e.id] = e;
                }),
                (H = e.customGuildScores ?? {}),
                (Y = e.customChannelScoresByGuild ?? {}),
                (X = e.numOpens ?? 0),
                (k = e.lastOpened ?? 0),
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
        return U;
    }
    getDehydratedItem(e) {
        return V[e] ?? null;
    }
    getHydratedItem(e) {
        return B[e] ?? null;
    }
    getMessage(e) {
        let t = B[e];
        return null == t || t.type !== C.Mm.MESSAGE ? null : t.message;
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
        return j;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === b.n$.MUTED || this.getCustomChannelScore(e, t) === b.n$.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == Y[e] || null == Y[e][t] ? b.n$.UNKNOWN : (0, b.Wu)(Y[e][t]);
    }
    getCustomGuildScore(e) {
        return H[e] ?? 0;
    }
    getCustomGuildScores() {
        return H;
    }
    hasNewContent() {
        return $;
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
        return z;
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
            ? [...Q, ...J].findIndex((e) => e.type === C.Mm.RECOMMENDED_GUILDS)
            : [...Q, ...J].filter((e) => null != B[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: P,
            numOpens: X,
            customGuildScores: H,
            customChannelScoresByGuild: Y,
            lastOpened: k,
            lastJoinedRecommendedGuild: en,
            lastTakenICYMISurvey: eu,
        };
    }
}
let eN = new eC(s.h, {
    LOGOUT: function () {
        (P = []),
            (U = []),
            (G = []),
            (V = {}),
            (F = {}),
            (B = {}),
            (j = {}),
            (x = null),
            (H = {}),
            (Y = {}),
            (W = 0),
            (K = !1),
            ($ = !1),
            (z = !1),
            (Q = []),
            (J = []),
            (ee = 0),
            (k = 0),
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
        if (null != n) return (Z = n), null != x && ((U = U.length > 0 ? U : [...P]), ef(), ep()), !0;
        if (null != t) {
            let e = {
                id: t.message.id,
                type: C.Mm.MESSAGE,
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
            } else (U = [e, ...U]), ep();
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let t,
            { items: n, loadId: i, startTime: r, isInitialLoad: s, isReloading: a } = e;
        (t = new Set(C.H8)),
            (U = n
                .filter((e) => t.has(e.type))
                .filter(ed)
                .map((e) => {
                    if (e.type === C.Mm.MESSAGE && null != e.data.message_context) {
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
            ef(),
            (F = { load_id: i, load_time_millis: Date.now() - r, feed_item_ids: U.map((e) => e.id) });
        let [o, l] = eE(U);
        if (((G = em(o)), !z || 0 === W || s))
            (W = 0), !ea && ec(o, U) ? (($ = !0), (K = !0)) : ($ = !1), ep({ newUnread: o, newRead: l });
        else {
            W > 0 && (Z = null);
            let e = G.length > C.$P;
            a || ($ = e), e && ((0, b.kx)([...o, ...l], 0, C.w5), o.length + l.length === 0 && (eo = !0));
        }
        y.k.trackFeedLoaded({
            newTrackingProps: F,
            hasNewContent: $,
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
                j[e.message_id] = !0;
                return;
            }
            let n = V[e.message_id];
            null == n &&
                (n = {
                    id: e.message_id,
                    type: C.Mm.MESSAGE,
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
                    j[e.content_id] = !0;
                    return;
                }
                let n = V[e.content_id];
                if (null == n) {
                    j[e.content_id] = !0;
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
            for (let t of ((H[e.guild_id] = e.guild_score),
            eT(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                null == Y[e.guild_id] && (Y[e.guild_id] = {}),
                    (Y[e.guild_id][t] = e.custom_channel_scores[t]),
                    eA(t, e.custom_channel_scores[t]);
        (H = { ...H }), (Y = { ...Y });
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        (et = t.map((e) => (0, S.jE)(e.guild))), eh();
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: i } = e;
        null != i && ((H[n] = i), eT(n, i), (H = { ...H })),
            t?.forEach((e) => {
                let { channelId: t, score: i } = e;
                null == Y[n] && (Y[n] = {}), (Y[n][t] = i), eA(t, i), (Y = { ...Y });
            });
    },
    RELOAD_ICYMI: function () {
        if (0 === U.length) return !1;
        ep(), ($ = !1);
    },
    ICYMI_TAB_OPENED: function () {
        (z = !0), (k = Date.now()), K && ((K = !1), ($ = !1)), X < 5 && X++;
    },
    ICYMI_FEEDBACK_GIVEN: function () {
        X = 6;
    },
    MESSAGE_REACTION_ADD: eS,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            i = B[t];
        if (null == i || i.type !== C.Mm.MESSAGE) return !1;
        let r = _.default.getId();
        i.message = i.message.addReactionBatch(n, r);
    },
    MESSAGE_REACTION_REMOVE: eS,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e,
            n = B[t];
        if (null == n || n.type !== C.Mm.MESSAGE) return !1;
        n.message = n.message.set("reactions", []);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e,
            i = B[t];
        if (null == i || i.type !== C.Mm.MESSAGE) return !1;
        i.message = i.message.removeReactionsForEmoji(n);
    },
    CHANNEL_ACK: ey,
    MESSAGE_ACK: ey,
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
