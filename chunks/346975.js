n.r(t), n.d(t, { default: () => eC }), n(35282), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    s = n(196434),
    o = n.n(s),
    c = n(55160),
    d = n(91192),
    u = n(924826),
    m = n(536895),
    h = n(313361),
    g = n(442837),
    f = n(704215),
    x = n(755721),
    p = n(481060),
    b = n(561472),
    j = n(393238),
    v = n(493773),
    _ = n(607070),
    C = n(933557),
    y = n(243778),
    T = n(71619),
    w = n(898188),
    S = n(41776),
    N = n(256413),
    O = n(292853),
    P = n(869382),
    I = n(982168),
    E = n(216572),
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
    K = n(883429),
    X = n(238349),
    Y = n(109434),
    J = n(456269),
    Q = n(90372),
    $ = n(985518),
    ee = n(228392),
    et = n(355589),
    en = n(542581),
    er = n(639184),
    ei = n(404616),
    ea = n(470623),
    el = n(749913),
    es = n(219664),
    eo = n(895932),
    ec = n(479099),
    ed = n(510060),
    eu = n(276357),
    em = n(81490),
    eh = n(482062),
    eg = n(260503),
    ef = n(981631),
    ex = n(124368),
    ep = n(388032),
    eb = n(816922);
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
function e_(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eC(e) {
    let { channel: t, guild: n, sidebarState: i } = e;
    return (0, r.jsx)(
        ea.oL,
        {
            channel: t,
            children: (0, r.jsx)(eP, {
                channel: t,
                guild: n,
                sidebarState: i,
            }),
        },
        t.id,
    );
}
let ey = new ed.Me({
    minWidth: 320,
    maxWidth: 450,
    gap: 16,
});
function eT(e) {
    return "forum-grid-header-section-".concat(e);
}
function ew(e) {
    let { itemRole: t, coords: n, section: i } = e;
    return (0, r.jsx)(
        "div",
        {
            className: l()(eb.card, eb.archivedDividerRow, eb.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, r.jsx)("div", {
                className: eb.emptyMainCard,
                children: (0, r.jsx)(p.Heading, {
                    variant: "eyebrow",
                    className: eb.archivedDivider,
                    id: eT(i),
                    children: ep.intl.string(ep.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}
function eS(e) {
    let { section: t, coords: n, key: i, isShowingSearchResult: a, hasActiveThreads: l } = e;
    return () =>
        2 === t && !a && l
            ? (0, r.jsx)(
                  ew,
                  {
                      section: t,
                      coords: null == n ? void 0 : ev(ej({}, n), { position: "absolute" }),
                      itemRole: "section",
                  },
                  i,
              )
            : null;
}
function eN(e, t) {
    return "card-".concat(e, "-").concat(t);
}
function eO(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function eP(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: a,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: u,
            name: m,
        } = (0, ea.xH)((e) => {
            let {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: r,
                formOpen: i,
                cardHeightVersion: a,
                name: l,
            } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: r,
                formOpen: i,
                name: l,
                cardHeightVersion: a,
            };
        }, c.X),
        {
            activeThreadIds: f,
            archivedThreadIds: x,
            searchResults: j,
            canLoadMore: C,
            loadMore: y,
            activeThreadsLoading: T,
            archivedThreadsLoading: w,
            loading: E,
            isSearchLoading: L,
            layoutType: B,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: r, tagSetting: i } = (0, Y.H)(e.id),
                a = (0, J.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: i,
                    shouldAutomaticallyAck: !0,
                }),
                l = (0, g.e7)([k.Z, S.Z], () => {
                    let t = k.Z.hasLoaded(e.guild_id),
                        n = S.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: s, canLoadMore: o, loadMore: c, loading: d } = (0, A.qQ)(e, t, n, i),
                { searchResults: u, isSearchLoading: m } = (0, J.XZ)({ channelId: e.id });
            return (
                (0, J.ES)(e, t, n, i),
                {
                    activeThreadIds: a,
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
        G = f.length > 0,
        V = G || x.length > 0,
        W = (0, N.Z)(t),
        { tagFilter: X, tagSetting: en } = (0, Y.H)(t.id);
    (0, J.ku)(t, X, en, u),
        (0, v.ZP)(() => {
            !u && m.length > 0 && K.Z.updateForumSearchQuery(t.id, m);
        });
    let er = (0, J.jR)(t),
        el = (0, J.eZ)(t),
        eo = i.useRef(null),
        { observePostVisibilityAnalytics: ec } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: r } = e;
            Q.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n,
            });
            let a = i.useRef(null),
                l = i.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let r = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, $.rj)(e, t, r) : (0, $.Ct)(e, t, r);
                    }
                }, []);
            return (
                i.useEffect(() => {
                    var e;
                    let t = null == (e = r.current) ? void 0 : e.getScrollerNode();
                    if (null != t)
                        return (
                            (a.current = new IntersectionObserver((e) => l(n, e), {
                                root: t,
                                rootMargin: "0px 100000px 0px 100000px",
                                threshold: 0.5,
                            })),
                            () => {
                                var e;
                                null == (e = a.current) || e.disconnect(), (a.current = null);
                            }
                        );
                }, [n, l, r]),
                {
                    observePostVisibilityAnalytics: i.useCallback(
                        (e, t) => {
                            var r;
                            if (null == e) return void (0, $.Ct)(n, t, Date.now());
                            null == (r = a.current) || r.observe(e);
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
        { searchQuery: eC } = (0, J.XZ)({ channelId: t.id }),
        ew = null != j && null != eC && eC.length > 0,
        eP = i.useRef(null),
        { containerRef: eM, containerWidth: ek } = (0, em.Z)();
    i.useEffect(() => {
        if (null == eP.current && null != t.id) {
            let e = D.ZP.getSidebarState(t.id);
            null != e && e.type === Z.tI.VIEW_THREAD && (eP.current = e.channelId);
        }
    }, [t.id]);
    let { columns: eA } = i.useMemo(() => (eu ? ey.getRenderOptions(ek) : ed.eU), [eu, ek]),
        eL = i.useMemo(() => (E ? Math.round((window.innerHeight - 200) / 118) : 0), [E]),
        { showResolvedFlags: eF } = (0, P.N)(t.id),
        eD = t.isModeratorReportChannel(),
        eH = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ed.KW)(ey.getWidth(ek))) * eA;
            return T ? e : 0;
        }, [ek, eA, T]),
        ez = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ed.KW)(ey.getWidth(ek))) * eA;
            return w ? e : 0;
        }, [ek, eA, w]),
        eB = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ed.KW)(ey.getWidth(ek))) * eA;
            return L && ew ? e : 0;
        }, [ek, eA, L, ew]),
        eU = i.useMemo(() => {
            if (eu)
                if (!er && ew) return [1, 0];
                else if (!el) return [1, f.length + eH, 0];
                else if (ew) return [1, j.length + eB, 0];
                else if (eD && !eF) return [1, f.length + eH, 0];
                else return [1, f.length + eH, x.length + ez];
            if (!er && ew) return [1, 1];
            if (!el) return [1, f.length, 1];
            if (ew) return [1, j.length, 0, eL];
            if (eD && !eF) return [1, f.length, 0, eL];
            else return [1, f.length, x.length, eL];
        }, [eu, ew, f.length, x.length, er, el, eL, j, eH, ez, eB, eF, eD]),
        eG = i.useMemo(
            () =>
                !er && ew
                    ? [[], []]
                    : el
                      ? ew
                          ? [[], j, [], []]
                          : eD && !eF
                            ? [[], f, [], []]
                            : [[], f, x, []]
                      : [[], f, []],
            [ew, er, el, j, f, x, eF, eD],
        ),
        eV = i.useCallback(
            (e, n) => {
                (0, ee.B5)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: {
                        page: ef.ZY5.GUILD_CHANNEL,
                        section: ef.jXE.FORUM_CHANNEL_POST,
                    },
                }),
                    n ? (0, M.ad)(e, { source: ex.on.BROWSER }) : ((eP.current = e.id), (0, F.ok)(e));
            },
            [t.guild_id, t.id, eP],
        ),
        [eW, eq] = i.useState(a + s - 24),
        eK = i.useCallback(
            (e, n, i) =>
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
                                  !E &&
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
                      ? 1 === e && ew && !er
                          ? (0, r.jsx)(
                                eE,
                                {
                                    channel: t,
                                    coords: n,
                                },
                                "archive-or-search-result",
                            )
                          : i()
                      : (0, r.jsx)(
                            eI,
                            {
                                channel: t,
                                coords: n,
                            },
                            "archived-missing-reading-history-perm",
                        ),
            [ew, el, j, er, t, G, L, E, V],
        ),
        eX = (0, g.e7)([q.Z], () => q.Z.hasHidden(t.id)),
        eY = {
            editorHeight: a,
            isGridLayout: eu,
        },
        eJ = i.useRef(eY);
    i.useEffect(() => {
        eJ.current = eY;
    }),
        i.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: r } = eJ.current,
                i = r ? e6 : eo,
                a = null == (e = i.current) ? void 0 : e.getScrollerState();
            null != a && !eX && a.scrollTop > n && (null == (t = i.current) || t.scrollTo({ to: 0 }));
        }, [eX]);
    let {
            updateListScrollerRef: eQ,
            renderListSection: e$,
            renderListItem: e0,
            getListSectionHeight: e3,
            getListItemHeight: e1,
        } = (function (e) {
            let {
                    listRef: t,
                    hasActiveThreads: n,
                    threadIdsBySection: a,
                    listViewCardHeights: s,
                    editorHeight: o,
                    editorAdditionRowHeight: c,
                    renderSectionOrItem: d,
                    goToThread: u,
                    observePostVisibilityAnalytics: m,
                    isShowingSearchResult: h,
                } = e,
                f = (0, g.e7)([U.Z], () => U.Z.getChannelId()),
                x = i.useCallback(
                    (e) => (n) => {
                        var r;
                        (t.current = n),
                            (e.current = null != (r = null == n ? void 0 : n.getScrollerNode()) ? r : null);
                    },
                    [t],
                ),
                b = i.useCallback(
                    (e) =>
                        eS({
                            section: e.section,
                            isShowingSearchResult: h,
                            hasActiveThreads: n,
                        })(),
                    [n, h],
                ),
                j = i.useCallback(
                    (e) =>
                        d(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, r.jsx)(
                                          "div",
                                          {
                                              "data-item-role": "item",
                                              className: l()(eb.loadingCard, eb["loadingCard-".concat(e.row % 3)]),
                                          },
                                          "loading-".concat(e.row),
                                      );
                            let t = a[e.section][e.row],
                                n = null != f && (0, I.UD)(f) ? R.ZP : ei.ZP;
                            return (0, r.jsx)(
                                "li",
                                {
                                    className: eb.card,
                                    "data-item-role": "item",
                                    children: (0, r.jsx)(p.y5t, {
                                        children: (0, r.jsx)(n, {
                                            className: eb.mainCard,
                                            threadId: t,
                                            goToThread: u,
                                            observePostVisibilityAnalytics: m,
                                        }),
                                    }),
                                },
                                "".concat(e.section, "-").concat(t),
                            );
                        }),
                    [d, a, f, u, m],
                ),
                v = i.useCallback(
                    (e, t) => {
                        if (0 === e) return o + c;
                        let n = s[a[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [a, s, o, c],
                );
            return {
                updateListScrollerRef: x,
                renderListSection: b,
                renderListItem: j,
                getListSectionHeight: i.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: v,
            };
        })({
            listRef: eo,
            hasActiveThreads: G,
            threadIdsBySection: eG,
            listViewCardHeights: o,
            editorHeight: a,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eK,
            goToThread: eV,
            observePostVisibilityAnalytics: ec,
            isShowingSearchResult: ew,
        }),
        e6 = i.useRef(null),
        {
            updateMasonryListScrollerRef: e4,
            getItemKey: e8,
            renderGridSection: e9,
            renderGridItem: e5,
            getGridSectionHeight: e2,
            getSectionProps: e7,
            handleGridFocus: te,
        } = (function (e) {
            let {
                    masonryListScrollerRef: t,
                    threadIdsBySection: n,
                    goToThread: a,
                    renderSectionOrItem: s,
                    hasActiveThreads: o,
                    isShowingSearchResult: c,
                    canSearchForumPosts: d,
                    canViewArchivedPosts: u,
                    observePostVisibilityAnalytics: m,
                    focusedThreadId: h,
                    headerHeight: g,
                } = e,
                f = i.useRef(null),
                x = i.useCallback(
                    (e) => {
                        (t.current = e), (f.current = null == e ? void 0 : e.getScrollerNode());
                    },
                    [t],
                ),
                p = i.useCallback(
                    (e, n) => {
                        let { current: r } = t;
                        if (null == r) return;
                        let i = document.querySelector(e);
                        if (null == i) return;
                        let a = r.getCoordsMap()[n],
                            l = null != a ? a.height + 20 : 200;
                        r.scrollIntoViewNode({
                            node: i,
                            padding: l,
                            callback() {
                                requestAnimationFrame(() => {
                                    var t;
                                    null == (t = document.querySelector(e)) || t.focus({ preventScroll: !0 });
                                });
                            },
                        }),
                            (h.current = eO(n));
                    },
                    [t, h],
                ),
                b = i.useCallback(
                    (e) => {
                        let t = eO(e);
                        if (null == t) return;
                        let n = H.Z.getChannel(t);
                        null != n && a(n, !0);
                    },
                    [a],
                ),
                j = i.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return "section-".concat(e, "-").concat(t);
                        {
                            let r = n[e][t];
                            return null == r ? eN(e, t) : eN(e, r);
                        }
                    },
                    [n],
                ),
                v = i.useCallback(
                    (e, t, n) =>
                        s(
                            e,
                            t,
                            eS({
                                section: e,
                                coords: t,
                                key: n,
                                isShowingSearchResult: c,
                                hasActiveThreads: o,
                            }),
                        ),
                    [s, o, c],
                ),
                _ = i.useCallback(
                    (e) =>
                        0 === e
                            ? {}
                            : {
                                  role: "grid",
                                  "aria-labelledby": "#".concat(eT(e)),
                              },
                    [],
                );
            return {
                updateMasonryListScrollerRef: x,
                masonryListContainerRef: f,
                focusedThreadId: h,
                handleGridFocus: p,
                handleGridSelect: b,
                getItemKey: j,
                renderGridSection: v,
                renderGridItem: i.useCallback(
                    (e, t, i, s, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, r.jsx)(
                                  es.Z,
                                  {
                                      id: "".concat(s),
                                      threadId: c,
                                      className: l()(eb.card, eb.mainCard),
                                      goToThread: a,
                                      observePostVisibilityAnalytics: m,
                                      coords: i,
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
                                        style: ej({}, i),
                                        "data-item-role": "item",
                                        className: l()(eb.loadingCard, eb["loadingCard-".concat(t % 3)]),
                                    },
                                    s,
                                );
                    },
                    [n, a, m],
                ),
                getSectionProps: _,
                getGridSectionHeight: i.useCallback(
                    (e) => (0 === e ? g - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0),
                    [g, c, d, o, u],
                ),
            };
        })({
            masonryListScrollerRef: e6,
            threadIdsBySection: eG,
            goToThread: eV,
            renderSectionOrItem: eK,
            hasActiveThreads: G,
            isShowingSearchResult: ew,
            canSearchForumPosts: er,
            canViewArchivedPosts: el,
            observePostVisibilityAnalytics: ec,
            focusedThreadId: eP,
            headerHeight: eW,
        });
    !(function (e) {
        let {
            masonryListScrollerRef: t,
            containerWidth: n,
            isGridLayout: r,
            threadIdsBySection: a,
            focusedThreadId: l,
            parentId: s,
        } = e;
        i.useEffect(() => {
            if (r) {
                let e = setTimeout(() => {
                    if (null == t.current || null == l.current) return;
                    let e = l.current;
                    if ("string" != typeof e) return;
                    null == D.ZP.getSidebarState(s) && (l.current = null);
                    let n = a.findIndex((t) => t.find((t) => t === e)),
                        r = t.current.getCoordsMap(),
                        i = r["__section__".concat(n)],
                        o = r[eN(n, e)];
                    null != i &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: i.top + o.top - 100,
                            end: i.top + o.top + o.height + 50,
                        });
                }, 0);
                return () => clearTimeout(e);
            }
        }, [s, n, r, a, l, t]);
    })({
        masonryListScrollerRef: e6,
        containerWidth: ek,
        isGridLayout: eu,
        threadIdsBySection: eG,
        parentId: t.id,
        focusedThreadId: eP,
    });
    let tt = i.useCallback(() => {
            var e, n;
            if (ew) return;
            let r = eu
                ? null == (e = e6.current)
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
            let i = r.scrollTop + r.offsetHeight;
            r.scrollHeight - i < (eu ? Math.max(200, (0, ed.KW)(ek)) : 200) && y();
        }, [ew, eu, t.guild_id, t.id, ek, y]),
        tn = (0, g.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        tr = (0, ea.xH)((e) => e.titleFocused || e.bodyFocused, c.X),
        ti = (0, eh.ZP)({
            id: "forum-grid-view",
            isEnabled: eu && tn && !tr,
            setFocus: te,
        }),
        ta = (0, eg.Z)({
            listRef: eo,
            padding: 96,
            isEnabled: !eu && tn && !tr,
            channel: t,
        }),
        tl = i.useCallback(
            (e, n, r) => (0 === e ? 0 : (0, ed.KW)(r, t.isMediaChannel() ? ed.Lv.SIXTEEN_BY_NINE : ed.Lv.THREE_BY_TWO)),
            [t],
        ),
        ts = ti.containerProps,
        { ref: to } = ts,
        tc = e_(ts, ["ref"]),
        td = D.ZP.getSidebarState(t.id),
        tu = null != td && (0, D.D5)(td),
        tm = (0, g.e7)([D.ZP], () => D.ZP.getSection(t.id)) === ef.ULH.MEMBERS;
    return (0, r.jsx)("div", {
        className: eb.container,
        ref: eM,
        "data-member-list-open": tm,
        children: (0, r.jsx)(p.Wdt, {
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        u &&
                            (0, r.jsx)(b.Z, {
                                channel: t,
                                draftType: z.d.FirstThreadMessage,
                                className: eb.uploadArea,
                                style: {
                                    right:
                                        tu && (null == n ? void 0 : n.isThreadSidebarFloating)
                                            ? n.threadSidebarWidth
                                            : 0,
                                },
                            }),
                        (0, r.jsx)(eR, { channel: t }),
                        (0, r.jsx)(p.nn4, { children: (0, r.jsx)(p.H, { children: ep.intl.string(ep.t.B2panI) }) }),
                        W
                            ? (0, r.jsx)("div", {
                                  className: eb.optInNotice,
                                  children: (0, r.jsx)(O.Z, { channel: t }),
                              })
                            : null,
                        eu
                            ? (0, r.jsx)(eh.KT, {
                                  navigator: ti,
                                  children: (0, r.jsx)(
                                      p.GMG,
                                      ej(
                                          {
                                              ref: (e) => {
                                                  var t;
                                                  (to.current =
                                                      null != (t = null == e ? void 0 : e.getScrollerNode())
                                                          ? t
                                                          : null),
                                                      e4(e);
                                              },
                                              itemGutter: 16,
                                              padding: 24,
                                              className: eb.grid,
                                              columns: eA,
                                              sections: eU,
                                              getItemKey: e8,
                                              getSectionHeight: e2,
                                              getItemHeight: tl,
                                              renderSection: e9,
                                              renderItem: e5,
                                              getSectionProps: e7,
                                              onScroll: C ? tt : void 0,
                                              chunkSize: 350,
                                          },
                                          tc,
                                          e,
                                      ),
                                      B,
                                  ),
                              })
                            : (0, r.jsx)(d.bG, {
                                  navigator: ta,
                                  children: (0, r.jsx)(d.SJ, {
                                      children: (t) => {
                                          var { ref: n } = t,
                                              i = e_(t, ["ref"]);
                                          return (0, r.jsx)(
                                              p._2F,
                                              ev(
                                                  ej(
                                                      {
                                                          ref: eQ(n),
                                                          className: eb.list,
                                                          sections: eU,
                                                          sectionHeight: e3,
                                                          rowHeight: e1,
                                                          renderRow: e0,
                                                          renderSection: e$,
                                                          chunkSize: 150,
                                                          onScroll: C ? tt : void 0,
                                                          paddingBottom: 24,
                                                      },
                                                      i,
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
function eI(e) {
    let { channel: t, coords: n } = e,
        i = (0, C.ZP)(t);
    return (0, r.jsx)("div", {
        className: l()(eb.missingReadHistoryPermission, eb.columnsSpan),
        style: n,
        children: (0, r.jsx)(p.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: ep.intl.format(ep.t.TycmzM, { channelName: i }),
        }),
    });
}
function eE(e) {
    let { channel: t, coords: n } = e,
        i = (0, C.ZP)(t);
    return (0, r.jsx)("div", {
        className: l()(eb.missingReadHistoryPermission, eb.columnsSpan),
        style: n,
        children: (0, r.jsx)(p.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: ep.intl.format(ep.t.OWZJdS, { channelName: i }),
        }),
    });
}
function eR(e) {
    let { channel: t } = e,
        n = i.useCallback(() => {
            K.Z.resort(t.id);
        }, [t]),
        a = (0, g.e7)([X.Z], () => X.Z.getNewThreadCount());
    return 0 === a
        ? null
        : (0, r.jsx)(p.P3F, {
              className: eb.newPostsButton,
              onClick: n,
              children: (0, r.jsx)(p.Text, {
                  color: "text-brand",
                  variant: "text-md/medium",
                  children: ep.intl.format(ep.t.ue1qfM, { count: a }),
              }),
          });
}
function eM() {
    return Promise.resolve();
}
function eZ(e) {
    var t, n, a;
    let { channel: s, isEmpty: b, isSearchLoading: v, numResults: C, children: S, coords: N, onHeightChange: O } = e,
        {
            name: P,
            formOpen: R,
            titleFocused: M,
            hasClickedForm: Z,
            textAreaState: k,
            onboardingExpanded: A,
            setEditorAdditionRowHeight: F,
        } = (0, ea.xH)((e) => {
            let {
                name: t,
                formOpen: n,
                titleFocused: r,
                hasClickedForm: i,
                textAreaState: a,
                onboardingExpanded: l,
                setEditorAdditionRowHeight: s,
            } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: r,
                hasClickedForm: i,
                textAreaState: a,
                onboardingExpanded: l,
                setEditorAdditionRowHeight: s,
            };
        }, c.X),
        { tagFilter: D, layoutType: H } = (0, Y.H)(s.id),
        U = (0, ea.AF)(),
        q = (0, Y.v)(),
        X = (0, g.e7)([B.Z], () => B.Z.canChatInGuild(s.guild_id)),
        Q = (0, J.r_)(s),
        $ = (0, L.cD)(s),
        [et, ei] = i.useState($),
        [, es] = (0, T.AB)(null != (a = s.getGuildId()) ? a : void 0),
        eo = (0, E.HL)(s),
        ed = X && ($ || (et && es)) && !eo,
        em = s.isMediaChannel();
    i.useEffect(() => {
        $ && ei(!0);
    }, [$]);
    let { ref: eh, height: eg } = (0, j.ZP)();
    i.useEffect(() => {
        null != eg && O(eg);
    }, [O, eg]);
    let ex = i.useCallback(() => {
        o()(() => {
            null != eh.current && U.getState().setEditorHeight(eh.current.offsetHeight);
        });
    }, [eh, U]);
    i.useLayoutEffect(ex, [ex, b, ed, A]),
        (0, W.yp)({
            event: ef.CkL.REMEASURE_TARGET,
            handler: ex,
        });
    let eC = (0, g.e7)([G.Z], () => G.Z.getUploads(s.id, z.d.FirstThreadMessage)),
        ey = (0, J.ql)(s),
        eT = i.useRef(null),
        ew = i.useRef(null),
        [eS, eN] = i.useState(0),
        { width: eO } = (0, g.e7)([V.Z], () => V.Z.windowSize()),
        eP = null == (n = eT.current) || null == (t = n.getBoundingClientRect()) ? void 0 : t.width,
        eI = i.useRef(null),
        eE = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        let t = ew.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0];
        if (null != eT.current && null != n && null != n.children) {
            let { left: e, top: t } = eT.current.getBoundingClientRect(),
                r = 0;
            for (let i of n.children) {
                let { right: n, top: a, height: l } = i.getBoundingClientRect();
                if (a - t > l) break;
                n - e > r && (r = n - e);
            }
            eN(r);
        }
    }, [s.availableTags, eO, eP, D]);
    let eR = P.length > 0 && !R && (v || null != C),
        eZ =
            !__OVERLAY__ &&
            !Z &&
            !R &&
            M &&
            (0 === k.textValue.trim().length || k.textValue.trim() === ey) &&
            0 === eC.length &&
            !eo;
    i.useLayoutEffect(() => {
        let e = eR || eZ;
        if (!e) return F(0);
        null != eI.current && F(e ? eI.current.clientHeight : 0);
    }, [F, eR, eZ, eI]);
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
        eH = e_(eL, ["role", "onFocus"]),
        ez = i.useRef(null),
        eB = (function () {
            let e = i.useRef(!1),
                t = (0, g.e7)([_.Z], () => _.Z.keyboardModeEnabled),
                n = i.useCallback(
                    (t) => {
                        e.current = t.shiftKey;
                    },
                    [e],
                );
            return (
                i.useLayoutEffect(
                    () => (
                        t ? window.addEventListener("keydown", n) : window.removeEventListener("keydown", n),
                        () => window.removeEventListener("keydown", n)
                    ),
                    [t, n],
                ),
                e
            );
        })(),
        eU = i.useCallback(
            (e) => {
                if ((eD(), e.target === eh.current && !eB.current)) {
                    var t;
                    null == (t = ez.current) || t.focus();
                }
            },
            [eD, eh, eB],
        ),
        eG = i.useMemo(() => (eo ? (0, I.iq)(s.availableTags) : s.availableTags), [s.availableTags, eo]);
    return (0, r.jsx)(
        "div",
        ev(
            ej(
                {
                    className: l()(eb.card, eb.headerRow, eb.columnsSpan),
                    ref: eh,
                    onFocus: eU,
                },
                eH,
            ),
            {
                style: ev(ej({}, N), {
                    position: H === h.X.GRID ? "absolute" : "static",
                    height: "auto",
                }),
                children: (0, r.jsxs)(W.I3, {
                    children: [
                        null != s.guild_id
                            ? (0, r.jsx)(w.Z, {
                                  className: l()(eb.newMemberBanner, { [eb.gridViewBanner]: H === h.X.GRID }),
                                  guildId: s.guild_id,
                                  channel: s,
                              })
                            : null,
                        (0, r.jsx)("div", {
                            className: l()(eb.mainCard, eb.header, { [eb.headerWithMatchingPosts]: eR || eZ }),
                            children: (0, r.jsx)(el.Z, {
                                parentChannel: s,
                                onChange: ex,
                                isSearchLoading: v,
                                numResults: C,
                                canCreatePost: ed,
                                inputRef: ez,
                            }),
                        }),
                        (eR || eZ) &&
                            (0, r.jsxs)("div", {
                                className: eb.matchingPostsRow,
                                ref: eI,
                                children: [
                                    eR &&
                                        (0, r.jsxs)("div", {
                                            className: eb.matchingPosts,
                                            children: [
                                                (0, r.jsx)(p.Heading, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: v
                                                        ? ep.intl.string(ep.t["/9i3qq"])
                                                        : 0 === C
                                                          ? ep.intl.string(ep.t.DbgHxi)
                                                          : ep.intl.formatToPlainString(ep.t["tBz/8b"], {
                                                                numPosts: null != C ? C : "",
                                                                query: P,
                                                            }),
                                                }),
                                                !v &&
                                                    (0, r.jsx)(p.P3F, {
                                                        onClick: () => {
                                                            (0, ee.zI)({
                                                                guildId: s.guild_id,
                                                                channelId: s.id,
                                                            }),
                                                                K.Z.clearForumSearch(s.id),
                                                                U.getState().setName("");
                                                        },
                                                        children: (0, r.jsx)(p.Text, {
                                                            variant: "text-xs/semibold",
                                                            color: "text-brand",
                                                            className: eb.clear,
                                                            children: ep.intl.string(ep.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    (0, r.jsx)("div", { className: eb.tagsSpacer }),
                                    eZ
                                        ? ed
                                            ? (0, r.jsxs)("div", {
                                                  className: eb.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(p.M2$, {
                                                          shortcut: "SHIFT",
                                                          className: eb.keyboardShortcut,
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: "text-xs/normal",
                                                          color: "text-secondary",
                                                          children: "+",
                                                      }),
                                                      (0, r.jsx)(p.M2$, {
                                                          shortcut: "ENTER",
                                                          className: eb.keyboardShortcut,
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: "text-xs/normal",
                                                          color: "text-secondary",
                                                          children: ep.intl.string(ep.t.ZvJ0yh),
                                                      }),
                                                  ],
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: eb.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(p.Mgn, {
                                                          size: "custom",
                                                          color: "currentColor",
                                                          height: 14,
                                                          width: 14,
                                                          className: eb.warnIcon,
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: "text-xs/normal",
                                                          color: "text-secondary",
                                                          children: ep.intl.string(ep.t.iyzwnD),
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
                            className: eb.tagsContainer,
                            ref: eT,
                            children: [
                                (0, r.jsx)(ek, { channel: s }),
                                eG.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", { className: eb.divider }),
                                              (0, r.jsx)("div", {
                                                  className: eb.tagList,
                                                  ref: ew,
                                                  children: (0, r.jsx)(d.bG, {
                                                      navigator: eA,
                                                      children: (0, r.jsx)(d.SJ, {
                                                          children: (e) => {
                                                              var { ref: t } = e,
                                                                  n = e_(e, ["ref"]);
                                                              return (0, r.jsx)(
                                                                  "div",
                                                                  ev(
                                                                      ej(
                                                                          {
                                                                              className: eb.tagListInner,
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
                                                                                                      page: ef.ZY5
                                                                                                          .GUILD_CHANNEL,
                                                                                                      section:
                                                                                                          ef.jXE
                                                                                                              .FORUM_CHANNEL_HEADER,
                                                                                                      object: ef.qAy
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
                                              (0, r.jsx)(p.yRy, {
                                                  targetElementRef: eE,
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
                                                              buttonRef: eE,
                                                              size: x.zx.Sizes.MIN,
                                                              color: x.zx.Colors.CUSTOM,
                                                              className: l()(eb.tagsButton, {
                                                                  [eb.tagsButtonWithCount]: D.size > 0,
                                                              }),
                                                              style: { left: eS },
                                                              innerClassName: eb.tagsButtonInner,
                                                              "aria-label":
                                                                  D.size > 0
                                                                      ? ep.intl.string(ep.t.IkpM1T)
                                                                      : ep.intl.string(ep.t["9vKK/N"]),
                                                              children: [
                                                                  D.size > 0
                                                                      ? (0, r.jsx)("div", {
                                                                            className: eb.countContainer,
                                                                            children: (0, r.jsx)(p.Text, {
                                                                                className: eb.countText,
                                                                                color: "none",
                                                                                variant: "text-xs/medium",
                                                                                children: D.size,
                                                                            }),
                                                                        })
                                                                      : ep.intl.string(ep.t.fZ8hzm),
                                                                  n
                                                                      ? (0, r.jsx)(p.u04, {
                                                                            size: "custom",
                                                                            color: "currentColor",
                                                                            width: 20,
                                                                        })
                                                                      : (0, r.jsx)(p.CJ0, {
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
                                                  className: l()(eb.tagsButton, eb.tagsButtonPlaceholder),
                                                  innerClassName: eb.tagsButtonInner,
                                                  "aria-label": ep.intl.string(ep.t.IkpM1T),
                                                  children: [
                                                      D.size > 0
                                                          ? (0, r.jsx)("div", {
                                                                className: eb.countContainer,
                                                                children: (0, r.jsx)(p.Text, {
                                                                    className: eb.countText,
                                                                    color: "none",
                                                                    variant: "text-xs/medium",
                                                                    children: D.size,
                                                                }),
                                                            })
                                                          : null,
                                                      (0, r.jsx)(p.u04, {
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
                        S,
                        Q &&
                            !em &&
                            !eo &&
                            (0, r.jsx)(y.ZP, {
                                contentTypes: [f.z.FORUM_CHANNEL_HELPER_CARD],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === f.z.FORUM_CHANNEL_HELPER_CARD
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
        a = i.useRef(null);
    return (0, r.jsx)(p.yRy, {
        targetElementRef: a,
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
            let { isShown: i } = t;
            return (0, r.jsxs)(
                x.zx,
                ev(ej({}, e), {
                    "data-migration-pending": !0,
                    buttonRef: a,
                    size: x.zx.Sizes.MIN,
                    color: x.zx.Colors.CUSTOM,
                    className: eb.sortDropdown,
                    innerClassName: eb.sortDropdownInner,
                    "aria-label": n ? ep.intl.string(ep.t.JxU0wr) : ep.intl.string(ep.t.xyYt8A),
                    children: [
                        (0, r.jsx)(p.uVW, {
                            size: "xs",
                            color: "currentColor",
                        }),
                        (0, r.jsx)(p.Text, {
                            className: eb.sortDropdownText,
                            variant: "text-sm/medium",
                            color: "interactive-normal",
                            children: (0, r.jsx)("span", {
                                className: eb.sortDropdownTextHighContrastForcedColor,
                                children: n ? ep.intl.string(ep.t.JxU0wr) : ep.intl.string(ep.t.xyYt8A),
                            }),
                        }),
                        i
                            ? (0, r.jsx)(p.u04, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 20,
                              })
                            : (0, r.jsx)(p.CJ0, {
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
