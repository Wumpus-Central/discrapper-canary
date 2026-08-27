"use strict";
n.d(t, { A: () => ty });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(305866),
    o = n(289873),
    u = n(793574),
    c = n(688810),
    d = n(151271),
    h = n(702841),
    m = n(594061),
    f = n(796774),
    p = n(209932);
n(30146);
var g = n(562708),
    x = n(17928),
    A = n(27232),
    C = n(406810),
    E = n(111159),
    I = n(7689),
    y = n(369606),
    S = n(939249),
    v = n(297264),
    N = n(358618),
    _ = n(983851),
    j = n(442433),
    T = n(537652),
    b = n(212245),
    R = n(139286),
    O = n(915089),
    M = n(724511),
    L = n(850992),
    k = n(887695),
    w = n(435558),
    P = n(962125),
    D = n(158045),
    U = n(240864),
    G = n(212633);
let V = i.forwardRef(function (e, t) {
        let {
                categories: n,
                store: s,
                hasSearchResults: r,
                listPadding: a,
                renderRow: o,
                renderSection: u,
                renderSectionHeader: c,
                renderSectionFooter: h,
                renderInspector: m,
                renderEmptySearchState: f,
                rowCount: p,
                rowCountBySection: g,
                rowHeight: x,
                sectionHeaderHeight: A,
                sectionFooterHeight: C,
                renderUpsell: E,
                onScroll: I,
            } = e,
            y = i.useRef(!1),
            S = i.useRef(null),
            v = (0, d.RQ)((e) => e.searchQuery),
            N = s.useStore((e) => e.activeCategoryIndex),
            _ = i.useMemo(
                () =>
                    n.map((e) =>
                        (0, D.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            j = (0, k.Fk)({
                activeCategoryIndex: N,
                isScrolling: y,
                listRef: S,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: v,
            }),
            T = i.useCallback(
                (e) => {
                    j(e),
                        F({
                            listRef: S,
                            searchQuery: v,
                            nitroLockedSectionStates: _,
                            scrollTop: e,
                            sectionHeaderHeight: A,
                            sectionFooterHeight: C,
                        }),
                        I?.(e);
                },
                [j, v, _, A, C, I],
            );
        return (
            i.useEffect(() => {
                null != S.current && T(S.current.getScrollerNode()?.scrollTop ?? 0);
            }, [T, S]),
            (0, k.FV)({ searchQuery: v, activeCategoryIndex: N, listRef: S }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => S.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => S.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, l.jsxs)("div", {
                className: G.i,
                children: [
                    v.length > 0 && !r && null != f
                        ? f()
                        : (0, l.jsx)(P.A, {
                              role: "none presentation",
                              listPadding: a,
                              onScroll: T,
                              renderRow: o,
                              renderSection: u,
                              renderSectionHeader: c,
                              renderSectionFooter: h,
                              rowCount: p,
                              rowCountBySection: g,
                              rowHeight: x,
                              sectionHeaderHeight: A,
                              sectionFooterHeight: C,
                              stickyHeaders: !0,
                              ref: S,
                          }),
                    E?.(),
                    m?.(),
                ],
            })
        );
    }),
    F = (0, w.throttle)(
        function (e) {
            let {
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: s,
                sectionFooterHeight: r,
            } = e;
            if (null == t.current) return;
            let a = (0, U.s)({
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: s,
                sectionFooterHeight: r,
            });
            d.RQ.setState({
                isNitroLockedSectionVisible: a.isNitroLockedSectionVisible,
                areOnlyNitroLockedSectionsVisible: a.areOnlyNitroLockedSectionsVisible,
            });
        },
        300,
        { leading: !1, trailing: !0 },
    );
var H = n(462180),
    B = n(602034),
    W = n(683438),
    K = n(642232);
let z = i.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: s,
            onKeyDown: r,
            gridNavigatorId: a,
            expressionsListRef: o,
            defaultSearchPlaceholder: u,
            emptySearchPlaceholder: c,
        } = e,
        h = i.useRef(null),
        [m, f] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], H.x),
        p = n.useStore((e) => e.searchPlaceholder),
        [g, x] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], H.x),
        A = i.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : L.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, d.Ri)(e),
                    o.current?.scrollTo(0);
            },
            [o, n],
        ),
        C = i.useCallback(() => {
            A("");
        }, [A]);
    return (
        i.useImperativeHandle(t, () => ({ focus: () => h.current?.focus() })),
        i.useLayoutEffect(() => {
            f && h.current?.focus();
        }, [f]),
        (0, l.jsx)("div", {
            className: K.i,
            children: (0, l.jsx)(W.I, {
                autoFocus: s,
                disabled: !s,
                query: m,
                ref: h,
                placeholder: null != p ? p : s || null == c ? u : c,
                onClear: C,
                onKeyDown: r,
                onChange: A,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": a,
                    "aria-expanded": !0,
                    ...(x ? { "aria-activedescendant": (0, B.Aq)(a, g.columnIndex, g.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var Z = n(904289);
function Y(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: s,
            store: r,
            onSelectItem: a,
            onSearchExpressions: o,
            onScroll: u,
            hasSearchResults: c,
            defaultSearchPlaceholder: h,
            emptySearchPlaceholder: m,
            renderEmptyState: f,
            renderRow: p,
            renderSection: g,
            renderSectionHeader: x,
            renderSectionFooter: A,
            renderInspector: C,
            renderEmptySearchState: E,
            renderCategoryList: I,
            renderHeaderAccessories: y,
            rowHeight: S,
            sectionHeaderHeight: v,
            sectionFooterHeight: N,
            itemNodeWidth: _,
            listPaddingRight: j,
            itemNodeMargin: T,
            listPadding: b,
            gridNavigatorId: R,
            gridNotice: O,
            renderHeader: M,
            renderUpsell: L,
        } = e,
        w = i.useRef(null),
        P = i.useRef(null),
        D = i.useRef(null),
        U = 0 === t.length,
        G = (0, d.RQ)((e) => e.searchQuery),
        F = r.useStore((e) => e.inspectedExpressionPosition),
        H = (0, k.oV)({ gridWrapperRef: w, containerWidth: s, showingEmptyState: U }),
        {
            expressionsGrid: B,
            rowCount: W,
            rowCountBySection: K,
            columnCounts: Y,
            gutterWidth: q,
        } = (0, k.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: j,
            itemNodeWidth: _,
            itemNodeMargin: T,
        }),
        {
            getItemProps: J,
            getRowProps: $,
            gridContainerProps: X,
            handleGridContainerKeyDown: Q,
            isUsingKeyboardNavigation: ee,
        } = (0, k.JZ)({
            columnCounts: Y,
            expressionsListRef: P,
            expressionsGrid: B,
            onSelectItem: a,
            store: r,
            gridNavigatorId: R,
        }),
        et = i.useCallback(
            (e, t) =>
                p(
                    B[e],
                    $(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: q,
                        rowIndex: e,
                        totalRowCount: W,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => J(e, t),
                    (t) => r.setInspectedExpressionPosition(t, e),
                ),
            [B, J, $, q, ee, p, r, W],
        ),
        en = i.useCallback((e) => x?.(t[e], e), [t, x]),
        el = i.useCallback((e) => A?.(t[e], e), [t, A]),
        ei = i.useCallback(() => C?.(B?.[F.rowIndex]?.[F.columnIndex]), [B, F.columnIndex, F.rowIndex, C]);
    i.useEffect(() => {
        o(G);
    }, [o, G]),
        i.useEffect(() => {
            r.setBottomPosition(w.current?.getBoundingClientRect().bottom ?? null);
        }),
        i.useEffect(() => r.resetStoreState, [r.resetStoreState]),
        i.useLayoutEffect(() => {
            D.current?.focus();
        }, []);
    let es = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(z, {
                ref: D,
                store: r,
                hasSendableExpressions: !0,
                onKeyDown: Q,
                expressionsListRef: P,
                gridNavigatorId: R,
                defaultSearchPlaceholder: h,
                emptySearchPlaceholder: m,
            }),
            y?.(),
        ],
    });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != M ? M(es) : (0, l.jsxs)("div", { className: Z.wx, children: [" ", es, " "] }),
            U && null != f
                ? f(Z.p$)
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          I(P),
                          null != O && (0, l.jsx)("div", { className: Z.Eb, children: O }),
                          (0, l.jsx)("div", {
                              ref: w,
                              className: Z.AD,
                              id: R,
                              ...X,
                              children:
                                  null != H
                                      ? (0, l.jsx)(V, {
                                            categories: t,
                                            ref: P,
                                            store: r,
                                            hasSearchResults: c,
                                            listPadding: b,
                                            renderRow: et,
                                            renderSection: g,
                                            renderSectionHeader: null != x ? en : void 0,
                                            renderSectionFooter: null != A ? el : void 0,
                                            renderInspector: null != C ? ei : void 0,
                                            renderEmptySearchState: E,
                                            rowCount: W,
                                            rowCountBySection: K,
                                            rowHeight: S,
                                            sectionHeaderHeight: v,
                                            sectionFooterHeight: N,
                                            renderUpsell: L,
                                            onScroll: u,
                                        })
                                      : null,
                          }),
                      ],
                  }),
        ],
    });
}
var q = n(89366),
    J = n(319993),
    $ = n(202639),
    X = n(414872),
    Q = n(41219),
    ee = n(2181),
    et = n(523006),
    en = n(885386),
    el = n(763827),
    ei = n(287809),
    es = n(977997),
    er = n(147925),
    ea = n(174459),
    eo = n(807348),
    eu = n(813564),
    ec = n(102597),
    ed = n(904054),
    eh = n(147472);
n(321073);
var em = n(964486),
    ef = n(931991),
    ep = n(734057),
    eg = n(71393),
    ex = n(576705),
    eA = n(309010),
    eC = n(473145),
    eE = n(945810);
let eI = (0, eE.mj)({
    kind: "user",
    name: "2026-06-soundboard-frequently-used",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ey = n(636537),
    eS = n(228366),
    ev = n(463347),
    eN = n(125831);
let e_ = (0, eE.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
(0, eE.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds-mobile",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
var ej = n(652215),
    eT = n(805143),
    eb = n(935208);
function eR(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => eb.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eO = n(980504),
    eM = n(202541);
function eL(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: eo.uq.SOUND, sound: e, index: t }));
}
function ek(e) {
    let { sections: t, guildIds: n, allSounds: l, potentialSoundIdsForSection: i, sectionType: s, sortSoundsFn: r } = e,
        a = {};
    for (let e of [...n, "0"])
        for (let t of l.get(e) ?? []) null != i.find((e) => e === t.soundId) && (a[t.soundId] = t);
    let o = [];
    for (let e of i) {
        let t = a[e];
        null != t && o.push(t);
    }
    let u = eL(o, r);
    u.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: u });
}
function ew(e, t, n) {
    let { allSounds: l, topSoundIds: i } = n,
        s = {};
    for (let e of l.get(t.id) ?? []) s[e.soundId] = e;
    let r = [];
    for (let e of i) {
        let t = s[e];
        null != t && r.push(t);
    }
    0 !== r.length &&
        e.push({ key: eo.Cx.TOP_SOUNDS, categoryInfo: { type: eo.Cx.TOP_SOUNDS, guild: t }, items: eL(r) });
}
function eP(e, t) {
    let n = t.get("0") ?? eO.pD;
    e.push({ key: eo.Cx.DEFAULTS, categoryInfo: { type: eo.Cx.DEFAULTS }, items: eL(n, eR) });
}
var eD = n(837381),
    eU = n(866665),
    eG = n(88218),
    eV = n(407698),
    eF = n(698279),
    eH = n(375708),
    eB = n(120052);
let eW = [8, 8, 8, 8],
    eK = "soundboard_guild_",
    { itemIdForIndex: ez } = (0, eG.J)(eK);
function eZ(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: s } = e;
    return (0, l.jsx)(S.D, {
        ...s,
        onClick: i,
        className: r()(eB.Yl, { [eB.wH]: n }),
        children: (0, l.jsx)(t, { className: eB.xi, color: "currentColor" }),
    });
}
function eY(e, t, n, i, s) {
    switch (e.categoryInfo.type) {
        case eo.Cx.FAVORITES:
            return (0, l.jsx)(eZ, { icon: A.StarIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eo.Cx.FREQUENTLY_USED:
            return (0, l.jsx)(eZ, { icon: C.ClockIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eo.Cx.GUILD:
            return (0, l.jsx)(
                S.D,
                {
                    ...i,
                    className: eB.L1,
                    onClick: t,
                    children: (0, l.jsx)(M.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case eo.Cx.DEFAULTS:
            return (0, l.jsx)(eZ, { icon: E.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eo.Cx.TOP_SOUNDS:
            return (0, l.jsx)(eZ, { icon: y.TrophyIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function eq(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: s, isNitroLocked: r } = e,
        a = (0, eD.rm)(ez(n));
    return t.categoryInfo.type === eo.Cx.GUILD
        ? (0, l.jsx)(eV.Q, { guild: t.categoryInfo.guild, children: eY(t, i, s, a, r) })
        : (0, l.jsx)(eU.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case eo.Cx.FAVORITES:
                          return eH.intl.string(eH.t.k8fFjp);
                      case eo.Cx.FREQUENTLY_USED:
                          return eH.intl.string(eH.t["+cGVV6"]);
                      case eo.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case eo.Cx.DEFAULTS:
                          return eH.intl.string(eH.t.Rtvk9X);
                      case eo.Cx.TOP_SOUNDS:
                          return eH.intl.formatToPlainString(eH.t.GXs41w, { guildName: e.categoryInfo.guild.name });
                  }
              })(t),
              position: "right",
              align: "center",
              children: eY(t, i, s, a, r),
          });
}
function eJ(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: a = eW,
            guildId: o,
            inExpressionPicker: u,
        } = e,
        c = i.useRef(null),
        d = (0, x.bG)([ei.default], () => ei.default.getCurrentUser()),
        h = (0, D.TW)(d, eM.PremiumTypes.TIER_2),
        m = i.useCallback(
            (e, t, n, i) => {
                let r = s && tg(e.categoryInfo, h, o);
                return (0, l.jsx)(eq, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        ea.default.track(ej.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: ej.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eF.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n();
                    },
                    isSelected: i,
                    isNitroLocked: r,
                });
            },
            [o, s, h],
        );
    return (0, l.jsx)(eG.A, {
        className: r()(u ? eB.HZ : eB.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: L.LW,
        categories: n,
        listPadding: a,
        renderCategoryListItem: m,
        rowCount: n.length,
        categoryHeight: 40,
        navId: "soundboard-picker-categories",
        itemIdPrefix: eK,
    });
}
var e$ = n(554146),
    eX = n(191023),
    eQ = n(192308),
    e0 = n(28863),
    e1 = n(695366),
    e2 = n(834730),
    e3 = n(789645),
    e8 = n(565645),
    e7 = n(775602),
    e5 = n(826673),
    e6 = n(182922),
    e4 = n(532624),
    e9 = n(531685),
    te = n(723702),
    tt = n(350535),
    tn = n(115023);
function tl(e) {
    let { soundboardSound: t, closePicker: i } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        r = (0, h.bG)([p.A], () => null != t && p.A.isFavoriteSound(t.soundId)),
        a = (0, h.bG)([eg.A], () => eg.A.getGuild(t?.guildId)),
        o = (0, h.bG)([e7.Ay], () => e7.Ay.useReducedMotion, []),
        u = (0, h.bG)([e9.A], () => e9.A.isFocused()),
        c = (0, h.bG)([e4.Ay], () => e4.Ay.getKeybindForAction(ej.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, l.jsx)(e6.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(e8.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: tn.Zg })
                    : (0, l.jsx)(eX.ImageIcon, { size: "md", color: "currentColor", className: tn.Zg }),
            graphicSecondary: null != a ? (0, l.jsx)(M.A, { guild: a, shouldAnimate: !o && u }) : null,
            titlePrimary: t.name,
            titleSecondary: a?.name,
            isFavorite: r,
        });
    function m() {
        i(),
            (0, eQ.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("161411"),
                    n.e("498640"),
                    n.e("846327"),
                    n.e("912618"),
                ]).then(n.bind(n, 29681));
                return (t) => (0, l.jsx)(e, { ...t });
            });
    }
    let f = (0, e5.k8)(e$.M.SOUNDBOARD_KEYBIND_TIP),
        g =
            null != c && (0, te.isWindows)() && !f
                ? eH.intl.format(eH.t.udMTth, {
                      keybind: (0, tt.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(e0.Anchor, { onClick: m, children: e }, t),
                  })
                : null;
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: tn.g,
              children: [
                  (0, l.jsx)(e1.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: tn.QW }),
                  (0, l.jsx)(e2.E, { variant: "text-sm/medium", color: "text-default", className: tn.L5, children: g }),
                  (0, l.jsx)(S.D, {
                      className: tn.b,
                      onClick: function () {
                          return (0, e5.Dr)(e$.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, l.jsx)(e3.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var ti = n(805945),
    ts = n(890856),
    tr = n(307301),
    ta = n(468689);
function to(e) {
    ta.A.open(e, ej.BEX.SOUNDBOARD),
        (0, eQ.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("860350"),
                n.e("207998"),
                n.e("341659"),
                n.e("376991"),
                n.e("67491"),
                n.e("308555"),
                n.e("883952"),
                n.e("220287"),
                n.e("66580"),
                n.e("808979"),
                n.e("420643"),
                n.e("974049"),
                n.e("280559"),
                n.e("669006"),
                n.e("98913"),
                n.e("612811"),
            ]).then(n.bind(n, 191110));
            return (n) => (0, l.jsx)(t, { ...n, guildId: e });
        });
}
var tu = n(948611),
    tc = n(308078);
function td(e) {
    let { guild: t, focused: n, onSelectItem: i, ...s } = e,
        { canCreateExpressions: a } = (0, ef.nr)(t);
    return (0, l.jsx)(eU.m, {
        text: eH.intl.string(eH.t["fHo+z1"]),
        shouldShow: !a,
        children: (0, l.jsx)("li", {
            className: tu.H,
            children: (0, l.jsxs)(ts.s, {
                ...s,
                "aria-label": eH.intl.formatToPlainString(eH.t.c1qVYh, { guildName: t.name }),
                className: r()(tc.n4, { [tc.in]: n, [tc.r9]: !a }),
                onClick: () => (null != i ? i() : to(t.id)),
                children: [
                    (0, l.jsx)(tr.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(e2.E, {
                        variant: "text-xs/semibold",
                        color: a ? "currentColor" : "text-muted",
                        children: eH.intl.string(eH.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function th(e) {
    let {
            descriptor: t,
            soundButtonProps: n,
            rowIndex: l,
            columnIndex: s,
            isUsingKeyboardNavigation: r,
            suppressPlaySound: a,
            getItemProps: o,
            onSelectItem: u,
            onItemMouseEnter: c,
            buttonOverlay: d,
            isNitroLocked: h,
            showLockForDisabledSound: m,
            inExpressionPicker: f,
        } = e,
        p = L.LW.useStore((e) => e.inspectedExpressionPosition),
        g = `${l}-${s}`,
        x = r && p.rowIndex === l && p.columnIndex === s;
    switch (t.item.type) {
        case eo.uq.SOUND:
            return (0, i.createElement)(ti.Ay, {
                ...o(s),
                ...n,
                key: g,
                sound: t.item.sound,
                suppressPlaySound: a,
                focused: x,
                onMouseEnter: () => c(s),
                onSelectItem: (e) => u(t, e),
                enableSecondaryActions: !0,
                buttonOverlay: d,
                inNitroLockedSection: h,
                showLockForDisabledSound: m,
                isSoundmoji: !0 === f,
            });
        case eo.uq.ADD_SOUND:
            return (0, i.createElement)(td, {
                ...o(s),
                key: g,
                guild: t.item.guild,
                focused: x,
                onSelectItem: () => u(t),
            });
    }
}
var tm = n(635799);
let tf = 32 + X.kg - 8,
    tp = {
        [eo.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [eo.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [eo.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [eo.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
        [eo.Cx.FREQUENTLY_USED]: u.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
        [eo.Cx.TOP_SOUNDS]: u.A.SOUNDBOARD_TOP_SOUNDS_SECTION,
    };
function tg(e, t, n) {
    return (null == n && e.type === eo.Cx.GUILD && !t) || (e.type === eo.Cx.GUILD && e.guild.id !== n && !t);
}
function tx(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, isSectionNitroLocked: s, showNitroDivider: a } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a && (0, l.jsx)(X.Ay, { className: tm.yH }),
            (0, l.jsx)("div", {
                className: r()(tm.hd, { [tm.Jb]: s, [tm.VD]: s }),
                children: (0, l.jsx)(S.D, {
                    className: tm.bV,
                    onClick: i,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: tm.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case eo.Cx.FAVORITES:
                                        return (0, l.jsx)(A.StarIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tm.nr,
                                        });
                                    case eo.Cx.FREQUENTLY_USED:
                                        return (0, l.jsx)(C.ClockIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tm.nr,
                                        });
                                    case eo.Cx.GUILD:
                                        return (0, l.jsx)(M.A, { guild: t.guild, height: 16, width: 16 });
                                    case eo.Cx.DEFAULTS:
                                        return (0, l.jsx)(E.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: tm.nr,
                                        });
                                    case eo.Cx.SEARCH:
                                        return (0, l.jsx)(I.MagnifyingGlassIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tm.nr,
                                        });
                                    case eo.Cx.TOP_SOUNDS:
                                        return (0, l.jsx)(y.TrophyIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tm.nr,
                                        });
                                }
                            })(),
                            (0, l.jsx)(v.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: tm.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case eo.Cx.FAVORITES:
                                            return eH.intl.string(eH.t.k8fFjp);
                                        case eo.Cx.FREQUENTLY_USED:
                                            return eH.intl.string(eH.t["+cGVV6"]);
                                        case eo.Cx.GUILD:
                                            return t.guild.name;
                                        case eo.Cx.DEFAULTS:
                                            return eH.intl.string(eH.t.Rtvk9X);
                                        case eo.Cx.SEARCH:
                                            return eH.intl.string(eH.t["zkoeq/"]);
                                        case eo.Cx.TOP_SOUNDS:
                                            return eH.intl.formatToPlainString(eH.t.GXs41w, {
                                                guildName: t.guild.name,
                                            });
                                    }
                                })(),
                            }),
                            (0, l.jsx)(er.A, {
                                className: tm.nr,
                                direction: n ? er.A.Directions.RIGHT : er.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function tA() {
    return (0, l.jsx)(T.A, { message: eH.intl.string(eH.t.bgDdNK) });
}
function tC(e) {
    let { className: t } = e,
        n = (0, x.bG)([p.A], () => p.A.isSoundboardVolumeMuted()) ? N._ : _.H;
    return (0, l.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function tE(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: a,
            onClose: o,
            onSelect: h,
            shouldValidateSelectedSound: m = !1,
            suppressPlaySound: f = !1,
            shouldShowLockedSounds: A = !0,
            gridNotice: C,
            soundButtonOverlay: E,
            listPadding: I,
            renderHeader: y,
            defaultSoundsOnly: v = !1,
            inExpressionPicker: N,
            analyticsSource: T,
        } = e,
        { audioRef: M } = i.useContext(et.A),
        { analyticsLocations: k } = (0, c.Ay)(),
        { analyticsLocations: w } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: P } = (0, b.p)(),
        U = i.useMemo(() => ({ ...P, section: ej.JJy.SOUNDBOARD_SOUND_PICKER }), [P]),
        [G, V] = i.useState(null),
        F = (0, x.bG)([ei.default], () => ei.default.getCurrentUser()),
        H = (0, D.TW)(F, eM.PremiumTypes.TIER_2),
        B = (0, x.bG)([es.A], () => es.A.getVoiceState(t, F?.id ?? ej.dJq)),
        W = B?.selfDeaf || B?.mute || B?.suppress,
        K = (0, d.RQ)((e) => e.searchQuery),
        z = null != K && "" !== K,
        Z = (0, O.GV)(),
        {
            categories: X,
            availableSounds: er,
            soundCounts: eE,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = (0, x.bG)([ei.default], () => ei.default.getCurrentUser()),
                s = D.Ay.isPremium(l, eM.PremiumTypes.TIER_2),
                [r, a, o, u] = (0, x.yK)([p.A], () => [
                    p.A.getSounds(),
                    p.A.getFavorites(),
                    p.A.getFrequentlyUsedSoundIds(),
                    p.A.isFetching(),
                ]),
                c = (0, eT.Y)(e, !1),
                d = (0, x.yK)([eg.A], () => {
                    let e = [];
                    return (
                        c.forEach((t) => {
                            let n = eg.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                h = D.Ay.canUseSoundboardEverywhere(l),
                m = (0, x.bG)([eg.A], () => eg.A.getGuild(e?.guild_id)),
                f = (0, x.bG)([ex.A], () => {
                    let { canCreateExpressions: e } = (0, ef.ie)(m);
                    return e;
                }, [m]),
                g = i.useMemo(() => o.filter((e) => !a.has(e)).slice(0, 3), [o, a]),
                A =
                    eI.useConfig({ location: g.length > 0 ? "useSoundGrid" : "useSoundGridNoFrequentlyUsed" })
                        .enabled || !0,
                C = (0, x.bG)([eA.Ay, ep.A, eg.A], () => {
                    let e = eA.Ay.getVoiceChannelId(),
                        t = null != e ? ep.A.getChannel(e) : null;
                    return t?.guild_id != null ? eg.A.getGuild(t.guild_id) : void 0;
                }),
                { enabled: E, topSoundsFirst: I } = e_.getConfig({ location: "useSoundGrid" });
            (0, em.Ay)(() => {
                E &&
                    (function (e) {
                        var t;
                        if (
                            null == e ||
                            null == ei.default.getCurrentUser() ||
                            !e_.getConfig({ location: "maybeFetchTopSoundboardSoundsByGuild" }).enabled
                        )
                            return;
                        let n = p.A.getTopSoundboardSoundsMetadata(e);
                        if (null != n) {
                            let { topSoundsTTL: e } = n;
                            if (null == e || Date.now() < e) return;
                        }
                        eN.A.getIsFetching(e) ||
                            ((t = e),
                            (0, ev.tZ)(t) ||
                                (eS.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: t }),
                                ey.Bo.get({
                                    url: ej.Rsh.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(t),
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                }).then(
                                    (e) =>
                                        eS.h.dispatch({
                                            type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS",
                                            guildId: t,
                                            topSoundsMetadata: e.body.items
                                                .map((e) => ({ soundId: e.sound_id, rank: e.sound_rank }))
                                                .sort((e, t) => e.rank - t.rank),
                                        }),
                                    () => eS.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId: t }),
                                )));
                    })(C?.id);
            });
            let y = (0, x.yK)([p.A], () => p.A.getTopSoundboardSoundIds(C?.id)),
                S = i.useMemo(() => y.slice(0, 3), [y]);
            return i.useMemo(() => {
                let e = 0,
                    l = 0,
                    i = [];
                return n
                    ? (eP(i, r),
                      {
                          categories: i,
                          availableSounds: r.get("0") ?? eO.pD,
                          isFetching: u,
                          soundCounts: {
                              favoriteSoundCount: 0,
                              unlockedCustomSoundCount: 0,
                              lockedCustomSoundCount: 0,
                          },
                      })
                    : (E && null != C && I && ew(i, C, { allSounds: r, topSoundIds: S }),
                      ek({
                          sections: i,
                          guildIds: c,
                          allSounds: r,
                          potentialSoundIdsForSection: Array.from(a),
                          sectionType: eo.Cx.FAVORITES,
                          sortSoundsFn: eR,
                      }),
                      A &&
                          g.length > 0 &&
                          ek({
                              sections: i,
                              guildIds: c,
                              allSounds: r,
                              potentialSoundIdsForSection: g,
                              sectionType: eo.Cx.FREQUENTLY_USED,
                          }),
                      E && null != C && !I && ew(i, C, { allSounds: r, topSoundIds: S }),
                      void 0 !== m &&
                          (function (e, t, n) {
                              let {
                                      currentGuildHasAddPermissions: l,
                                      allSounds: i,
                                      filterOutEmptyCurrentGuild: s,
                                      sortSoundsFn: r,
                                  } = n,
                                  a = i.get(t.id) ?? [],
                                  o = eL(a, r),
                                  u = a.length < (0, eC.fA)(t) && l,
                                  c = 0 === o.length;
                              (u || c) && !s && o.push({ type: eo.uq.ADD_SOUND, guild: t }),
                                  (s && c) ||
                                      e.push({
                                          categoryInfo: { type: eo.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: o,
                                      });
                          })(i, m, {
                              currentGuildHasAddPermissions: f,
                              allSounds: r,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: eR,
                          }),
                      h || eP(i, r),
                      !(function (e) {
                          let {
                              sections: t,
                              guilds: n,
                              currentGuildId: l,
                              allSounds: i,
                              hasNitro: s,
                              sortSoundsFn: r,
                          } = e;
                          for (let e of n) {
                              if (e.id === l) continue;
                              let n = eL(i.get(e.id) ?? [], r);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: eo.Cx.GUILD, guild: e, isNitroLocked: !s },
                                      key: e.id,
                                      items: n,
                                  });
                          }
                      })({
                          sections: i,
                          guilds: d,
                          currentGuildId: m?.id,
                          allSounds: r,
                          hasNitro: s,
                          sortSoundsFn: eR,
                      }),
                      h && eP(i, r),
                      i.forEach((t) => {
                          t.categoryInfo.type === eo.Cx.GUILD &&
                              (t.categoryInfo.isNitroLocked ? (l += t.items.length) : (e += t.items.length));
                      }),
                      {
                          categories: i,
                          availableSounds: Array.from(r.values()).flat(),
                          isFetching: u,
                          soundCounts: {
                              favoriteSoundCount: a.size,
                              unlockedCustomSoundCount: e,
                              lockedCustomSoundCount: l,
                          },
                      });
            }, [c, r, a, A, m, f, t, h, d, n, u, s, eR, g, C, S, E, I]);
        })(s, void 0, v),
        [eb, eD] = i.useState([]),
        eU = i.useMemo(
            () => (K.length > 0 ? [{ key: eo.Cx.SEARCH, categoryInfo: { type: eo.Cx.SEARCH }, items: eL(eb) }] : X),
            [X, K.length, eb],
        ),
        eG = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eV = i.useMemo(() => eU.filter((e) => e.items.length > 0), [eU]),
        eB = i.useMemo(
            () => eV.findLastIndex((e) => !!(0, D.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eV],
        ),
        eW = !H && A && -1 !== eB,
        eK = !H && A && -1 !== eB,
        ez = en.b0.useSetting(),
        eZ = i.useMemo(() => new Set(ez), [ez]),
        eY = null == s,
        eq = D.Ay.canUseCustomCallSounds(F),
        e$ = i.useCallback(
            (e) => {
                eZ.has(e) ? eZ.delete(e) : eZ.add(e), en.b0.updateSetting(Array.from(eZ));
            },
            [eZ],
        ),
        eX = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, eu.Ir)(F, e, s, !1);
                if (null != h && m && i) h(e, n);
                else if (!f && i && (0, eu.Au)(s))
                    (0, eu.Ak)(e, s?.id ?? ej.dJq, t, l),
                        z &&
                            ea.default.track(ej.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: ej.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: K,
                                location_stack: t,
                            });
                else {
                    if ((0, eu.Ir)(F, e, s)) return;
                    A && V(e);
                }
            },
            [f, F, s, A, z, K, h, m],
        ),
        eQ = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case eo.uq.SOUND:
                        let n = tp[e?.category] ?? null,
                            l = e?.item.index;
                        return eX(e.item.sound, null == n ? k : [...k, n], t?.shiftKey !== !0, l);
                    case eo.uq.ADD_SOUND:
                        return o(), to(e.item.guild.id);
                }
            },
            [k, eX, o],
        ),
        e0 = i.useCallback(
            (e, n, i, a, o) => {
                let u = eV[i.sectionIndex],
                    c = A && tg(u.categoryInfo, H, t) && eW;
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        className: r()(tm.a, { [tm.uL]: c }),
                        children: e.map((e, t) =>
                            (0, l.jsx)(
                                th,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eY ? eq : !W,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: k,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: f,
                                    getItemProps: a,
                                    onSelectItem: eQ,
                                    onItemMouseEnter: o,
                                    buttonOverlay: E,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: A,
                                    inExpressionPicker: N,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eV, A, H, t, f, eQ, s, eY, eq, W, k, E, eW, N],
        ),
        e1 = i.useCallback(
            (e, t) => {
                if (e <= 0 || !A) return !1;
                let n = eV[e],
                    l = eV[e - 1],
                    i = tg(n.categoryInfo, H, t),
                    s = tg(l.categoryInfo, H, t);
                return i && !s;
            },
            [eV, A, H],
        ),
        e2 = i.useCallback(() => {
            let e = p.A.getSoundById("3");
            null != e && V(e);
        }, []),
        e3 = i.useCallback(() => {
            let e = (0, D.Dd)(eM.PremiumTypes.TIER_2);
            return eH.intl.format(eH.t["tw/SSq"], { nitroTierName: e, onClick: e2 });
        }, [e2]),
        e8 = i.useCallback((e) => (e1(e, t) ? tf : 32), [t, e1]),
        e7 = i.useCallback(
            (e) => {
                let t = e === eV.length - 1;
                return eK && t ? 70 : eW && e === eB ? 20 : 0;
            },
            [eV.length, eW, eK, eB],
        ),
        e5 = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
        e6 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = A && tg(e.categoryInfo, H, t),
                    r = e1(n, t),
                    a = eZ.has(i);
                return (0, l.jsx)(
                    tx,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            ea.default.track(ej.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: ej.liQ.SOUNDBOARD_POPOUT },
                                tab: eF.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !a,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                e$(i);
                        },
                        collapsed: a,
                        isSectionNitroLocked: s && eW,
                        showNitroDivider: r && eW,
                    },
                    `header-${i}`,
                );
            },
            [eZ, e$, t, e1, A, H, eW],
        ),
        e4 = i.useCallback(
            (e, t) => {
                let n = t === eV.length - 1,
                    i = t === eB;
                return eK && n
                    ? (0, l.jsx)("div", { className: r()(tm.Lk, { [tm.Ns]: i }) })
                    : eW && t === eB
                      ? (0, l.jsx)("div", { className: r()(tm.a3, { [tm.Ns]: i }) })
                      : null;
            },
            [eB, eW, eK, eV.length],
        ),
        e9 = i.useCallback((e) => eD((0, eh.lG)(e, er, F, s, k)), [s, F, er, k]),
        te = i.useCallback(
            (e) => {
                (0, j.L3)(e, async () => {
                    let { default: e } = await n.e("811562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: k, ...t });
                });
            },
            [k],
        ),
        tt = i.useCallback(
            () =>
                N
                    ? (0, l.jsx)(J.Gq, {
                          renderPopout: () => (0, l.jsx)(J.qn, {}),
                          tooltipText: eH.intl.string(eH.t["19lt24"]),
                          position: "top",
                          clickableClassName: r()(tm.Jm, tm.Zz),
                          children: (0, l.jsx)(_.H, { size: "md", color: "currentColor", className: tm.By }),
                      })
                    : (0, l.jsx)(S.D, {
                          tabIndex: 0,
                          className: tm.Jm,
                          onClick: te,
                          "aria-label": eH.intl.string(eH.t.kbFsAD),
                          children: (0, l.jsx)(tC, { className: tm.By }),
                      }),
            [N, te],
        ),
        tn = i.useCallback(
            (e) =>
                (0, l.jsx)(eJ, {
                    soundboardListRef: e,
                    categories: X,
                    shouldUpsellLockedCategories: eW,
                    listPadding: I,
                    guildId: t,
                    inExpressionPicker: N,
                }),
            [X, I, eW, t, N],
        ),
        ti = i.useCallback(() => {
            let e = (0, q.qD)();
            return (0, D.LE)(e, eM.pe.TIER_2) ?? eH.intl.string(eH.t.pj0XBN);
        }, []),
        ts = i.useCallback(
            () =>
                eK
                    ? (0, l.jsx)($.d, {
                          showUpsell: eG,
                          text: e3(),
                          button: ti(),
                          buttonAnalyticsObject: { section: ej.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, l.jsx)(Q.l, {
                              size: "sm",
                              className: tm.ij,
                              location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                              forceDarkTheme: !0,
                          }),
                      })
                    : null,
            [e3, ti, eK, eG],
        ),
        tr = i.useCallback(
            (e) =>
                e?.item.type === eo.uq.SOUND
                    ? (0, l.jsx)(tl, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        ta = i.useCallback(() => {
            let e = p.A.getSoundById("3"),
                t = new Audio((0, ec.A)("3"));
            null != M.current && M.current.pause(),
                (M.current = t),
                (t.currentTime = 0),
                (t.volume = (0, ed.A)(e?.volume ?? 1)),
                t.play();
        }, [M]),
        tu = (0, x.bG)([el.A], () => el.A.getMediaSessionId());
    return (
        (0, R.A)({
            type: g.ImpressionTypes.POPOUT,
            name: g.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: T,
                guild_id: t,
                media_session_id: tu,
                available_custom_sounds_count: eE.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eE.lockedCustomSoundCount,
                favorite_sounds_count: eE.favoriteSoundCount,
                type: eO.c4.FULL_PICKER,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != G
                    ? (0, l.jsx)(ee.A, {
                          title: eH.intl.string(N ? eH.t.rZEEvU : eH.t.jGDYF0),
                          description: eH.intl.string(N ? eH.t.ZPNG5A : eH.t["grL/hg"]),
                          analyticsLocationSection: ej.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eM.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...U, object: ej.ZSU.SOUNDBOARD_SOUND },
                              location_stack: w,
                              sku_id: D.Ay.getSkuIdForPremiumType(eM.PremiumTypes.TIER_2),
                          },
                          onClose: () => V(null),
                          onUpsellClicked: o,
                          onDisplay: ta,
                      })
                    : void 0,
                (0, l.jsx)(Y, {
                    categories: eV,
                    collapsedCategories: eZ,
                    containerWidth: a,
                    store: L.LW,
                    onSelectItem: eQ,
                    onSearchExpressions: e9,
                    hasSearchResults: eb.length > 0,
                    defaultSearchPlaceholder: eH.intl.string(eH.t.sKt3xS),
                    renderRow: e0,
                    renderSectionHeader: e6,
                    renderSectionFooter: e4,
                    renderSection: e5,
                    renderCategoryList: tn,
                    renderHeaderAccessories: tt,
                    rowHeight: 48,
                    sectionHeaderHeight: e8,
                    sectionFooterHeight: e7,
                    itemNodeWidth: 150,
                    gridNavigatorId: Z,
                    renderEmptySearchState: tA,
                    renderInspector: tr,
                    gridNotice: C,
                    renderHeader: y,
                    renderUpsell: ts,
                }),
            ],
        })
    );
}
var tI = n(70317);
function ty(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: s,
            onClose: g,
            onSelect: x,
            analyticsSource: A,
            suppressPlaySound: C,
            shouldValidateSelectedSound: E,
            shouldShowLockedSounds: I = !0,
            gridNotice: y,
            inExpressionPicker: S,
            soundButtonOverlay: v,
            listPadding: N,
            renderHeader: _,
            defaultSoundsOnly: j,
        } = e,
        { fetching: T, maybeFetchData: b } = {
            fetching: (0, h.bG)([p.A], () => p.A.isFetchingAnySounds()),
            maybeFetchData: i.useCallback(() => {
                f.E7(), m.bW.loadIfNecessary();
            }, []),
        },
        { analyticsLocations: R } = (0, c.Ay)(u.A.SOUNDBOARD_POPOUT),
        O = S ? void 0 : { height: 520 };
    return (
        i.useEffect(() => {
            b();
        }, [b]),
        i.useEffect(() => {
            S || (0, d.Ri)("");
        }, [S]),
        (0, l.jsx)(c.f5, {
            value: R,
            children: (0, l.jsx)(a.l, {
                style: O,
                className: r()(tI.Nz, { [tI.Bg]: T, [tI.yV]: S }),
                children: T
                    ? (0, l.jsx)(o.y, {})
                    : (0, l.jsx)(tE, {
                          guildId: t,
                          channel: n,
                          onClose: g,
                          onSelect: x,
                          shouldValidateSelectedSound: E,
                          containerWidth: s,
                          suppressPlaySound: C,
                          shouldShowLockedSounds: I,
                          gridNotice: y,
                          soundButtonOverlay: v,
                          listPadding: N,
                          renderHeader: _,
                          defaultSoundsOnly: j,
                          inExpressionPicker: S,
                          analyticsSource: A,
                      }),
            }),
        })
    );
}
