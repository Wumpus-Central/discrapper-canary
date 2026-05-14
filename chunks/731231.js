"use strict";
n.d(t, { A: () => t7 });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(607399),
    c = n(621466),
    d = n(17928),
    _ = n(554146),
    f = n(192308),
    h = n(939249),
    p = n(315710),
    E = n(777666),
    m = n(817281),
    g = n(820284),
    A = n(761929),
    I = n(95561),
    T = n(131607),
    S = n(267889),
    N = n(622142),
    y = n(750506),
    C = n(267102),
    v = n(926972),
    O = n(277192),
    R = n(256449),
    b = n(750385),
    D = n(111956),
    L = n.n(D),
    w = n(942381),
    M = n(319060),
    P = n(289873),
    x = n(212245),
    U = n(793574),
    k = n(688810),
    G = n(850992),
    F = n(151271),
    V = n(464651),
    B = n(87719),
    H = n(234419),
    j = n(885386),
    Y = n(287809),
    W = n(174459),
    K = n(240248),
    z = n(353640),
    $ = n(121894);
let q = Object.freeze({ showPremiumUpsell: !1 }),
    Z = (0, z.v)((e) => q),
    X = (e) => {
        (0, $.r)(() => Z.setState({ showPremiumUpsell: e }));
    };
var Q = n(361670),
    J = n(891090),
    ee = n(194004),
    et = n(788413),
    en = n(60587),
    ei = n(990078),
    er = n(27232),
    es = n(406810),
    ea = n(797285),
    eo = n(724511),
    el = n(802019),
    eu = n(71393),
    ec = n(68935),
    ed = n(148355),
    e_ = n(652215),
    ef = n(698279),
    eh = n(375708),
    ep = n(950646);
let eE = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    em = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    eg = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eA = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    eI = (0, K.xI)(M.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eT = (0, K.xI)(M.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    eS = [eE, eE, eE, eE],
    eN = (em + eg) * 2 + eE,
    ey = eI + 2 * eT,
    eC = (e) => {
        let { stickersListRef: t, channel: n } = e,
            s = r.useRef(null),
            [o, l] = r.useState(!0),
            u = G.bM.useStore((e) => e.activeCategoryIndex),
            c = (0, R.pD)(n),
            {
                firstStandardStickerCategoryIndex: d,
                firstStandardStickerCategoryOffsetTop: _,
                guildCategoryCount: f,
                hasFirstPartyStickerPacks: p,
            } = r.useMemo(() => {
                let e = c.filter((e) => e.type === ee.Z2.GUILD).length,
                    t = e + +(c[0]?.type === ee.Z2.RECENT) + +(c[0]?.type === ee.Z2.FAVORITE),
                    n = t * (em + eg) - eg + ey;
                return {
                    firstStandardStickerCategoryIndex: t + 1,
                    firstStandardStickerCategoryOffsetTop: n,
                    guildCategoryCount: e,
                    hasFirstPartyStickerPacks: null != c.find((e) => e.type === ee.Z2.PACK),
                };
            }, [c]);
        r.useLayoutEffect(() => {
            l(f >= 7);
        }, [f]);
        let {
                renderCategoryListItem: E,
                rowHeight: m,
                onScroll: g,
            } = ((e) => {
                let {
                        activeIndex: t,
                        stickerPickerCategories: n,
                        categoryListRef: s,
                        firstStandardStickerCategoryOffsetTop: o,
                        setShouldRenderShortcut: l,
                    } = e,
                    u = (0, x.p)(),
                    c = (0, F.RQ)((e) => "" !== e.searchQuery),
                    d = r.useCallback(
                        (e, s, o) => {
                            let l,
                                d = n[0]?.type === ee.Z2.FAVORITE,
                                _ = +!!d,
                                f = n[_]?.type === ee.Z2.RECENT,
                                p = n.length;
                            if (0 === s && d)
                                return (0, i.jsx)(
                                    "div",
                                    {
                                        role: "listitem",
                                        "aria-setsize": p,
                                        "aria-posinset": s,
                                        children: (0, i.jsx)(h.D, {
                                            "aria-label": eh.intl.string(eh.t.y3LQCG),
                                            className: a()(ep._0, ep.dC, { [ep.k1]: !c && 0 === t, [ep.ls]: !f }),
                                            onClick: o,
                                            children: (0, i.jsx)(er.G, {
                                                size: "custom",
                                                color: "currentColor",
                                                className: ep.AB,
                                                height: eA,
                                                width: eA,
                                            }),
                                        }),
                                    },
                                    "favorites",
                                );
                            if (s === _ && f)
                                return (0, i.jsx)(
                                    "div",
                                    {
                                        role: "listitem",
                                        "aria-setsize": p,
                                        "aria-posinset": s,
                                        children: (0, i.jsx)(h.D, {
                                            "aria-label": eh.intl.string(eh.t.RxAmVC),
                                            className: a()(ep._0, ep.dC, ep.ls, { [ep.k1]: !c && t === _ }),
                                            onClick: o,
                                            children: (0, i.jsx)(es.O, {
                                                size: "custom",
                                                color: "currentColor",
                                                className: ep.AB,
                                                height: eA,
                                                width: eA,
                                            }),
                                        }),
                                    },
                                    "recent",
                                );
                            let E = t === s,
                                m = n[s],
                                g = n[s + 1],
                                A = null != g && m.type === ee.Z2.GUILD && g.type !== ee.Z2.GUILD,
                                I = m.type === ee.Z2.PACK,
                                T = "",
                                S = null;
                            if (m.type === ee.Z2.GUILD || m.type === ee.Z2.EMPTY_GUILD_UPSELL) {
                                let e = eu.A.getGuild(m.id);
                                null != e &&
                                    ((l = e.id), (T = e.name), (S = (0, i.jsx)(eo.A, { guild: e, isSelected: E })));
                            } else if (I) {
                                let e = b.A.getStickerPack(m.id);
                                null != e &&
                                    ((T = e.name),
                                    (S = (0, i.jsx)(ed.A, {
                                        disableAnimation: !E || c,
                                        size: em,
                                        sticker: (0, ec.Id)(e),
                                    })));
                            }
                            return (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(ei.m, {
                                            position: "right",
                                            text: T,
                                            children: (0, i.jsx)("div", {
                                                role: "listitem",
                                                "aria-setsize": p,
                                                "aria-posinset": s,
                                                children: (0, i.jsx)(h.D, {
                                                    "aria-label": T,
                                                    className: a()(ep._0, { [ep.ND]: I, [ep.Ms]: !c && E && I }),
                                                    onClick: () => {
                                                        m.type === ee.Z2.PACK &&
                                                            W.default.track(
                                                                e_.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED,
                                                                {
                                                                    location: u?.location,
                                                                    tab: ef.kx.STICKER,
                                                                    sticker_pack_id: m.id,
                                                                    guild_id: l,
                                                                },
                                                            ),
                                                            o();
                                                    },
                                                    children: S,
                                                }),
                                            }),
                                        }),
                                        A ? (0, i.jsx)("hr", { className: ep.ny }, "separator") : null,
                                    ],
                                },
                                m.id,
                            );
                        },
                        [t, u, c, n],
                    ),
                    _ = r.useCallback((e, t) => (t ? eN : 0), []);
                return {
                    getScrollOffsetForIndex: _,
                    renderCategoryListItem: d,
                    rowHeight: r.useCallback(
                        (e, t) => {
                            let i = n[t],
                                r = n[t + 1];
                            return em + (null != r && i.type === ee.Z2.GUILD && r.type !== ee.Z2.GUILD ? ey : eg);
                        },
                        [n],
                    ),
                    onScroll: r.useCallback(
                        (e) => {
                            let t = s.current?.getListDimensions();
                            null == t || l(e + t.height - eI < o);
                        },
                        [o, s, l],
                    ),
                };
            })({
                activeIndex: u,
                stickerPickerCategories: c,
                categoryListRef: s,
                firstStandardStickerCategoryOffsetTop: _,
                setShouldRenderShortcut: l,
            }),
            A = r.useCallback(
                (e) => {
                    e(d), s.current?.scrollTo(_);
                },
                [d, _],
            );
        return (0, i.jsx)(el.A, {
            className: ep.jv,
            categoryListRef: s,
            expressionsListRef: t,
            store: G.bM,
            listPadding: eS,
            onScroll: g,
            renderCategoryListItem: E,
            rowCount: c.length,
            categories: c,
            categoryHeight: m,
            children: (e) =>
                p &&
                o &&
                (0, i.jsx)(h.D, {
                    className: a()(ep.Fe, { [ep.Q6]: !o }),
                    onClick: () => A(e),
                    children: (0, i.jsx)(ea.t, { size: "md", color: "currentColor" }),
                }),
        });
    };
var ev = n(534514),
    eO = n(834730),
    eR = n(422936),
    eb = n(811611),
    eD = n(821609),
    eL = n(403581);
function ew(e) {
    let { analyticsSection: t, buttonText: r } = e;
    return (0, i.jsx)(eD.$, {
        variant: "expressive",
        icon: eL.t,
        text: r ?? eh.intl.string(eh.t["8Sh5fg"]),
        onClick: () => {
            var e;
            return (
                (e = { section: t }),
                void (W.default.track(e_.HAw.OPEN_MODAL, {
                    type: e_.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
                    location: e,
                }),
                (0, f.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("40305"),
                        n.e("62691"),
                        n.e("71202"),
                        n.e("53274"),
                    ]).then(n.bind(n, 397313));
                    return (t) => (0, i.jsx)(e, { ...t });
                }))
            );
        },
    });
}
var eM = n(823894),
    eP = n(788868),
    ex = n(83148);
function eU(e) {
    let { className: t, onClose: n } = e;
    (0, R.XQ)();
    let { analyticsLocations: s } = (0, k.Ay)(U.A.EMPTY_STATE),
        o = (0, d.yK)([b.A], () => eM.vX.map((e) => b.A.getStickerById(e)));
    r.useEffect(() => {
        W.default.track(e_.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eP.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: e_.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: s,
        });
    }, [s]);
    let l = (0, H.V)(),
        u = (0, eR.O)(),
        c = null != l || null != u;
    return (0, i.jsxs)("div", {
        className: a()(ex.p$, t, { [ex.Hz]: c }),
        children: [
            c
                ? (0, i.jsx)(eb.Ay, {
                      discountOffer: u,
                      trialOffer: l,
                      onClose: n,
                      type: eP.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: l?.subscription_trial?.sku_id ?? eP.pe.TIER_2,
                      children: eh.intl.string(eh.t.FnNud4),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(ev.D, {
                              className: ex.wx,
                              variant: "heading-xl/semibold",
                              children: eh.intl.string(eh.t.HEm04J),
                          }),
                          (0, i.jsx)(eO.E, {
                              className: ex.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: eh.intl.string(eh.t.FnNud4),
                          }),
                          (0, i.jsx)("div", {
                              className: ex.l1,
                              children: o
                                  .filter((e) => null != e)
                                  .map((e) => (0, i.jsx)(ed.A, { sticker: e, className: ex.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !c && (0, i.jsx)(ew, { analyticsSection: e_.JJy.EXPRESSION_PICKER }),
        ],
    });
}
var ek = n(404778),
    eG = n(537652),
    eF = n(962125),
    eV = n(286509),
    eB = n(631576),
    eH = n(369163),
    ej = n(123292),
    eY = n(631305),
    eW = n(468689),
    eK = n(931991),
    ez = n(473145),
    e$ = n(625633),
    eq = n(832938);
let eZ = (e) => {
    let { className: t, guildId: n, channel: s, shouldTrackUpsellViewed: o, setTrackedUpsellViewed: l } = e,
        { location: u } = (0, x.p)(),
        { analyticsLocations: c } = (0, k.Ay)(),
        _ = (0, d.bG)([eu.A], () => eu.A.getGuild(n)),
        { canManageAllExpressions: f } = (0, eK.nr)(_),
        h = null != _ && 0 === (0, ez.aG)(_.premiumTier) && !_.features.has(e_.GuildFeatures.MORE_STICKERS);
    return (r.useEffect(() => {
        f &&
            h &&
            o &&
            ((0, I.zV)(e_.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: u,
                guild_id: _?.id,
                channel_id: s?.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: c,
            }),
            l(!0));
    }, [h, _, s, u, o, l, c, f]),
    null != _ && f)
        ? h
            ? (0, i.jsxs)("div", {
                  className: a()(eq.UX, t),
                  children: [
                      (0, i.jsx)(eH.v, { size: "md", color: "currentColor", className: eq.Kk }),
                      (0, i.jsx)(eO.E, {
                          color: "interactive-text-default",
                          className: eq.rf,
                          variant: "text-sm/normal",
                          children: eh.intl.format(eh.t.AXWla1, { count: (0, ez.aG)(e_.TVA.TIER_1) }),
                      }),
                      (0, i.jsx)(ej.Q, {
                          variant: "primary",
                          text: eh.intl.string(eh.t["Gb+BJD"]),
                          onClick: () => {
                              (0, eY.A)({
                                  analyticsLocations: c,
                                  analyticsSourceLocation: u,
                                  guild: _,
                                  perks: (0, e$.q5)(),
                              });
                          },
                      }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  className: a()(eq.UX, t),
                  children: [
                      (0, i.jsx)(ea.t, {
                          size: "custom",
                          color: "currentColor",
                          className: eq.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, i.jsx)(eO.E, {
                          color: "interactive-text-default",
                          className: eq.rf,
                          variant: "text-sm/normal",
                          children: eh.intl.string(eh.t.S83wgh),
                      }),
                      (0, i.jsx)(ej.Q, {
                          variant: "primary",
                          text: eh.intl.string(eh.t.bwNjug),
                          onClick: () => {
                              (0, F.v8)(), eW.A.open(n, e_.BEX.STICKERS, u);
                          },
                      }),
                  ],
              })
        : null;
};
var eX = n(307301),
    eQ = n(182922),
    eJ = n(867981);
let e0 = (0, K.xI)(M.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    e1 = (0, K.xI)(M.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    e2 = r.memo(function (e) {
        let { stickersGrid: t } = e,
            n = G.bM.useStore((e) => e.inspectedExpressionPosition),
            s = r.useMemo(() => {
                let { rowIndex: e, columnIndex: i } = n,
                    r = t[e]?.[i];
                return r?.type === ee.op.CREATE_STICKER
                    ? { guild_id: r.guild_id, name: r.name }
                    : r?.type !== ee.op.STICKER
                      ? null
                      : r.sticker;
            }, [t, n]);
        if (null == s) return null;
        let { graphic: a, title: o } = ((e) => {
                let t = null,
                    n = null;
                if ((!(0, ec.FD)(e) && !(0, ec.Xw)(e)) || (0, ec.Xw)(e)) {
                    let r = eu.A.getGuild(e.guild_id);
                    null != r &&
                        ((t = eh.intl.format(eh.t.cZOkbs, { source: r.name })), (n = (0, i.jsx)(eo.A, { guild: r })));
                } else if ((0, ec.FD)(e)) {
                    let r = b.A.getStickerPack(e.pack_id);
                    null != r &&
                        ((t = eh.intl.format(eh.t.cZOkbs, { source: r.name })),
                        (n = (0, i.jsx)(ed.A, { size: e1, sticker: (0, ec.Id)(r), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(s),
            l =
                (0, ec.FD)(s) || (0, ec.Xw)(s)
                    ? (0, i.jsx)(ed.A, { isInteracting: !0, size: e0, sticker: s, disableAnimation: !0 })
                    : (0, i.jsx)("div", {
                          className: eJ.P,
                          children: (0, i.jsx)(eX.j, { size: "md", color: "currentColor", className: eJ.K }),
                      });
        return (0, i.jsx)(eQ.A, {
            graphicPrimary: l,
            graphicSecondary: a,
            titlePrimary: s.name,
            titleSecondary: (0, ec.FD)(s) || (0, ec.Xw)(s) ? o : null,
        });
    });
var e3 = n(140735),
    e6 = n(442433),
    e4 = n(304072),
    e5 = n(194261),
    e7 = n(429631);
let e8 = (e) => {
    let { size: t } = e;
    return (0, i.jsx)("div", {
        className: e7.G,
        style: { width: t, height: t },
        children: (0, i.jsx)(e5.X, { size: "xxs", color: "currentColor", className: e7.I }),
    });
};
var e9 = n(584176);
let te = r.memo(function (e) {
    let {
            isDisplayingIndividualStickers: t = !1,
            preferAnimation: s = !0,
            getStickerItemProps: l,
            getStickerRowProps: u,
            gutterWidth: c,
            inspectedStickerPosition: d,
            isScrolling: _,
            isUsingKeyboardNavigation: p,
            onInspect: E,
            onSelect: m,
            rowIndex: g,
            stickerClassName: A,
            stickerDescriptors: I,
            stickerPadding: T,
            stickerSize: S,
            ownedStickerPacks: N,
            enlargeOnInteraction: y = !1,
            channel: C,
            currentUser: v,
            checkSendability: O = !0,
        } = e,
        { location: R } = (0, x.p)(),
        b = S + 2 * T,
        D = r.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${b}px)`,
                height: b,
                paddingRight: t ? void 0 : b,
            }),
            [t, c, b],
        ),
        L = r.useMemo(() => ({ width: S, height: S, padding: T }), [T, S]),
        [w, M] = (0, e4.A)(null, 300);
    return (0, i.jsx)("div", {
        className: e9.nM,
        style: D,
        ...u?.(g),
        children: I.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === ee.op.STICKER && y && u,
                I = (0, o.throttle)(() => {
                    _?.current === !0 || p?.current === !0 || u || E?.(e);
                }, 250),
                { ref: T, tabIndex: b, onFocus: D, ...P } = l?.(e.columnIndex, g) ?? {};
            switch (e.type) {
                case ee.op.CREATE_STICKER:
                    return (0, i.jsx)(
                        "div",
                        {
                            ...P,
                            children: (0, i.jsxs)(h.D, {
                                "aria-label": e.name,
                                className: a()(e9.wP, A, { [e9.Kj]: u }),
                                innerRef: T,
                                tabIndex: b,
                                onFocus: D ?? I,
                                onMouseMove: I,
                                onClick: () => {
                                    e.type === ee.op.CREATE_STICKER &&
                                        (W.default.track(e_.HAw.OPEN_MODAL, {
                                            type: e_.JJy.CREATE_STICKER_MODAL,
                                            location: R,
                                        }),
                                        (0, f.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("56710"),
                                                n.e("74103"),
                                                n.e("23199"),
                                                n.e("60909"),
                                                n.e("95840"),
                                                n.e("31232"),
                                                n.e("8891"),
                                                n.e("83952"),
                                                n.e("66580"),
                                                n.e("50342"),
                                                n.e("80436"),
                                                n.e("20643"),
                                                n.e("98913"),
                                                n.e("29143"),
                                            ]).then(n.bind(n, 445002));
                                            return (n) => (0, i.jsx)(t, { guildId: e.guild_id, ...n });
                                        }));
                                },
                                style: L,
                                children: [
                                    !y && (0, i.jsx)("div", { className: e9.fw }),
                                    (0, i.jsx)("div", {
                                        className: e9.P0,
                                        children: (0, i.jsx)(eX.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: e9.Kk,
                                        }),
                                    }),
                                    (0, i.jsx)(eO.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: eh.intl.string(eh.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case ee.op.STICKER: {
                    let o = t && null != N && (0, ec.FD)(e.sticker) && !N.has(e.sticker.pack_id);
                    return (0, r.createElement)(
                        "div",
                        { ...P, key: e.sticker.id },
                        (0, i.jsxs)(h.D, {
                            className: a()(e9.yI, A, { [e9.PV]: u, [e9.TV]: w === e.sticker.id }),
                            innerRef: T,
                            tabIndex: b,
                            onFocus: D ?? I,
                            onMouseMove: I,
                            onClick: (t) => {
                                if (_?.current === !0 || p?.current === !0) return;
                                let n = t.altKey;
                                n && e.type === ee.op.STICKER && !(0, ec.o1)(e.sticker.id) && M(e.sticker.id),
                                    m?.(e, n);
                            },
                            onContextMenu: (e) => {
                                (0, e6.L3)(e, async () => {
                                    let { default: e } = await Promise.all([n.e("4774"), n.e("46132")]).then(
                                        n.bind(n, 233503),
                                    );
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            },
                            style: L,
                            "data-type": en.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, i.jsx)(e3.A, { children: (0, ed.h)(e.sticker) }),
                                (0, i.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !y && (0, i.jsx)("div", { className: e9.fw }),
                                        (0, i.jsx)(ed.A, {
                                            className: a()(e9.SI, {
                                                [e9.ot]:
                                                    y && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [e9.Q$]: c,
                                                [e9.No]: O && !(0, Q.G7)(e.sticker, v, C),
                                            }),
                                            disableAnimation: !u && !s,
                                            enlargeOnInteraction: y,
                                            isInteracting: u,
                                            maskAsset: u,
                                            sticker: e.sticker,
                                            size: S,
                                        }),
                                        o ? (0, i.jsx)(e8, { size: 20 }) : null,
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
let ti = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tr = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    ts = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    ta = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    to = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tl = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tu = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tc = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    td = (0, K.xI)(M.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    t_ = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tf = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    th = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tp = [ts, to, tl, tu],
    tE = [ta, to, tl, tu],
    tm = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tg = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
    tA = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, i.jsx)("div", {
            className: tt.yB,
            children: tg.map((e) =>
                (0, i.jsx)(
                    h.D,
                    {
                        className: tt.x_,
                        onClick: () => t(e),
                        children: (0, i.jsx)(eO.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                    },
                    e,
                ),
            ),
        });
    },
    tI = r.forwardRef(function (e, t) {
        let {
                collapsedStickersCategories: n,
                gridWidth: s,
                filteredStickers: a,
                getStickerItemProps: o,
                getStickerRowProps: l,
                gutterWidth: u,
                stickerPadding: c,
                isUsingKeyboardNavigation: _,
                onSelectSticker: f,
                rowCount: h,
                rowCountBySection: p,
                stickersCategories: E,
                stickersGrid: m,
                channel: g,
            } = e,
            A = t_ + 2 * c,
            I = r.useRef(!1),
            T = r.useRef(null),
            [S, N] = G.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], w.x),
            { analyticsLocations: y } = (0, k.Ay)(U.A.STICKER_PICKER),
            C = (0, F.RQ)((e) => e.searchQuery),
            v = (0, d.bG)([b.A], () => b.A.getPremiumPacks()),
            {
                renderRow: O,
                renderSection: R,
                renderSectionFooter: D,
                sectionFooterHeight: L,
                renderSectionHeader: M,
                sectionHeaderHeight: P,
            } = ((e) => {
                let {
                        collapsedStickersCategories: t,
                        gridWidth: n,
                        stickerPadding: s,
                        onSelectSticker: a,
                        getStickerItemProps: o,
                        getStickerRowProps: l,
                        gutterWidth: u,
                        inspectedStickerPosition: c,
                        isScrolling: _,
                        isUsingKeyboardNavigation: f,
                        stickersGrid: h,
                        stickersCategories: p,
                        filteredStickers: E,
                        ownedStickerPacks: m,
                        channel: g,
                    } = e,
                    A = (0, x.p)(),
                    I = (0, d.bG)([Y.default], () => Y.default.getCurrentUser()),
                    { handleStickerInspect: T, handleSelect: S } = ((e) => {
                        let { onSelectSticker: t, channel: n, currentUser: i } = e,
                            s = (0, x.p)(),
                            a = (0, F.RQ)((e) => e.searchQuery);
                        return {
                            handleStickerInspect: r.useCallback((e) => {
                                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: i } = e;
                                G.bM.setActiveCategoryIndex(i),
                                    G.bM.setInspectedExpressionPosition(n, t, en.t.MOUSE_EVENT),
                                    e.type === ee.op.STICKER && G.bM.setSearchPlaceholder(e.sticker.name);
                            }, []),
                            handleSelect: r.useCallback(
                                (e, r) => {
                                    if (e.type !== ee.op.STICKER) return;
                                    let { sticker: o } = e;
                                    if (null == o) return;
                                    let l = {
                                        ...s.location,
                                        object:
                                            "" === a ? e_.ZSU.STICKER_PICKER_VIEW_ALL : e_.ZSU.STICKER_SEARCH_VIEW_ALL,
                                    };
                                    if (null != o && !(0, Q.G7)(o, i, n)) {
                                        let e = (0, ec.Xw)(o);
                                        (0, Q.W$)(o, i, n) === Q.Ux.SENDABLE_WITH_PREMIUM && X(!0),
                                            e && Q.Ux.SENDABLE_WITH_BOOSTED_GUILD;
                                        return;
                                    }
                                    r
                                        ? (0, ec.o1)(o.id)
                                            ? (0, eB.vr)(o.id)
                                            : ((0, J.Dt)({ sticker: o, location: { ...l, object: e_.ZSU.STICKER } }),
                                              (0, eB.uK)(o.id))
                                        : t(e);
                                },
                                [s.location, a, i, n, t],
                            ),
                        };
                    })({ onSelectSticker: a, channel: g, currentUser: I }),
                    [N, y] = r.useState(!1),
                    C = r.useCallback((e) => {
                        j.tP.updateSetting(Array.from(e));
                    }, []),
                    v = r.useCallback(
                        (e) => {
                            let t = h[e];
                            return null != t
                                ? (0, i.jsx)(
                                      te,
                                      {
                                          getStickerItemProps: o,
                                          getStickerRowProps: l,
                                          gutterWidth: u,
                                          inspectedStickerPosition: c,
                                          isScrolling: _,
                                          isUsingKeyboardNavigation: f,
                                          onInspect: T,
                                          onSelect: S,
                                          rowIndex: e,
                                          stickerClassName: tt.yI,
                                          stickerDescriptors: t,
                                          stickerSize: n > ti ? t_ : tf,
                                          stickerPadding: s,
                                          preferAnimation: n <= tr,
                                          ownedStickerPacks: m,
                                          isDisplayingIndividualStickers: !0,
                                          channel: g,
                                          currentUser: I,
                                      },
                                      e,
                                  )
                                : null;
                        },
                        [h, o, l, u, c, _, f, T, S, n, s, m, g, I],
                    ),
                    O = r.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
                    R = r.useCallback(
                        function (e) {
                            let { isStickerPack: n = !0 } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = new Set(t),
                                r = t.has(e);
                            r ? i.delete(e) : i.add(e),
                                W.default.track(e_.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                    location: A?.location,
                                    tab: ef.kx.STICKER,
                                    collapsed: !r,
                                    sticker_pack_id: n ? e : null,
                                }),
                                C(i);
                        },
                        [A, t, C],
                    ),
                    D = r.useCallback(
                        (e) => {
                            let n = p[e];
                            if (null != E) {
                                let { sendable: t, sendableWithPremium: n } = E;
                                if (0 === e && t.length > 0) return null;
                                let r = t.length > 0 && n.length > 0;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        r
                                            ? (0, i.jsx)("div", { className: tt.yF, children: (0, i.jsx)(ek.c, {}) })
                                            : null,
                                        (0, i.jsx)(
                                            eV.A,
                                            {
                                                className: tt.jH,
                                                "aria-label": eh.intl.string(eh.t.wbfJFh),
                                                children: eh.intl.string(eh.t["05Z/0l"]),
                                            },
                                            "stickers-you-might-like-header",
                                        ),
                                    ],
                                });
                            }
                            switch (n.type) {
                                case ee.Z2.FAVORITE:
                                    return (0, i.jsx)(
                                        eV.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": eh.intl.formatToPlainString(eh.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, i.jsx)(er.G, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => R(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case ee.Z2.RECENT:
                                    return (0, i.jsx)(
                                        eV.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": eh.intl.formatToPlainString(eh.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, i.jsx)(es.O, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => R(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case ee.Z2.GUILD:
                                case ee.Z2.EMPTY_GUILD_UPSELL: {
                                    let e = eu.A.getGuild(n.id);
                                    if (null == e) return null;
                                    return (0, i.jsx)(
                                        eV.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": eh.intl.formatToPlainString(eh.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, i.jsx)(eo.A, { guild: e, height: 16, width: 16 }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => R(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                                case ee.Z2.PACK: {
                                    let e = b.A.getStickerPack(n.id);
                                    if (null == e) return null;
                                    return (0, i.jsx)(
                                        eV.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": eh.intl.formatToPlainString(eh.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, i.jsx)(ed.A, {
                                                disableAnimation: !0,
                                                size: 12,
                                                sticker: (0, ec.Id)(e),
                                            }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => R(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                            }
                        },
                        [t, p, R, E],
                    ),
                    L = r.useCallback(
                        (e) => {
                            if (null != E) {
                                let { sendable: t, sendableWithPremium: n } = E;
                                return 0 === e && t.length > 0 ? 0 : td + (t.length > 0 && n.length > 0 ? tc : 0);
                            }
                            return td;
                        },
                        [E],
                    );
                return {
                    renderRow: v,
                    renderSection: O,
                    renderSectionHeader: D,
                    sectionHeaderHeight: L,
                    renderSectionFooter: r.useCallback(
                        (e) => {
                            let n = p[e],
                                r = t.has(n.id);
                            return n.type !== ee.Z2.EMPTY_GUILD_UPSELL || null != E || r
                                ? null
                                : (0, i.jsx)(
                                      eZ,
                                      {
                                          className: tt.Ij,
                                          guildId: n.id,
                                          channel: g,
                                          shouldTrackUpsellViewed: !N,
                                          setTrackedUpsellViewed: y,
                                      },
                                      `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                  );
                        },
                        [p, t, E, g, N],
                    ),
                    sectionFooterHeight: r.useCallback(
                        (e) => {
                            let n = p[e],
                                i = t.has(n.id);
                            return n.type !== ee.Z2.EMPTY_GUILD_UPSELL || i ? 0 : tm;
                        },
                        [p, t],
                    ),
                };
            })({
                collapsedStickersCategories: n,
                gridWidth: s,
                stickerPadding: c,
                stickersCategories: E,
                stickersGrid: m,
                isScrolling: I,
                isUsingKeyboardNavigation: _,
                onSelectSticker: f,
                getStickerItemProps: o,
                getStickerRowProps: l,
                gutterWidth: u,
                inspectedStickerPosition: N,
                filteredStickers: a,
                ownedStickerPacks: r.useMemo(() => new Set(v.map((e) => e.id)), [v]),
                channel: g,
            }),
            B = (0, V.Fk)({
                activeCategoryIndex: S,
                isScrolling: I,
                listRef: T,
                onActiveCategoryIndexChange: G.bM.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: C,
            });
        return (
            (0, V.FV)({ searchQuery: C, activeCategoryIndex: S, listRef: T }),
            r.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return T.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => T.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => T.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return T.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return T.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return T.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return T.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return T.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, i.jsx)(k.f5, {
                value: y,
                children: (0, i.jsxs)("div", {
                    className: tt.iE,
                    children: [
                        null != a && 0 === a.sendable.length && 0 === a.sendableWithPremium.length
                            ? (0, i.jsx)(eG.A, {
                                  message: eh.intl.string(eh.t["zc+LQd"]),
                                  className: tt.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: tn,
                                  suggestions: (0, i.jsx)(tA, { onSuggestionClick: (e) => (0, F.Ri)(e, !0) }),
                              })
                            : (0, i.jsx)(eF.A, {
                                  role: "none presentation",
                                  listPadding: null != a ? tE : tp,
                                  onScroll: B,
                                  renderRow: O,
                                  renderSection: null == a ? R : void 0,
                                  renderSectionHeader: M,
                                  renderSectionFooter: D,
                                  rowCount: h,
                                  rowCountBySection: p,
                                  rowHeight: s > ti ? A + th : tf + 2 * c + th,
                                  sectionHeaderHeight: P,
                                  sectionFooterHeight: L,
                                  stickyHeaders: !0,
                                  ref: T,
                              }),
                        (0, i.jsx)(e2, { stickersGrid: m }),
                    ],
                }),
            })
        );
    });
var tT = n(945810);
let tS = (0, tT.mj)({
    name: "2026-02-sticker-padding",
    kind: "user",
    defaultConfig: { padding: 2 },
    variations: { 1: { padding: 1 } },
});
var tN = n(602034),
    ty = n(892547),
    tC = n(337485);
let tv = r.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: s, channel: a } = e,
        o = (0, R.ZO)(a),
        l = r.useRef(null),
        { searchQuery: u, isSearchSuggestion: c } = (0, F.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            w.x,
        ),
        d = G.bM.useStore((e) => e.searchPlaceholder),
        [_, f] = G.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], w.x),
        h = r.useCallback(
            (e) => {
                G.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    G.bM.setInspectedExpressionPosition(0, 0),
                    G.bM.setSearchPlaceholder(null),
                    (0, F.Ri)(e),
                    s.current?.scrollTo(0);
            },
            [s],
        ),
        p = r.useCallback(() => {
            h("");
        }, [h]);
    return (
        r.useImperativeHandle(t, () => ({ focus: () => l.current?.focus() })),
        r.useLayoutEffect(() => {
            c && l.current?.focus();
        }, [c]),
        (0, i.jsx)("div", {
            className: tC.i,
            children: (0, i.jsx)(ty.I, {
                autoFocus: o,
                disabled: !o,
                query: u,
                ref: l,
                placeholder: d ?? (o ? eh.intl.string(eh.t.dt5h1C) : eh.intl.string(eh.t["Pck/4U"])),
                onClear: p,
                onKeyDown: n,
                onChange: h,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": eM.lq,
                    "aria-expanded": !0,
                    ...(f ? { "aria-activedescendant": (0, tN.Aq)(eM.lq, _.columnIndex, _.rowIndex) } : void 0),
                },
            }),
        })
    );
});
n(321073);
var tO = n(768038),
    tR = n(789645),
    tb = n(428262),
    tD = n(217653),
    tL = n(939383);
let tw = () => X(!1),
    tM = (e) => {
        let { onLearnMore: t } = e,
            { analyticsLocations: n } = (0, k.Ay)(U.A.PREMIUM_UPSELL);
        r.useEffect(() => {
            W.default.track(e_.HAw.PREMIUM_UPSELL_VIEWED, {
                location_section: e_.JJy.STICKER_PICKER_UPSELL,
                type: eP.e.STICKER_PICKER_UPSELL,
                location_stack: n,
            });
        }, [n]);
        let s = (0, H.V)(),
            o = (0, eR.O)(),
            l = s?.subscription_trial?.sku_id === eP.pe.TIER_0,
            u = null != s || null != o;
        return (0, i.jsxs)("div", {
            className: a()(tD.VL, { [tD.Hz]: u }),
            children: [
                u
                    ? (0, i.jsx)(eb.Ay, {
                          trialOffer: s,
                          discountOffer: o,
                          onClose: tw,
                          type: eP.e.STICKER_PICKER_UPSELL,
                          subscriptionTier: s?.subscription_trial?.sku_id ?? eP.pe.TIER_2,
                          children: l
                              ? eh.intl.format(eh.t.MAGagw, {
                                    planName: (0, tb.RH)(eP.gD.PREMIUM_MONTH_TIER_0),
                                    onClick: t,
                                })
                              : eh.intl.format(eh.t.jt7JX6, { onClick: t }),
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("img", { className: tD.Tn, src: tL, alt: eh.intl.string(eh.t.do7AoM) }),
                              (0, i.jsx)(eO.E, {
                                  className: tD.ex,
                                  color: "text-strong",
                                  variant: "text-lg/semibold",
                                  children: eh.intl.string(eh.t.jJG1pl),
                              }),
                              (0, i.jsx)(eO.E, {
                                  className: tD.GR,
                                  variant: "text-md/normal",
                                  children: eh.intl.format(eh.t.jt7JX6, { onClick: t }),
                              }),
                          ],
                      }),
                !u && (0, i.jsx)(ew, { analyticsSection: e_.JJy.EXPRESSION_PICKER }),
                (0, i.jsx)(h.D, {
                    className: tD.kz,
                    onClick: tw,
                    children: (0, i.jsx)(tR.P, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    };
var tP = n(854138);
let tx = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tU = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tk = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tG = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tF = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    tV = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tB = (0, K.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tH = L()(J.Qz, 200),
    tj = L()(J.HA, 200),
    tY = r.forwardRef(function (e, t) {
        let { containerWidth: s, channel: a, onSelectSticker: o, closePopout: l } = e,
            u = tS.useConfig({ location: "StickerPicker" }).padding,
            { location: c } = (0, x.p)(),
            { analyticsLocations: _ } = (0, k.Ay)(U.A.STICKER_PICKER),
            h = (0, H.V)()?.subscription_trial != null,
            p = r.useRef(null),
            E = r.useRef(null),
            m = r.useRef(null),
            g = Z((e) => e.showPremiumUpsell),
            [A, I] = (0, F.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], w.x),
            T = r.useRef("");
        r.useImperativeHandle(t, () => ({ onPickerOpen: ep }));
        let S = (0, R.pD)(a),
            N = 0 === S.filter((e) => e.type !== ee.Z2.EMPTY_GUILD_UPSELL).length,
            y = (0, V.oV)({
                gridWrapperRef: p,
                containerWidth: s,
                showingEmptyState: N,
                listPaddingLeft: tU,
                listScrollbarWidth: 8,
            }),
            C = j.tP.useSetting(),
            v = r.useMemo(() => new Set(C), [C]),
            O = (0, d.bG)([Y.default], () => Y.default.getCurrentUser()),
            D = r.useMemo(
                () =>
                    ((e, t, n) => {
                        if ("" === e) return null;
                        let i = [],
                            r = [];
                        return (
                            tO.Ay.queryStickers([e], !0)
                                .map((e) => {
                                    let { sticker: t } = e;
                                    return t;
                                })
                                .forEach((e) => {
                                    let s = (0, Q.W$)(e, t, n);
                                    s === Q.Ux.SENDABLE ? i.push(e) : s === Q.Ux.SENDABLE_WITH_PREMIUM && r.push(e);
                                }),
                            { sendable: i, sendableWithPremium: r }
                        );
                    })(A, O, a),
                [A, O, a],
            ),
            L = (0, R.Gc)(),
            M = (0, R.UT)(),
            P = (0, d.cf)([b.A], () => b.A.getAllGuildStickers()),
            { sendable: K = [], sendableWithPremium: z = [] } = D ?? {},
            $ = K.length + z.length,
            q = r.useCallback(
                (e) => {
                    "" === A ? (0, J.ry)(e) : (0, J.nQ)(e, A, $), o(e.sticker, ee.D6.STICKER_PICKER);
                },
                [o, A, $],
            ),
            ei = null != y && y > tx,
            {
                rowCount: er,
                rowCountBySection: es,
                stickersGrid: ea,
                gutterWidth: eo,
                columnCounts: el,
            } = (0, R._c)({
                filteredStickers: D,
                stickersCategories: S,
                collapsedStickersCategories: v,
                listWidth: y,
                listPaddingRight: tk,
                stickerNodeMargin: ei ? tG : tF,
                stickerNodeWidth: ei ? tV + 2 * u : tB + 2 * u,
            }),
            {
                getItemProps: eu,
                getRowProps: ec,
                gridContainerProps: ed,
                handleGridContainerKeyDown: ef,
                isUsingKeyboardNavigation: eh,
            } = ((e) => {
                let {
                        columnCounts: t,
                        stickersGrid: n,
                        stickersListRef: i,
                        store: s,
                        gridNavigatorId: a,
                        setInspectedStickerPosition: o,
                        onGridItemSelect: l,
                    } = e,
                    u = (0, x.p)(),
                    c = r.useCallback(
                        (e) => {
                            l(e, u);
                        },
                        [l, u],
                    ),
                    d = r.useCallback(
                        (e, t) => {
                            o(e, t, en.t.GRID_NAVIGATOR_EVENT);
                        },
                        [o],
                    ),
                    {
                        gridDispatch: _,
                        getItemProps: f,
                        getRowProps: h,
                        gridContainerProps: p,
                        handleGridContainerKeyDown: E,
                        isUsingKeyboardNavigation: m,
                    } = (0, V.Ff)({
                        columnCounts: t,
                        gridNavigatorId: a,
                        itemGrid: n,
                        itemList: i,
                        onGridNavigatorItemSelect: c,
                        onGridNavigatorPositionChange: d,
                    });
                return (
                    r.useEffect(
                        () =>
                            s.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== en.t.GRID_NAVIGATOR_EVENT &&
                                        _({ type: et.n.SET_FOCUSED_POSITION, x: t, y: n });
                                },
                            ),
                        [_, s],
                    ),
                    {
                        getItemProps: f,
                        getRowProps: h,
                        gridContainerProps: p,
                        handleGridContainerKeyDown: E,
                        isUsingKeyboardNavigation: m,
                    }
                );
            })({
                columnCounts: el,
                stickersListRef: E,
                stickersGrid: ea,
                onGridItemSelect: r.useCallback(
                    (e, t) => {
                        let { location: r } = t;
                        switch (e.type) {
                            case ee.op.CREATE_STICKER:
                                W.default.track(e_.HAw.OPEN_MODAL, { type: e_.JJy.CREATE_STICKER_MODAL, location: c }),
                                    (0, f.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("56710"),
                                            n.e("74103"),
                                            n.e("23199"),
                                            n.e("60909"),
                                            n.e("95840"),
                                            n.e("31232"),
                                            n.e("8891"),
                                            n.e("83952"),
                                            n.e("66580"),
                                            n.e("50342"),
                                            n.e("80436"),
                                            n.e("20643"),
                                            n.e("98913"),
                                            n.e("29143"),
                                        ]).then(n.bind(n, 445002));
                                        return (n) => (0, i.jsx)(t, { guildId: e.guild_id, ...n });
                                    });
                                break;
                            case ee.op.STICKER: {
                                if (null == e.sticker) break;
                                let t = (0, Q.W$)(e.sticker, O, a);
                                t === Q.Ux.SENDABLE ? q(e) : t === Q.Ux.SENDABLE_WITH_PREMIUM && X(!0);
                            }
                        }
                    },
                    [c, O, a, q],
                ),
                store: G.bM,
                setInspectedStickerPosition: G.bM.setInspectedExpressionPosition,
                gridNavigatorId: eM.lq,
            });
        r.useEffect(() => G.bM.resetStoreState, []);
        let ep = () => {
            let e = a.getGuildId(),
                t = [];
            null !== e && (t = b.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            null != P &&
                [...P.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, J.p4)({
                    containerWidth: s,
                    favoriteStickers: L,
                    frequentlyUsedStickers: M,
                    guildStickers: t,
                    stickersTotal: n,
                });
        };
        r.useEffect(() => {
            "" === T.current && "" !== A && (0, J.Fg)(), (T.current = A);
        }, [A]),
            r.useEffect(() => {
                0 === $ ? tH(A) : tj(A, $, I);
            }, [A, $, I]),
            r.useLayoutEffect(() => {
                m.current?.focus();
            }, []);
        let eE = r.useCallback(() => {
            l(),
                W.default.track(e_.HAw.PREMIUM_PROMOTION_OPENED, { location_section: e_.JJy.STICKER_PICKER_UPSELL }),
                (0, B.e)();
        }, [l]);
        return (0, i.jsxs)(k.f5, {
            value: _,
            children: [
                !(h && N) &&
                    (0, i.jsx)("div", {
                        className: tP.wx,
                        children: (0, i.jsx)(tv, { ref: m, onKeyDown: ef, stickersListRef: E, channel: a }),
                    }),
                N
                    ? (0, i.jsx)(eU, { className: tP.p$, onClose: l })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  ref: p,
                                  className: tP.AD,
                                  id: eM.lq,
                                  ...ed,
                                  children:
                                      null != y
                                          ? (0, i.jsx)(tI, {
                                                ref: E,
                                                collapsedStickersCategories: v,
                                                filteredStickers: D,
                                                getStickerItemProps: eu,
                                                getStickerRowProps: ec,
                                                gridWidth: y,
                                                gutterWidth: eo,
                                                stickerPadding: u,
                                                isUsingKeyboardNavigation: eh,
                                                onSelectSticker: q,
                                                rowCount: er,
                                                rowCountBySection: es,
                                                stickersCategories: S,
                                                stickersGrid: ea,
                                                channel: a,
                                            })
                                          : null,
                              }),
                              (0, i.jsx)(eC, { stickersListRef: E, channel: a }),
                          ],
                      }),
                g && (0, i.jsx)(tM, { onLearnMore: eE }),
            ],
        });
    }),
    tW = r.forwardRef(
        (e, t) => (
            (0, R.XQ)(),
            (0, i.jsx)("div", {
                className: tP.iE,
                id: eM.GX,
                "aria-labelledby": eM.LD,
                role: "tabpanel",
                children: e.isLoading ? (0, i.jsx)(P.y, { className: tP.Mz }) : (0, i.jsx)(tY, { ...e, ref: t }),
            })
        ),
    );
var tK = n(742023),
    tz = n(712687),
    t$ = n(625494);
let tq = (0, tT.mj)({
    name: "2026-03-kaomoji-picker",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tZ = n(364522);
let tX = [
    {
        category: "wave",
        categoryMessageKey: eh.t.GrrYHn,
        keywords: ["wave", "waving", "hand", "hello", "hi", "hey"],
        kaomojis: [
            "\u30FE(\uFF3E-\uFF3E)\u30CE",
            "\u30FD(\u2022\u0300\u1D17\u2022\u0301)\u30CE",
            "\u30FE(\uFF3E\u2207\uFF3E)",
            "|\u02F6\u02D9\u1D55\u02D9 )\uFF89\uFF9E",
            "\u2606\uFF90(o*\uFF65\u03C9\uFF65)\uFF89",
            "(\uFF61\uFF65\u03C9\uFF65\uFF61)\uFF89\u2661",
        ],
    },
    {
        category: "happy",
        categoryMessageKey: eh.t.Tj0FXM,
        keywords: ["happy", "smile", "smiling", "joy"],
        kaomojis: [
            "^\u25BD^",
            "\u2E02\u2E02\u2E1C(\u0D30\u1D17\u0D30\u0E51)\u2E1D\u2E03\u2E03",
            "(\u25CD\u2022\u1D17\u2022\u25CD)",
            "(\u25D5\u203F\u25D5)",
            "\uA4B0\uFF61\u2022\u25E1\u2022\uFF61\uA4B1",
            "(\xb4\u25BD`)",
            "\u0D26\u0D4D\u0D26\u0D3F ( \u1D54 \u15DC \u1D54 )",
            "( \u0361\u2022 \u035C\u0296 \u0361\u2022 )",
        ],
    },
    {
        category: "excited",
        categoryMessageKey: eh.t.gQsrOG,
        keywords: ["excited", "enthusiastic", "thrilled", "cheerful", "hype", "yay"],
        kaomojis: [
            "(\u0E51\u02C3\u1D17\u02C2)\uFEED",
            "\u1555( \u141B )\u1557",
            "(\uFF89\u25D5\u30EE\u25D5)\uFF89\uFF65\uFF9F\u2727",
            "(\u2606\u25BD\u2606)",
            "(\u0A6D \u02D9\u15DC\u02D9)\u0A6D",
            "(\uFF89\u2267\u2200\u2266)\uFF89",
            "\u0D26\u0D4D\u0D26\u0D3F\u25DD \u2A4A \u25DC.\u141F",
        ],
    },
    {
        category: "cute",
        categoryMessageKey: eh.t["/jZYwz"],
        keywords: ["cute", "kawaii", "adorable", "sweet"],
        kaomojis: [
            "\u0E05^\u2022\uFECC\u2022^\u0E05",
            "\u0295\u2022\u1D25\u2022\u0294",
            "\u0AEE \u2022 \uFECC - \u10D0",
            "(\xb4\uFF61\u2022 \u1D55 \u2022\uFF61`)",
            "|\u3063\u02D8\u03C9\u02D8\u03C2)",
            `\u{1050C}\u{55E} \u{738}.\u{2EC}.\u{738}\u{55E}\u{109AF}`,
            "\u0F3C \u3064 \u25D5_\u25D5 \u0F3D\u3064",
            "\u2282\u0F3C \u25D5_\u25D5 \u2282 \u0F3D",
        ],
    },
    {
        category: "love",
        categoryMessageKey: eh.t["4nnQWB"],
        keywords: ["love", "heart", "hearts", "affection"],
        kaomojis: [
            "(\uFF61\u2665\u203F\u2665\uFF61)",
            "(\u0DC6\u02D9\u1D55\u02D9\u0DC6)\u2661",
            "(\u706C\xba\u203F\xba\u706C)\u2661",
            "(\u25D5\u203F\u25D5)\u2661",
            "\u2661(\u02C3\u0348 \u0AA6 \u02C2\u0348 \u0F36 )",
            "(\uFF61\u02C3 \u1D55 \u02C2 )\u2E1D\u2661",
            "\uFF08\u2579\u25E1\u2579\uFF09\u2661",
        ],
    },
    {
        category: "cool",
        categoryMessageKey: eh.t.X4O8dY,
        keywords: ["cool", "chill", "awesome", "swag", "mischievous", "smug"],
        kaomojis: [
            "(\uFF61\u2022\u0300\u1D17-)\u2727",
            "(\u2310\u25A0_\u25A0)",
            "\u1566(\xf2_\xf3\u02C7)\u1564",
            "(\u2022\u0300\u1D17\u2022\u0301)\u0648 \u0311\u0311",
            "(\xac\u203F\xac )\u2727",
            "( \u0361\xb0 \u035C\u0296 \u0361\xb0)",
            "(\u2256\u1D17\u2256\u273F)",
            "( \u0361\u0CA0 \u035C\u0296 \u0361\u0CA0)",
            "\xaf\\_(\u30C4)_/\xaf",
        ],
    },
    {
        category: "confused",
        categoryMessageKey: eh.t.ZUaZLp,
        keywords: ["confused", "huh", "what", "shrug", "idk"],
        kaomojis: [
            "(\xb7\u2022\u1DC4\u200E\u0847\u2022\u1DC5 )",
            "(\u2022\u0301\uFF3F\u2022\u0300)",
            "( \u30FB\u25C7\u30FB)\uFF1F",
            "(\u25C9\uFF3F\u25C9)",
            "(\u2299\uFF3F\u2299)",
            "(o\xb4\u3030`o)",
        ],
    },
    {
        category: "sad",
        categoryMessageKey: eh.t["/9vZ+t"],
        keywords: ["sad", "cry", "crying", "tears", "depressed", "sorrow"],
        kaomojis: [
            "(\uFF61\u2022\u0301\u2313\u2022\u0300\uFF61)",
            "(\u3160\uFE4F\u3160)",
            "(\uFF61\u2022\u0301\uFE3F\u2022\u0300\uFF61)",
            "(\u25DE\u2038\u25DF)",
            "(\xb4;\u03C9;\uFF40)",
            "( \u2022 \u1D16 \u2022 \uFF61)",
            "(\uFF61\u014F_\u014F)",
        ],
    },
    {
        category: "angry",
        categoryMessageKey: eh.t.GUrGRo,
        keywords: ["angry", "mad", "rage", "frustrated", "annoyed"],
        kaomojis: [
            "(\u0CA0\uFF3F\u0CA0)",
            "(\uFF40\u76BF\xb4)",
            "(\xac\uFF3F\xac)",
            "(\u0CA0\u76CA\u0CA0)",
            "(\u2256\uFF3F\u2256 )",
            "(\u14C0\u2038\u14C2)",
            "( `\u3078\xb4* )",
        ],
    },
    {
        category: "music",
        categoryMessageKey: eh.t.SwOaV2,
        keywords: ["music", "vibe", "beat", "bop"],
        kaomojis: [
            "d[.\u203F.]b",
            "\u266B\u22C6\uFF61\u266A \u208A\u02DA\u266C \uFF9F.",
            "\u21BB \u25C1 || \u25B7 \u21BA",
            "\u208A\u266A\uD834\uDD1E\uD834\uDD22\u208A\u22B9",
            "\u2027\u208A\u02DA\u266A\uD834\uDD1E\u0FD0\u208A\u02DA\u22B9",
            "l\u0131ll\u0131l\u0131.\u0131ll\u0131.\u0131l\u0131l\u0131\u0131",
            "\u1DBB \uD835\uDDD3 \uD803\uDC01 .\u141F",
        ],
    },
    {
        category: "decorative",
        categoryMessageKey: eh.t.UisscN,
        keywords: ["deco", "decorative", "miscellaneous", "misc"],
        kaomojis: [
            "\u22C6\u02DA\uAA5C\uFF61",
            "\u22B9 \u08EA \u02D6",
            "\u22C6\u02DA\u273F\u02D6\xb0",
            "\u22C6\u0C68\u09CE\u02DA\u27E1\u02D6 \u08EA",
            "\uD81A\uDC7C.\uD81A\uDD23\uD81A\uDD67\uD81A\uDC7C.\uD81A\uDD23\uD81A\uDD67",
            "-\u02CB\u02CF\u2704\u2508\u2508\u22C6\uFF61\uFF9F",
            "\u263E.\u2734\u02DA\u02D6\u207A\u2726",
        ],
    },
    {
        category: "flip",
        categoryMessageKey: eh.t["q/yMTa"],
        keywords: ["flip", "unflip", "tableflip"],
        kaomojis: [
            "(\u256F\xb0\u25A1\xb0)\u256F\uFE35 \u253B\u2501\u253B",
            "\u252C\u2500\u252C\u30CE( \xba _ \xba\u30CE)",
        ],
        hidden: !0,
    },
];
var tQ = n(732139),
    tJ = n(235916);
function t0(e) {
    let { onSelect: t } = e,
        [n, s] = r.useState(""),
        a = r.useMemo(() => {
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
        o = r.useCallback(
            (e, n, i) => {
                I.Ay.trackWithMetadata(e_.HAw.EXPRESSION_PICKER_KAOMOJI_SELECTED, {
                    kaomoji: e,
                    category: n,
                    keyword: i,
                }),
                    t(e);
            },
            [t],
        ),
        l = r.useCallback((e) => {
            s(e);
        }, []),
        u = r.useCallback(() => {
            s("");
        }, []);
    return (0, i.jsxs)("div", {
        className: tJ.Zp,
        role: "region",
        "aria-label": eh.intl.string(eh.t["2pR2JI"]),
        children: [
            (0, i.jsx)("div", {
                className: tJ.wx,
                children: (0, i.jsx)(ty.I, {
                    query: n,
                    onChange: l,
                    onClear: u,
                    placeholder: eh.intl.string(eh.t["5h0QOP"]),
                    "aria-label": eh.intl.string(eh.t["5h0QOP"]),
                }),
            }),
            (0, i.jsx)(tZ.Ip, {
                fade: !0,
                className: tJ.IA,
                children:
                    a.length > 0
                        ? (0, i.jsx)("div", {
                              className: tJ.tt,
                              children: a.map((e) =>
                                  (0, i.jsxs)(
                                      "div",
                                      {
                                          className: tJ.hl,
                                          role: "group",
                                          "aria-labelledby": `kaomoji-category-${e.category}`,
                                          children: [
                                              (0, i.jsx)(eO.E, {
                                                  id: `kaomoji-category-${e.category}`,
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  className: tJ.Jm,
                                                  children: eh.intl.string(e.categoryMessageKey),
                                              }),
                                              (0, i.jsx)("div", {
                                                  className: tJ.Hu,
                                                  role: "list",
                                                  children: e.kaomojis.map((t, r) =>
                                                      (0, i.jsx)(
                                                          "div",
                                                          {
                                                              className: tJ.Yx,
                                                              role: "listitem",
                                                              children: (0, i.jsx)(eD.$, {
                                                                  variant: "secondary",
                                                                  size: "sm",
                                                                  fullWidth: !0,
                                                                  onClick: () => o(t, e.category, n.trim()),
                                                                  text: t,
                                                                  "aria-label": eh.intl.formatToPlainString(
                                                                      eh.t["hi+F96"],
                                                                      {
                                                                          category: eh.intl.string(
                                                                              e.categoryMessageKey,
                                                                          ),
                                                                          number: r + 1,
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
                        : (0, i.jsx)("div", {
                              "aria-live": "polite",
                              "aria-atomic": !0,
                              children: (0, i.jsx)(eO.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  className: tJ.p$,
                                  children: eh.intl.string(eh.t.V6nAfF),
                              }),
                          }),
            }),
        ],
    });
}
function t1(e) {
    return (0, i.jsx)("div", {
        className: tJ.iE,
        id: tQ.pE,
        role: "tabpanel",
        "aria-labelledby": tQ.W3,
        children: (0, i.jsx)(t0, { ...e }),
    });
}
var t2 = n(49999),
    t3 = n(307731),
    t6 = n(645264);
let t4 = 498 + tQ.as.MEDIUM,
    t5 = r.memo(function (e) {
        let { isActive: t, className: n, viewType: r, autoFocus: s = !1, "aria-controls": o, ...l } = e;
        return (0, i.jsx)(h.D, {
            role: "tab",
            autoFocus: s,
            "aria-controls": t ? o : void 0,
            ...l,
            onClick: () => {
                I.Ay.trackWithMetadata(e_.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: r, badged: !1 }), (0, F.U)(r);
            },
            "aria-current": t ? "page" : void 0,
            className: a()(n, t6.oi, t6.pc, { [t6.Mv]: t }),
        });
    }),
    t7 = r.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: s,
                onSelectEmoji: o,
                onSelectSticker: h,
                onSelectSound: D,
                onSelectKaomoji: L,
                channel: w,
                type: M,
                position: P,
                align: x,
                positionLayerClassName: U,
                closeOnModalOuterClick: k = !1,
                parentModalKey: G,
            } = e,
            V = r.useRef(null),
            B = r.useRef(!1),
            H = r.useRef(null),
            j = r.useRef(null),
            { drawerWidth: Y, handleDrawerResizeHandleMouseDown: W } = ((e) => {
                let { positionContainerRef: t, drawerRef: n, orientation: i } = e,
                    s = (0, d.bG)([tK.Ay], () => tK.Ay.expressionPickerWidth),
                    [a, o] = r.useState(window.innerWidth),
                    [u, c] = r.useState(s ?? ef.wp.MIN),
                    _ = r.useMemo(() => {
                        switch (u) {
                            case ef.wp.MIN:
                                return 498;
                            case ef.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    f = r.useCallback(
                        (e) => {
                            let t = e >= a ? ef.wp.MAX : e <= 498 ? ef.wp.MIN : e;
                            null == t && null != n.current && (n.current.style.width = ""),
                                m.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                c(t);
                        },
                        [n, a],
                    ),
                    h = (0, A.A)({
                        initialElementDimension: _,
                        maxDimension: a,
                        minDimension: 498,
                        resizableDomNodeRef: n,
                        onElementResize: f,
                        orientation: i,
                    });
                return (
                    r.useEffect(() => {
                        let e = l().debounce(() => {
                            null != t.current && o(t.current.offsetWidth);
                        }, 500);
                        return (
                            window.addEventListener("resize", e),
                            () => {
                                window.removeEventListener("resize", e);
                            }
                        );
                    }, [t]),
                    r.useLayoutEffect(() => {
                        null != t.current && o(t.current.offsetWidth);
                    }, [t]),
                    {
                        drawerWidth: _,
                        handleDrawerResizeHandleMouseDown: r.useCallback(
                            (e) => {
                                e.stopPropagation(), null != t.current && o(t.current.offsetWidth), h(e);
                            },
                            [t, h],
                        ),
                    }
                );
            })({
                positionContainerRef: V,
                drawerRef: j,
                orientation: "left" === x ? A.R.HORIZONTAL_RIGHT : A.R.HORIZONTAL_LEFT,
            }),
            K = (0, F.RQ)((e) => e.activeView),
            z = (0, R.ZO)(w),
            { renderWindow: $, windowDispatch: q } = r.useContext(C.Ay),
            Z = (0, d.bG)([b.A], () => !b.A.hasLoadedStickerPacks),
            X = (0, v.tj)({ location: "expression_picker" }),
            Q = tq.useConfig({ location: "expression_picker" }).enabled,
            J = (0, d.bG)([tz.A], () => tz.A.isOpen()),
            ee = null != G,
            et = (0, f.useIsModalAtTop)(G ?? ""),
            en = M.gifs?.allowSending && !u.Fr && null != s,
            ei = M.stickers?.allowSending && null != h,
            er = !M.expressionPicker?.onlyEmojis && (en || ei),
            es = r.useCallback(
                (e) => {
                    if ((!ee && (0, f.hasAnyModalOpen)()) || (ee && !(et && k)) || J || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + ef.VQ)) return;
                    for (; (0, c.vq)(t); ) {
                        if (
                            t === j.current ||
                            "true" === t.getAttribute("data-menu-item") ||
                            "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                            "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                        )
                            return;
                        t = t.parentNode;
                    }
                    (0, F.v8)();
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && t$._.dispatchToLastSubscribed(e_.jej.TEXTAREA_FOCUS);
                },
                [k, et, ee, J],
            ),
            ea = r.useCallback(() => {
                (0, F.v8)();
            }, []);
        r.useLayoutEffect(() => {
            let e = () => {
                K === ef.kx.GIF && (0, F.v8)();
            };
            return (
                $.addEventListener("mousedown", es),
                $.addEventListener("contextmenu", es),
                q.subscribe(e_.jej.POPOUT_CLOSE, ea),
                t$._.subscribe(e_.jej.CLOSE_GIF_PICKER, e),
                () => {
                    $.removeEventListener("mousedown", es),
                        $.removeEventListener("contextmenu", es),
                        q.unsubscribe(e_.jej.POPOUT_CLOSE, ea),
                        t$._.unsubscribe(e_.jej.CLOSE_GIF_PICKER, e);
                }
            );
        }, [K, ea, es, $, q]),
            (0, p.t)(V);
        let [eo, el] = (0, T.kn)(X ? [_.M.SOUNDMOJI_BADGE] : [], void 0, !1),
            [eu, ec] = r.useState(!1);
        r.useEffect(() => {
            K === ef.kx.SOUNDBOARD && ec(!0);
        }, [K]),
            r.useEffect(
                () => () => {
                    eu && el(t2.i.TAKE_ACTION);
                },
                [eu, el],
            ),
            r.useEffect(() => {
                (0, F.Ri)("");
            }, []),
            r.useEffect(() => {
                ((!ee && (0, f.hasAnyModalOpen)()) || (ee && !et)) && (0, F.v8)();
            }, [et, ee]),
            r.useEffect(() => {
                null != j.current &&
                    !B.current &&
                    (K === ef.kx.EMOJI
                        ? H?.current?.onPickerOpen != null && (H?.current?.onPickerOpen(), (B.current = !0))
                        : K === ef.kx.STICKER
                          ? H?.current?.onPickerOpen == null || Z || (H?.current?.onPickerOpen(), (B.current = !0))
                          : (I.Ay.trackWithMetadata(e_.HAw.EXPRESSION_PICKER_OPENED, {
                                width: j.current.offsetWidth,
                                tab: K,
                                badged: !1,
                            }),
                            (B.current = !0)));
            });
        let ed = r.useCallback((e, t) => D?.(e, "emoji_picker", t), [D]),
            ep = r.useCallback((e, t) => D?.(e, "soundboard_picker", t), [D]),
            eE = M.soundmoji?.allowSending === !0 && null != D,
            em = Q && null != L && M.expressionPicker?.onlyEmojis !== !0;
        r.useEffect(() => {
            K !== ef.kx.KAOMOJI || em || (0, F.U)(ef.kx.EMOJI);
        }, [K, em]);
        let eg = "left" === x ? "right" : "left",
            eA = null != U ? U : "left" === x ? t6.sj : t6.Jg,
            eI = en
                ? (0, i.jsx)(t5, {
                      id: tQ.g9,
                      "aria-controls": tQ.ni,
                      "aria-selected": K === ef.kx.GIF,
                      isActive: K === ef.kx.GIF,
                      viewType: ef.kx.GIF,
                      children: eh.intl.string(eh.t["6gUTsS"]),
                  })
                : null,
            eT = ei
                ? (0, i.jsx)(t5, {
                      id: eM.LD,
                      "aria-controls": eM.GX,
                      "aria-selected": K === ef.kx.STICKER,
                      isActive: K === ef.kx.STICKER,
                      autoFocus: !z,
                      viewType: ef.kx.STICKER,
                      children: (0, i.jsx)("div", { className: t6.dG, children: eh.intl.string(eh.t.nf1s3u) }),
                  })
                : null,
            eS = (0, i.jsx)(t5, {
                id: tQ.k1,
                "aria-controls": tQ.Do,
                "aria-selected": K === ef.kx.EMOJI,
                isActive: K === ef.kx.EMOJI,
                viewType: ef.kx.EMOJI,
                children: eh.intl.string(eh.t.Xu3wE3),
            });
        return (0, i.jsx)(g.A, {
            section: e_.JJy.EXPRESSION_PICKER,
            children: (0, i.jsx)(y.nE, {
                className: a()(t6.T8, eA),
                targetRef: t,
                position: P,
                align: x,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, i.jsx)("section", {
                        className: a()(t6.V6, { [t6.D0]: !er }),
                        ref: V,
                        role: "dialog",
                        "aria-label": eh.intl.string(eh.t.Utlwvi),
                        children: t
                            ? (0, i.jsxs)("div", {
                                  className: t6.jP,
                                  style: { width: null == Y ? void 0 : Y, [x]: 0 },
                                  ref: j,
                                  children: [
                                      (0, i.jsx)("div", { className: t6.Di, onMouseDown: W, style: { [eg]: -2 } }),
                                      (0, i.jsxs)("div", {
                                          className: t6.FG,
                                          children: [
                                              er
                                                  ? (0, i.jsx)("nav", {
                                                        className: t6.C$,
                                                        children: (0, i.jsxs)("div", {
                                                            className: t6.CT,
                                                            role: "tablist",
                                                            "aria-label": eh.intl.string(eh.t["2j4Vgd"]),
                                                            children: [
                                                                eI,
                                                                eT,
                                                                eS,
                                                                X &&
                                                                    eE &&
                                                                    (0, i.jsx)(t5, {
                                                                        id: tQ.N6,
                                                                        "aria-controls": tQ.AA,
                                                                        "aria-selected": K === ef.kx.SOUNDBOARD,
                                                                        isActive: K === ef.kx.SOUNDBOARD,
                                                                        viewType: ef.kx.SOUNDBOARD,
                                                                        children: (0, i.jsxs)("div", {
                                                                            className: t6.sd,
                                                                            children: [
                                                                                eh.intl.string(eh.t.EHlAMc),
                                                                                null != eo &&
                                                                                    (0, i.jsx)(E.Lp, {
                                                                                        text: eh.intl.string(
                                                                                            eh.t.y2b7CA,
                                                                                        ),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                em
                                                                    ? (0, i.jsx)(t5, {
                                                                          id: tQ.W3,
                                                                          "aria-controls": tQ.pE,
                                                                          "aria-selected": K === ef.kx.KAOMOJI,
                                                                          isActive: K === ef.kx.KAOMOJI,
                                                                          viewType: ef.kx.KAOMOJI,
                                                                          "aria-label": eh.intl.string(eh.t["2pR2JI"]),
                                                                          children: "^\u25BD^",
                                                                      })
                                                                    : null,
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              K === ef.kx.STICKER && ei
                                                  ? (0, i.jsx)(tW, {
                                                        isLoading: Z,
                                                        channel: w,
                                                        containerWidth: Y,
                                                        onSelectSticker: h,
                                                        closePopout: ea,
                                                        ref: (e) => {
                                                            H.current = e;
                                                        },
                                                    })
                                                  : null,
                                              K === ef.kx.GIF && en
                                                  ? (0, i.jsx)(N.A, {
                                                        onSelectGIF: s,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              K === ef.kx.EMOJI
                                                  ? (0, i.jsx)(S.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: w,
                                                        containerWidth: Y,
                                                        emojiSize: null != Y && Y < t4 ? tQ.as.MEDIUM : tQ.as.LARGE,
                                                        pickerIntention:
                                                            M.expressionPicker?.emojiIntention ??
                                                            t3.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == w || null != w.guild_id,
                                                        closePopout: ea,
                                                        onSelectEmoji: o,
                                                        onSelectSoundmoji: ed,
                                                        ref: (e) => {
                                                            H.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            M.soundmoji?.allowSending === !0,
                                                    })
                                                  : null,
                                              K === ef.kx.SOUNDBOARD
                                                  ? (0, i.jsx)("div", {
                                                        className: t6.z,
                                                        children: (0, i.jsx)(O.A, {
                                                            guildId: w.guild_id,
                                                            channel: w,
                                                            containerWidth: Y,
                                                            onClose: ea,
                                                            onSelect: ep,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, i.jsx)("div", { className: t6.BG, children: e }),
                                                            inExpressionPicker: !0,
                                                            shouldValidateSelectedSound: !0,
                                                        }),
                                                    })
                                                  : null,
                                              em && K === ef.kx.KAOMOJI ? (0, i.jsx)(t1, { onSelect: L }) : null,
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
