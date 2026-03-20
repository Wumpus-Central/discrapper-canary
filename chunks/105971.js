n.d(t, { k: () => c }), n(321073);
var i = n(681154),
    a = n(954571),
    l = n(883344),
    r = n(596720),
    s = n(652215);
let o = (e) => {
        switch (e.data.kind) {
            case "end":
                return "end";
            case "loading":
                return "loading";
            case "message":
                if (e.channelType === s.rbe.GUILD_ANNOUNCEMENT) return "announcement";
                return "message";
            case "guildEvent":
                return "guild_event";
            case "contentInventory":
                if (e.data.content.content_type === i.ContentInventoryEntryType.CUSTOM_STATUS)
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
    },
    d = (e) => {
        switch (e.type) {
            case r.Mm.MESSAGE:
                if (e.data.channel_type === s.rbe.GUILD_ANNOUNCEMENT) return "announcement";
                return "message";
            case r.Mm.ACTIVITY:
                return "hotwheels_gaming_activity";
            case r.Mm.CUSTOM_STATUS:
                return "hotwheels_custom_status";
            case r.Mm.GUILD_EVENT:
                return "guild_event";
            case r.Mm.RECOMMENDED_GUILDS:
                return "recommended_guilds";
        }
    },
    c = {
        trackItemInteraction(e) {
            a.default.track(s.HAw.FEED_ITEM_INTERACTED, {
                load_id: l.A.getLoadId(),
                feed_item_type: e.type,
                feed_item_id: e.id,
                home_session_id: "gravity",
                action_type: e.actionType,
                feed_item_index: l.A.getIndexInHydratedFeed(e.id),
                icymi_session_id: e.icymiSessionId,
                impression_id: e.impressionId,
                ux_variation: e.uxVariation,
                session_interaction_index: e.sessionInteractionIndex,
            });
        },
        trackItemShortImpression(e, t, n) {
            a.default.track(s.HAw.FEED_ITEM_SEEN_BATCH, {
                load_id: l.A.getLoadId(),
                home_session_id: "gravity",
                feed_item_ids: e.map((e) => e.item.id),
                feed_item_types: e.map((e) => o(e.item)),
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
            a.default.track(s.HAw.FEED_ITEM_SEEN_LONG, {
                load_id: l.A.getLoadId(),
                home_session_id: "gravity",
                feed_item_ids: e.map((e) => e.item.id),
                feed_item_types: e.map((e) => o(e.item)),
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
                l = [];
            e.unreadFeedItems.forEach((e) => {
                t.push(e.id), i.push(d(e));
            }),
                e.readFeedItems.forEach((e) => {
                    n.push(e.id), l.push(d(e));
                }),
                a.default.track(s.HAw.FEED_LOADED, {
                    ...e.newTrackingProps,
                    home_session_id: e.homeSessionId,
                    tab_badged: e.hasNewContent,
                    unread_feed_item_ids: t,
                    read_feed_item_ids: n,
                    unread_feed_item_types: i,
                    read_feed_item_types: l,
                });
        },
        trackFeedShown(e) {
            a.default.track(s.HAw.FEED_SHOWN, {
                load_id: l.A.getLoadId(),
                home_session_id: e.homeSessionId,
                variant: e.variant,
            });
        },
        trackFeedFirstScrollStarted() {
            a.default.track(s.HAw.HOME_FIRST_SCROLL_STARTED, { load_id: l.A.getLoadId(), home_session_id: "gravity" });
        },
        trackFeedFeedbackPromptViewed() {
            a.default.track(s.HAw.HOME_FEEDBACK_PROMPT_VIEWED);
        },
        trackFeedFeedbackSubmitted(e) {
            a.default.track(s.HAw.HOME_FEEDBACK_SUBMITTED, {
                load_id: l.A.getLoadId(),
                home_session_id: "gravity",
                ...e,
            });
        },
        trackFeedOnboardingScreenSkipped(e) {
            a.default.track(s.HAw.ICYMI_ONBOARDING_SCREEN_SKIPPED, { location: e.location });
        },
        trackFeedOnboardingGuildToggled(e) {
            a.default.track(s.HAw.ICYMI_ONBOARDING_GUILD_TOGGLED, { guild_id: e.guildId, toggled: e.toggled });
        },
        trackFeedOnboardingCategoryToggled(e) {
            a.default.track(s.HAw.ICYMI_ONBOARDING_CATEGORY_TOGGLED, { category_id: e.categoryId, toggled: e.toggled });
        },
        trackFeedEmptyLoadingSeen() {
            a.default.track(s.HAw.ICYMI_FEED_EMPTY_LOADING_SEEN, {
                load_id: l.A.getLoadId(),
                version: l.A.getVersion(),
            });
        },
        trackFeedEmptyLoadingComplete(e) {
            a.default.track(s.HAw.ICYMI_FEED_EMPTY_LOADING_COMPLETE, {
                load_id: l.A.getLoadId(),
                dwell_time_ms: e.dwellTimeMs,
                version: l.A.getVersion(),
            });
        },
        trackFeedEmptyLoadingAbandoned(e) {
            a.default.track(s.HAw.ICYMI_FEED_EMPTY_LOADING_ABANDONED, {
                load_id: l.A.getLoadId(),
                dwell_time_ms: e.dwellTimeMs,
                version: l.A.getVersion(),
            });
        },
        trackFeedSessionStarted(e) {
            a.default.track(s.HAw.FEED_SESSION_STARTED, {
                load_id: l.A.getLoadId(),
                version: l.A.getVersion(),
                session_start_time_ms: e.sessionStartTimeMs,
                icymi_session_id: e.icymiSessionId,
                previous_icymi_session_count: e.previousIcymiSessionCount,
                ux_variation: e.uxVariation,
            });
        },
        trackFeedSessionCompleted(e) {
            a.default.track(s.HAw.FEED_SESSION_COMPLETED, {
                load_id: l.A.getLoadId(),
                version: l.A.getVersion(),
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
            a.default.track(s.HAw.FEED_ITEM_1S_DWELLED, {
                load_id: l.A.getLoadId(),
                version: l.A.getVersion(),
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
            a.default.track(s.HAw.FEED_ITEM_DWELLED, {
                load_id: l.A.getLoadId(),
                version: l.A.getVersion(),
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
            a.default.track(s.HAw.FEED_ITEM_ACTIONED, {
                load_id: l.A.getLoadId(),
                icymi_session_id: e.icymiSessionId,
                ux_variation: e.uxVariation,
                version: l.A.getVersion(),
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
            a.default.track(s.HAw.FEED_FILTER_ACTIONED, {
                load_id: l.A.getLoadId(),
                icymi_session_id: e.icymiSessionId,
                ux_variation: e.uxVariation,
                version: l.A.getVersion(),
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
            a.default.track(s.HAw.FEED_PAGE_ACTIONED, {
                load_id: l.A.getLoadId(),
                icymi_session_id: e.icymiSessionId,
                ux_variation: e.uxVariation,
                version: l.A.getVersion(),
                session_action_index: e.sessionActionIndex,
                action_gesture_type: e.actionParameters.actionGestureType,
                action_target_element: e.actionParameters.actionTargetElement,
                action_intent_type: e.actionParameters.actionIntentType,
                action_destination_type: e.actionParameters.actionDestinationType,
            });
        },
    };
