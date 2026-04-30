"use strict";
n.d(t, { A: () => u });
var i = n(636537),
    r = n(228366),
    s = n(885386),
    a = n(38405),
    o = n(859524),
    l = n(652215);
let u = {
    async fetchPopularGuildsFromCategories(e, t) {
        try {
            let { guilds: n } = (
                await i.Bo.post({
                    url: l.Rsh.GRAVITY_TOPIC_GUILDS,
                    body: { category_ids: e, offset: t },
                    rejectWithError: !1,
                })
            ).body;
            return r.h.dispatch({ type: "LOAD_ICYMI_POPULAR_GUILDS", categoryIds: e, guilds: n, offset: t }), !0;
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
            t && r.h.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: !0 });
            try {
                let s = Date.now(),
                    a = await i.Bo.get({
                        url: l.Rsh.GRAVITY_ITEMS_DEHYDRATED,
                        query: { refresh: n },
                        rejectWithError: !1,
                    });
                await r.h.dispatch({
                    type: "LOAD_ICYMI_DEHYDRATED",
                    items: a.body.items,
                    loadId: a.body.load_id,
                    startTime: s,
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
                    await i.Bo.post({
                        url: l.Rsh.GRAVITY_JOIN_GUILD,
                        body: { guild_ids: e, location: t },
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
                let n = await i.Bo.post({
                    url: l.Rsh.GRAVITY_ITEMS_HYDRATE,
                    body: { message_items: [{ channel_id: e, message_id: t }], activity_items: [] },
                    rejectWithError: !1,
                });
                if (0 === n.body.message_items.length) return;
                r.h.dispatch({ type: "LOAD_ICYMI_FROM_NOTIFICATION", messageItem: n.body.message_items[0] });
            } catch (e) {
                a.A.captureException(e);
            }
    },
    fetchForStatusNotification(e) {
        (0, o.Lg)("fetchInitialStatus") && r.h.dispatch({ type: "LOAD_ICYMI_FROM_NOTIFICATION", customStatusItem: e });
    },
    async fetchHydrated(e, t, n) {
        if (!(0, o.Lg)("fetchHydrated")) return;
        let { messageItems: s, activityItems: u } = n;
        if (0 === s.length && 0 === u.length)
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
                url: l.Rsh.GRAVITY_ITEMS_HYDRATE,
                body: { message_items: s, activity_items: u },
                rejectWithError: !1,
            });
            r.h.dispatch({
                type: "LOAD_ICYMI_HYDRATED",
                requestMessageItems: s,
                requestActivityItems: u,
                messageItems: n.body.message_items,
                activityItems: n.body.activity_items,
                startingIndex: e,
                endingIndex: t,
            });
        } catch (i) {
            a.A.captureException(i);
            let n = (0, o.Vq)(e, t);
            r.h.dispatch({ type: "LOAD_ICYMI_HYDRATED_FAILED", hydrationId: n });
        }
    },
    async getGuildChannelScores() {
        if ((0, o.Lg)("guildChannelScores"))
            try {
                let e = await i.Bo.get({ url: l.Rsh.GRAVITY_CUSTOM_SCORES, rejectWithError: !1 });
                r.h.dispatch({ type: "LOAD_ICYMI_CUSTOM_SCORES", scores: e.body });
            } catch (e) {
                a.A.captureException(e);
            }
    },
    async getRecommendedGuilds() {
        if ((0, o.Lg)("recommendedGuilds"))
            try {
                let e = await i.Bo.get({ url: l.Rsh.GRAVITY_RECOMMENDED_GUILDS, rejectWithError: !1 });
                r.h.dispatch({ type: "LOAD_ICYMI_RECOMMENDED_GUILDS", guilds: e.body.guilds });
            } catch (e) {
                a.A.captureException(e);
            }
    },
    async getMediaForCurrentStatus() {
        if (!(0, o.Lg)("mediaForCurrentStatus")) return;
        let e = s.G2.getSetting();
        if (null != e && null != e.createdAtMs)
            try {
                let t = await i.Bo.get({ url: l.Rsh.GRAVITY_ATTACHMENTS, rejectWithError: !1 });
                r.h.dispatch({
                    type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA",
                    attachments: t.body.attachments,
                    createdAtMs: Number(e.createdAtMs),
                });
            } catch (e) {
                a.A.captureException(e);
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
