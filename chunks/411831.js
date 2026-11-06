(n.r(t), n.d(t, { default: () => ns }));
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
    N = n(813645),
    w = n(432005),
    b = n(841643),
    G = n(435558),
    k = n(626584);
let O = {
        JOIN_GUILD: "join_guild",
        OPEN_CONNECTION: "open_connection",
        OPEN_GUILD: "open_guild",
        OPEN_GAME: "open_game",
        OPEN_URI: "open_uri",
        OPEN_NUDGE: "open_nudge",
    },
    L = ["post", "carousel", "server_row"],
    j = new k.A("WaterwheelsCardParser");
function U(e) {
    return (0, G.isPlainObject)(e);
}
function R(e) {
    if (!U(e.value)) return !1;
    switch (e.type) {
        case O.JOIN_GUILD:
        case O.OPEN_GUILD:
            return "string" == typeof e.value.guild_id;
        case O.OPEN_GAME:
            return "string" == typeof e.value.game_id;
        case O.OPEN_CONNECTION:
            return "string" == typeof e.value.provider;
        case O.OPEN_URI:
            return "string" == typeof e.value.url;
        case O.OPEN_NUDGE:
            return "enable_notifications" === e.value.nudge;
        default:
            return !1;
    }
}
function F(e) {
    let { guild_id: t, icon_url: n, online: i, members: a, ...s } = e;
    return { ...s, guildId: t, iconUrl: n, online: Number(i), members: Number(a) };
}
function H(e) {
    return (j.warn(`Rejected Waterwheels card: ${e}`), { ok: !1, reason: e });
}
var Y = n(46653),
    V = n(734057),
    P = n(504047),
    B = n(71393),
    K = n(596344),
    J = n(576705),
    W = n(218461),
    z = n(994500),
    X = n(543465),
    q = n(287809),
    Q = n(927813),
    $ = n(449054),
    Z = n(596720);
let ee = {};
class et extends o.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        ee = e ?? {};
    }
    filterStaffContent() {
        return !0 === ee.filterStaffContent;
    }
    getDoubleTapBehavior() {
        return ee.doubleTapBehavior ?? Z.Ai.DEFAULT;
    }
    getState() {
        return ee;
    }
    getUserAgnosticState() {
        return ee;
    }
}
let en = new et(A.h, {
    SET_ICYMI_FILTERS: function (e) {
        ee = e.filters;
    },
});
var ei = n(811091);
function ea(e, t) {
    let n = W.Ay.getTrackedAckMessageId(e);
    return null == n || ei.default.extractTimestamp(t) > ei.default.extractTimestamp(n);
}
let es = 7 * Q.A.Millis.DAY,
    er = { readIdToTimestampMap: {} };
class ed extends o.Ay.DeviceSettingsStore {
    static displayName = "ICYMIUnreadStateStore";
    static persistKey = "ICYMIUnreadStateStore";
    initialize(e) {
        er =
            null != e && null != e.readIdToTimestampMap
                ? { readIdToTimestampMap: e.readIdToTimestampMap }
                : { readIdToTimestampMap: {} };
        let t = Date.now() - es;
        for (let e of Object.keys(er.readIdToTimestampMap).filter((e) => er.readIdToTimestampMap[e] < t))
            delete er.readIdToTimestampMap[e];
    }
    getReadTimestamp(e) {
        return er.readIdToTimestampMap[e];
    }
    getState() {
        return er;
    }
    getUserAgnosticState() {
        return er;
    }
}
let el = new ed(A.h, {
    ICYMI_ACK_ITEMS: function (e) {
        let { items: t, override: n } = e;
        t.forEach((e) => {
            null != e && (null == er.readIdToTimestampMap[e.id] || n) && (er.readIdToTimestampMap[e.id] = e.timestamp);
        });
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let { items: t } = e;
        for (let e of t)
            e.type !== Z.Mm.MESSAGE ||
                null != er.readIdToTimestampMap[e.id] ||
                e.data.message_context?.external_content_application_id != null ||
                ea(e.data.channel_id, e.data.message_id) ||
                (er.readIdToTimestampMap[e.id] = 0);
    },
});
var eo = n(6161);
n(256265);
var ec = n(95701),
    eu = n(4106),
    em = n(522606),
    e_ = n(652215),
    eg = n(792996),
    ep =
        (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.DEFAULT = 1)] = "DEFAULT"),
        (i[(i.MORE = 2)] = "MORE"),
        (i[(i.LESS = 3)] = "LESS"),
        (i[(i.MUTED = 4)] = "MUTED"),
        i);
function eh(e) {
    return e.type === Z.Mm.MESSAGE || e.type === Z.Mm.GUILD_EVENT;
}
function ef(e) {
    return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function eI(e, t, n, i) {
    let a = e.slice(t, n);
    if (0 === a.length) return;
    eu.A.loadHydratedAttempt((0, em.V)(t, n));
    let s = a.filter((e) => null == i[e.id]),
        r = s
            .filter((e) => e.type === Z.Mm.MESSAGE)
            .map((e) => ({ channel_id: e.data.channel_id, message_id: e.data.message_id })),
        d = s
            .map((e) => {
                if (e.type === Z.Mm.MESSAGE) {
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
            .filter((e) => e.type === Z.Mm.ACTIVITY)
            .map((e) => ({ user_id: e.data.user_id, content_id: e.data.content_id }));
    await eu.A.fetchHydrated(t, n, { messageItems: [...r, ...d], activityItems: l });
}
function eE(e, t) {
    return {
        ...t,
        message: (0, w.rh)(e.message),
        threadChannel: null != e.thread_channel ? ec.Lt.fromServer(e.thread_channel, e.guild_id) : void 0,
    };
}
function ey(e) {
    return {
        id: e.id,
        type: Z.Mm.CUSTOM_STATUS,
        activity: {
            id: e.id,
            author_id: e.data.user_id,
            author_type: eo.ContentInventoryAuthorType.USER,
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
function eT(e) {
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
    let a = null != (n = i?.guild_id ?? n) ? B.A.getGuild(n) : null;
    return a?.nsfwLevel === e_.ftr.EXPLICIT || a?.nsfwLevel === e_.ftr.AGE_RESTRICTED;
}
function eA(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "bottomLoading":
            return "bottomLoading";
        case "message":
            if (e.channelType === e_.rbe.GUILD_ANNOUNCEMENT) return "announcement";
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
var eS = n(129230);
function eM(e) {
    let t = [],
        n = [],
        i = [],
        a = [];
    (e.unreadFeedItems.forEach((e) => {
        (t.push(e.id), i.push(ev(e)));
    }),
        e.readFeedItems.forEach((e) => {
            (n.push(e.id), a.push(ev(e)));
        }),
        eS.default.track(e_.HAw.FEED_LOADED, {
            ...e.newTrackingProps,
            home_session_id: e.homeSessionId,
            tab_badged: e.hasNewContent,
            unread_feed_item_ids: t,
            read_feed_item_ids: n,
            unread_feed_item_types: i,
            read_feed_item_types: a,
        }));
}
function ev(e) {
    switch (e.type) {
        case Z.Mm.MESSAGE:
            if (e.data.channel_type === e_.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            return "message";
        case Z.Mm.ACTIVITY:
            return "hotwheels_gaming_activity";
        case Z.Mm.CUSTOM_STATUS:
            return "hotwheels_custom_status";
        case Z.Mm.GUILD_EVENT:
            return "guild_event";
        case Z.Mm.RECOMMENDED_GUILDS:
            return "recommended_guilds";
        case Z.Mm.DISCOVER_ITEM:
            return "discover_item";
    }
}
var ex = n(424994);
let eC = +Q.A.Millis.DAY,
    eD = 3 * Q.A.Millis.DAY,
    eN = [],
    ew = null,
    eb = 0,
    eG = [],
    ek = [],
    eO = {},
    eL = {},
    ej = {},
    eU = {},
    eR = {},
    eF = {},
    eH = 0,
    eY = !1,
    eV = !1,
    eP = !1,
    eB = null,
    eK = null,
    eJ = 0,
    eW = [],
    ez = [],
    eX = 0,
    eq = [],
    eQ = 0,
    e$ = !0,
    eZ = !1,
    e0 = new Set(),
    e1 = !1,
    e5 = !1,
    e3 = 0,
    e4 = 0;
function e6(e, t) {
    if (Date.now() - eb > 6 * Q.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function e9(e) {
    if (!en.filterStaffContent()) return !0;
    if (eh(e)) {
        if (e.data.guild_id === Z.VL) return !0;
        let t = B.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(e_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function e2(e) {
    if (e.type !== Z.Mm.DISCOVER_ITEM) return !0;
    if (!(0, b.SL)("icymi_store")) return !1;
    let t = (function (e) {
        try {
            if (
                !U(e) ||
                "string" != typeof e.id ||
                "string" != typeof e.type ||
                !U(e.layout) ||
                !Array.isArray(e.actions)
            )
                return H("invalid_card");
            if (!L.includes(e.layout.type)) return H("unknown_layout");
            if (!e.actions.every((e) => U(e) && Object.values(O).includes(e.type))) return H("unknown_action");
            if (void 0 !== e.client_eligibility && "notifications_permission" !== e.client_eligibility)
                return H("unknown_eligibility");
            if (!e.actions.every(R)) return H("invalid_card");
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
            return H("invalid_card");
        }
    })(e.data?.item);
    return !!t.ok && ((ej[e.id] = { ...e, card: t.card }), !0);
}
function e8(e, t, n, i) {
    let a = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < a.length ? a.splice((t + 1) * i, 0, e) : a.push(e);
        }),
        a
    );
}
function e7() {
    if (
        ((eW = eW.filter((e) => e.type !== Z.Mm.RECOMMENDED_GUILDS)),
        (ez = ez.filter((e) => e.type !== Z.Mm.RECOMMENDED_GUILDS)),
        0 === eq.length)
    )
        return;
    let e = "recommendedGuilds",
        t = B.A.getGuildsArray().filter((e) => e.features.has(e_.GuildFeatures.COMMUNITY)).length >= 5,
        n = el.getReadTimestamp(e);
    if (t && null != n && Date.now() - eQ > eC && Date.now() - n < eD) return;
    let i = { id: e, type: Z.Mm.RECOMMENDED_GUILDS, score: 50 };
    if (((ej[i.id] = i), (eL[i.id] = i), 0 === eW.length)) ez = [i, ...ez];
    else if ((!t && eW.length < 5) || (t && eW.length < 10)) eW = [...eW, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        eW.splice(e, 0, i);
    } else eW.splice(5, 0, i);
}
function te() {
    let e = new Set();
    if (
        (eG.forEach((t) => {
            e.add(t.id);
        }),
        null != eK)
    )
        if (e.has(eK.id)) {
            let e = eK.id,
                t = eK.type,
                n = eG.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((eK = eG[n]), (eG = eG.filter((t) => t.id !== e)), (eG = [eK, ...eG]));
        } else ((eG = [eK, ...eG]), e.add(eK.id));
    eG.forEach((e) => {
        ((eL[e.id] = e),
            e.type === Z.Mm.CUSTOM_STATUS &&
                (z.A.isBlockedOrIgnored(e.data.user_id) ? (eU[e.id] = !0) : (ej[e.id] = ey(e))));
    });
}
function tt(e) {
    let t, n, i, a, s;
    if ((eG.length > 0 && ((eN = eG), (eG = []), (ek = [])), eH++, null != e)) ((eW = e.newUnread), (ez = e.newRead));
    else {
        let [e, t] = tn(eN);
        ((eW = e), (ez = t));
    }
    ((function () {
        let e = B.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != eR[n] && eR[n] < 0) continue;
            let e = D.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, D.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = V.A.getChannel(n.channel_id);
                        if (!J.A.can(e_.xBc.VIEW_CHANNEL, e)) continue;
                    }
                    if (
                        ((0, D.W$)(n, 2 * Q.A.Seconds.DAY) || (0, D.Fd)(n)) &&
                        (null == ej[n.id] &&
                            (ej[n.id] = { id: n.id, type: Z.Mm.GUILD_EVENT, score: 10, event_id: n.id }),
                        t.push({
                            id: n.id,
                            type: Z.Mm.GUILD_EVENT,
                            score: 10,
                            data: { guild_id: n.guild_id, event_id: n.id, channel_id: n.channel_id ?? void 0 },
                        }),
                        ++i >= 1)
                    )
                        break;
                }
        }
        t.sort((e, t) => {
            let n = P.A.getGuildAffinity(e.data.guild_id),
                i = P.A.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let n = [],
            i = [];
        (t.forEach((e) => {
            ((eL[e.id] = e), null != el.getReadTimestamp(e.id) ? i.push(e) : n.push(e));
        }),
            (eW = e8(eW, n, Z.Mm.GUILD_EVENT, 7)),
            (ez = e8(ez, i, Z.Mm.GUILD_EVENT, 7)));
    })(),
        (t = new Set()),
        (n = {}),
        (i = []),
        (a = []),
        (s = S.A.getFeed(ex.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5),
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
            null == ej[e.content.id] &&
                (ej[e.content.id] = { id: e.content.id, type: Z.Mm.ACTIVITY, score: 15, activity: e.content });
            let s = {
                id: e.content.id,
                type: Z.Mm.ACTIVITY,
                score: 15,
                data: { user_id: e.content.author_id, content_id: e.content.id },
            };
            (t.add(e.content.id), (eL[s.id] = s), null != el.getReadTimestamp(s.id) ? a.push(s) : i.push(s));
        }),
        (eW = e8(eW, i, Z.Mm.ACTIVITY, 5)),
        (ez = e8(ez, a, Z.Mm.ACTIVITY, 5)),
        e7(),
        null != eO.load_id &&
            ew !== eO.load_id &&
            (eM({
                newTrackingProps: eO,
                hasNewContent: eV,
                unreadFeedItems: eW,
                readFeedItems: ez,
                homeSessionId: "gravity",
            }),
            (ew = eO.load_id ?? null),
            (eO = {})),
        (eX = 0),
        eW.length + ez.length === 0 && (e5 = !0),
        eI([...eW, ...ez], 0, 15, ej),
        (eZ = !1));
}
function tn(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let a = null != el.getReadTimestamp(e.id);
            (e.type === Z.Mm.MESSAGE &&
                e.data.message_context?.external_content_application_id == null &&
                (a = a || !ea(e.data.channel_id, e.data.message_id)),
                a ? t.push(e) : e.type === Z.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e));
        }),
        [
            [...i, ...n],
            t.sort((e, t) => {
                var n, i;
                let a, s;
                return (
                    (n = e.id),
                    (i = t.id),
                    null == (a = el.getReadTimestamp(n)) && (a = void 0),
                    (null == (s = el.getReadTimestamp(i)) && (s = void 0), null == a && null == s)
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
function ti(e, t) {
    let n = [],
        i = new Set(eN.map((e) => e.id));
    for (let a of e)
        !(a.type === Z.Mm.RECOMMENDED_GUILDS || i.has(a.id)) &&
            null == el.getReadTimestamp(a.id) &&
            (a.type !== Z.Mm.MESSAGE || (ea(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t)) &&
            n.push(a);
    return n;
}
function ta(e, t) {
    return e.filter((e) => !eh(e) || e.data.channel_id !== t);
}
function ts(e, t) {
    ef(t) === ep.MUTED && ((eN = ta(eN, e)), (eW = ta(eW, e)), (ez = ta(ez, e)), (eG = ta(eG, e)), (ek = ta(ek, e)));
}
function tr(e, t) {
    return e.filter((e) => !eh(e) || e.data.guild_id !== t);
}
function td(e, t) {
    ef(t) === ep.MUTED && ((eN = tr(eN, e)), (eW = tr(eW, e)), (ez = tr(ez, e)), (eG = tr(eG, e)), (ek = tr(ek, e)));
}
function tl(e) {
    let { type: t, messageId: n, userId: i, emoji: a, reactionType: s } = e,
        r = ej[n];
    if (null == r || r.type !== Z.Mm.MESSAGE) return !1;
    let d = Y.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t
        ? (r.message = r.message.addReaction(a, d, { colors: e.colors, reactionType: s }))
        : (r.message = r.message.removeReaction(a, d, s));
}
function to(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    eW.forEach((e, a) => {
        (a > eX || !eP) && e.type === Z.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let a = eV,
        [s, r] = tn(eG);
    if (((ek = ti(s, t)), (eV = eP ? a && ek.length >= 3 : a && e6(i, eG)), 0 === n.length && a === eV)) return !1;
    0 !== n.length && ((eW = i), (ez = [...ez, ...n]));
}
class tc extends o.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        (this.waitFor(C.A, Y.default, V.A, S.A, x.A, P.A, D.Ay, B.A, en, N.A, el, K.A, J.A, W.Ay, z.A, X.Ay, q.default),
            null != e &&
                ((eN = e.dehydratedItems ?? []).forEach((e) => {
                    eL[e.id] = e;
                }),
                (eR = e.customGuildScores ?? {}),
                (eF = e.customChannelScoresByGuild ?? {}),
                (eJ = e.numOpens ?? 0),
                (eb = e.lastOpened ?? 0),
                (eQ = e.lastJoinedRecommendedGuild ?? 0),
                (e4 = e.lastTakenICYMISurvey ?? 0)));
    }
    getVersion() {
        return eH;
    }
    getDehydratedItems() {
        return eN;
    }
    getNewDehydratedItems() {
        return eG;
    }
    getDehydratedItem(e) {
        return eL[e] ?? null;
    }
    getHydratedItem(e) {
        return ej[e] ?? null;
    }
    getMessage(e) {
        let t = ej[e];
        return null == t || t.type !== Z.Mm.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return ej;
    }
    getUnreadDisplayItems() {
        return eW;
    }
    getNewUnreadDehydratedItems() {
        return ek;
    }
    getReadDisplayItems() {
        return ez;
    }
    getNextIndexToHydrate() {
        return eX;
    }
    getMissingItems() {
        return eU;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === ep.MUTED || this.getCustomChannelScore(e, t) === ep.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == eF[e] || null == eF[e][t] ? ep.UNKNOWN : ef(eF[e][t]);
    }
    getCustomGuildScore(e) {
        return eR[e] ?? 0;
    }
    getCustomGuildScores() {
        return eR;
    }
    hasNewContent() {
        return eV;
    }
    getCurrentStatusAttachments(e) {
        return null == eB || eB[0] !== e ? [] : eB[1];
    }
    getLoadId() {
        return ew;
    }
    hasOpenedEnoughTimes() {
        return 5 === eJ;
    }
    hasOpened() {
        return eP;
    }
    getDiscoverableGuilds() {
        return eq;
    }
    videosMuted() {
        return e$;
    }
    isRefreshing() {
        return eZ;
    }
    isHydrating() {
        return e0.size > 0;
    }
    notificationItem() {
        return eK;
    }
    getIsTabFocused() {
        return e1;
    }
    isFirstPageHydrated() {
        return e5;
    }
    lastScrollEvent() {
        return e3;
    }
    lastTakenICYMISurvey() {
        return e4;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...eW, ...ez].findIndex((e) => e.type === Z.Mm.RECOMMENDED_GUILDS)
            : [...eW, ...ez].filter((e) => null != ej[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: eN,
            numOpens: eJ,
            customGuildScores: eR,
            customChannelScoresByGuild: eF,
            lastOpened: eb,
            lastJoinedRecommendedGuild: eQ,
            lastTakenICYMISurvey: e4,
        };
    }
}
let tu = new tc(A.h, {
    LOGOUT: function () {
        ((eN = []),
            (eG = []),
            (ek = []),
            (eL = {}),
            (eO = {}),
            (ej = {}),
            (eU = {}),
            (ew = null),
            (eR = {}),
            (eF = {}),
            (eH = 0),
            (eY = !1),
            (eV = !1),
            (eP = !1),
            (eW = []),
            (ez = []),
            (eX = 0),
            (eb = 0),
            (eQ = 0),
            (e$ = !0),
            (eZ = !1),
            (e0 = new Set()),
            (eK = null),
            (e1 = !1),
            (e5 = !1),
            (eB = null),
            (e3 = 0));
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
        let { messageItem: t, customStatusItem: n } = e;
        if (null != n) return ((eK = n), null != ew && ((eG = eG.length > 0 ? eG : [...eN]), te(), tt()), !0);
        if (null != t) {
            let e = {
                id: t.message.id,
                type: Z.Mm.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: e_.rbe.GUILD_TEXT,
                },
            };
            if (
                ((eL[t.message.id] = e),
                (ej[t.message.id] = { ...e, message: (0, w.rh)(t.message) }),
                null == ew && null == eO)
            ) {
                let [t, n] = tn((eN = [e, ...eN]));
                ((eW = t), (ez = n));
            } else ((eG = [e, ...eG]), tt());
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let t,
            { items: n, loadId: i, startTime: a, isInitialLoad: s, isReloading: r } = e;
        ((t = new Set(Z.H8)),
            (eG = n
                .filter((e) => t.has(e.type))
                .filter(e2)
                .filter(e9)
                .map((e) => {
                    if (e.type === Z.Mm.MESSAGE && null != e.data.message_context) {
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
            te(),
            (eO = { load_id: i, load_time_millis: Date.now() - a, feed_item_ids: eG.map((e) => e.id) }));
        let [d, l] = tn(eG);
        if (((ek = ti(d)), !eP || 0 === eH || s))
            ((eH = 0), !e1 && e6(d, eG) ? ((eV = !0), (eY = !0)) : (eV = !1), tt({ newUnread: d, newRead: l }));
        else {
            eH > 0 && (eK = null);
            let e = ek.length > 3;
            (r || (eV = e), e && (eI([...d, ...l], 0, 15, ej), d.length + l.length === 0 && (e5 = !0)));
        }
        eM({
            newTrackingProps: eO,
            hasNewContent: eV,
            unreadFeedItems: d,
            readFeedItems: l,
            homeSessionId: e1 ? "foreground_load" : "background_load",
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
        ((e5 = !0), (ej = { ...ej }));
        let d = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
            l = n.reduce((e, t) => ((e[t.id] = t), e), {});
        (i.forEach((e) => {
            let t = d[e.message_id];
            if (null == t) {
                eU[e.message_id] = !0;
                return;
            }
            let n = eL[e.message_id];
            null == n &&
                (n = {
                    id: e.message_id,
                    type: Z.Mm.MESSAGE,
                    score: -1,
                    data: {
                        guild_id: t.guild_id,
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        channel_type: e_.rbe.GUILD_TEXT,
                        has_mention: !1,
                    },
                });
            let i = K.A.getMessage(t.channel_id, t.message.id);
            if (null != i) {
                let e = eE(t, n);
                ej[t.message.id] = { ...e, message: i };
            } else ej[t.message.id] = eE(t, n);
        }),
            a.forEach((e) => {
                let t = l[e.content_id];
                if (null == t) {
                    eU[e.content_id] = !0;
                    return;
                }
                let n = eL[e.content_id];
                if (null == n) {
                    eU[e.content_id] = !0;
                    return;
                }
                ej[t.id] = { ...n, activity: t };
            }),
            s === eX && (eX = r),
            e0.delete((0, em.V)(s, r)));
    },
    LOAD_ICYMI_CUSTOM_SCORES: function (e) {
        let { scores: t } = e;
        for (let e of t)
            for (let t of ((eR[e.guild_id] = e.guild_score),
            td(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                (null == eF[e.guild_id] && (eF[e.guild_id] = {}),
                    (eF[e.guild_id][t] = e.custom_channel_scores[t]),
                    ts(t, e.custom_channel_scores[t]));
        ((eR = { ...eR }), (eF = { ...eF }));
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        ((eq = t.map((e) => (0, $.jE)(e.guild))), e7());
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: i } = e;
        (null != i && ((eR[n] = i), td(n, i), (eR = { ...eR })),
            t?.forEach((e) => {
                let { channelId: t, score: i } = e;
                (null == eF[n] && (eF[n] = {}), (eF[n][t] = i), ts(t, i), (eF = { ...eF }));
            }));
    },
    RELOAD_ICYMI: function () {
        if (0 === eG.length) return !1;
        (tt(), (eV = !1));
    },
    ICYMI_TAB_OPENED: function () {
        ((eP = !0), (eb = Date.now()), eY && ((eY = !1), (eV = !1)), eJ < 5 && eJ++);
    },
    ICYMI_FEEDBACK_GIVEN: function () {
        eJ = 6;
    },
    MESSAGE_REACTION_ADD: tl,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            i = ej[t];
        if (null == i || i.type !== Z.Mm.MESSAGE) return !1;
        let a = Y.default.getId();
        i.message = i.message.addReactionBatch(n, a);
    },
    MESSAGE_REACTION_REMOVE: tl,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e,
            n = ej[t];
        if (null == n || n.type !== Z.Mm.MESSAGE) return !1;
        n.message = n.message.set("reactions", []);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e,
            i = ej[t];
        if (null == i || i.type !== Z.Mm.MESSAGE) return !1;
        i.message = i.message.removeReactionsForEmoji(n);
    },
    CHANNEL_ACK: to,
    MESSAGE_ACK: to,
    ICYMI_JOINED_RECOMMENDED_GUILD: function () {
        eQ = Date.now();
    },
    ICYMI_SET_VIDEOS_MUTED: function (e) {
        let { muted: t } = e;
        e$ = t;
    },
    ICYMI_SET_REFRESHING: function (e) {
        let { refreshing: t } = e;
        eZ = t;
    },
    LOAD_ICYMI_HYDRATED_ATTEMPT: function (e) {
        let { hydrationId: t } = e;
        e0.add(t);
    },
    LOAD_ICYMI_HYDRATED_FAILED: function (e) {
        let { hydrationId: t } = e;
        e0.delete(t);
    },
    ICYMI_SET_FOCUSED_TAB: function (e) {
        let { focused: t } = e;
        e1 = t;
    },
    LOAD_ICYMI_CURRENT_STATUS_MEDIA: function (e) {
        let { attachments: t, createdAtMs: n } = e;
        if (null == t || 0 === t.length) {
            eB = null;
            return;
        }
        eB = [n, [...t]];
    },
    ICYMI_SCROLL_EVENT: function (e) {
        let { timestamp: t } = e;
        e3 = t;
    },
    ICYMI_TAKE_SURVEY: function (e) {
        let { takenAt: t } = e;
        e4 = t;
    },
});
function tm(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "message":
            if (e.channelType === e_.rbe.GUILD_ANNOUNCEMENT) return "announcement";
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
let t_ = {
    trackItemInteraction(e) {
        eS.default.track(e_.HAw.FEED_ITEM_INTERACTED, {
            load_id: tu.getLoadId(),
            feed_item_type: e.type,
            feed_item_id: e.id,
            home_session_id: "gravity",
            action_type: e.actionType,
            feed_item_index: tu.getIndexInHydratedFeed(e.id),
            icymi_session_id: e.icymiSessionId,
            impression_id: e.impressionId,
            ux_variation: e.uxVariation,
            session_interaction_index: e.sessionInteractionIndex,
        });
    },
    trackItemShortImpression(e, t, n) {
        eS.default.track(e_.HAw.FEED_ITEM_SEEN_BATCH, {
            load_id: tu.getLoadId(),
            home_session_id: "gravity",
            feed_item_ids: e.map((e) => e.item.id),
            feed_item_types: e.map((e) => tm(e.item)),
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
        eS.default.track(e_.HAw.FEED_ITEM_SEEN_LONG, {
            load_id: tu.getLoadId(),
            home_session_id: "gravity",
            feed_item_ids: e.map((e) => e.item.id),
            feed_item_types: e.map((e) => tm(e.item)),
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
        eS.default.track(e_.HAw.FEED_SHOWN, {
            load_id: tu.getLoadId(),
            home_session_id: e.homeSessionId,
            variant: e.variant,
        });
    },
    trackFeedFirstScrollStarted() {
        eS.default.track(e_.HAw.HOME_FIRST_SCROLL_STARTED, { load_id: tu.getLoadId(), home_session_id: "gravity" });
    },
    trackFeedFeedbackPromptViewed() {
        eS.default.track(e_.HAw.HOME_FEEDBACK_PROMPT_VIEWED);
    },
    trackFeedFeedbackSubmitted(e) {
        eS.default.track(e_.HAw.HOME_FEEDBACK_SUBMITTED, { load_id: tu.getLoadId(), home_session_id: "gravity", ...e });
    },
    trackFeedOnboardingScreenSkipped(e) {
        eS.default.track(e_.HAw.ICYMI_ONBOARDING_SCREEN_SKIPPED, { location: e.location });
    },
    trackFeedOnboardingGuildToggled(e) {
        eS.default.track(e_.HAw.ICYMI_ONBOARDING_GUILD_TOGGLED, { guild_id: e.guildId, toggled: e.toggled });
    },
    trackFeedOnboardingCategoryToggled(e) {
        eS.default.track(e_.HAw.ICYMI_ONBOARDING_CATEGORY_TOGGLED, { category_id: e.categoryId, toggled: e.toggled });
    },
    trackFeedEmptyLoadingSeen() {
        eS.default.track(e_.HAw.ICYMI_FEED_EMPTY_LOADING_SEEN, { load_id: tu.getLoadId(), version: tu.getVersion() });
    },
    trackFeedEmptyLoadingComplete(e) {
        eS.default.track(e_.HAw.ICYMI_FEED_EMPTY_LOADING_COMPLETE, {
            load_id: tu.getLoadId(),
            dwell_time_ms: e.dwellTimeMs,
            version: tu.getVersion(),
        });
    },
    trackFeedEmptyLoadingAbandoned(e) {
        eS.default.track(e_.HAw.ICYMI_FEED_EMPTY_LOADING_ABANDONED, {
            load_id: tu.getLoadId(),
            dwell_time_ms: e.dwellTimeMs,
            version: tu.getVersion(),
        });
    },
    trackFeedSessionStarted(e) {
        eS.default.track(e_.HAw.FEED_SESSION_STARTED, {
            load_id: tu.getLoadId(),
            version: tu.getVersion(),
            session_start_time_ms: e.sessionStartTimeMs,
            icymi_session_id: e.icymiSessionId,
            previous_icymi_session_count: e.previousIcymiSessionCount,
            ux_variation: e.uxVariation,
        });
    },
    trackFeedSessionCompleted(e) {
        eS.default.track(e_.HAw.FEED_SESSION_COMPLETED, {
            load_id: tu.getLoadId(),
            version: tu.getVersion(),
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
        eS.default.track(e_.HAw.FEED_ITEM_1S_DWELLED, {
            load_id: tu.getLoadId(),
            version: tu.getVersion(),
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
        eS.default.track(e_.HAw.FEED_ITEM_DWELLED, {
            load_id: tu.getLoadId(),
            version: tu.getVersion(),
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
        eS.default.track(e_.HAw.FEED_ITEM_ACTIONED, {
            load_id: tu.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: tu.getVersion(),
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
        eS.default.track(e_.HAw.FEED_FILTER_ACTIONED, {
            load_id: tu.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: tu.getVersion(),
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
        eS.default.track(e_.HAw.FEED_PAGE_ACTIONED, {
            load_id: tu.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: tu.getVersion(),
            session_action_index: e.sessionActionIndex,
            action_gesture_type: e.actionParameters.actionGestureType,
            action_target_element: e.actionParameters.actionTargetElement,
            action_intent_type: e.actionParameters.actionIntentType,
            action_destination_type: e.actionParameters.actionDestinationType,
        });
    },
};
function tg(e) {
    return s.useCallback(async () => {
        (t_.trackFeedShown({ variant: e ? "DotShown" : "NoDotShown", homeSessionId: "gravity_refresh" }),
            await eu.A.fetchDehydrated({ isReloading: !0 }),
            await eu.A.reloadICYMITab(),
            await eu.A.getGuildChannelScores(),
            eu.A.getRecommendedGuilds());
    }, [e]);
}
let tp = new Set(["end", "loading", "bottomLoading", "icymiHeader", "recommendedGuilds"]);
function th(e) {
    let t = tu.getUnreadDisplayItems(),
        n = tu.getReadDisplayItems(),
        i = [...t, ...n],
        a = null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (null != n && !tp.has(n.item.data.kind)) {
            a = n.item.id;
            break;
        }
    }
    if (null == a) return [];
    let s = i.findIndex((e) => e.id === a);
    return s < 0 ? [] : i.slice(0, s + 1);
}
var tf = n(819169);
function tI(e, t, n, i, a) {
    switch (t.type) {
        case Z.Mm.MESSAGE:
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
        case Z.Mm.ACTIVITY:
        case Z.Mm.CUSTOM_STATUS:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "contentInventory", content: t.activity },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case Z.Mm.GUILD_EVENT:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "guildEvent", eventId: t.event_id },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case Z.Mm.RECOMMENDED_GUILDS:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "recommendedGuilds" },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case Z.Mm.DISCOVER_ITEM:
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
let tE = 15 * Q.A.Millis.MINUTE;
var ty = n(939249),
    tT = n(976860),
    tA = n(378570),
    tS = n(702476),
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
                            variant: "body-md/normal",
                            color: "text-strong",
                            className: tC.qS,
                            children: s,
                        }),
                ],
            }),
        }),
    });
}
var tN = n(429913),
    tw = n(886072);
function tb(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content : null,
        i = n?.extra,
        s = n?.author_id,
        r = n?.content_type,
        d = i?.type === "played_game_extra" || i?.type === "launched_activity_extra" ? i.application_id : void 0,
        l = (0, tN.h)(d),
        c = (0, o.bG)([q.default], () => (null != s ? q.default.getUser(s) : null), [s]),
        u = r === T.ContentInventoryEntryType.TOP_GAME,
        m = l?.getIconURL(240);
    return i?.type !== "played_game_extra" || "contentInventory" !== t.data.kind || null == l || null == c || null == m
        ? null
        : (0, a.jsx)("div", {
              className: tw.kL,
              children: (0, a.jsxs)("div", {
                  className: tw.Nr,
                  children: [
                      (0, a.jsx)("img", { src: m, alt: l.name, className: tw.Gt }),
                      (0, a.jsxs)("div", {
                          className: tw.Vx,
                          children: [
                              (0, a.jsx)(tM.E, { variant: "body-md/semibold", color: "text-strong", children: l.name }),
                              u &&
                                  (0, a.jsx)("div", {
                                      className: tw.qS,
                                      children: (0, a.jsx)(tM.E, {
                                          variant: "body-xs/semibold",
                                          color: "text-brand",
                                          children: eg.intl.string(eg.t["/50eHi"]),
                                      }),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
var tG = n(177953),
    tk = n(47167),
    tO = n(713654),
    tL = n(435328),
    tj = n(563312),
    tU = n(826383),
    tR = n(9448),
    tF = n(974930),
    tH = n(641786);
function tY(e) {
    let { eventId: t } = e,
        n = (0, o.bG)([D.Ay], () => D.Ay.getGuildScheduledEvent(t), [t]),
        i = (0, o.bG)([B.A], () => B.A.getGuild(n?.guild_id), [n]),
        r = (0, o.bG)([V.A], () => V.A.getChannel(n?.channel_id), [n]),
        d = (0, tj.nh)(t, null),
        l = null != n && (0, D.Fd)(n),
        c = null != n ? (0, tF.G3)(n) : null,
        u = (0, tU.A)(n?.guild_id, n?.id, c),
        m = d?.startTime.toISOString(),
        { startDateTimeString: _ } = s.useMemo(
            () =>
                l ? { startDateTimeString: eg.intl.string(eg.t.TxqPQR) } : (0, tF.CC)(m ?? new Date().toISOString()),
            [m, l],
        ),
        g = (0, tk.Ay)(r),
        p = null != n ? (0, tR.oF)(n) : void 0,
        h = null != r ? (0, tO.gU)(r) : null;
    if (null == n || null == i) return null;
    let f = null != n.description && n.description.length > 0;
    return (0, a.jsxs)("div", {
        className: tH.Qo,
        children: [
            (0, a.jsx)("div", {
                className: tH.At,
                children: (0, a.jsx)(tM.E, {
                    variant: "body-sm/semibold",
                    color: l ? "status-positive" : "text-brand",
                    children: _,
                }),
            }),
            (0, a.jsx)(tM.E, { variant: "body-lg/semibold", className: f ? tH.X_ : void 0, children: n.name }),
            f &&
                (0, a.jsx)(tM.E, {
                    variant: "body-md/normal",
                    color: "text-subtle",
                    className: tH.tj,
                    children: (0, tL.l)(n.description ?? "", !0, { guildId: i.id }),
                }),
            (0, a.jsx)("hr", { className: tH.Yl }),
            (0, a.jsxs)("div", {
                className: tH.oo,
                children: [
                    (0, a.jsxs)("div", {
                        className: tH.ik,
                        children: [
                            (0, a.jsx)(tG.GroupIcon, { size: "xs", color: "currentColor" }),
                            (0, a.jsx)(tM.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: eg.intl.format(eg.t["+DLsD8"], { count: u }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tH.ik,
                        children: [
                            null != h ? (0, a.jsx)(h, { size: "xs", color: "currentColor" }) : null,
                            (0, a.jsx)(tM.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                className: tH.HA,
                                children: g ?? (null != p ? (0, tL.y)(p, !0) : null),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tV = n(837381),
    tP = n(384231),
    tB = n(763754),
    tK = n(491182),
    tJ = n(860227),
    tW = n(538355),
    tz = n(699352),
    tX = n(715628),
    tq = n(752636),
    tQ = n(117096),
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
        p = t.type === e_.lAJ.POLL_RESULT || (e.disableInteraction ?? !1),
        h = t.isFirstMessageInForumPost(l),
        f = (0, tP.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        {
            content: I,
            hasSpoilerEmbeds: E,
            hasBailedAst: y,
        } = (0, tW.A)(t, {
            hideSimpleEmbedContent: r,
            allowList: h || f,
            allowHeading: h || f,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        T = (0, tV.rm)(t.id),
        A = (0, tB.Ay)(t),
        S = (0, o.bG)(
            [V.A],
            () => t.hasFlag(e_.pr7.HAS_THREAD) && V.A.getChannel(ei.default.castMessageIdAsChannelId(t.id)),
        ),
        M = (0, tZ.Xx)({ guildId: l.guild_id, roleId: A.iconRoleId }),
        v = (0, tJ.fF)(t),
        x = (0, tJ.ZD)(t);
    return (0, a.jsx)(tK.A, {
        compact: !1,
        className: d()(n, t0.i, { [t1.M1]: (0, w.ec)(t), [t1.XN]: p }),
        disableInteraction: p,
        childrenExecutedCommand: (0, t$.A)(t, l, !1),
        childrenHeader: (0, tq.A)({
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
        childrenAccessories: e.hideAccessories ? void 0 : (0, tz.J)(e, E, y),
        childrenMessageContent: (0, tX.A)(e, I),
        childrenSystemMessage: (0, tQ.A)({ ...e, disableInteraction: p }),
        onContextMenu: i,
        onClick: s,
        hasThread: _ && null != S && t.hasFlag(e_.pr7.HAS_THREAD),
        hasReply: !1,
        "aria-labelledby": v,
        "aria-describedby": x,
        author: A,
        ...T,
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
        l = (0, o.bG)([B.A], () => (d?.guild_id != null ? B.A.getGuild(d.guild_id) : null), [d]),
        c = (0, o.yK)(
            [tu, K.A],
            () => (null == n ? [] : i.map((e) => tu.getMessage(e) ?? K.A.getMessage(n, e)).filter((e) => null != e)),
            [n, i],
        );
    return null == d || null == l || 0 === c.length
        ? null
        : (0, a.jsxs)("div", {
              className: tH.kL,
              children: [
                  null != r
                      ? (0, a.jsx)("div", {
                            className: tH.gn,
                            children: (0, a.jsx)("div", { className: tH.DD, children: r }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: tH.MJ,
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
function t4(e) {
    let { item: t } = e;
    switch (t.data.kind) {
        case "guildEvent":
            return (0, a.jsx)(tY, { eventId: t.data.eventId });
        case "message":
        case "forumThread":
            return (0, a.jsx)(t3, { item: t });
        case "contentInventory":
            switch (t.data.content.content_type) {
                case T.ContentInventoryEntryType.CUSTOM_STATUS:
                    return (0, a.jsx)(tD, { item: t });
                case T.ContentInventoryEntryType.PLAYED_GAME:
                case T.ContentInventoryEntryType.TOP_GAME:
                    return (0, a.jsx)(tb, { item: t });
                default:
                    return (0, a.jsx)("div", { children: "Unsupported content inventory type" });
            }
        default:
            return (0, a.jsx)("div", { children: "Unknown item type" });
    }
}
var t6 = n(682163),
    t9 = n(995273),
    t2 = n(668499);
function t8(e) {
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
                    return ei.default.extractTimestamp(t.data.message.id);
                case "guildEvent":
                    return ei.default.extractTimestamp(t.data.eventId);
                default:
                    return t.timestamp;
            }
        }, [t]),
        c = (0, o.bG)([V.A], () => V.A.getChannel(i), [i]),
        u = (0, tk.Ay)(c),
        m = c?.guild_id ?? r,
        _ = (0, o.bG)([B.A], () => (null != m ? B.A.getGuild(m) : null), [m]),
        g = (0, o.bG)([q.default], () => (null != d ? q.default.getUser(d) : null), [d]);
    return "unknown" === n
        ? null
        : (0, a.jsx)("div", {
              className: t2.kL,
              children: (0, a.jsxs)("div", {
                  className: t2.wx,
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
                              return (0, a.jsx)("img", { src: e, alt: g.username, className: t2.my });
                          }
                          return null;
                      })(),
                      (0, a.jsxs)("div", {
                          className: t2.Se,
                          children: [
                              (0, a.jsx)("div", {
                                  className: t2.$,
                                  children: (0, a.jsxs)("div", {
                                      className: t2.gH,
                                      children: [
                                          "guild" === n && null != _
                                              ? (0, a.jsx)(tM.E, {
                                                    variant: "body-md/semibold",
                                                    color: "text-strong",
                                                    className: t2.DD,
                                                    children: _.name,
                                                })
                                              : "user" === n && null != g
                                                ? (0, a.jsx)(tM.E, {
                                                      variant: "body-md/semibold",
                                                      color: "text-strong",
                                                      className: t2.DD,
                                                      children: g.username,
                                                  })
                                                : null,
                                          (0, a.jsx)(tM.E, {
                                              variant: "body-xs/normal",
                                              color: "text-muted",
                                              className: t2.vE,
                                              children: (0, t9.jb)(l),
                                          }),
                                      ],
                                  }),
                              }),
                              (function () {
                                  let e = (function () {
                                      switch (t.data.kind) {
                                          case "message":
                                              if (t.channelType === e_.rbe.GUILD_ANNOUNCEMENT)
                                                  return eg.intl.string(eg.t["8P08G9"]);
                                              return eg.intl.string(eg.t.hMFMY9);
                                          case "guildEvent":
                                              return eg.intl.string(eg.t["6pFsLQ"]);
                                          case "forumThread":
                                              return eg.intl.string(eg.t.bYNuVx);
                                          case "contentInventory":
                                              switch (t.data.content.content_type) {
                                                  case T.ContentInventoryEntryType.CUSTOM_STATUS:
                                                      return eg.intl.string(eg.t.fxOLPR);
                                                  case T.ContentInventoryEntryType.TOP_GAME:
                                                  case T.ContentInventoryEntryType.PLAYED_GAME:
                                                      return eg.intl.string(eg.t.ktOTRQ);
                                                  default:
                                                      return `${t.data.content.content_type}`;
                                              }
                                          default:
                                              return "";
                                      }
                                  })();
                                  if ("user" === n)
                                      return (0, a.jsx)("div", {
                                          className: t2.VA,
                                          children: (0, a.jsx)(tM.E, {
                                              variant: "body-sm/medium",
                                              color: "text-subtle",
                                              tag: "span",
                                              className: t2.o4,
                                              children: e,
                                          }),
                                      });
                                  if (null != c && null != e) {
                                      let t = (0, tO.gU)(c, _);
                                      return (0, a.jsxs)("div", {
                                          className: t2.VA,
                                          children: [
                                              (0, a.jsx)(tM.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: t2.o4,
                                                  children: e,
                                              }),
                                              (0, a.jsx)(tM.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: t2.o4,
                                                  children: eg.intl.string(eg.t.CHUAYk),
                                              }),
                                              (0, a.jsxs)(tM.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: t2.o4,
                                                  children: [
                                                      null != t &&
                                                          (0, a.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: t2.p,
                                                          }),
                                                      u,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, a.jsx)("div", {
                                            className: t2.VA,
                                            children: (0, a.jsx)(tM.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                tag: "span",
                                                className: t2.o4,
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
var t7 = n(301690);
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
                            (0, tA.ci)(t.data.message.channel_id, t.data.message.id);
                            break;
                        case "guildEvent": {
                            let e = D.Ay.getGuildScheduledEvent(t.data.eventId);
                            null != e && (0, tT.pX)(e_.BVt.GUILD_EVENT_DETAILS(e.guild_id, e.id));
                            break;
                        }
                        case "forumThread":
                            (0, tA.ci)(t.data.threadChannel.id, t.data.message.id);
                            break;
                        case "contentInventory":
                            (0, tS.openUserProfileModal)({ userId: t.data.content.author_id });
                    }
            },
            [t],
        );
    return (0, a.jsxs)(ty.D, {
        className: t7.k,
        onClick: n,
        children: [
            (0, a.jsx)(t8, { item: t }),
            (0, a.jsx)("div", { className: t7.o, children: (0, a.jsx)(t4, { item: t }) }),
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
        c = (0, o.bG)([tu], () => tu.notificationItem(), []),
        { showDot: u } = { value: 0, showDot: (0, o.bG)([tu], () => tu.hasNewContent(), []) },
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
                    allItemsHydrated: u,
                    discoverEnabled: m,
                } = (function () {
                    let { isWaterwheelsCardEligible: e } =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, b.hY)("icymi_items"),
                        n = (0, o.bG)([tu], () => tu.getUnreadDisplayItems()),
                        i = (0, o.bG)([tu], () => tu.getReadDisplayItems()),
                        a = (0, o.bG)([tu], () => tu.getNextIndexToHydrate()),
                        r = (0, o.cf)([tu], () => tu.getHydratedItems()),
                        d = (0, o.bG)([tu], () => tu.getMissingItems());
                    s.useEffect(() => {
                        let e = Date.now() + i.length;
                        eu.A.ackGravityItems(i.map((t) => ({ id: t.id, timestamp: e-- }), !0));
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
                                a.type === Z.Mm.MESSAGE &&
                                a.data.message_context?.reference_message_id != null &&
                                (s = r[a.data.message_id]),
                            null != s)
                        ) {
                            let n = tI(a, s, !0, t, e);
                            null != n && l.push(n);
                        }
                    }
                    for (let n = 0; n < i.length && !(u >= a); n++) {
                        let a = i[n];
                        if ((u++, d[a.id])) continue;
                        let s = r[a.id];
                        if (
                            (null == s &&
                                a.type === Z.Mm.MESSAGE &&
                                a.data.message_context?.reference_message_id != null &&
                                (s = r[a.data.message_id]),
                            null != s)
                        ) {
                            let n = tI(a, s, !1, t, e);
                            null != n && c.push(n);
                        }
                    }
                    return {
                        unreadItems: l,
                        readItems: c,
                        allUnreadItemsHydrated: a >= n.length,
                        allItemsHydrated: a >= n.length + i.length,
                        discoverEnabled: t,
                    };
                })({ isWaterwheelsCardEligible: i }),
                _ = (0, o.bG)([tu], () => tu.getVersion(), []),
                g = (0, o.bG)([tu], () => !(tu.isFirstPageHydrated() && _ > 0));
            s.useEffect(() => {
                null != tu.getLoadId() && t_.trackFeedShown({ homeSessionId: "gravity" });
            }, [_]);
            let p = (0, o.bG)([tu], () => tu.isRefreshing(), []),
                h = (0, o.bG)([tu], () => tu.isHydrating(), []),
                [f, I] = s.useState([]),
                { loadId: E, lastScrollEventTimestamp: y } = (0, o.cf)([tu], () => ({
                    loadId: tu.getLoadId(),
                    lastScrollEventTimestamp: tu.lastScrollEvent(),
                })),
                T = f
                    .filter((e) => {
                        let { item: t } = e;
                        return !tp.has(t.data.kind);
                    })
                    .map((e) => {
                        let { item: t } = e;
                        return t.id;
                    })
                    .pop(),
                A = (0, tf.A)(T);
            s.useEffect(() => {
                if (p || g || null == A || null == T || T === A) return;
                let e = Date.now();
                e - y > tE && (eu.A.gravityScrollEvent(e), t_.trackFeedFirstScrollStarted());
            }, [p, y, A, T, E, g]);
            let S = s.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if ((t.some((e) => "end" === e.item.data.kind) && r(!0), 0 === t.length)) return;
                        I(t);
                        let n = [],
                            i = th(t),
                            a = Date.now();
                        for (let e = i.length - 1; e >= 0; e--) {
                            let t = i[e];
                            null != t && n.push({ id: t.id, type: (0, Z.xG)(t), timestamp: a++ });
                        }
                        (n.length > 0 && eu.A.ackGravityItems(n, !0),
                            t_.trackItemShortImpression(
                                t,
                                i.map((e) => ({ id: e.id, type: (0, Z.xG)(e) })),
                                _,
                            ));
                    },
                    [_, r],
                ),
                M = s.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if (0 === t.length) return;
                        let n = th(t);
                        (t_.trackItemLongImpression(
                            t,
                            n.map((e) => ({ id: e.id, type: (0, Z.xG)(e) })),
                            _,
                        ),
                            eu.A.triggerItemsLongImpression(
                                t
                                    .filter((e) => {
                                        let { item: t } = e;
                                        return !tp.has(t.data.kind);
                                    })
                                    .map((e) => {
                                        let { item: t, index: n } = e;
                                        return {
                                            itemId: t.id,
                                            itemType: eA(t),
                                            triggerType: "list",
                                            itemFeedIndex: n,
                                            itemScore: t.score ?? null,
                                            itemChannelType: t.channelType ?? null,
                                            isInitiallyVisible: !1,
                                        };
                                    }),
                            ));
                    },
                    [_],
                ),
                v = s.useCallback((e) => {
                    let { viewableItems: t } = e;
                    eu.A.startItemsDwell(
                        t
                            .filter((e) => {
                                let { item: t } = e;
                                return !tp.has(t.data.kind);
                            })
                            .map((e) => {
                                let { item: t, index: n } = e;
                                return {
                                    itemId: t.id,
                                    itemType: eA(t),
                                    triggerType: "list",
                                    itemFeedIndex: n,
                                    itemScore: t.score ?? null,
                                    itemChannelType: t.channelType ?? null,
                                    isInitiallyVisible: !1,
                                };
                            }),
                    );
                }, []),
                x = s.useMemo(
                    () => [
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 100,
                                minimumViewTime: 50,
                            },
                            onViewableItemsChanged: S,
                        },
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 50,
                                minimumViewTime: 1e3,
                            },
                            onViewableItemsChanged: M,
                        },
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 50,
                                minimumViewTime: 50,
                            },
                            onViewableItemsChanged: v,
                        },
                    ],
                    [S, M, v],
                );
            s.useEffect(() => {
                eu.A.openICYMITab();
            }, []);
            let C = tg(t),
                { data: D, stickyHeaderIndices: N } = s.useMemo(() => {
                    let e = [];
                    return (
                        g &&
                            null != n &&
                            n.type === Z.Mm.CUSTOM_STATUS &&
                            e.push({
                                id: n.id,
                                timestamp: Date.now(),
                                data: { kind: "contentInventory", content: ey(n).activity },
                                score: n.score,
                                unread: !0,
                            }),
                        g
                            ? e.push({ id: "loading", timestamp: 0, unread: !1, data: { kind: "loading" } })
                            : (d.forEach((t) => {
                                  eT(t) || e.push(t);
                              }),
                              !m && c && e.push({ id: "end", timestamp: 0, unread: !1, data: { kind: "end" } }),
                              l.forEach((t) => {
                                  eT(t) || e.push(t);
                              }),
                              m && u && e.push({ id: "end", timestamp: 0, unread: !1, data: { kind: "end" } }),
                              h &&
                                  e.push({
                                      id: "bottomLoading",
                                      timestamp: 0,
                                      unread: !1,
                                      data: { kind: "bottomLoading" },
                                  })),
                        { data: e, stickyHeaderIndices: [] }
                    );
                }, [g, n, d, c, u, m, l, h]);
            return {
                data: D,
                loading: g,
                version: _,
                visibleItemIds: f,
                endVisible: a,
                isRefreshing: p,
                handleOnRefresh: C,
                stickyHeaderIndices: N,
                viewabilityConfigCallbackPairs: x,
            };
        })({ showDot: u, notificationItem: c }),
        y = tg();
    s.useEffect(
        () => () => {
            y();
        },
        [y],
    );
    let T = (0, o.bG)([tu], () => tu.hasNewContent(), []),
        A = (0, o.bG)([tu], () => tu.isHydrating(), []),
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
                    let e = tu.getUnreadDisplayItems(),
                        t = tu.getReadDisplayItems(),
                        n = tu.getNextIndexToHydrate();
                    await eI([...e, ...t], n, n + 15, tu.getHydratedItems());
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
        N = s.useCallback(
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
    return h && 0 === p.length
        ? (0, a.jsx)("div", {
              style: { padding: "32px", textAlign: "center" },
              children: (0, a.jsx)("div", { children: "Loading ICYMI feed..." }),
          })
        : (0, a.jsxs)("div", {
              className: nt.k,
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
                      className: nt.j,
                      children: [
                          p.map((e) => N(e)),
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
var ni = n(534515),
    na = n(999900);
let ns = (0, g.A)(function (e) {
    let { width: t } = e,
        n = (0, y.c)("ICYMIPage");
    (s.useEffect(() => {
        n || (0, l.pX)(e_.BVt.ME);
    }, [n]),
        s.useLayoutEffect(() => {
            n && _.I(e_.BVt.ICYMI);
        }, [n]),
        (0, p.Ay)(() => {
            n && (0, I.d0)("icymi");
        }));
    let i = (0, o.bG)([E.A], () => E.A.theme),
        r = (0, o.bG)([tu], () => tu.isRefreshing()),
        g = s.useRef(null);
    (0, h.HU)({ location: eg.intl.string(eg.t["jnXV/V"]) });
    let T = tg(),
        A = eg.intl.string(eg.t.wzzjk9);
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
                                  tooltip: A,
                                  onClick: T,
                                  disabled: r,
                                  "aria-label": A,
                              }),
                              children: [
                                  (0, a.jsx)(f.A.Icon, { icon: m.FlashIcon, "aria-hidden": !0 }),
                                  (0, a.jsx)(f.A.Title, { children: eg.intl.string(eg.t["jnXV/V"]) }),
                                  (0, a.jsx)(f.A.Title, {
                                      children: (0, a.jsx)("p", {
                                          className: ni.HH,
                                          children: eg.intl.string(eg.t.Ac2OZA),
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
