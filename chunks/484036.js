"use strict";
n.d(t, { A: () => tc });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(305866),
    o = n(289873),
    d = n(793574),
    c = n(688810),
    u = n(151271),
    _ = n(702841),
    E = n(594061),
    A = n(796774),
    h = n(209932);
n(30146);
var I = n(562708),
    f = n(17928),
    p = n(27232),
    T = n(406810),
    m = n(111159),
    g = n(7689),
    S = n(939249),
    N = n(297264),
    C = n(358618),
    O = n(983851),
    R = n(442433),
    L = n(537652),
    D = n(212245),
    y = n(139286),
    v = n(915089),
    b = n(724511),
    M = n(850992),
    P = n(887695),
    U = n(435558),
    w = n(962125),
    G = n(158045),
    x = n(240864),
    k = n(36852);
let F = r.forwardRef(function (e, t) {
        let {
                categories: n,
                store: a,
                hasSearchResults: s,
                listPadding: l,
                renderRow: o,
                renderSection: d,
                renderSectionHeader: c,
                renderSectionFooter: _,
                renderInspector: E,
                renderEmptySearchState: A,
                rowCount: h,
                rowCountBySection: I,
                rowHeight: f,
                sectionHeaderHeight: p,
                sectionFooterHeight: T,
                renderUpsell: m,
                onScroll: g,
            } = e,
            S = r.useRef(!1),
            N = r.useRef(null),
            C = (0, u.RQ)((e) => e.searchQuery),
            O = a.useStore((e) => e.activeCategoryIndex),
            R = r.useMemo(
                () =>
                    n.map((e) =>
                        (0, G.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            L = (0, P.Fk)({
                activeCategoryIndex: O,
                isScrolling: S,
                listRef: N,
                onActiveCategoryIndexChange: a.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: C,
            }),
            D = r.useCallback(
                (e) => {
                    L(e),
                        V({
                            listRef: N,
                            searchQuery: C,
                            nitroLockedSectionStates: R,
                            scrollTop: e,
                            sectionHeaderHeight: p,
                            sectionFooterHeight: T,
                        }),
                        g?.(e);
                },
                [L, C, R, p, T, g],
            );
        return (
            r.useEffect(() => {
                null != N.current && D(N.current.getScrollerNode()?.scrollTop ?? 0);
            }, [D, N]),
            (0, P.FV)({ searchQuery: C, activeCategoryIndex: O, listRef: N }),
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
                    C.length > 0 && !s && null != A
                        ? A()
                        : (0, i.jsx)(w.A, {
                              role: "none presentation",
                              listPadding: l,
                              onScroll: D,
                              renderRow: o,
                              renderSection: d,
                              renderSectionHeader: c,
                              renderSectionFooter: _,
                              rowCount: h,
                              rowCountBySection: I,
                              rowHeight: f,
                              sectionHeaderHeight: p,
                              sectionFooterHeight: T,
                              stickyHeaders: !0,
                              ref: N,
                          }),
                    m?.(),
                    E?.(),
                ],
            })
        );
    }),
    V = (0, U.throttle)(
        function (e) {
            let {
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: i,
                scrollTop: r,
                sectionHeaderHeight: a,
                sectionFooterHeight: s,
            } = e;
            if (null == t.current) return;
            let l = (0, x.s)({
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: i,
                scrollTop: r,
                sectionHeaderHeight: a,
                sectionFooterHeight: s,
            });
            u.RQ.setState({
                isNitroLockedSectionVisible: l.isNitroLockedSectionVisible,
                areOnlyNitroLockedSectionsVisible: l.areOnlyNitroLockedSectionsVisible,
            });
        },
        300,
        { leading: !1, trailing: !0 },
    );
var B = n(462180),
    H = n(602034),
    j = n(892547),
    W = n(893195);
let Y = r.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: a,
            onKeyDown: s,
            gridNavigatorId: l,
            expressionsListRef: o,
            defaultSearchPlaceholder: d,
            emptySearchPlaceholder: c,
        } = e,
        _ = r.useRef(null),
        [E, A] = (0, u.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], B.x),
        h = n.useStore((e) => e.searchPlaceholder),
        [I, f] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], B.x),
        p = r.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : M.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, u.Ri)(e),
                    o.current?.scrollTo(0);
            },
            [o, n],
        ),
        T = r.useCallback(() => {
            p("");
        }, [p]);
    return (
        r.useImperativeHandle(t, () => ({ focus: () => _.current?.focus() })),
        r.useLayoutEffect(() => {
            A && _.current?.focus();
        }, [A]),
        (0, i.jsx)("div", {
            className: W.i,
            children: (0, i.jsx)(j.I, {
                autoFocus: a,
                disabled: !a,
                query: E,
                ref: _,
                placeholder: null != h ? h : a || null == c ? d : c,
                onClear: T,
                onKeyDown: s,
                onChange: p,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": l,
                    "aria-expanded": !0,
                    ...(f ? { "aria-activedescendant": (0, H.Aq)(l, I.columnIndex, I.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var K = n(141972);
function $(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: a,
            store: s,
            onSelectItem: l,
            onSearchExpressions: o,
            onScroll: d,
            hasSearchResults: c,
            defaultSearchPlaceholder: _,
            emptySearchPlaceholder: E,
            renderEmptyState: A,
            renderRow: h,
            renderSection: I,
            renderSectionHeader: f,
            renderSectionFooter: p,
            renderInspector: T,
            renderEmptySearchState: m,
            renderCategoryList: g,
            renderHeaderAccessories: S,
            rowHeight: N,
            sectionHeaderHeight: C,
            sectionFooterHeight: O,
            itemNodeWidth: R,
            listPaddingRight: L,
            itemNodeMargin: D,
            listPadding: y,
            gridNavigatorId: v,
            gridNotice: b,
            renderHeader: M,
            renderUpsell: U,
        } = e,
        w = r.useRef(null),
        G = r.useRef(null),
        x = r.useRef(null),
        k = 0 === t.length,
        V = (0, u.RQ)((e) => e.searchQuery),
        B = s.useStore((e) => e.inspectedExpressionPosition),
        H = (0, P.oV)({ gridWrapperRef: w, containerWidth: a, showingEmptyState: k }),
        {
            expressionsGrid: j,
            rowCount: W,
            rowCountBySection: $,
            columnCounts: z,
            gutterWidth: q,
        } = (0, P.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: L,
            itemNodeWidth: R,
            itemNodeMargin: D,
        }),
        {
            getItemProps: Z,
            getRowProps: X,
            gridContainerProps: Q,
            handleGridContainerKeyDown: J,
            isUsingKeyboardNavigation: ee,
        } = (0, P.JZ)({
            columnCounts: z,
            expressionsListRef: G,
            expressionsGrid: j,
            onSelectItem: l,
            store: s,
            gridNavigatorId: v,
        }),
        et = r.useCallback(
            (e, t) =>
                h(
                    j[e],
                    X(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: q,
                        rowIndex: e,
                        totalRowCount: W,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => Z(e, t),
                    (t) => s.setInspectedExpressionPosition(t, e),
                ),
            [j, Z, X, q, ee, h, s, W],
        ),
        en = r.useCallback((e) => f?.(t[e], e), [t, f]),
        ei = r.useCallback((e) => p?.(t[e], e), [t, p]),
        er = r.useCallback(() => T?.(j?.[B.rowIndex]?.[B.columnIndex]), [j, B.columnIndex, B.rowIndex, T]);
    r.useEffect(() => {
        o(V);
    }, [o, V]),
        r.useEffect(() => {
            s.setBottomPosition(w.current?.getBoundingClientRect().bottom ?? null);
        }),
        r.useEffect(() => s.resetStoreState, [s.resetStoreState]),
        r.useLayoutEffect(() => {
            x.current?.focus();
        }, []);
    let ea = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(Y, {
                ref: x,
                store: s,
                hasSendableExpressions: !0,
                onKeyDown: J,
                expressionsListRef: G,
                gridNavigatorId: v,
                defaultSearchPlaceholder: _,
                emptySearchPlaceholder: E,
            }),
            S?.(),
        ],
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != M ? M(ea) : (0, i.jsxs)("div", { className: K.wx, children: [" ", ea, " "] }),
            k && null != A
                ? A(K.p$)
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          g(G),
                          null != b && (0, i.jsx)("div", { className: K.Eb, children: b }),
                          (0, i.jsx)("div", {
                              ref: w,
                              className: K.AD,
                              id: v,
                              ...Q,
                              children:
                                  null != H
                                      ? (0, i.jsx)(F, {
                                            categories: t,
                                            ref: G,
                                            store: s,
                                            hasSearchResults: c,
                                            listPadding: y,
                                            renderRow: et,
                                            renderSection: I,
                                            renderSectionHeader: null != f ? en : void 0,
                                            renderSectionFooter: null != p ? ei : void 0,
                                            renderInspector: null != T ? er : void 0,
                                            renderEmptySearchState: m,
                                            rowCount: W,
                                            rowCountBySection: $,
                                            rowHeight: N,
                                            sectionHeaderHeight: C,
                                            sectionFooterHeight: O,
                                            renderUpsell: U,
                                            onScroll: d,
                                        })
                                      : null,
                          }),
                      ],
                  }),
        ],
    });
}
var z = n(89366),
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
    ea = n(977997),
    es = n(147925),
    el = n(174459),
    eo = n(807348),
    ed = n(813564),
    ec = n(102597),
    eu = n(904054),
    e_ = n(147472);
n(321073);
var eE = n(931991),
    eA = n(71393),
    eh = n(576705),
    eI = n(473145);
let ef = (0, n(945810).mj)({
    kind: "user",
    name: "2026-06-soundboard-frequently-used",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ep = n(805143),
    eT = n(935208);
function em(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => eT.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eg = n(980504),
    eS = n(202541);
function eN(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: eo.uq.SOUND, sound: e, index: t }));
}
function eC(e) {
    let { sections: t, guildIds: n, allSounds: i, potentialSoundIdsForSection: r, sectionType: a, sortSoundsFn: s } = e,
        l = {};
    for (let e of [...n, "0"])
        for (let t of i.get(e) ?? []) null != r.find((e) => e === t.soundId) && (l[t.soundId] = t);
    let o = [];
    for (let e of r) {
        let t = l[e];
        null != t && o.push(t);
    }
    let d = eN(o, s);
    d.length > 0 && t.push({ key: a, categoryInfo: { type: a }, items: d });
}
function eO(e, t) {
    let n = t.get("0") ?? eg.pD;
    e.push({ key: eo.Cx.DEFAULTS, categoryInfo: { type: eo.Cx.DEFAULTS }, items: eN(n, em) });
}
var eR = n(837381),
    eL = n(866665),
    eD = n(802019),
    ey = n(407698),
    ev = n(652215),
    eb = n(698279),
    eM = n(375708),
    eP = n(693187);
let eU = [8, 8, 8, 8];
function ew(e) {
    let { icon: t, isSelected: n, onClick: r, listItemProps: a } = e;
    return (0, i.jsx)(S.D, {
        ...a,
        onClick: r,
        className: s()(eP.Yl, { [eP.wH]: n }),
        children: (0, i.jsx)(t, { className: eP.xi, color: "currentColor" }),
    });
}
function eG(e, t, n, r, a) {
    switch (e.categoryInfo.type) {
        case eo.Cx.FAVORITES:
            return (0, i.jsx)(ew, { icon: p.G, onClick: t, isSelected: n, listItemProps: r }, e.key);
        case eo.Cx.FREQUENTLY_USED:
            return (0, i.jsx)(ew, { icon: T.O, onClick: t, isSelected: n, listItemProps: r }, e.key);
        case eo.Cx.GUILD:
            return (0, i.jsx)(
                S.D,
                {
                    ...r,
                    className: eP.L1,
                    onClick: t,
                    children: (0, i.jsx)(b.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: a }),
                },
                e.key,
            );
        case eo.Cx.DEFAULTS:
            return (0, i.jsx)(ew, { icon: m.p, onClick: t, isSelected: n, listItemProps: r }, e.key);
        default:
            return null;
    }
}
function ex(e) {
    let { category: t, categoryIndex: n, onClick: r, isSelected: a, isNitroLocked: s } = e,
        l = (0, eR.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === eo.Cx.GUILD
        ? (0, i.jsx)(ey.Q, { guild: t.categoryInfo.guild, children: eG(t, r, a, l, s) })
        : (0, i.jsx)(eL.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case eo.Cx.FAVORITES:
                          return eM.intl.string(eM.t.k8fFjp);
                      case eo.Cx.FREQUENTLY_USED:
                          return eM.intl.string(eM.t["+cGVV6"]);
                      case eo.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case eo.Cx.DEFAULTS:
                          return eM.intl.string(eM.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: eG(t, r, a, l, s),
          });
}
function ek(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: a,
            listPadding: l = eU,
            guildId: o,
            inExpressionPicker: d,
        } = e,
        c = r.useRef(null),
        u = (0, f.bG)([er.default], () => er.default.getCurrentUser()),
        _ = (0, G.TW)(u, eS.PremiumTypes.TIER_2),
        E = r.useCallback(
            (e, t, n, r) => {
                let s = a && tr(e.categoryInfo, _, o);
                return (0, i.jsx)(ex, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        el.default.track(ev.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: ev.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eb.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n();
                    },
                    isSelected: r,
                    isNitroLocked: s,
                });
            },
            [o, a, _],
        );
    return (0, i.jsx)(eD.A, {
        className: s()(d ? eP.HZ : eP.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: M.LW,
        categories: n,
        listPadding: l,
        renderCategoryListItem: E,
        rowCount: n.length,
        categoryHeight: 40,
    });
}
var eF = n(554146),
    eV = n(191023),
    eB = n(192308),
    eH = n(349288),
    ej = n(695366),
    eW = n(834730),
    eY = n(789645),
    eK = n(565645),
    e$ = n(775602),
    ez = n(826673),
    eq = n(182922),
    eZ = n(532624),
    eX = n(531685),
    eQ = n(723702),
    eJ = n(350535),
    e0 = n(154678);
function e1(e) {
    let { soundboardSound: t, closePicker: r } = e,
        a = (0, u.RQ)((e) => e.searchQuery),
        s = (0, _.bG)([h.A], () => null != t && h.A.isFavoriteSound(t.soundId)),
        l = (0, _.bG)([eA.A], () => eA.A.getGuild(t?.guildId)),
        o = (0, _.bG)([e$.Ay], () => e$.Ay.useReducedMotion, []),
        d = (0, _.bG)([eX.A], () => eX.A.isFocused()),
        c = (0, _.bG)([eZ.Ay], () => eZ.Ay.getKeybindForAction(ev.hCu.SOUNDBOARD_HOLD));
    if (null != t && a.length > 0)
        return (0, i.jsx)(eq.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, i.jsx)(eK.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: e0.Zg })
                    : (0, i.jsx)(eV.x, { size: "md", color: "currentColor", className: e0.Zg }),
            graphicSecondary: null != l ? (0, i.jsx)(b.A, { guild: l, shouldAnimate: !o && d }) : null,
            titlePrimary: t.name,
            titleSecondary: l?.name,
            isFavorite: s,
        });
    function E() {
        r(),
            (0, eB.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("89304"), n.e("68113"), n.e("46327"), n.e("12618")]).then(
                    n.bind(n, 29681),
                );
                return (t) => (0, i.jsx)(e, { ...t });
            });
    }
    let A = (0, ez.k8)(eF.M.SOUNDBOARD_KEYBIND_TIP),
        I =
            null != c && (0, eQ.isWindows)() && !A
                ? eM.intl.format(eM.t.udMTth, {
                      keybind: (0, eJ.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, i.jsx)(eH.Anchor, { onClick: E, children: e }, t),
                  })
                : null;
    return null == I
        ? null
        : (0, i.jsxs)("div", {
              className: e0.g,
              children: [
                  (0, i.jsx)(ej.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: e0.QW }),
                  (0, i.jsx)(eW.E, { variant: "text-sm/medium", color: "text-default", className: e0.L5, children: I }),
                  (0, i.jsx)(S.D, {
                      className: e0.b,
                      onClick: function () {
                          return (0, ez.Dr)(eF.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, i.jsx)(eY.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var e2 = n(805945),
    e3 = n(890856),
    e4 = n(307301),
    e5 = n(468689);
function e6(e) {
    e5.A.open(e, ev.BEX.SOUNDBOARD),
        (0, eB.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("47899"),
                n.e("75091"),
                n.e("56963"),
                n.e("11895"),
                n.e("22312"),
                n.e("8555"),
                n.e("83952"),
                n.e("20287"),
                n.e("66580"),
                n.e("8979"),
                n.e("20643"),
                n.e("74049"),
                n.e("80559"),
                n.e("69006"),
                n.e("98913"),
                n.e("12811"),
            ]).then(n.bind(n, 191110));
            return (n) => (0, i.jsx)(t, { ...n, guildId: e });
        });
}
var e7 = n(753502),
    e8 = n(677611);
function e9(e) {
    let { guild: t, focused: n, onSelectItem: r, ...a } = e,
        { canCreateExpressions: l } = (0, eE.nr)(t);
    return (0, i.jsx)(eL.m, {
        text: eM.intl.string(eM.t["fHo+z1"]),
        shouldShow: !l,
        children: (0, i.jsx)("li", {
            className: e7.H,
            children: (0, i.jsxs)(e3.s, {
                ...a,
                "aria-label": eM.intl.formatToPlainString(eM.t.c1qVYh, { guildName: t.name }),
                className: s()(e8.n4, { [e8.in]: n, [e8.r9]: !l }),
                onClick: () => (null != r ? r() : e6(t.id)),
                children: [
                    (0, i.jsx)(e4.j, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(eW.E, {
                        variant: "text-xs/semibold",
                        color: l ? "currentColor" : "text-muted",
                        children: eM.intl.string(eM.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function te(e) {
    let {
            descriptor: t,
            soundButtonProps: n,
            rowIndex: i,
            columnIndex: a,
            isUsingKeyboardNavigation: s,
            suppressPlaySound: l,
            getItemProps: o,
            onSelectItem: d,
            onItemMouseEnter: c,
            buttonOverlay: u,
            isNitroLocked: _,
            showLockForDisabledSound: E,
            inExpressionPicker: A,
        } = e,
        h = M.LW.useStore((e) => e.inspectedExpressionPosition),
        I = `${i}-${a}`,
        f = s && h.rowIndex === i && h.columnIndex === a;
    switch (t.item.type) {
        case eo.uq.SOUND:
            return (0, r.createElement)(e2.Ay, {
                ...o(a),
                ...n,
                key: I,
                sound: t.item.sound,
                suppressPlaySound: l,
                focused: f,
                onMouseEnter: () => c(a),
                onSelectItem: (e) => d(t, e),
                enableSecondaryActions: !0,
                buttonOverlay: u,
                inNitroLockedSection: _,
                showLockForDisabledSound: E,
                isSoundmoji: !0 === A,
            });
        case eo.uq.ADD_SOUND:
            return (0, r.createElement)(e9, {
                ...o(a),
                key: I,
                guild: t.item.guild,
                focused: f,
                onSelectItem: () => d(t),
            });
    }
}
var tt = n(683886);
let tn = 32 + X.kg - 8,
    ti = {
        [eo.Cx.SEARCH]: d.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [eo.Cx.DEFAULTS]: d.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [eo.Cx.GUILD]: d.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [eo.Cx.FAVORITES]: d.A.SOUNDBOARD_FAVORITES_SECTION,
        [eo.Cx.FREQUENTLY_USED]: d.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
    };
function tr(e, t, n) {
    return (null == n && e.type === eo.Cx.GUILD && !t) || (e.type === eo.Cx.GUILD && e.guild.id !== n && !t);
}
function ta(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: r, isSectionNitroLocked: a, showNitroDivider: l } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l && (0, i.jsx)(X.Ay, { className: tt.yH }),
            (0, i.jsx)("div", {
                className: s()(tt.hd, { [tt.Jb]: a, [tt.VD]: a }),
                children: (0, i.jsx)(S.D, {
                    className: tt.bV,
                    onClick: r,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, i.jsxs)("div", {
                        className: tt.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case eo.Cx.FAVORITES:
                                        return (0, i.jsx)(p.G, { size: "xs", color: "currentColor", className: tt.nr });
                                    case eo.Cx.FREQUENTLY_USED:
                                        return (0, i.jsx)(T.O, { size: "xs", color: "currentColor", className: tt.nr });
                                    case eo.Cx.GUILD:
                                        return (0, i.jsx)(b.A, { guild: t.guild, height: 16, width: 16 });
                                    case eo.Cx.DEFAULTS:
                                        return (0, i.jsx)(m.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: tt.nr,
                                        });
                                    case eo.Cx.SEARCH:
                                        return (0, i.jsx)(g.$, { size: "md", color: "currentColor", className: tt.nr });
                                }
                            })(),
                            (0, i.jsx)(N.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: tt.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case eo.Cx.FAVORITES:
                                            return eM.intl.string(eM.t.k8fFjp);
                                        case eo.Cx.FREQUENTLY_USED:
                                            return eM.intl.string(eM.t["+cGVV6"]);
                                        case eo.Cx.GUILD:
                                            return t.guild.name;
                                        case eo.Cx.DEFAULTS:
                                            return eM.intl.string(eM.t.Rtvk9X);
                                        case eo.Cx.SEARCH:
                                            return eM.intl.string(eM.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, i.jsx)(es.A, {
                                className: tt.nr,
                                direction: n ? es.A.Directions.RIGHT : es.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function ts() {
    return (0, i.jsx)(L.A, { message: eM.intl.string(eM.t.bgDdNK) });
}
function tl(e) {
    let { className: t } = e,
        n = (0, f.bG)([h.A], () => h.A.isSoundboardVolumeMuted()) ? C._ : O.H;
    return (0, i.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function to(e) {
    let {
            guildId: t,
            channel: a,
            containerWidth: l,
            onClose: o,
            onSelect: _,
            shouldValidateSelectedSound: E = !1,
            suppressPlaySound: A = !1,
            shouldShowLockedSounds: p = !0,
            gridNotice: T,
            soundButtonOverlay: m,
            listPadding: g,
            renderHeader: N,
            defaultSoundsOnly: C = !1,
            inExpressionPicker: L,
            analyticsSource: b,
        } = e,
        { audioRef: P } = r.useContext(ee.A),
        { analyticsLocations: U } = (0, c.Ay)(),
        { analyticsLocations: w } = (0, c.Ay)(d.A.PREMIUM_UPSELL),
        { location: x } = (0, D.p)(),
        k = r.useMemo(() => ({ ...x, section: ev.JJy.SOUNDBOARD_SOUND_PICKER }), [x]),
        [F, V] = r.useState(null),
        B = (0, f.bG)([er.default], () => er.default.getCurrentUser()),
        H = (0, G.TW)(B, eS.PremiumTypes.TIER_2),
        j = (0, f.bG)([ea.A], () => ea.A.getVoiceState(t, B?.id ?? ev.dJq)),
        W = j?.selfDeaf || j?.mute || j?.suppress,
        Y = (0, u.RQ)((e) => e.searchQuery),
        K = null != Y && "" !== Y,
        X = (0, v.GV)(),
        es = (0, en.St)("soundboard_floating_upsell"),
        {
            categories: eT,
            availableSounds: eR,
            soundCounts: eL,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = (0, f.bG)([er.default], () => er.default.getCurrentUser()),
                a = G.Ay.isPremium(i, eS.PremiumTypes.TIER_2),
                [s, l, o, d] = (0, f.yK)([h.A], () => [
                    h.A.getSounds(),
                    h.A.getFavorites(),
                    h.A.getFrequentlyUsedSoundIds(),
                    h.A.isFetching(),
                ]),
                c = (0, ep.Y)(e, !1),
                u = (0, f.yK)([eA.A], () => {
                    let e = [];
                    return (
                        c.forEach((t) => {
                            let n = eA.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                _ = G.Ay.canUseSoundboardEverywhere(i),
                E = (0, f.bG)([eA.A], () => eA.A.getGuild(e?.guild_id)),
                A = (0, f.bG)([eh.A], () => {
                    let { canCreateExpressions: e } = (0, eE.ie)(E);
                    return e;
                }, [E]),
                I = r.useMemo(() => o.filter((e) => !l.has(e)).slice(0, 3), [o, l]),
                p =
                    ef.useConfig({ location: I.length > 0 ? "useSoundGrid" : "useSoundGridNoFrequentlyUsed" })
                        .enabled || !0;
            return r.useMemo(() => {
                let e = 0,
                    i = 0,
                    r = [];
                return n
                    ? (eO(r, s),
                      {
                          categories: r,
                          availableSounds: s.get("0") ?? eg.pD,
                          isFetching: d,
                          soundCounts: {
                              favoriteSoundCount: 0,
                              unlockedCustomSoundCount: 0,
                              lockedCustomSoundCount: 0,
                          },
                      })
                    : (eC({
                          sections: r,
                          guildIds: c,
                          allSounds: s,
                          potentialSoundIdsForSection: Array.from(l),
                          sectionType: eo.Cx.FAVORITES,
                          sortSoundsFn: em,
                      }),
                      p &&
                          I.length > 0 &&
                          eC({
                              sections: r,
                              guildIds: c,
                              allSounds: s,
                              potentialSoundIdsForSection: I,
                              sectionType: eo.Cx.FREQUENTLY_USED,
                          }),
                      void 0 !== E &&
                          (function (e, t, n) {
                              let {
                                      currentGuildHasAddPermissions: i,
                                      allSounds: r,
                                      filterOutEmptyCurrentGuild: a,
                                      sortSoundsFn: s,
                                  } = n,
                                  l = r.get(t.id) ?? [],
                                  o = eN(l, s),
                                  d = l.length < (0, eI.fA)(t) && i,
                                  c = 0 === o.length;
                              (d || c) && !a && o.push({ type: eo.uq.ADD_SOUND, guild: t }),
                                  (a && c) ||
                                      e.push({
                                          categoryInfo: { type: eo.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: o,
                                      });
                          })(r, E, {
                              currentGuildHasAddPermissions: A,
                              allSounds: s,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: em,
                          }),
                      _ || eO(r, s),
                      !(function (e) {
                          let {
                              sections: t,
                              guilds: n,
                              currentGuildId: i,
                              allSounds: r,
                              hasNitro: a,
                              sortSoundsFn: s,
                          } = e;
                          for (let e of n) {
                              if (e.id === i) continue;
                              let n = eN(r.get(e.id) ?? [], s);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: eo.Cx.GUILD, guild: e, isNitroLocked: !a },
                                      key: e.id,
                                      items: n,
                                  });
                          }
                      })({
                          sections: r,
                          guilds: u,
                          currentGuildId: E?.id,
                          allSounds: s,
                          hasNitro: a,
                          sortSoundsFn: em,
                      }),
                      _ && eO(r, s),
                      r.forEach((t) => {
                          t.categoryInfo.type === eo.Cx.GUILD &&
                              (t.categoryInfo.isNitroLocked ? (i += t.items.length) : (e += t.items.length));
                      }),
                      {
                          categories: r,
                          availableSounds: Array.from(s.values()).flat(),
                          isFetching: d,
                          soundCounts: {
                              favoriteSoundCount: l.size,
                              unlockedCustomSoundCount: e,
                              lockedCustomSoundCount: i,
                          },
                      });
            }, [c, s, l, p, E, A, t, _, u, n, d, a, em, I]);
        })(a, void 0, C),
        [eD, ey] = r.useState([]),
        eP = r.useMemo(
            () => (Y.length > 0 ? [{ key: eo.Cx.SEARCH, categoryInfo: { type: eo.Cx.SEARCH }, items: eN(eD) }] : eT),
            [eT, Y.length, eD],
        ),
        eU = (0, u.RQ)((e) => e.isNitroLockedSectionVisible),
        ew = r.useMemo(() => eP.filter((e) => e.items.length > 0), [eP]),
        eG = r.useMemo(
            () => ew.findLastIndex((e) => !!(0, G.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [ew],
        ),
        ex = !H && p && -1 !== eG,
        eF = !H && p && -1 !== eG,
        eV = et.b0.useSetting(),
        eB = r.useMemo(() => new Set(eV), [eV]),
        eH = null == a,
        ej = G.Ay.canUseCustomCallSounds(B),
        eW = r.useCallback(
            (e) => {
                eB.has(e) ? eB.delete(e) : eB.add(e), et.b0.updateSetting(Array.from(eB));
            },
            [eB],
        ),
        eY = r.useCallback(
            (e, t, n, i) => {
                if (null != _ && !E) return _(e, n);
                let r = (0, ed.Ir)(B, e, a, !1);
                if (null != _ && E && r) _(e, n);
                else if (!A && r && (0, ed.Au)(a))
                    (0, ed.Ak)(e, a?.id ?? ev.dJq, t, i),
                        K &&
                            el.default.track(ev.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: ev.I4_.SOUNDBOARD,
                                channel_id: a?.id,
                                query: Y,
                                location_stack: t,
                            });
                else {
                    if ((0, ed.Ir)(B, e, a)) return;
                    p && V(e);
                }
            },
            [A, B, a, p, K, Y, _, E],
        ),
        eK = r.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case eo.uq.SOUND:
                        let n = ti[e?.category] ?? null,
                            i = e?.item.index;
                        return eY(e.item.sound, null == n ? U : [...U, n], t?.shiftKey !== !0, i);
                    case eo.uq.ADD_SOUND:
                        return o(), e6(e.item.guild.id);
                }
            },
            [U, eY, o],
        ),
        e$ = r.useCallback(
            (e, n, r, l, o) => {
                let d = ew[r.sectionIndex],
                    c = p && tr(d.categoryInfo, H, t) && ex;
                return (0, i.jsx)(
                    "ul",
                    {
                        ...n,
                        className: s()(tt.a, { [tt.uL]: c }),
                        children: e.map((e, t) =>
                            (0, i.jsx)(
                                te,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: a,
                                        interactive: eH ? ej : !W,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: U,
                                    },
                                    rowIndex: r.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: r.isUsingKeyboardNavigation,
                                    suppressPlaySound: A,
                                    getItemProps: l,
                                    onSelectItem: eK,
                                    onItemMouseEnter: o,
                                    buttonOverlay: m,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: p,
                                    inExpressionPicker: L,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [ew, p, H, t, A, eK, a, eH, ej, W, U, m, ex, L],
        ),
        ez = r.useCallback(
            (e, t) => {
                if (e <= 0 || !p) return !1;
                let n = ew[e],
                    i = ew[e - 1],
                    r = tr(n.categoryInfo, H, t),
                    a = tr(i.categoryInfo, H, t);
                return r && !a;
            },
            [ew, p, H],
        ),
        eq = r.useCallback(() => {
            let e = h.A.getSoundById("3");
            null != e && V(e);
        }, []),
        eZ = r.useCallback(() => {
            let e = (0, G.Dd)(eS.PremiumTypes.TIER_2);
            return eM.intl.format(eM.t["tw/SSq"], { nitroTierName: e, onClick: eq });
        }, [eq]),
        eX = r.useCallback((e) => (ez(e, t) ? tn : 32), [t, ez]),
        eQ = r.useCallback(
            (e) => {
                let t = e === ew.length - 1;
                return eF && t ? 70 : ex && e === eG ? 20 : 0;
            },
            [ew.length, ex, eF, eG],
        ),
        eJ = r.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
        e0 = r.useCallback(
            (e, n) => {
                let r = `${e.key}`,
                    a = p && tr(e.categoryInfo, H, t),
                    s = ez(n, t),
                    l = eB.has(r);
                return (0, i.jsx)(
                    ta,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            el.default.track(ev.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: ev.liQ.SOUNDBOARD_POPOUT },
                                tab: eb.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !l,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eW(r);
                        },
                        collapsed: l,
                        isSectionNitroLocked: a && ex,
                        showNitroDivider: s && ex,
                    },
                    `header-${r}`,
                );
            },
            [eB, eW, t, ez, p, H, ex],
        ),
        e2 = r.useCallback(
            (e, t) => {
                let n = t === ew.length - 1,
                    r = t === eG;
                return eF && n
                    ? (0, i.jsx)("div", { className: s()(tt.Lk, { [tt.Ns]: r }) })
                    : ex && t === eG
                      ? (0, i.jsx)("div", { className: s()(tt.a3, { [tt.Ns]: r }) })
                      : null;
            },
            [eG, ex, eF, ew.length],
        ),
        e3 = r.useCallback((e) => ey((0, e_.lG)(e, eR, B, a, U)), [a, B, eR, U]),
        e4 = r.useCallback(
            (e) => {
                (0, R.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: U, ...t });
                });
            },
            [U],
        ),
        e5 = r.useCallback(
            () =>
                L
                    ? (0, i.jsx)(q.Gq, {
                          renderPopout: () => (0, i.jsx)(q.qn, {}),
                          tooltipText: eM.intl.string(eM.t["19lt24"]),
                          position: "top",
                          clickableClassName: s()(tt.Jm, tt.Zz),
                          children: (0, i.jsx)(O.H, { size: "md", color: "currentColor", className: tt.By }),
                      })
                    : (0, i.jsx)(S.D, {
                          tabIndex: 0,
                          className: tt.Jm,
                          onClick: e4,
                          "aria-label": eM.intl.string(eM.t.kbFsAD),
                          children: (0, i.jsx)(tl, { className: tt.By }),
                      }),
            [L, e4],
        ),
        e7 = r.useCallback(
            (e) =>
                (0, i.jsx)(ek, {
                    soundboardListRef: e,
                    categories: eT,
                    shouldUpsellLockedCategories: ex,
                    listPadding: g,
                    guildId: t,
                    inExpressionPicker: L,
                }),
            [eT, g, ex, t, L],
        ),
        e8 = r.useCallback(() => {
            let e = (0, z.qD)();
            return (0, G.LE)(e, eS.pe.TIER_2) ?? eM.intl.string(eM.t.pj0XBN);
        }, []),
        e9 = r.useCallback(
            () =>
                eF
                    ? (0, i.jsx)(Z.d, {
                          showUpsell: eU,
                          text: eZ(),
                          button: e8(),
                          buttonAnalyticsObject: { section: ev.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: es
                              ? (0, i.jsx)(Q.l, {
                                    size: "sm",
                                    className: tt.ij,
                                    location: d.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                    forceDarkTheme: !0,
                                })
                              : void 0,
                      })
                    : null,
            [eZ, e8, eF, es, eU],
        ),
        to = r.useCallback(
            (e) =>
                e?.item.type === eo.uq.SOUND
                    ? (0, i.jsx)(e1, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        td = r.useCallback(() => {
            let e = h.A.getSoundById("3"),
                t = new Audio((0, ec.A)("3"));
            null != P.current && P.current.pause(),
                (P.current = t),
                (t.currentTime = 0),
                (t.volume = (0, eu.A)(e?.volume ?? 1)),
                t.play();
        }, [P]),
        tc = (0, f.bG)([ei.A], () => ei.A.getMediaSessionId());
    return (
        (0, y.A)({
            type: I.ImpressionTypes.POPOUT,
            name: I.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: b,
                guild_id: t,
                media_session_id: tc,
                available_custom_sounds_count: eL.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eL.lockedCustomSoundCount,
                favorite_sounds_count: eL.favoriteSoundCount,
            },
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != F
                    ? (0, i.jsx)(J.A, {
                          title: eM.intl.string(L ? eM.t.rZEEvU : eM.t.jGDYF0),
                          description: eM.intl.string(L ? eM.t.ZPNG5A : eM.t["grL/hg"]),
                          analyticsLocationSection: ev.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eS.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...k, object: ev.ZSU.SOUNDBOARD_SOUND },
                              location_stack: w,
                              sku_id: G.Ay.getSkuIdForPremiumType(eS.PremiumTypes.TIER_2),
                          },
                          onClose: () => V(null),
                          onUpsellClicked: o,
                          onDisplay: td,
                      })
                    : void 0,
                (0, i.jsx)($, {
                    categories: ew,
                    collapsedCategories: eB,
                    containerWidth: l,
                    store: M.LW,
                    onSelectItem: eK,
                    onSearchExpressions: e3,
                    hasSearchResults: eD.length > 0,
                    defaultSearchPlaceholder: eM.intl.string(eM.t.sKt3xS),
                    renderRow: e$,
                    renderSectionHeader: e0,
                    renderSectionFooter: e2,
                    renderSection: eJ,
                    renderCategoryList: e7,
                    renderHeaderAccessories: e5,
                    rowHeight: 48,
                    sectionHeaderHeight: eX,
                    sectionFooterHeight: eQ,
                    itemNodeWidth: 150,
                    gridNavigatorId: X,
                    renderEmptySearchState: ts,
                    renderInspector: to,
                    gridNotice: T,
                    renderHeader: N,
                    renderUpsell: e9,
                }),
            ],
        })
    );
}
var td = n(752944);
function tc(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: a,
            onClose: I,
            onSelect: f,
            analyticsSource: p,
            suppressPlaySound: T,
            shouldValidateSelectedSound: m,
            shouldShowLockedSounds: g = !0,
            gridNotice: S,
            inExpressionPicker: N,
            soundButtonOverlay: C,
            listPadding: O,
            renderHeader: R,
            defaultSoundsOnly: L,
        } = e,
        { fetching: D, maybeFetchData: y } = {
            fetching: (0, _.bG)([h.A], () => h.A.isFetchingAnySounds()),
            maybeFetchData: r.useCallback(() => {
                A.E7(), E.bW.loadIfNecessary();
            }, []),
        },
        { analyticsLocations: v } = (0, c.Ay)(d.A.SOUNDBOARD_POPOUT),
        b = N ? void 0 : { height: 520 };
    return (
        r.useEffect(() => {
            y();
        }, [y]),
        r.useEffect(() => {
            N || (0, u.Ri)("");
        }, [N]),
        (0, i.jsx)(c.f5, {
            value: v,
            children: (0, i.jsx)(l.l, {
                style: b,
                className: s()(td.Nz, { [td.Bg]: D, [td.yV]: N }),
                children: D
                    ? (0, i.jsx)(o.y, {})
                    : (0, i.jsx)(to, {
                          guildId: t,
                          channel: n,
                          onClose: I,
                          onSelect: f,
                          shouldValidateSelectedSound: m,
                          containerWidth: a,
                          suppressPlaySound: T,
                          shouldShowLockedSounds: g,
                          gridNotice: S,
                          soundButtonOverlay: C,
                          listPadding: O,
                          renderHeader: R,
                          defaultSoundsOnly: L,
                          inExpressionPicker: N,
                          analyticsSource: p,
                      }),
            }),
        })
    );
}
