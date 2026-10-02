n.d(t, { A: () => tj });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(305866),
    o = n(289873),
    u = n(793574),
    c = n(688810),
    d = n(151271),
    h = n(886109),
    m = n(702841),
    p = n(594061),
    f = n(796774),
    g = n(209932),
    x = n(714736);
n(30146);
var E = n(675816),
    S = n(562708),
    y = n(17928),
    C = n(27232),
    A = n(406810),
    b = n(111159),
    I = n(7689),
    v = n(369606),
    N = n(939249),
    T = n(297264),
    j = n(358618),
    k = n(983851),
    _ = n(442433),
    R = n(537652),
    w = n(212245),
    O = n(139286),
    L = n(915089),
    P = n(724511),
    M = n(850992),
    D = n(887695),
    V = n(435558),
    U = n(962125),
    W = n(158045),
    F = n(240864),
    B = n(212633);
let K = i.forwardRef(function (e, t) {
        let {
                categories: n,
                store: r,
                hasSearchResults: s,
                listPadding: a,
                renderRow: o,
                renderSection: u,
                renderSectionHeader: c,
                renderSectionFooter: h,
                renderInspector: m,
                renderEmptySearchState: p,
                rowCount: f,
                rowCountBySection: g,
                rowHeight: x,
                sectionHeaderHeight: E,
                sectionFooterHeight: S,
                renderUpsell: y,
                onScroll: C,
            } = e,
            A = i.useRef(!1),
            b = i.useRef(null),
            I = (0, d.RQ)((e) => e.searchQuery),
            v = r.useStore((e) => e.activeCategoryIndex),
            N = i.useMemo(
                () =>
                    n.map((e) =>
                        (0, W.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            T = (0, D.Fk)({
                activeCategoryIndex: v,
                isScrolling: A,
                listRef: b,
                onActiveCategoryIndexChange: r.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: I,
            }),
            j = i.useCallback(
                (e) => {
                    (T(e),
                        G({
                            listRef: b,
                            searchQuery: I,
                            nitroLockedSectionStates: N,
                            scrollTop: e,
                            sectionHeaderHeight: E,
                            sectionFooterHeight: S,
                        }),
                        C?.(e));
                },
                [T, I, N, E, S, C],
            );
        return (
            i.useEffect(() => {
                null != b.current && j(b.current.getScrollerNode()?.scrollTop ?? 0);
            }, [j, b]),
            (0, D.FV)({ searchQuery: I, activeCategoryIndex: v, listRef: b }),
            i.useImperativeHandle(
                t,
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
                className: B.i,
                children: [
                    I.length > 0 && !s && null != p
                        ? p()
                        : (0, l.jsx)(U.A, {
                              role: "none presentation",
                              listPadding: a,
                              onScroll: j,
                              renderRow: o,
                              renderSection: u,
                              renderSectionHeader: c,
                              renderSectionFooter: h,
                              rowCount: f,
                              rowCountBySection: g,
                              rowHeight: x,
                              sectionHeaderHeight: E,
                              sectionFooterHeight: S,
                              stickyHeaders: !0,
                              ref: b,
                          }),
                    y?.(),
                    m?.(),
                ],
            })
        );
    }),
    G = (0, V.throttle)(
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
            let a = (0, F.s)({
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
    );
var H = n(462180),
    z = n(602034),
    q = n(683438),
    Q = n(642232);
let $ = i.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: r,
            onKeyDown: s,
            gridNavigatorId: a,
            expressionsListRef: o,
            defaultSearchPlaceholder: u,
            emptySearchPlaceholder: c,
        } = e,
        h = i.useRef(null),
        [m, p] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], H.x),
        f = n.useStore((e) => e.searchPlaceholder),
        [g, x] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], H.x),
        E = i.useCallback(
            (e) => {
                (n.setActiveCategoryIndex("" === e ? 0 : M.Uk),
                    n.setInspectedExpressionPosition(0, 0),
                    n.setSearchPlaceholder(null),
                    (0, d.Ri)(e),
                    o.current?.scrollTo(0));
            },
            [o, n],
        ),
        S = i.useCallback(() => {
            E("");
        }, [E]);
    return (
        i.useImperativeHandle(t, () => ({ focus: () => h.current?.focus() })),
        i.useLayoutEffect(() => {
            p && h.current?.focus();
        }, [p]),
        (0, l.jsx)("div", {
            className: Q.i,
            children: (0, l.jsx)(q.I, {
                autoFocus: r,
                disabled: !r,
                query: m,
                ref: h,
                placeholder: null != f ? f : r || null == c ? u : c,
                onClear: S,
                onKeyDown: s,
                onChange: E,
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
var Z = n(904289);
function X(e) {
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
            renderEmptyState: p,
            renderRow: f,
            renderSection: g,
            renderSectionHeader: x,
            renderSectionFooter: E,
            renderInspector: S,
            renderEmptySearchState: y,
            renderCategoryList: C,
            renderHeaderAccessories: A,
            rowHeight: b,
            sectionHeaderHeight: I,
            sectionFooterHeight: v,
            itemNodeWidth: N,
            listPaddingRight: T,
            itemNodeMargin: j,
            listPadding: k,
            gridNavigatorId: _,
            gridNotice: R,
            renderHeader: w,
            renderUpsell: O,
        } = e,
        L = i.useRef(null),
        P = i.useRef(null),
        M = i.useRef(null),
        V = 0 === t.length,
        U = (0, d.RQ)((e) => e.searchQuery),
        W = s.useStore((e) => e.inspectedExpressionPosition),
        F = (0, D.oV)({ gridWrapperRef: L, containerWidth: r, showingEmptyState: V }),
        {
            expressionsGrid: B,
            rowCount: G,
            rowCountBySection: H,
            columnCounts: z,
            gutterWidth: q,
        } = (0, D.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: F,
            listPaddingRight: T,
            itemNodeWidth: N,
            itemNodeMargin: j,
        }),
        {
            getItemProps: Q,
            getRowProps: X,
            gridContainerProps: J,
            handleGridContainerKeyDown: Y,
            isUsingKeyboardNavigation: ee,
        } = (0, D.JZ)({
            columnCounts: z,
            expressionsListRef: P,
            expressionsGrid: B,
            onSelectItem: a,
            store: s,
            gridNavigatorId: _,
        }),
        et = i.useCallback(
            (e, t) =>
                f(
                    B[e],
                    X(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: q,
                        rowIndex: e,
                        totalRowCount: G,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => Q(e, t),
                    (t) => s.setInspectedExpressionPosition(t, e),
                ),
            [B, Q, X, q, ee, f, s, G],
        ),
        en = i.useCallback((e) => x?.(t[e], e), [t, x]),
        el = i.useCallback((e) => E?.(t[e], e), [t, E]),
        ei = i.useCallback(() => S?.(B?.[W.rowIndex]?.[W.columnIndex]), [B, W.columnIndex, W.rowIndex, S]);
    (i.useEffect(() => {
        o(U);
    }, [o, U]),
        i.useEffect(() => {
            s.setBottomPosition(L.current?.getBoundingClientRect().bottom ?? null);
        }),
        i.useEffect(() => s.resetStoreState, [s.resetStoreState]),
        i.useLayoutEffect(() => {
            M.current?.focus();
        }, []));
    let er = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)($, {
                ref: M,
                store: s,
                hasSendableExpressions: !0,
                onKeyDown: Y,
                expressionsListRef: P,
                gridNavigatorId: _,
                defaultSearchPlaceholder: h,
                emptySearchPlaceholder: m,
            }),
            A?.(),
        ],
    });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != w ? w(er) : (0, l.jsxs)("div", { className: Z.wx, children: [" ", er, " "] }),
            V && null != p
                ? p(Z.p$)
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          C(P),
                          null != R && (0, l.jsx)("div", { className: Z.Eb, children: R }),
                          (0, l.jsx)("div", {
                              ref: L,
                              className: Z.AD,
                              id: _,
                              ...J,
                              children:
                                  null != F
                                      ? (0, l.jsx)(K, {
                                            categories: t,
                                            ref: P,
                                            store: s,
                                            hasSearchResults: c,
                                            listPadding: k,
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
                                            renderUpsell: O,
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
    Y = n(319993),
    ee = n(202639),
    et = n(414872),
    en = n(285373),
    el = n(609178),
    ei = n(885386),
    er = n(763827),
    es = n(287809),
    ea = n(977997),
    eo = n(147925),
    eu = n(174459),
    ec = n(807348),
    ed = n(813564),
    eh = n(699840),
    em = n(147472);
n(321073);
var ep = n(964486),
    ef = n(931991),
    eg = n(734057),
    ex = n(71393),
    eE = n(576705),
    eS = n(309010),
    ey = n(473145),
    eC = n(636537),
    eA = n(73153),
    eb = n(463347),
    eI = n(125831),
    ev = n(945810);
let eN = (0, ev.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
(0, ev.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds-mobile",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
var eT = n(652215),
    ej = n(805143),
    ek = n(194567),
    e_ = n(980504),
    eR = n(202541);
function ew(e, t) {
    return (null != t && (e = t(e)), e.map((e, t) => ({ type: ec.uq.SOUND, sound: e, index: t })));
}
function eO(e) {
    let { sections: t, guildIds: n, allSounds: l, potentialSoundIdsForSection: i, sectionType: r, sortSoundsFn: s } = e,
        a = {};
    for (let e of [...n, "0"])
        for (let t of l.get(e) ?? []) null != i.find((e) => e === t.soundId) && (a[t.soundId] = t);
    let o = [];
    for (let e of i) {
        let t = a[e];
        null != t && o.push(t);
    }
    let u = ew(o, s);
    u.length > 0 && t.push({ key: r, categoryInfo: { type: r }, items: u });
}
function eL(e, t, n) {
    let { allSounds: l, topSoundIds: i } = n,
        r = {};
    for (let e of l.get(t.id) ?? []) r[e.soundId] = e;
    let s = [];
    for (let e of i) {
        let t = r[e];
        null != t && s.push(t);
    }
    0 !== s.length &&
        e.push({ key: ec.Cx.TOP_SOUNDS, categoryInfo: { type: ec.Cx.TOP_SOUNDS, guild: t }, items: ew(s) });
}
function eP(e, t) {
    let n = t.get("0") ?? e_.pD;
    e.push({ key: ec.Cx.DEFAULTS, categoryInfo: { type: ec.Cx.DEFAULTS }, items: ew(n, ek.U9) });
}
var eM = n(554146),
    eD = n(43105),
    eV = n(131607),
    eU = n(49999),
    eW = n(375708);
function eF(e) {
    let { targetElementRef: t } = e,
        { allowReordering: n } = eh.q.useConfig({ location: "SoundboardFavoritesCoachmark" }),
        [i, r] = (0, eV.kn)(n ? [eM.M.SOUNDBOARD_FAVORITES_ORDERING_COACHMARK] : [], void 0, !0);
    return i !== eM.M.SOUNDBOARD_FAVORITES_ORDERING_COACHMARK
        ? null
        : (0, l.jsx)(eD.A, {
              targetElementRef: t,
              onRequestClose: function (e) {
                  (("user:escape" === e || "user:explicit" === e) && r(eU.i.DISMISS), r(eU.i.AUTO_DISMISS));
              },
              title: eW.intl.string(eW.t.KFcQy8),
              body: eW.intl.string(eW.t["P/1x7s"]),
              badge: "beta",
          });
}
var eB = n(837381),
    eK = n(866665),
    eG = n(713517),
    eH = n(88218),
    ez = n(407698),
    eq = n(941971),
    eQ = n(698279),
    e$ = n(120052);
let eZ = [8, 8, 8, 8],
    eX = "soundboard_guild_",
    { itemIdForIndex: eJ } = (0, eH.J)(eX);
function eY(e) {
    let { children: t, className: n, isSelected: r, listItemProps: s, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, eG.A)(o);
    return (0, l.jsxs)(N.D, {
        innerRef: o,
        ...s,
        className: n,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: e$.a$,
                children: (0, l.jsx)(eq.A, { hovered: u, selected: r, size: "small" }),
            }),
            t,
        ],
    });
}
function e0(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: r } = e;
    return (0, l.jsx)(eY, {
        className: s()(e$.Yl, { [e$.wH]: n }),
        isSelected: n,
        listItemProps: r,
        onClick: i,
        children: (0, l.jsx)(t, { className: e$.xi, color: "currentColor" }),
    });
}
function e1(e, t, n, i, r) {
    switch (e.categoryInfo.type) {
        case ec.Cx.FAVORITES:
            return (0, l.jsx)(e0, { icon: C.StarIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ec.Cx.FREQUENTLY_USED:
            return (0, l.jsx)(e0, { icon: A.ClockIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ec.Cx.GUILD:
            return (0, l.jsx)(
                eY,
                {
                    className: e$.L1,
                    isSelected: n,
                    listItemProps: i,
                    onClick: t,
                    children: (0, l.jsx)(P.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: r }),
                },
                e.key,
            );
        case ec.Cx.DEFAULTS:
            return (0, l.jsx)(e0, { icon: b.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ec.Cx.TOP_SOUNDS:
            return (0, l.jsx)(e0, { icon: v.TrophyIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function e2(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: r, isNitroLocked: s } = e,
        a = (0, eB.rm)(eJ(n));
    return t.categoryInfo.type === ec.Cx.GUILD
        ? (0, l.jsx)(ez.Q, { guild: t.categoryInfo.guild, children: e1(t, i, r, a, s) })
        : (0, l.jsx)(eK.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case ec.Cx.FAVORITES:
                          return eW.intl.string(eW.t.k8fFjp);
                      case ec.Cx.FREQUENTLY_USED:
                          return eW.intl.string(eW.t["+cGVV6"]);
                      case ec.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case ec.Cx.DEFAULTS:
                          return eW.intl.string(eW.t.Rtvk9X);
                      case ec.Cx.TOP_SOUNDS:
                          return eW.intl.formatToPlainString(eW.t.GXs41w, { guildName: e.categoryInfo.guild.name });
                  }
              })(t),
              position: "right",
              align: "center",
              children: e1(t, i, r, a, s),
          });
}
function e5(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: r,
            listPadding: a = eZ,
            guildId: o,
            inExpressionPicker: u,
        } = e,
        c = i.useRef(null),
        d = (0, y.bG)([es.default], () => es.default.getCurrentUser()),
        h = (0, W.TW)(d, eR.PremiumTypes.TIER_2),
        m = i.useCallback(
            (e, t, n, i) => {
                let s = r && e8(e.categoryInfo, h, o);
                return (0, l.jsx)(e2, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        (eu.default.track(eT.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eT.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eQ.kx.SOUNDBOARD,
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
    return (0, l.jsx)(eH.A, {
        className: s()(u ? e$.HZ : e$.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: M.LW,
        categories: n,
        listPadding: a,
        renderCategoryListItem: m,
        rowCount: n.length,
        categoryHeight: 40,
        navId: "soundboard-picker-categories",
        itemIdPrefix: eX,
    });
}
function e8(e, t, n) {
    return (null == n && e.type === ec.Cx.GUILD && !t) || (e.type === ec.Cx.GUILD && e.guild.id !== n && !t);
}
var e3 = n(191023),
    e6 = n(192308),
    e7 = n(28863),
    e4 = n(695366),
    e9 = n(834730),
    te = n(789645),
    tt = n(565645),
    tn = n(775602),
    tl = n(826673),
    ti = n(182922),
    tr = n(532624),
    ts = n(531685),
    ta = n(723702),
    to = n(350535),
    tu = n(115023);
function tc(e) {
    let { soundboardSound: t, closePicker: i } = e,
        r = (0, d.RQ)((e) => e.searchQuery),
        s = (0, m.bG)([g.A], () => null != t && g.A.isFavoriteSound(t.soundId)),
        a = (0, m.bG)([ex.A], () => ex.A.getGuild(t?.guildId)),
        o = (0, m.bG)([tn.Ay], () => tn.Ay.useReducedMotion, []),
        u = (0, m.bG)([ts.A], () => ts.A.isFocused()),
        c = (0, m.bG)([tr.Ay], () => tr.Ay.getKeybindForAction(eT.hCu.SOUNDBOARD_HOLD));
    if (null != t && r.length > 0)
        return (0, l.jsx)(ti.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(tt.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: tu.Zg })
                    : (0, l.jsx)(e3.ImageIcon, { size: "md", color: "currentColor", className: tu.Zg }),
            graphicSecondary: null != a ? (0, l.jsx)(P.A, { guild: a, shouldAnimate: !o && u }) : null,
            titlePrimary: t.name,
            titleSecondary: a?.name,
            isFavorite: s,
        });
    function h() {
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
    let p = (0, tl.k8)(eM.M.SOUNDBOARD_KEYBIND_TIP),
        f =
            null != c && (0, ta.isWindows)() && !p
                ? eW.intl.format(eW.t.udMTth, {
                      keybind: (0, to.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(e7.Anchor, { onClick: h, children: e }, t),
                  })
                : null;
    return null == f
        ? null
        : (0, l.jsxs)("div", {
              className: tu.g,
              children: [
                  (0, l.jsx)(e4.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: tu.QW }),
                  (0, l.jsx)(e9.E, { variant: "text-sm/medium", color: "text-default", className: tu.L5, children: f }),
                  (0, l.jsx)(N.D, {
                      className: tu.b,
                      onClick: function () {
                          return (0, tl.Dr)(eM.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, l.jsx)(te.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var td = n(817232),
    th = n(890856),
    tm = n(307301),
    tp = n(468689);
function tf(e) {
    (tp.default.open(e, eT.BEX.SOUNDBOARD),
        (0, e6.openModalLazy)(async () => {
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
var tg = n(948611),
    tx = n(308078);
function tE(e) {
    let { guild: t, focused: n, onSelectItem: i, ...r } = e,
        { canCreateExpressions: a } = (0, ef.nr)(t);
    return (0, l.jsx)(eK.m, {
        text: eW.intl.string(eW.t["fHo+z1"]),
        shouldShow: !a,
        children: (0, l.jsx)("li", {
            className: tg.H,
            children: (0, l.jsxs)(th.s, {
                ...r,
                "aria-label": eW.intl.formatToPlainString(eW.t.c1qVYh, { guildName: t.name }),
                className: s()(tx.n4, { [tx.in]: n, [tx.r9]: !a }),
                onClick: () => (null != i ? i() : tf(t.id)),
                children: [
                    (0, l.jsx)(tm.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(e9.E, {
                        variant: "text-xs/semibold",
                        color: a ? "currentColor" : "text-muted",
                        children: eW.intl.string(eW.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function tS(e) {
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
            inExpressionPicker: p,
        } = e,
        f = M.LW.useStore((e) => e.inspectedExpressionPosition),
        g = `${l}-${r}`,
        x = s && f.rowIndex === l && f.columnIndex === r;
    switch (t.item.type) {
        case ec.uq.SOUND:
            return (0, i.createElement)(td.Ay, {
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
                isSoundmoji: !0 === p,
            });
        case ec.uq.ADD_SOUND:
            return (0, i.createElement)(tE, {
                ...o(r),
                key: g,
                guild: t.item.guild,
                focused: x,
                onSelectItem: () => u(t),
            });
    }
}
var ty = n(635799);
let tC = 32 + et.kg - 8,
    tA = {
        [ec.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [ec.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [ec.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [ec.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
        [ec.Cx.FREQUENTLY_USED]: u.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
        [ec.Cx.TOP_SOUNDS]: u.A.SOUNDBOARD_TOP_SOUNDS_SECTION,
    };
function tb(e) {
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
            o && (0, l.jsx)(et.Ay, { className: ty.yH }),
            (0, l.jsx)("div", {
                className: s()(ty.hd, { [ty.Jb]: a, [ty.VD]: a }),
                children: (0, l.jsx)(N.D, {
                    className: ty.bV,
                    onClick: r,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: ty.M2,
                        ref: u ? c : void 0,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case ec.Cx.FAVORITES:
                                        return (0, l.jsx)(C.StarIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: ty.nr,
                                        });
                                    case ec.Cx.FREQUENTLY_USED:
                                        return (0, l.jsx)(A.ClockIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: ty.nr,
                                        });
                                    case ec.Cx.GUILD:
                                        return (0, l.jsx)(P.A, { guild: t.guild, height: 16, width: 16 });
                                    case ec.Cx.DEFAULTS:
                                        return (0, l.jsx)(b.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: ty.nr,
                                        });
                                    case ec.Cx.SEARCH:
                                        return (0, l.jsx)(I.MagnifyingGlassIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: ty.nr,
                                        });
                                    case ec.Cx.TOP_SOUNDS:
                                        return (0, l.jsx)(v.TrophyIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: ty.nr,
                                        });
                                }
                            })(),
                            (0, l.jsx)(T.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: ty.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case ec.Cx.FAVORITES:
                                            return eW.intl.string(eW.t.k8fFjp);
                                        case ec.Cx.FREQUENTLY_USED:
                                            return eW.intl.string(eW.t["+cGVV6"]);
                                        case ec.Cx.GUILD:
                                            return t.guild.name;
                                        case ec.Cx.DEFAULTS:
                                            return eW.intl.string(eW.t.Rtvk9X);
                                        case ec.Cx.SEARCH:
                                            return eW.intl.string(eW.t["zkoeq/"]);
                                        case ec.Cx.TOP_SOUNDS:
                                            return eW.intl.formatToPlainString(eW.t.GXs41w, {
                                                guildName: t.guild.name,
                                            });
                                    }
                                })(),
                            }),
                            (0, l.jsx)(eo.A, {
                                className: ty.nr,
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
function tI() {
    return (0, l.jsx)(R.A, { message: eW.intl.string(eW.t.bgDdNK) });
}
function tv(e) {
    let { className: t } = e,
        n = (0, y.bG)([g.A], () => g.A.isSoundboardVolumeMuted()) ? j._ : k.H;
    return (0, l.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function tN(e) {
    let {
            guildId: t,
            channel: r,
            containerWidth: a,
            onClose: o,
            onSelect: h,
            shouldValidateSelectedSound: m = !1,
            suppressPlaySound: p = !1,
            shouldShowLockedSounds: f = !0,
            gridNotice: x,
            soundButtonOverlay: C,
            listPadding: A,
            renderHeader: b,
            defaultSoundsOnly: I = !1,
            inExpressionPicker: v,
            analyticsSource: T,
        } = e,
        { analyticsLocations: j } = (0, c.Ay)(),
        { analyticsLocations: R } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: P } = (0, w.p)(),
        D = i.useMemo(() => ({ ...P, section: eT.JJy.SOUNDBOARD_SOUND_PICKER }), [P]),
        [V, U] = i.useState(null),
        F = (0, y.bG)([es.default], () => es.default.getCurrentUser()),
        B = (0, W.TW)(F, eR.PremiumTypes.TIER_2),
        K = (0, y.bG)([ea.A], () => ea.A.getVoiceState(t, F?.id ?? eT.dJq)),
        G = K?.selfDeaf || K?.mute || K?.suppress,
        H = (0, d.RQ)((e) => e.searchQuery),
        z = null != H && "" !== H,
        q = (0, L.GV)(),
        { allowReordering: Q } = eh.q.useConfig({ location: "SoundboardSoundGrid" }),
        [$, Z] = i.useState(!1),
        { isDraggingFavoriteSound: et } = (0, E.V)((e) => ({
            isDraggingFavoriteSound: e.isDragging() && e.getItemType() === e_.Tj,
        })),
        eo = i.useCallback(() => {
            Z(!0);
        }, []);
    i.useEffect(() => {
        if ($)
            return (
                window.addEventListener("mousemove", e),
                () => {
                    window.removeEventListener("mousemove", e);
                }
            );
        function e() {
            Z(!1);
        }
    }, [$]);
    let {
            categories: ev,
            availableSounds: eM,
            soundCounts: eD,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = (0, y.bG)([es.default], () => es.default.getCurrentUser()),
                r = W.Ay.isPremium(l, eR.PremiumTypes.TIER_2),
                [s, a, o, u] = (0, y.yK)([g.A], () => [
                    g.A.getSounds(),
                    g.A.getFavorites(),
                    g.A.getFrequentlyUsedSoundIds(),
                    g.A.isFetching(),
                ]),
                c = (0, ek.IJ)(),
                { sortOrder: d } = eh.q.useConfig({ location: "useSoundGrid" }),
                h = (0, ej.Y)(e, !1),
                m = (0, y.yK)([ex.A], () => {
                    let e = [];
                    return (
                        h.forEach((t) => {
                            let n = ex.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                p = W.Ay.canUseSoundboardEverywhere(l),
                f = (0, y.bG)([ex.A], () => ex.A.getGuild(e?.guild_id)),
                x = (0, y.bG)(
                    [eE.A],
                    () => {
                        let { canCreateExpressions: e } = (0, ef.ie)(f);
                        return e;
                    },
                    [f],
                ),
                E = i.useMemo(() => o.filter((e) => !a.has(e)).slice(0, 3), [o, a]),
                S = (0, y.bG)([eS.Ay, eg.A, ex.A], () => {
                    let e = eS.Ay.getVoiceChannelId(),
                        t = null != e ? eg.A.getChannel(e) : null;
                    return t?.guild_id != null ? ex.A.getGuild(t.guild_id) : void 0;
                }),
                { enabled: C, topSoundsFirst: A } = eN.getConfig({ location: "useSoundGrid" });
            (0, ep.Ay)(() => {
                C &&
                    (function (e) {
                        var t;
                        if (
                            null == e ||
                            null == es.default.getCurrentUser() ||
                            !eN.getConfig({ location: "maybeFetchTopSoundboardSoundsByGuild" }).enabled
                        )
                            return;
                        let n = g.A.getTopSoundboardSoundsMetadata(e);
                        if (null != n) {
                            let { topSoundsTTL: e } = n;
                            if (null == e || Date.now() < e) return;
                        }
                        eI.A.getIsFetching(e) ||
                            ((t = e),
                            (0, eb.tZ)(t) ||
                                (eA.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: t }),
                                eC.Bo.get({
                                    url: eT.Rsh.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(t),
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                }).then(
                                    (e) =>
                                        eA.h.dispatch({
                                            type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS",
                                            guildId: t,
                                            topSoundsMetadata: e.body.items
                                                .map((e) => ({ soundId: e.sound_id, rank: e.sound_rank }))
                                                .sort((e, t) => e.rank - t.rank),
                                        }),
                                    () => eA.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId: t }),
                                )));
                    })(S?.id);
            });
            let b = (0, y.yK)([g.A], () => g.A.getTopSoundboardSoundIds(S?.id)),
                I = i.useMemo(() => b.slice(0, 3), [b]);
            return i.useMemo(() => {
                let e = 0,
                    l = 0,
                    i = [];
                if (n)
                    return (
                        eP(i, s),
                        {
                            categories: i,
                            availableSounds: s.get("0") ?? e_.pD,
                            isFetching: u,
                            soundCounts: {
                                favoriteSoundCount: 0,
                                unlockedCustomSoundCount: 0,
                                lockedCustomSoundCount: 0,
                            },
                        }
                    );
                C && null != S && A && eL(i, S, { allSounds: s, topSoundIds: I });
                let o = "favorite-date" === d ? ek.XP : ek.U9;
                return (
                    eO({
                        sections: i,
                        guildIds: h,
                        allSounds: s,
                        potentialSoundIdsForSection: Array.from(a),
                        sectionType: ec.Cx.FAVORITES,
                        sortSoundsFn: o,
                    }),
                    E.length > 0 &&
                        eO({
                            sections: i,
                            guildIds: h,
                            allSounds: s,
                            potentialSoundIdsForSection: E,
                            sectionType: ec.Cx.FREQUENTLY_USED,
                        }),
                    C && null != S && !A && eL(i, S, { allSounds: s, topSoundIds: I }),
                    void 0 !== f &&
                        (function (e, t, n) {
                            let {
                                    currentGuildHasAddPermissions: l,
                                    allSounds: i,
                                    filterOutEmptyCurrentGuild: r,
                                    sortSoundsFn: s,
                                } = n,
                                a = i.get(t.id) ?? [],
                                o = ew(a, s),
                                u = a.length < (0, ey.fA)(t) && l,
                                c = 0 === o.length;
                            ((u || c) && !r && o.push({ type: ec.uq.ADD_SOUND, guild: t }),
                                (r && c) ||
                                    e.push({
                                        categoryInfo: { type: ec.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                        key: t.id,
                                        items: o,
                                    }));
                        })(i, f, {
                            currentGuildHasAddPermissions: x,
                            allSounds: s,
                            filterOutEmptyCurrentGuild: t,
                            sortSoundsFn: c,
                        }),
                    p || eP(i, s),
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
                            let n = ew(i.get(e.id) ?? [], s);
                            n.length > 0 &&
                                t.push({
                                    categoryInfo: { type: ec.Cx.GUILD, guild: e, isNitroLocked: !r },
                                    key: e.id,
                                    items: n,
                                });
                        }
                    })({ sections: i, guilds: m, currentGuildId: f?.id, allSounds: s, hasNitro: r, sortSoundsFn: c }),
                    p && eP(i, s),
                    i.forEach((t) => {
                        t.categoryInfo.type === ec.Cx.GUILD &&
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
            }, [h, s, a, !0, f, x, t, p, m, n, u, r, c, E, S, I, C, A, d]);
        })(r, void 0, I),
        [eV, eU] = i.useState([]),
        eF = i.useMemo(
            () => (H.length > 0 ? [{ key: ec.Cx.SEARCH, categoryInfo: { type: ec.Cx.SEARCH }, items: ew(eV) }] : ev),
            [ev, H.length, eV],
        ),
        eB = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eK = i.useMemo(() => eF.filter((e) => e.items.length > 0), [eF]),
        eG = i.useMemo(
            () => eK.findLastIndex((e) => !!(0, W.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eK],
        ),
        eH = !B && f && -1 !== eG,
        ez = !B && f && -1 !== eG,
        eq = ei.b0.useSetting(),
        e$ = i.useMemo(() => new Set(eq), [eq]),
        eZ = null == r,
        eX = W.Ay.canUseCustomCallSounds(F),
        eJ = i.useCallback(
            (e) => {
                (e$.has(e) ? e$.delete(e) : e$.add(e), ei.b0.updateSetting(Array.from(e$)));
            },
            [e$],
        ),
        eY = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, ed.Ir)(F, e, r, !1);
                if (null != h && m && i) h(e, n);
                else if (!p && i && (0, ed.Au)(r))
                    ((0, ed.Ak)(e, r?.id ?? eT.dJq, t, l),
                        z &&
                            eu.default.track(eT.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eT.I4_.SOUNDBOARD,
                                channel_id: r?.id,
                                query: H,
                                location_stack: t,
                            }));
                else {
                    if ((0, ed.Ir)(F, e, r)) return;
                    f && U(e);
                }
            },
            [p, F, r, f, z, H, h, m],
        ),
        e0 = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case ec.uq.SOUND:
                        let n = tA[e?.category] ?? null,
                            l = e?.item.index;
                        return eY(e.item.sound, null == n ? j : [...j, n], t?.shiftKey !== !0, l);
                    case ec.uq.ADD_SOUND:
                        return (o(), tf(e.item.guild.id));
                }
            },
            [j, eY, o],
        ),
        e1 = i.useCallback(
            (e, n, i, a, o) => {
                let u = eK[i.sectionIndex],
                    c = f && e8(u.categoryInfo, B, t) && eH,
                    d = Q && u.categoryInfo.type === ec.Cx.FAVORITES;
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        className: s()(ty.a, { [ty.uL]: c }),
                        children: e.map((e, t) => {
                            let n =
                                    e.item.type === ec.uq.SOUND &&
                                    e.category === ec.Cx.FAVORITES &&
                                    e.item.index === u.items.length - 1,
                                s =
                                    e.item.type === ec.uq.SOUND
                                        ? `sound-${e.item.sound.soundId}`
                                        : `add-sound-${e.item.guild.id}`;
                            return (0, l.jsx)(
                                tS,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: r,
                                        interactive: eZ ? eX : !G,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: j,
                                        enableFavoritesDragAndDrop: d,
                                        isLastFavoriteSound: n,
                                        onFavoriteSoundDrop: eo,
                                        disableActiveStyles: d && $,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: p,
                                    getItemProps: a,
                                    onSelectItem: e0,
                                    onItemMouseEnter: o,
                                    buttonOverlay: C,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: f,
                                    inExpressionPicker: v,
                                },
                                s,
                            );
                        }),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eK, f, B, t, p, e0, r, eZ, eX, G, j, C, eH, v, Q, eo, $],
        ),
        e2 = i.useCallback(
            (e, t) => {
                if (e <= 0 || !f) return !1;
                let n = eK[e],
                    l = eK[e - 1],
                    i = e8(n.categoryInfo, B, t),
                    r = e8(l.categoryInfo, B, t);
                return i && !r;
            },
            [eK, f, B],
        ),
        e3 = i.useCallback(() => {
            let e = g.A.getSoundById("3");
            null != e && U(e);
        }, []),
        e6 = i.useCallback(() => {
            let e = (0, W.Dd)(eR.PremiumTypes.TIER_2);
            return eW.intl.format(eW.t["tw/SSq"], { nitroTierName: e, onClick: e3 });
        }, [e3]),
        e7 = i.useCallback((e) => (e2(e, t) ? tC : 32), [t, e2]),
        e4 = i.useCallback(
            (e) => {
                let t = e === eK.length - 1;
                return ez && t ? 70 : eH && e === eG ? 20 : 0;
            },
            [eK.length, eH, ez, eG],
        ),
        e9 = i.useCallback(
            (e, t) => {
                let n = et && eK[e]?.categoryInfo.type !== ec.Cx.FAVORITES;
                return (0, l.jsx)("div", { className: s()({ [ty.YJ]: n }), children: t }, e);
            },
            [eK, et],
        ),
        te = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    r = f && e8(e.categoryInfo, B, t),
                    s = e2(n, t),
                    a = e$.has(i);
                return (0, l.jsx)(
                    tb,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            (eu.default.track(eT.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eT.liQ.SOUNDBOARD_POPOUT },
                                tab: eQ.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !a,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eJ(i));
                        },
                        collapsed: a,
                        isSectionNitroLocked: r && eH,
                        showNitroDivider: s && eH,
                        canRenderFavoritesUpsell: Q && e.items.length > 1 && e.categoryInfo.type === ec.Cx.FAVORITES,
                    },
                    `header-${i}`,
                );
            },
            [e$, eJ, t, e2, f, B, eH, Q],
        ),
        tt = i.useCallback(
            (e, t) => {
                let n = t === eK.length - 1,
                    i = t === eG;
                return ez && n
                    ? (0, l.jsx)("div", { className: s()(ty.Lk, { [ty.Ns]: i }) })
                    : eH && t === eG
                      ? (0, l.jsx)("div", { className: s()(ty.a3, { [ty.Ns]: i }) })
                      : null;
            },
            [eG, eH, ez, eK.length],
        ),
        tn = i.useCallback((e) => eU((0, em.lG)(e, eM, F, r, j)), [r, F, eM, j]),
        tl = i.useCallback(
            (e) => {
                (0, _.L3)(e, async () => {
                    let { default: e } = await n.e("811562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: j, ...t });
                });
            },
            [j],
        ),
        ti = i.useCallback(
            () =>
                v
                    ? (0, l.jsx)(Y.Gq, {
                          renderPopout: () => (0, l.jsx)(Y.qn, {}),
                          tooltipText: eW.intl.string(eW.t["19lt24"]),
                          position: "top",
                          clickableClassName: s()(ty.Jm, ty.Zz),
                          children: (0, l.jsx)(k.H, { size: "md", color: "currentColor", className: ty.By }),
                      })
                    : (0, l.jsx)(N.D, {
                          tabIndex: 0,
                          className: ty.Jm,
                          onClick: tl,
                          "aria-label": eW.intl.string(eW.t.kbFsAD),
                          children: (0, l.jsx)(tv, { className: ty.By }),
                      }),
            [v, tl],
        ),
        tr = i.useCallback(
            (e) =>
                (0, l.jsx)(e5, {
                    soundboardListRef: e,
                    categories: ev,
                    shouldUpsellLockedCategories: eH,
                    listPadding: A,
                    guildId: t,
                    inExpressionPicker: v,
                }),
            [ev, A, eH, t, v],
        ),
        ts = i.useCallback(() => {
            let e = (0, J.qD)();
            return (0, W.LE)(e, eR.pe.TIER_2) ?? eW.intl.string(eW.t.pj0XBN);
        }, []),
        ta = i.useCallback(
            () =>
                ez
                    ? (0, l.jsx)(ee.d, {
                          showUpsell: eB,
                          text: e6(),
                          button: ts(),
                          buttonAnalyticsObject: { section: eT.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, l.jsx)(en.l, {
                              size: "sm",
                              className: ty.ij,
                              location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                              forceDarkTheme: !0,
                          }),
                      })
                    : null,
            [e6, ts, ez, eB],
        ),
        to = i.useCallback(
            (e) =>
                e?.item.type === ec.uq.SOUND
                    ? (0, l.jsx)(tc, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        tu = (0, y.bG)([er.A], () => er.A.getMediaSessionId());
    return (
        (0, O.A)({
            type: S.ImpressionTypes.POPOUT,
            name: S.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: T,
                guild_id: t,
                media_session_id: tu,
                available_custom_sounds_count: eD.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eD.lockedCustomSoundCount,
                favorite_sounds_count: eD.favoriteSoundCount,
                type: e_.c4.FULL_PICKER,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != V
                    ? (0, l.jsx)(el.A, {
                          title: eW.intl.string(v ? eW.t.rZEEvU : eW.t.jGDYF0),
                          description: eW.intl.string(v ? eW.t.ZPNG5A : eW.t["grL/hg"]),
                          analyticsLocationSection: eT.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eR.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...D, object: eT.ZSU.SOUNDBOARD_SOUND },
                              location_stack: R,
                              sku_id: W.Ay.getSkuIdForPremiumType(eR.PremiumTypes.TIER_2),
                              voice_guild_id: er.A.getGuildId(),
                          },
                          onClose: () => U(null),
                          onUpsellClicked: o,
                      })
                    : void 0,
                (0, l.jsx)(X, {
                    categories: eK,
                    collapsedCategories: e$,
                    containerWidth: a,
                    store: M.LW,
                    onSelectItem: e0,
                    onSearchExpressions: tn,
                    hasSearchResults: eV.length > 0,
                    defaultSearchPlaceholder: eW.intl.string(eW.t.sKt3xS),
                    renderRow: e1,
                    renderSectionHeader: te,
                    renderSectionFooter: tt,
                    renderSection: e9,
                    renderCategoryList: tr,
                    renderHeaderAccessories: ti,
                    rowHeight: 48,
                    sectionHeaderHeight: e7,
                    sectionFooterHeight: e4,
                    itemNodeWidth: 150,
                    gridNavigatorId: q,
                    renderEmptySearchState: tI,
                    renderInspector: to,
                    gridNotice: x,
                    renderHeader: b,
                    renderUpsell: ta,
                }),
            ],
        })
    );
}
var tT = n(70317);
function tj(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: r,
            onClose: E,
            onSelect: S,
            analyticsSource: y,
            suppressPlaySound: C,
            shouldValidateSelectedSound: A,
            shouldShowLockedSounds: b = !0,
            gridNotice: I,
            inExpressionPicker: v,
            soundButtonOverlay: N,
            listPadding: T,
            renderHeader: j,
            defaultSoundsOnly: k,
        } = e,
        { fetching: _, maybeFetchData: R } = {
            fetching: (0, m.bG)([g.A], () => g.A.isFetchingAnySounds()),
            maybeFetchData: i.useCallback(() => {
                (f.E7(), p.bW.loadIfNecessary());
            }, []),
        },
        { analyticsLocations: w } = (0, c.Ay)(u.A.SOUNDBOARD_POPOUT),
        { enabled: O } = (0, x.W)(t ?? "0", "SoundboardSoundPicker"),
        L = v ? void 0 : { height: 520 };
    return (
        i.useEffect(() => {
            R();
        }, [R]),
        i.useEffect(() => {
            v || (0, d.Ri)("");
        }, [v]),
        (0, l.jsx)(c.f5, {
            value: w,
            children: (0, l.jsxs)(a.l, {
                style: L,
                className: s()(tT.Nz, { [tT.Bg]: _, [tT.yV]: v }),
                children: [
                    null != t && n?.id != null && O ? (0, l.jsx)(h.A, { guildId: t, channelId: n.id }) : null,
                    _
                        ? (0, l.jsx)(o.y, {})
                        : (0, l.jsx)(tN, {
                              guildId: t,
                              channel: n,
                              onClose: E,
                              onSelect: S,
                              shouldValidateSelectedSound: A,
                              containerWidth: r,
                              suppressPlaySound: C,
                              shouldShowLockedSounds: b,
                              gridNotice: I,
                              soundButtonOverlay: N,
                              listPadding: T,
                              renderHeader: j,
                              defaultSoundsOnly: k,
                              inExpressionPicker: v,
                              analyticsSource: y,
                          }),
                ],
            }),
        })
    );
}
