n.d(t, { A: () => d });
var i = n(562465),
    a = n(73153),
    l = n(253932),
    r = n(728458),
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
            return a.h.dispatch({ type: "LOAD_ICYMI_POPULAR_GUILDS", categoryIds: e, guilds: n, offset: t }), !0;
        } catch (e) {
            r.A.captureException(e);
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
            t && a.h.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: !0 });
            try {
                let l = Date.now(),
                    r = await i.Bo.get({
                        url: o.Rsh.GRAVITY_ITEMS_DEHYDRATED,
                        query: { refresh: n },
                        rejectWithError: !1,
                    });
                await a.h.dispatch({
                    type: "LOAD_ICYMI_DEHYDRATED",
                    items: r.body.items,
                    loadId: r.body.load_id,
                    startTime: l,
                    isReloading: t,
                    isInitialLoad: e,
                });
            } catch (e) {
                r.A.captureException(e);
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
                return r.A.captureException(e), !1;
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
                a.h.dispatch({ type: "LOAD_ICYMI_FROM_NOTIFICATION", messageItem: n.body.message_items[0] });
            } catch (e) {
                r.A.captureException(e);
            }
    },
    fetchForStatusNotification(e) {
        (0, s.Lg)("fetchInitialStatus") && a.h.dispatch({ type: "LOAD_ICYMI_FROM_NOTIFICATION", customStatusItem: e });
    },
    async fetchHydrated(e, t, n) {
        if (!(0, s.Lg)("fetchHydrated")) return;
        let { messageItems: l, activityItems: d } = n;
        if (0 === l.length && 0 === d.length)
            return void a.h.dispatch({
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
                body: { message_items: l, activity_items: d },
                rejectWithError: !1,
            });
            a.h.dispatch({
                type: "LOAD_ICYMI_HYDRATED",
                requestMessageItems: l,
                requestActivityItems: d,
                messageItems: n.body.message_items,
                activityItems: n.body.activity_items,
                startingIndex: e,
                endingIndex: t,
            });
        } catch (i) {
            r.A.captureException(i);
            let n = (0, s.Vq)(e, t);
            a.h.dispatch({ type: "LOAD_ICYMI_HYDRATED_FAILED", hydrationId: n });
        }
    },
    async getGuildChannelScores() {
        if ((0, s.Lg)("guildChannelScores"))
            try {
                let e = await i.Bo.get({ url: o.Rsh.GRAVITY_CUSTOM_SCORES, rejectWithError: !1 });
                a.h.dispatch({ type: "LOAD_ICYMI_CUSTOM_SCORES", scores: e.body });
            } catch (e) {
                r.A.captureException(e);
            }
    },
    async getRecommendedGuilds() {
        if ((0, s.Lg)("recommendedGuilds"))
            try {
                let e = await i.Bo.get({ url: o.Rsh.GRAVITY_RECOMMENDED_GUILDS, rejectWithError: !1 });
                a.h.dispatch({ type: "LOAD_ICYMI_RECOMMENDED_GUILDS", guilds: e.body.guilds });
            } catch (e) {
                r.A.captureException(e);
            }
    },
    async getMediaForCurrentStatus() {
        if (!(0, s.Lg)("mediaForCurrentStatus")) return;
        let e = l.G2.getSetting();
        if (null != e && null != e.createdAtMs)
            try {
                let t = await i.Bo.get({ url: o.Rsh.GRAVITY_ATTACHMENTS, rejectWithError: !1 });
                a.h.dispatch({
                    type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA",
                    attachments: t.body.attachments,
                    createdAtMs: Number(e.createdAtMs),
                });
            } catch (e) {
                r.A.captureException(e);
            }
    },
    reloadICYMITab() {
        a.h.dispatch({ type: "RELOAD_ICYMI" });
    },
    loadHydratedAttempt(e) {
        a.h.dispatch({ type: "LOAD_ICYMI_HYDRATED_ATTEMPT", hydrationId: e });
    },
    openICYMITab() {
        a.h.dispatch({ type: "ICYMI_TAB_OPENED" });
    },
    closeICYMITab() {
        a.h.dispatch({ type: "ICYMI_TAB_CLOSED" });
    },
    startItemsDwell(e) {
        a.h.dispatch({ type: "ICYMI_ITEMS_DWELL_START", items: e });
    },
    triggerItemsLongImpression(e) {
        a.h.dispatch({ type: "ICYMI_ITEMS_LONG_IMPRESSION", items: e });
    },
    ackGravityItems: (e, t) => a.h.dispatch({ type: "ICYMI_ACK_ITEMS", items: e, override: t }),
    gravityScrollEvent: (e) => a.h.dispatch({ type: "ICYMI_SCROLL_EVENT", timestamp: e }),
    setFilters: (e) => a.h.dispatch({ type: "SET_ICYMI_FILTERS", filters: e }),
    giveFeedback: () => a.h.dispatch({ type: "ICYMI_FEEDBACK_GIVEN" }),
    clearReadStates: () => a.h.dispatch({ type: "CLEAR_ICYMI_READ_STATES" }),
    addedRecommendedGuild: () => a.h.dispatch({ type: "ICYMI_JOINED_RECOMMENDED_GUILD" }),
    setVideosMuted(e) {
        a.h.dispatch({ type: "ICYMI_SET_VIDEOS_MUTED", muted: e });
    },
    setTabFocused(e) {
        a.h.dispatch({ type: "ICYMI_SET_FOCUSED_TAB", focused: e });
    },
    setCardHeight(e, t) {
        a.h.dispatch({ type: "ICYMI_SET_CARD_HEIGHT", itemId: e, height: t });
    },
    takeSurvey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
        a.h.dispatch({ type: "ICYMI_TAKE_SURVEY", takenAt: e });
    },
    itemInteracted(e, t, n) {
        a.h.dispatch({ type: "ICYMI_ITEM_INTERACTED", itemId: e, itemType: t, actionType: n });
    },
    feedItemActioned(e) {
        a.h.dispatch({ type: "ICYMI_FEED_ITEM_ACTIONED", ...e });
    },
    feedFilterActioned(e) {
        a.h.dispatch({ type: "ICYMI_FEED_FILTER_ACTIONED", ...e });
    },
    feedPageActioned(e) {
        a.h.dispatch({ type: "ICYMI_FEED_PAGE_ACTIONED", ...e });
    },
};
