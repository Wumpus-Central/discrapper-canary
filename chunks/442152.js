"use strict";
n.d(t, { A: () => t3 });
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
    E = n(761929),
    C = n(95561),
    I = n(131607),
    y = n(267889),
    S = n(813703),
    N = n(750506),
    v = n(267102),
    _ = n(926972),
    j = n(641403),
    T = n(256449),
    b = n(750385),
    R = n(649852),
    O = n.n(R),
    M = n(462180),
    L = n(319060),
    k = n(289873),
    w = n(212245),
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
    eo = n(88218),
    eu = n(71393),
    ec = n(68935),
    ed = n(148355),
    eh = n(652215),
    em = n(698279),
    ef = n(375708),
    ep = n(161975);
let eg = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    ex = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    eA = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eE = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    eC = (0, z.xI)(L.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eI = (0, z.xI)(L.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ey = [eg, eg, eg, eg],
    eS = (ex + eA) * 2 + eg,
    eN = eC + 2 * eI,
    ev = (e) => {
        let { stickersListRef: t, channel: n } = e,
            s = i.useRef(null),
            [a, o] = i.useState(!0),
            u = U.bM.useStore((e) => e.activeCategoryIndex),
            c = (0, T.pD)(n),
            {
                firstStandardStickerCategoryIndex: d,
                firstStandardStickerCategoryOffsetTop: h,
                guildCategoryCount: m,
                hasFirstPartyStickerPacks: p,
            } = i.useMemo(() => {
                let e = c.filter((e) => e.type === ee.Z2.GUILD).length,
                    t = e + +(c[0]?.type === ee.Z2.RECENT) + +(c[0]?.type === ee.Z2.FAVORITE),
                    n = t * (ex + eA) - eA + eN;
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
                    u = (0, w.p)(),
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
                                                height: eE,
                                                width: eE,
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
                                                height: eE,
                                                width: eE,
                                            }),
                                        }),
                                    },
                                    "recent",
                                );
                            let g = t === s,
                                x = n[s],
                                A = n[s + 1],
                                E = null != A && x.type === ee.Z2.GUILD && A.type !== ee.Z2.GUILD,
                                C = x.type === ee.Z2.PACK,
                                I = "",
                                y = null;
                            if (x.type === ee.Z2.GUILD || x.type === ee.Z2.EMPTY_GUILD_UPSELL) {
                                let e = eu.A.getGuild(x.id);
                                null != e &&
                                    ((o = e.id), (I = e.name), (y = (0, l.jsx)(ea.A, { guild: e, isSelected: g })));
                            } else if (C) {
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
                                                    className: r()(ep._0, { [ep.ND]: C, [ep.Ms]: !c && g && C }),
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
                                        E ? (0, l.jsx)("hr", { className: ep.ny }, "separator") : null,
                                    ],
                                },
                                x.id,
                            );
                        },
                        [t, u, c, n],
                    ),
                    h = i.useCallback((e, t) => (t ? eS : 0), []);
                return {
                    getScrollOffsetForIndex: h,
                    renderCategoryListItem: d,
                    rowHeight: i.useCallback(
                        (e, t) => {
                            let l = n[t],
                                i = n[t + 1];
                            return ex + (null != i && l.type === ee.Z2.GUILD && i.type !== ee.Z2.GUILD ? eN : eA);
                        },
                        [n],
                    ),
                    onScroll: i.useCallback(
                        (e) => {
                            let t = s.current?.getListDimensions();
                            null == t || o(e + t.height - eC < a);
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
            E = i.useCallback(
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
                    onClick: () => E(e),
                    children: (0, l.jsx)(er.t, { size: "md", color: "currentColor" }),
                }),
        });
    };
var e_ = n(297264),
    ej = n(834730),
    eT = n(10392),
    eb = n(82498),
    eR = n(724651),
    eO = n(811611),
    eM = n(821609),
    eL = n(403581);
function ek(e) {
    let { analyticsSection: t, buttonText: i } = e;
    return (0, l.jsx)(eM.$, {
        variant: "expressive",
        icon: eL.t,
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
                        n.e("711562"),
                        n.e("331584"),
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
    eP = n(202541),
    eD = n(768857);
function eU(e) {
    let { className: t, onClose: n } = e;
    (0, T.XQ)();
    let { analyticsLocations: s } = (0, D.Ay)(P.A.EMPTY_STATE),
        a = (0, d.yK)([b.A], () => ew.vX.map((e) => b.A.getStickerById(e)));
    i.useEffect(() => {
        K.default.track(eh.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eP.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: eh.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: s,
        }),
            (0, eT.sq)(eh.U7l.PREMIUM_UPSELL_VIEWED, s, () => (0, eb.uq)(eP.e.EMPTY_STICKER_PICKER_UPSELL));
    }, [s]);
    let o = (0, H.V)(),
        u = (0, eR.O)(),
        c = null != o || null != u;
    return (0, l.jsxs)("div", {
        className: r()(eD.p$, t, { [eD.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eO.Ay, {
                      discountOffer: u,
                      trialOffer: o,
                      onClose: n,
                      type: eP.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscriptionTrial?.skuId ?? eP.pe.TIER_2,
                      children: ef.intl.string(ef.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(e_.D, {
                              className: eD.wx,
                              variant: "heading-xl/semibold",
                              children: ef.intl.string(ef.t.HEm04J),
                          }),
                          (0, l.jsx)(ej.E, {
                              className: eD.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: ef.intl.string(ef.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: eD.l1,
                              children: a
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(ed.A, { sticker: e, className: eD.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(ek, { analyticsSection: eh.JJy.EXPRESSION_PICKER }),
        ],
    });
}
var eG = n(404778),
    eV = n(537652),
    eF = n(962125),
    eH = n(286509),
    eB = n(631576),
    eW = n(369163),
    eK = n(123292),
    ez = n(631305),
    eZ = n(468689),
    eY = n(931991),
    eq = n(473145),
    eJ = n(625633),
    e$ = n(136123);
let eX = function (e) {
    let { className: t, guildId: n, channel: s, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, w.p)(),
        { analyticsLocations: c } = (0, D.Ay)(),
        h = (0, d.bG)([eu.A], () => eu.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, eY.nr)(h),
        f = null != h && 0 === (0, eq.aG)(h.premiumTier) && !h.features.has(eh.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            f &&
            a &&
            ((0, C.zV)(eh.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
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
                  className: r()(e$.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(eW.v, { size: "md", color: "currentColor", className: e$.Kk }),
                      (0, l.jsx)(ej.E, {
                          color: "interactive-text-default",
                          className: e$.rf,
                          variant: "text-sm/normal",
                          children: ef.intl.format(ef.t.AXWla1, { count: (0, eq.aG)(eh.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(eK.Q, {
                          variant: "primary",
                          text: ef.intl.string(ef.t["Gb+BJD"]),
                          onClick: function () {
                              null != h &&
                                  (0, ez.A)({
                                      analyticsLocations: c,
                                      analyticsSourceLocation: u,
                                      guild: h,
                                      perks: (0, eJ.q5)(),
                                  });
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: r()(e$.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(er.t, {
                          size: "custom",
                          color: "currentColor",
                          className: e$.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, l.jsx)(ej.E, {
                          color: "interactive-text-default",
                          className: e$.rf,
                          variant: "text-sm/normal",
                          children: ef.intl.string(ef.t.S83wgh),
                      }),
                      (0, l.jsx)(eK.Q, {
                          variant: "primary",
                          text: ef.intl.string(ef.t.bwNjug),
                          onClick: function () {
                              (0, G.v8)(), eZ.A.open(n, eh.BEX.STICKERS, u);
                          },
                      }),
                  ],
              })
        : null;
};
var eQ = n(307301),
    e0 = n(182922),
    e1 = n(683522);
let e2 = (0, z.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    e3 = (0, z.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    e8 = i.memo(function (e) {
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
                        (n = (0, l.jsx)(ed.A, { size: e3, sticker: (0, ec.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(s),
            o =
                (0, ec.FD)(s) || (0, ec.Xw)(s)
                    ? (0, l.jsx)(ed.A, { isInteracting: !0, size: e2, sticker: s, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: e1.P,
                          children: (0, l.jsx)(eQ.j, { size: "md", color: "currentColor", className: e1.K }),
                      });
        return (0, l.jsx)(e0.A, {
            graphicPrimary: o,
            graphicSecondary: r,
            titlePrimary: s.name,
            titleSecondary: (0, ec.FD)(s) || (0, ec.Xw)(s) ? a : null,
        });
    });
var e7 = n(140735),
    e5 = n(442433),
    e6 = n(304072),
    e4 = n(194261),
    e9 = n(513902);
let te = function (e) {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: e9.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(e4.LockIcon, { size: "xxs", color: "currentColor", className: e9.I }),
    });
};
var tt = n(777371);
let tn = i.memo(function (e) {
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
            stickerClassName: E,
            stickerDescriptors: C,
            stickerPadding: I,
            stickerSize: y,
            ownedStickerPacks: S,
            enlargeOnInteraction: N = !1,
            channel: v,
            currentUser: _,
            checkSendability: j = !0,
        } = e,
        { location: T } = (0, w.p)(),
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
        [M, L] = (0, e6.A)(null, 300);
    return (0, l.jsx)("div", {
        className: tt.nM,
        style: R,
        ...u?.(A),
        children: C.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === ee.op.STICKER && N && u,
                C = (0, a.throttle)(() => {
                    h?.current === !0 || p?.current === !0 || u || g?.(e);
                }, 250),
                { ref: I, tabIndex: b, onFocus: R, ...k } = o?.(e.columnIndex, A) ?? {};
            switch (e.type) {
                case ee.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...k,
                            children: (0, l.jsxs)(f.D, {
                                "aria-label": e.name,
                                className: r()(tt.wP, E, { [tt.Kj]: u }),
                                innerRef: I,
                                tabIndex: b,
                                onFocus: R ?? C,
                                onMouseMove: C,
                                onClick: function () {
                                    e.type === ee.op.CREATE_STICKER &&
                                        (K.default.track(eh.HAw.OPEN_MODAL, {
                                            type: eh.JJy.CREATE_STICKER_MODAL,
                                            location: T,
                                        }),
                                        (0, m.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("860350"),
                                                n.e("142753"),
                                                n.e("207998"),
                                                n.e("341659"),
                                                n.e("268582"),
                                                n.e("883952"),
                                                n.e("66580"),
                                                n.e("50342"),
                                                n.e("480436"),
                                                n.e("420643"),
                                                n.e("98913"),
                                                n.e("429143"),
                                            ]).then(n.bind(n, 445002));
                                            return (n) => (0, l.jsx)(t, { guildId: e.guild_id, ...n });
                                        }));
                                },
                                style: O,
                                children: [
                                    !N && (0, l.jsx)("div", { className: tt.fw }),
                                    (0, l.jsx)("div", {
                                        className: tt.P0,
                                        children: (0, l.jsx)(eQ.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tt.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(ej.E, {
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
                    let a = t && null != S && (0, ec.FD)(e.sticker) && !S.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...k, key: e.sticker.id },
                        (0, l.jsxs)(f.D, {
                            className: r()(tt.yI, E, { [tt.PV]: u, [tt.TV]: M === e.sticker.id }),
                            innerRef: I,
                            tabIndex: b,
                            onFocus: R ?? C,
                            onMouseMove: C,
                            onClick: function (t) {
                                if (h?.current === !0 || p?.current === !0) return;
                                let n = t.altKey;
                                n && e.type === ee.op.STICKER && !(0, ec.o1)(e.sticker.id) && L(e.sticker.id),
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
                                (0, l.jsx)(e7.A, { children: (0, ed.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !N && (0, l.jsx)("div", { className: tt.fw }),
                                        (0, l.jsx)(ed.A, {
                                            className: r()(tt.SI, {
                                                [tt.ot]:
                                                    N && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [tt.Q$]: c,
                                                [tt.No]: j && !(0, X.G7)(e.sticker, _, v),
                                            }),
                                            disableAnimation: !u && !s,
                                            enlargeOnInteraction: N,
                                            isInteracting: u,
                                            maskAsset: u,
                                            sticker: e.sticker,
                                            size: y,
                                        }),
                                        a ? (0, l.jsx)(te, { size: 20 }) : null,
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
var tl = n(457231),
    ti = n(911385);
let ts = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tr = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    ta = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    to = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tu = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tc = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    td = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    th = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tm = (0, z.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tf = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tp = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tg = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tx = [ta, tu, tc, td],
    tA = [to, tu, tc, td],
    tE = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tC = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tI(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: tl.yB,
        children: tC.map((e) =>
            (0, l.jsx)(
                f.D,
                {
                    className: tl.x_,
                    onClick: () => t(e),
                    children: (0, l.jsx)(ej.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
let ty = i.forwardRef(function (e, t) {
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
            E = tf + 2 * c,
            C = i.useRef(!1),
            I = i.useRef(null),
            [y, S] = U.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], M.x),
            { analyticsLocations: N } = (0, D.Ay)(P.A.STICKER_PICKER),
            v = (0, G.RQ)((e) => e.searchQuery),
            _ = (0, d.bG)([b.A], () => b.A.getPremiumPacks()),
            {
                renderRow: j,
                renderSection: T,
                renderSectionFooter: R,
                sectionFooterHeight: O,
                renderSectionHeader: L,
                sectionHeaderHeight: k,
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
                    E = (0, w.p)(),
                    C = (0, d.bG)([W.default], () => W.default.getCurrentUser()),
                    { handleStickerInspect: I, handleSelect: y } = (function (e) {
                        let { onSelectSticker: t, channel: n, currentUser: l } = e,
                            s = (0, w.p)(),
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
                                            ? (0, eB.vr)(a.id)
                                            : ((0, Q.Dt)({ sticker: a, location: { ...o, object: eh.ZSU.STICKER } }),
                                              (0, eB.uK)(a.id))
                                        : t(e);
                                },
                                [s.location, r, l, n, t],
                            ),
                        };
                    })({ onSelectSticker: r, channel: A, currentUser: C }),
                    [S, N] = i.useState(!1),
                    v = i.useCallback((e) => {
                        B.tP.updateSetting(Array.from(e));
                    }, []),
                    _ = i.useCallback(
                        (e) => {
                            let t = f[e];
                            return null != t
                                ? (0, l.jsx)(
                                      tn,
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
                                          stickerClassName: tl.yI,
                                          stickerDescriptors: t,
                                          stickerSize: n > ts ? tf : tp,
                                          stickerPadding: s,
                                          preferAnimation: n <= tr,
                                          ownedStickerPacks: x,
                                          isDisplayingIndividualStickers: !0,
                                          channel: A,
                                          currentUser: C,
                                      },
                                      e,
                                  )
                                : null;
                        },
                        [f, a, o, u, c, h, m, I, y, n, s, x, A, C],
                    ),
                    j = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
                    T = i.useCallback(
                        function (e) {
                            let { isStickerPack: n = !0 } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                l = new Set(t),
                                i = t.has(e);
                            i ? l.delete(e) : l.add(e),
                                K.default.track(eh.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                    location: E?.location,
                                    tab: em.kx.STICKER,
                                    collapsed: !i,
                                    sticker_pack_id: n ? e : null,
                                }),
                                v(l);
                        },
                        [E, t, v],
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
                                            ? (0, l.jsx)("div", { className: tl.yF, children: (0, l.jsx)(eG.c, {}) })
                                            : null,
                                        (0, l.jsx)(
                                            eH.A,
                                            {
                                                className: tl.jH,
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
                                        eH.A,
                                        {
                                            className: tl.jH,
                                            "aria-label": ef.intl.formatToPlainString(ef.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, l.jsx)(el.StarIcon, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => T(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case ee.Z2.RECENT:
                                    return (0, l.jsx)(
                                        eH.A,
                                        {
                                            className: tl.jH,
                                            "aria-label": ef.intl.formatToPlainString(ef.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, l.jsx)(ei.ClockIcon, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => T(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case ee.Z2.GUILD:
                                case ee.Z2.EMPTY_GUILD_UPSELL: {
                                    let e = eu.A.getGuild(n.id);
                                    if (null == e) return null;
                                    return (0, l.jsx)(
                                        eH.A,
                                        {
                                            className: tl.jH,
                                            "aria-label": ef.intl.formatToPlainString(ef.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, l.jsx)(ea.A, { guild: e, height: 16, width: 16 }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => T(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                                case ee.Z2.PACK: {
                                    let e = b.A.getStickerPack(n.id);
                                    if (null == e) return null;
                                    return (0, l.jsx)(
                                        eH.A,
                                        {
                                            className: tl.jH,
                                            "aria-label": ef.intl.formatToPlainString(ef.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, l.jsx)(ed.A, {
                                                disableAnimation: !0,
                                                size: 12,
                                                sticker: (0, ec.Id)(e),
                                            }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => T(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                            }
                        },
                        [t, p, T, g],
                    ),
                    O = i.useCallback(
                        (e) => {
                            if (null != g) {
                                let { sendable: t, sendableWithPremium: n } = g;
                                return 0 === e && t.length > 0 ? 0 : tm + (t.length > 0 && n.length > 0 ? th : 0);
                            }
                            return tm;
                        },
                        [g],
                    );
                return {
                    renderRow: _,
                    renderSection: j,
                    renderSectionHeader: R,
                    sectionHeaderHeight: O,
                    renderSectionFooter: i.useCallback(
                        (e) => {
                            let n = p[e],
                                i = t.has(n.id);
                            return n.type !== ee.Z2.EMPTY_GUILD_UPSELL || null != g || i
                                ? null
                                : (0, l.jsx)(
                                      eX,
                                      {
                                          className: tl.Ij,
                                          guildId: n.id,
                                          channel: A,
                                          shouldTrackUpsellViewed: !S,
                                          setTrackedUpsellViewed: N,
                                      },
                                      `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                  );
                        },
                        [p, t, g, A, S],
                    ),
                    sectionFooterHeight: i.useCallback(
                        (e) => {
                            let n = p[e],
                                l = t.has(n.id);
                            return n.type !== ee.Z2.EMPTY_GUILD_UPSELL || l ? 0 : tE;
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
                isScrolling: C,
                isUsingKeyboardNavigation: h,
                onSelectSticker: m,
                getStickerItemProps: a,
                getStickerRowProps: o,
                gutterWidth: u,
                inspectedStickerPosition: S,
                filteredStickers: r,
                ownedStickerPacks: i.useMemo(() => new Set(_.map((e) => e.id)), [_]),
                channel: A,
            }),
            F = (0, V.Fk)({
                activeCategoryIndex: y,
                isScrolling: C,
                listRef: I,
                onActiveCategoryIndexChange: U.bM.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: v,
            });
        return (
            (0, V.FV)({ searchQuery: v, activeCategoryIndex: y, listRef: I }),
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
                value: N,
                children: (0, l.jsxs)("div", {
                    className: tl.iE,
                    children: [
                        null != r && 0 === r.sendable.length && 0 === r.sendableWithPremium.length
                            ? (0, l.jsx)(eV.A, {
                                  message: ef.intl.string(ef.t["zc+LQd"]),
                                  className: tl.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: ti,
                                  suggestions: (0, l.jsx)(tI, { onSuggestionClick: (e) => (0, G.Ri)(e, !0) }),
                              })
                            : (0, l.jsx)(eF.A, {
                                  role: "none presentation",
                                  listPadding: null != r ? tA : tx,
                                  onScroll: F,
                                  renderRow: j,
                                  renderSection: null == r ? T : void 0,
                                  renderSectionHeader: L,
                                  renderSectionFooter: R,
                                  rowCount: f,
                                  rowCountBySection: p,
                                  rowHeight: s > ts ? E + tg : tp + 2 * c + tg,
                                  sectionHeaderHeight: k,
                                  sectionFooterHeight: O,
                                  stickyHeaders: !0,
                                  ref: I,
                              }),
                        (0, l.jsx)(e8, { stickersGrid: x }),
                    ],
                }),
            })
        );
    }),
    tS = (0, n(945810).mj)({
        name: "2026-02-sticker-padding",
        kind: "user",
        defaultConfig: { padding: 2 },
        variations: { 1: { padding: 1 } },
    });
var tN = n(602034),
    tv = n(683438),
    t_ = n(909802);
let tj = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: s, channel: r } = e,
        a = (0, T.ZO)(r),
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
            className: t_.i,
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
                    ...(m ? { "aria-activedescendant": (0, tN.Aq)(ew.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
});
n(321073);
var tT = n(768038),
    tb = n(789645),
    tR = n(964486),
    tO = n(158045),
    tM = n(420136),
    tL = n(939383);
function tk() {
    return $(!1);
}
function tw(e) {
    let { onLearnMore: t } = e,
        { analyticsLocations: n } = (0, D.Ay)(P.A.PREMIUM_UPSELL);
    (0, i.useEffect)(() => {
        K.default.track(eh.HAw.PREMIUM_UPSELL_VIEWED, {
            location_section: eh.JJy.STICKER_PICKER_UPSELL,
            type: eP.e.STICKER_PICKER_UPSELL,
            location_stack: n,
        }),
            (0, eT.sq)(eh.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, eb.uq)(eP.e.STICKER_PICKER_UPSELL));
    }, [n]);
    let s = (0, i.useRef)(null);
    (0, tR.Ay)(() => {
        s.current?.focus();
    });
    let a = (0, H.V)(),
        o = (0, eR.O)(),
        u = a?.subscriptionTrial?.skuId === eP.pe.TIER_0,
        c = null != a || null != o;
    return (0, l.jsxs)("div", {
        ref: s,
        tabIndex: -1,
        "aria-label": ef.intl.string(ef.t.jJG1pl),
        className: r()(tM.VL, { [tM.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eO.Ay, {
                      trialOffer: a,
                      discountOffer: o,
                      onClose: tk,
                      type: eP.e.STICKER_PICKER_UPSELL,
                      subscriptionTier: a?.subscriptionTrial?.skuId ?? eP.pe.TIER_2,
                      children: u
                          ? ef.intl.format(ef.t.MAGagw, {
                                planName: (0, tO.RH)(eP.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : ef.intl.format(ef.t.jt7JX6, { onClick: t }),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: tM.Tn, src: tL, alt: ef.intl.string(ef.t.do7AoM) }),
                          (0, l.jsx)(ej.E, {
                              className: tM.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: ef.intl.string(ef.t.jJG1pl),
                          }),
                          (0, l.jsx)(ej.E, {
                              className: tM.GR,
                              variant: "text-md/normal",
                              children: ef.intl.format(ef.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(ek, { analyticsSection: eh.JJy.EXPRESSION_PICKER }),
            (0, l.jsx)(f.D, {
                className: tM.kz,
                onClick: tk,
                "aria-label": ef.intl.string(ef.t.cpT0Cq),
                children: (0, l.jsx)(tb.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var tP = n(970099);
let tD = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tU = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tG = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tV = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tF = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    tH = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tB = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tW = O()(Q.Qz, 200),
    tK = O()(Q.HA, 200),
    tz = i.forwardRef(function (e, t) {
        let { containerWidth: s, channel: r, onSelectSticker: a, closePopout: o } = e,
            u = tS.useConfig({ location: "StickerPicker" }).padding,
            { location: c } = (0, w.p)(),
            { analyticsLocations: h } = (0, D.Ay)(P.A.STICKER_PICKER),
            f = (0, H.V)()?.subscriptionTrial != null,
            p = i.useRef(null),
            g = i.useRef(null),
            x = i.useRef(null),
            A = J((e) => e.showPremiumUpsell),
            [E, C] = (0, G.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], M.x),
            I = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: ep }));
        let y = (0, T.pD)(r),
            S = 0 === y.filter((e) => e.type !== ee.Z2.EMPTY_GUILD_UPSELL).length,
            N = (0, V.oV)({
                gridWrapperRef: p,
                containerWidth: s,
                showingEmptyState: S,
                listPaddingLeft: tU,
                listScrollbarWidth: 8,
            }),
            v = B.tP.useSetting(),
            _ = i.useMemo(() => new Set(v), [v]),
            j = (0, d.bG)([W.default], () => W.default.getCurrentUser()),
            R = i.useMemo(
                () =>
                    (function (e, t, n) {
                        if ("" === e) return null;
                        let l = [],
                            i = [];
                        return (
                            tT.Ay.queryStickers([e], !0)
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
                    })(E, j, r),
                [E, j, r],
            ),
            O = (0, T.Gc)(),
            L = (0, T.UT)(),
            k = (0, d.cf)([b.A], () => b.A.getAllGuildStickers()),
            { sendable: z = [], sendableWithPremium: Z = [] } = R ?? {},
            Y = z.length + Z.length,
            q = i.useCallback(
                (e) => {
                    "" === E ? (0, Q.ry)(e) : (0, Q.nQ)(e, E, Y), a(e.sticker, ee.D6.STICKER_PICKER);
                },
                [a, E, Y],
            ),
            el = null != N && N > tD,
            {
                rowCount: ei,
                rowCountBySection: es,
                stickersGrid: er,
                gutterWidth: ea,
                columnCounts: eo,
            } = (0, T._c)({
                filteredStickers: R,
                stickersCategories: y,
                collapsedStickersCategories: _,
                listWidth: N,
                listPaddingRight: tG,
                stickerNodeMargin: el ? tV : tF,
                stickerNodeWidth: el ? tH + 2 * u : tB + 2 * u,
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
                    u = (0, w.p)(),
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
                                            n.e("860350"),
                                            n.e("142753"),
                                            n.e("207998"),
                                            n.e("341659"),
                                            n.e("268582"),
                                            n.e("883952"),
                                            n.e("66580"),
                                            n.e("50342"),
                                            n.e("480436"),
                                            n.e("420643"),
                                            n.e("98913"),
                                            n.e("429143"),
                                        ]).then(n.bind(n, 445002));
                                        return (n) => (0, l.jsx)(t, { guildId: e.guild_id, ...n });
                                    });
                                break;
                            case ee.op.STICKER: {
                                if (null == e.sticker) break;
                                let t = (0, X.W$)(e.sticker, j, r);
                                t === X.Ux.SENDABLE ? q(e) : t === X.Ux.SENDABLE_WITH_PREMIUM && $(!0);
                            }
                        }
                    },
                    [c, j, r, q],
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
            null != k &&
                [...k.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, Q.p4)({
                    containerWidth: s,
                    favoriteStickers: O,
                    frequentlyUsedStickers: L,
                    guildStickers: t,
                    stickersTotal: n,
                });
        }
        i.useEffect(() => U.bM.resetStoreState, []),
            i.useEffect(() => {
                "" === I.current && "" !== E && (0, Q.Fg)(), (I.current = E);
            }, [E]),
            i.useEffect(() => {
                0 === Y ? tW(E) : tK(E, Y, C);
            }, [E, Y, C]),
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
                !(f && S) &&
                    (0, l.jsx)("div", {
                        className: tP.wx,
                        children: (0, l.jsx)(tj, { ref: x, onKeyDown: em, stickersListRef: g, channel: r }),
                    }),
                S
                    ? (0, l.jsx)(eU, { className: tP.p$, onClose: o })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  ref: p,
                                  className: tP.AD,
                                  id: ew.lq,
                                  ...ed,
                                  children:
                                      null != N
                                          ? (0, l.jsx)(ty, {
                                                ref: g,
                                                collapsedStickersCategories: _,
                                                filteredStickers: R,
                                                getStickerItemProps: eu,
                                                getStickerRowProps: ec,
                                                gridWidth: N,
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
                              (0, l.jsx)(ev, { stickersListRef: g, channel: r }),
                          ],
                      }),
                A && (0, l.jsx)(tw, { onLearnMore: eg }),
            ],
        });
    }),
    tZ = i.forwardRef(function (e, t) {
        return (
            (0, T.XQ)(),
            (0, l.jsx)("div", {
                className: tP.iE,
                id: ew.GX,
                "aria-labelledby": ew.LD,
                role: "tabpanel",
                children: e.isLoading ? (0, l.jsx)(k.y, { className: tP.Mz }) : (0, l.jsx)(tz, { ...e, ref: t }),
            })
        );
    });
var tY = n(742023),
    tq = n(712687),
    tJ = n(625494),
    t$ = n(49999),
    tX = n(732139),
    tQ = n(307731),
    t0 = n(818625);
let t1 = 498 + tX.as.MEDIUM,
    t2 = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: s = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(f.D, {
            role: "tab",
            autoFocus: s,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                C.Ay.trackWithMetadata(eh.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, G.U)(i);
            },
            "aria-current": t ? "page" : void 0,
            className: r()(n, t0.oi, t0.pc, { [t0.Mv]: t }),
        });
    }),
    t3 = i.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: s,
                onSelectEmoji: a,
                onSelectSticker: f,
                onSelectSound: R,
                channel: O,
                type: M,
                position: L,
                align: k,
                positionLayerClassName: w,
                closeOnModalOuterClick: P = !1,
                parentModalKey: D,
            } = e,
            U = i.useRef(null),
            V = i.useRef(!1),
            F = i.useRef(null),
            H = i.useRef(null),
            { drawerWidth: B, handleDrawerResizeHandleMouseDown: W } = (function (e) {
                let { positionContainerRef: t, drawerRef: n, orientation: l } = e,
                    s = (0, d.bG)([tY.Ay], () => tY.Ay.expressionPickerWidth),
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
                    f = (0, E.A)({
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
                orientation: "left" === k ? E.R.HORIZONTAL_RIGHT : E.R.HORIZONTAL_LEFT,
            }),
            K = (0, G.RQ)((e) => e.activeView),
            z = (0, T.ZO)(O),
            { renderWindow: Z, windowDispatch: Y } = i.useContext(v.Ay),
            q = (0, d.bG)([b.A], () => !b.A.hasLoadedStickerPacks),
            J = (0, _.tj)({ location: "expression_picker" }),
            $ = (0, d.bG)([tq.A], () => tq.A.isOpen()),
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
                    (null == n || "BODY" === n.tagName) && tJ._.dispatchToLastSubscribed(eh.jej.TEXTAREA_FOCUS);
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
                tJ._.subscribe(eh.jej.CLOSE_GIF_PICKER, e),
                () => {
                    Z.removeEventListener("mousedown", el),
                        Z.removeEventListener("contextmenu", el),
                        Y.unsubscribe(eh.jej.POPOUT_CLOSE, ei),
                        tJ._.unsubscribe(eh.jej.CLOSE_GIF_PICKER, e);
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
                    ea && er(t$.i.TAKE_ACTION);
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
                          : (C.Ay.trackWithMetadata(eh.HAw.EXPRESSION_PICKER_OPENED, {
                                width: H.current.offsetWidth,
                                tab: K,
                                badged: !1,
                            }),
                            (V.current = !0)));
            });
        let eu = i.useCallback((e, t) => R?.(e, "emoji_picker", t), [R]),
            ec = i.useCallback((e, t) => R?.(e, "soundboard_picker", t), [R]),
            ed = M.soundmoji?.allowSending === !0 && null != R,
            ep = "left" === k ? "right" : "left",
            eg = null != w ? w : "left" === k ? t0.sj : t0.Jg,
            ex = ee
                ? (0, l.jsx)(t2, {
                      id: tX.g9,
                      "aria-controls": tX.ni,
                      "aria-selected": K === em.kx.GIF,
                      isActive: K === em.kx.GIF,
                      viewType: em.kx.GIF,
                      children: ef.intl.string(ef.t["6gUTsS"]),
                  })
                : null,
            eA = et
                ? (0, l.jsx)(t2, {
                      id: ew.LD,
                      "aria-controls": ew.GX,
                      "aria-selected": K === em.kx.STICKER,
                      isActive: K === em.kx.STICKER,
                      autoFocus: !z,
                      viewType: em.kx.STICKER,
                      children: (0, l.jsx)("div", { className: t0.dG, children: ef.intl.string(ef.t.nf1s3u) }),
                  })
                : null,
            eE = (0, l.jsx)(t2, {
                id: tX.k1,
                "aria-controls": tX.Do,
                "aria-selected": K === em.kx.EMOJI,
                isActive: K === em.kx.EMOJI,
                viewType: em.kx.EMOJI,
                children: ef.intl.string(ef.t.Xu3wE3),
            });
        return (0, l.jsx)(A.A, {
            section: eh.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(N.nE, {
                className: r()(t0.T8, eg),
                targetRef: t,
                position: L,
                align: k,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: r()(t0.V6, { [t0.D0]: !en }),
                        ref: U,
                        role: "dialog",
                        "aria-label": ef.intl.string(ef.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: t0.jP,
                                  style: { width: null == B ? void 0 : B, [k]: 0 },
                                  ref: H,
                                  children: [
                                      (0, l.jsx)("div", { className: t0.Di, onMouseDown: W, style: { [ep]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: t0.FG,
                                          children: [
                                              en
                                                  ? (0, l.jsx)("nav", {
                                                        className: t0.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: t0.CT,
                                                            role: "tablist",
                                                            "aria-label": ef.intl.string(ef.t["2j4Vgd"]),
                                                            children: [
                                                                ex,
                                                                eA,
                                                                eE,
                                                                J &&
                                                                    ed &&
                                                                    (0, l.jsx)(t2, {
                                                                        id: tX.N6,
                                                                        "aria-controls": tX.AA,
                                                                        "aria-selected": K === em.kx.SOUNDBOARD,
                                                                        isActive: K === em.kx.SOUNDBOARD,
                                                                        viewType: em.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: t0.sd,
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
                                                  ? (0, l.jsx)(tZ, {
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
                                                  ? (0, l.jsx)(S.A, {
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
                                                        emojiSize: null != B && B < t1 ? tX.as.MEDIUM : tX.as.LARGE,
                                                        pickerIntention:
                                                            M.expressionPicker?.emojiIntention ??
                                                            tQ.EmojiIntention.CHAT,
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
                                                        className: t0.z,
                                                        children: (0, l.jsx)(j.A, {
                                                            guildId: O.guild_id,
                                                            channel: O,
                                                            containerWidth: B,
                                                            onClose: ei,
                                                            onSelect: ec,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: t0.BG, children: e }),
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
