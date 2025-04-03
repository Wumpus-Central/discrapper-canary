n.r(t), n.d(t, { default: () => eg }), n(301563), n(47120), n(566702);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(196434),
    o = n.n(s),
    c = n(788347),
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
    N = n(41776),
    O = n(256413),
    w = n(292853),
    S = n(359110),
    P = n(344185),
    T = n(235449),
    I = n(665906),
    E = n(488131),
    k = n(433355),
    R = n(592125),
    Z = n(703558),
    M = n(607744),
    A = n(117530),
    L = n(451478),
    W = n(459273),
    F = n(961675),
    D = n(883429),
    z = n(238349),
    B = n(109434),
    H = n(456269),
    U = n(90372),
    V = n(985518),
    G = n(228392),
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
    er = n(276357),
    ea = n(81490),
    ei = n(482062),
    el = n(260503),
    es = n(981631),
    eo = n(124368),
    ec = n(388032),
    ed = n(683999);
function eu(e) {
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
function em(e, t) {
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
function eh(e, t) {
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
        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    }
    return a;
}
function eg(e) {
    let { channel: t, guild: n, sidebarState: a } = e;
    return (0, r.jsx)(
        Y.oL,
        {
            channel: t,
            children: (0, r.jsx)(e_, {
                channel: t,
                guild: n,
                sidebarState: a
            })
        },
        t.id
    );
}
let ef = new en.Me({
    minWidth: 320,
    maxWidth: 450,
    gap: 16
});
function ep(e) {
    return 'forum-grid-header-section-'.concat(e);
}
let ex = (e, t, n) => (0 === e ? 0 : (0, en.KW)(n));
function eb(e) {
    let { itemRole: t, coords: n, section: a } = e;
    return (0, r.jsx)(
        'div',
        {
            className: l()(ed.card, ed.archivedDividerRow, ed.columnsSpan),
            style: n,
            'data-item-role': t,
            children: (0, r.jsx)('div', {
                className: ed.emptyMainCard,
                children: (0, r.jsx)(p.X6q, {
                    variant: 'eyebrow',
                    className: ed.archivedDivider,
                    id: ep(a),
                    children: ec.NW.string(ec.t['3+LO19'])
                })
            })
        },
        'section-divider'
    );
}
function ej(e) {
    let { section: t, coords: n, key: a, isShowingSearchResult: i, hasActiveThreads: l } = e;
    return () =>
        2 === t && !i && l
            ? (0, r.jsx)(
                  eb,
                  {
                      section: t,
                      coords: null == n ? void 0 : em(eu({}, n), { position: 'absolute' }),
                      itemRole: 'section'
                  },
                  a
              )
            : null;
}
function ev(e, t) {
    return 'card-'.concat(e, '-').concat(t);
}
function eC(e) {
    if ('string' == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function e_(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: i,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: u
        } = (0, Y.xH)((e) => {
            let { editorHeight: t, editorAdditionRowHeight: n, listViewCardHeights: r, formOpen: a, cardHeightVersion: i } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: r,
                formOpen: a,
                cardHeightVersion: i
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
            loading: I,
            isSearchLoading: M,
            layoutType: A
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: r } = (0, B.H)(e.id),
                a = (0, H.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    shouldAutomaticallyAck: !0
                }),
                i = (0, g.e7)([P.Z, N.Z], () => {
                    let t = P.Z.hasLoaded(e.guild_id),
                        n = N.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: l, canLoadMore: s, loadMore: o, loading: c } = (0, T.qQ)(e, t, n),
                { searchResults: d, isSearchLoading: u } = (0, H.XZ)({ channelId: e.id });
            return (
                (0, H.ES)(e, t, n),
                {
                    activeThreadIds: a,
                    archivedThreadIds: l,
                    searchResults: d,
                    canLoadMore: s,
                    loadMore: o,
                    loading: i || c || u,
                    archivedThreadsLoading: c,
                    activeThreadsLoading: i,
                    isSearchLoading: u,
                    layoutType: r
                }
            );
        })(t),
        L = m.length > 0,
        W = L || f.length > 0,
        z = (0, O.Z)(t),
        { tagFilter: X } = (0, B.H)(t.id);
    (0, H.ku)(t, X, u);
    let K = (0, H.jR)(t),
        Q = (0, H.eZ)(t),
        ee = a.useRef(null),
        { observePostVisibilityAnalytics: et } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: r } = e;
            U.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n
            });
            let i = a.useRef(null),
                l = a.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let r = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, V.rj)(e, t, r) : (0, V.Ct)(e, t, r);
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
                                rootMargin: '0px 100000px 0px 100000px',
                                threshold: 0.5
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
                            if (null == e) return void (0, V.Ct)(n, t, Date.now());
                            null == (r = i.current) || r.observe(e);
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
        er = A === h.X.GRID,
        eg = null != b,
        eb = a.useRef(null),
        { containerRef: e_, containerWidth: ew } = (0, ea.Z)();
    a.useEffect(
        () => () => {
            null != t.id && D.Z.clearForumSearch(t.id);
        },
        [t.id]
    );
    let { columns: eP } = a.useMemo(() => (er ? ef.getRenderOptions(ew) : en.eU), [er, ew]),
        eT = a.useMemo(() => (I ? Math.round((window.innerHeight - 200) / 118) : 0), [I]),
        eI = a.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(ef.getWidth(ew))) * eP;
            return _ ? e : 0;
        }, [ew, eP, _]),
        eE = a.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(ef.getWidth(ew))) * eP;
            return y ? e : 0;
        }, [ew, eP, y]),
        ek = a.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(ef.getWidth(ew))) * eP;
            return M && eg ? e : 0;
        }, [ew, eP, M, eg]),
        eR = a.useMemo(() => {
            if (er)
                if (!K && eg) return [1, 0];
                else if (!Q) return [1, m.length + eI, 0];
                else if (eg) return [1, b.length + ek, 0];
                else return [1, m.length + eI, f.length + eE];
            return !K && eg ? [1, 1] : Q ? (eg ? [1, b.length, 0, eT] : [1, m.length, f.length, eT]) : [1, m.length, 1];
        }, [er, eg, m.length, f.length, K, Q, eT, b, eI, eE, ek]),
        eZ = a.useMemo(() => (!K && eg ? [[], []] : Q ? (eg ? [[], b, [], []] : [[], m, f, []]) : [[], m, []]), [eg, K, Q, b, m, f]),
        eM = a.useCallback(
            (e, n) => {
                (0, G.B5)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: {
                        page: es.ZY5.GUILD_CHANNEL,
                        section: es.jXE.FORUM_CHANNEL_POST
                    }
                }),
                    n ? (0, S.ad)(e, { source: eo.on.BROWSER }) : ((eb.current = e.id), (0, E.ok)(e));
            },
            [t.guild_id, t.id, eb]
        ),
        [eA, eL] = a.useState(i + s - 24),
        eW = a.useCallback(
            (e, n, a) =>
                0 === e
                    ? (0, r.jsx)(
                          eS,
                          {
                              channel: t,
                              isEmpty: !L,
                              isSearchLoading: M,
                              numResults: null == b ? void 0 : b.length,
                              coords: n,
                              onHeightChange: eL,
                              children:
                                  !I &&
                                  (0, r.jsx)(
                                      q.Z,
                                      {
                                          channel: t,
                                          hasAnyThread: W
                                      },
                                      t.id
                                  )
                          },
                          'forum-channel-header'
                      )
                    : 2 !== e || Q
                      ? 1 === e && eg && !K
                          ? (0, r.jsx)(
                                eN,
                                {
                                    channel: t,
                                    coords: n
                                },
                                'archive-or-search-result'
                            )
                          : a()
                      : (0, r.jsx)(
                            ey,
                            {
                                channel: t,
                                coords: n
                            },
                            'archived-missing-reading-history-perm'
                        ),
            [eg, Q, b, K, t, L, M, I, W]
        ),
        eF = (0, g.e7)([F.Z], () => F.Z.hasHidden(t.id)),
        eD = {
            editorHeight: i,
            isGridLayout: er
        },
        ez = a.useRef(eD);
    a.useEffect(() => {
        ez.current = eD;
    }),
        a.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: r } = ez.current,
                a = r ? eq : ee,
                i = null == (e = a.current) ? void 0 : e.getScrollerState();
            null != i && !eF && i.scrollTop > n && (null == (t = a.current) || t.scrollTo({ to: 0 }));
        }, [eF]);
    let {
            updateListScrollerRef: eB,
            renderListSection: eH,
            renderListItem: eU,
            getListSectionHeight: eV,
            getListItemHeight: eG
        } = (function (e) {
            let { listRef: t, hasActiveThreads: n, threadIdsBySection: i, listViewCardHeights: s, editorHeight: o, editorAdditionRowHeight: c, renderSectionOrItem: d, goToThread: u, observePostVisibilityAnalytics: m, isShowingSearchResult: h } = e,
                g = a.useCallback(
                    (e) => (n) => {
                        var r;
                        (t.current = n), (e.current = null != (r = null == n ? void 0 : n.getScrollerNode()) ? r : null);
                    },
                    [t]
                ),
                f = a.useCallback(
                    (e) =>
                        ej({
                            section: e.section,
                            isShowingSearchResult: h,
                            hasActiveThreads: n
                        })(),
                    [n, h]
                ),
                x = a.useCallback(
                    (e) =>
                        d(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, r.jsx)(
                                          'div',
                                          {
                                              'data-item-role': 'item',
                                              className: l()(ed.loadingCard, ed['loadingCard-'.concat(e.row % 3)])
                                          },
                                          'loading-'.concat(e.row)
                                      );
                            let t = i[e.section][e.row];
                            return (0, r.jsx)(
                                'li',
                                {
                                    className: ed.card,
                                    'data-item-role': 'item',
                                    children: (0, r.jsx)(p.y5t, {
                                        children: (0, r.jsx)(J.ZP, {
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
                    [d, i, u, m]
                ),
                b = a.useCallback(
                    (e, t) => {
                        if (0 === e) return o + c;
                        let n = s[i[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [i, s, o, c]
                );
            return {
                updateListScrollerRef: g,
                renderListSection: f,
                renderListItem: x,
                getListSectionHeight: a.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: b
            };
        })({
            listRef: ee,
            hasActiveThreads: L,
            threadIdsBySection: eZ,
            listViewCardHeights: o,
            editorHeight: i,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eW,
            goToThread: eM,
            observePostVisibilityAnalytics: et,
            isShowingSearchResult: eg
        }),
        eq = a.useRef(null),
        {
            updateMasonryListScrollerRef: eX,
            getItemKey: eK,
            renderGridSection: eJ,
            renderGridItem: eY,
            getGridSectionHeight: eQ,
            getSectionProps: e$,
            handleGridFocus: e0
        } = (function (e) {
            let { masonryListScrollerRef: t, threadIdsBySection: n, goToThread: i, renderSectionOrItem: s, hasActiveThreads: o, isShowingSearchResult: c, canSearchForumPosts: d, canViewArchivedPosts: u, observePostVisibilityAnalytics: m, focusedThreadId: h, headerHeight: g } = e,
                f = a.useRef(null),
                p = a.useCallback(
                    (e) => {
                        (t.current = e), (f.current = null == e ? void 0 : e.getScrollerNode());
                    },
                    [t]
                ),
                x = a.useCallback(
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
                            }
                        }),
                            (h.current = eC(n));
                    },
                    [t, h]
                ),
                b = a.useCallback(
                    (e) => {
                        let t = eC(e);
                        if (null == t) return;
                        let n = R.Z.getChannel(t);
                        null != n && i(n, !0);
                    },
                    [i]
                ),
                j = a.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return 'section-'.concat(e, '-').concat(t);
                        {
                            let r = n[e][t];
                            return null == r ? ev(e, t) : ev(e, r);
                        }
                    },
                    [n]
                ),
                v = a.useCallback(
                    (e, t, n) =>
                        s(
                            e,
                            t,
                            ej({
                                section: e,
                                coords: t,
                                key: n,
                                isShowingSearchResult: c,
                                hasActiveThreads: o
                            })
                        ),
                    [s, o, c]
                ),
                C = a.useCallback(
                    (e) =>
                        0 === e
                            ? {}
                            : {
                                  role: 'grid',
                                  'aria-labelledby': '#'.concat(ep(e))
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
                renderGridItem: a.useCallback(
                    (e, t, a, s, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, r.jsx)(
                                  $.Z,
                                  {
                                      id: ''.concat(s),
                                      threadId: c,
                                      className: l()(ed.card, ed.mainCard),
                                      goToThread: i,
                                      observePostVisibilityAnalytics: m,
                                      coords: a,
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
                                        style: eu({}, a),
                                        'data-item-role': 'item',
                                        className: l()(ed.loadingCard, ed['loadingCard-'.concat(t % 3)])
                                    },
                                    s
                                );
                    },
                    [n, i, m]
                ),
                getSectionProps: C,
                getGridSectionHeight: a.useCallback((e) => (0 === e ? g - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0), [g, c, d, o, u])
            };
        })({
            masonryListScrollerRef: eq,
            threadIdsBySection: eZ,
            goToThread: eM,
            renderSectionOrItem: eW,
            hasActiveThreads: L,
            isShowingSearchResult: eg,
            canSearchForumPosts: K,
            canViewArchivedPosts: Q,
            observePostVisibilityAnalytics: et,
            focusedThreadId: eb,
            headerHeight: eA
        });
    !(function (e) {
        let { masonryListScrollerRef: t, containerWidth: n, isGridLayout: r, threadIdsBySection: i, focusedThreadId: l, parentId: s } = e;
        a.useEffect(() => {
            if (r) {
                let e = setTimeout(() => {
                    if (null == t.current || null == l.current) return;
                    let e = l.current;
                    if ('string' != typeof e) return;
                    if (null == k.ZP.getSidebarState(s)) {
                        l.current = null;
                        return;
                    }
                    let n = i.findIndex((t) => t.find((t) => t === e)),
                        r = t.current.getCoordsMap(),
                        a = r['__section__'.concat(n)],
                        o = r[ev(n, e)];
                    null != a &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: a.top + o.top - 100,
                            end: a.top + o.top + o.height + 50
                        });
                }, 500);
                return () => clearTimeout(e);
            }
        }, [s, n, r, i, l, t]);
    })({
        masonryListScrollerRef: eq,
        containerWidth: ew,
        isGridLayout: er,
        threadIdsBySection: eZ,
        parentId: t.id,
        focusedThreadId: eb
    });
    let e3 = a.useCallback(() => {
            var e, n;
            if (eg) return;
            let r = er ? (null == (e = eq.current) ? void 0 : e.getScrollerState()) : null == (n = ee.current) ? void 0 : n.getScrollerState();
            if (null == r) return;
            (0, G.ab)({
                guildId: t.guild_id,
                channelId: t.id
            });
            let a = r.scrollTop + r.offsetHeight;
            r.scrollHeight - a < (er ? Math.max(200, (0, en.KW)(ew)) : 200) && C();
        }, [eg, er, t.guild_id, t.id, ew, C]),
        e1 = (0, g.e7)([j.Z], () => j.Z.keyboardModeEnabled),
        e6 = (0, ei.ZP)({
            id: 'forum-grid-view',
            isEnabled: er && e1,
            setFocus: e0
        }),
        e9 = (0, el.Z)({
            listRef: ee,
            padding: 96,
            isEnabled: !er && e1,
            channel: t
        }),
        e4 = e6.containerProps,
        { ref: e8 } = e4,
        e2 = eh(e4, ['ref']),
        e5 = k.ZP.getSidebarState(t.id),
        e7 = null != e5 && (0, k.D5)(e5),
        te = (0, g.e7)([k.ZP], () => k.ZP.getSection(t.id)) === es.ULH.MEMBERS;
    return (0, r.jsx)('div', {
        className: ed.container,
        ref: e_,
        'data-member-list-open': te,
        children: (0, r.jsx)(p.Wdt, {
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        u &&
                            (0, r.jsx)(x.Z, {
                                channel: t,
                                draftType: Z.d.FirstThreadMessage,
                                className: ed.uploadArea,
                                style: { right: e7 && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0 }
                            }),
                        (0, r.jsx)(eO, { channel: t }),
                        (0, r.jsx)(p.nn4, { children: (0, r.jsx)(p.H, { children: ec.NW.string(ec.t.B2panJ) }) }),
                        z
                            ? (0, r.jsx)('div', {
                                  className: ed.optInNotice,
                                  children: (0, r.jsx)(w.Z, { channel: t })
                              })
                            : null,
                        er
                            ? (0, r.jsx)(ei.KT, {
                                  navigator: e6,
                                  children: (0, r.jsx)(
                                      p.GMG,
                                      eu(
                                          {
                                              ref: (e) => {
                                                  var t;
                                                  (e8.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), eX(e);
                                              },
                                              itemGutter: 16,
                                              padding: 24,
                                              className: ed.grid,
                                              columns: eP,
                                              sections: eR,
                                              getItemKey: eK,
                                              getSectionHeight: eQ,
                                              getItemHeight: ex,
                                              renderSection: eJ,
                                              renderItem: eY,
                                              getSectionProps: e$,
                                              onScroll: v ? e3 : void 0,
                                              chunkSize: 350
                                          },
                                          e2,
                                          e
                                      ),
                                      A
                                  )
                              })
                            : (0, r.jsx)(d.bG, {
                                  navigator: e9,
                                  children: (0, r.jsx)(d.SJ, {
                                      children: (t) => {
                                          var { ref: n } = t,
                                              a = eh(t, ['ref']);
                                          return (0, r.jsx)(
                                              p._2F,
                                              em(
                                                  eu(
                                                      {
                                                          ref: eB(n),
                                                          className: ed.list,
                                                          sections: eR,
                                                          sectionHeight: eV,
                                                          rowHeight: eG,
                                                          renderRow: eU,
                                                          renderSection: eH,
                                                          chunkSize: 150,
                                                          onScroll: v ? e3 : void 0,
                                                          paddingBottom: 24
                                                      },
                                                      a,
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
function ey(e) {
    let { channel: t, coords: n } = e,
        a = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: l()(ed.missingReadHistoryPermission, ed.columnsSpan),
        style: n,
        children: (0, r.jsx)(p.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ec.NW.format(ec.t.TycmzM, { channelName: a })
        })
    });
}
function eN(e) {
    let { channel: t, coords: n } = e,
        a = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: l()(ed.missingReadHistoryPermission, ed.columnsSpan),
        style: n,
        children: (0, r.jsx)(p.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ec.NW.format(ec.t.OWZJdX, { channelName: a })
        })
    });
}
function eO(e) {
    let { channel: t } = e,
        n = a.useCallback(() => {
            D.Z.resort(t.id);
        }, [t]),
        i = (0, g.e7)([z.Z], () => z.Z.getNewThreadCount());
    return 0 === i
        ? null
        : (0, r.jsx)(p.P3F, {
              className: ed.newPostsButton,
              onClick: n,
              children: (0, r.jsx)(p.Text, {
                  color: 'text-brand',
                  variant: 'text-md/medium',
                  children: ec.NW.format(ec.t.ue1qfH, { count: i })
              })
          });
}
function ew() {
    return Promise.resolve();
}
function eS(e) {
    var t, n, i;
    let { channel: s, isEmpty: x, isSearchLoading: v, numResults: N, children: O, coords: w, onHeightChange: S } = e,
        {
            name: P,
            formOpen: T,
            titleFocused: E,
            hasClickedForm: k,
            textAreaState: R,
            onboardingExpanded: F,
            setEditorAdditionRowHeight: z
        } = (0, Y.xH)((e) => {
            let { name: t, formOpen: n, titleFocused: r, hasClickedForm: a, textAreaState: i, onboardingExpanded: l, setEditorAdditionRowHeight: s } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: r,
                hasClickedForm: a,
                textAreaState: i,
                onboardingExpanded: l,
                setEditorAdditionRowHeight: s
            };
        }, c.X),
        { tagFilter: U, layoutType: V } = (0, B.H)(s.id),
        q = (0, Y.AF)(),
        J = (0, B.v)(),
        $ = (0, g.e7)([M.Z], () => M.Z.canChatInGuild(s.guild_id)),
        ee = (0, H.r_)(s),
        en = (0, I.cD)(s),
        [ea, ei] = a.useState(en),
        [, el] = (0, _.AB)(null != (i = s.getGuildId()) ? i : void 0),
        eo = $ && (en || (ea && el)),
        eg = s.isMediaChannel();
    a.useEffect(() => {
        en && ei(!0);
    }, [en]);
    let { ref: ef, height: ep } = (0, b.Z)();
    a.useEffect(() => {
        null != ep && S(ep);
    }, [S, ep]);
    let ex = a.useCallback(() => {
        o()(() => {
            null != ef.current && q.getState().setEditorHeight(ef.current.offsetHeight);
        });
    }, [ef, q]);
    a.useLayoutEffect(ex, [ex, x, eo, F]),
        (0, W.yp)({
            event: es.CkL.REMEASURE_TARGET,
            handler: ex
        });
    let eb = (0, g.e7)([A.Z], () => A.Z.getUploads(s.id, Z.d.FirstThreadMessage)),
        ej = (0, H.ql)(s),
        ev = a.useRef(null),
        eC = a.useRef(null),
        [e_, ey] = a.useState(0),
        { width: eN } = (0, g.e7)([L.Z], () => L.Z.windowSize()),
        eO = null == (n = ev.current) || null == (t = n.getBoundingClientRect()) ? void 0 : t.width,
        eS = a.useRef(null);
    a.useLayoutEffect(() => {
        var e;
        let t = eC.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0];
        if (null != ev.current && null != n && null != n.children) {
            let { left: e, top: t } = ev.current.getBoundingClientRect(),
                r = 0;
            for (let a of n.children) {
                let { right: n, top: i, height: l } = a.getBoundingClientRect();
                if (i - t > l) break;
                n - e > r && (r = n - e);
            }
            ey(r);
        }
    }, [s.availableTags, eN, eO, U]);
    let eT = P.length > 0 && !T && (v || null != N),
        eI = !__OVERLAY__ && !k && !T && E && (0 === R.textValue.trim().length || R.textValue.trim() === ej) && 0 === eb.length;
    a.useLayoutEffect(() => {
        let e = eT || eI;
        if (!e) return z(0);
        null != eS.current && z(e ? eS.current.clientHeight : 0);
    }, [z, eT, eI, eS]);
    let eE = (e) => {
            (0, G.e7)({
                guildId: s.guild_id,
                channelId: s.id,
                tagId: e,
                filterTagIds: Array.from(U),
                added: !U.has(e),
                location: {
                    page: es.ZY5.GUILD_CHANNEL,
                    section: es.jXE.FORUM_CHANNEL_HEADER,
                    object: es.qAy.CHANNEL_TAG
                }
            }),
                J.getState().toggleTagFilter(s.id, e);
        },
        ek = (0, u.ZP)({
            id: ''.concat(s.id, '-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: ew,
            scrollToEnd: ew,
            orientation: m.hy.HORIZONTAL
        }),
        eR = (0, d.JA)('forum-channel-header'),
        { role: eZ, onFocus: eM } = eR,
        eA = eh(eR, ['role', 'onFocus']),
        eL = a.useRef(null),
        eW = (function () {
            let e = a.useRef(!1),
                t = (0, g.e7)([j.Z], () => j.Z.keyboardModeEnabled),
                n = a.useCallback(
                    (t) => {
                        e.current = t.shiftKey;
                    },
                    [e]
                );
            return a.useLayoutEffect(() => (t ? window.addEventListener('keydown', n) : window.removeEventListener('keydown', n), () => window.removeEventListener('keydown', n)), [t, n]), e;
        })(),
        eF = a.useCallback(
            (e) => {
                if ((eM(), e.target === ef.current && !eW.current)) {
                    var t;
                    null == (t = eL.current) || t.focus();
                }
            },
            [eM, ef, eW]
        );
    return (0, r.jsx)(
        'div',
        em(
            eu(
                {
                    className: l()(ed.card, ed.headerRow, ed.columnsSpan),
                    ref: ef,
                    onFocus: eF
                },
                eA
            ),
            {
                style: em(eu({}, w), {
                    position: V === h.X.GRID ? 'absolute' : 'static',
                    height: 'auto'
                }),
                children: (0, r.jsxs)(W.I3, {
                    children: [
                        null != s.guild_id
                            ? (0, r.jsx)(y.Z, {
                                  className: l()(ed.newMemberBanner, { [ed.gridViewBanner]: V === h.X.GRID }),
                                  guildId: s.guild_id,
                                  channel: s
                              })
                            : null,
                        (0, r.jsx)('div', {
                            className: l()(ed.mainCard, ed.header, { [ed.headerWithMatchingPosts]: eT || eI }),
                            children: (0, r.jsx)(Q.Z, {
                                parentChannel: s,
                                onChange: ex,
                                isSearchLoading: v,
                                canCreatePost: eo,
                                inputRef: eL
                            })
                        }),
                        (eT || eI) &&
                            (0, r.jsxs)('div', {
                                className: ed.matchingPostsRow,
                                ref: eS,
                                children: [
                                    eT &&
                                        (0, r.jsxs)('div', {
                                            className: ed.matchingPosts,
                                            children: [
                                                (0, r.jsx)(p.X6q, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-normal',
                                                    children: v
                                                        ? ec.NW.string(ec.t['/9i3qq'])
                                                        : 0 === N
                                                          ? ec.NW.string(ec.t.DbgHxs)
                                                          : ec.NW.formatToPlainString(ec.t['tBz/8f'], {
                                                                numPosts: N,
                                                                query: P
                                                            })
                                                }),
                                                !v &&
                                                    (0, r.jsx)(p.P3F, {
                                                        onClick: () => {
                                                            (0, G.zI)({
                                                                guildId: s.guild_id,
                                                                channelId: s.id
                                                            }),
                                                                D.Z.clearForumSearch(s.id),
                                                                q.getState().setName('');
                                                        },
                                                        children: (0, r.jsx)(p.Text, {
                                                            variant: 'text-xs/semibold',
                                                            color: 'text-brand',
                                                            className: ed.clear,
                                                            children: ec.NW.string(ec.t.VkKicX)
                                                        })
                                                    })
                                            ]
                                        }),
                                    (0, r.jsx)('div', { className: ed.tagsSpacer }),
                                    eI
                                        ? eo
                                            ? (0, r.jsxs)('div', {
                                                  className: ed.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(p.M2$, {
                                                          shortcut: 'SHIFT',
                                                          className: ed.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-normal',
                                                          children: '+'
                                                      }),
                                                      (0, r.jsx)(p.M2$, {
                                                          shortcut: 'ENTER',
                                                          className: ed.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-normal',
                                                          children: ec.NW.string(ec.t.ZvJ0ys)
                                                      })
                                                  ]
                                              })
                                            : (0, r.jsxs)('div', {
                                                  className: ed.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(p.P4T, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          height: 14,
                                                          width: 14,
                                                          className: ed.warnIcon
                                                      }),
                                                      (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-normal',
                                                          children: ec.NW.string(ec.t.iyzwnJ)
                                                      })
                                                  ]
                                              })
                                        : null
                                ]
                            }),
                        (0, r.jsx)(X.Z, {
                            channel: s,
                            onChange: ex
                        }),
                        (0, r.jsxs)('div', {
                            className: ed.tagsContainer,
                            ref: ev,
                            children: [
                                (0, r.jsx)(eP, { channel: s }),
                                s.availableTags.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: ed.divider }),
                                              (0, r.jsx)('div', {
                                                  className: ed.tagList,
                                                  ref: eC,
                                                  children: (0, r.jsx)(d.bG, {
                                                      navigator: ek,
                                                      children: (0, r.jsx)(d.SJ, {
                                                          children: (e) => {
                                                              var { ref: t } = e,
                                                                  n = eh(e, ['ref']);
                                                              return (0, r.jsx)(
                                                                  'div',
                                                                  em(
                                                                      eu(
                                                                          {
                                                                              className: ed.tagListInner,
                                                                              ref: t
                                                                          },
                                                                          n
                                                                      ),
                                                                      {
                                                                          children: s.availableTags.map((e) =>
                                                                              (0, r.jsx)(
                                                                                  et.Z,
                                                                                  {
                                                                                      className: ed.tag,
                                                                                      tag: e,
                                                                                      onClick: () => eE(e.id),
                                                                                      selected: U.has(e.id)
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
                                                      return (0, r.jsx)(er.Z, {
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
                                                          em(eu({}, e), {
                                                              size: p.zxk.Sizes.MIN,
                                                              color: p.zxk.Colors.CUSTOM,
                                                              className: l()(ed.tagsButton, { [ed.tagsButtonWithCount]: U.size > 0 }),
                                                              style: { left: e_ },
                                                              innerClassName: ed.tagsButtonInner,
                                                              'aria-label': U.size > 0 ? ec.NW.string(ec.t.IkpM1d) : ec.NW.string(ec.t['9vKK/P']),
                                                              children: [
                                                                  U.size > 0
                                                                      ? (0, r.jsx)('div', {
                                                                            className: ed.countContainer,
                                                                            children: (0, r.jsx)(p.Text, {
                                                                                className: ed.countText,
                                                                                color: 'none',
                                                                                variant: 'text-xs/medium',
                                                                                children: U.size
                                                                            })
                                                                        })
                                                                      : ec.NW.string(ec.t.fZ8hzs),
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
                                                  className: l()(ed.tagsButton, ed.tagsButtonPlaceholder),
                                                  innerClassName: ed.tagsButtonInner,
                                                  'aria-label': ec.NW.string(ec.t.IkpM1d),
                                                  children: [
                                                      U.size > 0
                                                          ? (0, r.jsx)('div', {
                                                                className: ed.countContainer,
                                                                children: (0, r.jsx)(p.Text, {
                                                                    className: ed.countText,
                                                                    color: 'none',
                                                                    variant: 'text-xs/medium',
                                                                    children: U.size
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
                        O,
                        ee &&
                            !eg &&
                            (0, r.jsx)(C.ZP, {
                                contentTypes: [f.z.FORUM_CHANNEL_HELPER_CARD],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === f.z.FORUM_CHANNEL_HELPER_CARD ? (0, r.jsx)(K.Z, { onDismiss: n }) : null;
                                }
                            })
                    ]
                })
            }
        ),
        'create-form'
    );
}
function eP(e) {
    let { channel: t } = e,
        n = t.isMediaChannel();
    return (0, r.jsx)(p.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(ee.Z, {
                channel: t,
                closePopout: n
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: a } = t;
            return (0, r.jsxs)(
                p.zxk,
                em(eu({}, e), {
                    size: p.zxk.Sizes.MIN,
                    color: p.zxk.Colors.CUSTOM,
                    className: ed.sortDropdown,
                    innerClassName: ed.sortDropdownInner,
                    'aria-label': n ? ec.NW.string(ec.t.JxU0ws) : ec.NW.string(ec.t.xyYt8P),
                    children: [
                        (0, r.jsx)(p.uVW, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        (0, r.jsx)(p.Text, {
                            className: ed.sortDropdownText,
                            variant: 'text-sm/medium',
                            color: 'interactive-normal',
                            children: n ? ec.NW.string(ec.t.JxU0ws) : ec.NW.string(ec.t.xyYt8P)
                        }),
                        a
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
