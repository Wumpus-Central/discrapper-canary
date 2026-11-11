(n.r(t), n.d(t, { default: () => eR }));
var i = n(477900),
    a = n(582128),
    s = n(503698),
    r = n.n(s),
    d = n(877227),
    l = n(855986),
    o = n(43990),
    c = n(663417),
    u = n(768622),
    m = n(944791),
    _ = n(456412),
    g = n(964486),
    h = n(726249),
    p = n(742589),
    y = n(210714),
    I = n(413599),
    A = n(335934),
    f = n(883344),
    v = n(4106),
    x = n(681154),
    E = n(129230),
    T = n(435713),
    b = n(652215);
function k(e) {
    switch (e.data.kind) {
        case "end":
            return "end";
        case "loading":
            return "loading";
        case "message":
            if (e.channelType === b.rbe.GUILD_ANNOUNCEMENT) return "announcement";
            return "message";
        case "guildEvent":
            return "guild_event";
        case "contentInventory":
            if (e.data.content.content_type === x.ContentInventoryEntryType.CUSTOM_STATUS)
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
let w = {
    trackItemInteraction(e) {
        E.default.track(b.HAw.FEED_ITEM_INTERACTED, {
            load_id: f.A.getLoadId(),
            feed_item_type: e.type,
            feed_item_id: e.id,
            home_session_id: "gravity",
            action_type: e.actionType,
            feed_item_index: f.A.getIndexInHydratedFeed(e.id),
            icymi_session_id: e.icymiSessionId,
            impression_id: e.impressionId,
            ux_variation: e.uxVariation,
            session_interaction_index: e.sessionInteractionIndex,
        });
    },
    trackItemShortImpression(e, t, n) {
        E.default.track(b.HAw.FEED_ITEM_SEEN_BATCH, {
            load_id: f.A.getLoadId(),
            home_session_id: "gravity",
            feed_item_ids: e.map((e) => {
                let { item: t } = e;
                return (0, T.t)(t);
            }),
            feed_item_types: e.map((e) => k(e.item)),
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
        E.default.track(b.HAw.FEED_ITEM_SEEN_LONG, {
            load_id: f.A.getLoadId(),
            home_session_id: "gravity",
            feed_item_ids: e.map((e) => {
                let { item: t } = e;
                return (0, T.t)(t);
            }),
            feed_item_types: e.map((e) => k(e.item)),
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
        E.default.track(b.HAw.FEED_SHOWN, {
            load_id: f.A.getLoadId(),
            home_session_id: e.homeSessionId,
            variant: e.variant,
        });
    },
    trackFeedFirstScrollStarted() {
        E.default.track(b.HAw.HOME_FIRST_SCROLL_STARTED, { load_id: f.A.getLoadId(), home_session_id: "gravity" });
    },
    trackFeedFeedbackPromptViewed() {
        E.default.track(b.HAw.HOME_FEEDBACK_PROMPT_VIEWED);
    },
    trackFeedFeedbackSubmitted(e) {
        E.default.track(b.HAw.HOME_FEEDBACK_SUBMITTED, { load_id: f.A.getLoadId(), home_session_id: "gravity", ...e });
    },
    trackFeedOnboardingScreenSkipped(e) {
        E.default.track(b.HAw.ICYMI_ONBOARDING_SCREEN_SKIPPED, { location: e.location });
    },
    trackFeedOnboardingGuildToggled(e) {
        E.default.track(b.HAw.ICYMI_ONBOARDING_GUILD_TOGGLED, { guild_id: e.guildId, toggled: e.toggled });
    },
    trackFeedOnboardingCategoryToggled(e) {
        E.default.track(b.HAw.ICYMI_ONBOARDING_CATEGORY_TOGGLED, { category_id: e.categoryId, toggled: e.toggled });
    },
    trackFeedEmptyLoadingSeen() {
        E.default.track(b.HAw.ICYMI_FEED_EMPTY_LOADING_SEEN, { load_id: f.A.getLoadId(), version: f.A.getVersion() });
    },
    trackFeedEmptyLoadingComplete(e) {
        E.default.track(b.HAw.ICYMI_FEED_EMPTY_LOADING_COMPLETE, {
            load_id: f.A.getLoadId(),
            dwell_time_ms: e.dwellTimeMs,
            version: f.A.getVersion(),
        });
    },
    trackFeedEmptyLoadingAbandoned(e) {
        E.default.track(b.HAw.ICYMI_FEED_EMPTY_LOADING_ABANDONED, {
            load_id: f.A.getLoadId(),
            dwell_time_ms: e.dwellTimeMs,
            version: f.A.getVersion(),
        });
    },
    trackFeedSessionStarted(e) {
        E.default.track(b.HAw.FEED_SESSION_STARTED, {
            load_id: f.A.getLoadId(),
            version: f.A.getVersion(),
            session_start_time_ms: e.sessionStartTimeMs,
            icymi_session_id: e.icymiSessionId,
            previous_icymi_session_count: e.previousIcymiSessionCount,
            ux_variation: e.uxVariation,
        });
    },
    trackFeedSessionCompleted(e) {
        E.default.track(b.HAw.FEED_SESSION_COMPLETED, {
            load_id: f.A.getLoadId(),
            version: f.A.getVersion(),
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
        E.default.track(b.HAw.FEED_ITEM_1S_DWELLED, {
            load_id: f.A.getLoadId(),
            version: f.A.getVersion(),
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
        E.default.track(b.HAw.FEED_ITEM_DWELLED, {
            load_id: f.A.getLoadId(),
            version: f.A.getVersion(),
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
        E.default.track(b.HAw.FEED_ITEM_ACTIONED, {
            load_id: f.A.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: f.A.getVersion(),
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
        E.default.track(b.HAw.FEED_FILTER_ACTIONED, {
            load_id: f.A.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: f.A.getVersion(),
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
        E.default.track(b.HAw.FEED_PAGE_ACTIONED, {
            load_id: f.A.getLoadId(),
            icymi_session_id: e.icymiSessionId,
            ux_variation: e.uxVariation,
            version: f.A.getVersion(),
            session_action_index: e.sessionActionIndex,
            action_gesture_type: e.actionParameters.actionGestureType,
            action_target_element: e.actionParameters.actionTargetElement,
            action_intent_type: e.actionParameters.actionIntentType,
            action_destination_type: e.actionParameters.actionDestinationType,
        });
    },
};
function S(e) {
    return a.useCallback(async () => {
        (w.trackFeedShown({ variant: e ? "DotShown" : "NoDotShown", homeSessionId: "gravity_refresh" }),
            await v.A.fetchDehydrated({ isReloading: !0 }),
            await v.A.reloadICYMITab(),
            await v.A.getGuildChannelScores(),
            v.A.getRecommendedGuilds());
    }, [e]);
}
var C = n(596344);
let N = new Set(["end", "loading", "bottomLoading", "icymiHeader", "recommendedGuilds"]);
var M = n(596720),
    j = n(859524);
function D(e) {
    let t = f.A.getUnreadDisplayItems(),
        n = f.A.getReadDisplayItems(),
        i = [...t, ...n],
        a = null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (null != n && !N.has(n.item.data.kind)) {
            a = n.item.id;
            break;
        }
    }
    if (null == a) return [];
    let s = i.findIndex((e) => e.id === a);
    return s < 0 ? [] : i.slice(0, s + 1);
}
n(321073);
var G = n(819169),
    L = n(841643);
function F(e, t, n, i, a) {
    switch (t.type) {
        case M.Mm.MESSAGE:
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
        case M.Mm.ACTIVITY:
        case M.Mm.CUSTOM_STATUS:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "contentInventory", content: t.activity },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case M.Mm.GUILD_EVENT:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "guildEvent", eventId: t.event_id },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case M.Mm.RECOMMENDED_GUILDS:
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "recommendedGuilds" },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        case M.Mm.DISCOVER_ITEM:
            if (!i || a?.(t.card) === !1) return null;
            return {
                id: e.id,
                timestamp: Date.now(),
                data: { kind: "waterwheelsItem", card: t.card, brokerPosition: t.brokerPosition },
                score: e.score,
                debugScore: JSON.stringify(e.score_components),
                unread: n,
            };
        default:
            return null;
    }
}
let O = 15 * n(927813).A.Millis.MINUTE;
function H(e) {
    return e.flatMap((e) => {
        let t = (0, T.v)(e);
        return null == t ? [] : [{ id: t, type: (0, M.xG)(e) }];
    });
}
var P = n(939249),
    V = n(698441),
    R = n(976860),
    U = n(378570),
    Y = n(702476),
    B = n(834730),
    q = n(51183),
    J = n(208971),
    z = n(25101);
function Q(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content.extra : null,
        a = n?.type === "custom_status_extra" ? n : null,
        s = (0, J.G)(a?.status);
    if (null == a) return null;
    let r = {
            id: a.emoji_id?.toString() === "0" ? null : a.emoji_id,
            name: a.emoji_name ?? "",
            animated: a.emoji_animated,
        },
        d = null != r.id || r.name.length > 0,
        l = null != s && s.length > 0;
    return (0, i.jsx)("div", {
        className: z.kL,
        children: (0, i.jsx)("div", {
            className: z.Nr,
            children: (0, i.jsxs)("div", {
                className: z.Qs,
                children: [
                    d &&
                        (0, i.jsx)("div", {
                            className: z.qq,
                            children: (0, i.jsx)(q.A, { emoji: r, animate: !0, hideTooltip: !1 }),
                        }),
                    l &&
                        (0, i.jsx)(B.E, {
                            variant: "body-md/normal",
                            color: "text-strong",
                            className: z.qS,
                            children: s,
                        }),
                ],
            }),
        }),
    });
}
var W = n(429913),
    X = n(287809),
    K = n(792996),
    Z = n(886072);
function $(e) {
    let { item: t } = e,
        n = "contentInventory" === t.data.kind ? t.data.content : null,
        a = n?.extra,
        s = n?.author_id,
        r = n?.content_type,
        d = a?.type === "played_game_extra" || a?.type === "launched_activity_extra" ? a.application_id : void 0,
        o = (0, W.h)(d),
        c = (0, l.bG)([X.default], () => (null != s ? X.default.getUser(s) : null), [s]),
        u = r === x.ContentInventoryEntryType.TOP_GAME,
        m = o?.getIconURL(240);
    return a?.type !== "played_game_extra" || "contentInventory" !== t.data.kind || null == o || null == c || null == m
        ? null
        : (0, i.jsx)("div", {
              className: Z.kL,
              children: (0, i.jsxs)("div", {
                  className: Z.Nr,
                  children: [
                      (0, i.jsx)("img", { src: m, alt: o.name, className: Z.Gt }),
                      (0, i.jsxs)("div", {
                          className: Z.Vx,
                          children: [
                              (0, i.jsx)(B.E, { variant: "body-md/semibold", color: "text-strong", children: o.name }),
                              u &&
                                  (0, i.jsx)("div", {
                                      className: Z.qS,
                                      children: (0, i.jsx)(B.E, {
                                          variant: "body-xs/semibold",
                                          color: "text-brand",
                                          children: K.intl.string(K.t["/50eHi"]),
                                      }),
                                  }),
                          ],
                      }),
                  ],
              }),
          });
}
var ee = n(177953),
    et = n(47167),
    en = n(713654),
    ei = n(435328),
    ea = n(563312),
    es = n(826383),
    er = n(9448),
    ed = n(974930),
    el = n(734057),
    eo = n(71393),
    ec = n(641786);
function eu(e) {
    let { eventId: t } = e,
        n = (0, l.bG)([V.Ay], () => V.Ay.getGuildScheduledEvent(t), [t]),
        s = (0, l.bG)([eo.A], () => eo.A.getGuild(n?.guild_id), [n]),
        r = (0, l.bG)([el.A], () => el.A.getChannel(n?.channel_id), [n]),
        d = (0, ea.nh)(t, null),
        o = null != n && (0, V.Fd)(n),
        c = null != n ? (0, ed.G3)(n) : null,
        u = (0, es.A)(n?.guild_id, n?.id, c),
        m = d?.startTime.toISOString(),
        { startDateTimeString: _ } = a.useMemo(
            () => (o ? { startDateTimeString: K.intl.string(K.t.TxqPQR) } : (0, ed.CC)(m ?? new Date().toISOString())),
            [m, o],
        ),
        g = (0, et.Ay)(r),
        h = null != n ? (0, er.oF)(n) : void 0,
        p = null != r ? (0, en.gU)(r) : null;
    if (null == n || null == s) return null;
    let y = null != n.description && n.description.length > 0;
    return (0, i.jsxs)("div", {
        className: ec.Qo,
        children: [
            (0, i.jsx)("div", {
                className: ec.At,
                children: (0, i.jsx)(B.E, {
                    variant: "body-sm/semibold",
                    color: o ? "status-positive" : "text-brand",
                    children: _,
                }),
            }),
            (0, i.jsx)(B.E, { variant: "body-lg/semibold", className: y ? ec.X_ : void 0, children: n.name }),
            y &&
                (0, i.jsx)(B.E, {
                    variant: "body-md/normal",
                    color: "text-subtle",
                    className: ec.tj,
                    children: (0, ei.l)(n.description ?? "", !0, { guildId: s.id }),
                }),
            (0, i.jsx)("hr", { className: ec.Yl }),
            (0, i.jsxs)("div", {
                className: ec.oo,
                children: [
                    (0, i.jsxs)("div", {
                        className: ec.ik,
                        children: [
                            (0, i.jsx)(ee.GroupIcon, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)(B.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: K.intl.format(K.t["+DLsD8"], { count: u }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: ec.ik,
                        children: [
                            null != p ? (0, i.jsx)(p, { size: "xs", color: "currentColor" }) : null,
                            (0, i.jsx)(B.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                className: ec.HA,
                                children: g ?? (null != h ? (0, ei.y)(h, !0) : null),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var em = n(837381),
    e_ = n(384231),
    eg = n(432005),
    eh = n(763754),
    ep = n(491182),
    ey = n(860227),
    eI = n(538355),
    eA = n(699352),
    ef = n(715628),
    ev = n(752636),
    ex = n(117096),
    eE = n(268719),
    eT = n(69282),
    eb = n(811091),
    ek = n(862161),
    ew = n(13673);
let eS = a.memo(function (e) {
    let {
            message: t,
            className: n,
            onContextMenu: a,
            onClick: s,
            hideSimpleEmbedContent: d = !0,
            channel: o,
            isGroupStart: c,
            animateAvatar: u,
            subscribeToComponentDispatch: m,
            renderThreadAccessory: _,
            ...g
        } = e,
        h = t.type === b.lAJ.POLL_RESULT || (e.disableInteraction ?? !1),
        p = t.isFirstMessageInForumPost(o),
        y = (0, e_.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        {
            content: I,
            hasSpoilerEmbeds: A,
            hasBailedAst: f,
        } = (0, eI.A)(t, {
            hideSimpleEmbedContent: d,
            allowList: p || y,
            allowHeading: p || y,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        v = (0, em.rm)(t.id),
        x = (0, eh.Ay)(t),
        E = (0, l.bG)(
            [el.A],
            () => t.hasFlag(b.pr7.HAS_THREAD) && el.A.getChannel(eb.default.castMessageIdAsChannelId(t.id)),
        ),
        T = (0, eT.Xx)({ guildId: o.guild_id, roleId: x.iconRoleId }),
        k = (0, ey.fF)(t),
        w = (0, ey.ZD)(t);
    return (0, i.jsx)(ep.A, {
        compact: !1,
        className: r()(n, ek.i, { [ew.M1]: (0, eg.ec)(t), [ew.XN]: h }),
        disableInteraction: h,
        childrenExecutedCommand: (0, eE.A)(t, o, !1),
        childrenHeader: (0, ev.A)({
            message: t,
            channel: o,
            author: x,
            guildId: o.guild_id,
            compact: !1,
            animateAvatar: u,
            isGroupStart: !0,
            roleIcon: T,
            hideTimestamp: !0,
            hideGuildTag: !1,
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, eA.J)(e, A, f),
        childrenMessageContent: (0, ef.A)(e, I),
        childrenSystemMessage: (0, ex.A)({ ...e, disableInteraction: h }),
        onContextMenu: a,
        onClick: s,
        hasThread: _ && null != E && t.hasFlag(b.pr7.HAS_THREAD),
        hasReply: !1,
        "aria-labelledby": k,
        "aria-describedby": w,
        author: x,
        ...v,
        ...g,
    });
});
function eC(e) {
    let { item: t } = e,
        {
            channelId: n,
            messageIds: s,
            title: r,
        } = a.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                    return { channelId: t.data.message.channel_id, messageIds: [t.data.message.id], title: void 0 };
                case "forumThread":
                    return { channelId: t.data.threadChannel.id, messageIds: [t.data.message.id], title: void 0 };
                default:
                    return { channelId: void 0, messageIds: [], title: void 0 };
            }
        }, [t]),
        d = (0, l.bG)([el.A], () => (null != n ? el.A.getChannel(n) : null), [n]),
        o = (0, l.bG)([eo.A], () => (d?.guild_id != null ? eo.A.getGuild(d.guild_id) : null), [d]),
        c = (0, l.yK)(
            [f.A, C.A],
            () => (null == n ? [] : s.map((e) => f.A.getMessage(e) ?? C.A.getMessage(n, e)).filter((e) => null != e)),
            [n, s],
        );
    return null == d || null == o || 0 === c.length
        ? null
        : (0, i.jsxs)("div", {
              className: ec.kL,
              children: [
                  null != r
                      ? (0, i.jsx)("div", {
                            className: ec.gn,
                            children: (0, i.jsx)("div", { className: ec.DD, children: r }),
                        })
                      : null,
                  (0, i.jsx)("div", {
                      className: ec.MJ,
                      children: c.map((e) =>
                          (0, i.jsx)(
                              eS,
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
function eN(e) {
    let { item: t } = e;
    switch (t.data.kind) {
        case "guildEvent":
            return (0, i.jsx)(eu, { eventId: t.data.eventId });
        case "message":
        case "forumThread":
            return (0, i.jsx)(eC, { item: t });
        case "contentInventory":
            switch (t.data.content.content_type) {
                case x.ContentInventoryEntryType.CUSTOM_STATUS:
                    return (0, i.jsx)(Q, { item: t });
                case x.ContentInventoryEntryType.PLAYED_GAME:
                case x.ContentInventoryEntryType.TOP_GAME:
                    return (0, i.jsx)($, { item: t });
                default:
                    return (0, i.jsx)("div", { children: "Unsupported content inventory type" });
            }
        default:
            return (0, i.jsx)("div", { children: "Unknown item type" });
    }
}
var eM = n(682163),
    ej = n(995273),
    eD = n(668499);
function eG(e) {
    let { item: t } = e,
        n = a.useMemo(() => {
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
        s = a.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                    return t.data.message.channel_id;
                case "forumThread":
                    return t.data.threadChannel.id;
                default:
                    return;
            }
        }, [t]),
        r = a.useMemo(() => {
            if ("guildEvent" === t.data.kind) {
                let e = V.Ay.getGuildScheduledEvent(t.data.eventId);
                return e?.guild_id;
            }
        }, [t]),
        d = a.useMemo(() => {
            if ("contentInventory" === t.data.kind) return t.data.content.author_id;
        }, [t]),
        o = a.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                case "forumThread":
                    return eb.default.extractTimestamp(t.data.message.id);
                case "guildEvent":
                    return eb.default.extractTimestamp(t.data.eventId);
                default:
                    return t.timestamp;
            }
        }, [t]),
        c = (0, l.bG)([el.A], () => el.A.getChannel(s), [s]),
        u = (0, et.Ay)(c),
        m = c?.guild_id ?? r,
        _ = (0, l.bG)([eo.A], () => (null != m ? eo.A.getGuild(m) : null), [m]),
        g = (0, l.bG)([X.default], () => (null != d ? X.default.getUser(d) : null), [d]);
    return "unknown" === n
        ? null
        : (0, i.jsx)("div", {
              className: eD.kL,
              children: (0, i.jsxs)("div", {
                  className: eD.wx,
                  children: [
                      (function () {
                          if ("guild" === n && null != _)
                              return (0, i.jsx)(eM.Ay, {
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
                              return (0, i.jsx)("img", { src: e, alt: g.username, className: eD.my });
                          }
                          return null;
                      })(),
                      (0, i.jsxs)("div", {
                          className: eD.Se,
                          children: [
                              (0, i.jsx)("div", {
                                  className: eD.$,
                                  children: (0, i.jsxs)("div", {
                                      className: eD.gH,
                                      children: [
                                          "guild" === n && null != _
                                              ? (0, i.jsx)(B.E, {
                                                    variant: "body-md/semibold",
                                                    color: "text-strong",
                                                    className: eD.DD,
                                                    children: _.name,
                                                })
                                              : "user" === n && null != g
                                                ? (0, i.jsx)(B.E, {
                                                      variant: "body-md/semibold",
                                                      color: "text-strong",
                                                      className: eD.DD,
                                                      children: g.username,
                                                  })
                                                : null,
                                          (0, i.jsx)(B.E, {
                                              variant: "body-xs/normal",
                                              color: "text-muted",
                                              className: eD.vE,
                                              children: (0, ej.jb)(o),
                                          }),
                                      ],
                                  }),
                              }),
                              (function () {
                                  let e = (function () {
                                      switch (t.data.kind) {
                                          case "message":
                                              if (t.channelType === b.rbe.GUILD_ANNOUNCEMENT)
                                                  return K.intl.string(K.t["8P08G9"]);
                                              return K.intl.string(K.t.hMFMY9);
                                          case "guildEvent":
                                              return K.intl.string(K.t["6pFsLQ"]);
                                          case "forumThread":
                                              return K.intl.string(K.t.bYNuVx);
                                          case "contentInventory":
                                              switch (t.data.content.content_type) {
                                                  case x.ContentInventoryEntryType.CUSTOM_STATUS:
                                                      return K.intl.string(K.t.fxOLPR);
                                                  case x.ContentInventoryEntryType.TOP_GAME:
                                                  case x.ContentInventoryEntryType.PLAYED_GAME:
                                                      return K.intl.string(K.t.ktOTRQ);
                                                  default:
                                                      return `${t.data.content.content_type}`;
                                              }
                                          default:
                                              return "";
                                      }
                                  })();
                                  if ("user" === n)
                                      return (0, i.jsx)("div", {
                                          className: eD.VA,
                                          children: (0, i.jsx)(B.E, {
                                              variant: "body-sm/medium",
                                              color: "text-subtle",
                                              tag: "span",
                                              className: eD.o4,
                                              children: e,
                                          }),
                                      });
                                  if (null != c && null != e) {
                                      let t = (0, en.gU)(c, _);
                                      return (0, i.jsxs)("div", {
                                          className: eD.VA,
                                          children: [
                                              (0, i.jsx)(B.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: eD.o4,
                                                  children: e,
                                              }),
                                              (0, i.jsx)(B.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: eD.o4,
                                                  children: K.intl.string(K.t.CHUAYk),
                                              }),
                                              (0, i.jsxs)(B.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-subtle",
                                                  tag: "span",
                                                  className: eD.o4,
                                                  children: [
                                                      null != t &&
                                                          (0, i.jsx)(t, {
                                                              size: "custom",
                                                              width: 16,
                                                              height: 16,
                                                              className: eD.p,
                                                          }),
                                                      u,
                                                  ],
                                              }),
                                          ],
                                      });
                                  }
                                  return null != e
                                      ? (0, i.jsx)("div", {
                                            className: eD.VA,
                                            children: (0, i.jsx)(B.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                tag: "span",
                                                className: eD.o4,
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
var eL = n(301690);
function eF(e) {
    let { item: t } = e,
        n = a.useCallback(
            (e) => {
                if (
                    null ==
                    e.target.closest(
                        'img, video, audio, [class*="imageWrapper"], [class*="embedWrapper"], [class*="attachment"], [class*="mediaPlayer"]',
                    )
                )
                    switch (t.data.kind) {
                        case "message":
                            (0, U.ci)(t.data.message.channel_id, t.data.message.id);
                            break;
                        case "guildEvent": {
                            let e = V.Ay.getGuildScheduledEvent(t.data.eventId);
                            null != e && (0, R.pX)(b.BVt.GUILD_EVENT_DETAILS(e.guild_id, e.id));
                            break;
                        }
                        case "forumThread":
                            (0, U.ci)(t.data.threadChannel.id, t.data.message.id);
                            break;
                        case "contentInventory":
                            (0, Y.openUserProfileModal)({ userId: t.data.content.author_id });
                    }
            },
            [t],
        );
    return (0, i.jsxs)(P.D, {
        className: eL.k,
        onClick: n,
        children: [
            (0, i.jsx)(eG, { item: t }),
            (0, i.jsx)("div", { className: eL.o, children: (0, i.jsx)(eN, { item: t }) }),
        ],
    });
}
var eO = n(710028);
let eH = function (e) {
    let t,
        n,
        s,
        r,
        d,
        { scrollContainerRef: o } = e,
        c = (0, l.bG)([f.A], () => f.A.notificationItem(), []),
        { showDot: u } = { value: 0, showDot: (0, l.bG)([f.A], () => f.A.hasNewContent(), []) },
        m = a.useRef(null),
        [_, g] = a.useState(!1),
        {
            data: h,
            loading: p,
            isRefreshing: y,
            handleOnRefresh: I,
            viewabilityConfigCallbackPairs: A,
        } = (function (e) {
            let { showDot: t, notificationItem: n, isWaterwheelsCardEligible: i } = e,
                [s, r] = a.useState(!1),
                {
                    unreadItems: d,
                    readItems: o,
                    allUnreadItemsHydrated: c,
                    allItemsHydrated: u,
                    discoverEnabled: m,
                } = (function () {
                    let { isWaterwheelsCardEligible: e } =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, L.hY)("icymi_items"),
                        n = (0, l.bG)([f.A], () => f.A.getUnreadDisplayItems()),
                        i = (0, l.bG)([f.A], () => f.A.getReadDisplayItems()),
                        s = (0, l.bG)([f.A], () => f.A.getNextIndexToHydrate()),
                        r = (0, l.cf)([f.A], () => f.A.getHydratedItems()),
                        d = (0, l.bG)([f.A], () => f.A.getMissingItems());
                    a.useEffect(() => {
                        let e = Date.now() + i.length;
                        v.A.ackGravityItems(i.map((t) => ({ id: t.id, timestamp: e-- }), !0));
                    }, [i]);
                    let o = [],
                        c = [],
                        u = 0;
                    for (let i = 0; i < n.length && !(u >= s); i++) {
                        let a = n[i];
                        if ((u++, d[a.id])) continue;
                        let s = r[a.id];
                        if (
                            (null == s &&
                                a.type === M.Mm.MESSAGE &&
                                a.data.message_context?.reference_message_id != null &&
                                (s = r[a.data.message_id]),
                            null != s)
                        ) {
                            let n = F(a, s, !0, t, e);
                            null != n && o.push(n);
                        }
                    }
                    for (let n = 0; n < i.length && !(u >= s); n++) {
                        let a = i[n];
                        if ((u++, d[a.id])) continue;
                        let s = r[a.id];
                        if (
                            (null == s &&
                                a.type === M.Mm.MESSAGE &&
                                a.data.message_context?.reference_message_id != null &&
                                (s = r[a.data.message_id]),
                            null != s)
                        ) {
                            let n = F(a, s, !1, t, e);
                            null != n && c.push(n);
                        }
                    }
                    return {
                        unreadItems: o,
                        readItems: c,
                        allUnreadItemsHydrated: s >= n.length,
                        allItemsHydrated: s >= n.length + i.length,
                        discoverEnabled: t,
                    };
                })({ isWaterwheelsCardEligible: i }),
                _ = (0, l.bG)([f.A], () => f.A.getVersion(), []),
                g = (0, l.bG)([f.A], () => !(f.A.isFirstPageHydrated() && _ > 0));
            a.useEffect(() => {
                null != f.A.getLoadId() && w.trackFeedShown({ homeSessionId: "gravity" });
            }, [_]);
            let h = (0, l.bG)([f.A], () => f.A.isRefreshing(), []),
                p = (0, l.bG)([f.A], () => f.A.isHydrating(), []),
                [y, I] = a.useState([]),
                { loadId: A, lastScrollEventTimestamp: x } = (0, l.cf)([f.A], () => ({
                    loadId: f.A.getLoadId(),
                    lastScrollEventTimestamp: f.A.lastScrollEvent(),
                })),
                E = y
                    .filter((e) => {
                        let { item: t } = e;
                        return !N.has(t.data.kind);
                    })
                    .map((e) => {
                        let { item: t } = e;
                        return t.id;
                    })
                    .pop(),
                b = (0, G.A)(E);
            a.useEffect(() => {
                if (h || g || null == b || null == E || E === b) return;
                let e = Date.now();
                e - x > O && (v.A.gravityScrollEvent(e), w.trackFeedFirstScrollStarted());
            }, [h, x, b, E, A, g]);
            let k = a.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if ((t.some((e) => "end" === e.item.data.kind) && r(!0), 0 === t.length)) return;
                        I(t);
                        let n = [],
                            i = D(t),
                            a = Date.now();
                        for (let e = i.length - 1; e >= 0; e--) {
                            let t = i[e];
                            null != t && n.push({ id: t.id, type: (0, M.xG)(t), timestamp: a++ });
                        }
                        (n.length > 0 && v.A.ackGravityItems(n, !0), w.trackItemShortImpression(t, H(i), _));
                    },
                    [_, r],
                ),
                C = a.useCallback(
                    (e) => {
                        let { viewableItems: t } = e;
                        if (0 === t.length) return;
                        let n = D(t);
                        (w.trackItemLongImpression(t, H(n), _),
                            v.A.triggerItemsLongImpression(
                                t
                                    .filter((e) => {
                                        let { item: t } = e;
                                        return !N.has(t.data.kind);
                                    })
                                    .map((e) => {
                                        let { item: t, index: n } = e;
                                        return {
                                            itemId: (0, T.t)(t),
                                            itemType: (0, j.px)(t),
                                            triggerType: "list",
                                            itemFeedIndex:
                                                "waterwheelsItem" === t.data.kind ? t.data.brokerPosition : n,
                                            itemScore: t.score ?? null,
                                            itemChannelType: t.channelType ?? null,
                                            isInitiallyVisible: !1,
                                        };
                                    }),
                            ));
                    },
                    [_],
                ),
                P = a.useCallback((e) => {
                    let { viewableItems: t } = e;
                    v.A.startItemsDwell(
                        t
                            .filter((e) => {
                                let { item: t } = e;
                                return !N.has(t.data.kind);
                            })
                            .map((e) => {
                                let { item: t, index: n } = e;
                                return {
                                    itemId: (0, T.t)(t),
                                    itemType: (0, j.px)(t),
                                    triggerType: "list",
                                    itemFeedIndex: "waterwheelsItem" === t.data.kind ? t.data.brokerPosition : n,
                                    itemScore: t.score ?? null,
                                    itemChannelType: t.channelType ?? null,
                                    isInitiallyVisible: !1,
                                };
                            }),
                    );
                }, []),
                V = a.useMemo(
                    () => [
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 100,
                                minimumViewTime: 50,
                            },
                            onViewableItemsChanged: k,
                        },
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 50,
                                minimumViewTime: 1e3,
                            },
                            onViewableItemsChanged: C,
                        },
                        {
                            viewabilityConfig: {
                                waitForInteraction: !1,
                                viewAreaCoveragePercentThreshold: 50,
                                minimumViewTime: 50,
                            },
                            onViewableItemsChanged: P,
                        },
                    ],
                    [k, C, P],
                );
            a.useEffect(() => {
                v.A.openICYMITab();
            }, []);
            let R = S(t),
                { data: U, stickyHeaderIndices: Y } = a.useMemo(() => {
                    let e = [];
                    return (
                        g &&
                            null != n &&
                            n.type === M.Mm.CUSTOM_STATUS &&
                            e.push({
                                id: n.id,
                                timestamp: Date.now(),
                                data: { kind: "contentInventory", content: (0, j.YM)(n).activity },
                                score: n.score,
                                unread: !0,
                            }),
                        g
                            ? e.push({ id: "loading", timestamp: 0, unread: !1, data: { kind: "loading" } })
                            : (d.forEach((t) => {
                                  (0, j.yx)(t) || e.push(t);
                              }),
                              !m && c && e.push({ id: "end", timestamp: 0, unread: !1, data: { kind: "end" } }),
                              o.forEach((t) => {
                                  (0, j.yx)(t) || e.push(t);
                              }),
                              m && u && e.push({ id: "end", timestamp: 0, unread: !1, data: { kind: "end" } }),
                              p &&
                                  e.push({
                                      id: "bottomLoading",
                                      timestamp: 0,
                                      unread: !1,
                                      data: { kind: "bottomLoading" },
                                  })),
                        { data: e, stickyHeaderIndices: [] }
                    );
                }, [g, n, d, c, u, m, o, p]);
            return {
                data: U,
                loading: g,
                version: _,
                visibleItemIds: y,
                endVisible: s,
                isRefreshing: h,
                handleOnRefresh: R,
                stickyHeaderIndices: Y,
                viewabilityConfigCallbackPairs: V,
            };
        })({ showDot: u, notificationItem: c }),
        x = S();
    a.useEffect(
        () => () => {
            x();
        },
        [x],
    );
    let E = (0, l.bG)([f.A], () => f.A.hasNewContent(), []),
        b = (0, l.bG)([f.A], () => f.A.isHydrating(), []),
        k = a.useMemo(() => A[0].onViewableItemsChanged, [A]),
        { registerItemRef: C } =
            ((t = a.useRef(null)),
            (n = a.useRef(new Map())),
            (s = a.useRef(new Set())),
            (r = a.useRef(k)),
            (d = a.useRef(h)),
            a.useEffect(() => {
                ((r.current = k), (d.current = h));
            }, [k, h]),
            a.useEffect(
                () => (
                    (t.current = new IntersectionObserver(
                        (e) => {
                            let t = !1;
                            if (
                                (e.forEach((e) => {
                                    let n = e.target.getAttribute("data-item-id");
                                    null != n &&
                                        (e.isIntersecting && e.intersectionRatio >= 0.5
                                            ? s.current.has(n) || (s.current.add(n), (t = !0))
                                            : s.current.has(n) && (s.current.delete(n), (t = !0)));
                                }),
                                t)
                            ) {
                                let e = d.current,
                                    t = Array.from(s.current)
                                        .map((t) => {
                                            let n = e.findIndex((e) => e.id === t);
                                            return n >= 0 ? { index: n, item: e[n] } : null;
                                        })
                                        .filter((e) => null !== e)
                                        .sort((e, t) => e.index - t.index);
                                r.current({ viewableItems: t });
                            }
                        },
                        { root: o?.current ?? null, threshold: [0, 0.5, 1], rootMargin: "0px" },
                    )),
                    () => {
                        t.current?.disconnect();
                    }
                ),
                [o],
            ),
            {
                registerItemRef: a.useCallback((e, i) => {
                    if (null != i) (n.current.set(e, i), null != t.current && t.current.observe(i));
                    else {
                        let i = n.current.get(e);
                        null != i && (t.current?.unobserve(i), n.current.delete(e));
                    }
                }, []),
            }),
        P = a.useMemo(() => h.some((e) => "end" === e.data.kind), [h]),
        V = a.useCallback(() => {
            if (P) return;
            let e = o.current;
            null == e ||
                !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) ||
                _ ||
                p ||
                b ||
                (g(!0),
                (async function () {
                    let e = f.A.getUnreadDisplayItems(),
                        t = f.A.getReadDisplayItems(),
                        n = f.A.getNextIndexToHydrate();
                    await (0, j.kx)([...e, ...t], n, n + 15, f.A.getHydratedItems());
                })().finally(() => {
                    setTimeout(() => {
                        g(!1);
                    }, 300);
                }));
        }, [p, _, b, P, o]);
    a.useEffect(() => {
        let e = o.current;
        if (null != e)
            return (
                e.addEventListener("scroll", V),
                () => {
                    e.removeEventListener("scroll", V);
                }
            );
    }, [V, o]);
    let R = a.useCallback(() => {
            o.current?.scrollTo({ top: 0, behavior: "smooth" });
        }, [o]),
        U = a.useCallback(() => {
            (I(), R());
        }, [I, R]),
        Y = a.useCallback(
            (e) =>
                "loading" === e.data.kind
                    ? (0, i.jsx)(
                          "div",
                          {
                              style: { padding: "32px", textAlign: "center" },
                              children: (0, i.jsx)("div", { children: "Loading ICYMI feed..." }),
                          },
                          e.id,
                      )
                    : "bottomLoading" === e.data.kind
                      ? (0, i.jsx)(
                            "div",
                            {
                                style: { padding: "16px", textAlign: "center" },
                                children: (0, i.jsx)("div", { children: "Loading more..." }),
                            },
                            e.id,
                        )
                      : "end" === e.data.kind
                        ? (0, i.jsx)(
                              "div",
                              {
                                  style: { padding: "32px", textAlign: "center", color: "#949ba4" },
                                  children: (0, i.jsx)("div", { children: "You're all caught up!" }),
                              },
                              e.id,
                          )
                        : (0, i.jsx)(
                              "div",
                              { ref: (t) => C(e.id, t), "data-item-id": e.id, children: (0, i.jsx)(eF, { item: e }) },
                              e.id,
                          ),
            [C],
        );
    return p && 0 === h.length
        ? (0, i.jsx)("div", {
              style: { padding: "32px", textAlign: "center" },
              children: (0, i.jsx)("div", { children: "Loading ICYMI feed..." }),
          })
        : (0, i.jsxs)("div", {
              className: eO.k,
              children: [
                  E &&
                      !y &&
                      (0, i.jsx)("div", {
                          style: { position: "sticky", top: 0, zIndex: 10, padding: "8px", textAlign: "center" },
                          children: (0, i.jsx)("button", {
                              onClick: U,
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
                  (0, i.jsxs)("div", {
                      ref: m,
                      className: eO.j,
                      children: [
                          h.map((e) => Y(e)),
                          !P &&
                              (_ || b) &&
                              (0, i.jsx)("div", {
                                  style: { padding: "16px", textAlign: "center" },
                                  children: (0, i.jsx)("div", {
                                      style: { color: "#949ba4" },
                                      children: "Loading more...",
                                  }),
                              }),
                      ],
                  }),
              ],
          });
};
var eP = n(534515),
    eV = n(999900);
let eR = (0, _.A)(function (e) {
    let { width: t } = e,
        n = (0, A.c)("ICYMIPage");
    (a.useEffect(() => {
        n || (0, d.pX)(b.BVt.ME);
    }, [n]),
        a.useLayoutEffect(() => {
            n && m.I(b.BVt.ICYMI);
        }, [n]),
        (0, g.Ay)(() => {
            n && (0, y.d0)("icymi");
        }));
    let s = (0, l.bG)([I.A], () => I.A.theme),
        _ = (0, l.bG)([f.A], () => f.A.isRefreshing()),
        v = a.useRef(null);
    (0, h.HU)({ location: K.intl.string(K.t["jnXV/V"]) });
    let x = S(),
        E = K.intl.string(K.t.wzzjk9);
    return n
        ? (0, i.jsxs)("div", {
              className: r()(eV.TE, eP.kL),
              children: [
                  (0, i.jsx)(o.N, {
                      theme: s,
                      children: (e) =>
                          (0, i.jsxs)(p.A, {
                              className: e,
                              toolbar: (0, i.jsx)(p.A.Icon, {
                                  icon: c.RefreshIcon,
                                  tooltip: E,
                                  onClick: x,
                                  disabled: _,
                                  "aria-label": E,
                              }),
                              children: [
                                  (0, i.jsx)(p.A.Icon, { icon: u.FlashIcon, "aria-hidden": !0 }),
                                  (0, i.jsx)(p.A.Title, { children: K.intl.string(K.t["jnXV/V"]) }),
                                  (0, i.jsx)(p.A.Title, {
                                      children: (0, i.jsx)("p", {
                                          className: eP.HH,
                                          children: K.intl.string(K.t.Ac2OZA),
                                      }),
                                  }),
                              ],
                          }),
                  }),
                  (0, i.jsx)("div", {
                      ref: v,
                      className: r()(eV.Qs, eP.Qs),
                      children: (0, i.jsx)(eH, { scrollContainerRef: v }),
                  }),
              ],
          })
        : null;
});
