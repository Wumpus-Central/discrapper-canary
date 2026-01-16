n.r(t), n.d(t, { default: () => ey }), n(35282), n(388685), n(781311);
var r = n(54381),
    a = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(196434),
    o = n.n(s),
    c = n(782425),
    d = n(91192),
    u = n(924826),
    m = n(536895),
    h = n(313361),
    f = n(442837),
    g = n(704215),
    x = n(755721),
    b = n(481060),
    p = n(561472),
    j = n(393238),
    v = n(493773),
    C = n(607070),
    y = n(933557),
    T = n(243778),
    S = n(71619),
    N = n(898188),
    w = n(41776),
    O = n(256413),
    P = n(292853),
    I = n(869382),
    E = n(982168),
    _ = n(216572),
    R = n(543015),
    M = n(359110),
    Z = n(897473),
    k = n(344185),
    A = n(235449),
    L = n(665906),
    F = n(488131),
    D = n(433355),
    H = n(592125),
    z = n(703558),
    B = n(607744),
    U = n(944486),
    G = n(117530),
    V = n(451478),
    W = n(459273),
    q = n(961675),
    X = n(883429),
    K = n(238349),
    Y = n(109434),
    J = n(456269),
    Q = n(90372),
    $ = n(985518),
    ee = n(228392),
    et = n(355589),
    en = n(542581),
    er = n(639184),
    ea = n(404616),
    ei = n(470623),
    el = n(749913),
    es = n(219664),
    eo = n(895932),
    ec = n(479099),
    ed = n(510060),
    eu = n(276357),
    em = n(81490),
    eh = n(482062),
    ef = n(260503),
    eg = n(981631),
    ex = n(124368),
    eb = n(388032),
    ep = n(707545);
function ej(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eC(e, t) {
    if (null == e) return {};
    var n,
        r,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    }
    return a;
}
function ey(e) {
    let { channel: t, guild: n, sidebarState: a } = e;
    return (0, r.jsx)(
        ei.oL,
        {
            channel: t,
            children: (0, r.jsx)(eI, {
                channel: t,
                guild: n,
                sidebarState: a,
            }),
        },
        t.id,
    );
}
let eT = new ed.Me({
    minWidth: 320,
    maxWidth: 450,
    gap: 16,
});
function eS(e) {
    return "forum-grid-header-section-".concat(e);
}
function eN(e) {
    let { itemRole: t, coords: n, section: a } = e;
    return (0, r.jsx)(
        "div",
        {
            className: l()(ep.card, ep.archivedDividerRow, ep.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, r.jsx)("div", {
                className: ep.emptyMainCard,
                children: (0, r.jsx)(b.Heading, {
                    variant: "eyebrow",
                    className: ep.archivedDivider,
                    id: eS(a),
                    children: eb.intl.string(eb.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}
function ew(e) {
    let { section: t, coords: n, key: a, isShowingSearchResult: i, hasActiveThreads: l } = e;
    return () =>
        2 === t && !i && l
            ? (0, r.jsx)(
                  eN,
                  {
                      section: t,
                      coords: null == n ? void 0 : ev(ej({}, n), { position: "absolute" }),
                      itemRole: "section",
                  },
                  a,
              )
            : null;
}
function eO(e, t) {
    return "card-".concat(e, "-").concat(t);
}
function eP(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function eI(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: i,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: u,
            name: m,
        } = (0, ei.xH)((e) => {
            let {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: r,
                formOpen: a,
                cardHeightVersion: i,
                name: l,
            } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: r,
                formOpen: a,
                name: l,
                cardHeightVersion: i,
            };
        }, c.X),
        {
            activeThreadIds: g,
            archivedThreadIds: x,
            searchResults: j,
            canLoadMore: y,
            loadMore: T,
            activeThreadsLoading: S,
            archivedThreadsLoading: N,
            loading: _,
            isSearchLoading: L,
            layoutType: B,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: r, tagSetting: a } = (0, Y.H)(e.id),
                i = (0, J.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: a,
                    shouldAutomaticallyAck: !0,
                }),
                l = (0, f.e7)([k.Z, w.Z], () => {
                    let t = k.Z.hasLoaded(e.guild_id),
                        n = w.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: s, canLoadMore: o, loadMore: c, loading: d } = (0, A.qQ)(e, t, n, a),
                { searchResults: u, isSearchLoading: m } = (0, J.XZ)({ channelId: e.id });
            return (
                (0, J.ES)(e, t, n, a),
                {
                    activeThreadIds: i,
                    archivedThreadIds: s,
                    searchResults: u,
                    canLoadMore: o,
                    loadMore: c,
                    loading: l || d || m,
                    archivedThreadsLoading: d,
                    activeThreadsLoading: l,
                    isSearchLoading: m,
                    layoutType: r,
                }
            );
        })(t),
        G = g.length > 0,
        V = G || x.length > 0,
        W = (0, O.Z)(t),
        { tagFilter: K, tagSetting: en } = (0, Y.H)(t.id);
    (0, J.ku)(t, K, en, u),
        (0, v.ZP)(() => {
            !u && m.length > 0 && X.Z.updateForumSearchQuery(t.id, m);
        });
    let er = (0, J.jR)(t),
        el = (0, J.eZ)(t),
        eo = a.useRef(null),
        { observePostVisibilityAnalytics: ec } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: r } = e;
            Q.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n,
            });
            let i = a.useRef(null),
                l = a.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let r = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, $.rj)(e, t, r) : (0, $.Ct)(e, t, r);
                    }
                }, []);
            return (
                a.useEffect(() => {
                    var e;
                    let t = null == (e = r.current) ? void 0 : e.getScrollerNode();
                    if (null != t)
                        return (
                            (i.current = new IntersectionObserver((e) => l(n, e), {
                                root: t,
                                rootMargin: "0px 100000px 0px 100000px",
                                threshold: 0.5,
                            })),
                            () => {
                                var e;
                                null == (e = i.current) || e.disconnect(), (i.current = null);
                            }
                        );
                }, [n, l, r]),
                {
                    observePostVisibilityAnalytics: a.useCallback(
                        (e, t) => {
                            var r;
                            if (null == e) return void (0, $.Ct)(n, t, Date.now());
                            null == (r = i.current) || r.observe(e);
                        },
                        [n],
                    ),
                }
            );
        })({
            scrollerRef: eo,
            channelId: t.id,
            guildId: t.guild_id,
        }),
        eu = B === h.X.GRID,
        { searchQuery: ey } = (0, J.XZ)({ channelId: t.id }),
        eN = null != j && null != ey && ey.length > 0,
        eI = a.useRef(null),
        { containerRef: eM, containerWidth: ek } = (0, em.Z)();
    a.useEffect(() => {
        if (null == eI.current && null != t.id) {
            let e = D.ZP.getSidebarState(t.id);
            null != e && e.type === Z.tI.VIEW_THREAD && (eI.current = e.channelId);
        }
    }, [t.id]);
    let { columns: eA } = a.useMemo(() => (eu ? eT.getRenderOptions(ek) : ed.eU), [eu, ek]),
        eL = a.useMemo(() => (_ ? Math.round((window.innerHeight - 200) / 118) : 0), [_]),
        { showResolvedFlags: eF } = (0, I.N)(t.id),
        eD = t.isModeratorReportChannel(),
        eH = a.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ed.KW)(eT.getWidth(ek))) * eA;
            return S ? e : 0;
        }, [ek, eA, S]),
        ez = a.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ed.KW)(eT.getWidth(ek))) * eA;
            return N ? e : 0;
        }, [ek, eA, N]),
        eB = a.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ed.KW)(eT.getWidth(ek))) * eA;
            return L && eN ? e : 0;
        }, [ek, eA, L, eN]),
        eU = a.useMemo(() => {
            if (eu)
                if (!er && eN) return [1, 0];
                else if (!el) return [1, g.length + eH, 0];
                else if (eN) return [1, j.length + eB, 0];
                else if (eD && !eF) return [1, g.length + eH, 0];
                else return [1, g.length + eH, x.length + ez];
            if (!er && eN) return [1, 1];
            if (!el) return [1, g.length, 1];
            if (eN) return [1, j.length, 0, eL];
            if (eD && !eF) return [1, g.length, 0, eL];
            else return [1, g.length, x.length, eL];
        }, [eu, eN, g.length, x.length, er, el, eL, j, eH, ez, eB, eF, eD]),
        eG = a.useMemo(
            () =>
                !er && eN
                    ? [[], []]
                    : el
                      ? eN
                          ? [[], j, [], []]
                          : eD && !eF
                            ? [[], g, [], []]
                            : [[], g, x, []]
                      : [[], g, []],
            [eN, er, el, j, g, x, eF, eD],
        ),
        eV = a.useCallback(
            (e, n) => {
                (0, ee.B5)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: {
                        page: eg.ZY5.GUILD_CHANNEL,
                        section: eg.jXE.FORUM_CHANNEL_POST,
                    },
                }),
                    n ? (0, M.ad)(e, { source: ex.on.BROWSER }) : ((eI.current = e.id), (0, F.ok)(e));
            },
            [t.guild_id, t.id, eI],
        ),
        [eW, eq] = a.useState(i + s - 24),
        eX = a.useCallback(
            (e, n, a) =>
                0 === e
                    ? (0, r.jsx)(
                          eZ,
                          {
                              channel: t,
                              isEmpty: !G,
                              isSearchLoading: L,
                              numResults: null == j ? void 0 : j.length,
                              coords: n,
                              onHeightChange: eq,
                              children:
                                  !_ &&
                                  (0, r.jsx)(
                                      et.Z,
                                      {
                                          channel: t,
                                          hasAnyThread: V,
                                          hasActiveThreads: G,
                                      },
                                      t.id,
                                  ),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || el
                      ? 1 === e && eN && !er
                          ? (0, r.jsx)(
                                e_,
                                {
                                    channel: t,
                                    coords: n,
                                },
                                "archive-or-search-result",
                            )
                          : a()
                      : (0, r.jsx)(
                            eE,
                            {
                                channel: t,
                                coords: n,
                            },
                            "archived-missing-reading-history-perm",
                        ),
            [eN, el, j, er, t, G, L, _, V],
        ),
        eK = (0, f.e7)([q.Z], () => q.Z.hasHidden(t.id)),
        eY = {
            editorHeight: i,
            isGridLayout: eu,
        },
        eJ = a.useRef(eY);
    a.useEffect(() => {
        eJ.current = eY;
    }),
        a.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: r } = eJ.current,
                a = r ? e1 : eo,
                i = null == (e = a.current) ? void 0 : e.getScrollerState();
            null != i && !eK && i.scrollTop > n && (null == (t = a.current) || t.scrollTo({ to: 0 }));
        }, [eK]);
    let {
            updateListScrollerRef: eQ,
            renderListSection: e$,
            renderListItem: e0,
            getListSectionHeight: e3,
            getListItemHeight: e6,
        } = (function (e) {
            let {
                    listRef: t,
                    hasActiveThreads: n,
                    threadIdsBySection: i,
                    listViewCardHeights: s,
                    editorHeight: o,
                    editorAdditionRowHeight: c,
                    renderSectionOrItem: d,
                    goToThread: u,
                    observePostVisibilityAnalytics: m,
                    isShowingSearchResult: h,
                } = e,
                g = (0, f.e7)([U.Z], () => U.Z.getChannelId()),
                x = a.useCallback(
                    (e) => (n) => {
                        var r;
                        (t.current = n),
                            (e.current = null != (r = null == n ? void 0 : n.getScrollerNode()) ? r : null);
                    },
                    [t],
                ),
                p = a.useCallback(
                    (e) =>
                        ew({
                            section: e.section,
                            isShowingSearchResult: h,
                            hasActiveThreads: n,
                        })(),
                    [n, h],
                ),
                j = a.useCallback(
                    (e) =>
                        d(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, r.jsx)(
                                          "div",
                                          {
                                              "data-item-role": "item",
                                              className: l()(ep.loadingCard, ep["loadingCard-".concat(e.row % 3)]),
                                          },
                                          "loading-".concat(e.row),
                                      );
                            let t = i[e.section][e.row],
                                n = null != g && (0, E.UD)(g) ? R.ZP : ea.ZP;
                            return (0, r.jsx)(
                                "li",
                                {
                                    className: ep.card,
                                    "data-item-role": "item",
                                    children: (0, r.jsx)(b.y5t, {
                                        children: (0, r.jsx)(n, {
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
                    [d, i, g, u, m],
                ),
                v = a.useCallback(
                    (e, t) => {
                        if (0 === e) return o + c;
                        let n = s[i[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [i, s, o, c],
                );
            return {
                updateListScrollerRef: x,
                renderListSection: p,
                renderListItem: j,
                getListSectionHeight: a.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: v,
            };
        })({
            listRef: eo,
            hasActiveThreads: G,
            threadIdsBySection: eG,
            listViewCardHeights: o,
            editorHeight: i,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eX,
            goToThread: eV,
            observePostVisibilityAnalytics: ec,
            isShowingSearchResult: eN,
        }),
        e1 = a.useRef(null),
        {
            updateMasonryListScrollerRef: e8,
            getItemKey: e4,
            renderGridSection: e9,
            renderGridItem: e7,
            getGridSectionHeight: e2,
            getSectionProps: e5,
            handleGridFocus: te,
        } = (function (e) {
            let {
                    masonryListScrollerRef: t,
                    threadIdsBySection: n,
                    goToThread: i,
                    renderSectionOrItem: s,
                    hasActiveThreads: o,
                    isShowingSearchResult: c,
                    canSearchForumPosts: d,
                    canViewArchivedPosts: u,
                    observePostVisibilityAnalytics: m,
                    focusedThreadId: h,
                    headerHeight: f,
                } = e,
                g = a.useRef(null),
                x = a.useCallback(
                    (e) => {
                        (t.current = e), (g.current = null == e ? void 0 : e.getScrollerNode());
                    },
                    [t],
                ),
                b = a.useCallback(
                    (e, n) => {
                        let { current: r } = t;
                        if (null == r) return;
                        let a = document.querySelector(e);
                        if (null == a) return;
                        let i = r.getCoordsMap()[n],
                            l = null != i ? i.height + 20 : 200;
                        r.scrollIntoViewNode({
                            node: a,
                            padding: l,
                            callback() {
                                requestAnimationFrame(() => {
                                    var t;
                                    null == (t = document.querySelector(e)) || t.focus({ preventScroll: !0 });
                                });
                            },
                        }),
                            (h.current = eP(n));
                    },
                    [t, h],
                ),
                p = a.useCallback(
                    (e) => {
                        let t = eP(e);
                        if (null == t) return;
                        let n = H.Z.getChannel(t);
                        null != n && i(n, !0);
                    },
                    [i],
                ),
                j = a.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return "section-".concat(e, "-").concat(t);
                        {
                            let r = n[e][t];
                            return null == r ? eO(e, t) : eO(e, r);
                        }
                    },
                    [n],
                ),
                v = a.useCallback(
                    (e, t, n) =>
                        s(
                            e,
                            t,
                            ew({
                                section: e,
                                coords: t,
                                key: n,
                                isShowingSearchResult: c,
                                hasActiveThreads: o,
                            }),
                        ),
                    [s, o, c],
                ),
                C = a.useCallback(
                    (e) =>
                        0 === e
                            ? {}
                            : {
                                  role: "grid",
                                  "aria-labelledby": "#".concat(eS(e)),
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
                renderGridItem: a.useCallback(
                    (e, t, a, s, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, r.jsx)(
                                  es.Z,
                                  {
                                      id: "".concat(s),
                                      threadId: c,
                                      className: l()(ep.card, ep.mainCard),
                                      goToThread: i,
                                      observePostVisibilityAnalytics: m,
                                      coords: a,
                                      gridCoords: o.coordinates[s],
                                      gridSectionBoundaries: o.boundaries,
                                  },
                                  s,
                              )
                            : __OVERLAY__
                              ? null
                              : (0, r.jsx)(
                                    "div",
                                    {
                                        style: ej({}, a),
                                        "data-item-role": "item",
                                        className: l()(ep.loadingCard, ep["loadingCard-".concat(t % 3)]),
                                    },
                                    s,
                                );
                    },
                    [n, i, m],
                ),
                getSectionProps: C,
                getGridSectionHeight: a.useCallback(
                    (e) => (0 === e ? f - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0),
                    [f, c, d, o, u],
                ),
            };
        })({
            masonryListScrollerRef: e1,
            threadIdsBySection: eG,
            goToThread: eV,
            renderSectionOrItem: eX,
            hasActiveThreads: G,
            isShowingSearchResult: eN,
            canSearchForumPosts: er,
            canViewArchivedPosts: el,
            observePostVisibilityAnalytics: ec,
            focusedThreadId: eI,
            headerHeight: eW,
        });
    !(function (e) {
        let {
            masonryListScrollerRef: t,
            containerWidth: n,
            isGridLayout: r,
            threadIdsBySection: i,
            focusedThreadId: l,
            parentId: s,
        } = e;
        a.useEffect(() => {
            if (r) {
                let e = setTimeout(() => {
                    if (null == t.current || null == l.current) return;
                    let e = l.current;
                    if ("string" != typeof e) return;
                    null == D.ZP.getSidebarState(s) && (l.current = null);
                    let n = i.findIndex((t) => t.find((t) => t === e)),
                        r = t.current.getCoordsMap(),
                        a = r["__section__".concat(n)],
                        o = r[eO(n, e)];
                    null != a &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: a.top + o.top - 100,
                            end: a.top + o.top + o.height + 50,
                        });
                }, 0);
                return () => clearTimeout(e);
            }
        }, [s, n, r, i, l, t]);
    })({
        masonryListScrollerRef: e1,
        containerWidth: ek,
        isGridLayout: eu,
        threadIdsBySection: eG,
        parentId: t.id,
        focusedThreadId: eI,
    });
    let tt = a.useCallback(() => {
            var e, n;
            if (eN) return;
            let r = eu
                ? null == (e = e1.current)
                    ? void 0
                    : e.getScrollerState()
                : null == (n = eo.current)
                  ? void 0
                  : n.getScrollerState();
            if (null == r) return;
            (0, ee.ab)({
                guildId: t.guild_id,
                channelId: t.id,
            });
            let a = r.scrollTop + r.offsetHeight;
            r.scrollHeight - a < (eu ? Math.max(200, (0, ed.KW)(ek)) : 200) && T();
        }, [eN, eu, t.guild_id, t.id, ek, T]),
        tn = (0, f.e7)([C.Z], () => C.Z.keyboardModeEnabled),
        tr = (0, ei.xH)((e) => e.titleFocused || e.bodyFocused, c.X),
        ta = (0, eh.ZP)({
            id: "forum-grid-view",
            isEnabled: eu && tn && !tr,
            setFocus: te,
        }),
        ti = (0, ef.Z)({
            listRef: eo,
            padding: 96,
            isEnabled: !eu && tn && !tr,
            channel: t,
        }),
        tl = a.useCallback(
            (e, n, r) => (0 === e ? 0 : (0, ed.KW)(r, t.isMediaChannel() ? ed.Lv.SIXTEEN_BY_NINE : ed.Lv.THREE_BY_TWO)),
            [t],
        ),
        ts = ta.containerProps,
        { ref: to } = ts,
        tc = eC(ts, ["ref"]),
        td = D.ZP.getSidebarState(t.id),
        tu = null != td && (0, D.D5)(td),
        tm = (0, f.e7)([D.ZP], () => D.ZP.getSection(t.id)) === eg.ULH.MEMBERS;
    return (0, r.jsx)("div", {
        className: ep.container,
        ref: eM,
        "data-member-list-open": tm,
        children: (0, r.jsx)(b.Wdt, {
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        u &&
                            (0, r.jsx)(p.Z, {
                                channel: t,
                                draftType: z.d.FirstThreadMessage,
                                className: ep.uploadArea,
                                style: {
                                    right:
                                        tu && (null == n ? void 0 : n.isThreadSidebarFloating)
                                            ? n.threadSidebarWidth
                                            : 0,
                                },
                            }),
                        (0, r.jsx)(eR, { channel: t }),
                        (0, r.jsx)(b.nn4, { children: (0, r.jsx)(b.H, { children: eb.intl.string(eb.t.B2panI) }) }),
                        W
                            ? (0, r.jsx)("div", {
                                  className: ep.optInNotice,
                                  children: (0, r.jsx)(P.Z, { channel: t }),
                              })
                            : null,
                        eu
                            ? (0, r.jsx)(eh.KT, {
                                  navigator: ta,
                                  children: (0, r.jsx)(
                                      b.GMG,
                                      ej(
                                          {
                                              ref: (e) => {
                                                  var t;
                                                  (to.current =
                                                      null != (t = null == e ? void 0 : e.getScrollerNode())
                                                          ? t
                                                          : null),
                                                      e8(e);
                                              },
                                              itemGutter: 16,
                                              padding: 24,
                                              className: ep.grid,
                                              columns: eA,
                                              sections: eU,
                                              getItemKey: e4,
                                              getSectionHeight: e2,
                                              getItemHeight: tl,
                                              renderSection: e9,
                                              renderItem: e7,
                                              getSectionProps: e5,
                                              onScroll: y ? tt : void 0,
                                              chunkSize: 350,
                                          },
                                          tc,
                                          e,
                                      ),
                                      B,
                                  ),
                              })
                            : (0, r.jsx)(d.bG, {
                                  navigator: ti,
                                  children: (0, r.jsx)(d.SJ, {
                                      children: (t) => {
                                          var { ref: n } = t,
                                              a = eC(t, ["ref"]);
                                          return (0, r.jsx)(
                                              b._2F,
                                              ev(
                                                  ej(
                                                      {
                                                          ref: eQ(n),
                                                          className: ep.list,
                                                          sections: eU,
                                                          sectionHeight: e3,
                                                          rowHeight: e6,
                                                          renderRow: e0,
                                                          renderSection: e$,
                                                          chunkSize: 150,
                                                          onScroll: y ? tt : void 0,
                                                          paddingBottom: 24,
                                                      },
                                                      a,
                                                      e,
                                                  ),
                                                  { innerRole: "list" },
                                              ),
                                              B,
                                          );
                                      },
                                  }),
                              }),
                    ],
                }),
        }),
    });
}
function eE(e) {
    let { channel: t, coords: n } = e,
        a = (0, y.ZP)(t);
    return (0, r.jsx)("div", {
        className: l()(ep.missingReadHistoryPermission, ep.columnsSpan),
        style: n,
        children: (0, r.jsx)(b.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eb.intl.format(eb.t.TycmzM, { channelName: a }),
        }),
    });
}
function e_(e) {
    let { channel: t, coords: n } = e,
        a = (0, y.ZP)(t);
    return (0, r.jsx)("div", {
        className: l()(ep.missingReadHistoryPermission, ep.columnsSpan),
        style: n,
        children: (0, r.jsx)(b.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eb.intl.format(eb.t.OWZJdS, { channelName: a }),
        }),
    });
}
function eR(e) {
    let { channel: t } = e,
        n = a.useCallback(() => {
            X.Z.resort(t.id);
        }, [t]),
        i = (0, f.e7)([K.Z], () => K.Z.getNewThreadCount());
    return 0 === i
        ? null
        : (0, r.jsx)(b.P3F, {
              className: ep.newPostsButton,
              onClick: n,
              children: (0, r.jsx)(b.Text, {
                  color: "text-brand",
                  variant: "text-md/medium",
                  children: eb.intl.format(eb.t.ue1qfM, { count: i }),
              }),
          });
}
function eM() {
    return Promise.resolve();
}
function eZ(e) {
    var t, n, i;
    let { channel: s, isEmpty: p, isSearchLoading: v, numResults: y, children: w, coords: O, onHeightChange: P } = e,
        {
            name: I,
            formOpen: R,
            titleFocused: M,
            hasClickedForm: Z,
            textAreaState: k,
            onboardingExpanded: A,
            setEditorAdditionRowHeight: F,
        } = (0, ei.xH)((e) => {
            let {
                name: t,
                formOpen: n,
                titleFocused: r,
                hasClickedForm: a,
                textAreaState: i,
                onboardingExpanded: l,
                setEditorAdditionRowHeight: s,
            } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: r,
                hasClickedForm: a,
                textAreaState: i,
                onboardingExpanded: l,
                setEditorAdditionRowHeight: s,
            };
        }, c.X),
        { tagFilter: D, layoutType: H } = (0, Y.H)(s.id),
        U = (0, ei.AF)(),
        q = (0, Y.v)(),
        K = (0, f.e7)([B.Z], () => B.Z.canChatInGuild(s.guild_id)),
        Q = (0, J.r_)(s),
        $ = (0, L.cD)(s),
        [et, ea] = a.useState($),
        [, es] = (0, S.AB)(null != (i = s.getGuildId()) ? i : void 0),
        eo = (0, _.HL)(s),
        ed = K && ($ || (et && es)) && !eo,
        em = s.isMediaChannel();
    a.useEffect(() => {
        $ && ea(!0);
    }, [$]);
    let { ref: eh, height: ef } = (0, j.ZP)();
    a.useEffect(() => {
        null != ef && P(ef);
    }, [P, ef]);
    let ex = a.useCallback(() => {
        o()(() => {
            null != eh.current && U.getState().setEditorHeight(eh.current.offsetHeight);
        });
    }, [eh, U]);
    a.useLayoutEffect(ex, [ex, p, ed, A]),
        (0, W.yp)({
            event: eg.CkL.REMEASURE_TARGET,
            handler: ex,
        });
    let ey = (0, f.e7)([G.Z], () => G.Z.getUploads(s.id, z.d.FirstThreadMessage)),
        eT = (0, J.ql)(s),
        eS = a.useRef(null),
        eN = a.useRef(null),
        [ew, eO] = a.useState(0),
        { width: eP } = (0, f.e7)([V.Z], () => V.Z.windowSize()),
        eI = null == (n = eS.current) || null == (t = n.getBoundingClientRect()) ? void 0 : t.width,
        eE = a.useRef(null),
        e_ = a.useRef(null);
    a.useLayoutEffect(() => {
        var e;
        let t = eN.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0];
        if (null != eS.current && null != n && null != n.children) {
            let { left: e, top: t } = eS.current.getBoundingClientRect(),
                r = 0;
            for (let a of n.children) {
                let { right: n, top: i, height: l } = a.getBoundingClientRect();
                if (i - t > l) break;
                n - e > r && (r = n - e);
            }
            eO(r);
        }
    }, [s.availableTags, eP, eI, D]);
    let eR = I.length > 0 && !R && (v || null != y),
        eZ =
            !__OVERLAY__ &&
            !Z &&
            !R &&
            M &&
            (0 === k.textValue.trim().length || k.textValue.trim() === eT) &&
            0 === ey.length &&
            !eo;
    a.useLayoutEffect(() => {
        let e = eR || eZ;
        if (!e) return F(0);
        null != eE.current && F(e ? eE.current.clientHeight : 0);
    }, [F, eR, eZ, eE]);
    let eA = (0, u.ZP)({
            id: "".concat(s.id, "-tags-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eM,
            scrollToEnd: eM,
            orientation: m.hy.HORIZONTAL,
        }),
        eL = (0, d.JA)("forum-channel-header"),
        { role: eF, onFocus: eD } = eL,
        eH = eC(eL, ["role", "onFocus"]),
        ez = a.useRef(null),
        eB = (function () {
            let e = a.useRef(!1),
                t = (0, f.e7)([C.Z], () => C.Z.keyboardModeEnabled),
                n = a.useCallback(
                    (t) => {
                        e.current = t.shiftKey;
                    },
                    [e],
                );
            return (
                a.useLayoutEffect(
                    () => (
                        t ? window.addEventListener("keydown", n) : window.removeEventListener("keydown", n),
                        () => window.removeEventListener("keydown", n)
                    ),
                    [t, n],
                ),
                e
            );
        })(),
        eU = a.useCallback(
            (e) => {
                if ((eD(), e.target === eh.current && !eB.current)) {
                    var t;
                    null == (t = ez.current) || t.focus();
                }
            },
            [eD, eh, eB],
        ),
        eG = a.useMemo(() => (eo ? (0, E.iq)(s.availableTags) : s.availableTags), [s.availableTags, eo]);
    return (0, r.jsx)(
        "div",
        ev(
            ej(
                {
                    className: l()(ep.card, ep.headerRow, ep.columnsSpan),
                    ref: eh,
                    onFocus: eU,
                },
                eH,
            ),
            {
                style: ev(ej({}, O), {
                    position: H === h.X.GRID ? "absolute" : "static",
                    height: "auto",
                }),
                children: (0, r.jsxs)(W.I3, {
                    children: [
                        null != s.guild_id
                            ? (0, r.jsx)(N.Z, {
                                  className: l()(ep.newMemberBanner, { [ep.gridViewBanner]: H === h.X.GRID }),
                                  guildId: s.guild_id,
                                  channel: s,
                              })
                            : null,
                        (0, r.jsx)("div", {
                            className: l()(ep.mainCard, ep.header, { [ep.headerWithMatchingPosts]: eR || eZ }),
                            children: (0, r.jsx)(el.Z, {
                                parentChannel: s,
                                onChange: ex,
                                isSearchLoading: v,
                                numResults: y,
                                canCreatePost: ed,
                                inputRef: ez,
                            }),
                        }),
                        (eR || eZ) &&
                            (0, r.jsxs)("div", {
                                className: ep.matchingPostsRow,
                                ref: eE,
                                children: [
                                    eR &&
                                        (0, r.jsxs)("div", {
                                            className: ep.matchingPosts,
                                            children: [
                                                (0, r.jsx)(b.Heading, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: v
                                                        ? eb.intl.string(eb.t["/9i3qq"])
                                                        : 0 === y
                                                          ? eb.intl.string(eb.t.DbgHxi)
                                                          : eb.intl.formatToPlainString(eb.t["tBz/8b"], {
                                                                numPosts: null != y ? y : "",
                                                                query: I,
                                                            }),
                                                }),
                                                !v &&
                                                    (0, r.jsx)(b.P3F, {
                                                        onClick: () => {
                                                            (0, ee.zI)({
                                                                guildId: s.guild_id,
                                                                channelId: s.id,
                                                            }),
                                                                X.Z.clearForumSearch(s.id),
                                                                U.getState().setName("");
                                                        },
                                                        children: (0, r.jsx)(b.Text, {
                                                            variant: "text-xs/semibold",
                                                            color: "text-brand",
                                                            className: ep.clear,
                                                            children: eb.intl.string(eb.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    (0, r.jsx)("div", { className: ep.tagsSpacer }),
                                    eZ
                                        ? ed
                                            ? (0, r.jsxs)("div", {
                                                  className: ep.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(b.M2$, {
                                                          shortcut: "SHIFT",
                                                          className: ep.keyboardShortcut,
                                                      }),
                                                      (0, r.jsx)(b.Text, {
                                                          variant: "text-xs/normal",
                                                          color: "text-subtle",
                                                          children: "+",
                                                      }),
                                                      (0, r.jsx)(b.M2$, {
                                                          shortcut: "ENTER",
                                                          className: ep.keyboardShortcut,
                                                      }),
                                                      (0, r.jsx)(b.Text, {
                                                          variant: "text-xs/normal",
                                                          color: "text-subtle",
                                                          children: eb.intl.string(eb.t.ZvJ0yh),
                                                      }),
                                                  ],
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: ep.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(b.Mgn, {
                                                          size: "custom",
                                                          color: "currentColor",
                                                          height: 14,
                                                          width: 14,
                                                          className: ep.warnIcon,
                                                      }),
                                                      (0, r.jsx)(b.Text, {
                                                          variant: "text-xs/normal",
                                                          color: "text-subtle",
                                                          children: eb.intl.string(eb.t.iyzwnD),
                                                      }),
                                                  ],
                                              })
                                        : null,
                                ],
                            }),
                        (0, r.jsx)(en.Z, {
                            channel: s,
                            onChange: ex,
                        }),
                        (0, r.jsxs)("div", {
                            className: ep.tagsContainer,
                            ref: eS,
                            children: [
                                (0, r.jsx)(ek, { channel: s }),
                                eG.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", { className: ep.divider }),
                                              (0, r.jsx)("div", {
                                                  className: ep.tagList,
                                                  ref: eN,
                                                  children: (0, r.jsx)(d.bG, {
                                                      navigator: eA,
                                                      children: (0, r.jsx)(d.SJ, {
                                                          children: (e) => {
                                                              var { ref: t } = e,
                                                                  n = eC(e, ["ref"]);
                                                              return (0, r.jsx)(
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
                                                                          children: eG.map((e) =>
                                                                              (0, r.jsx)(
                                                                                  ec.Z,
                                                                                  {
                                                                                      tag: e,
                                                                                      onClick: () => {
                                                                                          var t;
                                                                                          return (
                                                                                              (t = e.id),
                                                                                              void ((0, ee.e7)({
                                                                                                  guildId: s.guild_id,
                                                                                                  channelId: s.id,
                                                                                                  tagId: t,
                                                                                                  filterTagIds:
                                                                                                      Array.from(D),
                                                                                                  added: !D.has(t),
                                                                                                  location: {
                                                                                                      page: eg.ZY5
                                                                                                          .GUILD_CHANNEL,
                                                                                                      section:
                                                                                                          eg.jXE
                                                                                                              .FORUM_CHANNEL_HEADER,
                                                                                                      object: eg.qAy
                                                                                                          .CHANNEL_TAG,
                                                                                                  },
                                                                                              }),
                                                                                              q
                                                                                                  .getState()
                                                                                                  .toggleTagFilter(
                                                                                                      s.id,
                                                                                                      t,
                                                                                                  ))
                                                                                          );
                                                                                      },
                                                                                      selected: D.has(e.id),
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
                                              (0, r.jsx)(b.yRy, {
                                                  targetElementRef: e_,
                                                  renderPopout: (e) => {
                                                      let { closePopout: t, setPopoutRef: n } = e;
                                                      return (0, r.jsx)(eu.Z, {
                                                          channel: s,
                                                          closePopout: t,
                                                          setPopoutRef: n,
                                                      });
                                                  },
                                                  position: "bottom",
                                                  align: "right",
                                                  children: (e, t) => {
                                                      let { isShown: n } = t;
                                                      return (0, r.jsxs)(
                                                          x.zx,
                                                          ev(ej({}, e), {
                                                              "data-migration-pending": !0,
                                                              buttonRef: e_,
                                                              size: x.zx.Sizes.MIN,
                                                              color: x.zx.Colors.CUSTOM,
                                                              className: l()(ep.tagsButton, {
                                                                  [ep.tagsButtonWithCount]: D.size > 0,
                                                              }),
                                                              style: { left: ew },
                                                              innerClassName: ep.tagsButtonInner,
                                                              "aria-label":
                                                                  D.size > 0
                                                                      ? eb.intl.string(eb.t.IkpM1T)
                                                                      : eb.intl.string(eb.t["9vKK/N"]),
                                                              children: [
                                                                  D.size > 0
                                                                      ? (0, r.jsx)("div", {
                                                                            className: ep.countContainer,
                                                                            children: (0, r.jsx)(b.Text, {
                                                                                className: ep.countText,
                                                                                color: "none",
                                                                                variant: "text-xs/medium",
                                                                                children: D.size,
                                                                            }),
                                                                        })
                                                                      : eb.intl.string(eb.t.fZ8hzm),
                                                                  n
                                                                      ? (0, r.jsx)(b.u04, {
                                                                            size: "custom",
                                                                            color: "currentColor",
                                                                            width: 20,
                                                                        })
                                                                      : (0, r.jsx)(b.CJ0, {
                                                                            size: "custom",
                                                                            color: "currentColor",
                                                                            width: 20,
                                                                        }),
                                                              ],
                                                          }),
                                                      );
                                                  },
                                              }),
                                              (0, r.jsxs)(x.zx, {
                                                  "data-migration-pending": !0,
                                                  size: x.zx.Sizes.MIN,
                                                  color: x.zx.Colors.CUSTOM,
                                                  className: l()(ep.tagsButton, ep.tagsButtonPlaceholder),
                                                  innerClassName: ep.tagsButtonInner,
                                                  "aria-label": eb.intl.string(eb.t.IkpM1T),
                                                  children: [
                                                      D.size > 0
                                                          ? (0, r.jsx)("div", {
                                                                className: ep.countContainer,
                                                                children: (0, r.jsx)(b.Text, {
                                                                    className: ep.countText,
                                                                    color: "none",
                                                                    variant: "text-xs/medium",
                                                                    children: D.size,
                                                                }),
                                                            })
                                                          : null,
                                                      (0, r.jsx)(b.u04, {
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
                        w,
                        Q &&
                            !em &&
                            !eo &&
                            (0, r.jsx)(T.ZP, {
                                contentTypes: [g.z.FORUM_CHANNEL_HELPER_CARD],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === g.z.FORUM_CHANNEL_HELPER_CARD
                                        ? (0, r.jsx)(er.Z, { onDismiss: n })
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
function ek(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        i = a.useRef(null);
    return (0, r.jsx)(b.yRy, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(eo.Z, {
                channel: t,
                closePopout: n,
            });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: a } = t;
            return (0, r.jsxs)(
                x.zx,
                ev(ej({}, e), {
                    "data-migration-pending": !0,
                    buttonRef: i,
                    size: x.zx.Sizes.MIN,
                    color: x.zx.Colors.CUSTOM,
                    className: ep.sortDropdown,
                    innerClassName: ep.sortDropdownInner,
                    "aria-label": n ? eb.intl.string(eb.t.JxU0wr) : eb.intl.string(eb.t.xyYt8A),
                    children: [
                        (0, r.jsx)(b.uVW, {
                            size: "xs",
                            color: "currentColor",
                        }),
                        (0, r.jsx)(b.Text, {
                            className: ep.sortDropdownText,
                            variant: "text-sm/medium",
                            color: "interactive-text-default",
                            children: (0, r.jsx)("span", {
                                className: ep.sortDropdownTextHighContrastForcedColor,
                                children: n ? eb.intl.string(eb.t.JxU0wr) : eb.intl.string(eb.t.xyYt8A),
                            }),
                        }),
                        a
                            ? (0, r.jsx)(b.u04, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 20,
                              })
                            : (0, r.jsx)(b.CJ0, {
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
