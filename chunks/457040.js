var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(954955),
    l = r.n(o),
    u = r(232713),
    c = r(442837),
    d = r(477690),
    f = r(481060),
    _ = r(2052),
    h = r(100527),
    p = r(906732),
    m = r(806966),
    g = r(28546),
    E = r(98528),
    v = r(98278),
    I = r(639119),
    T = r(695346),
    b = r(594174),
    y = r(626135),
    S = r(624138),
    A = r(45521),
    N = r(285651),
    C = r(217590),
    R = r(453070),
    O = r(926491),
    D = r(373228),
    L = r(462109),
    x = r(422195),
    w = r(657795),
    P = r(489762),
    M = r(31543),
    k = r(814042),
    U = r(15350),
    B = r(611480),
    G = r(981631),
    Z = r(974939);
let F = (0, S.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    V = (0, S.Mg)(d.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    j = (0, S.Mg)(d.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    H = (0, S.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    Y = (0, S.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    W = (0, S.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    K = (0, S.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    z = (0, S.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    q = W + 2 * z,
    Q = K + 2 * z,
    X = 8,
    J = 200,
    $ = l()(C.Iw, J),
    ee = l()(C.m1, J),
    et = s.forwardRef(function (e, n) {
        var i;
        let { containerWidth: o, channel: l, onSelectSticker: d, closePopout: S } = e,
            { location: W } = (0, _.O)(),
            { analyticsLocations: K } = (0, p.ZP)(h.Z.STICKER_PICKER),
            z = (null === (i = (0, I.N)()) || void 0 === i ? void 0 : i.subscription_trial) != null,
            J = s.useRef(null),
            et = s.useRef(null),
            en = s.useRef(null),
            er = (0, A.Q)((e) => e.showPremiumUpsell),
            [ei, ea] = (0, g.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], u.X),
            es = s.useRef('');
        s.useImperativeHandle(n, () => ({ onPickerOpen: ew }));
        let eo = (0, R.Sd)(l),
            el = 0 === eo.filter((e) => e.type !== D.Ih.EMPTY_GUILD_UPSELL).length,
            eu = (0, E.ep)({
                gridWrapperRef: J,
                containerWidth: o,
                showingEmptyState: el,
                listPaddingLeft: V,
                listScrollbarWidth: X
            }),
            ec = T._O.useSetting(),
            ed = s.useMemo(() => new Set(ec), [ec]),
            ef = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
            e_ = s.useMemo(() => (0, U.S)(ei, ef, l), [ei, ef, l]),
            eh = (0, R.RJ)(),
            ep = (0, R.LZ)(),
            em = (0, c.cj)([O.Z], () => O.Z.getAllGuildStickers()),
            { sendable: eg = [], sendableWithPremium: eE = [] } = null != e_ ? e_ : {},
            ev = eg.length + eE.length,
            eI = s.useCallback(
                (e) => {
                    '' === ei ? (0, C.On)(e) : (0, C.Yk)(e, ei, ev), d(e.sticker, D.V0.STICKER_PICKER);
                },
                [d, ei, ev]
            ),
            eT = null != eu && eu > F,
            {
                rowCount: eb,
                rowCountBySection: ey,
                stickersGrid: eS,
                gutterWidth: eA,
                columnCounts: eN
            } = (0, R.el)({
                filteredStickers: e_,
                stickersCategories: eo,
                collapsedStickersCategories: ed,
                listWidth: eu,
                listPaddingRight: j,
                stickerNodeMargin: eT ? H : Y,
                stickerNodeWidth: eT ? q : Q
            }),
            eC = s.useCallback(
                (e, n) => {
                    let { location: i } = n;
                    switch (e.type) {
                        case D.al.CREATE_STICKER:
                            y.default.track(G.rMx.OPEN_MODAL, {
                                type: G.jXE.CREATE_STICKER_MODAL,
                                location: W
                            }),
                                (0, f.openModalLazy)(async () => {
                                    let { default: n } = await Promise.all([r.e('93626'), r.e('28189')]).then(r.bind(r, 136735));
                                    return (r) =>
                                        (0, a.jsx)(n, {
                                            guildId: e.guild_id,
                                            ...r
                                        });
                                });
                            break;
                        case D.al.STICKER:
                            null != e.sticker && (0, N.kl)(e.sticker, ef, l) && eI(e);
                    }
                },
                [W, ef, l, eI]
            ),
            {
                getItemProps: eR,
                getRowProps: eO,
                gridContainerProps: eD,
                handleGridContainerKeyDown: eL,
                isUsingKeyboardNavigation: ex
            } = (0, L.t)({
                columnCounts: eN,
                stickersListRef: et,
                stickersGrid: eS,
                onGridItemSelect: eC,
                store: m.ZN,
                setInspectedStickerPosition: m.ZN.setInspectedExpressionPosition,
                gridNavigatorId: B.Vr
            });
        s.useEffect(() => m.ZN.resetStoreState, []);
        let ew = () => {
            let e = l.getGuildId(),
                n = [];
            if (null !== e) {
                var r;
                n = null !== (r = O.Z.getStickersByGuildId(e)) && void 0 !== r ? r : [];
            }
            let i = 0;
            null != em &&
                [...em.values()].forEach((e) => {
                    i += e.length;
                }),
                (0, C.ev)({
                    containerWidth: o,
                    favoriteStickers: eh,
                    frequentlyUsedStickers: ep,
                    guildStickers: n,
                    stickersTotal: i
                });
        };
        s.useEffect(() => {
            '' === es.current && '' !== ei && (0, C.n8)(), (es.current = ei);
        }, [ei]),
            s.useEffect(() => {
                0 === ev ? $(ei) : ee(ei, ev, ea);
            }, [ei, ev, ea]),
            s.useLayoutEffect(() => {
                var e;
                null === (e = en.current) || void 0 === e || e.focus();
            }, []);
        let eP = s.useCallback(() => {
            S(), y.default.track(G.rMx.PREMIUM_PROMOTION_OPENED, { location_section: G.jXE.STICKER_PICKER_UPSELL }), (0, v.z)();
        }, [S]);
        return (0, a.jsxs)(p.Gt, {
            value: K,
            children: [
                !(z && el) &&
                    (0, a.jsx)('div', {
                        className: Z.header,
                        children: (0, a.jsx)(M.Z, {
                            ref: en,
                            onKeyDown: eL,
                            stickersListRef: et,
                            channel: l
                        })
                    }),
                el
                    ? (0, a.jsx)(w.Z, {
                          className: Z.emptyState,
                          onClose: S
                      })
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)('div', {
                                  ref: J,
                                  className: Z.listWrapper,
                                  id: B.Vr,
                                  ...eD,
                                  children:
                                      null != eu
                                          ? (0, a.jsx)(P.Z, {
                                                ref: et,
                                                collapsedStickersCategories: ed,
                                                filteredStickers: e_,
                                                getStickerItemProps: eR,
                                                getStickerRowProps: eO,
                                                gridWidth: eu,
                                                gutterWidth: eA,
                                                isUsingKeyboardNavigation: ex,
                                                onSelectSticker: eI,
                                                rowCount: eb,
                                                rowCountBySection: ey,
                                                stickersCategories: eo,
                                                stickersGrid: eS,
                                                channel: l
                                            })
                                          : null
                              }),
                              (0, a.jsx)(x.Z, {
                                  stickersListRef: et,
                                  channel: l
                              })
                          ]
                      }),
                er && (0, a.jsx)(k.C, { onLearnMore: eP })
            ]
        });
    }),
    en = (e, n) => (
        (0, R.fP)(),
        (0, a.jsx)('div', {
            className: Z.wrapper,
            id: B.nZ,
            'aria-labelledby': B.ED,
            role: 'tabpanel',
            children: e.isLoading
                ? (0, a.jsx)(f.Spinner, { className: Z.loadingIndicator })
                : (0, a.jsx)(et, {
                      ...e,
                      ref: n
                  })
        })
    );
n.Z = s.forwardRef(en);
