n.d(t, {
    A: () => ea,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(111956),
    s = n.n(a),
    o = n(942381),
    l = n(311907),
    c = n(319060),
    u = n(397927),
    d = n(212245),
    f = n(793574),
    p = n(688810),
    _ = n(850992),
    h = n(151271),
    m = n(887695),
    g = n(87719),
    E = n(234419),
    b = n(253932),
    y = n(287809),
    O = n(954571),
    A = n(240248),
    v = n(410558),
    S = n(361670),
    I = n(891090),
    T = n(256449),
    C = n(679382),
    N = n(842086),
    R = n(313519),
    w = n(647117),
    P = n(234091),
    D = n(275589),
    x = n(642550),
    L = n(616961),
    j = n(994048),
    M = n(823894),
    k = n(652215),
    U = n(654329);

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

function V(e) {
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

function F(e, t) {
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

function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let H = (0, A.xI)(c.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    Y = (0, A.xI)(c.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    W = (0, A.xI)(c.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    K = (0, A.xI)(c.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    z = (0, A.xI)(c.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    q = (0, A.xI)(c.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    X = (0, A.xI)(c.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    Z = (0, A.xI)(c.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    Q = q + 2 * Z,
    $ = X + 2 * Z,
    J = 8,
    ee = 200,
    et = s()(I.Qz, ee),
    en = s()(I.HA, ee),
    er = i.forwardRef(function (e, t) {
        var a;
        let { containerWidth: s, channel: c, onSelectSticker: A, closePopout: G } = e,
            { location: F } = (0, d.p)(),
            { analyticsLocations: q } = (0, p.Ay)(f.A.STICKER_PICKER),
            X = (null == (a = (0, E.V)()) ? void 0 : a.subscription_trial) != null,
            Z = i.useRef(null),
            ee = i.useRef(null),
            er = i.useRef(null),
            ei = (0, v.P)((e) => e.showPremiumUpsell),
            [ea, es] = (0, h.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], o.x),
            eo = i.useRef("");
        i.useImperativeHandle(t, () => ({
            onPickerOpen: eL,
        }));
        let el = (0, T.pD)(c),
            ec = 0 === el.filter((e) => e.type !== N.Z2.EMPTY_GUILD_UPSELL).length,
            eu = (0, m.oV)({
                gridWrapperRef: Z,
                containerWidth: s,
                showingEmptyState: ec,
                listPaddingLeft: Y,
                listScrollbarWidth: J,
            }),
            ed = b.tP.useSetting(),
            ef = i.useMemo(() => new Set(ed), [ed]),
            ep = (0, l.bG)([y.default], () => y.default.getCurrentUser()),
            e_ = i.useMemo(() => (0, L.y)(ea, ep, c), [ea, ep, c]),
            eh = (0, T.Gc)(),
            em = (0, T.UT)(),
            eg = (0, l.cf)([C.A], () => C.A.getAllGuildStickers()),
            { sendable: eE = [], sendableWithPremium: eb = [] } = null != e_ ? e_ : {},
            ey = eE.length + eb.length,
            eO = i.useCallback(
                (e) => {
                    "" === ea ? (0, I.ry)(e) : (0, I.nQ)(e, ea, ey), A(e.sticker, N.D6.STICKER_PICKER);
                },
                [A, ea, ey],
            ),
            eA = null != eu && eu > H,
            {
                rowCount: ev,
                rowCountBySection: eS,
                stickersGrid: eI,
                gutterWidth: eT,
                columnCounts: eC,
            } = (0, T._c)({
                filteredStickers: e_,
                stickersCategories: el,
                collapsedStickersCategories: ef,
                listWidth: eu,
                listPaddingRight: W,
                stickerNodeMargin: eA ? K : z,
                stickerNodeWidth: eA ? Q : $,
            }),
            eN = i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case N.op.CREATE_STICKER:
                            O.default.track(k.HAw.OPEN_MODAL, {
                                type: k.JJy.CREATE_STICKER_MODAL,
                                location: F,
                            }),
                                (0, u.mMO)(async () => {
                                    let { default: t } = await Promise.all([n.e("29143"), n.e("97010")]).then(
                                        n.bind(n, 445002),
                                    );
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            V(
                                                {
                                                    guildId: e.guild_id,
                                                },
                                                n,
                                            ),
                                        );
                                });
                            break;
                        case N.op.STICKER:
                            null != e.sticker && (0, S.G7)(e.sticker, ep, c) && eO(e);
                    }
                },
                [F, ep, c, eO],
            ),
            {
                getItemProps: eR,
                getRowProps: ew,
                gridContainerProps: eP,
                handleGridContainerKeyDown: eD,
                isUsingKeyboardNavigation: ex,
            } = (0, R.J)({
                columnCounts: eC,
                stickersListRef: ee,
                stickersGrid: eI,
                onGridItemSelect: eN,
                store: _.bM,
                setInspectedStickerPosition: _.bM.setInspectedExpressionPosition,
                gridNavigatorId: M.lq,
            });
        i.useEffect(() => _.bM.resetStoreState, []);
        let eL = () => {
            let e = c.getGuildId(),
                t = [];
            if (null !== e) {
                var n;
                t = null != (n = C.A.getStickersByGuildId(e)) ? n : [];
            }
            let r = 0;
            null != eg &&
                [...eg.values()].forEach((e) => {
                    r += e.length;
                }),
                (0, I.p4)({
                    containerWidth: s,
                    favoriteStickers: eh,
                    frequentlyUsedStickers: em,
                    guildStickers: t,
                    stickersTotal: r,
                });
        };
        i.useEffect(() => {
            "" === eo.current && "" !== ea && (0, I.Fg)(), (eo.current = ea);
        }, [ea]),
            i.useEffect(() => {
                0 === ey ? et(ea) : en(ea, ey, es);
            }, [ea, ey, es]),
            i.useLayoutEffect(() => {
                var e;
                null == (e = er.current) || e.focus();
            }, []);
        let ej = i.useCallback(() => {
            G(),
                O.default.track(k.HAw.PREMIUM_PROMOTION_OPENED, {
                    location_section: k.JJy.STICKER_PICKER_UPSELL,
                }),
                (0, g.Z)();
        }, [G]);
        return (0, r.jsxs)(p.f5, {
            value: q,
            children: [
                !(X && ec) &&
                    (0, r.jsx)("div", {
                        className: U.wx,
                        children: (0, r.jsx)(x.A, {
                            ref: er,
                            onKeyDown: eD,
                            stickersListRef: ee,
                            channel: c,
                        }),
                    }),
                ec
                    ? (0, r.jsx)(P.A, {
                          className: U.p$,
                          onClose: G,
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  "div",
                                  B(
                                      V(
                                          {
                                              ref: Z,
                                              className: U.AD,
                                              id: M.lq,
                                          },
                                          eP,
                                      ),
                                      {
                                          children:
                                              null != eu
                                                  ? (0, r.jsx)(D.A, {
                                                        ref: ee,
                                                        collapsedStickersCategories: ef,
                                                        filteredStickers: e_,
                                                        getStickerItemProps: eR,
                                                        getStickerRowProps: ew,
                                                        gridWidth: eu,
                                                        gutterWidth: eT,
                                                        isUsingKeyboardNavigation: ex,
                                                        onSelectSticker: eO,
                                                        rowCount: ev,
                                                        rowCountBySection: eS,
                                                        stickersCategories: el,
                                                        stickersGrid: eI,
                                                        channel: c,
                                                    })
                                                  : null,
                                      },
                                  ),
                              ),
                              (0, r.jsx)(w.A, {
                                  stickersListRef: ee,
                                  channel: c,
                              }),
                          ],
                      }),
                ei &&
                    (0, r.jsx)(j.j, {
                        onLearnMore: ej,
                    }),
            ],
        });
    }),
    ei = (e, t) => (
        (0, T.XQ)(),
        (0, r.jsx)("div", {
            className: U.iE,
            id: M.GX,
            "aria-labelledby": M.LD,
            role: "tabpanel",
            children: e.isLoading
                ? (0, r.jsx)(u.y$y, {
                      className: U.Mz,
                  })
                : (0, r.jsx)(
                      er,
                      B(V({}, e), {
                          ref: t,
                      }),
                  ),
        })
    ),
    ea = i.forwardRef(ei);
