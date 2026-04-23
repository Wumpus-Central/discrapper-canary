"use strict";
n.d(t, { A: () => t5 });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    d = n(607399),
    _ = n(621466),
    u = n(17928),
    c = n(554146),
    E = n(192308),
    h = n(939249),
    m = n(315710),
    f = n(777666),
    g = n(817281),
    p = n(820284),
    A = n(761929),
    I = n(58149),
    T = n(932001),
    S = n(267889),
    N = n(622142),
    C = n(750506),
    R = n(267102),
    O = n(704591),
    y = n(126970),
    v = n(256449),
    D = n(750385),
    L = n(111956),
    b = n.n(L),
    w = n(942381),
    P = n(319060),
    k = n(289873),
    M = n(212245),
    U = n(793574),
    x = n(688810),
    G = n(850992),
    V = n(151271),
    F = n(464651),
    B = n(87719),
    H = n(234419),
    j = n(253932),
    W = n(287809),
    Y = n(954571),
    K = n(240248),
    z = n(353640),
    $ = n(121894);
let q = Object.freeze({ showPremiumUpsell: !1 }),
    X = (0, z.v)((e) => q),
    Z = (e) => {
        (0, $.r)(() => X.setState({ showPremiumUpsell: e }));
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
    ed = n(71393),
    e_ = n(68935),
    eu = n(148355),
    ec = n(652215),
    eE = n(698279),
    eh = n(985018),
    em = n(950646);
let ef = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    eg = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    ep = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eA = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    eI = (0, K.xI)(P.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eT = (0, K.xI)(P.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    eS = [ef, ef, ef, ef],
    eN = (eg + ep) * 2 + ef,
    eC = eI + 2 * eT,
    eR = (e) => {
        let { stickersListRef: t, channel: n } = e,
            s = r.useRef(null),
            [o, l] = r.useState(!0),
            d = G.bM.useStore((e) => e.activeCategoryIndex),
            _ = (0, v.pD)(n),
            {
                firstStandardStickerCategoryIndex: u,
                firstStandardStickerCategoryOffsetTop: c,
                guildCategoryCount: E,
                hasFirstPartyStickerPacks: m,
            } = r.useMemo(() => {
                let e = _.filter((e) => e.type === ee.Z2.GUILD).length,
                    t = e + +(_[0]?.type === ee.Z2.RECENT) + +(_[0]?.type === ee.Z2.FAVORITE),
                    n = t * (eg + ep) - ep + eC;
                return {
                    firstStandardStickerCategoryIndex: t + 1,
                    firstStandardStickerCategoryOffsetTop: n,
                    guildCategoryCount: e,
                    hasFirstPartyStickerPacks: null != _.find((e) => e.type === ee.Z2.PACK),
                };
            }, [_]);
        r.useLayoutEffect(() => {
            l(E >= 7);
        }, [E]);
        let {
                renderCategoryListItem: f,
                rowHeight: g,
                onScroll: p,
            } = ((e) => {
                let {
                        activeIndex: t,
                        stickerPickerCategories: n,
                        categoryListRef: s,
                        firstStandardStickerCategoryOffsetTop: o,
                        setShouldRenderShortcut: l,
                    } = e,
                    d = (0, M.p)(),
                    _ = (0, V.RQ)((e) => "" !== e.searchQuery),
                    u = r.useCallback(
                        (e, s, o) => {
                            let l,
                                u = n[0]?.type === ee.Z2.FAVORITE,
                                c = +!!u,
                                E = n[c]?.type === ee.Z2.RECENT,
                                m = n.length;
                            if (0 === s && u)
                                return (0, i.jsx)(
                                    "div",
                                    {
                                        role: "listitem",
                                        "aria-setsize": m,
                                        "aria-posinset": s,
                                        children: (0, i.jsx)(h.D, {
                                            "aria-label": eh.intl.string(eh.t.y3LQCG),
                                            className: a()(em._0, em.dC, { [em.k1]: !_ && 0 === t, [em.ls]: !E }),
                                            onClick: o,
                                            children: (0, i.jsx)(er.G, {
                                                size: "custom",
                                                color: "currentColor",
                                                className: em.AB,
                                                height: eA,
                                                width: eA,
                                            }),
                                        }),
                                    },
                                    "favorites",
                                );
                            if (s === c && E)
                                return (0, i.jsx)(
                                    "div",
                                    {
                                        role: "listitem",
                                        "aria-setsize": m,
                                        "aria-posinset": s,
                                        children: (0, i.jsx)(h.D, {
                                            "aria-label": eh.intl.string(eh.t.RxAmVC),
                                            className: a()(em._0, em.dC, em.ls, { [em.k1]: !_ && t === c }),
                                            onClick: o,
                                            children: (0, i.jsx)(es.O, {
                                                size: "custom",
                                                color: "currentColor",
                                                className: em.AB,
                                                height: eA,
                                                width: eA,
                                            }),
                                        }),
                                    },
                                    "recent",
                                );
                            let f = t === s,
                                g = n[s],
                                p = n[s + 1],
                                A = null != p && g.type === ee.Z2.GUILD && p.type !== ee.Z2.GUILD,
                                I = g.type === ee.Z2.PACK,
                                T = "",
                                S = null;
                            if (g.type === ee.Z2.GUILD || g.type === ee.Z2.EMPTY_GUILD_UPSELL) {
                                let e = ed.A.getGuild(g.id);
                                null != e &&
                                    ((l = e.id), (T = e.name), (S = (0, i.jsx)(eo.A, { guild: e, isSelected: f })));
                            } else if (I) {
                                let e = D.A.getStickerPack(g.id);
                                null != e &&
                                    ((T = e.name),
                                    (S = (0, i.jsx)(eu.A, {
                                        disableAnimation: !f || _,
                                        size: eg,
                                        sticker: (0, e_.Id)(e),
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
                                                "aria-setsize": m,
                                                "aria-posinset": s,
                                                children: (0, i.jsx)(h.D, {
                                                    "aria-label": T,
                                                    className: a()(em._0, { [em.ND]: I, [em.Ms]: !_ && f && I }),
                                                    onClick: () => {
                                                        g.type === ee.Z2.PACK &&
                                                            Y.default.track(
                                                                ec.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED,
                                                                {
                                                                    location: d?.location,
                                                                    tab: eE.kx.STICKER,
                                                                    sticker_pack_id: g.id,
                                                                    guild_id: l,
                                                                },
                                                            ),
                                                            o();
                                                    },
                                                    children: S,
                                                }),
                                            }),
                                        }),
                                        A ? (0, i.jsx)("hr", { className: em.ny }, "separator") : null,
                                    ],
                                },
                                g.id,
                            );
                        },
                        [t, d, _, n],
                    ),
                    c = r.useCallback((e, t) => (t ? eN : 0), []);
                return {
                    getScrollOffsetForIndex: c,
                    renderCategoryListItem: u,
                    rowHeight: r.useCallback(
                        (e, t) => {
                            let i = n[t],
                                r = n[t + 1];
                            return eg + (null != r && i.type === ee.Z2.GUILD && r.type !== ee.Z2.GUILD ? eC : ep);
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
                activeIndex: d,
                stickerPickerCategories: _,
                categoryListRef: s,
                firstStandardStickerCategoryOffsetTop: c,
                setShouldRenderShortcut: l,
            }),
            A = r.useCallback(
                (e) => {
                    e(u), s.current?.scrollTo(c);
                },
                [u, c],
            );
        return (0, i.jsx)(el.A, {
            className: em.jv,
            categoryListRef: s,
            expressionsListRef: t,
            store: G.bM,
            listPadding: eS,
            onScroll: p,
            renderCategoryListItem: f,
            rowCount: _.length,
            categories: _,
            categoryHeight: g,
            children: (e) =>
                m &&
                o &&
                (0, i.jsx)(h.D, {
                    className: a()(em.Fe, { [em.Q6]: !o }),
                    onClick: () => A(e),
                    children: (0, i.jsx)(ea.t, { size: "md", color: "currentColor" }),
                }),
        });
    };
var eO = n(534514),
    ey = n(834730),
    ev = n(422936),
    eD = n(811611),
    eL = n(821609),
    eb = n(403581);
function ew(e) {
    let { analyticsSection: t, buttonText: r } = e;
    return (0, i.jsx)(eL.$, {
        variant: "expressive",
        icon: eb.t,
        text: r ?? eh.intl.string(eh.t["8Sh5fg"]),
        onClick: () => {
            var e;
            return (
                (e = { section: t }),
                void (Y.default.track(ec.HAw.OPEN_MODAL, {
                    type: ec.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
                    location: e,
                }),
                (0, E.openModalLazy)(async () => {
                    let { default: e } = await n.e("53274").then(n.bind(n, 397313));
                    return (t) => (0, i.jsx)(e, { ...t });
                }))
            );
        },
    });
}
var eP = n(823894),
    ek = n(788868),
    eM = n(83148);
function eU(e) {
    let { className: t, onClose: n } = e;
    (0, v.XQ)();
    let { analyticsLocations: s } = (0, x.Ay)(U.A.EMPTY_STATE),
        o = (0, u.yK)([D.A], () => eP.vX.map((e) => D.A.getStickerById(e)));
    r.useEffect(() => {
        Y.default.track(ec.HAw.PREMIUM_UPSELL_VIEWED, {
            type: ek.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: ec.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: s,
        });
    }, [s]);
    let l = (0, H.V)(),
        d = (0, ev.O)(),
        _ = null != l || null != d;
    return (0, i.jsxs)("div", {
        className: a()(eM.p$, t, { [eM.Hz]: _ }),
        children: [
            _
                ? (0, i.jsx)(eD.Ay, {
                      discountOffer: d,
                      trialOffer: l,
                      onClose: n,
                      type: ek.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: l?.subscription_trial?.sku_id ?? ek.pe.TIER_2,
                      children: eh.intl.string(eh.t.FnNud4),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(eO.D, {
                              className: eM.wx,
                              variant: "heading-xl/semibold",
                              children: eh.intl.string(eh.t.HEm04J),
                          }),
                          (0, i.jsx)(ey.E, {
                              className: eM.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: eh.intl.string(eh.t.FnNud4),
                          }),
                          (0, i.jsx)("div", {
                              className: eM.l1,
                              children: o
                                  .filter((e) => null != e)
                                  .map((e) => (0, i.jsx)(eu.A, { sticker: e, className: eM.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !_ && (0, i.jsx)(ew, { analyticsSection: ec.JJy.EXPRESSION_PICKER }),
        ],
    });
}
var ex = n(404778),
    eG = n(537652),
    eV = n(962125),
    eF = n(286509),
    eB = n(631576),
    eH = n(369163),
    ej = n(123292),
    eW = n(631305),
    eY = n(997509),
    eK = n(931991),
    ez = n(473145),
    e$ = n(874864),
    eq = n(832938);
let eX = (e) => {
    let { className: t, guildId: n, channel: s, shouldTrackUpsellViewed: o, setTrackedUpsellViewed: l } = e,
        { location: d } = (0, M.p)(),
        { analyticsLocations: _ } = (0, x.Ay)(),
        c = (0, u.bG)([ed.A], () => ed.A.getGuild(n)),
        { canManageAllExpressions: E } = (0, eK.nr)(c),
        h = null != c && 0 === (0, ez.aG)(c.premiumTier) && !c.features.has(ec.GuildFeatures.MORE_STICKERS);
    return (r.useEffect(() => {
        E &&
            h &&
            o &&
            ((0, I.zV)(ec.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: d,
                guild_id: c?.id,
                channel_id: s?.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: _,
            }),
            l(!0));
    }, [h, c, s, d, o, l, _, E]),
    null != c && E)
        ? h
            ? (0, i.jsxs)("div", {
                  className: a()(eq.UX, t),
                  children: [
                      (0, i.jsx)(eH.v, { size: "md", color: "currentColor", className: eq.Kk }),
                      (0, i.jsx)(ey.E, {
                          color: "interactive-text-default",
                          className: eq.rf,
                          variant: "text-sm/normal",
                          children: eh.intl.format(eh.t.AXWla1, { count: (0, ez.aG)(ec.TVA.TIER_1) }),
                      }),
                      (0, i.jsx)(ej.Q, {
                          variant: "primary",
                          text: eh.intl.string(eh.t["Gb+BJD"]),
                          onClick: () => {
                              (0, eW.A)({
                                  analyticsLocations: _,
                                  analyticsSourceLocation: d,
                                  guild: c,
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
                      (0, i.jsx)(ey.E, {
                          color: "interactive-text-default",
                          className: eq.rf,
                          variant: "text-sm/normal",
                          children: eh.intl.string(eh.t.S83wgh),
                      }),
                      (0, i.jsx)(ej.Q, {
                          variant: "primary",
                          text: eh.intl.string(eh.t.bwNjug),
                          onClick: () => {
                              (0, V.v8)(), eY.A.open(n, ec.BEX.STICKERS, d);
                          },
                      }),
                  ],
              })
        : null;
};
var eZ = n(307301),
    eQ = n(182922),
    eJ = n(867981);
let e0 = (0, K.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    e1 = (0, K.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
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
                if ((!(0, e_.FD)(e) && !(0, e_.Xw)(e)) || (0, e_.Xw)(e)) {
                    let r = ed.A.getGuild(e.guild_id);
                    null != r &&
                        ((t = eh.intl.format(eh.t.cZOkbs, { source: r.name })), (n = (0, i.jsx)(eo.A, { guild: r })));
                } else if ((0, e_.FD)(e)) {
                    let r = D.A.getStickerPack(e.pack_id);
                    null != r &&
                        ((t = eh.intl.format(eh.t.cZOkbs, { source: r.name })),
                        (n = (0, i.jsx)(eu.A, { size: e1, sticker: (0, e_.Id)(r), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(s),
            l =
                (0, e_.FD)(s) || (0, e_.Xw)(s)
                    ? (0, i.jsx)(eu.A, { isInteracting: !0, size: e0, sticker: s, disableAnimation: !0 })
                    : (0, i.jsx)("div", {
                          className: eJ.P,
                          children: (0, i.jsx)(eZ.j, { size: "md", color: "currentColor", className: eJ.K }),
                      });
        return (0, i.jsx)(eQ.A, {
            graphicPrimary: l,
            graphicSecondary: a,
            titlePrimary: s.name,
            titleSecondary: (0, e_.FD)(s) || (0, e_.Xw)(s) ? o : null,
        });
    });
var e3 = n(140735),
    e6 = n(442433),
    e4 = n(304072),
    e7 = n(194261),
    e5 = n(429631);
let e8 = (e) => {
    let { size: t } = e;
    return (0, i.jsx)("div", {
        className: e5.G,
        style: { width: t, height: t },
        children: (0, i.jsx)(e7.X, { size: "xxs", color: "currentColor", className: e5.I }),
    });
};
var e9 = n(584176);
let te = r.memo(function (e) {
    let {
            isDisplayingIndividualStickers: t = !1,
            preferAnimation: s = !0,
            getStickerItemProps: l,
            getStickerRowProps: d,
            gutterWidth: _,
            inspectedStickerPosition: u,
            isScrolling: c,
            isUsingKeyboardNavigation: m,
            onInspect: f,
            onSelect: g,
            rowIndex: p,
            stickerClassName: A,
            stickerDescriptors: I,
            stickerPadding: T,
            stickerSize: S,
            ownedStickerPacks: N,
            enlargeOnInteraction: C = !1,
            channel: R,
            currentUser: O,
            checkSendability: y = !0,
        } = e,
        { location: v } = (0, M.p)(),
        D = S + 2 * T,
        L = r.useMemo(
            () => ({
                gridColumnGap: _,
                gridTemplateColumns: `repeat(auto-fill, ${D}px)`,
                height: D,
                paddingRight: t ? void 0 : D,
            }),
            [t, _, D],
        ),
        b = r.useMemo(() => ({ width: S, height: S, padding: T }), [T, S]),
        [w, P] = (0, e4.A)(null, 300);
    return (0, i.jsx)("div", {
        className: e9.nM,
        style: L,
        ...d?.(p),
        children: I.map((e) => {
            let d = e.visibleRowIndex === u?.rowIndex && e.columnIndex === u?.columnIndex,
                _ = e.type === ee.op.STICKER && C && d,
                I = (0, o.throttle)(() => {
                    c?.current === !0 || m?.current === !0 || d || f?.(e);
                }, 250),
                { ref: T, tabIndex: D, onFocus: L, ...k } = l?.(e.columnIndex, p) ?? {};
            switch (e.type) {
                case ee.op.CREATE_STICKER:
                    return (0, i.jsx)(
                        "div",
                        {
                            ...k,
                            children: (0, i.jsxs)(h.D, {
                                "aria-label": e.name,
                                className: a()(e9.wP, A, { [e9.Kj]: d }),
                                innerRef: T,
                                tabIndex: D,
                                onFocus: L ?? I,
                                onMouseMove: I,
                                onClick: () => {
                                    e.type === ee.op.CREATE_STICKER &&
                                        (Y.default.track(ec.HAw.OPEN_MODAL, {
                                            type: ec.JJy.CREATE_STICKER_MODAL,
                                            location: v,
                                        }),
                                        (0, E.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([n.e("29143"), n.e("93796")]).then(
                                                n.bind(n, 445002),
                                            );
                                            return (n) => (0, i.jsx)(t, { guildId: e.guild_id, ...n });
                                        }));
                                },
                                style: b,
                                children: [
                                    !C && (0, i.jsx)("div", { className: e9.fw }),
                                    (0, i.jsx)("div", {
                                        className: e9.P0,
                                        children: (0, i.jsx)(eZ.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: e9.Kk,
                                        }),
                                    }),
                                    (0, i.jsx)(ey.E, {
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
                    let o = t && null != N && (0, e_.FD)(e.sticker) && !N.has(e.sticker.pack_id);
                    return (0, r.createElement)(
                        "div",
                        { ...k, key: e.sticker.id },
                        (0, i.jsxs)(h.D, {
                            className: a()(e9.yI, A, { [e9.PV]: d, [e9.TV]: w === e.sticker.id }),
                            innerRef: T,
                            tabIndex: D,
                            onFocus: L ?? I,
                            onMouseMove: I,
                            onClick: (t) => {
                                if (c?.current === !0 || m?.current === !0) return;
                                let n = t.altKey;
                                n && e.type === ee.op.STICKER && !(0, e_.o1)(e.sticker.id) && P(e.sticker.id),
                                    g?.(e, n);
                            },
                            onContextMenu: (e) => {
                                (0, e6.L3)(e, async () => {
                                    let { default: e } = await n.e("23751").then(n.bind(n, 233503));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            },
                            style: b,
                            "data-type": en.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, i.jsx)(e3.A, { children: (0, eu.h)(e.sticker) }),
                                (0, i.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !C && (0, i.jsx)("div", { className: e9.fw }),
                                        (0, i.jsx)(eu.A, {
                                            className: a()(e9.SI, {
                                                [e9.ot]:
                                                    C && !d && null != u && -1 !== u.rowIndex && -1 !== u.columnIndex,
                                                [e9.Q$]: _,
                                                [e9.No]: y && !(0, Q.G7)(e.sticker, O, R),
                                            }),
                                            disableAnimation: !d && !s,
                                            enlargeOnInteraction: C,
                                            isInteracting: d,
                                            maskAsset: d,
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
let ti = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tr = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    ts = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    ta = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    to = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tl = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    td = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    t_ = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tu = (0, K.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tc = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tE = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    th = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tm = [ts, to, tl, td],
    tf = [ta, to, tl, td],
    tg = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tp = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
    tA = (e) => {
        let { onSuggestionClick: t } = e;
        return (0, i.jsx)("div", {
            className: tt.yB,
            children: tp.map((e) =>
                (0, i.jsx)(
                    h.D,
                    {
                        className: tt.x_,
                        onClick: () => t(e),
                        children: (0, i.jsx)(ey.E, { variant: "text-sm/normal", color: "text-default", children: e }),
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
                gutterWidth: d,
                stickerPadding: _,
                isUsingKeyboardNavigation: c,
                onSelectSticker: E,
                rowCount: h,
                rowCountBySection: m,
                stickersCategories: f,
                stickersGrid: g,
                channel: p,
            } = e,
            A = tc + 2 * _,
            I = r.useRef(!1),
            T = r.useRef(null),
            [S, N] = G.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], w.x),
            { analyticsLocations: C } = (0, x.Ay)(U.A.STICKER_PICKER),
            R = (0, V.RQ)((e) => e.searchQuery),
            O = (0, u.bG)([D.A], () => D.A.getPremiumPacks()),
            {
                renderRow: y,
                renderSection: v,
                renderSectionFooter: L,
                sectionFooterHeight: b,
                renderSectionHeader: P,
                sectionHeaderHeight: k,
            } = ((e) => {
                let {
                        collapsedStickersCategories: t,
                        gridWidth: n,
                        stickerPadding: s,
                        onSelectSticker: a,
                        getStickerItemProps: o,
                        getStickerRowProps: l,
                        gutterWidth: d,
                        inspectedStickerPosition: _,
                        isScrolling: c,
                        isUsingKeyboardNavigation: E,
                        stickersGrid: h,
                        stickersCategories: m,
                        filteredStickers: f,
                        ownedStickerPacks: g,
                        channel: p,
                    } = e,
                    A = (0, M.p)(),
                    I = (0, u.bG)([W.default], () => W.default.getCurrentUser()),
                    { handleStickerInspect: T, handleSelect: S } = ((e) => {
                        let { onSelectSticker: t, channel: n, currentUser: i } = e,
                            s = (0, M.p)(),
                            a = (0, V.RQ)((e) => e.searchQuery);
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
                                            "" === a ? ec.ZSU.STICKER_PICKER_VIEW_ALL : ec.ZSU.STICKER_SEARCH_VIEW_ALL,
                                    };
                                    if (null != o && !(0, Q.G7)(o, i, n)) {
                                        let e = (0, e_.Xw)(o);
                                        (0, Q.W$)(o, i, n) === Q.Ux.SENDABLE_WITH_PREMIUM && Z(!0),
                                            e && Q.Ux.SENDABLE_WITH_BOOSTED_GUILD;
                                        return;
                                    }
                                    r
                                        ? (0, e_.o1)(o.id)
                                            ? (0, eB.vr)(o.id)
                                            : ((0, J.Dt)({ sticker: o, location: { ...l, object: ec.ZSU.STICKER } }),
                                              (0, eB.uK)(o.id))
                                        : t(e);
                                },
                                [s.location, a, i, n, t],
                            ),
                        };
                    })({ onSelectSticker: a, channel: p, currentUser: I }),
                    [N, C] = r.useState(!1),
                    R = r.useCallback((e) => {
                        j.tP.updateSetting(Array.from(e));
                    }, []),
                    O = r.useCallback(
                        (e) => {
                            let t = h[e];
                            return null != t
                                ? (0, i.jsx)(
                                      te,
                                      {
                                          getStickerItemProps: o,
                                          getStickerRowProps: l,
                                          gutterWidth: d,
                                          inspectedStickerPosition: _,
                                          isScrolling: c,
                                          isUsingKeyboardNavigation: E,
                                          onInspect: T,
                                          onSelect: S,
                                          rowIndex: e,
                                          stickerClassName: tt.yI,
                                          stickerDescriptors: t,
                                          stickerSize: n > ti ? tc : tE,
                                          stickerPadding: s,
                                          preferAnimation: n <= tr,
                                          ownedStickerPacks: g,
                                          isDisplayingIndividualStickers: !0,
                                          channel: p,
                                          currentUser: I,
                                      },
                                      e,
                                  )
                                : null;
                        },
                        [h, o, l, d, _, c, E, T, S, n, s, g, p, I],
                    ),
                    y = r.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
                    v = r.useCallback(
                        function (e) {
                            let { isStickerPack: n = !0 } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = new Set(t),
                                r = t.has(e);
                            r ? i.delete(e) : i.add(e),
                                Y.default.track(ec.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                    location: A?.location,
                                    tab: eE.kx.STICKER,
                                    collapsed: !r,
                                    sticker_pack_id: n ? e : null,
                                }),
                                R(i);
                        },
                        [A, t, R],
                    ),
                    L = r.useCallback(
                        (e) => {
                            let n = m[e];
                            if (null != f) {
                                let { sendable: t, sendableWithPremium: n } = f;
                                if (0 === e && t.length > 0) return null;
                                let r = t.length > 0 && n.length > 0;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        r
                                            ? (0, i.jsx)("div", { className: tt.yF, children: (0, i.jsx)(ex.c, {}) })
                                            : null,
                                        (0, i.jsx)(
                                            eF.A,
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
                                        eF.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": eh.intl.formatToPlainString(eh.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, i.jsx)(er.G, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => v(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case ee.Z2.RECENT:
                                    return (0, i.jsx)(
                                        eF.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": eh.intl.formatToPlainString(eh.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, i.jsx)(es.O, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => v(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case ee.Z2.GUILD:
                                case ee.Z2.EMPTY_GUILD_UPSELL: {
                                    let e = ed.A.getGuild(n.id);
                                    if (null == e) return null;
                                    return (0, i.jsx)(
                                        eF.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": eh.intl.formatToPlainString(eh.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, i.jsx)(eo.A, { guild: e, height: 16, width: 16 }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => v(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                                case ee.Z2.PACK: {
                                    let e = D.A.getStickerPack(n.id);
                                    if (null == e) return null;
                                    return (0, i.jsx)(
                                        eF.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": eh.intl.formatToPlainString(eh.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, i.jsx)(eu.A, {
                                                disableAnimation: !0,
                                                size: 12,
                                                sticker: (0, e_.Id)(e),
                                            }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => v(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                            }
                        },
                        [t, m, v, f],
                    ),
                    b = r.useCallback(
                        (e) => {
                            if (null != f) {
                                let { sendable: t, sendableWithPremium: n } = f;
                                return 0 === e && t.length > 0 ? 0 : tu + (t.length > 0 && n.length > 0 ? t_ : 0);
                            }
                            return tu;
                        },
                        [f],
                    );
                return {
                    renderRow: O,
                    renderSection: y,
                    renderSectionHeader: L,
                    sectionHeaderHeight: b,
                    renderSectionFooter: r.useCallback(
                        (e) => {
                            let n = m[e],
                                r = t.has(n.id);
                            return n.type !== ee.Z2.EMPTY_GUILD_UPSELL || null != f || r
                                ? null
                                : (0, i.jsx)(
                                      eX,
                                      {
                                          className: tt.Ij,
                                          guildId: n.id,
                                          channel: p,
                                          shouldTrackUpsellViewed: !N,
                                          setTrackedUpsellViewed: C,
                                      },
                                      `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                  );
                        },
                        [m, t, f, p, N],
                    ),
                    sectionFooterHeight: r.useCallback(
                        (e) => {
                            let n = m[e],
                                i = t.has(n.id);
                            return n.type !== ee.Z2.EMPTY_GUILD_UPSELL || i ? 0 : tg;
                        },
                        [m, t],
                    ),
                };
            })({
                collapsedStickersCategories: n,
                gridWidth: s,
                stickerPadding: _,
                stickersCategories: f,
                stickersGrid: g,
                isScrolling: I,
                isUsingKeyboardNavigation: c,
                onSelectSticker: E,
                getStickerItemProps: o,
                getStickerRowProps: l,
                gutterWidth: d,
                inspectedStickerPosition: N,
                filteredStickers: a,
                ownedStickerPacks: r.useMemo(() => new Set(O.map((e) => e.id)), [O]),
                channel: p,
            }),
            B = (0, F.Fk)({
                activeCategoryIndex: S,
                isScrolling: I,
                listRef: T,
                onActiveCategoryIndexChange: G.bM.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: R,
            });
        return (
            (0, F.FV)({ searchQuery: R, activeCategoryIndex: S, listRef: T }),
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
            (0, i.jsx)(x.f5, {
                value: C,
                children: (0, i.jsxs)("div", {
                    className: tt.iE,
                    children: [
                        null != a && 0 === a.sendable.length && 0 === a.sendableWithPremium.length
                            ? (0, i.jsx)(eG.A, {
                                  message: eh.intl.string(eh.t["zc+LQd"]),
                                  className: tt.__invalid_noSearchResultsContainer,
                                  noResultsImageURL: tn,
                                  suggestions: (0, i.jsx)(tA, { onSuggestionClick: (e) => (0, V.Ri)(e, !0) }),
                              })
                            : (0, i.jsx)(eV.A, {
                                  role: "none presentation",
                                  listPadding: null != a ? tf : tm,
                                  onScroll: B,
                                  renderRow: y,
                                  renderSection: null == a ? v : void 0,
                                  renderSectionHeader: P,
                                  renderSectionFooter: L,
                                  rowCount: h,
                                  rowCountBySection: m,
                                  rowHeight: s > ti ? A + th : tE + 2 * _ + th,
                                  sectionHeaderHeight: k,
                                  sectionFooterHeight: b,
                                  stickyHeaders: !0,
                                  ref: T,
                              }),
                        (0, i.jsx)(e2, { stickersGrid: g }),
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
    tC = n(892547),
    tR = n(337485);
let tO = r.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: s, channel: a } = e,
        o = (0, v.ZO)(a),
        l = r.useRef(null),
        { searchQuery: d, isSearchSuggestion: _ } = (0, V.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            w.x,
        ),
        u = G.bM.useStore((e) => e.searchPlaceholder),
        [c, E] = G.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], w.x),
        h = r.useCallback(
            (e) => {
                G.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    G.bM.setInspectedExpressionPosition(0, 0),
                    G.bM.setSearchPlaceholder(null),
                    (0, V.Ri)(e),
                    s.current?.scrollTo(0);
            },
            [s],
        ),
        m = r.useCallback(() => {
            h("");
        }, [h]);
    return (
        r.useImperativeHandle(t, () => ({ focus: () => l.current?.focus() })),
        r.useLayoutEffect(() => {
            _ && l.current?.focus();
        }, [_]),
        (0, i.jsx)("div", {
            className: tR.i,
            children: (0, i.jsx)(tC.I, {
                autoFocus: o,
                disabled: !o,
                query: d,
                ref: l,
                placeholder: u ?? (o ? eh.intl.string(eh.t.dt5h1C) : eh.intl.string(eh.t["Pck/4U"])),
                onClear: m,
                onKeyDown: n,
                onChange: h,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": eP.lq,
                    "aria-expanded": !0,
                    ...(E ? { "aria-activedescendant": (0, tN.Aq)(eP.lq, c.columnIndex, c.rowIndex) } : void 0),
                },
            }),
        })
    );
});
n(321073);
var ty = n(768038),
    tv = n(789645),
    tD = n(927578),
    tL = n(217653),
    tb = n(939383);
let tw = () => Z(!1),
    tP = (e) => {
        let { onLearnMore: t } = e,
            { analyticsLocations: n } = (0, x.Ay)(U.A.PREMIUM_UPSELL);
        r.useEffect(() => {
            Y.default.track(ec.HAw.PREMIUM_UPSELL_VIEWED, {
                location_section: ec.JJy.STICKER_PICKER_UPSELL,
                type: ek.e.STICKER_PICKER_UPSELL,
                location_stack: n,
            });
        }, [n]);
        let s = (0, H.V)(),
            o = (0, ev.O)(),
            l = s?.subscription_trial?.sku_id === ek.pe.TIER_0,
            d = null != s || null != o;
        return (0, i.jsxs)("div", {
            className: a()(tL.VL, { [tL.Hz]: d }),
            children: [
                d
                    ? (0, i.jsx)(eD.Ay, {
                          trialOffer: s,
                          discountOffer: o,
                          onClose: tw,
                          type: ek.e.STICKER_PICKER_UPSELL,
                          subscriptionTier: s?.subscription_trial?.sku_id ?? ek.pe.TIER_2,
                          children: l
                              ? eh.intl.format(eh.t.MAGagw, {
                                    planName: (0, tD.RH)(ek.gD.PREMIUM_MONTH_TIER_0),
                                    onClick: t,
                                })
                              : eh.intl.format(eh.t.jt7JX6, { onClick: t }),
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("img", { className: tL.Tn, src: tb, alt: eh.intl.string(eh.t.do7AoM) }),
                              (0, i.jsx)(ey.E, {
                                  className: tL.ex,
                                  color: "text-strong",
                                  variant: "text-lg/semibold",
                                  children: eh.intl.string(eh.t.jJG1pl),
                              }),
                              (0, i.jsx)(ey.E, {
                                  className: tL.GR,
                                  variant: "text-md/normal",
                                  children: eh.intl.format(eh.t.jt7JX6, { onClick: t }),
                              }),
                          ],
                      }),
                !d && (0, i.jsx)(ew, { analyticsSection: ec.JJy.EXPRESSION_PICKER }),
                (0, i.jsx)(h.D, {
                    className: tL.kz,
                    onClick: tw,
                    children: (0, i.jsx)(tv.P, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    };
var tk = n(854138);
let tM = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tU = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tx = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tG = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tV = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    tF = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tB = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tH = b()(J.Qz, 200),
    tj = b()(J.HA, 200),
    tW = r.forwardRef(function (e, t) {
        let { containerWidth: s, channel: a, onSelectSticker: o, closePopout: l } = e,
            d = tS.useConfig({ location: "StickerPicker" }).padding,
            { location: _ } = (0, M.p)(),
            { analyticsLocations: c } = (0, x.Ay)(U.A.STICKER_PICKER),
            h = (0, H.V)()?.subscription_trial != null,
            m = r.useRef(null),
            f = r.useRef(null),
            g = r.useRef(null),
            p = X((e) => e.showPremiumUpsell),
            [A, I] = (0, V.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], w.x),
            T = r.useRef("");
        r.useImperativeHandle(t, () => ({ onPickerOpen: eh }));
        let S = (0, v.pD)(a),
            N = 0 === S.filter((e) => e.type !== ee.Z2.EMPTY_GUILD_UPSELL).length,
            C = (0, F.oV)({
                gridWrapperRef: m,
                containerWidth: s,
                showingEmptyState: N,
                listPaddingLeft: tU,
                listScrollbarWidth: 8,
            }),
            R = j.tP.useSetting(),
            O = r.useMemo(() => new Set(R), [R]),
            y = (0, u.bG)([W.default], () => W.default.getCurrentUser()),
            L = r.useMemo(
                () =>
                    ((e, t, n) => {
                        if ("" === e) return null;
                        let i = [],
                            r = [];
                        return (
                            ty.Ay.queryStickers([e], !0)
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
                    })(A, y, a),
                [A, y, a],
            ),
            b = (0, v.Gc)(),
            P = (0, v.UT)(),
            k = (0, u.cf)([D.A], () => D.A.getAllGuildStickers()),
            { sendable: K = [], sendableWithPremium: z = [] } = L ?? {},
            $ = K.length + z.length,
            q = r.useCallback(
                (e) => {
                    "" === A ? (0, J.ry)(e) : (0, J.nQ)(e, A, $), o(e.sticker, ee.D6.STICKER_PICKER);
                },
                [o, A, $],
            ),
            Z = null != C && C > tM,
            {
                rowCount: ei,
                rowCountBySection: er,
                stickersGrid: es,
                gutterWidth: ea,
                columnCounts: eo,
            } = (0, v._c)({
                filteredStickers: L,
                stickersCategories: S,
                collapsedStickersCategories: O,
                listWidth: C,
                listPaddingRight: tx,
                stickerNodeMargin: Z ? tG : tV,
                stickerNodeWidth: Z ? tF + 2 * d : tB + 2 * d,
            }),
            {
                getItemProps: el,
                getRowProps: ed,
                gridContainerProps: e_,
                handleGridContainerKeyDown: eu,
                isUsingKeyboardNavigation: eE,
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
                    d = (0, M.p)(),
                    _ = r.useCallback(
                        (e) => {
                            l(e, d);
                        },
                        [l, d],
                    ),
                    u = r.useCallback(
                        (e, t) => {
                            o(e, t, en.t.GRID_NAVIGATOR_EVENT);
                        },
                        [o],
                    ),
                    {
                        gridDispatch: c,
                        getItemProps: E,
                        getRowProps: h,
                        gridContainerProps: m,
                        handleGridContainerKeyDown: f,
                        isUsingKeyboardNavigation: g,
                    } = (0, F.Ff)({
                        columnCounts: t,
                        gridNavigatorId: a,
                        itemGrid: n,
                        itemList: i,
                        onGridNavigatorItemSelect: _,
                        onGridNavigatorPositionChange: u,
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
                                        c({ type: et.n.SET_FOCUSED_POSITION, x: t, y: n });
                                },
                            ),
                        [c, s],
                    ),
                    {
                        getItemProps: E,
                        getRowProps: h,
                        gridContainerProps: m,
                        handleGridContainerKeyDown: f,
                        isUsingKeyboardNavigation: g,
                    }
                );
            })({
                columnCounts: eo,
                stickersListRef: f,
                stickersGrid: es,
                onGridItemSelect: r.useCallback(
                    (e, t) => {
                        let { location: r } = t;
                        switch (e.type) {
                            case ee.op.CREATE_STICKER:
                                Y.default.track(ec.HAw.OPEN_MODAL, { type: ec.JJy.CREATE_STICKER_MODAL, location: _ }),
                                    (0, E.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([n.e("29143"), n.e("93796")]).then(
                                            n.bind(n, 445002),
                                        );
                                        return (n) => (0, i.jsx)(t, { guildId: e.guild_id, ...n });
                                    });
                                break;
                            case ee.op.STICKER:
                                null != e.sticker && (0, Q.G7)(e.sticker, y, a) && q(e);
                        }
                    },
                    [_, y, a, q],
                ),
                store: G.bM,
                setInspectedStickerPosition: G.bM.setInspectedExpressionPosition,
                gridNavigatorId: eP.lq,
            });
        r.useEffect(() => G.bM.resetStoreState, []);
        let eh = () => {
            let e = a.getGuildId(),
                t = [];
            null !== e && (t = D.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            null != k &&
                [...k.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, J.p4)({
                    containerWidth: s,
                    favoriteStickers: b,
                    frequentlyUsedStickers: P,
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
                g.current?.focus();
            }, []);
        let em = r.useCallback(() => {
            l(),
                Y.default.track(ec.HAw.PREMIUM_PROMOTION_OPENED, { location_section: ec.JJy.STICKER_PICKER_UPSELL }),
                (0, B.e)();
        }, [l]);
        return (0, i.jsxs)(x.f5, {
            value: c,
            children: [
                !(h && N) &&
                    (0, i.jsx)("div", {
                        className: tk.wx,
                        children: (0, i.jsx)(tO, { ref: g, onKeyDown: eu, stickersListRef: f, channel: a }),
                    }),
                N
                    ? (0, i.jsx)(eU, { className: tk.p$, onClose: l })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  ref: m,
                                  className: tk.AD,
                                  id: eP.lq,
                                  ...e_,
                                  children:
                                      null != C
                                          ? (0, i.jsx)(tI, {
                                                ref: f,
                                                collapsedStickersCategories: O,
                                                filteredStickers: L,
                                                getStickerItemProps: el,
                                                getStickerRowProps: ed,
                                                gridWidth: C,
                                                gutterWidth: ea,
                                                stickerPadding: d,
                                                isUsingKeyboardNavigation: eE,
                                                onSelectSticker: q,
                                                rowCount: ei,
                                                rowCountBySection: er,
                                                stickersCategories: S,
                                                stickersGrid: es,
                                                channel: a,
                                            })
                                          : null,
                              }),
                              (0, i.jsx)(eR, { stickersListRef: f, channel: a }),
                          ],
                      }),
                p && (0, i.jsx)(tP, { onLearnMore: em }),
            ],
        });
    }),
    tY = r.forwardRef(
        (e, t) => (
            (0, v.XQ)(),
            (0, i.jsx)("div", {
                className: tk.iE,
                id: eP.GX,
                "aria-labelledby": eP.LD,
                role: "tabpanel",
                children: e.isLoading ? (0, i.jsx)(k.y, { className: tk.Mz }) : (0, i.jsx)(tW, { ...e, ref: t }),
            })
        ),
    );
var tK = n(964404),
    tz = n(712687),
    t$ = n(625494);
let tq = (0, tT.mj)({
    name: "2026-03-kaomoji-picker",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tX = n(364522);
let tZ = [
    {
        category: "wave",
        categoryMessageKey: eh.t.GrrYHn,
        keywords: ["wave", "waving", "hand", "hello", "hi", "hey"],
        kaomojis: ["ヾ(＾-＾)ノ", "ヽ(•̀ᴗ•́)ノ", "ヾ(＾∇＾)", "|˶˙ᵕ˙ )ﾉﾞ", "☆ﾐ(o*･ω･)ﾉ", "(｡･ω･｡)ﾉ♡"],
    },
    {
        category: "happy",
        categoryMessageKey: eh.t.Tj0FXM,
        keywords: ["happy", "smile", "smiling", "joy"],
        kaomojis: ["^▽^", "⸂⸂⸜(രᴗര๑)⸝⸃⸃", "(◍•ᴗ•◍)", "(◕‿◕)", "꒰｡•◡•｡꒱", "(\xb4▽`)", "ദ്ദി ( ᵔ ᗜ ᵔ )", "( ͡• ͜ʖ ͡• )"],
    },
    {
        category: "excited",
        categoryMessageKey: eh.t.gQsrOG,
        keywords: ["excited", "enthusiastic", "thrilled", "cheerful", "hype", "yay"],
        kaomojis: ["(๑˃ᴗ˂)ﻭ", "ᕕ( ᐛ )ᕗ", "(ﾉ◕ヮ◕)ﾉ･ﾟ✧", "(☆▽☆)", "(੭ ˙ᗜ˙)੭", "(ﾉ≧∀≦)ﾉ", "ദ്ദി◝ ⩊ ◜.ᐟ"],
    },
    {
        category: "cute",
        categoryMessageKey: eh.t["/jZYwz"],
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
        categoryMessageKey: eh.t["4nnQWB"],
        keywords: ["love", "heart", "hearts", "affection"],
        kaomojis: ["(｡♥‿♥｡)", "(ෆ˙ᵕ˙ෆ)♡", "(灬\xba‿\xba灬)♡", "(◕‿◕)♡", "♡(˃͈ દ ˂͈ ༶ )", "(｡˃ ᵕ ˂ )⸝♡", "（╹◡╹）♡"],
    },
    {
        category: "cool",
        categoryMessageKey: eh.t.X4O8dY,
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
        categoryMessageKey: eh.t.ZUaZLp,
        keywords: ["confused", "huh", "what", "shrug", "idk"],
        kaomojis: ["(\xb7•᷄‎ࡇ•᷅ )", "(•́＿•̀)", "( ・◇・)？", "(◉＿◉)", "(⊙＿⊙)", "(o\xb4〰`o)"],
    },
    {
        category: "sad",
        categoryMessageKey: eh.t["/9vZ+t"],
        keywords: ["sad", "cry", "crying", "tears", "depressed", "sorrow"],
        kaomojis: ["(｡•́⌓•̀｡)", "(ㅠ﹏ㅠ)", "(｡•́︿•̀｡)", "(◞‸◟)", "(\xb4;ω;｀)", "( • ᴖ • ｡)", "(｡ŏ_ŏ)"],
    },
    {
        category: "angry",
        categoryMessageKey: eh.t.GUrGRo,
        keywords: ["angry", "mad", "rage", "frustrated", "annoyed"],
        kaomojis: ["(ಠ＿ಠ)", "(｀皿\xb4)", "(\xac＿\xac)", "(ಠ益ಠ)", "(≖＿≖ )", "(ᓀ‸ᓂ)", "( `へ\xb4* )"],
    },
    {
        category: "music",
        categoryMessageKey: eh.t.SwOaV2,
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
        categoryMessageKey: eh.t.UisscN,
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
        categoryMessageKey: eh.t["q/yMTa"],
        keywords: ["flip", "unflip", "tableflip"],
        kaomojis: ["(╯\xb0□\xb0)╯︵ ┻━┻", "┬─┬ノ( \xba _ \xbaノ)"],
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
            return tZ
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
                I.Ay.trackWithMetadata(ec.HAw.EXPRESSION_PICKER_KAOMOJI_SELECTED, {
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
        d = r.useCallback(() => {
            s("");
        }, []);
    return (0, i.jsxs)("div", {
        className: tJ.Zp,
        role: "region",
        "aria-label": eh.intl.string(eh.t["2pR2JI"]),
        children: [
            (0, i.jsx)("div", {
                className: tJ.wx,
                children: (0, i.jsx)(tC.I, {
                    query: n,
                    onChange: l,
                    onClear: d,
                    placeholder: eh.intl.string(eh.t["5h0QOP"]),
                    "aria-label": eh.intl.string(eh.t["5h0QOP"]),
                }),
            }),
            (0, i.jsx)(tX.Ip, {
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
                                              (0, i.jsx)(ey.E, {
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
                                                              children: (0, i.jsx)(eL.$, {
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
                              children: (0, i.jsx)(ey.E, {
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
    t7 = r.memo(function (e) {
        let { isActive: t, className: n, viewType: r, autoFocus: s = !1, "aria-controls": o, ...l } = e;
        return (0, i.jsx)(h.D, {
            role: "tab",
            autoFocus: s,
            "aria-controls": t ? o : void 0,
            ...l,
            onClick: () => {
                I.Ay.trackWithMetadata(ec.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: r, badged: !1 }), (0, V.U)(r);
            },
            "aria-current": t ? "page" : void 0,
            className: a()(n, t6.oi, t6.pc, { [t6.Mv]: t }),
        });
    }),
    t5 = r.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: s,
                onSelectEmoji: o,
                onSelectSticker: h,
                onSelectSound: L,
                onSelectKaomoji: b,
                channel: w,
                type: P,
                position: k,
                align: M,
                positionLayerClassName: U,
                closeOnModalOuterClick: x = !1,
                parentModalKey: G,
            } = e,
            F = r.useRef(null),
            B = r.useRef(!1),
            H = r.useRef(null),
            j = r.useRef(null),
            { drawerWidth: W, handleDrawerResizeHandleMouseDown: Y } = ((e) => {
                let { positionContainerRef: t, drawerRef: n, orientation: i } = e,
                    s = (0, u.bG)([tK.Ay], () => tK.Ay.expressionPickerWidth),
                    [a, o] = r.useState(window.innerWidth),
                    [d, _] = r.useState(s ?? eE.wp.MIN),
                    c = r.useMemo(() => {
                        switch (d) {
                            case eE.wp.MIN:
                                return 498;
                            case eE.wp.MAX:
                                return null;
                            default:
                                return d;
                        }
                    }, [d]),
                    E = r.useCallback(
                        (e) => {
                            let t = e >= a ? eE.wp.MAX : e <= 498 ? eE.wp.MIN : e;
                            null == t && null != n.current && (n.current.style.width = ""),
                                g.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                _(t);
                        },
                        [n, a],
                    ),
                    h = (0, A.A)({
                        initialElementDimension: c,
                        maxDimension: a,
                        minDimension: 498,
                        resizableDomNodeRef: n,
                        onElementResize: E,
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
                        drawerWidth: c,
                        handleDrawerResizeHandleMouseDown: r.useCallback(
                            (e) => {
                                e.stopPropagation(), null != t.current && o(t.current.offsetWidth), h(e);
                            },
                            [t, h],
                        ),
                    }
                );
            })({
                positionContainerRef: F,
                drawerRef: j,
                orientation: "left" === M ? A.R.HORIZONTAL_RIGHT : A.R.HORIZONTAL_LEFT,
            }),
            K = (0, V.RQ)((e) => e.activeView),
            z = (0, v.ZO)(w),
            { renderWindow: $, windowDispatch: q } = r.useContext(R.Ay),
            X = (0, u.bG)([D.A], () => !D.A.hasLoadedStickerPacks),
            Z = (0, O.tj)({ location: "expression_picker" }),
            Q = tq.useConfig({ location: "expression_picker" }).enabled,
            J = (0, u.bG)([tz.A], () => tz.A.isOpen()),
            ee = null != G,
            et = (0, E.useIsModalAtTop)(G ?? ""),
            en = P.gifs?.allowSending && !d.Fr && null != s,
            ei = P.stickers?.allowSending && null != h,
            er = !P.expressionPicker?.onlyEmojis && (en || ei),
            es = r.useCallback(
                (e) => {
                    if ((!ee && (0, E.hasAnyModalOpen)()) || (ee && !(et && x)) || J || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, _.vq)(t) && null != t.closest("." + eE.VQ)) return;
                    for (; (0, _.vq)(t); ) {
                        if (
                            t === j.current ||
                            "true" === t.getAttribute("data-menu-item") ||
                            "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                            "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                        )
                            return;
                        t = t.parentNode;
                    }
                    (0, V.v8)();
                    let n = (0, _.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && t$._.dispatchToLastSubscribed(ec.jej.TEXTAREA_FOCUS);
                },
                [x, et, ee, J],
            ),
            ea = r.useCallback(() => {
                (0, V.v8)();
            }, []);
        r.useLayoutEffect(() => {
            let e = () => {
                K === eE.kx.GIF && (0, V.v8)();
            };
            return (
                $.addEventListener("mousedown", es),
                $.addEventListener("contextmenu", es),
                q.subscribe(ec.jej.POPOUT_CLOSE, ea),
                t$._.subscribe(ec.jej.CLOSE_GIF_PICKER, e),
                () => {
                    $.removeEventListener("mousedown", es),
                        $.removeEventListener("contextmenu", es),
                        q.unsubscribe(ec.jej.POPOUT_CLOSE, ea),
                        t$._.unsubscribe(ec.jej.CLOSE_GIF_PICKER, e);
                }
            );
        }, [K, ea, es, $, q]),
            (0, m.t)(F);
        let [eo, el] = (0, T.kn)(Z ? [c.M.SOUNDMOJI_BADGE] : [], void 0, !1),
            [ed, e_] = r.useState(!1);
        r.useEffect(() => {
            K === eE.kx.SOUNDBOARD && e_(!0);
        }, [K]),
            r.useEffect(
                () => () => {
                    ed && el(t2.i.TAKE_ACTION);
                },
                [ed, el],
            ),
            r.useEffect(() => {
                (0, V.Ri)("");
            }, []),
            r.useEffect(() => {
                ((!ee && (0, E.hasAnyModalOpen)()) || (ee && !et)) && (0, V.v8)();
            }, [et, ee]),
            r.useEffect(() => {
                null != j.current &&
                    !B.current &&
                    (K === eE.kx.EMOJI
                        ? H?.current?.onPickerOpen != null && (H?.current?.onPickerOpen(), (B.current = !0))
                        : K === eE.kx.STICKER
                          ? H?.current?.onPickerOpen == null || X || (H?.current?.onPickerOpen(), (B.current = !0))
                          : (I.Ay.trackWithMetadata(ec.HAw.EXPRESSION_PICKER_OPENED, {
                                width: j.current.offsetWidth,
                                tab: K,
                                badged: !1,
                            }),
                            (B.current = !0)));
            });
        let eu = r.useCallback((e, t) => L?.(e, "emoji_picker", t), [L]),
            em = r.useCallback((e, t) => L?.(e, "soundboard_picker", t), [L]),
            ef = P.soundmoji?.allowSending === !0 && null != L,
            eg = Q && null != b && P.expressionPicker?.onlyEmojis !== !0;
        r.useEffect(() => {
            K !== eE.kx.KAOMOJI || eg || (0, V.U)(eE.kx.EMOJI);
        }, [K, eg]);
        let ep = "left" === M ? "right" : "left",
            eA = null != U ? U : "left" === M ? t6.sj : t6.Jg,
            eI = en
                ? (0, i.jsx)(t7, {
                      id: tQ.g9,
                      "aria-controls": tQ.ni,
                      "aria-selected": K === eE.kx.GIF,
                      isActive: K === eE.kx.GIF,
                      viewType: eE.kx.GIF,
                      children: eh.intl.string(eh.t["6gUTsS"]),
                  })
                : null,
            eT = ei
                ? (0, i.jsx)(t7, {
                      id: eP.LD,
                      "aria-controls": eP.GX,
                      "aria-selected": K === eE.kx.STICKER,
                      isActive: K === eE.kx.STICKER,
                      autoFocus: !z,
                      viewType: eE.kx.STICKER,
                      children: (0, i.jsx)("div", { className: t6.dG, children: eh.intl.string(eh.t.nf1s3u) }),
                  })
                : null,
            eS = (0, i.jsx)(t7, {
                id: tQ.k1,
                "aria-controls": tQ.Do,
                "aria-selected": K === eE.kx.EMOJI,
                isActive: K === eE.kx.EMOJI,
                viewType: eE.kx.EMOJI,
                children: eh.intl.string(eh.t.Xu3wE3),
            });
        return (0, i.jsx)(p.A, {
            section: ec.JJy.EXPRESSION_PICKER,
            children: (0, i.jsx)(C.nE, {
                className: a()(t6.T8, eA),
                targetRef: t,
                position: k,
                align: M,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, i.jsx)("section", {
                        className: a()(t6.V6, { [t6.D0]: !er }),
                        ref: F,
                        role: "dialog",
                        "aria-label": eh.intl.string(eh.t.Utlwvi),
                        children: t
                            ? (0, i.jsxs)("div", {
                                  className: t6.jP,
                                  style: { width: null == W ? void 0 : W, [M]: 0 },
                                  ref: j,
                                  children: [
                                      (0, i.jsx)("div", { className: t6.Di, onMouseDown: Y, style: { [ep]: -2 } }),
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
                                                                Z &&
                                                                    ef &&
                                                                    (0, i.jsx)(t7, {
                                                                        id: tQ.N6,
                                                                        "aria-controls": tQ.AA,
                                                                        "aria-selected": K === eE.kx.SOUNDBOARD,
                                                                        isActive: K === eE.kx.SOUNDBOARD,
                                                                        viewType: eE.kx.SOUNDBOARD,
                                                                        children: (0, i.jsxs)("div", {
                                                                            className: t6.sd,
                                                                            children: [
                                                                                eh.intl.string(eh.t.EHlAMc),
                                                                                null != eo &&
                                                                                    (0, i.jsx)(f.Lp, {
                                                                                        text: eh.intl.string(
                                                                                            eh.t.y2b7CA,
                                                                                        ),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                eg
                                                                    ? (0, i.jsx)(t7, {
                                                                          id: tQ.W3,
                                                                          "aria-controls": tQ.pE,
                                                                          "aria-selected": K === eE.kx.KAOMOJI,
                                                                          isActive: K === eE.kx.KAOMOJI,
                                                                          viewType: eE.kx.KAOMOJI,
                                                                          "aria-label": eh.intl.string(eh.t["2pR2JI"]),
                                                                          children: "^▽^",
                                                                      })
                                                                    : null,
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              K === eE.kx.STICKER && ei
                                                  ? (0, i.jsx)(tY, {
                                                        isLoading: X,
                                                        channel: w,
                                                        containerWidth: W,
                                                        onSelectSticker: h,
                                                        closePopout: ea,
                                                        ref: (e) => {
                                                            H.current = e;
                                                        },
                                                    })
                                                  : null,
                                              K === eE.kx.GIF && en
                                                  ? (0, i.jsx)(N.A, {
                                                        onSelectGIF: s,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              K === eE.kx.EMOJI
                                                  ? (0, i.jsx)(S.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: w,
                                                        containerWidth: W,
                                                        emojiSize: null != W && W < t4 ? tQ.as.MEDIUM : tQ.as.LARGE,
                                                        pickerIntention:
                                                            P.expressionPicker?.emojiIntention ??
                                                            t3.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == w || null != w.guild_id,
                                                        closePopout: ea,
                                                        onSelectEmoji: o,
                                                        onSelectSoundmoji: eu,
                                                        ref: (e) => {
                                                            H.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            P.soundmoji?.allowSending === !0,
                                                    })
                                                  : null,
                                              K === eE.kx.SOUNDBOARD
                                                  ? (0, i.jsx)("div", {
                                                        className: t6.z,
                                                        children: (0, i.jsx)(y.A, {
                                                            guildId: w.guild_id,
                                                            channel: w,
                                                            containerWidth: W,
                                                            onClose: ea,
                                                            onSelect: em,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, i.jsx)("div", { className: t6.BG, children: e }),
                                                            inExpressionPicker: !0,
                                                            shouldValidateSelectedSound: !0,
                                                        }),
                                                    })
                                                  : null,
                                              eg && K === eE.kx.KAOMOJI ? (0, i.jsx)(t1, { onSelect: b }) : null,
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
