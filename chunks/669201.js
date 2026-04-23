"use strict";
n.d(t, { A: () => Q });
var r = n(627968),
    i = n(64700),
    s = n(111956),
    a = n.n(s),
    o = n(942381),
    l = n(311907),
    u = n(319060),
    c = n(192308),
    d = n(289873),
    _ = n(212245),
    f = n(793574),
    p = n(688810),
    h = n(850992),
    E = n(151271),
    m = n(887695),
    g = n(87719),
    A = n(234419),
    I = n(253932),
    T = n(287809),
    S = n(954571),
    y = n(240248),
    N = n(410558),
    v = n(361670),
    C = n(891090),
    O = n(256449),
    R = n(679382),
    b = n(842086),
    D = n(313519),
    L = n(647117),
    w = n(234091),
    M = n(275589),
    P = n(526411),
    x = n(642550),
    k = n(616961),
    U = n(994048),
    G = n(823894),
    F = n(652215),
    V = n(854138);
let B = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    H = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    j = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    Y = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    W = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    K = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    $ = (0, y.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    z = a()(C.Qz, 200),
    q = a()(C.HA, 200),
    X = i.forwardRef(function (e, t) {
        let { containerWidth: s, channel: a, onSelectSticker: u, closePopout: d } = e,
            y = P.A.useConfig({ location: "StickerPicker" }).padding,
            { location: X } = (0, _.p)(),
            { analyticsLocations: Q } = (0, p.Ay)(f.A.STICKER_PICKER),
            Z = (0, A.V)()?.subscription_trial != null,
            J = i.useRef(null),
            ee = i.useRef(null),
            et = i.useRef(null),
            en = (0, N.P)((e) => e.showPremiumUpsell),
            [er, ei] = (0, E.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], o.x),
            es = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: ew }));
        let ea = (0, O.pD)(a),
            eo = 0 === ea.filter((e) => e.type !== b.Z2.EMPTY_GUILD_UPSELL).length,
            el = (0, m.oV)({
                gridWrapperRef: J,
                containerWidth: s,
                showingEmptyState: eo,
                listPaddingLeft: H,
                listScrollbarWidth: 8,
            }),
            eu = I.tP.useSetting(),
            ec = i.useMemo(() => new Set(eu), [eu]),
            ed = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
            e_ = i.useMemo(() => (0, k.y)(er, ed, a), [er, ed, a]),
            ef = (0, O.Gc)(),
            ep = (0, O.UT)(),
            eh = (0, l.cf)([R.A], () => R.A.getAllGuildStickers()),
            { sendable: eE = [], sendableWithPremium: em = [] } = e_ ?? {},
            eg = eE.length + em.length,
            eA = i.useCallback(
                (e) => {
                    "" === er ? (0, C.ry)(e) : (0, C.nQ)(e, er, eg), u(e.sticker, b.D6.STICKER_PICKER);
                },
                [u, er, eg],
            ),
            eI = null != el && el > B,
            {
                rowCount: eT,
                rowCountBySection: eS,
                stickersGrid: ey,
                gutterWidth: eN,
                columnCounts: ev,
            } = (0, O._c)({
                filteredStickers: e_,
                stickersCategories: ea,
                collapsedStickersCategories: ec,
                listWidth: el,
                listPaddingRight: j,
                stickerNodeMargin: eI ? Y : W,
                stickerNodeWidth: eI ? K + 2 * y : $ + 2 * y,
            }),
            eC = i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case b.op.CREATE_STICKER:
                            S.default.track(F.HAw.OPEN_MODAL, { type: F.JJy.CREATE_STICKER_MODAL, location: X }),
                                (0, c.openModalLazy)(async () => {
                                    let { default: t } = await Promise.all([n.e("29143"), n.e("93796")]).then(
                                        n.bind(n, 445002),
                                    );
                                    return (n) => (0, r.jsx)(t, { guildId: e.guild_id, ...n });
                                });
                            break;
                        case b.op.STICKER:
                            null != e.sticker && (0, v.G7)(e.sticker, ed, a) && eA(e);
                    }
                },
                [X, ed, a, eA],
            ),
            {
                getItemProps: eO,
                getRowProps: eR,
                gridContainerProps: eb,
                handleGridContainerKeyDown: eD,
                isUsingKeyboardNavigation: eL,
            } = (0, D.J)({
                columnCounts: ev,
                stickersListRef: ee,
                stickersGrid: ey,
                onGridItemSelect: eC,
                store: h.bM,
                setInspectedStickerPosition: h.bM.setInspectedExpressionPosition,
                gridNavigatorId: G.lq,
            });
        i.useEffect(() => h.bM.resetStoreState, []);
        let ew = () => {
            let e = a.getGuildId(),
                t = [];
            null !== e && (t = R.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            null != eh &&
                [...eh.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, C.p4)({
                    containerWidth: s,
                    favoriteStickers: ef,
                    frequentlyUsedStickers: ep,
                    guildStickers: t,
                    stickersTotal: n,
                });
        };
        i.useEffect(() => {
            "" === es.current && "" !== er && (0, C.Fg)(), (es.current = er);
        }, [er]),
            i.useEffect(() => {
                0 === eg ? z(er) : q(er, eg, ei);
            }, [er, eg, ei]),
            i.useLayoutEffect(() => {
                et.current?.focus();
            }, []);
        let eM = i.useCallback(() => {
            d(),
                S.default.track(F.HAw.PREMIUM_PROMOTION_OPENED, { location_section: F.JJy.STICKER_PICKER_UPSELL }),
                (0, g.e)();
        }, [d]);
        return (0, r.jsxs)(p.f5, {
            value: Q,
            children: [
                !(Z && eo) &&
                    (0, r.jsx)("div", {
                        className: V.wx,
                        children: (0, r.jsx)(x.A, { ref: et, onKeyDown: eD, stickersListRef: ee, channel: a }),
                    }),
                eo
                    ? (0, r.jsx)(w.A, { className: V.p$, onClose: d })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  ref: J,
                                  className: V.AD,
                                  id: G.lq,
                                  ...eb,
                                  children:
                                      null != el
                                          ? (0, r.jsx)(M.A, {
                                                ref: ee,
                                                collapsedStickersCategories: ec,
                                                filteredStickers: e_,
                                                getStickerItemProps: eO,
                                                getStickerRowProps: eR,
                                                gridWidth: el,
                                                gutterWidth: eN,
                                                stickerPadding: y,
                                                isUsingKeyboardNavigation: eL,
                                                onSelectSticker: eA,
                                                rowCount: eT,
                                                rowCountBySection: eS,
                                                stickersCategories: ea,
                                                stickersGrid: ey,
                                                channel: a,
                                            })
                                          : null,
                              }),
                              (0, r.jsx)(L.A, { stickersListRef: ee, channel: a }),
                          ],
                      }),
                en && (0, r.jsx)(U.j, { onLearnMore: eM }),
            ],
        });
    }),
    Q = i.forwardRef(
        (e, t) => (
            (0, O.XQ)(),
            (0, r.jsx)("div", {
                className: V.iE,
                id: G.GX,
                "aria-labelledby": G.LD,
                role: "tabpanel",
                children: e.isLoading ? (0, r.jsx)(d.y, { className: V.Mz }) : (0, r.jsx)(X, { ...e, ref: t }),
            })
        ),
    );
