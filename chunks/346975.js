n.r(t), n.d(t, { default: () => ef }), n(35282), n(388685), n(781311);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(196434),
    o = n.n(s),
    c = n(359959),
    d = n(91192),
    u = n(924826),
    m = n(536895),
    h = n(313361),
    g = n(442837),
    f = n(704215),
    p = n(481060),
    x = n(561472),
    b = n(393238),
    j = n(607070),
    v = n(933557),
    C = n(243778),
    _ = n(71619),
    y = n(898188),
    O = n(41776),
    w = n(256413),
    S = n(292853),
    P = n(216572),
    N = n(359110),
    T = n(344185),
    I = n(235449),
    E = n(665906),
    k = n(488131),
    R = n(433355),
    Z = n(592125),
    M = n(703558),
    A = n(607744),
    L = n(117530),
    F = n(451478),
    D = n(459273),
    z = n(961675),
    B = n(883429),
    H = n(238349),
    U = n(109434),
    V = n(456269),
    G = n(90372),
    q = n(985518),
    X = n(228392),
    W = n(355589),
    K = n(542581),
    J = n(639184),
    Y = n(404616),
    Q = n(470623),
    $ = n(749913),
    ee = n(219664),
    et = n(895932),
    en = n(479099),
    er = n(510060),
    ei = n(276357),
    el = n(81490),
    ea = n(482062),
    es = n(260503),
    eo = n(981631),
    ec = n(124368),
    ed = n(388032),
    eu = n(683999);
function em(e) {
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
function eh(e, t) {
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
function eg(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ef(e) {
    let { channel: t, guild: n, sidebarState: i } = e;
    return (0, r.jsx)(
        Q.oL,
        {
            channel: t,
            children: (0, r.jsx)(ey, {
                channel: t,
                guild: n,
                sidebarState: i
            })
        },
        t.id
    );
}
let ep = new er.Me({
    minWidth: 320,
    maxWidth: 450,
    gap: 16
});
function ex(e) {
    return 'forum-grid-header-section-'.concat(e);
}
let eb = (e, t, n) => (0 === e ? 0 : (0, er.KW)(n));
function ej(e) {
    let { itemRole: t, coords: n, section: i } = e;
    return (0, r.jsx)(
        'div',
        {
            className: a()(eu.card, eu.archivedDividerRow, eu.columnsSpan),
            style: n,
            'data-item-role': t,
            children: (0, r.jsx)('div', {
                className: eu.emptyMainCard,
                children: (0, r.jsx)(p.X6q, {
                    variant: 'eyebrow',
                    className: eu.archivedDivider,
                    id: ex(i),
                    children: ed.intl.string(ed.t['3+LO19'])
                })
            })
        },
        'section-divider'
    );
}
function ev(e) {
    let { section: t, coords: n, key: i, isShowingSearchResult: l, hasActiveThreads: a } = e;
    return () =>
        2 === t && !l && a
            ? (0, r.jsx)(
                  ej,
                  {
                      section: t,
                      coords: null == n ? void 0 : eh(em({}, n), { position: 'absolute' }),
                      itemRole: 'section'
                  },
                  i
              )
            : null;
}
function eC(e, t) {
    return 'card-'.concat(e, '-').concat(t);
}
function e_(e) {
    if ('string' == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function ey(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: l,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: u
        } = (0, Q.xH)((e) => {
            let { editorHeight: t, editorAdditionRowHeight: n, listViewCardHeights: r, formOpen: i, cardHeightVersion: l } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: r,
                formOpen: i,
                cardHeightVersion: l
            };
        }, c.X),
        {
            activeThreadIds: m,
            archivedThreadIds: f,
            searchResults: b,
            canLoadMore: v,
            loadMore: C,
            activeThreadsLoading: _,
            archivedThreadsLoading: y,
            loading: P,
            isSearchLoading: E,
            layoutType: A
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: r, tagSetting: i } = (0, U.H)(e.id),
                l = (0, V.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: i,
                    shouldAutomaticallyAck: !0
                }),
                a = (0, g.e7)([T.Z, O.Z], () => {
                    let t = T.Z.hasLoaded(e.guild_id),
                        n = O.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: s, canLoadMore: o, loadMore: c, loading: d } = (0, I.qQ)(e, t, n, i),
                { searchResults: u, isSearchLoading: m } = (0, V.XZ)({ channelId: e.id });
            return (
                (0, V.ES)(e, t, n, i),
                {
                    activeThreadIds: l,
                    archivedThreadIds: s,
                    searchResults: u,
                    canLoadMore: o,
                    loadMore: c,
                    loading: a || d || m,
                    archivedThreadsLoading: d,
                    activeThreadsLoading: a,
                    isSearchLoading: m,
                    layoutType: r
                }
            );
        })(t),
        L = m.length > 0,
        F = L || f.length > 0,
        D = (0, w.Z)(t),
        { tagFilter: H, tagSetting: K } = (0, U.H)(t.id);
    (0, V.ku)(t, H, K, u);
    let J = (0, V.jR)(t),
        $ = (0, V.eZ)(t),
        et = i.useRef(null),
        { observePostVisibilityAnalytics: en } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: r } = e;
            G.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n
            });
            let l = i.useRef(null),
                a = i.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let r = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, q.rj)(e, t, r) : (0, q.Ct)(e, t, r);
                    }
                }, []);
            return (
                i.useEffect(() => {
                    var e;
                    let t = null == (e = r.current) ? void 0 : e.getScrollerNode();
                    if (null != t)
                        return (
                            (l.current = new IntersectionObserver((e) => a(n, e), {
                                root: t,
                                rootMargin: '0px 100000px 0px 100000px',
                                threshold: 0.5
                            })),
                            () => {
                                var e;
                                null == (e = l.current) || e.disconnect(), (l.current = null);
                            }
                        );
                }, [n, a, r]),
                {
                    observePostVisibilityAnalytics: i.useCallback(
                        (e, t) => {
                            var r;
                            if (null == e) return void (0, q.Ct)(n, t, Date.now());
                            null == (r = l.current) || r.observe(e);
                        },
                        [n]
                    )
                }
            );
        })({
            scrollerRef: et,
            channelId: t.id,
            guildId: t.guild_id
        }),
        ei = A === h.X.GRID,
        ef = null != b,
        ej = i.useRef(null),
        { containerRef: ey, containerWidth: eP } = (0, el.Z)();
    i.useEffect(
        () => () => {
            null != t.id && B.Z.clearForumSearch(t.id);
        },
        [t.id]
    );
    let { columns: eT } = i.useMemo(() => (ei ? ep.getRenderOptions(eP) : er.eU), [ei, eP]),
        eI = i.useMemo(() => (P ? Math.round((window.innerHeight - 200) / 118) : 0), [P]),
        eE = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, er.KW)(ep.getWidth(eP))) * eT;
            return _ ? e : 0;
        }, [eP, eT, _]),
        ek = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, er.KW)(ep.getWidth(eP))) * eT;
            return y ? e : 0;
        }, [eP, eT, y]),
        eR = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, er.KW)(ep.getWidth(eP))) * eT;
            return E && ef ? e : 0;
        }, [eP, eT, E, ef]),
        eZ = i.useMemo(() => {
            if (ei)
                if (!J && ef) return [1, 0];
                else if (!$) return [1, m.length + eE, 0];
                else if (ef) return [1, b.length + eR, 0];
                else return [1, m.length + eE, f.length + ek];
            return !J && ef ? [1, 1] : $ ? (ef ? [1, b.length, 0, eI] : [1, m.length, f.length, eI]) : [1, m.length, 1];
        }, [ei, ef, m.length, f.length, J, $, eI, b, eE, ek, eR]),
        eM = i.useMemo(() => (!J && ef ? [[], []] : $ ? (ef ? [[], b, [], []] : [[], m, f, []]) : [[], m, []]), [ef, J, $, b, m, f]),
        eA = i.useCallback(
            (e, n) => {
                (0, X.B5)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: {
                        page: eo.ZY5.GUILD_CHANNEL,
                        section: eo.jXE.FORUM_CHANNEL_POST
                    }
                }),
                    n ? (0, N.ad)(e, { source: ec.on.BROWSER }) : ((ej.current = e.id), (0, k.ok)(e));
            },
            [t.guild_id, t.id, ej]
        ),
        [eL, eF] = i.useState(l + s - 24),
        eD = i.useCallback(
            (e, n, i) =>
                0 === e
                    ? (0, r.jsx)(
                          eN,
                          {
                              channel: t,
                              isEmpty: !L,
                              isSearchLoading: E,
                              numResults: null == b ? void 0 : b.length,
                              coords: n,
                              onHeightChange: eF,
                              children:
                                  !P &&
                                  (0, r.jsx)(
                                      W.Z,
                                      {
                                          channel: t,
                                          hasAnyThread: F
                                      },
                                      t.id
                                  )
                          },
                          'forum-channel-header'
                      )
                    : 2 !== e || $
                      ? 1 === e && ef && !J
                          ? (0, r.jsx)(
                                ew,
                                {
                                    channel: t,
                                    coords: n
                                },
                                'archive-or-search-result'
                            )
                          : i()
                      : (0, r.jsx)(
                            eO,
                            {
                                channel: t,
                                coords: n
                            },
                            'archived-missing-reading-history-perm'
                        ),
            [ef, $, b, J, t, L, E, P, F]
        ),
        ez = (0, g.e7)([z.Z], () => z.Z.hasHidden(t.id)),
        eB = {
            editorHeight: l,
            isGridLayout: ei
        },
        eH = i.useRef(eB);
    i.useEffect(() => {
        eH.current = eB;
    }),
        i.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: r } = eH.current,
                i = r ? eW : et,
                l = null == (e = i.current) ? void 0 : e.getScrollerState();
            null != l && !ez && l.scrollTop > n && (null == (t = i.current) || t.scrollTo({ to: 0 }));
        }, [ez]);
    let {
            updateListScrollerRef: eU,
            renderListSection: eV,
            renderListItem: eG,
            getListSectionHeight: eq,
            getListItemHeight: eX
        } = (function (e) {
            let { listRef: t, hasActiveThreads: n, threadIdsBySection: l, listViewCardHeights: s, editorHeight: o, editorAdditionRowHeight: c, renderSectionOrItem: d, goToThread: u, observePostVisibilityAnalytics: m, isShowingSearchResult: h } = e,
                g = i.useCallback(
                    (e) => (n) => {
                        var r;
                        (t.current = n), (e.current = null != (r = null == n ? void 0 : n.getScrollerNode()) ? r : null);
                    },
                    [t]
                ),
                f = i.useCallback(
                    (e) =>
                        ev({
                            section: e.section,
                            isShowingSearchResult: h,
                            hasActiveThreads: n
                        })(),
                    [n, h]
                ),
                x = i.useCallback(
                    (e) =>
                        d(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, r.jsx)(
                                          'div',
                                          {
                                              'data-item-role': 'item',
                                              className: a()(eu.loadingCard, eu['loadingCard-'.concat(e.row % 3)])
                                          },
                                          'loading-'.concat(e.row)
                                      );
                            let t = l[e.section][e.row];
                            return (0, r.jsx)(
                                'li',
                                {
                                    className: eu.card,
                                    'data-item-role': 'item',
                                    children: (0, r.jsx)(p.y5t, {
                                        children: (0, r.jsx)(Y.ZP, {
                                            className: eu.mainCard,
                                            threadId: t,
                                            goToThread: u,
                                            observePostVisibilityAnalytics: m
                                        })
                                    })
                                },
                                ''.concat(e.section, '-').concat(t)
                            );
                        }),
                    [d, l, u, m]
                ),
                b = i.useCallback(
                    (e, t) => {
                        if (0 === e) return o + c;
                        let n = s[l[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [l, s, o, c]
                );
            return {
                updateListScrollerRef: g,
                renderListSection: f,
                renderListItem: x,
                getListSectionHeight: i.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: b
            };
        })({
            listRef: et,
            hasActiveThreads: L,
            threadIdsBySection: eM,
            listViewCardHeights: o,
            editorHeight: l,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eD,
            goToThread: eA,
            observePostVisibilityAnalytics: en,
            isShowingSearchResult: ef
        }),
        eW = i.useRef(null),
        {
            updateMasonryListScrollerRef: eK,
            getItemKey: eJ,
            renderGridSection: eY,
            renderGridItem: eQ,
            getGridSectionHeight: e$,
            getSectionProps: e0,
            handleGridFocus: e3
        } = (function (e) {
            let { masonryListScrollerRef: t, threadIdsBySection: n, goToThread: l, renderSectionOrItem: s, hasActiveThreads: o, isShowingSearchResult: c, canSearchForumPosts: d, canViewArchivedPosts: u, observePostVisibilityAnalytics: m, focusedThreadId: h, headerHeight: g } = e,
                f = i.useRef(null),
                p = i.useCallback(
                    (e) => {
                        (t.current = e), (f.current = null == e ? void 0 : e.getScrollerNode());
                    },
                    [t]
                ),
                x = i.useCallback(
                    (e, n) => {
                        let { current: r } = t;
                        if (null == r) return;
                        let i = document.querySelector(e);
                        if (null == i) return;
                        let l = r.getCoordsMap()[n],
                            a = null != l ? l.height + 20 : 200;
                        r.scrollIntoViewNode({
                            node: i,
                            padding: a,
                            callback() {
                                requestAnimationFrame(() => {
                                    var t;
                                    null == (t = document.querySelector(e)) || t.focus({ preventScroll: !0 });
                                });
                            }
                        }),
                            (h.current = e_(n));
                    },
                    [t, h]
                ),
                b = i.useCallback(
                    (e) => {
                        let t = e_(e);
                        if (null == t) return;
                        let n = Z.Z.getChannel(t);
                        null != n && l(n, !0);
                    },
                    [l]
                ),
                j = i.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return 'section-'.concat(e, '-').concat(t);
                        {
                            let r = n[e][t];
                            return null == r ? eC(e, t) : eC(e, r);
                        }
                    },
                    [n]
                ),
                v = i.useCallback(
                    (e, t, n) =>
                        s(
                            e,
                            t,
                            ev({
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
                                  'aria-labelledby': '#'.concat(ex(e))
                              },
                    []
                );
            return {
                updateMasonryListScrollerRef: p,
                masonryListContainerRef: f,
                focusedThreadId: h,
                handleGridFocus: x,
                handleGridSelect: b,
                getItemKey: j,
                renderGridSection: v,
                renderGridItem: i.useCallback(
                    (e, t, i, s, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, r.jsx)(
                                  ee.Z,
                                  {
                                      id: ''.concat(s),
                                      threadId: c,
                                      className: a()(eu.card, eu.mainCard),
                                      goToThread: l,
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
                                        style: em({}, i),
                                        'data-item-role': 'item',
                                        className: a()(eu.loadingCard, eu['loadingCard-'.concat(t % 3)])
                                    },
                                    s
                                );
                    },
                    [n, l, m]
                ),
                getSectionProps: C,
                getGridSectionHeight: i.useCallback((e) => (0 === e ? g - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0), [g, c, d, o, u])
            };
        })({
            masonryListScrollerRef: eW,
            threadIdsBySection: eM,
            goToThread: eA,
            renderSectionOrItem: eD,
            hasActiveThreads: L,
            isShowingSearchResult: ef,
            canSearchForumPosts: J,
            canViewArchivedPosts: $,
            observePostVisibilityAnalytics: en,
            focusedThreadId: ej,
            headerHeight: eL
        });
    !(function (e) {
        let { masonryListScrollerRef: t, containerWidth: n, isGridLayout: r, threadIdsBySection: l, focusedThreadId: a, parentId: s } = e;
        i.useEffect(() => {
            if (r) {
                let e = setTimeout(() => {
                    if (null == t.current || null == a.current) return;
                    let e = a.current;
                    if ('string' != typeof e) return;
                    if (null == R.ZP.getSidebarState(s)) {
                        a.current = null;
                        return;
                    }
                    let n = l.findIndex((t) => t.find((t) => t === e)),
                        r = t.current.getCoordsMap(),
                        i = r['__section__'.concat(n)],
                        o = r[eC(n, e)];
                    null != i &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: i.top + o.top - 100,
                            end: i.top + o.top + o.height + 50
                        });
                }, 500);
                return () => clearTimeout(e);
            }
        }, [s, n, r, l, a, t]);
    })({
        masonryListScrollerRef: eW,
        containerWidth: eP,
        isGridLayout: ei,
        threadIdsBySection: eM,
        parentId: t.id,
        focusedThreadId: ej
    });
    let e9 = i.useCallback(() => {
            var e, n;
            if (ef) return;
            let r = ei ? (null == (e = eW.current) ? void 0 : e.getScrollerState()) : null == (n = et.current) ? void 0 : n.getScrollerState();
            if (null == r) return;
            (0, X.ab)({
                guildId: t.guild_id,
                channelId: t.id
            });
            let i = r.scrollTop + r.offsetHeight;
            r.scrollHeight - i < (ei ? Math.max(200, (0, er.KW)(eP)) : 200) && C();
        }, [ef, ei, t.guild_id, t.id, eP, C]),
        e1 = (0, g.e7)([j.Z], () => j.Z.keyboardModeEnabled),
        e6 = (0, ea.ZP)({
            id: 'forum-grid-view',
            isEnabled: ei && e1,
            setFocus: e3
        }),
        e8 = (0, es.Z)({
            listRef: et,
            padding: 96,
            isEnabled: !ei && e1,
            channel: t
        }),
        e2 = e6.containerProps,
        { ref: e4 } = e2,
        e5 = eg(e2, ['ref']),
        e7 = R.ZP.getSidebarState(t.id),
        te = null != e7 && (0, R.D5)(e7),
        tt = (0, g.e7)([R.ZP], () => R.ZP.getSection(t.id)) === eo.ULH.MEMBERS;
    return (0, r.jsx)('div', {
        className: eu.container,
        ref: ey,
        'data-member-list-open': tt,
        children: (0, r.jsx)(p.Wdt, {
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        u &&
                            (0, r.jsx)(x.Z, {
                                channel: t,
                                draftType: M.d.FirstThreadMessage,
                                className: eu.uploadArea,
                                style: { right: te && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0 }
                            }),
                        (0, r.jsx)(eS, { channel: t }),
                        (0, r.jsx)(p.nn4, { children: (0, r.jsx)(p.H, { children: ed.intl.string(ed.t.B2panJ) }) }),
                        D
                            ? (0, r.jsx)('div', {
                                  className: eu.optInNotice,
                                  children: (0, r.jsx)(S.Z, { channel: t })
                              })
                            : null,
                        ei
                            ? (0, r.jsx)(ea.KT, {
                                  navigator: e6,
                                  children: (0, r.jsx)(
                                      p.GMG,
                                      em(
                                          {
                                              ref: (e) => {
                                                  var t;
                                                  (e4.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), eK(e);
                                              },
                                              itemGutter: 16,
                                              padding: 24,
                                              className: eu.grid,
                                              columns: eT,
                                              sections: eZ,
                                              getItemKey: eJ,
                                              getSectionHeight: e$,
                                              getItemHeight: eb,
                                              renderSection: eY,
                                              renderItem: eQ,
                                              getSectionProps: e0,
                                              onScroll: v ? e9 : void 0,
                                              chunkSize: 350
                                          },
                                          e5,
                                          e
                                      ),
                                      A
                                  )
                              })
                            : (0, r.jsx)(d.bG, {
                                  navigator: e8,
                                  children: (0, r.jsx)(d.SJ, {
                                      children: (t) => {
                                          var { ref: n } = t,
                                              i = eg(t, ['ref']);
                                          return (0, r.jsx)(
                                              p._2F,
                                              eh(
                                                  em(
                                                      {
                                                          ref: eU(n),
                                                          className: eu.list,
                                                          sections: eZ,
                                                          sectionHeight: eq,
                                                          rowHeight: eX,
                                                          renderRow: eG,
                                                          renderSection: eV,
                                                          chunkSize: 150,
                                                          onScroll: v ? e9 : void 0,
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
function eO(e) {
    let { channel: t, coords: n } = e,
        i = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: a()(eu.missingReadHistoryPermission, eu.columnsSpan),
        style: n,
        children: (0, r.jsx)(p.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ed.intl.format(ed.t.TycmzM, { channelName: i })
        })
    });
}
function ew(e) {
    let { channel: t, coords: n } = e,
        i = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: a()(eu.missingReadHistoryPermission, eu.columnsSpan),
        style: n,
        children: (0, r.jsx)(p.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ed.intl.format(ed.t.OWZJdX, { channelName: i })
        })
    });
}
function eS(e) {
    let { channel: t } = e,
        n = i.useCallback(() => {
            B.Z.resort(t.id);
        }, [t]),
        l = (0, g.e7)([H.Z], () => H.Z.getNewThreadCount());
    return 0 === l
        ? null
        : (0, r.jsx)(p.P3F, {
              className: eu.newPostsButton,
              onClick: n,
              children: (0, r.jsx)(p.Text, {
                  color: 'text-brand',
                  variant: 'text-md/medium',
                  children: ed.intl.format(ed.t.ue1qfH, { count: l })
              })
          });
}
function eP() {
    return Promise.resolve();
}
function eN(e) {
    var t, n, l;
    let { channel: s, isEmpty: x, isSearchLoading: v, numResults: O, children: w, coords: S, onHeightChange: N } = e,
        {
            name: T,
            formOpen: I,
            titleFocused: k,
            hasClickedForm: R,
            textAreaState: Z,
            onboardingExpanded: z,
            setEditorAdditionRowHeight: H
        } = (0, Q.xH)((e) => {
            let { name: t, formOpen: n, titleFocused: r, hasClickedForm: i, textAreaState: l, onboardingExpanded: a, setEditorAdditionRowHeight: s } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: r,
                hasClickedForm: i,
                textAreaState: l,
                onboardingExpanded: a,
                setEditorAdditionRowHeight: s
            };
        }, c.X),
        { tagFilter: G, layoutType: q } = (0, U.H)(s.id),
        W = (0, Q.AF)(),
        Y = (0, U.v)(),
        ee = (0, g.e7)([A.Z], () => A.Z.canChatInGuild(s.guild_id)),
        et = (0, V.r_)(s),
        er = (0, E.cD)(s),
        [el, ea] = i.useState(er),
        [, es] = (0, _.AB)(null != (l = s.getGuildId()) ? l : void 0),
        ec = (0, P.wL)(s),
        ef = ee && (er || (el && es)) && !ec,
        ep = s.isMediaChannel();
    i.useEffect(() => {
        er && ea(!0);
    }, [er]);
    let { ref: ex, height: eb } = (0, b.ZP)();
    i.useEffect(() => {
        null != eb && N(eb);
    }, [N, eb]);
    let ej = i.useCallback(() => {
        o()(() => {
            null != ex.current && W.getState().setEditorHeight(ex.current.offsetHeight);
        });
    }, [ex, W]);
    i.useLayoutEffect(ej, [ej, x, ef, z]),
        (0, D.yp)({
            event: eo.CkL.REMEASURE_TARGET,
            handler: ej
        });
    let ev = (0, g.e7)([L.Z], () => L.Z.getUploads(s.id, M.d.FirstThreadMessage)),
        eC = (0, V.ql)(s),
        e_ = i.useRef(null),
        ey = i.useRef(null),
        [eO, ew] = i.useState(0),
        { width: eS } = (0, g.e7)([F.Z], () => F.Z.windowSize()),
        eN = null == (n = e_.current) || null == (t = n.getBoundingClientRect()) ? void 0 : t.width,
        eI = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        let t = ey.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0];
        if (null != e_.current && null != n && null != n.children) {
            let { left: e, top: t } = e_.current.getBoundingClientRect(),
                r = 0;
            for (let i of n.children) {
                let { right: n, top: l, height: a } = i.getBoundingClientRect();
                if (l - t > a) break;
                n - e > r && (r = n - e);
            }
            ew(r);
        }
    }, [s.availableTags, eS, eN, G]);
    let eE = T.length > 0 && !I && (v || null != O),
        ek = !__OVERLAY__ && !R && !I && k && (0 === Z.textValue.trim().length || Z.textValue.trim() === eC) && 0 === ev.length && !ec;
    i.useLayoutEffect(() => {
        let e = eE || ek;
        if (!e) return H(0);
        null != eI.current && H(e ? eI.current.clientHeight : 0);
    }, [H, eE, ek, eI]);
    let eR = (e) => {
            (0, X.e7)({
                guildId: s.guild_id,
                channelId: s.id,
                tagId: e,
                filterTagIds: Array.from(G),
                added: !G.has(e),
                location: {
                    page: eo.ZY5.GUILD_CHANNEL,
                    section: eo.jXE.FORUM_CHANNEL_HEADER,
                    object: eo.qAy.CHANNEL_TAG
                }
            }),
                Y.getState().toggleTagFilter(s.id, e);
        },
        eZ = (0, u.ZP)({
            id: ''.concat(s.id, '-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eP,
            scrollToEnd: eP,
            orientation: m.hy.HORIZONTAL
        }),
        eM = (0, d.JA)('forum-channel-header'),
        { role: eA, onFocus: eL } = eM,
        eF = eg(eM, ['role', 'onFocus']),
        eD = i.useRef(null),
        ez = (function () {
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
        eB = i.useCallback(
            (e) => {
                if ((eL(), e.target === ex.current && !ez.current)) {
                    var t;
                    null == (t = eD.current) || t.focus();
                }
            },
            [eL, ex, ez]
        );
    return (0, r.jsx)(
        'div',
        eh(
            em(
                {
                    className: a()(eu.card, eu.headerRow, eu.columnsSpan),
                    ref: ex,
                    onFocus: eB
                },
                eF
            ),
            {
                style: eh(em({}, S), {
                    position: q === h.X.GRID ? 'absolute' : 'static',
                    height: 'auto'
                }),
                children: (0, r.jsxs)(D.I3, {
                    children: [
                        null != s.guild_id
                            ? (0, r.jsx)(y.Z, {
                                  className: a()(eu.newMemberBanner, { [eu.gridViewBanner]: q === h.X.GRID }),
                                  guildId: s.guild_id,
                                  channel: s
                              })
                            : null,
                        (0, r.jsx)('div', {
                            className: a()(eu.mainCard, eu.header, { [eu.headerWithMatchingPosts]: eE || ek }),
                            children: (0, r.jsx)($.Z, {
                                parentChannel: s,
                                onChange: ej,
                                isSearchLoading: v,
                                canCreatePost: ef,
                                inputRef: eD
                            })
                        }),
                        (eE || ek) &&
                            (0, r.jsxs)('div', {
                                className: eu.matchingPostsRow,
                                ref: eI,
                                children: [
                                    eE &&
                                        (0, r.jsxs)('div', {
                                            className: eu.matchingPosts,
                                            children: [
                                                (0, r.jsx)(p.X6q, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-normal',
                                                    children: v
                                                        ? ed.intl.string(ed.t['/9i3qq'])
                                                        : 0 === O
                                                          ? ed.intl.string(ed.t.DbgHxs)
                                                          : ed.intl.formatToPlainString(ed.t['tBz/8f'], {
                                                                numPosts: O,
                                                                query: T
                                                            })
                                                }),
                                                !v &&
                                                    (0, r.jsx)(p.P3F, {
                                                        onClick: () => {
                                                            (0, X.zI)({
                                                                guildId: s.guild_id,
                                                                channelId: s.id
                                                            }),
                                                                B.Z.clearForumSearch(s.id),
                                                                W.getState().setName('');
                                                        },
                                                        children: (0, r.jsx)(p.Text, {
                                                            variant: 'text-xs/semibold',
                                                            color: 'text-brand',
                                                            className: eu.clear,
                                                            children: ed.intl.string(ed.t.VkKicX)
                                                        })
                                                    })
                                            ]
                                        }),
                                    (0, r.jsx)('div', { className: eu.tagsSpacer }),
                                    ek
                                        ? ef
                                            ? (0, r.jsxs)('div', {
                                                  className: eu.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(p.M2$, {
                                                          shortcut: 'SHIFT',
                                                          className: eu.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-normal',
                                                          children: '+'
                                                      }),
                                                      (0, r.jsx)(p.M2$, {
                                                          shortcut: 'ENTER',
                                                          className: eu.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-normal',
                                                          children: ed.intl.string(ed.t.ZvJ0ys)
                                                      })
                                                  ]
                                              })
                                            : (0, r.jsxs)('div', {
                                                  className: eu.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(p.P4T, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          height: 14,
                                                          width: 14,
                                                          className: eu.warnIcon
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-normal',
                                                          children: ed.intl.string(ed.t.iyzwnJ)
                                                      })
                                                  ]
                                              })
                                        : null
                                ]
                            }),
                        (0, r.jsx)(K.Z, {
                            channel: s,
                            onChange: ej
                        }),
                        (0, r.jsxs)('div', {
                            className: eu.tagsContainer,
                            ref: e_,
                            children: [
                                (0, r.jsx)(eT, { channel: s }),
                                s.availableTags.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: eu.divider }),
                                              (0, r.jsx)('div', {
                                                  className: eu.tagList,
                                                  ref: ey,
                                                  children: (0, r.jsx)(d.bG, {
                                                      navigator: eZ,
                                                      children: (0, r.jsx)(d.SJ, {
                                                          children: (e) => {
                                                              var { ref: t } = e,
                                                                  n = eg(e, ['ref']);
                                                              return (0, r.jsx)(
                                                                  'div',
                                                                  eh(
                                                                      em(
                                                                          {
                                                                              className: eu.tagListInner,
                                                                              ref: t
                                                                          },
                                                                          n
                                                                      ),
                                                                      {
                                                                          children: s.availableTags.map((e) =>
                                                                              (0, r.jsx)(
                                                                                  en.Z,
                                                                                  {
                                                                                      className: eu.tag,
                                                                                      tag: e,
                                                                                      onClick: () => eR(e.id),
                                                                                      selected: G.has(e.id)
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
                                                  renderPopout: (e) => {
                                                      let { closePopout: t, setPopoutRef: n } = e;
                                                      return (0, r.jsx)(ei.Z, {
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
                                                          p.zxk,
                                                          eh(em({}, e), {
                                                              size: p.zxk.Sizes.MIN,
                                                              color: p.zxk.Colors.CUSTOM,
                                                              className: a()(eu.tagsButton, { [eu.tagsButtonWithCount]: G.size > 0 }),
                                                              style: { left: eO },
                                                              innerClassName: eu.tagsButtonInner,
                                                              'aria-label': G.size > 0 ? ed.intl.string(ed.t.IkpM1d) : ed.intl.string(ed.t['9vKK/P']),
                                                              children: [
                                                                  G.size > 0
                                                                      ? (0, r.jsx)('div', {
                                                                            className: eu.countContainer,
                                                                            children: (0, r.jsx)(p.Text, {
                                                                                className: eu.countText,
                                                                                color: 'none',
                                                                                variant: 'text-xs/medium',
                                                                                children: G.size
                                                                            })
                                                                        })
                                                                      : ed.intl.string(ed.t.fZ8hzs),
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
                                              (0, r.jsxs)(p.zxk, {
                                                  size: p.zxk.Sizes.MIN,
                                                  color: p.zxk.Colors.CUSTOM,
                                                  className: a()(eu.tagsButton, eu.tagsButtonPlaceholder),
                                                  innerClassName: eu.tagsButtonInner,
                                                  'aria-label': ed.intl.string(ed.t.IkpM1d),
                                                  children: [
                                                      G.size > 0
                                                          ? (0, r.jsx)('div', {
                                                                className: eu.countContainer,
                                                                children: (0, r.jsx)(p.Text, {
                                                                    className: eu.countText,
                                                                    color: 'none',
                                                                    variant: 'text-xs/medium',
                                                                    children: G.size
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
                        w,
                        et &&
                            !ep &&
                            (0, r.jsx)(C.ZP, {
                                contentTypes: [f.z.FORUM_CHANNEL_HELPER_CARD],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === f.z.FORUM_CHANNEL_HELPER_CARD ? (0, r.jsx)(J.Z, { onDismiss: n }) : null;
                                }
                            })
                    ]
                })
            }
        ),
        'create-form'
    );
}
function eT(e) {
    let { channel: t } = e,
        n = t.isMediaChannel();
    return (0, r.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(et.Z, {
                channel: t,
                closePopout: n
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, r.jsxs)(
                p.zxk,
                eh(em({}, e), {
                    size: p.zxk.Sizes.MIN,
                    color: p.zxk.Colors.CUSTOM,
                    className: eu.sortDropdown,
                    innerClassName: eu.sortDropdownInner,
                    'aria-label': n ? ed.intl.string(ed.t.JxU0ws) : ed.intl.string(ed.t.xyYt8P),
                    children: [
                        (0, r.jsx)(p.uVW, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        (0, r.jsx)(p.Text, {
                            className: eu.sortDropdownText,
                            variant: 'text-sm/medium',
                            color: 'interactive-normal',
                            children: n ? ed.intl.string(ed.t.JxU0ws) : ed.intl.string(ed.t.xyYt8P)
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
