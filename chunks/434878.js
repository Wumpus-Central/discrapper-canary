n.r(t),
    n.d(t, {
        default: function () {
            return eu;
        }
    }),
    n(47120);
var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
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
    C = n(393238),
    v = n(607070),
    b = n(933557),
    j = n(243778),
    _ = n(71619),
    I = n(898188),
    T = n(41776),
    N = n(256413),
    S = n(292853),
    w = n(359110),
    y = n(344185),
    E = n(235449),
    R = n(665906),
    P = n(488131),
    M = n(433355),
    k = n(592125),
    Z = n(703558),
    A = n(607744),
    L = n(117530),
    F = n(451478),
    O = n(459273),
    B = n(961675),
    z = n(883429),
    H = n(238349),
    D = n(109434),
    U = n(456269),
    V = n(90372),
    G = n(985518),
    W = n(228392),
    q = n(355589),
    X = n(542581),
    K = n(639184),
    J = n(404616),
    Y = n(470623),
    Q = n(749913),
    $ = n(219664),
    ee = n(895932),
    et = n(479099),
    en = n(510060),
    ea = n(276357),
    ei = n(81490),
    er = n(482062),
    el = n(260503),
    es = n(981631),
    eo = n(124368),
    ec = n(388032),
    ed = n(444087);
function eu(e) {
    let { channel: t, guild: n, sidebarState: i } = e;
    return (0, a.jsx)(
        Y.oL,
        {
            channel: t,
            children: (0, a.jsx)(ev, {
                channel: t,
                guild: n,
                sidebarState: i
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
    let { itemRole: t, coords: n, section: i } = e;
    return (0, a.jsx)(
        'div',
        {
            className: l()(ed.card, ed.archivedDividerRow, ed.columnsSpan),
            style: n,
            'data-item-role': t,
            children: (0, a.jsx)('div', {
                className: ed.emptyMainCard,
                children: (0, a.jsx)(f.Heading, {
                    variant: 'eyebrow',
                    className: ed.archivedDivider,
                    id: eh(i),
                    children: ec.intl.string(ec.t['3+LO19'])
                })
            })
        },
        'section-divider'
    );
}
function ef(e) {
    let { section: t, coords: n, key: i, isShowingSearchResult: r, hasActiveThreads: l } = e;
    return () =>
        2 === t && !r && l
            ? (0, a.jsx)(
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
                  i
              )
            : null;
}
function ep(e, t) {
    return 'card-'.concat(e, '-').concat(t);
}
function eC(e) {
    if ('string' == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function ev(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: r,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: u
        } = (0, Y.xH)((e) => {
            let { editorHeight: t, editorAdditionRowHeight: n, listViewCardHeights: a, formOpen: i, cardHeightVersion: r } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: a,
                formOpen: i,
                cardHeightVersion: r
            };
        }, c.X),
        {
            activeThreadIds: m,
            archivedThreadIds: x,
            searchResults: C,
            canLoadMore: b,
            loadMore: j,
            activeThreadsLoading: _,
            archivedThreadsLoading: I,
            loading: R,
            isSearchLoading: A,
            layoutType: L
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: a } = (0, D.H)(e.id),
                i = (0, U.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    shouldAutomaticallyAck: !0
                }),
                r = (0, g.e7)([y.Z, T.Z], () => {
                    let t = y.Z.hasLoaded(e.guild_id),
                        n = T.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: l, canLoadMore: s, loadMore: o, loading: c } = (0, E.qQ)(e, t, n),
                { searchResults: d, isSearchLoading: u } = (0, U.XZ)({ channelId: e.id });
            return (
                (0, U.ES)(e, t, n),
                {
                    activeThreadIds: i,
                    archivedThreadIds: l,
                    searchResults: d,
                    canLoadMore: s,
                    loadMore: o,
                    loading: r || c || u,
                    archivedThreadsLoading: c,
                    activeThreadsLoading: r,
                    isSearchLoading: u,
                    layoutType: a
                }
            );
        })(t),
        F = m.length > 0,
        O = F || x.length > 0,
        H = (0, N.Z)(t),
        { tagFilter: X } = (0, D.H)(t.id);
    (0, U.ku)(t, X, u);
    let K = (0, U.jR)(t),
        Q = (0, U.eZ)(t),
        ee = i.useRef(null),
        { observePostVisibilityAnalytics: et } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: a } = e;
            V.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n
            });
            let r = i.useRef(null),
                l = i.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let a = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, G.rj)(e, t, a) : (0, G.Ct)(e, t, a);
                    }
                }, []);
            return (
                i.useEffect(() => {
                    var e;
                    let t = null === (e = a.current) || void 0 === e ? void 0 : e.getScrollerNode();
                    if (null != t)
                        return (
                            (r.current = new IntersectionObserver((e) => l(n, e), {
                                root: t,
                                rootMargin: '0px 100000px 0px 100000px',
                                threshold: 0.5
                            })),
                            () => {
                                var e;
                                null === (e = r.current) || void 0 === e || e.disconnect(), (r.current = null);
                            }
                        );
                }, [n, l, a]),
                {
                    observePostVisibilityAnalytics: i.useCallback(
                        (e, t) => {
                            var a;
                            if (null == e) {
                                (0, G.Ct)(n, t, Date.now());
                                return;
                            }
                            null === (a = r.current) || void 0 === a || a.observe(e);
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
        ea = L === h.X.GRID,
        eu = null != C,
        ex = i.useRef(null),
        { containerRef: ev, containerWidth: eI } = (0, ei.Z)();
    i.useEffect(
        () => () => {
            null != t.id && z.Z.clearForumSearch(t.id);
        },
        [t.id]
    );
    let { columns: eN } = i.useMemo(() => (ea ? em.getRenderOptions(eI) : en.eU), [ea, eI]),
        eS = i.useMemo(() => (R ? Math.round((window.innerHeight - 200) / 118) : 0), [R]),
        ew = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(em.getWidth(eI))) * eN;
            return _ ? e : 0;
        }, [eI, eN, _]),
        ey = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(em.getWidth(eI))) * eN;
            return I ? e : 0;
        }, [eI, eN, I]),
        eE = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(em.getWidth(eI))) * eN;
            return A && eu ? e : 0;
        }, [eI, eN, A, eu]),
        eR = i.useMemo(() => {
            if (ea) {
                if (!K && eu) return [1, 0];
                if (!Q) return [1, m.length + ew, 0];
                else if (eu) return [1, C.length + eE, 0];
                else return [1, m.length + ew, x.length + ey];
            }
            if (!K && eu) return [1, 1];
            if (!Q) return [1, m.length, 1];
            else if (eu) return [1, C.length, 0, eS];
            else return [1, m.length, x.length, eS];
        }, [ea, eu, m.length, x.length, K, Q, eS, C, ew, ey, eE]),
        eP = i.useMemo(() => {
            if (!K && eu) return [[], []];
            if (!Q) return [[], m, []];
            if (eu) return [[], C, [], []];
            else return [[], m, x, []];
        }, [eu, K, Q, C, m, x]),
        eM = i.useCallback(
            (e, n) => {
                (0, W.B5)({
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
        [ek, eZ] = i.useState(r + s - 24),
        eA = i.useCallback(
            (e, n, i) =>
                0 === e
                    ? (0, a.jsx)(
                          eT,
                          {
                              channel: t,
                              isEmpty: !F,
                              isSearchLoading: A,
                              numResults: null == C ? void 0 : C.length,
                              coords: n,
                              onHeightChange: eZ,
                              children:
                                  !R &&
                                  (0, a.jsx)(
                                      q.Z,
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
                          ? (0, a.jsx)(
                                ej,
                                {
                                    channel: t,
                                    coords: n
                                },
                                'archive-or-search-result'
                            )
                          : i()
                      : (0, a.jsx)(
                            eb,
                            {
                                channel: t,
                                coords: n
                            },
                            'archived-missing-reading-history-perm'
                        ),
            [eu, Q, C, K, t, F, A, R, O]
        ),
        eL = (0, g.e7)([B.Z], () => B.Z.hasHidden(t.id)),
        eF = {
            editorHeight: r,
            isGridLayout: ea
        },
        eO = i.useRef(eF);
    i.useEffect(() => {
        eO.current = eF;
    }),
        i.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: a } = eO.current,
                i = a ? eV : ee,
                r = null === (e = i.current) || void 0 === e ? void 0 : e.getScrollerState();
            null != r && !eL && r.scrollTop > n && (null === (t = i.current) || void 0 === t || t.scrollTo({ to: 0 }));
        }, [eL]);
    let {
            updateListScrollerRef: eB,
            renderListSection: ez,
            renderListItem: eH,
            getListSectionHeight: eD,
            getListItemHeight: eU
        } = (function (e) {
            let { listRef: t, hasActiveThreads: n, threadIdsBySection: r, listViewCardHeights: s, editorHeight: o, editorAdditionRowHeight: c, renderSectionOrItem: d, goToThread: u, observePostVisibilityAnalytics: m, isShowingSearchResult: h } = e,
                g = i.useCallback(
                    (e) => (n) => {
                        var a;
                        (t.current = n), (e.current = null !== (a = null == n ? void 0 : n.getScrollerNode()) && void 0 !== a ? a : null);
                    },
                    [t]
                ),
                x = i.useCallback(
                    (e) =>
                        ef({
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
                                    : (0, a.jsx)(
                                          'div',
                                          {
                                              'data-item-role': 'item',
                                              className: l()(ed.loadingCard, ed['loadingCard-'.concat(e.row % 3)])
                                          },
                                          'loading-'.concat(e.row)
                                      );
                            let t = r[e.section][e.row];
                            return (0, a.jsx)(
                                'li',
                                {
                                    className: ed.card,
                                    'data-item-role': 'item',
                                    children: (0, a.jsx)(f.HeadingLevel, {
                                        children: (0, a.jsx)(J.ZP, {
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
                    [d, r, u, m]
                ),
                C = i.useCallback(
                    (e, t) => {
                        if (0 === e) return o + c;
                        let n = s[r[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [r, s, o, c]
                );
            return {
                updateListScrollerRef: g,
                renderListSection: x,
                renderListItem: p,
                getListSectionHeight: i.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: C
            };
        })({
            listRef: ee,
            hasActiveThreads: F,
            threadIdsBySection: eP,
            listViewCardHeights: o,
            editorHeight: r,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eA,
            goToThread: eM,
            observePostVisibilityAnalytics: et,
            isShowingSearchResult: eu
        }),
        eV = i.useRef(null),
        {
            updateMasonryListScrollerRef: eG,
            getItemKey: eW,
            renderGridSection: eq,
            renderGridItem: eX,
            getGridSectionHeight: eK,
            getSectionProps: eJ,
            handleGridFocus: eY
        } = (function (e) {
            let { masonryListScrollerRef: t, threadIdsBySection: n, goToThread: r, renderSectionOrItem: s, hasActiveThreads: o, isShowingSearchResult: c, canSearchForumPosts: d, canViewArchivedPosts: u, observePostVisibilityAnalytics: m, focusedThreadId: h, headerHeight: g } = e,
                x = i.useRef(null),
                f = i.useCallback(
                    (e) => {
                        (t.current = e), (x.current = null == e ? void 0 : e.getScrollerNode());
                    },
                    [t]
                ),
                p = i.useCallback(
                    (e, n) => {
                        let { current: a } = t;
                        if (null == a) return;
                        let i = document.querySelector(e);
                        if (null == i) return;
                        let r = a.getCoordsMap()[n],
                            l = null != r ? r.height + 20 : 200;
                        a.scrollIntoViewNode({
                            node: i,
                            padding: l,
                            callback() {
                                requestAnimationFrame(() => {
                                    var t;
                                    null === (t = document.querySelector(e)) || void 0 === t || t.focus({ preventScroll: !0 });
                                });
                            }
                        }),
                            (h.current = eC(n));
                    },
                    [t, h]
                ),
                C = i.useCallback(
                    (e) => {
                        let t = eC(e);
                        if (null == t) return;
                        let n = k.Z.getChannel(t);
                        null != n && r(n, !0);
                    },
                    [r]
                ),
                v = i.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return 'section-'.concat(e, '-').concat(t);
                        {
                            let a = n[e][t];
                            return null == a ? ep(e, t) : ep(e, a);
                        }
                    },
                    [n]
                ),
                b = i.useCallback(
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
                j = i.useCallback(
                    (e) =>
                        0 === e
                            ? {}
                            : {
                                  role: 'grid',
                                  'aria-labelledby': '#'.concat(eh(e))
                              },
                    []
                ),
                _ = i.useCallback(
                    (e, t, i, s, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, a.jsx)(
                                  $.Z,
                                  {
                                      id: ''.concat(s),
                                      threadId: c,
                                      className: l()(ed.card, ed.mainCard),
                                      goToThread: r,
                                      observePostVisibilityAnalytics: m,
                                      coords: i,
                                      gridCoords: o.coordinates[s],
                                      gridSectionBoundaries: o.boundaries
                                  },
                                  s
                              )
                            : __OVERLAY__
                              ? null
                              : (0, a.jsx)(
                                    'div',
                                    {
                                        style: { ...i },
                                        'data-item-role': 'item',
                                        className: l()(ed.loadingCard, ed['loadingCard-'.concat(t % 3)])
                                    },
                                    s
                                );
                    },
                    [n, r, m]
                );
            return {
                updateMasonryListScrollerRef: f,
                masonryListContainerRef: x,
                focusedThreadId: h,
                handleGridFocus: p,
                handleGridSelect: C,
                getItemKey: v,
                renderGridSection: b,
                renderGridItem: _,
                getSectionProps: j,
                getGridSectionHeight: i.useCallback((e) => (0 === e ? g - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0), [g, c, d, o, u])
            };
        })({
            masonryListScrollerRef: eV,
            threadIdsBySection: eP,
            goToThread: eM,
            renderSectionOrItem: eA,
            hasActiveThreads: F,
            isShowingSearchResult: eu,
            canSearchForumPosts: K,
            canViewArchivedPosts: Q,
            observePostVisibilityAnalytics: et,
            focusedThreadId: ex,
            headerHeight: ek
        });
    !(function (e) {
        let { masonryListScrollerRef: t, containerWidth: n, isGridLayout: a, threadIdsBySection: r, focusedThreadId: l, parentId: s } = e;
        i.useEffect(() => {
            if (a) {
                let e = setTimeout(() => {
                    if (null == t.current || null == l.current) return;
                    let e = l.current;
                    if ('string' != typeof e) return;
                    if (null == M.ZP.getSidebarState(s)) {
                        l.current = null;
                        return;
                    }
                    let n = r.findIndex((t) => t.find((t) => t === e)),
                        a = t.current.getCoordsMap(),
                        i = a['__section__'.concat(n)],
                        o = a[ep(n, e)];
                    null != i &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: i.top + o.top - 100,
                            end: i.top + o.top + o.height + 50
                        });
                }, 500);
                return () => clearTimeout(e);
            }
        }, [s, n, a, r, l, t]);
    })({
        masonryListScrollerRef: eV,
        containerWidth: eI,
        isGridLayout: ea,
        threadIdsBySection: eP,
        parentId: t.id,
        focusedThreadId: ex
    });
    let eQ = i.useCallback(() => {
            var e, n;
            if (eu) return;
            let a = ea ? (null === (e = eV.current) || void 0 === e ? void 0 : e.getScrollerState()) : null === (n = ee.current) || void 0 === n ? void 0 : n.getScrollerState();
            if (null == a) return;
            (0, W.ab)({
                guildId: t.guild_id,
                channelId: t.id
            });
            let i = a.scrollTop + a.offsetHeight,
                r = a.scrollHeight - i;
            r < (ea ? Math.max(200, (0, en.KW)(eI)) : 200) && j();
        }, [eu, ea, t.guild_id, t.id, eI, j]),
        e$ = (0, g.e7)([v.Z], () => v.Z.keyboardModeEnabled),
        e0 = (0, er.ZP)({
            id: 'forum-grid-view',
            isEnabled: ea && e$,
            setFocus: eY
        }),
        e1 = (0, el.Z)({
            listRef: ee,
            padding: 96,
            isEnabled: !ea && e$,
            channel: t
        }),
        { ref: e6, ...e9 } = e0.containerProps,
        e2 = M.ZP.getSidebarState(t.id),
        e5 = null != e2 && (0, M.D5)(e2),
        e3 = (0, g.e7)([M.ZP], () => M.ZP.getSection(t.id)) === es.ULH.MEMBERS;
    return (0, a.jsx)('div', {
        className: ed.container,
        ref: ev,
        'data-member-list-open': e3,
        children: (0, a.jsx)(f.FocusJumpSection, {
            children: (e) =>
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        u &&
                            (0, a.jsx)(p.Z, {
                                channel: t,
                                draftType: Z.d.FirstThreadMessage,
                                className: ed.uploadArea,
                                style: { right: e5 && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0 }
                            }),
                        (0, a.jsx)(e_, { channel: t }),
                        (0, a.jsx)(f.HiddenVisually, { children: (0, a.jsx)(f.H, { children: ec.intl.string(ec.t.B2panJ) }) }),
                        H
                            ? (0, a.jsx)('div', {
                                  className: ed.optInNotice,
                                  children: (0, a.jsx)(S.Z, { channel: t })
                              })
                            : null,
                        ea
                            ? (0, a.jsx)(er.KT, {
                                  navigator: e0,
                                  children: (0, a.jsx)(
                                      f.MasonryList,
                                      {
                                          ref: (e) => {
                                              var t;
                                              (e6.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null), eG(e);
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: ed.grid,
                                          columns: eN,
                                          sections: eR,
                                          getItemKey: eW,
                                          getSectionHeight: eK,
                                          getItemHeight: eg,
                                          renderSection: eq,
                                          renderItem: eX,
                                          getSectionProps: eJ,
                                          onScroll: b ? eQ : void 0,
                                          chunkSize: 350,
                                          ...e9,
                                          ...e
                                      },
                                      L
                                  )
                              })
                            : (0, a.jsx)(d.bG, {
                                  navigator: e1,
                                  children: (0, a.jsx)(d.SJ, {
                                      children: (t) => {
                                          let { ref: n, ...i } = t;
                                          return (0, a.jsx)(
                                              f.ListAuto,
                                              {
                                                  ref: eB(n),
                                                  className: ed.list,
                                                  sections: eR,
                                                  sectionHeight: eD,
                                                  rowHeight: eU,
                                                  renderRow: eH,
                                                  renderSection: ez,
                                                  chunkSize: 150,
                                                  onScroll: b ? eQ : void 0,
                                                  paddingBottom: 24,
                                                  ...i,
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
function eb(e) {
    let { channel: t, coords: n } = e,
        i = (0, b.ZP)(t);
    return (0, a.jsx)('div', {
        className: l()(ed.missingReadHistoryPermission, ed.columnsSpan),
        style: n,
        children: (0, a.jsx)(f.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ec.intl.format(ec.t.TycmzM, { channelName: i })
        })
    });
}
function ej(e) {
    let { channel: t, coords: n } = e,
        i = (0, b.ZP)(t);
    return (0, a.jsx)('div', {
        className: l()(ed.missingReadHistoryPermission, ed.columnsSpan),
        style: n,
        children: (0, a.jsx)(f.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ec.intl.format(ec.t.OWZJdX, { channelName: i })
        })
    });
}
function e_(e) {
    let { channel: t } = e,
        n = i.useCallback(() => {
            z.Z.resort(t.id);
        }, [t]),
        r = (0, g.e7)([H.Z], () => H.Z.getNewThreadCount());
    return 0 === r
        ? null
        : (0, a.jsx)(f.Clickable, {
              className: ed.newPostsButton,
              onClick: n,
              children: (0, a.jsx)(f.Text, {
                  color: 'text-brand',
                  variant: 'text-md/medium',
                  children: ec.intl.format(ec.t.ue1qfH, { count: r })
              })
          });
}
function eI() {
    return Promise.resolve();
}
function eT(e) {
    var t, n, r;
    let { channel: s, isEmpty: p, isSearchLoading: b, numResults: T, children: N, coords: S, onHeightChange: w } = e,
        {
            name: y,
            formOpen: E,
            titleFocused: P,
            hasClickedForm: M,
            textAreaState: k,
            onboardingExpanded: B,
            setEditorAdditionRowHeight: H
        } = (0, Y.xH)((e) => {
            let { name: t, formOpen: n, titleFocused: a, hasClickedForm: i, textAreaState: r, onboardingExpanded: l, setEditorAdditionRowHeight: s } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: a,
                hasClickedForm: i,
                textAreaState: r,
                onboardingExpanded: l,
                setEditorAdditionRowHeight: s
            };
        }, c.X),
        { tagFilter: V, layoutType: G } = (0, D.H)(s.id),
        q = (0, Y.AF)(),
        J = (0, D.v)(),
        $ = (0, g.e7)([A.Z], () => A.Z.canChatInGuild(s.guild_id)),
        ee = (0, U.r_)(s),
        en = (0, R.cD)(s),
        [ei, er] = i.useState(en),
        [, el] = (0, _.AB)(null !== (r = s.getGuildId()) && void 0 !== r ? r : void 0),
        eo = $ && (en || (ei && el)),
        eu = s.isMediaChannel();
    i.useEffect(() => {
        en && er(!0);
    }, [en]);
    let { ref: em, height: eh } = (0, C.Z)();
    i.useEffect(() => {
        null != eh && w(eh);
    }, [w, eh]);
    let eg = i.useCallback(() => {
        o()(() => {
            null != em.current && q.getState().setEditorHeight(em.current.offsetHeight);
        });
    }, [em, q]);
    i.useLayoutEffect(eg, [eg, p, eo, B]),
        (0, O.yp)({
            event: es.CkL.REMEASURE_TARGET,
            handler: eg
        });
    let ex = (0, g.e7)([L.Z], () => L.Z.getUploads(s.id, Z.d.FirstThreadMessage)),
        ef = (0, U.ql)(s),
        ep = i.useRef(null),
        eC = i.useRef(null),
        [ev, eb] = i.useState(0),
        { width: ej } = (0, g.e7)([F.Z], () => F.Z.windowSize()),
        e_ = null === (n = ep.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.width,
        eT = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        let t = eC.current,
            n = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0];
        if (null != ep.current && null != n && null != n.children) {
            let { left: e, top: t } = ep.current.getBoundingClientRect(),
                a = 0;
            for (let i of n.children) {
                let { right: n, top: r, height: l } = i.getBoundingClientRect();
                if (r - t > l) break;
                n - e > a && (a = n - e);
            }
            eb(a);
        }
    }, [s.availableTags, ej, e_, V]);
    let eS = y.length > 0 && !E && (b || null != T),
        ew = !__OVERLAY__ && !M && !E && P && (0 === k.textValue.trim().length || k.textValue.trim() === ef) && 0 === ex.length;
    i.useLayoutEffect(() => {
        let e = eS || ew;
        if (!e) return H(0);
        null != eT.current && H(e ? eT.current.clientHeight : 0);
    }, [H, eS, ew, eT]);
    let ey = (e) => {
            (0, W.e7)({
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
            scrollToStart: eI,
            scrollToEnd: eI,
            orientation: m.hy.HORIZONTAL
        }),
        { role: eR, onFocus: eP, ...eM } = (0, d.JA)('forum-channel-header'),
        ek = i.useRef(null),
        eZ = (function () {
            let e = i.useRef(!1),
                t = (0, g.e7)([v.Z], () => v.Z.keyboardModeEnabled),
                n = i.useCallback(
                    (t) => {
                        e.current = t.shiftKey;
                    },
                    [e]
                );
            return i.useLayoutEffect(() => (t ? window.addEventListener('keydown', n) : window.removeEventListener('keydown', n), () => window.removeEventListener('keydown', n)), [t, n]), e;
        })(),
        eA = i.useCallback(
            (e) => {
                if ((eP(), e.target === em.current && !eZ.current)) {
                    var t;
                    null === (t = ek.current) || void 0 === t || t.focus();
                }
            },
            [eP, em, eZ]
        );
    return (0, a.jsx)(
        'div',
        {
            className: l()(ed.card, ed.headerRow, ed.columnsSpan),
            ref: em,
            onFocus: eA,
            ...eM,
            style: {
                ...S,
                position: G === h.X.GRID ? 'absolute' : 'static',
                height: 'auto'
            },
            children: (0, a.jsxs)(O.I3, {
                children: [
                    null != s.guild_id
                        ? (0, a.jsx)(I.Z, {
                              className: l()(ed.newMemberBanner, { [ed.gridViewBanner]: G === h.X.GRID }),
                              guildId: s.guild_id,
                              channel: s
                          })
                        : null,
                    (0, a.jsx)('div', {
                        className: l()(ed.mainCard, ed.header, { [ed.headerWithMatchingPosts]: eS || ew }),
                        children: (0, a.jsx)(Q.Z, {
                            parentChannel: s,
                            onChange: eg,
                            isSearchLoading: b,
                            canCreatePost: eo,
                            inputRef: ek
                        })
                    }),
                    (eS || ew) &&
                        (0, a.jsxs)('div', {
                            className: ed.matchingPostsRow,
                            ref: eT,
                            children: [
                                eS &&
                                    (0, a.jsxs)('div', {
                                        className: ed.matchingPosts,
                                        children: [
                                            (0, a.jsx)(f.Heading, {
                                                variant: 'text-xs/normal',
                                                color: 'text-normal',
                                                children: b
                                                    ? ec.intl.string(ec.t['/9i3qq'])
                                                    : 0 === T
                                                      ? ec.intl.string(ec.t.DbgHxs)
                                                      : ec.intl.formatToPlainString(ec.t['tBz/8f'], {
                                                            numPosts: T,
                                                            query: y
                                                        })
                                            }),
                                            !b &&
                                                (0, a.jsx)(f.Clickable, {
                                                    onClick: () => {
                                                        (0, W.zI)({
                                                            guildId: s.guild_id,
                                                            channelId: s.id
                                                        }),
                                                            z.Z.clearForumSearch(s.id),
                                                            q.getState().setName('');
                                                    },
                                                    children: (0, a.jsx)(f.Text, {
                                                        variant: 'text-xs/semibold',
                                                        color: 'text-brand',
                                                        className: ed.clear,
                                                        children: ec.intl.string(ec.t.VkKicX)
                                                    })
                                                })
                                        ]
                                    }),
                                (0, a.jsx)('div', { className: ed.tagsSpacer }),
                                ew
                                    ? eo
                                        ? (0, a.jsxs)('div', {
                                              className: ed.startPostHelp,
                                              children: [
                                                  (0, a.jsx)(f.KeyCombo, {
                                                      shortcut: 'SHIFT',
                                                      className: ed.keyboardShortcut
                                                  }),
                                                  (0, a.jsx)(f.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: '+'
                                                  }),
                                                  (0, a.jsx)(f.KeyCombo, {
                                                      shortcut: 'ENTER',
                                                      className: ed.keyboardShortcut
                                                  }),
                                                  (0, a.jsx)(f.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: ec.intl.string(ec.t.ZvJ0ys)
                                                  })
                                              ]
                                          })
                                        : (0, a.jsxs)('div', {
                                              className: ed.startPostHelp,
                                              children: [
                                                  (0, a.jsx)(f.CircleWarningIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      height: 14,
                                                      width: 14,
                                                      className: ed.warnIcon
                                                  }),
                                                  (0, a.jsx)(f.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: ec.intl.string(ec.t.iyzwnJ)
                                                  })
                                              ]
                                          })
                                    : null
                            ]
                        }),
                    (0, a.jsx)(X.Z, {
                        channel: s,
                        onChange: eg
                    }),
                    (0, a.jsxs)('div', {
                        className: ed.tagsContainer,
                        ref: ep,
                        children: [
                            (0, a.jsx)(eN, { channel: s }),
                            s.availableTags.length > 0
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)('div', { className: ed.divider }),
                                          (0, a.jsx)('div', {
                                              className: ed.tagList,
                                              ref: eC,
                                              children: (0, a.jsx)(d.bG, {
                                                  navigator: eE,
                                                  children: (0, a.jsx)(d.SJ, {
                                                      children: (e) => {
                                                          let { ref: t, ...n } = e;
                                                          return (0, a.jsx)('div', {
                                                              className: ed.tagListInner,
                                                              ref: t,
                                                              ...n,
                                                              children: s.availableTags.map((e) =>
                                                                  (0, a.jsx)(
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
                                          (0, a.jsx)(f.Popout, {
                                              renderPopout: (e) => {
                                                  let { closePopout: t, setPopoutRef: n } = e;
                                                  return (0, a.jsx)(ea.Z, {
                                                      channel: s,
                                                      closePopout: t,
                                                      setPopoutRef: n
                                                  });
                                              },
                                              position: 'bottom',
                                              align: 'right',
                                              children: (e, t) => {
                                                  let { isShown: n } = t;
                                                  return (0, a.jsxs)(f.Button, {
                                                      ...e,
                                                      size: f.Button.Sizes.MIN,
                                                      color: f.Button.Colors.CUSTOM,
                                                      className: l()(ed.tagsButton, { [ed.tagsButtonWithCount]: V.size > 0 }),
                                                      style: { left: ev },
                                                      innerClassName: ed.tagsButtonInner,
                                                      'aria-label': V.size > 0 ? ec.intl.string(ec.t.IkpM1d) : ec.intl.string(ec.t['9vKK/P']),
                                                      children: [
                                                          V.size > 0
                                                              ? (0, a.jsx)('div', {
                                                                    className: ed.countContainer,
                                                                    children: (0, a.jsx)(f.Text, {
                                                                        className: ed.countText,
                                                                        color: 'none',
                                                                        variant: 'text-xs/medium',
                                                                        children: V.size
                                                                    })
                                                                })
                                                              : ec.intl.string(ec.t.fZ8hzs),
                                                          n
                                                              ? (0, a.jsx)(f.ChevronSmallUpIcon, {
                                                                    size: 'custom',
                                                                    color: 'currentColor',
                                                                    width: 20
                                                                })
                                                              : (0, a.jsx)(f.ChevronSmallDownIcon, {
                                                                    size: 'custom',
                                                                    color: 'currentColor',
                                                                    width: 20
                                                                })
                                                      ]
                                                  });
                                              }
                                          }),
                                          (0, a.jsxs)(f.Button, {
                                              size: f.Button.Sizes.MIN,
                                              color: f.Button.Colors.CUSTOM,
                                              className: l()(ed.tagsButton, ed.tagsButtonPlaceholder),
                                              innerClassName: ed.tagsButtonInner,
                                              'aria-label': ec.intl.string(ec.t.IkpM1d),
                                              children: [
                                                  V.size > 0
                                                      ? (0, a.jsx)('div', {
                                                            className: ed.countContainer,
                                                            children: (0, a.jsx)(f.Text, {
                                                                className: ed.countText,
                                                                color: 'none',
                                                                variant: 'text-xs/medium',
                                                                children: V.size
                                                            })
                                                        })
                                                      : null,
                                                  (0, a.jsx)(f.ChevronSmallUpIcon, {
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
                    ee &&
                        !eu &&
                        (0, a.jsx)(j.ZP, {
                            contentTypes: [x.z.FORUM_CHANNEL_HELPER_CARD],
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return t === x.z.FORUM_CHANNEL_HELPER_CARD ? (0, a.jsx)(K.Z, { onDismiss: n }) : null;
                            }
                        })
                ]
            })
        },
        'create-form'
    );
}
function eN(e) {
    let { channel: t } = e,
        n = t.isMediaChannel();
    return (0, a.jsx)(f.Popout, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(ee.Z, {
                channel: t,
                closePopout: n
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, a.jsxs)(f.Button, {
                ...e,
                size: f.Button.Sizes.MIN,
                color: f.Button.Colors.CUSTOM,
                className: ed.sortDropdown,
                innerClassName: ed.sortDropdownInner,
                'aria-label': n ? ec.intl.string(ec.t.JxU0ws) : ec.intl.string(ec.t.xyYt8P),
                children: [
                    (0, a.jsx)(f.ArrowsUpDownIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    (0, a.jsx)(f.Text, {
                        className: ed.sortDropdownText,
                        variant: 'text-sm/medium',
                        color: 'interactive-normal',
                        children: n ? ec.intl.string(ec.t.JxU0ws) : ec.intl.string(ec.t.xyYt8P)
                    }),
                    i
                        ? (0, a.jsx)(f.ChevronSmallUpIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              width: 20
                          })
                        : (0, a.jsx)(f.ChevronSmallDownIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              width: 20
                          })
                ]
            });
        }
    });
}
