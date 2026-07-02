"use strict";
n.d(t, { A: () => th });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(305866),
    l = n(289873),
    u = n(793574),
    d = n(688810),
    c = n(151271),
    _ = n(945810);
let h = (0, _.mj)({
        kind: "user",
        name: "2026-06-soundboard-frequently-used",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    f = (0, _.mj)({
        kind: "user",
        name: "2026-06-soundboard-picker-height",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var E = n(702841),
    p = n(594061),
    m = n(796774),
    g = n(209932);
n(30146);
var A = n(562708),
    I = n(17928),
    T = n(27232),
    S = n(406810),
    N = n(111159),
    C = n(7689),
    y = n(939249),
    v = n(534514),
    R = n(358618),
    O = n(983851),
    b = n(442433),
    L = n(537652),
    D = n(212245),
    P = n(139286),
    w = n(915089),
    M = n(724511),
    x = n(850992),
    U = n(464651),
    k = n(735438),
    G = n(962125),
    V = n(428262),
    F = n(240864),
    B = n(711548);
let j = r.forwardRef(function (e, t) {
        let {
                categories: n,
                store: s,
                hasSearchResults: a,
                listPadding: o,
                renderRow: l,
                renderSection: u,
                renderSectionHeader: d,
                renderSectionFooter: _,
                renderInspector: h,
                renderEmptySearchState: f,
                rowCount: E,
                rowCountBySection: p,
                rowHeight: m,
                sectionHeaderHeight: g,
                sectionFooterHeight: A,
                renderUpsell: I,
                onScroll: T,
            } = e,
            S = r.useRef(!1),
            N = r.useRef(null),
            C = (0, c.RQ)((e) => e.searchQuery),
            y = s.useStore((e) => e.activeCategoryIndex),
            v = r.useMemo(
                () =>
                    n.map((e) =>
                        (0, V.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            R = (0, U.Fk)({
                activeCategoryIndex: y,
                isScrolling: S,
                listRef: N,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: C,
            }),
            O = r.useCallback(
                (e) => {
                    R(e),
                        H({
                            listRef: N,
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
                null != N.current && O(N.current.getScrollerNode()?.scrollTop ?? 0);
            }, [O, N]),
            (0, U.FV)({ searchQuery: C, activeCategoryIndex: y, listRef: N }),
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
                className: B.i,
                children: [
                    C.length > 0 && !a && null != f
                        ? f()
                        : (0, i.jsx)(G.A, {
                              role: "none presentation",
                              listPadding: o,
                              onScroll: O,
                              renderRow: l,
                              renderSection: u,
                              renderSectionHeader: d,
                              renderSectionFooter: _,
                              rowCount: E,
                              rowCountBySection: p,
                              rowHeight: m,
                              sectionHeaderHeight: g,
                              sectionFooterHeight: A,
                              stickyHeaders: !0,
                              ref: N,
                          }),
                    I?.(),
                    h?.(),
                ],
            })
        );
    }),
    H = (0, k.throttle)(
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
            let o = (0, F.s)({
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: i,
                scrollTop: r,
                sectionHeaderHeight: s,
                sectionFooterHeight: a,
            });
            c.RQ.setState({
                isNitroLockedSectionVisible: o.isNitroLockedSectionVisible,
                areOnlyNitroLockedSectionsVisible: o.areOnlyNitroLockedSectionsVisible,
            });
        },
        300,
        { leading: !1, trailing: !0 },
    );
var W = n(942381),
    Y = n(602034),
    K = n(892547),
    $ = n(387187);
let z = r.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: s,
            onKeyDown: a,
            gridNavigatorId: o,
            expressionsListRef: l,
            defaultSearchPlaceholder: u,
            emptySearchPlaceholder: d,
        } = e,
        _ = r.useRef(null),
        [h, f] = (0, c.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], W.x),
        E = n.useStore((e) => e.searchPlaceholder),
        [p, m] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], W.x),
        g = r.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : x.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, c.Ri)(e),
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
            className: $.i,
            children: (0, i.jsx)(K.I, {
                autoFocus: s,
                disabled: !s,
                query: h,
                ref: _,
                placeholder: null != E ? E : s || null == d ? u : d,
                onClear: A,
                onKeyDown: a,
                onChange: g,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": o,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, Y.Aq)(o, p.columnIndex, p.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var q = n(456908);
function Z(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: s,
            store: a,
            onSelectItem: o,
            onSearchExpressions: l,
            onScroll: u,
            hasSearchResults: d,
            defaultSearchPlaceholder: _,
            emptySearchPlaceholder: h,
            renderEmptyState: f,
            renderRow: E,
            renderSection: p,
            renderSectionHeader: m,
            renderSectionFooter: g,
            renderInspector: A,
            renderEmptySearchState: I,
            renderCategoryList: T,
            renderHeaderAccessories: S,
            rowHeight: N,
            sectionHeaderHeight: C,
            sectionFooterHeight: y,
            itemNodeWidth: v,
            listPaddingRight: R,
            itemNodeMargin: O,
            listPadding: b,
            gridNavigatorId: L,
            gridNotice: D,
            renderHeader: P,
            renderUpsell: w,
        } = e,
        M = r.useRef(null),
        x = r.useRef(null),
        k = r.useRef(null),
        G = 0 === t.length,
        V = (0, c.RQ)((e) => e.searchQuery),
        F = a.useStore((e) => e.inspectedExpressionPosition),
        B = (0, U.oV)({ gridWrapperRef: M, containerWidth: s, showingEmptyState: G }),
        {
            expressionsGrid: H,
            rowCount: W,
            rowCountBySection: Y,
            columnCounts: K,
            gutterWidth: $,
        } = (0, U.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: B,
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
        } = (0, U.JZ)({
            columnCounts: K,
            expressionsListRef: x,
            expressionsGrid: H,
            onSelectItem: o,
            store: a,
            gridNavigatorId: L,
        }),
        et = r.useCallback(
            (e, t) =>
                E(
                    H[e],
                    X(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: $,
                        rowIndex: e,
                        totalRowCount: W,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => Z(e, t),
                    (t) => a.setInspectedExpressionPosition(t, e),
                ),
            [H, Z, X, $, ee, E, a, W],
        ),
        en = r.useCallback((e) => m?.(t[e], e), [t, m]),
        ei = r.useCallback((e) => g?.(t[e], e), [t, g]),
        er = r.useCallback(() => A?.(H?.[F.rowIndex]?.[F.columnIndex]), [H, F.columnIndex, F.rowIndex, A]);
    r.useEffect(() => {
        l(V);
    }, [l, V]),
        r.useEffect(() => {
            a.setBottomPosition(M.current?.getBoundingClientRect().bottom ?? null);
        }),
        r.useEffect(() => a.resetStoreState, [a.resetStoreState]),
        r.useLayoutEffect(() => {
            k.current?.focus();
        }, []);
    let es = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(z, {
                ref: k,
                store: a,
                hasSendableExpressions: !0,
                onKeyDown: J,
                expressionsListRef: x,
                gridNavigatorId: L,
                defaultSearchPlaceholder: _,
                emptySearchPlaceholder: h,
            }),
            S?.(),
        ],
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != P ? P(es) : (0, i.jsxs)("div", { className: q.wx, children: [" ", es, " "] }),
            G && null != f
                ? f(q.p$)
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          T(x),
                          null != D && (0, i.jsx)("div", { className: q.Eb, children: D }),
                          (0, i.jsx)("div", {
                              ref: M,
                              className: q.AD,
                              id: L,
                              ...Q,
                              children:
                                  null != B
                                      ? (0, i.jsx)(j, {
                                            categories: t,
                                            ref: x,
                                            store: a,
                                            hasSearchResults: d,
                                            listPadding: b,
                                            renderRow: et,
                                            renderSection: p,
                                            renderSectionHeader: null != m ? en : void 0,
                                            renderSectionFooter: null != g ? ei : void 0,
                                            renderInspector: null != A ? er : void 0,
                                            renderEmptySearchState: I,
                                            rowCount: W,
                                            rowCountBySection: Y,
                                            rowHeight: N,
                                            sectionHeaderHeight: C,
                                            sectionFooterHeight: y,
                                            renderUpsell: w,
                                            onScroll: u,
                                        })
                                      : null,
                          }),
                      ],
                  }),
        ],
    });
}
var X = n(89366),
    Q = n(754998),
    J = n(319993),
    ee = n(202639),
    et = n(414872),
    en = n(400669),
    ei = n(2181),
    er = n(523006),
    es = n(885386),
    ea = n(909536),
    eo = n(763827),
    el = n(287809),
    eu = n(977997),
    ed = n(147925),
    ec = n(174459),
    e_ = n(807348),
    eh = n(813564),
    ef = n(102597),
    eE = n(904054),
    ep = n(147472);
n(321073);
var em = n(931991),
    eg = n(71393),
    eA = n(576705),
    eI = n(473145),
    eT = n(805143),
    eS = n(935208);
function eN(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => eS.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eC = n(980504),
    ey = n(202541);
function ev(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: e_.uq.SOUND, sound: e, index: t }));
}
function eR(e) {
    let { sections: t, guildIds: n, allSounds: i, potentialSoundIdsForSection: r, sectionType: s, sortSoundsFn: a } = e,
        o = {};
    for (let e of [...n, "0"])
        for (let t of i.get(e) ?? []) null != r.find((e) => e === t.soundId) && (o[t.soundId] = t);
    let l = [];
    for (let e of r) {
        let t = o[e];
        null != t && l.push(t);
    }
    let u = ev(l, a);
    u.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: u });
}
function eO(e, t) {
    let n = t.get("0") ?? eC.pD;
    e.push({ key: e_.Cx.DEFAULTS, categoryInfo: { type: e_.Cx.DEFAULTS }, items: ev(n, eN) });
}
var eb = n(837381),
    eL = n(990078),
    eD = n(802019),
    eP = n(407698),
    ew = n(652215),
    eM = n(698279),
    ex = n(375708),
    eU = n(917419);
let ek = [8, 8, 8, 8];
function eG(e) {
    let { icon: t, isSelected: n, onClick: r, listItemProps: s } = e;
    return (0, i.jsx)(y.D, {
        ...s,
        onClick: r,
        className: a()(eU.Yl, { [eU.wH]: n }),
        children: (0, i.jsx)(t, { className: eU.xi, color: "currentColor" }),
    });
}
function eV(e, t, n, r, s) {
    switch (e.categoryInfo.type) {
        case e_.Cx.FAVORITES:
            return (0, i.jsx)(eG, { icon: T.G, onClick: t, isSelected: n, listItemProps: r }, e.key);
        case e_.Cx.FREQUENTLY_USED:
            return (0, i.jsx)(eG, { icon: S.O, onClick: t, isSelected: n, listItemProps: r }, e.key);
        case e_.Cx.GUILD:
            return (0, i.jsx)(
                y.D,
                {
                    ...r,
                    className: eU.L1,
                    onClick: t,
                    children: (0, i.jsx)(M.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case e_.Cx.DEFAULTS:
            return (0, i.jsx)(eG, { icon: N.p, onClick: t, isSelected: n, listItemProps: r }, e.key);
        default:
            return null;
    }
}
function eF(e) {
    let { category: t, categoryIndex: n, onClick: r, isSelected: s, isNitroLocked: a } = e,
        o = (0, eb.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === e_.Cx.GUILD
        ? (0, i.jsx)(eP.Q, { guild: t.categoryInfo.guild, children: eV(t, r, s, o, a) })
        : (0, i.jsx)(eL.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case e_.Cx.FAVORITES:
                          return ex.intl.string(ex.t.k8fFjp);
                      case e_.Cx.FREQUENTLY_USED:
                          return ex.intl.string(ex.t["+cGVV6"]);
                      case e_.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case e_.Cx.DEFAULTS:
                          return ex.intl.string(ex.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: eV(t, r, s, o, a),
          });
}
function eB(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: o = ek,
            guildId: l,
            inExpressionPicker: u,
        } = e,
        d = r.useRef(null),
        c = (0, I.bG)([el.default], () => el.default.getCurrentUser()),
        _ = (0, V.TW)(c, ey.PremiumTypes.TIER_2),
        h = r.useCallback(
            (e, t, n, r) => {
                let a = s && to(e.categoryInfo, _, l);
                return (0, i.jsx)(eF, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        ec.default.track(ew.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: ew.liQ.SOUNDBOARD_POPOUT },
                            guild_id: l ?? null,
                            num_expressions: e.items.length,
                            tab: eM.kx.SOUNDBOARD,
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
    return (0, i.jsx)(eD.A, {
        className: a()(u ? eU.HZ : eU.jv),
        categoryListRef: d,
        expressionsListRef: t,
        store: x.LW,
        categories: n,
        listPadding: o,
        renderCategoryListItem: h,
        rowCount: n.length,
        categoryHeight: 40,
    });
}
var ej = n(554146),
    eH = n(191023),
    eW = n(192308),
    eY = n(349288),
    eK = n(695366),
    e$ = n(834730),
    ez = n(789645),
    eq = n(565645),
    eZ = n(775602),
    eX = n(826673),
    eQ = n(182922),
    eJ = n(532624),
    e0 = n(531685),
    e1 = n(723702),
    e2 = n(350535),
    e3 = n(319518);
function e6(e) {
    let { soundboardSound: t, closePicker: r } = e,
        s = (0, c.RQ)((e) => e.searchQuery),
        a = (0, E.bG)([g.A], () => null != t && g.A.isFavoriteSound(t.soundId)),
        o = (0, E.bG)([eg.A], () => eg.A.getGuild(t?.guildId)),
        l = (0, E.bG)([eZ.Ay], () => eZ.Ay.useReducedMotion, []),
        u = (0, E.bG)([e0.A], () => e0.A.isFocused()),
        d = (0, E.bG)([eJ.Ay], () => eJ.Ay.getKeybindForAction(ew.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, i.jsx)(eQ.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, i.jsx)(eq.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: e3.Zg })
                    : (0, i.jsx)(eH.x, { size: "md", color: "currentColor", className: e3.Zg }),
            graphicSecondary: null != o ? (0, i.jsx)(M.A, { guild: o, shouldAnimate: !l && u }) : null,
            titlePrimary: t.name,
            titleSecondary: o?.name,
            isFavorite: a,
        });
    function _() {
        r(),
            (0, eW.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("14144"), n.e("72425"), n.e("46327"), n.e("12618")]).then(
                    n.bind(n, 29681),
                );
                return (t) => (0, i.jsx)(e, { ...t });
            });
    }
    let h = (0, eX.k8)(ej.M.SOUNDBOARD_KEYBIND_TIP),
        f =
            null != d && (0, e1.isWindows)() && !h
                ? ex.intl.format(ex.t.udMTth, {
                      keybind: (0, e2.dI)(d.shortcut, !0),
                      openSettingsHook: (e, t) => (0, i.jsx)(eY.Anchor, { onClick: _, children: e }, t),
                  })
                : null;
    return null == f
        ? null
        : (0, i.jsxs)("div", {
              className: e3.g,
              children: [
                  (0, i.jsx)(eK.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: e3.QW }),
                  (0, i.jsx)(e$.E, { variant: "text-sm/medium", color: "text-default", className: e3.L5, children: f }),
                  (0, i.jsx)(y.D, {
                      className: e3.b,
                      onClick: function () {
                          return (0, eX.Dr)(ej.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, i.jsx)(ez.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var e4 = n(805945),
    e5 = n(890856),
    e7 = n(307301),
    e8 = n(468689);
function e9(e) {
    e8.A.open(e, ew.BEX.SOUNDBOARD),
        (0, eW.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("16227"),
                n.e("26543"),
                n.e("34258"),
                n.e("76846"),
                n.e("46934"),
                n.e("7792"),
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
var te = n(757718),
    tt = n(508387);
function tn(e) {
    let { guild: t, focused: n, onSelectItem: r, ...s } = e,
        { canCreateExpressions: o } = (0, em.nr)(t);
    return (0, i.jsx)(eL.m, {
        text: ex.intl.string(ex.t["fHo+z1"]),
        shouldShow: !o,
        children: (0, i.jsx)("li", {
            className: te.H,
            children: (0, i.jsxs)(e5.s, {
                ...s,
                "aria-label": ex.intl.formatToPlainString(ex.t.c1qVYh, { guildName: t.name }),
                className: a()(tt.n4, { [tt.in]: n, [tt.r9]: !o }),
                onClick: () => (null != r ? r() : e9(t.id)),
                children: [
                    (0, i.jsx)(e7.j, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(e$.E, {
                        variant: "text-xs/semibold",
                        color: o ? "currentColor" : "text-muted",
                        children: ex.intl.string(ex.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function ti(e) {
    let {
            descriptor: t,
            soundButtonProps: n,
            rowIndex: i,
            columnIndex: s,
            isUsingKeyboardNavigation: a,
            suppressPlaySound: o,
            getItemProps: l,
            onSelectItem: u,
            onItemMouseEnter: d,
            buttonOverlay: c,
            isNitroLocked: _,
            showLockForDisabledSound: h,
            inExpressionPicker: f,
        } = e,
        E = x.LW.useStore((e) => e.inspectedExpressionPosition),
        p = `${i}-${s}`,
        m = a && E.rowIndex === i && E.columnIndex === s;
    switch (t.item.type) {
        case e_.uq.SOUND:
            return (0, r.createElement)(e4.Ay, {
                ...l(s),
                ...n,
                key: p,
                sound: t.item.sound,
                suppressPlaySound: o,
                focused: m,
                onMouseEnter: () => d(s),
                onSelectItem: (e) => u(t, e),
                enableSecondaryActions: !0,
                buttonOverlay: c,
                inNitroLockedSection: _,
                showLockForDisabledSound: h,
                isSoundmoji: !0 === f,
            });
        case e_.uq.ADD_SOUND:
            return (0, r.createElement)(tn, {
                ...l(s),
                key: p,
                guild: t.item.guild,
                focused: m,
                onSelectItem: () => u(t),
            });
    }
}
var tr = n(965238);
let ts = 32 + et.kg - 8,
    ta = {
        [e_.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [e_.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [e_.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [e_.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
        [e_.Cx.FREQUENTLY_USED]: u.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
    };
function to(e, t, n) {
    return (null == n && e.type === e_.Cx.GUILD && !t) || (e.type === e_.Cx.GUILD && e.guild.id !== n && !t);
}
function tl(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: r, isSectionNitroLocked: s, showNitroDivider: o } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            o && (0, i.jsx)(et.Ay, { className: tr.yH }),
            (0, i.jsx)("div", {
                className: a()(tr.hd, { [tr.Jb]: s, [tr.VD]: s }),
                children: (0, i.jsx)(y.D, {
                    className: tr.bV,
                    onClick: r,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, i.jsxs)("div", {
                        className: tr.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case e_.Cx.FAVORITES:
                                        return (0, i.jsx)(T.G, { size: "xs", color: "currentColor", className: tr.nr });
                                    case e_.Cx.FREQUENTLY_USED:
                                        return (0, i.jsx)(S.O, { size: "xs", color: "currentColor", className: tr.nr });
                                    case e_.Cx.GUILD:
                                        return (0, i.jsx)(M.A, { guild: t.guild, height: 16, width: 16 });
                                    case e_.Cx.DEFAULTS:
                                        return (0, i.jsx)(N.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: tr.nr,
                                        });
                                    case e_.Cx.SEARCH:
                                        return (0, i.jsx)(C.$, { size: "md", color: "currentColor", className: tr.nr });
                                }
                            })(),
                            (0, i.jsx)(v.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: tr.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case e_.Cx.FAVORITES:
                                            return ex.intl.string(ex.t.k8fFjp);
                                        case e_.Cx.FREQUENTLY_USED:
                                            return ex.intl.string(ex.t["+cGVV6"]);
                                        case e_.Cx.GUILD:
                                            return t.guild.name;
                                        case e_.Cx.DEFAULTS:
                                            return ex.intl.string(ex.t.Rtvk9X);
                                        case e_.Cx.SEARCH:
                                            return ex.intl.string(ex.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, i.jsx)(ed.A, {
                                className: tr.nr,
                                direction: n ? ed.A.Directions.RIGHT : ed.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function tu() {
    return (0, i.jsx)(L.A, { message: ex.intl.string(ex.t.bgDdNK) });
}
function td(e) {
    let { className: t } = e,
        n = (0, I.bG)([g.A], () => g.A.isSoundboardVolumeMuted()) ? R._ : O.H;
    return (0, i.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function tc(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: o,
            onClose: l,
            onSelect: _,
            shouldValidateSelectedSound: f = !1,
            suppressPlaySound: E = !1,
            shouldShowLockedSounds: p = !0,
            gridNotice: m,
            soundButtonOverlay: T,
            listPadding: S,
            renderHeader: N,
            defaultSoundsOnly: C = !1,
            inExpressionPicker: v,
            analyticsSource: R,
        } = e,
        { audioRef: L } = r.useContext(er.A),
        { analyticsLocations: M } = (0, d.Ay)(),
        { analyticsLocations: U } = (0, d.Ay)(u.A.PREMIUM_UPSELL),
        { location: k } = (0, D.p)(),
        G = r.useMemo(() => ({ ...k, section: ew.JJy.SOUNDBOARD_SOUND_PICKER }), [k]),
        [F, B] = r.useState(null),
        j = (0, I.bG)([el.default], () => el.default.getCurrentUser()),
        H = (0, V.TW)(j, ey.PremiumTypes.TIER_2),
        W = (0, I.bG)([eu.A], () => eu.A.getVoiceState(t, j?.id ?? ew.dJq)),
        Y = W?.selfDeaf || W?.mute || W?.suppress,
        K = (0, c.RQ)((e) => e.searchQuery),
        $ = null != K && "" !== K,
        z = (0, w.GV)(),
        q = (0, ea.St)("soundboard_floating_upsell"),
        et = (0, Q.$)("soundboard_floating_upsell"),
        {
            categories: ed,
            availableSounds: eS,
            soundCounts: eb,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = (0, I.bG)([el.default], () => el.default.getCurrentUser()),
                s = V.Ay.isPremium(i, ey.PremiumTypes.TIER_2),
                [a, o, l, u] = (0, I.yK)([g.A], () => [
                    g.A.getSounds(),
                    g.A.getFavorites(),
                    g.A.getFrequentlyUsedSoundIds(),
                    g.A.isFetching(),
                ]),
                d = (0, eT.Y)(e, !1),
                c = (0, I.yK)([eg.A], () => {
                    let e = [];
                    return (
                        d.forEach((t) => {
                            let n = eg.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                _ = V.Ay.canUseSoundboardEverywhere(i),
                f = (0, I.bG)([eg.A], () => eg.A.getGuild(e?.guild_id)),
                E = (0, I.bG)([eA.A], () => {
                    let { canCreateExpressions: e } = (0, em.ie)(f);
                    return e;
                }, [f]),
                p = r.useMemo(() => l.filter((e) => !o.has(e)).slice(0, 3), [l, o]),
                m = h.useConfig({ location: p.length > 0 ? "useSoundGrid" : "useSoundGridNoFrequentlyUsed" }).enabled;
            return r.useMemo(() => {
                let e = 0,
                    i = 0,
                    r = [];
                return n
                    ? (eO(r, a),
                      {
                          categories: r,
                          availableSounds: a.get("0") ?? eC.pD,
                          isFetching: u,
                          soundCounts: {
                              favoriteSoundCount: 0,
                              unlockedCustomSoundCount: 0,
                              lockedCustomSoundCount: 0,
                          },
                      })
                    : (eR({
                          sections: r,
                          guildIds: d,
                          allSounds: a,
                          potentialSoundIdsForSection: Array.from(o),
                          sectionType: e_.Cx.FAVORITES,
                          sortSoundsFn: eN,
                      }),
                      m &&
                          p.length > 0 &&
                          eR({
                              sections: r,
                              guildIds: d,
                              allSounds: a,
                              potentialSoundIdsForSection: p,
                              sectionType: e_.Cx.FREQUENTLY_USED,
                          }),
                      void 0 !== f &&
                          (function (e, t, n) {
                              let {
                                      currentGuildHasAddPermissions: i,
                                      allSounds: r,
                                      filterOutEmptyCurrentGuild: s,
                                      sortSoundsFn: a,
                                  } = n,
                                  o = r.get(t.id) ?? [],
                                  l = ev(o, a),
                                  u = o.length < (0, eI.fA)(t) && i,
                                  d = 0 === l.length;
                              (u || d) && !s && l.push({ type: e_.uq.ADD_SOUND, guild: t }),
                                  (s && d) ||
                                      e.push({
                                          categoryInfo: { type: e_.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: l,
                                      });
                          })(r, f, {
                              currentGuildHasAddPermissions: E,
                              allSounds: a,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: eN,
                          }),
                      _ || eO(r, a),
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
                              let n = ev(r.get(e.id) ?? [], a);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: e_.Cx.GUILD, guild: e, isNitroLocked: !s },
                                      key: e.id,
                                      items: n,
                                  });
                          }
                      })({
                          sections: r,
                          guilds: c,
                          currentGuildId: f?.id,
                          allSounds: a,
                          hasNitro: s,
                          sortSoundsFn: eN,
                      }),
                      _ && eO(r, a),
                      r.forEach((t) => {
                          t.categoryInfo.type === e_.Cx.GUILD &&
                              (t.categoryInfo.isNitroLocked ? (i += t.items.length) : (e += t.items.length));
                      }),
                      {
                          categories: r,
                          availableSounds: Array.from(a.values()).flat(),
                          isFetching: u,
                          soundCounts: {
                              favoriteSoundCount: o.size,
                              unlockedCustomSoundCount: e,
                              lockedCustomSoundCount: i,
                          },
                      });
            }, [d, a, o, m, f, E, t, _, c, n, u, s, eN, p]);
        })(s, void 0, C),
        [eL, eD] = r.useState([]),
        eP = r.useMemo(
            () => (K.length > 0 ? [{ key: e_.Cx.SEARCH, categoryInfo: { type: e_.Cx.SEARCH }, items: ev(eL) }] : ed),
            [ed, K.length, eL],
        ),
        eU = (0, c.RQ)((e) => e.isNitroLockedSectionVisible),
        ek = r.useMemo(() => eP.filter((e) => e.items.length > 0), [eP]),
        eG = r.useMemo(
            () => ek.findLastIndex((e) => !!(0, V.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [ek],
        ),
        eV = !H && p && -1 !== eG,
        eF = !H && p && -1 !== eG,
        ej = es.b0.useSetting(),
        eH = r.useMemo(() => new Set(ej), [ej]),
        eW = null == s,
        eY = V.Ay.canUseCustomCallSounds(j),
        eK = r.useCallback(
            (e) => {
                eH.has(e) ? eH.delete(e) : eH.add(e), es.b0.updateSetting(Array.from(eH));
            },
            [eH],
        ),
        e$ = r.useCallback(
            (e, t, n, i) => {
                if (null != _ && !f) return _(e, n);
                let r = (0, eh.Ir)(j, e, s, !1);
                if (null != _ && f && r) _(e, n);
                else if (!E && r && (0, eh.Au)(s))
                    (0, eh.Ak)(e, s?.id ?? ew.dJq, t, i),
                        $ &&
                            ec.default.track(ew.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: ew.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: K,
                                location_stack: t,
                            });
                else {
                    if ((0, eh.Ir)(j, e, s)) return;
                    p && B(e);
                }
            },
            [E, j, s, p, $, K, _, f],
        ),
        ez = r.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case e_.uq.SOUND:
                        let n = ta[e?.category] ?? null,
                            i = e?.item.index;
                        return e$(e.item.sound, null == n ? M : [...M, n], t?.shiftKey !== !0, i);
                    case e_.uq.ADD_SOUND:
                        return l(), e9(e.item.guild.id);
                }
            },
            [M, e$, l],
        ),
        eq = r.useCallback(
            (e, n, r, o, l) => {
                let u = ek[r.sectionIndex],
                    d = p && to(u.categoryInfo, H, t) && eV,
                    c = u.categoryInfo.type === e_.Cx.FREQUENTLY_USED,
                    _ = d || c;
                return (0, i.jsx)(
                    "ul",
                    {
                        ...n,
                        className: a()(tr.a, { [tr.uL]: d }),
                        children: e.map((e, t) =>
                            (0, i.jsx)(
                                ti,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eW ? eY : !Y,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: M,
                                    },
                                    rowIndex: r.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: r.isUsingKeyboardNavigation,
                                    suppressPlaySound: E,
                                    getItemProps: o,
                                    onSelectItem: ez,
                                    onItemMouseEnter: l,
                                    buttonOverlay: T,
                                    isNitroLocked: _,
                                    showLockForDisabledSound: p,
                                    inExpressionPicker: v,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [ek, p, H, t, E, ez, s, eW, eY, Y, M, T, eV, v],
        ),
        eZ = r.useCallback(
            (e, t) => {
                if (e <= 0 || !p) return !1;
                let n = ek[e],
                    i = ek[e - 1],
                    r = to(n.categoryInfo, H, t),
                    s = to(i.categoryInfo, H, t);
                return r && !s;
            },
            [ek, p, H],
        ),
        eX = r.useCallback(() => {
            let e = g.A.getSoundById("3");
            null != e && B(e);
        }, []),
        eQ = r.useCallback(() => {
            let e = (0, V.Dd)(ey.PremiumTypes.TIER_2);
            return ex.intl.format(ex.t["tw/SSq"], { nitroTierName: e, onClick: eX });
        }, [eX]),
        eJ = r.useCallback((e) => (eZ(e, t) ? ts : 32), [t, eZ]),
        e0 = r.useCallback(
            (e) => {
                let t = e === ek.length - 1;
                return eF && t ? 70 : eV && e === eG ? 20 : 0;
            },
            [ek.length, eV, eF, eG],
        ),
        e1 = r.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
        e2 = r.useCallback(
            (e, n) => {
                let r = `${e.key}`,
                    s = p && to(e.categoryInfo, H, t),
                    a = eZ(n, t),
                    o = eH.has(r);
                return (0, i.jsx)(
                    tl,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            ec.default.track(ew.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: ew.liQ.SOUNDBOARD_POPOUT },
                                tab: eM.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !o,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eK(r);
                        },
                        collapsed: o,
                        isSectionNitroLocked: s && eV,
                        showNitroDivider: a && eV,
                    },
                    `header-${r}`,
                );
            },
            [eH, eK, t, eZ, p, H, eV],
        ),
        e3 = r.useCallback(
            (e, t) => {
                let n = t === ek.length - 1,
                    r = t === eG;
                return eF && n
                    ? (0, i.jsx)("div", { className: a()(tr.Lk, { [tr.Ns]: r }) })
                    : eV && t === eG
                      ? (0, i.jsx)("div", { className: a()(tr.a3, { [tr.Ns]: r }) })
                      : null;
            },
            [eG, eV, eF, ek.length],
        ),
        e4 = r.useCallback((e) => eD((0, ep.lG)(e, eS, j, s, M)), [s, j, eS, M]),
        e5 = r.useCallback(
            (e) => {
                (0, b.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: M, ...t });
                });
            },
            [M],
        ),
        e7 = r.useCallback(
            () =>
                v
                    ? (0, i.jsx)(J.Gq, {
                          renderPopout: () => (0, i.jsx)(J.qn, {}),
                          tooltipText: ex.intl.string(ex.t["19lt24"]),
                          position: "top",
                          clickableClassName: a()(tr.Jm, tr.Zz),
                          children: (0, i.jsx)(O.H, { size: "md", color: "currentColor", className: tr.By }),
                      })
                    : (0, i.jsx)(y.D, {
                          tabIndex: 0,
                          className: tr.Jm,
                          onClick: e5,
                          "aria-label": ex.intl.string(ex.t.kbFsAD),
                          children: (0, i.jsx)(td, { className: tr.By }),
                      }),
            [v, e5],
        ),
        e8 = r.useCallback(
            (e) =>
                (0, i.jsx)(eB, {
                    soundboardListRef: e,
                    categories: ed,
                    shouldUpsellLockedCategories: eV,
                    listPadding: S,
                    guildId: t,
                    inExpressionPicker: v,
                }),
            [ed, S, eV, t, v],
        ),
        te = r.useCallback(() => {
            let e = (0, X.qD)();
            return (0, V.LE)(e, ey.pe.TIER_2) ?? ex.intl.string(ex.t.pj0XBN);
        }, []),
        tt = r.useCallback(
            () =>
                eF
                    ? (0, i.jsx)(ee.d, {
                          showUpsell: eU,
                          text: eQ(),
                          button: te(),
                          buttonAnalyticsObject: { section: ew.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          subscribeButtonVariantOverride: et,
                          leadingAction: q
                              ? (0, i.jsx)(en.l, {
                                    size: "sm",
                                    className: tr.ij,
                                    location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                    forceDarkTheme: !0,
                                })
                              : void 0,
                      })
                    : null,
            [eQ, te, eF, q, et, eU],
        ),
        tn = r.useCallback(
            (e) =>
                e?.item.type === e_.uq.SOUND
                    ? (0, i.jsx)(e6, { closePicker: l, soundboardSound: e?.item.sound ?? null })
                    : null,
            [l],
        ),
        tc = r.useCallback(() => {
            let e = g.A.getSoundById("3"),
                t = new Audio((0, ef.A)("3"));
            null != L.current && L.current.pause(),
                (L.current = t),
                (t.currentTime = 0),
                (t.volume = (0, eE.A)(e?.volume ?? 1)),
                t.play();
        }, [L]),
        t_ = (0, I.bG)([eo.A], () => eo.A.getMediaSessionId());
    return (
        (0, P.A)({
            type: A.ImpressionTypes.POPOUT,
            name: A.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: R,
                guild_id: t,
                media_session_id: t_,
                available_custom_sounds_count: eb.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eb.lockedCustomSoundCount,
                favorite_sounds_count: eb.favoriteSoundCount,
            },
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != F
                    ? (0, i.jsx)(ei.A, {
                          title: ex.intl.string(v ? ex.t.rZEEvU : ex.t.jGDYF0),
                          description: ex.intl.string(v ? ex.t.ZPNG5A : ex.t["grL/hg"]),
                          analyticsLocationSection: ew.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: ey.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...G, object: ew.ZSU.SOUNDBOARD_SOUND },
                              location_stack: U,
                              sku_id: V.Ay.getSkuIdForPremiumType(ey.PremiumTypes.TIER_2),
                          },
                          onClose: () => B(null),
                          onUpsellClicked: l,
                          onDisplay: tc,
                      })
                    : void 0,
                (0, i.jsx)(Z, {
                    categories: ek,
                    collapsedCategories: eH,
                    containerWidth: o,
                    store: x.LW,
                    onSelectItem: ez,
                    onSearchExpressions: e4,
                    hasSearchResults: eL.length > 0,
                    defaultSearchPlaceholder: ex.intl.string(ex.t.sKt3xS),
                    renderRow: eq,
                    renderSectionHeader: e2,
                    renderSectionFooter: e3,
                    renderSection: e1,
                    renderCategoryList: e8,
                    renderHeaderAccessories: e7,
                    rowHeight: 48,
                    sectionHeaderHeight: eJ,
                    sectionFooterHeight: e0,
                    itemNodeWidth: 150,
                    gridNavigatorId: z,
                    renderEmptySearchState: tu,
                    renderInspector: tn,
                    gridNotice: m,
                    renderHeader: N,
                    renderUpsell: tt,
                }),
            ],
        })
    );
}
var t_ = n(367720);
function th(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: s,
            onClose: _,
            onSelect: A,
            analyticsSource: I,
            suppressPlaySound: T,
            shouldValidateSelectedSound: S,
            shouldShowLockedSounds: N = !0,
            gridNotice: C,
            inExpressionPicker: y,
            soundButtonOverlay: v,
            listPadding: R,
            renderHeader: O,
            defaultSoundsOnly: b,
        } = e,
        { fetching: L, maybeFetchData: D } = {
            fetching: (0, E.bG)([g.A], () => g.A.isFetchingAnySounds()),
            maybeFetchData: r.useCallback(() => {
                m.E7(), p.bW.loadIfNecessary();
            }, []),
        },
        { analyticsLocations: P } = (0, d.Ay)(u.A.SOUNDBOARD_POPOUT),
        w = (function (e) {
            let { enabled: t } = f.useConfig({ location: e });
            return h.useConfig({ location: "useSoundboardPickerExtraHeight" }).enabled || t ? 100 : 0;
        })(I),
        M = !y && w > 0 ? { height: 420 + w } : void 0;
    return (
        r.useEffect(() => {
            D();
        }, [D]),
        r.useEffect(() => {
            y || (0, c.Ri)("");
        }, [y]),
        (0, i.jsx)(d.f5, {
            value: P,
            children: (0, i.jsx)(o.l, {
                style: M,
                className: a()(t_.Nz, { [t_.Bg]: L, [t_.yV]: y }),
                children: L
                    ? (0, i.jsx)(l.y, {})
                    : (0, i.jsx)(tc, {
                          guildId: t,
                          channel: n,
                          onClose: _,
                          onSelect: A,
                          shouldValidateSelectedSound: S,
                          containerWidth: s,
                          suppressPlaySound: T,
                          shouldShowLockedSounds: N,
                          gridNotice: C,
                          soundButtonOverlay: v,
                          listPadding: R,
                          renderHeader: O,
                          defaultSoundsOnly: b,
                          inExpressionPicker: y,
                          analyticsSource: I,
                      }),
            }),
        })
    );
}
