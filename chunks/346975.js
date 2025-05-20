n.r(t), n.d(t, { default: () => ex }), n(35282), n(388685), n(781311);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(196434),
    o = n.n(s),
    c = n(760907),
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
    C = n(243778),
    _ = n(71619),
    y = n(898188),
    O = n(41776),
    w = n(256413),
    S = n(292853),
    N = n(982168),
    P = n(216572),
    T = n(359110),
    I = n(344185),
    E = n(235449),
    k = n(665906),
    R = n(488131),
    Z = n(433355),
    M = n(592125),
    A = n(703558),
    L = n(607744),
    F = n(117530),
    D = n(451478),
    z = n(459273),
    B = n(961675),
    H = n(883429),
    U = n(238349),
    V = n(109434),
    G = n(456269),
    q = n(90372),
    X = n(985518),
    W = n(228392),
    K = n(355589),
    J = n(542581),
    Y = n(639184),
    Q = n(404616),
    $ = n(470623),
    ee = n(749913),
    et = n(219664),
    en = n(895932),
    er = n(479099),
    ei = n(510060),
    el = n(276357),
    ea = n(81490),
    es = n(482062),
    eo = n(260503),
    ec = n(981631),
    ed = n(124368),
    eu = n(388032),
    em = n(683999);
function eh(e) {
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
function eg(e, t) {
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
function ef(e, t) {
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
function ex(e) {
    let { channel: t, guild: n, sidebarState: i } = e;
    return (0, r.jsx)(
        $.oL,
        {
            channel: t,
            children: (0, r.jsx)(eO, {
                channel: t,
                guild: n,
                sidebarState: i
            })
        },
        t.id
    );
}
let ep = new ei.Me({
    minWidth: 320,
    maxWidth: 450,
    gap: 16
});
function eb(e) {
    return 'forum-grid-header-section-'.concat(e);
}
let ej = (e, t, n) => (0 === e ? 0 : (0, ei.KW)(n));
function ev(e) {
    let { itemRole: t, coords: n, section: i } = e;
    return (0, r.jsx)(
        'div',
        {
            className: a()(em.card, em.archivedDividerRow, em.columnsSpan),
            style: n,
            'data-item-role': t,
            children: (0, r.jsx)('div', {
                className: em.emptyMainCard,
                children: (0, r.jsx)(x.X6q, {
                    variant: 'eyebrow',
                    className: em.archivedDivider,
                    id: eb(i),
                    children: eu.intl.string(eu.t['3+LO19'])
                })
            })
        },
        'section-divider'
    );
}
function eC(e) {
    let { section: t, coords: n, key: i, isShowingSearchResult: l, hasActiveThreads: a } = e;
    return () =>
        2 === t && !l && a
            ? (0, r.jsx)(
                  ev,
                  {
                      section: t,
                      coords: null == n ? void 0 : eg(eh({}, n), { position: 'absolute' }),
                      itemRole: 'section'
                  },
                  i
              )
            : null;
}
function e_(e, t) {
    return 'card-'.concat(e, '-').concat(t);
}
function ey(e) {
    if ('string' == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function eO(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: l,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: u
        } = (0, $.xH)((e) => {
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
            loading: N,
            isSearchLoading: P,
            layoutType: k
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: r, tagSetting: i } = (0, V.H)(e.id),
                l = (0, G.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: i,
                    shouldAutomaticallyAck: !0
                }),
                a = (0, g.e7)([I.Z, O.Z], () => {
                    let t = I.Z.hasLoaded(e.guild_id),
                        n = O.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: s, canLoadMore: o, loadMore: c, loading: d } = (0, E.qQ)(e, t, n, i),
                { searchResults: u, isSearchLoading: m } = (0, G.XZ)({ channelId: e.id });
            return (
                (0, G.ES)(e, t, n, i),
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
        { tagFilter: z, tagSetting: U } = (0, V.H)(t.id);
    (0, G.ku)(t, z, U, u);
    let J = (0, G.jR)(t),
        Y = (0, G.eZ)(t),
        ee = i.useRef(null),
        { observePostVisibilityAnalytics: en } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: r } = e;
            q.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n
            });
            let l = i.useRef(null),
                a = i.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let r = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, X.rj)(e, t, r) : (0, X.Ct)(e, t, r);
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
                            if (null == e) return void (0, X.Ct)(n, t, Date.now());
                            null == (r = l.current) || r.observe(e);
                        },
                        [n]
                    )
                }
            );
        })({
            scrollerRef: ee,
            channelId: t.id,
            guildId: t.guild_id
        }),
        er = k === h.X.GRID,
        el = null != b,
        ex = i.useRef(null),
        { containerRef: ev, containerWidth: eO } = (0, ea.Z)();
    i.useEffect(
        () => () => {
            null != t.id && H.Z.clearForumSearch(t.id);
        },
        [t.id]
    );
    let { columns: eP } = i.useMemo(() => (er ? ep.getRenderOptions(eO) : ei.eU), [er, eO]),
        eI = i.useMemo(() => (N ? Math.round((window.innerHeight - 200) / 118) : 0), [N]),
        eE = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ei.KW)(ep.getWidth(eO))) * eP;
            return _ ? e : 0;
        }, [eO, eP, _]),
        ek = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ei.KW)(ep.getWidth(eO))) * eP;
            return y ? e : 0;
        }, [eO, eP, y]),
        eR = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ei.KW)(ep.getWidth(eO))) * eP;
            return P && el ? e : 0;
        }, [eO, eP, P, el]),
        eZ = i.useMemo(() => {
            if (er)
                if (!J && el) return [1, 0];
                else if (!Y) return [1, m.length + eE, 0];
                else if (el) return [1, b.length + eR, 0];
                else return [1, m.length + eE, f.length + ek];
            return !J && el ? [1, 1] : Y ? (el ? [1, b.length, 0, eI] : [1, m.length, f.length, eI]) : [1, m.length, 1];
        }, [er, el, m.length, f.length, J, Y, eI, b, eE, ek, eR]),
        eM = i.useMemo(() => (!J && el ? [[], []] : Y ? (el ? [[], b, [], []] : [[], m, f, []]) : [[], m, []]), [el, J, Y, b, m, f]),
        eA = i.useCallback(
            (e, n) => {
                (0, W.B5)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: {
                        page: ec.ZY5.GUILD_CHANNEL,
                        section: ec.jXE.FORUM_CHANNEL_POST
                    }
                }),
                    n ? (0, T.ad)(e, { source: ed.on.BROWSER }) : ((ex.current = e.id), (0, R.ok)(e));
            },
            [t.guild_id, t.id, ex]
        ),
        [eL, eF] = i.useState(l + s - 24),
        eD = i.useCallback(
            (e, n, i) =>
                0 === e
                    ? (0, r.jsx)(
                          eT,
                          {
                              channel: t,
                              isEmpty: !L,
                              isSearchLoading: P,
                              numResults: null == b ? void 0 : b.length,
                              coords: n,
                              onHeightChange: eF,
                              children:
                                  !N &&
                                  (0, r.jsx)(
                                      K.Z,
                                      {
                                          channel: t,
                                          hasAnyThread: F,
                                          hasActiveThreads: L
                                      },
                                      t.id
                                  )
                          },
                          'forum-channel-header'
                      )
                    : 2 !== e || Y
                      ? 1 === e && el && !J
                          ? (0, r.jsx)(
                                eS,
                                {
                                    channel: t,
                                    coords: n
                                },
                                'archive-or-search-result'
                            )
                          : i()
                      : (0, r.jsx)(
                            ew,
                            {
                                channel: t,
                                coords: n
                            },
                            'archived-missing-reading-history-perm'
                        ),
            [el, Y, b, J, t, L, P, N, F]
        ),
        ez = (0, g.e7)([B.Z], () => B.Z.hasHidden(t.id)),
        eB = {
            editorHeight: l,
            isGridLayout: er
        },
        eH = i.useRef(eB);
    i.useEffect(() => {
        eH.current = eB;
    }),
        i.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: r } = eH.current,
                i = r ? eW : ee,
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
                        eC({
                            section: e.section,
                            isShowingSearchResult: h,
                            hasActiveThreads: n
                        })(),
                    [n, h]
                ),
                p = i.useCallback(
                    (e) =>
                        d(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, r.jsx)(
                                          'div',
                                          {
                                              'data-item-role': 'item',
                                              className: a()(em.loadingCard, em['loadingCard-'.concat(e.row % 3)])
                                          },
                                          'loading-'.concat(e.row)
                                      );
                            let t = l[e.section][e.row];
                            return (0, r.jsx)(
                                'li',
                                {
                                    className: em.card,
                                    'data-item-role': 'item',
                                    children: (0, r.jsx)(x.y5t, {
                                        children: (0, r.jsx)(Q.ZP, {
                                            className: em.mainCard,
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
                renderListItem: p,
                getListSectionHeight: i.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: b
            };
        })({
            listRef: ee,
            hasActiveThreads: L,
            threadIdsBySection: eM,
            listViewCardHeights: o,
            editorHeight: l,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eD,
            goToThread: eA,
            observePostVisibilityAnalytics: en,
            isShowingSearchResult: el
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
                            (h.current = ey(n));
                    },
                    [t, h]
                ),
                b = i.useCallback(
                    (e) => {
                        let t = ey(e);
                        if (null == t) return;
                        let n = M.Z.getChannel(t);
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
                            return null == r ? e_(e, t) : e_(e, r);
                        }
                    },
                    [n]
                ),
                v = i.useCallback(
                    (e, t, n) =>
                        s(
                            e,
                            t,
                            eC({
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
                                  'aria-labelledby': '#'.concat(eb(e))
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
                                  et.Z,
                                  {
                                      id: ''.concat(s),
                                      threadId: c,
                                      className: a()(em.card, em.mainCard),
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
                                        style: eh({}, i),
                                        'data-item-role': 'item',
                                        className: a()(em.loadingCard, em['loadingCard-'.concat(t % 3)])
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
            isShowingSearchResult: el,
            canSearchForumPosts: J,
            canViewArchivedPosts: Y,
            observePostVisibilityAnalytics: en,
            focusedThreadId: ex,
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
                    if (null == Z.ZP.getSidebarState(s)) {
                        a.current = null;
                        return;
                    }
                    let n = l.findIndex((t) => t.find((t) => t === e)),
                        r = t.current.getCoordsMap(),
                        i = r['__section__'.concat(n)],
                        o = r[e_(n, e)];
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
        containerWidth: eO,
        isGridLayout: er,
        threadIdsBySection: eM,
        parentId: t.id,
        focusedThreadId: ex
    });
    let e6 = i.useCallback(() => {
            var e, n;
            if (el) return;
            let r = er ? (null == (e = eW.current) ? void 0 : e.getScrollerState()) : null == (n = ee.current) ? void 0 : n.getScrollerState();
            if (null == r) return;
            (0, W.ab)({
                guildId: t.guild_id,
                channelId: t.id
            });
            let i = r.scrollTop + r.offsetHeight;
            r.scrollHeight - i < (er ? Math.max(200, (0, ei.KW)(eO)) : 200) && C();
        }, [el, er, t.guild_id, t.id, eO, C]),
        e8 = (0, g.e7)([j.Z], () => j.Z.keyboardModeEnabled),
        e1 = (0, es.ZP)({
            id: 'forum-grid-view',
            isEnabled: er && e8,
            setFocus: e3
        }),
        e9 = (0, eo.Z)({
            listRef: ee,
            padding: 96,
            isEnabled: !er && e8,
            channel: t
        }),
        e4 = e1.containerProps,
        { ref: e2 } = e4,
        e5 = ef(e4, ['ref']),
        e7 = Z.ZP.getSidebarState(t.id),
        te = null != e7 && (0, Z.D5)(e7),
        tt = (0, g.e7)([Z.ZP], () => Z.ZP.getSection(t.id)) === ec.ULH.MEMBERS;
    return (0, r.jsx)('div', {
        className: em.container,
        ref: ev,
        'data-member-list-open': tt,
        children: (0, r.jsx)(x.Wdt, {
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        u &&
                            (0, r.jsx)(p.Z, {
                                channel: t,
                                draftType: A.d.FirstThreadMessage,
                                className: em.uploadArea,
                                style: { right: te && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0 }
                            }),
                        (0, r.jsx)(eN, { channel: t }),
                        (0, r.jsx)(x.nn4, { children: (0, r.jsx)(x.H, { children: eu.intl.string(eu.t.B2panJ) }) }),
                        D
                            ? (0, r.jsx)('div', {
                                  className: em.optInNotice,
                                  children: (0, r.jsx)(S.Z, { channel: t })
                              })
                            : null,
                        er
                            ? (0, r.jsx)(es.KT, {
                                  navigator: e1,
                                  children: (0, r.jsx)(
                                      x.GMG,
                                      eh(
                                          {
                                              ref: (e) => {
                                                  var t;
                                                  (e2.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), eK(e);
                                              },
                                              itemGutter: 16,
                                              padding: 24,
                                              className: em.grid,
                                              columns: eP,
                                              sections: eZ,
                                              getItemKey: eJ,
                                              getSectionHeight: e$,
                                              getItemHeight: ej,
                                              renderSection: eY,
                                              renderItem: eQ,
                                              getSectionProps: e0,
                                              onScroll: v ? e6 : void 0,
                                              chunkSize: 350
                                          },
                                          e5,
                                          e
                                      ),
                                      k
                                  )
                              })
                            : (0, r.jsx)(d.bG, {
                                  navigator: e9,
                                  children: (0, r.jsx)(d.SJ, {
                                      children: (t) => {
                                          var { ref: n } = t,
                                              i = ef(t, ['ref']);
                                          return (0, r.jsx)(
                                              x._2F,
                                              eg(
                                                  eh(
                                                      {
                                                          ref: eU(n),
                                                          className: em.list,
                                                          sections: eZ,
                                                          sectionHeight: eq,
                                                          rowHeight: eX,
                                                          renderRow: eG,
                                                          renderSection: eV,
                                                          chunkSize: 150,
                                                          onScroll: v ? e6 : void 0,
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
function ew(e) {
    let { channel: t, coords: n } = e,
        i = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: a()(em.missingReadHistoryPermission, em.columnsSpan),
        style: n,
        children: (0, r.jsx)(x.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: eu.intl.format(eu.t.TycmzM, { channelName: i })
        })
    });
}
function eS(e) {
    let { channel: t, coords: n } = e,
        i = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: a()(em.missingReadHistoryPermission, em.columnsSpan),
        style: n,
        children: (0, r.jsx)(x.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: eu.intl.format(eu.t.OWZJdX, { channelName: i })
        })
    });
}
function eN(e) {
    let { channel: t } = e,
        n = i.useCallback(() => {
            H.Z.resort(t.id);
        }, [t]),
        l = (0, g.e7)([U.Z], () => U.Z.getNewThreadCount());
    return 0 === l
        ? null
        : (0, r.jsx)(x.P3F, {
              className: em.newPostsButton,
              onClick: n,
              children: (0, r.jsx)(x.Text, {
                  color: 'text-brand',
                  variant: 'text-md/medium',
                  children: eu.intl.format(eu.t.ue1qfH, { count: l })
              })
          });
}
function eP() {
    return Promise.resolve();
}
function eT(e) {
    var t, n, l;
    let { channel: s, isEmpty: p, isSearchLoading: v, numResults: O, children: w, coords: S, onHeightChange: T } = e,
        {
            name: I,
            formOpen: E,
            titleFocused: R,
            hasClickedForm: Z,
            textAreaState: M,
            onboardingExpanded: B,
            setEditorAdditionRowHeight: U
        } = (0, $.xH)((e) => {
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
        { tagFilter: q, layoutType: X } = (0, V.H)(s.id),
        K = (0, $.AF)(),
        Q = (0, V.v)(),
        et = (0, g.e7)([L.Z], () => L.Z.canChatInGuild(s.guild_id)),
        en = (0, G.r_)(s),
        ei = (0, k.cD)(s),
        [ea, es] = i.useState(ei),
        [, eo] = (0, _.AB)(null != (l = s.getGuildId()) ? l : void 0),
        ed = (0, P.HL)(s),
        ex = et && (ei || (ea && eo)) && !ed,
        ep = s.isMediaChannel();
    i.useEffect(() => {
        ei && es(!0);
    }, [ei]);
    let { ref: eb, height: ej } = (0, b.ZP)();
    i.useEffect(() => {
        null != ej && T(ej);
    }, [T, ej]);
    let ev = i.useCallback(() => {
        o()(() => {
            null != eb.current && K.getState().setEditorHeight(eb.current.offsetHeight);
        });
    }, [eb, K]);
    i.useLayoutEffect(ev, [ev, p, ex, B]),
        (0, z.yp)({
            event: ec.CkL.REMEASURE_TARGET,
            handler: ev
        });
    let eC = (0, g.e7)([F.Z], () => F.Z.getUploads(s.id, A.d.FirstThreadMessage)),
        e_ = (0, G.ql)(s),
        ey = i.useRef(null),
        eO = i.useRef(null),
        [ew, eS] = i.useState(0),
        { width: eN } = (0, g.e7)([D.Z], () => D.Z.windowSize()),
        eT = null == (n = ey.current) || null == (t = n.getBoundingClientRect()) ? void 0 : t.width,
        eE = i.useRef(null),
        ek = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        let t = eO.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0];
        if (null != ey.current && null != n && null != n.children) {
            let { left: e, top: t } = ey.current.getBoundingClientRect(),
                r = 0;
            for (let i of n.children) {
                let { right: n, top: l, height: a } = i.getBoundingClientRect();
                if (l - t > a) break;
                n - e > r && (r = n - e);
            }
            eS(r);
        }
    }, [s.availableTags, eN, eT, q]);
    let eR = I.length > 0 && !E && (v || null != O),
        eZ = !__OVERLAY__ && !Z && !E && R && (0 === M.textValue.trim().length || M.textValue.trim() === e_) && 0 === eC.length && !ed;
    i.useLayoutEffect(() => {
        let e = eR || eZ;
        if (!e) return U(0);
        null != eE.current && U(e ? eE.current.clientHeight : 0);
    }, [U, eR, eZ, eE]);
    let eM = (e) => {
            (0, W.e7)({
                guildId: s.guild_id,
                channelId: s.id,
                tagId: e,
                filterTagIds: Array.from(q),
                added: !q.has(e),
                location: {
                    page: ec.ZY5.GUILD_CHANNEL,
                    section: ec.jXE.FORUM_CHANNEL_HEADER,
                    object: ec.qAy.CHANNEL_TAG
                }
            }),
                Q.getState().toggleTagFilter(s.id, e);
        },
        eA = (0, u.ZP)({
            id: ''.concat(s.id, '-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eP,
            scrollToEnd: eP,
            orientation: m.hy.HORIZONTAL
        }),
        eL = (0, d.JA)('forum-channel-header'),
        { role: eF, onFocus: eD } = eL,
        ez = ef(eL, ['role', 'onFocus']),
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
                if ((eD(), e.target === eb.current && !eH.current)) {
                    var t;
                    null == (t = eB.current) || t.focus();
                }
            },
            [eD, eb, eH]
        ),
        eV = i.useMemo(() => (ed ? (0, N.iq)(s.availableTags) : s.availableTags), [s.availableTags, ed]);
    return (0, r.jsx)(
        'div',
        eg(
            eh(
                {
                    className: a()(em.card, em.headerRow, em.columnsSpan),
                    ref: eb,
                    onFocus: eU
                },
                ez
            ),
            {
                style: eg(eh({}, S), {
                    position: X === h.X.GRID ? 'absolute' : 'static',
                    height: 'auto'
                }),
                children: (0, r.jsxs)(z.I3, {
                    children: [
                        null != s.guild_id
                            ? (0, r.jsx)(y.Z, {
                                  className: a()(em.newMemberBanner, { [em.gridViewBanner]: X === h.X.GRID }),
                                  guildId: s.guild_id,
                                  channel: s
                              })
                            : null,
                        (0, r.jsx)('div', {
                            className: a()(em.mainCard, em.header, { [em.headerWithMatchingPosts]: eR || eZ }),
                            children: (0, r.jsx)(ee.Z, {
                                parentChannel: s,
                                onChange: ev,
                                isSearchLoading: v,
                                canCreatePost: ex,
                                inputRef: eB
                            })
                        }),
                        (eR || eZ) &&
                            (0, r.jsxs)('div', {
                                className: em.matchingPostsRow,
                                ref: eE,
                                children: [
                                    eR &&
                                        (0, r.jsxs)('div', {
                                            className: em.matchingPosts,
                                            children: [
                                                (0, r.jsx)(x.X6q, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-normal',
                                                    children: v
                                                        ? eu.intl.string(eu.t['/9i3qq'])
                                                        : 0 === O
                                                          ? eu.intl.string(eu.t.DbgHxs)
                                                          : eu.intl.formatToPlainString(eu.t['tBz/8f'], {
                                                                numPosts: O,
                                                                query: I
                                                            })
                                                }),
                                                !v &&
                                                    (0, r.jsx)(x.P3F, {
                                                        onClick: () => {
                                                            (0, W.zI)({
                                                                guildId: s.guild_id,
                                                                channelId: s.id
                                                            }),
                                                                H.Z.clearForumSearch(s.id),
                                                                K.getState().setName('');
                                                        },
                                                        children: (0, r.jsx)(x.Text, {
                                                            variant: 'text-xs/semibold',
                                                            color: 'text-brand',
                                                            className: em.clear,
                                                            children: eu.intl.string(eu.t.VkKicX)
                                                        })
                                                    })
                                            ]
                                        }),
                                    (0, r.jsx)('div', { className: em.tagsSpacer }),
                                    eZ
                                        ? ex
                                            ? (0, r.jsxs)('div', {
                                                  className: em.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(x.M2$, {
                                                          shortcut: 'SHIFT',
                                                          className: em.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(x.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-normal',
                                                          children: '+'
                                                      }),
                                                      (0, r.jsx)(x.M2$, {
                                                          shortcut: 'ENTER',
                                                          className: em.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(x.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-normal',
                                                          children: eu.intl.string(eu.t.ZvJ0ys)
                                                      })
                                                  ]
                                              })
                                            : (0, r.jsxs)('div', {
                                                  className: em.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(x.P4T, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          height: 14,
                                                          width: 14,
                                                          className: em.warnIcon
                                                      }),
                                                      (0, r.jsx)(x.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-normal',
                                                          children: eu.intl.string(eu.t.iyzwnJ)
                                                      })
                                                  ]
                                              })
                                        : null
                                ]
                            }),
                        (0, r.jsx)(J.Z, {
                            channel: s,
                            onChange: ev
                        }),
                        (0, r.jsxs)('div', {
                            className: em.tagsContainer,
                            ref: ey,
                            children: [
                                (0, r.jsx)(eI, { channel: s }),
                                eV.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: em.divider }),
                                              (0, r.jsx)('div', {
                                                  className: em.tagList,
                                                  ref: eO,
                                                  children: (0, r.jsx)(d.bG, {
                                                      navigator: eA,
                                                      children: (0, r.jsx)(d.SJ, {
                                                          children: (e) => {
                                                              var { ref: t } = e,
                                                                  n = ef(e, ['ref']);
                                                              return (0, r.jsx)(
                                                                  'div',
                                                                  eg(
                                                                      eh(
                                                                          {
                                                                              className: em.tagListInner,
                                                                              ref: t
                                                                          },
                                                                          n
                                                                      ),
                                                                      {
                                                                          children: eV.map((e) =>
                                                                              (0, r.jsx)(
                                                                                  er.Z,
                                                                                  {
                                                                                      className: em.tag,
                                                                                      tag: e,
                                                                                      onClick: () => eM(e.id),
                                                                                      selected: q.has(e.id)
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
                                                  targetElementRef: ek,
                                                  renderPopout: (e) => {
                                                      let { closePopout: t, setPopoutRef: n } = e;
                                                      return (0, r.jsx)(el.Z, {
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
                                                          eg(eh({}, e), {
                                                              buttonRef: ek,
                                                              size: x.zxk.Sizes.MIN,
                                                              color: x.zxk.Colors.CUSTOM,
                                                              className: a()(em.tagsButton, { [em.tagsButtonWithCount]: q.size > 0 }),
                                                              style: { left: ew },
                                                              innerClassName: em.tagsButtonInner,
                                                              'aria-label': q.size > 0 ? eu.intl.string(eu.t.IkpM1d) : eu.intl.string(eu.t['9vKK/P']),
                                                              children: [
                                                                  q.size > 0
                                                                      ? (0, r.jsx)('div', {
                                                                            className: em.countContainer,
                                                                            children: (0, r.jsx)(x.Text, {
                                                                                className: em.countText,
                                                                                color: 'none',
                                                                                variant: 'text-xs/medium',
                                                                                children: q.size
                                                                            })
                                                                        })
                                                                      : eu.intl.string(eu.t.fZ8hzs),
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
                                                  className: a()(em.tagsButton, em.tagsButtonPlaceholder),
                                                  innerClassName: em.tagsButtonInner,
                                                  'aria-label': eu.intl.string(eu.t.IkpM1d),
                                                  children: [
                                                      q.size > 0
                                                          ? (0, r.jsx)('div', {
                                                                className: em.countContainer,
                                                                children: (0, r.jsx)(x.Text, {
                                                                    className: em.countText,
                                                                    color: 'none',
                                                                    variant: 'text-xs/medium',
                                                                    children: q.size
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
                        en &&
                            !ep &&
                            (0, r.jsx)(C.ZP, {
                                contentTypes: [f.z.FORUM_CHANNEL_HELPER_CARD],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === f.z.FORUM_CHANNEL_HELPER_CARD ? (0, r.jsx)(Y.Z, { onDismiss: n }) : null;
                                }
                            })
                    ]
                })
            }
        ),
        'create-form'
    );
}
function eI(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        l = i.useRef(null);
    return (0, r.jsx)(x.yRy, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(en.Z, {
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
                eg(eh({}, e), {
                    buttonRef: l,
                    size: x.zxk.Sizes.MIN,
                    color: x.zxk.Colors.CUSTOM,
                    className: em.sortDropdown,
                    innerClassName: em.sortDropdownInner,
                    'aria-label': n ? eu.intl.string(eu.t.JxU0ws) : eu.intl.string(eu.t.xyYt8P),
                    children: [
                        (0, r.jsx)(x.uVW, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        (0, r.jsx)(x.Text, {
                            className: em.sortDropdownText,
                            variant: 'text-sm/medium',
                            color: 'interactive-normal',
                            children: n ? eu.intl.string(eu.t.JxU0ws) : eu.intl.string(eu.t.xyYt8P)
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
