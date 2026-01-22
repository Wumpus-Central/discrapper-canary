n.d(t, {
    k: () => d,
}),
    n(321073);
var r = n(681154),
    i = n(954571),
    l = n(883344),
    a = n(596720),
    s = n(652215);

function o(e) {
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
}
let c = (e) => {
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
                if (e.data.content.content_type === r.I.CUSTOM_STATUS) return "hotwheels_custom_status";
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
    },
    u = (e) => {
        switch (e.type) {
            case a.Mm.MESSAGE:
                if (e.data.channel_type === s.rbe.GUILD_ANNOUNCEMENT) return "announcement";
                return "message";
            case a.Mm.ACTIVITY:
                return "hotwheels_gaming_activity";
            case a.Mm.CUSTOM_STATUS:
                return "hotwheels_custom_status";
            case a.Mm.GUILD_EVENT:
                return "guild_event";
            case a.Mm.RECOMMENDED_GUILDS:
                return "recommended_guilds";
            case a.Mm.GENERATED_CANDIDATE:
                return "generated_candidate";
        }
    },
    d = {
        trackItemInteraction(e) {
            i.default.track(s.HAw.FEED_ITEM_INTERACTED, {
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
            i.default.track(s.HAw.FEED_ITEM_SEEN_BATCH, {
                load_id: l.A.getLoadId(),
                home_session_id: "gravity",
                feed_item_ids: e.map((e) => e.item.id),
                feed_item_types: e.map((e) => c(e.item)),
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
            i.default.track(s.HAw.FEED_ITEM_SEEN_LONG, {
                load_id: l.A.getLoadId(),
                home_session_id: "gravity",
                feed_item_ids: e.map((e) => e.item.id),
                feed_item_types: e.map((e) => c(e.item)),
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
            var t, n;
            let r = [],
                l = [],
                a = [],
                c = [];
            e.unreadFeedItems.forEach((e) => {
                r.push(e.id), a.push(u(e));
            }),
                e.readFeedItems.forEach((e) => {
                    l.push(e.id), c.push(u(e));
                }),
                i.default.track(
                    s.HAw.FEED_LOADED,
                    ((t = o({}, e.newTrackingProps)),
                    (n = n =
                        {
                            home_session_id: e.homeSessionId,
                            tab_badged: e.hasNewContent,
                            unread_feed_item_ids: r,
                            read_feed_item_ids: l,
                            unread_feed_item_types: a,
                            read_feed_item_types: c,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                );
        },
        trackFeedShown(e) {
            i.default.track(s.HAw.FEED_SHOWN, {
                load_id: l.A.getLoadId(),
                home_session_id: e.homeSessionId,
                variant: e.variant,
            });
        },
        trackFeedFirstScrollStarted() {
            i.default.track(s.HAw.HOME_FIRST_SCROLL_STARTED, {
                load_id: l.A.getLoadId(),
                home_session_id: "gravity",
            });
        },
        trackFeedFeedbackPromptViewed() {
            i.default.track(s.HAw.HOME_FEEDBACK_PROMPT_VIEWED);
        },
        trackFeedFeedbackSubmitted(e) {
            i.default.track(
                s.HAw.HOME_FEEDBACK_SUBMITTED,
                o(
                    {
                        load_id: l.A.getLoadId(),
                        home_session_id: "gravity",
                    },
                    e,
                ),
            );
        },
        trackGeneratedCandidateFeedback(e) {
            var t, n, r, a;
            i.default.track(s.HAw.FEED_ITEM_CONTENT_GEN_FEEDBACK, {
                feedback_type: e.isPositive ? "thumbs_up" : "thumbs_down",
                content_id: parseInt(e.item.content_id),
                channel_id: parseInt(e.item.channel_id),
                content_type: e.item.type.toString(),
                guild_id: e.item.guild_id,
                home_session_id: "gravity",
                load_id: l.A.getLoadId(),
                version: 1,
                primary_text_length: null != (t = e.item.primary_text.length) ? t : 0,
                secondary_text_length: null != (n = e.item.secondary_text.length) ? n : 0,
                message_count: null != (r = e.item.message_ids.length) ? r : 0,
                user_count: null != (a = e.item.user_ids.length) ? a : 0,
                generated_item_index: e.generatedItemIndex,
            });
        },
        trackFeedOnboardingScreenSkipped(e) {
            i.default.track(s.HAw.ICYMI_ONBOARDING_SCREEN_SKIPPED, {
                location: e.location,
            });
        },
        trackFeedOnboardingGuildToggled(e) {
            i.default.track(s.HAw.ICYMI_ONBOARDING_GUILD_TOGGLED, {
                guild_id: e.guildId,
                toggled: e.toggled,
            });
        },
        trackFeedOnboardingCategoryToggled(e) {
            i.default.track(s.HAw.ICYMI_ONBOARDING_CATEGORY_TOGGLED, {
                category_id: e.categoryId,
                toggled: e.toggled,
            });
        },
        trackFeedEmptyLoadingSeen() {
            i.default.track(s.HAw.ICYMI_FEED_EMPTY_LOADING_SEEN, {
                load_id: l.A.getLoadId(),
                version: l.A.getVersion(),
            });
        },
        trackFeedEmptyLoadingComplete(e) {
            i.default.track(s.HAw.ICYMI_FEED_EMPTY_LOADING_COMPLETE, {
                load_id: l.A.getLoadId(),
                dwell_time_ms: e.dwellTimeMs,
                version: l.A.getVersion(),
            });
        },
        trackFeedEmptyLoadingAbandoned(e) {
            i.default.track(s.HAw.ICYMI_FEED_EMPTY_LOADING_ABANDONED, {
                load_id: l.A.getLoadId(),
                dwell_time_ms: e.dwellTimeMs,
                version: l.A.getVersion(),
            });
        },
        trackFeedSessionStarted(e) {
            i.default.track(s.HAw.FEED_SESSION_STARTED, {
                load_id: l.A.getLoadId(),
                version: l.A.getVersion(),
                session_start_time_ms: e.sessionStartTimeMs,
                icymi_session_id: e.icymiSessionId,
                previous_icymi_session_count: e.previousIcymiSessionCount,
                ux_variation: e.uxVariation,
            });
        },
        trackFeedSessionCompleted(e) {
            i.default.track(s.HAw.FEED_SESSION_COMPLETED, {
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
            var t;
            i.default.track(s.HAw.FEED_ITEM_1S_DWELLED, {
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
                item_channel_type: null != (t = e.itemChannelType) ? t : null,
                item_card_height: e.itemCardHeight,
                is_dwelling: e.isDwelling,
                interaction_action_types: e.interactionActionTypes,
                interaction_count: e.interactionCount,
                ux_variation: e.uxVariation,
                session_impression_index: e.sessionImpressionIndex,
            });
        },
        trackFeedItemDwelled(e) {
            var t;
            i.default.track(s.HAw.FEED_ITEM_DWELLED, {
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
                item_channel_type: null != (t = e.itemChannelType) ? t : null,
                item_card_height: e.itemCardHeight,
                ux_variation: e.uxVariation,
                interaction_action_types: e.interactionActionTypes,
                interaction_count: e.interactionCount,
                session_impression_index: e.sessionImpressionIndex,
            });
        },
        trackFeedItemActioned(e) {
            var t;
            i.default.track(s.HAw.FEED_ITEM_ACTIONED, {
                load_id: l.A.getLoadId(),
                icymi_session_id: e.icymiSessionId,
                ux_variation: e.uxVariation,
                version: l.A.getVersion(),
                session_action_index: e.sessionActionIndex,
                item_id: e.itemId,
                item_type: e.itemType,
                impression_id: null != (t = e.impressionId) ? t : null,
                action_gesture_type: e.actionParameters.actionGestureType,
                action_target_element: e.actionParameters.actionTargetElement,
                action_intent_type: e.actionParameters.actionIntentType,
                action_destination_type: e.actionParameters.actionDestinationType,
            });
        },
        trackFeedFilterActioned(e) {
            var t, n, r, a, o, c, u, d, p;
            i.default.track(s.HAw.FEED_FILTER_ACTIONED, {
                load_id: l.A.getLoadId(),
                icymi_session_id: e.icymiSessionId,
                ux_variation: e.uxVariation,
                version: l.A.getVersion(),
                session_action_index: e.sessionActionIndex,
                filter_setting_context: e.filterParameters.filterSettingContext,
                filter_target_type: e.filterParameters.filterTargetType,
                target_guild_id: null != (t = e.filterParameters.targetGuildId) ? t : null,
                target_channel_id: null != (n = e.filterParameters.targetChannelId) ? n : null,
                previous_tune_setting: null != (r = e.filterParameters.previousTuneSetting) ? r : null,
                new_tune_setting: null != (a = e.filterParameters.newTuneSetting) ? a : null,
                previous_out_setting: null != (o = e.filterParameters.previousOutSetting) ? o : null,
                new_out_setting: null != (c = e.filterParameters.newOutSetting) ? c : null,
                item_id: null != (u = e.itemId) ? u : null,
                item_type: null != (d = e.itemType) ? d : null,
                impression_id: null != (p = e.impressionId) ? p : null,
            });
        },
        trackFeedPageActioned(e) {
            i.default.track(s.HAw.FEED_PAGE_ACTIONED, {
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
