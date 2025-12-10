n.d(t, { Z: () => ea }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(954955),
    o = n.n(a),
    s = n(55160),
    l = n(442837),
    c = n(477690),
    u = n(481060),
    d = n(2052),
    f = n(100527),
    p = n(906732),
    _ = n(806966),
    m = n(28546),
    h = n(98528),
    g = n(98278),
    E = n(639119),
    b = n(695346),
    y = n(594174),
    O = n(626135),
    v = n(624138),
    S = n(45521),
    I = n(285651),
    T = n(217590),
    C = n(453070),
    A = n(926491),
    N = n(373228),
    P = n(462109),
    R = n(422195),
    D = n(657795),
    w = n(489762),
    x = n(31543),
    L = n(15350),
    j = n(151189),
    M = n(611480),
    k = n(981631),
    U = n(349778);
function G(e, t, n) {
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
function Z(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let V = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    H = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    Y = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    W = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    K = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    z = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    q = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    Q = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    X = z + 2 * Q,
    J = q + 2 * Q,
    $ = 8,
    ee = 200,
    et = o()(T.Iw, ee),
    en = o()(T.m1, ee),
    er = i.forwardRef(function (e, t) {
        var a;
        let { containerWidth: o, channel: c, onSelectSticker: v, closePopout: G } = e,
            { location: B } = (0, d.O)(),
            { analyticsLocations: z } = (0, p.ZP)(f.Z.STICKER_PICKER),
            q = (null == (a = (0, E.N)()) ? void 0 : a.subscription_trial) != null,
            Q = i.useRef(null),
            ee = i.useRef(null),
            er = i.useRef(null),
            ei = (0, S.Q)((e) => e.showPremiumUpsell),
            [ea, eo] = (0, m.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], s.X),
            es = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: eL }));
        let el = (0, C.Sd)(c),
            ec = 0 === el.filter((e) => e.type !== N.Ih.EMPTY_GUILD_UPSELL).length,
            eu = (0, h.ep)({
                gridWrapperRef: Q,
                containerWidth: o,
                showingEmptyState: ec,
                listPaddingLeft: H,
                listScrollbarWidth: $,
            }),
            ed = b._O.useSetting(),
            ef = i.useMemo(() => new Set(ed), [ed]),
            ep = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
            e_ = i.useMemo(() => (0, L.S)(ea, ep, c), [ea, ep, c]),
            em = (0, C.RJ)(),
            eh = (0, C.LZ)(),
            eg = (0, l.cj)([A.Z], () => A.Z.getAllGuildStickers()),
            { sendable: eE = [], sendableWithPremium: eb = [] } = null != e_ ? e_ : {},
            ey = eE.length + eb.length,
            eO = i.useCallback(
                (e) => {
                    "" === ea ? (0, T.On)(e) : (0, T.Yk)(e, ea, ey), v(e.sticker, N.V0.STICKER_PICKER);
                },
                [v, ea, ey],
            ),
            ev = null != eu && eu > V,
            {
                rowCount: eS,
                rowCountBySection: eI,
                stickersGrid: eT,
                gutterWidth: eC,
                columnCounts: eA,
            } = (0, C.el)({
                filteredStickers: e_,
                stickersCategories: el,
                collapsedStickersCategories: ef,
                listWidth: eu,
                listPaddingRight: Y,
                stickerNodeMargin: ev ? W : K,
                stickerNodeWidth: ev ? X : J,
            }),
            eN = i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case N.al.CREATE_STICKER:
                            O.default.track(k.rMx.OPEN_MODAL, {
                                type: k.jXE.CREATE_STICKER_MODAL,
                                location: B,
                            }),
                                (0, u.ZDy)(async () => {
                                    let { default: t } = await Promise.all([n.e("93626"), n.e("97162")]).then(
                                        n.bind(n, 136735),
                                    );
                                    return (n) => (0, r.jsx)(t, Z({ guildId: e.guild_id }, n));
                                });
                            break;
                        case N.al.STICKER:
                            null != e.sticker && (0, I.kl)(e.sticker, ep, c) && eO(e);
                    }
                },
                [B, ep, c, eO],
            ),
            {
                getItemProps: eP,
                getRowProps: eR,
                gridContainerProps: eD,
                handleGridContainerKeyDown: ew,
                isUsingKeyboardNavigation: ex,
            } = (0, P.t)({
                columnCounts: eA,
                stickersListRef: ee,
                stickersGrid: eT,
                onGridItemSelect: eN,
                store: _.ZN,
                setInspectedStickerPosition: _.ZN.setInspectedExpressionPosition,
                gridNavigatorId: M.Vr,
            });
        i.useEffect(() => _.ZN.resetStoreState, []);
        let eL = () => {
            let e = c.getGuildId(),
                t = [];
            if (null !== e) {
                var n;
                t = null != (n = A.Z.getStickersByGuildId(e)) ? n : [];
            }
            let r = 0;
            null != eg &&
                [...eg.values()].forEach((e) => {
                    r += e.length;
                }),
                (0, T.ev)({
                    containerWidth: o,
                    favoriteStickers: em,
                    frequentlyUsedStickers: eh,
                    guildStickers: t,
                    stickersTotal: r,
                });
        };
        i.useEffect(() => {
            "" === es.current && "" !== ea && (0, T.n8)(), (es.current = ea);
        }, [ea]),
            i.useEffect(() => {
                0 === ey ? et(ea) : en(ea, ey, eo);
            }, [ea, ey, eo]),
            i.useLayoutEffect(() => {
                var e;
                null == (e = er.current) || e.focus();
            }, []);
        let ej = i.useCallback(() => {
            G(),
                O.default.track(k.rMx.PREMIUM_PROMOTION_OPENED, { location_section: k.jXE.STICKER_PICKER_UPSELL }),
                (0, g.z)();
        }, [G]);
        return (0, r.jsxs)(p.Gt, {
            value: z,
            children: [
                !(q && ec) &&
                    (0, r.jsx)("div", {
                        className: U.header,
                        children: (0, r.jsx)(x.Z, {
                            ref: er,
                            onKeyDown: ew,
                            stickersListRef: ee,
                            channel: c,
                        }),
                    }),
                ec
                    ? (0, r.jsx)(D.Z, {
                          className: U.emptyState,
                          onClose: G,
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  "div",
                                  F(
                                      Z(
                                          {
                                              ref: Q,
                                              className: U.listWrapper,
                                              id: M.Vr,
                                          },
                                          eD,
                                      ),
                                      {
                                          children:
                                              null != eu
                                                  ? (0, r.jsx)(w.Z, {
                                                        ref: ee,
                                                        collapsedStickersCategories: ef,
                                                        filteredStickers: e_,
                                                        getStickerItemProps: eP,
                                                        getStickerRowProps: eR,
                                                        gridWidth: eu,
                                                        gutterWidth: eC,
                                                        isUsingKeyboardNavigation: ex,
                                                        onSelectSticker: eO,
                                                        rowCount: eS,
                                                        rowCountBySection: eI,
                                                        stickersCategories: el,
                                                        stickersGrid: eT,
                                                        channel: c,
                                                    })
                                                  : null,
                                      },
                                  ),
                              ),
                              (0, r.jsx)(R.Z, {
                                  stickersListRef: ee,
                                  channel: c,
                              }),
                          ],
                      }),
                ei && (0, r.jsx)(j.C, { onLearnMore: ej }),
            ],
        });
    }),
    ei = (e, t) => (
        (0, C.fP)(),
        (0, r.jsx)("div", {
            className: U.wrapper,
            id: M.nZ,
            "aria-labelledby": M.ED,
            role: "tabpanel",
            children: e.isLoading
                ? (0, r.jsx)(u.$jN, { className: U.loadingIndicator })
                : (0, r.jsx)(er, F(Z({}, e), { ref: t })),
        })
    ),
    ea = i.forwardRef(ei);
