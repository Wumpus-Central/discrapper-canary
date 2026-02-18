"use strict";
n.d(t, { A: () => et });
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
    x = n(642550),
    M = n(616961),
    P = n(994048),
    k = n(823894),
    U = n(652215),
    G = n(654329);
let F = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    V = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    B = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    H = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    j = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    Y = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    W = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    K = (0, S.xI)(u.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    z = Y + 2 * K,
    $ = W + 2 * K,
    q = 8,
    Z = 200,
    X = a()(N.Qz, Z),
    Q = a()(N.HA, Z),
    J = i.forwardRef(function (e, t) {
        let { containerWidth: s, channel: a, onSelectSticker: u, closePopout: S } = e,
            { location: Y } = (0, d.p)(),
            { analyticsLocations: W } = (0, f.Ay)(_.A.STICKER_PICKER),
            K = (0, g.V)()?.subscription_trial != null,
            Z = i.useRef(null),
            J = i.useRef(null),
            ee = i.useRef(null),
            et = (0, y.P)((e) => e.showPremiumUpsell),
            [en, er] = (0, h.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], o.x),
            ei = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: eL }));
        let es = (0, C.pD)(a),
            ea = 0 === es.filter((e) => e.type !== R.Z2.EMPTY_GUILD_UPSELL).length,
            eo = (0, m.oV)({
                gridWrapperRef: Z,
                containerWidth: s,
                showingEmptyState: ea,
                listPaddingLeft: V,
                listScrollbarWidth: q,
            }),
            el = A.tP.useSetting(),
            eu = i.useMemo(() => new Set(el), [el]),
            ec = (0, l.bG)([I.default], () => I.default.getCurrentUser()),
            ed = i.useMemo(() => (0, M.y)(en, ec, a), [en, ec, a]),
            e_ = (0, C.Gc)(),
            ef = (0, C.UT)(),
            ep = (0, l.cf)([b.A], () => b.A.getAllGuildStickers()),
            { sendable: eh = [], sendableWithPremium: em = [] } = ed ?? {},
            eE = eh.length + em.length,
            eg = i.useCallback(
                (e) => {
                    "" === en ? (0, N.ry)(e) : (0, N.nQ)(e, en, eE), u(e.sticker, R.D6.STICKER_PICKER);
                },
                [u, en, eE],
            ),
            eA = null != eo && eo > F,
            {
                rowCount: eI,
                rowCountBySection: eT,
                stickersGrid: eS,
                gutterWidth: ey,
                columnCounts: ev,
            } = (0, C._c)({
                filteredStickers: ed,
                stickersCategories: es,
                collapsedStickersCategories: eu,
                listWidth: eo,
                listPaddingRight: B,
                stickerNodeMargin: eA ? H : j,
                stickerNodeWidth: eA ? z : $,
            }),
            eN = i.useCallback(
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
                            null != e.sticker && (0, v.G7)(e.sticker, ec, a) && eg(e);
                    }
                },
                [Y, ec, a, eg],
            ),
            {
                getItemProps: eC,
                getRowProps: eb,
                gridContainerProps: eR,
                handleGridContainerKeyDown: eO,
                isUsingKeyboardNavigation: eD,
            } = (0, O.J)({
                columnCounts: ev,
                stickersListRef: J,
                stickersGrid: eS,
                onGridItemSelect: eN,
                store: p.bM,
                setInspectedStickerPosition: p.bM.setInspectedExpressionPosition,
                gridNavigatorId: k.lq,
            });
        i.useEffect(() => p.bM.resetStoreState, []);
        let eL = () => {
            let e = a.getGuildId(),
                t = [];
            null !== e && (t = b.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            null != ep &&
                [...ep.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, N.p4)({
                    containerWidth: s,
                    favoriteStickers: e_,
                    frequentlyUsedStickers: ef,
                    guildStickers: t,
                    stickersTotal: n,
                });
        };
        i.useEffect(() => {
            "" === ei.current && "" !== en && (0, N.Fg)(), (ei.current = en);
        }, [en]),
            i.useEffect(() => {
                0 === eE ? X(en) : Q(en, eE, er);
            }, [en, eE, er]),
            i.useLayoutEffect(() => {
                ee.current?.focus();
            }, []);
        let ew = i.useCallback(() => {
            S(),
                T.default.track(U.HAw.PREMIUM_PROMOTION_OPENED, { location_section: U.JJy.STICKER_PICKER_UPSELL }),
                (0, E.e)();
        }, [S]);
        return (0, r.jsxs)(f.f5, {
            value: W,
            children: [
                !(K && ea) &&
                    (0, r.jsx)("div", {
                        className: G.wx,
                        children: (0, r.jsx)(x.A, { ref: ee, onKeyDown: eO, stickersListRef: J, channel: a }),
                    }),
                ea
                    ? (0, r.jsx)(L.A, { className: G.p$, onClose: S })
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
                                                getStickerItemProps: eC,
                                                getStickerRowProps: eb,
                                                gridWidth: eo,
                                                gutterWidth: ey,
                                                isUsingKeyboardNavigation: eD,
                                                onSelectSticker: eg,
                                                rowCount: eI,
                                                rowCountBySection: eT,
                                                stickersCategories: es,
                                                stickersGrid: eS,
                                                channel: a,
                                            })
                                          : null,
                              }),
                              (0, r.jsx)(D.A, { stickersListRef: J, channel: a }),
                          ],
                      }),
                et && (0, r.jsx)(P.j, { onLearnMore: ew }),
            ],
        });
    }),
    ee = (e, t) => (
        (0, C.XQ)(),
        (0, r.jsx)("div", {
            className: G.iE,
            id: k.GX,
            "aria-labelledby": k.LD,
            role: "tabpanel",
            children: e.isLoading ? (0, r.jsx)(c.y$y, { className: G.Mz }) : (0, r.jsx)(J, { ...e, ref: t }),
        })
    ),
    et = i.forwardRef(ee);
