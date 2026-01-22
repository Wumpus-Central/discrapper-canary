n.d(t, { A: () => d });
var r = n(562465),
    i = n(73153),
    l = n(253932),
    a = n(728458),
    s = n(335934),
    o = n(859524),
    c = n(652215);
function u(e) {
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
let d = {
    async fetchPopularGuildsFromCategories(e, t) {
        try {
            let { guilds: n } = (
                await r.Bo.post({
                    url: c.Rsh.GRAVITY_TOPIC_GUILDS,
                    body: {
                        category_ids: e,
                        offset: t,
                    },
                    rejectWithError: !1,
                })
            ).body;
            return (
                i.h.dispatch({
                    type: "LOAD_ICYMI_POPULAR_GUILDS",
                    categoryIds: e,
                    guilds: n,
                    offset: t,
                }),
                !0
            );
        } catch (e) {
            a.A.captureException(e);
        }
        return !1;
    },
    async fetchDehydrated() {
        let {
            isInitialLoad: e,
            isReloading: t,
            forceRefresh: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ((0, o.Lg)("fetchDehydrated")) {
            t &&
                i.h.dispatch({
                    type: "ICYMI_SET_REFRESHING",
                    refreshing: !0,
                });
            try {
                let l = Date.now(),
                    a = await r.Bo.get({
                        url: c.Rsh.GRAVITY_ITEMS_DEHYDRATED,
                        query: { refresh: n },
                        rejectWithError: !1,
                    });
                await i.h.dispatch({
                    type: "LOAD_ICYMI_DEHYDRATED",
                    items: a.body.items,
                    loadId: a.body.load_id,
                    startTime: l,
                    isReloading: t,
                    isInitialLoad: e,
                });
            } catch (e) {
                a.A.captureException(e);
            }
        }
    },
    async gravityJoinGuild(e, t) {
        if ((0, o.Lg)("gravityJoinGuild") && 0 !== e.length)
            try {
                return (
                    await r.Bo.post({
                        url: c.Rsh.GRAVITY_JOIN_GUILD,
                        body: {
                            guild_ids: e,
                            location: t,
                        },
                        rejectWithError: !1,
                    }),
                    !0
                );
            } catch (e) {
                return a.A.captureException(e), !1;
            }
    },
    async fetchForNotification(e, t) {
        if ((0, o.Lg)("fetchInitial"))
            try {
                let n = await r.Bo.post({
                    url: c.Rsh.GRAVITY_ITEMS_HYDRATE,
                    body: {
                        message_items: [
                            {
                                channel_id: e,
                                message_id: t,
                            },
                        ],
                        activity_items: [],
                        generated_candidate_items: [],
                    },
                    rejectWithError: !1,
                });
                if (0 === n.body.message_items.length) return;
                i.h.dispatch({
                    type: "LOAD_ICYMI_FROM_NOTIFICATION",
                    messageItem: n.body.message_items[0],
                });
            } catch (e) {
                a.A.captureException(e);
            }
    },
    fetchForStatusNotification(e) {
        (0, o.Lg)("fetchInitialStatus") &&
            i.h.dispatch({
                type: "LOAD_ICYMI_FROM_NOTIFICATION",
                customStatusItem: e,
            });
    },
    async fetchHydrated(e, t, n) {
        if (!(0, o.Lg)("fetchHydrated")) return;
        let { contentGenerationEnabled: l } = (0, s.o$)("fetchHydrated", !1),
            { messageItems: u, activityItems: d, generatedCandidateItems: p } = n;
        if (0 === u.length && 0 === d.length && 0 === p.length)
            return void i.h.dispatch({
                type: "LOAD_ICYMI_HYDRATED",
                requestMessageItems: [],
                requestActivityItems: [],
                requestGeneratedCandidateItems: [],
                messageItems: [],
                activityItems: [],
                generatedCandidateItems: [],
                startingIndex: e,
                endingIndex: t,
            });
        try {
            let n = await r.Bo.post({
                url: c.Rsh.GRAVITY_ITEMS_HYDRATE,
                body: {
                    message_items: u,
                    activity_items: d,
                    generated_candidate_items: p,
                },
                rejectWithError: !1,
            });
            i.h.dispatch({
                type: "LOAD_ICYMI_HYDRATED",
                requestMessageItems: u,
                requestActivityItems: d,
                requestGeneratedCandidateItems: p,
                messageItems: n.body.message_items,
                activityItems: n.body.activity_items,
                generatedCandidateItems: l ? n.body.generated_candidate_items : [],
                startingIndex: e,
                endingIndex: t,
            });
        } catch (r) {
            a.A.captureException(r);
            let n = (0, o.Vq)(e, t);
            i.h.dispatch({
                type: "LOAD_ICYMI_HYDRATED_FAILED",
                hydrationId: n,
            });
        }
    },
    async getGuildChannelScores() {
        if ((0, o.Lg)("guildChannelScores"))
            try {
                let e = await r.Bo.get({
                    url: c.Rsh.GRAVITY_CUSTOM_SCORES,
                    rejectWithError: !1,
                });
                i.h.dispatch({
                    type: "LOAD_ICYMI_CUSTOM_SCORES",
                    scores: e.body,
                });
            } catch (e) {
                a.A.captureException(e);
            }
    },
    async getRecommendedGuilds() {
        if ((0, o.Lg)("recommendedGuilds"))
            try {
                let e = await r.Bo.get({
                    url: c.Rsh.GRAVITY_RECOMMENDED_GUILDS,
                    rejectWithError: !1,
                });
                i.h.dispatch({
                    type: "LOAD_ICYMI_RECOMMENDED_GUILDS",
                    guilds: e.body.guilds,
                });
            } catch (e) {
                a.A.captureException(e);
            }
    },
    async getMediaForCurrentStatus() {
        if (!(0, o.Lg)("mediaForCurrentStatus")) return;
        let e = l.G2.getSetting();
        if (null != e && null != e.createdAtMs)
            try {
                let t = await r.Bo.get({
                    url: c.Rsh.GRAVITY_ATTACHMENTS,
                    rejectWithError: !1,
                });
                i.h.dispatch({
                    type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA",
                    attachments: t.body.attachments,
                    createdAtMs: Number(e.createdAtMs),
                });
            } catch (e) {
                a.A.captureException(e);
            }
    },
    reloadICYMITab() {
        i.h.dispatch({ type: "RELOAD_ICYMI" });
    },
    loadHydratedAttempt(e) {
        i.h.dispatch({
            type: "LOAD_ICYMI_HYDRATED_ATTEMPT",
            hydrationId: e,
        });
    },
    openICYMITab() {
        i.h.dispatch({ type: "ICYMI_TAB_OPENED" });
    },
    closeICYMITab() {
        i.h.dispatch({ type: "ICYMI_TAB_CLOSED" });
    },
    startItemsDwell(e) {
        i.h.dispatch({
            type: "ICYMI_ITEMS_DWELL_START",
            items: e,
        });
    },
    triggerItemsLongImpression(e) {
        i.h.dispatch({
            type: "ICYMI_ITEMS_LONG_IMPRESSION",
            items: e,
        });
    },
    ackGravityItems: (e, t) =>
        i.h.dispatch({
            type: "ICYMI_ACK_ITEMS",
            items: e,
            override: t,
        }),
    gravityScrollEvent: (e) =>
        i.h.dispatch({
            type: "ICYMI_SCROLL_EVENT",
            timestamp: e,
        }),
    setFilters: (e) =>
        i.h.dispatch({
            type: "SET_ICYMI_FILTERS",
            filters: e,
        }),
    giveFeedback: () => i.h.dispatch({ type: "ICYMI_FEEDBACK_GIVEN" }),
    clearReadStates: () => i.h.dispatch({ type: "CLEAR_ICYMI_READ_STATES" }),
    addedRecommendedGuild: () => i.h.dispatch({ type: "ICYMI_JOINED_RECOMMENDED_GUILD" }),
    setVideosMuted(e) {
        i.h.dispatch({
            type: "ICYMI_SET_VIDEOS_MUTED",
            muted: e,
        });
    },
    setTabFocused(e) {
        i.h.dispatch({
            type: "ICYMI_SET_FOCUSED_TAB",
            focused: e,
        });
    },
    setCardHeight(e, t) {
        i.h.dispatch({
            type: "ICYMI_SET_CARD_HEIGHT",
            itemId: e,
            height: t,
        });
    },
    takeSurvey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
        i.h.dispatch({
            type: "ICYMI_TAKE_SURVEY",
            takenAt: e,
        });
    },
    itemInteracted(e, t, n) {
        i.h.dispatch({
            type: "ICYMI_ITEM_INTERACTED",
            itemId: e,
            itemType: t,
            actionType: n,
        });
    },
    feedItemActioned(e) {
        i.h.dispatch(u({ type: "ICYMI_FEED_ITEM_ACTIONED" }, e));
    },
    feedFilterActioned(e) {
        i.h.dispatch(u({ type: "ICYMI_FEED_FILTER_ACTIONED" }, e));
    },
    feedPageActioned(e) {
        i.h.dispatch(u({ type: "ICYMI_FEED_PAGE_ACTIONED" }, e));
    },
};
