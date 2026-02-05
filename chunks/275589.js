"use strict";
n.d(t, { A: () => ed });
var r = n(627968),
    i = n(64700),
    a = n(942381),
    s = n(311907),
    o = n(319060),
    l = n(397927),
    u = n(537652),
    c = n(212245),
    d = n(793574),
    _ = n(688810),
    f = n(962125),
    p = n(724511),
    h = n(850992),
    m = n(151271),
    g = n(60587),
    E = n(887695),
    A = n(286509),
    I = n(253932),
    T = n(71393),
    y = n(287809),
    S = n(954571),
    v = n(240248),
    C = n(410558),
    b = n(361670),
    N = n(631576),
    R = n(891090),
    O = n(679382),
    D = n(842086),
    L = n(378058),
    w = n(148355),
    x = n(102001),
    P = n(672182),
    M = n(582721),
    k = n(652215),
    U = n(698279),
    G = n(985018),
    V = n(780465),
    F = n(911385);
let B = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    j = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    H = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    Y = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    W = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    K = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    z = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    $ = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    q = (0, v.xI)(o.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    Z = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    Q = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    X = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    J = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    ee = Z + 2 * X + J,
    et = Q + 2 * X + J,
    en = 20,
    er = [H, W, K, z],
    ei = [Y, W, K, z],
    ea = 12,
    es = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    eo = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
    el = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, r.jsx)("div", {
            className: V.yB,
            children: eo.map((e) =>
                (0, r.jsx)(
                    l.DUT,
                    {
                        className: V.x_,
                        onClick: () => t(e),
                        children: (0, r.jsx)(l.Text, { variant: "text-sm/normal", color: "text-default", children: e }),
                    },
                    e,
                ),
            ),
        });
    },
    eu = (e) => {
        let { onSelectSticker: t, channel: n, currentUser: r } = e,
            a = (0, c.p)(),
            s = (0, m.RQ)((e) => e.searchQuery);
        return {
            handleStickerInspect: i.useCallback((e) => {
                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: r } = e;
                h.bM.setActiveCategoryIndex(r),
                    h.bM.setInspectedExpressionPosition(n, t, g.t.MOUSE_EVENT),
                    e.type === D.op.STICKER && h.bM.setSearchPlaceholder(e.sticker.name);
            }, []),
            handleSelect: i.useCallback(
                (e, i) => {
                    if (e.type !== D.op.STICKER) return;
                    let { sticker: o } = e;
                    if (null == o) return;
                    let l = {
                        ...a.location,
                        object: "" === s ? k.ZSU.STICKER_PICKER_VIEW_ALL : k.ZSU.STICKER_SEARCH_VIEW_ALL,
                    };
                    if (null != o && !(0, b.G7)(o, r, n)) {
                        let e = (0, L.Xw)(o);
                        (0, b.W$)(o, r, n) === b.Ux.SENDABLE_WITH_PREMIUM && (0, C.U)(!0),
                            e && b.Ux.SENDABLE_WITH_BOOSTED_GUILD;
                        return;
                    }
                    i
                        ? (0, L.o1)(o.id)
                            ? (0, N.vr)(o.id)
                            : ((0, R.Dt)({ sticker: o, location: { ...l, object: k.ZSU.STICKER } }), (0, N.uK)(o.id))
                        : t(e);
                },
                [a.location, s, r, n, t],
            ),
        };
    },
    ec = (e) => {
        let {
                collapsedStickersCategories: t,
                gridWidth: n,
                onSelectSticker: a,
                getStickerItemProps: o,
                getStickerRowProps: u,
                gutterWidth: d,
                inspectedStickerPosition: _,
                isScrolling: f,
                isUsingKeyboardNavigation: h,
                stickersGrid: m,
                stickersCategories: g,
                filteredStickers: E,
                ownedStickerPacks: v,
                channel: C,
            } = e,
            b = (0, c.p)(),
            N = (0, s.bG)([y.default], () => y.default.getCurrentUser()),
            { handleStickerInspect: R, handleSelect: P } = eu({ onSelectSticker: a, channel: C, currentUser: N }),
            [F, H] = i.useState(!1),
            Y = i.useCallback((e) => {
                I.tP.updateSetting(Array.from(e));
            }, []),
            W = i.useCallback(
                (e) => {
                    let t = m[e];
                    return null != t
                        ? (0, r.jsx)(
                              M.A,
                              {
                                  getStickerItemProps: o,
                                  getStickerRowProps: u,
                                  gutterWidth: d,
                                  inspectedStickerPosition: _,
                                  isScrolling: f,
                                  isUsingKeyboardNavigation: h,
                                  onInspect: R,
                                  onSelect: P,
                                  rowIndex: e,
                                  stickerClassName: V.yI,
                                  stickerDescriptors: t,
                                  stickerSize: n > B ? Z : Q,
                                  preferAnimation: n <= j,
                                  ownedStickerPacks: v,
                                  isDisplayingIndividualStickers: !0,
                                  channel: C,
                                  currentUser: N,
                              },
                              e,
                          )
                        : null;
                },
                [m, o, u, d, _, f, h, R, P, n, v, C, N],
            ),
            K = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
            z = i.useCallback(
                function (e) {
                    let { isStickerPack: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        S.default.track(k.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: b?.location,
                            tab: U.kx.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null,
                        }),
                        Y(r);
                },
                [b, t, Y],
            ),
            X = i.useCallback(
                (e) => {
                    let n = g[e];
                    if (null != E) {
                        let { sendable: t, sendableWithPremium: n } = E;
                        if (0 === e && t.length > 0) return null;
                        let i = t.length > 0 && n.length > 0;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                i ? (0, r.jsx)("div", { className: V.yF, children: (0, r.jsx)(l.cGx, {}) }) : null,
                                (0, r.jsx)(
                                    A.A,
                                    {
                                        className: V.jH,
                                        "aria-label": G.intl.string(G.t.wbfJFh),
                                        children: G.intl.string(G.t["05Z/0l"]),
                                    },
                                    "stickers-you-might-like-header",
                                ),
                            ],
                        });
                    }
                    switch (n.type) {
                        case D.Z2.FAVORITE:
                            return (0, r.jsx)(
                                A.A,
                                {
                                    className: V.jH,
                                    "aria-label": G.intl.formatToPlainString(G.t["7lLCjZ"], { categoryName: n.name }),
                                    icon: (0, r.jsx)(l.Gg5, { size: "xs", color: "currentColor" }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => z(n.id, { isStickerPack: !1 }),
                                    children: n.name,
                                },
                                `header-${n.id}`,
                            );
                        case D.Z2.RECENT:
                            return (0, r.jsx)(
                                A.A,
                                {
                                    className: V.jH,
                                    "aria-label": G.intl.formatToPlainString(G.t["7lLCjZ"], { categoryName: n.name }),
                                    icon: (0, r.jsx)(l.O4, { size: "xs", color: "currentColor" }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => z(n.id, { isStickerPack: !1 }),
                                    children: n.name,
                                },
                                `header-${n.id}`,
                            );
                        case D.Z2.GUILD:
                        case D.Z2.EMPTY_GUILD_UPSELL: {
                            let e = T.A.getGuild(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                A.A,
                                {
                                    className: V.jH,
                                    "aria-label": G.intl.formatToPlainString(G.t["7lLCjZ"], { categoryName: e.name }),
                                    icon: (0, r.jsx)(p.A, { guild: e, height: 16, width: 16 }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => z(e.id),
                                    children: e.name,
                                },
                                `h${e.id}`,
                            );
                        }
                        case D.Z2.PACK: {
                            let e = O.A.getStickerPack(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                A.A,
                                {
                                    className: V.jH,
                                    "aria-label": G.intl.formatToPlainString(G.t["7lLCjZ"], { categoryName: e.name }),
                                    icon: (0, r.jsx)(w.A, { disableAnimation: !0, size: ea, sticker: (0, L.Id)(e) }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => z(e.id),
                                    children: e.name,
                                },
                                `h${e.id}`,
                            );
                        }
                    }
                },
                [t, g, z, E],
            ),
            J = i.useCallback(
                (e) => {
                    if (null != E) {
                        let { sendable: t, sendableWithPremium: n } = E;
                        return 0 === e && t.length > 0 ? 0 : q + (t.length > 0 && n.length > 0 ? $ : 0);
                    }
                    return q;
                },
                [E],
            );
        return {
            renderRow: W,
            renderSection: K,
            renderSectionHeader: X,
            sectionHeaderHeight: J,
            renderSectionFooter: i.useCallback(
                (e) => {
                    let n = g[e],
                        i = t.has(n.id);
                    return n.type !== D.Z2.EMPTY_GUILD_UPSELL || null != E || i
                        ? null
                        : (0, r.jsx)(
                              x.A,
                              {
                                  className: V.Ij,
                                  guildId: n.id,
                                  channel: C,
                                  shouldTrackUpsellViewed: !F,
                                  setTrackedUpsellViewed: H,
                              },
                              `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                          );
                },
                [g, t, E, C, F],
            ),
            sectionFooterHeight: i.useCallback(
                (e) => {
                    let n = g[e],
                        r = t.has(n.id);
                    return n.type !== D.Z2.EMPTY_GUILD_UPSELL || r ? 0 : es;
                },
                [g, t],
            ),
        };
    },
    ed = i.forwardRef(function (e, t) {
        let {
                collapsedStickersCategories: n,
                gridWidth: o,
                filteredStickers: l,
                getStickerItemProps: c,
                getStickerRowProps: p,
                gutterWidth: g,
                isUsingKeyboardNavigation: A,
                onSelectSticker: I,
                rowCount: T,
                rowCountBySection: y,
                stickersCategories: S,
                stickersGrid: v,
                channel: C,
            } = e,
            b = i.useRef(!1),
            N = i.useRef(null),
            [R, D] = h.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], a.x),
            { analyticsLocations: L } = (0, _.Ay)(d.A.STICKER_PICKER),
            w = (0, m.RQ)((e) => e.searchQuery),
            x = (0, s.bG)([O.A], () => O.A.getPremiumPacks()),
            {
                renderRow: M,
                renderSection: k,
                renderSectionFooter: U,
                sectionFooterHeight: j,
                renderSectionHeader: H,
                sectionHeaderHeight: Y,
            } = ec({
                collapsedStickersCategories: n,
                gridWidth: o,
                stickersCategories: S,
                stickersGrid: v,
                isScrolling: b,
                isUsingKeyboardNavigation: A,
                onSelectSticker: I,
                getStickerItemProps: c,
                getStickerRowProps: p,
                gutterWidth: g,
                inspectedStickerPosition: D,
                filteredStickers: l,
                ownedStickerPacks: i.useMemo(() => new Set(x.map((e) => e.id)), [x]),
                channel: C,
            }),
            W = (0, E.Fk)({
                activeCategoryIndex: R,
                isScrolling: b,
                listRef: N,
                onActiveCategoryIndexChange: h.bM.setActiveCategoryIndex,
                scrollOffset: en,
                searchQuery: w,
            });
        return (
            (0, E.FV)({ searchQuery: w, activeCategoryIndex: R, listRef: N }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return N.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => N.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => N.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return N.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return N.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return N.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return N.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return N.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, r.jsx)(_.f5, {
                value: L,
                children: (0, r.jsxs)("div", {
                    className: V.iE,
                    children: [
                        null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length
                            ? (0, r.jsx)(u.A, {
                                  message: G.intl.string(G.t["zc+LQd"]),
                                  className: V.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: F,
                                  suggestions: (0, r.jsx)(el, { onSuggestionClick: (e) => (0, m.Ri)(e, !0) }),
                              })
                            : (0, r.jsx)(f.A, {
                                  role: "none presentation",
                                  listPadding: null != l ? ei : er,
                                  onScroll: W,
                                  renderRow: M,
                                  renderSection: null == l ? k : void 0,
                                  renderSectionHeader: H,
                                  renderSectionFooter: U,
                                  rowCount: T,
                                  rowCountBySection: y,
                                  rowHeight: o > B ? ee : et,
                                  sectionHeaderHeight: Y,
                                  sectionFooterHeight: j,
                                  stickyHeaders: !0,
                                  ref: N,
                              }),
                        (0, r.jsx)(P.A, { stickersGrid: v }),
                    ],
                }),
            })
        );
    });
