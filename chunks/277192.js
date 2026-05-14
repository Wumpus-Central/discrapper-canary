"use strict";
n.d(t, { A: () => ts });
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
    N = n(983851),
    y = n(442433),
    C = n(537652),
    v = n(212245),
    O = n(139286),
    R = n(915089),
    b = n(724511),
    D = n(850992),
    L = n(464651),
    w = n(735438),
    M = n(962125),
    P = n(428262),
    x = n(240864),
    U = n(711548);
let k = r.forwardRef(function (e, t) {
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
                        (0, P.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            O = (0, L.Fk)({
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
                        G({
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
            (0, L.FV)({ searchQuery: y, activeCategoryIndex: C, listRef: N }),
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
                className: U.i,
                children: [
                    y.length > 0 && !a && null != h
                        ? h()
                        : (0, i.jsx)(M.A, {
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
    G = (0, w.throttle)(
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
            let o = (0, x.s)({
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
var F = n(942381),
    V = n(602034),
    B = n(892547),
    H = n(387187);
let j = r.forwardRef(function (e, t) {
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
        [f, h] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], F.x),
        p = n.useStore((e) => e.searchPlaceholder),
        [E, m] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], F.x),
        g = r.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : D.Uk),
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
            className: H.i,
            children: (0, i.jsx)(B.I, {
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
                    ...(m ? { "aria-activedescendant": (0, V.Aq)(o, E.columnIndex, E.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var Y = n(456908);
function W(e) {
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
            gridNotice: w,
            renderHeader: M,
            renderUpsell: P,
        } = e,
        x = r.useRef(null),
        U = r.useRef(null),
        G = r.useRef(null),
        F = 0 === t.length,
        V = (0, d.RQ)((e) => e.searchQuery),
        B = a.useStore((e) => e.inspectedExpressionPosition),
        H = (0, L.oV)({ gridWrapperRef: x, containerWidth: s, showingEmptyState: F }),
        {
            expressionsGrid: W,
            rowCount: K,
            rowCountBySection: z,
            columnCounts: $,
            gutterWidth: q,
        } = (0, L.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: O,
            itemNodeWidth: v,
            itemNodeMargin: R,
        }),
        {
            getItemProps: Z,
            getRowProps: X,
            gridContainerProps: Q,
            handleGridContainerKeyDown: J,
            isUsingKeyboardNavigation: ee,
        } = (0, L.JZ)({
            columnCounts: $,
            expressionsListRef: U,
            expressionsGrid: W,
            onSelectItem: o,
            store: a,
            gridNavigatorId: D,
        }),
        et = r.useCallback(
            (e, t) =>
                p(
                    W[e],
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
            [W, Z, X, q, ee, p, a, K],
        ),
        en = r.useCallback((e) => m?.(t[e], e), [t, m]),
        ei = r.useCallback((e) => g?.(t[e], e), [t, g]),
        er = r.useCallback(() => A?.(W?.[B.rowIndex]?.[B.columnIndex]), [W, B.columnIndex, B.rowIndex, A]);
    r.useEffect(() => {
        l(V);
    }, [l, V]),
        r.useEffect(() => {
            a.setBottomPosition(x.current?.getBoundingClientRect().bottom ?? null);
        }),
        r.useEffect(() => a.resetStoreState, [a.resetStoreState]),
        r.useLayoutEffect(() => {
            G.current?.focus();
        }, []);
    let es = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(j, {
                ref: G,
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
            null != M ? M(es) : (0, i.jsxs)("div", { className: Y.wx, children: [" ", es, " "] }),
            F && null != h
                ? h(Y.p$)
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          T(U),
                          null != w && (0, i.jsx)("div", { className: Y.Eb, children: w }),
                          (0, i.jsx)("div", {
                              ref: x,
                              className: Y.AD,
                              id: D,
                              ...Q,
                              children:
                                  null != H
                                      ? (0, i.jsx)(k, {
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
var K = n(89366),
    z = n(319993),
    $ = n(202639),
    q = n(414872),
    Z = n(400669),
    X = n(2181),
    Q = n(523006),
    J = n(885386),
    ee = n(909536),
    et = n(763827),
    en = n(287809),
    ei = n(977997),
    er = n(147925),
    es = n(174459),
    ea = n(807348),
    eo = n(813564),
    el = n(102597),
    eu = n(904054),
    ec = n(147472);
n(321073);
var ed = n(931991),
    e_ = n(71393),
    ef = n(576705),
    eh = n(473145),
    ep = n(805143),
    eE = n(935208);
function em(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => eE.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eg = n(980504),
    eA = n(788868);
function eI(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: ea.uq.SOUND, sound: e, index: t }));
}
function eT(e, t) {
    let n = t.get("0") ?? eg.pD;
    e.push({ key: ea.Cx.DEFAULTS, categoryInfo: { type: ea.Cx.DEFAULTS }, items: eI(n, em) });
}
var eS = n(837381),
    eN = n(990078),
    ey = n(802019),
    eC = n(407698),
    ev = n(652215),
    eO = n(698279),
    eR = n(375708),
    eb = n(917419);
let eD = [8, 8, 8, 8];
function eL(e) {
    let { icon: t, isSelected: n, onClick: r, listItemProps: s } = e;
    return (0, i.jsx)(T.D, {
        ...s,
        onClick: r,
        className: a()(eb.Yl, { [eb.wH]: n }),
        children: (0, i.jsx)(t, { className: eb.xi, color: "currentColor" }),
    });
}
function ew(e, t, n, r, s) {
    switch (e.categoryInfo.type) {
        case ea.Cx.FAVORITES:
            return (0, i.jsx)(eL, { icon: g.G, onClick: t, isSelected: n, listItemProps: r }, e.key);
        case ea.Cx.GUILD:
            return (0, i.jsx)(
                T.D,
                {
                    ...r,
                    className: eb.L1,
                    onClick: t,
                    children: (0, i.jsx)(b.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case ea.Cx.DEFAULTS:
            return (0, i.jsx)(eL, { icon: A.p, onClick: t, isSelected: n, listItemProps: r }, e.key);
        default:
            return null;
    }
}
function eM(e) {
    let { category: t, categoryIndex: n, onClick: r, isSelected: s, isNitroLocked: a } = e,
        o = (0, eS.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === ea.Cx.GUILD
        ? (0, i.jsx)(eC.Q, { guild: t.categoryInfo.guild, children: ew(t, r, s, o, a) })
        : (0, i.jsx)(eN.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case ea.Cx.FAVORITES:
                          return eR.intl.string(eR.t.k8fFjp);
                      case ea.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case ea.Cx.DEFAULTS:
                          return eR.intl.string(eR.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: ew(t, r, s, o, a),
          });
}
function eP(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: o = eD,
            guildId: l,
            inExpressionPicker: u,
        } = e,
        c = r.useRef(null),
        d = (0, m.bG)([en.default], () => en.default.getCurrentUser()),
        _ = (0, P.TW)(d, eA.PremiumTypes.TIER_2),
        f = r.useCallback(
            (e, t, n, r) => {
                let a = s && te(e.categoryInfo, _, l);
                return (0, i.jsx)(eM, {
                    category: e,
                    categoryIndex: t,
                    onClick: () => {
                        es.default.track(ev.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: ev.liQ.SOUNDBOARD_POPOUT },
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
    return (0, i.jsx)(ey.A, {
        className: a()(u ? eb.HZ : eb.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: D.LW,
        categories: n,
        listPadding: o,
        renderCategoryListItem: f,
        rowCount: n.length,
        categoryHeight: 40,
    });
}
var ex = n(554146),
    eU = n(191023),
    ek = n(192308),
    eG = n(349288),
    eF = n(695366),
    eV = n(834730),
    eB = n(789645),
    eH = n(565645),
    ej = n(775602),
    eY = n(826673),
    eW = n(182922),
    eK = n(532624),
    ez = n(531685),
    e$ = n(723702),
    eq = n(350535),
    eZ = n(319518);
function eX(e) {
    let { soundboardSound: t, closePicker: r } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        a = (0, _.bG)([p.A], () => null != t && p.A.isFavoriteSound(t.soundId)),
        o = (0, _.bG)([e_.A], () => e_.A.getGuild(t?.guildId)),
        l = (0, _.bG)([ej.A], () => ej.A.useReducedMotion, []),
        u = (0, _.bG)([ez.A], () => ez.A.isFocused()),
        c = (0, _.bG)([eK.Ay], () => eK.Ay.getKeybindForAction(ev.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, i.jsx)(eW.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, i.jsx)(eH.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: eZ.Zg })
                    : (0, i.jsx)(eU.x, { size: "md", color: "currentColor", className: eZ.Zg }),
            graphicSecondary: null != o ? (0, i.jsx)(b.A, { guild: o, shouldAnimate: !l && u }) : null,
            titlePrimary: t.name,
            titleSecondary: o?.name,
            isFavorite: a,
        });
    let f = () => {
            r(),
                (0, ek.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("3633"),
                        n.e("72425"),
                        n.e("46327"),
                        n.e("12618"),
                    ]).then(n.bind(n, 29681));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        },
        h = (0, eY.k8)(ex.M.SOUNDBOARD_KEYBIND_TIP),
        E =
            null != c && (0, e$.isWindows)() && !h
                ? eR.intl.format(eR.t.udMTth, {
                      keybind: (0, eq.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, i.jsx)(eG.Anchor, { onClick: f, children: e }, t),
                  })
                : null;
    return null == E
        ? null
        : (0, i.jsxs)("div", {
              className: eZ.g,
              children: [
                  (0, i.jsx)(eF.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eZ.QW }),
                  (0, i.jsx)(eV.E, { variant: "text-sm/medium", color: "text-default", className: eZ.L5, children: E }),
                  (0, i.jsx)(T.D, {
                      className: eZ.b,
                      onClick: () => (0, eY.Dr)(ex.M.SOUNDBOARD_KEYBIND_TIP),
                      children: (0, i.jsx)(eB.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var eQ = n(805945),
    eJ = n(890856),
    e0 = n(307301),
    e1 = n(468689);
function e2(e) {
    e1.A.open(e, ev.BEX.SOUNDBOARD),
        (0, ek.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("18927"),
                n.e("95081"),
                n.e("60909"),
                n.e("95219"),
                n.e("37025"),
                n.e("8555"),
                n.e("20287"),
                n.e("83952"),
                n.e("66580"),
                n.e("8979"),
                n.e("20643"),
                n.e("98913"),
                n.e("80559"),
                n.e("74049"),
                n.e("12811"),
                n.e("69006"),
            ]).then(n.bind(n, 191110));
            return (n) => (0, i.jsx)(t, { ...n, guildId: e });
        });
}
var e3 = n(757718),
    e6 = n(508387);
function e4(e) {
    let { guild: t, focused: n, onSelectItem: r, ...s } = e,
        { canCreateExpressions: o } = (0, ed.nr)(t);
    return (0, i.jsx)(eN.m, {
        text: eR.intl.string(eR.t["fHo+z1"]),
        shouldShow: !o,
        children: (0, i.jsx)("li", {
            className: e3.H,
            children: (0, i.jsxs)(eJ.s, {
                ...s,
                "aria-label": eR.intl.formatToPlainString(eR.t.c1qVYh, { guildName: t.name }),
                className: a()(e6.n4, { [e6.in]: n, [e6.r9]: !o }),
                onClick: () => (null != r ? r() : e2(t.id)),
                children: [
                    (0, i.jsx)(e0.j, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(eV.E, {
                        variant: "text-xs/semibold",
                        color: o ? "currentColor" : "text-muted",
                        children: eR.intl.string(eR.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function e5(e) {
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
        p = D.LW.useStore((e) => e.inspectedExpressionPosition),
        E = `${i}-${s}`,
        m = a && p.rowIndex === i && p.columnIndex === s;
    switch (t.item.type) {
        case ea.uq.SOUND:
            return (0, r.createElement)(eQ.Ay, {
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
        case ea.uq.ADD_SOUND:
            return (0, r.createElement)(e4, {
                ...l(s),
                key: E,
                guild: t.item.guild,
                focused: m,
                onSelectItem: () => u(t),
            });
    }
}
var e7 = n(965238);
let e8 = 32 + q.kg - 8,
    e9 = {
        [ea.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [ea.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [ea.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [ea.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
    };
function te(e, t, n) {
    return (null == n && e.type === ea.Cx.GUILD && !t) || (e.type === ea.Cx.GUILD && e.guild.id !== n && !t);
}
function tt(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: r, isSectionNitroLocked: s, showNitroDivider: o } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            o && (0, i.jsx)(q.Ay, { className: e7.yH }),
            (0, i.jsx)("div", {
                className: a()(e7.hd, { [e7.Jb]: s, [e7.VD]: s }),
                children: (0, i.jsx)(T.D, {
                    className: e7.bV,
                    onClick: r,
                    "aria-expanded": !n,
                    children: (0, i.jsxs)("div", {
                        className: e7.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case ea.Cx.FAVORITES:
                                        return (0, i.jsx)(g.G, { size: "xs", color: "currentColor", className: e7.nr });
                                    case ea.Cx.GUILD:
                                        return (0, i.jsx)(b.A, { guild: t.guild, height: 16, width: 16 });
                                    case ea.Cx.DEFAULTS:
                                        return (0, i.jsx)(A.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: e7.nr,
                                        });
                                    case ea.Cx.SEARCH:
                                        return (0, i.jsx)(I.$, { size: "md", color: "currentColor", className: e7.nr });
                                }
                            })(),
                            (0, i.jsx)(S.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: e7.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case ea.Cx.FAVORITES:
                                            return eR.intl.string(eR.t.k8fFjp);
                                        case ea.Cx.GUILD:
                                            return t.guild.name;
                                        case ea.Cx.DEFAULTS:
                                            return eR.intl.string(eR.t.Rtvk9X);
                                        case ea.Cx.SEARCH:
                                            return eR.intl.string(eR.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, i.jsx)(er.A, {
                                className: e7.nr,
                                direction: n ? er.A.Directions.RIGHT : er.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function tn() {
    return (0, i.jsx)(C.A, { message: eR.intl.string(eR.t.bgDdNK) });
}
function ti(e) {
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
            renderHeader: C,
            defaultSoundsOnly: b = !1,
            inExpressionPicker: L,
            analyticsSource: w,
        } = e,
        { audioRef: M } = r.useContext(Q.A),
        { analyticsLocations: x } = (0, c.Ay)(),
        { analyticsLocations: U } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: k } = (0, v.p)(),
        G = r.useMemo(() => ({ ...k, section: ev.JJy.SOUNDBOARD_SOUND_PICKER }), [k]),
        [F, V] = r.useState(null),
        B = (0, m.bG)([en.default], () => en.default.getCurrentUser()),
        H = (0, P.TW)(B, eA.PremiumTypes.TIER_2),
        j = (0, m.bG)([ei.A], () => ei.A.getVoiceState(t, B?.id ?? ev.dJq)),
        Y = j?.selfDeaf || j?.mute || j?.suppress,
        q = (0, d.RQ)((e) => e.searchQuery),
        er = null != q && "" !== q,
        eE = (0, R.GV)(),
        eS = (0, ee.St)("soundboard_floating_upsell"),
        {
            categories: eN,
            availableSounds: ey,
            soundCounts: eC,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = (0, m.bG)([en.default], () => en.default.getCurrentUser()),
                s = P.Ay.isPremium(i, eA.PremiumTypes.TIER_2),
                [a, o, l] = (0, m.yK)([p.A], () => [p.A.getSounds(), p.A.getFavorites(), p.A.isFetching()]),
                u = (0, ep.Y)(e, !1),
                c = (0, m.yK)([e_.A], () => {
                    let e = [];
                    return (
                        u.forEach((t) => {
                            let n = e_.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                d = P.Ay.canUseSoundboardEverywhere(i),
                _ = (0, m.bG)([e_.A], () => e_.A.getGuild(e?.guild_id)),
                f = (0, m.bG)([ef.A], () => {
                    let { canCreateExpressions: e } = (0, ed.ie)(_);
                    return e;
                }, [_]);
            return r.useMemo(() => {
                let e = 0,
                    i = 0,
                    r = [];
                return n
                    ? (eT(r, a),
                      {
                          categories: r,
                          availableSounds: a.get("0") ?? eg.pD,
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
                          let u = eI(l, a);
                          u.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: u });
                      })({
                          sections: r,
                          guildIds: u,
                          allSounds: a,
                          potentialSoundIdsForSection: Array.from(o),
                          sectionType: ea.Cx.FAVORITES,
                          sortSoundsFn: em,
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
                                  l = eI(o, a),
                                  u = o.length < (0, eh.fA)(t) && i,
                                  c = 0 === l.length;
                              (u || c) && !s && l.push({ type: ea.uq.ADD_SOUND, guild: t }),
                                  (s && c) ||
                                      e.push({
                                          categoryInfo: { type: ea.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: l,
                                      });
                          })(r, _, {
                              currentGuildHasAddPermissions: f,
                              allSounds: a,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: em,
                          }),
                      d || eT(r, a),
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
                              let n = eI(r.get(e.id) ?? [], a);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: ea.Cx.GUILD, guild: e, isNitroLocked: !s },
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
                          sortSoundsFn: em,
                      }),
                      d && eT(r, a),
                      r.forEach((t) => {
                          t.categoryInfo.type === ea.Cx.GUILD &&
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
            }, [u, a, o, _, f, t, d, c, n, l, s, em]);
        })(s, void 0, b),
        [eb, eD] = r.useState([]),
        eL = r.useMemo(
            () => (q.length > 0 ? [{ key: ea.Cx.SEARCH, categoryInfo: { type: ea.Cx.SEARCH }, items: eI(eb) }] : eN),
            [eN, q.length, eb],
        ),
        ew = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eM = r.useMemo(() => eL.filter((e) => e.items.length > 0), [eL]),
        ex = r.useMemo(
            () => eM.findLastIndex((e) => !!(0, P.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eM],
        ),
        eU = !H && g && -1 !== ex,
        ek = !H && g && -1 !== ex,
        eG = J.b0.useSetting(),
        eF = r.useMemo(() => new Set(eG), [eG]),
        eV = null == s,
        eB = P.Ay.canUseCustomCallSounds(B),
        eH = r.useCallback(
            (e) => {
                eF.has(e) ? eF.delete(e) : eF.add(e), J.b0.updateSetting(Array.from(eF));
            },
            [eF],
        ),
        ej = r.useCallback(
            (e, t, n, i) => {
                if (null != _ && !f) return _(e, n);
                let r = (0, eo.Ir)(B, e, s, !1);
                if (null != _ && f && r) _(e, n);
                else if (!h && r && (0, eo.Au)(s))
                    (0, eo.Ak)(e, s?.id ?? ev.dJq, t, i),
                        er &&
                            es.default.track(ev.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: ev.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: q,
                                location_stack: t,
                            });
                else {
                    if ((0, eo.Ir)(B, e, s)) return;
                    g && V(e);
                }
            },
            [h, B, s, g, er, q, _, f],
        ),
        eY = r.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case ea.uq.SOUND:
                        let n = e9[e?.category] ?? null,
                            i = e?.item.index;
                        return ej(e.item.sound, null == n ? x : [...x, n], t?.shiftKey !== !0, i);
                    case ea.uq.ADD_SOUND:
                        return l(), e2(e.item.guild.id);
                }
            },
            [x, ej, l],
        ),
        eW = r.useCallback(
            (e, n, r, o, l) => {
                let u = eM[r.sectionIndex],
                    c = g && te(u.categoryInfo, H, t) && eU;
                return (0, i.jsx)(
                    "ul",
                    {
                        ...n,
                        className: a()(e7.a, { [e7.uL]: c }),
                        children: e.map((e, t) =>
                            (0, i.jsx)(
                                e5,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eV ? eB : !Y,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: x,
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
                                    inExpressionPicker: L,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eM, g, H, t, h, eY, s, eV, eB, Y, x, I, eU, L],
        ),
        eK = r.useCallback(
            (e, t) => {
                if (e <= 0 || !g) return !1;
                let n = eM[e],
                    i = eM[e - 1],
                    r = te(n.categoryInfo, H, t),
                    s = te(i.categoryInfo, H, t);
                return r && !s;
            },
            [eM, g, H],
        ),
        ez = r.useCallback(() => {
            let e = p.A.getSoundById("3");
            null != e && V(e);
        }, []),
        e$ = r.useCallback(() => {
            let e = (0, P.Dd)(eA.PremiumTypes.TIER_2);
            return eR.intl.format(eR.t["tw/SSq"], { nitroTierName: e, onClick: ez });
        }, [ez]),
        eq = r.useCallback((e) => (eK(e, t) ? e8 : 32), [t, eK]),
        eZ = r.useCallback(
            (e) => {
                let t = e === eM.length - 1;
                return ek && t ? 70 : eU && e === ex ? 20 : 0;
            },
            [eM.length, eU, ek, ex],
        ),
        eQ = r.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
        eJ = r.useCallback(
            (e, n) => {
                let r = `${e.key}`,
                    s = g && te(e.categoryInfo, H, t),
                    a = eK(n, t),
                    o = eF.has(r);
                return (0, i.jsx)(
                    tt,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => {
                            es.default.track(ev.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: ev.liQ.SOUNDBOARD_POPOUT },
                                tab: eO.kx.SOUNDBOARD,
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
                    r = t === ex;
                return ek && n
                    ? (0, i.jsx)("div", { className: a()(e7.Lk, { [e7.Ns]: r }) })
                    : eU && t === ex
                      ? (0, i.jsx)("div", { className: a()(e7.a3, { [e7.Ns]: r }) })
                      : null;
            },
            [ex, eU, ek, eM.length],
        ),
        e1 = r.useCallback((e) => eD((0, ec.lG)(e, ey, B, s, x)), [s, B, ey, x]),
        e3 = r.useCallback(
            (e) => {
                (0, y.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: x, ...t });
                });
            },
            [x],
        ),
        e6 = r.useCallback(
            () =>
                L
                    ? (0, i.jsx)(z.Gq, {
                          renderPopout: () => (0, i.jsx)(z.qn, {}),
                          tooltipText: eR.intl.string(eR.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(e7.Jm, e7.Zz),
                          children: (0, i.jsx)(N.H, { size: "md", color: "currentColor", className: e7.By }),
                      })
                    : (0, i.jsx)(T.D, {
                          tabIndex: 0,
                          className: e7.Jm,
                          onClick: e3,
                          "aria-label": eR.intl.string(eR.t.kbFsAD),
                          children: (0, i.jsx)(N.H, { size: "md", color: "currentColor", className: e7.By }),
                      }),
            [L, e3],
        ),
        e4 = r.useCallback(
            (e) =>
                (0, i.jsx)(eP, {
                    soundboardListRef: e,
                    categories: eN,
                    shouldUpsellLockedCategories: eU,
                    listPadding: S,
                    guildId: t,
                    inExpressionPicker: L,
                }),
            [eN, S, eU, t, L],
        ),
        ti = r.useCallback(() => {
            let e = (0, K.qD)();
            return (0, P.LE)(e, eA.pe.TIER_2) ?? eR.intl.string(eR.t.pj0XBN);
        }, []),
        tr = r.useCallback(
            () =>
                ek
                    ? (0, i.jsx)($.d, {
                          showUpsell: ew,
                          text: e$(),
                          button: ti(),
                          buttonAnalyticsObject: { section: ev.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: eS
                              ? (0, i.jsx)(Z.l, {
                                    size: "sm",
                                    className: e7.ij,
                                    location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                    forceDarkTheme: !0,
                                })
                              : void 0,
                      })
                    : null,
            [e$, ti, ek, eS, ew],
        ),
        ts = r.useCallback(
            (e) =>
                e?.item.type === ea.uq.SOUND
                    ? (0, i.jsx)(eX, { closePicker: l, soundboardSound: e?.item.sound ?? null })
                    : null,
            [l],
        ),
        ta = r.useCallback(() => {
            let e = p.A.getSoundById("3"),
                t = new Audio((0, el.A)("3"));
            null != M.current && M.current.pause(),
                (M.current = t),
                (t.currentTime = 0),
                (t.volume = (0, eu.A)(e?.volume ?? 1)),
                t.play();
        }, [M]),
        to = (0, m.bG)([et.A], () => et.A.getMediaSessionId());
    return (
        (0, O.A)({
            type: E.ImpressionTypes.POPOUT,
            name: E.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: w,
                guild_id: t,
                media_session_id: to,
                available_custom_sounds_count: eC.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eC.lockedCustomSoundCount,
                favorite_sounds_count: eC.favoriteSoundCount,
            },
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != F
                    ? (0, i.jsx)(X.A, {
                          title: eR.intl.string(L ? eR.t.rZEEvU : eR.t.jGDYF0),
                          description: eR.intl.string(L ? eR.t.ZPNG5A : eR.t["grL/hg"]),
                          analyticsLocationSection: ev.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eA.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...G, object: ev.ZSU.SOUNDBOARD_SOUND },
                              location_stack: U,
                              sku_id: P.Ay.getSkuIdForPremiumType(eA.PremiumTypes.TIER_2),
                          },
                          onClose: () => V(null),
                          onUpsellClicked: l,
                          onDisplay: ta,
                      })
                    : void 0,
                (0, i.jsx)(W, {
                    categories: eM,
                    collapsedCategories: eF,
                    containerWidth: o,
                    store: D.LW,
                    onSelectItem: eY,
                    onSearchExpressions: e1,
                    hasSearchResults: eb.length > 0,
                    defaultSearchPlaceholder: eR.intl.string(eR.t.sKt3xS),
                    renderRow: eW,
                    renderSectionHeader: eJ,
                    renderSectionFooter: e0,
                    renderSection: eQ,
                    renderCategoryList: e4,
                    renderHeaderAccessories: e6,
                    rowHeight: 48,
                    sectionHeaderHeight: eq,
                    sectionFooterHeight: eZ,
                    itemNodeWidth: 150,
                    gridNavigatorId: eE,
                    renderEmptySearchState: tn,
                    renderInspector: ts,
                    gridNotice: A,
                    renderHeader: C,
                    renderUpsell: tr,
                }),
            ],
        })
    );
}
var tr = n(367720);
function ts(e) {
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
                className: a()(tr.Nz, { [tr.Bg]: R, [tr.yV]: N }),
                children: R
                    ? (0, i.jsx)(l.y, {})
                    : (0, i.jsx)(ti, {
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
