"use strict";
n.d(t, { A: () => to });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(305866),
    l = n(289873),
    u = n(793574),
    c = n(688810),
    d = n(151271),
    _ = n(702841),
    h = n(594061),
    f = n(796774),
    p = n(209932);
n(30146);
var E = n(562708),
    m = n(17928),
    g = n(27232),
    A = n(111159),
    I = n(7689),
    T = n(939249),
    S = n(534514),
    y = n(358618),
    C = n(983851),
    N = n(442433),
    v = n(537652),
    R = n(212245),
    O = n(139286),
    b = n(915089),
    D = n(724511),
    L = n(850992),
    w = n(464651),
    M = n(735438),
    P = n(962125),
    x = n(428262),
    k = n(240864),
    U = n(711548);
let G = r.forwardRef(function (e, t) {
        let {
                categories: n,
                store: s,
                hasSearchResults: a,
                listPadding: o,
                renderRow: l,
                renderSection: u,
                renderSectionHeader: c,
                renderSectionFooter: _,
                renderInspector: h,
                renderEmptySearchState: f,
                rowCount: p,
                rowCountBySection: E,
                rowHeight: m,
                sectionHeaderHeight: g,
                sectionFooterHeight: A,
                renderUpsell: I,
                onScroll: T,
            } = e,
            S = r.useRef(!1),
            y = r.useRef(null),
            C = (0, d.RQ)((e) => e.searchQuery),
            N = s.useStore((e) => e.activeCategoryIndex),
            v = r.useMemo(
                () =>
                    n.map((e) =>
                        (0, x.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            R = (0, w.Fk)({
                activeCategoryIndex: N,
                isScrolling: S,
                listRef: y,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: C,
            }),
            O = r.useCallback(
                (e) => {
                    R(e),
                        F({
                            listRef: y,
                            searchQuery: C,
                            nitroLockedSectionStates: v,
                            scrollTop: e,
                            sectionHeaderHeight: g,
                            sectionFooterHeight: A,
                        }),
                        T?.(e);
                },
                [R, C, v, g, A, T],
            );
        return (
            r.useEffect(() => {
                null != y.current && O(y.current.getScrollerNode()?.scrollTop ?? 0);
            }, [O, y]),
            (0, w.FV)({ searchQuery: C, activeCategoryIndex: N, listRef: y }),
            r.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return y.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => y.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => y.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return y.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return y.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return y.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return y.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return y.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, i.jsxs)("div", {
                className: U.i,
                children: [
                    C.length > 0 && !a && null != f
                        ? f()
                        : (0, i.jsx)(P.A, {
                              role: "none presentation",
                              listPadding: o,
                              onScroll: O,
                              renderRow: l,
                              renderSection: u,
                              renderSectionHeader: c,
                              renderSectionFooter: _,
                              rowCount: p,
                              rowCountBySection: E,
                              rowHeight: m,
                              sectionHeaderHeight: g,
                              sectionFooterHeight: A,
                              stickyHeaders: !0,
                              ref: y,
                          }),
                    I?.(),
                    h?.(),
                ],
            })
        );
    }),
    F = (0, M.throttle)(
        function (e) {
            let {
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: i,
                scrollTop: r,
                sectionHeaderHeight: s,
                sectionFooterHeight: a,
            } = e;
            if (null == t.current) return;
            let o = (0, k.s)({
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: i,
                scrollTop: r,
                sectionHeaderHeight: s,
                sectionFooterHeight: a,
            });
            d.RQ.setState({
                isNitroLockedSectionVisible: o.isNitroLockedSectionVisible,
                areOnlyNitroLockedSectionsVisible: o.areOnlyNitroLockedSectionsVisible,
            });
        },
        300,
        { leading: !1, trailing: !0 },
    );
var V = n(942381),
    B = n(602034),
    j = n(892547),
    H = n(387187);
let Y = r.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: s,
            onKeyDown: a,
            gridNavigatorId: o,
            expressionsListRef: l,
            defaultSearchPlaceholder: u,
            emptySearchPlaceholder: c,
        } = e,
        _ = r.useRef(null),
        [h, f] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], V.x),
        p = n.useStore((e) => e.searchPlaceholder),
        [E, m] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], V.x),
        g = r.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : L.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, d.Ri)(e),
                    l.current?.scrollTo(0);
            },
            [l, n],
        ),
        A = r.useCallback(() => {
            g("");
        }, [g]);
    return (
        r.useImperativeHandle(t, () => ({ focus: () => _.current?.focus() })),
        r.useLayoutEffect(() => {
            f && _.current?.focus();
        }, [f]),
        (0, i.jsx)("div", {
            className: H.i,
            children: (0, i.jsx)(j.I, {
                autoFocus: s,
                disabled: !s,
                query: h,
                ref: _,
                placeholder: null != p ? p : s || null == c ? u : c,
                onClear: A,
                onKeyDown: a,
                onChange: g,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": o,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, B.Aq)(o, E.columnIndex, E.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var W = n(456908);
function K(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: s,
            store: a,
            onSelectItem: o,
            onSearchExpressions: l,
            onScroll: u,
            hasSearchResults: c,
            defaultSearchPlaceholder: _,
            emptySearchPlaceholder: h,
            renderEmptyState: f,
            renderRow: p,
            renderSection: E,
            renderSectionHeader: m,
            renderSectionFooter: g,
            renderInspector: A,
            renderEmptySearchState: I,
            renderCategoryList: T,
            renderHeaderAccessories: S,
            rowHeight: y,
            sectionHeaderHeight: C,
            sectionFooterHeight: N,
            itemNodeWidth: v,
            listPaddingRight: R,
            itemNodeMargin: O,
            listPadding: b,
            gridNavigatorId: D,
            gridNotice: L,
            renderHeader: M,
            renderUpsell: P,
        } = e,
        x = r.useRef(null),
        k = r.useRef(null),
        U = r.useRef(null),
        F = 0 === t.length,
        V = (0, d.RQ)((e) => e.searchQuery),
        B = a.useStore((e) => e.inspectedExpressionPosition),
        j = (0, w.oV)({ gridWrapperRef: x, containerWidth: s, showingEmptyState: F }),
        {
            expressionsGrid: H,
            rowCount: K,
            rowCountBySection: $,
            columnCounts: z,
            gutterWidth: q,
        } = (0, w.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: j,
            listPaddingRight: R,
            itemNodeWidth: v,
            itemNodeMargin: O,
        }),
        {
            getItemProps: Z,
            getRowProps: X,
            gridContainerProps: Q,
            handleGridContainerKeyDown: J,
            isUsingKeyboardNavigation: ee,
        } = (0, w.JZ)({
            columnCounts: z,
            expressionsListRef: k,
            expressionsGrid: H,
            onSelectItem: o,
            store: a,
            gridNavigatorId: D,
        }),
        et = r.useCallback(
            (e, t) =>
                p(
                    H[e],
                    X(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: q,
                        rowIndex: e,
                        totalRowCount: K,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => Z(e, t),
                    (t) => a.setInspectedExpressionPosition(t, e),
                ),
            [H, Z, X, q, ee, p, a, K],
        ),
        en = r.useCallback((e) => m?.(t[e], e), [t, m]),
        ei = r.useCallback((e) => g?.(t[e], e), [t, g]),
        er = r.useCallback(() => A?.(H?.[B.rowIndex]?.[B.columnIndex]), [H, B.columnIndex, B.rowIndex, A]);
    r.useEffect(() => {
        l(V);
    }, [l, V]),
        r.useEffect(() => {
            a.setBottomPosition(x.current?.getBoundingClientRect().bottom ?? null);
        }),
        r.useEffect(() => a.resetStoreState, [a.resetStoreState]),
        r.useLayoutEffect(() => {
            U.current?.focus();
        }, []);
    let es = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(Y, {
                ref: U,
                store: a,
                hasSendableExpressions: !0,
                onKeyDown: J,
                expressionsListRef: k,
                gridNavigatorId: D,
                defaultSearchPlaceholder: _,
                emptySearchPlaceholder: h,
            }),
            S?.(),
        ],
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != M ? M(es) : (0, i.jsxs)("div", { className: W.wx, children: [" ", es, " "] }),
            F && null != f
                ? f(W.p$)
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          T(k),
                          null != L && (0, i.jsx)("div", { className: W.Eb, children: L }),
                          (0, i.jsx)("div", {
                              ref: x,
                              className: W.AD,
                              id: D,
                              ...Q,
                              children:
                                  null != j
                                      ? (0, i.jsx)(G, {
                                            categories: t,
                                            ref: k,
                                            store: a,
                                            hasSearchResults: c,
                                            listPadding: b,
                                            renderRow: et,
                                            renderSection: E,
                                            renderSectionHeader: null != m ? en : void 0,
                                            renderSectionFooter: null != g ? ei : void 0,
                                            renderInspector: null != A ? er : void 0,
                                            renderEmptySearchState: I,
                                            rowCount: K,
                                            rowCountBySection: $,
                                            rowHeight: y,
                                            sectionHeaderHeight: C,
                                            sectionFooterHeight: N,
                                            renderUpsell: P,
                                            onScroll: u,
                                        })
                                      : null,
                          }),
                      ],
                  }),
        ],
    });
}
var $ = n(89366),
    z = n(319993),
    q = n(202639),
    Z = n(414872),
    X = n(400669),
    Q = n(2181),
    J = n(523006),
    ee = n(885386),
    et = n(909536),
    en = n(763827),
    ei = n(287809),
    er = n(977997),
    es = n(147925),
    ea = n(174459),
    eo = n(807348),
    el = n(813564),
    eu = n(102597),
    ec = n(904054),
    ed = n(147472);
n(321073);
var e_ = n(931991),
    eh = n(71393),
    ef = n(576705),
    ep = n(473145),
    eE = n(805143),
    em = n(935208);
function eg(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => em.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eA = n(980504),
    eI = n(788868);
function eT(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: eo.uq.SOUND, sound: e, index: t }));
}
function eS(e, t) {
    let n = t.get("0") ?? eA.pD;
    e.push({ key: eo.Cx.DEFAULTS, categoryInfo: { type: eo.Cx.DEFAULTS }, items: eT(n, eg) });
}
var ey = n(837381),
    eC = n(990078),
    eN = n(802019),
    ev = n(407698),
    eR = n(652215),
    eO = n(698279),
    eb = n(375708),
    eD = n(917419);
let eL = [8, 8, 8, 8];
function ew(e) {
    let { icon: t, isSelected: n, onClick: r, listItemProps: s } = e;
    return (0, i.jsx)(T.D, {
        ...s,
        onClick: r,
        className: a()(eD.Yl, { [eD.wH]: n }),
        children: (0, i.jsx)(t, { className: eD.xi, color: "currentColor" }),
    });
}
function eM(e, t, n, r, s) {
    switch (e.categoryInfo.type) {
        case eo.Cx.FAVORITES:
            return (0, i.jsx)(ew, { icon: g.G, onClick: t, isSelected: n, listItemProps: r }, e.key);
        case eo.Cx.GUILD:
            return (0, i.jsx)(
                T.D,
                {
                    ...r,
                    className: eD.L1,
                    onClick: t,
                    children: (0, i.jsx)(D.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case eo.Cx.DEFAULTS:
            return (0, i.jsx)(ew, { icon: A.p, onClick: t, isSelected: n, listItemProps: r }, e.key);
        default:
            return null;
    }
}
function eP(e) {
    let { category: t, categoryIndex: n, onClick: r, isSelected: s, isNitroLocked: a } = e,
        o = (0, ey.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === eo.Cx.GUILD
        ? (0, i.jsx)(ev.Q, { guild: t.categoryInfo.guild, children: eM(t, r, s, o, a) })
        : (0, i.jsx)(eC.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case eo.Cx.FAVORITES:
                          return eb.intl.string(eb.t.k8fFjp);
                      case eo.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case eo.Cx.DEFAULTS:
                          return eb.intl.string(eb.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: eM(t, r, s, o, a),
          });
}
function ex(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: o = eL,
            guildId: l,
            inExpressionPicker: u,
        } = e,
        c = r.useRef(null),
        d = (0, m.bG)([ei.default], () => ei.default.getCurrentUser()),
        _ = (0, x.TW)(d, eI.PremiumTypes.TIER_2),
        h = r.useCallback(
            (e, t, n, r) => {
                let a = s && tt(e.categoryInfo, _, l);
                return (0, i.jsx)(eP, {
                    category: e,
                    categoryIndex: t,
                    onClick: () => {
                        ea.default.track(eR.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eR.liQ.SOUNDBOARD_POPOUT },
                            guild_id: l ?? null,
                            num_expressions: e.items.length,
                            tab: eO.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n();
                    },
                    isSelected: r,
                    isNitroLocked: a,
                });
            },
            [l, s, _],
        );
    return (0, i.jsx)(eN.A, {
        className: a()(u ? eD.HZ : eD.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: L.LW,
        categories: n,
        listPadding: o,
        renderCategoryListItem: h,
        rowCount: n.length,
        categoryHeight: 40,
    });
}
var ek = n(554146),
    eU = n(191023),
    eG = n(192308),
    eF = n(349288),
    eV = n(695366),
    eB = n(834730),
    ej = n(789645),
    eH = n(565645),
    eY = n(775602),
    eW = n(826673),
    eK = n(182922),
    e$ = n(532624),
    ez = n(531685),
    eq = n(723702),
    eZ = n(350535),
    eX = n(319518);
function eQ(e) {
    let { soundboardSound: t, closePicker: r } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        a = (0, _.bG)([p.A], () => null != t && p.A.isFavoriteSound(t.soundId)),
        o = (0, _.bG)([eh.A], () => eh.A.getGuild(t?.guildId)),
        l = (0, _.bG)([eY.Ay], () => eY.Ay.useReducedMotion, []),
        u = (0, _.bG)([ez.A], () => ez.A.isFocused()),
        c = (0, _.bG)([e$.Ay], () => e$.Ay.getKeybindForAction(eR.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, i.jsx)(eK.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, i.jsx)(eH.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: eX.Zg })
                    : (0, i.jsx)(eU.x, { size: "md", color: "currentColor", className: eX.Zg }),
            graphicSecondary: null != o ? (0, i.jsx)(D.A, { guild: o, shouldAnimate: !l && u }) : null,
            titlePrimary: t.name,
            titleSecondary: o?.name,
            isFavorite: a,
        });
    let h = () => {
            r(),
                (0, eG.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("14144"),
                        n.e("72425"),
                        n.e("46327"),
                        n.e("12618"),
                    ]).then(n.bind(n, 29681));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        },
        f = (0, eW.k8)(ek.M.SOUNDBOARD_KEYBIND_TIP),
        E =
            null != c && (0, eq.isWindows)() && !f
                ? eb.intl.format(eb.t.udMTth, {
                      keybind: (0, eZ.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, i.jsx)(eF.Anchor, { onClick: h, children: e }, t),
                  })
                : null;
    return null == E
        ? null
        : (0, i.jsxs)("div", {
              className: eX.g,
              children: [
                  (0, i.jsx)(eV.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eX.QW }),
                  (0, i.jsx)(eB.E, { variant: "text-sm/medium", color: "text-default", className: eX.L5, children: E }),
                  (0, i.jsx)(T.D, {
                      className: eX.b,
                      onClick: () => (0, eW.Dr)(ek.M.SOUNDBOARD_KEYBIND_TIP),
                      children: (0, i.jsx)(ej.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var eJ = n(805945),
    e0 = n(890856),
    e1 = n(307301),
    e2 = n(468689);
function e3(e) {
    e2.A.open(e, eR.BEX.SOUNDBOARD),
        (0, eG.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("16227"),
                n.e("26543"),
                n.e("82546"),
                n.e("76846"),
                n.e("33973"),
                n.e("7792"),
                n.e("8555"),
                n.e("20287"),
                n.e("83952"),
                n.e("66580"),
                n.e("8979"),
                n.e("20643"),
                n.e("69006"),
                n.e("98913"),
                n.e("74049"),
                n.e("80559"),
                n.e("12811"),
            ]).then(n.bind(n, 191110));
            return (n) => (0, i.jsx)(t, { ...n, guildId: e });
        });
}
var e6 = n(757718),
    e4 = n(508387);
function e5(e) {
    let { guild: t, focused: n, onSelectItem: r, ...s } = e,
        { canCreateExpressions: o } = (0, e_.nr)(t);
    return (0, i.jsx)(eC.m, {
        text: eb.intl.string(eb.t["fHo+z1"]),
        shouldShow: !o,
        children: (0, i.jsx)("li", {
            className: e6.H,
            children: (0, i.jsxs)(e0.s, {
                ...s,
                "aria-label": eb.intl.formatToPlainString(eb.t.c1qVYh, { guildName: t.name }),
                className: a()(e4.n4, { [e4.in]: n, [e4.r9]: !o }),
                onClick: () => (null != r ? r() : e3(t.id)),
                children: [
                    (0, i.jsx)(e1.j, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(eB.E, {
                        variant: "text-xs/semibold",
                        color: o ? "currentColor" : "text-muted",
                        children: eb.intl.string(eb.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function e7(e) {
    let {
            descriptor: t,
            soundButtonProps: n,
            rowIndex: i,
            columnIndex: s,
            isUsingKeyboardNavigation: a,
            suppressPlaySound: o,
            getItemProps: l,
            onSelectItem: u,
            onItemMouseEnter: c,
            buttonOverlay: d,
            isNitroLocked: _,
            showLockForDisabledSound: h,
            inExpressionPicker: f,
        } = e,
        p = L.LW.useStore((e) => e.inspectedExpressionPosition),
        E = `${i}-${s}`,
        m = a && p.rowIndex === i && p.columnIndex === s;
    switch (t.item.type) {
        case eo.uq.SOUND:
            return (0, r.createElement)(eJ.Ay, {
                ...l(s),
                ...n,
                key: E,
                sound: t.item.sound,
                suppressPlaySound: o,
                focused: m,
                onMouseEnter: () => c(s),
                onSelectItem: (e) => u(t, e),
                enableSecondaryActions: !0,
                buttonOverlay: d,
                inNitroLockedSection: _,
                showLockForDisabledSound: h,
                isSoundmoji: !0 === f,
            });
        case eo.uq.ADD_SOUND:
            return (0, r.createElement)(e5, {
                ...l(s),
                key: E,
                guild: t.item.guild,
                focused: m,
                onSelectItem: () => u(t),
            });
    }
}
var e8 = n(965238);
let e9 = 32 + Z.kg - 8,
    te = {
        [eo.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [eo.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [eo.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [eo.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
    };
function tt(e, t, n) {
    return (null == n && e.type === eo.Cx.GUILD && !t) || (e.type === eo.Cx.GUILD && e.guild.id !== n && !t);
}
function tn(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: r, isSectionNitroLocked: s, showNitroDivider: o } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            o && (0, i.jsx)(Z.Ay, { className: e8.yH }),
            (0, i.jsx)("div", {
                className: a()(e8.hd, { [e8.Jb]: s, [e8.VD]: s }),
                children: (0, i.jsx)(T.D, {
                    className: e8.bV,
                    onClick: r,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, i.jsxs)("div", {
                        className: e8.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case eo.Cx.FAVORITES:
                                        return (0, i.jsx)(g.G, { size: "xs", color: "currentColor", className: e8.nr });
                                    case eo.Cx.GUILD:
                                        return (0, i.jsx)(D.A, { guild: t.guild, height: 16, width: 16 });
                                    case eo.Cx.DEFAULTS:
                                        return (0, i.jsx)(A.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: e8.nr,
                                        });
                                    case eo.Cx.SEARCH:
                                        return (0, i.jsx)(I.$, { size: "md", color: "currentColor", className: e8.nr });
                                }
                            })(),
                            (0, i.jsx)(S.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: e8.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case eo.Cx.FAVORITES:
                                            return eb.intl.string(eb.t.k8fFjp);
                                        case eo.Cx.GUILD:
                                            return t.guild.name;
                                        case eo.Cx.DEFAULTS:
                                            return eb.intl.string(eb.t.Rtvk9X);
                                        case eo.Cx.SEARCH:
                                            return eb.intl.string(eb.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, i.jsx)(es.A, {
                                className: e8.nr,
                                direction: n ? es.A.Directions.RIGHT : es.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function ti() {
    return (0, i.jsx)(v.A, { message: eb.intl.string(eb.t.bgDdNK) });
}
function tr(e) {
    let { className: t } = e,
        n = (0, m.bG)([p.A], () => p.A.isSoundboardVolumeMuted()) ? y._ : C.H;
    return (0, i.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function ts(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: o,
            onClose: l,
            onSelect: _,
            shouldValidateSelectedSound: h = !1,
            suppressPlaySound: f = !1,
            shouldShowLockedSounds: g = !0,
            gridNotice: A,
            soundButtonOverlay: I,
            listPadding: S,
            renderHeader: y,
            defaultSoundsOnly: v = !1,
            inExpressionPicker: D,
            analyticsSource: w,
        } = e,
        { audioRef: M } = r.useContext(J.A),
        { analyticsLocations: P } = (0, c.Ay)(),
        { analyticsLocations: k } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: U } = (0, R.p)(),
        G = r.useMemo(() => ({ ...U, section: eR.JJy.SOUNDBOARD_SOUND_PICKER }), [U]),
        [F, V] = r.useState(null),
        B = (0, m.bG)([ei.default], () => ei.default.getCurrentUser()),
        j = (0, x.TW)(B, eI.PremiumTypes.TIER_2),
        H = (0, m.bG)([er.A], () => er.A.getVoiceState(t, B?.id ?? eR.dJq)),
        Y = H?.selfDeaf || H?.mute || H?.suppress,
        W = (0, d.RQ)((e) => e.searchQuery),
        Z = null != W && "" !== W,
        es = (0, b.GV)(),
        em = (0, et.St)("soundboard_floating_upsell"),
        {
            categories: ey,
            availableSounds: eC,
            soundCounts: eN,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = (0, m.bG)([ei.default], () => ei.default.getCurrentUser()),
                s = x.Ay.isPremium(i, eI.PremiumTypes.TIER_2),
                [a, o, l] = (0, m.yK)([p.A], () => [p.A.getSounds(), p.A.getFavorites(), p.A.isFetching()]),
                u = (0, eE.Y)(e, !1),
                c = (0, m.yK)([eh.A], () => {
                    let e = [];
                    return (
                        u.forEach((t) => {
                            let n = eh.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                d = x.Ay.canUseSoundboardEverywhere(i),
                _ = (0, m.bG)([eh.A], () => eh.A.getGuild(e?.guild_id)),
                h = (0, m.bG)([ef.A], () => {
                    let { canCreateExpressions: e } = (0, e_.ie)(_);
                    return e;
                }, [_]);
            return r.useMemo(() => {
                let e = 0,
                    i = 0,
                    r = [];
                return n
                    ? (eS(r, a),
                      {
                          categories: r,
                          availableSounds: a.get("0") ?? eA.pD,
                          isFetching: l,
                          soundCounts: {
                              favoriteSoundCount: 0,
                              unlockedCustomSoundCount: 0,
                              lockedCustomSoundCount: 0,
                          },
                      })
                    : (!(function (e) {
                          let {
                                  sections: t,
                                  guildIds: n,
                                  allSounds: i,
                                  potentialSoundIdsForSection: r,
                                  sectionType: s,
                                  sortSoundsFn: a,
                              } = e,
                              o = {};
                          for (let e of [...n, "0"])
                              for (let t of i.get(e) ?? [])
                                  null != r.find((e) => e === t.soundId) && (o[t.soundId] = t);
                          let l = [];
                          for (let e of r) {
                              let t = o[e];
                              null != t && l.push(t);
                          }
                          let u = eT(l, a);
                          u.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: u });
                      })({
                          sections: r,
                          guildIds: u,
                          allSounds: a,
                          potentialSoundIdsForSection: Array.from(o),
                          sectionType: eo.Cx.FAVORITES,
                          sortSoundsFn: eg,
                      }),
                      void 0 !== _ &&
                          (function (e, t, n) {
                              let {
                                      currentGuildHasAddPermissions: i,
                                      allSounds: r,
                                      filterOutEmptyCurrentGuild: s,
                                      sortSoundsFn: a,
                                  } = n,
                                  o = r.get(t.id) ?? [],
                                  l = eT(o, a),
                                  u = o.length < (0, ep.fA)(t) && i,
                                  c = 0 === l.length;
                              (u || c) && !s && l.push({ type: eo.uq.ADD_SOUND, guild: t }),
                                  (s && c) ||
                                      e.push({
                                          categoryInfo: { type: eo.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: l,
                                      });
                          })(r, _, {
                              currentGuildHasAddPermissions: h,
                              allSounds: a,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: eg,
                          }),
                      d || eS(r, a),
                      !(function (e) {
                          let {
                              sections: t,
                              guilds: n,
                              currentGuildId: i,
                              allSounds: r,
                              hasNitro: s,
                              sortSoundsFn: a,
                          } = e;
                          for (let e of n) {
                              if (e.id === i) continue;
                              let n = eT(r.get(e.id) ?? [], a);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: eo.Cx.GUILD, guild: e, isNitroLocked: !s },
                                      key: e.id,
                                      items: n,
                                  });
                          }
                      })({
                          sections: r,
                          guilds: c,
                          currentGuildId: _?.id,
                          allSounds: a,
                          hasNitro: s,
                          sortSoundsFn: eg,
                      }),
                      d && eS(r, a),
                      r.forEach((t) => {
                          t.categoryInfo.type === eo.Cx.GUILD &&
                              (t.categoryInfo.isNitroLocked ? (i += t.items.length) : (e += t.items.length));
                      }),
                      {
                          categories: r,
                          availableSounds: Array.from(a.values()).flat(),
                          isFetching: l,
                          soundCounts: {
                              favoriteSoundCount: o.size,
                              unlockedCustomSoundCount: e,
                              lockedCustomSoundCount: i,
                          },
                      });
            }, [u, a, o, _, h, t, d, c, n, l, s, eg]);
        })(s, void 0, v),
        [ev, eD] = r.useState([]),
        eL = r.useMemo(
            () => (W.length > 0 ? [{ key: eo.Cx.SEARCH, categoryInfo: { type: eo.Cx.SEARCH }, items: eT(ev) }] : ey),
            [ey, W.length, ev],
        ),
        ew = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eM = r.useMemo(() => eL.filter((e) => e.items.length > 0), [eL]),
        eP = r.useMemo(
            () => eM.findLastIndex((e) => !!(0, x.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eM],
        ),
        ek = !j && g && -1 !== eP,
        eU = !j && g && -1 !== eP,
        eG = ee.b0.useSetting(),
        eF = r.useMemo(() => new Set(eG), [eG]),
        eV = null == s,
        eB = x.Ay.canUseCustomCallSounds(B),
        ej = r.useCallback(
            (e) => {
                eF.has(e) ? eF.delete(e) : eF.add(e), ee.b0.updateSetting(Array.from(eF));
            },
            [eF],
        ),
        eH = r.useCallback(
            (e, t, n, i) => {
                if (null != _ && !h) return _(e, n);
                let r = (0, el.Ir)(B, e, s, !1);
                if (null != _ && h && r) _(e, n);
                else if (!f && r && (0, el.Au)(s))
                    (0, el.Ak)(e, s?.id ?? eR.dJq, t, i),
                        Z &&
                            ea.default.track(eR.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eR.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: W,
                                location_stack: t,
                            });
                else {
                    if ((0, el.Ir)(B, e, s)) return;
                    g && V(e);
                }
            },
            [f, B, s, g, Z, W, _, h],
        ),
        eY = r.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case eo.uq.SOUND:
                        let n = te[e?.category] ?? null,
                            i = e?.item.index;
                        return eH(e.item.sound, null == n ? P : [...P, n], t?.shiftKey !== !0, i);
                    case eo.uq.ADD_SOUND:
                        return l(), e3(e.item.guild.id);
                }
            },
            [P, eH, l],
        ),
        eW = r.useCallback(
            (e, n, r, o, l) => {
                let u = eM[r.sectionIndex],
                    c = g && tt(u.categoryInfo, j, t) && ek;
                return (0, i.jsx)(
                    "ul",
                    {
                        ...n,
                        className: a()(e8.a, { [e8.uL]: c }),
                        children: e.map((e, t) =>
                            (0, i.jsx)(
                                e7,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eV ? eB : !Y,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: P,
                                    },
                                    rowIndex: r.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: r.isUsingKeyboardNavigation,
                                    suppressPlaySound: f,
                                    getItemProps: o,
                                    onSelectItem: eY,
                                    onItemMouseEnter: l,
                                    buttonOverlay: I,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: g,
                                    inExpressionPicker: D,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eM, g, j, t, f, eY, s, eV, eB, Y, P, I, ek, D],
        ),
        eK = r.useCallback(
            (e, t) => {
                if (e <= 0 || !g) return !1;
                let n = eM[e],
                    i = eM[e - 1],
                    r = tt(n.categoryInfo, j, t),
                    s = tt(i.categoryInfo, j, t);
                return r && !s;
            },
            [eM, g, j],
        ),
        e$ = r.useCallback(() => {
            let e = p.A.getSoundById("3");
            null != e && V(e);
        }, []),
        ez = r.useCallback(() => {
            let e = (0, x.Dd)(eI.PremiumTypes.TIER_2);
            return eb.intl.format(eb.t["tw/SSq"], { nitroTierName: e, onClick: e$ });
        }, [e$]),
        eq = r.useCallback((e) => (eK(e, t) ? e9 : 32), [t, eK]),
        eZ = r.useCallback(
            (e) => {
                let t = e === eM.length - 1;
                return eU && t ? 70 : ek && e === eP ? 20 : 0;
            },
            [eM.length, ek, eU, eP],
        ),
        eX = r.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
        eJ = r.useCallback(
            (e, n) => {
                let r = `${e.key}`,
                    s = g && tt(e.categoryInfo, j, t),
                    a = eK(n, t),
                    o = eF.has(r);
                return (0, i.jsx)(
                    tn,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => {
                            ea.default.track(eR.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eR.liQ.SOUNDBOARD_POPOUT },
                                tab: eO.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !o,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                ej(r);
                        },
                        collapsed: o,
                        isSectionNitroLocked: s && ek,
                        showNitroDivider: a && ek,
                    },
                    `header-${r}`,
                );
            },
            [eF, ej, t, eK, g, j, ek],
        ),
        e0 = r.useCallback(
            (e, t) => {
                let n = t === eM.length - 1,
                    r = t === eP;
                return eU && n
                    ? (0, i.jsx)("div", { className: a()(e8.Lk, { [e8.Ns]: r }) })
                    : ek && t === eP
                      ? (0, i.jsx)("div", { className: a()(e8.a3, { [e8.Ns]: r }) })
                      : null;
            },
            [eP, ek, eU, eM.length],
        ),
        e1 = r.useCallback((e) => eD((0, ed.lG)(e, eC, B, s, P)), [s, B, eC, P]),
        e2 = r.useCallback(
            (e) => {
                (0, N.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: P, ...t });
                });
            },
            [P],
        ),
        e6 = r.useCallback(
            () =>
                D
                    ? (0, i.jsx)(z.Gq, {
                          renderPopout: () => (0, i.jsx)(z.qn, {}),
                          tooltipText: eb.intl.string(eb.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(e8.Jm, e8.Zz),
                          children: (0, i.jsx)(C.H, { size: "md", color: "currentColor", className: e8.By }),
                      })
                    : (0, i.jsx)(T.D, {
                          tabIndex: 0,
                          className: e8.Jm,
                          onClick: e2,
                          "aria-label": eb.intl.string(eb.t.kbFsAD),
                          children: (0, i.jsx)(tr, { className: e8.By }),
                      }),
            [D, e2],
        ),
        e4 = r.useCallback(
            (e) =>
                (0, i.jsx)(ex, {
                    soundboardListRef: e,
                    categories: ey,
                    shouldUpsellLockedCategories: ek,
                    listPadding: S,
                    guildId: t,
                    inExpressionPicker: D,
                }),
            [ey, S, ek, t, D],
        ),
        e5 = r.useCallback(() => {
            let e = (0, $.qD)();
            return (0, x.LE)(e, eI.pe.TIER_2) ?? eb.intl.string(eb.t.pj0XBN);
        }, []),
        ts = r.useCallback(
            () =>
                eU
                    ? (0, i.jsx)(q.d, {
                          showUpsell: ew,
                          text: ez(),
                          button: e5(),
                          buttonAnalyticsObject: { section: eR.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: em
                              ? (0, i.jsx)(X.l, {
                                    size: "sm",
                                    className: e8.ij,
                                    location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                    forceDarkTheme: !0,
                                })
                              : void 0,
                      })
                    : null,
            [ez, e5, eU, em, ew],
        ),
        ta = r.useCallback(
            (e) =>
                e?.item.type === eo.uq.SOUND
                    ? (0, i.jsx)(eQ, { closePicker: l, soundboardSound: e?.item.sound ?? null })
                    : null,
            [l],
        ),
        to = r.useCallback(() => {
            let e = p.A.getSoundById("3"),
                t = new Audio((0, eu.A)("3"));
            null != M.current && M.current.pause(),
                (M.current = t),
                (t.currentTime = 0),
                (t.volume = (0, ec.A)(e?.volume ?? 1)),
                t.play();
        }, [M]),
        tl = (0, m.bG)([en.A], () => en.A.getMediaSessionId());
    return (
        (0, O.A)({
            type: E.ImpressionTypes.POPOUT,
            name: E.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: w,
                guild_id: t,
                media_session_id: tl,
                available_custom_sounds_count: eN.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eN.lockedCustomSoundCount,
                favorite_sounds_count: eN.favoriteSoundCount,
            },
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != F
                    ? (0, i.jsx)(Q.A, {
                          title: eb.intl.string(D ? eb.t.rZEEvU : eb.t.jGDYF0),
                          description: eb.intl.string(D ? eb.t.ZPNG5A : eb.t["grL/hg"]),
                          analyticsLocationSection: eR.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eI.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...G, object: eR.ZSU.SOUNDBOARD_SOUND },
                              location_stack: k,
                              sku_id: x.Ay.getSkuIdForPremiumType(eI.PremiumTypes.TIER_2),
                          },
                          onClose: () => V(null),
                          onUpsellClicked: l,
                          onDisplay: to,
                      })
                    : void 0,
                (0, i.jsx)(K, {
                    categories: eM,
                    collapsedCategories: eF,
                    containerWidth: o,
                    store: L.LW,
                    onSelectItem: eY,
                    onSearchExpressions: e1,
                    hasSearchResults: ev.length > 0,
                    defaultSearchPlaceholder: eb.intl.string(eb.t.sKt3xS),
                    renderRow: eW,
                    renderSectionHeader: eJ,
                    renderSectionFooter: e0,
                    renderSection: eX,
                    renderCategoryList: e4,
                    renderHeaderAccessories: e6,
                    rowHeight: 48,
                    sectionHeaderHeight: eq,
                    sectionFooterHeight: eZ,
                    itemNodeWidth: 150,
                    gridNavigatorId: es,
                    renderEmptySearchState: ti,
                    renderInspector: ta,
                    gridNotice: A,
                    renderHeader: y,
                    renderUpsell: ts,
                }),
            ],
        })
    );
}
var ta = n(367720);
function to(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: s,
            onClose: E,
            onSelect: m,
            analyticsSource: g,
            suppressPlaySound: A,
            shouldValidateSelectedSound: I,
            shouldShowLockedSounds: T = !0,
            gridNotice: S,
            inExpressionPicker: y,
            soundButtonOverlay: C,
            listPadding: N,
            renderHeader: v,
            defaultSoundsOnly: R,
        } = e,
        { fetching: O, maybeFetchData: b } = {
            fetching: (0, _.bG)([p.A], () => p.A.isFetchingAnySounds()),
            maybeFetchData: r.useCallback(() => {
                f.E7(), h.bW.loadIfNecessary();
            }, []),
        },
        { analyticsLocations: D } = (0, c.Ay)(u.A.SOUNDBOARD_POPOUT);
    return (
        r.useEffect(() => {
            b();
        }, [b]),
        r.useEffect(() => {
            y || (0, d.Ri)("");
        }, [y]),
        (0, i.jsx)(c.f5, {
            value: D,
            children: (0, i.jsx)(o.l, {
                className: a()(ta.Nz, { [ta.Bg]: O, [ta.yV]: y }),
                children: O
                    ? (0, i.jsx)(l.y, {})
                    : (0, i.jsx)(ts, {
                          guildId: t,
                          channel: n,
                          onClose: E,
                          onSelect: m,
                          shouldValidateSelectedSound: I,
                          containerWidth: s,
                          suppressPlaySound: A,
                          shouldShowLockedSounds: T,
                          gridNotice: S,
                          soundButtonOverlay: C,
                          listPadding: N,
                          renderHeader: v,
                          defaultSoundsOnly: R,
                          inExpressionPicker: y,
                          analyticsSource: g,
                      }),
            }),
        })
    );
}
