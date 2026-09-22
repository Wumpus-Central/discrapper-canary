n.d(t, { A: () => tN });
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
var g = n(562708),
    x = n(17928),
    A = n(27232),
    C = n(406810),
    E = n(111159),
    I = n(7689),
    y = n(369606),
    S = n(939249),
    v = n(297264),
    N = n(358618),
    _ = n(983851),
    j = n(442433),
    b = n(537652),
    T = n(212245),
    R = n(139286),
    O = n(915089),
    M = n(724511),
    L = n(850992),
    k = n(887695),
    w = n(435558),
    P = n(962125),
    D = n(158045),
    U = n(240864),
    V = n(212633);
let G = i.forwardRef(function (e, t) {
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
                        (0, D.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            j = (0, k.Fk)({
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
                        F({
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
            (0, k.FV)({ searchQuery: v, activeCategoryIndex: N, listRef: S }),
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
                className: V.i,
                children: [
                    v.length > 0 && !r && null != f
                        ? f()
                        : (0, l.jsx)(P.A, {
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
    F = (0, w.throttle)(
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
            let a = (0, U.s)({
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
var H = n(462180),
    B = n(602034),
    W = n(683438),
    K = n(642232);
let z = i.forwardRef(function (e, t) {
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
        [m, f] = (0, d.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], H.x),
        p = n.useStore((e) => e.searchPlaceholder),
        [g, x] = n.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], H.x),
        A = i.useCallback(
            (e) => {
                (n.setActiveCategoryIndex("" === e ? 0 : L.Uk),
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
            className: K.i,
            children: (0, l.jsx)(W.I, {
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
                    ...(x ? { "aria-activedescendant": (0, B.Aq)(a, g.columnIndex, g.rowIndex) } : void 0),
                },
            }),
        })
    );
});
var Z = n(904289);
function Y(e) {
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
        w = i.useRef(null),
        P = i.useRef(null),
        D = i.useRef(null),
        U = 0 === t.length,
        V = (0, d.RQ)((e) => e.searchQuery),
        F = r.useStore((e) => e.inspectedExpressionPosition),
        H = (0, k.oV)({ gridWrapperRef: w, containerWidth: s, showingEmptyState: U }),
        {
            expressionsGrid: B,
            rowCount: W,
            rowCountBySection: K,
            columnCounts: Y,
            gutterWidth: q,
        } = (0, k.se)({
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
        } = (0, k.JZ)({
            columnCounts: Y,
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
        ei = i.useCallback(() => C?.(B?.[F.rowIndex]?.[F.columnIndex]), [B, F.columnIndex, F.rowIndex, C]);
    (i.useEffect(() => {
        o(V);
    }, [o, V]),
        i.useEffect(() => {
            r.setBottomPosition(w.current?.getBoundingClientRect().bottom ?? null);
        }),
        i.useEffect(() => r.resetStoreState, [r.resetStoreState]),
        i.useLayoutEffect(() => {
            D.current?.focus();
        }, []));
    let es = (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(z, {
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
            null != M ? M(es) : (0, l.jsxs)("div", { className: Z.wx, children: [" ", es, " "] }),
            U && null != f
                ? f(Z.p$)
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          I(P),
                          null != O && (0, l.jsx)("div", { className: Z.Eb, children: O }),
                          (0, l.jsx)("div", {
                              ref: w,
                              className: Z.AD,
                              id: R,
                              ...X,
                              children:
                                  null != H
                                      ? (0, l.jsx)(G, {
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
var q = n(89366),
    J = n(319993),
    $ = n(202639),
    X = n(414872),
    Q = n(285373),
    ee = n(609178),
    et = n(885386),
    en = n(763827),
    el = n(287809),
    ei = n(977997),
    es = n(147925),
    er = n(174459),
    ea = n(807348),
    eo = n(813564),
    eu = n(699840),
    ec = n(147472);
n(321073);
var ed = n(964486),
    eh = n(931991),
    em = n(734057),
    ef = n(71393),
    ep = n(576705),
    eg = n(309010),
    ex = n(473145),
    eA = n(636537),
    eC = n(228366),
    eE = n(463347),
    eI = n(125831),
    ey = n(945810);
let eS = (0, ey.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
(0, ey.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds-mobile",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
});
var ev = n(652215),
    eN = n(805143),
    e_ = n(194567),
    ej = n(980504),
    eb = n(202541);
function eT(e, t) {
    return (null != t && (e = t(e)), e.map((e, t) => ({ type: ea.uq.SOUND, sound: e, index: t })));
}
function eR(e) {
    let { sections: t, guildIds: n, allSounds: l, potentialSoundIdsForSection: i, sectionType: s, sortSoundsFn: r } = e,
        a = {};
    for (let e of [...n, "0"])
        for (let t of l.get(e) ?? []) null != i.find((e) => e === t.soundId) && (a[t.soundId] = t);
    let o = [];
    for (let e of i) {
        let t = a[e];
        null != t && o.push(t);
    }
    let u = eT(o, r);
    u.length > 0 && t.push({ key: s, categoryInfo: { type: s }, items: u });
}
function eO(e, t, n) {
    let { allSounds: l, topSoundIds: i } = n,
        s = {};
    for (let e of l.get(t.id) ?? []) s[e.soundId] = e;
    let r = [];
    for (let e of i) {
        let t = s[e];
        null != t && r.push(t);
    }
    0 !== r.length &&
        e.push({ key: ea.Cx.TOP_SOUNDS, categoryInfo: { type: ea.Cx.TOP_SOUNDS, guild: t }, items: eT(r) });
}
function eM(e, t) {
    let n = t.get("0") ?? ej.pD;
    e.push({ key: ea.Cx.DEFAULTS, categoryInfo: { type: ea.Cx.DEFAULTS }, items: eT(n, e_.U9) });
}
var eL = n(554146),
    ek = n(43105),
    ew = n(131607),
    eP = n(49999),
    eD = n(375708);
function eU(e) {
    let { targetElementRef: t } = e,
        { allowReordering: n } = eu.q.useConfig({ location: "SoundboardFavoritesCoachmark" }),
        [i, s] = (0, ew.kn)(n ? [eL.M.SOUNDBOARD_FAVORITES_ORDERING_COACHMARK] : [], void 0, !0);
    return i !== eL.M.SOUNDBOARD_FAVORITES_ORDERING_COACHMARK
        ? null
        : (0, l.jsx)(ek.A, {
              targetElementRef: t,
              onRequestClose: function (e) {
                  (("user:escape" === e || "user:explicit" === e) && s(eP.i.DISMISS), s(eP.i.AUTO_DISMISS));
              },
              title: eD.intl.string(eD.t.KFcQy8),
              body: eD.intl.string(eD.t["P/1x7s"]),
              badge: "beta",
          });
}
var eV = n(837381),
    eG = n(866665),
    eF = n(713517),
    eH = n(88218),
    eB = n(407698),
    eW = n(941971),
    eK = n(698279),
    ez = n(120052);
let eZ = [8, 8, 8, 8],
    eY = "soundboard_guild_",
    { itemIdForIndex: eq } = (0, eH.J)(eY);
function eJ(e) {
    let { children: t, className: n, isSelected: s, listItemProps: r, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, eF.A)(o);
    return (0, l.jsxs)(S.D, {
        innerRef: o,
        ...r,
        className: n,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: ez.a$,
                children: (0, l.jsx)(eW.A, { hovered: u, selected: s, size: "small" }),
            }),
            t,
        ],
    });
}
function e$(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: s } = e;
    return (0, l.jsx)(eJ, {
        className: r()(ez.Yl, { [ez.wH]: n }),
        isSelected: n,
        listItemProps: s,
        onClick: i,
        children: (0, l.jsx)(t, { className: ez.xi, color: "currentColor" }),
    });
}
function eX(e, t, n, i, s) {
    switch (e.categoryInfo.type) {
        case ea.Cx.FAVORITES:
            return (0, l.jsx)(e$, { icon: A.StarIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ea.Cx.FREQUENTLY_USED:
            return (0, l.jsx)(e$, { icon: C.ClockIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ea.Cx.GUILD:
            return (0, l.jsx)(
                eJ,
                {
                    className: ez.L1,
                    isSelected: n,
                    listItemProps: i,
                    onClick: t,
                    children: (0, l.jsx)(M.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: s }),
                },
                e.key,
            );
        case ea.Cx.DEFAULTS:
            return (0, l.jsx)(e$, { icon: E.p, onClick: t, isSelected: n, listItemProps: i }, e.key);
        case ea.Cx.TOP_SOUNDS:
            return (0, l.jsx)(e$, { icon: y.TrophyIcon, onClick: t, isSelected: n, listItemProps: i }, e.key);
        default:
            return null;
    }
}
function eQ(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: s, isNitroLocked: r } = e,
        a = (0, eV.rm)(eq(n));
    return t.categoryInfo.type === ea.Cx.GUILD
        ? (0, l.jsx)(eB.Q, { guild: t.categoryInfo.guild, children: eX(t, i, s, a, r) })
        : (0, l.jsx)(eG.m, {
              text: (function (e) {
                  switch (e.categoryInfo.type) {
                      case ea.Cx.FAVORITES:
                          return eD.intl.string(eD.t.k8fFjp);
                      case ea.Cx.FREQUENTLY_USED:
                          return eD.intl.string(eD.t["+cGVV6"]);
                      case ea.Cx.GUILD:
                          return e.categoryInfo.guild.name;
                      case ea.Cx.DEFAULTS:
                          return eD.intl.string(eD.t.Rtvk9X);
                      case ea.Cx.TOP_SOUNDS:
                          return eD.intl.formatToPlainString(eD.t.GXs41w, { guildName: e.categoryInfo.guild.name });
                  }
              })(t),
              position: "right",
              align: "center",
              children: eX(t, i, s, a, r),
          });
}
function e0(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: s,
            listPadding: a = eZ,
            guildId: o,
            inExpressionPicker: u,
        } = e,
        c = i.useRef(null),
        d = (0, x.bG)([el.default], () => el.default.getCurrentUser()),
        h = (0, D.TW)(d, eb.PremiumTypes.TIER_2),
        m = i.useCallback(
            (e, t, n, i) => {
                let r = s && tC(e.categoryInfo, h, o);
                return (0, l.jsx)(eQ, {
                    category: e,
                    categoryIndex: t,
                    onClick: function () {
                        (er.default.track(ev.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: ev.liQ.SOUNDBOARD_POPOUT },
                            guild_id: o ?? null,
                            num_expressions: e.items.length,
                            tab: eK.kx.SOUNDBOARD,
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
    return (0, l.jsx)(eH.A, {
        className: r()(u ? ez.HZ : ez.jv),
        categoryListRef: c,
        expressionsListRef: t,
        store: L.LW,
        categories: n,
        listPadding: a,
        renderCategoryListItem: m,
        rowCount: n.length,
        categoryHeight: 40,
        navId: "soundboard-picker-categories",
        itemIdPrefix: eY,
    });
}
var e1 = n(191023),
    e2 = n(192308),
    e3 = n(28863),
    e8 = n(695366),
    e6 = n(834730),
    e5 = n(789645),
    e7 = n(565645),
    e4 = n(775602),
    e9 = n(826673),
    te = n(182922),
    tt = n(532624),
    tn = n(531685),
    tl = n(723702),
    ti = n(350535),
    ts = n(115023);
function tr(e) {
    let { soundboardSound: t, closePicker: i } = e,
        s = (0, d.RQ)((e) => e.searchQuery),
        r = (0, h.bG)([p.A], () => null != t && p.A.isFavoriteSound(t.soundId)),
        a = (0, h.bG)([ef.A], () => ef.A.getGuild(t?.guildId)),
        o = (0, h.bG)([e4.Ay], () => e4.Ay.useReducedMotion, []),
        u = (0, h.bG)([tn.A], () => tn.A.isFocused()),
        c = (0, h.bG)([tt.Ay], () => tt.Ay.getKeybindForAction(ev.hCu.SOUNDBOARD_HOLD));
    if (null != t && s.length > 0)
        return (0, l.jsx)(te.A, {
            graphicPrimary:
                null != t.emojiId || null != t.emojiName
                    ? (0, l.jsx)(e7.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: ts.Zg })
                    : (0, l.jsx)(e1.ImageIcon, { size: "md", color: "currentColor", className: ts.Zg }),
            graphicSecondary: null != a ? (0, l.jsx)(M.A, { guild: a, shouldAnimate: !o && u }) : null,
            titlePrimary: t.name,
            titleSecondary: a?.name,
            isFavorite: r,
        });
    function m() {
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
    let f = (0, e9.k8)(eL.M.SOUNDBOARD_KEYBIND_TIP),
        g =
            null != c && (0, tl.isWindows)() && !f
                ? eD.intl.format(eD.t.udMTth, {
                      keybind: (0, ti.dI)(c.shortcut, !0),
                      openSettingsHook: (e, t) => (0, l.jsx)(e3.Anchor, { onClick: m, children: e }, t),
                  })
                : null;
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: ts.g,
              children: [
                  (0, l.jsx)(e8.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: ts.QW }),
                  (0, l.jsx)(e6.E, { variant: "text-sm/medium", color: "text-default", className: ts.L5, children: g }),
                  (0, l.jsx)(S.D, {
                      className: ts.b,
                      onClick: function () {
                          return (0, e9.Dr)(eL.M.SOUNDBOARD_KEYBIND_TIP);
                      },
                      children: (0, l.jsx)(e5.P, { size: "xs", color: "currentColor" }),
                  }),
              ],
          });
}
var ta = n(817232),
    to = n(890856),
    tu = n(307301),
    tc = n(468689);
function td(e) {
    (tc.A.open(e, ev.BEX.SOUNDBOARD),
        (0, e2.openModalLazy)(async () => {
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
var th = n(948611),
    tm = n(308078);
function tf(e) {
    let { guild: t, focused: n, onSelectItem: i, ...s } = e,
        { canCreateExpressions: a } = (0, eh.nr)(t);
    return (0, l.jsx)(eG.m, {
        text: eD.intl.string(eD.t["fHo+z1"]),
        shouldShow: !a,
        children: (0, l.jsx)("li", {
            className: th.H,
            children: (0, l.jsxs)(to.s, {
                ...s,
                "aria-label": eD.intl.formatToPlainString(eD.t.c1qVYh, { guildName: t.name }),
                className: r()(tm.n4, { [tm.in]: n, [tm.r9]: !a }),
                onClick: () => (null != i ? i() : td(t.id)),
                children: [
                    (0, l.jsx)(tu.j, { size: "sm", color: "currentColor" }),
                    (0, l.jsx)(e6.E, {
                        variant: "text-xs/semibold",
                        color: a ? "currentColor" : "text-muted",
                        children: eD.intl.string(eD.t["8Fu/S7"]),
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
        p = L.LW.useStore((e) => e.inspectedExpressionPosition),
        g = `${l}-${s}`,
        x = r && p.rowIndex === l && p.columnIndex === s;
    switch (t.item.type) {
        case ea.uq.SOUND:
            return (0, i.createElement)(ta.Ay, {
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
        case ea.uq.ADD_SOUND:
            return (0, i.createElement)(tf, {
                ...o(s),
                key: g,
                guild: t.item.guild,
                focused: x,
                onSelectItem: () => u(t),
            });
    }
}
var tg = n(635799);
let tx = 32 + X.kg - 8,
    tA = {
        [ea.Cx.SEARCH]: u.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [ea.Cx.DEFAULTS]: u.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [ea.Cx.GUILD]: u.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [ea.Cx.FAVORITES]: u.A.SOUNDBOARD_FAVORITES_SECTION,
        [ea.Cx.FREQUENTLY_USED]: u.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
        [ea.Cx.TOP_SOUNDS]: u.A.SOUNDBOARD_TOP_SOUNDS_SECTION,
    };
function tC(e, t, n) {
    return (null == n && e.type === ea.Cx.GUILD && !t) || (e.type === ea.Cx.GUILD && e.guild.id !== n && !t);
}
function tE(e) {
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
            o && (0, l.jsx)(X.Ay, { className: tg.yH }),
            (0, l.jsx)("div", {
                className: r()(tg.hd, { [tg.Jb]: a, [tg.VD]: a }),
                children: (0, l.jsx)(S.D, {
                    className: tg.bV,
                    onClick: s,
                    onKeyDown: (e) => e.stopPropagation(),
                    "aria-expanded": !n,
                    children: (0, l.jsxs)("div", {
                        className: tg.M2,
                        ref: u ? c : void 0,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case ea.Cx.FAVORITES:
                                        return (0, l.jsx)(A.StarIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tg.nr,
                                        });
                                    case ea.Cx.FREQUENTLY_USED:
                                        return (0, l.jsx)(C.ClockIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tg.nr,
                                        });
                                    case ea.Cx.GUILD:
                                        return (0, l.jsx)(M.A, { guild: t.guild, height: 16, width: 16 });
                                    case ea.Cx.DEFAULTS:
                                        return (0, l.jsx)(E.p, {
                                            size: "custom",
                                            width: 28,
                                            height: 28,
                                            color: "currentColor",
                                            className: tg.nr,
                                        });
                                    case ea.Cx.SEARCH:
                                        return (0, l.jsx)(I.MagnifyingGlassIcon, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tg.nr,
                                        });
                                    case ea.Cx.TOP_SOUNDS:
                                        return (0, l.jsx)(y.TrophyIcon, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: tg.nr,
                                        });
                                }
                            })(),
                            (0, l.jsx)(v.D, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: tg.Gf,
                                children: (function () {
                                    switch (t.type) {
                                        case ea.Cx.FAVORITES:
                                            return eD.intl.string(eD.t.k8fFjp);
                                        case ea.Cx.FREQUENTLY_USED:
                                            return eD.intl.string(eD.t["+cGVV6"]);
                                        case ea.Cx.GUILD:
                                            return t.guild.name;
                                        case ea.Cx.DEFAULTS:
                                            return eD.intl.string(eD.t.Rtvk9X);
                                        case ea.Cx.SEARCH:
                                            return eD.intl.string(eD.t["zkoeq/"]);
                                        case ea.Cx.TOP_SOUNDS:
                                            return eD.intl.formatToPlainString(eD.t.GXs41w, {
                                                guildName: t.guild.name,
                                            });
                                    }
                                })(),
                            }),
                            (0, l.jsx)(es.A, {
                                className: tg.nr,
                                direction: n ? es.A.Directions.RIGHT : es.A.Directions.DOWN,
                            }),
                        ],
                    }),
                }),
            }),
            u && (0, l.jsx)(eU, { targetElementRef: c }),
        ],
    });
}
function tI() {
    return (0, l.jsx)(b.A, { message: eD.intl.string(eD.t.bgDdNK) });
}
function ty(e) {
    let { className: t } = e,
        n = (0, x.bG)([p.A], () => p.A.isSoundboardVolumeMuted()) ? N._ : _.H;
    return (0, l.jsx)(n, { size: "md", color: "currentColor", className: t });
}
function tS(e) {
    let {
            guildId: t,
            channel: s,
            containerWidth: a,
            onClose: o,
            onSelect: h,
            shouldValidateSelectedSound: m = !1,
            suppressPlaySound: f = !1,
            shouldShowLockedSounds: A = !0,
            gridNotice: C,
            soundButtonOverlay: E,
            listPadding: I,
            renderHeader: y,
            defaultSoundsOnly: v = !1,
            inExpressionPicker: N,
            analyticsSource: b,
        } = e,
        { analyticsLocations: M } = (0, c.Ay)(),
        { analyticsLocations: k } = (0, c.Ay)(u.A.PREMIUM_UPSELL),
        { location: w } = (0, T.p)(),
        P = i.useMemo(() => ({ ...w, section: ev.JJy.SOUNDBOARD_SOUND_PICKER }), [w]),
        [U, V] = i.useState(null),
        G = (0, x.bG)([el.default], () => el.default.getCurrentUser()),
        F = (0, D.TW)(G, eb.PremiumTypes.TIER_2),
        H = (0, x.bG)([ei.A], () => ei.A.getVoiceState(t, G?.id ?? ev.dJq)),
        B = H?.selfDeaf || H?.mute || H?.suppress,
        W = (0, d.RQ)((e) => e.searchQuery),
        K = null != W && "" !== W,
        z = (0, O.GV)(),
        { allowReordering: Z } = eu.q.useConfig({ location: "SoundboardSoundGrid" }),
        [X, es] = i.useState(!1),
        ey = i.useCallback(() => {
            es(!0);
        }, []);
    i.useEffect(() => {
        if (X)
            return (
                window.addEventListener("mousemove", e),
                () => {
                    window.removeEventListener("mousemove", e);
                }
            );
        function e() {
            es(!1);
        }
    }, [X]);
    let {
            categories: eL,
            availableSounds: ek,
            soundCounts: ew,
        } = (function (e) {
            let { filterOutEmptyCurrentGuild: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = (0, x.bG)([el.default], () => el.default.getCurrentUser()),
                s = D.Ay.isPremium(l, eb.PremiumTypes.TIER_2),
                [r, a, o, u] = (0, x.yK)([p.A], () => [
                    p.A.getSounds(),
                    p.A.getFavorites(),
                    p.A.getFrequentlyUsedSoundIds(),
                    p.A.isFetching(),
                ]),
                c = (0, e_.IJ)(),
                { sortOrder: d } = eu.q.useConfig({ location: "useSoundGrid" }),
                h = (0, eN.Y)(e, !1),
                m = (0, x.yK)([ef.A], () => {
                    let e = [];
                    return (
                        h.forEach((t) => {
                            let n = ef.A.getGuild(t);
                            null != n && e.push(n);
                        }),
                        e
                    );
                }),
                f = D.Ay.canUseSoundboardEverywhere(l),
                g = (0, x.bG)([ef.A], () => ef.A.getGuild(e?.guild_id)),
                A = (0, x.bG)(
                    [ep.A],
                    () => {
                        let { canCreateExpressions: e } = (0, eh.ie)(g);
                        return e;
                    },
                    [g],
                ),
                C = i.useMemo(() => o.filter((e) => !a.has(e)).slice(0, 3), [o, a]),
                E = (0, x.bG)([eg.Ay, em.A, ef.A], () => {
                    let e = eg.Ay.getVoiceChannelId(),
                        t = null != e ? em.A.getChannel(e) : null;
                    return t?.guild_id != null ? ef.A.getGuild(t.guild_id) : void 0;
                }),
                { enabled: I, topSoundsFirst: y } = eS.getConfig({ location: "useSoundGrid" });
            (0, ed.Ay)(() => {
                I &&
                    (function (e) {
                        var t;
                        if (
                            null == e ||
                            null == el.default.getCurrentUser() ||
                            !eS.getConfig({ location: "maybeFetchTopSoundboardSoundsByGuild" }).enabled
                        )
                            return;
                        let n = p.A.getTopSoundboardSoundsMetadata(e);
                        if (null != n) {
                            let { topSoundsTTL: e } = n;
                            if (null == e || Date.now() < e) return;
                        }
                        eI.A.getIsFetching(e) ||
                            ((t = e),
                            (0, eE.tZ)(t) ||
                                (eC.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: t }),
                                eA.Bo.get({
                                    url: ev.Rsh.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(t),
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
                    })(E?.id);
            });
            let S = (0, x.yK)([p.A], () => p.A.getTopSoundboardSoundIds(E?.id)),
                v = i.useMemo(() => S.slice(0, 3), [S]);
            return i.useMemo(() => {
                let e = 0,
                    l = 0,
                    i = [];
                if (n)
                    return (
                        eM(i, r),
                        {
                            categories: i,
                            availableSounds: r.get("0") ?? ej.pD,
                            isFetching: u,
                            soundCounts: {
                                favoriteSoundCount: 0,
                                unlockedCustomSoundCount: 0,
                                lockedCustomSoundCount: 0,
                            },
                        }
                    );
                I && null != E && y && eO(i, E, { allSounds: r, topSoundIds: v });
                let o = "favorite-date" === d ? e_.XP : e_.U9;
                return (
                    eR({
                        sections: i,
                        guildIds: h,
                        allSounds: r,
                        potentialSoundIdsForSection: Array.from(a),
                        sectionType: ea.Cx.FAVORITES,
                        sortSoundsFn: o,
                    }),
                    C.length > 0 &&
                        eR({
                            sections: i,
                            guildIds: h,
                            allSounds: r,
                            potentialSoundIdsForSection: C,
                            sectionType: ea.Cx.FREQUENTLY_USED,
                        }),
                    I && null != E && !y && eO(i, E, { allSounds: r, topSoundIds: v }),
                    void 0 !== g &&
                        (function (e, t, n) {
                            let {
                                    currentGuildHasAddPermissions: l,
                                    allSounds: i,
                                    filterOutEmptyCurrentGuild: s,
                                    sortSoundsFn: r,
                                } = n,
                                a = i.get(t.id) ?? [],
                                o = eT(a, r),
                                u = a.length < (0, ex.fA)(t) && l,
                                c = 0 === o.length;
                            ((u || c) && !s && o.push({ type: ea.uq.ADD_SOUND, guild: t }),
                                (s && c) ||
                                    e.push({
                                        categoryInfo: { type: ea.Cx.GUILD, guild: t, isNitroLocked: !1 },
                                        key: t.id,
                                        items: o,
                                    }));
                        })(i, g, {
                            currentGuildHasAddPermissions: A,
                            allSounds: r,
                            filterOutEmptyCurrentGuild: t,
                            sortSoundsFn: c,
                        }),
                    f || eM(i, r),
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
                            let n = eT(i.get(e.id) ?? [], r);
                            n.length > 0 &&
                                t.push({
                                    categoryInfo: { type: ea.Cx.GUILD, guild: e, isNitroLocked: !s },
                                    key: e.id,
                                    items: n,
                                });
                        }
                    })({ sections: i, guilds: m, currentGuildId: g?.id, allSounds: r, hasNitro: s, sortSoundsFn: c }),
                    f && eM(i, r),
                    i.forEach((t) => {
                        t.categoryInfo.type === ea.Cx.GUILD &&
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
            }, [h, r, a, !0, g, A, t, f, m, n, u, s, c, C, E, v, I, y, d]);
        })(s, void 0, v),
        [eP, eU] = i.useState([]),
        eV = i.useMemo(
            () => (W.length > 0 ? [{ key: ea.Cx.SEARCH, categoryInfo: { type: ea.Cx.SEARCH }, items: eT(eP) }] : eL),
            [eL, W.length, eP],
        ),
        eG = (0, d.RQ)((e) => e.isNitroLockedSectionVisible),
        eF = i.useMemo(() => eV.filter((e) => e.items.length > 0), [eV]),
        eH = i.useMemo(
            () => eF.findLastIndex((e) => !!(0, D.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
            [eF],
        ),
        eB = !F && A && -1 !== eH,
        eW = !F && A && -1 !== eH,
        ez = et.b0.useSetting(),
        eZ = i.useMemo(() => new Set(ez), [ez]),
        eY = null == s,
        eq = D.Ay.canUseCustomCallSounds(G),
        eJ = i.useCallback(
            (e) => {
                (eZ.has(e) ? eZ.delete(e) : eZ.add(e), et.b0.updateSetting(Array.from(eZ)));
            },
            [eZ],
        ),
        e$ = i.useCallback(
            (e, t, n, l) => {
                if (null != h && !m) return h(e, n);
                let i = (0, eo.Ir)(G, e, s, !1);
                if (null != h && m && i) h(e, n);
                else if (!f && i && (0, eo.Au)(s))
                    ((0, eo.Ak)(e, s?.id ?? ev.dJq, t, l),
                        K &&
                            er.default.track(ev.HAw.SEARCH_RESULT_SELECTED, {
                                search_type: ev.I4_.SOUNDBOARD,
                                channel_id: s?.id,
                                query: W,
                                location_stack: t,
                            }));
                else {
                    if ((0, eo.Ir)(G, e, s)) return;
                    A && V(e);
                }
            },
            [f, G, s, A, K, W, h, m],
        ),
        eX = i.useCallback(
            (e, t) => {
                switch (e.item.type) {
                    case ea.uq.SOUND:
                        let n = tA[e?.category] ?? null,
                            l = e?.item.index;
                        return e$(e.item.sound, null == n ? M : [...M, n], t?.shiftKey !== !0, l);
                    case ea.uq.ADD_SOUND:
                        return (o(), td(e.item.guild.id));
                }
            },
            [M, e$, o],
        ),
        eQ = i.useCallback(
            (e, n, i, a, o) => {
                let u = eF[i.sectionIndex],
                    c = A && tC(u.categoryInfo, F, t) && eB,
                    d = Z && u.categoryInfo.type === ea.Cx.FAVORITES;
                return (0, l.jsx)(
                    "ul",
                    {
                        ...n,
                        className: r()(tg.a, { [tg.uL]: c }),
                        children: e.map((e, t) => {
                            let n =
                                    e.item.type === ea.uq.SOUND &&
                                    e.category === ea.Cx.FAVORITES &&
                                    e.item.index === u.items.length - 1,
                                r =
                                    e.item.type === ea.uq.SOUND
                                        ? `sound-${e.item.sound.soundId}`
                                        : `add-sound-${e.item.guild.id}`;
                            return (0, l.jsx)(
                                tp,
                                {
                                    descriptor: e,
                                    soundButtonProps: {
                                        channel: s,
                                        interactive: eY ? eq : !B,
                                        forceSecondaryActions: !0,
                                        analyticsLocations: M,
                                        enableFavoritesDragAndDrop: d,
                                        isLastFavoriteSound: n,
                                        onFavoriteSoundDrop: ey,
                                        disableActiveStyles: d && X,
                                    },
                                    rowIndex: i.rowIndex,
                                    columnIndex: t,
                                    isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                                    suppressPlaySound: f,
                                    getItemProps: a,
                                    onSelectItem: eX,
                                    onItemMouseEnter: o,
                                    buttonOverlay: E,
                                    isNitroLocked: c,
                                    showLockForDisabledSound: A,
                                    inExpressionPicker: N,
                                },
                                r,
                            );
                        }),
                    },
                    `row-${n["aria-rowindex"]}`,
                );
            },
            [eF, A, F, t, f, eX, s, eY, eq, B, M, E, eB, N, Z, ey, X],
        ),
        e1 = i.useCallback(
            (e, t) => {
                if (e <= 0 || !A) return !1;
                let n = eF[e],
                    l = eF[e - 1],
                    i = tC(n.categoryInfo, F, t),
                    s = tC(l.categoryInfo, F, t);
                return i && !s;
            },
            [eF, A, F],
        ),
        e2 = i.useCallback(() => {
            let e = p.A.getSoundById("3");
            null != e && V(e);
        }, []),
        e3 = i.useCallback(() => {
            let e = (0, D.Dd)(eb.PremiumTypes.TIER_2);
            return eD.intl.format(eD.t["tw/SSq"], { nitroTierName: e, onClick: e2 });
        }, [e2]),
        e8 = i.useCallback((e) => (e1(e, t) ? tx : 32), [t, e1]),
        e6 = i.useCallback(
            (e) => {
                let t = e === eF.length - 1;
                return eW && t ? 70 : eB && e === eH ? 20 : 0;
            },
            [eF.length, eB, eW, eH],
        ),
        e5 = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
        e7 = i.useCallback(
            (e, n) => {
                let i = `${e.key}`,
                    s = A && tC(e.categoryInfo, F, t),
                    r = e1(n, t),
                    a = eZ.has(i);
                return (0, l.jsx)(
                    tE,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: function () {
                            (er.default.track(ev.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: { page: ev.liQ.SOUNDBOARD_POPOUT },
                                tab: eK.kx.SOUNDBOARD,
                                guild_id: t ?? null,
                                collapsed: !a,
                                sticker_pack_id: null,
                                num_expressions: e.items.length,
                            }),
                                eJ(i));
                        },
                        collapsed: a,
                        isSectionNitroLocked: s && eB,
                        showNitroDivider: r && eB,
                        canRenderFavoritesUpsell: Z && e.items.length > 1 && e.categoryInfo.type === ea.Cx.FAVORITES,
                    },
                    `header-${i}`,
                );
            },
            [eZ, eJ, t, e1, A, F, eB, Z],
        ),
        e4 = i.useCallback(
            (e, t) => {
                let n = t === eF.length - 1,
                    i = t === eH;
                return eW && n
                    ? (0, l.jsx)("div", { className: r()(tg.Lk, { [tg.Ns]: i }) })
                    : eB && t === eH
                      ? (0, l.jsx)("div", { className: r()(tg.a3, { [tg.Ns]: i }) })
                      : null;
            },
            [eH, eB, eW, eF.length],
        ),
        e9 = i.useCallback((e) => eU((0, ec.lG)(e, ek, G, s, M)), [s, G, ek, M]),
        te = i.useCallback(
            (e) => {
                (0, j.L3)(e, async () => {
                    let { default: e } = await n.e("811562").then(n.bind(n, 666801));
                    return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: M, ...t });
                });
            },
            [M],
        ),
        tt = i.useCallback(
            () =>
                N
                    ? (0, l.jsx)(J.Gq, {
                          renderPopout: () => (0, l.jsx)(J.qn, {}),
                          tooltipText: eD.intl.string(eD.t["19lt24"]),
                          position: "top",
                          clickableClassName: r()(tg.Jm, tg.Zz),
                          children: (0, l.jsx)(_.H, { size: "md", color: "currentColor", className: tg.By }),
                      })
                    : (0, l.jsx)(S.D, {
                          tabIndex: 0,
                          className: tg.Jm,
                          onClick: te,
                          "aria-label": eD.intl.string(eD.t.kbFsAD),
                          children: (0, l.jsx)(ty, { className: tg.By }),
                      }),
            [N, te],
        ),
        tn = i.useCallback(
            (e) =>
                (0, l.jsx)(e0, {
                    soundboardListRef: e,
                    categories: eL,
                    shouldUpsellLockedCategories: eB,
                    listPadding: I,
                    guildId: t,
                    inExpressionPicker: N,
                }),
            [eL, I, eB, t, N],
        ),
        tl = i.useCallback(() => {
            let e = (0, q.qD)();
            return (0, D.LE)(e, eb.pe.TIER_2) ?? eD.intl.string(eD.t.pj0XBN);
        }, []),
        ti = i.useCallback(
            () =>
                eW
                    ? (0, l.jsx)($.d, {
                          showUpsell: eG,
                          text: e3(),
                          button: tl(),
                          buttonAnalyticsObject: { section: ev.JJy.SOUND_PICKER_FLOATING_UPSELL },
                          leadingAction: (0, l.jsx)(Q.l, {
                              size: "sm",
                              className: tg.ij,
                              location: u.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                              forceDarkTheme: !0,
                          }),
                      })
                    : null,
            [e3, tl, eW, eG],
        ),
        ts = i.useCallback(
            (e) =>
                e?.item.type === ea.uq.SOUND
                    ? (0, l.jsx)(tr, { closePicker: o, soundboardSound: e?.item.sound ?? null })
                    : null,
            [o],
        ),
        ta = (0, x.bG)([en.A], () => en.A.getMediaSessionId());
    return (
        (0, R.A)({
            type: g.ImpressionTypes.POPOUT,
            name: g.ImpressionNames.SOUNDBOARD_POPOUT,
            properties: {
                source: b,
                guild_id: t,
                media_session_id: ta,
                available_custom_sounds_count: ew.unlockedCustomSoundCount,
                unavailable_custom_sounds_count: ew.lockedCustomSoundCount,
                favorite_sounds_count: ew.favoriteSoundCount,
                type: ej.c4.FULL_PICKER,
            },
        }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null != U
                    ? (0, l.jsx)(ee.A, {
                          title: eD.intl.string(N ? eD.t.rZEEvU : eD.t.jGDYF0),
                          description: eD.intl.string(N ? eD.t.ZPNG5A : eD.t["grL/hg"]),
                          analyticsLocationSection: ev.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: eb.e.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: { ...P, object: ev.ZSU.SOUNDBOARD_SOUND },
                              location_stack: k,
                              sku_id: D.Ay.getSkuIdForPremiumType(eb.PremiumTypes.TIER_2),
                          },
                          onClose: () => V(null),
                          onUpsellClicked: o,
                      })
                    : void 0,
                (0, l.jsx)(Y, {
                    categories: eF,
                    collapsedCategories: eZ,
                    containerWidth: a,
                    store: L.LW,
                    onSelectItem: eX,
                    onSearchExpressions: e9,
                    hasSearchResults: eP.length > 0,
                    defaultSearchPlaceholder: eD.intl.string(eD.t.sKt3xS),
                    renderRow: eQ,
                    renderSectionHeader: e7,
                    renderSectionFooter: e4,
                    renderSection: e5,
                    renderCategoryList: tn,
                    renderHeaderAccessories: tt,
                    rowHeight: 48,
                    sectionHeaderHeight: e8,
                    sectionFooterHeight: e6,
                    itemNodeWidth: 150,
                    gridNavigatorId: z,
                    renderEmptySearchState: tI,
                    renderInspector: ts,
                    gridNotice: C,
                    renderHeader: y,
                    renderUpsell: ti,
                }),
            ],
        })
    );
}
var tv = n(70317);
function tN(e) {
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
                className: r()(tv.Nz, { [tv.Bg]: b, [tv.yV]: S }),
                children: b
                    ? (0, l.jsx)(o.y, {})
                    : (0, l.jsx)(tS, {
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
