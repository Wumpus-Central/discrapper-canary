n.d(t, { A: () => na });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(435558),
    o = n.n(a),
    u = n(607399),
    c = n(621466),
    d = n(17928),
    m = n(554146),
    h = n(192308),
    p = n(939249),
    f = n(315710),
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
    L = n(462180),
    M = n(319060),
    k = n(289873),
    w = n(212245),
    P = n(793574),
    D = n(688810),
    U = n(850992),
    V = n(151271),
    G = n(887695),
    F = n(87719),
    B = n(945810);
let H = (0, B.mj)({
    name: "2026-09-web-sticker-picker-upsell-restyle",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
function W(e) {
    return H.useConfig({ location: e });
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
    em = n(941971),
    eh = n(71393),
    ep = n(68935),
    ef = n(148355),
    eg = n(361670);
function ex(e, t, n, l) {
    return i.useMemo(
        () =>
            l
                ? e.map((e) => ({
                      ...e,
                      isNitroLocked:
                          e.type === en.Z2.GUILD &&
                          0 !== e.stickers.length &&
                          e.stickers.every((e) => (0, eg.W$)(e, t, n) === eg.Ux.SENDABLE_WITH_PREMIUM),
                  }))
                : e,
        [e, n, t, l],
    );
}
var eA = n(652215),
    eC = n(698279),
    eE = n(375708),
    eI = n(161975);
let ey = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    eS = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    ev = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eN = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    e_ = (0, q.xI)(M.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    ej = (0, q.xI)(M.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    eb = [ey, ey, ey, ey],
    eT = (eS + ev) * 2 + ey,
    eR = e_ + 2 * ej;
function eO(e) {
    let { ariaLabel: t, children: n, className: s, isSelected: r, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, eu.A)(o);
    return (0, l.jsxs)(p.D, {
        innerRef: o,
        "aria-label": t,
        className: s,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: eI.a$,
                children: (0, l.jsx)(em.A, { hovered: u, selected: r, size: "small" }),
            }),
            n,
        ],
    });
}
let eL = (e) => {
    let { stickersListRef: t, channel: n } = e,
        s = i.useRef(null),
        [a, o] = i.useState(!0),
        u = U.bM.useStore((e) => e.activeCategoryIndex),
        c = ex(
            (0, b.pD)(n),
            (0, d.bG)([Z.default], () => Z.default.getCurrentUser()),
            n,
            W("web.StickerPickerCategoryList"),
        ),
        {
            firstStandardStickerCategoryIndex: m,
            firstStandardStickerCategoryOffsetTop: h,
            guildCategoryCount: f,
            hasFirstPartyStickerPacks: g,
        } = i.useMemo(() => {
            let e = c.filter((e) => e.type === en.Z2.GUILD).length,
                t = e + +(c[0]?.type === en.Z2.RECENT) + +(c[0]?.type === en.Z2.FAVORITE),
                n = t * (eS + ev) - ev + eR;
            return {
                firstStandardStickerCategoryIndex: t + 1,
                firstStandardStickerCategoryOffsetTop: n,
                guildCategoryCount: e,
                hasFirstPartyStickerPacks: null != c.find((e) => e.type === en.Z2.PACK),
            };
        }, [c]);
    i.useLayoutEffect(() => {
        o(f >= 7);
    }, [f]);
    let {
            renderCategoryListItem: x,
            rowHeight: A,
            onScroll: C,
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
                            m = +!!d,
                            h = n[m]?.type === en.Z2.RECENT,
                            p = n.length;
                        if (0 === s && d) {
                            let e = !c && 0 === t;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": p,
                                    "aria-posinset": s,
                                    children: (0, l.jsx)(eO, {
                                        ariaLabel: eE.intl.string(eE.t.y3LQCG),
                                        className: r()(eI._0, eI.dC, { [eI.k1]: e, [eI.ls]: !h }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(es.StarIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eI.AB,
                                            height: eN,
                                            width: eN,
                                        }),
                                    }),
                                },
                                "favorites",
                            );
                        }
                        if (s === m && h) {
                            let e = !c && t === m;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": p,
                                    "aria-posinset": s,
                                    children: (0, l.jsx)(eO, {
                                        ariaLabel: eE.intl.string(eE.t.RxAmVC),
                                        className: r()(eI._0, eI.dC, eI.ls, { [eI.k1]: e }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(er.ClockIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eI.AB,
                                            height: eN,
                                            width: eN,
                                        }),
                                    }),
                                },
                                "recent",
                            );
                        }
                        let f = t === s,
                            g = !c && f,
                            x = n[s],
                            A = n[s + 1],
                            C = null != A && x.type === en.Z2.GUILD && A.type !== en.Z2.GUILD,
                            E = x.type === en.Z2.PACK,
                            I = "",
                            y = null;
                        if (x.type === en.Z2.GUILD || x.type === en.Z2.EMPTY_GUILD_UPSELL) {
                            let e = eh.A.getGuild(x.id);
                            null != e &&
                                ((o = e.id),
                                (I = e.name),
                                (y = (0, l.jsx)(ec.A, { guild: e, isSelected: f, isLocked: !0 === x.isNitroLocked })));
                        } else if (E) {
                            let e = T.A.getStickerPack(x.id);
                            null != e &&
                                ((I = e.name),
                                (y = (0, l.jsx)(ef.A, {
                                    disableAnimation: !f || c,
                                    size: eS,
                                    sticker: (0, ep.Id)(e),
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
                                            "aria-setsize": p,
                                            "aria-posinset": s,
                                            children: (0, l.jsx)(eO, {
                                                ariaLabel: I,
                                                className: r()(eI._0, { [eI.ND]: E, [eI.Ms]: g && E }),
                                                isSelected: g,
                                                onClick: () => {
                                                    (x.type === en.Z2.PACK &&
                                                        Y.default.track(eA.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: u?.location,
                                                            tab: eC.kx.STICKER,
                                                            sticker_pack_id: x.id,
                                                            guild_id: o,
                                                        }),
                                                        a());
                                                },
                                                children: y,
                                            }),
                                        }),
                                    }),
                                    C ? (0, l.jsx)("hr", { className: eI.ny }, "separator") : null,
                                ],
                            },
                            x.id,
                        );
                    },
                    [t, u, c, n],
                ),
                m = i.useCallback((e, t) => (t ? eT : 0), []);
            return {
                getScrollOffsetForIndex: m,
                renderCategoryListItem: d,
                rowHeight: i.useCallback(
                    (e, t) => {
                        let l = n[t],
                            i = n[t + 1];
                        return eS + (null != i && l.type === en.Z2.GUILD && i.type !== en.Z2.GUILD ? eR : ev);
                    },
                    [n],
                ),
                onScroll: i.useCallback(
                    (e) => {
                        let t = s.current?.getListDimensions();
                        null == t || o(e + t.height - e_ < a);
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
                (e(m), s.current?.scrollTo(h));
            },
            [m, h],
        );
    return (0, l.jsx)(ed.A, {
        className: eI.jv,
        categoryListRef: s,
        expressionsListRef: t,
        store: U.bM,
        listPadding: eb,
        onScroll: C,
        renderCategoryListItem: x,
        rowCount: c.length,
        categories: c,
        categoryHeight: A,
        children: (e) =>
            g &&
            a &&
            (0, l.jsx)(p.D, {
                className: r()(eI.Fe, { [eI.Q6]: !a }),
                onClick: () => E(e),
                children: (0, l.jsx)(eo.t, { size: "md", color: "currentColor" }),
            }),
    });
};
var eM = n(297264),
    ek = n(834730),
    ew = n(10392),
    eP = n(82498),
    eD = n(724651),
    eU = n(811611),
    eV = n(821609),
    eG = n(403581);
function eF(e) {
    let { analyticsSection: t, buttonText: i } = e;
    return (0, l.jsx)(eV.$, {
        variant: "expressive",
        icon: eG.t,
        text: i ?? eE.intl.string(eE.t["8Sh5fg"]),
        onClick: () => {
            var e;
            return (
                (e = { section: t }),
                void (Y.default.track(eA.HAw.OPEN_MODAL, {
                    type: eA.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
                    location: e,
                }),
                (0, h.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("71169"),
                        n.e("331584"),
                        n.e("532039"),
                        n.e("353274"),
                    ]).then(n.bind(n, 397313));
                    return (t) => (0, l.jsx)(e, { ...t });
                }))
            );
        },
    });
}
var eB = n(823894),
    eH = n(202541),
    eW = n(768857);
function eK(e) {
    let { className: t, onClose: n } = e;
    (0, b.XQ)();
    let { analyticsLocations: s } = (0, D.Ay)(P.A.EMPTY_STATE),
        a = (0, d.yK)([T.A], () => eB.vX.map((e) => T.A.getStickerById(e)));
    i.useEffect(() => {
        (Y.default.track(eA.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eH.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: eA.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: s,
        }),
            (0, ew.sq)(eA.U7l.PREMIUM_UPSELL_VIEWED, s, () => (0, eP.uq)(eH.e.EMPTY_STICKER_PICKER_UPSELL)));
    }, [s]);
    let o = (0, K.V)(),
        u = (0, eD.O)(),
        c = null != o || null != u;
    return (0, l.jsxs)("div", {
        className: r()(eW.p$, t, { [eW.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eU.Ay, {
                      discountOffer: u,
                      trialOffer: o,
                      onClose: n,
                      type: eH.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscriptionTrial?.skuId ?? eH.pe.TIER_2,
                      children: eE.intl.string(eE.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eM.D, {
                              className: eW.wx,
                              variant: "heading-xl/semibold",
                              children: eE.intl.string(eE.t.HEm04J),
                          }),
                          (0, l.jsx)(ek.E, {
                              className: eW.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: eE.intl.string(eE.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: eW.l1,
                              children: a
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(ef.A, { sticker: e, className: eW.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eF, { analyticsSection: eA.JJy.EXPRESSION_PICKER }),
        ],
    });
}
n(30146);
var ez = n(404778),
    eZ = n(537652),
    eY = n(962125),
    eq = n(286509),
    eJ = n(414872),
    e$ = n(631576),
    eX = n(369163),
    eQ = n(123292),
    e0 = n(631305),
    e1 = n(468689),
    e2 = n(931991),
    e3 = n(473145),
    e8 = n(625633),
    e5 = n(136123);
let e6 = function (e) {
    let { className: t, guildId: n, channel: s, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, w.p)(),
        { analyticsLocations: c } = (0, D.Ay)(),
        m = (0, d.bG)([eh.A], () => eh.A.getGuild(n)),
        { canManageAllExpressions: h } = (0, e2.nr)(m),
        p = null != m && 0 === (0, e3.aG)(m.premiumTier) && !m.features.has(eA.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        h &&
            p &&
            a &&
            ((0, E.zV)(eA.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: u,
                guild_id: m?.id,
                channel_id: s?.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: c,
            }),
            o(!0));
    }, [p, m, s, u, a, o, c, h]),
    null != m && h)
        ? p
            ? (0, l.jsxs)("div", {
                  className: r()(e5.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(eX.v, { size: "md", color: "currentColor", className: e5.Kk }),
                      (0, l.jsx)(ek.E, {
                          color: "interactive-text-default",
                          className: e5.rf,
                          variant: "text-sm/normal",
                          children: eE.intl.format(eE.t.AXWla1, { count: (0, e3.aG)(eA.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(eQ.Q, {
                          variant: "primary",
                          text: eE.intl.string(eE.t["Gb+BJD"]),
                          onClick: function () {
                              null != m &&
                                  (0, e0.A)({
                                      analyticsLocations: c,
                                      analyticsSourceLocation: u,
                                      guild: m,
                                      perks: (0, e8.q5)(),
                                  });
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: r()(e5.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(eo.t, {
                          size: "custom",
                          color: "currentColor",
                          className: e5.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, l.jsx)(ek.E, {
                          color: "interactive-text-default",
                          className: e5.rf,
                          variant: "text-sm/normal",
                          children: eE.intl.string(eE.t.S83wgh),
                      }),
                      (0, l.jsx)(eQ.Q, {
                          variant: "primary",
                          text: eE.intl.string(eE.t.bwNjug),
                          onClick: function () {
                              ((0, V.v8)(), e1.default.open(n, eA.BEX.STICKERS, u));
                          },
                      }),
                  ],
              })
        : null;
};
var e7 = n(307301),
    e4 = n(182922),
    e9 = n(683522);
let te = (0, q.xI)(M.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    tt = (0, q.xI)(M.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    tn = i.memo(function (e) {
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
                if ((!(0, ep.FD)(e) && !(0, ep.Xw)(e)) || (0, ep.Xw)(e)) {
                    let i = eh.A.getGuild(e.guild_id);
                    null != i &&
                        ((t = eE.intl.format(eE.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(ec.A, { guild: i })));
                } else if ((0, ep.FD)(e)) {
                    let i = T.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = eE.intl.format(eE.t.cZOkbs, { source: i.name })),
                        (n = (0, l.jsx)(ef.A, { size: tt, sticker: (0, ep.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(s),
            o =
                (0, ep.FD)(s) || (0, ep.Xw)(s)
                    ? (0, l.jsx)(ef.A, { isInteracting: !0, size: te, sticker: s, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: e9.P,
                          children: (0, l.jsx)(e7.j, { size: "md", color: "currentColor", className: e9.K }),
                      });
        return (0, l.jsx)(e4.A, {
            graphicPrimary: o,
            graphicSecondary: r,
            titlePrimary: s.name,
            titleSecondary: (0, ep.FD)(s) || (0, ep.Xw)(s) ? a : null,
        });
    });
var tl = n(140735),
    ti = n(194261),
    ts = n(442433),
    tr = n(304072),
    ta = n(513902);
let to = function (e) {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: ta.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(ti.LockIcon, { size: "xxs", color: "currentColor", className: ta.I }),
    });
};
var tu = n(777371);
let tc = i.memo(function (e) {
    let {
            isDisplayingIndividualStickers: t = !1,
            preferAnimation: s = !0,
            getStickerItemProps: o,
            getStickerRowProps: u,
            gutterWidth: c,
            inspectedStickerPosition: d,
            isScrolling: m,
            isUsingKeyboardNavigation: f,
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
        L = i.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${O}px)`,
                height: O,
                paddingRight: t ? void 0 : O,
            }),
            [t, c, O],
        ),
        M = i.useMemo(() => ({ width: y, height: y, padding: I }), [I, y]),
        [k, P] = (0, tr.A)(null, 300);
    return (0, l.jsx)("div", {
        className: tu.nM,
        style: L,
        ...u?.(A),
        children: E.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === en.op.STICKER && v && u,
                E = (0, a.throttle)(() => {
                    m?.current === !0 || f?.current === !0 || u || g?.(e);
                }, 250),
                { ref: I, tabIndex: O, onFocus: L, ...w } = o?.(e.columnIndex, A) ?? {};
            switch (e.type) {
                case en.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...w,
                            children: (0, l.jsxs)(p.D, {
                                "aria-label": e.name,
                                className: r()(tu.wP, C, { [tu.Kj]: u }),
                                innerRef: I,
                                tabIndex: O,
                                onFocus: L ?? E,
                                onMouseMove: E,
                                onClick: function () {
                                    e.type === en.op.CREATE_STICKER &&
                                        (Y.default.track(eA.HAw.OPEN_MODAL, {
                                            type: eA.JJy.CREATE_STICKER_MODAL,
                                            location: R,
                                        }),
                                        (0, h.openModalLazy)(async () => {
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
                                style: M,
                                children: [
                                    !v && (0, l.jsx)("div", { className: tu.fw }),
                                    (0, l.jsx)("div", {
                                        className: tu.P0,
                                        children: (0, l.jsx)(e7.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tu.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(ek.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: eE.intl.string(eE.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case en.op.STICKER: {
                    let a = (j ? (0, eg.W$)(e.sticker, _, N) : eg.Ux.SENDABLE) !== eg.Ux.SENDABLE,
                        o = b && a && !T,
                        h = !b && a,
                        g = t && null != S && (0, ep.FD)(e.sticker) && !S.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...w, key: e.sticker.id },
                        (0, l.jsxs)(p.D, {
                            className: r()(tu.yI, C, { [tu.PV]: u, [tu.TV]: k === e.sticker.id }),
                            innerRef: I,
                            tabIndex: O,
                            onFocus: L ?? E,
                            onMouseMove: E,
                            onClick: function (t) {
                                if (m?.current === !0 || f?.current === !0) return;
                                let n = t.altKey;
                                (n && e.type === en.op.STICKER && !(0, ep.o1)(e.sticker.id) && P(e.sticker.id),
                                    x?.(e, n));
                            },
                            onContextMenu: function (e) {
                                (0, ts.L3)(e, async () => {
                                    let { default: e } = await Promise.all([n.e("904774"), n.e("446132")]).then(
                                        n.bind(n, 233503),
                                    );
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                            style: M,
                            "data-type": ei.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, l.jsx)(tl.A, { children: (0, ef.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !v && (0, l.jsx)("div", { className: tu.fw }),
                                        (0, l.jsx)(ef.A, {
                                            className: r()(tu.SI, {
                                                [tu.ot]:
                                                    v && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [tu.Q$]: c,
                                                [tu.No]: h,
                                                [tu.UK]: o,
                                            }),
                                            disableAnimation: !u && !s,
                                            enlargeOnInteraction: v,
                                            isInteracting: u,
                                            maskAsset: u,
                                            sticker: e.sticker,
                                            size: y,
                                        }),
                                        g ? (0, l.jsx)(to, { size: 20 }) : null,
                                        o
                                            ? (0, l.jsx)("div", {
                                                  className: tu.MC,
                                                  children: (0, l.jsx)(ti.LockIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: tu.hz,
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
function td(e) {
    let { descriptor: t, currentUser: n, channel: l, onSelect: i } = e;
    switch ((0, eg.W$)(t.sticker, n, l)) {
        case eg.Ux.SENDABLE:
            i(t);
            break;
        case eg.Ux.SENDABLE_WITH_PREMIUM:
            ee(!0);
        case eg.Ux.SENDABLE_WITH_BOOSTED_GUILD:
        case eg.Ux.NONSENDABLE:
    }
}
var tm = n(457231);
let th = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tp = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    tf = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    tg = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tx = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tA = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tC = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tE = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tI = (0, q.xI)(M.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    ty = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tS = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tv = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tN = [tf, tx, tA, tC],
    t_ = [tg, tx, tA, tC],
    tj = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tb = "sticker-search-nitro",
    tT = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tR(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: tm.yB,
        children: tT.map((e) =>
            (0, l.jsx)(
                p.D,
                {
                    className: tm.x_,
                    onClick: () => t(e),
                    children: (0, l.jsx)(ek.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
function tO(e, t) {
    return null != t && 0 !== t.sendableWithPremium.length && e === +(t.sendable.length > 0);
}
function tL(e, t) {
    return null != t && 0 === e && t.sendable.length > 0 && t.sendableWithPremium.length > 0;
}
let tM = i.forwardRef(function (e, t) {
        let {
                collapsedStickersCategories: n,
                gridWidth: s,
                filteredStickers: a,
                getStickerItemProps: o,
                getStickerRowProps: u,
                gutterWidth: c,
                stickerPadding: m,
                isUsingKeyboardNavigation: h,
                onSelectSticker: p,
                rowCount: f,
                rowCountBySection: g,
                stickersCategories: x,
                stickersGrid: A,
                channel: C,
            } = e,
            E = ty + 2 * m,
            I = i.useRef(!1),
            y = i.useRef(null),
            [S, v] = U.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], L.x),
            { analyticsLocations: N } = (0, D.Ay)(P.A.STICKER_PICKER),
            _ = (0, V.RQ)((e) => e.searchQuery),
            j = (0, d.bG)([T.A], () => T.A.getPremiumPacks()),
            b = (0, d.bG)([Z.default], () => Z.default.getCurrentUser()),
            [R, O] = i.useState(0),
            M = W("web.StickerPickerList"),
            k = i.useMemo(() => new Set(j.map((e) => e.id)), [j]),
            {
                renderRow: F,
                renderSection: B,
                renderSectionFooter: H,
                sectionFooterHeight: K,
                renderSectionHeader: q,
                sectionHeaderHeight: J,
            } = (function (e) {
                let {
                        collapsedStickersCategories: t,
                        gridWidth: n,
                        stickerPadding: s,
                        onSelectSticker: a,
                        getStickerItemProps: o,
                        getStickerRowProps: u,
                        gutterWidth: c,
                        inspectedStickerPosition: d,
                        isScrolling: m,
                        isUsingKeyboardNavigation: h,
                        stickersGrid: p,
                        stickersCategories: f,
                        filteredStickers: g,
                        ownedStickerPacks: x,
                        channel: A,
                        currentUser: C,
                        activeSectionIndex: E,
                        upsellRestyleEnabled: I,
                    } = e,
                    y = (0, w.p)(),
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
                                            "" === r ? eA.ZSU.STICKER_PICKER_VIEW_ALL : eA.ZSU.STICKER_SEARCH_VIEW_ALL,
                                    };
                                    (0, eg.W$)(a, l, n) !== eg.Ux.SENDABLE
                                        ? td({ descriptor: e, currentUser: l, channel: n, onSelect: t })
                                        : i
                                          ? (0, ep.o1)(a.id)
                                              ? (0, e$.vr)(a.id)
                                              : ((0, et.Dt)({ sticker: a, location: { ...o, object: eA.ZSU.STICKER } }),
                                                (0, e$.uK)(a.id))
                                          : t(e);
                                },
                                [s.location, r, l, n, t],
                            ),
                        };
                    })({ onSelectSticker: a, channel: A, currentUser: C }),
                    [N, _] = i.useState(!1),
                    j = i.useCallback((e) => {
                        z.tP.updateSetting(Array.from(e));
                    }, []),
                    b = i.useCallback(
                        (e) => {
                            let t = p[e],
                                i = t?.[0]?.gridSectionIndex,
                                r = null != i && ((I && tO(i, g)) || (null == g && f[i]?.isNitroLocked === !0));
                            return null != t
                                ? (0, l.jsx)(
                                      tc,
                                      {
                                          getStickerItemProps: o,
                                          getStickerRowProps: u,
                                          gutterWidth: c,
                                          inspectedStickerPosition: d,
                                          isScrolling: m,
                                          isUsingKeyboardNavigation: h,
                                          onInspect: S,
                                          onSelect: v,
                                          rowIndex: e,
                                          stickerClassName: tm.yI,
                                          stickerDescriptors: t,
                                          stickerSize: n > th ? ty : tS,
                                          stickerPadding: s,
                                          preferAnimation: n <= tp,
                                          ownedStickerPacks: x,
                                          isDisplayingIndividualStickers: !0,
                                          channel: A,
                                          currentUser: C,
                                          upsellRestyleEnabled: I,
                                          isSectionNitroLocked: r,
                                      },
                                      e,
                                  )
                                : null;
                        },
                        [p, o, u, c, d, m, h, S, v, n, s, x, A, C, g, f, I],
                    ),
                    R = i.useCallback(
                        (e) => {
                            let t = f[e],
                                n = f[e + 1];
                            return t?.isNitroLocked === !0 && (null == n || !0 !== n.isNitroLocked);
                        },
                        [f],
                    ),
                    O = i.useCallback(
                        (e) => {
                            let t = f[e],
                                n = f[e + 1];
                            return t?.isNitroLocked !== !0 && n?.isNitroLocked === !0;
                        },
                        [f],
                    ),
                    L = i.useCallback(
                        (e, t) => {
                            let n = f[e],
                                i = I && tO(e, g),
                                s = i || (null == g && n?.isNitroLocked === !0),
                                a = i || (null == g && R(e));
                            return null == g || s
                                ? (0, l.jsx)(
                                      "div",
                                      { role: "rowgroup", className: r()({ [tm.cW]: s, [tm.fV]: a }), children: t },
                                      e,
                                  )
                                : t;
                        },
                        [g, f, I, R],
                    ),
                    M = i.useCallback(
                        function (e) {
                            let { isStickerPack: n = !0 } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                l = new Set(t),
                                i = t.has(e);
                            (i ? l.delete(e) : l.add(e),
                                Y.default.track(eA.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                    location: y?.location,
                                    tab: eC.kx.STICKER,
                                    collapsed: !i,
                                    sticker_pack_id: n ? e : null,
                                }),
                                j(l));
                        },
                        [y, t, j],
                    ),
                    k = i.useCallback(
                        (e) => {
                            let n = f[e];
                            if (null != g) {
                                let { sendable: n, sendableWithPremium: i } = g;
                                if (0 === e && n.length > 0) return null;
                                if (I && tO(e, g)) {
                                    let n = E === e;
                                    return (0, l.jsx)(
                                        eq.A,
                                        {
                                            className: r()(tm.jH, tm.M0, { [tm.RA]: !n, [tm.sp]: n }),
                                            "aria-label": eE.intl.string(eE.t.pAF6xE),
                                            icon: (0, l.jsx)(eG.t, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(tb),
                                            onClick: () => M(tb, { isStickerPack: !1 }),
                                            children: eE.intl.string(eE.t.pAF6xE),
                                        },
                                        "stickers-available-with-nitro-header",
                                    );
                                }
                                let s = n.length > 0 && i.length > 0;
                                return (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        s
                                            ? (0, l.jsx)("div", { className: tm.yF, children: (0, l.jsx)(ez.c, {}) })
                                            : null,
                                        (0, l.jsx)(
                                            eq.A,
                                            {
                                                className: tm.jH,
                                                "aria-label": eE.intl.string(eE.t.wbfJFh),
                                                children: eE.intl.string(eE.t["05Z/0l"]),
                                            },
                                            "stickers-you-might-like-header",
                                        ),
                                    ],
                                });
                            }
                            let i = f[e]?.isNitroLocked === !0,
                                s = r()(tm.jH, { [tm.M0]: I, [tm.RA]: i && E !== e, [tm.sp]: i && E === e });
                            switch (n.type) {
                                case en.Z2.FAVORITE:
                                    return (0, l.jsx)(
                                        eq.A,
                                        {
                                            className: s,
                                            "aria-label": eE.intl.formatToPlainString(eE.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, l.jsx)(es.StarIcon, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => M(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case en.Z2.RECENT:
                                    return (0, l.jsx)(
                                        eq.A,
                                        {
                                            className: s,
                                            "aria-label": eE.intl.formatToPlainString(eE.t["7lLCjZ"], {
                                                categoryName: n.name,
                                            }),
                                            icon: (0, l.jsx)(er.ClockIcon, { size: "xs", color: "currentColor" }),
                                            isCollapsed: t.has(n.id),
                                            onClick: () => M(n.id, { isStickerPack: !1 }),
                                            children: n.name,
                                        },
                                        `header-${n.id}`,
                                    );
                                case en.Z2.GUILD:
                                case en.Z2.EMPTY_GUILD_UPSELL: {
                                    let e = eh.A.getGuild(n.id);
                                    if (null == e) return null;
                                    return (0, l.jsx)(
                                        eq.A,
                                        {
                                            className: s,
                                            "aria-label": eE.intl.formatToPlainString(eE.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, l.jsx)(ec.A, { guild: e, height: 16, width: 16 }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => M(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                                case en.Z2.PACK: {
                                    let e = T.A.getStickerPack(n.id);
                                    if (null == e) return null;
                                    return (0, l.jsx)(
                                        eq.A,
                                        {
                                            className: s,
                                            "aria-label": eE.intl.formatToPlainString(eE.t["7lLCjZ"], {
                                                categoryName: e.name,
                                            }),
                                            icon: (0, l.jsx)(ef.A, {
                                                disableAnimation: !0,
                                                size: 12,
                                                sticker: (0, ep.Id)(e),
                                            }),
                                            isCollapsed: t.has(e.id),
                                            onClick: () => M(e.id),
                                            children: e.name,
                                        },
                                        `h${e.id}`,
                                    );
                                }
                            }
                        },
                        [E, t, g, f, M, I],
                    ),
                    P = i.useCallback(
                        (e) => {
                            if (null != g) {
                                let { sendable: t, sendableWithPremium: n } = g;
                                return 0 === e && t.length > 0
                                    ? 0
                                    : I && tO(e, g)
                                      ? tI
                                      : tI + (t.length > 0 && n.length > 0 ? tE : 0);
                            }
                            return tI;
                        },
                        [g, I],
                    );
                return {
                    renderRow: b,
                    renderSection: L,
                    renderSectionHeader: k,
                    sectionHeaderHeight: P,
                    renderSectionFooter: i.useCallback(
                        (e) => {
                            if (null != g)
                                return I
                                    ? tO(e, g)
                                        ? (0, l.jsx)("div", { className: tm.pQ })
                                        : tL(e, g)
                                          ? (0, l.jsx)(eJ.Ay, { className: tm.$2 })
                                          : null
                                    : null;
                            let n = f[e],
                                i = t.has(n.id),
                                s =
                                    n.type !== en.Z2.EMPTY_GUILD_UPSELL || i
                                        ? null
                                        : (0, l.jsx)(
                                              e6,
                                              {
                                                  className: tm.Ij,
                                                  guildId: n.id,
                                                  channel: A,
                                                  shouldTrackUpsellViewed: !N,
                                                  setTrackedUpsellViewed: _,
                                              },
                                              `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                          ),
                                r = null;
                            return (
                                O(e)
                                    ? (r = (0, l.jsx)(eJ.Ay, { className: tm.$2 }))
                                    : R(e) && (r = (0, l.jsx)("div", { className: tm.pQ })),
                                null == s && null == r ? null : (0, l.jsxs)(l.Fragment, { children: [s, r] })
                            );
                        },
                        [f, t, g, A, N, I, O, R],
                    ),
                    sectionFooterHeight: i.useCallback(
                        (e) => {
                            if (null != g) return I ? (tO(e, g) ? 33 : tL(e, g) ? eJ.kg : 0) : 0;
                            let n = f[e],
                                l = t.has(n.id),
                                i = 0;
                            return (
                                n.type !== en.Z2.EMPTY_GUILD_UPSELL || l || (i += tj),
                                O(e) ? (i += eJ.kg) : R(e) && (i += 33),
                                i
                            );
                        },
                        [g, I, f, t, O, R],
                    ),
                };
            })({
                collapsedStickersCategories: n,
                gridWidth: s,
                stickerPadding: m,
                stickersCategories: ex(x, b, C, M),
                stickersGrid: A,
                isScrolling: I,
                isUsingKeyboardNavigation: h,
                onSelectSticker: p,
                getStickerItemProps: o,
                getStickerRowProps: u,
                gutterWidth: c,
                inspectedStickerPosition: v,
                filteredStickers: a,
                ownedStickerPacks: k,
                channel: C,
                currentUser: b,
                activeSectionIndex: R,
                upsellRestyleEnabled: M,
            }),
            $ = (0, G.Fk)({
                activeCategoryIndex: S,
                isScrolling: I,
                listRef: y,
                onActiveCategoryIndexChange: U.bM.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: _,
            }),
            X = i.useCallback((e) => {
                let t = y.current?.getSectionDescriptors();
                null == t ||
                    O(
                        Math.max(
                            t.findLastIndex((t) => t.offset.top <= e),
                            0,
                        ),
                    );
            }, []);
        i.useLayoutEffect(() => {
            M && X(y.current?.getScrollerNode()?.scrollTop ?? 0);
        }, [M, X, a, g]);
        let Q = i.useCallback(
            (e) => {
                ($(e), M && X(e));
            },
            [$, X, M],
        );
        return (
            (0, G.FV)({ searchQuery: _, activeCategoryIndex: S, listRef: y }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return y.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => y.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => y.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return y.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return y.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return y.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return y.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return y.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, l.jsx)(D.f5, {
                value: N,
                children: (0, l.jsxs)("div", {
                    className: tm.iE,
                    children: [
                        null != a && 0 === a.sendable.length && 0 === a.sendableWithPremium.length
                            ? (0, l.jsx)(eZ.A, {
                                  message: eE.intl.string(eE.t["zc+LQd"]),
                                  className: tm.__invalid_noSearchResultsContainer,
                                  suggestions: (0, l.jsx)(tR, { onSuggestionClick: (e) => (0, V.Ri)(e, !0) }),
                              })
                            : (0, l.jsx)(eY.A, {
                                  role: "none presentation",
                                  listPadding: null != a ? t_ : tN,
                                  onScroll: Q,
                                  renderRow: F,
                                  renderSection: B,
                                  renderSectionHeader: q,
                                  renderSectionFooter: H,
                                  rowCount: f,
                                  rowCountBySection: g,
                                  rowHeight: s > th ? E + tv : tS + 2 * m + tv,
                                  sectionHeaderHeight: J,
                                  sectionFooterHeight: K,
                                  stickyHeaders: !0,
                                  ref: y,
                              }),
                        (0, l.jsx)(tn, { stickersGrid: A }),
                    ],
                }),
            })
        );
    }),
    tk = (0, B.mj)({
        name: "2026-02-sticker-padding",
        kind: "user",
        defaultConfig: { padding: 2 },
        variations: { 1: { padding: 1 } },
    });
var tw = n(602034),
    tP = n(683438),
    tD = n(909802);
let tU = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: s, channel: r } = e,
        a = (0, b.ZO)(r),
        o = i.useRef(null),
        { searchQuery: u, isSearchSuggestion: c } = (0, V.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            L.x,
        ),
        d = U.bM.useStore((e) => e.searchPlaceholder),
        [m, h] = U.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], L.x),
        p = i.useCallback(
            (e) => {
                (U.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    U.bM.setInspectedExpressionPosition(0, 0),
                    U.bM.setSearchPlaceholder(null),
                    (0, V.Ri)(e),
                    s.current?.scrollTo(0));
            },
            [s],
        ),
        f = i.useCallback(() => {
            p("");
        }, [p]);
    return (
        i.useImperativeHandle(t, () => ({ focus: () => o.current?.focus() })),
        i.useLayoutEffect(() => {
            c && o.current?.focus();
        }, [c]),
        (0, l.jsx)("div", {
            className: tD.i,
            children: (0, l.jsx)(tP.I, {
                autoFocus: a,
                disabled: !a,
                query: u,
                ref: o,
                placeholder: d ?? (a ? eE.intl.string(eE.t.dt5h1C) : eE.intl.string(eE.t["Pck/4U"])),
                onClear: f,
                onKeyDown: n,
                onChange: p,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": eB.lq,
                    "aria-expanded": !0,
                    ...(h ? { "aria-activedescendant": (0, tw.Aq)(eB.lq, m.columnIndex, m.rowIndex) } : void 0),
                },
            }),
        })
    );
});
n(321073);
var tV = n(802842),
    tG = n(330422),
    tF = n(609178),
    tB = n(158045);
function tH(e) {
    let { onUpsellClicked: t } = e,
        { location: n } = (0, w.p)(),
        { analyticsLocations: i } = (0, D.Ay)(P.A.STICKER_PICKER),
        s = (0, V.RQ)((e) => e.searchQuery);
    return (0, l.jsx)(tF.A, {
        title: eE.intl.string(eE.t.Eukdgl),
        description: eE.intl.string(eE.t.sMmd7s),
        analyticsLocationSection: eA.JJy.STICKER_PICKER_UPSELL,
        onClose: () => ee(!1),
        onUpsellClicked: t,
        upsellViewedTrackingData: {
            type: eH.e.STICKER_PICKER_UPSELL,
            location: { ...n, object: eA.ZSU.STICKER },
            location_stack: i,
            sku_id: (0, tB.mH)(tB.Ay.getSkuIdForPremiumType(eH.PremiumTypes.TIER_2)),
            has_search_query: "" !== s,
        },
        graphic: (0, l.jsx)(tG.n, { alt: "", ariaHidden: !0 }),
        useNitroGradient: !0,
    });
}
var tW = n(789645),
    tK = n(964486),
    tz = n(420136),
    tZ = n(939383);
function tY() {
    return ee(!1);
}
function tq(e) {
    let { onLearnMore: t } = e,
        { analyticsLocations: n } = (0, D.Ay)(P.A.PREMIUM_UPSELL);
    (0, i.useEffect)(() => {
        (Y.default.track(eA.HAw.PREMIUM_UPSELL_VIEWED, {
            location_section: eA.JJy.STICKER_PICKER_UPSELL,
            type: eH.e.STICKER_PICKER_UPSELL,
            location_stack: n,
        }),
            (0, ew.sq)(eA.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, eP.uq)(eH.e.STICKER_PICKER_UPSELL)));
    }, [n]);
    let s = (0, i.useRef)(null);
    (0, tK.Ay)(() => {
        s.current?.focus();
    });
    let a = (0, K.V)(),
        o = (0, eD.O)(),
        u = a?.subscriptionTrial?.skuId === eH.pe.TIER_0,
        c = null != a || null != o;
    return (0, l.jsxs)("div", {
        ref: s,
        tabIndex: -1,
        "aria-label": eE.intl.string(eE.t.jJG1pl),
        className: r()(tz.VL, { [tz.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eU.Ay, {
                      trialOffer: a,
                      discountOffer: o,
                      onClose: tY,
                      type: eH.e.STICKER_PICKER_UPSELL,
                      subscriptionTier: a?.subscriptionTrial?.skuId ?? eH.pe.TIER_2,
                      children: u
                          ? eE.intl.format(eE.t.MAGagw, {
                                planName: (0, tB.RH)(eH.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : eE.intl.format(eE.t.jt7JX6, { onClick: t }),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: tz.Tn, src: tZ, alt: eE.intl.string(eE.t.do7AoM) }),
                          (0, l.jsx)(ek.E, {
                              className: tz.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: eE.intl.string(eE.t.jJG1pl),
                          }),
                          (0, l.jsx)(ek.E, {
                              className: tz.GR,
                              variant: "text-md/normal",
                              children: eE.intl.format(eE.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eF, { analyticsSection: eA.JJy.EXPRESSION_PICKER }),
            (0, l.jsx)(p.D, {
                className: tz.kz,
                onClick: tY,
                "aria-label": eE.intl.string(eE.t.cpT0Cq),
                children: (0, l.jsx)(tW.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var tJ = n(970099);
let t$ = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tX = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tQ = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    t0 = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    t1 = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    t2 = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    t3 = (0, q.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    t8 = O()(et.Qz, 200),
    t5 = O()(et.HA, 200),
    t6 = i.forwardRef(function (e, t) {
        let { containerWidth: s, channel: r, onSelectSticker: a, closePopout: o } = e,
            u = tk.useConfig({ location: "StickerPicker" }).padding,
            c = W("web.StickerPicker"),
            { location: m } = (0, w.p)(),
            { analyticsLocations: p } = (0, D.Ay)(P.A.STICKER_PICKER),
            f = (0, K.V)()?.subscriptionTrial != null,
            g = i.useRef(null),
            x = i.useRef(null),
            A = i.useRef(null),
            C = Q((e) => e.showPremiumUpsell),
            [E, I] = (0, V.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], L.x),
            y = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: ep }));
        let S = (0, b.pD)(r),
            v = 0 === S.filter((e) => e.type !== en.Z2.EMPTY_GUILD_UPSELL).length,
            N = (0, G.oV)({
                gridWrapperRef: g,
                containerWidth: s,
                showingEmptyState: v,
                listPaddingLeft: tX,
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
                            tV.Ay.queryStickers([e], !0)
                                .map((e) => {
                                    let { sticker: t } = e;
                                    return t;
                                })
                                .forEach((e) => {
                                    let s = (0, eg.W$)(e, t, n);
                                    s === eg.Ux.SENDABLE ? l.push(e) : s === eg.Ux.SENDABLE_WITH_PREMIUM && i.push(e);
                                }),
                            { sendable: l, sendableWithPremium: i }
                        );
                    })(E, R, r),
                [E, R, r],
            ),
            M = (0, b.Gc)(),
            k = (0, b.UT)(),
            B = (0, d.cf)([T.A], () => T.A.getAllGuildStickers()),
            { sendable: H = [], sendableWithPremium: q = [] } = O ?? {},
            J = H.length + q.length,
            $ = i.useCallback(
                (e) => {
                    ("" === E ? (0, et.ry)(e) : (0, et.nQ)(e, E, J), a(e.sticker, en.D6.STICKER_PICKER));
                },
                [a, E, J],
            ),
            X = null != N && N > t$,
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
                collapsePremiumSearchSection: c && j.has(tb),
                listWidth: N,
                listPaddingRight: tQ,
                stickerNodeMargin: X ? t0 : t1,
                stickerNodeWidth: X ? t2 + 2 * u : t3 + 2 * u,
            }),
            {
                getItemProps: eu,
                getRowProps: ec,
                gridContainerProps: ed,
                handleGridContainerKeyDown: em,
                isUsingKeyboardNavigation: eh,
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
                        gridDispatch: m,
                        getItemProps: h,
                        getRowProps: p,
                        gridContainerProps: f,
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
                                        m({ type: el.n.SET_FOCUSED_POSITION, x: t, y: n });
                                },
                            ),
                        [m, s],
                    ),
                    {
                        getItemProps: h,
                        getRowProps: p,
                        gridContainerProps: f,
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
                                (Y.default.track(eA.HAw.OPEN_MODAL, { type: eA.JJy.CREATE_STICKER_MODAL, location: m }),
                                    (0, h.openModalLazy)(async () => {
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
                                td({ descriptor: e, currentUser: R, channel: r, onSelect: $ });
                        }
                    },
                    [m, R, r, $],
                ),
                store: U.bM,
                setInspectedStickerPosition: U.bM.setInspectedExpressionPosition,
                gridNavigatorId: eB.lq,
            });
        function ep() {
            let e = r.getGuildId(),
                t = [];
            null !== e && (t = T.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            (null != B &&
                [...B.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, et.p4)({
                    containerWidth: s,
                    favoriteStickers: M,
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
                0 === J ? t8(E) : t5(E, J, I);
            }, [E, J, I]),
            i.useLayoutEffect(() => {
                A.current?.focus();
            }, []));
        let ef = i.useCallback(() => {
            (o(),
                Y.default.track(eA.HAw.PREMIUM_PROMOTION_OPENED, { location_section: eA.JJy.STICKER_PICKER_UPSELL }),
                (0, F.e)());
        }, [o]);
        return (0, l.jsxs)(D.f5, {
            value: p,
            children: [
                !(f && v) &&
                    (0, l.jsx)("div", {
                        className: tJ.wx,
                        children: (0, l.jsx)(tU, { ref: A, onKeyDown: em, stickersListRef: x, channel: r }),
                    }),
                v
                    ? (0, l.jsx)(eK, { className: tJ.p$, onClose: o })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  ref: g,
                                  className: tJ.AD,
                                  id: eB.lq,
                                  ...ed,
                                  children:
                                      null != N
                                          ? (0, l.jsx)(tM, {
                                                ref: x,
                                                collapsedStickersCategories: j,
                                                filteredStickers: O,
                                                getStickerItemProps: eu,
                                                getStickerRowProps: ec,
                                                gridWidth: N,
                                                gutterWidth: ea,
                                                stickerPadding: u,
                                                isUsingKeyboardNavigation: eh,
                                                onSelectSticker: $,
                                                rowCount: ee,
                                                rowCountBySection: es,
                                                stickersCategories: S,
                                                stickersGrid: er,
                                                channel: r,
                                            })
                                          : null,
                              }),
                              (0, l.jsx)(eL, { stickersListRef: x, channel: r }),
                          ],
                      }),
                C && (c ? (0, l.jsx)(tH, { onUpsellClicked: o }) : (0, l.jsx)(tq, { onLearnMore: ef })),
            ],
        });
    }),
    t7 = i.forwardRef(function (e, t) {
        return (
            (0, b.XQ)(),
            (0, l.jsx)("div", {
                className: tJ.iE,
                id: eB.GX,
                "aria-labelledby": eB.LD,
                role: "tabpanel",
                children: e.isLoading ? (0, l.jsx)(k.y, { className: tJ.Mz }) : (0, l.jsx)(t6, { ...e, ref: t }),
            })
        );
    });
var t4 = n(742023),
    t9 = n(712687),
    ne = n(625494),
    nt = n(49999),
    nn = n(732139),
    nl = n(307731),
    ni = n(818625);
let ns = 498 + nn.as.MEDIUM,
    nr = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: s = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(p.D, {
            role: "tab",
            autoFocus: s,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                (E.Ay.trackWithMetadata(eA.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, V.U)(i));
            },
            "aria-current": t ? "page" : void 0,
            className: r()(n, ni.oi, ni.pc, { [ni.Mv]: t }),
        });
    }),
    na = i.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: s,
                onSelectEmoji: a,
                onSelectSticker: p,
                onSelectSound: R,
                channel: O,
                type: L,
                position: M,
                align: k,
                positionLayerClassName: w,
                closeOnModalOuterClick: P = !1,
                parentModalKey: D,
            } = e,
            U = i.useRef(null),
            G = i.useRef(!1),
            F = i.useRef(null),
            B = i.useRef(null),
            { drawerWidth: H, handleDrawerResizeHandleMouseDown: W } = (function (e) {
                let { positionContainerRef: t, drawerRef: n, orientation: l } = e,
                    s = (0, d.bG)([t4.Ay], () => t4.Ay.expressionPickerWidth),
                    [r, a] = i.useState(window.innerWidth),
                    [u, c] = i.useState(s ?? eC.wp.MIN),
                    m = i.useMemo(() => {
                        switch (u) {
                            case eC.wp.MIN:
                                return 498;
                            case eC.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    h = i.useCallback(
                        (e) => {
                            let t = e >= r ? eC.wp.MAX : e <= 498 ? eC.wp.MIN : e;
                            (null == t && null != n.current && (n.current.style.width = ""),
                                x.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                c(t));
                        },
                        [n, r],
                    ),
                    p = (0, C.A)({
                        initialElementDimension: m,
                        maxDimension: r,
                        minDimension: 498,
                        resizableDomNodeRef: n,
                        onElementResize: h,
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
                        drawerWidth: m,
                        handleDrawerResizeHandleMouseDown: i.useCallback(
                            (e) => {
                                (e.stopPropagation(), null != t.current && a(t.current.offsetWidth), p(e));
                            },
                            [t, p],
                        ),
                    }
                );
            })({
                positionContainerRef: U,
                drawerRef: B,
                orientation: "left" === k ? C.R.HORIZONTAL_RIGHT : C.R.HORIZONTAL_LEFT,
            }),
            K = (0, V.RQ)((e) => e.activeView),
            z = (0, b.ZO)(O),
            { renderWindow: Z, windowDispatch: Y } = i.useContext(N.Ay),
            q = (0, d.bG)([T.A], () => !T.A.hasLoadedStickerPacks),
            J = (0, _.tj)({ location: "expression_picker" }),
            $ = (0, d.bG)([t9.A], () => t9.A.isOpen()),
            X = null != D,
            Q = (0, h.useIsModalAtTop)(D ?? ""),
            ee = L.gifs?.allowSending && !u.Fr && null != s,
            et = L.stickers?.allowSending && null != p,
            en = !L.expressionPicker?.onlyEmojis && (ee || et),
            el = i.useCallback(
                (e) => {
                    if ((!X && (0, h.hasAnyModalOpen)()) || (X && !(Q && P)) || $ || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + eC.VQ)) return;
                    for (; (0, c.vq)(t);) {
                        if (
                            t === B.current ||
                            "true" === t.getAttribute("data-menu-item") ||
                            "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                            "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                        )
                            return;
                        t = t.parentNode;
                    }
                    (0, V.v8)();
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && ne._.dispatchToLastSubscribed(eA.jej.TEXTAREA_FOCUS);
                },
                [P, Q, X, $],
            ),
            ei = i.useCallback(() => {
                (0, V.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                K === eC.kx.GIF && (0, V.v8)();
            }
            return (
                Z.addEventListener("mousedown", el),
                Z.addEventListener("contextmenu", el),
                Y.subscribe(eA.jej.POPOUT_CLOSE, ei),
                ne._.subscribe(eA.jej.CLOSE_GIF_PICKER, e),
                () => {
                    (Z.removeEventListener("mousedown", el),
                        Z.removeEventListener("contextmenu", el),
                        Y.unsubscribe(eA.jej.POPOUT_CLOSE, ei),
                        ne._.unsubscribe(eA.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [K, ei, el, Z, Y]),
            (0, f.tj)(U));
        let [es, er] = (0, I.kn)(J ? [m.M.SOUNDMOJI_BADGE] : [], void 0, !1),
            [ea, eo] = i.useState(!1);
        (i.useEffect(() => {
            K === eC.kx.SOUNDBOARD && eo(!0);
        }, [K]),
            i.useEffect(
                () => () => {
                    ea && er(nt.i.TAKE_ACTION);
                },
                [ea, er],
            ),
            i.useEffect(() => {
                (0, V.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!X && (0, h.hasAnyModalOpen)()) || (X && !Q)) && (0, V.v8)();
            }, [Q, X]),
            i.useEffect(() => {
                null != B.current &&
                    !G.current &&
                    (K === eC.kx.EMOJI
                        ? F?.current?.onPickerOpen != null && (F?.current?.onPickerOpen(), (G.current = !0))
                        : K === eC.kx.STICKER
                          ? F?.current?.onPickerOpen == null || q || (F?.current?.onPickerOpen(), (G.current = !0))
                          : (E.Ay.trackWithMetadata(eA.HAw.EXPRESSION_PICKER_OPENED, {
                                width: B.current.offsetWidth,
                                tab: K,
                                badged: !1,
                            }),
                            (G.current = !0)));
            }));
        let eu = i.useCallback((e, t) => R?.(e, "emoji_picker", t), [R]),
            ec = i.useCallback((e, t) => R?.(e, "soundboard_picker", t), [R]),
            ed = L.soundmoji?.allowSending === !0 && null != R,
            em = "left" === k ? "right" : "left",
            eh = null != w ? w : "left" === k ? ni.sj : ni.Jg,
            ep = ee
                ? (0, l.jsx)(nr, {
                      id: nn.g9,
                      "aria-controls": nn.ni,
                      "aria-selected": K === eC.kx.GIF,
                      isActive: K === eC.kx.GIF,
                      viewType: eC.kx.GIF,
                      children: eE.intl.string(eE.t["6gUTsS"]),
                  })
                : null,
            ef = et
                ? (0, l.jsx)(nr, {
                      id: eB.LD,
                      "aria-controls": eB.GX,
                      "aria-selected": K === eC.kx.STICKER,
                      isActive: K === eC.kx.STICKER,
                      autoFocus: !z,
                      viewType: eC.kx.STICKER,
                      children: (0, l.jsx)("div", { className: ni.dG, children: eE.intl.string(eE.t.nf1s3u) }),
                  })
                : null,
            eg = (0, l.jsx)(nr, {
                id: nn.k1,
                "aria-controls": nn.Do,
                "aria-selected": K === eC.kx.EMOJI,
                isActive: K === eC.kx.EMOJI,
                viewType: eC.kx.EMOJI,
                children: eE.intl.string(eE.t.Xu3wE3),
            });
        return (0, l.jsx)(A.A, {
            section: eA.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(v.nE, {
                className: r()(ni.T8, eh),
                targetRef: t,
                position: M,
                align: k,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: r()(ni.V6, { [ni.D0]: !en }),
                        ref: U,
                        role: "dialog",
                        "aria-label": eE.intl.string(eE.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: ni.jP,
                                  style: { width: null == H ? void 0 : H, [k]: 0 },
                                  ref: B,
                                  children: [
                                      (0, l.jsx)("div", { className: ni.Di, onMouseDown: W, style: { [em]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: ni.FG,
                                          children: [
                                              en
                                                  ? (0, l.jsx)("nav", {
                                                        className: ni.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: ni.CT,
                                                            role: "tablist",
                                                            "aria-label": eE.intl.string(eE.t["2j4Vgd"]),
                                                            children: [
                                                                ep,
                                                                ef,
                                                                eg,
                                                                J &&
                                                                    ed &&
                                                                    (0, l.jsx)(nr, {
                                                                        id: nn.N6,
                                                                        "aria-controls": nn.AA,
                                                                        "aria-selected": K === eC.kx.SOUNDBOARD,
                                                                        isActive: K === eC.kx.SOUNDBOARD,
                                                                        viewType: eC.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: ni.sd,
                                                                            children: [
                                                                                eE.intl.string(eE.t.EHlAMc),
                                                                                null != es &&
                                                                                    (0, l.jsx)(g.Lp, {
                                                                                        text: eE.intl.string(
                                                                                            eE.t.y2b7CA,
                                                                                        ),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              K === eC.kx.STICKER && et
                                                  ? (0, l.jsx)(t7, {
                                                        isLoading: q,
                                                        channel: O,
                                                        containerWidth: H,
                                                        onSelectSticker: p,
                                                        closePopout: ei,
                                                        ref: (e) => {
                                                            F.current = e;
                                                        },
                                                    })
                                                  : null,
                                              K === eC.kx.GIF && ee
                                                  ? (0, l.jsx)(S.A, {
                                                        onSelectGIF: s,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              K === eC.kx.EMOJI || L.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(y.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: O,
                                                        containerWidth: H,
                                                        emojiSize: null != H && H < ns ? nn.as.MEDIUM : nn.as.LARGE,
                                                        pickerIntention:
                                                            L.expressionPicker?.emojiIntention ??
                                                            nl.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == O || null != O.guild_id,
                                                        closePopout: ei,
                                                        onSelectEmoji: a,
                                                        onSelectSoundmoji: eu,
                                                        ref: (e) => {
                                                            F.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            L.soundmoji?.allowSending === !0,
                                                    })
                                                  : null,
                                              K === eC.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: ni.z,
                                                        children: (0, l.jsx)(j.A, {
                                                            guildId: O.guild_id,
                                                            channel: O,
                                                            containerWidth: H,
                                                            onClose: ei,
                                                            onSelect: ec,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: ni.BG, children: e }),
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
