"use strict";
n.d(t, { A: () => ed });
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
    Z = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    X = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    Q = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    J = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    ee = Z + 2 * Q + J,
    et = X + 2 * Q + J,
    en = 20,
    er = [j, W, K, z],
    ei = [Y, W, K, z],
    es = 12,
    ea = (0, v.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    eo = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
    el = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, r.jsx)("div", {
            className: F.yB,
            children: eo.map((e) =>
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
    eu = (e) => {
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
    ec = (e) => {
        let {
                collapsedStickersCategories: t,
                gridWidth: n,
                onSelectSticker: s,
                getStickerItemProps: o,
                getStickerRowProps: u,
                gutterWidth: d,
                inspectedStickerPosition: _,
                isScrolling: f,
                isUsingKeyboardNavigation: h,
                stickersGrid: m,
                stickersCategories: E,
                filteredStickers: g,
                ownedStickerPacks: v,
                channel: N,
            } = e,
            C = (0, c.p)(),
            b = (0, a.bG)([S.default], () => S.default.getCurrentUser()),
            { handleStickerInspect: R, handleSelect: M } = eu({ onSelectSticker: s, channel: N, currentUser: b }),
            [V, j] = i.useState(!1),
            Y = i.useCallback((e) => {
                I.tP.updateSetting(Array.from(e));
            }, []),
            W = i.useCallback(
                (e) => {
                    let t = m[e];
                    return null != t
                        ? (0, r.jsx)(
                              P.A,
                              {
                                  getStickerItemProps: o,
                                  getStickerRowProps: u,
                                  gutterWidth: d,
                                  inspectedStickerPosition: _,
                                  isScrolling: f,
                                  isUsingKeyboardNavigation: h,
                                  onInspect: R,
                                  onSelect: M,
                                  rowIndex: e,
                                  stickerClassName: F.yI,
                                  stickerDescriptors: t,
                                  stickerSize: n > B ? Z : X,
                                  preferAnimation: n <= H,
                                  ownedStickerPacks: v,
                                  isDisplayingIndividualStickers: !0,
                                  channel: N,
                                  currentUser: b,
                              },
                              e,
                          )
                        : null;
                },
                [m, o, u, d, _, f, h, R, M, n, v, N, b],
            ),
            K = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
            z = i.useCallback(
                function (e) {
                    let { isStickerPack: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        y.default.track(k.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: C?.location,
                            tab: U.kx.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null,
                        }),
                        Y(r);
                },
                [C, t, Y],
            ),
            Q = i.useCallback(
                (e) => {
                    let n = E[e];
                    if (null != g) {
                        let { sendable: t, sendableWithPremium: n } = g;
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
                                    onClick: () => z(n.id, { isStickerPack: !1 }),
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
                                    className: F.jH,
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
                                    className: F.jH,
                                    "aria-label": G.intl.formatToPlainString(G.t["7lLCjZ"], { categoryName: e.name }),
                                    icon: (0, r.jsx)(w.A, { disableAnimation: !0, size: es, sticker: (0, L.Id)(e) }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => z(e.id),
                                    children: e.name,
                                },
                                `h${e.id}`,
                            );
                        }
                    }
                },
                [t, E, z, g],
            ),
            J = i.useCallback(
                (e) => {
                    if (null != g) {
                        let { sendable: t, sendableWithPremium: n } = g;
                        return 0 === e && t.length > 0 ? 0 : q + (t.length > 0 && n.length > 0 ? $ : 0);
                    }
                    return q;
                },
                [g],
            );
        return {
            renderRow: W,
            renderSection: K,
            renderSectionHeader: Q,
            sectionHeaderHeight: J,
            renderSectionFooter: i.useCallback(
                (e) => {
                    let n = E[e],
                        i = t.has(n.id);
                    return n.type !== D.Z2.EMPTY_GUILD_UPSELL || null != g || i
                        ? null
                        : (0, r.jsx)(
                              x.A,
                              {
                                  className: F.Ij,
                                  guildId: n.id,
                                  channel: N,
                                  shouldTrackUpsellViewed: !V,
                                  setTrackedUpsellViewed: j,
                              },
                              `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                          );
                },
                [E, t, g, N, V],
            ),
            sectionFooterHeight: i.useCallback(
                (e) => {
                    let n = E[e],
                        r = t.has(n.id);
                    return n.type !== D.Z2.EMPTY_GUILD_UPSELL || r ? 0 : ea;
                },
                [E, t],
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
                gutterWidth: E,
                isUsingKeyboardNavigation: A,
                onSelectSticker: I,
                rowCount: T,
                rowCountBySection: S,
                stickersCategories: y,
                stickersGrid: v,
                channel: N,
            } = e,
            C = i.useRef(!1),
            b = i.useRef(null),
            [R, D] = h.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], s.x),
            { analyticsLocations: L } = (0, _.Ay)(d.A.STICKER_PICKER),
            w = (0, m.RQ)((e) => e.searchQuery),
            x = (0, a.bG)([O.A], () => O.A.getPremiumPacks()),
            {
                renderRow: P,
                renderSection: k,
                renderSectionFooter: U,
                sectionFooterHeight: H,
                renderSectionHeader: j,
                sectionHeaderHeight: Y,
            } = ec({
                collapsedStickersCategories: n,
                gridWidth: o,
                stickersCategories: y,
                stickersGrid: v,
                isScrolling: C,
                isUsingKeyboardNavigation: A,
                onSelectSticker: I,
                getStickerItemProps: c,
                getStickerRowProps: p,
                gutterWidth: E,
                inspectedStickerPosition: D,
                filteredStickers: l,
                ownedStickerPacks: i.useMemo(() => new Set(x.map((e) => e.id)), [x]),
                channel: N,
            }),
            W = (0, g.Fk)({
                activeCategoryIndex: R,
                isScrolling: C,
                listRef: b,
                onActiveCategoryIndexChange: h.bM.setActiveCategoryIndex,
                scrollOffset: en,
                searchQuery: w,
            });
        return (
            (0, g.FV)({ searchQuery: w, activeCategoryIndex: R, listRef: b }),
            i.useImperativeHandle(
                t,
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
            (0, r.jsx)(_.f5, {
                value: L,
                children: (0, r.jsxs)("div", {
                    className: F.iE,
                    children: [
                        null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length
                            ? (0, r.jsx)(u.A, {
                                  message: G.intl.string(G.t["zc+LQd"]),
                                  className: F.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: V,
                                  suggestions: (0, r.jsx)(el, { onSuggestionClick: (e) => (0, m.Ri)(e, !0) }),
                              })
                            : (0, r.jsx)(f.A, {
                                  role: "none presentation",
                                  listPadding: null != l ? ei : er,
                                  onScroll: W,
                                  renderRow: P,
                                  renderSection: null == l ? k : void 0,
                                  renderSectionHeader: j,
                                  renderSectionFooter: U,
                                  rowCount: T,
                                  rowCountBySection: S,
                                  rowHeight: o > B ? ee : et,
                                  sectionHeaderHeight: Y,
                                  sectionFooterHeight: H,
                                  stickyHeaders: !0,
                                  ref: b,
                              }),
                        (0, r.jsx)(M.A, { stickersGrid: v }),
                    ],
                }),
            })
        );
    });
