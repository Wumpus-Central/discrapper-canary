n.d(t, { Z: () => em }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(55160),
    o = n(442837),
    s = n(477690),
    l = n(481060),
    c = n(788911),
    u = n(2052),
    d = n(100527),
    f = n(906732),
    p = n(218867),
    _ = n(880949),
    m = n(806966),
    h = n(28546),
    g = n(691251),
    E = n(98528),
    b = n(551058),
    y = n(695346),
    O = n(430824),
    v = n(594174),
    S = n(626135),
    I = n(624138),
    T = n(45521),
    A = n(285651),
    C = n(268350),
    N = n(217590),
    P = n(926491),
    R = n(373228),
    w = n(378233),
    D = n(419922),
    x = n(1450),
    L = n(491173),
    j = n(515005),
    M = n(981631),
    k = n(957825),
    U = n(388032),
    G = n(473049),
    Z = n(239840);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                B(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Y = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    W = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    K = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    z = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    q = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    X = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    Q = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    J = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    $ = (0, I.Mg)(s.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    ee = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    et = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    en = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    er = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    ei = ee + 2 * en + er,
    ea = et + 2 * en + er,
    eo = 20,
    es = [K, q, X, Q],
    el = [z, q, X, Q],
    ec = 12,
    eu = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    ed = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
    ef = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, r.jsx)("div", {
            className: G.searchSuggestions,
            children: ed.map((e) =>
                (0, r.jsx)(
                    l.P3F,
                    {
                        className: G.searchSuggestion,
                        onClick: () => t(e),
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: e,
                        }),
                    },
                    e,
                ),
            ),
        });
    },
    ep = (e) => {
        let { onSelectSticker: t, channel: n, currentUser: r } = e,
            a = (0, u.O)(),
            o = (0, h.Iu)((e) => e.searchQuery);
        return {
            handleStickerInspect: i.useCallback((e) => {
                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: r } = e;
                m.ZN.setActiveCategoryIndex(r),
                    m.ZN.setInspectedExpressionPosition(n, t, g.u.MOUSE_EVENT),
                    e.type === R.al.STICKER && m.ZN.setSearchPlaceholder(e.sticker.name);
            }, []),
            handleSelect: i.useCallback(
                (e, i) => {
                    if (e.type !== R.al.STICKER) return;
                    let { sticker: s } = e;
                    if (null == s) return;
                    let l = H(F({}, a.location), {
                        object: "" === o ? M.qAy.STICKER_PICKER_VIEW_ALL : M.qAy.STICKER_SEARCH_VIEW_ALL,
                    });
                    if (null != s && !(0, A.kl)(s, r, n)) {
                        let e = (0, w.J8)(s);
                        (0, A.cO)(s, r, n) === A.eb.SENDABLE_WITH_PREMIUM && (0, T.f)(!0),
                            e && A.eb.SENDABLE_WITH_BOOSTED_GUILD;
                        return;
                    }
                    if (i)
                        return void ((0, w.gM)(s.id)
                            ? (0, C.hW)(s.id)
                            : ((0, N.cQ)({
                                  sticker: s,
                                  location: H(F({}, l), { object: M.qAy.STICKER }),
                              }),
                              (0, C.SA)(s.id)));
                    t(e);
                },
                [a.location, o, r, n, t],
            ),
        };
    },
    e_ = (e) => {
        let {
                collapsedStickersCategories: t,
                gridWidth: n,
                onSelectSticker: a,
                getStickerItemProps: s,
                getStickerRowProps: c,
                gutterWidth: d,
                inspectedStickerPosition: f,
                isScrolling: p,
                isUsingKeyboardNavigation: m,
                stickersGrid: h,
                stickersCategories: g,
                filteredStickers: E,
                ownedStickerPacks: I,
                channel: T,
            } = e,
            A = (0, u.O)(),
            C = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
            { handleStickerInspect: N, handleSelect: L } = ep({
                onSelectSticker: a,
                channel: T,
                currentUser: C,
            }),
            [Z, B] = i.useState(!1),
            F = i.useCallback((e) => {
                y._O.updateSetting(Array.from(e));
            }, []),
            V = i.useCallback(
                (e) => {
                    let t = h[e];
                    return null != t
                        ? (0, r.jsx)(
                              j.Z,
                              {
                                  getStickerItemProps: s,
                                  getStickerRowProps: c,
                                  gutterWidth: d,
                                  inspectedStickerPosition: f,
                                  isScrolling: p,
                                  isUsingKeyboardNavigation: m,
                                  onInspect: N,
                                  onSelect: L,
                                  rowIndex: e,
                                  stickerClassName: G.sticker,
                                  stickerDescriptors: t,
                                  stickerSize: n > Y ? ee : et,
                                  preferAnimation: n <= W,
                                  ownedStickerPacks: I,
                                  isDisplayingIndividualStickers: !0,
                                  channel: T,
                                  currentUser: C,
                              },
                              e,
                          )
                        : null;
                },
                [h, s, c, d, f, p, m, N, L, n, I, T, C],
            ),
            H = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
            K = i.useCallback(
                function (e) {
                    let { isStickerPack: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        S.default.track(M.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: null == A ? void 0 : A.location,
                            tab: k.X1.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null,
                        }),
                        F(r);
                },
                [A, t, F],
            ),
            z = i.useCallback(
                (e) => {
                    let n = g[e];
                    if (null != E) {
                        let { sendable: t, sendableWithPremium: n } = E;
                        if (0 === e && t.length > 0) return null;
                        let i = t.length > 0 && n.length > 0;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                i
                                    ? (0, r.jsx)("div", {
                                          className: G.divider,
                                          children: (0, r.jsx)(l.izJ, {}),
                                      })
                                    : null,
                                (0, r.jsx)(
                                    b.Z,
                                    {
                                        className: G.packHeader,
                                        "aria-label": U.intl.string(U.t.wbfJFh),
                                        children: U.intl.string(U.t["05Z/0l"]),
                                    },
                                    "stickers-you-might-like-header",
                                ),
                            ],
                        });
                    }
                    switch (n.type) {
                        case R.Ih.FAVORITE:
                            return (0, r.jsx)(
                                b.Z,
                                {
                                    className: G.packHeader,
                                    "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], { categoryName: n.name }),
                                    icon: (0, r.jsx)(l.r7p, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => K(n.id, { isStickerPack: !1 }),
                                    children: n.name,
                                },
                                "header-".concat(n.id),
                            );
                        case R.Ih.RECENT:
                            return (0, r.jsx)(
                                b.Z,
                                {
                                    className: G.packHeader,
                                    "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], { categoryName: n.name }),
                                    icon: (0, r.jsx)(l.T39, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => K(n.id, { isStickerPack: !1 }),
                                    children: n.name,
                                },
                                "header-".concat(n.id),
                            );
                        case R.Ih.GUILD:
                        case R.Ih.EMPTY_GUILD_UPSELL: {
                            let e = O.Z.getGuild(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                b.Z,
                                {
                                    className: G.packHeader,
                                    "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], { categoryName: e.name }),
                                    icon: (0, r.jsx)(_.Z, {
                                        guild: e,
                                        height: 16,
                                        width: 16,
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => K(e.id),
                                    children: e.name,
                                },
                                "h".concat(e.id),
                            );
                        }
                        case R.Ih.PACK: {
                            let e = P.Z.getStickerPack(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                b.Z,
                                {
                                    className: G.packHeader,
                                    "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], { categoryName: e.name }),
                                    icon: (0, r.jsx)(D.Z, {
                                        disableAnimation: !0,
                                        size: ec,
                                        sticker: (0, w.Zt)(e),
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => K(e.id),
                                    children: e.name,
                                },
                                "h".concat(e.id),
                            );
                        }
                    }
                },
                [t, g, K, E],
            ),
            q = i.useCallback(
                (e) => {
                    if (null != E) {
                        let { sendable: t, sendableWithPremium: n } = E;
                        return 0 === e && t.length > 0 ? 0 : $ + (t.length > 0 && n.length > 0 ? J : 0);
                    }
                    return $;
                },
                [E],
            );
        return {
            renderRow: V,
            renderSection: H,
            renderSectionHeader: z,
            sectionHeaderHeight: q,
            renderSectionFooter: i.useCallback(
                (e) => {
                    let n = g[e],
                        i = t.has(n.id);
                    return n.type !== R.Ih.EMPTY_GUILD_UPSELL || null != E || i
                        ? null
                        : (0, r.jsx)(
                              x.Z,
                              {
                                  className: G.emptyGuildUpsell,
                                  guildId: n.id,
                                  channel: T,
                                  shouldTrackUpsellViewed: !Z,
                                  setTrackedUpsellViewed: B,
                              },
                              "sticker-picker-empty-guild-inline-upsell-".concat(n.id),
                          );
                },
                [g, t, E, T, Z],
            ),
            sectionFooterHeight: i.useCallback(
                (e) => {
                    let n = g[e],
                        r = t.has(n.id);
                    return n.type !== R.Ih.EMPTY_GUILD_UPSELL || r ? 0 : eu;
                },
                [g, t],
            ),
        };
    },
    em = i.forwardRef(function (e, t) {
        let {
                collapsedStickersCategories: n,
                gridWidth: s,
                filteredStickers: l,
                getStickerItemProps: u,
                getStickerRowProps: _,
                gutterWidth: g,
                isUsingKeyboardNavigation: b,
                onSelectSticker: y,
                rowCount: O,
                rowCountBySection: v,
                stickersCategories: S,
                stickersGrid: I,
                channel: T,
            } = e,
            A = i.useRef(!1),
            C = i.useRef(null),
            [N, R] = m.ZN.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], a.X),
            { analyticsLocations: w } = (0, f.ZP)(d.Z.STICKER_PICKER),
            D = (0, h.Iu)((e) => e.searchQuery),
            x = (0, o.e7)([P.Z], () => P.Z.getPremiumPacks()),
            {
                renderRow: j,
                renderSection: M,
                renderSectionFooter: k,
                sectionFooterHeight: B,
                renderSectionHeader: F,
                sectionHeaderHeight: V,
            } = e_({
                collapsedStickersCategories: n,
                gridWidth: s,
                stickersCategories: S,
                stickersGrid: I,
                isScrolling: A,
                isUsingKeyboardNavigation: b,
                onSelectSticker: y,
                getStickerItemProps: u,
                getStickerRowProps: _,
                gutterWidth: g,
                inspectedStickerPosition: R,
                filteredStickers: l,
                ownedStickerPacks: i.useMemo(() => new Set(x.map((e) => e.id)), [x]),
                channel: T,
            }),
            H = (0, E.Qs)({
                activeCategoryIndex: N,
                isScrolling: A,
                listRef: C,
                onActiveCategoryIndexChange: m.ZN.setActiveCategoryIndex,
                scrollOffset: eo,
                searchQuery: D,
            });
        return (
            (0, E.Xs)({
                searchQuery: D,
                activeCategoryIndex: N,
                listRef: C,
            }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.scrollTo(...n);
                    },
                    getRowDescriptors: () => {
                        var e, t;
                        return null != (t = null == (e = C.current) ? void 0 : e.getRowDescriptors()) ? t : [];
                    },
                    getSectionDescriptors: () => {
                        var e, t;
                        return null != (t = null == (e = C.current) ? void 0 : e.getSectionDescriptors()) ? t : [];
                    },
                    scrollToSectionTop: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.scrollToSectionTop(...n);
                    },
                    scrollRowIntoView: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.scrollRowIntoView(...n);
                    },
                    getScrollerNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.getScrollerNode(...n);
                    },
                    scrollIntoViewNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.scrollIntoViewNode(...n);
                    },
                    getListDimensions: function () {
                        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null != (t = null == (e = C.current) ? void 0 : e.getListDimensions(...r))
                            ? t
                            : {
                                  height: -1,
                                  totalHeight: -1,
                              };
                    },
                }),
                [],
            ),
            (0, r.jsx)(f.Gt, {
                value: w,
                children: (0, r.jsxs)("div", {
                    className: G.wrapper,
                    children: [
                        null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length
                            ? (0, r.jsx)(c.Z, {
                                  message: U.intl.string(U.t["zc+LQd"]),
                                  className: G.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: Z,
                                  suggestions: (0, r.jsx)(ef, { onSuggestionClick: (e) => (0, h.ql)(e, !0) }),
                              })
                            : (0, r.jsx)(p.Z, {
                                  role: "none presentation",
                                  listPadding: null != l ? el : es,
                                  onScroll: H,
                                  renderRow: j,
                                  renderSection: null == l ? M : void 0,
                                  renderSectionHeader: F,
                                  renderSectionFooter: k,
                                  rowCount: O,
                                  rowCountBySection: v,
                                  rowHeight: s > Y ? ei : ea,
                                  sectionHeaderHeight: V,
                                  sectionFooterHeight: B,
                                  stickyHeaders: !0,
                                  ref: C,
                              }),
                        (0, r.jsx)(L.Z, { stickersGrid: I }),
                    ],
                }),
            })
        );
    });
