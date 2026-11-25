(n(323874), n(14289), n(35956));
var i = n(620632),
    r = n(73153),
    a = n(253932),
    s = n(841643),
    l = n(113384),
    o = n(46653),
    d = n(287809),
    c = n(856383),
    u = n(417692),
    _ = n(983253),
    E = n(335934),
    A = n(522606),
    f = n(652215);
let h = Promise.resolve(),
    I = null,
    p = 0,
    m = 0,
    g = 0,
    T = new Set(),
    S = {},
    N = !1,
    C = null,
    O = o.default.isAuthenticated() ? (o.default.getId() ?? null) : null,
    R = null != O ? (o.default.getAuthSessionIdHash() ?? null) : null,
    L = {};
function y() {
    for (let e of T) e();
}
function D() {
    ((C = null), (S = {}), (m = 0), (g = 0), I?.abort(), (L = {}), _.C2.resetSession());
}
function b(e) {
    O !== e && (D(), (O = e), (R = null));
}
function v(e) {
    null != e && (null != R && R !== e && D(), (R = e));
}
function P() {
    (D(), (O = null), (R = null));
}
(r.h.subscribe("LOGOUT", P),
    r.h.subscribe("LOGIN_SUCCESS", P),
    r.h.subscribe("LOGIN_RESET", (e) => {
        let { isMultiAccount: t } = e;
        t || P();
    }),
    r.h.subscribe("AGE_GATE_LOGOUT_UNDERAGE_NEW_USER", P),
    r.h.subscribe("CLOSE_SUSPENDED_USER", P),
    r.h.subscribe("CONNECTION_CLOSED", (e) => {
        let { code: t } = e;
        4004 === t && P();
    }),
    r.h.subscribe("CONNECTION_OPEN", (e) => {
        let { user: t, authSessionIdHash: n } = e;
        (b(t.id), v(n));
    }),
    r.h.subscribe("AUTH_SESSION_CHANGE", (e) => {
        let { authSessionIdHash: t } = e;
        v(t);
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
                                url: f.Rsh.GRAVITY_TOPIC_GUILDS,
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
                subscribeDiscoverRequests: (e) => (
                    T.add(e),
                    () => {
                        T.delete(e);
                    }
                ),
                hasDiscoverRequestInFlight: () => p > 0,
                async fetchDehydrated() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { isInitialLoad: t, isReloading: n, forceRefresh: a } = e;
                    if (
                        (b(d.default.getCurrentUser()?.id ?? null),
                        v(o.default.getAuthSessionIdHash()),
                        e.isDiscoverPickerCommit &&
                            null != O &&
                            (I?.abort(),
                            (S = {}),
                            (C = { picks: l.A.getPicks() }),
                            _.C2.observeGate((0, s.SL)("fetchDehydrated")),
                            _.C2.commitPicker(),
                            !(async function (e, t) {
                                try {
                                    await r.h.dispatch({
                                        type: "DISCOVER_PICKER_COMMIT",
                                        identity: e,
                                        clearSnapshot: t,
                                    });
                                } catch (e) {
                                    c.A.captureException(e);
                                }
                            })(
                                _.C2.capture(O, o.default.getAuthSessionIdHash() ?? null),
                                e.clearDiscoverSnapshot ?? !1,
                            )),
                        (0, E.Lg)("fetchDehydrated"))
                    ) {
                        if ((0, s.SL)("fetchDehydrated")) {
                            if (e.isDiscoverBackground && (p > 0 || Math.max(0, m + 6e4 - Date.now()) > 0)) return;
                            return (function (e) {
                                let { isInitialLoad: t, isReloading: n, isDiscoverPickerCommit: a } = e,
                                    E = d.default.getCurrentUser()?.id,
                                    A = a ? C : null,
                                    T = S,
                                    O = L;
                                _.C2.observeGate((0, s.SL)("fetchDehydrated"));
                                let R = _.C2.capture(E ?? null, o.default.getAuthSessionIdHash() ?? null),
                                    D = !1,
                                    b = null,
                                    v = null;
                                function P() {
                                    return (
                                        O === L &&
                                        null != E &&
                                        o.default.isAuthenticated() &&
                                        o.default.getId() === E &&
                                        d.default.getCurrentUser()?.id === E &&
                                        (o.default.getAuthSessionIdHash() ?? null) === R.authSessionIdHash
                                    );
                                }
                                function M() {
                                    return P() && _.C2.canRun(R, (0, s.SL)("fetchDehydrated"));
                                }
                                function U() {
                                    return M() && T === S && _.C2.matches(R);
                                }
                                let w = h;
                                p++;
                                let G = (async function () {
                                    try {
                                        await (async function () {
                                            if ((await w, !M() || (!a && T !== S))) return;
                                            let e = A ?? C;
                                            if (
                                                (U() &&
                                                    (await r.h.dispatch({
                                                        type: "DISCOVER_REQUEST_STARTED",
                                                        identity: R,
                                                    }),
                                                    (D = !0)),
                                                M() && (a || T === S))
                                            ) {
                                                n && r.h.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: !0 });
                                                try {
                                                    if (Date.now() < g)
                                                        throw ((b = g), Error("Discover is rate limited"));
                                                    let a = new URLSearchParams(),
                                                        s = e?.picks ?? l.A.getPicks();
                                                    for (let e of s) a.append("game_ids", e);
                                                    let o = null != e || (!N && s.length > 0);
                                                    o && a.append("refresh", "true");
                                                    let d = Date.now();
                                                    ((m = d), (I = v = new AbortController()));
                                                    let c = v.signal,
                                                        _ = await (0, u.D)(v, () =>
                                                            i.Bo.get({
                                                                url: f.Rsh.GRAVITY_ITEMS_DEHYDRATED,
                                                                query: a.toString(),
                                                                rejectWithError: !1,
                                                                failImmediatelyWhenRateLimited: !0,
                                                                signal: c,
                                                                timeout: { deadline: 3e4 },
                                                            }),
                                                        );
                                                    if (!U()) return;
                                                    if (
                                                        ("broker_error" === _.body.error_code ||
                                                            "broker_timeout" === _.body.error_code ||
                                                            "persist_error" === _.body.error_code) &&
                                                        0 === _.body.items.length
                                                    )
                                                        throw Error("Discover feed failed");
                                                    (await r.h.dispatch({
                                                        type: "LOAD_ICYMI_DEHYDRATED",
                                                        items: _.body.items,
                                                        loadId: _.body.load_id,
                                                        startTime: d,
                                                        isReloading: n,
                                                        isInitialLoad: null != e || t,
                                                        discoverRequest: R,
                                                    }),
                                                        U() &&
                                                            null == _.body.error_code &&
                                                            (o && (N = !0), C === e && (C = null)));
                                                } finally {
                                                    (I === v && (I = null),
                                                        n &&
                                                            P() &&
                                                            r.h.dispatch({
                                                                type: "ICYMI_SET_REFRESHING",
                                                                refreshing: !1,
                                                            }));
                                                }
                                            }
                                        })();
                                    } catch (e) {
                                        if (D && U()) {
                                            if (
                                                null != e &&
                                                "object" == typeof e &&
                                                "status" in e &&
                                                429 === e.status
                                            ) {
                                                let t = e.retryAfter ?? e.body?.retry_after,
                                                    n =
                                                        "number" == typeof t && Number.isFinite(t) && t >= 0
                                                            ? Math.max(1, t)
                                                            : 5;
                                                b = g = Math.max(g, Date.now() + 1e3 * n);
                                            }
                                            try {
                                                await r.h.dispatch({
                                                    type: "DISCOVER_REQUEST_FAILED",
                                                    identity: R,
                                                    retryAfterAt: b,
                                                });
                                            } catch (e) {
                                                c.A.captureException(e);
                                            }
                                        }
                                    } finally {
                                        (p--, y());
                                    }
                                })();
                                return ((h = G), y(), G);
                            })(e);
                        }
                        if (!e.isDiscoverPickerCommit) {
                            n && r.h.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: !0 });
                            try {
                                let e = Date.now(),
                                    s = await i.Bo.get({
                                        url: f.Rsh.GRAVITY_ITEMS_DEHYDRATED,
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
                    if ((0, E.Lg)("gravityJoinGuild") && 0 !== e.length)
                        try {
                            return (
                                await i.Bo.post({
                                    url: f.Rsh.GRAVITY_JOIN_GUILD,
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
                    if ((0, E.Lg)("fetchInitial"))
                        try {
                            let n = await i.Bo.post({
                                url: f.Rsh.GRAVITY_ITEMS_HYDRATE,
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
                    (0, E.Lg)("fetchInitialStatus") &&
                        r.h.dispatch({ type: "LOAD_ICYMI_FROM_NOTIFICATION", customStatusItem: e });
                },
                async fetchHydrated(e, t, n) {
                    if (!(0, E.Lg)("fetchHydrated")) return;
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
                            url: f.Rsh.GRAVITY_ITEMS_HYDRATE,
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
                        let n = (0, A.V)(e, t);
                        r.h.dispatch({ type: "LOAD_ICYMI_HYDRATED_FAILED", hydrationId: n });
                    }
                },
                async getGuildChannelScores() {
                    if ((0, E.Lg)("guildChannelScores"))
                        try {
                            let e = await i.Bo.get({ url: f.Rsh.GRAVITY_CUSTOM_SCORES, rejectWithError: !1 });
                            r.h.dispatch({ type: "LOAD_ICYMI_CUSTOM_SCORES", scores: e.body });
                        } catch (e) {
                            c.A.captureException(e);
                        }
                },
                async getRecommendedGuilds() {
                    if ((0, E.Lg)("recommendedGuilds"))
                        try {
                            let e = await i.Bo.get({ url: f.Rsh.GRAVITY_RECOMMENDED_GUILDS, rejectWithError: !1 });
                            r.h.dispatch({ type: "LOAD_ICYMI_RECOMMENDED_GUILDS", guilds: e.body.guilds });
                        } catch (e) {
                            c.A.captureException(e);
                        }
                },
                async getMediaForCurrentStatus() {
                    if (!(0, E.Lg)("mediaForCurrentStatus")) return;
                    let e = a.G2.getSetting();
                    if (null != e && null != e.createdAtMs)
                        try {
                            let t = await i.Bo.get({ url: f.Rsh.GRAVITY_ATTACHMENTS, rejectWithError: !1 });
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
