"use strict";
n.d(t, { A: () => tl });
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
    U = n(416316);
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
    H = n(90547);
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
var W = n(645324);
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
    z = n(754998),
    q = n(319993),
    Z = n(202639),
    X = n(414872),
    Q = n(400669),
    J = n(2181),
    ee = n(523006),
    et = n(885386),
    en = n(909536),
    ei = n(763827),
    er = n(287809),
    es = n(977997),
    ea = n(147925),
    eo = n(174459),
    el = n(807348),
    eu = n(813564),
    ec = n(102597),
    ed = n(904054),
    e_ = n(147472);
n(321073);
var eh = n(931991),
    ef = n(71393),
    ep = n(576705),
    eE = n(473145),
    em = n(805143),
    eg = n(935208);
function eA(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => eg.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eI = n(980504),
    eT = n(788868);
function eS(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: el.uq.SOUND, sound: e, index: t }));
}
function ey(e, t) {
    let n = t.get("0") ?? eI.pD;
    e.push({ key: el.Cx.DEFAULTS, categoryInfo: { type: el.Cx.DEFAULTS }, items: eS(n, eA) });
}
var eC = n(837381),
    eN = n(990078),
    ev = n(802019),
    eR = n(407698),
    eO = n(652215),
    eb = n(698279),
    eD = n(375708),
    eL = n(930155);
let ew = [8, 8, 8, 8];
function eM(e) {
    let { icon: t, isSelected: n, onClick: r, listItemProps: s } = e;
    return (0, i.jsx)(T.D, {
        ...s,
        onClick: r,
        className: a()(eL.Yl, { [eL.wH]: n }),
        children: (0, i.jsx)(t, { className: eL.xi, color: "currentColor" }),
    });
}
function eP(e, t, n, r, s) {
    switch (e.categoryInfo.type) {
        case el.Cx.FAVORITES:
            return (0, i.jsx)(eM, { icon: g.G, onClick: t, isSelected: n, listItemProps: r }, e.key);
        case el.Cx.GUILD:
            return (0, i.jsx)(
                T.D,
                {
                    ...r,
                    className: eL.L1,
                    onClick: t,
                    children: (0, i.jsx)(D.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case el.Cx.DEFAULTS:
            return (0, i.jsx)(eM, { icon: A.p, onClick: t, isSelected: n, listItemProps: r }, e.key);
        default:
            return null;
    }
}
function ex(e) {
    let { category: t, categoryIndex: n, onClick: r, isSelected: s, isNitroLocked: a } = e,
        o = (0, eC.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === el.Cx.GUILD
        ? (0, i.jsx)(eR.Q, { guild: t.categoryInfo.guild, children: eP(t, r, s, o, a) })
        : (0, i.jsx)(eN.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case el.Cx.FAVORITES:
                          return eD.intl.string(eD.t.k8fFjp);
                      case el.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case el.Cx.DEFAULTS:
                          return eD.intl.string(eD.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: eP(t, r, s, o, a),
          });
}
function ek(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: o = ew,
            guildId: l,
            inExpressionPicker: u,
        } = e,
        c = r.useRef(null),
        d = (0, m.bG)([er.default], () => er.default.getCurrentUser()),
        _ = (0, x.TW)(d, eT.PremiumTypes.TIER_2),
        h = r.useCallback(
            (e, t, n, r) => {
                let a = s && tn(e.categoryInfo, _, l);
                return (0, i.jsx)(ex, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        eo.default.track(eO.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eO.liQ.SOUNDBOARD_POPOUT },
                            guild_id: l ?? null,
                            num_expressions: e.items.length,
                            tab: eb.kx.SOUNDBOARD,
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
    return (0, i.jsx)(ev.A, {
        className: a()(u ? eL.HZ : eL.jv),
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
var eU = n(554146),
    eG = n(191023),
    eF = n(192308),
    eV = n(349288),
    eB = n(695366),
    ej = n(834730),
    eH = n(789645),
    eY = n(565645),
    eW = n(775602),
    eK = n(826673),
    e$ = n(182922),
    ez = n(532624),
    eq = n(531685),
    eZ = n(723702),
    eX = n(350535),
    eQ = n(578078);
function eJ(e) {
    let { soundboardSound: t, closePicker: r } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        a = (0, _.bG)([p.A], () => null != t && p.A.isFavoriteSound(t.soundId)),
        o = (0, _.bG)([ef.A], () => ef.A.getGuild(t?.guildId)),
        l = (0, _.bG)([eW.Ay], () => eW.Ay.useReducedMotion, []),
        u = (0, _.bG)([eq.A], () => eq.A.isFocused()),
        c = (0, _.bG)([ez.Ay], () => ez.Ay.getKeybindForAction(eO.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, i.jsx)(e$.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, i.jsx)(eY.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: eQ.Zg })
                    : (0, i.jsx)(eG.x, { size: "md", color: "currentColor", className: eQ.Zg }),
            graphicSecondary: null != o ? (0, i.jsx)(D.A, { guild: o, shouldAnimate: !l && u }) : null,
            titlePrimary: t.name,
            titleSecondary: o?.name,
            isFavorite: a,
        });
    function h() {
        r(),
            (0, eF.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("92000"), n.e("60841"), n.e("46327"), n.e("12618")]).then(
                    n.bind(n, 29681),
                );
                return (t) => (0, i.jsx)(e, { ...t });
            });
    }
    let f = (0, eK.k8)(eU.M.SOUNDBOARD_KEYBIND_TIP),
        E =
            null != c && (0, eZ.isWindows)() && !f
                ? eD.intl.format(eD.t.udMTth, {
                      keybind: (0, eX.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, i.jsx)(eV.Anchor, { onClick: h, children: e }, t),
                  })
                : null;
    return null == E
        ? null
        : (0, i.jsxs)("div", {
              className: eQ.g,
              children: [
                  (0, i.jsx)(eB.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eQ.QW }),
                  (0, i.jsx)(ej.E, { variant: "text-sm/medium", color: "text-default", className: eQ.L5, children: E }),
                  (0, i.jsx)(T.D, {
                      className: eQ.b,
                      onClick: function () {
                          return (0, eK.Dr)(eU.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, i.jsx)(eH.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var e0 = n(805945),
    e1 = n(890856),
    e2 = n(307301),
    e3 = n(468689);
function e6(e) {
    e3.A.open(e, eO.BEX.SOUNDBOARD),
        (0, eF.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("43363"),
                n.e("54091"),
                n.e("30834"),
                n.e("81422"),
                n.e("75889"),
                n.e("8848"),
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
var e4 = n(14870),
    e5 = n(256611);
function e7(e) {
    let { guild: t, focused: n, onSelectItem: r, ...s } = e,
        { canCreateExpressions: o } = (0, eh.nr)(t);
    return (0, i.jsx)(eN.m, {
        text: eD.intl.string(eD.t["fHo+z1"]),
        shouldShow: !o,
        children: (0, i.jsx)("li", {
            className: e4.H,
            children: (0, i.jsxs)(e1.s, {
                ...s,
                "aria-label": eD.intl.formatToPlainString(eD.t.c1qVYh, { guildName: t.name }),
                className: a()(e5.n4, { [e5.in]: n, [e5.r9]: !o }),
                onClick: () => (null != r ? r() : e6(t.id)),
                children: [
                    (0, i.jsx)(e2.j, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(ej.E, {
                        variant: "text-xs/semibold",
                        color: o ? "currentColor" : "text-muted",
                        children: eD.intl.string(eD.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function e8(e) {
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
        case el.uq.SOUND:
            return (0, r.createElement)(e0.Ay, {
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
        case el.uq.ADD_SOUND:
            return (0, r.createElement)(e7, {
                ...l(s),
                key: E,
                guild: t.item.guild,
                focused: m,
                onSelectItem: () => u(t),
            });
    }
}
var e9 = n(728950);
let te = 32 + X.kg - 8,
    tt = {
        [el.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [el.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [el.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [el.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
    };
function tn(e, t, n) {
    return (null == n && e.type === el.Cx.GUILD && !t) || (e.type === el.Cx.GUILD && e.guild.id !== n && !t);
}
function ti(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: r, isSectionNitroLocked: s, showNitroDivider: o } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            o && (0, i.jsx)(X.Ay, { className: e9.yH }),
            (0, i.jsx)("div", {
                className: a()(e9.hd, { [e9.Jb]: s, [e9.VD]: s }),
                children: (0, i.jsx)(T.D, {
                    className: e9.bV,
                    onClick: r,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, i.jsxs)("div", {
                        className: e9.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case el.Cx.FAVORITES:
                                        return (0, i.jsx)(g.G, { size: "xs", color: "currentColor", className: e9.nr });
                                    case el.Cx.GUILD:
                                        return (0, i.jsx)(D.A, { guild: t.guild, height: 16, width: 16 });
                                    case el.Cx.DEFAULTS:
                                        return (0, i.jsx)(A.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: e9.nr,
                                        });
                                    case el.Cx.SEARCH:
                                        return (0, i.jsx)(I.$, { size: "md", color: "currentColor", className: e9.nr });
                                }
                            })(),
                            (0, i.jsx)(S.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: e9.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case el.Cx.FAVORITES:
                                            return eD.intl.string(eD.t.k8fFjp);
                                        case el.Cx.GUILD:
                                            return t.guild.name;
                                        case el.Cx.DEFAULTS:
                                            return eD.intl.string(eD.t.Rtvk9X);
                                        case el.Cx.SEARCH:
                                            return eD.intl.string(eD.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, i.jsx)(ea.A, {
                                className: e9.nr,
                                direction: n ? ea.A.Directions.RIGHT : ea.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function tr() {
    return (0, i.jsx)(v.A, { message: eD.intl.string(eD.t.bgDdNK) });
}
function ts(e) {
    let { className: t } = e,
        n = (0, m.bG)([p.A], () => p.A.isSoundboardVolumeMuted()) ? y._ : C.H;
    return (0, i.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function ta(e) {
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
        { audioRef: M } = r.useContext(ee.A),
        { analyticsLocations: P } = (0, c.Ay)(),
        { analyticsLocations: k } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: U } = (0, R.p)(),
        G = r.useMemo(() => ({ ...U, section: eO.JJy.SOUNDBOARD_SOUND_PICKER }), [U]),
        [F, V] = r.useState(null),
        B = (0, m.bG)([er.default], () => er.default.getCurrentUser()),
        j = (0, x.TW)(B, eT.PremiumTypes.TIER_2),
        H = (0, m.bG)([es.A], () => es.A.getVoiceState(t, B?.id ?? eO.dJq)),
        Y = H?.selfDeaf || H?.mute || H?.suppress,
        W = (0, d.RQ)((e) => e.searchQuery),
        X = null != W && "" !== W,
        ea = (0, b.GV)(),
        eg = (0, en.St)("soundboard_floating_upsell"),
        eC = (0, z.$)("soundboard_floating_upsell"),
        {
            categories: eN,
            availableSounds: ev,
            soundCounts: eR,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = (0, m.bG)([er.default], () => er.default.getCurrentUser()),
                s = x.Ay.isPremium(i, eT.PremiumTypes.TIER_2),
                [a, o, l] = (0, m.yK)([p.A], () => [p.A.getSounds(), p.A.getFavorites(), p.A.isFetching()]),
                u = (0, em.Y)(e, !1),
                c = (0, m.yK)([ef.A], () => {
                    let e = [];
                    return (
                        u.forEach((t) => {
                            let n = ef.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                d = x.Ay.canUseSoundboardEverywhere(i),
                _ = (0, m.bG)([ef.A], () => ef.A.getGuild(e?.guild_id)),
                h = (0, m.bG)([ep.A], () => {
                    let { canCreateExpressions: e } = (0, eh.ie)(_);
                    return e;
                }, [_]);
            return r.useMemo(() => {
                let e = 0,
                    i = 0,
                    r = [];
                return n
                    ? (ey(r, a),
                      {
                          categories: r,
                          availableSounds: a.get("0") ?? eI.pD,
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
                          let u = eS(l, a);
                          u.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: u });
                      })({
                          sections: r,
                          guildIds: u,
                          allSounds: a,
                          potentialSoundIdsForSection: Array.from(o),
                          sectionType: el.Cx.FAVORITES,
                          sortSoundsFn: eA,
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
                                  l = eS(o, a),
                                  u = o.length < (0, eE.fA)(t) && i,
                                  c = 0 === l.length;
                              (u || c) && !s && l.push({ type: el.uq.ADD_SOUND, guild: t }),
                                  (s && c) ||
                                      e.push({
                                          categoryInfo: { type: el.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: l,
                                      });
                          })(r, _, {
                              currentGuildHasAddPermissions: h,
                              allSounds: a,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: eA,
                          }),
                      d || ey(r, a),
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
                              let n = eS(r.get(e.id) ?? [], a);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: el.Cx.GUILD, guild: e, isNitroLocked: !s },
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
                          sortSoundsFn: eA,
                      }),
                      d && ey(r, a),
                      r.forEach((t) => {
                          t.categoryInfo.type === el.Cx.GUILD &&
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
            }, [u, a, o, _, h, t, d, c, n, l, s, eA]);
        })(s, void 0, v),
        [eL, ew] = r.useState([]),
        eM = r.useMemo(
            () => (W.length > 0 ? [{ key: el.Cx.SEARCH, categoryInfo: { type: el.Cx.SEARCH }, items: eS(eL) }] : eN),
            [eN, W.length, eL],
        ),
        eP = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        ex = r.useMemo(() => eM.filter((e) => e.items.length > 0), [eM]),
        eU = r.useMemo(
            () => ex.findLastIndex((e) => !!(0, x.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [ex],
        ),
        eG = !j && g && -1 !== eU,
        eF = !j && g && -1 !== eU,
        eV = et.b0.useSetting(),
        eB = r.useMemo(() => new Set(eV), [eV]),
        ej = null == s,
        eH = x.Ay.canUseCustomCallSounds(B),
        eY = r.useCallback(
            (e) => {
                eB.has(e) ? eB.delete(e) : eB.add(e), et.b0.updateSetting(Array.from(eB));
            },
            [eB],
        ),
        eW = r.useCallback(
            (e, t, n, i) => {
                if (null != _ && !h) return _(e, n);
                let r = (0, eu.Ir)(B, e, s, !1);
                if (null != _ && h && r) _(e, n);
                else if (!f && r && (0, eu.Au)(s))
                    (0, eu.Ak)(e, s?.id ?? eO.dJq, t, i),
                        X &&
                            eo.default.track(eO.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eO.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: W,
                                location_stack: t,
                            });
                else {
                    if ((0, eu.Ir)(B, e, s)) return;
                    g && V(e);
                }
            },
            [f, B, s, g, X, W, _, h],
        ),
        eK = r.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case el.uq.SOUND:
                        let n = tt[e?.category] ?? null,
                            i = e?.item.index;
                        return eW(e.item.sound, null == n ? P : [...P, n], t?.shiftKey !== !0, i);
                    case el.uq.ADD_SOUND:
                        return l(), e6(e.item.guild.id);
                }
            },
            [P, eW, l],
        ),
        e$ = r.useCallback(
            (e, n, r, o, l) => {
                let u = ex[r.sectionIndex],
                    c = g && tn(u.categoryInfo, j, t) && eG;
                return (0, i.jsx)(
                    "ul",
                    {
                        ...n,
                        className: a()(e9.a, { [e9.uL]: c }),
                        children: e.map((e, t) =>
                            (0, i.jsx)(
                                e8,
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
            [ex, g, j, t, f, eK, s, ej, eH, Y, P, I, eG, D],
        ),
        ez = r.useCallback(
            (e, t) => {
                if (e <= 0 || !g) return !1;
                let n = ex[e],
                    i = ex[e - 1],
                    r = tn(n.categoryInfo, j, t),
                    s = tn(i.categoryInfo, j, t);
                return r && !s;
            },
            [ex, g, j],
        ),
        eq = r.useCallback(() => {
            let e = p.A.getSoundById("3");
            null != e && V(e);
        }, []),
        eZ = r.useCallback(() => {
            let e = (0, x.Dd)(eT.PremiumTypes.TIER_2);
            return eD.intl.format(eD.t["tw/SSq"], { nitroTierName: e, onClick: eq });
        }, [eq]),
        eX = r.useCallback((e) => (ez(e, t) ? te : 32), [t, ez]),
        eQ = r.useCallback(
            (e) => {
                let t = e === ex.length - 1;
                return eF && t ? 70 : eG && e === eU ? 20 : 0;
            },
            [ex.length, eG, eF, eU],
        ),
        e0 = r.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
        e1 = r.useCallback(
            (e, n) => {
                let r = `${e.key}`,
                    s = g && tn(e.categoryInfo, j, t),
                    a = ez(n, t),
                    o = eB.has(r);
                return (0, i.jsx)(
                    ti,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            eo.default.track(eO.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eO.liQ.SOUNDBOARD_POPOUT },
                                tab: eb.kx.SOUNDBOARD,
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
            [eB, eY, t, ez, g, j, eG],
        ),
        e2 = r.useCallback(
            (e, t) => {
                let n = t === ex.length - 1,
                    r = t === eU;
                return eF && n
                    ? (0, i.jsx)("div", { className: a()(e9.Lk, { [e9.Ns]: r }) })
                    : eG && t === eU
                      ? (0, i.jsx)("div", { className: a()(e9.a3, { [e9.Ns]: r }) })
                      : null;
            },
            [eU, eG, eF, ex.length],
        ),
        e3 = r.useCallback((e) => ew((0, e_.lG)(e, ev, B, s, P)), [s, B, ev, P]),
        e4 = r.useCallback(
            (e) => {
                (0, N.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: P, ...t });
                });
            },
            [P],
        ),
        e5 = r.useCallback(
            () =>
                D
                    ? (0, i.jsx)(q.Gq, {
                          renderPopout: () => (0, i.jsx)(q.qn, {}),
                          tooltipText: eD.intl.string(eD.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(e9.Jm, e9.Zz),
                          children: (0, i.jsx)(C.H, { size: "md", color: "currentColor", className: e9.By }),
                      })
                    : (0, i.jsx)(T.D, {
                          tabIndex: 0,
                          className: e9.Jm,
                          onClick: e4,
                          "aria-label": eD.intl.string(eD.t.kbFsAD),
                          children: (0, i.jsx)(ts, { className: e9.By }),
                      }),
            [D, e4],
        ),
        e7 = r.useCallback(
            (e) =>
                (0, i.jsx)(ek, {
                    soundboardListRef: e,
                    categories: eN,
                    shouldUpsellLockedCategories: eG,
                    listPadding: S,
                    guildId: t,
                    inExpressionPicker: D,
                }),
            [eN, S, eG, t, D],
        ),
        ta = r.useCallback(() => {
            let e = (0, $.qD)();
            return (0, x.LE)(e, eT.pe.TIER_2) ?? eD.intl.string(eD.t.pj0XBN);
        }, []),
        to = r.useCallback(
            () =>
                eF
                    ? (0, i.jsx)(Z.d, {
                          showUpsell: eP,
                          text: eZ(),
                          button: ta(),
                          buttonAnalyticsObject: { section: eO.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          subscribeButtonVariantOverride: eC,
                          leadingAction: eg
                              ? (0, i.jsx)(Q.l, {
                                    size: "sm",
                                    className: e9.ij,
                                    location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                    forceDarkTheme: !0,
                                })
                              : void 0,
                      })
                    : null,
            [eZ, ta, eF, eg, eC, eP],
        ),
        tl = r.useCallback(
            (e) =>
                e?.item.type === el.uq.SOUND
                    ? (0, i.jsx)(eJ, { closePicker: l, soundboardSound: e?.item.sound ?? null })
                    : null,
            [l],
        ),
        tu = r.useCallback(() => {
            let e = p.A.getSoundById("3"),
                t = new Audio((0, ec.A)("3"));
            null != M.current && M.current.pause(),
                (M.current = t),
                (t.currentTime = 0),
                (t.volume = (0, ed.A)(e?.volume ?? 1)),
                t.play();
        }, [M]),
        tc = (0, m.bG)([ei.A], () => ei.A.getMediaSessionId());
    return (
        (0, O.A)({
            type: E.ImpressionTypes.POPOUT,
            name: E.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: w,
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
                    ? (0, i.jsx)(J.A, {
                          title: eD.intl.string(D ? eD.t.rZEEvU : eD.t.jGDYF0),
                          description: eD.intl.string(D ? eD.t.ZPNG5A : eD.t["grL/hg"]),
                          analyticsLocationSection: eO.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eT.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...G, object: eO.ZSU.SOUNDBOARD_SOUND },
                              location_stack: k,
                              sku_id: x.Ay.getSkuIdForPremiumType(eT.PremiumTypes.TIER_2),
                          },
                          onClose: () => V(null),
                          onUpsellClicked: l,
                          onDisplay: tu,
                      })
                    : void 0,
                (0, i.jsx)(K, {
                    categories: ex,
                    collapsedCategories: eB,
                    containerWidth: o,
                    store: L.LW,
                    onSelectItem: eK,
                    onSearchExpressions: e3,
                    hasSearchResults: eL.length > 0,
                    defaultSearchPlaceholder: eD.intl.string(eD.t.sKt3xS),
                    renderRow: e$,
                    renderSectionHeader: e1,
                    renderSectionFooter: e2,
                    renderSection: e0,
                    renderCategoryList: e7,
                    renderHeaderAccessories: e5,
                    rowHeight: 48,
                    sectionHeaderHeight: eX,
                    sectionFooterHeight: eQ,
                    itemNodeWidth: 150,
                    gridNavigatorId: ea,
                    renderEmptySearchState: tr,
                    renderInspector: tl,
                    gridNotice: A,
                    renderHeader: y,
                    renderUpsell: to,
                }),
            ],
        })
    );
}
var to = n(740712);
function tl(e) {
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
                className: a()(to.Nz, { [to.Bg]: O, [to.yV]: y }),
                children: O
                    ? (0, i.jsx)(l.y, {})
                    : (0, i.jsx)(ta, {
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
