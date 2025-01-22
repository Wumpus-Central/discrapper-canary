var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(232713),
    l = r(442837),
    u = r(477690),
    c = r(481060),
    d = r(788911),
    f = r(2052),
    p = r(100527),
    h = r(906732),
    _ = r(218867),
    m = r(880949),
    g = r(806966),
    E = r(28546),
    v = r(691251),
    y = r(98528),
    b = r(551058),
    I = r(695346),
    T = r(430824),
    S = r(594174),
    A = r(626135),
    C = r(624138),
    N = r(45521),
    R = r(285651),
    O = r(268350),
    D = r(217590),
    L = r(926491),
    x = r(373228),
    w = r(378233),
    P = r(419922),
    M = r(1450),
    k = r(491173),
    U = r(515005),
    B = r(652136),
    G = r(981631),
    Z = r(957825),
    F = r(388032),
    V = r(458381),
    j = r(239840);
let H = (0, C.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    Y = (0, C.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    W = (0, C.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    K = (0, C.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    z = (0, C.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    q = (0, C.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    Q = (0, C.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    X = (0, C.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    J = (0, C.Mg)(u.Z.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    $ = (0, C.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    ee = (0, C.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    et = (0, C.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    en = (0, C.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    er = $ + 2 * et + en,
    ei = ee + 2 * et + en,
    ea = 20,
    eo = [W, z, q, Q],
    es = [K, z, q, Q],
    el = 12,
    eu = (0, C.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    ec = ['laugh', 'wave', 'yes', 'dance', 'sad', 'no', 'hi', 'bye', 'cry', 'ok'],
    ed = (e) => {
        let { onSuggestionClick: n } = e;
        return (0, a.jsx)('div', {
            className: V.searchSuggestions,
            children: ec.map((e) =>
                (0, a.jsx)(
                    c.Clickable,
                    {
                        className: V.searchSuggestion,
                        onClick: () => n(e),
                        children: (0, a.jsx)(c.Text, {
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
    ef = (e) => {
        let { onSelectSticker: n, channel: r, currentUser: i } = e,
            a = (0, f.O)(),
            { analyticsLocations: s } = (0, h.ZP)(),
            l = (0, E.Iu)((e) => e.searchQuery),
            u = o.useCallback((e) => {
                let { visibleRowIndex: n, columnIndex: r, gridSectionIndex: i } = e;
                g.ZN.setActiveCategoryIndex(i), g.ZN.setInspectedExpressionPosition(r, n, v.u.MOUSE_EVENT), e.type === x.al.STICKER && g.ZN.setSearchPlaceholder(e.sticker.name);
            }, []);
        return {
            handleStickerInspect: u,
            handleSelect: o.useCallback(
                (e, o) => {
                    if (e.type !== x.al.STICKER) return;
                    let { packId: u, sticker: c } = e;
                    if (null == c) return;
                    let d = {
                        ...a.location,
                        object: '' === l ? G.qAy.STICKER_PICKER_VIEW_ALL : G.qAy.STICKER_SEARCH_VIEW_ALL
                    };
                    if (null != c && !(0, R.kl)(c, i, r)) {
                        let e = L.Z.getStickerPack(u);
                        null != e &&
                            (A.default.track(G.rMx.STICKER_PACK_VIEW_ALL, {
                                sticker_id: c.id,
                                sticker_pack_id: u,
                                location: d,
                                location_stack: s
                            }),
                            (0, B.Z)({
                                stickerPack: e,
                                analyticsLocations: s
                            }));
                        let n = (0, w.J8)(c),
                            a = (0, R.cO)(c, i, r);
                        a === R.eb.SENDABLE_WITH_PREMIUM && (0, N.f)(!0), n && R.eb.SENDABLE_WITH_BOOSTED_GUILD;
                        return;
                    }
                    if (o) {
                        (0, w.gM)(c.id)
                            ? (0, O.hW)(c.id)
                            : ((0, D.cQ)({
                                  sticker: c,
                                  location: {
                                      ...d,
                                      object: G.qAy.STICKER
                                  }
                              }),
                              (0, O.SA)(c.id));
                        return;
                    }
                    n(e);
                },
                [a.location, l, i, r, s, n]
            )
        };
    },
    ep = (e) => {
        let { collapsedStickersCategories: n, gridWidth: r, onSelectSticker: i, getStickerItemProps: s, getStickerRowProps: u, gutterWidth: d, inspectedStickerPosition: p, isScrolling: h, isUsingKeyboardNavigation: _, stickersGrid: g, stickersCategories: E, filteredStickers: v, ownedStickerPacks: y, channel: C } = e,
            N = (0, f.O)(),
            R = (0, l.e7)([S.default], () => S.default.getCurrentUser()),
            { handleStickerInspect: O, handleSelect: D } = ef({
                onSelectSticker: i,
                channel: C,
                currentUser: R
            }),
            [k, B] = o.useState(!1),
            j = o.useCallback((e) => {
                I._O.updateSetting(Array.from(e));
            }, []),
            W = o.useCallback(
                (e) => {
                    let n = g[e];
                    return null != n
                        ? (0, a.jsx)(
                              U.Z,
                              {
                                  getStickerItemProps: s,
                                  getStickerRowProps: u,
                                  gutterWidth: d,
                                  inspectedStickerPosition: p,
                                  isScrolling: h,
                                  isUsingKeyboardNavigation: _,
                                  onInspect: O,
                                  onSelect: D,
                                  rowIndex: e,
                                  stickerClassName: V.sticker,
                                  stickerDescriptors: n,
                                  stickerSize: r > H ? $ : ee,
                                  preferAnimation: r <= Y,
                                  ownedStickerPacks: y,
                                  isDisplayingIndividualStickers: !0,
                                  channel: C,
                                  currentUser: R
                              },
                              e
                          )
                        : null;
                },
                [g, s, u, d, p, h, _, O, D, r, y, C, R]
            ),
            K = o.useCallback((e, n) => (0, a.jsx)('div', { children: n }, e), []),
            z = o.useCallback(
                function (e) {
                    let { isStickerPack: r = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = new Set(n),
                        a = n.has(e);
                    a ? i.delete(e) : i.add(e),
                        A.default.track(G.rMx.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: null == N ? void 0 : N.location,
                            tab: Z.X1.STICKER,
                            collapsed: !a,
                            sticker_pack_id: r ? e : null
                        }),
                        j(i);
                },
                [N, n, j]
            ),
            q = o.useCallback(
                (e) => {
                    let r = E[e];
                    if (null != v) {
                        let { sendable: n, sendableWithPremium: r } = v;
                        if (0 === e && n.length > 0) return null;
                        let i = n.length > 0 && r.length > 0;
                        return (0, a.jsxs)(a.Fragment, {
                            children: [
                                i
                                    ? (0, a.jsx)('div', {
                                          className: V.divider,
                                          children: (0, a.jsx)(c.FormDivider, {})
                                      })
                                    : null,
                                (0, a.jsx)(
                                    b.Z,
                                    {
                                        className: V.packHeader,
                                        'aria-label': F.intl.string(F.t.wbfJFh),
                                        children: F.intl.string(F.t['05Z/0t'])
                                    },
                                    'stickers-you-might-like-header'
                                )
                            ]
                        });
                    }
                    switch (r.type) {
                        case x.Ih.FAVORITE:
                            return (0, a.jsx)(
                                b.Z,
                                {
                                    className: V.packHeader,
                                    'aria-label': F.intl.formatToPlainString(F.t['7lLCjY'], { categoryName: r.name }),
                                    icon: (0, a.jsx)(c.StarIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    isCollapsed: n.has(r.id),
                                    onClick: () => z(r.id, { isStickerPack: !1 }),
                                    children: r.name
                                },
                                'header-'.concat(r.id)
                            );
                        case x.Ih.RECENT:
                            return (0, a.jsx)(
                                b.Z,
                                {
                                    className: V.packHeader,
                                    'aria-label': F.intl.formatToPlainString(F.t['7lLCjY'], { categoryName: r.name }),
                                    icon: (0, a.jsx)(c.ClockIcon, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    isCollapsed: n.has(r.id),
                                    onClick: () => z(r.id, { isStickerPack: !1 }),
                                    children: r.name
                                },
                                'header-'.concat(r.id)
                            );
                        case x.Ih.GUILD:
                        case x.Ih.EMPTY_GUILD_UPSELL: {
                            let e = T.Z.getGuild(r.id);
                            if (null == e) return null;
                            return (0, a.jsx)(
                                b.Z,
                                {
                                    className: V.packHeader,
                                    'aria-label': F.intl.formatToPlainString(F.t['7lLCjY'], { categoryName: e.name }),
                                    icon: (0, a.jsx)(m.Z, {
                                        guild: e,
                                        height: 16,
                                        width: 16
                                    }),
                                    isCollapsed: n.has(e.id),
                                    onClick: () => z(e.id),
                                    children: e.name
                                },
                                'h'.concat(e.id)
                            );
                        }
                        case x.Ih.PACK: {
                            let e = L.Z.getStickerPack(r.id);
                            if (null == e) return null;
                            return (0, a.jsx)(
                                b.Z,
                                {
                                    className: V.packHeader,
                                    'aria-label': F.intl.formatToPlainString(F.t['7lLCjY'], { categoryName: e.name }),
                                    icon: (0, a.jsx)(P.ZP, {
                                        disableAnimation: !0,
                                        size: el,
                                        sticker: (0, w.Zt)(e)
                                    }),
                                    isCollapsed: n.has(e.id),
                                    onClick: () => z(e.id),
                                    children: e.name
                                },
                                'h'.concat(e.id)
                            );
                        }
                    }
                },
                [n, E, z, v]
            ),
            Q = o.useCallback(
                (e) => {
                    if (null != v) {
                        let { sendable: n, sendableWithPremium: r } = v;
                        return 0 === e && n.length > 0 ? 0 : J + (n.length > 0 && r.length > 0 ? X : 0);
                    }
                    return J;
                },
                [v]
            ),
            et = o.useCallback(
                (e) => {
                    let r = E[e],
                        i = n.has(r.id);
                    return r.type !== x.Ih.EMPTY_GUILD_UPSELL || null != v || i
                        ? null
                        : (0, a.jsx)(
                              M.Z,
                              {
                                  className: V.emptyGuildUpsell,
                                  guildId: r.id,
                                  channel: C,
                                  shouldTrackUpsellViewed: !k,
                                  setTrackedUpsellViewed: B
                              },
                              'sticker-picker-empty-guild-inline-upsell-'.concat(r.id)
                          );
                },
                [E, n, v, C, k]
            );
        return {
            renderRow: W,
            renderSection: K,
            renderSectionHeader: q,
            sectionHeaderHeight: Q,
            renderSectionFooter: et,
            sectionFooterHeight: o.useCallback(
                (e) => {
                    let r = E[e],
                        i = n.has(r.id);
                    return r.type !== x.Ih.EMPTY_GUILD_UPSELL || i ? 0 : eu;
                },
                [E, n]
            )
        };
    },
    eh = o.forwardRef(function (e, n) {
        let { collapsedStickersCategories: r, gridWidth: i, filteredStickers: u, getStickerItemProps: c, getStickerRowProps: f, gutterWidth: m, isUsingKeyboardNavigation: v, onSelectSticker: b, rowCount: I, rowCountBySection: T, stickersCategories: S, stickersGrid: A, channel: C } = e,
            N = o.useRef(!1),
            R = o.useRef(null),
            [O, D] = g.ZN.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], s.X),
            { analyticsLocations: x } = (0, h.ZP)(p.Z.STICKER_PICKER),
            w = (0, E.Iu)((e) => e.searchQuery),
            P = (0, l.e7)([L.Z], () => L.Z.getPremiumPacks()),
            {
                renderRow: M,
                renderSection: U,
                renderSectionFooter: B,
                sectionFooterHeight: G,
                renderSectionHeader: Z,
                sectionHeaderHeight: Y
            } = ep({
                collapsedStickersCategories: r,
                gridWidth: i,
                stickersCategories: S,
                stickersGrid: A,
                isScrolling: N,
                isUsingKeyboardNavigation: v,
                onSelectSticker: b,
                getStickerItemProps: c,
                getStickerRowProps: f,
                gutterWidth: m,
                inspectedStickerPosition: D,
                filteredStickers: u,
                ownedStickerPacks: o.useMemo(() => new Set(P.map((e) => e.id)), [P]),
                channel: C
            }),
            W = (0, y.Qs)({
                activeCategoryIndex: O,
                isScrolling: N,
                listRef: R,
                onActiveCategoryIndexChange: g.ZN.setActiveCategoryIndex,
                scrollOffset: ea,
                searchQuery: w
            });
        return (
            (0, y.Xs)({
                searchQuery: w,
                activeCategoryIndex: O,
                listRef: R
            }),
            o.useImperativeHandle(
                n,
                () => ({
                    scrollTo: function () {
                        for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null === (e = R.current) || void 0 === e ? void 0 : e.scrollTo(...r);
                    },
                    getRowDescriptors: () => {
                        var e, n;
                        return null !== (n = null === (e = R.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== n ? n : [];
                    },
                    getSectionDescriptors: () => {
                        var e, n;
                        return null !== (n = null === (e = R.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== n ? n : [];
                    },
                    scrollToSectionTop: function () {
                        for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null === (e = R.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...r);
                    },
                    scrollRowIntoView: function () {
                        for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null === (e = R.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...r);
                    },
                    getScrollerNode: function () {
                        for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null === (e = R.current) || void 0 === e ? void 0 : e.getScrollerNode(...r);
                    },
                    scrollIntoViewNode: function () {
                        for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null === (e = R.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...r);
                    },
                    getListDimensions: function () {
                        for (var e, n, r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                        return null !== (n = null === (e = R.current) || void 0 === e ? void 0 : e.getListDimensions(...i)) && void 0 !== n
                            ? n
                            : {
                                  height: -1,
                                  totalHeight: -1
                              };
                    }
                }),
                []
            ),
            (0, a.jsx)(h.Gt, {
                value: x,
                children: (0, a.jsxs)('div', {
                    className: V.wrapper,
                    children: [
                        null != u && 0 === u.sendable.length && 0 === u.sendableWithPremium.length
                            ? (0, a.jsx)(d.Z, {
                                  message: F.intl.string(F.t['zc+LQU']),
                                  className: V.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: j,
                                  suggestions: (0, a.jsx)(ed, { onSuggestionClick: (e) => (0, E.ql)(e, !0) })
                              })
                            : (0, a.jsx)(_.Z, {
                                  role: 'none presentation',
                                  listPadding: null != u ? es : eo,
                                  onScroll: W,
                                  renderRow: M,
                                  renderSection: null == u ? U : void 0,
                                  renderSectionHeader: Z,
                                  renderSectionFooter: B,
                                  rowCount: I,
                                  rowCountBySection: T,
                                  rowHeight: i > H ? er : ei,
                                  sectionHeaderHeight: Y,
                                  sectionFooterHeight: G,
                                  stickyHeaders: !0,
                                  ref: R
                              }),
                        (0, a.jsx)(k.Z, { stickersGrid: A })
                    ]
                })
            })
        );
    });
n.Z = eh;
