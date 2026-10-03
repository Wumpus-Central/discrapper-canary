(n.r(t), n.d(t, { default: () => t6 }));
var i,
    a = n(477900),
    s = n(582128),
    d = n(503698),
    r = n.n(d),
    l = n(877227),
    o = n(17928),
    c = n(43990),
    u = n(663417),
    m = n(768622),
    _ = n(944791),
    g = n(456412),
    h = n(964486),
    p = n(726249),
    f = n(742589),
    I = n(210714),
    E = n(363195),
    y = n(519059);
n(321073);
var T = n(681154),
    A = n(73153),
    S = n(99753),
    M = n(20805),
    x = n(583846),
    v = n(736056),
    C = n(698441),
    D = n(320095),
    w = n(280450),
    N = n(734057),
    G = n(776096),
    k = n(71393),
    b = n(232835),
    L = n(576705),
    O = n(573163),
    R = n(994500),
    j = n(543465),
    U = n(927813),
    F = n(449054),
    Y = n(596720);
let H = {};
class V extends o.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        H = e ?? {};
    }
    filterStaffContent() {
        return !0 === H.filterStaffContent;
    }
    getDoubleTapBehavior() {
        return H.doubleTapBehavior ?? Y.Ai.DEFAULT;
    }
    getState() {
        return H;
    }
    getUserAgnosticState() {
        return H;
    }
}
let P = new V(A.h, {
    SET_ICYMI_FILTERS: function (e) {
        H = e.filters;
    },
});
var B = n(935208);
function K(e, t) {
    let n = O.Ay.getTrackedAckMessageId(e);
    return null == n || B.default.extractTimestamp(t) > B.default.extractTimestamp(n);
}
let z = 7 * U.A.Millis.DAY,
    W = { readIdToTimestampMap: {} };
class J extends o.Ay.DeviceSettingsStore {
    static displayName = "ICYMIUnreadStateStore";
    static persistKey = "ICYMIUnreadStateStore";
    initialize(e) {
        W =
            null != e && null != e.readIdToTimestampMap
                ? { readIdToTimestampMap: e.readIdToTimestampMap }
                : { readIdToTimestampMap: {} };
        let t = Date.now() - z;
        for (let e of Object.keys(W.readIdToTimestampMap).filter((e) => W.readIdToTimestampMap[e] < t))
            delete W.readIdToTimestampMap[e];
    }
    getReadTimestamp(e) {
        return W.readIdToTimestampMap[e];
    }
    getState() {
        return W;
    }
    getUserAgnosticState() {
        return W;
    }
}
let X = new J(A.h, {
    ICYMI_ACK_ITEMS: function (e) {
        let { items: t, override: n } = e;
        t.forEach((e) => {
            null != e && (null == W.readIdToTimestampMap[e.id] || n) && (W.readIdToTimestampMap[e.id] = e.timestamp);
        });
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let { items: t } = e;
        for (let e of t)
            e.type !== Y.Mm.MESSAGE ||
                null != W.readIdToTimestampMap[e.id] ||
                e.data.message_context?.external_content_application_id != null ||
                K(e.data.channel_id, e.data.message_id) ||
                (W.readIdToTimestampMap[e.id] = 0);
    },
    CLEAR_ICYMI_READ_STATES: function () {
        W.readIdToTimestampMap = {};
    },
});
var q = n(6161);
n(256265);
var Q = n(95701),
    $ = n(4106),
    Z = n(522606),
    ee = n(652215),
    et = n(375708),
    en =
        (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.DEFAULT = 1)] = "DEFAULT"),
        (i[(i.MORE = 2)] = "MORE"),
        (i[(i.LESS = 3)] = "LESS"),
        (i[(i.MUTED = 4)] = "MUTED"),
        i);
function ei(e) {
    return e.type === Y.Mm.MESSAGE || e.type === Y.Mm.GUILD_EVENT;
}
function ea(e) {
    return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function es(e, t, n, i) {
    let a = e.slice(t, n);
    if (0 === a.length) return;
    $.A.loadHydratedAttempt((0, Z.V)(t, n));
    let s = a.filter((e) => null == i[e.id]),
        d = s
            .filter((e) => e.type === Y.Mm.MESSAGE)
            .map((e) => ({ channel_id: e.data.channel_id, message_id: e.data.message_id })),
        r = s
            .map((e) => {
                if (e.type === Y.Mm.MESSAGE) {
                    let t = [];
                    return (
                        e.data.message_context?.reply_message_id != null &&
                            t.push({
                                channel_id: e.data.channel_id,
                                message_id: e.data.message_context.reply_message_id,
                            }),
                        e.data.message_context?.before_message_id != null &&
                            t.push({
                                channel_id: e.data.channel_id,
                                message_id: e.data.message_context.before_message_id,
                            }),
                        e.data.message_context?.after_message_id != null &&
                            t.push({
                                channel_id: e.data.channel_id,
                                message_id: e.data.message_context.after_message_id,
                            }),
                        t
                    );
                }
                return [];
            })
            .flat()
            .filter(Boolean),
        l = s
            .filter((e) => e.type === Y.Mm.ACTIVITY)
            .map((e) => ({ user_id: e.data.user_id, content_id: e.data.content_id }));
    await $.A.fetchHydrated(t, n, { messageItems: [...d, ...r], activityItems: l });
}
function ed(e, t) {
    return {
        ...t,
        message: (0, D.rh)(e.message),
        threadChannel: null != e.thread_channel ? Q.Lt.fromServer(e.thread_channel, e.guild_id) : void 0,
    };
}
function er(e) {
    return {
        id: e.id,
        type: Y.Mm.CUSTOM_STATUS,
        activity: {
            id: e.id,
            author_id: e.data.user_id,
            author_type: q.ContentInventoryAuthorType.USER,
            traits: [],
            participants: [],
            content_type: T.ContentInventoryEntryType.CUSTOM_STATUS,
            extra: {
                type: "custom_status_extra",
                status: e.data.text ?? "",
                emoji_id: e.data.emoji_id,
                emoji_name: e.data.emoji_name,
                emoji_animated: e.data.emoji_animated,
                attachments: e.data.attachments,
            },
        },
        score: e.score,
        score_components: e.score_components,
    };
}
function el(e) {
    let t, n;
    switch (e.data.kind) {
        case "message":
            t = e.data.message.channel_id;
            break;
        case "forumThread":
            t = e.data.threadChannel.id;
            break;
        case "guildEvent":
            n = C.Ay.getGuildScheduledEvent(e.data.eventId)?.guild_id;
            break;
        default:
            return !1;
    }
    let i = N.A.getChannel(t);
    if (i?.nsfw) return !0;
    let a = null != (n = i?.guild_id ?? n) ? k.A.getGuild(n) : null;
    return a?.nsfwLevel === ee.ftr.EXPLICIT || a?.nsfwLevel === ee.ftr.AGE_RESTRICTED;
}
function eo(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "bottomLoading":
            return "bottomLoading";
        case "message":
            if (e.channelType === ee.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            if (e.data.messageContext?.external_content_application_id != null) return "game_message";
            return "message";
        case "guildEvent":
            return "guild_event";
        case "contentInventory":
            if (e.data.content.content_type === T.ContentInventoryEntryType.CUSTOM_STATUS)
                return "hotwheels_custom_status";
            return "hotwheels_gaming_activity";
        case "recommendedGuilds":
            return "recommended_guilds";
        case "forumThread":
            return "forum_thread";
        case "icymiHeader":
            return "icymi_header";
        default:
            return "unknown";
    }
}
var ec = n(174459);
function eu(e) {
    let t = [],
        n = [],
        i = [],
        a = [];
    (e.unreadFeedItems.forEach((e) => {
        (t.push(e.id), i.push(em(e)));
    }),
        e.readFeedItems.forEach((e) => {
            (n.push(e.id), a.push(em(e)));
        }),
        ec.default.track(ee.HAw.FEED_LOADED, {
            ...e.newTrackingProps,
            home_session_id: e.homeSessionId,
            tab_badged: e.hasNewContent,
            unread_feed_item_ids: t,
            read_feed_item_ids: n,
            unread_feed_item_types: i,
            read_feed_item_types: a,
        }));
}
function em(e) {
    switch (e.type) {
        case Y.Mm.MESSAGE:
            if (e.data.channel_type === ee.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            return "message";
        case Y.Mm.ACTIVITY:
            return "hotwheels_gaming_activity";
        case Y.Mm.CUSTOM_STATUS:
            return "hotwheels_custom_status";
        case Y.Mm.GUILD_EVENT:
            return "guild_event";
        case Y.Mm.RECOMMENDED_GUILDS:
            return "recommended_guilds";
    }
}
var e_ = n(424994);
let eg = +U.A.Millis.DAY,
    eh = 3 * U.A.Millis.DAY,
    ep = [],
    ef = null,
    eI = 0,
    eE = [],
    ey = [],
    eT = {},
    eA = {},
    eS = {},
    eM = {},
    ex = {},
    ev = {},
    eC = 0,
    eD = !1,
    ew = !1,
    eN = !1,
    eG = null,
    ek = null,
    eb = 0,
    eL = [],
    eO = [],
    eR = 0,
    ej = [],
    eU = 0,
    eF = !0,
    eY = !1,
    eH = new Set(),
    eV = !1,
    eP = !1,
    eB = 0,
    eK = 0;
function ez(e, t) {
    if (Date.now() - eI > 6 * U.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function eW(e) {
    if (!P.filterStaffContent()) return !0;
    if (ei(e)) {
        if (e.data.guild_id === Y.VL) return !0;
        let t = k.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(ee.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function eJ(e, t, n, i) {
    let a = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < a.length ? a.splice((t + 1) * i, 0, e) : a.push(e);
        }),
        a
    );
}
function eX() {
    if (
        ((eL = eL.filter((e) => e.type !== Y.Mm.RECOMMENDED_GUILDS)),
        (eO = eO.filter((e) => e.type !== Y.Mm.RECOMMENDED_GUILDS)),
        0 === ej.length)
    )
        return;
    let e = "recommendedGuilds",
        t = k.A.getGuildsArray().filter((e) => e.features.has(ee.GuildFeatures.COMMUNITY)).length >= 5,
        n = X.getReadTimestamp(e);
    if (t && null != n && Date.now() - eU > eg && Date.now() - n < eh) return;
    let i = { id: e, type: Y.Mm.RECOMMENDED_GUILDS, score: 50 };
    if (((eS[i.id] = i), (eA[i.id] = i), 0 === eL.length)) eO = [i, ...eO];
    else if ((!t && eL.length < 5) || (t && eL.length < 10)) eL = [...eL, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        eL.splice(e, 0, i);
    } else eL.splice(5, 0, i);
}
function eq() {
    let e = new Set();
    if (
        (eE.forEach((t) => {
            e.add(t.id);
        }),
        null != ek)
    )
        if (e.has(ek.id)) {
            let e = ek.id,
                t = ek.type,
                n = eE.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((ek = eE[n]), (eE = eE.filter((t) => t.id !== e)), (eE = [ek, ...eE]));
        } else ((eE = [ek, ...eE]), e.add(ek.id));
    eE.forEach((e) => {
        ((eA[e.id] = e),
            e.type === Y.Mm.CUSTOM_STATUS &&
                (R.A.isBlockedOrIgnored(e.data.user_id) ? (eM[e.id] = !0) : (eS[e.id] = er(e))));
    });
}
function eQ(e) {
    let t, n, i, a, s;
    if ((eE.length > 0 && ((ep = eE), (eE = []), (ey = [])), eC++, null != e)) ((eL = e.newUnread), (eO = e.newRead));
    else {
        let [e, t] = e$(ep);
        ((eL = e), (eO = t));
    }
    ((function () {
        let e = k.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != ex[n] && ex[n] < 0) continue;
            let e = C.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, C.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = N.A.getChannel(n.channel_id);
                        if (!L.A.can(ee.xBc.VIEW_CHANNEL, e)) continue;
                    }
                    if (
                        ((0, C.W$)(n, 2 * U.A.Seconds.DAY) || (0, C.Fd)(n)) &&
                        (null == eS[n.id] &&
                            (eS[n.id] = { id: n.id, type: Y.Mm.GUILD_EVENT, score: 10, event_id: n.id }),
                        t.push({
                            id: n.id,
                            type: Y.Mm.GUILD_EVENT,
                            score: 10,
                            data: { guild_id: n.guild_id, event_id: n.id, channel_id: n.channel_id ?? void 0 },
                        }),
                        ++i >= 1)
                    )
                        break;
                }
        }
        t.sort((e, t) => {
            let n = G.A.getGuildAffinity(e.data.guild_id),
                i = G.A.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let n = [],
            i = [];
        (t.forEach((e) => {
            ((eA[e.id] = e), null != X.getReadTimestamp(e.id) ? i.push(e) : n.push(e));
        }),
            (eL = eJ(eL, n, Y.Mm.GUILD_EVENT, 7)),
            (eO = eJ(eO, i, Y.Mm.GUILD_EVENT, 7)));
    })(),
        (t = new Set()),
        (n = {}),
        (i = []),
        (a = []),
        (s = S.A.getFeed(e_.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5),
        s.forEach((e) => {
            if (
                t.has(e.content.id) ||
                (e.content.content_type !== T.ContentInventoryEntryType.PLAYED_GAME &&
                    e.content.content_type !== T.ContentInventoryEntryType.CUSTOM_STATUS &&
                    e.content.content_type !== T.ContentInventoryEntryType.TOP_GAME) ||
                (0, x.I5)(e.content)
            )
                return;
            if ((0, M.zD)(e.content)) {
                if (
                    (null == n[e.content.author_id] && (n[e.content.author_id] = new Set()),
                    n[e.content.author_id].has(e.content.extra.application_id))
                )
                    return;
                n[e.content.author_id].add(e.content.extra.application_id);
            }
            null == eS[e.content.id] &&
                (eS[e.content.id] = { id: e.content.id, type: Y.Mm.ACTIVITY, score: 15, activity: e.content });
            let s = {
                id: e.content.id,
                type: Y.Mm.ACTIVITY,
                score: 15,
                data: { user_id: e.content.author_id, content_id: e.content.id },
            };
            (t.add(e.content.id), (eA[s.id] = s), null != X.getReadTimestamp(s.id) ? a.push(s) : i.push(s));
        }),
        (eL = eJ(eL, i, Y.Mm.ACTIVITY, 5)),
        (eO = eJ(eO, a, Y.Mm.ACTIVITY, 5)),
        eX(),
        null != eT.load_id &&
            ef !== eT.load_id &&
            (eu({
                newTrackingProps: eT,
                hasNewContent: ew,
                unreadFeedItems: eL,
                readFeedItems: eO,
                homeSessionId: "gravity",
            }),
            (ef = eT.load_id ?? null),
            (eT = {})),
        (eR = 0),
        eL.length + eO.length === 0 && (eP = !0),
        es([...eL, ...eO], 0, Y.w5, eS),
        (eY = !1));
}
function e$(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let a = null != X.getReadTimestamp(e.id);
            (e.type === Y.Mm.MESSAGE &&
                e.data.message_context?.external_content_application_id == null &&
                (a = a || !K(e.data.channel_id, e.data.message_id)),
                a ? t.push(e) : e.type === Y.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e));
        }),
        [
            [...i, ...n],
            t.sort((e, t) => {
                var n, i;
                let a, s;
                return (
                    (n = e.id),
                    (i = t.id),
                    null == (a = X.getReadTimestamp(n)) && (a = void 0),
                    (null == (s = X.getReadTimestamp(i)) && (s = void 0), null == a && null == s)
                        ? 0
                        : null == a
                          ? -1
                          : null == s
                            ? 1
                            : s - a
                );
            }),
        ]
    );
}
function eZ(e, t) {
    let n = [],
        i = new Set(ep.map((e) => e.id));
    for (let a of e)
        !(a.type === Y.Mm.RECOMMENDED_GUILDS || i.has(a.id)) &&
            null == X.getReadTimestamp(a.id) &&
            (a.type !== Y.Mm.MESSAGE || (K(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t)) &&
            n.push(a);
    return n;
}
function e0(e, t) {
    return e.filter((e) => !ei(e) || e.data.channel_id !== t);
}
function e1(e, t) {
    ea(t) === en.MUTED && ((ep = e0(ep, e)), (eL = e0(eL, e)), (eO = e0(eO, e)), (eE = e0(eE, e)), (ey = e0(ey, e)));
}
function e5(e, t) {
    return e.filter((e) => !ei(e) || e.data.guild_id !== t);
}
function e3(e, t) {
    ea(t) === en.MUTED && ((ep = e5(ep, e)), (eL = e5(eL, e)), (eO = e5(eO, e)), (eE = e5(eE, e)), (ey = e5(ey, e)));
}
function e6(e) {
    let { type: t, messageId: n, userId: i, emoji: a, reactionType: s } = e,
        d = eS[n];
    if (null == d || d.type !== Y.Mm.MESSAGE) return !1;
    let r = w.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t
        ? (d.message = d.message.addReaction(a, r, { colors: e.colors, reactionType: s }))
        : (d.message = d.message.removeReaction(a, r, s));
}
function e2(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    eL.forEach((e, a) => {
        (a > eR || !eN) && e.type === Y.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let a = ew,
        [s, d] = e$(eE);
    if (((ey = eZ(s, t)), (ew = eN ? a && ey.length >= Y.$P : a && ez(i, eE)), 0 === n.length && a === ew)) return !1;
    0 !== n.length && ((eL = i), (eO = [...eO, ...n]));
}
class e9 extends o.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        (this.waitFor(w.default, N.A, S.A, v.A, G.A, C.Ay, k.A, P, X, b.A, L.A, O.Ay, R.A, j.Ay),
            null != e &&
                ((ep = e.dehydratedItems ?? []).forEach((e) => {
                    eA[e.id] = e;
                }),
                (ex = e.customGuildScores ?? {}),
                (ev = e.customChannelScoresByGuild ?? {}),
                (eb = e.numOpens ?? 0),
                (eI = e.lastOpened ?? 0),
                (eU = e.lastJoinedRecommendedGuild ?? 0),
                (eK = e.lastTakenICYMISurvey ?? 0)));
    }
    getVersion() {
        return eC;
    }
    getDehydratedItems() {
        return ep;
    }
    getNewDehydratedItems() {
        return eE;
    }
    getDehydratedItem(e) {
        return eA[e] ?? null;
    }
    getHydratedItem(e) {
        return eS[e] ?? null;
    }
    getMessage(e) {
        let t = eS[e];
        return null == t || t.type !== Y.Mm.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return eS;
    }
    getUnreadDisplayItems() {
        return eL;
    }
    getNewUnreadDehydratedItems() {
        return ey;
    }
    getReadDisplayItems() {
        return eO;
    }
    getNextIndexToHydrate() {
        return eR;
    }
    getMissingItems() {
        return eM;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === en.MUTED || this.getCustomChannelScore(e, t) === en.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == ev[e] || null == ev[e][t] ? en.UNKNOWN : ea(ev[e][t]);
    }
    getCustomGuildScore(e) {
        return ex[e] ?? 0;
    }
    getCustomGuildScores() {
        return ex;
    }
    hasNewContent() {
        return ew;
    }
    getCurrentStatusAttachments(e) {
        return null == eG || eG[0] !== e ? [] : eG[1];
    }
    getLoadId() {
        return ef;
    }
    hasOpenedEnoughTimes() {
        return 5 === eb;
    }
    hasOpened() {
        return eN;
    }
    getDiscoverableGuilds() {
        return ej;
    }
    videosMuted() {
        return eF;
    }
    isRefreshing() {
        return eY;
    }
    isHydrating() {
        return eH.size > 0;
    }
    notificationItem() {
        return ek;
    }
    getIsTabFocused() {
        return eV;
    }
    isFirstPageHydrated() {
        return eP;
    }
    lastScrollEvent() {
        return eB;
    }
    lastTakenICYMISurvey() {
        return eK;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...eL, ...eO].findIndex((e) => e.type === Y.Mm.RECOMMENDED_GUILDS)
            : [...eL, ...eO].filter((e) => null != eS[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: ep,
            numOpens: eb,
            customGuildScores: ex,
            customChannelScoresByGuild: ev,
            lastOpened: eI,
            lastJoinedRecommendedGuild: eU,
            lastTakenICYMISurvey: eK,
        };
    }
}
let e4 = new e9(A.h, {
        LOGOUT: function () {
            ((ep = []),
                (eE = []),
                (ey = []),
                (eA = {}),
                (eT = {}),
                (eS = {}),
                (eM = {}),
                (ef = null),
                (ex = {}),
                (ev = {}),
                (eC = 0),
                (eD = !1),
                (ew = !1),
                (eN = !1),
                (eL = []),
                (eO = []),
                (eR = 0),
                (eI = 0),
                (eU = 0),
                (eF = !0),
                (eY = !1),
                (eH = new Set()),
                (ek = null),
                (eV = !1),
                (eP = !1),
                (eG = null),
                (eB = 0));
        },
        LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
            let { messageItem: t, customStatusItem: n } = e;
            if (null != n) return ((ek = n), null != ef && ((eE = eE.length > 0 ? eE : [...ep]), eq(), eQ()), !0);
            if (null != t) {
                let e = {
                    id: t.message.id,
                    type: Y.Mm.MESSAGE,
                    score: 50,
                    data: {
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        guild_id: t.guild_id,
                        channel_type: ee.rbe.GUILD_TEXT,
                    },
                };
                if (
                    ((eA[t.message.id] = e),
                    (eS[t.message.id] = { ...e, message: (0, D.rh)(t.message) }),
                    null == ef && null == eT)
                ) {
                    let [t, n] = e$((ep = [e, ...ep]));
                    ((eL = t), (eO = n));
                } else ((eE = [e, ...eE]), eQ());
                return !0;
            }
            return !1;
        },
        LOAD_ICYMI_DEHYDRATED: function (e) {
            let t,
                { items: n, loadId: i, startTime: a, isInitialLoad: s, isReloading: d } = e;
            ((t = new Set(Y.H8)),
                (eE = n
                    .filter((e) => t.has(e.type))
                    .filter(eW)
                    .map((e) => {
                        if (e.type === Y.Mm.MESSAGE && null != e.data.message_context) {
                            let t = {};
                            (null != e.data.message_context.reply_message_id &&
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
                                (e.data.message_context = t));
                        }
                        return e;
                    })),
                eq(),
                (eT = { load_id: i, load_time_millis: Date.now() - a, feed_item_ids: eE.map((e) => e.id) }));
            let [r, l] = e$(eE);
            if (((ey = eZ(r)), !eN || 0 === eC || s))
                ((eC = 0), !eV && ez(r, eE) ? ((ew = !0), (eD = !0)) : (ew = !1), eQ({ newUnread: r, newRead: l }));
            else {
                eC > 0 && (ek = null);
                let e = ey.length > Y.$P;
                (d || (ew = e), e && (es([...r, ...l], 0, Y.w5, eS), r.length + l.length === 0 && (eP = !0)));
            }
            eu({
                newTrackingProps: eT,
                hasNewContent: ew,
                unreadFeedItems: r,
                readFeedItems: l,
                homeSessionId: eV ? "foreground_load" : "background_load",
            });
        },
        LOAD_ICYMI_HYDRATED: function (e) {
            let {
                messageItems: t,
                activityItems: n,
                requestMessageItems: i,
                requestActivityItems: a,
                startingIndex: s,
                endingIndex: d,
            } = e;
            ((eP = !0), (eS = { ...eS }));
            let r = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
                l = n.reduce((e, t) => ((e[t.id] = t), e), {});
            (i.forEach((e) => {
                let t = r[e.message_id];
                if (null == t) {
                    eM[e.message_id] = !0;
                    return;
                }
                let n = eA[e.message_id];
                null == n &&
                    (n = {
                        id: e.message_id,
                        type: Y.Mm.MESSAGE,
                        score: -1,
                        data: {
                            guild_id: t.guild_id,
                            channel_id: t.channel_id,
                            message_id: t.message.id,
                            channel_type: ee.rbe.GUILD_TEXT,
                            has_mention: !1,
                        },
                    });
                let i = b.A.getMessage(t.channel_id, t.message.id);
                if (null != i) {
                    let e = ed(t, n);
                    eS[t.message.id] = { ...e, message: i };
                } else eS[t.message.id] = ed(t, n);
            }),
                a.forEach((e) => {
                    let t = l[e.content_id];
                    if (null == t) {
                        eM[e.content_id] = !0;
                        return;
                    }
                    let n = eA[e.content_id];
                    if (null == n) {
                        eM[e.content_id] = !0;
                        return;
                    }
                    eS[t.id] = { ...n, activity: t };
                }),
                s === eR && (eR = d),
                eH.delete((0, Z.V)(s, d)));
        },
        LOAD_ICYMI_CUSTOM_SCORES: function (e) {
            let { scores: t } = e;
            for (let e of t)
                for (let t of ((ex[e.guild_id] = e.guild_score),
                e3(e.guild_id, e.guild_score),
                Object.keys(e.custom_channel_scores)))
                    (null == ev[e.guild_id] && (ev[e.guild_id] = {}),
                        (ev[e.guild_id][t] = e.custom_channel_scores[t]),
                        e1(t, e.custom_channel_scores[t]));
            ((ex = { ...ex }), (ev = { ...ev }));
        },
        LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
            let { guilds: t } = e;
            ((ej = t.map((e) => (0, F.jE)(e.guild))), eX());
        },
        ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
            let { channelScores: t, guildId: n, guildScore: i } = e;
            (null != i && ((ex[n] = i), e3(n, i), (ex = { ...ex })),
                t?.forEach((e) => {
                    let { channelId: t, score: i } = e;
                    (null == ev[n] && (ev[n] = {}), (ev[n][t] = i), e1(t, i), (ev = { ...ev }));
                }));
        },
        RELOAD_ICYMI: function () {
            if (0 === eE.length) return !1;
            (eQ(), (ew = !1));
        },
        ICYMI_TAB_OPENED: function () {
            ((eN = !0), (eI = Date.now()), eD && ((eD = !1), (ew = !1)), eb < 5 && eb++);
        },
        ICYMI_FEEDBACK_GIVEN: function () {
            eb = 6;
        },
        MESSAGE_REACTION_ADD: e6,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { messageId: t, reactions: n } = e,
                i = eS[t];
            if (null == i || i.type !== Y.Mm.MESSAGE) return !1;
            let a = w.default.getId();
            i.message = i.message.addReactionBatch(n, a);
        },
        MESSAGE_REACTION_REMOVE: e6,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { messageId: t } = e,
                n = eS[t];
            if (null == n || n.type !== Y.Mm.MESSAGE) return !1;
            n.message = n.message.set("reactions", []);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { messageId: t, emoji: n } = e,
                i = eS[t];
            if (null == i || i.type !== Y.Mm.MESSAGE) return !1;
            i.message = i.message.removeReactionsForEmoji(n);
        },
        CHANNEL_ACK: e2,
        MESSAGE_ACK: e2,
        ICYMI_JOINED_RECOMMENDED_GUILD: function () {
            eU = Date.now();
        },
        ICYMI_SET_VIDEOS_MUTED: function (e) {
            let { muted: t } = e;
            eF = t;
        },
        ICYMI_SET_REFRESHING: function (e) {
            let { refreshing: t } = e;
            eY = t;
        },
        LOAD_ICYMI_HYDRATED_ATTEMPT: function (e) {
            let { hydrationId: t } = e;
            eH.add(t);
        },
        LOAD_ICYMI_HYDRATED_FAILED: function (e) {
            let { hydrationId: t } = e;
            eH.delete(t);
        },
        ICYMI_SET_FOCUSED_TAB: function (e) {
            let { focused: t } = e;
            eV = t;
        },
        LOAD_ICYMI_CURRENT_STATUS_MEDIA: function (e) {
            let { attachments: t, createdAtMs: n } = e;
            if (null == t || 0 === t.length) {
                eG = null;
                return;
            }
            eG = [n, [...t]];
        },
        ICYMI_SCROLL_EVENT: function (e) {
            let { timestamp: t } = e;
            eB = t;
        },
        ICYMI_TAKE_SURVEY: function (e) {
            let { takenAt: t } = e;
            eK = t;
        },
    }),
    e7 = new Set(["end", "loading", "bottomLoading", "icymiHeader", "recommendedGuilds"]);
function e8(e) {
    let t = [...e4.getUnreadDisplayItems(), ...e4.getReadDisplayItems()],
        n = null;
    for (let t = e.length - 1; t >= 0; t--) {
        let i = e[t];
        if (null != i && !e7.has(i.item.data.kind)) {
            n = i.item.id;
            break;
        }
    }
    if (null == n) return [];
    let i = t.findIndex((e) => e.id === n);
    return i < 0 ? [] : t.slice(0, i + 1);
}
async function te() {
    let e = e4.getUnreadDisplayItems(),
        t = e4.getReadDisplayItems(),
        n = e4.getNextIndexToHydrate();
    await es([...e, ...t], n, n + Y.w5, e4.getHydratedItems());
}
async function tt(e) {
    let { ack: t } = await Promise.resolve().then(n.bind(n, 334738)),
        { AnalyticsObjectTypes: i } = await Promise.resolve().then(n.bind(n, 652215));
    (e4.getDehydratedItems().forEach((n) => {
        n.type === Y.Mm.MESSAGE &&
            n.data.channel_type === ee.rbe.GUILD_ANNOUNCEMENT &&
            B.default.compare(O.Ay.ackMessageId(n.data.channel_id), n.data.message_id) >= 0 &&
            t(
                n.data.channel_id,
                { object: e, objectType: i.ACK_SEMI_AUTOMATIC },
                !0,
                !0,
                B.default.atPreviousMillisecond(n.data.message_id),
            );
    }),
        await $.A.clearReadStates(),
        await $.A.fetchDehydrated({ isReloading: !0, forceRefresh: !0 }),
        await $.A.reloadICYMITab(),
        await $.A.getGuildChannelScores(),
        $.A.getRecommendedGuilds());
}
function tn(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "message":
            if (e.channelType === ee.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            return "message";
        case "guildEvent":
            return "guild_event";
        case "contentInventory":
            if (e.data.content.content_type === T.ContentInventoryEntryType.CUSTOM_STATUS)
                return "hotwheels_custom_status";
            return "hotwheels_gaming_activity";
        case "recommendedGuilds":
            return "recommended_guilds";
        case "forumThread":
            return "forum_thread";
        case "icymiHeader":
            return "icymi_header";
        default:
            return "unknown";
    }
}
let ti = {
    trackItemInteraction(e) {
        ec.default.track(ee.HAw.FEED_ITEM_INTERACTED, {
            load_id: e4.getLoadId(),
            feed_item_type: e.type,
            feed_item_id: e.id,
            home_session_id: "gravity",
            action_type: e.actionType,
            feed_item_index: e4.getIndexInHydratedFeed(e.id),
            icymi_session_id: e.icymiSessionId,
            impression_id: e.impressionId,
            ux_variation: e.uxVariation,
            session_interaction_index: e.sessionInteractionIndex,
        });
    },
    trackItemShortImpression(e, t, n) {
        ec.default.track(ee.HAw.FEED_ITEM_SEEN_BATCH, {
            load_id: e4.getLoadId(),
            home_session_id: "gravity",
            feed_item_ids: e.map((e) => e.item.id),
            feed_item_types: e.map((e) => tn(e.item)),
            num_items: e.length,
            all_feed_item_ids: t.map((e) => e.id),
            all_feed_item_types: t.map((e) => e.type),
            num_all_items: t.length,
            all_feed_item_indices: t.map((e, t) => t),
            feed_version: n,
            version: 3,
        });
    },
    trackItemLongImpression(e, t, n) {
        ec.default.track(ee.HAw.FEED_ITEM_SEEN_LONG, {
            load_id: e4.getLoadId(),
            home_session_id: "gravity",
            feed_item_ids: e.map((e) => e.item.id),
            feed_item_types: e.map((e) => tn(e.item)),
            num_items: e.length,
            all_feed_item_ids: t.map((e) => e.id),
            all_feed_item_types: t.map((e) => e.type),
            num_all_items: t.length,
            all_feed_item_indices: t.map((e, t) => t),
            feed_version: n,
            version: 3,
        });
    },
    trackFeedShown(e) {
        ec.default.track(ee.HAw.FEED_SHOWN, {
            load_id: e4.getLoadId(),
            home_session_id: e.homeSessionId,
            variant: e.variant,
        });
    },
    trackFeedFirstScrollStarted() {
        ec.default.track(ee.HAw.HOME_FIRST_SCROLL_STARTED, { load_id: e4.getLoadId(), home_session_id: "gravity" });
    },
    trackFeedFeedbackPromptViewed() {
        ec.default.track(ee.HAw.HOME_FEEDBACK_PROMPT_VIEWED);
    },
    trackFeedFeedbackSubmitted(e) {
        ec.default.track(ee.HAw.HOME_FEEDBACK_SUBMITTED, { load_id: e4.getLoadId(), home_session_id: "gravity", ...e });
    },
    trackFeedOnboardingScreenSkipped(e) {
        ec.default.track(ee.HAw.ICYMI_ONBOARDING_SCREEN_SKIPPED, { location: e.location });
    },
    trackFeedOnboardingGuildToggled(e) {
        ec.default.track(ee.HAw.ICYMI_ONBOARDING_GUILD_TOGGLED, { guild_id: e.guildId, toggled: e.toggled });
    },
    trackFeedOnboardingCategoryToggled(e) {
        ec.default.track(ee.HAw.ICYMI_ONBOARDING_CATEGORY_TOGGLED, { category_id: e.categoryId, toggled: e.toggled });
    },
    trackFeedEmptyLoadingSeen() {
        ec.default.track(ee.HAw.ICYMI_FEED_EMPTY_LOADING_SEEN, { load_id: e4.getLoadId(), version: e4.getVersion() });
    },
    trackFeedEmptyLoadingComplete(e) {
        ec.default.track(ee.HAw.ICYMI_FEED_EMPTY_LOADING_COMPLETE, {
            load_id: e4.getLoadId(),
            dwell_time_ms: e.dwellTimeMs,
            version: e4.getVersion(),
        });
    },
    trackFeedEmptyLoadingAbandoned(e) {
        ec.default.track(ee.HAw.ICYMI_FEED_EMPTY_LOADING_ABANDONED, {
            load_id: e4.getLoadId(),
            dwell_time_ms: e.dwellTimeMs,
            version: e4.getVersion(),
        });
    },
    trackFeedSessionStarted(e) {
        ec.default.track(ee.HAw.FEED_SESSION_STARTED, {
            load_id: e4.getLoadId(),
            version: e4.getVersion(),
            session_start_time_ms: e.sessionStartTimeMs,
            icymi_session_id: e.icymiSessionId,
            previous_icymi_session_count: e.previousIcymiSessionCount,
            ux_variation: e.uxVariation,
        });
    },
    trackFeedSessionCompleted(e) {
        ec.default.track(ee.HAw.FEED_SESSION_COMPLETED, {
            load_id: e4.getLoadId(),
            version: e4.getVersion(),
            session_duration_ms: e.sessionDurationMs,
            session_start_time_ms: e.sessionStartTimeMs,
            session_end_time_ms: e.sessionEndTimeMs,
            impression_count: e.impressionCount,
            unique_impression_count: e.uniqueImpressionCount,
            icymi_session_id: e.icymiSessionId,
            feed_reload_count: e.feedReloadCount,
            feed_visible_items_changed_count: e.feedDwelledItemsChangedCount,
            feed_fetch_count: e.feedFetchCount,
            impression_item_types: e.impressionItemTypes,
            latest_dwell_start_time_ms: e.latestDwellStartTimeMs,
            previous_icymi_session_count: e.previousIcyMiSessionCount,
            ux_variation: e.uxVariation,
            interaction_count: e.interactionCount,
            dwelled_count: e.dwelledCount,
            unique_dwelled_count: e.uniqueDwelledCount,
        });
    },
    trackFeedItemDwell1s(e) {
        ec.default.track(ee.HAw.FEED_ITEM_1S_DWELLED, {
            load_id: e4.getLoadId(),
            version: e4.getVersion(),
            impression_id: e.impressionId,
            item_id: e.itemId,
            item_type: e.itemType,
            dwell_start_time_ms: e.dwellStartTimeMs,
            icymi_session_id: e.icymiSessionId,
            trigger_type: e.triggerType,
            item_occurence_count_in_session: e.itemOccurenceCountInSession,
            item_feed_index: e.itemFeedIndex,
            is_initially_visible: e.isInitiallyVisible,
            item_score: e.itemScore,
            item_channel_type: e.itemChannelType ?? null,
            item_card_height: e.itemCardHeight,
            is_dwelling: e.isDwelling,
            interaction_action_types: e.interactionActionTypes,
            interaction_count: e.interactionCount,
            ux_variation: e.uxVariation,
            session_impression_index: e.sessionImpressionIndex,
        });
    },
    trackFeedItemDwelled(e) {
        ec.default.track(ee.HAw.FEED_ITEM_DWELLED, {
            load_id: e4.getLoadId(),
            version: e4.getVersion(),
            impression_id: e.impressionId,
            dwell_time_ms: e.dwellTimeMs,
            item_id: e.itemId,
            item_type: e.itemType,
            dwell_start_time_ms: e.dwellStartTimeMs,
            dwell_end_time_ms: e.dwellEndTimeMs,
            icymi_session_id: e.icymiSessionId,
            trigger_type: e.triggerType,
            item_occurence_count_in_session: e.itemOccurenceCountInSession,
            item_feed_index: e.itemFeedIndex,
            is_initially_visible: e.isInitiallyVisible,
            item_score: e.itemScore,
            item_channel_type: e.itemChannelType ?? null,
            item_card_height: e.itemCardHeight,
            ux_variation: e.uxVariation,
            interaction_action_types: e.interactionActionTypes,
            interaction_count: e.interactionCount,
            session_impression_index: e.sessionImpressionIndex,
        });
    },
    trackFeedItemActioned(e) {
        ec.default.track(ee.HAw.FEED_ITEM_ACTIONED, {
            load_id: e4.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: e4.getVersion(),
            session_action_index: e.sessionActionIndex,
            item_id: e.itemId,
            item_type: e.itemType,
            impression_id: e.impressionId ?? null,
            action_gesture_type: e.actionParameters.actionGestureType,
            action_target_element: e.actionParameters.actionTargetElement,
            action_intent_type: e.actionParameters.actionIntentType,
            action_destination_type: e.actionParameters.actionDestinationType,
        });
    },
    trackFeedFilterActioned(e) {
        ec.default.track(ee.HAw.FEED_FILTER_ACTIONED, {
            load_id: e4.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: e4.getVersion(),
            session_action_index: e.sessionActionIndex,
            filter_setting_context: e.filterParameters.filterSettingContext,
            filter_target_type: e.filterParameters.filterTargetType,
            target_guild_id: e.filterParameters.targetGuildId ?? null,
            target_channel_id: e.filterParameters.targetChannelId ?? null,
            previous_tune_setting: e.filterParameters.previousTuneSetting ?? null,
            new_tune_setting: e.filterParameters.newTuneSetting ?? null,
            previous_out_setting: e.filterParameters.previousOutSetting ?? null,
            new_out_setting: e.filterParameters.newOutSetting ?? null,
            item_id: e.itemId ?? null,
            item_type: e.itemType ?? null,
            impression_id: e.impressionId ?? null,
        });
    },
    trackFeedPageActioned(e) {
        ec.default.track(ee.HAw.FEED_PAGE_ACTIONED, {
            load_id: e4.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: e4.getVersion(),
            session_action_index: e.sessionActionIndex,
            action_gesture_type: e.actionParameters.actionGestureType,
            action_target_element: e.actionParameters.actionTargetElement,
            action_intent_type: e.actionParameters.actionIntentType,
            action_destination_type: e.actionParameters.actionDestinationType,
        });
    },
};
function ta(e) {
    return s.useCallback(async () => {
        (ti.trackFeedShown({ variant: e ? "DotShown" : "NoDotShown", homeSessionId: "gravity_refresh" }),
            await $.A.fetchDehydrated({ isReloading: !0 }),
            await $.A.reloadICYMITab(),
            await $.A.getGuildChannelScores(),
            $.A.getRecommendedGuilds());
    }, [e]);
}
var ts = n(819169);
function td(e, t, n) {
    switch (t.type) {
        case Y.Mm.MESSAGE:
            if (t.message.id === t.message.channel_id && null != t.threadChannel)
                return {
                    id: e.id,
                    timestamp: Date.now(),
                    channelType: e.data.channel_type,
                    data: { kind: "forumThread", message: t.message, threadChannel: t.threadChannel },
                    score: e.score,
                    debugScore: JSON.stringify(e.score_components),
                    unread: n,
                };
            return {
                id: e.id,
                timestamp: Date.now(),
                channelType: e.data.channel_type,
                data: {
                    kind: "message",
                    message: t.message,
                    mentioned: e.data.has_mention,
                    messageContext: e.data.message_context,
                },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case Y.Mm.ACTIVITY:
        case Y.Mm.CUSTOM_STATUS:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "contentInventory", content: t.activity },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case Y.Mm.GUILD_EVENT:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "guildEvent", eventId: t.event_id },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case Y.Mm.RECOMMENDED_GUILDS:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "recommendedGuilds" },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        default:
            return null;
    }
}
let tr = 15 * U.A.Millis.MINUTE;
var tl = n(939249),
    to = n(976860),
    tc = n(378570),
    tu = n(402860),
    tm = n(834730),
    t_ = n(51183),
    tg = n(208971),
    th = n(25101);
function tp(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content.extra : null,
        i = n?.type === "custom_status_extra" ? n : null,
        s = (0, tg.G)(i?.status);
    if (null == i) return null;
    let d = {
            id: i.emoji_id?.toString() === "0" ? null : i.emoji_id,
            name: i.emoji_name ?? "",
            animated: i.emoji_animated,
        },
        r = null != d.id || d.name.length > 0,
        l = null != s && s.length > 0;
    return (0, a.jsx)("div", {
        className: th.kL,
        children: (0, a.jsx)("div", {
            className: th.Nr,
            children: (0, a.jsxs)("div", {
                className: th.Qs,
                children: [
                    r &&
                        (0, a.jsx)("div", {
                            className: th.qq,
                            children: (0, a.jsx)(t_.A, { emoji: d, animate: !0, hideTooltip: !1 }),
                        }),
                    l &&
                        (0, a.jsx)(tm.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            className: th.qS,
                            children: s,
                        }),
                ],
            }),
        }),
    });
}
var tf = n(429913),
    tI = n(287809),
    tE = n(886072);
function ty(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content : null,
        i = n?.extra,
        s = n?.author_id,
        d = n?.content_type,
        r = i?.type === "played_game_extra" || i?.type === "launched_activity_extra" ? i.application_id : void 0,
        l = (0, tf.h)(r),
        c = (0, o.bG)([tI.default], () => (null != s ? tI.default.getUser(s) : null), [s]),
        u = d === T.ContentInventoryEntryType.TOP_GAME,
        m = l?.getIconURL(240);
    return i?.type !== "played_game_extra" || "contentInventory" !== t.data.kind || null == l || null == c || null == m
        ? null
        : (0, a.jsx)("div", {
              className: tE.kL,
              children: (0, a.jsxs)("div", {
                  className: tE.Nr,
                  children: [
                      (0, a.jsx)("img", { src: m, alt: l.name, className: tE.Gt }),
                      (0, a.jsxs)("div", {
                          className: tE.Vx,
                          children: [
                              (0, a.jsx)(tm.E, { variant: "text-md/semibold", color: "text-strong", children: l.name }),
                              u &&
                                  (0, a.jsx)("div", {
                                      className: tE.qS,
                                      children: (0, a.jsx)(tm.E, {
                                          variant: "text-xs/semibold",
                                          color: "text-brand",
                                          children: et.intl.string(et.t["/50eHi"]),
                                      }),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
var tT = n(177953),
    tA = n(47167),
    tS = n(713654),
    tM = n(435328),
    tx = n(563312),
    tv = n(826383),
    tC = n(9448),
    tD = n(974930),
    tw = n(641786);
function tN(e) {
    let { eventId: t } = e,
        n = (0, o.bG)([C.Ay], () => C.Ay.getGuildScheduledEvent(t), [t]),
        i = (0, o.bG)([k.A], () => k.A.getGuild(n?.guild_id), [n]),
        d = (0, o.bG)([N.A], () => N.A.getChannel(n?.channel_id), [n]),
        r = (0, tx.nh)(t, null),
        l = null != n && (0, C.Fd)(n),
        c = null != n ? (0, tD.G3)(n) : null,
        u = (0, tv.A)(n?.guild_id, n?.id, c),
        m = r?.startTime.toISOString(),
        { startDateTimeString: _ } = s.useMemo(
            () =>
                l ? { startDateTimeString: et.intl.string(et.t.TxqPQR) } : (0, tD.CC)(m ?? new Date().toISOString()),
            [m, l],
        ),
        g = (0, tA.Ay)(d),
        h = null != n ? (0, tC.oF)(n) : void 0,
        p = null != d ? (0, tS.gU)(d) : null;
    if (null == n || null == i) return null;
    let f = null != n.description && n.description.length > 0;
    return (0, a.jsxs)("div", {
        className: tw.Qo,
        children: [
            (0, a.jsx)("div", {
                className: tw.At,
                children: (0, a.jsx)(tm.E, {
                    variant: "text-sm/semibold",
                    color: l ? "status-positive" : "text-brand",
                    children: _,
                }),
            }),
            (0, a.jsx)(tm.E, { variant: "text-lg/semibold", className: f ? tw.X_ : void 0, children: n.name }),
            f &&
                (0, a.jsx)(tm.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: tw.tj,
                    children: (0, tM.l)(n.description ?? "", !0, { guildId: i.id }),
                }),
            (0, a.jsx)("hr", { className: tw.Yl }),
            (0, a.jsxs)("div", {
                className: tw.oo,
                children: [
                    (0, a.jsxs)("div", {
                        className: tw.ik,
                        children: [
                            (0, a.jsx)(tT.n, { size: "xs", color: "currentColor" }),
                            (0, a.jsx)(tm.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: et.intl.format(et.t["+DLsD8"], { count: u }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tw.ik,
                        children: [
                            null != p ? (0, a.jsx)(p, { size: "xs", color: "currentColor" }) : null,
                            (0, a.jsx)(tm.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: tw.HA,
                                children: g ?? (null != h ? (0, tM.y)(h, !0) : null),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tG = n(837381),
    tk = n(384231),
    tb = n(763754),
    tL = n(491182),
    tO = n(860227),
    tR = n(439762),
    tj = n(699352),
    tU = n(715628),
    tF = n(752636),
    tY = n(270642),
    tH = n(268719),
    tV = n(69282),
    tP = n(862161),
    tB = n(13673);
let tK = s.memo(function (e) {
    let {
            message: t,
            className: n,
            onContextMenu: i,
            onClick: s,
            hideSimpleEmbedContent: d = !0,
            channel: l,
            isGroupStart: c,
            animateAvatar: u,
            subscribeToComponentDispatch: m,
            renderThreadAccessory: _,
            ...g
        } = e,
        h = t.type === ee.lAJ.POLL_RESULT || (e.disableInteraction ?? !1),
        p = t.isFirstMessageInForumPost(l),
        f = (0, tk.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        {
            content: I,
            hasSpoilerEmbeds: E,
            hasBailedAst: y,
        } = (0, tR.A)(t, {
            hideSimpleEmbedContent: d,
            allowList: p || f,
            allowHeading: p || f,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        T = (0, tG.rm)(t.id),
        A = (0, tb.Ay)(t),
        S = (0, o.bG)(
            [N.A],
            () => t.hasFlag(ee.pr7.HAS_THREAD) && N.A.getChannel(B.default.castMessageIdAsChannelId(t.id)),
        ),
        M = (0, tV.Xx)({ guildId: l.guild_id, roleId: A.iconRoleId }),
        x = (0, tO.fF)(t),
        v = (0, tO.ZD)(t);
    return (0, a.jsx)(tL.A, {
        compact: !1,
        className: r()(n, tP.i, { [tB.M1]: (0, D.ec)(t), [tB.XN]: h }),
        disableInteraction: h,
        childrenExecutedCommand: (0, tH.A)(t, l, !1),
        childrenHeader: (0, tF.A)({
            message: t,
            channel: l,
            author: A,
            guildId: l.guild_id,
            compact: !1,
            animateAvatar: u,
            isGroupStart: !0,
            roleIcon: M,
            hideTimestamp: !0,
            hideGuildTag: !1,
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, tj.J)(e, E, y),
        childrenMessageContent: (0, tU.A)(e, I),
        childrenSystemMessage: (0, tY.A)({ ...e, disableInteraction: h }),
        onContextMenu: i,
        onClick: s,
        hasThread: _ && null != S && t.hasFlag(ee.pr7.HAS_THREAD),
        hasReply: !1,
        "aria-labelledby": x,
        "aria-describedby": v,
        author: A,
        ...T,
        ...g,
    });
});
function tz(e) {
    let { item: t } = e,
        {
            channelId: n,
            messageIds: i,
            title: d,
        } = s.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                    return { channelId: t.data.message.channel_id, messageIds: [t.data.message.id], title: void 0 };
                case "forumThread":
                    return { channelId: t.data.threadChannel.id, messageIds: [t.data.message.id], title: void 0 };
                default:
                    return { channelId: void 0, messageIds: [], title: void 0 };
            }
        }, [t]),
        r = (0, o.bG)([N.A], () => (null != n ? N.A.getChannel(n) : null), [n]),
        l = (0, o.bG)([k.A], () => (r?.guild_id != null ? k.A.getGuild(r.guild_id) : null), [r]),
        c = (0, o.yK)(
            [e4, b.A],
            () => (null == n ? [] : i.map((e) => e4.getMessage(e) ?? b.A.getMessage(n, e)).filter((e) => null != e)),
            [n, i],
        );
    return null == r || null == l || 0 === c.length
        ? null
        : (0, a.jsxs)("div", {
              className: tw.kL,
              children: [
                  null != d
                      ? (0, a.jsx)("div", {
                            className: tw.gn,
                            children: (0, a.jsx)("div", { className: tw.DD, children: d }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: tw.MJ,
                      children: c.map((e) =>
                          (0, a.jsx)(
                              tK,
                              {
                                  channel: r,
                                  message: e,
                                  renderThreadAccessory: !1,
                                  disableReactionCreates: !1,
                                  disableReactionUpdates: !1,
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function tW(e) {
    let { item: t } = e;
    switch (t.data.kind) {
        case "guildEvent":
            return (0, a.jsx)(tN, { eventId: t.data.eventId });
        case "message":
        case "forumThread":
            return (0, a.jsx)(tz, { item: t });
        case "contentInventory":
            switch (t.data.content.content_type) {
                case T.ContentInventoryEntryType.CUSTOM_STATUS:
                    return (0, a.jsx)(tp, { item: t });
                case T.ContentInventoryEntryType.PLAYED_GAME:
                case T.ContentInventoryEntryType.TOP_GAME:
                    return (0, a.jsx)(ty, { item: t });
                default:
                    return (0, a.jsx)("div", { children: "Unsupported content inventory type" });
            }
        default:
            return (0, a.jsx)("div", { children: "Unknown item type" });
    }
}
var tJ = n(548118),
    tX = n(995273),
    tq = n(668499);
function tQ(e) {
    let { item: t } = e,
        n = s.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                case "guildEvent":
                case "forumThread":
                    return "guild";
                case "contentInventory":
                    return "user";
                default:
                    return "unknown";
            }
        }, [t]),
        i = s.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                    return t.data.message.channel_id;
                case "forumThread":
                    return t.data.threadChannel.id;
                default:
                    return;
            }
        }, [t]),
        d = s.useMemo(() => {
            if ("guildEvent" === t.data.kind) {
                let e = C.Ay.getGuildScheduledEvent(t.data.eventId);
                return e?.guild_id;
            }
        }, [t]),
        r = s.useMemo(() => {
            if ("contentInventory" === t.data.kind) return t.data.content.author_id;
        }, [t]),
        l = s.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                case "forumThread":
                    return B.default.extractTimestamp(t.data.message.id);
                case "guildEvent":
                    return B.default.extractTimestamp(t.data.eventId);
                default:
                    return t.timestamp;
            }
        }, [t]),
        c = (0, o.bG)([N.A], () => N.A.getChannel(i), [i]),
        u = (0, tA.Ay)(c),
        m = c?.guild_id ?? d,
        _ = (0, o.bG)([k.A], () => (null != m ? k.A.getGuild(m) : null), [m]),
        g = (0, o.bG)([tI.default], () => (null != r ? tI.default.getUser(r) : null), [r]);
    return "unknown" === n
        ? null
        : (0, a.jsx)("div", {
              className: tq.kL,
              children: (0, a.jsxs)("div", {
                  className: tq.wx,
                  children: [
                      (function () {
                          if ("guild" === n && null != _)
                              return (0, a.jsx)(tJ.Ay, {
                                  guild: _,
                                  size: "Medium",
                                  active: !1,
                                  showBadge: !1,
                                  textScale: 1,
                                  showTooltip: !1,
                                  tooltipPosition: "top",
                                  animate: !1,
                              });
                          if ("user" === n && null != g) {
                              let e = g.getAvatarURL(void 0, 50);
                              return (0, a.jsx)("img", { src: e, alt: g.username, className: tq.my });
                          }
                          return null;
                      })(),
                      (0, a.jsxs)("div", {
                          className: tq.Se,
                          children: [
                              (0, a.jsx)("div", {
                                  className: tq.$,
                                  children: (0, a.jsxs)("div", {
                                      className: tq.gH,
                                      children: [
                                          "guild" === n && null != _
                                              ? (0, a.jsx)(tm.E, {
                                                    variant: "text-md/semibold",
                                                    color: "text-strong",
                                                    className: tq.DD,
                                                    children: _.name,
                                                })
                                              : "user" === n && null != g
                                                ? (0, a.jsx)(tm.E, {
                                                      variant: "text-md/semibold",
                                                      color: "text-strong",
                                                      className: tq.DD,
                                                      children: g.username,
                                                  })
                                                : null,
                                          (0, a.jsx)(tm.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              className: tq.vE,
                                              children: (0, tX.jb)(l),
                                          }),
                                      ],
                                  }),
                              }),
                              (function () {
                                  let e = (function () {
                                      switch (t.data.kind) {
                                          case "message":
                                              if (t.channelType === ee.rbe.GUILD_ANNOUNCEMENT)
                                                  return et.intl.string(et.t["8P08G9"]);
                                              return et.intl.string(et.t.hMFMY9);
                                          case "guildEvent":
                                              return et.intl.string(et.t["6pFsLQ"]);
                                          case "forumThread":
                                              return et.intl.string(et.t.bYNuVx);
                                          case "contentInventory":
                                              switch (t.data.content.content_type) {
                                                  case T.ContentInventoryEntryType.CUSTOM_STATUS:
                                                      return et.intl.string(et.t.fxOLPR);
                                                  case T.ContentInventoryEntryType.TOP_GAME:
                                                  case T.ContentInventoryEntryType.PLAYED_GAME:
                                                      return et.intl.string(et.t.ktOTRQ);
                                                  default:
                                                      return `${t.data.content.content_type}`;
                                              }
                                          default:
                                              return "";
                                      }
                                  })();
                                  if ("user" === n)
                                      return (0, a.jsx)("div", {
                                          className: tq.VA,
                                          children: (0, a.jsx)(tm.E, {
                                              variant: "text-sm/medium",
                                              color: "text-subtle",
                                              tag: "span",
                                              className: tq.o4,
                                              children: e,
                                          }),
                                      });
                                  if (null != c && null != e) {
                                      let t = (0, tS.gU)(c, _);
                                      return (0, a.jsxs)("div", {
                                          className: tq.VA,
                                          children: [
                                              (0, a.jsx)(tm.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: tq.o4,
                                                  children: e,
                                              }),
                                              (0, a.jsx)(tm.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: tq.o4,
                                                  children: et.intl.string(et.t.CHUAYk),
                                              }),
                                              (0, a.jsxs)(tm.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: tq.o4,
                                                  children: [
                                                      null != t &&
                                                          (0, a.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: tq.p,
                                                          }),
                                                      u,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, a.jsx)("div", {
                                            className: tq.VA,
                                            children: (0, a.jsx)(tm.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                tag: "span",
                                                className: tq.o4,
                                                children: e,
                                            }),
                                        })
                                      : null;
                              })(),
                          ],
                      }),
                  ],
              }),
          });
}
var t$ = n(301690);
function tZ(e) {
    let { item: t } = e,
        n = s.useCallback(
            (e) => {
                if (
                    null ==
                    e.target.closest(
                        'img, video, audio, [class*="imageWrapper"], [class*="embedWrapper"], [class*="attachment"], [class*="mediaPlayer"]',
                    )
                )
                    switch (t.data.kind) {
                        case "message":
                            (0, tc.ci)(t.data.message.channel_id, t.data.message.id);
                            break;
                        case "guildEvent": {
                            let e = C.Ay.getGuildScheduledEvent(t.data.eventId);
                            null != e && (0, to.pX)(ee.BVt.GUILD_EVENT_DETAILS(e.guild_id, e.id));
                            break;
                        }
                        case "forumThread":
                            (0, tc.ci)(t.data.threadChannel.id, t.data.message.id);
                            break;
                        case "contentInventory":
                            (0, tu.openUserProfileModal)({ userId: t.data.content.author_id });
                    }
            },
            [t],
        );
    return (0, a.jsxs)(tl.D, {
        className: t$.k,
        onClick: n,
        children: [
            (0, a.jsx)(tQ, { item: t }),
            (0, a.jsx)("div", { className: t$.o, children: (0, a.jsx)(tW, { item: t }) }),
        ],
    });
}
var t0 = n(710028);
let t1 = function (e) {
    let t,
        n,
        i,
        d,
        r,
        { scrollContainerRef: l } = e,
        c = (0, o.bG)([e4], () => e4.notificationItem(), []),
        { showDot: u } = { value: 0, showDot: (0, o.bG)([e4], () => e4.hasNewContent(), []) },
        m = s.useRef(null),
        [_, g] = s.useState(!1),
        {
            data: h,
            loading: p,
            isRefreshing: f,
            handleOnRefresh: I,
            viewabilityConfigCallbackPairs: E,
        } = (function (e) {
            let { showDot: t, notificationItem: n } = e,
                [i, a] = s.useState(!1),
                {
                    unreadItems: d,
                    readItems: r,
                    allUnreadItemsHydrated: l,
                } = (function () {
                    let e = (0, o.bG)([e4], () => e4.getUnreadDisplayItems()),
                        t = (0, o.bG)([e4], () => e4.getReadDisplayItems()),
                        n = (0, o.bG)([e4], () => e4.getNextIndexToHydrate()),
                        i = (0, o.cf)([e4], () => e4.getHydratedItems()),
                        a = (0, o.bG)([e4], () => e4.getMissingItems());
                    s.useEffect(() => {
                        let e = Date.now() + t.length;
                        $.A.ackGravityItems(t.map((t) => ({ id: t.id, timestamp: e-- }), !0));
                    }, [t]);
                    let d = [],
                        r = [],
                        l = 0;
                    for (let t = 0; t < e.length && !(l >= n); t++) {
                        let n = e[t];
                        if ((l++, a[n.id])) continue;
                        let s = i[n.id];
                        if (
                            (null == s &&
                                n.type === Y.Mm.MESSAGE &&
                                n.data.message_context?.reference_message_id != null &&
                                (s = i[n.data.message_id]),
                            null != s)
                        ) {
                            let e = td(n, s, !0);
                            null != e && d.push(e);
                        }
                    }
                    for (let e = 0; e < t.length && !(l >= n); e++) {
                        let n = t[e];
                        if ((l++, a[n.id])) continue;
                        let s = i[n.id];
                        if (
                            (null == s &&
                                n.type === Y.Mm.MESSAGE &&
                                n.data.message_context?.reference_message_id != null &&
                                (s = i[n.data.message_id]),
                            null != s)
                        ) {
                            let e = td(n, s, !1);
                            null != e && r.push(e);
                        }
                    }
                    return { unreadItems: d, readItems: r, allUnreadItemsHydrated: n >= e.length };
                })(),
                c = (0, o.bG)([e4], () => e4.getVersion(), []),
                u = (0, o.bG)([e4], () => !(e4.isFirstPageHydrated() && c > 0));
            s.useEffect(() => {
                null != e4.getLoadId() && ti.trackFeedShown({ homeSessionId: "gravity" });
            }, [c]);
            let m = (0, o.bG)([e4], () => e4.isRefreshing(), []),
                _ = (0, o.bG)([e4], () => e4.isHydrating(), []),
                [g, h] = s.useState([]),
                { loadId: p, lastScrollEventTimestamp: f } = (0, o.cf)([e4], () => ({
                    loadId: e4.getLoadId(),
                    lastScrollEventTimestamp: e4.lastScrollEvent(),
                })),
                I = g
                    .filter((e) => {
                        let { item: t } = e;
                        return !e7.has(t.data.kind);
                    })
                    .map((e) => {
                        let { item: t } = e;
                        return t.id;
                    })
                    .pop(),
                E = (0, ts.A)(I);
            s.useEffect(() => {
                if (m || u || null == E || null == I || I === E) return;
                let e = Date.now();
                e - f > tr && ($.A.gravityScrollEvent(e), ti.trackFeedFirstScrollStarted());
            }, [m, f, E, I, p, u]);
            let y = s.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if ((t.some((e) => "end" === e.item.data.kind) && a(!0), 0 === t.length)) return;
                        h(t);
                        let n = [],
                            i = e8(t),
                            s = Date.now();
                        for (let e = i.length - 1; e >= 0; e--) {
                            let t = i[e];
                            null != t && n.push({ id: t.id, type: (0, Y.xG)(t), timestamp: s++ });
                        }
                        (n.length > 0 && $.A.ackGravityItems(n, !0),
                            ti.trackItemShortImpression(
                                t,
                                i.map((e) => ({ id: e.id, type: (0, Y.xG)(e) })),
                                c,
                            ));
                    },
                    [c, a],
                ),
                T = s.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if (0 === t.length) return;
                        let n = e8(t);
                        (ti.trackItemLongImpression(
                            t,
                            n.map((e) => ({ id: e.id, type: (0, Y.xG)(e) })),
                            c,
                        ),
                            $.A.triggerItemsLongImpression(
                                t
                                    .filter((e) => {
                                        let { item: t } = e;
                                        return !e7.has(t.data.kind);
                                    })
                                    .map((e) => {
                                        let { item: t, index: n } = e;
                                        return {
                                            itemId: t.id,
                                            itemType: eo(t),
                                            triggerType: "list",
                                            itemFeedIndex: n,
                                            itemScore: t.score ?? null,
                                            itemChannelType: t.channelType ?? null,
                                            isInitiallyVisible: !1,
                                        };
                                    }),
                            ));
                    },
                    [c],
                ),
                A = s.useCallback((e) => {
                    let { viewableItems: t } = e;
                    $.A.startItemsDwell(
                        t
                            .filter((e) => {
                                let { item: t } = e;
                                return !e7.has(t.data.kind);
                            })
                            .map((e) => {
                                let { item: t, index: n } = e;
                                return {
                                    itemId: t.id,
                                    itemType: eo(t),
                                    triggerType: "list",
                                    itemFeedIndex: n,
                                    itemScore: t.score ?? null,
                                    itemChannelType: t.channelType ?? null,
                                    isInitiallyVisible: !1,
                                };
                            }),
                    );
                }, []),
                S = s.useMemo(
                    () => [
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 100,
                                minimumViewTime: 50,
                            },
                            onViewableItemsChanged: y,
                        },
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 50,
                                minimumViewTime: 1e3,
                            },
                            onViewableItemsChanged: T,
                        },
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 50,
                                minimumViewTime: 50,
                            },
                            onViewableItemsChanged: A,
                        },
                    ],
                    [y, T, A],
                );
            s.useEffect(() => {
                $.A.openICYMITab();
            }, []);
            let M = ta(t),
                { data: x, stickyHeaderIndices: v } = s.useMemo(() => {
                    let e = [];
                    return (
                        u &&
                            null != n &&
                            n.type === Y.Mm.CUSTOM_STATUS &&
                            e.push({
                                id: n.id,
                                timestamp: Date.now(),
                                data: { kind: "contentInventory", content: er(n).activity },
                                score: n.score,
                                unread: !0,
                            }),
                        u
                            ? e.push({ id: "loading", timestamp: 0, unread: !1, data: { kind: "loading" } })
                            : (d.forEach((t) => {
                                  el(t) || e.push(t);
                              }),
                              l && e.push({ id: "end", timestamp: 0, unread: !1, data: { kind: "end" } }),
                              r.length > 0 &&
                                  r.forEach((t) => {
                                      el(t) || e.push(t);
                                  }),
                              _ &&
                                  e.push({
                                      id: "bottomLoading",
                                      timestamp: 0,
                                      unread: !1,
                                      data: { kind: "bottomLoading" },
                                  })),
                        { data: e, stickyHeaderIndices: [] }
                    );
                }, [u, n, d, l, r, _]);
            return {
                data: x,
                loading: u,
                version: c,
                visibleItemIds: g,
                endVisible: i,
                isRefreshing: m,
                handleOnRefresh: M,
                stickyHeaderIndices: v,
                viewabilityConfigCallbackPairs: S,
            };
        })({ showDot: u, notificationItem: c }),
        y = ta();
    s.useEffect(
        () => () => {
            y();
        },
        [y],
    );
    let T = (0, o.bG)([e4], () => e4.hasNewContent(), []),
        A = (0, o.bG)([e4], () => e4.isHydrating(), []),
        S = s.useMemo(() => E[0].onViewableItemsChanged, [E]),
        { registerItemRef: M } =
            ((t = s.useRef(null)),
            (n = s.useRef(new Map())),
            (i = s.useRef(new Set())),
            (d = s.useRef(S)),
            (r = s.useRef(h)),
            s.useEffect(() => {
                ((d.current = S), (r.current = h));
            }, [S, h]),
            s.useEffect(
                () => (
                    (t.current = new IntersectionObserver(
                        (e) => {
                            let t = !1;
                            if (
                                (e.forEach((e) => {
                                    let n = e.target.getAttribute("data-item-id");
                                    null != n &&
                                        (e.isIntersecting && e.intersectionRatio >= 0.5
                                            ? i.current.has(n) || (i.current.add(n), (t = !0))
                                            : i.current.has(n) && (i.current.delete(n), (t = !0)));
                                }),
                                t)
                            ) {
                                let e = r.current,
                                    t = Array.from(i.current)
                                        .map((t) => {
                                            let n = e.findIndex((e) => e.id === t);
                                            return n >= 0 ? { index: n, item: e[n] } : null;
                                        })
                                        .filter((e) => null !== e)
                                        .sort((e, t) => e.index - t.index);
                                d.current({ viewableItems: t });
                            }
                        },
                        { root: l?.current ?? null, threshold: [0, 0.5, 1], rootMargin: "0px" },
                    )),
                    () => {
                        t.current?.disconnect();
                    }
                ),
                [l],
            ),
            {
                registerItemRef: s.useCallback((e, i) => {
                    if (null != i) (n.current.set(e, i), null != t.current && t.current.observe(i));
                    else {
                        let i = n.current.get(e);
                        null != i && (t.current?.unobserve(i), n.current.delete(e));
                    }
                }, []),
            }),
        x = s.useMemo(() => h.some((e) => "end" === e.data.kind), [h]),
        v = s.useCallback(() => {
            if (x) return;
            let e = l.current;
            null == e ||
                !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) ||
                _ ||
                p ||
                A ||
                (g(!0),
                te().finally(() => {
                    setTimeout(() => {
                        g(!1);
                    }, 300);
                }));
        }, [p, _, A, x, l]);
    s.useEffect(() => {
        let e = l.current;
        if (null != e)
            return (
                e.addEventListener("scroll", v),
                () => {
                    e.removeEventListener("scroll", v);
                }
            );
    }, [v, l]);
    let C = s.useCallback(() => {
            l.current?.scrollTo({ top: 0, behavior: "smooth" });
        }, [l]),
        D = s.useCallback(() => {
            (I(), C());
        }, [I, C]),
        w = s.useCallback(
            (e) =>
                "loading" === e.data.kind
                    ? (0, a.jsx)(
                          "div",
                          {
                              style: { padding: "32px", textAlign: "center" },
                              children: (0, a.jsx)("div", { children: "Loading ICYMI feed..." }),
                          },
                          e.id,
                      )
                    : "bottomLoading" === e.data.kind
                      ? (0, a.jsx)(
                            "div",
                            {
                                style: { padding: "16px", textAlign: "center" },
                                children: (0, a.jsx)("div", { children: "Loading more..." }),
                            },
                            e.id,
                        )
                      : "end" === e.data.kind
                        ? (0, a.jsx)(
                              "div",
                              {
                                  style: { padding: "32px", textAlign: "center", color: "#949ba4" },
                                  children: (0, a.jsx)("div", { children: "You're all caught up!" }),
                              },
                              e.id,
                          )
                        : (0, a.jsx)(
                              "div",
                              { ref: (t) => M(e.id, t), "data-item-id": e.id, children: (0, a.jsx)(tZ, { item: e }) },
                              e.id,
                          ),
            [M],
        );
    return p && 0 === h.length
        ? (0, a.jsx)("div", {
              style: { padding: "32px", textAlign: "center" },
              children: (0, a.jsx)("div", { children: "Loading ICYMI feed..." }),
          })
        : (0, a.jsxs)("div", {
              className: t0.k,
              children: [
                  T &&
                      !f &&
                      (0, a.jsx)("div", {
                          style: { position: "sticky", top: 0, zIndex: 10, padding: "8px", textAlign: "center" },
                          children: (0, a.jsx)("button", {
                              onClick: D,
                              style: {
                                  background: "#5865f2",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "16px",
                                  padding: "8px 16px",
                                  cursor: "pointer",
                                  fontSize: "14px",
                                  fontWeight: 500,
                              },
                              children: "New content available",
                          }),
                      }),
                  (0, a.jsxs)("div", {
                      ref: m,
                      className: t0.j,
                      children: [
                          h.map((e) => w(e)),
                          !x &&
                              (_ || A) &&
                              (0, a.jsx)("div", {
                                  style: { padding: "16px", textAlign: "center" },
                                  children: (0, a.jsx)("div", {
                                      style: { color: "#949ba4" },
                                      children: "Loading more...",
                                  }),
                              }),
                      ],
                  }),
              ],
          });
};
var t5 = n(534515),
    t3 = n(999900);
let t6 = (0, g.A)(function (e) {
    let { width: t } = e,
        n = (0, y.c)("ICYMIPage");
    (s.useEffect(() => {
        n || (0, l.pX)(ee.BVt.ME);
    }, [n]),
        s.useLayoutEffect(() => {
            n && _.I(ee.BVt.ICYMI);
        }, [n]),
        (0, h.Ay)(() => {
            n && (0, I.d0)("icymi");
        }));
    let i = (0, o.bG)([E.A], () => E.A.theme),
        d = (0, o.bG)([e4], () => e4.isRefreshing()),
        g = s.useRef(null);
    (0, p.HU)({ location: et.intl.string(et.t["jnXV/V"]) });
    let [T, A] = s.useState(!1);
    s.useEffect(() => {
        function e(e) {
            e.metaKey && A(!0);
        }
        function t(e) {
            "Meta" === e.key && A(!1);
        }
        function n() {
            A(!1);
        }
        return (
            window.addEventListener("keydown", e),
            window.addEventListener("keyup", t),
            window.addEventListener("blur", n),
            () => {
                (window.removeEventListener("keydown", e),
                    window.removeEventListener("keyup", t),
                    window.removeEventListener("blur", n));
            }
        );
    }, []);
    let S = ta(),
        M = y.f8.useConfig({ location: "icymi page" }).enabled,
        x = s.useCallback(
            async (e) => {
                e.metaKey && M ? await tt(ee.ZSU.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON) : await S();
            },
            [S, M],
        ),
        v = T && M ? et.intl.string(et.t.YplSn2) : et.intl.string(et.t.wzzjk9);
    return n
        ? (0, a.jsxs)("div", {
              className: r()(t3.TE, t5.kL),
              children: [
                  (0, a.jsx)(c.N, {
                      theme: i,
                      children: (e) =>
                          (0, a.jsxs)(f.A, {
                              className: e,
                              toolbar: (0, a.jsx)(f.A.Icon, {
                                  icon: u.RefreshIcon,
                                  tooltip: v,
                                  onClick: x,
                                  disabled: d,
                                  "aria-label": v,
                              }),
                              children: [
                                  (0, a.jsx)(f.A.Icon, { icon: m.g, "aria-hidden": !0 }),
                                  (0, a.jsx)(f.A.Title, { children: et.intl.string(et.t["jnXV/V"]) }),
                                  (0, a.jsx)(f.A.Title, {
                                      children: (0, a.jsx)("p", {
                                          className: t5.HH,
                                          children: et.intl.string(et.t.Ac2OZA),
                                      }),
                                  }),
                              ],
                          }),
                  }),
                  (0, a.jsx)("div", {
                      ref: g,
                      className: r()(t3.Qs, t5.Qs),
                      children: (0, a.jsx)(t1, { scrollContainerRef: g }),
                  }),
              ],
          })
        : null;
});
