n.d(t, { Z: () => eo }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(954955),
    a = n.n(o),
    s = n(760907),
    l = n(442837),
    c = n(477690),
    u = n(481060),
    d = n(2052),
    f = n(100527),
    _ = n(906732),
    p = n(806966),
    h = n(28546),
    m = n(98528),
    g = n(98278),
    E = n(639119),
    b = n(695346),
    y = n(594174),
    O = n(626135),
    v = n(624138),
    I = n(45521),
    S = n(285651),
    T = n(217590),
    A = n(453070),
    N = n(926491),
    C = n(373228),
    R = n(462109),
    P = n(422195),
    w = n(657795),
    D = n(489762),
    L = n(31543),
    x = n(814042),
    M = n(15350),
    k = n(611480),
    j = n(981631),
    U = n(655304);
function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
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
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Z = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
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
    et = a()(T.Iw, ee),
    en = a()(T.m1, ee),
    er = i.forwardRef(function (e, t) {
        var o;
        let { containerWidth: a, channel: c, onSelectSticker: v, closePopout: G } = e,
            { location: V } = (0, d.O)(),
            { analyticsLocations: z } = (0, _.ZP)(f.Z.STICKER_PICKER),
            q = (null == (o = (0, E.N)()) ? void 0 : o.subscription_trial) != null,
            Q = i.useRef(null),
            ee = i.useRef(null),
            er = i.useRef(null),
            ei = (0, I.Q)((e) => e.showPremiumUpsell),
            [eo, ea] = (0, h.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], s.X),
            es = i.useRef('');
        i.useImperativeHandle(t, () => ({ onPickerOpen: ex }));
        let el = (0, A.Sd)(c),
            ec = 0 === el.filter((e) => e.type !== C.Ih.EMPTY_GUILD_UPSELL).length,
            eu = (0, m.ep)({
                gridWrapperRef: Q,
                containerWidth: a,
                showingEmptyState: ec,
                listPaddingLeft: H,
                listScrollbarWidth: $
            }),
            ed = b._O.useSetting(),
            ef = i.useMemo(() => new Set(ed), [ed]),
            e_ = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
            ep = i.useMemo(() => (0, M.S)(eo, e_, c), [eo, e_, c]),
            eh = (0, A.RJ)(),
            em = (0, A.LZ)(),
            eg = (0, l.cj)([N.Z], () => N.Z.getAllGuildStickers()),
            { sendable: eE = [], sendableWithPremium: eb = [] } = null != ep ? ep : {},
            ey = eE.length + eb.length,
            eO = i.useCallback(
                (e) => {
                    '' === eo ? (0, T.On)(e) : (0, T.Yk)(e, eo, ey), v(e.sticker, C.V0.STICKER_PICKER);
                },
                [v, eo, ey]
            ),
            ev = null != eu && eu > Z,
            {
                rowCount: eI,
                rowCountBySection: eS,
                stickersGrid: eT,
                gutterWidth: eA,
                columnCounts: eN
            } = (0, A.el)({
                filteredStickers: ep,
                stickersCategories: el,
                collapsedStickersCategories: ef,
                listWidth: eu,
                listPaddingRight: Y,
                stickerNodeMargin: ev ? W : K,
                stickerNodeWidth: ev ? X : J
            }),
            eC = i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case C.al.CREATE_STICKER:
                            O.default.track(j.rMx.OPEN_MODAL, {
                                type: j.jXE.CREATE_STICKER_MODAL,
                                location: V
                            }),
                                (0, u.ZDy)(async () => {
                                    let { default: t } = await Promise.all([n.e('93626'), n.e('61547')]).then(n.bind(n, 136735));
                                    return (n) => (0, r.jsx)(t, B({ guildId: e.guild_id }, n));
                                });
                            break;
                        case C.al.STICKER:
                            null != e.sticker && (0, S.kl)(e.sticker, e_, c) && eO(e);
                    }
                },
                [V, e_, c, eO]
            ),
            {
                getItemProps: eR,
                getRowProps: eP,
                gridContainerProps: ew,
                handleGridContainerKeyDown: eD,
                isUsingKeyboardNavigation: eL
            } = (0, R.t)({
                columnCounts: eN,
                stickersListRef: ee,
                stickersGrid: eT,
                onGridItemSelect: eC,
                store: p.ZN,
                setInspectedStickerPosition: p.ZN.setInspectedExpressionPosition,
                gridNavigatorId: k.Vr
            });
        i.useEffect(() => p.ZN.resetStoreState, []);
        let ex = () => {
            let e = c.getGuildId(),
                t = [];
            if (null !== e) {
                var n;
                t = null != (n = N.Z.getStickersByGuildId(e)) ? n : [];
            }
            let r = 0;
            null != eg &&
                [...eg.values()].forEach((e) => {
                    r += e.length;
                }),
                (0, T.ev)({
                    containerWidth: a,
                    favoriteStickers: eh,
                    frequentlyUsedStickers: em,
                    guildStickers: t,
                    stickersTotal: r
                });
        };
        i.useEffect(() => {
            '' === es.current && '' !== eo && (0, T.n8)(), (es.current = eo);
        }, [eo]),
            i.useEffect(() => {
                0 === ey ? et(eo) : en(eo, ey, ea);
            }, [eo, ey, ea]),
            i.useLayoutEffect(() => {
                var e;
                null == (e = er.current) || e.focus();
            }, []);
        let eM = i.useCallback(() => {
            G(), O.default.track(j.rMx.PREMIUM_PROMOTION_OPENED, { location_section: j.jXE.STICKER_PICKER_UPSELL }), (0, g.z)();
        }, [G]);
        return (0, r.jsxs)(_.Gt, {
            value: z,
            children: [
                !(q && ec) &&
                    (0, r.jsx)('div', {
                        className: U.header,
                        children: (0, r.jsx)(L.Z, {
                            ref: er,
                            onKeyDown: eD,
                            stickersListRef: ee,
                            channel: c
                        })
                    }),
                ec
                    ? (0, r.jsx)(w.Z, {
                          className: U.emptyState,
                          onClose: G
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  'div',
                                  F(
                                      B(
                                          {
                                              ref: Q,
                                              className: U.listWrapper,
                                              id: k.Vr
                                          },
                                          ew
                                      ),
                                      {
                                          children:
                                              null != eu
                                                  ? (0, r.jsx)(D.Z, {
                                                        ref: ee,
                                                        collapsedStickersCategories: ef,
                                                        filteredStickers: ep,
                                                        getStickerItemProps: eR,
                                                        getStickerRowProps: eP,
                                                        gridWidth: eu,
                                                        gutterWidth: eA,
                                                        isUsingKeyboardNavigation: eL,
                                                        onSelectSticker: eO,
                                                        rowCount: eI,
                                                        rowCountBySection: eS,
                                                        stickersCategories: el,
                                                        stickersGrid: eT,
                                                        channel: c
                                                    })
                                                  : null
                                      }
                                  )
                              ),
                              (0, r.jsx)(P.Z, {
                                  stickersListRef: ee,
                                  channel: c
                              })
                          ]
                      }),
                ei && (0, r.jsx)(x.C, { onLearnMore: eM })
            ]
        });
    }),
    ei = (e, t) => (
        (0, A.fP)(),
        (0, r.jsx)('div', {
            className: U.wrapper,
            id: k.nZ,
            'aria-labelledby': k.ED,
            role: 'tabpanel',
            children: e.isLoading ? (0, r.jsx)(u.$jN, { className: U.loadingIndicator }) : (0, r.jsx)(er, F(B({}, e), { ref: t }))
        })
    ),
    eo = i.forwardRef(ei);
