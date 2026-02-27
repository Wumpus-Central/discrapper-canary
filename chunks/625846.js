"use strict";
n.r(t), n.d(t, { default: () => ej });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(756287),
    o = n.n(r),
    d = n(942381),
    c = n(837381),
    u = n(884362),
    m = n(741918),
    h = n(371444),
    x = n(311907),
    g = n(554146),
    f = n(421380),
    p = n(397927),
    _ = n(738876),
    j = n(765671),
    b = n(964486),
    v = n(775602),
    A = n(47167),
    C = n(379848),
    T = n(870136),
    N = n(575293),
    S = n(857071),
    y = n(228098),
    E = n(157259),
    I = n(212007),
    R = n(376708),
    M = n(715757),
    k = n(954540),
    w = n(378570),
    L = n(940382),
    P = n(970278),
    D = n(424798),
    O = n(406704),
    F = n(747926),
    U = n(761640),
    G = n(734057),
    z = n(31717),
    H = n(834942),
    B = n(309010),
    V = n(522602),
    W = n(531685),
    K = n(234320),
    q = n(947094),
    $ = n(919577),
    J = n(207777),
    X = n(422844),
    Q = n(435470),
    Y = n(706849),
    Z = n(613999),
    ee = n(853742),
    et = n(978733),
    en = n(696583),
    el = n(6208),
    ei = n(835369),
    es = n(218152),
    ea = n(559351),
    er = n(891046),
    eo = n(133348),
    ed = n(376310),
    ec = n(414368),
    eu = n(123653),
    em = n(337666),
    eh = n(848551),
    ex = n(375907),
    eg = n(652215),
    ef = n(37411),
    ep = n(985018),
    e_ = n(1004);
function ej(e) {
    let { channel: t, guild: n, sidebarState: i } = e;
    return (0, l.jsx)(es.Cp, { channel: t, children: (0, l.jsx)(eS, { channel: t, guild: n, sidebarState: i }) }, t.id);
}
let eb = new ec.JT({ minWidth: 320, maxWidth: 450, gap: 16 });
function ev(e) {
    return `forum-grid-header-section-${e}`;
}
function eA(e) {
    let { itemRole: t, coords: n, section: i } = e;
    return (0, l.jsx)(
        "div",
        {
            className: a()(e_.card, e_.archivedDividerRow, e_.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, l.jsx)("div", {
                className: e_.emptyMainCard,
                children: (0, l.jsx)(p.Heading, {
                    variant: "eyebrow",
                    className: e_.archivedDivider,
                    id: ev(i),
                    children: ep.intl.string(ep.t["3+LO1w"]),
                }),
            }),
        },
        "section-divider",
    );
}
function eC(e) {
    let { section: t, coords: n, key: i, isShowingSearchResult: s, hasActiveThreads: a } = e;
    return () =>
        2 === t && !s && a
            ? (0, l.jsx)(
                  eA,
                  { section: t, coords: null == n ? void 0 : { ...n, position: "absolute" }, itemRole: "section" },
                  i,
              )
            : null;
}
function eT(e, t) {
    return `card-${e}-${t}`;
}
function eN(e) {
    if ("string" == typeof e) {
        let t = e.match(/card-{\d+}-({\d+})$/);
        return null == t ? null : t[1];
    }
    return null;
}
function eS(e) {
    let { channel: t, sidebarState: n } = e,
        {
            editorHeight: s,
            editorAdditionRowHeight: r,
            listViewCardHeights: o,
            formOpen: u,
            name: m,
        } = (0, es.kU)((e) => {
            let {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: l,
                formOpen: i,
                cardHeightVersion: s,
                name: a,
            } = e;
            return {
                editorHeight: t,
                editorAdditionRowHeight: n,
                listViewCardHeights: l,
                formOpen: i,
                name: a,
                cardHeightVersion: s,
            };
        }, d.x),
        {
            activeThreadIds: g,
            archivedThreadIds: f,
            searchResults: j,
            canLoadMore: A,
            loadMore: C,
            activeThreadsLoading: T,
            archivedThreadsLoading: N,
            loading: M,
            isSearchLoading: O,
            layoutType: H,
        } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: l, tagSetting: i } = (0, X.R)(e.id),
                s = (0, Q.V3)({ channel: e, sortOrder: t, tagFilter: n, tagSetting: i, shouldAutomaticallyAck: !0 }),
                a = (0, x.bG)([P.A, S.A], () => {
                    let t = P.A.hasLoaded(e.guild_id),
                        n = S.A.isLurking(e.guild_id);
                    return !t && !n;
                }),
                { threadIds: r, canLoadMore: o, loadMore: d, loading: c } = (0, D.Fr)(e, t, n, i),
                { searchResults: u, isSearchLoading: m } = (0, Q.cA)({ channelId: e.id });
            return (
                (0, Q.yz)(e, t, n, i),
                {
                    activeThreadIds: s,
                    archivedThreadIds: r,
                    searchResults: u,
                    canLoadMore: o,
                    loadMore: d,
                    loading: a || c || m,
                    archivedThreadsLoading: c,
                    activeThreadsLoading: a,
                    isSearchLoading: m,
                    layoutType: l,
                }
            );
        })(t),
        V = g.length > 0,
        W = V || f.length > 0,
        K = (0, y.A)(t),
        { tagFilter: J, tagSetting: en } = (0, X.R)(t.id);
    (0, Q.o7)(t, J, en, u),
        (0, b.Ay)(() => {
            !u && m.length > 0 && $.A.updateForumSearchQuery(t.id, m);
        });
    let el = (0, Q.O3)(t),
        ea = (0, Q.An)(t),
        eo = i.useRef(null),
        { observePostVisibilityAnalytics: ed } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: l } = e;
            Y.A.useForumChannelSeenManager({ guildId: t, channelId: n });
            let s = i.useRef(null),
                a = i.useCallback((e, t) => {
                    for (let n of t) {
                        let t = n.target.dataset.itemId;
                        if (null == t) return;
                        let l = Date.now();
                        n.intersectionRatio >= 0.5 ? (0, Z.xx)(e, t, l) : (0, Z.O_)(e, t, l);
                    }
                }, []);
            return (
                i.useEffect(() => {
                    let e = l.current?.getScrollerNode();
                    if (null != e)
                        return (
                            (s.current = new IntersectionObserver((e) => a(n, e), {
                                root: e,
                                rootMargin: "0px 100000px 0px 100000px",
                                threshold: 0.5,
                            })),
                            () => {
                                s.current?.disconnect(), (s.current = null);
                            }
                        );
                }, [n, a, l]),
                {
                    observePostVisibilityAnalytics: i.useCallback(
                        (e, t) => {
                            null == e ? (0, Z.O_)(n, t, Date.now()) : s.current?.observe(e);
                        },
                        [n],
                    ),
                }
            );
        })({ scrollerRef: eo, channelId: t.id, guildId: t.guild_id }),
        eu = H === h.C.GRID,
        { searchQuery: ej } = (0, Q.cA)({ channelId: t.id }),
        eA = null != j && null != ej && ej.length > 0,
        eS = i.useRef(null),
        { containerRef: eR, containerWidth: ek } = (0, em.A)();
    i.useEffect(() => {
        if (null == eS.current && null != t.id) {
            let e = U.Ay.getSidebarState(t.id);
            null != e && e.type === L.PE.VIEW_THREAD && (eS.current = e.channelId);
        }
    }, [t.id]);
    let { columns: ew } = i.useMemo(() => (eu ? eb.getRenderOptions(ek) : ec.CV), [eu, ek]),
        eL = i.useMemo(() => (M ? Math.round((window.innerHeight - 200) / 118) : 0), [M]),
        { showResolvedFlags: eP } = (0, I.T)(t.id),
        eD = t.isModeratorReportChannel(),
        eO = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ec.iX)(eb.getWidth(ek))) * ew;
            return T ? e : 0;
        }, [ek, ew, T]),
        eF = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ec.iX)(eb.getWidth(ek))) * ew;
            return N ? e : 0;
        }, [ek, ew, N]),
        eU = i.useMemo(() => {
            let e = Math.ceil(window.innerHeight / (0, ec.iX)(eb.getWidth(ek))) * ew;
            return O && eA ? e : 0;
        }, [ek, ew, O, eA]),
        eG = i.useMemo(() => {
            if (eu)
                if (!el && eA) return [1, 0];
                else if (!ea) return [1, g.length + eO, 0];
                else if (eA) return [1, j.length + eU, 0];
                else if (eD && !eP) return [1, g.length + eO, 0];
                else return [1, g.length + eO, f.length + eF];
            if (!el && eA) return [1, 1];
            if (!ea) return [1, g.length, 1];
            if (eA) return [1, j.length, 0, eL];
            if (eD && !eP) return [1, g.length, 0, eL];
            else return [1, g.length, f.length, eL];
        }, [eu, eA, g.length, f.length, el, ea, eL, j, eO, eF, eU, eP, eD]),
        ez = i.useMemo(
            () =>
                !el && eA
                    ? [[], []]
                    : ea
                      ? eA
                          ? [[], j, [], []]
                          : eD && !eP
                            ? [[], g, [], []]
                            : [[], g, f, []]
                      : [[], g, []],
            [eA, el, ea, j, g, f, eP, eD],
        ),
        eH = i.useCallback(
            (e, n) => {
                (0, ee.Ml)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: e.id,
                    location: { page: eg.liQ.GUILD_CHANNEL, section: eg.JJy.FORUM_CHANNEL_POST },
                }),
                    n ? (0, w.N9)(e, { source: ef.H9.BROWSER }) : ((eS.current = e.id), (0, F.JA)(e));
            },
            [t.guild_id, t.id, eS],
        ),
        [eB, eV] = i.useState(s + r - 24),
        eW = i.useCallback(
            (e, n, i) =>
                0 === e
                    ? (0, l.jsx)(
                          eM,
                          {
                              channel: t,
                              isEmpty: !V,
                              isSearchLoading: O,
                              numResults: j?.length,
                              coords: n,
                              onHeightChange: eV,
                              children:
                                  !M && (0, l.jsx)(et.A, { channel: t, hasAnyThread: W, hasActiveThreads: V }, t.id),
                          },
                          "forum-channel-header",
                      )
                    : 2 !== e || ea
                      ? 1 === e && eA && !el
                          ? (0, l.jsx)(eE, { channel: t, coords: n }, "archive-or-search-result")
                          : i()
                      : (0, l.jsx)(ey, { channel: t, coords: n }, "archived-missing-reading-history-perm"),
            [eA, ea, j, el, t, V, O, M, W],
        ),
        eK = (0, x.bG)([q.A], () => q.A.hasHidden(t.id)),
        eq = { editorHeight: s, isGridLayout: eu },
        e$ = i.useRef(eq);
    i.useEffect(() => {
        e$.current = eq;
    }),
        i.useEffect(() => {
            let { editorHeight: e, isGridLayout: t } = e$.current,
                n = t ? e0 : eo,
                l = n.current?.getScrollerState();
            null != l && !eK && l.scrollTop > e && n.current?.scrollTo({ to: 0 });
        }, [eK]);
    let {
            updateListScrollerRef: eJ,
            renderListSection: eX,
            renderListItem: eQ,
            getListSectionHeight: eY,
            getListItemHeight: eZ,
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
                g = (0, x.bG)([B.A], () => B.A.getChannelId()),
                f = i.useCallback(
                    (e) => (n) => {
                        (t.current = n), (e.current = n?.getScrollerNode() ?? null);
                    },
                    [t],
                ),
                _ = i.useCallback(
                    (e) => eC({ section: e.section, isShowingSearchResult: h, hasActiveThreads: n })(),
                    [n, h],
                ),
                j = i.useCallback(
                    (e) =>
                        c(e.section, void 0, () => {
                            if (3 === e.section)
                                return __OVERLAY__
                                    ? null
                                    : (0, l.jsx)(
                                          "div",
                                          {
                                              "data-item-role": "item",
                                              className: a()(e_.loadingCard, e_[`loadingCard-${e.row % 3}`]),
                                          },
                                          `loading-${e.row}`,
                                      );
                            let t = s[e.section][e.row],
                                n = null != g && (0, R.iU)(g) ? k.Ay : ei.Ay;
                            return (0, l.jsx)(
                                "li",
                                {
                                    className: e_.card,
                                    "data-item-role": "item",
                                    children: (0, l.jsx)(p.Fmo, {
                                        children: (0, l.jsx)(n, {
                                            className: e_.mainCard,
                                            threadId: t,
                                            goToThread: u,
                                            observePostVisibilityAnalytics: m,
                                        }),
                                    }),
                                },
                                `${e.section}-${t}`,
                            );
                        }),
                    [c, s, g, u, m],
                ),
                b = i.useCallback(
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
                getListSectionHeight: i.useCallback((e) => (2 === e && n ? 40 : 0), [n]),
                getListItemHeight: b,
            };
        })({
            listRef: eo,
            hasActiveThreads: V,
            threadIdsBySection: ez,
            listViewCardHeights: o,
            editorHeight: s,
            editorAdditionRowHeight: r,
            renderSectionOrItem: eW,
            goToThread: eH,
            observePostVisibilityAnalytics: ed,
            isShowingSearchResult: eA,
        }),
        e0 = i.useRef(null),
        {
            updateMasonryListScrollerRef: e3,
            getItemKey: e1,
            renderGridSection: e9,
            renderGridItem: e4,
            getGridSectionHeight: e6,
            getSectionProps: e8,
            handleGridFocus: e7,
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
                    headerHeight: x,
                } = e,
                g = i.useRef(null),
                f = i.useCallback(
                    (e) => {
                        (t.current = e), (g.current = e?.getScrollerNode());
                    },
                    [t],
                ),
                p = i.useCallback(
                    (e, n) => {
                        let { current: l } = t;
                        if (null == l) return;
                        let i = document.querySelector(e);
                        if (null == i) return;
                        let s = l.getCoordsMap()[n],
                            a = null != s ? s.height + 20 : 200;
                        l.scrollIntoViewNode({
                            node: i,
                            padding: a,
                            callback() {
                                requestAnimationFrame(() => {
                                    document.querySelector(e)?.focus({ preventScroll: !0 });
                                });
                            },
                        }),
                            (h.current = eN(n));
                    },
                    [t, h],
                ),
                _ = i.useCallback(
                    (e) => {
                        let t = eN(e);
                        if (null == t) return;
                        let n = G.A.getChannel(t);
                        null != n && s(n, !0);
                    },
                    [s],
                ),
                j = i.useCallback(
                    function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (0 === n[e].length) return `section-${e}-${t}`;
                        {
                            let l = n[e][t];
                            return null == l ? eT(e, t) : eT(e, l);
                        }
                    },
                    [n],
                ),
                b = i.useCallback(
                    (e, t, n) =>
                        r(e, t, eC({ section: e, coords: t, key: n, isShowingSearchResult: d, hasActiveThreads: o })),
                    [r, o, d],
                ),
                v = i.useCallback((e) => (0 === e ? {} : { role: "grid", "aria-labelledby": `#${ev(e)}` }), []);
            return {
                updateMasonryListScrollerRef: f,
                masonryListContainerRef: g,
                focusedThreadId: h,
                handleGridFocus: p,
                handleGridSelect: _,
                getItemKey: j,
                renderGridSection: b,
                renderGridItem: i.useCallback(
                    (e, t, i, r, o) => {
                        if (0 === e) return null;
                        let d = n[e][t];
                        return null != d
                            ? (0, l.jsx)(
                                  er.A,
                                  {
                                      id: `${r}`,
                                      threadId: d,
                                      className: a()(e_.card, e_.mainCard),
                                      goToThread: s,
                                      observePostVisibilityAnalytics: m,
                                      coords: i,
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
                                        style: { ...i },
                                        "data-item-role": "item",
                                        className: a()(e_.loadingCard, e_[`loadingCard-${t % 3}`]),
                                    },
                                    r,
                                );
                    },
                    [n, s, m],
                ),
                getSectionProps: v,
                getGridSectionHeight: i.useCallback(
                    (e) => (0 === e ? x - 8 - 24 : 2 === e ? (o || !u ? 40 : 0) : 1 === e && d && !c ? 40 : 0),
                    [x, d, c, o, u],
                ),
            };
        })({
            masonryListScrollerRef: e0,
            threadIdsBySection: ez,
            goToThread: eH,
            renderSectionOrItem: eW,
            hasActiveThreads: V,
            isShowingSearchResult: eA,
            canSearchForumPosts: el,
            canViewArchivedPosts: ea,
            observePostVisibilityAnalytics: ed,
            focusedThreadId: eS,
            headerHeight: eB,
        });
    !(function (e) {
        let {
            masonryListScrollerRef: t,
            containerWidth: n,
            isGridLayout: l,
            threadIdsBySection: s,
            focusedThreadId: a,
            parentId: r,
        } = e;
        i.useEffect(() => {
            if (l) {
                let e = setTimeout(() => {
                    if (null == t.current || null == a.current) return;
                    let e = a.current;
                    if ("string" != typeof e) return;
                    null == U.Ay.getSidebarState(r) && (a.current = null);
                    let n = s.findIndex((t) => t.find((t) => t === e)),
                        l = t.current.getCoordsMap(),
                        i = l[`__section__${n}`],
                        o = l[eT(n, e)];
                    null != i &&
                        null != o &&
                        t.current.scrollIntoViewRect({
                            start: i.top + o.top - 100,
                            end: i.top + o.top + o.height + 50,
                        });
                }, 0);
                return () => clearTimeout(e);
            }
        }, [r, n, l, s, a, t]);
    })({
        masonryListScrollerRef: e0,
        containerWidth: ek,
        isGridLayout: eu,
        threadIdsBySection: ez,
        parentId: t.id,
        focusedThreadId: eS,
    });
    let e5 = i.useCallback(() => {
            if (eA) return;
            let e = eu ? e0.current?.getScrollerState() : eo.current?.getScrollerState();
            if (null == e) return;
            (0, ee.pO)({ guildId: t.guild_id, channelId: t.id });
            let n = e.scrollTop + e.offsetHeight;
            e.scrollHeight - n < (eu ? Math.max(200, (0, ec.iX)(ek)) : 200) && C();
        }, [eA, eu, t.guild_id, t.id, ek, C]),
        e2 = (0, x.bG)([v.A], () => v.A.keyboardModeEnabled),
        te = (0, es.kU)((e) => e.titleFocused || e.bodyFocused, d.x),
        tt = (0, eh.Ay)({ id: "forum-grid-view", isEnabled: eu && e2 && !te, setFocus: e7 }),
        tn = (0, ex.A)({ listRef: eo, padding: 96, isEnabled: !eu && e2 && !te, channel: t }),
        tl = i.useCallback(
            (e, n, l) => (0 === e ? 0 : (0, ec.iX)(l, t.isMediaChannel() ? ec.PL.SIXTEEN_BY_NINE : ec.PL.THREE_BY_TWO)),
            [t],
        ),
        { ref: ti, ...ts } = tt.containerProps,
        ta = U.Ay.getSidebarState(t.id),
        tr = null != ta && (0, U.JU)(ta),
        to = (0, x.bG)([U.Ay], () => U.Ay.getSection(t.id)) === eg.YvQ.MEMBERS;
    return (0, l.jsx)("div", {
        className: e_.container,
        ref: eR,
        "data-member-list-open": to,
        children: (0, l.jsx)(p.skg, {
            children: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        u &&
                            (0, l.jsx)(_.A, {
                                channel: t,
                                draftType: z.C.FirstThreadMessage,
                                className: e_.uploadArea,
                                style: { right: tr && n?.isThreadSidebarFloating ? n.threadSidebarWidth : 0 },
                            }),
                        (0, l.jsx)(eI, { channel: t }),
                        (0, l.jsx)(p.AC4, { children: (0, l.jsx)(p.H, { children: ep.intl.string(ep.t.B2panI) }) }),
                        K
                            ? (0, l.jsx)("div", {
                                  className: e_.optInNotice,
                                  children: (0, l.jsx)(E.A, { channel: t }),
                              })
                            : null,
                        eu
                            ? (0, l.jsx)(eh.JR, {
                                  navigator: tt,
                                  children: (0, l.jsx)(
                                      p.a0_,
                                      {
                                          ref: (e) => {
                                              (ti.current = e?.getScrollerNode() ?? null), e3(e);
                                          },
                                          itemGutter: 16,
                                          padding: 24,
                                          className: e_.grid,
                                          columns: ew,
                                          sections: eG,
                                          getItemKey: e1,
                                          getSectionHeight: e6,
                                          getItemHeight: tl,
                                          renderSection: e9,
                                          renderItem: e4,
                                          getSectionProps: e8,
                                          onScroll: A ? e5 : void 0,
                                          chunkSize: 350,
                                          ...ts,
                                          ...e,
                                      },
                                      H,
                                  ),
                              })
                            : (0, l.jsx)(c.hD, {
                                  navigator: tn,
                                  children: (0, l.jsx)(c.PR, {
                                      children: (t) => {
                                          let { ref: n, ...i } = t;
                                          return (0, l.jsx)(
                                              p.Eie,
                                              {
                                                  ref: eJ(n),
                                                  className: e_.list,
                                                  sections: eG,
                                                  sectionHeight: eY,
                                                  rowHeight: eZ,
                                                  renderRow: eQ,
                                                  renderSection: eX,
                                                  chunkSize: 150,
                                                  onScroll: A ? e5 : void 0,
                                                  paddingBottom: 24,
                                                  ...i,
                                                  ...e,
                                                  innerRole: "list",
                                              },
                                              H,
                                          );
                                      },
                                  }),
                              }),
                    ],
                }),
        }),
    });
}
function ey(e) {
    let { channel: t, coords: n } = e,
        i = (0, A.Ay)(t);
    return (0, l.jsx)("div", {
        className: a()(e_.missingReadHistoryPermission, e_.columnsSpan),
        style: n,
        children: (0, l.jsx)(p.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: ep.intl.format(ep.t.TycmzM, { channelName: i }),
        }),
    });
}
function eE(e) {
    let { channel: t, coords: n } = e,
        i = (0, A.Ay)(t);
    return (0, l.jsx)("div", {
        className: a()(e_.missingReadHistoryPermission, e_.columnsSpan),
        style: n,
        children: (0, l.jsx)(p.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: ep.intl.format(ep.t.OWZJdS, { channelName: i }),
        }),
    });
}
function eI(e) {
    let { channel: t } = e,
        n = i.useCallback(() => {
            $.A.resort(t.id);
        }, [t]),
        s = (0, x.bG)([J.A], () => J.A.getNewThreadCount());
    return 0 === s
        ? null
        : (0, l.jsx)(p.DUT, {
              className: e_.newPostsButton,
              onClick: n,
              children: (0, l.jsx)(p.Text, {
                  color: "text-brand",
                  variant: "text-md/medium",
                  children: ep.intl.format(ep.t.ue1qfM, { count: s }),
              }),
          });
}
function eR() {
    return Promise.resolve();
}
function eM(e) {
    let t,
        n,
        s,
        { channel: r, isEmpty: _, isSearchLoading: b, numResults: A, children: S, coords: y, onHeightChange: E } = e,
        {
            name: I,
            formOpen: k,
            titleFocused: w,
            hasClickedForm: L,
            textAreaState: P,
            onboardingExpanded: D,
            setEditorAdditionRowHeight: F,
        } = (0, es.kU)((e) => {
            let {
                name: t,
                formOpen: n,
                titleFocused: l,
                hasClickedForm: i,
                textAreaState: s,
                onboardingExpanded: a,
                setEditorAdditionRowHeight: r,
            } = e;
            return {
                name: t,
                formOpen: n,
                titleFocused: l,
                hasClickedForm: i,
                textAreaState: s,
                onboardingExpanded: a,
                setEditorAdditionRowHeight: r,
            };
        }, d.x),
        { tagFilter: U, layoutType: G } = (0, X.R)(r.id),
        B = (0, es.ST)(),
        q = (0, X.p)(),
        J = (0, x.bG)([H.A], () => H.A.canChatInGuild(r.guild_id)),
        Y = (0, Q.S4)(r),
        Z = (0, O.AI)(r),
        [et, ei] = i.useState(Z),
        [, er] = (0, T.c)(r.getGuildId() ?? void 0),
        eo = (0, M.V)(r),
        ec = J && (Z || (et && er)) && !eo,
        em = r.isMediaChannel();
    i.useEffect(() => {
        Z && ei(!0);
    }, [Z]);
    let { ref: eh, height: ex } = (0, j.Ay)();
    i.useEffect(() => {
        null != ex && E(ex);
    }, [E, ex]);
    let ef = i.useCallback(() => {
        o()(() => {
            null != eh.current && B.getState().setEditorHeight(eh.current.offsetHeight);
        });
    }, [eh, B]);
    i.useLayoutEffect(ef, [ef, _, ec, D]), (0, K.Vo)({ event: eg.jej.REMEASURE_TARGET, handler: ef });
    let ej = (0, x.bG)([V.A], () => V.A.getUploads(r.id, z.C.FirstThreadMessage)),
        eb = (0, Q.Hv)(r),
        ev = i.useRef(null),
        eA = i.useRef(null),
        [eC, eT] = i.useState(0),
        { width: eN } = (0, x.bG)([W.A], () => W.A.windowSize()),
        eS = ev.current?.getBoundingClientRect()?.width,
        ey = i.useRef(null),
        eE = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = eA.current,
            t = e?.children?.[0];
        if (null != ev.current && null != t && null != t.children) {
            let { left: e, top: n } = ev.current.getBoundingClientRect(),
                l = 0;
            for (let i of t.children) {
                let { right: t, top: s, height: a } = i.getBoundingClientRect();
                if (s - n > a) break;
                t - e > l && (l = t - e);
            }
            eT(l);
        }
    }, [r.availableTags, eN, eS, U]);
    let eI = I.length > 0 && !k && (b || null != A),
        eM =
            !__OVERLAY__ &&
            !L &&
            !k &&
            w &&
            (0 === P.textValue.trim().length || P.textValue.trim() === eb) &&
            0 === ej.length &&
            !eo;
    i.useLayoutEffect(() => {
        let e = eI || eM;
        if (!e) return F(0);
        null != ey.current && F(e ? ey.current.clientHeight : 0);
    }, [F, eI, eM, ey]);
    let ew = (0, u.Ay)({
            id: `${r.id}-tags-navigator`,
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eR,
            scrollToEnd: eR,
            orientation: m.Gl.HORIZONTAL,
        }),
        { role: eL, onFocus: eP, ...eD } = (0, c.rm)("forum-channel-header"),
        eO = i.useRef(null),
        eF =
            ((t = i.useRef(!1)),
            (n = (0, x.bG)([v.A], () => v.A.keyboardModeEnabled)),
            (s = i.useCallback(
                (e) => {
                    t.current = e.shiftKey;
                },
                [t],
            )),
            i.useLayoutEffect(
                () => (
                    n ? window.addEventListener("keydown", s) : window.removeEventListener("keydown", s),
                    () => window.removeEventListener("keydown", s)
                ),
                [n, s],
            ),
            t),
        eU = i.useCallback(
            (e) => {
                eP(), e.target !== eh.current || eF.current || eO.current?.focus();
            },
            [eP, eh, eF],
        ),
        eG = i.useMemo(() => (eo ? (0, R.Yj)(r.availableTags) : r.availableTags), [r.availableTags, eo]);
    return (0, l.jsx)(
        "div",
        {
            className: a()(e_.card, e_.headerRow, e_.columnsSpan),
            ref: eh,
            onFocus: eU,
            ...eD,
            style: { ...y, position: G === h.C.GRID ? "absolute" : "static", height: "auto" },
            children: (0, l.jsxs)(K.Ah, {
                children: [
                    null != r.guild_id
                        ? (0, l.jsx)(N.A, {
                              className: a()(e_.newMemberBanner, { [e_.gridViewBanner]: G === h.C.GRID }),
                              guildId: r.guild_id,
                              channel: r,
                          })
                        : null,
                    (0, l.jsx)("div", {
                        className: a()(e_.mainCard, e_.header, { [e_.headerWithMatchingPosts]: eI || eM }),
                        children: (0, l.jsx)(ea.A, {
                            parentChannel: r,
                            onChange: ef,
                            isSearchLoading: b,
                            numResults: A,
                            canCreatePost: ec,
                            inputRef: eO,
                        }),
                    }),
                    (eI || eM) &&
                        (0, l.jsxs)("div", {
                            className: e_.matchingPostsRow,
                            ref: ey,
                            children: [
                                eI &&
                                    (0, l.jsxs)("div", {
                                        className: e_.matchingPosts,
                                        children: [
                                            (0, l.jsx)(p.Heading, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: b
                                                    ? ep.intl.string(ep.t["/9i3qq"])
                                                    : 0 === A
                                                      ? ep.intl.string(ep.t.DbgHxi)
                                                      : ep.intl.formatToPlainString(ep.t["tBz/8b"], {
                                                            numPosts: A ?? "",
                                                            query: I,
                                                        }),
                                            }),
                                            !b &&
                                                (0, l.jsx)(p.DUT, {
                                                    onClick: () => {
                                                        (0, ee.hT)({ guildId: r.guild_id, channelId: r.id }),
                                                            $.A.clearForumSearch(r.id),
                                                            B.getState().setName("");
                                                    },
                                                    children: (0, l.jsx)(p.Text, {
                                                        variant: "text-xs/semibold",
                                                        color: "text-brand",
                                                        className: e_.clear,
                                                        children: ep.intl.string(ep.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                (0, l.jsx)("div", { className: e_.tagsSpacer }),
                                eM
                                    ? ec
                                        ? (0, l.jsxs)("div", {
                                              className: e_.startPostHelp,
                                              children: [
                                                  (0, l.jsx)(p.e7I, {
                                                      shortcut: "SHIFT",
                                                      className: e_.keyboardShortcut,
                                                  }),
                                                  (0, l.jsx)(p.Text, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: "+",
                                                  }),
                                                  (0, l.jsx)(p.e7I, {
                                                      shortcut: "ENTER",
                                                      className: e_.keyboardShortcut,
                                                  }),
                                                  (0, l.jsx)(p.Text, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: ep.intl.string(ep.t.ZvJ0yh),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)("div", {
                                              className: e_.startPostHelp,
                                              children: [
                                                  (0, l.jsx)(p.EpV, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      height: 14,
                                                      width: 14,
                                                      className: e_.warnIcon,
                                                  }),
                                                  (0, l.jsx)(p.Text, {
                                                      variant: "text-xs/normal",
                                                      color: "text-subtle",
                                                      children: ep.intl.string(ep.t.iyzwnD),
                                                  }),
                                              ],
                                          })
                                    : null,
                            ],
                        }),
                    (0, l.jsx)(en.A, { channel: r, onChange: ef }),
                    (0, l.jsxs)("div", {
                        className: e_.tagsContainer,
                        ref: ev,
                        children: [
                            (0, l.jsx)(ek, { channel: r }),
                            eG.length > 0
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)("div", { className: e_.divider }),
                                          (0, l.jsx)("div", {
                                              className: e_.tagList,
                                              ref: eA,
                                              children: (0, l.jsx)(c.hD, {
                                                  navigator: ew,
                                                  children: (0, l.jsx)(c.PR, {
                                                      children: (e) => {
                                                          let { ref: t, ...n } = e;
                                                          return (0, l.jsx)("div", {
                                                              className: e_.tagListInner,
                                                              ref: t,
                                                              ...n,
                                                              children: eG.map((e) =>
                                                                  (0, l.jsx)(
                                                                      ed.A,
                                                                      {
                                                                          tag: e,
                                                                          onClick: () => {
                                                                              var t;
                                                                              return (
                                                                                  (t = e.id),
                                                                                  void ((0, ee.UA)({
                                                                                      guildId: r.guild_id,
                                                                                      channelId: r.id,
                                                                                      tagId: t,
                                                                                      filterTagIds: Array.from(U),
                                                                                      added: !U.has(t),
                                                                                      location: {
                                                                                          page: eg.liQ.GUILD_CHANNEL,
                                                                                          section:
                                                                                              eg.JJy
                                                                                                  .FORUM_CHANNEL_HEADER,
                                                                                          object: eg.ZSU.CHANNEL_TAG,
                                                                                      },
                                                                                  }),
                                                                                  q.getState().toggleTagFilter(r.id, t))
                                                                              );
                                                                          },
                                                                          selected: U.has(e.id),
                                                                      },
                                                                      e.id,
                                                                  ),
                                                              ),
                                                          });
                                                      },
                                                  }),
                                              }),
                                          }),
                                          (0, l.jsx)(p.YNO, {
                                              targetElementRef: eE,
                                              renderPopout: (e) => {
                                                  let { closePopout: t, setPopoutRef: n } = e;
                                                  return (0, l.jsx)(eu.A, {
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
                                                      buttonRef: eE,
                                                      size: f.$n.Sizes.MIN,
                                                      color: f.$n.Colors.CUSTOM,
                                                      className: a()(e_.tagsButton, {
                                                          [e_.tagsButtonWithCount]: U.size > 0,
                                                      }),
                                                      style: { left: eC },
                                                      innerClassName: e_.tagsButtonInner,
                                                      "aria-label":
                                                          U.size > 0
                                                              ? ep.intl.string(ep.t.IkpM1T)
                                                              : ep.intl.string(ep.t["9vKK/N"]),
                                                      children: [
                                                          U.size > 0
                                                              ? (0, l.jsx)("div", {
                                                                    className: e_.countContainer,
                                                                    children: (0, l.jsx)(p.Text, {
                                                                        className: e_.countText,
                                                                        color: "none",
                                                                        variant: "text-xs/medium",
                                                                        children: U.size,
                                                                    }),
                                                                })
                                                              : ep.intl.string(ep.t.fZ8hzm),
                                                          n
                                                              ? (0, l.jsx)(p.tN5, {
                                                                    size: "custom",
                                                                    color: "currentColor",
                                                                    width: 20,
                                                                })
                                                              : (0, l.jsx)(p.abt, {
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
                                              className: a()(e_.tagsButton, e_.tagsButtonPlaceholder),
                                              innerClassName: e_.tagsButtonInner,
                                              "aria-label": ep.intl.string(ep.t.IkpM1T),
                                              children: [
                                                  U.size > 0
                                                      ? (0, l.jsx)("div", {
                                                            className: e_.countContainer,
                                                            children: (0, l.jsx)(p.Text, {
                                                                className: e_.countText,
                                                                color: "none",
                                                                variant: "text-xs/medium",
                                                                children: U.size,
                                                            }),
                                                        })
                                                      : null,
                                                  (0, l.jsx)(p.tN5, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      width: 24,
                                                  }),
                                              ],
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    S,
                    Y &&
                        !em &&
                        !eo &&
                        (0, l.jsx)(C.Ay, {
                            contentTypes: [g.M.FORUM_CHANNEL_HELPER_CARD],
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return t === g.M.FORUM_CHANNEL_HELPER_CARD ? (0, l.jsx)(el.A, { onDismiss: n }) : null;
                            },
                        }),
                ],
            }),
        },
        "create-form",
    );
}
function ek(e) {
    let { channel: t } = e,
        n = t.isMediaChannel(),
        s = i.useRef(null);
    return (0, l.jsx)(p.YNO, {
        targetElementRef: s,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(eo.A, { channel: t, closePopout: n });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, l.jsxs)(f.$n, {
                ...e,
                "data-migration-pending": !0,
                buttonRef: s,
                size: f.$n.Sizes.MIN,
                color: f.$n.Colors.CUSTOM,
                className: e_.sortDropdown,
                innerClassName: e_.sortDropdownInner,
                "aria-label": n ? ep.intl.string(ep.t.JxU0wr) : ep.intl.string(ep.t.xyYt8A),
                children: [
                    (0, l.jsx)(p.JNJ, { size: "xs", color: "currentColor" }),
                    (0, l.jsx)(p.Text, {
                        className: e_.sortDropdownText,
                        variant: "text-sm/medium",
                        color: "interactive-text-default",
                        children: (0, l.jsx)("span", {
                            className: e_.sortDropdownTextHighContrastForcedColor,
                            children: n ? ep.intl.string(ep.t.JxU0wr) : ep.intl.string(ep.t.xyYt8A),
                        }),
                    }),
                    i
                        ? (0, l.jsx)(p.tN5, { size: "custom", color: "currentColor", width: 20 })
                        : (0, l.jsx)(p.abt, { size: "custom", color: "currentColor", width: 20 }),
                ],
            });
        },
    });
}
