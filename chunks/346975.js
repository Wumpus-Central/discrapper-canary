n.r(t), n.d(t, { default: () => eb }), n(35282), n(388685), n(781311);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
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
    C = n(243778),
    _ = n(71619),
    y = n(898188),
    O = n(41776),
    w = n(256413),
    S = n(292853),
    N = n(982168),
    P = n(216572),
    T = n(543015),
    I = n(359110),
    E = n(344185),
    k = n(235449),
    R = n(665906),
    Z = n(488131),
    M = n(433355),
    A = n(592125),
    L = n(703558),
    F = n(607744),
    D = n(944486),
    z = n(117530),
    B = n(451478),
    H = n(459273),
    U = n(961675),
    V = n(883429),
    G = n(238349),
    q = n(109434),
    W = n(456269),
    X = n(90372),
    K = n(985518),
    J = n(228392),
    Y = n(355589),
    Q = n(542581),
    $ = n(639184),
    ee = n(404616),
    et = n(470623),
    en = n(749913),
    er = n(219664),
    el = n(895932),
    ei = n(479099),
    ea = n(510060),
    es = n(276357),
    eo = n(81490),
    ec = n(482062),
    ed = n(260503),
    eu = n(981631),
    em = n(124368),
    eh = n(388032),
    eg = n(683999);
function ef(e) {
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
function ex(e, t) {
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
function ep(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
function eb(e) {
    let { channel: t, guild: n, sidebarState: l } = e;
    return (0, r.jsx)(
        et.oL,
        {
            channel: t,
            children: (0, r.jsx)(eS, {
                channel: t,
                guild: n,
                sidebarState: l
            })
        },
        t.id
    );
}
let ej = new ea.Me({
    minWidth: 320,
    maxWidth: 450,
    gap: 16
});
function ev(e) {
    return 'forum-grid-header-section-'.concat(e);
}
let eC = (e, t, n) => (0 === e ? 0 : (0, ea.KW)(n));
function e_(e) {
    let { itemRole: t, coords: n, section: l } = e;
    return (0, r.jsx)(
        'div',
        {
            className: a()(eg.card, eg.archivedDividerRow, eg.columnsSpan),
            style: n,
            'data-item-role': t,
            children: (0, r.jsx)('div', {
                className: eg.emptyMainCard,
                children: (0, r.jsx)(x.X6q, {
                    variant: 'eyebrow',
                    className: eg.archivedDivider,
                    id: ev(l),
                    children: eh.intl.string(eh.t['3+LO19'])
                })
            })
        },
        'section-divider'
    );
}
function ey(e) {
    let { section: t, coords: n, key: l, isShowingSearchResult: i, hasActiveThreads: a } = e;
    return () =>
        2 === t && !i && a
            ? (0, r.jsx)(
                  e_,
                  {
                      section: t,
                      coords: null == n ? void 0 : ex(ef({}, n), { position: 'absolute' }),
                      itemRole: 'section'
                  },
                  l
              )
            : null;
}
function eO(e, t) {
    return 'card-'.concat(e, '-').concat(t);
}
function ew(e) {
    if ('string' == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function eS(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: i,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: u
        } = (0, et.xH)((e) => {
            let { editorHeight: t, editorAdditionRowHeight: n, listViewCardHeights: r, formOpen: l, cardHeightVersion: i } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: r,
                formOpen: l,
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
            loading: P,
            isSearchLoading: R,
            layoutType: F
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: r, tagSetting: l } = (0, q.H)(e.id),
                i = (0, W.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: l,
                    shouldAutomaticallyAck: !0
                }),
                a = (0, g.e7)([E.Z, O.Z], () => {
                    let t = E.Z.hasLoaded(e.guild_id),
                        n = O.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: s, canLoadMore: o, loadMore: c, loading: d } = (0, k.qQ)(e, t, n, l),
                { searchResults: u, isSearchLoading: m } = (0, W.XZ)({ channelId: e.id });
            return (
                (0, W.ES)(e, t, n, l),
                {
                    activeThreadIds: i,
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
        z = m.length > 0,
        B = z || f.length > 0,
        H = (0, w.Z)(t),
        { tagFilter: G, tagSetting: Q } = (0, q.H)(t.id);
    (0, W.ku)(t, G, Q, u);
    let $ = (0, W.jR)(t),
        en = (0, W.eZ)(t),
        el = l.useRef(null),
        { observePostVisibilityAnalytics: ei } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: r } = e;
            X.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n
            });
            let i = l.useRef(null),
                a = l.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let r = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, K.rj)(e, t, r) : (0, K.Ct)(e, t, r);
                    }
                }, []);
            return (
                l.useEffect(() => {
                    var e;
                    let t = null == (e = r.current) ? void 0 : e.getScrollerNode();
                    if (null != t)
                        return (
                            (i.current = new IntersectionObserver((e) => a(n, e), {
                                root: t,
                                rootMargin: '0px 100000px 0px 100000px',
                                threshold: 0.5
                            })),
                            () => {
                                var e;
                                null == (e = i.current) || e.disconnect(), (i.current = null);
                            }
                        );
                }, [n, a, r]),
                {
                    observePostVisibilityAnalytics: l.useCallback(
                        (e, t) => {
                            var r;
                            if (null == e) return void (0, K.Ct)(n, t, Date.now());
                            null == (r = i.current) || r.observe(e);
                        },
                        [n]
                    )
                }
            );
        })({
            scrollerRef: el,
            channelId: t.id,
            guildId: t.guild_id
        }),
        es = F === h.X.GRID,
        eb = null != b,
        e_ = l.useRef(null),
        { containerRef: eS, containerWidth: eI } = (0, eo.Z)();
    l.useEffect(
        () => () => {
            null != t.id && V.Z.clearForumSearch(t.id);
        },
        [t.id]
    );
    let { columns: ek } = l.useMemo(() => (es ? ej.getRenderOptions(eI) : ea.eU), [es, eI]),
        eR = l.useMemo(() => (P ? Math.round((window.innerHeight - 200) / 118) : 0), [P]),
        eZ = l.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ea.KW)(ej.getWidth(eI))) * ek;
            return _ ? e : 0;
        }, [eI, ek, _]),
        eM = l.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ea.KW)(ej.getWidth(eI))) * ek;
            return y ? e : 0;
        }, [eI, ek, y]),
        eA = l.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ea.KW)(ej.getWidth(eI))) * ek;
            return R && eb ? e : 0;
        }, [eI, ek, R, eb]),
        eL = l.useMemo(() => {
            if (es)
                if (!$ && eb) return [1, 0];
                else if (!en) return [1, m.length + eZ, 0];
                else if (eb) return [1, b.length + eA, 0];
                else return [1, m.length + eZ, f.length + eM];
            return !$ && eb ? [1, 1] : en ? (eb ? [1, b.length, 0, eR] : [1, m.length, f.length, eR]) : [1, m.length, 1];
        }, [es, eb, m.length, f.length, $, en, eR, b, eZ, eM, eA]),
        eF = l.useMemo(() => (!$ && eb ? [[], []] : en ? (eb ? [[], b, [], []] : [[], m, f, []]) : [[], m, []]), [eb, $, en, b, m, f]),
        eD = l.useCallback(
            (e, n) => {
                (0, J.B5)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: {
                        page: eu.ZY5.GUILD_CHANNEL,
                        section: eu.jXE.FORUM_CHANNEL_POST
                    }
                }),
                    n ? (0, I.ad)(e, { source: em.on.BROWSER }) : ((e_.current = e.id), (0, Z.ok)(e));
            },
            [t.guild_id, t.id, e_]
        ),
        [ez, eB] = l.useState(i + s - 24),
        eH = l.useCallback(
            (e, n, l) =>
                0 === e
                    ? (0, r.jsx)(
                          eE,
                          {
                              channel: t,
                              isEmpty: !z,
                              isSearchLoading: R,
                              numResults: null == b ? void 0 : b.length,
                              coords: n,
                              onHeightChange: eB,
                              children:
                                  !P &&
                                  (0, r.jsx)(
                                      Y.Z,
                                      {
                                          channel: t,
                                          hasAnyThread: B,
                                          hasActiveThreads: z
                                      },
                                      t.id
                                  )
                          },
                          'forum-channel-header'
                      )
                    : 2 !== e || en
                      ? 1 === e && eb && !$
                          ? (0, r.jsx)(
                                eP,
                                {
                                    channel: t,
                                    coords: n
                                },
                                'archive-or-search-result'
                            )
                          : l()
                      : (0, r.jsx)(
                            eN,
                            {
                                channel: t,
                                coords: n
                            },
                            'archived-missing-reading-history-perm'
                        ),
            [eb, en, b, $, t, z, R, P, B]
        ),
        eU = (0, g.e7)([U.Z], () => U.Z.hasHidden(t.id)),
        eV = {
            editorHeight: i,
            isGridLayout: es
        },
        eG = l.useRef(eV);
    l.useEffect(() => {
        eG.current = eV;
    }),
        l.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: r } = eG.current,
                l = r ? eY : el,
                i = null == (e = l.current) ? void 0 : e.getScrollerState();
            null != i && !eU && i.scrollTop > n && (null == (t = l.current) || t.scrollTo({ to: 0 }));
        }, [eU]);
    let {
            updateListScrollerRef: eq,
            renderListSection: eW,
            renderListItem: eX,
            getListSectionHeight: eK,
            getListItemHeight: eJ
        } = (function (e) {
            let { listRef: t, hasActiveThreads: n, threadIdsBySection: i, listViewCardHeights: s, editorHeight: o, editorAdditionRowHeight: c, renderSectionOrItem: d, goToThread: u, observePostVisibilityAnalytics: m, isShowingSearchResult: h } = e,
                f = (0, g.e7)([D.Z], () => D.Z.getChannelId()),
                p = l.useCallback(
                    (e) => (n) => {
                        var r;
                        (t.current = n), (e.current = null != (r = null == n ? void 0 : n.getScrollerNode()) ? r : null);
                    },
                    [t]
                ),
                b = l.useCallback(
                    (e) =>
                        ey({
                            section: e.section,
                            isShowingSearchResult: h,
                            hasActiveThreads: n
                        })(),
                    [n, h]
                ),
                j = l.useCallback(
                    (e) =>
                        d(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, r.jsx)(
                                          'div',
                                          {
                                              'data-item-role': 'item',
                                              className: a()(eg.loadingCard, eg['loadingCard-'.concat(e.row % 3)])
                                          },
                                          'loading-'.concat(e.row)
                                      );
                            let t = i[e.section][e.row],
                                n = null != f && (0, N.UD)(f) ? T.ZP : ee.ZP;
                            return (0, r.jsx)(
                                'li',
                                {
                                    className: eg.card,
                                    'data-item-role': 'item',
                                    children: (0, r.jsx)(x.y5t, {
                                        children: (0, r.jsx)(n, {
                                            className: eg.mainCard,
                                            threadId: t,
                                            goToThread: u,
                                            observePostVisibilityAnalytics: m
                                        })
                                    })
                                },
                                ''.concat(e.section, '-').concat(t)
                            );
                        }),
                    [d, i, f, u, m]
                ),
                v = l.useCallback(
                    (e, t) => {
                        if (0 === e) return o + c;
                        let n = s[i[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [i, s, o, c]
                );
            return {
                updateListScrollerRef: p,
                renderListSection: b,
                renderListItem: j,
                getListSectionHeight: l.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: v
            };
        })({
            listRef: el,
            hasActiveThreads: z,
            threadIdsBySection: eF,
            listViewCardHeights: o,
            editorHeight: i,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eH,
            goToThread: eD,
            observePostVisibilityAnalytics: ei,
            isShowingSearchResult: eb
        }),
        eY = l.useRef(null),
        {
            updateMasonryListScrollerRef: eQ,
            getItemKey: e$,
            renderGridSection: e0,
            renderGridItem: e3,
            getGridSectionHeight: e8,
            getSectionProps: e6,
            handleGridFocus: e1
        } = (function (e) {
            let { masonryListScrollerRef: t, threadIdsBySection: n, goToThread: i, renderSectionOrItem: s, hasActiveThreads: o, isShowingSearchResult: c, canSearchForumPosts: d, canViewArchivedPosts: u, observePostVisibilityAnalytics: m, focusedThreadId: h, headerHeight: g } = e,
                f = l.useRef(null),
                x = l.useCallback(
                    (e) => {
                        (t.current = e), (f.current = null == e ? void 0 : e.getScrollerNode());
                    },
                    [t]
                ),
                p = l.useCallback(
                    (e, n) => {
                        let { current: r } = t;
                        if (null == r) return;
                        let l = document.querySelector(e);
                        if (null == l) return;
                        let i = r.getCoordsMap()[n],
                            a = null != i ? i.height + 20 : 200;
                        r.scrollIntoViewNode({
                            node: l,
                            padding: a,
                            callback() {
                                requestAnimationFrame(() => {
                                    var t;
                                    null == (t = document.querySelector(e)) || t.focus({ preventScroll: !0 });
                                });
                            }
                        }),
                            (h.current = ew(n));
                    },
                    [t, h]
                ),
                b = l.useCallback(
                    (e) => {
                        let t = ew(e);
                        if (null == t) return;
                        let n = A.Z.getChannel(t);
                        null != n && i(n, !0);
                    },
                    [i]
                ),
                j = l.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return 'section-'.concat(e, '-').concat(t);
                        {
                            let r = n[e][t];
                            return null == r ? eO(e, t) : eO(e, r);
                        }
                    },
                    [n]
                ),
                v = l.useCallback(
                    (e, t, n) =>
                        s(
                            e,
                            t,
                            ey({
                                section: e,
                                coords: t,
                                key: n,
                                isShowingSearchResult: c,
                                hasActiveThreads: o
                            })
                        ),
                    [s, o, c]
                ),
                C = l.useCallback(
                    (e) =>
                        0 === e
                            ? {}
                            : {
                                  role: 'grid',
                                  'aria-labelledby': '#'.concat(ev(e))
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
                renderGridItem: l.useCallback(
                    (e, t, l, s, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, r.jsx)(
                                  er.Z,
                                  {
                                      id: ''.concat(s),
                                      threadId: c,
                                      className: a()(eg.card, eg.mainCard),
                                      goToThread: i,
                                      observePostVisibilityAnalytics: m,
                                      coords: l,
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
                                        style: ef({}, l),
                                        'data-item-role': 'item',
                                        className: a()(eg.loadingCard, eg['loadingCard-'.concat(t % 3)])
                                    },
                                    s
                                );
                    },
                    [n, i, m]
                ),
                getSectionProps: C,
                getGridSectionHeight: l.useCallback((e) => (0 === e ? g - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0), [g, c, d, o, u])
            };
        })({
            masonryListScrollerRef: eY,
            threadIdsBySection: eF,
            goToThread: eD,
            renderSectionOrItem: eH,
            hasActiveThreads: z,
            isShowingSearchResult: eb,
            canSearchForumPosts: $,
            canViewArchivedPosts: en,
            observePostVisibilityAnalytics: ei,
            focusedThreadId: e_,
            headerHeight: ez
        });
    !(function (e) {
        let { masonryListScrollerRef: t, containerWidth: n, isGridLayout: r, threadIdsBySection: i, focusedThreadId: a, parentId: s } = e;
        l.useEffect(() => {
            if (r) {
                let e = setTimeout(() => {
                    if (null == t.current || null == a.current) return;
                    let e = a.current;
                    if ('string' != typeof e) return;
                    if (null == M.ZP.getSidebarState(s)) {
                        a.current = null;
                        return;
                    }
                    let n = i.findIndex((t) => t.find((t) => t === e)),
                        r = t.current.getCoordsMap(),
                        l = r['__section__'.concat(n)],
                        o = r[eO(n, e)];
                    null != l &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: l.top + o.top - 100,
                            end: l.top + o.top + o.height + 50
                        });
                }, 500);
                return () => clearTimeout(e);
            }
        }, [s, n, r, i, a, t]);
    })({
        masonryListScrollerRef: eY,
        containerWidth: eI,
        isGridLayout: es,
        threadIdsBySection: eF,
        parentId: t.id,
        focusedThreadId: e_
    });
    let e9 = l.useCallback(() => {
            var e, n;
            if (eb) return;
            let r = es ? (null == (e = eY.current) ? void 0 : e.getScrollerState()) : null == (n = el.current) ? void 0 : n.getScrollerState();
            if (null == r) return;
            (0, J.ab)({
                guildId: t.guild_id,
                channelId: t.id
            });
            let l = r.scrollTop + r.offsetHeight;
            r.scrollHeight - l < (es ? Math.max(200, (0, ea.KW)(eI)) : 200) && C();
        }, [eb, es, t.guild_id, t.id, eI, C]),
        e4 = (0, g.e7)([j.Z], () => j.Z.keyboardModeEnabled),
        e5 = (0, ec.ZP)({
            id: 'forum-grid-view',
            isEnabled: es && e4,
            setFocus: e1
        }),
        e2 = (0, ed.Z)({
            listRef: el,
            padding: 96,
            isEnabled: !es && e4,
            channel: t
        }),
        e7 = e5.containerProps,
        { ref: te } = e7,
        tt = ep(e7, ['ref']),
        tn = M.ZP.getSidebarState(t.id),
        tr = null != tn && (0, M.D5)(tn),
        tl = (0, g.e7)([M.ZP], () => M.ZP.getSection(t.id)) === eu.ULH.MEMBERS;
    return (0, r.jsx)('div', {
        className: eg.container,
        ref: eS,
        'data-member-list-open': tl,
        children: (0, r.jsx)(x.Wdt, {
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        u &&
                            (0, r.jsx)(p.Z, {
                                channel: t,
                                draftType: L.d.FirstThreadMessage,
                                className: eg.uploadArea,
                                style: { right: tr && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0 }
                            }),
                        (0, r.jsx)(eT, { channel: t }),
                        (0, r.jsx)(x.nn4, { children: (0, r.jsx)(x.H, { children: eh.intl.string(eh.t.B2panJ) }) }),
                        H
                            ? (0, r.jsx)('div', {
                                  className: eg.optInNotice,
                                  children: (0, r.jsx)(S.Z, { channel: t })
                              })
                            : null,
                        es
                            ? (0, r.jsx)(ec.KT, {
                                  navigator: e5,
                                  children: (0, r.jsx)(
                                      x.GMG,
                                      ef(
                                          {
                                              ref: (e) => {
                                                  var t;
                                                  (te.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), eQ(e);
                                              },
                                              itemGutter: 16,
                                              padding: 24,
                                              className: eg.grid,
                                              columns: ek,
                                              sections: eL,
                                              getItemKey: e$,
                                              getSectionHeight: e8,
                                              getItemHeight: eC,
                                              renderSection: e0,
                                              renderItem: e3,
                                              getSectionProps: e6,
                                              onScroll: v ? e9 : void 0,
                                              chunkSize: 350
                                          },
                                          tt,
                                          e
                                      ),
                                      F
                                  )
                              })
                            : (0, r.jsx)(d.bG, {
                                  navigator: e2,
                                  children: (0, r.jsx)(d.SJ, {
                                      children: (t) => {
                                          var { ref: n } = t,
                                              l = ep(t, ['ref']);
                                          return (0, r.jsx)(
                                              x._2F,
                                              ex(
                                                  ef(
                                                      {
                                                          ref: eq(n),
                                                          className: eg.list,
                                                          sections: eL,
                                                          sectionHeight: eK,
                                                          rowHeight: eJ,
                                                          renderRow: eX,
                                                          renderSection: eW,
                                                          chunkSize: 150,
                                                          onScroll: v ? e9 : void 0,
                                                          paddingBottom: 24
                                                      },
                                                      l,
                                                      e
                                                  ),
                                                  { innerRole: 'list' }
                                              ),
                                              F
                                          );
                                      }
                                  })
                              })
                    ]
                })
        })
    });
}
function eN(e) {
    let { channel: t, coords: n } = e,
        l = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: a()(eg.missingReadHistoryPermission, eg.columnsSpan),
        style: n,
        children: (0, r.jsx)(x.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: eh.intl.format(eh.t.TycmzM, { channelName: l })
        })
    });
}
function eP(e) {
    let { channel: t, coords: n } = e,
        l = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: a()(eg.missingReadHistoryPermission, eg.columnsSpan),
        style: n,
        children: (0, r.jsx)(x.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: eh.intl.format(eh.t.OWZJdX, { channelName: l })
        })
    });
}
function eT(e) {
    let { channel: t } = e,
        n = l.useCallback(() => {
            V.Z.resort(t.id);
        }, [t]),
        i = (0, g.e7)([G.Z], () => G.Z.getNewThreadCount());
    return 0 === i
        ? null
        : (0, r.jsx)(x.P3F, {
              className: eg.newPostsButton,
              onClick: n,
              children: (0, r.jsx)(x.Text, {
                  color: 'text-brand',
                  variant: 'text-md/medium',
                  children: eh.intl.format(eh.t.ue1qfH, { count: i })
              })
          });
}
function eI() {
    return Promise.resolve();
}
function eE(e) {
    var t, n, i;
    let { channel: s, isEmpty: p, isSearchLoading: v, numResults: O, children: w, coords: S, onHeightChange: T } = e,
        {
            name: I,
            formOpen: E,
            titleFocused: k,
            hasClickedForm: Z,
            textAreaState: M,
            onboardingExpanded: A,
            setEditorAdditionRowHeight: D
        } = (0, et.xH)((e) => {
            let { name: t, formOpen: n, titleFocused: r, hasClickedForm: l, textAreaState: i, onboardingExpanded: a, setEditorAdditionRowHeight: s } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: r,
                hasClickedForm: l,
                textAreaState: i,
                onboardingExpanded: a,
                setEditorAdditionRowHeight: s
            };
        }, c.X),
        { tagFilter: U, layoutType: G } = (0, q.H)(s.id),
        X = (0, et.AF)(),
        K = (0, q.v)(),
        Y = (0, g.e7)([F.Z], () => F.Z.canChatInGuild(s.guild_id)),
        ee = (0, W.r_)(s),
        er = (0, R.cD)(s),
        [el, ea] = l.useState(er),
        [, eo] = (0, _.AB)(null != (i = s.getGuildId()) ? i : void 0),
        ec = (0, P.HL)(s),
        ed = Y && (er || (el && eo)) && !ec,
        em = s.isMediaChannel();
    l.useEffect(() => {
        er && ea(!0);
    }, [er]);
    let { ref: eb, height: ej } = (0, b.ZP)();
    l.useEffect(() => {
        null != ej && T(ej);
    }, [T, ej]);
    let ev = l.useCallback(() => {
        o()(() => {
            null != eb.current && X.getState().setEditorHeight(eb.current.offsetHeight);
        });
    }, [eb, X]);
    l.useLayoutEffect(ev, [ev, p, ed, A]),
        (0, H.yp)({
            event: eu.CkL.REMEASURE_TARGET,
            handler: ev
        });
    let eC = (0, g.e7)([z.Z], () => z.Z.getUploads(s.id, L.d.FirstThreadMessage)),
        e_ = (0, W.ql)(s),
        ey = l.useRef(null),
        eO = l.useRef(null),
        [ew, eS] = l.useState(0),
        { width: eN } = (0, g.e7)([B.Z], () => B.Z.windowSize()),
        eP = null == (n = ey.current) || null == (t = n.getBoundingClientRect()) ? void 0 : t.width,
        eT = l.useRef(null),
        eE = l.useRef(null);
    l.useLayoutEffect(() => {
        var e;
        let t = eO.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0];
        if (null != ey.current && null != n && null != n.children) {
            let { left: e, top: t } = ey.current.getBoundingClientRect(),
                r = 0;
            for (let l of n.children) {
                let { right: n, top: i, height: a } = l.getBoundingClientRect();
                if (i - t > a) break;
                n - e > r && (r = n - e);
            }
            eS(r);
        }
    }, [s.availableTags, eN, eP, U]);
    let eR = I.length > 0 && !E && (v || null != O),
        eZ = !__OVERLAY__ && !Z && !E && k && (0 === M.textValue.trim().length || M.textValue.trim() === e_) && 0 === eC.length && !ec;
    l.useLayoutEffect(() => {
        let e = eR || eZ;
        if (!e) return D(0);
        null != eT.current && D(e ? eT.current.clientHeight : 0);
    }, [D, eR, eZ, eT]);
    let eM = (e) => {
            (0, J.e7)({
                guildId: s.guild_id,
                channelId: s.id,
                tagId: e,
                filterTagIds: Array.from(U),
                added: !U.has(e),
                location: {
                    page: eu.ZY5.GUILD_CHANNEL,
                    section: eu.jXE.FORUM_CHANNEL_HEADER,
                    object: eu.qAy.CHANNEL_TAG
                }
            }),
                K.getState().toggleTagFilter(s.id, e);
        },
        eA = (0, u.ZP)({
            id: ''.concat(s.id, '-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eI,
            scrollToEnd: eI,
            orientation: m.hy.HORIZONTAL
        }),
        eL = (0, d.JA)('forum-channel-header'),
        { role: eF, onFocus: eD } = eL,
        ez = ep(eL, ['role', 'onFocus']),
        eB = l.useRef(null),
        eH = (function () {
            let e = l.useRef(!1),
                t = (0, g.e7)([j.Z], () => j.Z.keyboardModeEnabled),
                n = l.useCallback(
                    (t) => {
                        e.current = t.shiftKey;
                    },
                    [e]
                );
            return l.useLayoutEffect(() => (t ? window.addEventListener('keydown', n) : window.removeEventListener('keydown', n), () => window.removeEventListener('keydown', n)), [t, n]), e;
        })(),
        eU = l.useCallback(
            (e) => {
                if ((eD(), e.target === eb.current && !eH.current)) {
                    var t;
                    null == (t = eB.current) || t.focus();
                }
            },
            [eD, eb, eH]
        ),
        eV = l.useMemo(() => (ec ? (0, N.iq)(s.availableTags) : s.availableTags), [s.availableTags, ec]);
    return (0, r.jsx)(
        'div',
        ex(
            ef(
                {
                    className: a()(eg.card, eg.headerRow, eg.columnsSpan),
                    ref: eb,
                    onFocus: eU
                },
                ez
            ),
            {
                style: ex(ef({}, S), {
                    position: G === h.X.GRID ? 'absolute' : 'static',
                    height: 'auto'
                }),
                children: (0, r.jsxs)(H.I3, {
                    children: [
                        null != s.guild_id
                            ? (0, r.jsx)(y.Z, {
                                  className: a()(eg.newMemberBanner, { [eg.gridViewBanner]: G === h.X.GRID }),
                                  guildId: s.guild_id,
                                  channel: s
                              })
                            : null,
                        (0, r.jsx)('div', {
                            className: a()(eg.mainCard, eg.header, { [eg.headerWithMatchingPosts]: eR || eZ }),
                            children: (0, r.jsx)(en.Z, {
                                parentChannel: s,
                                onChange: ev,
                                isSearchLoading: v,
                                canCreatePost: ed,
                                inputRef: eB
                            })
                        }),
                        (eR || eZ) &&
                            (0, r.jsxs)('div', {
                                className: eg.matchingPostsRow,
                                ref: eT,
                                children: [
                                    eR &&
                                        (0, r.jsxs)('div', {
                                            className: eg.matchingPosts,
                                            children: [
                                                (0, r.jsx)(x.X6q, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-normal',
                                                    children: v
                                                        ? eh.intl.string(eh.t['/9i3qq'])
                                                        : 0 === O
                                                          ? eh.intl.string(eh.t.DbgHxs)
                                                          : eh.intl.formatToPlainString(eh.t['tBz/8f'], {
                                                                numPosts: O,
                                                                query: I
                                                            })
                                                }),
                                                !v &&
                                                    (0, r.jsx)(x.P3F, {
                                                        onClick: () => {
                                                            (0, J.zI)({
                                                                guildId: s.guild_id,
                                                                channelId: s.id
                                                            }),
                                                                V.Z.clearForumSearch(s.id),
                                                                X.getState().setName('');
                                                        },
                                                        children: (0, r.jsx)(x.Text, {
                                                            variant: 'text-xs/semibold',
                                                            color: 'text-brand',
                                                            className: eg.clear,
                                                            children: eh.intl.string(eh.t.VkKicX)
                                                        })
                                                    })
                                            ]
                                        }),
                                    (0, r.jsx)('div', { className: eg.tagsSpacer }),
                                    eZ
                                        ? ed
                                            ? (0, r.jsxs)('div', {
                                                  className: eg.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(x.M2$, {
                                                          shortcut: 'SHIFT',
                                                          className: eg.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(x.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-normal',
                                                          children: '+'
                                                      }),
                                                      (0, r.jsx)(x.M2$, {
                                                          shortcut: 'ENTER',
                                                          className: eg.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(x.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-normal',
                                                          children: eh.intl.string(eh.t.ZvJ0ys)
                                                      })
                                                  ]
                                              })
                                            : (0, r.jsxs)('div', {
                                                  className: eg.startPostHelp,
                                                  children: [
                                                      (0, r.jsx)(x.P4T, {
                                                          size: 'custom',
                                                          color: 'currentColor',
                                                          height: 14,
                                                          width: 14,
                                                          className: eg.warnIcon
                                                      }),
                                                      (0, r.jsx)(x.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-normal',
                                                          children: eh.intl.string(eh.t.iyzwnJ)
                                                      })
                                                  ]
                                              })
                                        : null
                                ]
                            }),
                        (0, r.jsx)(Q.Z, {
                            channel: s,
                            onChange: ev
                        }),
                        (0, r.jsxs)('div', {
                            className: eg.tagsContainer,
                            ref: ey,
                            children: [
                                (0, r.jsx)(ek, { channel: s }),
                                eV.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: eg.divider }),
                                              (0, r.jsx)('div', {
                                                  className: eg.tagList,
                                                  ref: eO,
                                                  children: (0, r.jsx)(d.bG, {
                                                      navigator: eA,
                                                      children: (0, r.jsx)(d.SJ, {
                                                          children: (e) => {
                                                              var { ref: t } = e,
                                                                  n = ep(e, ['ref']);
                                                              return (0, r.jsx)(
                                                                  'div',
                                                                  ex(
                                                                      ef(
                                                                          {
                                                                              className: eg.tagListInner,
                                                                              ref: t
                                                                          },
                                                                          n
                                                                      ),
                                                                      {
                                                                          children: eV.map((e) =>
                                                                              (0, r.jsx)(
                                                                                  ei.Z,
                                                                                  {
                                                                                      className: eg.tag,
                                                                                      tag: e,
                                                                                      onClick: () => eM(e.id),
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
                                              (0, r.jsx)(x.yRy, {
                                                  targetElementRef: eE,
                                                  renderPopout: (e) => {
                                                      let { closePopout: t, setPopoutRef: n } = e;
                                                      return (0, r.jsx)(es.Z, {
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
                                                          ex(ef({}, e), {
                                                              buttonRef: eE,
                                                              size: x.zxk.Sizes.MIN,
                                                              color: x.zxk.Colors.CUSTOM,
                                                              className: a()(eg.tagsButton, { [eg.tagsButtonWithCount]: U.size > 0 }),
                                                              style: { left: ew },
                                                              innerClassName: eg.tagsButtonInner,
                                                              'aria-label': U.size > 0 ? eh.intl.string(eh.t.IkpM1d) : eh.intl.string(eh.t['9vKK/P']),
                                                              children: [
                                                                  U.size > 0
                                                                      ? (0, r.jsx)('div', {
                                                                            className: eg.countContainer,
                                                                            children: (0, r.jsx)(x.Text, {
                                                                                className: eg.countText,
                                                                                color: 'none',
                                                                                variant: 'text-xs/medium',
                                                                                children: U.size
                                                                            })
                                                                        })
                                                                      : eh.intl.string(eh.t.fZ8hzs),
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
                                                  className: a()(eg.tagsButton, eg.tagsButtonPlaceholder),
                                                  innerClassName: eg.tagsButtonInner,
                                                  'aria-label': eh.intl.string(eh.t.IkpM1d),
                                                  children: [
                                                      U.size > 0
                                                          ? (0, r.jsx)('div', {
                                                                className: eg.countContainer,
                                                                children: (0, r.jsx)(x.Text, {
                                                                    className: eg.countText,
                                                                    color: 'none',
                                                                    variant: 'text-xs/medium',
                                                                    children: U.size
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
                        ee &&
                            !em &&
                            !ec &&
                            (0, r.jsx)(C.ZP, {
                                contentTypes: [f.z.FORUM_CHANNEL_HELPER_CARD],
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    return t === f.z.FORUM_CHANNEL_HELPER_CARD ? (0, r.jsx)($.Z, { onDismiss: n }) : null;
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
        i = l.useRef(null);
    return (0, r.jsx)(x.yRy, {
        targetElementRef: i,
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
            let { isShown: l } = t;
            return (0, r.jsxs)(
                x.zxk,
                ex(ef({}, e), {
                    buttonRef: i,
                    size: x.zxk.Sizes.MIN,
                    color: x.zxk.Colors.CUSTOM,
                    className: eg.sortDropdown,
                    innerClassName: eg.sortDropdownInner,
                    'aria-label': n ? eh.intl.string(eh.t.JxU0ws) : eh.intl.string(eh.t.xyYt8P),
                    children: [
                        (0, r.jsx)(x.uVW, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        (0, r.jsx)(x.Text, {
                            className: eg.sortDropdownText,
                            variant: 'text-sm/medium',
                            color: 'interactive-normal',
                            children: n ? eh.intl.string(eh.t.JxU0ws) : eh.intl.string(eh.t.xyYt8P)
                        }),
                        l
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
