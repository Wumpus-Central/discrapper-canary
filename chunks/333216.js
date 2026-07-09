"use strict";
n.d(t, { A: () => tE });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(305866),
    o = n(289873),
    d = n(793574),
    c = n(688810),
    u = n(151271),
    _ = n(945810);
let E = (0, _.mj)({
        kind: "user",
        name: "2026-06-soundboard-frequently-used",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    A = (0, _.mj)({
        kind: "user",
        name: "2026-06-soundboard-picker-height",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var h = n(702841),
    I = n(594061),
    f = n(796774),
    p = n(209932);
n(30146);
var T = n(562708),
    m = n(17928),
    g = n(27232),
    S = n(406810),
    N = n(111159),
    C = n(7689),
    R = n(939249),
    O = n(534514),
    L = n(358618),
    D = n(983851),
    y = n(442433),
    v = n(537652),
    b = n(212245),
    M = n(139286),
    P = n(915089),
    U = n(724511),
    w = n(850992),
    G = n(464651),
    x = n(735438),
    k = n(962125),
    F = n(428262),
    V = n(240864),
    B = n(416316);
let H = r.forwardRef(function (e, t) {
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
            R = a.useStore((e) => e.activeCategoryIndex),
            O = r.useMemo(
                () =>
                    n.map((e) =>
                        (0, F.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            L = (0, G.Fk)({
                activeCategoryIndex: R,
                isScrolling: S,
                listRef: N,
                onActiveCategoryIndexChange: a.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: C,
            }),
            D = r.useCallback(
                (e) => {
                    L(e),
                        j({
                            listRef: N,
                            searchQuery: C,
                            nitroLockedSectionStates: O,
                            scrollTop: e,
                            sectionHeaderHeight: p,
                            sectionFooterHeight: T,
                        }),
                        g?.(e);
                },
                [L, C, O, p, T, g],
            );
        return (
            r.useEffect(() => {
                null != N.current && D(N.current.getScrollerNode()?.scrollTop ?? 0);
            }, [D, N]),
            (0, G.FV)({ searchQuery: C, activeCategoryIndex: R, listRef: N }),
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
                    C.length > 0 && !s && null != A
                        ? A()
                        : (0, i.jsx)(k.A, {
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
    j = (0, x.throttle)(
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
            let l = (0, V.s)({
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
var W = n(942381),
    Y = n(602034),
    K = n(892547),
    $ = n(90547);
let z = r.forwardRef(function (e, t) {
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
        [E, A] = (0, u.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], W.x),
        h = n.useStore((e) => e.searchPlaceholder),
        [I, f] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], W.x),
        p = r.useCallback(
            (e) => {
                n.setActiveCategoryIndex("" === e ? 0 : w.Uk),
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
            className: $.i,
            children: (0, i.jsx)(K.I, {
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
                    ...(f ? { "aria-activedescendant": (0, Y.Aq)(l, I.columnIndex, I.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var q = n(645324);
function Z(e) {
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
            sectionFooterHeight: R,
            itemNodeWidth: O,
            listPaddingRight: L,
            itemNodeMargin: D,
            listPadding: y,
            gridNavigatorId: v,
            gridNotice: b,
            renderHeader: M,
            renderUpsell: P,
        } = e,
        U = r.useRef(null),
        w = r.useRef(null),
        x = r.useRef(null),
        k = 0 === t.length,
        F = (0, u.RQ)((e) => e.searchQuery),
        V = s.useStore((e) => e.inspectedExpressionPosition),
        B = (0, G.oV)({ gridWrapperRef: U, containerWidth: a, showingEmptyState: k }),
        {
            expressionsGrid: j,
            rowCount: W,
            rowCountBySection: Y,
            columnCounts: K,
            gutterWidth: $,
        } = (0, G.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: B,
            listPaddingRight: L,
            itemNodeWidth: O,
            itemNodeMargin: D,
        }),
        {
            getItemProps: Z,
            getRowProps: X,
            gridContainerProps: Q,
            handleGridContainerKeyDown: J,
            isUsingKeyboardNavigation: ee,
        } = (0, G.JZ)({
            columnCounts: K,
            expressionsListRef: w,
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
                        gutterWidth: $,
                        rowIndex: e,
                        totalRowCount: W,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => Z(e, t),
                    (t) => s.setInspectedExpressionPosition(t, e),
                ),
            [j, Z, X, $, ee, h, s, W],
        ),
        en = r.useCallback((e) => f?.(t[e], e), [t, f]),
        ei = r.useCallback((e) => p?.(t[e], e), [t, p]),
        er = r.useCallback(() => T?.(j?.[V.rowIndex]?.[V.columnIndex]), [j, V.columnIndex, V.rowIndex, T]);
    r.useEffect(() => {
        o(F);
    }, [o, F]),
        r.useEffect(() => {
            s.setBottomPosition(U.current?.getBoundingClientRect().bottom ?? null);
        }),
        r.useEffect(() => s.resetStoreState, [s.resetStoreState]),
        r.useLayoutEffect(() => {
            x.current?.focus();
        }, []);
    let ea = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(z, {
                ref: x,
                store: s,
                hasSendableExpressions: !0,
                onKeyDown: J,
                expressionsListRef: w,
                gridNavigatorId: v,
                defaultSearchPlaceholder: _,
                emptySearchPlaceholder: E,
            }),
            S?.(),
        ],
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != M ? M(ea) : (0, i.jsxs)("div", { className: q.wx, children: [" ", ea, " "] }),
            k && null != A
                ? A(q.p$)
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          g(w),
                          null != b && (0, i.jsx)("div", { className: q.Eb, children: b }),
                          (0, i.jsx)("div", {
                              ref: U,
                              className: q.AD,
                              id: v,
                              ...Q,
                              children:
                                  null != B
                                      ? (0, i.jsx)(H, {
                                            categories: t,
                                            ref: w,
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
                                            rowCountBySection: Y,
                                            rowHeight: N,
                                            sectionHeaderHeight: C,
                                            sectionFooterHeight: R,
                                            renderUpsell: P,
                                            onScroll: d,
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
    ea = n(885386),
    es = n(909536),
    el = n(763827),
    eo = n(287809),
    ed = n(977997),
    ec = n(147925),
    eu = n(174459),
    e_ = n(807348),
    eE = n(813564),
    eA = n(102597),
    eh = n(904054),
    eI = n(147472);
n(321073);
var ef = n(931991),
    ep = n(71393),
    eT = n(576705),
    em = n(473145),
    eg = n(805143),
    eS = n(935208);
function eN(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => eS.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eC = n(980504),
    eR = n(202541);
function eO(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: e_.uq.SOUND, sound: e, index: t }));
}
function eL(e) {
    let { sections: t, guildIds: n, allSounds: i, potentialSoundIdsForSection: r, sectionType: a, sortSoundsFn: s } = e,
        l = {};
    for (let e of [...n, "0"])
        for (let t of i.get(e) ?? []) null != r.find((e) => e === t.soundId) && (l[t.soundId] = t);
    let o = [];
    for (let e of r) {
        let t = l[e];
        null != t && o.push(t);
    }
    let d = eO(o, s);
    d.length > 0 && t.push({ key: a, categoryInfo: { type: a }, items: d });
}
function eD(e, t) {
    let n = t.get("0") ?? eC.pD;
    e.push({ key: e_.Cx.DEFAULTS, categoryInfo: { type: e_.Cx.DEFAULTS }, items: eO(n, eN) });
}
var ey = n(837381),
    ev = n(990078),
    eb = n(802019),
    eM = n(407698),
    eP = n(652215),
    eU = n(698279),
    ew = n(375708),
    eG = n(930155);
let ex = [8, 8, 8, 8];
function ek(e) {
    let { icon: t, isSelected: n, onClick: r, listItemProps: a } = e;
    return (0, i.jsx)(R.D, {
        ...a,
        onClick: r,
        className: s()(eG.Yl, { [eG.wH]: n }),
        children: (0, i.jsx)(t, { className: eG.xi, color: "currentColor" }),
    });
}
function eF(e, t, n, r, a) {
    switch (e.categoryInfo.type) {
        case e_.Cx.FAVORITES:
            return (0, i.jsx)(ek, { icon: g.G, onClick: t, isSelected: n, listItemProps: r }, e.key);
        case e_.Cx.FREQUENTLY_USED:
            return (0, i.jsx)(ek, { icon: S.O, onClick: t, isSelected: n, listItemProps: r }, e.key);
        case e_.Cx.GUILD:
            return (0, i.jsx)(
                R.D,
                {
                    ...r,
                    className: eG.L1,
                    onClick: t,
                    children: (0, i.jsx)(U.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: a }),
                },
                e.key,
            );
        case e_.Cx.DEFAULTS:
            return (0, i.jsx)(ek, { icon: N.p, onClick: t, isSelected: n, listItemProps: r }, e.key);
        default:
            return null;
    }
}
function eV(e) {
    let { category: t, categoryIndex: n, onClick: r, isSelected: a, isNitroLocked: s } = e,
        l = (0, ey.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === e_.Cx.GUILD
        ? (0, i.jsx)(eM.Q, { guild: t.categoryInfo.guild, children: eF(t, r, a, l, s) })
        : (0, i.jsx)(ev.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case e_.Cx.FAVORITES:
                          return ew.intl.string(ew.t.k8fFjp);
                      case e_.Cx.FREQUENTLY_USED:
                          return ew.intl.string(ew.t["+cGVV6"]);
                      case e_.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case e_.Cx.DEFAULTS:
                          return ew.intl.string(ew.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: eF(t, r, a, l, s),
          });
}
function eB(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: a,
            listPadding: l = ex,
            guildId: o,
            inExpressionPicker: d,
        } = e,
        c = r.useRef(null),
        u = (0, m.bG)([eo.default], () => eo.default.getCurrentUser()),
        _ = (0, F.TW)(u, eR.PremiumTypes.TIER_2),
        E = r.useCallback(
            (e, t, n, r) => {
                let s = a && tl(e.categoryInfo, _, o);
                return (0, i.jsx)(eV, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        eu.default.track(eP.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eP.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eU.kx.SOUNDBOARD,
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
    return (0, i.jsx)(eb.A, {
        className: s()(d ? eG.HZ : eG.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: w.LW,
        categories: n,
        listPadding: l,
        renderCategoryListItem: E,
        rowCount: n.length,
        categoryHeight: 40,
    });
}
var eH = n(554146),
    ej = n(191023),
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
    e3 = n(578078);
function e6(e) {
    let { soundboardSound: t, closePicker: r } = e,
        a = (0, u.RQ)((e) => e.searchQuery),
        s = (0, h.bG)([p.A], () => null != t && p.A.isFavoriteSound(t.soundId)),
        l = (0, h.bG)([ep.A], () => ep.A.getGuild(t?.guildId)),
        o = (0, h.bG)([eZ.Ay], () => eZ.Ay.useReducedMotion, []),
        d = (0, h.bG)([e0.A], () => e0.A.isFocused()),
        c = (0, h.bG)([eJ.Ay], () => eJ.Ay.getKeybindForAction(eP.hCu.SOUNDBOARD_HOLD));
    if (null != t && a.length > 0)
        return (0, i.jsx)(eQ.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, i.jsx)(eq.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: e3.Zg })
                    : (0, i.jsx)(ej.x, { size: "md", color: "currentColor", className: e3.Zg }),
            graphicSecondary: null != l ? (0, i.jsx)(U.A, { guild: l, shouldAnimate: !o && d }) : null,
            titlePrimary: t.name,
            titleSecondary: l?.name,
            isFavorite: s,
        });
    function _() {
        r(),
            (0, eW.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("92000"), n.e("60841"), n.e("46327"), n.e("12618")]).then(
                    n.bind(n, 29681),
                );
                return (t) => (0, i.jsx)(e, { ...t });
            });
    }
    let E = (0, eX.k8)(eH.M.SOUNDBOARD_KEYBIND_TIP),
        A =
            null != c && (0, e1.isWindows)() && !E
                ? ew.intl.format(ew.t.udMTth, {
                      keybind: (0, e2.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, i.jsx)(eY.Anchor, { onClick: _, children: e }, t),
                  })
                : null;
    return null == A
        ? null
        : (0, i.jsxs)("div", {
              className: e3.g,
              children: [
                  (0, i.jsx)(eK.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: e3.QW }),
                  (0, i.jsx)(e$.E, { variant: "text-sm/medium", color: "text-default", className: e3.L5, children: A }),
                  (0, i.jsx)(R.D, {
                      className: e3.b,
                      onClick: function () {
                          return (0, eX.Dr)(eH.M.SOUNDBOARD_KEYBIND_TIP);
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
    e8.A.open(e, eP.BEX.SOUNDBOARD),
        (0, eW.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("43363"),
                n.e("98923"),
                n.e("95339"),
                n.e("71906"),
                n.e("8848"),
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
var te = n(14870),
    tt = n(256611);
function tn(e) {
    let { guild: t, focused: n, onSelectItem: r, ...a } = e,
        { canCreateExpressions: l } = (0, ef.nr)(t);
    return (0, i.jsx)(ev.m, {
        text: ew.intl.string(ew.t["fHo+z1"]),
        shouldShow: !l,
        children: (0, i.jsx)("li", {
            className: te.H,
            children: (0, i.jsxs)(e5.s, {
                ...a,
                "aria-label": ew.intl.formatToPlainString(ew.t.c1qVYh, { guildName: t.name }),
                className: s()(tt.n4, { [tt.in]: n, [tt.r9]: !l }),
                onClick: () => (null != r ? r() : e9(t.id)),
                children: [
                    (0, i.jsx)(e7.j, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(e$.E, {
                        variant: "text-xs/semibold",
                        color: l ? "currentColor" : "text-muted",
                        children: ew.intl.string(ew.t["8Fu/S7"]),
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
        h = w.LW.useStore((e) => e.inspectedExpressionPosition),
        I = `${i}-${a}`,
        f = s && h.rowIndex === i && h.columnIndex === a;
    switch (t.item.type) {
        case e_.uq.SOUND:
            return (0, r.createElement)(e4.Ay, {
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
        case e_.uq.ADD_SOUND:
            return (0, r.createElement)(tn, {
                ...o(a),
                key: I,
                guild: t.item.guild,
                focused: f,
                onSelectItem: () => d(t),
            });
    }
}
var tr = n(728950);
let ta = 32 + et.kg - 8,
    ts = {
        [e_.Cx.SEARCH]: d.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [e_.Cx.DEFAULTS]: d.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [e_.Cx.GUILD]: d.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [e_.Cx.FAVORITES]: d.A.SOUNDBOARD_FAVORITES_SECTION,
        [e_.Cx.FREQUENTLY_USED]: d.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
    };
function tl(e, t, n) {
    return (null == n && e.type === e_.Cx.GUILD && !t) || (e.type === e_.Cx.GUILD && e.guild.id !== n && !t);
}
function to(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: r, isSectionNitroLocked: a, showNitroDivider: l } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l && (0, i.jsx)(et.Ay, { className: tr.yH }),
            (0, i.jsx)("div", {
                className: s()(tr.hd, { [tr.Jb]: a, [tr.VD]: a }),
                children: (0, i.jsx)(R.D, {
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
                                        return (0, i.jsx)(g.G, { size: "xs", color: "currentColor", className: tr.nr });
                                    case e_.Cx.FREQUENTLY_USED:
                                        return (0, i.jsx)(S.O, { size: "xs", color: "currentColor", className: tr.nr });
                                    case e_.Cx.GUILD:
                                        return (0, i.jsx)(U.A, { guild: t.guild, height: 16, width: 16 });
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
                            (0, i.jsx)(O.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: tr.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case e_.Cx.FAVORITES:
                                            return ew.intl.string(ew.t.k8fFjp);
                                        case e_.Cx.FREQUENTLY_USED:
                                            return ew.intl.string(ew.t["+cGVV6"]);
                                        case e_.Cx.GUILD:
                                            return t.guild.name;
                                        case e_.Cx.DEFAULTS:
                                            return ew.intl.string(ew.t.Rtvk9X);
                                        case e_.Cx.SEARCH:
                                            return ew.intl.string(ew.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, i.jsx)(ec.A, {
                                className: tr.nr,
                                direction: n ? ec.A.Directions.RIGHT : ec.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function td() {
    return (0, i.jsx)(v.A, { message: ew.intl.string(ew.t.bgDdNK) });
}
function tc(e) {
    let { className: t } = e,
        n = (0, m.bG)([p.A], () => p.A.isSoundboardVolumeMuted()) ? L._ : D.H;
    return (0, i.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function tu(e) {
    let {
            guildId: t,
            channel: a,
            containerWidth: l,
            onClose: o,
            onSelect: _,
            shouldValidateSelectedSound: A = !1,
            suppressPlaySound: h = !1,
            shouldShowLockedSounds: I = !0,
            gridNotice: f,
            soundButtonOverlay: g,
            listPadding: S,
            renderHeader: N,
            defaultSoundsOnly: C = !1,
            inExpressionPicker: O,
            analyticsSource: L,
        } = e,
        { audioRef: v } = r.useContext(er.A),
        { analyticsLocations: U } = (0, c.Ay)(),
        { analyticsLocations: G } = (0, c.Ay)(d.A.PREMIUM_UPSELL),
        { location: x } = (0, b.p)(),
        k = r.useMemo(() => ({ ...x, section: eP.JJy.SOUNDBOARD_SOUND_PICKER }), [x]),
        [V, B] = r.useState(null),
        H = (0, m.bG)([eo.default], () => eo.default.getCurrentUser()),
        j = (0, F.TW)(H, eR.PremiumTypes.TIER_2),
        W = (0, m.bG)([ed.A], () => ed.A.getVoiceState(t, H?.id ?? eP.dJq)),
        Y = W?.selfDeaf || W?.mute || W?.suppress,
        K = (0, u.RQ)((e) => e.searchQuery),
        $ = null != K && "" !== K,
        z = (0, P.GV)(),
        q = (0, es.St)("soundboard_floating_upsell"),
        et = (0, Q.$)("soundboard_floating_upsell"),
        {
            categories: ec,
            availableSounds: eS,
            soundCounts: ey,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = (0, m.bG)([eo.default], () => eo.default.getCurrentUser()),
                a = F.Ay.isPremium(i, eR.PremiumTypes.TIER_2),
                [s, l, o, d] = (0, m.yK)([p.A], () => [
                    p.A.getSounds(),
                    p.A.getFavorites(),
                    p.A.getFrequentlyUsedSoundIds(),
                    p.A.isFetching(),
                ]),
                c = (0, eg.Y)(e, !1),
                u = (0, m.yK)([ep.A], () => {
                    let e = [];
                    return (
                        c.forEach((t) => {
                            let n = ep.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                _ = F.Ay.canUseSoundboardEverywhere(i),
                A = (0, m.bG)([ep.A], () => ep.A.getGuild(e?.guild_id)),
                h = (0, m.bG)([eT.A], () => {
                    let { canCreateExpressions: e } = (0, ef.ie)(A);
                    return e;
                }, [A]),
                I = r.useMemo(() => o.filter((e) => !l.has(e)).slice(0, 3), [o, l]),
                f = E.useConfig({ location: I.length > 0 ? "useSoundGrid" : "useSoundGridNoFrequentlyUsed" }).enabled;
            return r.useMemo(() => {
                let e = 0,
                    i = 0,
                    r = [];
                return n
                    ? (eD(r, s),
                      {
                          categories: r,
                          availableSounds: s.get("0") ?? eC.pD,
                          isFetching: d,
                          soundCounts: {
                              favoriteSoundCount: 0,
                              unlockedCustomSoundCount: 0,
                              lockedCustomSoundCount: 0,
                          },
                      })
                    : (eL({
                          sections: r,
                          guildIds: c,
                          allSounds: s,
                          potentialSoundIdsForSection: Array.from(l),
                          sectionType: e_.Cx.FAVORITES,
                          sortSoundsFn: eN,
                      }),
                      f &&
                          I.length > 0 &&
                          eL({
                              sections: r,
                              guildIds: c,
                              allSounds: s,
                              potentialSoundIdsForSection: I,
                              sectionType: e_.Cx.FREQUENTLY_USED,
                          }),
                      void 0 !== A &&
                          (function (e, t, n) {
                              let {
                                      currentGuildHasAddPermissions: i,
                                      allSounds: r,
                                      filterOutEmptyCurrentGuild: a,
                                      sortSoundsFn: s,
                                  } = n,
                                  l = r.get(t.id) ?? [],
                                  o = eO(l, s),
                                  d = l.length < (0, em.fA)(t) && i,
                                  c = 0 === o.length;
                              (d || c) && !a && o.push({ type: e_.uq.ADD_SOUND, guild: t }),
                                  (a && c) ||
                                      e.push({
                                          categoryInfo: { type: e_.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: o,
                                      });
                          })(r, A, {
                              currentGuildHasAddPermissions: h,
                              allSounds: s,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: eN,
                          }),
                      _ || eD(r, s),
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
                              let n = eO(r.get(e.id) ?? [], s);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: e_.Cx.GUILD, guild: e, isNitroLocked: !a },
                                      key: e.id,
                                      items: n,
                                  });
                          }
                      })({
                          sections: r,
                          guilds: u,
                          currentGuildId: A?.id,
                          allSounds: s,
                          hasNitro: a,
                          sortSoundsFn: eN,
                      }),
                      _ && eD(r, s),
                      r.forEach((t) => {
                          t.categoryInfo.type === e_.Cx.GUILD &&
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
            }, [c, s, l, f, A, h, t, _, u, n, d, a, eN, I]);
        })(a, void 0, C),
        [ev, eb] = r.useState([]),
        eM = r.useMemo(
            () => (K.length > 0 ? [{ key: e_.Cx.SEARCH, categoryInfo: { type: e_.Cx.SEARCH }, items: eO(ev) }] : ec),
            [ec, K.length, ev],
        ),
        eG = (0, u.RQ)((e) => e.isNitroLockedSectionVisible),
        ex = r.useMemo(() => eM.filter((e) => e.items.length > 0), [eM]),
        ek = r.useMemo(
            () => ex.findLastIndex((e) => !!(0, F.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [ex],
        ),
        eF = !j && I && -1 !== ek,
        eV = !j && I && -1 !== ek,
        eH = ea.b0.useSetting(),
        ej = r.useMemo(() => new Set(eH), [eH]),
        eW = null == a,
        eY = F.Ay.canUseCustomCallSounds(H),
        eK = r.useCallback(
            (e) => {
                ej.has(e) ? ej.delete(e) : ej.add(e), ea.b0.updateSetting(Array.from(ej));
            },
            [ej],
        ),
        e$ = r.useCallback(
            (e, t, n, i) => {
                if (null != _ && !A) return _(e, n);
                let r = (0, eE.Ir)(H, e, a, !1);
                if (null != _ && A && r) _(e, n);
                else if (!h && r && (0, eE.Au)(a))
                    (0, eE.Ak)(e, a?.id ?? eP.dJq, t, i),
                        $ &&
                            eu.default.track(eP.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eP.I4_.SOUNDBOARD,
                                channel_id: a?.id,
                                query: K,
                                location_stack: t,
                            });
                else {
                    if ((0, eE.Ir)(H, e, a)) return;
                    I && B(e);
                }
            },
            [h, H, a, I, $, K, _, A],
        ),
        ez = r.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case e_.uq.SOUND:
                        let n = ts[e?.category] ?? null,
                            i = e?.item.index;
                        return e$(e.item.sound, null == n ? U : [...U, n], t?.shiftKey !== !0, i);
                    case e_.uq.ADD_SOUND:
                        return o(), e9(e.item.guild.id);
                }
            },
            [U, e$, o],
        ),
        eq = r.useCallback(
            (e, n, r, l, o) => {
                let d = ex[r.sectionIndex],
                    c = I && tl(d.categoryInfo, j, t) && eF,
                    u = d.categoryInfo.type === e_.Cx.FREQUENTLY_USED,
                    _ = c || u;
                return (0, i.jsx)(
                    "ul",
                    {
                        ...n,
                        className: s()(tr.a, { [tr.uL]: c }),
                        children: e.map((e, t) =>
                            (0, i.jsx)(
                                ti,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: a,
                                        interactive: eW ? eY : !Y,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: U,
                                    },
                                    rowIndex: r.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: r.isUsingKeyboardNavigation,
                                    suppressPlaySound: h,
                                    getItemProps: l,
                                    onSelectItem: ez,
                                    onItemMouseEnter: o,
                                    buttonOverlay: g,
                                    isNitroLocked: _,
                                    showLockForDisabledSound: I,
                                    inExpressionPicker: O,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [ex, I, j, t, h, ez, a, eW, eY, Y, U, g, eF, O],
        ),
        eZ = r.useCallback(
            (e, t) => {
                if (e <= 0 || !I) return !1;
                let n = ex[e],
                    i = ex[e - 1],
                    r = tl(n.categoryInfo, j, t),
                    a = tl(i.categoryInfo, j, t);
                return r && !a;
            },
            [ex, I, j],
        ),
        eX = r.useCallback(() => {
            let e = p.A.getSoundById("3");
            null != e && B(e);
        }, []),
        eQ = r.useCallback(() => {
            let e = (0, F.Dd)(eR.PremiumTypes.TIER_2);
            return ew.intl.format(ew.t["tw/SSq"], { nitroTierName: e, onClick: eX });
        }, [eX]),
        eJ = r.useCallback((e) => (eZ(e, t) ? ta : 32), [t, eZ]),
        e0 = r.useCallback(
            (e) => {
                let t = e === ex.length - 1;
                return eV && t ? 70 : eF && e === ek ? 20 : 0;
            },
            [ex.length, eF, eV, ek],
        ),
        e1 = r.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
        e2 = r.useCallback(
            (e, n) => {
                let r = `${e.key}`,
                    a = I && tl(e.categoryInfo, j, t),
                    s = eZ(n, t),
                    l = ej.has(r);
                return (0, i.jsx)(
                    to,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            eu.default.track(eP.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eP.liQ.SOUNDBOARD_POPOUT },
                                tab: eU.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !l,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eK(r);
                        },
                        collapsed: l,
                        isSectionNitroLocked: a && eF,
                        showNitroDivider: s && eF,
                    },
                    `header-${r}`,
                );
            },
            [ej, eK, t, eZ, I, j, eF],
        ),
        e3 = r.useCallback(
            (e, t) => {
                let n = t === ex.length - 1,
                    r = t === ek;
                return eV && n
                    ? (0, i.jsx)("div", { className: s()(tr.Lk, { [tr.Ns]: r }) })
                    : eF && t === ek
                      ? (0, i.jsx)("div", { className: s()(tr.a3, { [tr.Ns]: r }) })
                      : null;
            },
            [ek, eF, eV, ex.length],
        ),
        e4 = r.useCallback((e) => eb((0, eI.lG)(e, eS, H, a, U)), [a, H, eS, U]),
        e5 = r.useCallback(
            (e) => {
                (0, y.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: U, ...t });
                });
            },
            [U],
        ),
        e7 = r.useCallback(
            () =>
                O
                    ? (0, i.jsx)(J.Gq, {
                          renderPopout: () => (0, i.jsx)(J.qn, {}),
                          tooltipText: ew.intl.string(ew.t["19lt24"]),
                          position: "top",
                          clickableClassName: s()(tr.Jm, tr.Zz),
                          children: (0, i.jsx)(D.H, { size: "md", color: "currentColor", className: tr.By }),
                      })
                    : (0, i.jsx)(R.D, {
                          tabIndex: 0,
                          className: tr.Jm,
                          onClick: e5,
                          "aria-label": ew.intl.string(ew.t.kbFsAD),
                          children: (0, i.jsx)(tc, { className: tr.By }),
                      }),
            [O, e5],
        ),
        e8 = r.useCallback(
            (e) =>
                (0, i.jsx)(eB, {
                    soundboardListRef: e,
                    categories: ec,
                    shouldUpsellLockedCategories: eF,
                    listPadding: S,
                    guildId: t,
                    inExpressionPicker: O,
                }),
            [ec, S, eF, t, O],
        ),
        te = r.useCallback(() => {
            let e = (0, X.qD)();
            return (0, F.LE)(e, eR.pe.TIER_2) ?? ew.intl.string(ew.t.pj0XBN);
        }, []),
        tt = r.useCallback(
            () =>
                eV
                    ? (0, i.jsx)(ee.d, {
                          showUpsell: eG,
                          text: eQ(),
                          button: te(),
                          buttonAnalyticsObject: { section: eP.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          subscribeButtonVariantOverride: et,
                          leadingAction: q
                              ? (0, i.jsx)(en.l, {
                                    size: "sm",
                                    className: tr.ij,
                                    location: d.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                    forceDarkTheme: !0,
                                })
                              : void 0,
                      })
                    : null,
            [eQ, te, eV, q, et, eG],
        ),
        tn = r.useCallback(
            (e) =>
                e?.item.type === e_.uq.SOUND
                    ? (0, i.jsx)(e6, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        tu = r.useCallback(() => {
            let e = p.A.getSoundById("3"),
                t = new Audio((0, eA.A)("3"));
            null != v.current && v.current.pause(),
                (v.current = t),
                (t.currentTime = 0),
                (t.volume = (0, eh.A)(e?.volume ?? 1)),
                t.play();
        }, [v]),
        t_ = (0, m.bG)([el.A], () => el.A.getMediaSessionId());
    return (
        (0, M.A)({
            type: T.ImpressionTypes.POPOUT,
            name: T.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: L,
                guild_id: t,
                media_session_id: t_,
                available_custom_sounds_count: ey.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: ey.lockedCustomSoundCount,
                favorite_sounds_count: ey.favoriteSoundCount,
            },
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != V
                    ? (0, i.jsx)(ei.A, {
                          title: ew.intl.string(O ? ew.t.rZEEvU : ew.t.jGDYF0),
                          description: ew.intl.string(O ? ew.t.ZPNG5A : ew.t["grL/hg"]),
                          analyticsLocationSection: eP.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eR.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...k, object: eP.ZSU.SOUNDBOARD_SOUND },
                              location_stack: G,
                              sku_id: F.Ay.getSkuIdForPremiumType(eR.PremiumTypes.TIER_2),
                          },
                          onClose: () => B(null),
                          onUpsellClicked: o,
                          onDisplay: tu,
                      })
                    : void 0,
                (0, i.jsx)(Z, {
                    categories: ex,
                    collapsedCategories: ej,
                    containerWidth: l,
                    store: w.LW,
                    onSelectItem: ez,
                    onSearchExpressions: e4,
                    hasSearchResults: ev.length > 0,
                    defaultSearchPlaceholder: ew.intl.string(ew.t.sKt3xS),
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
                    renderEmptySearchState: td,
                    renderInspector: tn,
                    gridNotice: f,
                    renderHeader: N,
                    renderUpsell: tt,
                }),
            ],
        })
    );
}
var t_ = n(740712);
function tE(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: a,
            onClose: _,
            onSelect: T,
            analyticsSource: m,
            suppressPlaySound: g,
            shouldValidateSelectedSound: S,
            shouldShowLockedSounds: N = !0,
            gridNotice: C,
            inExpressionPicker: R,
            soundButtonOverlay: O,
            listPadding: L,
            renderHeader: D,
            defaultSoundsOnly: y,
        } = e,
        { fetching: v, maybeFetchData: b } = {
            fetching: (0, h.bG)([p.A], () => p.A.isFetchingAnySounds()),
            maybeFetchData: r.useCallback(() => {
                f.E7(), I.bW.loadIfNecessary();
            }, []),
        },
        { analyticsLocations: M } = (0, c.Ay)(d.A.SOUNDBOARD_POPOUT),
        P = (function (e) {
            let { enabled: t } = A.useConfig({ location: e });
            return E.useConfig({ location: "useSoundboardPickerExtraHeight" }).enabled || t ? 100 : 0;
        })(m),
        U = !R && P > 0 ? { height: 420 + P } : void 0;
    return (
        r.useEffect(() => {
            b();
        }, [b]),
        r.useEffect(() => {
            R || (0, u.Ri)("");
        }, [R]),
        (0, i.jsx)(c.f5, {
            value: M,
            children: (0, i.jsx)(l.l, {
                style: U,
                className: s()(t_.Nz, { [t_.Bg]: v, [t_.yV]: R }),
                children: v
                    ? (0, i.jsx)(o.y, {})
                    : (0, i.jsx)(tu, {
                          guildId: t,
                          channel: n,
                          onClose: _,
                          onSelect: T,
                          shouldValidateSelectedSound: S,
                          containerWidth: a,
                          suppressPlaySound: g,
                          shouldShowLockedSounds: N,
                          gridNotice: C,
                          soundButtonOverlay: O,
                          listPadding: L,
                          renderHeader: D,
                          defaultSoundsOnly: y,
                          inExpressionPicker: R,
                          analyticsSource: m,
                      }),
            }),
        })
    );
}
