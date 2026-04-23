n.d(t, { A: () => eO }), n(321073);
var i = n(681154),
    r = n(17928),
    a = n(228366),
    l = n(99753),
    s = n(20805),
    o = n(583846),
    d = n(736056),
    u = n(698441),
    c = n(320095),
    _ = n(495544),
    A = n(734057),
    h = n(776096),
    E = n(71393),
    p = n(232835),
    m = n(576705),
    I = n(222823),
    g = n(994500),
    C = n(543465),
    T = n(927813),
    f = n(449054),
    N = n(105971),
    S = n(596720);
let O = {};
class L extends r.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        O = e ?? {};
    }
    filterStaffContent() {
        return !0 === O.filterStaffContent;
    }
    getDoubleTapBehavior() {
        return O.doubleTapBehavior ?? S.Ai.DEFAULT;
    }
    getState() {
        return O;
    }
    getUserAgnosticState() {
        return O;
    }
}
let y = new L(a.h, {
    SET_ICYMI_FILTERS: function (e) {
        O = e.filters;
    },
});
var b = n(449e3),
    v = n(859524),
    D = n(652215),
    R = n(424994);
let M = +T.A.Millis.DAY,
    P = 3 * T.A.Millis.DAY,
    w = [],
    x = null,
    U = 0,
    G = [],
    k = [],
    j = {},
    V = {},
    H = {},
    B = {},
    F = {},
    Y = {},
    K = 0,
    W = !1,
    z = !1,
    q = !1,
    $ = null,
    X = null,
    Z = 0,
    Q = [],
    J = [],
    ee = 0,
    et = [],
    en = 0,
    ei = !0,
    er = !1,
    ea = new Set(),
    el = !1,
    es = !1,
    eo = 0,
    ed = 0;
function eu(e, t) {
    if (Date.now() - U > 6 * T.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function ec(e) {
    if (!y.filterStaffContent()) return !0;
    if ((0, v.xj)(e)) {
        if (e.data.guild_id === S.VL) return !0;
        let t = E.A.getGuild(e.data.guild_id);
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
function eA() {
    if (
        ((Q = Q.filter((e) => e.type !== S.Mm.RECOMMENDED_GUILDS)),
        (J = J.filter((e) => e.type !== S.Mm.RECOMMENDED_GUILDS)),
        0 === et.length)
    )
        return;
    let e = "recommendedGuilds",
        t = E.A.getGuildsArray().filter((e) => e.features.has(D.GuildFeatures.COMMUNITY)).length >= 5,
        n = b.A.getReadTimestamp(e);
    if (t && null != n && Date.now() - en > M && Date.now() - n < P) return;
    let i = { id: e, type: S.Mm.RECOMMENDED_GUILDS, score: 50 };
    if (((H[i.id] = i), (V[i.id] = i), 0 === Q.length)) J = [i, ...J];
    else if ((!t && Q.length < 5) || (t && Q.length < 10)) Q = [...Q, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        Q.splice(e, 0, i);
    } else Q.splice(5, 0, i);
}
function eh() {
    let e = new Set();
    if (
        (G.forEach((t) => {
            e.add(t.id);
        }),
        null != X)
    )
        if (e.has(X.id)) {
            let e = X.id,
                t = X.type,
                n = G.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((X = G[n]), (G = G.filter((t) => t.id !== e)), (G = [X, ...G]));
        } else (G = [X, ...G]), e.add(X.id);
    G.forEach((e) => {
        (V[e.id] = e),
            e.type === S.Mm.CUSTOM_STATUS &&
                (g.A.isBlockedOrIgnored(e.data.user_id) ? (B[e.id] = !0) : (H[e.id] = (0, v.YM)(e)));
    });
}
function eE(e) {
    let t, n, r, a, d;
    if ((G.length > 0 && ((w = G), (G = []), (k = [])), K++, null != e)) (Q = e.newUnread), (J = e.newRead);
    else {
        let [e, t] = ep(w);
        (Q = e), (J = t);
    }
    (function () {
        let e = E.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != F[n] && F[n] < 0) continue;
            let e = u.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, u.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = A.A.getChannel(n.channel_id);
                        if (!m.A.can(D.xBc.VIEW_CHANNEL, e)) continue;
                    }
                    if (
                        ((0, u.W$)(n, 2 * T.A.Seconds.DAY) || (0, u.Fd)(n)) &&
                        (null == H[n.id] && (H[n.id] = { id: n.id, type: S.Mm.GUILD_EVENT, score: 10, event_id: n.id }),
                        t.push({
                            id: n.id,
                            type: S.Mm.GUILD_EVENT,
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
            (V[e.id] = e), null != b.A.getReadTimestamp(e.id) ? i.push(e) : n.push(e);
        }),
            (Q = e_(Q, n, S.Mm.GUILD_EVENT, 7)),
            (J = e_(J, i, S.Mm.GUILD_EVENT, 7));
    })(),
        (t = new Set()),
        (n = {}),
        (r = []),
        (a = []),
        (d = l.A.getFeed(R.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5),
        d.forEach((e) => {
            if (
                t.has(e.content.id) ||
                (e.content.content_type !== i.ContentInventoryEntryType.PLAYED_GAME &&
                    e.content.content_type !== i.ContentInventoryEntryType.CUSTOM_STATUS &&
                    e.content.content_type !== i.ContentInventoryEntryType.TOP_GAME) ||
                (0, o.I5)(e.content)
            )
                return;
            if ((0, s.zD)(e.content)) {
                if (
                    (null == n[e.content.author_id] && (n[e.content.author_id] = new Set()),
                    n[e.content.author_id].has(e.content.extra.application_id))
                )
                    return;
                n[e.content.author_id].add(e.content.extra.application_id);
            }
            null == H[e.content.id] &&
                (H[e.content.id] = { id: e.content.id, type: S.Mm.ACTIVITY, score: 15, activity: e.content });
            let l = {
                id: e.content.id,
                type: S.Mm.ACTIVITY,
                score: 15,
                data: { user_id: e.content.author_id, content_id: e.content.id },
            };
            t.add(e.content.id), (V[l.id] = l), null != b.A.getReadTimestamp(l.id) ? a.push(l) : r.push(l);
        }),
        (Q = e_(Q, r, S.Mm.ACTIVITY, 5)),
        (J = e_(J, a, S.Mm.ACTIVITY, 5)),
        eA(),
        null != j.load_id &&
            x !== j.load_id &&
            (N.k.trackFeedLoaded({
                newTrackingProps: j,
                hasNewContent: z,
                unreadFeedItems: Q,
                readFeedItems: J,
                homeSessionId: "gravity",
            }),
            (x = j.load_id ?? null),
            (j = {})),
        (ee = 0),
        Q.length + J.length === 0 && (es = !0),
        (0, v.kx)([...Q, ...J], 0, S.w5),
        (er = !1);
}
function ep(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let r = null != b.A.getReadTimestamp(e.id);
            e.type === S.Mm.MESSAGE &&
                e.data.message_context?.external_content_application_id == null &&
                (r = r || !(0, v.$r)(e.data.channel_id, e.data.message_id)),
                r ? t.push(e) : e.type === S.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, v.tI)(e.id, t.id))]
    );
}
function em(e, t) {
    let n = [],
        i = new Set(w.map((e) => e.id));
    for (let r of e)
        !(r.type === S.Mm.RECOMMENDED_GUILDS || i.has(r.id)) &&
            null == b.A.getReadTimestamp(r.id) &&
            (r.type !== S.Mm.MESSAGE || ((0, v.$r)(r.data.channel_id, r.data.message_id) && r.data.channel_id !== t)) &&
            n.push(r);
    return n;
}
function eI(e, t) {
    return e.filter((e) => !(0, v.xj)(e) || e.data.channel_id !== t);
}
function eg(e, t) {
    (0, v.Wu)(t) === v.n$.MUTED && ((w = eI(w, e)), (Q = eI(Q, e)), (J = eI(J, e)), (G = eI(G, e)), (k = eI(k, e)));
}
function eC(e, t) {
    return e.filter((e) => !(0, v.xj)(e) || e.data.guild_id !== t);
}
function eT(e, t) {
    (0, v.Wu)(t) === v.n$.MUTED && ((w = eC(w, e)), (Q = eC(Q, e)), (J = eC(J, e)), (G = eC(G, e)), (k = eC(k, e)));
}
function ef(e) {
    let { type: t, messageId: n, userId: i, emoji: r, reactionType: a } = e,
        l = H[n];
    if (null == l || l.type !== S.Mm.MESSAGE) return !1;
    let s = _.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t
        ? (l.message = l.message.addReaction(r, s, e.colors, a))
        : (l.message = l.message.removeReaction(r, s, a));
}
function eN(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    Q.forEach((e, r) => {
        (r > ee || !q) && e.type === S.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let r = z,
        [a, l] = ep(G);
    if (((k = em(a, t)), (z = q ? r && k.length >= S.$P : r && eu(i, G)), 0 === n.length && r === z)) return !1;
    0 !== n.length && ((Q = i), (J = [...J, ...n]));
}
class eS extends r.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        this.waitFor(_.default, A.A, l.A, d.A, h.A, u.Ay, E.A, y, b.A, p.A, m.A, I.Ay, g.A, C.Ay),
            null != e &&
                ((w = e.dehydratedItems ?? []).forEach((e) => {
                    V[e.id] = e;
                }),
                (F = e.customGuildScores ?? {}),
                (Y = e.customChannelScoresByGuild ?? {}),
                (Z = e.numOpens ?? 0),
                (U = e.lastOpened ?? 0),
                (en = e.lastJoinedRecommendedGuild ?? 0),
                (ed = e.lastTakenICYMISurvey ?? 0));
    }
    getVersion() {
        return K;
    }
    getDehydratedItems() {
        return w;
    }
    getNewDehydratedItems() {
        return G;
    }
    getDehydratedItem(e) {
        return V[e] ?? null;
    }
    getHydratedItem(e) {
        return H[e] ?? null;
    }
    getMessage(e) {
        let t = H[e];
        return null == t || t.type !== S.Mm.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return H;
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
        return B;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === v.n$.MUTED || this.getCustomChannelScore(e, t) === v.n$.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == Y[e] || null == Y[e][t] ? v.n$.UNKNOWN : (0, v.Wu)(Y[e][t]);
    }
    getCustomGuildScore(e) {
        return F[e] ?? 0;
    }
    getCustomGuildScores() {
        return F;
    }
    hasNewContent() {
        return z;
    }
    getCurrentStatusAttachments(e) {
        return null == $ || $[0] !== e ? [] : $[1];
    }
    getLoadId() {
        return x;
    }
    hasOpenedEnoughTimes() {
        return 5 === Z;
    }
    hasOpened() {
        return q;
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
        return X;
    }
    getIsTabFocused() {
        return el;
    }
    isFirstPageHydrated() {
        return es;
    }
    lastScrollEvent() {
        return eo;
    }
    lastTakenICYMISurvey() {
        return ed;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...Q, ...J].findIndex((e) => e.type === S.Mm.RECOMMENDED_GUILDS)
            : [...Q, ...J].filter((e) => null != H[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: w,
            numOpens: Z,
            customGuildScores: F,
            customChannelScoresByGuild: Y,
            lastOpened: U,
            lastJoinedRecommendedGuild: en,
            lastTakenICYMISurvey: ed,
        };
    }
}
let eO = new eS(a.h, {
    LOGOUT: function () {
        (w = []),
            (G = []),
            (k = []),
            (V = {}),
            (j = {}),
            (H = {}),
            (B = {}),
            (x = null),
            (F = {}),
            (Y = {}),
            (K = 0),
            (W = !1),
            (z = !1),
            (q = !1),
            (Q = []),
            (J = []),
            (ee = 0),
            (U = 0),
            (en = 0),
            (ei = !0),
            (er = !1),
            (ea = new Set()),
            (X = null),
            (el = !1),
            (es = !1),
            ($ = null),
            (eo = 0);
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
        let { messageItem: t, customStatusItem: n } = e;
        if (null != n) return (X = n), null != x && ((G = G.length > 0 ? G : [...w]), eh(), eE()), !0;
        if (null != t) {
            let e = {
                id: t.message.id,
                type: S.Mm.MESSAGE,
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
                (H[t.message.id] = { ...e, message: (0, c.rh)(t.message) }),
                null == x && null == j)
            ) {
                let [t, n] = ep((w = [e, ...w]));
                (Q = t), (J = n);
            } else (G = [e, ...G]), eE();
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let t,
            { items: n, loadId: i, startTime: r, isInitialLoad: a, isReloading: l } = e;
        (t = new Set(S.H8)),
            (G = n
                .filter((e) => t.has(e.type))
                .filter(ec)
                .map((e) => {
                    if (e.type === S.Mm.MESSAGE && null != e.data.message_context) {
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
            (j = { load_id: i, load_time_millis: Date.now() - r, feed_item_ids: G.map((e) => e.id) });
        let [s, o] = ep(G);
        if (((k = em(s)), !q || 0 === K || a))
            (K = 0), !el && eu(s, G) ? ((z = !0), (W = !0)) : (z = !1), eE({ newUnread: s, newRead: o });
        else {
            K > 0 && (X = null);
            let e = k.length > S.$P;
            l || (z = e), e && ((0, v.kx)([...s, ...o], 0, S.w5), s.length + o.length === 0 && (es = !0));
        }
        N.k.trackFeedLoaded({
            newTrackingProps: j,
            hasNewContent: z,
            unreadFeedItems: s,
            readFeedItems: o,
            homeSessionId: el ? "foreground_load" : "background_load",
        });
    },
    LOAD_ICYMI_HYDRATED: function (e) {
        let {
            messageItems: t,
            activityItems: n,
            requestMessageItems: i,
            requestActivityItems: r,
            startingIndex: a,
            endingIndex: l,
        } = e;
        (es = !0), (H = { ...H });
        let s = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
            o = n.reduce((e, t) => ((e[t.id] = t), e), {});
        i.forEach((e) => {
            let t = s[e.message_id];
            if (null == t) {
                B[e.message_id] = !0;
                return;
            }
            let n = V[e.message_id];
            null == n &&
                (n = {
                    id: e.message_id,
                    type: S.Mm.MESSAGE,
                    score: -1,
                    data: {
                        guild_id: t.guild_id,
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        channel_type: D.rbe.GUILD_TEXT,
                        has_mention: !1,
                    },
                });
            let i = p.A.getMessage(t.channel_id, t.message.id);
            if (null != i) {
                let e = (0, v.Rh)(t, n);
                H[t.message.id] = { ...e, message: i };
            } else H[t.message.id] = (0, v.Rh)(t, n);
        }),
            r.forEach((e) => {
                let t = o[e.content_id];
                if (null == t) {
                    B[e.content_id] = !0;
                    return;
                }
                let n = V[e.content_id];
                if (null == n) {
                    B[e.content_id] = !0;
                    return;
                }
                H[t.id] = { ...n, activity: t };
            }),
            a === ee && (ee = l),
            ea.delete((0, v.Vq)(a, l));
    },
    LOAD_ICYMI_CUSTOM_SCORES: function (e) {
        let { scores: t } = e;
        for (let e of t)
            for (let t of ((F[e.guild_id] = e.guild_score),
            eT(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                null == Y[e.guild_id] && (Y[e.guild_id] = {}),
                    (Y[e.guild_id][t] = e.custom_channel_scores[t]),
                    eg(t, e.custom_channel_scores[t]);
        (F = { ...F }), (Y = { ...Y });
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        (et = t.map((e) => (0, f.jE)(e.guild))), eA();
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: i } = e;
        null != i && ((F[n] = i), eT(n, i), (F = { ...F })),
            t?.forEach((e) => {
                let { channelId: t, score: i } = e;
                null == Y[n] && (Y[n] = {}), (Y[n][t] = i), eg(t, i), (Y = { ...Y });
            });
    },
    RELOAD_ICYMI: function () {
        if (0 === G.length) return !1;
        eE(), (z = !1);
    },
    ICYMI_TAB_OPENED: function () {
        (q = !0), (U = Date.now()), W && ((W = !1), (z = !1)), Z < 5 && Z++;
    },
    ICYMI_FEEDBACK_GIVEN: function () {
        Z = 6;
    },
    MESSAGE_REACTION_ADD: ef,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            i = H[t];
        if (null == i || i.type !== S.Mm.MESSAGE) return !1;
        let r = _.default.getId();
        i.message = i.message.addReactionBatch(n, r);
    },
    MESSAGE_REACTION_REMOVE: ef,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e,
            n = H[t];
        if (null == n || n.type !== S.Mm.MESSAGE) return !1;
        n.message = n.message.set("reactions", []);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e,
            i = H[t];
        if (null == i || i.type !== S.Mm.MESSAGE) return !1;
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
        el = t;
    },
    LOAD_ICYMI_CURRENT_STATUS_MEDIA: function (e) {
        let { attachments: t, createdAtMs: n } = e;
        if (null == t || 0 === t.length) {
            $ = null;
            return;
        }
        $ = [n, [...t]];
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
