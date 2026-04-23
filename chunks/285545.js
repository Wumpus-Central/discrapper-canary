n.d(t, { i: () => v }), n(321073);
var a = n(64700),
    i = n(311907),
    s = n(919796),
    l = n(4106),
    r = n(105971),
    d = n(800319),
    o = n(883344),
    c = n(596720),
    u = n(859524),
    m = n(639040),
    h = n(567061),
    g = n(563874),
    p = n(118972);
function v(e) {
    let { showDot: t, notificationItem: n } = e,
        [v, x] = a.useState(!1),
        { unreadItems: A, readItems: f, allUnreadItemsHydrated: _ } = (0, m.A)(),
        y = (0, i.bG)([o.A], () => o.A.getVersion(), []),
        b = (0, i.bG)([o.A], () => !(o.A.isFirstPageHydrated() && y > 0));
    a.useEffect(() => {
        null != o.A.getLoadId() && r.k.trackFeedShown({ homeSessionId: "gravity" });
    }, [y]);
    let I = (0, i.bG)([o.A], () => o.A.isRefreshing(), []),
        j = (0, i.bG)([o.A], () => o.A.isHydrating(), []),
        [E, k] = a.useState([]),
        { loadId: T, lastScrollEventTimestamp: C } = (0, i.cf)([o.A], () => ({
            loadId: o.A.getLoadId(),
            lastScrollEventTimestamp: o.A.lastScrollEvent(),
        })),
        w = E.filter((e) => {
            let { item: t } = e;
            return !d.P.has(t.data.kind);
        })
            .map((e) => {
                let { item: t } = e;
                return t.id;
            })
            .pop(),
        N = (0, s.A)(w);
    a.useEffect(() => {
        if (I || b || null == N || null == w || w === N) return;
        let e = Date.now();
        e - C > p.N && (l.A.gravityScrollEvent(e), r.k.trackFeedFirstScrollStarted());
    }, [I, C, N, w, T, b]);
    let S = a.useCallback(
            (e) => {
                let { viewableItems: t } = e;
                if ((t.some((e) => "end" === e.item.data.kind) && x(!0), 0 === t.length)) return;
                k(t);
                let n = [],
                    a = (0, u.P0)(t),
                    i = Date.now();
                for (let e = a.length - 1; e >= 0; e--) {
                    let t = a[e];
                    null != t && n.push({ id: t.id, type: (0, c.xG)(t), timestamp: i++ });
                }
                n.length > 0 && l.A.ackGravityItems(n, !0),
                    r.k.trackItemShortImpression(
                        t,
                        a.map((e) => ({ id: e.id, type: (0, c.xG)(e) })),
                        y,
                    );
            },
            [y, x],
        ),
        M = a.useCallback(
            (e) => {
                let { viewableItems: t } = e;
                if (0 === t.length) return;
                let n = (0, u.P0)(t);
                r.k.trackItemLongImpression(
                    t,
                    n.map((e) => ({ id: e.id, type: (0, c.xG)(e) })),
                    y,
                ),
                    l.A.triggerItemsLongImpression(
                        t
                            .filter((e) => {
                                let { item: t } = e;
                                return !d.P.has(t.data.kind);
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
            [y],
        ),
        G = a.useCallback((e) => {
            let { viewableItems: t } = e;
            l.A.startItemsDwell(
                t
                    .filter((e) => {
                        let { item: t } = e;
                        return !d.P.has(t.data.kind);
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
        L = a.useMemo(
            () => [
                {
                    viewabilityConfig: {
                        waitForInteraction: !1,
                        viewAreaCoveragePercentThreshold: 100,
                        minimumViewTime: 50,
                    },
                    onViewableItemsChanged: S,
                },
                {
                    viewabilityConfig: {
                        waitForInteraction: !1,
                        viewAreaCoveragePercentThreshold: 50,
                        minimumViewTime: 1e3,
                    },
                    onViewableItemsChanged: M,
                },
                {
                    viewabilityConfig: {
                        waitForInteraction: !1,
                        viewAreaCoveragePercentThreshold: 50,
                        minimumViewTime: 50,
                    },
                    onViewableItemsChanged: G,
                },
            ],
            [S, M, G],
        );
    a.useEffect(() => {
        l.A.openICYMITab();
    }, []);
    let D = (0, h.E)(t),
        R = (0, g.n)(),
        { data: U, stickyHeaderIndices: V } = a.useMemo(() => {
            let e = [];
            return (
                b &&
                    null != n &&
                    n.type === c.Mm.CUSTOM_STATUS &&
                    e.push({
                        id: n.id,
                        timestamp: Date.now(),
                        data: { kind: "contentInventory", content: (0, u.YM)(n).activity },
                        score: n.score,
                        unread: !0,
                    }),
                b
                    ? e.push({ id: "loading", timestamp: 0, unread: !1, data: { kind: "loading" } })
                    : (R && e.push({ id: "sunsetBanner", timestamp: 0, unread: !1, data: { kind: "sunsetBanner" } }),
                      A.forEach((t) => {
                          (0, u.yx)(t) || e.push(t);
                      }),
                      _ && e.push({ id: "end", timestamp: 0, unread: !1, data: { kind: "end" } }),
                      f.length > 0 &&
                          f.forEach((t) => {
                              (0, u.yx)(t) || e.push(t);
                          }),
                      j && e.push({ id: "bottomLoading", timestamp: 0, unread: !1, data: { kind: "bottomLoading" } })),
                { data: e, stickyHeaderIndices: [] }
            );
        }, [b, n, A, _, f, j, R]);
    return {
        data: U,
        loading: b,
        version: y,
        visibleItemIds: E,
        endVisible: v,
        isRefreshing: I,
        handleOnRefresh: D,
        stickyHeaderIndices: V,
        viewabilityConfigCallbackPairs: L,
    };
}
