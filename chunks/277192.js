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
    C = n(228366),
    v = n(442433),
    O = n(537652),
    R = n(212245),
    b = n(139286),
    D = n(915089),
    L = n(724511),
    w = n(850992),
    M = n(464651),
    P = n(735438),
    x = n(962125),
    U = n(428262),
    k = n(240864),
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
                        (0, U.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            O = (0, M.Fk)({
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
                        V({
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
            (0, M.FV)({ searchQuery: y, activeCategoryIndex: C, listRef: N }),
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
                className: G.i,
                children: [
                    y.length > 0 && !a && null != h
                        ? h()
                        : (0, i.jsx)(x.A, {
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
var B = n(942381),
    H = n(602034),
    j = n(892547),
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
        [f, h] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], B.x),
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
            h && _.current?.focus();
        }, [h]),
        (0, i.jsx)("div", {
            className: Y.i,
            children: (0, i.jsx)(j.I, {
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
                    ...(m ? { "aria-activedescendant": (0, H.Aq)(o, E.columnIndex, E.rowIndex) } : void 0),
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
            renderHeader: w,
            renderUpsell: P,
        } = e,
        x = r.useRef(null),
        U = r.useRef(null),
        k = r.useRef(null),
        G = 0 === t.length,
        V = (0, d.RQ)((e) => e.searchQuery),
        B = a.useStore((e) => e.inspectedExpressionPosition),
        H = (0, M.oV)({ gridWrapperRef: x, containerWidth: s, showingEmptyState: G }),
        {
            expressionsGrid: j,
            rowCount: Y,
            rowCountBySection: z,
            columnCounts: $,
            gutterWidth: q,
        } = (0, M.se)({
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
        } = (0, M.JZ)({
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
            [j, Z, X, q, ee, p, a, Y],
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
            (0, i.jsx)(W, {
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
            null != w ? w(es) : (0, i.jsxs)("div", { className: K.wx, children: [" ", es, " "] }),
            G && null != h
                ? h(K.p$)
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          T(U),
                          null != L && (0, i.jsx)("div", { className: K.Eb, children: L }),
                          (0, i.jsx)("div", {
                              ref: x,
                              className: K.AD,
                              id: D,
                              ...Q,
                              children:
                                  null != H
                                      ? (0, i.jsx)(F, {
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
                                            rowCount: Y,
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
var $ = n(89366),
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
var ef = n(931991),
    eh = n(71393),
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
function eN(e, t) {
    let n = t.get("0") ?? eI.pD;
    e.push({ key: el.Cx.DEFAULTS, categoryInfo: { type: el.Cx.DEFAULTS }, items: eS(n, eA) });
}
var ey = n(837381),
    eC = n(990078),
    ev = n(802019),
    eO = n(407698),
    eR = n(652215),
    eb = n(698279),
    eD = n(375708),
    eL = n(917419);
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
                    children: (0, i.jsx)(L.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
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
        o = (0, ey.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === el.Cx.GUILD
        ? (0, i.jsx)(eO.Q, { guild: t.categoryInfo.guild, children: eP(t, r, s, o, a) })
        : (0, i.jsx)(eC.m, {
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
function eU(e) {
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
        _ = (0, U.TW)(d, eT.PremiumTypes.TIER_2),
        f = r.useCallback(
            (e, t, n, r) => {
                let a = s && tn(e.categoryInfo, _, l);
                return (0, i.jsx)(ex, {
                    category: e,
                    categoryIndex: t,
                    onClick: () => {
                        eo.default.track(eR.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eR.liQ.SOUNDBOARD_POPOUT },
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
        store: w.LW,
        categories: n,
        listPadding: o,
        renderCategoryListItem: f,
        rowCount: n.length,
        categoryHeight: 40,
    });
}
var ek = n(554146),
    eG = n(191023),
    eF = n(192308),
    eV = n(349288),
    eB = n(695366),
    eH = n(834730),
    ej = n(789645),
    eY = n(565645),
    eW = n(775602),
    eK = n(826673),
    ez = n(182922),
    e$ = n(532624),
    eq = n(531685),
    eZ = n(723702),
    eX = n(350535),
    eQ = n(319518);
function eJ(e) {
    let { soundboardSound: t, closePicker: r } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        a = (0, _.bG)([p.A], () => null != t && p.A.isFavoriteSound(t.soundId)),
        o = (0, _.bG)([eh.A], () => eh.A.getGuild(t?.guildId)),
        l = (0, _.bG)([eW.A], () => eW.A.useReducedMotion, []),
        u = (0, _.bG)([eq.A], () => eq.A.isFocused()),
        c = (0, _.bG)([e$.Ay], () => e$.Ay.getKeybindForAction(eR.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, i.jsx)(ez.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, i.jsx)(eY.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: eQ.Zg })
                    : (0, i.jsx)(eG.x, { size: "md", color: "currentColor", className: eQ.Zg }),
            graphicSecondary: null != o ? (0, i.jsx)(L.A, { guild: o, shouldAnimate: !l && u }) : null,
            titlePrimary: t.name,
            titleSecondary: o?.name,
            isFavorite: a,
        });
    let f = () => {
            r(),
                (0, eF.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("3633"),
                        n.e("72425"),
                        n.e("46327"),
                        n.e("12618"),
                    ]).then(n.bind(n, 29681));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        },
        h = (0, eK.k8)(ek.M.SOUNDBOARD_KEYBIND_TIP),
        E =
            null != c && (0, eZ.isWindows)() && !h
                ? eD.intl.format(eD.t.udMTth, {
                      keybind: (0, eX.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, i.jsx)(eV.Anchor, { onClick: f, children: e }, t),
                  })
                : null;
    return null == E
        ? null
        : (0, i.jsxs)("div", {
              className: eQ.g,
              children: [
                  (0, i.jsx)(eB.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eQ.QW }),
                  (0, i.jsx)(eH.E, { variant: "text-sm/medium", color: "text-default", className: eQ.L5, children: E }),
                  (0, i.jsx)(T.D, {
                      className: eQ.b,
                      onClick: () => (0, eK.Dr)(ek.M.SOUNDBOARD_KEYBIND_TIP),
                      children: (0, i.jsx)(ej.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var e0 = n(805945),
    e1 = n(890856),
    e2 = n(307301),
    e3 = n(468689);
function e6(e) {
    e3.A.open(e, eR.BEX.SOUNDBOARD),
        (0, eF.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("19397"),
                n.e("67485"),
                n.e("60909"),
                n.e("8516"),
                n.e("25652"),
                n.e("8555"),
                n.e("20287"),
                n.e("83952"),
                n.e("66580"),
                n.e("8979"),
                n.e("20643"),
                n.e("80559"),
                n.e("98913"),
                n.e("74049"),
                n.e("69006"),
                n.e("12811"),
            ]).then(n.bind(n, 191110));
            return (n) => (0, i.jsx)(t, { ...n, guildId: e });
        });
}
var e4 = n(757718),
    e5 = n(508387);
function e7(e) {
    let { guild: t, focused: n, onSelectItem: r, ...s } = e,
        { canCreateExpressions: o } = (0, ef.nr)(t);
    return (0, i.jsx)(eC.m, {
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
                    (0, i.jsx)(eH.E, {
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
            showLockForDisabledSound: f,
            inExpressionPicker: h,
        } = e,
        p = w.LW.useStore((e) => e.inspectedExpressionPosition),
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
                showLockForDisabledSound: f,
                isSoundmoji: !0 === h,
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
var e9 = n(965238);
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
                    "aria-expanded": !n,
                    children: (0, i.jsxs)("div", {
                        className: e9.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case el.Cx.FAVORITES:
                                        return (0, i.jsx)(g.G, { size: "xs", color: "currentColor", className: e9.nr });
                                    case el.Cx.GUILD:
                                        return (0, i.jsx)(L.A, { guild: t.guild, height: 16, width: 16 });
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
    return (0, i.jsx)(O.A, { message: eD.intl.string(eD.t.bgDdNK) });
}
function ts(e) {
    let { className: t } = e,
        [n, s] = r.useState(() => et.dG.getSetting()?.volume === 0);
    r.useEffect(() => {
        let e = (e) => s(0 === e.volume);
        return (
            C.h.subscribe("USER_SOUNDBOARD_SET_VOLUME", e),
            () => {
                C.h.unsubscribe("USER_SOUNDBOARD_SET_VOLUME", e);
            }
        );
    }, []);
    let a = n ? N._ : y.H;
    return (0, i.jsx)(a, { size: "md", color: "currentColor", className: t });
}
function ta(e) {
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
            defaultSoundsOnly: C = !1,
            inExpressionPicker: O,
            analyticsSource: L,
        } = e,
        { audioRef: M } = r.useContext(ee.A),
        { analyticsLocations: P } = (0, c.Ay)(),
        { analyticsLocations: x } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: k } = (0, R.p)(),
        G = r.useMemo(() => ({ ...k, section: eR.JJy.SOUNDBOARD_SOUND_PICKER }), [k]),
        [F, V] = r.useState(null),
        B = (0, m.bG)([er.default], () => er.default.getCurrentUser()),
        H = (0, U.TW)(B, eT.PremiumTypes.TIER_2),
        j = (0, m.bG)([es.A], () => es.A.getVoiceState(t, B?.id ?? eR.dJq)),
        Y = j?.selfDeaf || j?.mute || j?.suppress,
        W = (0, d.RQ)((e) => e.searchQuery),
        K = null != W && "" !== W,
        X = (0, D.GV)(),
        ea = (0, en.St)("soundboard_floating_upsell"),
        {
            categories: eg,
            availableSounds: ey,
            soundCounts: eC,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = (0, m.bG)([er.default], () => er.default.getCurrentUser()),
                s = U.Ay.isPremium(i, eT.PremiumTypes.TIER_2),
                [a, o, l] = (0, m.yK)([p.A], () => [p.A.getSounds(), p.A.getFavorites(), p.A.isFetching()]),
                u = (0, em.Y)(e, !1),
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
                d = U.Ay.canUseSoundboardEverywhere(i),
                _ = (0, m.bG)([eh.A], () => eh.A.getGuild(e?.guild_id)),
                f = (0, m.bG)([ep.A], () => {
                    let { canCreateExpressions: e } = (0, ef.ie)(_);
                    return e;
                }, [_]);
            return r.useMemo(() => {
                let e = 0,
                    i = 0,
                    r = [];
                return n
                    ? (eN(r, a),
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
                              currentGuildHasAddPermissions: f,
                              allSounds: a,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: eA,
                          }),
                      d || eN(r, a),
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
                      d && eN(r, a),
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
            }, [u, a, o, _, f, t, d, c, n, l, s, eA]);
        })(s, void 0, C),
        [ev, eO] = r.useState([]),
        eL = r.useMemo(
            () => (W.length > 0 ? [{ key: el.Cx.SEARCH, categoryInfo: { type: el.Cx.SEARCH }, items: eS(ev) }] : eg),
            [eg, W.length, ev],
        ),
        ew = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eM = r.useMemo(() => eL.filter((e) => e.items.length > 0), [eL]),
        eP = r.useMemo(
            () => eM.findLastIndex((e) => !!(0, U.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eM],
        ),
        ex = !H && g && -1 !== eP,
        ek = !H && g && -1 !== eP,
        eG = et.b0.useSetting(),
        eF = r.useMemo(() => new Set(eG), [eG]),
        eV = null == s,
        eB = U.Ay.canUseCustomCallSounds(B),
        eH = r.useCallback(
            (e) => {
                eF.has(e) ? eF.delete(e) : eF.add(e), et.b0.updateSetting(Array.from(eF));
            },
            [eF],
        ),
        ej = r.useCallback(
            (e, t, n, i) => {
                if (null != _ && !f) return _(e, n);
                let r = (0, eu.Ir)(B, e, s, !1);
                if (null != _ && f && r) _(e, n);
                else if (!h && r && (0, eu.Au)(s))
                    (0, eu.Ak)(e, s?.id ?? eR.dJq, t, i),
                        K &&
                            eo.default.track(eR.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eR.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: W,
                                location_stack: t,
                            });
                else {
                    if ((0, eu.Ir)(B, e, s)) return;
                    g && V(e);
                }
            },
            [h, B, s, g, K, W, _, f],
        ),
        eY = r.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case el.uq.SOUND:
                        let n = tt[e?.category] ?? null,
                            i = e?.item.index;
                        return ej(e.item.sound, null == n ? P : [...P, n], t?.shiftKey !== !0, i);
                    case el.uq.ADD_SOUND:
                        return l(), e6(e.item.guild.id);
                }
            },
            [P, ej, l],
        ),
        eW = r.useCallback(
            (e, n, r, o, l) => {
                let u = eM[r.sectionIndex],
                    c = g && tn(u.categoryInfo, H, t) && ex;
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
                                    inExpressionPicker: O,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eM, g, H, t, h, eY, s, eV, eB, Y, P, I, ex, O],
        ),
        eK = r.useCallback(
            (e, t) => {
                if (e <= 0 || !g) return !1;
                let n = eM[e],
                    i = eM[e - 1],
                    r = tn(n.categoryInfo, H, t),
                    s = tn(i.categoryInfo, H, t);
                return r && !s;
            },
            [eM, g, H],
        ),
        ez = r.useCallback(() => {
            let e = p.A.getSoundById("3");
            null != e && V(e);
        }, []),
        e$ = r.useCallback(() => {
            let e = (0, U.Dd)(eT.PremiumTypes.TIER_2);
            return eD.intl.format(eD.t["tw/SSq"], { nitroTierName: e, onClick: ez });
        }, [ez]),
        eq = r.useCallback((e) => (eK(e, t) ? te : 32), [t, eK]),
        eZ = r.useCallback(
            (e) => {
                let t = e === eM.length - 1;
                return ek && t ? 70 : ex && e === eP ? 20 : 0;
            },
            [eM.length, ex, ek, eP],
        ),
        eX = r.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
        eQ = r.useCallback(
            (e, n) => {
                let r = `${e.key}`,
                    s = g && tn(e.categoryInfo, H, t),
                    a = eK(n, t),
                    o = eF.has(r);
                return (0, i.jsx)(
                    ti,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => {
                            eo.default.track(eR.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eR.liQ.SOUNDBOARD_POPOUT },
                                tab: eb.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !o,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eH(r);
                        },
                        collapsed: o,
                        isSectionNitroLocked: s && ex,
                        showNitroDivider: a && ex,
                    },
                    `header-${r}`,
                );
            },
            [eF, eH, t, eK, g, H, ex],
        ),
        e0 = r.useCallback(
            (e, t) => {
                let n = t === eM.length - 1,
                    r = t === eP;
                return ek && n
                    ? (0, i.jsx)("div", { className: a()(e9.Lk, { [e9.Ns]: r }) })
                    : ex && t === eP
                      ? (0, i.jsx)("div", { className: a()(e9.a3, { [e9.Ns]: r }) })
                      : null;
            },
            [eP, ex, ek, eM.length],
        ),
        e1 = r.useCallback((e) => eO((0, e_.lG)(e, ey, B, s, P)), [s, B, ey, P]),
        e2 = r.useCallback(
            (e) => {
                (0, v.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: P, ...t });
                });
            },
            [P],
        ),
        e3 = r.useCallback(
            () =>
                O
                    ? (0, i.jsx)(q.Gq, {
                          renderPopout: () => (0, i.jsx)(q.qn, {}),
                          tooltipText: eD.intl.string(eD.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(e9.Jm, e9.Zz),
                          children: (0, i.jsx)(y.H, { size: "md", color: "currentColor", className: e9.By }),
                      })
                    : (0, i.jsx)(T.D, {
                          tabIndex: 0,
                          className: e9.Jm,
                          onClick: e2,
                          "aria-label": eD.intl.string(eD.t.kbFsAD),
                          children: (0, i.jsx)(ts, { className: e9.By }),
                      }),
            [O, e2],
        ),
        e4 = r.useCallback(
            (e) =>
                (0, i.jsx)(eU, {
                    soundboardListRef: e,
                    categories: eg,
                    shouldUpsellLockedCategories: ex,
                    listPadding: S,
                    guildId: t,
                    inExpressionPicker: O,
                }),
            [eg, S, ex, t, O],
        ),
        e5 = r.useCallback(() => {
            let e = (0, $.qD)();
            return (0, U.LE)(e, eT.pe.TIER_2) ?? eD.intl.string(eD.t.pj0XBN);
        }, []),
        e7 = r.useCallback(
            () =>
                ek
                    ? (0, i.jsx)(Z.d, {
                          showUpsell: ew,
                          text: e$(),
                          button: e5(),
                          buttonAnalyticsObject: { section: eR.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: ea
                              ? (0, i.jsx)(Q.l, {
                                    size: "sm",
                                    className: e9.ij,
                                    location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                    forceDarkTheme: !0,
                                })
                              : void 0,
                      })
                    : null,
            [e$, e5, ek, ea, ew],
        ),
        ta = r.useCallback(
            (e) =>
                e?.item.type === el.uq.SOUND
                    ? (0, i.jsx)(eJ, { closePicker: l, soundboardSound: e?.item.sound ?? null })
                    : null,
            [l],
        ),
        to = r.useCallback(() => {
            let e = p.A.getSoundById("3"),
                t = new Audio((0, ec.A)("3"));
            null != M.current && M.current.pause(),
                (M.current = t),
                (t.currentTime = 0),
                (t.volume = (0, ed.A)(e?.volume ?? 1)),
                t.play();
        }, [M]),
        tl = (0, m.bG)([ei.A], () => ei.A.getMediaSessionId());
    return (
        (0, b.A)({
            type: E.ImpressionTypes.POPOUT,
            name: E.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: L,
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
                    ? (0, i.jsx)(J.A, {
                          title: eD.intl.string(O ? eD.t.rZEEvU : eD.t.jGDYF0),
                          description: eD.intl.string(O ? eD.t.ZPNG5A : eD.t["grL/hg"]),
                          analyticsLocationSection: eR.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eT.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...G, object: eR.ZSU.SOUNDBOARD_SOUND },
                              location_stack: x,
                              sku_id: U.Ay.getSkuIdForPremiumType(eT.PremiumTypes.TIER_2),
                          },
                          onClose: () => V(null),
                          onUpsellClicked: l,
                          onDisplay: to,
                      })
                    : void 0,
                (0, i.jsx)(z, {
                    categories: eM,
                    collapsedCategories: eF,
                    containerWidth: o,
                    store: w.LW,
                    onSelectItem: eY,
                    onSearchExpressions: e1,
                    hasSearchResults: ev.length > 0,
                    defaultSearchPlaceholder: eD.intl.string(eD.t.sKt3xS),
                    renderRow: eW,
                    renderSectionHeader: eQ,
                    renderSectionFooter: e0,
                    renderSection: eX,
                    renderCategoryList: e4,
                    renderHeaderAccessories: e3,
                    rowHeight: 48,
                    sectionHeaderHeight: eq,
                    sectionFooterHeight: eZ,
                    itemNodeWidth: 150,
                    gridNavigatorId: X,
                    renderEmptySearchState: tr,
                    renderInspector: ta,
                    gridNotice: A,
                    renderHeader: N,
                    renderUpsell: e7,
                }),
            ],
        })
    );
}
var to = n(367720);
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
                className: a()(to.Nz, { [to.Bg]: R, [to.yV]: N }),
                children: R
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
