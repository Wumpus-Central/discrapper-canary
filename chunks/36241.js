(n.r(t), n.d(t, { default: () => t3 }));
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
    A = n(228366),
    S = n(99753),
    M = n(20805),
    x = n(583846),
    v = n(736056),
    C = n(698441),
    D = n(320095),
    w = n(280450),
    N = n(734057),
    k = n(776096),
    G = n(71393),
    b = n(232835),
    L = n(576705),
    O = n(573163),
    R = n(994500),
    j = n(543465),
    U = n(927813),
    F = n(449054),
    Y = n(174459),
    H = n(596720),
    V = n(652215);
function P(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "message":
            if (e.channelType === V.rbe.GUILD_ANNOUNCEMENT) return "announcement";
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
function B(e) {
    switch (e.type) {
        case H.Mm.MESSAGE:
            if (e.data.channel_type === V.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            return "message";
        case H.Mm.ACTIVITY:
            return "hotwheels_gaming_activity";
        case H.Mm.CUSTOM_STATUS:
            return "hotwheels_custom_status";
        case H.Mm.GUILD_EVENT:
            return "guild_event";
        case H.Mm.RECOMMENDED_GUILDS:
            return "recommended_guilds";
    }
}
let K = {
        trackItemInteraction(e) {
            Y.default.track(V.HAw.FEED_ITEM_INTERACTED, {
                load_id: tn.getLoadId(),
                feed_item_type: e.type,
                feed_item_id: e.id,
                home_session_id: "gravity",
                action_type: e.actionType,
                feed_item_index: tn.getIndexInHydratedFeed(e.id),
                icymi_session_id: e.icymiSessionId,
                impression_id: e.impressionId,
                ux_variation: e.uxVariation,
                session_interaction_index: e.sessionInteractionIndex,
            });
        },
        trackItemShortImpression(e, t, n) {
            Y.default.track(V.HAw.FEED_ITEM_SEEN_BATCH, {
                load_id: tn.getLoadId(),
                home_session_id: "gravity",
                feed_item_ids: e.map((e) => e.item.id),
                feed_item_types: e.map((e) => P(e.item)),
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
            Y.default.track(V.HAw.FEED_ITEM_SEEN_LONG, {
                load_id: tn.getLoadId(),
                home_session_id: "gravity",
                feed_item_ids: e.map((e) => e.item.id),
                feed_item_types: e.map((e) => P(e.item)),
                num_items: e.length,
                all_feed_item_ids: t.map((e) => e.id),
                all_feed_item_types: t.map((e) => e.type),
                num_all_items: t.length,
                all_feed_item_indices: t.map((e, t) => t),
                feed_version: n,
                version: 3,
            });
        },
        trackFeedLoaded(e) {
            let t = [],
                n = [],
                i = [],
                a = [];
            (e.unreadFeedItems.forEach((e) => {
                (t.push(e.id), i.push(B(e)));
            }),
                e.readFeedItems.forEach((e) => {
                    (n.push(e.id), a.push(B(e)));
                }),
                Y.default.track(V.HAw.FEED_LOADED, {
                    ...e.newTrackingProps,
                    home_session_id: e.homeSessionId,
                    tab_badged: e.hasNewContent,
                    unread_feed_item_ids: t,
                    read_feed_item_ids: n,
                    unread_feed_item_types: i,
                    read_feed_item_types: a,
                }));
        },
        trackFeedShown(e) {
            Y.default.track(V.HAw.FEED_SHOWN, {
                load_id: tn.getLoadId(),
                home_session_id: e.homeSessionId,
                variant: e.variant,
            });
        },
        trackFeedFirstScrollStarted() {
            Y.default.track(V.HAw.HOME_FIRST_SCROLL_STARTED, { load_id: tn.getLoadId(), home_session_id: "gravity" });
        },
        trackFeedFeedbackPromptViewed() {
            Y.default.track(V.HAw.HOME_FEEDBACK_PROMPT_VIEWED);
        },
        trackFeedFeedbackSubmitted(e) {
            Y.default.track(V.HAw.HOME_FEEDBACK_SUBMITTED, {
                load_id: tn.getLoadId(),
                home_session_id: "gravity",
                ...e,
            });
        },
        trackFeedOnboardingScreenSkipped(e) {
            Y.default.track(V.HAw.ICYMI_ONBOARDING_SCREEN_SKIPPED, { location: e.location });
        },
        trackFeedOnboardingGuildToggled(e) {
            Y.default.track(V.HAw.ICYMI_ONBOARDING_GUILD_TOGGLED, { guild_id: e.guildId, toggled: e.toggled });
        },
        trackFeedOnboardingCategoryToggled(e) {
            Y.default.track(V.HAw.ICYMI_ONBOARDING_CATEGORY_TOGGLED, { category_id: e.categoryId, toggled: e.toggled });
        },
        trackFeedEmptyLoadingSeen() {
            Y.default.track(V.HAw.ICYMI_FEED_EMPTY_LOADING_SEEN, { load_id: tn.getLoadId(), version: tn.getVersion() });
        },
        trackFeedEmptyLoadingComplete(e) {
            Y.default.track(V.HAw.ICYMI_FEED_EMPTY_LOADING_COMPLETE, {
                load_id: tn.getLoadId(),
                dwell_time_ms: e.dwellTimeMs,
                version: tn.getVersion(),
            });
        },
        trackFeedEmptyLoadingAbandoned(e) {
            Y.default.track(V.HAw.ICYMI_FEED_EMPTY_LOADING_ABANDONED, {
                load_id: tn.getLoadId(),
                dwell_time_ms: e.dwellTimeMs,
                version: tn.getVersion(),
            });
        },
        trackFeedSessionStarted(e) {
            Y.default.track(V.HAw.FEED_SESSION_STARTED, {
                load_id: tn.getLoadId(),
                version: tn.getVersion(),
                session_start_time_ms: e.sessionStartTimeMs,
                icymi_session_id: e.icymiSessionId,
                previous_icymi_session_count: e.previousIcymiSessionCount,
                ux_variation: e.uxVariation,
            });
        },
        trackFeedSessionCompleted(e) {
            Y.default.track(V.HAw.FEED_SESSION_COMPLETED, {
                load_id: tn.getLoadId(),
                version: tn.getVersion(),
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
            Y.default.track(V.HAw.FEED_ITEM_1S_DWELLED, {
                load_id: tn.getLoadId(),
                version: tn.getVersion(),
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
            Y.default.track(V.HAw.FEED_ITEM_DWELLED, {
                load_id: tn.getLoadId(),
                version: tn.getVersion(),
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
            Y.default.track(V.HAw.FEED_ITEM_ACTIONED, {
                load_id: tn.getLoadId(),
                icymi_session_id: e.icymiSessionId,
                ux_variation: e.uxVariation,
                version: tn.getVersion(),
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
            Y.default.track(V.HAw.FEED_FILTER_ACTIONED, {
                load_id: tn.getLoadId(),
                icymi_session_id: e.icymiSessionId,
                ux_variation: e.uxVariation,
                version: tn.getVersion(),
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
            Y.default.track(V.HAw.FEED_PAGE_ACTIONED, {
                load_id: tn.getLoadId(),
                icymi_session_id: e.icymiSessionId,
                ux_variation: e.uxVariation,
                version: tn.getVersion(),
                session_action_index: e.sessionActionIndex,
                action_gesture_type: e.actionParameters.actionGestureType,
                action_target_element: e.actionParameters.actionTargetElement,
                action_intent_type: e.actionParameters.actionIntentType,
                action_destination_type: e.actionParameters.actionDestinationType,
            });
        },
    },
    z = {};
class W extends o.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        z = e ?? {};
    }
    filterStaffContent() {
        return !0 === z.filterStaffContent;
    }
    getDoubleTapBehavior() {
        return z.doubleTapBehavior ?? H.Ai.DEFAULT;
    }
    getState() {
        return z;
    }
    getUserAgnosticState() {
        return z;
    }
}
let J = new W(A.h, {
    SET_ICYMI_FILTERS: function (e) {
        z = e.filters;
    },
});
var X = n(935208);
function q(e, t) {
    let n = O.Ay.getTrackedAckMessageId(e);
    return null == n || X.default.extractTimestamp(t) > X.default.extractTimestamp(n);
}
let Q = 7 * U.A.Millis.DAY,
    $ = { readIdToTimestampMap: {} };
class Z extends o.Ay.DeviceSettingsStore {
    static displayName = "ICYMIUnreadStateStore";
    static persistKey = "ICYMIUnreadStateStore";
    initialize(e) {
        $ =
            null != e && null != e.readIdToTimestampMap
                ? { readIdToTimestampMap: e.readIdToTimestampMap }
                : { readIdToTimestampMap: {} };
        let t = Date.now() - Q;
        for (let e of Object.keys($.readIdToTimestampMap).filter((e) => $.readIdToTimestampMap[e] < t))
            delete $.readIdToTimestampMap[e];
    }
    getReadTimestamp(e) {
        return $.readIdToTimestampMap[e];
    }
    getState() {
        return $;
    }
    getUserAgnosticState() {
        return $;
    }
}
let ee = new Z(A.h, {
    ICYMI_ACK_ITEMS: function (e) {
        let { items: t, override: n } = e;
        t.forEach((e) => {
            null != e && (null == $.readIdToTimestampMap[e.id] || n) && ($.readIdToTimestampMap[e.id] = e.timestamp);
        });
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let { items: t } = e;
        for (let e of t)
            e.type !== H.Mm.MESSAGE ||
                null != $.readIdToTimestampMap[e.id] ||
                e.data.message_context?.external_content_application_id != null ||
                q(e.data.channel_id, e.data.message_id) ||
                ($.readIdToTimestampMap[e.id] = 0);
    },
    CLEAR_ICYMI_READ_STATES: function () {
        $.readIdToTimestampMap = {};
    },
});
var et = n(6161);
n(256265);
var en = n(95701),
    ei = n(4106);
let ea = new Set(["end", "loading", "bottomLoading", "icymiHeader", "recommendedGuilds"]);
var es = n(522606),
    ed = n(375708),
    er =
        (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.DEFAULT = 1)] = "DEFAULT"),
        (i[(i.MORE = 2)] = "MORE"),
        (i[(i.LESS = 3)] = "LESS"),
        (i[(i.MUTED = 4)] = "MUTED"),
        i);
function el(e) {
    return e.type === H.Mm.MESSAGE || e.type === H.Mm.GUILD_EVENT;
}
function eo(e) {
    return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function ec(e, t, n) {
    let i = tn.getHydratedItems(),
        a = e.slice(t, n);
    if (0 === a.length) return;
    ei.A.loadHydratedAttempt((0, es.V)(t, n));
    let s = a.filter((e) => null == i[e.id]),
        d = s
            .filter((e) => e.type === H.Mm.MESSAGE)
            .map((e) => ({ channel_id: e.data.channel_id, message_id: e.data.message_id })),
        r = s
            .map((e) => {
                if (e.type === H.Mm.MESSAGE) {
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
            .filter((e) => e.type === H.Mm.ACTIVITY)
            .map((e) => ({ user_id: e.data.user_id, content_id: e.data.content_id }));
    await ei.A.fetchHydrated(t, n, { messageItems: [...d, ...r], activityItems: l });
}
async function eu() {
    let e = tn.getUnreadDisplayItems(),
        t = tn.getReadDisplayItems(),
        n = tn.getNextIndexToHydrate();
    await ec([...e, ...t], n, n + H.w5);
}
function em(e, t) {
    return {
        ...t,
        message: (0, D.rh)(e.message),
        threadChannel: null != e.thread_channel ? en.Lt.fromServer(e.thread_channel, e.guild_id) : void 0,
    };
}
function e_(e) {
    return {
        id: e.id,
        type: H.Mm.CUSTOM_STATUS,
        activity: {
            id: e.id,
            author_id: e.data.user_id,
            author_type: et.ContentInventoryAuthorType.USER,
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
function eg(e) {
    let t = [...tn.getUnreadDisplayItems(), ...tn.getReadDisplayItems()],
        n = null;
    for (let t = e.length - 1; t >= 0; t--) {
        let i = e[t];
        if (null != i && !ea.has(i.item.data.kind)) {
            n = i.item.id;
            break;
        }
    }
    if (null == n) return [];
    let i = t.findIndex((e) => e.id === n);
    return i < 0 ? [] : t.slice(0, i + 1);
}
function eh(e) {
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
    let a = null != (n = i?.guild_id ?? n) ? G.A.getGuild(n) : null;
    return a?.nsfwLevel === V.ftr.EXPLICIT || a?.nsfwLevel === V.ftr.AGE_RESTRICTED;
}
function ep(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "bottomLoading":
            return "bottomLoading";
        case "message":
            if (e.channelType === V.rbe.GUILD_ANNOUNCEMENT) return "announcement";
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
async function ef(e) {
    let { ack: t } = await Promise.resolve().then(n.bind(n, 334738)),
        { AnalyticsObjectTypes: i } = await Promise.resolve().then(n.bind(n, 652215));
    (tn.getDehydratedItems().forEach((n) => {
        n.type === H.Mm.MESSAGE &&
            n.data.channel_type === V.rbe.GUILD_ANNOUNCEMENT &&
            X.default.compare(O.Ay.ackMessageId(n.data.channel_id), n.data.message_id) >= 0 &&
            t(
                n.data.channel_id,
                { object: e, objectType: i.ACK_SEMI_AUTOMATIC },
                !0,
                !0,
                X.default.atPreviousMillisecond(n.data.message_id),
            );
    }),
        await ei.A.clearReadStates(),
        await ei.A.fetchDehydrated({ isReloading: !0, forceRefresh: !0 }),
        await ei.A.reloadICYMITab(),
        await ei.A.getGuildChannelScores(),
        ei.A.getRecommendedGuilds());
}
var eI = n(424994);
let eE = +U.A.Millis.DAY,
    ey = 3 * U.A.Millis.DAY,
    eT = [],
    eA = null,
    eS = 0,
    eM = [],
    ex = [],
    ev = {},
    eC = {},
    eD = {},
    ew = {},
    eN = {},
    ek = {},
    eG = 0,
    eb = !1,
    eL = !1,
    eO = !1,
    eR = null,
    ej = null,
    eU = 0,
    eF = [],
    eY = [],
    eH = 0,
    eV = [],
    eP = 0,
    eB = !0,
    eK = !1,
    ez = new Set(),
    eW = !1,
    eJ = !1,
    eX = 0,
    eq = 0;
function eQ(e, t) {
    if (Date.now() - eS > 6 * U.A.Millis.HOUR) {
        let n = new Set(e.map((e) => e.id));
        return t.slice(0, 20).filter((e) => n.has(e.id)).length >= 3;
    }
    return !1;
}
function e$(e) {
    if (!J.filterStaffContent()) return !0;
    if (el(e)) {
        if (e.data.guild_id === H.VL) return !0;
        let t = G.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(V.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1;
    }
    return !0;
}
function eZ(e, t, n, i) {
    let a = e.filter((e) => e.type !== n);
    return (
        t.forEach((e, t) => {
            (t + 1) * i < a.length ? a.splice((t + 1) * i, 0, e) : a.push(e);
        }),
        a
    );
}
function e0() {
    if (
        ((eF = eF.filter((e) => e.type !== H.Mm.RECOMMENDED_GUILDS)),
        (eY = eY.filter((e) => e.type !== H.Mm.RECOMMENDED_GUILDS)),
        0 === eV.length)
    )
        return;
    let e = "recommendedGuilds",
        t = G.A.getGuildsArray().filter((e) => e.features.has(V.GuildFeatures.COMMUNITY)).length >= 5,
        n = ee.getReadTimestamp(e);
    if (t && null != n && Date.now() - eP > eE && Date.now() - n < ey) return;
    let i = { id: e, type: H.Mm.RECOMMENDED_GUILDS, score: 50 };
    if (((eD[i.id] = i), (eC[i.id] = i), 0 === eF.length)) eY = [i, ...eY];
    else if ((!t && eF.length < 5) || (t && eF.length < 10)) eF = [...eF, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        eF.splice(e, 0, i);
    } else eF.splice(5, 0, i);
}
function e1() {
    let e = new Set();
    if (
        (eM.forEach((t) => {
            e.add(t.id);
        }),
        null != ej)
    )
        if (e.has(ej.id)) {
            let e = ej.id,
                t = ej.type,
                n = eM.findIndex((n) => n.id === e && n.type === t);
            -1 !== n && ((ej = eM[n]), (eM = eM.filter((t) => t.id !== e)), (eM = [ej, ...eM]));
        } else ((eM = [ej, ...eM]), e.add(ej.id));
    eM.forEach((e) => {
        ((eC[e.id] = e),
            e.type === H.Mm.CUSTOM_STATUS &&
                (R.A.isBlockedOrIgnored(e.data.user_id) ? (ew[e.id] = !0) : (eD[e.id] = e_(e))));
    });
}
function e5(e) {
    let t, n, i, a, s;
    if ((eM.length > 0 && ((eT = eM), (eM = []), (ex = [])), eG++, null != e)) ((eF = e.newUnread), (eY = e.newRead));
    else {
        let [e, t] = e3(eT);
        ((eF = e), (eY = t));
    }
    ((function () {
        let e = G.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != eN[n] && eN[n] < 0) continue;
            let e = C.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, C.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = N.A.getChannel(n.channel_id);
                        if (!L.A.can(V.xBc.VIEW_CHANNEL, e)) continue;
                    }
                    if (
                        ((0, C.W$)(n, 2 * U.A.Seconds.DAY) || (0, C.Fd)(n)) &&
                        (null == eD[n.id] &&
                            (eD[n.id] = { id: n.id, type: H.Mm.GUILD_EVENT, score: 10, event_id: n.id }),
                        t.push({
                            id: n.id,
                            type: H.Mm.GUILD_EVENT,
                            score: 10,
                            data: { guild_id: n.guild_id, event_id: n.id, channel_id: n.channel_id ?? void 0 },
                        }),
                        ++i >= 1)
                    )
                        break;
                }
        }
        t.sort((e, t) => {
            let n = k.A.getGuildAffinity(e.data.guild_id),
                i = k.A.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0);
        });
        let n = [],
            i = [];
        (t.forEach((e) => {
            ((eC[e.id] = e), null != ee.getReadTimestamp(e.id) ? i.push(e) : n.push(e));
        }),
            (eF = eZ(eF, n, H.Mm.GUILD_EVENT, 7)),
            (eY = eZ(eY, i, H.Mm.GUILD_EVENT, 7)));
    })(),
        (t = new Set()),
        (n = {}),
        (i = []),
        (a = []),
        (s = S.A.getFeed(eI.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5),
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
            null == eD[e.content.id] &&
                (eD[e.content.id] = { id: e.content.id, type: H.Mm.ACTIVITY, score: 15, activity: e.content });
            let s = {
                id: e.content.id,
                type: H.Mm.ACTIVITY,
                score: 15,
                data: { user_id: e.content.author_id, content_id: e.content.id },
            };
            (t.add(e.content.id), (eC[s.id] = s), null != ee.getReadTimestamp(s.id) ? a.push(s) : i.push(s));
        }),
        (eF = eZ(eF, i, H.Mm.ACTIVITY, 5)),
        (eY = eZ(eY, a, H.Mm.ACTIVITY, 5)),
        e0(),
        null != ev.load_id &&
            eA !== ev.load_id &&
            (K.trackFeedLoaded({
                newTrackingProps: ev,
                hasNewContent: eL,
                unreadFeedItems: eF,
                readFeedItems: eY,
                homeSessionId: "gravity",
            }),
            (eA = ev.load_id ?? null),
            (ev = {})),
        (eH = 0),
        eF.length + eY.length === 0 && (eJ = !0),
        ec([...eF, ...eY], 0, H.w5),
        (eK = !1));
}
function e3(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            let a = null != ee.getReadTimestamp(e.id);
            (e.type === H.Mm.MESSAGE &&
                e.data.message_context?.external_content_application_id == null &&
                (a = a || !q(e.data.channel_id, e.data.message_id)),
                a ? t.push(e) : e.type === H.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e));
        }),
        [
            [...i, ...n],
            t.sort((e, t) => {
                var n, i;
                let a, s;
                return (
                    (n = e.id),
                    (i = t.id),
                    null == (a = ee.getReadTimestamp(n)) && (a = void 0),
                    (null == (s = ee.getReadTimestamp(i)) && (s = void 0), null == a && null == s)
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
function e2(e, t) {
    let n = [],
        i = new Set(eT.map((e) => e.id));
    for (let a of e)
        !(a.type === H.Mm.RECOMMENDED_GUILDS || i.has(a.id)) &&
            null == ee.getReadTimestamp(a.id) &&
            (a.type !== H.Mm.MESSAGE || (q(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t)) &&
            n.push(a);
    return n;
}
function e6(e, t) {
    return e.filter((e) => !el(e) || e.data.channel_id !== t);
}
function e9(e, t) {
    eo(t) === er.MUTED && ((eT = e6(eT, e)), (eF = e6(eF, e)), (eY = e6(eY, e)), (eM = e6(eM, e)), (ex = e6(ex, e)));
}
function e4(e, t) {
    return e.filter((e) => !el(e) || e.data.guild_id !== t);
}
function e7(e, t) {
    eo(t) === er.MUTED && ((eT = e4(eT, e)), (eF = e4(eF, e)), (eY = e4(eY, e)), (eM = e4(eM, e)), (ex = e4(ex, e)));
}
function e8(e) {
    let { type: t, messageId: n, userId: i, emoji: a, reactionType: s } = e,
        d = eD[n];
    if (null == d || d.type !== H.Mm.MESSAGE) return !1;
    let r = w.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t
        ? (d.message = d.message.addReaction(a, r, { colors: e.colors, reactionType: s }))
        : (d.message = d.message.removeReaction(a, r, s));
}
function te(e) {
    let { channelId: t } = e,
        n = [],
        i = [];
    eF.forEach((e, a) => {
        (a > eH || !eO) && e.type === H.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e);
    });
    let a = eL,
        [s, d] = e3(eM);
    if (((ex = e2(s, t)), (eL = eO ? a && ex.length >= H.$P : a && eQ(i, eM)), 0 === n.length && a === eL)) return !1;
    0 !== n.length && ((eF = i), (eY = [...eY, ...n]));
}
class tt extends o.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        (this.waitFor(w.default, N.A, S.A, v.A, k.A, C.Ay, G.A, J, ee, b.A, L.A, O.Ay, R.A, j.Ay),
            null != e &&
                ((eT = e.dehydratedItems ?? []).forEach((e) => {
                    eC[e.id] = e;
                }),
                (eN = e.customGuildScores ?? {}),
                (ek = e.customChannelScoresByGuild ?? {}),
                (eU = e.numOpens ?? 0),
                (eS = e.lastOpened ?? 0),
                (eP = e.lastJoinedRecommendedGuild ?? 0),
                (eq = e.lastTakenICYMISurvey ?? 0)));
    }
    getVersion() {
        return eG;
    }
    getDehydratedItems() {
        return eT;
    }
    getNewDehydratedItems() {
        return eM;
    }
    getDehydratedItem(e) {
        return eC[e] ?? null;
    }
    getHydratedItem(e) {
        return eD[e] ?? null;
    }
    getMessage(e) {
        let t = eD[e];
        return null == t || t.type !== H.Mm.MESSAGE ? null : t.message;
    }
    getHydratedItems() {
        return eD;
    }
    getUnreadDisplayItems() {
        return eF;
    }
    getNewUnreadDehydratedItems() {
        return ex;
    }
    getReadDisplayItems() {
        return eY;
    }
    getNextIndexToHydrate() {
        return eH;
    }
    getMissingItems() {
        return ew;
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === er.MUTED || this.getCustomChannelScore(e, t) === er.MUTED;
    }
    getCustomChannelScore(e, t) {
        return null == ek[e] || null == ek[e][t] ? er.UNKNOWN : eo(ek[e][t]);
    }
    getCustomGuildScore(e) {
        return eN[e] ?? 0;
    }
    getCustomGuildScores() {
        return eN;
    }
    hasNewContent() {
        return eL;
    }
    getCurrentStatusAttachments(e) {
        return null == eR || eR[0] !== e ? [] : eR[1];
    }
    getLoadId() {
        return eA;
    }
    hasOpenedEnoughTimes() {
        return 5 === eU;
    }
    hasOpened() {
        return eO;
    }
    getDiscoverableGuilds() {
        return eV;
    }
    videosMuted() {
        return eB;
    }
    isRefreshing() {
        return eK;
    }
    isHydrating() {
        return ez.size > 0;
    }
    notificationItem() {
        return ej;
    }
    getIsTabFocused() {
        return eW;
    }
    isFirstPageHydrated() {
        return eJ;
    }
    lastScrollEvent() {
        return eX;
    }
    lastTakenICYMISurvey() {
        return eq;
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e
            ? [...eF, ...eY].findIndex((e) => e.type === H.Mm.RECOMMENDED_GUILDS)
            : [...eF, ...eY].filter((e) => null != eD[e.id]).findIndex((t) => t.id === e);
    }
    getState() {
        return {
            dehydratedItems: eT,
            numOpens: eU,
            customGuildScores: eN,
            customChannelScoresByGuild: ek,
            lastOpened: eS,
            lastJoinedRecommendedGuild: eP,
            lastTakenICYMISurvey: eq,
        };
    }
}
let tn = new tt(A.h, {
    LOGOUT: function () {
        ((eT = []),
            (eM = []),
            (ex = []),
            (eC = {}),
            (ev = {}),
            (eD = {}),
            (ew = {}),
            (eA = null),
            (eN = {}),
            (ek = {}),
            (eG = 0),
            (eb = !1),
            (eL = !1),
            (eO = !1),
            (eF = []),
            (eY = []),
            (eH = 0),
            (eS = 0),
            (eP = 0),
            (eB = !0),
            (eK = !1),
            (ez = new Set()),
            (ej = null),
            (eW = !1),
            (eJ = !1),
            (eR = null),
            (eX = 0));
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function (e) {
        let { messageItem: t, customStatusItem: n } = e;
        if (null != n) return ((ej = n), null != eA && ((eM = eM.length > 0 ? eM : [...eT]), e1(), e5()), !0);
        if (null != t) {
            let e = {
                id: t.message.id,
                type: H.Mm.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: V.rbe.GUILD_TEXT,
                },
            };
            if (
                ((eC[t.message.id] = e),
                (eD[t.message.id] = { ...e, message: (0, D.rh)(t.message) }),
                null == eA && null == ev)
            ) {
                let [t, n] = e3((eT = [e, ...eT]));
                ((eF = t), (eY = n));
            } else ((eM = [e, ...eM]), e5());
            return !0;
        }
        return !1;
    },
    LOAD_ICYMI_DEHYDRATED: function (e) {
        let t,
            { items: n, loadId: i, startTime: a, isInitialLoad: s, isReloading: d } = e;
        ((t = new Set(H.H8)),
            (eM = n
                .filter((e) => t.has(e.type))
                .filter(e$)
                .map((e) => {
                    if (e.type === H.Mm.MESSAGE && null != e.data.message_context) {
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
            e1(),
            (ev = { load_id: i, load_time_millis: Date.now() - a, feed_item_ids: eM.map((e) => e.id) }));
        let [r, l] = e3(eM);
        if (((ex = e2(r)), !eO || 0 === eG || s))
            ((eG = 0), !eW && eQ(r, eM) ? ((eL = !0), (eb = !0)) : (eL = !1), e5({ newUnread: r, newRead: l }));
        else {
            eG > 0 && (ej = null);
            let e = ex.length > H.$P;
            (d || (eL = e), e && (ec([...r, ...l], 0, H.w5), r.length + l.length === 0 && (eJ = !0)));
        }
        K.trackFeedLoaded({
            newTrackingProps: ev,
            hasNewContent: eL,
            unreadFeedItems: r,
            readFeedItems: l,
            homeSessionId: eW ? "foreground_load" : "background_load",
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
        ((eJ = !0), (eD = { ...eD }));
        let r = t.reduce((e, t) => ((e[t.message.id] = t), e), {}),
            l = n.reduce((e, t) => ((e[t.id] = t), e), {});
        (i.forEach((e) => {
            let t = r[e.message_id];
            if (null == t) {
                ew[e.message_id] = !0;
                return;
            }
            let n = eC[e.message_id];
            null == n &&
                (n = {
                    id: e.message_id,
                    type: H.Mm.MESSAGE,
                    score: -1,
                    data: {
                        guild_id: t.guild_id,
                        channel_id: t.channel_id,
                        message_id: t.message.id,
                        channel_type: V.rbe.GUILD_TEXT,
                        has_mention: !1,
                    },
                });
            let i = b.A.getMessage(t.channel_id, t.message.id);
            if (null != i) {
                let e = em(t, n);
                eD[t.message.id] = { ...e, message: i };
            } else eD[t.message.id] = em(t, n);
        }),
            a.forEach((e) => {
                let t = l[e.content_id];
                if (null == t) {
                    ew[e.content_id] = !0;
                    return;
                }
                let n = eC[e.content_id];
                if (null == n) {
                    ew[e.content_id] = !0;
                    return;
                }
                eD[t.id] = { ...n, activity: t };
            }),
            s === eH && (eH = d),
            ez.delete((0, es.V)(s, d)));
    },
    LOAD_ICYMI_CUSTOM_SCORES: function (e) {
        let { scores: t } = e;
        for (let e of t)
            for (let t of ((eN[e.guild_id] = e.guild_score),
            e7(e.guild_id, e.guild_score),
            Object.keys(e.custom_channel_scores)))
                (null == ek[e.guild_id] && (ek[e.guild_id] = {}),
                    (ek[e.guild_id][t] = e.custom_channel_scores[t]),
                    e9(t, e.custom_channel_scores[t]));
        ((eN = { ...eN }), (ek = { ...ek }));
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function (e) {
        let { guilds: t } = e;
        ((eV = t.map((e) => (0, F.jE)(e.guild))), e0());
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function (e) {
        let { channelScores: t, guildId: n, guildScore: i } = e;
        (null != i && ((eN[n] = i), e7(n, i), (eN = { ...eN })),
            t?.forEach((e) => {
                let { channelId: t, score: i } = e;
                (null == ek[n] && (ek[n] = {}), (ek[n][t] = i), e9(t, i), (ek = { ...ek }));
            }));
    },
    RELOAD_ICYMI: function () {
        if (0 === eM.length) return !1;
        (e5(), (eL = !1));
    },
    ICYMI_TAB_OPENED: function () {
        ((eO = !0), (eS = Date.now()), eb && ((eb = !1), (eL = !1)), eU < 5 && eU++);
    },
    ICYMI_FEEDBACK_GIVEN: function () {
        eU = 6;
    },
    MESSAGE_REACTION_ADD: e8,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { messageId: t, reactions: n } = e,
            i = eD[t];
        if (null == i || i.type !== H.Mm.MESSAGE) return !1;
        let a = w.default.getId();
        i.message = i.message.addReactionBatch(n, a);
    },
    MESSAGE_REACTION_REMOVE: e8,
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { messageId: t } = e,
            n = eD[t];
        if (null == n || n.type !== H.Mm.MESSAGE) return !1;
        n.message = n.message.set("reactions", []);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { messageId: t, emoji: n } = e,
            i = eD[t];
        if (null == i || i.type !== H.Mm.MESSAGE) return !1;
        i.message = i.message.removeReactionsForEmoji(n);
    },
    CHANNEL_ACK: te,
    MESSAGE_ACK: te,
    ICYMI_JOINED_RECOMMENDED_GUILD: function () {
        eP = Date.now();
    },
    ICYMI_SET_VIDEOS_MUTED: function (e) {
        let { muted: t } = e;
        eB = t;
    },
    ICYMI_SET_REFRESHING: function (e) {
        let { refreshing: t } = e;
        eK = t;
    },
    LOAD_ICYMI_HYDRATED_ATTEMPT: function (e) {
        let { hydrationId: t } = e;
        ez.add(t);
    },
    LOAD_ICYMI_HYDRATED_FAILED: function (e) {
        let { hydrationId: t } = e;
        ez.delete(t);
    },
    ICYMI_SET_FOCUSED_TAB: function (e) {
        let { focused: t } = e;
        eW = t;
    },
    LOAD_ICYMI_CURRENT_STATUS_MEDIA: function (e) {
        let { attachments: t, createdAtMs: n } = e;
        if (null == t || 0 === t.length) {
            eR = null;
            return;
        }
        eR = [n, [...t]];
    },
    ICYMI_SCROLL_EVENT: function (e) {
        let { timestamp: t } = e;
        eX = t;
    },
    ICYMI_TAKE_SURVEY: function (e) {
        let { takenAt: t } = e;
        eq = t;
    },
});
function ti(e) {
    return s.useCallback(async () => {
        (K.trackFeedShown({ variant: e ? "DotShown" : "NoDotShown", homeSessionId: "gravity_refresh" }),
            await ei.A.fetchDehydrated({ isReloading: !0 }),
            await ei.A.reloadICYMITab(),
            await ei.A.getGuildChannelScores(),
            ei.A.getRecommendedGuilds());
    }, [e]);
}
var ta = n(819169);
function ts(e, t, n) {
    switch (t.type) {
        case H.Mm.MESSAGE:
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
        case H.Mm.ACTIVITY:
        case H.Mm.CUSTOM_STATUS:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "contentInventory", content: t.activity },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case H.Mm.GUILD_EVENT:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "guildEvent", eventId: t.event_id },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case H.Mm.RECOMMENDED_GUILDS:
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
let td = 15 * U.A.Millis.MINUTE;
var tr = n(939249),
    tl = n(976860),
    to = n(378570),
    tc = n(402860),
    tu = n(834730),
    tm = n(51183),
    t_ = n(208971),
    tg = n(25101);
function th(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content.extra : null,
        i = n?.type === "custom_status_extra" ? n : null,
        s = (0, t_.G)(i?.status);
    if (null == i) return null;
    let d = {
            id: i.emoji_id?.toString() === "0" ? null : i.emoji_id,
            name: i.emoji_name ?? "",
            animated: i.emoji_animated,
        },
        r = null != d.id || d.name.length > 0,
        l = null != s && s.length > 0;
    return (0, a.jsx)("div", {
        className: tg.kL,
        children: (0, a.jsx)("div", {
            className: tg.Nr,
            children: (0, a.jsxs)("div", {
                className: tg.Qs,
                children: [
                    r &&
                        (0, a.jsx)("div", {
                            className: tg.qq,
                            children: (0, a.jsx)(tm.A, { emoji: d, animate: !0, hideTooltip: !1 }),
                        }),
                    l &&
                        (0, a.jsx)(tu.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            className: tg.qS,
                            children: s,
                        }),
                ],
            }),
        }),
    });
}
var tp = n(429913),
    tf = n(287809),
    tI = n(886072);
function tE(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content : null,
        i = n?.extra,
        s = n?.author_id,
        d = n?.content_type,
        r = i?.type === "played_game_extra" || i?.type === "launched_activity_extra" ? i.application_id : void 0,
        l = (0, tp.h)(r),
        c = (0, o.bG)([tf.default], () => (null != s ? tf.default.getUser(s) : null), [s]),
        u = d === T.ContentInventoryEntryType.TOP_GAME,
        m = l?.getIconURL(240);
    return i?.type !== "played_game_extra" || "contentInventory" !== t.data.kind || null == l || null == c || null == m
        ? null
        : (0, a.jsx)("div", {
              className: tI.kL,
              children: (0, a.jsxs)("div", {
                  className: tI.Nr,
                  children: [
                      (0, a.jsx)("img", { src: m, alt: l.name, className: tI.Gt }),
                      (0, a.jsxs)("div", {
                          className: tI.Vx,
                          children: [
                              (0, a.jsx)(tu.E, { variant: "text-md/semibold", color: "text-strong", children: l.name }),
                              u &&
                                  (0, a.jsx)("div", {
                                      className: tI.qS,
                                      children: (0, a.jsx)(tu.E, {
                                          variant: "text-xs/semibold",
                                          color: "text-brand",
                                          children: ed.intl.string(ed.t["/50eHi"]),
                                      }),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
var ty = n(177953),
    tT = n(47167),
    tA = n(713654),
    tS = n(435328),
    tM = n(563312),
    tx = n(826383),
    tv = n(9448),
    tC = n(974930),
    tD = n(641786);
function tw(e) {
    let { eventId: t } = e,
        n = (0, o.bG)([C.Ay], () => C.Ay.getGuildScheduledEvent(t), [t]),
        i = (0, o.bG)([G.A], () => G.A.getGuild(n?.guild_id), [n]),
        d = (0, o.bG)([N.A], () => N.A.getChannel(n?.channel_id), [n]),
        r = (0, tM.nh)(t, null),
        l = null != n && (0, C.Fd)(n),
        c = null != n ? (0, tC.G3)(n) : null,
        u = (0, tx.A)(n?.guild_id, n?.id, c),
        m = r?.startTime.toISOString(),
        { startDateTimeString: _ } = s.useMemo(
            () =>
                l ? { startDateTimeString: ed.intl.string(ed.t.TxqPQR) } : (0, tC.CC)(m ?? new Date().toISOString()),
            [m, l],
        ),
        g = (0, tT.Ay)(d),
        h = null != n ? (0, tv.oF)(n) : void 0,
        p = null != d ? (0, tA.gU)(d) : null;
    if (null == n || null == i) return null;
    let f = null != n.description && n.description.length > 0;
    return (0, a.jsxs)("div", {
        className: tD.Qo,
        children: [
            (0, a.jsx)("div", {
                className: tD.At,
                children: (0, a.jsx)(tu.E, {
                    variant: "text-sm/semibold",
                    color: l ? "status-positive" : "text-brand",
                    children: _,
                }),
            }),
            (0, a.jsx)(tu.E, { variant: "text-lg/semibold", className: f ? tD.X_ : void 0, children: n.name }),
            f &&
                (0, a.jsx)(tu.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: tD.tj,
                    children: (0, tS.l)(n.description ?? "", !0, { guildId: i.id }),
                }),
            (0, a.jsx)("hr", { className: tD.Yl }),
            (0, a.jsxs)("div", {
                className: tD.oo,
                children: [
                    (0, a.jsxs)("div", {
                        className: tD.ik,
                        children: [
                            (0, a.jsx)(ty.n, { size: "xs", color: "currentColor" }),
                            (0, a.jsx)(tu.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ed.intl.format(ed.t["+DLsD8"], { count: u }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: tD.ik,
                        children: [
                            null != p ? (0, a.jsx)(p, { size: "xs", color: "currentColor" }) : null,
                            (0, a.jsx)(tu.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: tD.HA,
                                children: g ?? (null != h ? (0, tS.y)(h, !0) : null),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var tN = n(837381),
    tk = n(384231),
    tG = n(763754),
    tb = n(491182),
    tL = n(860227),
    tO = n(439762),
    tR = n(699352),
    tj = n(715628),
    tU = n(752636),
    tF = n(3083),
    tY = n(268719),
    tH = n(69282),
    tV = n(862161),
    tP = n(13673);
let tB = s.memo(function (e) {
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
        h = t.type === V.lAJ.POLL_RESULT || (e.disableInteraction ?? !1),
        p = t.isFirstMessageInForumPost(l),
        f = (0, tk.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        {
            content: I,
            hasSpoilerEmbeds: E,
            hasBailedAst: y,
        } = (0, tO.A)(t, {
            hideSimpleEmbedContent: d,
            allowList: p || f,
            allowHeading: p || f,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        T = (0, tN.rm)(t.id),
        A = (0, tG.Ay)(t),
        S = (0, o.bG)(
            [N.A],
            () => t.hasFlag(V.pr7.HAS_THREAD) && N.A.getChannel(X.default.castMessageIdAsChannelId(t.id)),
        ),
        M = (0, tH.Xx)({ guildId: l.guild_id, roleId: A.iconRoleId }),
        x = (0, tL.fF)(t),
        v = (0, tL.ZD)(t);
    return (0, a.jsx)(tb.A, {
        compact: !1,
        className: r()(n, tV.i, { [tP.M1]: (0, D.ec)(t), [tP.XN]: h }),
        disableInteraction: h,
        childrenExecutedCommand: (0, tY.A)(t, l, !1),
        childrenHeader: (0, tU.A)({
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
        childrenAccessories: e.hideAccessories ? void 0 : (0, tR.J)(e, E, y),
        childrenMessageContent: (0, tj.A)(e, I),
        childrenSystemMessage: (0, tF.A)({ ...e, disableInteraction: h }),
        onContextMenu: i,
        onClick: s,
        hasThread: _ && null != S && t.hasFlag(V.pr7.HAS_THREAD),
        hasReply: !1,
        "aria-labelledby": x,
        "aria-describedby": v,
        author: A,
        ...T,
        ...g,
    });
});
function tK(e) {
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
        l = (0, o.bG)([G.A], () => (r?.guild_id != null ? G.A.getGuild(r.guild_id) : null), [r]),
        c = (0, o.yK)(
            [tn, b.A],
            () => (null == n ? [] : i.map((e) => tn.getMessage(e) ?? b.A.getMessage(n, e)).filter((e) => null != e)),
            [n, i],
        );
    return null == r || null == l || 0 === c.length
        ? null
        : (0, a.jsxs)("div", {
              className: tD.kL,
              children: [
                  null != d
                      ? (0, a.jsx)("div", {
                            className: tD.gn,
                            children: (0, a.jsx)("div", { className: tD.DD, children: d }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: tD.MJ,
                      children: c.map((e) =>
                          (0, a.jsx)(
                              tB,
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
function tz(e) {
    let { item: t } = e;
    switch (t.data.kind) {
        case "guildEvent":
            return (0, a.jsx)(tw, { eventId: t.data.eventId });
        case "message":
        case "forumThread":
            return (0, a.jsx)(tK, { item: t });
        case "contentInventory":
            switch (t.data.content.content_type) {
                case T.ContentInventoryEntryType.CUSTOM_STATUS:
                    return (0, a.jsx)(th, { item: t });
                case T.ContentInventoryEntryType.PLAYED_GAME:
                case T.ContentInventoryEntryType.TOP_GAME:
                    return (0, a.jsx)(tE, { item: t });
                default:
                    return (0, a.jsx)("div", { children: "Unsupported content inventory type" });
            }
        default:
            return (0, a.jsx)("div", { children: "Unknown item type" });
    }
}
var tW = n(548118),
    tJ = n(995273),
    tX = n(668499);
function tq(e) {
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
                    return X.default.extractTimestamp(t.data.message.id);
                case "guildEvent":
                    return X.default.extractTimestamp(t.data.eventId);
                default:
                    return t.timestamp;
            }
        }, [t]),
        c = (0, o.bG)([N.A], () => N.A.getChannel(i), [i]),
        u = (0, tT.Ay)(c),
        m = c?.guild_id ?? d,
        _ = (0, o.bG)([G.A], () => (null != m ? G.A.getGuild(m) : null), [m]),
        g = (0, o.bG)([tf.default], () => (null != r ? tf.default.getUser(r) : null), [r]);
    return "unknown" === n
        ? null
        : (0, a.jsx)("div", {
              className: tX.kL,
              children: (0, a.jsxs)("div", {
                  className: tX.wx,
                  children: [
                      (function () {
                          if ("guild" === n && null != _)
                              return (0, a.jsx)(tW.Ay, {
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
                              return (0, a.jsx)("img", { src: e, alt: g.username, className: tX.my });
                          }
                          return null;
                      })(),
                      (0, a.jsxs)("div", {
                          className: tX.Se,
                          children: [
                              (0, a.jsx)("div", {
                                  className: tX.$,
                                  children: (0, a.jsxs)("div", {
                                      className: tX.gH,
                                      children: [
                                          "guild" === n && null != _
                                              ? (0, a.jsx)(tu.E, {
                                                    variant: "text-md/semibold",
                                                    color: "text-strong",
                                                    className: tX.DD,
                                                    children: _.name,
                                                })
                                              : "user" === n && null != g
                                                ? (0, a.jsx)(tu.E, {
                                                      variant: "text-md/semibold",
                                                      color: "text-strong",
                                                      className: tX.DD,
                                                      children: g.username,
                                                  })
                                                : null,
                                          (0, a.jsx)(tu.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              className: tX.vE,
                                              children: (0, tJ.jb)(l),
                                          }),
                                      ],
                                  }),
                              }),
                              (function () {
                                  let e = (function () {
                                      switch (t.data.kind) {
                                          case "message":
                                              if (t.channelType === V.rbe.GUILD_ANNOUNCEMENT)
                                                  return ed.intl.string(ed.t["8P08G9"]);
                                              return ed.intl.string(ed.t.hMFMY9);
                                          case "guildEvent":
                                              return ed.intl.string(ed.t["6pFsLQ"]);
                                          case "forumThread":
                                              return ed.intl.string(ed.t.bYNuVx);
                                          case "contentInventory":
                                              switch (t.data.content.content_type) {
                                                  case T.ContentInventoryEntryType.CUSTOM_STATUS:
                                                      return ed.intl.string(ed.t.fxOLPR);
                                                  case T.ContentInventoryEntryType.TOP_GAME:
                                                  case T.ContentInventoryEntryType.PLAYED_GAME:
                                                      return ed.intl.string(ed.t.ktOTRQ);
                                                  default:
                                                      return `${t.data.content.content_type}`;
                                              }
                                          default:
                                              return "";
                                      }
                                  })();
                                  if ("user" === n)
                                      return (0, a.jsx)("div", {
                                          className: tX.VA,
                                          children: (0, a.jsx)(tu.E, {
                                              variant: "text-sm/medium",
                                              color: "text-subtle",
                                              tag: "span",
                                              className: tX.o4,
                                              children: e,
                                          }),
                                      });
                                  if (null != c && null != e) {
                                      let t = (0, tA.gU)(c, _);
                                      return (0, a.jsxs)("div", {
                                          className: tX.VA,
                                          children: [
                                              (0, a.jsx)(tu.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: tX.o4,
                                                  children: e,
                                              }),
                                              (0, a.jsx)(tu.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: tX.o4,
                                                  children: ed.intl.string(ed.t.CHUAYk),
                                              }),
                                              (0, a.jsxs)(tu.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: tX.o4,
                                                  children: [
                                                      null != t &&
                                                          (0, a.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: tX.p,
                                                          }),
                                                      u,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, a.jsx)("div", {
                                            className: tX.VA,
                                            children: (0, a.jsx)(tu.E, {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                tag: "span",
                                                className: tX.o4,
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
var tQ = n(301690);
function t$(e) {
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
                            (0, to.ci)(t.data.message.channel_id, t.data.message.id);
                            break;
                        case "guildEvent": {
                            let e = C.Ay.getGuildScheduledEvent(t.data.eventId);
                            null != e && (0, tl.pX)(V.BVt.GUILD_EVENT_DETAILS(e.guild_id, e.id));
                            break;
                        }
                        case "forumThread":
                            (0, to.ci)(t.data.threadChannel.id, t.data.message.id);
                            break;
                        case "contentInventory":
                            (0, tc.openUserProfileModal)({ userId: t.data.content.author_id });
                    }
            },
            [t],
        );
    return (0, a.jsxs)(tr.D, {
        className: tQ.k,
        onClick: n,
        children: [
            (0, a.jsx)(tq, { item: t }),
            (0, a.jsx)("div", { className: tQ.o, children: (0, a.jsx)(tz, { item: t }) }),
        ],
    });
}
var tZ = n(710028);
let t0 = function (e) {
    let t,
        n,
        i,
        d,
        r,
        { scrollContainerRef: l } = e,
        c = (0, o.bG)([tn], () => tn.notificationItem(), []),
        { showDot: u } = { value: 0, showDot: (0, o.bG)([tn], () => tn.hasNewContent(), []) },
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
                    let e = (0, o.bG)([tn], () => tn.getUnreadDisplayItems()),
                        t = (0, o.bG)([tn], () => tn.getReadDisplayItems()),
                        n = (0, o.bG)([tn], () => tn.getNextIndexToHydrate()),
                        i = (0, o.cf)([tn], () => tn.getHydratedItems()),
                        a = (0, o.bG)([tn], () => tn.getMissingItems());
                    s.useEffect(() => {
                        let e = Date.now() + t.length;
                        ei.A.ackGravityItems(t.map((t) => ({ id: t.id, timestamp: e-- }), !0));
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
                                n.type === H.Mm.MESSAGE &&
                                n.data.message_context?.reference_message_id != null &&
                                (s = i[n.data.message_id]),
                            null != s)
                        ) {
                            let e = ts(n, s, !0);
                            null != e && d.push(e);
                        }
                    }
                    for (let e = 0; e < t.length && !(l >= n); e++) {
                        let n = t[e];
                        if ((l++, a[n.id])) continue;
                        let s = i[n.id];
                        if (
                            (null == s &&
                                n.type === H.Mm.MESSAGE &&
                                n.data.message_context?.reference_message_id != null &&
                                (s = i[n.data.message_id]),
                            null != s)
                        ) {
                            let e = ts(n, s, !1);
                            null != e && r.push(e);
                        }
                    }
                    return { unreadItems: d, readItems: r, allUnreadItemsHydrated: n >= e.length };
                })(),
                c = (0, o.bG)([tn], () => tn.getVersion(), []),
                u = (0, o.bG)([tn], () => !(tn.isFirstPageHydrated() && c > 0));
            s.useEffect(() => {
                null != tn.getLoadId() && K.trackFeedShown({ homeSessionId: "gravity" });
            }, [c]);
            let m = (0, o.bG)([tn], () => tn.isRefreshing(), []),
                _ = (0, o.bG)([tn], () => tn.isHydrating(), []),
                [g, h] = s.useState([]),
                { loadId: p, lastScrollEventTimestamp: f } = (0, o.cf)([tn], () => ({
                    loadId: tn.getLoadId(),
                    lastScrollEventTimestamp: tn.lastScrollEvent(),
                })),
                I = g
                    .filter((e) => {
                        let { item: t } = e;
                        return !ea.has(t.data.kind);
                    })
                    .map((e) => {
                        let { item: t } = e;
                        return t.id;
                    })
                    .pop(),
                E = (0, ta.A)(I);
            s.useEffect(() => {
                if (m || u || null == E || null == I || I === E) return;
                let e = Date.now();
                e - f > td && (ei.A.gravityScrollEvent(e), K.trackFeedFirstScrollStarted());
            }, [m, f, E, I, p, u]);
            let y = s.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if ((t.some((e) => "end" === e.item.data.kind) && a(!0), 0 === t.length)) return;
                        h(t);
                        let n = [],
                            i = eg(t),
                            s = Date.now();
                        for (let e = i.length - 1; e >= 0; e--) {
                            let t = i[e];
                            null != t && n.push({ id: t.id, type: (0, H.xG)(t), timestamp: s++ });
                        }
                        (n.length > 0 && ei.A.ackGravityItems(n, !0),
                            K.trackItemShortImpression(
                                t,
                                i.map((e) => ({ id: e.id, type: (0, H.xG)(e) })),
                                c,
                            ));
                    },
                    [c, a],
                ),
                T = s.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if (0 === t.length) return;
                        let n = eg(t);
                        (K.trackItemLongImpression(
                            t,
                            n.map((e) => ({ id: e.id, type: (0, H.xG)(e) })),
                            c,
                        ),
                            ei.A.triggerItemsLongImpression(
                                t
                                    .filter((e) => {
                                        let { item: t } = e;
                                        return !ea.has(t.data.kind);
                                    })
                                    .map((e) => {
                                        let { item: t, index: n } = e;
                                        return {
                                            itemId: t.id,
                                            itemType: ep(t),
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
                    ei.A.startItemsDwell(
                        t
                            .filter((e) => {
                                let { item: t } = e;
                                return !ea.has(t.data.kind);
                            })
                            .map((e) => {
                                let { item: t, index: n } = e;
                                return {
                                    itemId: t.id,
                                    itemType: ep(t),
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
                ei.A.openICYMITab();
            }, []);
            let M = ti(t),
                { data: x, stickyHeaderIndices: v } = s.useMemo(() => {
                    let e = [];
                    return (
                        u &&
                            null != n &&
                            n.type === H.Mm.CUSTOM_STATUS &&
                            e.push({
                                id: n.id,
                                timestamp: Date.now(),
                                data: { kind: "contentInventory", content: e_(n).activity },
                                score: n.score,
                                unread: !0,
                            }),
                        u
                            ? e.push({ id: "loading", timestamp: 0, unread: !1, data: { kind: "loading" } })
                            : (d.forEach((t) => {
                                  eh(t) || e.push(t);
                              }),
                              l && e.push({ id: "end", timestamp: 0, unread: !1, data: { kind: "end" } }),
                              r.length > 0 &&
                                  r.forEach((t) => {
                                      eh(t) || e.push(t);
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
        y = ti();
    s.useEffect(
        () => () => {
            y();
        },
        [y],
    );
    let T = (0, o.bG)([tn], () => tn.hasNewContent(), []),
        A = (0, o.bG)([tn], () => tn.isHydrating(), []),
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
                eu().finally(() => {
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
                              { ref: (t) => M(e.id, t), "data-item-id": e.id, children: (0, a.jsx)(t$, { item: e }) },
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
              className: tZ.k,
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
                      className: tZ.j,
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
var t1 = n(534515),
    t5 = n(999900);
let t3 = (0, g.A)(function (e) {
    let { width: t } = e,
        n = (0, y.c)("ICYMIPage");
    (s.useEffect(() => {
        n || (0, l.pX)(V.BVt.ME);
    }, [n]),
        s.useLayoutEffect(() => {
            n && _.I(V.BVt.ICYMI);
        }, [n]),
        (0, h.Ay)(() => {
            n && (0, I.d0)("icymi");
        }));
    let i = (0, o.bG)([E.A], () => E.A.theme),
        d = (0, o.bG)([tn], () => tn.isRefreshing()),
        g = s.useRef(null);
    (0, p.HU)({ location: ed.intl.string(ed.t["jnXV/V"]) });
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
    let S = ti(),
        M = y.f8.useConfig({ location: "icymi page" }).enabled,
        x = s.useCallback(
            async (e) => {
                e.metaKey && M ? await ef(V.ZSU.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON) : await S();
            },
            [S, M],
        ),
        v = T && M ? ed.intl.string(ed.t.YplSn2) : ed.intl.string(ed.t.wzzjk9);
    return n
        ? (0, a.jsxs)("div", {
              className: r()(t5.TE, t1.kL),
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
                                  (0, a.jsx)(f.A.Title, { children: ed.intl.string(ed.t["jnXV/V"]) }),
                                  (0, a.jsx)(f.A.Title, {
                                      children: (0, a.jsx)("p", {
                                          className: t1.HH,
                                          children: ed.intl.string(ed.t.Ac2OZA),
                                      }),
                                  }),
                              ],
                          }),
                  }),
                  (0, a.jsx)("div", {
                      ref: g,
                      className: r()(t5.Qs, t1.Qs),
                      children: (0, a.jsx)(t0, { scrollContainerRef: g }),
                  }),
              ],
          })
        : null;
});
