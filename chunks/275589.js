"use strict";
n.d(t, { A: () => eo });
var i = n(627968),
    l = n(64700),
    s = n(942381),
    r = n(311907),
    a = n(319060),
    o = n(939249),
    c = n(834730),
    u = n(404778),
    d = n(27232),
    h = n(406810),
    m = n(537652),
    p = n(212245),
    f = n(793574),
    g = n(688810),
    _ = n(962125),
    x = n(724511),
    A = n(850992),
    C = n(151271),
    E = n(60587),
    I = n(887695),
    v = n(286509),
    y = n(253932),
    S = n(71393),
    b = n(287809),
    N = n(954571),
    T = n(240248),
    j = n(410558),
    R = n(361670),
    w = n(631576),
    L = n(891090),
    M = n(679382),
    k = n(842086),
    O = n(378058),
    P = n(148355),
    D = n(102001),
    U = n(672182),
    V = n(582721),
    G = n(652215),
    F = n(698279),
    B = n(985018),
    H = n(301938),
    W = n(911385);
let K = (0, T.xI)(a.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    z = (0, T.xI)(a.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    Z = (0, T.xI)(a.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    q = (0, T.xI)(a.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    Y = (0, T.xI)(a.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    J = (0, T.xI)(a.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    $ = (0, T.xI)(a.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    X = (0, T.xI)(a.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    Q = (0, T.xI)(a.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    ee = (0, T.xI)(a.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    et = (0, T.xI)(a.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    en = (0, T.xI)(a.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    ei = [Z, Y, J, $],
    el = [q, Y, J, $],
    es = (0, T.xI)(a.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    er = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
    ea = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, i.jsx)("div", {
            className: H.yB,
            children: er.map((e) =>
                (0, i.jsx)(
                    o.D,
                    {
                        className: H.x_,
                        onClick: () => t(e),
                        children: (0, i.jsx)(c.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                    },
                    e,
                ),
            ),
        });
    },
    eo = l.forwardRef(function (e, t) {
        let {
                collapsedStickersCategories: n,
                gridWidth: a,
                filteredStickers: o,
                getStickerItemProps: c,
                getStickerRowProps: T,
                gutterWidth: Z,
                stickerPadding: q,
                isUsingKeyboardNavigation: Y,
                onSelectSticker: J,
                rowCount: $,
                rowCountBySection: er,
                stickersCategories: eo,
                stickersGrid: ec,
                channel: eu,
            } = e,
            ed = ee + 2 * q,
            eh = l.useRef(!1),
            em = l.useRef(null),
            [ep, ef] = A.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], s.x),
            { analyticsLocations: eg } = (0, g.Ay)(f.A.STICKER_PICKER),
            e_ = (0, C.RQ)((e) => e.searchQuery),
            ex = (0, r.bG)([M.A], () => M.A.getPremiumPacks()),
            {
                renderRow: eA,
                renderSection: eC,
                renderSectionFooter: eE,
                sectionFooterHeight: eI,
                renderSectionHeader: ev,
                sectionHeaderHeight: ey,
            } = ((e) => {
                let {
                        collapsedStickersCategories: t,
                        gridWidth: n,
                        stickerPadding: s,
                        onSelectSticker: a,
                        getStickerItemProps: o,
                        getStickerRowProps: c,
                        gutterWidth: m,
                        inspectedStickerPosition: f,
                        isScrolling: g,
                        isUsingKeyboardNavigation: _,
                        stickersGrid: I,
                        stickersCategories: T,
                        filteredStickers: U,
                        ownedStickerPacks: W,
                        channel: Z,
                    } = e,
                    q = (0, p.p)(),
                    Y = (0, r.bG)([b.default], () => b.default.getCurrentUser()),
                    { handleStickerInspect: J, handleSelect: $ } = ((e) => {
                        let { onSelectSticker: t, channel: n, currentUser: i } = e,
                            s = (0, p.p)(),
                            r = (0, C.RQ)((e) => e.searchQuery);
                        return {
                            handleStickerInspect: l.useCallback((e) => {
                                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: i } = e;
                                A.bM.setActiveCategoryIndex(i),
                                    A.bM.setInspectedExpressionPosition(n, t, E.t.MOUSE_EVENT),
                                    e.type === k.op.STICKER && A.bM.setSearchPlaceholder(e.sticker.name);
                            }, []),
                            handleSelect: l.useCallback(
                                (e, l) => {
                                    if (e.type !== k.op.STICKER) return;
                                    let { sticker: a } = e;
                                    if (null == a) return;
                                    let o = {
                                        ...s.location,
                                        object:
                                            "" === r ? G.ZSU.STICKER_PICKER_VIEW_ALL : G.ZSU.STICKER_SEARCH_VIEW_ALL,
                                    };
                                    if (null != a && !(0, R.G7)(a, i, n)) {
                                        let e = (0, O.Xw)(a);
                                        (0, R.W$)(a, i, n) === R.Ux.SENDABLE_WITH_PREMIUM && (0, j.U)(!0),
                                            e && R.Ux.SENDABLE_WITH_BOOSTED_GUILD;
                                        return;
                                    }
                                    l
                                        ? (0, O.o1)(a.id)
                                            ? (0, w.vr)(a.id)
                                            : ((0, L.Dt)({ sticker: a, location: { ...o, object: G.ZSU.STICKER } }),
                                              (0, w.uK)(a.id))
                                        : t(e);
                                },
                                [s.location, r, i, n, t],
                            ),
                        };
                    })({ onSelectSticker: a, channel: Z, currentUser: Y }),
                    [en, ei] = l.useState(!1),
                    el = l.useCallback((e) => {
                        y.tP.updateSetting(Array.from(e));
                    }, []),
                    er = l.useCallback(
                        (e) => {
                            let t = I[e];
                            return null != t
                                ? (0, i.jsx)(
                                      V.A,
                                      {
                                          getStickerItemProps: o,
                                          getStickerRowProps: c,
                                          gutterWidth: m,
                                          inspectedStickerPosition: f,
                                          isScrolling: g,
                                          isUsingKeyboardNavigation: _,
                                          onInspect: J,
                                          onSelect: $,
                                          rowIndex: e,
                                          stickerClassName: H.yI,
                                          stickerDescriptors: t,
                                          stickerSize: n > K ? ee : et,
                                          stickerPadding: s,
                                          preferAnimation: n <= z,
                                          ownedStickerPacks: W,
                                          isDisplayingIndividualStickers: !0,
                                          channel: Z,
                                          currentUser: Y,
                                      },
                                      e,
                                  )
                                : null;
                        },
                        [I, o, c, m, f, g, _, J, $, n, s, W, Z, Y],
                    ),
                    ea = l.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
                    eo = l.useCallback(
                        function (e) {
                            let { isStickerPack: n = !0 } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = new Set(t),
                                l = t.has(e);
                            l ? i.delete(e) : i.add(e),
                                N.default.track(G.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                    location: q?.location,
                                    tab: F.kx.STICKER,
                                    collapsed: !l,
                                    sticker_pack_id: n ? e : null,
                                }),
                                el(i);
                        },
                        [q, t, el],
                    ),
                    ec = l.useCallback(
                        (e) => {
                            let n = T[e];
                            if (null != U) {
                                let { sendable: t, sendableWithPremium: n } = U;
                                if (0 === e && t.length > 0) return null;
                                let l = t.length > 0 && n.length > 0;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        l
                                            ? (0, i.jsx)("div", { className: H.yF, children: (0, i.jsx)(u.c, {}) })
                                            : null,
                                        (0, i.jsx)(
                                            v.A,
                                            {
                                                className: H.jH,
                                                "aria-label": B.intl.string(B.t.wbfJFh),
                                                children: B.intl.string(B.t["05Z/0l"]),
                                            },
                                            "stickers-you-might-like-header",
                                        ),
                                    ],
                                });
                            }
                            switch (n.type) {
                                case k.Z2.FAVORITE:
                                    return (0, i.jsx)(
                                        v.A,
                                        {
                                            className: H.jH,
                                            "aria-label": B.intl.formatToPlainString(B.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, i.jsx)(d.G, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => eo(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case k.Z2.RECENT:
                                    return (0, i.jsx)(
                                        v.A,
                                        {
                                            className: H.jH,
                                            "aria-label": B.intl.formatToPlainString(B.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, i.jsx)(h.O, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => eo(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case k.Z2.GUILD:
                                case k.Z2.EMPTY_GUILD_UPSELL: {
                                    let e = S.A.getGuild(n.id);
                                    if (null == e) return null;
                                    return (0, i.jsx)(
                                        v.A,
                                        {
                                            className: H.jH,
                                            "aria-label": B.intl.formatToPlainString(B.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, i.jsx)(x.A, { guild: e, height: 16, width: 16 }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => eo(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                                case k.Z2.PACK: {
                                    let e = M.A.getStickerPack(n.id);
                                    if (null == e) return null;
                                    return (0, i.jsx)(
                                        v.A,
                                        {
                                            className: H.jH,
                                            "aria-label": B.intl.formatToPlainString(B.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, i.jsx)(P.A, {
                                                disableAnimation: !0,
                                                size: 12,
                                                sticker: (0, O.Id)(e),
                                            }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => eo(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                            }
                        },
                        [t, T, eo, U],
                    ),
                    eu = l.useCallback(
                        (e) => {
                            if (null != U) {
                                let { sendable: t, sendableWithPremium: n } = U;
                                return 0 === e && t.length > 0 ? 0 : Q + (t.length > 0 && n.length > 0 ? X : 0);
                            }
                            return Q;
                        },
                        [U],
                    );
                return {
                    renderRow: er,
                    renderSection: ea,
                    renderSectionHeader: ec,
                    sectionHeaderHeight: eu,
                    renderSectionFooter: l.useCallback(
                        (e) => {
                            let n = T[e],
                                l = t.has(n.id);
                            return n.type !== k.Z2.EMPTY_GUILD_UPSELL || null != U || l
                                ? null
                                : (0, i.jsx)(
                                      D.A,
                                      {
                                          className: H.Ij,
                                          guildId: n.id,
                                          channel: Z,
                                          shouldTrackUpsellViewed: !en,
                                          setTrackedUpsellViewed: ei,
                                      },
                                      `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                  );
                        },
                        [T, t, U, Z, en],
                    ),
                    sectionFooterHeight: l.useCallback(
                        (e) => {
                            let n = T[e],
                                i = t.has(n.id);
                            return n.type !== k.Z2.EMPTY_GUILD_UPSELL || i ? 0 : es;
                        },
                        [T, t],
                    ),
                };
            })({
                collapsedStickersCategories: n,
                gridWidth: a,
                stickerPadding: q,
                stickersCategories: eo,
                stickersGrid: ec,
                isScrolling: eh,
                isUsingKeyboardNavigation: Y,
                onSelectSticker: J,
                getStickerItemProps: c,
                getStickerRowProps: T,
                gutterWidth: Z,
                inspectedStickerPosition: ef,
                filteredStickers: o,
                ownedStickerPacks: l.useMemo(() => new Set(ex.map((e) => e.id)), [ex]),
                channel: eu,
            }),
            eS = (0, I.Fk)({
                activeCategoryIndex: ep,
                isScrolling: eh,
                listRef: em,
                onActiveCategoryIndexChange: A.bM.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: e_,
            });
        return (
            (0, I.FV)({ searchQuery: e_, activeCategoryIndex: ep, listRef: em }),
            l.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return em.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => em.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => em.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return em.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return em.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return em.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return em.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return em.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, i.jsx)(g.f5, {
                value: eg,
                children: (0, i.jsxs)("div", {
                    className: H.iE,
                    children: [
                        null != o && 0 === o.sendable.length && 0 === o.sendableWithPremium.length
                            ? (0, i.jsx)(m.A, {
                                  message: B.intl.string(B.t["zc+LQd"]),
                                  className: H.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: W,
                                  suggestions: (0, i.jsx)(ea, { onSuggestionClick: (e) => (0, C.Ri)(e, !0) }),
                              })
                            : (0, i.jsx)(_.A, {
                                  role: "none presentation",
                                  listPadding: null != o ? el : ei,
                                  onScroll: eS,
                                  renderRow: eA,
                                  renderSection: null == o ? eC : void 0,
                                  renderSectionHeader: ev,
                                  renderSectionFooter: eE,
                                  rowCount: $,
                                  rowCountBySection: er,
                                  rowHeight: a > K ? ed + en : et + 2 * q + en,
                                  sectionHeaderHeight: ey,
                                  sectionFooterHeight: eI,
                                  stickyHeaders: !0,
                                  ref: em,
                              }),
                        (0, i.jsx)(U.A, { stickersGrid: ec }),
                    ],
                }),
            })
        );
    });
