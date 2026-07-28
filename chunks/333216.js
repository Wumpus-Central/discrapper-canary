"use strict";
n.d(t, { A: () => t_ });
var i = n(477900),
    r = n(582128),
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
    O = n(939249),
    R = n(297264),
    L = n(358618),
    y = n(983851),
    D = n(442433),
    v = n(537652),
    b = n(212245),
    M = n(139286),
    P = n(915089),
    U = n(724511),
    w = n(850992),
    G = n(887695),
    x = n(435558),
    k = n(962125),
    F = n(428262),
    V = n(240864),
    B = n(36852);
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
            O = a.useStore((e) => e.activeCategoryIndex),
            R = r.useMemo(
                () =>
                    n.map((e) =>
                        (0, F.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            L = (0, G.Fk)({
                activeCategoryIndex: O,
                isScrolling: S,
                listRef: N,
                onActiveCategoryIndexChange: a.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: C,
            }),
            y = r.useCallback(
                (e) => {
                    L(e),
                        j({
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
                null != N.current && y(N.current.getScrollerNode()?.scrollTop ?? 0);
            }, [y, N]),
            (0, G.FV)({ searchQuery: C, activeCategoryIndex: O, listRef: N }),
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
                              onScroll: y,
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
var W = n(462180),
    Y = n(602034),
    K = n(892547),
    $ = n(893195);
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
var q = n(141972);
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
            sectionFooterHeight: O,
            itemNodeWidth: R,
            listPaddingRight: L,
            itemNodeMargin: y,
            listPadding: D,
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
            itemNodeWidth: R,
            itemNodeMargin: y,
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
                                            listPadding: D,
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
                                            sectionFooterHeight: O,
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
    Q = n(319993),
    J = n(202639),
    ee = n(414872),
    et = n(400669),
    en = n(2181),
    ei = n(523006),
    er = n(885386),
    ea = n(909536),
    es = n(763827),
    el = n(287809),
    eo = n(977997),
    ed = n(147925),
    ec = n(174459),
    eu = n(807348),
    e_ = n(813564),
    eE = n(102597),
    eA = n(904054),
    eh = n(147472);
n(321073);
var eI = n(931991),
    ef = n(71393),
    ep = n(576705),
    eT = n(473145),
    em = n(805143),
    eg = n(935208);
function eS(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = [...e].sort((e, t) => eg.default.compare(e.soundId, t.soundId));
    return t ? [...n].sort((e, t) => (e.available && !t.available ? -1 : !e.available && t.available ? 1 : 0)) : n;
}
var eN = n(980504),
    eC = n(202541);
function eO(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({ type: eu.uq.SOUND, sound: e, index: t }));
}
function eR(e) {
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
function eL(e, t) {
    let n = t.get("0") ?? eN.pD;
    e.push({ key: eu.Cx.DEFAULTS, categoryInfo: { type: eu.Cx.DEFAULTS }, items: eO(n, eS) });
}
var ey = n(837381),
    eD = n(866665),
    ev = n(802019),
    eb = n(407698),
    eM = n(652215),
    eP = n(698279),
    eU = n(375708),
    ew = n(693187);
let eG = [8, 8, 8, 8];
function ex(e) {
    let { icon: t, isSelected: n, onClick: r, listItemProps: a } = e;
    return (0, i.jsx)(O.D, {
        ...a,
        onClick: r,
        className: s()(ew.Yl, { [ew.wH]: n }),
        children: (0, i.jsx)(t, { className: ew.xi, color: "currentColor" }),
    });
}
function ek(e, t, n, r, a) {
    switch (e.categoryInfo.type) {
        case eu.Cx.FAVORITES:
            return (0, i.jsx)(ex, { icon: g.G, onClick: t, isSelected: n, listItemProps: r }, e.key);
        case eu.Cx.FREQUENTLY_USED:
            return (0, i.jsx)(ex, { icon: S.O, onClick: t, isSelected: n, listItemProps: r }, e.key);
        case eu.Cx.GUILD:
            return (0, i.jsx)(
                O.D,
                {
                    ...r,
                    className: ew.L1,
                    onClick: t,
                    children: (0, i.jsx)(U.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: a }),
                },
                e.key,
            );
        case eu.Cx.DEFAULTS:
            return (0, i.jsx)(ex, { icon: N.p, onClick: t, isSelected: n, listItemProps: r }, e.key);
        default:
            return null;
    }
}
function eF(e) {
    let { category: t, categoryIndex: n, onClick: r, isSelected: a, isNitroLocked: s } = e,
        l = (0, ey.rm)(`soundboard_guild_${n}`);
    return t.categoryInfo.type === eu.Cx.GUILD
        ? (0, i.jsx)(eb.Q, { guild: t.categoryInfo.guild, children: ek(t, r, a, l, s) })
        : (0, i.jsx)(eD.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case eu.Cx.FAVORITES:
                          return eU.intl.string(eU.t.k8fFjp);
                      case eu.Cx.FREQUENTLY_USED:
                          return eU.intl.string(eU.t["+cGVV6"]);
                      case eu.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case eu.Cx.DEFAULTS:
                          return eU.intl.string(eU.t.Rtvk9X);
                  }
              })(t),
              position: "right",
              align: "center",
              children: ek(t, r, a, l, s),
          });
}
function eV(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: a,
            listPadding: l = eG,
            guildId: o,
            inExpressionPicker: d,
        } = e,
        c = r.useRef(null),
        u = (0, m.bG)([el.default], () => el.default.getCurrentUser()),
        _ = (0, F.TW)(u, eC.PremiumTypes.TIER_2),
        E = r.useCallback(
            (e, t, n, r) => {
                let s = a && ts(e.categoryInfo, _, o);
                return (0, i.jsx)(eF, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        ec.default.track(eM.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eM.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eP.kx.SOUNDBOARD,
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
    return (0, i.jsx)(ev.A, {
        className: s()(d ? ew.HZ : ew.jv),
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
var eB = n(554146),
    eH = n(191023),
    ej = n(192308),
    eW = n(349288),
    eY = n(695366),
    eK = n(834730),
    e$ = n(789645),
    ez = n(565645),
    eq = n(775602),
    eZ = n(826673),
    eX = n(182922),
    eQ = n(532624),
    eJ = n(531685),
    e0 = n(723702),
    e1 = n(350535),
    e2 = n(154678);
function e3(e) {
    let { soundboardSound: t, closePicker: r } = e,
        a = (0, u.RQ)((e) => e.searchQuery),
        s = (0, h.bG)([p.A], () => null != t && p.A.isFavoriteSound(t.soundId)),
        l = (0, h.bG)([ef.A], () => ef.A.getGuild(t?.guildId)),
        o = (0, h.bG)([eq.Ay], () => eq.Ay.useReducedMotion, []),
        d = (0, h.bG)([eJ.A], () => eJ.A.isFocused()),
        c = (0, h.bG)([eQ.Ay], () => eQ.Ay.getKeybindForAction(eM.hCu.SOUNDBOARD_HOLD));
    if (null != t && a.length > 0)
        return (0, i.jsx)(eX.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, i.jsx)(ez.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: e2.Zg })
                    : (0, i.jsx)(eH.x, { size: "md", color: "currentColor", className: e2.Zg }),
            graphicSecondary: null != l ? (0, i.jsx)(U.A, { guild: l, shouldAnimate: !o && d }) : null,
            titlePrimary: t.name,
            titleSecondary: l?.name,
            isFavorite: s,
        });
    function _() {
        r(),
            (0, ej.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("89304"), n.e("68113"), n.e("46327"), n.e("12618")]).then(
                    n.bind(n, 29681),
                );
                return (t) => (0, i.jsx)(e, { ...t });
            });
    }
    let E = (0, eZ.k8)(eB.M.SOUNDBOARD_KEYBIND_TIP),
        A =
            null != c && (0, e0.isWindows)() && !E
                ? eU.intl.format(eU.t.udMTth, {
                      keybind: (0, e1.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, i.jsx)(eW.Anchor, { onClick: _, children: e }, t),
                  })
                : null;
    return null == A
        ? null
        : (0, i.jsxs)("div", {
              className: e2.g,
              children: [
                  (0, i.jsx)(eY.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: e2.QW }),
                  (0, i.jsx)(eK.E, { variant: "text-sm/medium", color: "text-default", className: e2.L5, children: A }),
                  (0, i.jsx)(O.D, {
                      className: e2.b,
                      onClick: function () {
                          return (0, eZ.Dr)(eB.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, i.jsx)(e$.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var e4 = n(805945),
    e6 = n(890856),
    e5 = n(307301),
    e7 = n(468689);
function e8(e) {
    e7.A.open(e, eM.BEX.SOUNDBOARD),
        (0, ej.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("47899"),
                n.e("75091"),
                n.e("56963"),
                n.e("67304"),
                n.e("22312"),
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
var e9 = n(753502),
    te = n(677611);
function tt(e) {
    let { guild: t, focused: n, onSelectItem: r, ...a } = e,
        { canCreateExpressions: l } = (0, eI.nr)(t);
    return (0, i.jsx)(eD.m, {
        text: eU.intl.string(eU.t["fHo+z1"]),
        shouldShow: !l,
        children: (0, i.jsx)("li", {
            className: e9.H,
            children: (0, i.jsxs)(e6.s, {
                ...a,
                "aria-label": eU.intl.formatToPlainString(eU.t.c1qVYh, { guildName: t.name }),
                className: s()(te.n4, { [te.in]: n, [te.r9]: !l }),
                onClick: () => (null != r ? r() : e8(t.id)),
                children: [
                    (0, i.jsx)(e5.j, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(eK.E, {
                        variant: "text-xs/semibold",
                        color: l ? "currentColor" : "text-muted",
                        children: eU.intl.string(eU.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function tn(e) {
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
        case eu.uq.SOUND:
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
        case eu.uq.ADD_SOUND:
            return (0, r.createElement)(tt, {
                ...o(a),
                key: I,
                guild: t.item.guild,
                focused: f,
                onSelectItem: () => d(t),
            });
    }
}
var ti = n(683886);
let tr = 32 + ee.kg - 8,
    ta = {
        [eu.Cx.SEARCH]: d.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [eu.Cx.DEFAULTS]: d.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [eu.Cx.GUILD]: d.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [eu.Cx.FAVORITES]: d.A.SOUNDBOARD_FAVORITES_SECTION,
        [eu.Cx.FREQUENTLY_USED]: d.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
    };
function ts(e, t, n) {
    return (null == n && e.type === eu.Cx.GUILD && !t) || (e.type === eu.Cx.GUILD && e.guild.id !== n && !t);
}
function tl(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: r, isSectionNitroLocked: a, showNitroDivider: l } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l && (0, i.jsx)(ee.Ay, { className: ti.yH }),
            (0, i.jsx)("div", {
                className: s()(ti.hd, { [ti.Jb]: a, [ti.VD]: a }),
                children: (0, i.jsx)(O.D, {
                    className: ti.bV,
                    onClick: r,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, i.jsxs)("div", {
                        className: ti.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case eu.Cx.FAVORITES:
                                        return (0, i.jsx)(g.G, { size: "xs", color: "currentColor", className: ti.nr });
                                    case eu.Cx.FREQUENTLY_USED:
                                        return (0, i.jsx)(S.O, { size: "xs", color: "currentColor", className: ti.nr });
                                    case eu.Cx.GUILD:
                                        return (0, i.jsx)(U.A, { guild: t.guild, height: 16, width: 16 });
                                    case eu.Cx.DEFAULTS:
                                        return (0, i.jsx)(N.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: ti.nr,
                                        });
                                    case eu.Cx.SEARCH:
                                        return (0, i.jsx)(C.$, { size: "md", color: "currentColor", className: ti.nr });
                                }
                            })(),
                            (0, i.jsx)(R.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: ti.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case eu.Cx.FAVORITES:
                                            return eU.intl.string(eU.t.k8fFjp);
                                        case eu.Cx.FREQUENTLY_USED:
                                            return eU.intl.string(eU.t["+cGVV6"]);
                                        case eu.Cx.GUILD:
                                            return t.guild.name;
                                        case eu.Cx.DEFAULTS:
                                            return eU.intl.string(eU.t.Rtvk9X);
                                        case eu.Cx.SEARCH:
                                            return eU.intl.string(eU.t["zkoeq/"]);
                                    }
                                })(),
                            }),
                            (0, i.jsx)(ed.A, {
                                className: ti.nr,
                                direction: n ? ed.A.Directions.RIGHT : ed.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function to() {
    return (0, i.jsx)(v.A, { message: eU.intl.string(eU.t.bgDdNK) });
}
function td(e) {
    let { className: t } = e,
        n = (0, m.bG)([p.A], () => p.A.isSoundboardVolumeMuted()) ? L._ : y.H;
    return (0, i.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function tc(e) {
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
            inExpressionPicker: R,
            analyticsSource: L,
        } = e,
        { audioRef: v } = r.useContext(ei.A),
        { analyticsLocations: U } = (0, c.Ay)(),
        { analyticsLocations: G } = (0, c.Ay)(d.A.PREMIUM_UPSELL),
        { location: x } = (0, b.p)(),
        k = r.useMemo(() => ({ ...x, section: eM.JJy.SOUNDBOARD_SOUND_PICKER }), [x]),
        [V, B] = r.useState(null),
        H = (0, m.bG)([el.default], () => el.default.getCurrentUser()),
        j = (0, F.TW)(H, eC.PremiumTypes.TIER_2),
        W = (0, m.bG)([eo.A], () => eo.A.getVoiceState(t, H?.id ?? eM.dJq)),
        Y = W?.selfDeaf || W?.mute || W?.suppress,
        K = (0, u.RQ)((e) => e.searchQuery),
        $ = null != K && "" !== K,
        z = (0, P.GV)(),
        q = (0, ea.St)("soundboard_floating_upsell"),
        {
            categories: ee,
            availableSounds: ed,
            soundCounts: eg,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = (0, m.bG)([el.default], () => el.default.getCurrentUser()),
                a = F.Ay.isPremium(i, eC.PremiumTypes.TIER_2),
                [s, l, o, d] = (0, m.yK)([p.A], () => [
                    p.A.getSounds(),
                    p.A.getFavorites(),
                    p.A.getFrequentlyUsedSoundIds(),
                    p.A.isFetching(),
                ]),
                c = (0, em.Y)(e, !1),
                u = (0, m.yK)([ef.A], () => {
                    let e = [];
                    return (
                        c.forEach((t) => {
                            let n = ef.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                _ = F.Ay.canUseSoundboardEverywhere(i),
                A = (0, m.bG)([ef.A], () => ef.A.getGuild(e?.guild_id)),
                h = (0, m.bG)([ep.A], () => {
                    let { canCreateExpressions: e } = (0, eI.ie)(A);
                    return e;
                }, [A]),
                I = r.useMemo(() => o.filter((e) => !l.has(e)).slice(0, 3), [o, l]),
                f = E.useConfig({ location: I.length > 0 ? "useSoundGrid" : "useSoundGridNoFrequentlyUsed" }).enabled;
            return r.useMemo(() => {
                let e = 0,
                    i = 0,
                    r = [];
                return n
                    ? (eL(r, s),
                      {
                          categories: r,
                          availableSounds: s.get("0") ?? eN.pD,
                          isFetching: d,
                          soundCounts: {
                              favoriteSoundCount: 0,
                              unlockedCustomSoundCount: 0,
                              lockedCustomSoundCount: 0,
                          },
                      })
                    : (eR({
                          sections: r,
                          guildIds: c,
                          allSounds: s,
                          potentialSoundIdsForSection: Array.from(l),
                          sectionType: eu.Cx.FAVORITES,
                          sortSoundsFn: eS,
                      }),
                      f &&
                          I.length > 0 &&
                          eR({
                              sections: r,
                              guildIds: c,
                              allSounds: s,
                              potentialSoundIdsForSection: I,
                              sectionType: eu.Cx.FREQUENTLY_USED,
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
                                  d = l.length < (0, eT.fA)(t) && i,
                                  c = 0 === o.length;
                              (d || c) && !a && o.push({ type: eu.uq.ADD_SOUND, guild: t }),
                                  (a && c) ||
                                      e.push({
                                          categoryInfo: { type: eu.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: o,
                                      });
                          })(r, A, {
                              currentGuildHasAddPermissions: h,
                              allSounds: s,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: eS,
                          }),
                      _ || eL(r, s),
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
                                      categoryInfo: { type: eu.Cx.GUILD, guild: e, isNitroLocked: !a },
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
                          sortSoundsFn: eS,
                      }),
                      _ && eL(r, s),
                      r.forEach((t) => {
                          t.categoryInfo.type === eu.Cx.GUILD &&
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
            }, [c, s, l, f, A, h, t, _, u, n, d, a, eS, I]);
        })(a, void 0, C),
        [ey, eD] = r.useState([]),
        ev = r.useMemo(
            () => (K.length > 0 ? [{ key: eu.Cx.SEARCH, categoryInfo: { type: eu.Cx.SEARCH }, items: eO(ey) }] : ee),
            [ee, K.length, ey],
        ),
        eb = (0, u.RQ)((e) => e.isNitroLockedSectionVisible),
        ew = r.useMemo(() => ev.filter((e) => e.items.length > 0), [ev]),
        eG = r.useMemo(
            () => ew.findLastIndex((e) => !!(0, F.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [ew],
        ),
        ex = !j && I && -1 !== eG,
        ek = !j && I && -1 !== eG,
        eF = er.b0.useSetting(),
        eB = r.useMemo(() => new Set(eF), [eF]),
        eH = null == a,
        ej = F.Ay.canUseCustomCallSounds(H),
        eW = r.useCallback(
            (e) => {
                eB.has(e) ? eB.delete(e) : eB.add(e), er.b0.updateSetting(Array.from(eB));
            },
            [eB],
        ),
        eY = r.useCallback(
            (e, t, n, i) => {
                if (null != _ && !A) return _(e, n);
                let r = (0, e_.Ir)(H, e, a, !1);
                if (null != _ && A && r) _(e, n);
                else if (!h && r && (0, e_.Au)(a))
                    (0, e_.Ak)(e, a?.id ?? eM.dJq, t, i),
                        $ &&
                            ec.default.track(eM.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eM.I4_.SOUNDBOARD,
                                channel_id: a?.id,
                                query: K,
                                location_stack: t,
                            });
                else {
                    if ((0, e_.Ir)(H, e, a)) return;
                    I && B(e);
                }
            },
            [h, H, a, I, $, K, _, A],
        ),
        eK = r.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case eu.uq.SOUND:
                        let n = ta[e?.category] ?? null,
                            i = e?.item.index;
                        return eY(e.item.sound, null == n ? U : [...U, n], t?.shiftKey !== !0, i);
                    case eu.uq.ADD_SOUND:
                        return o(), e8(e.item.guild.id);
                }
            },
            [U, eY, o],
        ),
        e$ = r.useCallback(
            (e, n, r, l, o) => {
                let d = ew[r.sectionIndex],
                    c = I && ts(d.categoryInfo, j, t) && ex,
                    u = d.categoryInfo.type === eu.Cx.FREQUENTLY_USED,
                    _ = c || u;
                return (0, i.jsx)(
                    "ul",
                    {
                        ...n,
                        className: s()(ti.a, { [ti.uL]: c }),
                        children: e.map((e, t) =>
                            (0, i.jsx)(
                                tn,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: a,
                                        interactive: eH ? ej : !Y,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: U,
                                    },
                                    rowIndex: r.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: r.isUsingKeyboardNavigation,
                                    suppressPlaySound: h,
                                    getItemProps: l,
                                    onSelectItem: eK,
                                    onItemMouseEnter: o,
                                    buttonOverlay: g,
                                    isNitroLocked: _,
                                    showLockForDisabledSound: I,
                                    inExpressionPicker: R,
                                },
                                t,
                            ),
                        ),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [ew, I, j, t, h, eK, a, eH, ej, Y, U, g, ex, R],
        ),
        ez = r.useCallback(
            (e, t) => {
                if (e <= 0 || !I) return !1;
                let n = ew[e],
                    i = ew[e - 1],
                    r = ts(n.categoryInfo, j, t),
                    a = ts(i.categoryInfo, j, t);
                return r && !a;
            },
            [ew, I, j],
        ),
        eq = r.useCallback(() => {
            let e = p.A.getSoundById("3");
            null != e && B(e);
        }, []),
        eZ = r.useCallback(() => {
            let e = (0, F.Dd)(eC.PremiumTypes.TIER_2);
            return eU.intl.format(eU.t["tw/SSq"], { nitroTierName: e, onClick: eq });
        }, [eq]),
        eX = r.useCallback((e) => (ez(e, t) ? tr : 32), [t, ez]),
        eQ = r.useCallback(
            (e) => {
                let t = e === ew.length - 1;
                return ek && t ? 70 : ex && e === eG ? 20 : 0;
            },
            [ew.length, ex, ek, eG],
        ),
        eJ = r.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
        e0 = r.useCallback(
            (e, n) => {
                let r = `${e.key}`,
                    a = I && ts(e.categoryInfo, j, t),
                    s = ez(n, t),
                    l = eB.has(r);
                return (0, i.jsx)(
                    tl,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            ec.default.track(eM.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eM.liQ.SOUNDBOARD_POPOUT },
                                tab: eP.kx.SOUNDBOARD,
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
            [eB, eW, t, ez, I, j, ex],
        ),
        e1 = r.useCallback(
            (e, t) => {
                let n = t === ew.length - 1,
                    r = t === eG;
                return ek && n
                    ? (0, i.jsx)("div", { className: s()(ti.Lk, { [ti.Ns]: r }) })
                    : ex && t === eG
                      ? (0, i.jsx)("div", { className: s()(ti.a3, { [ti.Ns]: r }) })
                      : null;
            },
            [eG, ex, ek, ew.length],
        ),
        e2 = r.useCallback((e) => eD((0, eh.lG)(e, ed, H, a, U)), [a, H, ed, U]),
        e4 = r.useCallback(
            (e) => {
                (0, D.L3)(e, async () => {
                    let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                    return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: U, ...t });
                });
            },
            [U],
        ),
        e6 = r.useCallback(
            () =>
                R
                    ? (0, i.jsx)(Q.Gq, {
                          renderPopout: () => (0, i.jsx)(Q.qn, {}),
                          tooltipText: eU.intl.string(eU.t["19lt24"]),
                          position: "top",
                          clickableClassName: s()(ti.Jm, ti.Zz),
                          children: (0, i.jsx)(y.H, { size: "md", color: "currentColor", className: ti.By }),
                      })
                    : (0, i.jsx)(O.D, {
                          tabIndex: 0,
                          className: ti.Jm,
                          onClick: e4,
                          "aria-label": eU.intl.string(eU.t.kbFsAD),
                          children: (0, i.jsx)(td, { className: ti.By }),
                      }),
            [R, e4],
        ),
        e5 = r.useCallback(
            (e) =>
                (0, i.jsx)(eV, {
                    soundboardListRef: e,
                    categories: ee,
                    shouldUpsellLockedCategories: ex,
                    listPadding: S,
                    guildId: t,
                    inExpressionPicker: R,
                }),
            [ee, S, ex, t, R],
        ),
        e7 = r.useCallback(() => {
            let e = (0, X.qD)();
            return (0, F.LE)(e, eC.pe.TIER_2) ?? eU.intl.string(eU.t.pj0XBN);
        }, []),
        e9 = r.useCallback(
            () =>
                ek
                    ? (0, i.jsx)(J.d, {
                          showUpsell: eb,
                          text: eZ(),
                          button: e7(),
                          buttonAnalyticsObject: { section: eM.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: q
                              ? (0, i.jsx)(et.l, {
                                    size: "sm",
                                    className: ti.ij,
                                    location: d.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                                    forceDarkTheme: !0,
                                })
                              : void 0,
                      })
                    : null,
            [eZ, e7, ek, q, eb],
        ),
        te = r.useCallback(
            (e) =>
                e?.item.type === eu.uq.SOUND
                    ? (0, i.jsx)(e3, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        tt = r.useCallback(() => {
            let e = p.A.getSoundById("3"),
                t = new Audio((0, eE.A)("3"));
            null != v.current && v.current.pause(),
                (v.current = t),
                (t.currentTime = 0),
                (t.volume = (0, eA.A)(e?.volume ?? 1)),
                t.play();
        }, [v]),
        tc = (0, m.bG)([es.A], () => es.A.getMediaSessionId());
    return (
        (0, M.A)({
            type: T.ImpressionTypes.POPOUT,
            name: T.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: L,
                guild_id: t,
                media_session_id: tc,
                available_custom_sounds_count: eg.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eg.lockedCustomSoundCount,
                favorite_sounds_count: eg.favoriteSoundCount,
            },
        }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != V
                    ? (0, i.jsx)(en.A, {
                          title: eU.intl.string(R ? eU.t.rZEEvU : eU.t.jGDYF0),
                          description: eU.intl.string(R ? eU.t.ZPNG5A : eU.t["grL/hg"]),
                          analyticsLocationSection: eM.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eC.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...k, object: eM.ZSU.SOUNDBOARD_SOUND },
                              location_stack: G,
                              sku_id: F.Ay.getSkuIdForPremiumType(eC.PremiumTypes.TIER_2),
                          },
                          onClose: () => B(null),
                          onUpsellClicked: o,
                          onDisplay: tt,
                      })
                    : void 0,
                (0, i.jsx)(Z, {
                    categories: ew,
                    collapsedCategories: eB,
                    containerWidth: l,
                    store: w.LW,
                    onSelectItem: eK,
                    onSearchExpressions: e2,
                    hasSearchResults: ey.length > 0,
                    defaultSearchPlaceholder: eU.intl.string(eU.t.sKt3xS),
                    renderRow: e$,
                    renderSectionHeader: e0,
                    renderSectionFooter: e1,
                    renderSection: eJ,
                    renderCategoryList: e5,
                    renderHeaderAccessories: e6,
                    rowHeight: 48,
                    sectionHeaderHeight: eX,
                    sectionFooterHeight: eQ,
                    itemNodeWidth: 150,
                    gridNavigatorId: z,
                    renderEmptySearchState: to,
                    renderInspector: te,
                    gridNotice: f,
                    renderHeader: N,
                    renderUpsell: e9,
                }),
            ],
        })
    );
}
var tu = n(752944);
function t_(e) {
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
            inExpressionPicker: O,
            soundButtonOverlay: R,
            listPadding: L,
            renderHeader: y,
            defaultSoundsOnly: D,
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
        U = !O && P > 0 ? { height: 420 + P } : void 0;
    return (
        r.useEffect(() => {
            b();
        }, [b]),
        r.useEffect(() => {
            O || (0, u.Ri)("");
        }, [O]),
        (0, i.jsx)(c.f5, {
            value: M,
            children: (0, i.jsx)(l.l, {
                style: U,
                className: s()(tu.Nz, { [tu.Bg]: v, [tu.yV]: O }),
                children: v
                    ? (0, i.jsx)(o.y, {})
                    : (0, i.jsx)(tc, {
                          guildId: t,
                          channel: n,
                          onClose: _,
                          onSelect: T,
                          shouldValidateSelectedSound: S,
                          containerWidth: a,
                          suppressPlaySound: g,
                          shouldShowLockedSounds: N,
                          gridNotice: C,
                          soundButtonOverlay: R,
                          listPadding: L,
                          renderHeader: y,
                          defaultSoundsOnly: D,
                          inExpressionPicker: O,
                          analyticsSource: m,
                      }),
            }),
        })
    );
}
