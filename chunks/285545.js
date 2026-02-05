n.d(t, { i: () => m }), n(321073);
var i = n(64700),
    r = n(311907),
    a = n(919796),
    l = n(4106),
    s = n(105971),
    o = n(800319),
    d = n(883344),
    c = n(596720),
    u = n(859524),
    A = n(639040),
    h = n(567061),
    _ = n(118972);
function m(e) {
    let { showDot: t, notificationItem: n } = e,
        [m, p] = i.useState(!1),
        { unreadItems: g, readItems: E, allUnreadItemsHydrated: f } = (0, A.A)(),
        I = (0, r.bG)([d.A], () => d.A.getVersion(), []),
        C = (0, r.bG)([d.A], () => !(d.A.isFirstPageHydrated() && I > 0));
    i.useEffect(() => {
        null != d.A.getLoadId() && s.k.trackFeedShown({ homeSessionId: "gravity" });
    }, [I]);
    let N = (0, r.bG)([d.A], () => d.A.isRefreshing(), []),
        T = (0, r.bG)([d.A], () => d.A.isHydrating(), []),
        [S, x] = i.useState([]),
        { loadId: v, lastScrollEventTimestamp: b } = (0, r.cf)([d.A], () => ({
            loadId: d.A.getLoadId(),
            lastScrollEventTimestamp: d.A.lastScrollEvent(),
        })),
        y = S.filter((e) => {
            let { item: t } = e;
            return !o.P.has(t.data.kind);
        })
            .map((e) => {
                let { item: t } = e;
                return t.id;
            })
            .pop(),
        L = (0, a.A)(y);
    i.useEffect(() => {
        if (N || C || null == L || null == y || y === L) return;
        let e = Date.now();
        e - b > _.N && (l.A.gravityScrollEvent(e), s.k.trackFeedFirstScrollStarted());
    }, [N, b, L, y, v, C]);
    let O = i.useCallback(
            (e) => {
                let { viewableItems: t } = e;
                if ((t.some((e) => "end" === e.item.data.kind) && p(!0), 0 === t.length)) return;
                x(t);
                let n = [],
                    i = (0, u.P0)(t),
                    r = Date.now();
                for (let e = i.length - 1; e >= 0; e--) {
                    let t = i[e];
                    null != t && n.push({ id: t.id, type: (0, c.xG)(t), timestamp: r++ });
                }
                n.length > 0 && l.A.ackGravityItems(n, !0),
                    s.k.trackItemShortImpression(
                        t,
                        i.map((e) => ({ id: e.id, type: (0, c.xG)(e) })),
                        I,
                    );
            },
            [I, p],
        ),
        R = i.useCallback(
            (e) => {
                let { viewableItems: t } = e;
                if (0 === t.length) return;
                let n = (0, u.P0)(t);
                s.k.trackItemLongImpression(
                    t,
                    n.map((e) => ({ id: e.id, type: (0, c.xG)(e) })),
                    I,
                ),
                    l.A.triggerItemsLongImpression(
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
            [I],
        ),
        P = i.useCallback((e) => {
            let { viewableItems: t } = e;
            l.A.startItemsDwell(
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
        j = i.useMemo(
            () => [
                {
                    viewabilityConfig: {
                        waitForInteraction: !1,
                        viewAreaCoveragePercentThreshold: 100,
                        minimumViewTime: 50,
                    },
                    onViewableItemsChanged: O,
                },
                {
                    viewabilityConfig: {
                        waitForInteraction: !1,
                        viewAreaCoveragePercentThreshold: 50,
                        minimumViewTime: 1e3,
                    },
                    onViewableItemsChanged: R,
                },
                {
                    viewabilityConfig: {
                        waitForInteraction: !1,
                        viewAreaCoveragePercentThreshold: 50,
                        minimumViewTime: 50,
                    },
                    onViewableItemsChanged: P,
                },
            ],
            [O, R, P],
        );
    i.useEffect(() => {
        l.A.openICYMITab();
    }, []);
    let D = (0, h.E)(t),
        { data: w, stickyHeaderIndices: M } = i.useMemo(() => {
            let e = [];
            return (
                C &&
                    null != n &&
                    n.type === c.Mm.CUSTOM_STATUS &&
                    e.push({
                        id: n.id,
                        timestamp: Date.now(),
                        data: { kind: "contentInventory", content: (0, u.YM)(n).activity },
                        score: n.score,
                        unread: !0,
                    }),
                C
                    ? e.push({ id: "loading", timestamp: 0, unread: !1, data: { kind: "loading" } })
                    : (g.forEach((t) => {
                          (0, u.yx)(t) || e.push(t);
                      }),
                      f && e.push({ id: "end", timestamp: 0, unread: !1, data: { kind: "end" } }),
                      E.length > 0 &&
                          E.forEach((t) => {
                              (0, u.yx)(t) || e.push(t);
                          }),
                      T && e.push({ id: "bottomLoading", timestamp: 0, unread: !1, data: { kind: "bottomLoading" } })),
                { data: e, stickyHeaderIndices: [] }
            );
        }, [C, n, g, f, E, T]);
    return {
        data: w,
        loading: C,
        version: I,
        visibleItemIds: S,
        endVisible: m,
        isRefreshing: N,
        handleOnRefresh: D,
        stickyHeaderIndices: M,
        viewabilityConfigCallbackPairs: j,
    };
}
