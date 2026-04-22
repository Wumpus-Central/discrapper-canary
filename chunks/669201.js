"use strict";
n.d(t, { A: () => $ });
var i = n(627968),
    l = n(64700),
    s = n(111956),
    r = n.n(s),
    a = n(942381),
    o = n(311907),
    c = n(319060),
    u = n(192308),
    d = n(289873),
    h = n(212245),
    m = n(793574),
    p = n(688810),
    f = n(850992),
    g = n(151271),
    _ = n(887695),
    x = n(87719),
    A = n(234419),
    C = n(253932),
    E = n(287809),
    I = n(954571),
    v = n(240248),
    y = n(410558),
    S = n(361670),
    b = n(891090),
    N = n(256449),
    T = n(679382),
    j = n(842086),
    R = n(313519),
    w = n(647117),
    L = n(234091),
    M = n(275589),
    k = n(526411),
    O = n(642550),
    P = n(616961),
    D = n(994048),
    U = n(823894),
    V = n(652215),
    G = n(854138);
let F = (0, v.xI)(c.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    B = (0, v.xI)(c.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    H = (0, v.xI)(c.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    W = (0, v.xI)(c.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    K = (0, v.xI)(c.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    z = (0, v.xI)(c.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    Z = (0, v.xI)(c.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    q = r()(b.Qz, 200),
    Y = r()(b.HA, 200),
    J = l.forwardRef(function (e, t) {
        let { containerWidth: s, channel: r, onSelectSticker: c, closePopout: d } = e,
            v = k.A.useConfig({ location: "StickerPicker" }).padding,
            { location: J } = (0, h.p)(),
            { analyticsLocations: $ } = (0, p.Ay)(m.A.STICKER_PICKER),
            X = (0, A.V)()?.subscription_trial != null,
            Q = l.useRef(null),
            ee = l.useRef(null),
            et = l.useRef(null),
            en = (0, y.P)((e) => e.showPremiumUpsell),
            [ei, el] = (0, g.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], a.x),
            es = l.useRef("");
        l.useImperativeHandle(t, () => ({ onPickerOpen: eL }));
        let er = (0, N.pD)(r),
            ea = 0 === er.filter((e) => e.type !== j.Z2.EMPTY_GUILD_UPSELL).length,
            eo = (0, _.oV)({
                gridWrapperRef: Q,
                containerWidth: s,
                showingEmptyState: ea,
                listPaddingLeft: B,
                listScrollbarWidth: 8,
            }),
            ec = C.tP.useSetting(),
            eu = l.useMemo(() => new Set(ec), [ec]),
            ed = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
            eh = l.useMemo(() => (0, P.y)(ei, ed, r), [ei, ed, r]),
            em = (0, N.Gc)(),
            ep = (0, N.UT)(),
            ef = (0, o.cf)([T.A], () => T.A.getAllGuildStickers()),
            { sendable: eg = [], sendableWithPremium: e_ = [] } = eh ?? {},
            ex = eg.length + e_.length,
            eA = l.useCallback(
                (e) => {
                    "" === ei ? (0, b.ry)(e) : (0, b.nQ)(e, ei, ex), c(e.sticker, j.D6.STICKER_PICKER);
                },
                [c, ei, ex],
            ),
            eC = null != eo && eo > F,
            {
                rowCount: eE,
                rowCountBySection: eI,
                stickersGrid: ev,
                gutterWidth: ey,
                columnCounts: eS,
            } = (0, N._c)({
                filteredStickers: eh,
                stickersCategories: er,
                collapsedStickersCategories: eu,
                listWidth: eo,
                listPaddingRight: H,
                stickerNodeMargin: eC ? W : K,
                stickerNodeWidth: eC ? z + 2 * v : Z + 2 * v,
            }),
            eb = l.useCallback(
                (e, t) => {
                    let { location: l } = t;
                    switch (e.type) {
                        case j.op.CREATE_STICKER:
                            I.default.track(V.HAw.OPEN_MODAL, { type: V.JJy.CREATE_STICKER_MODAL, location: J }),
                                (0, u.openModalLazy)(async () => {
                                    let { default: t } = await Promise.all([n.e("29143"), n.e("93796")]).then(
                                        n.bind(n, 445002),
                                    );
                                    return (n) => (0, i.jsx)(t, { guildId: e.guild_id, ...n });
                                });
                            break;
                        case j.op.STICKER:
                            null != e.sticker && (0, S.G7)(e.sticker, ed, r) && eA(e);
                    }
                },
                [J, ed, r, eA],
            ),
            {
                getItemProps: eN,
                getRowProps: eT,
                gridContainerProps: ej,
                handleGridContainerKeyDown: eR,
                isUsingKeyboardNavigation: ew,
            } = (0, R.J)({
                columnCounts: eS,
                stickersListRef: ee,
                stickersGrid: ev,
                onGridItemSelect: eb,
                store: f.bM,
                setInspectedStickerPosition: f.bM.setInspectedExpressionPosition,
                gridNavigatorId: U.lq,
            });
        l.useEffect(() => f.bM.resetStoreState, []);
        let eL = () => {
            let e = r.getGuildId(),
                t = [];
            null !== e && (t = T.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            null != ef &&
                [...ef.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, b.p4)({
                    containerWidth: s,
                    favoriteStickers: em,
                    frequentlyUsedStickers: ep,
                    guildStickers: t,
                    stickersTotal: n,
                });
        };
        l.useEffect(() => {
            "" === es.current && "" !== ei && (0, b.Fg)(), (es.current = ei);
        }, [ei]),
            l.useEffect(() => {
                0 === ex ? q(ei) : Y(ei, ex, el);
            }, [ei, ex, el]),
            l.useLayoutEffect(() => {
                et.current?.focus();
            }, []);
        let eM = l.useCallback(() => {
            d(),
                I.default.track(V.HAw.PREMIUM_PROMOTION_OPENED, { location_section: V.JJy.STICKER_PICKER_UPSELL }),
                (0, x.e)();
        }, [d]);
        return (0, i.jsxs)(p.f5, {
            value: $,
            children: [
                !(X && ea) &&
                    (0, i.jsx)("div", {
                        className: G.wx,
                        children: (0, i.jsx)(O.A, { ref: et, onKeyDown: eR, stickersListRef: ee, channel: r }),
                    }),
                ea
                    ? (0, i.jsx)(L.A, { className: G.p$, onClose: d })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  ref: Q,
                                  className: G.AD,
                                  id: U.lq,
                                  ...ej,
                                  children:
                                      null != eo
                                          ? (0, i.jsx)(M.A, {
                                                ref: ee,
                                                collapsedStickersCategories: eu,
                                                filteredStickers: eh,
                                                getStickerItemProps: eN,
                                                getStickerRowProps: eT,
                                                gridWidth: eo,
                                                gutterWidth: ey,
                                                stickerPadding: v,
                                                isUsingKeyboardNavigation: ew,
                                                onSelectSticker: eA,
                                                rowCount: eE,
                                                rowCountBySection: eI,
                                                stickersCategories: er,
                                                stickersGrid: ev,
                                                channel: r,
                                            })
                                          : null,
                              }),
                              (0, i.jsx)(w.A, { stickersListRef: ee, channel: r }),
                          ],
                      }),
                en && (0, i.jsx)(D.j, { onLearnMore: eM }),
            ],
        });
    }),
    $ = l.forwardRef(
        (e, t) => (
            (0, N.XQ)(),
            (0, i.jsx)("div", {
                className: G.iE,
                id: U.GX,
                "aria-labelledby": U.LD,
                role: "tabpanel",
                children: e.isLoading ? (0, i.jsx)(d.y, { className: G.Mz }) : (0, i.jsx)(J, { ...e, ref: t }),
            })
        ),
    );
