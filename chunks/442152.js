"use strict";
n.d(t, { A: () => t1 });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(435558),
    o = n.n(a),
    u = n(607399),
    c = n(621466),
    d = n(17928),
    h = n(554146),
    m = n(192308),
    f = n(939249),
    p = n(315710),
    g = n(812993),
    x = n(817281),
    A = n(820284),
    C = n(761929),
    E = n(95561),
    I = n(131607),
    y = n(267889),
    v = n(813703),
    S = n(750506),
    N = n(267102),
    _ = n(926972),
    T = n(484036),
    j = n(256449),
    b = n(750385),
    R = n(649852),
    O = n.n(R),
    M = n(462180),
    w = n(319060),
    L = n(289873),
    k = n(212245),
    P = n(793574),
    D = n(688810),
    U = n(850992),
    G = n(151271),
    V = n(887695),
    F = n(87719),
    H = n(732280),
    B = n(885386),
    W = n(287809),
    K = n(174459),
    z = n(240248),
    Z = n(196765),
    Y = n(121894);
let q = Object.freeze({ showPremiumUpsell: !1 }),
    J = (0, Z.v)((e) => q);
function $(e) {
    (0, Y.r)(() => J.setState({ showPremiumUpsell: e }));
}
var X = n(361670),
    Q = n(891090),
    ee = n(194004),
    et = n(788413),
    en = n(60587),
    el = n(27232),
    ei = n(406810),
    es = n(866665),
    er = n(797285),
    ea = n(724511),
    eo = n(802019),
    eu = n(71393),
    ec = n(68935),
    ed = n(148355),
    eh = n(652215),
    em = n(698279),
    ef = n(375708),
    ep = n(402942);
let eg = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    ex = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    eA = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eC = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    eE = (0, z.xI)(w.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eI = (0, z.xI)(w.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ey = [eg, eg, eg, eg],
    ev = (ex + eA) * 2 + eg,
    eS = eE + 2 * eI,
    eN = (e) => {
        let { stickersListRef: t, channel: n } = e,
            s = i.useRef(null),
            [a, o] = i.useState(!0),
            u = U.bM.useStore((e) => e.activeCategoryIndex),
            c = (0, j.pD)(n),
            {
                firstStandardStickerCategoryIndex: d,
                firstStandardStickerCategoryOffsetTop: h,
                guildCategoryCount: m,
                hasFirstPartyStickerPacks: p,
            } = i.useMemo(() => {
                let e = c.filter((e) => e.type === ee.Z2.GUILD).length,
                    t = e + +(c[0]?.type === ee.Z2.RECENT) + +(c[0]?.type === ee.Z2.FAVORITE),
                    n = t * (ex + eA) - eA + eS;
                return {
                    firstStandardStickerCategoryIndex: t + 1,
                    firstStandardStickerCategoryOffsetTop: n,
                    guildCategoryCount: e,
                    hasFirstPartyStickerPacks: null != c.find((e) => e.type === ee.Z2.PACK),
                };
            }, [c]);
        i.useLayoutEffect(() => {
            o(m >= 7);
        }, [m]);
        let {
                renderCategoryListItem: g,
                rowHeight: x,
                onScroll: A,
            } = (function (e) {
                let {
                        activeIndex: t,
                        stickerPickerCategories: n,
                        categoryListRef: s,
                        firstStandardStickerCategoryOffsetTop: a,
                        setShouldRenderShortcut: o,
                    } = e,
                    u = (0, k.p)(),
                    c = (0, G.RQ)((e) => "" !== e.searchQuery),
                    d = i.useCallback(
                        (e, s, a) => {
                            let o,
                                d = n[0]?.type === ee.Z2.FAVORITE,
                                h = +!!d,
                                m = n[h]?.type === ee.Z2.RECENT,
                                p = n.length;
                            if (0 === s && d)
                                return (0, l.jsx)(
                                    "div",
                                    {
                                        role: "listitem",
                                        "aria-setsize": p,
                                        "aria-posinset": s,
                                        children: (0, l.jsx)(f.D, {
                                            "aria-label": ef.intl.string(ef.t.y3LQCG),
                                            className: r()(ep._0, ep.dC, { [ep.k1]: !c && 0 === t, [ep.ls]: !m }),
                                            onClick: a,
                                            children: (0, l.jsx)(el.StarIcon, {
                                                size: "custom",
                                                color: "currentColor",
                                                className: ep.AB,
                                                height: eC,
                                                width: eC,
                                            }),
                                        }),
                                    },
                                    "favorites",
                                );
                            if (s === h && m)
                                return (0, l.jsx)(
                                    "div",
                                    {
                                        role: "listitem",
                                        "aria-setsize": p,
                                        "aria-posinset": s,
                                        children: (0, l.jsx)(f.D, {
                                            "aria-label": ef.intl.string(ef.t.RxAmVC),
                                            className: r()(ep._0, ep.dC, ep.ls, { [ep.k1]: !c && t === h }),
                                            onClick: a,
                                            children: (0, l.jsx)(ei.ClockIcon, {
                                                size: "custom",
                                                color: "currentColor",
                                                className: ep.AB,
                                                height: eC,
                                                width: eC,
                                            }),
                                        }),
                                    },
                                    "recent",
                                );
                            let g = t === s,
                                x = n[s],
                                A = n[s + 1],
                                C = null != A && x.type === ee.Z2.GUILD && A.type !== ee.Z2.GUILD,
                                E = x.type === ee.Z2.PACK,
                                I = "",
                                y = null;
                            if (x.type === ee.Z2.GUILD || x.type === ee.Z2.EMPTY_GUILD_UPSELL) {
                                let e = eu.A.getGuild(x.id);
                                null != e &&
                                    ((o = e.id), (I = e.name), (y = (0, l.jsx)(ea.A, { guild: e, isSelected: g })));
                            } else if (E) {
                                let e = b.A.getStickerPack(x.id);
                                null != e &&
                                    ((I = e.name),
                                    (y = (0, l.jsx)(ed.A, {
                                        disableAnimation: !g || c,
                                        size: ex,
                                        sticker: (0, ec.Id)(e),
                                    })));
                            }
                            return (0, l.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, l.jsx)(es.m, {
                                            position: "right",
                                            text: I,
                                            children: (0, l.jsx)("div", {
                                                role: "listitem",
                                                "aria-setsize": p,
                                                "aria-posinset": s,
                                                children: (0, l.jsx)(f.D, {
                                                    "aria-label": I,
                                                    className: r()(ep._0, { [ep.ND]: E, [ep.Ms]: !c && g && E }),
                                                    onClick: () => {
                                                        x.type === ee.Z2.PACK &&
                                                            K.default.track(
                                                                eh.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED,
                                                                {
                                                                    location: u?.location,
                                                                    tab: em.kx.STICKER,
                                                                    sticker_pack_id: x.id,
                                                                    guild_id: o,
                                                                },
                                                            ),
                                                            a();
                                                    },
                                                    children: y,
                                                }),
                                            }),
                                        }),
                                        C ? (0, l.jsx)("hr", { className: ep.ny }, "separator") : null,
                                    ],
                                },
                                x.id,
                            );
                        },
                        [t, u, c, n],
                    ),
                    h = i.useCallback((e, t) => (t ? ev : 0), []);
                return {
                    getScrollOffsetForIndex: h,
                    renderCategoryListItem: d,
                    rowHeight: i.useCallback(
                        (e, t) => {
                            let l = n[t],
                                i = n[t + 1];
                            return ex + (null != i && l.type === ee.Z2.GUILD && i.type !== ee.Z2.GUILD ? eS : eA);
                        },
                        [n],
                    ),
                    onScroll: i.useCallback(
                        (e) => {
                            let t = s.current?.getListDimensions();
                            null == t || o(e + t.height - eE < a);
                        },
                        [a, s, o],
                    ),
                };
            })({
                activeIndex: u,
                stickerPickerCategories: c,
                categoryListRef: s,
                firstStandardStickerCategoryOffsetTop: h,
                setShouldRenderShortcut: o,
            }),
            C = i.useCallback(
                (e) => {
                    e(d), s.current?.scrollTo(h);
                },
                [d, h],
            );
        return (0, l.jsx)(eo.A, {
            className: ep.jv,
            categoryListRef: s,
            expressionsListRef: t,
            store: U.bM,
            listPadding: ey,
            onScroll: A,
            renderCategoryListItem: g,
            rowCount: c.length,
            categories: c,
            categoryHeight: x,
            children: (e) =>
                p &&
                a &&
                (0, l.jsx)(f.D, {
                    className: r()(ep.Fe, { [ep.Q6]: !a }),
                    onClick: () => C(e),
                    children: (0, l.jsx)(er.t, { size: "md", color: "currentColor" }),
                }),
        });
    };
var e_ = n(297264),
    eT = n(834730),
    ej = n(724651),
    eb = n(811611),
    eR = n(821609),
    eO = n(403581);
function eM(e) {
    let { analyticsSection: t, buttonText: i } = e;
    return (0, l.jsx)(eR.$, {
        variant: "expressive",
        icon: eO.t,
        text: i ?? ef.intl.string(ef.t["8Sh5fg"]),
        onClick: () => {
            var e;
            return (
                (e = { section: t }),
                void (K.default.track(eh.HAw.OPEN_MODAL, {
                    type: eh.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
                    location: e,
                }),
                (0, m.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("840981"),
                        n.e("621675"),
                        n.e("171202"),
                        n.e("353274"),
                    ]).then(n.bind(n, 397313));
                    return (t) => (0, l.jsx)(e, { ...t });
                }))
            );
        },
    });
}
var ew = n(823894),
    eL = n(202541),
    ek = n(997300);
function eP(e) {
    let { className: t, onClose: n } = e;
    (0, j.XQ)();
    let { analyticsLocations: s } = (0, D.Ay)(P.A.EMPTY_STATE),
        a = (0, d.yK)([b.A], () => ew.vX.map((e) => b.A.getStickerById(e)));
    i.useEffect(() => {
        K.default.track(eh.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eL.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: eh.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: s,
        });
    }, [s]);
    let o = (0, H.V)(),
        u = (0, ej.O)(),
        c = null != o || null != u;
    return (0, l.jsxs)("div", {
        className: r()(ek.p$, t, { [ek.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eb.Ay, {
                      discountOffer: u,
                      trialOffer: o,
                      onClose: n,
                      type: eL.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscriptionTrial?.skuId ?? eL.pe.TIER_2,
                      children: ef.intl.string(ef.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(e_.D, {
                              className: ek.wx,
                              variant: "heading-xl/semibold",
                              children: ef.intl.string(ef.t.HEm04J),
                          }),
                          (0, l.jsx)(eT.E, {
                              className: ek.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: ef.intl.string(ef.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: ek.l1,
                              children: a
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(ed.A, { sticker: e, className: ek.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eM, { analyticsSection: eh.JJy.EXPRESSION_PICKER }),
        ],
    });
}
var eD = n(404778),
    eU = n(537652),
    eG = n(962125),
    eV = n(286509),
    eF = n(631576),
    eH = n(369163),
    eB = n(123292),
    eW = n(631305),
    eK = n(468689),
    ez = n(931991),
    eZ = n(473145),
    eY = n(625633),
    eq = n(758114);
let eJ = function (e) {
    let { className: t, guildId: n, channel: s, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, k.p)(),
        { analyticsLocations: c } = (0, D.Ay)(),
        h = (0, d.bG)([eu.A], () => eu.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, ez.nr)(h),
        f = null != h && 0 === (0, eZ.aG)(h.premiumTier) && !h.features.has(eh.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            f &&
            a &&
            ((0, E.zV)(eh.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: u,
                guild_id: h?.id,
                channel_id: s?.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: c,
            }),
            o(!0));
    }, [f, h, s, u, a, o, c, m]),
    null != h && m)
        ? f
            ? (0, l.jsxs)("div", {
                  className: r()(eq.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(eH.v, { size: "md", color: "currentColor", className: eq.Kk }),
                      (0, l.jsx)(eT.E, {
                          color: "interactive-text-default",
                          className: eq.rf,
                          variant: "text-sm/normal",
                          children: ef.intl.format(ef.t.AXWla1, { count: (0, eZ.aG)(eh.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(eB.Q, {
                          variant: "primary",
                          text: ef.intl.string(ef.t["Gb+BJD"]),
                          onClick: function () {
                              null != h &&
                                  (0, eW.A)({
                                      analyticsLocations: c,
                                      analyticsSourceLocation: u,
                                      guild: h,
                                      perks: (0, eY.q5)(),
                                  });
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: r()(eq.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(er.t, {
                          size: "custom",
                          color: "currentColor",
                          className: eq.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, l.jsx)(eT.E, {
                          color: "interactive-text-default",
                          className: eq.rf,
                          variant: "text-sm/normal",
                          children: ef.intl.string(ef.t.S83wgh),
                      }),
                      (0, l.jsx)(eB.Q, {
                          variant: "primary",
                          text: ef.intl.string(ef.t.bwNjug),
                          onClick: function () {
                              (0, G.v8)(), eK.A.open(n, eh.BEX.STICKERS, u);
                          },
                      }),
                  ],
              })
        : null;
};
var e$ = n(307301),
    eX = n(182922),
    eQ = n(493397);
let e0 = (0, z.xI)(w.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    e1 = (0, z.xI)(w.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    e2 = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = U.bM.useStore((e) => e.inspectedExpressionPosition),
            s = i.useMemo(() => {
                let { rowIndex: e, columnIndex: l } = n,
                    i = t[e]?.[l];
                if (null == i) return null;
                switch (i.type) {
                    case ee.op.CREATE_STICKER:
                        return { guild_id: i.guild_id, name: i.name };
                    case ee.op.STICKER:
                        return i.sticker;
                    default:
                        return null;
                }
            }, [t, n]);
        if (null == s) return null;
        let { graphic: r, title: a } = (function (e) {
                let t = null,
                    n = null;
                if ((!(0, ec.FD)(e) && !(0, ec.Xw)(e)) || (0, ec.Xw)(e)) {
                    let i = eu.A.getGuild(e.guild_id);
                    null != i &&
                        ((t = ef.intl.format(ef.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(ea.A, { guild: i })));
                } else if ((0, ec.FD)(e)) {
                    let i = b.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = ef.intl.format(ef.t.cZOkbs, { source: i.name })),
                        (n = (0, l.jsx)(ed.A, { size: e1, sticker: (0, ec.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(s),
            o =
                (0, ec.FD)(s) || (0, ec.Xw)(s)
                    ? (0, l.jsx)(ed.A, { isInteracting: !0, size: e0, sticker: s, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: eQ.P,
                          children: (0, l.jsx)(e$.j, { size: "md", color: "currentColor", className: eQ.K }),
                      });
        return (0, l.jsx)(eX.A, {
            graphicPrimary: o,
            graphicSecondary: r,
            titlePrimary: s.name,
            titleSecondary: (0, ec.FD)(s) || (0, ec.Xw)(s) ? a : null,
        });
    });
var e3 = n(140735),
    e5 = n(442433),
    e7 = n(304072),
    e8 = n(194261),
    e6 = n(312503);
let e4 = function (e) {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: e6.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(e8.LockIcon, { size: "xxs", color: "currentColor", className: e6.I }),
    });
};
var e9 = n(815480);
let te = i.memo(function (e) {
    let {
            isDisplayingIndividualStickers: t = !1,
            preferAnimation: s = !0,
            getStickerItemProps: o,
            getStickerRowProps: u,
            gutterWidth: c,
            inspectedStickerPosition: d,
            isScrolling: h,
            isUsingKeyboardNavigation: p,
            onInspect: g,
            onSelect: x,
            rowIndex: A,
            stickerClassName: C,
            stickerDescriptors: E,
            stickerPadding: I,
            stickerSize: y,
            ownedStickerPacks: v,
            enlargeOnInteraction: S = !1,
            channel: N,
            currentUser: _,
            checkSendability: T = !0,
        } = e,
        { location: j } = (0, k.p)(),
        b = y + 2 * I,
        R = i.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${b}px)`,
                height: b,
                paddingRight: t ? void 0 : b,
            }),
            [t, c, b],
        ),
        O = i.useMemo(() => ({ width: y, height: y, padding: I }), [I, y]),
        [M, w] = (0, e7.A)(null, 300);
    return (0, l.jsx)("div", {
        className: e9.nM,
        style: R,
        ...u?.(A),
        children: E.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === ee.op.STICKER && S && u,
                E = (0, a.throttle)(() => {
                    h?.current === !0 || p?.current === !0 || u || g?.(e);
                }, 250),
                { ref: I, tabIndex: b, onFocus: R, ...L } = o?.(e.columnIndex, A) ?? {};
            switch (e.type) {
                case ee.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...L,
                            children: (0, l.jsxs)(f.D, {
                                "aria-label": e.name,
                                className: r()(e9.wP, C, { [e9.Kj]: u }),
                                innerRef: I,
                                tabIndex: b,
                                onFocus: R ?? E,
                                onMouseMove: E,
                                onClick: function () {
                                    e.type === ee.op.CREATE_STICKER &&
                                        (K.default.track(eh.HAw.OPEN_MODAL, {
                                            type: eh.JJy.CREATE_STICKER_MODAL,
                                            location: j,
                                        }),
                                        (0, m.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("547899"),
                                                n.e("782906"),
                                                n.e("375091"),
                                                n.e("656963"),
                                                n.e("408891"),
                                                n.e("883952"),
                                                n.e("66580"),
                                                n.e("480436"),
                                                n.e("50342"),
                                                n.e("420643"),
                                                n.e("98913"),
                                                n.e("429143"),
                                            ]).then(n.bind(n, 445002));
                                            return (n) => (0, l.jsx)(t, { guildId: e.guild_id, ...n });
                                        }));
                                },
                                style: O,
                                children: [
                                    !S && (0, l.jsx)("div", { className: e9.fw }),
                                    (0, l.jsx)("div", {
                                        className: e9.P0,
                                        children: (0, l.jsx)(e$.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: e9.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(eT.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: ef.intl.string(ef.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case ee.op.STICKER: {
                    let a = t && null != v && (0, ec.FD)(e.sticker) && !v.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...L, key: e.sticker.id },
                        (0, l.jsxs)(f.D, {
                            className: r()(e9.yI, C, { [e9.PV]: u, [e9.TV]: M === e.sticker.id }),
                            innerRef: I,
                            tabIndex: b,
                            onFocus: R ?? E,
                            onMouseMove: E,
                            onClick: function (t) {
                                if (h?.current === !0 || p?.current === !0) return;
                                let n = t.altKey;
                                n && e.type === ee.op.STICKER && !(0, ec.o1)(e.sticker.id) && w(e.sticker.id),
                                    x?.(e, n);
                            },
                            onContextMenu: function (e) {
                                (0, e5.L3)(e, async () => {
                                    let { default: e } = await Promise.all([n.e("904774"), n.e("446132")]).then(
                                        n.bind(n, 233503),
                                    );
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                            style: O,
                            "data-type": en.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, l.jsx)(e3.A, { children: (0, ed.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !S && (0, l.jsx)("div", { className: e9.fw }),
                                        (0, l.jsx)(ed.A, {
                                            className: r()(e9.SI, {
                                                [e9.ot]:
                                                    S && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [e9.Q$]: c,
                                                [e9.No]: T && !(0, X.G7)(e.sticker, _, N),
                                            }),
                                            disableAnimation: !u && !s,
                                            enlargeOnInteraction: S,
                                            isInteracting: u,
                                            maskAsset: u,
                                            sticker: e.sticker,
                                            size: y,
                                        }),
                                        a ? (0, l.jsx)(e4, { size: 20 }) : null,
                                    ],
                                }),
                            ],
                        }),
                    );
                }
            }
        }),
    });
});
var tt = n(22234),
    tn = n(911385);
let tl = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    ti = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    ts = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    tr = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    ta = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    to = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tu = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tc = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    td = (0, z.xI)(w.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    th = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tm = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tf = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tp = [ts, ta, to, tu],
    tg = [tr, ta, to, tu],
    tx = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tA = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tC(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: tt.yB,
        children: tA.map((e) =>
            (0, l.jsx)(
                f.D,
                {
                    className: tt.x_,
                    onClick: () => t(e),
                    children: (0, l.jsx)(eT.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
let tE = i.forwardRef(function (e, t) {
        let {
                collapsedStickersCategories: n,
                gridWidth: s,
                filteredStickers: r,
                getStickerItemProps: a,
                getStickerRowProps: o,
                gutterWidth: u,
                stickerPadding: c,
                isUsingKeyboardNavigation: h,
                onSelectSticker: m,
                rowCount: f,
                rowCountBySection: p,
                stickersCategories: g,
                stickersGrid: x,
                channel: A,
            } = e,
            C = th + 2 * c,
            E = i.useRef(!1),
            I = i.useRef(null),
            [y, v] = U.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], M.x),
            { analyticsLocations: S } = (0, D.Ay)(P.A.STICKER_PICKER),
            N = (0, G.RQ)((e) => e.searchQuery),
            _ = (0, d.bG)([b.A], () => b.A.getPremiumPacks()),
            {
                renderRow: T,
                renderSection: j,
                renderSectionFooter: R,
                sectionFooterHeight: O,
                renderSectionHeader: w,
                sectionHeaderHeight: L,
            } = (function (e) {
                let {
                        collapsedStickersCategories: t,
                        gridWidth: n,
                        stickerPadding: s,
                        onSelectSticker: r,
                        getStickerItemProps: a,
                        getStickerRowProps: o,
                        gutterWidth: u,
                        inspectedStickerPosition: c,
                        isScrolling: h,
                        isUsingKeyboardNavigation: m,
                        stickersGrid: f,
                        stickersCategories: p,
                        filteredStickers: g,
                        ownedStickerPacks: x,
                        channel: A,
                    } = e,
                    C = (0, k.p)(),
                    E = (0, d.bG)([W.default], () => W.default.getCurrentUser()),
                    { handleStickerInspect: I, handleSelect: y } = (function (e) {
                        let { onSelectSticker: t, channel: n, currentUser: l } = e,
                            s = (0, k.p)(),
                            r = (0, G.RQ)((e) => e.searchQuery);
                        return {
                            handleStickerInspect: i.useCallback((e) => {
                                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: l } = e;
                                U.bM.setActiveCategoryIndex(l),
                                    U.bM.setInspectedExpressionPosition(n, t, en.t.MOUSE_EVENT),
                                    e.type === ee.op.STICKER && U.bM.setSearchPlaceholder(e.sticker.name);
                            }, []),
                            handleSelect: i.useCallback(
                                (e, i) => {
                                    if (e.type !== ee.op.STICKER) return;
                                    let { sticker: a } = e;
                                    if (null == a) return;
                                    let o = {
                                        ...s.location,
                                        object:
                                            "" === r ? eh.ZSU.STICKER_PICKER_VIEW_ALL : eh.ZSU.STICKER_SEARCH_VIEW_ALL,
                                    };
                                    if (null != a && !(0, X.G7)(a, l, n)) {
                                        let e = (0, ec.Xw)(a);
                                        (0, X.W$)(a, l, n) === X.Ux.SENDABLE_WITH_PREMIUM && $(!0),
                                            e && X.Ux.SENDABLE_WITH_BOOSTED_GUILD;
                                        return;
                                    }
                                    i
                                        ? (0, ec.o1)(a.id)
                                            ? (0, eF.vr)(a.id)
                                            : ((0, Q.Dt)({ sticker: a, location: { ...o, object: eh.ZSU.STICKER } }),
                                              (0, eF.uK)(a.id))
                                        : t(e);
                                },
                                [s.location, r, l, n, t],
                            ),
                        };
                    })({ onSelectSticker: r, channel: A, currentUser: E }),
                    [v, S] = i.useState(!1),
                    N = i.useCallback((e) => {
                        B.tP.updateSetting(Array.from(e));
                    }, []),
                    _ = i.useCallback(
                        (e) => {
                            let t = f[e];
                            return null != t
                                ? (0, l.jsx)(
                                      te,
                                      {
                                          getStickerItemProps: a,
                                          getStickerRowProps: o,
                                          gutterWidth: u,
                                          inspectedStickerPosition: c,
                                          isScrolling: h,
                                          isUsingKeyboardNavigation: m,
                                          onInspect: I,
                                          onSelect: y,
                                          rowIndex: e,
                                          stickerClassName: tt.yI,
                                          stickerDescriptors: t,
                                          stickerSize: n > tl ? th : tm,
                                          stickerPadding: s,
                                          preferAnimation: n <= ti,
                                          ownedStickerPacks: x,
                                          isDisplayingIndividualStickers: !0,
                                          channel: A,
                                          currentUser: E,
                                      },
                                      e,
                                  )
                                : null;
                        },
                        [f, a, o, u, c, h, m, I, y, n, s, x, A, E],
                    ),
                    T = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
                    j = i.useCallback(
                        function (e) {
                            let { isStickerPack: n = !0 } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                l = new Set(t),
                                i = t.has(e);
                            i ? l.delete(e) : l.add(e),
                                K.default.track(eh.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                    location: C?.location,
                                    tab: em.kx.STICKER,
                                    collapsed: !i,
                                    sticker_pack_id: n ? e : null,
                                }),
                                N(l);
                        },
                        [C, t, N],
                    ),
                    R = i.useCallback(
                        (e) => {
                            let n = p[e];
                            if (null != g) {
                                let { sendable: t, sendableWithPremium: n } = g;
                                if (0 === e && t.length > 0) return null;
                                let i = t.length > 0 && n.length > 0;
                                return (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        i
                                            ? (0, l.jsx)("div", { className: tt.yF, children: (0, l.jsx)(eD.c, {}) })
                                            : null,
                                        (0, l.jsx)(
                                            eV.A,
                                            {
                                                className: tt.jH,
                                                "aria-label": ef.intl.string(ef.t.wbfJFh),
                                                children: ef.intl.string(ef.t["05Z/0l"]),
                                            },
                                            "stickers-you-might-like-header",
                                        ),
                                    ],
                                });
                            }
                            switch (n.type) {
                                case ee.Z2.FAVORITE:
                                    return (0, l.jsx)(
                                        eV.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": ef.intl.formatToPlainString(ef.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, l.jsx)(el.StarIcon, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => j(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case ee.Z2.RECENT:
                                    return (0, l.jsx)(
                                        eV.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": ef.intl.formatToPlainString(ef.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, l.jsx)(ei.ClockIcon, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => j(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case ee.Z2.GUILD:
                                case ee.Z2.EMPTY_GUILD_UPSELL: {
                                    let e = eu.A.getGuild(n.id);
                                    if (null == e) return null;
                                    return (0, l.jsx)(
                                        eV.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": ef.intl.formatToPlainString(ef.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, l.jsx)(ea.A, { guild: e, height: 16, width: 16 }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => j(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                                case ee.Z2.PACK: {
                                    let e = b.A.getStickerPack(n.id);
                                    if (null == e) return null;
                                    return (0, l.jsx)(
                                        eV.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": ef.intl.formatToPlainString(ef.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, l.jsx)(ed.A, {
                                                disableAnimation: !0,
                                                size: 12,
                                                sticker: (0, ec.Id)(e),
                                            }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => j(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                            }
                        },
                        [t, p, j, g],
                    ),
                    O = i.useCallback(
                        (e) => {
                            if (null != g) {
                                let { sendable: t, sendableWithPremium: n } = g;
                                return 0 === e && t.length > 0 ? 0 : td + (t.length > 0 && n.length > 0 ? tc : 0);
                            }
                            return td;
                        },
                        [g],
                    );
                return {
                    renderRow: _,
                    renderSection: T,
                    renderSectionHeader: R,
                    sectionHeaderHeight: O,
                    renderSectionFooter: i.useCallback(
                        (e) => {
                            let n = p[e],
                                i = t.has(n.id);
                            return n.type !== ee.Z2.EMPTY_GUILD_UPSELL || null != g || i
                                ? null
                                : (0, l.jsx)(
                                      eJ,
                                      {
                                          className: tt.Ij,
                                          guildId: n.id,
                                          channel: A,
                                          shouldTrackUpsellViewed: !v,
                                          setTrackedUpsellViewed: S,
                                      },
                                      `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                  );
                        },
                        [p, t, g, A, v],
                    ),
                    sectionFooterHeight: i.useCallback(
                        (e) => {
                            let n = p[e],
                                l = t.has(n.id);
                            return n.type !== ee.Z2.EMPTY_GUILD_UPSELL || l ? 0 : tx;
                        },
                        [p, t],
                    ),
                };
            })({
                collapsedStickersCategories: n,
                gridWidth: s,
                stickerPadding: c,
                stickersCategories: g,
                stickersGrid: x,
                isScrolling: E,
                isUsingKeyboardNavigation: h,
                onSelectSticker: m,
                getStickerItemProps: a,
                getStickerRowProps: o,
                gutterWidth: u,
                inspectedStickerPosition: v,
                filteredStickers: r,
                ownedStickerPacks: i.useMemo(() => new Set(_.map((e) => e.id)), [_]),
                channel: A,
            }),
            F = (0, V.Fk)({
                activeCategoryIndex: y,
                isScrolling: E,
                listRef: I,
                onActiveCategoryIndexChange: U.bM.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: N,
            });
        return (
            (0, V.FV)({ searchQuery: N, activeCategoryIndex: y, listRef: I }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return I.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => I.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => I.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return I.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return I.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return I.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return I.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return I.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, l.jsx)(D.f5, {
                value: S,
                children: (0, l.jsxs)("div", {
                    className: tt.iE,
                    children: [
                        null != r && 0 === r.sendable.length && 0 === r.sendableWithPremium.length
                            ? (0, l.jsx)(eU.A, {
                                  message: ef.intl.string(ef.t["zc+LQd"]),
                                  className: tt.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: tn,
                                  suggestions: (0, l.jsx)(tC, { onSuggestionClick: (e) => (0, G.Ri)(e, !0) }),
                              })
                            : (0, l.jsx)(eG.A, {
                                  role: "none presentation",
                                  listPadding: null != r ? tg : tp,
                                  onScroll: F,
                                  renderRow: T,
                                  renderSection: null == r ? j : void 0,
                                  renderSectionHeader: w,
                                  renderSectionFooter: R,
                                  rowCount: f,
                                  rowCountBySection: p,
                                  rowHeight: s > tl ? C + tf : tm + 2 * c + tf,
                                  sectionHeaderHeight: L,
                                  sectionFooterHeight: O,
                                  stickyHeaders: !0,
                                  ref: I,
                              }),
                        (0, l.jsx)(e2, { stickersGrid: x }),
                    ],
                }),
            })
        );
    }),
    tI = (0, n(945810).mj)({
        name: "2026-02-sticker-padding",
        kind: "user",
        defaultConfig: { padding: 2 },
        variations: { 1: { padding: 1 } },
    });
var ty = n(602034),
    tv = n(892547),
    tS = n(447285);
let tN = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: s, channel: r } = e,
        a = (0, j.ZO)(r),
        o = i.useRef(null),
        { searchQuery: u, isSearchSuggestion: c } = (0, G.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            M.x,
        ),
        d = U.bM.useStore((e) => e.searchPlaceholder),
        [h, m] = U.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], M.x),
        f = i.useCallback(
            (e) => {
                U.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    U.bM.setInspectedExpressionPosition(0, 0),
                    U.bM.setSearchPlaceholder(null),
                    (0, G.Ri)(e),
                    s.current?.scrollTo(0);
            },
            [s],
        ),
        p = i.useCallback(() => {
            f("");
        }, [f]);
    return (
        i.useImperativeHandle(t, () => ({ focus: () => o.current?.focus() })),
        i.useLayoutEffect(() => {
            c && o.current?.focus();
        }, [c]),
        (0, l.jsx)("div", {
            className: tS.i,
            children: (0, l.jsx)(tv.I, {
                autoFocus: a,
                disabled: !a,
                query: u,
                ref: o,
                placeholder: d ?? (a ? ef.intl.string(ef.t.dt5h1C) : ef.intl.string(ef.t["Pck/4U"])),
                onClear: p,
                onKeyDown: n,
                onChange: f,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": ew.lq,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, ty.Aq)(ew.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
});
n(321073);
var t_ = n(237116),
    tT = n(789645),
    tj = n(964486),
    tb = n(158045),
    tR = n(274157),
    tO = n(939383);
function tM() {
    return $(!1);
}
function tw(e) {
    let { onLearnMore: t } = e,
        { analyticsLocations: n } = (0, D.Ay)(P.A.PREMIUM_UPSELL);
    (0, i.useEffect)(() => {
        K.default.track(eh.HAw.PREMIUM_UPSELL_VIEWED, {
            location_section: eh.JJy.STICKER_PICKER_UPSELL,
            type: eL.e.STICKER_PICKER_UPSELL,
            location_stack: n,
        });
    }, [n]);
    let s = (0, i.useRef)(null);
    (0, tj.Ay)(() => {
        s.current?.focus();
    });
    let a = (0, H.V)(),
        o = (0, ej.O)(),
        u = a?.subscriptionTrial?.skuId === eL.pe.TIER_0,
        c = null != a || null != o;
    return (0, l.jsxs)("div", {
        ref: s,
        tabIndex: -1,
        "aria-label": ef.intl.string(ef.t.jJG1pl),
        className: r()(tR.VL, { [tR.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eb.Ay, {
                      trialOffer: a,
                      discountOffer: o,
                      onClose: tM,
                      type: eL.e.STICKER_PICKER_UPSELL,
                      subscriptionTier: a?.subscriptionTrial?.skuId ?? eL.pe.TIER_2,
                      children: u
                          ? ef.intl.format(ef.t.MAGagw, {
                                planName: (0, tb.RH)(eL.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : ef.intl.format(ef.t.jt7JX6, { onClick: t }),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: tR.Tn, src: tO, alt: ef.intl.string(ef.t.do7AoM) }),
                          (0, l.jsx)(eT.E, {
                              className: tR.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: ef.intl.string(ef.t.jJG1pl),
                          }),
                          (0, l.jsx)(eT.E, {
                              className: tR.GR,
                              variant: "text-md/normal",
                              children: ef.intl.format(ef.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eM, { analyticsSection: eh.JJy.EXPRESSION_PICKER }),
            (0, l.jsx)(f.D, {
                className: tR.kz,
                onClick: tM,
                "aria-label": ef.intl.string(ef.t.cpT0Cq),
                children: (0, l.jsx)(tT.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var tL = n(156418);
let tk = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tP = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tD = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tU = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tG = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    tV = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tF = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tH = O()(Q.Qz, 200),
    tB = O()(Q.HA, 200),
    tW = i.forwardRef(function (e, t) {
        let { containerWidth: s, channel: r, onSelectSticker: a, closePopout: o } = e,
            u = tI.useConfig({ location: "StickerPicker" }).padding,
            { location: c } = (0, k.p)(),
            { analyticsLocations: h } = (0, D.Ay)(P.A.STICKER_PICKER),
            f = (0, H.V)()?.subscriptionTrial != null,
            p = i.useRef(null),
            g = i.useRef(null),
            x = i.useRef(null),
            A = J((e) => e.showPremiumUpsell),
            [C, E] = (0, G.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], M.x),
            I = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: ep }));
        let y = (0, j.pD)(r),
            v = 0 === y.filter((e) => e.type !== ee.Z2.EMPTY_GUILD_UPSELL).length,
            S = (0, V.oV)({
                gridWrapperRef: p,
                containerWidth: s,
                showingEmptyState: v,
                listPaddingLeft: tP,
                listScrollbarWidth: 8,
            }),
            N = B.tP.useSetting(),
            _ = i.useMemo(() => new Set(N), [N]),
            T = (0, d.bG)([W.default], () => W.default.getCurrentUser()),
            R = i.useMemo(
                () =>
                    (function (e, t, n) {
                        if ("" === e) return null;
                        let l = [],
                            i = [];
                        return (
                            t_.Ay.queryStickers([e], !0)
                                .map((e) => {
                                    let { sticker: t } = e;
                                    return t;
                                })
                                .forEach((e) => {
                                    let s = (0, X.W$)(e, t, n);
                                    s === X.Ux.SENDABLE ? l.push(e) : s === X.Ux.SENDABLE_WITH_PREMIUM && i.push(e);
                                }),
                            { sendable: l, sendableWithPremium: i }
                        );
                    })(C, T, r),
                [C, T, r],
            ),
            O = (0, j.Gc)(),
            w = (0, j.UT)(),
            L = (0, d.cf)([b.A], () => b.A.getAllGuildStickers()),
            { sendable: z = [], sendableWithPremium: Z = [] } = R ?? {},
            Y = z.length + Z.length,
            q = i.useCallback(
                (e) => {
                    "" === C ? (0, Q.ry)(e) : (0, Q.nQ)(e, C, Y), a(e.sticker, ee.D6.STICKER_PICKER);
                },
                [a, C, Y],
            ),
            el = null != S && S > tk,
            {
                rowCount: ei,
                rowCountBySection: es,
                stickersGrid: er,
                gutterWidth: ea,
                columnCounts: eo,
            } = (0, j._c)({
                filteredStickers: R,
                stickersCategories: y,
                collapsedStickersCategories: _,
                listWidth: S,
                listPaddingRight: tD,
                stickerNodeMargin: el ? tU : tG,
                stickerNodeWidth: el ? tV + 2 * u : tF + 2 * u,
            }),
            {
                getItemProps: eu,
                getRowProps: ec,
                gridContainerProps: ed,
                handleGridContainerKeyDown: em,
                isUsingKeyboardNavigation: ef,
            } = (function (e) {
                let {
                        columnCounts: t,
                        stickersGrid: n,
                        stickersListRef: l,
                        store: s,
                        gridNavigatorId: r,
                        setInspectedStickerPosition: a,
                        onGridItemSelect: o,
                    } = e,
                    u = (0, k.p)(),
                    c = i.useCallback(
                        (e) => {
                            o(e, u);
                        },
                        [o, u],
                    ),
                    d = i.useCallback(
                        (e, t) => {
                            a(e, t, en.t.GRID_NAVIGATOR_EVENT);
                        },
                        [a],
                    ),
                    {
                        gridDispatch: h,
                        getItemProps: m,
                        getRowProps: f,
                        gridContainerProps: p,
                        handleGridContainerKeyDown: g,
                        isUsingKeyboardNavigation: x,
                    } = (0, V.Ff)({
                        columnCounts: t,
                        gridNavigatorId: r,
                        itemGrid: n,
                        itemList: l,
                        onGridNavigatorItemSelect: c,
                        onGridNavigatorPositionChange: d,
                    });
                return (
                    i.useEffect(
                        () =>
                            s.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: l } = e;
                                    l !== en.t.GRID_NAVIGATOR_EVENT &&
                                        h({ type: et.n.SET_FOCUSED_POSITION, x: t, y: n });
                                },
                            ),
                        [h, s],
                    ),
                    {
                        getItemProps: m,
                        getRowProps: f,
                        gridContainerProps: p,
                        handleGridContainerKeyDown: g,
                        isUsingKeyboardNavigation: x,
                    }
                );
            })({
                columnCounts: eo,
                stickersListRef: g,
                stickersGrid: er,
                onGridItemSelect: i.useCallback(
                    (e, t) => {
                        let { location: i } = t;
                        switch (e.type) {
                            case ee.op.CREATE_STICKER:
                                K.default.track(eh.HAw.OPEN_MODAL, { type: eh.JJy.CREATE_STICKER_MODAL, location: c }),
                                    (0, m.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("547899"),
                                            n.e("782906"),
                                            n.e("375091"),
                                            n.e("656963"),
                                            n.e("408891"),
                                            n.e("883952"),
                                            n.e("66580"),
                                            n.e("480436"),
                                            n.e("50342"),
                                            n.e("420643"),
                                            n.e("98913"),
                                            n.e("429143"),
                                        ]).then(n.bind(n, 445002));
                                        return (n) => (0, l.jsx)(t, { guildId: e.guild_id, ...n });
                                    });
                                break;
                            case ee.op.STICKER: {
                                if (null == e.sticker) break;
                                let t = (0, X.W$)(e.sticker, T, r);
                                t === X.Ux.SENDABLE ? q(e) : t === X.Ux.SENDABLE_WITH_PREMIUM && $(!0);
                            }
                        }
                    },
                    [c, T, r, q],
                ),
                store: U.bM,
                setInspectedStickerPosition: U.bM.setInspectedExpressionPosition,
                gridNavigatorId: ew.lq,
            });
        function ep() {
            let e = r.getGuildId(),
                t = [];
            null !== e && (t = b.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            null != L &&
                [...L.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, Q.p4)({
                    containerWidth: s,
                    favoriteStickers: O,
                    frequentlyUsedStickers: w,
                    guildStickers: t,
                    stickersTotal: n,
                });
        }
        i.useEffect(() => U.bM.resetStoreState, []),
            i.useEffect(() => {
                "" === I.current && "" !== C && (0, Q.Fg)(), (I.current = C);
            }, [C]),
            i.useEffect(() => {
                0 === Y ? tH(C) : tB(C, Y, E);
            }, [C, Y, E]),
            i.useLayoutEffect(() => {
                x.current?.focus();
            }, []);
        let eg = i.useCallback(() => {
            o(),
                K.default.track(eh.HAw.PREMIUM_PROMOTION_OPENED, { location_section: eh.JJy.STICKER_PICKER_UPSELL }),
                (0, F.e)();
        }, [o]);
        return (0, l.jsxs)(D.f5, {
            value: h,
            children: [
                !(f && v) &&
                    (0, l.jsx)("div", {
                        className: tL.wx,
                        children: (0, l.jsx)(tN, { ref: x, onKeyDown: em, stickersListRef: g, channel: r }),
                    }),
                v
                    ? (0, l.jsx)(eP, { className: tL.p$, onClose: o })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  ref: p,
                                  className: tL.AD,
                                  id: ew.lq,
                                  ...ed,
                                  children:
                                      null != S
                                          ? (0, l.jsx)(tE, {
                                                ref: g,
                                                collapsedStickersCategories: _,
                                                filteredStickers: R,
                                                getStickerItemProps: eu,
                                                getStickerRowProps: ec,
                                                gridWidth: S,
                                                gutterWidth: ea,
                                                stickerPadding: u,
                                                isUsingKeyboardNavigation: ef,
                                                onSelectSticker: q,
                                                rowCount: ei,
                                                rowCountBySection: es,
                                                stickersCategories: y,
                                                stickersGrid: er,
                                                channel: r,
                                            })
                                          : null,
                              }),
                              (0, l.jsx)(eN, { stickersListRef: g, channel: r }),
                          ],
                      }),
                A && (0, l.jsx)(tw, { onLearnMore: eg }),
            ],
        });
    }),
    tK = i.forwardRef(function (e, t) {
        return (
            (0, j.XQ)(),
            (0, l.jsx)("div", {
                className: tL.iE,
                id: ew.GX,
                "aria-labelledby": ew.LD,
                role: "tabpanel",
                children: e.isLoading ? (0, l.jsx)(L.y, { className: tL.Mz }) : (0, l.jsx)(tW, { ...e, ref: t }),
            })
        );
    });
var tz = n(742023),
    tZ = n(712687),
    tY = n(625494),
    tq = n(49999),
    tJ = n(732139),
    t$ = n(307731),
    tX = n(521352);
let tQ = 498 + tJ.as.MEDIUM,
    t0 = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: s = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(f.D, {
            role: "tab",
            autoFocus: s,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                E.Ay.trackWithMetadata(eh.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, G.U)(i);
            },
            "aria-current": t ? "page" : void 0,
            className: r()(n, tX.oi, tX.pc, { [tX.Mv]: t }),
        });
    }),
    t1 = i.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: s,
                onSelectEmoji: a,
                onSelectSticker: f,
                onSelectSound: R,
                channel: O,
                type: M,
                position: w,
                align: L,
                positionLayerClassName: k,
                closeOnModalOuterClick: P = !1,
                parentModalKey: D,
            } = e,
            U = i.useRef(null),
            V = i.useRef(!1),
            F = i.useRef(null),
            H = i.useRef(null),
            { drawerWidth: B, handleDrawerResizeHandleMouseDown: W } = (function (e) {
                let { positionContainerRef: t, drawerRef: n, orientation: l } = e,
                    s = (0, d.bG)([tz.Ay], () => tz.Ay.expressionPickerWidth),
                    [r, a] = i.useState(window.innerWidth),
                    [u, c] = i.useState(s ?? em.wp.MIN),
                    h = i.useMemo(() => {
                        switch (u) {
                            case em.wp.MIN:
                                return 498;
                            case em.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    m = i.useCallback(
                        (e) => {
                            let t = e >= r ? em.wp.MAX : e <= 498 ? em.wp.MIN : e;
                            null == t && null != n.current && (n.current.style.width = ""),
                                x.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                c(t);
                        },
                        [n, r],
                    ),
                    f = (0, C.A)({
                        initialElementDimension: h,
                        maxDimension: r,
                        minDimension: 498,
                        resizableDomNodeRef: n,
                        onElementResize: m,
                        orientation: l,
                    });
                return (
                    i.useEffect(() => {
                        let e = o().debounce(() => {
                            null != t.current && a(t.current.offsetWidth);
                        }, 500);
                        return (
                            window.addEventListener("resize", e),
                            () => {
                                window.removeEventListener("resize", e);
                            }
                        );
                    }, [t]),
                    i.useLayoutEffect(() => {
                        null != t.current && a(t.current.offsetWidth);
                    }, [t]),
                    {
                        drawerWidth: h,
                        handleDrawerResizeHandleMouseDown: i.useCallback(
                            (e) => {
                                e.stopPropagation(), null != t.current && a(t.current.offsetWidth), f(e);
                            },
                            [t, f],
                        ),
                    }
                );
            })({
                positionContainerRef: U,
                drawerRef: H,
                orientation: "left" === L ? C.R.HORIZONTAL_RIGHT : C.R.HORIZONTAL_LEFT,
            }),
            K = (0, G.RQ)((e) => e.activeView),
            z = (0, j.ZO)(O),
            { renderWindow: Z, windowDispatch: Y } = i.useContext(N.Ay),
            q = (0, d.bG)([b.A], () => !b.A.hasLoadedStickerPacks),
            J = (0, _.tj)({ location: "expression_picker" }),
            $ = (0, d.bG)([tZ.A], () => tZ.A.isOpen()),
            X = null != D,
            Q = (0, m.useIsModalAtTop)(D ?? ""),
            ee = M.gifs?.allowSending && !u.Fr && null != s,
            et = M.stickers?.allowSending && null != f,
            en = !M.expressionPicker?.onlyEmojis && (ee || et),
            el = i.useCallback(
                (e) => {
                    if ((!X && (0, m.hasAnyModalOpen)()) || (X && !(Q && P)) || $ || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + em.VQ)) return;
                    for (; (0, c.vq)(t); ) {
                        if (
                            t === H.current ||
                            "true" === t.getAttribute("data-menu-item") ||
                            "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                            "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                        )
                            return;
                        t = t.parentNode;
                    }
                    (0, G.v8)();
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && tY._.dispatchToLastSubscribed(eh.jej.TEXTAREA_FOCUS);
                },
                [P, Q, X, $],
            ),
            ei = i.useCallback(() => {
                (0, G.v8)();
            }, []);
        i.useLayoutEffect(() => {
            function e() {
                K === em.kx.GIF && (0, G.v8)();
            }
            return (
                Z.addEventListener("mousedown", el),
                Z.addEventListener("contextmenu", el),
                Y.subscribe(eh.jej.POPOUT_CLOSE, ei),
                tY._.subscribe(eh.jej.CLOSE_GIF_PICKER, e),
                () => {
                    Z.removeEventListener("mousedown", el),
                        Z.removeEventListener("contextmenu", el),
                        Y.unsubscribe(eh.jej.POPOUT_CLOSE, ei),
                        tY._.unsubscribe(eh.jej.CLOSE_GIF_PICKER, e);
                }
            );
        }, [K, ei, el, Z, Y]),
            (0, p.tj)(U);
        let [es, er] = (0, I.kn)(J ? [h.M.SOUNDMOJI_BADGE] : [], void 0, !1),
            [ea, eo] = i.useState(!1);
        i.useEffect(() => {
            K === em.kx.SOUNDBOARD && eo(!0);
        }, [K]),
            i.useEffect(
                () => () => {
                    ea && er(tq.i.TAKE_ACTION);
                },
                [ea, er],
            ),
            i.useEffect(() => {
                (0, G.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!X && (0, m.hasAnyModalOpen)()) || (X && !Q)) && (0, G.v8)();
            }, [Q, X]),
            i.useEffect(() => {
                null != H.current &&
                    !V.current &&
                    (K === em.kx.EMOJI
                        ? F?.current?.onPickerOpen != null && (F?.current?.onPickerOpen(), (V.current = !0))
                        : K === em.kx.STICKER
                          ? F?.current?.onPickerOpen == null || q || (F?.current?.onPickerOpen(), (V.current = !0))
                          : (E.Ay.trackWithMetadata(eh.HAw.EXPRESSION_PICKER_OPENED, {
                                width: H.current.offsetWidth,
                                tab: K,
                                badged: !1,
                            }),
                            (V.current = !0)));
            });
        let eu = i.useCallback((e, t) => R?.(e, "emoji_picker", t), [R]),
            ec = i.useCallback((e, t) => R?.(e, "soundboard_picker", t), [R]),
            ed = M.soundmoji?.allowSending === !0 && null != R,
            ep = "left" === L ? "right" : "left",
            eg = null != k ? k : "left" === L ? tX.sj : tX.Jg,
            ex = ee
                ? (0, l.jsx)(t0, {
                      id: tJ.g9,
                      "aria-controls": tJ.ni,
                      "aria-selected": K === em.kx.GIF,
                      isActive: K === em.kx.GIF,
                      viewType: em.kx.GIF,
                      children: ef.intl.string(ef.t["6gUTsS"]),
                  })
                : null,
            eA = et
                ? (0, l.jsx)(t0, {
                      id: ew.LD,
                      "aria-controls": ew.GX,
                      "aria-selected": K === em.kx.STICKER,
                      isActive: K === em.kx.STICKER,
                      autoFocus: !z,
                      viewType: em.kx.STICKER,
                      children: (0, l.jsx)("div", { className: tX.dG, children: ef.intl.string(ef.t.nf1s3u) }),
                  })
                : null,
            eC = (0, l.jsx)(t0, {
                id: tJ.k1,
                "aria-controls": tJ.Do,
                "aria-selected": K === em.kx.EMOJI,
                isActive: K === em.kx.EMOJI,
                viewType: em.kx.EMOJI,
                children: ef.intl.string(ef.t.Xu3wE3),
            });
        return (0, l.jsx)(A.A, {
            section: eh.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(S.nE, {
                className: r()(tX.T8, eg),
                targetRef: t,
                position: w,
                align: L,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: r()(tX.V6, { [tX.D0]: !en }),
                        ref: U,
                        role: "dialog",
                        "aria-label": ef.intl.string(ef.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: tX.jP,
                                  style: { width: null == B ? void 0 : B, [L]: 0 },
                                  ref: H,
                                  children: [
                                      (0, l.jsx)("div", { className: tX.Di, onMouseDown: W, style: { [ep]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: tX.FG,
                                          children: [
                                              en
                                                  ? (0, l.jsx)("nav", {
                                                        className: tX.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: tX.CT,
                                                            role: "tablist",
                                                            "aria-label": ef.intl.string(ef.t["2j4Vgd"]),
                                                            children: [
                                                                ex,
                                                                eA,
                                                                eC,
                                                                J &&
                                                                    ed &&
                                                                    (0, l.jsx)(t0, {
                                                                        id: tJ.N6,
                                                                        "aria-controls": tJ.AA,
                                                                        "aria-selected": K === em.kx.SOUNDBOARD,
                                                                        isActive: K === em.kx.SOUNDBOARD,
                                                                        viewType: em.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: tX.sd,
                                                                            children: [
                                                                                ef.intl.string(ef.t.EHlAMc),
                                                                                null != es &&
                                                                                    (0, l.jsx)(g.Lp, {
                                                                                        text: ef.intl.string(
                                                                                            ef.t.y2b7CA,
                                                                                        ),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              K === em.kx.STICKER && et
                                                  ? (0, l.jsx)(tK, {
                                                        isLoading: q,
                                                        channel: O,
                                                        containerWidth: B,
                                                        onSelectSticker: f,
                                                        closePopout: ei,
                                                        ref: (e) => {
                                                            F.current = e;
                                                        },
                                                    })
                                                  : null,
                                              K === em.kx.GIF && ee
                                                  ? (0, l.jsx)(v.A, {
                                                        onSelectGIF: s,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              K === em.kx.EMOJI || M.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(y.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: O,
                                                        containerWidth: B,
                                                        emojiSize: null != B && B < tQ ? tJ.as.MEDIUM : tJ.as.LARGE,
                                                        pickerIntention:
                                                            M.expressionPicker?.emojiIntention ??
                                                            t$.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == O || null != O.guild_id,
                                                        closePopout: ei,
                                                        onSelectEmoji: a,
                                                        onSelectSoundmoji: eu,
                                                        ref: (e) => {
                                                            F.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            M.soundmoji?.allowSending === !0,
                                                    })
                                                  : null,
                                              K === em.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: tX.z,
                                                        children: (0, l.jsx)(T.A, {
                                                            guildId: O.guild_id,
                                                            channel: O,
                                                            containerWidth: B,
                                                            onClose: ei,
                                                            onSelect: ec,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: tX.BG, children: e }),
                                                            inExpressionPicker: !0,
                                                            shouldValidateSelectedSound: !0,
                                                        }),
                                                    })
                                                  : null,
                                          ],
                                      }),
                                  ],
                              })
                            : null,
                    });
                },
            }),
        });
    });
