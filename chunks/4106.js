n.d(t, { A: () => d });
var i = n(562465),
    r = n(73153),
    a = n(253932),
    l = n(728458),
    s = n(859524),
    o = n(652215);
let d = {
    async fetchPopularGuildsFromCategories(e, t) {
        try {
            let { guilds: n } = (
                await i.Bo.post({
                    url: o.Rsh.GRAVITY_TOPIC_GUILDS,
                    body: { category_ids: e, offset: t },
                    rejectWithError: !1,
                })
            ).body;
            return r.h.dispatch({ type: "LOAD_ICYMI_POPULAR_GUILDS", categoryIds: e, guilds: n, offset: t }), !0;
        } catch (e) {
            l.A.captureException(e);
        }
        return !1;
    },
    async fetchDehydrated() {
        let {
            isInitialLoad: e,
            isReloading: t,
            forceRefresh: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ((0, s.Lg)("fetchDehydrated")) {
            t && r.h.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: !0 });
            try {
                let a = Date.now(),
                    l = await i.Bo.get({
                        url: o.Rsh.GRAVITY_ITEMS_DEHYDRATED,
                        query: { refresh: n },
                        rejectWithError: !1,
                    });
                await r.h.dispatch({
                    type: "LOAD_ICYMI_DEHYDRATED",
                    items: l.body.items,
                    loadId: l.body.load_id,
                    startTime: a,
                    isReloading: t,
                    isInitialLoad: e,
                });
            } catch (e) {
                l.A.captureException(e);
            }
        }
    },
    async gravityJoinGuild(e, t) {
        if ((0, s.Lg)("gravityJoinGuild") && 0 !== e.length)
            try {
                return (
                    await i.Bo.post({
                        url: o.Rsh.GRAVITY_JOIN_GUILD,
                        body: { guild_ids: e, location: t },
                        rejectWithError: !1,
                    }),
                    !0
                );
            } catch (e) {
                return l.A.captureException(e), !1;
            }
    },
    async fetchForNotification(e, t) {
        if ((0, s.Lg)("fetchInitial"))
            try {
                let n = await i.Bo.post({
                    url: o.Rsh.GRAVITY_ITEMS_HYDRATE,
                    body: { message_items: [{ channel_id: e, message_id: t }], activity_items: [] },
                    rejectWithError: !1,
                });
                if (0 === n.body.message_items.length) return;
                r.h.dispatch({ type: "LOAD_ICYMI_FROM_NOTIFICATION", messageItem: n.body.message_items[0] });
            } catch (e) {
                l.A.captureException(e);
            }
    },
    fetchForStatusNotification(e) {
        (0, s.Lg)("fetchInitialStatus") && r.h.dispatch({ type: "LOAD_ICYMI_FROM_NOTIFICATION", customStatusItem: e });
    },
    async fetchHydrated(e, t, n) {
        if (!(0, s.Lg)("fetchHydrated")) return;
        let { messageItems: a, activityItems: d } = n;
        if (0 === a.length && 0 === d.length)
            return void r.h.dispatch({
                type: "LOAD_ICYMI_HYDRATED",
                requestMessageItems: [],
                requestActivityItems: [],
                messageItems: [],
                activityItems: [],
                startingIndex: e,
                endingIndex: t,
            });
        try {
            let n = await i.Bo.post({
                url: o.Rsh.GRAVITY_ITEMS_HYDRATE,
                body: { message_items: a, activity_items: d },
                rejectWithError: !1,
            });
            r.h.dispatch({
                type: "LOAD_ICYMI_HYDRATED",
                requestMessageItems: a,
                requestActivityItems: d,
                messageItems: n.body.message_items,
                activityItems: n.body.activity_items,
                startingIndex: e,
                endingIndex: t,
            });
        } catch (i) {
            l.A.captureException(i);
            let n = (0, s.Vq)(e, t);
            r.h.dispatch({ type: "LOAD_ICYMI_HYDRATED_FAILED", hydrationId: n });
        }
    },
    async getGuildChannelScores() {
        if ((0, s.Lg)("guildChannelScores"))
            try {
                let e = await i.Bo.get({ url: o.Rsh.GRAVITY_CUSTOM_SCORES, rejectWithError: !1 });
                r.h.dispatch({ type: "LOAD_ICYMI_CUSTOM_SCORES", scores: e.body });
            } catch (e) {
                l.A.captureException(e);
            }
    },
    async getRecommendedGuilds() {
        if ((0, s.Lg)("recommendedGuilds"))
            try {
                let e = await i.Bo.get({ url: o.Rsh.GRAVITY_RECOMMENDED_GUILDS, rejectWithError: !1 });
                r.h.dispatch({ type: "LOAD_ICYMI_RECOMMENDED_GUILDS", guilds: e.body.guilds });
            } catch (e) {
                l.A.captureException(e);
            }
    },
    async getMediaForCurrentStatus() {
        if (!(0, s.Lg)("mediaForCurrentStatus")) return;
        let e = a.G2.getSetting();
        if (null != e && null != e.createdAtMs)
            try {
                let t = await i.Bo.get({ url: o.Rsh.GRAVITY_ATTACHMENTS, rejectWithError: !1 });
                r.h.dispatch({
                    type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA",
                    attachments: t.body.attachments,
                    createdAtMs: Number(e.createdAtMs),
                });
            } catch (e) {
                l.A.captureException(e);
            }
    },
    reloadICYMITab() {
        r.h.dispatch({ type: "RELOAD_ICYMI" });
    },
    loadHydratedAttempt(e) {
        r.h.dispatch({ type: "LOAD_ICYMI_HYDRATED_ATTEMPT", hydrationId: e });
    },
    openICYMITab() {
        r.h.dispatch({ type: "ICYMI_TAB_OPENED" });
    },
    closeICYMITab() {
        r.h.dispatch({ type: "ICYMI_TAB_CLOSED" });
    },
    startItemsDwell(e) {
        r.h.dispatch({ type: "ICYMI_ITEMS_DWELL_START", items: e });
    },
    triggerItemsLongImpression(e) {
        r.h.dispatch({ type: "ICYMI_ITEMS_LONG_IMPRESSION", items: e });
    },
    ackGravityItems: (e, t) => r.h.dispatch({ type: "ICYMI_ACK_ITEMS", items: e, override: t }),
    gravityScrollEvent: (e) => r.h.dispatch({ type: "ICYMI_SCROLL_EVENT", timestamp: e }),
    setFilters: (e) => r.h.dispatch({ type: "SET_ICYMI_FILTERS", filters: e }),
    giveFeedback: () => r.h.dispatch({ type: "ICYMI_FEEDBACK_GIVEN" }),
    clearReadStates: () => r.h.dispatch({ type: "CLEAR_ICYMI_READ_STATES" }),
    addedRecommendedGuild: () => r.h.dispatch({ type: "ICYMI_JOINED_RECOMMENDED_GUILD" }),
    setVideosMuted(e) {
        r.h.dispatch({ type: "ICYMI_SET_VIDEOS_MUTED", muted: e });
    },
    setTabFocused(e) {
        r.h.dispatch({ type: "ICYMI_SET_FOCUSED_TAB", focused: e });
    },
    setCardHeight(e, t) {
        r.h.dispatch({ type: "ICYMI_SET_CARD_HEIGHT", itemId: e, height: t });
    },
    takeSurvey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
        r.h.dispatch({ type: "ICYMI_TAKE_SURVEY", takenAt: e });
    },
    itemInteracted(e, t, n) {
        r.h.dispatch({ type: "ICYMI_ITEM_INTERACTED", itemId: e, itemType: t, actionType: n });
    },
    feedItemActioned(e) {
        r.h.dispatch({ type: "ICYMI_FEED_ITEM_ACTIONED", ...e });
    },
    feedFilterActioned(e) {
        r.h.dispatch({ type: "ICYMI_FEED_FILTER_ACTIONED", ...e });
    },
    feedPageActioned(e) {
        r.h.dispatch({ type: "ICYMI_FEED_PAGE_ACTIONED", ...e });
    },
};
