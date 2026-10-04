n.d(t, { A: () => nm });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(435558),
    o = n.n(a),
    u = n(607399),
    c = n(621466),
    d = n(17928),
    h = n(554146),
    m = n(192308),
    p = n(939249),
    f = n(315710),
    g = n(812993),
    x = n(817281),
    E = n(820284),
    S = n(761929),
    y = n(95561),
    C = n(131607),
    A = n(267889),
    b = n(813703),
    I = n(750506),
    v = n(267102),
    N = n(926972),
    T = n(511558),
    j = n(256449),
    k = n(750385),
    _ = n(649852),
    R = n.n(_),
    w = n(462180),
    O = n(319060),
    L = n(289873),
    P = n(212245),
    M = n(793574),
    D = n(688810),
    U = n(850992),
    V = n(151271),
    W = n(887695),
    F = n(87719);
let B = (0, n(945810).mj)({
    name: "2026-09-web-sticker-picker-upsell-restyle",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
function K(e) {
    return B.useConfig({ location: e });
}
var G = n(732280),
    H = n(885386),
    z = n(287809),
    q = n(174459),
    Q = n(240248),
    $ = n(196765),
    Z = n(121894);
let X = Object.freeze({ showPremiumUpsell: !1 }),
    J = (0, $.v)((e) => X);
function Y(e) {
    (0, Z.r)(() => J.setState({ showPremiumUpsell: e }));
}
var ee = n(891090),
    et = n(194004),
    en = n(788413),
    el = n(60587),
    ei = n(27232),
    er = n(406810),
    es = n(866665),
    ea = n(797285),
    eo = n(713517),
    eu = n(724511),
    ec = n(88218),
    ed = n(941971),
    eh = n(71393),
    em = n(378058),
    ep = n(148355),
    ef = n(361670);
function eg(e, t, n, l) {
    return i.useMemo(
        () =>
            l
                ? e.map((e) => ({
                      ...e,
                      isNitroLocked:
                          e.type === et.Z2.GUILD &&
                          0 !== e.stickers.length &&
                          e.stickers.every((e) => (0, ef.W$)(e, t, n) === ef.Ux.SENDABLE_WITH_PREMIUM),
                  }))
                : e,
        [e, n, t, l],
    );
}
var ex = n(652215),
    eE = n(698279),
    eS = n(375708),
    ey = n(161975);
let eC = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    eA = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    eb = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eI = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    ev = (0, Q.xI)(O.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eN = (0, Q.xI)(O.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    eT = [eC, eC, eC, eC],
    ej = (eA + eb) * 2 + eC,
    ek = ev + 2 * eN;
function e_(e) {
    let { ariaLabel: t, children: n, className: r, isSelected: s, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, eo.A)(o);
    return (0, l.jsxs)(p.D, {
        innerRef: o,
        "aria-label": t,
        className: r,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: ey.a$,
                children: (0, l.jsx)(ed.A, { hovered: u, selected: s, size: "small" }),
            }),
            n,
        ],
    });
}
let eR = (e) => {
    let { stickersListRef: t, channel: n } = e,
        r = i.useRef(null),
        [a, o] = i.useState(!0),
        u = U.bM.useStore((e) => e.activeCategoryIndex),
        c = eg(
            (0, j.pD)(n),
            (0, d.bG)([z.default], () => z.default.getCurrentUser()),
            n,
            K("web.StickerPickerCategoryList"),
        ),
        {
            firstStandardStickerCategoryIndex: h,
            firstStandardStickerCategoryOffsetTop: m,
            guildCategoryCount: f,
            hasFirstPartyStickerPacks: g,
        } = i.useMemo(() => {
            let e = c.filter((e) => e.type === et.Z2.GUILD).length,
                t = e + +(c[0]?.type === et.Z2.RECENT) + +(c[0]?.type === et.Z2.FAVORITE),
                n = t * (eA + eb) - eb + ek;
            return {
                firstStandardStickerCategoryIndex: t + 1,
                firstStandardStickerCategoryOffsetTop: n,
                guildCategoryCount: e,
                hasFirstPartyStickerPacks: null != c.find((e) => e.type === et.Z2.PACK),
            };
        }, [c]);
    i.useLayoutEffect(() => {
        o(f >= 7);
    }, [f]);
    let {
            renderCategoryListItem: x,
            rowHeight: E,
            onScroll: S,
        } = (function (e) {
            let {
                    activeIndex: t,
                    stickerPickerCategories: n,
                    categoryListRef: r,
                    firstStandardStickerCategoryOffsetTop: a,
                    setShouldRenderShortcut: o,
                } = e,
                u = (0, P.p)(),
                c = (0, V.RQ)((e) => "" !== e.searchQuery),
                d = i.useCallback(
                    (e, r, a) => {
                        let o,
                            d = n[0]?.type === et.Z2.FAVORITE,
                            h = +!!d,
                            m = n[h]?.type === et.Z2.RECENT,
                            p = n.length;
                        if (0 === r && d) {
                            let e = !c && 0 === t;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": p,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(e_, {
                                        ariaLabel: eS.intl.string(eS.t.y3LQCG),
                                        className: s()(ey._0, ey.dC, { [ey.k1]: e, [ey.ls]: !m }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(ei.StarIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: ey.AB,
                                            height: eI,
                                            width: eI,
                                        }),
                                    }),
                                },
                                "favorites",
                            );
                        }
                        if (r === h && m) {
                            let e = !c && t === h;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": p,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(e_, {
                                        ariaLabel: eS.intl.string(eS.t.RxAmVC),
                                        className: s()(ey._0, ey.dC, ey.ls, { [ey.k1]: e }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(er.ClockIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: ey.AB,
                                            height: eI,
                                            width: eI,
                                        }),
                                    }),
                                },
                                "recent",
                            );
                        }
                        let f = t === r,
                            g = !c && f,
                            x = n[r],
                            E = n[r + 1],
                            S = null != E && x.type === et.Z2.GUILD && E.type !== et.Z2.GUILD,
                            y = x.type === et.Z2.PACK,
                            C = "",
                            A = null;
                        if (x.type === et.Z2.GUILD || x.type === et.Z2.EMPTY_GUILD_UPSELL) {
                            let e = eh.A.getGuild(x.id);
                            null != e &&
                                ((o = e.id),
                                (C = e.name),
                                (A = (0, l.jsx)(eu.A, { guild: e, isSelected: f, isLocked: !0 === x.isNitroLocked })));
                        } else if (y) {
                            let e = k.A.getStickerPack(x.id);
                            null != e &&
                                ((C = e.name),
                                (A = (0, l.jsx)(ep.A, {
                                    disableAnimation: !f || c,
                                    size: eA,
                                    sticker: (0, em.Id)(e),
                                })));
                        }
                        return (0, l.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, l.jsx)(es.m, {
                                        position: "right",
                                        text: C,
                                        children: (0, l.jsx)("div", {
                                            role: "listitem",
                                            "aria-setsize": p,
                                            "aria-posinset": r,
                                            children: (0, l.jsx)(e_, {
                                                ariaLabel: C,
                                                className: s()(ey._0, { [ey.ND]: y, [ey.Ms]: g && y }),
                                                isSelected: g,
                                                onClick: () => {
                                                    (x.type === et.Z2.PACK &&
                                                        q.default.track(ex.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: u?.location,
                                                            tab: eE.kx.STICKER,
                                                            sticker_pack_id: x.id,
                                                            guild_id: o,
                                                        }),
                                                        a());
                                                },
                                                children: A,
                                            }),
                                        }),
                                    }),
                                    S ? (0, l.jsx)("hr", { className: ey.ny }, "separator") : null,
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
                        return eA + (null != i && l.type === et.Z2.GUILD && i.type !== et.Z2.GUILD ? ek : eb);
                    },
                    [n],
                ),
                onScroll: i.useCallback(
                    (e) => {
                        let t = r.current?.getListDimensions();
                        null == t || o(e + t.height - ev < a);
                    },
                    [a, r, o],
                ),
            };
        })({
            activeIndex: u,
            stickerPickerCategories: c,
            categoryListRef: r,
            firstStandardStickerCategoryOffsetTop: m,
            setShouldRenderShortcut: o,
        }),
        y = i.useCallback(
            (e) => {
                (e(h), r.current?.scrollTo(m));
            },
            [h, m],
        );
    return (0, l.jsx)(ec.A, {
        className: ey.jv,
        categoryListRef: r,
        expressionsListRef: t,
        store: U.bM,
        listPadding: eT,
        onScroll: S,
        renderCategoryListItem: x,
        rowCount: c.length,
        categories: c,
        categoryHeight: E,
        children: (e) =>
            g &&
            a &&
            (0, l.jsx)(p.D, {
                className: s()(ey.Fe, { [ey.Q6]: !a }),
                onClick: () => y(e),
                children: (0, l.jsx)(ea.t, { size: "md", color: "currentColor" }),
            }),
    });
};
var ew = n(297264),
    eO = n(834730),
    eL = n(10392),
    eP = n(82498),
    eM = n(724651),
    eD = n(811611),
    eU = n(821609),
    eV = n(403581);
function eW(e) {
    let { analyticsSection: t, buttonText: i } = e;
    return (0, l.jsx)(eU.$, {
        variant: "expressive",
        icon: eV.t,
        text: i ?? eS.intl.string(eS.t["8Sh5fg"]),
        onClick: () => {
            var e;
            return (
                (e = { section: t }),
                void (q.default.track(ex.HAw.OPEN_MODAL, {
                    type: ex.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
                    location: e,
                }),
                (0, m.openModalLazy)(async () => {
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
var eF = n(823894),
    eB = n(202541),
    eK = n(768857);
function eG(e) {
    let { className: t, onClose: n } = e;
    (0, j.XQ)();
    let { analyticsLocations: r } = (0, D.Ay)(M.A.EMPTY_STATE),
        a = (0, d.yK)([k.A], () => eF.vX.map((e) => k.A.getStickerById(e)));
    i.useEffect(() => {
        (q.default.track(ex.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eB.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: ex.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: r,
        }),
            (0, eL.sq)(ex.U7l.PREMIUM_UPSELL_VIEWED, r, () => (0, eP.uq)(eB.e.EMPTY_STICKER_PICKER_UPSELL)));
    }, [r]);
    let o = (0, G.V)(),
        u = (0, eM.O)(),
        c = null != o || null != u;
    return (0, l.jsxs)("div", {
        className: s()(eK.p$, t, { [eK.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eD.Ay, {
                      discountOffer: u,
                      trialOffer: o,
                      onClose: n,
                      type: eB.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscriptionTrial?.skuId ?? eB.pe.TIER_2,
                      children: eS.intl.string(eS.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(ew.D, {
                              className: eK.wx,
                              variant: "heading-xl/semibold",
                              children: eS.intl.string(eS.t.HEm04J),
                          }),
                          (0, l.jsx)(eO.E, {
                              className: eK.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: eS.intl.string(eS.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: eK.l1,
                              children: a
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(ep.A, { sticker: e, className: eK.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eW, { analyticsSection: ex.JJy.EXPRESSION_PICKER }),
        ],
    });
}
n(30146);
var eH = n(404778),
    ez = n(537652),
    eq = n(962125),
    eQ = n(286509),
    e$ = n(414872),
    eZ = n(158045),
    eX = n(631576),
    eJ = n(369163),
    eY = n(123292),
    e0 = n(631305),
    e1 = n(468689),
    e2 = n(931991),
    e5 = n(473145),
    e8 = n(625633),
    e3 = n(136123);
let e6 = function (e) {
    let { className: t, guildId: n, channel: r, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, P.p)(),
        { analyticsLocations: c } = (0, D.Ay)(),
        h = (0, d.bG)([eh.A], () => eh.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, e2.nr)(h),
        p = null != h && 0 === (0, e5.aG)(h.premiumTier) && !h.features.has(ex.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            p &&
            a &&
            ((0, y.zV)(ex.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: u,
                guild_id: h?.id,
                channel_id: r?.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: c,
            }),
            o(!0));
    }, [p, h, r, u, a, o, c, m]),
    null != h && m)
        ? p
            ? (0, l.jsxs)("div", {
                  className: s()(e3.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(eJ.v, { size: "md", color: "currentColor", className: e3.Kk }),
                      (0, l.jsx)(eO.E, {
                          color: "interactive-text-default",
                          className: e3.rf,
                          variant: "text-sm/normal",
                          children: eS.intl.format(eS.t.AXWla1, { count: (0, e5.aG)(ex.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(eY.Q, {
                          variant: "primary",
                          text: eS.intl.string(eS.t["Gb+BJD"]),
                          onClick: function () {
                              null != h &&
                                  (0, e0.A)({
                                      analyticsLocations: c,
                                      analyticsSourceLocation: u,
                                      guild: h,
                                      perks: (0, e8.q5)(),
                                  });
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: s()(e3.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(ea.t, {
                          size: "custom",
                          color: "currentColor",
                          className: e3.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, l.jsx)(eO.E, {
                          color: "interactive-text-default",
                          className: e3.rf,
                          variant: "text-sm/normal",
                          children: eS.intl.string(eS.t.S83wgh),
                      }),
                      (0, l.jsx)(eY.Q, {
                          variant: "primary",
                          text: eS.intl.string(eS.t.bwNjug),
                          onClick: function () {
                              ((0, V.v8)(), e1.default.open(n, ex.BEX.STICKERS, u));
                          },
                      }),
                  ],
              })
        : null;
};
var e7 = n(240864),
    e4 = n(89366),
    e9 = n(202639);
let te = (0, a.throttle)(
    function (e) {
        let {
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: r,
                sectionFooterHeight: s,
                setShowUpsell: a,
            } = e,
            { areOnlyNitroLockedSectionsVisible: o } = (0, e7.s)({
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: l,
                scrollTop: i,
                sectionHeaderHeight: r,
                sectionFooterHeight: s,
            });
        a(o);
    },
    300,
    { leading: !1, trailing: !0 },
);
var tt = n(307301),
    tn = n(182922),
    tl = n(683522);
let ti = (0, Q.xI)(O.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    tr = (0, Q.xI)(O.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    ts = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = U.bM.useStore((e) => e.inspectedExpressionPosition),
            r = i.useMemo(() => {
                let { rowIndex: e, columnIndex: l } = n,
                    i = t[e]?.[l];
                if (null == i) return null;
                switch (i.type) {
                    case et.op.CREATE_STICKER:
                        return { guild_id: i.guild_id, name: i.name };
                    case et.op.STICKER:
                        return i.sticker;
                    default:
                        return null;
                }
            }, [t, n]);
        if (null == r) return null;
        let { graphic: s, title: a } = (function (e) {
                let t = null,
                    n = null;
                if ((!(0, em.FD)(e) && !(0, em.Xw)(e)) || (0, em.Xw)(e)) {
                    let i = eh.A.getGuild(e.guild_id);
                    null != i &&
                        ((t = eS.intl.format(eS.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(eu.A, { guild: i })));
                } else if ((0, em.FD)(e)) {
                    let i = k.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = eS.intl.format(eS.t.cZOkbs, { source: i.name })),
                        (n = (0, l.jsx)(ep.A, { size: tr, sticker: (0, em.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(r),
            o =
                (0, em.FD)(r) || (0, em.Xw)(r)
                    ? (0, l.jsx)(ep.A, { isInteracting: !0, size: ti, sticker: r, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: tl.P,
                          children: (0, l.jsx)(tt.j, { size: "md", color: "currentColor", className: tl.K }),
                      });
        return (0, l.jsx)(tn.A, {
            graphicPrimary: o,
            graphicSecondary: s,
            titlePrimary: r.name,
            titleSecondary: (0, em.FD)(r) || (0, em.Xw)(r) ? a : null,
        });
    });
var ta = n(140735),
    to = n(194261),
    tu = n(442433),
    tc = n(304072),
    td = n(513902);
let th = function (e) {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: td.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(to.LockIcon, { size: "xxs", color: "currentColor", className: td.I }),
    });
};
var tm = n(777371);
let tp = i.memo(function (e) {
    let {
            isDisplayingIndividualStickers: t = !1,
            preferAnimation: r = !0,
            getStickerItemProps: o,
            getStickerRowProps: u,
            gutterWidth: c,
            inspectedStickerPosition: d,
            isScrolling: h,
            isUsingKeyboardNavigation: f,
            onInspect: g,
            onSelect: x,
            rowIndex: E,
            stickerClassName: S,
            stickerDescriptors: y,
            stickerPadding: C,
            stickerSize: A,
            ownedStickerPacks: b,
            enlargeOnInteraction: I = !1,
            channel: v,
            currentUser: N,
            checkSendability: T = !0,
            upsellRestyleEnabled: j = !1,
            isSectionNitroLocked: k = !1,
        } = e,
        { location: _ } = (0, P.p)(),
        R = A + 2 * C,
        w = i.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${R}px)`,
                height: R,
                paddingRight: t ? void 0 : R,
            }),
            [t, c, R],
        ),
        O = i.useMemo(() => ({ width: A, height: A, padding: C }), [C, A]),
        [L, M] = (0, tc.A)(null, 300);
    return (0, l.jsx)("div", {
        className: tm.nM,
        style: w,
        ...u?.(E),
        children: y.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === et.op.STICKER && I && u,
                y = (0, a.throttle)(() => {
                    h?.current === !0 || f?.current === !0 || u || g?.(e);
                }, 250),
                { ref: C, tabIndex: R, onFocus: w, ...P } = o?.(e.columnIndex, E) ?? {};
            switch (e.type) {
                case et.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...P,
                            children: (0, l.jsxs)(p.D, {
                                "aria-label": e.name,
                                className: s()(tm.wP, S, { [tm.Kj]: u }),
                                innerRef: C,
                                tabIndex: R,
                                onFocus: w ?? y,
                                onMouseMove: y,
                                onClick: function () {
                                    e.type === et.op.CREATE_STICKER &&
                                        (q.default.track(ex.HAw.OPEN_MODAL, {
                                            type: ex.JJy.CREATE_STICKER_MODAL,
                                            location: _,
                                        }),
                                        (0, m.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("860350"),
                                                n.e("142753"),
                                                n.e("207998"),
                                                n.e("179652"),
                                                n.e("689827"),
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
                                    !I && (0, l.jsx)("div", { className: tm.fw }),
                                    (0, l.jsx)("div", {
                                        className: tm.P0,
                                        children: (0, l.jsx)(tt.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tm.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(eO.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: eS.intl.string(eS.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case et.op.STICKER: {
                    let a = (T ? (0, ef.W$)(e.sticker, N, v) : ef.Ux.SENDABLE) !== ef.Ux.SENDABLE,
                        o = j && a && !k,
                        m = !j && a,
                        g = t && null != b && (0, em.FD)(e.sticker) && !b.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...P, key: e.sticker.id },
                        (0, l.jsxs)(p.D, {
                            className: s()(tm.yI, S, { [tm.PV]: u, [tm.TV]: L === e.sticker.id }),
                            innerRef: C,
                            tabIndex: R,
                            onFocus: w ?? y,
                            onMouseMove: y,
                            onClick: function (t) {
                                if (h?.current === !0 || f?.current === !0) return;
                                let n = t.altKey;
                                (n && e.type === et.op.STICKER && !(0, em.o1)(e.sticker.id) && M(e.sticker.id),
                                    x?.(e, n));
                            },
                            onContextMenu: function (e) {
                                (0, tu.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("638221"),
                                        n.e("904774"),
                                        n.e("446132"),
                                    ]).then(n.bind(n, 233503));
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                            style: O,
                            "data-type": el.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, l.jsx)(ta.A, { children: (0, ep.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !I && (0, l.jsx)("div", { className: tm.fw }),
                                        (0, l.jsx)(ep.A, {
                                            className: s()(tm.SI, {
                                                [tm.ot]:
                                                    I && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [tm.Q$]: c,
                                                [tm.No]: m,
                                                [tm.UK]: o,
                                            }),
                                            disableAnimation: !u && !r,
                                            enlargeOnInteraction: I,
                                            isInteracting: u,
                                            maskAsset: u,
                                            sticker: e.sticker,
                                            size: A,
                                        }),
                                        g ? (0, l.jsx)(th, { size: 20 }) : null,
                                        o
                                            ? (0, l.jsx)("div", {
                                                  className: tm.MC,
                                                  children: (0, l.jsx)(to.LockIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: tm.hz,
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
function tf(e) {
    let { descriptor: t, currentUser: n, channel: l, onSelect: i } = e;
    switch ((0, ef.W$)(t.sticker, n, l)) {
        case ef.Ux.SENDABLE:
            i(t);
            break;
        case ef.Ux.SENDABLE_WITH_PREMIUM:
            (q.default.track(ex.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: ex.JJy.STICKER_PICKER_UPSELL,
                location_object: ex.ZSU.STICKER,
            }),
                Y(!0));
        case ef.Ux.SENDABLE_WITH_BOOSTED_GUILD:
        case ef.Ux.NONSENDABLE:
    }
}
var tg = n(457231);
let tx = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tE = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    tS = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    ty = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tC = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tA = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tb = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tI = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tv = (0, Q.xI)(O.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tN = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tT = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tj = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tk = tN + 2 + tj,
    t_ = tT + 2 + tj,
    tR = [tS, tC, tA, tb],
    tw = [ty, tC, tA, tb],
    tO = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tL = "sticker-search-nitro",
    tP = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tM(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: tg.yB,
        children: tP.map((e) =>
            (0, l.jsx)(
                p.D,
                {
                    className: tg.x_,
                    onClick: () => t(e),
                    children: (0, l.jsx)(eO.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
function tD(e, t) {
    return null != t && 0 !== t.sendableWithPremium.length && e === +(t.sendable.length > 0);
}
function tU(e, t) {
    return null != t && 0 === e && t.sendable.length > 0 && t.sendableWithPremium.length > 0;
}
let tV = i.forwardRef(function (e, t) {
    let {
            collapsedStickersCategories: n,
            gridWidth: r,
            filteredStickers: a,
            getStickerItemProps: o,
            getStickerRowProps: c,
            gutterWidth: h,
            isUsingKeyboardNavigation: m,
            onSelectSticker: p,
            rowCount: f,
            rowCountBySection: g,
            stickersCategories: x,
            stickersGrid: E,
            channel: S,
        } = e,
        y = i.useRef(!1),
        C = i.useRef(null),
        [A, b] = U.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], w.x),
        { analyticsLocations: I } = (0, D.Ay)(M.A.STICKER_PICKER),
        v = (0, V.RQ)((e) => e.searchQuery),
        N = (0, d.bG)([k.A], () => k.A.getPremiumPacks()),
        T = (0, d.bG)([z.default], () => z.default.getCurrentUser()),
        j = eZ.Ay.canUseCustomStickersEverywhere(T),
        [_, R] = i.useState(0),
        O = K("web.StickerPickerList"),
        L = i.useMemo(() => new Set(N.map((e) => e.id)), [N]),
        F = eg(x, T, S, O),
        {
            renderRow: B,
            renderSection: G,
            renderSectionFooter: Q,
            sectionFooterHeight: $,
            renderSectionHeader: Z,
            sectionHeaderHeight: X,
        } = (function (e) {
            let {
                    collapsedStickersCategories: t,
                    gridWidth: n,
                    onSelectSticker: r,
                    getStickerItemProps: a,
                    getStickerRowProps: o,
                    gutterWidth: u,
                    inspectedStickerPosition: c,
                    isScrolling: d,
                    isUsingKeyboardNavigation: h,
                    stickersGrid: m,
                    stickersCategories: p,
                    filteredStickers: f,
                    ownedStickerPacks: g,
                    channel: x,
                    currentUser: E,
                    activeSectionIndex: S,
                    upsellRestyleEnabled: y,
                } = e,
                C = (0, P.p)(),
                { handleStickerInspect: A, handleSelect: b } = (function (e) {
                    let { onSelectSticker: t, channel: n, currentUser: l } = e,
                        r = (0, P.p)(),
                        s = (0, V.RQ)((e) => e.searchQuery);
                    return {
                        handleStickerInspect: i.useCallback((e) => {
                            let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: l } = e;
                            (U.bM.setActiveCategoryIndex(l),
                                U.bM.setInspectedExpressionPosition(n, t, el.t.MOUSE_EVENT),
                                e.type === et.op.STICKER && U.bM.setSearchPlaceholder(e.sticker.name));
                        }, []),
                        handleSelect: i.useCallback(
                            (e, i) => {
                                if (e.type !== et.op.STICKER) return;
                                let { sticker: a } = e;
                                if (null == a) return;
                                let o = {
                                    ...r.location,
                                    object: "" === s ? ex.ZSU.STICKER_PICKER_VIEW_ALL : ex.ZSU.STICKER_SEARCH_VIEW_ALL,
                                };
                                (0, ef.W$)(a, l, n) !== ef.Ux.SENDABLE
                                    ? tf({ descriptor: e, currentUser: l, channel: n, onSelect: t })
                                    : i
                                      ? (0, em.o1)(a.id)
                                          ? (0, eX.vr)(a.id)
                                          : ((0, ee.Dt)({ sticker: a, location: { ...o, object: ex.ZSU.STICKER } }),
                                            (0, eX.uK)(a.id))
                                      : t(e);
                            },
                            [r.location, s, l, n, t],
                        ),
                    };
                })({ onSelectSticker: r, channel: x, currentUser: E }),
                [I, v] = i.useState(!1),
                N = i.useCallback((e) => {
                    H.tP.updateSetting(Array.from(e));
                }, []),
                T = i.useCallback(
                    (e) => {
                        let t = m[e],
                            i = t?.[0]?.gridSectionIndex,
                            r = null != i && ((y && tD(i, f)) || (null == f && p[i]?.isNitroLocked === !0));
                        return null != t
                            ? (0, l.jsx)(
                                  tp,
                                  {
                                      getStickerItemProps: a,
                                      getStickerRowProps: o,
                                      gutterWidth: u,
                                      inspectedStickerPosition: c,
                                      isScrolling: d,
                                      isUsingKeyboardNavigation: h,
                                      onInspect: A,
                                      onSelect: b,
                                      rowIndex: e,
                                      stickerClassName: tg.yI,
                                      stickerDescriptors: t,
                                      stickerSize: n > tx ? tN : tT,
                                      stickerPadding: 1,
                                      preferAnimation: n <= tE,
                                      ownedStickerPacks: g,
                                      isDisplayingIndividualStickers: !0,
                                      channel: x,
                                      currentUser: E,
                                      upsellRestyleEnabled: y,
                                      isSectionNitroLocked: r,
                                  },
                                  e,
                              )
                            : null;
                    },
                    [m, a, o, u, c, d, h, A, b, n, g, x, E, f, p, y],
                ),
                j = i.useCallback(
                    (e) => {
                        let t = p[e],
                            n = p[e + 1];
                        return t?.isNitroLocked === !0 && (null == n || !0 !== n.isNitroLocked);
                    },
                    [p],
                ),
                _ = i.useCallback(
                    (e) => {
                        let t = p[e],
                            n = p[e + 1];
                        return t?.isNitroLocked !== !0 && n?.isNitroLocked === !0;
                    },
                    [p],
                ),
                R = i.useCallback(
                    (e, t) => {
                        let n = p[e],
                            i = y && tD(e, f),
                            r = i || (null == f && n?.isNitroLocked === !0),
                            a = i || (null == f && j(e));
                        return null == f || r
                            ? (0, l.jsx)(
                                  "div",
                                  { role: "rowgroup", className: s()({ [tg.cW]: r, [tg.fV]: a }), children: t },
                                  e,
                              )
                            : t;
                    },
                    [f, p, y, j],
                ),
                w = i.useCallback(
                    function (e) {
                        let { isStickerPack: n = !0 } =
                                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = new Set(t),
                            i = t.has(e);
                        (i ? l.delete(e) : l.add(e),
                            q.default.track(ex.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: C?.location,
                                tab: eE.kx.STICKER,
                                collapsed: !i,
                                sticker_pack_id: n ? e : null,
                            }),
                            N(l));
                    },
                    [C, t, N],
                ),
                O = i.useCallback(
                    (e) => {
                        let n = p[e];
                        if (null != f) {
                            let { sendable: n, sendableWithPremium: i } = f;
                            if (0 === e && n.length > 0) return null;
                            if (y && tD(e, f)) {
                                let n = S === e;
                                return (0, l.jsx)(
                                    eQ.A,
                                    {
                                        className: s()(tg.jH, tg.M0, { [tg.RA]: !n, [tg.sp]: n }),
                                        "aria-label": eS.intl.string(eS.t.pAF6xE),
                                        icon: (0, l.jsx)(eV.t, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(tL),
                                        onClick: () => w(tL, { isStickerPack: !1 }),
                                        children: eS.intl.string(eS.t.pAF6xE),
                                    },
                                    "stickers-available-with-nitro-header",
                                );
                            }
                            let r = n.length > 0 && i.length > 0;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    r ? (0, l.jsx)("div", { className: tg.yF, children: (0, l.jsx)(eH.c, {}) }) : null,
                                    (0, l.jsx)(
                                        eQ.A,
                                        {
                                            className: tg.jH,
                                            "aria-label": eS.intl.string(eS.t.wbfJFh),
                                            children: eS.intl.string(eS.t["05Z/0l"]),
                                        },
                                        "stickers-you-might-like-header",
                                    ),
                                ],
                            });
                        }
                        let i = p[e]?.isNitroLocked === !0,
                            r = s()(tg.jH, { [tg.M0]: y, [tg.RA]: i && S !== e, [tg.sp]: i && S === e });
                        switch (n.type) {
                            case et.Z2.FAVORITE:
                                return (0, l.jsx)(
                                    eQ.A,
                                    {
                                        className: r,
                                        "aria-label": eS.intl.formatToPlainString(eS.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(ei.StarIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => w(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case et.Z2.RECENT:
                                return (0, l.jsx)(
                                    eQ.A,
                                    {
                                        className: r,
                                        "aria-label": eS.intl.formatToPlainString(eS.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(er.ClockIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => w(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case et.Z2.GUILD:
                            case et.Z2.EMPTY_GUILD_UPSELL: {
                                let e = eh.A.getGuild(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(
                                    eQ.A,
                                    {
                                        className: r,
                                        "aria-label": eS.intl.formatToPlainString(eS.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(eu.A, { guild: e, height: 16, width: 16 }),
                                        isCollapsed: t.has(e.id),
                                        onClick: () => w(e.id),
                                        children: e.name,
                                    },
                                    `h${e.id}`,
                                );
                            }
                            case et.Z2.PACK: {
                                let e = k.A.getStickerPack(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(
                                    eQ.A,
                                    {
                                        className: r,
                                        "aria-label": eS.intl.formatToPlainString(eS.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(ep.A, {
                                            disableAnimation: !0,
                                            size: 12,
                                            sticker: (0, em.Id)(e),
                                        }),
                                        isCollapsed: t.has(e.id),
                                        onClick: () => w(e.id),
                                        children: e.name,
                                    },
                                    `h${e.id}`,
                                );
                            }
                        }
                    },
                    [S, t, f, p, w, y],
                ),
                L = i.useCallback(
                    (e) => {
                        if (null != f) {
                            let { sendable: t, sendableWithPremium: n } = f;
                            return 0 === e && t.length > 0
                                ? 0
                                : y && tD(e, f)
                                  ? tv
                                  : tv + (t.length > 0 && n.length > 0 ? tI : 0);
                        }
                        return tv;
                    },
                    [f, y],
                );
            return {
                renderRow: T,
                renderSection: R,
                renderSectionHeader: O,
                sectionHeaderHeight: L,
                renderSectionFooter: i.useCallback(
                    (e) => {
                        if (null != f)
                            return y
                                ? tD(e, f)
                                    ? (0, l.jsx)("div", { className: tg.pQ })
                                    : tU(e, f)
                                      ? (0, l.jsx)(e$.Ay, { className: tg.$2 })
                                      : null
                                : null;
                        let n = p[e],
                            i = t.has(n.id),
                            r =
                                n.type !== et.Z2.EMPTY_GUILD_UPSELL || i
                                    ? null
                                    : (0, l.jsx)(
                                          e6,
                                          {
                                              className: tg.Ij,
                                              guildId: n.id,
                                              channel: x,
                                              shouldTrackUpsellViewed: !I,
                                              setTrackedUpsellViewed: v,
                                          },
                                          `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                      ),
                            s = null;
                        return (
                            _(e)
                                ? (s = (0, l.jsx)(e$.Ay, { className: tg.$2 }))
                                : j(e) && (s = (0, l.jsx)("div", { className: tg.pQ })),
                            null == r && null == s ? null : (0, l.jsxs)(l.Fragment, { children: [r, s] })
                        );
                    },
                    [p, t, f, x, I, y, _, j],
                ),
                sectionFooterHeight: i.useCallback(
                    (e) => {
                        if (null != f) return y ? (tD(e, f) ? 33 : tU(e, f) ? e$.kg : 0) : 0;
                        let n = p[e],
                            l = t.has(n.id),
                            i = 0;
                        return (
                            n.type !== et.Z2.EMPTY_GUILD_UPSELL || l || (i += tO),
                            _(e) ? (i += e$.kg) : j(e) && (i += 33),
                            i
                        );
                    },
                    [f, y, p, t, _, j],
                ),
            };
        })({
            collapsedStickersCategories: n,
            gridWidth: r,
            stickersCategories: F,
            stickersGrid: E,
            isScrolling: y,
            isUsingKeyboardNavigation: m,
            onSelectSticker: p,
            getStickerItemProps: o,
            getStickerRowProps: c,
            gutterWidth: h,
            inspectedStickerPosition: b,
            filteredStickers: a,
            ownedStickerPacks: L,
            channel: S,
            currentUser: T,
            activeSectionIndex: _,
            upsellRestyleEnabled: O,
        }),
        { onScroll: J, upsell: en } = (function (e) {
            let {
                    upsellRestyleEnabled: t,
                    canUseStickersEverywhere: n,
                    listRef: r,
                    searchQuery: s,
                    categories: a,
                    sectionHeaderHeight: o,
                    sectionFooterHeight: c,
                } = e,
                { location: d } = (0, P.p)(),
                { analyticsLocations: h } = (0, D.Ay)(M.A.STICKER_PICKER),
                [m, p] = i.useState(!1),
                f = i.useMemo(() => a.map((e) => ({ isNitroLocked: !0 === e.isNitroLocked })), [a]),
                g = i.useCallback(
                    (e) => {
                        t &&
                            te({
                                listRef: r,
                                searchQuery: s,
                                nitroLockedSectionStates: f,
                                scrollTop: e,
                                sectionHeaderHeight: o,
                                sectionFooterHeight: c,
                                setShowUpsell: p,
                            });
                    },
                    [t, r, f, s, c, o],
                ),
                x = m && "" === s && t;
            if (
                (i.useEffect(() => {
                    !x ||
                        n ||
                        u.Fr ||
                        (q.default.track(ex.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: eB.e.STICKER_PICKER_FLOATING_UPSELL,
                            location: d,
                            location_stack: h,
                        }),
                        (0, eL.sq)(ex.U7l.PREMIUM_UPSELL_VIEWED, h, () =>
                            (0, eP.uq)(eB.e.STICKER_PICKER_FLOATING_UPSELL),
                        ));
                }, [d, h, n, x]),
                !t || n || u.Fr)
            )
                return { onScroll: g, upsell: null };
            let E = eS.intl.format(eS.t.eontIh, {
                    nitroTierName: (0, eZ.Dd)(eB.PremiumTypes.TIER_2),
                    onClick: () => {
                        (q.default.track(ex.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_section: ex.JJy.STICKER_PICKER_FLOATING_UPSELL,
                        }),
                            Y(!0));
                    },
                }),
                S = (0, eZ.LE)((0, e4.qD)(), eB.pe.TIER_2) ?? eS.intl.string(eS.t.BmJkbd);
            return {
                onScroll: g,
                upsell: (0, l.jsx)(e9.d, {
                    showUpsell: x,
                    text: E,
                    button: S,
                    buttonAnalyticsObject: { section: ex.JJy.STICKER_PICKER_FLOATING_UPSELL },
                }),
            };
        })({
            upsellRestyleEnabled: O,
            canUseStickersEverywhere: j,
            listRef: C,
            searchQuery: v,
            categories: F,
            sectionHeaderHeight: X,
            sectionFooterHeight: $,
        });
    i.useEffect(() => {
        O && J(C.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [O, J, g]);
    let es = (0, W.Fk)({
            activeCategoryIndex: A,
            isScrolling: y,
            listRef: C,
            onActiveCategoryIndexChange: U.bM.setActiveCategoryIndex,
            scrollOffset: 20,
            searchQuery: v,
        }),
        ea = i.useCallback((e) => {
            let t = C.current?.getSectionDescriptors();
            null == t ||
                R(
                    Math.max(
                        t.findLastIndex((t) => t.offset.top <= e),
                        0,
                    ),
                );
        }, []);
    i.useLayoutEffect(() => {
        O && ea(C.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [O, ea, a, g]);
    let eo = i.useCallback(
        (e) => {
            (es(e), O && ea(e), J(e));
        },
        [es, J, ea, O],
    );
    return (
        (0, W.FV)({ searchQuery: v, activeCategoryIndex: A, listRef: C }),
        i.useImperativeHandle(
            t,
            () => ({
                scrollTo: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return C.current?.scrollTo(...t);
                },
                getRowDescriptors: () => C.current?.getRowDescriptors() ?? [],
                getSectionDescriptors: () => C.current?.getSectionDescriptors() ?? [],
                scrollToSectionTop: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return C.current?.scrollToSectionTop(...t);
                },
                scrollRowIntoView: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return C.current?.scrollRowIntoView(...t);
                },
                getScrollerNode: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return C.current?.getScrollerNode(...t);
                },
                scrollIntoViewNode: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return C.current?.scrollIntoViewNode(...t);
                },
                getListDimensions: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return C.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                },
            }),
            [],
        ),
        (0, l.jsx)(D.f5, {
            value: I,
            children: (0, l.jsxs)("div", {
                className: tg.iE,
                children: [
                    (0, l.jsxs)("div", {
                        className: tg.AD,
                        children: [
                            null != a && 0 === a.sendable.length && 0 === a.sendableWithPremium.length
                                ? (0, l.jsx)(ez.A, {
                                      message: eS.intl.string(eS.t["zc+LQd"]),
                                      className: tg.__invalid_noSearchResultsContainer,
                                      suggestions: (0, l.jsx)(tM, { onSuggestionClick: (e) => (0, V.Ri)(e, !0) }),
                                  })
                                : (0, l.jsx)(eq.A, {
                                      role: "none presentation",
                                      listPadding: null != a ? tw : tR,
                                      onScroll: eo,
                                      renderRow: B,
                                      renderSection: G,
                                      renderSectionHeader: Z,
                                      renderSectionFooter: Q,
                                      rowCount: f,
                                      rowCountBySection: g,
                                      rowHeight: r > tx ? tk : t_,
                                      sectionHeaderHeight: X,
                                      sectionFooterHeight: $,
                                      stickyHeaders: !0,
                                      ref: C,
                                  }),
                            en,
                        ],
                    }),
                    (0, l.jsx)(ts, { stickersGrid: E }),
                ],
            }),
        })
    );
});
var tW = n(602034),
    tF = n(683438),
    tB = n(909802);
let tK = i.forwardRef(function (e, t) {
    let { onKeyDown: n, stickersListRef: r, channel: s } = e,
        a = (0, j.ZO)(s),
        o = i.useRef(null),
        { searchQuery: u, isSearchSuggestion: c } = (0, V.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            w.x,
        ),
        d = U.bM.useStore((e) => e.searchPlaceholder),
        [h, m] = U.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], w.x),
        p = i.useCallback(
            (e) => {
                (U.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    U.bM.setInspectedExpressionPosition(0, 0),
                    U.bM.setSearchPlaceholder(null),
                    (0, V.Ri)(e),
                    r.current?.scrollTo(0));
            },
            [r],
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
            className: tB.i,
            children: (0, l.jsx)(tF.I, {
                autoFocus: a,
                disabled: !a,
                query: u,
                ref: o,
                placeholder: d ?? (a ? eS.intl.string(eS.t.dt5h1C) : eS.intl.string(eS.t["Pck/4U"])),
                onClear: f,
                onKeyDown: n,
                onChange: p,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": eF.lq,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, tW.Aq)(eF.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
});
n(321073);
var tG = n(802842),
    tH = n(330422),
    tz = n(609178);
function tq(e) {
    let { onUpsellClicked: t } = e,
        { location: n } = (0, P.p)(),
        { analyticsLocations: i } = (0, D.Ay)(M.A.STICKER_PICKER),
        r = (0, V.RQ)((e) => e.searchQuery);
    return (0, l.jsx)(tz.A, {
        title: eS.intl.string(eS.t.Eukdgl),
        description: eS.intl.string(eS.t.sMmd7s),
        analyticsLocationSection: ex.JJy.STICKER_PICKER_UPSELL,
        onClose: () => Y(!1),
        onUpsellClicked: t,
        upsellViewedTrackingData: {
            type: eB.e.STICKER_PICKER_UPSELL,
            location: { ...n, object: ex.ZSU.STICKER },
            location_stack: i,
            sku_id: (0, eZ.mH)(eZ.Ay.getSkuIdForPremiumType(eB.PremiumTypes.TIER_2)),
            has_search_query: "" !== r,
        },
        graphic: (0, l.jsx)(tH.n, { alt: "", ariaHidden: !0 }),
        useNitroGradient: !0,
    });
}
var tQ = n(789645),
    t$ = n(964486),
    tZ = n(420136),
    tX = n(939383);
function tJ() {
    return Y(!1);
}
function tY(e) {
    let { onLearnMore: t } = e,
        { analyticsLocations: n } = (0, D.Ay)(M.A.PREMIUM_UPSELL);
    (0, i.useEffect)(() => {
        (q.default.track(ex.HAw.PREMIUM_UPSELL_VIEWED, {
            location_section: ex.JJy.STICKER_PICKER_UPSELL,
            type: eB.e.STICKER_PICKER_UPSELL,
            location_stack: n,
        }),
            (0, eL.sq)(ex.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, eP.uq)(eB.e.STICKER_PICKER_UPSELL)));
    }, [n]);
    let r = (0, i.useRef)(null);
    (0, t$.Ay)(() => {
        r.current?.focus();
    });
    let a = (0, G.V)(),
        o = (0, eM.O)(),
        u = a?.subscriptionTrial?.skuId === eB.pe.TIER_0,
        c = null != a || null != o;
    return (0, l.jsxs)("div", {
        ref: r,
        tabIndex: -1,
        "aria-label": eS.intl.string(eS.t.jJG1pl),
        className: s()(tZ.VL, { [tZ.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eD.Ay, {
                      trialOffer: a,
                      discountOffer: o,
                      onClose: tJ,
                      type: eB.e.STICKER_PICKER_UPSELL,
                      subscriptionTier: a?.subscriptionTrial?.skuId ?? eB.pe.TIER_2,
                      children: u
                          ? eS.intl.format(eS.t.MAGagw, {
                                planName: (0, eZ.RH)(eB.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : eS.intl.format(eS.t.jt7JX6, { onClick: t }),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: tZ.Tn, src: tX, alt: eS.intl.string(eS.t.do7AoM) }),
                          (0, l.jsx)(eO.E, {
                              className: tZ.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: eS.intl.string(eS.t.jJG1pl),
                          }),
                          (0, l.jsx)(eO.E, {
                              className: tZ.GR,
                              variant: "text-md/normal",
                              children: eS.intl.format(eS.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eW, { analyticsSection: ex.JJy.EXPRESSION_PICKER }),
            (0, l.jsx)(p.D, {
                className: tZ.kz,
                onClick: tJ,
                "aria-label": eS.intl.string(eS.t.cpT0Cq),
                children: (0, l.jsx)(tQ.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var t0 = n(970099);
let t1 = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    t2 = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    t5 = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    t8 = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    t3 = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    t6 = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    t7 = (0, Q.xI)(O.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    t4 = t6 + 2,
    t9 = t7 + 2,
    ne = R()(ee.Qz, 200),
    nt = R()(ee.HA, 200),
    nn = i.forwardRef(function (e, t) {
        let { containerWidth: r, channel: s, onSelectSticker: a, closePopout: o } = e,
            u = K("web.StickerPicker"),
            { location: c } = (0, P.p)(),
            { analyticsLocations: h } = (0, D.Ay)(M.A.STICKER_PICKER),
            p = (0, G.V)()?.subscriptionTrial != null,
            f = i.useRef(null),
            g = i.useRef(null),
            x = i.useRef(null),
            E = J((e) => e.showPremiumUpsell),
            [S, y] = (0, V.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], w.x),
            C = i.useRef("");
        i.useImperativeHandle(t, () => ({ onPickerOpen: em }));
        let A = (0, j.pD)(s),
            b = 0 === A.filter((e) => e.type !== et.Z2.EMPTY_GUILD_UPSELL).length,
            I = (0, W.oV)({
                gridWrapperRef: f,
                containerWidth: r,
                showingEmptyState: b,
                listPaddingLeft: t2,
                listScrollbarWidth: 8,
            }),
            v = H.tP.useSetting(),
            N = i.useMemo(() => new Set(v), [v]),
            T = (0, d.bG)([z.default], () => z.default.getCurrentUser()),
            _ = i.useMemo(
                () =>
                    (function (e, t, n) {
                        if ("" === e) return null;
                        let l = [],
                            i = [];
                        return (
                            tG.Ay.queryStickers([e], !0)
                                .map((e) => {
                                    let { sticker: t } = e;
                                    return t;
                                })
                                .forEach((e) => {
                                    let r = (0, ef.W$)(e, t, n);
                                    r === ef.Ux.SENDABLE ? l.push(e) : r === ef.Ux.SENDABLE_WITH_PREMIUM && i.push(e);
                                }),
                            { sendable: l, sendableWithPremium: i }
                        );
                    })(S, T, s),
                [S, T, s],
            ),
            R = (0, j.Gc)(),
            O = (0, j.UT)(),
            L = (0, d.cf)([k.A], () => k.A.getAllGuildStickers()),
            { sendable: B = [], sendableWithPremium: Q = [] } = _ ?? {},
            $ = B.length + Q.length,
            Z = i.useCallback(
                (e) => {
                    ("" === S ? (0, ee.ry)(e) : (0, ee.nQ)(e, S, $), a(e.sticker, et.D6.STICKER_PICKER));
                },
                [a, S, $],
            ),
            X = null != I && I > t1,
            {
                rowCount: Y,
                rowCountBySection: ei,
                stickersGrid: er,
                gutterWidth: es,
                columnCounts: ea,
            } = (0, j._c)({
                filteredStickers: _,
                stickersCategories: A,
                collapsedStickersCategories: N,
                collapsePremiumSearchSection: u && N.has(tL),
                listWidth: I,
                listPaddingRight: t5,
                stickerNodeMargin: X ? t8 : t3,
                stickerNodeWidth: X ? t4 : t9,
            }),
            {
                getItemProps: eo,
                getRowProps: eu,
                gridContainerProps: ec,
                handleGridContainerKeyDown: ed,
                isUsingKeyboardNavigation: eh,
            } = (function (e) {
                let {
                        columnCounts: t,
                        stickersGrid: n,
                        stickersListRef: l,
                        store: r,
                        gridNavigatorId: s,
                        setInspectedStickerPosition: a,
                        onGridItemSelect: o,
                    } = e,
                    u = (0, P.p)(),
                    c = i.useCallback(
                        (e) => {
                            o(e, u);
                        },
                        [o, u],
                    ),
                    d = i.useCallback(
                        (e, t) => {
                            a(e, t, el.t.GRID_NAVIGATOR_EVENT);
                        },
                        [a],
                    ),
                    {
                        gridDispatch: h,
                        getItemProps: m,
                        getRowProps: p,
                        gridContainerProps: f,
                        handleGridContainerKeyDown: g,
                        isUsingKeyboardNavigation: x,
                    } = (0, W.Ff)({
                        columnCounts: t,
                        gridNavigatorId: s,
                        itemGrid: n,
                        itemList: l,
                        onGridNavigatorItemSelect: c,
                        onGridNavigatorPositionChange: d,
                    });
                return (
                    i.useEffect(
                        () =>
                            r.subscribe(
                                (e) => e.inspectedExpressionPosition,
                                (e) => {
                                    if (null == e) return;
                                    let { columnIndex: t, rowIndex: n, source: l } = e;
                                    l !== el.t.GRID_NAVIGATOR_EVENT &&
                                        h({ type: en.n.SET_FOCUSED_POSITION, x: t, y: n });
                                },
                            ),
                        [h, r],
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
                columnCounts: ea,
                stickersListRef: g,
                stickersGrid: er,
                onGridItemSelect: i.useCallback(
                    (e, t) => {
                        let { location: i } = t;
                        switch (e.type) {
                            case et.op.CREATE_STICKER:
                                (q.default.track(ex.HAw.OPEN_MODAL, { type: ex.JJy.CREATE_STICKER_MODAL, location: c }),
                                    (0, m.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("860350"),
                                            n.e("142753"),
                                            n.e("207998"),
                                            n.e("179652"),
                                            n.e("689827"),
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
                            case et.op.STICKER:
                                if (null == e.sticker) break;
                                tf({ descriptor: e, currentUser: T, channel: s, onSelect: Z });
                        }
                    },
                    [c, T, s, Z],
                ),
                store: U.bM,
                setInspectedStickerPosition: U.bM.setInspectedExpressionPosition,
                gridNavigatorId: eF.lq,
            });
        function em() {
            let e = s.getGuildId(),
                t = [];
            null !== e && (t = k.A.getStickersByGuildId(e) ?? []);
            let n = 0;
            (null != L &&
                [...L.values()].forEach((e) => {
                    n += e.length;
                }),
                (0, ee.p4)({
                    containerWidth: r,
                    favoriteStickers: R,
                    frequentlyUsedStickers: O,
                    guildStickers: t,
                    stickersTotal: n,
                }));
        }
        (i.useEffect(() => U.bM.resetStoreState, []),
            i.useEffect(() => {
                ("" === C.current && "" !== S && (0, ee.Fg)(), (C.current = S));
            }, [S]),
            i.useEffect(() => {
                0 === $ ? ne(S) : nt(S, $, y);
            }, [S, $, y]),
            i.useLayoutEffect(() => {
                x.current?.focus();
            }, []));
        let ep = i.useCallback(() => {
            (o(),
                q.default.track(ex.HAw.PREMIUM_PROMOTION_OPENED, { location_section: ex.JJy.STICKER_PICKER_UPSELL }),
                (0, F.e)());
        }, [o]);
        return (0, l.jsxs)(D.f5, {
            value: h,
            children: [
                !(p && b) &&
                    (0, l.jsx)("div", {
                        className: t0.wx,
                        children: (0, l.jsx)(tK, { ref: x, onKeyDown: ed, stickersListRef: g, channel: s }),
                    }),
                b
                    ? (0, l.jsx)(eG, { className: t0.p$, onClose: o })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  ref: f,
                                  className: t0.AD,
                                  id: eF.lq,
                                  ...ec,
                                  children:
                                      null != I
                                          ? (0, l.jsx)(tV, {
                                                ref: g,
                                                collapsedStickersCategories: N,
                                                filteredStickers: _,
                                                getStickerItemProps: eo,
                                                getStickerRowProps: eu,
                                                gridWidth: I,
                                                gutterWidth: es,
                                                isUsingKeyboardNavigation: eh,
                                                onSelectSticker: Z,
                                                rowCount: Y,
                                                rowCountBySection: ei,
                                                stickersCategories: A,
                                                stickersGrid: er,
                                                channel: s,
                                            })
                                          : null,
                              }),
                              (0, l.jsx)(eR, { stickersListRef: g, channel: s }),
                          ],
                      }),
                E && (u ? (0, l.jsx)(tq, { onUpsellClicked: o }) : (0, l.jsx)(tY, { onLearnMore: ep })),
            ],
        });
    }),
    nl = i.forwardRef(function (e, t) {
        return (
            (0, j.XQ)(),
            (0, l.jsx)("div", {
                className: t0.iE,
                id: eF.GX,
                "aria-labelledby": eF.LD,
                role: "tabpanel",
                children: e.isLoading ? (0, l.jsx)(L.y, { className: t0.Mz }) : (0, l.jsx)(nn, { ...e, ref: t }),
            })
        );
    });
var ni = n(742023),
    nr = n(712687),
    ns = n(625494),
    na = n(49999),
    no = n(732139),
    nu = n(307731),
    nc = n(818625);
let nd = 498 + no.as.MEDIUM,
    nh = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: r = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(p.D, {
            role: "tab",
            autoFocus: r,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                (y.Ay.trackWithMetadata(ex.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, V.U)(i));
            },
            "aria-current": t ? "page" : void 0,
            className: s()(n, nc.oi, nc.pc, { [nc.Mv]: t }),
        });
    }),
    nm = i.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: r,
                onSelectEmoji: a,
                onSelectSticker: p,
                onSelectSound: _,
                channel: R,
                type: w,
                position: O,
                align: L,
                positionLayerClassName: P,
                closeOnModalOuterClick: M = !1,
                parentModalKey: D,
            } = e,
            U = i.useRef(null),
            W = i.useRef(!1),
            F = i.useRef(null),
            B = i.useRef(null),
            { drawerWidth: K, handleDrawerResizeHandleMouseDown: G } = (function (e) {
                let { positionContainerRef: t, drawerRef: n, orientation: l } = e,
                    r = (0, d.bG)([ni.Ay], () => ni.Ay.expressionPickerWidth),
                    [s, a] = i.useState(window.innerWidth),
                    [u, c] = i.useState(r ?? eE.wp.MIN),
                    h = i.useMemo(() => {
                        switch (u) {
                            case eE.wp.MIN:
                                return 498;
                            case eE.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    m = i.useCallback(
                        (e) => {
                            let t = e >= s ? eE.wp.MAX : e <= 498 ? eE.wp.MIN : e;
                            (null == t && null != n.current && (n.current.style.width = ""),
                                x.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                c(t));
                        },
                        [n, s],
                    ),
                    p = (0, S.A)({
                        initialElementDimension: h,
                        maxDimension: s,
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
                                (e.stopPropagation(), null != t.current && a(t.current.offsetWidth), p(e));
                            },
                            [t, p],
                        ),
                    }
                );
            })({
                positionContainerRef: U,
                drawerRef: B,
                orientation: "left" === L ? S.R.HORIZONTAL_RIGHT : S.R.HORIZONTAL_LEFT,
            }),
            H = (0, V.RQ)((e) => e.activeView),
            z = (0, j.ZO)(R),
            { renderWindow: q, windowDispatch: Q } = i.useContext(v.Ay),
            $ = (0, d.bG)([k.A], () => !k.A.hasLoadedStickerPacks),
            Z = (0, N.tj)({ location: "expression_picker" }),
            X = (0, d.bG)([nr.A], () => nr.A.isOpen()),
            J = null != D,
            Y = (0, m.useIsModalAtTop)(D ?? ""),
            ee = w.gifs?.allowSending && !u.Fr && null != r,
            et = w.stickers?.allowSending && null != p,
            en = !w.expressionPicker?.onlyEmojis && (ee || et),
            el = i.useCallback(
                (e) => {
                    if ((!J && (0, m.hasAnyModalOpen)()) || (J && !(Y && M)) || X || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + eE.VQ)) return;
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
                    (null == n || "BODY" === n.tagName) && ns._.dispatchToLastSubscribed(ex.jej.TEXTAREA_FOCUS);
                },
                [M, Y, J, X],
            ),
            ei = i.useCallback(() => {
                (0, V.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                H === eE.kx.GIF && (0, V.v8)();
            }
            return (
                q.addEventListener("mousedown", el),
                q.addEventListener("contextmenu", el),
                Q.subscribe(ex.jej.POPOUT_CLOSE, ei),
                ns._.subscribe(ex.jej.CLOSE_GIF_PICKER, e),
                () => {
                    (q.removeEventListener("mousedown", el),
                        q.removeEventListener("contextmenu", el),
                        Q.unsubscribe(ex.jej.POPOUT_CLOSE, ei),
                        ns._.unsubscribe(ex.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [H, ei, el, q, Q]),
            (0, f.tj)(U));
        let [er, es] = (0, C.kn)(Z ? [h.M.SOUNDMOJI_BADGE] : [], void 0, !1),
            [ea, eo] = i.useState(!1);
        (i.useEffect(() => {
            H === eE.kx.SOUNDBOARD && eo(!0);
        }, [H]),
            i.useEffect(
                () => () => {
                    ea && es(na.i.TAKE_ACTION);
                },
                [ea, es],
            ),
            i.useEffect(() => {
                (0, V.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!J && (0, m.hasAnyModalOpen)()) || (J && !Y)) && (0, V.v8)();
            }, [Y, J]),
            i.useEffect(() => {
                null != B.current &&
                    !W.current &&
                    (H === eE.kx.EMOJI
                        ? F?.current?.onPickerOpen != null && (F?.current?.onPickerOpen(), (W.current = !0))
                        : H === eE.kx.STICKER
                          ? F?.current?.onPickerOpen == null || $ || (F?.current?.onPickerOpen(), (W.current = !0))
                          : (y.Ay.trackWithMetadata(ex.HAw.EXPRESSION_PICKER_OPENED, {
                                width: B.current.offsetWidth,
                                tab: H,
                                badged: !1,
                            }),
                            (W.current = !0)));
            }));
        let eu = i.useCallback((e, t) => _?.(e, "emoji_picker", t), [_]),
            ec = i.useCallback((e, t) => _?.(e, "soundboard_picker", t), [_]),
            ed = w.soundmoji?.allowSending === !0 && null != _,
            eh = "left" === L ? "right" : "left",
            em = null != P ? P : "left" === L ? nc.sj : nc.Jg,
            ep = ee
                ? (0, l.jsx)(nh, {
                      id: no.g9,
                      "aria-controls": no.ni,
                      "aria-selected": H === eE.kx.GIF,
                      isActive: H === eE.kx.GIF,
                      viewType: eE.kx.GIF,
                      children: eS.intl.string(eS.t["6gUTsS"]),
                  })
                : null,
            ef = et
                ? (0, l.jsx)(nh, {
                      id: eF.LD,
                      "aria-controls": eF.GX,
                      "aria-selected": H === eE.kx.STICKER,
                      isActive: H === eE.kx.STICKER,
                      autoFocus: !z,
                      viewType: eE.kx.STICKER,
                      children: (0, l.jsx)("div", { className: nc.dG, children: eS.intl.string(eS.t.nf1s3u) }),
                  })
                : null,
            eg = (0, l.jsx)(nh, {
                id: no.k1,
                "aria-controls": no.Do,
                "aria-selected": H === eE.kx.EMOJI,
                isActive: H === eE.kx.EMOJI,
                viewType: eE.kx.EMOJI,
                children: eS.intl.string(eS.t.Xu3wE3),
            });
        return (0, l.jsx)(E.A, {
            section: ex.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(I.nE, {
                className: s()(nc.T8, em),
                targetRef: t,
                position: O,
                align: L,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: s()(nc.V6, { [nc.D0]: !en }),
                        ref: U,
                        role: "dialog",
                        "aria-label": eS.intl.string(eS.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: nc.jP,
                                  style: { width: null == K ? void 0 : K, [L]: 0 },
                                  ref: B,
                                  children: [
                                      (0, l.jsx)("div", { className: nc.Di, onMouseDown: G, style: { [eh]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: nc.FG,
                                          children: [
                                              en
                                                  ? (0, l.jsx)("nav", {
                                                        className: nc.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: nc.CT,
                                                            role: "tablist",
                                                            "aria-label": eS.intl.string(eS.t["2j4Vgd"]),
                                                            children: [
                                                                ep,
                                                                ef,
                                                                eg,
                                                                Z &&
                                                                    ed &&
                                                                    (0, l.jsx)(nh, {
                                                                        id: no.N6,
                                                                        "aria-controls": no.AA,
                                                                        "aria-selected": H === eE.kx.SOUNDBOARD,
                                                                        isActive: H === eE.kx.SOUNDBOARD,
                                                                        viewType: eE.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: nc.sd,
                                                                            children: [
                                                                                eS.intl.string(eS.t.EHlAMc),
                                                                                null != er &&
                                                                                    (0, l.jsx)(g.Lp, {
                                                                                        text: eS.intl.string(
                                                                                            eS.t.y2b7CA,
                                                                                        ),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              H === eE.kx.STICKER && et
                                                  ? (0, l.jsx)(nl, {
                                                        isLoading: $,
                                                        channel: R,
                                                        containerWidth: K,
                                                        onSelectSticker: p,
                                                        closePopout: ei,
                                                        ref: (e) => {
                                                            F.current = e;
                                                        },
                                                    })
                                                  : null,
                                              H === eE.kx.GIF && ee
                                                  ? (0, l.jsx)(b.A, {
                                                        onSelectGIF: r,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              H === eE.kx.EMOJI || w.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(A.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: R,
                                                        containerWidth: K,
                                                        emojiSize: null != K && K < nd ? no.as.MEDIUM : no.as.LARGE,
                                                        pickerIntention:
                                                            w.expressionPicker?.emojiIntention ??
                                                            nu.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == R || null != R.guild_id,
                                                        closePopout: ei,
                                                        onSelectEmoji: a,
                                                        onSelectSoundmoji: eu,
                                                        ref: (e) => {
                                                            F.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            w.soundmoji?.allowSending === !0,
                                                    })
                                                  : null,
                                              H === eE.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: nc.z,
                                                        children: (0, l.jsx)(T.A, {
                                                            guildId: R.guild_id,
                                                            channel: R,
                                                            containerWidth: K,
                                                            onClose: ei,
                                                            onSelect: ec,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: nc.BG, children: e }),
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
