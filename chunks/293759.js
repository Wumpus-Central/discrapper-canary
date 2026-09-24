n.d(t, { A: () => nn });
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
    j = n(511558),
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
    H = n(945810);
let B = (0, H.mj)({
    name: "2026-09-web-sticker-picker-upsell-restyle",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
function W(e) {
    return B.useConfig({ location: e });
}
var K = n(732280),
    z = n(885386),
    Z = n(287809),
    Y = n(174459),
    q = n(240248),
    J = n(196765),
    $ = n(121894);
let X = Object.freeze({ showPremiumUpsell: !1 }),
    Q = (0, J.v)((e) => X);
function ee(e) {
    (0, $.r)(() => Q.setState({ showPremiumUpsell: e }));
}
var et = n(891090),
    en = n(194004),
    el = n(788413),
    ei = n(60587),
    es = n(27232),
    er = n(406810),
    ea = n(866665),
    eo = n(797285),
    eu = n(713517),
    ec = n(724511),
    ed = n(88218),
    eh = n(941971),
    em = n(71393),
    ef = n(68935),
    ep = n(148355),
    eg = n(652215),
    ex = n(698279),
    eA = n(375708),
    eC = n(161975);
let eE = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    eI = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    ey = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eS = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    ev = (0, q.xI)(L.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eN = (0, q.xI)(L.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    e_ = [eE, eE, eE, eE],
    ej = (eI + ey) * 2 + eE,
    eb = ev + 2 * eN;
function eT(e) {
    let { ariaLabel: t, children: n, className: s, isSelected: r, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, eu.A)(o);
    return (0, l.jsxs)(f.D, {
        innerRef: o,
        "aria-label": t,
        className: s,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: eC.a$,
                children: (0, l.jsx)(eh.A, { hovered: u, selected: r, size: "small" }),
            }),
            n,
        ],
    });
}
let eR = (e) => {
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
            let e = c.filter((e) => e.type === en.Z2.GUILD).length,
                t = e + +(c[0]?.type === en.Z2.RECENT) + +(c[0]?.type === en.Z2.FAVORITE),
                n = t * (eI + ey) - ey + eb;
            return {
                firstStandardStickerCategoryIndex: t + 1,
                firstStandardStickerCategoryOffsetTop: n,
                guildCategoryCount: e,
                hasFirstPartyStickerPacks: null != c.find((e) => e.type === en.Z2.PACK),
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
                            d = n[0]?.type === en.Z2.FAVORITE,
                            h = +!!d,
                            m = n[h]?.type === en.Z2.RECENT,
                            f = n.length;
                        if (0 === s && d) {
                            let e = !c && 0 === t;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": f,
                                    "aria-posinset": s,
                                    children: (0, l.jsx)(eT, {
                                        ariaLabel: eA.intl.string(eA.t.y3LQCG),
                                        className: r()(eC._0, eC.dC, { [eC.k1]: e, [eC.ls]: !m }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(es.StarIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eC.AB,
                                            height: eS,
                                            width: eS,
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
                                    children: (0, l.jsx)(eT, {
                                        ariaLabel: eA.intl.string(eA.t.RxAmVC),
                                        className: r()(eC._0, eC.dC, eC.ls, { [eC.k1]: e }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(er.ClockIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eC.AB,
                                            height: eS,
                                            width: eS,
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
                            C = null != A && x.type === en.Z2.GUILD && A.type !== en.Z2.GUILD,
                            E = x.type === en.Z2.PACK,
                            I = "",
                            y = null;
                        if (x.type === en.Z2.GUILD || x.type === en.Z2.EMPTY_GUILD_UPSELL) {
                            let e = em.A.getGuild(x.id);
                            null != e &&
                                ((o = e.id), (I = e.name), (y = (0, l.jsx)(ec.A, { guild: e, isSelected: p })));
                        } else if (E) {
                            let e = T.A.getStickerPack(x.id);
                            null != e &&
                                ((I = e.name),
                                (y = (0, l.jsx)(ep.A, {
                                    disableAnimation: !p || c,
                                    size: eI,
                                    sticker: (0, ef.Id)(e),
                                })));
                        }
                        return (0, l.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, l.jsx)(ea.m, {
                                        position: "right",
                                        text: I,
                                        children: (0, l.jsx)("div", {
                                            role: "listitem",
                                            "aria-setsize": f,
                                            "aria-posinset": s,
                                            children: (0, l.jsx)(eT, {
                                                ariaLabel: I,
                                                className: r()(eC._0, { [eC.ND]: E, [eC.Ms]: g && E }),
                                                isSelected: g,
                                                onClick: () => {
                                                    (x.type === en.Z2.PACK &&
                                                        Y.default.track(eg.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: u?.location,
                                                            tab: ex.kx.STICKER,
                                                            sticker_pack_id: x.id,
                                                            guild_id: o,
                                                        }),
                                                        a());
                                                },
                                                children: y,
                                            }),
                                        }),
                                    }),
                                    C ? (0, l.jsx)("hr", { className: eC.ny }, "separator") : null,
                                ],
                            },
                            x.id,
                        );
                    },
                    [t, u, c, n],
                ),
                h = i.useCallback((e, t) => (t ? ej : 0), []);
            return {
                getScrollOffsetForIndex: h,
                renderCategoryListItem: d,
                rowHeight: i.useCallback(
                    (e, t) => {
                        let l = n[t],
                            i = n[t + 1];
                        return eI + (null != i && l.type === en.Z2.GUILD && i.type !== en.Z2.GUILD ? eb : ey);
                    },
                    [n],
                ),
                onScroll: i.useCallback(
                    (e) => {
                        let t = s.current?.getListDimensions();
                        null == t || o(e + t.height - ev < a);
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
    return (0, l.jsx)(ed.A, {
        className: eC.jv,
        categoryListRef: s,
        expressionsListRef: t,
        store: U.bM,
        listPadding: e_,
        onScroll: A,
        renderCategoryListItem: g,
        rowCount: c.length,
        categories: c,
        categoryHeight: x,
        children: (e) =>
            p &&
            a &&
            (0, l.jsx)(f.D, {
                className: r()(eC.Fe, { [eC.Q6]: !a }),
                onClick: () => C(e),
                children: (0, l.jsx)(eo.t, { size: "md", color: "currentColor" }),
            }),
    });
};
var eO = n(297264),
    eM = n(834730),
    eL = n(10392),
    ek = n(82498),
    ew = n(724651),
    eP = n(811611),
    eD = n(821609),
    eU = n(403581);
function eV(e) {
    let { analyticsSection: t, buttonText: i } = e;
    return (0, l.jsx)(eD.$, {
        variant: "expressive",
        icon: eU.t,
        text: i ?? eA.intl.string(eA.t["8Sh5fg"]),
        onClick: () => {
            var e;
            return (
                (e = { section: t }),
                void (Y.default.track(eg.HAw.OPEN_MODAL, {
                    type: eg.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
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
var eG = n(823894),
    eF = n(202541),
    eH = n(768857);
function eB(e) {
    let { className: t, onClose: n } = e;
    (0, b.XQ)();
    let { analyticsLocations: s } = (0, D.Ay)(P.A.EMPTY_STATE),
        a = (0, d.yK)([T.A], () => eG.vX.map((e) => T.A.getStickerById(e)));
    i.useEffect(() => {
        (Y.default.track(eg.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eF.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: eg.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: s,
        }),
            (0, eL.sq)(eg.U7l.PREMIUM_UPSELL_VIEWED, s, () => (0, ek.uq)(eF.e.EMPTY_STICKER_PICKER_UPSELL)));
    }, [s]);
    let o = (0, K.V)(),
        u = (0, ew.O)(),
        c = null != o || null != u;
    return (0, l.jsxs)("div", {
        className: r()(eH.p$, t, { [eH.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eP.Ay, {
                      discountOffer: u,
                      trialOffer: o,
                      onClose: n,
                      type: eF.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscriptionTrial?.skuId ?? eF.pe.TIER_2,
                      children: eA.intl.string(eA.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eO.D, {
                              className: eH.wx,
                              variant: "heading-xl/semibold",
                              children: eA.intl.string(eA.t.HEm04J),
                          }),
                          (0, l.jsx)(eM.E, {
                              className: eH.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: eA.intl.string(eA.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: eH.l1,
                              children: a
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(ep.A, { sticker: e, className: eH.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eV, { analyticsSection: eg.JJy.EXPRESSION_PICKER }),
        ],
    });
}
var eW = n(404778),
    eK = n(537652),
    ez = n(962125),
    eZ = n(286509),
    eY = n(361670),
    eq = n(631576),
    eJ = n(369163),
    e$ = n(123292),
    eX = n(631305),
    eQ = n(468689),
    e0 = n(931991),
    e1 = n(473145),
    e2 = n(625633),
    e3 = n(136123);
let e8 = function (e) {
    let { className: t, guildId: n, channel: s, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, w.p)(),
        { analyticsLocations: c } = (0, D.Ay)(),
        h = (0, d.bG)([em.A], () => em.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, e0.nr)(h),
        f = null != h && 0 === (0, e1.aG)(h.premiumTier) && !h.features.has(eg.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            f &&
            a &&
            ((0, E.zV)(eg.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
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
                  className: r()(e3.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(eJ.v, { size: "md", color: "currentColor", className: e3.Kk }),
                      (0, l.jsx)(eM.E, {
                          color: "interactive-text-default",
                          className: e3.rf,
                          variant: "text-sm/normal",
                          children: eA.intl.format(eA.t.AXWla1, { count: (0, e1.aG)(eg.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(e$.Q, {
                          variant: "primary",
                          text: eA.intl.string(eA.t["Gb+BJD"]),
                          onClick: function () {
                              null != h &&
                                  (0, eX.A)({
                                      analyticsLocations: c,
                                      analyticsSourceLocation: u,
                                      guild: h,
                                      perks: (0, e2.q5)(),
                                  });
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: r()(e3.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(eo.t, {
                          size: "custom",
                          color: "currentColor",
                          className: e3.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, l.jsx)(eM.E, {
                          color: "interactive-text-default",
                          className: e3.rf,
                          variant: "text-sm/normal",
                          children: eA.intl.string(eA.t.S83wgh),
                      }),
                      (0, l.jsx)(e$.Q, {
                          variant: "primary",
                          text: eA.intl.string(eA.t.bwNjug),
                          onClick: function () {
                              ((0, V.v8)(), eQ.A.open(n, eg.BEX.STICKERS, u));
                          },
                      }),
                  ],
              })
        : null;
};
var e6 = n(307301),
    e5 = n(182922),
    e7 = n(683522);
let e4 = (0, q.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    e9 = (0, q.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    te = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = U.bM.useStore((e) => e.inspectedExpressionPosition),
            s = i.useMemo(() => {
                let { rowIndex: e, columnIndex: l } = n,
                    i = t[e]?.[l];
                if (null == i) return null;
                switch (i.type) {
                    case en.op.CREATE_STICKER:
                        return { guild_id: i.guild_id, name: i.name };
                    case en.op.STICKER:
                        return i.sticker;
                    default:
                        return null;
                }
            }, [t, n]);
        if (null == s) return null;
        let { graphic: r, title: a } = (function (e) {
                let t = null,
                    n = null;
                if ((!(0, ef.FD)(e) && !(0, ef.Xw)(e)) || (0, ef.Xw)(e)) {
                    let i = em.A.getGuild(e.guild_id);
                    null != i &&
                        ((t = eA.intl.format(eA.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(ec.A, { guild: i })));
                } else if ((0, ef.FD)(e)) {
                    let i = T.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = eA.intl.format(eA.t.cZOkbs, { source: i.name })),
                        (n = (0, l.jsx)(ep.A, { size: e9, sticker: (0, ef.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(s),
            o =
                (0, ef.FD)(s) || (0, ef.Xw)(s)
                    ? (0, l.jsx)(ep.A, { isInteracting: !0, size: e4, sticker: s, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: e7.P,
                          children: (0, l.jsx)(e6.j, { size: "md", color: "currentColor", className: e7.K }),
                      });
        return (0, l.jsx)(e5.A, {
            graphicPrimary: o,
            graphicSecondary: r,
            titlePrimary: s.name,
            titleSecondary: (0, ef.FD)(s) || (0, ef.Xw)(s) ? a : null,
        });
    });
var tt = n(140735),
    tn = n(194261),
    tl = n(442433),
    ti = n(304072),
    ts = n(513902);
let tr = function (e) {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: ts.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(tn.LockIcon, { size: "xxs", color: "currentColor", className: ts.I }),
    });
};
var ta = n(777371);
let to = i.memo(function (e) {
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
            upsellRestyleEnabled: b = !1,
            isSectionNitroLocked: T = !1,
        } = e,
        { location: R } = (0, w.p)(),
        O = y + 2 * I,
        M = i.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${O}px)`,
                height: O,
                paddingRight: t ? void 0 : O,
            }),
            [t, c, O],
        ),
        L = i.useMemo(() => ({ width: y, height: y, padding: I }), [I, y]),
        [k, P] = (0, ti.A)(null, 300);
    return (0, l.jsx)("div", {
        className: ta.nM,
        style: M,
        ...u?.(A),
        children: E.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === en.op.STICKER && v && u,
                E = (0, a.throttle)(() => {
                    h?.current === !0 || p?.current === !0 || u || g?.(e);
                }, 250),
                { ref: I, tabIndex: O, onFocus: M, ...w } = o?.(e.columnIndex, A) ?? {};
            switch (e.type) {
                case en.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...w,
                            children: (0, l.jsxs)(f.D, {
                                "aria-label": e.name,
                                className: r()(ta.wP, C, { [ta.Kj]: u }),
                                innerRef: I,
                                tabIndex: O,
                                onFocus: M ?? E,
                                onMouseMove: E,
                                onClick: function () {
                                    e.type === en.op.CREATE_STICKER &&
                                        (Y.default.track(eg.HAw.OPEN_MODAL, {
                                            type: eg.JJy.CREATE_STICKER_MODAL,
                                            location: R,
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
                                style: L,
                                children: [
                                    !v && (0, l.jsx)("div", { className: ta.fw }),
                                    (0, l.jsx)("div", {
                                        className: ta.P0,
                                        children: (0, l.jsx)(e6.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: ta.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(eM.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: eA.intl.string(eA.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case en.op.STICKER: {
                    let a = (j ? (0, eY.W$)(e.sticker, _, N) : eY.Ux.SENDABLE) !== eY.Ux.SENDABLE,
                        o = b && a && !T,
                        m = !b && a,
                        g = t && null != S && (0, ef.FD)(e.sticker) && !S.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...w, key: e.sticker.id },
                        (0, l.jsxs)(f.D, {
                            className: r()(ta.yI, C, { [ta.PV]: u, [ta.TV]: k === e.sticker.id }),
                            innerRef: I,
                            tabIndex: O,
                            onFocus: M ?? E,
                            onMouseMove: E,
                            onClick: function (t) {
                                if (h?.current === !0 || p?.current === !0) return;
                                let n = t.altKey;
                                (n && e.type === en.op.STICKER && !(0, ef.o1)(e.sticker.id) && P(e.sticker.id),
                                    x?.(e, n));
                            },
                            onContextMenu: function (e) {
                                (0, tl.L3)(e, async () => {
                                    let { default: e } = await Promise.all([n.e("904774"), n.e("446132")]).then(
                                        n.bind(n, 233503),
                                    );
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                            style: L,
                            "data-type": ei.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, l.jsx)(tt.A, { children: (0, ep.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !v && (0, l.jsx)("div", { className: ta.fw }),
                                        (0, l.jsx)(ep.A, {
                                            className: r()(ta.SI, {
                                                [ta.ot]:
                                                    v && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [ta.Q$]: c,
                                                [ta.No]: m,
                                                [ta.UK]: o,
                                            }),
                                            disableAnimation: !u && !s,
                                            enlargeOnInteraction: v,
                                            isInteracting: u,
                                            maskAsset: u,
                                            sticker: e.sticker,
                                            size: y,
                                        }),
                                        g ? (0, l.jsx)(tr, { size: 20 }) : null,
                                        o
                                            ? (0, l.jsx)("div", {
                                                  className: ta.MC,
                                                  children: (0, l.jsx)(tn.LockIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: ta.hz,
                                                  }),
                                              })
                                            : null,
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
function tu(e) {
    let { descriptor: t, currentUser: n, channel: l, onSelect: i } = e;
    switch ((0, eY.W$)(t.sticker, n, l)) {
        case eY.Ux.SENDABLE:
            i(t);
            break;
        case eY.Ux.SENDABLE_WITH_PREMIUM:
            ee(!0);
        case eY.Ux.SENDABLE_WITH_BOOSTED_GUILD:
        case eY.Ux.NONSENDABLE:
    }
}
var tc = n(457231);
let td = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    th = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    tm = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    tf = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tp = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tg = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tx = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tA = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tC = (0, q.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tE = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tI = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    ty = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tS = [tm, tp, tg, tx],
    tv = [tf, tp, tg, tx],
    tN = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    t_ = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tj(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: tc.yB,
        children: t_.map((e) =>
            (0, l.jsx)(
                f.D,
                {
                    className: tc.x_,
                    onClick: () => t(e),
                    children: (0, l.jsx)(eM.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
let tb = i.forwardRef(function (e, t) {
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
            C = tE + 2 * c,
            E = i.useRef(!1),
            I = i.useRef(null),
            [y, S] = U.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], M.x),
            { analyticsLocations: v } = (0, D.Ay)(P.A.STICKER_PICKER),
            N = (0, V.RQ)((e) => e.searchQuery),
            _ = (0, d.bG)([T.A], () => T.A.getPremiumPacks()),
            j = W("web.StickerPickerList"),
            {
                renderRow: b,
                renderSection: R,
                renderSectionFooter: O,
                sectionFooterHeight: L,
                renderSectionHeader: k,
                sectionHeaderHeight: F,
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
                        upsellRestyleEnabled: C,
                    } = e,
                    E = (0, w.p)(),
                    I = (0, d.bG)([Z.default], () => Z.default.getCurrentUser()),
                    y = i.useMemo(
                        () =>
                            C
                                ? p.map((e) => ({
                                      ...e,
                                      isNitroLocked:
                                          e.type === en.Z2.GUILD &&
                                          0 !== e.stickers.length &&
                                          e.stickers.every((e) => (0, eY.W$)(e, I, A) === eY.Ux.SENDABLE_WITH_PREMIUM),
                                  }))
                                : p,
                        [p, A, I, C],
                    ),
                    { handleStickerInspect: S, handleSelect: v } = (function (e) {
                        let { onSelectSticker: t, channel: n, currentUser: l } = e,
                            s = (0, w.p)(),
                            r = (0, V.RQ)((e) => e.searchQuery);
                        return {
                            handleStickerInspect: i.useCallback((e) => {
                                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: l } = e;
                                (U.bM.setActiveCategoryIndex(l),
                                    U.bM.setInspectedExpressionPosition(n, t, ei.t.MOUSE_EVENT),
                                    e.type === en.op.STICKER && U.bM.setSearchPlaceholder(e.sticker.name));
                            }, []),
                            handleSelect: i.useCallback(
                                (e, i) => {
                                    if (e.type !== en.op.STICKER) return;
                                    let { sticker: a } = e;
                                    if (null == a) return;
                                    let o = {
                                        ...s.location,
                                        object:
                                            "" === r ? eg.ZSU.STICKER_PICKER_VIEW_ALL : eg.ZSU.STICKER_SEARCH_VIEW_ALL,
                                    };
                                    (0, eY.W$)(a, l, n) !== eY.Ux.SENDABLE
                                        ? tu({ descriptor: e, currentUser: l, channel: n, onSelect: t })
                                        : i
                                          ? (0, ef.o1)(a.id)
                                              ? (0, eq.vr)(a.id)
                                              : ((0, et.Dt)({ sticker: a, location: { ...o, object: eg.ZSU.STICKER } }),
                                                (0, eq.uK)(a.id))
                                          : t(e);
                                },
                                [s.location, r, l, n, t],
                            ),
                        };
                    })({ onSelectSticker: r, channel: A, currentUser: I }),
                    [N, _] = i.useState(!1),
                    j = i.useCallback((e) => {
                        z.tP.updateSetting(Array.from(e));
                    }, []),
                    b = i.useCallback(
                        (e) => {
                            let t = f[e],
                                i = t?.[0]?.gridSectionIndex,
                                r = null == g && null != i && y[i]?.isNitroLocked === !0;
                            return null != t
                                ? (0, l.jsx)(
                                      to,
                                      {
                                          getStickerItemProps: a,
                                          getStickerRowProps: o,
                                          gutterWidth: u,
                                          inspectedStickerPosition: c,
                                          isScrolling: h,
                                          isUsingKeyboardNavigation: m,
                                          onInspect: S,
                                          onSelect: v,
                                          rowIndex: e,
                                          stickerClassName: tc.yI,
                                          stickerDescriptors: t,
                                          stickerSize: n > td ? tE : tI,
                                          stickerPadding: s,
                                          preferAnimation: n <= th,
                                          ownedStickerPacks: x,
                                          isDisplayingIndividualStickers: !0,
                                          channel: A,
                                          currentUser: I,
                                          upsellRestyleEnabled: C,
                                          isSectionNitroLocked: r,
                                      },
                                      e,
                                  )
                                : null;
                        },
                        [f, a, o, u, c, h, m, S, v, n, s, x, A, I, g, y, C],
                    ),
                    R = i.useCallback((e, t) => (0, l.jsx)("div", { children: t }, e), []),
                    O = i.useCallback(
                        function (e) {
                            let { isStickerPack: n = !0 } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                l = new Set(t),
                                i = t.has(e);
                            (i ? l.delete(e) : l.add(e),
                                Y.default.track(eg.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                    location: E?.location,
                                    tab: ex.kx.STICKER,
                                    collapsed: !i,
                                    sticker_pack_id: n ? e : null,
                                }),
                                j(l));
                        },
                        [E, t, j],
                    ),
                    M = i.useCallback(
                        (e) => {
                            let n = p[e];
                            if (null != g) {
                                let { sendable: t, sendableWithPremium: n } = g;
                                if (0 === e && t.length > 0) return null;
                                let i = t.length > 0 && n.length > 0;
                                return (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        i
                                            ? (0, l.jsx)("div", { className: tc.yF, children: (0, l.jsx)(eW.c, {}) })
                                            : null,
                                        (0, l.jsx)(
                                            eZ.A,
                                            {
                                                className: tc.jH,
                                                "aria-label": eA.intl.string(eA.t.wbfJFh),
                                                children: eA.intl.string(eA.t["05Z/0l"]),
                                            },
                                            "stickers-you-might-like-header",
                                        ),
                                    ],
                                });
                            }
                            switch (n.type) {
                                case en.Z2.FAVORITE:
                                    return (0, l.jsx)(
                                        eZ.A,
                                        {
                                            className: tc.jH,
                                            "aria-label": eA.intl.formatToPlainString(eA.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, l.jsx)(es.StarIcon, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => O(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case en.Z2.RECENT:
                                    return (0, l.jsx)(
                                        eZ.A,
                                        {
                                            className: tc.jH,
                                            "aria-label": eA.intl.formatToPlainString(eA.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, l.jsx)(er.ClockIcon, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => O(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case en.Z2.GUILD:
                                case en.Z2.EMPTY_GUILD_UPSELL: {
                                    let e = em.A.getGuild(n.id);
                                    if (null == e) return null;
                                    return (0, l.jsx)(
                                        eZ.A,
                                        {
                                            className: tc.jH,
                                            "aria-label": eA.intl.formatToPlainString(eA.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, l.jsx)(ec.A, { guild: e, height: 16, width: 16 }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => O(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                                case en.Z2.PACK: {
                                    let e = T.A.getStickerPack(n.id);
                                    if (null == e) return null;
                                    return (0, l.jsx)(
                                        eZ.A,
                                        {
                                            className: tc.jH,
                                            "aria-label": eA.intl.formatToPlainString(eA.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, l.jsx)(ep.A, {
                                                disableAnimation: !0,
                                                size: 12,
                                                sticker: (0, ef.Id)(e),
                                            }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => O(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                            }
                        },
                        [t, p, O, g],
                    ),
                    L = i.useCallback(
                        (e) => {
                            if (null != g) {
                                let { sendable: t, sendableWithPremium: n } = g;
                                return 0 === e && t.length > 0 ? 0 : tC + (t.length > 0 && n.length > 0 ? tA : 0);
                            }
                            return tC;
                        },
                        [g],
                    );
                return {
                    renderRow: b,
                    renderSection: R,
                    renderSectionHeader: M,
                    sectionHeaderHeight: L,
                    renderSectionFooter: i.useCallback(
                        (e) => {
                            let n = p[e],
                                i = t.has(n.id);
                            return n.type !== en.Z2.EMPTY_GUILD_UPSELL || null != g || i
                                ? null
                                : (0, l.jsx)(
                                      e8,
                                      {
                                          className: tc.Ij,
                                          guildId: n.id,
                                          channel: A,
                                          shouldTrackUpsellViewed: !N,
                                          setTrackedUpsellViewed: _,
                                      },
                                      `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                  );
                        },
                        [p, t, g, A, N],
                    ),
                    sectionFooterHeight: i.useCallback(
                        (e) => {
                            let n = p[e],
                                l = t.has(n.id);
                            return n.type !== en.Z2.EMPTY_GUILD_UPSELL || l ? 0 : tN;
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
                upsellRestyleEnabled: j,
            }),
            H = (0, G.Fk)({
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
                    className: tc.iE,
                    children: [
                        null != r && 0 === r.sendable.length && 0 === r.sendableWithPremium.length
                            ? (0, l.jsx)(eK.A, {
                                  message: eA.intl.string(eA.t["zc+LQd"]),
                                  className: tc.__invalid_noSearchResultsContainer,
                                  suggestions: (0, l.jsx)(tj, { onSuggestionClick: (e) => (0, V.Ri)(e, !0) }),
                              })
                            : (0, l.jsx)(ez.A, {
                                  role: "none presentation",
                                  listPadding: null != r ? tv : tS,
                                  onScroll: H,
                                  renderRow: b,
                                  renderSection: null == r ? R : void 0,
                                  renderSectionHeader: k,
                                  renderSectionFooter: O,
                                  rowCount: f,
                                  rowCountBySection: p,
                                  rowHeight: s > td ? C + ty : tI + 2 * c + ty,
                                  sectionHeaderHeight: F,
                                  sectionFooterHeight: L,
                                  stickyHeaders: !0,
                                  ref: I,
                              }),
                        (0, l.jsx)(te, { stickersGrid: x }),
                    ],
                }),
            })
        );
    }),
    tT = (0, H.mj)({
        name: "2026-02-sticker-padding",
        kind: "user",
        defaultConfig: { padding: 2 },
        variations: { 1: { padding: 1 } },
    });
var tR = n(602034),
    tO = n(683438),
    tM = n(909802);
let tL = i.forwardRef(function (e, t) {
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
            className: tM.i,
            children: (0, l.jsx)(tO.I, {
                autoFocus: a,
                disabled: !a,
                query: u,
                ref: o,
                placeholder: d ?? (a ? eA.intl.string(eA.t.dt5h1C) : eA.intl.string(eA.t["Pck/4U"])),
                onClear: p,
                onKeyDown: n,
                onChange: f,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": eG.lq,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, tR.Aq)(eG.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
});
n(321073);
var tk = n(802842),
    tw = n(330422),
    tP = n(609178),
    tD = n(158045);
function tU(e) {
    let { onUpsellClicked: t } = e,
        { location: n } = (0, w.p)(),
        { analyticsLocations: i } = (0, D.Ay)(P.A.STICKER_PICKER),
        s = (0, V.RQ)((e) => e.searchQuery);
    return (0, l.jsx)(tP.A, {
        title: eA.intl.string(eA.t.Eukdgl),
        description: eA.intl.string(eA.t.sMmd7s),
        analyticsLocationSection: eg.JJy.STICKER_PICKER_UPSELL,
        onClose: () => ee(!1),
        onUpsellClicked: t,
        upsellViewedTrackingData: {
            type: eF.e.STICKER_PICKER_UPSELL,
            location: { ...n, object: eg.ZSU.STICKER },
            location_stack: i,
            sku_id: (0, tD.mH)(tD.Ay.getSkuIdForPremiumType(eF.PremiumTypes.TIER_2)),
            has_search_query: "" !== s,
        },
        graphic: (0, l.jsx)(tw.n, { alt: "", ariaHidden: !0 }),
        useNitroGradient: !0,
    });
}
var tV = n(789645),
    tG = n(964486),
    tF = n(420136),
    tH = n(939383);
function tB() {
    return ee(!1);
}
function tW(e) {
    let { onLearnMore: t } = e,
        { analyticsLocations: n } = (0, D.Ay)(P.A.PREMIUM_UPSELL);
    (0, i.useEffect)(() => {
        (Y.default.track(eg.HAw.PREMIUM_UPSELL_VIEWED, {
            location_section: eg.JJy.STICKER_PICKER_UPSELL,
            type: eF.e.STICKER_PICKER_UPSELL,
            location_stack: n,
        }),
            (0, eL.sq)(eg.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, ek.uq)(eF.e.STICKER_PICKER_UPSELL)));
    }, [n]);
    let s = (0, i.useRef)(null);
    (0, tG.Ay)(() => {
        s.current?.focus();
    });
    let a = (0, K.V)(),
        o = (0, ew.O)(),
        u = a?.subscriptionTrial?.skuId === eF.pe.TIER_0,
        c = null != a || null != o;
    return (0, l.jsxs)("div", {
        ref: s,
        tabIndex: -1,
        "aria-label": eA.intl.string(eA.t.jJG1pl),
        className: r()(tF.VL, { [tF.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eP.Ay, {
                      trialOffer: a,
                      discountOffer: o,
                      onClose: tB,
                      type: eF.e.STICKER_PICKER_UPSELL,
                      subscriptionTier: a?.subscriptionTrial?.skuId ?? eF.pe.TIER_2,
                      children: u
                          ? eA.intl.format(eA.t.MAGagw, {
                                planName: (0, tD.RH)(eF.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : eA.intl.format(eA.t.jt7JX6, { onClick: t }),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: tF.Tn, src: tH, alt: eA.intl.string(eA.t.do7AoM) }),
                          (0, l.jsx)(eM.E, {
                              className: tF.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: eA.intl.string(eA.t.jJG1pl),
                          }),
                          (0, l.jsx)(eM.E, {
                              className: tF.GR,
                              variant: "text-md/normal",
                              children: eA.intl.format(eA.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eV, { analyticsSection: eg.JJy.EXPRESSION_PICKER }),
            (0, l.jsx)(f.D, {
                className: tF.kz,
                onClick: tB,
                "aria-label": eA.intl.string(eA.t.cpT0Cq),
                children: (0, l.jsx)(tV.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var tK = n(970099);
let tz = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tZ = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tY = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tq = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tJ = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    t$ = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tX = (0, q.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tQ = O()(et.Qz, 200),
    t0 = O()(et.HA, 200),
    t1 = i.forwardRef(function (e, t) {
        let { containerWidth: s, channel: r, onSelectSticker: a, closePopout: o } = e,
            u = tT.useConfig({ location: "StickerPicker" }).padding,
            c = W("web.StickerPicker"),
            { location: h } = (0, w.p)(),
            { analyticsLocations: f } = (0, D.Ay)(P.A.STICKER_PICKER),
            p = (0, K.V)()?.subscriptionTrial != null,
            g = i.useRef(null),
            x = i.useRef(null),
            A = i.useRef(null),
            C = Q((e) => e.showPremiumUpsell),
            [E, I] = (0, V.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], M.x),
            y = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: ef }));
        let S = (0, b.pD)(r),
            v = 0 === S.filter((e) => e.type !== en.Z2.EMPTY_GUILD_UPSELL).length,
            N = (0, G.oV)({
                gridWrapperRef: g,
                containerWidth: s,
                showingEmptyState: v,
                listPaddingLeft: tZ,
                listScrollbarWidth: 8,
            }),
            _ = z.tP.useSetting(),
            j = i.useMemo(() => new Set(_), [_]),
            R = (0, d.bG)([Z.default], () => Z.default.getCurrentUser()),
            O = i.useMemo(
                () =>
                    (function (e, t, n) {
                        if ("" === e) return null;
                        let l = [],
                            i = [];
                        return (
                            tk.Ay.queryStickers([e], !0)
                                .map((e) => {
                                    let { sticker: t } = e;
                                    return t;
                                })
                                .forEach((e) => {
                                    let s = (0, eY.W$)(e, t, n);
                                    s === eY.Ux.SENDABLE ? l.push(e) : s === eY.Ux.SENDABLE_WITH_PREMIUM && i.push(e);
                                }),
                            { sendable: l, sendableWithPremium: i }
                        );
                    })(E, R, r),
                [E, R, r],
            ),
            L = (0, b.Gc)(),
            k = (0, b.UT)(),
            H = (0, d.cf)([T.A], () => T.A.getAllGuildStickers()),
            { sendable: B = [], sendableWithPremium: q = [] } = O ?? {},
            J = B.length + q.length,
            $ = i.useCallback(
                (e) => {
                    ("" === E ? (0, et.ry)(e) : (0, et.nQ)(e, E, J), a(e.sticker, en.D6.STICKER_PICKER));
                },
                [a, E, J],
            ),
            X = null != N && N > tz,
            {
                rowCount: ee,
                rowCountBySection: es,
                stickersGrid: er,
                gutterWidth: ea,
                columnCounts: eo,
            } = (0, b._c)({
                filteredStickers: O,
                stickersCategories: S,
                collapsedStickersCategories: j,
                listWidth: N,
                listPaddingRight: tY,
                stickerNodeMargin: X ? tq : tJ,
                stickerNodeWidth: X ? t$ + 2 * u : tX + 2 * u,
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
                            a(e, t, ei.t.GRID_NAVIGATOR_EVENT);
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
                                    l !== ei.t.GRID_NAVIGATOR_EVENT &&
                                        h({ type: el.n.SET_FOCUSED_POSITION, x: t, y: n });
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
                stickersListRef: x,
                stickersGrid: er,
                onGridItemSelect: i.useCallback(
                    (e, t) => {
                        let { location: i } = t;
                        switch (e.type) {
                            case en.op.CREATE_STICKER:
                                (Y.default.track(eg.HAw.OPEN_MODAL, { type: eg.JJy.CREATE_STICKER_MODAL, location: h }),
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
                            case en.op.STICKER:
                                if (null == e.sticker) break;
                                tu({ descriptor: e, currentUser: R, channel: r, onSelect: $ });
                        }
                    },
                    [h, R, r, $],
                ),
                store: U.bM,
                setInspectedStickerPosition: U.bM.setInspectedExpressionPosition,
                gridNavigatorId: eG.lq,
            });
        function ef() {
            let e = r.getGuildId(),
                t = [];
            null !== e && (t = T.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            (null != H &&
                [...H.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, et.p4)({
                    containerWidth: s,
                    favoriteStickers: L,
                    frequentlyUsedStickers: k,
                    guildStickers: t,
                    stickersTotal: n,
                }));
        }
        (i.useEffect(() => U.bM.resetStoreState, []),
            i.useEffect(() => {
                ("" === y.current && "" !== E && (0, et.Fg)(), (y.current = E));
            }, [E]),
            i.useEffect(() => {
                0 === J ? tQ(E) : t0(E, J, I);
            }, [E, J, I]),
            i.useLayoutEffect(() => {
                A.current?.focus();
            }, []));
        let ep = i.useCallback(() => {
            (o(),
                Y.default.track(eg.HAw.PREMIUM_PROMOTION_OPENED, { location_section: eg.JJy.STICKER_PICKER_UPSELL }),
                (0, F.e)());
        }, [o]);
        return (0, l.jsxs)(D.f5, {
            value: f,
            children: [
                !(p && v) &&
                    (0, l.jsx)("div", {
                        className: tK.wx,
                        children: (0, l.jsx)(tL, { ref: A, onKeyDown: eh, stickersListRef: x, channel: r }),
                    }),
                v
                    ? (0, l.jsx)(eB, { className: tK.p$, onClose: o })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  ref: g,
                                  className: tK.AD,
                                  id: eG.lq,
                                  ...ed,
                                  children:
                                      null != N
                                          ? (0, l.jsx)(tb, {
                                                ref: x,
                                                collapsedStickersCategories: j,
                                                filteredStickers: O,
                                                getStickerItemProps: eu,
                                                getStickerRowProps: ec,
                                                gridWidth: N,
                                                gutterWidth: ea,
                                                stickerPadding: u,
                                                isUsingKeyboardNavigation: em,
                                                onSelectSticker: $,
                                                rowCount: ee,
                                                rowCountBySection: es,
                                                stickersCategories: S,
                                                stickersGrid: er,
                                                channel: r,
                                            })
                                          : null,
                              }),
                              (0, l.jsx)(eR, { stickersListRef: x, channel: r }),
                          ],
                      }),
                C && (c ? (0, l.jsx)(tU, { onUpsellClicked: o }) : (0, l.jsx)(tW, { onLearnMore: ep })),
            ],
        });
    }),
    t2 = i.forwardRef(function (e, t) {
        return (
            (0, b.XQ)(),
            (0, l.jsx)("div", {
                className: tK.iE,
                id: eG.GX,
                "aria-labelledby": eG.LD,
                role: "tabpanel",
                children: e.isLoading ? (0, l.jsx)(k.y, { className: tK.Mz }) : (0, l.jsx)(t1, { ...e, ref: t }),
            })
        );
    });
var t3 = n(742023),
    t8 = n(712687),
    t6 = n(625494),
    t5 = n(49999),
    t7 = n(732139),
    t4 = n(307731),
    t9 = n(818625);
let ne = 498 + t7.as.MEDIUM,
    nt = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: s = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(f.D, {
            role: "tab",
            autoFocus: s,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                (E.Ay.trackWithMetadata(eg.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, V.U)(i));
            },
            "aria-current": t ? "page" : void 0,
            className: r()(n, t9.oi, t9.pc, { [t9.Mv]: t }),
        });
    }),
    nn = i.memo(function (e) {
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
                    s = (0, d.bG)([t3.Ay], () => t3.Ay.expressionPickerWidth),
                    [r, a] = i.useState(window.innerWidth),
                    [u, c] = i.useState(s ?? ex.wp.MIN),
                    h = i.useMemo(() => {
                        switch (u) {
                            case ex.wp.MIN:
                                return 498;
                            case ex.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    m = i.useCallback(
                        (e) => {
                            let t = e >= r ? ex.wp.MAX : e <= 498 ? ex.wp.MIN : e;
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
            $ = (0, d.bG)([t8.A], () => t8.A.isOpen()),
            X = null != D,
            Q = (0, m.useIsModalAtTop)(D ?? ""),
            ee = M.gifs?.allowSending && !u.Fr && null != s,
            et = M.stickers?.allowSending && null != f,
            en = !M.expressionPicker?.onlyEmojis && (ee || et),
            el = i.useCallback(
                (e) => {
                    if ((!X && (0, m.hasAnyModalOpen)()) || (X && !(Q && P)) || $ || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + ex.VQ)) return;
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
                    (null == n || "BODY" === n.tagName) && t6._.dispatchToLastSubscribed(eg.jej.TEXTAREA_FOCUS);
                },
                [P, Q, X, $],
            ),
            ei = i.useCallback(() => {
                (0, V.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                K === ex.kx.GIF && (0, V.v8)();
            }
            return (
                Z.addEventListener("mousedown", el),
                Z.addEventListener("contextmenu", el),
                Y.subscribe(eg.jej.POPOUT_CLOSE, ei),
                t6._.subscribe(eg.jej.CLOSE_GIF_PICKER, e),
                () => {
                    (Z.removeEventListener("mousedown", el),
                        Z.removeEventListener("contextmenu", el),
                        Y.unsubscribe(eg.jej.POPOUT_CLOSE, ei),
                        t6._.unsubscribe(eg.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [K, ei, el, Z, Y]),
            (0, p.tj)(U));
        let [es, er] = (0, I.kn)(J ? [h.M.SOUNDMOJI_BADGE] : [], void 0, !1),
            [ea, eo] = i.useState(!1);
        (i.useEffect(() => {
            K === ex.kx.SOUNDBOARD && eo(!0);
        }, [K]),
            i.useEffect(
                () => () => {
                    ea && er(t5.i.TAKE_ACTION);
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
                    (K === ex.kx.EMOJI
                        ? F?.current?.onPickerOpen != null && (F?.current?.onPickerOpen(), (G.current = !0))
                        : K === ex.kx.STICKER
                          ? F?.current?.onPickerOpen == null || q || (F?.current?.onPickerOpen(), (G.current = !0))
                          : (E.Ay.trackWithMetadata(eg.HAw.EXPRESSION_PICKER_OPENED, {
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
            em = null != w ? w : "left" === k ? t9.sj : t9.Jg,
            ef = ee
                ? (0, l.jsx)(nt, {
                      id: t7.g9,
                      "aria-controls": t7.ni,
                      "aria-selected": K === ex.kx.GIF,
                      isActive: K === ex.kx.GIF,
                      viewType: ex.kx.GIF,
                      children: eA.intl.string(eA.t["6gUTsS"]),
                  })
                : null,
            ep = et
                ? (0, l.jsx)(nt, {
                      id: eG.LD,
                      "aria-controls": eG.GX,
                      "aria-selected": K === ex.kx.STICKER,
                      isActive: K === ex.kx.STICKER,
                      autoFocus: !z,
                      viewType: ex.kx.STICKER,
                      children: (0, l.jsx)("div", { className: t9.dG, children: eA.intl.string(eA.t.nf1s3u) }),
                  })
                : null,
            eC = (0, l.jsx)(nt, {
                id: t7.k1,
                "aria-controls": t7.Do,
                "aria-selected": K === ex.kx.EMOJI,
                isActive: K === ex.kx.EMOJI,
                viewType: ex.kx.EMOJI,
                children: eA.intl.string(eA.t.Xu3wE3),
            });
        return (0, l.jsx)(A.A, {
            section: eg.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(v.nE, {
                className: r()(t9.T8, em),
                targetRef: t,
                position: L,
                align: k,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: r()(t9.V6, { [t9.D0]: !en }),
                        ref: U,
                        role: "dialog",
                        "aria-label": eA.intl.string(eA.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: t9.jP,
                                  style: { width: null == B ? void 0 : B, [k]: 0 },
                                  ref: H,
                                  children: [
                                      (0, l.jsx)("div", { className: t9.Di, onMouseDown: W, style: { [eh]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: t9.FG,
                                          children: [
                                              en
                                                  ? (0, l.jsx)("nav", {
                                                        className: t9.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: t9.CT,
                                                            role: "tablist",
                                                            "aria-label": eA.intl.string(eA.t["2j4Vgd"]),
                                                            children: [
                                                                ef,
                                                                ep,
                                                                eC,
                                                                J &&
                                                                    ed &&
                                                                    (0, l.jsx)(nt, {
                                                                        id: t7.N6,
                                                                        "aria-controls": t7.AA,
                                                                        "aria-selected": K === ex.kx.SOUNDBOARD,
                                                                        isActive: K === ex.kx.SOUNDBOARD,
                                                                        viewType: ex.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: t9.sd,
                                                                            children: [
                                                                                eA.intl.string(eA.t.EHlAMc),
                                                                                null != es &&
                                                                                    (0, l.jsx)(g.Lp, {
                                                                                        text: eA.intl.string(
                                                                                            eA.t.y2b7CA,
                                                                                        ),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              K === ex.kx.STICKER && et
                                                  ? (0, l.jsx)(t2, {
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
                                              K === ex.kx.GIF && ee
                                                  ? (0, l.jsx)(S.A, {
                                                        onSelectGIF: s,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              K === ex.kx.EMOJI || M.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(y.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: O,
                                                        containerWidth: B,
                                                        emojiSize: null != B && B < ne ? t7.as.MEDIUM : t7.as.LARGE,
                                                        pickerIntention:
                                                            M.expressionPicker?.emojiIntention ??
                                                            t4.EmojiIntention.CHAT,
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
                                              K === ex.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: t9.z,
                                                        children: (0, l.jsx)(j.A, {
                                                            guildId: O.guild_id,
                                                            channel: O,
                                                            containerWidth: B,
                                                            onClose: ei,
                                                            onSelect: ec,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: t9.BG, children: e }),
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
