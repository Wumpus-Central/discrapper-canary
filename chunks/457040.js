n.d(t, { Z: () => et }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(954955),
    s = n.n(a),
    o = n(232713),
    l = n(442837),
    u = n(477690),
    c = n(481060),
    d = n(2052),
    f = n(100527),
    _ = n(906732),
    p = n(806966),
    h = n(28546),
    m = n(98528),
    g = n(98278),
    E = n(639119),
    v = n(695346),
    y = n(594174),
    I = n(626135),
    b = n(624138),
    T = n(45521),
    S = n(285651),
    A = n(217590),
    N = n(453070),
    C = n(926491),
    R = n(373228),
    O = n(462109),
    D = n(422195),
    x = n(657795),
    L = n(489762),
    P = n(31543),
    w = n(814042),
    M = n(15350),
    k = n(611480),
    U = n(981631),
    G = n(974939);
let B = (0, b.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    Z = (0, b.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    F = (0, b.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    V = (0, b.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    j = (0, b.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    H = (0, b.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    Y = (0, b.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    W = (0, b.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    K = H + 2 * W,
    z = Y + 2 * W,
    q = 8,
    Q = 200,
    X = s()(A.Iw, Q),
    J = s()(A.m1, Q),
    $ = r.forwardRef(function (e, t) {
        var a;
        let { containerWidth: s, channel: u, onSelectSticker: b, closePopout: H } = e,
            { location: Y } = (0, d.O)(),
            { analyticsLocations: W } = (0, _.ZP)(f.Z.STICKER_PICKER),
            Q = (null === (a = (0, E.N)()) || void 0 === a ? void 0 : a.subscription_trial) != null,
            $ = r.useRef(null),
            ee = r.useRef(null),
            et = r.useRef(null),
            en = (0, T.Q)((e) => e.showPremiumUpsell),
            [ei, er] = (0, h.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], o.X),
            ea = r.useRef('');
        r.useImperativeHandle(t, () => ({ onPickerOpen: eL }));
        let es = (0, N.Sd)(u),
            eo = 0 === es.filter((e) => e.type !== R.Ih.EMPTY_GUILD_UPSELL).length,
            el = (0, m.ep)({
                gridWrapperRef: $,
                containerWidth: s,
                showingEmptyState: eo,
                listPaddingLeft: Z,
                listScrollbarWidth: q
            }),
            eu = v._O.useSetting(),
            ec = r.useMemo(() => new Set(eu), [eu]),
            ed = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
            ef = r.useMemo(() => (0, M.S)(ei, ed, u), [ei, ed, u]),
            e_ = (0, N.RJ)(),
            ep = (0, N.LZ)(),
            eh = (0, l.cj)([C.Z], () => C.Z.getAllGuildStickers()),
            { sendable: em = [], sendableWithPremium: eg = [] } = null != ef ? ef : {},
            eE = em.length + eg.length,
            ev = r.useCallback(
                (e) => {
                    '' === ei ? (0, A.On)(e) : (0, A.Yk)(e, ei, eE), b(e.sticker, R.V0.STICKER_PICKER);
                },
                [b, ei, eE]
            ),
            ey = null != el && el > B,
            {
                rowCount: eI,
                rowCountBySection: eb,
                stickersGrid: eT,
                gutterWidth: eS,
                columnCounts: eA
            } = (0, N.el)({
                filteredStickers: ef,
                stickersCategories: es,
                collapsedStickersCategories: ec,
                listWidth: el,
                listPaddingRight: F,
                stickerNodeMargin: ey ? V : j,
                stickerNodeWidth: ey ? K : z
            }),
            eN = r.useCallback(
                (e, t) => {
                    let { location: r } = t;
                    switch (e.type) {
                        case R.al.CREATE_STICKER:
                            I.default.track(U.rMx.OPEN_MODAL, {
                                type: U.jXE.CREATE_STICKER_MODAL,
                                location: Y
                            }),
                                (0, c.ZDy)(async () => {
                                    let { default: t } = await Promise.all([n.e('93626'), n.e('28189')]).then(n.bind(n, 136735));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            guildId: e.guild_id,
                                            ...n
                                        });
                                });
                            break;
                        case R.al.STICKER:
                            null != e.sticker && (0, S.kl)(e.sticker, ed, u) && ev(e);
                    }
                },
                [Y, ed, u, ev]
            ),
            {
                getItemProps: eC,
                getRowProps: eR,
                gridContainerProps: eO,
                handleGridContainerKeyDown: eD,
                isUsingKeyboardNavigation: ex
            } = (0, O.t)({
                columnCounts: eA,
                stickersListRef: ee,
                stickersGrid: eT,
                onGridItemSelect: eN,
                store: p.ZN,
                setInspectedStickerPosition: p.ZN.setInspectedExpressionPosition,
                gridNavigatorId: k.Vr
            });
        r.useEffect(() => p.ZN.resetStoreState, []);
        let eL = () => {
            let e = u.getGuildId(),
                t = [];
            if (null !== e) {
                var n;
                t = null !== (n = C.Z.getStickersByGuildId(e)) && void 0 !== n ? n : [];
            }
            let i = 0;
            null != eh &&
                [...eh.values()].forEach((e) => {
                    i += e.length;
                }),
                (0, A.ev)({
                    containerWidth: s,
                    favoriteStickers: e_,
                    frequentlyUsedStickers: ep,
                    guildStickers: t,
                    stickersTotal: i
                });
        };
        r.useEffect(() => {
            '' === ea.current && '' !== ei && (0, A.n8)(), (ea.current = ei);
        }, [ei]),
            r.useEffect(() => {
                0 === eE ? X(ei) : J(ei, eE, er);
            }, [ei, eE, er]),
            r.useLayoutEffect(() => {
                var e;
                null === (e = et.current) || void 0 === e || e.focus();
            }, []);
        let eP = r.useCallback(() => {
            H(), I.default.track(U.rMx.PREMIUM_PROMOTION_OPENED, { location_section: U.jXE.STICKER_PICKER_UPSELL }), (0, g.z)();
        }, [H]);
        return (0, i.jsxs)(_.Gt, {
            value: W,
            children: [
                !(Q && eo) &&
                    (0, i.jsx)('div', {
                        className: G.header,
                        children: (0, i.jsx)(P.Z, {
                            ref: et,
                            onKeyDown: eD,
                            stickersListRef: ee,
                            channel: u
                        })
                    }),
                eo
                    ? (0, i.jsx)(x.Z, {
                          className: G.emptyState,
                          onClose: H
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  ref: $,
                                  className: G.listWrapper,
                                  id: k.Vr,
                                  ...eO,
                                  children:
                                      null != el
                                          ? (0, i.jsx)(L.Z, {
                                                ref: ee,
                                                collapsedStickersCategories: ec,
                                                filteredStickers: ef,
                                                getStickerItemProps: eC,
                                                getStickerRowProps: eR,
                                                gridWidth: el,
                                                gutterWidth: eS,
                                                isUsingKeyboardNavigation: ex,
                                                onSelectSticker: ev,
                                                rowCount: eI,
                                                rowCountBySection: eb,
                                                stickersCategories: es,
                                                stickersGrid: eT,
                                                channel: u
                                            })
                                          : null
                              }),
                              (0, i.jsx)(D.Z, {
                                  stickersListRef: ee,
                                  channel: u
                              })
                          ]
                      }),
                en && (0, i.jsx)(w.C, { onLearnMore: eP })
            ]
        });
    }),
    ee = (e, t) => (
        (0, N.fP)(),
        (0, i.jsx)('div', {
            className: G.wrapper,
            id: k.nZ,
            'aria-labelledby': k.ED,
            role: 'tabpanel',
            children: e.isLoading
                ? (0, i.jsx)(c.$jN, { className: G.loadingIndicator })
                : (0, i.jsx)($, {
                      ...e,
                      ref: t
                  })
        })
    ),
    et = r.forwardRef(ee);
