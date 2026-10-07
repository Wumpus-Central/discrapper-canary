n.d(t, { A: () => np });
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
    g = n(508770),
    x = n(817281),
    E = n(820284),
    S = n(761929),
    y = n(666860),
    C = n(131607),
    A = n(267889),
    b = n(813703),
    I = n(750506),
    N = n(267102),
    v = n(926972),
    T = n(511558),
    j = n(256449),
    k = n(750385),
    _ = n(649852),
    R = n.n(_),
    O = n(462180),
    L = n(319060),
    w = n(289873),
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
    $ = n(240248),
    Q = n(196765),
    Z = n(121894);
let X = Object.freeze({ showPremiumUpsell: !1 }),
    J = (0, Q.v)((e) => X);
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
function eg(e, t, n) {
    return e.stickers.filter((e) => (0, ef.W$)(e, t, n) !== ef.Ux.SENDABLE_WITH_BOOSTED_GUILD);
}
function ex(e, t, n, l) {
    return i.useMemo(
        () =>
            l
                ? e.flatMap((e) => {
                      let l = (function (e, t, n) {
                          switch (e.type) {
                              case et.Z2.FAVORITE:
                              case et.Z2.RECENT: {
                                  let l = eg(e, t, n);
                                  return 0 === l.length ? null : { ...e, stickers: l, isNitroLocked: !1 };
                              }
                              case et.Z2.GUILD: {
                                  var l;
                                  let i = eg(e, t, n);
                                  if (
                                      i.length > 0 &&
                                      ((l = { ...e, stickers: i }),
                                      l.type === et.Z2.GUILD &&
                                          0 !== l.stickers.length &&
                                          l.stickers.every((e) => (0, ef.W$)(e, t, n) === ef.Ux.SENDABLE_WITH_PREMIUM))
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
var eE = n(652215),
    eS = n(698279),
    ey = n(375708),
    eC = n(161975);
let eA = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    eb = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    eI = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eN = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    ev = (0, $.xI)(L.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eT = (0, $.xI)(L.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ej = [eA, eA, eA, eA],
    ek = (eb + eI) * 2 + eA,
    e_ = ev + 2 * eT;
function eR(e) {
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
                className: eC.a$,
                children: (0, l.jsx)(ed.A, { hovered: u, selected: s, size: "small" }),
            }),
            n,
        ],
    });
}
let eO = (e) => {
    let { stickersListRef: t, channel: n } = e,
        r = i.useRef(null),
        [a, o] = i.useState(!0),
        u = U.bM.useStore((e) => e.activeCategoryIndex),
        c = ex(
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
                n = t * (eb + eI) - eI + e_;
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
                                    children: (0, l.jsx)(eR, {
                                        ariaLabel: ey.intl.string(ey.t.y3LQCG),
                                        className: s()(eC._0, eC.dC, { [eC.k1]: e, [eC.ls]: !m }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(ei.StarIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eC.AB,
                                            height: eN,
                                            width: eN,
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
                                    children: (0, l.jsx)(eR, {
                                        ariaLabel: ey.intl.string(ey.t.RxAmVC),
                                        className: s()(eC._0, eC.dC, eC.ls, { [eC.k1]: e }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(er.ClockIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eC.AB,
                                            height: eN,
                                            width: eN,
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
                                    size: eb,
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
                                            children: (0, l.jsx)(eR, {
                                                ariaLabel: C,
                                                className: s()(eC._0, { [eC.ND]: y, [eC.Ms]: g && y }),
                                                isSelected: g,
                                                onClick: () => {
                                                    (x.type === et.Z2.PACK &&
                                                        q.default.track(eE.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: u?.location,
                                                            tab: eS.kx.STICKER,
                                                            sticker_pack_id: x.id,
                                                            guild_id: o,
                                                        }),
                                                        a());
                                                },
                                                children: A,
                                            }),
                                        }),
                                    }),
                                    S ? (0, l.jsx)("hr", { className: eC.ny }, "separator") : null,
                                ],
                            },
                            x.id,
                        );
                    },
                    [t, u, c, n],
                ),
                h = i.useCallback((e, t) => (t ? ek : 0), []);
            return {
                getScrollOffsetForIndex: h,
                renderCategoryListItem: d,
                rowHeight: i.useCallback(
                    (e, t) => {
                        let l = n[t],
                            i = n[t + 1];
                        return eb + (null != i && l.type === et.Z2.GUILD && i.type !== et.Z2.GUILD ? e_ : eI);
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
        className: eC.jv,
        categoryListRef: r,
        expressionsListRef: t,
        store: U.bM,
        listPadding: ej,
        onScroll: S,
        renderCategoryListItem: x,
        rowCount: c.length,
        categories: c,
        categoryHeight: E,
        children: (e) =>
            g &&
            a &&
            (0, l.jsx)(p.D, {
                className: s()(eC.Fe, { [eC.Q6]: !a }),
                onClick: () => y(e),
                children: (0, l.jsx)(ea.t, { size: "md", color: "currentColor" }),
            }),
    });
};
var eL = n(297264),
    ew = n(834730),
    eP = n(10392),
    eM = n(82498),
    eD = n(724651),
    eU = n(811611),
    eV = n(821609),
    eW = n(403581);
function eF(e) {
    let { analyticsSection: t, buttonText: i } = e;
    return (0, l.jsx)(eV.$, {
        variant: "expressive",
        icon: eW.t,
        text: i ?? ey.intl.string(ey.t["8Sh5fg"]),
        onClick: () => {
            var e;
            return (
                (e = { section: t }),
                void (q.default.track(eE.HAw.OPEN_MODAL, {
                    type: eE.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
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
var eB = n(823894),
    eK = n(202541),
    eG = n(768857);
function eH(e) {
    let { className: t, onClose: n } = e;
    (0, j.XQ)();
    let { analyticsLocations: r } = (0, D.Ay)(M.A.EMPTY_STATE),
        a = (0, d.yK)([k.A], () => eB.vX.map((e) => k.A.getStickerById(e)));
    i.useEffect(() => {
        (q.default.track(eE.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eK.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: eE.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: r,
        }),
            (0, eP.sq)(eE.U7l.PREMIUM_UPSELL_VIEWED, r, () => (0, eM.uq)(eK.e.EMPTY_STICKER_PICKER_UPSELL)));
    }, [r]);
    let o = (0, G.V)(),
        u = (0, eD.O)(),
        c = null != o || null != u;
    return (0, l.jsxs)("div", {
        className: s()(eG.p$, t, { [eG.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eU.Ay, {
                      discountOffer: u,
                      trialOffer: o,
                      onClose: n,
                      type: eK.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscriptionTrial?.skuId ?? eK.pe.TIER_2,
                      children: ey.intl.string(ey.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eL.D, {
                              className: eG.wx,
                              variant: "heading-xl/semibold",
                              children: ey.intl.string(ey.t.HEm04J),
                          }),
                          (0, l.jsx)(ew.E, {
                              className: eG.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: ey.intl.string(ey.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: eG.l1,
                              children: a
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(ep.A, { sticker: e, className: eG.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eF, { analyticsSection: eE.JJy.EXPRESSION_PICKER }),
        ],
    });
}
n(30146);
var ez = n(404778),
    eq = n(537652),
    e$ = n(962125),
    eQ = n(286509),
    eZ = n(414872),
    eX = n(158045),
    eJ = n(631576),
    eY = n(369163),
    e0 = n(123292),
    e1 = n(631305),
    e2 = n(468689),
    e5 = n(931991),
    e8 = n(473145),
    e6 = n(625633),
    e3 = n(136123);
let e7 = function (e) {
    let { className: t, guildId: n, channel: r, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, P.p)(),
        { analyticsLocations: c } = (0, D.Ay)(),
        h = (0, d.bG)([eh.A], () => eh.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, e5.nr)(h),
        p = null != h && 0 === (0, e8.aG)(h.premiumTier) && !h.features.has(eE.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            p &&
            a &&
            ((0, y.zV)(eE.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
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
                      (0, l.jsx)(eY.v, { size: "md", color: "currentColor", className: e3.Kk }),
                      (0, l.jsx)(ew.E, {
                          color: "interactive-text-default",
                          className: e3.rf,
                          variant: "text-sm/normal",
                          children: ey.intl.format(ey.t.AXWla1, { count: (0, e8.aG)(eE.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(e0.Q, {
                          variant: "primary",
                          text: ey.intl.string(ey.t["Gb+BJD"]),
                          onClick: function () {
                              null != h &&
                                  (0, e1.A)({
                                      analyticsLocations: c,
                                      analyticsSourceLocation: u,
                                      guild: h,
                                      perks: (0, e6.q5)(),
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
                      (0, l.jsx)(ew.E, {
                          color: "interactive-text-default",
                          className: e3.rf,
                          variant: "text-sm/normal",
                          children: ey.intl.string(ey.t.S83wgh),
                      }),
                      (0, l.jsx)(e0.Q, {
                          variant: "primary",
                          text: ey.intl.string(ey.t.bwNjug),
                          onClick: function () {
                              ((0, V.v8)(), e2.default.open(n, eE.BEX.STICKERS, u));
                          },
                      }),
                  ],
              })
        : null;
};
var e4 = n(240864),
    e9 = n(89366),
    te = n(202639);
let tt = (0, a.throttle)(
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
            { areOnlyNitroLockedSectionsVisible: o } = (0, e4.s)({
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
var tn = n(307301),
    tl = n(182922),
    ti = n(683522);
let tr = (0, $.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    ts = (0, $.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    ta = i.memo(function (e) {
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
                        ((t = ey.intl.format(ey.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(eu.A, { guild: i })));
                } else if ((0, em.FD)(e)) {
                    let i = k.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = ey.intl.format(ey.t.cZOkbs, { source: i.name })),
                        (n = (0, l.jsx)(ep.A, { size: ts, sticker: (0, em.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(r),
            o =
                (0, em.FD)(r) || (0, em.Xw)(r)
                    ? (0, l.jsx)(ep.A, { isInteracting: !0, size: tr, sticker: r, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: ti.P,
                          children: (0, l.jsx)(tn.j, { size: "md", color: "currentColor", className: ti.K }),
                      });
        return (0, l.jsx)(tl.A, {
            graphicPrimary: o,
            graphicSecondary: s,
            titlePrimary: r.name,
            titleSecondary: (0, em.FD)(r) || (0, em.Xw)(r) ? a : null,
        });
    });
var to = n(140735),
    tu = n(194261),
    tc = n(442433),
    td = n(304072),
    th = n(513902);
let tm = function (e) {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: th.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(tu.LockIcon, { size: "xxs", color: "currentColor", className: th.I }),
    });
};
var tp = n(777371);
let tf = i.memo(function (e) {
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
            channel: N,
            currentUser: v,
            checkSendability: T = !0,
            upsellRestyleEnabled: j = !1,
            isSectionNitroLocked: k = !1,
        } = e,
        { location: _ } = (0, P.p)(),
        R = A + 2 * C,
        O = i.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${R}px)`,
                height: R,
                paddingRight: t ? void 0 : R,
            }),
            [t, c, R],
        ),
        L = i.useMemo(() => ({ width: A, height: A, padding: C }), [C, A]),
        [w, M] = (0, td.A)(null, 300);
    return (0, l.jsx)("div", {
        className: tp.nM,
        style: O,
        ...u?.(E),
        children: y.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === et.op.STICKER && I && u,
                y = (0, a.throttle)(() => {
                    h?.current === !0 || f?.current === !0 || u || g?.(e);
                }, 250),
                { ref: C, tabIndex: R, onFocus: O, ...P } = o?.(e.columnIndex, E) ?? {};
            switch (e.type) {
                case et.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...P,
                            children: (0, l.jsxs)(p.D, {
                                "aria-label": e.name,
                                className: s()(tp.wP, S, { [tp.Kj]: u }),
                                innerRef: C,
                                tabIndex: R,
                                onFocus: O ?? y,
                                onMouseMove: y,
                                onClick: function () {
                                    e.type === et.op.CREATE_STICKER &&
                                        (q.default.track(eE.HAw.OPEN_MODAL, {
                                            type: eE.JJy.CREATE_STICKER_MODAL,
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
                                style: L,
                                children: [
                                    !I && (0, l.jsx)("div", { className: tp.fw }),
                                    (0, l.jsx)("div", {
                                        className: tp.P0,
                                        children: (0, l.jsx)(tn.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tp.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(ew.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: ey.intl.string(ey.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case et.op.STICKER: {
                    let a = (T ? (0, ef.W$)(e.sticker, v, N) : ef.Ux.SENDABLE) !== ef.Ux.SENDABLE,
                        o = j && a && !k,
                        m = !j && a,
                        g = t && null != b && (0, em.FD)(e.sticker) && !b.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...P, key: e.sticker.id },
                        (0, l.jsxs)(p.D, {
                            className: s()(tp.yI, S, { [tp.PV]: u, [tp.TV]: w === e.sticker.id }),
                            innerRef: C,
                            tabIndex: R,
                            onFocus: O ?? y,
                            onMouseMove: y,
                            onClick: function (t) {
                                if (h?.current === !0 || f?.current === !0) return;
                                let n = t.altKey;
                                (n && e.type === et.op.STICKER && !(0, em.o1)(e.sticker.id) && M(e.sticker.id),
                                    x?.(e, n));
                            },
                            onContextMenu: function (e) {
                                (0, tc.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("638221"),
                                        n.e("904774"),
                                        n.e("446132"),
                                    ]).then(n.bind(n, 233503));
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                            style: L,
                            "data-type": el.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, l.jsx)(to.A, { children: (0, ep.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !I && (0, l.jsx)("div", { className: tp.fw }),
                                        (0, l.jsx)(ep.A, {
                                            className: s()(tp.SI, {
                                                [tp.ot]:
                                                    I && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [tp.Q$]: c,
                                                [tp.No]: m,
                                                [tp.UK]: o,
                                            }),
                                            disableAnimation: !u && !r,
                                            enlargeOnInteraction: I,
                                            isInteracting: u,
                                            maskAsset: u,
                                            sticker: e.sticker,
                                            size: A,
                                        }),
                                        g ? (0, l.jsx)(tm, { size: 20 }) : null,
                                        o
                                            ? (0, l.jsx)("div", {
                                                  className: tp.MC,
                                                  children: (0, l.jsx)(tu.LockIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: tp.hz,
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
function tg(e) {
    let { descriptor: t, currentUser: n, channel: l, onSelect: i } = e;
    switch ((0, ef.W$)(t.sticker, n, l)) {
        case ef.Ux.SENDABLE:
            i(t);
            break;
        case ef.Ux.SENDABLE_WITH_PREMIUM:
            (q.default.track(eE.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: eE.JJy.STICKER_PICKER_UPSELL,
                location_object: eE.ZSU.STICKER,
            }),
                Y(!0));
        case ef.Ux.SENDABLE_WITH_BOOSTED_GUILD:
        case ef.Ux.NONSENDABLE:
    }
}
var tx = n(457231);
let tE = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tS = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    ty = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    tC = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tA = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tb = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tI = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tN = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tv = (0, $.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tT = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tj = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tk = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    t_ = tT + 2 + tk,
    tR = tj + 2 + tk,
    tO = [ty, tA, tb, tI],
    tL = [tC, tA, tb, tI],
    tw = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tP = "sticker-search-nitro",
    tM = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tD(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: tx.yB,
        children: tM.map((e) =>
            (0, l.jsx)(
                p.D,
                {
                    className: tx.x_,
                    onClick: () => t(e),
                    children: (0, l.jsx)(ew.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
function tU(e, t) {
    return null != t && 0 !== t.sendableWithPremium.length && e === +(t.sendable.length > 0);
}
function tV(e, t) {
    return null != t && 0 === e && t.sendable.length > 0 && t.sendableWithPremium.length > 0;
}
let tW = function (e) {
    let {
            collapsedStickersCategories: t,
            gridWidth: n,
            filteredStickers: r,
            getStickerItemProps: a,
            getStickerRowProps: o,
            gutterWidth: c,
            isUsingKeyboardNavigation: h,
            onSelectSticker: m,
            rowCount: p,
            rowCountBySection: f,
            stickersCategories: g,
            stickersGrid: x,
            channel: E,
            ref: S,
        } = e,
        y = i.useRef(!1),
        C = i.useRef(null),
        [A, b] = U.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], O.x),
        { analyticsLocations: I } = (0, D.Ay)(M.A.STICKER_PICKER),
        N = (0, V.RQ)((e) => e.searchQuery),
        v = (0, d.bG)([k.A], () => k.A.getPremiumPacks()),
        T = (0, d.bG)([z.default], () => z.default.getCurrentUser()),
        j = eX.Ay.canUseCustomStickersEverywhere(T),
        [_, R] = i.useState(0),
        L = K("web.StickerPickerList"),
        w = i.useMemo(() => new Set(v.map((e) => e.id)), [v]),
        F = ex(g, T, E, L),
        {
            renderRow: B,
            renderSection: G,
            renderSectionFooter: $,
            sectionFooterHeight: Q,
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
                                    object: "" === s ? eE.ZSU.STICKER_PICKER_VIEW_ALL : eE.ZSU.STICKER_SEARCH_VIEW_ALL,
                                };
                                (0, ef.W$)(a, l, n) !== ef.Ux.SENDABLE
                                    ? tg({ descriptor: e, currentUser: l, channel: n, onSelect: t })
                                    : i
                                      ? (0, em.o1)(a.id)
                                          ? (0, eJ.vr)(a.id)
                                          : ((0, ee.Dt)({ sticker: a, location: { ...o, object: eE.ZSU.STICKER } }),
                                            (0, eJ.uK)(a.id))
                                      : t(e);
                            },
                            [r.location, s, l, n, t],
                        ),
                    };
                })({ onSelectSticker: r, channel: x, currentUser: E }),
                [I, N] = i.useState(!1),
                v = i.useCallback((e) => {
                    H.tP.updateSetting(Array.from(e));
                }, []),
                T = i.useCallback(
                    (e) => {
                        let t = m[e],
                            i = t?.[0]?.gridSectionIndex,
                            r = null != i && ((y && tU(i, f)) || (null == f && p[i]?.isNitroLocked === !0));
                        return null != t
                            ? (0, l.jsx)(
                                  tf,
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
                                      stickerClassName: tx.yI,
                                      stickerDescriptors: t,
                                      stickerSize: n > tE ? tT : tj,
                                      stickerPadding: 1,
                                      preferAnimation: n <= tS,
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
                            i = y && tU(e, f),
                            r = i || (null == f && n?.isNitroLocked === !0),
                            a = i || (null == f && j(e));
                        return null == f || r
                            ? (0, l.jsx)(
                                  "div",
                                  { role: "rowgroup", className: s()({ [tx.cW]: r, [tx.fV]: a }), children: t },
                                  e,
                              )
                            : t;
                    },
                    [f, p, y, j],
                ),
                O = i.useCallback(
                    function (e) {
                        let { isStickerPack: n = !0 } =
                                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = new Set(t),
                            i = t.has(e);
                        (i ? l.delete(e) : l.add(e),
                            q.default.track(eE.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: C?.location,
                                tab: eS.kx.STICKER,
                                collapsed: !i,
                                sticker_pack_id: n ? e : null,
                            }),
                            v(l));
                    },
                    [C, t, v],
                ),
                L = i.useCallback(
                    (e) => {
                        let n = p[e];
                        if (null != f) {
                            let { sendable: n, sendableWithPremium: i } = f;
                            if (0 === e && n.length > 0) return null;
                            if (y && tU(e, f)) {
                                let n = S === e;
                                return (0, l.jsx)(
                                    eQ.A,
                                    {
                                        className: s()(tx.jH, tx.M0, { [tx.RA]: !n, [tx.sp]: n }),
                                        "aria-label": ey.intl.string(ey.t.pAF6xE),
                                        icon: (0, l.jsx)(eW.t, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(tP),
                                        onClick: () => O(tP, { isStickerPack: !1 }),
                                        children: ey.intl.string(ey.t.pAF6xE),
                                    },
                                    "stickers-available-with-nitro-header",
                                );
                            }
                            let r = n.length > 0 && i.length > 0;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    r ? (0, l.jsx)("div", { className: tx.yF, children: (0, l.jsx)(ez.c, {}) }) : null,
                                    (0, l.jsx)(
                                        eQ.A,
                                        {
                                            className: tx.jH,
                                            "aria-label": ey.intl.string(ey.t.wbfJFh),
                                            children: ey.intl.string(ey.t["05Z/0l"]),
                                        },
                                        "stickers-you-might-like-header",
                                    ),
                                ],
                            });
                        }
                        let i = p[e]?.isNitroLocked === !0,
                            r = s()(tx.jH, { [tx.M0]: y, [tx.RA]: i && S !== e, [tx.sp]: i && S === e });
                        switch (n.type) {
                            case et.Z2.FAVORITE:
                                return (0, l.jsx)(
                                    eQ.A,
                                    {
                                        className: r,
                                        "aria-label": ey.intl.formatToPlainString(ey.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(ei.StarIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => O(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case et.Z2.RECENT:
                                return (0, l.jsx)(
                                    eQ.A,
                                    {
                                        className: r,
                                        "aria-label": ey.intl.formatToPlainString(ey.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(er.ClockIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => O(n.id, { isStickerPack: !1 }),
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
                                        "aria-label": ey.intl.formatToPlainString(ey.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(eu.A, { guild: e, height: 16, width: 16 }),
                                        isCollapsed: t.has(e.id),
                                        onClick: () => O(e.id),
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
                                        "aria-label": ey.intl.formatToPlainString(ey.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(ep.A, {
                                            disableAnimation: !0,
                                            size: 12,
                                            sticker: (0, em.Id)(e),
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
                    [S, t, f, p, O, y],
                ),
                w = i.useCallback(
                    (e) => {
                        if (null != f) {
                            let { sendable: t, sendableWithPremium: n } = f;
                            return 0 === e && t.length > 0
                                ? 0
                                : y && tU(e, f)
                                  ? tv + 16
                                  : tv + (t.length > 0 && n.length > 0 ? tN : 0);
                        }
                        return tv + 16 * (p[e]?.isNitroLocked === !0);
                    },
                    [f, p, y],
                );
            return {
                renderRow: T,
                renderSection: R,
                renderSectionHeader: L,
                sectionHeaderHeight: w,
                renderSectionFooter: i.useCallback(
                    (e) => {
                        if (null != f)
                            return y
                                ? tU(e, f)
                                    ? (0, l.jsx)("div", { className: tx.pQ })
                                    : tV(e, f)
                                      ? (0, l.jsx)(eZ.Ay, { className: tx.$2 })
                                      : null
                                : null;
                        let n = p[e],
                            i = t.has(n.id),
                            r =
                                n.type !== et.Z2.EMPTY_GUILD_UPSELL || i
                                    ? null
                                    : (0, l.jsx)(
                                          e7,
                                          {
                                              className: tx.Ij,
                                              guildId: n.id,
                                              channel: x,
                                              shouldTrackUpsellViewed: !I,
                                              setTrackedUpsellViewed: N,
                                          },
                                          `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                      ),
                            s = null;
                        return (
                            _(e)
                                ? (s = (0, l.jsx)(eZ.Ay, { className: tx.$2 }))
                                : j(e) && (s = (0, l.jsx)("div", { className: tx.pQ })),
                            null == r && null == s ? null : (0, l.jsxs)(l.Fragment, { children: [r, s] })
                        );
                    },
                    [p, t, f, x, I, y, _, j],
                ),
                sectionFooterHeight: i.useCallback(
                    (e) => {
                        if (null != f) return y ? (tU(e, f) ? 33 : tV(e, f) ? eZ.kg : 0) : 0;
                        let n = p[e],
                            l = t.has(n.id),
                            i = 0;
                        return (
                            n.type !== et.Z2.EMPTY_GUILD_UPSELL || l || (i += tw),
                            _(e) ? (i += eZ.kg) : j(e) && (i += 33),
                            i
                        );
                    },
                    [f, y, p, t, _, j],
                ),
            };
        })({
            collapsedStickersCategories: t,
            gridWidth: n,
            stickersCategories: F,
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
            activeSectionIndex: _,
            upsellRestyleEnabled: L,
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
                            tt({
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
                        (q.default.track(eE.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: eK.e.STICKER_PICKER_FLOATING_UPSELL,
                            location: d,
                            location_stack: h,
                        }),
                        (0, eP.sq)(eE.U7l.PREMIUM_UPSELL_VIEWED, h, () =>
                            (0, eM.uq)(eK.e.STICKER_PICKER_FLOATING_UPSELL),
                        ));
                }, [d, h, n, x]),
                !t || n || u.Fr)
            )
                return { onScroll: g, upsell: null };
            let E = ey.intl.format(ey.t.eontIh, {
                    nitroTierName: (0, eX.Dd)(eK.PremiumTypes.TIER_2),
                    onClick: () => {
                        (q.default.track(eE.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_section: eE.JJy.STICKER_PICKER_FLOATING_UPSELL,
                        }),
                            Y(!0));
                    },
                }),
                S = (0, eX.LE)((0, e9.qD)(), eK.pe.TIER_2) ?? ey.intl.string(ey.t.BmJkbd);
            return {
                onScroll: g,
                upsell: (0, l.jsx)(te.d, {
                    showUpsell: x,
                    text: E,
                    button: S,
                    buttonAnalyticsObject: { section: eE.JJy.STICKER_PICKER_FLOATING_UPSELL },
                }),
            };
        })({
            upsellRestyleEnabled: L,
            canUseStickersEverywhere: j,
            listRef: C,
            searchQuery: N,
            categories: F,
            sectionHeaderHeight: X,
            sectionFooterHeight: Q,
        });
    i.useEffect(() => {
        L && J(C.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [L, J, f]);
    let es = (0, W.Fk)({
            activeCategoryIndex: A,
            isScrolling: y,
            listRef: C,
            onActiveCategoryIndexChange: U.bM.setActiveCategoryIndex,
            scrollOffset: 20,
            searchQuery: N,
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
        L && ea(C.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [L, ea, r, f]);
    let eo = i.useCallback(
        (e) => {
            (es(e), L && ea(e), J(e));
        },
        [es, J, ea, L],
    );
    return (
        (0, W.FV)({ searchQuery: N, activeCategoryIndex: A, listRef: C }),
        i.useImperativeHandle(
            S,
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
                className: tx.iE,
                children: [
                    (0, l.jsxs)("div", {
                        className: tx.AD,
                        children: [
                            null != r && 0 === r.sendable.length && 0 === r.sendableWithPremium.length
                                ? (0, l.jsx)(eq.A, {
                                      message: ey.intl.string(ey.t["zc+LQd"]),
                                      className: tx.__invalid_noSearchResultsContainer,
                                      suggestions: (0, l.jsx)(tD, { onSuggestionClick: (e) => (0, V.Ri)(e, !0) }),
                                  })
                                : (0, l.jsx)(e$.A, {
                                      role: "none presentation",
                                      listPadding: null != r ? tL : tO,
                                      onScroll: eo,
                                      renderRow: B,
                                      renderSection: G,
                                      renderSectionHeader: Z,
                                      renderSectionFooter: $,
                                      rowCount: p,
                                      rowCountBySection: f,
                                      rowHeight: n > tE ? t_ : tR,
                                      sectionHeaderHeight: X,
                                      sectionFooterHeight: Q,
                                      stickyHeaders: !0,
                                      ref: C,
                                  }),
                            en,
                        ],
                    }),
                    (0, l.jsx)(ta, { stickersGrid: x }),
                ],
            }),
        })
    );
};
var tF = n(602034),
    tB = n(683438),
    tK = n(909802);
let tG = function (e) {
    let { onKeyDown: t, stickersListRef: n, channel: r, ref: s } = e,
        a = (0, j.ZO)(r),
        o = i.useRef(null),
        { searchQuery: u, isSearchSuggestion: c } = (0, V.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            O.x,
        ),
        d = U.bM.useStore((e) => e.searchPlaceholder),
        [h, m] = U.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], O.x),
        p = i.useCallback(
            (e) => {
                (U.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    U.bM.setInspectedExpressionPosition(0, 0),
                    U.bM.setSearchPlaceholder(null),
                    (0, V.Ri)(e),
                    n.current?.scrollTo(0));
            },
            [n],
        ),
        f = i.useCallback(() => {
            p("");
        }, [p]);
    return (
        i.useImperativeHandle(s, () => ({ focus: () => o.current?.focus() })),
        i.useLayoutEffect(() => {
            c && o.current?.focus();
        }, [c]),
        (0, l.jsx)("div", {
            className: tK.i,
            children: (0, l.jsx)(tB.I, {
                autoFocus: a,
                disabled: !a,
                query: u,
                ref: o,
                placeholder: d ?? (a ? ey.intl.string(ey.t.dt5h1C) : ey.intl.string(ey.t["Pck/4U"])),
                onClear: f,
                onKeyDown: t,
                onChange: p,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": eB.lq,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, tF.Aq)(eB.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
};
n(321073);
var tH = n(802842),
    tz = n(330422),
    tq = n(609178);
function t$(e) {
    let { onUpsellClicked: t } = e,
        { location: n } = (0, P.p)(),
        { analyticsLocations: i } = (0, D.Ay)(M.A.STICKER_PICKER),
        r = (0, V.RQ)((e) => e.searchQuery);
    return (0, l.jsx)(tq.A, {
        title: ey.intl.string(ey.t.Eukdgl),
        description: ey.intl.string(ey.t.sMmd7s),
        analyticsLocationSection: eE.JJy.STICKER_PICKER_UPSELL,
        onClose: () => Y(!1),
        onUpsellClicked: t,
        upsellViewedTrackingData: {
            type: eK.e.STICKER_PICKER_UPSELL,
            location: { ...n, object: eE.ZSU.STICKER },
            location_stack: i,
            sku_id: (0, eX.mH)(eX.Ay.getSkuIdForPremiumType(eK.PremiumTypes.TIER_2)),
            has_search_query: "" !== r,
        },
        graphic: (0, l.jsx)(tz.n, { alt: "", ariaHidden: !0 }),
        useNitroGradient: !0,
    });
}
var tQ = n(789645),
    tZ = n(964486),
    tX = n(420136),
    tJ = n(939383);
function tY() {
    return Y(!1);
}
function t0(e) {
    let { onLearnMore: t } = e,
        { analyticsLocations: n } = (0, D.Ay)(M.A.PREMIUM_UPSELL);
    (0, i.useEffect)(() => {
        (q.default.track(eE.HAw.PREMIUM_UPSELL_VIEWED, {
            location_section: eE.JJy.STICKER_PICKER_UPSELL,
            type: eK.e.STICKER_PICKER_UPSELL,
            location_stack: n,
        }),
            (0, eP.sq)(eE.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, eM.uq)(eK.e.STICKER_PICKER_UPSELL)));
    }, [n]);
    let r = (0, i.useRef)(null);
    (0, tZ.Ay)(() => {
        r.current?.focus();
    });
    let a = (0, G.V)(),
        o = (0, eD.O)(),
        u = a?.subscriptionTrial?.skuId === eK.pe.TIER_0,
        c = null != a || null != o;
    return (0, l.jsxs)("div", {
        ref: r,
        tabIndex: -1,
        "aria-label": ey.intl.string(ey.t.jJG1pl),
        className: s()(tX.VL, { [tX.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eU.Ay, {
                      trialOffer: a,
                      discountOffer: o,
                      onClose: tY,
                      type: eK.e.STICKER_PICKER_UPSELL,
                      subscriptionTier: a?.subscriptionTrial?.skuId ?? eK.pe.TIER_2,
                      children: u
                          ? ey.intl.format(ey.t.MAGagw, {
                                planName: (0, eX.RH)(eK.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : ey.intl.format(ey.t.jt7JX6, { onClick: t }),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: tX.Tn, src: tJ, alt: ey.intl.string(ey.t.do7AoM) }),
                          (0, l.jsx)(ew.E, {
                              className: tX.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: ey.intl.string(ey.t.jJG1pl),
                          }),
                          (0, l.jsx)(ew.E, {
                              className: tX.GR,
                              variant: "text-md/normal",
                              children: ey.intl.format(ey.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eF, { analyticsSection: eE.JJy.EXPRESSION_PICKER }),
            (0, l.jsx)(p.D, {
                className: tX.kz,
                onClick: tY,
                "aria-label": ey.intl.string(ey.t.cpT0Cq),
                children: (0, l.jsx)(tQ.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var t1 = n(970099);
let t2 = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    t5 = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    t8 = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    t6 = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    t3 = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    t7 = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    t4 = (0, $.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    t9 = t7 + 2,
    ne = t4 + 2,
    nt = R()(ee.Qz, 200),
    nn = R()(ee.HA, 200);
function nl(e) {
    let { containerWidth: t, channel: r, onSelectSticker: s, closePopout: a, ref: o } = e,
        u = K("web.StickerPicker"),
        { location: c } = (0, P.p)(),
        { analyticsLocations: h } = (0, D.Ay)(M.A.STICKER_PICKER),
        p = (0, G.V)()?.subscriptionTrial != null,
        f = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        E = J((e) => e.showPremiumUpsell),
        [S, y] = (0, V.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], O.x),
        C = i.useRef("");
    i.useImperativeHandle(o, () => ({ onPickerOpen: eg }));
    let A = (0, j.pD)(r),
        b = (0, d.bG)([z.default], () => z.default.getCurrentUser()),
        I = ex(A, b, r, u),
        N = 0 === I.filter((e) => e.type !== et.Z2.EMPTY_GUILD_UPSELL).length,
        v = (0, W.oV)({
            gridWrapperRef: f,
            containerWidth: t,
            showingEmptyState: N,
            listPaddingLeft: t5,
            listScrollbarWidth: 8,
        }),
        T = H.tP.useSetting(),
        _ = i.useMemo(() => new Set(T), [T]),
        R = i.useMemo(
            () =>
                (function (e, t, n) {
                    if ("" === e) return null;
                    let l = [],
                        i = [];
                    return (
                        tH.Ay.queryStickers([e], !0)
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
                })(S, b, r),
            [S, b, r],
        ),
        L = (0, j.Gc)(),
        w = (0, j.UT)(),
        B = (0, d.cf)([k.A], () => k.A.getAllGuildStickers()),
        { sendable: $ = [], sendableWithPremium: Q = [] } = R ?? {},
        Z = $.length + Q.length,
        X = i.useCallback(
            (e) => {
                ("" === S ? (0, ee.ry)(e) : (0, ee.nQ)(e, S, Z), s(e.sticker, et.D6.STICKER_PICKER));
            },
            [s, S, Z],
        ),
        ei = null != v && v > t2,
        {
            rowCount: er,
            rowCountBySection: es,
            stickersGrid: ea,
            gutterWidth: eo,
            columnCounts: eu,
        } = (0, j._c)({
            filteredStickers: R,
            stickersCategories: I,
            collapsedStickersCategories: _,
            collapsePremiumSearchSection: u && _.has(tP),
            listWidth: v,
            listPaddingRight: t8,
            stickerNodeMargin: ei ? t6 : t3,
            stickerNodeWidth: ei ? t9 : ne,
        }),
        {
            getItemProps: ec,
            getRowProps: ed,
            gridContainerProps: eh,
            handleGridContainerKeyDown: em,
            isUsingKeyboardNavigation: ep,
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
                                l !== el.t.GRID_NAVIGATOR_EVENT && h({ type: en.n.SET_FOCUSED_POSITION, x: t, y: n });
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
            columnCounts: eu,
            stickersListRef: g,
            stickersGrid: ea,
            onGridItemSelect: i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case et.op.CREATE_STICKER:
                            (q.default.track(eE.HAw.OPEN_MODAL, { type: eE.JJy.CREATE_STICKER_MODAL, location: c }),
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
                            tg({ descriptor: e, currentUser: b, channel: r, onSelect: X });
                    }
                },
                [c, b, r, X],
            ),
            store: U.bM,
            setInspectedStickerPosition: U.bM.setInspectedExpressionPosition,
            gridNavigatorId: eB.lq,
        });
    function eg() {
        let e = r.getGuildId(),
            n = [];
        null !== e && (n = k.A.getStickersByGuildId(e) ?? []);
        let l = 0;
        (null != B &&
            [...B.values()].forEach((e) => {
                l += e.length;
            }),
            (0, ee.p4)({
                containerWidth: t,
                favoriteStickers: L,
                frequentlyUsedStickers: w,
                guildStickers: n,
                stickersTotal: l,
            }));
    }
    (i.useEffect(
        () => () => {
            (U.bM.resetStoreState(), Y(!1));
        },
        [],
    ),
        i.useEffect(() => {
            ("" === C.current && "" !== S && (0, ee.Fg)(), (C.current = S));
        }, [S]),
        i.useEffect(() => {
            0 === Z ? nt(S) : nn(S, Z, y);
        }, [S, Z, y]),
        i.useLayoutEffect(() => {
            x.current?.focus();
        }, []));
    let eS = i.useCallback(() => {
        (a(),
            q.default.track(eE.HAw.PREMIUM_PROMOTION_OPENED, { location_section: eE.JJy.STICKER_PICKER_UPSELL }),
            (0, F.e)());
    }, [a]);
    return (0, l.jsxs)(D.f5, {
        value: h,
        children: [
            !(p && N) &&
                (0, l.jsx)("div", {
                    className: t1.wx,
                    children: (0, l.jsx)(tG, { ref: x, onKeyDown: em, stickersListRef: g, channel: r }),
                }),
            N
                ? (0, l.jsx)(eH, { className: t1.p$, onClose: a })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              ref: f,
                              className: t1.AD,
                              id: eB.lq,
                              ...eh,
                              children:
                                  null != v
                                      ? (0, l.jsx)(tW, {
                                            ref: g,
                                            collapsedStickersCategories: _,
                                            filteredStickers: R,
                                            getStickerItemProps: ec,
                                            getStickerRowProps: ed,
                                            gridWidth: v,
                                            gutterWidth: eo,
                                            isUsingKeyboardNavigation: ep,
                                            onSelectSticker: X,
                                            rowCount: er,
                                            rowCountBySection: es,
                                            stickersCategories: I,
                                            stickersGrid: ea,
                                            channel: r,
                                        })
                                      : null,
                          }),
                          (0, l.jsx)(eO, { stickersListRef: g, channel: r }),
                      ],
                  }),
            E && (u ? (0, l.jsx)(t$, { onUpsellClicked: a }) : (0, l.jsx)(t0, { onLearnMore: eS })),
        ],
    });
}
let ni = function (e) {
    let { ref: t, ...n } = e;
    return (
        (0, j.XQ)(),
        (0, l.jsx)("div", {
            className: t1.iE,
            id: eB.GX,
            "aria-labelledby": eB.LD,
            role: "tabpanel",
            children: n.isLoading ? (0, l.jsx)(w.y, { className: t1.Mz }) : (0, l.jsx)(nl, { ...n, ref: t }),
        })
    );
};
var nr = n(742023),
    ns = n(712687),
    na = n(625494),
    no = n(49999),
    nu = n(732139),
    nc = n(307731),
    nd = n(818625);
let nh = 498 + nu.as.MEDIUM,
    nm = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: r = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(p.D, {
            role: "tab",
            autoFocus: r,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                (y.Ay.trackWithMetadata(eE.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, V.U)(i));
            },
            "aria-current": t ? "page" : void 0,
            className: s()(n, nd.oi, nd.pc, { [nd.Mv]: t }),
        });
    }),
    np = i.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: r,
                onSelectEmoji: a,
                onSelectSticker: p,
                onSelectSound: _,
                channel: R,
                type: O,
                position: L,
                align: w,
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
                    r = (0, d.bG)([nr.Ay], () => nr.Ay.expressionPickerWidth),
                    [s, a] = i.useState(window.innerWidth),
                    [u, c] = i.useState(r ?? eS.wp.MIN),
                    h = i.useMemo(() => {
                        switch (u) {
                            case eS.wp.MIN:
                                return 498;
                            case eS.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    m = i.useCallback(
                        (e) => {
                            let t = e >= s ? eS.wp.MAX : e <= 498 ? eS.wp.MIN : e;
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
                orientation: "left" === w ? S.R.HORIZONTAL_RIGHT : S.R.HORIZONTAL_LEFT,
            }),
            H = (0, V.RQ)((e) => e.activeView),
            z = (0, j.ZO)(R),
            { renderWindow: q, windowDispatch: $ } = i.useContext(N.Ay),
            Q = (0, d.bG)([k.A], () => !k.A.hasLoadedStickerPacks),
            Z = (0, v.tj)({ location: "expression_picker" }),
            X = (0, d.bG)([ns.A], () => ns.A.isOpen()),
            J = null != D,
            Y = (0, m.useIsModalAtTop)(D ?? ""),
            ee = O.gifs?.allowSending && !u.Fr && null != r,
            et = O.stickers?.allowSending && null != p,
            en = !O.expressionPicker?.onlyEmojis && (ee || et),
            el = i.useCallback(
                (e) => {
                    if ((!J && (0, m.hasAnyModalOpen)()) || (J && !(Y && M)) || X || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + eS.VQ)) return;
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
                    (null == n || "BODY" === n.tagName) && na._.dispatchToLastSubscribed(eE.jej.TEXTAREA_FOCUS);
                },
                [M, Y, J, X],
            ),
            ei = i.useCallback(() => {
                (0, V.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                H === eS.kx.GIF && (0, V.v8)();
            }
            return (
                q.addEventListener("mousedown", el),
                q.addEventListener("contextmenu", el),
                $.subscribe(eE.jej.POPOUT_CLOSE, ei),
                na._.subscribe(eE.jej.CLOSE_GIF_PICKER, e),
                () => {
                    (q.removeEventListener("mousedown", el),
                        q.removeEventListener("contextmenu", el),
                        $.unsubscribe(eE.jej.POPOUT_CLOSE, ei),
                        na._.unsubscribe(eE.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [H, ei, el, q, $]),
            (0, f.tj)(U));
        let [er, es] = (0, C.kn)(Z ? [h.M.SOUNDMOJI_BADGE] : [], void 0, !1),
            [ea, eo] = i.useState(!1);
        (i.useEffect(() => {
            H === eS.kx.SOUNDBOARD && eo(!0);
        }, [H]),
            i.useEffect(
                () => () => {
                    ea && es(no.i.TAKE_ACTION);
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
                    (H === eS.kx.EMOJI
                        ? F?.current?.onPickerOpen != null && (F?.current?.onPickerOpen(), (W.current = !0))
                        : H === eS.kx.STICKER
                          ? F?.current?.onPickerOpen == null || Q || (F?.current?.onPickerOpen(), (W.current = !0))
                          : (y.Ay.trackWithMetadata(eE.HAw.EXPRESSION_PICKER_OPENED, {
                                width: B.current.offsetWidth,
                                tab: H,
                                badged: !1,
                            }),
                            (W.current = !0)));
            }));
        let eu = i.useCallback((e, t) => _?.(e, "emoji_picker", t), [_]),
            ec = i.useCallback((e, t) => _?.(e, "soundboard_picker", t), [_]),
            ed = O.soundmoji?.allowSending === !0 && null != _,
            eh = "left" === w ? "right" : "left",
            em = null != P ? P : "left" === w ? nd.sj : nd.Jg,
            ep = ee
                ? (0, l.jsx)(nm, {
                      id: nu.g9,
                      "aria-controls": nu.ni,
                      "aria-selected": H === eS.kx.GIF,
                      isActive: H === eS.kx.GIF,
                      viewType: eS.kx.GIF,
                      children: ey.intl.string(ey.t["6gUTsS"]),
                  })
                : null,
            ef = et
                ? (0, l.jsx)(nm, {
                      id: eB.LD,
                      "aria-controls": eB.GX,
                      "aria-selected": H === eS.kx.STICKER,
                      isActive: H === eS.kx.STICKER,
                      autoFocus: !z,
                      viewType: eS.kx.STICKER,
                      children: (0, l.jsx)("div", { className: nd.dG, children: ey.intl.string(ey.t.nf1s3u) }),
                  })
                : null,
            eg = (0, l.jsx)(nm, {
                id: nu.k1,
                "aria-controls": nu.Do,
                "aria-selected": H === eS.kx.EMOJI,
                isActive: H === eS.kx.EMOJI,
                viewType: eS.kx.EMOJI,
                children: ey.intl.string(ey.t.Xu3wE3),
            });
        return (0, l.jsx)(E.A, {
            section: eE.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(I.nE, {
                className: s()(nd.T8, em),
                targetRef: t,
                position: L,
                align: w,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: s()(nd.V6, { [nd.D0]: !en }),
                        ref: U,
                        role: "dialog",
                        "aria-label": ey.intl.string(ey.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: nd.jP,
                                  style: { width: null == K ? void 0 : K, [w]: 0 },
                                  ref: B,
                                  children: [
                                      (0, l.jsx)("div", { className: nd.Di, onMouseDown: G, style: { [eh]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: nd.FG,
                                          children: [
                                              en
                                                  ? (0, l.jsx)("nav", {
                                                        className: nd.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: nd.CT,
                                                            role: "tablist",
                                                            "aria-label": ey.intl.string(ey.t["2j4Vgd"]),
                                                            children: [
                                                                ep,
                                                                ef,
                                                                eg,
                                                                Z &&
                                                                    ed &&
                                                                    (0, l.jsx)(nm, {
                                                                        id: nu.N6,
                                                                        "aria-controls": nu.AA,
                                                                        "aria-selected": H === eS.kx.SOUNDBOARD,
                                                                        isActive: H === eS.kx.SOUNDBOARD,
                                                                        viewType: eS.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: nd.sd,
                                                                            children: [
                                                                                ey.intl.string(ey.t.EHlAMc),
                                                                                null != er &&
                                                                                    (0, l.jsx)(g.E, {
                                                                                        type: "new",
                                                                                        variant: "brand",
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              H === eS.kx.STICKER && et
                                                  ? (0, l.jsx)(ni, {
                                                        isLoading: Q,
                                                        channel: R,
                                                        containerWidth: K,
                                                        onSelectSticker: p,
                                                        closePopout: ei,
                                                        ref: (e) => {
                                                            F.current = e;
                                                        },
                                                    })
                                                  : null,
                                              H === eS.kx.GIF && ee
                                                  ? (0, l.jsx)(b.A, {
                                                        onSelectGIF: r,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              H === eS.kx.EMOJI || O.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(A.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: R,
                                                        containerWidth: K,
                                                        emojiSize: null != K && K < nh ? nu.as.MEDIUM : nu.as.LARGE,
                                                        pickerIntention:
                                                            O.expressionPicker?.emojiIntention ??
                                                            nc.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == R || null != R.guild_id,
                                                        closePopout: ei,
                                                        onSelectEmoji: a,
                                                        onSelectSoundmoji: eu,
                                                        ref: (e) => {
                                                            F.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            O.soundmoji?.allowSending === !0,
                                                    })
                                                  : null,
                                              H === eS.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: nd.z,
                                                        children: (0, l.jsx)(T.A, {
                                                            guildId: R.guild_id,
                                                            channel: R,
                                                            containerWidth: K,
                                                            onClose: ei,
                                                            onSelect: ec,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: nd.BG, children: e }),
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
