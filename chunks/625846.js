"use strict";
n.r(t), n.d(t, { default: () => ek });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(756287),
    o = n.n(r),
    d = n(942381),
    c = n(837381),
    u = n(884362),
    m = n(741918),
    h = n(371444),
    g = n(311907),
    x = n(554146),
    f = n(862482),
    _ = n(534514),
    p = n(707554),
    j = n(312138),
    b = n(140735),
    v = n(42286),
    C = n(475825),
    A = n(834730),
    N = n(939249),
    S = n(475358),
    E = n(695366),
    T = n(265872),
    y = n(900797),
    I = n(847374),
    w = n(112173),
    R = n(738876),
    k = n(765671),
    M = n(964486),
    L = n(775602),
    D = n(47167),
    P = n(379848),
    O = n(870136),
    F = n(575293),
    U = n(857071),
    z = n(228098),
    G = n(157259),
    B = n(212007),
    H = n(376708),
    V = n(715757),
    W = n(954540),
    q = n(378570),
    $ = n(940382),
    K = n(970278),
    X = n(424798),
    J = n(406704),
    Q = n(747926),
    Y = n(761640),
    Z = n(734057),
    ee = n(31717),
    et = n(834942),
    en = n(309010),
    el = n(522602),
    ea = n(531685),
    es = n(234320),
    ei = n(947094),
    er = n(919577),
    eo = n(207777),
    ed = n(200463),
    ec = n(435470),
    eu = n(706849),
    em = n(613999),
    eh = n(853742),
    eg = n(978733),
    ex = n(696583),
    ef = n(6208),
    e_ = n(835369),
    ep = n(218152),
    ej = n(559351),
    eb = n(891046),
    ev = n(133348),
    eC = n(376310),
    eA = n(414368),
    eN = n(123653),
    eS = n(337666),
    eE = n(848551),
    eT = n(375907),
    ey = n(652215),
    eI = n(37411),
    ew = n(985018),
    eR = n(419949);
function ek(e) {
    let { channel: t, guild: n, sidebarState: a } = e;
    return (0, l.jsx)(ep.Cp, { channel: t, children: (0, l.jsx)(eU, { channel: t, guild: n, sidebarState: a }) }, t.id);
}
let eM = new eA.JT({ minWidth: 320, maxWidth: 450, gap: 16 });
function eL(e) {
    return `forum-grid-header-section-${e}`;
}
function eD(e) {
    let { itemRole: t, coords: n, section: a } = e;
    return (0, l.jsx)(
        "div",
        {
            className: i()(eR.card, eR.archivedDividerRow, eR.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, l.jsx)("div", {
                className: eR.emptyMainCard,
                children: (0, l.jsx)(_.D, {
                    variant: "eyebrow",
                    className: eR.archivedDivider,
                    id: eL(a),
                    children: ew.intl.string(ew.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}
function eP(e) {
    let { section: t, coords: n, key: a, isShowingSearchResult: s, hasActiveThreads: i } = e;
    return () =>
        2 === t && !s && i
            ? (0, l.jsx)(
                  eD,
                  { section: t, coords: null == n ? void 0 : { ...n, position: "absolute" }, itemRole: "section" },
                  a,
              )
            : null;
}
function eO(e, t) {
    return `card-${e}-${t}`;
}
function eF(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function eU(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: s,
            editorAdditionRowHeight: r,
            listViewCardHeights: o,
            formOpen: u,
            name: m,
        } = (0, ep.kU)((e) => {
            let {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: l,
                formOpen: a,
                cardHeightVersion: s,
                name: i,
            } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: l,
                formOpen: a,
                name: i,
                cardHeightVersion: s,
            };
        }, d.x),
        {
            activeThreadIds: x,
            archivedThreadIds: f,
            searchResults: _,
            canLoadMore: A,
            loadMore: N,
            activeThreadsLoading: S,
            archivedThreadsLoading: E,
            loading: T,
            isSearchLoading: y,
            layoutType: I,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: l, tagSetting: a } = (0, ed.R)(e.id),
                s = (0, ec.V3)({ channel: e, sortOrder: t, tagFilter: n, tagSetting: a, shouldAutomaticallyAck: !0 }),
                i = (0, g.bG)([K.A, U.A], () => {
                    let t = K.A.hasLoaded(e.guild_id),
                        n = U.A.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: r, canLoadMore: o, loadMore: d, loading: c } = (0, X.Fr)(e, t, n, a),
                { searchResults: u, isSearchLoading: m } = (0, ec.cA)({ channelId: e.id });
            return (
                (0, ec.yz)(e, t, n, a),
                {
                    activeThreadIds: s,
                    archivedThreadIds: r,
                    searchResults: u,
                    canLoadMore: o,
                    loadMore: d,
                    loading: i || c || m,
                    archivedThreadsLoading: c,
                    activeThreadsLoading: i,
                    isSearchLoading: m,
                    layoutType: l,
                }
            );
        })(t),
        w = x.length > 0,
        k = w || f.length > 0,
        D = (0, z.A)(t),
        { tagFilter: P, tagSetting: O } = (0, ed.R)(t.id);
    (0, ec.o7)(t, P, O, u),
        (0, M.Ay)(() => {
            !u && m.length > 0 && er.A.updateForumSearchQuery(t.id, m);
        });
    let F = (0, ec.O3)(t),
        V = (0, ec.An)(t),
        J = a.useRef(null),
        { observePostVisibilityAnalytics: et } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: l } = e;
            eu.A.useForumChannelSeenManager({ guildId: t, channelId: n });
            let s = a.useRef(null),
                i = a.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let l = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, em.xx)(e, t, l) : (0, em.O_)(e, t, l);
                    }
                }, []);
            return (
                a.useEffect(() => {
                    let e = l.current?.getScrollerNode();
                    if (null != e)
                        return (
                            (s.current = new IntersectionObserver((e) => i(n, e), {
                                root: e,
                                rootMargin: "0px 100000px 0px 100000px",
                                threshold: 0.5,
                            })),
                            () => {
                                s.current?.disconnect(), (s.current = null);
                            }
                        );
                }, [n, i, l]),
                {
                    observePostVisibilityAnalytics: a.useCallback(
                        (e, t) => {
                            null == e ? (0, em.O_)(n, t, Date.now()) : s.current?.observe(e);
                        },
                        [n],
                    ),
                }
            );
        })({ scrollerRef: J, channelId: t.id, guildId: t.guild_id }),
        el = I === h.C.GRID,
        { searchQuery: ea } = (0, ec.cA)({ channelId: t.id }),
        es = null != _ && null != ea && ea.length > 0,
        eo = a.useRef(null),
        { containerRef: ex, containerWidth: ef } = (0, eS.A)();
    a.useEffect(() => {
        if (null == eo.current && null != t.id) {
            let e = Y.Ay.getSidebarState(t.id);
            null != e && e.type === $.PE.VIEW_THREAD && (eo.current = e.channelId);
        }
    }, [t.id]);
    let { columns: ej } = a.useMemo(() => (el ? eM.getRenderOptions(ef) : eA.CV), [el, ef]),
        ev = a.useMemo(() => (T ? Math.round((window.innerHeight - 200) / 118) : 0), [T]),
        { showResolvedFlags: eC } = (0, B.T)(t.id),
        eN = t.isModeratorReportChannel(),
        ek = a.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, eA.iX)(eM.getWidth(ef))) * ej;
            return S ? e : 0;
        }, [ef, ej, S]),
        eD = a.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, eA.iX)(eM.getWidth(ef))) * ej;
            return E ? e : 0;
        }, [ef, ej, E]),
        eU = a.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, eA.iX)(eM.getWidth(ef))) * ej;
            return y && es ? e : 0;
        }, [ef, ej, y, es]),
        eH = a.useMemo(() => {
            if (el)
                if (!F && es) return [1, 0];
                else if (!V) return [1, x.length + ek, 0];
                else if (es) return [1, _.length + eU, 0];
                else if (eN && !eC) return [1, x.length + ek, 0];
                else return [1, x.length + ek, f.length + eD];
            if (!F && es) return [1, 1];
            if (!V) return [1, x.length, 1];
            if (es) return [1, _.length, 0, ev];
            if (eN && !eC) return [1, x.length, 0, ev];
            else return [1, x.length, f.length, ev];
        }, [el, es, x.length, f.length, F, V, ev, _, ek, eD, eU, eC, eN]),
        eW = a.useMemo(
            () =>
                !F && es
                    ? [[], []]
                    : V
                      ? es
                          ? [[], _, [], []]
                          : eN && !eC
                            ? [[], x, [], []]
                            : [[], x, f, []]
                      : [[], x, []],
            [es, F, V, _, x, f, eC, eN],
        ),
        eq = a.useCallback(
            (e, n) => {
                (0, eh.Ml)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: { page: ey.liQ.GUILD_CHANNEL, section: ey.JJy.FORUM_CHANNEL_POST },
                }),
                    n ? (0, q.N9)(e, { source: eI.H9.BROWSER }) : ((eo.current = e.id), (0, Q.JA)(e));
            },
            [t.guild_id, t.id, eo],
        ),
        [e$, eK] = a.useState(s + r - 24),
        eX = a.useCallback(
            (e, n, a) =>
                0 === e
                    ? (0, l.jsx)(
                          eV,
                          {
                              channel: t,
                              isEmpty: !w,
                              isSearchLoading: y,
                              numResults: _?.length,
                              coords: n,
                              onHeightChange: eK,
                              children:
                                  !T && (0, l.jsx)(eg.A, { channel: t, hasAnyThread: k, hasActiveThreads: w }, t.id),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || V
                      ? 1 === e && es && !F
                          ? (0, l.jsx)(eG, { channel: t, coords: n }, "archive-or-search-result")
                          : a()
                      : (0, l.jsx)(ez, { channel: t, coords: n }, "archived-missing-reading-history-perm"),
            [es, V, _, F, t, w, y, T, k],
        ),
        eJ = (0, g.bG)([ei.A], () => ei.A.hasHidden(t.id)),
        eQ = { editorHeight: s, isGridLayout: el },
        eY = a.useRef(eQ);
    a.useEffect(() => {
        eY.current = eQ;
    }),
        a.useEffect(() => {
            let { editorHeight: e, isGridLayout: t } = eY.current,
                n = t ? e9 : J,
                l = n.current?.getScrollerState();
            null != l && !eJ && l.scrollTop > e && n.current?.scrollTo({ to: 0 });
        }, [eJ]);
    let {
            updateListScrollerRef: eZ,
            renderListSection: e0,
            renderListItem: e3,
            getListSectionHeight: e1,
            getListItemHeight: e6,
        } = (function (e) {
            let {
                    listRef: t,
                    hasActiveThreads: n,
                    threadIdsBySection: s,
                    listViewCardHeights: r,
                    editorHeight: o,
                    editorAdditionRowHeight: d,
                    renderSectionOrItem: c,
                    goToThread: u,
                    observePostVisibilityAnalytics: m,
                    isShowingSearchResult: h,
                } = e,
                x = (0, g.bG)([en.A], () => en.A.getChannelId()),
                f = a.useCallback(
                    (e) => (n) => {
                        (t.current = n), (e.current = n?.getScrollerNode() ?? null);
                    },
                    [t],
                ),
                _ = a.useCallback(
                    (e) => eP({ section: e.section, isShowingSearchResult: h, hasActiveThreads: n })(),
                    [n, h],
                ),
                j = a.useCallback(
                    (e) =>
                        c(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, l.jsx)(
                                          "div",
                                          {
                                              "data-item-role": "item",
                                              className: i()(eR.loadingCard, eR[`loadingCard-${e.row % 3}`]),
                                          },
                                          `loading-${e.row}`,
                                      );
                            let t = s[e.section][e.row],
                                n = null != x && (0, H.iU)(x) ? W.Ay : e_.Ay;
                            return (0, l.jsx)(
                                "li",
                                {
                                    className: eR.card,
                                    "data-item-role": "item",
                                    children: (0, l.jsx)(p.F, {
                                        children: (0, l.jsx)(n, {
                                            className: eR.mainCard,
                                            threadId: t,
                                            goToThread: u,
                                            observePostVisibilityAnalytics: m,
                                        }),
                                    }),
                                },
                                `${e.section}-${t}`,
                            );
                        }),
                    [c, s, x, u, m],
                ),
                b = a.useCallback(
                    (e, t) => {
                        if (0 === e) return o + d;
                        let n = r[s[e][t]];
                        return null == n ? 104 : n + 8;
                    },
                    [s, r, o, d],
                );
            return {
                updateListScrollerRef: f,
                renderListSection: _,
                renderListItem: j,
                getListSectionHeight: a.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: b,
            };
        })({
            listRef: J,
            hasActiveThreads: w,
            threadIdsBySection: eW,
            listViewCardHeights: o,
            editorHeight: s,
            editorAdditionRowHeight: r,
            renderSectionOrItem: eX,
            goToThread: eq,
            observePostVisibilityAnalytics: et,
            isShowingSearchResult: es,
        }),
        e9 = a.useRef(null),
        {
            updateMasonryListScrollerRef: e4,
            getItemKey: e8,
            renderGridSection: e2,
            renderGridItem: e7,
            getGridSectionHeight: e5,
            getSectionProps: te,
            handleGridFocus: tt,
        } = (function (e) {
            let {
                    masonryListScrollerRef: t,
                    threadIdsBySection: n,
                    goToThread: s,
                    renderSectionOrItem: r,
                    hasActiveThreads: o,
                    isShowingSearchResult: d,
                    canSearchForumPosts: c,
                    canViewArchivedPosts: u,
                    observePostVisibilityAnalytics: m,
                    focusedThreadId: h,
                    headerHeight: g,
                } = e,
                x = a.useRef(null),
                f = a.useCallback(
                    (e) => {
                        (t.current = e), (x.current = e?.getScrollerNode());
                    },
                    [t],
                ),
                _ = a.useCallback(
                    (e, n) => {
                        let { current: l } = t;
                        if (null == l) return;
                        let a = document.querySelector(e);
                        if (null == a) return;
                        let s = l.getCoordsMap()[n],
                            i = null != s ? s.height + 20 : 200;
                        l.scrollIntoViewNode({
                            node: a,
                            padding: i,
                            callback() {
                                requestAnimationFrame(() => {
                                    document.querySelector(e)?.focus({ preventScroll: !0 });
                                });
                            },
                        }),
                            (h.current = eF(n));
                    },
                    [t, h],
                ),
                p = a.useCallback(
                    (e) => {
                        let t = eF(e);
                        if (null == t) return;
                        let n = Z.A.getChannel(t);
                        null != n && s(n, !0);
                    },
                    [s],
                ),
                j = a.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return `section-${e}-${t}`;
                        {
                            let l = n[e][t];
                            return null == l ? eO(e, t) : eO(e, l);
                        }
                    },
                    [n],
                ),
                b = a.useCallback(
                    (e, t, n) =>
                        r(e, t, eP({ section: e, coords: t, key: n, isShowingSearchResult: d, hasActiveThreads: o })),
                    [r, o, d],
                ),
                v = a.useCallback((e) => (0 === e ? {} : { role: "grid", "aria-labelledby": `#${eL(e)}` }), []);
            return {
                updateMasonryListScrollerRef: f,
                masonryListContainerRef: x,
                focusedThreadId: h,
                handleGridFocus: _,
                handleGridSelect: p,
                getItemKey: j,
                renderGridSection: b,
                renderGridItem: a.useCallback(
                    (e, t, a, r, o) => {
                        if (0 === e) return null;
                        let d = n[e][t];
                        return null != d
                            ? (0, l.jsx)(
                                  eb.A,
                                  {
                                      id: `${r}`,
                                      threadId: d,
                                      className: i()(eR.card, eR.mainCard),
                                      goToThread: s,
                                      observePostVisibilityAnalytics: m,
                                      coords: a,
                                      gridCoords: o.coordinates[r],
                                      gridSectionBoundaries: o.boundaries,
                                  },
                                  r,
                              )
                            : __OVERLAY__
                              ? null
                              : (0, l.jsx)(
                                    "div",
                                    {
                                        style: { ...a },
                                        "data-item-role": "item",
                                        className: i()(eR.loadingCard, eR[`loadingCard-${t % 3}`]),
                                    },
                                    r,
                                );
                    },
                    [n, s, m],
                ),
                getSectionProps: v,
                getGridSectionHeight: a.useCallback(
                    (e) => (0 === e ? g - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && d && !c ? 40 : 0),
                    [g, d, c, o, u],
                ),
            };
        })({
            masonryListScrollerRef: e9,
            threadIdsBySection: eW,
            goToThread: eq,
            renderSectionOrItem: eX,
            hasActiveThreads: w,
            isShowingSearchResult: es,
            canSearchForumPosts: F,
            canViewArchivedPosts: V,
            observePostVisibilityAnalytics: et,
            focusedThreadId: eo,
            headerHeight: e$,
        });
    !(function (e) {
        let {
            masonryListScrollerRef: t,
            containerWidth: n,
            isGridLayout: l,
            threadIdsBySection: s,
            focusedThreadId: i,
            parentId: r,
        } = e;
        a.useEffect(() => {
            if (l) {
                let e = setTimeout(() => {
                    if (null == t.current || null == i.current) return;
                    let e = i.current;
                    if ("string" != typeof e) return;
                    null == Y.Ay.getSidebarState(r) && (i.current = null);
                    let n = s.findIndex((t) => t.find((t) => t === e)),
                        l = t.current.getCoordsMap(),
                        a = l[`__section__${n}`],
                        o = l[eO(n, e)];
                    null != a &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: a.top + o.top - 100,
                            end: a.top + o.top + o.height + 50,
                        });
                }, 0);
                return () => clearTimeout(e);
            }
        }, [r, n, l, s, i, t]);
    })({
        masonryListScrollerRef: e9,
        containerWidth: ef,
        isGridLayout: el,
        threadIdsBySection: eW,
        parentId: t.id,
        focusedThreadId: eo,
    });
    let tn = a.useCallback(() => {
            if (es) return;
            let e = el ? e9.current?.getScrollerState() : J.current?.getScrollerState();
            if (null == e) return;
            (0, eh.pO)({ guildId: t.guild_id, channelId: t.id });
            let n = e.scrollTop + e.offsetHeight;
            e.scrollHeight - n < (el ? Math.max(200, (0, eA.iX)(ef)) : 200) && N();
        }, [es, el, t.guild_id, t.id, ef, N]),
        tl = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled),
        ta = (0, ep.kU)((e) => e.titleFocused || e.bodyFocused, d.x),
        ts = (0, eE.Ay)({ id: "forum-grid-view", isEnabled: el && tl && !ta, setFocus: tt }),
        ti = (0, eT.A)({ listRef: J, padding: 96, isEnabled: !el && tl && !ta, channel: t }),
        tr = a.useCallback(
            (e, n, l) => (0 === e ? 0 : (0, eA.iX)(l, t.isMediaChannel() ? eA.PL.SIXTEEN_BY_NINE : eA.PL.THREE_BY_TWO)),
            [t],
        ),
        { ref: to, ...td } = ts.containerProps,
        tc = Y.Ay.getSidebarState(t.id),
        tu = null != tc && (0, Y.JU)(tc),
        tm = (0, g.bG)([Y.Ay], () => Y.Ay.getSection(t.id)) === ey.YvQ.MEMBERS;
    return (0, l.jsx)("div", {
        className: eR.container,
        ref: ex,
        "data-member-list-open": tm,
        children: (0, l.jsx)(j.sk, {
            children: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        u &&
                            (0, l.jsx)(R.A, {
                                channel: t,
                                draftType: ee.C.FirstThreadMessage,
                                className: eR.uploadArea,
                                style: { right: tu && n?.isThreadSidebarFloating ? n.threadSidebarWidth : 0 },
                            }),
                        (0, l.jsx)(eB, { channel: t }),
                        (0, l.jsx)(b.A, { children: (0, l.jsx)(p.H, { children: ew.intl.string(ew.t.B2panI) }) }),
                        D
                            ? (0, l.jsx)("div", {
                                  className: eR.optInNotice,
                                  children: (0, l.jsx)(G.A, { channel: t }),
                              })
                            : null,
                        el
                            ? (0, l.jsx)(eE.JR, {
                                  navigator: ts,
                                  children: (0, l.jsx)(
                                      v.f,
                                      {
                                          ref: (e) => {
                                              (to.current = e?.getScrollerNode() ?? null), e4(e);
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: eR.grid,
                                          columns: ej,
                                          sections: eH,
                                          getItemKey: e8,
                                          getSectionHeight: e5,
                                          getItemHeight: tr,
                                          renderSection: e2,
                                          renderItem: e7,
                                          getSectionProps: te,
                                          onScroll: A ? tn : void 0,
                                          chunkSize: 350,
                                          ...td,
                                          ...e,
                                      },
                                      I,
                                  ),
                              })
                            : (0, l.jsx)(c.hD, {
                                  navigator: ti,
                                  children: (0, l.jsx)(c.PR, {
                                      children: (t) => {
                                          let { ref: n, ...a } = t;
                                          return (0, l.jsx)(
                                              C.Ei,
                                              {
                                                  ref: eZ(n),
                                                  className: eR.list,
                                                  sections: eH,
                                                  sectionHeight: e1,
                                                  rowHeight: e6,
                                                  renderRow: e3,
                                                  renderSection: e0,
                                                  chunkSize: 150,
                                                  onScroll: A ? tn : void 0,
                                                  paddingBottom: 24,
                                                  ...a,
                                                  ...e,
                                                  innerRole: "list",
                                              },
                                              I,
                                          );
                                      },
                                  }),
                              }),
                    ],
                }),
        }),
    });
}
function ez(e) {
    let { channel: t, coords: n } = e,
        a = (0, D.Ay)(t);
    return (0, l.jsx)("div", {
        className: i()(eR.missingReadHistoryPermission, eR.columnsSpan),
        style: n,
        children: (0, l.jsx)(A.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: ew.intl.format(ew.t.TycmzM, { channelName: a }),
        }),
    });
}
function eG(e) {
    let { channel: t, coords: n } = e,
        a = (0, D.Ay)(t);
    return (0, l.jsx)("div", {
        className: i()(eR.missingReadHistoryPermission, eR.columnsSpan),
        style: n,
        children: (0, l.jsx)(A.E, {
            color: "text-muted",
            variant: "text-md/normal",
            children: ew.intl.format(ew.t.OWZJdS, { channelName: a }),
        }),
    });
}
function eB(e) {
    let { channel: t } = e,
        n = a.useCallback(() => {
            er.A.resort(t.id);
        }, [t]),
        s = (0, g.bG)([eo.A], () => eo.A.getNewThreadCount());
    return 0 === s
        ? null
        : (0, l.jsx)(N.D, {
              className: eR.newPostsButton,
              onClick: n,
              children: (0, l.jsx)(A.E, {
                  color: "text-brand",
                  variant: "text-md/medium",
                  children: ew.intl.format(ew.t.ue1qfM, { count: s }),
              }),
          });
}
function eH() {
    return Promise.resolve();
}
function eV(e) {
    let t,
        n,
        s,
        { channel: r, isEmpty: p, isSearchLoading: j, numResults: b, children: v, coords: C, onHeightChange: w } = e,
        {
            name: R,
            formOpen: M,
            titleFocused: D,
            hasClickedForm: U,
            textAreaState: z,
            onboardingExpanded: G,
            setEditorAdditionRowHeight: B,
        } = (0, ep.kU)((e) => {
            let {
                name: t,
                formOpen: n,
                titleFocused: l,
                hasClickedForm: a,
                textAreaState: s,
                onboardingExpanded: i,
                setEditorAdditionRowHeight: r,
            } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: l,
                hasClickedForm: a,
                textAreaState: s,
                onboardingExpanded: i,
                setEditorAdditionRowHeight: r,
            };
        }, d.x),
        { tagFilter: W, layoutType: q } = (0, ed.R)(r.id),
        $ = (0, ep.ST)(),
        K = (0, ed.p)(),
        X = (0, g.bG)([et.A], () => et.A.canChatInGuild(r.guild_id)),
        Q = (0, ec.S4)(r),
        Y = (0, J.AI)(r),
        [Z, en] = a.useState(Y),
        [, ei] = (0, O.c)(r.getGuildId() ?? void 0),
        eo = (0, V.V)(r),
        eu = X && (Y || (Z && ei)) && !eo,
        em = r.isMediaChannel();
    a.useEffect(() => {
        Y && en(!0);
    }, [Y]);
    let { ref: eg, height: e_ } = (0, k.Ay)();
    a.useEffect(() => {
        null != e_ && w(e_);
    }, [w, e_]);
    let eb = a.useCallback(() => {
        o()(() => {
            null != eg.current && $.getState().setEditorHeight(eg.current.offsetHeight);
        });
    }, [eg, $]);
    a.useLayoutEffect(eb, [eb, p, eu, G]), (0, es.Vo)({ event: ey.jej.REMEASURE_TARGET, handler: eb });
    let ev = (0, g.bG)([el.A], () => el.A.getUploads(r.id, ee.C.FirstThreadMessage)),
        eA = (0, ec.Hv)(r),
        eS = a.useRef(null),
        eE = a.useRef(null),
        [eT, eI] = a.useState(0),
        { width: ek } = (0, g.bG)([ea.A], () => ea.A.windowSize()),
        eM = eS.current?.getBoundingClientRect()?.width,
        eL = a.useRef(null),
        eD = a.useRef(null);
    a.useLayoutEffect(() => {
        let e = eE.current,
            t = e?.children?.[0];
        if (null != eS.current && null != t && null != t.children) {
            let { left: e, top: n } = eS.current.getBoundingClientRect(),
                l = 0;
            for (let a of t.children) {
                let { right: t, top: s, height: i } = a.getBoundingClientRect();
                if (s - n > i) break;
                t - e > l && (l = t - e);
            }
            eI(l);
        }
    }, [r.availableTags, ek, eM, W]);
    let eP = R.length > 0 && !M && (j || null != b),
        eO =
            !__OVERLAY__ &&
            !U &&
            !M &&
            D &&
            (0 === z.textValue.trim().length || z.textValue.trim() === eA) &&
            0 === ev.length &&
            !eo;
    a.useLayoutEffect(() => {
        if (!(eP || eO)) return B(0);
        null != eL.current && B(eL.current.clientHeight);
    }, [B, eP, eO, eL]);
    let eF = (0, u.Ay)({
            id: `${r.id}-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eH,
            scrollToEnd: eH,
            orientation: m.Gl.HORIZONTAL,
        }),
        { role: eU, onFocus: ez, ...eG } = (0, c.rm)("forum-channel-header"),
        eB = a.useRef(null),
        eV =
            ((t = a.useRef(!1)),
            (n = (0, g.bG)([L.A], () => L.A.keyboardModeEnabled)),
            (s = a.useCallback(
                (e) => {
                    t.current = e.shiftKey;
                },
                [t],
            )),
            a.useLayoutEffect(
                () => (
                    n ? window.addEventListener("keydown", s) : window.removeEventListener("keydown", s),
                    () => window.removeEventListener("keydown", s)
                ),
                [n, s],
            ),
            t),
        eq = a.useCallback(
            (e) => {
                ez(), e.target !== eg.current || eV.current || eB.current?.focus();
            },
            [ez, eg, eV],
        ),
        e$ = a.useMemo(() => (eo ? (0, H.Yj)(r.availableTags) : r.availableTags), [r.availableTags, eo]);
    return (0, l.jsx)(
        "div",
        {
            className: i()(eR.card, eR.headerRow, eR.columnsSpan),
            ref: eg,
            onFocus: eq,
            ...eG,
            style: { ...C, position: q === h.C.GRID ? "absolute" : "static", height: "auto" },
            children: (0, l.jsxs)(es.Ah, {
                children: [
                    null != r.guild_id
                        ? (0, l.jsx)(F.A, {
                              className: i()(eR.newMemberBanner, { [eR.gridViewBanner]: q === h.C.GRID }),
                              guildId: r.guild_id,
                              channel: r,
                          })
                        : null,
                    (0, l.jsx)("div", {
                        className: i()(eR.mainCard, eR.header, { [eR.headerWithMatchingPosts]: eP || eO }),
                        children: (0, l.jsx)(ej.A, {
                            parentChannel: r,
                            onChange: eb,
                            isSearchLoading: j,
                            numResults: b,
                            canCreatePost: eu,
                            inputRef: eB,
                        }),
                    }),
                    (eP || eO) &&
                        (0, l.jsxs)("div", {
                            className: eR.matchingPostsRow,
                            ref: eL,
                            children: [
                                eP &&
                                    (0, l.jsxs)("div", {
                                        className: eR.matchingPosts,
                                        children: [
                                            (0, l.jsx)(_.D, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: j
                                                    ? ew.intl.string(ew.t["/9i3qq"])
                                                    : 0 === b
                                                      ? ew.intl.string(ew.t.DbgHxi)
                                                      : ew.intl.formatToPlainString(ew.t["tBz/8b"], {
                                                            numPosts: b ?? "",
                                                            query: R,
                                                        }),
                                            }),
                                            !j &&
                                                (0, l.jsx)(N.D, {
                                                    onClick: () => {
                                                        (0, eh.hT)({ guildId: r.guild_id, channelId: r.id }),
                                                            er.A.clearForumSearch(r.id),
                                                            $.getState().setName("");
                                                    },
                                                    children: (0, l.jsx)(A.E, {
                                                        variant: "text-xs/semibold",
                                                        color: "text-brand",
                                                        className: eR.clear,
                                                        children: ew.intl.string(ew.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                (0, l.jsx)("div", { className: eR.tagsSpacer }),
                                eO
                                    ? eu
                                        ? (0, l.jsxs)("div", {
                                              className: eR.startPostHelp,
                                              children: [
                                                  (0, l.jsx)(S.e, {
                                                      shortcut: "SHIFT",
                                                      className: eR.keyboardShortcut,
                                                  }),
                                                  (0, l.jsx)(A.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: "+",
                                                  }),
                                                  (0, l.jsx)(S.e, {
                                                      shortcut: "ENTER",
                                                      className: eR.keyboardShortcut,
                                                  }),
                                                  (0, l.jsx)(A.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: ew.intl.string(ew.t.ZvJ0yh),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)("div", {
                                              className: eR.startPostHelp,
                                              children: [
                                                  (0, l.jsx)(E.E, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      height: 14,
                                                      width: 14,
                                                      className: eR.warnIcon,
                                                  }),
                                                  (0, l.jsx)(A.E, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: ew.intl.string(ew.t.iyzwnD),
                                                  }),
                                              ],
                                          })
                                    : null,
                            ],
                        }),
                    (0, l.jsx)(ex.A, { channel: r, onChange: eb }),
                    (0, l.jsxs)("div", {
                        className: eR.tagsContainer,
                        ref: eS,
                        children: [
                            (0, l.jsx)(eW, { channel: r }),
                            e$.length > 0
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)("div", { className: eR.divider }),
                                          (0, l.jsx)("div", {
                                              className: eR.tagList,
                                              ref: eE,
                                              children: (0, l.jsx)(c.hD, {
                                                  navigator: eF,
                                                  children: (0, l.jsx)(c.PR, {
                                                      children: (e) => {
                                                          let { ref: t, ...n } = e;
                                                          return (0, l.jsx)("div", {
                                                              className: eR.tagListInner,
                                                              ref: t,
                                                              ...n,
                                                              children: e$.map((e) =>
                                                                  (0, l.jsx)(
                                                                      eC.A,
                                                                      {
                                                                          tag: e,
                                                                          onClick: () => {
                                                                              var t;
                                                                              return (
                                                                                  (t = e.id),
                                                                                  void ((0, eh.UA)({
                                                                                      guildId: r.guild_id,
                                                                                      channelId: r.id,
                                                                                      tagId: t,
                                                                                      filterTagIds: Array.from(W),
                                                                                      added: !W.has(t),
                                                                                      location: {
                                                                                          page: ey.liQ.GUILD_CHANNEL,
                                                                                          section:
                                                                                              ey.JJy
                                                                                                  .FORUM_CHANNEL_HEADER,
                                                                                          object: ey.ZSU.CHANNEL_TAG,
                                                                                      },
                                                                                  }),
                                                                                  K.getState().toggleTagFilter(r.id, t))
                                                                              );
                                                                          },
                                                                          selected: W.has(e.id),
                                                                      },
                                                                      e.id,
                                                                  ),
                                                              ),
                                                          });
                                                      },
                                                  }),
                                              }),
                                          }),
                                          (0, l.jsx)(T.Y, {
                                              targetElementRef: eD,
                                              renderPopout: (e) => {
                                                  let { closePopout: t, setPopoutRef: n } = e;
                                                  return (0, l.jsx)(eN.A, {
                                                      channel: r,
                                                      closePopout: t,
                                                      setPopoutRef: n,
                                                  });
                                              },
                                              position: "bottom",
                                              align: "right",
                                              children: (e, t) => {
                                                  let { isShown: n } = t;
                                                  return (0, l.jsxs)(f.$n, {
                                                      ...e,
                                                      "data-migration-pending": !0,
                                                      buttonRef: eD,
                                                      size: f.$n.Sizes.MIN,
                                                      color: f.$n.Colors.CUSTOM,
                                                      className: i()(eR.tagsButton, {
                                                          [eR.tagsButtonWithCount]: W.size > 0,
                                                      }),
                                                      style: { left: eT },
                                                      innerClassName: eR.tagsButtonInner,
                                                      "aria-label":
                                                          W.size > 0
                                                              ? ew.intl.string(ew.t.IkpM1T)
                                                              : ew.intl.string(ew.t["9vKK/N"]),
                                                      children: [
                                                          W.size > 0
                                                              ? (0, l.jsx)("div", {
                                                                    className: eR.countContainer,
                                                                    children: (0, l.jsx)(A.E, {
                                                                        className: eR.countText,
                                                                        color: "none",
                                                                        variant: "text-xs/medium",
                                                                        children: W.size,
                                                                    }),
                                                                })
                                                              : ew.intl.string(ew.t.fZ8hzm),
                                                          n
                                                              ? (0, l.jsx)(y.t, {
                                                                    size: "custom",
                                                                    color: "currentColor",
                                                                    width: 20,
                                                                })
                                                              : (0, l.jsx)(I.a, {
                                                                    size: "custom",
                                                                    color: "currentColor",
                                                                    width: 20,
                                                                }),
                                                      ],
                                                  });
                                              },
                                          }),
                                          (0, l.jsxs)(f.$n, {
                                              "data-migration-pending": !0,
                                              size: f.$n.Sizes.MIN,
                                              color: f.$n.Colors.CUSTOM,
                                              className: i()(eR.tagsButton, eR.tagsButtonPlaceholder),
                                              innerClassName: eR.tagsButtonInner,
                                              "aria-label": ew.intl.string(ew.t.IkpM1T),
                                              children: [
                                                  W.size > 0
                                                      ? (0, l.jsx)("div", {
                                                            className: eR.countContainer,
                                                            children: (0, l.jsx)(A.E, {
                                                                className: eR.countText,
                                                                color: "none",
                                                                variant: "text-xs/medium",
                                                                children: W.size,
                                                            }),
                                                        })
                                                      : null,
                                                  (0, l.jsx)(y.t, { size: "custom", color: "currentColor", width: 24 }),
                                              ],
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    v,
                    Q &&
                        !em &&
                        !eo &&
                        (0, l.jsx)(P.Ay, {
                            contentTypes: [x.M.FORUM_CHANNEL_HELPER_CARD],
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return t === x.M.FORUM_CHANNEL_HELPER_CARD ? (0, l.jsx)(ef.A, { onDismiss: n }) : null;
                            },
                        }),
                ],
            }),
        },
        "create-form",
    );
}
function eW(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        s = a.useRef(null);
    return (0, l.jsx)(T.Y, {
        targetElementRef: s,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(ev.A, { channel: t, closePopout: n });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: a } = t;
            return (0, l.jsxs)(f.$n, {
                ...e,
                "data-migration-pending": !0,
                buttonRef: s,
                size: f.$n.Sizes.MIN,
                color: f.$n.Colors.CUSTOM,
                className: eR.sortDropdown,
                innerClassName: eR.sortDropdownInner,
                "aria-label": n ? ew.intl.string(ew.t.JxU0wr) : ew.intl.string(ew.t.xyYt8A),
                children: [
                    (0, l.jsx)(w.J, { size: "xs", color: "currentColor" }),
                    (0, l.jsx)(A.E, {
                        className: eR.sortDropdownText,
                        variant: "text-sm/medium",
                        color: "interactive-text-default",
                        children: (0, l.jsx)("span", {
                            className: eR.sortDropdownTextHighContrastForcedColor,
                            children: n ? ew.intl.string(ew.t.JxU0wr) : ew.intl.string(ew.t.xyYt8A),
                        }),
                    }),
                    a
                        ? (0, l.jsx)(y.t, { size: "custom", color: "currentColor", width: 20 })
                        : (0, l.jsx)(I.a, { size: "custom", color: "currentColor", width: 20 }),
                ],
            });
        },
    });
}
