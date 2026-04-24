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
    _ = n(17928),
    x = n(27232),
    C = n(111159),
    A = n(7689),
    E = n(939249),
    I = n(534514),
    v = n(983851),
    y = n(442433),
    b = n(537652),
    S = n(212245),
    N = n(139286),
    j = n(915089),
    T = n(724511),
    w = n(850992),
    R = n(464651),
    L = n(735438),
    k = n(962125),
    M = n(927578),
    O = n(240864),
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
                rowHeight: _,
                sectionHeaderHeight: x,
                sectionFooterHeight: C,
                renderUpsell: A,
                onScroll: E,
            } = e,
            I = i.useRef(!1),
            v = i.useRef(null),
            y = (0, d.RQ)((e) => e.searchQuery),
            b = s.useStore((e) => e.activeCategoryIndex),
            S = i.useMemo(
                () =>
                    n.map((e) =>
                        (0, M.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            N = (0, R.Fk)({
                activeCategoryIndex: b,
                isScrolling: I,
                listRef: v,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: y,
            }),
            j = i.useCallback(
                (e) => {
                    N(e),
                        U({
                            listRef: v,
                            searchQuery: y,
                            nitroLockedSectionStates: S,
                            scrollTop: e,
                            sectionHeaderHeight: x,
                            sectionFooterHeight: C,
                        }),
                        E?.(e);
                },
                [N, y, S, x, C, E],
            );
        return (
            i.useEffect(() => {
                null != v.current && j(v.current.getScrollerNode()?.scrollTop ?? 0);
            }, [j, v]),
            (0, R.FV)({ searchQuery: y, activeCategoryIndex: b, listRef: v }),
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
                    y.length > 0 && !a && null != p
                        ? p()
                        : (0, l.jsx)(k.A, {
                              role: "none presentation",
                              listPadding: r,
                              onScroll: j,
                              renderRow: o,
                              renderSection: c,
                              renderSectionHeader: u,
                              renderSectionFooter: h,
                              rowCount: f,
                              rowCountBySection: g,
                              rowHeight: _,
                              sectionHeaderHeight: x,
                              sectionFooterHeight: C,
                              stickyHeaders: !0,
                              ref: v,
                          }),
                    A?.(),
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
            let r = (0, O.s)({
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
    B = n(387187);
let H = i.forwardRef(function (e, t) {
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
        [g, _] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], V.x),
        x = i.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : w.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, d.Ri)(e),
                    o.current?.scrollTo(0);
            },
            [o, n],
        ),
        C = i.useCallback(() => {
            x("");
        }, [x]);
    return (
        i.useImperativeHandle(t, () => ({ focus: () => h.current?.focus() })),
        i.useLayoutEffect(() => {
            p && h.current?.focus();
        }, [p]),
        (0, l.jsx)("div", {
            className: B.i,
            children: (0, l.jsx)(F.I, {
                autoFocus: s,
                disabled: !s,
                query: m,
                ref: h,
                placeholder: null != f ? f : s || null == u ? c : u,
                onClear: C,
                onKeyDown: a,
                onChange: x,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": r,
                    "aria-expanded": !0,
                    ...(_ ? { "aria-activedescendant": (0, G.Aq)(r, g.columnIndex, g.rowIndex) } : void 0),
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
            onSelectItem: r,
            onSearchExpressions: o,
            onScroll: c,
            hasSearchResults: u,
            defaultSearchPlaceholder: h,
            emptySearchPlaceholder: m,
            renderEmptyState: p,
            renderRow: f,
            renderSection: g,
            renderSectionHeader: _,
            renderSectionFooter: x,
            renderInspector: C,
            renderEmptySearchState: A,
            renderCategoryList: E,
            renderHeaderAccessories: I,
            rowHeight: v,
            sectionHeaderHeight: y,
            sectionFooterHeight: b,
            itemNodeWidth: S,
            listPaddingRight: N,
            itemNodeMargin: j,
            listPadding: T,
            gridNavigatorId: w,
            gridNotice: L,
            renderHeader: k,
            renderUpsell: M,
        } = e,
        O = i.useRef(null),
        P = i.useRef(null),
        U = i.useRef(null),
        V = 0 === t.length,
        G = (0, d.RQ)((e) => e.searchQuery),
        F = a.useStore((e) => e.inspectedExpressionPosition),
        B = (0, R.oV)({ gridWrapperRef: O, containerWidth: s, showingEmptyState: V }),
        {
            expressionsGrid: K,
            rowCount: z,
            rowCountBySection: Z,
            columnCounts: q,
            gutterWidth: J,
        } = (0, R.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: B,
            listPaddingRight: N,
            itemNodeWidth: S,
            itemNodeMargin: j,
        }),
        {
            getItemProps: Y,
            getRowProps: X,
            gridContainerProps: $,
            handleGridContainerKeyDown: Q,
            isUsingKeyboardNavigation: ee,
        } = (0, R.JZ)({
            columnCounts: q,
            expressionsListRef: P,
            expressionsGrid: K,
            onSelectItem: r,
            store: a,
            gridNavigatorId: w,
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
        en = i.useCallback((e) => _?.(t[e], e), [t, _]),
        el = i.useCallback((e) => x?.(t[e], e), [t, x]),
        ei = i.useCallback(() => C?.(K?.[F.rowIndex]?.[F.columnIndex]), [K, F.columnIndex, F.rowIndex, C]);
    i.useEffect(() => {
        o(G);
    }, [o, G]),
        i.useEffect(() => {
            a.setBottomPosition(O.current?.getBoundingClientRect().bottom ?? null);
        }),
        i.useEffect(() => a.resetStoreState, [a.resetStoreState]),
        i.useLayoutEffect(() => {
            U.current?.focus();
        }, []);
    let es = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(H, {
                ref: U,
                store: a,
                hasSendableExpressions: !0,
                onKeyDown: Q,
                expressionsListRef: P,
                gridNavigatorId: w,
                defaultSearchPlaceholder: h,
                emptySearchPlaceholder: m,
            }),
            I?.(),
        ],
    });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != k ? k(es) : (0, l.jsxs)("div", { className: W.wx, children: [" ", es, " "] }),
            V && null != p
                ? p(W.p$)
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          E(P),
                          null != L && (0, l.jsx)("div", { className: W.Eb, children: L }),
                          (0, l.jsx)("div", {
                              ref: O,
                              className: W.AD,
                              id: w,
                              ...$,
                              children:
                                  null != B
                                      ? (0, l.jsx)(D, {
                                            categories: t,
                                            ref: P,
                                            store: a,
                                            hasSearchResults: u,
                                            listPadding: T,
                                            renderRow: et,
                                            renderSection: g,
                                            renderSectionHeader: null != _ ? en : void 0,
                                            renderSectionFooter: null != x ? el : void 0,
                                            renderInspector: null != C ? ei : void 0,
                                            renderEmptySearchState: A,
                                            rowCount: z,
                                            rowCountBySection: Z,
                                            rowHeight: v,
                                            sectionHeaderHeight: y,
                                            sectionFooterHeight: b,
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
    e_ = n(473145),
    ex = n(805143),
    eC = n(935208);
function eA(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => eC.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eE = n(980504),
    eI = n(788868);
function ev(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: eo.uq.SOUND, sound: e, index: t }));
}
function ey(e, t) {
    let n = t.get("0") ?? eE.pD;
    e.push({ key: eo.Cx.DEFAULTS, categoryInfo: { type: eo.Cx.DEFAULTS }, items: ev(n, eA) });
}
var eb = n(837381),
    eS = n(990078),
    eN = n(802019),
    ej = n(407698),
    eT = n(652215),
    ew = n(698279),
    eR = n(985018),
    eL = n(917419);
let ek = [8, 8, 8, 8];
function eM(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: s } = e;
    return (0, l.jsx)(E.D, {
        ...s,
        onClick: i,
        className: a()(eL.Yl, { [eL.wH]: n }),
        children: (0, l.jsx)(t, { className: eL.xi, color: "currentColor" }),
    });
}
function eO(e, t, n, i, s) {
    switch (e.categoryInfo.type) {
        case eo.Cx.FAVORITES:
            return (0, l.jsx)(eM, { icon: x.G, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eo.Cx.GUILD:
            return (0, l.jsx)(
                E.D,
                {
                    ...i,
                    className: eL.L1,
                    onClick: t,
                    children: (0, l.jsx)(T.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case eo.Cx.DEFAULTS:
            return (0, l.jsx)(eM, { icon: C.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function eP(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: s, isNitroLocked: a } = e,
        r = (0, eb.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === eo.Cx.GUILD
        ? (0, l.jsx)(ej.Q, { guild: t.categoryInfo.guild, children: eO(t, i, s, r, a) })
        : (0, l.jsx)(eS.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case eo.Cx.FAVORITES:
                          return eR.intl.string(eR.t.k8fFjp);
                      case eo.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case eo.Cx.DEFAULTS:
                          return eR.intl.string(eR.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: eO(t, i, s, r, a),
          });
}
function eD(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: r = ek,
            guildId: o,
            inExpressionPicker: c,
            showPinnedDefaultsShortcut: u = !1,
            defaultsSectionIndex: d = -1,
        } = e,
        h = i.useRef(null),
        m = (0, _.bG)([en.default], () => en.default.getCurrentUser()),
        p = (0, M.TW)(m, eI.PremiumTypes.TIER_2),
        f = i.useCallback(
            (e) => {
                d >= 0 && (e(d), t.current?.scrollToSectionTop(d));
            },
            [d, t],
        ),
        g = i.useCallback((e) => 50 * !!u, [u]),
        x = i.useCallback(
            (e, t, n, i) => {
                let a = s && tl(e.categoryInfo, p, o);
                return (0, l.jsx)(eP, {
                    category: e,
                    categoryIndex: t,
                    onClick: () => {
                        es.default.track(eT.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eT.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: ew.kx.SOUNDBOARD,
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
        (0, l.jsx)(eN.A, {
            className: a()(c ? eL.HZ : eL.jv),
            categoryListRef: h,
            expressionsListRef: t,
            store: w.LW,
            categories: n,
            listPadding: r,
            renderCategoryListItem: x,
            rowCount: n.length,
            categoryHeight: 40,
            getScrollOffsetForIndex: g,
            children: (e) =>
                u &&
                (0, l.jsx)(E.D, {
                    "aria-label": eR.intl.string(eR.t.Rtvk9X),
                    className: eL.xe,
                    onClick: () => f(e),
                    children: (0, l.jsx)(C.p, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
        })
    );
}
var eU = n(554146),
    eV = n(191023),
    eG = n(192308),
    eF = n(349288),
    eB = n(695366),
    eH = n(834730),
    eW = n(789645),
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
        u = (0, h.bG)([eJ.Ay], () => eJ.Ay.getKeybindForAction(eT.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, l.jsx)(eq.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(eK.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: eQ.Zg })
                    : (0, l.jsx)(eV.x, { size: "md", color: "currentColor", className: eQ.Zg }),
            graphicSecondary: null != r ? (0, l.jsx)(T.A, { guild: r, shouldAnimate: !o && c }) : null,
            titlePrimary: t.name,
            titleSecondary: r?.name,
            isFavorite: a,
        });
    let m = () => {
            i(),
                (0, eG.openModalLazy)(async () => {
                    let { default: e } = await n.e("12618").then(n.bind(n, 29681));
                    return (t) => (0, l.jsx)(e, { ...t });
                });
        },
        p = (0, eZ.k8)(eU.M.SOUNDBOARD_KEYBIND_TIP),
        g =
            null != u && (0, eX.isWindows)() && !p
                ? eR.intl.format(eR.t.udMTth, {
                      keybind: (0, e$.dI)(u.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(eF.Anchor, { onClick: m, children: e }, t),
                  })
                : null;
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: eQ.g,
              children: [
                  (0, l.jsx)(eB.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eQ.QW }),
                  (0, l.jsx)(eH.E, { variant: "text-sm/medium", color: "text-default", className: eQ.L5, children: g }),
                  (0, l.jsx)(E.D, {
                      className: eQ.b,
                      onClick: () => (0, eZ.Dr)(eU.M.SOUNDBOARD_KEYBIND_TIP),
                      children: (0, l.jsx)(eW.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var e1 = n(805945),
    e2 = n(890856),
    e6 = n(307301),
    e3 = n(997509);
function e4(e) {
    e3.A.open(e, eT.BEX.SOUNDBOARD),
        (0, eG.openModalLazy)(async () => {
            let { default: t } = await Promise.all([n.e("8555"), n.e("12811"), n.e("31019")]).then(n.bind(n, 191110));
            return (n) => (0, l.jsx)(t, { ...n, guildId: e });
        });
}
var e7 = n(757718),
    e8 = n(508387);
function e5(e) {
    let { guild: t, focused: n, onSelectItem: i, ...s } = e,
        { canCreateExpressions: r } = (0, ep.nr)(t);
    return (0, l.jsx)(eS.m, {
        text: eR.intl.string(eR.t["fHo+z1"]),
        shouldShow: !r,
        children: (0, l.jsx)("li", {
            className: e7.H,
            children: (0, l.jsxs)(e2.s, {
                ...s,
                "aria-label": eR.intl.formatToPlainString(eR.t.c1qVYh, { guildName: t.name }),
                className: a()(e8.n4, { [e8.in]: n, [e8.r9]: !r }),
                onClick: () => (null != i ? i() : e4(t.id)),
                children: [
                    (0, l.jsx)(e6.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(eH.E, {
                        variant: "text-xs/semibold",
                        color: r ? "currentColor" : "text-muted",
                        children: eR.intl.string(eR.t["8Fu/S7"]),
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
        f = w.LW.useStore((e) => e.inspectedExpressionPosition),
        g = `${l}-${s}`,
        _ = a && f.rowIndex === l && f.columnIndex === s;
    switch (t.item.type) {
        case eo.uq.SOUND:
            return (0, i.createElement)(e1.Ay, {
                ...o(s),
                ...n,
                key: g,
                sound: t.item.sound,
                suppressPlaySound: r,
                focused: _,
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
                focused: _,
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
                children: (0, l.jsx)(E.D, {
                    className: te.bV,
                    onClick: i,
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: te.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case eo.Cx.FAVORITES:
                                        return (0, l.jsx)(x.G, { size: "xs", color: "currentColor", className: te.nr });
                                    case eo.Cx.GUILD:
                                        return (0, l.jsx)(T.A, { guild: t.guild, height: 16, width: 16 });
                                    case eo.Cx.DEFAULTS:
                                        return (0, l.jsx)(C.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: te.nr,
                                        });
                                    case eo.Cx.SEARCH:
                                        return (0, l.jsx)(A.$, { size: "md", color: "currentColor", className: te.nr });
                                }
                            })(),
                            (0, l.jsx)(I.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: te.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case eo.Cx.FAVORITES:
                                            return eR.intl.string(eR.t.k8fFjp);
                                        case eo.Cx.GUILD:
                                            return t.guild.name;
                                        case eo.Cx.DEFAULTS:
                                            return eR.intl.string(eR.t.Rtvk9X);
                                        case eo.Cx.SEARCH:
                                            return eR.intl.string(eR.t["zkoeq/"]);
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
    return (0, l.jsx)(b.A, { message: eR.intl.string(eR.t.bgDdNK) });
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
            shouldShowLockedSounds: x = !0,
            gridNotice: C,
            soundButtonOverlay: A,
            listPadding: I,
            renderHeader: b,
            defaultSoundsOnly: T = !1,
            inExpressionPicker: R,
            analyticsSource: L,
        } = e,
        { audioRef: k } = i.useContext($.A),
        { analyticsLocations: O } = (0, u.Ay)(),
        { analyticsLocations: P } = (0, u.Ay)(c.A.PREMIUM_UPSELL),
        { location: D } = (0, S.p)(),
        U = i.useMemo(() => ({ ...D, section: eT.JJy.SOUNDBOARD_SOUND_PICKER }), [D]),
        [V, G] = i.useState(null),
        [F, B] = i.useState(null),
        H = (0, _.bG)([en.default], () => en.default.getCurrentUser()),
        W = (0, M.TW)(H, eI.PremiumTypes.TIER_2),
        J = (0, _.bG)([el.A], () => el.A.getVoiceState(t, H?.id ?? eT.dJq)),
        ei = J?.selfDeaf || J?.mute || J?.suppress,
        ea = (0, d.RQ)((e) => e.searchQuery),
        eC = null != ea && "" !== ea,
        eb = (0, j.GV)(),
        eS = er.useConfig({ location: "SoundboardSoundGrid" }),
        eN = ec.useConfig({ location: "SoundboardSoundGrid" }),
        ej = (0, ee.St)("soundboard_floating_upsell"),
        {
            categories: eL,
            availableSounds: ek,
            soundCounts: eM,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1, moveDefaultsToBottom: n = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                s = (0, _.bG)([en.default], () => en.default.getCurrentUser()),
                a = M.Ay.isPremium(s, eI.PremiumTypes.TIER_2),
                [r, o, c] = (0, _.yK)([f.A], () => [f.A.getSounds(), f.A.getFavorites(), f.A.isFetching()]),
                u = (0, ex.Y)(e, !1),
                d = (0, _.yK)([ef.A], () => {
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
                m = (0, _.bG)([ef.A], () => ef.A.getGuild(e?.guild_id)),
                p = (0, _.bG)([eg.A], () => {
                    let { canCreateExpressions: e } = (0, ep.ie)(m);
                    return e;
                }, [m]);
            return i.useMemo(() => {
                let e = 0,
                    i = 0,
                    s = [];
                return l
                    ? (ey(s, r),
                      {
                          categories: s,
                          availableSounds: r.get("0") ?? eE.pD,
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
                          sortSoundsFn: eA,
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
                                  c = r.length < (0, e_.fA)(t) && l,
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
                              sortSoundsFn: eA,
                          }),
                      n || h || ey(s, r),
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
                          sortSoundsFn: eA,
                      }),
                      (n || h) && ey(s, r),
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
            }, [u, r, o, m, p, t, n, h, d, l, c, a, eA]);
        })(s, { moveDefaultsToBottom: eS.reorderDefaultSounds }, T),
        [eO, eP] = i.useState([]),
        eU = i.useMemo(
            () => (ea.length > 0 ? [{ key: eo.Cx.SEARCH, categoryInfo: { type: eo.Cx.SEARCH }, items: ev(eO) }] : eL),
            [eL, ea.length, eO],
        ),
        eV = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eG = i.useMemo(() => eU.filter((e) => e.items.length > 0), [eU]),
        eF = i.useMemo(
            () => eG.findLastIndex((e) => !!(0, M.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eG],
        ),
        eB = !W && x && -1 !== eF,
        eH = !W && x && -1 !== eF,
        eW = !W && eS.reorderDefaultSounds && eL.length > 6,
        eK = Q.b0.useSetting(),
        ez = i.useMemo(() => new Set(eK), [eK]),
        eZ = null == s,
        eq = M.Ay.canUseCustomCallSounds(H),
        eJ = i.useCallback(
            (e) => {
                ez.has(e) ? ez.delete(e) : ez.add(e), Q.b0.updateSetting(Array.from(ez));
            },
            [ez],
        ),
        eY = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, eu.Ir)(H, e, s, !1);
                if (null != h && m && i) h(e, n);
                else if (!p && i && (0, eu.Au)(s))
                    (0, eu.Ak)(e, s?.id ?? eT.dJq, t, l),
                        eC &&
                            es.default.track(eT.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eT.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: ea,
                                location_stack: t,
                            });
                else {
                    if ((0, eu.Ir)(H, e, s)) return;
                    x && G(e);
                }
            },
            [p, H, s, x, eC, ea, h, m],
        ),
        eX = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case eo.uq.SOUND:
                        let n = tn[e?.category] ?? null,
                            l = e?.item.index;
                        return eY(e.item.sound, null == n ? O : [...O, n], t?.shiftKey !== !0, l);
                    case eo.uq.ADD_SOUND:
                        return o(), e4(e.item.guild.id);
                }
            },
            [O, eY, o],
        ),
        e$ = i.useCallback(
            (e, n, i, r, o) => {
                let c = eG[i.sectionIndex],
                    u = x && tl(c.categoryInfo, W, t) && eB,
                    d = (t) => {
                        o(t);
                        let n = e[t];
                        W || n?.item.type !== eo.uq.SOUND || (0, eu.Ir)(H, n.item.sound, s, !1)
                            ? B(null)
                            : B(n.item.sound);
                    };
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        onMouseLeave: () => {
                            B(null);
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
                                        analyticsLocations: O,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: p,
                                    getItemProps: r,
                                    onSelectItem: eX,
                                    onItemMouseEnter: d,
                                    buttonOverlay: A,
                                    isNitroLocked: u,
                                    showLockForDisabledSound: x,
                                    inExpressionPicker: R,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eG, x, W, t, H, p, eX, s, eZ, eq, ei, O, A, eB, R],
        ),
        eQ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !x) return !1;
                let n = eG[e],
                    l = eG[e - 1],
                    i = tl(n.categoryInfo, W, t),
                    s = tl(l.categoryInfo, W, t);
                return i && !s;
            },
            [eG, x, W],
        ),
        e1 = i.useCallback(() => {
            let e = f.A.getSoundById("3");
            null != e && G(e);
        }, []),
        e2 = i.useCallback(() => {
            let e = (0, M.Dd)(eI.PremiumTypes.TIER_2);
            return eR.intl.format(eR.t["tw/SSq"], { nitroTierName: e, onClick: e1 });
        }, [e1]),
        e6 = i.useCallback((e) => (eQ(e, t) ? tt : 32), [t, eQ]),
        e3 = i.useCallback(
            (e) => {
                let t = e === eG.length - 1;
                return eH && t ? 70 : eB && e === eF ? 20 : 0;
            },
            [eG.length, eB, eH, eF],
        ),
        e7 = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
        e8 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = x && tl(e.categoryInfo, W, t),
                    a = eQ(n, t),
                    r = ez.has(i);
                return (0, l.jsx)(
                    ti,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => {
                            es.default.track(eT.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eT.liQ.SOUNDBOARD_POPOUT },
                                tab: ew.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !r,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eJ(i);
                        },
                        collapsed: r,
                        isSectionNitroLocked: s && eB,
                        showNitroDivider: a && eB,
                    },
                    `header-${i}`,
                );
            },
            [ez, eJ, t, eQ, x, W, eB],
        ),
        e5 = i.useCallback(
            (e, t) => {
                let n = t === eG.length - 1,
                    i = t === eF;
                return eH && n
                    ? (0, l.jsx)("div", { className: a()(te.Lk, { [te.Ns]: i }) })
                    : eB && t === eF
                      ? (0, l.jsx)("div", { className: a()(te.a3, { [te.Ns]: i }) })
                      : null;
            },
            [eF, eB, eH, eG.length],
        ),
        ta = i.useCallback((e) => eP((0, em.lG)(e, ek, H, s, O)), [s, H, ek, O]),
        tr = i.useCallback(
            (e) => {
                (0, y.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: O, ...t });
                });
            },
            [O],
        ),
        to = i.useCallback(
            () =>
                R
                    ? (0, l.jsx)(Z.Gq, {
                          renderPopout: () => (0, l.jsx)(Z.qn, {}),
                          tooltipText: eR.intl.string(eR.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(te.Jm, te.Zz),
                          children: (0, l.jsx)(v.H, { size: "md", color: "currentColor", className: te.By }),
                      })
                    : (0, l.jsx)(E.D, {
                          tabIndex: 0,
                          className: te.Jm,
                          onClick: tr,
                          "aria-label": eR.intl.string(eR.t.kbFsAD),
                          children: (0, l.jsx)(v.H, { size: "md", color: "currentColor", className: te.By }),
                      }),
            [R, tr],
        ),
        tc = i.useCallback(
            (e) => {
                let n = eL.filter((e) => !eW || e.categoryInfo.type !== eo.Cx.DEFAULTS),
                    i = eG.findIndex((e) => e.categoryInfo.type === eo.Cx.DEFAULTS);
                return (0, l.jsx)(eD, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: eB,
                    listPadding: I,
                    guildId: t,
                    inExpressionPicker: R,
                    showPinnedDefaultsShortcut: eW,
                    defaultsSectionIndex: i,
                });
            },
            [eL, eG, I, eB, t, R, eW],
        ),
        tu = i.useCallback(() => {
            let e = (0, z.qD)();
            return (0, M.LE)(e, eI.pe.TIER_2) ?? eR.intl.string(eR.t.pj0XBN);
        }, []),
        td = i.useCallback(() => {
            if (eH) {
                let e = eV;
                return (
                    eS.alwaysPinned && (e = !0),
                    (0, l.jsx)(q.d, {
                        showUpsell: e,
                        text: e2(),
                        button: tu(),
                        buttonAnalyticsObject: { section: eT.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: eN.gradientBackground,
                        hoveredNitroLockedSound: F,
                        subscribeButtonVariantOverride: eN.subscribeButtonVariant,
                        useLegacyButton: eN.useLegacyButton,
                        leadingAction: ej
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
            eH,
            eS.alwaysPinned,
            eN.gradientBackground,
            eN.subscribeButtonVariant,
            eN.useLegacyButton,
            ej,
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
            null != k.current && k.current.pause(),
                (k.current = t),
                (t.currentTime = 0),
                (t.volume = (0, eh.A)(e?.volume ?? 1)),
                t.play();
        }, [k]),
        tp = (0, _.bG)([et.A], () => et.A.getMediaSessionId());
    return (
        (0, N.A)({
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
                          title: eR.intl.string(R ? eR.t.rZEEvU : eR.t.jGDYF0),
                          description: eR.intl.string(R ? eR.t.ZPNG5A : eR.t["grL/hg"]),
                          analyticsLocationSection: eT.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eI.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...U, object: eT.ZSU.SOUNDBOARD_SOUND },
                              location_stack: P,
                              sku_id: M.Ay.getSkuIdForPremiumType(eI.PremiumTypes.TIER_2),
                          },
                          onClose: () => G(null),
                          onLearnMore: o,
                          onDisplay: tm,
                      })
                    : void 0,
                (0, l.jsx)(K, {
                    categories: eG,
                    collapsedCategories: ez,
                    containerWidth: r,
                    store: w.LW,
                    onSelectItem: eX,
                    onSearchExpressions: ta,
                    hasSearchResults: eO.length > 0,
                    defaultSearchPlaceholder: eR.intl.string(eR.t.sKt3xS),
                    renderRow: e$,
                    renderSectionHeader: e8,
                    renderSectionFooter: e5,
                    renderSection: e7,
                    renderCategoryList: tc,
                    renderHeaderAccessories: to,
                    rowHeight: 48,
                    sectionHeaderHeight: e6,
                    sectionFooterHeight: e3,
                    itemNodeWidth: 150,
                    gridNavigatorId: eb,
                    renderEmptySearchState: ts,
                    renderInspector: th,
                    gridNotice: C,
                    renderHeader: b,
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
            onSelect: _,
            analyticsSource: x,
            suppressPlaySound: C,
            shouldValidateSelectedSound: A,
            shouldShowLockedSounds: E = !0,
            gridNotice: I,
            inExpressionPicker: v,
            soundButtonOverlay: y,
            listPadding: b,
            renderHeader: S,
            defaultSoundsOnly: N,
        } = e,
        { fetching: j, maybeFetchData: T } = {
            fetching: (0, h.bG)([f.A], () => f.A.isFetchingAnySounds()),
            maybeFetchData: i.useCallback(() => {
                p.E7(), m.bW.loadIfNecessary();
            }, []),
        },
        { analyticsLocations: w } = (0, u.Ay)(c.A.SOUNDBOARD_POPOUT);
    return (
        i.useEffect(() => {
            T();
        }, [T]),
        i.useEffect(() => {
            v || (0, d.Ri)("");
        }, [v]),
        (0, l.jsx)(u.f5, {
            value: w,
            children: (0, l.jsx)(r.l, {
                className: a()(tr.Nz, { [tr.Bg]: j, [tr.yV]: v }),
                children: j
                    ? (0, l.jsx)(o.y, {})
                    : (0, l.jsx)(ta, {
                          guildId: t,
                          channel: n,
                          onClose: g,
                          onSelect: _,
                          shouldValidateSelectedSound: A,
                          containerWidth: s,
                          suppressPlaySound: C,
                          shouldShowLockedSounds: E,
                          gridNotice: I,
                          soundButtonOverlay: y,
                          listPadding: b,
                          renderHeader: S,
                          defaultSoundsOnly: N,
                          inExpressionPicker: v,
                          analyticsSource: x,
                      }),
            }),
        })
    );
}
