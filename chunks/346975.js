n.r(t), n.d(t, { default: () => ej }), n(35282), n(388685), n(781311);
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
    el = n(219664),
    ei = n(895932),
    ea = n(479099),
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
function ej(e) {
    let { channel: t, guild: n, sidebarState: l } = e;
    return (0, r.jsx)(
        en.oL,
        {
            channel: t,
            children: (0, r.jsx)(eN, {
                channel: t,
                guild: n,
                sidebarState: l
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
function eC(e) {
    return 'forum-grid-header-section-'.concat(e);
}
let e_ = (e, t, n) => (0 === e ? 0 : (0, es.KW)(n));
function ey(e) {
    let { itemRole: t, coords: n, section: l } = e;
    return (0, r.jsx)(
        'div',
        {
            className: a()(ef.card, ef.archivedDividerRow, ef.columnsSpan),
            style: n,
            'data-item-role': t,
            children: (0, r.jsx)('div', {
                className: ef.emptyMainCard,
                children: (0, r.jsx)(x.X6q, {
                    variant: 'eyebrow',
                    className: ef.archivedDivider,
                    id: eC(l),
                    children: eg.intl.string(eg.t['3+LO19'])
                })
            })
        },
        'section-divider'
    );
}
function eO(e) {
    let { section: t, coords: n, key: l, isShowingSearchResult: i, hasActiveThreads: a } = e;
    return () =>
        2 === t && !i && a
            ? (0, r.jsx)(
                  ey,
                  {
                      section: t,
                      coords: null == n ? void 0 : ep(ex({}, n), { position: 'absolute' }),
                      itemRole: 'section'
                  },
                  l
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
            editorHeight: i,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: u
        } = (0, en.xH)((e) => {
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
            isSearchLoading: Z,
            layoutType: D
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: r, tagSetting: l } = (0, W.H)(e.id),
                i = (0, X.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: l,
                    shouldAutomaticallyAck: !0
                }),
                a = (0, g.e7)([R.Z, O.Z], () => {
                    let t = R.Z.hasLoaded(e.guild_id),
                        n = O.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: s, canLoadMore: o, loadMore: c, loading: d } = (0, k.qQ)(e, t, n, l),
                { searchResults: u, isSearchLoading: m } = (0, X.XZ)({ channelId: e.id });
            return (
                (0, X.ES)(e, t, n, l),
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
        B = m.length > 0,
        H = B || f.length > 0,
        U = (0, w.Z)(t),
        { tagFilter: q, tagSetting: $ } = (0, W.H)(t.id);
    (0, X.ku)(t, q, $, u);
    let ee = (0, X.jR)(t),
        er = (0, X.eZ)(t),
        ei = l.useRef(null),
        { observePostVisibilityAnalytics: ea } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: r } = e;
            K.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n
            });
            let i = l.useRef(null),
                a = l.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let r = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, J.rj)(e, t, r) : (0, J.Ct)(e, t, r);
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
                            if (null == e) return void (0, J.Ct)(n, t, Date.now());
                            null == (r = i.current) || r.observe(e);
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
        eo = D === h.X.GRID,
        ej = null != b,
        ey = l.useRef(null),
        { containerRef: eN, containerWidth: eE } = (0, ec.Z)();
    l.useEffect(
        () => () => {
            null != t.id && G.Z.clearForumSearch(t.id);
        },
        [t.id]
    ),
        l.useEffect(() => {
            if (null == ey.current && null != t.id) {
                let e = A.ZP.getSidebarState(t.id);
                null != e && e.type === E.tI.VIEW_THREAD && (ey.current = e.channelId);
            }
        }, [t.id]);
    let { columns: ek } = l.useMemo(() => (eo ? ev.getRenderOptions(eE) : es.eU), [eo, eE]),
        eZ = l.useMemo(() => (P ? Math.round((window.innerHeight - 200) / 118) : 0), [P]),
        eM = l.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, es.KW)(ev.getWidth(eE))) * ek;
            return _ ? e : 0;
        }, [eE, ek, _]),
        eA = l.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, es.KW)(ev.getWidth(eE))) * ek;
            return y ? e : 0;
        }, [eE, ek, y]),
        eL = l.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, es.KW)(ev.getWidth(eE))) * ek;
            return Z && ej ? e : 0;
        }, [eE, ek, Z, ej]),
        eF = l.useMemo(() => {
            if (eo)
                if (!ee && ej) return [1, 0];
                else if (!er) return [1, m.length + eM, 0];
                else if (ej) return [1, b.length + eL, 0];
                else return [1, m.length + eM, f.length + eA];
            return !ee && ej ? [1, 1] : er ? (ej ? [1, b.length, 0, eZ] : [1, m.length, f.length, eZ]) : [1, m.length, 1];
        }, [eo, ej, m.length, f.length, ee, er, eZ, b, eM, eA, eL]),
        eD = l.useMemo(() => (!ee && ej ? [[], []] : er ? (ej ? [[], b, [], []] : [[], m, f, []]) : [[], m, []]), [ej, ee, er, b, m, f]),
        ez = l.useCallback(
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
                    n ? (0, I.ad)(e, { source: eh.on.BROWSER }) : ((ey.current = e.id), (0, M.ok)(e));
            },
            [t.guild_id, t.id, ey]
        ),
        [eB, eH] = l.useState(i + s - 24),
        eU = l.useCallback(
            (e, n, l) =>
                0 === e
                    ? (0, r.jsx)(
                          eR,
                          {
                              channel: t,
                              isEmpty: !B,
                              isSearchLoading: Z,
                              numResults: null == b ? void 0 : b.length,
                              coords: n,
                              onHeightChange: eH,
                              children:
                                  !P &&
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
                      ? 1 === e && ej && !ee
                          ? (0, r.jsx)(
                                eT,
                                {
                                    channel: t,
                                    coords: n
                                },
                                'archive-or-search-result'
                            )
                          : l()
                      : (0, r.jsx)(
                            eP,
                            {
                                channel: t,
                                coords: n
                            },
                            'archived-missing-reading-history-perm'
                        ),
            [ej, er, b, ee, t, B, Z, P, H]
        ),
        eV = (0, g.e7)([V.Z], () => V.Z.hasHidden(t.id)),
        eG = {
            editorHeight: i,
            isGridLayout: eo
        },
        eq = l.useRef(eG);
    l.useEffect(() => {
        eq.current = eG;
    }),
        l.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: r } = eq.current,
                l = r ? eQ : ei,
                i = null == (e = l.current) ? void 0 : e.getScrollerState();
            null != i && !eV && i.scrollTop > n && (null == (t = l.current) || t.scrollTo({ to: 0 }));
        }, [eV]);
    let {
            updateListScrollerRef: eW,
            renderListSection: eX,
            renderListItem: eK,
            getListSectionHeight: eJ,
            getListItemHeight: eY
        } = (function (e) {
            let { listRef: t, hasActiveThreads: n, threadIdsBySection: i, listViewCardHeights: s, editorHeight: o, editorAdditionRowHeight: c, renderSectionOrItem: d, goToThread: u, observePostVisibilityAnalytics: m, isShowingSearchResult: h } = e,
                f = (0, g.e7)([z.Z], () => z.Z.getChannelId()),
                p = l.useCallback(
                    (e) => (n) => {
                        var r;
                        (t.current = n), (e.current = null != (r = null == n ? void 0 : n.getScrollerNode()) ? r : null);
                    },
                    [t]
                ),
                b = l.useCallback(
                    (e) =>
                        eO({
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
                                              className: a()(ef.loadingCard, ef['loadingCard-'.concat(e.row % 3)])
                                          },
                                          'loading-'.concat(e.row)
                                      );
                            let t = i[e.section][e.row],
                                n = null != f && (0, N.UD)(f) ? T.ZP : et.ZP;
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
            listRef: ei,
            hasActiveThreads: B,
            threadIdsBySection: eD,
            listViewCardHeights: o,
            editorHeight: i,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eU,
            goToThread: ez,
            observePostVisibilityAnalytics: ea,
            isShowingSearchResult: ej
        }),
        eQ = l.useRef(null),
        {
            updateMasonryListScrollerRef: e$,
            getItemKey: e0,
            renderGridSection: e3,
            renderGridItem: e1,
            getGridSectionHeight: e8,
            getSectionProps: e6,
            handleGridFocus: e9
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
                            (h.current = eS(n));
                    },
                    [t, h]
                ),
                b = l.useCallback(
                    (e) => {
                        let t = eS(e);
                        if (null == t) return;
                        let n = L.Z.getChannel(t);
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
                            return null == r ? ew(e, t) : ew(e, r);
                        }
                    },
                    [n]
                ),
                v = l.useCallback(
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
                C = l.useCallback(
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
                renderGridItem: l.useCallback(
                    (e, t, l, s, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, r.jsx)(
                                  el.Z,
                                  {
                                      id: ''.concat(s),
                                      threadId: c,
                                      className: a()(ef.card, ef.mainCard),
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
                                        style: ex({}, l),
                                        'data-item-role': 'item',
                                        className: a()(ef.loadingCard, ef['loadingCard-'.concat(t % 3)])
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
            masonryListScrollerRef: eQ,
            threadIdsBySection: eD,
            goToThread: ez,
            renderSectionOrItem: eU,
            hasActiveThreads: B,
            isShowingSearchResult: ej,
            canSearchForumPosts: ee,
            canViewArchivedPosts: er,
            observePostVisibilityAnalytics: ea,
            focusedThreadId: ey,
            headerHeight: eB
        });
    !(function (e) {
        let { masonryListScrollerRef: t, containerWidth: n, isGridLayout: r, threadIdsBySection: i, focusedThreadId: a, parentId: s } = e;
        l.useEffect(() => {
            if (r) {
                let e = setTimeout(() => {
                    if (null == t.current || null == a.current) return;
                    let e = a.current;
                    if ('string' != typeof e) return;
                    null == A.ZP.getSidebarState(s) && (a.current = null);
                    let n = i.findIndex((t) => t.find((t) => t === e)),
                        r = t.current.getCoordsMap(),
                        l = r['__section__'.concat(n)],
                        o = r[ew(n, e)];
                    null != l &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: l.top + o.top - 100,
                            end: l.top + o.top + o.height + 50
                        });
                }, 0);
                return () => clearTimeout(e);
            }
        }, [s, n, r, i, a, t]);
    })({
        masonryListScrollerRef: eQ,
        containerWidth: eE,
        isGridLayout: eo,
        threadIdsBySection: eD,
        parentId: t.id,
        focusedThreadId: ey
    });
    let e4 = l.useCallback(() => {
            var e, n;
            if (ej) return;
            let r = eo ? (null == (e = eQ.current) ? void 0 : e.getScrollerState()) : null == (n = ei.current) ? void 0 : n.getScrollerState();
            if (null == r) return;
            (0, Y.ab)({
                guildId: t.guild_id,
                channelId: t.id
            });
            let l = r.scrollTop + r.offsetHeight;
            r.scrollHeight - l < (eo ? Math.max(200, (0, es.KW)(eE)) : 200) && C();
        }, [ej, eo, t.guild_id, t.id, eE, C]),
        e5 = (0, g.e7)([j.Z], () => j.Z.keyboardModeEnabled),
        e2 = (0, ed.ZP)({
            id: 'forum-grid-view',
            isEnabled: eo && e5,
            setFocus: e9
        }),
        e7 = (0, eu.Z)({
            listRef: ei,
            padding: 96,
            isEnabled: !eo && e5,
            channel: t
        }),
        te = e2.containerProps,
        { ref: tt } = te,
        tn = eb(te, ['ref']),
        tr = A.ZP.getSidebarState(t.id),
        tl = null != tr && (0, A.D5)(tr),
        ti = (0, g.e7)([A.ZP], () => A.ZP.getSection(t.id)) === em.ULH.MEMBERS;
    return (0, r.jsx)('div', {
        className: ef.container,
        ref: eN,
        'data-member-list-open': ti,
        children: (0, r.jsx)(x.Wdt, {
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        u &&
                            (0, r.jsx)(p.Z, {
                                channel: t,
                                draftType: F.d.FirstThreadMessage,
                                className: ef.uploadArea,
                                style: { right: tl && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0 }
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
                                  navigator: e2,
                                  children: (0, r.jsx)(
                                      x.GMG,
                                      ex(
                                          {
                                              ref: (e) => {
                                                  var t;
                                                  (tt.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), e$(e);
                                              },
                                              itemGutter: 16,
                                              padding: 24,
                                              className: ef.grid,
                                              columns: ek,
                                              sections: eF,
                                              getItemKey: e0,
                                              getSectionHeight: e8,
                                              getItemHeight: e_,
                                              renderSection: e3,
                                              renderItem: e1,
                                              getSectionProps: e6,
                                              onScroll: v ? e4 : void 0,
                                              chunkSize: 350
                                          },
                                          tn,
                                          e
                                      ),
                                      D
                                  )
                              })
                            : (0, r.jsx)(d.bG, {
                                  navigator: e7,
                                  children: (0, r.jsx)(d.SJ, {
                                      children: (t) => {
                                          var { ref: n } = t,
                                              l = eb(t, ['ref']);
                                          return (0, r.jsx)(
                                              x._2F,
                                              ep(
                                                  ex(
                                                      {
                                                          ref: eW(n),
                                                          className: ef.list,
                                                          sections: eF,
                                                          sectionHeight: eJ,
                                                          rowHeight: eY,
                                                          renderRow: eK,
                                                          renderSection: eX,
                                                          chunkSize: 150,
                                                          onScroll: v ? e4 : void 0,
                                                          paddingBottom: 24
                                                      },
                                                      l,
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
function eP(e) {
    let { channel: t, coords: n } = e,
        l = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: a()(ef.missingReadHistoryPermission, ef.columnsSpan),
        style: n,
        children: (0, r.jsx)(x.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: eg.intl.format(eg.t.TycmzM, { channelName: l })
        })
    });
}
function eT(e) {
    let { channel: t, coords: n } = e,
        l = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: a()(ef.missingReadHistoryPermission, ef.columnsSpan),
        style: n,
        children: (0, r.jsx)(x.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: eg.intl.format(eg.t.OWZJdX, { channelName: l })
        })
    });
}
function eI(e) {
    let { channel: t } = e,
        n = l.useCallback(() => {
            G.Z.resort(t.id);
        }, [t]),
        i = (0, g.e7)([q.Z], () => q.Z.getNewThreadCount());
    return 0 === i
        ? null
        : (0, r.jsx)(x.P3F, {
              className: ef.newPostsButton,
              onClick: n,
              children: (0, r.jsx)(x.Text, {
                  color: 'text-brand',
                  variant: 'text-md/medium',
                  children: eg.intl.format(eg.t.ue1qfH, { count: i })
              })
          });
}
function eE() {
    return Promise.resolve();
}
function eR(e) {
    var t, n, i;
    let { channel: s, isEmpty: p, isSearchLoading: v, numResults: O, children: w, coords: S, onHeightChange: T } = e,
        {
            name: I,
            formOpen: E,
            titleFocused: R,
            hasClickedForm: k,
            textAreaState: M,
            onboardingExpanded: A,
            setEditorAdditionRowHeight: L
        } = (0, en.xH)((e) => {
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
        { tagFilter: z, layoutType: V } = (0, W.H)(s.id),
        q = (0, en.AF)(),
        K = (0, W.v)(),
        J = (0, g.e7)([D.Z], () => D.Z.canChatInGuild(s.guild_id)),
        Q = (0, X.r_)(s),
        et = (0, Z.cD)(s),
        [el, ei] = l.useState(et),
        [, es] = (0, _.AB)(null != (i = s.getGuildId()) ? i : void 0),
        ec = (0, P.HL)(s),
        ed = J && (et || (el && es)) && !ec,
        eu = s.isMediaChannel();
    l.useEffect(() => {
        et && ei(!0);
    }, [et]);
    let { ref: eh, height: ej } = (0, b.ZP)();
    l.useEffect(() => {
        null != ej && T(ej);
    }, [T, ej]);
    let ev = l.useCallback(() => {
        o()(() => {
            null != eh.current && q.getState().setEditorHeight(eh.current.offsetHeight);
        });
    }, [eh, q]);
    l.useLayoutEffect(ev, [ev, p, ed, A]),
        (0, U.yp)({
            event: em.CkL.REMEASURE_TARGET,
            handler: ev
        });
    let eC = (0, g.e7)([B.Z], () => B.Z.getUploads(s.id, F.d.FirstThreadMessage)),
        e_ = (0, X.ql)(s),
        ey = l.useRef(null),
        eO = l.useRef(null),
        [ew, eS] = l.useState(0),
        { width: eN } = (0, g.e7)([H.Z], () => H.Z.windowSize()),
        eP = null == (n = ey.current) || null == (t = n.getBoundingClientRect()) ? void 0 : t.width,
        eT = l.useRef(null),
        eI = l.useRef(null);
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
    }, [s.availableTags, eN, eP, z]);
    let eR = I.length > 0 && !E && (v || null != O),
        eZ = !__OVERLAY__ && !k && !E && R && (0 === M.textValue.trim().length || M.textValue.trim() === e_) && 0 === eC.length && !ec;
    l.useLayoutEffect(() => {
        let e = eR || eZ;
        if (!e) return L(0);
        null != eT.current && L(e ? eT.current.clientHeight : 0);
    }, [L, eR, eZ, eT]);
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
                if ((eD(), e.target === eh.current && !eH.current)) {
                    var t;
                    null == (t = eB.current) || t.focus();
                }
            },
            [eD, eh, eH]
        ),
        eV = l.useMemo(() => (ec ? (0, N.iq)(s.availableTags) : s.availableTags), [s.availableTags, ec]);
    return (0, r.jsx)(
        'div',
        ep(
            ex(
                {
                    className: a()(ef.card, ef.headerRow, ef.columnsSpan),
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
                                  className: a()(ef.newMemberBanner, { [ef.gridViewBanner]: V === h.X.GRID }),
                                  guildId: s.guild_id,
                                  channel: s
                              })
                            : null,
                        (0, r.jsx)('div', {
                            className: a()(ef.mainCard, ef.header, { [ef.headerWithMatchingPosts]: eR || eZ }),
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
                                ref: eT,
                                children: [
                                    eR &&
                                        (0, r.jsxs)('div', {
                                            className: ef.matchingPosts,
                                            children: [
                                                (0, r.jsx)(x.X6q, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-normal',
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
                                                          color: 'text-normal',
                                                          children: '+'
                                                      }),
                                                      (0, r.jsx)(x.M2$, {
                                                          shortcut: 'ENTER',
                                                          className: ef.keyboardShortcut
                                                      }),
                                                      (0, r.jsx)(x.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-normal',
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
                                                          color: 'text-normal',
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
                                                                                  ea.Z,
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
                                                              className: a()(ef.tagsButton, { [ef.tagsButtonWithCount]: z.size > 0 }),
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
                                                  className: a()(ef.tagsButton, ef.tagsButtonPlaceholder),
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
                            (0, r.jsx)(C.ZP, {
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
        i = l.useRef(null);
    return (0, r.jsx)(x.yRy, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(ei.Z, {
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
                ep(ex({}, e), {
                    buttonRef: i,
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
