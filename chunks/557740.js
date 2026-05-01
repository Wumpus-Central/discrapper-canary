n.d(t, { A: () => eR }), n(321073);
var i = n(681154),
    a = n(17928),
    r = n(228366),
    s = n(99753),
    l = n(20805),
    o = n(583846),
    d = n(736056),
    c = n(698441),
    _ = n(320095),
    E = n(495544),
    u = n(734057),
    A = n(776096),
    I = n(71393),
    T = n(232835),
    h = n(576705),
    S = n(222823),
    N = n(994500),
    f = n(543465),
    p = n(927813),
    m = n(449054),
    O = n(105971),
    C = n(596720);
let R = {};
class g extends a.Ay.DeviceSettingsStore {
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
let L = new g(r.h, {
    SET_ICYMI_FILTERS: function (e) {
        R = e.filters;
    },
});
var D = n(449e3),
    b = n(859524),
    M = n(652215),
    P = n(424994);
let U = +p.A.Millis.DAY,
    v = 3 * p.A.Millis.DAY,
    y = [],
    G = null,
    w = 0,
    x = [],
    V = [],
    B = {},
    F = {},
    k = {},
    H = {},
    j = {},
    Y = {},
    W = 0,
    K = !1,
    $ = !1,
    Z = !1,
    q = null,
    Q = null,
    z = 0,
    X = [],
    J = [],
    ee = 0,
    et = [],
    en = 0,
    ei = !0,
    ea = !1,
    er = new Set(),
    es = !1,
    el = !1,
    eo = 0,
    ed = 0;
function ec(e, t) {
    if (Date.now() - w > 6 * p.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function e_(e) {
    if (!L.filterStaffContent()) return !0;
    if ((0, b.xj)(e)) {
        if (e.data.guild_id === C.VL) return !0;
        let t = I.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(M.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function eE(e, t, n, i) {
    let a = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < a.length ? a.splice((t + 1) * i, 0, e) : a.push(e);
        }),
        a
    );
}
function eu() {
    if (
        ((X = X.filter((e) => e.type !== C.Mm.RECOMMENDED_GUILDS)),
        (J = J.filter((e) => e.type !== C.Mm.RECOMMENDED_GUILDS)),
        0 === et.length)
    )
        return;
    let e = "recommendedGuilds",
        t = I.A.getGuildsArray().filter((e) => e.features.has(M.GuildFeatures.COMMUNITY)).length >= 5,
        n = D.A.getReadTimestamp(e);
    if (t && null != n && Date.now() - en > U && Date.now() - n < v) return;
    let i = { id: e, type: C.Mm.RECOMMENDED_GUILDS, score: 50 };
    if (((k[i.id] = i), (F[i.id] = i), 0 === X.length)) J = [i, ...J];
    else if ((!t && X.length < 5) || (t && X.length < 10)) X = [...X, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        X.splice(e, 0, i);
    } else X.splice(5, 0, i);
}
function eA() {
    let e = new Set();
    if (
        (x.forEach((t) => {
            e.add(t.id);
        }),
        null != Q)
    )
        if (e.has(Q.id)) {
            let e = Q.id,
                t = Q.type,
                n = x.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((Q = x[n]), (x = x.filter((t) => t.id !== e)), (x = [Q, ...x]));
        } else (x = [Q, ...x]), e.add(Q.id);
    x.forEach((e) => {
        (F[e.id] = e),
            e.type === C.Mm.CUSTOM_STATUS &&
                (N.A.isBlockedOrIgnored(e.data.user_id) ? (H[e.id] = !0) : (k[e.id] = (0, b.YM)(e)));
    });
}
function eI(e) {
    let t, n, a, r, d;
    if ((x.length > 0 && ((y = x), (x = []), (V = [])), W++, null != e)) (X = e.newUnread), (J = e.newRead);
    else {
        let [e, t] = eT(y);
        (X = e), (J = t);
    }
    (function () {
        let e = I.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != j[n] && j[n] < 0) continue;
            let e = c.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, c.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = u.A.getChannel(n.channel_id);
                        if (!h.A.can(M.xBc.VIEW_CHANNEL, e)) continue;
                    }
                    if (
                        ((0, c.W$)(n, 2 * p.A.Seconds.DAY) || (0, c.Fd)(n)) &&
                        (null == k[n.id] && (k[n.id] = { id: n.id, type: C.Mm.GUILD_EVENT, score: 10, event_id: n.id }),
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
            (F[e.id] = e), null != D.A.getReadTimestamp(e.id) ? i.push(e) : n.push(e);
        }),
            (X = eE(X, n, C.Mm.GUILD_EVENT, 7)),
            (J = eE(J, i, C.Mm.GUILD_EVENT, 7));
    })(),
        (t = new Set()),
        (n = {}),
        (a = []),
        (r = []),
        (d = s.A.getFeed(P.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5),
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
            null == k[e.content.id] &&
                (k[e.content.id] = { id: e.content.id, type: C.Mm.ACTIVITY, score: 15, activity: e.content });
            let s = {
                id: e.content.id,
                type: C.Mm.ACTIVITY,
                score: 15,
                data: { user_id: e.content.author_id, content_id: e.content.id },
            };
            t.add(e.content.id), (F[s.id] = s), null != D.A.getReadTimestamp(s.id) ? r.push(s) : a.push(s);
        }),
        (X = eE(X, a, C.Mm.ACTIVITY, 5)),
        (J = eE(J, r, C.Mm.ACTIVITY, 5)),
        eu(),
        null != B.load_id &&
            G !== B.load_id &&
            (O.k.trackFeedLoaded({
                newTrackingProps: B,
                hasNewContent: $,
                unreadFeedItems: X,
                readFeedItems: J,
                homeSessionId: "gravity",
            }),
            (G = B.load_id ?? null),
            (B = {})),
        (ee = 0),
        X.length + J.length === 0 && (el = !0),
        (0, b.kx)([...X, ...J], 0, C.w5),
        (ea = !1);
}
function eT(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let a = null != D.A.getReadTimestamp(e.id);
            e.type === C.Mm.MESSAGE &&
                e.data.message_context?.external_content_application_id == null &&
                (a = a || !(0, b.$r)(e.data.channel_id, e.data.message_id)),
                a ? t.push(e) : e.type === C.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e);
        }),
        [[...i, ...n], t.sort((e, t) => (0, b.tI)(e.id, t.id))]
    );
}
function eh(e, t) {
    let n = [],
        i = new Set(y.map((e) => e.id));
    for (let a of e)
        !(a.type === C.Mm.RECOMMENDED_GUILDS || i.has(a.id)) &&
            null == D.A.getReadTimestamp(a.id) &&
            (a.type !== C.Mm.MESSAGE || ((0, b.$r)(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t)) &&
            n.push(a);
    return n;
}
function eS(e, t) {
    return e.filter((e) => !(0, b.xj)(e) || e.data.channel_id !== t);
}
function eN(e, t) {
    (0, b.Wu)(t) === b.n$.MUTED && ((y = eS(y, e)), (X = eS(X, e)), (J = eS(J, e)), (x = eS(x, e)), (V = eS(V, e)));
}
function ef(e, t) {
    return e.filter((e) => !(0, b.xj)(e) || e.data.guild_id !== t);
}
function ep(e, t) {
    (0, b.Wu)(t) === b.n$.MUTED && ((y = ef(y, e)), (X = ef(X, e)), (J = ef(J, e)), (x = ef(x, e)), (V = ef(V, e)));
}
function em(e) {
    let { type: t, messageId: n, userId: i, emoji: a, reactionType: r } = e,
        s = k[n];
    if (null == s || s.type !== C.Mm.MESSAGE) return !1;
    let l = E.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t
        ? (s.message = s.message.addReaction(a, l, e.colors, r))
        : (s.message = s.message.removeReaction(a, l, r));
}
function eO(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    X.forEach((e, a) => {
        (a > ee || !Z) && e.type === C.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let a = $,
        [r, s] = eT(x);
    if (((V = eh(r, t)), ($ = Z ? a && V.length >= C.$P : a && ec(i, x)), 0 === n.length && a === $)) return !1;
    0 !== n.length && ((X = i), (J = [...J, ...n]));
}
class eC extends a.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        this.waitFor(E.default, u.A, s.A, d.A, A.A, c.Ay, I.A, L, D.A, T.A, h.A, S.Ay, N.A, f.Ay),
            null != e &&
                ((y = e.dehydratedItems ?? []).forEach((e) => {
                    F[e.id] = e;
                }),
                (j = e.customGuildScores ?? {}),
                (Y = e.customChannelScoresByGuild ?? {}),
                (z = e.numOpens ?? 0),
                (w = e.lastOpened ?? 0),
                (en = e.lastJoinedRecommendedGuild ?? 0),
                (ed = e.lastTakenICYMISurvey ?? 0));
    }
    getVersion() {
        return W;
    }
    getDehydratedItems() {
        return y;
    }
    getNewDehydratedItems() {
        return x;
    }
    getDehydratedItem(e) {
        return F[e] ?? null;
    }
    getHydratedItem(e) {
        return k[e] ?? null;
    }
    getMessage(e) {
        let t = k[e];
        return null == t || t.type !== C.Mm.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return k;
    }
    getUnreadDisplayItems() {
        return X;
    }
    getNewUnreadDehydratedItems() {
        return V;
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
        return $;
    }
    getCurrentStatusAttachments(e) {
        return null == q || q[0] !== e ? [] : q[1];
    }
    getLoadId() {
        return G;
    }
    hasOpenedEnoughTimes() {
        return 5 === z;
    }
    hasOpened() {
        return Z;
    }
    getDiscoverableGuilds() {
        return et;
    }
    videosMuted() {
        return ei;
    }
    isRefreshing() {
        return ea;
    }
    isHydrating() {
        return er.size > 0;
    }
    notificationItem() {
        return Q;
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
            ? [...X, ...J].findIndex((e) => e.type === C.Mm.RECOMMENDED_GUILDS)
            : [...X, ...J].filter((e) => null != k[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: y,
            numOpens: z,
            customGuildScores: j,
            customChannelScoresByGuild: Y,
            lastOpened: w,
            lastJoinedRecommendedGuild: en,
            lastTakenICYMISurvey: ed,
        };
    }
}
let eR = new eC(r.h, {
    LOGOUT: function () {
        (y = []),
            (x = []),
            (V = []),
            (F = {}),
            (B = {}),
            (k = {}),
            (H = {}),
            (G = null),
            (j = {}),
            (Y = {}),
            (W = 0),
            (K = !1),
            ($ = !1),
            (Z = !1),
            (X = []),
            (J = []),
            (ee = 0),
            (w = 0),
            (en = 0),
            (ei = !0),
            (ea = !1),
            (er = new Set()),
            (Q = null),
            (es = !1),
            (el = !1),
            (q = null),
            (eo = 0);
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
        let { messageItem: t, customStatusItem: n } = e;
        if (null != n) return (Q = n), null != G && ((x = x.length > 0 ? x : [...y]), eA(), eI()), !0;
        if (null != t) {
            let e = {
                id: t.message.id,
                type: C.Mm.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: M.rbe.GUILD_TEXT,
                },
            };
            if (
                ((F[t.message.id] = e),
                (k[t.message.id] = { ...e, message: (0, _.rh)(t.message) }),
                null == G && null == B)
            ) {
                let [t, n] = eT((y = [e, ...y]));
                (X = t), (J = n);
            } else (x = [e, ...x]), eI();
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let t,
            { items: n, loadId: i, startTime: a, isInitialLoad: r, isReloading: s } = e;
        (t = new Set(C.H8)),
            (x = n
                .filter((e) => t.has(e.type))
                .filter(e_)
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
            (B = { load_id: i, load_time_millis: Date.now() - a, feed_item_ids: x.map((e) => e.id) });
        let [l, o] = eT(x);
        if (((V = eh(l)), !Z || 0 === W || r))
            (W = 0), !es && ec(l, x) ? (($ = !0), (K = !0)) : ($ = !1), eI({ newUnread: l, newRead: o });
        else {
            W > 0 && (Q = null);
            let e = V.length > C.$P;
            s || ($ = e), e && ((0, b.kx)([...l, ...o], 0, C.w5), l.length + o.length === 0 && (el = !0));
        }
        O.k.trackFeedLoaded({
            newTrackingProps: B,
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
            requestActivityItems: a,
            startingIndex: r,
            endingIndex: s,
        } = e;
        (el = !0), (k = { ...k });
        let l = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
            o = n.reduce((e, t) => ((e[t.id] = t), e), {});
        i.forEach((e) => {
            let t = l[e.message_id];
            if (null == t) {
                H[e.message_id] = !0;
                return;
            }
            let n = F[e.message_id];
            null == n &&
                (n = {
                    id: e.message_id,
                    type: C.Mm.MESSAGE,
                    score: -1,
                    data: {
                        guild_id: t.guild_id,
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        channel_type: M.rbe.GUILD_TEXT,
                        has_mention: !1,
                    },
                });
            let i = T.A.getMessage(t.channel_id, t.message.id);
            if (null != i) {
                let e = (0, b.Rh)(t, n);
                k[t.message.id] = { ...e, message: i };
            } else k[t.message.id] = (0, b.Rh)(t, n);
        }),
            a.forEach((e) => {
                let t = o[e.content_id];
                if (null == t) {
                    H[e.content_id] = !0;
                    return;
                }
                let n = F[e.content_id];
                if (null == n) {
                    H[e.content_id] = !0;
                    return;
                }
                k[t.id] = { ...n, activity: t };
            }),
            r === ee && (ee = s),
            er.delete((0, b.Vq)(r, s));
    },
    LOAD_ICYMI_CUSTOM_SCORES: function (e) {
        let { scores: t } = e;
        for (let e of t)
            for (let t of ((j[e.guild_id] = e.guild_score),
            ep(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                null == Y[e.guild_id] && (Y[e.guild_id] = {}),
                    (Y[e.guild_id][t] = e.custom_channel_scores[t]),
                    eN(t, e.custom_channel_scores[t]);
        (j = { ...j }), (Y = { ...Y });
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        (et = t.map((e) => (0, m.jE)(e.guild))), eu();
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: i } = e;
        null != i && ((j[n] = i), ep(n, i), (j = { ...j })),
            t?.forEach((e) => {
                let { channelId: t, score: i } = e;
                null == Y[n] && (Y[n] = {}), (Y[n][t] = i), eN(t, i), (Y = { ...Y });
            });
    },
    RELOAD_ICYMI: function () {
        if (0 === x.length) return !1;
        eI(), ($ = !1);
    },
    ICYMI_TAB_OPENED: function () {
        (Z = !0), (w = Date.now()), K && ((K = !1), ($ = !1)), z < 5 && z++;
    },
    ICYMI_FEEDBACK_GIVEN: function () {
        z = 6;
    },
    MESSAGE_REACTION_ADD: em,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            i = k[t];
        if (null == i || i.type !== C.Mm.MESSAGE) return !1;
        let a = E.default.getId();
        i.message = i.message.addReactionBatch(n, a);
    },
    MESSAGE_REACTION_REMOVE: em,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e,
            n = k[t];
        if (null == n || n.type !== C.Mm.MESSAGE) return !1;
        n.message = n.message.set("reactions", []);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e,
            i = k[t];
        if (null == i || i.type !== C.Mm.MESSAGE) return !1;
        i.message = i.message.removeReactionsForEmoji(n);
    },
    CHANNEL_ACK: eO,
    MESSAGE_ACK: eO,
    ICYMI_JOINED_RECOMMENDED_GUILD: function () {
        en = Date.now();
    },
    ICYMI_SET_VIDEOS_MUTED: function (e) {
        let { muted: t } = e;
        ei = t;
    },
    ICYMI_SET_REFRESHING: function (e) {
        let { refreshing: t } = e;
        ea = t;
    },
    LOAD_ICYMI_HYDRATED_ATTEMPT: function (e) {
        let { hydrationId: t } = e;
        er.add(t);
    },
    LOAD_ICYMI_HYDRATED_FAILED: function (e) {
        let { hydrationId: t } = e;
        er.delete(t);
    },
    ICYMI_SET_FOCUSED_TAB: function (e) {
        let { focused: t } = e;
        es = t;
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
        eo = t;
    },
    ICYMI_TAKE_SURVEY: function (e) {
        let { takenAt: t } = e;
        ed = t;
    },
});
