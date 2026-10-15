n.d(t, { A: () => tb });
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
var x = n(675816),
    E = n(562708),
    S = n(17928),
    y = n(27232),
    C = n(406810),
    A = n(111159),
    I = n(7689),
    b = n(369606),
    v = n(939249),
    N = n(297264),
    T = n(358618),
    j = n(983851),
    _ = n(442433),
    k = n(537652),
    R = n(212245),
    O = n(139286),
    L = n(915089),
    w = n(724511),
    M = n(850992),
    P = n(887695),
    D = n(435558),
    U = n(962125),
    V = n(158045),
    W = n(240864),
    F = n(212633);
let B = (0, D.throttle)(
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
            let a = (0, W.s)({
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
    K = function (e) {
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
                ref: C,
            } = e,
            A = i.useRef(!1),
            I = i.useRef(null),
            b = (0, d.RQ)((e) => e.searchQuery),
            v = n.useStore((e) => e.activeCategoryIndex),
            N = i.useMemo(
                () =>
                    t.map((e) =>
                        (0, V.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [t],
            ),
            T = (0, P.Fk)({
                activeCategoryIndex: v,
                isScrolling: A,
                listRef: I,
                onActiveCategoryIndexChange: n.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: b,
            }),
            j = i.useCallback(
                (e) => {
                    (T(e),
                        B({
                            listRef: I,
                            searchQuery: b,
                            nitroLockedSectionStates: N,
                            scrollTop: e,
                            sectionHeaderHeight: x,
                            sectionFooterHeight: E,
                        }),
                        y?.(e));
                },
                [T, b, N, x, E, y],
            );
        return (
            i.useEffect(() => {
                null != I.current && j(I.current.getScrollerNode()?.scrollTop ?? 0);
            }, [j, I]),
            (0, P.FV)({ searchQuery: b, activeCategoryIndex: v, listRef: I }),
            i.useImperativeHandle(
                C,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return I.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => I.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => I.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return I.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return I.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return I.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return I.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return I.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, l.jsxs)("div", {
                className: F.i,
                children: [
                    b.length > 0 && !r && null != m
                        ? m()
                        : (0, l.jsx)(U.A, {
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
                              ref: I,
                          }),
                    S?.(),
                    h?.(),
                ],
            })
        );
    };
var G = n(462180),
    H = n(602034),
    z = n(683438),
    q = n(642232);
let $ = function (e) {
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
        [m, f] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], G.x),
        p = t.useStore((e) => e.searchPlaceholder),
        [g, x] = t.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], G.x),
        E = i.useCallback(
            (e) => {
                (t.setActiveCategoryIndex("" === e ? 0 : M.Uk),
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
            className: q.i,
            children: (0, l.jsx)(z.I, {
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
                    ...(x ? { "aria-activedescendant": (0, H.Aq)(s, g.columnIndex, g.rowIndex) } : void 0),
                },
            }),
        })
    );
};
var Q = n(904289);
function Z(e) {
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
            renderCategoryList: C,
            renderHeaderAccessories: A,
            rowHeight: I,
            sectionHeaderHeight: b,
            sectionFooterHeight: v,
            itemNodeWidth: N,
            listPaddingRight: T,
            itemNodeMargin: j,
            listPadding: _,
            gridNavigatorId: k,
            gridNotice: R,
            renderHeader: O,
            renderUpsell: L,
        } = e,
        w = i.useRef(null),
        M = i.useRef(null),
        D = i.useRef(null),
        U = 0 === t.length,
        V = (0, d.RQ)((e) => e.searchQuery),
        W = s.useStore((e) => e.inspectedExpressionPosition),
        F = (0, P.oV)({ gridWrapperRef: w, containerWidth: r, showingEmptyState: U }),
        {
            expressionsGrid: B,
            rowCount: G,
            rowCountBySection: H,
            columnCounts: z,
            gutterWidth: q,
        } = (0, P.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: F,
            listPaddingRight: T,
            itemNodeWidth: N,
            itemNodeMargin: j,
        }),
        {
            getItemProps: Z,
            getRowProps: J,
            gridContainerProps: X,
            handleGridContainerKeyDown: Y,
            isUsingKeyboardNavigation: ee,
        } = (0, P.JZ)({
            columnCounts: z,
            expressionsListRef: M,
            expressionsGrid: B,
            onSelectItem: a,
            store: s,
            gridNavigatorId: k,
        }),
        et = i.useCallback(
            (e, t) =>
                p(
                    B[e],
                    J(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: q,
                        rowIndex: e,
                        totalRowCount: G,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => Z(e, t),
                    (t) => s.setInspectedExpressionPosition(t, e),
                ),
            [B, Z, J, q, ee, p, s, G],
        ),
        en = i.useCallback((e) => x?.(t[e], e), [t, x]),
        el = i.useCallback((e) => E?.(t[e], e), [t, E]),
        ei = i.useCallback(() => S?.(B?.[W.rowIndex]?.[W.columnIndex]), [B, W.columnIndex, W.rowIndex, S]);
    (i.useEffect(() => {
        o(V);
    }, [o, V]),
        i.useEffect(() => {
            s.setBottomPosition(w.current?.getBoundingClientRect().bottom ?? null);
        }),
        i.useEffect(() => s.resetStoreState, [s.resetStoreState]),
        i.useLayoutEffect(() => {
            D.current?.focus();
        }, []));
    let er = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)($, {
                ref: D,
                store: s,
                hasSendableExpressions: !0,
                onKeyDown: Y,
                expressionsListRef: M,
                gridNavigatorId: k,
                defaultSearchPlaceholder: h,
                emptySearchPlaceholder: m,
            }),
            A?.(),
        ],
    });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != O ? O(er) : (0, l.jsxs)("div", { className: Q.wx, children: [" ", er, " "] }),
            U && null != f
                ? f(Q.p$)
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          C(M),
                          null != R && (0, l.jsx)("div", { className: Q.Eb, children: R }),
                          (0, l.jsx)("div", {
                              ref: w,
                              className: Q.AD,
                              id: k,
                              ...X,
                              children:
                                  null != F
                                      ? (0, l.jsx)(K, {
                                            categories: t,
                                            ref: M,
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
                                            rowHeight: I,
                                            sectionHeaderHeight: b,
                                            sectionFooterHeight: v,
                                            renderUpsell: L,
                                            onScroll: u,
                                        })
                                      : null,
                          }),
                      ],
                  }),
        ],
    });
}
var J = n(89366),
    X = n(319993),
    Y = n(202639),
    ee = n(414872),
    et = n(285373),
    en = n(609178),
    el = n(885386),
    ei = n(763827),
    er = n(287809),
    es = n(977997),
    ea = n(147925),
    eo = n(174459),
    eu = n(807348),
    ec = n(813564),
    ed = n(699840),
    eh = n(147472);
n(321073);
var em = n(964486),
    ef = n(931991),
    ep = n(734057),
    eg = n(71393),
    ex = n(576705),
    eE = n(309010),
    eS = n(473145),
    ey = n(636537),
    eC = n(73153),
    eA = n(463347),
    eI = n(125831),
    eb = n(652215),
    ev = n(805143),
    eN = n(194567),
    eT = n(980504),
    ej = n(202541);
function e_(e, t) {
    return (null != t && (e = t(e)), e.map((e, t) => ({ type: eu.uq.SOUND, sound: e, index: t })));
}
function ek(e) {
    let { sections: t, guildIds: n, allSounds: l, potentialSoundIdsForSection: i, sectionType: r, sortSoundsFn: s } = e,
        a = {};
    for (let e of [...n, "0"])
        for (let t of l.get(e) ?? []) null != i.find((e) => e === t.soundId) && (a[t.soundId] = t);
    let o = [];
    for (let e of i) {
        let t = a[e];
        null != t && o.push(t);
    }
    let u = e_(o, s);
    u.length > 0 && t.push({ key: r, categoryInfo: { type: r }, items: u });
}
function eR(e, t) {
    let n = t.get("0") ?? eT.pD;
    e.push({ key: eu.Cx.DEFAULTS, categoryInfo: { type: eu.Cx.DEFAULTS }, items: e_(n, eN.U9) });
}
var eO = n(554146),
    eL = n(43105),
    ew = n(131607),
    eM = n(49999),
    eP = n(105292);
function eD(e) {
    let { targetElementRef: t } = e,
        { allowReordering: n } = ed.q.useConfig({ location: "SoundboardFavoritesCoachmark" }),
        [i, r] = (0, ew.kn)(n ? [eO.M.SOUNDBOARD_FAVORITES_ORDERING_COACHMARK] : [], { bypassAutoDismiss: !0 });
    return i !== eO.M.SOUNDBOARD_FAVORITES_ORDERING_COACHMARK
        ? null
        : (0, l.jsx)(eL.A, {
              targetElementRef: t,
              onRequestClose: function (e) {
                  (("user:escape" === e || "user:explicit" === e) && r(eM.i.DISMISS), r(eM.i.AUTO_DISMISS));
              },
              title: eP.intl.string(eP.t.KFcQy8),
              body: eP.intl.string(eP.t["P/1x7s"]),
              badge: "beta",
          });
}
var eU = n(837381),
    eV = n(866665),
    eW = n(713517),
    eF = n(88218),
    eB = n(407698),
    eK = n(941971),
    eG = n(698279),
    eH = n(120052);
let ez = [8, 8, 8, 8],
    eq = "soundboard_guild_",
    { itemIdForIndex: e$ } = (0, eF.J)(eq);
function eQ(e) {
    let { children: t, className: n, isSelected: r, listItemProps: s, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, eW.A)(o);
    return (0, l.jsxs)(v.D, {
        innerRef: o,
        ...s,
        className: n,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: eH.a$,
                children: (0, l.jsx)(eK.A, { hovered: u, selected: r, size: "small" }),
            }),
            t,
        ],
    });
}
function eZ(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: r } = e;
    return (0, l.jsx)(eQ, {
        className: s()(eH.Yl, { [eH.wH]: n }),
        isSelected: n,
        listItemProps: r,
        onClick: i,
        children: (0, l.jsx)(t, { className: eH.xi, color: "currentColor" }),
    });
}
function eJ(e, t, n, i, r) {
    switch (e.categoryInfo.type) {
        case eu.Cx.FAVORITES:
            return (0, l.jsx)(eZ, { icon: y.StarIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eu.Cx.FREQUENTLY_USED:
            return (0, l.jsx)(eZ, { icon: C.ClockIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eu.Cx.GUILD:
            return (0, l.jsx)(
                eQ,
                {
                    className: eH.L1,
                    isSelected: n,
                    listItemProps: i,
                    onClick: t,
                    children: (0, l.jsx)(w.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: r }),
                },
                e.key,
            );
        case eu.Cx.DEFAULTS:
            return (0, l.jsx)(eZ, { icon: A.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eu.Cx.TOP_SOUNDS:
            return (0, l.jsx)(eZ, { icon: b.TrophyIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function eX(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: r, isNitroLocked: s } = e,
        a = (0, eU.rm)(e$(n));
    return t.categoryInfo.type === eu.Cx.GUILD
        ? (0, l.jsx)(eB.Q, { guild: t.categoryInfo.guild, children: eJ(t, i, r, a, s) })
        : (0, l.jsx)(eV.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case eu.Cx.FAVORITES:
                          return eP.intl.string(eP.t.k8fFjp);
                      case eu.Cx.FREQUENTLY_USED:
                          return eP.intl.string(eP.t["+cGVV6"]);
                      case eu.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case eu.Cx.DEFAULTS:
                          return eP.intl.string(eP.t.Rtvk9X);
                      case eu.Cx.TOP_SOUNDS:
                          return eP.intl.formatToPlainString(eP.t.GXs41w, { guildName: e.categoryInfo.guild.name });
                  }
              })(t),
              position: "right",
              align: "center",
              children: eJ(t, i, r, a, s),
          });
}
function eY(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: r,
            listPadding: a = ez,
            guildId: o,
            inExpressionPicker: u,
        } = e,
        c = i.useRef(null),
        d = (0, S.bG)([er.default], () => er.default.getCurrentUser()),
        h = (0, V.TW)(d, ej.PremiumTypes.TIER_2),
        m = i.useCallback(
            (e, t, n, i) => {
                let s = r && e0(e.categoryInfo, h, o);
                return (0, l.jsx)(eX, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        (eo.default.track(eb.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eb.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eG.kx.SOUNDBOARD,
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
    return (0, l.jsx)(eF.A, {
        className: s()(u ? eH.HZ : eH.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: M.LW,
        categories: n,
        listPadding: a,
        renderCategoryListItem: m,
        rowCount: n.length,
        categoryHeight: 40,
        navId: "soundboard-picker-categories",
        itemIdPrefix: eq,
    });
}
function e0(e, t, n) {
    return (null == n && e.type === eu.Cx.GUILD && !t) || (e.type === eu.Cx.GUILD && e.guild.id !== n && !t);
}
var e1 = n(191023),
    e2 = n(192308),
    e5 = n(28863),
    e6 = n(695366),
    e8 = n(834730),
    e3 = n(789645),
    e7 = n(565645),
    e4 = n(775602),
    e9 = n(826673),
    te = n(182922),
    tt = n(532624),
    tn = n(531685),
    tl = n(723702),
    ti = n(350535),
    tr = n(115023);
function ts(e) {
    let { soundboardSound: t, closePicker: i } = e,
        r = (0, d.RQ)((e) => e.searchQuery),
        s = (0, m.bG)([g.A], () => null != t && g.A.isFavoriteSound(t.soundId)),
        a = (0, m.bG)([eg.A], () => eg.A.getGuild(t?.guildId)),
        o = (0, m.bG)([e4.Ay], () => e4.Ay.useReducedMotion, []),
        u = (0, m.bG)([tn.A], () => tn.A.isFocused()),
        c = (0, m.bG)([tt.Ay], () => tt.Ay.getKeybindForAction(eb.hCu.SOUNDBOARD_HOLD));
    if (null != t && r.length > 0)
        return (0, l.jsx)(te.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(e7.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: tr.Zg })
                    : (0, l.jsx)(e1.ImageIcon, { size: "md", color: "currentColor", className: tr.Zg }),
            graphicSecondary: null != a ? (0, l.jsx)(w.A, { guild: a, shouldAnimate: !o && u }) : null,
            titlePrimary: t.name,
            titleSecondary: a?.name,
            isFavorite: s,
        });
    function h() {
        (i(),
            (0, e2.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("161411"),
                    n.e("498640"),
                    n.e("846327"),
                    n.e("912618"),
                ]).then(n.bind(n, 29681));
                return (t) => (0, l.jsx)(e, { ...t });
            }));
    }
    let f = (0, e9.k8)(eO.M.SOUNDBOARD_KEYBIND_TIP),
        p =
            null != c && (0, tl.isWindows)() && !f
                ? eP.intl.format(eP.t.udMTth, {
                      keybind: (0, ti.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(e5.Anchor, { onClick: h, children: e }, t),
                  })
                : null;
    return null == p
        ? null
        : (0, l.jsxs)("div", {
              className: tr.g,
              children: [
                  (0, l.jsx)(e6.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: tr.QW }),
                  (0, l.jsx)(e8.E, { variant: "text-sm/medium", color: "text-default", className: tr.L5, children: p }),
                  (0, l.jsx)(v.D, {
                      className: tr.b,
                      onClick: function () {
                          return (0, e9.Dr)(eO.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, l.jsx)(e3.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var ta = n(817232),
    to = n(890856),
    tu = n(307301),
    tc = n(468689);
function td(e) {
    (tc.A.open(e, eb.BEX.SOUNDBOARD),
        (0, e2.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("860350"),
                n.e("207998"),
                n.e("179652"),
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
var th = n(948611),
    tm = n(308078);
function tf(e) {
    let { guild: t, focused: n, onSelectItem: i, ...r } = e,
        { canCreateExpressions: a } = (0, ef.nr)(t);
    return (0, l.jsx)(eV.m, {
        text: eP.intl.string(eP.t["fHo+z1"]),
        shouldShow: !a,
        children: (0, l.jsx)("li", {
            className: th.H,
            children: (0, l.jsxs)(to.s, {
                ...r,
                "aria-label": eP.intl.formatToPlainString(eP.t.c1qVYh, { guildName: t.name }),
                className: s()(tm.n4, { [tm.in]: n, [tm.r9]: !a }),
                onClick: () => (null != i ? i() : td(t.id)),
                children: [
                    (0, l.jsx)(tu.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(e8.E, {
                        variant: "text-xs/semibold",
                        color: a ? "currentColor" : "text-muted",
                        children: eP.intl.string(eP.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function tp(e) {
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
        p = M.LW.useStore((e) => e.inspectedExpressionPosition),
        g = `${l}-${r}`,
        x = s && p.rowIndex === l && p.columnIndex === r;
    switch (t.item.type) {
        case eu.uq.SOUND:
            return (0, i.createElement)(ta.Ay, {
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
        case eu.uq.ADD_SOUND:
            return (0, i.createElement)(tf, {
                ...o(r),
                key: g,
                guild: t.item.guild,
                focused: x,
                onSelectItem: () => u(t),
            });
    }
}
var tg = n(635799);
let tx = 32 + ee.kg - 8,
    tE = {
        [eu.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [eu.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [eu.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [eu.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
        [eu.Cx.FREQUENTLY_USED]: u.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
        [eu.Cx.TOP_SOUNDS]: u.A.SOUNDBOARD_TOP_SOUNDS_SECTION,
    };
function tS(e) {
    let {
            categoryInfo: t,
            collapsed: n,
            toggleCollapsed: r,
            isSectionNitroLocked: a,
            showNitroDivider: o,
            canRenderFavoritesUpsell: u,
        } = e,
        c = i.useRef(null);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            o && (0, l.jsx)(ee.Ay, { className: tg.yH }),
            (0, l.jsx)("div", {
                className: s()(tg.hd, { [tg.Jb]: a, [tg.VD]: a }),
                children: (0, l.jsx)(v.D, {
                    className: tg.bV,
                    onClick: r,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: tg.M2,
                        ref: u ? c : void 0,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case eu.Cx.FAVORITES:
                                        return (0, l.jsx)(y.StarIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tg.nr,
                                        });
                                    case eu.Cx.FREQUENTLY_USED:
                                        return (0, l.jsx)(C.ClockIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tg.nr,
                                        });
                                    case eu.Cx.GUILD:
                                        return (0, l.jsx)(w.A, { guild: t.guild, height: 16, width: 16 });
                                    case eu.Cx.DEFAULTS:
                                        return (0, l.jsx)(A.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: tg.nr,
                                        });
                                    case eu.Cx.SEARCH:
                                        return (0, l.jsx)(I.MagnifyingGlassIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tg.nr,
                                        });
                                    case eu.Cx.TOP_SOUNDS:
                                        return (0, l.jsx)(b.TrophyIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tg.nr,
                                        });
                                }
                            })(),
                            (0, l.jsx)(N.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: tg.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case eu.Cx.FAVORITES:
                                            return eP.intl.string(eP.t.k8fFjp);
                                        case eu.Cx.FREQUENTLY_USED:
                                            return eP.intl.string(eP.t["+cGVV6"]);
                                        case eu.Cx.GUILD:
                                            return t.guild.name;
                                        case eu.Cx.DEFAULTS:
                                            return eP.intl.string(eP.t.Rtvk9X);
                                        case eu.Cx.SEARCH:
                                            return eP.intl.string(eP.t["zkoeq/"]);
                                        case eu.Cx.TOP_SOUNDS:
                                            return eP.intl.formatToPlainString(eP.t.GXs41w, {
                                                guildName: t.guild.name,
                                            });
                                    }
                                })(),
                            }),
                            (0, l.jsx)(ea.A, {
                                className: tg.nr,
                                direction: n ? ea.A.Directions.RIGHT : ea.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
            u && (0, l.jsx)(eD, { targetElementRef: c }),
        ],
    });
}
function ty() {
    return (0, l.jsx)(k.A, { message: eP.intl.string(eP.t.bgDdNK) });
}
function tC(e) {
    let { className: t } = e,
        n = (0, S.bG)([g.A], () => g.A.isSoundboardVolumeMuted()) ? T._ : j.H;
    return (0, l.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function tA(e) {
    let {
            guildId: t,
            channel: r,
            containerWidth: a,
            onClose: o,
            onSelect: h,
            shouldValidateSelectedSound: m = !1,
            suppressPlaySound: f = !1,
            shouldShowLockedSounds: p = !0,
            gridNotice: y,
            soundButtonOverlay: C,
            listPadding: A,
            renderHeader: I,
            defaultSoundsOnly: b = !1,
            inExpressionPicker: N,
            analyticsSource: T,
        } = e,
        { analyticsLocations: k } = (0, c.Ay)(),
        { analyticsLocations: w } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: P } = (0, R.p)(),
        D = i.useMemo(() => ({ ...P, section: eb.JJy.SOUNDBOARD_SOUND_PICKER }), [P]),
        [U, W] = i.useState(null),
        F = (0, S.bG)([er.default], () => er.default.getCurrentUser()),
        B = (0, V.TW)(F, ej.PremiumTypes.TIER_2),
        K = (0, S.bG)([es.A], () => es.A.getVoiceState(t, F?.id ?? eb.dJq)),
        G = K?.selfDeaf || K?.mute || K?.suppress,
        H = (0, d.RQ)((e) => e.searchQuery),
        z = null != H && "" !== H,
        q = (0, L.GV)(),
        { allowReordering: $ } = ed.q.useConfig({ location: "SoundboardSoundGrid" }),
        [Q, ee] = i.useState(!1),
        { isDraggingFavoriteSound: ea } = (0, x.V)((e) => ({
            isDraggingFavoriteSound: e.isDragging() && e.getItemType() === eT.Tj,
        })),
        eO = i.useCallback(() => {
            ee(!0);
        }, []);
    i.useEffect(() => {
        if (Q)
            return (
                window.addEventListener("mousemove", e),
                () => {
                    window.removeEventListener("mousemove", e);
                }
            );
        function e() {
            ee(!1);
        }
    }, [Q]);
    let {
            categories: eL,
            availableSounds: ew,
            soundCounts: eM,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = (0, S.bG)([er.default], () => er.default.getCurrentUser()),
                r = V.Ay.isPremium(l, ej.PremiumTypes.TIER_2),
                [s, a, o, u] = (0, S.yK)([g.A], () => [
                    g.A.getSounds(),
                    g.A.getFavorites(),
                    g.A.getFrequentlyUsedSoundIds(),
                    g.A.isFetching(),
                ]),
                c = (0, eN.IJ)(),
                { sortOrder: d } = ed.q.useConfig({ location: "useSoundGrid" }),
                h = (0, ev.Y)(e, !1),
                m = (0, S.yK)([eg.A], () => {
                    let e = [];
                    return (
                        h.forEach((t) => {
                            let n = eg.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                f = V.Ay.canUseSoundboardEverywhere(l),
                p = (0, S.bG)([eg.A], () => eg.A.getGuild(e?.guild_id)),
                x = (0, S.bG)(
                    [ex.A],
                    () => {
                        let { canCreateExpressions: e } = (0, ef.ie)(p);
                        return e;
                    },
                    [p],
                ),
                E = i.useMemo(() => o.filter((e) => !a.has(e)).slice(0, 3), [o, a]),
                y = (0, S.bG)([eE.Ay, ep.A, eg.A], () => {
                    let e = eE.Ay.getVoiceChannelId(),
                        t = null != e ? ep.A.getChannel(e) : null;
                    return t?.guild_id != null ? eg.A.getGuild(t.guild_id) : void 0;
                });
            (0, em.Ay)(() => {
                !(function (e) {
                    var t;
                    if (null == e || null == er.default.getCurrentUser()) return;
                    let n = g.A.getTopSoundboardSoundsMetadata(e);
                    if (null != n) {
                        let { topSoundsTTL: e } = n;
                        if (null == e || Date.now() < e) return;
                    }
                    eI.A.getIsFetching(e) ||
                        ((t = e),
                        (0, eA.tZ)(t) ||
                            (eC.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: t }),
                            ey.Bo.get({
                                url: eb.Rsh.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(t),
                                oldFormErrors: !0,
                                rejectWithError: !0,
                            }).then(
                                (e) =>
                                    eC.h.dispatch({
                                        type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS",
                                        guildId: t,
                                        topSoundsMetadata: e.body.items
                                            .map((e) => ({ soundId: e.sound_id, rank: e.sound_rank }))
                                            .sort((e, t) => e.rank - t.rank),
                                    }),
                                () => eC.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId: t }),
                            )));
                })(y?.id);
            });
            let C = (0, S.yK)([g.A], () => g.A.getTopSoundboardSoundIds(y?.id)),
                A = i.useMemo(() => C.slice(0, 3), [C]);
            return i.useMemo(() => {
                let e = 0,
                    l = 0,
                    i = [];
                if (n)
                    return (
                        eR(i, s),
                        {
                            categories: i,
                            availableSounds: s.get("0") ?? eT.pD,
                            isFetching: u,
                            soundCounts: {
                                favoriteSoundCount: 0,
                                unlockedCustomSoundCount: 0,
                                lockedCustomSoundCount: 0,
                            },
                        }
                    );
                null != y &&
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
                                key: eu.Cx.TOP_SOUNDS,
                                categoryInfo: { type: eu.Cx.TOP_SOUNDS, guild: t },
                                items: e_(s),
                            });
                    })(i, y, { allSounds: s, topSoundIds: A });
                let o = "favorite-date" === d ? eN.XP : eN.U9;
                return (
                    ek({
                        sections: i,
                        guildIds: h,
                        allSounds: s,
                        potentialSoundIdsForSection: Array.from(a),
                        sectionType: eu.Cx.FAVORITES,
                        sortSoundsFn: o,
                    }),
                    E.length > 0 &&
                        ek({
                            sections: i,
                            guildIds: h,
                            allSounds: s,
                            potentialSoundIdsForSection: E,
                            sectionType: eu.Cx.FREQUENTLY_USED,
                        }),
                    void 0 !== p &&
                        (function (e, t, n) {
                            let {
                                    currentGuildHasAddPermissions: l,
                                    allSounds: i,
                                    filterOutEmptyCurrentGuild: r,
                                    sortSoundsFn: s,
                                } = n,
                                a = i.get(t.id) ?? [],
                                o = e_(a, s),
                                u = a.length < (0, eS.fA)(t) && l,
                                c = 0 === o.length;
                            ((u || c) && !r && o.push({ type: eu.uq.ADD_SOUND, guild: t }),
                                (r && c) ||
                                    e.push({
                                        categoryInfo: { type: eu.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                        key: t.id,
                                        items: o,
                                    }));
                        })(i, p, {
                            currentGuildHasAddPermissions: x,
                            allSounds: s,
                            filterOutEmptyCurrentGuild: t,
                            sortSoundsFn: c,
                        }),
                    f || eR(i, s),
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
                            let n = e_(i.get(e.id) ?? [], s);
                            n.length > 0 &&
                                t.push({
                                    categoryInfo: { type: eu.Cx.GUILD, guild: e, isNitroLocked: !r },
                                    key: e.id,
                                    items: n,
                                });
                        }
                    })({ sections: i, guilds: m, currentGuildId: p?.id, allSounds: s, hasNitro: r, sortSoundsFn: c }),
                    f && eR(i, s),
                    i.forEach((t) => {
                        t.categoryInfo.type === eu.Cx.GUILD &&
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
                    }
                );
            }, [h, s, a, !0, p, x, t, f, m, n, u, r, c, E, y, A, d]);
        })(r, void 0, b),
        [eD, eU] = i.useState([]),
        eV = i.useMemo(
            () => (H.length > 0 ? [{ key: eu.Cx.SEARCH, categoryInfo: { type: eu.Cx.SEARCH }, items: e_(eD) }] : eL),
            [eL, H.length, eD],
        ),
        eW = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eF = i.useMemo(() => eV.filter((e) => e.items.length > 0), [eV]),
        eB = i.useMemo(
            () => eF.findLastIndex((e) => !!(0, V.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eF],
        ),
        eK = !B && p && -1 !== eB,
        eH = !B && p && -1 !== eB,
        ez = el.b0.useSetting(),
        eq = i.useMemo(() => new Set(ez), [ez]),
        e$ = null == r,
        eQ = V.Ay.canUseCustomCallSounds(F),
        eZ = i.useCallback(
            (e) => {
                (eq.has(e) ? eq.delete(e) : eq.add(e), el.b0.updateSetting(Array.from(eq)));
            },
            [eq],
        ),
        eJ = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, ec.Ir)(F, e, r, !1);
                if (null != h && m && i) h(e, n);
                else if (!f && i && (0, ec.Au)(r))
                    ((0, ec.Ak)(e, r?.id ?? eb.dJq, t, l),
                        z &&
                            eo.default.track(eb.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eb.I4_.SOUNDBOARD,
                                channel_id: r?.id,
                                query: H,
                                location_stack: t,
                            }));
                else {
                    if ((0, ec.Ir)(F, e, r)) return;
                    p && W(e);
                }
            },
            [f, F, r, p, z, H, h, m],
        ),
        eX = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case eu.uq.SOUND:
                        let n = tE[e?.category] ?? null,
                            l = e?.item.index;
                        return eJ(e.item.sound, null == n ? k : [...k, n], t?.shiftKey !== !0, l);
                    case eu.uq.ADD_SOUND:
                        return (o(), td(e.item.guild.id));
                }
            },
            [k, eJ, o],
        ),
        e1 = i.useCallback(
            (e, n, i, a, o) => {
                let u = eF[i.sectionIndex],
                    c = p && e0(u.categoryInfo, B, t) && eK,
                    d = $ && u.categoryInfo.type === eu.Cx.FAVORITES;
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        className: s()(tg.a, { [tg.uL]: c }),
                        children: e.map((e, t) => {
                            let n =
                                    e.item.type === eu.uq.SOUND &&
                                    e.category === eu.Cx.FAVORITES &&
                                    e.item.index === u.items.length - 1,
                                s =
                                    e.item.type === eu.uq.SOUND
                                        ? `sound-${e.item.sound.soundId}`
                                        : `add-sound-${e.item.guild.id}`;
                            return (0, l.jsx)(
                                tp,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: r,
                                        interactive: e$ ? eQ : !G,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: k,
                                        enableFavoritesDragAndDrop: d,
                                        isLastFavoriteSound: n,
                                        onFavoriteSoundDrop: eO,
                                        disableActiveStyles: d && Q,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: f,
                                    getItemProps: a,
                                    onSelectItem: eX,
                                    onItemMouseEnter: o,
                                    buttonOverlay: C,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: p,
                                    inExpressionPicker: N,
                                },
                                s,
                            );
                        }),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eF, p, B, t, f, eX, r, e$, eQ, G, k, C, eK, N, $, eO, Q],
        ),
        e2 = i.useCallback(
            (e, t) => {
                if (e <= 0 || !p) return !1;
                let n = eF[e],
                    l = eF[e - 1],
                    i = e0(n.categoryInfo, B, t),
                    r = e0(l.categoryInfo, B, t);
                return i && !r;
            },
            [eF, p, B],
        ),
        e5 = i.useCallback(() => {
            let e = g.A.getSoundById("3");
            null != e && W(e);
        }, []),
        e6 = i.useCallback(() => {
            let e = (0, V.Dd)(ej.PremiumTypes.TIER_2);
            return eP.intl.format(eP.t["tw/SSq"], { nitroTierName: e, onClick: e5 });
        }, [e5]),
        e8 = i.useCallback((e) => (e2(e, t) ? tx : 32), [t, e2]),
        e3 = i.useCallback(
            (e) => {
                let t = e === eF.length - 1;
                return eH && t ? 70 : eK && e === eB ? 20 : 0;
            },
            [eF.length, eK, eH, eB],
        ),
        e7 = i.useCallback(
            (e, t) => {
                let n = ea && eF[e]?.categoryInfo.type !== eu.Cx.FAVORITES;
                return (0, l.jsx)("div", { className: s()({ [tg.YJ]: n }), children: t }, e);
            },
            [eF, ea],
        ),
        e4 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    r = p && e0(e.categoryInfo, B, t),
                    s = e2(n, t),
                    a = eq.has(i);
                return (0, l.jsx)(
                    tS,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            (eo.default.track(eb.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eb.liQ.SOUNDBOARD_POPOUT },
                                tab: eG.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !a,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eZ(i));
                        },
                        collapsed: a,
                        isSectionNitroLocked: r && eK,
                        showNitroDivider: s && eK,
                        canRenderFavoritesUpsell: $ && e.items.length > 1 && e.categoryInfo.type === eu.Cx.FAVORITES,
                    },
                    `header-${i}`,
                );
            },
            [eq, eZ, t, e2, p, B, eK, $],
        ),
        e9 = i.useCallback(
            (e, t) => {
                let n = t === eF.length - 1,
                    i = t === eB;
                return eH && n
                    ? (0, l.jsx)("div", { className: s()(tg.Lk, { [tg.Ns]: i }) })
                    : eK && t === eB
                      ? (0, l.jsx)("div", { className: s()(tg.a3, { [tg.Ns]: i }) })
                      : null;
            },
            [eB, eK, eH, eF.length],
        ),
        te = i.useCallback((e) => eU((0, eh.lG)(e, ew, F, r, k)), [r, F, ew, k]),
        tt = i.useCallback(
            (e) => {
                (0, _.L3)(e, async () => {
                    let { default: e } = await n.e("811562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: k, ...t });
                });
            },
            [k],
        ),
        tn = i.useCallback(
            () =>
                N
                    ? (0, l.jsx)(X.Gq, {
                          renderPopout: () => (0, l.jsx)(X.qn, {}),
                          tooltipText: eP.intl.string(eP.t["19lt24"]),
                          position: "top",
                          clickableClassName: s()(tg.Jm, tg.Zz),
                          children: (0, l.jsx)(j.H, { size: "md", color: "currentColor", className: tg.By }),
                      })
                    : (0, l.jsx)(v.D, {
                          tabIndex: 0,
                          className: tg.Jm,
                          onClick: tt,
                          "aria-label": eP.intl.string(eP.t.kbFsAD),
                          children: (0, l.jsx)(tC, { className: tg.By }),
                      }),
            [N, tt],
        ),
        tl = i.useCallback(
            (e) =>
                (0, l.jsx)(eY, {
                    soundboardListRef: e,
                    categories: eL,
                    shouldUpsellLockedCategories: eK,
                    listPadding: A,
                    guildId: t,
                    inExpressionPicker: N,
                }),
            [eL, A, eK, t, N],
        ),
        ti = i.useCallback(() => {
            let e = (0, J.qD)();
            return (0, V.LE)(e, ej.pe.TIER_2) ?? eP.intl.string(eP.t.pj0XBN);
        }, []),
        tr = i.useCallback(
            () =>
                eH
                    ? (0, l.jsx)(Y.d, {
                          showUpsell: eW,
                          text: e6(),
                          button: ti(),
                          buttonAnalyticsObject: { section: eb.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, l.jsx)(et.l, {
                              size: "sm",
                              className: tg.ij,
                              location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                              forceDarkTheme: !0,
                          }),
                      })
                    : null,
            [e6, ti, eH, eW],
        ),
        ta = i.useCallback(
            (e) =>
                e?.item.type === eu.uq.SOUND
                    ? (0, l.jsx)(ts, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        to = (0, S.bG)([ei.A], () => ei.A.getMediaSessionId());
    return (
        (0, O.A)({
            type: E.ImpressionTypes.POPOUT,
            name: E.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: T,
                guild_id: t,
                media_session_id: to,
                available_custom_sounds_count: eM.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eM.lockedCustomSoundCount,
                favorite_sounds_count: eM.favoriteSoundCount,
                type: eT.c4.FULL_PICKER,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != U
                    ? (0, l.jsx)(en.A, {
                          title: eP.intl.string(N ? eP.t.rZEEvU : eP.t.jGDYF0),
                          description: eP.intl.string(N ? eP.t.ZPNG5A : eP.t["grL/hg"]),
                          analyticsLocationSection: eb.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: ej.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...D, object: eb.ZSU.SOUNDBOARD_SOUND },
                              location_stack: w,
                              sku_id: V.Ay.getSkuIdForPremiumType(ej.PremiumTypes.TIER_2),
                              voice_guild_id: ei.A.getGuildId(),
                          },
                          onClose: () => W(null),
                          onUpsellClicked: o,
                      })
                    : void 0,
                (0, l.jsx)(Z, {
                    categories: eF,
                    collapsedCategories: eq,
                    containerWidth: a,
                    store: M.LW,
                    onSelectItem: eX,
                    onSearchExpressions: te,
                    hasSearchResults: eD.length > 0,
                    defaultSearchPlaceholder: eP.intl.string(eP.t.sKt3xS),
                    renderRow: e1,
                    renderSectionHeader: e4,
                    renderSectionFooter: e9,
                    renderSection: e7,
                    renderCategoryList: tl,
                    renderHeaderAccessories: tn,
                    rowHeight: 48,
                    sectionHeaderHeight: e8,
                    sectionFooterHeight: e3,
                    itemNodeWidth: 150,
                    gridNavigatorId: q,
                    renderEmptySearchState: ty,
                    renderInspector: ta,
                    gridNotice: y,
                    renderHeader: I,
                    renderUpsell: tr,
                }),
            ],
        })
    );
}
var tI = n(70317);
function tb(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: r,
            onClose: x,
            onSelect: E,
            analyticsSource: S,
            suppressPlaySound: y,
            shouldValidateSelectedSound: C,
            shouldShowLockedSounds: A = !0,
            gridNotice: I,
            inExpressionPicker: b,
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
        L = b ? void 0 : { height: 520 };
    return (
        i.useEffect(() => {
            R();
        }, [R]),
        i.useEffect(() => {
            b || (0, d.Ri)("");
        }, [b]),
        (0, l.jsx)(c.f5, {
            value: O,
            children: (0, l.jsxs)(a.l, {
                style: L,
                className: s()(tI.Nz, { [tI.Bg]: k, [tI.yV]: b }),
                children: [
                    _ && null != t && n?.id != null ? (0, l.jsx)(h.A, { guildId: t, channelId: n.id }) : null,
                    k
                        ? (0, l.jsx)(o.y, {})
                        : (0, l.jsx)(tA, {
                              guildId: t,
                              channel: n,
                              onClose: x,
                              onSelect: E,
                              shouldValidateSelectedSound: C,
                              containerWidth: r,
                              suppressPlaySound: y,
                              shouldShowLockedSounds: A,
                              gridNotice: I,
                              soundButtonOverlay: v,
                              listPadding: N,
                              renderHeader: T,
                              defaultSoundsOnly: j,
                              inExpressionPicker: b,
                              analyticsSource: S,
                          }),
                ],
            }),
        })
    );
}
