n.d(t, {
    $U: () => P,
    FJ: () => w,
    HG: () => R,
    IC: () => j,
    NV: () => N,
    Rm: () => Z,
    _e: () => I,
    aL: () => y,
    eO: () => L,
    em: () => S,
    es: () => T,
    jv: () => C,
    mV: () => A,
    rK: () => x,
    y_: () => v,
    ye: () => D,
}),
    n(539854),
    n(472816),
    n(794429),
    n(388685);
var r,
    i = n(661869),
    l = n(876215);
n(442837), n(368844);
var a = n(924301),
    o = n(786761),
    s = n(131704),
    c = n(23750),
    u = n(592125),
    d = n(430824);
n(375954);
var p = n(306680),
    f = n(709054),
    g = n(948053),
    h = n(518929),
    m = n(940893),
    b = n(144725),
    _ = n(797394),
    E = n(634773),
    O = n(981631);
function v(e, t) {
    return "hydration-".concat(e, "-").concat(t);
}
n(388032);
var y =
    (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"),
    (r[(r.DEFAULT = 1)] = "DEFAULT"),
    (r[(r.MORE = 2)] = "MORE"),
    (r[(r.LESS = 3)] = "LESS"),
    (r[(r.MUTED = 4)] = "MUTED"),
    r);
function I(e) {
    return e.type === _.Ni.MESSAGE || e.type === _.Ni.GENERATED_CANDIDATE || e.type === _.Ni.GUILD_EVENT;
}
function C(e) {
    return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function S(e, t, n) {
    let r = b.Z.getHydratedItems(),
        i = e.slice(t, n);
    if (0 === i.length) return;
    g.Z.loadHydratedAttempt(v(t, n));
    let l = i.filter((e) => null == r[e.id]),
        a = l
            .filter((e) => e.type === _.Ni.MESSAGE)
            .map((e) => ({
                channel_id: e.data.channel_id,
                message_id: e.data.message_id,
            })),
        o = l
            .map((e) => {
                if (e.type === _.Ni.MESSAGE) {
                    var t, n, r;
                    let i = [];
                    return (
                        (null == (t = e.data.message_context) ? void 0 : t.reply_message_id) != null &&
                            i.push({
                                channel_id: e.data.channel_id,
                                message_id: e.data.message_context.reply_message_id,
                            }),
                        (null == (n = e.data.message_context) ? void 0 : n.before_message_id) != null &&
                            i.push({
                                channel_id: e.data.channel_id,
                                message_id: e.data.message_context.before_message_id,
                            }),
                        (null == (r = e.data.message_context) ? void 0 : r.after_message_id) != null &&
                            i.push({
                                channel_id: e.data.channel_id,
                                message_id: e.data.message_context.after_message_id,
                            }),
                        i
                    );
                }
                return [];
            })
            .flat()
            .filter(Boolean),
        s = l
            .filter((e) => e.type === _.Ni.ACTIVITY)
            .map((e) => ({
                user_id: e.data.user_id,
                content_id: e.data.content_id,
            })),
        c = l
            .filter((e) => e.type === _.Ni.GENERATED_CANDIDATE)
            .map((e) => ({
                content_id: e.data.content_id,
                guild_id: e.data.guild_id,
                channel_id: e.data.channel_id,
            }));
    await g.Z.fetchHydrated(t, n, {
        messageItems: [...a, ...o],
        activityItems: s,
        generatedCandidateItems: c,
    });
}
async function T() {
    let e = b.Z.getUnreadDisplayItems(),
        t = b.Z.getReadDisplayItems(),
        n = b.Z.getNextIndexToHydrate();
    await S([...e, ...t], n, n + _.xy);
}
function N(e) {
    let t = [];
    null != e.messages && (t = e.messages);
    let n = (function (e, t, n) {
        let r = [];
        for (let t of e) {
            if (null == t.author) continue;
            let e = t instanceof c.ZP ? t : (0, o.e5)(t);
            r.push(e), t.author.id;
        }
        return r;
    })(t);
    return {
        guild_id: e.guild_id,
        content_id: e.content_id,
        channel_id: e.channel_id,
        type: e.type,
        primary_text: e.primary_text,
        secondary_text: e.secondary_text,
        message_ids: e.message_ids,
        message_scores: e.message_scores,
        user_ids: e.user_ids,
        image_urls: e.image_urls,
        created_at: e.created_at,
        messages: n,
    };
}
function j(e, t) {
    var n, r;
    return (
        (n = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, t)),
        (r = r =
            {
                message: (0, o.e5)(e.message),
                threadChannel: null != e.thread_channel ? s.dy.fromServer(e.thread_channel, e.guild_id) : void 0,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        n
    );
}
function P(e, t) {
    let n = p.ZP.getTrackedAckMessageId(e);
    return null == n || f.default.extractTimestamp(t) > f.default.extractTimestamp(n);
}
function x(e) {
    return (0, h.VZ)(e);
}
function A(e) {
    var t;
    return {
        id: e.id,
        type: _.Ni.CUSTOM_STATUS,
        activity: {
            id: e.id,
            author_id: e.data.user_id,
            author_type: i.i.USER,
            traits: [],
            participants: [],
            content_type: l.s.CUSTOM_STATUS,
            extra: {
                type: "custom_status_extra",
                status: null != (t = e.data.text) ? t : "",
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
function Z(e, t, n) {
    let r = E.Z.getReadTimestamp(e);
    null == r && (r = null == n ? void 0 : n[e]);
    let i = E.Z.getReadTimestamp(t);
    return (null == i && (i = null == n ? void 0 : n[t]), null == r && null == i)
        ? 0
        : null == r
          ? -1
          : null == i
            ? 1
            : i - r;
}
function w(e) {
    let t = [...b.Z.getUnreadDisplayItems(), ...b.Z.getReadDisplayItems()],
        n = null;
    for (let t = e.length - 1; t >= 0; t--) {
        let r = e[t];
        if (null != r && !m.X.has(r.item.data.kind)) {
            n = r.item.id;
            break;
        }
    }
    if (null == n) return [];
    let r = t.findIndex((e) => e.id === n);
    return r < 0 ? [] : t.slice(0, r + 1);
}
function L(e) {
    var t, n;
    let r, i;
    switch (e.data.kind) {
        case "message":
            r = e.data.message.channel_id;
            break;
        case "generatedCandidate":
            r = e.data.item.channel_id;
            break;
        case "forumThread":
            r = e.data.threadChannel.id;
            break;
        case "guildEvent":
            i = null == (t = a.ZP.getGuildScheduledEvent(e.data.eventId)) ? void 0 : t.guild_id;
            break;
        default:
            return !1;
    }
    let l = u.Z.getChannel(r);
    if (null == l ? void 0 : l.nsfw) return !0;
    let o = null != (i = null != (n = null == l ? void 0 : l.guild_id) ? n : i) ? d.Z.getGuild(i) : null;
    return (
        (null == o ? void 0 : o.nsfwLevel) === O.V_K.EXPLICIT ||
        (null == o ? void 0 : o.nsfwLevel) === O.V_K.AGE_RESTRICTED
    );
}
function R(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "bottomLoading":
            return "bottomLoading";
        case "message":
            var t;
            if (e.channelType === O.d4z.GUILD_ANNOUNCEMENT) return "announcement";
            if ((null == (t = e.data.messageContext) ? void 0 : t.external_content_application_id) != null)
                return "game_message";
            return "message";
        case "guildEvent":
            return "guild_event";
        case "contentInventory":
            if (e.data.content.content_type === l.s.CUSTOM_STATUS) return "hotwheels_custom_status";
            return "hotwheels_gaming_activity";
        case "recommendedGuilds":
            return "recommended_guilds";
        case "forumThread":
            return "forum_thread";
        case "generatedCandidate":
            return "generated_candidate";
        case "icymiHeader":
            return "icymi_header";
        default:
            return "unknown";
    }
}
async function D(e) {
    let { ack: t } = await Promise.resolve().then(n.bind(n, 45114)),
        { AnalyticsObjectTypes: r } = await Promise.resolve().then(n.bind(n, 981631));
    b.Z.getDehydratedItems().forEach((n) => {
        n.type === _.Ni.MESSAGE &&
            n.data.channel_type === O.d4z.GUILD_ANNOUNCEMENT &&
            f.default.compare(p.ZP.ackMessageId(n.data.channel_id), n.data.message_id) >= 0 &&
            t(
                n.data.channel_id,
                {
                    object: e,
                    objectType: r.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
                f.default.atPreviousMillisecond(n.data.message_id),
            );
    }),
        await g.Z.clearReadStates(),
        await g.Z.fetchDehydrated({
            isReloading: !0,
            forceRefresh: !0,
        }),
        await g.Z.reloadICYMITab(),
        await g.Z.getGuildChannelScores(),
        g.Z.getRecommendedGuilds();
}
