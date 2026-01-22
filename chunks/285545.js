n.d(t, {
    i: () => A,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(311907),
    l = n(919796),
    a = n(4106),
    s = n(105971),
    o = n(800319),
    c = n(883344),
    u = n(596720),
    d = n(859524),
    p = n(639040),
    f = n(567061),
    h = n(118972);

function A(e) {
    let { showDot: t, notificationItem: n } = e,
        [A, g] = r.useState(!1),
        { unreadItems: m, readItems: b, allUnreadItemsHydrated: _ } = (0, p.A)(),
        E = (0, i.bG)([c.A], () => c.A.getVersion(), []),
        O = (0, i.bG)([c.A], () => !(c.A.isFirstPageHydrated() && E > 0));
    r.useEffect(() => {
        null != c.A.getLoadId() &&
            s.k.trackFeedShown({
                homeSessionId: "gravity",
            });
    }, [E]);
    let y = (0, i.bG)([c.A], () => c.A.isRefreshing(), []),
        I = (0, i.bG)([c.A], () => c.A.isHydrating(), []),
        [v, S] = r.useState([]),
        { loadId: C, lastScrollEventTimestamp: N } = (0, i.cf)([c.A], () => ({
            loadId: c.A.getLoadId(),
            lastScrollEventTimestamp: c.A.lastScrollEvent(),
        })),
        T = v
            .filter((e) => {
                let { item: t } = e;
                return !o.P.has(t.data.kind);
            })
            .map((e) => {
                let { item: t } = e;
                return t.id;
            })
            .pop(),
        j = (0, l.A)(T);
    r.useEffect(() => {
        if (y || O || null == j || null == T || T === j) return;
        let e = Date.now();
        e - N > h.N && (a.A.gravityScrollEvent(e), s.k.trackFeedFirstScrollStarted());
    }, [y, N, j, T, C, O]);
    let x = r.useCallback(
            (e) => {
                let { viewableItems: t } = e;
                if ((t.some((e) => "end" === e.item.data.kind) && g(!0), 0 === t.length)) return;
                S(t);
                let n = [],
                    r = (0, d.P0)(t),
                    i = Date.now();
                for (let e = r.length - 1; e >= 0; e--) {
                    let t = r[e];
                    null != t &&
                        n.push({
                            id: t.id,
                            type: (0, u.xG)(t),
                            timestamp: i++,
                        });
                }
                n.length > 0 && a.A.ackGravityItems(n, !0),
                    s.k.trackItemShortImpression(
                        t,
                        r.map((e) => ({
                            id: e.id,
                            type: (0, u.xG)(e),
                        })),
                        E,
                    );
            },
            [E, g],
        ),
        P = r.useCallback(
            (e) => {
                let { viewableItems: t } = e;
                if (0 === t.length) return;
                let n = (0, d.P0)(t);
                s.k.trackItemLongImpression(
                    t,
                    n.map((e) => ({
                        id: e.id,
                        type: (0, u.xG)(e),
                    })),
                    E,
                ),
                    a.A.triggerItemsLongImpression(
                        t
                            .filter((e) => {
                                let { item: t } = e;
                                return !o.P.has(t.data.kind);
                            })
                            .map((e) => {
                                var t, n;
                                let { item: r, index: i } = e;
                                return {
                                    itemId: r.id,
                                    itemType: (0, d.px)(r),
                                    triggerType: "list",
                                    itemFeedIndex: i,
                                    itemScore: null != (t = r.score) ? t : null,
                                    itemChannelType: null != (n = r.channelType) ? n : null,
                                    isInitiallyVisible: !1,
                                };
                            }),
                    );
            },
            [E],
        ),
        w = r.useCallback((e) => {
            let { viewableItems: t } = e;
            a.A.startItemsDwell(
                t
                    .filter((e) => {
                        let { item: t } = e;
                        return !o.P.has(t.data.kind);
                    })
                    .map((e) => {
                        var t, n;
                        let { item: r, index: i } = e;
                        return {
                            itemId: r.id,
                            itemType: (0, d.px)(r),
                            triggerType: "list",
                            itemFeedIndex: i,
                            itemScore: null != (t = r.score) ? t : null,
                            itemChannelType: null != (n = r.channelType) ? n : null,
                            isInitiallyVisible: !1,
                        };
                    }),
            );
        }, []),
        L = r.useMemo(
            () => [
                {
                    viewabilityConfig: {
                        waitForInteraction: !1,
                        viewAreaCoveragePercentThreshold: 100,
                        minimumViewTime: 50,
                    },
                    onViewableItemsChanged: x,
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
                    onViewableItemsChanged: w,
                },
            ],
            [x, P, w],
        );
    r.useEffect(() => {
        a.A.openICYMITab();
    }, []);
    let R = (0, f.E)(t),
        { data: D, stickyHeaderIndices: M } = r.useMemo(() => {
            let e = [];
            return (
                O &&
                    null != n &&
                    n.type === u.Mm.CUSTOM_STATUS &&
                    e.push({
                        id: n.id,
                        timestamp: Date.now(),
                        data: {
                            kind: "contentInventory",
                            content: (0, d.YM)(n).activity,
                        },
                        score: n.score,
                        unread: !0,
                    }),
                O
                    ? e.push({
                          id: "loading",
                          timestamp: 0,
                          unread: !1,
                          data: {
                              kind: "loading",
                          },
                      })
                    : (m.forEach((t) => {
                          (0, d.yx)(t) || e.push(t);
                      }),
                      _ &&
                          e.push({
                              id: "end",
                              timestamp: 0,
                              unread: !1,
                              data: {
                                  kind: "end",
                              },
                          }),
                      b.length > 0 &&
                          b.forEach((t) => {
                              (0, d.yx)(t) || e.push(t);
                          }),
                      I &&
                          e.push({
                              id: "bottomLoading",
                              timestamp: 0,
                              unread: !1,
                              data: {
                                  kind: "bottomLoading",
                              },
                          })),
                {
                    data: e,
                    stickyHeaderIndices: [],
                }
            );
        }, [O, n, m, _, b, I]);
    return {
        data: D,
        loading: O,
        version: E,
        visibleItemIds: v,
        endVisible: A,
        isRefreshing: y,
        handleOnRefresh: R,
        stickyHeaderIndices: M,
        viewabilityConfigCallbackPairs: L,
    };
}
