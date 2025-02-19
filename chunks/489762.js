n.d(t, { Z: () => em }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(232713),
    a = n(442837),
    s = n(477690),
    l = n(481060),
    c = n(788911),
    u = n(2052),
    d = n(100527),
    f = n(906732),
    p = n(218867),
    _ = n(880949),
    h = n(806966),
    m = n(28546),
    g = n(691251),
    E = n(98528),
    v = n(551058),
    b = n(695346),
    y = n(430824),
    O = n(594174),
    S = n(626135),
    I = n(624138),
    T = n(45521),
    N = n(285651),
    A = n(268350),
    C = n(217590),
    R = n(926491),
    P = n(373228),
    w = n(378233),
    D = n(419922),
    x = n(1450),
    L = n(491173),
    M = n(515005),
    k = n(652136),
    j = n(981631),
    U = n(957825),
    G = n(388032),
    B = n(856525),
    Z = n(239840);
function F(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                F(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Y = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    K = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    z = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    q = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    Q = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    X = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    J = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    $ = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    ee = (0, I.Mg)(s.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    et = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    en = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    er = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    ei = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    eo = et + 2 * er + ei,
    ea = en + 2 * er + ei,
    es = 20,
    el = [z, Q, X, J],
    ec = [q, Q, X, J],
    eu = 12,
    ed = (0, I.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    ef = ['laugh', 'wave', 'yes', 'dance', 'sad', 'no', 'hi', 'bye', 'cry', 'ok'],
    ep = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, r.jsx)('div', {
            className: B.searchSuggestions,
            children: ef.map((e) =>
                (0, r.jsx)(
                    l.P3F,
                    {
                        className: B.searchSuggestion,
                        onClick: () => t(e),
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: e
                        })
                    },
                    e
                )
            )
        });
    },
    e_ = (e) => {
        let { onSelectSticker: t, channel: n, currentUser: r } = e,
            o = (0, u.O)(),
            { analyticsLocations: a } = (0, f.ZP)(),
            s = (0, m.Iu)((e) => e.searchQuery);
        return {
            handleStickerInspect: i.useCallback((e) => {
                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: r } = e;
                h.ZN.setActiveCategoryIndex(r), h.ZN.setInspectedExpressionPosition(n, t, g.u.MOUSE_EVENT), e.type === P.al.STICKER && h.ZN.setSearchPlaceholder(e.sticker.name);
            }, []),
            handleSelect: i.useCallback(
                (e, i) => {
                    if (e.type !== P.al.STICKER) return;
                    let { packId: l, sticker: c } = e;
                    if (null == c) return;
                    let u = W(V({}, o.location), { object: '' === s ? j.qAy.STICKER_PICKER_VIEW_ALL : j.qAy.STICKER_SEARCH_VIEW_ALL });
                    if (null != c && !(0, N.kl)(c, r, n)) {
                        let e = R.Z.getStickerPack(l);
                        null != e &&
                            (S.default.track(j.rMx.STICKER_PACK_VIEW_ALL, {
                                sticker_id: c.id,
                                sticker_pack_id: l,
                                location: u,
                                location_stack: a
                            }),
                            (0, k.Z)({
                                stickerPack: e,
                                analyticsLocations: a
                            }));
                        let t = (0, w.J8)(c);
                        (0, N.cO)(c, r, n) === N.eb.SENDABLE_WITH_PREMIUM && (0, T.f)(!0), t && N.eb.SENDABLE_WITH_BOOSTED_GUILD;
                        return;
                    }
                    if (i) {
                        (0, w.gM)(c.id)
                            ? (0, A.hW)(c.id)
                            : ((0, C.cQ)({
                                  sticker: c,
                                  location: W(V({}, u), { object: j.qAy.STICKER })
                              }),
                              (0, A.SA)(c.id));
                        return;
                    }
                    t(e);
                },
                [o.location, s, r, n, a, t]
            )
        };
    },
    eh = (e) => {
        let { collapsedStickersCategories: t, gridWidth: n, onSelectSticker: o, getStickerItemProps: s, getStickerRowProps: c, gutterWidth: d, inspectedStickerPosition: f, isScrolling: p, isUsingKeyboardNavigation: h, stickersGrid: m, stickersCategories: g, filteredStickers: E, ownedStickerPacks: I, channel: T } = e,
            N = (0, u.O)(),
            A = (0, a.e7)([O.default], () => O.default.getCurrentUser()),
            { handleStickerInspect: C, handleSelect: L } = e_({
                onSelectSticker: o,
                channel: T,
                currentUser: A
            }),
            [k, Z] = i.useState(!1),
            F = i.useCallback((e) => {
                b._O.updateSetting(Array.from(e));
            }, []),
            V = i.useCallback(
                (e) => {
                    let t = m[e];
                    return null != t
                        ? (0, r.jsx)(
                              M.Z,
                              {
                                  getStickerItemProps: s,
                                  getStickerRowProps: c,
                                  gutterWidth: d,
                                  inspectedStickerPosition: f,
                                  isScrolling: p,
                                  isUsingKeyboardNavigation: h,
                                  onInspect: C,
                                  onSelect: L,
                                  rowIndex: e,
                                  stickerClassName: B.sticker,
                                  stickerDescriptors: t,
                                  stickerSize: n > Y ? et : en,
                                  preferAnimation: n <= K,
                                  ownedStickerPacks: I,
                                  isDisplayingIndividualStickers: !0,
                                  channel: T,
                                  currentUser: A
                              },
                              e
                          )
                        : null;
                },
                [m, s, c, d, f, p, h, C, L, n, I, T, A]
            ),
            H = i.useCallback((e, t) => (0, r.jsx)('div', { children: t }, e), []),
            W = i.useCallback(
                function (e) {
                    let { isStickerPack: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        S.default.track(j.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: null == N ? void 0 : N.location,
                            tab: U.X1.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null
                        }),
                        F(r);
                },
                [N, t, F]
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
                                    ? (0, r.jsx)('div', {
                                          className: B.divider,
                                          children: (0, r.jsx)(l.$i$, {})
                                      })
                                    : null,
                                (0, r.jsx)(
                                    v.Z,
                                    {
                                        className: B.packHeader,
                                        'aria-label': G.NW.string(G.t.wbfJFh),
                                        children: G.NW.string(G.t['05Z/0t'])
                                    },
                                    'stickers-you-might-like-header'
                                )
                            ]
                        });
                    }
                    switch (n.type) {
                        case P.Ih.FAVORITE:
                            return (0, r.jsx)(
                                v.Z,
                                {
                                    className: B.packHeader,
                                    'aria-label': G.NW.formatToPlainString(G.t['7lLCjY'], { categoryName: n.name }),
                                    icon: (0, r.jsx)(l.r7p, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => W(n.id, { isStickerPack: !1 }),
                                    children: n.name
                                },
                                'header-'.concat(n.id)
                            );
                        case P.Ih.RECENT:
                            return (0, r.jsx)(
                                v.Z,
                                {
                                    className: B.packHeader,
                                    'aria-label': G.NW.formatToPlainString(G.t['7lLCjY'], { categoryName: n.name }),
                                    icon: (0, r.jsx)(l.T39, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => W(n.id, { isStickerPack: !1 }),
                                    children: n.name
                                },
                                'header-'.concat(n.id)
                            );
                        case P.Ih.GUILD:
                        case P.Ih.EMPTY_GUILD_UPSELL: {
                            let e = y.Z.getGuild(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                v.Z,
                                {
                                    className: B.packHeader,
                                    'aria-label': G.NW.formatToPlainString(G.t['7lLCjY'], { categoryName: e.name }),
                                    icon: (0, r.jsx)(_.Z, {
                                        guild: e,
                                        height: 16,
                                        width: 16
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => W(e.id),
                                    children: e.name
                                },
                                'h'.concat(e.id)
                            );
                        }
                        case P.Ih.PACK: {
                            let e = R.Z.getStickerPack(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                v.Z,
                                {
                                    className: B.packHeader,
                                    'aria-label': G.NW.formatToPlainString(G.t['7lLCjY'], { categoryName: e.name }),
                                    icon: (0, r.jsx)(D.ZP, {
                                        disableAnimation: !0,
                                        size: eu,
                                        sticker: (0, w.Zt)(e)
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => W(e.id),
                                    children: e.name
                                },
                                'h'.concat(e.id)
                            );
                        }
                    }
                },
                [t, g, W, E]
            ),
            q = i.useCallback(
                (e) => {
                    if (null != E) {
                        let { sendable: t, sendableWithPremium: n } = E;
                        return 0 === e && t.length > 0 ? 0 : ee + (t.length > 0 && n.length > 0 ? $ : 0);
                    }
                    return ee;
                },
                [E]
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
                    return n.type !== P.Ih.EMPTY_GUILD_UPSELL || null != E || i
                        ? null
                        : (0, r.jsx)(
                              x.Z,
                              {
                                  className: B.emptyGuildUpsell,
                                  guildId: n.id,
                                  channel: T,
                                  shouldTrackUpsellViewed: !k,
                                  setTrackedUpsellViewed: Z
                              },
                              'sticker-picker-empty-guild-inline-upsell-'.concat(n.id)
                          );
                },
                [g, t, E, T, k]
            ),
            sectionFooterHeight: i.useCallback(
                (e) => {
                    let n = g[e],
                        r = t.has(n.id);
                    return n.type !== P.Ih.EMPTY_GUILD_UPSELL || r ? 0 : ed;
                },
                [g, t]
            )
        };
    },
    em = i.forwardRef(function (e, t) {
        let { collapsedStickersCategories: n, gridWidth: s, filteredStickers: l, getStickerItemProps: u, getStickerRowProps: _, gutterWidth: g, isUsingKeyboardNavigation: v, onSelectSticker: b, rowCount: y, rowCountBySection: O, stickersCategories: S, stickersGrid: I, channel: T } = e,
            N = i.useRef(!1),
            A = i.useRef(null),
            [C, P] = h.ZN.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], o.X),
            { analyticsLocations: w } = (0, f.ZP)(d.Z.STICKER_PICKER),
            D = (0, m.Iu)((e) => e.searchQuery),
            x = (0, a.e7)([R.Z], () => R.Z.getPremiumPacks()),
            {
                renderRow: M,
                renderSection: k,
                renderSectionFooter: j,
                sectionFooterHeight: U,
                renderSectionHeader: F,
                sectionHeaderHeight: V
            } = eh({
                collapsedStickersCategories: n,
                gridWidth: s,
                stickersCategories: S,
                stickersGrid: I,
                isScrolling: N,
                isUsingKeyboardNavigation: v,
                onSelectSticker: b,
                getStickerItemProps: u,
                getStickerRowProps: _,
                gutterWidth: g,
                inspectedStickerPosition: P,
                filteredStickers: l,
                ownedStickerPacks: i.useMemo(() => new Set(x.map((e) => e.id)), [x]),
                channel: T
            }),
            H = (0, E.Qs)({
                activeCategoryIndex: C,
                isScrolling: N,
                listRef: A,
                onActiveCategoryIndexChange: h.ZN.setActiveCategoryIndex,
                scrollOffset: es,
                searchQuery: D
            });
        return (
            (0, E.Xs)({
                searchQuery: D,
                activeCategoryIndex: C,
                listRef: A
            }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = A.current) || void 0 === e ? void 0 : e.scrollTo(...n);
                    },
                    getRowDescriptors: () => {
                        var e, t;
                        return null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : [];
                    },
                    getSectionDescriptors: () => {
                        var e, t;
                        return null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : [];
                    },
                    scrollToSectionTop: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = A.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n);
                    },
                    scrollRowIntoView: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = A.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n);
                    },
                    getScrollerNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = A.current) || void 0 === e ? void 0 : e.getScrollerNode(...n);
                    },
                    scrollIntoViewNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = A.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n);
                    },
                    getListDimensions: function () {
                        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.getListDimensions(...r)) && void 0 !== t
                            ? t
                            : {
                                  height: -1,
                                  totalHeight: -1
                              };
                    }
                }),
                []
            ),
            (0, r.jsx)(f.Gt, {
                value: w,
                children: (0, r.jsxs)('div', {
                    className: B.wrapper,
                    children: [
                        null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length
                            ? (0, r.jsx)(c.Z, {
                                  message: G.NW.string(G.t['zc+LQU']),
                                  className: B.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: Z,
                                  suggestions: (0, r.jsx)(ep, { onSuggestionClick: (e) => (0, m.ql)(e, !0) })
                              })
                            : (0, r.jsx)(p.Z, {
                                  role: 'none presentation',
                                  listPadding: null != l ? ec : el,
                                  onScroll: H,
                                  renderRow: M,
                                  renderSection: null == l ? k : void 0,
                                  renderSectionHeader: F,
                                  renderSectionFooter: j,
                                  rowCount: y,
                                  rowCountBySection: O,
                                  rowHeight: s > Y ? eo : ea,
                                  sectionHeaderHeight: V,
                                  sectionFooterHeight: U,
                                  stickyHeaders: !0,
                                  ref: A
                              }),
                        (0, r.jsx)(L.Z, { stickersGrid: I })
                    ]
                })
            })
        );
    });
