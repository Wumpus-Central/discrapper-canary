(n.r(t), n.d(t, { default: () => eC }), n(35282), n(388685), n(781311));
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
    x = n(755721),
    p = n(481060),
    b = n(561472),
    j = n(393238),
    v = n(607070),
    C = n(933557),
    _ = n(243778),
    y = n(71619),
    O = n(898188),
    w = n(41776),
    S = n(256413),
    T = n(292853),
    N = n(869382),
    P = n(982168),
    I = n(216572),
    E = n(543015),
    R = n(359110),
    M = n(897473),
    Z = n(344185),
    k = n(235449),
    A = n(665906),
    L = n(488131),
    F = n(433355),
    D = n(592125),
    z = n(703558),
    B = n(607744),
    H = n(944486),
    U = n(117530),
    V = n(451478),
    G = n(459273),
    q = n(961675),
    W = n(883429),
    X = n(238349),
    K = n(109434),
    J = n(456269),
    Y = n(90372),
    Q = n(985518),
    $ = n(228392),
    ee = n(355589),
    et = n(542581),
    en = n(639184),
    er = n(404616),
    ei = n(470623),
    ea = n(749913),
    el = n(219664),
    es = n(895932),
    eo = n(479099),
    ec = n(510060),
    ed = n(276357),
    eu = n(81490),
    em = n(482062),
    eh = n(260503),
    eg = n(981631),
    ef = n(124368),
    ex = n(388032),
    ep = n(683999);
function eb(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function ej(e, t) {
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
function ev(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function eC(e) {
    let { channel: t, guild: n, sidebarState: i } = e;
    return (0, r.jsx)(
        ei.oL,
        {
            channel: t,
            children: (0, r.jsx)(eP, {
                channel: t,
                guild: n,
                sidebarState: i
            })
        },
        t.id
    );
}
let e_ = new ec.Me({
    minWidth: 320,
    maxWidth: 450,
    gap: 16
});
function ey(e) {
    return 'forum-grid-header-section-'.concat(e);
}
let eO = (e, t, n) => (0 === e ? 0 : (0, ec.KW)(n));
function ew(e) {
    let { itemRole: t, coords: n, section: i } = e;
    return (0, r.jsx)(
        'div',
        {
            className: l()(ep.card, ep.archivedDividerRow, ep.columnsSpan),
            style: n,
            'data-item-role': t,
            children: (0, r.jsx)('div', {
                className: ep.emptyMainCard,
                children: (0, r.jsx)(p.X6q, {
                    variant: 'eyebrow',
                    className: ep.archivedDivider,
                    id: ey(i),
                    children: ex.intl.string(ex.t['3+LO19'])
                })
            })
        },
        'section-divider'
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
                      coords: null == n ? void 0 : ej(eb({}, n), { position: 'absolute' }),
                      itemRole: 'section'
                  },
                  i
              )
            : null;
}
function eT(e, t) {
    return 'card-'.concat(e, '-').concat(t);
}
function eN(e) {
    if ('string' == typeof e) {
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
            formOpen: u
        } = (0, ei.xH)((e) => {
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
            searchResults: x,
            canLoadMore: j,
            loadMore: C,
            activeThreadsLoading: _,
            archivedThreadsLoading: y,
            loading: O,
            isSearchLoading: I,
            layoutType: A
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: r, tagSetting: i } = (0, K.H)(e.id),
                a = (0, J.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: i,
                    shouldAutomaticallyAck: !0
                }),
                l = (0, g.e7)([Z.Z, w.Z], () => {
                    let t = Z.Z.hasLoaded(e.guild_id),
                        n = w.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: s, canLoadMore: o, loadMore: c, loading: d } = (0, k.qQ)(e, t, n, i),
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
                    layoutType: r
                }
            );
        })(t),
        B = m.length > 0,
        U = B || f.length > 0,
        V = (0, S.Z)(t),
        { tagFilter: G, tagSetting: X } = (0, K.H)(t.id);
    (0, J.ku)(t, G, X, u);
    let et = (0, J.jR)(t),
        en = (0, J.eZ)(t),
        ea = i.useRef(null),
        { observePostVisibilityAnalytics: es } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: r } = e;
            Y.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n
            });
            let a = i.useRef(null),
                l = i.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let r = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, Q.rj)(e, t, r) : (0, Q.Ct)(e, t, r);
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
                                (null == (e = a.current) || e.disconnect(), (a.current = null));
                            }
                        );
                }, [n, l, r]),
                {
                    observePostVisibilityAnalytics: i.useCallback(
                        (e, t) => {
                            var r;
                            if (null == e) return void (0, Q.Ct)(n, t, Date.now());
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
        eo = A === h.X.GRID,
        { searchQuery: ed } = (0, J.XZ)({ channelId: t.id }),
        eC = null != x && null != ed && ed.length > 0,
        ew = i.useRef(null),
        { containerRef: eP, containerWidth: eM } = (0, eu.Z)();
    (i.useEffect(
        () => () => {
            null != t.id && W.Z.clearForumSearch(t.id);
        },
        [t.id]
    ),
        i.useEffect(() => {
            if (null == ew.current && null != t.id) {
                let e = F.ZP.getSidebarState(t.id);
                null != e && e.type === M.tI.VIEW_THREAD && (ew.current = e.channelId);
            }
        }, [t.id]));
    let { columns: ek } = i.useMemo(() => (eo ? e_.getRenderOptions(eM) : ec.eU), [eo, eM]),
        eA = i.useMemo(() => (O ? Math.round((window.innerHeight - 200) / 118) : 0), [O]),
        { showResolvedFlags: eL } = (0, N.N)(t.id),
        eF = t.isModeratorReportChannel(),
        eD = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ec.KW)(e_.getWidth(eM))) * ek;
            return _ ? e : 0;
        }, [eM, ek, _]),
        ez = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ec.KW)(e_.getWidth(eM))) * ek;
            return y ? e : 0;
        }, [eM, ek, y]),
        eB = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ec.KW)(e_.getWidth(eM))) * ek;
            return I && eC ? e : 0;
        }, [eM, ek, I, eC]),
        eH = i.useMemo(() => {
            if (eo)
                if (!et && eC) return [1, 0];
                else if (!en) return [1, m.length + eD, 0];
                else if (eC) return [1, x.length + eB, 0];
                else if (eF && !eL) return [1, m.length + eD, 0];
                else return [1, m.length + eD, f.length + ez];
            if (!et && eC) return [1, 1];
            if (!en) return [1, m.length, 1];
            if (eC) return [1, x.length, 0, eA];
            if (eF && !eL) return [1, m.length, 0, eA];
            else return [1, m.length, f.length, eA];
        }, [eo, eC, m.length, f.length, et, en, eA, x, eD, ez, eB, eL, eF]),
        eU = i.useMemo(() => (!et && eC ? [[], []] : en ? (eC ? [[], x, [], []] : eF && !eL ? [[], m, [], []] : [[], m, f, []]) : [[], m, []]), [eC, et, en, x, m, f, eL, eF]),
        eV = i.useCallback(
            (e, n) => {
                ((0, $.B5)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: {
                        page: eg.ZY5.GUILD_CHANNEL,
                        section: eg.jXE.FORUM_CHANNEL_POST
                    }
                }),
                    n ? (0, R.ad)(e, { source: ef.on.BROWSER }) : ((ew.current = e.id), (0, L.ok)(e)));
            },
            [t.guild_id, t.id, ew]
        ),
        [eG, eq] = i.useState(a + s - 24),
        eW = i.useCallback(
            (e, n, i) =>
                0 === e
                    ? (0, r.jsx)(
                          eZ,
                          {
                              channel: t,
                              isEmpty: !B,
                              isSearchLoading: I,
                              numResults: null == x ? void 0 : x.length,
                              coords: n,
                              onHeightChange: eq,
                              children:
                                  !O &&
                                  (0, r.jsx)(
                                      ee.Z,
                                      {
                                          channel: t,
                                          hasAnyThread: U,
                                          hasActiveThreads: B
                                      },
                                      t.id
                                  )
                          },
                          'forum-channel-header'
                      )
                    : 2 !== e || en
                      ? 1 === e && eC && !et
                          ? (0, r.jsx)(
                                eE,
                                {
                                    channel: t,
                                    coords: n
                                },
                                'archive-or-search-result'
                            )
                          : i()
                      : (0, r.jsx)(
                            eI,
                            {
                                channel: t,
                                coords: n
                            },
                            'archived-missing-reading-history-perm'
                        ),
            [eC, en, x, et, t, B, I, O, U]
        ),
        eX = (0, g.e7)([q.Z], () => q.Z.hasHidden(t.id)),
        eK = {
            editorHeight: a,
            isGridLayout: eo
        },
        eJ = i.useRef(eK);
    (i.useEffect(() => {
        eJ.current = eK;
    }),
        i.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: r } = eJ.current,
                i = r ? e6 : ea,
                a = null == (e = i.current) ? void 0 : e.getScrollerState();
            null != a && !eX && a.scrollTop > n && (null == (t = i.current) || t.scrollTo({ to: 0 }));
        }, [eX]));
    let {
            updateListScrollerRef: eY,
            renderListSection: eQ,
            renderListItem: e$,
            getListSectionHeight: e0,
            getListItemHeight: e3
        } = (function (e) {
            let { listRef: t, hasActiveThreads: n, threadIdsBySection: a, listViewCardHeights: s, editorHeight: o, editorAdditionRowHeight: c, renderSectionOrItem: d, goToThread: u, observePostVisibilityAnalytics: m, isShowingSearchResult: h } = e,
                f = (0, g.e7)([H.Z], () => H.Z.getChannelId()),
                x = i.useCallback(
                    (e) => (n) => {
                        var r;
                        ((t.current = n), (e.current = null != (r = null == n ? void 0 : n.getScrollerNode()) ? r : null));
                    },
                    [t]
                ),
                b = i.useCallback(
                    (e) =>
                        eS({
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
                                              className: l()(ep.loadingCard, ep['loadingCard-'.concat(e.row % 3)])
                                          },
                                          'loading-'.concat(e.row)
                                      );
                            let t = a[e.section][e.row],
                                n = null != f && (0, P.UD)(f) ? E.ZP : er.ZP;
                            return (0, r.jsx)(
                                'li',
                                {
                                    className: ep.card,
                                    'data-item-role': 'item',
                                    children: (0, r.jsx)(p.y5t, {
                                        children: (0, r.jsx)(n, {
                                            className: ep.mainCard,
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
                updateListScrollerRef: x,
                renderListSection: b,
                renderListItem: j,
                getListSectionHeight: i.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: v
            };
        })({
            listRef: ea,
            hasActiveThreads: B,
            threadIdsBySection: eU,
            listViewCardHeights: o,
            editorHeight: a,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eW,
            goToThread: eV,
            observePostVisibilityAnalytics: es,
            isShowingSearchResult: eC
        }),
        e6 = i.useRef(null),
        {
            updateMasonryListScrollerRef: e1,
            getItemKey: e8,
            renderGridSection: e9,
            renderGridItem: e4,
            getGridSectionHeight: e5,
            getSectionProps: e2,
            handleGridFocus: e7
        } = (function (e) {
            let { masonryListScrollerRef: t, threadIdsBySection: n, goToThread: a, renderSectionOrItem: s, hasActiveThreads: o, isShowingSearchResult: c, canSearchForumPosts: d, canViewArchivedPosts: u, observePostVisibilityAnalytics: m, focusedThreadId: h, headerHeight: g } = e,
                f = i.useRef(null),
                x = i.useCallback(
                    (e) => {
                        ((t.current = e), (f.current = null == e ? void 0 : e.getScrollerNode()));
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
                        (r.scrollIntoViewNode({
                            node: i,
                            padding: l,
                            callback() {
                                requestAnimationFrame(() => {
                                    var t;
                                    null == (t = document.querySelector(e)) || t.focus({ preventScroll: !0 });
                                });
                            }
                        }),
                            (h.current = eN(n)));
                    },
                    [t, h]
                ),
                b = i.useCallback(
                    (e) => {
                        let t = eN(e);
                        if (null == t) return;
                        let n = D.Z.getChannel(t);
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
                            return null == r ? eT(e, t) : eT(e, r);
                        }
                    },
                    [n]
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
                                hasActiveThreads: o
                            })
                        ),
                    [s, o, c]
                ),
                C = i.useCallback(
                    (e) =>
                        0 === e
                            ? {}
                            : {
                                  role: 'grid',
                                  'aria-labelledby': '#'.concat(ey(e))
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
                                  el.Z,
                                  {
                                      id: ''.concat(s),
                                      threadId: c,
                                      className: l()(ep.card, ep.mainCard),
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
                                        style: eb({}, i),
                                        'data-item-role': 'item',
                                        className: l()(ep.loadingCard, ep['loadingCard-'.concat(t % 3)])
                                    },
                                    s
                                );
                    },
                    [n, a, m]
                ),
                getSectionProps: C,
                getGridSectionHeight: i.useCallback((e) => (0 === e ? g - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0), [g, c, d, o, u])
            };
        })({
            masonryListScrollerRef: e6,
            threadIdsBySection: eU,
            goToThread: eV,
            renderSectionOrItem: eW,
            hasActiveThreads: B,
            isShowingSearchResult: eC,
            canSearchForumPosts: et,
            canViewArchivedPosts: en,
            observePostVisibilityAnalytics: es,
            focusedThreadId: ew,
            headerHeight: eG
        });
    !(function (e) {
        let { masonryListScrollerRef: t, containerWidth: n, isGridLayout: r, threadIdsBySection: a, focusedThreadId: l, parentId: s } = e;
        i.useEffect(() => {
            if (r) {
                let e = setTimeout(() => {
                    if (null == t.current || null == l.current) return;
                    let e = l.current;
                    if ('string' != typeof e) return;
                    null == F.ZP.getSidebarState(s) && (l.current = null);
                    let n = a.findIndex((t) => t.find((t) => t === e)),
                        r = t.current.getCoordsMap(),
                        i = r['__section__'.concat(n)],
                        o = r[eT(n, e)];
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
        masonryListScrollerRef: e6,
        containerWidth: eM,
        isGridLayout: eo,
        threadIdsBySection: eU,
        parentId: t.id,
        focusedThreadId: ew
    });
    let te = i.useCallback(() => {
            var e, n;
            if (eC) return;
            let r = eo ? (null == (e = e6.current) ? void 0 : e.getScrollerState()) : null == (n = ea.current) ? void 0 : n.getScrollerState();
            if (null == r) return;
            (0, $.ab)({
                guildId: t.guild_id,
                channelId: t.id
            });
            let i = r.scrollTop + r.offsetHeight;
            r.scrollHeight - i < (eo ? Math.max(200, (0, ec.KW)(eM)) : 200) && C();
        }, [eC, eo, t.guild_id, t.id, eM, C]),
        tt = (0, g.e7)([v.Z], () => v.Z.keyboardModeEnabled),
        tn = (0, em.ZP)({
            id: 'forum-grid-view',
            isEnabled: eo && tt,
            setFocus: e7
        }),
        tr = (0, eh.Z)({
            listRef: ea,
            padding: 96,
            isEnabled: !eo && tt,
            channel: t
        }),
        ti = tn.containerProps,
        { ref: ta } = ti,
        tl = ev(ti, ['ref']),
        ts = F.ZP.getSidebarState(t.id),
        to = null != ts && (0, F.D5)(ts),
        tc = (0, g.e7)([F.ZP], () => F.ZP.getSection(t.id)) === eg.ULH.MEMBERS;
    return (0, r.jsx)('div', {
        className: ep.container,
        ref: eP,
        'data-member-list-open': tc,
        children: (0, r.jsx)(p.Wdt, {
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        u &&
                            (0, r.jsx)(b.Z, {
                                channel: t,
                                draftType: z.d.FirstThreadMessage,
                                className: ep.uploadArea,
                                style: { right: to && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0 }
                            }),
                        (0, r.jsx)(eR, { channel: t }),
                        (0, r.jsx)(p.nn4, { children: (0, r.jsx)(p.H, { children: ex.intl.string(ex.t.B2panJ) }) }),
                        V
                            ? (0, r.jsx)('div', {
                                  className: ep.optInNotice,
                                  children: (0, r.jsx)(T.Z, { channel: t })
                              })
                            : null,
                        eo
                            ? (0, r.jsx)(em.KT, {
                                  navigator: tn,
                                  children: (0, r.jsx)(
                                      p.GMG,
                                      eb(
                                          {
                                              ref: (e) => {
                                                  var t;
                                                  ((ta.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), e1(e));
                                              },
                                              itemGutter: 16,
                                              padding: 24,
                                              className: ep.grid,
                                              columns: ek,
                                              sections: eH,
                                              getItemKey: e8,
                                              getSectionHeight: e5,
                                              getItemHeight: eO,
                                              renderSection: e9,
                                              renderItem: e4,
                                              getSectionProps: e2,
                                              onScroll: j ? te : void 0,
                                              chunkSize: 350
                                          },
                                          tl,
                                          e
                                      ),
                                      A
                                  )
                              })
                            : (0, r.jsx)(d.bG, {
                                  navigator: tr,
                                  children: (0, r.jsx)(d.SJ, {
                                      children: (t) => {
                                          var { ref: n } = t,
                                              i = ev(t, ['ref']);
                                          return (0, r.jsx)(
                                              p._2F,
                                              ej(
                                                  eb(
                                                      {
                                                          ref: eY(n),
                                                          className: ep.list,
                                                          sections: eH,
                                                          sectionHeight: e0,
                                                          rowHeight: e3,
                                                          renderRow: e$,
                                                          renderSection: eQ,
                                                          chunkSize: 150,
                                                          onScroll: j ? te : void 0,
                                                          paddingBottom: 24
                                                      },
                                                      i,
                                                      e
                                                  ),
                                                  { innerRole: 'list' }
                                              ),
                                              A
                                          );
                                      }
                                  })
                              })
                    ]
                })
        })
    });
}
function eI(e) {
    let { channel: t, coords: n } = e,
        i = (0, C.ZP)(t);
    return (0, r.jsx)('div', {
        className: l()(ep.missingReadHistoryPermission, ep.columnsSpan),
        style: n,
        children: (0, r.jsx)(p.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ex.intl.format(ex.t.TycmzM, { channelName: i })
        })
    });
}
function eE(e) {
    let { channel: t, coords: n } = e,
        i = (0, C.ZP)(t);
    return (0, r.jsx)('div', {
        className: l()(ep.missingReadHistoryPermission, ep.columnsSpan),
        style: n,
        children: (0, r.jsx)(p.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ex.intl.format(ex.t.OWZJdX, { channelName: i })
        })
    });
}
function eR(e) {
    let { channel: t } = e,
        n = i.useCallback(() => {
            W.Z.resort(t.id);
        }, [t]),
        a = (0, g.e7)([X.Z], () => X.Z.getNewThreadCount());
    return 0 === a
        ? null
        : (0, r.jsx)(p.P3F, {
              className: ep.newPostsButton,
              onClick: n,
              children: (0, r.jsx)(p.Text, {
                  color: 'text-brand',
                  variant: 'text-md/medium',
                  children: ex.intl.format(ex.t.ue1qfH, { count: a })
              })
          });
}
function eM() {
    return Promise.resolve();
}
function eZ(e) {
    var t, n, a;
    let { channel: s, isEmpty: b, isSearchLoading: C, numResults: w, children: S, coords: T, onHeightChange: N } = e,
        {
            name: E,
            formOpen: R,
            titleFocused: M,
            hasClickedForm: Z,
            textAreaState: k,
            onboardingExpanded: L,
            setEditorAdditionRowHeight: F
        } = (0, ei.xH)((e) => {
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
        { tagFilter: D, layoutType: H } = (0, K.H)(s.id),
        q = (0, ei.AF)(),
        X = (0, K.v)(),
        Y = (0, g.e7)([B.Z], () => B.Z.canChatInGuild(s.guild_id)),
        Q = (0, J.r_)(s),
        ee = (0, A.cD)(s),
        [er, el] = i.useState(ee),
        [, es] = (0, y.AB)(null != (a = s.getGuildId()) ? a : void 0),
        ec = (0, I.HL)(s),
        eu = Y && (ee || (er && es)) && !ec,
        em = s.isMediaChannel();
    i.useEffect(() => {
        ee && el(!0);
    }, [ee]);
    let { ref: eh, height: ef } = (0, j.ZP)();
    i.useEffect(() => {
        null != ef && N(ef);
    }, [N, ef]);
    let eC = i.useCallback(() => {
        o()(() => {
            null != eh.current && q.getState().setEditorHeight(eh.current.offsetHeight);
        });
    }, [eh, q]);
    (i.useLayoutEffect(eC, [eC, b, eu, L]),
        (0, G.yp)({
            event: eg.CkL.REMEASURE_TARGET,
            handler: eC
        }));
    let e_ = (0, g.e7)([U.Z], () => U.Z.getUploads(s.id, z.d.FirstThreadMessage)),
        ey = (0, J.ql)(s),
        eO = i.useRef(null),
        ew = i.useRef(null),
        [eS, eT] = i.useState(0),
        { width: eN } = (0, g.e7)([V.Z], () => V.Z.windowSize()),
        eP = null == (n = eO.current) || null == (t = n.getBoundingClientRect()) ? void 0 : t.width,
        eI = i.useRef(null),
        eE = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        let t = ew.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0];
        if (null != eO.current && null != n && null != n.children) {
            let { left: e, top: t } = eO.current.getBoundingClientRect(),
                r = 0;
            for (let i of n.children) {
                let { right: n, top: a, height: l } = i.getBoundingClientRect();
                if (a - t > l) break;
                n - e > r && (r = n - e);
            }
            eT(r);
        }
    }, [s.availableTags, eN, eP, D]);
    let eR = E.length > 0 && !R && (C || null != w),
        eZ = !__OVERLAY__ && !Z && !R && M && (0 === k.textValue.trim().length || k.textValue.trim() === ey) && 0 === e_.length && !ec;
    i.useLayoutEffect(() => {
        let e = eR || eZ;
        if (!e) return F(0);
        null != eI.current && F(e ? eI.current.clientHeight : 0);
    }, [F, eR, eZ, eI]);
    let eA = (e) => {
            ((0, $.e7)({
                guildId: s.guild_id,
                channelId: s.id,
                tagId: e,
                filterTagIds: Array.from(D),
                added: !D.has(e),
                location: {
                    page: eg.ZY5.GUILD_CHANNEL,
                    section: eg.jXE.FORUM_CHANNEL_HEADER,
                    object: eg.qAy.CHANNEL_TAG
                }
            }),
                X.getState().toggleTagFilter(s.id, e));
        },
        eL = (0, u.ZP)({
            id: ''.concat(s.id, '-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eM,
            scrollToEnd: eM,
            orientation: m.hy.HORIZONTAL
        }),
        eF = (0, d.JA)('forum-channel-header'),
        { role: eD, onFocus: ez } = eF,
        eB = ev(eF, ['role', 'onFocus']),
        eH = i.useRef(null),
        eU = (function () {
            let e = i.useRef(!1),
                t = (0, g.e7)([v.Z], () => v.Z.keyboardModeEnabled),
                n = i.useCallback(
                    (t) => {
                        e.current = t.shiftKey;
                    },
                    [e]
                );
            return (i.useLayoutEffect(() => (t ? window.addEventListener('keydown', n) : window.removeEventListener('keydown', n), () => window.removeEventListener('keydown', n)), [t, n]), e);
        })(),
        eV = i.useCallback(
            (e) => {
                if ((ez(), e.target === eh.current && !eU.current)) {
                    var t;
                    null == (t = eH.current) || t.focus();
                }
            },
            [ez, eh, eU]
        ),
        eG = i.useMemo(() => (ec ? (0, P.iq)(s.availableTags) : s.availableTags), [s.availableTags, ec]);
    return (0, r.jsx)(
        'div',
        ej(
            eb(
                {
                    className: l()(ep.card, ep.headerRow, ep.columnsSpan),
                    ref: eh,
                    onFocus: eV
                },
                eB
            ),
            {
                style: ej(eb({}, T), {
                    position: H === h.X.GRID ? 'absolute' : 'static',
                    height: 'auto'
                }),
                children: (0, r.jsxs)(G.I3, {
                    children: [
                        null != s.guild_id
                            ? (0, r.jsx)(O.Z, {
                                  className: l()(ep.newMemberBanner, { [ep.gridViewBanner]: H === h.X.GRID }),
                                  guildId: s.guild_id,
                                  channel: s
                              })
                            : null,
                        (0, r.jsx)('div', {
                            className: l()(ep.mainCard, ep.header, { [ep.headerWithMatchingPosts]: eR || eZ }),
                            children: (0, r.jsx)(ea.Z, {
                                parentChannel: s,
                                onChange: eC,
                                isSearchLoading: C,
                                numResults: w,
                                canCreatePost: eu,
                                inputRef: eH
                            })
                        }),
                        (eR || eZ) &&
                            (0, r.jsxs)('div', {
                                className: ep.matchingPostsRow,
                                ref: eI,
                                children: [
                                    eR &&
                                        (0, r.jsxs)('div', {
                                            className: ep.matchingPosts,
                                            children: [
                                                (0, r.jsx)(p.X6q, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-default',
                                                    children: C
                                                        ? ex.intl.string(ex.t['/9i3qq'])
                                                        : 0 === w
                                                          ? ex.intl.string(ex.t.DbgHxs)
                                                          : ex.intl.formatToPlainString(ex.t['tBz/8f'], {
                                                                numPosts: w,
                                                                query: E
                                                            })
                                                }),
                                                !C &&
                                                    (0, r.jsx)(p.P3F, {
                                                        onClick: () => {
                                                            ((0, $.zI)({
                                                                guildId: s.guild_id,
                                                                channelId: s.id
                                                            }),
                                                                W.Z.clearForumSearch(s.id),
                                                                q.getState().setName(''));
                                                        },
                                                        children: (0, r.jsx)(p.Text, {
                                                            variant: 'text-xs/semibold',
                                                            color: 'text-brand',
                                                            className: ep.clear,
                                                            children: ex.intl.string(ex.t.VkKicX)
                                                        })
                                                    })
                                            ]
                                        }),
                                    (0, r.jsx)('div', { className: ep.tagsSpacer }),
                                    eZ
                                        ? eu
                                            ? (0, r.jsxs)('div', {
                                                  className: ep.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(p.M2$, {
                                                          shortcut: 'SHIFT',
                                                          className: ep.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-default',
                                                          children: '+'
                                                      }),
                                                      (0, r.jsx)(p.M2$, {
                                                          shortcut: 'ENTER',
                                                          className: ep.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-default',
                                                          children: ex.intl.string(ex.t.ZvJ0ys)
                                                      })
                                                  ]
                                              })
                                            : (0, r.jsxs)('div', {
                                                  className: ep.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(p.P4T, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          height: 14,
                                                          width: 14,
                                                          className: ep.warnIcon
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-default',
                                                          children: ex.intl.string(ex.t.iyzwnJ)
                                                      })
                                                  ]
                                              })
                                        : null
                                ]
                            }),
                        (0, r.jsx)(et.Z, {
                            channel: s,
                            onChange: eC
                        }),
                        (0, r.jsxs)('div', {
                            className: ep.tagsContainer,
                            ref: eO,
                            children: [
                                (0, r.jsx)(ek, { channel: s }),
                                eG.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: ep.divider }),
                                              (0, r.jsx)('div', {
                                                  className: ep.tagList,
                                                  ref: ew,
                                                  children: (0, r.jsx)(d.bG, {
                                                      navigator: eL,
                                                      children: (0, r.jsx)(d.SJ, {
                                                          children: (e) => {
                                                              var { ref: t } = e,
                                                                  n = ev(e, ['ref']);
                                                              return (0, r.jsx)(
                                                                  'div',
                                                                  ej(
                                                                      eb(
                                                                          {
                                                                              className: ep.tagListInner,
                                                                              ref: t
                                                                          },
                                                                          n
                                                                      ),
                                                                      {
                                                                          children: eG.map((e) =>
                                                                              (0, r.jsx)(
                                                                                  eo.Z,
                                                                                  {
                                                                                      tag: e,
                                                                                      onClick: () => eA(e.id),
                                                                                      selected: D.has(e.id)
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
                                              (0, r.jsx)(p.yRy, {
                                                  targetElementRef: eE,
                                                  renderPopout: (e) => {
                                                      let { closePopout: t, setPopoutRef: n } = e;
                                                      return (0, r.jsx)(ed.Z, {
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
                                                          x.zx,
                                                          ej(eb({}, e), {
                                                              'data-migration-pending': !0,
                                                              buttonRef: eE,
                                                              size: x.zx.Sizes.MIN,
                                                              color: x.zx.Colors.CUSTOM,
                                                              className: l()(ep.tagsButton, { [ep.tagsButtonWithCount]: D.size > 0 }),
                                                              style: { left: eS },
                                                              innerClassName: ep.tagsButtonInner,
                                                              'aria-label': D.size > 0 ? ex.intl.string(ex.t.IkpM1d) : ex.intl.string(ex.t['9vKK/P']),
                                                              children: [
                                                                  D.size > 0
                                                                      ? (0, r.jsx)('div', {
                                                                            className: ep.countContainer,
                                                                            children: (0, r.jsx)(p.Text, {
                                                                                className: ep.countText,
                                                                                color: 'none',
                                                                                variant: 'text-xs/medium',
                                                                                children: D.size
                                                                            })
                                                                        })
                                                                      : ex.intl.string(ex.t.fZ8hzs),
                                                                  n
                                                                      ? (0, r.jsx)(p.u04, {
                                                                            size: 'custom',
                                                                            color: 'currentColor',
                                                                            width: 20
                                                                        })
                                                                      : (0, r.jsx)(p.CJ0, {
                                                                            size: 'custom',
                                                                            color: 'currentColor',
                                                                            width: 20
                                                                        })
                                                              ]
                                                          })
                                                      );
                                                  }
                                              }),
                                              (0, r.jsxs)(x.zx, {
                                                  'data-migration-pending': !0,
                                                  size: x.zx.Sizes.MIN,
                                                  color: x.zx.Colors.CUSTOM,
                                                  className: l()(ep.tagsButton, ep.tagsButtonPlaceholder),
                                                  innerClassName: ep.tagsButtonInner,
                                                  'aria-label': ex.intl.string(ex.t.IkpM1d),
                                                  children: [
                                                      D.size > 0
                                                          ? (0, r.jsx)('div', {
                                                                className: ep.countContainer,
                                                                children: (0, r.jsx)(p.Text, {
                                                                    className: ep.countText,
                                                                    color: 'none',
                                                                    variant: 'text-xs/medium',
                                                                    children: D.size
                                                                })
                                                            })
                                                          : null,
                                                      (0, r.jsx)(p.u04, {
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
                        S,
                        Q &&
                            !em &&
                            !ec &&
                            (0, r.jsx)(_.ZP, {
                                contentTypes: [f.z.FORUM_CHANNEL_HELPER_CARD],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === f.z.FORUM_CHANNEL_HELPER_CARD ? (0, r.jsx)(en.Z, { onDismiss: n }) : null;
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
    return (0, r.jsx)(p.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(es.Z, {
                channel: t,
                closePopout: n
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, r.jsxs)(
                x.zx,
                ej(eb({}, e), {
                    'data-migration-pending': !0,
                    buttonRef: a,
                    size: x.zx.Sizes.MIN,
                    color: x.zx.Colors.CUSTOM,
                    className: ep.sortDropdown,
                    innerClassName: ep.sortDropdownInner,
                    'aria-label': n ? ex.intl.string(ex.t.JxU0ws) : ex.intl.string(ex.t.xyYt8P),
                    children: [
                        (0, r.jsx)(p.uVW, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        (0, r.jsx)(p.Text, {
                            className: ep.sortDropdownText,
                            variant: 'text-sm/medium',
                            color: 'interactive-normal',
                            children: n ? ex.intl.string(ex.t.JxU0ws) : ex.intl.string(ex.t.xyYt8P)
                        }),
                        i
                            ? (0, r.jsx)(p.u04, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 20
                              })
                            : (0, r.jsx)(p.CJ0, {
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
