n.r(t), n.d(t, { default: () => ej }), n(35282), n(388685), n(781311);
var r = n(255367),
    a = n(73800),
    l = n(120356),
    i = n.n(l),
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
    M = n(665906),
    Z = n(488131),
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
    ea = n(219664),
    el = n(895932),
    ei = n(479099),
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
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    }
    return a;
}
function ej(e) {
    let { channel: t, guild: n, sidebarState: a } = e;
    return (0, r.jsx)(
        en.oL,
        {
            channel: t,
            children: (0, r.jsx)(eN, {
                channel: t,
                guild: n,
                sidebarState: a
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
    let { itemRole: t, coords: n, section: a } = e;
    return (0, r.jsx)(
        'div',
        {
            className: i()(ef.card, ef.archivedDividerRow, ef.columnsSpan),
            style: n,
            'data-item-role': t,
            children: (0, r.jsx)('div', {
                className: ef.emptyMainCard,
                children: (0, r.jsx)(x.X6q, {
                    variant: 'eyebrow',
                    className: ef.archivedDivider,
                    id: eC(a),
                    children: eg.intl.string(eg.t['3+LO19'])
                })
            })
        },
        'section-divider'
    );
}
function eO(e) {
    let { section: t, coords: n, key: a, isShowingSearchResult: l, hasActiveThreads: i } = e;
    return () =>
        2 === t && !l && i
            ? (0, r.jsx)(
                  ey,
                  {
                      section: t,
                      coords: null == n ? void 0 : ep(ex({}, n), { position: 'absolute' }),
                      itemRole: 'section'
                  },
                  a
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
            editorHeight: l,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: u
        } = (0, en.xH)((e) => {
            let { editorHeight: t, editorAdditionRowHeight: n, listViewCardHeights: r, formOpen: a, cardHeightVersion: l } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: r,
                formOpen: a,
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
            isSearchLoading: M,
            layoutType: D
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: r, tagSetting: a } = (0, W.H)(e.id),
                l = (0, X.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: a,
                    shouldAutomaticallyAck: !0
                }),
                i = (0, g.e7)([R.Z, O.Z], () => {
                    let t = R.Z.hasLoaded(e.guild_id),
                        n = O.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: s, canLoadMore: o, loadMore: c, loading: d } = (0, k.qQ)(e, t, n, a),
                { searchResults: u, isSearchLoading: m } = (0, X.XZ)({ channelId: e.id });
            return (
                (0, X.ES)(e, t, n, a),
                {
                    activeThreadIds: l,
                    archivedThreadIds: s,
                    searchResults: u,
                    canLoadMore: o,
                    loadMore: c,
                    loading: i || d || m,
                    archivedThreadsLoading: d,
                    activeThreadsLoading: i,
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
        el = a.useRef(null),
        { observePostVisibilityAnalytics: ei } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: r } = e;
            K.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n
            });
            let l = a.useRef(null),
                i = a.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let r = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, J.rj)(e, t, r) : (0, J.Ct)(e, t, r);
                    }
                }, []);
            return (
                a.useEffect(() => {
                    var e;
                    let t = null == (e = r.current) ? void 0 : e.getScrollerNode();
                    if (null != t)
                        return (
                            (l.current = new IntersectionObserver((e) => i(n, e), {
                                root: t,
                                rootMargin: '0px 100000px 0px 100000px',
                                threshold: 0.5
                            })),
                            () => {
                                var e;
                                null == (e = l.current) || e.disconnect(), (l.current = null);
                            }
                        );
                }, [n, i, r]),
                {
                    observePostVisibilityAnalytics: a.useCallback(
                        (e, t) => {
                            var r;
                            if (null == e) return void (0, J.Ct)(n, t, Date.now());
                            null == (r = l.current) || r.observe(e);
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
        eo = D === h.X.GRID,
        ej = null != b,
        ey = a.useRef(null),
        { containerRef: eN, containerWidth: eE } = (0, ec.Z)();
    a.useEffect(
        () => () => {
            null != t.id && G.Z.clearForumSearch(t.id);
        },
        [t.id]
    ),
        a.useEffect(() => {
            if (null == ey.current && null != t.id) {
                let e = A.ZP.getSidebarState(t.id);
                null != e && e.type === E.tI.VIEW_THREAD && (ey.current = e.channelId);
            }
        }, [t.id]);
    let { columns: ek } = a.useMemo(() => (eo ? ev.getRenderOptions(eE) : es.eU), [eo, eE]),
        eM = a.useMemo(() => (P ? Math.round((window.innerHeight - 200) / 118) : 0), [P]),
        eZ = a.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, es.KW)(ev.getWidth(eE))) * ek;
            return _ ? e : 0;
        }, [eE, ek, _]),
        eA = a.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, es.KW)(ev.getWidth(eE))) * ek;
            return y ? e : 0;
        }, [eE, ek, y]),
        eL = a.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, es.KW)(ev.getWidth(eE))) * ek;
            return M && ej ? e : 0;
        }, [eE, ek, M, ej]),
        eF = a.useMemo(() => {
            if (eo)
                if (!ee && ej) return [1, 0];
                else if (!er) return [1, m.length + eZ, 0];
                else if (ej) return [1, b.length + eL, 0];
                else return [1, m.length + eZ, f.length + eA];
            return !ee && ej ? [1, 1] : er ? (ej ? [1, b.length, 0, eM] : [1, m.length, f.length, eM]) : [1, m.length, 1];
        }, [eo, ej, m.length, f.length, ee, er, eM, b, eZ, eA, eL]),
        eD = a.useMemo(() => (!ee && ej ? [[], []] : er ? (ej ? [[], b, [], []] : [[], m, f, []]) : [[], m, []]), [ej, ee, er, b, m, f]),
        ez = a.useCallback(
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
                    n ? (0, I.ad)(e, { source: eh.on.BROWSER }) : ((ey.current = e.id), (0, Z.ok)(e));
            },
            [t.guild_id, t.id, ey]
        ),
        [eB, eH] = a.useState(l + s - 24),
        eU = a.useCallback(
            (e, n, a) =>
                0 === e
                    ? (0, r.jsx)(
                          eR,
                          {
                              channel: t,
                              isEmpty: !B,
                              isSearchLoading: M,
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
                          : a()
                      : (0, r.jsx)(
                            eP,
                            {
                                channel: t,
                                coords: n
                            },
                            'archived-missing-reading-history-perm'
                        ),
            [ej, er, b, ee, t, B, M, P, H]
        ),
        eV = (0, g.e7)([V.Z], () => V.Z.hasHidden(t.id)),
        eG = {
            editorHeight: l,
            isGridLayout: eo
        },
        eq = a.useRef(eG);
    a.useEffect(() => {
        eq.current = eG;
    }),
        a.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: r } = eq.current,
                a = r ? eQ : el,
                l = null == (e = a.current) ? void 0 : e.getScrollerState();
            null != l && !eV && l.scrollTop > n && (null == (t = a.current) || t.scrollTo({ to: 0 }));
        }, [eV]);
    let {
            updateListScrollerRef: eW,
            renderListSection: eX,
            renderListItem: eK,
            getListSectionHeight: eJ,
            getListItemHeight: eY
        } = (function (e) {
            let { listRef: t, hasActiveThreads: n, threadIdsBySection: l, listViewCardHeights: s, editorHeight: o, editorAdditionRowHeight: c, renderSectionOrItem: d, goToThread: u, observePostVisibilityAnalytics: m, isShowingSearchResult: h } = e,
                f = (0, g.e7)([z.Z], () => z.Z.getChannelId()),
                p = a.useCallback(
                    (e) => (n) => {
                        var r;
                        (t.current = n), (e.current = null != (r = null == n ? void 0 : n.getScrollerNode()) ? r : null);
                    },
                    [t]
                ),
                b = a.useCallback(
                    (e) =>
                        eO({
                            section: e.section,
                            isShowingSearchResult: h,
                            hasActiveThreads: n
                        })(),
                    [n, h]
                ),
                j = a.useCallback(
                    (e) =>
                        d(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, r.jsx)(
                                          'div',
                                          {
                                              'data-item-role': 'item',
                                              className: i()(ef.loadingCard, ef['loadingCard-'.concat(e.row % 3)])
                                          },
                                          'loading-'.concat(e.row)
                                      );
                            let t = l[e.section][e.row],
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
                    [d, l, f, u, m]
                ),
                v = a.useCallback(
                    (e, t) => {
                        if (0 === e) return o + c;
                        let n = s[l[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [l, s, o, c]
                );
            return {
                updateListScrollerRef: p,
                renderListSection: b,
                renderListItem: j,
                getListSectionHeight: a.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: v
            };
        })({
            listRef: el,
            hasActiveThreads: B,
            threadIdsBySection: eD,
            listViewCardHeights: o,
            editorHeight: l,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eU,
            goToThread: ez,
            observePostVisibilityAnalytics: ei,
            isShowingSearchResult: ej
        }),
        eQ = a.useRef(null),
        {
            updateMasonryListScrollerRef: e$,
            getItemKey: e0,
            renderGridSection: e3,
            renderGridItem: e6,
            getGridSectionHeight: e1,
            getSectionProps: e9,
            handleGridFocus: e8
        } = (function (e) {
            let { masonryListScrollerRef: t, threadIdsBySection: n, goToThread: l, renderSectionOrItem: s, hasActiveThreads: o, isShowingSearchResult: c, canSearchForumPosts: d, canViewArchivedPosts: u, observePostVisibilityAnalytics: m, focusedThreadId: h, headerHeight: g } = e,
                f = a.useRef(null),
                x = a.useCallback(
                    (e) => {
                        (t.current = e), (f.current = null == e ? void 0 : e.getScrollerNode());
                    },
                    [t]
                ),
                p = a.useCallback(
                    (e, n) => {
                        let { current: r } = t;
                        if (null == r) return;
                        let a = document.querySelector(e);
                        if (null == a) return;
                        let l = r.getCoordsMap()[n],
                            i = null != l ? l.height + 20 : 200;
                        r.scrollIntoViewNode({
                            node: a,
                            padding: i,
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
                b = a.useCallback(
                    (e) => {
                        let t = eS(e);
                        if (null == t) return;
                        let n = L.Z.getChannel(t);
                        null != n && l(n, !0);
                    },
                    [l]
                ),
                j = a.useCallback(
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
                v = a.useCallback(
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
                C = a.useCallback(
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
                renderGridItem: a.useCallback(
                    (e, t, a, s, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, r.jsx)(
                                  ea.Z,
                                  {
                                      id: ''.concat(s),
                                      threadId: c,
                                      className: i()(ef.card, ef.mainCard),
                                      goToThread: l,
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
                                        style: ex({}, a),
                                        'data-item-role': 'item',
                                        className: i()(ef.loadingCard, ef['loadingCard-'.concat(t % 3)])
                                    },
                                    s
                                );
                    },
                    [n, l, m]
                ),
                getSectionProps: C,
                getGridSectionHeight: a.useCallback((e) => (0 === e ? g - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && c && !d ? 40 : 0), [g, c, d, o, u])
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
            observePostVisibilityAnalytics: ei,
            focusedThreadId: ey,
            headerHeight: eB
        });
    !(function (e) {
        let { masonryListScrollerRef: t, containerWidth: n, isGridLayout: r, threadIdsBySection: l, focusedThreadId: i, parentId: s } = e;
        a.useEffect(() => {
            if (r) {
                let e = setTimeout(() => {
                    if (null == t.current || null == i.current) return;
                    let e = i.current;
                    if ('string' != typeof e) return;
                    null == A.ZP.getSidebarState(s) && (i.current = null);
                    let n = l.findIndex((t) => t.find((t) => t === e)),
                        r = t.current.getCoordsMap(),
                        a = r['__section__'.concat(n)],
                        o = r[ew(n, e)];
                    null != a &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: a.top + o.top - 100,
                            end: a.top + o.top + o.height + 50
                        });
                }, 0);
                return () => clearTimeout(e);
            }
        }, [s, n, r, l, i, t]);
    })({
        masonryListScrollerRef: eQ,
        containerWidth: eE,
        isGridLayout: eo,
        threadIdsBySection: eD,
        parentId: t.id,
        focusedThreadId: ey
    });
    let e4 = a.useCallback(() => {
            var e, n;
            if (ej) return;
            let r = eo ? (null == (e = eQ.current) ? void 0 : e.getScrollerState()) : null == (n = el.current) ? void 0 : n.getScrollerState();
            if (null == r) return;
            (0, Y.ab)({
                guildId: t.guild_id,
                channelId: t.id
            });
            let a = r.scrollTop + r.offsetHeight;
            r.scrollHeight - a < (eo ? Math.max(200, (0, es.KW)(eE)) : 200) && C();
        }, [ej, eo, t.guild_id, t.id, eE, C]),
        e5 = (0, g.e7)([j.Z], () => j.Z.keyboardModeEnabled),
        e2 = (0, ed.ZP)({
            id: 'forum-grid-view',
            isEnabled: eo && e5,
            setFocus: e8
        }),
        e7 = (0, eu.Z)({
            listRef: el,
            padding: 96,
            isEnabled: !eo && e5,
            channel: t
        }),
        te = e2.containerProps,
        { ref: tt } = te,
        tn = eb(te, ['ref']),
        tr = A.ZP.getSidebarState(t.id),
        ta = null != tr && (0, A.D5)(tr),
        tl = (0, g.e7)([A.ZP], () => A.ZP.getSection(t.id)) === em.ULH.MEMBERS;
    return (0, r.jsx)('div', {
        className: ef.container,
        ref: eN,
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
                                              getSectionHeight: e1,
                                              getItemHeight: e_,
                                              renderSection: e3,
                                              renderItem: e6,
                                              getSectionProps: e9,
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
                                              a = eb(t, ['ref']);
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
                                                      a,
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
        a = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: i()(ef.missingReadHistoryPermission, ef.columnsSpan),
        style: n,
        children: (0, r.jsx)(x.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: eg.intl.format(eg.t.TycmzM, { channelName: a })
        })
    });
}
function eT(e) {
    let { channel: t, coords: n } = e,
        a = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: i()(ef.missingReadHistoryPermission, ef.columnsSpan),
        style: n,
        children: (0, r.jsx)(x.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: eg.intl.format(eg.t.OWZJdX, { channelName: a })
        })
    });
}
function eI(e) {
    let { channel: t } = e,
        n = a.useCallback(() => {
            G.Z.resort(t.id);
        }, [t]),
        l = (0, g.e7)([q.Z], () => q.Z.getNewThreadCount());
    return 0 === l
        ? null
        : (0, r.jsx)(x.P3F, {
              className: ef.newPostsButton,
              onClick: n,
              children: (0, r.jsx)(x.Text, {
                  color: 'text-brand',
                  variant: 'text-md/medium',
                  children: eg.intl.format(eg.t.ue1qfH, { count: l })
              })
          });
}
function eE() {
    return Promise.resolve();
}
function eR(e) {
    var t, n, l;
    let { channel: s, isEmpty: p, isSearchLoading: v, numResults: O, children: w, coords: S, onHeightChange: T } = e,
        {
            name: I,
            formOpen: E,
            titleFocused: R,
            hasClickedForm: k,
            textAreaState: Z,
            onboardingExpanded: A,
            setEditorAdditionRowHeight: L
        } = (0, en.xH)((e) => {
            let { name: t, formOpen: n, titleFocused: r, hasClickedForm: a, textAreaState: l, onboardingExpanded: i, setEditorAdditionRowHeight: s } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: r,
                hasClickedForm: a,
                textAreaState: l,
                onboardingExpanded: i,
                setEditorAdditionRowHeight: s
            };
        }, c.X),
        { tagFilter: z, layoutType: V } = (0, W.H)(s.id),
        q = (0, en.AF)(),
        K = (0, W.v)(),
        J = (0, g.e7)([D.Z], () => D.Z.canChatInGuild(s.guild_id)),
        Q = (0, X.r_)(s),
        et = (0, M.cD)(s),
        [ea, el] = a.useState(et),
        [, es] = (0, _.AB)(null != (l = s.getGuildId()) ? l : void 0),
        ec = (0, P.HL)(s),
        ed = J && (et || (ea && es)) && !ec,
        eu = s.isMediaChannel();
    a.useEffect(() => {
        et && el(!0);
    }, [et]);
    let { ref: eh, height: ej } = (0, b.ZP)();
    a.useEffect(() => {
        null != ej && T(ej);
    }, [T, ej]);
    let ev = a.useCallback(() => {
        o()(() => {
            null != eh.current && q.getState().setEditorHeight(eh.current.offsetHeight);
        });
    }, [eh, q]);
    a.useLayoutEffect(ev, [ev, p, ed, A]),
        (0, U.yp)({
            event: em.CkL.REMEASURE_TARGET,
            handler: ev
        });
    let eC = (0, g.e7)([B.Z], () => B.Z.getUploads(s.id, F.d.FirstThreadMessage)),
        e_ = (0, X.ql)(s),
        ey = a.useRef(null),
        eO = a.useRef(null),
        [ew, eS] = a.useState(0),
        { width: eN } = (0, g.e7)([H.Z], () => H.Z.windowSize()),
        eP = null == (n = ey.current) || null == (t = n.getBoundingClientRect()) ? void 0 : t.width,
        eT = a.useRef(null),
        eI = a.useRef(null);
    a.useLayoutEffect(() => {
        var e;
        let t = eO.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0];
        if (null != ey.current && null != n && null != n.children) {
            let { left: e, top: t } = ey.current.getBoundingClientRect(),
                r = 0;
            for (let a of n.children) {
                let { right: n, top: l, height: i } = a.getBoundingClientRect();
                if (l - t > i) break;
                n - e > r && (r = n - e);
            }
            eS(r);
        }
    }, [s.availableTags, eN, eP, z]);
    let eR = I.length > 0 && !E && (v || null != O),
        eM = !__OVERLAY__ && !k && !E && R && (0 === Z.textValue.trim().length || Z.textValue.trim() === e_) && 0 === eC.length && !ec;
    a.useLayoutEffect(() => {
        let e = eR || eM;
        if (!e) return L(0);
        null != eT.current && L(e ? eT.current.clientHeight : 0);
    }, [L, eR, eM, eT]);
    let eZ = (e) => {
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
        eB = a.useRef(null),
        eH = (function () {
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
        eU = a.useCallback(
            (e) => {
                if ((eD(), e.target === eh.current && !eH.current)) {
                    var t;
                    null == (t = eB.current) || t.focus();
                }
            },
            [eD, eh, eH]
        ),
        eV = a.useMemo(() => (ec ? (0, N.iq)(s.availableTags) : s.availableTags), [s.availableTags, ec]);
    return (0, r.jsx)(
        'div',
        ep(
            ex(
                {
                    className: i()(ef.card, ef.headerRow, ef.columnsSpan),
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
                                  className: i()(ef.newMemberBanner, { [ef.gridViewBanner]: V === h.X.GRID }),
                                  guildId: s.guild_id,
                                  channel: s
                              })
                            : null,
                        (0, r.jsx)('div', {
                            className: i()(ef.mainCard, ef.header, { [ef.headerWithMatchingPosts]: eR || eM }),
                            children: (0, r.jsx)(er.Z, {
                                parentChannel: s,
                                onChange: ev,
                                isSearchLoading: v,
                                numResults: O,
                                canCreatePost: ed,
                                inputRef: eB
                            })
                        }),
                        (eR || eM) &&
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
                                    eM
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
                                                                                  ei.Z,
                                                                                  {
                                                                                      tag: e,
                                                                                      onClick: () => eZ(e.id),
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
                                                              className: i()(ef.tagsButton, { [ef.tagsButtonWithCount]: z.size > 0 }),
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
                                                  className: i()(ef.tagsButton, ef.tagsButtonPlaceholder),
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
        l = a.useRef(null);
    return (0, r.jsx)(x.yRy, {
        targetElementRef: l,
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
            let { isShown: a } = t;
            return (0, r.jsxs)(
                x.zxk,
                ep(ex({}, e), {
                    buttonRef: l,
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
                        a
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
