(n.r(t), n.d(t, { default: () => ev }), n(35282), n(388685), n(781311));
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
    _ = n(933557),
    C = n(243778),
    y = n(71619),
    O = n(898188),
    w = n(41776),
    N = n(256413),
    T = n(292853),
    S = n(982168),
    P = n(216572),
    I = n(543015),
    E = n(359110),
    R = n(897473),
    M = n(344185),
    Z = n(235449),
    k = n(665906),
    A = n(488131),
    L = n(433355),
    F = n(592125),
    D = n(703558),
    z = n(607744),
    B = n(944486),
    H = n(117530),
    U = n(451478),
    G = n(459273),
    V = n(961675),
    q = n(883429),
    W = n(238349),
    X = n(109434),
    K = n(456269),
    J = n(90372),
    Y = n(985518),
    Q = n(228392),
    $ = n(355589),
    ee = n(542581),
    et = n(639184),
    en = n(404616),
    er = n(470623),
    ei = n(749913),
    ea = n(219664),
    el = n(895932),
    es = n(479099),
    eo = n(510060),
    ec = n(276357),
    ed = n(81490),
    eu = n(482062),
    em = n(260503),
    eh = n(981631),
    eg = n(124368),
    ef = n(388032),
    ex = n(683999);
function ep(e) {
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
function eb(e, t) {
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
function ej(e, t) {
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
function ev(e) {
    let { channel: t, guild: n, sidebarState: i } = e;
    return (0, r.jsx)(
        er.oL,
        {
            channel: t,
            children: (0, r.jsx)(eS, {
                channel: t,
                guild: n,
                sidebarState: i
            })
        },
        t.id
    );
}
let e_ = new eo.Me({
    minWidth: 320,
    maxWidth: 450,
    gap: 16
});
function eC(e) {
    return 'forum-grid-header-section-'.concat(e);
}
let ey = (e, t, n) => (0 === e ? 0 : (0, eo.KW)(n));
function eO(e) {
    let { itemRole: t, coords: n, section: i } = e;
    return (0, r.jsx)(
        'div',
        {
            className: l()(ex.card, ex.archivedDividerRow, ex.columnsSpan),
            style: n,
            'data-item-role': t,
            children: (0, r.jsx)('div', {
                className: ex.emptyMainCard,
                children: (0, r.jsx)(p.X6q, {
                    variant: 'eyebrow',
                    className: ex.archivedDivider,
                    id: eC(i),
                    children: ef.intl.string(ef.t['3+LO19'])
                })
            })
        },
        'section-divider'
    );
}
function ew(e) {
    let { section: t, coords: n, key: i, isShowingSearchResult: a, hasActiveThreads: l } = e;
    return () =>
        2 === t && !a && l
            ? (0, r.jsx)(
                  eO,
                  {
                      section: t,
                      coords: null == n ? void 0 : eb(ep({}, n), { position: 'absolute' }),
                      itemRole: 'section'
                  },
                  i
              )
            : null;
}
function eN(e, t) {
    return 'card-'.concat(e, '-').concat(t);
}
function eT(e) {
    if ('string' == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function eS(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: a,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: u
        } = (0, er.xH)((e) => {
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
            loadMore: _,
            activeThreadsLoading: C,
            archivedThreadsLoading: y,
            loading: O,
            isSearchLoading: P,
            layoutType: k
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: r, tagSetting: i } = (0, X.H)(e.id),
                a = (0, K.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: i,
                    shouldAutomaticallyAck: !0
                }),
                l = (0, g.e7)([M.Z, w.Z], () => {
                    let t = M.Z.hasLoaded(e.guild_id),
                        n = w.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: s, canLoadMore: o, loadMore: c, loading: d } = (0, Z.qQ)(e, t, n, i),
                { searchResults: u, isSearchLoading: m } = (0, K.XZ)({ channelId: e.id });
            return (
                (0, K.ES)(e, t, n, i),
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
        z = m.length > 0,
        H = z || f.length > 0,
        U = (0, N.Z)(t),
        { tagFilter: G, tagSetting: W } = (0, X.H)(t.id);
    (0, K.ku)(t, G, W, u);
    let ee = (0, K.jR)(t),
        et = (0, K.eZ)(t),
        ei = i.useRef(null),
        { observePostVisibilityAnalytics: el } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: r } = e;
            J.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n
            });
            let a = i.useRef(null),
                l = i.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let r = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, Y.rj)(e, t, r) : (0, Y.Ct)(e, t, r);
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
                            if (null == e) return void (0, Y.Ct)(n, t, Date.now());
                            null == (r = a.current) || r.observe(e);
                        },
                        [n]
                    )
                }
            );
        })({
            scrollerRef: ei,
            channelId: t.id,
            guildId: t.guild_id
        }),
        es = k === h.X.GRID,
        { searchQuery: ec } = (0, K.XZ)({ channelId: t.id }),
        ev = null != x && null != ec && ec.length > 0,
        eO = i.useRef(null),
        { containerRef: eS, containerWidth: eR } = (0, ed.Z)();
    (i.useEffect(
        () => () => {
            null != t.id && q.Z.clearForumSearch(t.id);
        },
        [t.id]
    ),
        i.useEffect(() => {
            if (null == eO.current && null != t.id) {
                let e = L.ZP.getSidebarState(t.id);
                null != e && e.type === R.tI.VIEW_THREAD && (eO.current = e.channelId);
            }
        }, [t.id]));
    let { columns: eZ } = i.useMemo(() => (es ? e_.getRenderOptions(eR) : eo.eU), [es, eR]),
        ek = i.useMemo(() => (O ? Math.round((window.innerHeight - 200) / 118) : 0), [O]),
        eA = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, eo.KW)(e_.getWidth(eR))) * eZ;
            return C ? e : 0;
        }, [eR, eZ, C]),
        eL = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, eo.KW)(e_.getWidth(eR))) * eZ;
            return y ? e : 0;
        }, [eR, eZ, y]),
        eF = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, eo.KW)(e_.getWidth(eR))) * eZ;
            return P && ev ? e : 0;
        }, [eR, eZ, P, ev]),
        eD = i.useMemo(() => {
            if (es)
                if (!ee && ev) return [1, 0];
                else if (!et) return [1, m.length + eA, 0];
                else if (ev) return [1, x.length + eF, 0];
                else return [1, m.length + eA, f.length + eL];
            return !ee && ev ? [1, 1] : et ? (ev ? [1, x.length, 0, ek] : [1, m.length, f.length, ek]) : [1, m.length, 1];
        }, [es, ev, m.length, f.length, ee, et, ek, x, eA, eL, eF]),
        ez = i.useMemo(() => (!ee && ev ? [[], []] : et ? (ev ? [[], x, [], []] : [[], m, f, []]) : [[], m, []]), [ev, ee, et, x, m, f]),
        eB = i.useCallback(
            (e, n) => {
                ((0, Q.B5)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: {
                        page: eh.ZY5.GUILD_CHANNEL,
                        section: eh.jXE.FORUM_CHANNEL_POST
                    }
                }),
                    n ? (0, E.ad)(e, { source: eg.on.BROWSER }) : ((eO.current = e.id), (0, A.ok)(e)));
            },
            [t.guild_id, t.id, eO]
        ),
        [eH, eU] = i.useState(a + s - 24),
        eG = i.useCallback(
            (e, n, i) =>
                0 === e
                    ? (0, r.jsx)(
                          eM,
                          {
                              channel: t,
                              isEmpty: !z,
                              isSearchLoading: P,
                              numResults: null == x ? void 0 : x.length,
                              coords: n,
                              onHeightChange: eU,
                              children:
                                  !O &&
                                  (0, r.jsx)(
                                      $.Z,
                                      {
                                          channel: t,
                                          hasAnyThread: H,
                                          hasActiveThreads: z
                                      },
                                      t.id
                                  )
                          },
                          'forum-channel-header'
                      )
                    : 2 !== e || et
                      ? 1 === e && ev && !ee
                          ? (0, r.jsx)(
                                eI,
                                {
                                    channel: t,
                                    coords: n
                                },
                                'archive-or-search-result'
                            )
                          : i()
                      : (0, r.jsx)(
                            eP,
                            {
                                channel: t,
                                coords: n
                            },
                            'archived-missing-reading-history-perm'
                        ),
            [ev, et, x, ee, t, z, P, O, H]
        ),
        eV = (0, g.e7)([V.Z], () => V.Z.hasHidden(t.id)),
        eq = {
            editorHeight: a,
            isGridLayout: es
        },
        eW = i.useRef(eq);
    (i.useEffect(() => {
        eW.current = eq;
    }),
        i.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: r } = eW.current,
                i = r ? e$ : ei,
                a = null == (e = i.current) ? void 0 : e.getScrollerState();
            null != a && !eV && a.scrollTop > n && (null == (t = i.current) || t.scrollTo({ to: 0 }));
        }, [eV]));
    let {
            updateListScrollerRef: eX,
            renderListSection: eK,
            renderListItem: eJ,
            getListSectionHeight: eY,
            getListItemHeight: eQ
        } = (function (e) {
            let { listRef: t, hasActiveThreads: n, threadIdsBySection: a, listViewCardHeights: s, editorHeight: o, editorAdditionRowHeight: c, renderSectionOrItem: d, goToThread: u, observePostVisibilityAnalytics: m, isShowingSearchResult: h } = e,
                f = (0, g.e7)([B.Z], () => B.Z.getChannelId()),
                x = i.useCallback(
                    (e) => (n) => {
                        var r;
                        ((t.current = n), (e.current = null != (r = null == n ? void 0 : n.getScrollerNode()) ? r : null));
                    },
                    [t]
                ),
                b = i.useCallback(
                    (e) =>
                        ew({
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
                                              className: l()(ex.loadingCard, ex['loadingCard-'.concat(e.row % 3)])
                                          },
                                          'loading-'.concat(e.row)
                                      );
                            let t = a[e.section][e.row],
                                n = null != f && (0, S.UD)(f) ? I.ZP : en.ZP;
                            return (0, r.jsx)(
                                'li',
                                {
                                    className: ex.card,
                                    'data-item-role': 'item',
                                    children: (0, r.jsx)(p.y5t, {
                                        children: (0, r.jsx)(n, {
                                            className: ex.mainCard,
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
            listRef: ei,
            hasActiveThreads: z,
            threadIdsBySection: ez,
            listViewCardHeights: o,
            editorHeight: a,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eG,
            goToThread: eB,
            observePostVisibilityAnalytics: el,
            isShowingSearchResult: ev
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
                            (h.current = eT(n)));
                    },
                    [t, h]
                ),
                b = i.useCallback(
                    (e) => {
                        let t = eT(e);
                        if (null == t) return;
                        let n = F.Z.getChannel(t);
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
                            return null == r ? eN(e, t) : eN(e, r);
                        }
                    },
                    [n]
                ),
                v = i.useCallback(
                    (e, t, n) =>
                        s(
                            e,
                            t,
                            ew({
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
                                  'aria-labelledby': '#'.concat(eC(e))
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
                                  ea.Z,
                                  {
                                      id: ''.concat(s),
                                      threadId: c,
                                      className: l()(ex.card, ex.mainCard),
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
                                        style: ep({}, i),
                                        'data-item-role': 'item',
                                        className: l()(ex.loadingCard, ex['loadingCard-'.concat(t % 3)])
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
            renderSectionOrItem: eG,
            hasActiveThreads: z,
            isShowingSearchResult: ev,
            canSearchForumPosts: ee,
            canViewArchivedPosts: et,
            observePostVisibilityAnalytics: el,
            focusedThreadId: eO,
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
                    null == L.ZP.getSidebarState(s) && (l.current = null);
                    let n = a.findIndex((t) => t.find((t) => t === e)),
                        r = t.current.getCoordsMap(),
                        i = r['__section__'.concat(n)],
                        o = r[eN(n, e)];
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
        containerWidth: eR,
        isGridLayout: es,
        threadIdsBySection: ez,
        parentId: t.id,
        focusedThreadId: eO
    });
    let e5 = i.useCallback(() => {
            var e, n;
            if (ev) return;
            let r = es ? (null == (e = e$.current) ? void 0 : e.getScrollerState()) : null == (n = ei.current) ? void 0 : n.getScrollerState();
            if (null == r) return;
            (0, Q.ab)({
                guildId: t.guild_id,
                channelId: t.id
            });
            let i = r.scrollTop + r.offsetHeight;
            r.scrollHeight - i < (es ? Math.max(200, (0, eo.KW)(eR)) : 200) && _();
        }, [ev, es, t.guild_id, t.id, eR, _]),
        e2 = (0, g.e7)([v.Z], () => v.Z.keyboardModeEnabled),
        e7 = (0, eu.ZP)({
            id: 'forum-grid-view',
            isEnabled: es && e2,
            setFocus: e4
        }),
        te = (0, em.Z)({
            listRef: ei,
            padding: 96,
            isEnabled: !es && e2,
            channel: t
        }),
        tt = e7.containerProps,
        { ref: tn } = tt,
        tr = ej(tt, ['ref']),
        ti = L.ZP.getSidebarState(t.id),
        ta = null != ti && (0, L.D5)(ti),
        tl = (0, g.e7)([L.ZP], () => L.ZP.getSection(t.id)) === eh.ULH.MEMBERS;
    return (0, r.jsx)('div', {
        className: ex.container,
        ref: eS,
        'data-member-list-open': tl,
        children: (0, r.jsx)(p.Wdt, {
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        u &&
                            (0, r.jsx)(b.Z, {
                                channel: t,
                                draftType: D.d.FirstThreadMessage,
                                className: ex.uploadArea,
                                style: { right: ta && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0 }
                            }),
                        (0, r.jsx)(eE, { channel: t }),
                        (0, r.jsx)(p.nn4, { children: (0, r.jsx)(p.H, { children: ef.intl.string(ef.t.B2panJ) }) }),
                        U
                            ? (0, r.jsx)('div', {
                                  className: ex.optInNotice,
                                  children: (0, r.jsx)(T.Z, { channel: t })
                              })
                            : null,
                        es
                            ? (0, r.jsx)(eu.KT, {
                                  navigator: e7,
                                  children: (0, r.jsx)(
                                      p.GMG,
                                      ep(
                                          {
                                              ref: (e) => {
                                                  var t;
                                                  ((tn.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), e0(e));
                                              },
                                              itemGutter: 16,
                                              padding: 24,
                                              className: ex.grid,
                                              columns: eZ,
                                              sections: eD,
                                              getItemKey: e3,
                                              getSectionHeight: e8,
                                              getItemHeight: ey,
                                              renderSection: e6,
                                              renderItem: e1,
                                              getSectionProps: e9,
                                              onScroll: j ? e5 : void 0,
                                              chunkSize: 350
                                          },
                                          tr,
                                          e
                                      ),
                                      k
                                  )
                              })
                            : (0, r.jsx)(d.bG, {
                                  navigator: te,
                                  children: (0, r.jsx)(d.SJ, {
                                      children: (t) => {
                                          var { ref: n } = t,
                                              i = ej(t, ['ref']);
                                          return (0, r.jsx)(
                                              p._2F,
                                              eb(
                                                  ep(
                                                      {
                                                          ref: eX(n),
                                                          className: ex.list,
                                                          sections: eD,
                                                          sectionHeight: eY,
                                                          rowHeight: eQ,
                                                          renderRow: eJ,
                                                          renderSection: eK,
                                                          chunkSize: 150,
                                                          onScroll: j ? e5 : void 0,
                                                          paddingBottom: 24
                                                      },
                                                      i,
                                                      e
                                                  ),
                                                  { innerRole: 'list' }
                                              ),
                                              k
                                          );
                                      }
                                  })
                              })
                    ]
                })
        })
    });
}
function eP(e) {
    let { channel: t, coords: n } = e,
        i = (0, _.ZP)(t);
    return (0, r.jsx)('div', {
        className: l()(ex.missingReadHistoryPermission, ex.columnsSpan),
        style: n,
        children: (0, r.jsx)(p.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ef.intl.format(ef.t.TycmzM, { channelName: i })
        })
    });
}
function eI(e) {
    let { channel: t, coords: n } = e,
        i = (0, _.ZP)(t);
    return (0, r.jsx)('div', {
        className: l()(ex.missingReadHistoryPermission, ex.columnsSpan),
        style: n,
        children: (0, r.jsx)(p.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ef.intl.format(ef.t.OWZJdX, { channelName: i })
        })
    });
}
function eE(e) {
    let { channel: t } = e,
        n = i.useCallback(() => {
            q.Z.resort(t.id);
        }, [t]),
        a = (0, g.e7)([W.Z], () => W.Z.getNewThreadCount());
    return 0 === a
        ? null
        : (0, r.jsx)(p.P3F, {
              className: ex.newPostsButton,
              onClick: n,
              children: (0, r.jsx)(p.Text, {
                  color: 'text-brand',
                  variant: 'text-md/medium',
                  children: ef.intl.format(ef.t.ue1qfH, { count: a })
              })
          });
}
function eR() {
    return Promise.resolve();
}
function eM(e) {
    var t, n, a;
    let { channel: s, isEmpty: b, isSearchLoading: _, numResults: w, children: N, coords: T, onHeightChange: I } = e,
        {
            name: E,
            formOpen: R,
            titleFocused: M,
            hasClickedForm: Z,
            textAreaState: A,
            onboardingExpanded: L,
            setEditorAdditionRowHeight: F
        } = (0, er.xH)((e) => {
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
        { tagFilter: B, layoutType: V } = (0, X.H)(s.id),
        W = (0, er.AF)(),
        J = (0, X.v)(),
        Y = (0, g.e7)([z.Z], () => z.Z.canChatInGuild(s.guild_id)),
        $ = (0, K.r_)(s),
        en = (0, k.cD)(s),
        [ea, el] = i.useState(en),
        [, eo] = (0, y.AB)(null != (a = s.getGuildId()) ? a : void 0),
        ed = (0, P.HL)(s),
        eu = Y && (en || (ea && eo)) && !ed,
        em = s.isMediaChannel();
    i.useEffect(() => {
        en && el(!0);
    }, [en]);
    let { ref: eg, height: ev } = (0, j.ZP)();
    i.useEffect(() => {
        null != ev && I(ev);
    }, [I, ev]);
    let e_ = i.useCallback(() => {
        o()(() => {
            null != eg.current && W.getState().setEditorHeight(eg.current.offsetHeight);
        });
    }, [eg, W]);
    (i.useLayoutEffect(e_, [e_, b, eu, L]),
        (0, G.yp)({
            event: eh.CkL.REMEASURE_TARGET,
            handler: e_
        }));
    let eC = (0, g.e7)([H.Z], () => H.Z.getUploads(s.id, D.d.FirstThreadMessage)),
        ey = (0, K.ql)(s),
        eO = i.useRef(null),
        ew = i.useRef(null),
        [eN, eT] = i.useState(0),
        { width: eS } = (0, g.e7)([U.Z], () => U.Z.windowSize()),
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
    }, [s.availableTags, eS, eP, B]);
    let eM = E.length > 0 && !R && (_ || null != w),
        ek = !__OVERLAY__ && !Z && !R && M && (0 === A.textValue.trim().length || A.textValue.trim() === ey) && 0 === eC.length && !ed;
    i.useLayoutEffect(() => {
        let e = eM || ek;
        if (!e) return F(0);
        null != eI.current && F(e ? eI.current.clientHeight : 0);
    }, [F, eM, ek, eI]);
    let eA = (e) => {
            ((0, Q.e7)({
                guildId: s.guild_id,
                channelId: s.id,
                tagId: e,
                filterTagIds: Array.from(B),
                added: !B.has(e),
                location: {
                    page: eh.ZY5.GUILD_CHANNEL,
                    section: eh.jXE.FORUM_CHANNEL_HEADER,
                    object: eh.qAy.CHANNEL_TAG
                }
            }),
                J.getState().toggleTagFilter(s.id, e));
        },
        eL = (0, u.ZP)({
            id: ''.concat(s.id, '-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eR,
            scrollToEnd: eR,
            orientation: m.hy.HORIZONTAL
        }),
        eF = (0, d.JA)('forum-channel-header'),
        { role: eD, onFocus: ez } = eF,
        eB = ej(eF, ['role', 'onFocus']),
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
        eG = i.useCallback(
            (e) => {
                if ((ez(), e.target === eg.current && !eU.current)) {
                    var t;
                    null == (t = eH.current) || t.focus();
                }
            },
            [ez, eg, eU]
        ),
        eV = i.useMemo(() => (ed ? (0, S.iq)(s.availableTags) : s.availableTags), [s.availableTags, ed]);
    return (0, r.jsx)(
        'div',
        eb(
            ep(
                {
                    className: l()(ex.card, ex.headerRow, ex.columnsSpan),
                    ref: eg,
                    onFocus: eG
                },
                eB
            ),
            {
                style: eb(ep({}, T), {
                    position: V === h.X.GRID ? 'absolute' : 'static',
                    height: 'auto'
                }),
                children: (0, r.jsxs)(G.I3, {
                    children: [
                        null != s.guild_id
                            ? (0, r.jsx)(O.Z, {
                                  className: l()(ex.newMemberBanner, { [ex.gridViewBanner]: V === h.X.GRID }),
                                  guildId: s.guild_id,
                                  channel: s
                              })
                            : null,
                        (0, r.jsx)('div', {
                            className: l()(ex.mainCard, ex.header, { [ex.headerWithMatchingPosts]: eM || ek }),
                            children: (0, r.jsx)(ei.Z, {
                                parentChannel: s,
                                onChange: e_,
                                isSearchLoading: _,
                                numResults: w,
                                canCreatePost: eu,
                                inputRef: eH
                            })
                        }),
                        (eM || ek) &&
                            (0, r.jsxs)('div', {
                                className: ex.matchingPostsRow,
                                ref: eI,
                                children: [
                                    eM &&
                                        (0, r.jsxs)('div', {
                                            className: ex.matchingPosts,
                                            children: [
                                                (0, r.jsx)(p.X6q, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-default',
                                                    children: _
                                                        ? ef.intl.string(ef.t['/9i3qq'])
                                                        : 0 === w
                                                          ? ef.intl.string(ef.t.DbgHxs)
                                                          : ef.intl.formatToPlainString(ef.t['tBz/8f'], {
                                                                numPosts: w,
                                                                query: E
                                                            })
                                                }),
                                                !_ &&
                                                    (0, r.jsx)(p.P3F, {
                                                        onClick: () => {
                                                            ((0, Q.zI)({
                                                                guildId: s.guild_id,
                                                                channelId: s.id
                                                            }),
                                                                q.Z.clearForumSearch(s.id),
                                                                W.getState().setName(''));
                                                        },
                                                        children: (0, r.jsx)(p.Text, {
                                                            variant: 'text-xs/semibold',
                                                            color: 'text-brand',
                                                            className: ex.clear,
                                                            children: ef.intl.string(ef.t.VkKicX)
                                                        })
                                                    })
                                            ]
                                        }),
                                    (0, r.jsx)('div', { className: ex.tagsSpacer }),
                                    ek
                                        ? eu
                                            ? (0, r.jsxs)('div', {
                                                  className: ex.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(p.M2$, {
                                                          shortcut: 'SHIFT',
                                                          className: ex.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-default',
                                                          children: '+'
                                                      }),
                                                      (0, r.jsx)(p.M2$, {
                                                          shortcut: 'ENTER',
                                                          className: ex.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-default',
                                                          children: ef.intl.string(ef.t.ZvJ0ys)
                                                      })
                                                  ]
                                              })
                                            : (0, r.jsxs)('div', {
                                                  className: ex.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(p.P4T, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          height: 14,
                                                          width: 14,
                                                          className: ex.warnIcon
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-default',
                                                          children: ef.intl.string(ef.t.iyzwnJ)
                                                      })
                                                  ]
                                              })
                                        : null
                                ]
                            }),
                        (0, r.jsx)(ee.Z, {
                            channel: s,
                            onChange: e_
                        }),
                        (0, r.jsxs)('div', {
                            className: ex.tagsContainer,
                            ref: eO,
                            children: [
                                (0, r.jsx)(eZ, { channel: s }),
                                eV.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: ex.divider }),
                                              (0, r.jsx)('div', {
                                                  className: ex.tagList,
                                                  ref: ew,
                                                  children: (0, r.jsx)(d.bG, {
                                                      navigator: eL,
                                                      children: (0, r.jsx)(d.SJ, {
                                                          children: (e) => {
                                                              var { ref: t } = e,
                                                                  n = ej(e, ['ref']);
                                                              return (0, r.jsx)(
                                                                  'div',
                                                                  eb(
                                                                      ep(
                                                                          {
                                                                              className: ex.tagListInner,
                                                                              ref: t
                                                                          },
                                                                          n
                                                                      ),
                                                                      {
                                                                          children: eV.map((e) =>
                                                                              (0, r.jsx)(
                                                                                  es.Z,
                                                                                  {
                                                                                      tag: e,
                                                                                      onClick: () => eA(e.id),
                                                                                      selected: B.has(e.id)
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
                                                      return (0, r.jsx)(ec.Z, {
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
                                                          eb(ep({}, e), {
                                                              buttonRef: eE,
                                                              size: x.zx.Sizes.MIN,
                                                              color: x.zx.Colors.CUSTOM,
                                                              className: l()(ex.tagsButton, { [ex.tagsButtonWithCount]: B.size > 0 }),
                                                              style: { left: eN },
                                                              innerClassName: ex.tagsButtonInner,
                                                              'aria-label': B.size > 0 ? ef.intl.string(ef.t.IkpM1d) : ef.intl.string(ef.t['9vKK/P']),
                                                              children: [
                                                                  B.size > 0
                                                                      ? (0, r.jsx)('div', {
                                                                            className: ex.countContainer,
                                                                            children: (0, r.jsx)(p.Text, {
                                                                                className: ex.countText,
                                                                                color: 'none',
                                                                                variant: 'text-xs/medium',
                                                                                children: B.size
                                                                            })
                                                                        })
                                                                      : ef.intl.string(ef.t.fZ8hzs),
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
                                                  size: x.zx.Sizes.MIN,
                                                  color: x.zx.Colors.CUSTOM,
                                                  className: l()(ex.tagsButton, ex.tagsButtonPlaceholder),
                                                  innerClassName: ex.tagsButtonInner,
                                                  'aria-label': ef.intl.string(ef.t.IkpM1d),
                                                  children: [
                                                      B.size > 0
                                                          ? (0, r.jsx)('div', {
                                                                className: ex.countContainer,
                                                                children: (0, r.jsx)(p.Text, {
                                                                    className: ex.countText,
                                                                    color: 'none',
                                                                    variant: 'text-xs/medium',
                                                                    children: B.size
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
                        N,
                        $ &&
                            !em &&
                            !ed &&
                            (0, r.jsx)(C.ZP, {
                                contentTypes: [f.z.FORUM_CHANNEL_HELPER_CARD],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === f.z.FORUM_CHANNEL_HELPER_CARD ? (0, r.jsx)(et.Z, { onDismiss: n }) : null;
                                }
                            })
                    ]
                })
            }
        ),
        'create-form'
    );
}
function eZ(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        a = i.useRef(null);
    return (0, r.jsx)(p.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(el.Z, {
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
                eb(ep({}, e), {
                    buttonRef: a,
                    size: x.zx.Sizes.MIN,
                    color: x.zx.Colors.CUSTOM,
                    className: ex.sortDropdown,
                    innerClassName: ex.sortDropdownInner,
                    'aria-label': n ? ef.intl.string(ef.t.JxU0ws) : ef.intl.string(ef.t.xyYt8P),
                    children: [
                        (0, r.jsx)(p.uVW, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        (0, r.jsx)(p.Text, {
                            className: ex.sortDropdownText,
                            variant: 'text-sm/medium',
                            color: 'interactive-normal',
                            children: n ? ef.intl.string(ef.t.JxU0ws) : ef.intl.string(ef.t.xyYt8P)
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
