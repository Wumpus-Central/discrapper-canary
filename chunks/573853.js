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
    g = n(508770),
    x = n(817281),
    E = n(820284),
    S = n(761929),
    y = n(666860),
    C = n(131607),
    A = n(879064),
    b = n(945810);
let I = (0, b.mj)({
    name: "2026-09-default-emojis",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var N = n(813703),
    v = n(750506),
    T = n(267102),
    j = n(926972),
    _ = n(511558),
    k = n(256449),
    R = n(750385),
    O = n(649852),
    L = n.n(O),
    w = n(462180),
    M = n(319060),
    P = n(289873),
    D = n(212245),
    U = n(793574),
    V = n(688810),
    W = n(850992),
    F = n(151271),
    B = n(887695),
    K = n(87719);
let G = (0, b.mj)({
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
    eC = n(698279),
    eA = n(660183),
    eb = n(161975);
let eI = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    eN = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    ev = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eT = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    ej = (0, Z.xI)(M.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    e_ = (0, Z.xI)(M.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ek = [eI, eI, eI, eI],
    eR = (eN + ev) * 2 + eI,
    eO = ej + 2 * e_;
function eL(e) {
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
let ew = (e) => {
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
                n = t * (eN + ev) - ev + eO;
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
                                    children: (0, l.jsx)(eL, {
                                        ariaLabel: eA.intl.string(eA.t.y3LQCG),
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
                                    children: (0, l.jsx)(eL, {
                                        ariaLabel: eA.intl.string(eA.t.RxAmVC),
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
                            C = "",
                            A = null;
                        if (x.type === el.Z2.GUILD || x.type === el.Z2.EMPTY_GUILD_UPSELL) {
                            let e = ef.A.getGuild(x.id);
                            null != e &&
                                ((o = e.id),
                                (C = e.name),
                                (A = (0, l.jsx)(ed.A, { guild: e, isSelected: p, isLocked: !0 === x.isNitroLocked })));
                        } else if (y) {
                            let e = R.A.getStickerPack(x.id);
                            null != e &&
                                ((C = e.name),
                                (A = (0, l.jsx)(eg.A, {
                                    disableAnimation: !p || c,
                                    size: eN,
                                    sticker: (0, ep.Id)(e),
                                })));
                        }
                        return (0, l.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, l.jsx)(eo.m, {
                                        position: "right",
                                        text: C,
                                        children: (0, l.jsx)("div", {
                                            role: "listitem",
                                            "aria-setsize": f,
                                            "aria-posinset": r,
                                            children: (0, l.jsx)(eL, {
                                                ariaLabel: C,
                                                className: s()(eb._0, { [eb.ND]: y, [eb.Ms]: g && y }),
                                                isSelected: g,
                                                onClick: () => {
                                                    (x.type === el.Z2.PACK &&
                                                        Q.default.track(ey.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: u?.location,
                                                            tab: eC.kx.STICKER,
                                                            sticker_pack_id: x.id,
                                                            guild_id: o,
                                                        }),
                                                        a());
                                                },
                                                children: A,
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
                        return eN + (null != i && l.type === el.Z2.GUILD && i.type !== el.Z2.GUILD ? eO : ev);
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
var eM = n(297264),
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
        text: i ?? eA.intl.string(eA.t["8Sh5fg"]),
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
                      children: eA.intl.string(eA.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eM.D, {
                              className: ez.wx,
                              variant: "heading-xl/semibold",
                              children: eA.intl.string(eA.t.HEm04J),
                          }),
                          (0, l.jsx)(eP.E, {
                              className: ez.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: eA.intl.string(eA.t.FnNud4),
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
                          children: eA.intl.format(eA.t.AXWla1, { count: (0, e3.aG)(ey.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(e2.Q, {
                          variant: "primary",
                          text: eA.intl.string(eA.t["Gb+BJD"]),
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
                          children: eA.intl.string(eA.t.S83wgh),
                      }),
                      (0, l.jsx)(e2.Q, {
                          variant: "primary",
                          text: eA.intl.string(eA.t.bwNjug),
                          onClick: function () {
                              ((0, F.v8)(), e6.default.open(n, ey.BEX.STICKERS, u));
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
let ta = (0, Z.xI)(M.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    to = (0, Z.xI)(M.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
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
                        ((t = eA.intl.format(eA.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(ed.A, { guild: i })));
                } else if ((0, ep.FD)(e)) {
                    let i = R.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = eA.intl.format(eA.t.cZOkbs, { source: i.name })),
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
            stickerPadding: C,
            stickerSize: A,
            ownedStickerPacks: b,
            enlargeOnInteraction: I = !1,
            channel: N,
            currentUser: v,
            checkSendability: T = !0,
            upsellRestyleEnabled: j = !1,
            isSectionNitroLocked: _ = !1,
        } = e,
        { location: k } = (0, D.p)(),
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
        [w, M] = (0, tm.A)(null, 300);
    return (0, l.jsx)("div", {
        className: tg.nM,
        style: O,
        ...u?.(E),
        children: y.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === el.op.STICKER && I && u,
                y = (0, a.throttle)(() => {
                    h?.current === !0 || p?.current === !0 || u || g?.(e);
                }, 250),
                { ref: C, tabIndex: R, onFocus: O, ...P } = o?.(e.columnIndex, E) ?? {};
            switch (e.type) {
                case el.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...P,
                            children: (0, l.jsxs)(f.D, {
                                "aria-label": e.name,
                                className: s()(tg.wP, S, { [tg.Kj]: u }),
                                innerRef: C,
                                tabIndex: R,
                                onFocus: O ?? y,
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
                                        children: eA.intl.string(eA.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case el.op.STICKER: {
                    let a = (T ? (0, ex.W$)(e.sticker, v, N) : ex.Ux.SENDABLE) !== ex.Ux.SENDABLE,
                        o = j && a && !_,
                        m = !j && a,
                        g = t && null != b && (0, ep.FD)(e.sticker) && !b.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...P, key: e.sticker.id },
                        (0, l.jsxs)(f.D, {
                            className: s()(tg.yI, S, { [tg.PV]: u, [tg.TV]: w === e.sticker.id }),
                            innerRef: C,
                            tabIndex: R,
                            onFocus: O ?? y,
                            onMouseMove: y,
                            onClick: function (t) {
                                if (h?.current === !0 || p?.current === !0) return;
                                let n = t.altKey;
                                (n && e.type === el.op.STICKER && !(0, ep.o1)(e.sticker.id) && M(e.sticker.id),
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
                            style: L,
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
                                            size: A,
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
let ty = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tC = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    tA = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    tb = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tI = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tN = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tv = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tT = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tj = (0, Z.xI)(M.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    t_ = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tk = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tR = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tO = t_ + 2 + tR,
    tL = tk + 2 + tR,
    tw = [tA, tI, tN, tv],
    tM = [tb, tI, tN, tv],
    tP = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
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
        C = i.useRef(null),
        [A, b] = W.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], w.x),
        { analyticsLocations: I } = (0, V.Ay)(U.A.STICKER_PICKER),
        N = (0, F.RQ)((e) => e.searchQuery),
        v = (0, d.bG)([R.A], () => R.A.getPremiumPacks()),
        T = (0, d.bG)([$.default], () => $.default.getCurrentUser()),
        j = eY.Ay.canUseCustomStickersEverywhere(T),
        [_, k] = i.useState(0),
        O = H("web.StickerPickerList"),
        L = i.useMemo(() => new Set(v.map((e) => e.id)), [v]),
        M = eS(g, T, E, O),
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
                C = (0, D.p)(),
                { handleStickerInspect: A, handleSelect: b } = (function (e) {
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
                [I, N] = i.useState(!1),
                v = i.useCallback((e) => {
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
                                      onInspect: A,
                                      onSelect: b,
                                      rowIndex: e,
                                      stickerClassName: tS.yI,
                                      stickerDescriptors: t,
                                      stickerSize: n > ty ? t_ : tk,
                                      stickerPadding: 1,
                                      preferAnimation: n <= tC,
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
                    [m, a, o, u, c, d, h, A, b, n, g, x, E, p, f, y],
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
                O = i.useCallback(
                    function (e) {
                        let { isStickerPack: n = !0 } =
                                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = new Set(t),
                            i = t.has(e);
                        (i ? l.delete(e) : l.add(e),
                            Q.default.track(ey.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: C?.location,
                                tab: eC.kx.STICKER,
                                collapsed: !i,
                                sticker_pack_id: n ? e : null,
                            }),
                            v(l));
                    },
                    [C, t, v],
                ),
                L = i.useCallback(
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
                                        "aria-label": eA.intl.string(eA.t.pAF6xE),
                                        icon: (0, l.jsx)(eB.t, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(tD),
                                        onClick: () => O(tD, { isStickerPack: !1 }),
                                        children: eA.intl.string(eA.t.pAF6xE),
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
                                            "aria-label": eA.intl.string(eA.t.wbfJFh),
                                            children: eA.intl.string(eA.t["05Z/0l"]),
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
                            case el.Z2.RECENT:
                                return (0, l.jsx)(
                                    eX.A,
                                    {
                                        className: r,
                                        "aria-label": eA.intl.formatToPlainString(eA.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(ea.ClockIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => O(n.id, { isStickerPack: !1 }),
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
                                        "aria-label": eA.intl.formatToPlainString(eA.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(ed.A, { guild: e, height: 16, width: 16 }),
                                        isCollapsed: t.has(e.id),
                                        onClick: () => O(e.id),
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
                                        "aria-label": eA.intl.formatToPlainString(eA.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(eg.A, {
                                            disableAnimation: !0,
                                            size: 12,
                                            sticker: (0, ep.Id)(e),
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
                    [S, t, p, f, O, y],
                ),
                w = i.useCallback(
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
                renderSectionHeader: L,
                sectionHeaderHeight: w,
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
                                              setTrackedUpsellViewed: N,
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
            ownedStickerPacks: L,
            channel: E,
            currentUser: T,
            activeSectionIndex: _,
            upsellRestyleEnabled: O,
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
            let E = eA.intl.format(eA.t.eontIh, {
                    nitroTierName: (0, eY.Dd)(eH.PremiumTypes.TIER_2),
                    onClick: () => {
                        (Q.default.track(ey.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_section: ey.JJy.STICKER_PICKER_FLOATING_UPSELL,
                        }),
                            et(!0));
                    },
                }),
                S = (0, eY.LE)((0, tt.qD)(), eH.pe.TIER_2) ?? eA.intl.string(eA.t.BmJkbd);
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
            upsellRestyleEnabled: O,
            canUseStickersEverywhere: j,
            listRef: C,
            searchQuery: N,
            categories: M,
            sectionHeaderHeight: X,
            sectionFooterHeight: z,
        });
    i.useEffect(() => {
        O && J(C.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [O, J, p]);
    let ee = (0, B.Fk)({
            activeCategoryIndex: A,
            isScrolling: y,
            listRef: C,
            onActiveCategoryIndexChange: W.bM.setActiveCategoryIndex,
            scrollOffset: 20,
            searchQuery: N,
        }),
        ei = i.useCallback((e) => {
            let t = C.current?.getSectionDescriptors();
            null == t ||
                k(
                    Math.max(
                        t.findLastIndex((t) => t.offset.top <= e),
                        0,
                    ),
                );
        }, []);
    i.useLayoutEffect(() => {
        O && ei(C.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [O, ei, r, p]);
    let eo = i.useCallback(
        (e) => {
            (ee(e), O && ei(e), J(e));
        },
        [ee, J, ei, O],
    );
    return (
        (0, B.FV)({ searchQuery: N, activeCategoryIndex: A, listRef: C }),
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
                                      message: eA.intl.string(eA.t["zc+LQd"]),
                                      className: tS.__invalid_noSearchResultsContainer,
                                      suggestions: (0, l.jsx)(tV, { onSuggestionClick: (e) => (0, F.Ri)(e, !0) }),
                                  })
                                : (0, l.jsx)(eZ.A, {
                                      role: "none presentation",
                                      listPadding: null != r ? tM : tw,
                                      onScroll: eo,
                                      renderRow: P,
                                      renderSection: K,
                                      renderSectionHeader: Z,
                                      renderSectionFooter: G,
                                      rowCount: f,
                                      rowCountBySection: p,
                                      rowHeight: n > ty ? tO : tL,
                                      sectionHeaderHeight: X,
                                      sectionFooterHeight: z,
                                      stickyHeaders: !0,
                                      ref: C,
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
            w.x,
        ),
        d = W.bM.useStore((e) => e.searchPlaceholder),
        [h, m] = W.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], w.x),
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
                placeholder: d ?? (a ? eA.intl.string(eA.t.dt5h1C) : eA.intl.string(eA.t["Pck/4U"])),
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
        title: eA.intl.string(eA.t.Eukdgl),
        description: eA.intl.string(eA.t.sMmd7s),
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
        "aria-label": eA.intl.string(eA.t.jJG1pl),
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
                          ? eA.intl.format(eA.t.MAGagw, {
                                planName: (0, eY.RH)(eH.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : eA.intl.format(eA.t.jt7JX6, { onClick: t }),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: tY.Tn, src: t0, alt: eA.intl.string(eA.t.do7AoM) }),
                          (0, l.jsx)(eP.E, {
                              className: tY.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: eA.intl.string(eA.t.jJG1pl),
                          }),
                          (0, l.jsx)(eP.E, {
                              className: tY.GR,
                              variant: "text-md/normal",
                              children: eA.intl.format(eA.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eK, { analyticsSection: ey.JJy.EXPRESSION_PICKER }),
            (0, l.jsx)(f.D, {
                className: tY.kz,
                onClick: t1,
                "aria-label": eA.intl.string(eA.t.cpT0Cq),
                children: (0, l.jsx)(tX.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var t5 = n(970099);
let t6 = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    t8 = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    t3 = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    t7 = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    t4 = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    t9 = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    ne = (0, Z.xI)(M.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    nt = t9 + 2,
    nn = ne + 2,
    nl = L()(en.Qz, 200),
    ni = L()(en.HA, 200);
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
        [S, y] = (0, F.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], w.x),
        C = i.useRef("");
    i.useImperativeHandle(o, () => ({ onPickerOpen: ep }));
    let A = (0, k.pD)(r),
        b = (0, d.bG)([$.default], () => $.default.getCurrentUser()),
        I = eS(A, b, r, u),
        N = 0 === I.filter((e) => e.type !== el.Z2.EMPTY_GUILD_UPSELL).length,
        v = (0, B.oV)({
            gridWrapperRef: p,
            containerWidth: t,
            showingEmptyState: N,
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
        O = (0, k.Gc)(),
        L = (0, k.UT)(),
        M = (0, d.cf)([R.A], () => R.A.getAllGuildStickers()),
        { sendable: P = [], sendableWithPremium: G = [] } = _ ?? {},
        Z = P.length + G.length,
        X = i.useCallback(
            (e) => {
                ("" === S ? (0, en.ry)(e) : (0, en.nQ)(e, S, Z), s(e.sticker, el.D6.STICKER_PICKER));
            },
            [s, S, Z],
        ),
        J = null != v && v > t6,
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
            listWidth: v,
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
        (null != M &&
            [...M.values()].forEach((e) => {
                l += e.length;
            }),
            (0, en.p4)({
                containerWidth: t,
                favoriteStickers: O,
                frequentlyUsedStickers: L,
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
            ("" === C.current && "" !== S && (0, en.Fg)(), (C.current = S));
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
            !(f && N) &&
                (0, l.jsx)("div", {
                    className: t5.wx,
                    children: (0, l.jsx)(tz, { ref: x, onKeyDown: em, stickersListRef: g, channel: r }),
                }),
            N
                ? (0, l.jsx)(eq, { className: t5.p$, onClose: a })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              ref: p,
                              className: t5.AD,
                              id: eG.lq,
                              ...eh,
                              children:
                                  null != v
                                      ? (0, l.jsx)(tB, {
                                            ref: g,
                                            collapsedStickersCategories: j,
                                            filteredStickers: _,
                                            getStickerItemProps: ec,
                                            getStickerRowProps: ed,
                                            gridWidth: v,
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
                          (0, l.jsx)(ew, { stickersListRef: g, channel: r }),
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
                onSelectSound: b,
                channel: O,
                type: L,
                position: w,
                align: M,
                positionLayerClassName: P,
                closeOnModalOuterClick: D = !1,
                parentModalKey: U,
            } = e,
            V = i.useRef(null),
            W = i.useRef(!1),
            B = i.useRef(null),
            K = i.useRef(null),
            { drawerWidth: G, handleDrawerResizeHandleMouseDown: H } = (function (e) {
                let { positionContainerRef: t, drawerRef: n, orientation: l } = e,
                    r = (0, d.bG)([na.Ay], () => na.Ay.expressionPickerWidth),
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
                positionContainerRef: V,
                drawerRef: K,
                orientation: "left" === M ? S.R.HORIZONTAL_RIGHT : S.R.HORIZONTAL_LEFT,
            }),
            z = (0, F.RQ)((e) => e.activeView),
            q = (0, k.ZO)(O),
            { renderWindow: $, windowDispatch: Q } = i.useContext(T.Ay),
            Z = (0, d.bG)([R.A], () => !R.A.hasLoadedStickerPacks),
            X = (0, j.tj)({ location: "expression_picker" }),
            J = I.useConfig({ location: "expression_picker" }).enabled,
            Y = (0, d.bG)([no.A], () => no.A.isOpen()),
            ee = null != U,
            et = (0, m.useIsModalAtTop)(U ?? ""),
            en = L.gifs?.allowSending && !u.Fr && null != r,
            el = L.stickers?.allowSending && null != f,
            ei = !L.expressionPicker?.onlyEmojis && (en || el),
            er = i.useCallback(
                (e) => {
                    if ((!ee && (0, m.hasAnyModalOpen)()) || (ee && !(et && D)) || Y || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + eC.VQ)) return;
                    for (; (0, c.vq)(t);) {
                        if (
                            t === K.current ||
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
                [D, et, ee, Y],
            ),
            es = i.useCallback(() => {
                (0, F.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                z === eC.kx.GIF && (0, F.v8)();
            }
            return (
                $.addEventListener("mousedown", er),
                $.addEventListener("contextmenu", er),
                Q.subscribe(ey.jej.POPOUT_CLOSE, es),
                nu._.subscribe(ey.jej.CLOSE_GIF_PICKER, e),
                () => {
                    ($.removeEventListener("mousedown", er),
                        $.removeEventListener("contextmenu", er),
                        Q.unsubscribe(ey.jej.POPOUT_CLOSE, es),
                        nu._.unsubscribe(ey.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [z, es, er, $, Q]),
            (0, p.tj)(V));
        let [ea, eo] = (0, C.kn)(X ? [h.M.SOUNDMOJI_BADGE] : [], void 0, !1),
            [eu, ec] = i.useState(!1);
        (i.useEffect(() => {
            z === eC.kx.SOUNDBOARD && ec(!0);
        }, [z]),
            i.useEffect(
                () => () => {
                    eu && eo(nc.i.TAKE_ACTION);
                },
                [eu, eo],
            ),
            i.useEffect(() => {
                (0, F.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!ee && (0, m.hasAnyModalOpen)()) || (ee && !et)) && (0, F.v8)();
            }, [et, ee]),
            i.useEffect(() => {
                null != K.current &&
                    !W.current &&
                    (z === eC.kx.EMOJI
                        ? B?.current?.onPickerOpen != null && (B?.current?.onPickerOpen(), (W.current = !0))
                        : z === eC.kx.STICKER
                          ? B?.current?.onPickerOpen == null || Z || (B?.current?.onPickerOpen(), (W.current = !0))
                          : (y.Ay.trackWithMetadata(ey.HAw.EXPRESSION_PICKER_OPENED, {
                                width: K.current.offsetWidth,
                                tab: z,
                                badged: !1,
                            }),
                            (W.current = !0)));
            }));
        let ed = i.useCallback((e, t) => b?.(e, "emoji_picker", t), [b]),
            eh = i.useCallback((e, t) => b?.(e, "soundboard_picker", t), [b]),
            em = L.soundmoji?.allowSending === !0 && null != b,
            ef = "left" === M ? "right" : "left",
            ep = null != P ? P : "left" === M ? nm.sj : nm.Jg,
            eg = en
                ? (0, l.jsx)(np, {
                      id: nd.g9,
                      "aria-controls": nd.ni,
                      "aria-selected": z === eC.kx.GIF,
                      isActive: z === eC.kx.GIF,
                      viewType: eC.kx.GIF,
                      children: eA.intl.string(eA.t["6gUTsS"]),
                  })
                : null,
            ex = el
                ? (0, l.jsx)(np, {
                      id: eG.LD,
                      "aria-controls": eG.GX,
                      "aria-selected": z === eC.kx.STICKER,
                      isActive: z === eC.kx.STICKER,
                      autoFocus: !q,
                      viewType: eC.kx.STICKER,
                      children: (0, l.jsx)("div", { className: nm.dG, children: eA.intl.string(eA.t.nf1s3u) }),
                  })
                : null,
            eE = (0, l.jsx)(np, {
                id: nd.k1,
                "aria-controls": nd.Do,
                "aria-selected": z === eC.kx.EMOJI,
                isActive: z === eC.kx.EMOJI,
                viewType: eC.kx.EMOJI,
                children: eA.intl.string(eA.t.Xu3wE3),
            });
        return (0, l.jsx)(E.A, {
            section: ey.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(v.nE, {
                className: s()(nm.T8, ep),
                targetRef: t,
                position: w,
                align: M,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: s()(nm.V6, { [nm.D0]: !ei }),
                        ref: V,
                        role: "dialog",
                        "aria-label": eA.intl.string(eA.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: nm.jP,
                                  style: { width: null == G ? void 0 : G, [M]: 0 },
                                  ref: K,
                                  children: [
                                      (0, l.jsx)("div", { className: nm.Di, onMouseDown: H, style: { [ef]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: nm.FG,
                                          children: [
                                              ei
                                                  ? (0, l.jsx)("nav", {
                                                        className: nm.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: nm.CT,
                                                            role: "tablist",
                                                            "aria-label": eA.intl.string(eA.t["2j4Vgd"]),
                                                            children: [
                                                                eg,
                                                                ex,
                                                                eE,
                                                                X &&
                                                                    em &&
                                                                    (0, l.jsx)(np, {
                                                                        id: nd.N6,
                                                                        "aria-controls": nd.AA,
                                                                        "aria-selected": z === eC.kx.SOUNDBOARD,
                                                                        isActive: z === eC.kx.SOUNDBOARD,
                                                                        viewType: eC.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: nm.sd,
                                                                            children: [
                                                                                eA.intl.string(eA.t.EHlAMc),
                                                                                null != ea &&
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
                                              z === eC.kx.STICKER && el
                                                  ? (0, l.jsx)(ns, {
                                                        isLoading: Z,
                                                        channel: O,
                                                        containerWidth: G,
                                                        onSelectSticker: f,
                                                        closePopout: es,
                                                        ref: (e) => {
                                                            B.current = e;
                                                        },
                                                    })
                                                  : null,
                                              z === eC.kx.GIF && en
                                                  ? (0, l.jsx)(N.A, {
                                                        onSelectGIF: r,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              z === eC.kx.EMOJI || L.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(A.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: O,
                                                        containerWidth: G,
                                                        emojiSize: null != G && G < nf ? nd.as.MEDIUM : nd.as.LARGE,
                                                        pickerIntention:
                                                            L.expressionPicker?.emojiIntention ??
                                                            nh.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == O || null != O.guild_id,
                                                        closePopout: es,
                                                        onSelectEmoji: a,
                                                        onSelectSoundmoji: ed,
                                                        ref: (e) => {
                                                            B.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            L.soundmoji?.allowSending === !0,
                                                        canViewEmojiPacks: J,
                                                    })
                                                  : null,
                                              z === eC.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: nm.z,
                                                        children: (0, l.jsx)(_.A, {
                                                            guildId: O.guild_id,
                                                            channel: O,
                                                            containerWidth: G,
                                                            onClose: es,
                                                            onSelect: eh,
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
