"use strict";
n.d(t, { A: () => eR }), n(321073);
var i = n(681154),
    r = n(17928),
    a = n(228366),
    s = n(99753),
    l = n(20805),
    o = n(583846),
    d = n(736056),
    c = n(698441),
    u = n(320095),
    _ = n(280450),
    E = n(734057),
    A = n(776096),
    h = n(71393),
    I = n(232835),
    f = n(576705),
    p = n(568548),
    T = n(994500),
    m = n(543465),
    g = n(927813),
    S = n(449054),
    N = n(105971),
    C = n(596720);
let R = {};
class O extends r.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        R = e ?? {};
    }
    filterStaffContent() {
        return !0 === R.filterStaffContent;
    }
    getDoubleTapBehavior() {
        return R.doubleTapBehavior ?? C.Ai.DEFAULT;
    }
    getState() {
        return R;
    }
    getUserAgnosticState() {
        return R;
    }
}
let L = new O(a.h, {
    SET_ICYMI_FILTERS: function (e) {
        R = e.filters;
    },
});
var y = n(449e3),
    D = n(859524),
    v = n(652215),
    b = n(424994);
let M = +g.A.Millis.DAY,
    P = 3 * g.A.Millis.DAY,
    U = [],
    w = null,
    G = 0,
    x = [],
    k = [],
    F = {},
    V = {},
    B = {},
    H = {},
    j = {},
    W = {},
    Y = 0,
    K = !1,
    $ = !1,
    z = !1,
    Z = null,
    q = null,
    X = 0,
    Q = [],
    J = [],
    ee = 0,
    et = [],
    en = 0,
    ei = !0,
    er = !1,
    ea = new Set(),
    es = !1,
    el = !1,
    eo = 0,
    ed = 0;
function ec(e, t) {
    if (Date.now() - G > 6 * g.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function eu(e) {
    if (!L.filterStaffContent()) return !0;
    if ((0, D.xj)(e)) {
        if (e.data.guild_id === C.VL) return !0;
        let t = h.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(v.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
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
function eE() {
    if (
        ((Q = Q.filter((e) => e.type !== C.Mm.RECOMMENDED_GUILDS)),
        (J = J.filter((e) => e.type !== C.Mm.RECOMMENDED_GUILDS)),
        0 === et.length)
    )
        return;
    let e = "recommendedGuilds",
        t = h.A.getGuildsArray().filter((e) => e.features.has(v.GuildFeatures.COMMUNITY)).length >= 5,
        n = y.A.getReadTimestamp(e);
    if (t && null != n && Date.now() - en > M && Date.now() - n < P) return;
    let i = { id: e, type: C.Mm.RECOMMENDED_GUILDS, score: 50 };
    if (((B[i.id] = i), (V[i.id] = i), 0 === Q.length)) J = [i, ...J];
    else if ((!t && Q.length < 5) || (t && Q.length < 10)) Q = [...Q, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        Q.splice(e, 0, i);
    } else Q.splice(5, 0, i);
}
function eA() {
    let e = new Set();
    if (
        (x.forEach((t) => {
            e.add(t.id);
        }),
        null != q)
    )
        if (e.has(q.id)) {
            let e = q.id,
                t = q.type,
                n = x.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((q = x[n]), (x = x.filter((t) => t.id !== e)), (x = [q, ...x]));
        } else (x = [q, ...x]), e.add(q.id);
    x.forEach((e) => {
        (V[e.id] = e),
            e.type === C.Mm.CUSTOM_STATUS &&
                (T.A.isBlockedOrIgnored(e.data.user_id) ? (H[e.id] = !0) : (B[e.id] = (0, D.YM)(e)));
    });
}
function eh(e) {
    let t, n, r, a, d;
    if ((x.length > 0 && ((U = x), (x = []), (k = [])), Y++, null != e)) (Q = e.newUnread), (J = e.newRead);
    else {
        let [e, t] = eI(U);
        (Q = e), (J = t);
    }
    (function () {
        let e = h.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != j[n] && j[n] < 0) continue;
            let e = c.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, c.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = E.A.getChannel(n.channel_id);
                        if (!f.A.can(v.xBc.VIEW_CHANNEL, e)) continue;
                    }
                    if (
                        ((0, c.W$)(n, 2 * g.A.Seconds.DAY) || (0, c.Fd)(n)) &&
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
            let n = A.A.getGuildAffinity(e.data.guild_id),
                i = A.A.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let n = [],
            i = [];
        t.forEach((e) => {
            (V[e.id] = e), null != y.A.getReadTimestamp(e.id) ? i.push(e) : n.push(e);
        }),
            (Q = e_(Q, n, C.Mm.GUILD_EVENT, 7)),
            (J = e_(J, i, C.Mm.GUILD_EVENT, 7));
    })(),
        (t = new Set()),
        (n = {}),
        (r = []),
        (a = []),
        (d = s.A.getFeed(b.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5),
        d.forEach((e) => {
            if (
                t.has(e.content.id) ||
                (e.content.content_type !== i.ContentInventoryEntryType.PLAYED_GAME &&
                    e.content.content_type !== i.ContentInventoryEntryType.CUSTOM_STATUS &&
                    e.content.content_type !== i.ContentInventoryEntryType.TOP_GAME) ||
                (0, o.I5)(e.content)
            )
                return;
            if ((0, l.zD)(e.content)) {
                if (
                    (null == n[e.content.author_id] && (n[e.content.author_id] = new Set()),
                    n[e.content.author_id].has(e.content.extra.application_id))
                )
                    return;
                n[e.content.author_id].add(e.content.extra.application_id);
            }
            null == B[e.content.id] &&
                (B[e.content.id] = { id: e.content.id, type: C.Mm.ACTIVITY, score: 15, activity: e.content });
            let s = {
                id: e.content.id,
                type: C.Mm.ACTIVITY,
                score: 15,
                data: { user_id: e.content.author_id, content_id: e.content.id },
            };
            t.add(e.content.id), (V[s.id] = s), null != y.A.getReadTimestamp(s.id) ? a.push(s) : r.push(s);
        }),
        (Q = e_(Q, r, C.Mm.ACTIVITY, 5)),
        (J = e_(J, a, C.Mm.ACTIVITY, 5)),
        eE(),
        null != F.load_id &&
            w !== F.load_id &&
            (N.k.trackFeedLoaded({
                newTrackingProps: F,
                hasNewContent: $,
                unreadFeedItems: Q,
                readFeedItems: J,
                homeSessionId: "gravity",
            }),
            (w = F.load_id ?? null),
            (F = {})),
        (ee = 0),
        Q.length + J.length === 0 && (el = !0),
        (0, D.kx)([...Q, ...J], 0, C.w5),
        (er = !1);
}
function eI(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let r = null != y.A.getReadTimestamp(e.id);
            e.type === C.Mm.MESSAGE &&
                e.data.message_context?.external_content_application_id == null &&
                (r = r || !(0, D.$r)(e.data.channel_id, e.data.message_id)),
                r ? t.push(e) : e.type === C.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, D.tI)(e.id, t.id))]
    );
}
function ef(e, t) {
    let n = [],
        i = new Set(U.map((e) => e.id));
    for (let r of e)
        !(r.type === C.Mm.RECOMMENDED_GUILDS || i.has(r.id)) &&
            null == y.A.getReadTimestamp(r.id) &&
            (r.type !== C.Mm.MESSAGE || ((0, D.$r)(r.data.channel_id, r.data.message_id) && r.data.channel_id !== t)) &&
            n.push(r);
    return n;
}
function ep(e, t) {
    return e.filter((e) => !(0, D.xj)(e) || e.data.channel_id !== t);
}
function eT(e, t) {
    (0, D.Wu)(t) === D.n$.MUTED && ((U = ep(U, e)), (Q = ep(Q, e)), (J = ep(J, e)), (x = ep(x, e)), (k = ep(k, e)));
}
function em(e, t) {
    return e.filter((e) => !(0, D.xj)(e) || e.data.guild_id !== t);
}
function eg(e, t) {
    (0, D.Wu)(t) === D.n$.MUTED && ((U = em(U, e)), (Q = em(Q, e)), (J = em(J, e)), (x = em(x, e)), (k = em(k, e)));
}
function eS(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: a } = e,
        s = B[n];
    if (null == s || s.type !== C.Mm.MESSAGE) return !1;
    let l = _.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t
        ? (s.message = s.message.addReaction(r, l, { colors: e.colors, reactionType: a }))
        : (s.message = s.message.removeReaction(r, l, a));
}
function eN(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    Q.forEach((e, r) => {
        (r > ee || !z) && e.type === C.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let r = $,
        [a, s] = eI(x);
    if (((k = ef(a, t)), ($ = z ? r && k.length >= C.$P : r && ec(i, x)), 0 === n.length && r === $)) return !1;
    0 !== n.length && ((Q = i), (J = [...J, ...n]));
}
class eC extends r.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        this.waitFor(_.default, E.A, s.A, d.A, A.A, c.Ay, h.A, L, y.A, I.A, f.A, p.Ay, T.A, m.Ay),
            null != e &&
                ((U = e.dehydratedItems ?? []).forEach((e) => {
                    V[e.id] = e;
                }),
                (j = e.customGuildScores ?? {}),
                (W = e.customChannelScoresByGuild ?? {}),
                (X = e.numOpens ?? 0),
                (G = e.lastOpened ?? 0),
                (en = e.lastJoinedRecommendedGuild ?? 0),
                (ed = e.lastTakenICYMISurvey ?? 0));
    }
    getVersion() {
        return Y;
    }
    getDehydratedItems() {
        return U;
    }
    getNewDehydratedItems() {
        return x;
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
        return k;
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
        return this.getCustomGuildScore(e) === D.n$.MUTED || this.getCustomChannelScore(e, t) === D.n$.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == W[e] || null == W[e][t] ? D.n$.UNKNOWN : (0, D.Wu)(W[e][t]);
    }
    getCustomGuildScore(e) {
        return j[e] ?? 0;
    }
    getCustomGuildScores() {
        return j;
    }
    hasNewContent() {
        return $;
    }
    getCurrentStatusAttachments(e) {
        return null == Z || Z[0] !== e ? [] : Z[1];
    }
    getLoadId() {
        return w;
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
        return ea.size > 0;
    }
    notificationItem() {
        return q;
    }
    getIsTabFocused() {
        return es;
    }
    isFirstPageHydrated() {
        return el;
    }
    lastScrollEvent() {
        return eo;
    }
    lastTakenICYMISurvey() {
        return ed;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...Q, ...J].findIndex((e) => e.type === C.Mm.RECOMMENDED_GUILDS)
            : [...Q, ...J].filter((e) => null != B[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: U,
            numOpens: X,
            customGuildScores: j,
            customChannelScoresByGuild: W,
            lastOpened: G,
            lastJoinedRecommendedGuild: en,
            lastTakenICYMISurvey: ed,
        };
    }
}
let eR = new eC(a.h, {
    LOGOUT: function () {
        (U = []),
            (x = []),
            (k = []),
            (V = {}),
            (F = {}),
            (B = {}),
            (H = {}),
            (w = null),
            (j = {}),
            (W = {}),
            (Y = 0),
            (K = !1),
            ($ = !1),
            (z = !1),
            (Q = []),
            (J = []),
            (ee = 0),
            (G = 0),
            (en = 0),
            (ei = !0),
            (er = !1),
            (ea = new Set()),
            (q = null),
            (es = !1),
            (el = !1),
            (Z = null),
            (eo = 0);
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
        let { messageItem: t, customStatusItem: n } = e;
        if (null != n) return (q = n), null != w && ((x = x.length > 0 ? x : [...U]), eA(), eh()), !0;
        if (null != t) {
            let e = {
                id: t.message.id,
                type: C.Mm.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: v.rbe.GUILD_TEXT,
                },
            };
            if (
                ((V[t.message.id] = e),
                (B[t.message.id] = { ...e, message: (0, u.rh)(t.message) }),
                null == w && null == F)
            ) {
                let [t, n] = eI((U = [e, ...U]));
                (Q = t), (J = n);
            } else (x = [e, ...x]), eh();
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let t,
            { items: n, loadId: i, startTime: r, isInitialLoad: a, isReloading: s } = e;
        (t = new Set(C.H8)),
            (x = n
                .filter((e) => t.has(e.type))
                .filter(eu)
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
            eA(),
            (F = { load_id: i, load_time_millis: Date.now() - r, feed_item_ids: x.map((e) => e.id) });
        let [l, o] = eI(x);
        if (((k = ef(l)), !z || 0 === Y || a))
            (Y = 0), !es && ec(l, x) ? (($ = !0), (K = !0)) : ($ = !1), eh({ newUnread: l, newRead: o });
        else {
            Y > 0 && (q = null);
            let e = k.length > C.$P;
            s || ($ = e), e && ((0, D.kx)([...l, ...o], 0, C.w5), l.length + o.length === 0 && (el = !0));
        }
        N.k.trackFeedLoaded({
            newTrackingProps: F,
            hasNewContent: $,
            unreadFeedItems: l,
            readFeedItems: o,
            homeSessionId: es ? "foreground_load" : "background_load",
        });
    },
    LOAD_ICYMI_HYDRATED: function (e) {
        let {
            messageItems: t,
            activityItems: n,
            requestMessageItems: i,
            requestActivityItems: r,
            startingIndex: a,
            endingIndex: s,
        } = e;
        (el = !0), (B = { ...B });
        let l = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
            o = n.reduce((e, t) => ((e[t.id] = t), e), {});
        i.forEach((e) => {
            let t = l[e.message_id];
            if (null == t) {
                H[e.message_id] = !0;
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
                        channel_type: v.rbe.GUILD_TEXT,
                        has_mention: !1,
                    },
                });
            let i = I.A.getMessage(t.channel_id, t.message.id);
            if (null != i) {
                let e = (0, D.Rh)(t, n);
                B[t.message.id] = { ...e, message: i };
            } else B[t.message.id] = (0, D.Rh)(t, n);
        }),
            r.forEach((e) => {
                let t = o[e.content_id];
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
            a === ee && (ee = s),
            ea.delete((0, D.Vq)(a, s));
    },
    LOAD_ICYMI_CUSTOM_SCORES: function (e) {
        let { scores: t } = e;
        for (let e of t)
            for (let t of ((j[e.guild_id] = e.guild_score),
            eg(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                null == W[e.guild_id] && (W[e.guild_id] = {}),
                    (W[e.guild_id][t] = e.custom_channel_scores[t]),
                    eT(t, e.custom_channel_scores[t]);
        (j = { ...j }), (W = { ...W });
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        (et = t.map((e) => (0, S.jE)(e.guild))), eE();
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: i } = e;
        null != i && ((j[n] = i), eg(n, i), (j = { ...j })),
            t?.forEach((e) => {
                let { channelId: t, score: i } = e;
                null == W[n] && (W[n] = {}), (W[n][t] = i), eT(t, i), (W = { ...W });
            });
    },
    RELOAD_ICYMI: function () {
        if (0 === x.length) return !1;
        eh(), ($ = !1);
    },
    ICYMI_TAB_OPENED: function () {
        (z = !0), (G = Date.now()), K && ((K = !1), ($ = !1)), X < 5 && X++;
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
        ea.add(t);
    },
    LOAD_ICYMI_HYDRATED_FAILED: function (e) {
        let { hydrationId: t } = e;
        ea.delete(t);
    },
    ICYMI_SET_FOCUSED_TAB: function (e) {
        let { focused: t } = e;
        es = t;
    },
    LOAD_ICYMI_CURRENT_STATUS_MEDIA: function (e) {
        let { attachments: t, createdAtMs: n } = e;
        if (null == t || 0 === t.length) {
            Z = null;
            return;
        }
        Z = [n, [...t]];
    },
    ICYMI_SCROLL_EVENT: function (e) {
        let { timestamp: t } = e;
        eo = t;
    },
    ICYMI_TAKE_SURVEY: function (e) {
        let { takenAt: t } = e;
        ed = t;
    },
});
