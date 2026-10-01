n.d(t, { A: () => tb });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(305866),
    o = n(289873),
    u = n(793574),
    c = n(688810),
    d = n(151271),
    m = n(767931),
    h = n(702841),
    p = n(594061),
    f = n(796774),
    g = n(209932),
    x = n(714736);
n(30146);
var A = n(675816),
    C = n(562708),
    E = n(17928),
    I = n(27232),
    y = n(406810),
    S = n(111159),
    v = n(7689),
    N = n(369606),
    _ = n(939249),
    j = n(297264),
    b = n(358618),
    T = n(983851),
    R = n(442433),
    O = n(537652),
    L = n(212245),
    M = n(139286),
    k = n(915089),
    w = n(724511),
    P = n(850992),
    D = n(887695),
    U = n(435558),
    V = n(962125),
    G = n(158045),
    F = n(240864),
    B = n(212633);
let H = i.forwardRef(function (e, t) {
        let {
                categories: n,
                store: s,
                hasSearchResults: r,
                listPadding: a,
                renderRow: o,
                renderSection: u,
                renderSectionHeader: c,
                renderSectionFooter: m,
                renderInspector: h,
                renderEmptySearchState: p,
                rowCount: f,
                rowCountBySection: g,
                rowHeight: x,
                sectionHeaderHeight: A,
                sectionFooterHeight: C,
                renderUpsell: E,
                onScroll: I,
            } = e,
            y = i.useRef(!1),
            S = i.useRef(null),
            v = (0, d.RQ)((e) => e.searchQuery),
            N = s.useStore((e) => e.activeCategoryIndex),
            _ = i.useMemo(
                () =>
                    n.map((e) =>
                        (0, G.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            j = (0, D.Fk)({
                activeCategoryIndex: N,
                isScrolling: y,
                listRef: S,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: v,
            }),
            b = i.useCallback(
                (e) => {
                    (j(e),
                        W({
                            listRef: S,
                            searchQuery: v,
                            nitroLockedSectionStates: _,
                            scrollTop: e,
                            sectionHeaderHeight: A,
                            sectionFooterHeight: C,
                        }),
                        I?.(e));
                },
                [j, v, _, A, C, I],
            );
        return (
            i.useEffect(() => {
                null != S.current && b(S.current.getScrollerNode()?.scrollTop ?? 0);
            }, [b, S]),
            (0, D.FV)({ searchQuery: v, activeCategoryIndex: N, listRef: S }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => S.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => S.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return S.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, l.jsxs)("div", {
                className: B.i,
                children: [
                    v.length > 0 && !r && null != p
                        ? p()
                        : (0, l.jsx)(V.A, {
                              role: "none presentation",
                              listPadding: a,
                              onScroll: b,
                              renderRow: o,
                              renderSection: u,
                              renderSectionHeader: c,
                              renderSectionFooter: m,
                              rowCount: f,
                              rowCountBySection: g,
                              rowHeight: x,
                              sectionHeaderHeight: A,
                              sectionFooterHeight: C,
                              stickyHeaders: !0,
                              ref: S,
                          }),
                    E?.(),
                    h?.(),
                ],
            })
        );
    }),
    W = (0, U.throttle)(
        function (e) {
            let {
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: s,
                sectionFooterHeight: r,
            } = e;
            if (null == t.current) return;
            let a = (0, F.s)({
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: s,
                sectionFooterHeight: r,
            });
            d.RQ.setState({
                isNitroLockedSectionVisible: a.isNitroLockedSectionVisible,
                areOnlyNitroLockedSectionsVisible: a.areOnlyNitroLockedSectionsVisible,
            });
        },
        300,
        { leading: !1, trailing: !0 },
    );
var K = n(462180),
    z = n(602034),
    Z = n(683438),
    Y = n(642232);
let q = i.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: s,
            onKeyDown: r,
            gridNavigatorId: a,
            expressionsListRef: o,
            defaultSearchPlaceholder: u,
            emptySearchPlaceholder: c,
        } = e,
        m = i.useRef(null),
        [h, p] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], K.x),
        f = n.useStore((e) => e.searchPlaceholder),
        [g, x] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], K.x),
        A = i.useCallback(
            (e) => {
                (n.setActiveCategoryIndex("" === e ? 0 : P.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, d.Ri)(e),
                    o.current?.scrollTo(0));
            },
            [o, n],
        ),
        C = i.useCallback(() => {
            A("");
        }, [A]);
    return (
        i.useImperativeHandle(t, () => ({ focus: () => m.current?.focus() })),
        i.useLayoutEffect(() => {
            p && m.current?.focus();
        }, [p]),
        (0, l.jsx)("div", {
            className: Y.i,
            children: (0, l.jsx)(Z.I, {
                autoFocus: s,
                disabled: !s,
                query: h,
                ref: m,
                placeholder: null != f ? f : s || null == c ? u : c,
                onClear: C,
                onKeyDown: r,
                onChange: A,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": a,
                    "aria-expanded": !0,
                    ...(x ? { "aria-activedescendant": (0, z.Aq)(a, g.columnIndex, g.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var J = n(904289);
function $(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: s,
            store: r,
            onSelectItem: a,
            onSearchExpressions: o,
            onScroll: u,
            hasSearchResults: c,
            defaultSearchPlaceholder: m,
            emptySearchPlaceholder: h,
            renderEmptyState: p,
            renderRow: f,
            renderSection: g,
            renderSectionHeader: x,
            renderSectionFooter: A,
            renderInspector: C,
            renderEmptySearchState: E,
            renderCategoryList: I,
            renderHeaderAccessories: y,
            rowHeight: S,
            sectionHeaderHeight: v,
            sectionFooterHeight: N,
            itemNodeWidth: _,
            listPaddingRight: j,
            itemNodeMargin: b,
            listPadding: T,
            gridNavigatorId: R,
            gridNotice: O,
            renderHeader: L,
            renderUpsell: M,
        } = e,
        k = i.useRef(null),
        w = i.useRef(null),
        P = i.useRef(null),
        U = 0 === t.length,
        V = (0, d.RQ)((e) => e.searchQuery),
        G = r.useStore((e) => e.inspectedExpressionPosition),
        F = (0, D.oV)({ gridWrapperRef: k, containerWidth: s, showingEmptyState: U }),
        {
            expressionsGrid: B,
            rowCount: W,
            rowCountBySection: K,
            columnCounts: z,
            gutterWidth: Z,
        } = (0, D.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: F,
            listPaddingRight: j,
            itemNodeWidth: _,
            itemNodeMargin: b,
        }),
        {
            getItemProps: Y,
            getRowProps: $,
            gridContainerProps: X,
            handleGridContainerKeyDown: Q,
            isUsingKeyboardNavigation: ee,
        } = (0, D.JZ)({
            columnCounts: z,
            expressionsListRef: w,
            expressionsGrid: B,
            onSelectItem: a,
            store: r,
            gridNavigatorId: R,
        }),
        et = i.useCallback(
            (e, t) =>
                f(
                    B[e],
                    $(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: Z,
                        rowIndex: e,
                        totalRowCount: W,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => Y(e, t),
                    (t) => r.setInspectedExpressionPosition(t, e),
                ),
            [B, Y, $, Z, ee, f, r, W],
        ),
        en = i.useCallback((e) => x?.(t[e], e), [t, x]),
        el = i.useCallback((e) => A?.(t[e], e), [t, A]),
        ei = i.useCallback(() => C?.(B?.[G.rowIndex]?.[G.columnIndex]), [B, G.columnIndex, G.rowIndex, C]);
    (i.useEffect(() => {
        o(V);
    }, [o, V]),
        i.useEffect(() => {
            r.setBottomPosition(k.current?.getBoundingClientRect().bottom ?? null);
        }),
        i.useEffect(() => r.resetStoreState, [r.resetStoreState]),
        i.useLayoutEffect(() => {
            P.current?.focus();
        }, []));
    let es = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(q, {
                ref: P,
                store: r,
                hasSendableExpressions: !0,
                onKeyDown: Q,
                expressionsListRef: w,
                gridNavigatorId: R,
                defaultSearchPlaceholder: m,
                emptySearchPlaceholder: h,
            }),
            y?.(),
        ],
    });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != L ? L(es) : (0, l.jsxs)("div", { className: J.wx, children: [" ", es, " "] }),
            U && null != p
                ? p(J.p$)
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          I(w),
                          null != O && (0, l.jsx)("div", { className: J.Eb, children: O }),
                          (0, l.jsx)("div", {
                              ref: k,
                              className: J.AD,
                              id: R,
                              ...X,
                              children:
                                  null != F
                                      ? (0, l.jsx)(H, {
                                            categories: t,
                                            ref: w,
                                            store: r,
                                            hasSearchResults: c,
                                            listPadding: T,
                                            renderRow: et,
                                            renderSection: g,
                                            renderSectionHeader: null != x ? en : void 0,
                                            renderSectionFooter: null != A ? el : void 0,
                                            renderInspector: null != C ? ei : void 0,
                                            renderEmptySearchState: E,
                                            rowCount: W,
                                            rowCountBySection: K,
                                            rowHeight: S,
                                            sectionHeaderHeight: v,
                                            sectionFooterHeight: N,
                                            renderUpsell: M,
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
    Q = n(319993),
    ee = n(202639),
    et = n(414872),
    en = n(285373),
    el = n(609178),
    ei = n(885386),
    es = n(763827),
    er = n(287809),
    ea = n(977997),
    eo = n(147925),
    eu = n(174459),
    ec = n(807348),
    ed = n(813564),
    em = n(699840),
    eh = n(147472);
n(321073);
var ep = n(964486),
    ef = n(931991),
    eg = n(734057),
    ex = n(71393),
    eA = n(576705),
    eC = n(309010),
    eE = n(473145),
    eI = n(636537),
    ey = n(228366),
    eS = n(463347),
    ev = n(125831),
    eN = n(945810);
let e_ = (0, eN.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
(0, eN.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds-mobile",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
var ej = n(652215),
    eb = n(805143),
    eT = n(194567),
    eR = n(980504),
    eO = n(202541);
function eL(e, t) {
    return (null != t && (e = t(e)), e.map((e, t) => ({ type: ec.uq.SOUND, sound: e, index: t })));
}
function eM(e) {
    let { sections: t, guildIds: n, allSounds: l, potentialSoundIdsForSection: i, sectionType: s, sortSoundsFn: r } = e,
        a = {};
    for (let e of [...n, "0"])
        for (let t of l.get(e) ?? []) null != i.find((e) => e === t.soundId) && (a[t.soundId] = t);
    let o = [];
    for (let e of i) {
        let t = a[e];
        null != t && o.push(t);
    }
    let u = eL(o, r);
    u.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: u });
}
function ek(e, t, n) {
    let { allSounds: l, topSoundIds: i } = n,
        s = {};
    for (let e of l.get(t.id) ?? []) s[e.soundId] = e;
    let r = [];
    for (let e of i) {
        let t = s[e];
        null != t && r.push(t);
    }
    0 !== r.length &&
        e.push({ key: ec.Cx.TOP_SOUNDS, categoryInfo: { type: ec.Cx.TOP_SOUNDS, guild: t }, items: eL(r) });
}
function ew(e, t) {
    let n = t.get("0") ?? eR.pD;
    e.push({ key: ec.Cx.DEFAULTS, categoryInfo: { type: ec.Cx.DEFAULTS }, items: eL(n, eT.U9) });
}
var eP = n(554146),
    eD = n(43105),
    eU = n(131607),
    eV = n(49999),
    eG = n(375708);
function eF(e) {
    let { targetElementRef: t } = e,
        { allowReordering: n } = em.q.useConfig({ location: "SoundboardFavoritesCoachmark" }),
        [i, s] = (0, eU.kn)(n ? [eP.M.SOUNDBOARD_FAVORITES_ORDERING_COACHMARK] : [], void 0, !0);
    return i !== eP.M.SOUNDBOARD_FAVORITES_ORDERING_COACHMARK
        ? null
        : (0, l.jsx)(eD.A, {
              targetElementRef: t,
              onRequestClose: function (e) {
                  (("user:escape" === e || "user:explicit" === e) && s(eV.i.DISMISS), s(eV.i.AUTO_DISMISS));
              },
              title: eG.intl.string(eG.t.KFcQy8),
              body: eG.intl.string(eG.t["P/1x7s"]),
              badge: "beta",
          });
}
var eB = n(837381),
    eH = n(866665),
    eW = n(713517),
    eK = n(88218),
    ez = n(407698),
    eZ = n(941971),
    eY = n(698279),
    eq = n(120052);
let eJ = [8, 8, 8, 8],
    e$ = "soundboard_guild_",
    { itemIdForIndex: eX } = (0, eK.J)(e$);
function eQ(e) {
    let { children: t, className: n, isSelected: s, listItemProps: r, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, eW.A)(o);
    return (0, l.jsxs)(_.D, {
        innerRef: o,
        ...r,
        className: n,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: eq.a$,
                children: (0, l.jsx)(eZ.A, { hovered: u, selected: s, size: "small" }),
            }),
            t,
        ],
    });
}
function e0(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: s } = e;
    return (0, l.jsx)(eQ, {
        className: r()(eq.Yl, { [eq.wH]: n }),
        isSelected: n,
        listItemProps: s,
        onClick: i,
        children: (0, l.jsx)(t, { className: eq.xi, color: "currentColor" }),
    });
}
function e1(e, t, n, i, s) {
    switch (e.categoryInfo.type) {
        case ec.Cx.FAVORITES:
            return (0, l.jsx)(e0, { icon: I.StarIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ec.Cx.FREQUENTLY_USED:
            return (0, l.jsx)(e0, { icon: y.ClockIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ec.Cx.GUILD:
            return (0, l.jsx)(
                eQ,
                {
                    className: eq.L1,
                    isSelected: n,
                    listItemProps: i,
                    onClick: t,
                    children: (0, l.jsx)(w.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case ec.Cx.DEFAULTS:
            return (0, l.jsx)(e0, { icon: S.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ec.Cx.TOP_SOUNDS:
            return (0, l.jsx)(e0, { icon: N.TrophyIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function e2(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: s, isNitroLocked: r } = e,
        a = (0, eB.rm)(eX(n));
    return t.categoryInfo.type === ec.Cx.GUILD
        ? (0, l.jsx)(ez.Q, { guild: t.categoryInfo.guild, children: e1(t, i, s, a, r) })
        : (0, l.jsx)(eH.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case ec.Cx.FAVORITES:
                          return eG.intl.string(eG.t.k8fFjp);
                      case ec.Cx.FREQUENTLY_USED:
                          return eG.intl.string(eG.t["+cGVV6"]);
                      case ec.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case ec.Cx.DEFAULTS:
                          return eG.intl.string(eG.t.Rtvk9X);
                      case ec.Cx.TOP_SOUNDS:
                          return eG.intl.formatToPlainString(eG.t.GXs41w, { guildName: e.categoryInfo.guild.name });
                  }
              })(t),
              position: "right",
              align: "center",
              children: e1(t, i, s, a, r),
          });
}
function e3(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: a = eJ,
            guildId: o,
            inExpressionPicker: u,
        } = e,
        c = i.useRef(null),
        d = (0, E.bG)([er.default], () => er.default.getCurrentUser()),
        m = (0, G.TW)(d, eO.PremiumTypes.TIER_2),
        h = i.useCallback(
            (e, t, n, i) => {
                let r = s && e5(e.categoryInfo, m, o);
                return (0, l.jsx)(e2, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        (eu.default.track(ej.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: ej.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eY.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n());
                    },
                    isSelected: i,
                    isNitroLocked: r,
                });
            },
            [o, s, m],
        );
    return (0, l.jsx)(eK.A, {
        className: r()(u ? eq.HZ : eq.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: P.LW,
        categories: n,
        listPadding: a,
        renderCategoryListItem: h,
        rowCount: n.length,
        categoryHeight: 40,
        navId: "soundboard-picker-categories",
        itemIdPrefix: e$,
    });
}
function e5(e, t, n) {
    return (null == n && e.type === ec.Cx.GUILD && !t) || (e.type === ec.Cx.GUILD && e.guild.id !== n && !t);
}
var e8 = n(191023),
    e6 = n(192308),
    e7 = n(28863),
    e4 = n(695366),
    e9 = n(834730),
    te = n(789645),
    tt = n(565645),
    tn = n(775602),
    tl = n(826673),
    ti = n(182922),
    ts = n(532624),
    tr = n(531685),
    ta = n(723702),
    to = n(350535),
    tu = n(115023);
function tc(e) {
    let { soundboardSound: t, closePicker: i } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        r = (0, h.bG)([g.A], () => null != t && g.A.isFavoriteSound(t.soundId)),
        a = (0, h.bG)([ex.A], () => ex.A.getGuild(t?.guildId)),
        o = (0, h.bG)([tn.Ay], () => tn.Ay.useReducedMotion, []),
        u = (0, h.bG)([tr.A], () => tr.A.isFocused()),
        c = (0, h.bG)([ts.Ay], () => ts.Ay.getKeybindForAction(ej.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, l.jsx)(ti.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(tt.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: tu.Zg })
                    : (0, l.jsx)(e8.ImageIcon, { size: "md", color: "currentColor", className: tu.Zg }),
            graphicSecondary: null != a ? (0, l.jsx)(w.A, { guild: a, shouldAnimate: !o && u }) : null,
            titlePrimary: t.name,
            titleSecondary: a?.name,
            isFavorite: r,
        });
    function m() {
        (i(),
            (0, e6.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("161411"),
                    n.e("498640"),
                    n.e("846327"),
                    n.e("912618"),
                ]).then(n.bind(n, 29681));
                return (t) => (0, l.jsx)(e, { ...t });
            }));
    }
    let p = (0, tl.k8)(eP.M.SOUNDBOARD_KEYBIND_TIP),
        f =
            null != c && (0, ta.isWindows)() && !p
                ? eG.intl.format(eG.t.udMTth, {
                      keybind: (0, to.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(e7.Anchor, { onClick: m, children: e }, t),
                  })
                : null;
    return null == f
        ? null
        : (0, l.jsxs)("div", {
              className: tu.g,
              children: [
                  (0, l.jsx)(e4.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: tu.QW }),
                  (0, l.jsx)(e9.E, { variant: "text-sm/medium", color: "text-default", className: tu.L5, children: f }),
                  (0, l.jsx)(_.D, {
                      className: tu.b,
                      onClick: function () {
                          return (0, tl.Dr)(eP.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, l.jsx)(te.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var td = n(817232),
    tm = n(890856),
    th = n(307301),
    tp = n(468689);
function tf(e) {
    (tp.default.open(e, ej.BEX.SOUNDBOARD),
        (0, e6.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("860350"),
                n.e("207998"),
                n.e("341659"),
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
var tg = n(948611),
    tx = n(308078);
function tA(e) {
    let { guild: t, focused: n, onSelectItem: i, ...s } = e,
        { canCreateExpressions: a } = (0, ef.nr)(t);
    return (0, l.jsx)(eH.m, {
        text: eG.intl.string(eG.t["fHo+z1"]),
        shouldShow: !a,
        children: (0, l.jsx)("li", {
            className: tg.H,
            children: (0, l.jsxs)(tm.s, {
                ...s,
                "aria-label": eG.intl.formatToPlainString(eG.t.c1qVYh, { guildName: t.name }),
                className: r()(tx.n4, { [tx.in]: n, [tx.r9]: !a }),
                onClick: () => (null != i ? i() : tf(t.id)),
                children: [
                    (0, l.jsx)(th.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(e9.E, {
                        variant: "text-xs/semibold",
                        color: a ? "currentColor" : "text-muted",
                        children: eG.intl.string(eG.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function tC(e) {
    let {
            descriptor: t,
            soundButtonProps: n,
            rowIndex: l,
            columnIndex: s,
            isUsingKeyboardNavigation: r,
            suppressPlaySound: a,
            getItemProps: o,
            onSelectItem: u,
            onItemMouseEnter: c,
            buttonOverlay: d,
            isNitroLocked: m,
            showLockForDisabledSound: h,
            inExpressionPicker: p,
        } = e,
        f = P.LW.useStore((e) => e.inspectedExpressionPosition),
        g = `${l}-${s}`,
        x = r && f.rowIndex === l && f.columnIndex === s;
    switch (t.item.type) {
        case ec.uq.SOUND:
            return (0, i.createElement)(td.Ay, {
                ...o(s),
                ...n,
                key: g,
                sound: t.item.sound,
                suppressPlaySound: a,
                focused: x,
                onMouseEnter: () => c(s),
                onSelectItem: (e) => u(t, e),
                enableSecondaryActions: !0,
                buttonOverlay: d,
                inNitroLockedSection: m,
                showLockForDisabledSound: h,
                isSoundmoji: !0 === p,
            });
        case ec.uq.ADD_SOUND:
            return (0, i.createElement)(tA, {
                ...o(s),
                key: g,
                guild: t.item.guild,
                focused: x,
                onSelectItem: () => u(t),
            });
    }
}
var tE = n(635799);
let tI = 32 + et.kg - 8,
    ty = {
        [ec.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [ec.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [ec.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [ec.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
        [ec.Cx.FREQUENTLY_USED]: u.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
        [ec.Cx.TOP_SOUNDS]: u.A.SOUNDBOARD_TOP_SOUNDS_SECTION,
    };
function tS(e) {
    let {
            categoryInfo: t,
            collapsed: n,
            toggleCollapsed: s,
            isSectionNitroLocked: a,
            showNitroDivider: o,
            canRenderFavoritesUpsell: u,
        } = e,
        c = i.useRef(null);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            o && (0, l.jsx)(et.Ay, { className: tE.yH }),
            (0, l.jsx)("div", {
                className: r()(tE.hd, { [tE.Jb]: a, [tE.VD]: a }),
                children: (0, l.jsx)(_.D, {
                    className: tE.bV,
                    onClick: s,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: tE.M2,
                        ref: u ? c : void 0,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case ec.Cx.FAVORITES:
                                        return (0, l.jsx)(I.StarIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tE.nr,
                                        });
                                    case ec.Cx.FREQUENTLY_USED:
                                        return (0, l.jsx)(y.ClockIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tE.nr,
                                        });
                                    case ec.Cx.GUILD:
                                        return (0, l.jsx)(w.A, { guild: t.guild, height: 16, width: 16 });
                                    case ec.Cx.DEFAULTS:
                                        return (0, l.jsx)(S.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: tE.nr,
                                        });
                                    case ec.Cx.SEARCH:
                                        return (0, l.jsx)(v.MagnifyingGlassIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tE.nr,
                                        });
                                    case ec.Cx.TOP_SOUNDS:
                                        return (0, l.jsx)(N.TrophyIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tE.nr,
                                        });
                                }
                            })(),
                            (0, l.jsx)(j.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: tE.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case ec.Cx.FAVORITES:
                                            return eG.intl.string(eG.t.k8fFjp);
                                        case ec.Cx.FREQUENTLY_USED:
                                            return eG.intl.string(eG.t["+cGVV6"]);
                                        case ec.Cx.GUILD:
                                            return t.guild.name;
                                        case ec.Cx.DEFAULTS:
                                            return eG.intl.string(eG.t.Rtvk9X);
                                        case ec.Cx.SEARCH:
                                            return eG.intl.string(eG.t["zkoeq/"]);
                                        case ec.Cx.TOP_SOUNDS:
                                            return eG.intl.formatToPlainString(eG.t.GXs41w, {
                                                guildName: t.guild.name,
                                            });
                                    }
                                })(),
                            }),
                            (0, l.jsx)(eo.A, {
                                className: tE.nr,
                                direction: n ? eo.A.Directions.RIGHT : eo.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
            u && (0, l.jsx)(eF, { targetElementRef: c }),
        ],
    });
}
function tv() {
    return (0, l.jsx)(O.A, { message: eG.intl.string(eG.t.bgDdNK) });
}
function tN(e) {
    let { className: t } = e,
        n = (0, E.bG)([g.A], () => g.A.isSoundboardVolumeMuted()) ? b._ : T.H;
    return (0, l.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function t_(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: a,
            onClose: o,
            onSelect: m,
            shouldValidateSelectedSound: h = !1,
            suppressPlaySound: p = !1,
            shouldShowLockedSounds: f = !0,
            gridNotice: x,
            soundButtonOverlay: I,
            listPadding: y,
            renderHeader: S,
            defaultSoundsOnly: v = !1,
            inExpressionPicker: N,
            analyticsSource: j,
        } = e,
        { analyticsLocations: b } = (0, c.Ay)(),
        { analyticsLocations: O } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: w } = (0, L.p)(),
        D = i.useMemo(() => ({ ...w, section: ej.JJy.SOUNDBOARD_SOUND_PICKER }), [w]),
        [U, V] = i.useState(null),
        F = (0, E.bG)([er.default], () => er.default.getCurrentUser()),
        B = (0, G.TW)(F, eO.PremiumTypes.TIER_2),
        H = (0, E.bG)([ea.A], () => ea.A.getVoiceState(t, F?.id ?? ej.dJq)),
        W = H?.selfDeaf || H?.mute || H?.suppress,
        K = (0, d.RQ)((e) => e.searchQuery),
        z = null != K && "" !== K,
        Z = (0, k.GV)(),
        { allowReordering: Y } = em.q.useConfig({ location: "SoundboardSoundGrid" }),
        [q, J] = i.useState(!1),
        { isDraggingFavoriteSound: et } = (0, A.V)((e) => ({
            isDraggingFavoriteSound: e.isDragging() && e.getItemType() === eR.Tj,
        })),
        eo = i.useCallback(() => {
            J(!0);
        }, []);
    i.useEffect(() => {
        if (q)
            return (
                window.addEventListener("mousemove", e),
                () => {
                    window.removeEventListener("mousemove", e);
                }
            );
        function e() {
            J(!1);
        }
    }, [q]);
    let {
            categories: eN,
            availableSounds: eP,
            soundCounts: eD,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = (0, E.bG)([er.default], () => er.default.getCurrentUser()),
                s = G.Ay.isPremium(l, eO.PremiumTypes.TIER_2),
                [r, a, o, u] = (0, E.yK)([g.A], () => [
                    g.A.getSounds(),
                    g.A.getFavorites(),
                    g.A.getFrequentlyUsedSoundIds(),
                    g.A.isFetching(),
                ]),
                c = (0, eT.IJ)(),
                { sortOrder: d } = em.q.useConfig({ location: "useSoundGrid" }),
                m = (0, eb.Y)(e, !1),
                h = (0, E.yK)([ex.A], () => {
                    let e = [];
                    return (
                        m.forEach((t) => {
                            let n = ex.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                p = G.Ay.canUseSoundboardEverywhere(l),
                f = (0, E.bG)([ex.A], () => ex.A.getGuild(e?.guild_id)),
                x = (0, E.bG)(
                    [eA.A],
                    () => {
                        let { canCreateExpressions: e } = (0, ef.ie)(f);
                        return e;
                    },
                    [f],
                ),
                A = i.useMemo(() => o.filter((e) => !a.has(e)).slice(0, 3), [o, a]),
                C = (0, E.bG)([eC.Ay, eg.A, ex.A], () => {
                    let e = eC.Ay.getVoiceChannelId(),
                        t = null != e ? eg.A.getChannel(e) : null;
                    return t?.guild_id != null ? ex.A.getGuild(t.guild_id) : void 0;
                }),
                { enabled: I, topSoundsFirst: y } = e_.getConfig({ location: "useSoundGrid" });
            (0, ep.Ay)(() => {
                I &&
                    (function (e) {
                        var t;
                        if (
                            null == e ||
                            null == er.default.getCurrentUser() ||
                            !e_.getConfig({ location: "maybeFetchTopSoundboardSoundsByGuild" }).enabled
                        )
                            return;
                        let n = g.A.getTopSoundboardSoundsMetadata(e);
                        if (null != n) {
                            let { topSoundsTTL: e } = n;
                            if (null == e || Date.now() < e) return;
                        }
                        ev.A.getIsFetching(e) ||
                            ((t = e),
                            (0, eS.tZ)(t) ||
                                (ey.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: t }),
                                eI.Bo.get({
                                    url: ej.Rsh.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(t),
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                }).then(
                                    (e) =>
                                        ey.h.dispatch({
                                            type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS",
                                            guildId: t,
                                            topSoundsMetadata: e.body.items
                                                .map((e) => ({ soundId: e.sound_id, rank: e.sound_rank }))
                                                .sort((e, t) => e.rank - t.rank),
                                        }),
                                    () => ey.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId: t }),
                                )));
                    })(C?.id);
            });
            let S = (0, E.yK)([g.A], () => g.A.getTopSoundboardSoundIds(C?.id)),
                v = i.useMemo(() => S.slice(0, 3), [S]);
            return i.useMemo(() => {
                let e = 0,
                    l = 0,
                    i = [];
                if (n)
                    return (
                        ew(i, r),
                        {
                            categories: i,
                            availableSounds: r.get("0") ?? eR.pD,
                            isFetching: u,
                            soundCounts: {
                                favoriteSoundCount: 0,
                                unlockedCustomSoundCount: 0,
                                lockedCustomSoundCount: 0,
                            },
                        }
                    );
                I && null != C && y && ek(i, C, { allSounds: r, topSoundIds: v });
                let o = "favorite-date" === d ? eT.XP : eT.U9;
                return (
                    eM({
                        sections: i,
                        guildIds: m,
                        allSounds: r,
                        potentialSoundIdsForSection: Array.from(a),
                        sectionType: ec.Cx.FAVORITES,
                        sortSoundsFn: o,
                    }),
                    A.length > 0 &&
                        eM({
                            sections: i,
                            guildIds: m,
                            allSounds: r,
                            potentialSoundIdsForSection: A,
                            sectionType: ec.Cx.FREQUENTLY_USED,
                        }),
                    I && null != C && !y && ek(i, C, { allSounds: r, topSoundIds: v }),
                    void 0 !== f &&
                        (function (e, t, n) {
                            let {
                                    currentGuildHasAddPermissions: l,
                                    allSounds: i,
                                    filterOutEmptyCurrentGuild: s,
                                    sortSoundsFn: r,
                                } = n,
                                a = i.get(t.id) ?? [],
                                o = eL(a, r),
                                u = a.length < (0, eE.fA)(t) && l,
                                c = 0 === o.length;
                            ((u || c) && !s && o.push({ type: ec.uq.ADD_SOUND, guild: t }),
                                (s && c) ||
                                    e.push({
                                        categoryInfo: { type: ec.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                        key: t.id,
                                        items: o,
                                    }));
                        })(i, f, {
                            currentGuildHasAddPermissions: x,
                            allSounds: r,
                            filterOutEmptyCurrentGuild: t,
                            sortSoundsFn: c,
                        }),
                    p || ew(i, r),
                    !(function (e) {
                        let {
                            sections: t,
                            guilds: n,
                            currentGuildId: l,
                            allSounds: i,
                            hasNitro: s,
                            sortSoundsFn: r,
                        } = e;
                        for (let e of n) {
                            if (e.id === l) continue;
                            let n = eL(i.get(e.id) ?? [], r);
                            n.length > 0 &&
                                t.push({
                                    categoryInfo: { type: ec.Cx.GUILD, guild: e, isNitroLocked: !s },
                                    key: e.id,
                                    items: n,
                                });
                        }
                    })({ sections: i, guilds: h, currentGuildId: f?.id, allSounds: r, hasNitro: s, sortSoundsFn: c }),
                    p && ew(i, r),
                    i.forEach((t) => {
                        t.categoryInfo.type === ec.Cx.GUILD &&
                            (t.categoryInfo.isNitroLocked ? (l += t.items.length) : (e += t.items.length));
                    }),
                    {
                        categories: i,
                        availableSounds: Array.from(r.values()).flat(),
                        isFetching: u,
                        soundCounts: {
                            favoriteSoundCount: a.size,
                            unlockedCustomSoundCount: e,
                            lockedCustomSoundCount: l,
                        },
                    }
                );
            }, [m, r, a, !0, f, x, t, p, h, n, u, s, c, A, C, v, I, y, d]);
        })(s, void 0, v),
        [eU, eV] = i.useState([]),
        eF = i.useMemo(
            () => (K.length > 0 ? [{ key: ec.Cx.SEARCH, categoryInfo: { type: ec.Cx.SEARCH }, items: eL(eU) }] : eN),
            [eN, K.length, eU],
        ),
        eB = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eH = i.useMemo(() => eF.filter((e) => e.items.length > 0), [eF]),
        eW = i.useMemo(
            () => eH.findLastIndex((e) => !!(0, G.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eH],
        ),
        eK = !B && f && -1 !== eW,
        ez = !B && f && -1 !== eW,
        eZ = ei.b0.useSetting(),
        eq = i.useMemo(() => new Set(eZ), [eZ]),
        eJ = null == s,
        e$ = G.Ay.canUseCustomCallSounds(F),
        eX = i.useCallback(
            (e) => {
                (eq.has(e) ? eq.delete(e) : eq.add(e), ei.b0.updateSetting(Array.from(eq)));
            },
            [eq],
        ),
        eQ = i.useCallback(
            (e, t, n, l) => {
                if (null != m && !h) return m(e, n);
                let i = (0, ed.Ir)(F, e, s, !1);
                if (null != m && h && i) m(e, n);
                else if (!p && i && (0, ed.Au)(s))
                    ((0, ed.Ak)(e, s?.id ?? ej.dJq, t, l),
                        z &&
                            eu.default.track(ej.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: ej.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: K,
                                location_stack: t,
                            }));
                else {
                    if ((0, ed.Ir)(F, e, s)) return;
                    f && V(e);
                }
            },
            [p, F, s, f, z, K, m, h],
        ),
        e0 = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case ec.uq.SOUND:
                        let n = ty[e?.category] ?? null,
                            l = e?.item.index;
                        return eQ(e.item.sound, null == n ? b : [...b, n], t?.shiftKey !== !0, l);
                    case ec.uq.ADD_SOUND:
                        return (o(), tf(e.item.guild.id));
                }
            },
            [b, eQ, o],
        ),
        e1 = i.useCallback(
            (e, n, i, a, o) => {
                let u = eH[i.sectionIndex],
                    c = f && e5(u.categoryInfo, B, t) && eK,
                    d = Y && u.categoryInfo.type === ec.Cx.FAVORITES;
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        className: r()(tE.a, { [tE.uL]: c }),
                        children: e.map((e, t) => {
                            let n =
                                    e.item.type === ec.uq.SOUND &&
                                    e.category === ec.Cx.FAVORITES &&
                                    e.item.index === u.items.length - 1,
                                r =
                                    e.item.type === ec.uq.SOUND
                                        ? `sound-${e.item.sound.soundId}`
                                        : `add-sound-${e.item.guild.id}`;
                            return (0, l.jsx)(
                                tC,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eJ ? e$ : !W,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: b,
                                        enableFavoritesDragAndDrop: d,
                                        isLastFavoriteSound: n,
                                        onFavoriteSoundDrop: eo,
                                        disableActiveStyles: d && q,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: p,
                                    getItemProps: a,
                                    onSelectItem: e0,
                                    onItemMouseEnter: o,
                                    buttonOverlay: I,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: f,
                                    inExpressionPicker: N,
                                },
                                r,
                            );
                        }),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eH, f, B, t, p, e0, s, eJ, e$, W, b, I, eK, N, Y, eo, q],
        ),
        e2 = i.useCallback(
            (e, t) => {
                if (e <= 0 || !f) return !1;
                let n = eH[e],
                    l = eH[e - 1],
                    i = e5(n.categoryInfo, B, t),
                    s = e5(l.categoryInfo, B, t);
                return i && !s;
            },
            [eH, f, B],
        ),
        e8 = i.useCallback(() => {
            let e = g.A.getSoundById("3");
            null != e && V(e);
        }, []),
        e6 = i.useCallback(() => {
            let e = (0, G.Dd)(eO.PremiumTypes.TIER_2);
            return eG.intl.format(eG.t["tw/SSq"], { nitroTierName: e, onClick: e8 });
        }, [e8]),
        e7 = i.useCallback((e) => (e2(e, t) ? tI : 32), [t, e2]),
        e4 = i.useCallback(
            (e) => {
                let t = e === eH.length - 1;
                return ez && t ? 70 : eK && e === eW ? 20 : 0;
            },
            [eH.length, eK, ez, eW],
        ),
        e9 = i.useCallback(
            (e, t) => {
                let n = et && eH[e]?.categoryInfo.type !== ec.Cx.FAVORITES;
                return (0, l.jsx)("div", { className: r()({ [tE.YJ]: n }), children: t }, e);
            },
            [eH, et],
        ),
        te = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = f && e5(e.categoryInfo, B, t),
                    r = e2(n, t),
                    a = eq.has(i);
                return (0, l.jsx)(
                    tS,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            (eu.default.track(ej.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: ej.liQ.SOUNDBOARD_POPOUT },
                                tab: eY.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !a,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eX(i));
                        },
                        collapsed: a,
                        isSectionNitroLocked: s && eK,
                        showNitroDivider: r && eK,
                        canRenderFavoritesUpsell: Y && e.items.length > 1 && e.categoryInfo.type === ec.Cx.FAVORITES,
                    },
                    `header-${i}`,
                );
            },
            [eq, eX, t, e2, f, B, eK, Y],
        ),
        tt = i.useCallback(
            (e, t) => {
                let n = t === eH.length - 1,
                    i = t === eW;
                return ez && n
                    ? (0, l.jsx)("div", { className: r()(tE.Lk, { [tE.Ns]: i }) })
                    : eK && t === eW
                      ? (0, l.jsx)("div", { className: r()(tE.a3, { [tE.Ns]: i }) })
                      : null;
            },
            [eW, eK, ez, eH.length],
        ),
        tn = i.useCallback((e) => eV((0, eh.lG)(e, eP, F, s, b)), [s, F, eP, b]),
        tl = i.useCallback(
            (e) => {
                (0, R.L3)(e, async () => {
                    let { default: e } = await n.e("811562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: b, ...t });
                });
            },
            [b],
        ),
        ti = i.useCallback(
            () =>
                N
                    ? (0, l.jsx)(Q.Gq, {
                          renderPopout: () => (0, l.jsx)(Q.qn, {}),
                          tooltipText: eG.intl.string(eG.t["19lt24"]),
                          position: "top",
                          clickableClassName: r()(tE.Jm, tE.Zz),
                          children: (0, l.jsx)(T.H, { size: "md", color: "currentColor", className: tE.By }),
                      })
                    : (0, l.jsx)(_.D, {
                          tabIndex: 0,
                          className: tE.Jm,
                          onClick: tl,
                          "aria-label": eG.intl.string(eG.t.kbFsAD),
                          children: (0, l.jsx)(tN, { className: tE.By }),
                      }),
            [N, tl],
        ),
        ts = i.useCallback(
            (e) =>
                (0, l.jsx)(e3, {
                    soundboardListRef: e,
                    categories: eN,
                    shouldUpsellLockedCategories: eK,
                    listPadding: y,
                    guildId: t,
                    inExpressionPicker: N,
                }),
            [eN, y, eK, t, N],
        ),
        tr = i.useCallback(() => {
            let e = (0, X.qD)();
            return (0, G.LE)(e, eO.pe.TIER_2) ?? eG.intl.string(eG.t.pj0XBN);
        }, []),
        ta = i.useCallback(
            () =>
                ez
                    ? (0, l.jsx)(ee.d, {
                          showUpsell: eB,
                          text: e6(),
                          button: tr(),
                          buttonAnalyticsObject: { section: ej.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, l.jsx)(en.l, {
                              size: "sm",
                              className: tE.ij,
                              location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                              forceDarkTheme: !0,
                          }),
                      })
                    : null,
            [e6, tr, ez, eB],
        ),
        to = i.useCallback(
            (e) =>
                e?.item.type === ec.uq.SOUND
                    ? (0, l.jsx)(tc, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        tu = (0, E.bG)([es.A], () => es.A.getMediaSessionId());
    return (
        (0, M.A)({
            type: C.ImpressionTypes.POPOUT,
            name: C.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: j,
                guild_id: t,
                media_session_id: tu,
                available_custom_sounds_count: eD.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eD.lockedCustomSoundCount,
                favorite_sounds_count: eD.favoriteSoundCount,
                type: eR.c4.FULL_PICKER,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != U
                    ? (0, l.jsx)(el.A, {
                          title: eG.intl.string(N ? eG.t.rZEEvU : eG.t.jGDYF0),
                          description: eG.intl.string(N ? eG.t.ZPNG5A : eG.t["grL/hg"]),
                          analyticsLocationSection: ej.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eO.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...D, object: ej.ZSU.SOUNDBOARD_SOUND },
                              location_stack: O,
                              sku_id: G.Ay.getSkuIdForPremiumType(eO.PremiumTypes.TIER_2),
                          },
                          onClose: () => V(null),
                          onUpsellClicked: o,
                      })
                    : void 0,
                (0, l.jsx)($, {
                    categories: eH,
                    collapsedCategories: eq,
                    containerWidth: a,
                    store: P.LW,
                    onSelectItem: e0,
                    onSearchExpressions: tn,
                    hasSearchResults: eU.length > 0,
                    defaultSearchPlaceholder: eG.intl.string(eG.t.sKt3xS),
                    renderRow: e1,
                    renderSectionHeader: te,
                    renderSectionFooter: tt,
                    renderSection: e9,
                    renderCategoryList: ts,
                    renderHeaderAccessories: ti,
                    rowHeight: 48,
                    sectionHeaderHeight: e7,
                    sectionFooterHeight: e4,
                    itemNodeWidth: 150,
                    gridNavigatorId: Z,
                    renderEmptySearchState: tv,
                    renderInspector: to,
                    gridNotice: x,
                    renderHeader: S,
                    renderUpsell: ta,
                }),
            ],
        })
    );
}
var tj = n(70317);
function tb(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: s,
            onClose: A,
            onSelect: C,
            analyticsSource: E,
            suppressPlaySound: I,
            shouldValidateSelectedSound: y,
            shouldShowLockedSounds: S = !0,
            gridNotice: v,
            inExpressionPicker: N,
            soundButtonOverlay: _,
            listPadding: j,
            renderHeader: b,
            defaultSoundsOnly: T,
        } = e,
        { fetching: R, maybeFetchData: O } = {
            fetching: (0, h.bG)([g.A], () => g.A.isFetchingAnySounds()),
            maybeFetchData: i.useCallback(() => {
                (f.E7(), p.bW.loadIfNecessary());
            }, []),
        },
        { analyticsLocations: L } = (0, c.Ay)(u.A.SOUNDBOARD_POPOUT),
        { enabled: M } = (0, x.W)(t ?? "0", "SoundboardSoundPicker"),
        k = N ? void 0 : { height: 520 };
    return (
        i.useEffect(() => {
            O();
        }, [O]),
        i.useEffect(() => {
            N || (0, d.Ri)("");
        }, [N]),
        (0, l.jsx)(c.f5, {
            value: L,
            children: (0, l.jsxs)(a.l, {
                style: k,
                className: r()(tj.Nz, { [tj.Bg]: R, [tj.yV]: N }),
                children: [
                    null != t && n?.id != null && M ? (0, l.jsx)(m.A, { guildId: t, channelId: n.id }) : null,
                    R
                        ? (0, l.jsx)(o.y, {})
                        : (0, l.jsx)(t_, {
                              guildId: t,
                              channel: n,
                              onClose: A,
                              onSelect: C,
                              shouldValidateSelectedSound: y,
                              containerWidth: s,
                              suppressPlaySound: I,
                              shouldShowLockedSounds: S,
                              gridNotice: v,
                              soundButtonOverlay: _,
                              listPadding: j,
                              renderHeader: b,
                              defaultSoundsOnly: T,
                              inExpressionPicker: N,
                              analyticsSource: E,
                          }),
                ],
            }),
        })
    );
}
