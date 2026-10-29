n.d(t, { A: () => nE });
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
    f = n(939249),
    p = n(315710),
    g = n(62010),
    x = n(817281),
    E = n(820284),
    S = n(761929),
    y = n(666860),
    A = n(131607),
    C = n(969602),
    b = n(200589),
    I = n(490035),
    v = n(934499),
    N = n(813703),
    T = n(750506),
    j = n(267102),
    k = n(926972),
    _ = n(754388),
    R = n(256449),
    O = n(750385),
    w = n(649852),
    M = n.n(w),
    L = n(462180),
    P = n(319060),
    D = n(289873),
    U = n(212245),
    V = n(793574),
    W = n(688810),
    F = n(850992),
    B = n(151271),
    G = n(887695),
    K = n(87719);
let H = (0, n(945810).mj)({
    name: "2026-09-web-sticker-picker-upsell-restyle",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
function z(e) {
    return H.useConfig({ location: e });
}
var q = n(732280),
    $ = n(253932),
    Q = n(287809),
    Z = n(174459),
    X = n(240248),
    J = n(196765),
    Y = n(121894);
let ee = Object.freeze({ showPremiumUpsell: !1 }),
    et = (0, J.v)((e) => ee);
function en(e) {
    (0, Y.r)(() => et.setState({ showPremiumUpsell: e }));
}
var el = n(891090),
    ei = n(194004),
    er = n(788413),
    es = n(60587),
    ea = n(27232),
    eo = n(406810),
    eu = n(866665),
    ec = n(797285),
    ed = n(713517),
    eh = n(724511),
    em = n(88218),
    ef = n(941971),
    ep = n(71393),
    eg = n(378058),
    ex = n(148355),
    eE = n(361670);
function eS(e, t, n) {
    return e.stickers.filter((e) => (0, eE.W$)(e, t, n) !== eE.Ux.SENDABLE_WITH_BOOSTED_GUILD);
}
function ey(e, t, n, l) {
    return i.useMemo(
        () =>
            l
                ? e.flatMap((e) => {
                      let l = (function (e, t, n) {
                          switch (e.type) {
                              case ei.Z2.FAVORITE:
                              case ei.Z2.RECENT: {
                                  let l = eS(e, t, n);
                                  return 0 === l.length ? null : { ...e, stickers: l, isNitroLocked: !1 };
                              }
                              case ei.Z2.GUILD: {
                                  var l;
                                  let i = eS(e, t, n);
                                  if (
                                      i.length > 0 &&
                                      ((l = { ...e, stickers: i }),
                                      l.type === ei.Z2.GUILD &&
                                          0 !== l.stickers.length &&
                                          l.stickers.every((e) => (0, eE.W$)(e, t, n) === eE.Ux.SENDABLE_WITH_PREMIUM))
                                  )
                                      return { ...e, stickers: i, isNitroLocked: !0 };
                                  return { ...e, isNitroLocked: !1 };
                              }
                              default:
                                  return { ...e, isNitroLocked: !1 };
                          }
                      })(e, t, n);
                      return null != l ? [l] : [];
                  })
                : e,
        [e, n, t, l],
    );
}
var eA = n(652215),
    eC = n(698279),
    eb = n(105292),
    eI = n(161975);
let ev = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    eN = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    eT = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    ej = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    ek = (0, X.xI)(P.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    e_ = (0, X.xI)(P.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    eR = [ev, ev, ev, ev],
    eO = (eN + eT) * 2 + ev,
    ew = ek + 2 * e_;
function eM(e) {
    let { ariaLabel: t, children: n, className: r, isSelected: s, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, ed.A)(o);
    return (0, l.jsxs)(f.D, {
        innerRef: o,
        "aria-label": t,
        className: r,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: eI.a$,
                children: (0, l.jsx)(ef.A, { hovered: u, selected: s, size: "small" }),
            }),
            n,
        ],
    });
}
let eL = (e) => {
    let { stickersListRef: t, channel: n } = e,
        r = i.useRef(null),
        [a, o] = i.useState(!0),
        u = F.bM.useStore((e) => e.activeCategoryIndex),
        c = ey(
            (0, R.pD)(n),
            (0, d.bG)([Q.default], () => Q.default.getCurrentUser()),
            n,
            z("web.StickerPickerCategoryList"),
        ),
        {
            firstStandardStickerCategoryIndex: h,
            firstStandardStickerCategoryOffsetTop: m,
            guildCategoryCount: p,
            hasFirstPartyStickerPacks: g,
        } = i.useMemo(() => {
            let e = c.filter((e) => e.type === ei.Z2.GUILD).length,
                t = e + +(c[0]?.type === ei.Z2.RECENT) + +(c[0]?.type === ei.Z2.FAVORITE),
                n = t * (eN + eT) - eT + ew;
            return {
                firstStandardStickerCategoryIndex: t + 1,
                firstStandardStickerCategoryOffsetTop: n,
                guildCategoryCount: e,
                hasFirstPartyStickerPacks: null != c.find((e) => e.type === ei.Z2.PACK),
            };
        }, [c]);
    i.useLayoutEffect(() => {
        o(p >= 7);
    }, [p]);
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
                u = (0, U.p)(),
                c = (0, B.RQ)((e) => "" !== e.searchQuery),
                d = i.useCallback(
                    (e, r, a) => {
                        let o,
                            d = n[0]?.type === ei.Z2.FAVORITE,
                            h = +!!d,
                            m = n[h]?.type === ei.Z2.RECENT,
                            f = n.length;
                        if (0 === r && d) {
                            let e = !c && 0 === t;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": f,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(eM, {
                                        ariaLabel: eb.intl.string(eb.t.y3LQCG),
                                        className: s()(eI._0, eI.dC, { [eI.k1]: e, [eI.ls]: !m }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(ea.StarIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eI.AB,
                                            height: ej,
                                            width: ej,
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
                                    "aria-setsize": f,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(eM, {
                                        ariaLabel: eb.intl.string(eb.t.RxAmVC),
                                        className: s()(eI._0, eI.dC, eI.ls, { [eI.k1]: e }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(eo.ClockIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eI.AB,
                                            height: ej,
                                            width: ej,
                                        }),
                                    }),
                                },
                                "recent",
                            );
                        }
                        let p = t === r,
                            g = !c && p,
                            x = n[r],
                            E = n[r + 1],
                            S = null != E && x.type === ei.Z2.GUILD && E.type !== ei.Z2.GUILD,
                            y = x.type === ei.Z2.PACK,
                            A = "",
                            C = null;
                        if (x.type === ei.Z2.GUILD || x.type === ei.Z2.EMPTY_GUILD_UPSELL) {
                            let e = ep.A.getGuild(x.id);
                            null != e &&
                                ((o = e.id),
                                (A = e.name),
                                (C = (0, l.jsx)(eh.A, { guild: e, isSelected: p, isLocked: !0 === x.isNitroLocked })));
                        } else if (y) {
                            let e = O.A.getStickerPack(x.id);
                            null != e &&
                                ((A = e.name),
                                (C = (0, l.jsx)(ex.A, {
                                    disableAnimation: !p || c,
                                    size: eN,
                                    sticker: (0, eg.Id)(e),
                                })));
                        }
                        return (0, l.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, l.jsx)(eu.m, {
                                        position: "right",
                                        text: A,
                                        children: (0, l.jsx)("div", {
                                            role: "listitem",
                                            "aria-setsize": f,
                                            "aria-posinset": r,
                                            children: (0, l.jsx)(eM, {
                                                ariaLabel: A,
                                                className: s()(eI._0, { [eI.ND]: y, [eI.Ms]: g && y }),
                                                isSelected: g,
                                                onClick: () => {
                                                    (x.type === ei.Z2.PACK &&
                                                        Z.default.track(eA.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: u?.location,
                                                            tab: eC.kx.STICKER,
                                                            sticker_pack_id: x.id,
                                                            guild_id: o,
                                                        }),
                                                        a());
                                                },
                                                children: C,
                                            }),
                                        }),
                                    }),
                                    S ? (0, l.jsx)("hr", { className: eI.ny }, "separator") : null,
                                ],
                            },
                            x.id,
                        );
                    },
                    [t, u, c, n],
                ),
                h = i.useCallback((e, t) => (t ? eO : 0), []);
            return {
                getScrollOffsetForIndex: h,
                renderCategoryListItem: d,
                rowHeight: i.useCallback(
                    (e, t) => {
                        let l = n[t],
                            i = n[t + 1];
                        return eN + (null != i && l.type === ei.Z2.GUILD && i.type !== ei.Z2.GUILD ? ew : eT);
                    },
                    [n],
                ),
                onScroll: i.useCallback(
                    (e) => {
                        let t = r.current?.getListDimensions();
                        null == t || o(e + t.height - ek < a);
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
    return (0, l.jsx)(em.A, {
        className: eI.jv,
        categoryListRef: r,
        expressionsListRef: t,
        store: F.bM,
        listPadding: eR,
        onScroll: S,
        renderCategoryListItem: x,
        rowCount: c.length,
        categories: c,
        categoryHeight: E,
        children: (e) =>
            g &&
            a &&
            (0, l.jsx)(f.D, {
                className: s()(eI.Fe, { [eI.Q6]: !a }),
                onClick: () => y(e),
                children: (0, l.jsx)(ec.t, { size: "md", color: "currentColor" }),
            }),
    });
};
var eP = n(297264),
    eD = n(834730),
    eU = n(10392),
    eV = n(82498),
    eW = n(724651),
    eF = n(811611),
    eB = n(821609),
    eG = n(403581);
function eK(e) {
    let { analyticsSection: t, buttonText: i, onClick: r } = e;
    return (0, l.jsx)(eB.$, {
        variant: "expressive",
        icon: eG.t,
        text: i ?? eb.intl.string(eb.t["8Sh5fg"]),
        onClick:
            r ??
            (() => {
                var e;
                return (
                    (e = { section: t }),
                    void (Z.default.track(eA.HAw.OPEN_MODAL, {
                        type: eA.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
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
            }),
    });
}
var eH = n(823894),
    ez = n(202541),
    eq = n(768857);
function e$() {
    (Z.default.track(eA.HAw.PREMIUM_PROMOTION_OPENED, { location_section: eA.JJy.EMPTY_STICKER_PICKER_UPSELL }),
        en(!0));
}
function eQ(e) {
    let { className: t, onClose: n } = e;
    (0, R.XQ)();
    let { analyticsLocations: r } = (0, W.Ay)(V.A.EMPTY_STATE),
        a = z("web.StickerPickerEmptyState"),
        o = (0, d.yK)([O.A], () => eH.vX.map((e) => O.A.getStickerById(e)));
    i.useEffect(() => {
        (Z.default.track(eA.HAw.PREMIUM_UPSELL_VIEWED, {
            type: ez.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: eA.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: r,
        }),
            (0, eU.sq)(eA.U7l.PREMIUM_UPSELL_VIEWED, r, () => (0, eV.uq)(ez.e.EMPTY_STICKER_PICKER_UPSELL)));
    }, [r]);
    let u = (0, q.V)(),
        c = (0, eW.O)(),
        h = !a && (null != u || null != c);
    return (0, l.jsxs)("div", {
        className: s()(eq.p$, t, { [eq.Hz]: h }),
        children: [
            h
                ? (0, l.jsx)(eF.Ay, {
                      discountOffer: c,
                      trialOffer: u,
                      onClose: n,
                      type: ez.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: u?.subscriptionTrial?.skuId ?? ez.pe.TIER_2,
                      children: eb.intl.string(eb.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eP.D, {
                              className: eq.wx,
                              variant: "heading-xl/semibold",
                              children: eb.intl.string(eb.t.HEm04J),
                          }),
                          (0, l.jsx)(eD.E, {
                              className: eq.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: eb.intl.string(eb.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: eq.l1,
                              children: o
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(ex.A, { sticker: e, className: eq.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !h && (0, l.jsx)(eK, { analyticsSection: eA.JJy.EXPRESSION_PICKER, onClick: a ? e$ : void 0 }),
        ],
    });
}
n(30146);
var eZ = n(404778),
    eX = n(537652),
    eJ = n(962125),
    eY = n(286509),
    e0 = n(414872),
    e1 = n(24482),
    e2 = n(631576),
    e5 = n(369163),
    e8 = n(123292),
    e3 = n(631305),
    e6 = n(468689),
    e7 = n(931991),
    e4 = n(473145),
    e9 = n(625633),
    te = n(136123);
let tt = function (e) {
    let { className: t, guildId: n, channel: r, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, U.p)(),
        { analyticsLocations: c } = (0, W.Ay)(),
        h = (0, d.bG)([ep.A], () => ep.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, e7.nr)(h),
        f = null != h && 0 === (0, e4.aG)(h.premiumTier) && !h.features.has(eA.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            f &&
            a &&
            ((0, y.zV)(eA.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: u,
                guild_id: h?.id,
                channel_id: r?.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: c,
            }),
            o(!0));
    }, [f, h, r, u, a, o, c, m]),
    null != h && m)
        ? f
            ? (0, l.jsxs)("div", {
                  className: s()(te.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(e5.v, { size: "md", color: "currentColor", className: te.Kk }),
                      (0, l.jsx)(eD.E, {
                          color: "interactive-text-default",
                          className: te.rf,
                          variant: "text-sm/normal",
                          children: eb.intl.format(eb.t.AXWla1, { count: (0, e4.aG)(eA.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(e8.Q, {
                          variant: "primary",
                          text: eb.intl.string(eb.t["Gb+BJD"]),
                          onClick: function () {
                              null != h &&
                                  (0, e3.A)({
                                      analyticsLocations: c,
                                      analyticsSourceLocation: u,
                                      guild: h,
                                      perks: (0, e9.q5)(),
                                  });
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: s()(te.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(ec.t, {
                          size: "custom",
                          color: "currentColor",
                          className: te.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, l.jsx)(eD.E, {
                          color: "interactive-text-default",
                          className: te.rf,
                          variant: "text-sm/normal",
                          children: eb.intl.string(eb.t.S83wgh),
                      }),
                      (0, l.jsx)(e8.Q, {
                          variant: "primary",
                          text: eb.intl.string(eb.t.bwNjug),
                          onClick: function () {
                              ((0, B.v8)(), e6.A.open(n, eA.BEX.STICKERS, u));
                          },
                      }),
                  ],
              })
        : null;
};
var tn = n(240864),
    tl = n(89366),
    ti = n(202639);
let tr = (0, a.throttle)(
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
            { areOnlyNitroLockedSectionsVisible: o } = (0, tn.s)({
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
var ts = n(307301),
    ta = n(182922),
    to = n(683522);
let tu = (0, X.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    tc = (0, X.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    td = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = F.bM.useStore((e) => e.inspectedExpressionPosition),
            r = i.useMemo(() => {
                let { rowIndex: e, columnIndex: l } = n,
                    i = t[e]?.[l];
                if (null == i) return null;
                switch (i.type) {
                    case ei.op.CREATE_STICKER:
                        return { guild_id: i.guild_id, name: i.name };
                    case ei.op.STICKER:
                        return i.sticker;
                    default:
                        return null;
                }
            }, [t, n]);
        if (null == r) return null;
        let { graphic: s, title: a } = (function (e) {
                let t = null,
                    n = null;
                if ((!(0, eg.FD)(e) && !(0, eg.Xw)(e)) || (0, eg.Xw)(e)) {
                    let i = ep.A.getGuild(e.guild_id);
                    null != i &&
                        ((t = eb.intl.format(eb.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(eh.A, { guild: i })));
                } else if ((0, eg.FD)(e)) {
                    let i = O.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = eb.intl.format(eb.t.cZOkbs, { source: i.name })),
                        (n = (0, l.jsx)(ex.A, { size: tc, sticker: (0, eg.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(r),
            o =
                (0, eg.FD)(r) || (0, eg.Xw)(r)
                    ? (0, l.jsx)(ex.A, { isInteracting: !0, size: tu, sticker: r, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: to.P,
                          children: (0, l.jsx)(ts.j, { size: "md", color: "currentColor", className: to.K }),
                      });
        return (0, l.jsx)(ta.A, {
            graphicPrimary: o,
            graphicSecondary: s,
            titlePrimary: r.name,
            titleSecondary: (0, eg.FD)(r) || (0, eg.Xw)(r) ? a : null,
        });
    });
var th = n(140735),
    tm = n(194261),
    tf = n(442433),
    tp = n(304072),
    tg = n(513902);
let tx = function (e) {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: tg.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(tm.LockIcon, { size: "xxs", color: "currentColor", className: tg.I }),
    });
};
var tE = n(777371);
let tS = i.memo(function (e) {
    let {
            isDisplayingIndividualStickers: t = !1,
            preferAnimation: r = !0,
            getStickerItemProps: o,
            getStickerRowProps: u,
            gutterWidth: c,
            inspectedStickerPosition: d,
            isScrolling: h,
            isUsingKeyboardNavigation: p,
            onInspect: g,
            onSelect: x,
            rowIndex: E,
            stickerClassName: S,
            stickerDescriptors: y,
            stickerPadding: A,
            stickerSize: C,
            ownedStickerPacks: b,
            enlargeOnInteraction: I = !1,
            channel: v,
            currentUser: N,
            checkSendability: T = !0,
            upsellRestyleEnabled: j = !1,
            isSectionNitroLocked: k = !1,
        } = e,
        { location: _ } = (0, U.p)(),
        R = C + 2 * A,
        O = i.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${R}px)`,
                height: R,
                paddingRight: t ? void 0 : R,
            }),
            [t, c, R],
        ),
        w = i.useMemo(() => ({ width: C, height: C, padding: A }), [A, C]),
        [M, L] = (0, tp.A)(null, 300);
    return (0, l.jsx)("div", {
        className: tE.nM,
        style: O,
        ...u?.(E),
        children: y.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === ei.op.STICKER && I && u,
                y = (0, a.throttle)(() => {
                    h?.current === !0 || p?.current === !0 || u || g?.(e);
                }, 250),
                { ref: A, tabIndex: R, onFocus: O, ...P } = o?.(e.columnIndex, E) ?? {};
            switch (e.type) {
                case ei.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...P,
                            children: (0, l.jsxs)(f.D, {
                                "aria-label": e.name,
                                className: s()(tE.wP, S, { [tE.Kj]: u }),
                                innerRef: A,
                                tabIndex: R,
                                onFocus: O ?? y,
                                onMouseMove: y,
                                onClick: function () {
                                    e.type === ei.op.CREATE_STICKER &&
                                        (Z.default.track(eA.HAw.OPEN_MODAL, {
                                            type: eA.JJy.CREATE_STICKER_MODAL,
                                            location: _,
                                        }),
                                        (0, m.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("860350"),
                                                n.e("142753"),
                                                n.e("207998"),
                                                n.e("699733"),
                                                n.e("689827"),
                                                n.e("268582"),
                                                n.e("848625"),
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
                                style: w,
                                children: [
                                    !I && (0, l.jsx)("div", { className: tE.fw }),
                                    (0, l.jsx)("div", {
                                        className: tE.P0,
                                        children: (0, l.jsx)(ts.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tE.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(eD.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: eb.intl.string(eb.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case ei.op.STICKER: {
                    let a = (T ? (0, eE.W$)(e.sticker, N, v) : eE.Ux.SENDABLE) !== eE.Ux.SENDABLE,
                        o = j && a && !k,
                        m = !j && a,
                        g = t && null != b && (0, eg.FD)(e.sticker) && !b.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...P, key: e.sticker.id },
                        (0, l.jsxs)(f.D, {
                            className: s()(tE.yI, S, { [tE.PV]: u, [tE.TV]: M === e.sticker.id }),
                            innerRef: A,
                            tabIndex: R,
                            onFocus: O ?? y,
                            onMouseMove: y,
                            onClick: function (t) {
                                if (h?.current === !0 || p?.current === !0) return;
                                let n = t.altKey;
                                (n && e.type === ei.op.STICKER && !(0, eg.o1)(e.sticker.id) && L(e.sticker.id),
                                    x?.(e, n));
                            },
                            onContextMenu: function (e) {
                                (0, tf.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("638221"),
                                        n.e("904774"),
                                        n.e("446132"),
                                    ]).then(n.bind(n, 233503));
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                            style: w,
                            "data-type": es.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, l.jsx)(th.A, { children: (0, ex.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !I && (0, l.jsx)("div", { className: tE.fw }),
                                        (0, l.jsx)(ex.A, {
                                            className: s()(tE.SI, {
                                                [tE.ot]:
                                                    I && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [tE.Q$]: c,
                                                [tE.No]: m,
                                                [tE.UK]: o,
                                            }),
                                            disableAnimation: !u && !r,
                                            enlargeOnInteraction: I,
                                            isInteracting: u,
                                            maskAsset: u,
                                            sticker: e.sticker,
                                            size: C,
                                        }),
                                        g ? (0, l.jsx)(tx, { size: 20 }) : null,
                                        o
                                            ? (0, l.jsx)("div", {
                                                  className: tE.MC,
                                                  children: (0, l.jsx)(tm.LockIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: tE.hz,
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
function ty(e) {
    let { descriptor: t, currentUser: n, channel: l, onSelect: i } = e;
    switch ((0, eE.W$)(t.sticker, n, l)) {
        case eE.Ux.SENDABLE:
            i(t);
            break;
        case eE.Ux.SENDABLE_WITH_PREMIUM:
            (Z.default.track(eA.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: eA.JJy.STICKER_PICKER_UPSELL,
                location_object: eA.ZSU.STICKER,
            }),
                en(!0));
        case eE.Ux.SENDABLE_WITH_BOOSTED_GUILD:
        case eE.Ux.NONSENDABLE:
    }
}
var tA = n(457231);
let tC = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tb = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    tI = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    tv = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tN = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tT = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tj = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tk = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    t_ = (0, X.xI)(P.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tR = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tO = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tw = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tM = tR + 2 + tw,
    tL = tO + 2 + tw,
    tP = [tI, tN, tT, tj],
    tD = [tv, tN, tT, tj],
    tU = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tV = "sticker-search-nitro",
    tW = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tF(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: tA.yB,
        children: tW.map((e) =>
            (0, l.jsx)(
                f.D,
                {
                    className: tA.x_,
                    onClick: () => t(e),
                    children: (0, l.jsx)(eD.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
function tB(e, t) {
    return null != t && 0 !== t.sendableWithPremium.length && e === +(t.sendable.length > 0);
}
function tG(e, t) {
    return null != t && 0 === e && t.sendable.length > 0 && t.sendableWithPremium.length > 0;
}
let tK = function (e) {
    let {
            collapsedStickersCategories: t,
            gridWidth: n,
            filteredStickers: r,
            getStickerItemProps: a,
            getStickerRowProps: o,
            gutterWidth: c,
            isUsingKeyboardNavigation: h,
            onSelectSticker: m,
            rowCount: f,
            rowCountBySection: p,
            stickersCategories: g,
            stickersGrid: x,
            channel: E,
            ref: S,
        } = e,
        y = i.useRef(!1),
        A = i.useRef(null),
        [C, b] = F.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], L.x),
        { analyticsLocations: I } = (0, W.Ay)(V.A.STICKER_PICKER),
        v = (0, B.RQ)((e) => e.searchQuery),
        N = (0, d.bG)([O.A], () => O.A.getPremiumPacks()),
        T = (0, d.bG)([Q.default], () => Q.default.getCurrentUser()),
        j = e1.Ay.canUseCustomStickersEverywhere(T),
        [k, _] = i.useState(0),
        R = z("web.StickerPickerList"),
        w = i.useMemo(() => new Set(N.map((e) => e.id)), [N]),
        M = ey(g, T, E, R),
        {
            renderRow: P,
            renderSection: D,
            renderSectionFooter: K,
            sectionFooterHeight: H,
            renderSectionHeader: q,
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
                    stickersCategories: f,
                    filteredStickers: p,
                    ownedStickerPacks: g,
                    channel: x,
                    currentUser: E,
                    activeSectionIndex: S,
                    upsellRestyleEnabled: y,
                } = e,
                A = (0, U.p)(),
                { handleStickerInspect: C, handleSelect: b } = (function (e) {
                    let { onSelectSticker: t, channel: n, currentUser: l } = e,
                        r = (0, U.p)(),
                        s = (0, B.RQ)((e) => e.searchQuery);
                    return {
                        handleStickerInspect: i.useCallback((e) => {
                            let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: l } = e;
                            (F.bM.setActiveCategoryIndex(l),
                                F.bM.setInspectedExpressionPosition(n, t, es.t.MOUSE_EVENT),
                                e.type === ei.op.STICKER && F.bM.setSearchPlaceholder(e.sticker.name));
                        }, []),
                        handleSelect: i.useCallback(
                            (e, i) => {
                                if (e.type !== ei.op.STICKER) return;
                                let { sticker: a } = e;
                                if (null == a) return;
                                let o = {
                                    ...r.location,
                                    object: "" === s ? eA.ZSU.STICKER_PICKER_VIEW_ALL : eA.ZSU.STICKER_SEARCH_VIEW_ALL,
                                };
                                (0, eE.W$)(a, l, n) !== eE.Ux.SENDABLE
                                    ? ty({ descriptor: e, currentUser: l, channel: n, onSelect: t })
                                    : i
                                      ? (0, eg.o1)(a.id)
                                          ? (0, e2.vr)(a.id)
                                          : ((0, el.Dt)({ sticker: a, location: { ...o, object: eA.ZSU.STICKER } }),
                                            (0, e2.uK)(a.id))
                                      : t(e);
                            },
                            [r.location, s, l, n, t],
                        ),
                    };
                })({ onSelectSticker: r, channel: x, currentUser: E }),
                [I, v] = i.useState(!1),
                N = i.useCallback((e) => {
                    $.tP.updateSetting(Array.from(e));
                }, []),
                T = i.useCallback(
                    (e) => {
                        let t = m[e],
                            i = t?.[0]?.gridSectionIndex,
                            r = null != i && ((y && tB(i, p)) || (null == p && f[i]?.isNitroLocked === !0));
                        return null != t
                            ? (0, l.jsx)(
                                  tS,
                                  {
                                      getStickerItemProps: a,
                                      getStickerRowProps: o,
                                      gutterWidth: u,
                                      inspectedStickerPosition: c,
                                      isScrolling: d,
                                      isUsingKeyboardNavigation: h,
                                      onInspect: C,
                                      onSelect: b,
                                      rowIndex: e,
                                      stickerClassName: tA.yI,
                                      stickerDescriptors: t,
                                      stickerSize: n > tC ? tR : tO,
                                      stickerPadding: 1,
                                      preferAnimation: n <= tb,
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
                    [m, a, o, u, c, d, h, C, b, n, g, x, E, p, f, y],
                ),
                j = i.useCallback(
                    (e) => {
                        let t = f[e],
                            n = f[e + 1];
                        return t?.isNitroLocked === !0 && (null == n || !0 !== n.isNitroLocked);
                    },
                    [f],
                ),
                k = i.useCallback(
                    (e) => {
                        let t = f[e],
                            n = f[e + 1];
                        return t?.isNitroLocked !== !0 && n?.isNitroLocked === !0;
                    },
                    [f],
                ),
                _ = i.useCallback(
                    (e, t) => {
                        let n = f[e],
                            i = y && tB(e, p),
                            r = i || (null == p && n?.isNitroLocked === !0),
                            a = i || (null == p && j(e));
                        return null == p || r
                            ? (0, l.jsx)(
                                  "div",
                                  { role: "rowgroup", className: s()({ [tA.cW]: r, [tA.fV]: a }), children: t },
                                  e,
                              )
                            : t;
                    },
                    [p, f, y, j],
                ),
                R = i.useCallback(
                    function (e) {
                        let { isStickerPack: n = !0 } =
                                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = new Set(t),
                            i = t.has(e);
                        (i ? l.delete(e) : l.add(e),
                            Z.default.track(eA.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: A?.location,
                                tab: eC.kx.STICKER,
                                collapsed: !i,
                                sticker_pack_id: n ? e : null,
                            }),
                            N(l));
                    },
                    [A, t, N],
                ),
                w = i.useCallback(
                    (e) => {
                        let n = f[e];
                        if (null != p) {
                            let { sendable: n, sendableWithPremium: i } = p;
                            if (0 === e && n.length > 0) return null;
                            if (y && tB(e, p)) {
                                let n = S === e;
                                return (0, l.jsx)(
                                    eY.A,
                                    {
                                        className: s()(tA.jH, tA.M0, { [tA.RA]: !n, [tA.sp]: n }),
                                        "aria-label": eb.intl.string(eb.t.pAF6xE),
                                        icon: (0, l.jsx)(eG.t, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(tV),
                                        onClick: () => R(tV, { isStickerPack: !1 }),
                                        children: eb.intl.string(eb.t.pAF6xE),
                                    },
                                    "stickers-available-with-nitro-header",
                                );
                            }
                            let r = n.length > 0 && i.length > 0;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    r ? (0, l.jsx)("div", { className: tA.yF, children: (0, l.jsx)(eZ.c, {}) }) : null,
                                    (0, l.jsx)(
                                        eY.A,
                                        {
                                            className: tA.jH,
                                            "aria-label": eb.intl.string(eb.t.wbfJFh),
                                            children: eb.intl.string(eb.t["05Z/0l"]),
                                        },
                                        "stickers-you-might-like-header",
                                    ),
                                ],
                            });
                        }
                        let i = f[e]?.isNitroLocked === !0,
                            r = s()(tA.jH, { [tA.M0]: y, [tA.RA]: i && S !== e, [tA.sp]: i && S === e });
                        switch (n.type) {
                            case ei.Z2.FAVORITE:
                                return (0, l.jsx)(
                                    eY.A,
                                    {
                                        className: r,
                                        "aria-label": eb.intl.formatToPlainString(eb.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(ea.StarIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => R(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case ei.Z2.RECENT:
                                return (0, l.jsx)(
                                    eY.A,
                                    {
                                        className: r,
                                        "aria-label": eb.intl.formatToPlainString(eb.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(eo.ClockIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => R(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case ei.Z2.GUILD:
                            case ei.Z2.EMPTY_GUILD_UPSELL: {
                                let e = ep.A.getGuild(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(
                                    eY.A,
                                    {
                                        className: r,
                                        "aria-label": eb.intl.formatToPlainString(eb.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(eh.A, { guild: e, height: 16, width: 16 }),
                                        isCollapsed: t.has(e.id),
                                        onClick: () => R(e.id),
                                        children: e.name,
                                    },
                                    `h${e.id}`,
                                );
                            }
                            case ei.Z2.PACK: {
                                let e = O.A.getStickerPack(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(
                                    eY.A,
                                    {
                                        className: r,
                                        "aria-label": eb.intl.formatToPlainString(eb.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(ex.A, {
                                            disableAnimation: !0,
                                            size: 12,
                                            sticker: (0, eg.Id)(e),
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
                    [S, t, p, f, R, y],
                ),
                M = i.useCallback(
                    (e) => {
                        if (null != p) {
                            let { sendable: t, sendableWithPremium: n } = p;
                            return 0 === e && t.length > 0
                                ? 0
                                : y && tB(e, p)
                                  ? t_ + 16
                                  : t_ + (t.length > 0 && n.length > 0 ? tk : 0);
                        }
                        return t_ + 16 * (f[e]?.isNitroLocked === !0);
                    },
                    [p, f, y],
                );
            return {
                renderRow: T,
                renderSection: _,
                renderSectionHeader: w,
                sectionHeaderHeight: M,
                renderSectionFooter: i.useCallback(
                    (e) => {
                        if (null != p)
                            return y
                                ? tB(e, p)
                                    ? (0, l.jsx)("div", { className: tA.pQ })
                                    : tG(e, p)
                                      ? (0, l.jsx)(e0.Ay, { className: tA.$2 })
                                      : null
                                : null;
                        let n = f[e],
                            i = t.has(n.id),
                            r =
                                n.type !== ei.Z2.EMPTY_GUILD_UPSELL || i
                                    ? null
                                    : (0, l.jsx)(
                                          tt,
                                          {
                                              className: tA.Ij,
                                              guildId: n.id,
                                              channel: x,
                                              shouldTrackUpsellViewed: !I,
                                              setTrackedUpsellViewed: v,
                                          },
                                          `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                      ),
                            s = null;
                        return (
                            k(e)
                                ? (s = (0, l.jsx)(e0.Ay, { className: tA.$2 }))
                                : j(e) && (s = (0, l.jsx)("div", { className: tA.pQ })),
                            null == r && null == s ? null : (0, l.jsxs)(l.Fragment, { children: [r, s] })
                        );
                    },
                    [f, t, p, x, I, y, k, j],
                ),
                sectionFooterHeight: i.useCallback(
                    (e) => {
                        if (null != p) return y ? (tB(e, p) ? 33 : tG(e, p) ? e0.kg : 0) : 0;
                        let n = f[e],
                            l = t.has(n.id),
                            i = 0;
                        return (
                            n.type !== ei.Z2.EMPTY_GUILD_UPSELL || l || (i += tU),
                            k(e) ? (i += e0.kg) : j(e) && (i += 33),
                            i
                        );
                    },
                    [p, y, f, t, k, j],
                ),
            };
        })({
            collapsedStickersCategories: t,
            gridWidth: n,
            stickersCategories: M,
            stickersGrid: x,
            isScrolling: y,
            isUsingKeyboardNavigation: h,
            onSelectSticker: m,
            getStickerItemProps: a,
            getStickerRowProps: o,
            gutterWidth: c,
            inspectedStickerPosition: b,
            filteredStickers: r,
            ownedStickerPacks: w,
            channel: E,
            currentUser: T,
            activeSectionIndex: k,
            upsellRestyleEnabled: R,
        }),
        { onScroll: J, upsell: Y } = (function (e) {
            let {
                    upsellRestyleEnabled: t,
                    canUseStickersEverywhere: n,
                    listRef: r,
                    searchQuery: s,
                    categories: a,
                    sectionHeaderHeight: o,
                    sectionFooterHeight: c,
                } = e,
                { location: d } = (0, U.p)(),
                { analyticsLocations: h } = (0, W.Ay)(V.A.STICKER_PICKER),
                [m, f] = i.useState(!1),
                p = i.useMemo(() => a.map((e) => ({ isNitroLocked: !0 === e.isNitroLocked })), [a]),
                g = i.useCallback(
                    (e) => {
                        t &&
                            tr({
                                listRef: r,
                                searchQuery: s,
                                nitroLockedSectionStates: p,
                                scrollTop: e,
                                sectionHeaderHeight: o,
                                sectionFooterHeight: c,
                                setShowUpsell: f,
                            });
                    },
                    [t, r, p, s, c, o],
                ),
                x = m && "" === s && t;
            if (
                (i.useEffect(() => {
                    !x ||
                        n ||
                        u.Fr ||
                        (Z.default.track(eA.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: ez.e.STICKER_PICKER_FLOATING_UPSELL,
                            location: d,
                            location_stack: h,
                        }),
                        (0, eU.sq)(eA.U7l.PREMIUM_UPSELL_VIEWED, h, () =>
                            (0, eV.uq)(ez.e.STICKER_PICKER_FLOATING_UPSELL),
                        ));
                }, [d, h, n, x]),
                !t || n || u.Fr)
            )
                return { onScroll: g, upsell: null };
            let E = eb.intl.format(eb.t.eontIh, {
                    nitroTierName: (0, e1.Dd)(ez.PremiumTypes.TIER_2),
                    onClick: () => {
                        (Z.default.track(eA.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_section: eA.JJy.STICKER_PICKER_FLOATING_UPSELL,
                        }),
                            en(!0));
                    },
                }),
                S = (0, e1.LE)((0, tl.qD)(), ez.pe.TIER_2) ?? eb.intl.string(eb.t.BmJkbd);
            return {
                onScroll: g,
                upsell: (0, l.jsx)(ti.d, {
                    showUpsell: x,
                    text: E,
                    button: S,
                    buttonAnalyticsObject: { section: eA.JJy.STICKER_PICKER_FLOATING_UPSELL },
                }),
            };
        })({
            upsellRestyleEnabled: R,
            canUseStickersEverywhere: j,
            listRef: A,
            searchQuery: v,
            categories: M,
            sectionHeaderHeight: X,
            sectionFooterHeight: H,
        });
    i.useEffect(() => {
        R && J(A.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [R, J, p]);
    let ee = (0, G.Fk)({
            activeCategoryIndex: C,
            isScrolling: y,
            listRef: A,
            onActiveCategoryIndexChange: F.bM.setActiveCategoryIndex,
            scrollOffset: 20,
            searchQuery: v,
        }),
        et = i.useCallback((e) => {
            let t = A.current?.getSectionDescriptors();
            null == t ||
                _(
                    Math.max(
                        t.findLastIndex((t) => t.offset.top <= e),
                        0,
                    ),
                );
        }, []);
    i.useLayoutEffect(() => {
        R && et(A.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [R, et, r, p]);
    let er = i.useCallback(
        (e) => {
            (ee(e), R && et(e), J(e));
        },
        [ee, J, et, R],
    );
    return (
        (0, G.FV)({ searchQuery: v, activeCategoryIndex: C, listRef: A }),
        i.useImperativeHandle(
            S,
            () => ({
                scrollTo: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return A.current?.scrollTo(...t);
                },
                getRowDescriptors: () => A.current?.getRowDescriptors() ?? [],
                getSectionDescriptors: () => A.current?.getSectionDescriptors() ?? [],
                scrollToSectionTop: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return A.current?.scrollToSectionTop(...t);
                },
                scrollRowIntoView: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return A.current?.scrollRowIntoView(...t);
                },
                getScrollerNode: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return A.current?.getScrollerNode(...t);
                },
                scrollIntoViewNode: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return A.current?.scrollIntoViewNode(...t);
                },
                getListDimensions: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return A.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                },
            }),
            [],
        ),
        (0, l.jsx)(W.f5, {
            value: I,
            children: (0, l.jsxs)("div", {
                className: tA.iE,
                children: [
                    (0, l.jsxs)("div", {
                        className: tA.AD,
                        children: [
                            null != r && 0 === r.sendable.length && 0 === r.sendableWithPremium.length
                                ? (0, l.jsx)(eX.A, {
                                      message: eb.intl.string(eb.t["zc+LQd"]),
                                      className: tA.__invalid_noSearchResultsContainer,
                                      suggestions: (0, l.jsx)(tF, { onSuggestionClick: (e) => (0, B.Ri)(e, !0) }),
                                  })
                                : (0, l.jsx)(eJ.A, {
                                      role: "none presentation",
                                      listPadding: null != r ? tD : tP,
                                      onScroll: er,
                                      renderRow: P,
                                      renderSection: D,
                                      renderSectionHeader: q,
                                      renderSectionFooter: K,
                                      rowCount: f,
                                      rowCountBySection: p,
                                      rowHeight: n > tC ? tM : tL,
                                      sectionHeaderHeight: X,
                                      sectionFooterHeight: H,
                                      stickyHeaders: !0,
                                      ref: A,
                                  }),
                            Y,
                        ],
                    }),
                    (0, l.jsx)(td, { stickersGrid: x }),
                ],
            }),
        })
    );
};
var tH = n(602034),
    tz = n(683438),
    tq = n(909802);
let t$ = function (e) {
    let { onKeyDown: t, stickersListRef: n, channel: r, ref: s } = e,
        a = (0, R.ZO)(r),
        o = i.useRef(null),
        { searchQuery: u, isSearchSuggestion: c } = (0, B.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            L.x,
        ),
        d = F.bM.useStore((e) => e.searchPlaceholder),
        [h, m] = F.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], L.x),
        f = i.useCallback(
            (e) => {
                (F.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    F.bM.setInspectedExpressionPosition(0, 0),
                    F.bM.setSearchPlaceholder(null),
                    (0, B.Ri)(e),
                    n.current?.scrollTo(0));
            },
            [n],
        ),
        p = i.useCallback(() => {
            f("");
        }, [f]);
    return (
        i.useImperativeHandle(s, () => ({ focus: () => o.current?.focus() })),
        i.useLayoutEffect(() => {
            c && o.current?.focus();
        }, [c]),
        (0, l.jsx)("div", {
            className: tq.i,
            children: (0, l.jsx)(tz.I, {
                autoFocus: a,
                disabled: !a,
                query: u,
                ref: o,
                placeholder: d ?? (a ? eb.intl.string(eb.t.dt5h1C) : eb.intl.string(eb.t["Pck/4U"])),
                onClear: p,
                onKeyDown: t,
                onChange: f,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": eH.lq,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, tH.Aq)(eH.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
};
n(321073);
var tQ = n(768038),
    tZ = n(330422),
    tX = n(609178);
function tJ(e) {
    let { onUpsellClicked: t } = e,
        { location: n } = (0, U.p)(),
        { analyticsLocations: i } = (0, W.Ay)(V.A.STICKER_PICKER),
        r = (0, B.RQ)((e) => e.searchQuery);
    return (0, l.jsx)(tX.A, {
        title: eb.intl.string(eb.t.Eukdgl),
        description: eb.intl.string(eb.t.sMmd7s),
        analyticsLocationSection: eA.JJy.STICKER_PICKER_UPSELL,
        onClose: () => en(!1),
        onUpsellClicked: t,
        upsellViewedTrackingData: {
            type: ez.e.STICKER_PICKER_UPSELL,
            location: { ...n, object: eA.ZSU.STICKER },
            location_stack: i,
            sku_id: (0, e1.mH)(e1.Ay.getSkuIdForPremiumType(ez.PremiumTypes.TIER_2)),
            has_search_query: "" !== r,
        },
        graphic: (0, l.jsx)(tZ.n, { alt: "", ariaHidden: !0 }),
        useNitroGradient: !0,
    });
}
var tY = n(789645),
    t0 = n(964486),
    t1 = n(420136),
    t2 = n(939383);
function t5() {
    return en(!1);
}
function t8(e) {
    let { onLearnMore: t } = e,
        { analyticsLocations: n } = (0, W.Ay)(V.A.PREMIUM_UPSELL);
    (0, i.useEffect)(() => {
        (Z.default.track(eA.HAw.PREMIUM_UPSELL_VIEWED, {
            location_section: eA.JJy.STICKER_PICKER_UPSELL,
            type: ez.e.STICKER_PICKER_UPSELL,
            location_stack: n,
        }),
            (0, eU.sq)(eA.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, eV.uq)(ez.e.STICKER_PICKER_UPSELL)));
    }, [n]);
    let r = (0, i.useRef)(null);
    (0, t0.Ay)(() => {
        r.current?.focus();
    });
    let a = (0, q.V)(),
        o = (0, eW.O)(),
        u = a?.subscriptionTrial?.skuId === ez.pe.TIER_0,
        c = null != a || null != o;
    return (0, l.jsxs)("div", {
        ref: r,
        tabIndex: -1,
        "aria-label": eb.intl.string(eb.t.jJG1pl),
        className: s()(t1.VL, { [t1.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eF.Ay, {
                      trialOffer: a,
                      discountOffer: o,
                      onClose: t5,
                      type: ez.e.STICKER_PICKER_UPSELL,
                      subscriptionTier: a?.subscriptionTrial?.skuId ?? ez.pe.TIER_2,
                      children: u
                          ? eb.intl.format(eb.t.MAGagw, {
                                planName: (0, e1.RH)(ez.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : eb.intl.format(eb.t.jt7JX6, { onClick: t }),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: t1.Tn, src: t2, alt: eb.intl.string(eb.t.do7AoM) }),
                          (0, l.jsx)(eD.E, {
                              className: t1.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: eb.intl.string(eb.t.jJG1pl),
                          }),
                          (0, l.jsx)(eD.E, {
                              className: t1.GR,
                              variant: "text-md/normal",
                              children: eb.intl.format(eb.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eK, { analyticsSection: eA.JJy.EXPRESSION_PICKER }),
            (0, l.jsx)(f.D, {
                className: t1.kz,
                onClick: t5,
                "aria-label": eb.intl.string(eb.t.cpT0Cq),
                children: (0, l.jsx)(tY.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var t3 = n(970099);
let t6 = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    t7 = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    t4 = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    t9 = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    ne = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    nt = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    nn = (0, X.xI)(P.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    nl = nt + 2,
    ni = nn + 2,
    nr = M()(el.Qz, 200),
    ns = M()(el.HA, 200);
function na(e) {
    let { containerWidth: t, channel: r, onSelectSticker: s, closePopout: a, ref: o } = e,
        u = z("web.StickerPicker"),
        { location: c } = (0, U.p)(),
        { analyticsLocations: h } = (0, W.Ay)(V.A.STICKER_PICKER),
        f = (0, q.V)()?.subscriptionTrial != null,
        p = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        E = et((e) => e.showPremiumUpsell),
        [S, y] = (0, B.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], L.x),
        A = i.useRef("");
    i.useImperativeHandle(o, () => ({ onPickerOpen: ep }));
    let C = (0, R.pD)(r),
        b = (0, d.bG)([Q.default], () => Q.default.getCurrentUser()),
        I = ey(C, b, r, u),
        v = 0 === I.filter((e) => e.type !== ei.Z2.EMPTY_GUILD_UPSELL).length,
        N = (0, G.oV)({
            gridWrapperRef: p,
            containerWidth: t,
            showingEmptyState: v,
            listPaddingLeft: t7,
            listScrollbarWidth: 8,
        }),
        T = $.tP.useSetting(),
        j = i.useMemo(() => new Set(T), [T]),
        k = i.useMemo(
            () =>
                (function (e, t, n) {
                    if ("" === e) return null;
                    let l = [],
                        i = [];
                    return (
                        tQ.Ay.queryStickers([e], !0)
                            .map((e) => {
                                let { sticker: t } = e;
                                return t;
                            })
                            .forEach((e) => {
                                let r = (0, eE.W$)(e, t, n);
                                r === eE.Ux.SENDABLE ? l.push(e) : r === eE.Ux.SENDABLE_WITH_PREMIUM && i.push(e);
                            }),
                        { sendable: l, sendableWithPremium: i }
                    );
                })(S, b, r),
            [S, b, r],
        ),
        _ = (0, R.Gc)(),
        w = (0, R.UT)(),
        M = (0, d.cf)([O.A], () => O.A.getAllGuildStickers()),
        { sendable: P = [], sendableWithPremium: D = [] } = k ?? {},
        H = P.length + D.length,
        X = i.useCallback(
            (e) => {
                ("" === S ? (0, el.ry)(e) : (0, el.nQ)(e, S, H), s(e.sticker, ei.D6.STICKER_PICKER));
            },
            [s, S, H],
        ),
        J = null != N && N > t6,
        {
            rowCount: Y,
            rowCountBySection: ee,
            stickersGrid: ea,
            gutterWidth: eo,
            columnCounts: eu,
        } = (0, R._c)({
            filteredStickers: k,
            stickersCategories: I,
            collapsedStickersCategories: j,
            collapsePremiumSearchSection: u && j.has(tV),
            listWidth: N,
            listPaddingRight: t4,
            stickerNodeMargin: J ? t9 : ne,
            stickerNodeWidth: J ? nl : ni,
        }),
        {
            getItemProps: ec,
            getRowProps: ed,
            gridContainerProps: eh,
            handleGridContainerKeyDown: em,
            isUsingKeyboardNavigation: ef,
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
                u = (0, U.p)(),
                c = i.useCallback(
                    (e) => {
                        o(e, u);
                    },
                    [o, u],
                ),
                d = i.useCallback(
                    (e, t) => {
                        a(e, t, es.t.GRID_NAVIGATOR_EVENT);
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
                                l !== es.t.GRID_NAVIGATOR_EVENT && h({ type: er.n.SET_FOCUSED_POSITION, x: t, y: n });
                            },
                        ),
                    [h, r],
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
            columnCounts: eu,
            stickersListRef: g,
            stickersGrid: ea,
            onGridItemSelect: i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case ei.op.CREATE_STICKER:
                            (Z.default.track(eA.HAw.OPEN_MODAL, { type: eA.JJy.CREATE_STICKER_MODAL, location: c }),
                                (0, m.openModalLazy)(async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("860350"),
                                        n.e("142753"),
                                        n.e("207998"),
                                        n.e("699733"),
                                        n.e("689827"),
                                        n.e("268582"),
                                        n.e("848625"),
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
                        case ei.op.STICKER:
                            if (null == e.sticker) break;
                            ty({ descriptor: e, currentUser: b, channel: r, onSelect: X });
                    }
                },
                [c, b, r, X],
            ),
            store: F.bM,
            setInspectedStickerPosition: F.bM.setInspectedExpressionPosition,
            gridNavigatorId: eH.lq,
        });
    function ep() {
        let e = r.getGuildId(),
            n = [];
        null !== e && (n = O.A.getStickersByGuildId(e) ?? []);
        let l = 0;
        (null != M &&
            [...M.values()].forEach((e) => {
                l += e.length;
            }),
            (0, el.p4)({
                containerWidth: t,
                favoriteStickers: _,
                frequentlyUsedStickers: w,
                guildStickers: n,
                stickersTotal: l,
            }));
    }
    (i.useEffect(
        () => () => {
            (F.bM.resetStoreState(), en(!1));
        },
        [],
    ),
        i.useEffect(() => {
            ("" === A.current && "" !== S && (0, el.Fg)(), (A.current = S));
        }, [S]),
        i.useEffect(() => {
            0 === H ? nr(S) : ns(S, H, y);
        }, [S, H, y]),
        i.useLayoutEffect(() => {
            x.current?.focus();
        }, []));
    let eg = i.useCallback(() => {
        (a(),
            Z.default.track(eA.HAw.PREMIUM_PROMOTION_OPENED, { location_section: eA.JJy.STICKER_PICKER_UPSELL }),
            (0, K.e)());
    }, [a]);
    return (0, l.jsxs)(W.f5, {
        value: h,
        children: [
            !(f && v && !u) &&
                (0, l.jsx)("div", {
                    className: t3.wx,
                    children: (0, l.jsx)(t$, { ref: x, onKeyDown: em, stickersListRef: g, channel: r }),
                }),
            v
                ? (0, l.jsx)(eQ, { className: t3.p$, onClose: a })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              ref: p,
                              className: t3.AD,
                              id: eH.lq,
                              ...eh,
                              children:
                                  null != N
                                      ? (0, l.jsx)(tK, {
                                            ref: g,
                                            collapsedStickersCategories: j,
                                            filteredStickers: k,
                                            getStickerItemProps: ec,
                                            getStickerRowProps: ed,
                                            gridWidth: N,
                                            gutterWidth: eo,
                                            isUsingKeyboardNavigation: ef,
                                            onSelectSticker: X,
                                            rowCount: Y,
                                            rowCountBySection: ee,
                                            stickersCategories: I,
                                            stickersGrid: ea,
                                            channel: r,
                                        })
                                      : null,
                          }),
                          (0, l.jsx)(eL, { stickersListRef: g, channel: r }),
                      ],
                  }),
            E && (u ? (0, l.jsx)(tJ, { onUpsellClicked: a }) : (0, l.jsx)(t8, { onLearnMore: eg })),
        ],
    });
}
let no = function (e) {
    let { ref: t, ...n } = e;
    return (
        (0, R.XQ)(),
        (0, l.jsx)("div", {
            className: t3.iE,
            id: eH.GX,
            "aria-labelledby": eH.LD,
            role: "tabpanel",
            children: n.isLoading ? (0, l.jsx)(D.y, { className: t3.Mz }) : (0, l.jsx)(na, { ...n, ref: t }),
        })
    );
};
var nu = n(964404),
    nc = n(712687),
    nd = n(625494),
    nh = n(49999),
    nm = n(732139),
    nf = n(307731),
    np = n(818625);
let ng = 498 + nm.as.MEDIUM,
    nx = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: r = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(f.D, {
            role: "tab",
            autoFocus: r,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                (y.Ay.trackWithMetadata(eA.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, B.U)(i));
            },
            "aria-current": t ? "page" : void 0,
            className: s()(n, np.oi, np.pc, { [np.Mv]: t }),
        });
    }),
    nE = i.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: r,
                onSelectEmoji: a,
                onSelectSticker: f,
                onSelectSound: w,
                channel: M,
                type: L,
                position: P,
                align: D,
                positionLayerClassName: U,
                closeOnModalOuterClick: V = !1,
                parentModalKey: W,
            } = e,
            F = i.useRef(null),
            G = i.useRef(!1),
            K = i.useRef(null),
            H = i.useRef(null),
            { drawerWidth: z, handleDrawerResizeHandleMouseDown: q } = (function (e) {
                let { positionContainerRef: t, drawerRef: n, orientation: l } = e,
                    r = (0, d.bG)([nu.Ay], () => nu.Ay.expressionPickerWidth),
                    [s, a] = i.useState(window.innerWidth),
                    [u, c] = i.useState(r ?? eC.wp.MIN),
                    h = i.useMemo(() => {
                        switch (u) {
                            case eC.wp.MIN:
                                return 498;
                            case eC.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    m = i.useCallback(
                        (e) => {
                            let t = e >= s ? eC.wp.MAX : e <= 498 ? eC.wp.MIN : e;
                            (null == t && null != n.current && (n.current.style.width = ""),
                                x.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                c(t));
                        },
                        [n, s],
                    ),
                    f = (0, S.A)({
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
                                (e.stopPropagation(), null != t.current && a(t.current.offsetWidth), f(e));
                            },
                            [t, f],
                        ),
                    }
                );
            })({
                positionContainerRef: F,
                drawerRef: H,
                orientation: "left" === D ? S.R.HORIZONTAL_RIGHT : S.R.HORIZONTAL_LEFT,
            }),
            $ = (0, B.RQ)((e) => e.activeView),
            Q = (0, R.ZO)(M),
            { renderWindow: Z, windowDispatch: X } = i.useContext(j.Ay),
            J = (0, d.bG)([O.A], () => !O.A.hasLoadedStickerPacks),
            Y = (0, k.t)({ location: "expression_picker" }),
            ee = (0, I.H)("expression_picker");
        i.useEffect(() => {
            ee && (0, v.Fp)();
        }, [ee]);
        let et = (0, B.RQ)((e) => e.showEmojiPacks || null != e.showSelectedEmojiPackId),
            en = (0, d.bG)([nc.A], () => nc.A.isOpen()),
            el = null != W,
            ei = (0, m.useIsModalAtTop)(W ?? ""),
            er = L.gifs?.allowSending && !u.Fr && null != r,
            es = L.stickers?.allowSending && null != f,
            ea = !L.expressionPicker?.onlyEmojis && (er || es),
            eo = L.expressionPicker?.emojiIntention ?? nf.EmojiIntention.CHAT,
            eu = ee && (0, b.z)(eo),
            ec = eu && et,
            ed = ea && !ec,
            eh = i.useCallback(
                (e) => {
                    if ((!el && (0, m.hasAnyModalOpen)()) || (el && !(ei && V)) || en || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + eC.VQ)) return;
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
                    (0, B.v8)();
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && nd._.dispatchToLastSubscribed(eA.jej.TEXTAREA_FOCUS);
                },
                [V, ei, el, en],
            ),
            em = i.useCallback(() => {
                (0, B.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                $ === eC.kx.GIF && (0, B.v8)();
            }
            return (
                Z.addEventListener("mousedown", eh),
                Z.addEventListener("contextmenu", eh),
                X.subscribe(eA.jej.POPOUT_CLOSE, em),
                nd._.subscribe(eA.jej.CLOSE_GIF_PICKER, e),
                () => {
                    (Z.removeEventListener("mousedown", eh),
                        Z.removeEventListener("contextmenu", eh),
                        X.unsubscribe(eA.jej.POPOUT_CLOSE, em),
                        nd._.unsubscribe(eA.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [$, em, eh, Z, X]),
            (0, p.tj)(F));
        let [ef, ep] = (0, A.kn)(Y ? [h.M.SOUNDMOJI_BADGE] : []),
            [eg, ex] = i.useState(!1);
        (i.useEffect(() => {
            $ === eC.kx.SOUNDBOARD && ex(!0);
        }, [$]),
            i.useEffect(
                () => () => {
                    eg && ep(nh.i.TAKE_ACTION);
                },
                [eg, ep],
            ),
            i.useEffect(() => {
                (0, B.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!el && (0, m.hasAnyModalOpen)()) || (el && !ei)) && (0, B.v8)();
            }, [ei, el]),
            i.useEffect(() => {
                null != H.current &&
                    !G.current &&
                    ($ === eC.kx.EMOJI
                        ? K?.current?.onPickerOpen != null && (K?.current?.onPickerOpen(), (G.current = !0))
                        : $ === eC.kx.STICKER
                          ? K?.current?.onPickerOpen == null || J || (K?.current?.onPickerOpen(), (G.current = !0))
                          : (y.Ay.trackWithMetadata(eA.HAw.EXPRESSION_PICKER_OPENED, {
                                width: H.current.offsetWidth,
                                tab: $,
                                badged: !1,
                            }),
                            (G.current = !0)));
            }));
        let eE = i.useCallback((e, t) => w?.(e, "soundboard_picker", t), [w]),
            eS = L.soundmoji?.allowSending === !0 && null != w,
            ey = "left" === D ? "right" : "left",
            eI = null != U ? U : "left" === D ? np.sj : np.Jg,
            ev = er
                ? (0, l.jsx)(nx, {
                      id: nm.g9,
                      "aria-controls": nm.ni,
                      "aria-selected": $ === eC.kx.GIF,
                      isActive: $ === eC.kx.GIF,
                      viewType: eC.kx.GIF,
                      children: eb.intl.string(eb.t["6gUTsS"]),
                  })
                : null,
            eN = es
                ? (0, l.jsx)(nx, {
                      id: eH.LD,
                      "aria-controls": eH.GX,
                      "aria-selected": $ === eC.kx.STICKER,
                      isActive: $ === eC.kx.STICKER,
                      autoFocus: !Q,
                      viewType: eC.kx.STICKER,
                      children: (0, l.jsx)("div", { className: np.dG, children: eb.intl.string(eb.t.nf1s3u) }),
                  })
                : null,
            eT = (0, l.jsx)(nx, {
                id: nm.k1,
                "aria-controls": nm.Do,
                "aria-selected": $ === eC.kx.EMOJI,
                isActive: $ === eC.kx.EMOJI,
                viewType: eC.kx.EMOJI,
                children: eb.intl.string(eb.t.Xu3wE3),
            });
        return (0, l.jsx)(E.A, {
            section: eA.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(T.nE, {
                className: s()(np.T8, eI),
                targetRef: t,
                position: P,
                align: D,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: s()(np.V6, { [np.D0]: !ea }),
                        ref: F,
                        role: "dialog",
                        "aria-label": eb.intl.string(eb.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: np.jP,
                                  style: { width: null == z ? void 0 : z, [D]: 0 },
                                  ref: H,
                                  children: [
                                      (0, l.jsx)("div", { className: np.Di, onMouseDown: q, style: { [ey]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: s()(np.FG, { [np.$D]: ec }),
                                          children: [
                                              ed
                                                  ? (0, l.jsx)("nav", {
                                                        className: np.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: np.CT,
                                                            role: "tablist",
                                                            "aria-label": eb.intl.string(eb.t["2j4Vgd"]),
                                                            children: [
                                                                ev,
                                                                eN,
                                                                eT,
                                                                Y &&
                                                                    eS &&
                                                                    (0, l.jsx)(nx, {
                                                                        id: nm.N6,
                                                                        "aria-controls": nm.AA,
                                                                        "aria-selected": $ === eC.kx.SOUNDBOARD,
                                                                        isActive: $ === eC.kx.SOUNDBOARD,
                                                                        viewType: eC.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: np.sd,
                                                                            children: [
                                                                                eb.intl.string(eb.t.EHlAMc),
                                                                                null != ef &&
                                                                                    (0, l.jsx)(g.E, {
                                                                                        type: "new",
                                                                                        variant: "primary",
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              $ === eC.kx.STICKER && es
                                                  ? (0, l.jsx)(no, {
                                                        isLoading: J,
                                                        channel: M,
                                                        containerWidth: z,
                                                        onSelectSticker: f,
                                                        closePopout: em,
                                                        ref: (e) => {
                                                            K.current = e;
                                                        },
                                                    })
                                                  : null,
                                              $ === eC.kx.GIF && er
                                                  ? (0, l.jsx)(N.A, {
                                                        onSelectGIF: r,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              $ === eC.kx.EMOJI || L.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(C.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: M,
                                                        containerWidth: z,
                                                        emojiSize: null != z && z < ng ? nm.as.MEDIUM : nm.as.LARGE,
                                                        pickerIntention: eo,
                                                        showAddEmojiButton: null == M || null != M.guild_id,
                                                        closePopout: em,
                                                        onSelectEmoji: a,
                                                        ref: (e) => {
                                                            K.current = e;
                                                        },
                                                        isViewingEmojiPacks: ec,
                                                        onViewEmojiPacksChange: eu ? B.ke : void 0,
                                                    })
                                                  : null,
                                              $ === eC.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: np.z,
                                                        children: (0, l.jsx)(_.A, {
                                                            guildId: M.guild_id,
                                                            channel: M,
                                                            containerWidth: z,
                                                            onClose: em,
                                                            onSelect: eE,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: np.BG, children: e }),
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
