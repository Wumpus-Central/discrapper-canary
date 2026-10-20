n.d(t, { A: () => ng });
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
    C = n(90295),
    b = n(490035),
    I = n(934499),
    v = n(813703),
    N = n(750506),
    T = n(267102),
    j = n(926972),
    _ = n(476254),
    k = n(256449),
    R = n(750385),
    w = n(649852),
    O = n.n(w),
    M = n(462180),
    L = n(319060),
    P = n(289873),
    D = n(212245),
    U = n(793574),
    V = n(688810),
    W = n(850992),
    F = n(151271),
    B = n(887695),
    K = n(87719);
let G = (0, n(945810).mj)({
    name: "2026-09-web-sticker-picker-upsell-restyle",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
function H(e) {
    return G.useConfig({ location: e });
}
var z = n(732280),
    q = n(885386),
    $ = n(287809),
    Q = n(174459),
    Z = n(240248),
    X = n(196765),
    J = n(121894);
let Y = Object.freeze({ showPremiumUpsell: !1 }),
    ee = (0, X.v)((e) => Y);
function et(e) {
    (0, J.r)(() => ee.setState({ showPremiumUpsell: e }));
}
var en = n(891090),
    el = n(194004),
    ei = n(788413),
    er = n(60587),
    es = n(27232),
    ea = n(406810),
    eo = n(866665),
    eu = n(797285),
    ec = n(713517),
    ed = n(724511),
    eh = n(88218),
    em = n(941971),
    ef = n(71393),
    ep = n(378058),
    eg = n(148355),
    ex = n(361670);
function eE(e, t, n) {
    return e.stickers.filter((e) => (0, ex.W$)(e, t, n) !== ex.Ux.SENDABLE_WITH_BOOSTED_GUILD);
}
function eS(e, t, n, l) {
    return i.useMemo(
        () =>
            l
                ? e.flatMap((e) => {
                      let l = (function (e, t, n) {
                          switch (e.type) {
                              case el.Z2.FAVORITE:
                              case el.Z2.RECENT: {
                                  let l = eE(e, t, n);
                                  return 0 === l.length ? null : { ...e, stickers: l, isNitroLocked: !1 };
                              }
                              case el.Z2.GUILD: {
                                  var l;
                                  let i = eE(e, t, n);
                                  if (
                                      i.length > 0 &&
                                      ((l = { ...e, stickers: i }),
                                      l.type === el.Z2.GUILD &&
                                          0 !== l.stickers.length &&
                                          l.stickers.every((e) => (0, ex.W$)(e, t, n) === ex.Ux.SENDABLE_WITH_PREMIUM))
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
var ey = n(652215),
    eA = n(698279),
    eC = n(105292),
    eb = n(161975);
let eI = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    ev = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    eN = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eT = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    ej = (0, Z.xI)(L.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    e_ = (0, Z.xI)(L.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ek = [eI, eI, eI, eI],
    eR = (ev + eN) * 2 + eI,
    ew = ej + 2 * e_;
function eO(e) {
    let { ariaLabel: t, children: n, className: r, isSelected: s, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, ec.A)(o);
    return (0, l.jsxs)(f.D, {
        innerRef: o,
        "aria-label": t,
        className: r,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: eb.a$,
                children: (0, l.jsx)(em.A, { hovered: u, selected: s, size: "small" }),
            }),
            n,
        ],
    });
}
let eM = (e) => {
    let { stickersListRef: t, channel: n } = e,
        r = i.useRef(null),
        [a, o] = i.useState(!0),
        u = W.bM.useStore((e) => e.activeCategoryIndex),
        c = eS(
            (0, k.pD)(n),
            (0, d.bG)([$.default], () => $.default.getCurrentUser()),
            n,
            H("web.StickerPickerCategoryList"),
        ),
        {
            firstStandardStickerCategoryIndex: h,
            firstStandardStickerCategoryOffsetTop: m,
            guildCategoryCount: p,
            hasFirstPartyStickerPacks: g,
        } = i.useMemo(() => {
            let e = c.filter((e) => e.type === el.Z2.GUILD).length,
                t = e + +(c[0]?.type === el.Z2.RECENT) + +(c[0]?.type === el.Z2.FAVORITE),
                n = t * (ev + eN) - eN + ew;
            return {
                firstStandardStickerCategoryIndex: t + 1,
                firstStandardStickerCategoryOffsetTop: n,
                guildCategoryCount: e,
                hasFirstPartyStickerPacks: null != c.find((e) => e.type === el.Z2.PACK),
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
                u = (0, D.p)(),
                c = (0, F.RQ)((e) => "" !== e.searchQuery),
                d = i.useCallback(
                    (e, r, a) => {
                        let o,
                            d = n[0]?.type === el.Z2.FAVORITE,
                            h = +!!d,
                            m = n[h]?.type === el.Z2.RECENT,
                            f = n.length;
                        if (0 === r && d) {
                            let e = !c && 0 === t;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": f,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(eO, {
                                        ariaLabel: eC.intl.string(eC.t.y3LQCG),
                                        className: s()(eb._0, eb.dC, { [eb.k1]: e, [eb.ls]: !m }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(es.StarIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eb.AB,
                                            height: eT,
                                            width: eT,
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
                                    children: (0, l.jsx)(eO, {
                                        ariaLabel: eC.intl.string(eC.t.RxAmVC),
                                        className: s()(eb._0, eb.dC, eb.ls, { [eb.k1]: e }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(ea.ClockIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eb.AB,
                                            height: eT,
                                            width: eT,
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
                            S = null != E && x.type === el.Z2.GUILD && E.type !== el.Z2.GUILD,
                            y = x.type === el.Z2.PACK,
                            A = "",
                            C = null;
                        if (x.type === el.Z2.GUILD || x.type === el.Z2.EMPTY_GUILD_UPSELL) {
                            let e = ef.A.getGuild(x.id);
                            null != e &&
                                ((o = e.id),
                                (A = e.name),
                                (C = (0, l.jsx)(ed.A, { guild: e, isSelected: p, isLocked: !0 === x.isNitroLocked })));
                        } else if (y) {
                            let e = R.A.getStickerPack(x.id);
                            null != e &&
                                ((A = e.name),
                                (C = (0, l.jsx)(eg.A, {
                                    disableAnimation: !p || c,
                                    size: ev,
                                    sticker: (0, ep.Id)(e),
                                })));
                        }
                        return (0, l.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, l.jsx)(eo.m, {
                                        position: "right",
                                        text: A,
                                        children: (0, l.jsx)("div", {
                                            role: "listitem",
                                            "aria-setsize": f,
                                            "aria-posinset": r,
                                            children: (0, l.jsx)(eO, {
                                                ariaLabel: A,
                                                className: s()(eb._0, { [eb.ND]: y, [eb.Ms]: g && y }),
                                                isSelected: g,
                                                onClick: () => {
                                                    (x.type === el.Z2.PACK &&
                                                        Q.default.track(ey.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: u?.location,
                                                            tab: eA.kx.STICKER,
                                                            sticker_pack_id: x.id,
                                                            guild_id: o,
                                                        }),
                                                        a());
                                                },
                                                children: C,
                                            }),
                                        }),
                                    }),
                                    S ? (0, l.jsx)("hr", { className: eb.ny }, "separator") : null,
                                ],
                            },
                            x.id,
                        );
                    },
                    [t, u, c, n],
                ),
                h = i.useCallback((e, t) => (t ? eR : 0), []);
            return {
                getScrollOffsetForIndex: h,
                renderCategoryListItem: d,
                rowHeight: i.useCallback(
                    (e, t) => {
                        let l = n[t],
                            i = n[t + 1];
                        return ev + (null != i && l.type === el.Z2.GUILD && i.type !== el.Z2.GUILD ? ew : eN);
                    },
                    [n],
                ),
                onScroll: i.useCallback(
                    (e) => {
                        let t = r.current?.getListDimensions();
                        null == t || o(e + t.height - ej < a);
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
    return (0, l.jsx)(eh.A, {
        className: eb.jv,
        categoryListRef: r,
        expressionsListRef: t,
        store: W.bM,
        listPadding: ek,
        onScroll: S,
        renderCategoryListItem: x,
        rowCount: c.length,
        categories: c,
        categoryHeight: E,
        children: (e) =>
            g &&
            a &&
            (0, l.jsx)(f.D, {
                className: s()(eb.Fe, { [eb.Q6]: !a }),
                onClick: () => y(e),
                children: (0, l.jsx)(eu.t, { size: "md", color: "currentColor" }),
            }),
    });
};
var eL = n(297264),
    eP = n(834730),
    eD = n(10392),
    eU = n(82498),
    eV = n(724651),
    eW = n(811611),
    eF = n(821609),
    eB = n(403581);
function eK(e) {
    let { analyticsSection: t, buttonText: i } = e;
    return (0, l.jsx)(eF.$, {
        variant: "expressive",
        icon: eB.t,
        text: i ?? eC.intl.string(eC.t["8Sh5fg"]),
        onClick: () => {
            var e;
            return (
                (e = { section: t }),
                void (Q.default.track(ey.HAw.OPEN_MODAL, {
                    type: ey.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
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
var eG = n(823894),
    eH = n(202541),
    ez = n(768857);
function eq(e) {
    let { className: t, onClose: n } = e;
    (0, k.XQ)();
    let { analyticsLocations: r } = (0, V.Ay)(U.A.EMPTY_STATE),
        a = (0, d.yK)([R.A], () => eG.vX.map((e) => R.A.getStickerById(e)));
    i.useEffect(() => {
        (Q.default.track(ey.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eH.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: ey.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: r,
        }),
            (0, eD.sq)(ey.U7l.PREMIUM_UPSELL_VIEWED, r, () => (0, eU.uq)(eH.e.EMPTY_STICKER_PICKER_UPSELL)));
    }, [r]);
    let o = (0, z.V)(),
        u = (0, eV.O)(),
        c = null != o || null != u;
    return (0, l.jsxs)("div", {
        className: s()(ez.p$, t, { [ez.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eW.Ay, {
                      discountOffer: u,
                      trialOffer: o,
                      onClose: n,
                      type: eH.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscriptionTrial?.skuId ?? eH.pe.TIER_2,
                      children: eC.intl.string(eC.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eL.D, {
                              className: ez.wx,
                              variant: "heading-xl/semibold",
                              children: eC.intl.string(eC.t.HEm04J),
                          }),
                          (0, l.jsx)(eP.E, {
                              className: ez.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: eC.intl.string(eC.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: ez.l1,
                              children: a
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(eg.A, { sticker: e, className: ez.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eK, { analyticsSection: ey.JJy.EXPRESSION_PICKER }),
        ],
    });
}
n(30146);
var e$ = n(404778),
    eQ = n(537652),
    eZ = n(962125),
    eX = n(286509),
    eJ = n(414872),
    eY = n(158045),
    e0 = n(631576),
    e1 = n(369163),
    e2 = n(123292),
    e5 = n(631305),
    e6 = n(468689),
    e8 = n(931991),
    e3 = n(473145),
    e7 = n(625633),
    e4 = n(136123);
let e9 = function (e) {
    let { className: t, guildId: n, channel: r, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, D.p)(),
        { analyticsLocations: c } = (0, V.Ay)(),
        h = (0, d.bG)([ef.A], () => ef.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, e8.nr)(h),
        f = null != h && 0 === (0, e3.aG)(h.premiumTier) && !h.features.has(ey.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            f &&
            a &&
            ((0, y.zV)(ey.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
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
                  className: s()(e4.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(e1.v, { size: "md", color: "currentColor", className: e4.Kk }),
                      (0, l.jsx)(eP.E, {
                          color: "interactive-text-default",
                          className: e4.rf,
                          variant: "text-sm/normal",
                          children: eC.intl.format(eC.t.AXWla1, { count: (0, e3.aG)(ey.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(e2.Q, {
                          variant: "primary",
                          text: eC.intl.string(eC.t["Gb+BJD"]),
                          onClick: function () {
                              null != h &&
                                  (0, e5.A)({
                                      analyticsLocations: c,
                                      analyticsSourceLocation: u,
                                      guild: h,
                                      perks: (0, e7.q5)(),
                                  });
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: s()(e4.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(eu.t, {
                          size: "custom",
                          color: "currentColor",
                          className: e4.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, l.jsx)(eP.E, {
                          color: "interactive-text-default",
                          className: e4.rf,
                          variant: "text-sm/normal",
                          children: eC.intl.string(eC.t.S83wgh),
                      }),
                      (0, l.jsx)(e2.Q, {
                          variant: "primary",
                          text: eC.intl.string(eC.t.bwNjug),
                          onClick: function () {
                              ((0, F.v8)(), e6.A.open(n, ey.BEX.STICKERS, u));
                          },
                      }),
                  ],
              })
        : null;
};
var te = n(240864),
    tt = n(89366),
    tn = n(202639);
let tl = (0, a.throttle)(
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
            { areOnlyNitroLockedSectionsVisible: o } = (0, te.s)({
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
var ti = n(307301),
    tr = n(182922),
    ts = n(683522);
let ta = (0, Z.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    to = (0, Z.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    tu = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = W.bM.useStore((e) => e.inspectedExpressionPosition),
            r = i.useMemo(() => {
                let { rowIndex: e, columnIndex: l } = n,
                    i = t[e]?.[l];
                if (null == i) return null;
                switch (i.type) {
                    case el.op.CREATE_STICKER:
                        return { guild_id: i.guild_id, name: i.name };
                    case el.op.STICKER:
                        return i.sticker;
                    default:
                        return null;
                }
            }, [t, n]);
        if (null == r) return null;
        let { graphic: s, title: a } = (function (e) {
                let t = null,
                    n = null;
                if ((!(0, ep.FD)(e) && !(0, ep.Xw)(e)) || (0, ep.Xw)(e)) {
                    let i = ef.A.getGuild(e.guild_id);
                    null != i &&
                        ((t = eC.intl.format(eC.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(ed.A, { guild: i })));
                } else if ((0, ep.FD)(e)) {
                    let i = R.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = eC.intl.format(eC.t.cZOkbs, { source: i.name })),
                        (n = (0, l.jsx)(eg.A, { size: to, sticker: (0, ep.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(r),
            o =
                (0, ep.FD)(r) || (0, ep.Xw)(r)
                    ? (0, l.jsx)(eg.A, { isInteracting: !0, size: ta, sticker: r, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: ts.P,
                          children: (0, l.jsx)(ti.j, { size: "md", color: "currentColor", className: ts.K }),
                      });
        return (0, l.jsx)(tr.A, {
            graphicPrimary: o,
            graphicSecondary: s,
            titlePrimary: r.name,
            titleSecondary: (0, ep.FD)(r) || (0, ep.Xw)(r) ? a : null,
        });
    });
var tc = n(140735),
    td = n(194261),
    th = n(442433),
    tm = n(304072),
    tf = n(513902);
let tp = function (e) {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: tf.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(td.LockIcon, { size: "xxs", color: "currentColor", className: tf.I }),
    });
};
var tg = n(777371);
let tx = i.memo(function (e) {
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
            isSectionNitroLocked: _ = !1,
        } = e,
        { location: k } = (0, D.p)(),
        R = C + 2 * A,
        w = i.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${R}px)`,
                height: R,
                paddingRight: t ? void 0 : R,
            }),
            [t, c, R],
        ),
        O = i.useMemo(() => ({ width: C, height: C, padding: A }), [A, C]),
        [M, L] = (0, tm.A)(null, 300);
    return (0, l.jsx)("div", {
        className: tg.nM,
        style: w,
        ...u?.(E),
        children: y.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === el.op.STICKER && I && u,
                y = (0, a.throttle)(() => {
                    h?.current === !0 || p?.current === !0 || u || g?.(e);
                }, 250),
                { ref: A, tabIndex: R, onFocus: w, ...P } = o?.(e.columnIndex, E) ?? {};
            switch (e.type) {
                case el.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...P,
                            children: (0, l.jsxs)(f.D, {
                                "aria-label": e.name,
                                className: s()(tg.wP, S, { [tg.Kj]: u }),
                                innerRef: A,
                                tabIndex: R,
                                onFocus: w ?? y,
                                onMouseMove: y,
                                onClick: function () {
                                    e.type === el.op.CREATE_STICKER &&
                                        (Q.default.track(ey.HAw.OPEN_MODAL, {
                                            type: ey.JJy.CREATE_STICKER_MODAL,
                                            location: k,
                                        }),
                                        (0, m.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([
                                                n.e("860350"),
                                                n.e("142753"),
                                                n.e("207998"),
                                                n.e("699733"),
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
                                    !I && (0, l.jsx)("div", { className: tg.fw }),
                                    (0, l.jsx)("div", {
                                        className: tg.P0,
                                        children: (0, l.jsx)(ti.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tg.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(eP.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: eC.intl.string(eC.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case el.op.STICKER: {
                    let a = (T ? (0, ex.W$)(e.sticker, N, v) : ex.Ux.SENDABLE) !== ex.Ux.SENDABLE,
                        o = j && a && !_,
                        m = !j && a,
                        g = t && null != b && (0, ep.FD)(e.sticker) && !b.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...P, key: e.sticker.id },
                        (0, l.jsxs)(f.D, {
                            className: s()(tg.yI, S, { [tg.PV]: u, [tg.TV]: M === e.sticker.id }),
                            innerRef: A,
                            tabIndex: R,
                            onFocus: w ?? y,
                            onMouseMove: y,
                            onClick: function (t) {
                                if (h?.current === !0 || p?.current === !0) return;
                                let n = t.altKey;
                                (n && e.type === el.op.STICKER && !(0, ep.o1)(e.sticker.id) && L(e.sticker.id),
                                    x?.(e, n));
                            },
                            onContextMenu: function (e) {
                                (0, th.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("638221"),
                                        n.e("904774"),
                                        n.e("446132"),
                                    ]).then(n.bind(n, 233503));
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                            style: O,
                            "data-type": er.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, l.jsx)(tc.A, { children: (0, eg.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !I && (0, l.jsx)("div", { className: tg.fw }),
                                        (0, l.jsx)(eg.A, {
                                            className: s()(tg.SI, {
                                                [tg.ot]:
                                                    I && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [tg.Q$]: c,
                                                [tg.No]: m,
                                                [tg.UK]: o,
                                            }),
                                            disableAnimation: !u && !r,
                                            enlargeOnInteraction: I,
                                            isInteracting: u,
                                            maskAsset: u,
                                            sticker: e.sticker,
                                            size: C,
                                        }),
                                        g ? (0, l.jsx)(tp, { size: 20 }) : null,
                                        o
                                            ? (0, l.jsx)("div", {
                                                  className: tg.MC,
                                                  children: (0, l.jsx)(td.LockIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: tg.hz,
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
function tE(e) {
    let { descriptor: t, currentUser: n, channel: l, onSelect: i } = e;
    switch ((0, ex.W$)(t.sticker, n, l)) {
        case ex.Ux.SENDABLE:
            i(t);
            break;
        case ex.Ux.SENDABLE_WITH_PREMIUM:
            (Q.default.track(ey.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: ey.JJy.STICKER_PICKER_UPSELL,
                location_object: ey.ZSU.STICKER,
            }),
                et(!0));
        case ex.Ux.SENDABLE_WITH_BOOSTED_GUILD:
        case ex.Ux.NONSENDABLE:
    }
}
var tS = n(457231);
let ty = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tA = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    tC = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    tb = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tI = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tv = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tN = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tT = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tj = (0, Z.xI)(L.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    t_ = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tk = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tR = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tw = t_ + 2 + tR,
    tO = tk + 2 + tR,
    tM = [tC, tI, tv, tN],
    tL = [tb, tI, tv, tN],
    tP = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tD = "sticker-search-nitro",
    tU = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tV(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: tS.yB,
        children: tU.map((e) =>
            (0, l.jsx)(
                f.D,
                {
                    className: tS.x_,
                    onClick: () => t(e),
                    children: (0, l.jsx)(eP.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
function tW(e, t) {
    return null != t && 0 !== t.sendableWithPremium.length && e === +(t.sendable.length > 0);
}
function tF(e, t) {
    return null != t && 0 === e && t.sendable.length > 0 && t.sendableWithPremium.length > 0;
}
let tB = function (e) {
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
        [C, b] = W.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], M.x),
        { analyticsLocations: I } = (0, V.Ay)(U.A.STICKER_PICKER),
        v = (0, F.RQ)((e) => e.searchQuery),
        N = (0, d.bG)([R.A], () => R.A.getPremiumPacks()),
        T = (0, d.bG)([$.default], () => $.default.getCurrentUser()),
        j = eY.Ay.canUseCustomStickersEverywhere(T),
        [_, k] = i.useState(0),
        w = H("web.StickerPickerList"),
        O = i.useMemo(() => new Set(N.map((e) => e.id)), [N]),
        L = eS(g, T, E, w),
        {
            renderRow: P,
            renderSection: K,
            renderSectionFooter: G,
            sectionFooterHeight: z,
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
                    stickersCategories: f,
                    filteredStickers: p,
                    ownedStickerPacks: g,
                    channel: x,
                    currentUser: E,
                    activeSectionIndex: S,
                    upsellRestyleEnabled: y,
                } = e,
                A = (0, D.p)(),
                { handleStickerInspect: C, handleSelect: b } = (function (e) {
                    let { onSelectSticker: t, channel: n, currentUser: l } = e,
                        r = (0, D.p)(),
                        s = (0, F.RQ)((e) => e.searchQuery);
                    return {
                        handleStickerInspect: i.useCallback((e) => {
                            let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: l } = e;
                            (W.bM.setActiveCategoryIndex(l),
                                W.bM.setInspectedExpressionPosition(n, t, er.t.MOUSE_EVENT),
                                e.type === el.op.STICKER && W.bM.setSearchPlaceholder(e.sticker.name));
                        }, []),
                        handleSelect: i.useCallback(
                            (e, i) => {
                                if (e.type !== el.op.STICKER) return;
                                let { sticker: a } = e;
                                if (null == a) return;
                                let o = {
                                    ...r.location,
                                    object: "" === s ? ey.ZSU.STICKER_PICKER_VIEW_ALL : ey.ZSU.STICKER_SEARCH_VIEW_ALL,
                                };
                                (0, ex.W$)(a, l, n) !== ex.Ux.SENDABLE
                                    ? tE({ descriptor: e, currentUser: l, channel: n, onSelect: t })
                                    : i
                                      ? (0, ep.o1)(a.id)
                                          ? (0, e0.vr)(a.id)
                                          : ((0, en.Dt)({ sticker: a, location: { ...o, object: ey.ZSU.STICKER } }),
                                            (0, e0.uK)(a.id))
                                      : t(e);
                            },
                            [r.location, s, l, n, t],
                        ),
                    };
                })({ onSelectSticker: r, channel: x, currentUser: E }),
                [I, v] = i.useState(!1),
                N = i.useCallback((e) => {
                    q.tP.updateSetting(Array.from(e));
                }, []),
                T = i.useCallback(
                    (e) => {
                        let t = m[e],
                            i = t?.[0]?.gridSectionIndex,
                            r = null != i && ((y && tW(i, p)) || (null == p && f[i]?.isNitroLocked === !0));
                        return null != t
                            ? (0, l.jsx)(
                                  tx,
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
                                      stickerClassName: tS.yI,
                                      stickerDescriptors: t,
                                      stickerSize: n > ty ? t_ : tk,
                                      stickerPadding: 1,
                                      preferAnimation: n <= tA,
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
                _ = i.useCallback(
                    (e) => {
                        let t = f[e],
                            n = f[e + 1];
                        return t?.isNitroLocked !== !0 && n?.isNitroLocked === !0;
                    },
                    [f],
                ),
                k = i.useCallback(
                    (e, t) => {
                        let n = f[e],
                            i = y && tW(e, p),
                            r = i || (null == p && n?.isNitroLocked === !0),
                            a = i || (null == p && j(e));
                        return null == p || r
                            ? (0, l.jsx)(
                                  "div",
                                  { role: "rowgroup", className: s()({ [tS.cW]: r, [tS.fV]: a }), children: t },
                                  e,
                              )
                            : t;
                    },
                    [p, f, y, j],
                ),
                w = i.useCallback(
                    function (e) {
                        let { isStickerPack: n = !0 } =
                                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = new Set(t),
                            i = t.has(e);
                        (i ? l.delete(e) : l.add(e),
                            Q.default.track(ey.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: A?.location,
                                tab: eA.kx.STICKER,
                                collapsed: !i,
                                sticker_pack_id: n ? e : null,
                            }),
                            N(l));
                    },
                    [A, t, N],
                ),
                O = i.useCallback(
                    (e) => {
                        let n = f[e];
                        if (null != p) {
                            let { sendable: n, sendableWithPremium: i } = p;
                            if (0 === e && n.length > 0) return null;
                            if (y && tW(e, p)) {
                                let n = S === e;
                                return (0, l.jsx)(
                                    eX.A,
                                    {
                                        className: s()(tS.jH, tS.M0, { [tS.RA]: !n, [tS.sp]: n }),
                                        "aria-label": eC.intl.string(eC.t.pAF6xE),
                                        icon: (0, l.jsx)(eB.t, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(tD),
                                        onClick: () => w(tD, { isStickerPack: !1 }),
                                        children: eC.intl.string(eC.t.pAF6xE),
                                    },
                                    "stickers-available-with-nitro-header",
                                );
                            }
                            let r = n.length > 0 && i.length > 0;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    r ? (0, l.jsx)("div", { className: tS.yF, children: (0, l.jsx)(e$.c, {}) }) : null,
                                    (0, l.jsx)(
                                        eX.A,
                                        {
                                            className: tS.jH,
                                            "aria-label": eC.intl.string(eC.t.wbfJFh),
                                            children: eC.intl.string(eC.t["05Z/0l"]),
                                        },
                                        "stickers-you-might-like-header",
                                    ),
                                ],
                            });
                        }
                        let i = f[e]?.isNitroLocked === !0,
                            r = s()(tS.jH, { [tS.M0]: y, [tS.RA]: i && S !== e, [tS.sp]: i && S === e });
                        switch (n.type) {
                            case el.Z2.FAVORITE:
                                return (0, l.jsx)(
                                    eX.A,
                                    {
                                        className: r,
                                        "aria-label": eC.intl.formatToPlainString(eC.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(es.StarIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => w(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case el.Z2.RECENT:
                                return (0, l.jsx)(
                                    eX.A,
                                    {
                                        className: r,
                                        "aria-label": eC.intl.formatToPlainString(eC.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(ea.ClockIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => w(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case el.Z2.GUILD:
                            case el.Z2.EMPTY_GUILD_UPSELL: {
                                let e = ef.A.getGuild(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(
                                    eX.A,
                                    {
                                        className: r,
                                        "aria-label": eC.intl.formatToPlainString(eC.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(ed.A, { guild: e, height: 16, width: 16 }),
                                        isCollapsed: t.has(e.id),
                                        onClick: () => w(e.id),
                                        children: e.name,
                                    },
                                    `h${e.id}`,
                                );
                            }
                            case el.Z2.PACK: {
                                let e = R.A.getStickerPack(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(
                                    eX.A,
                                    {
                                        className: r,
                                        "aria-label": eC.intl.formatToPlainString(eC.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(eg.A, {
                                            disableAnimation: !0,
                                            size: 12,
                                            sticker: (0, ep.Id)(e),
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
                    [S, t, p, f, w, y],
                ),
                M = i.useCallback(
                    (e) => {
                        if (null != p) {
                            let { sendable: t, sendableWithPremium: n } = p;
                            return 0 === e && t.length > 0
                                ? 0
                                : y && tW(e, p)
                                  ? tj + 16
                                  : tj + (t.length > 0 && n.length > 0 ? tT : 0);
                        }
                        return tj + 16 * (f[e]?.isNitroLocked === !0);
                    },
                    [p, f, y],
                );
            return {
                renderRow: T,
                renderSection: k,
                renderSectionHeader: O,
                sectionHeaderHeight: M,
                renderSectionFooter: i.useCallback(
                    (e) => {
                        if (null != p)
                            return y
                                ? tW(e, p)
                                    ? (0, l.jsx)("div", { className: tS.pQ })
                                    : tF(e, p)
                                      ? (0, l.jsx)(eJ.Ay, { className: tS.$2 })
                                      : null
                                : null;
                        let n = f[e],
                            i = t.has(n.id),
                            r =
                                n.type !== el.Z2.EMPTY_GUILD_UPSELL || i
                                    ? null
                                    : (0, l.jsx)(
                                          e9,
                                          {
                                              className: tS.Ij,
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
                                ? (s = (0, l.jsx)(eJ.Ay, { className: tS.$2 }))
                                : j(e) && (s = (0, l.jsx)("div", { className: tS.pQ })),
                            null == r && null == s ? null : (0, l.jsxs)(l.Fragment, { children: [r, s] })
                        );
                    },
                    [f, t, p, x, I, y, _, j],
                ),
                sectionFooterHeight: i.useCallback(
                    (e) => {
                        if (null != p) return y ? (tW(e, p) ? 33 : tF(e, p) ? eJ.kg : 0) : 0;
                        let n = f[e],
                            l = t.has(n.id),
                            i = 0;
                        return (
                            n.type !== el.Z2.EMPTY_GUILD_UPSELL || l || (i += tP),
                            _(e) ? (i += eJ.kg) : j(e) && (i += 33),
                            i
                        );
                    },
                    [p, y, f, t, _, j],
                ),
            };
        })({
            collapsedStickersCategories: t,
            gridWidth: n,
            stickersCategories: L,
            stickersGrid: x,
            isScrolling: y,
            isUsingKeyboardNavigation: h,
            onSelectSticker: m,
            getStickerItemProps: a,
            getStickerRowProps: o,
            gutterWidth: c,
            inspectedStickerPosition: b,
            filteredStickers: r,
            ownedStickerPacks: O,
            channel: E,
            currentUser: T,
            activeSectionIndex: _,
            upsellRestyleEnabled: w,
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
                { location: d } = (0, D.p)(),
                { analyticsLocations: h } = (0, V.Ay)(U.A.STICKER_PICKER),
                [m, f] = i.useState(!1),
                p = i.useMemo(() => a.map((e) => ({ isNitroLocked: !0 === e.isNitroLocked })), [a]),
                g = i.useCallback(
                    (e) => {
                        t &&
                            tl({
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
                        (Q.default.track(ey.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: eH.e.STICKER_PICKER_FLOATING_UPSELL,
                            location: d,
                            location_stack: h,
                        }),
                        (0, eD.sq)(ey.U7l.PREMIUM_UPSELL_VIEWED, h, () =>
                            (0, eU.uq)(eH.e.STICKER_PICKER_FLOATING_UPSELL),
                        ));
                }, [d, h, n, x]),
                !t || n || u.Fr)
            )
                return { onScroll: g, upsell: null };
            let E = eC.intl.format(eC.t.eontIh, {
                    nitroTierName: (0, eY.Dd)(eH.PremiumTypes.TIER_2),
                    onClick: () => {
                        (Q.default.track(ey.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_section: ey.JJy.STICKER_PICKER_FLOATING_UPSELL,
                        }),
                            et(!0));
                    },
                }),
                S = (0, eY.LE)((0, tt.qD)(), eH.pe.TIER_2) ?? eC.intl.string(eC.t.BmJkbd);
            return {
                onScroll: g,
                upsell: (0, l.jsx)(tn.d, {
                    showUpsell: x,
                    text: E,
                    button: S,
                    buttonAnalyticsObject: { section: ey.JJy.STICKER_PICKER_FLOATING_UPSELL },
                }),
            };
        })({
            upsellRestyleEnabled: w,
            canUseStickersEverywhere: j,
            listRef: A,
            searchQuery: v,
            categories: L,
            sectionHeaderHeight: X,
            sectionFooterHeight: z,
        });
    i.useEffect(() => {
        w && J(A.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [w, J, p]);
    let ee = (0, B.Fk)({
            activeCategoryIndex: C,
            isScrolling: y,
            listRef: A,
            onActiveCategoryIndexChange: W.bM.setActiveCategoryIndex,
            scrollOffset: 20,
            searchQuery: v,
        }),
        ei = i.useCallback((e) => {
            let t = A.current?.getSectionDescriptors();
            null == t ||
                k(
                    Math.max(
                        t.findLastIndex((t) => t.offset.top <= e),
                        0,
                    ),
                );
        }, []);
    i.useLayoutEffect(() => {
        w && ei(A.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [w, ei, r, p]);
    let eo = i.useCallback(
        (e) => {
            (ee(e), w && ei(e), J(e));
        },
        [ee, J, ei, w],
    );
    return (
        (0, B.FV)({ searchQuery: v, activeCategoryIndex: C, listRef: A }),
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
        (0, l.jsx)(V.f5, {
            value: I,
            children: (0, l.jsxs)("div", {
                className: tS.iE,
                children: [
                    (0, l.jsxs)("div", {
                        className: tS.AD,
                        children: [
                            null != r && 0 === r.sendable.length && 0 === r.sendableWithPremium.length
                                ? (0, l.jsx)(eQ.A, {
                                      message: eC.intl.string(eC.t["zc+LQd"]),
                                      className: tS.__invalid_noSearchResultsContainer,
                                      suggestions: (0, l.jsx)(tV, { onSuggestionClick: (e) => (0, F.Ri)(e, !0) }),
                                  })
                                : (0, l.jsx)(eZ.A, {
                                      role: "none presentation",
                                      listPadding: null != r ? tL : tM,
                                      onScroll: eo,
                                      renderRow: P,
                                      renderSection: K,
                                      renderSectionHeader: Z,
                                      renderSectionFooter: G,
                                      rowCount: f,
                                      rowCountBySection: p,
                                      rowHeight: n > ty ? tw : tO,
                                      sectionHeaderHeight: X,
                                      sectionFooterHeight: z,
                                      stickyHeaders: !0,
                                      ref: A,
                                  }),
                            Y,
                        ],
                    }),
                    (0, l.jsx)(tu, { stickersGrid: x }),
                ],
            }),
        })
    );
};
var tK = n(602034),
    tG = n(683438),
    tH = n(909802);
let tz = function (e) {
    let { onKeyDown: t, stickersListRef: n, channel: r, ref: s } = e,
        a = (0, k.ZO)(r),
        o = i.useRef(null),
        { searchQuery: u, isSearchSuggestion: c } = (0, F.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            M.x,
        ),
        d = W.bM.useStore((e) => e.searchPlaceholder),
        [h, m] = W.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], M.x),
        f = i.useCallback(
            (e) => {
                (W.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    W.bM.setInspectedExpressionPosition(0, 0),
                    W.bM.setSearchPlaceholder(null),
                    (0, F.Ri)(e),
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
            className: tH.i,
            children: (0, l.jsx)(tG.I, {
                autoFocus: a,
                disabled: !a,
                query: u,
                ref: o,
                placeholder: d ?? (a ? eC.intl.string(eC.t.dt5h1C) : eC.intl.string(eC.t["Pck/4U"])),
                onClear: p,
                onKeyDown: t,
                onChange: f,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": eG.lq,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, tK.Aq)(eG.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
};
n(321073);
var tq = n(802842),
    t$ = n(330422),
    tQ = n(609178);
function tZ(e) {
    let { onUpsellClicked: t } = e,
        { location: n } = (0, D.p)(),
        { analyticsLocations: i } = (0, V.Ay)(U.A.STICKER_PICKER),
        r = (0, F.RQ)((e) => e.searchQuery);
    return (0, l.jsx)(tQ.A, {
        title: eC.intl.string(eC.t.Eukdgl),
        description: eC.intl.string(eC.t.sMmd7s),
        analyticsLocationSection: ey.JJy.STICKER_PICKER_UPSELL,
        onClose: () => et(!1),
        onUpsellClicked: t,
        upsellViewedTrackingData: {
            type: eH.e.STICKER_PICKER_UPSELL,
            location: { ...n, object: ey.ZSU.STICKER },
            location_stack: i,
            sku_id: (0, eY.mH)(eY.Ay.getSkuIdForPremiumType(eH.PremiumTypes.TIER_2)),
            has_search_query: "" !== r,
        },
        graphic: (0, l.jsx)(t$.n, { alt: "", ariaHidden: !0 }),
        useNitroGradient: !0,
    });
}
var tX = n(789645),
    tJ = n(964486),
    tY = n(420136),
    t0 = n(939383);
function t1() {
    return et(!1);
}
function t2(e) {
    let { onLearnMore: t } = e,
        { analyticsLocations: n } = (0, V.Ay)(U.A.PREMIUM_UPSELL);
    (0, i.useEffect)(() => {
        (Q.default.track(ey.HAw.PREMIUM_UPSELL_VIEWED, {
            location_section: ey.JJy.STICKER_PICKER_UPSELL,
            type: eH.e.STICKER_PICKER_UPSELL,
            location_stack: n,
        }),
            (0, eD.sq)(ey.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, eU.uq)(eH.e.STICKER_PICKER_UPSELL)));
    }, [n]);
    let r = (0, i.useRef)(null);
    (0, tJ.Ay)(() => {
        r.current?.focus();
    });
    let a = (0, z.V)(),
        o = (0, eV.O)(),
        u = a?.subscriptionTrial?.skuId === eH.pe.TIER_0,
        c = null != a || null != o;
    return (0, l.jsxs)("div", {
        ref: r,
        tabIndex: -1,
        "aria-label": eC.intl.string(eC.t.jJG1pl),
        className: s()(tY.VL, { [tY.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eW.Ay, {
                      trialOffer: a,
                      discountOffer: o,
                      onClose: t1,
                      type: eH.e.STICKER_PICKER_UPSELL,
                      subscriptionTier: a?.subscriptionTrial?.skuId ?? eH.pe.TIER_2,
                      children: u
                          ? eC.intl.format(eC.t.MAGagw, {
                                planName: (0, eY.RH)(eH.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : eC.intl.format(eC.t.jt7JX6, { onClick: t }),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: tY.Tn, src: t0, alt: eC.intl.string(eC.t.do7AoM) }),
                          (0, l.jsx)(eP.E, {
                              className: tY.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: eC.intl.string(eC.t.jJG1pl),
                          }),
                          (0, l.jsx)(eP.E, {
                              className: tY.GR,
                              variant: "text-md/normal",
                              children: eC.intl.format(eC.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eK, { analyticsSection: ey.JJy.EXPRESSION_PICKER }),
            (0, l.jsx)(f.D, {
                className: tY.kz,
                onClick: t1,
                "aria-label": eC.intl.string(eC.t.cpT0Cq),
                children: (0, l.jsx)(tX.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var t5 = n(970099);
let t6 = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    t8 = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    t3 = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    t7 = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    t4 = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    t9 = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    ne = (0, Z.xI)(L.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    nt = t9 + 2,
    nn = ne + 2,
    nl = O()(en.Qz, 200),
    ni = O()(en.HA, 200);
function nr(e) {
    let { containerWidth: t, channel: r, onSelectSticker: s, closePopout: a, ref: o } = e,
        u = H("web.StickerPicker"),
        { location: c } = (0, D.p)(),
        { analyticsLocations: h } = (0, V.Ay)(U.A.STICKER_PICKER),
        f = (0, z.V)()?.subscriptionTrial != null,
        p = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        E = ee((e) => e.showPremiumUpsell),
        [S, y] = (0, F.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], M.x),
        A = i.useRef("");
    i.useImperativeHandle(o, () => ({ onPickerOpen: ep }));
    let C = (0, k.pD)(r),
        b = (0, d.bG)([$.default], () => $.default.getCurrentUser()),
        I = eS(C, b, r, u),
        v = 0 === I.filter((e) => e.type !== el.Z2.EMPTY_GUILD_UPSELL).length,
        N = (0, B.oV)({
            gridWrapperRef: p,
            containerWidth: t,
            showingEmptyState: v,
            listPaddingLeft: t8,
            listScrollbarWidth: 8,
        }),
        T = q.tP.useSetting(),
        j = i.useMemo(() => new Set(T), [T]),
        _ = i.useMemo(
            () =>
                (function (e, t, n) {
                    if ("" === e) return null;
                    let l = [],
                        i = [];
                    return (
                        tq.Ay.queryStickers([e], !0)
                            .map((e) => {
                                let { sticker: t } = e;
                                return t;
                            })
                            .forEach((e) => {
                                let r = (0, ex.W$)(e, t, n);
                                r === ex.Ux.SENDABLE ? l.push(e) : r === ex.Ux.SENDABLE_WITH_PREMIUM && i.push(e);
                            }),
                        { sendable: l, sendableWithPremium: i }
                    );
                })(S, b, r),
            [S, b, r],
        ),
        w = (0, k.Gc)(),
        O = (0, k.UT)(),
        L = (0, d.cf)([R.A], () => R.A.getAllGuildStickers()),
        { sendable: P = [], sendableWithPremium: G = [] } = _ ?? {},
        Z = P.length + G.length,
        X = i.useCallback(
            (e) => {
                ("" === S ? (0, en.ry)(e) : (0, en.nQ)(e, S, Z), s(e.sticker, el.D6.STICKER_PICKER));
            },
            [s, S, Z],
        ),
        J = null != N && N > t6,
        {
            rowCount: Y,
            rowCountBySection: es,
            stickersGrid: ea,
            gutterWidth: eo,
            columnCounts: eu,
        } = (0, k._c)({
            filteredStickers: _,
            stickersCategories: I,
            collapsedStickersCategories: j,
            collapsePremiumSearchSection: u && j.has(tD),
            listWidth: N,
            listPaddingRight: t3,
            stickerNodeMargin: J ? t7 : t4,
            stickerNodeWidth: J ? nt : nn,
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
                u = (0, D.p)(),
                c = i.useCallback(
                    (e) => {
                        o(e, u);
                    },
                    [o, u],
                ),
                d = i.useCallback(
                    (e, t) => {
                        a(e, t, er.t.GRID_NAVIGATOR_EVENT);
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
                } = (0, B.Ff)({
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
                                l !== er.t.GRID_NAVIGATOR_EVENT && h({ type: ei.n.SET_FOCUSED_POSITION, x: t, y: n });
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
                        case el.op.CREATE_STICKER:
                            (Q.default.track(ey.HAw.OPEN_MODAL, { type: ey.JJy.CREATE_STICKER_MODAL, location: c }),
                                (0, m.openModalLazy)(async () => {
                                    let { default: t } = await Promise.all([
                                        n.e("860350"),
                                        n.e("142753"),
                                        n.e("207998"),
                                        n.e("699733"),
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
                        case el.op.STICKER:
                            if (null == e.sticker) break;
                            tE({ descriptor: e, currentUser: b, channel: r, onSelect: X });
                    }
                },
                [c, b, r, X],
            ),
            store: W.bM,
            setInspectedStickerPosition: W.bM.setInspectedExpressionPosition,
            gridNavigatorId: eG.lq,
        });
    function ep() {
        let e = r.getGuildId(),
            n = [];
        null !== e && (n = R.A.getStickersByGuildId(e) ?? []);
        let l = 0;
        (null != L &&
            [...L.values()].forEach((e) => {
                l += e.length;
            }),
            (0, en.p4)({
                containerWidth: t,
                favoriteStickers: w,
                frequentlyUsedStickers: O,
                guildStickers: n,
                stickersTotal: l,
            }));
    }
    (i.useEffect(
        () => () => {
            (W.bM.resetStoreState(), et(!1));
        },
        [],
    ),
        i.useEffect(() => {
            ("" === A.current && "" !== S && (0, en.Fg)(), (A.current = S));
        }, [S]),
        i.useEffect(() => {
            0 === Z ? nl(S) : ni(S, Z, y);
        }, [S, Z, y]),
        i.useLayoutEffect(() => {
            x.current?.focus();
        }, []));
    let eg = i.useCallback(() => {
        (a(),
            Q.default.track(ey.HAw.PREMIUM_PROMOTION_OPENED, { location_section: ey.JJy.STICKER_PICKER_UPSELL }),
            (0, K.e)());
    }, [a]);
    return (0, l.jsxs)(V.f5, {
        value: h,
        children: [
            !(f && v) &&
                (0, l.jsx)("div", {
                    className: t5.wx,
                    children: (0, l.jsx)(tz, { ref: x, onKeyDown: em, stickersListRef: g, channel: r }),
                }),
            v
                ? (0, l.jsx)(eq, { className: t5.p$, onClose: a })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              ref: p,
                              className: t5.AD,
                              id: eG.lq,
                              ...eh,
                              children:
                                  null != N
                                      ? (0, l.jsx)(tB, {
                                            ref: g,
                                            collapsedStickersCategories: j,
                                            filteredStickers: _,
                                            getStickerItemProps: ec,
                                            getStickerRowProps: ed,
                                            gridWidth: N,
                                            gutterWidth: eo,
                                            isUsingKeyboardNavigation: ef,
                                            onSelectSticker: X,
                                            rowCount: Y,
                                            rowCountBySection: es,
                                            stickersCategories: I,
                                            stickersGrid: ea,
                                            channel: r,
                                        })
                                      : null,
                          }),
                          (0, l.jsx)(eM, { stickersListRef: g, channel: r }),
                      ],
                  }),
            E && (u ? (0, l.jsx)(tZ, { onUpsellClicked: a }) : (0, l.jsx)(t2, { onLearnMore: eg })),
        ],
    });
}
let ns = function (e) {
    let { ref: t, ...n } = e;
    return (
        (0, k.XQ)(),
        (0, l.jsx)("div", {
            className: t5.iE,
            id: eG.GX,
            "aria-labelledby": eG.LD,
            role: "tabpanel",
            children: n.isLoading ? (0, l.jsx)(P.y, { className: t5.Mz }) : (0, l.jsx)(nr, { ...n, ref: t }),
        })
    );
};
var na = n(964404),
    no = n(712687),
    nu = n(625494),
    nc = n(49999),
    nd = n(732139),
    nh = n(307731),
    nm = n(818625);
let nf = 498 + nd.as.MEDIUM,
    np = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: r = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(f.D, {
            role: "tab",
            autoFocus: r,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                (y.Ay.trackWithMetadata(ey.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, F.U)(i));
            },
            "aria-current": t ? "page" : void 0,
            className: s()(n, nm.oi, nm.pc, { [nm.Mv]: t }),
        });
    }),
    ng = i.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: r,
                onSelectEmoji: a,
                onSelectSticker: f,
                onSelectSound: w,
                channel: O,
                type: M,
                position: L,
                align: P,
                positionLayerClassName: D,
                closeOnModalOuterClick: U = !1,
                parentModalKey: V,
            } = e,
            W = i.useRef(null),
            B = i.useRef(!1),
            K = i.useRef(null),
            G = i.useRef(null),
            { drawerWidth: H, handleDrawerResizeHandleMouseDown: z } = (function (e) {
                let { positionContainerRef: t, drawerRef: n, orientation: l } = e,
                    r = (0, d.bG)([na.Ay], () => na.Ay.expressionPickerWidth),
                    [s, a] = i.useState(window.innerWidth),
                    [u, c] = i.useState(r ?? eA.wp.MIN),
                    h = i.useMemo(() => {
                        switch (u) {
                            case eA.wp.MIN:
                                return 498;
                            case eA.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    m = i.useCallback(
                        (e) => {
                            let t = e >= s ? eA.wp.MAX : e <= 498 ? eA.wp.MIN : e;
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
                positionContainerRef: W,
                drawerRef: G,
                orientation: "left" === P ? S.R.HORIZONTAL_RIGHT : S.R.HORIZONTAL_LEFT,
            }),
            q = (0, F.RQ)((e) => e.activeView),
            $ = (0, k.ZO)(O),
            { renderWindow: Q, windowDispatch: Z } = i.useContext(T.Ay),
            X = (0, d.bG)([R.A], () => !R.A.hasLoadedStickerPacks),
            J = (0, j.t)({ location: "expression_picker" }),
            Y = (0, b.H)("expression_picker");
        i.useEffect(() => {
            Y && (0, I.Fp)();
        }, [Y]);
        let ee = (0, F.RQ)((e) => e.showEmojiPacks),
            et = Y && ee,
            en = (0, d.bG)([no.A], () => no.A.isOpen()),
            el = null != V,
            ei = (0, m.useIsModalAtTop)(V ?? ""),
            er = M.gifs?.allowSending && !u.Fr && null != r,
            es = M.stickers?.allowSending && null != f,
            ea = !M.expressionPicker?.onlyEmojis && (er || es),
            eo = ea && !et,
            eu = i.useCallback(
                (e) => {
                    if ((!el && (0, m.hasAnyModalOpen)()) || (el && !(ei && U)) || en || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + eA.VQ)) return;
                    for (; (0, c.vq)(t);) {
                        if (
                            t === G.current ||
                            "true" === t.getAttribute("data-menu-item") ||
                            "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                            "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                        )
                            return;
                        t = t.parentNode;
                    }
                    (0, F.v8)();
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && nu._.dispatchToLastSubscribed(ey.jej.TEXTAREA_FOCUS);
                },
                [U, ei, el, en],
            ),
            ec = i.useCallback(() => {
                (0, F.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                q === eA.kx.GIF && (0, F.v8)();
            }
            return (
                Q.addEventListener("mousedown", eu),
                Q.addEventListener("contextmenu", eu),
                Z.subscribe(ey.jej.POPOUT_CLOSE, ec),
                nu._.subscribe(ey.jej.CLOSE_GIF_PICKER, e),
                () => {
                    (Q.removeEventListener("mousedown", eu),
                        Q.removeEventListener("contextmenu", eu),
                        Z.unsubscribe(ey.jej.POPOUT_CLOSE, ec),
                        nu._.unsubscribe(ey.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [q, ec, eu, Q, Z]),
            (0, p.tj)(W));
        let [ed, eh] = (0, A.kn)(J ? [h.M.SOUNDMOJI_BADGE] : []),
            [em, ef] = i.useState(!1);
        (i.useEffect(() => {
            q === eA.kx.SOUNDBOARD && ef(!0);
        }, [q]),
            i.useEffect(
                () => () => {
                    em && eh(nc.i.TAKE_ACTION);
                },
                [em, eh],
            ),
            i.useEffect(() => {
                (0, F.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!el && (0, m.hasAnyModalOpen)()) || (el && !ei)) && (0, F.v8)();
            }, [ei, el]),
            i.useEffect(() => {
                null != G.current &&
                    !B.current &&
                    (q === eA.kx.EMOJI
                        ? K?.current?.onPickerOpen != null && (K?.current?.onPickerOpen(), (B.current = !0))
                        : q === eA.kx.STICKER
                          ? K?.current?.onPickerOpen == null || X || (K?.current?.onPickerOpen(), (B.current = !0))
                          : (y.Ay.trackWithMetadata(ey.HAw.EXPRESSION_PICKER_OPENED, {
                                width: G.current.offsetWidth,
                                tab: q,
                                badged: !1,
                            }),
                            (B.current = !0)));
            }));
        let ep = i.useCallback((e, t) => w?.(e, "soundboard_picker", t), [w]),
            eg = M.soundmoji?.allowSending === !0 && null != w,
            ex = "left" === P ? "right" : "left",
            eE = null != D ? D : "left" === P ? nm.sj : nm.Jg,
            eS = er
                ? (0, l.jsx)(np, {
                      id: nd.g9,
                      "aria-controls": nd.ni,
                      "aria-selected": q === eA.kx.GIF,
                      isActive: q === eA.kx.GIF,
                      viewType: eA.kx.GIF,
                      children: eC.intl.string(eC.t["6gUTsS"]),
                  })
                : null,
            eb = es
                ? (0, l.jsx)(np, {
                      id: eG.LD,
                      "aria-controls": eG.GX,
                      "aria-selected": q === eA.kx.STICKER,
                      isActive: q === eA.kx.STICKER,
                      autoFocus: !$,
                      viewType: eA.kx.STICKER,
                      children: (0, l.jsx)("div", { className: nm.dG, children: eC.intl.string(eC.t.nf1s3u) }),
                  })
                : null,
            eI = (0, l.jsx)(np, {
                id: nd.k1,
                "aria-controls": nd.Do,
                "aria-selected": q === eA.kx.EMOJI,
                isActive: q === eA.kx.EMOJI,
                viewType: eA.kx.EMOJI,
                children: eC.intl.string(eC.t.Xu3wE3),
            });
        return (0, l.jsx)(E.A, {
            section: ey.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(N.nE, {
                className: s()(nm.T8, eE),
                targetRef: t,
                position: L,
                align: P,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: s()(nm.V6, { [nm.D0]: !ea }),
                        ref: W,
                        role: "dialog",
                        "aria-label": eC.intl.string(eC.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: nm.jP,
                                  style: { width: null == H ? void 0 : H, [P]: 0 },
                                  ref: G,
                                  children: [
                                      (0, l.jsx)("div", { className: nm.Di, onMouseDown: z, style: { [ex]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: s()(nm.FG, { [nm.$D]: et }),
                                          children: [
                                              eo
                                                  ? (0, l.jsx)("nav", {
                                                        className: nm.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: nm.CT,
                                                            role: "tablist",
                                                            "aria-label": eC.intl.string(eC.t["2j4Vgd"]),
                                                            children: [
                                                                eS,
                                                                eb,
                                                                eI,
                                                                J &&
                                                                    eg &&
                                                                    (0, l.jsx)(np, {
                                                                        id: nd.N6,
                                                                        "aria-controls": nd.AA,
                                                                        "aria-selected": q === eA.kx.SOUNDBOARD,
                                                                        isActive: q === eA.kx.SOUNDBOARD,
                                                                        viewType: eA.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: nm.sd,
                                                                            children: [
                                                                                eC.intl.string(eC.t.EHlAMc),
                                                                                null != ed &&
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
                                              q === eA.kx.STICKER && es
                                                  ? (0, l.jsx)(ns, {
                                                        isLoading: X,
                                                        channel: O,
                                                        containerWidth: H,
                                                        onSelectSticker: f,
                                                        closePopout: ec,
                                                        ref: (e) => {
                                                            K.current = e;
                                                        },
                                                    })
                                                  : null,
                                              q === eA.kx.GIF && er
                                                  ? (0, l.jsx)(v.A, {
                                                        onSelectGIF: r,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              q === eA.kx.EMOJI || M.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(C.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: O,
                                                        containerWidth: H,
                                                        emojiSize: null != H && H < nf ? nd.as.MEDIUM : nd.as.LARGE,
                                                        pickerIntention:
                                                            M.expressionPicker?.emojiIntention ??
                                                            nh.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == O || null != O.guild_id,
                                                        closePopout: ec,
                                                        onSelectEmoji: a,
                                                        ref: (e) => {
                                                            K.current = e;
                                                        },
                                                        isViewingEmojiPacks: et,
                                                        onViewEmojiPacksChange: Y ? F.ke : void 0,
                                                    })
                                                  : null,
                                              q === eA.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: nm.z,
                                                        children: (0, l.jsx)(_.A, {
                                                            guildId: O.guild_id,
                                                            channel: O,
                                                            containerWidth: H,
                                                            onClose: ec,
                                                            onSelect: ep,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: nm.BG, children: e }),
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
