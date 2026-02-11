"use strict";
n.d(t, { A: () => e_ });
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
    h = n(724511),
    p = n(850992),
    g = n(151271),
    E = n(60587),
    A = n(887695),
    I = n(286509),
    T = n(253932),
    y = n(71393),
    S = n(287809),
    v = n(954571),
    C = n(240248),
    b = n(410558),
    N = n(361670),
    R = n(631576),
    O = n(891090),
    D = n(679382),
    L = n(842086),
    w = n(378058),
    x = n(148355),
    P = n(102001),
    M = n(672182),
    k = n(582721),
    U = n(652215),
    G = n(698279),
    F = n(985018),
    V = n(780465),
    B = n(911385);
let j = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    H = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    Y = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    W = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    K = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    $ = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    z = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    q = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    X = (0, C.xI)(o.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    Z = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    Q = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    J = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    ee = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    et = Z + 2 * J + ee,
    en = Q + 2 * J + ee,
    er = 20,
    ei = [Y, K, $, z],
    ea = [W, K, $, z],
    es = 12,
    eo = (0, C.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    el = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
    eu = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, r.jsx)("div", {
            className: V.yB,
            children: el.map((e) =>
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
    ec = (e) => {
        let { onSelectSticker: t, channel: n, currentUser: r } = e,
            a = (0, c.p)(),
            s = (0, g.RQ)((e) => e.searchQuery);
        return {
            handleStickerInspect: i.useCallback((e) => {
                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: r } = e;
                p.bM.setActiveCategoryIndex(r),
                    p.bM.setInspectedExpressionPosition(n, t, E.t.MOUSE_EVENT),
                    e.type === L.op.STICKER && p.bM.setSearchPlaceholder(e.sticker.name);
            }, []),
            handleSelect: i.useCallback(
                (e, i) => {
                    if (e.type !== L.op.STICKER) return;
                    let { sticker: o } = e;
                    if (null == o) return;
                    let l = {
                        ...a.location,
                        object: "" === s ? U.ZSU.STICKER_PICKER_VIEW_ALL : U.ZSU.STICKER_SEARCH_VIEW_ALL,
                    };
                    if (null != o && !(0, N.G7)(o, r, n)) {
                        let e = (0, w.Xw)(o);
                        (0, N.W$)(o, r, n) === N.Ux.SENDABLE_WITH_PREMIUM && (0, b.U)(!0),
                            e && N.Ux.SENDABLE_WITH_BOOSTED_GUILD;
                        return;
                    }
                    i
                        ? (0, w.o1)(o.id)
                            ? (0, R.vr)(o.id)
                            : ((0, O.Dt)({ sticker: o, location: { ...l, object: U.ZSU.STICKER } }), (0, R.uK)(o.id))
                        : t(e);
                },
                [a.location, s, r, n, t],
            ),
        };
    },
    ed = (e) => {
        let {
                collapsedStickersCategories: t,
                gridWidth: n,
                onSelectSticker: a,
                getStickerItemProps: o,
                getStickerRowProps: u,
                gutterWidth: d,
                inspectedStickerPosition: _,
                isScrolling: f,
                isUsingKeyboardNavigation: p,
                stickersGrid: g,
                stickersCategories: E,
                filteredStickers: A,
                ownedStickerPacks: C,
                channel: b,
            } = e,
            N = (0, c.p)(),
            R = (0, s.bG)([S.default], () => S.default.getCurrentUser()),
            { handleStickerInspect: O, handleSelect: M } = ec({ onSelectSticker: a, channel: b, currentUser: R }),
            [B, Y] = i.useState(!1),
            W = i.useCallback((e) => {
                T.tP.updateSetting(Array.from(e));
            }, []),
            K = i.useCallback(
                (e) => {
                    let t = g[e];
                    return null != t
                        ? (0, r.jsx)(
                              k.A,
                              {
                                  getStickerItemProps: o,
                                  getStickerRowProps: u,
                                  gutterWidth: d,
                                  inspectedStickerPosition: _,
                                  isScrolling: f,
                                  isUsingKeyboardNavigation: p,
                                  onInspect: O,
                                  onSelect: M,
                                  rowIndex: e,
                                  stickerClassName: V.yI,
                                  stickerDescriptors: t,
                                  stickerSize: n > j ? Z : Q,
                                  preferAnimation: n <= H,
                                  ownedStickerPacks: C,
                                  isDisplayingIndividualStickers: !0,
                                  channel: b,
                                  currentUser: R,
                              },
                              e,
                          )
                        : null;
                },
                [g, o, u, d, _, f, p, O, M, n, C, b, R],
            ),
            $ = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
            z = i.useCallback(
                function (e) {
                    let { isStickerPack: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        v.default.track(U.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: N?.location,
                            tab: G.kx.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null,
                        }),
                        W(r);
                },
                [N, t, W],
            ),
            J = i.useCallback(
                (e) => {
                    let n = E[e];
                    if (null != A) {
                        let { sendable: t, sendableWithPremium: n } = A;
                        if (0 === e && t.length > 0) return null;
                        let i = t.length > 0 && n.length > 0;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                i ? (0, r.jsx)("div", { className: V.yF, children: (0, r.jsx)(l.cGx, {}) }) : null,
                                (0, r.jsx)(
                                    I.A,
                                    {
                                        className: V.jH,
                                        "aria-label": F.intl.string(F.t.wbfJFh),
                                        children: F.intl.string(F.t["05Z/0l"]),
                                    },
                                    "stickers-you-might-like-header",
                                ),
                            ],
                        });
                    }
                    switch (n.type) {
                        case L.Z2.FAVORITE:
                            return (0, r.jsx)(
                                I.A,
                                {
                                    className: V.jH,
                                    "aria-label": F.intl.formatToPlainString(F.t["7lLCjZ"], { categoryName: n.name }),
                                    icon: (0, r.jsx)(l.Gg5, { size: "xs", color: "currentColor" }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => z(n.id, { isStickerPack: !1 }),
                                    children: n.name,
                                },
                                `header-${n.id}`,
                            );
                        case L.Z2.RECENT:
                            return (0, r.jsx)(
                                I.A,
                                {
                                    className: V.jH,
                                    "aria-label": F.intl.formatToPlainString(F.t["7lLCjZ"], { categoryName: n.name }),
                                    icon: (0, r.jsx)(l.O4, { size: "xs", color: "currentColor" }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => z(n.id, { isStickerPack: !1 }),
                                    children: n.name,
                                },
                                `header-${n.id}`,
                            );
                        case L.Z2.GUILD:
                        case L.Z2.EMPTY_GUILD_UPSELL: {
                            let e = y.A.getGuild(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                I.A,
                                {
                                    className: V.jH,
                                    "aria-label": F.intl.formatToPlainString(F.t["7lLCjZ"], { categoryName: e.name }),
                                    icon: (0, r.jsx)(h.A, { guild: e, height: 16, width: 16 }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => z(e.id),
                                    children: e.name,
                                },
                                `h${e.id}`,
                            );
                        }
                        case L.Z2.PACK: {
                            let e = D.A.getStickerPack(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                I.A,
                                {
                                    className: V.jH,
                                    "aria-label": F.intl.formatToPlainString(F.t["7lLCjZ"], { categoryName: e.name }),
                                    icon: (0, r.jsx)(x.A, { disableAnimation: !0, size: es, sticker: (0, w.Id)(e) }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => z(e.id),
                                    children: e.name,
                                },
                                `h${e.id}`,
                            );
                        }
                    }
                },
                [t, E, z, A],
            ),
            ee = i.useCallback(
                (e) => {
                    if (null != A) {
                        let { sendable: t, sendableWithPremium: n } = A;
                        return 0 === e && t.length > 0 ? 0 : X + (t.length > 0 && n.length > 0 ? q : 0);
                    }
                    return X;
                },
                [A],
            );
        return {
            renderRow: K,
            renderSection: $,
            renderSectionHeader: J,
            sectionHeaderHeight: ee,
            renderSectionFooter: i.useCallback(
                (e) => {
                    let n = E[e],
                        i = t.has(n.id);
                    return n.type !== L.Z2.EMPTY_GUILD_UPSELL || null != A || i
                        ? null
                        : (0, r.jsx)(
                              P.A,
                              {
                                  className: V.Ij,
                                  guildId: n.id,
                                  channel: b,
                                  shouldTrackUpsellViewed: !B,
                                  setTrackedUpsellViewed: Y,
                              },
                              `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                          );
                },
                [E, t, A, b, B],
            ),
            sectionFooterHeight: i.useCallback(
                (e) => {
                    let n = E[e],
                        r = t.has(n.id);
                    return n.type !== L.Z2.EMPTY_GUILD_UPSELL || r ? 0 : eo;
                },
                [E, t],
            ),
        };
    },
    e_ = i.forwardRef(function (e, t) {
        let {
                collapsedStickersCategories: n,
                gridWidth: o,
                filteredStickers: l,
                getStickerItemProps: c,
                getStickerRowProps: h,
                gutterWidth: E,
                isUsingKeyboardNavigation: I,
                onSelectSticker: T,
                rowCount: y,
                rowCountBySection: S,
                stickersCategories: v,
                stickersGrid: C,
                channel: b,
            } = e,
            N = i.useRef(!1),
            R = i.useRef(null),
            [O, L] = p.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], a.x),
            { analyticsLocations: w } = (0, _.Ay)(d.A.STICKER_PICKER),
            x = (0, g.RQ)((e) => e.searchQuery),
            P = (0, s.bG)([D.A], () => D.A.getPremiumPacks()),
            {
                renderRow: k,
                renderSection: U,
                renderSectionFooter: G,
                sectionFooterHeight: H,
                renderSectionHeader: Y,
                sectionHeaderHeight: W,
            } = ed({
                collapsedStickersCategories: n,
                gridWidth: o,
                stickersCategories: v,
                stickersGrid: C,
                isScrolling: N,
                isUsingKeyboardNavigation: I,
                onSelectSticker: T,
                getStickerItemProps: c,
                getStickerRowProps: h,
                gutterWidth: E,
                inspectedStickerPosition: L,
                filteredStickers: l,
                ownedStickerPacks: i.useMemo(() => new Set(P.map((e) => e.id)), [P]),
                channel: b,
            }),
            K = (0, A.Fk)({
                activeCategoryIndex: O,
                isScrolling: N,
                listRef: R,
                onActiveCategoryIndexChange: p.bM.setActiveCategoryIndex,
                scrollOffset: er,
                searchQuery: x,
            });
        return (
            (0, A.FV)({ searchQuery: x, activeCategoryIndex: O, listRef: R }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return R.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => R.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => R.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return R.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return R.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return R.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return R.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return R.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, r.jsx)(_.f5, {
                value: w,
                children: (0, r.jsxs)("div", {
                    className: V.iE,
                    children: [
                        null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length
                            ? (0, r.jsx)(u.A, {
                                  message: F.intl.string(F.t["zc+LQd"]),
                                  className: V.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: B,
                                  suggestions: (0, r.jsx)(eu, { onSuggestionClick: (e) => (0, g.Ri)(e, !0) }),
                              })
                            : (0, r.jsx)(f.A, {
                                  role: "none presentation",
                                  listPadding: null != l ? ea : ei,
                                  onScroll: K,
                                  renderRow: k,
                                  renderSection: null == l ? U : void 0,
                                  renderSectionHeader: Y,
                                  renderSectionFooter: G,
                                  rowCount: y,
                                  rowCountBySection: S,
                                  rowHeight: o > j ? et : en,
                                  sectionHeaderHeight: W,
                                  sectionFooterHeight: H,
                                  stickyHeaders: !0,
                                  ref: R,
                              }),
                        (0, r.jsx)(M.A, { stickersGrid: C }),
                    ],
                }),
            })
        );
    });
