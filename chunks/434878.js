n.r(t), n.d(t, { default: () => eg }), n(35282), n(388685), n(781311);
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
    P = n(359110),
    N = n(344185),
    T = n(235449),
    I = n(665906),
    E = n(488131),
    k = n(433355),
    R = n(592125),
    Z = n(703558),
    M = n(607744),
    A = n(117530),
    L = n(451478),
    F = n(459273),
    D = n(961675),
    z = n(883429),
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
    er = n(276357),
    ei = n(81490),
    el = n(482062),
    ea = n(260503),
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
function eg(e) {
    let { channel: t, guild: n, sidebarState: i } = e;
    return (0, r.jsx)(
        Y.oL,
        {
            channel: t,
            children: (0, r.jsx)(e_, {
                channel: t,
                guild: n,
                sidebarState: i
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
    let { itemRole: t, coords: n, section: i } = e;
    return (0, r.jsx)(
        'div',
        {
            className: a()(ed.card, ed.archivedDividerRow, ed.columnsSpan),
            style: n,
            'data-item-role': t,
            children: (0, r.jsx)('div', {
                className: ed.emptyMainCard,
                children: (0, r.jsx)(p.X6q, {
                    variant: 'eyebrow',
                    className: ed.archivedDivider,
                    id: ep(i),
                    children: ec.intl.string(ec.t['3+LO19'])
                })
            })
        },
        'section-divider'
    );
}
function ej(e) {
    let { section: t, coords: n, key: i, isShowingSearchResult: l, hasActiveThreads: a } = e;
    return () =>
        2 === t && !l && a
            ? (0, r.jsx)(
                  eb,
                  {
                      section: t,
                      coords: null == n ? void 0 : em(eu({}, n), { position: 'absolute' }),
                      itemRole: 'section'
                  },
                  i
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
            editorHeight: l,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: u
        } = (0, Y.xH)((e) => {
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
            loading: I,
            isSearchLoading: M,
            layoutType: A
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: r, tagSetting: i } = (0, H.H)(e.id),
                l = (0, U.vP)({
                    channel: e,
                    sortOrder: t,
                    tagFilter: n,
                    tagSetting: i,
                    shouldAutomaticallyAck: !0
                }),
                a = (0, g.e7)([N.Z, O.Z], () => {
                    let t = N.Z.hasLoaded(e.guild_id),
                        n = O.Z.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: s, canLoadMore: o, loadMore: c, loading: d } = (0, T.qQ)(e, t, n, i),
                { searchResults: u, isSearchLoading: m } = (0, U.XZ)({ channelId: e.id });
            return (
                (0, U.ES)(e, t, n, i),
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
        B = (0, w.Z)(t),
        { tagFilter: W, tagSetting: K } = (0, H.H)(t.id);
    (0, U.ku)(t, W, K, u);
    let Q = (0, U.jR)(t),
        ee = (0, U.eZ)(t),
        et = i.useRef(null),
        { observePostVisibilityAnalytics: er } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: r } = e;
            V.Z.useForumChannelSeenManager({
                guildId: t,
                channelId: n
            });
            let l = i.useRef(null),
                a = i.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let r = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, G.rj)(e, t, r) : (0, G.Ct)(e, t, r);
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
                            if (null == e) return void (0, G.Ct)(n, t, Date.now());
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
        eg = A === h.X.GRID,
        eb = null != b,
        e_ = i.useRef(null),
        { containerRef: eS, containerWidth: eN } = (0, ei.Z)();
    i.useEffect(
        () => () => {
            null != t.id && z.Z.clearForumSearch(t.id);
        },
        [t.id]
    );
    let { columns: eT } = i.useMemo(() => (eg ? ef.getRenderOptions(eN) : en.eU), [eg, eN]),
        eI = i.useMemo(() => (I ? Math.round((window.innerHeight - 200) / 118) : 0), [I]),
        eE = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(ef.getWidth(eN))) * eT;
            return _ ? e : 0;
        }, [eN, eT, _]),
        ek = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(ef.getWidth(eN))) * eT;
            return y ? e : 0;
        }, [eN, eT, y]),
        eR = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, en.KW)(ef.getWidth(eN))) * eT;
            return M && eb ? e : 0;
        }, [eN, eT, M, eb]),
        eZ = i.useMemo(() => {
            if (eg)
                if (!Q && eb) return [1, 0];
                else if (!ee) return [1, m.length + eE, 0];
                else if (eb) return [1, b.length + eR, 0];
                else return [1, m.length + eE, f.length + ek];
            return !Q && eb ? [1, 1] : ee ? (eb ? [1, b.length, 0, eI] : [1, m.length, f.length, eI]) : [1, m.length, 1];
        }, [eg, eb, m.length, f.length, Q, ee, eI, b, eE, ek, eR]),
        eM = i.useMemo(() => (!Q && eb ? [[], []] : ee ? (eb ? [[], b, [], []] : [[], m, f, []]) : [[], m, []]), [eb, Q, ee, b, m, f]),
        eA = i.useCallback(
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
                    n ? (0, P.ad)(e, { source: eo.on.BROWSER }) : ((e_.current = e.id), (0, E.ok)(e));
            },
            [t.guild_id, t.id, e_]
        ),
        [eL, eF] = i.useState(l + s - 24),
        eD = i.useCallback(
            (e, n, i) =>
                0 === e
                    ? (0, r.jsx)(
                          eP,
                          {
                              channel: t,
                              isEmpty: !L,
                              isSearchLoading: M,
                              numResults: null == b ? void 0 : b.length,
                              coords: n,
                              onHeightChange: eF,
                              children:
                                  !I &&
                                  (0, r.jsx)(
                                      X.Z,
                                      {
                                          channel: t,
                                          hasAnyThread: F
                                      },
                                      t.id
                                  )
                          },
                          'forum-channel-header'
                      )
                    : 2 !== e || ee
                      ? 1 === e && eb && !Q
                          ? (0, r.jsx)(
                                eO,
                                {
                                    channel: t,
                                    coords: n
                                },
                                'archive-or-search-result'
                            )
                          : i()
                      : (0, r.jsx)(
                            ey,
                            {
                                channel: t,
                                coords: n
                            },
                            'archived-missing-reading-history-perm'
                        ),
            [eb, ee, b, Q, t, L, M, I, F]
        ),
        ez = (0, g.e7)([D.Z], () => D.Z.hasHidden(t.id)),
        eB = {
            editorHeight: l,
            isGridLayout: eg
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
                        ej({
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
                                              className: a()(ed.loadingCard, ed['loadingCard-'.concat(e.row % 3)])
                                          },
                                          'loading-'.concat(e.row)
                                      );
                            let t = l[e.section][e.row];
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
            observePostVisibilityAnalytics: er,
            isShowingSearchResult: eb
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
                            (h.current = eC(n));
                    },
                    [t, h]
                ),
                b = i.useCallback(
                    (e) => {
                        let t = eC(e);
                        if (null == t) return;
                        let n = R.Z.getChannel(t);
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
                            return null == r ? ev(e, t) : ev(e, r);
                        }
                    },
                    [n]
                ),
                v = i.useCallback(
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
                C = i.useCallback(
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
                renderGridItem: i.useCallback(
                    (e, t, i, s, o) => {
                        if (0 === e) return null;
                        let c = n[e][t];
                        return null != c
                            ? (0, r.jsx)(
                                  $.Z,
                                  {
                                      id: ''.concat(s),
                                      threadId: c,
                                      className: a()(ed.card, ed.mainCard),
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
                                        style: eu({}, i),
                                        'data-item-role': 'item',
                                        className: a()(ed.loadingCard, ed['loadingCard-'.concat(t % 3)])
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
            isShowingSearchResult: eb,
            canSearchForumPosts: Q,
            canViewArchivedPosts: ee,
            observePostVisibilityAnalytics: er,
            focusedThreadId: e_,
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
                    if (null == k.ZP.getSidebarState(s)) {
                        a.current = null;
                        return;
                    }
                    let n = l.findIndex((t) => t.find((t) => t === e)),
                        r = t.current.getCoordsMap(),
                        i = r['__section__'.concat(n)],
                        o = r[ev(n, e)];
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
        containerWidth: eN,
        isGridLayout: eg,
        threadIdsBySection: eM,
        parentId: t.id,
        focusedThreadId: e_
    });
    let e9 = i.useCallback(() => {
            var e, n;
            if (eb) return;
            let r = eg ? (null == (e = eW.current) ? void 0 : e.getScrollerState()) : null == (n = et.current) ? void 0 : n.getScrollerState();
            if (null == r) return;
            (0, q.ab)({
                guildId: t.guild_id,
                channelId: t.id
            });
            let i = r.scrollTop + r.offsetHeight;
            r.scrollHeight - i < (eg ? Math.max(200, (0, en.KW)(eN)) : 200) && C();
        }, [eb, eg, t.guild_id, t.id, eN, C]),
        e1 = (0, g.e7)([j.Z], () => j.Z.keyboardModeEnabled),
        e6 = (0, el.ZP)({
            id: 'forum-grid-view',
            isEnabled: eg && e1,
            setFocus: e3
        }),
        e8 = (0, ea.Z)({
            listRef: et,
            padding: 96,
            isEnabled: !eg && e1,
            channel: t
        }),
        e4 = e6.containerProps,
        { ref: e2 } = e4,
        e5 = eh(e4, ['ref']),
        e7 = k.ZP.getSidebarState(t.id),
        te = null != e7 && (0, k.D5)(e7),
        tt = (0, g.e7)([k.ZP], () => k.ZP.getSection(t.id)) === es.ULH.MEMBERS;
    return (0, r.jsx)('div', {
        className: ed.container,
        ref: eS,
        'data-member-list-open': tt,
        children: (0, r.jsx)(p.Wdt, {
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        u &&
                            (0, r.jsx)(x.Z, {
                                channel: t,
                                draftType: Z.d.FirstThreadMessage,
                                className: ed.uploadArea,
                                style: { right: te && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0 }
                            }),
                        (0, r.jsx)(ew, { channel: t }),
                        (0, r.jsx)(p.nn4, { children: (0, r.jsx)(p.H, { children: ec.intl.string(ec.t.B2panJ) }) }),
                        B
                            ? (0, r.jsx)('div', {
                                  className: ed.optInNotice,
                                  children: (0, r.jsx)(S.Z, { channel: t })
                              })
                            : null,
                        eg
                            ? (0, r.jsx)(el.KT, {
                                  navigator: e6,
                                  children: (0, r.jsx)(
                                      p.GMG,
                                      eu(
                                          {
                                              ref: (e) => {
                                                  var t;
                                                  (e2.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), eK(e);
                                              },
                                              itemGutter: 16,
                                              padding: 24,
                                              className: ed.grid,
                                              columns: eT,
                                              sections: eZ,
                                              getItemKey: eJ,
                                              getSectionHeight: e$,
                                              getItemHeight: ex,
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
                                              i = eh(t, ['ref']);
                                          return (0, r.jsx)(
                                              p._2F,
                                              em(
                                                  eu(
                                                      {
                                                          ref: eU(n),
                                                          className: ed.list,
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
function ey(e) {
    let { channel: t, coords: n } = e,
        i = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: a()(ed.missingReadHistoryPermission, ed.columnsSpan),
        style: n,
        children: (0, r.jsx)(p.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ec.intl.format(ec.t.TycmzM, { channelName: i })
        })
    });
}
function eO(e) {
    let { channel: t, coords: n } = e,
        i = (0, v.ZP)(t);
    return (0, r.jsx)('div', {
        className: a()(ed.missingReadHistoryPermission, ed.columnsSpan),
        style: n,
        children: (0, r.jsx)(p.Text, {
            color: 'text-muted',
            variant: 'text-md/normal',
            children: ec.intl.format(ec.t.OWZJdX, { channelName: i })
        })
    });
}
function ew(e) {
    let { channel: t } = e,
        n = i.useCallback(() => {
            z.Z.resort(t.id);
        }, [t]),
        l = (0, g.e7)([B.Z], () => B.Z.getNewThreadCount());
    return 0 === l
        ? null
        : (0, r.jsx)(p.P3F, {
              className: ed.newPostsButton,
              onClick: n,
              children: (0, r.jsx)(p.Text, {
                  color: 'text-brand',
                  variant: 'text-md/medium',
                  children: ec.intl.format(ec.t.ue1qfH, { count: l })
              })
          });
}
function eS() {
    return Promise.resolve();
}
function eP(e) {
    var t, n, l;
    let { channel: s, isEmpty: x, isSearchLoading: v, numResults: O, children: w, coords: S, onHeightChange: P } = e,
        {
            name: N,
            formOpen: T,
            titleFocused: E,
            hasClickedForm: k,
            textAreaState: R,
            onboardingExpanded: D,
            setEditorAdditionRowHeight: B
        } = (0, Y.xH)((e) => {
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
        { tagFilter: V, layoutType: G } = (0, H.H)(s.id),
        X = (0, Y.AF)(),
        J = (0, H.v)(),
        $ = (0, g.e7)([M.Z], () => M.Z.canChatInGuild(s.guild_id)),
        ee = (0, U.r_)(s),
        en = (0, I.cD)(s),
        [ei, el] = i.useState(en),
        [, ea] = (0, _.AB)(null != (l = s.getGuildId()) ? l : void 0),
        eo = $ && (en || (ei && ea)),
        eg = s.isMediaChannel();
    i.useEffect(() => {
        en && el(!0);
    }, [en]);
    let { ref: ef, height: ep } = (0, b.ZP)();
    i.useEffect(() => {
        null != ep && P(ep);
    }, [P, ep]);
    let ex = i.useCallback(() => {
        o()(() => {
            null != ef.current && X.getState().setEditorHeight(ef.current.offsetHeight);
        });
    }, [ef, X]);
    i.useLayoutEffect(ex, [ex, x, eo, D]),
        (0, F.yp)({
            event: es.CkL.REMEASURE_TARGET,
            handler: ex
        });
    let eb = (0, g.e7)([A.Z], () => A.Z.getUploads(s.id, Z.d.FirstThreadMessage)),
        ej = (0, U.ql)(s),
        ev = i.useRef(null),
        eC = i.useRef(null),
        [e_, ey] = i.useState(0),
        { width: eO } = (0, g.e7)([L.Z], () => L.Z.windowSize()),
        ew = null == (n = ev.current) || null == (t = n.getBoundingClientRect()) ? void 0 : t.width,
        eP = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        let t = eC.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0];
        if (null != ev.current && null != n && null != n.children) {
            let { left: e, top: t } = ev.current.getBoundingClientRect(),
                r = 0;
            for (let i of n.children) {
                let { right: n, top: l, height: a } = i.getBoundingClientRect();
                if (l - t > a) break;
                n - e > r && (r = n - e);
            }
            ey(r);
        }
    }, [s.availableTags, eO, ew, V]);
    let eT = N.length > 0 && !T && (v || null != O),
        eI = !__OVERLAY__ && !k && !T && E && (0 === R.textValue.trim().length || R.textValue.trim() === ej) && 0 === eb.length;
    i.useLayoutEffect(() => {
        let e = eT || eI;
        if (!e) return B(0);
        null != eP.current && B(e ? eP.current.clientHeight : 0);
    }, [B, eT, eI, eP]);
    let eE = (e) => {
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
        ek = (0, u.ZP)({
            id: ''.concat(s.id, '-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eS,
            scrollToEnd: eS,
            orientation: m.hy.HORIZONTAL
        }),
        eR = (0, d.JA)('forum-channel-header'),
        { role: eZ, onFocus: eM } = eR,
        eA = eh(eR, ['role', 'onFocus']),
        eL = i.useRef(null),
        eF = (function () {
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
        eD = i.useCallback(
            (e) => {
                if ((eM(), e.target === ef.current && !eF.current)) {
                    var t;
                    null == (t = eL.current) || t.focus();
                }
            },
            [eM, ef, eF]
        );
    return (0, r.jsx)(
        'div',
        em(
            eu(
                {
                    className: a()(ed.card, ed.headerRow, ed.columnsSpan),
                    ref: ef,
                    onFocus: eD
                },
                eA
            ),
            {
                style: em(eu({}, S), {
                    position: G === h.X.GRID ? 'absolute' : 'static',
                    height: 'auto'
                }),
                children: (0, r.jsxs)(F.I3, {
                    children: [
                        null != s.guild_id
                            ? (0, r.jsx)(y.Z, {
                                  className: a()(ed.newMemberBanner, { [ed.gridViewBanner]: G === h.X.GRID }),
                                  guildId: s.guild_id,
                                  channel: s
                              })
                            : null,
                        (0, r.jsx)('div', {
                            className: a()(ed.mainCard, ed.header, { [ed.headerWithMatchingPosts]: eT || eI }),
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
                                ref: eP,
                                children: [
                                    eT &&
                                        (0, r.jsxs)('div', {
                                            className: ed.matchingPosts,
                                            children: [
                                                (0, r.jsx)(p.X6q, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-normal',
                                                    children: v
                                                        ? ec.intl.string(ec.t['/9i3qq'])
                                                        : 0 === O
                                                          ? ec.intl.string(ec.t.DbgHxs)
                                                          : ec.intl.formatToPlainString(ec.t['tBz/8f'], {
                                                                numPosts: O,
                                                                query: N
                                                            })
                                                }),
                                                !v &&
                                                    (0, r.jsx)(p.P3F, {
                                                        onClick: () => {
                                                            (0, q.zI)({
                                                                guildId: s.guild_id,
                                                                channelId: s.id
                                                            }),
                                                                z.Z.clearForumSearch(s.id),
                                                                X.getState().setName('');
                                                        },
                                                        children: (0, r.jsx)(p.Text, {
                                                            variant: 'text-xs/semibold',
                                                            color: 'text-brand',
                                                            className: ed.clear,
                                                            children: ec.intl.string(ec.t.VkKicX)
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
                                                          children: ec.intl.string(ec.t.ZvJ0ys)
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
                                                          children: ec.intl.string(ec.t.iyzwnJ)
                                                      })
                                                  ]
                                              })
                                        : null
                                ]
                            }),
                        (0, r.jsx)(W.Z, {
                            channel: s,
                            onChange: ex
                        }),
                        (0, r.jsxs)('div', {
                            className: ed.tagsContainer,
                            ref: ev,
                            children: [
                                (0, r.jsx)(eN, { channel: s }),
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
                                                                                      selected: V.has(e.id)
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
                                                              className: a()(ed.tagsButton, { [ed.tagsButtonWithCount]: V.size > 0 }),
                                                              style: { left: e_ },
                                                              innerClassName: ed.tagsButtonInner,
                                                              'aria-label': V.size > 0 ? ec.intl.string(ec.t.IkpM1d) : ec.intl.string(ec.t['9vKK/P']),
                                                              children: [
                                                                  V.size > 0
                                                                      ? (0, r.jsx)('div', {
                                                                            className: ed.countContainer,
                                                                            children: (0, r.jsx)(p.Text, {
                                                                                className: ed.countText,
                                                                                color: 'none',
                                                                                variant: 'text-xs/medium',
                                                                                children: V.size
                                                                            })
                                                                        })
                                                                      : ec.intl.string(ec.t.fZ8hzs),
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
                                                  className: a()(ed.tagsButton, ed.tagsButtonPlaceholder),
                                                  innerClassName: ed.tagsButtonInner,
                                                  'aria-label': ec.intl.string(ec.t.IkpM1d),
                                                  children: [
                                                      V.size > 0
                                                          ? (0, r.jsx)('div', {
                                                                className: ed.countContainer,
                                                                children: (0, r.jsx)(p.Text, {
                                                                    className: ed.countText,
                                                                    color: 'none',
                                                                    variant: 'text-xs/medium',
                                                                    children: V.size
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
function eN(e) {
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
            let { isShown: i } = t;
            return (0, r.jsxs)(
                p.zxk,
                em(eu({}, e), {
                    size: p.zxk.Sizes.MIN,
                    color: p.zxk.Colors.CUSTOM,
                    className: ed.sortDropdown,
                    innerClassName: ed.sortDropdownInner,
                    'aria-label': n ? ec.intl.string(ec.t.JxU0ws) : ec.intl.string(ec.t.xyYt8P),
                    children: [
                        (0, r.jsx)(p.uVW, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        (0, r.jsx)(p.Text, {
                            className: ed.sortDropdownText,
                            variant: 'text-sm/medium',
                            color: 'interactive-normal',
                            children: n ? ec.intl.string(ec.t.JxU0ws) : ec.intl.string(ec.t.xyYt8P)
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
