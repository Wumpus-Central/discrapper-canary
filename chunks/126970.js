"use strict";
n.d(t, { A: () => tl });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(305866),
    l = n(289873),
    d = n(793574),
    _ = n(688810),
    u = n(151271),
    c = n(702841),
    E = n(594061),
    h = n(796774),
    m = n(209932);
n(30146);
var f = n(110259),
    g = n(17928),
    p = n(27232),
    A = n(111159),
    I = n(7689),
    T = n(939249),
    S = n(534514),
    N = n(983851),
    C = n(442433),
    R = n(537652),
    O = n(212245),
    y = n(139286),
    v = n(915089),
    D = n(724511),
    L = n(850992),
    b = n(464651),
    w = n(735438),
    P = n(962125),
    k = n(927578),
    M = n(240864),
    U = n(711548);
let x = r.forwardRef(function (e, t) {
        let {
                categories: n,
                store: s,
                hasSearchResults: a,
                listPadding: o,
                renderRow: l,
                renderSection: d,
                renderSectionHeader: _,
                renderSectionFooter: c,
                renderInspector: E,
                renderEmptySearchState: h,
                rowCount: m,
                rowCountBySection: f,
                rowHeight: g,
                sectionHeaderHeight: p,
                sectionFooterHeight: A,
                renderUpsell: I,
                onScroll: T,
            } = e,
            S = r.useRef(!1),
            N = r.useRef(null),
            C = (0, u.RQ)((e) => e.searchQuery),
            R = s.useStore((e) => e.activeCategoryIndex),
            O = r.useMemo(
                () =>
                    n.map((e) =>
                        (0, k.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            y = (0, b.Fk)({
                activeCategoryIndex: R,
                isScrolling: S,
                listRef: N,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: C,
            }),
            v = r.useCallback(
                (e) => {
                    y(e),
                        G({
                            listRef: N,
                            searchQuery: C,
                            nitroLockedSectionStates: O,
                            scrollTop: e,
                            sectionHeaderHeight: p,
                            sectionFooterHeight: A,
                        }),
                        T?.(e);
                },
                [y, C, O, p, A, T],
            );
        return (
            r.useEffect(() => {
                null != N.current && v(N.current.getScrollerNode()?.scrollTop ?? 0);
            }, [v, N]),
            (0, b.FV)({ searchQuery: C, activeCategoryIndex: R, listRef: N }),
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
                    C.length > 0 && !a && null != h
                        ? h()
                        : (0, i.jsx)(P.A, {
                              role: "none presentation",
                              listPadding: o,
                              onScroll: v,
                              renderRow: l,
                              renderSection: d,
                              renderSectionHeader: _,
                              renderSectionFooter: c,
                              rowCount: m,
                              rowCountBySection: f,
                              rowHeight: g,
                              sectionHeaderHeight: p,
                              sectionFooterHeight: A,
                              stickyHeaders: !0,
                              ref: N,
                          }),
                    I?.(),
                    E?.(),
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
            let o = (0, M.s)({
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: i,
                scrollTop: r,
                sectionHeaderHeight: s,
                sectionFooterHeight: a,
            });
            u.RQ.setState({
                isNitroLockedSectionVisible: o.isNitroLockedSectionVisible,
                areOnlyNitroLockedSectionsVisible: o.areOnlyNitroLockedSectionsVisible,
            });
        },
        300,
        { leading: !1, trailing: !0 },
    );
var V = n(942381),
    F = n(602034),
    B = n(892547),
    H = n(387187);
let j = r.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: s,
            onKeyDown: a,
            gridNavigatorId: o,
            expressionsListRef: l,
            defaultSearchPlaceholder: d,
            emptySearchPlaceholder: _,
        } = e,
        c = r.useRef(null),
        [E, h] = (0, u.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], V.x),
        m = n.useStore((e) => e.searchPlaceholder),
        [f, g] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], V.x),
        p = r.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : L.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, u.Ri)(e),
                    l.current?.scrollTo(0);
            },
            [l, n],
        ),
        A = r.useCallback(() => {
            p("");
        }, [p]);
    return (
        r.useImperativeHandle(t, () => ({ focus: () => c.current?.focus() })),
        r.useLayoutEffect(() => {
            h && c.current?.focus();
        }, [h]),
        (0, i.jsx)("div", {
            className: H.i,
            children: (0, i.jsx)(B.I, {
                autoFocus: s,
                disabled: !s,
                query: E,
                ref: c,
                placeholder: null != m ? m : s || null == _ ? d : _,
                onClear: A,
                onKeyDown: a,
                onChange: p,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": o,
                    "aria-expanded": !0,
                    ...(g ? { "aria-activedescendant": (0, F.Aq)(o, f.columnIndex, f.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var W = n(456908);
function Y(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: s,
            store: a,
            onSelectItem: o,
            onSearchExpressions: l,
            onScroll: d,
            hasSearchResults: _,
            defaultSearchPlaceholder: c,
            emptySearchPlaceholder: E,
            renderEmptyState: h,
            renderRow: m,
            renderSection: f,
            renderSectionHeader: g,
            renderSectionFooter: p,
            renderInspector: A,
            renderEmptySearchState: I,
            renderCategoryList: T,
            renderHeaderAccessories: S,
            rowHeight: N,
            sectionHeaderHeight: C,
            sectionFooterHeight: R,
            itemNodeWidth: O,
            listPaddingRight: y,
            itemNodeMargin: v,
            listPadding: D,
            gridNavigatorId: L,
            gridNotice: w,
            renderHeader: P,
            renderUpsell: k,
        } = e,
        M = r.useRef(null),
        U = r.useRef(null),
        G = r.useRef(null),
        V = 0 === t.length,
        F = (0, u.RQ)((e) => e.searchQuery),
        B = a.useStore((e) => e.inspectedExpressionPosition),
        H = (0, b.oV)({ gridWrapperRef: M, containerWidth: s, showingEmptyState: V }),
        {
            expressionsGrid: Y,
            rowCount: K,
            rowCountBySection: z,
            columnCounts: $,
            gutterWidth: q,
        } = (0, b.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: y,
            itemNodeWidth: O,
            itemNodeMargin: v,
        }),
        {
            getItemProps: X,
            getRowProps: Z,
            gridContainerProps: Q,
            handleGridContainerKeyDown: J,
            isUsingKeyboardNavigation: ee,
        } = (0, b.JZ)({
            columnCounts: $,
            expressionsListRef: U,
            expressionsGrid: Y,
            onSelectItem: o,
            store: a,
            gridNavigatorId: L,
        }),
        et = r.useCallback(
            (e, t) =>
                m(
                    Y[e],
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
            [Y, X, Z, q, ee, m, a, K],
        ),
        en = r.useCallback((e) => g?.(t[e], e), [t, g]),
        ei = r.useCallback((e) => p?.(t[e], e), [t, p]),
        er = r.useCallback(() => A?.(Y?.[B.rowIndex]?.[B.columnIndex]), [Y, B.columnIndex, B.rowIndex, A]);
    r.useEffect(() => {
        l(F);
    }, [l, F]),
        r.useEffect(() => {
            a.setBottomPosition(M.current?.getBoundingClientRect().bottom ?? null);
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
                gridNavigatorId: L,
                defaultSearchPlaceholder: c,
                emptySearchPlaceholder: E,
            }),
            S?.(),
        ],
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != P ? P(es) : (0, i.jsxs)("div", { className: W.wx, children: [" ", es, " "] }),
            V && null != h
                ? h(W.p$)
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          T(U),
                          null != w && (0, i.jsx)("div", { className: W.Eb, children: w }),
                          (0, i.jsx)("div", {
                              ref: M,
                              className: W.AD,
                              id: L,
                              ...Q,
                              children:
                                  null != H
                                      ? (0, i.jsx)(x, {
                                            categories: t,
                                            ref: U,
                                            store: a,
                                            hasSearchResults: _,
                                            listPadding: D,
                                            renderRow: et,
                                            renderSection: f,
                                            renderSectionHeader: null != g ? en : void 0,
                                            renderSectionFooter: null != p ? ei : void 0,
                                            renderInspector: null != A ? er : void 0,
                                            renderEmptySearchState: I,
                                            rowCount: K,
                                            rowCountBySection: z,
                                            rowHeight: N,
                                            sectionHeaderHeight: C,
                                            sectionFooterHeight: R,
                                            renderUpsell: k,
                                            onScroll: d,
                                        })
                                      : null,
                          }),
                      ],
                  }),
        ],
    });
}
var K = n(89366),
    z = n(320572),
    $ = n(959249),
    q = n(414872),
    X = n(400669),
    Z = n(2181),
    Q = n(523006),
    J = n(253932),
    ee = n(909536),
    et = n(763827),
    en = n(287809),
    ei = n(977997),
    er = n(147925),
    es = n(954571),
    ea = n(945810);
let eo = (0, ea.mj)({
    name: "2026-03-soundboard-default-reordering",
    kind: "user",
    defaultConfig: { alwaysPinned: !1, reorderDefaultSounds: !1 },
    variations: {
        1: { alwaysPinned: !0, reorderDefaultSounds: !0 },
        2: { alwaysPinned: !1, reorderDefaultSounds: !0 },
        3: { alwaysPinned: !0, reorderDefaultSounds: !1 },
    },
});
var el = n(807348);
let ed = (0, ea.mj)({
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
var e_ = n(536432),
    eu = n(102597),
    ec = n(904054),
    eE = n(147472);
n(321073);
var eh = n(931991),
    em = n(71393),
    ef = n(576705),
    eg = n(473145),
    ep = n(805143),
    eA = n(935208);
function eI(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => eA.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eT = n(980504),
    eS = n(788868);
function eN(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: el.uq.SOUND, sound: e, index: t }));
}
function eC(e, t) {
    let n = t.get("0") ?? eT.pD;
    e.push({ key: el.Cx.DEFAULTS, categoryInfo: { type: el.Cx.DEFAULTS }, items: eN(n, eI) });
}
var eR = n(837381),
    eO = n(990078),
    ey = n(802019),
    ev = n(407698),
    eD = n(652215),
    eL = n(698279),
    eb = n(985018),
    ew = n(917419);
let eP = [8, 8, 8, 8];
function ek(e) {
    let { icon: t, isSelected: n, onClick: r, listItemProps: s } = e;
    return (0, i.jsx)(T.D, {
        ...s,
        onClick: r,
        className: a()(ew.Yl, { [ew.wH]: n }),
        children: (0, i.jsx)(t, { className: ew.xi, color: "currentColor" }),
    });
}
function eM(e, t, n, r, s) {
    switch (e.categoryInfo.type) {
        case el.Cx.FAVORITES:
            return (0, i.jsx)(ek, { icon: p.G, onClick: t, isSelected: n, listItemProps: r }, e.key);
        case el.Cx.GUILD:
            return (0, i.jsx)(
                T.D,
                {
                    ...r,
                    className: ew.L1,
                    onClick: t,
                    children: (0, i.jsx)(D.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case el.Cx.DEFAULTS:
            return (0, i.jsx)(ek, { icon: A.p, onClick: t, isSelected: n, listItemProps: r }, e.key);
        default:
            return null;
    }
}
function eU(e) {
    let { category: t, categoryIndex: n, onClick: r, isSelected: s, isNitroLocked: a } = e,
        o = (0, eR.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === el.Cx.GUILD
        ? (0, i.jsx)(ev.Q, { guild: t.categoryInfo.guild, children: eM(t, r, s, o, a) })
        : (0, i.jsx)(eO.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case el.Cx.FAVORITES:
                          return eb.intl.string(eb.t.k8fFjp);
                      case el.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case el.Cx.DEFAULTS:
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
            listPadding: o = eP,
            guildId: l,
            inExpressionPicker: d,
            showPinnedDefaultsShortcut: _ = !1,
            defaultsSectionIndex: u = -1,
        } = e,
        c = r.useRef(null),
        E = (0, g.bG)([en.default], () => en.default.getCurrentUser()),
        h = (0, k.TW)(E, eS.PremiumTypes.TIER_2),
        m = r.useCallback(
            (e) => {
                u >= 0 && (e(u), t.current?.scrollToSectionTop(u));
            },
            [u, t],
        ),
        f = r.useCallback((e) => 50 * !!_, [_]),
        p = r.useCallback(
            (e, t, n, r) => {
                let a = s && ti(e.categoryInfo, h, l);
                return (0, i.jsx)(eU, {
                    category: e,
                    categoryIndex: t,
                    onClick: () => {
                        es.default.track(eD.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eD.liQ.SOUNDBOARD_POPOUT },
                            guild_id: l ?? null,
                            num_expressions: e.items.length,
                            tab: eL.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n();
                    },
                    isSelected: r,
                    isNitroLocked: a,
                });
            },
            [l, s, h],
        );
    return (
        _ && ((o = [...o])[2] = 50),
        (0, i.jsx)(ey.A, {
            className: a()(d ? ew.HZ : ew.jv),
            categoryListRef: c,
            expressionsListRef: t,
            store: L.LW,
            categories: n,
            listPadding: o,
            renderCategoryListItem: p,
            rowCount: n.length,
            categoryHeight: 40,
            getScrollOffsetForIndex: f,
            children: (e) =>
                _ &&
                (0, i.jsx)(T.D, {
                    "aria-label": eb.intl.string(eb.t.Rtvk9X),
                    className: ew.xe,
                    onClick: () => m(e),
                    children: (0, i.jsx)(A.p, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
        })
    );
}
var eG = n(554146),
    eV = n(191023),
    eF = n(192308),
    eB = n(349288),
    eH = n(695366),
    ej = n(834730),
    eW = n(789645),
    eY = n(565645),
    eK = n(775602),
    ez = n(826673),
    e$ = n(182922),
    eq = n(532624),
    eX = n(531685),
    eZ = n(723702),
    eQ = n(350535),
    eJ = n(319518);
function e0(e) {
    let { soundboardSound: t, closePicker: r } = e,
        s = (0, u.RQ)((e) => e.searchQuery),
        a = (0, c.bG)([m.A], () => null != t && m.A.isFavoriteSound(t.soundId)),
        o = (0, c.bG)([em.A], () => em.A.getGuild(t?.guildId)),
        l = (0, c.bG)([eK.A], () => eK.A.useReducedMotion, []),
        d = (0, c.bG)([eX.A], () => eX.A.isFocused()),
        _ = (0, c.bG)([eq.Ay], () => eq.Ay.getKeybindForAction(eD.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, i.jsx)(e$.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, i.jsx)(eY.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: eJ.Zg })
                    : (0, i.jsx)(eV.x, { size: "md", color: "currentColor", className: eJ.Zg }),
            graphicSecondary: null != o ? (0, i.jsx)(D.A, { guild: o, shouldAnimate: !l && d }) : null,
            titlePrimary: t.name,
            titleSecondary: o?.name,
            isFavorite: a,
        });
    let E = () => {
            r(),
                (0, eF.openModalLazy)(async () => {
                    let { default: e } = await n.e("12618").then(n.bind(n, 29681));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        },
        h = (0, ez.k8)(eG.M.SOUNDBOARD_KEYBIND_TIP),
        f =
            null != _ && (0, eZ.isWindows)() && !h
                ? eb.intl.format(eb.t.udMTth, {
                      keybind: (0, eQ.dI)(_.shortcut, !0),
                      openSettingsHook: (e, t) => (0, i.jsx)(eB.Anchor, { onClick: E, children: e }, t),
                  })
                : null;
    return null == f
        ? null
        : (0, i.jsxs)("div", {
              className: eJ.g,
              children: [
                  (0, i.jsx)(eH.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: eJ.QW }),
                  (0, i.jsx)(ej.E, { variant: "text-sm/medium", color: "text-default", className: eJ.L5, children: f }),
                  (0, i.jsx)(T.D, {
                      className: eJ.b,
                      onClick: () => (0, ez.Dr)(eG.M.SOUNDBOARD_KEYBIND_TIP),
                      children: (0, i.jsx)(eW.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var e1 = n(805945),
    e2 = n(890856),
    e3 = n(307301),
    e6 = n(997509);
function e4(e) {
    e6.A.open(e, eD.BEX.SOUNDBOARD),
        (0, eF.openModalLazy)(async () => {
            let { default: t } = await Promise.all([n.e("8555"), n.e("12811"), n.e("28000")]).then(n.bind(n, 191110));
            return (n) => (0, i.jsx)(t, { ...n, guildId: e });
        });
}
var e7 = n(757718),
    e5 = n(508387);
function e8(e) {
    let { guild: t, focused: n, onSelectItem: r, ...s } = e,
        { canCreateExpressions: o } = (0, eh.nr)(t);
    return (0, i.jsx)(eO.m, {
        text: eb.intl.string(eb.t["fHo+z1"]),
        shouldShow: !o,
        children: (0, i.jsx)("li", {
            className: e7.H,
            children: (0, i.jsxs)(e2.s, {
                ...s,
                "aria-label": eb.intl.formatToPlainString(eb.t.c1qVYh, { guildName: t.name }),
                className: a()(e5.n4, { [e5.in]: n, [e5.r9]: !o }),
                onClick: () => (null != r ? r() : e4(t.id)),
                children: [
                    (0, i.jsx)(e3.j, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(ej.E, {
                        variant: "text-xs/semibold",
                        color: o ? "currentColor" : "text-muted",
                        children: eb.intl.string(eb.t["8Fu/S7"]),
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
            onSelectItem: d,
            onItemMouseEnter: _,
            buttonOverlay: u,
            isNitroLocked: c,
            showLockForDisabledSound: E,
            inExpressionPicker: h,
        } = e,
        m = L.LW.useStore((e) => e.inspectedExpressionPosition),
        f = `${i}-${s}`,
        g = a && m.rowIndex === i && m.columnIndex === s;
    switch (t.item.type) {
        case el.uq.SOUND:
            return (0, r.createElement)(e1.Ay, {
                ...l(s),
                ...n,
                key: f,
                sound: t.item.sound,
                suppressPlaySound: o,
                focused: g,
                onMouseEnter: () => _(s),
                onSelectItem: (e) => d(t, e),
                enableSecondaryActions: !0,
                buttonOverlay: u,
                inNitroLockedSection: c,
                showLockForDisabledSound: E,
                isSoundmoji: !0 === h,
            });
        case el.uq.ADD_SOUND:
            return (0, r.createElement)(e8, {
                ...l(s),
                key: f,
                guild: t.item.guild,
                focused: g,
                onSelectItem: () => d(t),
            });
    }
}
var te = n(965238);
let tt = 32 + q.kg - 8,
    tn = {
        [el.Cx.SEARCH]: d.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [el.Cx.DEFAULTS]: d.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [el.Cx.GUILD]: d.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [el.Cx.FAVORITES]: d.A.SOUNDBOARD_FAVORITES_SECTION,
    };
function ti(e, t, n) {
    return (null == n && e.type === el.Cx.GUILD && !t) || (e.type === el.Cx.GUILD && e.guild.id !== n && !t);
}
function tr(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: r, isSectionNitroLocked: s, showNitroDivider: o } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            o && (0, i.jsx)(q.Ay, { className: te.yH }),
            (0, i.jsx)("div", {
                className: a()(te.hd, { [te.Jb]: s, [te.VD]: s }),
                children: (0, i.jsx)(T.D, {
                    className: te.bV,
                    onClick: r,
                    "aria-expanded": !n,
                    children: (0, i.jsxs)("div", {
                        className: te.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case el.Cx.FAVORITES:
                                        return (0, i.jsx)(p.G, { size: "xs", color: "currentColor", className: te.nr });
                                    case el.Cx.GUILD:
                                        return (0, i.jsx)(D.A, { guild: t.guild, height: 16, width: 16 });
                                    case el.Cx.DEFAULTS:
                                        return (0, i.jsx)(A.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: te.nr,
                                        });
                                    case el.Cx.SEARCH:
                                        return (0, i.jsx)(I.$, { size: "md", color: "currentColor", className: te.nr });
                                }
                            })(),
                            (0, i.jsx)(S.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: te.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case el.Cx.FAVORITES:
                                            return eb.intl.string(eb.t.k8fFjp);
                                        case el.Cx.GUILD:
                                            return t.guild.name;
                                        case el.Cx.DEFAULTS:
                                            return eb.intl.string(eb.t.Rtvk9X);
                                        case el.Cx.SEARCH:
                                            return eb.intl.string(eb.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, i.jsx)(er.A, {
                                className: te.nr,
                                direction: n ? er.A.Directions.RIGHT : er.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function ts() {
    return (0, i.jsx)(R.A, { message: eb.intl.string(eb.t.bgDdNK) });
}
function ta(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: o,
            onClose: l,
            onSelect: c,
            shouldValidateSelectedSound: E = !1,
            suppressPlaySound: h = !1,
            shouldShowLockedSounds: p = !0,
            gridNotice: A,
            soundButtonOverlay: I,
            listPadding: S,
            renderHeader: R,
            defaultSoundsOnly: D = !1,
            inExpressionPicker: b,
            analyticsSource: w,
        } = e,
        { audioRef: P } = r.useContext(Q.A),
        { analyticsLocations: M } = (0, _.Ay)(),
        { analyticsLocations: U } = (0, _.Ay)(d.A.PREMIUM_UPSELL),
        { location: x } = (0, O.p)(),
        G = r.useMemo(() => ({ ...x, section: eD.JJy.SOUNDBOARD_SOUND_PICKER }), [x]),
        [V, F] = r.useState(null),
        [B, H] = r.useState(null),
        j = (0, g.bG)([en.default], () => en.default.getCurrentUser()),
        W = (0, k.TW)(j, eS.PremiumTypes.TIER_2),
        q = (0, g.bG)([ei.A], () => ei.A.getVoiceState(t, j?.id ?? eD.dJq)),
        er = q?.selfDeaf || q?.mute || q?.suppress,
        ea = (0, u.RQ)((e) => e.searchQuery),
        eA = null != ea && "" !== ea,
        eR = (0, v.GV)(),
        eO = eo.useConfig({ location: "SoundboardSoundGrid" }),
        ey = ed.useConfig({ location: "SoundboardSoundGrid" }),
        ev = (0, ee.St)("soundboard_floating_upsell"),
        {
            categories: ew,
            availableSounds: eP,
            soundCounts: ek,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1, moveDefaultsToBottom: n = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                s = (0, g.bG)([en.default], () => en.default.getCurrentUser()),
                a = k.Ay.isPremium(s, eS.PremiumTypes.TIER_2),
                [o, l, d] = (0, g.yK)([m.A], () => [m.A.getSounds(), m.A.getFavorites(), m.A.isFetching()]),
                _ = (0, ep.Y)(e, !1),
                u = (0, g.yK)([em.A], () => {
                    let e = [];
                    return (
                        _.forEach((t) => {
                            let n = em.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                c = k.Ay.canUseSoundboardEverywhere(s),
                E = (0, g.bG)([em.A], () => em.A.getGuild(e?.guild_id)),
                h = (0, g.bG)([ef.A], () => {
                    let { canCreateExpressions: e } = (0, eh.ie)(E);
                    return e;
                }, [E]);
            return r.useMemo(() => {
                let e = 0,
                    r = 0,
                    s = [];
                return i
                    ? (eC(s, o),
                      {
                          categories: s,
                          availableSounds: o.get("0") ?? eT.pD,
                          isFetching: d,
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
                          let d = eN(l, a);
                          d.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: d });
                      })({
                          sections: s,
                          guildIds: _,
                          allSounds: o,
                          potentialSoundIdsForSection: Array.from(l),
                          sectionType: el.Cx.FAVORITES,
                          sortSoundsFn: eI,
                      }),
                      void 0 !== E &&
                          (function (e, t, n) {
                              let {
                                      currentGuildHasAddPermissions: i,
                                      allSounds: r,
                                      filterOutEmptyCurrentGuild: s,
                                      sortSoundsFn: a,
                                  } = n,
                                  o = r.get(t.id) ?? [],
                                  l = eN(o, a),
                                  d = o.length < (0, eg.fA)(t) && i,
                                  _ = 0 === l.length;
                              (d || _) && !s && l.push({ type: el.uq.ADD_SOUND, guild: t }),
                                  (s && _) ||
                                      e.push({
                                          categoryInfo: { type: el.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: l,
                                      });
                          })(s, E, {
                              currentGuildHasAddPermissions: h,
                              allSounds: o,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: eI,
                          }),
                      n || c || eC(s, o),
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
                              let n = eN(r.get(e.id) ?? [], a);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: el.Cx.GUILD, guild: e, isNitroLocked: !s },
                                      key: e.id,
                                      items: n,
                                  });
                          }
                      })({
                          sections: s,
                          guilds: u,
                          currentGuildId: E?.id,
                          allSounds: o,
                          hasNitro: a,
                          sortSoundsFn: eI,
                      }),
                      (n || c) && eC(s, o),
                      s.forEach((t) => {
                          t.categoryInfo.type === el.Cx.GUILD &&
                              (t.categoryInfo.isNitroLocked ? (r += t.items.length) : (e += t.items.length));
                      }),
                      {
                          categories: s,
                          availableSounds: Array.from(o.values()).flat(),
                          isFetching: d,
                          soundCounts: {
                              favoriteSoundCount: l.size,
                              unlockedCustomSoundCount: e,
                              lockedCustomSoundCount: r,
                          },
                      });
            }, [_, o, l, E, h, t, n, c, u, i, d, a, eI]);
        })(s, { moveDefaultsToBottom: eO.reorderDefaultSounds }, D),
        [eM, eU] = r.useState([]),
        eG = r.useMemo(
            () => (ea.length > 0 ? [{ key: el.Cx.SEARCH, categoryInfo: { type: el.Cx.SEARCH }, items: eN(eM) }] : ew),
            [ew, ea.length, eM],
        ),
        eV = (0, u.RQ)((e) => e.isNitroLockedSectionVisible),
        eF = r.useMemo(() => eG.filter((e) => e.items.length > 0), [eG]),
        eB = r.useMemo(
            () => eF.findLastIndex((e) => !!(0, k.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eF],
        ),
        eH = !W && p && -1 !== eB,
        ej = !W && p && -1 !== eB,
        eW = !W && eO.reorderDefaultSounds && ew.length > 6,
        eY = J.b0.useSetting(),
        eK = r.useMemo(() => new Set(eY), [eY]),
        ez = null == s,
        e$ = k.Ay.canUseCustomCallSounds(j),
        eq = r.useCallback(
            (e) => {
                eK.has(e) ? eK.delete(e) : eK.add(e), J.b0.updateSetting(Array.from(eK));
            },
            [eK],
        ),
        eX = r.useCallback(
            (e, t, n, i) => {
                if (null != c && !E) return c(e, n);
                let r = (0, e_.Ir)(j, e, s, !1);
                if (null != c && E && r) c(e, n);
                else if (!h && r && (0, e_.Au)(s))
                    (0, e_.Ak)(e, s?.id ?? eD.dJq, t, i),
                        eA &&
                            es.default.track(eD.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eD.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: ea,
                                location_stack: t,
                            });
                else {
                    if ((0, e_.Ir)(j, e, s)) return;
                    p && F(e);
                }
            },
            [h, j, s, p, eA, ea, c, E],
        ),
        eZ = r.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case el.uq.SOUND:
                        let n = tn[e?.category] ?? null,
                            i = e?.item.index;
                        return eX(e.item.sound, null == n ? M : [...M, n], t?.shiftKey !== !0, i);
                    case el.uq.ADD_SOUND:
                        return l(), e4(e.item.guild.id);
                }
            },
            [M, eX, l],
        ),
        eQ = r.useCallback(
            (e, n, r, o, l) => {
                let d = eF[r.sectionIndex],
                    _ = p && ti(d.categoryInfo, W, t) && eH,
                    u = (t) => {
                        l(t);
                        let n = e[t];
                        W || n?.item.type !== el.uq.SOUND || (0, e_.Ir)(j, n.item.sound, s, !1)
                            ? H(null)
                            : H(n.item.sound);
                    };
                return (0, i.jsx)(
                    "ul",
                    {
                        ...n,
                        onMouseLeave: () => {
                            H(null);
                        },
                        className: a()(te.a, { [te.uL]: _ }),
                        children: e.map((e, t) =>
                            (0, i.jsx)(
                                e9,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: ez ? e$ : !er,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: M,
                                    },
                                    rowIndex: r.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: r.isUsingKeyboardNavigation,
                                    suppressPlaySound: h,
                                    getItemProps: o,
                                    onSelectItem: eZ,
                                    onItemMouseEnter: u,
                                    buttonOverlay: I,
                                    isNitroLocked: _,
                                    showLockForDisabledSound: p,
                                    inExpressionPicker: b,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eF, p, W, t, j, h, eZ, s, ez, e$, er, M, I, eH, b],
        ),
        eJ = r.useCallback(
            (e, t) => {
                if (e <= 0 || !p) return !1;
                let n = eF[e],
                    i = eF[e - 1],
                    r = ti(n.categoryInfo, W, t),
                    s = ti(i.categoryInfo, W, t);
                return r && !s;
            },
            [eF, p, W],
        ),
        e1 = r.useCallback(() => {
            let e = m.A.getSoundById("3");
            null != e && F(e);
        }, []),
        e2 = r.useCallback(() => {
            let e = (0, k.Dd)(eS.PremiumTypes.TIER_2);
            return eb.intl.format(eb.t["tw/SSq"], { nitroTierName: e, onClick: e1 });
        }, [e1]),
        e3 = r.useCallback((e) => (eJ(e, t) ? tt : 32), [t, eJ]),
        e6 = r.useCallback(
            (e) => {
                let t = e === eF.length - 1;
                return ej && t ? 70 : eH && e === eB ? 20 : 0;
            },
            [eF.length, eH, ej, eB],
        ),
        e7 = r.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
        e5 = r.useCallback(
            (e, n) => {
                let r = `${e.key}`,
                    s = p && ti(e.categoryInfo, W, t),
                    a = eJ(n, t),
                    o = eK.has(r);
                return (0, i.jsx)(
                    tr,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => {
                            es.default.track(eD.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eD.liQ.SOUNDBOARD_POPOUT },
                                tab: eL.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !o,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eq(r);
                        },
                        collapsed: o,
                        isSectionNitroLocked: s && eH,
                        showNitroDivider: a && eH,
                    },
                    `header-${r}`,
                );
            },
            [eK, eq, t, eJ, p, W, eH],
        ),
        e8 = r.useCallback(
            (e, t) => {
                let n = t === eF.length - 1,
                    r = t === eB;
                return ej && n
                    ? (0, i.jsx)("div", { className: a()(te.Lk, { [te.Ns]: r }) })
                    : eH && t === eB
                      ? (0, i.jsx)("div", { className: a()(te.a3, { [te.Ns]: r }) })
                      : null;
            },
            [eB, eH, ej, eF.length],
        ),
        ta = r.useCallback((e) => eU((0, eE.lG)(e, eP, j, s, M)), [s, j, eP, M]),
        to = r.useCallback(
            (e) => {
                (0, C.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: M, ...t });
                });
            },
            [M],
        ),
        tl = r.useCallback(
            () =>
                b
                    ? (0, i.jsx)(z.Gq, {
                          renderPopout: () => (0, i.jsx)(z.qn, {}),
                          tooltipText: eb.intl.string(eb.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(te.Jm, te.Zz),
                          children: (0, i.jsx)(N.H, { size: "md", color: "currentColor", className: te.By }),
                      })
                    : (0, i.jsx)(T.D, {
                          tabIndex: 0,
                          className: te.Jm,
                          onClick: to,
                          "aria-label": eb.intl.string(eb.t.kbFsAD),
                          children: (0, i.jsx)(N.H, { size: "md", color: "currentColor", className: te.By }),
                      }),
            [b, to],
        ),
        td = r.useCallback(
            (e) => {
                let n = ew.filter((e) => !eW || e.categoryInfo.type !== el.Cx.DEFAULTS),
                    r = eF.findIndex((e) => e.categoryInfo.type === el.Cx.DEFAULTS);
                return (0, i.jsx)(ex, {
                    soundboardListRef: e,
                    categories: n,
                    shouldUpsellLockedCategories: eH,
                    listPadding: S,
                    guildId: t,
                    inExpressionPicker: b,
                    showPinnedDefaultsShortcut: eW,
                    defaultsSectionIndex: r,
                });
            },
            [ew, eF, S, eH, t, b, eW],
        ),
        t_ = r.useCallback(() => {
            let e = (0, K.qD)();
            return (0, k.LE)(e, eS.pe.TIER_2) ?? eb.intl.string(eb.t.pj0XBN);
        }, []),
        tu = r.useCallback(() => {
            if (ej) {
                let e = eV;
                return (
                    eO.alwaysPinned && (e = !0),
                    (0, i.jsx)($.d, {
                        showUpsell: e,
                        text: e2(),
                        button: t_(),
                        buttonAnalyticsObject: { section: eD.JJy.SOUND_PICKER_FLOATING_UPSELL },
                        useGradientBg: ey.gradientBackground,
                        hoveredNitroLockedSound: B,
                        subscribeButtonVariantOverride: ey.subscribeButtonVariant,
                        useLegacyButton: ey.useLegacyButton,
                        leadingAction: ev
                            ? (0, i.jsx)(X.l, {
                                  size: "sm",
                                  className: te.ij,
                                  location: d.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                  forceDarkTheme: !0,
                              })
                            : void 0,
                    })
                );
            }
            return null;
        }, [
            e2,
            t_,
            ej,
            eO.alwaysPinned,
            ey.gradientBackground,
            ey.subscribeButtonVariant,
            ey.useLegacyButton,
            ev,
            eV,
            B,
        ]),
        tc = r.useCallback(
            (e) =>
                e?.item.type === el.uq.SOUND
                    ? (0, i.jsx)(e0, { closePicker: l, soundboardSound: e?.item.sound ?? null })
                    : null,
            [l],
        ),
        tE = r.useCallback(() => {
            let e = m.A.getSoundById("3"),
                t = new Audio((0, eu.A)("3"));
            null != P.current && P.current.pause(),
                (P.current = t),
                (t.currentTime = 0),
                (t.volume = (0, ec.A)(e?.volume ?? 1)),
                t.play();
        }, [P]),
        th = (0, g.bG)([et.A], () => et.A.getMediaSessionId());
    return (
        (0, y.A)({
            type: f.ImpressionTypes.POPOUT,
            name: f.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: w,
                guild_id: t,
                media_session_id: th,
                available_custom_sounds_count: ek.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: ek.lockedCustomSoundCount,
                favorite_sounds_count: ek.favoriteSoundCount,
            },
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != V
                    ? (0, i.jsx)(Z.A, {
                          title: eb.intl.string(b ? eb.t.rZEEvU : eb.t.jGDYF0),
                          description: eb.intl.string(b ? eb.t.ZPNG5A : eb.t["grL/hg"]),
                          analyticsLocationSection: eD.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eS.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...G, object: eD.ZSU.SOUNDBOARD_SOUND },
                              location_stack: U,
                              sku_id: k.Ay.getSkuIdForPremiumType(eS.PremiumTypes.TIER_2),
                          },
                          onClose: () => F(null),
                          onLearnMore: l,
                          onDisplay: tE,
                      })
                    : void 0,
                (0, i.jsx)(Y, {
                    categories: eF,
                    collapsedCategories: eK,
                    containerWidth: o,
                    store: L.LW,
                    onSelectItem: eZ,
                    onSearchExpressions: ta,
                    hasSearchResults: eM.length > 0,
                    defaultSearchPlaceholder: eb.intl.string(eb.t.sKt3xS),
                    renderRow: eQ,
                    renderSectionHeader: e5,
                    renderSectionFooter: e8,
                    renderSection: e7,
                    renderCategoryList: td,
                    renderHeaderAccessories: tl,
                    rowHeight: 48,
                    sectionHeaderHeight: e3,
                    sectionFooterHeight: e6,
                    itemNodeWidth: 150,
                    gridNavigatorId: eR,
                    renderEmptySearchState: ts,
                    renderInspector: tc,
                    gridNotice: A,
                    renderHeader: R,
                    renderUpsell: tu,
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
            onClose: f,
            onSelect: g,
            analyticsSource: p,
            suppressPlaySound: A,
            shouldValidateSelectedSound: I,
            shouldShowLockedSounds: T = !0,
            gridNotice: S,
            inExpressionPicker: N,
            soundButtonOverlay: C,
            listPadding: R,
            renderHeader: O,
            defaultSoundsOnly: y,
        } = e,
        { fetching: v, maybeFetchData: D } = {
            fetching: (0, c.bG)([m.A], () => m.A.isFetchingAnySounds()),
            maybeFetchData: r.useCallback(() => {
                h.E7(), E.bW.loadIfNecessary();
            }, []),
        },
        { analyticsLocations: L } = (0, _.Ay)(d.A.SOUNDBOARD_POPOUT);
    return (
        r.useEffect(() => {
            D();
        }, [D]),
        r.useEffect(() => {
            N || (0, u.Ri)("");
        }, [N]),
        (0, i.jsx)(_.f5, {
            value: L,
            children: (0, i.jsx)(o.l, {
                className: a()(to.Nz, { [to.Bg]: v, [to.yV]: N }),
                children: v
                    ? (0, i.jsx)(l.y, {})
                    : (0, i.jsx)(ta, {
                          guildId: t,
                          channel: n,
                          onClose: f,
                          onSelect: g,
                          shouldValidateSelectedSound: I,
                          containerWidth: s,
                          suppressPlaySound: A,
                          shouldShowLockedSounds: T,
                          gridNotice: S,
                          soundButtonOverlay: C,
                          listPadding: R,
                          renderHeader: O,
                          defaultSoundsOnly: y,
                          inExpressionPicker: N,
                          analyticsSource: p,
                      }),
            }),
        })
    );
}
