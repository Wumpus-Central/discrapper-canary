(n.d(t, { Z: () => eh }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(94171),
    o = n(442837),
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
    O = n(430824),
    v = n(594174),
    I = n(626135),
    T = n(624138),
    S = n(45521),
    A = n(285651),
    N = n(268350),
    C = n(217590),
    w = n(926491),
    R = n(373228),
    P = n(378233),
    D = n(419922),
    L = n(1450),
    x = n(491173),
    k = n(515005),
    j = n(981631),
    M = n(957825),
    U = n(388032),
    G = n(230584),
    B = n(239840);
function Z(e, t, n) {
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
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                Z(e, t, n[t]);
            }));
    }
    return e;
}
function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
let Y = (0, T.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    W = (0, T.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    K = (0, T.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    z = (0, T.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    q = (0, T.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    $ = (0, T.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    X = (0, T.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    Q = (0, T.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    J = (0, T.Mg)(s.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    ee = (0, T.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    et = (0, T.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    en = (0, T.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    er = (0, T.Mg)(s.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    ei = ee + 2 * en + er,
    ea = et + 2 * en + er,
    eo = 20,
    es = [K, q, $, X],
    el = [z, q, $, X],
    ec = 12,
    eu = (0, T.Mg)(s.Z.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    ed = ['laugh', 'wave', 'yes', 'dance', 'sad', 'no', 'hi', 'bye', 'cry', 'ok'],
    ef = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, r.jsx)('div', {
            className: G.searchSuggestions,
            children: ed.map((e) =>
                (0, r.jsx)(
                    l.P3F,
                    {
                        className: G.searchSuggestion,
                        onClick: () => t(e),
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-default',
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
            a = (0, u.O)(),
            o = (0, m.Iu)((e) => e.searchQuery);
        return {
            handleStickerInspect: i.useCallback((e) => {
                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: r } = e;
                (h.ZN.setActiveCategoryIndex(r), h.ZN.setInspectedExpressionPosition(n, t, g.u.MOUSE_EVENT), e.type === R.al.STICKER && h.ZN.setSearchPlaceholder(e.sticker.name));
            }, []),
            handleSelect: i.useCallback(
                (e, i) => {
                    if (e.type !== R.al.STICKER) return;
                    let { sticker: s } = e;
                    if (null == s) return;
                    let l = H(F({}, a.location), { object: '' === o ? j.qAy.STICKER_PICKER_VIEW_ALL : j.qAy.STICKER_SEARCH_VIEW_ALL });
                    if (null != s && !(0, A.kl)(s, r, n)) {
                        let e = (0, P.J8)(s);
                        ((0, A.cO)(s, r, n) === A.eb.SENDABLE_WITH_PREMIUM && (0, S.f)(!0), e && A.eb.SENDABLE_WITH_BOOSTED_GUILD);
                        return;
                    }
                    if (i)
                        return void ((0, P.gM)(s.id)
                            ? (0, N.hW)(s.id)
                            : ((0, C.cQ)({
                                  sticker: s,
                                  location: H(F({}, l), { object: j.qAy.STICKER })
                              }),
                              (0, N.SA)(s.id)));
                    t(e);
                },
                [a.location, o, r, n, t]
            )
        };
    },
    ep = (e) => {
        let { collapsedStickersCategories: t, gridWidth: n, onSelectSticker: a, getStickerItemProps: s, getStickerRowProps: c, gutterWidth: d, inspectedStickerPosition: f, isScrolling: _, isUsingKeyboardNavigation: h, stickersGrid: m, stickersCategories: g, filteredStickers: E, ownedStickerPacks: T, channel: S } = e,
            A = (0, u.O)(),
            N = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
            { handleStickerInspect: C, handleSelect: x } = e_({
                onSelectSticker: a,
                channel: S,
                currentUser: N
            }),
            [B, Z] = i.useState(!1),
            F = i.useCallback((e) => {
                y._O.updateSetting(Array.from(e));
            }, []),
            V = i.useCallback(
                (e) => {
                    let t = m[e];
                    return null != t
                        ? (0, r.jsx)(
                              k.Z,
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
                                  stickerClassName: G.sticker,
                                  stickerDescriptors: t,
                                  stickerSize: n > Y ? ee : et,
                                  preferAnimation: n <= W,
                                  ownedStickerPacks: T,
                                  isDisplayingIndividualStickers: !0,
                                  channel: S,
                                  currentUser: N
                              },
                              e
                          )
                        : null;
                },
                [m, s, c, d, f, _, h, C, x, n, T, S, N]
            ),
            H = i.useCallback((e, t) => (0, r.jsx)('div', { children: t }, e), []),
            K = i.useCallback(
                function (e) {
                    let { isStickerPack: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new Set(t),
                        i = t.has(e);
                    (i ? r.delete(e) : r.add(e),
                        I.default.track(j.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: null == A ? void 0 : A.location,
                            tab: M.X1.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null
                        }),
                        F(r));
                },
                [A, t, F]
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
                                          className: G.divider,
                                          children: (0, r.jsx)(l.$i$, {})
                                      })
                                    : null,
                                (0, r.jsx)(
                                    b.Z,
                                    {
                                        className: G.packHeader,
                                        'aria-label': U.intl.string(U.t.wbfJFh),
                                        children: U.intl.string(U.t['05Z/0t'])
                                    },
                                    'stickers-you-might-like-header'
                                )
                            ]
                        });
                    }
                    switch (n.type) {
                        case R.Ih.FAVORITE:
                            return (0, r.jsx)(
                                b.Z,
                                {
                                    className: G.packHeader,
                                    'aria-label': U.intl.formatToPlainString(U.t['7lLCjY'], { categoryName: n.name }),
                                    icon: (0, r.jsx)(l.r7p, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => K(n.id, { isStickerPack: !1 }),
                                    children: n.name
                                },
                                'header-'.concat(n.id)
                            );
                        case R.Ih.RECENT:
                            return (0, r.jsx)(
                                b.Z,
                                {
                                    className: G.packHeader,
                                    'aria-label': U.intl.formatToPlainString(U.t['7lLCjY'], { categoryName: n.name }),
                                    icon: (0, r.jsx)(l.T39, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => K(n.id, { isStickerPack: !1 }),
                                    children: n.name
                                },
                                'header-'.concat(n.id)
                            );
                        case R.Ih.GUILD:
                        case R.Ih.EMPTY_GUILD_UPSELL: {
                            let e = O.Z.getGuild(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                b.Z,
                                {
                                    className: G.packHeader,
                                    'aria-label': U.intl.formatToPlainString(U.t['7lLCjY'], { categoryName: e.name }),
                                    icon: (0, r.jsx)(p.Z, {
                                        guild: e,
                                        height: 16,
                                        width: 16
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => K(e.id),
                                    children: e.name
                                },
                                'h'.concat(e.id)
                            );
                        }
                        case R.Ih.PACK: {
                            let e = w.Z.getStickerPack(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                b.Z,
                                {
                                    className: G.packHeader,
                                    'aria-label': U.intl.formatToPlainString(U.t['7lLCjY'], { categoryName: e.name }),
                                    icon: (0, r.jsx)(D.Z, {
                                        disableAnimation: !0,
                                        size: ec,
                                        sticker: (0, P.Zt)(e)
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => K(e.id),
                                    children: e.name
                                },
                                'h'.concat(e.id)
                            );
                        }
                    }
                },
                [t, g, K, E]
            ),
            q = i.useCallback(
                (e) => {
                    if (null != E) {
                        let { sendable: t, sendableWithPremium: n } = E;
                        return 0 === e && t.length > 0 ? 0 : J + (t.length > 0 && n.length > 0 ? Q : 0);
                    }
                    return J;
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
                    return n.type !== R.Ih.EMPTY_GUILD_UPSELL || null != E || i
                        ? null
                        : (0, r.jsx)(
                              L.Z,
                              {
                                  className: G.emptyGuildUpsell,
                                  guildId: n.id,
                                  channel: S,
                                  shouldTrackUpsellViewed: !B,
                                  setTrackedUpsellViewed: Z
                              },
                              'sticker-picker-empty-guild-inline-upsell-'.concat(n.id)
                          );
                },
                [g, t, E, S, B]
            ),
            sectionFooterHeight: i.useCallback(
                (e) => {
                    let n = g[e],
                        r = t.has(n.id);
                    return n.type !== R.Ih.EMPTY_GUILD_UPSELL || r ? 0 : eu;
                },
                [g, t]
            )
        };
    },
    eh = i.forwardRef(function (e, t) {
        let { collapsedStickersCategories: n, gridWidth: s, filteredStickers: l, getStickerItemProps: u, getStickerRowProps: p, gutterWidth: g, isUsingKeyboardNavigation: b, onSelectSticker: y, rowCount: O, rowCountBySection: v, stickersCategories: I, stickersGrid: T, channel: S } = e,
            A = i.useRef(!1),
            N = i.useRef(null),
            [C, R] = h.ZN.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], a.X),
            { analyticsLocations: P } = (0, f.ZP)(d.Z.STICKER_PICKER),
            D = (0, m.Iu)((e) => e.searchQuery),
            L = (0, o.e7)([w.Z], () => w.Z.getPremiumPacks()),
            {
                renderRow: k,
                renderSection: j,
                renderSectionFooter: M,
                sectionFooterHeight: Z,
                renderSectionHeader: F,
                sectionHeaderHeight: V
            } = ep({
                collapsedStickersCategories: n,
                gridWidth: s,
                stickersCategories: I,
                stickersGrid: T,
                isScrolling: A,
                isUsingKeyboardNavigation: b,
                onSelectSticker: y,
                getStickerItemProps: u,
                getStickerRowProps: p,
                gutterWidth: g,
                inspectedStickerPosition: R,
                filteredStickers: l,
                ownedStickerPacks: i.useMemo(() => new Set(L.map((e) => e.id)), [L]),
                channel: S
            }),
            H = (0, E.Qs)({
                activeCategoryIndex: C,
                isScrolling: A,
                listRef: N,
                onActiveCategoryIndexChange: h.ZN.setActiveCategoryIndex,
                scrollOffset: eo,
                searchQuery: D
            });
        return (
            (0, E.Xs)({
                searchQuery: D,
                activeCategoryIndex: C,
                listRef: N
            }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = N.current) ? void 0 : e.scrollTo(...n);
                    },
                    getRowDescriptors: () => {
                        var e, t;
                        return null != (t = null == (e = N.current) ? void 0 : e.getRowDescriptors()) ? t : [];
                    },
                    getSectionDescriptors: () => {
                        var e, t;
                        return null != (t = null == (e = N.current) ? void 0 : e.getSectionDescriptors()) ? t : [];
                    },
                    scrollToSectionTop: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = N.current) ? void 0 : e.scrollToSectionTop(...n);
                    },
                    scrollRowIntoView: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = N.current) ? void 0 : e.scrollRowIntoView(...n);
                    },
                    getScrollerNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = N.current) ? void 0 : e.getScrollerNode(...n);
                    },
                    scrollIntoViewNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = N.current) ? void 0 : e.scrollIntoViewNode(...n);
                    },
                    getListDimensions: function () {
                        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null != (t = null == (e = N.current) ? void 0 : e.getListDimensions(...r))
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
                value: P,
                children: (0, r.jsxs)('div', {
                    className: G.wrapper,
                    children: [
                        null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length
                            ? (0, r.jsx)(c.Z, {
                                  message: U.intl.string(U.t['zc+LQU']),
                                  className: G.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: B,
                                  suggestions: (0, r.jsx)(ef, { onSuggestionClick: (e) => (0, m.ql)(e, !0) })
                              })
                            : (0, r.jsx)(_.Z, {
                                  role: 'none presentation',
                                  listPadding: null != l ? el : es,
                                  onScroll: H,
                                  renderRow: k,
                                  renderSection: null == l ? j : void 0,
                                  renderSectionHeader: F,
                                  renderSectionFooter: M,
                                  rowCount: O,
                                  rowCountBySection: v,
                                  rowHeight: s > Y ? ei : ea,
                                  sectionHeaderHeight: V,
                                  sectionFooterHeight: Z,
                                  stickyHeaders: !0,
                                  ref: N
                              }),
                        (0, r.jsx)(x.Z, { stickersGrid: T })
                    ]
                })
            })
        );
    });
