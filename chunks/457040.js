n.d(t, { Z: () => eo }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(954955),
    a = n.n(o),
    s = n(232713),
    l = n(442837),
    c = n(477690),
    u = n(481060),
    d = n(2052),
    f = n(100527),
    p = n(906732),
    _ = n(806966),
    h = n(28546),
    m = n(98528),
    g = n(98278),
    E = n(639119),
    v = n(695346),
    b = n(594174),
    y = n(626135),
    O = n(624138),
    S = n(45521),
    I = n(285651),
    T = n(217590),
    N = n(453070),
    A = n(926491),
    C = n(373228),
    R = n(462109),
    P = n(422195),
    w = n(657795),
    D = n(489762),
    x = n(31543),
    L = n(814042),
    M = n(15350),
    k = n(611480),
    j = n(981631),
    U = n(136833);
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
function Z(e, t) {
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
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let V = (0, O.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    H = (0, O.Mg)(c.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    W = (0, O.Mg)(c.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    Y = (0, O.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    K = (0, O.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    z = (0, O.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    q = (0, O.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    Q = (0, O.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    X = z + 2 * Q,
    J = q + 2 * Q,
    $ = 8,
    ee = 200,
    et = a()(T.Iw, ee),
    en = a()(T.m1, ee),
    er = i.forwardRef(function (e, t) {
        var o;
        let { containerWidth: a, channel: c, onSelectSticker: O, closePopout: G } = e,
            { location: Z } = (0, d.O)(),
            { analyticsLocations: z } = (0, p.ZP)(f.Z.STICKER_PICKER),
            q = (null === (o = (0, E.N)()) || void 0 === o ? void 0 : o.subscription_trial) != null,
            Q = i.useRef(null),
            ee = i.useRef(null),
            er = i.useRef(null),
            ei = (0, S.Q)((e) => e.showPremiumUpsell),
            [eo, ea] = (0, h.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], s.X),
            es = i.useRef('');
        i.useImperativeHandle(t, () => ({ onPickerOpen: eL }));
        let el = (0, N.Sd)(c),
            ec = 0 === el.filter((e) => e.type !== C.Ih.EMPTY_GUILD_UPSELL).length,
            eu = (0, m.ep)({
                gridWrapperRef: Q,
                containerWidth: a,
                showingEmptyState: ec,
                listPaddingLeft: H,
                listScrollbarWidth: $
            }),
            ed = v._O.useSetting(),
            ef = i.useMemo(() => new Set(ed), [ed]),
            ep = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
            e_ = i.useMemo(() => (0, M.S)(eo, ep, c), [eo, ep, c]),
            eh = (0, N.RJ)(),
            em = (0, N.LZ)(),
            eg = (0, l.cj)([A.Z], () => A.Z.getAllGuildStickers()),
            { sendable: eE = [], sendableWithPremium: ev = [] } = null != e_ ? e_ : {},
            eb = eE.length + ev.length,
            ey = i.useCallback(
                (e) => {
                    '' === eo ? (0, T.On)(e) : (0, T.Yk)(e, eo, eb), O(e.sticker, C.V0.STICKER_PICKER);
                },
                [O, eo, eb]
            ),
            eO = null != eu && eu > V,
            {
                rowCount: eS,
                rowCountBySection: eI,
                stickersGrid: eT,
                gutterWidth: eN,
                columnCounts: eA
            } = (0, N.el)({
                filteredStickers: e_,
                stickersCategories: el,
                collapsedStickersCategories: ef,
                listWidth: eu,
                listPaddingRight: W,
                stickerNodeMargin: eO ? Y : K,
                stickerNodeWidth: eO ? X : J
            }),
            eC = i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case C.al.CREATE_STICKER:
                            y.default.track(j.rMx.OPEN_MODAL, {
                                type: j.jXE.CREATE_STICKER_MODAL,
                                location: Z
                            }),
                                (0, u.ZDy)(async () => {
                                    let { default: t } = await Promise.all([n.e('93626'), n.e('7491')]).then(n.bind(n, 136735));
                                    return (n) => (0, r.jsx)(t, B({ guildId: e.guild_id }, n));
                                });
                            break;
                        case C.al.STICKER:
                            null != e.sticker && (0, I.kl)(e.sticker, ep, c) && ey(e);
                    }
                },
                [Z, ep, c, ey]
            ),
            {
                getItemProps: eR,
                getRowProps: eP,
                gridContainerProps: ew,
                handleGridContainerKeyDown: eD,
                isUsingKeyboardNavigation: ex
            } = (0, R.t)({
                columnCounts: eA,
                stickersListRef: ee,
                stickersGrid: eT,
                onGridItemSelect: eC,
                store: _.ZN,
                setInspectedStickerPosition: _.ZN.setInspectedExpressionPosition,
                gridNavigatorId: k.Vr
            });
        i.useEffect(() => _.ZN.resetStoreState, []);
        let eL = () => {
            let e = c.getGuildId(),
                t = [];
            if (null !== e) {
                var n;
                t = null !== (n = A.Z.getStickersByGuildId(e)) && void 0 !== n ? n : [];
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
                0 === eb ? et(eo) : en(eo, eb, ea);
            }, [eo, eb, ea]),
            i.useLayoutEffect(() => {
                var e;
                null === (e = er.current) || void 0 === e || e.focus();
            }, []);
        let eM = i.useCallback(() => {
            G(), y.default.track(j.rMx.PREMIUM_PROMOTION_OPENED, { location_section: j.jXE.STICKER_PICKER_UPSELL }), (0, g.z)();
        }, [G]);
        return (0, r.jsxs)(p.Gt, {
            value: z,
            children: [
                !(q && ec) &&
                    (0, r.jsx)('div', {
                        className: U.header,
                        children: (0, r.jsx)(x.Z, {
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
                                                        filteredStickers: e_,
                                                        getStickerItemProps: eR,
                                                        getStickerRowProps: eP,
                                                        gridWidth: eu,
                                                        gutterWidth: eN,
                                                        isUsingKeyboardNavigation: ex,
                                                        onSelectSticker: ey,
                                                        rowCount: eS,
                                                        rowCountBySection: eI,
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
                ei && (0, r.jsx)(L.C, { onLearnMore: eM })
            ]
        });
    }),
    ei = (e, t) => (
        (0, N.fP)(),
        (0, r.jsx)('div', {
            className: U.wrapper,
            id: k.nZ,
            'aria-labelledby': k.ED,
            role: 'tabpanel',
            children: e.isLoading ? (0, r.jsx)(u.$jN, { className: U.loadingIndicator }) : (0, r.jsx)(er, F(B({}, e), { ref: t }))
        })
    ),
    eo = i.forwardRef(ei);
