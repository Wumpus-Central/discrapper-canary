"use strict";
n.d(t, { A: () => tS });
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
    T = n(442433),
    j = n(537652),
    b = n(212245),
    R = n(139286),
    O = n(915089),
    M = n(724511),
    L = n(850992),
    w = n(887695),
    k = n(435558),
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
            T = (0, w.Fk)({
                activeCategoryIndex: N,
                isScrolling: y,
                listRef: S,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: v,
            }),
            j = i.useCallback(
                (e) => {
                    T(e),
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
                [T, v, _, A, C, I],
            );
        return (
            i.useEffect(() => {
                null != S.current && j(S.current.getScrollerNode()?.scrollTop ?? 0);
            }, [j, S]),
            (0, w.FV)({ searchQuery: v, activeCategoryIndex: N, listRef: S }),
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
                              onScroll: j,
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
    F = (0, k.throttle)(
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
            listPaddingRight: T,
            itemNodeMargin: j,
            listPadding: b,
            gridNavigatorId: R,
            gridNotice: O,
            renderHeader: M,
            renderUpsell: L,
        } = e,
        k = i.useRef(null),
        P = i.useRef(null),
        D = i.useRef(null),
        U = 0 === t.length,
        G = (0, d.RQ)((e) => e.searchQuery),
        F = r.useStore((e) => e.inspectedExpressionPosition),
        H = (0, w.oV)({ gridWrapperRef: k, containerWidth: s, showingEmptyState: U }),
        {
            expressionsGrid: B,
            rowCount: W,
            rowCountBySection: K,
            columnCounts: Y,
            gutterWidth: q,
        } = (0, w.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: T,
            itemNodeWidth: _,
            itemNodeMargin: j,
        }),
        {
            getItemProps: J,
            getRowProps: $,
            gridContainerProps: X,
            handleGridContainerKeyDown: Q,
            isUsingKeyboardNavigation: ee,
        } = (0, w.JZ)({
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
            r.setBottomPosition(k.current?.getBoundingClientRect().bottom ?? null);
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
                              ref: k,
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
    Q = n(400669),
    ee = n(2181),
    et = n(523006),
    en = n(885386),
    el = n(909536),
    ei = n(763827),
    es = n(287809),
    er = n(977997),
    ea = n(147925),
    eo = n(174459),
    eu = n(807348),
    ec = n(813564),
    ed = n(102597),
    eh = n(904054),
    em = n(147472);
n(321073);
var ef = n(964486),
    ep = n(931991),
    eg = n(734057),
    ex = n(71393),
    eA = n(576705),
    eC = n(309010),
    eE = n(473145),
    eI = n(945810);
let ey = (0, eI.mj)({
    kind: "user",
    name: "2026-06-soundboard-frequently-used",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eS = n(636537),
    ev = n(228366),
    eN = n(463347),
    e_ = n(125831);
let eT = (0, eI.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
(0, eI.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds-mobile",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
var ej = n(652215),
    eb = n(805143),
    eR = n(935208);
function eO(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => eR.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eM = n(980504),
    eL = n(202541);
function ew(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: eu.uq.SOUND, sound: e, index: t }));
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
    let u = ew(o, r);
    u.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: u });
}
function eP(e, t, n) {
    let { allSounds: l, topSoundIds: i } = n,
        s = {};
    for (let e of l.get(t.id) ?? []) s[e.soundId] = e;
    let r = [];
    for (let e of i) {
        let t = s[e];
        null != t && r.push(t);
    }
    0 !== r.length &&
        e.push({ key: eu.Cx.TOP_SOUNDS, categoryInfo: { type: eu.Cx.TOP_SOUNDS, guild: t }, items: ew(r) });
}
function eD(e, t) {
    let n = t.get("0") ?? eM.pD;
    e.push({ key: eu.Cx.DEFAULTS, categoryInfo: { type: eu.Cx.DEFAULTS }, items: ew(n, eO) });
}
var eU = n(837381),
    eG = n(866665),
    eV = n(88218),
    eF = n(407698),
    eH = n(698279),
    eB = n(375708),
    eW = n(120052);
let eK = [8, 8, 8, 8],
    ez = "soundboard_guild_",
    { itemIdForIndex: eZ } = (0, eV.J)(ez);
function eY(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: s } = e;
    return (0, l.jsx)(S.D, {
        ...s,
        onClick: i,
        className: r()(eW.Yl, { [eW.wH]: n }),
        children: (0, l.jsx)(t, { className: eW.xi, color: "currentColor" }),
    });
}
function eq(e, t, n, i, s) {
    switch (e.categoryInfo.type) {
        case eu.Cx.FAVORITES:
            return (0, l.jsx)(eY, { icon: A.StarIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eu.Cx.FREQUENTLY_USED:
            return (0, l.jsx)(eY, { icon: C.ClockIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eu.Cx.GUILD:
            return (0, l.jsx)(
                S.D,
                {
                    ...i,
                    className: eW.L1,
                    onClick: t,
                    children: (0, l.jsx)(M.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case eu.Cx.DEFAULTS:
            return (0, l.jsx)(eY, { icon: E.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eu.Cx.TOP_SOUNDS:
            return (0, l.jsx)(eY, { icon: y.TrophyIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function eJ(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: s, isNitroLocked: r } = e,
        a = (0, eU.rm)(eZ(n));
    return t.categoryInfo.type === eu.Cx.GUILD
        ? (0, l.jsx)(eF.Q, { guild: t.categoryInfo.guild, children: eq(t, i, s, a, r) })
        : (0, l.jsx)(eG.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case eu.Cx.FAVORITES:
                          return eB.intl.string(eB.t.k8fFjp);
                      case eu.Cx.FREQUENTLY_USED:
                          return eB.intl.string(eB.t["+cGVV6"]);
                      case eu.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case eu.Cx.DEFAULTS:
                          return eB.intl.string(eB.t.Rtvk9X);
                      case eu.Cx.TOP_SOUNDS:
                          return eB.intl.formatToPlainString(eB.t.GXs41w, { guildName: e.categoryInfo.guild.name });
                  }
              })(t),
              position: "right",
              align: "center",
              children: eq(t, i, s, a, r),
          });
}
function e$(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: a = eK,
            guildId: o,
            inExpressionPicker: u,
        } = e,
        c = i.useRef(null),
        d = (0, x.bG)([es.default], () => es.default.getCurrentUser()),
        h = (0, D.TW)(d, eL.PremiumTypes.TIER_2),
        m = i.useCallback(
            (e, t, n, i) => {
                let r = s && tx(e.categoryInfo, h, o);
                return (0, l.jsx)(eJ, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        eo.default.track(ej.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: ej.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eH.kx.SOUNDBOARD,
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
    return (0, l.jsx)(eV.A, {
        className: r()(u ? eW.HZ : eW.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: L.LW,
        categories: n,
        listPadding: a,
        renderCategoryListItem: m,
        rowCount: n.length,
        categoryHeight: 40,
        navId: "soundboard-picker-categories",
        itemIdPrefix: ez,
    });
}
var eX = n(554146),
    eQ = n(191023),
    e0 = n(192308),
    e1 = n(28863),
    e2 = n(695366),
    e3 = n(834730),
    e5 = n(789645),
    e6 = n(565645),
    e8 = n(775602),
    e7 = n(826673),
    e4 = n(182922),
    e9 = n(532624),
    te = n(531685),
    tt = n(723702),
    tn = n(350535),
    tl = n(115023);
function ti(e) {
    let { soundboardSound: t, closePicker: i } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        r = (0, h.bG)([p.A], () => null != t && p.A.isFavoriteSound(t.soundId)),
        a = (0, h.bG)([ex.A], () => ex.A.getGuild(t?.guildId)),
        o = (0, h.bG)([e8.Ay], () => e8.Ay.useReducedMotion, []),
        u = (0, h.bG)([te.A], () => te.A.isFocused()),
        c = (0, h.bG)([e9.Ay], () => e9.Ay.getKeybindForAction(ej.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, l.jsx)(e4.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(e6.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: tl.Zg })
                    : (0, l.jsx)(eQ.ImageIcon, { size: "md", color: "currentColor", className: tl.Zg }),
            graphicSecondary: null != a ? (0, l.jsx)(M.A, { guild: a, shouldAnimate: !o && u }) : null,
            titlePrimary: t.name,
            titleSecondary: a?.name,
            isFavorite: r,
        });
    function m() {
        i(),
            (0, e0.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("161411"),
                    n.e("498640"),
                    n.e("846327"),
                    n.e("912618"),
                ]).then(n.bind(n, 29681));
                return (t) => (0, l.jsx)(e, { ...t });
            });
    }
    let f = (0, e7.k8)(eX.M.SOUNDBOARD_KEYBIND_TIP),
        g =
            null != c && (0, tt.isWindows)() && !f
                ? eB.intl.format(eB.t.udMTth, {
                      keybind: (0, tn.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(e1.Anchor, { onClick: m, children: e }, t),
                  })
                : null;
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: tl.g,
              children: [
                  (0, l.jsx)(e2.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: tl.QW }),
                  (0, l.jsx)(e3.E, { variant: "text-sm/medium", color: "text-default", className: tl.L5, children: g }),
                  (0, l.jsx)(S.D, {
                      className: tl.b,
                      onClick: function () {
                          return (0, e7.Dr)(eX.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, l.jsx)(e5.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var ts = n(805945),
    tr = n(890856),
    ta = n(307301),
    to = n(468689);
function tu(e) {
    to.A.open(e, ej.BEX.SOUNDBOARD),
        (0, e0.openModalLazy)(async () => {
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
var tc = n(948611),
    td = n(308078);
function th(e) {
    let { guild: t, focused: n, onSelectItem: i, ...s } = e,
        { canCreateExpressions: a } = (0, ep.nr)(t);
    return (0, l.jsx)(eG.m, {
        text: eB.intl.string(eB.t["fHo+z1"]),
        shouldShow: !a,
        children: (0, l.jsx)("li", {
            className: tc.H,
            children: (0, l.jsxs)(tr.s, {
                ...s,
                "aria-label": eB.intl.formatToPlainString(eB.t.c1qVYh, { guildName: t.name }),
                className: r()(td.n4, { [td.in]: n, [td.r9]: !a }),
                onClick: () => (null != i ? i() : tu(t.id)),
                children: [
                    (0, l.jsx)(ta.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(e3.E, {
                        variant: "text-xs/semibold",
                        color: a ? "currentColor" : "text-muted",
                        children: eB.intl.string(eB.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function tm(e) {
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
        case eu.uq.SOUND:
            return (0, i.createElement)(ts.Ay, {
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
        case eu.uq.ADD_SOUND:
            return (0, i.createElement)(th, {
                ...o(s),
                key: g,
                guild: t.item.guild,
                focused: x,
                onSelectItem: () => u(t),
            });
    }
}
var tf = n(635799);
let tp = 32 + X.kg - 8,
    tg = {
        [eu.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [eu.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [eu.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [eu.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
        [eu.Cx.FREQUENTLY_USED]: u.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
        [eu.Cx.TOP_SOUNDS]: u.A.SOUNDBOARD_TOP_SOUNDS_SECTION,
    };
function tx(e, t, n) {
    return (null == n && e.type === eu.Cx.GUILD && !t) || (e.type === eu.Cx.GUILD && e.guild.id !== n && !t);
}
function tA(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, isSectionNitroLocked: s, showNitroDivider: a } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a && (0, l.jsx)(X.Ay, { className: tf.yH }),
            (0, l.jsx)("div", {
                className: r()(tf.hd, { [tf.Jb]: s, [tf.VD]: s }),
                children: (0, l.jsx)(S.D, {
                    className: tf.bV,
                    onClick: i,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: tf.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case eu.Cx.FAVORITES:
                                        return (0, l.jsx)(A.StarIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tf.nr,
                                        });
                                    case eu.Cx.FREQUENTLY_USED:
                                        return (0, l.jsx)(C.ClockIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tf.nr,
                                        });
                                    case eu.Cx.GUILD:
                                        return (0, l.jsx)(M.A, { guild: t.guild, height: 16, width: 16 });
                                    case eu.Cx.DEFAULTS:
                                        return (0, l.jsx)(E.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: tf.nr,
                                        });
                                    case eu.Cx.SEARCH:
                                        return (0, l.jsx)(I.MagnifyingGlassIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tf.nr,
                                        });
                                    case eu.Cx.TOP_SOUNDS:
                                        return (0, l.jsx)(y.TrophyIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tf.nr,
                                        });
                                }
                            })(),
                            (0, l.jsx)(v.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: tf.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case eu.Cx.FAVORITES:
                                            return eB.intl.string(eB.t.k8fFjp);
                                        case eu.Cx.FREQUENTLY_USED:
                                            return eB.intl.string(eB.t["+cGVV6"]);
                                        case eu.Cx.GUILD:
                                            return t.guild.name;
                                        case eu.Cx.DEFAULTS:
                                            return eB.intl.string(eB.t.Rtvk9X);
                                        case eu.Cx.SEARCH:
                                            return eB.intl.string(eB.t["zkoeq/"]);
                                        case eu.Cx.TOP_SOUNDS:
                                            return eB.intl.formatToPlainString(eB.t.GXs41w, {
                                                guildName: t.guild.name,
                                            });
                                    }
                                })(),
                            }),
                            (0, l.jsx)(ea.A, {
                                className: tf.nr,
                                direction: n ? ea.A.Directions.RIGHT : ea.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function tC() {
    return (0, l.jsx)(j.A, { message: eB.intl.string(eB.t.bgDdNK) });
}
function tE(e) {
    let { className: t } = e,
        n = (0, x.bG)([p.A], () => p.A.isSoundboardVolumeMuted()) ? N._ : _.H;
    return (0, l.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function tI(e) {
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
            analyticsSource: j,
        } = e,
        { audioRef: M } = i.useContext(et.A),
        { analyticsLocations: w } = (0, c.Ay)(),
        { analyticsLocations: k } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: P } = (0, b.p)(),
        U = i.useMemo(() => ({ ...P, section: ej.JJy.SOUNDBOARD_SOUND_PICKER }), [P]),
        [G, V] = i.useState(null),
        F = (0, x.bG)([es.default], () => es.default.getCurrentUser()),
        H = (0, D.TW)(F, eL.PremiumTypes.TIER_2),
        B = (0, x.bG)([er.A], () => er.A.getVoiceState(t, F?.id ?? ej.dJq)),
        W = B?.selfDeaf || B?.mute || B?.suppress,
        K = (0, d.RQ)((e) => e.searchQuery),
        z = null != K && "" !== K,
        Z = (0, O.GV)(),
        X = (0, el.St)("soundboard_floating_upsell"),
        {
            categories: ea,
            availableSounds: eI,
            soundCounts: eR,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = (0, x.bG)([es.default], () => es.default.getCurrentUser()),
                s = D.Ay.isPremium(l, eL.PremiumTypes.TIER_2),
                [r, a, o, u] = (0, x.yK)([p.A], () => [
                    p.A.getSounds(),
                    p.A.getFavorites(),
                    p.A.getFrequentlyUsedSoundIds(),
                    p.A.isFetching(),
                ]),
                c = (0, eb.Y)(e, !1),
                d = (0, x.yK)([ex.A], () => {
                    let e = [];
                    return (
                        c.forEach((t) => {
                            let n = ex.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                h = D.Ay.canUseSoundboardEverywhere(l),
                m = (0, x.bG)([ex.A], () => ex.A.getGuild(e?.guild_id)),
                f = (0, x.bG)([eA.A], () => {
                    let { canCreateExpressions: e } = (0, ep.ie)(m);
                    return e;
                }, [m]),
                g = i.useMemo(() => o.filter((e) => !a.has(e)).slice(0, 3), [o, a]),
                A =
                    ey.useConfig({ location: g.length > 0 ? "useSoundGrid" : "useSoundGridNoFrequentlyUsed" })
                        .enabled || !0,
                C = (0, x.bG)([eC.Ay, eg.A, ex.A], () => {
                    let e = eC.Ay.getVoiceChannelId(),
                        t = null != e ? eg.A.getChannel(e) : null;
                    return t?.guild_id != null ? ex.A.getGuild(t.guild_id) : void 0;
                }),
                { enabled: E, topSoundsFirst: I } = eT.getConfig({ location: "useSoundGrid" });
            (0, ef.Ay)(() => {
                E &&
                    (function (e) {
                        var t;
                        if (
                            null == e ||
                            null == es.default.getCurrentUser() ||
                            !eT.getConfig({ location: "maybeFetchTopSoundboardSoundsByGuild" }).enabled
                        )
                            return;
                        let n = p.A.getTopSoundboardSoundsMetadata(e);
                        if (null != n) {
                            let { topSoundsTTL: e } = n;
                            if (null == e || Date.now() < e) return;
                        }
                        e_.A.getIsFetching(e) ||
                            ((t = e),
                            (0, eN.tZ)(t) ||
                                (ev.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: t }),
                                eS.Bo.get({
                                    url: ej.Rsh.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(t),
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                }).then(
                                    (e) =>
                                        ev.h.dispatch({
                                            type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS",
                                            guildId: t,
                                            topSoundsMetadata: e.body.items
                                                .map((e) => ({ soundId: e.sound_id, rank: e.sound_rank }))
                                                .sort((e, t) => e.rank - t.rank),
                                        }),
                                    () => ev.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId: t }),
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
                    ? (eD(i, r),
                      {
                          categories: i,
                          availableSounds: r.get("0") ?? eM.pD,
                          isFetching: u,
                          soundCounts: {
                              favoriteSoundCount: 0,
                              unlockedCustomSoundCount: 0,
                              lockedCustomSoundCount: 0,
                          },
                      })
                    : (E && null != C && I && eP(i, C, { allSounds: r, topSoundIds: S }),
                      ek({
                          sections: i,
                          guildIds: c,
                          allSounds: r,
                          potentialSoundIdsForSection: Array.from(a),
                          sectionType: eu.Cx.FAVORITES,
                          sortSoundsFn: eO,
                      }),
                      A &&
                          g.length > 0 &&
                          ek({
                              sections: i,
                              guildIds: c,
                              allSounds: r,
                              potentialSoundIdsForSection: g,
                              sectionType: eu.Cx.FREQUENTLY_USED,
                          }),
                      E && null != C && !I && eP(i, C, { allSounds: r, topSoundIds: S }),
                      void 0 !== m &&
                          (function (e, t, n) {
                              let {
                                      currentGuildHasAddPermissions: l,
                                      allSounds: i,
                                      filterOutEmptyCurrentGuild: s,
                                      sortSoundsFn: r,
                                  } = n,
                                  a = i.get(t.id) ?? [],
                                  o = ew(a, r),
                                  u = a.length < (0, eE.fA)(t) && l,
                                  c = 0 === o.length;
                              (u || c) && !s && o.push({ type: eu.uq.ADD_SOUND, guild: t }),
                                  (s && c) ||
                                      e.push({
                                          categoryInfo: { type: eu.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: o,
                                      });
                          })(i, m, {
                              currentGuildHasAddPermissions: f,
                              allSounds: r,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: eO,
                          }),
                      h || eD(i, r),
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
                              let n = ew(i.get(e.id) ?? [], r);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: eu.Cx.GUILD, guild: e, isNitroLocked: !s },
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
                          sortSoundsFn: eO,
                      }),
                      h && eD(i, r),
                      i.forEach((t) => {
                          t.categoryInfo.type === eu.Cx.GUILD &&
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
            }, [c, r, a, A, m, f, t, h, d, n, u, s, eO, g, C, S, E, I]);
        })(s, void 0, v),
        [eU, eG] = i.useState([]),
        eV = i.useMemo(
            () => (K.length > 0 ? [{ key: eu.Cx.SEARCH, categoryInfo: { type: eu.Cx.SEARCH }, items: ew(eU) }] : ea),
            [ea, K.length, eU],
        ),
        eF = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eW = i.useMemo(() => eV.filter((e) => e.items.length > 0), [eV]),
        eK = i.useMemo(
            () => eW.findLastIndex((e) => !!(0, D.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eW],
        ),
        ez = !H && A && -1 !== eK,
        eZ = !H && A && -1 !== eK,
        eY = en.b0.useSetting(),
        eq = i.useMemo(() => new Set(eY), [eY]),
        eJ = null == s,
        eX = D.Ay.canUseCustomCallSounds(F),
        eQ = i.useCallback(
            (e) => {
                eq.has(e) ? eq.delete(e) : eq.add(e), en.b0.updateSetting(Array.from(eq));
            },
            [eq],
        ),
        e0 = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, ec.Ir)(F, e, s, !1);
                if (null != h && m && i) h(e, n);
                else if (!f && i && (0, ec.Au)(s))
                    (0, ec.Ak)(e, s?.id ?? ej.dJq, t, l),
                        z &&
                            eo.default.track(ej.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: ej.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: K,
                                location_stack: t,
                            });
                else {
                    if ((0, ec.Ir)(F, e, s)) return;
                    A && V(e);
                }
            },
            [f, F, s, A, z, K, h, m],
        ),
        e1 = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case eu.uq.SOUND:
                        let n = tg[e?.category] ?? null,
                            l = e?.item.index;
                        return e0(e.item.sound, null == n ? w : [...w, n], t?.shiftKey !== !0, l);
                    case eu.uq.ADD_SOUND:
                        return o(), tu(e.item.guild.id);
                }
            },
            [w, e0, o],
        ),
        e2 = i.useCallback(
            (e, n, i, a, o) => {
                let u = eW[i.sectionIndex],
                    c = A && tx(u.categoryInfo, H, t) && ez;
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        className: r()(tf.a, { [tf.uL]: c }),
                        children: e.map((e, t) =>
                            (0, l.jsx)(
                                tm,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eJ ? eX : !W,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: w,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: f,
                                    getItemProps: a,
                                    onSelectItem: e1,
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
            [eW, A, H, t, f, e1, s, eJ, eX, W, w, E, ez, N],
        ),
        e3 = i.useCallback(
            (e, t) => {
                if (e <= 0 || !A) return !1;
                let n = eW[e],
                    l = eW[e - 1],
                    i = tx(n.categoryInfo, H, t),
                    s = tx(l.categoryInfo, H, t);
                return i && !s;
            },
            [eW, A, H],
        ),
        e5 = i.useCallback(() => {
            let e = p.A.getSoundById("3");
            null != e && V(e);
        }, []),
        e6 = i.useCallback(() => {
            let e = (0, D.Dd)(eL.PremiumTypes.TIER_2);
            return eB.intl.format(eB.t["tw/SSq"], { nitroTierName: e, onClick: e5 });
        }, [e5]),
        e8 = i.useCallback((e) => (e3(e, t) ? tp : 32), [t, e3]),
        e7 = i.useCallback(
            (e) => {
                let t = e === eW.length - 1;
                return eZ && t ? 70 : ez && e === eK ? 20 : 0;
            },
            [eW.length, ez, eZ, eK],
        ),
        e4 = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
        e9 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = A && tx(e.categoryInfo, H, t),
                    r = e3(n, t),
                    a = eq.has(i);
                return (0, l.jsx)(
                    tA,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            eo.default.track(ej.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: ej.liQ.SOUNDBOARD_POPOUT },
                                tab: eH.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !a,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eQ(i);
                        },
                        collapsed: a,
                        isSectionNitroLocked: s && ez,
                        showNitroDivider: r && ez,
                    },
                    `header-${i}`,
                );
            },
            [eq, eQ, t, e3, A, H, ez],
        ),
        te = i.useCallback(
            (e, t) => {
                let n = t === eW.length - 1,
                    i = t === eK;
                return eZ && n
                    ? (0, l.jsx)("div", { className: r()(tf.Lk, { [tf.Ns]: i }) })
                    : ez && t === eK
                      ? (0, l.jsx)("div", { className: r()(tf.a3, { [tf.Ns]: i }) })
                      : null;
            },
            [eK, ez, eZ, eW.length],
        ),
        tt = i.useCallback((e) => eG((0, em.lG)(e, eI, F, s, w)), [s, F, eI, w]),
        tn = i.useCallback(
            (e) => {
                (0, T.L3)(e, async () => {
                    let { default: e } = await n.e("811562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: w, ...t });
                });
            },
            [w],
        ),
        tl = i.useCallback(
            () =>
                N
                    ? (0, l.jsx)(J.Gq, {
                          renderPopout: () => (0, l.jsx)(J.qn, {}),
                          tooltipText: eB.intl.string(eB.t["19lt24"]),
                          position: "top",
                          clickableClassName: r()(tf.Jm, tf.Zz),
                          children: (0, l.jsx)(_.H, { size: "md", color: "currentColor", className: tf.By }),
                      })
                    : (0, l.jsx)(S.D, {
                          tabIndex: 0,
                          className: tf.Jm,
                          onClick: tn,
                          "aria-label": eB.intl.string(eB.t.kbFsAD),
                          children: (0, l.jsx)(tE, { className: tf.By }),
                      }),
            [N, tn],
        ),
        ts = i.useCallback(
            (e) =>
                (0, l.jsx)(e$, {
                    soundboardListRef: e,
                    categories: ea,
                    shouldUpsellLockedCategories: ez,
                    listPadding: I,
                    guildId: t,
                    inExpressionPicker: N,
                }),
            [ea, I, ez, t, N],
        ),
        tr = i.useCallback(() => {
            let e = (0, q.qD)();
            return (0, D.LE)(e, eL.pe.TIER_2) ?? eB.intl.string(eB.t.pj0XBN);
        }, []),
        ta = i.useCallback(
            () =>
                eZ
                    ? (0, l.jsx)($.d, {
                          showUpsell: eF,
                          text: e6(),
                          button: tr(),
                          buttonAnalyticsObject: { section: ej.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: X
                              ? (0, l.jsx)(Q.l, {
                                    size: "sm",
                                    className: tf.ij,
                                    location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                    forceDarkTheme: !0,
                                })
                              : void 0,
                      })
                    : null,
            [e6, tr, eZ, X, eF],
        ),
        to = i.useCallback(
            (e) =>
                e?.item.type === eu.uq.SOUND
                    ? (0, l.jsx)(ti, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        tc = i.useCallback(() => {
            let e = p.A.getSoundById("3"),
                t = new Audio((0, ed.A)("3"));
            null != M.current && M.current.pause(),
                (M.current = t),
                (t.currentTime = 0),
                (t.volume = (0, eh.A)(e?.volume ?? 1)),
                t.play();
        }, [M]),
        td = (0, x.bG)([ei.A], () => ei.A.getMediaSessionId());
    return (
        (0, R.A)({
            type: g.ImpressionTypes.POPOUT,
            name: g.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: j,
                guild_id: t,
                media_session_id: td,
                available_custom_sounds_count: eR.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eR.lockedCustomSoundCount,
                favorite_sounds_count: eR.favoriteSoundCount,
                type: eM.c4.FULL_PICKER,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != G
                    ? (0, l.jsx)(ee.A, {
                          title: eB.intl.string(N ? eB.t.rZEEvU : eB.t.jGDYF0),
                          description: eB.intl.string(N ? eB.t.ZPNG5A : eB.t["grL/hg"]),
                          analyticsLocationSection: ej.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eL.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...U, object: ej.ZSU.SOUNDBOARD_SOUND },
                              location_stack: k,
                              sku_id: D.Ay.getSkuIdForPremiumType(eL.PremiumTypes.TIER_2),
                          },
                          onClose: () => V(null),
                          onUpsellClicked: o,
                          onDisplay: tc,
                      })
                    : void 0,
                (0, l.jsx)(Y, {
                    categories: eW,
                    collapsedCategories: eq,
                    containerWidth: a,
                    store: L.LW,
                    onSelectItem: e1,
                    onSearchExpressions: tt,
                    hasSearchResults: eU.length > 0,
                    defaultSearchPlaceholder: eB.intl.string(eB.t.sKt3xS),
                    renderRow: e2,
                    renderSectionHeader: e9,
                    renderSectionFooter: te,
                    renderSection: e4,
                    renderCategoryList: ts,
                    renderHeaderAccessories: tl,
                    rowHeight: 48,
                    sectionHeaderHeight: e8,
                    sectionFooterHeight: e7,
                    itemNodeWidth: 150,
                    gridNavigatorId: Z,
                    renderEmptySearchState: tC,
                    renderInspector: to,
                    gridNotice: C,
                    renderHeader: y,
                    renderUpsell: ta,
                }),
            ],
        })
    );
}
var ty = n(70317);
function tS(e) {
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
            defaultSoundsOnly: T,
        } = e,
        { fetching: j, maybeFetchData: b } = {
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
                className: r()(ty.Nz, { [ty.Bg]: j, [ty.yV]: S }),
                children: j
                    ? (0, l.jsx)(o.y, {})
                    : (0, l.jsx)(tI, {
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
                          defaultSoundsOnly: T,
                          inExpressionPicker: S,
                          analyticsSource: A,
                      }),
            }),
        })
    );
}
