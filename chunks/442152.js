n.d(t, { A: () => t6 });
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
    S = n(813703),
    v = n(750506),
    N = n(267102),
    _ = n(926972),
    j = n(827059),
    b = n(256449),
    T = n(750385),
    R = n(649852),
    O = n.n(R),
    M = n(462180),
    L = n(319060),
    k = n(289873),
    w = n(212245),
    P = n(793574),
    D = n(688810),
    U = n(850992),
    V = n(151271),
    G = n(887695),
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
    ea = n(713517),
    eo = n(724511),
    eu = n(88218),
    ec = n(941971),
    ed = n(71393),
    eh = n(68935),
    em = n(148355),
    ef = n(652215),
    ep = n(698279),
    eg = n(375708),
    ex = n(161975);
let eA = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    eC = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    eE = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eI = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    ey = (0, z.xI)(L.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eS = (0, z.xI)(L.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ev = [eA, eA, eA, eA],
    eN = (eC + eE) * 2 + eA,
    e_ = ey + 2 * eS;
function ej(e) {
    let { ariaLabel: t, children: n, className: s, isSelected: r, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, ea.A)(o);
    return (0, l.jsxs)(f.D, {
        innerRef: o,
        "aria-label": t,
        className: s,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: ex.a$,
                children: (0, l.jsx)(ec.A, { hovered: u, selected: r, size: "small" }),
            }),
            n,
        ],
    });
}
let eb = (e) => {
    let { stickersListRef: t, channel: n } = e,
        s = i.useRef(null),
        [a, o] = i.useState(!0),
        u = U.bM.useStore((e) => e.activeCategoryIndex),
        c = (0, b.pD)(n),
        {
            firstStandardStickerCategoryIndex: d,
            firstStandardStickerCategoryOffsetTop: h,
            guildCategoryCount: m,
            hasFirstPartyStickerPacks: p,
        } = i.useMemo(() => {
            let e = c.filter((e) => e.type === ee.Z2.GUILD).length,
                t = e + +(c[0]?.type === ee.Z2.RECENT) + +(c[0]?.type === ee.Z2.FAVORITE),
                n = t * (eC + eE) - eE + e_;
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
                c = (0, V.RQ)((e) => "" !== e.searchQuery),
                d = i.useCallback(
                    (e, s, a) => {
                        let o,
                            d = n[0]?.type === ee.Z2.FAVORITE,
                            h = +!!d,
                            m = n[h]?.type === ee.Z2.RECENT,
                            f = n.length;
                        if (0 === s && d) {
                            let e = !c && 0 === t;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": f,
                                    "aria-posinset": s,
                                    children: (0, l.jsx)(ej, {
                                        ariaLabel: eg.intl.string(eg.t.y3LQCG),
                                        className: r()(ex._0, ex.dC, { [ex.k1]: e, [ex.ls]: !m }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(el.StarIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: ex.AB,
                                            height: eI,
                                            width: eI,
                                        }),
                                    }),
                                },
                                "favorites",
                            );
                        }
                        if (s === h && m) {
                            let e = !c && t === h;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": f,
                                    "aria-posinset": s,
                                    children: (0, l.jsx)(ej, {
                                        ariaLabel: eg.intl.string(eg.t.RxAmVC),
                                        className: r()(ex._0, ex.dC, ex.ls, { [ex.k1]: e }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(ei.ClockIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: ex.AB,
                                            height: eI,
                                            width: eI,
                                        }),
                                    }),
                                },
                                "recent",
                            );
                        }
                        let p = t === s,
                            g = !c && p,
                            x = n[s],
                            A = n[s + 1],
                            C = null != A && x.type === ee.Z2.GUILD && A.type !== ee.Z2.GUILD,
                            E = x.type === ee.Z2.PACK,
                            I = "",
                            y = null;
                        if (x.type === ee.Z2.GUILD || x.type === ee.Z2.EMPTY_GUILD_UPSELL) {
                            let e = ed.A.getGuild(x.id);
                            null != e &&
                                ((o = e.id), (I = e.name), (y = (0, l.jsx)(eo.A, { guild: e, isSelected: p })));
                        } else if (E) {
                            let e = T.A.getStickerPack(x.id);
                            null != e &&
                                ((I = e.name),
                                (y = (0, l.jsx)(em.A, {
                                    disableAnimation: !p || c,
                                    size: eC,
                                    sticker: (0, eh.Id)(e),
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
                                            "aria-setsize": f,
                                            "aria-posinset": s,
                                            children: (0, l.jsx)(ej, {
                                                ariaLabel: I,
                                                className: r()(ex._0, { [ex.ND]: E, [ex.Ms]: g && E }),
                                                isSelected: g,
                                                onClick: () => {
                                                    (x.type === ee.Z2.PACK &&
                                                        K.default.track(ef.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: u?.location,
                                                            tab: ep.kx.STICKER,
                                                            sticker_pack_id: x.id,
                                                            guild_id: o,
                                                        }),
                                                        a());
                                                },
                                                children: y,
                                            }),
                                        }),
                                    }),
                                    C ? (0, l.jsx)("hr", { className: ex.ny }, "separator") : null,
                                ],
                            },
                            x.id,
                        );
                    },
                    [t, u, c, n],
                ),
                h = i.useCallback((e, t) => (t ? eN : 0), []);
            return {
                getScrollOffsetForIndex: h,
                renderCategoryListItem: d,
                rowHeight: i.useCallback(
                    (e, t) => {
                        let l = n[t],
                            i = n[t + 1];
                        return eC + (null != i && l.type === ee.Z2.GUILD && i.type !== ee.Z2.GUILD ? e_ : eE);
                    },
                    [n],
                ),
                onScroll: i.useCallback(
                    (e) => {
                        let t = s.current?.getListDimensions();
                        null == t || o(e + t.height - ey < a);
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
                (e(d), s.current?.scrollTo(h));
            },
            [d, h],
        );
    return (0, l.jsx)(eu.A, {
        className: ex.jv,
        categoryListRef: s,
        expressionsListRef: t,
        store: U.bM,
        listPadding: ev,
        onScroll: A,
        renderCategoryListItem: g,
        rowCount: c.length,
        categories: c,
        categoryHeight: x,
        children: (e) =>
            p &&
            a &&
            (0, l.jsx)(f.D, {
                className: r()(ex.Fe, { [ex.Q6]: !a }),
                onClick: () => C(e),
                children: (0, l.jsx)(er.t, { size: "md", color: "currentColor" }),
            }),
    });
};
var eT = n(297264),
    eR = n(834730),
    eO = n(10392),
    eM = n(82498),
    eL = n(724651),
    ek = n(811611),
    ew = n(821609),
    eP = n(403581);
function eD(e) {
    let { analyticsSection: t, buttonText: i } = e;
    return (0, l.jsx)(ew.$, {
        variant: "expressive",
        icon: eP.t,
        text: i ?? eg.intl.string(eg.t["8Sh5fg"]),
        onClick: () => {
            var e;
            return (
                (e = { section: t }),
                void (K.default.track(ef.HAw.OPEN_MODAL, {
                    type: ef.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
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
var eU = n(823894),
    eV = n(202541),
    eG = n(768857);
function eF(e) {
    let { className: t, onClose: n } = e;
    (0, b.XQ)();
    let { analyticsLocations: s } = (0, D.Ay)(P.A.EMPTY_STATE),
        a = (0, d.yK)([T.A], () => eU.vX.map((e) => T.A.getStickerById(e)));
    i.useEffect(() => {
        (K.default.track(ef.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eV.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: ef.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: s,
        }),
            (0, eO.sq)(ef.U7l.PREMIUM_UPSELL_VIEWED, s, () => (0, eM.uq)(eV.e.EMPTY_STICKER_PICKER_UPSELL)));
    }, [s]);
    let o = (0, H.V)(),
        u = (0, eL.O)(),
        c = null != o || null != u;
    return (0, l.jsxs)("div", {
        className: r()(eG.p$, t, { [eG.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(ek.Ay, {
                      discountOffer: u,
                      trialOffer: o,
                      onClose: n,
                      type: eV.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscriptionTrial?.skuId ?? eV.pe.TIER_2,
                      children: eg.intl.string(eg.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eT.D, {
                              className: eG.wx,
                              variant: "heading-xl/semibold",
                              children: eg.intl.string(eg.t.HEm04J),
                          }),
                          (0, l.jsx)(eR.E, {
                              className: eG.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: eg.intl.string(eg.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: eG.l1,
                              children: a
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(em.A, { sticker: e, className: eG.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eD, { analyticsSection: ef.JJy.EXPRESSION_PICKER }),
        ],
    });
}
var eH = n(404778),
    eB = n(537652),
    eW = n(962125),
    eK = n(286509),
    ez = n(631576),
    eZ = n(369163),
    eY = n(123292),
    eq = n(631305),
    eJ = n(468689),
    e$ = n(931991),
    eX = n(473145),
    eQ = n(625633),
    e0 = n(136123);
let e1 = function (e) {
    let { className: t, guildId: n, channel: s, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, w.p)(),
        { analyticsLocations: c } = (0, D.Ay)(),
        h = (0, d.bG)([ed.A], () => ed.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, e$.nr)(h),
        f = null != h && 0 === (0, eX.aG)(h.premiumTier) && !h.features.has(ef.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            f &&
            a &&
            ((0, E.zV)(ef.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
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
                  className: r()(e0.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(eZ.v, { size: "md", color: "currentColor", className: e0.Kk }),
                      (0, l.jsx)(eR.E, {
                          color: "interactive-text-default",
                          className: e0.rf,
                          variant: "text-sm/normal",
                          children: eg.intl.format(eg.t.AXWla1, { count: (0, eX.aG)(ef.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(eY.Q, {
                          variant: "primary",
                          text: eg.intl.string(eg.t["Gb+BJD"]),
                          onClick: function () {
                              null != h &&
                                  (0, eq.A)({
                                      analyticsLocations: c,
                                      analyticsSourceLocation: u,
                                      guild: h,
                                      perks: (0, eQ.q5)(),
                                  });
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: r()(e0.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(er.t, {
                          size: "custom",
                          color: "currentColor",
                          className: e0.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, l.jsx)(eR.E, {
                          color: "interactive-text-default",
                          className: e0.rf,
                          variant: "text-sm/normal",
                          children: eg.intl.string(eg.t.S83wgh),
                      }),
                      (0, l.jsx)(eY.Q, {
                          variant: "primary",
                          text: eg.intl.string(eg.t.bwNjug),
                          onClick: function () {
                              ((0, V.v8)(), eJ.A.open(n, ef.BEX.STICKERS, u));
                          },
                      }),
                  ],
              })
        : null;
};
var e2 = n(307301),
    e3 = n(182922),
    e8 = n(683522);
let e6 = (0, z.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    e7 = (0, z.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    e5 = i.memo(function (e) {
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
                if ((!(0, eh.FD)(e) && !(0, eh.Xw)(e)) || (0, eh.Xw)(e)) {
                    let i = ed.A.getGuild(e.guild_id);
                    null != i &&
                        ((t = eg.intl.format(eg.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(eo.A, { guild: i })));
                } else if ((0, eh.FD)(e)) {
                    let i = T.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = eg.intl.format(eg.t.cZOkbs, { source: i.name })),
                        (n = (0, l.jsx)(em.A, { size: e7, sticker: (0, eh.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(s),
            o =
                (0, eh.FD)(s) || (0, eh.Xw)(s)
                    ? (0, l.jsx)(em.A, { isInteracting: !0, size: e6, sticker: s, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: e8.P,
                          children: (0, l.jsx)(e2.j, { size: "md", color: "currentColor", className: e8.K }),
                      });
        return (0, l.jsx)(e3.A, {
            graphicPrimary: o,
            graphicSecondary: r,
            titlePrimary: s.name,
            titleSecondary: (0, eh.FD)(s) || (0, eh.Xw)(s) ? a : null,
        });
    });
var e4 = n(140735),
    e9 = n(442433),
    te = n(304072),
    tt = n(194261),
    tn = n(513902);
let tl = function (e) {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: tn.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(tt.LockIcon, { size: "xxs", color: "currentColor", className: tn.I }),
    });
};
var ti = n(777371);
let ts = i.memo(function (e) {
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
            ownedStickerPacks: S,
            enlargeOnInteraction: v = !1,
            channel: N,
            currentUser: _,
            checkSendability: j = !0,
        } = e,
        { location: b } = (0, w.p)(),
        T = y + 2 * I,
        R = i.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${T}px)`,
                height: T,
                paddingRight: t ? void 0 : T,
            }),
            [t, c, T],
        ),
        O = i.useMemo(() => ({ width: y, height: y, padding: I }), [I, y]),
        [M, L] = (0, te.A)(null, 300);
    return (0, l.jsx)("div", {
        className: ti.nM,
        style: R,
        ...u?.(A),
        children: E.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === ee.op.STICKER && v && u,
                E = (0, a.throttle)(() => {
                    h?.current === !0 || p?.current === !0 || u || g?.(e);
                }, 250),
                { ref: I, tabIndex: T, onFocus: R, ...k } = o?.(e.columnIndex, A) ?? {};
            switch (e.type) {
                case ee.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...k,
                            children: (0, l.jsxs)(f.D, {
                                "aria-label": e.name,
                                className: r()(ti.wP, C, { [ti.Kj]: u }),
                                innerRef: I,
                                tabIndex: T,
                                onFocus: R ?? E,
                                onMouseMove: E,
                                onClick: function () {
                                    e.type === ee.op.CREATE_STICKER &&
                                        (K.default.track(ef.HAw.OPEN_MODAL, {
                                            type: ef.JJy.CREATE_STICKER_MODAL,
                                            location: b,
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
                                    !v && (0, l.jsx)("div", { className: ti.fw }),
                                    (0, l.jsx)("div", {
                                        className: ti.P0,
                                        children: (0, l.jsx)(e2.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: ti.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(eR.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: eg.intl.string(eg.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case ee.op.STICKER: {
                    let a = t && null != S && (0, eh.FD)(e.sticker) && !S.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...k, key: e.sticker.id },
                        (0, l.jsxs)(f.D, {
                            className: r()(ti.yI, C, { [ti.PV]: u, [ti.TV]: M === e.sticker.id }),
                            innerRef: I,
                            tabIndex: T,
                            onFocus: R ?? E,
                            onMouseMove: E,
                            onClick: function (t) {
                                if (h?.current === !0 || p?.current === !0) return;
                                let n = t.altKey;
                                (n && e.type === ee.op.STICKER && !(0, eh.o1)(e.sticker.id) && L(e.sticker.id),
                                    x?.(e, n));
                            },
                            onContextMenu: function (e) {
                                (0, e9.L3)(e, async () => {
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
                                (0, l.jsx)(e4.A, { children: (0, em.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !v && (0, l.jsx)("div", { className: ti.fw }),
                                        (0, l.jsx)(em.A, {
                                            className: r()(ti.SI, {
                                                [ti.ot]:
                                                    v && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [ti.Q$]: c,
                                                [ti.No]: j && !(0, X.G7)(e.sticker, _, N),
                                            }),
                                            disableAnimation: !u && !s,
                                            enlargeOnInteraction: v,
                                            isInteracting: u,
                                            maskAsset: u,
                                            sticker: e.sticker,
                                            size: y,
                                        }),
                                        a ? (0, l.jsx)(tl, { size: 20 }) : null,
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
var tr = n(457231);
let ta = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    to = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    tu = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    tc = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    td = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    th = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tm = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tf = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tp = (0, z.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tg = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tx = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tA = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tC = [tu, td, th, tm],
    tE = [tc, td, th, tm],
    tI = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    ty = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tS(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: tr.yB,
        children: ty.map((e) =>
            (0, l.jsx)(
                f.D,
                {
                    className: tr.x_,
                    onClick: () => t(e),
                    children: (0, l.jsx)(eR.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
let tv = i.forwardRef(function (e, t) {
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
            C = tg + 2 * c,
            E = i.useRef(!1),
            I = i.useRef(null),
            [y, S] = U.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], M.x),
            { analyticsLocations: v } = (0, D.Ay)(P.A.STICKER_PICKER),
            N = (0, V.RQ)((e) => e.searchQuery),
            _ = (0, d.bG)([T.A], () => T.A.getPremiumPacks()),
            {
                renderRow: j,
                renderSection: b,
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
                    C = (0, w.p)(),
                    E = (0, d.bG)([W.default], () => W.default.getCurrentUser()),
                    { handleStickerInspect: I, handleSelect: y } = (function (e) {
                        let { onSelectSticker: t, channel: n, currentUser: l } = e,
                            s = (0, w.p)(),
                            r = (0, V.RQ)((e) => e.searchQuery);
                        return {
                            handleStickerInspect: i.useCallback((e) => {
                                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: l } = e;
                                (U.bM.setActiveCategoryIndex(l),
                                    U.bM.setInspectedExpressionPosition(n, t, en.t.MOUSE_EVENT),
                                    e.type === ee.op.STICKER && U.bM.setSearchPlaceholder(e.sticker.name));
                            }, []),
                            handleSelect: i.useCallback(
                                (e, i) => {
                                    if (e.type !== ee.op.STICKER) return;
                                    let { sticker: a } = e;
                                    if (null == a) return;
                                    let o = {
                                        ...s.location,
                                        object:
                                            "" === r ? ef.ZSU.STICKER_PICKER_VIEW_ALL : ef.ZSU.STICKER_SEARCH_VIEW_ALL,
                                    };
                                    if (null != a && !(0, X.G7)(a, l, n)) {
                                        let e = (0, eh.Xw)(a);
                                        ((0, X.W$)(a, l, n) === X.Ux.SENDABLE_WITH_PREMIUM && $(!0),
                                            e && X.Ux.SENDABLE_WITH_BOOSTED_GUILD);
                                        return;
                                    }
                                    i
                                        ? (0, eh.o1)(a.id)
                                            ? (0, ez.vr)(a.id)
                                            : ((0, Q.Dt)({ sticker: a, location: { ...o, object: ef.ZSU.STICKER } }),
                                              (0, ez.uK)(a.id))
                                        : t(e);
                                },
                                [s.location, r, l, n, t],
                            ),
                        };
                    })({ onSelectSticker: r, channel: A, currentUser: E }),
                    [S, v] = i.useState(!1),
                    N = i.useCallback((e) => {
                        B.tP.updateSetting(Array.from(e));
                    }, []),
                    _ = i.useCallback(
                        (e) => {
                            let t = f[e];
                            return null != t
                                ? (0, l.jsx)(
                                      ts,
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
                                          stickerClassName: tr.yI,
                                          stickerDescriptors: t,
                                          stickerSize: n > ta ? tg : tx,
                                          stickerPadding: s,
                                          preferAnimation: n <= to,
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
                    j = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
                    b = i.useCallback(
                        function (e) {
                            let { isStickerPack: n = !0 } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                l = new Set(t),
                                i = t.has(e);
                            (i ? l.delete(e) : l.add(e),
                                K.default.track(ef.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                    location: C?.location,
                                    tab: ep.kx.STICKER,
                                    collapsed: !i,
                                    sticker_pack_id: n ? e : null,
                                }),
                                N(l));
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
                                            ? (0, l.jsx)("div", { className: tr.yF, children: (0, l.jsx)(eH.c, {}) })
                                            : null,
                                        (0, l.jsx)(
                                            eK.A,
                                            {
                                                className: tr.jH,
                                                "aria-label": eg.intl.string(eg.t.wbfJFh),
                                                children: eg.intl.string(eg.t["05Z/0l"]),
                                            },
                                            "stickers-you-might-like-header",
                                        ),
                                    ],
                                });
                            }
                            switch (n.type) {
                                case ee.Z2.FAVORITE:
                                    return (0, l.jsx)(
                                        eK.A,
                                        {
                                            className: tr.jH,
                                            "aria-label": eg.intl.formatToPlainString(eg.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, l.jsx)(el.StarIcon, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => b(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case ee.Z2.RECENT:
                                    return (0, l.jsx)(
                                        eK.A,
                                        {
                                            className: tr.jH,
                                            "aria-label": eg.intl.formatToPlainString(eg.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, l.jsx)(ei.ClockIcon, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => b(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case ee.Z2.GUILD:
                                case ee.Z2.EMPTY_GUILD_UPSELL: {
                                    let e = ed.A.getGuild(n.id);
                                    if (null == e) return null;
                                    return (0, l.jsx)(
                                        eK.A,
                                        {
                                            className: tr.jH,
                                            "aria-label": eg.intl.formatToPlainString(eg.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, l.jsx)(eo.A, { guild: e, height: 16, width: 16 }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => b(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                                case ee.Z2.PACK: {
                                    let e = T.A.getStickerPack(n.id);
                                    if (null == e) return null;
                                    return (0, l.jsx)(
                                        eK.A,
                                        {
                                            className: tr.jH,
                                            "aria-label": eg.intl.formatToPlainString(eg.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, l.jsx)(em.A, {
                                                disableAnimation: !0,
                                                size: 12,
                                                sticker: (0, eh.Id)(e),
                                            }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => b(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                            }
                        },
                        [t, p, b, g],
                    ),
                    O = i.useCallback(
                        (e) => {
                            if (null != g) {
                                let { sendable: t, sendableWithPremium: n } = g;
                                return 0 === e && t.length > 0 ? 0 : tp + (t.length > 0 && n.length > 0 ? tf : 0);
                            }
                            return tp;
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
                                      e1,
                                      {
                                          className: tr.Ij,
                                          guildId: n.id,
                                          channel: A,
                                          shouldTrackUpsellViewed: !S,
                                          setTrackedUpsellViewed: v,
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
                            return n.type !== ee.Z2.EMPTY_GUILD_UPSELL || l ? 0 : tI;
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
                inspectedStickerPosition: S,
                filteredStickers: r,
                ownedStickerPacks: i.useMemo(() => new Set(_.map((e) => e.id)), [_]),
                channel: A,
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
                value: v,
                children: (0, l.jsxs)("div", {
                    className: tr.iE,
                    children: [
                        null != r && 0 === r.sendable.length && 0 === r.sendableWithPremium.length
                            ? (0, l.jsx)(eB.A, {
                                  message: eg.intl.string(eg.t["zc+LQd"]),
                                  className: tr.__invalid_noSearchResultsContainer,
                                  suggestions: (0, l.jsx)(tS, { onSuggestionClick: (e) => (0, V.Ri)(e, !0) }),
                              })
                            : (0, l.jsx)(eW.A, {
                                  role: "none presentation",
                                  listPadding: null != r ? tE : tC,
                                  onScroll: F,
                                  renderRow: j,
                                  renderSection: null == r ? b : void 0,
                                  renderSectionHeader: L,
                                  renderSectionFooter: R,
                                  rowCount: f,
                                  rowCountBySection: p,
                                  rowHeight: s > ta ? C + tA : tx + 2 * c + tA,
                                  sectionHeaderHeight: k,
                                  sectionFooterHeight: O,
                                  stickyHeaders: !0,
                                  ref: I,
                              }),
                        (0, l.jsx)(e5, { stickersGrid: x }),
                    ],
                }),
            })
        );
    }),
    tN = (0, n(945810).mj)({
        name: "2026-02-sticker-padding",
        kind: "user",
        defaultConfig: { padding: 2 },
        variations: { 1: { padding: 1 } },
    });
var t_ = n(602034),
    tj = n(683438),
    tb = n(909802);
let tT = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: s, channel: r } = e,
        a = (0, b.ZO)(r),
        o = i.useRef(null),
        { searchQuery: u, isSearchSuggestion: c } = (0, V.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            M.x,
        ),
        d = U.bM.useStore((e) => e.searchPlaceholder),
        [h, m] = U.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], M.x),
        f = i.useCallback(
            (e) => {
                (U.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    U.bM.setInspectedExpressionPosition(0, 0),
                    U.bM.setSearchPlaceholder(null),
                    (0, V.Ri)(e),
                    s.current?.scrollTo(0));
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
            className: tb.i,
            children: (0, l.jsx)(tj.I, {
                autoFocus: a,
                disabled: !a,
                query: u,
                ref: o,
                placeholder: d ?? (a ? eg.intl.string(eg.t.dt5h1C) : eg.intl.string(eg.t["Pck/4U"])),
                onClear: p,
                onKeyDown: n,
                onChange: f,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": eU.lq,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, t_.Aq)(eU.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
});
n(321073);
var tR = n(802842),
    tO = n(789645),
    tM = n(964486),
    tL = n(158045),
    tk = n(420136),
    tw = n(939383);
function tP() {
    return $(!1);
}
function tD(e) {
    let { onLearnMore: t } = e,
        { analyticsLocations: n } = (0, D.Ay)(P.A.PREMIUM_UPSELL);
    (0, i.useEffect)(() => {
        (K.default.track(ef.HAw.PREMIUM_UPSELL_VIEWED, {
            location_section: ef.JJy.STICKER_PICKER_UPSELL,
            type: eV.e.STICKER_PICKER_UPSELL,
            location_stack: n,
        }),
            (0, eO.sq)(ef.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, eM.uq)(eV.e.STICKER_PICKER_UPSELL)));
    }, [n]);
    let s = (0, i.useRef)(null);
    (0, tM.Ay)(() => {
        s.current?.focus();
    });
    let a = (0, H.V)(),
        o = (0, eL.O)(),
        u = a?.subscriptionTrial?.skuId === eV.pe.TIER_0,
        c = null != a || null != o;
    return (0, l.jsxs)("div", {
        ref: s,
        tabIndex: -1,
        "aria-label": eg.intl.string(eg.t.jJG1pl),
        className: r()(tk.VL, { [tk.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(ek.Ay, {
                      trialOffer: a,
                      discountOffer: o,
                      onClose: tP,
                      type: eV.e.STICKER_PICKER_UPSELL,
                      subscriptionTier: a?.subscriptionTrial?.skuId ?? eV.pe.TIER_2,
                      children: u
                          ? eg.intl.format(eg.t.MAGagw, {
                                planName: (0, tL.RH)(eV.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : eg.intl.format(eg.t.jt7JX6, { onClick: t }),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: tk.Tn, src: tw, alt: eg.intl.string(eg.t.do7AoM) }),
                          (0, l.jsx)(eR.E, {
                              className: tk.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: eg.intl.string(eg.t.jJG1pl),
                          }),
                          (0, l.jsx)(eR.E, {
                              className: tk.GR,
                              variant: "text-md/normal",
                              children: eg.intl.format(eg.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eD, { analyticsSection: ef.JJy.EXPRESSION_PICKER }),
            (0, l.jsx)(f.D, {
                className: tk.kz,
                onClick: tP,
                "aria-label": eg.intl.string(eg.t.cpT0Cq),
                children: (0, l.jsx)(tO.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var tU = n(970099);
let tV = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tG = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tF = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tH = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tB = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    tW = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tK = (0, z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tz = O()(Q.Qz, 200),
    tZ = O()(Q.HA, 200),
    tY = i.forwardRef(function (e, t) {
        let { containerWidth: s, channel: r, onSelectSticker: a, closePopout: o } = e,
            u = tN.useConfig({ location: "StickerPicker" }).padding,
            { location: c } = (0, w.p)(),
            { analyticsLocations: h } = (0, D.Ay)(P.A.STICKER_PICKER),
            f = (0, H.V)()?.subscriptionTrial != null,
            p = i.useRef(null),
            g = i.useRef(null),
            x = i.useRef(null),
            A = J((e) => e.showPremiumUpsell),
            [C, E] = (0, V.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], M.x),
            I = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: ep }));
        let y = (0, b.pD)(r),
            S = 0 === y.filter((e) => e.type !== ee.Z2.EMPTY_GUILD_UPSELL).length,
            v = (0, G.oV)({
                gridWrapperRef: p,
                containerWidth: s,
                showingEmptyState: S,
                listPaddingLeft: tG,
                listScrollbarWidth: 8,
            }),
            N = B.tP.useSetting(),
            _ = i.useMemo(() => new Set(N), [N]),
            j = (0, d.bG)([W.default], () => W.default.getCurrentUser()),
            R = i.useMemo(
                () =>
                    (function (e, t, n) {
                        if ("" === e) return null;
                        let l = [],
                            i = [];
                        return (
                            tR.Ay.queryStickers([e], !0)
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
                    })(C, j, r),
                [C, j, r],
            ),
            O = (0, b.Gc)(),
            L = (0, b.UT)(),
            k = (0, d.cf)([T.A], () => T.A.getAllGuildStickers()),
            { sendable: z = [], sendableWithPremium: Z = [] } = R ?? {},
            Y = z.length + Z.length,
            q = i.useCallback(
                (e) => {
                    ("" === C ? (0, Q.ry)(e) : (0, Q.nQ)(e, C, Y), a(e.sticker, ee.D6.STICKER_PICKER));
                },
                [a, C, Y],
            ),
            el = null != v && v > tV,
            {
                rowCount: ei,
                rowCountBySection: es,
                stickersGrid: er,
                gutterWidth: ea,
                columnCounts: eo,
            } = (0, b._c)({
                filteredStickers: R,
                stickersCategories: y,
                collapsedStickersCategories: _,
                listWidth: v,
                listPaddingRight: tF,
                stickerNodeMargin: el ? tH : tB,
                stickerNodeWidth: el ? tW + 2 * u : tK + 2 * u,
            }),
            {
                getItemProps: eu,
                getRowProps: ec,
                gridContainerProps: ed,
                handleGridContainerKeyDown: eh,
                isUsingKeyboardNavigation: em,
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
                    } = (0, G.Ff)({
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
                                (K.default.track(ef.HAw.OPEN_MODAL, { type: ef.JJy.CREATE_STICKER_MODAL, location: c }),
                                    (0, m.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("860350"),
                                            n.e("142753"),
                                            n.e("207998"),
                                            n.e("341659"),
                                            n.e("268582"),
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
                gridNavigatorId: eU.lq,
            });
        function ep() {
            let e = r.getGuildId(),
                t = [];
            null !== e && (t = T.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            (null != k &&
                [...k.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, Q.p4)({
                    containerWidth: s,
                    favoriteStickers: O,
                    frequentlyUsedStickers: L,
                    guildStickers: t,
                    stickersTotal: n,
                }));
        }
        (i.useEffect(() => U.bM.resetStoreState, []),
            i.useEffect(() => {
                ("" === I.current && "" !== C && (0, Q.Fg)(), (I.current = C));
            }, [C]),
            i.useEffect(() => {
                0 === Y ? tz(C) : tZ(C, Y, E);
            }, [C, Y, E]),
            i.useLayoutEffect(() => {
                x.current?.focus();
            }, []));
        let eg = i.useCallback(() => {
            (o(),
                K.default.track(ef.HAw.PREMIUM_PROMOTION_OPENED, { location_section: ef.JJy.STICKER_PICKER_UPSELL }),
                (0, F.e)());
        }, [o]);
        return (0, l.jsxs)(D.f5, {
            value: h,
            children: [
                !(f && S) &&
                    (0, l.jsx)("div", {
                        className: tU.wx,
                        children: (0, l.jsx)(tT, { ref: x, onKeyDown: eh, stickersListRef: g, channel: r }),
                    }),
                S
                    ? (0, l.jsx)(eF, { className: tU.p$, onClose: o })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  ref: p,
                                  className: tU.AD,
                                  id: eU.lq,
                                  ...ed,
                                  children:
                                      null != v
                                          ? (0, l.jsx)(tv, {
                                                ref: g,
                                                collapsedStickersCategories: _,
                                                filteredStickers: R,
                                                getStickerItemProps: eu,
                                                getStickerRowProps: ec,
                                                gridWidth: v,
                                                gutterWidth: ea,
                                                stickerPadding: u,
                                                isUsingKeyboardNavigation: em,
                                                onSelectSticker: q,
                                                rowCount: ei,
                                                rowCountBySection: es,
                                                stickersCategories: y,
                                                stickersGrid: er,
                                                channel: r,
                                            })
                                          : null,
                              }),
                              (0, l.jsx)(eb, { stickersListRef: g, channel: r }),
                          ],
                      }),
                A && (0, l.jsx)(tD, { onLearnMore: eg }),
            ],
        });
    }),
    tq = i.forwardRef(function (e, t) {
        return (
            (0, b.XQ)(),
            (0, l.jsx)("div", {
                className: tU.iE,
                id: eU.GX,
                "aria-labelledby": eU.LD,
                role: "tabpanel",
                children: e.isLoading ? (0, l.jsx)(k.y, { className: tU.Mz }) : (0, l.jsx)(tY, { ...e, ref: t }),
            })
        );
    });
var tJ = n(742023),
    t$ = n(712687),
    tX = n(625494),
    tQ = n(49999),
    t0 = n(732139),
    t1 = n(307731),
    t2 = n(818625);
let t3 = 498 + t0.as.MEDIUM,
    t8 = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: s = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(f.D, {
            role: "tab",
            autoFocus: s,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                (E.Ay.trackWithMetadata(ef.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, V.U)(i));
            },
            "aria-current": t ? "page" : void 0,
            className: r()(n, t2.oi, t2.pc, { [t2.Mv]: t }),
        });
    }),
    t6 = i.memo(function (e) {
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
            G = i.useRef(!1),
            F = i.useRef(null),
            H = i.useRef(null),
            { drawerWidth: B, handleDrawerResizeHandleMouseDown: W } = (function (e) {
                let { positionContainerRef: t, drawerRef: n, orientation: l } = e,
                    s = (0, d.bG)([tJ.Ay], () => tJ.Ay.expressionPickerWidth),
                    [r, a] = i.useState(window.innerWidth),
                    [u, c] = i.useState(s ?? ep.wp.MIN),
                    h = i.useMemo(() => {
                        switch (u) {
                            case ep.wp.MIN:
                                return 498;
                            case ep.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    m = i.useCallback(
                        (e) => {
                            let t = e >= r ? ep.wp.MAX : e <= 498 ? ep.wp.MIN : e;
                            (null == t && null != n.current && (n.current.style.width = ""),
                                x.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                c(t));
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
                                (e.stopPropagation(), null != t.current && a(t.current.offsetWidth), f(e));
                            },
                            [t, f],
                        ),
                    }
                );
            })({
                positionContainerRef: U,
                drawerRef: H,
                orientation: "left" === k ? C.R.HORIZONTAL_RIGHT : C.R.HORIZONTAL_LEFT,
            }),
            K = (0, V.RQ)((e) => e.activeView),
            z = (0, b.ZO)(O),
            { renderWindow: Z, windowDispatch: Y } = i.useContext(N.Ay),
            q = (0, d.bG)([T.A], () => !T.A.hasLoadedStickerPacks),
            J = (0, _.tj)({ location: "expression_picker" }),
            $ = (0, d.bG)([t$.A], () => t$.A.isOpen()),
            X = null != D,
            Q = (0, m.useIsModalAtTop)(D ?? ""),
            ee = M.gifs?.allowSending && !u.Fr && null != s,
            et = M.stickers?.allowSending && null != f,
            en = !M.expressionPicker?.onlyEmojis && (ee || et),
            el = i.useCallback(
                (e) => {
                    if ((!X && (0, m.hasAnyModalOpen)()) || (X && !(Q && P)) || $ || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + ep.VQ)) return;
                    for (; (0, c.vq)(t);) {
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
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && tX._.dispatchToLastSubscribed(ef.jej.TEXTAREA_FOCUS);
                },
                [P, Q, X, $],
            ),
            ei = i.useCallback(() => {
                (0, V.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                K === ep.kx.GIF && (0, V.v8)();
            }
            return (
                Z.addEventListener("mousedown", el),
                Z.addEventListener("contextmenu", el),
                Y.subscribe(ef.jej.POPOUT_CLOSE, ei),
                tX._.subscribe(ef.jej.CLOSE_GIF_PICKER, e),
                () => {
                    (Z.removeEventListener("mousedown", el),
                        Z.removeEventListener("contextmenu", el),
                        Y.unsubscribe(ef.jej.POPOUT_CLOSE, ei),
                        tX._.unsubscribe(ef.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [K, ei, el, Z, Y]),
            (0, p.tj)(U));
        let [es, er] = (0, I.kn)(J ? [h.M.SOUNDMOJI_BADGE] : [], void 0, !1),
            [ea, eo] = i.useState(!1);
        (i.useEffect(() => {
            K === ep.kx.SOUNDBOARD && eo(!0);
        }, [K]),
            i.useEffect(
                () => () => {
                    ea && er(tQ.i.TAKE_ACTION);
                },
                [ea, er],
            ),
            i.useEffect(() => {
                (0, V.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!X && (0, m.hasAnyModalOpen)()) || (X && !Q)) && (0, V.v8)();
            }, [Q, X]),
            i.useEffect(() => {
                null != H.current &&
                    !G.current &&
                    (K === ep.kx.EMOJI
                        ? F?.current?.onPickerOpen != null && (F?.current?.onPickerOpen(), (G.current = !0))
                        : K === ep.kx.STICKER
                          ? F?.current?.onPickerOpen == null || q || (F?.current?.onPickerOpen(), (G.current = !0))
                          : (E.Ay.trackWithMetadata(ef.HAw.EXPRESSION_PICKER_OPENED, {
                                width: H.current.offsetWidth,
                                tab: K,
                                badged: !1,
                            }),
                            (G.current = !0)));
            }));
        let eu = i.useCallback((e, t) => R?.(e, "emoji_picker", t), [R]),
            ec = i.useCallback((e, t) => R?.(e, "soundboard_picker", t), [R]),
            ed = M.soundmoji?.allowSending === !0 && null != R,
            eh = "left" === k ? "right" : "left",
            em = null != w ? w : "left" === k ? t2.sj : t2.Jg,
            ex = ee
                ? (0, l.jsx)(t8, {
                      id: t0.g9,
                      "aria-controls": t0.ni,
                      "aria-selected": K === ep.kx.GIF,
                      isActive: K === ep.kx.GIF,
                      viewType: ep.kx.GIF,
                      children: eg.intl.string(eg.t["6gUTsS"]),
                  })
                : null,
            eA = et
                ? (0, l.jsx)(t8, {
                      id: eU.LD,
                      "aria-controls": eU.GX,
                      "aria-selected": K === ep.kx.STICKER,
                      isActive: K === ep.kx.STICKER,
                      autoFocus: !z,
                      viewType: ep.kx.STICKER,
                      children: (0, l.jsx)("div", { className: t2.dG, children: eg.intl.string(eg.t.nf1s3u) }),
                  })
                : null,
            eC = (0, l.jsx)(t8, {
                id: t0.k1,
                "aria-controls": t0.Do,
                "aria-selected": K === ep.kx.EMOJI,
                isActive: K === ep.kx.EMOJI,
                viewType: ep.kx.EMOJI,
                children: eg.intl.string(eg.t.Xu3wE3),
            });
        return (0, l.jsx)(A.A, {
            section: ef.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(v.nE, {
                className: r()(t2.T8, em),
                targetRef: t,
                position: L,
                align: k,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: r()(t2.V6, { [t2.D0]: !en }),
                        ref: U,
                        role: "dialog",
                        "aria-label": eg.intl.string(eg.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: t2.jP,
                                  style: { width: null == B ? void 0 : B, [k]: 0 },
                                  ref: H,
                                  children: [
                                      (0, l.jsx)("div", { className: t2.Di, onMouseDown: W, style: { [eh]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: t2.FG,
                                          children: [
                                              en
                                                  ? (0, l.jsx)("nav", {
                                                        className: t2.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: t2.CT,
                                                            role: "tablist",
                                                            "aria-label": eg.intl.string(eg.t["2j4Vgd"]),
                                                            children: [
                                                                ex,
                                                                eA,
                                                                eC,
                                                                J &&
                                                                    ed &&
                                                                    (0, l.jsx)(t8, {
                                                                        id: t0.N6,
                                                                        "aria-controls": t0.AA,
                                                                        "aria-selected": K === ep.kx.SOUNDBOARD,
                                                                        isActive: K === ep.kx.SOUNDBOARD,
                                                                        viewType: ep.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: t2.sd,
                                                                            children: [
                                                                                eg.intl.string(eg.t.EHlAMc),
                                                                                null != es &&
                                                                                    (0, l.jsx)(g.Lp, {
                                                                                        text: eg.intl.string(
                                                                                            eg.t.y2b7CA,
                                                                                        ),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              K === ep.kx.STICKER && et
                                                  ? (0, l.jsx)(tq, {
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
                                              K === ep.kx.GIF && ee
                                                  ? (0, l.jsx)(S.A, {
                                                        onSelectGIF: s,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              K === ep.kx.EMOJI || M.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(y.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: O,
                                                        containerWidth: B,
                                                        emojiSize: null != B && B < t3 ? t0.as.MEDIUM : t0.as.LARGE,
                                                        pickerIntention:
                                                            M.expressionPicker?.emojiIntention ??
                                                            t1.EmojiIntention.CHAT,
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
                                              K === ep.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: t2.z,
                                                        children: (0, l.jsx)(j.A, {
                                                            guildId: O.guild_id,
                                                            channel: O,
                                                            containerWidth: B,
                                                            onClose: ei,
                                                            onSelect: ec,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: t2.BG, children: e }),
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
