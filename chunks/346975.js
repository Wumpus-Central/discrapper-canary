n.r(t), n.d(t, { default: () => ej }), n(35282), n(388685), n(781311);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(196434),
    o = n.n(s),
    c = n(94171),
    d = n(91192),
    u = n(924826),
    m = n(536895),
    h = n(313361),
    g = n(442837),
    f = n(704215),
    x = n(481060),
    p = n(561472),
    b = n(393238),
    j = n(607070),
    v = n(933557),
    _ = n(243778),
    C = n(71619),
    y = n(898188),
    O = n(41776),
    w = n(256413),
    S = n(292853),
    N = n(982168),
    T = n(216572),
    P = n(543015),
    I = n(359110),
    E = n(897473),
    R = n(344185),
    k = n(235449),
    Z = n(665906),
    M = n(488131),
    A = n(433355),
    L = n(592125),
    F = n(703558),
    D = n(607744),
    z = n(944486),
    B = n(117530),
    H = n(451478),
    U = n(459273),
    V = n(961675),
    G = n(883429),
    q = n(238349),
    W = n(109434),
    X = n(456269),
    K = n(90372),
    J = n(985518),
    Y = n(228392),
    Q = n(355589),
    $ = n(542581),
    ee = n(639184),
    et = n(404616),
    en = n(470623),
    er = n(749913),
    ei = n(219664),
    ea = n(895932),
    el = n(479099),
    es = n(510060),
    eo = n(276357),
    ec = n(81490),
    ed = n(482062),
    eu = n(260503),
    em = n(981631),
    eh = n(124368),
    eg = n(388032),
    ef = n(683999);
function ex(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function ep(e, t) {
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
function eb(e, t) {
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
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ej(e) {
    let { channel: t, guild: n, sidebarState: i } = e;
    return (0, r.jsx)(
        en.oL,
        {
            channel: t,
            children: (0, r.jsx)(eN, {
                channel: t,
                guild: n,
                sidebarState: i
            })
        },
        t.id
    );
}
let ev = new es.Me({
    minWidth: 320,
    maxWidth: 450,
    gap: 16
});
function e_(e) {
    return 'forum-grid-header-section-'.concat(e);
}
let eC = (e, t, n) => (0 === e ? 0 : (0, es.KW)(n));
function ey(e) {
    let { itemRole: t, coords: n, section: i } = e;
    return (0, r.jsx)(
        'div',
        {
            className: l()(ef.card, ef.archivedDividerRow, ef.columnsSpan),
            style: n,
            'data-item-role': t,
            children: (0, r.jsx)('div', {
                className: ef.emptyMainCard,
                children: (0, r.jsx)(x.X6q, {
                    variant: 'eyebrow',
                    className: ef.archivedDivider,
                    id: e_(i),
                    children: eg.intl.string(eg.t['3+LO19'])
                })
            })
        },
        'section-divider'
    );
}
function eO(e) {
    let { section: t, coords: n, key: i, isShowingSearchResult: a, hasActiveThreads: l } = e;
    return () =>
        2 === t && !a && l
            ? (0, r.jsx)(
                  ey,
                  {
                      section: t,
                      coords: null == n ? void 0 : ep(ex({}, n), { position: 'absolute' }),
                      itemRole: 'section'
                  },
                  i
              )
            : null;
}
function ew(e, t) {
    return 'card-'.concat(e, '-').concat(t);
}
function eS(e) {
    if ('string' == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function eN(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: a,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: u
        } = (0, en.xH)((e) => {
            let { editorHeight: t, editorAdditionRowHeight: n, listViewCardHeights: r, formOpen: i, cardHeightVersion: a } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: r,
                formOpen: i,
                cardHeightVersion: a
            };
        }, c.X),
        {
            activeThreadIds: m,
            archivedThreadIds: f,
            searchResults: b,
            canLoadMore: v,
            loadMore: _,
            activeThreadsLoading: C,
            archivedThreadsLoading: y,
            loading: T,
            isSearchLoading: Z,
            layoutType: D
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: r, tagSetting: i } = (0, W.H)(e.id),
                a = (0, X.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: i,
                    shouldAutomaticallyAck: !0
                }),
                l = (0, g.e7)([R.Z, O.Z], () => {
                    let t = R.Z.hasLoaded(e.guild_id),
                        n = O.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: s, canLoadMore: o, loadMore: c, loading: d } = (0, k.qQ)(e, t, n, i),
                { searchResults: u, isSearchLoading: m } = (0, X.XZ)({ channelId: e.id });
            return (
                (0, X.ES)(e, t, n, i),
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
                    layoutType: r
                }
            );
        })(t),
        B = m.length > 0,
        H = B || f.length > 0,
        U = (0, w.Z)(t),
        { tagFilter: q, tagSetting: $ } = (0, W.H)(t.id);
    (0, X.ku)(t, q, $, u);
    let ee = (0, X.jR)(t),
        er = (0, X.eZ)(t),
        ea = i.useRef(null),
        { observePostVisibilityAnalytics: el } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: r } = e;
            K.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n
            });
            let a = i.useRef(null),
                l = i.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let r = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, J.rj)(e, t, r) : (0, J.Ct)(e, t, r);
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
                                rootMargin: '0px 100000px 0px 100000px',
                                threshold: 0.5
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
                            if (null == e) return void (0, J.Ct)(n, t, Date.now());
                            null == (r = a.current) || r.observe(e);
                        },
                        [n]
                    )
                }
            );
        })({
            scrollerRef: ea,
            channelId: t.id,
            guildId: t.guild_id
        }),
        eo = D === h.X.GRID,
        { searchQuery: ej } = (0, X.XZ)({ channelId: t.id }),
        ey = null != b && null != ej && ej.length > 0,
        eN = i.useRef(null),
        { containerRef: eE, containerWidth: ek } = (0, ec.Z)();
    i.useEffect(
        () => () => {
            null != t.id && G.Z.clearForumSearch(t.id);
        },
        [t.id]
    ),
        i.useEffect(() => {
            if (null == eN.current && null != t.id) {
                let e = A.ZP.getSidebarState(t.id);
                null != e && e.type === E.tI.VIEW_THREAD && (eN.current = e.channelId);
            }
        }, [t.id]);
    let { columns: eZ } = i.useMemo(() => (eo ? ev.getRenderOptions(ek) : es.eU), [eo, ek]),
        eM = i.useMemo(() => (T ? Math.round((window.innerHeight - 200) / 118) : 0), [T]),
        eA = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, es.KW)(ev.getWidth(ek))) * eZ;
            return C ? e : 0;
        }, [ek, eZ, C]),
        eL = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, es.KW)(ev.getWidth(ek))) * eZ;
            return y ? e : 0;
        }, [ek, eZ, y]),
        eF = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, es.KW)(ev.getWidth(ek))) * eZ;
            return Z && ey ? e : 0;
        }, [ek, eZ, Z, ey]),
        eD = i.useMemo(() => {
            if (eo)
                if (!ee && ey) return [1, 0];
                else if (!er) return [1, m.length + eA, 0];
                else if (ey) return [1, b.length + eF, 0];
                else return [1, m.length + eA, f.length + eL];
            return !ee && ey ? [1, 1] : er ? (ey ? [1, b.length, 0, eM] : [1, m.length, f.length, eM]) : [1, m.length, 1];
        }, [eo, ey, m.length, f.length, ee, er, eM, b, eA, eL, eF]),
        ez = i.useMemo(() => (!ee && ey ? [[], []] : er ? (ey ? [[], b, [], []] : [[], m, f, []]) : [[], m, []]), [ey, ee, er, b, m, f]),
        eB = i.useCallback(
            (e, n) => {
                (0, Y.B5)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: {
                        page: em.ZY5.GUILD_CHANNEL,
                        section: em.jXE.FORUM_CHANNEL_POST
                    }
                }),
                    n ? (0, I.ad)(e, { source: eh.on.BROWSER }) : ((eN.current = e.id), (0, M.ok)(e));
            },
            [t.guild_id, t.id, eN]
        ),
        [eH, eU] = i.useState(a + s - 24),
        eV = i.useCallback(
            (e, n, i) =>
                0 === e
                    ? (0, r.jsx)(
                          eR,
                          {
                              channel: t,
                              isEmpty: !B,
                              isSearchLoading: Z,
                              numResults: null == b ? void 0 : b.length,
                              coords: n,
                              onHeightChange: eU,
                              children:
                                  !T &&
                                  (0, r.jsx)(
                                      Q.Z,
                                      {
                                          channel: t,
                                          hasAnyThread: H,
                                          hasActiveThreads: B
                                      },
                                      t.id
                                  )
                          },
                          'forum-channel-header'
                      )
                    : 2 !== e || er
                      ? 1 === e && ey && !ee
                          ? (0, r.jsx)(
                                eP,
                                {
                                    channel: t,
                                    coords: n
                                },
                                'archive-or-search-result'
                            )
                          : i()
                      : (0, r.jsx)(
                            eT,
                            {
                                channel: t,
                                coords: n
                            },
                            'archived-missing-reading-history-perm'
                        ),
            [ey, er, b, ee, t, B, Z, T, H]
        ),
        eG = (0, g.e7)([V.Z], () => V.Z.hasHidden(t.id)),
        eq = {
            editorHeight: a,
            isGridLayout: eo
        },
        eW = i.useRef(eq);
    i.useEffect(() => {
        eW.current = eq;
    }),
        i.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: r } = eW.current,
                i = r ? e$ : ea,
                a = null == (e = i.current) ? void 0 : e.getScrollerState();
            null != a && !eG && a.scrollTop > n && (null == (t = i.current) || t.scrollTo({ to: 0 }));
        }, [eG]);
    let {
            updateListScrollerRef: eX,
            renderListSection: eK,
            renderListItem: eJ,
            getListSectionHeight: eY,
            getListItemHeight: eQ
        } = (function (e) {
            let { listRef: t, hasActiveThreads: n, threadIdsBySection: a, listViewCardHeights: s, editorHeight: o, editorAdditionRowHeight: c, renderSectionOrItem: d, goToThread: u, observePostVisibilityAnalytics: m, isShowingSearchResult: h } = e,
                f = (0, g.e7)([z.Z], () => z.Z.getChannelId()),
                p = i.useCallback(
                    (e) => (n) => {
                        var r;
                        (t.current = n), (e.current = null != (r = null == n ? void 0 : n.getScrollerNode()) ? r : null);
                    },
                    [t]
                ),
                b = i.useCallback(
                    (e) =>
                        eO({
                            section: e.section,
                            isShowingSearchResult: h,
                            hasActiveThreads: n
                        })(),
                    [n, h]
                ),
                j = i.useCallback(
                    (e) =>
                        d(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, r.jsx)(
                                          'div',
                                          {
                                              'data-item-role': 'item',
                                              className: l()(ef.loadingCard, ef['loadingCard-'.concat(e.row % 3)])
                                          },
                                          'loading-'.concat(e.row)
                                      );
                            let t = a[e.section][e.row],
                                n = null != f && (0, N.UD)(f) ? P.ZP : et.ZP;
                            return (0, r.jsx)(
                                'li',
                                {
                                    className: ef.card,
                                    'data-item-role': 'item',
                                    children: (0, r.jsx)(x.y5t, {
                                        children: (0, r.jsx)(n, {
                                            className: ef.mainCard,
                                            threadId: t,
                                            goToThread: u,
                                            observePostVisibilityAnalytics: m
                                        })
                                    })
                                },
                                ''.concat(e.section, '-').concat(t)
                            );
                        }),
                    [d, a, f, u, m]
                ),
                v = i.useCallback(
                    (e, t) => {
                        if (0 === e) return o + c;
                        let n = s[a[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [a, s, o, c]
                );
            return {
                updateListScrollerRef: p,
                renderListSection: b,
                renderListItem: j,
                getListSectionHeight: i.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: v
            };
        })({
            listRef: ea,
            hasActiveThreads: B,
            threadIdsBySection: ez,
            listViewCardHeights: o,
            editorHeight: a,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eV,
            goToThread: eB,
            observePostVisibilityAnalytics: el,
            isShowingSearchResult: ey
        }),
        e$ = i.useRef(null),
        {
            updateMasonryListScrollerRef: e0,
            getItemKey: e3,
            renderGridSection: e6,
            renderGridItem: e1,
            getGridSectionHeight: e8,
            getSectionProps: e9,
            handleGridFocus: e4
        } = (function (e) {
            let { masonryListScrollerRef: t, threadIdsBySection: n, goToThread: a, renderSectionOrItem: s, hasActiveThreads: o, isShowingSearchResult: c, canSearchForumPosts: d, canViewArchivedPosts: u, observePostVisibilityAnalytics: m, focusedThreadId: h, headerHeight: g } = e,
                f = i.useRef(null),
                x = i.useCallback(
                    (e) => {
                        (t.current = e), (f.current = null == e ? void 0 : e.getScrollerNode());
                    },
                    [t]
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
                            }
                        }),
                            (h.current = eS(n));
                    },
                    [t, h]
                ),
                b = i.useCallback(
                    (e) => {
                        let t = eS(e);
                        if (null == t) return;
                        let n = L.Z.getChannel(t);
                        null != n && a(n, !0);
                    },
                    [a]
                ),
                j = i.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return 'section-'.concat(e, '-').concat(t);
                        {
                            let r = n[e][t];
                            return null == r ? ew(e, t) : ew(e, r);
                        }
                    },
                    [n]
                ),
                v = i.useCallback(
                    (e, t, n) =>
                        s(
                            e,
                            t,
                            eO({
                                section: e,
                                coords: t,
                                key: n,
                                isShowingSearchResult: c,
                                hasActiveThreads: o
                            })
                        ),
                    [s, o, c]
                ),
                _ = i.useCallback(
                    (e) =>
                        0 === e
                            ? {}
                            : {
                                  role: 'grid',
                                  'aria-labelledby': '#'.concat(e_(e))
                              },
                    []
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
                                  ei.Z,
                                  {
                                      id: ''.concat(s),
                                      threadId: c,
                                      className: l()(ef.card, ef.mainCard),
                                      goToThread: a,
                                      observePostVisibilityAnalytics: m,
                                      coords: i,
                                      gridCoords: o.coordinates[s],
                                      gridSectionBoundaries: o.boundaries
                                  },
                                  s
                              )
                            : __OVERLAY__
                              ? null
                              : (0, r.jsx)(
                                    'div',
                                    {
                                        style: ex({}, i),
                                        'data-item-role': 'item',
                                        className: l()(ef.loadingCard, ef['loadingCard-'.concat(t % 3)])
                                    },
                                    s
                                );
                    },
                    [n, a, m]
                ),
                getSectionProps: _,
                getGridSectionHeight: i.useCallback((e) => (0 === e ? g - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0), [g, c, d, o, u])
            };
        })({
            masonryListScrollerRef: e$,
            threadIdsBySection: ez,
            goToThread: eB,
            renderSectionOrItem: eV,
            hasActiveThreads: B,
            isShowingSearchResult: ey,
            canSearchForumPosts: ee,
            canViewArchivedPosts: er,
            observePostVisibilityAnalytics: el,
            focusedThreadId: eN,
            headerHeight: eH
        });
    !(function (e) {
        let { masonryListScrollerRef: t, containerWidth: n, isGridLayout: r, threadIdsBySection: a, focusedThreadId: l, parentId: s } = e;
        i.useEffect(() => {
            if (r) {
                let e = setTimeout(() => {
                    if (null == t.current || null == l.current) return;
                    let e = l.current;
                    if ('string' != typeof e) return;
                    null == A.ZP.getSidebarState(s) && (l.current = null);
                    let n = a.findIndex((t) => t.find((t) => t === e)),
                        r = t.current.getCoordsMap(),
                        i = r['__section__'.concat(n)],
                        o = r[ew(n, e)];
                    null != i &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: i.top + o.top - 100,
                            end: i.top + o.top + o.height + 50
                        });
                }, 0);
                return () => clearTimeout(e);
            }
        }, [s, n, r, a, l, t]);
    })({
        masonryListScrollerRef: e$,
        containerWidth: ek,
        isGridLayout: eo,
        threadIdsBySection: ez,
        parentId: t.id,
        focusedThreadId: eN
    });
    let e5 = i.useCallback(() => {
            var e, n;
            if (ey) return;
            let r = eo ? (null == (e = e$.current) ? void 0 : e.getScrollerState()) : null == (n = ea.current) ? void 0 : n.getScrollerState();
            if (null == r) return;
            (0, Y.ab)({
                guildId: t.guild_id,
                channelId: t.id
            });
            let i = r.scrollTop + r.offsetHeight;
            r.scrollHeight - i < (eo ? Math.max(200, (0, es.KW)(ek)) : 200) && _();
        }, [ey, eo, t.guild_id, t.id, ek, _]),
        e2 = (0, g.e7)([j.Z], () => j.Z.keyboardModeEnabled),
        e7 = (0, ed.ZP)({
            id: 'forum-grid-view',
            isEnabled: eo && e2,
            setFocus: e4
        }),
        te = (0, eu.Z)({
            listRef: ea,
            padding: 96,
            isEnabled: !eo && e2,
            channel: t
        }),
        tt = e7.containerProps,
        { ref: tn } = tt,
        tr = eb(tt, ['ref']),
        ti = A.ZP.getSidebarState(t.id),
        ta = null != ti && (0, A.D5)(ti),
        tl = (0, g.e7)([A.ZP], () => A.ZP.getSection(t.id)) === em.ULH.MEMBERS;
    return (0, r.jsx)('div', {
        className: ef.container,
        ref: eE,
        'data-member-list-open': tl,
        children: (0, r.jsx)(x.Wdt, {
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        u &&
                            (0, r.jsx)(p.Z, {
                                channel: t,
                                draftType: F.d.FirstThreadMessage,
                                className: ef.uploadArea,
                                style: { right: ta && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0 }
                            }),
                        (0, r.jsx)(eI, { channel: t }),
                        (0, r.jsx)(x.nn4, { children: (0, r.jsx)(x.H, { children: eg.intl.string(eg.t.B2panJ) }) }),
                        U
                            ? (0, r.jsx)('div', {
                                  className: ef.optInNotice,
                                  children: (0, r.jsx)(S.Z, { channel: t })
                              })
                            : null,
                        eo
                            ? (0, r.jsx)(ed.KT, {
                                  navigator: e7,
                                  children: (0, r.jsx)(
                                      x.GMG,
                                      ex(
                                          {
                                              ref: (e) => {
                                                  var t;
                                                  (tn.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), e0(e);
                                              },
                                              itemGutter: 16,
                                              padding: 24,
                                              className: ef.grid,
                                              columns: eZ,
                                              sections: eD,
                                              getItemKey: e3,
                                              getSectionHeight: e8,
                                              getItemHeight: eC,
                                              renderSection: e6,
                                              renderItem: e1,
                                              getSectionProps: e9,
                                              onScroll: v ? e5 : void 0,
                                              chunkSize: 350
                                          },
                                          tr,
                                          e
                                      ),
                                      D
                                  )
                              })
                            : (0, r.jsx)(d.bG, {
                                  navigator: te,
                                  children: (0, r.jsx)(d.SJ, {
                                      children: (t) => {
                                          var { ref: n } = t,
                                              i = eb(t, ['ref']);
                                          return (0, r.jsx)(
                                              x._2F,
                                              ep(
                                                  ex(
                                                      {
                                                          ref: eX(n),
                                                          className: ef.list,
                                                          sections: eD,
                                                          sectionHeight: eY,
                                                          rowHeight: eQ,
                                                          renderRow: eJ,
                                                          renderSection: eK,
                                                          chunkSize: 150,
                                                          onScroll: v ? e5 : void 0,
                                                          paddingBottom: 24
                                                      },
                                                      i,
                                                      e
                                                  ),
                                                  { innerRole: 'list' }
                                              ),
                                              D
                                          );
                                      }
                                  })
                              })
                    ]
                })
        })
    });
}
function eT(e) {
    let { channel: t, coords: n } = e,
        i = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: l()(ef.missingReadHistoryPermission, ef.columnsSpan),
        style: n,
        children: (0, r.jsx)(x.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: eg.intl.format(eg.t.TycmzM, { channelName: i })
        })
    });
}
function eP(e) {
    let { channel: t, coords: n } = e,
        i = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: l()(ef.missingReadHistoryPermission, ef.columnsSpan),
        style: n,
        children: (0, r.jsx)(x.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: eg.intl.format(eg.t.OWZJdX, { channelName: i })
        })
    });
}
function eI(e) {
    let { channel: t } = e,
        n = i.useCallback(() => {
            G.Z.resort(t.id);
        }, [t]),
        a = (0, g.e7)([q.Z], () => q.Z.getNewThreadCount());
    return 0 === a
        ? null
        : (0, r.jsx)(x.P3F, {
              className: ef.newPostsButton,
              onClick: n,
              children: (0, r.jsx)(x.Text, {
                  color: 'text-brand',
                  variant: 'text-md/medium',
                  children: eg.intl.format(eg.t.ue1qfH, { count: a })
              })
          });
}
function eE() {
    return Promise.resolve();
}
function eR(e) {
    var t, n, a;
    let { channel: s, isEmpty: p, isSearchLoading: v, numResults: O, children: w, coords: S, onHeightChange: P } = e,
        {
            name: I,
            formOpen: E,
            titleFocused: R,
            hasClickedForm: k,
            textAreaState: M,
            onboardingExpanded: A,
            setEditorAdditionRowHeight: L
        } = (0, en.xH)((e) => {
            let { name: t, formOpen: n, titleFocused: r, hasClickedForm: i, textAreaState: a, onboardingExpanded: l, setEditorAdditionRowHeight: s } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: r,
                hasClickedForm: i,
                textAreaState: a,
                onboardingExpanded: l,
                setEditorAdditionRowHeight: s
            };
        }, c.X),
        { tagFilter: z, layoutType: V } = (0, W.H)(s.id),
        q = (0, en.AF)(),
        K = (0, W.v)(),
        J = (0, g.e7)([D.Z], () => D.Z.canChatInGuild(s.guild_id)),
        Q = (0, X.r_)(s),
        et = (0, Z.cD)(s),
        [ei, ea] = i.useState(et),
        [, es] = (0, C.AB)(null != (a = s.getGuildId()) ? a : void 0),
        ec = (0, T.HL)(s),
        ed = J && (et || (ei && es)) && !ec,
        eu = s.isMediaChannel();
    i.useEffect(() => {
        et && ea(!0);
    }, [et]);
    let { ref: eh, height: ej } = (0, b.ZP)();
    i.useEffect(() => {
        null != ej && P(ej);
    }, [P, ej]);
    let ev = i.useCallback(() => {
        o()(() => {
            null != eh.current && q.getState().setEditorHeight(eh.current.offsetHeight);
        });
    }, [eh, q]);
    i.useLayoutEffect(ev, [ev, p, ed, A]),
        (0, U.yp)({
            event: em.CkL.REMEASURE_TARGET,
            handler: ev
        });
    let e_ = (0, g.e7)([B.Z], () => B.Z.getUploads(s.id, F.d.FirstThreadMessage)),
        eC = (0, X.ql)(s),
        ey = i.useRef(null),
        eO = i.useRef(null),
        [ew, eS] = i.useState(0),
        { width: eN } = (0, g.e7)([H.Z], () => H.Z.windowSize()),
        eT = null == (n = ey.current) || null == (t = n.getBoundingClientRect()) ? void 0 : t.width,
        eP = i.useRef(null),
        eI = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        let t = eO.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0];
        if (null != ey.current && null != n && null != n.children) {
            let { left: e, top: t } = ey.current.getBoundingClientRect(),
                r = 0;
            for (let i of n.children) {
                let { right: n, top: a, height: l } = i.getBoundingClientRect();
                if (a - t > l) break;
                n - e > r && (r = n - e);
            }
            eS(r);
        }
    }, [s.availableTags, eN, eT, z]);
    let eR = I.length > 0 && !E && (v || null != O),
        eZ = !__OVERLAY__ && !k && !E && R && (0 === M.textValue.trim().length || M.textValue.trim() === eC) && 0 === e_.length && !ec;
    i.useLayoutEffect(() => {
        let e = eR || eZ;
        if (!e) return L(0);
        null != eP.current && L(e ? eP.current.clientHeight : 0);
    }, [L, eR, eZ, eP]);
    let eM = (e) => {
            (0, Y.e7)({
                guildId: s.guild_id,
                channelId: s.id,
                tagId: e,
                filterTagIds: Array.from(z),
                added: !z.has(e),
                location: {
                    page: em.ZY5.GUILD_CHANNEL,
                    section: em.jXE.FORUM_CHANNEL_HEADER,
                    object: em.qAy.CHANNEL_TAG
                }
            }),
                K.getState().toggleTagFilter(s.id, e);
        },
        eA = (0, u.ZP)({
            id: ''.concat(s.id, '-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eE,
            scrollToEnd: eE,
            orientation: m.hy.HORIZONTAL
        }),
        eL = (0, d.JA)('forum-channel-header'),
        { role: eF, onFocus: eD } = eL,
        ez = eb(eL, ['role', 'onFocus']),
        eB = i.useRef(null),
        eH = (function () {
            let e = i.useRef(!1),
                t = (0, g.e7)([j.Z], () => j.Z.keyboardModeEnabled),
                n = i.useCallback(
                    (t) => {
                        e.current = t.shiftKey;
                    },
                    [e]
                );
            return i.useLayoutEffect(() => (t ? window.addEventListener('keydown', n) : window.removeEventListener('keydown', n), () => window.removeEventListener('keydown', n)), [t, n]), e;
        })(),
        eU = i.useCallback(
            (e) => {
                if ((eD(), e.target === eh.current && !eH.current)) {
                    var t;
                    null == (t = eB.current) || t.focus();
                }
            },
            [eD, eh, eH]
        ),
        eV = i.useMemo(() => (ec ? (0, N.iq)(s.availableTags) : s.availableTags), [s.availableTags, ec]);
    return (0, r.jsx)(
        'div',
        ep(
            ex(
                {
                    className: l()(ef.card, ef.headerRow, ef.columnsSpan),
                    ref: eh,
                    onFocus: eU
                },
                ez
            ),
            {
                style: ep(ex({}, S), {
                    position: V === h.X.GRID ? 'absolute' : 'static',
                    height: 'auto'
                }),
                children: (0, r.jsxs)(U.I3, {
                    children: [
                        null != s.guild_id
                            ? (0, r.jsx)(y.Z, {
                                  className: l()(ef.newMemberBanner, { [ef.gridViewBanner]: V === h.X.GRID }),
                                  guildId: s.guild_id,
                                  channel: s
                              })
                            : null,
                        (0, r.jsx)('div', {
                            className: l()(ef.mainCard, ef.header, { [ef.headerWithMatchingPosts]: eR || eZ }),
                            children: (0, r.jsx)(er.Z, {
                                parentChannel: s,
                                onChange: ev,
                                isSearchLoading: v,
                                numResults: O,
                                canCreatePost: ed,
                                inputRef: eB
                            })
                        }),
                        (eR || eZ) &&
                            (0, r.jsxs)('div', {
                                className: ef.matchingPostsRow,
                                ref: eP,
                                children: [
                                    eR &&
                                        (0, r.jsxs)('div', {
                                            className: ef.matchingPosts,
                                            children: [
                                                (0, r.jsx)(x.X6q, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-default',
                                                    children: v
                                                        ? eg.intl.string(eg.t['/9i3qq'])
                                                        : 0 === O
                                                          ? eg.intl.string(eg.t.DbgHxs)
                                                          : eg.intl.formatToPlainString(eg.t['tBz/8f'], {
                                                                numPosts: O,
                                                                query: I
                                                            })
                                                }),
                                                !v &&
                                                    (0, r.jsx)(x.P3F, {
                                                        onClick: () => {
                                                            (0, Y.zI)({
                                                                guildId: s.guild_id,
                                                                channelId: s.id
                                                            }),
                                                                G.Z.clearForumSearch(s.id),
                                                                q.getState().setName('');
                                                        },
                                                        children: (0, r.jsx)(x.Text, {
                                                            variant: 'text-xs/semibold',
                                                            color: 'text-brand',
                                                            className: ef.clear,
                                                            children: eg.intl.string(eg.t.VkKicX)
                                                        })
                                                    })
                                            ]
                                        }),
                                    (0, r.jsx)('div', { className: ef.tagsSpacer }),
                                    eZ
                                        ? ed
                                            ? (0, r.jsxs)('div', {
                                                  className: ef.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(x.M2$, {
                                                          shortcut: 'SHIFT',
                                                          className: ef.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(x.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-default',
                                                          children: '+'
                                                      }),
                                                      (0, r.jsx)(x.M2$, {
                                                          shortcut: 'ENTER',
                                                          className: ef.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(x.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-default',
                                                          children: eg.intl.string(eg.t.ZvJ0ys)
                                                      })
                                                  ]
                                              })
                                            : (0, r.jsxs)('div', {
                                                  className: ef.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(x.P4T, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          height: 14,
                                                          width: 14,
                                                          className: ef.warnIcon
                                                      }),
                                                      (0, r.jsx)(x.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-default',
                                                          children: eg.intl.string(eg.t.iyzwnJ)
                                                      })
                                                  ]
                                              })
                                        : null
                                ]
                            }),
                        (0, r.jsx)($.Z, {
                            channel: s,
                            onChange: ev
                        }),
                        (0, r.jsxs)('div', {
                            className: ef.tagsContainer,
                            ref: ey,
                            children: [
                                (0, r.jsx)(ek, { channel: s }),
                                eV.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: ef.divider }),
                                              (0, r.jsx)('div', {
                                                  className: ef.tagList,
                                                  ref: eO,
                                                  children: (0, r.jsx)(d.bG, {
                                                      navigator: eA,
                                                      children: (0, r.jsx)(d.SJ, {
                                                          children: (e) => {
                                                              var { ref: t } = e,
                                                                  n = eb(e, ['ref']);
                                                              return (0, r.jsx)(
                                                                  'div',
                                                                  ep(
                                                                      ex(
                                                                          {
                                                                              className: ef.tagListInner,
                                                                              ref: t
                                                                          },
                                                                          n
                                                                      ),
                                                                      {
                                                                          children: eV.map((e) =>
                                                                              (0, r.jsx)(
                                                                                  el.Z,
                                                                                  {
                                                                                      tag: e,
                                                                                      onClick: () => eM(e.id),
                                                                                      selected: z.has(e.id)
                                                                                  },
                                                                                  e.id
                                                                              )
                                                                          )
                                                                      }
                                                                  )
                                                              );
                                                          }
                                                      })
                                                  })
                                              }),
                                              (0, r.jsx)(x.yRy, {
                                                  targetElementRef: eI,
                                                  renderPopout: (e) => {
                                                      let { closePopout: t, setPopoutRef: n } = e;
                                                      return (0, r.jsx)(eo.Z, {
                                                          channel: s,
                                                          closePopout: t,
                                                          setPopoutRef: n
                                                      });
                                                  },
                                                  position: 'bottom',
                                                  align: 'right',
                                                  children: (e, t) => {
                                                      let { isShown: n } = t;
                                                      return (0, r.jsxs)(
                                                          x.zxk,
                                                          ep(ex({}, e), {
                                                              buttonRef: eI,
                                                              size: x.zxk.Sizes.MIN,
                                                              color: x.zxk.Colors.CUSTOM,
                                                              className: l()(ef.tagsButton, { [ef.tagsButtonWithCount]: z.size > 0 }),
                                                              style: { left: ew },
                                                              innerClassName: ef.tagsButtonInner,
                                                              'aria-label': z.size > 0 ? eg.intl.string(eg.t.IkpM1d) : eg.intl.string(eg.t['9vKK/P']),
                                                              children: [
                                                                  z.size > 0
                                                                      ? (0, r.jsx)('div', {
                                                                            className: ef.countContainer,
                                                                            children: (0, r.jsx)(x.Text, {
                                                                                className: ef.countText,
                                                                                color: 'none',
                                                                                variant: 'text-xs/medium',
                                                                                children: z.size
                                                                            })
                                                                        })
                                                                      : eg.intl.string(eg.t.fZ8hzs),
                                                                  n
                                                                      ? (0, r.jsx)(x.u04, {
                                                                            size: 'custom',
                                                                            color: 'currentColor',
                                                                            width: 20
                                                                        })
                                                                      : (0, r.jsx)(x.CJ0, {
                                                                            size: 'custom',
                                                                            color: 'currentColor',
                                                                            width: 20
                                                                        })
                                                              ]
                                                          })
                                                      );
                                                  }
                                              }),
                                              (0, r.jsxs)(x.zxk, {
                                                  size: x.zxk.Sizes.MIN,
                                                  color: x.zxk.Colors.CUSTOM,
                                                  className: l()(ef.tagsButton, ef.tagsButtonPlaceholder),
                                                  innerClassName: ef.tagsButtonInner,
                                                  'aria-label': eg.intl.string(eg.t.IkpM1d),
                                                  children: [
                                                      z.size > 0
                                                          ? (0, r.jsx)('div', {
                                                                className: ef.countContainer,
                                                                children: (0, r.jsx)(x.Text, {
                                                                    className: ef.countText,
                                                                    color: 'none',
                                                                    variant: 'text-xs/medium',
                                                                    children: z.size
                                                                })
                                                            })
                                                          : null,
                                                      (0, r.jsx)(x.u04, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          width: 24
                                                      })
                                                  ]
                                              })
                                          ]
                                      })
                                    : null
                            ]
                        }),
                        w,
                        Q &&
                            !eu &&
                            !ec &&
                            (0, r.jsx)(_.ZP, {
                                contentTypes: [f.z.FORUM_CHANNEL_HELPER_CARD],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === f.z.FORUM_CHANNEL_HELPER_CARD ? (0, r.jsx)(ee.Z, { onDismiss: n }) : null;
                                }
                            })
                    ]
                })
            }
        ),
        'create-form'
    );
}
function ek(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        a = i.useRef(null);
    return (0, r.jsx)(x.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(ea.Z, {
                channel: t,
                closePopout: n
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, r.jsxs)(
                x.zxk,
                ep(ex({}, e), {
                    buttonRef: a,
                    size: x.zxk.Sizes.MIN,
                    color: x.zxk.Colors.CUSTOM,
                    className: ef.sortDropdown,
                    innerClassName: ef.sortDropdownInner,
                    'aria-label': n ? eg.intl.string(eg.t.JxU0ws) : eg.intl.string(eg.t.xyYt8P),
                    children: [
                        (0, r.jsx)(x.uVW, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        (0, r.jsx)(x.Text, {
                            className: ef.sortDropdownText,
                            variant: 'text-sm/medium',
                            color: 'interactive-normal',
                            children: n ? eg.intl.string(eg.t.JxU0ws) : eg.intl.string(eg.t.xyYt8P)
                        }),
                        i
                            ? (0, r.jsx)(x.u04, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20
                              })
                            : (0, r.jsx)(x.CJ0, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20
                              })
                    ]
                })
            );
        }
    });
}
