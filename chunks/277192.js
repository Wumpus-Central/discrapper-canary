"use strict";
n.d(t, { A: () => ta });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(305866),
    o = n(289873),
    c = n(793574),
    u = n(688810),
    d = n(151271),
    h = n(702841),
    m = n(594061),
    p = n(796774),
    f = n(209932);
n(30146);
var g = n(562708),
    x = n(17928),
    A = n(27232),
    E = n(111159),
    C = n(7689),
    I = n(939249),
    y = n(534514),
    S = n(358618),
    v = n(983851),
    N = n(442433),
    _ = n(537652),
    T = n(212245),
    j = n(139286),
    b = n(915089),
    R = n(724511),
    O = n(850992),
    M = n(464651),
    w = n(735438),
    L = n(962125),
    k = n(428262),
    P = n(240864),
    D = n(711548);
let U = i.forwardRef(function (e, t) {
        let {
                categories: n,
                store: s,
                hasSearchResults: r,
                listPadding: a,
                renderRow: o,
                renderSection: c,
                renderSectionHeader: u,
                renderSectionFooter: h,
                renderInspector: m,
                renderEmptySearchState: p,
                rowCount: f,
                rowCountBySection: g,
                rowHeight: x,
                sectionHeaderHeight: A,
                sectionFooterHeight: E,
                renderUpsell: C,
                onScroll: I,
            } = e,
            y = i.useRef(!1),
            S = i.useRef(null),
            v = (0, d.RQ)((e) => e.searchQuery),
            N = s.useStore((e) => e.activeCategoryIndex),
            _ = i.useMemo(
                () =>
                    n.map((e) =>
                        (0, k.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            T = (0, M.Fk)({
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
                        V({
                            listRef: S,
                            searchQuery: v,
                            nitroLockedSectionStates: _,
                            scrollTop: e,
                            sectionHeaderHeight: A,
                            sectionFooterHeight: E,
                        }),
                        I?.(e);
                },
                [T, v, _, A, E, I],
            );
        return (
            i.useEffect(() => {
                null != S.current && j(S.current.getScrollerNode()?.scrollTop ?? 0);
            }, [j, S]),
            (0, M.FV)({ searchQuery: v, activeCategoryIndex: N, listRef: S }),
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
                className: D.i,
                children: [
                    v.length > 0 && !r && null != p
                        ? p()
                        : (0, l.jsx)(L.A, {
                              role: "none presentation",
                              listPadding: a,
                              onScroll: j,
                              renderRow: o,
                              renderSection: c,
                              renderSectionHeader: u,
                              renderSectionFooter: h,
                              rowCount: f,
                              rowCountBySection: g,
                              rowHeight: x,
                              sectionHeaderHeight: A,
                              sectionFooterHeight: E,
                              stickyHeaders: !0,
                              ref: S,
                          }),
                    C?.(),
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
            let a = (0, P.s)({
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
var G = n(942381),
    F = n(602034),
    H = n(892547),
    B = n(387187);
let W = i.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: s,
            onKeyDown: r,
            gridNavigatorId: a,
            expressionsListRef: o,
            defaultSearchPlaceholder: c,
            emptySearchPlaceholder: u,
        } = e,
        h = i.useRef(null),
        [m, p] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], G.x),
        f = n.useStore((e) => e.searchPlaceholder),
        [g, x] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], G.x),
        A = i.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : O.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, d.Ri)(e),
                    o.current?.scrollTo(0);
            },
            [o, n],
        ),
        E = i.useCallback(() => {
            A("");
        }, [A]);
    return (
        i.useImperativeHandle(t, () => ({ focus: () => h.current?.focus() })),
        i.useLayoutEffect(() => {
            p && h.current?.focus();
        }, [p]),
        (0, l.jsx)("div", {
            className: B.i,
            children: (0, l.jsx)(H.I, {
                autoFocus: s,
                disabled: !s,
                query: m,
                ref: h,
                placeholder: null != f ? f : s || null == u ? c : u,
                onClear: E,
                onKeyDown: r,
                onChange: A,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": a,
                    "aria-expanded": !0,
                    ...(x ? { "aria-activedescendant": (0, F.Aq)(a, g.columnIndex, g.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var K = n(456908);
function z(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: s,
            store: r,
            onSelectItem: a,
            onSearchExpressions: o,
            onScroll: c,
            hasSearchResults: u,
            defaultSearchPlaceholder: h,
            emptySearchPlaceholder: m,
            renderEmptyState: p,
            renderRow: f,
            renderSection: g,
            renderSectionHeader: x,
            renderSectionFooter: A,
            renderInspector: E,
            renderEmptySearchState: C,
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
            renderHeader: w,
            renderUpsell: L,
        } = e,
        k = i.useRef(null),
        P = i.useRef(null),
        D = i.useRef(null),
        V = 0 === t.length,
        G = (0, d.RQ)((e) => e.searchQuery),
        F = r.useStore((e) => e.inspectedExpressionPosition),
        H = (0, M.oV)({ gridWrapperRef: k, containerWidth: s, showingEmptyState: V }),
        {
            expressionsGrid: B,
            rowCount: z,
            rowCountBySection: Z,
            columnCounts: Y,
            gutterWidth: q,
        } = (0, M.se)({
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
        } = (0, M.JZ)({
            columnCounts: Y,
            expressionsListRef: P,
            expressionsGrid: B,
            onSelectItem: a,
            store: r,
            gridNavigatorId: R,
        }),
        et = i.useCallback(
            (e, t) =>
                f(
                    B[e],
                    $(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: q,
                        rowIndex: e,
                        totalRowCount: z,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => J(e, t),
                    (t) => r.setInspectedExpressionPosition(t, e),
                ),
            [B, J, $, q, ee, f, r, z],
        ),
        en = i.useCallback((e) => x?.(t[e], e), [t, x]),
        el = i.useCallback((e) => A?.(t[e], e), [t, A]),
        ei = i.useCallback(() => E?.(B?.[F.rowIndex]?.[F.columnIndex]), [B, F.columnIndex, F.rowIndex, E]);
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
            (0, l.jsx)(W, {
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
            null != w ? w(es) : (0, l.jsxs)("div", { className: K.wx, children: [" ", es, " "] }),
            V && null != p
                ? p(K.p$)
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          I(P),
                          null != O && (0, l.jsx)("div", { className: K.Eb, children: O }),
                          (0, l.jsx)("div", {
                              ref: k,
                              className: K.AD,
                              id: R,
                              ...X,
                              children:
                                  null != H
                                      ? (0, l.jsx)(U, {
                                            categories: t,
                                            ref: P,
                                            store: r,
                                            hasSearchResults: u,
                                            listPadding: b,
                                            renderRow: et,
                                            renderSection: g,
                                            renderSectionHeader: null != x ? en : void 0,
                                            renderSectionFooter: null != A ? el : void 0,
                                            renderInspector: null != E ? ei : void 0,
                                            renderEmptySearchState: C,
                                            rowCount: z,
                                            rowCountBySection: Z,
                                            rowHeight: S,
                                            sectionHeaderHeight: v,
                                            sectionFooterHeight: N,
                                            renderUpsell: L,
                                            onScroll: c,
                                        })
                                      : null,
                          }),
                      ],
                  }),
        ],
    });
}
var Z = n(89366),
    Y = n(319993),
    q = n(202639),
    J = n(414872),
    $ = n(400669),
    X = n(2181),
    Q = n(523006),
    ee = n(885386),
    et = n(909536),
    en = n(763827),
    el = n(287809),
    ei = n(977997),
    es = n(147925),
    er = n(174459),
    ea = n(807348),
    eo = n(813564),
    ec = n(102597),
    eu = n(904054),
    ed = n(147472);
n(321073);
var eh = n(931991),
    em = n(71393),
    ep = n(576705),
    ef = n(473145),
    eg = n(805143),
    ex = n(935208);
function eA(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => ex.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eE = n(980504),
    eC = n(788868);
function eI(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: ea.uq.SOUND, sound: e, index: t }));
}
function ey(e, t) {
    let n = t.get("0") ?? eE.pD;
    e.push({ key: ea.Cx.DEFAULTS, categoryInfo: { type: ea.Cx.DEFAULTS }, items: eI(n, eA) });
}
var eS = n(837381),
    ev = n(990078),
    eN = n(802019),
    e_ = n(407698),
    eT = n(652215),
    ej = n(698279),
    eb = n(375708),
    eR = n(917419);
let eO = [8, 8, 8, 8];
function eM(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: s } = e;
    return (0, l.jsx)(I.D, {
        ...s,
        onClick: i,
        className: r()(eR.Yl, { [eR.wH]: n }),
        children: (0, l.jsx)(t, { className: eR.xi, color: "currentColor" }),
    });
}
function ew(e, t, n, i, s) {
    switch (e.categoryInfo.type) {
        case ea.Cx.FAVORITES:
            return (0, l.jsx)(eM, { icon: A.G, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ea.Cx.GUILD:
            return (0, l.jsx)(
                I.D,
                {
                    ...i,
                    className: eR.L1,
                    onClick: t,
                    children: (0, l.jsx)(R.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case ea.Cx.DEFAULTS:
            return (0, l.jsx)(eM, { icon: E.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function eL(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: s, isNitroLocked: r } = e,
        a = (0, eS.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === ea.Cx.GUILD
        ? (0, l.jsx)(e_.Q, { guild: t.categoryInfo.guild, children: ew(t, i, s, a, r) })
        : (0, l.jsx)(ev.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case ea.Cx.FAVORITES:
                          return eb.intl.string(eb.t.k8fFjp);
                      case ea.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case ea.Cx.DEFAULTS:
                          return eb.intl.string(eb.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: ew(t, i, s, a, r),
          });
}
function ek(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: a = eO,
            guildId: o,
            inExpressionPicker: c,
        } = e,
        u = i.useRef(null),
        d = (0, x.bG)([el.default], () => el.default.getCurrentUser()),
        h = (0, k.TW)(d, eC.PremiumTypes.TIER_2),
        m = i.useCallback(
            (e, t, n, i) => {
                let r = s && tt(e.categoryInfo, h, o);
                return (0, l.jsx)(eL, {
                    category: e,
                    categoryIndex: t,
                    onClick: () => {
                        er.default.track(eT.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eT.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: ej.kx.SOUNDBOARD,
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
    return (0, l.jsx)(eN.A, {
        className: r()(c ? eR.HZ : eR.jv),
        categoryListRef: u,
        expressionsListRef: t,
        store: O.LW,
        categories: n,
        listPadding: a,
        renderCategoryListItem: m,
        rowCount: n.length,
        categoryHeight: 40,
    });
}
var eP = n(554146),
    eD = n(191023),
    eU = n(192308),
    eV = n(349288),
    eG = n(695366),
    eF = n(834730),
    eH = n(789645),
    eB = n(565645),
    eW = n(775602),
    eK = n(826673),
    ez = n(182922),
    eZ = n(532624),
    eY = n(531685),
    eq = n(723702),
    eJ = n(350535),
    e$ = n(319518);
function eX(e) {
    let { soundboardSound: t, closePicker: i } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        r = (0, h.bG)([f.A], () => null != t && f.A.isFavoriteSound(t.soundId)),
        a = (0, h.bG)([em.A], () => em.A.getGuild(t?.guildId)),
        o = (0, h.bG)([eW.Ay], () => eW.Ay.useReducedMotion, []),
        c = (0, h.bG)([eY.A], () => eY.A.isFocused()),
        u = (0, h.bG)([eZ.Ay], () => eZ.Ay.getKeybindForAction(eT.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, l.jsx)(ez.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(eB.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: e$.Zg })
                    : (0, l.jsx)(eD.x, { size: "md", color: "currentColor", className: e$.Zg }),
            graphicSecondary: null != a ? (0, l.jsx)(R.A, { guild: a, shouldAnimate: !o && c }) : null,
            titlePrimary: t.name,
            titleSecondary: a?.name,
            isFavorite: r,
        });
    let m = () => {
            i(),
                (0, eU.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("60513"),
                        n.e("72425"),
                        n.e("46327"),
                        n.e("12618"),
                    ]).then(n.bind(n, 29681));
                    return (t) => (0, l.jsx)(e, { ...t });
                });
        },
        p = (0, eK.k8)(eP.M.SOUNDBOARD_KEYBIND_TIP),
        g =
            null != u && (0, eq.isWindows)() && !p
                ? eb.intl.format(eb.t.udMTth, {
                      keybind: (0, eJ.dI)(u.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(eV.Anchor, { onClick: m, children: e }, t),
                  })
                : null;
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: e$.g,
              children: [
                  (0, l.jsx)(eG.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: e$.QW }),
                  (0, l.jsx)(eF.E, { variant: "text-sm/medium", color: "text-default", className: e$.L5, children: g }),
                  (0, l.jsx)(I.D, {
                      className: e$.b,
                      onClick: () => (0, eK.Dr)(eP.M.SOUNDBOARD_KEYBIND_TIP),
                      children: (0, l.jsx)(eH.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var eQ = n(805945),
    e0 = n(890856),
    e1 = n(307301),
    e2 = n(468689);
function e6(e) {
    e2.A.open(e, eT.BEX.SOUNDBOARD),
        (0, eU.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("9662"),
                n.e("2677"),
                n.e("60909"),
                n.e("34796"),
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
            return (n) => (0, l.jsx)(t, { ...n, guildId: e });
        });
}
var e3 = n(757718),
    e7 = n(508387);
function e4(e) {
    let { guild: t, focused: n, onSelectItem: i, ...s } = e,
        { canCreateExpressions: a } = (0, eh.nr)(t);
    return (0, l.jsx)(ev.m, {
        text: eb.intl.string(eb.t["fHo+z1"]),
        shouldShow: !a,
        children: (0, l.jsx)("li", {
            className: e3.H,
            children: (0, l.jsxs)(e0.s, {
                ...s,
                "aria-label": eb.intl.formatToPlainString(eb.t.c1qVYh, { guildName: t.name }),
                className: r()(e7.n4, { [e7.in]: n, [e7.r9]: !a }),
                onClick: () => (null != i ? i() : e6(t.id)),
                children: [
                    (0, l.jsx)(e1.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(eF.E, {
                        variant: "text-xs/semibold",
                        color: a ? "currentColor" : "text-muted",
                        children: eb.intl.string(eb.t["8Fu/S7"]),
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
            rowIndex: l,
            columnIndex: s,
            isUsingKeyboardNavigation: r,
            suppressPlaySound: a,
            getItemProps: o,
            onSelectItem: c,
            onItemMouseEnter: u,
            buttonOverlay: d,
            isNitroLocked: h,
            showLockForDisabledSound: m,
            inExpressionPicker: p,
        } = e,
        f = O.LW.useStore((e) => e.inspectedExpressionPosition),
        g = `${l}-${s}`,
        x = r && f.rowIndex === l && f.columnIndex === s;
    switch (t.item.type) {
        case ea.uq.SOUND:
            return (0, i.createElement)(eQ.Ay, {
                ...o(s),
                ...n,
                key: g,
                sound: t.item.sound,
                suppressPlaySound: a,
                focused: x,
                onMouseEnter: () => u(s),
                onSelectItem: (e) => c(t, e),
                enableSecondaryActions: !0,
                buttonOverlay: d,
                inNitroLockedSection: h,
                showLockForDisabledSound: m,
                isSoundmoji: !0 === p,
            });
        case ea.uq.ADD_SOUND:
            return (0, i.createElement)(e4, {
                ...o(s),
                key: g,
                guild: t.item.guild,
                focused: x,
                onSelectItem: () => c(t),
            });
    }
}
var e8 = n(965238);
let e9 = 32 + J.kg - 8,
    te = {
        [ea.Cx.SEARCH]: c.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [ea.Cx.DEFAULTS]: c.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [ea.Cx.GUILD]: c.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [ea.Cx.FAVORITES]: c.A.SOUNDBOARD_FAVORITES_SECTION,
    };
function tt(e, t, n) {
    return (null == n && e.type === ea.Cx.GUILD && !t) || (e.type === ea.Cx.GUILD && e.guild.id !== n && !t);
}
function tn(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, isSectionNitroLocked: s, showNitroDivider: a } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a && (0, l.jsx)(J.Ay, { className: e8.yH }),
            (0, l.jsx)("div", {
                className: r()(e8.hd, { [e8.Jb]: s, [e8.VD]: s }),
                children: (0, l.jsx)(I.D, {
                    className: e8.bV,
                    onClick: i,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: e8.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case ea.Cx.FAVORITES:
                                        return (0, l.jsx)(A.G, { size: "xs", color: "currentColor", className: e8.nr });
                                    case ea.Cx.GUILD:
                                        return (0, l.jsx)(R.A, { guild: t.guild, height: 16, width: 16 });
                                    case ea.Cx.DEFAULTS:
                                        return (0, l.jsx)(E.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: e8.nr,
                                        });
                                    case ea.Cx.SEARCH:
                                        return (0, l.jsx)(C.$, { size: "md", color: "currentColor", className: e8.nr });
                                }
                            })(),
                            (0, l.jsx)(y.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: e8.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case ea.Cx.FAVORITES:
                                            return eb.intl.string(eb.t.k8fFjp);
                                        case ea.Cx.GUILD:
                                            return t.guild.name;
                                        case ea.Cx.DEFAULTS:
                                            return eb.intl.string(eb.t.Rtvk9X);
                                        case ea.Cx.SEARCH:
                                            return eb.intl.string(eb.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, l.jsx)(es.A, {
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
function tl() {
    return (0, l.jsx)(_.A, { message: eb.intl.string(eb.t.bgDdNK) });
}
function ti(e) {
    let { className: t } = e,
        n = (0, x.bG)([f.A], () => f.A.isSoundboardVolumeMuted()) ? S._ : v.H;
    return (0, l.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function ts(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: a,
            onClose: o,
            onSelect: h,
            shouldValidateSelectedSound: m = !1,
            suppressPlaySound: p = !1,
            shouldShowLockedSounds: A = !0,
            gridNotice: E,
            soundButtonOverlay: C,
            listPadding: y,
            renderHeader: S,
            defaultSoundsOnly: _ = !1,
            inExpressionPicker: R,
            analyticsSource: M,
        } = e,
        { audioRef: w } = i.useContext(Q.A),
        { analyticsLocations: L } = (0, u.Ay)(),
        { analyticsLocations: P } = (0, u.Ay)(c.A.PREMIUM_UPSELL),
        { location: D } = (0, T.p)(),
        U = i.useMemo(() => ({ ...D, section: eT.JJy.SOUNDBOARD_SOUND_PICKER }), [D]),
        [V, G] = i.useState(null),
        F = (0, x.bG)([el.default], () => el.default.getCurrentUser()),
        H = (0, k.TW)(F, eC.PremiumTypes.TIER_2),
        B = (0, x.bG)([ei.A], () => ei.A.getVoiceState(t, F?.id ?? eT.dJq)),
        W = B?.selfDeaf || B?.mute || B?.suppress,
        K = (0, d.RQ)((e) => e.searchQuery),
        J = null != K && "" !== K,
        es = (0, b.GV)(),
        ex = (0, et.St)("soundboard_floating_upsell"),
        {
            categories: eS,
            availableSounds: ev,
            soundCounts: eN,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = (0, x.bG)([el.default], () => el.default.getCurrentUser()),
                s = k.Ay.isPremium(l, eC.PremiumTypes.TIER_2),
                [r, a, o] = (0, x.yK)([f.A], () => [f.A.getSounds(), f.A.getFavorites(), f.A.isFetching()]),
                c = (0, eg.Y)(e, !1),
                u = (0, x.yK)([em.A], () => {
                    let e = [];
                    return (
                        c.forEach((t) => {
                            let n = em.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                d = k.Ay.canUseSoundboardEverywhere(l),
                h = (0, x.bG)([em.A], () => em.A.getGuild(e?.guild_id)),
                m = (0, x.bG)([ep.A], () => {
                    let { canCreateExpressions: e } = (0, eh.ie)(h);
                    return e;
                }, [h]);
            return i.useMemo(() => {
                let e = 0,
                    l = 0,
                    i = [];
                return n
                    ? (ey(i, r),
                      {
                          categories: i,
                          availableSounds: r.get("0") ?? eE.pD,
                          isFetching: o,
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
                                  allSounds: l,
                                  potentialSoundIdsForSection: i,
                                  sectionType: s,
                                  sortSoundsFn: r,
                              } = e,
                              a = {};
                          for (let e of [...n, "0"])
                              for (let t of l.get(e) ?? [])
                                  null != i.find((e) => e === t.soundId) && (a[t.soundId] = t);
                          let o = [];
                          for (let e of i) {
                              let t = a[e];
                              null != t && o.push(t);
                          }
                          let c = eI(o, r);
                          c.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: c });
                      })({
                          sections: i,
                          guildIds: c,
                          allSounds: r,
                          potentialSoundIdsForSection: Array.from(a),
                          sectionType: ea.Cx.FAVORITES,
                          sortSoundsFn: eA,
                      }),
                      void 0 !== h &&
                          (function (e, t, n) {
                              let {
                                      currentGuildHasAddPermissions: l,
                                      allSounds: i,
                                      filterOutEmptyCurrentGuild: s,
                                      sortSoundsFn: r,
                                  } = n,
                                  a = i.get(t.id) ?? [],
                                  o = eI(a, r),
                                  c = a.length < (0, ef.fA)(t) && l,
                                  u = 0 === o.length;
                              (c || u) && !s && o.push({ type: ea.uq.ADD_SOUND, guild: t }),
                                  (s && u) ||
                                      e.push({
                                          categoryInfo: { type: ea.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: o,
                                      });
                          })(i, h, {
                              currentGuildHasAddPermissions: m,
                              allSounds: r,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: eA,
                          }),
                      d || ey(i, r),
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
                              let n = eI(i.get(e.id) ?? [], r);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: ea.Cx.GUILD, guild: e, isNitroLocked: !s },
                                      key: e.id,
                                      items: n,
                                  });
                          }
                      })({
                          sections: i,
                          guilds: u,
                          currentGuildId: h?.id,
                          allSounds: r,
                          hasNitro: s,
                          sortSoundsFn: eA,
                      }),
                      d && ey(i, r),
                      i.forEach((t) => {
                          t.categoryInfo.type === ea.Cx.GUILD &&
                              (t.categoryInfo.isNitroLocked ? (l += t.items.length) : (e += t.items.length));
                      }),
                      {
                          categories: i,
                          availableSounds: Array.from(r.values()).flat(),
                          isFetching: o,
                          soundCounts: {
                              favoriteSoundCount: a.size,
                              unlockedCustomSoundCount: e,
                              lockedCustomSoundCount: l,
                          },
                      });
            }, [c, r, a, h, m, t, d, u, n, o, s, eA]);
        })(s, void 0, _),
        [e_, eR] = i.useState([]),
        eO = i.useMemo(
            () => (K.length > 0 ? [{ key: ea.Cx.SEARCH, categoryInfo: { type: ea.Cx.SEARCH }, items: eI(e_) }] : eS),
            [eS, K.length, e_],
        ),
        eM = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        ew = i.useMemo(() => eO.filter((e) => e.items.length > 0), [eO]),
        eL = i.useMemo(
            () => ew.findLastIndex((e) => !!(0, k.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [ew],
        ),
        eP = !H && A && -1 !== eL,
        eD = !H && A && -1 !== eL,
        eU = ee.b0.useSetting(),
        eV = i.useMemo(() => new Set(eU), [eU]),
        eG = null == s,
        eF = k.Ay.canUseCustomCallSounds(F),
        eH = i.useCallback(
            (e) => {
                eV.has(e) ? eV.delete(e) : eV.add(e), ee.b0.updateSetting(Array.from(eV));
            },
            [eV],
        ),
        eB = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, eo.Ir)(F, e, s, !1);
                if (null != h && m && i) h(e, n);
                else if (!p && i && (0, eo.Au)(s))
                    (0, eo.Ak)(e, s?.id ?? eT.dJq, t, l),
                        J &&
                            er.default.track(eT.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eT.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: K,
                                location_stack: t,
                            });
                else {
                    if ((0, eo.Ir)(F, e, s)) return;
                    A && G(e);
                }
            },
            [p, F, s, A, J, K, h, m],
        ),
        eW = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case ea.uq.SOUND:
                        let n = te[e?.category] ?? null,
                            l = e?.item.index;
                        return eB(e.item.sound, null == n ? L : [...L, n], t?.shiftKey !== !0, l);
                    case ea.uq.ADD_SOUND:
                        return o(), e6(e.item.guild.id);
                }
            },
            [L, eB, o],
        ),
        eK = i.useCallback(
            (e, n, i, a, o) => {
                let c = ew[i.sectionIndex],
                    u = A && tt(c.categoryInfo, H, t) && eP;
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        className: r()(e8.a, { [e8.uL]: u }),
                        children: e.map((e, t) =>
                            (0, l.jsx)(
                                e5,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eG ? eF : !W,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: L,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: p,
                                    getItemProps: a,
                                    onSelectItem: eW,
                                    onItemMouseEnter: o,
                                    buttonOverlay: C,
                                    isNitroLocked: u,
                                    showLockForDisabledSound: A,
                                    inExpressionPicker: R,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [ew, A, H, t, p, eW, s, eG, eF, W, L, C, eP, R],
        ),
        ez = i.useCallback(
            (e, t) => {
                if (e <= 0 || !A) return !1;
                let n = ew[e],
                    l = ew[e - 1],
                    i = tt(n.categoryInfo, H, t),
                    s = tt(l.categoryInfo, H, t);
                return i && !s;
            },
            [ew, A, H],
        ),
        eZ = i.useCallback(() => {
            let e = f.A.getSoundById("3");
            null != e && G(e);
        }, []),
        eY = i.useCallback(() => {
            let e = (0, k.Dd)(eC.PremiumTypes.TIER_2);
            return eb.intl.format(eb.t["tw/SSq"], { nitroTierName: e, onClick: eZ });
        }, [eZ]),
        eq = i.useCallback((e) => (ez(e, t) ? e9 : 32), [t, ez]),
        eJ = i.useCallback(
            (e) => {
                let t = e === ew.length - 1;
                return eD && t ? 70 : eP && e === eL ? 20 : 0;
            },
            [ew.length, eP, eD, eL],
        ),
        e$ = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
        eQ = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = A && tt(e.categoryInfo, H, t),
                    r = ez(n, t),
                    a = eV.has(i);
                return (0, l.jsx)(
                    tn,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => {
                            er.default.track(eT.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eT.liQ.SOUNDBOARD_POPOUT },
                                tab: ej.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !a,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eH(i);
                        },
                        collapsed: a,
                        isSectionNitroLocked: s && eP,
                        showNitroDivider: r && eP,
                    },
                    `header-${i}`,
                );
            },
            [eV, eH, t, ez, A, H, eP],
        ),
        e0 = i.useCallback(
            (e, t) => {
                let n = t === ew.length - 1,
                    i = t === eL;
                return eD && n
                    ? (0, l.jsx)("div", { className: r()(e8.Lk, { [e8.Ns]: i }) })
                    : eP && t === eL
                      ? (0, l.jsx)("div", { className: r()(e8.a3, { [e8.Ns]: i }) })
                      : null;
            },
            [eL, eP, eD, ew.length],
        ),
        e1 = i.useCallback((e) => eR((0, ed.lG)(e, ev, F, s, L)), [s, F, ev, L]),
        e2 = i.useCallback(
            (e) => {
                (0, N.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: L, ...t });
                });
            },
            [L],
        ),
        e3 = i.useCallback(
            () =>
                R
                    ? (0, l.jsx)(Y.Gq, {
                          renderPopout: () => (0, l.jsx)(Y.qn, {}),
                          tooltipText: eb.intl.string(eb.t["19lt24"]),
                          position: "top",
                          clickableClassName: r()(e8.Jm, e8.Zz),
                          children: (0, l.jsx)(v.H, { size: "md", color: "currentColor", className: e8.By }),
                      })
                    : (0, l.jsx)(I.D, {
                          tabIndex: 0,
                          className: e8.Jm,
                          onClick: e2,
                          "aria-label": eb.intl.string(eb.t.kbFsAD),
                          children: (0, l.jsx)(ti, { className: e8.By }),
                      }),
            [R, e2],
        ),
        e7 = i.useCallback(
            (e) =>
                (0, l.jsx)(ek, {
                    soundboardListRef: e,
                    categories: eS,
                    shouldUpsellLockedCategories: eP,
                    listPadding: y,
                    guildId: t,
                    inExpressionPicker: R,
                }),
            [eS, y, eP, t, R],
        ),
        e4 = i.useCallback(() => {
            let e = (0, Z.qD)();
            return (0, k.LE)(e, eC.pe.TIER_2) ?? eb.intl.string(eb.t.pj0XBN);
        }, []),
        ts = i.useCallback(
            () =>
                eD
                    ? (0, l.jsx)(q.d, {
                          showUpsell: eM,
                          text: eY(),
                          button: e4(),
                          buttonAnalyticsObject: { section: eT.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: ex
                              ? (0, l.jsx)($.l, {
                                    size: "sm",
                                    className: e8.ij,
                                    location: c.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                    forceDarkTheme: !0,
                                })
                              : void 0,
                      })
                    : null,
            [eY, e4, eD, ex, eM],
        ),
        tr = i.useCallback(
            (e) =>
                e?.item.type === ea.uq.SOUND
                    ? (0, l.jsx)(eX, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        ta = i.useCallback(() => {
            let e = f.A.getSoundById("3"),
                t = new Audio((0, ec.A)("3"));
            null != w.current && w.current.pause(),
                (w.current = t),
                (t.currentTime = 0),
                (t.volume = (0, eu.A)(e?.volume ?? 1)),
                t.play();
        }, [w]),
        to = (0, x.bG)([en.A], () => en.A.getMediaSessionId());
    return (
        (0, j.A)({
            type: g.ImpressionTypes.POPOUT,
            name: g.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: M,
                guild_id: t,
                media_session_id: to,
                available_custom_sounds_count: eN.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eN.lockedCustomSoundCount,
                favorite_sounds_count: eN.favoriteSoundCount,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != V
                    ? (0, l.jsx)(X.A, {
                          title: eb.intl.string(R ? eb.t.rZEEvU : eb.t.jGDYF0),
                          description: eb.intl.string(R ? eb.t.ZPNG5A : eb.t["grL/hg"]),
                          analyticsLocationSection: eT.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eC.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...U, object: eT.ZSU.SOUNDBOARD_SOUND },
                              location_stack: P,
                              sku_id: k.Ay.getSkuIdForPremiumType(eC.PremiumTypes.TIER_2),
                          },
                          onClose: () => G(null),
                          onUpsellClicked: o,
                          onDisplay: ta,
                      })
                    : void 0,
                (0, l.jsx)(z, {
                    categories: ew,
                    collapsedCategories: eV,
                    containerWidth: a,
                    store: O.LW,
                    onSelectItem: eW,
                    onSearchExpressions: e1,
                    hasSearchResults: e_.length > 0,
                    defaultSearchPlaceholder: eb.intl.string(eb.t.sKt3xS),
                    renderRow: eK,
                    renderSectionHeader: eQ,
                    renderSectionFooter: e0,
                    renderSection: e$,
                    renderCategoryList: e7,
                    renderHeaderAccessories: e3,
                    rowHeight: 48,
                    sectionHeaderHeight: eq,
                    sectionFooterHeight: eJ,
                    itemNodeWidth: 150,
                    gridNavigatorId: es,
                    renderEmptySearchState: tl,
                    renderInspector: tr,
                    gridNotice: E,
                    renderHeader: S,
                    renderUpsell: ts,
                }),
            ],
        })
    );
}
var tr = n(367720);
function ta(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: s,
            onClose: g,
            onSelect: x,
            analyticsSource: A,
            suppressPlaySound: E,
            shouldValidateSelectedSound: C,
            shouldShowLockedSounds: I = !0,
            gridNotice: y,
            inExpressionPicker: S,
            soundButtonOverlay: v,
            listPadding: N,
            renderHeader: _,
            defaultSoundsOnly: T,
        } = e,
        { fetching: j, maybeFetchData: b } = {
            fetching: (0, h.bG)([f.A], () => f.A.isFetchingAnySounds()),
            maybeFetchData: i.useCallback(() => {
                p.E7(), m.bW.loadIfNecessary();
            }, []),
        },
        { analyticsLocations: R } = (0, u.Ay)(c.A.SOUNDBOARD_POPOUT);
    return (
        i.useEffect(() => {
            b();
        }, [b]),
        i.useEffect(() => {
            S || (0, d.Ri)("");
        }, [S]),
        (0, l.jsx)(u.f5, {
            value: R,
            children: (0, l.jsx)(a.l, {
                className: r()(tr.Nz, { [tr.Bg]: j, [tr.yV]: S }),
                children: j
                    ? (0, l.jsx)(o.y, {})
                    : (0, l.jsx)(ts, {
                          guildId: t,
                          channel: n,
                          onClose: g,
                          onSelect: x,
                          shouldValidateSelectedSound: C,
                          containerWidth: s,
                          suppressPlaySound: E,
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
