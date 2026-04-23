"use strict";
n.d(t, { A: () => el });
var r = n(627968),
    i = n(64700),
    s = n(942381),
    a = n(311907),
    o = n(319060),
    l = n(939249),
    u = n(834730),
    c = n(404778),
    d = n(27232),
    _ = n(406810),
    f = n(537652),
    p = n(212245),
    h = n(793574),
    E = n(688810),
    m = n(962125),
    g = n(724511),
    A = n(850992),
    I = n(151271),
    T = n(60587),
    S = n(887695),
    y = n(286509),
    N = n(253932),
    v = n(71393),
    C = n(287809),
    O = n(954571),
    R = n(240248),
    b = n(410558),
    D = n(361670),
    L = n(631576),
    w = n(891090),
    M = n(679382),
    P = n(842086),
    x = n(378058),
    k = n(148355),
    U = n(102001),
    G = n(672182),
    F = n(582721),
    V = n(652215),
    B = n(698279),
    H = n(985018),
    j = n(301938),
    Y = n(911385);
let W = (0, R.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    K = (0, R.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    $ = (0, R.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    z = (0, R.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    q = (0, R.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    X = (0, R.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    Q = (0, R.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    Z = (0, R.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    J = (0, R.xI)(o.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    ee = (0, R.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    et = (0, R.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    en = (0, R.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    er = [$, q, X, Q],
    ei = [z, q, X, Q],
    es = (0, R.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    ea = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
    eo = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, r.jsx)("div", {
            className: j.yB,
            children: ea.map((e) =>
                (0, r.jsx)(
                    l.D,
                    {
                        className: j.x_,
                        onClick: () => t(e),
                        children: (0, r.jsx)(u.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                    },
                    e,
                ),
            ),
        });
    },
    el = i.forwardRef(function (e, t) {
        let {
                collapsedStickersCategories: n,
                gridWidth: o,
                filteredStickers: l,
                getStickerItemProps: u,
                getStickerRowProps: R,
                gutterWidth: $,
                stickerPadding: z,
                isUsingKeyboardNavigation: q,
                onSelectSticker: X,
                rowCount: Q,
                rowCountBySection: ea,
                stickersCategories: el,
                stickersGrid: eu,
                channel: ec,
            } = e,
            ed = ee + 2 * z,
            e_ = i.useRef(!1),
            ef = i.useRef(null),
            [ep, eh] = A.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], s.x),
            { analyticsLocations: eE } = (0, E.Ay)(h.A.STICKER_PICKER),
            em = (0, I.RQ)((e) => e.searchQuery),
            eg = (0, a.bG)([M.A], () => M.A.getPremiumPacks()),
            {
                renderRow: eA,
                renderSection: eI,
                renderSectionFooter: eT,
                sectionFooterHeight: eS,
                renderSectionHeader: ey,
                sectionHeaderHeight: eN,
            } = ((e) => {
                let {
                        collapsedStickersCategories: t,
                        gridWidth: n,
                        stickerPadding: s,
                        onSelectSticker: o,
                        getStickerItemProps: l,
                        getStickerRowProps: u,
                        gutterWidth: f,
                        inspectedStickerPosition: h,
                        isScrolling: E,
                        isUsingKeyboardNavigation: m,
                        stickersGrid: S,
                        stickersCategories: R,
                        filteredStickers: G,
                        ownedStickerPacks: Y,
                        channel: $,
                    } = e,
                    z = (0, p.p)(),
                    q = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
                    { handleStickerInspect: X, handleSelect: Q } = ((e) => {
                        let { onSelectSticker: t, channel: n, currentUser: r } = e,
                            s = (0, p.p)(),
                            a = (0, I.RQ)((e) => e.searchQuery);
                        return {
                            handleStickerInspect: i.useCallback((e) => {
                                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: r } = e;
                                A.bM.setActiveCategoryIndex(r),
                                    A.bM.setInspectedExpressionPosition(n, t, T.t.MOUSE_EVENT),
                                    e.type === P.op.STICKER && A.bM.setSearchPlaceholder(e.sticker.name);
                            }, []),
                            handleSelect: i.useCallback(
                                (e, i) => {
                                    if (e.type !== P.op.STICKER) return;
                                    let { sticker: o } = e;
                                    if (null == o) return;
                                    let l = {
                                        ...s.location,
                                        object:
                                            "" === a ? V.ZSU.STICKER_PICKER_VIEW_ALL : V.ZSU.STICKER_SEARCH_VIEW_ALL,
                                    };
                                    if (null != o && !(0, D.G7)(o, r, n)) {
                                        let e = (0, x.Xw)(o);
                                        (0, D.W$)(o, r, n) === D.Ux.SENDABLE_WITH_PREMIUM && (0, b.U)(!0),
                                            e && D.Ux.SENDABLE_WITH_BOOSTED_GUILD;
                                        return;
                                    }
                                    i
                                        ? (0, x.o1)(o.id)
                                            ? (0, L.vr)(o.id)
                                            : ((0, w.Dt)({ sticker: o, location: { ...l, object: V.ZSU.STICKER } }),
                                              (0, L.uK)(o.id))
                                        : t(e);
                                },
                                [s.location, a, r, n, t],
                            ),
                        };
                    })({ onSelectSticker: o, channel: $, currentUser: q }),
                    [en, er] = i.useState(!1),
                    ei = i.useCallback((e) => {
                        N.tP.updateSetting(Array.from(e));
                    }, []),
                    ea = i.useCallback(
                        (e) => {
                            let t = S[e];
                            return null != t
                                ? (0, r.jsx)(
                                      F.A,
                                      {
                                          getStickerItemProps: l,
                                          getStickerRowProps: u,
                                          gutterWidth: f,
                                          inspectedStickerPosition: h,
                                          isScrolling: E,
                                          isUsingKeyboardNavigation: m,
                                          onInspect: X,
                                          onSelect: Q,
                                          rowIndex: e,
                                          stickerClassName: j.yI,
                                          stickerDescriptors: t,
                                          stickerSize: n > W ? ee : et,
                                          stickerPadding: s,
                                          preferAnimation: n <= K,
                                          ownedStickerPacks: Y,
                                          isDisplayingIndividualStickers: !0,
                                          channel: $,
                                          currentUser: q,
                                      },
                                      e,
                                  )
                                : null;
                        },
                        [S, l, u, f, h, E, m, X, Q, n, s, Y, $, q],
                    ),
                    eo = i.useCallback((e, t) => (0, r.jsx)("div", { children: t }, e), []),
                    el = i.useCallback(
                        function (e) {
                            let { isStickerPack: n = !0 } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = new Set(t),
                                i = t.has(e);
                            i ? r.delete(e) : r.add(e),
                                O.default.track(V.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                    location: z?.location,
                                    tab: B.kx.STICKER,
                                    collapsed: !i,
                                    sticker_pack_id: n ? e : null,
                                }),
                                ei(r);
                        },
                        [z, t, ei],
                    ),
                    eu = i.useCallback(
                        (e) => {
                            let n = R[e];
                            if (null != G) {
                                let { sendable: t, sendableWithPremium: n } = G;
                                if (0 === e && t.length > 0) return null;
                                let i = t.length > 0 && n.length > 0;
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        i
                                            ? (0, r.jsx)("div", { className: j.yF, children: (0, r.jsx)(c.c, {}) })
                                            : null,
                                        (0, r.jsx)(
                                            y.A,
                                            {
                                                className: j.jH,
                                                "aria-label": H.intl.string(H.t.wbfJFh),
                                                children: H.intl.string(H.t["05Z/0l"]),
                                            },
                                            "stickers-you-might-like-header",
                                        ),
                                    ],
                                });
                            }
                            switch (n.type) {
                                case P.Z2.FAVORITE:
                                    return (0, r.jsx)(
                                        y.A,
                                        {
                                            className: j.jH,
                                            "aria-label": H.intl.formatToPlainString(H.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, r.jsx)(d.G, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => el(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case P.Z2.RECENT:
                                    return (0, r.jsx)(
                                        y.A,
                                        {
                                            className: j.jH,
                                            "aria-label": H.intl.formatToPlainString(H.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, r.jsx)(_.O, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => el(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case P.Z2.GUILD:
                                case P.Z2.EMPTY_GUILD_UPSELL: {
                                    let e = v.A.getGuild(n.id);
                                    if (null == e) return null;
                                    return (0, r.jsx)(
                                        y.A,
                                        {
                                            className: j.jH,
                                            "aria-label": H.intl.formatToPlainString(H.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, r.jsx)(g.A, { guild: e, height: 16, width: 16 }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => el(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                                case P.Z2.PACK: {
                                    let e = M.A.getStickerPack(n.id);
                                    if (null == e) return null;
                                    return (0, r.jsx)(
                                        y.A,
                                        {
                                            className: j.jH,
                                            "aria-label": H.intl.formatToPlainString(H.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, r.jsx)(k.A, {
                                                disableAnimation: !0,
                                                size: 12,
                                                sticker: (0, x.Id)(e),
                                            }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => el(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                            }
                        },
                        [t, R, el, G],
                    ),
                    ec = i.useCallback(
                        (e) => {
                            if (null != G) {
                                let { sendable: t, sendableWithPremium: n } = G;
                                return 0 === e && t.length > 0 ? 0 : J + (t.length > 0 && n.length > 0 ? Z : 0);
                            }
                            return J;
                        },
                        [G],
                    );
                return {
                    renderRow: ea,
                    renderSection: eo,
                    renderSectionHeader: eu,
                    sectionHeaderHeight: ec,
                    renderSectionFooter: i.useCallback(
                        (e) => {
                            let n = R[e],
                                i = t.has(n.id);
                            return n.type !== P.Z2.EMPTY_GUILD_UPSELL || null != G || i
                                ? null
                                : (0, r.jsx)(
                                      U.A,
                                      {
                                          className: j.Ij,
                                          guildId: n.id,
                                          channel: $,
                                          shouldTrackUpsellViewed: !en,
                                          setTrackedUpsellViewed: er,
                                      },
                                      `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                  );
                        },
                        [R, t, G, $, en],
                    ),
                    sectionFooterHeight: i.useCallback(
                        (e) => {
                            let n = R[e],
                                r = t.has(n.id);
                            return n.type !== P.Z2.EMPTY_GUILD_UPSELL || r ? 0 : es;
                        },
                        [R, t],
                    ),
                };
            })({
                collapsedStickersCategories: n,
                gridWidth: o,
                stickerPadding: z,
                stickersCategories: el,
                stickersGrid: eu,
                isScrolling: e_,
                isUsingKeyboardNavigation: q,
                onSelectSticker: X,
                getStickerItemProps: u,
                getStickerRowProps: R,
                gutterWidth: $,
                inspectedStickerPosition: eh,
                filteredStickers: l,
                ownedStickerPacks: i.useMemo(() => new Set(eg.map((e) => e.id)), [eg]),
                channel: ec,
            }),
            ev = (0, S.Fk)({
                activeCategoryIndex: ep,
                isScrolling: e_,
                listRef: ef,
                onActiveCategoryIndexChange: A.bM.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: em,
            });
        return (
            (0, S.FV)({ searchQuery: em, activeCategoryIndex: ep, listRef: ef }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return ef.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => ef.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => ef.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return ef.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return ef.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return ef.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return ef.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return ef.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, r.jsx)(E.f5, {
                value: eE,
                children: (0, r.jsxs)("div", {
                    className: j.iE,
                    children: [
                        null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length
                            ? (0, r.jsx)(f.A, {
                                  message: H.intl.string(H.t["zc+LQd"]),
                                  className: j.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: Y,
                                  suggestions: (0, r.jsx)(eo, { onSuggestionClick: (e) => (0, I.Ri)(e, !0) }),
                              })
                            : (0, r.jsx)(m.A, {
                                  role: "none presentation",
                                  listPadding: null != l ? ei : er,
                                  onScroll: ev,
                                  renderRow: eA,
                                  renderSection: null == l ? eI : void 0,
                                  renderSectionHeader: ey,
                                  renderSectionFooter: eT,
                                  rowCount: Q,
                                  rowCountBySection: ea,
                                  rowHeight: o > W ? ed + en : et + 2 * z + en,
                                  sectionHeaderHeight: eN,
                                  sectionFooterHeight: eS,
                                  stickyHeaders: !0,
                                  ref: ef,
                              }),
                        (0, r.jsx)(G.A, { stickersGrid: eu }),
                    ],
                }),
            })
        );
    });
