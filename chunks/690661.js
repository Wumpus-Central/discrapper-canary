"use strict";
n.d(t, { A: () => tu });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(305866),
    l = n(289873),
    u = n(793574),
    c = n(688810),
    d = n(151271);
let _ = (0, n(945810).mj)({
    kind: "user",
    name: "2026-06-soundboard-picker-height",
    defaultConfig: { extraHeightPx: 0 },
    variations: { 1: { extraHeightPx: 100 } },
});
var h = n(702841),
    f = n(594061),
    p = n(796774),
    E = n(209932);
n(30146);
var m = n(562708),
    g = n(17928),
    A = n(27232),
    I = n(111159),
    T = n(7689),
    S = n(939249),
    y = n(534514),
    C = n(358618),
    N = n(983851),
    v = n(442433),
    R = n(537652),
    O = n(212245),
    b = n(139286),
    D = n(915089),
    L = n(724511),
    w = n(850992),
    M = n(464651),
    P = n(735438),
    x = n(962125),
    k = n(428262),
    U = n(240864),
    G = n(711548);
let F = r.forwardRef(function (e, t) {
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
                        (0, k.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            R = (0, M.Fk)({
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
                        V({
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
            (0, M.FV)({ searchQuery: C, activeCategoryIndex: N, listRef: y }),
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
                className: G.i,
                children: [
                    C.length > 0 && !a && null != f
                        ? f()
                        : (0, i.jsx)(x.A, {
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
    V = (0, P.throttle)(
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
            let o = (0, U.s)({
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
var B = n(942381),
    j = n(602034),
    H = n(892547),
    Y = n(387187);
let W = r.forwardRef(function (e, t) {
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
        [h, f] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], B.x),
        p = n.useStore((e) => e.searchPlaceholder),
        [E, m] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], B.x),
        g = r.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : w.Uk),
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
            className: Y.i,
            children: (0, i.jsx)(H.I, {
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
                    ...(m ? { "aria-activedescendant": (0, j.Aq)(o, E.columnIndex, E.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var K = n(456908);
function $(e) {
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
            renderHeader: w,
            renderUpsell: P,
        } = e,
        x = r.useRef(null),
        k = r.useRef(null),
        U = r.useRef(null),
        G = 0 === t.length,
        V = (0, d.RQ)((e) => e.searchQuery),
        B = a.useStore((e) => e.inspectedExpressionPosition),
        j = (0, M.oV)({ gridWrapperRef: x, containerWidth: s, showingEmptyState: G }),
        {
            expressionsGrid: H,
            rowCount: Y,
            rowCountBySection: $,
            columnCounts: z,
            gutterWidth: q,
        } = (0, M.se)({
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
        } = (0, M.JZ)({
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
                        totalRowCount: Y,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => Z(e, t),
                    (t) => a.setInspectedExpressionPosition(t, e),
                ),
            [H, Z, X, q, ee, p, a, Y],
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
            (0, i.jsx)(W, {
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
            null != w ? w(es) : (0, i.jsxs)("div", { className: K.wx, children: [" ", es, " "] }),
            G && null != f
                ? f(K.p$)
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          T(k),
                          null != L && (0, i.jsx)("div", { className: K.Eb, children: L }),
                          (0, i.jsx)("div", {
                              ref: x,
                              className: K.AD,
                              id: D,
                              ...Q,
                              children:
                                  null != j
                                      ? (0, i.jsx)(F, {
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
                                            rowCount: Y,
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
var z = n(89366),
    q = n(754998),
    Z = n(319993),
    X = n(202639),
    Q = n(414872),
    J = n(400669),
    ee = n(2181),
    et = n(523006),
    en = n(885386),
    ei = n(909536),
    er = n(763827),
    es = n(287809),
    ea = n(977997),
    eo = n(147925),
    el = n(174459),
    eu = n(807348),
    ec = n(813564),
    ed = n(102597),
    e_ = n(904054),
    eh = n(147472);
n(321073);
var ef = n(931991),
    ep = n(71393),
    eE = n(576705),
    em = n(473145),
    eg = n(805143),
    eA = n(935208);
function eI(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => eA.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eT = n(980504),
    eS = n(788868);
function ey(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: eu.uq.SOUND, sound: e, index: t }));
}
function eC(e, t) {
    let n = t.get("0") ?? eT.pD;
    e.push({ key: eu.Cx.DEFAULTS, categoryInfo: { type: eu.Cx.DEFAULTS }, items: ey(n, eI) });
}
var eN = n(837381),
    ev = n(990078),
    eR = n(802019),
    eO = n(407698),
    eb = n(652215),
    eD = n(698279),
    eL = n(375708),
    ew = n(917419);
let eM = [8, 8, 8, 8];
function eP(e) {
    let { icon: t, isSelected: n, onClick: r, listItemProps: s } = e;
    return (0, i.jsx)(S.D, {
        ...s,
        onClick: r,
        className: a()(ew.Yl, { [ew.wH]: n }),
        children: (0, i.jsx)(t, { className: ew.xi, color: "currentColor" }),
    });
}
function ex(e, t, n, r, s) {
    switch (e.categoryInfo.type) {
        case eu.Cx.FAVORITES:
            return (0, i.jsx)(eP, { icon: A.G, onClick: t, isSelected: n, listItemProps: r }, e.key);
        case eu.Cx.GUILD:
            return (0, i.jsx)(
                S.D,
                {
                    ...r,
                    className: ew.L1,
                    onClick: t,
                    children: (0, i.jsx)(L.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case eu.Cx.DEFAULTS:
            return (0, i.jsx)(eP, { icon: I.p, onClick: t, isSelected: n, listItemProps: r }, e.key);
        default:
            return null;
    }
}
function ek(e) {
    let { category: t, categoryIndex: n, onClick: r, isSelected: s, isNitroLocked: a } = e,
        o = (0, eN.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === eu.Cx.GUILD
        ? (0, i.jsx)(eO.Q, { guild: t.categoryInfo.guild, children: ex(t, r, s, o, a) })
        : (0, i.jsx)(ev.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case eu.Cx.FAVORITES:
                          return eL.intl.string(eL.t.k8fFjp);
                      case eu.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case eu.Cx.DEFAULTS:
                          return eL.intl.string(eL.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: ex(t, r, s, o, a),
          });
}
function eU(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: o = eM,
            guildId: l,
            inExpressionPicker: u,
        } = e,
        c = r.useRef(null),
        d = (0, g.bG)([es.default], () => es.default.getCurrentUser()),
        _ = (0, k.TW)(d, eS.PremiumTypes.TIER_2),
        h = r.useCallback(
            (e, t, n, r) => {
                let a = s && ti(e.categoryInfo, _, l);
                return (0, i.jsx)(ek, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        el.default.track(eb.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eb.liQ.SOUNDBOARD_POPOUT },
                            guild_id: l ?? null,
                            num_expressions: e.items.length,
                            tab: eD.kx.SOUNDBOARD,
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
    return (0, i.jsx)(eR.A, {
        className: a()(u ? ew.HZ : ew.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: w.LW,
        categories: n,
        listPadding: o,
        renderCategoryListItem: h,
        rowCount: n.length,
        categoryHeight: 40,
    });
}
var eG = n(554146),
    eF = n(191023),
    eV = n(192308),
    eB = n(349288),
    ej = n(695366),
    eH = n(834730),
    eY = n(789645),
    eW = n(565645),
    eK = n(775602),
    e$ = n(826673),
    ez = n(182922),
    eq = n(532624),
    eZ = n(531685),
    eX = n(723702),
    eQ = n(350535),
    eJ = n(319518);
function e0(e) {
    let { soundboardSound: t, closePicker: r } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        a = (0, h.bG)([E.A], () => null != t && E.A.isFavoriteSound(t.soundId)),
        o = (0, h.bG)([ep.A], () => ep.A.getGuild(t?.guildId)),
        l = (0, h.bG)([eK.Ay], () => eK.Ay.useReducedMotion, []),
        u = (0, h.bG)([eZ.A], () => eZ.A.isFocused()),
        c = (0, h.bG)([eq.Ay], () => eq.Ay.getKeybindForAction(eb.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, i.jsx)(ez.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, i.jsx)(eW.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: eJ.Zg })
                    : (0, i.jsx)(eF.x, { size: "md", color: "currentColor", className: eJ.Zg }),
            graphicSecondary: null != o ? (0, i.jsx)(L.A, { guild: o, shouldAnimate: !l && u }) : null,
            titlePrimary: t.name,
            titleSecondary: o?.name,
            isFavorite: a,
        });
    function _() {
        r(),
            (0, eV.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("14144"), n.e("72425"), n.e("46327"), n.e("12618")]).then(
                    n.bind(n, 29681),
                );
                return (t) => (0, i.jsx)(e, { ...t });
            });
    }
    let f = (0, e$.k8)(eG.M.SOUNDBOARD_KEYBIND_TIP),
        p =
            null != c && (0, eX.isWindows)() && !f
                ? eL.intl.format(eL.t.udMTth, {
                      keybind: (0, eQ.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, i.jsx)(eB.Anchor, { onClick: _, children: e }, t),
                  })
                : null;
    return null == p
        ? null
        : (0, i.jsxs)("div", {
              className: eJ.g,
              children: [
                  (0, i.jsx)(ej.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eJ.QW }),
                  (0, i.jsx)(eH.E, { variant: "text-sm/medium", color: "text-default", className: eJ.L5, children: p }),
                  (0, i.jsx)(S.D, {
                      className: eJ.b,
                      onClick: function () {
                          return (0, e$.Dr)(eG.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, i.jsx)(eY.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var e1 = n(805945),
    e2 = n(890856),
    e3 = n(307301),
    e6 = n(468689);
function e4(e) {
    e6.A.open(e, eb.BEX.SOUNDBOARD),
        (0, eV.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("16227"),
                n.e("26543"),
                n.e("34258"),
                n.e("76846"),
                n.e("46934"),
                n.e("7792"),
                n.e("8555"),
                n.e("83952"),
                n.e("20287"),
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
var e5 = n(757718),
    e7 = n(508387);
function e8(e) {
    let { guild: t, focused: n, onSelectItem: r, ...s } = e,
        { canCreateExpressions: o } = (0, ef.nr)(t);
    return (0, i.jsx)(ev.m, {
        text: eL.intl.string(eL.t["fHo+z1"]),
        shouldShow: !o,
        children: (0, i.jsx)("li", {
            className: e5.H,
            children: (0, i.jsxs)(e2.s, {
                ...s,
                "aria-label": eL.intl.formatToPlainString(eL.t.c1qVYh, { guildName: t.name }),
                className: a()(e7.n4, { [e7.in]: n, [e7.r9]: !o }),
                onClick: () => (null != r ? r() : e4(t.id)),
                children: [
                    (0, i.jsx)(e3.j, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(eH.E, {
                        variant: "text-xs/semibold",
                        color: o ? "currentColor" : "text-muted",
                        children: eL.intl.string(eL.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function e9(e) {
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
        p = w.LW.useStore((e) => e.inspectedExpressionPosition),
        E = `${i}-${s}`,
        m = a && p.rowIndex === i && p.columnIndex === s;
    switch (t.item.type) {
        case eu.uq.SOUND:
            return (0, r.createElement)(e1.Ay, {
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
        case eu.uq.ADD_SOUND:
            return (0, r.createElement)(e8, {
                ...l(s),
                key: E,
                guild: t.item.guild,
                focused: m,
                onSelectItem: () => u(t),
            });
    }
}
var te = n(965238);
let tt = 32 + Q.kg - 8,
    tn = {
        [eu.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [eu.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [eu.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [eu.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
    };
function ti(e, t, n) {
    return (null == n && e.type === eu.Cx.GUILD && !t) || (e.type === eu.Cx.GUILD && e.guild.id !== n && !t);
}
function tr(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: r, isSectionNitroLocked: s, showNitroDivider: o } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            o && (0, i.jsx)(Q.Ay, { className: te.yH }),
            (0, i.jsx)("div", {
                className: a()(te.hd, { [te.Jb]: s, [te.VD]: s }),
                children: (0, i.jsx)(S.D, {
                    className: te.bV,
                    onClick: r,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, i.jsxs)("div", {
                        className: te.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case eu.Cx.FAVORITES:
                                        return (0, i.jsx)(A.G, { size: "xs", color: "currentColor", className: te.nr });
                                    case eu.Cx.GUILD:
                                        return (0, i.jsx)(L.A, { guild: t.guild, height: 16, width: 16 });
                                    case eu.Cx.DEFAULTS:
                                        return (0, i.jsx)(I.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: te.nr,
                                        });
                                    case eu.Cx.SEARCH:
                                        return (0, i.jsx)(T.$, { size: "md", color: "currentColor", className: te.nr });
                                }
                            })(),
                            (0, i.jsx)(y.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: te.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case eu.Cx.FAVORITES:
                                            return eL.intl.string(eL.t.k8fFjp);
                                        case eu.Cx.GUILD:
                                            return t.guild.name;
                                        case eu.Cx.DEFAULTS:
                                            return eL.intl.string(eL.t.Rtvk9X);
                                        case eu.Cx.SEARCH:
                                            return eL.intl.string(eL.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, i.jsx)(eo.A, {
                                className: te.nr,
                                direction: n ? eo.A.Directions.RIGHT : eo.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function ts() {
    return (0, i.jsx)(R.A, { message: eL.intl.string(eL.t.bgDdNK) });
}
function ta(e) {
    let { className: t } = e,
        n = (0, g.bG)([E.A], () => E.A.isSoundboardVolumeMuted()) ? C._ : N.H;
    return (0, i.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function to(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: o,
            onClose: l,
            onSelect: _,
            shouldValidateSelectedSound: h = !1,
            suppressPlaySound: f = !1,
            shouldShowLockedSounds: p = !0,
            gridNotice: A,
            soundButtonOverlay: I,
            listPadding: T,
            renderHeader: y,
            defaultSoundsOnly: C = !1,
            inExpressionPicker: R,
            analyticsSource: L,
        } = e,
        { audioRef: M } = r.useContext(et.A),
        { analyticsLocations: P } = (0, c.Ay)(),
        { analyticsLocations: x } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: U } = (0, O.p)(),
        G = r.useMemo(() => ({ ...U, section: eb.JJy.SOUNDBOARD_SOUND_PICKER }), [U]),
        [F, V] = r.useState(null),
        B = (0, g.bG)([es.default], () => es.default.getCurrentUser()),
        j = (0, k.TW)(B, eS.PremiumTypes.TIER_2),
        H = (0, g.bG)([ea.A], () => ea.A.getVoiceState(t, B?.id ?? eb.dJq)),
        Y = H?.selfDeaf || H?.mute || H?.suppress,
        W = (0, d.RQ)((e) => e.searchQuery),
        K = null != W && "" !== W,
        Q = (0, D.GV)(),
        eo = (0, ei.St)("soundboard_floating_upsell"),
        eA = (0, q.$)("soundboard_floating_upsell"),
        {
            categories: eN,
            availableSounds: ev,
            soundCounts: eR,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = (0, g.bG)([es.default], () => es.default.getCurrentUser()),
                s = k.Ay.isPremium(i, eS.PremiumTypes.TIER_2),
                [a, o, l] = (0, g.yK)([E.A], () => [E.A.getSounds(), E.A.getFavorites(), E.A.isFetching()]),
                u = (0, eg.Y)(e, !1),
                c = (0, g.yK)([ep.A], () => {
                    let e = [];
                    return (
                        u.forEach((t) => {
                            let n = ep.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                d = k.Ay.canUseSoundboardEverywhere(i),
                _ = (0, g.bG)([ep.A], () => ep.A.getGuild(e?.guild_id)),
                h = (0, g.bG)([eE.A], () => {
                    let { canCreateExpressions: e } = (0, ef.ie)(_);
                    return e;
                }, [_]);
            return r.useMemo(() => {
                let e = 0,
                    i = 0,
                    r = [];
                return n
                    ? (eC(r, a),
                      {
                          categories: r,
                          availableSounds: a.get("0") ?? eT.pD,
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
                          let u = ey(l, a);
                          u.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: u });
                      })({
                          sections: r,
                          guildIds: u,
                          allSounds: a,
                          potentialSoundIdsForSection: Array.from(o),
                          sectionType: eu.Cx.FAVORITES,
                          sortSoundsFn: eI,
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
                                  l = ey(o, a),
                                  u = o.length < (0, em.fA)(t) && i,
                                  c = 0 === l.length;
                              (u || c) && !s && l.push({ type: eu.uq.ADD_SOUND, guild: t }),
                                  (s && c) ||
                                      e.push({
                                          categoryInfo: { type: eu.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: l,
                                      });
                          })(r, _, {
                              currentGuildHasAddPermissions: h,
                              allSounds: a,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: eI,
                          }),
                      d || eC(r, a),
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
                              let n = ey(r.get(e.id) ?? [], a);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: eu.Cx.GUILD, guild: e, isNitroLocked: !s },
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
                          sortSoundsFn: eI,
                      }),
                      d && eC(r, a),
                      r.forEach((t) => {
                          t.categoryInfo.type === eu.Cx.GUILD &&
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
            }, [u, a, o, _, h, t, d, c, n, l, s, eI]);
        })(s, void 0, C),
        [eO, ew] = r.useState([]),
        eM = r.useMemo(
            () => (W.length > 0 ? [{ key: eu.Cx.SEARCH, categoryInfo: { type: eu.Cx.SEARCH }, items: ey(eO) }] : eN),
            [eN, W.length, eO],
        ),
        eP = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        ex = r.useMemo(() => eM.filter((e) => e.items.length > 0), [eM]),
        ek = r.useMemo(
            () => ex.findLastIndex((e) => !!(0, k.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [ex],
        ),
        eG = !j && p && -1 !== ek,
        eF = !j && p && -1 !== ek,
        eV = en.b0.useSetting(),
        eB = r.useMemo(() => new Set(eV), [eV]),
        ej = null == s,
        eH = k.Ay.canUseCustomCallSounds(B),
        eY = r.useCallback(
            (e) => {
                eB.has(e) ? eB.delete(e) : eB.add(e), en.b0.updateSetting(Array.from(eB));
            },
            [eB],
        ),
        eW = r.useCallback(
            (e, t, n, i) => {
                if (null != _ && !h) return _(e, n);
                let r = (0, ec.Ir)(B, e, s, !1);
                if (null != _ && h && r) _(e, n);
                else if (!f && r && (0, ec.Au)(s))
                    (0, ec.Ak)(e, s?.id ?? eb.dJq, t, i),
                        K &&
                            el.default.track(eb.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eb.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: W,
                                location_stack: t,
                            });
                else {
                    if ((0, ec.Ir)(B, e, s)) return;
                    p && V(e);
                }
            },
            [f, B, s, p, K, W, _, h],
        ),
        eK = r.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case eu.uq.SOUND:
                        let n = tn[e?.category] ?? null,
                            i = e?.item.index;
                        return eW(e.item.sound, null == n ? P : [...P, n], t?.shiftKey !== !0, i);
                    case eu.uq.ADD_SOUND:
                        return l(), e4(e.item.guild.id);
                }
            },
            [P, eW, l],
        ),
        e$ = r.useCallback(
            (e, n, r, o, l) => {
                let u = ex[r.sectionIndex],
                    c = p && ti(u.categoryInfo, j, t) && eG;
                return (0, i.jsx)(
                    "ul",
                    {
                        ...n,
                        className: a()(te.a, { [te.uL]: c }),
                        children: e.map((e, t) =>
                            (0, i.jsx)(
                                e9,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: ej ? eH : !Y,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: P,
                                    },
                                    rowIndex: r.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: r.isUsingKeyboardNavigation,
                                    suppressPlaySound: f,
                                    getItemProps: o,
                                    onSelectItem: eK,
                                    onItemMouseEnter: l,
                                    buttonOverlay: I,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: p,
                                    inExpressionPicker: R,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [ex, p, j, t, f, eK, s, ej, eH, Y, P, I, eG, R],
        ),
        ez = r.useCallback(
            (e, t) => {
                if (e <= 0 || !p) return !1;
                let n = ex[e],
                    i = ex[e - 1],
                    r = ti(n.categoryInfo, j, t),
                    s = ti(i.categoryInfo, j, t);
                return r && !s;
            },
            [ex, p, j],
        ),
        eq = r.useCallback(() => {
            let e = E.A.getSoundById("3");
            null != e && V(e);
        }, []),
        eZ = r.useCallback(() => {
            let e = (0, k.Dd)(eS.PremiumTypes.TIER_2);
            return eL.intl.format(eL.t["tw/SSq"], { nitroTierName: e, onClick: eq });
        }, [eq]),
        eX = r.useCallback((e) => (ez(e, t) ? tt : 32), [t, ez]),
        eQ = r.useCallback(
            (e) => {
                let t = e === ex.length - 1;
                return eF && t ? 70 : eG && e === ek ? 20 : 0;
            },
            [ex.length, eG, eF, ek],
        ),
        eJ = r.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
        e1 = r.useCallback(
            (e, n) => {
                let r = `${e.key}`,
                    s = p && ti(e.categoryInfo, j, t),
                    a = ez(n, t),
                    o = eB.has(r);
                return (0, i.jsx)(
                    tr,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            el.default.track(eb.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eb.liQ.SOUNDBOARD_POPOUT },
                                tab: eD.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !o,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eY(r);
                        },
                        collapsed: o,
                        isSectionNitroLocked: s && eG,
                        showNitroDivider: a && eG,
                    },
                    `header-${r}`,
                );
            },
            [eB, eY, t, ez, p, j, eG],
        ),
        e2 = r.useCallback(
            (e, t) => {
                let n = t === ex.length - 1,
                    r = t === ek;
                return eF && n
                    ? (0, i.jsx)("div", { className: a()(te.Lk, { [te.Ns]: r }) })
                    : eG && t === ek
                      ? (0, i.jsx)("div", { className: a()(te.a3, { [te.Ns]: r }) })
                      : null;
            },
            [ek, eG, eF, ex.length],
        ),
        e3 = r.useCallback((e) => ew((0, eh.lG)(e, ev, B, s, P)), [s, B, ev, P]),
        e6 = r.useCallback(
            (e) => {
                (0, v.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: P, ...t });
                });
            },
            [P],
        ),
        e5 = r.useCallback(
            () =>
                R
                    ? (0, i.jsx)(Z.Gq, {
                          renderPopout: () => (0, i.jsx)(Z.qn, {}),
                          tooltipText: eL.intl.string(eL.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(te.Jm, te.Zz),
                          children: (0, i.jsx)(N.H, { size: "md", color: "currentColor", className: te.By }),
                      })
                    : (0, i.jsx)(S.D, {
                          tabIndex: 0,
                          className: te.Jm,
                          onClick: e6,
                          "aria-label": eL.intl.string(eL.t.kbFsAD),
                          children: (0, i.jsx)(ta, { className: te.By }),
                      }),
            [R, e6],
        ),
        e7 = r.useCallback(
            (e) =>
                (0, i.jsx)(eU, {
                    soundboardListRef: e,
                    categories: eN,
                    shouldUpsellLockedCategories: eG,
                    listPadding: T,
                    guildId: t,
                    inExpressionPicker: R,
                }),
            [eN, T, eG, t, R],
        ),
        e8 = r.useCallback(() => {
            let e = (0, z.qD)();
            return (0, k.LE)(e, eS.pe.TIER_2) ?? eL.intl.string(eL.t.pj0XBN);
        }, []),
        to = r.useCallback(
            () =>
                eF
                    ? (0, i.jsx)(X.d, {
                          showUpsell: eP,
                          text: eZ(),
                          button: e8(),
                          buttonAnalyticsObject: { section: eb.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          subscribeButtonVariantOverride: eA,
                          leadingAction: eo
                              ? (0, i.jsx)(J.l, {
                                    size: "sm",
                                    className: te.ij,
                                    location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                    forceDarkTheme: !0,
                                })
                              : void 0,
                      })
                    : null,
            [eZ, e8, eF, eo, eA, eP],
        ),
        tl = r.useCallback(
            (e) =>
                e?.item.type === eu.uq.SOUND
                    ? (0, i.jsx)(e0, { closePicker: l, soundboardSound: e?.item.sound ?? null })
                    : null,
            [l],
        ),
        tu = r.useCallback(() => {
            let e = E.A.getSoundById("3"),
                t = new Audio((0, ed.A)("3"));
            null != M.current && M.current.pause(),
                (M.current = t),
                (t.currentTime = 0),
                (t.volume = (0, e_.A)(e?.volume ?? 1)),
                t.play();
        }, [M]),
        tc = (0, g.bG)([er.A], () => er.A.getMediaSessionId());
    return (
        (0, b.A)({
            type: m.ImpressionTypes.POPOUT,
            name: m.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: L,
                guild_id: t,
                media_session_id: tc,
                available_custom_sounds_count: eR.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eR.lockedCustomSoundCount,
                favorite_sounds_count: eR.favoriteSoundCount,
            },
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != F
                    ? (0, i.jsx)(ee.A, {
                          title: eL.intl.string(R ? eL.t.rZEEvU : eL.t.jGDYF0),
                          description: eL.intl.string(R ? eL.t.ZPNG5A : eL.t["grL/hg"]),
                          analyticsLocationSection: eb.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eS.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...G, object: eb.ZSU.SOUNDBOARD_SOUND },
                              location_stack: x,
                              sku_id: k.Ay.getSkuIdForPremiumType(eS.PremiumTypes.TIER_2),
                          },
                          onClose: () => V(null),
                          onUpsellClicked: l,
                          onDisplay: tu,
                      })
                    : void 0,
                (0, i.jsx)($, {
                    categories: ex,
                    collapsedCategories: eB,
                    containerWidth: o,
                    store: w.LW,
                    onSelectItem: eK,
                    onSearchExpressions: e3,
                    hasSearchResults: eO.length > 0,
                    defaultSearchPlaceholder: eL.intl.string(eL.t.sKt3xS),
                    renderRow: e$,
                    renderSectionHeader: e1,
                    renderSectionFooter: e2,
                    renderSection: eJ,
                    renderCategoryList: e7,
                    renderHeaderAccessories: e5,
                    rowHeight: 48,
                    sectionHeaderHeight: eX,
                    sectionFooterHeight: eQ,
                    itemNodeWidth: 150,
                    gridNavigatorId: Q,
                    renderEmptySearchState: ts,
                    renderInspector: tl,
                    gridNotice: A,
                    renderHeader: y,
                    renderUpsell: to,
                }),
            ],
        })
    );
}
var tl = n(367720);
function tu(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: s,
            onClose: m,
            onSelect: g,
            analyticsSource: A,
            suppressPlaySound: I,
            shouldValidateSelectedSound: T,
            shouldShowLockedSounds: S = !0,
            gridNotice: y,
            inExpressionPicker: C,
            soundButtonOverlay: N,
            listPadding: v,
            renderHeader: R,
            defaultSoundsOnly: O,
        } = e,
        { fetching: b, maybeFetchData: D } = {
            fetching: (0, h.bG)([E.A], () => E.A.isFetchingAnySounds()),
            maybeFetchData: r.useCallback(() => {
                p.E7(), f.bW.loadIfNecessary();
            }, []),
        },
        { analyticsLocations: L } = (0, c.Ay)(u.A.SOUNDBOARD_POPOUT),
        w = (function (e) {
            let { extraHeightPx: t } = _.useConfig({ location: e });
            return t;
        })(A),
        M = !C && w > 0 ? { height: 420 + w } : void 0;
    return (
        r.useEffect(() => {
            D();
        }, [D]),
        r.useEffect(() => {
            C || (0, d.Ri)("");
        }, [C]),
        (0, i.jsx)(c.f5, {
            value: L,
            children: (0, i.jsx)(o.l, {
                style: M,
                className: a()(tl.Nz, { [tl.Bg]: b, [tl.yV]: C }),
                children: b
                    ? (0, i.jsx)(l.y, {})
                    : (0, i.jsx)(to, {
                          guildId: t,
                          channel: n,
                          onClose: m,
                          onSelect: g,
                          shouldValidateSelectedSound: T,
                          containerWidth: s,
                          suppressPlaySound: I,
                          shouldShowLockedSounds: S,
                          gridNotice: y,
                          soundButtonOverlay: N,
                          listPadding: v,
                          renderHeader: R,
                          defaultSoundsOnly: O,
                          inExpressionPicker: C,
                          analyticsSource: A,
                      }),
            }),
        })
    );
}
