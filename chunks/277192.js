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
    f = n(594061),
    h = n(796774),
    p = n(209932);
n(30146);
var E = n(562708),
    m = n(17928),
    g = n(27232),
    A = n(111159),
    I = n(7689),
    T = n(939249),
    S = n(534514),
    N = n(358618),
    y = n(983851),
    C = n(442433),
    v = n(537652),
    O = n(212245),
    R = n(139286),
    b = n(915089),
    D = n(724511),
    L = n(850992),
    w = n(464651),
    M = n(735438),
    P = n(962125),
    x = n(428262),
    U = n(240864),
    k = n(416316);
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
                renderInspector: f,
                renderEmptySearchState: h,
                rowCount: p,
                rowCountBySection: E,
                rowHeight: m,
                sectionHeaderHeight: g,
                sectionFooterHeight: A,
                renderUpsell: I,
                onScroll: T,
            } = e,
            S = r.useRef(!1),
            N = r.useRef(null),
            y = (0, d.RQ)((e) => e.searchQuery),
            C = s.useStore((e) => e.activeCategoryIndex),
            v = r.useMemo(
                () =>
                    n.map((e) =>
                        (0, x.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            O = (0, w.Fk)({
                activeCategoryIndex: C,
                isScrolling: S,
                listRef: N,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: y,
            }),
            R = r.useCallback(
                (e) => {
                    O(e),
                        F({
                            listRef: N,
                            searchQuery: y,
                            nitroLockedSectionStates: v,
                            scrollTop: e,
                            sectionHeaderHeight: g,
                            sectionFooterHeight: A,
                        }),
                        T?.(e);
                },
                [O, y, v, g, A, T],
            );
        return (
            r.useEffect(() => {
                null != N.current && R(N.current.getScrollerNode()?.scrollTop ?? 0);
            }, [R, N]),
            (0, w.FV)({ searchQuery: y, activeCategoryIndex: C, listRef: N }),
            r.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return N.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => N.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => N.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return N.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return N.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return N.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return N.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return N.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, i.jsxs)("div", {
                className: k.i,
                children: [
                    y.length > 0 && !a && null != h
                        ? h()
                        : (0, i.jsx)(P.A, {
                              role: "none presentation",
                              listPadding: o,
                              onScroll: R,
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
                              ref: N,
                          }),
                    I?.(),
                    f?.(),
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
var V = n(942381),
    B = n(602034),
    H = n(892547),
    j = n(90547);
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
        [f, h] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], V.x),
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
            h && _.current?.focus();
        }, [h]),
        (0, i.jsx)("div", {
            className: j.i,
            children: (0, i.jsx)(H.I, {
                autoFocus: s,
                disabled: !s,
                query: f,
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
            emptySearchPlaceholder: f,
            renderEmptyState: h,
            renderRow: p,
            renderSection: E,
            renderSectionHeader: m,
            renderSectionFooter: g,
            renderInspector: A,
            renderEmptySearchState: I,
            renderCategoryList: T,
            renderHeaderAccessories: S,
            rowHeight: N,
            sectionHeaderHeight: y,
            sectionFooterHeight: C,
            itemNodeWidth: v,
            listPaddingRight: O,
            itemNodeMargin: R,
            listPadding: b,
            gridNavigatorId: D,
            gridNotice: L,
            renderHeader: M,
            renderUpsell: P,
        } = e,
        x = r.useRef(null),
        U = r.useRef(null),
        k = r.useRef(null),
        F = 0 === t.length,
        V = (0, d.RQ)((e) => e.searchQuery),
        B = a.useStore((e) => e.inspectedExpressionPosition),
        H = (0, w.oV)({ gridWrapperRef: x, containerWidth: s, showingEmptyState: F }),
        {
            expressionsGrid: j,
            rowCount: K,
            rowCountBySection: z,
            columnCounts: $,
            gutterWidth: q,
        } = (0, w.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: O,
            itemNodeWidth: v,
            itemNodeMargin: R,
        }),
        {
            getItemProps: X,
            getRowProps: Z,
            gridContainerProps: Q,
            handleGridContainerKeyDown: J,
            isUsingKeyboardNavigation: ee,
        } = (0, w.JZ)({
            columnCounts: $,
            expressionsListRef: U,
            expressionsGrid: j,
            onSelectItem: o,
            store: a,
            gridNavigatorId: D,
        }),
        et = r.useCallback(
            (e, t) =>
                p(
                    j[e],
                    Z(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: q,
                        rowIndex: e,
                        totalRowCount: K,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => X(e, t),
                    (t) => a.setInspectedExpressionPosition(t, e),
                ),
            [j, X, Z, q, ee, p, a, K],
        ),
        en = r.useCallback((e) => m?.(t[e], e), [t, m]),
        ei = r.useCallback((e) => g?.(t[e], e), [t, g]),
        er = r.useCallback(() => A?.(j?.[B.rowIndex]?.[B.columnIndex]), [j, B.columnIndex, B.rowIndex, A]);
    r.useEffect(() => {
        l(V);
    }, [l, V]),
        r.useEffect(() => {
            a.setBottomPosition(x.current?.getBoundingClientRect().bottom ?? null);
        }),
        r.useEffect(() => a.resetStoreState, [a.resetStoreState]),
        r.useLayoutEffect(() => {
            k.current?.focus();
        }, []);
    let es = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(Y, {
                ref: k,
                store: a,
                hasSendableExpressions: !0,
                onKeyDown: J,
                expressionsListRef: U,
                gridNavigatorId: D,
                defaultSearchPlaceholder: _,
                emptySearchPlaceholder: f,
            }),
            S?.(),
        ],
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != M ? M(es) : (0, i.jsxs)("div", { className: W.wx, children: [" ", es, " "] }),
            F && null != h
                ? h(W.p$)
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          T(U),
                          null != L && (0, i.jsx)("div", { className: W.Eb, children: L }),
                          (0, i.jsx)("div", {
                              ref: x,
                              className: W.AD,
                              id: D,
                              ...Q,
                              children:
                                  null != H
                                      ? (0, i.jsx)(G, {
                                            categories: t,
                                            ref: U,
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
                                            rowCountBySection: z,
                                            rowHeight: N,
                                            sectionHeaderHeight: y,
                                            sectionFooterHeight: C,
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
    $ = n(319993),
    q = n(202639),
    X = n(414872),
    Z = n(400669),
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
    ef = n(71393),
    eh = n(576705),
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
var eN = n(837381),
    ey = n(990078),
    eC = n(802019),
    ev = n(407698),
    eO = n(652215),
    eR = n(698279),
    eb = n(375708),
    eD = n(930155);
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
        o = (0, eN.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === eo.Cx.GUILD
        ? (0, i.jsx)(ev.Q, { guild: t.categoryInfo.guild, children: eM(t, r, s, o, a) })
        : (0, i.jsx)(ey.m, {
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
        f = r.useCallback(
            (e, t, n, r) => {
                let a = s && tt(e.categoryInfo, _, l);
                return (0, i.jsx)(eP, {
                    category: e,
                    categoryIndex: t,
                    onClick: () => {
                        ea.default.track(eO.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eO.liQ.SOUNDBOARD_POPOUT },
                            guild_id: l ?? null,
                            num_expressions: e.items.length,
                            tab: eR.kx.SOUNDBOARD,
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
    return (0, i.jsx)(eC.A, {
        className: a()(u ? eD.HZ : eD.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: L.LW,
        categories: n,
        listPadding: o,
        renderCategoryListItem: f,
        rowCount: n.length,
        categoryHeight: 40,
    });
}
var eU = n(554146),
    ek = n(191023),
    eG = n(192308),
    eF = n(349288),
    eV = n(695366),
    eB = n(834730),
    eH = n(789645),
    ej = n(565645),
    eY = n(775602),
    eW = n(826673),
    eK = n(182922),
    ez = n(532624),
    e$ = n(531685),
    eq = n(723702),
    eX = n(350535),
    eZ = n(578078);
function eQ(e) {
    let { soundboardSound: t, closePicker: r } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        a = (0, _.bG)([p.A], () => null != t && p.A.isFavoriteSound(t.soundId)),
        o = (0, _.bG)([ef.A], () => ef.A.getGuild(t?.guildId)),
        l = (0, _.bG)([eY.A], () => eY.A.useReducedMotion, []),
        u = (0, _.bG)([e$.A], () => e$.A.isFocused()),
        c = (0, _.bG)([ez.Ay], () => ez.Ay.getKeybindForAction(eO.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, i.jsx)(eK.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, i.jsx)(ej.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: eZ.Zg })
                    : (0, i.jsx)(ek.x, { size: "md", color: "currentColor", className: eZ.Zg }),
            graphicSecondary: null != o ? (0, i.jsx)(D.A, { guild: o, shouldAnimate: !l && u }) : null,
            titlePrimary: t.name,
            titleSecondary: o?.name,
            isFavorite: a,
        });
    let f = () => {
            r(),
                (0, eG.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("27645"),
                        n.e("60841"),
                        n.e("46327"),
                        n.e("12618"),
                    ]).then(n.bind(n, 29681));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        },
        h = (0, eW.k8)(eU.M.SOUNDBOARD_KEYBIND_TIP),
        E =
            null != c && (0, eq.isWindows)() && !h
                ? eb.intl.format(eb.t.udMTth, {
                      keybind: (0, eX.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, i.jsx)(eF.Anchor, { onClick: f, children: e }, t),
                  })
                : null;
    return null == E
        ? null
        : (0, i.jsxs)("div", {
              className: eZ.g,
              children: [
                  (0, i.jsx)(eV.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eZ.QW }),
                  (0, i.jsx)(eB.E, { variant: "text-sm/medium", color: "text-default", className: eZ.L5, children: E }),
                  (0, i.jsx)(T.D, {
                      className: eZ.b,
                      onClick: () => (0, eW.Dr)(eU.M.SOUNDBOARD_KEYBIND_TIP),
                      children: (0, i.jsx)(eH.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var eJ = n(805945),
    e0 = n(890856),
    e1 = n(307301),
    e2 = n(468689);
function e3(e) {
    e2.A.open(e, eO.BEX.SOUNDBOARD),
        (0, eG.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("87625"),
                n.e("69117"),
                n.e("24709"),
                n.e("93814"),
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
var e6 = n(14870),
    e4 = n(256611);
function e5(e) {
    let { guild: t, focused: n, onSelectItem: r, ...s } = e,
        { canCreateExpressions: o } = (0, e_.nr)(t);
    return (0, i.jsx)(ey.m, {
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
            showLockForDisabledSound: f,
            inExpressionPicker: h,
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
                showLockForDisabledSound: f,
                isSoundmoji: !0 === h,
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
var e8 = n(728950);
let e9 = 32 + X.kg - 8,
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
            o && (0, i.jsx)(X.Ay, { className: e8.yH }),
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
        n = (0, m.bG)([p.A], () => p.A.isSoundboardVolumeMuted()) ? N._ : y.H;
    return (0, i.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function ts(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: o,
            onClose: l,
            onSelect: _,
            shouldValidateSelectedSound: f = !1,
            suppressPlaySound: h = !1,
            shouldShowLockedSounds: g = !0,
            gridNotice: A,
            soundButtonOverlay: I,
            listPadding: S,
            renderHeader: N,
            defaultSoundsOnly: v = !1,
            inExpressionPicker: D,
            analyticsSource: w,
        } = e,
        { audioRef: M } = r.useContext(J.A),
        { analyticsLocations: P } = (0, c.Ay)(),
        { analyticsLocations: U } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: k } = (0, O.p)(),
        G = r.useMemo(() => ({ ...k, section: eO.JJy.SOUNDBOARD_SOUND_PICKER }), [k]),
        [F, V] = r.useState(null),
        B = (0, m.bG)([ei.default], () => ei.default.getCurrentUser()),
        H = (0, x.TW)(B, eI.PremiumTypes.TIER_2),
        j = (0, m.bG)([er.A], () => er.A.getVoiceState(t, B?.id ?? eO.dJq)),
        Y = j?.selfDeaf || j?.mute || j?.suppress,
        W = (0, d.RQ)((e) => e.searchQuery),
        X = null != W && "" !== W,
        es = (0, b.GV)(),
        em = (0, et.St)("soundboard_floating_upsell"),
        {
            categories: eN,
            availableSounds: ey,
            soundCounts: eC,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = (0, m.bG)([ei.default], () => ei.default.getCurrentUser()),
                s = x.Ay.isPremium(i, eI.PremiumTypes.TIER_2),
                [a, o, l] = (0, m.yK)([p.A], () => [p.A.getSounds(), p.A.getFavorites(), p.A.isFetching()]),
                u = (0, eE.Y)(e, !1),
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
                f = (0, m.bG)([eh.A], () => {
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
                              currentGuildHasAddPermissions: f,
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
            }, [u, a, o, _, f, t, d, c, n, l, s, eg]);
        })(s, void 0, v),
        [ev, eD] = r.useState([]),
        eL = r.useMemo(
            () => (W.length > 0 ? [{ key: eo.Cx.SEARCH, categoryInfo: { type: eo.Cx.SEARCH }, items: eT(ev) }] : eN),
            [eN, W.length, ev],
        ),
        ew = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eM = r.useMemo(() => eL.filter((e) => e.items.length > 0), [eL]),
        eP = r.useMemo(
            () => eM.findLastIndex((e) => !!(0, x.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eM],
        ),
        eU = !H && g && -1 !== eP,
        ek = !H && g && -1 !== eP,
        eG = ee.b0.useSetting(),
        eF = r.useMemo(() => new Set(eG), [eG]),
        eV = null == s,
        eB = x.Ay.canUseCustomCallSounds(B),
        eH = r.useCallback(
            (e) => {
                eF.has(e) ? eF.delete(e) : eF.add(e), ee.b0.updateSetting(Array.from(eF));
            },
            [eF],
        ),
        ej = r.useCallback(
            (e, t, n, i) => {
                if (null != _ && !f) return _(e, n);
                let r = (0, el.Ir)(B, e, s, !1);
                if (null != _ && f && r) _(e, n);
                else if (!h && r && (0, el.Au)(s))
                    (0, el.Ak)(e, s?.id ?? eO.dJq, t, i),
                        X &&
                            ea.default.track(eO.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eO.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: W,
                                location_stack: t,
                            });
                else {
                    if ((0, el.Ir)(B, e, s)) return;
                    g && V(e);
                }
            },
            [h, B, s, g, X, W, _, f],
        ),
        eY = r.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case eo.uq.SOUND:
                        let n = te[e?.category] ?? null,
                            i = e?.item.index;
                        return ej(e.item.sound, null == n ? P : [...P, n], t?.shiftKey !== !0, i);
                    case eo.uq.ADD_SOUND:
                        return l(), e3(e.item.guild.id);
                }
            },
            [P, ej, l],
        ),
        eW = r.useCallback(
            (e, n, r, o, l) => {
                let u = eM[r.sectionIndex],
                    c = g && tt(u.categoryInfo, H, t) && eU;
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
                                    suppressPlaySound: h,
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
            [eM, g, H, t, h, eY, s, eV, eB, Y, P, I, eU, D],
        ),
        eK = r.useCallback(
            (e, t) => {
                if (e <= 0 || !g) return !1;
                let n = eM[e],
                    i = eM[e - 1],
                    r = tt(n.categoryInfo, H, t),
                    s = tt(i.categoryInfo, H, t);
                return r && !s;
            },
            [eM, g, H],
        ),
        ez = r.useCallback(() => {
            let e = p.A.getSoundById("3");
            null != e && V(e);
        }, []),
        e$ = r.useCallback(() => {
            let e = (0, x.Dd)(eI.PremiumTypes.TIER_2);
            return eb.intl.format(eb.t["tw/SSq"], { nitroTierName: e, onClick: ez });
        }, [ez]),
        eq = r.useCallback((e) => (eK(e, t) ? e9 : 32), [t, eK]),
        eX = r.useCallback(
            (e) => {
                let t = e === eM.length - 1;
                return ek && t ? 70 : eU && e === eP ? 20 : 0;
            },
            [eM.length, eU, ek, eP],
        ),
        eZ = r.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
        eJ = r.useCallback(
            (e, n) => {
                let r = `${e.key}`,
                    s = g && tt(e.categoryInfo, H, t),
                    a = eK(n, t),
                    o = eF.has(r);
                return (0, i.jsx)(
                    tn,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => {
                            ea.default.track(eO.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eO.liQ.SOUNDBOARD_POPOUT },
                                tab: eR.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !o,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eH(r);
                        },
                        collapsed: o,
                        isSectionNitroLocked: s && eU,
                        showNitroDivider: a && eU,
                    },
                    `header-${r}`,
                );
            },
            [eF, eH, t, eK, g, H, eU],
        ),
        e0 = r.useCallback(
            (e, t) => {
                let n = t === eM.length - 1,
                    r = t === eP;
                return ek && n
                    ? (0, i.jsx)("div", { className: a()(e8.Lk, { [e8.Ns]: r }) })
                    : eU && t === eP
                      ? (0, i.jsx)("div", { className: a()(e8.a3, { [e8.Ns]: r }) })
                      : null;
            },
            [eP, eU, ek, eM.length],
        ),
        e1 = r.useCallback((e) => eD((0, ed.lG)(e, ey, B, s, P)), [s, B, ey, P]),
        e2 = r.useCallback(
            (e) => {
                (0, C.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: P, ...t });
                });
            },
            [P],
        ),
        e6 = r.useCallback(
            () =>
                D
                    ? (0, i.jsx)($.Gq, {
                          renderPopout: () => (0, i.jsx)($.qn, {}),
                          tooltipText: eb.intl.string(eb.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(e8.Jm, e8.Zz),
                          children: (0, i.jsx)(y.H, { size: "md", color: "currentColor", className: e8.By }),
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
                    categories: eN,
                    shouldUpsellLockedCategories: eU,
                    listPadding: S,
                    guildId: t,
                    inExpressionPicker: D,
                }),
            [eN, S, eU, t, D],
        ),
        e5 = r.useCallback(() => {
            let e = (0, z.qD)();
            return (0, x.LE)(e, eI.pe.TIER_2) ?? eb.intl.string(eb.t.pj0XBN);
        }, []),
        ts = r.useCallback(
            () =>
                ek
                    ? (0, i.jsx)(q.d, {
                          showUpsell: ew,
                          text: e$(),
                          button: e5(),
                          buttonAnalyticsObject: { section: eO.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: em
                              ? (0, i.jsx)(Z.l, {
                                    size: "sm",
                                    className: e8.ij,
                                    location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                    forceDarkTheme: !0,
                                })
                              : void 0,
                      })
                    : null,
            [e$, e5, ek, em, ew],
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
        (0, R.A)({
            type: E.ImpressionTypes.POPOUT,
            name: E.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: w,
                guild_id: t,
                media_session_id: tl,
                available_custom_sounds_count: eC.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eC.lockedCustomSoundCount,
                favorite_sounds_count: eC.favoriteSoundCount,
            },
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != F
                    ? (0, i.jsx)(Q.A, {
                          title: eb.intl.string(D ? eb.t.rZEEvU : eb.t.jGDYF0),
                          description: eb.intl.string(D ? eb.t.ZPNG5A : eb.t["grL/hg"]),
                          analyticsLocationSection: eO.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eI.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...G, object: eO.ZSU.SOUNDBOARD_SOUND },
                              location_stack: U,
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
                    renderSection: eZ,
                    renderCategoryList: e4,
                    renderHeaderAccessories: e6,
                    rowHeight: 48,
                    sectionHeaderHeight: eq,
                    sectionFooterHeight: eX,
                    itemNodeWidth: 150,
                    gridNavigatorId: es,
                    renderEmptySearchState: ti,
                    renderInspector: ta,
                    gridNotice: A,
                    renderHeader: N,
                    renderUpsell: ts,
                }),
            ],
        })
    );
}
var ta = n(740712);
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
            inExpressionPicker: N,
            soundButtonOverlay: y,
            listPadding: C,
            renderHeader: v,
            defaultSoundsOnly: O,
        } = e,
        { fetching: R, maybeFetchData: b } = {
            fetching: (0, _.bG)([p.A], () => p.A.isFetchingAnySounds()),
            maybeFetchData: r.useCallback(() => {
                h.E7(), f.bW.loadIfNecessary();
            }, []),
        },
        { analyticsLocations: D } = (0, c.Ay)(u.A.SOUNDBOARD_POPOUT);
    return (
        r.useEffect(() => {
            b();
        }, [b]),
        r.useEffect(() => {
            N || (0, d.Ri)("");
        }, [N]),
        (0, i.jsx)(c.f5, {
            value: D,
            children: (0, i.jsx)(o.l, {
                className: a()(ta.Nz, { [ta.Bg]: R, [ta.yV]: N }),
                children: R
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
                          soundButtonOverlay: y,
                          listPadding: C,
                          renderHeader: v,
                          defaultSoundsOnly: O,
                          inExpressionPicker: N,
                          analyticsSource: g,
                      }),
            }),
        })
    );
}
