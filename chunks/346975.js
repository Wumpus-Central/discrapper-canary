n.r(t), n.d(t, { default: () => ey }), n(35282), n(388685), n(781311);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(196434),
    o = n.n(s),
    c = n(55160),
    d = n(91192),
    u = n(924826),
    m = n(536895),
    f = n(313361),
    h = n(442837),
    g = n(704215),
    x = n(755721),
    b = n(481060),
    p = n(561472),
    j = n(393238),
    v = n(493773),
    C = n(607070),
    y = n(933557),
    T = n(243778),
    w = n(71619),
    S = n(898188),
    N = n(41776),
    O = n(256413),
    I = n(292853),
    P = n(869382),
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
    ea = n(639184),
    er = n(404616),
    ei = n(470623),
    el = n(749913),
    es = n(219664),
    eo = n(895932),
    ec = n(479099),
    ed = n(510060),
    eu = n(276357),
    em = n(81490),
    ef = n(482062),
    eh = n(260503),
    eg = n(981631),
    ex = n(124368),
    eb = n(388032),
    ep = n(707545);
function ej(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
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
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
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
        a,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = {},
                i = Object.keys(e);
            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++)
            (n = i[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
function ey(e) {
    let { channel: t, guild: n, sidebarState: r } = e;
    return (0, a.jsx)(
        ei.oL,
        {
            channel: t,
            children: (0, a.jsx)(eP, {
                channel: t,
                guild: n,
                sidebarState: r,
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
function ew(e) {
    return "forum-grid-header-section-".concat(e);
}
function eS(e) {
    let { itemRole: t, coords: n, section: r } = e;
    return (0, a.jsx)(
        "div",
        {
            className: l()(ep.card, ep.archivedDividerRow, ep.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, a.jsx)("div", {
                className: ep.emptyMainCard,
                children: (0, a.jsx)(b.Heading, {
                    variant: "eyebrow",
                    className: ep.archivedDivider,
                    id: ew(r),
                    children: eb.intl.string(eb.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}
function eN(e) {
    let { section: t, coords: n, key: r, isShowingSearchResult: i, hasActiveThreads: l } = e;
    return () =>
        2 === t && !i && l
            ? (0, a.jsx)(
                  eS,
                  {
                      section: t,
                      coords: null == n ? void 0 : ev(ej({}, n), { position: "absolute" }),
                      itemRole: "section",
                  },
                  r,
              )
            : null;
}
function eO(e, t) {
    return "card-".concat(e, "-").concat(t);
}
function eI(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function eP(e) {
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
                listViewCardHeights: a,
                formOpen: r,
                cardHeightVersion: i,
                name: l,
            } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: a,
                formOpen: r,
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
            activeThreadsLoading: w,
            archivedThreadsLoading: S,
            loading: _,
            isSearchLoading: L,
            layoutType: B,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: a, tagSetting: r } = (0, Y.H)(e.id),
                i = (0, J.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: r,
                    shouldAutomaticallyAck: !0,
                }),
                l = (0, h.e7)([k.Z, N.Z], () => {
                    let t = k.Z.hasLoaded(e.guild_id),
                        n = N.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: s, canLoadMore: o, loadMore: c, loading: d } = (0, A.qQ)(e, t, n, r),
                { searchResults: u, isSearchLoading: m } = (0, J.XZ)({ channelId: e.id });
            return (
                (0, J.ES)(e, t, n, r),
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
                    layoutType: a,
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
    let ea = (0, J.jR)(t),
        el = (0, J.eZ)(t),
        eo = r.useRef(null),
        { observePostVisibilityAnalytics: ec } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: a } = e;
            Q.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n,
            });
            let i = r.useRef(null),
                l = r.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let a = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, $.rj)(e, t, a) : (0, $.Ct)(e, t, a);
                    }
                }, []);
            return (
                r.useEffect(() => {
                    var e;
                    let t = null == (e = a.current) ? void 0 : e.getScrollerNode();
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
                }, [n, l, a]),
                {
                    observePostVisibilityAnalytics: r.useCallback(
                        (e, t) => {
                            var a;
                            if (null == e) return void (0, $.Ct)(n, t, Date.now());
                            null == (a = i.current) || a.observe(e);
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
        eu = B === f.X.GRID,
        { searchQuery: ey } = (0, J.XZ)({ channelId: t.id }),
        eS = null != j && null != ey && ey.length > 0,
        eP = r.useRef(null),
        { containerRef: eM, containerWidth: ek } = (0, em.Z)();
    r.useEffect(() => {
        if (null == eP.current && null != t.id) {
            let e = D.ZP.getSidebarState(t.id);
            null != e && e.type === Z.tI.VIEW_THREAD && (eP.current = e.channelId);
        }
    }, [t.id]);
    let { columns: eA } = r.useMemo(() => (eu ? eT.getRenderOptions(ek) : ed.eU), [eu, ek]),
        eL = r.useMemo(() => (_ ? Math.round((window.innerHeight - 200) / 118) : 0), [_]),
        { showResolvedFlags: eF } = (0, P.N)(t.id),
        eD = t.isModeratorReportChannel(),
        eH = r.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ed.KW)(eT.getWidth(ek))) * eA;
            return w ? e : 0;
        }, [ek, eA, w]),
        ez = r.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ed.KW)(eT.getWidth(ek))) * eA;
            return S ? e : 0;
        }, [ek, eA, S]),
        eB = r.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ed.KW)(eT.getWidth(ek))) * eA;
            return L && eS ? e : 0;
        }, [ek, eA, L, eS]),
        eU = r.useMemo(() => {
            if (eu)
                if (!ea && eS) return [1, 0];
                else if (!el) return [1, g.length + eH, 0];
                else if (eS) return [1, j.length + eB, 0];
                else if (eD && !eF) return [1, g.length + eH, 0];
                else return [1, g.length + eH, x.length + ez];
            if (!ea && eS) return [1, 1];
            if (!el) return [1, g.length, 1];
            if (eS) return [1, j.length, 0, eL];
            if (eD && !eF) return [1, g.length, 0, eL];
            else return [1, g.length, x.length, eL];
        }, [eu, eS, g.length, x.length, ea, el, eL, j, eH, ez, eB, eF, eD]),
        eG = r.useMemo(
            () =>
                !ea && eS
                    ? [[], []]
                    : el
                      ? eS
                          ? [[], j, [], []]
                          : eD && !eF
                            ? [[], g, [], []]
                            : [[], g, x, []]
                      : [[], g, []],
            [eS, ea, el, j, g, x, eF, eD],
        ),
        eV = r.useCallback(
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
                    n ? (0, M.ad)(e, { source: ex.on.BROWSER }) : ((eP.current = e.id), (0, F.ok)(e));
            },
            [t.guild_id, t.id, eP],
        ),
        [eW, eq] = r.useState(i + s - 24),
        eX = r.useCallback(
            (e, n, r) =>
                0 === e
                    ? (0, a.jsx)(
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
                                  (0, a.jsx)(
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
                      ? 1 === e && eS && !ea
                          ? (0, a.jsx)(
                                e_,
                                {
                                    channel: t,
                                    coords: n,
                                },
                                "archive-or-search-result",
                            )
                          : r()
                      : (0, a.jsx)(
                            eE,
                            {
                                channel: t,
                                coords: n,
                            },
                            "archived-missing-reading-history-perm",
                        ),
            [eS, el, j, ea, t, G, L, _, V],
        ),
        eK = (0, h.e7)([q.Z], () => q.Z.hasHidden(t.id)),
        eY = {
            editorHeight: i,
            isGridLayout: eu,
        },
        eJ = r.useRef(eY);
    r.useEffect(() => {
        eJ.current = eY;
    }),
        r.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: a } = eJ.current,
                r = a ? e1 : eo,
                i = null == (e = r.current) ? void 0 : e.getScrollerState();
            null != i && !eK && i.scrollTop > n && (null == (t = r.current) || t.scrollTo({ to: 0 }));
        }, [eK]);
    let {
            updateListScrollerRef: eQ,
            renderListSection: e$,
            renderListItem: e0,
            getListSectionHeight: e6,
            getListItemHeight: e3,
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
                    isShowingSearchResult: f,
                } = e,
                g = (0, h.e7)([U.Z], () => U.Z.getChannelId()),
                x = r.useCallback(
                    (e) => (n) => {
                        var a;
                        (t.current = n),
                            (e.current = null != (a = null == n ? void 0 : n.getScrollerNode()) ? a : null);
                    },
                    [t],
                ),
                p = r.useCallback(
                    (e) =>
                        eN({
                            section: e.section,
                            isShowingSearchResult: f,
                            hasActiveThreads: n,
                        })(),
                    [n, f],
                ),
                j = r.useCallback(
                    (e) =>
                        d(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, a.jsx)(
                                          "div",
                                          {
                                              "data-item-role": "item",
                                              className: l()(ep.loadingCard, ep["loadingCard-".concat(e.row % 3)]),
                                          },
                                          "loading-".concat(e.row),
                                      );
                            let t = i[e.section][e.row],
                                n = null != g && (0, E.UD)(g) ? R.ZP : er.ZP;
                            return (0, a.jsx)(
                                "li",
                                {
                                    className: ep.card,
                                    "data-item-role": "item",
                                    children: (0, a.jsx)(b.y5t, {
                                        children: (0, a.jsx)(n, {
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
                v = r.useCallback(
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
                getListSectionHeight: r.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
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
            isShowingSearchResult: eS,
        }),
        e1 = r.useRef(null),
        {
            updateMasonryListScrollerRef: e4,
            getItemKey: e8,
            renderGridSection: e9,
            renderGridItem: e2,
            getGridSectionHeight: e7,
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
                    focusedThreadId: f,
                    headerHeight: h,
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
                        let { current: a } = t;
                        if (null == a) return;
                        let r = document.querySelector(e);
                        if (null == r) return;
                        let i = a.getCoordsMap()[n],
                            l = null != i ? i.height + 20 : 200;
                        a.scrollIntoViewNode({
                            node: r,
                            padding: l,
                            callback() {
                                requestAnimationFrame(() => {
                                    var t;
                                    null == (t = document.querySelector(e)) || t.focus({ preventScroll: !0 });
                                });
                            },
                        }),
                            (f.current = eI(n));
                    },
                    [t, f],
                ),
                p = r.useCallback(
                    (e) => {
                        let t = eI(e);
                        if (null == t) return;
                        let n = H.Z.getChannel(t);
                        null != n && i(n, !0);
                    },
                    [i],
                ),
                j = r.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return "section-".concat(e, "-").concat(t);
                        {
                            let a = n[e][t];
                            return null == a ? eO(e, t) : eO(e, a);
                        }
                    },
                    [n],
                ),
                v = r.useCallback(
                    (e, t, n) =>
                        s(
                            e,
                            t,
                            eN({
                                section: e,
                                coords: t,
                                key: n,
                                isShowingSearchResult: c,
                                hasActiveThreads: o,
                            }),
                        ),
                    [s, o, c],
                ),
                C = r.useCallback(
                    (e) =>
                        0 === e
                            ? {}
                            : {
                                  role: "grid",
                                  "aria-labelledby": "#".concat(ew(e)),
                              },
                    [],
                );
            return {
                updateMasonryListScrollerRef: x,
                masonryListContainerRef: g,
                focusedThreadId: f,
                handleGridFocus: b,
                handleGridSelect: p,
                getItemKey: j,
                renderGridSection: v,
                renderGridItem: r.useCallback(
                    (e, t, r, s, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, a.jsx)(
                                  es.Z,
                                  {
                                      id: "".concat(s),
                                      threadId: c,
                                      className: l()(ep.card, ep.mainCard),
                                      goToThread: i,
                                      observePostVisibilityAnalytics: m,
                                      coords: r,
                                      gridCoords: o.coordinates[s],
                                      gridSectionBoundaries: o.boundaries,
                                  },
                                  s,
                              )
                            : __OVERLAY__
                              ? null
                              : (0, a.jsx)(
                                    "div",
                                    {
                                        style: ej({}, r),
                                        "data-item-role": "item",
                                        className: l()(ep.loadingCard, ep["loadingCard-".concat(t % 3)]),
                                    },
                                    s,
                                );
                    },
                    [n, i, m],
                ),
                getSectionProps: C,
                getGridSectionHeight: r.useCallback(
                    (e) => (0 === e ? h - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0),
                    [h, c, d, o, u],
                ),
            };
        })({
            masonryListScrollerRef: e1,
            threadIdsBySection: eG,
            goToThread: eV,
            renderSectionOrItem: eX,
            hasActiveThreads: G,
            isShowingSearchResult: eS,
            canSearchForumPosts: ea,
            canViewArchivedPosts: el,
            observePostVisibilityAnalytics: ec,
            focusedThreadId: eP,
            headerHeight: eW,
        });
    !(function (e) {
        let {
            masonryListScrollerRef: t,
            containerWidth: n,
            isGridLayout: a,
            threadIdsBySection: i,
            focusedThreadId: l,
            parentId: s,
        } = e;
        r.useEffect(() => {
            if (a) {
                let e = setTimeout(() => {
                    if (null == t.current || null == l.current) return;
                    let e = l.current;
                    if ("string" != typeof e) return;
                    null == D.ZP.getSidebarState(s) && (l.current = null);
                    let n = i.findIndex((t) => t.find((t) => t === e)),
                        a = t.current.getCoordsMap(),
                        r = a["__section__".concat(n)],
                        o = a[eO(n, e)];
                    null != r &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: r.top + o.top - 100,
                            end: r.top + o.top + o.height + 50,
                        });
                }, 0);
                return () => clearTimeout(e);
            }
        }, [s, n, a, i, l, t]);
    })({
        masonryListScrollerRef: e1,
        containerWidth: ek,
        isGridLayout: eu,
        threadIdsBySection: eG,
        parentId: t.id,
        focusedThreadId: eP,
    });
    let tt = r.useCallback(() => {
            var e, n;
            if (eS) return;
            let a = eu
                ? null == (e = e1.current)
                    ? void 0
                    : e.getScrollerState()
                : null == (n = eo.current)
                  ? void 0
                  : n.getScrollerState();
            if (null == a) return;
            (0, ee.ab)({
                guildId: t.guild_id,
                channelId: t.id,
            });
            let r = a.scrollTop + a.offsetHeight;
            a.scrollHeight - r < (eu ? Math.max(200, (0, ed.KW)(ek)) : 200) && T();
        }, [eS, eu, t.guild_id, t.id, ek, T]),
        tn = (0, h.e7)([C.Z], () => C.Z.keyboardModeEnabled),
        ta = (0, ei.xH)((e) => e.titleFocused || e.bodyFocused, c.X),
        tr = (0, ef.ZP)({
            id: "forum-grid-view",
            isEnabled: eu && tn && !ta,
            setFocus: te,
        }),
        ti = (0, eh.Z)({
            listRef: eo,
            padding: 96,
            isEnabled: !eu && tn && !ta,
            channel: t,
        }),
        tl = r.useCallback(
            (e, n, a) => (0 === e ? 0 : (0, ed.KW)(a, t.isMediaChannel() ? ed.Lv.SIXTEEN_BY_NINE : ed.Lv.THREE_BY_TWO)),
            [t],
        ),
        ts = tr.containerProps,
        { ref: to } = ts,
        tc = eC(ts, ["ref"]),
        td = D.ZP.getSidebarState(t.id),
        tu = null != td && (0, D.D5)(td),
        tm = (0, h.e7)([D.ZP], () => D.ZP.getSection(t.id)) === eg.ULH.MEMBERS;
    return (0, a.jsx)("div", {
        className: ep.container,
        ref: eM,
        "data-member-list-open": tm,
        children: (0, a.jsx)(b.Wdt, {
            children: (e) =>
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        u &&
                            (0, a.jsx)(p.Z, {
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
                        (0, a.jsx)(eR, { channel: t }),
                        (0, a.jsx)(b.nn4, { children: (0, a.jsx)(b.H, { children: eb.intl.string(eb.t.B2panI) }) }),
                        W
                            ? (0, a.jsx)("div", {
                                  className: ep.optInNotice,
                                  children: (0, a.jsx)(I.Z, { channel: t }),
                              })
                            : null,
                        eu
                            ? (0, a.jsx)(ef.KT, {
                                  navigator: tr,
                                  children: (0, a.jsx)(
                                      b.GMG,
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
                                              className: ep.grid,
                                              columns: eA,
                                              sections: eU,
                                              getItemKey: e8,
                                              getSectionHeight: e7,
                                              getItemHeight: tl,
                                              renderSection: e9,
                                              renderItem: e2,
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
                            : (0, a.jsx)(d.bG, {
                                  navigator: ti,
                                  children: (0, a.jsx)(d.SJ, {
                                      children: (t) => {
                                          var { ref: n } = t,
                                              r = eC(t, ["ref"]);
                                          return (0, a.jsx)(
                                              b._2F,
                                              ev(
                                                  ej(
                                                      {
                                                          ref: eQ(n),
                                                          className: ep.list,
                                                          sections: eU,
                                                          sectionHeight: e6,
                                                          rowHeight: e3,
                                                          renderRow: e0,
                                                          renderSection: e$,
                                                          chunkSize: 150,
                                                          onScroll: y ? tt : void 0,
                                                          paddingBottom: 24,
                                                      },
                                                      r,
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
        r = (0, y.ZP)(t);
    return (0, a.jsx)("div", {
        className: l()(ep.missingReadHistoryPermission, ep.columnsSpan),
        style: n,
        children: (0, a.jsx)(b.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eb.intl.format(eb.t.TycmzM, { channelName: r }),
        }),
    });
}
function e_(e) {
    let { channel: t, coords: n } = e,
        r = (0, y.ZP)(t);
    return (0, a.jsx)("div", {
        className: l()(ep.missingReadHistoryPermission, ep.columnsSpan),
        style: n,
        children: (0, a.jsx)(b.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eb.intl.format(eb.t.OWZJdS, { channelName: r }),
        }),
    });
}
function eR(e) {
    let { channel: t } = e,
        n = r.useCallback(() => {
            X.Z.resort(t.id);
        }, [t]),
        i = (0, h.e7)([K.Z], () => K.Z.getNewThreadCount());
    return 0 === i
        ? null
        : (0, a.jsx)(b.P3F, {
              className: ep.newPostsButton,
              onClick: n,
              children: (0, a.jsx)(b.Text, {
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
    let { channel: s, isEmpty: p, isSearchLoading: v, numResults: y, children: N, coords: O, onHeightChange: I } = e,
        {
            name: P,
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
                titleFocused: a,
                hasClickedForm: r,
                textAreaState: i,
                onboardingExpanded: l,
                setEditorAdditionRowHeight: s,
            } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: a,
                hasClickedForm: r,
                textAreaState: i,
                onboardingExpanded: l,
                setEditorAdditionRowHeight: s,
            };
        }, c.X),
        { tagFilter: D, layoutType: H } = (0, Y.H)(s.id),
        U = (0, ei.AF)(),
        q = (0, Y.v)(),
        K = (0, h.e7)([B.Z], () => B.Z.canChatInGuild(s.guild_id)),
        Q = (0, J.r_)(s),
        $ = (0, L.cD)(s),
        [et, er] = r.useState($),
        [, es] = (0, w.AB)(null != (i = s.getGuildId()) ? i : void 0),
        eo = (0, _.HL)(s),
        ed = K && ($ || (et && es)) && !eo,
        em = s.isMediaChannel();
    r.useEffect(() => {
        $ && er(!0);
    }, [$]);
    let { ref: ef, height: eh } = (0, j.ZP)();
    r.useEffect(() => {
        null != eh && I(eh);
    }, [I, eh]);
    let ex = r.useCallback(() => {
        o()(() => {
            null != ef.current && U.getState().setEditorHeight(ef.current.offsetHeight);
        });
    }, [ef, U]);
    r.useLayoutEffect(ex, [ex, p, ed, A]),
        (0, W.yp)({
            event: eg.CkL.REMEASURE_TARGET,
            handler: ex,
        });
    let ey = (0, h.e7)([G.Z], () => G.Z.getUploads(s.id, z.d.FirstThreadMessage)),
        eT = (0, J.ql)(s),
        ew = r.useRef(null),
        eS = r.useRef(null),
        [eN, eO] = r.useState(0),
        { width: eI } = (0, h.e7)([V.Z], () => V.Z.windowSize()),
        eP = null == (n = ew.current) || null == (t = n.getBoundingClientRect()) ? void 0 : t.width,
        eE = r.useRef(null),
        e_ = r.useRef(null);
    r.useLayoutEffect(() => {
        var e;
        let t = eS.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0];
        if (null != ew.current && null != n && null != n.children) {
            let { left: e, top: t } = ew.current.getBoundingClientRect(),
                a = 0;
            for (let r of n.children) {
                let { right: n, top: i, height: l } = r.getBoundingClientRect();
                if (i - t > l) break;
                n - e > a && (a = n - e);
            }
            eO(a);
        }
    }, [s.availableTags, eI, eP, D]);
    let eR = P.length > 0 && !R && (v || null != y),
        eZ =
            !__OVERLAY__ &&
            !Z &&
            !R &&
            M &&
            (0 === k.textValue.trim().length || k.textValue.trim() === eT) &&
            0 === ey.length &&
            !eo;
    r.useLayoutEffect(() => {
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
        ez = r.useRef(null),
        eB = (function () {
            let e = r.useRef(!1),
                t = (0, h.e7)([C.Z], () => C.Z.keyboardModeEnabled),
                n = r.useCallback(
                    (t) => {
                        e.current = t.shiftKey;
                    },
                    [e],
                );
            return (
                r.useLayoutEffect(
                    () => (
                        t ? window.addEventListener("keydown", n) : window.removeEventListener("keydown", n),
                        () => window.removeEventListener("keydown", n)
                    ),
                    [t, n],
                ),
                e
            );
        })(),
        eU = r.useCallback(
            (e) => {
                if ((eD(), e.target === ef.current && !eB.current)) {
                    var t;
                    null == (t = ez.current) || t.focus();
                }
            },
            [eD, ef, eB],
        ),
        eG = r.useMemo(() => (eo ? (0, E.iq)(s.availableTags) : s.availableTags), [s.availableTags, eo]);
    return (0, a.jsx)(
        "div",
        ev(
            ej(
                {
                    className: l()(ep.card, ep.headerRow, ep.columnsSpan),
                    ref: ef,
                    onFocus: eU,
                },
                eH,
            ),
            {
                style: ev(ej({}, O), {
                    position: H === f.X.GRID ? "absolute" : "static",
                    height: "auto",
                }),
                children: (0, a.jsxs)(W.I3, {
                    children: [
                        null != s.guild_id
                            ? (0, a.jsx)(S.Z, {
                                  className: l()(ep.newMemberBanner, { [ep.gridViewBanner]: H === f.X.GRID }),
                                  guildId: s.guild_id,
                                  channel: s,
                              })
                            : null,
                        (0, a.jsx)("div", {
                            className: l()(ep.mainCard, ep.header, { [ep.headerWithMatchingPosts]: eR || eZ }),
                            children: (0, a.jsx)(el.Z, {
                                parentChannel: s,
                                onChange: ex,
                                isSearchLoading: v,
                                numResults: y,
                                canCreatePost: ed,
                                inputRef: ez,
                            }),
                        }),
                        (eR || eZ) &&
                            (0, a.jsxs)("div", {
                                className: ep.matchingPostsRow,
                                ref: eE,
                                children: [
                                    eR &&
                                        (0, a.jsxs)("div", {
                                            className: ep.matchingPosts,
                                            children: [
                                                (0, a.jsx)(b.Heading, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: v
                                                        ? eb.intl.string(eb.t["/9i3qq"])
                                                        : 0 === y
                                                          ? eb.intl.string(eb.t.DbgHxi)
                                                          : eb.intl.formatToPlainString(eb.t["tBz/8b"], {
                                                                numPosts: null != y ? y : "",
                                                                query: P,
                                                            }),
                                                }),
                                                !v &&
                                                    (0, a.jsx)(b.P3F, {
                                                        onClick: () => {
                                                            (0, ee.zI)({
                                                                guildId: s.guild_id,
                                                                channelId: s.id,
                                                            }),
                                                                X.Z.clearForumSearch(s.id),
                                                                U.getState().setName("");
                                                        },
                                                        children: (0, a.jsx)(b.Text, {
                                                            variant: "text-xs/semibold",
                                                            color: "text-brand",
                                                            className: ep.clear,
                                                            children: eb.intl.string(eb.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    (0, a.jsx)("div", { className: ep.tagsSpacer }),
                                    eZ
                                        ? ed
                                            ? (0, a.jsxs)("div", {
                                                  className: ep.startPostHelp,
                                                  children: [
                                                      (0, a.jsx)(b.M2$, {
                                                          shortcut: "SHIFT",
                                                          className: ep.keyboardShortcut,
                                                      }),
                                                      (0, a.jsx)(b.Text, {
                                                          variant: "text-xs/normal",
                                                          color: "text-subtle",
                                                          children: "+",
                                                      }),
                                                      (0, a.jsx)(b.M2$, {
                                                          shortcut: "ENTER",
                                                          className: ep.keyboardShortcut,
                                                      }),
                                                      (0, a.jsx)(b.Text, {
                                                          variant: "text-xs/normal",
                                                          color: "text-subtle",
                                                          children: eb.intl.string(eb.t.ZvJ0yh),
                                                      }),
                                                  ],
                                              })
                                            : (0, a.jsxs)("div", {
                                                  className: ep.startPostHelp,
                                                  children: [
                                                      (0, a.jsx)(b.Mgn, {
                                                          size: "custom",
                                                          color: "currentColor",
                                                          height: 14,
                                                          width: 14,
                                                          className: ep.warnIcon,
                                                      }),
                                                      (0, a.jsx)(b.Text, {
                                                          variant: "text-xs/normal",
                                                          color: "text-subtle",
                                                          children: eb.intl.string(eb.t.iyzwnD),
                                                      }),
                                                  ],
                                              })
                                        : null,
                                ],
                            }),
                        (0, a.jsx)(en.Z, {
                            channel: s,
                            onChange: ex,
                        }),
                        (0, a.jsxs)("div", {
                            className: ep.tagsContainer,
                            ref: ew,
                            children: [
                                (0, a.jsx)(ek, { channel: s }),
                                eG.length > 0
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)("div", { className: ep.divider }),
                                              (0, a.jsx)("div", {
                                                  className: ep.tagList,
                                                  ref: eS,
                                                  children: (0, a.jsx)(d.bG, {
                                                      navigator: eA,
                                                      children: (0, a.jsx)(d.SJ, {
                                                          children: (e) => {
                                                              var { ref: t } = e,
                                                                  n = eC(e, ["ref"]);
                                                              return (0, a.jsx)(
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
                                                                              (0, a.jsx)(
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
                                              (0, a.jsx)(b.yRy, {
                                                  targetElementRef: e_,
                                                  renderPopout: (e) => {
                                                      let { closePopout: t, setPopoutRef: n } = e;
                                                      return (0, a.jsx)(eu.Z, {
                                                          channel: s,
                                                          closePopout: t,
                                                          setPopoutRef: n,
                                                      });
                                                  },
                                                  position: "bottom",
                                                  align: "right",
                                                  children: (e, t) => {
                                                      let { isShown: n } = t;
                                                      return (0, a.jsxs)(
                                                          x.zx,
                                                          ev(ej({}, e), {
                                                              "data-migration-pending": !0,
                                                              buttonRef: e_,
                                                              size: x.zx.Sizes.MIN,
                                                              color: x.zx.Colors.CUSTOM,
                                                              className: l()(ep.tagsButton, {
                                                                  [ep.tagsButtonWithCount]: D.size > 0,
                                                              }),
                                                              style: { left: eN },
                                                              innerClassName: ep.tagsButtonInner,
                                                              "aria-label":
                                                                  D.size > 0
                                                                      ? eb.intl.string(eb.t.IkpM1T)
                                                                      : eb.intl.string(eb.t["9vKK/N"]),
                                                              children: [
                                                                  D.size > 0
                                                                      ? (0, a.jsx)("div", {
                                                                            className: ep.countContainer,
                                                                            children: (0, a.jsx)(b.Text, {
                                                                                className: ep.countText,
                                                                                color: "none",
                                                                                variant: "text-xs/medium",
                                                                                children: D.size,
                                                                            }),
                                                                        })
                                                                      : eb.intl.string(eb.t.fZ8hzm),
                                                                  n
                                                                      ? (0, a.jsx)(b.u04, {
                                                                            size: "custom",
                                                                            color: "currentColor",
                                                                            width: 20,
                                                                        })
                                                                      : (0, a.jsx)(b.CJ0, {
                                                                            size: "custom",
                                                                            color: "currentColor",
                                                                            width: 20,
                                                                        }),
                                                              ],
                                                          }),
                                                      );
                                                  },
                                              }),
                                              (0, a.jsxs)(x.zx, {
                                                  "data-migration-pending": !0,
                                                  size: x.zx.Sizes.MIN,
                                                  color: x.zx.Colors.CUSTOM,
                                                  className: l()(ep.tagsButton, ep.tagsButtonPlaceholder),
                                                  innerClassName: ep.tagsButtonInner,
                                                  "aria-label": eb.intl.string(eb.t.IkpM1T),
                                                  children: [
                                                      D.size > 0
                                                          ? (0, a.jsx)("div", {
                                                                className: ep.countContainer,
                                                                children: (0, a.jsx)(b.Text, {
                                                                    className: ep.countText,
                                                                    color: "none",
                                                                    variant: "text-xs/medium",
                                                                    children: D.size,
                                                                }),
                                                            })
                                                          : null,
                                                      (0, a.jsx)(b.u04, {
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
                        N,
                        Q &&
                            !em &&
                            !eo &&
                            (0, a.jsx)(T.ZP, {
                                contentTypes: [g.z.FORUM_CHANNEL_HELPER_CARD],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === g.z.FORUM_CHANNEL_HELPER_CARD
                                        ? (0, a.jsx)(ea.Z, { onDismiss: n })
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
        i = r.useRef(null);
    return (0, a.jsx)(b.yRy, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(eo.Z, {
                channel: t,
                closePopout: n,
            });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: r } = t;
            return (0, a.jsxs)(
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
                        (0, a.jsx)(b.uVW, {
                            size: "xs",
                            color: "currentColor",
                        }),
                        (0, a.jsx)(b.Text, {
                            className: ep.sortDropdownText,
                            variant: "text-sm/medium",
                            color: "interactive-text-default",
                            children: (0, a.jsx)("span", {
                                className: ep.sortDropdownTextHighContrastForcedColor,
                                children: n ? eb.intl.string(eb.t.JxU0wr) : eb.intl.string(eb.t.xyYt8A),
                            }),
                        }),
                        r
                            ? (0, a.jsx)(b.u04, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 20,
                              })
                            : (0, a.jsx)(b.CJ0, {
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
