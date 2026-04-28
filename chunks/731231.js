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
    _ = n(817281),
    x = n(820284),
    C = n(761929),
    A = n(58149),
    E = n(932001),
    I = n(267889),
    v = n(622142),
    y = n(750506),
    b = n(267102),
    S = n(704591),
    N = n(126970),
    j = n(256449),
    T = n(750385),
    w = n(111956),
    R = n.n(w),
    L = n(942381),
    k = n(319060),
    O = n(289873),
    M = n(212245),
    P = n(793574),
    D = n(688810),
    U = n(850992),
    V = n(151271),
    G = n(464651),
    F = n(87719),
    B = n(234419),
    H = n(253932),
    W = n(287809),
    K = n(954571),
    z = n(240248),
    Z = n(353640),
    q = n(121894);
let J = Object.freeze({ showPremiumUpsell: !1 }),
    Y = (0, Z.v)((e) => J),
    $ = (e) => {
        (0, q.r)(() => Y.setState({ showPremiumUpsell: e }));
    };
var X = n(361670),
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
let eg = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    e_ = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    ex = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eC = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    eA = (0, z.xI)(k.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eE = (0, z.xI)(k.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    eI = [eg, eg, eg, eg],
    ev = (e_ + ex) * 2 + eg,
    ey = eA + 2 * eE,
    eb = (e) => {
        let { stickersListRef: t, channel: n } = e,
            s = i.useRef(null),
            [r, o] = i.useState(!0),
            c = U.bM.useStore((e) => e.activeCategoryIndex),
            u = (0, j.pD)(n),
            {
                firstStandardStickerCategoryIndex: d,
                firstStandardStickerCategoryOffsetTop: h,
                guildCategoryCount: m,
                hasFirstPartyStickerPacks: f,
            } = i.useMemo(() => {
                let e = u.filter((e) => e.type === ee.Z2.GUILD).length,
                    t = e + +(u[0]?.type === ee.Z2.RECENT) + +(u[0]?.type === ee.Z2.FAVORITE),
                    n = t * (e_ + ex) - ex + ey;
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
                rowHeight: _,
                onScroll: x,
            } = ((e) => {
                let {
                        activeIndex: t,
                        stickerPickerCategories: n,
                        categoryListRef: s,
                        firstStandardStickerCategoryOffsetTop: r,
                        setShouldRenderShortcut: o,
                    } = e,
                    c = (0, M.p)(),
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
                                                height: eC,
                                                width: eC,
                                            }),
                                        }),
                                    },
                                    "recent",
                                );
                            let g = t === s,
                                _ = n[s],
                                x = n[s + 1],
                                C = null != x && _.type === ee.Z2.GUILD && x.type !== ee.Z2.GUILD,
                                A = _.type === ee.Z2.PACK,
                                E = "",
                                I = null;
                            if (_.type === ee.Z2.GUILD || _.type === ee.Z2.EMPTY_GUILD_UPSELL) {
                                let e = ec.A.getGuild(_.id);
                                null != e &&
                                    ((o = e.id), (E = e.name), (I = (0, l.jsx)(er.A, { guild: e, isSelected: g })));
                            } else if (A) {
                                let e = T.A.getStickerPack(_.id);
                                null != e &&
                                    ((E = e.name),
                                    (I = (0, l.jsx)(ed.A, {
                                        disableAnimation: !g || u,
                                        size: e_,
                                        sticker: (0, eu.Id)(e),
                                    })));
                            }
                            return (0, l.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, l.jsx)(el.m, {
                                            position: "right",
                                            text: E,
                                            children: (0, l.jsx)("div", {
                                                role: "listitem",
                                                "aria-setsize": f,
                                                "aria-posinset": s,
                                                children: (0, l.jsx)(p.D, {
                                                    "aria-label": E,
                                                    className: a()(ef._0, { [ef.ND]: A, [ef.Ms]: !u && g && A }),
                                                    onClick: () => {
                                                        _.type === ee.Z2.PACK &&
                                                            K.default.track(
                                                                eh.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED,
                                                                {
                                                                    location: c?.location,
                                                                    tab: em.kx.STICKER,
                                                                    sticker_pack_id: _.id,
                                                                    guild_id: o,
                                                                },
                                                            ),
                                                            r();
                                                    },
                                                    children: I,
                                                }),
                                            }),
                                        }),
                                        C ? (0, l.jsx)("hr", { className: ef.ny }, "separator") : null,
                                    ],
                                },
                                _.id,
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
                            return e_ + (null != i && l.type === ee.Z2.GUILD && i.type !== ee.Z2.GUILD ? ey : ex);
                        },
                        [n],
                    ),
                    onScroll: i.useCallback(
                        (e) => {
                            let t = s.current?.getListDimensions();
                            null == t || o(e + t.height - eA < r);
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
            C = i.useCallback(
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
            listPadding: eI,
            onScroll: x,
            renderCategoryListItem: g,
            rowCount: u.length,
            categories: u,
            categoryHeight: _,
            children: (e) =>
                f &&
                r &&
                (0, l.jsx)(p.D, {
                    className: a()(ef.Fe, { [ef.Q6]: !r }),
                    onClick: () => C(e),
                    children: (0, l.jsx)(ea.t, { size: "md", color: "currentColor" }),
                }),
        });
    };
var eS = n(534514),
    eN = n(834730),
    ej = n(422936),
    eT = n(811611),
    ew = n(821609),
    eR = n(403581);
function eL(e) {
    let { analyticsSection: t, buttonText: i } = e;
    return (0, l.jsx)(ew.$, {
        variant: "expressive",
        icon: eR.t,
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
                    let { default: e } = await n.e("53274").then(n.bind(n, 397313));
                    return (t) => (0, l.jsx)(e, { ...t });
                }))
            );
        },
    });
}
var ek = n(823894),
    eO = n(788868),
    eM = n(83148);
function eP(e) {
    let { className: t, onClose: n } = e;
    (0, j.XQ)();
    let { analyticsLocations: s } = (0, D.Ay)(P.A.EMPTY_STATE),
        r = (0, d.yK)([T.A], () => ek.vX.map((e) => T.A.getStickerById(e)));
    i.useEffect(() => {
        K.default.track(eh.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eO.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: eh.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: s,
        });
    }, [s]);
    let o = (0, B.V)(),
        c = (0, ej.O)(),
        u = null != o || null != c;
    return (0, l.jsxs)("div", {
        className: a()(eM.p$, t, { [eM.Hz]: u }),
        children: [
            u
                ? (0, l.jsx)(eT.Ay, {
                      discountOffer: c,
                      trialOffer: o,
                      onClose: n,
                      type: eO.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscription_trial?.sku_id ?? eO.pe.TIER_2,
                      children: ep.intl.string(ep.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eS.D, {
                              className: eM.wx,
                              variant: "heading-xl/semibold",
                              children: ep.intl.string(ep.t.HEm04J),
                          }),
                          (0, l.jsx)(eN.E, {
                              className: eM.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: ep.intl.string(ep.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: eM.l1,
                              children: r
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(ed.A, { sticker: e, className: eM.yI, size: 80 }, e?.id)),
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
    eB = n(369163),
    eH = n(123292),
    eW = n(631305),
    eK = n(997509),
    ez = n(931991),
    eZ = n(473145),
    eq = n(874864),
    eJ = n(832938);
let eY = (e) => {
    let { className: t, guildId: n, channel: s, shouldTrackUpsellViewed: r, setTrackedUpsellViewed: o } = e,
        { location: c } = (0, M.p)(),
        { analyticsLocations: u } = (0, D.Ay)(),
        h = (0, d.bG)([ec.A], () => ec.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, ez.nr)(h),
        p = null != h && 0 === (0, eZ.aG)(h.premiumTier) && !h.features.has(eh.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            p &&
            r &&
            ((0, A.zV)(eh.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
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
                      (0, l.jsx)(eB.v, { size: "md", color: "currentColor", className: eJ.Kk }),
                      (0, l.jsx)(eN.E, {
                          color: "interactive-text-default",
                          className: eJ.rf,
                          variant: "text-sm/normal",
                          children: ep.intl.format(ep.t.AXWla1, { count: (0, eZ.aG)(eh.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(eH.Q, {
                          variant: "primary",
                          text: ep.intl.string(ep.t["Gb+BJD"]),
                          onClick: () => {
                              (0, eW.A)({
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
                      (0, l.jsx)(eN.E, {
                          color: "interactive-text-default",
                          className: eJ.rf,
                          variant: "text-sm/normal",
                          children: ep.intl.string(ep.t.S83wgh),
                      }),
                      (0, l.jsx)(eH.Q, {
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
var e$ = n(307301),
    eX = n(182922),
    eQ = n(867981);
let e0 = (0, z.xI)(k.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    e1 = (0, z.xI)(k.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
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
                    let i = T.A.getStickerPack(e.pack_id);
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
                          children: (0, l.jsx)(e$.j, { size: "md", color: "currentColor", className: eQ.K }),
                      });
        return (0, l.jsx)(eX.A, {
            graphicPrimary: o,
            graphicSecondary: a,
            titlePrimary: s.name,
            titleSecondary: (0, eu.FD)(s) || (0, eu.Xw)(s) ? r : null,
        });
    });
var e6 = n(140735),
    e3 = n(442433),
    e4 = n(304072),
    e7 = n(194261),
    e8 = n(429631);
let e5 = (e) => {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: e8.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(e7.X, { size: "xxs", color: "currentColor", className: e8.I }),
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
            onSelect: _,
            rowIndex: x,
            stickerClassName: C,
            stickerDescriptors: A,
            stickerPadding: E,
            stickerSize: I,
            ownedStickerPacks: v,
            enlargeOnInteraction: y = !1,
            channel: b,
            currentUser: S,
            checkSendability: N = !0,
        } = e,
        { location: j } = (0, M.p)(),
        T = I + 2 * E,
        w = i.useMemo(
            () => ({
                gridColumnGap: u,
                gridTemplateColumns: `repeat(auto-fill, ${T}px)`,
                height: T,
                paddingRight: t ? void 0 : T,
            }),
            [t, u, T],
        ),
        R = i.useMemo(() => ({ width: I, height: I, padding: E }), [E, I]),
        [L, k] = (0, e4.A)(null, 300);
    return (0, l.jsx)("div", {
        className: e9.nM,
        style: w,
        ...c?.(x),
        children: A.map((e) => {
            let c = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                u = e.type === ee.op.STICKER && y && c,
                A = (0, r.throttle)(() => {
                    h?.current === !0 || f?.current === !0 || c || g?.(e);
                }, 250),
                { ref: E, tabIndex: T, onFocus: w, ...O } = o?.(e.columnIndex, x) ?? {};
            switch (e.type) {
                case ee.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...O,
                            children: (0, l.jsxs)(p.D, {
                                "aria-label": e.name,
                                className: a()(e9.wP, C, { [e9.Kj]: c }),
                                innerRef: E,
                                tabIndex: T,
                                onFocus: w ?? A,
                                onMouseMove: A,
                                onClick: () => {
                                    e.type === ee.op.CREATE_STICKER &&
                                        (K.default.track(eh.HAw.OPEN_MODAL, {
                                            type: eh.JJy.CREATE_STICKER_MODAL,
                                            location: j,
                                        }),
                                        (0, m.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([n.e("29143"), n.e("93796")]).then(
                                                n.bind(n, 445002),
                                            );
                                            return (n) => (0, l.jsx)(t, { guildId: e.guild_id, ...n });
                                        }));
                                },
                                style: R,
                                children: [
                                    !y && (0, l.jsx)("div", { className: e9.fw }),
                                    (0, l.jsx)("div", {
                                        className: e9.P0,
                                        children: (0, l.jsx)(e$.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: e9.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(eN.E, {
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
                        { ...O, key: e.sticker.id },
                        (0, l.jsxs)(p.D, {
                            className: a()(e9.yI, C, { [e9.PV]: c, [e9.TV]: L === e.sticker.id }),
                            innerRef: E,
                            tabIndex: T,
                            onFocus: w ?? A,
                            onMouseMove: A,
                            onClick: (t) => {
                                if (h?.current === !0 || f?.current === !0) return;
                                let n = t.altKey;
                                n && e.type === ee.op.STICKER && !(0, eu.o1)(e.sticker.id) && k(e.sticker.id),
                                    _?.(e, n);
                            },
                            onContextMenu: (e) => {
                                (0, e3.L3)(e, async () => {
                                    let { default: e } = await n.e("23751").then(n.bind(n, 233503));
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                            style: R,
                            "data-type": en.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, l.jsx)(e6.A, { children: (0, ed.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !y && (0, l.jsx)("div", { className: e9.fw }),
                                        (0, l.jsx)(ed.A, {
                                            className: a()(e9.SI, {
                                                [e9.ot]:
                                                    y && !c && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [e9.Q$]: u,
                                                [e9.No]: N && !(0, X.G7)(e.sticker, S, b),
                                            }),
                                            disableAnimation: !c && !s,
                                            enlargeOnInteraction: y,
                                            isInteracting: c,
                                            maskAsset: c,
                                            sticker: e.sticker,
                                            size: I,
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
let tl = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    ti = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    ts = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    ta = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tr = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    to = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tc = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tu = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    td = (0, z.xI)(k.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    th = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tm = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tp = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tf = [ts, tr, to, tc],
    tg = [ta, tr, to, tc],
    t_ = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tx = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
    tC = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, l.jsx)("div", {
            className: tt.yB,
            children: tx.map((e) =>
                (0, l.jsx)(
                    p.D,
                    {
                        className: tt.x_,
                        onClick: () => t(e),
                        children: (0, l.jsx)(eN.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                    },
                    e,
                ),
            ),
        });
    },
    tA = i.forwardRef(function (e, t) {
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
                stickersGrid: _,
                channel: x,
            } = e,
            C = th + 2 * u,
            A = i.useRef(!1),
            E = i.useRef(null),
            [I, v] = U.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], L.x),
            { analyticsLocations: y } = (0, D.Ay)(P.A.STICKER_PICKER),
            b = (0, V.RQ)((e) => e.searchQuery),
            S = (0, d.bG)([T.A], () => T.A.getPremiumPacks()),
            {
                renderRow: N,
                renderSection: j,
                renderSectionFooter: w,
                sectionFooterHeight: R,
                renderSectionHeader: k,
                sectionHeaderHeight: O,
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
                        ownedStickerPacks: _,
                        channel: x,
                    } = e,
                    C = (0, M.p)(),
                    A = (0, d.bG)([W.default], () => W.default.getCurrentUser()),
                    { handleStickerInspect: E, handleSelect: I } = ((e) => {
                        let { onSelectSticker: t, channel: n, currentUser: l } = e,
                            s = (0, M.p)(),
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
                                    if (null != r && !(0, X.G7)(r, l, n)) {
                                        let e = (0, eu.Xw)(r);
                                        (0, X.W$)(r, l, n) === X.Ux.SENDABLE_WITH_PREMIUM && $(!0),
                                            e && X.Ux.SENDABLE_WITH_BOOSTED_GUILD;
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
                    })({ onSelectSticker: a, channel: x, currentUser: A }),
                    [v, y] = i.useState(!1),
                    b = i.useCallback((e) => {
                        H.tP.updateSetting(Array.from(e));
                    }, []),
                    S = i.useCallback(
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
                                          onInspect: E,
                                          onSelect: I,
                                          rowIndex: e,
                                          stickerClassName: tt.yI,
                                          stickerDescriptors: t,
                                          stickerSize: n > tl ? th : tm,
                                          stickerPadding: s,
                                          preferAnimation: n <= ti,
                                          ownedStickerPacks: _,
                                          isDisplayingIndividualStickers: !0,
                                          channel: x,
                                          currentUser: A,
                                      },
                                      e,
                                  )
                                : null;
                        },
                        [p, r, o, c, u, h, m, E, I, n, s, _, x, A],
                    ),
                    N = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
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
                                b(l);
                        },
                        [C, t, b],
                    ),
                    w = i.useCallback(
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
                                            onClick: () => j(n.id, { isStickerPack: !1 }),
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
                                            onClick: () => j(n.id, { isStickerPack: !1 }),
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
                                            onClick: () => j(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                                case ee.Z2.PACK: {
                                    let e = T.A.getStickerPack(n.id);
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
                                            onClick: () => j(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                            }
                        },
                        [t, f, j, g],
                    ),
                    R = i.useCallback(
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
                    renderRow: S,
                    renderSection: N,
                    renderSectionHeader: w,
                    sectionHeaderHeight: R,
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
                                          channel: x,
                                          shouldTrackUpsellViewed: !v,
                                          setTrackedUpsellViewed: y,
                                      },
                                      `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                  );
                        },
                        [f, t, g, x, v],
                    ),
                    sectionFooterHeight: i.useCallback(
                        (e) => {
                            let n = f[e],
                                l = t.has(n.id);
                            return n.type !== ee.Z2.EMPTY_GUILD_UPSELL || l ? 0 : t_;
                        },
                        [f, t],
                    ),
                };
            })({
                collapsedStickersCategories: n,
                gridWidth: s,
                stickerPadding: u,
                stickersCategories: g,
                stickersGrid: _,
                isScrolling: A,
                isUsingKeyboardNavigation: h,
                onSelectSticker: m,
                getStickerItemProps: r,
                getStickerRowProps: o,
                gutterWidth: c,
                inspectedStickerPosition: v,
                filteredStickers: a,
                ownedStickerPacks: i.useMemo(() => new Set(S.map((e) => e.id)), [S]),
                channel: x,
            }),
            F = (0, G.Fk)({
                activeCategoryIndex: I,
                isScrolling: A,
                listRef: E,
                onActiveCategoryIndexChange: U.bM.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: b,
            });
        return (
            (0, G.FV)({ searchQuery: b, activeCategoryIndex: I, listRef: E }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return E.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => E.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => E.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return E.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return E.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return E.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return E.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return E.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, l.jsx)(D.f5, {
                value: y,
                children: (0, l.jsxs)("div", {
                    className: tt.iE,
                    children: [
                        null != a && 0 === a.sendable.length && 0 === a.sendableWithPremium.length
                            ? (0, l.jsx)(eU.A, {
                                  message: ep.intl.string(ep.t["zc+LQd"]),
                                  className: tt.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: tn,
                                  suggestions: (0, l.jsx)(tC, { onSuggestionClick: (e) => (0, V.Ri)(e, !0) }),
                              })
                            : (0, l.jsx)(eV.A, {
                                  role: "none presentation",
                                  listPadding: null != a ? tg : tf,
                                  onScroll: F,
                                  renderRow: N,
                                  renderSection: null == a ? j : void 0,
                                  renderSectionHeader: k,
                                  renderSectionFooter: w,
                                  rowCount: p,
                                  rowCountBySection: f,
                                  rowHeight: s > tl ? C + tp : tm + 2 * u + tp,
                                  sectionHeaderHeight: O,
                                  sectionFooterHeight: R,
                                  stickyHeaders: !0,
                                  ref: E,
                              }),
                        (0, l.jsx)(e2, { stickersGrid: _ }),
                    ],
                }),
            })
        );
    });
var tE = n(945810);
let tI = (0, tE.mj)({
    name: "2026-02-sticker-padding",
    kind: "user",
    defaultConfig: { padding: 2 },
    variations: { 1: { padding: 1 } },
});
var tv = n(602034),
    ty = n(892547),
    tb = n(337485);
let tS = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: s, channel: a } = e,
        r = (0, j.ZO)(a),
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
            className: tb.i,
            children: (0, l.jsx)(ty.I, {
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
                    "aria-controls": ek.lq,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, tv.Aq)(ek.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
});
n(321073);
var tN = n(768038),
    tj = n(789645),
    tT = n(927578),
    tw = n(217653),
    tR = n(939383);
let tL = () => $(!1),
    tk = (e) => {
        let { onLearnMore: t } = e,
            { analyticsLocations: n } = (0, D.Ay)(P.A.PREMIUM_UPSELL);
        i.useEffect(() => {
            K.default.track(eh.HAw.PREMIUM_UPSELL_VIEWED, {
                location_section: eh.JJy.STICKER_PICKER_UPSELL,
                type: eO.e.STICKER_PICKER_UPSELL,
                location_stack: n,
            });
        }, [n]);
        let s = (0, B.V)(),
            r = (0, ej.O)(),
            o = s?.subscription_trial?.sku_id === eO.pe.TIER_0,
            c = null != s || null != r;
        return (0, l.jsxs)("div", {
            className: a()(tw.VL, { [tw.Hz]: c }),
            children: [
                c
                    ? (0, l.jsx)(eT.Ay, {
                          trialOffer: s,
                          discountOffer: r,
                          onClose: tL,
                          type: eO.e.STICKER_PICKER_UPSELL,
                          subscriptionTier: s?.subscription_trial?.sku_id ?? eO.pe.TIER_2,
                          children: o
                              ? ep.intl.format(ep.t.MAGagw, {
                                    planName: (0, tT.RH)(eO.gD.PREMIUM_MONTH_TIER_0),
                                    onClick: t,
                                })
                              : ep.intl.format(ep.t.jt7JX6, { onClick: t }),
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("img", { className: tw.Tn, src: tR, alt: ep.intl.string(ep.t.do7AoM) }),
                              (0, l.jsx)(eN.E, {
                                  className: tw.ex,
                                  color: "text-strong",
                                  variant: "text-lg/semibold",
                                  children: ep.intl.string(ep.t.jJG1pl),
                              }),
                              (0, l.jsx)(eN.E, {
                                  className: tw.GR,
                                  variant: "text-md/normal",
                                  children: ep.intl.format(ep.t.jt7JX6, { onClick: t }),
                              }),
                          ],
                      }),
                !c && (0, l.jsx)(eL, { analyticsSection: eh.JJy.EXPRESSION_PICKER }),
                (0, l.jsx)(p.D, {
                    className: tw.kz,
                    onClick: tL,
                    children: (0, l.jsx)(tj.P, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    };
var tO = n(854138);
let tM = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tP = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tD = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tU = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tV = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    tG = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tF = (0, z.xI)(k.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tB = R()(Q.Qz, 200),
    tH = R()(Q.HA, 200),
    tW = i.forwardRef(function (e, t) {
        let { containerWidth: s, channel: a, onSelectSticker: r, closePopout: o } = e,
            c = tI.useConfig({ location: "StickerPicker" }).padding,
            { location: u } = (0, M.p)(),
            { analyticsLocations: h } = (0, D.Ay)(P.A.STICKER_PICKER),
            p = (0, B.V)()?.subscription_trial != null,
            f = i.useRef(null),
            g = i.useRef(null),
            _ = i.useRef(null),
            x = Y((e) => e.showPremiumUpsell),
            [C, A] = (0, V.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], L.x),
            E = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: ep }));
        let I = (0, j.pD)(a),
            v = 0 === I.filter((e) => e.type !== ee.Z2.EMPTY_GUILD_UPSELL).length,
            y = (0, G.oV)({
                gridWrapperRef: f,
                containerWidth: s,
                showingEmptyState: v,
                listPaddingLeft: tP,
                listScrollbarWidth: 8,
            }),
            b = H.tP.useSetting(),
            S = i.useMemo(() => new Set(b), [b]),
            N = (0, d.bG)([W.default], () => W.default.getCurrentUser()),
            w = i.useMemo(
                () =>
                    ((e, t, n) => {
                        if ("" === e) return null;
                        let l = [],
                            i = [];
                        return (
                            tN.Ay.queryStickers([e], !0)
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
                    })(C, N, a),
                [C, N, a],
            ),
            R = (0, j.Gc)(),
            k = (0, j.UT)(),
            O = (0, d.cf)([T.A], () => T.A.getAllGuildStickers()),
            { sendable: z = [], sendableWithPremium: Z = [] } = w ?? {},
            q = z.length + Z.length,
            J = i.useCallback(
                (e) => {
                    "" === C ? (0, Q.ry)(e) : (0, Q.nQ)(e, C, q), r(e.sticker, ee.D6.STICKER_PICKER);
                },
                [r, C, q],
            ),
            $ = null != y && y > tM,
            {
                rowCount: el,
                rowCountBySection: ei,
                stickersGrid: es,
                gutterWidth: ea,
                columnCounts: er,
            } = (0, j._c)({
                filteredStickers: w,
                stickersCategories: I,
                collapsedStickersCategories: S,
                listWidth: y,
                listPaddingRight: tD,
                stickerNodeMargin: $ ? tU : tV,
                stickerNodeWidth: $ ? tG + 2 * c : tF + 2 * c,
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
                    c = (0, M.p)(),
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
                        isUsingKeyboardNavigation: _,
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
                        isUsingKeyboardNavigation: _,
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
                                        let { default: t } = await Promise.all([n.e("29143"), n.e("93796")]).then(
                                            n.bind(n, 445002),
                                        );
                                        return (n) => (0, l.jsx)(t, { guildId: e.guild_id, ...n });
                                    });
                                break;
                            case ee.op.STICKER:
                                null != e.sticker && (0, X.G7)(e.sticker, N, a) && J(e);
                        }
                    },
                    [u, N, a, J],
                ),
                store: U.bM,
                setInspectedStickerPosition: U.bM.setInspectedExpressionPosition,
                gridNavigatorId: ek.lq,
            });
        i.useEffect(() => U.bM.resetStoreState, []);
        let ep = () => {
            let e = a.getGuildId(),
                t = [];
            null !== e && (t = T.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            null != O &&
                [...O.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, Q.p4)({
                    containerWidth: s,
                    favoriteStickers: R,
                    frequentlyUsedStickers: k,
                    guildStickers: t,
                    stickersTotal: n,
                });
        };
        i.useEffect(() => {
            "" === E.current && "" !== C && (0, Q.Fg)(), (E.current = C);
        }, [C]),
            i.useEffect(() => {
                0 === q ? tB(C) : tH(C, q, A);
            }, [C, q, A]),
            i.useLayoutEffect(() => {
                _.current?.focus();
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
                        className: tO.wx,
                        children: (0, l.jsx)(tS, { ref: _, onKeyDown: ed, stickersListRef: g, channel: a }),
                    }),
                v
                    ? (0, l.jsx)(eP, { className: tO.p$, onClose: o })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  ref: f,
                                  className: tO.AD,
                                  id: ek.lq,
                                  ...eu,
                                  children:
                                      null != y
                                          ? (0, l.jsx)(tA, {
                                                ref: g,
                                                collapsedStickersCategories: S,
                                                filteredStickers: w,
                                                getStickerItemProps: eo,
                                                getStickerRowProps: ec,
                                                gridWidth: y,
                                                gutterWidth: ea,
                                                stickerPadding: c,
                                                isUsingKeyboardNavigation: em,
                                                onSelectSticker: J,
                                                rowCount: el,
                                                rowCountBySection: ei,
                                                stickersCategories: I,
                                                stickersGrid: es,
                                                channel: a,
                                            })
                                          : null,
                              }),
                              (0, l.jsx)(eb, { stickersListRef: g, channel: a }),
                          ],
                      }),
                x && (0, l.jsx)(tk, { onLearnMore: ef }),
            ],
        });
    }),
    tK = i.forwardRef(
        (e, t) => (
            (0, j.XQ)(),
            (0, l.jsx)("div", {
                className: tO.iE,
                id: ek.GX,
                "aria-labelledby": ek.LD,
                role: "tabpanel",
                children: e.isLoading ? (0, l.jsx)(O.y, { className: tO.Mz }) : (0, l.jsx)(tW, { ...e, ref: t }),
            })
        ),
    );
var tz = n(964404),
    tZ = n(712687),
    tq = n(625494);
let tJ = (0, tE.mj)({
    name: "2026-03-kaomoji-picker",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tY = n(364522);
let t$ = [
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
var tX = n(732139),
    tQ = n(235916);
function t0(e) {
    let { onSelect: t } = e,
        [n, s] = i.useState(""),
        a = i.useMemo(() => {
            let e = n.trim();
            return t$
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
                A.Ay.trackWithMetadata(eh.HAw.EXPRESSION_PICKER_KAOMOJI_SELECTED, {
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
                children: (0, l.jsx)(ty.I, {
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
                                              (0, l.jsx)(eN.E, {
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
                                                              children: (0, l.jsx)(ew.$, {
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
                              children: (0, l.jsx)(eN.E, {
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
        id: tX.pE,
        role: "tabpanel",
        "aria-labelledby": tX.W3,
        children: (0, l.jsx)(t0, { ...e }),
    });
}
var t2 = n(49999),
    t6 = n(307731),
    t3 = n(645264);
let t4 = 498 + tX.as.MEDIUM,
    t7 = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: s = !1, "aria-controls": r, ...o } = e;
        return (0, l.jsx)(p.D, {
            role: "tab",
            autoFocus: s,
            "aria-controls": t ? r : void 0,
            ...o,
            onClick: () => {
                A.Ay.trackWithMetadata(eh.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, V.U)(i);
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
                onSelectSound: w,
                onSelectKaomoji: R,
                channel: L,
                type: k,
                position: O,
                align: M,
                positionLayerClassName: P,
                closeOnModalOuterClick: D = !1,
                parentModalKey: U,
            } = e,
            G = i.useRef(null),
            F = i.useRef(!1),
            B = i.useRef(null),
            H = i.useRef(null),
            { drawerWidth: W, handleDrawerResizeHandleMouseDown: K } = ((e) => {
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
                                _.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                u(t);
                        },
                        [n, a],
                    ),
                    p = (0, C.A)({
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
                drawerRef: H,
                orientation: "left" === M ? C.R.HORIZONTAL_RIGHT : C.R.HORIZONTAL_LEFT,
            }),
            z = (0, V.RQ)((e) => e.activeView),
            Z = (0, j.ZO)(L),
            { renderWindow: q, windowDispatch: J } = i.useContext(b.Ay),
            Y = (0, d.bG)([T.A], () => !T.A.hasLoadedStickerPacks),
            $ = (0, S.tj)({ location: "expression_picker" }),
            X = tJ.useConfig({ location: "expression_picker" }).enabled,
            Q = (0, d.bG)([tZ.A], () => tZ.A.isOpen()),
            ee = null != U,
            et = (0, m.useIsModalAtTop)(U ?? ""),
            en = k.gifs?.allowSending && !c.Fr && null != s,
            el = k.stickers?.allowSending && null != p,
            ei = !k.expressionPicker?.onlyEmojis && (en || el),
            es = i.useCallback(
                (e) => {
                    if ((!ee && (0, m.hasAnyModalOpen)()) || (ee && !(et && D)) || Q || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, u.vq)(t) && null != t.closest("." + em.VQ)) return;
                    for (; (0, u.vq)(t); ) {
                        if (
                            t === H.current ||
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
        let [er, eo] = (0, E.kn)($ ? [h.M.SOUNDMOJI_BADGE] : [], void 0, !1),
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
                null != H.current &&
                    !F.current &&
                    (z === em.kx.EMOJI
                        ? B?.current?.onPickerOpen != null && (B?.current?.onPickerOpen(), (F.current = !0))
                        : z === em.kx.STICKER
                          ? B?.current?.onPickerOpen == null || Y || (B?.current?.onPickerOpen(), (F.current = !0))
                          : (A.Ay.trackWithMetadata(eh.HAw.EXPRESSION_PICKER_OPENED, {
                                width: H.current.offsetWidth,
                                tab: z,
                                badged: !1,
                            }),
                            (F.current = !0)));
            });
        let ed = i.useCallback((e, t) => w?.(e, "emoji_picker", t), [w]),
            ef = i.useCallback((e, t) => w?.(e, "soundboard_picker", t), [w]),
            eg = k.soundmoji?.allowSending === !0 && null != w,
            e_ = X && null != R && k.expressionPicker?.onlyEmojis !== !0;
        i.useEffect(() => {
            z !== em.kx.KAOMOJI || e_ || (0, V.U)(em.kx.EMOJI);
        }, [z, e_]);
        let ex = "left" === M ? "right" : "left",
            eC = null != P ? P : "left" === M ? t3.sj : t3.Jg,
            eA = en
                ? (0, l.jsx)(t7, {
                      id: tX.g9,
                      "aria-controls": tX.ni,
                      "aria-selected": z === em.kx.GIF,
                      isActive: z === em.kx.GIF,
                      viewType: em.kx.GIF,
                      children: ep.intl.string(ep.t["6gUTsS"]),
                  })
                : null,
            eE = el
                ? (0, l.jsx)(t7, {
                      id: ek.LD,
                      "aria-controls": ek.GX,
                      "aria-selected": z === em.kx.STICKER,
                      isActive: z === em.kx.STICKER,
                      autoFocus: !Z,
                      viewType: em.kx.STICKER,
                      children: (0, l.jsx)("div", { className: t3.dG, children: ep.intl.string(ep.t.nf1s3u) }),
                  })
                : null,
            eI = (0, l.jsx)(t7, {
                id: tX.k1,
                "aria-controls": tX.Do,
                "aria-selected": z === em.kx.EMOJI,
                isActive: z === em.kx.EMOJI,
                viewType: em.kx.EMOJI,
                children: ep.intl.string(ep.t.Xu3wE3),
            });
        return (0, l.jsx)(x.A, {
            section: eh.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(y.nE, {
                className: a()(t3.T8, eC),
                targetRef: t,
                position: O,
                align: M,
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
                                  style: { width: null == W ? void 0 : W, [M]: 0 },
                                  ref: H,
                                  children: [
                                      (0, l.jsx)("div", { className: t3.Di, onMouseDown: K, style: { [ex]: -2 } }),
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
                                                                eA,
                                                                eE,
                                                                eI,
                                                                $ &&
                                                                    eg &&
                                                                    (0, l.jsx)(t7, {
                                                                        id: tX.N6,
                                                                        "aria-controls": tX.AA,
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
                                                                e_
                                                                    ? (0, l.jsx)(t7, {
                                                                          id: tX.W3,
                                                                          "aria-controls": tX.pE,
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
                                                        containerWidth: W,
                                                        onSelectSticker: p,
                                                        closePopout: ea,
                                                        ref: (e) => {
                                                            B.current = e;
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
                                                  ? (0, l.jsx)(I.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: L,
                                                        containerWidth: W,
                                                        emojiSize: null != W && W < t4 ? tX.as.MEDIUM : tX.as.LARGE,
                                                        pickerIntention:
                                                            k.expressionPicker?.emojiIntention ??
                                                            t6.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == L || null != L.guild_id,
                                                        closePopout: ea,
                                                        onSelectEmoji: r,
                                                        onSelectSoundmoji: ed,
                                                        ref: (e) => {
                                                            B.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            k.soundmoji?.allowSending === !0,
                                                    })
                                                  : null,
                                              z === em.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: t3.z,
                                                        children: (0, l.jsx)(N.A, {
                                                            guildId: L.guild_id,
                                                            channel: L,
                                                            containerWidth: W,
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
                                              e_ && z === em.kx.KAOMOJI ? (0, l.jsx)(t1, { onSelect: R }) : null,
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
