n.d(t, { A: () => tI });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(305866),
    o = n(289873),
    u = n(793574),
    c = n(688810),
    d = n(151271),
    h = n(120246),
    m = n(164636),
    f = n(594061),
    p = n(796774),
    g = n(209932);
n(30146);
var x = n(613412),
    E = n(855986),
    S = n(27232),
    y = n(406810),
    C = n(111159),
    A = n(7689),
    b = n(369606),
    I = n(939249),
    v = n(534514),
    N = n(805251),
    T = n(358618),
    k = n(983851),
    j = n(442433),
    _ = n(537652),
    R = n(212245),
    w = n(139286),
    O = n(520117),
    M = n(915089),
    L = n(724511),
    P = n(850992),
    D = n(887695),
    U = n(435558),
    V = n(962125),
    W = n(448645),
    B = n(240864),
    F = n(212633);
let G = (0, U.throttle)(
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
            let a = (0, B.s)({
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
            b = i.useRef(null),
            I = (0, d.RQ)((e) => e.searchQuery),
            v = n.useStore((e) => e.activeCategoryIndex),
            N = i.useMemo(
                () =>
                    t.map((e) =>
                        (0, W.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [t],
            ),
            T = (0, D.Fk)({
                activeCategoryIndex: v,
                isScrolling: A,
                listRef: b,
                onActiveCategoryIndexChange: n.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: I,
            }),
            k = i.useCallback(
                (e) => {
                    (T(e),
                        G({
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
                null != b.current && k(b.current.getScrollerNode()?.scrollTop ?? 0);
            }, [k, b]),
            (0, D.FV)({ searchQuery: I, activeCategoryIndex: v, listRef: b }),
            i.useImperativeHandle(
                C,
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
                className: F.i,
                children: [
                    I.length > 0 && !r && null != m
                        ? m()
                        : (0, l.jsx)(V.A, {
                              role: "none presentation",
                              listPadding: s,
                              onScroll: k,
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
var H = n(462180),
    z = n(602034),
    q = n(683438),
    $ = n(642232);
let Q = function (e) {
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
        [m, f] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], H.x),
        p = t.useStore((e) => e.searchPlaceholder),
        [g, x] = t.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], H.x),
        E = i.useCallback(
            (e) => {
                (t.setActiveCategoryIndex("" === e ? 0 : -1),
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
            className: $.i,
            children: (0, l.jsx)(q.I, {
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
                    ...(x ? { "aria-activedescendant": (0, z.Aq)(s, g.columnIndex, g.rowIndex) } : void 0),
                },
            }),
        })
    );
};
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
            renderEmptyState: f,
            renderRow: p,
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
            itemNodeMargin: k,
            listPadding: j,
            gridNavigatorId: _,
            gridNotice: R,
            renderHeader: w,
            renderUpsell: O,
        } = e,
        M = i.useRef(null),
        L = i.useRef(null),
        P = i.useRef(null),
        U = 0 === t.length,
        V = (0, d.RQ)((e) => e.searchQuery),
        W = s.useStore((e) => e.inspectedExpressionPosition),
        B = (0, D.oV)({ gridWrapperRef: M, containerWidth: r, showingEmptyState: U }),
        {
            expressionsGrid: F,
            rowCount: G,
            rowCountBySection: H,
            columnCounts: z,
            gutterWidth: q,
        } = (0, D.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: B,
            listPaddingRight: T,
            itemNodeWidth: N,
            itemNodeMargin: k,
        }),
        {
            getItemProps: $,
            getRowProps: X,
            gridContainerProps: Y,
            handleGridContainerKeyDown: J,
            isUsingKeyboardNavigation: ee,
        } = (0, D.JZ)({
            columnCounts: z,
            expressionsListRef: L,
            expressionsGrid: F,
            onSelectItem: a,
            store: s,
            gridNavigatorId: _,
        }),
        et = i.useCallback(
            (e, t) =>
                p(
                    F[e],
                    X(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: q,
                        rowIndex: e,
                        totalRowCount: G,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => $(e, t),
                    (t) => s.setInspectedExpressionPosition(t, e),
                ),
            [F, $, X, q, ee, p, s, G],
        ),
        en = i.useCallback((e) => x?.(t[e], e), [t, x]),
        el = i.useCallback((e) => E?.(t[e], e), [t, E]),
        ei = i.useCallback(() => S?.(F?.[W.rowIndex]?.[W.columnIndex]), [F, W.columnIndex, W.rowIndex, S]);
    (i.useEffect(() => {
        o(V);
    }, [o, V]),
        i.useEffect(() => {
            s.setBottomPosition(M.current?.getBoundingClientRect().bottom ?? null);
        }),
        i.useEffect(() => s.resetStoreState, [s.resetStoreState]),
        i.useLayoutEffect(() => {
            P.current?.focus();
        }, []));
    let er = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(Q, {
                ref: P,
                store: s,
                hasSendableExpressions: !0,
                onKeyDown: J,
                expressionsListRef: L,
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
            U && null != f
                ? f(Z.p$)
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          C(L, F),
                          null != R && (0, l.jsx)("div", { className: Z.Eb, children: R }),
                          (0, l.jsx)("div", {
                              ref: M,
                              className: Z.AD,
                              id: _,
                              ...Y,
                              children:
                                  null != B
                                      ? (0, l.jsx)(K, {
                                            categories: t,
                                            ref: L,
                                            store: s,
                                            hasSearchResults: c,
                                            listPadding: j,
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
var Y = n(89366),
    J = n(456086),
    ee = n(202639),
    et = n(414872),
    en = n(521440),
    el = n(335588),
    ei = n(253932),
    er = n(495867),
    es = n(287809),
    ea = n(977997),
    eo = n(147925),
    eu = n(129230),
    ec = n(994153),
    ed = n(807348),
    eh = n(458976),
    em = n(147472);
n(321073);
var ef = n(964486),
    ep = n(931991),
    eg = n(734057),
    ex = n(71393),
    eE = n(576705),
    eS = n(309010),
    ey = n(473145),
    eC = n(620632),
    eA = n(73153),
    eb = n(463347),
    eI = n(125831),
    ev = n(652215),
    eN = n(805143),
    eT = n(194567),
    ek = n(980504),
    ej = n(682901);
function e_(e, t) {
    return (null != t && (e = t(e)), e.map((e, t) => ({ type: ed.uq.SOUND, sound: e, index: t })));
}
function eR(e) {
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
function ew(e, t) {
    let n = t.get("0") ?? ek.pD;
    e.push({ key: ed.Cx.DEFAULTS, categoryInfo: { type: ed.Cx.DEFAULTS }, items: e_(n, eT.U9) });
}
var eO = n(258204),
    eM = n(340368),
    eL = n(837381),
    eP = n(866665),
    eD = n(521588),
    eU = n(713517),
    eV = n(318845),
    eW = n(407698),
    eB = n(941971),
    eF = n(698279),
    eG = n(792996),
    eK = n(120052);
let eH = [8, 8, 8, 8],
    ez = "soundboard_guild_",
    { itemIdForIndex: eq } = (0, eV.J)(ez);
function e$(e) {
    let { children: t, className: n, isSelected: r, listItemProps: s, onClick: a, ref: o, onFocus: u, ...c } = e,
        d = i.useRef(null),
        { isHoveringOrFocusing: h } = (0, eU.A)(d),
        m = i.useCallback(
            (e) => {
                ((d.current = e), "function" == typeof o ? o(e) : null != o && (o.current = e));
            },
            [o],
        );
    return (0, l.jsxs)(I.D, {
        innerRef: m,
        ...s,
        ...c,
        onFocus: (e) => {
            (s.onFocus(), u?.(e));
        },
        className: n,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: eK.a$,
                children: (0, l.jsx)(eB.A, { hovered: h, selected: r, size: "small" }),
            }),
            t,
        ],
    });
}
function eQ(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: r } = e;
    return (0, l.jsx)(e$, {
        className: s()(eK.Yl, { [eK.wH]: n }),
        isSelected: n,
        listItemProps: r,
        onClick: i,
        children: (0, l.jsx)(t, { className: eK.xi, color: "currentColor" }),
    });
}
function eZ(e, t, n, i, r, s) {
    switch (e.categoryInfo.type) {
        case ed.Cx.FAVORITES:
            return (0, l.jsx)(eQ, { icon: S.StarIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ed.Cx.FREQUENTLY_USED:
            return (0, l.jsx)(eQ, { icon: y.ClockIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ed.Cx.GUILD:
            return (0, l.jsxs)(
                e$,
                {
                    className: eK.L1,
                    isSelected: n,
                    listItemProps: i,
                    onClick: t,
                    children: [
                        (0, l.jsx)(L.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: r }),
                        s && (0, l.jsx)(eD.a, { bottom: -2, right: -2, showBlurpleTreatment: !0 }),
                    ],
                },
                e.key,
            );
        case ed.Cx.DEFAULTS:
            return (0, l.jsx)(eQ, { icon: C.ClydeIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ed.Cx.TOP_SOUNDS:
            return (0, l.jsx)(eQ, { icon: b.TrophyIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function eX(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: r, isNitroLocked: s, newSoundCount: a } = e,
        o = (0, eL.rm)(eq(n));
    return t.categoryInfo.type === ed.Cx.GUILD
        ? (0, l.jsx)(eW.Q, {
              guild: t.categoryInfo.guild,
              subtitle: a > 0 ? eG.intl.formatToPlainString(eG.t.uXsbSw, { count: a }) : void 0,
              children: eZ(t, i, r, o, s, a > 0),
          })
        : (0, l.jsx)(eP.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case ed.Cx.FAVORITES:
                          return eG.intl.string(eG.t.k8fFjp);
                      case ed.Cx.FREQUENTLY_USED:
                          return eG.intl.string(eG.t["+cGVV6"]);
                      case ed.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case ed.Cx.DEFAULTS:
                          return eG.intl.string(eG.t.Rtvk9X);
                      case ed.Cx.TOP_SOUNDS:
                          return eG.intl.formatToPlainString(eG.t.GXs41w, { guildName: e.categoryInfo.guild.name });
                  }
              })(t),
              position: "right",
              align: "center",
              children: eZ(t, i, r, o, s, !1),
          });
}
function eY(e) {
    let {
            soundboardListRef: t,
            soundsGrid: n,
            categories: r,
            shouldUpsellLockedCategories: a,
            listPadding: o = eH,
            guildId: u,
            inExpressionPicker: c,
            newSoundCountByGuildId: d,
            isNewSound: h,
            getSectionHeaderHeight: m,
        } = e,
        f = i.useRef(null),
        p = (0, E.bG)([es.default], () => es.default.getCurrentUser()),
        g = (0, W.TW)(p, ej.PremiumTypes.TIER_2),
        x = i.useCallback(
            (e) => {
                let { categoryInfo: l } = r[e] ?? {};
                if (l?.type !== ed.Cx.GUILD || d?.has(l.guild.id) !== !0) return 0;
                let i = l.guild.id,
                    s = n.findIndex((e) =>
                        e.some((e) => {
                            let { item: t, category: n } = e;
                            return n === ed.Cx.GUILD && t.type === ed.uq.SOUND && t.sound.guildId === i && h(t.sound);
                        }),
                    ),
                    a = t.current;
                if (-1 === s || null == a) return 0;
                let o = n[s][0].gridSectionIndex,
                    u = s - 3,
                    c = n[u]?.[0]?.gridSectionIndex === o,
                    f = a.getRowDescriptors(),
                    p = f[s],
                    g = c ? f[u] : null,
                    x = a.getSectionDescriptors()[o];
                if (null == p || null == x) return 0;
                let E = 0 === o ? 0 : x.offset.top,
                    S = p.offset.bottom - x.offset.top <= a.getListDimensions().height;
                return null == g || S ? 0 : (g.offset.top + g.offset.bottom) / 2 - m(o) - E;
            },
            [r, d, n, h, t, m],
        ),
        S = i.useCallback(
            (e, t, n, i) => {
                let r = a && eJ(e.categoryInfo, g, u);
                return (0, l.jsx)(eX, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        (eu.default.track(ev.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: ev.liQ.SOUNDBOARD_POPOUT },
                            guild_id: u ?? null,
                            num_expressions: e.items.length,
                            tab: eF.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n());
                    },
                    isSelected: i,
                    isNitroLocked: r,
                    newSoundCount: e.categoryInfo.type === ed.Cx.GUILD ? (d?.get(e.categoryInfo.guild.id) ?? 0) : 0,
                });
            },
            [u, a, g, d],
        );
    return (0, l.jsx)(eV.A, {
        className: s()(c ? eK.HZ : eK.jv),
        categoryListRef: f,
        expressionsListRef: t,
        store: P.LW,
        categories: r,
        listPadding: o,
        renderCategoryListItem: S,
        getScrollOffsetForCategory: x,
        rowCount: r.length,
        categoryHeight: 40,
        navId: "soundboard-picker-categories",
        itemIdPrefix: ez,
    });
}
function eJ(e, t, n) {
    return (null == n && e.type === ed.Cx.GUILD && !t) || (e.type === ed.Cx.GUILD && e.guild.id !== n && !t);
}
var e0 = n(554146),
    e1 = n(191023),
    e2 = n(192308),
    e5 = n(28863),
    e3 = n(695366),
    e6 = n(834730),
    e8 = n(789645),
    e4 = n(565645),
    e9 = n(775602),
    e7 = n(826673),
    te = n(371680),
    tt = n(532624),
    tn = n(531685),
    tl = n(723702),
    ti = n(350535),
    tr = n(115023);
function ts(e) {
    let { soundboardSound: t, closePicker: i } = e,
        r = (0, d.RQ)((e) => e.searchQuery),
        s = (0, m.bG)([g.A], () => null != t && g.A.isFavoriteSound(t.soundId)),
        a = (0, m.bG)([ex.A], () => ex.A.getGuild(t?.guildId)),
        o = (0, m.bG)([e9.Ay], () => e9.Ay.useReducedMotion, []),
        u = (0, m.bG)([tn.A], () => tn.A.isFocused()),
        c = (0, m.bG)([tt.Ay], () => tt.Ay.getKeybindForAction(ev.hCu.SOUNDBOARD_HOLD));
    if (null != t && r.length > 0)
        return (0, l.jsx)(te.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(e4.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: tr.Zg })
                    : (0, l.jsx)(e1.ImageIcon, { size: "md", color: "currentColor", className: tr.Zg }),
            graphicSecondary: null != a ? (0, l.jsx)(L.A, { guild: a, shouldAnimate: !o && u }) : null,
            titlePrimary: t.name,
            titleSecondary: a?.name,
            isFavorite: s,
        });
    function h() {
        (i(),
            (0, e2.mM)(async () => {
                let { default: e } = await Promise.all([n.e(161411), n.e(498640), n.e(454085), n.e(912618)]).then(
                    n.bind(n, 29681),
                );
                return (t) => (0, l.jsx)(e, { ...t });
            }));
    }
    let f = (0, e7.k8)(e0.M.SOUNDBOARD_KEYBIND_TIP),
        p =
            null != c && (0, tl.uF)() && !f
                ? eG.intl.format(eG.t.udMTth, {
                      keybind: (0, ti.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(e5.Anchor, { onClick: h, children: e }, t),
                  })
                : null;
    return null == p
        ? null
        : (0, l.jsxs)("div", {
              className: tr.g,
              children: [
                  (0, l.jsx)(e3.CircleErrorIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: tr.QW,
                  }),
                  (0, l.jsx)(e6.E, { variant: "body-sm/medium", color: "text-default", className: tr.L5, children: p }),
                  (0, l.jsx)(I.D, {
                      className: tr.b,
                      onClick: function () {
                          return (0, e7.Dr)(e0.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, l.jsx)(e8.XSmallIcon, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var ta = n(533491),
    to = n(890856),
    tu = n(307301),
    tc = n(727419);
function td(e) {
    (tc.A.open(e, ev.BEX.SOUNDBOARD),
        (0, e2.mM)(async () => {
            let { default: t } = await Promise.all([
                n.e(860350),
                n.e(207998),
                n.e(699733),
                n.e(401295),
                n.e(775417),
                n.e(253255),
                n.e(308555),
                n.e(848625),
                n.e(883952),
                n.e(220287),
                n.e(66580),
                n.e(808979),
                n.e(420643),
                n.e(280559),
                n.e(974049),
                n.e(4328),
                n.e(1795),
                n.e(68027),
            ]).then(n.bind(n, 122998));
            return (n) => (0, l.jsx)(t, { ...n, guildId: e });
        }));
}
var th = n(948611),
    tm = n(308078);
function tf(e) {
    let { guild: t, focused: n, onSelectItem: i, ...r } = e,
        { canCreateExpressions: a } = (0, ep.nr)(t);
    return (0, l.jsx)(eP.m, {
        text: eG.intl.string(eG.t["fHo+z1"]),
        shouldShow: !a,
        children: (0, l.jsx)("li", {
            className: th.H,
            children: (0, l.jsxs)(to.s, {
                ...r,
                "aria-label": eG.intl.formatToPlainString(eG.t.c1qVYh, { guildName: t.name }),
                className: s()(tm.n4, { [tm.in]: n, [tm.r9]: !a }),
                onClick: () => (null != i ? i() : td(t.id)),
                children: [
                    (0, l.jsx)(tu.PlusSmallIcon, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(e6.E, {
                        variant: "body-xs/semibold",
                        color: a ? "currentColor" : "text-muted",
                        children: eG.intl.string(eG.t["8Fu/S7"]),
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
            isNew: p,
        } = e,
        g = P.LW.useStore((e) => e.inspectedExpressionPosition),
        x = `${l}-${r}`,
        E = s && g.rowIndex === l && g.columnIndex === r;
    switch (t.item.type) {
        case ed.uq.SOUND:
            return (0, i.createElement)(ta.Ay, {
                ...o(r),
                ...n,
                key: x,
                sound: t.item.sound,
                suppressPlaySound: a,
                focused: E,
                onMouseEnter: () => c(r),
                onSelectItem: (e) => u(t, e),
                enableSecondaryActions: !0,
                buttonOverlay: d,
                inNitroLockedSection: h,
                showLockForDisabledSound: m,
                isSoundmoji: !0 === f,
                isNew: p,
            });
        case ed.uq.ADD_SOUND:
            return (0, i.createElement)(tf, {
                ...o(r),
                key: x,
                guild: t.item.guild,
                focused: E,
                onSelectItem: () => u(t),
            });
    }
}
var tg = n(635799);
let tx = {
    [ed.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
    [ed.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
    [ed.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
    [ed.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
    [ed.Cx.FREQUENTLY_USED]: u.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
    [ed.Cx.TOP_SOUNDS]: u.A.SOUNDBOARD_TOP_SOUNDS_SECTION,
};
function tE(e) {
    let { onSeen: t } = e,
        n = (0, O.A)({ onVisible: t, minTimeVisibleMs: 500 });
    return (0, l.jsx)("div", { ref: n, "aria-hidden": !0 });
}
function tS(e) {
    let {
        categoryInfo: t,
        collapsed: n,
        toggleCollapsed: i,
        isSectionNitroLocked: r,
        showNitroDivider: a,
        showNewBadge: o,
        onNewSoundsSeen: u,
    } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            a && (0, l.jsx)(et.A, { className: tg.yH }),
            (0, l.jsxs)("div", {
                className: s()(tg.hd, { [tg.Jb]: r, [tg.VD]: r }),
                children: [
                    (0, l.jsx)(I.D, {
                        className: tg.bV,
                        onClick: i,
                        onKeyDown: (e) => e.stopPropagation(),
                        "aria-expanded": !n,
                        children: (0, l.jsxs)("div", {
                            className: tg.M2,
                            children: [
                                (function () {
                                    switch (t.type) {
                                        case ed.Cx.FAVORITES:
                                            return (0, l.jsx)(S.StarIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: tg.nr,
                                            });
                                        case ed.Cx.FREQUENTLY_USED:
                                            return (0, l.jsx)(y.ClockIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: tg.nr,
                                            });
                                        case ed.Cx.GUILD:
                                            return (0, l.jsx)(L.A, { guild: t.guild, height: 16, width: 16 });
                                        case ed.Cx.DEFAULTS:
                                            return (0, l.jsx)(C.ClydeIcon, {
                                                size: "custom",
                                                width: 28,
                                                height: 28,
                                                color: "currentColor",
                                                className: tg.nr,
                                            });
                                        case ed.Cx.SEARCH:
                                            return (0, l.jsx)(A.MagnifyingGlassIcon, {
                                                size: "md",
                                                color: "currentColor",
                                                className: tg.nr,
                                            });
                                        case ed.Cx.TOP_SOUNDS:
                                            return (0, l.jsx)(b.TrophyIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: tg.nr,
                                            });
                                    }
                                })(),
                                (0, l.jsx)(v.D, {
                                    variant: "body-sm/semibold",
                                    color: "none",
                                    className: tg.Gf,
                                    children: (function () {
                                        switch (t.type) {
                                            case ed.Cx.FAVORITES:
                                                return eG.intl.string(eG.t.k8fFjp);
                                            case ed.Cx.FREQUENTLY_USED:
                                                return eG.intl.string(eG.t["+cGVV6"]);
                                            case ed.Cx.GUILD:
                                                return t.guild.name;
                                            case ed.Cx.DEFAULTS:
                                                return eG.intl.string(eG.t.Rtvk9X);
                                            case ed.Cx.SEARCH:
                                                return eG.intl.string(eG.t["zkoeq/"]);
                                            case ed.Cx.TOP_SOUNDS:
                                                return eG.intl.formatToPlainString(eG.t.GXs41w, {
                                                    guildName: t.guild.name,
                                                });
                                        }
                                    })(),
                                }),
                                o &&
                                    (0, l.jsx)("span", {
                                        className: tg.Ad,
                                        children: (0, l.jsx)(N.E, { type: "new", variant: "primary" }),
                                    }),
                                (0, l.jsx)(eo.A, {
                                    className: tg.nr,
                                    direction: n ? eo.A.Directions.RIGHT : eo.A.Directions.DOWN,
                                }),
                            ],
                        }),
                    }),
                    null != u && (0, l.jsx)(tE, { onSeen: u }),
                ],
            }),
        ],
    });
}
function ty() {
    return (0, l.jsx)(_.A, { message: eG.intl.string(eG.t.bgDdNK) });
}
function tC(e) {
    let { className: t } = e,
        n = (0, E.bG)([g.A], () => g.A.isSoundboardVolumeMuted()) ? T.VoiceXIcon : k.VoiceNormalIcon;
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
            gridNotice: S,
            soundButtonOverlay: y,
            listPadding: C,
            renderHeader: A,
            defaultSoundsOnly: b = !1,
            inExpressionPicker: v,
            analyticsSource: N,
        } = e,
        { analyticsLocations: T } = (0, c.Ay)(),
        { analyticsLocations: _ } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: O } = (0, R.p)(),
        L = i.useMemo(() => ({ ...O, section: ev.JJy.SOUNDBOARD_SOUND_PICKER }), [O]),
        [D, U] = i.useState(null),
        V = (0, E.bG)([es.default], () => es.default.getCurrentUser()),
        B = (0, W.TW)(V, ej.PremiumTypes.TIER_2),
        F = (0, E.bG)([ea.A], () => ea.A.getVoiceState(t, V?.id ?? "")),
        G = F?.selfDeaf || F?.mute || F?.suppress,
        K = (0, d.RQ)((e) => e.searchQuery),
        H = null != K && "" !== K,
        z = (0, M.GV)(),
        {
            categories: q,
            availableSounds: $,
            soundCounts: Q,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = (0, E.bG)([es.default], () => es.default.getCurrentUser()),
                r = W.Ay.isPremium(l, ej.PremiumTypes.TIER_2),
                [s, a, o, u] = (0, E.yK)([g.A], () => [
                    g.A.getSounds(),
                    g.A.getFavorites(),
                    g.A.getFrequentlyUsedSoundIds(),
                    g.A.isFetching(),
                ]),
                c = (0, eT.IJ)(),
                d = (0, eN.Y)(e, !1),
                h = (0, E.yK)([ex.A], () => {
                    let e = [];
                    return (
                        d.forEach((t) => {
                            let n = ex.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                m = W.Ay.canUseSoundboardEverywhere(l),
                f = (0, E.bG)([ex.A], () => ex.A.getGuild(e?.guild_id)),
                p = (0, E.bG)(
                    [eE.A],
                    () => {
                        let { canCreateExpressions: e } = (0, ep.ie)(f);
                        return e;
                    },
                    [f],
                ),
                x = i.useMemo(() => o.filter((e) => !a.has(e)).slice(0, 3), [o, a]),
                S = (0, E.bG)([eS.Ay, eg.A, ex.A], () => {
                    let e = eS.Ay.getVoiceChannelId(),
                        t = null != e ? eg.A.getChannel(e) : null;
                    return t?.guild_id != null ? ex.A.getGuild(t.guild_id) : void 0;
                });
            (0, ef.Ay)(() => {
                !(function (e) {
                    var t;
                    if (null == e || null == es.default.getCurrentUser()) return;
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
                                url: ev.Rsh.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(t),
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
            let y = (0, E.yK)([g.A], () => g.A.getTopSoundboardSoundIds(S?.id)),
                C = i.useMemo(() => y.slice(0, 3), [y]);
            return i.useMemo(() => {
                let e = 0,
                    l = 0,
                    i = [];
                return n
                    ? (ew(i, s),
                      {
                          categories: i,
                          availableSounds: s.get("0") ?? ek.pD,
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
                                      key: ed.Cx.TOP_SOUNDS,
                                      categoryInfo: { type: ed.Cx.TOP_SOUNDS, guild: t },
                                      items: e_(s),
                                  });
                          })(i, S, { allSounds: s, topSoundIds: C }),
                      eR({
                          sections: i,
                          guildIds: d,
                          allSounds: s,
                          potentialSoundIdsForSection: Array.from(a),
                          sectionType: ed.Cx.FAVORITES,
                          sortSoundsFn: eT.XP,
                      }),
                      x.length > 0 &&
                          eR({
                              sections: i,
                              guildIds: d,
                              allSounds: s,
                              potentialSoundIdsForSection: x,
                              sectionType: ed.Cx.FREQUENTLY_USED,
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
                                  o = e_(a, s),
                                  u = a.length < (0, ey.fA)(t) && l,
                                  c = 0 === o.length;
                              ((u || c) && !r && o.push({ type: ed.uq.ADD_SOUND, guild: t }),
                                  (r && c) ||
                                      e.push({
                                          categoryInfo: { type: ed.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                          key: t.id,
                                          items: o,
                                      }));
                          })(i, f, {
                              currentGuildHasAddPermissions: p,
                              allSounds: s,
                              filterOutEmptyCurrentGuild: t,
                              sortSoundsFn: c,
                          }),
                      m || ew(i, s),
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
                                      categoryInfo: { type: ed.Cx.GUILD, guild: e, isNitroLocked: !r },
                                      key: e.id,
                                      items: n,
                                  });
                          }
                      })({ sections: i, guilds: h, currentGuildId: f?.id, allSounds: s, hasNitro: r, sortSoundsFn: c }),
                      m && ew(i, s),
                      i.forEach((t) => {
                          t.categoryInfo.type === ed.Cx.GUILD &&
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
            }, [d, s, a, !0, f, p, t, m, h, n, u, r, c, x, S, C]);
        })(r, void 0, b),
        { isNewSound: Z, markGuildSeen: et } = (0, eO.A)(),
        eo = i.useMemo(() => {
            let e = new Map();
            for (let { categoryInfo: t, items: n } of q) {
                if (t.type !== ed.Cx.GUILD) continue;
                let l = n.filter((e) => e.type === ed.uq.SOUND && Z(e.sound)).length;
                l > 0 && e.set(t.guild.id, l);
            }
            return e;
        }, [q, Z]),
        eL = eo.size > 0,
        eP = (0, ec.V)(eL ? "SoundboardSoundGrid" : "Invalid - SoundboardSoundGrid"),
        eD = eL && eP,
        [eU, eV] = i.useState([]),
        eW = i.useMemo(
            () => (K.length > 0 ? [{ key: ed.Cx.SEARCH, categoryInfo: { type: ed.Cx.SEARCH }, items: e_(eU) }] : q),
            [q, K.length, eU],
        ),
        eB = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eK = i.useMemo(() => eW.filter((e) => e.items.length > 0), [eW]),
        eH = i.useMemo(
            () => eK.findLastIndex((e) => !!(0, W.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eK],
        ),
        ez = !B && p && -1 !== eH,
        eq = !B && p && -1 !== eH,
        e$ = ei.b0.useSetting(),
        eQ = i.useMemo(() => new Set(e$), [e$]),
        eZ = null == r,
        eX = W.Ay.canUseCustomCallSounds(V),
        e0 = i.useCallback(
            (e) => {
                (eQ.has(e) ? eQ.delete(e) : eQ.add(e), ei.b0.updateSetting(Array.from(eQ)));
            },
            [eQ],
        ),
        e1 = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, eh.Ir)(V, e, r, !1);
                if (null != h && m && i) h(e, n);
                else if (!f && i && (0, eh.Au)(r))
                    ((0, eh.Ak)(e, r?.id ?? "", t, l),
                        H &&
                            eu.default.track(ev.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: ev.I4_.SOUNDBOARD,
                                channel_id: r?.id,
                                query: K,
                                location_stack: t,
                            }));
                else {
                    if ((0, eh.Ir)(V, e, r)) return;
                    p && U(e);
                }
            },
            [f, V, r, p, H, K, h, m],
        ),
        e2 = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case ed.uq.SOUND:
                        var n;
                        let l = e?.item.index;
                        return e1(e.item.sound, ((n = e.category), [...T, tx[n]]), t?.shiftKey !== !0, l);
                    case ed.uq.ADD_SOUND:
                        return (o(), td(e.item.guild.id));
                }
            },
            [T, e1, o],
        ),
        e5 = i.useCallback(
            (e, n, i, a, o) => {
                let u = eK[i.sectionIndex],
                    c = p && eJ(u.categoryInfo, B, t) && ez;
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        className: s()(tg.a, { [tg.uL]: c }),
                        children: e.map((e, t) => {
                            var n;
                            let s =
                                e.item.type === ed.uq.SOUND
                                    ? `sound-${e.item.sound.soundId}`
                                    : `add-sound-${e.item.guild.id}`;
                            return (0, l.jsx)(
                                tp,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: r,
                                        interactive: eZ ? eX : !G,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: ((n = e.category), [...T, tx[n]]),
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: f,
                                    getItemProps: a,
                                    onSelectItem: e2,
                                    onItemMouseEnter: o,
                                    buttonOverlay: y,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: p,
                                    inExpressionPicker: v,
                                    isNew: eD && e.item.type === ed.uq.SOUND && Z(e.item.sound),
                                },
                                s,
                            );
                        }),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eK, p, B, t, f, e2, r, eZ, eX, G, T, y, ez, v, eD, Z],
        ),
        e3 = i.useCallback(
            (e, t) => {
                if (e <= 0 || !p) return !1;
                let n = eK[e],
                    l = eK[e - 1],
                    i = eJ(n.categoryInfo, B, t),
                    r = eJ(l.categoryInfo, B, t);
                return i && !r;
            },
            [eK, p, B],
        ),
        e6 = i.useCallback(() => {
            let e = g.A.getSoundById("3");
            null != e && U(e);
        }, []),
        e8 = i.useCallback(() => {
            let e = (0, W.Dd)(ej.PremiumTypes.TIER_2);
            return eG.intl.format(eG.t["tw/SSq"], { nitroTierName: e, onClick: e6 });
        }, [e6]),
        e4 = i.useCallback((e) => (e3(e, t) ? 65 : 32), [t, e3]),
        e9 = i.useCallback(
            (e) => {
                let t = e === eK.length - 1;
                return eq && t ? 70 : ez && e === eH ? 20 : 0;
            },
            [eK.length, ez, eq, eH],
        ),
        e7 = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
        te = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    r = p && eJ(e.categoryInfo, B, t),
                    s = e3(n, t),
                    a = eQ.has(i),
                    { categoryInfo: o } = e,
                    u = o.type === ed.Cx.GUILD && eo.has(o.guild.id) ? o.guild.id : null;
                return (0, l.jsx)(
                    tS,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            (eu.default.track(ev.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: ev.liQ.SOUNDBOARD_POPOUT },
                                tab: eF.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !a,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                e0(i));
                        },
                        collapsed: a,
                        isSectionNitroLocked: r && ez,
                        showNitroDivider: s && ez,
                        showNewBadge: eD && null != u,
                        onNewSoundsSeen: null == u || a ? void 0 : () => et(u),
                    },
                    `header-${i}`,
                );
            },
            [eQ, e0, t, e3, p, B, ez, eo, eD, et],
        ),
        tt = i.useCallback(
            (e, t) => {
                let n = t === eK.length - 1,
                    i = t === eH;
                return eq && n
                    ? (0, l.jsx)("div", { className: s()(tg.Lk, { [tg.Ns]: i }) })
                    : ez && t === eH
                      ? (0, l.jsx)("div", { className: s()(tg.a3, { [tg.Ns]: i }) })
                      : null;
            },
            [eH, ez, eq, eK.length],
        ),
        tn = i.useCallback((e) => eV((0, em.lG)(e, $, V, r, T)), [r, V, $, T]),
        tl = i.useCallback(
            (e) => {
                (0, j.L3)(e, async () => {
                    let { default: e } = await n.e(702894).then(n.bind(n, 507773));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: T, ...t });
                });
            },
            [T],
        ),
        ti = (0, eM._)("SoundboardSoundGrid"),
        tr = i.useCallback(
            () =>
                v
                    ? (0, l.jsx)(J.Gq, {
                          renderPopout: () => (0, l.jsx)(J.qn, {}),
                          tooltipText: eG.intl.string(eG.t["19lt24"]),
                          position: "top",
                          clickableClassName: s()(tg.Jm, tg.Zz),
                          children: (0, l.jsx)(k.VoiceNormalIcon, {
                              size: "md",
                              color: "currentColor",
                              className: tg.By,
                          }),
                      })
                    : (0, l.jsx)(I.D, {
                          tabIndex: 0,
                          className: tg.Jm,
                          onClick: tl,
                          "aria-label": ti ? eG.intl.string(eG.t.wQKOBb) : eG.intl.string(eG.t.kbFsAD),
                          children: (0, l.jsx)(tC, { className: tg.By }),
                      }),
            [v, tl, ti],
        ),
        ta = i.useCallback(
            (e, n) =>
                (0, l.jsx)(eY, {
                    soundboardListRef: e,
                    soundsGrid: n,
                    categories: q,
                    shouldUpsellLockedCategories: ez,
                    listPadding: C,
                    guildId: t,
                    inExpressionPicker: v,
                    newSoundCountByGuildId: eD ? eo : void 0,
                    isNewSound: Z,
                    getSectionHeaderHeight: e4,
                }),
            [q, C, ez, t, v, eD, eo, Z, e4],
        ),
        to = i.useCallback(() => {
            let e = (0, Y.qD)();
            return (0, W.LE)(e, ej.pe.TIER_2) ?? eG.intl.string(eG.t.pj0XBN);
        }, []);
    i.useEffect(() => {
        eq &&
            eB &&
            eu.default.track(ev.HAw.PREMIUM_UPSELL_VIEWED, {
                type: ej.e.SOUNDBOARD_PICKER_FLOATING_UPSELL,
                location: L,
                location_stack: _,
                sku_id: W.Ay.getSkuIdForPremiumType(ej.PremiumTypes.TIER_2),
                voice_guild_id: er.A.getGuildId() ?? null,
            });
    }, [L, _, eq, eB]);
    let tu = i.useCallback(
            () =>
                eq
                    ? (0, l.jsx)(ee.d, {
                          showUpsell: eB,
                          text: e8(),
                          button: to(),
                          buttonAnalyticsObject: { section: ev.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, l.jsx)(en.l, {
                              size: "sm",
                              className: tg.ij,
                              location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                              forceDarkTheme: !0,
                          }),
                      })
                    : null,
            [e8, to, eq, eB],
        ),
        tc = i.useCallback(
            (e) =>
                e?.item.type === ed.uq.SOUND
                    ? (0, l.jsx)(ts, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        th = (0, E.bG)([er.A], () => er.A.getMediaSessionId());
    return (
        (0, w.A)({
            type: x.ImpressionTypes.POPOUT,
            name: x.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: N,
                guild_id: t,
                media_session_id: th,
                available_custom_sounds_count: Q.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: Q.lockedCustomSoundCount,
                favorite_sounds_count: Q.favoriteSoundCount,
                type: ek.c4.FULL_PICKER,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != D
                    ? (0, l.jsx)(el.A, {
                          title: eG.intl.string(v ? eG.t.rZEEvU : eG.t.jGDYF0),
                          description: eG.intl.string(v ? eG.t.ZPNG5A : eG.t["grL/hg"]),
                          analyticsLocationSection: ev.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: ej.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...L, object: ev.ZSU.SOUNDBOARD_SOUND },
                              location_stack: _,
                              sku_id: W.Ay.getSkuIdForPremiumType(ej.PremiumTypes.TIER_2),
                              voice_guild_id: er.A.getGuildId(),
                          },
                          onClose: () => U(null),
                          onUpsellClicked: o,
                      })
                    : void 0,
                (0, l.jsx)(X, {
                    categories: eK,
                    collapsedCategories: eQ,
                    containerWidth: a,
                    store: P.LW,
                    onSelectItem: e2,
                    onSearchExpressions: tn,
                    hasSearchResults: eU.length > 0,
                    defaultSearchPlaceholder: eG.intl.string(eG.t.sKt3xS),
                    renderRow: e5,
                    renderSectionHeader: te,
                    renderSectionFooter: tt,
                    renderSection: e7,
                    renderCategoryList: ta,
                    renderHeaderAccessories: tr,
                    rowHeight: 48,
                    sectionHeaderHeight: e4,
                    sectionFooterHeight: e9,
                    itemNodeWidth: 150,
                    gridNavigatorId: z,
                    renderEmptySearchState: ty,
                    renderInspector: tc,
                    gridNotice: S,
                    renderHeader: A,
                    renderUpsell: tu,
                }),
            ],
        })
    );
}
var tb = n(70317);
function tI(e) {
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
            gridNotice: b,
            inExpressionPicker: I,
            soundButtonOverlay: v,
            listPadding: N,
            renderHeader: T,
            defaultSoundsOnly: k,
            showEchoes: j = !1,
        } = e,
        { fetching: _, maybeFetchData: R } = {
            fetching: (0, m.bG)([g.A], () => g.A.isFetchingAnySounds()),
            maybeFetchData: i.useCallback(() => {
                (p.E7(), f.bW.loadIfNecessary());
            }, []),
        },
        { analyticsLocations: w } = (0, c.Ay)(u.A.SOUNDBOARD_POPOUT),
        O = I ? void 0 : { height: 520 };
    return (
        i.useEffect(() => {
            R();
        }, [R]),
        i.useEffect(() => {
            I || (0, d.Ri)("");
        }, [I]),
        (0, l.jsx)(c.f5, {
            value: w,
            children: (0, l.jsxs)(a.l, {
                style: O,
                className: s()(tb.Nz, { [tb.Bg]: _, [tb.yV]: I }),
                children: [
                    j && null != t && n?.id != null ? (0, l.jsx)(h.A, { guildId: t, channelId: n.id }) : null,
                    _
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
                              gridNotice: b,
                              soundButtonOverlay: v,
                              listPadding: N,
                              renderHeader: T,
                              defaultSoundsOnly: k,
                              inExpressionPicker: I,
                              analyticsSource: S,
                          }),
                ],
            }),
        })
    );
}
