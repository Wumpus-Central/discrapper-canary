n.d(t, { i: () => g }), n(321073);
var i = n(64700),
    a = n(311907),
    l = n(919796),
    r = n(4106),
    s = n(105971),
    o = n(800319),
    d = n(883344),
    c = n(596720),
    u = n(859524),
    A = n(639040),
    h = n(567061),
    _ = n(563874),
    m = n(118972);
function g(e) {
    let { showDot: t, notificationItem: n } = e,
        [g, p] = i.useState(!1),
        { unreadItems: E, readItems: I, allUnreadItemsHydrated: f } = (0, A.A)(),
        C = (0, a.bG)([d.A], () => d.A.getVersion(), []),
        T = (0, a.bG)([d.A], () => !(d.A.isFirstPageHydrated() && C > 0));
    i.useEffect(() => {
        null != d.A.getLoadId() && s.k.trackFeedShown({ homeSessionId: "gravity" });
    }, [C]);
    let N = (0, a.bG)([d.A], () => d.A.isRefreshing(), []),
        S = (0, a.bG)([d.A], () => d.A.isHydrating(), []),
        [x, v] = i.useState([]),
        { loadId: b, lastScrollEventTimestamp: y } = (0, a.cf)([d.A], () => ({
            loadId: d.A.getLoadId(),
            lastScrollEventTimestamp: d.A.lastScrollEvent(),
        })),
        O = x
            .filter((e) => {
                let { item: t } = e;
                return !o.P.has(t.data.kind);
            })
            .map((e) => {
                let { item: t } = e;
                return t.id;
            })
            .pop(),
        L = (0, l.A)(O);
    i.useEffect(() => {
        if (N || T || null == L || null == O || O === L) return;
        let e = Date.now();
        e - y > m.N && (r.A.gravityScrollEvent(e), s.k.trackFeedFirstScrollStarted());
    }, [N, y, L, O, b, T]);
    let R = i.useCallback(
            (e) => {
                let { viewableItems: t } = e;
                if ((t.some((e) => "end" === e.item.data.kind) && p(!0), 0 === t.length)) return;
                v(t);
                let n = [],
                    i = (0, u.P0)(t),
                    a = Date.now();
                for (let e = i.length - 1; e >= 0; e--) {
                    let t = i[e];
                    null != t && n.push({ id: t.id, type: (0, c.xG)(t), timestamp: a++ });
                }
                n.length > 0 && r.A.ackGravityItems(n, !0),
                    s.k.trackItemShortImpression(
                        t,
                        i.map((e) => ({ id: e.id, type: (0, c.xG)(e) })),
                        C,
                    );
            },
            [C, p],
        ),
        P = i.useCallback(
            (e) => {
                let { viewableItems: t } = e;
                if (0 === t.length) return;
                let n = (0, u.P0)(t);
                s.k.trackItemLongImpression(
                    t,
                    n.map((e) => ({ id: e.id, type: (0, c.xG)(e) })),
                    C,
                ),
                    r.A.triggerItemsLongImpression(
                        t
                            .filter((e) => {
                                let { item: t } = e;
                                return !o.P.has(t.data.kind);
                            })
                            .map((e) => {
                                let { item: t, index: n } = e;
                                return {
                                    itemId: t.id,
                                    itemType: (0, u.px)(t),
                                    triggerType: "list",
                                    itemFeedIndex: n,
                                    itemScore: t.score ?? null,
                                    itemChannelType: t.channelType ?? null,
                                    isInitiallyVisible: !1,
                                };
                            }),
                    );
            },
            [C],
        ),
        D = i.useCallback((e) => {
            let { viewableItems: t } = e;
            r.A.startItemsDwell(
                t
                    .filter((e) => {
                        let { item: t } = e;
                        return !o.P.has(t.data.kind);
                    })
                    .map((e) => {
                        let { item: t, index: n } = e;
                        return {
                            itemId: t.id,
                            itemType: (0, u.px)(t),
                            triggerType: "list",
                            itemFeedIndex: n,
                            itemScore: t.score ?? null,
                            itemChannelType: t.channelType ?? null,
                            isInitiallyVisible: !1,
                        };
                    }),
            );
        }, []),
        M = i.useMemo(
            () => [
                {
                    viewabilityConfig: {
                        waitForInteraction: !1,
                        viewAreaCoveragePercentThreshold: 100,
                        minimumViewTime: 50,
                    },
                    onViewableItemsChanged: R,
                },
                {
                    viewabilityConfig: {
                        waitForInteraction: !1,
                        viewAreaCoveragePercentThreshold: 50,
                        minimumViewTime: 1e3,
                    },
                    onViewableItemsChanged: P,
                },
                {
                    viewabilityConfig: {
                        waitForInteraction: !1,
                        viewAreaCoveragePercentThreshold: 50,
                        minimumViewTime: 50,
                    },
                    onViewableItemsChanged: D,
                },
            ],
            [R, P, D],
        );
    i.useEffect(() => {
        r.A.openICYMITab();
    }, []);
    let j = (0, h.E)(t),
        w = (0, _.n)(),
        { data: U, stickyHeaderIndices: G } = i.useMemo(() => {
            let e = [];
            return (
                T &&
                    null != n &&
                    n.type === c.Mm.CUSTOM_STATUS &&
                    e.push({
                        id: n.id,
                        timestamp: Date.now(),
                        data: { kind: "contentInventory", content: (0, u.YM)(n).activity },
                        score: n.score,
                        unread: !0,
                    }),
                T
                    ? e.push({ id: "loading", timestamp: 0, unread: !1, data: { kind: "loading" } })
                    : (w && e.push({ id: "sunsetBanner", timestamp: 0, unread: !1, data: { kind: "sunsetBanner" } }),
                      E.forEach((t) => {
                          (0, u.yx)(t) || e.push(t);
                      }),
                      f && e.push({ id: "end", timestamp: 0, unread: !1, data: { kind: "end" } }),
                      I.length > 0 &&
                          I.forEach((t) => {
                              (0, u.yx)(t) || e.push(t);
                          }),
                      S && e.push({ id: "bottomLoading", timestamp: 0, unread: !1, data: { kind: "bottomLoading" } })),
                { data: e, stickyHeaderIndices: [] }
            );
        }, [T, n, E, f, I, S, w]);
    return {
        data: U,
        loading: T,
        version: C,
        visibleItemIds: x,
        endVisible: g,
        isRefreshing: N,
        handleOnRefresh: j,
        stickyHeaderIndices: G,
        viewabilityConfigCallbackPairs: M,
    };
}
