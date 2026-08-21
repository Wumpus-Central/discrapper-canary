"use strict";
n.d(t, { A: () => tc });
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
    y = n(939249),
    v = n(297264),
    S = n(358618),
    N = n(983851),
    _ = n(442433),
    T = n(537652),
    j = n(212245),
    b = n(139286),
    R = n(915089),
    O = n(724511),
    M = n(850992),
    L = n(887695),
    w = n(435558),
    k = n(962125),
    P = n(158045),
    D = n(240864),
    U = n(212633);
let G = i.forwardRef(function (e, t) {
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
            v = i.useRef(null),
            S = (0, d.RQ)((e) => e.searchQuery),
            N = s.useStore((e) => e.activeCategoryIndex),
            _ = i.useMemo(
                () =>
                    n.map((e) =>
                        (0, P.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            T = (0, L.Fk)({
                activeCategoryIndex: N,
                isScrolling: y,
                listRef: v,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: S,
            }),
            j = i.useCallback(
                (e) => {
                    T(e),
                        V({
                            listRef: v,
                            searchQuery: S,
                            nitroLockedSectionStates: _,
                            scrollTop: e,
                            sectionHeaderHeight: A,
                            sectionFooterHeight: C,
                        }),
                        I?.(e);
                },
                [T, S, _, A, C, I],
            );
        return (
            i.useEffect(() => {
                null != v.current && j(v.current.getScrollerNode()?.scrollTop ?? 0);
            }, [j, v]),
            (0, L.FV)({ searchQuery: S, activeCategoryIndex: N, listRef: v }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return v.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => v.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => v.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return v.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return v.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return v.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return v.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return v.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, l.jsxs)("div", {
                className: U.i,
                children: [
                    S.length > 0 && !r && null != f
                        ? f()
                        : (0, l.jsx)(k.A, {
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
                              ref: v,
                          }),
                    E?.(),
                    m?.(),
                ],
            })
        );
    }),
    V = (0, w.throttle)(
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
            let a = (0, D.s)({
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
var F = n(462180),
    H = n(602034),
    B = n(892547),
    W = n(642232);
let K = i.forwardRef(function (e, t) {
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
        [m, f] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], F.x),
        p = n.useStore((e) => e.searchPlaceholder),
        [g, x] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], F.x),
        A = i.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : M.Uk),
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
            className: W.i,
            children: (0, l.jsx)(B.I, {
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
                    ...(x ? { "aria-activedescendant": (0, H.Aq)(a, g.columnIndex, g.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var z = n(904289);
function Z(e) {
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
            rowHeight: v,
            sectionHeaderHeight: S,
            sectionFooterHeight: N,
            itemNodeWidth: _,
            listPaddingRight: T,
            itemNodeMargin: j,
            listPadding: b,
            gridNavigatorId: R,
            gridNotice: O,
            renderHeader: M,
            renderUpsell: w,
        } = e,
        k = i.useRef(null),
        P = i.useRef(null),
        D = i.useRef(null),
        U = 0 === t.length,
        V = (0, d.RQ)((e) => e.searchQuery),
        F = r.useStore((e) => e.inspectedExpressionPosition),
        H = (0, L.oV)({ gridWrapperRef: k, containerWidth: s, showingEmptyState: U }),
        {
            expressionsGrid: B,
            rowCount: W,
            rowCountBySection: Z,
            columnCounts: Y,
            gutterWidth: q,
        } = (0, L.se)({
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
        } = (0, L.JZ)({
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
        o(V);
    }, [o, V]),
        i.useEffect(() => {
            r.setBottomPosition(k.current?.getBoundingClientRect().bottom ?? null);
        }),
        i.useEffect(() => r.resetStoreState, [r.resetStoreState]),
        i.useLayoutEffect(() => {
            D.current?.focus();
        }, []);
    let es = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(K, {
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
            null != M ? M(es) : (0, l.jsxs)("div", { className: z.wx, children: [" ", es, " "] }),
            U && null != f
                ? f(z.p$)
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          I(P),
                          null != O && (0, l.jsx)("div", { className: z.Eb, children: O }),
                          (0, l.jsx)("div", {
                              ref: k,
                              className: z.AD,
                              id: R,
                              ...X,
                              children:
                                  null != H
                                      ? (0, l.jsx)(G, {
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
                                            rowCountBySection: Z,
                                            rowHeight: v,
                                            sectionHeaderHeight: S,
                                            sectionFooterHeight: N,
                                            renderUpsell: w,
                                            onScroll: u,
                                        })
                                      : null,
                          }),
                      ],
                  }),
        ],
    });
}
var Y = n(89366),
    q = n(319993),
    J = n(202639),
    $ = n(414872),
    X = n(400669),
    Q = n(2181),
    ee = n(523006),
    et = n(885386),
    en = n(909536),
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
var em = n(931991),
    ef = n(71393),
    ep = n(576705),
    eg = n(473145);
let ex = (0, n(945810).mj)({
    kind: "user",
    name: "2026-06-soundboard-frequently-used",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eA = n(805143),
    eC = n(935208);
function eE(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => eC.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eI = n(980504),
    ey = n(202541);
function ev(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: eo.uq.SOUND, sound: e, index: t }));
}
function eS(e) {
    let { sections: t, guildIds: n, allSounds: l, potentialSoundIdsForSection: i, sectionType: s, sortSoundsFn: r } = e,
        a = {};
    for (let e of [...n, "0"])
        for (let t of l.get(e) ?? []) null != i.find((e) => e === t.soundId) && (a[t.soundId] = t);
    let o = [];
    for (let e of i) {
        let t = a[e];
        null != t && o.push(t);
    }
    let u = ev(o, r);
    u.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: u });
}
function eN(e, t) {
    let n = t.get("0") ?? eI.pD;
    e.push({ key: eo.Cx.DEFAULTS, categoryInfo: { type: eo.Cx.DEFAULTS }, items: ev(n, eE) });
}
var e_ = n(837381),
    eT = n(866665),
    ej = n(802019),
    eb = n(407698),
    eR = n(652215),
    eO = n(698279),
    eM = n(375708),
    eL = n(120052);
let ew = [8, 8, 8, 8];
function ek(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: s } = e;
    return (0, l.jsx)(y.D, {
        ...s,
        onClick: i,
        className: r()(eL.Yl, { [eL.wH]: n }),
        children: (0, l.jsx)(t, { className: eL.xi, color: "currentColor" }),
    });
}
function eP(e, t, n, i, s) {
    switch (e.categoryInfo.type) {
        case eo.Cx.FAVORITES:
            return (0, l.jsx)(ek, { icon: A.StarIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eo.Cx.FREQUENTLY_USED:
            return (0, l.jsx)(ek, { icon: C.ClockIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eo.Cx.GUILD:
            return (0, l.jsx)(
                y.D,
                {
                    ...i,
                    className: eL.L1,
                    onClick: t,
                    children: (0, l.jsx)(O.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case eo.Cx.DEFAULTS:
            return (0, l.jsx)(ek, { icon: E.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function eD(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: s, isNitroLocked: r } = e,
        a = (0, e_.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === eo.Cx.GUILD
        ? (0, l.jsx)(eb.Q, { guild: t.categoryInfo.guild, children: eP(t, i, s, a, r) })
        : (0, l.jsx)(eT.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case eo.Cx.FAVORITES:
                          return eM.intl.string(eM.t.k8fFjp);
                      case eo.Cx.FREQUENTLY_USED:
                          return eM.intl.string(eM.t["+cGVV6"]);
                      case eo.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case eo.Cx.DEFAULTS:
                          return eM.intl.string(eM.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: eP(t, i, s, a, r),
          });
}
function eU(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: a = ew,
            guildId: o,
            inExpressionPicker: u,
        } = e,
        c = i.useRef(null),
        d = (0, x.bG)([ei.default], () => ei.default.getCurrentUser()),
        h = (0, P.TW)(d, ey.PremiumTypes.TIER_2),
        m = i.useCallback(
            (e, t, n, i) => {
                let r = s && ti(e.categoryInfo, h, o);
                return (0, l.jsx)(eD, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        ea.default.track(eR.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eR.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eO.kx.SOUNDBOARD,
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
    return (0, l.jsx)(ej.A, {
        className: r()(u ? eL.HZ : eL.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: M.LW,
        categories: n,
        listPadding: a,
        renderCategoryListItem: m,
        rowCount: n.length,
        categoryHeight: 40,
    });
}
var eG = n(554146),
    eV = n(191023),
    eF = n(192308),
    eH = n(349288),
    eB = n(695366),
    eW = n(834730),
    eK = n(789645),
    ez = n(565645),
    eZ = n(775602),
    eY = n(826673),
    eq = n(182922),
    eJ = n(532624),
    e$ = n(531685),
    eX = n(723702),
    eQ = n(350535),
    e0 = n(115023);
function e1(e) {
    let { soundboardSound: t, closePicker: i } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        r = (0, h.bG)([p.A], () => null != t && p.A.isFavoriteSound(t.soundId)),
        a = (0, h.bG)([ef.A], () => ef.A.getGuild(t?.guildId)),
        o = (0, h.bG)([eZ.Ay], () => eZ.Ay.useReducedMotion, []),
        u = (0, h.bG)([e$.A], () => e$.A.isFocused()),
        c = (0, h.bG)([eJ.Ay], () => eJ.Ay.getKeybindForAction(eR.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, l.jsx)(eq.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(ez.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: e0.Zg })
                    : (0, l.jsx)(eV.ImageIcon, { size: "md", color: "currentColor", className: e0.Zg }),
            graphicSecondary: null != a ? (0, l.jsx)(O.A, { guild: a, shouldAnimate: !o && u }) : null,
            titlePrimary: t.name,
            titleSecondary: a?.name,
            isFavorite: r,
        });
    function m() {
        i(),
            (0, eF.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("161411"),
                    n.e("498640"),
                    n.e("846327"),
                    n.e("912618"),
                ]).then(n.bind(n, 29681));
                return (t) => (0, l.jsx)(e, { ...t });
            });
    }
    let f = (0, eY.k8)(eG.M.SOUNDBOARD_KEYBIND_TIP),
        g =
            null != c && (0, eX.isWindows)() && !f
                ? eM.intl.format(eM.t.udMTth, {
                      keybind: (0, eQ.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(eH.Anchor, { onClick: m, children: e }, t),
                  })
                : null;
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: e0.g,
              children: [
                  (0, l.jsx)(eB.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: e0.QW }),
                  (0, l.jsx)(eW.E, { variant: "text-sm/medium", color: "text-default", className: e0.L5, children: g }),
                  (0, l.jsx)(y.D, {
                      className: e0.b,
                      onClick: function () {
                          return (0, eY.Dr)(eG.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, l.jsx)(eK.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var e2 = n(805945),
    e3 = n(890856),
    e5 = n(307301),
    e8 = n(468689);
function e6(e) {
    e8.A.open(e, eR.BEX.SOUNDBOARD),
        (0, eF.openModalLazy)(async () => {
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
var e7 = n(948611),
    e4 = n(308078);
function e9(e) {
    let { guild: t, focused: n, onSelectItem: i, ...s } = e,
        { canCreateExpressions: a } = (0, em.nr)(t);
    return (0, l.jsx)(eT.m, {
        text: eM.intl.string(eM.t["fHo+z1"]),
        shouldShow: !a,
        children: (0, l.jsx)("li", {
            className: e7.H,
            children: (0, l.jsxs)(e3.s, {
                ...s,
                "aria-label": eM.intl.formatToPlainString(eM.t.c1qVYh, { guildName: t.name }),
                className: r()(e4.n4, { [e4.in]: n, [e4.r9]: !a }),
                onClick: () => (null != i ? i() : e6(t.id)),
                children: [
                    (0, l.jsx)(e5.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(eW.E, {
                        variant: "text-xs/semibold",
                        color: a ? "currentColor" : "text-muted",
                        children: eM.intl.string(eM.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function te(e) {
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
        p = M.LW.useStore((e) => e.inspectedExpressionPosition),
        g = `${l}-${s}`,
        x = r && p.rowIndex === l && p.columnIndex === s;
    switch (t.item.type) {
        case eo.uq.SOUND:
            return (0, i.createElement)(e2.Ay, {
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
            return (0, i.createElement)(e9, {
                ...o(s),
                key: g,
                guild: t.item.guild,
                focused: x,
                onSelectItem: () => u(t),
            });
    }
}
var tt = n(635799);
let tn = 32 + $.kg - 8,
    tl = {
        [eo.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [eo.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [eo.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [eo.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
        [eo.Cx.FREQUENTLY_USED]: u.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
    };
function ti(e, t, n) {
    return (null == n && e.type === eo.Cx.GUILD && !t) || (e.type === eo.Cx.GUILD && e.guild.id !== n && !t);
}
function ts(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, isSectionNitroLocked: s, showNitroDivider: a } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a && (0, l.jsx)($.Ay, { className: tt.yH }),
            (0, l.jsx)("div", {
                className: r()(tt.hd, { [tt.Jb]: s, [tt.VD]: s }),
                children: (0, l.jsx)(y.D, {
                    className: tt.bV,
                    onClick: i,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: tt.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case eo.Cx.FAVORITES:
                                        return (0, l.jsx)(A.StarIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tt.nr,
                                        });
                                    case eo.Cx.FREQUENTLY_USED:
                                        return (0, l.jsx)(C.ClockIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tt.nr,
                                        });
                                    case eo.Cx.GUILD:
                                        return (0, l.jsx)(O.A, { guild: t.guild, height: 16, width: 16 });
                                    case eo.Cx.DEFAULTS:
                                        return (0, l.jsx)(E.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: tt.nr,
                                        });
                                    case eo.Cx.SEARCH:
                                        return (0, l.jsx)(I.MagnifyingGlassIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tt.nr,
                                        });
                                }
                            })(),
                            (0, l.jsx)(v.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: tt.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case eo.Cx.FAVORITES:
                                            return eM.intl.string(eM.t.k8fFjp);
                                        case eo.Cx.FREQUENTLY_USED:
                                            return eM.intl.string(eM.t["+cGVV6"]);
                                        case eo.Cx.GUILD:
                                            return t.guild.name;
                                        case eo.Cx.DEFAULTS:
                                            return eM.intl.string(eM.t.Rtvk9X);
                                        case eo.Cx.SEARCH:
                                            return eM.intl.string(eM.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, l.jsx)(er.A, {
                                className: tt.nr,
                                direction: n ? er.A.Directions.RIGHT : er.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function tr() {
    return (0, l.jsx)(T.A, { message: eM.intl.string(eM.t.bgDdNK) });
}
function ta(e) {
    let { className: t } = e,
        n = (0, x.bG)([p.A], () => p.A.isSoundboardVolumeMuted()) ? S._ : N.H;
    return (0, l.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function to(e) {
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
            renderHeader: v,
            defaultSoundsOnly: S = !1,
            inExpressionPicker: T,
            analyticsSource: O,
        } = e,
        { audioRef: L } = i.useContext(ee.A),
        { analyticsLocations: w } = (0, c.Ay)(),
        { analyticsLocations: k } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: D } = (0, j.p)(),
        U = i.useMemo(() => ({ ...D, section: eR.JJy.SOUNDBOARD_SOUND_PICKER }), [D]),
        [G, V] = i.useState(null),
        F = (0, x.bG)([ei.default], () => ei.default.getCurrentUser()),
        H = (0, P.TW)(F, ey.PremiumTypes.TIER_2),
        B = (0, x.bG)([es.A], () => es.A.getVoiceState(t, F?.id ?? eR.dJq)),
        W = B?.selfDeaf || B?.mute || B?.suppress,
        K = (0, d.RQ)((e) => e.searchQuery),
        z = null != K && "" !== K,
        $ = (0, R.GV)(),
        er = (0, en.St)("soundboard_floating_upsell"),
        {
            categories: eC,
            availableSounds: e_,
            soundCounts: eT,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = (0, x.bG)([ei.default], () => ei.default.getCurrentUser()),
                s = P.Ay.isPremium(l, ey.PremiumTypes.TIER_2),
                [r, a, o, u] = (0, x.yK)([p.A], () => [
                    p.A.getSounds(),
                    p.A.getFavorites(),
                    p.A.getFrequentlyUsedSoundIds(),
                    p.A.isFetching(),
                ]),
                c = (0, eA.Y)(e, !1),
                d = (0, x.yK)([ef.A], () => {
                    let e = [];
                    return (
                        c.forEach((t) => {
                            let n = ef.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                h = P.Ay.canUseSoundboardEverywhere(l),
                m = (0, x.bG)([ef.A], () => ef.A.getGuild(e?.guild_id)),
                f = (0, x.bG)([ep.A], () => {
                    let { canCreateExpressions: e } = (0, em.ie)(m);
                    return e;
                }, [m]),
                g = i.useMemo(() => o.filter((e) => !a.has(e)).slice(0, 3), [o, a]),
                A =
                    ex.useConfig({ location: g.length > 0 ? "useSoundGrid" : "useSoundGridNoFrequentlyUsed" })
                        .enabled || !0;
            return i.useMemo(() => {
                let e = 0,
                    l = 0,
                    i = [];
                return n
                    ? (eN(i, r),
                      {
                          categories: i,
                          availableSounds: r.get("0") ?? eI.pD,
                          isFetching: u,
                          soundCounts: {
                              favoriteSoundCount: 0,
                              unlockedCustomSoundCount: 0,
                              lockedCustomSoundCount: 0,
                          },
                      })
                    : (eS({
                          sections: i,
                          guildIds: c,
                          allSounds: r,
                          potentialSoundIdsForSection: Array.from(a),
                          sectionType: eo.Cx.FAVORITES,
                          sortSoundsFn: eE,
                      }),
                      A &&
                          g.length > 0 &&
                          eS({
                              sections: i,
                              guildIds: c,
                              allSounds: r,
                              potentialSoundIdsForSection: g,
                              sectionType: eo.Cx.FREQUENTLY_USED,
                          }),
                      void 0 !== m &&
                          (function (e, t, n) {
                              let {
                                      currentGuildHasAddPermissions: l,
                                      allSounds: i,
                                      filterOutEmptyCurrentGuild: s,
                                      sortSoundsFn: r,
                                  } = n,
                                  a = i.get(t.id) ?? [],
                                  o = ev(a, r),
                                  u = a.length < (0, eg.fA)(t) && l,
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
                              sortSoundsFn: eE,
                          }),
                      h || eN(i, r),
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
                              let n = ev(i.get(e.id) ?? [], r);
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
                          sortSoundsFn: eE,
                      }),
                      h && eN(i, r),
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
            }, [c, r, a, A, m, f, t, h, d, n, u, s, eE, g]);
        })(s, void 0, S),
        [ej, eb] = i.useState([]),
        eL = i.useMemo(
            () => (K.length > 0 ? [{ key: eo.Cx.SEARCH, categoryInfo: { type: eo.Cx.SEARCH }, items: ev(ej) }] : eC),
            [eC, K.length, ej],
        ),
        ew = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        ek = i.useMemo(() => eL.filter((e) => e.items.length > 0), [eL]),
        eP = i.useMemo(
            () => ek.findLastIndex((e) => !!(0, P.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [ek],
        ),
        eD = !H && A && -1 !== eP,
        eG = !H && A && -1 !== eP,
        eV = et.b0.useSetting(),
        eF = i.useMemo(() => new Set(eV), [eV]),
        eH = null == s,
        eB = P.Ay.canUseCustomCallSounds(F),
        eW = i.useCallback(
            (e) => {
                eF.has(e) ? eF.delete(e) : eF.add(e), et.b0.updateSetting(Array.from(eF));
            },
            [eF],
        ),
        eK = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, eu.Ir)(F, e, s, !1);
                if (null != h && m && i) h(e, n);
                else if (!f && i && (0, eu.Au)(s))
                    (0, eu.Ak)(e, s?.id ?? eR.dJq, t, l),
                        z &&
                            ea.default.track(eR.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eR.I4_.SOUNDBOARD,
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
        ez = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case eo.uq.SOUND:
                        let n = tl[e?.category] ?? null,
                            l = e?.item.index;
                        return eK(e.item.sound, null == n ? w : [...w, n], t?.shiftKey !== !0, l);
                    case eo.uq.ADD_SOUND:
                        return o(), e6(e.item.guild.id);
                }
            },
            [w, eK, o],
        ),
        eZ = i.useCallback(
            (e, n, i, a, o) => {
                let u = ek[i.sectionIndex],
                    c = A && ti(u.categoryInfo, H, t) && eD;
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        className: r()(tt.a, { [tt.uL]: c }),
                        children: e.map((e, t) =>
                            (0, l.jsx)(
                                te,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eH ? eB : !W,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: w,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: f,
                                    getItemProps: a,
                                    onSelectItem: ez,
                                    onItemMouseEnter: o,
                                    buttonOverlay: E,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: A,
                                    inExpressionPicker: T,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [ek, A, H, t, f, ez, s, eH, eB, W, w, E, eD, T],
        ),
        eY = i.useCallback(
            (e, t) => {
                if (e <= 0 || !A) return !1;
                let n = ek[e],
                    l = ek[e - 1],
                    i = ti(n.categoryInfo, H, t),
                    s = ti(l.categoryInfo, H, t);
                return i && !s;
            },
            [ek, A, H],
        ),
        eq = i.useCallback(() => {
            let e = p.A.getSoundById("3");
            null != e && V(e);
        }, []),
        eJ = i.useCallback(() => {
            let e = (0, P.Dd)(ey.PremiumTypes.TIER_2);
            return eM.intl.format(eM.t["tw/SSq"], { nitroTierName: e, onClick: eq });
        }, [eq]),
        e$ = i.useCallback((e) => (eY(e, t) ? tn : 32), [t, eY]),
        eX = i.useCallback(
            (e) => {
                let t = e === ek.length - 1;
                return eG && t ? 70 : eD && e === eP ? 20 : 0;
            },
            [ek.length, eD, eG, eP],
        ),
        eQ = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
        e0 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = A && ti(e.categoryInfo, H, t),
                    r = eY(n, t),
                    a = eF.has(i);
                return (0, l.jsx)(
                    ts,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            ea.default.track(eR.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eR.liQ.SOUNDBOARD_POPOUT },
                                tab: eO.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !a,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eW(i);
                        },
                        collapsed: a,
                        isSectionNitroLocked: s && eD,
                        showNitroDivider: r && eD,
                    },
                    `header-${i}`,
                );
            },
            [eF, eW, t, eY, A, H, eD],
        ),
        e2 = i.useCallback(
            (e, t) => {
                let n = t === ek.length - 1,
                    i = t === eP;
                return eG && n
                    ? (0, l.jsx)("div", { className: r()(tt.Lk, { [tt.Ns]: i }) })
                    : eD && t === eP
                      ? (0, l.jsx)("div", { className: r()(tt.a3, { [tt.Ns]: i }) })
                      : null;
            },
            [eP, eD, eG, ek.length],
        ),
        e3 = i.useCallback((e) => eb((0, eh.lG)(e, e_, F, s, w)), [s, F, e_, w]),
        e5 = i.useCallback(
            (e) => {
                (0, _.L3)(e, async () => {
                    let { default: e } = await n.e("811562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: w, ...t });
                });
            },
            [w],
        ),
        e8 = i.useCallback(
            () =>
                T
                    ? (0, l.jsx)(q.Gq, {
                          renderPopout: () => (0, l.jsx)(q.qn, {}),
                          tooltipText: eM.intl.string(eM.t["19lt24"]),
                          position: "top",
                          clickableClassName: r()(tt.Jm, tt.Zz),
                          children: (0, l.jsx)(N.H, { size: "md", color: "currentColor", className: tt.By }),
                      })
                    : (0, l.jsx)(y.D, {
                          tabIndex: 0,
                          className: tt.Jm,
                          onClick: e5,
                          "aria-label": eM.intl.string(eM.t.kbFsAD),
                          children: (0, l.jsx)(ta, { className: tt.By }),
                      }),
            [T, e5],
        ),
        e7 = i.useCallback(
            (e) =>
                (0, l.jsx)(eU, {
                    soundboardListRef: e,
                    categories: eC,
                    shouldUpsellLockedCategories: eD,
                    listPadding: I,
                    guildId: t,
                    inExpressionPicker: T,
                }),
            [eC, I, eD, t, T],
        ),
        e4 = i.useCallback(() => {
            let e = (0, Y.qD)();
            return (0, P.LE)(e, ey.pe.TIER_2) ?? eM.intl.string(eM.t.pj0XBN);
        }, []),
        e9 = i.useCallback(
            () =>
                eG
                    ? (0, l.jsx)(J.d, {
                          showUpsell: ew,
                          text: eJ(),
                          button: e4(),
                          buttonAnalyticsObject: { section: eR.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: er
                              ? (0, l.jsx)(X.l, {
                                    size: "sm",
                                    className: tt.ij,
                                    location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                    forceDarkTheme: !0,
                                })
                              : void 0,
                      })
                    : null,
            [eJ, e4, eG, er, ew],
        ),
        to = i.useCallback(
            (e) =>
                e?.item.type === eo.uq.SOUND
                    ? (0, l.jsx)(e1, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        tu = i.useCallback(() => {
            let e = p.A.getSoundById("3"),
                t = new Audio((0, ec.A)("3"));
            null != L.current && L.current.pause(),
                (L.current = t),
                (t.currentTime = 0),
                (t.volume = (0, ed.A)(e?.volume ?? 1)),
                t.play();
        }, [L]),
        tc = (0, x.bG)([el.A], () => el.A.getMediaSessionId());
    return (
        (0, b.A)({
            type: g.ImpressionTypes.POPOUT,
            name: g.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: O,
                guild_id: t,
                media_session_id: tc,
                available_custom_sounds_count: eT.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eT.lockedCustomSoundCount,
                favorite_sounds_count: eT.favoriteSoundCount,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != G
                    ? (0, l.jsx)(Q.A, {
                          title: eM.intl.string(T ? eM.t.rZEEvU : eM.t.jGDYF0),
                          description: eM.intl.string(T ? eM.t.ZPNG5A : eM.t["grL/hg"]),
                          analyticsLocationSection: eR.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: ey.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...U, object: eR.ZSU.SOUNDBOARD_SOUND },
                              location_stack: k,
                              sku_id: P.Ay.getSkuIdForPremiumType(ey.PremiumTypes.TIER_2),
                          },
                          onClose: () => V(null),
                          onUpsellClicked: o,
                          onDisplay: tu,
                      })
                    : void 0,
                (0, l.jsx)(Z, {
                    categories: ek,
                    collapsedCategories: eF,
                    containerWidth: a,
                    store: M.LW,
                    onSelectItem: ez,
                    onSearchExpressions: e3,
                    hasSearchResults: ej.length > 0,
                    defaultSearchPlaceholder: eM.intl.string(eM.t.sKt3xS),
                    renderRow: eZ,
                    renderSectionHeader: e0,
                    renderSectionFooter: e2,
                    renderSection: eQ,
                    renderCategoryList: e7,
                    renderHeaderAccessories: e8,
                    rowHeight: 48,
                    sectionHeaderHeight: e$,
                    sectionFooterHeight: eX,
                    itemNodeWidth: 150,
                    gridNavigatorId: $,
                    renderEmptySearchState: tr,
                    renderInspector: to,
                    gridNotice: C,
                    renderHeader: v,
                    renderUpsell: e9,
                }),
            ],
        })
    );
}
var tu = n(70317);
function tc(e) {
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
            inExpressionPicker: v,
            soundButtonOverlay: S,
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
        O = v ? void 0 : { height: 520 };
    return (
        i.useEffect(() => {
            b();
        }, [b]),
        i.useEffect(() => {
            v || (0, d.Ri)("");
        }, [v]),
        (0, l.jsx)(c.f5, {
            value: R,
            children: (0, l.jsx)(a.l, {
                style: O,
                className: r()(tu.Nz, { [tu.Bg]: j, [tu.yV]: v }),
                children: j
                    ? (0, l.jsx)(o.y, {})
                    : (0, l.jsx)(to, {
                          guildId: t,
                          channel: n,
                          onClose: g,
                          onSelect: x,
                          shouldValidateSelectedSound: E,
                          containerWidth: s,
                          suppressPlaySound: C,
                          shouldShowLockedSounds: I,
                          gridNotice: y,
                          soundButtonOverlay: S,
                          listPadding: N,
                          renderHeader: _,
                          defaultSoundsOnly: T,
                          inExpressionPicker: v,
                          analyticsSource: A,
                      }),
            }),
        })
    );
}
