"use strict";
n.d(t, { A: () => t8 });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(607399),
    u = n(621466),
    d = n(17928),
    h = n(554146),
    m = n(192308),
    p = n(939249),
    f = n(315710),
    g = n(777666),
    x = n(817281),
    C = n(820284),
    A = n(761929),
    E = n(58149),
    I = n(932001),
    y = n(267889),
    v = n(622142),
    S = n(750506),
    N = n(267102),
    j = n(704591),
    _ = n(126970),
    T = n(256449),
    b = n(750385),
    R = n(111956),
    O = n.n(R),
    L = n(942381),
    w = n(319060),
    M = n(289873),
    k = n(212245),
    P = n(793574),
    D = n(688810),
    U = n(850992),
    V = n(151271),
    G = n(464651),
    F = n(87719),
    H = n(234419),
    W = n(253932),
    B = n(287809),
    K = n(954571),
    z = n(240248),
    Z = n(353640),
    q = n(121894);
let J = Object.freeze({ showPremiumUpsell: !1 }),
    Y = (0, Z.v)((e) => J),
    X = (e) => {
        (0, q.r)(() => Y.setState({ showPremiumUpsell: e }));
    };
var $ = n(361670),
    Q = n(891090),
    ee = n(194004),
    et = n(788413),
    en = n(60587),
    el = n(990078),
    ei = n(27232),
    es = n(406810),
    ea = n(797285),
    er = n(724511),
    eo = n(802019),
    ec = n(71393),
    eu = n(68935),
    ed = n(148355),
    eh = n(652215),
    em = n(698279),
    ep = n(985018),
    ef = n(950646);
let eg = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    ex = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    eC = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eA = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    eE = (0, z.xI)(w.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eI = (0, z.xI)(w.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ey = [eg, eg, eg, eg],
    ev = (ex + eC) * 2 + eg,
    eS = eE + 2 * eI,
    eN = (e) => {
        let { stickersListRef: t, channel: n } = e,
            s = i.useRef(null),
            [r, o] = i.useState(!0),
            c = U.bM.useStore((e) => e.activeCategoryIndex),
            u = (0, T.pD)(n),
            {
                firstStandardStickerCategoryIndex: d,
                firstStandardStickerCategoryOffsetTop: h,
                guildCategoryCount: m,
                hasFirstPartyStickerPacks: f,
            } = i.useMemo(() => {
                let e = u.filter((e) => e.type === ee.Z2.GUILD).length,
                    t = e + +(u[0]?.type === ee.Z2.RECENT) + +(u[0]?.type === ee.Z2.FAVORITE),
                    n = t * (ex + eC) - eC + eS;
                return {
                    firstStandardStickerCategoryIndex: t + 1,
                    firstStandardStickerCategoryOffsetTop: n,
                    guildCategoryCount: e,
                    hasFirstPartyStickerPacks: null != u.find((e) => e.type === ee.Z2.PACK),
                };
            }, [u]);
        i.useLayoutEffect(() => {
            o(m >= 7);
        }, [m]);
        let {
                renderCategoryListItem: g,
                rowHeight: x,
                onScroll: C,
            } = ((e) => {
                let {
                        activeIndex: t,
                        stickerPickerCategories: n,
                        categoryListRef: s,
                        firstStandardStickerCategoryOffsetTop: r,
                        setShouldRenderShortcut: o,
                    } = e,
                    c = (0, k.p)(),
                    u = (0, V.RQ)((e) => "" !== e.searchQuery),
                    d = i.useCallback(
                        (e, s, r) => {
                            let o,
                                d = n[0]?.type === ee.Z2.FAVORITE,
                                h = +!!d,
                                m = n[h]?.type === ee.Z2.RECENT,
                                f = n.length;
                            if (0 === s && d)
                                return (0, l.jsx)(
                                    "div",
                                    {
                                        role: "listitem",
                                        "aria-setsize": f,
                                        "aria-posinset": s,
                                        children: (0, l.jsx)(p.D, {
                                            "aria-label": ep.intl.string(ep.t.y3LQCG),
                                            className: a()(ef._0, ef.dC, { [ef.k1]: !u && 0 === t, [ef.ls]: !m }),
                                            onClick: r,
                                            children: (0, l.jsx)(ei.G, {
                                                size: "custom",
                                                color: "currentColor",
                                                className: ef.AB,
                                                height: eA,
                                                width: eA,
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
                                        "aria-setsize": f,
                                        "aria-posinset": s,
                                        children: (0, l.jsx)(p.D, {
                                            "aria-label": ep.intl.string(ep.t.RxAmVC),
                                            className: a()(ef._0, ef.dC, ef.ls, { [ef.k1]: !u && t === h }),
                                            onClick: r,
                                            children: (0, l.jsx)(es.O, {
                                                size: "custom",
                                                color: "currentColor",
                                                className: ef.AB,
                                                height: eA,
                                                width: eA,
                                            }),
                                        }),
                                    },
                                    "recent",
                                );
                            let g = t === s,
                                x = n[s],
                                C = n[s + 1],
                                A = null != C && x.type === ee.Z2.GUILD && C.type !== ee.Z2.GUILD,
                                E = x.type === ee.Z2.PACK,
                                I = "",
                                y = null;
                            if (x.type === ee.Z2.GUILD || x.type === ee.Z2.EMPTY_GUILD_UPSELL) {
                                let e = ec.A.getGuild(x.id);
                                null != e &&
                                    ((o = e.id), (I = e.name), (y = (0, l.jsx)(er.A, { guild: e, isSelected: g })));
                            } else if (E) {
                                let e = b.A.getStickerPack(x.id);
                                null != e &&
                                    ((I = e.name),
                                    (y = (0, l.jsx)(ed.A, {
                                        disableAnimation: !g || u,
                                        size: ex,
                                        sticker: (0, eu.Id)(e),
                                    })));
                            }
                            return (0, l.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, l.jsx)(el.m, {
                                            position: "right",
                                            text: I,
                                            children: (0, l.jsx)("div", {
                                                role: "listitem",
                                                "aria-setsize": f,
                                                "aria-posinset": s,
                                                children: (0, l.jsx)(p.D, {
                                                    "aria-label": I,
                                                    className: a()(ef._0, { [ef.ND]: E, [ef.Ms]: !u && g && E }),
                                                    onClick: () => {
                                                        x.type === ee.Z2.PACK &&
                                                            K.default.track(
                                                                eh.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED,
                                                                {
                                                                    location: c?.location,
                                                                    tab: em.kx.STICKER,
                                                                    sticker_pack_id: x.id,
                                                                    guild_id: o,
                                                                },
                                                            ),
                                                            r();
                                                    },
                                                    children: y,
                                                }),
                                            }),
                                        }),
                                        A ? (0, l.jsx)("hr", { className: ef.ny }, "separator") : null,
                                    ],
                                },
                                x.id,
                            );
                        },
                        [t, c, u, n],
                    ),
                    h = i.useCallback((e, t) => (t ? ev : 0), []);
                return {
                    getScrollOffsetForIndex: h,
                    renderCategoryListItem: d,
                    rowHeight: i.useCallback(
                        (e, t) => {
                            let l = n[t],
                                i = n[t + 1];
                            return ex + (null != i && l.type === ee.Z2.GUILD && i.type !== ee.Z2.GUILD ? eS : eC);
                        },
                        [n],
                    ),
                    onScroll: i.useCallback(
                        (e) => {
                            let t = s.current?.getListDimensions();
                            null == t || o(e + t.height - eE < r);
                        },
                        [r, s, o],
                    ),
                };
            })({
                activeIndex: c,
                stickerPickerCategories: u,
                categoryListRef: s,
                firstStandardStickerCategoryOffsetTop: h,
                setShouldRenderShortcut: o,
            }),
            A = i.useCallback(
                (e) => {
                    e(d), s.current?.scrollTo(h);
                },
                [d, h],
            );
        return (0, l.jsx)(eo.A, {
            className: ef.jv,
            categoryListRef: s,
            expressionsListRef: t,
            store: U.bM,
            listPadding: ey,
            onScroll: C,
            renderCategoryListItem: g,
            rowCount: u.length,
            categories: u,
            categoryHeight: x,
            children: (e) =>
                f &&
                r &&
                (0, l.jsx)(p.D, {
                    className: a()(ef.Fe, { [ef.Q6]: !r }),
                    onClick: () => A(e),
                    children: (0, l.jsx)(ea.t, { size: "md", color: "currentColor" }),
                }),
        });
    };
var ej = n(534514),
    e_ = n(834730),
    eT = n(422936),
    eb = n(811611),
    eR = n(821609),
    eO = n(403581);
function eL(e) {
    let { analyticsSection: t, buttonText: i } = e;
    return (0, l.jsx)(eR.$, {
        variant: "expressive",
        icon: eO.t,
        text: i ?? ep.intl.string(ep.t["8Sh5fg"]),
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
                        n.e("40305"),
                        n.e("62691"),
                        n.e("71202"),
                        n.e("53274"),
                    ]).then(n.bind(n, 397313));
                    return (t) => (0, l.jsx)(e, { ...t });
                }))
            );
        },
    });
}
var ew = n(823894),
    eM = n(788868),
    ek = n(83148);
function eP(e) {
    let { className: t, onClose: n } = e;
    (0, T.XQ)();
    let { analyticsLocations: s } = (0, D.Ay)(P.A.EMPTY_STATE),
        r = (0, d.yK)([b.A], () => ew.vX.map((e) => b.A.getStickerById(e)));
    i.useEffect(() => {
        K.default.track(eh.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eM.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: eh.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: s,
        });
    }, [s]);
    let o = (0, H.V)(),
        c = (0, eT.O)(),
        u = null != o || null != c;
    return (0, l.jsxs)("div", {
        className: a()(ek.p$, t, { [ek.Hz]: u }),
        children: [
            u
                ? (0, l.jsx)(eb.Ay, {
                      discountOffer: c,
                      trialOffer: o,
                      onClose: n,
                      type: eM.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscription_trial?.sku_id ?? eM.pe.TIER_2,
                      children: ep.intl.string(ep.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(ej.D, {
                              className: ek.wx,
                              variant: "heading-xl/semibold",
                              children: ep.intl.string(ep.t.HEm04J),
                          }),
                          (0, l.jsx)(e_.E, {
                              className: ek.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: ep.intl.string(ep.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: ek.l1,
                              children: r
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(ed.A, { sticker: e, className: ek.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !u && (0, l.jsx)(eL, { analyticsSection: eh.JJy.EXPRESSION_PICKER }),
        ],
    });
}
var eD = n(404778),
    eU = n(537652),
    eV = n(962125),
    eG = n(286509),
    eF = n(631576),
    eH = n(369163),
    eW = n(123292),
    eB = n(631305),
    eK = n(997509),
    ez = n(931991),
    eZ = n(473145),
    eq = n(874864),
    eJ = n(832938);
let eY = (e) => {
    let { className: t, guildId: n, channel: s, shouldTrackUpsellViewed: r, setTrackedUpsellViewed: o } = e,
        { location: c } = (0, k.p)(),
        { analyticsLocations: u } = (0, D.Ay)(),
        h = (0, d.bG)([ec.A], () => ec.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, ez.nr)(h),
        p = null != h && 0 === (0, eZ.aG)(h.premiumTier) && !h.features.has(eh.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            p &&
            r &&
            ((0, E.zV)(eh.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: c,
                guild_id: h?.id,
                channel_id: s?.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: u,
            }),
            o(!0));
    }, [p, h, s, c, r, o, u, m]),
    null != h && m)
        ? p
            ? (0, l.jsxs)("div", {
                  className: a()(eJ.UX, t),
                  children: [
                      (0, l.jsx)(eH.v, { size: "md", color: "currentColor", className: eJ.Kk }),
                      (0, l.jsx)(e_.E, {
                          color: "interactive-text-default",
                          className: eJ.rf,
                          variant: "text-sm/normal",
                          children: ep.intl.format(ep.t.AXWla1, { count: (0, eZ.aG)(eh.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(eW.Q, {
                          variant: "primary",
                          text: ep.intl.string(ep.t["Gb+BJD"]),
                          onClick: () => {
                              (0, eB.A)({
                                  analyticsLocations: u,
                                  analyticsSourceLocation: c,
                                  guild: h,
                                  perks: (0, eq.q5)(),
                              });
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: a()(eJ.UX, t),
                  children: [
                      (0, l.jsx)(ea.t, {
                          size: "custom",
                          color: "currentColor",
                          className: eJ.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, l.jsx)(e_.E, {
                          color: "interactive-text-default",
                          className: eJ.rf,
                          variant: "text-sm/normal",
                          children: ep.intl.string(ep.t.S83wgh),
                      }),
                      (0, l.jsx)(eW.Q, {
                          variant: "primary",
                          text: ep.intl.string(ep.t.bwNjug),
                          onClick: () => {
                              (0, V.v8)(), eK.A.open(n, eh.BEX.STICKERS, c);
                          },
                      }),
                  ],
              })
        : null;
};
var eX = n(307301),
    e$ = n(182922),
    eQ = n(867981);
let e0 = (0, z.xI)(w.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    e1 = (0, z.xI)(w.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    e2 = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = U.bM.useStore((e) => e.inspectedExpressionPosition),
            s = i.useMemo(() => {
                let { rowIndex: e, columnIndex: l } = n,
                    i = t[e]?.[l];
                return i?.type === ee.op.CREATE_STICKER
                    ? { guild_id: i.guild_id, name: i.name }
                    : i?.type !== ee.op.STICKER
                      ? null
                      : i.sticker;
            }, [t, n]);
        if (null == s) return null;
        let { graphic: a, title: r } = ((e) => {
                let t = null,
                    n = null;
                if ((!(0, eu.FD)(e) && !(0, eu.Xw)(e)) || (0, eu.Xw)(e)) {
                    let i = ec.A.getGuild(e.guild_id);
                    null != i &&
                        ((t = ep.intl.format(ep.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(er.A, { guild: i })));
                } else if ((0, eu.FD)(e)) {
                    let i = b.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = ep.intl.format(ep.t.cZOkbs, { source: i.name })),
                        (n = (0, l.jsx)(ed.A, { size: e1, sticker: (0, eu.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(s),
            o =
                (0, eu.FD)(s) || (0, eu.Xw)(s)
                    ? (0, l.jsx)(ed.A, { isInteracting: !0, size: e0, sticker: s, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: eQ.P,
                          children: (0, l.jsx)(eX.j, { size: "md", color: "currentColor", className: eQ.K }),
                      });
        return (0, l.jsx)(e$.A, {
            graphicPrimary: o,
            graphicSecondary: a,
            titlePrimary: s.name,
            titleSecondary: (0, eu.FD)(s) || (0, eu.Xw)(s) ? r : null,
        });
    });
var e6 = n(140735),
    e3 = n(442433),
    e7 = n(304072),
    e4 = n(194261),
    e8 = n(429631);
let e5 = (e) => {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: e8.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(e4.X, { size: "xxs", color: "currentColor", className: e8.I }),
    });
};
var e9 = n(584176);
let te = i.memo(function (e) {
    let {
            isDisplayingIndividualStickers: t = !1,
            preferAnimation: s = !0,
            getStickerItemProps: o,
            getStickerRowProps: c,
            gutterWidth: u,
            inspectedStickerPosition: d,
            isScrolling: h,
            isUsingKeyboardNavigation: f,
            onInspect: g,
            onSelect: x,
            rowIndex: C,
            stickerClassName: A,
            stickerDescriptors: E,
            stickerPadding: I,
            stickerSize: y,
            ownedStickerPacks: v,
            enlargeOnInteraction: S = !1,
            channel: N,
            currentUser: j,
            checkSendability: _ = !0,
        } = e,
        { location: T } = (0, k.p)(),
        b = y + 2 * I,
        R = i.useMemo(
            () => ({
                gridColumnGap: u,
                gridTemplateColumns: `repeat(auto-fill, ${b}px)`,
                height: b,
                paddingRight: t ? void 0 : b,
            }),
            [t, u, b],
        ),
        O = i.useMemo(() => ({ width: y, height: y, padding: I }), [I, y]),
        [L, w] = (0, e7.A)(null, 300);
    return (0, l.jsx)("div", {
        className: e9.nM,
        style: R,
        ...c?.(C),
        children: E.map((e) => {
            let c = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                u = e.type === ee.op.STICKER && S && c,
                E = (0, r.throttle)(() => {
                    h?.current === !0 || f?.current === !0 || c || g?.(e);
                }, 250),
                { ref: I, tabIndex: b, onFocus: R, ...M } = o?.(e.columnIndex, C) ?? {};
            switch (e.type) {
                case ee.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...M,
                            children: (0, l.jsxs)(p.D, {
                                "aria-label": e.name,
                                className: a()(e9.wP, A, { [e9.Kj]: c }),
                                innerRef: I,
                                tabIndex: b,
                                onFocus: R ?? E,
                                onMouseMove: E,
                                onClick: () => {
                                    e.type === ee.op.CREATE_STICKER &&
                                        (K.default.track(eh.HAw.OPEN_MODAL, {
                                            type: eh.JJy.CREATE_STICKER_MODAL,
                                            location: T,
                                        }),
                                        (0, m.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("6287"),
                                                n.e("81510"),
                                                n.e("92652"),
                                                n.e("97027"),
                                                n.e("31232"),
                                                n.e("8891"),
                                                n.e("80436"),
                                                n.e("83952"),
                                                n.e("66580"),
                                                n.e("50342"),
                                                n.e("20643"),
                                                n.e("98913"),
                                                n.e("29143"),
                                            ]).then(n.bind(n, 445002));
                                            return (n) => (0, l.jsx)(t, { guildId: e.guild_id, ...n });
                                        }));
                                },
                                style: O,
                                children: [
                                    !S && (0, l.jsx)("div", { className: e9.fw }),
                                    (0, l.jsx)("div", {
                                        className: e9.P0,
                                        children: (0, l.jsx)(eX.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: e9.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(e_.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: ep.intl.string(ep.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case ee.op.STICKER: {
                    let r = t && null != v && (0, eu.FD)(e.sticker) && !v.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...M, key: e.sticker.id },
                        (0, l.jsxs)(p.D, {
                            className: a()(e9.yI, A, { [e9.PV]: c, [e9.TV]: L === e.sticker.id }),
                            innerRef: I,
                            tabIndex: b,
                            onFocus: R ?? E,
                            onMouseMove: E,
                            onClick: (t) => {
                                if (h?.current === !0 || f?.current === !0) return;
                                let n = t.altKey;
                                n && e.type === ee.op.STICKER && !(0, eu.o1)(e.sticker.id) && w(e.sticker.id),
                                    x?.(e, n);
                            },
                            onContextMenu: (e) => {
                                (0, e3.L3)(e, async () => {
                                    let { default: e } = await Promise.all([n.e("4774"), n.e("46132")]).then(
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
                                (0, l.jsx)(e6.A, { children: (0, ed.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !S && (0, l.jsx)("div", { className: e9.fw }),
                                        (0, l.jsx)(ed.A, {
                                            className: a()(e9.SI, {
                                                [e9.ot]:
                                                    S && !c && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [e9.Q$]: u,
                                                [e9.No]: _ && !(0, $.G7)(e.sticker, j, N),
                                            }),
                                            disableAnimation: !c && !s,
                                            enlargeOnInteraction: S,
                                            isInteracting: c,
                                            maskAsset: c,
                                            sticker: e.sticker,
                                            size: y,
                                        }),
                                        r ? (0, l.jsx)(e5, { size: 20 }) : null,
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
var tt = n(301938),
    tn = n(911385);
let tl = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    ti = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    ts = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    ta = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tr = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    to = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tc = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tu = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    td = (0, z.xI)(w.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    th = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tm = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tp = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tf = [ts, tr, to, tc],
    tg = [ta, tr, to, tc],
    tx = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tC = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
    tA = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, l.jsx)("div", {
            className: tt.yB,
            children: tC.map((e) =>
                (0, l.jsx)(
                    p.D,
                    {
                        className: tt.x_,
                        onClick: () => t(e),
                        children: (0, l.jsx)(e_.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                    },
                    e,
                ),
            ),
        });
    },
    tE = i.forwardRef(function (e, t) {
        let {
                collapsedStickersCategories: n,
                gridWidth: s,
                filteredStickers: a,
                getStickerItemProps: r,
                getStickerRowProps: o,
                gutterWidth: c,
                stickerPadding: u,
                isUsingKeyboardNavigation: h,
                onSelectSticker: m,
                rowCount: p,
                rowCountBySection: f,
                stickersCategories: g,
                stickersGrid: x,
                channel: C,
            } = e,
            A = th + 2 * u,
            E = i.useRef(!1),
            I = i.useRef(null),
            [y, v] = U.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], L.x),
            { analyticsLocations: S } = (0, D.Ay)(P.A.STICKER_PICKER),
            N = (0, V.RQ)((e) => e.searchQuery),
            j = (0, d.bG)([b.A], () => b.A.getPremiumPacks()),
            {
                renderRow: _,
                renderSection: T,
                renderSectionFooter: R,
                sectionFooterHeight: O,
                renderSectionHeader: w,
                sectionHeaderHeight: M,
            } = ((e) => {
                let {
                        collapsedStickersCategories: t,
                        gridWidth: n,
                        stickerPadding: s,
                        onSelectSticker: a,
                        getStickerItemProps: r,
                        getStickerRowProps: o,
                        gutterWidth: c,
                        inspectedStickerPosition: u,
                        isScrolling: h,
                        isUsingKeyboardNavigation: m,
                        stickersGrid: p,
                        stickersCategories: f,
                        filteredStickers: g,
                        ownedStickerPacks: x,
                        channel: C,
                    } = e,
                    A = (0, k.p)(),
                    E = (0, d.bG)([B.default], () => B.default.getCurrentUser()),
                    { handleStickerInspect: I, handleSelect: y } = ((e) => {
                        let { onSelectSticker: t, channel: n, currentUser: l } = e,
                            s = (0, k.p)(),
                            a = (0, V.RQ)((e) => e.searchQuery);
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
                                    let { sticker: r } = e;
                                    if (null == r) return;
                                    let o = {
                                        ...s.location,
                                        object:
                                            "" === a ? eh.ZSU.STICKER_PICKER_VIEW_ALL : eh.ZSU.STICKER_SEARCH_VIEW_ALL,
                                    };
                                    if (null != r && !(0, $.G7)(r, l, n)) {
                                        let e = (0, eu.Xw)(r);
                                        (0, $.W$)(r, l, n) === $.Ux.SENDABLE_WITH_PREMIUM && X(!0),
                                            e && $.Ux.SENDABLE_WITH_BOOSTED_GUILD;
                                        return;
                                    }
                                    i
                                        ? (0, eu.o1)(r.id)
                                            ? (0, eF.vr)(r.id)
                                            : ((0, Q.Dt)({ sticker: r, location: { ...o, object: eh.ZSU.STICKER } }),
                                              (0, eF.uK)(r.id))
                                        : t(e);
                                },
                                [s.location, a, l, n, t],
                            ),
                        };
                    })({ onSelectSticker: a, channel: C, currentUser: E }),
                    [v, S] = i.useState(!1),
                    N = i.useCallback((e) => {
                        W.tP.updateSetting(Array.from(e));
                    }, []),
                    j = i.useCallback(
                        (e) => {
                            let t = p[e];
                            return null != t
                                ? (0, l.jsx)(
                                      te,
                                      {
                                          getStickerItemProps: r,
                                          getStickerRowProps: o,
                                          gutterWidth: c,
                                          inspectedStickerPosition: u,
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
                                          channel: C,
                                          currentUser: E,
                                      },
                                      e,
                                  )
                                : null;
                        },
                        [p, r, o, c, u, h, m, I, y, n, s, x, C, E],
                    ),
                    _ = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
                    T = i.useCallback(
                        function (e) {
                            let { isStickerPack: n = !0 } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                l = new Set(t),
                                i = t.has(e);
                            i ? l.delete(e) : l.add(e),
                                K.default.track(eh.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                    location: A?.location,
                                    tab: em.kx.STICKER,
                                    collapsed: !i,
                                    sticker_pack_id: n ? e : null,
                                }),
                                N(l);
                        },
                        [A, t, N],
                    ),
                    R = i.useCallback(
                        (e) => {
                            let n = f[e];
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
                                            eG.A,
                                            {
                                                className: tt.jH,
                                                "aria-label": ep.intl.string(ep.t.wbfJFh),
                                                children: ep.intl.string(ep.t["05Z/0l"]),
                                            },
                                            "stickers-you-might-like-header",
                                        ),
                                    ],
                                });
                            }
                            switch (n.type) {
                                case ee.Z2.FAVORITE:
                                    return (0, l.jsx)(
                                        eG.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": ep.intl.formatToPlainString(ep.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, l.jsx)(ei.G, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => T(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case ee.Z2.RECENT:
                                    return (0, l.jsx)(
                                        eG.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": ep.intl.formatToPlainString(ep.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, l.jsx)(es.O, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => T(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case ee.Z2.GUILD:
                                case ee.Z2.EMPTY_GUILD_UPSELL: {
                                    let e = ec.A.getGuild(n.id);
                                    if (null == e) return null;
                                    return (0, l.jsx)(
                                        eG.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": ep.intl.formatToPlainString(ep.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, l.jsx)(er.A, { guild: e, height: 16, width: 16 }),
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
                                        eG.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": ep.intl.formatToPlainString(ep.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, l.jsx)(ed.A, {
                                                disableAnimation: !0,
                                                size: 12,
                                                sticker: (0, eu.Id)(e),
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
                        [t, f, T, g],
                    ),
                    O = i.useCallback(
                        (e) => {
                            if (null != g) {
                                let { sendable: t, sendableWithPremium: n } = g;
                                return 0 === e && t.length > 0 ? 0 : td + (t.length > 0 && n.length > 0 ? tu : 0);
                            }
                            return td;
                        },
                        [g],
                    );
                return {
                    renderRow: j,
                    renderSection: _,
                    renderSectionHeader: R,
                    sectionHeaderHeight: O,
                    renderSectionFooter: i.useCallback(
                        (e) => {
                            let n = f[e],
                                i = t.has(n.id);
                            return n.type !== ee.Z2.EMPTY_GUILD_UPSELL || null != g || i
                                ? null
                                : (0, l.jsx)(
                                      eY,
                                      {
                                          className: tt.Ij,
                                          guildId: n.id,
                                          channel: C,
                                          shouldTrackUpsellViewed: !v,
                                          setTrackedUpsellViewed: S,
                                      },
                                      `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                  );
                        },
                        [f, t, g, C, v],
                    ),
                    sectionFooterHeight: i.useCallback(
                        (e) => {
                            let n = f[e],
                                l = t.has(n.id);
                            return n.type !== ee.Z2.EMPTY_GUILD_UPSELL || l ? 0 : tx;
                        },
                        [f, t],
                    ),
                };
            })({
                collapsedStickersCategories: n,
                gridWidth: s,
                stickerPadding: u,
                stickersCategories: g,
                stickersGrid: x,
                isScrolling: E,
                isUsingKeyboardNavigation: h,
                onSelectSticker: m,
                getStickerItemProps: r,
                getStickerRowProps: o,
                gutterWidth: c,
                inspectedStickerPosition: v,
                filteredStickers: a,
                ownedStickerPacks: i.useMemo(() => new Set(j.map((e) => e.id)), [j]),
                channel: C,
            }),
            F = (0, G.Fk)({
                activeCategoryIndex: y,
                isScrolling: E,
                listRef: I,
                onActiveCategoryIndexChange: U.bM.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: N,
            });
        return (
            (0, G.FV)({ searchQuery: N, activeCategoryIndex: y, listRef: I }),
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
                        null != a && 0 === a.sendable.length && 0 === a.sendableWithPremium.length
                            ? (0, l.jsx)(eU.A, {
                                  message: ep.intl.string(ep.t["zc+LQd"]),
                                  className: tt.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: tn,
                                  suggestions: (0, l.jsx)(tA, { onSuggestionClick: (e) => (0, V.Ri)(e, !0) }),
                              })
                            : (0, l.jsx)(eV.A, {
                                  role: "none presentation",
                                  listPadding: null != a ? tg : tf,
                                  onScroll: F,
                                  renderRow: _,
                                  renderSection: null == a ? T : void 0,
                                  renderSectionHeader: w,
                                  renderSectionFooter: R,
                                  rowCount: p,
                                  rowCountBySection: f,
                                  rowHeight: s > tl ? A + tp : tm + 2 * u + tp,
                                  sectionHeaderHeight: M,
                                  sectionFooterHeight: O,
                                  stickyHeaders: !0,
                                  ref: I,
                              }),
                        (0, l.jsx)(e2, { stickersGrid: x }),
                    ],
                }),
            })
        );
    });
var tI = n(945810);
let ty = (0, tI.mj)({
    name: "2026-02-sticker-padding",
    kind: "user",
    defaultConfig: { padding: 2 },
    variations: { 1: { padding: 1 } },
});
var tv = n(602034),
    tS = n(892547),
    tN = n(337485);
let tj = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: s, channel: a } = e,
        r = (0, T.ZO)(a),
        o = i.useRef(null),
        { searchQuery: c, isSearchSuggestion: u } = (0, V.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            L.x,
        ),
        d = U.bM.useStore((e) => e.searchPlaceholder),
        [h, m] = U.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], L.x),
        p = i.useCallback(
            (e) => {
                U.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    U.bM.setInspectedExpressionPosition(0, 0),
                    U.bM.setSearchPlaceholder(null),
                    (0, V.Ri)(e),
                    s.current?.scrollTo(0);
            },
            [s],
        ),
        f = i.useCallback(() => {
            p("");
        }, [p]);
    return (
        i.useImperativeHandle(t, () => ({ focus: () => o.current?.focus() })),
        i.useLayoutEffect(() => {
            u && o.current?.focus();
        }, [u]),
        (0, l.jsx)("div", {
            className: tN.i,
            children: (0, l.jsx)(tS.I, {
                autoFocus: r,
                disabled: !r,
                query: c,
                ref: o,
                placeholder: d ?? (r ? ep.intl.string(ep.t.dt5h1C) : ep.intl.string(ep.t["Pck/4U"])),
                onClear: f,
                onKeyDown: n,
                onChange: p,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": ew.lq,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, tv.Aq)(ew.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
});
n(321073);
var t_ = n(768038),
    tT = n(789645),
    tb = n(927578),
    tR = n(217653),
    tO = n(939383);
let tL = () => X(!1),
    tw = (e) => {
        let { onLearnMore: t } = e,
            { analyticsLocations: n } = (0, D.Ay)(P.A.PREMIUM_UPSELL);
        i.useEffect(() => {
            K.default.track(eh.HAw.PREMIUM_UPSELL_VIEWED, {
                location_section: eh.JJy.STICKER_PICKER_UPSELL,
                type: eM.e.STICKER_PICKER_UPSELL,
                location_stack: n,
            });
        }, [n]);
        let s = (0, H.V)(),
            r = (0, eT.O)(),
            o = s?.subscription_trial?.sku_id === eM.pe.TIER_0,
            c = null != s || null != r;
        return (0, l.jsxs)("div", {
            className: a()(tR.VL, { [tR.Hz]: c }),
            children: [
                c
                    ? (0, l.jsx)(eb.Ay, {
                          trialOffer: s,
                          discountOffer: r,
                          onClose: tL,
                          type: eM.e.STICKER_PICKER_UPSELL,
                          subscriptionTier: s?.subscription_trial?.sku_id ?? eM.pe.TIER_2,
                          children: o
                              ? ep.intl.format(ep.t.MAGagw, {
                                    planName: (0, tb.RH)(eM.gD.PREMIUM_MONTH_TIER_0),
                                    onClick: t,
                                })
                              : ep.intl.format(ep.t.jt7JX6, { onClick: t }),
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("img", { className: tR.Tn, src: tO, alt: ep.intl.string(ep.t.do7AoM) }),
                              (0, l.jsx)(e_.E, {
                                  className: tR.ex,
                                  color: "text-strong",
                                  variant: "text-lg/semibold",
                                  children: ep.intl.string(ep.t.jJG1pl),
                              }),
                              (0, l.jsx)(e_.E, {
                                  className: tR.GR,
                                  variant: "text-md/normal",
                                  children: ep.intl.format(ep.t.jt7JX6, { onClick: t }),
                              }),
                          ],
                      }),
                !c && (0, l.jsx)(eL, { analyticsSection: eh.JJy.EXPRESSION_PICKER }),
                (0, l.jsx)(p.D, {
                    className: tR.kz,
                    onClick: tL,
                    children: (0, l.jsx)(tT.P, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    };
var tM = n(854138);
let tk = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tP = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tD = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tU = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tV = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    tG = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tF = (0, z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tH = O()(Q.Qz, 200),
    tW = O()(Q.HA, 200),
    tB = i.forwardRef(function (e, t) {
        let { containerWidth: s, channel: a, onSelectSticker: r, closePopout: o } = e,
            c = ty.useConfig({ location: "StickerPicker" }).padding,
            { location: u } = (0, k.p)(),
            { analyticsLocations: h } = (0, D.Ay)(P.A.STICKER_PICKER),
            p = (0, H.V)()?.subscription_trial != null,
            f = i.useRef(null),
            g = i.useRef(null),
            x = i.useRef(null),
            C = Y((e) => e.showPremiumUpsell),
            [A, E] = (0, V.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], L.x),
            I = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: ep }));
        let y = (0, T.pD)(a),
            v = 0 === y.filter((e) => e.type !== ee.Z2.EMPTY_GUILD_UPSELL).length,
            S = (0, G.oV)({
                gridWrapperRef: f,
                containerWidth: s,
                showingEmptyState: v,
                listPaddingLeft: tP,
                listScrollbarWidth: 8,
            }),
            N = W.tP.useSetting(),
            j = i.useMemo(() => new Set(N), [N]),
            _ = (0, d.bG)([B.default], () => B.default.getCurrentUser()),
            R = i.useMemo(
                () =>
                    ((e, t, n) => {
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
                                    let s = (0, $.W$)(e, t, n);
                                    s === $.Ux.SENDABLE ? l.push(e) : s === $.Ux.SENDABLE_WITH_PREMIUM && i.push(e);
                                }),
                            { sendable: l, sendableWithPremium: i }
                        );
                    })(A, _, a),
                [A, _, a],
            ),
            O = (0, T.Gc)(),
            w = (0, T.UT)(),
            M = (0, d.cf)([b.A], () => b.A.getAllGuildStickers()),
            { sendable: z = [], sendableWithPremium: Z = [] } = R ?? {},
            q = z.length + Z.length,
            J = i.useCallback(
                (e) => {
                    "" === A ? (0, Q.ry)(e) : (0, Q.nQ)(e, A, q), r(e.sticker, ee.D6.STICKER_PICKER);
                },
                [r, A, q],
            ),
            X = null != S && S > tk,
            {
                rowCount: el,
                rowCountBySection: ei,
                stickersGrid: es,
                gutterWidth: ea,
                columnCounts: er,
            } = (0, T._c)({
                filteredStickers: R,
                stickersCategories: y,
                collapsedStickersCategories: j,
                listWidth: S,
                listPaddingRight: tD,
                stickerNodeMargin: X ? tU : tV,
                stickerNodeWidth: X ? tG + 2 * c : tF + 2 * c,
            }),
            {
                getItemProps: eo,
                getRowProps: ec,
                gridContainerProps: eu,
                handleGridContainerKeyDown: ed,
                isUsingKeyboardNavigation: em,
            } = ((e) => {
                let {
                        columnCounts: t,
                        stickersGrid: n,
                        stickersListRef: l,
                        store: s,
                        gridNavigatorId: a,
                        setInspectedStickerPosition: r,
                        onGridItemSelect: o,
                    } = e,
                    c = (0, k.p)(),
                    u = i.useCallback(
                        (e) => {
                            o(e, c);
                        },
                        [o, c],
                    ),
                    d = i.useCallback(
                        (e, t) => {
                            r(e, t, en.t.GRID_NAVIGATOR_EVENT);
                        },
                        [r],
                    ),
                    {
                        gridDispatch: h,
                        getItemProps: m,
                        getRowProps: p,
                        gridContainerProps: f,
                        handleGridContainerKeyDown: g,
                        isUsingKeyboardNavigation: x,
                    } = (0, G.Ff)({
                        columnCounts: t,
                        gridNavigatorId: a,
                        itemGrid: n,
                        itemList: l,
                        onGridNavigatorItemSelect: u,
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
                        getRowProps: p,
                        gridContainerProps: f,
                        handleGridContainerKeyDown: g,
                        isUsingKeyboardNavigation: x,
                    }
                );
            })({
                columnCounts: er,
                stickersListRef: g,
                stickersGrid: es,
                onGridItemSelect: i.useCallback(
                    (e, t) => {
                        let { location: i } = t;
                        switch (e.type) {
                            case ee.op.CREATE_STICKER:
                                K.default.track(eh.HAw.OPEN_MODAL, { type: eh.JJy.CREATE_STICKER_MODAL, location: u }),
                                    (0, m.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("6287"),
                                            n.e("81510"),
                                            n.e("92652"),
                                            n.e("97027"),
                                            n.e("31232"),
                                            n.e("8891"),
                                            n.e("80436"),
                                            n.e("83952"),
                                            n.e("66580"),
                                            n.e("50342"),
                                            n.e("20643"),
                                            n.e("98913"),
                                            n.e("29143"),
                                        ]).then(n.bind(n, 445002));
                                        return (n) => (0, l.jsx)(t, { guildId: e.guild_id, ...n });
                                    });
                                break;
                            case ee.op.STICKER:
                                null != e.sticker && (0, $.G7)(e.sticker, _, a) && J(e);
                        }
                    },
                    [u, _, a, J],
                ),
                store: U.bM,
                setInspectedStickerPosition: U.bM.setInspectedExpressionPosition,
                gridNavigatorId: ew.lq,
            });
        i.useEffect(() => U.bM.resetStoreState, []);
        let ep = () => {
            let e = a.getGuildId(),
                t = [];
            null !== e && (t = b.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            null != M &&
                [...M.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, Q.p4)({
                    containerWidth: s,
                    favoriteStickers: O,
                    frequentlyUsedStickers: w,
                    guildStickers: t,
                    stickersTotal: n,
                });
        };
        i.useEffect(() => {
            "" === I.current && "" !== A && (0, Q.Fg)(), (I.current = A);
        }, [A]),
            i.useEffect(() => {
                0 === q ? tH(A) : tW(A, q, E);
            }, [A, q, E]),
            i.useLayoutEffect(() => {
                x.current?.focus();
            }, []);
        let ef = i.useCallback(() => {
            o(),
                K.default.track(eh.HAw.PREMIUM_PROMOTION_OPENED, { location_section: eh.JJy.STICKER_PICKER_UPSELL }),
                (0, F.e)();
        }, [o]);
        return (0, l.jsxs)(D.f5, {
            value: h,
            children: [
                !(p && v) &&
                    (0, l.jsx)("div", {
                        className: tM.wx,
                        children: (0, l.jsx)(tj, { ref: x, onKeyDown: ed, stickersListRef: g, channel: a }),
                    }),
                v
                    ? (0, l.jsx)(eP, { className: tM.p$, onClose: o })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  ref: f,
                                  className: tM.AD,
                                  id: ew.lq,
                                  ...eu,
                                  children:
                                      null != S
                                          ? (0, l.jsx)(tE, {
                                                ref: g,
                                                collapsedStickersCategories: j,
                                                filteredStickers: R,
                                                getStickerItemProps: eo,
                                                getStickerRowProps: ec,
                                                gridWidth: S,
                                                gutterWidth: ea,
                                                stickerPadding: c,
                                                isUsingKeyboardNavigation: em,
                                                onSelectSticker: J,
                                                rowCount: el,
                                                rowCountBySection: ei,
                                                stickersCategories: y,
                                                stickersGrid: es,
                                                channel: a,
                                            })
                                          : null,
                              }),
                              (0, l.jsx)(eN, { stickersListRef: g, channel: a }),
                          ],
                      }),
                C && (0, l.jsx)(tw, { onLearnMore: ef }),
            ],
        });
    }),
    tK = i.forwardRef(
        (e, t) => (
            (0, T.XQ)(),
            (0, l.jsx)("div", {
                className: tM.iE,
                id: ew.GX,
                "aria-labelledby": ew.LD,
                role: "tabpanel",
                children: e.isLoading ? (0, l.jsx)(M.y, { className: tM.Mz }) : (0, l.jsx)(tB, { ...e, ref: t }),
            })
        ),
    );
var tz = n(964404),
    tZ = n(712687),
    tq = n(625494);
let tJ = (0, tI.mj)({
    name: "2026-03-kaomoji-picker",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tY = n(364522);
let tX = [
    {
        category: "wave",
        categoryMessageKey: ep.t.GrrYHn,
        keywords: ["wave", "waving", "hand", "hello", "hi", "hey"],
        kaomojis: ["ヾ(＾-＾)ノ", "ヽ(•̀ᴗ•́)ノ", "ヾ(＾∇＾)", "|˶˙ᵕ˙ )ﾉﾞ", "☆ﾐ(o*･ω･)ﾉ", "(｡･ω･｡)ﾉ♡"],
    },
    {
        category: "happy",
        categoryMessageKey: ep.t.Tj0FXM,
        keywords: ["happy", "smile", "smiling", "joy"],
        kaomojis: ["^▽^", "⸂⸂⸜(രᴗര๑)⸝⸃⸃", "(◍•ᴗ•◍)", "(◕‿◕)", "꒰｡•◡•｡꒱", "(\xb4▽`)", "ദ്ദി ( ᵔ ᗜ ᵔ )", "( ͡• ͜ʖ ͡• )"],
    },
    {
        category: "excited",
        categoryMessageKey: ep.t.gQsrOG,
        keywords: ["excited", "enthusiastic", "thrilled", "cheerful", "hype", "yay"],
        kaomojis: ["(๑˃ᴗ˂)ﻭ", "ᕕ( ᐛ )ᕗ", "(ﾉ◕ヮ◕)ﾉ･ﾟ✧", "(☆▽☆)", "(੭ ˙ᗜ˙)੭", "(ﾉ≧∀≦)ﾉ", "ദ്ദി◝ ⩊ ◜.ᐟ"],
    },
    {
        category: "cute",
        categoryMessageKey: ep.t["/jZYwz"],
        keywords: ["cute", "kawaii", "adorable", "sweet"],
        kaomojis: [
            "ฅ^•ﻌ•^ฅ",
            "ʕ•ᴥ•ʔ",
            "૮ • ﻌ - ა",
            "(\xb4｡• ᵕ •｡`)",
            "|っ˘ω˘ς)",
            `𐔌՞ ܸ.ˬ.ܸ՞𐦯`,
            "༼ つ ◕_◕ ༽つ",
            "⊂༼ ◕_◕ ⊂ ༽",
        ],
    },
    {
        category: "love",
        categoryMessageKey: ep.t["4nnQWB"],
        keywords: ["love", "heart", "hearts", "affection"],
        kaomojis: ["(｡♥‿♥｡)", "(ෆ˙ᵕ˙ෆ)♡", "(灬\xba‿\xba灬)♡", "(◕‿◕)♡", "♡(˃͈ દ ˂͈ ༶ )", "(｡˃ ᵕ ˂ )⸝♡", "（╹◡╹）♡"],
    },
    {
        category: "cool",
        categoryMessageKey: ep.t.X4O8dY,
        keywords: ["cool", "chill", "awesome", "swag", "mischievous", "smug"],
        kaomojis: [
            "(｡•̀ᴗ-)✧",
            "(⌐■_■)",
            "ᕦ(\xf2_\xf3ˇ)ᕤ",
            "(•̀ᴗ•́)و ̑̑",
            "(\xac‿\xac )✧",
            "( ͡\xb0 ͜ʖ ͡\xb0)",
            "(≖ᴗ≖✿)",
            "( ͡ಠ ͜ʖ ͡ಠ)",
            "\xaf\\_(ツ)_/\xaf",
        ],
    },
    {
        category: "confused",
        categoryMessageKey: ep.t.ZUaZLp,
        keywords: ["confused", "huh", "what", "shrug", "idk"],
        kaomojis: ["(\xb7•᷄‎ࡇ•᷅ )", "(•́＿•̀)", "( ・◇・)？", "(◉＿◉)", "(⊙＿⊙)", "(o\xb4〰`o)"],
    },
    {
        category: "sad",
        categoryMessageKey: ep.t["/9vZ+t"],
        keywords: ["sad", "cry", "crying", "tears", "depressed", "sorrow"],
        kaomojis: ["(｡•́⌓•̀｡)", "(ㅠ﹏ㅠ)", "(｡•́︿•̀｡)", "(◞‸◟)", "(\xb4;ω;｀)", "( • ᴖ • ｡)", "(｡ŏ_ŏ)"],
    },
    {
        category: "angry",
        categoryMessageKey: ep.t.GUrGRo,
        keywords: ["angry", "mad", "rage", "frustrated", "annoyed"],
        kaomojis: ["(ಠ＿ಠ)", "(｀皿\xb4)", "(\xac＿\xac)", "(ಠ益ಠ)", "(≖＿≖ )", "(ᓀ‸ᓂ)", "( `へ\xb4* )"],
    },
    {
        category: "music",
        categoryMessageKey: ep.t.SwOaV2,
        keywords: ["music", "vibe", "beat", "bop"],
        kaomojis: [
            "d[.‿.]b",
            "♫⋆｡♪ ₊˚♬ ﾟ.",
            "↻ ◁ || ▷ ↺",
            "₊♪\uD834\uDD1E\uD834\uDD22₊⊹",
            "‧₊˚♪\uD834\uDD1E࿐₊˚⊹",
            "lıllılı.ıllı.ılılıı",
            "ᶻ \uD835\uDDD3 \uD803\uDC01 .ᐟ",
        ],
    },
    {
        category: "decorative",
        categoryMessageKey: ep.t.UisscN,
        keywords: ["deco", "decorative", "miscellaneous", "misc"],
        kaomojis: [
            "⋆˚꩜｡",
            "⊹ ࣪ ˖",
            "⋆˚✿˖\xb0",
            "⋆౨ৎ˚⟡˖ ࣪",
            "\uD81A\uDC7C.\uD81A\uDD23\uD81A\uDD67\uD81A\uDC7C.\uD81A\uDD23\uD81A\uDD67",
            "-ˋˏ✄┈┈⋆｡ﾟ",
            "☾.✴˚˖⁺✦",
        ],
    },
    {
        category: "flip",
        categoryMessageKey: ep.t["q/yMTa"],
        keywords: ["flip", "unflip", "tableflip"],
        kaomojis: ["(╯\xb0□\xb0)╯︵ ┻━┻", "┬─┬ノ( \xba _ \xbaノ)"],
        hidden: !0,
    },
];
var t$ = n(732139),
    tQ = n(235916);
function t0(e) {
    let { onSelect: t } = e,
        [n, s] = i.useState(""),
        a = i.useMemo(() => {
            let e = n.trim();
            return tX
                .map((e) => {
                    let t;
                    return {
                        ...e,
                        kaomojis:
                            "" === (t = n.trim().toLowerCase()) ||
                            e.keywords.some((e) => e.toLowerCase().startsWith(t) || t.startsWith(e.toLowerCase()))
                                ? e.kaomojis
                                : [],
                    };
                })
                .filter((e) => e.kaomojis.length > 0)
                .filter((t) => "" !== e || !0 !== t.hidden);
        }, [n]),
        r = i.useCallback(
            (e, n, l) => {
                E.Ay.trackWithMetadata(eh.HAw.EXPRESSION_PICKER_KAOMOJI_SELECTED, {
                    kaomoji: e,
                    category: n,
                    keyword: l,
                }),
                    t(e);
            },
            [t],
        ),
        o = i.useCallback((e) => {
            s(e);
        }, []),
        c = i.useCallback(() => {
            s("");
        }, []);
    return (0, l.jsxs)("div", {
        className: tQ.Zp,
        role: "region",
        "aria-label": ep.intl.string(ep.t["2pR2JI"]),
        children: [
            (0, l.jsx)("div", {
                className: tQ.wx,
                children: (0, l.jsx)(tS.I, {
                    query: n,
                    onChange: o,
                    onClear: c,
                    placeholder: ep.intl.string(ep.t["5h0QOP"]),
                    "aria-label": ep.intl.string(ep.t["5h0QOP"]),
                }),
            }),
            (0, l.jsx)(tY.Ip, {
                fade: !0,
                className: tQ.IA,
                children:
                    a.length > 0
                        ? (0, l.jsx)("div", {
                              className: tQ.tt,
                              children: a.map((e) =>
                                  (0, l.jsxs)(
                                      "div",
                                      {
                                          className: tQ.hl,
                                          role: "group",
                                          "aria-labelledby": `kaomoji-category-${e.category}`,
                                          children: [
                                              (0, l.jsx)(e_.E, {
                                                  id: `kaomoji-category-${e.category}`,
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  className: tQ.Jm,
                                                  children: ep.intl.string(e.categoryMessageKey),
                                              }),
                                              (0, l.jsx)("div", {
                                                  className: tQ.Hu,
                                                  role: "list",
                                                  children: e.kaomojis.map((t, i) =>
                                                      (0, l.jsx)(
                                                          "div",
                                                          {
                                                              className: tQ.Yx,
                                                              role: "listitem",
                                                              children: (0, l.jsx)(eR.$, {
                                                                  variant: "secondary",
                                                                  size: "sm",
                                                                  fullWidth: !0,
                                                                  onClick: () => r(t, e.category, n.trim()),
                                                                  text: t,
                                                                  "aria-label": ep.intl.formatToPlainString(
                                                                      ep.t["hi+F96"],
                                                                      {
                                                                          category: ep.intl.string(
                                                                              e.categoryMessageKey,
                                                                          ),
                                                                          number: i + 1,
                                                                      },
                                                                  ),
                                                              }),
                                                          },
                                                          `${e.category}-${t}`,
                                                      ),
                                                  ),
                                              }),
                                          ],
                                      },
                                      e.category,
                                  ),
                              ),
                          })
                        : (0, l.jsx)("div", {
                              "aria-live": "polite",
                              "aria-atomic": !0,
                              children: (0, l.jsx)(e_.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  className: tQ.p$,
                                  children: ep.intl.string(ep.t.V6nAfF),
                              }),
                          }),
            }),
        ],
    });
}
function t1(e) {
    return (0, l.jsx)("div", {
        className: tQ.iE,
        id: t$.pE,
        role: "tabpanel",
        "aria-labelledby": t$.W3,
        children: (0, l.jsx)(t0, { ...e }),
    });
}
var t2 = n(49999),
    t6 = n(307731),
    t3 = n(645264);
let t7 = 498 + t$.as.MEDIUM,
    t4 = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: s = !1, "aria-controls": r, ...o } = e;
        return (0, l.jsx)(p.D, {
            role: "tab",
            autoFocus: s,
            "aria-controls": t ? r : void 0,
            ...o,
            onClick: () => {
                E.Ay.trackWithMetadata(eh.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, V.U)(i);
            },
            "aria-current": t ? "page" : void 0,
            className: a()(n, t3.oi, t3.pc, { [t3.Mv]: t }),
        });
    }),
    t8 = i.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: s,
                onSelectEmoji: r,
                onSelectSticker: p,
                onSelectSound: R,
                onSelectKaomoji: O,
                channel: L,
                type: w,
                position: M,
                align: k,
                positionLayerClassName: P,
                closeOnModalOuterClick: D = !1,
                parentModalKey: U,
            } = e,
            G = i.useRef(null),
            F = i.useRef(!1),
            H = i.useRef(null),
            W = i.useRef(null),
            { drawerWidth: B, handleDrawerResizeHandleMouseDown: K } = ((e) => {
                let { positionContainerRef: t, drawerRef: n, orientation: l } = e,
                    s = (0, d.bG)([tz.Ay], () => tz.Ay.expressionPickerWidth),
                    [a, r] = i.useState(window.innerWidth),
                    [c, u] = i.useState(s ?? em.wp.MIN),
                    h = i.useMemo(() => {
                        switch (c) {
                            case em.wp.MIN:
                                return 498;
                            case em.wp.MAX:
                                return null;
                            default:
                                return c;
                        }
                    }, [c]),
                    m = i.useCallback(
                        (e) => {
                            let t = e >= a ? em.wp.MAX : e <= 498 ? em.wp.MIN : e;
                            null == t && null != n.current && (n.current.style.width = ""),
                                x.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                u(t);
                        },
                        [n, a],
                    ),
                    p = (0, A.A)({
                        initialElementDimension: h,
                        maxDimension: a,
                        minDimension: 498,
                        resizableDomNodeRef: n,
                        onElementResize: m,
                        orientation: l,
                    });
                return (
                    i.useEffect(() => {
                        let e = o().debounce(() => {
                            null != t.current && r(t.current.offsetWidth);
                        }, 500);
                        return (
                            window.addEventListener("resize", e),
                            () => {
                                window.removeEventListener("resize", e);
                            }
                        );
                    }, [t]),
                    i.useLayoutEffect(() => {
                        null != t.current && r(t.current.offsetWidth);
                    }, [t]),
                    {
                        drawerWidth: h,
                        handleDrawerResizeHandleMouseDown: i.useCallback(
                            (e) => {
                                e.stopPropagation(), null != t.current && r(t.current.offsetWidth), p(e);
                            },
                            [t, p],
                        ),
                    }
                );
            })({
                positionContainerRef: G,
                drawerRef: W,
                orientation: "left" === k ? A.R.HORIZONTAL_RIGHT : A.R.HORIZONTAL_LEFT,
            }),
            z = (0, V.RQ)((e) => e.activeView),
            Z = (0, T.ZO)(L),
            { renderWindow: q, windowDispatch: J } = i.useContext(N.Ay),
            Y = (0, d.bG)([b.A], () => !b.A.hasLoadedStickerPacks),
            X = (0, j.tj)({ location: "expression_picker" }),
            $ = tJ.useConfig({ location: "expression_picker" }).enabled,
            Q = (0, d.bG)([tZ.A], () => tZ.A.isOpen()),
            ee = null != U,
            et = (0, m.useIsModalAtTop)(U ?? ""),
            en = w.gifs?.allowSending && !c.Fr && null != s,
            el = w.stickers?.allowSending && null != p,
            ei = !w.expressionPicker?.onlyEmojis && (en || el),
            es = i.useCallback(
                (e) => {
                    if ((!ee && (0, m.hasAnyModalOpen)()) || (ee && !(et && D)) || Q || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, u.vq)(t) && null != t.closest("." + em.VQ)) return;
                    for (; (0, u.vq)(t); ) {
                        if (
                            t === W.current ||
                            "true" === t.getAttribute("data-menu-item") ||
                            "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                            "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                        )
                            return;
                        t = t.parentNode;
                    }
                    (0, V.v8)();
                    let n = (0, u.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && tq._.dispatchToLastSubscribed(eh.jej.TEXTAREA_FOCUS);
                },
                [D, et, ee, Q],
            ),
            ea = i.useCallback(() => {
                (0, V.v8)();
            }, []);
        i.useLayoutEffect(() => {
            let e = () => {
                z === em.kx.GIF && (0, V.v8)();
            };
            return (
                q.addEventListener("mousedown", es),
                q.addEventListener("contextmenu", es),
                J.subscribe(eh.jej.POPOUT_CLOSE, ea),
                tq._.subscribe(eh.jej.CLOSE_GIF_PICKER, e),
                () => {
                    q.removeEventListener("mousedown", es),
                        q.removeEventListener("contextmenu", es),
                        J.unsubscribe(eh.jej.POPOUT_CLOSE, ea),
                        tq._.unsubscribe(eh.jej.CLOSE_GIF_PICKER, e);
                }
            );
        }, [z, ea, es, q, J]),
            (0, f.t)(G);
        let [er, eo] = (0, I.kn)(X ? [h.M.SOUNDMOJI_BADGE] : [], void 0, !1),
            [ec, eu] = i.useState(!1);
        i.useEffect(() => {
            z === em.kx.SOUNDBOARD && eu(!0);
        }, [z]),
            i.useEffect(
                () => () => {
                    ec && eo(t2.i.TAKE_ACTION);
                },
                [ec, eo],
            ),
            i.useEffect(() => {
                (0, V.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!ee && (0, m.hasAnyModalOpen)()) || (ee && !et)) && (0, V.v8)();
            }, [et, ee]),
            i.useEffect(() => {
                null != W.current &&
                    !F.current &&
                    (z === em.kx.EMOJI
                        ? H?.current?.onPickerOpen != null && (H?.current?.onPickerOpen(), (F.current = !0))
                        : z === em.kx.STICKER
                          ? H?.current?.onPickerOpen == null || Y || (H?.current?.onPickerOpen(), (F.current = !0))
                          : (E.Ay.trackWithMetadata(eh.HAw.EXPRESSION_PICKER_OPENED, {
                                width: W.current.offsetWidth,
                                tab: z,
                                badged: !1,
                            }),
                            (F.current = !0)));
            });
        let ed = i.useCallback((e, t) => R?.(e, "emoji_picker", t), [R]),
            ef = i.useCallback((e, t) => R?.(e, "soundboard_picker", t), [R]),
            eg = w.soundmoji?.allowSending === !0 && null != R,
            ex = $ && null != O && w.expressionPicker?.onlyEmojis !== !0;
        i.useEffect(() => {
            z !== em.kx.KAOMOJI || ex || (0, V.U)(em.kx.EMOJI);
        }, [z, ex]);
        let eC = "left" === k ? "right" : "left",
            eA = null != P ? P : "left" === k ? t3.sj : t3.Jg,
            eE = en
                ? (0, l.jsx)(t4, {
                      id: t$.g9,
                      "aria-controls": t$.ni,
                      "aria-selected": z === em.kx.GIF,
                      isActive: z === em.kx.GIF,
                      viewType: em.kx.GIF,
                      children: ep.intl.string(ep.t["6gUTsS"]),
                  })
                : null,
            eI = el
                ? (0, l.jsx)(t4, {
                      id: ew.LD,
                      "aria-controls": ew.GX,
                      "aria-selected": z === em.kx.STICKER,
                      isActive: z === em.kx.STICKER,
                      autoFocus: !Z,
                      viewType: em.kx.STICKER,
                      children: (0, l.jsx)("div", { className: t3.dG, children: ep.intl.string(ep.t.nf1s3u) }),
                  })
                : null,
            ey = (0, l.jsx)(t4, {
                id: t$.k1,
                "aria-controls": t$.Do,
                "aria-selected": z === em.kx.EMOJI,
                isActive: z === em.kx.EMOJI,
                viewType: em.kx.EMOJI,
                children: ep.intl.string(ep.t.Xu3wE3),
            });
        return (0, l.jsx)(C.A, {
            section: eh.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(S.nE, {
                className: a()(t3.T8, eA),
                targetRef: t,
                position: M,
                align: k,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: a()(t3.V6, { [t3.D0]: !ei }),
                        ref: G,
                        role: "dialog",
                        "aria-label": ep.intl.string(ep.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: t3.jP,
                                  style: { width: null == B ? void 0 : B, [k]: 0 },
                                  ref: W,
                                  children: [
                                      (0, l.jsx)("div", { className: t3.Di, onMouseDown: K, style: { [eC]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: t3.FG,
                                          children: [
                                              ei
                                                  ? (0, l.jsx)("nav", {
                                                        className: t3.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: t3.CT,
                                                            role: "tablist",
                                                            "aria-label": ep.intl.string(ep.t["2j4Vgd"]),
                                                            children: [
                                                                eE,
                                                                eI,
                                                                ey,
                                                                X &&
                                                                    eg &&
                                                                    (0, l.jsx)(t4, {
                                                                        id: t$.N6,
                                                                        "aria-controls": t$.AA,
                                                                        "aria-selected": z === em.kx.SOUNDBOARD,
                                                                        isActive: z === em.kx.SOUNDBOARD,
                                                                        viewType: em.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: t3.sd,
                                                                            children: [
                                                                                ep.intl.string(ep.t.EHlAMc),
                                                                                null != er &&
                                                                                    (0, l.jsx)(g.Lp, {
                                                                                        text: ep.intl.string(
                                                                                            ep.t.y2b7CA,
                                                                                        ),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                ex
                                                                    ? (0, l.jsx)(t4, {
                                                                          id: t$.W3,
                                                                          "aria-controls": t$.pE,
                                                                          "aria-selected": z === em.kx.KAOMOJI,
                                                                          isActive: z === em.kx.KAOMOJI,
                                                                          viewType: em.kx.KAOMOJI,
                                                                          "aria-label": ep.intl.string(ep.t["2pR2JI"]),
                                                                          children: "^▽^",
                                                                      })
                                                                    : null,
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              z === em.kx.STICKER && el
                                                  ? (0, l.jsx)(tK, {
                                                        isLoading: Y,
                                                        channel: L,
                                                        containerWidth: B,
                                                        onSelectSticker: p,
                                                        closePopout: ea,
                                                        ref: (e) => {
                                                            H.current = e;
                                                        },
                                                    })
                                                  : null,
                                              z === em.kx.GIF && en
                                                  ? (0, l.jsx)(v.A, {
                                                        onSelectGIF: s,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              z === em.kx.EMOJI
                                                  ? (0, l.jsx)(y.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: L,
                                                        containerWidth: B,
                                                        emojiSize: null != B && B < t7 ? t$.as.MEDIUM : t$.as.LARGE,
                                                        pickerIntention:
                                                            w.expressionPicker?.emojiIntention ??
                                                            t6.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == L || null != L.guild_id,
                                                        closePopout: ea,
                                                        onSelectEmoji: r,
                                                        onSelectSoundmoji: ed,
                                                        ref: (e) => {
                                                            H.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            w.soundmoji?.allowSending === !0,
                                                    })
                                                  : null,
                                              z === em.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: t3.z,
                                                        children: (0, l.jsx)(_.A, {
                                                            guildId: L.guild_id,
                                                            channel: L,
                                                            containerWidth: B,
                                                            onClose: ea,
                                                            onSelect: ef,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: t3.BG, children: e }),
                                                            inExpressionPicker: !0,
                                                            shouldValidateSelectedSound: !0,
                                                        }),
                                                    })
                                                  : null,
                                              ex && z === em.kx.KAOMOJI ? (0, l.jsx)(t1, { onSelect: O }) : null,
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
