"use strict";
n.d(t, { A: () => J });
var r = n(627968),
    i = n(64700),
    s = n(111956),
    a = n.n(s),
    o = n(942381),
    l = n(311907),
    u = n(319060),
    c = n(397927),
    d = n(212245),
    _ = n(793574),
    f = n(688810),
    p = n(850992),
    h = n(151271),
    m = n(887695),
    E = n(87719),
    g = n(234419),
    A = n(253932),
    I = n(287809),
    T = n(954571),
    S = n(240248),
    y = n(410558),
    v = n(361670),
    N = n(891090),
    C = n(256449),
    b = n(679382),
    R = n(842086),
    O = n(313519),
    D = n(647117),
    L = n(234091),
    w = n(275589),
    x = n(526411),
    M = n(642550),
    P = n(616961),
    k = n(994048),
    U = n(823894),
    G = n(652215),
    F = n(654329);
let V = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    B = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    H = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    j = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    Y = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    W = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    K = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    z = 8,
    $ = 200,
    q = a()(N.Qz, $),
    X = a()(N.HA, $),
    Z = i.forwardRef(function (e, t) {
        let { containerWidth: s, channel: a, onSelectSticker: u, closePopout: S } = e,
            $ = x.A.useConfig({ location: "StickerPicker" }).padding,
            Z = W + 2 * $,
            Q = K + 2 * $,
            { location: J } = (0, d.p)(),
            { analyticsLocations: ee } = (0, f.Ay)(_.A.STICKER_PICKER),
            et = (0, g.V)()?.subscription_trial != null,
            en = i.useRef(null),
            er = i.useRef(null),
            ei = i.useRef(null),
            es = (0, y.P)((e) => e.showPremiumUpsell),
            [ea, eo] = (0, h.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], o.x),
            el = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: eP }));
        let eu = (0, C.pD)(a),
            ec = 0 === eu.filter((e) => e.type !== R.Z2.EMPTY_GUILD_UPSELL).length,
            ed = (0, m.oV)({
                gridWrapperRef: en,
                containerWidth: s,
                showingEmptyState: ec,
                listPaddingLeft: B,
                listScrollbarWidth: z,
            }),
            e_ = A.tP.useSetting(),
            ef = i.useMemo(() => new Set(e_), [e_]),
            ep = (0, l.bG)([I.default], () => I.default.getCurrentUser()),
            eh = i.useMemo(() => (0, P.y)(ea, ep, a), [ea, ep, a]),
            em = (0, C.Gc)(),
            eE = (0, C.UT)(),
            eg = (0, l.cf)([b.A], () => b.A.getAllGuildStickers()),
            { sendable: eA = [], sendableWithPremium: eI = [] } = eh ?? {},
            eT = eA.length + eI.length,
            eS = i.useCallback(
                (e) => {
                    "" === ea ? (0, N.ry)(e) : (0, N.nQ)(e, ea, eT), u(e.sticker, R.D6.STICKER_PICKER);
                },
                [u, ea, eT],
            ),
            ey = null != ed && ed > V,
            {
                rowCount: ev,
                rowCountBySection: eN,
                stickersGrid: eC,
                gutterWidth: eb,
                columnCounts: eR,
            } = (0, C._c)({
                filteredStickers: eh,
                stickersCategories: eu,
                collapsedStickersCategories: ef,
                listWidth: ed,
                listPaddingRight: H,
                stickerNodeMargin: ey ? j : Y,
                stickerNodeWidth: ey ? Z : Q,
            }),
            eO = i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case R.op.CREATE_STICKER:
                            T.default.track(G.HAw.OPEN_MODAL, { type: G.JJy.CREATE_STICKER_MODAL, location: J }),
                                (0, c.mMO)(async () => {
                                    let { default: t } = await Promise.all([n.e("29143"), n.e("64800")]).then(
                                        n.bind(n, 445002),
                                    );
                                    return (n) => (0, r.jsx)(t, { guildId: e.guild_id, ...n });
                                });
                            break;
                        case R.op.STICKER:
                            null != e.sticker && (0, v.G7)(e.sticker, ep, a) && eS(e);
                    }
                },
                [J, ep, a, eS],
            ),
            {
                getItemProps: eD,
                getRowProps: eL,
                gridContainerProps: ew,
                handleGridContainerKeyDown: ex,
                isUsingKeyboardNavigation: eM,
            } = (0, O.J)({
                columnCounts: eR,
                stickersListRef: er,
                stickersGrid: eC,
                onGridItemSelect: eO,
                store: p.bM,
                setInspectedStickerPosition: p.bM.setInspectedExpressionPosition,
                gridNavigatorId: U.lq,
            });
        i.useEffect(() => p.bM.resetStoreState, []);
        let eP = () => {
            let e = a.getGuildId(),
                t = [];
            null !== e && (t = b.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            null != eg &&
                [...eg.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, N.p4)({
                    containerWidth: s,
                    favoriteStickers: em,
                    frequentlyUsedStickers: eE,
                    guildStickers: t,
                    stickersTotal: n,
                });
        };
        i.useEffect(() => {
            "" === el.current && "" !== ea && (0, N.Fg)(), (el.current = ea);
        }, [ea]),
            i.useEffect(() => {
                0 === eT ? q(ea) : X(ea, eT, eo);
            }, [ea, eT, eo]),
            i.useLayoutEffect(() => {
                ei.current?.focus();
            }, []);
        let ek = i.useCallback(() => {
            S(),
                T.default.track(G.HAw.PREMIUM_PROMOTION_OPENED, { location_section: G.JJy.STICKER_PICKER_UPSELL }),
                (0, E.e)();
        }, [S]);
        return (0, r.jsxs)(f.f5, {
            value: ee,
            children: [
                !(et && ec) &&
                    (0, r.jsx)("div", {
                        className: F.wx,
                        children: (0, r.jsx)(M.A, { ref: ei, onKeyDown: ex, stickersListRef: er, channel: a }),
                    }),
                ec
                    ? (0, r.jsx)(L.A, { className: F.p$, onClose: S })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  ref: en,
                                  className: F.AD,
                                  id: U.lq,
                                  ...ew,
                                  children:
                                      null != ed
                                          ? (0, r.jsx)(w.A, {
                                                ref: er,
                                                collapsedStickersCategories: ef,
                                                filteredStickers: eh,
                                                getStickerItemProps: eD,
                                                getStickerRowProps: eL,
                                                gridWidth: ed,
                                                gutterWidth: eb,
                                                stickerPadding: $,
                                                isUsingKeyboardNavigation: eM,
                                                onSelectSticker: eS,
                                                rowCount: ev,
                                                rowCountBySection: eN,
                                                stickersCategories: eu,
                                                stickersGrid: eC,
                                                channel: a,
                                            })
                                          : null,
                              }),
                              (0, r.jsx)(D.A, { stickersListRef: er, channel: a }),
                          ],
                      }),
                es && (0, r.jsx)(k.j, { onLearnMore: ek }),
            ],
        });
    }),
    Q = (e, t) => (
        (0, C.XQ)(),
        (0, r.jsx)("div", {
            className: F.iE,
            id: U.GX,
            "aria-labelledby": U.LD,
            role: "tabpanel",
            children: e.isLoading ? (0, r.jsx)(c.y$y, { className: F.Mz }) : (0, r.jsx)(Z, { ...e, ref: t }),
        })
    ),
    J = i.forwardRef(Q);
