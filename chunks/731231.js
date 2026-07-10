"use strict";
n.d(t, { A: () => t8 });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(735438),
    o = n.n(l),
    d = n(607399),
    c = n(621466),
    u = n(17928),
    _ = n(554146),
    E = n(192308),
    A = n(939249),
    h = n(315710),
    I = n(812993),
    f = n(817281),
    p = n(820284),
    T = n(761929),
    m = n(95561),
    g = n(131607),
    S = n(334295),
    N = n(622142),
    C = n(750506),
    R = n(267102),
    O = n(926972),
    L = n(333216),
    D = n(256449),
    y = n(750385),
    v = n(111956),
    b = n.n(v),
    M = n(942381),
    P = n(319060),
    U = n(289873),
    w = n(212245),
    G = n(793574),
    x = n(688810),
    k = n(850992),
    F = n(151271),
    V = n(464651),
    B = n(87719),
    H = n(234419),
    j = n(885386),
    W = n(287809),
    Y = n(174459),
    K = n(240248),
    $ = n(353640),
    z = n(121894);
let q = Object.freeze({ showPremiumUpsell: !1 }),
    Z = (0, $.v)((e) => q);
function X(e) {
    (0, z.r)(() => Z.setState({ showPremiumUpsell: e }));
}
var Q = n(361670),
    J = n(891090),
    ee = n(194004),
    et = n(788413),
    en = n(60587),
    ei = n(990078),
    er = n(27232),
    ea = n(406810),
    es = n(797285),
    el = n(724511),
    eo = n(802019),
    ed = n(71393),
    ec = n(68935),
    eu = n(148355),
    e_ = n(652215),
    eE = n(698279),
    eA = n(375708),
    eh = n(182518);
let eI = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    ef = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    ep = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eT = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    em = (0, K.xI)(P.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eg = (0, K.xI)(P.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    eS = [eI, eI, eI, eI],
    eN = (ef + ep) * 2 + eI,
    eC = em + 2 * eg,
    eR = (e) => {
        let { stickersListRef: t, channel: n } = e,
            a = r.useRef(null),
            [l, o] = r.useState(!0),
            d = k.bM.useStore((e) => e.activeCategoryIndex),
            c = (0, D.pD)(n),
            {
                firstStandardStickerCategoryIndex: u,
                firstStandardStickerCategoryOffsetTop: _,
                guildCategoryCount: E,
                hasFirstPartyStickerPacks: h,
            } = r.useMemo(() => {
                let e = c.filter((e) => e.type === ee.Z2.GUILD).length,
                    t = e + +(c[0]?.type === ee.Z2.RECENT) + +(c[0]?.type === ee.Z2.FAVORITE),
                    n = t * (ef + ep) - ep + eC;
                return {
                    firstStandardStickerCategoryIndex: t + 1,
                    firstStandardStickerCategoryOffsetTop: n,
                    guildCategoryCount: e,
                    hasFirstPartyStickerPacks: null != c.find((e) => e.type === ee.Z2.PACK),
                };
            }, [c]);
        r.useLayoutEffect(() => {
            o(E >= 7);
        }, [E]);
        let {
                renderCategoryListItem: I,
                rowHeight: f,
                onScroll: p,
            } = (function (e) {
                let {
                        activeIndex: t,
                        stickerPickerCategories: n,
                        categoryListRef: a,
                        firstStandardStickerCategoryOffsetTop: l,
                        setShouldRenderShortcut: o,
                    } = e,
                    d = (0, w.p)(),
                    c = (0, F.RQ)((e) => "" !== e.searchQuery),
                    u = r.useCallback(
                        (e, a, l) => {
                            let o,
                                u = n[0]?.type === ee.Z2.FAVORITE,
                                _ = +!!u,
                                E = n[_]?.type === ee.Z2.RECENT,
                                h = n.length;
                            if (0 === a && u)
                                return (0, i.jsx)(
                                    "div",
                                    {
                                        role: "listitem",
                                        "aria-setsize": h,
                                        "aria-posinset": a,
                                        children: (0, i.jsx)(A.D, {
                                            "aria-label": eA.intl.string(eA.t.y3LQCG),
                                            className: s()(eh._0, eh.dC, { [eh.k1]: !c && 0 === t, [eh.ls]: !E }),
                                            onClick: l,
                                            children: (0, i.jsx)(er.G, {
                                                size: "custom",
                                                color: "currentColor",
                                                className: eh.AB,
                                                height: eT,
                                                width: eT,
                                            }),
                                        }),
                                    },
                                    "favorites",
                                );
                            if (a === _ && E)
                                return (0, i.jsx)(
                                    "div",
                                    {
                                        role: "listitem",
                                        "aria-setsize": h,
                                        "aria-posinset": a,
                                        children: (0, i.jsx)(A.D, {
                                            "aria-label": eA.intl.string(eA.t.RxAmVC),
                                            className: s()(eh._0, eh.dC, eh.ls, { [eh.k1]: !c && t === _ }),
                                            onClick: l,
                                            children: (0, i.jsx)(ea.O, {
                                                size: "custom",
                                                color: "currentColor",
                                                className: eh.AB,
                                                height: eT,
                                                width: eT,
                                            }),
                                        }),
                                    },
                                    "recent",
                                );
                            let I = t === a,
                                f = n[a],
                                p = n[a + 1],
                                T = null != p && f.type === ee.Z2.GUILD && p.type !== ee.Z2.GUILD,
                                m = f.type === ee.Z2.PACK,
                                g = "",
                                S = null;
                            if (f.type === ee.Z2.GUILD || f.type === ee.Z2.EMPTY_GUILD_UPSELL) {
                                let e = ed.A.getGuild(f.id);
                                null != e &&
                                    ((o = e.id), (g = e.name), (S = (0, i.jsx)(el.A, { guild: e, isSelected: I })));
                            } else if (m) {
                                let e = y.A.getStickerPack(f.id);
                                null != e &&
                                    ((g = e.name),
                                    (S = (0, i.jsx)(eu.A, {
                                        disableAnimation: !I || c,
                                        size: ef,
                                        sticker: (0, ec.Id)(e),
                                    })));
                            }
                            return (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(ei.m, {
                                            position: "right",
                                            text: g,
                                            children: (0, i.jsx)("div", {
                                                role: "listitem",
                                                "aria-setsize": h,
                                                "aria-posinset": a,
                                                children: (0, i.jsx)(A.D, {
                                                    "aria-label": g,
                                                    className: s()(eh._0, { [eh.ND]: m, [eh.Ms]: !c && I && m }),
                                                    onClick: () => {
                                                        f.type === ee.Z2.PACK &&
                                                            Y.default.track(
                                                                e_.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED,
                                                                {
                                                                    location: d?.location,
                                                                    tab: eE.kx.STICKER,
                                                                    sticker_pack_id: f.id,
                                                                    guild_id: o,
                                                                },
                                                            ),
                                                            l();
                                                    },
                                                    children: S,
                                                }),
                                            }),
                                        }),
                                        T ? (0, i.jsx)("hr", { className: eh.ny }, "separator") : null,
                                    ],
                                },
                                f.id,
                            );
                        },
                        [t, d, c, n],
                    ),
                    _ = r.useCallback((e, t) => (t ? eN : 0), []);
                return {
                    getScrollOffsetForIndex: _,
                    renderCategoryListItem: u,
                    rowHeight: r.useCallback(
                        (e, t) => {
                            let i = n[t],
                                r = n[t + 1];
                            return ef + (null != r && i.type === ee.Z2.GUILD && r.type !== ee.Z2.GUILD ? eC : ep);
                        },
                        [n],
                    ),
                    onScroll: r.useCallback(
                        (e) => {
                            let t = a.current?.getListDimensions();
                            null == t || o(e + t.height - em < l);
                        },
                        [l, a, o],
                    ),
                };
            })({
                activeIndex: d,
                stickerPickerCategories: c,
                categoryListRef: a,
                firstStandardStickerCategoryOffsetTop: _,
                setShouldRenderShortcut: o,
            }),
            T = r.useCallback(
                (e) => {
                    e(u), a.current?.scrollTo(_);
                },
                [u, _],
            );
        return (0, i.jsx)(eo.A, {
            className: eh.jv,
            categoryListRef: a,
            expressionsListRef: t,
            store: k.bM,
            listPadding: eS,
            onScroll: p,
            renderCategoryListItem: I,
            rowCount: c.length,
            categories: c,
            categoryHeight: f,
            children: (e) =>
                h &&
                l &&
                (0, i.jsx)(A.D, {
                    className: s()(eh.Fe, { [eh.Q6]: !l }),
                    onClick: () => T(e),
                    children: (0, i.jsx)(es.t, { size: "md", color: "currentColor" }),
                }),
        });
    };
var eO = n(534514),
    eL = n(834730),
    eD = n(422936),
    ey = n(811611),
    ev = n(821609),
    eb = n(403581);
function eM(e) {
    let { analyticsSection: t, buttonText: r } = e;
    return (0, i.jsx)(ev.$, {
        variant: "expressive",
        icon: eb.t,
        text: r ?? eA.intl.string(eA.t["8Sh5fg"]),
        onClick: () => {
            var e;
            return (
                (e = { section: t }),
                void (Y.default.track(e_.HAw.OPEN_MODAL, {
                    type: e_.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
                    location: e,
                }),
                (0, E.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("15553"),
                        n.e("20163"),
                        n.e("71202"),
                        n.e("53274"),
                    ]).then(n.bind(n, 397313));
                    return (t) => (0, i.jsx)(e, { ...t });
                }))
            );
        },
    });
}
var eP = n(823894),
    eU = n(202541),
    ew = n(456140);
function eG(e) {
    let { className: t, onClose: n } = e;
    (0, D.XQ)();
    let { analyticsLocations: a } = (0, x.Ay)(G.A.EMPTY_STATE),
        l = (0, u.yK)([y.A], () => eP.vX.map((e) => y.A.getStickerById(e)));
    r.useEffect(() => {
        Y.default.track(e_.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eU.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: e_.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: a,
        });
    }, [a]);
    let o = (0, H.V)(),
        d = (0, eD.O)(),
        c = null != o || null != d;
    return (0, i.jsxs)("div", {
        className: s()(ew.p$, t, { [ew.Hz]: c }),
        children: [
            c
                ? (0, i.jsx)(ey.Ay, {
                      discountOffer: d,
                      trialOffer: o,
                      onClose: n,
                      type: eU.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscription_trial?.sku_id ?? eU.pe.TIER_2,
                      children: eA.intl.string(eA.t.FnNud4),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(eO.D, {
                              className: ew.wx,
                              variant: "heading-xl/semibold",
                              children: eA.intl.string(eA.t.HEm04J),
                          }),
                          (0, i.jsx)(eL.E, {
                              className: ew.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: eA.intl.string(eA.t.FnNud4),
                          }),
                          (0, i.jsx)("div", {
                              className: ew.l1,
                              children: l
                                  .filter((e) => null != e)
                                  .map((e) => (0, i.jsx)(eu.A, { sticker: e, className: ew.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !c && (0, i.jsx)(eM, { analyticsSection: e_.JJy.EXPRESSION_PICKER }),
        ],
    });
}
var ex = n(404778),
    ek = n(537652),
    eF = n(962125),
    eV = n(286509),
    eB = n(631576),
    eH = n(369163),
    ej = n(123292),
    eW = n(631305),
    eY = n(468689),
    eK = n(931991),
    e$ = n(473145),
    ez = n(625633),
    eq = n(9706);
let eZ = function (e) {
    let { className: t, guildId: n, channel: a, shouldTrackUpsellViewed: l, setTrackedUpsellViewed: o } = e,
        { location: d } = (0, w.p)(),
        { analyticsLocations: c } = (0, x.Ay)(),
        _ = (0, u.bG)([ed.A], () => ed.A.getGuild(n)),
        { canManageAllExpressions: E } = (0, eK.nr)(_),
        A = null != _ && 0 === (0, e$.aG)(_.premiumTier) && !_.features.has(e_.GuildFeatures.MORE_STICKERS);
    return (r.useEffect(() => {
        E &&
            A &&
            l &&
            ((0, m.zV)(e_.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: d,
                guild_id: _?.id,
                channel_id: a?.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: c,
            }),
            o(!0));
    }, [A, _, a, d, l, o, c, E]),
    null != _ && E)
        ? A
            ? (0, i.jsxs)("div", {
                  className: s()(eq.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, i.jsx)(eH.v, { size: "md", color: "currentColor", className: eq.Kk }),
                      (0, i.jsx)(eL.E, {
                          color: "interactive-text-default",
                          className: eq.rf,
                          variant: "text-sm/normal",
                          children: eA.intl.format(eA.t.AXWla1, { count: (0, e$.aG)(e_.TVA.TIER_1) }),
                      }),
                      (0, i.jsx)(ej.Q, {
                          variant: "primary",
                          text: eA.intl.string(eA.t["Gb+BJD"]),
                          onClick: () => {
                              (0, eW.A)({
                                  analyticsLocations: c,
                                  analyticsSourceLocation: d,
                                  guild: _,
                                  perks: (0, ez.q5)(),
                              });
                          },
                      }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  className: s()(eq.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, i.jsx)(es.t, {
                          size: "custom",
                          color: "currentColor",
                          className: eq.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, i.jsx)(eL.E, {
                          color: "interactive-text-default",
                          className: eq.rf,
                          variant: "text-sm/normal",
                          children: eA.intl.string(eA.t.S83wgh),
                      }),
                      (0, i.jsx)(ej.Q, {
                          variant: "primary",
                          text: eA.intl.string(eA.t.bwNjug),
                          onClick: function () {
                              (0, F.v8)(), eY.A.open(n, e_.BEX.STICKERS, d);
                          },
                      }),
                  ],
              })
        : null;
};
var eX = n(307301),
    eQ = n(182922),
    eJ = n(881613);
let e0 = (0, K.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    e1 = (0, K.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    e2 = r.memo(function (e) {
        let { stickersGrid: t } = e,
            n = k.bM.useStore((e) => e.inspectedExpressionPosition),
            a = r.useMemo(() => {
                let { rowIndex: e, columnIndex: i } = n,
                    r = t[e]?.[i];
                if (null == r) return null;
                switch (r.type) {
                    case ee.op.CREATE_STICKER:
                        return { guild_id: r.guild_id, name: r.name };
                    case ee.op.STICKER:
                        return r.sticker;
                    default:
                        return null;
                }
            }, [t, n]);
        if (null == a) return null;
        let { graphic: s, title: l } = (function (e) {
                let t = null,
                    n = null;
                if ((!(0, ec.FD)(e) && !(0, ec.Xw)(e)) || (0, ec.Xw)(e)) {
                    let r = ed.A.getGuild(e.guild_id);
                    null != r &&
                        ((t = eA.intl.format(eA.t.cZOkbs, { source: r.name })), (n = (0, i.jsx)(el.A, { guild: r })));
                } else if ((0, ec.FD)(e)) {
                    let r = y.A.getStickerPack(e.pack_id);
                    null != r &&
                        ((t = eA.intl.format(eA.t.cZOkbs, { source: r.name })),
                        (n = (0, i.jsx)(eu.A, { size: e1, sticker: (0, ec.Id)(r), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(a),
            o =
                (0, ec.FD)(a) || (0, ec.Xw)(a)
                    ? (0, i.jsx)(eu.A, { isInteracting: !0, size: e0, sticker: a, disableAnimation: !0 })
                    : (0, i.jsx)("div", {
                          className: eJ.P,
                          children: (0, i.jsx)(eX.j, { size: "md", color: "currentColor", className: eJ.K }),
                      });
        return (0, i.jsx)(eQ.A, {
            graphicPrimary: o,
            graphicSecondary: s,
            titlePrimary: a.name,
            titleSecondary: (0, ec.FD)(a) || (0, ec.Xw)(a) ? l : null,
        });
    });
var e3 = n(140735),
    e6 = n(442433),
    e4 = n(304072),
    e5 = n(194261),
    e7 = n(579583);
let e8 = function (e) {
    let { size: t } = e;
    return (0, i.jsx)("div", {
        className: e7.G,
        style: { width: t, height: t },
        children: (0, i.jsx)(e5.X, { size: "xxs", color: "currentColor", className: e7.I }),
    });
};
var e9 = n(882480);
let te = r.memo(function (e) {
    let {
            isDisplayingIndividualStickers: t = !1,
            preferAnimation: a = !0,
            getStickerItemProps: o,
            getStickerRowProps: d,
            gutterWidth: c,
            inspectedStickerPosition: u,
            isScrolling: _,
            isUsingKeyboardNavigation: h,
            onInspect: I,
            onSelect: f,
            rowIndex: p,
            stickerClassName: T,
            stickerDescriptors: m,
            stickerPadding: g,
            stickerSize: S,
            ownedStickerPacks: N,
            enlargeOnInteraction: C = !1,
            channel: R,
            currentUser: O,
            checkSendability: L = !0,
        } = e,
        { location: D } = (0, w.p)(),
        y = S + 2 * g,
        v = r.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${y}px)`,
                height: y,
                paddingRight: t ? void 0 : y,
            }),
            [t, c, y],
        ),
        b = r.useMemo(() => ({ width: S, height: S, padding: g }), [g, S]),
        [M, P] = (0, e4.A)(null, 300);
    return (0, i.jsx)("div", {
        className: e9.nM,
        style: v,
        ...d?.(p),
        children: m.map((e) => {
            let d = e.visibleRowIndex === u?.rowIndex && e.columnIndex === u?.columnIndex,
                c = e.type === ee.op.STICKER && C && d,
                m = (0, l.throttle)(() => {
                    _?.current === !0 || h?.current === !0 || d || I?.(e);
                }, 250),
                { ref: g, tabIndex: y, onFocus: v, ...U } = o?.(e.columnIndex, p) ?? {};
            switch (e.type) {
                case ee.op.CREATE_STICKER:
                    return (0, i.jsx)(
                        "div",
                        {
                            ...U,
                            children: (0, i.jsxs)(A.D, {
                                "aria-label": e.name,
                                className: s()(e9.wP, T, { [e9.Kj]: d }),
                                innerRef: g,
                                tabIndex: y,
                                onFocus: v ?? m,
                                onMouseMove: m,
                                onClick: () => {
                                    e.type === ee.op.CREATE_STICKER &&
                                        (Y.default.track(e_.HAw.OPEN_MODAL, {
                                            type: e_.JJy.CREATE_STICKER_MODAL,
                                            location: D,
                                        }),
                                        (0, E.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("43363"),
                                                n.e("79877"),
                                                n.e("98923"),
                                                n.e("95339"),
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
                                style: b,
                                children: [
                                    !C && (0, i.jsx)("div", { className: e9.fw }),
                                    (0, i.jsx)("div", {
                                        className: e9.P0,
                                        children: (0, i.jsx)(eX.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: e9.Kk,
                                        }),
                                    }),
                                    (0, i.jsx)(eL.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: eA.intl.string(eA.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case ee.op.STICKER: {
                    let l = t && null != N && (0, ec.FD)(e.sticker) && !N.has(e.sticker.pack_id);
                    return (0, r.createElement)(
                        "div",
                        { ...U, key: e.sticker.id },
                        (0, i.jsxs)(A.D, {
                            className: s()(e9.yI, T, { [e9.PV]: d, [e9.TV]: M === e.sticker.id }),
                            innerRef: g,
                            tabIndex: y,
                            onFocus: v ?? m,
                            onMouseMove: m,
                            onClick: (t) => {
                                if (_?.current === !0 || h?.current === !0) return;
                                let n = t.altKey;
                                n && e.type === ee.op.STICKER && !(0, ec.o1)(e.sticker.id) && P(e.sticker.id),
                                    f?.(e, n);
                            },
                            onContextMenu: function (e) {
                                (0, e6.L3)(e, async () => {
                                    let { default: e } = await Promise.all([n.e("4774"), n.e("46132")]).then(
                                        n.bind(n, 233503),
                                    );
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
                                            className: s()(e9.SI, {
                                                [e9.ot]:
                                                    C && !d && null != u && -1 !== u.rowIndex && -1 !== u.columnIndex,
                                                [e9.Q$]: c,
                                                [e9.No]: L && !(0, Q.G7)(e.sticker, O, R),
                                            }),
                                            disableAnimation: !d && !a,
                                            enlargeOnInteraction: C,
                                            isInteracting: d,
                                            maskAsset: d,
                                            sticker: e.sticker,
                                            size: S,
                                        }),
                                        l ? (0, i.jsx)(e8, { size: 20 }) : null,
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
var tt = n(554866),
    tn = n(911385);
let ti = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tr = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    ta = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    ts = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tl = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    to = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    td = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tc = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tu = (0, K.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    t_ = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tE = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tA = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    th = [ta, tl, to, td],
    tI = [ts, tl, to, td],
    tf = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tp = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tT(e) {
    let { onSuggestionClick: t } = e;
    return (0, i.jsx)("div", {
        className: tt.yB,
        children: tp.map((e) =>
            (0, i.jsx)(
                A.D,
                {
                    className: tt.x_,
                    onClick: () => t(e),
                    children: (0, i.jsx)(eL.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
let tm = r.forwardRef(function (e, t) {
    let {
            collapsedStickersCategories: n,
            gridWidth: a,
            filteredStickers: s,
            getStickerItemProps: l,
            getStickerRowProps: o,
            gutterWidth: d,
            stickerPadding: c,
            isUsingKeyboardNavigation: _,
            onSelectSticker: E,
            rowCount: A,
            rowCountBySection: h,
            stickersCategories: I,
            stickersGrid: f,
            channel: p,
        } = e,
        T = t_ + 2 * c,
        m = r.useRef(!1),
        g = r.useRef(null),
        [S, N] = k.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], M.x),
        { analyticsLocations: C } = (0, x.Ay)(G.A.STICKER_PICKER),
        R = (0, F.RQ)((e) => e.searchQuery),
        O = (0, u.bG)([y.A], () => y.A.getPremiumPacks()),
        {
            renderRow: L,
            renderSection: D,
            renderSectionFooter: v,
            sectionFooterHeight: b,
            renderSectionHeader: P,
            sectionHeaderHeight: U,
        } = ((e) => {
            let {
                    collapsedStickersCategories: t,
                    gridWidth: n,
                    stickerPadding: a,
                    onSelectSticker: s,
                    getStickerItemProps: l,
                    getStickerRowProps: o,
                    gutterWidth: d,
                    inspectedStickerPosition: c,
                    isScrolling: _,
                    isUsingKeyboardNavigation: E,
                    stickersGrid: A,
                    stickersCategories: h,
                    filteredStickers: I,
                    ownedStickerPacks: f,
                    channel: p,
                } = e,
                T = (0, w.p)(),
                m = (0, u.bG)([W.default], () => W.default.getCurrentUser()),
                { handleStickerInspect: g, handleSelect: S } = (function (e) {
                    let { onSelectSticker: t, channel: n, currentUser: i } = e,
                        a = (0, w.p)(),
                        s = (0, F.RQ)((e) => e.searchQuery);
                    return {
                        handleStickerInspect: r.useCallback((e) => {
                            let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: i } = e;
                            k.bM.setActiveCategoryIndex(i),
                                k.bM.setInspectedExpressionPosition(n, t, en.t.MOUSE_EVENT),
                                e.type === ee.op.STICKER && k.bM.setSearchPlaceholder(e.sticker.name);
                        }, []),
                        handleSelect: r.useCallback(
                            (e, r) => {
                                if (e.type !== ee.op.STICKER) return;
                                let { sticker: l } = e;
                                if (null == l) return;
                                let o = {
                                    ...a.location,
                                    object: "" === s ? e_.ZSU.STICKER_PICKER_VIEW_ALL : e_.ZSU.STICKER_SEARCH_VIEW_ALL,
                                };
                                if (null != l && !(0, Q.G7)(l, i, n)) {
                                    let e = (0, ec.Xw)(l);
                                    (0, Q.W$)(l, i, n) === Q.Ux.SENDABLE_WITH_PREMIUM && X(!0),
                                        e && Q.Ux.SENDABLE_WITH_BOOSTED_GUILD;
                                    return;
                                }
                                r
                                    ? (0, ec.o1)(l.id)
                                        ? (0, eB.vr)(l.id)
                                        : ((0, J.Dt)({ sticker: l, location: { ...o, object: e_.ZSU.STICKER } }),
                                          (0, eB.uK)(l.id))
                                    : t(e);
                            },
                            [a.location, s, i, n, t],
                        ),
                    };
                })({ onSelectSticker: s, channel: p, currentUser: m }),
                [N, C] = r.useState(!1),
                R = r.useCallback((e) => {
                    j.tP.updateSetting(Array.from(e));
                }, []),
                O = r.useCallback(
                    (e) => {
                        let t = A[e];
                        return null != t
                            ? (0, i.jsx)(
                                  te,
                                  {
                                      getStickerItemProps: l,
                                      getStickerRowProps: o,
                                      gutterWidth: d,
                                      inspectedStickerPosition: c,
                                      isScrolling: _,
                                      isUsingKeyboardNavigation: E,
                                      onInspect: g,
                                      onSelect: S,
                                      rowIndex: e,
                                      stickerClassName: tt.yI,
                                      stickerDescriptors: t,
                                      stickerSize: n > ti ? t_ : tE,
                                      stickerPadding: a,
                                      preferAnimation: n <= tr,
                                      ownedStickerPacks: f,
                                      isDisplayingIndividualStickers: !0,
                                      channel: p,
                                      currentUser: m,
                                  },
                                  e,
                              )
                            : null;
                    },
                    [A, l, o, d, c, _, E, g, S, n, a, f, p, m],
                ),
                L = r.useCallback((e, t) => (0, i.jsx)("div", { children: t }, e), []),
                D = r.useCallback(
                    function (e) {
                        let { isStickerPack: n = !0 } =
                                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = new Set(t),
                            r = t.has(e);
                        r ? i.delete(e) : i.add(e),
                            Y.default.track(e_.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: T?.location,
                                tab: eE.kx.STICKER,
                                collapsed: !r,
                                sticker_pack_id: n ? e : null,
                            }),
                            R(i);
                    },
                    [T, t, R],
                ),
                v = r.useCallback(
                    (e) => {
                        let n = h[e];
                        if (null != I) {
                            let { sendable: t, sendableWithPremium: n } = I;
                            if (0 === e && t.length > 0) return null;
                            let r = t.length > 0 && n.length > 0;
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    r ? (0, i.jsx)("div", { className: tt.yF, children: (0, i.jsx)(ex.c, {}) }) : null,
                                    (0, i.jsx)(
                                        eV.A,
                                        {
                                            className: tt.jH,
                                            "aria-label": eA.intl.string(eA.t.wbfJFh),
                                            children: eA.intl.string(eA.t["05Z/0l"]),
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
                                        "aria-label": eA.intl.formatToPlainString(eA.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, i.jsx)(er.G, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => D(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case ee.Z2.RECENT:
                                return (0, i.jsx)(
                                    eV.A,
                                    {
                                        className: tt.jH,
                                        "aria-label": eA.intl.formatToPlainString(eA.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, i.jsx)(ea.O, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => D(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case ee.Z2.GUILD:
                            case ee.Z2.EMPTY_GUILD_UPSELL: {
                                let e = ed.A.getGuild(n.id);
                                if (null == e) return null;
                                return (0, i.jsx)(
                                    eV.A,
                                    {
                                        className: tt.jH,
                                        "aria-label": eA.intl.formatToPlainString(eA.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, i.jsx)(el.A, { guild: e, height: 16, width: 16 }),
                                        isCollapsed: t.has(e.id),
                                        onClick: () => D(e.id),
                                        children: e.name,
                                    },
                                    `h${e.id}`,
                                );
                            }
                            case ee.Z2.PACK: {
                                let e = y.A.getStickerPack(n.id);
                                if (null == e) return null;
                                return (0, i.jsx)(
                                    eV.A,
                                    {
                                        className: tt.jH,
                                        "aria-label": eA.intl.formatToPlainString(eA.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, i.jsx)(eu.A, {
                                            disableAnimation: !0,
                                            size: 12,
                                            sticker: (0, ec.Id)(e),
                                        }),
                                        isCollapsed: t.has(e.id),
                                        onClick: () => D(e.id),
                                        children: e.name,
                                    },
                                    `h${e.id}`,
                                );
                            }
                        }
                    },
                    [t, h, D, I],
                ),
                b = r.useCallback(
                    (e) => {
                        if (null != I) {
                            let { sendable: t, sendableWithPremium: n } = I;
                            return 0 === e && t.length > 0 ? 0 : tu + (t.length > 0 && n.length > 0 ? tc : 0);
                        }
                        return tu;
                    },
                    [I],
                );
            return {
                renderRow: O,
                renderSection: L,
                renderSectionHeader: v,
                sectionHeaderHeight: b,
                renderSectionFooter: r.useCallback(
                    (e) => {
                        let n = h[e],
                            r = t.has(n.id);
                        return n.type !== ee.Z2.EMPTY_GUILD_UPSELL || null != I || r
                            ? null
                            : (0, i.jsx)(
                                  eZ,
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
                    [h, t, I, p, N],
                ),
                sectionFooterHeight: r.useCallback(
                    (e) => {
                        let n = h[e],
                            i = t.has(n.id);
                        return n.type !== ee.Z2.EMPTY_GUILD_UPSELL || i ? 0 : tf;
                    },
                    [h, t],
                ),
            };
        })({
            collapsedStickersCategories: n,
            gridWidth: a,
            stickerPadding: c,
            stickersCategories: I,
            stickersGrid: f,
            isScrolling: m,
            isUsingKeyboardNavigation: _,
            onSelectSticker: E,
            getStickerItemProps: l,
            getStickerRowProps: o,
            gutterWidth: d,
            inspectedStickerPosition: N,
            filteredStickers: s,
            ownedStickerPacks: r.useMemo(() => new Set(O.map((e) => e.id)), [O]),
            channel: p,
        }),
        B = (0, V.Fk)({
            activeCategoryIndex: S,
            isScrolling: m,
            listRef: g,
            onActiveCategoryIndexChange: k.bM.setActiveCategoryIndex,
            scrollOffset: 20,
            searchQuery: R,
        });
    return (
        (0, V.FV)({ searchQuery: R, activeCategoryIndex: S, listRef: g }),
        r.useImperativeHandle(
            t,
            () => ({
                scrollTo: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return g.current?.scrollTo(...t);
                },
                getRowDescriptors: () => g.current?.getRowDescriptors() ?? [],
                getSectionDescriptors: () => g.current?.getSectionDescriptors() ?? [],
                scrollToSectionTop: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return g.current?.scrollToSectionTop(...t);
                },
                scrollRowIntoView: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return g.current?.scrollRowIntoView(...t);
                },
                getScrollerNode: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return g.current?.getScrollerNode(...t);
                },
                scrollIntoViewNode: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return g.current?.scrollIntoViewNode(...t);
                },
                getListDimensions: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return g.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                },
            }),
            [],
        ),
        (0, i.jsx)(x.f5, {
            value: C,
            children: (0, i.jsxs)("div", {
                className: tt.iE,
                children: [
                    null != s && 0 === s.sendable.length && 0 === s.sendableWithPremium.length
                        ? (0, i.jsx)(ek.A, {
                              message: eA.intl.string(eA.t["zc+LQd"]),
                              className: tt.__invalid_noSearchResultsContainer,
                              noResultsImageURL: tn,
                              suggestions: (0, i.jsx)(tT, { onSuggestionClick: (e) => (0, F.Ri)(e, !0) }),
                          })
                        : (0, i.jsx)(eF.A, {
                              role: "none presentation",
                              listPadding: null != s ? tI : th,
                              onScroll: B,
                              renderRow: L,
                              renderSection: null == s ? D : void 0,
                              renderSectionHeader: P,
                              renderSectionFooter: v,
                              rowCount: A,
                              rowCountBySection: h,
                              rowHeight: a > ti ? T + tA : tE + 2 * c + tA,
                              sectionHeaderHeight: U,
                              sectionFooterHeight: b,
                              stickyHeaders: !0,
                              ref: g,
                          }),
                    (0, i.jsx)(e2, { stickersGrid: f }),
                ],
            }),
        })
    );
});
var tg = n(945810);
let tS = (0, tg.mj)({
    name: "2026-02-sticker-padding",
    kind: "user",
    defaultConfig: { padding: 2 },
    variations: { 1: { padding: 1 } },
});
var tN = n(602034),
    tC = n(892547),
    tR = n(351117);
let tO = r.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: a, channel: s } = e,
        l = (0, D.ZO)(s),
        o = r.useRef(null),
        { searchQuery: d, isSearchSuggestion: c } = (0, F.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            M.x,
        ),
        u = k.bM.useStore((e) => e.searchPlaceholder),
        [_, E] = k.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], M.x),
        A = r.useCallback(
            (e) => {
                k.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    k.bM.setInspectedExpressionPosition(0, 0),
                    k.bM.setSearchPlaceholder(null),
                    (0, F.Ri)(e),
                    a.current?.scrollTo(0);
            },
            [a],
        ),
        h = r.useCallback(() => {
            A("");
        }, [A]);
    return (
        r.useImperativeHandle(t, () => ({ focus: () => o.current?.focus() })),
        r.useLayoutEffect(() => {
            c && o.current?.focus();
        }, [c]),
        (0, i.jsx)("div", {
            className: tR.i,
            children: (0, i.jsx)(tC.I, {
                autoFocus: l,
                disabled: !l,
                query: d,
                ref: o,
                placeholder: u ?? (l ? eA.intl.string(eA.t.dt5h1C) : eA.intl.string(eA.t["Pck/4U"])),
                onClear: h,
                onKeyDown: n,
                onChange: A,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": eP.lq,
                    "aria-expanded": !0,
                    ...(E ? { "aria-activedescendant": (0, tN.Aq)(eP.lq, _.columnIndex, _.rowIndex) } : void 0),
                },
            }),
        })
    );
});
n(321073);
var tL = n(768038),
    tD = n(789645),
    ty = n(964486),
    tv = n(428262),
    tb = n(922421),
    tM = n(939383);
function tP() {
    return X(!1);
}
function tU(e) {
    let { onLearnMore: t } = e,
        { analyticsLocations: n } = (0, x.Ay)(G.A.PREMIUM_UPSELL);
    (0, r.useEffect)(() => {
        Y.default.track(e_.HAw.PREMIUM_UPSELL_VIEWED, {
            location_section: e_.JJy.STICKER_PICKER_UPSELL,
            type: eU.e.STICKER_PICKER_UPSELL,
            location_stack: n,
        });
    }, [n]);
    let a = (0, r.useRef)(null);
    (0, ty.Ay)(() => {
        a.current?.focus();
    });
    let l = (0, H.V)(),
        o = (0, eD.O)(),
        d = l?.subscription_trial?.sku_id === eU.pe.TIER_0,
        c = null != l || null != o;
    return (0, i.jsxs)("div", {
        ref: a,
        tabIndex: -1,
        "aria-label": eA.intl.string(eA.t.jJG1pl),
        className: s()(tb.VL, { [tb.Hz]: c }),
        children: [
            c
                ? (0, i.jsx)(ey.Ay, {
                      trialOffer: l,
                      discountOffer: o,
                      onClose: tP,
                      type: eU.e.STICKER_PICKER_UPSELL,
                      subscriptionTier: l?.subscription_trial?.sku_id ?? eU.pe.TIER_2,
                      children: d
                          ? eA.intl.format(eA.t.MAGagw, {
                                planName: (0, tv.RH)(eU.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : eA.intl.format(eA.t.jt7JX6, { onClick: t }),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("img", { className: tb.Tn, src: tM, alt: eA.intl.string(eA.t.do7AoM) }),
                          (0, i.jsx)(eL.E, {
                              className: tb.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: eA.intl.string(eA.t.jJG1pl),
                          }),
                          (0, i.jsx)(eL.E, {
                              className: tb.GR,
                              variant: "text-md/normal",
                              children: eA.intl.format(eA.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, i.jsx)(eM, { analyticsSection: e_.JJy.EXPRESSION_PICKER }),
            (0, i.jsx)(A.D, {
                className: tb.kz,
                onClick: tP,
                "aria-label": eA.intl.string(eA.t.cpT0Cq),
                children: (0, i.jsx)(tD.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var tw = n(2426);
let tG = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tx = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tk = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tF = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tV = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    tB = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tH = (0, K.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tj = b()(J.Qz, 200),
    tW = b()(J.HA, 200),
    tY = r.forwardRef(function (e, t) {
        let { containerWidth: a, channel: s, onSelectSticker: l, closePopout: o } = e,
            d = tS.useConfig({ location: "StickerPicker" }).padding,
            { location: c } = (0, w.p)(),
            { analyticsLocations: _ } = (0, x.Ay)(G.A.STICKER_PICKER),
            A = (0, H.V)()?.subscription_trial != null,
            h = r.useRef(null),
            I = r.useRef(null),
            f = r.useRef(null),
            p = Z((e) => e.showPremiumUpsell),
            [T, m] = (0, F.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], M.x),
            g = r.useRef("");
        r.useImperativeHandle(t, () => ({ onPickerOpen: eh }));
        let S = (0, D.pD)(s),
            N = 0 === S.filter((e) => e.type !== ee.Z2.EMPTY_GUILD_UPSELL).length,
            C = (0, V.oV)({
                gridWrapperRef: h,
                containerWidth: a,
                showingEmptyState: N,
                listPaddingLeft: tx,
                listScrollbarWidth: 8,
            }),
            R = j.tP.useSetting(),
            O = r.useMemo(() => new Set(R), [R]),
            L = (0, u.bG)([W.default], () => W.default.getCurrentUser()),
            v = r.useMemo(
                () =>
                    (function (e, t, n) {
                        if ("" === e) return null;
                        let i = [],
                            r = [];
                        return (
                            tL.Ay.queryStickers([e], !0)
                                .map((e) => {
                                    let { sticker: t } = e;
                                    return t;
                                })
                                .forEach((e) => {
                                    let a = (0, Q.W$)(e, t, n);
                                    a === Q.Ux.SENDABLE ? i.push(e) : a === Q.Ux.SENDABLE_WITH_PREMIUM && r.push(e);
                                }),
                            { sendable: i, sendableWithPremium: r }
                        );
                    })(T, L, s),
                [T, L, s],
            ),
            b = (0, D.Gc)(),
            P = (0, D.UT)(),
            U = (0, u.cf)([y.A], () => y.A.getAllGuildStickers()),
            { sendable: K = [], sendableWithPremium: $ = [] } = v ?? {},
            z = K.length + $.length,
            q = r.useCallback(
                (e) => {
                    "" === T ? (0, J.ry)(e) : (0, J.nQ)(e, T, z), l(e.sticker, ee.D6.STICKER_PICKER);
                },
                [l, T, z],
            ),
            ei = null != C && C > tG,
            {
                rowCount: er,
                rowCountBySection: ea,
                stickersGrid: es,
                gutterWidth: el,
                columnCounts: eo,
            } = (0, D._c)({
                filteredStickers: v,
                stickersCategories: S,
                collapsedStickersCategories: O,
                listWidth: C,
                listPaddingRight: tk,
                stickerNodeMargin: ei ? tF : tV,
                stickerNodeWidth: ei ? tB + 2 * d : tH + 2 * d,
            }),
            {
                getItemProps: ed,
                getRowProps: ec,
                gridContainerProps: eu,
                handleGridContainerKeyDown: eE,
                isUsingKeyboardNavigation: eA,
            } = (function (e) {
                let {
                        columnCounts: t,
                        stickersGrid: n,
                        stickersListRef: i,
                        store: a,
                        gridNavigatorId: s,
                        setInspectedStickerPosition: l,
                        onGridItemSelect: o,
                    } = e,
                    d = (0, w.p)(),
                    c = r.useCallback(
                        (e) => {
                            o(e, d);
                        },
                        [o, d],
                    ),
                    u = r.useCallback(
                        (e, t) => {
                            l(e, t, en.t.GRID_NAVIGATOR_EVENT);
                        },
                        [l],
                    ),
                    {
                        gridDispatch: _,
                        getItemProps: E,
                        getRowProps: A,
                        gridContainerProps: h,
                        handleGridContainerKeyDown: I,
                        isUsingKeyboardNavigation: f,
                    } = (0, V.Ff)({
                        columnCounts: t,
                        gridNavigatorId: s,
                        itemGrid: n,
                        itemList: i,
                        onGridNavigatorItemSelect: c,
                        onGridNavigatorPositionChange: u,
                    });
                return (
                    r.useEffect(
                        () =>
                            a.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: i } = e;
                                    i !== en.t.GRID_NAVIGATOR_EVENT &&
                                        _({ type: et.n.SET_FOCUSED_POSITION, x: t, y: n });
                                },
                            ),
                        [_, a],
                    ),
                    {
                        getItemProps: E,
                        getRowProps: A,
                        gridContainerProps: h,
                        handleGridContainerKeyDown: I,
                        isUsingKeyboardNavigation: f,
                    }
                );
            })({
                columnCounts: eo,
                stickersListRef: I,
                stickersGrid: es,
                onGridItemSelect: r.useCallback(
                    (e, t) => {
                        let { location: r } = t;
                        switch (e.type) {
                            case ee.op.CREATE_STICKER:
                                Y.default.track(e_.HAw.OPEN_MODAL, { type: e_.JJy.CREATE_STICKER_MODAL, location: c }),
                                    (0, E.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("43363"),
                                            n.e("79877"),
                                            n.e("98923"),
                                            n.e("95339"),
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
                                let t = (0, Q.W$)(e.sticker, L, s);
                                t === Q.Ux.SENDABLE ? q(e) : t === Q.Ux.SENDABLE_WITH_PREMIUM && X(!0);
                            }
                        }
                    },
                    [c, L, s, q],
                ),
                store: k.bM,
                setInspectedStickerPosition: k.bM.setInspectedExpressionPosition,
                gridNavigatorId: eP.lq,
            });
        function eh() {
            let e = s.getGuildId(),
                t = [];
            null !== e && (t = y.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            null != U &&
                [...U.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, J.p4)({
                    containerWidth: a,
                    favoriteStickers: b,
                    frequentlyUsedStickers: P,
                    guildStickers: t,
                    stickersTotal: n,
                });
        }
        r.useEffect(() => k.bM.resetStoreState, []),
            r.useEffect(() => {
                "" === g.current && "" !== T && (0, J.Fg)(), (g.current = T);
            }, [T]),
            r.useEffect(() => {
                0 === z ? tj(T) : tW(T, z, m);
            }, [T, z, m]),
            r.useLayoutEffect(() => {
                f.current?.focus();
            }, []);
        let eI = r.useCallback(() => {
            o(),
                Y.default.track(e_.HAw.PREMIUM_PROMOTION_OPENED, { location_section: e_.JJy.STICKER_PICKER_UPSELL }),
                (0, B.e)();
        }, [o]);
        return (0, i.jsxs)(x.f5, {
            value: _,
            children: [
                !(A && N) &&
                    (0, i.jsx)("div", {
                        className: tw.wx,
                        children: (0, i.jsx)(tO, { ref: f, onKeyDown: eE, stickersListRef: I, channel: s }),
                    }),
                N
                    ? (0, i.jsx)(eG, { className: tw.p$, onClose: o })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  ref: h,
                                  className: tw.AD,
                                  id: eP.lq,
                                  ...eu,
                                  children:
                                      null != C
                                          ? (0, i.jsx)(tm, {
                                                ref: I,
                                                collapsedStickersCategories: O,
                                                filteredStickers: v,
                                                getStickerItemProps: ed,
                                                getStickerRowProps: ec,
                                                gridWidth: C,
                                                gutterWidth: el,
                                                stickerPadding: d,
                                                isUsingKeyboardNavigation: eA,
                                                onSelectSticker: q,
                                                rowCount: er,
                                                rowCountBySection: ea,
                                                stickersCategories: S,
                                                stickersGrid: es,
                                                channel: s,
                                            })
                                          : null,
                              }),
                              (0, i.jsx)(eR, { stickersListRef: I, channel: s }),
                          ],
                      }),
                p && (0, i.jsx)(tU, { onLearnMore: eI }),
            ],
        });
    }),
    tK = r.forwardRef(function (e, t) {
        return (
            (0, D.XQ)(),
            (0, i.jsx)("div", {
                className: tw.iE,
                id: eP.GX,
                "aria-labelledby": eP.LD,
                role: "tabpanel",
                children: e.isLoading ? (0, i.jsx)(U.y, { className: tw.Mz }) : (0, i.jsx)(tY, { ...e, ref: t }),
            })
        );
    });
var t$ = n(742023),
    tz = n(712687),
    tq = n(625494);
let tZ = (0, tg.mj)({
    name: "2026-03-kaomoji-picker",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var tX = n(364522);
let tQ = [
    {
        category: "wave",
        categoryMessageKey: eA.t.GrrYHn,
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
        categoryMessageKey: eA.t.Tj0FXM,
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
        categoryMessageKey: eA.t.gQsrOG,
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
        categoryMessageKey: eA.t["/jZYwz"],
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
        categoryMessageKey: eA.t["4nnQWB"],
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
        categoryMessageKey: eA.t.X4O8dY,
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
        categoryMessageKey: eA.t.ZUaZLp,
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
        categoryMessageKey: eA.t["/9vZ+t"],
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
        categoryMessageKey: eA.t.GUrGRo,
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
        categoryMessageKey: eA.t.SwOaV2,
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
        categoryMessageKey: eA.t.UisscN,
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
        categoryMessageKey: eA.t["q/yMTa"],
        keywords: ["flip", "unflip", "tableflip"],
        kaomojis: [
            "(\u256F\xb0\u25A1\xb0)\u256F\uFE35 \u253B\u2501\u253B",
            "\u252C\u2500\u252C\u30CE( \xba _ \xba\u30CE)",
        ],
        hidden: !0,
    },
];
var tJ = n(732139),
    t0 = n(733196);
function t1(e) {
    let { onSelect: t } = e,
        [n, a] = r.useState(""),
        s = r.useRef(null),
        l = r.useRef(null);
    r.useEffect(() => {
        let e = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                s.current?.focus({ preventScroll: !0 }), null != l.current && (l.current.scrollTop = 0);
            });
        });
        return () => cancelAnimationFrame(e);
    }, []);
    let o = r.useMemo(() => {
            let e = n.trim();
            return tQ
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
        d = r.useCallback(
            (e, n, i) => {
                m.Ay.trackWithMetadata(e_.HAw.EXPRESSION_PICKER_KAOMOJI_SELECTED, {
                    kaomoji: e,
                    category: n,
                    keyword: i,
                }),
                    t(e);
            },
            [t],
        ),
        c = r.useCallback((e) => {
            a(e);
        }, []),
        u = r.useCallback(() => {
            a("");
        }, []);
    return (0, i.jsxs)("div", {
        className: t0.Zp,
        role: "region",
        "aria-label": eA.intl.string(eA.t["2pR2JI"]),
        children: [
            (0, i.jsx)("div", {
                className: t0.wx,
                children: (0, i.jsx)(tC.I, {
                    ref: s,
                    query: n,
                    onChange: c,
                    onClear: u,
                    placeholder: eA.intl.string(eA.t["5h0QOP"]),
                    "aria-label": eA.intl.string(eA.t["5h0QOP"]),
                }),
            }),
            (0, i.jsx)(tX.Ip, {
                ref: l,
                fade: !0,
                className: t0.IA,
                children:
                    o.length > 0
                        ? (0, i.jsx)("div", {
                              className: t0.tt,
                              children: o.map((e) =>
                                  (0, i.jsxs)(
                                      "div",
                                      {
                                          className: t0.hl,
                                          role: "group",
                                          "aria-labelledby": `kaomoji-category-${e.category}`,
                                          children: [
                                              (0, i.jsx)(eL.E, {
                                                  id: `kaomoji-category-${e.category}`,
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  className: t0.Jm,
                                                  children: eA.intl.string(e.categoryMessageKey),
                                              }),
                                              (0, i.jsx)("div", {
                                                  className: t0.Hu,
                                                  role: "list",
                                                  children: e.kaomojis.map((t, r) =>
                                                      (0, i.jsx)(
                                                          "div",
                                                          {
                                                              className: t0.Yx,
                                                              role: "listitem",
                                                              children: (0, i.jsx)(ev.$, {
                                                                  variant: "secondary",
                                                                  size: "sm",
                                                                  fullWidth: !0,
                                                                  onClick: () => d(t, e.category, n.trim()),
                                                                  text: t,
                                                                  "aria-label": eA.intl.formatToPlainString(
                                                                      eA.t["hi+F96"],
                                                                      {
                                                                          category: eA.intl.string(
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
                              children: (0, i.jsx)(eL.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  className: t0.p$,
                                  children: eA.intl.string(eA.t.V6nAfF),
                              }),
                          }),
            }),
        ],
    });
}
function t2(e) {
    return (0, i.jsx)("div", {
        className: t0.iE,
        id: tJ.pE,
        role: "tabpanel",
        "aria-labelledby": tJ.W3,
        children: (0, i.jsx)(t1, { ...e }),
    });
}
var t3 = n(49999),
    t6 = n(307731),
    t4 = n(877136);
let t5 = 498 + tJ.as.MEDIUM,
    t7 = r.memo(function (e) {
        let { isActive: t, className: n, viewType: r, autoFocus: a = !1, "aria-controls": l, ...o } = e;
        return (0, i.jsx)(A.D, {
            role: "tab",
            autoFocus: a,
            "aria-controls": t ? l : void 0,
            ...o,
            onClick: () => {
                m.Ay.trackWithMetadata(e_.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: r, badged: !1 }), (0, F.U)(r);
            },
            "aria-current": t ? "page" : void 0,
            className: s()(n, t4.oi, t4.pc, { [t4.Mv]: t }),
        });
    }),
    t8 = r.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: a,
                onSelectEmoji: l,
                onSelectSticker: A,
                onSelectSound: v,
                onSelectKaomoji: b,
                channel: M,
                type: P,
                position: U,
                align: w,
                positionLayerClassName: G,
                closeOnModalOuterClick: x = !1,
                parentModalKey: k,
            } = e,
            V = r.useRef(null),
            B = r.useRef(!1),
            H = r.useRef(null),
            j = r.useRef(null),
            { drawerWidth: W, handleDrawerResizeHandleMouseDown: Y } = (function (e) {
                let { positionContainerRef: t, drawerRef: n, orientation: i } = e,
                    a = (0, u.bG)([t$.Ay], () => t$.Ay.expressionPickerWidth),
                    [s, l] = r.useState(window.innerWidth),
                    [d, c] = r.useState(a ?? eE.wp.MIN),
                    _ = r.useMemo(() => {
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
                            let t = e >= s ? eE.wp.MAX : e <= 498 ? eE.wp.MIN : e;
                            null == t && null != n.current && (n.current.style.width = ""),
                                f.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                c(t);
                        },
                        [n, s],
                    ),
                    A = (0, T.A)({
                        initialElementDimension: _,
                        maxDimension: s,
                        minDimension: 498,
                        resizableDomNodeRef: n,
                        onElementResize: E,
                        orientation: i,
                    });
                return (
                    r.useEffect(() => {
                        let e = o().debounce(() => {
                            null != t.current && l(t.current.offsetWidth);
                        }, 500);
                        return (
                            window.addEventListener("resize", e),
                            () => {
                                window.removeEventListener("resize", e);
                            }
                        );
                    }, [t]),
                    r.useLayoutEffect(() => {
                        null != t.current && l(t.current.offsetWidth);
                    }, [t]),
                    {
                        drawerWidth: _,
                        handleDrawerResizeHandleMouseDown: r.useCallback(
                            (e) => {
                                e.stopPropagation(), null != t.current && l(t.current.offsetWidth), A(e);
                            },
                            [t, A],
                        ),
                    }
                );
            })({
                positionContainerRef: V,
                drawerRef: j,
                orientation: "left" === w ? T.R.HORIZONTAL_RIGHT : T.R.HORIZONTAL_LEFT,
            }),
            K = (0, F.RQ)((e) => e.activeView),
            $ = (0, D.ZO)(M),
            { renderWindow: z, windowDispatch: q } = r.useContext(R.Ay),
            Z = (0, u.bG)([y.A], () => !y.A.hasLoadedStickerPacks),
            X = (0, O.tj)({ location: "expression_picker" }),
            Q = tZ.useConfig({ location: "expression_picker" }).enabled,
            J = (0, u.bG)([tz.A], () => tz.A.isOpen()),
            ee = null != k,
            et = (0, E.useIsModalAtTop)(k ?? ""),
            en = P.gifs?.allowSending && !d.Fr && null != a,
            ei = P.stickers?.allowSending && null != A,
            er = !P.expressionPicker?.onlyEmojis && (en || ei),
            ea = r.useCallback(
                (e) => {
                    if ((!ee && (0, E.hasAnyModalOpen)()) || (ee && !(et && x)) || J || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + eE.VQ)) return;
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
                    (null == n || "BODY" === n.tagName) && tq._.dispatchToLastSubscribed(e_.jej.TEXTAREA_FOCUS);
                },
                [x, et, ee, J],
            ),
            es = r.useCallback(() => {
                (0, F.v8)();
            }, []);
        r.useLayoutEffect(() => {
            function e() {
                K === eE.kx.GIF && (0, F.v8)();
            }
            return (
                z.addEventListener("mousedown", ea),
                z.addEventListener("contextmenu", ea),
                q.subscribe(e_.jej.POPOUT_CLOSE, es),
                tq._.subscribe(e_.jej.CLOSE_GIF_PICKER, e),
                () => {
                    z.removeEventListener("mousedown", ea),
                        z.removeEventListener("contextmenu", ea),
                        q.unsubscribe(e_.jej.POPOUT_CLOSE, es),
                        tq._.unsubscribe(e_.jej.CLOSE_GIF_PICKER, e);
                }
            );
        }, [K, es, ea, z, q]),
            (0, h.tj)(V);
        let [el, eo] = (0, g.kn)(X ? [_.M.SOUNDMOJI_BADGE] : [], void 0, !1),
            [ed, ec] = r.useState(!1);
        r.useEffect(() => {
            K === eE.kx.SOUNDBOARD && ec(!0);
        }, [K]),
            r.useEffect(
                () => () => {
                    ed && eo(t3.i.TAKE_ACTION);
                },
                [ed, eo],
            ),
            r.useEffect(() => {
                (0, F.Ri)("");
            }, []),
            r.useEffect(() => {
                ((!ee && (0, E.hasAnyModalOpen)()) || (ee && !et)) && (0, F.v8)();
            }, [et, ee]),
            r.useEffect(() => {
                null != j.current &&
                    !B.current &&
                    (K === eE.kx.EMOJI
                        ? H?.current?.onPickerOpen != null && (H?.current?.onPickerOpen(), (B.current = !0))
                        : K === eE.kx.STICKER
                          ? H?.current?.onPickerOpen == null || Z || (H?.current?.onPickerOpen(), (B.current = !0))
                          : (m.Ay.trackWithMetadata(e_.HAw.EXPRESSION_PICKER_OPENED, {
                                width: j.current.offsetWidth,
                                tab: K,
                                badged: !1,
                            }),
                            (B.current = !0)));
            });
        let eu = r.useCallback((e, t) => v?.(e, "emoji_picker", t), [v]),
            eh = r.useCallback((e, t) => v?.(e, "soundboard_picker", t), [v]),
            eI = P.soundmoji?.allowSending === !0 && null != v,
            ef = Q && null != b && P.expressionPicker?.onlyEmojis !== !0;
        r.useEffect(() => {
            K !== eE.kx.KAOMOJI || ef || (0, F.U)(eE.kx.EMOJI);
        }, [K, ef]);
        let ep = "left" === w ? "right" : "left",
            eT = null != G ? G : "left" === w ? t4.sj : t4.Jg,
            em = en
                ? (0, i.jsx)(t7, {
                      id: tJ.g9,
                      "aria-controls": tJ.ni,
                      "aria-selected": K === eE.kx.GIF,
                      isActive: K === eE.kx.GIF,
                      viewType: eE.kx.GIF,
                      children: eA.intl.string(eA.t["6gUTsS"]),
                  })
                : null,
            eg = ei
                ? (0, i.jsx)(t7, {
                      id: eP.LD,
                      "aria-controls": eP.GX,
                      "aria-selected": K === eE.kx.STICKER,
                      isActive: K === eE.kx.STICKER,
                      autoFocus: !$,
                      viewType: eE.kx.STICKER,
                      children: (0, i.jsx)("div", { className: t4.dG, children: eA.intl.string(eA.t.nf1s3u) }),
                  })
                : null,
            eS = (0, i.jsx)(t7, {
                id: tJ.k1,
                "aria-controls": tJ.Do,
                "aria-selected": K === eE.kx.EMOJI,
                isActive: K === eE.kx.EMOJI,
                viewType: eE.kx.EMOJI,
                children: eA.intl.string(eA.t.Xu3wE3),
            });
        return (0, i.jsx)(p.A, {
            section: e_.JJy.EXPRESSION_PICKER,
            children: (0, i.jsx)(C.nE, {
                className: s()(t4.T8, eT),
                targetRef: t,
                position: U,
                align: w,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, i.jsx)("section", {
                        className: s()(t4.V6, { [t4.D0]: !er }),
                        ref: V,
                        role: "dialog",
                        "aria-label": eA.intl.string(eA.t.Utlwvi),
                        children: t
                            ? (0, i.jsxs)("div", {
                                  className: t4.jP,
                                  style: { width: null == W ? void 0 : W, [w]: 0 },
                                  ref: j,
                                  children: [
                                      (0, i.jsx)("div", { className: t4.Di, onMouseDown: Y, style: { [ep]: -2 } }),
                                      (0, i.jsxs)("div", {
                                          className: t4.FG,
                                          children: [
                                              er
                                                  ? (0, i.jsx)("nav", {
                                                        className: t4.C$,
                                                        children: (0, i.jsxs)("div", {
                                                            className: t4.CT,
                                                            role: "tablist",
                                                            "aria-label": eA.intl.string(eA.t["2j4Vgd"]),
                                                            children: [
                                                                em,
                                                                eg,
                                                                eS,
                                                                X &&
                                                                    eI &&
                                                                    (0, i.jsx)(t7, {
                                                                        id: tJ.N6,
                                                                        "aria-controls": tJ.AA,
                                                                        "aria-selected": K === eE.kx.SOUNDBOARD,
                                                                        isActive: K === eE.kx.SOUNDBOARD,
                                                                        viewType: eE.kx.SOUNDBOARD,
                                                                        children: (0, i.jsxs)("div", {
                                                                            className: t4.sd,
                                                                            children: [
                                                                                eA.intl.string(eA.t.EHlAMc),
                                                                                null != el &&
                                                                                    (0, i.jsx)(I.Lp, {
                                                                                        text: eA.intl.string(
                                                                                            eA.t.y2b7CA,
                                                                                        ),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                ef
                                                                    ? (0, i.jsx)(t7, {
                                                                          id: tJ.W3,
                                                                          "aria-controls": tJ.pE,
                                                                          "aria-selected": K === eE.kx.KAOMOJI,
                                                                          isActive: K === eE.kx.KAOMOJI,
                                                                          viewType: eE.kx.KAOMOJI,
                                                                          "aria-label": eA.intl.string(eA.t["2pR2JI"]),
                                                                          children: "^\u25BD^",
                                                                      })
                                                                    : null,
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              K === eE.kx.STICKER && ei
                                                  ? (0, i.jsx)(tK, {
                                                        isLoading: Z,
                                                        channel: M,
                                                        containerWidth: W,
                                                        onSelectSticker: A,
                                                        closePopout: es,
                                                        ref: (e) => {
                                                            H.current = e;
                                                        },
                                                    })
                                                  : null,
                                              K === eE.kx.GIF && en
                                                  ? (0, i.jsx)(N.A, {
                                                        onSelectGIF: a,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              K === eE.kx.EMOJI || P.expressionPicker?.onlyEmojis === !0
                                                  ? (0, i.jsx)(S.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: M,
                                                        containerWidth: W,
                                                        emojiSize: null != W && W < t5 ? tJ.as.MEDIUM : tJ.as.LARGE,
                                                        pickerIntention:
                                                            P.expressionPicker?.emojiIntention ??
                                                            t6.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == M || null != M.guild_id,
                                                        closePopout: es,
                                                        onSelectEmoji: l,
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
                                                        className: t4.z,
                                                        children: (0, i.jsx)(L.A, {
                                                            guildId: M.guild_id,
                                                            channel: M,
                                                            containerWidth: W,
                                                            onClose: es,
                                                            onSelect: eh,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, i.jsx)("div", { className: t4.BG, children: e }),
                                                            inExpressionPicker: !0,
                                                            shouldValidateSelectedSound: !0,
                                                        }),
                                                    })
                                                  : null,
                                              ef && K === eE.kx.KAOMOJI ? (0, i.jsx)(t2, { onSelect: b }) : null,
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
