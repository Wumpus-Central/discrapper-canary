n.r(t),
    n.d(t, {
        default: () => eA,
    }),
    n(747238),
    n(896048),
    n(733351);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(756287),
    c = n.n(s),
    o = n(942381),
    d = n(837381),
    u = n(884362),
    m = n(741918),
    h = n(371444),
    f = n(311907),
    g = n(554146),
    x = n(421380),
    b = n(397927),
    p = n(738876),
    j = n(765671),
    v = n(964486),
    y = n(775602),
    A = n(47167),
    C = n(379848),
    O = n(870136),
    N = n(575293),
    S = n(857071),
    T = n(228098),
    _ = n(157259),
    E = n(212007),
    w = n(376708),
    R = n(715757),
    k = n(954540),
    P = n(378570),
    I = n(940382),
    M = n(970278),
    D = n(424798),
    L = n(406704),
    U = n(747926),
    F = n(761640),
    G = n(734057),
    z = n(31717),
    H = n(834942),
    V = n(309010),
    B = n(522602),
    K = n(531685),
    W = n(234320),
    q = n(947094),
    J = n(919577),
    X = n(207777),
    Q = n(422844),
    Y = n(435470),
    Z = n(706849),
    $ = n(613999),
    ee = n(853742),
    et = n(978733),
    en = n(696583),
    el = n(6208),
    er = n(835369),
    ea = n(218152),
    ei = n(559351),
    es = n(891046),
    ec = n(133348),
    eo = n(376310),
    ed = n(414368),
    eu = n(123653),
    em = n(337666),
    eh = n(848551),
    ef = n(375907),
    eg = n(652215),
    ex = n(37411),
    eb = n(985018),
    ep = n(1004);

function ej(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function ev(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function ey(e, t) {
    if (null == e) return {};
    var n,
        l,
        r,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
            (l = n[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
        return a;
    }
    if (
        ((a = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = {},
                a = Object.getOwnPropertyNames(e);
            for (l = 0; l < a.length; l++)
                (n = a[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            (l = n[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
    return a;
}

function eA(e) {
    let { channel: t, guild: n, sidebarState: r } = e;
    return (0, l.jsx)(
        ea.Cp,
        {
            channel: t,
            children: (0, l.jsx)(eE, {
                channel: t,
                guild: n,
                sidebarState: r,
            }),
        },
        t.id,
    );
}
let eC = new ed.JT({
    minWidth: 320,
    maxWidth: 450,
    gap: 16,
});

function eO(e) {
    return "forum-grid-header-section-".concat(e);
}

function eN(e) {
    let { itemRole: t, coords: n, section: r } = e;
    return (0, l.jsx)(
        "div",
        {
            className: i()(ep.card, ep.archivedDividerRow, ep.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, l.jsx)("div", {
                className: ep.emptyMainCard,
                children: (0, l.jsx)(b.Heading, {
                    variant: "eyebrow",
                    className: ep.archivedDivider,
                    id: eO(r),
                    children: eb.intl.string(eb.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}

function eS(e) {
    let { section: t, coords: n, key: r, isShowingSearchResult: a, hasActiveThreads: i } = e;
    return () =>
        2 === t && !a && i
            ? (0, l.jsx)(
                  eN,
                  {
                      section: t,
                      coords:
                          null == n
                              ? void 0
                              : ev(ej({}, n), {
                                    position: "absolute",
                                }),
                      itemRole: "section",
                  },
                  r,
              )
            : null;
}

function eT(e, t) {
    return "card-".concat(e, "-").concat(t);
}

function e_(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}

function eE(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: a,
            editorAdditionRowHeight: s,
            listViewCardHeights: c,
            formOpen: u,
            name: m,
        } = (0, ea.kU)((e) => {
            let {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: l,
                formOpen: r,
                cardHeightVersion: a,
                name: i,
            } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: l,
                formOpen: r,
                name: i,
                cardHeightVersion: a,
            };
        }, o.x),
        {
            activeThreadIds: g,
            archivedThreadIds: x,
            searchResults: j,
            canLoadMore: A,
            loadMore: C,
            activeThreadsLoading: O,
            archivedThreadsLoading: N,
            loading: R,
            isSearchLoading: L,
            layoutType: H,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: l, tagSetting: r } = (0, Q.R)(e.id),
                a = (0, Y.V3)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: r,
                    shouldAutomaticallyAck: !0,
                }),
                i = (0, f.bG)([M.A, S.A], () => {
                    let t = M.A.hasLoaded(e.guild_id),
                        n = S.A.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: s, canLoadMore: c, loadMore: o, loading: d } = (0, D.Fr)(e, t, n, r),
                { searchResults: u, isSearchLoading: m } = (0, Y.cA)({
                    channelId: e.id,
                });
            return (
                (0, Y.yz)(e, t, n, r),
                {
                    activeThreadIds: a,
                    archivedThreadIds: s,
                    searchResults: u,
                    canLoadMore: c,
                    loadMore: o,
                    loading: i || d || m,
                    archivedThreadsLoading: d,
                    activeThreadsLoading: i,
                    isSearchLoading: m,
                    layoutType: l,
                }
            );
        })(t),
        B = g.length > 0,
        K = B || x.length > 0,
        W = (0, T.A)(t),
        { tagFilter: X, tagSetting: en } = (0, Q.R)(t.id);
    (0, Y.o7)(t, X, en, u),
        (0, v.Ay)(() => {
            !u && m.length > 0 && J.A.updateForumSearchQuery(t.id, m);
        });
    let el = (0, Y.O3)(t),
        ei = (0, Y.An)(t),
        ec = r.useRef(null),
        { observePostVisibilityAnalytics: eo } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: l } = e;
            Z.A.useForumChannelSeenManager({
                guildId: t,
                channelId: n,
            });
            let a = r.useRef(null),
                i = r.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let l = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, $.xx)(e, t, l) : (0, $.O_)(e, t, l);
                    }
                }, []);
            return (
                r.useEffect(() => {
                    var e;
                    let t = null == (e = l.current) ? void 0 : e.getScrollerNode();
                    if (null != t)
                        return (
                            (a.current = new IntersectionObserver((e) => i(n, e), {
                                root: t,
                                rootMargin: "0px 100000px 0px 100000px",
                                threshold: 0.5,
                            })),
                            () => {
                                var e;
                                null == (e = a.current) || e.disconnect(), (a.current = null);
                            }
                        );
                }, [n, i, l]),
                {
                    observePostVisibilityAnalytics: r.useCallback(
                        (e, t) => {
                            var l;
                            null == e ? (0, $.O_)(n, t, Date.now()) : null == (l = a.current) || l.observe(e);
                        },
                        [n],
                    ),
                }
            );
        })({
            scrollerRef: ec,
            channelId: t.id,
            guildId: t.guild_id,
        }),
        eu = H === h.C.GRID,
        { searchQuery: eA } = (0, Y.cA)({
            channelId: t.id,
        }),
        eN = null != j && null != eA && eA.length > 0,
        eE = r.useRef(null),
        { containerRef: eP, containerWidth: eM } = (0, em.A)();
    r.useEffect(() => {
        if (null == eE.current && null != t.id) {
            let e = F.Ay.getSidebarState(t.id);
            null != e && e.type === I.PE.VIEW_THREAD && (eE.current = e.channelId);
        }
    }, [t.id]);
    let { columns: eD } = r.useMemo(() => (eu ? eC.getRenderOptions(eM) : ed.CV), [eu, eM]),
        eL = r.useMemo(() => (R ? Math.round((window.innerHeight - 200) / 118) : 0), [R]),
        { showResolvedFlags: eU } = (0, E.T)(t.id),
        eF = t.isModeratorReportChannel(),
        eG = r.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ed.iX)(eC.getWidth(eM))) * eD;
            return O ? e : 0;
        }, [eM, eD, O]),
        ez = r.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ed.iX)(eC.getWidth(eM))) * eD;
            return N ? e : 0;
        }, [eM, eD, N]),
        eH = r.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ed.iX)(eC.getWidth(eM))) * eD;
            return L && eN ? e : 0;
        }, [eM, eD, L, eN]),
        eV = r.useMemo(() => {
            if (eu)
                if (!el && eN) return [1, 0];
                else if (!ei) return [1, g.length + eG, 0];
                else if (eN) return [1, j.length + eH, 0];
                else if (eF && !eU) return [1, g.length + eG, 0];
                else return [1, g.length + eG, x.length + ez];
            if (!el && eN) return [1, 1];
            if (!ei) return [1, g.length, 1];
            if (eN) return [1, j.length, 0, eL];
            if (eF && !eU) return [1, g.length, 0, eL];
            else return [1, g.length, x.length, eL];
        }, [eu, eN, g.length, x.length, el, ei, eL, j, eG, ez, eH, eU, eF]),
        eB = r.useMemo(
            () =>
                !el && eN
                    ? [[], []]
                    : ei
                      ? eN
                          ? [[], j, [], []]
                          : eF && !eU
                            ? [[], g, [], []]
                            : [[], g, x, []]
                      : [[], g, []],
            [eN, el, ei, j, g, x, eU, eF],
        ),
        eK = r.useCallback(
            (e, n) => {
                (0, ee.Ml)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: {
                        page: eg.liQ.GUILD_CHANNEL,
                        section: eg.JJy.FORUM_CHANNEL_POST,
                    },
                }),
                    n
                        ? (0, P.N9)(e, {
                              source: ex.H9.BROWSER,
                          })
                        : ((eE.current = e.id), (0, U.JA)(e));
            },
            [t.guild_id, t.id, eE],
        ),
        [eW, eq] = r.useState(a + s - 24),
        eJ = r.useCallback(
            (e, n, r) =>
                0 === e
                    ? (0, l.jsx)(
                          eI,
                          {
                              channel: t,
                              isEmpty: !B,
                              isSearchLoading: L,
                              numResults: null == j ? void 0 : j.length,
                              coords: n,
                              onHeightChange: eq,
                              children:
                                  !R &&
                                  (0, l.jsx)(
                                      et.A,
                                      {
                                          channel: t,
                                          hasAnyThread: K,
                                          hasActiveThreads: B,
                                      },
                                      t.id,
                                  ),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || ei
                      ? 1 === e && eN && !el
                          ? (0, l.jsx)(
                                eR,
                                {
                                    channel: t,
                                    coords: n,
                                },
                                "archive-or-search-result",
                            )
                          : r()
                      : (0, l.jsx)(
                            ew,
                            {
                                channel: t,
                                coords: n,
                            },
                            "archived-missing-reading-history-perm",
                        ),
            [eN, ei, j, el, t, B, L, R, K],
        ),
        eX = (0, f.bG)([q.A], () => q.A.hasHidden(t.id)),
        eQ = {
            editorHeight: a,
            isGridLayout: eu,
        },
        eY = r.useRef(eQ);
    r.useEffect(() => {
        eY.current = eQ;
    }),
        r.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: l } = eY.current,
                r = l ? e2 : ec,
                a = null == (e = r.current) ? void 0 : e.getScrollerState();
            null != a &&
                !eX &&
                a.scrollTop > n &&
                (null == (t = r.current) ||
                    t.scrollTo({
                        to: 0,
                    }));
        }, [eX]);
    let {
            updateListScrollerRef: eZ,
            renderListSection: e$,
            renderListItem: e0,
            getListSectionHeight: e1,
            getListItemHeight: e4,
        } = (function (e) {
            let {
                    listRef: t,
                    hasActiveThreads: n,
                    threadIdsBySection: a,
                    listViewCardHeights: s,
                    editorHeight: c,
                    editorAdditionRowHeight: o,
                    renderSectionOrItem: d,
                    goToThread: u,
                    observePostVisibilityAnalytics: m,
                    isShowingSearchResult: h,
                } = e,
                g = (0, f.bG)([V.A], () => V.A.getChannelId()),
                x = r.useCallback(
                    (e) => (n) => {
                        var l;
                        (t.current = n),
                            (e.current = null != (l = null == n ? void 0 : n.getScrollerNode()) ? l : null);
                    },
                    [t],
                ),
                p = r.useCallback(
                    (e) =>
                        eS({
                            section: e.section,
                            isShowingSearchResult: h,
                            hasActiveThreads: n,
                        })(),
                    [n, h],
                ),
                j = r.useCallback(
                    (e) =>
                        d(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, l.jsx)(
                                          "div",
                                          {
                                              "data-item-role": "item",
                                              className: i()(ep.loadingCard, ep["loadingCard-".concat(e.row % 3)]),
                                          },
                                          "loading-".concat(e.row),
                                      );
                            let t = a[e.section][e.row],
                                n = null != g && (0, w.iU)(g) ? k.Ay : er.Ay;
                            return (0, l.jsx)(
                                "li",
                                {
                                    className: ep.card,
                                    "data-item-role": "item",
                                    children: (0, l.jsx)(b.Fmo, {
                                        children: (0, l.jsx)(n, {
                                            className: ep.mainCard,
                                            threadId: t,
                                            goToThread: u,
                                            observePostVisibilityAnalytics: m,
                                        }),
                                    }),
                                },
                                "".concat(e.section, "-").concat(t),
                            );
                        }),
                    [d, a, g, u, m],
                ),
                v = r.useCallback(
                    (e, t) => {
                        if (0 === e) return c + o;
                        let n = s[a[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [a, s, c, o],
                );
            return {
                updateListScrollerRef: x,
                renderListSection: p,
                renderListItem: j,
                getListSectionHeight: r.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: v,
            };
        })({
            listRef: ec,
            hasActiveThreads: B,
            threadIdsBySection: eB,
            listViewCardHeights: c,
            editorHeight: a,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eJ,
            goToThread: eK,
            observePostVisibilityAnalytics: eo,
            isShowingSearchResult: eN,
        }),
        e2 = r.useRef(null),
        {
            updateMasonryListScrollerRef: e7,
            getItemKey: e8,
            renderGridSection: e3,
            renderGridItem: e5,
            getGridSectionHeight: e9,
            getSectionProps: e6,
            handleGridFocus: te,
        } = (function (e) {
            let {
                    masonryListScrollerRef: t,
                    threadIdsBySection: n,
                    goToThread: a,
                    renderSectionOrItem: s,
                    hasActiveThreads: c,
                    isShowingSearchResult: o,
                    canSearchForumPosts: d,
                    canViewArchivedPosts: u,
                    observePostVisibilityAnalytics: m,
                    focusedThreadId: h,
                    headerHeight: f,
                } = e,
                g = r.useRef(null),
                x = r.useCallback(
                    (e) => {
                        (t.current = e), (g.current = null == e ? void 0 : e.getScrollerNode());
                    },
                    [t],
                ),
                b = r.useCallback(
                    (e, n) => {
                        let { current: l } = t;
                        if (null == l) return;
                        let r = document.querySelector(e);
                        if (null == r) return;
                        let a = l.getCoordsMap()[n],
                            i = null != a ? a.height + 20 : 200;
                        l.scrollIntoViewNode({
                            node: r,
                            padding: i,
                            callback() {
                                requestAnimationFrame(() => {
                                    var t;
                                    null == (t = document.querySelector(e)) ||
                                        t.focus({
                                            preventScroll: !0,
                                        });
                                });
                            },
                        }),
                            (h.current = e_(n));
                    },
                    [t, h],
                ),
                p = r.useCallback(
                    (e) => {
                        let t = e_(e);
                        if (null == t) return;
                        let n = G.A.getChannel(t);
                        null != n && a(n, !0);
                    },
                    [a],
                ),
                j = r.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return "section-".concat(e, "-").concat(t);
                        {
                            let l = n[e][t];
                            return null == l ? eT(e, t) : eT(e, l);
                        }
                    },
                    [n],
                ),
                v = r.useCallback(
                    (e, t, n) =>
                        s(
                            e,
                            t,
                            eS({
                                section: e,
                                coords: t,
                                key: n,
                                isShowingSearchResult: o,
                                hasActiveThreads: c,
                            }),
                        ),
                    [s, c, o],
                ),
                y = r.useCallback(
                    (e) =>
                        0 === e
                            ? {}
                            : {
                                  role: "grid",
                                  "aria-labelledby": "#".concat(eO(e)),
                              },
                    [],
                );
            return {
                updateMasonryListScrollerRef: x,
                masonryListContainerRef: g,
                focusedThreadId: h,
                handleGridFocus: b,
                handleGridSelect: p,
                getItemKey: j,
                renderGridSection: v,
                renderGridItem: r.useCallback(
                    (e, t, r, s, c) => {
                        if (0 === e) return null;
                        let o = n[e][t];
                        return null != o
                            ? (0, l.jsx)(
                                  es.A,
                                  {
                                      id: "".concat(s),
                                      threadId: o,
                                      className: i()(ep.card, ep.mainCard),
                                      goToThread: a,
                                      observePostVisibilityAnalytics: m,
                                      coords: r,
                                      gridCoords: c.coordinates[s],
                                      gridSectionBoundaries: c.boundaries,
                                  },
                                  s,
                              )
                            : __OVERLAY__
                              ? null
                              : (0, l.jsx)(
                                    "div",
                                    {
                                        style: ej({}, r),
                                        "data-item-role": "item",
                                        className: i()(ep.loadingCard, ep["loadingCard-".concat(t % 3)]),
                                    },
                                    s,
                                );
                    },
                    [n, a, m],
                ),
                getSectionProps: y,
                getGridSectionHeight: r.useCallback(
                    (e) => (0 === e ? f - 8 - 24 : 2 === e ? (c || !u ? 40 : 0) : 1 === e && o && !d ? 40 : 0),
                    [f, o, d, c, u],
                ),
            };
        })({
            masonryListScrollerRef: e2,
            threadIdsBySection: eB,
            goToThread: eK,
            renderSectionOrItem: eJ,
            hasActiveThreads: B,
            isShowingSearchResult: eN,
            canSearchForumPosts: el,
            canViewArchivedPosts: ei,
            observePostVisibilityAnalytics: eo,
            focusedThreadId: eE,
            headerHeight: eW,
        });
    !(function (e) {
        let {
            masonryListScrollerRef: t,
            containerWidth: n,
            isGridLayout: l,
            threadIdsBySection: a,
            focusedThreadId: i,
            parentId: s,
        } = e;
        r.useEffect(() => {
            if (l) {
                let e = setTimeout(() => {
                    if (null == t.current || null == i.current) return;
                    let e = i.current;
                    if ("string" != typeof e) return;
                    null == F.Ay.getSidebarState(s) && (i.current = null);
                    let n = a.findIndex((t) => t.find((t) => t === e)),
                        l = t.current.getCoordsMap(),
                        r = l["__section__".concat(n)],
                        c = l[eT(n, e)];
                    null != r &&
                        null != c &&
                        t.current.scrollIntoViewRect({
                            start: r.top + c.top - 100,
                            end: r.top + c.top + c.height + 50,
                        });
                }, 0);
                return () => clearTimeout(e);
            }
        }, [s, n, l, a, i, t]);
    })({
        masonryListScrollerRef: e2,
        containerWidth: eM,
        isGridLayout: eu,
        threadIdsBySection: eB,
        parentId: t.id,
        focusedThreadId: eE,
    });
    let tt = r.useCallback(() => {
            var e, n;
            if (eN) return;
            let l = eu
                ? null == (e = e2.current)
                    ? void 0
                    : e.getScrollerState()
                : null == (n = ec.current)
                  ? void 0
                  : n.getScrollerState();
            if (null == l) return;
            (0, ee.pO)({
                guildId: t.guild_id,
                channelId: t.id,
            });
            let r = l.scrollTop + l.offsetHeight;
            l.scrollHeight - r < (eu ? Math.max(200, (0, ed.iX)(eM)) : 200) && C();
        }, [eN, eu, t.guild_id, t.id, eM, C]),
        tn = (0, f.bG)([y.A], () => y.A.keyboardModeEnabled),
        tl = (0, ea.kU)((e) => e.titleFocused || e.bodyFocused, o.x),
        tr = (0, eh.Ay)({
            id: "forum-grid-view",
            isEnabled: eu && tn && !tl,
            setFocus: te,
        }),
        ta = (0, ef.A)({
            listRef: ec,
            padding: 96,
            isEnabled: !eu && tn && !tl,
            channel: t,
        }),
        ti = r.useCallback(
            (e, n, l) => (0 === e ? 0 : (0, ed.iX)(l, t.isMediaChannel() ? ed.PL.SIXTEEN_BY_NINE : ed.PL.THREE_BY_TWO)),
            [t],
        ),
        ts = tr.containerProps,
        { ref: tc } = ts,
        to = ey(ts, ["ref"]),
        td = F.Ay.getSidebarState(t.id),
        tu = null != td && (0, F.JU)(td),
        tm = (0, f.bG)([F.Ay], () => F.Ay.getSection(t.id)) === eg.YvQ.MEMBERS;
    return (0, l.jsx)("div", {
        className: ep.container,
        ref: eP,
        "data-member-list-open": tm,
        children: (0, l.jsx)(b.skg, {
            children: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        u &&
                            (0, l.jsx)(p.A, {
                                channel: t,
                                draftType: z.C.FirstThreadMessage,
                                className: ep.uploadArea,
                                style: {
                                    right:
                                        tu && (null == n ? void 0 : n.isThreadSidebarFloating)
                                            ? n.threadSidebarWidth
                                            : 0,
                                },
                            }),
                        (0, l.jsx)(ek, {
                            channel: t,
                        }),
                        (0, l.jsx)(b.AC4, {
                            children: (0, l.jsx)(b.H, {
                                children: eb.intl.string(eb.t.B2panI),
                            }),
                        }),
                        W
                            ? (0, l.jsx)("div", {
                                  className: ep.optInNotice,
                                  children: (0, l.jsx)(_.A, {
                                      channel: t,
                                  }),
                              })
                            : null,
                        eu
                            ? (0, l.jsx)(eh.JR, {
                                  navigator: tr,
                                  children: (0, l.jsx)(
                                      b.a0_,
                                      ej(
                                          {
                                              ref: (e) => {
                                                  var t;
                                                  (tc.current =
                                                      null != (t = null == e ? void 0 : e.getScrollerNode())
                                                          ? t
                                                          : null),
                                                      e7(e);
                                              },
                                              itemGutter: 16,
                                              padding: 24,
                                              className: ep.grid,
                                              columns: eD,
                                              sections: eV,
                                              getItemKey: e8,
                                              getSectionHeight: e9,
                                              getItemHeight: ti,
                                              renderSection: e3,
                                              renderItem: e5,
                                              getSectionProps: e6,
                                              onScroll: A ? tt : void 0,
                                              chunkSize: 350,
                                          },
                                          to,
                                          e,
                                      ),
                                      H,
                                  ),
                              })
                            : (0, l.jsx)(d.hD, {
                                  navigator: ta,
                                  children: (0, l.jsx)(d.PR, {
                                      children: (t) => {
                                          let { ref: n } = t,
                                              r = ey(t, ["ref"]);
                                          return (0, l.jsx)(
                                              b.Eie,
                                              ev(
                                                  ej(
                                                      {
                                                          ref: eZ(n),
                                                          className: ep.list,
                                                          sections: eV,
                                                          sectionHeight: e1,
                                                          rowHeight: e4,
                                                          renderRow: e0,
                                                          renderSection: e$,
                                                          chunkSize: 150,
                                                          onScroll: A ? tt : void 0,
                                                          paddingBottom: 24,
                                                      },
                                                      r,
                                                      e,
                                                  ),
                                                  {
                                                      innerRole: "list",
                                                  },
                                              ),
                                              H,
                                          );
                                      },
                                  }),
                              }),
                    ],
                }),
        }),
    });
}

function ew(e) {
    let { channel: t, coords: n } = e,
        r = (0, A.Ay)(t);
    return (0, l.jsx)("div", {
        className: i()(ep.missingReadHistoryPermission, ep.columnsSpan),
        style: n,
        children: (0, l.jsx)(b.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eb.intl.format(eb.t.TycmzM, {
                channelName: r,
            }),
        }),
    });
}

function eR(e) {
    let { channel: t, coords: n } = e,
        r = (0, A.Ay)(t);
    return (0, l.jsx)("div", {
        className: i()(ep.missingReadHistoryPermission, ep.columnsSpan),
        style: n,
        children: (0, l.jsx)(b.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eb.intl.format(eb.t.OWZJdS, {
                channelName: r,
            }),
        }),
    });
}

function ek(e) {
    let { channel: t } = e,
        n = r.useCallback(() => {
            J.A.resort(t.id);
        }, [t]),
        a = (0, f.bG)([X.A], () => X.A.getNewThreadCount());
    return 0 === a
        ? null
        : (0, l.jsx)(b.DUT, {
              className: ep.newPostsButton,
              onClick: n,
              children: (0, l.jsx)(b.Text, {
                  color: "text-brand",
                  variant: "text-md/medium",
                  children: eb.intl.format(eb.t.ue1qfM, {
                      count: a,
                  }),
              }),
          });
}

function eP() {
    return Promise.resolve();
}

function eI(e) {
    var t, n, a;
    let s,
        p,
        v,
        { channel: A, isEmpty: S, isSearchLoading: T, numResults: _, children: E, coords: k, onHeightChange: P } = e,
        {
            name: I,
            formOpen: M,
            titleFocused: D,
            hasClickedForm: U,
            textAreaState: F,
            onboardingExpanded: G,
            setEditorAdditionRowHeight: V,
        } = (0, ea.kU)((e) => {
            let {
                name: t,
                formOpen: n,
                titleFocused: l,
                hasClickedForm: r,
                textAreaState: a,
                onboardingExpanded: i,
                setEditorAdditionRowHeight: s,
            } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: l,
                hasClickedForm: r,
                textAreaState: a,
                onboardingExpanded: i,
                setEditorAdditionRowHeight: s,
            };
        }, o.x),
        { tagFilter: q, layoutType: X } = (0, Q.R)(A.id),
        Z = (0, ea.ST)(),
        $ = (0, Q.p)(),
        et = (0, f.bG)([H.A], () => H.A.canChatInGuild(A.guild_id)),
        er = (0, Y.S4)(A),
        es = (0, L.AI)(A),
        [ec, ed] = r.useState(es),
        [, em] = (0, O.c)(null != (t = A.getGuildId()) ? t : void 0),
        eh = (0, R.V)(A),
        ef = et && (es || (ec && em)) && !eh,
        ex = A.isMediaChannel();
    r.useEffect(() => {
        es && ed(!0);
    }, [es]);
    let { ref: eA, height: eC } = (0, j.Ay)();
    r.useEffect(() => {
        null != eC && P(eC);
    }, [P, eC]);
    let eO = r.useCallback(() => {
        c()(() => {
            null != eA.current && Z.getState().setEditorHeight(eA.current.offsetHeight);
        });
    }, [eA, Z]);
    r.useLayoutEffect(eO, [eO, S, ef, G]),
        (0, W.Vo)({
            event: eg.jej.REMEASURE_TARGET,
            handler: eO,
        });
    let eN = (0, f.bG)([B.A], () => B.A.getUploads(A.id, z.C.FirstThreadMessage)),
        eS = (0, Y.Hv)(A),
        eT = r.useRef(null),
        e_ = r.useRef(null),
        [eE, ew] = r.useState(0),
        { width: eR } = (0, f.bG)([K.A], () => K.A.windowSize()),
        ek = null == (a = eT.current) || null == (n = a.getBoundingClientRect()) ? void 0 : n.width,
        eI = r.useRef(null),
        eD = r.useRef(null);
    r.useLayoutEffect(() => {
        var e;
        let t = e_.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0];
        if (null != eT.current && null != n && null != n.children) {
            let { left: e, top: t } = eT.current.getBoundingClientRect(),
                l = 0;
            for (let r of n.children) {
                let { right: n, top: a, height: i } = r.getBoundingClientRect();
                if (a - t > i) break;
                n - e > l && (l = n - e);
            }
            ew(l);
        }
    }, [A.availableTags, eR, ek, q]);
    let eL = I.length > 0 && !M && (T || null != _),
        eU =
            !__OVERLAY__ &&
            !U &&
            !M &&
            D &&
            (0 === F.textValue.trim().length || F.textValue.trim() === eS) &&
            0 === eN.length &&
            !eh;
    r.useLayoutEffect(() => {
        let e = eL || eU;
        if (!e) return V(0);
        null != eI.current && V(e ? eI.current.clientHeight : 0);
    }, [V, eL, eU, eI]);
    let eF = (0, u.Ay)({
            id: "".concat(A.id, "-tags-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eP,
            scrollToEnd: eP,
            orientation: m.Gl.HORIZONTAL,
        }),
        eG = (0, d.rm)("forum-channel-header"),
        { role: ez, onFocus: eH } = eG,
        eV = ey(eG, ["role", "onFocus"]),
        eB = r.useRef(null),
        eK =
            ((s = r.useRef(!1)),
            (p = (0, f.bG)([y.A], () => y.A.keyboardModeEnabled)),
            (v = r.useCallback(
                (e) => {
                    s.current = e.shiftKey;
                },
                [s],
            )),
            r.useLayoutEffect(
                () => (
                    p ? window.addEventListener("keydown", v) : window.removeEventListener("keydown", v),
                    () => window.removeEventListener("keydown", v)
                ),
                [p, v],
            ),
            s),
        eW = r.useCallback(
            (e) => {
                if ((eH(), e.target === eA.current && !eK.current)) {
                    var t;
                    null == (t = eB.current) || t.focus();
                }
            },
            [eH, eA, eK],
        ),
        eq = r.useMemo(() => (eh ? (0, w.Yj)(A.availableTags) : A.availableTags), [A.availableTags, eh]);
    return (0, l.jsx)(
        "div",
        ev(
            ej(
                {
                    className: i()(ep.card, ep.headerRow, ep.columnsSpan),
                    ref: eA,
                    onFocus: eW,
                },
                eV,
            ),
            {
                style: ev(ej({}, k), {
                    position: X === h.C.GRID ? "absolute" : "static",
                    height: "auto",
                }),
                children: (0, l.jsxs)(W.Ah, {
                    children: [
                        null != A.guild_id
                            ? (0, l.jsx)(N.A, {
                                  className: i()(ep.newMemberBanner, {
                                      [ep.gridViewBanner]: X === h.C.GRID,
                                  }),
                                  guildId: A.guild_id,
                                  channel: A,
                              })
                            : null,
                        (0, l.jsx)("div", {
                            className: i()(ep.mainCard, ep.header, {
                                [ep.headerWithMatchingPosts]: eL || eU,
                            }),
                            children: (0, l.jsx)(ei.A, {
                                parentChannel: A,
                                onChange: eO,
                                isSearchLoading: T,
                                numResults: _,
                                canCreatePost: ef,
                                inputRef: eB,
                            }),
                        }),
                        (eL || eU) &&
                            (0, l.jsxs)("div", {
                                className: ep.matchingPostsRow,
                                ref: eI,
                                children: [
                                    eL &&
                                        (0, l.jsxs)("div", {
                                            className: ep.matchingPosts,
                                            children: [
                                                (0, l.jsx)(b.Heading, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: T
                                                        ? eb.intl.string(eb.t["/9i3qq"])
                                                        : 0 === _
                                                          ? eb.intl.string(eb.t.DbgHxi)
                                                          : eb.intl.formatToPlainString(eb.t["tBz/8b"], {
                                                                numPosts: null != _ ? _ : "",
                                                                query: I,
                                                            }),
                                                }),
                                                !T &&
                                                    (0, l.jsx)(b.DUT, {
                                                        onClick: () => {
                                                            (0, ee.hT)({
                                                                guildId: A.guild_id,
                                                                channelId: A.id,
                                                            }),
                                                                J.A.clearForumSearch(A.id),
                                                                Z.getState().setName("");
                                                        },
                                                        children: (0, l.jsx)(b.Text, {
                                                            variant: "text-xs/semibold",
                                                            color: "text-brand",
                                                            className: ep.clear,
                                                            children: eb.intl.string(eb.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    (0, l.jsx)("div", {
                                        className: ep.tagsSpacer,
                                    }),
                                    eU
                                        ? ef
                                            ? (0, l.jsxs)("div", {
                                                  className: ep.startPostHelp,
                                                  children: [
                                                      (0, l.jsx)(b.e7I, {
                                                          shortcut: "SHIFT",
                                                          className: ep.keyboardShortcut,
                                                      }),
                                                      (0, l.jsx)(b.Text, {
                                                          variant: "text-xs/normal",
                                                          color: "text-subtle",
                                                          children: "+",
                                                      }),
                                                      (0, l.jsx)(b.e7I, {
                                                          shortcut: "ENTER",
                                                          className: ep.keyboardShortcut,
                                                      }),
                                                      (0, l.jsx)(b.Text, {
                                                          variant: "text-xs/normal",
                                                          color: "text-subtle",
                                                          children: eb.intl.string(eb.t.ZvJ0yh),
                                                      }),
                                                  ],
                                              })
                                            : (0, l.jsxs)("div", {
                                                  className: ep.startPostHelp,
                                                  children: [
                                                      (0, l.jsx)(b.EpV, {
                                                          size: "custom",
                                                          color: "currentColor",
                                                          height: 14,
                                                          width: 14,
                                                          className: ep.warnIcon,
                                                      }),
                                                      (0, l.jsx)(b.Text, {
                                                          variant: "text-xs/normal",
                                                          color: "text-subtle",
                                                          children: eb.intl.string(eb.t.iyzwnD),
                                                      }),
                                                  ],
                                              })
                                        : null,
                                ],
                            }),
                        (0, l.jsx)(en.A, {
                            channel: A,
                            onChange: eO,
                        }),
                        (0, l.jsxs)("div", {
                            className: ep.tagsContainer,
                            ref: eT,
                            children: [
                                (0, l.jsx)(eM, {
                                    channel: A,
                                }),
                                eq.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: ep.divider,
                                              }),
                                              (0, l.jsx)("div", {
                                                  className: ep.tagList,
                                                  ref: e_,
                                                  children: (0, l.jsx)(d.hD, {
                                                      navigator: eF,
                                                      children: (0, l.jsx)(d.PR, {
                                                          children: (e) => {
                                                              let { ref: t } = e,
                                                                  n = ey(e, ["ref"]);
                                                              return (0, l.jsx)(
                                                                  "div",
                                                                  ev(
                                                                      ej(
                                                                          {
                                                                              className: ep.tagListInner,
                                                                              ref: t,
                                                                          },
                                                                          n,
                                                                      ),
                                                                      {
                                                                          children: eq.map((e) =>
                                                                              (0, l.jsx)(
                                                                                  eo.A,
                                                                                  {
                                                                                      tag: e,
                                                                                      onClick: () => {
                                                                                          var t;
                                                                                          return (
                                                                                              (t = e.id),
                                                                                              void ((0, ee.UA)({
                                                                                                  guildId: A.guild_id,
                                                                                                  channelId: A.id,
                                                                                                  tagId: t,
                                                                                                  filterTagIds:
                                                                                                      Array.from(q),
                                                                                                  added: !q.has(t),
                                                                                                  location: {
                                                                                                      page: eg.liQ
                                                                                                          .GUILD_CHANNEL,
                                                                                                      section:
                                                                                                          eg.JJy
                                                                                                              .FORUM_CHANNEL_HEADER,
                                                                                                      object: eg.ZSU
                                                                                                          .CHANNEL_TAG,
                                                                                                  },
                                                                                              }),
                                                                                              $.getState().toggleTagFilter(
                                                                                                  A.id,
                                                                                                  t,
                                                                                              ))
                                                                                          );
                                                                                      },
                                                                                      selected: q.has(e.id),
                                                                                  },
                                                                                  e.id,
                                                                              ),
                                                                          ),
                                                                      },
                                                                  ),
                                                              );
                                                          },
                                                      }),
                                                  }),
                                              }),
                                              (0, l.jsx)(b.YNO, {
                                                  targetElementRef: eD,
                                                  renderPopout: (e) => {
                                                      let { closePopout: t, setPopoutRef: n } = e;
                                                      return (0, l.jsx)(eu.A, {
                                                          channel: A,
                                                          closePopout: t,
                                                          setPopoutRef: n,
                                                      });
                                                  },
                                                  position: "bottom",
                                                  align: "right",
                                                  children: (e, t) => {
                                                      let { isShown: n } = t;
                                                      return (0, l.jsxs)(
                                                          x.$n,
                                                          ev(ej({}, e), {
                                                              "data-migration-pending": !0,
                                                              buttonRef: eD,
                                                              size: x.$n.Sizes.MIN,
                                                              color: x.$n.Colors.CUSTOM,
                                                              className: i()(ep.tagsButton, {
                                                                  [ep.tagsButtonWithCount]: q.size > 0,
                                                              }),
                                                              style: {
                                                                  left: eE,
                                                              },
                                                              innerClassName: ep.tagsButtonInner,
                                                              "aria-label":
                                                                  q.size > 0
                                                                      ? eb.intl.string(eb.t.IkpM1T)
                                                                      : eb.intl.string(eb.t["9vKK/N"]),
                                                              children: [
                                                                  q.size > 0
                                                                      ? (0, l.jsx)("div", {
                                                                            className: ep.countContainer,
                                                                            children: (0, l.jsx)(b.Text, {
                                                                                className: ep.countText,
                                                                                color: "none",
                                                                                variant: "text-xs/medium",
                                                                                children: q.size,
                                                                            }),
                                                                        })
                                                                      : eb.intl.string(eb.t.fZ8hzm),
                                                                  n
                                                                      ? (0, l.jsx)(b.tN5, {
                                                                            size: "custom",
                                                                            color: "currentColor",
                                                                            width: 20,
                                                                        })
                                                                      : (0, l.jsx)(b.abt, {
                                                                            size: "custom",
                                                                            color: "currentColor",
                                                                            width: 20,
                                                                        }),
                                                              ],
                                                          }),
                                                      );
                                                  },
                                              }),
                                              (0, l.jsxs)(x.$n, {
                                                  "data-migration-pending": !0,
                                                  size: x.$n.Sizes.MIN,
                                                  color: x.$n.Colors.CUSTOM,
                                                  className: i()(ep.tagsButton, ep.tagsButtonPlaceholder),
                                                  innerClassName: ep.tagsButtonInner,
                                                  "aria-label": eb.intl.string(eb.t.IkpM1T),
                                                  children: [
                                                      q.size > 0
                                                          ? (0, l.jsx)("div", {
                                                                className: ep.countContainer,
                                                                children: (0, l.jsx)(b.Text, {
                                                                    className: ep.countText,
                                                                    color: "none",
                                                                    variant: "text-xs/medium",
                                                                    children: q.size,
                                                                }),
                                                            })
                                                          : null,
                                                      (0, l.jsx)(b.tN5, {
                                                          size: "custom",
                                                          color: "currentColor",
                                                          width: 24,
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        E,
                        er &&
                            !ex &&
                            !eh &&
                            (0, l.jsx)(C.Ay, {
                                contentTypes: [g.M.FORUM_CHANNEL_HELPER_CARD],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === g.M.FORUM_CHANNEL_HELPER_CARD
                                        ? (0, l.jsx)(el.A, {
                                              onDismiss: n,
                                          })
                                        : null;
                                },
                            }),
                    ],
                }),
            },
        ),
        "create-form",
    );
}

function eM(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        a = r.useRef(null);
    return (0, l.jsx)(b.YNO, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(ec.A, {
                channel: t,
                closePopout: n,
            });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: r } = t;
            return (0, l.jsxs)(
                x.$n,
                ev(ej({}, e), {
                    "data-migration-pending": !0,
                    buttonRef: a,
                    size: x.$n.Sizes.MIN,
                    color: x.$n.Colors.CUSTOM,
                    className: ep.sortDropdown,
                    innerClassName: ep.sortDropdownInner,
                    "aria-label": n ? eb.intl.string(eb.t.JxU0wr) : eb.intl.string(eb.t.xyYt8A),
                    children: [
                        (0, l.jsx)(b.JNJ, {
                            size: "xs",
                            color: "currentColor",
                        }),
                        (0, l.jsx)(b.Text, {
                            className: ep.sortDropdownText,
                            variant: "text-sm/medium",
                            color: "interactive-text-default",
                            children: (0, l.jsx)("span", {
                                className: ep.sortDropdownTextHighContrastForcedColor,
                                children: n ? eb.intl.string(eb.t.JxU0wr) : eb.intl.string(eb.t.xyYt8A),
                            }),
                        }),
                        r
                            ? (0, l.jsx)(b.tN5, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 20,
                              })
                            : (0, l.jsx)(b.abt, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 20,
                              }),
                    ],
                }),
            );
        },
    });
}
