n.d(t, { A: () => t_ });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(305866),
    o = n(289873),
    u = n(793574),
    c = n(688810),
    d = n(151271),
    h = n(702841),
    m = n(594061),
    f = n(796774),
    p = n(209932);
n(30146);
var g = n(686246),
    x = n(562708),
    A = n(17928),
    C = n(27232),
    E = n(406810),
    I = n(111159),
    y = n(7689),
    S = n(369606),
    v = n(939249),
    N = n(297264),
    _ = n(358618),
    j = n(983851),
    b = n(442433),
    T = n(537652),
    R = n(212245),
    O = n(139286),
    M = n(915089),
    L = n(724511),
    k = n(850992),
    w = n(887695),
    P = n(435558),
    D = n(962125),
    U = n(158045),
    V = n(240864),
    G = n(212633);
let F = i.forwardRef(function (e, t) {
        let {
                categories: n,
                store: s,
                hasSearchResults: r,
                listPadding: a,
                renderRow: o,
                renderSection: u,
                renderSectionHeader: c,
                renderSectionFooter: h,
                renderInspector: m,
                renderEmptySearchState: f,
                rowCount: p,
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
                        (0, U.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            j = (0, w.Fk)({
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
                        H({
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
            (0, w.FV)({ searchQuery: v, activeCategoryIndex: N, listRef: S }),
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
                className: G.i,
                children: [
                    v.length > 0 && !r && null != f
                        ? f()
                        : (0, l.jsx)(D.A, {
                              role: "none presentation",
                              listPadding: a,
                              onScroll: b,
                              renderRow: o,
                              renderSection: u,
                              renderSectionHeader: c,
                              renderSectionFooter: h,
                              rowCount: p,
                              rowCountBySection: g,
                              rowHeight: x,
                              sectionHeaderHeight: A,
                              sectionFooterHeight: C,
                              stickyHeaders: !0,
                              ref: S,
                          }),
                    E?.(),
                    m?.(),
                ],
            })
        );
    }),
    H = (0, P.throttle)(
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
            let a = (0, V.s)({
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
var B = n(462180),
    W = n(602034),
    K = n(683438),
    z = n(642232);
let Z = i.forwardRef(function (e, t) {
    let {
            store: n,
            hasSendableExpressions: s,
            onKeyDown: r,
            gridNavigatorId: a,
            expressionsListRef: o,
            defaultSearchPlaceholder: u,
            emptySearchPlaceholder: c,
        } = e,
        h = i.useRef(null),
        [m, f] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], B.x),
        p = n.useStore((e) => e.searchPlaceholder),
        [g, x] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], B.x),
        A = i.useCallback(
            (e) => {
                (n.setActiveCategoryIndex("" === e ? 0 : k.Uk),
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
        i.useImperativeHandle(t, () => ({ focus: () => h.current?.focus() })),
        i.useLayoutEffect(() => {
            f && h.current?.focus();
        }, [f]),
        (0, l.jsx)("div", {
            className: z.i,
            children: (0, l.jsx)(K.I, {
                autoFocus: s,
                disabled: !s,
                query: m,
                ref: h,
                placeholder: null != p ? p : s || null == c ? u : c,
                onClear: C,
                onKeyDown: r,
                onChange: A,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": a,
                    "aria-expanded": !0,
                    ...(x ? { "aria-activedescendant": (0, W.Aq)(a, g.columnIndex, g.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var Y = n(904289);
function q(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: s,
            store: r,
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
            renderHeader: M,
            renderUpsell: L,
        } = e,
        k = i.useRef(null),
        P = i.useRef(null),
        D = i.useRef(null),
        U = 0 === t.length,
        V = (0, d.RQ)((e) => e.searchQuery),
        G = r.useStore((e) => e.inspectedExpressionPosition),
        H = (0, w.oV)({ gridWrapperRef: k, containerWidth: s, showingEmptyState: U }),
        {
            expressionsGrid: B,
            rowCount: W,
            rowCountBySection: K,
            columnCounts: z,
            gutterWidth: q,
        } = (0, w.se)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: j,
            itemNodeWidth: _,
            itemNodeMargin: b,
        }),
        {
            getItemProps: J,
            getRowProps: $,
            gridContainerProps: X,
            handleGridContainerKeyDown: Q,
            isUsingKeyboardNavigation: ee,
        } = (0, w.JZ)({
            columnCounts: z,
            expressionsListRef: P,
            expressionsGrid: B,
            onSelectItem: a,
            store: r,
            gridNavigatorId: R,
        }),
        et = i.useCallback(
            (e, t) =>
                p(
                    B[e],
                    $(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: q,
                        rowIndex: e,
                        totalRowCount: W,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => J(e, t),
                    (t) => r.setInspectedExpressionPosition(t, e),
                ),
            [B, J, $, q, ee, p, r, W],
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
            D.current?.focus();
        }, []));
    let es = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(Z, {
                ref: D,
                store: r,
                hasSendableExpressions: !0,
                onKeyDown: Q,
                expressionsListRef: P,
                gridNavigatorId: R,
                defaultSearchPlaceholder: h,
                emptySearchPlaceholder: m,
            }),
            y?.(),
        ],
    });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != M ? M(es) : (0, l.jsxs)("div", { className: Y.wx, children: [" ", es, " "] }),
            U && null != f
                ? f(Y.p$)
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          I(P),
                          null != O && (0, l.jsx)("div", { className: Y.Eb, children: O }),
                          (0, l.jsx)("div", {
                              ref: k,
                              className: Y.AD,
                              id: R,
                              ...X,
                              children:
                                  null != H
                                      ? (0, l.jsx)(F, {
                                            categories: t,
                                            ref: P,
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
    $ = n(319993),
    X = n(202639),
    Q = n(414872),
    ee = n(285373),
    et = n(609178),
    en = n(885386),
    el = n(763827),
    ei = n(287809),
    es = n(977997),
    er = n(147925),
    ea = n(174459),
    eo = n(807348),
    eu = n(813564),
    ec = n(699840),
    ed = n(147472);
n(321073);
var eh = n(964486),
    em = n(931991),
    ef = n(734057),
    ep = n(71393),
    eg = n(576705),
    ex = n(309010),
    eA = n(473145),
    eC = n(636537),
    eE = n(228366),
    eI = n(463347),
    ey = n(125831),
    eS = n(945810);
let ev = (0, eS.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
(0, eS.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds-mobile",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
var eN = n(652215),
    e_ = n(805143),
    ej = n(194567),
    eb = n(980504),
    eT = n(202541);
function eR(e, t) {
    return (null != t && (e = t(e)), e.map((e, t) => ({ type: eo.uq.SOUND, sound: e, index: t })));
}
function eO(e) {
    let { sections: t, guildIds: n, allSounds: l, potentialSoundIdsForSection: i, sectionType: s, sortSoundsFn: r } = e,
        a = {};
    for (let e of [...n, "0"])
        for (let t of l.get(e) ?? []) null != i.find((e) => e === t.soundId) && (a[t.soundId] = t);
    let o = [];
    for (let e of i) {
        let t = a[e];
        null != t && o.push(t);
    }
    let u = eR(o, r);
    u.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: u });
}
function eM(e, t, n) {
    let { allSounds: l, topSoundIds: i } = n,
        s = {};
    for (let e of l.get(t.id) ?? []) s[e.soundId] = e;
    let r = [];
    for (let e of i) {
        let t = s[e];
        null != t && r.push(t);
    }
    0 !== r.length &&
        e.push({ key: eo.Cx.TOP_SOUNDS, categoryInfo: { type: eo.Cx.TOP_SOUNDS, guild: t }, items: eR(r) });
}
function eL(e, t) {
    let n = t.get("0") ?? eb.pD;
    e.push({ key: eo.Cx.DEFAULTS, categoryInfo: { type: eo.Cx.DEFAULTS }, items: eR(n, ej.U9) });
}
var ek = n(554146),
    ew = n(43105),
    eP = n(131607),
    eD = n(49999),
    eU = n(375708);
function eV(e) {
    let { targetElementRef: t } = e,
        { allowReordering: n } = ec.q.useConfig({ location: "SoundboardFavoritesCoachmark" }),
        [i, s] = (0, eP.kn)(n ? [ek.M.SOUNDBOARD_FAVORITES_ORDERING_COACHMARK] : [], void 0, !0);
    return i !== ek.M.SOUNDBOARD_FAVORITES_ORDERING_COACHMARK
        ? null
        : (0, l.jsx)(ew.A, {
              targetElementRef: t,
              onRequestClose: function (e) {
                  (("user:escape" === e || "user:explicit" === e) && s(eD.i.DISMISS), s(eD.i.AUTO_DISMISS));
              },
              title: eU.intl.string(eU.t.KFcQy8),
              body: eU.intl.string(eU.t["P/1x7s"]),
              badge: "beta",
          });
}
var eG = n(837381),
    eF = n(866665),
    eH = n(713517),
    eB = n(88218),
    eW = n(407698),
    eK = n(941971),
    ez = n(698279),
    eZ = n(120052);
let eY = [8, 8, 8, 8],
    eq = "soundboard_guild_",
    { itemIdForIndex: eJ } = (0, eB.J)(eq);
function e$(e) {
    let { children: t, className: n, isSelected: s, listItemProps: r, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, eH.A)(o);
    return (0, l.jsxs)(v.D, {
        innerRef: o,
        ...r,
        className: n,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: eZ.a$,
                children: (0, l.jsx)(eK.A, { hovered: u, selected: s, size: "small" }),
            }),
            t,
        ],
    });
}
function eX(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: s } = e;
    return (0, l.jsx)(e$, {
        className: r()(eZ.Yl, { [eZ.wH]: n }),
        isSelected: n,
        listItemProps: s,
        onClick: i,
        children: (0, l.jsx)(t, { className: eZ.xi, color: "currentColor" }),
    });
}
function eQ(e, t, n, i, s) {
    switch (e.categoryInfo.type) {
        case eo.Cx.FAVORITES:
            return (0, l.jsx)(eX, { icon: C.StarIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eo.Cx.FREQUENTLY_USED:
            return (0, l.jsx)(eX, { icon: E.ClockIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eo.Cx.GUILD:
            return (0, l.jsx)(
                e$,
                {
                    className: eZ.L1,
                    isSelected: n,
                    listItemProps: i,
                    onClick: t,
                    children: (0, l.jsx)(L.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case eo.Cx.DEFAULTS:
            return (0, l.jsx)(eX, { icon: I.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case eo.Cx.TOP_SOUNDS:
            return (0, l.jsx)(eX, { icon: S.TrophyIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function e0(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: s, isNitroLocked: r } = e,
        a = (0, eG.rm)(eJ(n));
    return t.categoryInfo.type === eo.Cx.GUILD
        ? (0, l.jsx)(eW.Q, { guild: t.categoryInfo.guild, children: eQ(t, i, s, a, r) })
        : (0, l.jsx)(eF.m, {
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
              children: eQ(t, i, s, a, r),
          });
}
function e1(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: a = eY,
            guildId: o,
            inExpressionPicker: u,
        } = e,
        c = i.useRef(null),
        d = (0, A.bG)([ei.default], () => ei.default.getCurrentUser()),
        h = (0, U.TW)(d, eT.PremiumTypes.TIER_2),
        m = i.useCallback(
            (e, t, n, i) => {
                let r = s && tE(e.categoryInfo, h, o);
                return (0, l.jsx)(e0, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        (ea.default.track(eN.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: eN.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: ez.kx.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n());
                    },
                    isSelected: i,
                    isNitroLocked: r,
                });
            },
            [o, s, h],
        );
    return (0, l.jsx)(eB.A, {
        className: r()(u ? eZ.HZ : eZ.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: k.LW,
        categories: n,
        listPadding: a,
        renderCategoryListItem: m,
        rowCount: n.length,
        categoryHeight: 40,
        navId: "soundboard-picker-categories",
        itemIdPrefix: eq,
    });
}
var e2 = n(191023),
    e3 = n(192308),
    e8 = n(28863),
    e5 = n(695366),
    e6 = n(834730),
    e7 = n(789645),
    e4 = n(565645),
    e9 = n(775602),
    te = n(826673),
    tt = n(182922),
    tn = n(532624),
    tl = n(531685),
    ti = n(723702),
    ts = n(350535),
    tr = n(115023);
function ta(e) {
    let { soundboardSound: t, closePicker: i } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        r = (0, h.bG)([p.A], () => null != t && p.A.isFavoriteSound(t.soundId)),
        a = (0, h.bG)([ep.A], () => ep.A.getGuild(t?.guildId)),
        o = (0, h.bG)([e9.Ay], () => e9.Ay.useReducedMotion, []),
        u = (0, h.bG)([tl.A], () => tl.A.isFocused()),
        c = (0, h.bG)([tn.Ay], () => tn.Ay.getKeybindForAction(eN.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, l.jsx)(tt.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(e4.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: tr.Zg })
                    : (0, l.jsx)(e2.ImageIcon, { size: "md", color: "currentColor", className: tr.Zg }),
            graphicSecondary: null != a ? (0, l.jsx)(L.A, { guild: a, shouldAnimate: !o && u }) : null,
            titlePrimary: t.name,
            titleSecondary: a?.name,
            isFavorite: r,
        });
    function m() {
        (i(),
            (0, e3.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("161411"),
                    n.e("498640"),
                    n.e("846327"),
                    n.e("912618"),
                ]).then(n.bind(n, 29681));
                return (t) => (0, l.jsx)(e, { ...t });
            }));
    }
    let f = (0, te.k8)(ek.M.SOUNDBOARD_KEYBIND_TIP),
        g =
            null != c && (0, ti.isWindows)() && !f
                ? eU.intl.format(eU.t.udMTth, {
                      keybind: (0, ts.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(e8.Anchor, { onClick: m, children: e }, t),
                  })
                : null;
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: tr.g,
              children: [
                  (0, l.jsx)(e5.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: tr.QW }),
                  (0, l.jsx)(e6.E, { variant: "text-sm/medium", color: "text-default", className: tr.L5, children: g }),
                  (0, l.jsx)(v.D, {
                      className: tr.b,
                      onClick: function () {
                          return (0, te.Dr)(ek.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, l.jsx)(e7.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var to = n(817232),
    tu = n(890856),
    tc = n(307301),
    td = n(468689);
function th(e) {
    (td.A.open(e, eN.BEX.SOUNDBOARD),
        (0, e3.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("860350"),
                n.e("207998"),
                n.e("341659"),
                n.e("775417"),
                n.e("67491"),
                n.e("308555"),
                n.e("220287"),
                n.e("883952"),
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
var tm = n(948611),
    tf = n(308078);
function tp(e) {
    let { guild: t, focused: n, onSelectItem: i, ...s } = e,
        { canCreateExpressions: a } = (0, em.nr)(t);
    return (0, l.jsx)(eF.m, {
        text: eU.intl.string(eU.t["fHo+z1"]),
        shouldShow: !a,
        children: (0, l.jsx)("li", {
            className: tm.H,
            children: (0, l.jsxs)(tu.s, {
                ...s,
                "aria-label": eU.intl.formatToPlainString(eU.t.c1qVYh, { guildName: t.name }),
                className: r()(tf.n4, { [tf.in]: n, [tf.r9]: !a }),
                onClick: () => (null != i ? i() : th(t.id)),
                children: [
                    (0, l.jsx)(tc.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(e6.E, {
                        variant: "text-xs/semibold",
                        color: a ? "currentColor" : "text-muted",
                        children: eU.intl.string(eU.t["8Fu/S7"]),
                    }),
                ],
            }),
        }),
    });
}
function tg(e) {
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
            isNitroLocked: h,
            showLockForDisabledSound: m,
            inExpressionPicker: f,
        } = e,
        p = k.LW.useStore((e) => e.inspectedExpressionPosition),
        g = `${l}-${s}`,
        x = r && p.rowIndex === l && p.columnIndex === s;
    switch (t.item.type) {
        case eo.uq.SOUND:
            return (0, i.createElement)(to.Ay, {
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
                inNitroLockedSection: h,
                showLockForDisabledSound: m,
                isSoundmoji: !0 === f,
            });
        case eo.uq.ADD_SOUND:
            return (0, i.createElement)(tp, {
                ...o(s),
                key: g,
                guild: t.item.guild,
                focused: x,
                onSelectItem: () => u(t),
            });
    }
}
var tx = n(635799);
let tA = 32 + Q.kg - 8,
    tC = {
        [eo.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [eo.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [eo.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [eo.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
        [eo.Cx.FREQUENTLY_USED]: u.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
        [eo.Cx.TOP_SOUNDS]: u.A.SOUNDBOARD_TOP_SOUNDS_SECTION,
    };
function tE(e, t, n) {
    return (null == n && e.type === eo.Cx.GUILD && !t) || (e.type === eo.Cx.GUILD && e.guild.id !== n && !t);
}
function tI(e) {
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
            o && (0, l.jsx)(Q.Ay, { className: tx.yH }),
            (0, l.jsx)("div", {
                className: r()(tx.hd, { [tx.Jb]: a, [tx.VD]: a }),
                children: (0, l.jsx)(v.D, {
                    className: tx.bV,
                    onClick: s,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: tx.M2,
                        ref: u ? c : void 0,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case eo.Cx.FAVORITES:
                                        return (0, l.jsx)(C.StarIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tx.nr,
                                        });
                                    case eo.Cx.FREQUENTLY_USED:
                                        return (0, l.jsx)(E.ClockIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tx.nr,
                                        });
                                    case eo.Cx.GUILD:
                                        return (0, l.jsx)(L.A, { guild: t.guild, height: 16, width: 16 });
                                    case eo.Cx.DEFAULTS:
                                        return (0, l.jsx)(I.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: tx.nr,
                                        });
                                    case eo.Cx.SEARCH:
                                        return (0, l.jsx)(y.MagnifyingGlassIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tx.nr,
                                        });
                                    case eo.Cx.TOP_SOUNDS:
                                        return (0, l.jsx)(S.TrophyIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tx.nr,
                                        });
                                }
                            })(),
                            (0, l.jsx)(N.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: tx.Gf,
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
                            (0, l.jsx)(er.A, {
                                className: tx.nr,
                                direction: n ? er.A.Directions.RIGHT : er.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
            u && (0, l.jsx)(eV, { targetElementRef: c }),
        ],
    });
}
function ty() {
    return (0, l.jsx)(T.A, { message: eU.intl.string(eU.t.bgDdNK) });
}
function tS(e) {
    let { className: t } = e,
        n = (0, A.bG)([p.A], () => p.A.isSoundboardVolumeMuted()) ? _._ : j.H;
    return (0, l.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function tv(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: a,
            onClose: o,
            onSelect: h,
            shouldValidateSelectedSound: m = !1,
            suppressPlaySound: f = !1,
            shouldShowLockedSounds: C = !0,
            gridNotice: E,
            soundButtonOverlay: I,
            listPadding: y,
            renderHeader: S,
            defaultSoundsOnly: N = !1,
            inExpressionPicker: _,
            analyticsSource: T,
        } = e,
        { analyticsLocations: L } = (0, c.Ay)(),
        { analyticsLocations: w } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: P } = (0, R.p)(),
        D = i.useMemo(() => ({ ...P, section: eN.JJy.SOUNDBOARD_SOUND_PICKER }), [P]),
        [V, G] = i.useState(null),
        F = (0, A.bG)([ei.default], () => ei.default.getCurrentUser()),
        H = (0, U.TW)(F, eT.PremiumTypes.TIER_2),
        B = (0, A.bG)([es.A], () => es.A.getVoiceState(t, F?.id ?? eN.dJq)),
        W = B?.selfDeaf || B?.mute || B?.suppress,
        K = (0, d.RQ)((e) => e.searchQuery),
        z = null != K && "" !== K,
        Z = (0, M.GV)(),
        { allowReordering: Y } = ec.q.useConfig({ location: "SoundboardSoundGrid" }),
        [Q, er] = i.useState(!1),
        { isDraggingFavoriteSound: eS } = (0, g.V)((e) => ({
            isDraggingFavoriteSound: e.isDragging() && e.getItemType() === eb.Tj,
        })),
        ek = i.useCallback(() => {
            er(!0);
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
            er(!1);
        }
    }, [Q]);
    let {
            categories: ew,
            availableSounds: eP,
            soundCounts: eD,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = (0, A.bG)([ei.default], () => ei.default.getCurrentUser()),
                s = U.Ay.isPremium(l, eT.PremiumTypes.TIER_2),
                [r, a, o, u] = (0, A.yK)([p.A], () => [
                    p.A.getSounds(),
                    p.A.getFavorites(),
                    p.A.getFrequentlyUsedSoundIds(),
                    p.A.isFetching(),
                ]),
                c = (0, ej.IJ)(),
                { sortOrder: d } = ec.q.useConfig({ location: "useSoundGrid" }),
                h = (0, e_.Y)(e, !1),
                m = (0, A.yK)([ep.A], () => {
                    let e = [];
                    return (
                        h.forEach((t) => {
                            let n = ep.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                f = U.Ay.canUseSoundboardEverywhere(l),
                g = (0, A.bG)([ep.A], () => ep.A.getGuild(e?.guild_id)),
                x = (0, A.bG)(
                    [eg.A],
                    () => {
                        let { canCreateExpressions: e } = (0, em.ie)(g);
                        return e;
                    },
                    [g],
                ),
                C = i.useMemo(() => o.filter((e) => !a.has(e)).slice(0, 3), [o, a]),
                E = (0, A.bG)([ex.Ay, ef.A, ep.A], () => {
                    let e = ex.Ay.getVoiceChannelId(),
                        t = null != e ? ef.A.getChannel(e) : null;
                    return t?.guild_id != null ? ep.A.getGuild(t.guild_id) : void 0;
                }),
                { enabled: I, topSoundsFirst: y } = ev.getConfig({ location: "useSoundGrid" });
            (0, eh.Ay)(() => {
                I &&
                    (function (e) {
                        var t;
                        if (
                            null == e ||
                            null == ei.default.getCurrentUser() ||
                            !ev.getConfig({ location: "maybeFetchTopSoundboardSoundsByGuild" }).enabled
                        )
                            return;
                        let n = p.A.getTopSoundboardSoundsMetadata(e);
                        if (null != n) {
                            let { topSoundsTTL: e } = n;
                            if (null == e || Date.now() < e) return;
                        }
                        ey.A.getIsFetching(e) ||
                            ((t = e),
                            (0, eI.tZ)(t) ||
                                (eE.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: t }),
                                eC.Bo.get({
                                    url: eN.Rsh.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(t),
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                }).then(
                                    (e) =>
                                        eE.h.dispatch({
                                            type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS",
                                            guildId: t,
                                            topSoundsMetadata: e.body.items
                                                .map((e) => ({ soundId: e.sound_id, rank: e.sound_rank }))
                                                .sort((e, t) => e.rank - t.rank),
                                        }),
                                    () => eE.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId: t }),
                                )));
                    })(E?.id);
            });
            let S = (0, A.yK)([p.A], () => p.A.getTopSoundboardSoundIds(E?.id)),
                v = i.useMemo(() => S.slice(0, 3), [S]);
            return i.useMemo(() => {
                let e = 0,
                    l = 0,
                    i = [];
                if (n)
                    return (
                        eL(i, r),
                        {
                            categories: i,
                            availableSounds: r.get("0") ?? eb.pD,
                            isFetching: u,
                            soundCounts: {
                                favoriteSoundCount: 0,
                                unlockedCustomSoundCount: 0,
                                lockedCustomSoundCount: 0,
                            },
                        }
                    );
                I && null != E && y && eM(i, E, { allSounds: r, topSoundIds: v });
                let o = "favorite-date" === d ? ej.XP : ej.U9;
                return (
                    eO({
                        sections: i,
                        guildIds: h,
                        allSounds: r,
                        potentialSoundIdsForSection: Array.from(a),
                        sectionType: eo.Cx.FAVORITES,
                        sortSoundsFn: o,
                    }),
                    C.length > 0 &&
                        eO({
                            sections: i,
                            guildIds: h,
                            allSounds: r,
                            potentialSoundIdsForSection: C,
                            sectionType: eo.Cx.FREQUENTLY_USED,
                        }),
                    I && null != E && !y && eM(i, E, { allSounds: r, topSoundIds: v }),
                    void 0 !== g &&
                        (function (e, t, n) {
                            let {
                                    currentGuildHasAddPermissions: l,
                                    allSounds: i,
                                    filterOutEmptyCurrentGuild: s,
                                    sortSoundsFn: r,
                                } = n,
                                a = i.get(t.id) ?? [],
                                o = eR(a, r),
                                u = a.length < (0, eA.fA)(t) && l,
                                c = 0 === o.length;
                            ((u || c) && !s && o.push({ type: eo.uq.ADD_SOUND, guild: t }),
                                (s && c) ||
                                    e.push({
                                        categoryInfo: { type: eo.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                        key: t.id,
                                        items: o,
                                    }));
                        })(i, g, {
                            currentGuildHasAddPermissions: x,
                            allSounds: r,
                            filterOutEmptyCurrentGuild: t,
                            sortSoundsFn: c,
                        }),
                    f || eL(i, r),
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
                            let n = eR(i.get(e.id) ?? [], r);
                            n.length > 0 &&
                                t.push({
                                    categoryInfo: { type: eo.Cx.GUILD, guild: e, isNitroLocked: !s },
                                    key: e.id,
                                    items: n,
                                });
                        }
                    })({ sections: i, guilds: m, currentGuildId: g?.id, allSounds: r, hasNitro: s, sortSoundsFn: c }),
                    f && eL(i, r),
                    i.forEach((t) => {
                        t.categoryInfo.type === eo.Cx.GUILD &&
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
            }, [h, r, a, !0, g, x, t, f, m, n, u, s, c, C, E, v, I, y, d]);
        })(s, void 0, N),
        [eV, eG] = i.useState([]),
        eF = i.useMemo(
            () => (K.length > 0 ? [{ key: eo.Cx.SEARCH, categoryInfo: { type: eo.Cx.SEARCH }, items: eR(eV) }] : ew),
            [ew, K.length, eV],
        ),
        eH = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eB = i.useMemo(() => eF.filter((e) => e.items.length > 0), [eF]),
        eW = i.useMemo(
            () => eB.findLastIndex((e) => !!(0, U.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eB],
        ),
        eK = !H && C && -1 !== eW,
        eZ = !H && C && -1 !== eW,
        eY = en.b0.useSetting(),
        eq = i.useMemo(() => new Set(eY), [eY]),
        eJ = null == s,
        e$ = U.Ay.canUseCustomCallSounds(F),
        eX = i.useCallback(
            (e) => {
                (eq.has(e) ? eq.delete(e) : eq.add(e), en.b0.updateSetting(Array.from(eq)));
            },
            [eq],
        ),
        eQ = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, eu.Ir)(F, e, s, !1);
                if (null != h && m && i) h(e, n);
                else if (!f && i && (0, eu.Au)(s))
                    ((0, eu.Ak)(e, s?.id ?? eN.dJq, t, l),
                        z &&
                            ea.default.track(eN.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: eN.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: K,
                                location_stack: t,
                            }));
                else {
                    if ((0, eu.Ir)(F, e, s)) return;
                    C && G(e);
                }
            },
            [f, F, s, C, z, K, h, m],
        ),
        e0 = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case eo.uq.SOUND:
                        let n = tC[e?.category] ?? null,
                            l = e?.item.index;
                        return eQ(e.item.sound, null == n ? L : [...L, n], t?.shiftKey !== !0, l);
                    case eo.uq.ADD_SOUND:
                        return (o(), th(e.item.guild.id));
                }
            },
            [L, eQ, o],
        ),
        e2 = i.useCallback(
            (e, n, i, a, o) => {
                let u = eB[i.sectionIndex],
                    c = C && tE(u.categoryInfo, H, t) && eK,
                    d = Y && u.categoryInfo.type === eo.Cx.FAVORITES;
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        className: r()(tx.a, { [tx.uL]: c }),
                        children: e.map((e, t) => {
                            let n =
                                    e.item.type === eo.uq.SOUND &&
                                    e.category === eo.Cx.FAVORITES &&
                                    e.item.index === u.items.length - 1,
                                r =
                                    e.item.type === eo.uq.SOUND
                                        ? `sound-${e.item.sound.soundId}`
                                        : `add-sound-${e.item.guild.id}`;
                            return (0, l.jsx)(
                                tg,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eJ ? e$ : !W,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: L,
                                        enableFavoritesDragAndDrop: d,
                                        isLastFavoriteSound: n,
                                        onFavoriteSoundDrop: ek,
                                        disableActiveStyles: d && Q,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: f,
                                    getItemProps: a,
                                    onSelectItem: e0,
                                    onItemMouseEnter: o,
                                    buttonOverlay: I,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: C,
                                    inExpressionPicker: _,
                                },
                                r,
                            );
                        }),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eB, C, H, t, f, e0, s, eJ, e$, W, L, I, eK, _, Y, ek, Q],
        ),
        e3 = i.useCallback(
            (e, t) => {
                if (e <= 0 || !C) return !1;
                let n = eB[e],
                    l = eB[e - 1],
                    i = tE(n.categoryInfo, H, t),
                    s = tE(l.categoryInfo, H, t);
                return i && !s;
            },
            [eB, C, H],
        ),
        e8 = i.useCallback(() => {
            let e = p.A.getSoundById("3");
            null != e && G(e);
        }, []),
        e5 = i.useCallback(() => {
            let e = (0, U.Dd)(eT.PremiumTypes.TIER_2);
            return eU.intl.format(eU.t["tw/SSq"], { nitroTierName: e, onClick: e8 });
        }, [e8]),
        e6 = i.useCallback((e) => (e3(e, t) ? tA : 32), [t, e3]),
        e7 = i.useCallback(
            (e) => {
                let t = e === eB.length - 1;
                return eZ && t ? 70 : eK && e === eW ? 20 : 0;
            },
            [eB.length, eK, eZ, eW],
        ),
        e4 = i.useCallback(
            (e, t) => {
                let n = eS && eB[e]?.categoryInfo.type !== eo.Cx.FAVORITES;
                return (0, l.jsx)("div", { className: r()({ [tx.YJ]: n }), children: t }, e);
            },
            [eB, eS],
        ),
        e9 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = C && tE(e.categoryInfo, H, t),
                    r = e3(n, t),
                    a = eq.has(i);
                return (0, l.jsx)(
                    tI,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            (ea.default.track(eN.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: eN.liQ.SOUNDBOARD_POPOUT },
                                tab: ez.kx.SOUNDBOARD,
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
                        canRenderFavoritesUpsell: Y && e.items.length > 1 && e.categoryInfo.type === eo.Cx.FAVORITES,
                    },
                    `header-${i}`,
                );
            },
            [eq, eX, t, e3, C, H, eK, Y],
        ),
        te = i.useCallback(
            (e, t) => {
                let n = t === eB.length - 1,
                    i = t === eW;
                return eZ && n
                    ? (0, l.jsx)("div", { className: r()(tx.Lk, { [tx.Ns]: i }) })
                    : eK && t === eW
                      ? (0, l.jsx)("div", { className: r()(tx.a3, { [tx.Ns]: i }) })
                      : null;
            },
            [eW, eK, eZ, eB.length],
        ),
        tt = i.useCallback((e) => eG((0, ed.lG)(e, eP, F, s, L)), [s, F, eP, L]),
        tn = i.useCallback(
            (e) => {
                (0, b.L3)(e, async () => {
                    let { default: e } = await n.e("811562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: L, ...t });
                });
            },
            [L],
        ),
        tl = i.useCallback(
            () =>
                _
                    ? (0, l.jsx)($.Gq, {
                          renderPopout: () => (0, l.jsx)($.qn, {}),
                          tooltipText: eU.intl.string(eU.t["19lt24"]),
                          position: "top",
                          clickableClassName: r()(tx.Jm, tx.Zz),
                          children: (0, l.jsx)(j.H, { size: "md", color: "currentColor", className: tx.By }),
                      })
                    : (0, l.jsx)(v.D, {
                          tabIndex: 0,
                          className: tx.Jm,
                          onClick: tn,
                          "aria-label": eU.intl.string(eU.t.kbFsAD),
                          children: (0, l.jsx)(tS, { className: tx.By }),
                      }),
            [_, tn],
        ),
        ti = i.useCallback(
            (e) =>
                (0, l.jsx)(e1, {
                    soundboardListRef: e,
                    categories: ew,
                    shouldUpsellLockedCategories: eK,
                    listPadding: y,
                    guildId: t,
                    inExpressionPicker: _,
                }),
            [ew, y, eK, t, _],
        ),
        ts = i.useCallback(() => {
            let e = (0, J.qD)();
            return (0, U.LE)(e, eT.pe.TIER_2) ?? eU.intl.string(eU.t.pj0XBN);
        }, []),
        tr = i.useCallback(
            () =>
                eZ
                    ? (0, l.jsx)(X.d, {
                          showUpsell: eH,
                          text: e5(),
                          button: ts(),
                          buttonAnalyticsObject: { section: eN.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, l.jsx)(ee.l, {
                              size: "sm",
                              className: tx.ij,
                              location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                              forceDarkTheme: !0,
                          }),
                      })
                    : null,
            [e5, ts, eZ, eH],
        ),
        to = i.useCallback(
            (e) =>
                e?.item.type === eo.uq.SOUND
                    ? (0, l.jsx)(ta, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        tu = (0, A.bG)([el.A], () => el.A.getMediaSessionId());
    return (
        (0, O.A)({
            type: x.ImpressionTypes.POPOUT,
            name: x.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: T,
                guild_id: t,
                media_session_id: tu,
                available_custom_sounds_count: eD.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: eD.lockedCustomSoundCount,
                favorite_sounds_count: eD.favoriteSoundCount,
                type: eb.c4.FULL_PICKER,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != V
                    ? (0, l.jsx)(et.A, {
                          title: eU.intl.string(_ ? eU.t.rZEEvU : eU.t.jGDYF0),
                          description: eU.intl.string(_ ? eU.t.ZPNG5A : eU.t["grL/hg"]),
                          analyticsLocationSection: eN.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eT.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...D, object: eN.ZSU.SOUNDBOARD_SOUND },
                              location_stack: w,
                              sku_id: U.Ay.getSkuIdForPremiumType(eT.PremiumTypes.TIER_2),
                          },
                          onClose: () => G(null),
                          onUpsellClicked: o,
                      })
                    : void 0,
                (0, l.jsx)(q, {
                    categories: eB,
                    collapsedCategories: eq,
                    containerWidth: a,
                    store: k.LW,
                    onSelectItem: e0,
                    onSearchExpressions: tt,
                    hasSearchResults: eV.length > 0,
                    defaultSearchPlaceholder: eU.intl.string(eU.t.sKt3xS),
                    renderRow: e2,
                    renderSectionHeader: e9,
                    renderSectionFooter: te,
                    renderSection: e4,
                    renderCategoryList: ti,
                    renderHeaderAccessories: tl,
                    rowHeight: 48,
                    sectionHeaderHeight: e6,
                    sectionFooterHeight: e7,
                    itemNodeWidth: 150,
                    gridNavigatorId: Z,
                    renderEmptySearchState: ty,
                    renderInspector: to,
                    gridNotice: E,
                    renderHeader: S,
                    renderUpsell: tr,
                }),
            ],
        })
    );
}
var tN = n(70317);
function t_(e) {
    let {
            guildId: t,
            channel: n,
            containerWidth: s,
            onClose: g,
            onSelect: x,
            analyticsSource: A,
            suppressPlaySound: C,
            shouldValidateSelectedSound: E,
            shouldShowLockedSounds: I = !0,
            gridNotice: y,
            inExpressionPicker: S,
            soundButtonOverlay: v,
            listPadding: N,
            renderHeader: _,
            defaultSoundsOnly: j,
        } = e,
        { fetching: b, maybeFetchData: T } = {
            fetching: (0, h.bG)([p.A], () => p.A.isFetchingAnySounds()),
            maybeFetchData: i.useCallback(() => {
                (f.E7(), m.bW.loadIfNecessary());
            }, []),
        },
        { analyticsLocations: R } = (0, c.Ay)(u.A.SOUNDBOARD_POPOUT),
        O = S ? void 0 : { height: 520 };
    return (
        i.useEffect(() => {
            T();
        }, [T]),
        i.useEffect(() => {
            S || (0, d.Ri)("");
        }, [S]),
        (0, l.jsx)(c.f5, {
            value: R,
            children: (0, l.jsx)(a.l, {
                style: O,
                className: r()(tN.Nz, { [tN.Bg]: b, [tN.yV]: S }),
                children: b
                    ? (0, l.jsx)(o.y, {})
                    : (0, l.jsx)(tv, {
                          guildId: t,
                          channel: n,
                          onClose: g,
                          onSelect: x,
                          shouldValidateSelectedSound: E,
                          containerWidth: s,
                          suppressPlaySound: C,
                          shouldShowLockedSounds: I,
                          gridNotice: y,
                          soundButtonOverlay: v,
                          listPadding: N,
                          renderHeader: _,
                          defaultSoundsOnly: j,
                          inExpressionPicker: S,
                          analyticsSource: A,
                      }),
            }),
        })
    );
}
