(n.d(t, { Z: () => ea }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(954955),
    o = n.n(a),
    s = n(94171),
    l = n(442837),
    c = n(477690),
    u = n(481060),
    d = n(2052),
    _ = n(100527),
    f = n(906732),
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
    T = n(285651),
    S = n(217590),
    A = n(453070),
    N = n(926491),
    C = n(373228),
    R = n(462109),
    P = n(422195),
    w = n(657795),
    D = n(489762),
    L = n(31543),
    x = n(15350),
    k = n(151189),
    M = n(611480),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            }));
    }
    return e;
}
function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
    X = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    Q = z + 2 * X,
    J = q + 2 * X,
    $ = 8,
    ee = 200,
    et = o()(S.Iw, ee),
    en = o()(S.m1, ee),
    er = i.forwardRef(function (e, t) {
        var a;
        let { containerWidth: o, channel: c, onSelectSticker: v, closePopout: G } = e,
            { location: V } = (0, d.O)(),
            { analyticsLocations: z } = (0, f.ZP)(_.Z.STICKER_PICKER),
            q = (null == (a = (0, E.N)()) ? void 0 : a.subscription_trial) != null,
            X = i.useRef(null),
            ee = i.useRef(null),
            er = i.useRef(null),
            ei = (0, I.Q)((e) => e.showPremiumUpsell),
            [ea, eo] = (0, h.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], s.X),
            es = i.useRef('');
        i.useImperativeHandle(t, () => ({ onPickerOpen: ex }));
        let el = (0, A.Sd)(c),
            ec = 0 === el.filter((e) => e.type !== C.Ih.EMPTY_GUILD_UPSELL).length,
            eu = (0, m.ep)({
                gridWrapperRef: X,
                containerWidth: o,
                showingEmptyState: ec,
                listPaddingLeft: H,
                listScrollbarWidth: $
            }),
            ed = b._O.useSetting(),
            e_ = i.useMemo(() => new Set(ed), [ed]),
            ef = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
            ep = i.useMemo(() => (0, x.S)(ea, ef, c), [ea, ef, c]),
            eh = (0, A.RJ)(),
            em = (0, A.LZ)(),
            eg = (0, l.cj)([N.Z], () => N.Z.getAllGuildStickers()),
            { sendable: eE = [], sendableWithPremium: eb = [] } = null != ep ? ep : {},
            ey = eE.length + eb.length,
            eO = i.useCallback(
                (e) => {
                    ('' === ea ? (0, S.On)(e) : (0, S.Yk)(e, ea, ey), v(e.sticker, C.V0.STICKER_PICKER));
                },
                [v, ea, ey]
            ),
            ev = null != eu && eu > Z,
            {
                rowCount: eI,
                rowCountBySection: eT,
                stickersGrid: eS,
                gutterWidth: eA,
                columnCounts: eN
            } = (0, A.el)({
                filteredStickers: ep,
                stickersCategories: el,
                collapsedStickersCategories: e_,
                listWidth: eu,
                listPaddingRight: Y,
                stickerNodeMargin: ev ? W : K,
                stickerNodeWidth: ev ? Q : J
            }),
            eC = i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case C.al.CREATE_STICKER:
                            (O.default.track(j.rMx.OPEN_MODAL, {
                                type: j.jXE.CREATE_STICKER_MODAL,
                                location: V
                            }),
                                (0, u.ZDy)(async () => {
                                    let { default: t } = await Promise.all([n.e('93626'), n.e('61547')]).then(n.bind(n, 136735));
                                    return (n) => (0, r.jsx)(t, B({ guildId: e.guild_id }, n));
                                }));
                            break;
                        case C.al.STICKER:
                            null != e.sticker && (0, T.kl)(e.sticker, ef, c) && eO(e);
                    }
                },
                [V, ef, c, eO]
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
                stickersGrid: eS,
                onGridItemSelect: eC,
                store: p.ZN,
                setInspectedStickerPosition: p.ZN.setInspectedExpressionPosition,
                gridNavigatorId: M.Vr
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
            (null != eg &&
                [...eg.values()].forEach((e) => {
                    r += e.length;
                }),
                (0, S.ev)({
                    containerWidth: o,
                    favoriteStickers: eh,
                    frequentlyUsedStickers: em,
                    guildStickers: t,
                    stickersTotal: r
                }));
        };
        (i.useEffect(() => {
            ('' === es.current && '' !== ea && (0, S.n8)(), (es.current = ea));
        }, [ea]),
            i.useEffect(() => {
                0 === ey ? et(ea) : en(ea, ey, eo);
            }, [ea, ey, eo]),
            i.useLayoutEffect(() => {
                var e;
                null == (e = er.current) || e.focus();
            }, []));
        let ek = i.useCallback(() => {
            (G(), O.default.track(j.rMx.PREMIUM_PROMOTION_OPENED, { location_section: j.jXE.STICKER_PICKER_UPSELL }), (0, g.z)());
        }, [G]);
        return (0, r.jsxs)(f.Gt, {
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
                                              ref: X,
                                              className: U.listWrapper,
                                              id: M.Vr
                                          },
                                          ew
                                      ),
                                      {
                                          children:
                                              null != eu
                                                  ? (0, r.jsx)(D.Z, {
                                                        ref: ee,
                                                        collapsedStickersCategories: e_,
                                                        filteredStickers: ep,
                                                        getStickerItemProps: eR,
                                                        getStickerRowProps: eP,
                                                        gridWidth: eu,
                                                        gutterWidth: eA,
                                                        isUsingKeyboardNavigation: eL,
                                                        onSelectSticker: eO,
                                                        rowCount: eI,
                                                        rowCountBySection: eT,
                                                        stickersCategories: el,
                                                        stickersGrid: eS,
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
                ei && (0, r.jsx)(k.C, { onLearnMore: ek })
            ]
        });
    }),
    ei = (e, t) => (
        (0, A.fP)(),
        (0, r.jsx)('div', {
            className: U.wrapper,
            id: M.nZ,
            'aria-labelledby': M.ED,
            role: 'tabpanel',
            children: e.isLoading ? (0, r.jsx)(u.$jN, { className: U.loadingIndicator }) : (0, r.jsx)(er, F(B({}, e), { ref: t }))
        })
    ),
    ea = i.forwardRef(ei);
