n.d(t, {
    A: () => eh,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(942381),
    s = n(311907),
    o = n(319060),
    l = n(397927),
    c = n(537652),
    u = n(212245),
    d = n(793574),
    f = n(688810),
    p = n(962125),
    _ = n(724511),
    h = n(850992),
    m = n(151271),
    g = n(60587),
    E = n(887695),
    b = n(286509),
    y = n(253932),
    O = n(71393),
    A = n(287809),
    v = n(954571),
    S = n(240248),
    I = n(410558),
    T = n(361670),
    C = n(631576),
    N = n(891090),
    R = n(679382),
    w = n(842086),
    P = n(378058),
    D = n(148355),
    x = n(102001),
    L = n(672182),
    j = n(582721),
    M = n(652215),
    k = n(698279),
    U = n(985018),
    G = n(780465),
    V = n(911385);

function F(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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

function Y(e, t) {
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
let W = (0, S.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    K = (0, S.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    z = (0, S.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    q = (0, S.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    X = (0, S.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    Z = (0, S.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    Q = (0, S.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    $ = (0, S.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    J = (0, S.xI)(o.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    ee = (0, S.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    et = (0, S.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    en = (0, S.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    er = (0, S.xI)(o.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    ei = ee + 2 * en + er,
    ea = et + 2 * en + er,
    es = 20,
    eo = [z, X, Z, Q],
    el = [q, X, Z, Q],
    ec = 12,
    eu = (0, S.xI)(o.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    ed = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
    ef = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, r.jsx)("div", {
            className: G.yB,
            children: ed.map((e) =>
                (0, r.jsx)(
                    l.DUT,
                    {
                        className: G.x_,
                        onClick: () => t(e),
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: e,
                        }),
                    },
                    e,
                ),
            ),
        });
    },
    ep = (e) => {
        let { onSelectSticker: t, channel: n, currentUser: r } = e,
            a = (0, u.p)(),
            s = (0, m.RQ)((e) => e.searchQuery);
        return {
            handleStickerInspect: i.useCallback((e) => {
                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: r } = e;
                h.bM.setActiveCategoryIndex(r),
                    h.bM.setInspectedExpressionPosition(n, t, g.t.MOUSE_EVENT),
                    e.type === w.op.STICKER && h.bM.setSearchPlaceholder(e.sticker.name);
            }, []),
            handleSelect: i.useCallback(
                (e, i) => {
                    if (e.type !== w.op.STICKER) return;
                    let { sticker: o } = e;
                    if (null == o) return;
                    let l = Y(B({}, a.location), {
                        object: "" === s ? M.ZSU.STICKER_PICKER_VIEW_ALL : M.ZSU.STICKER_SEARCH_VIEW_ALL,
                    });
                    if (null != o && !(0, T.G7)(o, r, n)) {
                        let e = (0, P.Xw)(o);
                        (0, T.W$)(o, r, n) === T.Ux.SENDABLE_WITH_PREMIUM && (0, I.U)(!0),
                            e && T.Ux.SENDABLE_WITH_BOOSTED_GUILD;
                        return;
                    }
                    i
                        ? (0, P.o1)(o.id)
                            ? (0, C.vr)(o.id)
                            : ((0, N.Dt)({
                                  sticker: o,
                                  location: Y(B({}, l), {
                                      object: M.ZSU.STICKER,
                                  }),
                              }),
                              (0, C.uK)(o.id))
                        : t(e);
                },
                [a.location, s, r, n, t],
            ),
        };
    },
    e_ = (e) => {
        let {
                collapsedStickersCategories: t,
                gridWidth: n,
                onSelectSticker: a,
                getStickerItemProps: o,
                getStickerRowProps: c,
                gutterWidth: d,
                inspectedStickerPosition: f,
                isScrolling: p,
                isUsingKeyboardNavigation: h,
                stickersGrid: m,
                stickersCategories: g,
                filteredStickers: E,
                ownedStickerPacks: S,
                channel: I,
            } = e,
            T = (0, u.p)(),
            C = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
            { handleStickerInspect: N, handleSelect: L } = ep({
                onSelectSticker: a,
                channel: I,
                currentUser: C,
            }),
            [V, F] = i.useState(!1),
            B = i.useCallback((e) => {
                y.tP.updateSetting(Array.from(e));
            }, []),
            H = i.useCallback(
                (e) => {
                    let t = m[e];
                    return null != t
                        ? (0, r.jsx)(
                              j.A,
                              {
                                  getStickerItemProps: o,
                                  getStickerRowProps: c,
                                  gutterWidth: d,
                                  inspectedStickerPosition: f,
                                  isScrolling: p,
                                  isUsingKeyboardNavigation: h,
                                  onInspect: N,
                                  onSelect: L,
                                  rowIndex: e,
                                  stickerClassName: G.yI,
                                  stickerDescriptors: t,
                                  stickerSize: n > W ? ee : et,
                                  preferAnimation: n <= K,
                                  ownedStickerPacks: S,
                                  isDisplayingIndividualStickers: !0,
                                  channel: I,
                                  currentUser: C,
                              },
                              e,
                          )
                        : null;
                },
                [m, o, c, d, f, p, h, N, L, n, S, I, C],
            ),
            Y = i.useCallback(
                (e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            children: t,
                        },
                        e,
                    ),
                [],
            ),
            z = i.useCallback(
                function (e) {
                    let { isStickerPack: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new Set(t),
                        i = t.has(e);
                    i ? r.delete(e) : r.add(e),
                        v.default.track(M.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: null == T ? void 0 : T.location,
                            tab: k.kx.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null,
                        }),
                        B(r);
                },
                [T, t, B],
            ),
            q = i.useCallback(
                (e) => {
                    let n = g[e];
                    if (null != E) {
                        let { sendable: t, sendableWithPremium: n } = E;
                        if (0 === e && t.length > 0) return null;
                        let i = t.length > 0 && n.length > 0;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                i
                                    ? (0, r.jsx)("div", {
                                          className: G.yF,
                                          children: (0, r.jsx)(l.cGx, {}),
                                      })
                                    : null,
                                (0, r.jsx)(
                                    b.A,
                                    {
                                        className: G.jH,
                                        "aria-label": U.intl.string(U.t.wbfJFh),
                                        children: U.intl.string(U.t["05Z/0l"]),
                                    },
                                    "stickers-you-might-like-header",
                                ),
                            ],
                        });
                    }
                    switch (n.type) {
                        case w.Z2.FAVORITE:
                            return (0, r.jsx)(
                                b.A,
                                {
                                    className: G.jH,
                                    "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
                                        categoryName: n.name,
                                    }),
                                    icon: (0, r.jsx)(l.Gg5, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () =>
                                        z(n.id, {
                                            isStickerPack: !1,
                                        }),
                                    children: n.name,
                                },
                                "header-".concat(n.id),
                            );
                        case w.Z2.RECENT:
                            return (0, r.jsx)(
                                b.A,
                                {
                                    className: G.jH,
                                    "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
                                        categoryName: n.name,
                                    }),
                                    icon: (0, r.jsx)(l.O4, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () =>
                                        z(n.id, {
                                            isStickerPack: !1,
                                        }),
                                    children: n.name,
                                },
                                "header-".concat(n.id),
                            );
                        case w.Z2.GUILD:
                        case w.Z2.EMPTY_GUILD_UPSELL: {
                            let e = O.A.getGuild(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                b.A,
                                {
                                    className: G.jH,
                                    "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
                                        categoryName: e.name,
                                    }),
                                    icon: (0, r.jsx)(_.A, {
                                        guild: e,
                                        height: 16,
                                        width: 16,
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => z(e.id),
                                    children: e.name,
                                },
                                "h".concat(e.id),
                            );
                        }
                        case w.Z2.PACK: {
                            let e = R.A.getStickerPack(n.id);
                            if (null == e) return null;
                            return (0, r.jsx)(
                                b.A,
                                {
                                    className: G.jH,
                                    "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
                                        categoryName: e.name,
                                    }),
                                    icon: (0, r.jsx)(D.A, {
                                        disableAnimation: !0,
                                        size: ec,
                                        sticker: (0, P.Id)(e),
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => z(e.id),
                                    children: e.name,
                                },
                                "h".concat(e.id),
                            );
                        }
                    }
                },
                [t, g, z, E],
            ),
            X = i.useCallback(
                (e) => {
                    if (null != E) {
                        let { sendable: t, sendableWithPremium: n } = E;
                        return 0 === e && t.length > 0 ? 0 : J + (t.length > 0 && n.length > 0 ? $ : 0);
                    }
                    return J;
                },
                [E],
            );
        return {
            renderRow: H,
            renderSection: Y,
            renderSectionHeader: q,
            sectionHeaderHeight: X,
            renderSectionFooter: i.useCallback(
                (e) => {
                    let n = g[e],
                        i = t.has(n.id);
                    return n.type !== w.Z2.EMPTY_GUILD_UPSELL || null != E || i
                        ? null
                        : (0, r.jsx)(
                              x.A,
                              {
                                  className: G.Ij,
                                  guildId: n.id,
                                  channel: I,
                                  shouldTrackUpsellViewed: !V,
                                  setTrackedUpsellViewed: F,
                              },
                              "sticker-picker-empty-guild-inline-upsell-".concat(n.id),
                          );
                },
                [g, t, E, I, V],
            ),
            sectionFooterHeight: i.useCallback(
                (e) => {
                    let n = g[e],
                        r = t.has(n.id);
                    return n.type !== w.Z2.EMPTY_GUILD_UPSELL || r ? 0 : eu;
                },
                [g, t],
            ),
        };
    },
    eh = i.forwardRef(function (e, t) {
        let {
                collapsedStickersCategories: n,
                gridWidth: o,
                filteredStickers: l,
                getStickerItemProps: u,
                getStickerRowProps: _,
                gutterWidth: g,
                isUsingKeyboardNavigation: b,
                onSelectSticker: y,
                rowCount: O,
                rowCountBySection: A,
                stickersCategories: v,
                stickersGrid: S,
                channel: I,
            } = e,
            T = i.useRef(!1),
            C = i.useRef(null),
            [N, w] = h.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], a.x),
            { analyticsLocations: P } = (0, f.Ay)(d.A.STICKER_PICKER),
            D = (0, m.RQ)((e) => e.searchQuery),
            x = (0, s.bG)([R.A], () => R.A.getPremiumPacks()),
            {
                renderRow: j,
                renderSection: M,
                renderSectionFooter: k,
                sectionFooterHeight: F,
                renderSectionHeader: B,
                sectionHeaderHeight: H,
            } = e_({
                collapsedStickersCategories: n,
                gridWidth: o,
                stickersCategories: v,
                stickersGrid: S,
                isScrolling: T,
                isUsingKeyboardNavigation: b,
                onSelectSticker: y,
                getStickerItemProps: u,
                getStickerRowProps: _,
                gutterWidth: g,
                inspectedStickerPosition: w,
                filteredStickers: l,
                ownedStickerPacks: i.useMemo(() => new Set(x.map((e) => e.id)), [x]),
                channel: I,
            }),
            Y = (0, E.Fk)({
                activeCategoryIndex: N,
                isScrolling: T,
                listRef: C,
                onActiveCategoryIndexChange: h.bM.setActiveCategoryIndex,
                scrollOffset: es,
                searchQuery: D,
            });
        return (
            (0, E.FV)({
                searchQuery: D,
                activeCategoryIndex: N,
                listRef: C,
            }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.scrollTo(...n);
                    },
                    getRowDescriptors: () => {
                        var e, t;
                        return null != (e = null == (t = C.current) ? void 0 : t.getRowDescriptors()) ? e : [];
                    },
                    getSectionDescriptors: () => {
                        var e, t;
                        return null != (e = null == (t = C.current) ? void 0 : t.getSectionDescriptors()) ? e : [];
                    },
                    scrollToSectionTop: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.scrollToSectionTop(...n);
                    },
                    scrollRowIntoView: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.scrollRowIntoView(...n);
                    },
                    getScrollerNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.getScrollerNode(...n);
                    },
                    scrollIntoViewNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.scrollIntoViewNode(...n);
                    },
                    getListDimensions: function () {
                        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null != (e = null == (t = C.current) ? void 0 : t.getListDimensions(...r))
                            ? e
                            : {
                                  height: -1,
                                  totalHeight: -1,
                              };
                    },
                }),
                [],
            ),
            (0, r.jsx)(f.f5, {
                value: P,
                children: (0, r.jsxs)("div", {
                    className: G.iE,
                    children: [
                        null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length
                            ? (0, r.jsx)(c.A, {
                                  message: U.intl.string(U.t["zc+LQd"]),
                                  className: G.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: V,
                                  suggestions: (0, r.jsx)(ef, {
                                      onSuggestionClick: (e) => (0, m.Ri)(e, !0),
                                  }),
                              })
                            : (0, r.jsx)(p.A, {
                                  role: "none presentation",
                                  listPadding: null != l ? el : eo,
                                  onScroll: Y,
                                  renderRow: j,
                                  renderSection: null == l ? M : void 0,
                                  renderSectionHeader: B,
                                  renderSectionFooter: k,
                                  rowCount: O,
                                  rowCountBySection: A,
                                  rowHeight: o > W ? ei : ea,
                                  sectionHeaderHeight: H,
                                  sectionFooterHeight: F,
                                  stickyHeaders: !0,
                                  ref: C,
                              }),
                        (0, r.jsx)(L.A, {
                            stickersGrid: S,
                        }),
                    ],
                }),
            })
        );
    });
