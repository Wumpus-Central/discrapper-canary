n.d(t, { A: () => tS });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(305866),
    o = n(289873),
    u = n(793574),
    c = n(688810),
    d = n(151271),
    h = n(665252),
    m = n(702841),
    f = n(594061),
    p = n(796774),
    g = n(209932);
n(30146);
var x = n(562708),
    E = n(17928),
    S = n(27232),
    y = n(406810),
    A = n(111159),
    C = n(7689),
    b = n(369606),
    I = n(939249),
    v = n(297264),
    N = n(358618),
    T = n(983851),
    j = n(442433),
    _ = n(537652),
    k = n(212245),
    R = n(139286),
    O = n(915089),
    w = n(724511),
    L = n(850992),
    M = n(887695),
    P = n(435558),
    D = n(962125),
    U = n(24482),
    V = n(240864),
    W = n(212633);
let F = (0, P.throttle)(
        function (e) {
            let {
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: r,
                sectionFooterHeight: s,
            } = e;
            if (null == t.current) return;
            let a = (0, V.s)({
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: r,
                sectionFooterHeight: s,
            });
            d.RQ.setState({
                isNitroLockedSectionVisible: a.isNitroLockedSectionVisible,
                areOnlyNitroLockedSectionsVisible: a.areOnlyNitroLockedSectionsVisible,
            });
        },
        300,
        { leading: !1, trailing: !0 },
    ),
    B = function (e) {
        let {
                categories: t,
                store: n,
                hasSearchResults: r,
                listPadding: s,
                renderRow: a,
                renderSection: o,
                renderSectionHeader: u,
                renderSectionFooter: c,
                renderInspector: h,
                renderEmptySearchState: m,
                rowCount: f,
                rowCountBySection: p,
                rowHeight: g,
                sectionHeaderHeight: x,
                sectionFooterHeight: E,
                renderUpsell: S,
                onScroll: y,
                ref: A,
            } = e,
            C = i.useRef(!1),
            b = i.useRef(null),
            I = (0, d.RQ)((e) => e.searchQuery),
            v = n.useStore((e) => e.activeCategoryIndex),
            N = i.useMemo(
                () =>
                    t.map((e) =>
                        (0, U.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [t],
            ),
            T = (0, M.Fk)({
                activeCategoryIndex: v,
                isScrolling: C,
                listRef: b,
                onActiveCategoryIndexChange: n.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: I,
            }),
            j = i.useCallback(
                (e) => {
                    (T(e),
                        F({
                            listRef: b,
                            searchQuery: I,
                            nitroLockedSectionStates: N,
                            scrollTop: e,
                            sectionHeaderHeight: x,
                            sectionFooterHeight: E,
                        }),
                        y?.(e));
                },
                [T, I, N, x, E, y],
            );
        return (
            i.useEffect(() => {
                null != b.current && j(b.current.getScrollerNode()?.scrollTop ?? 0);
            }, [j, b]),
            (0, M.FV)({ searchQuery: I, activeCategoryIndex: v, listRef: b }),
            i.useImperativeHandle(
                A,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => b.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => b.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, l.jsxs)("div", {
                className: W.i,
                children: [
                    I.length > 0 && !r && null != m
                        ? m()
                        : (0, l.jsx)(D.A, {
                              role: "none presentation",
                              listPadding: s,
                              onScroll: j,
                              renderRow: a,
                              renderSection: o,
                              renderSectionHeader: u,
                              renderSectionFooter: c,
                              rowCount: f,
                              rowCountBySection: p,
                              rowHeight: g,
                              sectionHeaderHeight: x,
                              sectionFooterHeight: E,
                              stickyHeaders: !0,
                              ref: b,
                          }),
                    S?.(),
                    h?.(),
                ],
            })
        );
    };
var K = n(462180),
    G = n(602034),
    H = n(683438),
    z = n(642232);
let q = function (e) {
    let {
            store: t,
            hasSendableExpressions: n,
            onKeyDown: r,
            gridNavigatorId: s,
            expressionsListRef: a,
            defaultSearchPlaceholder: o,
            emptySearchPlaceholder: u,
            ref: c,
        } = e,
        h = i.useRef(null),
        [m, f] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], K.x),
        p = t.useStore((e) => e.searchPlaceholder),
        [g, x] = t.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], K.x),
        E = i.useCallback(
            (e) => {
                (t.setActiveCategoryIndex("" === e ? 0 : L.Uk),
                    t.setInspectedExpressionPosition(0, 0),
                    t.setSearchPlaceholder(null),
                    (0, d.Ri)(e),
                    a.current?.scrollTo(0));
            },
            [a, t],
        ),
        S = i.useCallback(() => {
            E("");
        }, [E]);
    return (
        i.useImperativeHandle(c, () => ({ focus: () => h.current?.focus() })),
        i.useLayoutEffect(() => {
            f && h.current?.focus();
        }, [f]),
        (0, l.jsx)("div", {
            className: z.i,
            children: (0, l.jsx)(H.I, {
                autoFocus: n,
                disabled: !n,
                query: m,
                ref: h,
                placeholder: null != p ? p : n || null == u ? o : u,
                onClear: S,
                onKeyDown: r,
                onChange: E,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": s,
                    "aria-expanded": !0,
                    ...(x ? { "aria-activedescendant": (0, G.Aq)(s, g.columnIndex, g.rowIndex) } : void 0),
                },
            }),
        })
    );
};
var $ = n(904289);
function Q(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: r,
            store: s,
            onSelectItem: a,
            onSearchExpressions: o,
            onScroll: u,
            hasSearchResults: c,
            defaultSearchPlaceholder: h,
            emptySearchPlaceholder: m,
            renderEmptyState: f,
            renderRow: p,
            renderSection: g,
            renderSectionHeader: x,
            renderSectionFooter: E,
            renderInspector: S,
            renderEmptySearchState: y,
            renderCategoryList: A,
            renderHeaderAccessories: C,
            rowHeight: b,
            sectionHeaderHeight: I,
            sectionFooterHeight: v,
            itemNodeWidth: N,
            listPaddingRight: T,
            itemNodeMargin: j,
            listPadding: _,
            gridNavigatorId: k,
            gridNotice: R,
            renderHeader: O,
            renderUpsell: w,
        } = e,
        L = i.useRef(null),
        P = i.useRef(null),
        D = i.useRef(null),
        U = 0 === t.length,
        V = (0, d.RQ)((e) => e.searchQuery),
        W = s.useStore((e) => e.inspectedExpressionPosition),
        F = (0, M.oV)({ gridWrapperRef: L, containerWidth: r, showingEmptyState: U }),
        {
            expressionsGrid: K,
            rowCount: G,
            rowCountBySection: H,
            columnCounts: z,
            gutterWidth: Q,
        } = (0, M.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: F,
            listPaddingRight: T,
            itemNodeWidth: N,
            itemNodeMargin: j,
        }),
        {
            getItemProps: Z,
            getRowProps: X,
            gridContainerProps: J,
            handleGridContainerKeyDown: Y,
            isUsingKeyboardNavigation: ee,
        } = (0, M.JZ)({
            columnCounts: z,
            expressionsListRef: P,
            expressionsGrid: K,
            onSelectItem: a,
            store: s,
            gridNavigatorId: k,
        }),
        et = i.useCallback(
            (e, t) =>
                p(
                    K[e],
                    X(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: Q,
                        rowIndex: e,
                        totalRowCount: G,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => Z(e, t),
                    (t) => s.setInspectedExpressionPosition(t, e),
                ),
            [K, Z, X, Q, ee, p, s, G],
        ),
        en = i.useCallback((e) => x?.(t[e], e), [t, x]),
        el = i.useCallback((e) => E?.(t[e], e), [t, E]),
        ei = i.useCallback(() => S?.(K?.[W.rowIndex]?.[W.columnIndex]), [K, W.columnIndex, W.rowIndex, S]);
    (i.useEffect(() => {
        o(V);
    }, [o, V]),
        i.useEffect(() => {
            s.setBottomPosition(L.current?.getBoundingClientRect().bottom ?? null);
        }),
        i.useEffect(() => s.resetStoreState, [s.resetStoreState]),
        i.useLayoutEffect(() => {
            D.current?.focus();
        }, []));
    let er = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(q, {
                ref: D,
                store: s,
                hasSendableExpressions: !0,
                onKeyDown: Y,
                expressionsListRef: P,
                gridNavigatorId: k,
                defaultSearchPlaceholder: h,
                emptySearchPlaceholder: m,
            }),
            C?.(),
        ],
    });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != O ? O(er) : (0, l.jsxs)("div", { className: $.wx, children: [" ", er, " "] }),
            U && null != f
                ? f($.p$)
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          A(P),
                          null != R && (0, l.jsx)("div", { className: $.Eb, children: R }),
                          (0, l.jsx)("div", {
                              ref: L,
                              className: $.AD,
                              id: k,
                              ...J,
                              children:
                                  null != F
                                      ? (0, l.jsx)(B, {
                                            categories: t,
                                            ref: P,
                                            store: s,
                                            hasSearchResults: c,
                                            listPadding: _,
                                            renderRow: et,
                                            renderSection: g,
                                            renderSectionHeader: null != x ? en : void 0,
                                            renderSectionFooter: null != E ? el : void 0,
                                            renderInspector: null != S ? ei : void 0,
                                            renderEmptySearchState: y,
                                            rowCount: G,
                                            rowCountBySection: H,
                                            rowHeight: b,
                                            sectionHeaderHeight: I,
                                            sectionFooterHeight: v,
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
var Z = n(89366),
    X = n(319993),
    J = n(202639),
    Y = n(414872),
    ee = n(285373),
    et = n(609178),
    en = n(253932),
    el = n(763827),
    ei = n(287809),
    er = n(977997),
    es = n(147925),
    ea = n(174459),
    eo = n(807348),
    eu = n(813564),
    ec = n(147472);
n(321073);
var ed = n(964486),
    eh = n(931991),
    em = n(734057),
    ef = n(71393),
    ep = n(576705),
    eg = n(309010),
    ex = n(473145),
    eE = n(636537),
    eS = n(73153),
    ey = n(463347),
    eA = n(125831),
    eC = n(652215),
    eb = n(805143),
    eI = n(194567),
    ev = n(980504),
    eN = n(202541);
function eT(e, t) {
    return (null != t && (e = t(e)), e.map((e, t) => ({ type: eo.uq.SOUND, sound: e, index: t })));
}
function ej(e) {
    let { sections: t, guildIds: n, allSounds: l, potentialSoundIdsForSection: i, sectionType: r, sortSoundsFn: s } = e,
        a = {};
    for (let e of [...n, "0"])
        for (let t of l.get(e) ?? []) null != i.find((e) => e === t.soundId) && (a[t.soundId] = t);
    let o = [];
    for (let e of i) {
        let t = a[e];
        null != t && o.push(t);
    }
    let u = eT(o, s);
    u.length > 0 && t.push({ key: r, categoryInfo: { type: r }, items: u });
}
function e_(e, t) {
    let n = t.get("0") ?? ev.pD;
    e.push({ key: eo.Cx.DEFAULTS, categoryInfo: { type: eo.Cx.DEFAULTS }, items: eT(n, eI.U9) });
}
var ek = n(340368),
    eR = n(837381),
    eO = n(866665),
    ew = n(713517),
    eL = n(88218),
    eM = n(407698),
    eP = n(941971),
    eD = n(698279),
    eU = n(105292),
    eV = n(120052);
let eW = [8, 8, 8, 8],
    eF = "soundboard_guild_",
    { itemIdForIndex: eB } = (0, eL.J)(eF);
function eK(e) {
    let { children: t, className: n, isSelected: r, listItemProps: s, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, ew.A)(o);
    return (0, l.jsxs)(I.D, {
        innerRef: o,
        ...s,
        className: n,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: eV.a$,
                children: (0, l.jsx)(eP.A, { hovered: u, selected: r, size: "small" }),
            }),
            t,
        ],
    });
}
function eG(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: r } = e;
    return (0, l.jsx)(eK, {
        className: s()(eV.Yl, { [eV.wH]: n }),
        isSelected: n,
        listItemProps: r,
        onClick: i,
        children: (0, l.jsx)(t, { className: eV.xi, color: "currentColor" }),
    });
}
function eH(e, t, n, i, r) {
    switch (e.categoryInfo.type) {
        case eo.Cx.FAVORITES:
            return (0, l.jsx)(eG, { icon: S.StarIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eo.Cx.FREQUENTLY_USED:
            return (0, l.jsx)(eG, { icon: y.ClockIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eo.Cx.GUILD:
            return (0, l.jsx)(
                eK,
                {
                    className: eV.L1,
                    isSelected: n,
                    listItemProps: i,
                    onClick: t,
                    children: (0, l.jsx)(w.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: r }),
                },
                e.key,
            );
        case eo.Cx.DEFAULTS:
            return (0, l.jsx)(eG, { icon: A.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eo.Cx.TOP_SOUNDS:
            return (0, l.jsx)(eG, { icon: b.TrophyIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function ez(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: r, isNitroLocked: s } = e,
        a = (0, eR.rm)(eB(n));
    return t.categoryInfo.type === eo.Cx.GUILD
        ? (0, l.jsx)(eM.Q, { guild: t.categoryInfo.guild, children: eH(t, i, r, a, s) })
        : (0, l.jsx)(eO.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case eo.Cx.FAVORITES:
                          return eU.intl.string(eU.t.k8fFjp);
                      case eo.Cx.FREQUENTLY_USED:
                          return eU.intl.string(eU.t["+cGVV6"]);
                      case eo.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case eo.Cx.DEFAULTS:
                          return eU.intl.string(eU.t.Rtvk9X);
                      case eo.Cx.TOP_SOUNDS:
                          return eU.intl.formatToPlainString(eU.t.GXs41w, { guildName: e.categoryInfo.guild.name });
                  }
              })(t),
              position: "right",
              align: "center",
              children: eH(t, i, r, a, s),
          });
}
function eq(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: r,
            listPadding: a = eW,
            guildId: o,
            inExpressionPicker: u,
        } = e,
        c = i.useRef(null),
        d = (0, E.bG)([ei.default], () => ei.default.getCurrentUser()),
        h = (0, U.TW)(d, eN.PremiumTypes.TIER_2),
        m = i.useCallback(
            (e, t, n, i) => {
                let s = r && e$(e.categoryInfo, h, o);
                return (0, l.jsx)(ez, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        (ea.default.track(eC.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eC.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eD.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n());
                    },
                    isSelected: i,
                    isNitroLocked: s,
                });
            },
            [o, r, h],
        );
    return (0, l.jsx)(eL.A, {
        className: s()(u ? eV.HZ : eV.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: L.LW,
        categories: n,
        listPadding: a,
        renderCategoryListItem: m,
        rowCount: n.length,
        categoryHeight: 40,
        navId: "soundboard-picker-categories",
        itemIdPrefix: eF,
    });
}
function e$(e, t, n) {
    return (null == n && e.type === eo.Cx.GUILD && !t) || (e.type === eo.Cx.GUILD && e.guild.id !== n && !t);
}
var eQ = n(554146),
    eZ = n(191023),
    eX = n(192308),
    eJ = n(28863),
    eY = n(695366),
    e0 = n(834730),
    e1 = n(789645),
    e2 = n(565645),
    e5 = n(775602),
    e3 = n(826673),
    e6 = n(182922),
    e8 = n(532624),
    e7 = n(531685),
    e4 = n(723702),
    e9 = n(350535),
    te = n(115023);
function tt(e) {
    let { soundboardSound: t, closePicker: i } = e,
        r = (0, d.RQ)((e) => e.searchQuery),
        s = (0, m.bG)([g.A], () => null != t && g.A.isFavoriteSound(t.soundId)),
        a = (0, m.bG)([ef.A], () => ef.A.getGuild(t?.guildId)),
        o = (0, m.bG)([e5.Ay], () => e5.Ay.useReducedMotion, []),
        u = (0, m.bG)([e7.A], () => e7.A.isFocused()),
        c = (0, m.bG)([e8.Ay], () => e8.Ay.getKeybindForAction(eC.hCu.SOUNDBOARD_HOLD));
    if (null != t && r.length > 0)
        return (0, l.jsx)(e6.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(e2.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: te.Zg })
                    : (0, l.jsx)(eZ.ImageIcon, { size: "md", color: "currentColor", className: te.Zg }),
            graphicSecondary: null != a ? (0, l.jsx)(w.A, { guild: a, shouldAnimate: !o && u }) : null,
            titlePrimary: t.name,
            titleSecondary: a?.name,
            isFavorite: s,
        });
    function h() {
        (i(),
            (0, eX.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("161411"),
                    n.e("498640"),
                    n.e("846327"),
                    n.e("912618"),
                ]).then(n.bind(n, 29681));
                return (t) => (0, l.jsx)(e, { ...t });
            }));
    }
    let f = (0, e3.k8)(eQ.M.SOUNDBOARD_KEYBIND_TIP),
        p =
            null != c && (0, e4.isWindows)() && !f
                ? eU.intl.format(eU.t.udMTth, {
                      keybind: (0, e9.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(eJ.Anchor, { onClick: h, children: e }, t),
                  })
                : null;
    return null == p
        ? null
        : (0, l.jsxs)("div", {
              className: te.g,
              children: [
                  (0, l.jsx)(eY.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: te.QW }),
                  (0, l.jsx)(e0.E, { variant: "text-sm/medium", color: "text-default", className: te.L5, children: p }),
                  (0, l.jsx)(I.D, {
                      className: te.b,
                      onClick: function () {
                          return (0, e3.Dr)(eQ.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, l.jsx)(e1.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var tn = n(805945),
    tl = n(890856),
    ti = n(307301),
    tr = n(468689);
function ts(e) {
    (tr.A.open(e, eC.BEX.SOUNDBOARD),
        (0, eX.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("860350"),
                n.e("207998"),
                n.e("699733"),
                n.e("401295"),
                n.e("775417"),
                n.e("67491"),
                n.e("308555"),
                n.e("883952"),
                n.e("220287"),
                n.e("66580"),
                n.e("808979"),
                n.e("420643"),
                n.e("974049"),
                n.e("280559"),
                n.e("669006"),
                n.e("98913"),
                n.e("612811"),
            ]).then(n.bind(n, 191110));
            return (n) => (0, l.jsx)(t, { ...n, guildId: e });
        }));
}
var ta = n(948611),
    to = n(308078);
function tu(e) {
    let { guild: t, focused: n, onSelectItem: i, ...r } = e,
        { canCreateExpressions: a } = (0, eh.nr)(t);
    return (0, l.jsx)(eO.m, {
        text: eU.intl.string(eU.t["fHo+z1"]),
        shouldShow: !a,
        children: (0, l.jsx)("li", {
            className: ta.H,
            children: (0, l.jsxs)(tl.s, {
                ...r,
                "aria-label": eU.intl.formatToPlainString(eU.t.c1qVYh, { guildName: t.name }),
                className: s()(to.n4, { [to.in]: n, [to.r9]: !a }),
                onClick: () => (null != i ? i() : ts(t.id)),
                children: [
                    (0, l.jsx)(ti.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(e0.E, {
                        variant: "text-xs/semibold",
                        color: a ? "currentColor" : "text-muted",
                        children: eU.intl.string(eU.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function tc(e) {
    let {
            descriptor: t,
            soundButtonProps: n,
            rowIndex: l,
            columnIndex: r,
            isUsingKeyboardNavigation: s,
            suppressPlaySound: a,
            getItemProps: o,
            onSelectItem: u,
            onItemMouseEnter: c,
            buttonOverlay: d,
            isNitroLocked: h,
            showLockForDisabledSound: m,
            inExpressionPicker: f,
        } = e,
        p = L.LW.useStore((e) => e.inspectedExpressionPosition),
        g = `${l}-${r}`,
        x = s && p.rowIndex === l && p.columnIndex === r;
    switch (t.item.type) {
        case eo.uq.SOUND:
            return (0, i.createElement)(tn.Ay, {
                ...o(r),
                ...n,
                key: g,
                sound: t.item.sound,
                suppressPlaySound: a,
                focused: x,
                onMouseEnter: () => c(r),
                onSelectItem: (e) => u(t, e),
                enableSecondaryActions: !0,
                buttonOverlay: d,
                inNitroLockedSection: h,
                showLockForDisabledSound: m,
                isSoundmoji: !0 === f,
            });
        case eo.uq.ADD_SOUND:
            return (0, i.createElement)(tu, {
                ...o(r),
                key: g,
                guild: t.item.guild,
                focused: x,
                onSelectItem: () => u(t),
            });
    }
}
var td = n(635799);
let th = 32 + Y.kg - 8,
    tm = {
        [eo.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [eo.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [eo.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [eo.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
        [eo.Cx.FREQUENTLY_USED]: u.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
        [eo.Cx.TOP_SOUNDS]: u.A.SOUNDBOARD_TOP_SOUNDS_SECTION,
    };
function tf(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, isSectionNitroLocked: r, showNitroDivider: a } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a && (0, l.jsx)(Y.Ay, { className: td.yH }),
            (0, l.jsx)("div", {
                className: s()(td.hd, { [td.Jb]: r, [td.VD]: r }),
                children: (0, l.jsx)(I.D, {
                    className: td.bV,
                    onClick: i,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: td.M2,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case eo.Cx.FAVORITES:
                                        return (0, l.jsx)(S.StarIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: td.nr,
                                        });
                                    case eo.Cx.FREQUENTLY_USED:
                                        return (0, l.jsx)(y.ClockIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: td.nr,
                                        });
                                    case eo.Cx.GUILD:
                                        return (0, l.jsx)(w.A, { guild: t.guild, height: 16, width: 16 });
                                    case eo.Cx.DEFAULTS:
                                        return (0, l.jsx)(A.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: td.nr,
                                        });
                                    case eo.Cx.SEARCH:
                                        return (0, l.jsx)(C.MagnifyingGlassIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: td.nr,
                                        });
                                    case eo.Cx.TOP_SOUNDS:
                                        return (0, l.jsx)(b.TrophyIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: td.nr,
                                        });
                                }
                            })(),
                            (0, l.jsx)(v.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: td.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case eo.Cx.FAVORITES:
                                            return eU.intl.string(eU.t.k8fFjp);
                                        case eo.Cx.FREQUENTLY_USED:
                                            return eU.intl.string(eU.t["+cGVV6"]);
                                        case eo.Cx.GUILD:
                                            return t.guild.name;
                                        case eo.Cx.DEFAULTS:
                                            return eU.intl.string(eU.t.Rtvk9X);
                                        case eo.Cx.SEARCH:
                                            return eU.intl.string(eU.t["zkoeq/"]);
                                        case eo.Cx.TOP_SOUNDS:
                                            return eU.intl.formatToPlainString(eU.t.GXs41w, {
                                                guildName: t.guild.name,
                                            });
                                    }
                                })(),
                            }),
                            (0, l.jsx)(es.A, {
                                className: td.nr,
                                direction: n ? es.A.Directions.RIGHT : es.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function tp() {
    return (0, l.jsx)(_.A, { message: eU.intl.string(eU.t.bgDdNK) });
}
function tg(e) {
    let { className: t } = e,
        n = (0, E.bG)([g.A], () => g.A.isSoundboardVolumeMuted()) ? N._ : T.H;
    return (0, l.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function tx(e) {
    let {
            guildId: t,
            channel: r,
            containerWidth: a,
            onClose: o,
            onSelect: h,
            shouldValidateSelectedSound: m = !1,
            suppressPlaySound: f = !1,
            shouldShowLockedSounds: p = !0,
            gridNotice: S,
            soundButtonOverlay: y,
            listPadding: A,
            renderHeader: C,
            defaultSoundsOnly: b = !1,
            inExpressionPicker: v,
            analyticsSource: N,
        } = e,
        { analyticsLocations: _ } = (0, c.Ay)(),
        { analyticsLocations: w } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: M } = (0, k.p)(),
        P = i.useMemo(() => ({ ...M, section: eC.JJy.SOUNDBOARD_SOUND_PICKER }), [M]),
        [D, V] = i.useState(null),
        W = (0, E.bG)([ei.default], () => ei.default.getCurrentUser()),
        F = (0, U.TW)(W, eN.PremiumTypes.TIER_2),
        B = (0, E.bG)([er.A], () => er.A.getVoiceState(t, W?.id ?? eC.dJq)),
        K = B?.selfDeaf || B?.mute || B?.suppress,
        G = (0, d.RQ)((e) => e.searchQuery),
        H = null != G && "" !== G,
        z = (0, O.GV)(),
        {
            categories: q,
            availableSounds: $,
            soundCounts: Y,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = (0, E.bG)([ei.default], () => ei.default.getCurrentUser()),
                r = U.Ay.isPremium(l, eN.PremiumTypes.TIER_2),
                [s, a, o, u] = (0, E.yK)([g.A], () => [
                    g.A.getSounds(),
                    g.A.getFavorites(),
                    g.A.getFrequentlyUsedSoundIds(),
                    g.A.isFetching(),
                ]),
                c = (0, eI.IJ)(),
                d = (0, eb.Y)(e, !1),
                h = (0, E.yK)([ef.A], () => {
                    let e = [];
                    return (
                        d.forEach((t) => {
                            let n = ef.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                m = U.Ay.canUseSoundboardEverywhere(l),
                f = (0, E.bG)([ef.A], () => ef.A.getGuild(e?.guild_id)),
                p = (0, E.bG)(
                    [ep.A],
                    () => {
                        let { canCreateExpressions: e } = (0, eh.ie)(f);
                        return e;
                    },
                    [f],
                ),
                x = i.useMemo(() => o.filter((e) => !a.has(e)).slice(0, 3), [o, a]),
                S = (0, E.bG)([eg.Ay, em.A, ef.A], () => {
                    let e = eg.Ay.getVoiceChannelId(),
                        t = null != e ? em.A.getChannel(e) : null;
                    return t?.guild_id != null ? ef.A.getGuild(t.guild_id) : void 0;
                });
            (0, ed.Ay)(() => {
                !(function (e) {
                    var t;
                    if (null == e || null == ei.default.getCurrentUser()) return;
                    let n = g.A.getTopSoundboardSoundsMetadata(e);
                    if (null != n) {
                        let { topSoundsTTL: e } = n;
                        if (null == e || Date.now() < e) return;
                    }
                    eA.A.getIsFetching(e) ||
                        ((t = e),
                        (0, ey.tZ)(t) ||
                            (eS.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: t }),
                            eE.Bo.get({
                                url: eC.Rsh.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(t),
                                oldFormErrors: !0,
                                rejectWithError: !0,
                            }).then(
                                (e) =>
                                    eS.h.dispatch({
                                        type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS",
                                        guildId: t,
                                        topSoundsMetadata: e.body.items
                                            .map((e) => ({ soundId: e.sound_id, rank: e.sound_rank }))
                                            .sort((e, t) => e.rank - t.rank),
                                    }),
                                () => eS.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId: t }),
                            )));
                })(S?.id);
            });
            let y = (0, E.yK)([g.A], () => g.A.getTopSoundboardSoundIds(S?.id)),
                A = i.useMemo(() => y.slice(0, 3), [y]);
            return i.useMemo(() => {
                let e = 0,
                    l = 0,
                    i = [];
                return n
                    ? (e_(i, s),
                      {
                          categories: i,
                          availableSounds: s.get("0") ?? ev.pD,
                          isFetching: u,
                          soundCounts: {
                              favoriteSoundCount: 0,
                              unlockedCustomSoundCount: 0,
                              lockedCustomSoundCount: 0,
                          },
                      })
                    : (null != S &&
                          (function (e, t, n) {
                              let { allSounds: l, topSoundIds: i } = n,
                                  r = {};
                              for (let e of l.get(t.id) ?? []) r[e.soundId] = e;
                              let s = [];
                              for (let e of i) {
                                  let t = r[e];
                                  null != t && s.push(t);
                              }
                              0 !== s.length &&
                                  e.push({
                                      key: eo.Cx.TOP_SOUNDS,
                                      categoryInfo: { type: eo.Cx.TOP_SOUNDS, guild: t },
                                      items: eT(s),
                                  });
                          })(i, S, { allSounds: s, topSoundIds: A }),
                      ej({
                          sections: i,
                          guildIds: d,
                          allSounds: s,
                          potentialSoundIdsForSection: Array.from(a),
                          sectionType: eo.Cx.FAVORITES,
                          sortSoundsFn: eI.XP,
                      }),
                      x.length > 0 &&
                          ej({
                              sections: i,
                              guildIds: d,
                              allSounds: s,
                              potentialSoundIdsForSection: x,
                              sectionType: eo.Cx.FREQUENTLY_USED,
                          }),
                      void 0 !== f &&
                          (function (e, t, n) {
                              let {
                                      currentGuildHasAddPermissions: l,
                                      allSounds: i,
                                      filterOutEmptyCurrentGuild: r,
                                      sortSoundsFn: s,
                                  } = n,
                                  a = i.get(t.id) ?? [],
                                  o = eT(a, s),
                                  u = a.length < (0, ex.fA)(t) && l,
                                  c = 0 === o.length;
                              ((u || c) && !r && o.push({ type: eo.uq.ADD_SOUND, guild: t }),
                                  (r && c) ||
                                      e.push({
                                          categoryInfo: { type: eo.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: o,
                                      }));
                          })(i, f, {
                              currentGuildHasAddPermissions: p,
                              allSounds: s,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: c,
                          }),
                      m || e_(i, s),
                      !(function (e) {
                          let {
                              sections: t,
                              guilds: n,
                              currentGuildId: l,
                              allSounds: i,
                              hasNitro: r,
                              sortSoundsFn: s,
                          } = e;
                          for (let e of n) {
                              if (e.id === l) continue;
                              let n = eT(i.get(e.id) ?? [], s);
                              n.length > 0 &&
                                  t.push({
                                      categoryInfo: { type: eo.Cx.GUILD, guild: e, isNitroLocked: !r },
                                      key: e.id,
                                      items: n,
                                  });
                          }
                      })({ sections: i, guilds: h, currentGuildId: f?.id, allSounds: s, hasNitro: r, sortSoundsFn: c }),
                      m && e_(i, s),
                      i.forEach((t) => {
                          t.categoryInfo.type === eo.Cx.GUILD &&
                              (t.categoryInfo.isNitroLocked ? (l += t.items.length) : (e += t.items.length));
                      }),
                      {
                          categories: i,
                          availableSounds: Array.from(s.values()).flat(),
                          isFetching: u,
                          soundCounts: {
                              favoriteSoundCount: a.size,
                              unlockedCustomSoundCount: e,
                              lockedCustomSoundCount: l,
                          },
                      });
            }, [d, s, a, !0, f, p, t, m, h, n, u, r, c, x, S, A]);
        })(r, void 0, b),
        [es, eR] = i.useState([]),
        eO = i.useMemo(
            () => (G.length > 0 ? [{ key: eo.Cx.SEARCH, categoryInfo: { type: eo.Cx.SEARCH }, items: eT(es) }] : q),
            [q, G.length, es],
        ),
        ew = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eL = i.useMemo(() => eO.filter((e) => e.items.length > 0), [eO]),
        eM = i.useMemo(
            () => eL.findLastIndex((e) => !!(0, U.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eL],
        ),
        eP = !F && p && -1 !== eM,
        eV = !F && p && -1 !== eM,
        eW = en.b0.useSetting(),
        eF = i.useMemo(() => new Set(eW), [eW]),
        eB = null == r,
        eK = U.Ay.canUseCustomCallSounds(W),
        eG = i.useCallback(
            (e) => {
                (eF.has(e) ? eF.delete(e) : eF.add(e), en.b0.updateSetting(Array.from(eF)));
            },
            [eF],
        ),
        eH = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, eu.Ir)(W, e, r, !1);
                if (null != h && m && i) h(e, n);
                else if (!f && i && (0, eu.Au)(r))
                    ((0, eu.Ak)(e, r?.id ?? eC.dJq, t, l),
                        H &&
                            ea.default.track(eC.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eC.I4_.SOUNDBOARD,
                                channel_id: r?.id,
                                query: G,
                                location_stack: t,
                            }));
                else {
                    if ((0, eu.Ir)(W, e, r)) return;
                    p && V(e);
                }
            },
            [f, W, r, p, H, G, h, m],
        ),
        ez = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case eo.uq.SOUND:
                        let n = tm[e?.category] ?? null,
                            l = e?.item.index;
                        return eH(e.item.sound, null == n ? _ : [..._, n], t?.shiftKey !== !0, l);
                    case eo.uq.ADD_SOUND:
                        return (o(), ts(e.item.guild.id));
                }
            },
            [_, eH, o],
        ),
        eQ = i.useCallback(
            (e, n, i, a, o) => {
                let u = eL[i.sectionIndex],
                    c = p && e$(u.categoryInfo, F, t) && eP;
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        className: s()(td.a, { [td.uL]: c }),
                        children: e.map((e, t) => {
                            let n =
                                e.item.type === eo.uq.SOUND
                                    ? `sound-${e.item.sound.soundId}`
                                    : `add-sound-${e.item.guild.id}`;
                            return (0, l.jsx)(
                                tc,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: r,
                                        interactive: eB ? eK : !K,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: _,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: f,
                                    getItemProps: a,
                                    onSelectItem: ez,
                                    onItemMouseEnter: o,
                                    buttonOverlay: y,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: p,
                                    inExpressionPicker: v,
                                },
                                n,
                            );
                        }),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eL, p, F, t, f, ez, r, eB, eK, K, _, y, eP, v],
        ),
        eZ = i.useCallback(
            (e, t) => {
                if (e <= 0 || !p) return !1;
                let n = eL[e],
                    l = eL[e - 1],
                    i = e$(n.categoryInfo, F, t),
                    r = e$(l.categoryInfo, F, t);
                return i && !r;
            },
            [eL, p, F],
        ),
        eX = i.useCallback(() => {
            let e = g.A.getSoundById("3");
            null != e && V(e);
        }, []),
        eJ = i.useCallback(() => {
            let e = (0, U.Dd)(eN.PremiumTypes.TIER_2);
            return eU.intl.format(eU.t["tw/SSq"], { nitroTierName: e, onClick: eX });
        }, [eX]),
        eY = i.useCallback((e) => (eZ(e, t) ? th : 32), [t, eZ]),
        e0 = i.useCallback(
            (e) => {
                let t = e === eL.length - 1;
                return eV && t ? 70 : eP && e === eM ? 20 : 0;
            },
            [eL.length, eP, eV, eM],
        ),
        e1 = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
        e2 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    r = p && e$(e.categoryInfo, F, t),
                    s = eZ(n, t),
                    a = eF.has(i);
                return (0, l.jsx)(
                    tf,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            (ea.default.track(eC.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eC.liQ.SOUNDBOARD_POPOUT },
                                tab: eD.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !a,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eG(i));
                        },
                        collapsed: a,
                        isSectionNitroLocked: r && eP,
                        showNitroDivider: s && eP,
                    },
                    `header-${i}`,
                );
            },
            [eF, eG, t, eZ, p, F, eP],
        ),
        e5 = i.useCallback(
            (e, t) => {
                let n = t === eL.length - 1,
                    i = t === eM;
                return eV && n
                    ? (0, l.jsx)("div", { className: s()(td.Lk, { [td.Ns]: i }) })
                    : eP && t === eM
                      ? (0, l.jsx)("div", { className: s()(td.a3, { [td.Ns]: i }) })
                      : null;
            },
            [eM, eP, eV, eL.length],
        ),
        e3 = i.useCallback((e) => eR((0, ec.lG)(e, $, W, r, _)), [r, W, $, _]),
        e6 = i.useCallback(
            (e) => {
                (0, j.L3)(e, async () => {
                    let { default: e } = await n.e("811562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: _, ...t });
                });
            },
            [_],
        ),
        e8 = (0, ek._)("SoundboardSoundGrid"),
        e7 = i.useCallback(
            () =>
                v
                    ? (0, l.jsx)(X.Gq, {
                          renderPopout: () => (0, l.jsx)(X.qn, {}),
                          tooltipText: eU.intl.string(eU.t["19lt24"]),
                          position: "top",
                          clickableClassName: s()(td.Jm, td.Zz),
                          children: (0, l.jsx)(T.H, { size: "md", color: "currentColor", className: td.By }),
                      })
                    : (0, l.jsx)(I.D, {
                          tabIndex: 0,
                          className: td.Jm,
                          onClick: e6,
                          "aria-label": e8 ? eU.intl.string(eU.t.wQKOBb) : eU.intl.string(eU.t.kbFsAD),
                          children: (0, l.jsx)(tg, { className: td.By }),
                      }),
            [v, e6, e8],
        ),
        e4 = i.useCallback(
            (e) =>
                (0, l.jsx)(eq, {
                    soundboardListRef: e,
                    categories: q,
                    shouldUpsellLockedCategories: eP,
                    listPadding: A,
                    guildId: t,
                    inExpressionPicker: v,
                }),
            [q, A, eP, t, v],
        ),
        e9 = i.useCallback(() => {
            let e = (0, Z.qD)();
            return (0, U.LE)(e, eN.pe.TIER_2) ?? eU.intl.string(eU.t.pj0XBN);
        }, []);
    i.useEffect(() => {
        eV &&
            ew &&
            ea.default.track(eC.HAw.PREMIUM_UPSELL_VIEWED, {
                type: eN.e.SOUNDBOARD_PICKER_FLOATING_UPSELL,
                location: P,
                location_stack: w,
                sku_id: U.Ay.getSkuIdForPremiumType(eN.PremiumTypes.TIER_2),
                voice_guild_id: el.A.getGuildId() ?? null,
            });
    }, [P, w, eV, ew]);
    let te = i.useCallback(
            () =>
                eV
                    ? (0, l.jsx)(J.d, {
                          showUpsell: ew,
                          text: eJ(),
                          button: e9(),
                          buttonAnalyticsObject: { section: eC.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, l.jsx)(ee.l, {
                              size: "sm",
                              className: td.ij,
                              location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                              forceDarkTheme: !0,
                          }),
                      })
                    : null,
            [eJ, e9, eV, ew],
        ),
        tn = i.useCallback(
            (e) =>
                e?.item.type === eo.uq.SOUND
                    ? (0, l.jsx)(tt, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        tl = (0, E.bG)([el.A], () => el.A.getMediaSessionId());
    return (
        (0, R.A)({
            type: x.ImpressionTypes.POPOUT,
            name: x.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: N,
                guild_id: t,
                media_session_id: tl,
                available_custom_sounds_count: Y.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: Y.lockedCustomSoundCount,
                favorite_sounds_count: Y.favoriteSoundCount,
                type: ev.c4.FULL_PICKER,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != D
                    ? (0, l.jsx)(et.A, {
                          title: eU.intl.string(v ? eU.t.rZEEvU : eU.t.jGDYF0),
                          description: eU.intl.string(v ? eU.t.ZPNG5A : eU.t["grL/hg"]),
                          analyticsLocationSection: eC.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eN.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...P, object: eC.ZSU.SOUNDBOARD_SOUND },
                              location_stack: w,
                              sku_id: U.Ay.getSkuIdForPremiumType(eN.PremiumTypes.TIER_2),
                              voice_guild_id: el.A.getGuildId(),
                          },
                          onClose: () => V(null),
                          onUpsellClicked: o,
                      })
                    : void 0,
                (0, l.jsx)(Q, {
                    categories: eL,
                    collapsedCategories: eF,
                    containerWidth: a,
                    store: L.LW,
                    onSelectItem: ez,
                    onSearchExpressions: e3,
                    hasSearchResults: es.length > 0,
                    defaultSearchPlaceholder: eU.intl.string(eU.t.sKt3xS),
                    renderRow: eQ,
                    renderSectionHeader: e2,
                    renderSectionFooter: e5,
                    renderSection: e1,
                    renderCategoryList: e4,
                    renderHeaderAccessories: e7,
                    rowHeight: 48,
                    sectionHeaderHeight: eY,
                    sectionFooterHeight: e0,
                    itemNodeWidth: 150,
                    gridNavigatorId: z,
                    renderEmptySearchState: tp,
                    renderInspector: tn,
                    gridNotice: S,
                    renderHeader: C,
                    renderUpsell: te,
                }),
            ],
        })
    );
}
var tE = n(70317);
function tS(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: r,
            onClose: x,
            onSelect: E,
            analyticsSource: S,
            suppressPlaySound: y,
            shouldValidateSelectedSound: A,
            shouldShowLockedSounds: C = !0,
            gridNotice: b,
            inExpressionPicker: I,
            soundButtonOverlay: v,
            listPadding: N,
            renderHeader: T,
            defaultSoundsOnly: j,
            showEchoes: _ = !1,
        } = e,
        { fetching: k, maybeFetchData: R } = {
            fetching: (0, m.bG)([g.A], () => g.A.isFetchingAnySounds()),
            maybeFetchData: i.useCallback(() => {
                (p.E7(), f.bW.loadIfNecessary());
            }, []),
        },
        { analyticsLocations: O } = (0, c.Ay)(u.A.SOUNDBOARD_POPOUT),
        w = I ? void 0 : { height: 520 };
    return (
        i.useEffect(() => {
            R();
        }, [R]),
        i.useEffect(() => {
            I || (0, d.Ri)("");
        }, [I]),
        (0, l.jsx)(c.f5, {
            value: O,
            children: (0, l.jsxs)(a.l, {
                style: w,
                className: s()(tE.Nz, { [tE.Bg]: k, [tE.yV]: I }),
                children: [
                    _ && null != t && n?.id != null ? (0, l.jsx)(h.A, { guildId: t, channelId: n.id }) : null,
                    k
                        ? (0, l.jsx)(o.y, {})
                        : (0, l.jsx)(tx, {
                              guildId: t,
                              channel: n,
                              onClose: x,
                              onSelect: E,
                              shouldValidateSelectedSound: A,
                              containerWidth: r,
                              suppressPlaySound: y,
                              shouldShowLockedSounds: C,
                              gridNotice: b,
                              soundButtonOverlay: v,
                              listPadding: N,
                              renderHeader: T,
                              defaultSoundsOnly: j,
                              inExpressionPicker: I,
                              analyticsSource: S,
                          }),
                ],
            }),
        })
    );
}
