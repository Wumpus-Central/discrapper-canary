var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(954955),
    l = r.n(s),
    u = r(232713),
    c = r(442837),
    d = r(477690),
    f = r(481060),
    p = r(2052),
    h = r(100527),
    _ = r(906732),
    m = r(806966),
    g = r(28546),
    E = r(98528),
    v = r(98278),
    y = r(639119),
    b = r(695346),
    I = r(594174),
    T = r(626135),
    S = r(624138),
    A = r(45521),
    C = r(285651),
    N = r(217590),
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
    $ = l()(N.Iw, J),
    ee = l()(N.m1, J),
    et = o.forwardRef(function (e, n) {
        var i;
        let { containerWidth: s, channel: l, onSelectSticker: d, closePopout: S } = e,
            { location: W } = (0, p.O)(),
            { analyticsLocations: K } = (0, _.ZP)(h.Z.STICKER_PICKER),
            z = (null === (i = (0, y.N)()) || void 0 === i ? void 0 : i.subscription_trial) != null,
            J = o.useRef(null),
            et = o.useRef(null),
            en = o.useRef(null),
            er = (0, A.Q)((e) => e.showPremiumUpsell),
            [ei, ea] = (0, g.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], u.X),
            eo = o.useRef('');
        o.useImperativeHandle(n, () => ({ onPickerOpen: ew }));
        let es = (0, R.Sd)(l),
            el = 0 === es.filter((e) => e.type !== D.Ih.EMPTY_GUILD_UPSELL).length,
            eu = (0, E.ep)({
                gridWrapperRef: J,
                containerWidth: s,
                showingEmptyState: el,
                listPaddingLeft: V,
                listScrollbarWidth: X
            }),
            ec = b._O.useSetting(),
            ed = o.useMemo(() => new Set(ec), [ec]),
            ef = (0, c.e7)([I.default], () => I.default.getCurrentUser()),
            ep = o.useMemo(() => (0, U.S)(ei, ef, l), [ei, ef, l]),
            eh = (0, R.RJ)(),
            e_ = (0, R.LZ)(),
            em = (0, c.cj)([O.Z], () => O.Z.getAllGuildStickers()),
            { sendable: eg = [], sendableWithPremium: eE = [] } = null != ep ? ep : {},
            ev = eg.length + eE.length,
            ey = o.useCallback(
                (e) => {
                    '' === ei ? (0, N.On)(e) : (0, N.Yk)(e, ei, ev), d(e.sticker, D.V0.STICKER_PICKER);
                },
                [d, ei, ev]
            ),
            eb = null != eu && eu > F,
            {
                rowCount: eI,
                rowCountBySection: eT,
                stickersGrid: eS,
                gutterWidth: eA,
                columnCounts: eC
            } = (0, R.el)({
                filteredStickers: ep,
                stickersCategories: es,
                collapsedStickersCategories: ed,
                listWidth: eu,
                listPaddingRight: j,
                stickerNodeMargin: eb ? H : Y,
                stickerNodeWidth: eb ? q : Q
            }),
            eN = o.useCallback(
                (e, n) => {
                    let { location: i } = n;
                    switch (e.type) {
                        case D.al.CREATE_STICKER:
                            T.default.track(G.rMx.OPEN_MODAL, {
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
                            null != e.sticker && (0, C.kl)(e.sticker, ef, l) && ey(e);
                    }
                },
                [W, ef, l, ey]
            ),
            {
                getItemProps: eR,
                getRowProps: eO,
                gridContainerProps: eD,
                handleGridContainerKeyDown: eL,
                isUsingKeyboardNavigation: ex
            } = (0, L.t)({
                columnCounts: eC,
                stickersListRef: et,
                stickersGrid: eS,
                onGridItemSelect: eN,
                store: m.ZN,
                setInspectedStickerPosition: m.ZN.setInspectedExpressionPosition,
                gridNavigatorId: B.Vr
            });
        o.useEffect(() => m.ZN.resetStoreState, []);
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
                (0, N.ev)({
                    containerWidth: s,
                    favoriteStickers: eh,
                    frequentlyUsedStickers: e_,
                    guildStickers: n,
                    stickersTotal: i
                });
        };
        o.useEffect(() => {
            '' === eo.current && '' !== ei && (0, N.n8)(), (eo.current = ei);
        }, [ei]),
            o.useEffect(() => {
                0 === ev ? $(ei) : ee(ei, ev, ea);
            }, [ei, ev, ea]),
            o.useLayoutEffect(() => {
                var e;
                null === (e = en.current) || void 0 === e || e.focus();
            }, []);
        let eP = o.useCallback(() => {
            S(), T.default.track(G.rMx.PREMIUM_PROMOTION_OPENED, { location_section: G.jXE.STICKER_PICKER_UPSELL }), (0, v.z)();
        }, [S]);
        return (0, a.jsxs)(_.Gt, {
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
                                                filteredStickers: ep,
                                                getStickerItemProps: eR,
                                                getStickerRowProps: eO,
                                                gridWidth: eu,
                                                gutterWidth: eA,
                                                isUsingKeyboardNavigation: ex,
                                                onSelectSticker: ey,
                                                rowCount: eI,
                                                rowCountBySection: eT,
                                                stickersCategories: es,
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
n.Z = o.forwardRef(en);
