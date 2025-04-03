n.d(t, { Z: () => em }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(788347),
    a = n(442837),
    s = n(477690),
    l = n(481060),
    c = n(788911),
    u = n(2052),
    d = n(100527),
    f = n(906732),
    _ = n(218867),
    p = n(880949),
    h = n(806966),
    m = n(28546),
    g = n(691251),
    E = n(98528),
    b = n(551058),
    y = n(695346),
    v = n(430824),
    O = n(594174),
    I = n(626135),
    S = n(624138),
    T = n(45521),
    N = n(285651),
    A = n(268350),
    C = n(217590),
    R = n(926491),
    P = n(373228),
    w = n(378233),
    D = n(419922),
    L = n(1450),
    x = n(491173),
    M = n(515005),
    k = n(652136),
    j = n(981631),
    U = n(957825),
    G = n(388032),
    B = n(230584),
    F = n(239840);
function V(e, t, n) {
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
function Z(e) {
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
                V(e, t, n[t]);
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
let Y = (0, S.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    K = (0, S.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    z = (0, S.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    q = (0, S.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    Q = (0, S.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    X = (0, S.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    J = (0, S.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    $ = (0, S.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    ee = (0, S.Mg)(s.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    et = (0, S.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    en = (0, S.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    er = (0, S.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    ei = (0, S.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    eo = et + 2 * er + ei,
    ea = en + 2 * er + ei,
    es = 20,
    el = [z, Q, X, J],
    ec = [q, Q, X, J],
    eu = 12,
    ed = (0, S.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    ef = ['laugh', 'wave', 'yes', 'dance', 'sad', 'no', 'hi', 'bye', 'cry', 'ok'],
    e_ = (e) => {
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
    ep = (e) => {
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
                    let u = W(Z({}, o.location), { object: '' === s ? j.qAy.STICKER_PICKER_VIEW_ALL : j.qAy.STICKER_SEARCH_VIEW_ALL });
                    if (null != c && !(0, N.kl)(c, r, n)) {
                        let e = R.Z.getStickerPack(l);
                        null != e &&
                            (I.default.track(j.rMx.STICKER_PACK_VIEW_ALL, {
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
                    if (i)
                        return void ((0, w.gM)(c.id)
                            ? (0, A.hW)(c.id)
                            : ((0, C.cQ)({
                                  sticker: c,
                                  location: W(Z({}, u), { object: j.qAy.STICKER })
                              }),
                              (0, A.SA)(c.id)));
                    t(e);
                },
                [o.location, s, r, n, a, t]
            )
        };
    },
    eh = (e) => {
        let { collapsedStickersCategories: t, gridWidth: n, onSelectSticker: o, getStickerItemProps: s, getStickerRowProps: c, gutterWidth: d, inspectedStickerPosition: f, isScrolling: _, isUsingKeyboardNavigation: h, stickersGrid: m, stickersCategories: g, filteredStickers: E, ownedStickerPacks: S, channel: T } = e,
            N = (0, u.O)(),
            A = (0, a.e7)([O.default], () => O.default.getCurrentUser()),
            { handleStickerInspect: C, handleSelect: x } = ep({
                onSelectSticker: o,
                channel: T,
                currentUser: A
            }),
            [k, F] = i.useState(!1),
            V = i.useCallback((e) => {
                y._O.updateSetting(Array.from(e));
            }, []),
            Z = i.useCallback(
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
                                  isScrolling: _,
                                  isUsingKeyboardNavigation: h,
                                  onInspect: C,
                                  onSelect: x,
                                  rowIndex: e,
                                  stickerClassName: B.sticker,
                                  stickerDescriptors: t,
                                  stickerSize: n > Y ? et : en,
                                  preferAnimation: n <= K,
                                  ownedStickerPacks: S,
                                  isDisplayingIndividualStickers: !0,
                                  channel: T,
                                  currentUser: A
                              },
                              e
                          )
                        : null;
                },
                [m, s, c, d, f, _, h, C, x, n, S, T, A]
            ),
            H = i.useCallback((e, t) => (0, r.jsx)('div', { children: t }, e), []),
            W = i.useCallback(
                function (e) {
                    let { isStickerPack: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        I.default.track(j.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: null == N ? void 0 : N.location,
                            tab: U.X1.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null
                        }),
                        V(r);
                },
                [N, t, V]
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
                                    b.Z,
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
                                b.Z,
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
                                b.Z,
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
                            let e = v.Z.getGuild(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                b.Z,
                                {
                                    className: B.packHeader,
                                    'aria-label': G.NW.formatToPlainString(G.t['7lLCjY'], { categoryName: e.name }),
                                    icon: (0, r.jsx)(p.Z, {
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
                                b.Z,
                                {
                                    className: B.packHeader,
                                    'aria-label': G.NW.formatToPlainString(G.t['7lLCjY'], { categoryName: e.name }),
                                    icon: (0, r.jsx)(D.Z, {
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
            renderRow: Z,
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
                              L.Z,
                              {
                                  className: B.emptyGuildUpsell,
                                  guildId: n.id,
                                  channel: T,
                                  shouldTrackUpsellViewed: !k,
                                  setTrackedUpsellViewed: F
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
        let { collapsedStickersCategories: n, gridWidth: s, filteredStickers: l, getStickerItemProps: u, getStickerRowProps: p, gutterWidth: g, isUsingKeyboardNavigation: b, onSelectSticker: y, rowCount: v, rowCountBySection: O, stickersCategories: I, stickersGrid: S, channel: T } = e,
            N = i.useRef(!1),
            A = i.useRef(null),
            [C, P] = h.ZN.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], o.X),
            { analyticsLocations: w } = (0, f.ZP)(d.Z.STICKER_PICKER),
            D = (0, m.Iu)((e) => e.searchQuery),
            L = (0, a.e7)([R.Z], () => R.Z.getPremiumPacks()),
            {
                renderRow: M,
                renderSection: k,
                renderSectionFooter: j,
                sectionFooterHeight: U,
                renderSectionHeader: V,
                sectionHeaderHeight: Z
            } = eh({
                collapsedStickersCategories: n,
                gridWidth: s,
                stickersCategories: I,
                stickersGrid: S,
                isScrolling: N,
                isUsingKeyboardNavigation: b,
                onSelectSticker: y,
                getStickerItemProps: u,
                getStickerRowProps: p,
                gutterWidth: g,
                inspectedStickerPosition: P,
                filteredStickers: l,
                ownedStickerPacks: i.useMemo(() => new Set(L.map((e) => e.id)), [L]),
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
                        return null == (e = A.current) ? void 0 : e.scrollTo(...n);
                    },
                    getRowDescriptors: () => {
                        var e, t;
                        return null != (t = null == (e = A.current) ? void 0 : e.getRowDescriptors()) ? t : [];
                    },
                    getSectionDescriptors: () => {
                        var e, t;
                        return null != (t = null == (e = A.current) ? void 0 : e.getSectionDescriptors()) ? t : [];
                    },
                    scrollToSectionTop: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = A.current) ? void 0 : e.scrollToSectionTop(...n);
                    },
                    scrollRowIntoView: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = A.current) ? void 0 : e.scrollRowIntoView(...n);
                    },
                    getScrollerNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = A.current) ? void 0 : e.getScrollerNode(...n);
                    },
                    scrollIntoViewNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = A.current) ? void 0 : e.scrollIntoViewNode(...n);
                    },
                    getListDimensions: function () {
                        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null != (t = null == (e = A.current) ? void 0 : e.getListDimensions(...r))
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
                                  noResultsImageURL: F,
                                  suggestions: (0, r.jsx)(e_, { onSuggestionClick: (e) => (0, m.ql)(e, !0) })
                              })
                            : (0, r.jsx)(_.Z, {
                                  role: 'none presentation',
                                  listPadding: null != l ? ec : el,
                                  onScroll: H,
                                  renderRow: M,
                                  renderSection: null == l ? k : void 0,
                                  renderSectionHeader: V,
                                  renderSectionFooter: j,
                                  rowCount: v,
                                  rowCountBySection: O,
                                  rowHeight: s > Y ? eo : ea,
                                  sectionHeaderHeight: Z,
                                  sectionFooterHeight: U,
                                  stickyHeaders: !0,
                                  ref: A
                              }),
                        (0, r.jsx)(x.Z, { stickersGrid: S })
                    ]
                })
            })
        );
    });
