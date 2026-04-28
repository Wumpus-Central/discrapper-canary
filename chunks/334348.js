"use strict";
n.d(t, { A: () => ta });
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
    es = n(954571);
let ea = (0, n(945810).mj)({
    name: "2026-03-soundboard-default-reordering",
    kind: "user",
    defaultConfig: { alwaysPinned: !1, reorderDefaultSounds: !1, buttonVariant: "expressive" },
    variations: {
        1: { alwaysPinned: !1, reorderDefaultSounds: !1, buttonVariant: "primary" },
        2: { alwaysPinned: !0, reorderDefaultSounds: !0, buttonVariant: "primary" },
        3: { alwaysPinned: !1, reorderDefaultSounds: !0, buttonVariant: "primary" },
        4: { alwaysPinned: !0, reorderDefaultSounds: !1, buttonVariant: "primary" },
    },
});
var er = n(807348),
    eo = n(536432),
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
function eC(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => ex.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eA = n(980504),
    eE = n(788868);
function eI(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: er.uq.SOUND, sound: e, index: t }));
}
function ey(e, t) {
    let n = t.get("0") ?? eA.pD;
    e.push({ key: er.Cx.DEFAULTS, categoryInfo: { type: er.Cx.DEFAULTS }, items: eI(n, eC) });
}
var ev = n(837381),
    eS = n(990078),
    eN = n(802019),
    ej = n(407698),
    e_ = n(652215),
    eT = n(698279),
    eb = n(985018),
    eR = n(917419);
let eO = [8, 8, 8, 8];
function eL(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: s } = e;
    return (0, l.jsx)(I.D, {
        ...s,
        onClick: i,
        className: a()(eR.Yl, { [eR.wH]: n }),
        children: (0, l.jsx)(t, { className: eR.xi, color: "currentColor" }),
    });
}
function ew(e, t, n, i, s) {
    switch (e.categoryInfo.type) {
        case er.Cx.FAVORITES:
            return (0, l.jsx)(eL, { icon: C.G, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case er.Cx.GUILD:
            return (0, l.jsx)(
                I.D,
                {
                    ...i,
                    className: eR.L1,
                    onClick: t,
                    children: (0, l.jsx)(b.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case er.Cx.DEFAULTS:
            return (0, l.jsx)(eL, { icon: A.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function eM(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: s, isNitroLocked: a } = e,
        r = (0, ev.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === er.Cx.GUILD
        ? (0, l.jsx)(ej.Q, { guild: t.categoryInfo.guild, children: ew(t, i, s, r, a) })
        : (0, l.jsx)(eS.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case er.Cx.FAVORITES:
                          return eb.intl.string(eb.t.k8fFjp);
                      case er.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case er.Cx.DEFAULTS:
                          return eb.intl.string(eb.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: ew(t, i, s, r, a),
          });
}
function ek(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: r = eO,
            guildId: o,
            inExpressionPicker: c,
            showPinnedDefaultsShortcut: u = !1,
            defaultsSectionIndex: d = -1,
        } = e,
        h = i.useRef(null),
        m = (0, x.bG)([en.default], () => en.default.getCurrentUser()),
        p = (0, M.TW)(m, eE.PremiumTypes.TIER_2),
        f = i.useCallback(
            (e) => {
                d >= 0 && (e(d), t.current?.scrollToSectionTop(d));
            },
            [d, t],
        ),
        g = i.useCallback((e) => 50 * !!u, [u]),
        C = i.useCallback(
            (e, t, n, i) => {
                let a = s && tt(e.categoryInfo, p, o);
                return (0, l.jsx)(eM, {
                    category: e,
                    categoryIndex: t,
                    onClick: () => {
                        es.default.track(e_.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: e_.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eT.kx.SOUNDBOARD,
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
            className: a()(c ? eR.HZ : eR.jv),
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
                    "aria-label": eb.intl.string(eb.t.Rtvk9X),
                    className: eR.xe,
                    onClick: () => f(e),
                    children: (0, l.jsx)(A.p, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
        })
    );
}
var eP = n(554146),
    eD = n(191023),
    eU = n(192308),
    eV = n(349288),
    eG = n(695366),
    eF = n(834730),
    eH = n(789645),
    eW = n(565645),
    eB = n(775602),
    eK = n(826673),
    ez = n(182922),
    eZ = n(532624),
    eq = n(531685),
    eJ = n(723702),
    eY = n(350535),
    eX = n(319518);
function e$(e) {
    let { soundboardSound: t, closePicker: i } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        a = (0, h.bG)([f.A], () => null != t && f.A.isFavoriteSound(t.soundId)),
        r = (0, h.bG)([em.A], () => em.A.getGuild(t?.guildId)),
        o = (0, h.bG)([eB.A], () => eB.A.useReducedMotion, []),
        c = (0, h.bG)([eq.A], () => eq.A.isFocused()),
        u = (0, h.bG)([eZ.Ay], () => eZ.Ay.getKeybindForAction(e_.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, l.jsx)(ez.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(eW.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: eX.Zg })
                    : (0, l.jsx)(eD.x, { size: "md", color: "currentColor", className: eX.Zg }),
            graphicSecondary: null != r ? (0, l.jsx)(b.A, { guild: r, shouldAnimate: !o && c }) : null,
            titlePrimary: t.name,
            titleSecondary: r?.name,
            isFavorite: a,
        });
    let m = () => {
            i(),
                (0, eU.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("78401"),
                        n.e("72425"),
                        n.e("46327"),
                        n.e("12618"),
                    ]).then(n.bind(n, 29681));
                    return (t) => (0, l.jsx)(e, { ...t });
                });
        },
        p = (0, eK.k8)(eP.M.SOUNDBOARD_KEYBIND_TIP),
        g =
            null != u && (0, eJ.isWindows)() && !p
                ? eb.intl.format(eb.t.udMTth, {
                      keybind: (0, eY.dI)(u.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(eV.Anchor, { onClick: m, children: e }, t),
                  })
                : null;
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: eX.g,
              children: [
                  (0, l.jsx)(eG.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eX.QW }),
                  (0, l.jsx)(eF.E, { variant: "text-sm/medium", color: "text-default", className: eX.L5, children: g }),
                  (0, l.jsx)(I.D, {
                      className: eX.b,
                      onClick: () => (0, eK.Dr)(eP.M.SOUNDBOARD_KEYBIND_TIP),
                      children: (0, l.jsx)(eH.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var eQ = n(805945),
    e0 = n(890856),
    e1 = n(307301),
    e2 = n(997509);
function e6(e) {
    e2.A.open(e, e_.BEX.SOUNDBOARD),
        (0, eU.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("60049"),
                n.e("92652"),
                n.e("88059"),
                n.e("25738"),
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
var e3 = n(757718),
    e7 = n(508387);
function e4(e) {
    let { guild: t, focused: n, onSelectItem: i, ...s } = e,
        { canCreateExpressions: r } = (0, eh.nr)(t);
    return (0, l.jsx)(eS.m, {
        text: eb.intl.string(eb.t["fHo+z1"]),
        shouldShow: !r,
        children: (0, l.jsx)("li", {
            className: e3.H,
            children: (0, l.jsxs)(e0.s, {
                ...s,
                "aria-label": eb.intl.formatToPlainString(eb.t.c1qVYh, { guildName: t.name }),
                className: a()(e7.n4, { [e7.in]: n, [e7.r9]: !r }),
                onClick: () => (null != i ? i() : e6(t.id)),
                children: [
                    (0, l.jsx)(e1.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(eF.E, {
                        variant: "text-xs/semibold",
                        color: r ? "currentColor" : "text-muted",
                        children: eb.intl.string(eb.t["8Fu/S7"]),
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
        case er.uq.SOUND:
            return (0, i.createElement)(eQ.Ay, {
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
        case er.uq.ADD_SOUND:
            return (0, i.createElement)(e4, {
                ...o(s),
                key: g,
                guild: t.item.guild,
                focused: x,
                onSelectItem: () => c(t),
            });
    }
}
var e5 = n(965238);
let e9 = 32 + J.kg - 8,
    te = {
        [er.Cx.SEARCH]: c.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [er.Cx.DEFAULTS]: c.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [er.Cx.GUILD]: c.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [er.Cx.FAVORITES]: c.A.SOUNDBOARD_FAVORITES_SECTION,
    };
function tt(e, t, n) {
    return (null == n && e.type === er.Cx.GUILD && !t) || (e.type === er.Cx.GUILD && e.guild.id !== n && !t);
}
function tn(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, isSectionNitroLocked: s, showNitroDivider: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            r && (0, l.jsx)(J.Ay, { className: e5.yH }),
            (0, l.jsx)("div", {
                className: a()(e5.hd, { [e5.Jb]: s, [e5.VD]: s }),
                children: (0, l.jsx)(I.D, {
                    className: e5.bV,
                    onClick: i,
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: e5.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case er.Cx.FAVORITES:
                                        return (0, l.jsx)(C.G, { size: "xs", color: "currentColor", className: e5.nr });
                                    case er.Cx.GUILD:
                                        return (0, l.jsx)(b.A, { guild: t.guild, height: 16, width: 16 });
                                    case er.Cx.DEFAULTS:
                                        return (0, l.jsx)(A.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: e5.nr,
                                        });
                                    case er.Cx.SEARCH:
                                        return (0, l.jsx)(E.$, { size: "md", color: "currentColor", className: e5.nr });
                                }
                            })(),
                            (0, l.jsx)(y.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: e5.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case er.Cx.FAVORITES:
                                            return eb.intl.string(eb.t.k8fFjp);
                                        case er.Cx.GUILD:
                                            return t.guild.name;
                                        case er.Cx.DEFAULTS:
                                            return eb.intl.string(eb.t.Rtvk9X);
                                        case er.Cx.SEARCH:
                                            return eb.intl.string(eb.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, l.jsx)(ei.A, {
                                className: e5.nr,
                                direction: n ? ei.A.Directions.RIGHT : ei.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function tl() {
    return (0, l.jsx)(N.A, { message: eb.intl.string(eb.t.bgDdNK) });
}
function ti(e) {
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
        U = i.useMemo(() => ({ ...D, section: e_.JJy.SOUNDBOARD_SOUND_PICKER }), [D]),
        [V, G] = i.useState(null),
        [F, H] = i.useState(null),
        W = (0, x.bG)([en.default], () => en.default.getCurrentUser()),
        B = (0, M.TW)(W, eE.PremiumTypes.TIER_2),
        J = (0, x.bG)([el.A], () => el.A.getVoiceState(t, W?.id ?? e_.dJq)),
        ei = J?.selfDeaf || J?.mute || J?.suppress,
        ex = (0, d.RQ)((e) => e.searchQuery),
        ev = null != ex && "" !== ex,
        eS = (0, T.GV)(),
        eN = ea.useConfig({ location: "SoundboardSoundGrid" }),
        ej = (0, ee.St)("soundboard_floating_upsell"),
        {
            categories: eR,
            availableSounds: eO,
            soundCounts: eL,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1, moveDefaultsToBottom: n = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                s = (0, x.bG)([en.default], () => en.default.getCurrentUser()),
                a = M.Ay.isPremium(s, eE.PremiumTypes.TIER_2),
                [r, o, c] = (0, x.yK)([f.A], () => [f.A.getSounds(), f.A.getFavorites(), f.A.isFetching()]),
                u = (0, eg.Y)(e, !1),
                d = (0, x.yK)([em.A], () => {
                    let e = [];
                    return (
                        u.forEach((t) => {
                            let n = em.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                h = M.Ay.canUseSoundboardEverywhere(s),
                m = (0, x.bG)([em.A], () => em.A.getGuild(e?.guild_id)),
                p = (0, x.bG)([ep.A], () => {
                    let { canCreateExpressions: e } = (0, eh.ie)(m);
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
                          availableSounds: r.get("0") ?? eA.pD,
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
                          let c = eI(o, a);
                          c.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: c });
                      })({
                          sections: s,
                          guildIds: u,
                          allSounds: r,
                          potentialSoundIdsForSection: Array.from(o),
                          sectionType: er.Cx.FAVORITES,
                          sortSoundsFn: eC,
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
                                  o = eI(r, a),
                                  c = r.length < (0, ef.fA)(t) && l,
                                  u = 0 === o.length;
                              (c || u) && !s && o.push({ type: er.uq.ADD_SOUND, guild: t }),
                                  (s && u) ||
                                      e.push({
                                          categoryInfo: { type: er.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: o,
                                      });
                          })(s, m, {
                              currentGuildHasAddPermissions: p,
                              allSounds: r,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: eC,
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
                              let n = eI(i.get(e.id) ?? [], a);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: er.Cx.GUILD, guild: e, isNitroLocked: !s },
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
                          sortSoundsFn: eC,
                      }),
                      (n || h) && ey(s, r),
                      s.forEach((t) => {
                          t.categoryInfo.type === er.Cx.GUILD &&
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
            }, [u, r, o, m, p, t, n, h, d, l, c, a, eC]);
        })(s, { moveDefaultsToBottom: eN.reorderDefaultSounds }, b),
        [ew, eM] = i.useState([]),
        eP = i.useMemo(
            () => (ex.length > 0 ? [{ key: er.Cx.SEARCH, categoryInfo: { type: er.Cx.SEARCH }, items: eI(ew) }] : eR),
            [eR, ex.length, ew],
        ),
        eD = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eU = i.useMemo(() => eP.filter((e) => e.items.length > 0), [eP]),
        eV = i.useMemo(
            () => eU.findLastIndex((e) => !!(0, M.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eU],
        ),
        eG = !B && C && -1 !== eV,
        eF = !B && C && -1 !== eV,
        eH = !B && eN.reorderDefaultSounds && eR.length > 6,
        eW = Q.b0.useSetting(),
        eB = i.useMemo(() => new Set(eW), [eW]),
        eK = null == s,
        ez = M.Ay.canUseCustomCallSounds(W),
        eZ = i.useCallback(
            (e) => {
                eB.has(e) ? eB.delete(e) : eB.add(e), Q.b0.updateSetting(Array.from(eB));
            },
            [eB],
        ),
        eq = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, eo.Ir)(W, e, s, !1);
                if (null != h && m && i) h(e, n);
                else if (!p && i && (0, eo.Au)(s))
                    (0, eo.Ak)(e, s?.id ?? e_.dJq, t, l),
                        ev &&
                            es.default.track(e_.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: e_.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: ex,
                                location_stack: t,
                            });
                else {
                    if ((0, eo.Ir)(W, e, s)) return;
                    C && G(e);
                }
            },
            [p, W, s, C, ev, ex, h, m],
        ),
        eJ = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case er.uq.SOUND:
                        let n = te[e?.category] ?? null,
                            l = e?.item.index;
                        return eq(e.item.sound, null == n ? k : [...k, n], t?.shiftKey !== !0, l);
                    case er.uq.ADD_SOUND:
                        return o(), e6(e.item.guild.id);
                }
            },
            [k, eq, o],
        ),
        eY = i.useCallback(
            (e, n, i, r, o) => {
                let c = eU[i.sectionIndex],
                    u = C && tt(c.categoryInfo, B, t) && eG,
                    d = (t) => {
                        o(t);
                        let n = e[t];
                        B || n?.item.type !== er.uq.SOUND || (0, eo.Ir)(W, n.item.sound, s, !1)
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
                        className: a()(e5.a, { [e5.uL]: u }),
                        children: e.map((e, t) =>
                            (0, l.jsx)(
                                e8,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eK ? ez : !ei,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: k,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: p,
                                    getItemProps: r,
                                    onSelectItem: eJ,
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
            [eU, C, B, t, W, p, eJ, s, eK, ez, ei, k, E, eG, O],
        ),
        eX = i.useCallback(
            (e, t) => {
                if (e <= 0 || !C) return !1;
                let n = eU[e],
                    l = eU[e - 1],
                    i = tt(n.categoryInfo, B, t),
                    s = tt(l.categoryInfo, B, t);
                return i && !s;
            },
            [eU, C, B],
        ),
        eQ = i.useCallback(() => {
            let e = f.A.getSoundById("3");
            null != e && G(e);
        }, []),
        e0 = i.useCallback(() => {
            let e = (0, M.Dd)(eE.PremiumTypes.TIER_2);
            return eb.intl.format(eb.t["tw/SSq"], { nitroTierName: e, onClick: eQ });
        }, [eQ]),
        e1 = i.useCallback((e) => (eX(e, t) ? e9 : 32), [t, eX]),
        e2 = i.useCallback(
            (e) => {
                let t = e === eU.length - 1;
                return eF && t ? 70 : eG && e === eV ? 20 : 0;
            },
            [eU.length, eG, eF, eV],
        ),
        e3 = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
        e7 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = C && tt(e.categoryInfo, B, t),
                    a = eX(n, t),
                    r = eB.has(i);
                return (0, l.jsx)(
                    tn,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => {
                            es.default.track(e_.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: e_.liQ.SOUNDBOARD_POPOUT },
                                tab: eT.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !r,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eZ(i);
                        },
                        collapsed: r,
                        isSectionNitroLocked: s && eG,
                        showNitroDivider: a && eG,
                    },
                    `header-${i}`,
                );
            },
            [eB, eZ, t, eX, C, B, eG],
        ),
        e4 = i.useCallback(
            (e, t) => {
                let n = t === eU.length - 1,
                    i = t === eV;
                return eF && n
                    ? (0, l.jsx)("div", { className: a()(e5.Lk, { [e5.Ns]: i }) })
                    : eG && t === eV
                      ? (0, l.jsx)("div", { className: a()(e5.a3, { [e5.Ns]: i }) })
                      : null;
            },
            [eV, eG, eF, eU.length],
        ),
        ti = i.useCallback((e) => eM((0, ed.lG)(e, eO, W, s, k)), [s, W, eO, k]),
        ts = i.useCallback(
            (e) => {
                (0, S.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: k, ...t });
                });
            },
            [k],
        ),
        ta = i.useCallback(
            () =>
                O
                    ? (0, l.jsx)(Z.Gq, {
                          renderPopout: () => (0, l.jsx)(Z.qn, {}),
                          tooltipText: eb.intl.string(eb.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(e5.Jm, e5.Zz),
                          children: (0, l.jsx)(v.H, { size: "md", color: "currentColor", className: e5.By }),
                      })
                    : (0, l.jsx)(I.D, {
                          tabIndex: 0,
                          className: e5.Jm,
                          onClick: ts,
                          "aria-label": eb.intl.string(eb.t.kbFsAD),
                          children: (0, l.jsx)(v.H, { size: "md", color: "currentColor", className: e5.By }),
                      }),
            [O, ts],
        ),
        tr = i.useCallback(
            (e) => {
                let n = eR.filter((e) => !eH || e.categoryInfo.type !== er.Cx.DEFAULTS),
                    i = eU.findIndex((e) => e.categoryInfo.type === er.Cx.DEFAULTS);
                return (0, l.jsx)(ek, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: eG,
                    listPadding: y,
                    guildId: t,
                    inExpressionPicker: O,
                    showPinnedDefaultsShortcut: eH,
                    defaultsSectionIndex: i,
                });
            },
            [eR, eU, y, eG, t, O, eH],
        ),
        to = i.useCallback(() => {
            let e = (0, z.qD)();
            return (0, M.LE)(e, eE.pe.TIER_2) ?? eb.intl.string(eb.t.pj0XBN);
        }, []),
        tc = i.useCallback(() => {
            if (eF) {
                let e = eD;
                return (
                    eN.alwaysPinned && (e = !0),
                    (0, l.jsx)(q.d, {
                        showUpsell: e,
                        text: e0(),
                        button: to(),
                        buttonAnalyticsObject: { section: e_.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        hoveredNitroLockedSound: F,
                        subscribeButtonVariantOverride: eN.buttonVariant,
                        leadingAction: ej
                            ? (0, l.jsx)(Y.l, {
                                  size: "sm",
                                  className: e5.ij,
                                  location: c.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                  forceDarkTheme: !0,
                              })
                            : void 0,
                    })
                );
            }
            return null;
        }, [e0, to, eF, eN.alwaysPinned, eN.buttonVariant, ej, eD, F]),
        tu = i.useCallback(
            (e) =>
                e?.item.type === er.uq.SOUND
                    ? (0, l.jsx)(e$, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        td = i.useCallback(() => {
            let e = f.A.getSoundById("3"),
                t = new Audio((0, ec.A)("3"));
            null != w.current && w.current.pause(),
                (w.current = t),
                (t.currentTime = 0),
                (t.volume = (0, eu.A)(e?.volume ?? 1)),
                t.play();
        }, [w]),
        th = (0, x.bG)([et.A], () => et.A.getMediaSessionId());
    return (
        (0, _.A)({
            type: g.ImpressionTypes.POPOUT,
            name: g.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: L,
                guild_id: t,
                media_session_id: th,
                available_custom_sounds_count: eL.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eL.lockedCustomSoundCount,
                favorite_sounds_count: eL.favoriteSoundCount,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != V
                    ? (0, l.jsx)(X.A, {
                          title: eb.intl.string(O ? eb.t.rZEEvU : eb.t.jGDYF0),
                          description: eb.intl.string(O ? eb.t.ZPNG5A : eb.t["grL/hg"]),
                          analyticsLocationSection: e_.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eE.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...U, object: e_.ZSU.SOUNDBOARD_SOUND },
                              location_stack: P,
                              sku_id: M.Ay.getSkuIdForPremiumType(eE.PremiumTypes.TIER_2),
                          },
                          onClose: () => G(null),
                          onUpsellClicked: o,
                          onDisplay: td,
                      })
                    : void 0,
                (0, l.jsx)(K, {
                    categories: eU,
                    collapsedCategories: eB,
                    containerWidth: r,
                    store: R.LW,
                    onSelectItem: eJ,
                    onSearchExpressions: ti,
                    hasSearchResults: ew.length > 0,
                    defaultSearchPlaceholder: eb.intl.string(eb.t.sKt3xS),
                    renderRow: eY,
                    renderSectionHeader: e7,
                    renderSectionFooter: e4,
                    renderSection: e3,
                    renderCategoryList: tr,
                    renderHeaderAccessories: ta,
                    rowHeight: 48,
                    sectionHeaderHeight: e1,
                    sectionFooterHeight: e2,
                    itemNodeWidth: 150,
                    gridNavigatorId: eS,
                    renderEmptySearchState: tl,
                    renderInspector: tu,
                    gridNotice: A,
                    renderHeader: N,
                    renderUpsell: tc,
                }),
            ],
        })
    );
}
var ts = n(367720);
function ta(e) {
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
                className: a()(ts.Nz, { [ts.Bg]: T, [ts.yV]: v }),
                children: T
                    ? (0, l.jsx)(o.y, {})
                    : (0, l.jsx)(ti, {
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
