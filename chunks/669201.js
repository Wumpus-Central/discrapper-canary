"use strict";
n.d(t, { A: () => en });
var r = n(627968),
    i = n(64700),
    a = n(111956),
    s = n.n(a),
    o = n(942381),
    l = n(311907),
    u = n(319060),
    c = n(397927),
    d = n(212245),
    _ = n(793574),
    f = n(688810),
    h = n(850992),
    p = n(151271),
    g = n(887695),
    E = n(87719),
    A = n(234419),
    I = n(253932),
    T = n(287809),
    y = n(954571),
    S = n(240248),
    v = n(410558),
    C = n(361670),
    b = n(891090),
    N = n(256449),
    R = n(679382),
    O = n(842086),
    D = n(313519),
    L = n(647117),
    w = n(234091),
    x = n(275589),
    P = n(642550),
    M = n(616961),
    k = n(994048),
    U = n(823894),
    G = n(652215),
    F = n(654329);
let V = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    B = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    j = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    H = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    Y = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    W = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    K = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    $ = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    z = W + 2 * $,
    q = K + 2 * $,
    X = 8,
    Z = 200,
    Q = s()(b.Qz, Z),
    J = s()(b.HA, Z),
    ee = i.forwardRef(function (e, t) {
        let { containerWidth: a, channel: s, onSelectSticker: u, closePopout: S } = e,
            { location: W } = (0, d.p)(),
            { analyticsLocations: K } = (0, f.Ay)(_.A.STICKER_PICKER),
            $ = (0, A.V)()?.subscription_trial != null,
            Z = i.useRef(null),
            ee = i.useRef(null),
            et = i.useRef(null),
            en = (0, v.P)((e) => e.showPremiumUpsell),
            [er, ei] = (0, p.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], o.x),
            ea = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: ew }));
        let es = (0, N.pD)(s),
            eo = 0 === es.filter((e) => e.type !== O.Z2.EMPTY_GUILD_UPSELL).length,
            el = (0, g.oV)({
                gridWrapperRef: Z,
                containerWidth: a,
                showingEmptyState: eo,
                listPaddingLeft: B,
                listScrollbarWidth: X,
            }),
            eu = I.tP.useSetting(),
            ec = i.useMemo(() => new Set(eu), [eu]),
            ed = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
            e_ = i.useMemo(() => (0, M.y)(er, ed, s), [er, ed, s]),
            ef = (0, N.Gc)(),
            eh = (0, N.UT)(),
            ep = (0, l.cf)([R.A], () => R.A.getAllGuildStickers()),
            { sendable: em = [], sendableWithPremium: eg = [] } = e_ ?? {},
            eE = em.length + eg.length,
            eA = i.useCallback(
                (e) => {
                    "" === er ? (0, b.ry)(e) : (0, b.nQ)(e, er, eE), u(e.sticker, O.D6.STICKER_PICKER);
                },
                [u, er, eE],
            ),
            eI = null != el && el > V,
            {
                rowCount: eT,
                rowCountBySection: ey,
                stickersGrid: eS,
                gutterWidth: ev,
                columnCounts: eC,
            } = (0, N._c)({
                filteredStickers: e_,
                stickersCategories: es,
                collapsedStickersCategories: ec,
                listWidth: el,
                listPaddingRight: j,
                stickerNodeMargin: eI ? H : Y,
                stickerNodeWidth: eI ? z : q,
            }),
            eb = i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case O.op.CREATE_STICKER:
                            y.default.track(G.HAw.OPEN_MODAL, { type: G.JJy.CREATE_STICKER_MODAL, location: W }),
                                (0, c.mMO)(async () => {
                                    let { default: t } = await Promise.all([n.e("29143"), n.e("64800")]).then(
                                        n.bind(n, 445002),
                                    );
                                    return (n) => (0, r.jsx)(t, { guildId: e.guild_id, ...n });
                                });
                            break;
                        case O.op.STICKER:
                            null != e.sticker && (0, C.G7)(e.sticker, ed, s) && eA(e);
                    }
                },
                [W, ed, s, eA],
            ),
            {
                getItemProps: eN,
                getRowProps: eR,
                gridContainerProps: eO,
                handleGridContainerKeyDown: eD,
                isUsingKeyboardNavigation: eL,
            } = (0, D.J)({
                columnCounts: eC,
                stickersListRef: ee,
                stickersGrid: eS,
                onGridItemSelect: eb,
                store: h.bM,
                setInspectedStickerPosition: h.bM.setInspectedExpressionPosition,
                gridNavigatorId: U.lq,
            });
        i.useEffect(() => h.bM.resetStoreState, []);
        let ew = () => {
            let e = s.getGuildId(),
                t = [];
            null !== e && (t = R.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            null != ep &&
                [...ep.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, b.p4)({
                    containerWidth: a,
                    favoriteStickers: ef,
                    frequentlyUsedStickers: eh,
                    guildStickers: t,
                    stickersTotal: n,
                });
        };
        i.useEffect(() => {
            "" === ea.current && "" !== er && (0, b.Fg)(), (ea.current = er);
        }, [er]),
            i.useEffect(() => {
                0 === eE ? Q(er) : J(er, eE, ei);
            }, [er, eE, ei]),
            i.useLayoutEffect(() => {
                et.current?.focus();
            }, []);
        let ex = i.useCallback(() => {
            S(),
                y.default.track(G.HAw.PREMIUM_PROMOTION_OPENED, { location_section: G.JJy.STICKER_PICKER_UPSELL }),
                (0, E.e)();
        }, [S]);
        return (0, r.jsxs)(f.f5, {
            value: K,
            children: [
                !($ && eo) &&
                    (0, r.jsx)("div", {
                        className: F.wx,
                        children: (0, r.jsx)(P.A, { ref: et, onKeyDown: eD, stickersListRef: ee, channel: s }),
                    }),
                eo
                    ? (0, r.jsx)(w.A, { className: F.p$, onClose: S })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  ref: Z,
                                  className: F.AD,
                                  id: U.lq,
                                  ...eO,
                                  children:
                                      null != el
                                          ? (0, r.jsx)(x.A, {
                                                ref: ee,
                                                collapsedStickersCategories: ec,
                                                filteredStickers: e_,
                                                getStickerItemProps: eN,
                                                getStickerRowProps: eR,
                                                gridWidth: el,
                                                gutterWidth: ev,
                                                isUsingKeyboardNavigation: eL,
                                                onSelectSticker: eA,
                                                rowCount: eT,
                                                rowCountBySection: ey,
                                                stickersCategories: es,
                                                stickersGrid: eS,
                                                channel: s,
                                            })
                                          : null,
                              }),
                              (0, r.jsx)(L.A, { stickersListRef: ee, channel: s }),
                          ],
                      }),
                en && (0, r.jsx)(k.j, { onLearnMore: ex }),
            ],
        });
    }),
    et = (e, t) => (
        (0, N.XQ)(),
        (0, r.jsx)("div", {
            className: F.iE,
            id: U.GX,
            "aria-labelledby": U.LD,
            role: "tabpanel",
            children: e.isLoading ? (0, r.jsx)(c.y$y, { className: F.Mz }) : (0, r.jsx)(ee, { ...e, ref: t }),
        })
    ),
    en = i.forwardRef(et);
