"use strict";
n.d(t, { A: () => tC });
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
    N = n(297264),
    v = n(358618),
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
            N = (0, d.RQ)((e) => e.searchQuery),
            v = s.useStore((e) => e.activeCategoryIndex),
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
                activeCategoryIndex: v,
                isScrolling: y,
                listRef: S,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: N,
            }),
            T = i.useCallback(
                (e) => {
                    j(e),
                        F({
                            listRef: S,
                            searchQuery: N,
                            nitroLockedSectionStates: _,
                            scrollTop: e,
                            sectionHeaderHeight: A,
                            sectionFooterHeight: C,
                        }),
                        I?.(e);
                },
                [j, N, _, A, C, I],
            );
        return (
            i.useEffect(() => {
                null != S.current && T(S.current.getScrollerNode()?.scrollTop ?? 0);
            }, [T, S]),
            (0, k.FV)({ searchQuery: N, activeCategoryIndex: v, listRef: S }),
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
                    N.length > 0 && !r && null != f
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
            sectionHeaderHeight: N,
            sectionFooterHeight: v,
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
                                            sectionHeaderHeight: N,
                                            sectionFooterHeight: v,
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
    et = n(885386),
    en = n(763827),
    el = n(287809),
    ei = n(977997),
    es = n(147925),
    er = n(174459),
    ea = n(807348),
    eo = n(813564),
    eu = n(147472);
n(321073);
var ec = n(964486),
    ed = n(931991),
    eh = n(734057),
    em = n(71393),
    ef = n(576705),
    ep = n(309010),
    eg = n(473145),
    ex = n(945810);
let eA = (0, ex.mj)({
    kind: "user",
    name: "2026-06-soundboard-frequently-used",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eC = n(636537),
    eE = n(228366),
    eI = n(463347),
    ey = n(125831);
let eS = (0, ex.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
(0, ex.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds-mobile",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
var eN = n(652215),
    ev = n(805143),
    e_ = n(935208);
function ej(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => e_.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eT = n(980504),
    eb = n(202541);
function eR(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: ea.uq.SOUND, sound: e, index: t }));
}
function eO(e) {
    let { sections: t, guildIds: n, allSounds: l, potentialSoundIdsForSection: i, sectionType: s, sortSoundsFn: r } = e,
        a = {};
    for (let e of [...n, "0"])
        for (let t of l.get(e) ?? []) null != i.find((e) => e === t.soundId) && (a[t.soundId] = t);
    let o = [];
    for (let e of i) {
        let t = a[e];
        null != t && o.push(t);
    }
    let u = eR(o, r);
    u.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: u });
}
function eM(e, t, n) {
    let { allSounds: l, topSoundIds: i } = n,
        s = {};
    for (let e of l.get(t.id) ?? []) s[e.soundId] = e;
    let r = [];
    for (let e of i) {
        let t = s[e];
        null != t && r.push(t);
    }
    0 !== r.length &&
        e.push({ key: ea.Cx.TOP_SOUNDS, categoryInfo: { type: ea.Cx.TOP_SOUNDS, guild: t }, items: eR(r) });
}
function eL(e, t) {
    let n = t.get("0") ?? eT.pD;
    e.push({ key: ea.Cx.DEFAULTS, categoryInfo: { type: ea.Cx.DEFAULTS }, items: eR(n, ej) });
}
var ek = n(837381),
    ew = n(866665),
    eP = n(88218),
    eD = n(407698),
    eU = n(698279),
    eG = n(375708),
    eV = n(120052);
let eF = [8, 8, 8, 8],
    eH = "soundboard_guild_",
    { itemIdForIndex: eB } = (0, eP.J)(eH);
function eW(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: s } = e;
    return (0, l.jsx)(S.D, {
        ...s,
        onClick: i,
        className: r()(eV.Yl, { [eV.wH]: n }),
        children: (0, l.jsx)(t, { className: eV.xi, color: "currentColor" }),
    });
}
function eK(e, t, n, i, s) {
    switch (e.categoryInfo.type) {
        case ea.Cx.FAVORITES:
            return (0, l.jsx)(eW, { icon: A.StarIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ea.Cx.FREQUENTLY_USED:
            return (0, l.jsx)(eW, { icon: C.ClockIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ea.Cx.GUILD:
            return (0, l.jsx)(
                S.D,
                {
                    ...i,
                    className: eV.L1,
                    onClick: t,
                    children: (0, l.jsx)(M.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case ea.Cx.DEFAULTS:
            return (0, l.jsx)(eW, { icon: E.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ea.Cx.TOP_SOUNDS:
            return (0, l.jsx)(eW, { icon: y.TrophyIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function ez(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: s, isNitroLocked: r } = e,
        a = (0, ek.rm)(eB(n));
    return t.categoryInfo.type === ea.Cx.GUILD
        ? (0, l.jsx)(eD.Q, { guild: t.categoryInfo.guild, children: eK(t, i, s, a, r) })
        : (0, l.jsx)(ew.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case ea.Cx.FAVORITES:
                          return eG.intl.string(eG.t.k8fFjp);
                      case ea.Cx.FREQUENTLY_USED:
                          return eG.intl.string(eG.t["+cGVV6"]);
                      case ea.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case ea.Cx.DEFAULTS:
                          return eG.intl.string(eG.t.Rtvk9X);
                      case ea.Cx.TOP_SOUNDS:
                          return eG.intl.formatToPlainString(eG.t.GXs41w, { guildName: e.categoryInfo.guild.name });
                  }
              })(t),
              position: "right",
              align: "center",
              children: eK(t, i, s, a, r),
          });
}
function eZ(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: a = eF,
            guildId: o,
            inExpressionPicker: u,
        } = e,
        c = i.useRef(null),
        d = (0, x.bG)([el.default], () => el.default.getCurrentUser()),
        h = (0, D.TW)(d, eb.PremiumTypes.TIER_2),
        m = i.useCallback(
            (e, t, n, i) => {
                let r = s && tm(e.categoryInfo, h, o);
                return (0, l.jsx)(ez, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        er.default.track(eN.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eN.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eU.kx.SOUNDBOARD,
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
    return (0, l.jsx)(eP.A, {
        className: r()(u ? eV.HZ : eV.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: L.LW,
        categories: n,
        listPadding: a,
        renderCategoryListItem: m,
        rowCount: n.length,
        categoryHeight: 40,
        navId: "soundboard-picker-categories",
        itemIdPrefix: eH,
    });
}
var eY = n(554146),
    eq = n(191023),
    eJ = n(192308),
    e$ = n(28863),
    eX = n(695366),
    eQ = n(834730),
    e0 = n(789645),
    e1 = n(565645),
    e2 = n(775602),
    e3 = n(826673),
    e8 = n(182922),
    e7 = n(532624),
    e6 = n(531685),
    e5 = n(723702),
    e4 = n(350535),
    e9 = n(115023);
function te(e) {
    let { soundboardSound: t, closePicker: i } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        r = (0, h.bG)([p.A], () => null != t && p.A.isFavoriteSound(t.soundId)),
        a = (0, h.bG)([em.A], () => em.A.getGuild(t?.guildId)),
        o = (0, h.bG)([e2.Ay], () => e2.Ay.useReducedMotion, []),
        u = (0, h.bG)([e6.A], () => e6.A.isFocused()),
        c = (0, h.bG)([e7.Ay], () => e7.Ay.getKeybindForAction(eN.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, l.jsx)(e8.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(e1.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: e9.Zg })
                    : (0, l.jsx)(eq.ImageIcon, { size: "md", color: "currentColor", className: e9.Zg }),
            graphicSecondary: null != a ? (0, l.jsx)(M.A, { guild: a, shouldAnimate: !o && u }) : null,
            titlePrimary: t.name,
            titleSecondary: a?.name,
            isFavorite: r,
        });
    function m() {
        i(),
            (0, eJ.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("161411"),
                    n.e("498640"),
                    n.e("846327"),
                    n.e("912618"),
                ]).then(n.bind(n, 29681));
                return (t) => (0, l.jsx)(e, { ...t });
            });
    }
    let f = (0, e3.k8)(eY.M.SOUNDBOARD_KEYBIND_TIP),
        g =
            null != c && (0, e5.isWindows)() && !f
                ? eG.intl.format(eG.t.udMTth, {
                      keybind: (0, e4.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(e$.Anchor, { onClick: m, children: e }, t),
                  })
                : null;
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: e9.g,
              children: [
                  (0, l.jsx)(eX.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: e9.QW }),
                  (0, l.jsx)(eQ.E, { variant: "text-sm/medium", color: "text-default", className: e9.L5, children: g }),
                  (0, l.jsx)(S.D, {
                      className: e9.b,
                      onClick: function () {
                          return (0, e3.Dr)(eY.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, l.jsx)(e0.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var tt = n(805945),
    tn = n(890856),
    tl = n(307301),
    ti = n(468689);
function ts(e) {
    ti.A.open(e, eN.BEX.SOUNDBOARD),
        (0, eJ.openModalLazy)(async () => {
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
var tr = n(948611),
    ta = n(308078);
function to(e) {
    let { guild: t, focused: n, onSelectItem: i, ...s } = e,
        { canCreateExpressions: a } = (0, ed.nr)(t);
    return (0, l.jsx)(ew.m, {
        text: eG.intl.string(eG.t["fHo+z1"]),
        shouldShow: !a,
        children: (0, l.jsx)("li", {
            className: tr.H,
            children: (0, l.jsxs)(tn.s, {
                ...s,
                "aria-label": eG.intl.formatToPlainString(eG.t.c1qVYh, { guildName: t.name }),
                className: r()(ta.n4, { [ta.in]: n, [ta.r9]: !a }),
                onClick: () => (null != i ? i() : ts(t.id)),
                children: [
                    (0, l.jsx)(tl.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(eQ.E, {
                        variant: "text-xs/semibold",
                        color: a ? "currentColor" : "text-muted",
                        children: eG.intl.string(eG.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function tu(e) {
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
        case ea.uq.SOUND:
            return (0, i.createElement)(tt.Ay, {
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
        case ea.uq.ADD_SOUND:
            return (0, i.createElement)(to, {
                ...o(s),
                key: g,
                guild: t.item.guild,
                focused: x,
                onSelectItem: () => u(t),
            });
    }
}
var tc = n(635799);
let td = 32 + X.kg - 8,
    th = {
        [ea.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [ea.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [ea.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [ea.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
        [ea.Cx.FREQUENTLY_USED]: u.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
        [ea.Cx.TOP_SOUNDS]: u.A.SOUNDBOARD_TOP_SOUNDS_SECTION,
    };
function tm(e, t, n) {
    return (null == n && e.type === ea.Cx.GUILD && !t) || (e.type === ea.Cx.GUILD && e.guild.id !== n && !t);
}
function tf(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, isSectionNitroLocked: s, showNitroDivider: a } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a && (0, l.jsx)(X.Ay, { className: tc.yH }),
            (0, l.jsx)("div", {
                className: r()(tc.hd, { [tc.Jb]: s, [tc.VD]: s }),
                children: (0, l.jsx)(S.D, {
                    className: tc.bV,
                    onClick: i,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: tc.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case ea.Cx.FAVORITES:
                                        return (0, l.jsx)(A.StarIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tc.nr,
                                        });
                                    case ea.Cx.FREQUENTLY_USED:
                                        return (0, l.jsx)(C.ClockIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tc.nr,
                                        });
                                    case ea.Cx.GUILD:
                                        return (0, l.jsx)(M.A, { guild: t.guild, height: 16, width: 16 });
                                    case ea.Cx.DEFAULTS:
                                        return (0, l.jsx)(E.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: tc.nr,
                                        });
                                    case ea.Cx.SEARCH:
                                        return (0, l.jsx)(I.MagnifyingGlassIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tc.nr,
                                        });
                                    case ea.Cx.TOP_SOUNDS:
                                        return (0, l.jsx)(y.TrophyIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tc.nr,
                                        });
                                }
                            })(),
                            (0, l.jsx)(N.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: tc.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case ea.Cx.FAVORITES:
                                            return eG.intl.string(eG.t.k8fFjp);
                                        case ea.Cx.FREQUENTLY_USED:
                                            return eG.intl.string(eG.t["+cGVV6"]);
                                        case ea.Cx.GUILD:
                                            return t.guild.name;
                                        case ea.Cx.DEFAULTS:
                                            return eG.intl.string(eG.t.Rtvk9X);
                                        case ea.Cx.SEARCH:
                                            return eG.intl.string(eG.t["zkoeq/"]);
                                        case ea.Cx.TOP_SOUNDS:
                                            return eG.intl.formatToPlainString(eG.t.GXs41w, {
                                                guildName: t.guild.name,
                                            });
                                    }
                                })(),
                            }),
                            (0, l.jsx)(es.A, {
                                className: tc.nr,
                                direction: n ? es.A.Directions.RIGHT : es.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function tp() {
    return (0, l.jsx)(T.A, { message: eG.intl.string(eG.t.bgDdNK) });
}
function tg(e) {
    let { className: t } = e,
        n = (0, x.bG)([p.A], () => p.A.isSoundboardVolumeMuted()) ? v._ : _.H;
    return (0, l.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function tx(e) {
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
            defaultSoundsOnly: N = !1,
            inExpressionPicker: v,
            analyticsSource: T,
        } = e,
        { analyticsLocations: M } = (0, c.Ay)(),
        { analyticsLocations: k } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: w } = (0, b.p)(),
        P = i.useMemo(() => ({ ...w, section: eN.JJy.SOUNDBOARD_SOUND_PICKER }), [w]),
        [U, G] = i.useState(null),
        V = (0, x.bG)([el.default], () => el.default.getCurrentUser()),
        F = (0, D.TW)(V, eb.PremiumTypes.TIER_2),
        H = (0, x.bG)([ei.A], () => ei.A.getVoiceState(t, V?.id ?? eN.dJq)),
        B = H?.selfDeaf || H?.mute || H?.suppress,
        W = (0, d.RQ)((e) => e.searchQuery),
        K = null != W && "" !== W,
        z = (0, O.GV)(),
        {
            categories: Z,
            availableSounds: X,
            soundCounts: es,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = (0, x.bG)([el.default], () => el.default.getCurrentUser()),
                s = D.Ay.isPremium(l, eb.PremiumTypes.TIER_2),
                [r, a, o, u] = (0, x.yK)([p.A], () => [
                    p.A.getSounds(),
                    p.A.getFavorites(),
                    p.A.getFrequentlyUsedSoundIds(),
                    p.A.isFetching(),
                ]),
                c = (0, ev.Y)(e, !1),
                d = (0, x.yK)([em.A], () => {
                    let e = [];
                    return (
                        c.forEach((t) => {
                            let n = em.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                h = D.Ay.canUseSoundboardEverywhere(l),
                m = (0, x.bG)([em.A], () => em.A.getGuild(e?.guild_id)),
                f = (0, x.bG)([ef.A], () => {
                    let { canCreateExpressions: e } = (0, ed.ie)(m);
                    return e;
                }, [m]),
                g = i.useMemo(() => o.filter((e) => !a.has(e)).slice(0, 3), [o, a]),
                A =
                    eA.useConfig({ location: g.length > 0 ? "useSoundGrid" : "useSoundGridNoFrequentlyUsed" })
                        .enabled || !0,
                C = (0, x.bG)([ep.Ay, eh.A, em.A], () => {
                    let e = ep.Ay.getVoiceChannelId(),
                        t = null != e ? eh.A.getChannel(e) : null;
                    return t?.guild_id != null ? em.A.getGuild(t.guild_id) : void 0;
                }),
                { enabled: E, topSoundsFirst: I } = eS.getConfig({ location: "useSoundGrid" });
            (0, ec.Ay)(() => {
                E &&
                    (function (e) {
                        var t;
                        if (
                            null == e ||
                            null == el.default.getCurrentUser() ||
                            !eS.getConfig({ location: "maybeFetchTopSoundboardSoundsByGuild" }).enabled
                        )
                            return;
                        let n = p.A.getTopSoundboardSoundsMetadata(e);
                        if (null != n) {
                            let { topSoundsTTL: e } = n;
                            if (null == e || Date.now() < e) return;
                        }
                        ey.A.getIsFetching(e) ||
                            ((t = e),
                            (0, eI.tZ)(t) ||
                                (eE.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: t }),
                                eC.Bo.get({
                                    url: eN.Rsh.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(t),
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                }).then(
                                    (e) =>
                                        eE.h.dispatch({
                                            type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS",
                                            guildId: t,
                                            topSoundsMetadata: e.body.items
                                                .map((e) => ({ soundId: e.sound_id, rank: e.sound_rank }))
                                                .sort((e, t) => e.rank - t.rank),
                                        }),
                                    () => eE.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId: t }),
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
                    ? (eL(i, r),
                      {
                          categories: i,
                          availableSounds: r.get("0") ?? eT.pD,
                          isFetching: u,
                          soundCounts: {
                              favoriteSoundCount: 0,
                              unlockedCustomSoundCount: 0,
                              lockedCustomSoundCount: 0,
                          },
                      })
                    : (E && null != C && I && eM(i, C, { allSounds: r, topSoundIds: S }),
                      eO({
                          sections: i,
                          guildIds: c,
                          allSounds: r,
                          potentialSoundIdsForSection: Array.from(a),
                          sectionType: ea.Cx.FAVORITES,
                          sortSoundsFn: ej,
                      }),
                      A &&
                          g.length > 0 &&
                          eO({
                              sections: i,
                              guildIds: c,
                              allSounds: r,
                              potentialSoundIdsForSection: g,
                              sectionType: ea.Cx.FREQUENTLY_USED,
                          }),
                      E && null != C && !I && eM(i, C, { allSounds: r, topSoundIds: S }),
                      void 0 !== m &&
                          (function (e, t, n) {
                              let {
                                      currentGuildHasAddPermissions: l,
                                      allSounds: i,
                                      filterOutEmptyCurrentGuild: s,
                                      sortSoundsFn: r,
                                  } = n,
                                  a = i.get(t.id) ?? [],
                                  o = eR(a, r),
                                  u = a.length < (0, eg.fA)(t) && l,
                                  c = 0 === o.length;
                              (u || c) && !s && o.push({ type: ea.uq.ADD_SOUND, guild: t }),
                                  (s && c) ||
                                      e.push({
                                          categoryInfo: { type: ea.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: o,
                                      });
                          })(i, m, {
                              currentGuildHasAddPermissions: f,
                              allSounds: r,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: ej,
                          }),
                      h || eL(i, r),
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
                              let n = eR(i.get(e.id) ?? [], r);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: ea.Cx.GUILD, guild: e, isNitroLocked: !s },
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
                          sortSoundsFn: ej,
                      }),
                      h && eL(i, r),
                      i.forEach((t) => {
                          t.categoryInfo.type === ea.Cx.GUILD &&
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
            }, [c, r, a, A, m, f, t, h, d, n, u, s, ej, g, C, S, E, I]);
        })(s, void 0, N),
        [ex, e_] = i.useState([]),
        ek = i.useMemo(
            () => (W.length > 0 ? [{ key: ea.Cx.SEARCH, categoryInfo: { type: ea.Cx.SEARCH }, items: eR(ex) }] : Z),
            [Z, W.length, ex],
        ),
        ew = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eP = i.useMemo(() => ek.filter((e) => e.items.length > 0), [ek]),
        eD = i.useMemo(
            () => eP.findLastIndex((e) => !!(0, D.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eP],
        ),
        eV = !F && A && -1 !== eD,
        eF = !F && A && -1 !== eD,
        eH = et.b0.useSetting(),
        eB = i.useMemo(() => new Set(eH), [eH]),
        eW = null == s,
        eK = D.Ay.canUseCustomCallSounds(V),
        ez = i.useCallback(
            (e) => {
                eB.has(e) ? eB.delete(e) : eB.add(e), et.b0.updateSetting(Array.from(eB));
            },
            [eB],
        ),
        eY = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, eo.Ir)(V, e, s, !1);
                if (null != h && m && i) h(e, n);
                else if (!f && i && (0, eo.Au)(s))
                    (0, eo.Ak)(e, s?.id ?? eN.dJq, t, l),
                        K &&
                            er.default.track(eN.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eN.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: W,
                                location_stack: t,
                            });
                else {
                    if ((0, eo.Ir)(V, e, s)) return;
                    A && G(e);
                }
            },
            [f, V, s, A, K, W, h, m],
        ),
        eq = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case ea.uq.SOUND:
                        let n = th[e?.category] ?? null,
                            l = e?.item.index;
                        return eY(e.item.sound, null == n ? M : [...M, n], t?.shiftKey !== !0, l);
                    case ea.uq.ADD_SOUND:
                        return o(), ts(e.item.guild.id);
                }
            },
            [M, eY, o],
        ),
        eJ = i.useCallback(
            (e, n, i, a, o) => {
                let u = eP[i.sectionIndex],
                    c = A && tm(u.categoryInfo, F, t) && eV;
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        className: r()(tc.a, { [tc.uL]: c }),
                        children: e.map((e, t) =>
                            (0, l.jsx)(
                                tu,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eW ? eK : !B,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: M,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: f,
                                    getItemProps: a,
                                    onSelectItem: eq,
                                    onItemMouseEnter: o,
                                    buttonOverlay: E,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: A,
                                    inExpressionPicker: v,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eP, A, F, t, f, eq, s, eW, eK, B, M, E, eV, v],
        ),
        e$ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !A) return !1;
                let n = eP[e],
                    l = eP[e - 1],
                    i = tm(n.categoryInfo, F, t),
                    s = tm(l.categoryInfo, F, t);
                return i && !s;
            },
            [eP, A, F],
        ),
        eX = i.useCallback(() => {
            let e = p.A.getSoundById("3");
            null != e && G(e);
        }, []),
        eQ = i.useCallback(() => {
            let e = (0, D.Dd)(eb.PremiumTypes.TIER_2);
            return eG.intl.format(eG.t["tw/SSq"], { nitroTierName: e, onClick: eX });
        }, [eX]),
        e0 = i.useCallback((e) => (e$(e, t) ? td : 32), [t, e$]),
        e1 = i.useCallback(
            (e) => {
                let t = e === eP.length - 1;
                return eF && t ? 70 : eV && e === eD ? 20 : 0;
            },
            [eP.length, eV, eF, eD],
        ),
        e2 = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
        e3 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = A && tm(e.categoryInfo, F, t),
                    r = e$(n, t),
                    a = eB.has(i);
                return (0, l.jsx)(
                    tf,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            er.default.track(eN.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eN.liQ.SOUNDBOARD_POPOUT },
                                tab: eU.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !a,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                ez(i);
                        },
                        collapsed: a,
                        isSectionNitroLocked: s && eV,
                        showNitroDivider: r && eV,
                    },
                    `header-${i}`,
                );
            },
            [eB, ez, t, e$, A, F, eV],
        ),
        e8 = i.useCallback(
            (e, t) => {
                let n = t === eP.length - 1,
                    i = t === eD;
                return eF && n
                    ? (0, l.jsx)("div", { className: r()(tc.Lk, { [tc.Ns]: i }) })
                    : eV && t === eD
                      ? (0, l.jsx)("div", { className: r()(tc.a3, { [tc.Ns]: i }) })
                      : null;
            },
            [eD, eV, eF, eP.length],
        ),
        e7 = i.useCallback((e) => e_((0, eu.lG)(e, X, V, s, M)), [s, V, X, M]),
        e6 = i.useCallback(
            (e) => {
                (0, j.L3)(e, async () => {
                    let { default: e } = await n.e("811562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: M, ...t });
                });
            },
            [M],
        ),
        e5 = i.useCallback(
            () =>
                v
                    ? (0, l.jsx)(J.Gq, {
                          renderPopout: () => (0, l.jsx)(J.qn, {}),
                          tooltipText: eG.intl.string(eG.t["19lt24"]),
                          position: "top",
                          clickableClassName: r()(tc.Jm, tc.Zz),
                          children: (0, l.jsx)(_.H, { size: "md", color: "currentColor", className: tc.By }),
                      })
                    : (0, l.jsx)(S.D, {
                          tabIndex: 0,
                          className: tc.Jm,
                          onClick: e6,
                          "aria-label": eG.intl.string(eG.t.kbFsAD),
                          children: (0, l.jsx)(tg, { className: tc.By }),
                      }),
            [v, e6],
        ),
        e4 = i.useCallback(
            (e) =>
                (0, l.jsx)(eZ, {
                    soundboardListRef: e,
                    categories: Z,
                    shouldUpsellLockedCategories: eV,
                    listPadding: I,
                    guildId: t,
                    inExpressionPicker: v,
                }),
            [Z, I, eV, t, v],
        ),
        e9 = i.useCallback(() => {
            let e = (0, q.qD)();
            return (0, D.LE)(e, eb.pe.TIER_2) ?? eG.intl.string(eG.t.pj0XBN);
        }, []),
        tt = i.useCallback(
            () =>
                eF
                    ? (0, l.jsx)($.d, {
                          showUpsell: ew,
                          text: eQ(),
                          button: e9(),
                          buttonAnalyticsObject: { section: eN.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, l.jsx)(Q.l, {
                              size: "sm",
                              className: tc.ij,
                              location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                              forceDarkTheme: !0,
                          }),
                      })
                    : null,
            [eQ, e9, eF, ew],
        ),
        tn = i.useCallback(
            (e) =>
                e?.item.type === ea.uq.SOUND
                    ? (0, l.jsx)(te, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        tl = (0, x.bG)([en.A], () => en.A.getMediaSessionId());
    return (
        (0, R.A)({
            type: g.ImpressionTypes.POPOUT,
            name: g.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: T,
                guild_id: t,
                media_session_id: tl,
                available_custom_sounds_count: es.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: es.lockedCustomSoundCount,
                favorite_sounds_count: es.favoriteSoundCount,
                type: eT.c4.FULL_PICKER,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != U
                    ? (0, l.jsx)(ee.A, {
                          title: eG.intl.string(v ? eG.t.rZEEvU : eG.t.jGDYF0),
                          description: eG.intl.string(v ? eG.t.ZPNG5A : eG.t["grL/hg"]),
                          analyticsLocationSection: eN.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eb.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...P, object: eN.ZSU.SOUNDBOARD_SOUND },
                              location_stack: k,
                              sku_id: D.Ay.getSkuIdForPremiumType(eb.PremiumTypes.TIER_2),
                          },
                          onClose: () => G(null),
                          onUpsellClicked: o,
                      })
                    : void 0,
                (0, l.jsx)(Y, {
                    categories: eP,
                    collapsedCategories: eB,
                    containerWidth: a,
                    store: L.LW,
                    onSelectItem: eq,
                    onSearchExpressions: e7,
                    hasSearchResults: ex.length > 0,
                    defaultSearchPlaceholder: eG.intl.string(eG.t.sKt3xS),
                    renderRow: eJ,
                    renderSectionHeader: e3,
                    renderSectionFooter: e8,
                    renderSection: e2,
                    renderCategoryList: e4,
                    renderHeaderAccessories: e5,
                    rowHeight: 48,
                    sectionHeaderHeight: e0,
                    sectionFooterHeight: e1,
                    itemNodeWidth: 150,
                    gridNavigatorId: z,
                    renderEmptySearchState: tp,
                    renderInspector: tn,
                    gridNotice: C,
                    renderHeader: y,
                    renderUpsell: tt,
                }),
            ],
        })
    );
}
var tA = n(70317);
function tC(e) {
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
            soundButtonOverlay: N,
            listPadding: v,
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
                className: r()(tA.Nz, { [tA.Bg]: T, [tA.yV]: S }),
                children: T
                    ? (0, l.jsx)(o.y, {})
                    : (0, l.jsx)(tx, {
                          guildId: t,
                          channel: n,
                          onClose: g,
                          onSelect: x,
                          shouldValidateSelectedSound: E,
                          containerWidth: s,
                          suppressPlaySound: C,
                          shouldShowLockedSounds: I,
                          gridNotice: y,
                          soundButtonOverlay: N,
                          listPadding: v,
                          renderHeader: _,
                          defaultSoundsOnly: j,
                          inExpressionPicker: S,
                          analyticsSource: A,
                      }),
            }),
        })
    );
}
