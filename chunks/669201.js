"use strict";
n.d(t, { A: () => et });
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
    p = n(850992),
    h = n(151271),
    m = n(887695),
    g = n(87719),
    E = n(234419),
    A = n(253932),
    I = n(287809),
    T = n(954571),
    y = n(240248),
    S = n(410558),
    v = n(361670),
    C = n(891090),
    b = n(256449),
    N = n(679382),
    R = n(842086),
    O = n(313519),
    D = n(647117),
    L = n(234091),
    w = n(275589),
    x = n(642550),
    P = n(616961),
    M = n(994048),
    k = n(823894),
    U = n(652215),
    G = n(654329);
let V = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    F = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    B = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    j = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    H = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    Y = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    W = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    K = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    z = Y + 2 * K,
    $ = W + 2 * K,
    q = 8,
    Z = 200,
    Q = s()(C.Qz, Z),
    X = s()(C.HA, Z),
    J = i.forwardRef(function (e, t) {
        let { containerWidth: a, channel: s, onSelectSticker: u, closePopout: y } = e,
            { location: Y } = (0, d.p)(),
            { analyticsLocations: W } = (0, f.Ay)(_.A.STICKER_PICKER),
            K = (0, E.V)()?.subscription_trial != null,
            Z = i.useRef(null),
            J = i.useRef(null),
            ee = i.useRef(null),
            et = (0, S.P)((e) => e.showPremiumUpsell),
            [en, er] = (0, h.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], o.x),
            ei = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: eL }));
        let ea = (0, b.pD)(s),
            es = 0 === ea.filter((e) => e.type !== R.Z2.EMPTY_GUILD_UPSELL).length,
            eo = (0, m.oV)({
                gridWrapperRef: Z,
                containerWidth: a,
                showingEmptyState: es,
                listPaddingLeft: F,
                listScrollbarWidth: q,
            }),
            el = A.tP.useSetting(),
            eu = i.useMemo(() => new Set(el), [el]),
            ec = (0, l.bG)([I.default], () => I.default.getCurrentUser()),
            ed = i.useMemo(() => (0, P.y)(en, ec, s), [en, ec, s]),
            e_ = (0, b.Gc)(),
            ef = (0, b.UT)(),
            ep = (0, l.cf)([N.A], () => N.A.getAllGuildStickers()),
            { sendable: eh = [], sendableWithPremium: em = [] } = ed ?? {},
            eg = eh.length + em.length,
            eE = i.useCallback(
                (e) => {
                    "" === en ? (0, C.ry)(e) : (0, C.nQ)(e, en, eg), u(e.sticker, R.D6.STICKER_PICKER);
                },
                [u, en, eg],
            ),
            eA = null != eo && eo > V,
            {
                rowCount: eI,
                rowCountBySection: eT,
                stickersGrid: ey,
                gutterWidth: eS,
                columnCounts: ev,
            } = (0, b._c)({
                filteredStickers: ed,
                stickersCategories: ea,
                collapsedStickersCategories: eu,
                listWidth: eo,
                listPaddingRight: B,
                stickerNodeMargin: eA ? j : H,
                stickerNodeWidth: eA ? z : $,
            }),
            eC = i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case R.op.CREATE_STICKER:
                            T.default.track(U.HAw.OPEN_MODAL, { type: U.JJy.CREATE_STICKER_MODAL, location: Y }),
                                (0, c.mMO)(async () => {
                                    let { default: t } = await Promise.all([n.e("29143"), n.e("64800")]).then(
                                        n.bind(n, 445002),
                                    );
                                    return (n) => (0, r.jsx)(t, { guildId: e.guild_id, ...n });
                                });
                            break;
                        case R.op.STICKER:
                            null != e.sticker && (0, v.G7)(e.sticker, ec, s) && eE(e);
                    }
                },
                [Y, ec, s, eE],
            ),
            {
                getItemProps: eb,
                getRowProps: eN,
                gridContainerProps: eR,
                handleGridContainerKeyDown: eO,
                isUsingKeyboardNavigation: eD,
            } = (0, O.J)({
                columnCounts: ev,
                stickersListRef: J,
                stickersGrid: ey,
                onGridItemSelect: eC,
                store: p.bM,
                setInspectedStickerPosition: p.bM.setInspectedExpressionPosition,
                gridNavigatorId: k.lq,
            });
        i.useEffect(() => p.bM.resetStoreState, []);
        let eL = () => {
            let e = s.getGuildId(),
                t = [];
            null !== e && (t = N.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            null != ep &&
                [...ep.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, C.p4)({
                    containerWidth: a,
                    favoriteStickers: e_,
                    frequentlyUsedStickers: ef,
                    guildStickers: t,
                    stickersTotal: n,
                });
        };
        i.useEffect(() => {
            "" === ei.current && "" !== en && (0, C.Fg)(), (ei.current = en);
        }, [en]),
            i.useEffect(() => {
                0 === eg ? Q(en) : X(en, eg, er);
            }, [en, eg, er]),
            i.useLayoutEffect(() => {
                ee.current?.focus();
            }, []);
        let ew = i.useCallback(() => {
            y(),
                T.default.track(U.HAw.PREMIUM_PROMOTION_OPENED, { location_section: U.JJy.STICKER_PICKER_UPSELL }),
                (0, g.e)();
        }, [y]);
        return (0, r.jsxs)(f.f5, {
            value: W,
            children: [
                !(K && es) &&
                    (0, r.jsx)("div", {
                        className: G.wx,
                        children: (0, r.jsx)(x.A, { ref: ee, onKeyDown: eO, stickersListRef: J, channel: s }),
                    }),
                es
                    ? (0, r.jsx)(L.A, { className: G.p$, onClose: y })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  ref: Z,
                                  className: G.AD,
                                  id: k.lq,
                                  ...eR,
                                  children:
                                      null != eo
                                          ? (0, r.jsx)(w.A, {
                                                ref: J,
                                                collapsedStickersCategories: eu,
                                                filteredStickers: ed,
                                                getStickerItemProps: eb,
                                                getStickerRowProps: eN,
                                                gridWidth: eo,
                                                gutterWidth: eS,
                                                isUsingKeyboardNavigation: eD,
                                                onSelectSticker: eE,
                                                rowCount: eI,
                                                rowCountBySection: eT,
                                                stickersCategories: ea,
                                                stickersGrid: ey,
                                                channel: s,
                                            })
                                          : null,
                              }),
                              (0, r.jsx)(D.A, { stickersListRef: J, channel: s }),
                          ],
                      }),
                et && (0, r.jsx)(M.j, { onLearnMore: ew }),
            ],
        });
    }),
    ee = (e, t) => (
        (0, b.XQ)(),
        (0, r.jsx)("div", {
            className: G.iE,
            id: k.GX,
            "aria-labelledby": k.LD,
            role: "tabpanel",
            children: e.isLoading ? (0, r.jsx)(c.y$y, { className: G.Mz }) : (0, r.jsx)(J, { ...e, ref: t }),
        })
    ),
    et = i.forwardRef(ee);
