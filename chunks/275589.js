"use strict";
n.d(t, { A: () => el });
var r = n(627968),
    i = n(64700),
    s = n(942381),
    a = n(311907),
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
    E = n(60587),
    g = n(887695),
    A = n(286509),
    I = n(253932),
    T = n(71393),
    S = n(287809),
    y = n(954571),
    v = n(240248),
    N = n(410558),
    C = n(361670),
    b = n(631576),
    R = n(891090),
    O = n(679382),
    D = n(842086),
    L = n(378058),
    w = n(148355),
    x = n(102001),
    M = n(672182),
    P = n(582721),
    k = n(652215),
    U = n(698279),
    G = n(985018),
    F = n(780465),
    V = n(911385);
let B = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    H = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    j = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    Y = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    W = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    K = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    z = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    $ = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    q = (0, v.xI)(o.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    X = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    Z = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    Q = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    J = 20,
    ee = [j, W, K, z],
    et = [Y, W, K, z],
    en = 12,
    er = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    ei = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
    es = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, r.jsx)("div", {
            className: F.yB,
            children: ei.map((e) =>
                (0, r.jsx)(
                    l.DUT,
                    {
                        className: F.x_,
                        onClick: () => t(e),
                        children: (0, r.jsx)(l.Text, { variant: "text-sm/normal", color: "text-default", children: e }),
                    },
                    e,
                ),
            ),
        });
    },
    ea = (e) => {
        let { onSelectSticker: t, channel: n, currentUser: r } = e,
            s = (0, c.p)(),
            a = (0, m.RQ)((e) => e.searchQuery);
        return {
            handleStickerInspect: i.useCallback((e) => {
                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: r } = e;
                h.bM.setActiveCategoryIndex(r),
                    h.bM.setInspectedExpressionPosition(n, t, E.t.MOUSE_EVENT),
                    e.type === D.op.STICKER && h.bM.setSearchPlaceholder(e.sticker.name);
            }, []),
            handleSelect: i.useCallback(
                (e, i) => {
                    if (e.type !== D.op.STICKER) return;
                    let { sticker: o } = e;
                    if (null == o) return;
                    let l = {
                        ...s.location,
                        object: "" === a ? k.ZSU.STICKER_PICKER_VIEW_ALL : k.ZSU.STICKER_SEARCH_VIEW_ALL,
                    };
                    if (null != o && !(0, C.G7)(o, r, n)) {
                        let e = (0, L.Xw)(o);
                        (0, C.W$)(o, r, n) === C.Ux.SENDABLE_WITH_PREMIUM && (0, N.U)(!0),
                            e && C.Ux.SENDABLE_WITH_BOOSTED_GUILD;
                        return;
                    }
                    i
                        ? (0, L.o1)(o.id)
                            ? (0, b.vr)(o.id)
                            : ((0, R.Dt)({ sticker: o, location: { ...l, object: k.ZSU.STICKER } }), (0, b.uK)(o.id))
                        : t(e);
                },
                [s.location, a, r, n, t],
            ),
        };
    },
    eo = (e) => {
        let {
                collapsedStickersCategories: t,
                gridWidth: n,
                stickerPadding: s,
                onSelectSticker: o,
                getStickerItemProps: u,
                getStickerRowProps: d,
                gutterWidth: _,
                inspectedStickerPosition: f,
                isScrolling: h,
                isUsingKeyboardNavigation: m,
                stickersGrid: E,
                stickersCategories: g,
                filteredStickers: v,
                ownedStickerPacks: N,
                channel: C,
            } = e,
            b = (0, c.p)(),
            R = (0, a.bG)([S.default], () => S.default.getCurrentUser()),
            { handleStickerInspect: M, handleSelect: V } = ea({ onSelectSticker: o, channel: C, currentUser: R }),
            [j, Y] = i.useState(!1),
            W = i.useCallback((e) => {
                I.tP.updateSetting(Array.from(e));
            }, []),
            K = i.useCallback(
                (e) => {
                    let t = E[e];
                    return null != t
                        ? (0, r.jsx)(
                              P.A,
                              {
                                  getStickerItemProps: u,
                                  getStickerRowProps: d,
                                  gutterWidth: _,
                                  inspectedStickerPosition: f,
                                  isScrolling: h,
                                  isUsingKeyboardNavigation: m,
                                  onInspect: M,
                                  onSelect: V,
                                  rowIndex: e,
                                  stickerClassName: F.yI,
                                  stickerDescriptors: t,
                                  stickerSize: n > B ? X : Z,
                                  stickerPadding: s,
                                  preferAnimation: n <= H,
                                  ownedStickerPacks: N,
                                  isDisplayingIndividualStickers: !0,
                                  channel: C,
                                  currentUser: R,
                              },
                              e,
                          )
                        : null;
                },
                [E, u, d, _, f, h, m, M, V, n, s, N, C, R],
            ),
            z = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
            Q = i.useCallback(
                function (e) {
                    let { isStickerPack: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        y.default.track(k.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: b?.location,
                            tab: U.kx.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null,
                        }),
                        W(r);
                },
                [b, t, W],
            ),
            J = i.useCallback(
                (e) => {
                    let n = g[e];
                    if (null != v) {
                        let { sendable: t, sendableWithPremium: n } = v;
                        if (0 === e && t.length > 0) return null;
                        let i = t.length > 0 && n.length > 0;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                i ? (0, r.jsx)("div", { className: F.yF, children: (0, r.jsx)(l.cGx, {}) }) : null,
                                (0, r.jsx)(
                                    A.A,
                                    {
                                        className: F.jH,
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
                                    className: F.jH,
                                    "aria-label": G.intl.formatToPlainString(G.t["7lLCjZ"], { categoryName: n.name }),
                                    icon: (0, r.jsx)(l.Gg5, { size: "xs", color: "currentColor" }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => Q(n.id, { isStickerPack: !1 }),
                                    children: n.name,
                                },
                                `header-${n.id}`,
                            );
                        case D.Z2.RECENT:
                            return (0, r.jsx)(
                                A.A,
                                {
                                    className: F.jH,
                                    "aria-label": G.intl.formatToPlainString(G.t["7lLCjZ"], { categoryName: n.name }),
                                    icon: (0, r.jsx)(l.O4, { size: "xs", color: "currentColor" }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => Q(n.id, { isStickerPack: !1 }),
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
                                    className: F.jH,
                                    "aria-label": G.intl.formatToPlainString(G.t["7lLCjZ"], { categoryName: e.name }),
                                    icon: (0, r.jsx)(p.A, { guild: e, height: 16, width: 16 }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => Q(e.id),
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
                                    className: F.jH,
                                    "aria-label": G.intl.formatToPlainString(G.t["7lLCjZ"], { categoryName: e.name }),
                                    icon: (0, r.jsx)(w.A, { disableAnimation: !0, size: en, sticker: (0, L.Id)(e) }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => Q(e.id),
                                    children: e.name,
                                },
                                `h${e.id}`,
                            );
                        }
                    }
                },
                [t, g, Q, v],
            ),
            ee = i.useCallback(
                (e) => {
                    if (null != v) {
                        let { sendable: t, sendableWithPremium: n } = v;
                        return 0 === e && t.length > 0 ? 0 : q + (t.length > 0 && n.length > 0 ? $ : 0);
                    }
                    return q;
                },
                [v],
            );
        return {
            renderRow: K,
            renderSection: z,
            renderSectionHeader: J,
            sectionHeaderHeight: ee,
            renderSectionFooter: i.useCallback(
                (e) => {
                    let n = g[e],
                        i = t.has(n.id);
                    return n.type !== D.Z2.EMPTY_GUILD_UPSELL || null != v || i
                        ? null
                        : (0, r.jsx)(
                              x.A,
                              {
                                  className: F.Ij,
                                  guildId: n.id,
                                  channel: C,
                                  shouldTrackUpsellViewed: !j,
                                  setTrackedUpsellViewed: Y,
                              },
                              `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                          );
                },
                [g, t, v, C, j],
            ),
            sectionFooterHeight: i.useCallback(
                (e) => {
                    let n = g[e],
                        r = t.has(n.id);
                    return n.type !== D.Z2.EMPTY_GUILD_UPSELL || r ? 0 : er;
                },
                [g, t],
            ),
        };
    },
    el = i.forwardRef(function (e, t) {
        let {
                collapsedStickersCategories: n,
                gridWidth: o,
                filteredStickers: l,
                getStickerItemProps: c,
                getStickerRowProps: p,
                gutterWidth: E,
                stickerPadding: A,
                isUsingKeyboardNavigation: I,
                onSelectSticker: T,
                rowCount: S,
                rowCountBySection: y,
                stickersCategories: v,
                stickersGrid: N,
                channel: C,
            } = e,
            b = X + 2 * A + Q,
            R = Z + 2 * A + Q,
            D = i.useRef(!1),
            L = i.useRef(null),
            [w, x] = h.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], s.x),
            { analyticsLocations: P } = (0, _.Ay)(d.A.STICKER_PICKER),
            k = (0, m.RQ)((e) => e.searchQuery),
            U = (0, a.bG)([O.A], () => O.A.getPremiumPacks()),
            {
                renderRow: H,
                renderSection: j,
                renderSectionFooter: Y,
                sectionFooterHeight: W,
                renderSectionHeader: K,
                sectionHeaderHeight: z,
            } = eo({
                collapsedStickersCategories: n,
                gridWidth: o,
                stickerPadding: A,
                stickersCategories: v,
                stickersGrid: N,
                isScrolling: D,
                isUsingKeyboardNavigation: I,
                onSelectSticker: T,
                getStickerItemProps: c,
                getStickerRowProps: p,
                gutterWidth: E,
                inspectedStickerPosition: x,
                filteredStickers: l,
                ownedStickerPacks: i.useMemo(() => new Set(U.map((e) => e.id)), [U]),
                channel: C,
            }),
            $ = (0, g.Fk)({
                activeCategoryIndex: w,
                isScrolling: D,
                listRef: L,
                onActiveCategoryIndexChange: h.bM.setActiveCategoryIndex,
                scrollOffset: J,
                searchQuery: k,
            });
        return (
            (0, g.FV)({ searchQuery: k, activeCategoryIndex: w, listRef: L }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return L.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => L.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => L.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return L.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return L.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return L.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return L.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return L.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, r.jsx)(_.f5, {
                value: P,
                children: (0, r.jsxs)("div", {
                    className: F.iE,
                    children: [
                        null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length
                            ? (0, r.jsx)(u.A, {
                                  message: G.intl.string(G.t["zc+LQd"]),
                                  className: F.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: V,
                                  suggestions: (0, r.jsx)(es, { onSuggestionClick: (e) => (0, m.Ri)(e, !0) }),
                              })
                            : (0, r.jsx)(f.A, {
                                  role: "none presentation",
                                  listPadding: null != l ? et : ee,
                                  onScroll: $,
                                  renderRow: H,
                                  renderSection: null == l ? j : void 0,
                                  renderSectionHeader: K,
                                  renderSectionFooter: Y,
                                  rowCount: S,
                                  rowCountBySection: y,
                                  rowHeight: o > B ? b : R,
                                  sectionHeaderHeight: z,
                                  sectionFooterHeight: W,
                                  stickyHeaders: !0,
                                  ref: L,
                              }),
                        (0, r.jsx)(M.A, { stickersGrid: N }),
                    ],
                }),
            })
        );
    });
