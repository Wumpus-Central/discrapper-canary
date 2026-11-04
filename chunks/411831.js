(n.r(t), n.d(t, { default: () => nn }));
var i,
    a = n(477900),
    s = n(582128),
    r = n(503698),
    d = n.n(r),
    l = n(877227),
    o = n(855986),
    c = n(43990),
    u = n(663417),
    m = n(768622),
    _ = n(944791),
    g = n(456412),
    p = n(964486),
    h = n(726249),
    f = n(742589),
    I = n(210714),
    E = n(413599),
    y = n(335934);
n(321073);
var T = n(681154),
    A = n(73153),
    S = n(99753),
    M = n(20805),
    v = n(583846),
    x = n(343446),
    C = n(50258),
    D = n(698441),
    w = n(813645),
    N = n(432005),
    b = n(841643),
    G = n(435558);
let k = {
        JOIN_GUILD: "join_guild",
        OPEN_CONNECTION: "open_connection",
        OPEN_GUILD: "open_guild",
        OPEN_GAME: "open_game",
        OPEN_URI: "open_uri",
        OPEN_NUDGE: "open_nudge",
    },
    O = ["post", "carousel", "server_row"];
function L(e) {
    return (0, G.isPlainObject)(e);
}
function j(e) {
    let { guild_id: t, icon_url: n, online: i, members: a, ...s } = e;
    return { ...s, guildId: t, iconUrl: n, online: Number(i), members: Number(a) };
}
function R(e) {
    return { ok: !1, reason: e };
}
var U = n(46653),
    F = n(734057),
    Y = n(504047),
    H = n(71393),
    V = n(596344),
    P = n(576705),
    B = n(218461),
    K = n(994500),
    z = n(543465),
    J = n(287809),
    W = n(927813),
    X = n(449054),
    q = n(596720);
let Q = {};
class Z extends o.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        Q = e ?? {};
    }
    filterStaffContent() {
        return !0 === Q.filterStaffContent;
    }
    getDoubleTapBehavior() {
        return Q.doubleTapBehavior ?? q.Ai.DEFAULT;
    }
    getState() {
        return Q;
    }
    getUserAgnosticState() {
        return Q;
    }
}
let $ = new Z(A.h, {
    SET_ICYMI_FILTERS: function (e) {
        Q = e.filters;
    },
});
var ee = n(811091);
function et(e, t) {
    let n = B.Ay.getTrackedAckMessageId(e);
    return null == n || ee.default.extractTimestamp(t) > ee.default.extractTimestamp(n);
}
let en = 7 * W.A.Millis.DAY,
    ei = { readIdToTimestampMap: {} };
class ea extends o.Ay.DeviceSettingsStore {
    static displayName = "ICYMIUnreadStateStore";
    static persistKey = "ICYMIUnreadStateStore";
    initialize(e) {
        ei =
            null != e && null != e.readIdToTimestampMap
                ? { readIdToTimestampMap: e.readIdToTimestampMap }
                : { readIdToTimestampMap: {} };
        let t = Date.now() - en;
        for (let e of Object.keys(ei.readIdToTimestampMap).filter((e) => ei.readIdToTimestampMap[e] < t))
            delete ei.readIdToTimestampMap[e];
    }
    getReadTimestamp(e) {
        return ei.readIdToTimestampMap[e];
    }
    getState() {
        return ei;
    }
    getUserAgnosticState() {
        return ei;
    }
}
let es = new ea(A.h, {
    ICYMI_ACK_ITEMS: function (e) {
        let { items: t, override: n } = e;
        t.forEach((e) => {
            null != e && (null == ei.readIdToTimestampMap[e.id] || n) && (ei.readIdToTimestampMap[e.id] = e.timestamp);
        });
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let { items: t } = e;
        for (let e of t)
            e.type !== q.Mm.MESSAGE ||
                null != ei.readIdToTimestampMap[e.id] ||
                e.data.message_context?.external_content_application_id != null ||
                et(e.data.channel_id, e.data.message_id) ||
                (ei.readIdToTimestampMap[e.id] = 0);
    },
    CLEAR_ICYMI_READ_STATES: function () {
        ei.readIdToTimestampMap = {};
    },
});
var er = n(6161);
n(256265);
var ed = n(95701),
    el = n(4106),
    eo = n(522606),
    ec = n(652215),
    eu = n(792996),
    em =
        (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.DEFAULT = 1)] = "DEFAULT"),
        (i[(i.MORE = 2)] = "MORE"),
        (i[(i.LESS = 3)] = "LESS"),
        (i[(i.MUTED = 4)] = "MUTED"),
        i);
function e_(e) {
    return e.type === q.Mm.MESSAGE || e.type === q.Mm.GUILD_EVENT;
}
function eg(e) {
    return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function ep(e, t, n, i) {
    let a = e.slice(t, n);
    if (0 === a.length) return;
    el.A.loadHydratedAttempt((0, eo.V)(t, n));
    let s = a.filter((e) => null == i[e.id]),
        r = s
            .filter((e) => e.type === q.Mm.MESSAGE)
            .map((e) => ({ channel_id: e.data.channel_id, message_id: e.data.message_id })),
        d = s
            .map((e) => {
                if (e.type === q.Mm.MESSAGE) {
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
            .filter((e) => e.type === q.Mm.ACTIVITY)
            .map((e) => ({ user_id: e.data.user_id, content_id: e.data.content_id }));
    await el.A.fetchHydrated(t, n, { messageItems: [...r, ...d], activityItems: l });
}
function eh(e, t) {
    return {
        ...t,
        message: (0, N.rh)(e.message),
        threadChannel: null != e.thread_channel ? ed.Lt.fromServer(e.thread_channel, e.guild_id) : void 0,
    };
}
function ef(e) {
    return {
        id: e.id,
        type: q.Mm.CUSTOM_STATUS,
        activity: {
            id: e.id,
            author_id: e.data.user_id,
            author_type: er.ContentInventoryAuthorType.USER,
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
function eI(e) {
    let t, n;
    switch (e.data.kind) {
        case "message":
            t = e.data.message.channel_id;
            break;
        case "forumThread":
            t = e.data.threadChannel.id;
            break;
        case "guildEvent":
            n = D.Ay.getGuildScheduledEvent(e.data.eventId)?.guild_id;
            break;
        default:
            return !1;
    }
    let i = F.A.getChannel(t);
    if (i?.nsfw) return !0;
    let a = null != (n = i?.guild_id ?? n) ? H.A.getGuild(n) : null;
    return a?.nsfwLevel === ec.ftr.EXPLICIT || a?.nsfwLevel === ec.ftr.AGE_RESTRICTED;
}
function eE(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "bottomLoading":
            return "bottomLoading";
        case "message":
            if (e.channelType === ec.rbe.GUILD_ANNOUNCEMENT) return "announcement";
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
        case "waterwheelsItem":
            return "discover_item";
        case "forumThread":
            return "forum_thread";
        case "icymiHeader":
            return "icymi_header";
        default:
            return "unknown";
    }
}
var ey = n(129230);
function eT(e) {
    let t = [],
        n = [],
        i = [],
        a = [];
    (e.unreadFeedItems.forEach((e) => {
        (t.push(e.id), i.push(eA(e)));
    }),
        e.readFeedItems.forEach((e) => {
            (n.push(e.id), a.push(eA(e)));
        }),
        ey.default.track(ec.HAw.FEED_LOADED, {
            ...e.newTrackingProps,
            home_session_id: e.homeSessionId,
            tab_badged: e.hasNewContent,
            unread_feed_item_ids: t,
            read_feed_item_ids: n,
            unread_feed_item_types: i,
            read_feed_item_types: a,
        }));
}
function eA(e) {
    switch (e.type) {
        case q.Mm.MESSAGE:
            if (e.data.channel_type === ec.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            return "message";
        case q.Mm.ACTIVITY:
            return "hotwheels_gaming_activity";
        case q.Mm.CUSTOM_STATUS:
            return "hotwheels_custom_status";
        case q.Mm.GUILD_EVENT:
            return "guild_event";
        case q.Mm.RECOMMENDED_GUILDS:
            return "recommended_guilds";
        case q.Mm.DISCOVER_ITEM:
            return "discover_item";
    }
}
var eS = n(424994);
let eM = +W.A.Millis.DAY,
    ev = 3 * W.A.Millis.DAY,
    ex = [],
    eC = null,
    eD = 0,
    ew = [],
    eN = [],
    eb = {},
    eG = {},
    ek = {},
    eO = {},
    eL = {},
    ej = {},
    eR = 0,
    eU = !1,
    eF = !1,
    eY = !1,
    eH = null,
    eV = null,
    eP = 0,
    eB = [],
    eK = [],
    ez = 0,
    eJ = [],
    eW = 0,
    eX = !0,
    eq = !1,
    eQ = new Set(),
    eZ = !1,
    e$ = !1,
    e0 = 0,
    e1 = 0;
function e5(e, t) {
    if (Date.now() - eD > 6 * W.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function e3(e) {
    if (!$.filterStaffContent()) return !0;
    if (e_(e)) {
        if (e.data.guild_id === q.VL) return !0;
        let t = H.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(ec.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function e4(e) {
    if (e.type !== q.Mm.DISCOVER_ITEM) return !0;
    if (!(0, b.SL)("icymi_store")) return !1;
    let t = (function (e) {
        try {
            if (!L(e) || null == e.id || null == e.type || !L(e.layout) || !Array.isArray(e.actions))
                return R("invalid_card");
            if (!O.includes(e.layout.type)) return R("unknown_layout");
            if (!e.actions.every((e) => L(e) && Object.values(k).includes(e.type))) return R("unknown_action");
            if (void 0 !== e.client_eligibility && "notifications_permission" !== e.client_eligibility)
                return R("unknown_eligibility");
            return {
                ok: !0,
                card: {
                    id: e.id,
                    type: e.type,
                    layout: (function (e) {
                        switch (e.type) {
                            case "server_row":
                                return j(e);
                            case "post": {
                                let { image_url: t, action_label: n, ...i } = e;
                                return { ...i, imageUrl: t, actionLabel: n };
                            }
                            case "carousel": {
                                let { header: t, items: n, ...i } = e;
                                return {
                                    ...i,
                                    header: { title: t.title, subtitle: t.subtitle, iconUrl: t.icon_url },
                                    items: n.map((e) => {
                                        let { game_id: t, cover_url: n, server: i, ...a } = e;
                                        return { ...a, gameId: t, coverUrl: n, server: null == i ? null : j(i) };
                                    }),
                                };
                            }
                        }
                    })(e.layout),
                    actions: e.actions,
                    clientEligibility: e.client_eligibility ?? null,
                },
            };
        } catch {
            return R("invalid_card");
        }
    })(e.data.item);
    return !!t.ok && ((ek[e.id] = { ...e, card: t.card }), !0);
}
function e6(e, t, n, i) {
    let a = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < a.length ? a.splice((t + 1) * i, 0, e) : a.push(e);
        }),
        a
    );
}
function e9() {
    if (
        ((eB = eB.filter((e) => e.type !== q.Mm.RECOMMENDED_GUILDS)),
        (eK = eK.filter((e) => e.type !== q.Mm.RECOMMENDED_GUILDS)),
        0 === eJ.length)
    )
        return;
    let e = "recommendedGuilds",
        t = H.A.getGuildsArray().filter((e) => e.features.has(ec.GuildFeatures.COMMUNITY)).length >= 5,
        n = es.getReadTimestamp(e);
    if (t && null != n && Date.now() - eW > eM && Date.now() - n < ev) return;
    let i = { id: e, type: q.Mm.RECOMMENDED_GUILDS, score: 50 };
    if (((ek[i.id] = i), (eG[i.id] = i), 0 === eB.length)) eK = [i, ...eK];
    else if ((!t && eB.length < 5) || (t && eB.length < 10)) eB = [...eB, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        eB.splice(e, 0, i);
    } else eB.splice(5, 0, i);
}
function e2() {
    let e = new Set();
    if (
        (ew.forEach((t) => {
            e.add(t.id);
        }),
        null != eV)
    )
        if (e.has(eV.id)) {
            let e = eV.id,
                t = eV.type,
                n = ew.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((eV = ew[n]), (ew = ew.filter((t) => t.id !== e)), (ew = [eV, ...ew]));
        } else ((ew = [eV, ...ew]), e.add(eV.id));
    ew.forEach((e) => {
        ((eG[e.id] = e),
            e.type === q.Mm.CUSTOM_STATUS &&
                (K.A.isBlockedOrIgnored(e.data.user_id) ? (eO[e.id] = !0) : (ek[e.id] = ef(e))));
    });
}
function e8(e) {
    let t, n, i, a, s;
    if ((ew.length > 0 && ((ex = ew), (ew = []), (eN = [])), eR++, null != e)) ((eB = e.newUnread), (eK = e.newRead));
    else {
        let [e, t] = e7(ex);
        ((eB = e), (eK = t));
    }
    ((function () {
        let e = H.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != eL[n] && eL[n] < 0) continue;
            let e = D.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, D.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = F.A.getChannel(n.channel_id);
                        if (!P.A.can(ec.xBc.VIEW_CHANNEL, e)) continue;
                    }
                    if (
                        ((0, D.W$)(n, 2 * W.A.Seconds.DAY) || (0, D.Fd)(n)) &&
                        (null == ek[n.id] &&
                            (ek[n.id] = { id: n.id, type: q.Mm.GUILD_EVENT, score: 10, event_id: n.id }),
                        t.push({
                            id: n.id,
                            type: q.Mm.GUILD_EVENT,
                            score: 10,
                            data: { guild_id: n.guild_id, event_id: n.id, channel_id: n.channel_id ?? void 0 },
                        }),
                        ++i >= 1)
                    )
                        break;
                }
        }
        t.sort((e, t) => {
            let n = Y.A.getGuildAffinity(e.data.guild_id),
                i = Y.A.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let n = [],
            i = [];
        (t.forEach((e) => {
            ((eG[e.id] = e), null != es.getReadTimestamp(e.id) ? i.push(e) : n.push(e));
        }),
            (eB = e6(eB, n, q.Mm.GUILD_EVENT, 7)),
            (eK = e6(eK, i, q.Mm.GUILD_EVENT, 7)));
    })(),
        (t = new Set()),
        (n = {}),
        (i = []),
        (a = []),
        (s = S.A.getFeed(eS.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5),
        s.forEach((e) => {
            if (
                t.has(e.content.id) ||
                (e.content.content_type !== T.ContentInventoryEntryType.PLAYED_GAME &&
                    e.content.content_type !== T.ContentInventoryEntryType.CUSTOM_STATUS &&
                    e.content.content_type !== T.ContentInventoryEntryType.TOP_GAME) ||
                (0, v.I5)(e.content)
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
            null == ek[e.content.id] &&
                (ek[e.content.id] = { id: e.content.id, type: q.Mm.ACTIVITY, score: 15, activity: e.content });
            let s = {
                id: e.content.id,
                type: q.Mm.ACTIVITY,
                score: 15,
                data: { user_id: e.content.author_id, content_id: e.content.id },
            };
            (t.add(e.content.id), (eG[s.id] = s), null != es.getReadTimestamp(s.id) ? a.push(s) : i.push(s));
        }),
        (eB = e6(eB, i, q.Mm.ACTIVITY, 5)),
        (eK = e6(eK, a, q.Mm.ACTIVITY, 5)),
        e9(),
        null != eb.load_id &&
            eC !== eb.load_id &&
            (eT({
                newTrackingProps: eb,
                hasNewContent: eF,
                unreadFeedItems: eB,
                readFeedItems: eK,
                homeSessionId: "gravity",
            }),
            (eC = eb.load_id ?? null),
            (eb = {})),
        (ez = 0),
        eB.length + eK.length === 0 && (e$ = !0),
        ep([...eB, ...eK], 0, 15, ek),
        (eq = !1));
}
function e7(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let a = null != es.getReadTimestamp(e.id);
            (e.type === q.Mm.MESSAGE &&
                e.data.message_context?.external_content_application_id == null &&
                (a = a || !et(e.data.channel_id, e.data.message_id)),
                a ? t.push(e) : e.type === q.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e));
        }),
        [
            [...i, ...n],
            t.sort((e, t) => {
                var n, i;
                let a, s;
                return (
                    (n = e.id),
                    (i = t.id),
                    null == (a = es.getReadTimestamp(n)) && (a = void 0),
                    (null == (s = es.getReadTimestamp(i)) && (s = void 0), null == a && null == s)
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
function te(e, t) {
    let n = [],
        i = new Set(ex.map((e) => e.id));
    for (let a of e)
        !(a.type === q.Mm.RECOMMENDED_GUILDS || i.has(a.id)) &&
            null == es.getReadTimestamp(a.id) &&
            (a.type !== q.Mm.MESSAGE || (et(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t)) &&
            n.push(a);
    return n;
}
function tt(e, t) {
    return e.filter((e) => !e_(e) || e.data.channel_id !== t);
}
function tn(e, t) {
    eg(t) === em.MUTED && ((ex = tt(ex, e)), (eB = tt(eB, e)), (eK = tt(eK, e)), (ew = tt(ew, e)), (eN = tt(eN, e)));
}
function ti(e, t) {
    return e.filter((e) => !e_(e) || e.data.guild_id !== t);
}
function ta(e, t) {
    eg(t) === em.MUTED && ((ex = ti(ex, e)), (eB = ti(eB, e)), (eK = ti(eK, e)), (ew = ti(ew, e)), (eN = ti(eN, e)));
}
function ts(e) {
    let { type: t, messageId: n, userId: i, emoji: a, reactionType: s } = e,
        r = ek[n];
    if (null == r || r.type !== q.Mm.MESSAGE) return !1;
    let d = U.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t
        ? (r.message = r.message.addReaction(a, d, { colors: e.colors, reactionType: s }))
        : (r.message = r.message.removeReaction(a, d, s));
}
function tr(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    eB.forEach((e, a) => {
        (a > ez || !eY) && e.type === q.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let a = eF,
        [s, r] = e7(ew);
    if (((eN = te(s, t)), (eF = eY ? a && eN.length >= 3 : a && e5(i, ew)), 0 === n.length && a === eF)) return !1;
    0 !== n.length && ((eB = i), (eK = [...eK, ...n]));
}
class td extends o.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        (this.waitFor(C.A, U.default, F.A, S.A, x.A, Y.A, D.Ay, H.A, $, w.A, es, V.A, P.A, B.Ay, K.A, z.Ay, J.default),
            null != e &&
                ((ex = e.dehydratedItems ?? []).forEach((e) => {
                    eG[e.id] = e;
                }),
                (eL = e.customGuildScores ?? {}),
                (ej = e.customChannelScoresByGuild ?? {}),
                (eP = e.numOpens ?? 0),
                (eD = e.lastOpened ?? 0),
                (eW = e.lastJoinedRecommendedGuild ?? 0),
                (e1 = e.lastTakenICYMISurvey ?? 0)));
    }
    getVersion() {
        return eR;
    }
    getDehydratedItems() {
        return ex;
    }
    getNewDehydratedItems() {
        return ew;
    }
    getDehydratedItem(e) {
        return eG[e] ?? null;
    }
    getHydratedItem(e) {
        return ek[e] ?? null;
    }
    getMessage(e) {
        let t = ek[e];
        return null == t || t.type !== q.Mm.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return ek;
    }
    getUnreadDisplayItems() {
        return eB;
    }
    getNewUnreadDehydratedItems() {
        return eN;
    }
    getReadDisplayItems() {
        return eK;
    }
    getNextIndexToHydrate() {
        return ez;
    }
    getMissingItems() {
        return eO;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === em.MUTED || this.getCustomChannelScore(e, t) === em.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == ej[e] || null == ej[e][t] ? em.UNKNOWN : eg(ej[e][t]);
    }
    getCustomGuildScore(e) {
        return eL[e] ?? 0;
    }
    getCustomGuildScores() {
        return eL;
    }
    hasNewContent() {
        return eF;
    }
    getCurrentStatusAttachments(e) {
        return null == eH || eH[0] !== e ? [] : eH[1];
    }
    getLoadId() {
        return eC;
    }
    hasOpenedEnoughTimes() {
        return 5 === eP;
    }
    hasOpened() {
        return eY;
    }
    getDiscoverableGuilds() {
        return eJ;
    }
    videosMuted() {
        return eX;
    }
    isRefreshing() {
        return eq;
    }
    isHydrating() {
        return eQ.size > 0;
    }
    notificationItem() {
        return eV;
    }
    getIsTabFocused() {
        return eZ;
    }
    isFirstPageHydrated() {
        return e$;
    }
    lastScrollEvent() {
        return e0;
    }
    lastTakenICYMISurvey() {
        return e1;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...eB, ...eK].findIndex((e) => e.type === q.Mm.RECOMMENDED_GUILDS)
            : [...eB, ...eK].filter((e) => null != ek[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: ex,
            numOpens: eP,
            customGuildScores: eL,
            customChannelScoresByGuild: ej,
            lastOpened: eD,
            lastJoinedRecommendedGuild: eW,
            lastTakenICYMISurvey: e1,
        };
    }
}
let tl = new td(A.h, {
    LOGOUT: function () {
        ((ex = []),
            (ew = []),
            (eN = []),
            (eG = {}),
            (eb = {}),
            (ek = {}),
            (eO = {}),
            (eC = null),
            (eL = {}),
            (ej = {}),
            (eR = 0),
            (eU = !1),
            (eF = !1),
            (eY = !1),
            (eB = []),
            (eK = []),
            (ez = 0),
            (eD = 0),
            (eW = 0),
            (eX = !0),
            (eq = !1),
            (eQ = new Set()),
            (eV = null),
            (eZ = !1),
            (e$ = !1),
            (eH = null),
            (e0 = 0));
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
        let { messageItem: t, customStatusItem: n } = e;
        if (null != n) return ((eV = n), null != eC && ((ew = ew.length > 0 ? ew : [...ex]), e2(), e8()), !0);
        if (null != t) {
            let e = {
                id: t.message.id,
                type: q.Mm.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: ec.rbe.GUILD_TEXT,
                },
            };
            if (
                ((eG[t.message.id] = e),
                (ek[t.message.id] = { ...e, message: (0, N.rh)(t.message) }),
                null == eC && null == eb)
            ) {
                let [t, n] = e7((ex = [e, ...ex]));
                ((eB = t), (eK = n));
            } else ((ew = [e, ...ew]), e8());
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let t,
            { items: n, loadId: i, startTime: a, isInitialLoad: s, isReloading: r } = e;
        ((t = new Set(q.H8)),
            (ew = n
                .filter((e) => t.has(e.type))
                .filter(e4)
                .filter(e3)
                .map((e) => {
                    if (e.type === q.Mm.MESSAGE && null != e.data.message_context) {
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
            e2(),
            (eb = { load_id: i, load_time_millis: Date.now() - a, feed_item_ids: ew.map((e) => e.id) }));
        let [d, l] = e7(ew);
        if (((eN = te(d)), !eY || 0 === eR || s))
            ((eR = 0), !eZ && e5(d, ew) ? ((eF = !0), (eU = !0)) : (eF = !1), e8({ newUnread: d, newRead: l }));
        else {
            eR > 0 && (eV = null);
            let e = eN.length > 3;
            (r || (eF = e), e && (ep([...d, ...l], 0, 15, ek), d.length + l.length === 0 && (e$ = !0)));
        }
        eT({
            newTrackingProps: eb,
            hasNewContent: eF,
            unreadFeedItems: d,
            readFeedItems: l,
            homeSessionId: eZ ? "foreground_load" : "background_load",
        });
    },
    LOAD_ICYMI_HYDRATED: function (e) {
        let {
            messageItems: t,
            activityItems: n,
            requestMessageItems: i,
            requestActivityItems: a,
            startingIndex: s,
            endingIndex: r,
        } = e;
        ((e$ = !0), (ek = { ...ek }));
        let d = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
            l = n.reduce((e, t) => ((e[t.id] = t), e), {});
        (i.forEach((e) => {
            let t = d[e.message_id];
            if (null == t) {
                eO[e.message_id] = !0;
                return;
            }
            let n = eG[e.message_id];
            null == n &&
                (n = {
                    id: e.message_id,
                    type: q.Mm.MESSAGE,
                    score: -1,
                    data: {
                        guild_id: t.guild_id,
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        channel_type: ec.rbe.GUILD_TEXT,
                        has_mention: !1,
                    },
                });
            let i = V.A.getMessage(t.channel_id, t.message.id);
            if (null != i) {
                let e = eh(t, n);
                ek[t.message.id] = { ...e, message: i };
            } else ek[t.message.id] = eh(t, n);
        }),
            a.forEach((e) => {
                let t = l[e.content_id];
                if (null == t) {
                    eO[e.content_id] = !0;
                    return;
                }
                let n = eG[e.content_id];
                if (null == n) {
                    eO[e.content_id] = !0;
                    return;
                }
                ek[t.id] = { ...n, activity: t };
            }),
            s === ez && (ez = r),
            eQ.delete((0, eo.V)(s, r)));
    },
    LOAD_ICYMI_CUSTOM_SCORES: function (e) {
        let { scores: t } = e;
        for (let e of t)
            for (let t of ((eL[e.guild_id] = e.guild_score),
            ta(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                (null == ej[e.guild_id] && (ej[e.guild_id] = {}),
                    (ej[e.guild_id][t] = e.custom_channel_scores[t]),
                    tn(t, e.custom_channel_scores[t]));
        ((eL = { ...eL }), (ej = { ...ej }));
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        ((eJ = t.map((e) => (0, X.jE)(e.guild))), e9());
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: i } = e;
        (null != i && ((eL[n] = i), ta(n, i), (eL = { ...eL })),
            t?.forEach((e) => {
                let { channelId: t, score: i } = e;
                (null == ej[n] && (ej[n] = {}), (ej[n][t] = i), tn(t, i), (ej = { ...ej }));
            }));
    },
    RELOAD_ICYMI: function () {
        if (0 === ew.length) return !1;
        (e8(), (eF = !1));
    },
    ICYMI_TAB_OPENED: function () {
        ((eY = !0), (eD = Date.now()), eU && ((eU = !1), (eF = !1)), eP < 5 && eP++);
    },
    ICYMI_FEEDBACK_GIVEN: function () {
        eP = 6;
    },
    MESSAGE_REACTION_ADD: ts,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            i = ek[t];
        if (null == i || i.type !== q.Mm.MESSAGE) return !1;
        let a = U.default.getId();
        i.message = i.message.addReactionBatch(n, a);
    },
    MESSAGE_REACTION_REMOVE: ts,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e,
            n = ek[t];
        if (null == n || n.type !== q.Mm.MESSAGE) return !1;
        n.message = n.message.set("reactions", []);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e,
            i = ek[t];
        if (null == i || i.type !== q.Mm.MESSAGE) return !1;
        i.message = i.message.removeReactionsForEmoji(n);
    },
    CHANNEL_ACK: tr,
    MESSAGE_ACK: tr,
    ICYMI_JOINED_RECOMMENDED_GUILD: function () {
        eW = Date.now();
    },
    ICYMI_SET_VIDEOS_MUTED: function (e) {
        let { muted: t } = e;
        eX = t;
    },
    ICYMI_SET_REFRESHING: function (e) {
        let { refreshing: t } = e;
        eq = t;
    },
    LOAD_ICYMI_HYDRATED_ATTEMPT: function (e) {
        let { hydrationId: t } = e;
        eQ.add(t);
    },
    LOAD_ICYMI_HYDRATED_FAILED: function (e) {
        let { hydrationId: t } = e;
        eQ.delete(t);
    },
    ICYMI_SET_FOCUSED_TAB: function (e) {
        let { focused: t } = e;
        eZ = t;
    },
    LOAD_ICYMI_CURRENT_STATUS_MEDIA: function (e) {
        let { attachments: t, createdAtMs: n } = e;
        if (null == t || 0 === t.length) {
            eH = null;
            return;
        }
        eH = [n, [...t]];
    },
    ICYMI_SCROLL_EVENT: function (e) {
        let { timestamp: t } = e;
        e0 = t;
    },
    ICYMI_TAKE_SURVEY: function (e) {
        let { takenAt: t } = e;
        e1 = t;
    },
});
function to(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "message":
            if (e.channelType === ec.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            return "message";
        case "guildEvent":
            return "guild_event";
        case "contentInventory":
            if (e.data.content.content_type === T.ContentInventoryEntryType.CUSTOM_STATUS)
                return "hotwheels_custom_status";
            return "hotwheels_gaming_activity";
        case "recommendedGuilds":
            return "recommended_guilds";
        case "waterwheelsItem":
            return "discover_item";
        case "forumThread":
            return "forum_thread";
        case "icymiHeader":
            return "icymi_header";
        default:
            return "unknown";
    }
}
let tc = {
    trackItemInteraction(e) {
        ey.default.track(ec.HAw.FEED_ITEM_INTERACTED, {
            load_id: tl.getLoadId(),
            feed_item_type: e.type,
            feed_item_id: e.id,
            home_session_id: "gravity",
            action_type: e.actionType,
            feed_item_index: tl.getIndexInHydratedFeed(e.id),
            icymi_session_id: e.icymiSessionId,
            impression_id: e.impressionId,
            ux_variation: e.uxVariation,
            session_interaction_index: e.sessionInteractionIndex,
        });
    },
    trackItemShortImpression(e, t, n) {
        ey.default.track(ec.HAw.FEED_ITEM_SEEN_BATCH, {
            load_id: tl.getLoadId(),
            home_session_id: "gravity",
            feed_item_ids: e.map((e) => e.item.id),
            feed_item_types: e.map((e) => to(e.item)),
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
        ey.default.track(ec.HAw.FEED_ITEM_SEEN_LONG, {
            load_id: tl.getLoadId(),
            home_session_id: "gravity",
            feed_item_ids: e.map((e) => e.item.id),
            feed_item_types: e.map((e) => to(e.item)),
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
        ey.default.track(ec.HAw.FEED_SHOWN, {
            load_id: tl.getLoadId(),
            home_session_id: e.homeSessionId,
            variant: e.variant,
        });
    },
    trackFeedFirstScrollStarted() {
        ey.default.track(ec.HAw.HOME_FIRST_SCROLL_STARTED, { load_id: tl.getLoadId(), home_session_id: "gravity" });
    },
    trackFeedFeedbackPromptViewed() {
        ey.default.track(ec.HAw.HOME_FEEDBACK_PROMPT_VIEWED);
    },
    trackFeedFeedbackSubmitted(e) {
        ey.default.track(ec.HAw.HOME_FEEDBACK_SUBMITTED, { load_id: tl.getLoadId(), home_session_id: "gravity", ...e });
    },
    trackFeedOnboardingScreenSkipped(e) {
        ey.default.track(ec.HAw.ICYMI_ONBOARDING_SCREEN_SKIPPED, { location: e.location });
    },
    trackFeedOnboardingGuildToggled(e) {
        ey.default.track(ec.HAw.ICYMI_ONBOARDING_GUILD_TOGGLED, { guild_id: e.guildId, toggled: e.toggled });
    },
    trackFeedOnboardingCategoryToggled(e) {
        ey.default.track(ec.HAw.ICYMI_ONBOARDING_CATEGORY_TOGGLED, { category_id: e.categoryId, toggled: e.toggled });
    },
    trackFeedEmptyLoadingSeen() {
        ey.default.track(ec.HAw.ICYMI_FEED_EMPTY_LOADING_SEEN, { load_id: tl.getLoadId(), version: tl.getVersion() });
    },
    trackFeedEmptyLoadingComplete(e) {
        ey.default.track(ec.HAw.ICYMI_FEED_EMPTY_LOADING_COMPLETE, {
            load_id: tl.getLoadId(),
            dwell_time_ms: e.dwellTimeMs,
            version: tl.getVersion(),
        });
    },
    trackFeedEmptyLoadingAbandoned(e) {
        ey.default.track(ec.HAw.ICYMI_FEED_EMPTY_LOADING_ABANDONED, {
            load_id: tl.getLoadId(),
            dwell_time_ms: e.dwellTimeMs,
            version: tl.getVersion(),
        });
    },
    trackFeedSessionStarted(e) {
        ey.default.track(ec.HAw.FEED_SESSION_STARTED, {
            load_id: tl.getLoadId(),
            version: tl.getVersion(),
            session_start_time_ms: e.sessionStartTimeMs,
            icymi_session_id: e.icymiSessionId,
            previous_icymi_session_count: e.previousIcymiSessionCount,
            ux_variation: e.uxVariation,
        });
    },
    trackFeedSessionCompleted(e) {
        ey.default.track(ec.HAw.FEED_SESSION_COMPLETED, {
            load_id: tl.getLoadId(),
            version: tl.getVersion(),
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
        ey.default.track(ec.HAw.FEED_ITEM_1S_DWELLED, {
            load_id: tl.getLoadId(),
            version: tl.getVersion(),
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
        ey.default.track(ec.HAw.FEED_ITEM_DWELLED, {
            load_id: tl.getLoadId(),
            version: tl.getVersion(),
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
        ey.default.track(ec.HAw.FEED_ITEM_ACTIONED, {
            load_id: tl.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: tl.getVersion(),
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
        ey.default.track(ec.HAw.FEED_FILTER_ACTIONED, {
            load_id: tl.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: tl.getVersion(),
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
        ey.default.track(ec.HAw.FEED_PAGE_ACTIONED, {
            load_id: tl.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: tl.getVersion(),
            session_action_index: e.sessionActionIndex,
            action_gesture_type: e.actionParameters.actionGestureType,
            action_target_element: e.actionParameters.actionTargetElement,
            action_intent_type: e.actionParameters.actionIntentType,
            action_destination_type: e.actionParameters.actionDestinationType,
        });
    },
};
function tu(e) {
    return s.useCallback(async () => {
        (tc.trackFeedShown({ variant: e ? "DotShown" : "NoDotShown", homeSessionId: "gravity_refresh" }),
            await el.A.fetchDehydrated({ isReloading: !0 }),
            await el.A.reloadICYMITab(),
            await el.A.getGuildChannelScores(),
            el.A.getRecommendedGuilds());
    }, [e]);
}
let tm = new Set(["end", "loading", "bottomLoading", "icymiHeader", "recommendedGuilds"]);
function t_(e) {
    let t = tl.getUnreadDisplayItems(),
        n = tl.getReadDisplayItems(),
        i = [...t, ...n],
        a = null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (null != n && !tm.has(n.item.data.kind)) {
            a = n.item.id;
            break;
        }
    }
    if (null == a) return [];
    let s = i.findIndex((e) => e.id === a);
    return s < 0 ? [] : i.slice(0, s + 1);
}
var tg = n(819169);
function tp(e, t, n, i, a) {
    switch (t.type) {
        case q.Mm.MESSAGE:
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
        case q.Mm.ACTIVITY:
        case q.Mm.CUSTOM_STATUS:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "contentInventory", content: t.activity },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case q.Mm.GUILD_EVENT:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "guildEvent", eventId: t.event_id },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case q.Mm.RECOMMENDED_GUILDS:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "recommendedGuilds" },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case q.Mm.DISCOVER_ITEM:
            if (!i || a?.(t.card) === !1) return null;
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "waterwheelsItem", card: t.card },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        default:
            return null;
    }
}
let th = 15 * W.A.Millis.MINUTE;
var tf = n(939249),
    tI = n(976860),
    tE = n(378570),
    ty = n(702476),
    tT = n(834730),
    tA = n(51183),
    tS = n(208971),
    tM = n(25101);
function tv(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content.extra : null,
        i = n?.type === "custom_status_extra" ? n : null,
        s = (0, tS.G)(i?.status);
    if (null == i) return null;
    let r = {
            id: i.emoji_id?.toString() === "0" ? null : i.emoji_id,
            name: i.emoji_name ?? "",
            animated: i.emoji_animated,
        },
        d = null != r.id || r.name.length > 0,
        l = null != s && s.length > 0;
    return (0, a.jsx)("div", {
        className: tM.kL,
        children: (0, a.jsx)("div", {
            className: tM.Nr,
            children: (0, a.jsxs)("div", {
                className: tM.Qs,
                children: [
                    d &&
                        (0, a.jsx)("div", {
                            className: tM.qq,
                            children: (0, a.jsx)(tA.A, { emoji: r, animate: !0, hideTooltip: !1 }),
                        }),
                    l &&
                        (0, a.jsx)(tT.E, {
                            variant: "body-md/normal",
                            color: "text-strong",
                            className: tM.qS,
                            children: s,
                        }),
                ],
            }),
        }),
    });
}
var tx = n(429913),
    tC = n(886072);
function tD(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content : null,
        i = n?.extra,
        s = n?.author_id,
        r = n?.content_type,
        d = i?.type === "played_game_extra" || i?.type === "launched_activity_extra" ? i.application_id : void 0,
        l = (0, tx.h)(d),
        c = (0, o.bG)([J.default], () => (null != s ? J.default.getUser(s) : null), [s]),
        u = r === T.ContentInventoryEntryType.TOP_GAME,
        m = l?.getIconURL(240);
    return i?.type !== "played_game_extra" || "contentInventory" !== t.data.kind || null == l || null == c || null == m
        ? null
        : (0, a.jsx)("div", {
              className: tC.kL,
              children: (0, a.jsxs)("div", {
                  className: tC.Nr,
                  children: [
                      (0, a.jsx)("img", { src: m, alt: l.name, className: tC.Gt }),
                      (0, a.jsxs)("div", {
                          className: tC.Vx,
                          children: [
                              (0, a.jsx)(tT.E, { variant: "body-md/semibold", color: "text-strong", children: l.name }),
                              u &&
                                  (0, a.jsx)("div", {
                                      className: tC.qS,
                                      children: (0, a.jsx)(tT.E, {
                                          variant: "body-xs/semibold",
                                          color: "text-brand",
                                          children: eu.intl.string(eu.t["/50eHi"]),
                                      }),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
var tw = n(177953),
    tN = n(47167),
    tb = n(713654),
    tG = n(435328),
    tk = n(563312),
    tO = n(826383),
    tL = n(9448),
    tj = n(974930),
    tR = n(641786);
function tU(e) {
    let { eventId: t } = e,
        n = (0, o.bG)([D.Ay], () => D.Ay.getGuildScheduledEvent(t), [t]),
        i = (0, o.bG)([H.A], () => H.A.getGuild(n?.guild_id), [n]),
        r = (0, o.bG)([F.A], () => F.A.getChannel(n?.channel_id), [n]),
        d = (0, tk.nh)(t, null),
        l = null != n && (0, D.Fd)(n),
        c = null != n ? (0, tj.G3)(n) : null,
        u = (0, tO.A)(n?.guild_id, n?.id, c),
        m = d?.startTime.toISOString(),
        { startDateTimeString: _ } = s.useMemo(
            () =>
                l ? { startDateTimeString: eu.intl.string(eu.t.TxqPQR) } : (0, tj.CC)(m ?? new Date().toISOString()),
            [m, l],
        ),
        g = (0, tN.Ay)(r),
        p = null != n ? (0, tL.oF)(n) : void 0,
        h = null != r ? (0, tb.gU)(r) : null;
    if (null == n || null == i) return null;
    let f = null != n.description && n.description.length > 0;
    return (0, a.jsxs)("div", {
        className: tR.Qo,
        children: [
            (0, a.jsx)("div", {
                className: tR.At,
                children: (0, a.jsx)(tT.E, {
                    variant: "body-sm/semibold",
                    color: l ? "status-positive" : "text-brand",
                    children: _,
                }),
            }),
            (0, a.jsx)(tT.E, { variant: "body-lg/semibold", className: f ? tR.X_ : void 0, children: n.name }),
            f &&
                (0, a.jsx)(tT.E, {
                    variant: "body-md/normal",
                    color: "text-subtle",
                    className: tR.tj,
                    children: (0, tG.l)(n.description ?? "", !0, { guildId: i.id }),
                }),
            (0, a.jsx)("hr", { className: tR.Yl }),
            (0, a.jsxs)("div", {
                className: tR.oo,
                children: [
                    (0, a.jsxs)("div", {
                        className: tR.ik,
                        children: [
                            (0, a.jsx)(tw.n, { size: "xs", color: "currentColor" }),
                            (0, a.jsx)(tT.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: eu.intl.format(eu.t["+DLsD8"], { count: u }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tR.ik,
                        children: [
                            null != h ? (0, a.jsx)(h, { size: "xs", color: "currentColor" }) : null,
                            (0, a.jsx)(tT.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                className: tR.HA,
                                children: g ?? (null != p ? (0, tG.y)(p, !0) : null),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tF = n(837381),
    tY = n(384231),
    tH = n(763754),
    tV = n(491182),
    tP = n(860227),
    tB = n(538355),
    tK = n(699352),
    tz = n(715628),
    tJ = n(752636),
    tW = n(117096),
    tX = n(268719),
    tq = n(69282),
    tQ = n(862161),
    tZ = n(13673);
let t$ = s.memo(function (e) {
    let {
            message: t,
            className: n,
            onContextMenu: i,
            onClick: s,
            hideSimpleEmbedContent: r = !0,
            channel: l,
            isGroupStart: c,
            animateAvatar: u,
            subscribeToComponentDispatch: m,
            renderThreadAccessory: _,
            ...g
        } = e,
        p = t.type === ec.lAJ.POLL_RESULT || (e.disableInteraction ?? !1),
        h = t.isFirstMessageInForumPost(l),
        f = (0, tY.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        {
            content: I,
            hasSpoilerEmbeds: E,
            hasBailedAst: y,
        } = (0, tB.A)(t, {
            hideSimpleEmbedContent: r,
            allowList: h || f,
            allowHeading: h || f,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        T = (0, tF.rm)(t.id),
        A = (0, tH.Ay)(t),
        S = (0, o.bG)(
            [F.A],
            () => t.hasFlag(ec.pr7.HAS_THREAD) && F.A.getChannel(ee.default.castMessageIdAsChannelId(t.id)),
        ),
        M = (0, tq.Xx)({ guildId: l.guild_id, roleId: A.iconRoleId }),
        v = (0, tP.fF)(t),
        x = (0, tP.ZD)(t);
    return (0, a.jsx)(tV.A, {
        compact: !1,
        className: d()(n, tQ.i, { [tZ.M1]: (0, N.ec)(t), [tZ.XN]: p }),
        disableInteraction: p,
        childrenExecutedCommand: (0, tX.A)(t, l, !1),
        childrenHeader: (0, tJ.A)({
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
        childrenAccessories: e.hideAccessories ? void 0 : (0, tK.J)(e, E, y),
        childrenMessageContent: (0, tz.A)(e, I),
        childrenSystemMessage: (0, tW.A)({ ...e, disableInteraction: p }),
        onContextMenu: i,
        onClick: s,
        hasThread: _ && null != S && t.hasFlag(ec.pr7.HAS_THREAD),
        hasReply: !1,
        "aria-labelledby": v,
        "aria-describedby": x,
        author: A,
        ...T,
        ...g,
    });
});
function t0(e) {
    let { item: t } = e,
        {
            channelId: n,
            messageIds: i,
            title: r,
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
        d = (0, o.bG)([F.A], () => (null != n ? F.A.getChannel(n) : null), [n]),
        l = (0, o.bG)([H.A], () => (d?.guild_id != null ? H.A.getGuild(d.guild_id) : null), [d]),
        c = (0, o.yK)(
            [tl, V.A],
            () => (null == n ? [] : i.map((e) => tl.getMessage(e) ?? V.A.getMessage(n, e)).filter((e) => null != e)),
            [n, i],
        );
    return null == d || null == l || 0 === c.length
        ? null
        : (0, a.jsxs)("div", {
              className: tR.kL,
              children: [
                  null != r
                      ? (0, a.jsx)("div", {
                            className: tR.gn,
                            children: (0, a.jsx)("div", { className: tR.DD, children: r }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: tR.MJ,
                      children: c.map((e) =>
                          (0, a.jsx)(
                              t$,
                              {
                                  channel: d,
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
function t1(e) {
    let { item: t } = e;
    switch (t.data.kind) {
        case "guildEvent":
            return (0, a.jsx)(tU, { eventId: t.data.eventId });
        case "message":
        case "forumThread":
            return (0, a.jsx)(t0, { item: t });
        case "contentInventory":
            switch (t.data.content.content_type) {
                case T.ContentInventoryEntryType.CUSTOM_STATUS:
                    return (0, a.jsx)(tv, { item: t });
                case T.ContentInventoryEntryType.PLAYED_GAME:
                case T.ContentInventoryEntryType.TOP_GAME:
                    return (0, a.jsx)(tD, { item: t });
                default:
                    return (0, a.jsx)("div", { children: "Unsupported content inventory type" });
            }
        default:
            return (0, a.jsx)("div", { children: "Unknown item type" });
    }
}
var t5 = n(682163),
    t3 = n(995273),
    t4 = n(668499);
function t6(e) {
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
        r = s.useMemo(() => {
            if ("guildEvent" === t.data.kind) {
                let e = D.Ay.getGuildScheduledEvent(t.data.eventId);
                return e?.guild_id;
            }
        }, [t]),
        d = s.useMemo(() => {
            if ("contentInventory" === t.data.kind) return t.data.content.author_id;
        }, [t]),
        l = s.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                case "forumThread":
                    return ee.default.extractTimestamp(t.data.message.id);
                case "guildEvent":
                    return ee.default.extractTimestamp(t.data.eventId);
                default:
                    return t.timestamp;
            }
        }, [t]),
        c = (0, o.bG)([F.A], () => F.A.getChannel(i), [i]),
        u = (0, tN.Ay)(c),
        m = c?.guild_id ?? r,
        _ = (0, o.bG)([H.A], () => (null != m ? H.A.getGuild(m) : null), [m]),
        g = (0, o.bG)([J.default], () => (null != d ? J.default.getUser(d) : null), [d]);
    return "unknown" === n
        ? null
        : (0, a.jsx)("div", {
              className: t4.kL,
              children: (0, a.jsxs)("div", {
                  className: t4.wx,
                  children: [
                      (function () {
                          if ("guild" === n && null != _)
                              return (0, a.jsx)(t5.Ay, {
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
                              return (0, a.jsx)("img", { src: e, alt: g.username, className: t4.my });
                          }
                          return null;
                      })(),
                      (0, a.jsxs)("div", {
                          className: t4.Se,
                          children: [
                              (0, a.jsx)("div", {
                                  className: t4.$,
                                  children: (0, a.jsxs)("div", {
                                      className: t4.gH,
                                      children: [
                                          "guild" === n && null != _
                                              ? (0, a.jsx)(tT.E, {
                                                    variant: "body-md/semibold",
                                                    color: "text-strong",
                                                    className: t4.DD,
                                                    children: _.name,
                                                })
                                              : "user" === n && null != g
                                                ? (0, a.jsx)(tT.E, {
                                                      variant: "body-md/semibold",
                                                      color: "text-strong",
                                                      className: t4.DD,
                                                      children: g.username,
                                                  })
                                                : null,
                                          (0, a.jsx)(tT.E, {
                                              variant: "body-xs/normal",
                                              color: "text-muted",
                                              className: t4.vE,
                                              children: (0, t3.jb)(l),
                                          }),
                                      ],
                                  }),
                              }),
                              (function () {
                                  let e = (function () {
                                      switch (t.data.kind) {
                                          case "message":
                                              if (t.channelType === ec.rbe.GUILD_ANNOUNCEMENT)
                                                  return eu.intl.string(eu.t["8P08G9"]);
                                              return eu.intl.string(eu.t.hMFMY9);
                                          case "guildEvent":
                                              return eu.intl.string(eu.t["6pFsLQ"]);
                                          case "forumThread":
                                              return eu.intl.string(eu.t.bYNuVx);
                                          case "contentInventory":
                                              switch (t.data.content.content_type) {
                                                  case T.ContentInventoryEntryType.CUSTOM_STATUS:
                                                      return eu.intl.string(eu.t.fxOLPR);
                                                  case T.ContentInventoryEntryType.TOP_GAME:
                                                  case T.ContentInventoryEntryType.PLAYED_GAME:
                                                      return eu.intl.string(eu.t.ktOTRQ);
                                                  default:
                                                      return `${t.data.content.content_type}`;
                                              }
                                          default:
                                              return "";
                                      }
                                  })();
                                  if ("user" === n)
                                      return (0, a.jsx)("div", {
                                          className: t4.VA,
                                          children: (0, a.jsx)(tT.E, {
                                              variant: "body-sm/medium",
                                              color: "text-subtle",
                                              tag: "span",
                                              className: t4.o4,
                                              children: e,
                                          }),
                                      });
                                  if (null != c && null != e) {
                                      let t = (0, tb.gU)(c, _);
                                      return (0, a.jsxs)("div", {
                                          className: t4.VA,
                                          children: [
                                              (0, a.jsx)(tT.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: t4.o4,
                                                  children: e,
                                              }),
                                              (0, a.jsx)(tT.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: t4.o4,
                                                  children: eu.intl.string(eu.t.CHUAYk),
                                              }),
                                              (0, a.jsxs)(tT.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: t4.o4,
                                                  children: [
                                                      null != t &&
                                                          (0, a.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: t4.p,
                                                          }),
                                                      u,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, a.jsx)("div", {
                                            className: t4.VA,
                                            children: (0, a.jsx)(tT.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                tag: "span",
                                                className: t4.o4,
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
var t9 = n(301690);
function t2(e) {
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
                            (0, tE.ci)(t.data.message.channel_id, t.data.message.id);
                            break;
                        case "guildEvent": {
                            let e = D.Ay.getGuildScheduledEvent(t.data.eventId);
                            null != e && (0, tI.pX)(ec.BVt.GUILD_EVENT_DETAILS(e.guild_id, e.id));
                            break;
                        }
                        case "forumThread":
                            (0, tE.ci)(t.data.threadChannel.id, t.data.message.id);
                            break;
                        case "contentInventory":
                            (0, ty.openUserProfileModal)({ userId: t.data.content.author_id });
                    }
            },
            [t],
        );
    return (0, a.jsxs)(tf.D, {
        className: t9.k,
        onClick: n,
        children: [
            (0, a.jsx)(t6, { item: t }),
            (0, a.jsx)("div", { className: t9.o, children: (0, a.jsx)(t1, { item: t }) }),
        ],
    });
}
var t8 = n(710028);
let t7 = function (e) {
    let t,
        n,
        i,
        r,
        d,
        { scrollContainerRef: l } = e,
        c = (0, o.bG)([tl], () => tl.notificationItem(), []),
        { showDot: u } = { value: 0, showDot: (0, o.bG)([tl], () => tl.hasNewContent(), []) },
        m = s.useRef(null),
        [_, g] = s.useState(!1),
        {
            data: p,
            loading: h,
            isRefreshing: f,
            handleOnRefresh: I,
            viewabilityConfigCallbackPairs: E,
        } = (function (e) {
            let { showDot: t, notificationItem: n, isWaterwheelsCardEligible: i } = e,
                [a, r] = s.useState(!1),
                {
                    unreadItems: d,
                    readItems: l,
                    allUnreadItemsHydrated: c,
                } = (function () {
                    let { isWaterwheelsCardEligible: e } =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, b.hY)("icymi_items"),
                        n = (0, o.bG)([tl], () => tl.getUnreadDisplayItems()),
                        i = (0, o.bG)([tl], () => tl.getReadDisplayItems()),
                        a = (0, o.bG)([tl], () => tl.getNextIndexToHydrate()),
                        r = (0, o.cf)([tl], () => tl.getHydratedItems()),
                        d = (0, o.bG)([tl], () => tl.getMissingItems());
                    s.useEffect(() => {
                        let e = Date.now() + i.length;
                        el.A.ackGravityItems(i.map((t) => ({ id: t.id, timestamp: e-- }), !0));
                    }, [i]);
                    let l = [],
                        c = [],
                        u = 0;
                    for (let i = 0; i < n.length && !(u >= a); i++) {
                        let a = n[i];
                        if ((u++, d[a.id])) continue;
                        let s = r[a.id];
                        if (
                            (null == s &&
                                a.type === q.Mm.MESSAGE &&
                                a.data.message_context?.reference_message_id != null &&
                                (s = r[a.data.message_id]),
                            null != s)
                        ) {
                            let n = tp(a, s, !0, t, e);
                            null != n && l.push(n);
                        }
                    }
                    for (let n = 0; n < i.length && !(u >= a); n++) {
                        let a = i[n];
                        if ((u++, d[a.id])) continue;
                        let s = r[a.id];
                        if (
                            (null == s &&
                                a.type === q.Mm.MESSAGE &&
                                a.data.message_context?.reference_message_id != null &&
                                (s = r[a.data.message_id]),
                            null != s)
                        ) {
                            let n = tp(a, s, !1, t, e);
                            null != n && c.push(n);
                        }
                    }
                    return { unreadItems: l, readItems: c, allUnreadItemsHydrated: a >= n.length };
                })({ isWaterwheelsCardEligible: i }),
                u = (0, o.bG)([tl], () => tl.getVersion(), []),
                m = (0, o.bG)([tl], () => !(tl.isFirstPageHydrated() && u > 0));
            s.useEffect(() => {
                null != tl.getLoadId() && tc.trackFeedShown({ homeSessionId: "gravity" });
            }, [u]);
            let _ = (0, o.bG)([tl], () => tl.isRefreshing(), []),
                g = (0, o.bG)([tl], () => tl.isHydrating(), []),
                [p, h] = s.useState([]),
                { loadId: f, lastScrollEventTimestamp: I } = (0, o.cf)([tl], () => ({
                    loadId: tl.getLoadId(),
                    lastScrollEventTimestamp: tl.lastScrollEvent(),
                })),
                E = p
                    .filter((e) => {
                        let { item: t } = e;
                        return !tm.has(t.data.kind);
                    })
                    .map((e) => {
                        let { item: t } = e;
                        return t.id;
                    })
                    .pop(),
                y = (0, tg.A)(E);
            s.useEffect(() => {
                if (_ || m || null == y || null == E || E === y) return;
                let e = Date.now();
                e - I > th && (el.A.gravityScrollEvent(e), tc.trackFeedFirstScrollStarted());
            }, [_, I, y, E, f, m]);
            let T = s.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if ((t.some((e) => "end" === e.item.data.kind) && r(!0), 0 === t.length)) return;
                        h(t);
                        let n = [],
                            i = t_(t),
                            a = Date.now();
                        for (let e = i.length - 1; e >= 0; e--) {
                            let t = i[e];
                            null != t && n.push({ id: t.id, type: (0, q.xG)(t), timestamp: a++ });
                        }
                        (n.length > 0 && el.A.ackGravityItems(n, !0),
                            tc.trackItemShortImpression(
                                t,
                                i.map((e) => ({ id: e.id, type: (0, q.xG)(e) })),
                                u,
                            ));
                    },
                    [u, r],
                ),
                A = s.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if (0 === t.length) return;
                        let n = t_(t);
                        (tc.trackItemLongImpression(
                            t,
                            n.map((e) => ({ id: e.id, type: (0, q.xG)(e) })),
                            u,
                        ),
                            el.A.triggerItemsLongImpression(
                                t
                                    .filter((e) => {
                                        let { item: t } = e;
                                        return !tm.has(t.data.kind);
                                    })
                                    .map((e) => {
                                        let { item: t, index: n } = e;
                                        return {
                                            itemId: t.id,
                                            itemType: eE(t),
                                            triggerType: "list",
                                            itemFeedIndex: n,
                                            itemScore: t.score ?? null,
                                            itemChannelType: t.channelType ?? null,
                                            isInitiallyVisible: !1,
                                        };
                                    }),
                            ));
                    },
                    [u],
                ),
                S = s.useCallback((e) => {
                    let { viewableItems: t } = e;
                    el.A.startItemsDwell(
                        t
                            .filter((e) => {
                                let { item: t } = e;
                                return !tm.has(t.data.kind);
                            })
                            .map((e) => {
                                let { item: t, index: n } = e;
                                return {
                                    itemId: t.id,
                                    itemType: eE(t),
                                    triggerType: "list",
                                    itemFeedIndex: n,
                                    itemScore: t.score ?? null,
                                    itemChannelType: t.channelType ?? null,
                                    isInitiallyVisible: !1,
                                };
                            }),
                    );
                }, []),
                M = s.useMemo(
                    () => [
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 100,
                                minimumViewTime: 50,
                            },
                            onViewableItemsChanged: T,
                        },
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 50,
                                minimumViewTime: 1e3,
                            },
                            onViewableItemsChanged: A,
                        },
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 50,
                                minimumViewTime: 50,
                            },
                            onViewableItemsChanged: S,
                        },
                    ],
                    [T, A, S],
                );
            s.useEffect(() => {
                el.A.openICYMITab();
            }, []);
            let v = tu(t),
                { data: x, stickyHeaderIndices: C } = s.useMemo(() => {
                    let e = [];
                    return (
                        m &&
                            null != n &&
                            n.type === q.Mm.CUSTOM_STATUS &&
                            e.push({
                                id: n.id,
                                timestamp: Date.now(),
                                data: { kind: "contentInventory", content: ef(n).activity },
                                score: n.score,
                                unread: !0,
                            }),
                        m
                            ? e.push({ id: "loading", timestamp: 0, unread: !1, data: { kind: "loading" } })
                            : (d.forEach((t) => {
                                  eI(t) || e.push(t);
                              }),
                              c && e.push({ id: "end", timestamp: 0, unread: !1, data: { kind: "end" } }),
                              l.length > 0 &&
                                  l.forEach((t) => {
                                      eI(t) || e.push(t);
                                  }),
                              g &&
                                  e.push({
                                      id: "bottomLoading",
                                      timestamp: 0,
                                      unread: !1,
                                      data: { kind: "bottomLoading" },
                                  })),
                        { data: e, stickyHeaderIndices: [] }
                    );
                }, [m, n, d, c, l, g]);
            return {
                data: x,
                loading: m,
                version: u,
                visibleItemIds: p,
                endVisible: a,
                isRefreshing: _,
                handleOnRefresh: v,
                stickyHeaderIndices: C,
                viewabilityConfigCallbackPairs: M,
            };
        })({ showDot: u, notificationItem: c }),
        y = tu();
    s.useEffect(
        () => () => {
            y();
        },
        [y],
    );
    let T = (0, o.bG)([tl], () => tl.hasNewContent(), []),
        A = (0, o.bG)([tl], () => tl.isHydrating(), []),
        S = s.useMemo(() => E[0].onViewableItemsChanged, [E]),
        { registerItemRef: M } =
            ((t = s.useRef(null)),
            (n = s.useRef(new Map())),
            (i = s.useRef(new Set())),
            (r = s.useRef(S)),
            (d = s.useRef(p)),
            s.useEffect(() => {
                ((r.current = S), (d.current = p));
            }, [S, p]),
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
                                let e = d.current,
                                    t = Array.from(i.current)
                                        .map((t) => {
                                            let n = e.findIndex((e) => e.id === t);
                                            return n >= 0 ? { index: n, item: e[n] } : null;
                                        })
                                        .filter((e) => null !== e)
                                        .sort((e, t) => e.index - t.index);
                                r.current({ viewableItems: t });
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
        v = s.useMemo(() => p.some((e) => "end" === e.data.kind), [p]),
        x = s.useCallback(() => {
            if (v) return;
            let e = l.current;
            null == e ||
                !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) ||
                _ ||
                h ||
                A ||
                (g(!0),
                (async function () {
                    let e = tl.getUnreadDisplayItems(),
                        t = tl.getReadDisplayItems(),
                        n = tl.getNextIndexToHydrate();
                    await ep([...e, ...t], n, n + 15, tl.getHydratedItems());
                })().finally(() => {
                    setTimeout(() => {
                        g(!1);
                    }, 300);
                }));
        }, [h, _, A, v, l]);
    s.useEffect(() => {
        let e = l.current;
        if (null != e)
            return (
                e.addEventListener("scroll", x),
                () => {
                    e.removeEventListener("scroll", x);
                }
            );
    }, [x, l]);
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
                              { ref: (t) => M(e.id, t), "data-item-id": e.id, children: (0, a.jsx)(t2, { item: e }) },
                              e.id,
                          ),
            [M],
        );
    return h && 0 === p.length
        ? (0, a.jsx)("div", {
              style: { padding: "32px", textAlign: "center" },
              children: (0, a.jsx)("div", { children: "Loading ICYMI feed..." }),
          })
        : (0, a.jsxs)("div", {
              className: t8.k,
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
                      className: t8.j,
                      children: [
                          p.map((e) => w(e)),
                          !v &&
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
var ne = n(534515),
    nt = n(999900);
let nn = (0, g.A)(function (e) {
    let { width: t } = e,
        n = (0, y.c)("ICYMIPage");
    (s.useEffect(() => {
        n || (0, l.pX)(ec.BVt.ME);
    }, [n]),
        s.useLayoutEffect(() => {
            n && _.I(ec.BVt.ICYMI);
        }, [n]),
        (0, p.Ay)(() => {
            n && (0, I.d0)("icymi");
        }));
    let i = (0, o.bG)([E.A], () => E.A.theme),
        r = (0, o.bG)([tl], () => tl.isRefreshing()),
        g = s.useRef(null);
    (0, h.HU)({ location: eu.intl.string(eu.t["jnXV/V"]) });
    let T = tu(),
        A = eu.intl.string(eu.t.wzzjk9);
    return n
        ? (0, a.jsxs)("div", {
              className: d()(nt.TE, ne.kL),
              children: [
                  (0, a.jsx)(c.N, {
                      theme: i,
                      children: (e) =>
                          (0, a.jsxs)(f.A, {
                              className: e,
                              toolbar: (0, a.jsx)(f.A.Icon, {
                                  icon: u.RefreshIcon,
                                  tooltip: A,
                                  onClick: T,
                                  disabled: r,
                                  "aria-label": A,
                              }),
                              children: [
                                  (0, a.jsx)(f.A.Icon, { icon: m.g, "aria-hidden": !0 }),
                                  (0, a.jsx)(f.A.Title, { children: eu.intl.string(eu.t["jnXV/V"]) }),
                                  (0, a.jsx)(f.A.Title, {
                                      children: (0, a.jsx)("p", {
                                          className: ne.HH,
                                          children: eu.intl.string(eu.t.Ac2OZA),
                                      }),
                                  }),
                              ],
                          }),
                  }),
                  (0, a.jsx)("div", {
                      ref: g,
                      className: d()(nt.Qs, ne.Qs),
                      children: (0, a.jsx)(t7, { scrollContainerRef: g }),
                  }),
              ],
          })
        : null;
});
