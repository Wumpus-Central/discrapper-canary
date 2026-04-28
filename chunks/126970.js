"use strict";
n.d(t, { A: () => to });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(305866),
    o = n(289873),
    c = n(793574),
    u = n(688810),
    d = n(151271),
    h = n(702841),
    m = n(594061),
    p = n(796774),
    f = n(209932);
n(30146);
var g = n(110259),
    x = n(17928),
    C = n(27232),
    A = n(111159),
    E = n(7689),
    I = n(939249),
    y = n(534514),
    v = n(983851),
    S = n(442433),
    N = n(537652),
    j = n(212245),
    _ = n(139286),
    T = n(915089),
    b = n(724511),
    R = n(850992),
    O = n(464651),
    L = n(735438),
    w = n(962125),
    M = n(927578),
    k = n(240864),
    P = n(711548);
let D = i.forwardRef(function (e, t) {
        let {
                categories: n,
                store: s,
                hasSearchResults: a,
                listPadding: r,
                renderRow: o,
                renderSection: c,
                renderSectionHeader: u,
                renderSectionFooter: h,
                renderInspector: m,
                renderEmptySearchState: p,
                rowCount: f,
                rowCountBySection: g,
                rowHeight: x,
                sectionHeaderHeight: C,
                sectionFooterHeight: A,
                renderUpsell: E,
                onScroll: I,
            } = e,
            y = i.useRef(!1),
            v = i.useRef(null),
            S = (0, d.RQ)((e) => e.searchQuery),
            N = s.useStore((e) => e.activeCategoryIndex),
            j = i.useMemo(
                () =>
                    n.map((e) =>
                        (0, M.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            _ = (0, O.Fk)({
                activeCategoryIndex: N,
                isScrolling: y,
                listRef: v,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: S,
            }),
            T = i.useCallback(
                (e) => {
                    _(e),
                        U({
                            listRef: v,
                            searchQuery: S,
                            nitroLockedSectionStates: j,
                            scrollTop: e,
                            sectionHeaderHeight: C,
                            sectionFooterHeight: A,
                        }),
                        I?.(e);
                },
                [_, S, j, C, A, I],
            );
        return (
            i.useEffect(() => {
                null != v.current && T(v.current.getScrollerNode()?.scrollTop ?? 0);
            }, [T, v]),
            (0, O.FV)({ searchQuery: S, activeCategoryIndex: N, listRef: v }),
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
                className: P.i,
                children: [
                    S.length > 0 && !a && null != p
                        ? p()
                        : (0, l.jsx)(w.A, {
                              role: "none presentation",
                              listPadding: r,
                              onScroll: T,
                              renderRow: o,
                              renderSection: c,
                              renderSectionHeader: u,
                              renderSectionFooter: h,
                              rowCount: f,
                              rowCountBySection: g,
                              rowHeight: x,
                              sectionHeaderHeight: C,
                              sectionFooterHeight: A,
                              stickyHeaders: !0,
                              ref: v,
                          }),
                    E?.(),
                    m?.(),
                ],
            })
        );
    }),
    U = (0, L.throttle)(
        function (e) {
            let {
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: s,
                sectionFooterHeight: a,
            } = e;
            if (null == t.current) return;
            let r = (0, k.s)({
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: s,
                sectionFooterHeight: a,
            });
            d.RQ.setState({
                isNitroLockedSectionVisible: r.isNitroLockedSectionVisible,
                areOnlyNitroLockedSectionsVisible: r.areOnlyNitroLockedSectionsVisible,
            });
        },
        300,
        { leading: !1, trailing: !0 },
    );
var V = n(942381),
    G = n(602034),
    F = n(892547),
    H = n(387187);
let W = i.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: s,
            onKeyDown: a,
            gridNavigatorId: r,
            expressionsListRef: o,
            defaultSearchPlaceholder: c,
            emptySearchPlaceholder: u,
        } = e,
        h = i.useRef(null),
        [m, p] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], V.x),
        f = n.useStore((e) => e.searchPlaceholder),
        [g, x] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], V.x),
        C = i.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : R.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, d.Ri)(e),
                    o.current?.scrollTo(0);
            },
            [o, n],
        ),
        A = i.useCallback(() => {
            C("");
        }, [C]);
    return (
        i.useImperativeHandle(t, () => ({ focus: () => h.current?.focus() })),
        i.useLayoutEffect(() => {
            p && h.current?.focus();
        }, [p]),
        (0, l.jsx)("div", {
            className: H.i,
            children: (0, l.jsx)(F.I, {
                autoFocus: s,
                disabled: !s,
                query: m,
                ref: h,
                placeholder: null != f ? f : s || null == u ? c : u,
                onClear: A,
                onKeyDown: a,
                onChange: C,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": r,
                    "aria-expanded": !0,
                    ...(x ? { "aria-activedescendant": (0, G.Aq)(r, g.columnIndex, g.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var B = n(456908);
function K(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: s,
            store: a,
            onSelectItem: r,
            onSearchExpressions: o,
            onScroll: c,
            hasSearchResults: u,
            defaultSearchPlaceholder: h,
            emptySearchPlaceholder: m,
            renderEmptyState: p,
            renderRow: f,
            renderSection: g,
            renderSectionHeader: x,
            renderSectionFooter: C,
            renderInspector: A,
            renderEmptySearchState: E,
            renderCategoryList: I,
            renderHeaderAccessories: y,
            rowHeight: v,
            sectionHeaderHeight: S,
            sectionFooterHeight: N,
            itemNodeWidth: j,
            listPaddingRight: _,
            itemNodeMargin: T,
            listPadding: b,
            gridNavigatorId: R,
            gridNotice: L,
            renderHeader: w,
            renderUpsell: M,
        } = e,
        k = i.useRef(null),
        P = i.useRef(null),
        U = i.useRef(null),
        V = 0 === t.length,
        G = (0, d.RQ)((e) => e.searchQuery),
        F = a.useStore((e) => e.inspectedExpressionPosition),
        H = (0, O.oV)({ gridWrapperRef: k, containerWidth: s, showingEmptyState: V }),
        {
            expressionsGrid: K,
            rowCount: z,
            rowCountBySection: Z,
            columnCounts: q,
            gutterWidth: J,
        } = (0, O.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: _,
            itemNodeWidth: j,
            itemNodeMargin: T,
        }),
        {
            getItemProps: Y,
            getRowProps: X,
            gridContainerProps: $,
            handleGridContainerKeyDown: Q,
            isUsingKeyboardNavigation: ee,
        } = (0, O.JZ)({
            columnCounts: q,
            expressionsListRef: P,
            expressionsGrid: K,
            onSelectItem: r,
            store: a,
            gridNavigatorId: R,
        }),
        et = i.useCallback(
            (e, t) =>
                f(
                    K[e],
                    X(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: J,
                        rowIndex: e,
                        totalRowCount: z,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => Y(e, t),
                    (t) => a.setInspectedExpressionPosition(t, e),
                ),
            [K, Y, X, J, ee, f, a, z],
        ),
        en = i.useCallback((e) => x?.(t[e], e), [t, x]),
        el = i.useCallback((e) => C?.(t[e], e), [t, C]),
        ei = i.useCallback(() => A?.(K?.[F.rowIndex]?.[F.columnIndex]), [K, F.columnIndex, F.rowIndex, A]);
    i.useEffect(() => {
        o(G);
    }, [o, G]),
        i.useEffect(() => {
            a.setBottomPosition(k.current?.getBoundingClientRect().bottom ?? null);
        }),
        i.useEffect(() => a.resetStoreState, [a.resetStoreState]),
        i.useLayoutEffect(() => {
            U.current?.focus();
        }, []);
    let es = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(W, {
                ref: U,
                store: a,
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
            null != w ? w(es) : (0, l.jsxs)("div", { className: B.wx, children: [" ", es, " "] }),
            V && null != p
                ? p(B.p$)
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          I(P),
                          null != L && (0, l.jsx)("div", { className: B.Eb, children: L }),
                          (0, l.jsx)("div", {
                              ref: k,
                              className: B.AD,
                              id: R,
                              ...$,
                              children:
                                  null != H
                                      ? (0, l.jsx)(D, {
                                            categories: t,
                                            ref: P,
                                            store: a,
                                            hasSearchResults: u,
                                            listPadding: b,
                                            renderRow: et,
                                            renderSection: g,
                                            renderSectionHeader: null != x ? en : void 0,
                                            renderSectionFooter: null != C ? el : void 0,
                                            renderInspector: null != A ? ei : void 0,
                                            renderEmptySearchState: E,
                                            rowCount: z,
                                            rowCountBySection: Z,
                                            rowHeight: v,
                                            sectionHeaderHeight: S,
                                            sectionFooterHeight: N,
                                            renderUpsell: M,
                                            onScroll: c,
                                        })
                                      : null,
                          }),
                      ],
                  }),
        ],
    });
}
var z = n(89366),
    Z = n(320572),
    q = n(959249),
    J = n(414872),
    Y = n(400669),
    X = n(2181),
    $ = n(523006),
    Q = n(253932),
    ee = n(909536),
    et = n(763827),
    en = n(287809),
    el = n(977997),
    ei = n(147925),
    es = n(954571),
    ea = n(945810);
let er = (0, ea.mj)({
    name: "2026-03-soundboard-default-reordering",
    kind: "user",
    defaultConfig: { alwaysPinned: !1, reorderDefaultSounds: !1 },
    variations: {
        1: { alwaysPinned: !0, reorderDefaultSounds: !0 },
        2: { alwaysPinned: !1, reorderDefaultSounds: !0 },
        3: { alwaysPinned: !0, reorderDefaultSounds: !1 },
    },
});
var eo = n(807348);
let ec = (0, ea.mj)({
    name: "2026-03-soundboard-upsell-coloring",
    kind: "user",
    defaultConfig: { gradientBackground: !1, subscribeButtonVariant: "expressive", useLegacyButton: !1 },
    variations: {
        1: { gradientBackground: !1, useLegacyButton: !0 },
        2: { gradientBackground: !0, subscribeButtonVariant: "overlay-primary" },
        3: { gradientBackground: !0, subscribeButtonVariant: "primary" },
        4: { gradientBackground: !0, useLegacyButton: !0 },
        5: { gradientBackground: !1, subscribeButtonVariant: "overlay-primary" },
        6: { gradientBackground: !1, subscribeButtonVariant: "primary" },
    },
});
var eu = n(536432),
    ed = n(102597),
    eh = n(904054),
    em = n(147472);
n(321073);
var ep = n(931991),
    ef = n(71393),
    eg = n(576705),
    ex = n(473145),
    eC = n(805143),
    eA = n(935208);
function eE(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => eA.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eI = n(980504),
    ey = n(788868);
function ev(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: eo.uq.SOUND, sound: e, index: t }));
}
function eS(e, t) {
    let n = t.get("0") ?? eI.pD;
    e.push({ key: eo.Cx.DEFAULTS, categoryInfo: { type: eo.Cx.DEFAULTS }, items: ev(n, eE) });
}
var eN = n(837381),
    ej = n(990078),
    e_ = n(802019),
    eT = n(407698),
    eb = n(652215),
    eR = n(698279),
    eO = n(985018),
    eL = n(917419);
let ew = [8, 8, 8, 8];
function eM(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: s } = e;
    return (0, l.jsx)(I.D, {
        ...s,
        onClick: i,
        className: a()(eL.Yl, { [eL.wH]: n }),
        children: (0, l.jsx)(t, { className: eL.xi, color: "currentColor" }),
    });
}
function ek(e, t, n, i, s) {
    switch (e.categoryInfo.type) {
        case eo.Cx.FAVORITES:
            return (0, l.jsx)(eM, { icon: C.G, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eo.Cx.GUILD:
            return (0, l.jsx)(
                I.D,
                {
                    ...i,
                    className: eL.L1,
                    onClick: t,
                    children: (0, l.jsx)(b.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case eo.Cx.DEFAULTS:
            return (0, l.jsx)(eM, { icon: A.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function eP(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: s, isNitroLocked: a } = e,
        r = (0, eN.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === eo.Cx.GUILD
        ? (0, l.jsx)(eT.Q, { guild: t.categoryInfo.guild, children: ek(t, i, s, r, a) })
        : (0, l.jsx)(ej.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case eo.Cx.FAVORITES:
                          return eO.intl.string(eO.t.k8fFjp);
                      case eo.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case eo.Cx.DEFAULTS:
                          return eO.intl.string(eO.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: ek(t, i, s, r, a),
          });
}
function eD(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: r = ew,
            guildId: o,
            inExpressionPicker: c,
            showPinnedDefaultsShortcut: u = !1,
            defaultsSectionIndex: d = -1,
        } = e,
        h = i.useRef(null),
        m = (0, x.bG)([en.default], () => en.default.getCurrentUser()),
        p = (0, M.TW)(m, ey.PremiumTypes.TIER_2),
        f = i.useCallback(
            (e) => {
                d >= 0 && (e(d), t.current?.scrollToSectionTop(d));
            },
            [d, t],
        ),
        g = i.useCallback((e) => 50 * !!u, [u]),
        C = i.useCallback(
            (e, t, n, i) => {
                let a = s && tl(e.categoryInfo, p, o);
                return (0, l.jsx)(eP, {
                    category: e,
                    categoryIndex: t,
                    onClick: () => {
                        es.default.track(eb.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eb.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eR.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n();
                    },
                    isSelected: i,
                    isNitroLocked: a,
                });
            },
            [o, s, p],
        );
    return (
        u && ((r = [...r])[2] = 50),
        (0, l.jsx)(e_.A, {
            className: a()(c ? eL.HZ : eL.jv),
            categoryListRef: h,
            expressionsListRef: t,
            store: R.LW,
            categories: n,
            listPadding: r,
            renderCategoryListItem: C,
            rowCount: n.length,
            categoryHeight: 40,
            getScrollOffsetForIndex: g,
            children: (e) =>
                u &&
                (0, l.jsx)(I.D, {
                    "aria-label": eO.intl.string(eO.t.Rtvk9X),
                    className: eL.xe,
                    onClick: () => f(e),
                    children: (0, l.jsx)(A.p, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
        })
    );
}
var eU = n(554146),
    eV = n(191023),
    eG = n(192308),
    eF = n(349288),
    eH = n(695366),
    eW = n(834730),
    eB = n(789645),
    eK = n(565645),
    ez = n(775602),
    eZ = n(826673),
    eq = n(182922),
    eJ = n(532624),
    eY = n(531685),
    eX = n(723702),
    e$ = n(350535),
    eQ = n(319518);
function e0(e) {
    let { soundboardSound: t, closePicker: i } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        a = (0, h.bG)([f.A], () => null != t && f.A.isFavoriteSound(t.soundId)),
        r = (0, h.bG)([ef.A], () => ef.A.getGuild(t?.guildId)),
        o = (0, h.bG)([ez.A], () => ez.A.useReducedMotion, []),
        c = (0, h.bG)([eY.A], () => eY.A.isFocused()),
        u = (0, h.bG)([eJ.Ay], () => eJ.Ay.getKeybindForAction(eb.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, l.jsx)(eq.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(eK.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: eQ.Zg })
                    : (0, l.jsx)(eV.x, { size: "md", color: "currentColor", className: eQ.Zg }),
            graphicSecondary: null != r ? (0, l.jsx)(b.A, { guild: r, shouldAnimate: !o && c }) : null,
            titlePrimary: t.name,
            titleSecondary: r?.name,
            isFavorite: a,
        });
    let m = () => {
            i(),
                (0, eG.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("78401"),
                        n.e("72425"),
                        n.e("46327"),
                        n.e("12618"),
                    ]).then(n.bind(n, 29681));
                    return (t) => (0, l.jsx)(e, { ...t });
                });
        },
        p = (0, eZ.k8)(eU.M.SOUNDBOARD_KEYBIND_TIP),
        g =
            null != u && (0, eX.isWindows)() && !p
                ? eO.intl.format(eO.t.udMTth, {
                      keybind: (0, e$.dI)(u.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(eF.Anchor, { onClick: m, children: e }, t),
                  })
                : null;
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: eQ.g,
              children: [
                  (0, l.jsx)(eH.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eQ.QW }),
                  (0, l.jsx)(eW.E, { variant: "text-sm/medium", color: "text-default", className: eQ.L5, children: g }),
                  (0, l.jsx)(I.D, {
                      className: eQ.b,
                      onClick: () => (0, eZ.Dr)(eU.M.SOUNDBOARD_KEYBIND_TIP),
                      children: (0, l.jsx)(eB.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var e1 = n(805945),
    e2 = n(890856),
    e6 = n(307301),
    e3 = n(997509);
function e7(e) {
    e3.A.open(e, eb.BEX.SOUNDBOARD),
        (0, eG.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("73432"),
                n.e("80813"),
                n.e("21177"),
                n.e("20287"),
                n.e("8555"),
                n.e("83952"),
                n.e("66580"),
                n.e("8979"),
                n.e("20643"),
                n.e("80559"),
                n.e("98913"),
                n.e("74049"),
                n.e("52577"),
                n.e("12811"),
                n.e("69006"),
            ]).then(n.bind(n, 191110));
            return (n) => (0, l.jsx)(t, { ...n, guildId: e });
        });
}
var e4 = n(757718),
    e8 = n(508387);
function e5(e) {
    let { guild: t, focused: n, onSelectItem: i, ...s } = e,
        { canCreateExpressions: r } = (0, ep.nr)(t);
    return (0, l.jsx)(ej.m, {
        text: eO.intl.string(eO.t["fHo+z1"]),
        shouldShow: !r,
        children: (0, l.jsx)("li", {
            className: e4.H,
            children: (0, l.jsxs)(e2.s, {
                ...s,
                "aria-label": eO.intl.formatToPlainString(eO.t.c1qVYh, { guildName: t.name }),
                className: a()(e8.n4, { [e8.in]: n, [e8.r9]: !r }),
                onClick: () => (null != i ? i() : e7(t.id)),
                children: [
                    (0, l.jsx)(e6.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(eW.E, {
                        variant: "text-xs/semibold",
                        color: r ? "currentColor" : "text-muted",
                        children: eO.intl.string(eO.t["8Fu/S7"]),
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
            rowIndex: l,
            columnIndex: s,
            isUsingKeyboardNavigation: a,
            suppressPlaySound: r,
            getItemProps: o,
            onSelectItem: c,
            onItemMouseEnter: u,
            buttonOverlay: d,
            isNitroLocked: h,
            showLockForDisabledSound: m,
            inExpressionPicker: p,
        } = e,
        f = R.LW.useStore((e) => e.inspectedExpressionPosition),
        g = `${l}-${s}`,
        x = a && f.rowIndex === l && f.columnIndex === s;
    switch (t.item.type) {
        case eo.uq.SOUND:
            return (0, i.createElement)(e1.Ay, {
                ...o(s),
                ...n,
                key: g,
                sound: t.item.sound,
                suppressPlaySound: r,
                focused: x,
                onMouseEnter: () => u(s),
                onSelectItem: (e) => c(t, e),
                enableSecondaryActions: !0,
                buttonOverlay: d,
                inNitroLockedSection: h,
                showLockForDisabledSound: m,
                isSoundmoji: !0 === p,
            });
        case eo.uq.ADD_SOUND:
            return (0, i.createElement)(e5, {
                ...o(s),
                key: g,
                guild: t.item.guild,
                focused: x,
                onSelectItem: () => c(t),
            });
    }
}
var te = n(965238);
let tt = 32 + J.kg - 8,
    tn = {
        [eo.Cx.SEARCH]: c.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [eo.Cx.DEFAULTS]: c.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [eo.Cx.GUILD]: c.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [eo.Cx.FAVORITES]: c.A.SOUNDBOARD_FAVORITES_SECTION,
    };
function tl(e, t, n) {
    return (null == n && e.type === eo.Cx.GUILD && !t) || (e.type === eo.Cx.GUILD && e.guild.id !== n && !t);
}
function ti(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, isSectionNitroLocked: s, showNitroDivider: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            r && (0, l.jsx)(J.Ay, { className: te.yH }),
            (0, l.jsx)("div", {
                className: a()(te.hd, { [te.Jb]: s, [te.VD]: s }),
                children: (0, l.jsx)(I.D, {
                    className: te.bV,
                    onClick: i,
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: te.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case eo.Cx.FAVORITES:
                                        return (0, l.jsx)(C.G, { size: "xs", color: "currentColor", className: te.nr });
                                    case eo.Cx.GUILD:
                                        return (0, l.jsx)(b.A, { guild: t.guild, height: 16, width: 16 });
                                    case eo.Cx.DEFAULTS:
                                        return (0, l.jsx)(A.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: te.nr,
                                        });
                                    case eo.Cx.SEARCH:
                                        return (0, l.jsx)(E.$, { size: "md", color: "currentColor", className: te.nr });
                                }
                            })(),
                            (0, l.jsx)(y.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: te.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case eo.Cx.FAVORITES:
                                            return eO.intl.string(eO.t.k8fFjp);
                                        case eo.Cx.GUILD:
                                            return t.guild.name;
                                        case eo.Cx.DEFAULTS:
                                            return eO.intl.string(eO.t.Rtvk9X);
                                        case eo.Cx.SEARCH:
                                            return eO.intl.string(eO.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, l.jsx)(ei.A, {
                                className: te.nr,
                                direction: n ? ei.A.Directions.RIGHT : ei.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function ts() {
    return (0, l.jsx)(N.A, { message: eO.intl.string(eO.t.bgDdNK) });
}
function ta(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: r,
            onClose: o,
            onSelect: h,
            shouldValidateSelectedSound: m = !1,
            suppressPlaySound: p = !1,
            shouldShowLockedSounds: C = !0,
            gridNotice: A,
            soundButtonOverlay: E,
            listPadding: y,
            renderHeader: N,
            defaultSoundsOnly: b = !1,
            inExpressionPicker: O,
            analyticsSource: L,
        } = e,
        { audioRef: w } = i.useContext($.A),
        { analyticsLocations: k } = (0, u.Ay)(),
        { analyticsLocations: P } = (0, u.Ay)(c.A.PREMIUM_UPSELL),
        { location: D } = (0, j.p)(),
        U = i.useMemo(() => ({ ...D, section: eb.JJy.SOUNDBOARD_SOUND_PICKER }), [D]),
        [V, G] = i.useState(null),
        [F, H] = i.useState(null),
        W = (0, x.bG)([en.default], () => en.default.getCurrentUser()),
        B = (0, M.TW)(W, ey.PremiumTypes.TIER_2),
        J = (0, x.bG)([el.A], () => el.A.getVoiceState(t, W?.id ?? eb.dJq)),
        ei = J?.selfDeaf || J?.mute || J?.suppress,
        ea = (0, d.RQ)((e) => e.searchQuery),
        eA = null != ea && "" !== ea,
        eN = (0, T.GV)(),
        ej = er.useConfig({ location: "SoundboardSoundGrid" }),
        e_ = ec.useConfig({ location: "SoundboardSoundGrid" }),
        eT = (0, ee.St)("soundboard_floating_upsell"),
        {
            categories: eL,
            availableSounds: ew,
            soundCounts: eM,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1, moveDefaultsToBottom: n = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                s = (0, x.bG)([en.default], () => en.default.getCurrentUser()),
                a = M.Ay.isPremium(s, ey.PremiumTypes.TIER_2),
                [r, o, c] = (0, x.yK)([f.A], () => [f.A.getSounds(), f.A.getFavorites(), f.A.isFetching()]),
                u = (0, eC.Y)(e, !1),
                d = (0, x.yK)([ef.A], () => {
                    let e = [];
                    return (
                        u.forEach((t) => {
                            let n = ef.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                h = M.Ay.canUseSoundboardEverywhere(s),
                m = (0, x.bG)([ef.A], () => ef.A.getGuild(e?.guild_id)),
                p = (0, x.bG)([eg.A], () => {
                    let { canCreateExpressions: e } = (0, ep.ie)(m);
                    return e;
                }, [m]);
            return i.useMemo(() => {
                let e = 0,
                    i = 0,
                    s = [];
                return l
                    ? (eS(s, r),
                      {
                          categories: s,
                          availableSounds: r.get("0") ?? eI.pD,
                          isFetching: c,
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
                                  sortSoundsFn: a,
                              } = e,
                              r = {};
                          for (let e of [...n, "0"])
                              for (let t of l.get(e) ?? [])
                                  null != i.find((e) => e === t.soundId) && (r[t.soundId] = t);
                          let o = [];
                          for (let e of i) {
                              let t = r[e];
                              null != t && o.push(t);
                          }
                          let c = ev(o, a);
                          c.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: c });
                      })({
                          sections: s,
                          guildIds: u,
                          allSounds: r,
                          potentialSoundIdsForSection: Array.from(o),
                          sectionType: eo.Cx.FAVORITES,
                          sortSoundsFn: eE,
                      }),
                      void 0 !== m &&
                          (function (e, t, n) {
                              let {
                                      currentGuildHasAddPermissions: l,
                                      allSounds: i,
                                      filterOutEmptyCurrentGuild: s,
                                      sortSoundsFn: a,
                                  } = n,
                                  r = i.get(t.id) ?? [],
                                  o = ev(r, a),
                                  c = r.length < (0, ex.fA)(t) && l,
                                  u = 0 === o.length;
                              (c || u) && !s && o.push({ type: eo.uq.ADD_SOUND, guild: t }),
                                  (s && u) ||
                                      e.push({
                                          categoryInfo: { type: eo.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: o,
                                      });
                          })(s, m, {
                              currentGuildHasAddPermissions: p,
                              allSounds: r,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: eE,
                          }),
                      n || h || eS(s, r),
                      !(function (e) {
                          let {
                              sections: t,
                              guilds: n,
                              currentGuildId: l,
                              allSounds: i,
                              hasNitro: s,
                              sortSoundsFn: a,
                          } = e;
                          for (let e of n) {
                              if (e.id === l) continue;
                              let n = ev(i.get(e.id) ?? [], a);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: eo.Cx.GUILD, guild: e, isNitroLocked: !s },
                                      key: e.id,
                                      items: n,
                                  });
                          }
                      })({
                          sections: s,
                          guilds: d,
                          currentGuildId: m?.id,
                          allSounds: r,
                          hasNitro: a,
                          sortSoundsFn: eE,
                      }),
                      (n || h) && eS(s, r),
                      s.forEach((t) => {
                          t.categoryInfo.type === eo.Cx.GUILD &&
                              (t.categoryInfo.isNitroLocked ? (i += t.items.length) : (e += t.items.length));
                      }),
                      {
                          categories: s,
                          availableSounds: Array.from(r.values()).flat(),
                          isFetching: c,
                          soundCounts: {
                              favoriteSoundCount: o.size,
                              unlockedCustomSoundCount: e,
                              lockedCustomSoundCount: i,
                          },
                      });
            }, [u, r, o, m, p, t, n, h, d, l, c, a, eE]);
        })(s, { moveDefaultsToBottom: ej.reorderDefaultSounds }, b),
        [ek, eP] = i.useState([]),
        eU = i.useMemo(
            () => (ea.length > 0 ? [{ key: eo.Cx.SEARCH, categoryInfo: { type: eo.Cx.SEARCH }, items: ev(ek) }] : eL),
            [eL, ea.length, ek],
        ),
        eV = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eG = i.useMemo(() => eU.filter((e) => e.items.length > 0), [eU]),
        eF = i.useMemo(
            () => eG.findLastIndex((e) => !!(0, M.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eG],
        ),
        eH = !B && C && -1 !== eF,
        eW = !B && C && -1 !== eF,
        eB = !B && ej.reorderDefaultSounds && eL.length > 6,
        eK = Q.b0.useSetting(),
        ez = i.useMemo(() => new Set(eK), [eK]),
        eZ = null == s,
        eq = M.Ay.canUseCustomCallSounds(W),
        eJ = i.useCallback(
            (e) => {
                ez.has(e) ? ez.delete(e) : ez.add(e), Q.b0.updateSetting(Array.from(ez));
            },
            [ez],
        ),
        eY = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, eu.Ir)(W, e, s, !1);
                if (null != h && m && i) h(e, n);
                else if (!p && i && (0, eu.Au)(s))
                    (0, eu.Ak)(e, s?.id ?? eb.dJq, t, l),
                        eA &&
                            es.default.track(eb.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eb.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: ea,
                                location_stack: t,
                            });
                else {
                    if ((0, eu.Ir)(W, e, s)) return;
                    C && G(e);
                }
            },
            [p, W, s, C, eA, ea, h, m],
        ),
        eX = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case eo.uq.SOUND:
                        let n = tn[e?.category] ?? null,
                            l = e?.item.index;
                        return eY(e.item.sound, null == n ? k : [...k, n], t?.shiftKey !== !0, l);
                    case eo.uq.ADD_SOUND:
                        return o(), e7(e.item.guild.id);
                }
            },
            [k, eY, o],
        ),
        e$ = i.useCallback(
            (e, n, i, r, o) => {
                let c = eG[i.sectionIndex],
                    u = C && tl(c.categoryInfo, B, t) && eH,
                    d = (t) => {
                        o(t);
                        let n = e[t];
                        B || n?.item.type !== eo.uq.SOUND || (0, eu.Ir)(W, n.item.sound, s, !1)
                            ? H(null)
                            : H(n.item.sound);
                    };
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        onMouseLeave: () => {
                            H(null);
                        },
                        className: a()(te.a, { [te.uL]: u }),
                        children: e.map((e, t) =>
                            (0, l.jsx)(
                                e9,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eZ ? eq : !ei,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: k,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: p,
                                    getItemProps: r,
                                    onSelectItem: eX,
                                    onItemMouseEnter: d,
                                    buttonOverlay: E,
                                    isNitroLocked: u,
                                    showLockForDisabledSound: C,
                                    inExpressionPicker: O,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eG, C, B, t, W, p, eX, s, eZ, eq, ei, k, E, eH, O],
        ),
        eQ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !C) return !1;
                let n = eG[e],
                    l = eG[e - 1],
                    i = tl(n.categoryInfo, B, t),
                    s = tl(l.categoryInfo, B, t);
                return i && !s;
            },
            [eG, C, B],
        ),
        e1 = i.useCallback(() => {
            let e = f.A.getSoundById("3");
            null != e && G(e);
        }, []),
        e2 = i.useCallback(() => {
            let e = (0, M.Dd)(ey.PremiumTypes.TIER_2);
            return eO.intl.format(eO.t["tw/SSq"], { nitroTierName: e, onClick: e1 });
        }, [e1]),
        e6 = i.useCallback((e) => (eQ(e, t) ? tt : 32), [t, eQ]),
        e3 = i.useCallback(
            (e) => {
                let t = e === eG.length - 1;
                return eW && t ? 70 : eH && e === eF ? 20 : 0;
            },
            [eG.length, eH, eW, eF],
        ),
        e4 = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
        e8 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = C && tl(e.categoryInfo, B, t),
                    a = eQ(n, t),
                    r = ez.has(i);
                return (0, l.jsx)(
                    ti,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => {
                            es.default.track(eb.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eb.liQ.SOUNDBOARD_POPOUT },
                                tab: eR.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !r,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eJ(i);
                        },
                        collapsed: r,
                        isSectionNitroLocked: s && eH,
                        showNitroDivider: a && eH,
                    },
                    `header-${i}`,
                );
            },
            [ez, eJ, t, eQ, C, B, eH],
        ),
        e5 = i.useCallback(
            (e, t) => {
                let n = t === eG.length - 1,
                    i = t === eF;
                return eW && n
                    ? (0, l.jsx)("div", { className: a()(te.Lk, { [te.Ns]: i }) })
                    : eH && t === eF
                      ? (0, l.jsx)("div", { className: a()(te.a3, { [te.Ns]: i }) })
                      : null;
            },
            [eF, eH, eW, eG.length],
        ),
        ta = i.useCallback((e) => eP((0, em.lG)(e, ew, W, s, k)), [s, W, ew, k]),
        tr = i.useCallback(
            (e) => {
                (0, S.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: k, ...t });
                });
            },
            [k],
        ),
        to = i.useCallback(
            () =>
                O
                    ? (0, l.jsx)(Z.Gq, {
                          renderPopout: () => (0, l.jsx)(Z.qn, {}),
                          tooltipText: eO.intl.string(eO.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(te.Jm, te.Zz),
                          children: (0, l.jsx)(v.H, { size: "md", color: "currentColor", className: te.By }),
                      })
                    : (0, l.jsx)(I.D, {
                          tabIndex: 0,
                          className: te.Jm,
                          onClick: tr,
                          "aria-label": eO.intl.string(eO.t.kbFsAD),
                          children: (0, l.jsx)(v.H, { size: "md", color: "currentColor", className: te.By }),
                      }),
            [O, tr],
        ),
        tc = i.useCallback(
            (e) => {
                let n = eL.filter((e) => !eB || e.categoryInfo.type !== eo.Cx.DEFAULTS),
                    i = eG.findIndex((e) => e.categoryInfo.type === eo.Cx.DEFAULTS);
                return (0, l.jsx)(eD, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: eH,
                    listPadding: y,
                    guildId: t,
                    inExpressionPicker: O,
                    showPinnedDefaultsShortcut: eB,
                    defaultsSectionIndex: i,
                });
            },
            [eL, eG, y, eH, t, O, eB],
        ),
        tu = i.useCallback(() => {
            let e = (0, z.qD)();
            return (0, M.LE)(e, ey.pe.TIER_2) ?? eO.intl.string(eO.t.pj0XBN);
        }, []),
        td = i.useCallback(() => {
            if (eW) {
                let e = eV;
                return (
                    ej.alwaysPinned && (e = !0),
                    (0, l.jsx)(q.d, {
                        showUpsell: e,
                        text: e2(),
                        button: tu(),
                        buttonAnalyticsObject: { section: eb.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: e_.gradientBackground,
                        hoveredNitroLockedSound: F,
                        subscribeButtonVariantOverride: e_.subscribeButtonVariant,
                        useLegacyButton: e_.useLegacyButton,
                        leadingAction: eT
                            ? (0, l.jsx)(Y.l, {
                                  size: "sm",
                                  className: te.ij,
                                  location: c.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                  forceDarkTheme: !0,
                              })
                            : void 0,
                    })
                );
            }
            return null;
        }, [
            e2,
            tu,
            eW,
            ej.alwaysPinned,
            e_.gradientBackground,
            e_.subscribeButtonVariant,
            e_.useLegacyButton,
            eT,
            eV,
            F,
        ]),
        th = i.useCallback(
            (e) =>
                e?.item.type === eo.uq.SOUND
                    ? (0, l.jsx)(e0, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        tm = i.useCallback(() => {
            let e = f.A.getSoundById("3"),
                t = new Audio((0, ed.A)("3"));
            null != w.current && w.current.pause(),
                (w.current = t),
                (t.currentTime = 0),
                (t.volume = (0, eh.A)(e?.volume ?? 1)),
                t.play();
        }, [w]),
        tp = (0, x.bG)([et.A], () => et.A.getMediaSessionId());
    return (
        (0, _.A)({
            type: g.ImpressionTypes.POPOUT,
            name: g.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: L,
                guild_id: t,
                media_session_id: tp,
                available_custom_sounds_count: eM.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eM.lockedCustomSoundCount,
                favorite_sounds_count: eM.favoriteSoundCount,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != V
                    ? (0, l.jsx)(X.A, {
                          title: eO.intl.string(O ? eO.t.rZEEvU : eO.t.jGDYF0),
                          description: eO.intl.string(O ? eO.t.ZPNG5A : eO.t["grL/hg"]),
                          analyticsLocationSection: eb.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: ey.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...U, object: eb.ZSU.SOUNDBOARD_SOUND },
                              location_stack: P,
                              sku_id: M.Ay.getSkuIdForPremiumType(ey.PremiumTypes.TIER_2),
                          },
                          onClose: () => G(null),
                          onUpsellClicked: o,
                          onDisplay: tm,
                      })
                    : void 0,
                (0, l.jsx)(K, {
                    categories: eG,
                    collapsedCategories: ez,
                    containerWidth: r,
                    store: R.LW,
                    onSelectItem: eX,
                    onSearchExpressions: ta,
                    hasSearchResults: ek.length > 0,
                    defaultSearchPlaceholder: eO.intl.string(eO.t.sKt3xS),
                    renderRow: e$,
                    renderSectionHeader: e8,
                    renderSectionFooter: e5,
                    renderSection: e4,
                    renderCategoryList: tc,
                    renderHeaderAccessories: to,
                    rowHeight: 48,
                    sectionHeaderHeight: e6,
                    sectionFooterHeight: e3,
                    itemNodeWidth: 150,
                    gridNavigatorId: eN,
                    renderEmptySearchState: ts,
                    renderInspector: th,
                    gridNotice: A,
                    renderHeader: N,
                    renderUpsell: td,
                }),
            ],
        })
    );
}
var tr = n(367720);
function to(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: s,
            onClose: g,
            onSelect: x,
            analyticsSource: C,
            suppressPlaySound: A,
            shouldValidateSelectedSound: E,
            shouldShowLockedSounds: I = !0,
            gridNotice: y,
            inExpressionPicker: v,
            soundButtonOverlay: S,
            listPadding: N,
            renderHeader: j,
            defaultSoundsOnly: _,
        } = e,
        { fetching: T, maybeFetchData: b } = {
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
            v || (0, d.Ri)("");
        }, [v]),
        (0, l.jsx)(u.f5, {
            value: R,
            children: (0, l.jsx)(r.l, {
                className: a()(tr.Nz, { [tr.Bg]: T, [tr.yV]: v }),
                children: T
                    ? (0, l.jsx)(o.y, {})
                    : (0, l.jsx)(ta, {
                          guildId: t,
                          channel: n,
                          onClose: g,
                          onSelect: x,
                          shouldValidateSelectedSound: E,
                          containerWidth: s,
                          suppressPlaySound: A,
                          shouldShowLockedSounds: I,
                          gridNotice: y,
                          soundButtonOverlay: S,
                          listPadding: N,
                          renderHeader: j,
                          defaultSoundsOnly: _,
                          inExpressionPicker: v,
                          analyticsSource: C,
                      }),
            }),
        })
    );
}
