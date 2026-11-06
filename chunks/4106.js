(n(323874), n(14289), n(35956));
var i = n(620632),
    r = n(73153),
    a = n(253932),
    s = n(841643),
    l = n(113384),
    o = n(46653),
    d = n(287809),
    c = n(856383),
    u = n(335934),
    _ = n(522606),
    E = n(652215);
let A = Promise.resolve(),
    f = {},
    h = null,
    I = o.default.isAuthenticated() ? (o.default.getId() ?? null) : null,
    p = null != I ? (o.default.getAuthSessionIdHash() ?? null) : null,
    m = {};
function T() {
    ((h = null), (f = {}), (m = {}));
}
function g(e) {
    I !== e && (T(), (I = e), (p = null));
}
function S(e) {
    null != e && (null != p && p !== e && T(), (p = e));
}
function N() {
    (T(), (I = null), (p = null));
}
(r.h.subscribe("LOGOUT", N),
    r.h.subscribe("LOGIN_SUCCESS", N),
    r.h.subscribe("LOGIN_RESET", (e) => {
        let { isMultiAccount: t } = e;
        t || N();
    }),
    r.h.subscribe("AGE_GATE_LOGOUT_UNDERAGE_NEW_USER", N),
    r.h.subscribe("CLOSE_SUSPENDED_USER", N),
    r.h.subscribe("CONNECTION_CLOSED", (e) => {
        let { code: t } = e;
        4004 === t && N();
    }),
    r.h.subscribe("CONNECTION_OPEN", (e) => {
        let { user: t, authSessionIdHash: n } = e;
        (g(t.id), S(n));
    }),
    r.h.subscribe("AUTH_SESSION_CHANGE", (e) => {
        let { authSessionIdHash: t } = e;
        return S(t);
    }),
    n.d(
        t,
        {},
        {
            A: {
                async fetchPopularGuildsFromCategories(e, t) {
                    try {
                        let { guilds: n } = (
                            await i.Bo.post({
                                url: E.Rsh.GRAVITY_TOPIC_GUILDS,
                                body: { category_ids: e, offset: t },
                                rejectWithError: !1,
                            })
                        ).body;
                        return (
                            r.h.dispatch({ type: "LOAD_ICYMI_POPULAR_GUILDS", categoryIds: e, guilds: n, offset: t }),
                            !0
                        );
                    } catch (e) {
                        c.A.captureException(e);
                    }
                    return !1;
                },
                async fetchDehydrated() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { isInitialLoad: t, isReloading: n, forceRefresh: a } = e;
                    if (
                        (g(d.default.getCurrentUser()?.id ?? null),
                        e.isDiscoverPickerCommit && null != I && ((f = {}), (h = { picks: l.A.getPicks() })),
                        (0, u.Lg)("fetchDehydrated"))
                    ) {
                        if ((0, s.SL)("fetchDehydrated"))
                            return (function (e) {
                                let { isInitialLoad: t, isReloading: n, isDiscoverPickerCommit: a } = e,
                                    o = d.default.getCurrentUser()?.id,
                                    u = a ? h : null,
                                    _ = f,
                                    I = m;
                                function p() {
                                    return I === m && null != o && d.default.getCurrentUser()?.id === o;
                                }
                                function T() {
                                    return p() && (0, s.SL)("fetchDehydrated");
                                }
                                let g = A,
                                    S = (async function () {
                                        try {
                                            await (async function () {
                                                if ((await g, !T() || (!a && _ !== f))) return;
                                                let e = u ?? h;
                                                n && r.h.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: !0 });
                                                try {
                                                    let a = new URLSearchParams();
                                                    for (let t of e?.picks ?? l.A.getPicks()) a.append("game_ids", t);
                                                    null != e && a.append("refresh", "true");
                                                    let s = Date.now(),
                                                        o = await i.Bo.get({
                                                            url: E.Rsh.GRAVITY_ITEMS_DEHYDRATED,
                                                            query: a.toString(),
                                                            rejectWithError: !1,
                                                        });
                                                    if (!T() || _ !== f) return;
                                                    (await r.h.dispatch({
                                                        type: "LOAD_ICYMI_DEHYDRATED",
                                                        items: o.body.items,
                                                        loadId: o.body.load_id,
                                                        startTime: s,
                                                        isReloading: n,
                                                        isInitialLoad: null != e || t,
                                                    }),
                                                        T() && _ === f && h === e && (h = null));
                                                } finally {
                                                    n &&
                                                        p() &&
                                                        r.h.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: !1 });
                                                }
                                            })();
                                        } catch (e) {
                                            c.A.captureException(e);
                                        }
                                    })();
                                return ((A = S), S);
                            })(e);
                        if (!e.isDiscoverPickerCommit) {
                            n && r.h.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: !0 });
                            try {
                                let e = Date.now(),
                                    s = await i.Bo.get({
                                        url: E.Rsh.GRAVITY_ITEMS_DEHYDRATED,
                                        query: { refresh: a },
                                        rejectWithError: !1,
                                    });
                                await r.h.dispatch({
                                    type: "LOAD_ICYMI_DEHYDRATED",
                                    items: s.body.items,
                                    loadId: s.body.load_id,
                                    startTime: e,
                                    isReloading: n,
                                    isInitialLoad: t,
                                });
                            } catch (e) {
                                c.A.captureException(e);
                            }
                        }
                    }
                },
                async gravityJoinGuild(e, t) {
                    if ((0, u.Lg)("gravityJoinGuild") && 0 !== e.length)
                        try {
                            return (
                                await i.Bo.post({
                                    url: E.Rsh.GRAVITY_JOIN_GUILD,
                                    body: { guild_ids: e, location: t },
                                    rejectWithError: !1,
                                }),
                                !0
                            );
                        } catch (e) {
                            return (c.A.captureException(e), !1);
                        }
                },
                async fetchForNotification(e, t) {
                    if ((0, u.Lg)("fetchInitial"))
                        try {
                            let n = await i.Bo.post({
                                url: E.Rsh.GRAVITY_ITEMS_HYDRATE,
                                body: { message_items: [{ channel_id: e, message_id: t }], activity_items: [] },
                                rejectWithError: !1,
                            });
                            if (0 === n.body.message_items.length) return;
                            r.h.dispatch({
                                type: "LOAD_ICYMI_FROM_NOTIFICATION",
                                messageItem: n.body.message_items[0],
                            });
                        } catch (e) {
                            c.A.captureException(e);
                        }
                },
                fetchForStatusNotification(e) {
                    (0, u.Lg)("fetchInitialStatus") &&
                        r.h.dispatch({ type: "LOAD_ICYMI_FROM_NOTIFICATION", customStatusItem: e });
                },
                async fetchHydrated(e, t, n) {
                    if (!(0, u.Lg)("fetchHydrated")) return;
                    let { messageItems: a, activityItems: s } = n;
                    if (0 === a.length && 0 === s.length)
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
                            url: E.Rsh.GRAVITY_ITEMS_HYDRATE,
                            body: { message_items: a, activity_items: s },
                            rejectWithError: !1,
                        });
                        r.h.dispatch({
                            type: "LOAD_ICYMI_HYDRATED",
                            requestMessageItems: a,
                            requestActivityItems: s,
                            messageItems: n.body.message_items,
                            activityItems: n.body.activity_items,
                            startingIndex: e,
                            endingIndex: t,
                        });
                    } catch (i) {
                        c.A.captureException(i);
                        let n = (0, _.V)(e, t);
                        r.h.dispatch({ type: "LOAD_ICYMI_HYDRATED_FAILED", hydrationId: n });
                    }
                },
                async getGuildChannelScores() {
                    if ((0, u.Lg)("guildChannelScores"))
                        try {
                            let e = await i.Bo.get({ url: E.Rsh.GRAVITY_CUSTOM_SCORES, rejectWithError: !1 });
                            r.h.dispatch({ type: "LOAD_ICYMI_CUSTOM_SCORES", scores: e.body });
                        } catch (e) {
                            c.A.captureException(e);
                        }
                },
                async getRecommendedGuilds() {
                    if ((0, u.Lg)("recommendedGuilds"))
                        try {
                            let e = await i.Bo.get({ url: E.Rsh.GRAVITY_RECOMMENDED_GUILDS, rejectWithError: !1 });
                            r.h.dispatch({ type: "LOAD_ICYMI_RECOMMENDED_GUILDS", guilds: e.body.guilds });
                        } catch (e) {
                            c.A.captureException(e);
                        }
                },
                async getMediaForCurrentStatus() {
                    if (!(0, u.Lg)("mediaForCurrentStatus")) return;
                    let e = a.G2.getSetting();
                    if (null != e && null != e.createdAtMs)
                        try {
                            let t = await i.Bo.get({ url: E.Rsh.GRAVITY_ATTACHMENTS, rejectWithError: !1 });
                            r.h.dispatch({
                                type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA",
                                attachments: t.body.attachments,
                                createdAtMs: Number(e.createdAtMs),
                            });
                        } catch (e) {
                            c.A.captureException(e);
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
            },
        },
    ));
