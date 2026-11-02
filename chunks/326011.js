(n.r(t), n.d(t, { default: () => ns }));
var i,
    a = n(477900),
    s = n(582128),
    r = n(503698),
    d = n.n(r),
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
    y = n(335934);
n(321073);
var A = n(681154),
    T = n(73153),
    S = n(99753),
    M = n(20805),
    v = n(583846),
    x = n(736056),
    C = n(710195),
    D = n(698441),
    w = n(731699),
    N = n(320095),
    b = n(945810),
    k = n(280450),
    G = n(287809);
function L(e) {
    return (G.default.getCurrentUser()?.isStaff(), !1);
}
(0, b.mj)({
    name: "2026-11-waterwheels-discover",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var O = n(435558);
let R = {
        JOIN_GUILD: "join_guild",
        OPEN_GUILD: "open_guild",
        OPEN_GAME: "open_game",
        OPEN_URI: "open_uri",
        OPEN_NUDGE: "open_nudge",
    },
    j = ["post", "carousel", "server_row"];
function U(e) {
    return (0, O.isPlainObject)(e);
}
function F(e) {
    let { guild_id: t, icon_url: n, online: i, members: a, ...s } = e;
    return { ...s, guildId: t, iconUrl: n, online: Number(i), members: Number(a) };
}
function Y(e) {
    return { ok: !1, reason: e };
}
var V = n(734057),
    H = n(776096),
    P = n(71393),
    B = n(232835),
    K = n(576705),
    z = n(573163),
    J = n(994500),
    W = n(543465),
    X = n(927813),
    q = n(449054),
    Q = n(596720);
let $ = {};
class Z extends o.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        $ = e ?? {};
    }
    filterStaffContent() {
        return !0 === $.filterStaffContent;
    }
    getDoubleTapBehavior() {
        return $.doubleTapBehavior ?? Q.Ai.DEFAULT;
    }
    getState() {
        return $;
    }
    getUserAgnosticState() {
        return $;
    }
}
let ee = new Z(T.h, {
    SET_ICYMI_FILTERS: function (e) {
        $ = e.filters;
    },
});
var et = n(935208);
function en(e, t) {
    let n = z.Ay.getTrackedAckMessageId(e);
    return null == n || et.default.extractTimestamp(t) > et.default.extractTimestamp(n);
}
let ei = 7 * X.A.Millis.DAY,
    ea = { readIdToTimestampMap: {} };
class es extends o.Ay.DeviceSettingsStore {
    static displayName = "ICYMIUnreadStateStore";
    static persistKey = "ICYMIUnreadStateStore";
    initialize(e) {
        ea =
            null != e && null != e.readIdToTimestampMap
                ? { readIdToTimestampMap: e.readIdToTimestampMap }
                : { readIdToTimestampMap: {} };
        let t = Date.now() - ei;
        for (let e of Object.keys(ea.readIdToTimestampMap).filter((e) => ea.readIdToTimestampMap[e] < t))
            delete ea.readIdToTimestampMap[e];
    }
    getReadTimestamp(e) {
        return ea.readIdToTimestampMap[e];
    }
    getState() {
        return ea;
    }
    getUserAgnosticState() {
        return ea;
    }
}
let er = new es(T.h, {
    ICYMI_ACK_ITEMS: function (e) {
        let { items: t, override: n } = e;
        t.forEach((e) => {
            null != e && (null == ea.readIdToTimestampMap[e.id] || n) && (ea.readIdToTimestampMap[e.id] = e.timestamp);
        });
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let { items: t } = e;
        for (let e of t)
            e.type !== Q.Mm.MESSAGE ||
                null != ea.readIdToTimestampMap[e.id] ||
                e.data.message_context?.external_content_application_id != null ||
                en(e.data.channel_id, e.data.message_id) ||
                (ea.readIdToTimestampMap[e.id] = 0);
    },
    CLEAR_ICYMI_READ_STATES: function () {
        ea.readIdToTimestampMap = {};
    },
});
var ed = n(6161);
n(256265);
var el = n(95701),
    eo = n(4106),
    ec = n(522606),
    eu = n(652215),
    em = n(105292),
    e_ =
        (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.DEFAULT = 1)] = "DEFAULT"),
        (i[(i.MORE = 2)] = "MORE"),
        (i[(i.LESS = 3)] = "LESS"),
        (i[(i.MUTED = 4)] = "MUTED"),
        i);
function eg(e) {
    return e.type === Q.Mm.MESSAGE || e.type === Q.Mm.GUILD_EVENT;
}
function eh(e) {
    return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function ep(e, t, n, i) {
    let a = e.slice(t, n);
    if (0 === a.length) return;
    eo.A.loadHydratedAttempt((0, ec.V)(t, n));
    let s = a.filter((e) => null == i[e.id]),
        r = s
            .filter((e) => e.type === Q.Mm.MESSAGE)
            .map((e) => ({ channel_id: e.data.channel_id, message_id: e.data.message_id })),
        d = s
            .map((e) => {
                if (e.type === Q.Mm.MESSAGE) {
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
            .filter((e) => e.type === Q.Mm.ACTIVITY)
            .map((e) => ({ user_id: e.data.user_id, content_id: e.data.content_id }));
    await eo.A.fetchHydrated(t, n, { messageItems: [...r, ...d], activityItems: l });
}
function ef(e, t) {
    return {
        ...t,
        message: (0, N.rh)(e.message),
        threadChannel: null != e.thread_channel ? el.Lt.fromServer(e.thread_channel, e.guild_id) : void 0,
    };
}
function eI(e) {
    return {
        id: e.id,
        type: Q.Mm.CUSTOM_STATUS,
        activity: {
            id: e.id,
            author_id: e.data.user_id,
            author_type: ed.ContentInventoryAuthorType.USER,
            traits: [],
            participants: [],
            content_type: A.ContentInventoryEntryType.CUSTOM_STATUS,
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
function eE(e) {
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
    let i = V.A.getChannel(t);
    if (i?.nsfw) return !0;
    let a = null != (n = i?.guild_id ?? n) ? P.A.getGuild(n) : null;
    return a?.nsfwLevel === eu.ftr.EXPLICIT || a?.nsfwLevel === eu.ftr.AGE_RESTRICTED;
}
function ey(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "bottomLoading":
            return "bottomLoading";
        case "message":
            if (e.channelType === eu.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            if (e.data.messageContext?.external_content_application_id != null) return "game_message";
            return "message";
        case "guildEvent":
            return "guild_event";
        case "contentInventory":
            if (e.data.content.content_type === A.ContentInventoryEntryType.CUSTOM_STATUS)
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
var eA = n(174459);
function eT(e) {
    let t = [],
        n = [],
        i = [],
        a = [];
    (e.unreadFeedItems.forEach((e) => {
        (t.push(e.id), i.push(eS(e)));
    }),
        e.readFeedItems.forEach((e) => {
            (n.push(e.id), a.push(eS(e)));
        }),
        eA.default.track(eu.HAw.FEED_LOADED, {
            ...e.newTrackingProps,
            home_session_id: e.homeSessionId,
            tab_badged: e.hasNewContent,
            unread_feed_item_ids: t,
            read_feed_item_ids: n,
            unread_feed_item_types: i,
            read_feed_item_types: a,
        }));
}
function eS(e) {
    switch (e.type) {
        case Q.Mm.MESSAGE:
            if (e.data.channel_type === eu.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            return "message";
        case Q.Mm.ACTIVITY:
            return "hotwheels_gaming_activity";
        case Q.Mm.CUSTOM_STATUS:
            return "hotwheels_custom_status";
        case Q.Mm.GUILD_EVENT:
            return "guild_event";
        case Q.Mm.RECOMMENDED_GUILDS:
            return "recommended_guilds";
        case Q.Mm.DISCOVER_ITEM:
            return "discover_item";
    }
}
var eM = n(424994);
let ev = +X.A.Millis.DAY,
    ex = 3 * X.A.Millis.DAY,
    eC = [],
    eD = null,
    ew = 0,
    eN = [],
    eb = [],
    ek = {},
    eG = {},
    eL = {},
    eO = {},
    eR = {},
    ej = {},
    eU = 0,
    eF = !1,
    eY = !1,
    eV = !1,
    eH = null,
    eP = null,
    eB = 0,
    eK = [],
    ez = [],
    eJ = 0,
    eW = [],
    eX = 0,
    eq = !0,
    eQ = !1,
    e$ = new Set(),
    eZ = !1,
    e0 = !1,
    e1 = 0,
    e5 = 0;
function e3(e, t) {
    if (Date.now() - ew > 6 * X.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function e2(e) {
    if (!ee.filterStaffContent()) return !0;
    if (eg(e)) {
        if (e.data.guild_id === Q.VL) return !0;
        let t = P.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(eu.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function e6(e) {
    if (e.type !== Q.Mm.DISCOVER_ITEM) return !0;
    if (!L("icymi_store")) return !1;
    let t = (function (e) {
        try {
            if (!U(e) || null == e.id || null == e.type || !U(e.layout) || !Array.isArray(e.actions))
                return Y("invalid_card");
            if (!j.includes(e.layout.type)) return Y("unknown_layout");
            if (!e.actions.every((e) => U(e) && Object.values(R).includes(e.type))) return Y("unknown_action");
            if (void 0 !== e.client_eligibility && "notifications_permission" !== e.client_eligibility)
                return Y("unknown_eligibility");
            return {
                ok: !0,
                card: {
                    id: e.id,
                    type: e.type,
                    layout: (function (e) {
                        switch (e.type) {
                            case "server_row":
                                return F(e);
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
                                        return { ...a, gameId: t, coverUrl: n, server: null == i ? null : F(i) };
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
            return Y("invalid_card");
        }
    })(e.data.item);
    return !!t.ok && ((eL[e.id] = { ...e, card: t.card }), !0);
}
function e9(e, t, n, i) {
    let a = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < a.length ? a.splice((t + 1) * i, 0, e) : a.push(e);
        }),
        a
    );
}
function e4() {
    if (
        ((eK = eK.filter((e) => e.type !== Q.Mm.RECOMMENDED_GUILDS)),
        (ez = ez.filter((e) => e.type !== Q.Mm.RECOMMENDED_GUILDS)),
        0 === eW.length)
    )
        return;
    let e = "recommendedGuilds",
        t = P.A.getGuildsArray().filter((e) => e.features.has(eu.GuildFeatures.COMMUNITY)).length >= 5,
        n = er.getReadTimestamp(e);
    if (t && null != n && Date.now() - eX > ev && Date.now() - n < ex) return;
    let i = { id: e, type: Q.Mm.RECOMMENDED_GUILDS, score: 50 };
    if (((eL[i.id] = i), (eG[i.id] = i), 0 === eK.length)) ez = [i, ...ez];
    else if ((!t && eK.length < 5) || (t && eK.length < 10)) eK = [...eK, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        eK.splice(e, 0, i);
    } else eK.splice(5, 0, i);
}
function e7() {
    let e = new Set();
    if (
        (eN.forEach((t) => {
            e.add(t.id);
        }),
        null != eP)
    )
        if (e.has(eP.id)) {
            let e = eP.id,
                t = eP.type,
                n = eN.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((eP = eN[n]), (eN = eN.filter((t) => t.id !== e)), (eN = [eP, ...eN]));
        } else ((eN = [eP, ...eN]), e.add(eP.id));
    eN.forEach((e) => {
        ((eG[e.id] = e),
            e.type === Q.Mm.CUSTOM_STATUS &&
                (J.A.isBlockedOrIgnored(e.data.user_id) ? (eO[e.id] = !0) : (eL[e.id] = eI(e))));
    });
}
function e8(e) {
    let t, n, i, a, s;
    if ((eN.length > 0 && ((eC = eN), (eN = []), (eb = [])), eU++, null != e)) ((eK = e.newUnread), (ez = e.newRead));
    else {
        let [e, t] = te(eC);
        ((eK = e), (ez = t));
    }
    ((function () {
        let e = P.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != eR[n] && eR[n] < 0) continue;
            let e = D.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, D.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = V.A.getChannel(n.channel_id);
                        if (!K.A.can(eu.xBc.VIEW_CHANNEL, e)) continue;
                    }
                    if (
                        ((0, D.W$)(n, 2 * X.A.Seconds.DAY) || (0, D.Fd)(n)) &&
                        (null == eL[n.id] &&
                            (eL[n.id] = { id: n.id, type: Q.Mm.GUILD_EVENT, score: 10, event_id: n.id }),
                        t.push({
                            id: n.id,
                            type: Q.Mm.GUILD_EVENT,
                            score: 10,
                            data: { guild_id: n.guild_id, event_id: n.id, channel_id: n.channel_id ?? void 0 },
                        }),
                        ++i >= 1)
                    )
                        break;
                }
        }
        t.sort((e, t) => {
            let n = H.A.getGuildAffinity(e.data.guild_id),
                i = H.A.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let n = [],
            i = [];
        (t.forEach((e) => {
            ((eG[e.id] = e), null != er.getReadTimestamp(e.id) ? i.push(e) : n.push(e));
        }),
            (eK = e9(eK, n, Q.Mm.GUILD_EVENT, 7)),
            (ez = e9(ez, i, Q.Mm.GUILD_EVENT, 7)));
    })(),
        (t = new Set()),
        (n = {}),
        (i = []),
        (a = []),
        (s = S.A.getFeed(eM.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5),
        s.forEach((e) => {
            if (
                t.has(e.content.id) ||
                (e.content.content_type !== A.ContentInventoryEntryType.PLAYED_GAME &&
                    e.content.content_type !== A.ContentInventoryEntryType.CUSTOM_STATUS &&
                    e.content.content_type !== A.ContentInventoryEntryType.TOP_GAME) ||
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
            null == eL[e.content.id] &&
                (eL[e.content.id] = { id: e.content.id, type: Q.Mm.ACTIVITY, score: 15, activity: e.content });
            let s = {
                id: e.content.id,
                type: Q.Mm.ACTIVITY,
                score: 15,
                data: { user_id: e.content.author_id, content_id: e.content.id },
            };
            (t.add(e.content.id), (eG[s.id] = s), null != er.getReadTimestamp(s.id) ? a.push(s) : i.push(s));
        }),
        (eK = e9(eK, i, Q.Mm.ACTIVITY, 5)),
        (ez = e9(ez, a, Q.Mm.ACTIVITY, 5)),
        e4(),
        null != ek.load_id &&
            eD !== ek.load_id &&
            (eT({
                newTrackingProps: ek,
                hasNewContent: eY,
                unreadFeedItems: eK,
                readFeedItems: ez,
                homeSessionId: "gravity",
            }),
            (eD = ek.load_id ?? null),
            (ek = {})),
        (eJ = 0),
        eK.length + ez.length === 0 && (e0 = !0),
        ep([...eK, ...ez], 0, Q.w5, eL),
        (eQ = !1));
}
function te(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let a = null != er.getReadTimestamp(e.id);
            (e.type === Q.Mm.MESSAGE &&
                e.data.message_context?.external_content_application_id == null &&
                (a = a || !en(e.data.channel_id, e.data.message_id)),
                a ? t.push(e) : e.type === Q.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e));
        }),
        [
            [...i, ...n],
            t.sort((e, t) => {
                var n, i;
                let a, s;
                return (
                    (n = e.id),
                    (i = t.id),
                    null == (a = er.getReadTimestamp(n)) && (a = void 0),
                    (null == (s = er.getReadTimestamp(i)) && (s = void 0), null == a && null == s)
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
function tt(e, t) {
    let n = [],
        i = new Set(eC.map((e) => e.id));
    for (let a of e)
        !(a.type === Q.Mm.RECOMMENDED_GUILDS || i.has(a.id)) &&
            null == er.getReadTimestamp(a.id) &&
            (a.type !== Q.Mm.MESSAGE || (en(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t)) &&
            n.push(a);
    return n;
}
function tn(e, t) {
    return e.filter((e) => !eg(e) || e.data.channel_id !== t);
}
function ti(e, t) {
    eh(t) === e_.MUTED && ((eC = tn(eC, e)), (eK = tn(eK, e)), (ez = tn(ez, e)), (eN = tn(eN, e)), (eb = tn(eb, e)));
}
function ta(e, t) {
    return e.filter((e) => !eg(e) || e.data.guild_id !== t);
}
function ts(e, t) {
    eh(t) === e_.MUTED && ((eC = ta(eC, e)), (eK = ta(eK, e)), (ez = ta(ez, e)), (eN = ta(eN, e)), (eb = ta(eb, e)));
}
function tr(e) {
    let { type: t, messageId: n, userId: i, emoji: a, reactionType: s } = e,
        r = eL[n];
    if (null == r || r.type !== Q.Mm.MESSAGE) return !1;
    let d = k.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t
        ? (r.message = r.message.addReaction(a, d, { colors: e.colors, reactionType: s }))
        : (r.message = r.message.removeReaction(a, d, s));
}
function td(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    eK.forEach((e, a) => {
        (a > eJ || !eV) && e.type === Q.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let a = eY,
        [s, r] = te(eN);
    if (((eb = tt(s, t)), (eY = eV ? a && eb.length >= Q.$P : a && e3(i, eN)), 0 === n.length && a === eY)) return !1;
    0 !== n.length && ((eK = i), (ez = [...ez, ...n]));
}
class tl extends o.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        (this.waitFor(C.A, k.default, V.A, S.A, x.A, H.A, D.Ay, P.A, ee, w.A, er, B.A, K.A, z.Ay, J.A, W.Ay, G.default),
            null != e &&
                ((eC = e.dehydratedItems ?? []).forEach((e) => {
                    eG[e.id] = e;
                }),
                (eR = e.customGuildScores ?? {}),
                (ej = e.customChannelScoresByGuild ?? {}),
                (eB = e.numOpens ?? 0),
                (ew = e.lastOpened ?? 0),
                (eX = e.lastJoinedRecommendedGuild ?? 0),
                (e5 = e.lastTakenICYMISurvey ?? 0)));
    }
    getVersion() {
        return eU;
    }
    getDehydratedItems() {
        return eC;
    }
    getNewDehydratedItems() {
        return eN;
    }
    getDehydratedItem(e) {
        return eG[e] ?? null;
    }
    getHydratedItem(e) {
        return eL[e] ?? null;
    }
    getMessage(e) {
        let t = eL[e];
        return null == t || t.type !== Q.Mm.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return eL;
    }
    getUnreadDisplayItems() {
        return eK;
    }
    getNewUnreadDehydratedItems() {
        return eb;
    }
    getReadDisplayItems() {
        return ez;
    }
    getNextIndexToHydrate() {
        return eJ;
    }
    getMissingItems() {
        return eO;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === e_.MUTED || this.getCustomChannelScore(e, t) === e_.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == ej[e] || null == ej[e][t] ? e_.UNKNOWN : eh(ej[e][t]);
    }
    getCustomGuildScore(e) {
        return eR[e] ?? 0;
    }
    getCustomGuildScores() {
        return eR;
    }
    hasNewContent() {
        return eY;
    }
    getCurrentStatusAttachments(e) {
        return null == eH || eH[0] !== e ? [] : eH[1];
    }
    getLoadId() {
        return eD;
    }
    hasOpenedEnoughTimes() {
        return 5 === eB;
    }
    hasOpened() {
        return eV;
    }
    getDiscoverableGuilds() {
        return eW;
    }
    videosMuted() {
        return eq;
    }
    isRefreshing() {
        return eQ;
    }
    isHydrating() {
        return e$.size > 0;
    }
    notificationItem() {
        return eP;
    }
    getIsTabFocused() {
        return eZ;
    }
    isFirstPageHydrated() {
        return e0;
    }
    lastScrollEvent() {
        return e1;
    }
    lastTakenICYMISurvey() {
        return e5;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...eK, ...ez].findIndex((e) => e.type === Q.Mm.RECOMMENDED_GUILDS)
            : [...eK, ...ez].filter((e) => null != eL[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: eC,
            numOpens: eB,
            customGuildScores: eR,
            customChannelScoresByGuild: ej,
            lastOpened: ew,
            lastJoinedRecommendedGuild: eX,
            lastTakenICYMISurvey: e5,
        };
    }
}
let to = new tl(T.h, {
        LOGOUT: function () {
            ((eC = []),
                (eN = []),
                (eb = []),
                (eG = {}),
                (ek = {}),
                (eL = {}),
                (eO = {}),
                (eD = null),
                (eR = {}),
                (ej = {}),
                (eU = 0),
                (eF = !1),
                (eY = !1),
                (eV = !1),
                (eK = []),
                (ez = []),
                (eJ = 0),
                (ew = 0),
                (eX = 0),
                (eq = !0),
                (eQ = !1),
                (e$ = new Set()),
                (eP = null),
                (eZ = !1),
                (e0 = !1),
                (eH = null),
                (e1 = 0));
        },
        LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
            let { messageItem: t, customStatusItem: n } = e;
            if (null != n) return ((eP = n), null != eD && ((eN = eN.length > 0 ? eN : [...eC]), e7(), e8()), !0);
            if (null != t) {
                let e = {
                    id: t.message.id,
                    type: Q.Mm.MESSAGE,
                    score: 50,
                    data: {
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        guild_id: t.guild_id,
                        channel_type: eu.rbe.GUILD_TEXT,
                    },
                };
                if (
                    ((eG[t.message.id] = e),
                    (eL[t.message.id] = { ...e, message: (0, N.rh)(t.message) }),
                    null == eD && null == ek)
                ) {
                    let [t, n] = te((eC = [e, ...eC]));
                    ((eK = t), (ez = n));
                } else ((eN = [e, ...eN]), e8());
                return !0;
            }
            return !1;
        },
        LOAD_ICYMI_DEHYDRATED: function (e) {
            let t,
                { items: n, loadId: i, startTime: a, isInitialLoad: s, isReloading: r } = e;
            ((t = new Set(Q.H8)),
                (eN = n
                    .filter((e) => t.has(e.type))
                    .filter(e6)
                    .filter(e2)
                    .map((e) => {
                        if (e.type === Q.Mm.MESSAGE && null != e.data.message_context) {
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
                e7(),
                (ek = { load_id: i, load_time_millis: Date.now() - a, feed_item_ids: eN.map((e) => e.id) }));
            let [d, l] = te(eN);
            if (((eb = tt(d)), !eV || 0 === eU || s))
                ((eU = 0), !eZ && e3(d, eN) ? ((eY = !0), (eF = !0)) : (eY = !1), e8({ newUnread: d, newRead: l }));
            else {
                eU > 0 && (eP = null);
                let e = eb.length > Q.$P;
                (r || (eY = e), e && (ep([...d, ...l], 0, Q.w5, eL), d.length + l.length === 0 && (e0 = !0)));
            }
            eT({
                newTrackingProps: ek,
                hasNewContent: eY,
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
            ((e0 = !0), (eL = { ...eL }));
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
                        type: Q.Mm.MESSAGE,
                        score: -1,
                        data: {
                            guild_id: t.guild_id,
                            channel_id: t.channel_id,
                            message_id: t.message.id,
                            channel_type: eu.rbe.GUILD_TEXT,
                            has_mention: !1,
                        },
                    });
                let i = B.A.getMessage(t.channel_id, t.message.id);
                if (null != i) {
                    let e = ef(t, n);
                    eL[t.message.id] = { ...e, message: i };
                } else eL[t.message.id] = ef(t, n);
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
                    eL[t.id] = { ...n, activity: t };
                }),
                s === eJ && (eJ = r),
                e$.delete((0, ec.V)(s, r)));
        },
        LOAD_ICYMI_CUSTOM_SCORES: function (e) {
            let { scores: t } = e;
            for (let e of t)
                for (let t of ((eR[e.guild_id] = e.guild_score),
                ts(e.guild_id, e.guild_score),
                Object.keys(e.custom_channel_scores)))
                    (null == ej[e.guild_id] && (ej[e.guild_id] = {}),
                        (ej[e.guild_id][t] = e.custom_channel_scores[t]),
                        ti(t, e.custom_channel_scores[t]));
            ((eR = { ...eR }), (ej = { ...ej }));
        },
        LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
            let { guilds: t } = e;
            ((eW = t.map((e) => (0, q.jE)(e.guild))), e4());
        },
        ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
            let { channelScores: t, guildId: n, guildScore: i } = e;
            (null != i && ((eR[n] = i), ts(n, i), (eR = { ...eR })),
                t?.forEach((e) => {
                    let { channelId: t, score: i } = e;
                    (null == ej[n] && (ej[n] = {}), (ej[n][t] = i), ti(t, i), (ej = { ...ej }));
                }));
        },
        RELOAD_ICYMI: function () {
            if (0 === eN.length) return !1;
            (e8(), (eY = !1));
        },
        ICYMI_TAB_OPENED: function () {
            ((eV = !0), (ew = Date.now()), eF && ((eF = !1), (eY = !1)), eB < 5 && eB++);
        },
        ICYMI_FEEDBACK_GIVEN: function () {
            eB = 6;
        },
        MESSAGE_REACTION_ADD: tr,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { messageId: t, reactions: n } = e,
                i = eL[t];
            if (null == i || i.type !== Q.Mm.MESSAGE) return !1;
            let a = k.default.getId();
            i.message = i.message.addReactionBatch(n, a);
        },
        MESSAGE_REACTION_REMOVE: tr,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { messageId: t } = e,
                n = eL[t];
            if (null == n || n.type !== Q.Mm.MESSAGE) return !1;
            n.message = n.message.set("reactions", []);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { messageId: t, emoji: n } = e,
                i = eL[t];
            if (null == i || i.type !== Q.Mm.MESSAGE) return !1;
            i.message = i.message.removeReactionsForEmoji(n);
        },
        CHANNEL_ACK: td,
        MESSAGE_ACK: td,
        ICYMI_JOINED_RECOMMENDED_GUILD: function () {
            eX = Date.now();
        },
        ICYMI_SET_VIDEOS_MUTED: function (e) {
            let { muted: t } = e;
            eq = t;
        },
        ICYMI_SET_REFRESHING: function (e) {
            let { refreshing: t } = e;
            eQ = t;
        },
        LOAD_ICYMI_HYDRATED_ATTEMPT: function (e) {
            let { hydrationId: t } = e;
            e$.add(t);
        },
        LOAD_ICYMI_HYDRATED_FAILED: function (e) {
            let { hydrationId: t } = e;
            e$.delete(t);
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
            e1 = t;
        },
        ICYMI_TAKE_SURVEY: function (e) {
            let { takenAt: t } = e;
            e5 = t;
        },
    }),
    tc = new Set(["end", "loading", "bottomLoading", "icymiHeader", "recommendedGuilds"]);
function tu(e) {
    let t = [...to.getUnreadDisplayItems(), ...to.getReadDisplayItems()],
        n = null;
    for (let t = e.length - 1; t >= 0; t--) {
        let i = e[t];
        if (null != i && !tc.has(i.item.data.kind)) {
            n = i.item.id;
            break;
        }
    }
    if (null == n) return [];
    let i = t.findIndex((e) => e.id === n);
    return i < 0 ? [] : t.slice(0, i + 1);
}
async function tm() {
    let e = to.getUnreadDisplayItems(),
        t = to.getReadDisplayItems(),
        n = to.getNextIndexToHydrate();
    await ep([...e, ...t], n, n + Q.w5, to.getHydratedItems());
}
async function t_(e) {
    let { ack: t } = await Promise.resolve().then(n.bind(n, 334738)),
        { AnalyticsObjectTypes: i } = await Promise.resolve().then(n.bind(n, 652215));
    (to.getDehydratedItems().forEach((n) => {
        n.type === Q.Mm.MESSAGE &&
            n.data.channel_type === eu.rbe.GUILD_ANNOUNCEMENT &&
            et.default.compare(z.Ay.ackMessageId(n.data.channel_id), n.data.message_id) >= 0 &&
            t(
                n.data.channel_id,
                { object: e, objectType: i.ACK_SEMI_AUTOMATIC },
                !0,
                !0,
                et.default.atPreviousMillisecond(n.data.message_id),
            );
    }),
        await eo.A.clearReadStates(),
        await eo.A.fetchDehydrated({ isReloading: !0, forceRefresh: !0 }),
        await eo.A.reloadICYMITab(),
        await eo.A.getGuildChannelScores(),
        eo.A.getRecommendedGuilds());
}
function tg(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "message":
            if (e.channelType === eu.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            return "message";
        case "guildEvent":
            return "guild_event";
        case "contentInventory":
            if (e.data.content.content_type === A.ContentInventoryEntryType.CUSTOM_STATUS)
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
let th = {
    trackItemInteraction(e) {
        eA.default.track(eu.HAw.FEED_ITEM_INTERACTED, {
            load_id: to.getLoadId(),
            feed_item_type: e.type,
            feed_item_id: e.id,
            home_session_id: "gravity",
            action_type: e.actionType,
            feed_item_index: to.getIndexInHydratedFeed(e.id),
            icymi_session_id: e.icymiSessionId,
            impression_id: e.impressionId,
            ux_variation: e.uxVariation,
            session_interaction_index: e.sessionInteractionIndex,
        });
    },
    trackItemShortImpression(e, t, n) {
        eA.default.track(eu.HAw.FEED_ITEM_SEEN_BATCH, {
            load_id: to.getLoadId(),
            home_session_id: "gravity",
            feed_item_ids: e.map((e) => e.item.id),
            feed_item_types: e.map((e) => tg(e.item)),
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
        eA.default.track(eu.HAw.FEED_ITEM_SEEN_LONG, {
            load_id: to.getLoadId(),
            home_session_id: "gravity",
            feed_item_ids: e.map((e) => e.item.id),
            feed_item_types: e.map((e) => tg(e.item)),
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
        eA.default.track(eu.HAw.FEED_SHOWN, {
            load_id: to.getLoadId(),
            home_session_id: e.homeSessionId,
            variant: e.variant,
        });
    },
    trackFeedFirstScrollStarted() {
        eA.default.track(eu.HAw.HOME_FIRST_SCROLL_STARTED, { load_id: to.getLoadId(), home_session_id: "gravity" });
    },
    trackFeedFeedbackPromptViewed() {
        eA.default.track(eu.HAw.HOME_FEEDBACK_PROMPT_VIEWED);
    },
    trackFeedFeedbackSubmitted(e) {
        eA.default.track(eu.HAw.HOME_FEEDBACK_SUBMITTED, { load_id: to.getLoadId(), home_session_id: "gravity", ...e });
    },
    trackFeedOnboardingScreenSkipped(e) {
        eA.default.track(eu.HAw.ICYMI_ONBOARDING_SCREEN_SKIPPED, { location: e.location });
    },
    trackFeedOnboardingGuildToggled(e) {
        eA.default.track(eu.HAw.ICYMI_ONBOARDING_GUILD_TOGGLED, { guild_id: e.guildId, toggled: e.toggled });
    },
    trackFeedOnboardingCategoryToggled(e) {
        eA.default.track(eu.HAw.ICYMI_ONBOARDING_CATEGORY_TOGGLED, { category_id: e.categoryId, toggled: e.toggled });
    },
    trackFeedEmptyLoadingSeen() {
        eA.default.track(eu.HAw.ICYMI_FEED_EMPTY_LOADING_SEEN, { load_id: to.getLoadId(), version: to.getVersion() });
    },
    trackFeedEmptyLoadingComplete(e) {
        eA.default.track(eu.HAw.ICYMI_FEED_EMPTY_LOADING_COMPLETE, {
            load_id: to.getLoadId(),
            dwell_time_ms: e.dwellTimeMs,
            version: to.getVersion(),
        });
    },
    trackFeedEmptyLoadingAbandoned(e) {
        eA.default.track(eu.HAw.ICYMI_FEED_EMPTY_LOADING_ABANDONED, {
            load_id: to.getLoadId(),
            dwell_time_ms: e.dwellTimeMs,
            version: to.getVersion(),
        });
    },
    trackFeedSessionStarted(e) {
        eA.default.track(eu.HAw.FEED_SESSION_STARTED, {
            load_id: to.getLoadId(),
            version: to.getVersion(),
            session_start_time_ms: e.sessionStartTimeMs,
            icymi_session_id: e.icymiSessionId,
            previous_icymi_session_count: e.previousIcymiSessionCount,
            ux_variation: e.uxVariation,
        });
    },
    trackFeedSessionCompleted(e) {
        eA.default.track(eu.HAw.FEED_SESSION_COMPLETED, {
            load_id: to.getLoadId(),
            version: to.getVersion(),
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
        eA.default.track(eu.HAw.FEED_ITEM_1S_DWELLED, {
            load_id: to.getLoadId(),
            version: to.getVersion(),
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
        eA.default.track(eu.HAw.FEED_ITEM_DWELLED, {
            load_id: to.getLoadId(),
            version: to.getVersion(),
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
        eA.default.track(eu.HAw.FEED_ITEM_ACTIONED, {
            load_id: to.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: to.getVersion(),
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
        eA.default.track(eu.HAw.FEED_FILTER_ACTIONED, {
            load_id: to.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: to.getVersion(),
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
        eA.default.track(eu.HAw.FEED_PAGE_ACTIONED, {
            load_id: to.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: to.getVersion(),
            session_action_index: e.sessionActionIndex,
            action_gesture_type: e.actionParameters.actionGestureType,
            action_target_element: e.actionParameters.actionTargetElement,
            action_intent_type: e.actionParameters.actionIntentType,
            action_destination_type: e.actionParameters.actionDestinationType,
        });
    },
};
function tp(e) {
    return s.useCallback(async () => {
        (th.trackFeedShown({ variant: e ? "DotShown" : "NoDotShown", homeSessionId: "gravity_refresh" }),
            await eo.A.fetchDehydrated({ isReloading: !0 }),
            await eo.A.reloadICYMITab(),
            await eo.A.getGuildChannelScores(),
            eo.A.getRecommendedGuilds());
    }, [e]);
}
var tf = n(819169);
function tI(e, t, n, i, a) {
    switch (t.type) {
        case Q.Mm.MESSAGE:
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
        case Q.Mm.ACTIVITY:
        case Q.Mm.CUSTOM_STATUS:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "contentInventory", content: t.activity },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case Q.Mm.GUILD_EVENT:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "guildEvent", eventId: t.event_id },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case Q.Mm.RECOMMENDED_GUILDS:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "recommendedGuilds" },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case Q.Mm.DISCOVER_ITEM:
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
let tE = 15 * X.A.Millis.MINUTE;
var ty = n(939249),
    tA = n(976860),
    tT = n(378570),
    tS = n(402860),
    tM = n(834730),
    tv = n(51183),
    tx = n(208971),
    tC = n(25101);
function tD(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content.extra : null,
        i = n?.type === "custom_status_extra" ? n : null,
        s = (0, tx.G)(i?.status);
    if (null == i) return null;
    let r = {
            id: i.emoji_id?.toString() === "0" ? null : i.emoji_id,
            name: i.emoji_name ?? "",
            animated: i.emoji_animated,
        },
        d = null != r.id || r.name.length > 0,
        l = null != s && s.length > 0;
    return (0, a.jsx)("div", {
        className: tC.kL,
        children: (0, a.jsx)("div", {
            className: tC.Nr,
            children: (0, a.jsxs)("div", {
                className: tC.Qs,
                children: [
                    d &&
                        (0, a.jsx)("div", {
                            className: tC.qq,
                            children: (0, a.jsx)(tv.A, { emoji: r, animate: !0, hideTooltip: !1 }),
                        }),
                    l &&
                        (0, a.jsx)(tM.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            className: tC.qS,
                            children: s,
                        }),
                ],
            }),
        }),
    });
}
var tw = n(429913),
    tN = n(886072);
function tb(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content : null,
        i = n?.extra,
        s = n?.author_id,
        r = n?.content_type,
        d = i?.type === "played_game_extra" || i?.type === "launched_activity_extra" ? i.application_id : void 0,
        l = (0, tw.h)(d),
        c = (0, o.bG)([G.default], () => (null != s ? G.default.getUser(s) : null), [s]),
        u = r === A.ContentInventoryEntryType.TOP_GAME,
        m = l?.getIconURL(240);
    return i?.type !== "played_game_extra" || "contentInventory" !== t.data.kind || null == l || null == c || null == m
        ? null
        : (0, a.jsx)("div", {
              className: tN.kL,
              children: (0, a.jsxs)("div", {
                  className: tN.Nr,
                  children: [
                      (0, a.jsx)("img", { src: m, alt: l.name, className: tN.Gt }),
                      (0, a.jsxs)("div", {
                          className: tN.Vx,
                          children: [
                              (0, a.jsx)(tM.E, { variant: "text-md/semibold", color: "text-strong", children: l.name }),
                              u &&
                                  (0, a.jsx)("div", {
                                      className: tN.qS,
                                      children: (0, a.jsx)(tM.E, {
                                          variant: "text-xs/semibold",
                                          color: "text-brand",
                                          children: em.intl.string(em.t["/50eHi"]),
                                      }),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
var tk = n(177953),
    tG = n(47167),
    tL = n(713654),
    tO = n(435328),
    tR = n(563312),
    tj = n(826383),
    tU = n(9448),
    tF = n(974930),
    tY = n(641786);
function tV(e) {
    let { eventId: t } = e,
        n = (0, o.bG)([D.Ay], () => D.Ay.getGuildScheduledEvent(t), [t]),
        i = (0, o.bG)([P.A], () => P.A.getGuild(n?.guild_id), [n]),
        r = (0, o.bG)([V.A], () => V.A.getChannel(n?.channel_id), [n]),
        d = (0, tR.nh)(t, null),
        l = null != n && (0, D.Fd)(n),
        c = null != n ? (0, tF.G3)(n) : null,
        u = (0, tj.A)(n?.guild_id, n?.id, c),
        m = d?.startTime.toISOString(),
        { startDateTimeString: _ } = s.useMemo(
            () =>
                l ? { startDateTimeString: em.intl.string(em.t.TxqPQR) } : (0, tF.CC)(m ?? new Date().toISOString()),
            [m, l],
        ),
        g = (0, tG.Ay)(r),
        h = null != n ? (0, tU.oF)(n) : void 0,
        p = null != r ? (0, tL.gU)(r) : null;
    if (null == n || null == i) return null;
    let f = null != n.description && n.description.length > 0;
    return (0, a.jsxs)("div", {
        className: tY.Qo,
        children: [
            (0, a.jsx)("div", {
                className: tY.At,
                children: (0, a.jsx)(tM.E, {
                    variant: "text-sm/semibold",
                    color: l ? "status-positive" : "text-brand",
                    children: _,
                }),
            }),
            (0, a.jsx)(tM.E, { variant: "text-lg/semibold", className: f ? tY.X_ : void 0, children: n.name }),
            f &&
                (0, a.jsx)(tM.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: tY.tj,
                    children: (0, tO.l)(n.description ?? "", !0, { guildId: i.id }),
                }),
            (0, a.jsx)("hr", { className: tY.Yl }),
            (0, a.jsxs)("div", {
                className: tY.oo,
                children: [
                    (0, a.jsxs)("div", {
                        className: tY.ik,
                        children: [
                            (0, a.jsx)(tk.n, { size: "xs", color: "currentColor" }),
                            (0, a.jsx)(tM.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: em.intl.format(em.t["+DLsD8"], { count: u }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tY.ik,
                        children: [
                            null != p ? (0, a.jsx)(p, { size: "xs", color: "currentColor" }) : null,
                            (0, a.jsx)(tM.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: tY.HA,
                                children: g ?? (null != h ? (0, tO.y)(h, !0) : null),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tH = n(837381),
    tP = n(384231),
    tB = n(763754),
    tK = n(491182),
    tz = n(860227),
    tJ = n(941308),
    tW = n(699352),
    tX = n(715628),
    tq = n(752636),
    tQ = n(64369),
    t$ = n(268719),
    tZ = n(69282),
    t0 = n(862161),
    t1 = n(13673);
let t5 = s.memo(function (e) {
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
        h = t.type === eu.lAJ.POLL_RESULT || (e.disableInteraction ?? !1),
        p = t.isFirstMessageInForumPost(l),
        f = (0, tP.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        {
            content: I,
            hasSpoilerEmbeds: E,
            hasBailedAst: y,
        } = (0, tJ.A)(t, {
            hideSimpleEmbedContent: r,
            allowList: p || f,
            allowHeading: p || f,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        A = (0, tH.rm)(t.id),
        T = (0, tB.Ay)(t),
        S = (0, o.bG)(
            [V.A],
            () => t.hasFlag(eu.pr7.HAS_THREAD) && V.A.getChannel(et.default.castMessageIdAsChannelId(t.id)),
        ),
        M = (0, tZ.Xx)({ guildId: l.guild_id, roleId: T.iconRoleId }),
        v = (0, tz.fF)(t),
        x = (0, tz.ZD)(t);
    return (0, a.jsx)(tK.A, {
        compact: !1,
        className: d()(n, t0.i, { [t1.M1]: (0, N.ec)(t), [t1.XN]: h }),
        disableInteraction: h,
        childrenExecutedCommand: (0, t$.A)(t, l, !1),
        childrenHeader: (0, tq.A)({
            message: t,
            channel: l,
            author: T,
            guildId: l.guild_id,
            compact: !1,
            animateAvatar: u,
            isGroupStart: !0,
            roleIcon: M,
            hideTimestamp: !0,
            hideGuildTag: !1,
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, tW.J)(e, E, y),
        childrenMessageContent: (0, tX.A)(e, I),
        childrenSystemMessage: (0, tQ.A)({ ...e, disableInteraction: h }),
        onContextMenu: i,
        onClick: s,
        hasThread: _ && null != S && t.hasFlag(eu.pr7.HAS_THREAD),
        hasReply: !1,
        "aria-labelledby": v,
        "aria-describedby": x,
        author: T,
        ...A,
        ...g,
    });
});
function t3(e) {
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
        d = (0, o.bG)([V.A], () => (null != n ? V.A.getChannel(n) : null), [n]),
        l = (0, o.bG)([P.A], () => (d?.guild_id != null ? P.A.getGuild(d.guild_id) : null), [d]),
        c = (0, o.yK)(
            [to, B.A],
            () => (null == n ? [] : i.map((e) => to.getMessage(e) ?? B.A.getMessage(n, e)).filter((e) => null != e)),
            [n, i],
        );
    return null == d || null == l || 0 === c.length
        ? null
        : (0, a.jsxs)("div", {
              className: tY.kL,
              children: [
                  null != r
                      ? (0, a.jsx)("div", {
                            className: tY.gn,
                            children: (0, a.jsx)("div", { className: tY.DD, children: r }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: tY.MJ,
                      children: c.map((e) =>
                          (0, a.jsx)(
                              t5,
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
function t2(e) {
    let { item: t } = e;
    switch (t.data.kind) {
        case "guildEvent":
            return (0, a.jsx)(tV, { eventId: t.data.eventId });
        case "message":
        case "forumThread":
            return (0, a.jsx)(t3, { item: t });
        case "contentInventory":
            switch (t.data.content.content_type) {
                case A.ContentInventoryEntryType.CUSTOM_STATUS:
                    return (0, a.jsx)(tD, { item: t });
                case A.ContentInventoryEntryType.PLAYED_GAME:
                case A.ContentInventoryEntryType.TOP_GAME:
                    return (0, a.jsx)(tb, { item: t });
                default:
                    return (0, a.jsx)("div", { children: "Unsupported content inventory type" });
            }
        default:
            return (0, a.jsx)("div", { children: "Unknown item type" });
    }
}
var t6 = n(548118),
    t9 = n(995273),
    t4 = n(668499);
function t7(e) {
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
                    return et.default.extractTimestamp(t.data.message.id);
                case "guildEvent":
                    return et.default.extractTimestamp(t.data.eventId);
                default:
                    return t.timestamp;
            }
        }, [t]),
        c = (0, o.bG)([V.A], () => V.A.getChannel(i), [i]),
        u = (0, tG.Ay)(c),
        m = c?.guild_id ?? r,
        _ = (0, o.bG)([P.A], () => (null != m ? P.A.getGuild(m) : null), [m]),
        g = (0, o.bG)([G.default], () => (null != d ? G.default.getUser(d) : null), [d]);
    return "unknown" === n
        ? null
        : (0, a.jsx)("div", {
              className: t4.kL,
              children: (0, a.jsxs)("div", {
                  className: t4.wx,
                  children: [
                      (function () {
                          if ("guild" === n && null != _)
                              return (0, a.jsx)(t6.Ay, {
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
                                              ? (0, a.jsx)(tM.E, {
                                                    variant: "text-md/semibold",
                                                    color: "text-strong",
                                                    className: t4.DD,
                                                    children: _.name,
                                                })
                                              : "user" === n && null != g
                                                ? (0, a.jsx)(tM.E, {
                                                      variant: "text-md/semibold",
                                                      color: "text-strong",
                                                      className: t4.DD,
                                                      children: g.username,
                                                  })
                                                : null,
                                          (0, a.jsx)(tM.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              className: t4.vE,
                                              children: (0, t9.jb)(l),
                                          }),
                                      ],
                                  }),
                              }),
                              (function () {
                                  let e = (function () {
                                      switch (t.data.kind) {
                                          case "message":
                                              if (t.channelType === eu.rbe.GUILD_ANNOUNCEMENT)
                                                  return em.intl.string(em.t["8P08G9"]);
                                              return em.intl.string(em.t.hMFMY9);
                                          case "guildEvent":
                                              return em.intl.string(em.t["6pFsLQ"]);
                                          case "forumThread":
                                              return em.intl.string(em.t.bYNuVx);
                                          case "contentInventory":
                                              switch (t.data.content.content_type) {
                                                  case A.ContentInventoryEntryType.CUSTOM_STATUS:
                                                      return em.intl.string(em.t.fxOLPR);
                                                  case A.ContentInventoryEntryType.TOP_GAME:
                                                  case A.ContentInventoryEntryType.PLAYED_GAME:
                                                      return em.intl.string(em.t.ktOTRQ);
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
                                          children: (0, a.jsx)(tM.E, {
                                              variant: "text-sm/medium",
                                              color: "text-subtle",
                                              tag: "span",
                                              className: t4.o4,
                                              children: e,
                                          }),
                                      });
                                  if (null != c && null != e) {
                                      let t = (0, tL.gU)(c, _);
                                      return (0, a.jsxs)("div", {
                                          className: t4.VA,
                                          children: [
                                              (0, a.jsx)(tM.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: t4.o4,
                                                  children: e,
                                              }),
                                              (0, a.jsx)(tM.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: t4.o4,
                                                  children: em.intl.string(em.t.CHUAYk),
                                              }),
                                              (0, a.jsxs)(tM.E, {
                                                  variant: "text-sm/medium",
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
                                            children: (0, a.jsx)(tM.E, {
                                                variant: "text-sm/medium",
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
var t8 = n(301690);
function ne(e) {
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
                            (0, tT.ci)(t.data.message.channel_id, t.data.message.id);
                            break;
                        case "guildEvent": {
                            let e = D.Ay.getGuildScheduledEvent(t.data.eventId);
                            null != e && (0, tA.pX)(eu.BVt.GUILD_EVENT_DETAILS(e.guild_id, e.id));
                            break;
                        }
                        case "forumThread":
                            (0, tT.ci)(t.data.threadChannel.id, t.data.message.id);
                            break;
                        case "contentInventory":
                            (0, tS.openUserProfileModal)({ userId: t.data.content.author_id });
                    }
            },
            [t],
        );
    return (0, a.jsxs)(ty.D, {
        className: t8.k,
        onClick: n,
        children: [
            (0, a.jsx)(t7, { item: t }),
            (0, a.jsx)("div", { className: t8.o, children: (0, a.jsx)(t2, { item: t }) }),
        ],
    });
}
var nt = n(710028);
let nn = function (e) {
    let t,
        n,
        i,
        r,
        d,
        { scrollContainerRef: l } = e,
        c = (0, o.bG)([to], () => to.notificationItem(), []),
        { showDot: u } = { value: 0, showDot: (0, o.bG)([to], () => to.hasNewContent(), []) },
        m = s.useRef(null),
        [_, g] = s.useState(!1),
        {
            data: h,
            loading: p,
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
                    var e;
                    let { isWaterwheelsCardEligible: t } =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = ((e = "icymi_items"), (0, o.bG)([C.A, k.default, w.A, G.default], () => L(e), [e])),
                        i = (0, o.bG)([to], () => to.getUnreadDisplayItems()),
                        a = (0, o.bG)([to], () => to.getReadDisplayItems()),
                        r = (0, o.bG)([to], () => to.getNextIndexToHydrate()),
                        d = (0, o.cf)([to], () => to.getHydratedItems()),
                        l = (0, o.bG)([to], () => to.getMissingItems());
                    s.useEffect(() => {
                        let e = Date.now() + a.length;
                        eo.A.ackGravityItems(a.map((t) => ({ id: t.id, timestamp: e-- }), !0));
                    }, [a]);
                    let c = [],
                        u = [],
                        m = 0;
                    for (let e = 0; e < i.length && !(m >= r); e++) {
                        let a = i[e];
                        if ((m++, l[a.id])) continue;
                        let s = d[a.id];
                        if (
                            (null == s &&
                                a.type === Q.Mm.MESSAGE &&
                                a.data.message_context?.reference_message_id != null &&
                                (s = d[a.data.message_id]),
                            null != s)
                        ) {
                            let e = tI(a, s, !0, n, t);
                            null != e && c.push(e);
                        }
                    }
                    for (let e = 0; e < a.length && !(m >= r); e++) {
                        let i = a[e];
                        if ((m++, l[i.id])) continue;
                        let s = d[i.id];
                        if (
                            (null == s &&
                                i.type === Q.Mm.MESSAGE &&
                                i.data.message_context?.reference_message_id != null &&
                                (s = d[i.data.message_id]),
                            null != s)
                        ) {
                            let e = tI(i, s, !1, n, t);
                            null != e && u.push(e);
                        }
                    }
                    return { unreadItems: c, readItems: u, allUnreadItemsHydrated: r >= i.length };
                })({ isWaterwheelsCardEligible: i }),
                u = (0, o.bG)([to], () => to.getVersion(), []),
                m = (0, o.bG)([to], () => !(to.isFirstPageHydrated() && u > 0));
            s.useEffect(() => {
                null != to.getLoadId() && th.trackFeedShown({ homeSessionId: "gravity" });
            }, [u]);
            let _ = (0, o.bG)([to], () => to.isRefreshing(), []),
                g = (0, o.bG)([to], () => to.isHydrating(), []),
                [h, p] = s.useState([]),
                { loadId: f, lastScrollEventTimestamp: I } = (0, o.cf)([to], () => ({
                    loadId: to.getLoadId(),
                    lastScrollEventTimestamp: to.lastScrollEvent(),
                })),
                E = h
                    .filter((e) => {
                        let { item: t } = e;
                        return !tc.has(t.data.kind);
                    })
                    .map((e) => {
                        let { item: t } = e;
                        return t.id;
                    })
                    .pop(),
                y = (0, tf.A)(E);
            s.useEffect(() => {
                if (_ || m || null == y || null == E || E === y) return;
                let e = Date.now();
                e - I > tE && (eo.A.gravityScrollEvent(e), th.trackFeedFirstScrollStarted());
            }, [_, I, y, E, f, m]);
            let A = s.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if ((t.some((e) => "end" === e.item.data.kind) && r(!0), 0 === t.length)) return;
                        p(t);
                        let n = [],
                            i = tu(t),
                            a = Date.now();
                        for (let e = i.length - 1; e >= 0; e--) {
                            let t = i[e];
                            null != t && n.push({ id: t.id, type: (0, Q.xG)(t), timestamp: a++ });
                        }
                        (n.length > 0 && eo.A.ackGravityItems(n, !0),
                            th.trackItemShortImpression(
                                t,
                                i.map((e) => ({ id: e.id, type: (0, Q.xG)(e) })),
                                u,
                            ));
                    },
                    [u, r],
                ),
                T = s.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if (0 === t.length) return;
                        let n = tu(t);
                        (th.trackItemLongImpression(
                            t,
                            n.map((e) => ({ id: e.id, type: (0, Q.xG)(e) })),
                            u,
                        ),
                            eo.A.triggerItemsLongImpression(
                                t
                                    .filter((e) => {
                                        let { item: t } = e;
                                        return !tc.has(t.data.kind);
                                    })
                                    .map((e) => {
                                        let { item: t, index: n } = e;
                                        return {
                                            itemId: t.id,
                                            itemType: ey(t),
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
                    eo.A.startItemsDwell(
                        t
                            .filter((e) => {
                                let { item: t } = e;
                                return !tc.has(t.data.kind);
                            })
                            .map((e) => {
                                let { item: t, index: n } = e;
                                return {
                                    itemId: t.id,
                                    itemType: ey(t),
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
                            onViewableItemsChanged: A,
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
                            onViewableItemsChanged: S,
                        },
                    ],
                    [A, T, S],
                );
            s.useEffect(() => {
                eo.A.openICYMITab();
            }, []);
            let v = tp(t),
                { data: x, stickyHeaderIndices: D } = s.useMemo(() => {
                    let e = [];
                    return (
                        m &&
                            null != n &&
                            n.type === Q.Mm.CUSTOM_STATUS &&
                            e.push({
                                id: n.id,
                                timestamp: Date.now(),
                                data: { kind: "contentInventory", content: eI(n).activity },
                                score: n.score,
                                unread: !0,
                            }),
                        m
                            ? e.push({ id: "loading", timestamp: 0, unread: !1, data: { kind: "loading" } })
                            : (d.forEach((t) => {
                                  eE(t) || e.push(t);
                              }),
                              c && e.push({ id: "end", timestamp: 0, unread: !1, data: { kind: "end" } }),
                              l.length > 0 &&
                                  l.forEach((t) => {
                                      eE(t) || e.push(t);
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
                visibleItemIds: h,
                endVisible: a,
                isRefreshing: _,
                handleOnRefresh: v,
                stickyHeaderIndices: D,
                viewabilityConfigCallbackPairs: M,
            };
        })({ showDot: u, notificationItem: c }),
        y = tp();
    s.useEffect(
        () => () => {
            y();
        },
        [y],
    );
    let A = (0, o.bG)([to], () => to.hasNewContent(), []),
        T = (0, o.bG)([to], () => to.isHydrating(), []),
        S = s.useMemo(() => E[0].onViewableItemsChanged, [E]),
        { registerItemRef: M } =
            ((t = s.useRef(null)),
            (n = s.useRef(new Map())),
            (i = s.useRef(new Set())),
            (r = s.useRef(S)),
            (d = s.useRef(h)),
            s.useEffect(() => {
                ((r.current = S), (d.current = h));
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
        v = s.useMemo(() => h.some((e) => "end" === e.data.kind), [h]),
        x = s.useCallback(() => {
            if (v) return;
            let e = l.current;
            null == e ||
                !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) ||
                _ ||
                p ||
                T ||
                (g(!0),
                tm().finally(() => {
                    setTimeout(() => {
                        g(!1);
                    }, 300);
                }));
        }, [p, _, T, v, l]);
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
    let D = s.useCallback(() => {
            l.current?.scrollTo({ top: 0, behavior: "smooth" });
        }, [l]),
        N = s.useCallback(() => {
            (I(), D());
        }, [I, D]),
        b = s.useCallback(
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
                              { ref: (t) => M(e.id, t), "data-item-id": e.id, children: (0, a.jsx)(ne, { item: e }) },
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
              className: nt.k,
              children: [
                  A &&
                      !f &&
                      (0, a.jsx)("div", {
                          style: { position: "sticky", top: 0, zIndex: 10, padding: "8px", textAlign: "center" },
                          children: (0, a.jsx)("button", {
                              onClick: N,
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
                      className: nt.j,
                      children: [
                          h.map((e) => b(e)),
                          !v &&
                              (_ || T) &&
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
var ni = n(534515),
    na = n(999900);
let ns = (0, g.A)(function (e) {
    let { width: t } = e,
        n = (0, y.c)("ICYMIPage");
    (s.useEffect(() => {
        n || (0, l.pX)(eu.BVt.ME);
    }, [n]),
        s.useLayoutEffect(() => {
            n && _.I(eu.BVt.ICYMI);
        }, [n]),
        (0, h.Ay)(() => {
            n && (0, I.d0)("icymi");
        }));
    let i = (0, o.bG)([E.A], () => E.A.theme),
        r = (0, o.bG)([to], () => to.isRefreshing()),
        g = s.useRef(null);
    (0, p.HU)({ location: em.intl.string(em.t["jnXV/V"]) });
    let [A, T] = s.useState(!1);
    s.useEffect(() => {
        function e(e) {
            e.metaKey && T(!0);
        }
        function t(e) {
            "Meta" === e.key && T(!1);
        }
        function n() {
            T(!1);
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
    let S = tp(),
        M = y.f8.useConfig({ location: "icymi page" }).enabled,
        v = s.useCallback(
            async (e) => {
                e.metaKey && M ? await t_(eu.ZSU.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON) : await S();
            },
            [S, M],
        ),
        x = A && M ? em.intl.string(em.t.YplSn2) : em.intl.string(em.t.wzzjk9);
    return n
        ? (0, a.jsxs)("div", {
              className: d()(na.TE, ni.kL),
              children: [
                  (0, a.jsx)(c.N, {
                      theme: i,
                      children: (e) =>
                          (0, a.jsxs)(f.A, {
                              className: e,
                              toolbar: (0, a.jsx)(f.A.Icon, {
                                  icon: u.RefreshIcon,
                                  tooltip: x,
                                  onClick: v,
                                  disabled: r,
                                  "aria-label": x,
                              }),
                              children: [
                                  (0, a.jsx)(f.A.Icon, { icon: m.g, "aria-hidden": !0 }),
                                  (0, a.jsx)(f.A.Title, { children: em.intl.string(em.t["jnXV/V"]) }),
                                  (0, a.jsx)(f.A.Title, {
                                      children: (0, a.jsx)("p", {
                                          className: ni.HH,
                                          children: em.intl.string(em.t.Ac2OZA),
                                      }),
                                  }),
                              ],
                          }),
                  }),
                  (0, a.jsx)("div", {
                      ref: g,
                      className: d()(na.Qs, ni.Qs),
                      children: (0, a.jsx)(nn, { scrollContainerRef: g }),
                  }),
              ],
          })
        : null;
});
