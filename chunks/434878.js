n.r(t), n.d(t, { default: () => eu }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(196434),
    o = n.n(s),
    c = n(232713),
    d = n(91192),
    u = n(924826),
    m = n(536895),
    h = n(313361),
    g = n(442837),
    x = n(704215),
    f = n(481060),
    p = n(561472),
    v = n(393238),
    C = n(607070),
    _ = n(933557),
    b = n(243778),
    j = n(71619),
    N = n(898188),
    T = n(41776),
    I = n(256413),
    S = n(292853),
    w = n(359110),
    y = n(344185),
    E = n(235449),
    R = n(665906),
    P = n(488131),
    k = n(433355),
    Z = n(592125),
    M = n(703558),
    A = n(607744),
    L = n(117530),
    F = n(451478),
    O = n(459273),
    z = n(961675),
    D = n(883429),
    B = n(238349),
    H = n(109434),
    U = n(456269),
    V = n(90372),
    G = n(985518),
    q = n(228392),
    X = n(355589),
    W = n(542581),
    K = n(639184),
    J = n(404616),
    Y = n(470623),
    Q = n(749913),
    $ = n(219664),
    ee = n(895932),
    et = n(479099),
    en = n(510060),
    ei = n(276357),
    er = n(81490),
    el = n(482062),
    ea = n(260503),
    es = n(981631),
    eo = n(124368),
    ec = n(388032),
    ed = n(444087);
function eu(e) {
    let { channel: t, guild: n, sidebarState: r } = e;
    return (0, i.jsx)(
        Y.oL,
        {
            channel: t,
            children: (0, i.jsx)(eC, {
                channel: t,
                guild: n,
                sidebarState: r
            })
        },
        t.id
    );
}
let em = new en.Me({
    minWidth: 320,
    maxWidth: 450,
    gap: 16
});
function eh(e) {
    return 'forum-grid-header-section-'.concat(e);
}
let eg = (e, t, n) => (0 === e ? 0 : (0, en.KW)(n));
function ex(e) {
    let { itemRole: t, coords: n, section: r } = e;
    return (0, i.jsx)(
        'div',
        {
            className: a()(ed.card, ed.archivedDividerRow, ed.columnsSpan),
            style: n,
            'data-item-role': t,
            children: (0, i.jsx)('div', {
                className: ed.emptyMainCard,
                children: (0, i.jsx)(f.X6q, {
                    variant: 'eyebrow',
                    className: ed.archivedDivider,
                    id: eh(r),
                    children: ec.intl.string(ec.t['3+LO19'])
                })
            })
        },
        'section-divider'
    );
}
function ef(e) {
    let { section: t, coords: n, key: r, isShowingSearchResult: l, hasActiveThreads: a } = e;
    return () =>
        2 === t && !l && a
            ? (0, i.jsx)(
                  ex,
                  {
                      section: t,
                      coords:
                          null == n
                              ? void 0
                              : {
                                    ...n,
                                    position: 'absolute'
                                },
                      itemRole: 'section'
                  },
                  r
              )
            : null;
}
function ep(e, t) {
    return 'card-'.concat(e, '-').concat(t);
}
function ev(e) {
    if ('string' == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function eC(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: l,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: u
        } = (0, Y.xH)((e) => {
            let { editorHeight: t, editorAdditionRowHeight: n, listViewCardHeights: i, formOpen: r, cardHeightVersion: l } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: i,
                formOpen: r,
                cardHeightVersion: l
            };
        }, c.X),
        {
            activeThreadIds: m,
            archivedThreadIds: x,
            searchResults: v,
            canLoadMore: _,
            loadMore: b,
            activeThreadsLoading: j,
            archivedThreadsLoading: N,
            loading: R,
            isSearchLoading: A,
            layoutType: L
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: i } = (0, H.H)(e.id),
                r = (0, U.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    shouldAutomaticallyAck: !0
                }),
                l = (0, g.e7)([y.Z, T.Z], () => {
                    let t = y.Z.hasLoaded(e.guild_id),
                        n = T.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: a, canLoadMore: s, loadMore: o, loading: c } = (0, E.qQ)(e, t, n),
                { searchResults: d, isSearchLoading: u } = (0, U.XZ)({ channelId: e.id });
            return (
                (0, U.ES)(e, t, n),
                {
                    activeThreadIds: r,
                    archivedThreadIds: a,
                    searchResults: d,
                    canLoadMore: s,
                    loadMore: o,
                    loading: l || c || u,
                    archivedThreadsLoading: c,
                    activeThreadsLoading: l,
                    isSearchLoading: u,
                    layoutType: i
                }
            );
        })(t),
        F = m.length > 0,
        O = F || x.length > 0,
        B = (0, I.Z)(t),
        { tagFilter: W } = (0, H.H)(t.id);
    (0, U.ku)(t, W, u);
    let K = (0, U.jR)(t),
        Q = (0, U.eZ)(t),
        ee = r.useRef(null),
        { observePostVisibilityAnalytics: et } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: i } = e;
            V.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n
            });
            let l = r.useRef(null),
                a = r.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let i = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, G.rj)(e, t, i) : (0, G.Ct)(e, t, i);
                    }
                }, []);
            return (
                r.useEffect(() => {
                    var e;
                    let t = null === (e = i.current) || void 0 === e ? void 0 : e.getScrollerNode();
                    if (null != t)
                        return (
                            (l.current = new IntersectionObserver((e) => a(n, e), {
                                root: t,
                                rootMargin: '0px 100000px 0px 100000px',
                                threshold: 0.5
                            })),
                            () => {
                                var e;
                                null === (e = l.current) || void 0 === e || e.disconnect(), (l.current = null);
                            }
                        );
                }, [n, a, i]),
                {
                    observePostVisibilityAnalytics: r.useCallback(
                        (e, t) => {
                            var i;
                            if (null == e) {
                                (0, G.Ct)(n, t, Date.now());
                                return;
                            }
                            null === (i = l.current) || void 0 === i || i.observe(e);
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
        ei = L === h.X.GRID,
        eu = null != v,
        ex = r.useRef(null),
        { containerRef: eC, containerWidth: eN } = (0, er.Z)();
    r.useEffect(
        () => () => {
            null != t.id && D.Z.clearForumSearch(t.id);
        },
        [t.id]
    );
    let { columns: eI } = r.useMemo(() => (ei ? em.getRenderOptions(eN) : en.eU), [ei, eN]),
        eS = r.useMemo(() => (R ? Math.round((window.innerHeight - 200) / 118) : 0), [R]),
        ew = r.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(em.getWidth(eN))) * eI;
            return j ? e : 0;
        }, [eN, eI, j]),
        ey = r.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(em.getWidth(eN))) * eI;
            return N ? e : 0;
        }, [eN, eI, N]),
        eE = r.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(em.getWidth(eN))) * eI;
            return A && eu ? e : 0;
        }, [eN, eI, A, eu]),
        eR = r.useMemo(() => {
            if (ei) return !K && eu ? [1, 0] : Q ? (eu ? [1, v.length + eE, 0] : [1, m.length + ew, x.length + ey]) : [1, m.length + ew, 0];
            return !K && eu ? [1, 1] : Q ? (eu ? [1, v.length, 0, eS] : [1, m.length, x.length, eS]) : [1, m.length, 1];
        }, [ei, eu, m.length, x.length, K, Q, eS, v, ew, ey, eE]),
        eP = r.useMemo(() => (!K && eu ? [[], []] : Q ? (eu ? [[], v, [], []] : [[], m, x, []]) : [[], m, []]), [eu, K, Q, v, m, x]),
        ek = r.useCallback(
            (e, n) => {
                (0, q.B5)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: {
                        page: es.ZY5.GUILD_CHANNEL,
                        section: es.jXE.FORUM_CHANNEL_POST
                    }
                }),
                    n ? (0, w.ad)(e, { source: eo.on.BROWSER }) : ((ex.current = e.id), (0, P.ok)(e));
            },
            [t.guild_id, t.id, ex]
        ),
        [eZ, eM] = r.useState(l + s - 24),
        eA = r.useCallback(
            (e, n, r) =>
                0 === e
                    ? (0, i.jsx)(
                          eT,
                          {
                              channel: t,
                              isEmpty: !F,
                              isSearchLoading: A,
                              numResults: null == v ? void 0 : v.length,
                              coords: n,
                              onHeightChange: eM,
                              children:
                                  !R &&
                                  (0, i.jsx)(
                                      X.Z,
                                      {
                                          channel: t,
                                          hasAnyThread: O
                                      },
                                      t.id
                                  )
                          },
                          'forum-channel-header'
                      )
                    : 2 !== e || Q
                      ? 1 === e && eu && !K
                          ? (0, i.jsx)(
                                eb,
                                {
                                    channel: t,
                                    coords: n
                                },
                                'archive-or-search-result'
                            )
                          : r()
                      : (0, i.jsx)(
                            e_,
                            {
                                channel: t,
                                coords: n
                            },
                            'archived-missing-reading-history-perm'
                        ),
            [eu, Q, v, K, t, F, A, R, O]
        ),
        eL = (0, g.e7)([z.Z], () => z.Z.hasHidden(t.id)),
        eF = {
            editorHeight: l,
            isGridLayout: ei
        },
        eO = r.useRef(eF);
    r.useEffect(() => {
        eO.current = eF;
    }),
        r.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: i } = eO.current,
                r = i ? eV : ee,
                l = null === (e = r.current) || void 0 === e ? void 0 : e.getScrollerState();
            null != l && !eL && l.scrollTop > n && (null === (t = r.current) || void 0 === t || t.scrollTo({ to: 0 }));
        }, [eL]);
    let {
            updateListScrollerRef: ez,
            renderListSection: eD,
            renderListItem: eB,
            getListSectionHeight: eH,
            getListItemHeight: eU
        } = (function (e) {
            let { listRef: t, hasActiveThreads: n, threadIdsBySection: l, listViewCardHeights: s, editorHeight: o, editorAdditionRowHeight: c, renderSectionOrItem: d, goToThread: u, observePostVisibilityAnalytics: m, isShowingSearchResult: h } = e,
                g = r.useCallback(
                    (e) => (n) => {
                        var i;
                        (t.current = n), (e.current = null !== (i = null == n ? void 0 : n.getScrollerNode()) && void 0 !== i ? i : null);
                    },
                    [t]
                ),
                x = r.useCallback(
                    (e) =>
                        ef({
                            section: e.section,
                            isShowingSearchResult: h,
                            hasActiveThreads: n
                        })(),
                    [n, h]
                ),
                p = r.useCallback(
                    (e) =>
                        d(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, i.jsx)(
                                          'div',
                                          {
                                              'data-item-role': 'item',
                                              className: a()(ed.loadingCard, ed['loadingCard-'.concat(e.row % 3)])
                                          },
                                          'loading-'.concat(e.row)
                                      );
                            let t = l[e.section][e.row];
                            return (0, i.jsx)(
                                'li',
                                {
                                    className: ed.card,
                                    'data-item-role': 'item',
                                    children: (0, i.jsx)(f.y5t, {
                                        children: (0, i.jsx)(J.ZP, {
                                            className: ed.mainCard,
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
                v = r.useCallback(
                    (e, t) => {
                        if (0 === e) return o + c;
                        let n = s[l[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [l, s, o, c]
                );
            return {
                updateListScrollerRef: g,
                renderListSection: x,
                renderListItem: p,
                getListSectionHeight: r.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: v
            };
        })({
            listRef: ee,
            hasActiveThreads: F,
            threadIdsBySection: eP,
            listViewCardHeights: o,
            editorHeight: l,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eA,
            goToThread: ek,
            observePostVisibilityAnalytics: et,
            isShowingSearchResult: eu
        }),
        eV = r.useRef(null),
        {
            updateMasonryListScrollerRef: eG,
            getItemKey: eq,
            renderGridSection: eX,
            renderGridItem: eW,
            getGridSectionHeight: eK,
            getSectionProps: eJ,
            handleGridFocus: eY
        } = (function (e) {
            let { masonryListScrollerRef: t, threadIdsBySection: n, goToThread: l, renderSectionOrItem: s, hasActiveThreads: o, isShowingSearchResult: c, canSearchForumPosts: d, canViewArchivedPosts: u, observePostVisibilityAnalytics: m, focusedThreadId: h, headerHeight: g } = e,
                x = r.useRef(null),
                f = r.useCallback(
                    (e) => {
                        (t.current = e), (x.current = null == e ? void 0 : e.getScrollerNode());
                    },
                    [t]
                ),
                p = r.useCallback(
                    (e, n) => {
                        let { current: i } = t;
                        if (null == i) return;
                        let r = document.querySelector(e);
                        if (null == r) return;
                        let l = i.getCoordsMap()[n],
                            a = null != l ? l.height + 20 : 200;
                        i.scrollIntoViewNode({
                            node: r,
                            padding: a,
                            callback() {
                                requestAnimationFrame(() => {
                                    var t;
                                    null === (t = document.querySelector(e)) || void 0 === t || t.focus({ preventScroll: !0 });
                                });
                            }
                        }),
                            (h.current = ev(n));
                    },
                    [t, h]
                ),
                v = r.useCallback(
                    (e) => {
                        let t = ev(e);
                        if (null == t) return;
                        let n = Z.Z.getChannel(t);
                        null != n && l(n, !0);
                    },
                    [l]
                ),
                C = r.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return 'section-'.concat(e, '-').concat(t);
                        {
                            let i = n[e][t];
                            return null == i ? ep(e, t) : ep(e, i);
                        }
                    },
                    [n]
                ),
                _ = r.useCallback(
                    (e, t, n) =>
                        s(
                            e,
                            t,
                            ef({
                                section: e,
                                coords: t,
                                key: n,
                                isShowingSearchResult: c,
                                hasActiveThreads: o
                            })
                        ),
                    [s, o, c]
                ),
                b = r.useCallback(
                    (e) =>
                        0 === e
                            ? {}
                            : {
                                  role: 'grid',
                                  'aria-labelledby': '#'.concat(eh(e))
                              },
                    []
                );
            return {
                updateMasonryListScrollerRef: f,
                masonryListContainerRef: x,
                focusedThreadId: h,
                handleGridFocus: p,
                handleGridSelect: v,
                getItemKey: C,
                renderGridSection: _,
                renderGridItem: r.useCallback(
                    (e, t, r, s, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, i.jsx)(
                                  $.Z,
                                  {
                                      id: ''.concat(s),
                                      threadId: c,
                                      className: a()(ed.card, ed.mainCard),
                                      goToThread: l,
                                      observePostVisibilityAnalytics: m,
                                      coords: r,
                                      gridCoords: o.coordinates[s],
                                      gridSectionBoundaries: o.boundaries
                                  },
                                  s
                              )
                            : __OVERLAY__
                              ? null
                              : (0, i.jsx)(
                                    'div',
                                    {
                                        style: { ...r },
                                        'data-item-role': 'item',
                                        className: a()(ed.loadingCard, ed['loadingCard-'.concat(t % 3)])
                                    },
                                    s
                                );
                    },
                    [n, l, m]
                ),
                getSectionProps: b,
                getGridSectionHeight: r.useCallback((e) => (0 === e ? g - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0), [g, c, d, o, u])
            };
        })({
            masonryListScrollerRef: eV,
            threadIdsBySection: eP,
            goToThread: ek,
            renderSectionOrItem: eA,
            hasActiveThreads: F,
            isShowingSearchResult: eu,
            canSearchForumPosts: K,
            canViewArchivedPosts: Q,
            observePostVisibilityAnalytics: et,
            focusedThreadId: ex,
            headerHeight: eZ
        });
    !(function (e) {
        let { masonryListScrollerRef: t, containerWidth: n, isGridLayout: i, threadIdsBySection: l, focusedThreadId: a, parentId: s } = e;
        r.useEffect(() => {
            if (i) {
                let e = setTimeout(() => {
                    if (null == t.current || null == a.current) return;
                    let e = a.current;
                    if ('string' != typeof e) return;
                    if (null == k.ZP.getSidebarState(s)) {
                        a.current = null;
                        return;
                    }
                    let n = l.findIndex((t) => t.find((t) => t === e)),
                        i = t.current.getCoordsMap(),
                        r = i['__section__'.concat(n)],
                        o = i[ep(n, e)];
                    null != r &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: r.top + o.top - 100,
                            end: r.top + o.top + o.height + 50
                        });
                }, 500);
                return () => clearTimeout(e);
            }
        }, [s, n, i, l, a, t]);
    })({
        masonryListScrollerRef: eV,
        containerWidth: eN,
        isGridLayout: ei,
        threadIdsBySection: eP,
        parentId: t.id,
        focusedThreadId: ex
    });
    let eQ = r.useCallback(() => {
            var e, n;
            if (eu) return;
            let i = ei ? (null === (e = eV.current) || void 0 === e ? void 0 : e.getScrollerState()) : null === (n = ee.current) || void 0 === n ? void 0 : n.getScrollerState();
            if (null == i) return;
            (0, q.ab)({
                guildId: t.guild_id,
                channelId: t.id
            });
            let r = i.scrollTop + i.offsetHeight;
            i.scrollHeight - r < (ei ? Math.max(200, (0, en.KW)(eN)) : 200) && b();
        }, [eu, ei, t.guild_id, t.id, eN, b]),
        e$ = (0, g.e7)([C.Z], () => C.Z.keyboardModeEnabled),
        e0 = (0, el.ZP)({
            id: 'forum-grid-view',
            isEnabled: ei && e$,
            setFocus: eY
        }),
        e3 = (0, ea.Z)({
            listRef: ee,
            padding: 96,
            isEnabled: !ei && e$,
            channel: t
        }),
        { ref: e1, ...e9 } = e0.containerProps,
        e6 = k.ZP.getSidebarState(t.id),
        e8 = null != e6 && (0, k.D5)(e6),
        e4 = (0, g.e7)([k.ZP], () => k.ZP.getSection(t.id)) === es.ULH.MEMBERS;
    return (0, i.jsx)('div', {
        className: ed.container,
        ref: eC,
        'data-member-list-open': e4,
        children: (0, i.jsx)(f.Wdt, {
            children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        u &&
                            (0, i.jsx)(p.Z, {
                                channel: t,
                                draftType: M.d.FirstThreadMessage,
                                className: ed.uploadArea,
                                style: { right: e8 && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0 }
                            }),
                        (0, i.jsx)(ej, { channel: t }),
                        (0, i.jsx)(f.nn4, { children: (0, i.jsx)(f.H, { children: ec.intl.string(ec.t.B2panJ) }) }),
                        B
                            ? (0, i.jsx)('div', {
                                  className: ed.optInNotice,
                                  children: (0, i.jsx)(S.Z, { channel: t })
                              })
                            : null,
                        ei
                            ? (0, i.jsx)(el.KT, {
                                  navigator: e0,
                                  children: (0, i.jsx)(
                                      f.GMG,
                                      {
                                          ref: (e) => {
                                              var t;
                                              (e1.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null), eG(e);
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: ed.grid,
                                          columns: eI,
                                          sections: eR,
                                          getItemKey: eq,
                                          getSectionHeight: eK,
                                          getItemHeight: eg,
                                          renderSection: eX,
                                          renderItem: eW,
                                          getSectionProps: eJ,
                                          onScroll: _ ? eQ : void 0,
                                          chunkSize: 350,
                                          ...e9,
                                          ...e
                                      },
                                      L
                                  )
                              })
                            : (0, i.jsx)(d.bG, {
                                  navigator: e3,
                                  children: (0, i.jsx)(d.SJ, {
                                      children: (t) => {
                                          let { ref: n, ...r } = t;
                                          return (0, i.jsx)(
                                              f._2F,
                                              {
                                                  ref: ez(n),
                                                  className: ed.list,
                                                  sections: eR,
                                                  sectionHeight: eH,
                                                  rowHeight: eU,
                                                  renderRow: eB,
                                                  renderSection: eD,
                                                  chunkSize: 150,
                                                  onScroll: _ ? eQ : void 0,
                                                  paddingBottom: 24,
                                                  ...r,
                                                  ...e,
                                                  innerRole: 'list'
                                              },
                                              L
                                          );
                                      }
                                  })
                              })
                    ]
                })
        })
    });
}
function e_(e) {
    let { channel: t, coords: n } = e,
        r = (0, _.ZP)(t);
    return (0, i.jsx)('div', {
        className: a()(ed.missingReadHistoryPermission, ed.columnsSpan),
        style: n,
        children: (0, i.jsx)(f.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ec.intl.format(ec.t.TycmzM, { channelName: r })
        })
    });
}
function eb(e) {
    let { channel: t, coords: n } = e,
        r = (0, _.ZP)(t);
    return (0, i.jsx)('div', {
        className: a()(ed.missingReadHistoryPermission, ed.columnsSpan),
        style: n,
        children: (0, i.jsx)(f.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ec.intl.format(ec.t.OWZJdX, { channelName: r })
        })
    });
}
function ej(e) {
    let { channel: t } = e,
        n = r.useCallback(() => {
            D.Z.resort(t.id);
        }, [t]),
        l = (0, g.e7)([B.Z], () => B.Z.getNewThreadCount());
    return 0 === l
        ? null
        : (0, i.jsx)(f.P3F, {
              className: ed.newPostsButton,
              onClick: n,
              children: (0, i.jsx)(f.Text, {
                  color: 'text-brand',
                  variant: 'text-md/medium',
                  children: ec.intl.format(ec.t.ue1qfH, { count: l })
              })
          });
}
function eN() {
    return Promise.resolve();
}
function eT(e) {
    var t, n, l;
    let { channel: s, isEmpty: p, isSearchLoading: _, numResults: T, children: I, coords: S, onHeightChange: w } = e,
        {
            name: y,
            formOpen: E,
            titleFocused: P,
            hasClickedForm: k,
            textAreaState: Z,
            onboardingExpanded: z,
            setEditorAdditionRowHeight: B
        } = (0, Y.xH)((e) => {
            let { name: t, formOpen: n, titleFocused: i, hasClickedForm: r, textAreaState: l, onboardingExpanded: a, setEditorAdditionRowHeight: s } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: i,
                hasClickedForm: r,
                textAreaState: l,
                onboardingExpanded: a,
                setEditorAdditionRowHeight: s
            };
        }, c.X),
        { tagFilter: V, layoutType: G } = (0, H.H)(s.id),
        X = (0, Y.AF)(),
        J = (0, H.v)(),
        $ = (0, g.e7)([A.Z], () => A.Z.canChatInGuild(s.guild_id)),
        ee = (0, U.r_)(s),
        en = (0, R.cD)(s),
        [er, el] = r.useState(en),
        [, ea] = (0, j.AB)(null !== (l = s.getGuildId()) && void 0 !== l ? l : void 0),
        eo = $ && (en || (er && ea)),
        eu = s.isMediaChannel();
    r.useEffect(() => {
        en && el(!0);
    }, [en]);
    let { ref: em, height: eh } = (0, v.Z)();
    r.useEffect(() => {
        null != eh && w(eh);
    }, [w, eh]);
    let eg = r.useCallback(() => {
        o()(() => {
            null != em.current && X.getState().setEditorHeight(em.current.offsetHeight);
        });
    }, [em, X]);
    r.useLayoutEffect(eg, [eg, p, eo, z]),
        (0, O.yp)({
            event: es.CkL.REMEASURE_TARGET,
            handler: eg
        });
    let ex = (0, g.e7)([L.Z], () => L.Z.getUploads(s.id, M.d.FirstThreadMessage)),
        ef = (0, U.ql)(s),
        ep = r.useRef(null),
        ev = r.useRef(null),
        [eC, e_] = r.useState(0),
        { width: eb } = (0, g.e7)([F.Z], () => F.Z.windowSize()),
        ej = null === (n = ep.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.width,
        eT = r.useRef(null);
    r.useLayoutEffect(() => {
        var e;
        let t = ev.current,
            n = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0];
        if (null != ep.current && null != n && null != n.children) {
            let { left: e, top: t } = ep.current.getBoundingClientRect(),
                i = 0;
            for (let r of n.children) {
                let { right: n, top: l, height: a } = r.getBoundingClientRect();
                if (l - t > a) break;
                n - e > i && (i = n - e);
            }
            e_(i);
        }
    }, [s.availableTags, eb, ej, V]);
    let eS = y.length > 0 && !E && (_ || null != T),
        ew = !__OVERLAY__ && !k && !E && P && (0 === Z.textValue.trim().length || Z.textValue.trim() === ef) && 0 === ex.length;
    r.useLayoutEffect(() => {
        let e = eS || ew;
        if (!e) return B(0);
        null != eT.current && B(e ? eT.current.clientHeight : 0);
    }, [B, eS, ew, eT]);
    let ey = (e) => {
            (0, q.e7)({
                guildId: s.guild_id,
                channelId: s.id,
                tagId: e,
                filterTagIds: Array.from(V),
                added: !V.has(e),
                location: {
                    page: es.ZY5.GUILD_CHANNEL,
                    section: es.jXE.FORUM_CHANNEL_HEADER,
                    object: es.qAy.CHANNEL_TAG
                }
            }),
                J.getState().toggleTagFilter(s.id, e);
        },
        eE = (0, u.ZP)({
            id: ''.concat(s.id, '-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eN,
            scrollToEnd: eN,
            orientation: m.hy.HORIZONTAL
        }),
        { role: eR, onFocus: eP, ...ek } = (0, d.JA)('forum-channel-header'),
        eZ = r.useRef(null),
        eM = (function () {
            let e = r.useRef(!1),
                t = (0, g.e7)([C.Z], () => C.Z.keyboardModeEnabled),
                n = r.useCallback(
                    (t) => {
                        e.current = t.shiftKey;
                    },
                    [e]
                );
            return r.useLayoutEffect(() => (t ? window.addEventListener('keydown', n) : window.removeEventListener('keydown', n), () => window.removeEventListener('keydown', n)), [t, n]), e;
        })(),
        eA = r.useCallback(
            (e) => {
                if ((eP(), e.target === em.current && !eM.current)) {
                    var t;
                    null === (t = eZ.current) || void 0 === t || t.focus();
                }
            },
            [eP, em, eM]
        );
    return (0, i.jsx)(
        'div',
        {
            className: a()(ed.card, ed.headerRow, ed.columnsSpan),
            ref: em,
            onFocus: eA,
            ...ek,
            style: {
                ...S,
                position: G === h.X.GRID ? 'absolute' : 'static',
                height: 'auto'
            },
            children: (0, i.jsxs)(O.I3, {
                children: [
                    null != s.guild_id
                        ? (0, i.jsx)(N.Z, {
                              className: a()(ed.newMemberBanner, { [ed.gridViewBanner]: G === h.X.GRID }),
                              guildId: s.guild_id,
                              channel: s
                          })
                        : null,
                    (0, i.jsx)('div', {
                        className: a()(ed.mainCard, ed.header, { [ed.headerWithMatchingPosts]: eS || ew }),
                        children: (0, i.jsx)(Q.Z, {
                            parentChannel: s,
                            onChange: eg,
                            isSearchLoading: _,
                            canCreatePost: eo,
                            inputRef: eZ
                        })
                    }),
                    (eS || ew) &&
                        (0, i.jsxs)('div', {
                            className: ed.matchingPostsRow,
                            ref: eT,
                            children: [
                                eS &&
                                    (0, i.jsxs)('div', {
                                        className: ed.matchingPosts,
                                        children: [
                                            (0, i.jsx)(f.X6q, {
                                                variant: 'text-xs/normal',
                                                color: 'text-normal',
                                                children: _
                                                    ? ec.intl.string(ec.t['/9i3qq'])
                                                    : 0 === T
                                                      ? ec.intl.string(ec.t.DbgHxs)
                                                      : ec.intl.formatToPlainString(ec.t['tBz/8f'], {
                                                            numPosts: T,
                                                            query: y
                                                        })
                                            }),
                                            !_ &&
                                                (0, i.jsx)(f.P3F, {
                                                    onClick: () => {
                                                        (0, q.zI)({
                                                            guildId: s.guild_id,
                                                            channelId: s.id
                                                        }),
                                                            D.Z.clearForumSearch(s.id),
                                                            X.getState().setName('');
                                                    },
                                                    children: (0, i.jsx)(f.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'text-brand',
                                                        className: ed.clear,
                                                        children: ec.intl.string(ec.t.VkKicX)
                                                    })
                                                })
                                        ]
                                    }),
                                (0, i.jsx)('div', { className: ed.tagsSpacer }),
                                ew
                                    ? eo
                                        ? (0, i.jsxs)('div', {
                                              className: ed.startPostHelp,
                                              children: [
                                                  (0, i.jsx)(f.M2$, {
                                                      shortcut: 'SHIFT',
                                                      className: ed.keyboardShortcut
                                                  }),
                                                  (0, i.jsx)(f.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: '+'
                                                  }),
                                                  (0, i.jsx)(f.M2$, {
                                                      shortcut: 'ENTER',
                                                      className: ed.keyboardShortcut
                                                  }),
                                                  (0, i.jsx)(f.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: ec.intl.string(ec.t.ZvJ0ys)
                                                  })
                                              ]
                                          })
                                        : (0, i.jsxs)('div', {
                                              className: ed.startPostHelp,
                                              children: [
                                                  (0, i.jsx)(f.P4T, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      height: 14,
                                                      width: 14,
                                                      className: ed.warnIcon
                                                  }),
                                                  (0, i.jsx)(f.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: ec.intl.string(ec.t.iyzwnJ)
                                                  })
                                              ]
                                          })
                                    : null
                            ]
                        }),
                    (0, i.jsx)(W.Z, {
                        channel: s,
                        onChange: eg
                    }),
                    (0, i.jsxs)('div', {
                        className: ed.tagsContainer,
                        ref: ep,
                        children: [
                            (0, i.jsx)(eI, { channel: s }),
                            s.availableTags.length > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)('div', { className: ed.divider }),
                                          (0, i.jsx)('div', {
                                              className: ed.tagList,
                                              ref: ev,
                                              children: (0, i.jsx)(d.bG, {
                                                  navigator: eE,
                                                  children: (0, i.jsx)(d.SJ, {
                                                      children: (e) => {
                                                          let { ref: t, ...n } = e;
                                                          return (0, i.jsx)('div', {
                                                              className: ed.tagListInner,
                                                              ref: t,
                                                              ...n,
                                                              children: s.availableTags.map((e) =>
                                                                  (0, i.jsx)(
                                                                      et.Z,
                                                                      {
                                                                          className: ed.tag,
                                                                          tag: e,
                                                                          onClick: () => ey(e.id),
                                                                          selected: V.has(e.id)
                                                                      },
                                                                      e.id
                                                                  )
                                                              )
                                                          });
                                                      }
                                                  })
                                              })
                                          }),
                                          (0, i.jsx)(f.yRy, {
                                              renderPopout: (e) => {
                                                  let { closePopout: t, setPopoutRef: n } = e;
                                                  return (0, i.jsx)(ei.Z, {
                                                      channel: s,
                                                      closePopout: t,
                                                      setPopoutRef: n
                                                  });
                                              },
                                              position: 'bottom',
                                              align: 'right',
                                              children: (e, t) => {
                                                  let { isShown: n } = t;
                                                  return (0, i.jsxs)(f.zxk, {
                                                      ...e,
                                                      size: f.zxk.Sizes.MIN,
                                                      color: f.zxk.Colors.CUSTOM,
                                                      className: a()(ed.tagsButton, { [ed.tagsButtonWithCount]: V.size > 0 }),
                                                      style: { left: eC },
                                                      innerClassName: ed.tagsButtonInner,
                                                      'aria-label': V.size > 0 ? ec.intl.string(ec.t.IkpM1d) : ec.intl.string(ec.t['9vKK/P']),
                                                      children: [
                                                          V.size > 0
                                                              ? (0, i.jsx)('div', {
                                                                    className: ed.countContainer,
                                                                    children: (0, i.jsx)(f.Text, {
                                                                        className: ed.countText,
                                                                        color: 'none',
                                                                        variant: 'text-xs/medium',
                                                                        children: V.size
                                                                    })
                                                                })
                                                              : ec.intl.string(ec.t.fZ8hzs),
                                                          n
                                                              ? (0, i.jsx)(f.u04, {
                                                                    size: 'custom',
                                                                    color: 'currentColor',
                                                                    width: 20
                                                                })
                                                              : (0, i.jsx)(f.CJ0, {
                                                                    size: 'custom',
                                                                    color: 'currentColor',
                                                                    width: 20
                                                                })
                                                      ]
                                                  });
                                              }
                                          }),
                                          (0, i.jsxs)(f.zxk, {
                                              size: f.zxk.Sizes.MIN,
                                              color: f.zxk.Colors.CUSTOM,
                                              className: a()(ed.tagsButton, ed.tagsButtonPlaceholder),
                                              innerClassName: ed.tagsButtonInner,
                                              'aria-label': ec.intl.string(ec.t.IkpM1d),
                                              children: [
                                                  V.size > 0
                                                      ? (0, i.jsx)('div', {
                                                            className: ed.countContainer,
                                                            children: (0, i.jsx)(f.Text, {
                                                                className: ed.countText,
                                                                color: 'none',
                                                                variant: 'text-xs/medium',
                                                                children: V.size
                                                            })
                                                        })
                                                      : null,
                                                  (0, i.jsx)(f.u04, {
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
                    I,
                    ee &&
                        !eu &&
                        (0, i.jsx)(b.ZP, {
                            contentTypes: [x.z.FORUM_CHANNEL_HELPER_CARD],
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return t === x.z.FORUM_CHANNEL_HELPER_CARD ? (0, i.jsx)(K.Z, { onDismiss: n }) : null;
                            }
                        })
                ]
            })
        },
        'create-form'
    );
}
function eI(e) {
    let { channel: t } = e,
        n = t.isMediaChannel();
    return (0, i.jsx)(f.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(ee.Z, {
                channel: t,
                closePopout: n
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: r } = t;
            return (0, i.jsxs)(f.zxk, {
                ...e,
                size: f.zxk.Sizes.MIN,
                color: f.zxk.Colors.CUSTOM,
                className: ed.sortDropdown,
                innerClassName: ed.sortDropdownInner,
                'aria-label': n ? ec.intl.string(ec.t.JxU0ws) : ec.intl.string(ec.t.xyYt8P),
                children: [
                    (0, i.jsx)(f.uVW, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    (0, i.jsx)(f.Text, {
                        className: ed.sortDropdownText,
                        variant: 'text-sm/medium',
                        color: 'interactive-normal',
                        children: n ? ec.intl.string(ec.t.JxU0ws) : ec.intl.string(ec.t.xyYt8P)
                    }),
                    r
                        ? (0, i.jsx)(f.u04, {
                              size: 'custom',
                              color: 'currentColor',
                              width: 20
                          })
                        : (0, i.jsx)(f.CJ0, {
                              size: 'custom',
                              color: 'currentColor',
                              width: 20
                          })
                ]
            });
        }
    });
}
