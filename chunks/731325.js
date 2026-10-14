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
    f = n(939249),
    p = n(315710),
    g = n(62010),
    x = n(817281),
    E = n(820284),
    S = n(761929),
    y = n(666860),
    C = n(131607),
    A = n(660484),
    b = n(490035),
    I = n(813703),
    v = n(750506),
    N = n(267102),
    T = n(926972),
    j = n(511558),
    _ = n(256449),
    k = n(750385),
    R = n(649852),
    O = n.n(R),
    L = n(462180),
    w = n(319060),
    M = n(289873),
    P = n(212245),
    D = n(793574),
    U = n(688810),
    V = n(850992),
    W = n(151271),
    F = n(887695),
    B = n(87719);
let K = (0, n(945810).mj)({
    name: "2026-09-web-sticker-picker-upsell-restyle",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
function G(e) {
    return K.useConfig({ location: e });
}
var H = n(732280),
    z = n(885386),
    q = n(287809),
    $ = n(174459),
    Q = n(240248),
    Z = n(196765),
    X = n(121894);
let J = Object.freeze({ showPremiumUpsell: !1 }),
    Y = (0, Z.v)((e) => J);
function ee(e) {
    (0, X.r)(() => Y.setState({ showPremiumUpsell: e }));
}
var et = n(891090),
    en = n(194004),
    el = n(788413),
    ei = n(60587),
    er = n(27232),
    es = n(406810),
    ea = n(866665),
    eo = n(797285),
    eu = n(713517),
    ec = n(724511),
    ed = n(88218),
    eh = n(941971),
    em = n(71393),
    ef = n(378058),
    ep = n(148355),
    eg = n(361670);
function ex(e, t, n) {
    return e.stickers.filter((e) => (0, eg.W$)(e, t, n) !== eg.Ux.SENDABLE_WITH_BOOSTED_GUILD);
}
function eE(e, t, n, l) {
    return i.useMemo(
        () =>
            l
                ? e.flatMap((e) => {
                      let l = (function (e, t, n) {
                          switch (e.type) {
                              case en.Z2.FAVORITE:
                              case en.Z2.RECENT: {
                                  let l = ex(e, t, n);
                                  return 0 === l.length ? null : { ...e, stickers: l, isNitroLocked: !1 };
                              }
                              case en.Z2.GUILD: {
                                  var l;
                                  let i = ex(e, t, n);
                                  if (
                                      i.length > 0 &&
                                      ((l = { ...e, stickers: i }),
                                      l.type === en.Z2.GUILD &&
                                          0 !== l.stickers.length &&
                                          l.stickers.every((e) => (0, eg.W$)(e, t, n) === eg.Ux.SENDABLE_WITH_PREMIUM))
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
var eS = n(652215),
    ey = n(698279),
    eC = n(660183),
    eA = n(161975);
let eb = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    eI = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    ev = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eN = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    eT = (0, Q.xI)(w.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    ej = (0, Q.xI)(w.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    e_ = [eb, eb, eb, eb],
    ek = (eI + ev) * 2 + eb,
    eR = eT + 2 * ej;
function eO(e) {
    let { ariaLabel: t, children: n, className: r, isSelected: s, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, eu.A)(o);
    return (0, l.jsxs)(f.D, {
        innerRef: o,
        "aria-label": t,
        className: r,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: eA.a$,
                children: (0, l.jsx)(eh.A, { hovered: u, selected: s, size: "small" }),
            }),
            n,
        ],
    });
}
let eL = (e) => {
    let { stickersListRef: t, channel: n } = e,
        r = i.useRef(null),
        [a, o] = i.useState(!0),
        u = V.bM.useStore((e) => e.activeCategoryIndex),
        c = eE(
            (0, _.pD)(n),
            (0, d.bG)([q.default], () => q.default.getCurrentUser()),
            n,
            G("web.StickerPickerCategoryList"),
        ),
        {
            firstStandardStickerCategoryIndex: h,
            firstStandardStickerCategoryOffsetTop: m,
            guildCategoryCount: p,
            hasFirstPartyStickerPacks: g,
        } = i.useMemo(() => {
            let e = c.filter((e) => e.type === en.Z2.GUILD).length,
                t = e + +(c[0]?.type === en.Z2.RECENT) + +(c[0]?.type === en.Z2.FAVORITE),
                n = t * (eI + ev) - ev + eR;
            return {
                firstStandardStickerCategoryIndex: t + 1,
                firstStandardStickerCategoryOffsetTop: n,
                guildCategoryCount: e,
                hasFirstPartyStickerPacks: null != c.find((e) => e.type === en.Z2.PACK),
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
                u = (0, P.p)(),
                c = (0, W.RQ)((e) => "" !== e.searchQuery),
                d = i.useCallback(
                    (e, r, a) => {
                        let o,
                            d = n[0]?.type === en.Z2.FAVORITE,
                            h = +!!d,
                            m = n[h]?.type === en.Z2.RECENT,
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
                                        className: s()(eA._0, eA.dC, { [eA.k1]: e, [eA.ls]: !m }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(er.StarIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eA.AB,
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
                                    "aria-setsize": f,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(eO, {
                                        ariaLabel: eC.intl.string(eC.t.RxAmVC),
                                        className: s()(eA._0, eA.dC, eA.ls, { [eA.k1]: e }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(es.ClockIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: eA.AB,
                                            height: eN,
                                            width: eN,
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
                            S = null != E && x.type === en.Z2.GUILD && E.type !== en.Z2.GUILD,
                            y = x.type === en.Z2.PACK,
                            C = "",
                            A = null;
                        if (x.type === en.Z2.GUILD || x.type === en.Z2.EMPTY_GUILD_UPSELL) {
                            let e = em.A.getGuild(x.id);
                            null != e &&
                                ((o = e.id),
                                (C = e.name),
                                (A = (0, l.jsx)(ec.A, { guild: e, isSelected: p, isLocked: !0 === x.isNitroLocked })));
                        } else if (y) {
                            let e = k.A.getStickerPack(x.id);
                            null != e &&
                                ((C = e.name),
                                (A = (0, l.jsx)(ep.A, {
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
                                        text: C,
                                        children: (0, l.jsx)("div", {
                                            role: "listitem",
                                            "aria-setsize": f,
                                            "aria-posinset": r,
                                            children: (0, l.jsx)(eO, {
                                                ariaLabel: C,
                                                className: s()(eA._0, { [eA.ND]: y, [eA.Ms]: g && y }),
                                                isSelected: g,
                                                onClick: () => {
                                                    (x.type === en.Z2.PACK &&
                                                        $.default.track(eS.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: u?.location,
                                                            tab: ey.kx.STICKER,
                                                            sticker_pack_id: x.id,
                                                            guild_id: o,
                                                        }),
                                                        a());
                                                },
                                                children: A,
                                            }),
                                        }),
                                    }),
                                    S ? (0, l.jsx)("hr", { className: eA.ny }, "separator") : null,
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
                        return eI + (null != i && l.type === en.Z2.GUILD && i.type !== en.Z2.GUILD ? eR : ev);
                    },
                    [n],
                ),
                onScroll: i.useCallback(
                    (e) => {
                        let t = r.current?.getListDimensions();
                        null == t || o(e + t.height - eT < a);
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
    return (0, l.jsx)(ed.A, {
        className: eA.jv,
        categoryListRef: r,
        expressionsListRef: t,
        store: V.bM,
        listPadding: e_,
        onScroll: S,
        renderCategoryListItem: x,
        rowCount: c.length,
        categories: c,
        categoryHeight: E,
        children: (e) =>
            g &&
            a &&
            (0, l.jsx)(f.D, {
                className: s()(eA.Fe, { [eA.Q6]: !a }),
                onClick: () => y(e),
                children: (0, l.jsx)(eo.t, { size: "md", color: "currentColor" }),
            }),
    });
};
var ew = n(297264),
    eM = n(834730),
    eP = n(10392),
    eD = n(82498),
    eU = n(724651),
    eV = n(811611),
    eW = n(821609),
    eF = n(403581);
function eB(e) {
    let { analyticsSection: t, buttonText: i } = e;
    return (0, l.jsx)(eW.$, {
        variant: "expressive",
        icon: eF.t,
        text: i ?? eC.intl.string(eC.t["8Sh5fg"]),
        onClick: () => {
            var e;
            return (
                (e = { section: t }),
                void ($.default.track(eS.HAw.OPEN_MODAL, {
                    type: eS.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
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
var eK = n(823894),
    eG = n(202541),
    eH = n(768857);
function ez(e) {
    let { className: t, onClose: n } = e;
    (0, _.XQ)();
    let { analyticsLocations: r } = (0, U.Ay)(D.A.EMPTY_STATE),
        a = (0, d.yK)([k.A], () => eK.vX.map((e) => k.A.getStickerById(e)));
    i.useEffect(() => {
        ($.default.track(eS.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eG.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: eS.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: r,
        }),
            (0, eP.sq)(eS.U7l.PREMIUM_UPSELL_VIEWED, r, () => (0, eD.uq)(eG.e.EMPTY_STICKER_PICKER_UPSELL)));
    }, [r]);
    let o = (0, H.V)(),
        u = (0, eU.O)(),
        c = null != o || null != u;
    return (0, l.jsxs)("div", {
        className: s()(eH.p$, t, { [eH.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eV.Ay, {
                      discountOffer: u,
                      trialOffer: o,
                      onClose: n,
                      type: eG.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscriptionTrial?.skuId ?? eG.pe.TIER_2,
                      children: eC.intl.string(eC.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(ew.D, {
                              className: eH.wx,
                              variant: "heading-xl/semibold",
                              children: eC.intl.string(eC.t.HEm04J),
                          }),
                          (0, l.jsx)(eM.E, {
                              className: eH.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: eC.intl.string(eC.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: eH.l1,
                              children: a
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(ep.A, { sticker: e, className: eH.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eB, { analyticsSection: eS.JJy.EXPRESSION_PICKER }),
        ],
    });
}
n(30146);
var eq = n(404778),
    e$ = n(537652),
    eQ = n(962125),
    eZ = n(286509),
    eX = n(414872),
    eJ = n(158045),
    eY = n(631576),
    e0 = n(369163),
    e1 = n(123292),
    e2 = n(631305),
    e5 = n(468689),
    e6 = n(931991),
    e8 = n(473145),
    e3 = n(625633),
    e7 = n(136123);
let e4 = function (e) {
    let { className: t, guildId: n, channel: r, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, P.p)(),
        { analyticsLocations: c } = (0, U.Ay)(),
        h = (0, d.bG)([em.A], () => em.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, e6.nr)(h),
        f = null != h && 0 === (0, e8.aG)(h.premiumTier) && !h.features.has(eS.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            f &&
            a &&
            ((0, y.zV)(eS.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
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
                  className: s()(e7.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(e0.v, { size: "md", color: "currentColor", className: e7.Kk }),
                      (0, l.jsx)(eM.E, {
                          color: "interactive-text-default",
                          className: e7.rf,
                          variant: "text-sm/normal",
                          children: eC.intl.format(eC.t.AXWla1, { count: (0, e8.aG)(eS.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(e1.Q, {
                          variant: "primary",
                          text: eC.intl.string(eC.t["Gb+BJD"]),
                          onClick: function () {
                              null != h &&
                                  (0, e2.A)({
                                      analyticsLocations: c,
                                      analyticsSourceLocation: u,
                                      guild: h,
                                      perks: (0, e3.q5)(),
                                  });
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: s()(e7.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(eo.t, {
                          size: "custom",
                          color: "currentColor",
                          className: e7.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, l.jsx)(eM.E, {
                          color: "interactive-text-default",
                          className: e7.rf,
                          variant: "text-sm/normal",
                          children: eC.intl.string(eC.t.S83wgh),
                      }),
                      (0, l.jsx)(e1.Q, {
                          variant: "primary",
                          text: eC.intl.string(eC.t.bwNjug),
                          onClick: function () {
                              ((0, W.v8)(), e5.A.open(n, eS.BEX.STICKERS, u));
                          },
                      }),
                  ],
              })
        : null;
};
var e9 = n(240864),
    te = n(89366),
    tt = n(202639);
let tn = (0, a.throttle)(
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
            { areOnlyNitroLockedSectionsVisible: o } = (0, e9.s)({
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
var tl = n(307301),
    ti = n(182922),
    tr = n(683522);
let ts = (0, Q.xI)(w.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    ta = (0, Q.xI)(w.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    to = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = V.bM.useStore((e) => e.inspectedExpressionPosition),
            r = i.useMemo(() => {
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
        if (null == r) return null;
        let { graphic: s, title: a } = (function (e) {
                let t = null,
                    n = null;
                if ((!(0, ef.FD)(e) && !(0, ef.Xw)(e)) || (0, ef.Xw)(e)) {
                    let i = em.A.getGuild(e.guild_id);
                    null != i &&
                        ((t = eC.intl.format(eC.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(ec.A, { guild: i })));
                } else if ((0, ef.FD)(e)) {
                    let i = k.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = eC.intl.format(eC.t.cZOkbs, { source: i.name })),
                        (n = (0, l.jsx)(ep.A, { size: ta, sticker: (0, ef.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(r),
            o =
                (0, ef.FD)(r) || (0, ef.Xw)(r)
                    ? (0, l.jsx)(ep.A, { isInteracting: !0, size: ts, sticker: r, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: tr.P,
                          children: (0, l.jsx)(tl.j, { size: "md", color: "currentColor", className: tr.K }),
                      });
        return (0, l.jsx)(ti.A, {
            graphicPrimary: o,
            graphicSecondary: s,
            titlePrimary: r.name,
            titleSecondary: (0, ef.FD)(r) || (0, ef.Xw)(r) ? a : null,
        });
    });
var tu = n(140735),
    tc = n(194261),
    td = n(442433),
    th = n(304072),
    tm = n(513902);
let tf = function (e) {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: tm.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(tc.LockIcon, { size: "xxs", color: "currentColor", className: tm.I }),
    });
};
var tp = n(777371);
let tg = i.memo(function (e) {
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
            channel: v,
            currentUser: N,
            checkSendability: T = !0,
            upsellRestyleEnabled: j = !1,
            isSectionNitroLocked: _ = !1,
        } = e,
        { location: k } = (0, P.p)(),
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
        [w, M] = (0, th.A)(null, 300);
    return (0, l.jsx)("div", {
        className: tp.nM,
        style: O,
        ...u?.(E),
        children: y.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === en.op.STICKER && I && u,
                y = (0, a.throttle)(() => {
                    h?.current === !0 || p?.current === !0 || u || g?.(e);
                }, 250),
                { ref: C, tabIndex: R, onFocus: O, ...P } = o?.(e.columnIndex, E) ?? {};
            switch (e.type) {
                case en.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...P,
                            children: (0, l.jsxs)(f.D, {
                                "aria-label": e.name,
                                className: s()(tp.wP, S, { [tp.Kj]: u }),
                                innerRef: C,
                                tabIndex: R,
                                onFocus: O ?? y,
                                onMouseMove: y,
                                onClick: function () {
                                    e.type === en.op.CREATE_STICKER &&
                                        ($.default.track(eS.HAw.OPEN_MODAL, {
                                            type: eS.JJy.CREATE_STICKER_MODAL,
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
                                    !I && (0, l.jsx)("div", { className: tp.fw }),
                                    (0, l.jsx)("div", {
                                        className: tp.P0,
                                        children: (0, l.jsx)(tl.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tp.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(eM.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: eC.intl.string(eC.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case en.op.STICKER: {
                    let a = (T ? (0, eg.W$)(e.sticker, N, v) : eg.Ux.SENDABLE) !== eg.Ux.SENDABLE,
                        o = j && a && !_,
                        m = !j && a,
                        g = t && null != b && (0, ef.FD)(e.sticker) && !b.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...P, key: e.sticker.id },
                        (0, l.jsxs)(f.D, {
                            className: s()(tp.yI, S, { [tp.PV]: u, [tp.TV]: w === e.sticker.id }),
                            innerRef: C,
                            tabIndex: R,
                            onFocus: O ?? y,
                            onMouseMove: y,
                            onClick: function (t) {
                                if (h?.current === !0 || p?.current === !0) return;
                                let n = t.altKey;
                                (n && e.type === en.op.STICKER && !(0, ef.o1)(e.sticker.id) && M(e.sticker.id),
                                    x?.(e, n));
                            },
                            onContextMenu: function (e) {
                                (0, td.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("638221"),
                                        n.e("904774"),
                                        n.e("446132"),
                                    ]).then(n.bind(n, 233503));
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                            style: L,
                            "data-type": ei.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, l.jsx)(tu.A, { children: (0, ep.h)(e.sticker) }),
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
                                        g ? (0, l.jsx)(tf, { size: 20 }) : null,
                                        o
                                            ? (0, l.jsx)("div", {
                                                  className: tp.MC,
                                                  children: (0, l.jsx)(tc.LockIcon, {
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
function tx(e) {
    let { descriptor: t, currentUser: n, channel: l, onSelect: i } = e;
    switch ((0, eg.W$)(t.sticker, n, l)) {
        case eg.Ux.SENDABLE:
            i(t);
            break;
        case eg.Ux.SENDABLE_WITH_PREMIUM:
            ($.default.track(eS.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: eS.JJy.STICKER_PICKER_UPSELL,
                location_object: eS.ZSU.STICKER,
            }),
                ee(!0));
        case eg.Ux.SENDABLE_WITH_BOOSTED_GUILD:
        case eg.Ux.NONSENDABLE:
    }
}
var tE = n(457231);
let tS = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    ty = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    tC = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    tA = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tb = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tI = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tv = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tN = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tT = (0, Q.xI)(w.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tj = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    t_ = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tk = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tR = tj + 2 + tk,
    tO = t_ + 2 + tk,
    tL = [tC, tb, tI, tv],
    tw = [tA, tb, tI, tv],
    tM = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tP = "sticker-search-nitro",
    tD = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tU(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: tE.yB,
        children: tD.map((e) =>
            (0, l.jsx)(
                f.D,
                {
                    className: tE.x_,
                    onClick: () => t(e),
                    children: (0, l.jsx)(eM.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
function tV(e, t) {
    return null != t && 0 !== t.sendableWithPremium.length && e === +(t.sendable.length > 0);
}
function tW(e, t) {
    return null != t && 0 === e && t.sendable.length > 0 && t.sendableWithPremium.length > 0;
}
let tF = function (e) {
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
        [A, b] = V.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], L.x),
        { analyticsLocations: I } = (0, U.Ay)(D.A.STICKER_PICKER),
        v = (0, W.RQ)((e) => e.searchQuery),
        N = (0, d.bG)([k.A], () => k.A.getPremiumPacks()),
        T = (0, d.bG)([q.default], () => q.default.getCurrentUser()),
        j = eJ.Ay.canUseCustomStickersEverywhere(T),
        [_, R] = i.useState(0),
        O = G("web.StickerPickerList"),
        w = i.useMemo(() => new Set(N.map((e) => e.id)), [N]),
        M = eE(g, T, E, O),
        {
            renderRow: B,
            renderSection: K,
            renderSectionFooter: H,
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
                    stickersCategories: f,
                    filteredStickers: p,
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
                        s = (0, W.RQ)((e) => e.searchQuery);
                    return {
                        handleStickerInspect: i.useCallback((e) => {
                            let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: l } = e;
                            (V.bM.setActiveCategoryIndex(l),
                                V.bM.setInspectedExpressionPosition(n, t, ei.t.MOUSE_EVENT),
                                e.type === en.op.STICKER && V.bM.setSearchPlaceholder(e.sticker.name));
                        }, []),
                        handleSelect: i.useCallback(
                            (e, i) => {
                                if (e.type !== en.op.STICKER) return;
                                let { sticker: a } = e;
                                if (null == a) return;
                                let o = {
                                    ...r.location,
                                    object: "" === s ? eS.ZSU.STICKER_PICKER_VIEW_ALL : eS.ZSU.STICKER_SEARCH_VIEW_ALL,
                                };
                                (0, eg.W$)(a, l, n) !== eg.Ux.SENDABLE
                                    ? tx({ descriptor: e, currentUser: l, channel: n, onSelect: t })
                                    : i
                                      ? (0, ef.o1)(a.id)
                                          ? (0, eY.vr)(a.id)
                                          : ((0, et.Dt)({ sticker: a, location: { ...o, object: eS.ZSU.STICKER } }),
                                            (0, eY.uK)(a.id))
                                      : t(e);
                            },
                            [r.location, s, l, n, t],
                        ),
                    };
                })({ onSelectSticker: r, channel: x, currentUser: E }),
                [I, v] = i.useState(!1),
                N = i.useCallback((e) => {
                    z.tP.updateSetting(Array.from(e));
                }, []),
                T = i.useCallback(
                    (e) => {
                        let t = m[e],
                            i = t?.[0]?.gridSectionIndex,
                            r = null != i && ((y && tV(i, p)) || (null == p && f[i]?.isNitroLocked === !0));
                        return null != t
                            ? (0, l.jsx)(
                                  tg,
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
                                      stickerClassName: tE.yI,
                                      stickerDescriptors: t,
                                      stickerSize: n > tS ? tj : t_,
                                      stickerPadding: 1,
                                      preferAnimation: n <= ty,
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
                R = i.useCallback(
                    (e, t) => {
                        let n = f[e],
                            i = y && tV(e, p),
                            r = i || (null == p && n?.isNitroLocked === !0),
                            a = i || (null == p && j(e));
                        return null == p || r
                            ? (0, l.jsx)(
                                  "div",
                                  { role: "rowgroup", className: s()({ [tE.cW]: r, [tE.fV]: a }), children: t },
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
                            $.default.track(eS.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: C?.location,
                                tab: ey.kx.STICKER,
                                collapsed: !i,
                                sticker_pack_id: n ? e : null,
                            }),
                            N(l));
                    },
                    [C, t, N],
                ),
                L = i.useCallback(
                    (e) => {
                        let n = f[e];
                        if (null != p) {
                            let { sendable: n, sendableWithPremium: i } = p;
                            if (0 === e && n.length > 0) return null;
                            if (y && tV(e, p)) {
                                let n = S === e;
                                return (0, l.jsx)(
                                    eZ.A,
                                    {
                                        className: s()(tE.jH, tE.M0, { [tE.RA]: !n, [tE.sp]: n }),
                                        "aria-label": eC.intl.string(eC.t.pAF6xE),
                                        icon: (0, l.jsx)(eF.t, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(tP),
                                        onClick: () => O(tP, { isStickerPack: !1 }),
                                        children: eC.intl.string(eC.t.pAF6xE),
                                    },
                                    "stickers-available-with-nitro-header",
                                );
                            }
                            let r = n.length > 0 && i.length > 0;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    r ? (0, l.jsx)("div", { className: tE.yF, children: (0, l.jsx)(eq.c, {}) }) : null,
                                    (0, l.jsx)(
                                        eZ.A,
                                        {
                                            className: tE.jH,
                                            "aria-label": eC.intl.string(eC.t.wbfJFh),
                                            children: eC.intl.string(eC.t["05Z/0l"]),
                                        },
                                        "stickers-you-might-like-header",
                                    ),
                                ],
                            });
                        }
                        let i = f[e]?.isNitroLocked === !0,
                            r = s()(tE.jH, { [tE.M0]: y, [tE.RA]: i && S !== e, [tE.sp]: i && S === e });
                        switch (n.type) {
                            case en.Z2.FAVORITE:
                                return (0, l.jsx)(
                                    eZ.A,
                                    {
                                        className: r,
                                        "aria-label": eC.intl.formatToPlainString(eC.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(er.StarIcon, { size: "xs", color: "currentColor" }),
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
                                        className: r,
                                        "aria-label": eC.intl.formatToPlainString(eC.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(es.ClockIcon, { size: "xs", color: "currentColor" }),
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
                                        className: r,
                                        "aria-label": eC.intl.formatToPlainString(eC.t["7lLCjZ"], {
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
                                let e = k.A.getStickerPack(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(
                                    eZ.A,
                                    {
                                        className: r,
                                        "aria-label": eC.intl.formatToPlainString(eC.t["7lLCjZ"], {
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
                    [S, t, p, f, O, y],
                ),
                w = i.useCallback(
                    (e) => {
                        if (null != p) {
                            let { sendable: t, sendableWithPremium: n } = p;
                            return 0 === e && t.length > 0
                                ? 0
                                : y && tV(e, p)
                                  ? tT + 16
                                  : tT + (t.length > 0 && n.length > 0 ? tN : 0);
                        }
                        return tT + 16 * (f[e]?.isNitroLocked === !0);
                    },
                    [p, f, y],
                );
            return {
                renderRow: T,
                renderSection: R,
                renderSectionHeader: L,
                sectionHeaderHeight: w,
                renderSectionFooter: i.useCallback(
                    (e) => {
                        if (null != p)
                            return y
                                ? tV(e, p)
                                    ? (0, l.jsx)("div", { className: tE.pQ })
                                    : tW(e, p)
                                      ? (0, l.jsx)(eX.Ay, { className: tE.$2 })
                                      : null
                                : null;
                        let n = f[e],
                            i = t.has(n.id),
                            r =
                                n.type !== en.Z2.EMPTY_GUILD_UPSELL || i
                                    ? null
                                    : (0, l.jsx)(
                                          e4,
                                          {
                                              className: tE.Ij,
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
                                ? (s = (0, l.jsx)(eX.Ay, { className: tE.$2 }))
                                : j(e) && (s = (0, l.jsx)("div", { className: tE.pQ })),
                            null == r && null == s ? null : (0, l.jsxs)(l.Fragment, { children: [r, s] })
                        );
                    },
                    [f, t, p, x, I, y, _, j],
                ),
                sectionFooterHeight: i.useCallback(
                    (e) => {
                        if (null != p) return y ? (tV(e, p) ? 33 : tW(e, p) ? eX.kg : 0) : 0;
                        let n = f[e],
                            l = t.has(n.id),
                            i = 0;
                        return (
                            n.type !== en.Z2.EMPTY_GUILD_UPSELL || l || (i += tM),
                            _(e) ? (i += eX.kg) : j(e) && (i += 33),
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
            ownedStickerPacks: w,
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
                { location: d } = (0, P.p)(),
                { analyticsLocations: h } = (0, U.Ay)(D.A.STICKER_PICKER),
                [m, f] = i.useState(!1),
                p = i.useMemo(() => a.map((e) => ({ isNitroLocked: !0 === e.isNitroLocked })), [a]),
                g = i.useCallback(
                    (e) => {
                        t &&
                            tn({
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
                        ($.default.track(eS.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: eG.e.STICKER_PICKER_FLOATING_UPSELL,
                            location: d,
                            location_stack: h,
                        }),
                        (0, eP.sq)(eS.U7l.PREMIUM_UPSELL_VIEWED, h, () =>
                            (0, eD.uq)(eG.e.STICKER_PICKER_FLOATING_UPSELL),
                        ));
                }, [d, h, n, x]),
                !t || n || u.Fr)
            )
                return { onScroll: g, upsell: null };
            let E = eC.intl.format(eC.t.eontIh, {
                    nitroTierName: (0, eJ.Dd)(eG.PremiumTypes.TIER_2),
                    onClick: () => {
                        ($.default.track(eS.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_section: eS.JJy.STICKER_PICKER_FLOATING_UPSELL,
                        }),
                            ee(!0));
                    },
                }),
                S = (0, eJ.LE)((0, te.qD)(), eG.pe.TIER_2) ?? eC.intl.string(eC.t.BmJkbd);
            return {
                onScroll: g,
                upsell: (0, l.jsx)(tt.d, {
                    showUpsell: x,
                    text: E,
                    button: S,
                    buttonAnalyticsObject: { section: eS.JJy.STICKER_PICKER_FLOATING_UPSELL },
                }),
            };
        })({
            upsellRestyleEnabled: O,
            canUseStickersEverywhere: j,
            listRef: C,
            searchQuery: v,
            categories: M,
            sectionHeaderHeight: X,
            sectionFooterHeight: Q,
        });
    i.useEffect(() => {
        O && J(C.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [O, J, p]);
    let el = (0, F.Fk)({
            activeCategoryIndex: A,
            isScrolling: y,
            listRef: C,
            onActiveCategoryIndexChange: V.bM.setActiveCategoryIndex,
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
    }, [O, ea, r, p]);
    let eo = i.useCallback(
        (e) => {
            (el(e), O && ea(e), J(e));
        },
        [el, J, ea, O],
    );
    return (
        (0, F.FV)({ searchQuery: v, activeCategoryIndex: A, listRef: C }),
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
        (0, l.jsx)(U.f5, {
            value: I,
            children: (0, l.jsxs)("div", {
                className: tE.iE,
                children: [
                    (0, l.jsxs)("div", {
                        className: tE.AD,
                        children: [
                            null != r && 0 === r.sendable.length && 0 === r.sendableWithPremium.length
                                ? (0, l.jsx)(e$.A, {
                                      message: eC.intl.string(eC.t["zc+LQd"]),
                                      className: tE.__invalid_noSearchResultsContainer,
                                      suggestions: (0, l.jsx)(tU, { onSuggestionClick: (e) => (0, W.Ri)(e, !0) }),
                                  })
                                : (0, l.jsx)(eQ.A, {
                                      role: "none presentation",
                                      listPadding: null != r ? tw : tL,
                                      onScroll: eo,
                                      renderRow: B,
                                      renderSection: K,
                                      renderSectionHeader: Z,
                                      renderSectionFooter: H,
                                      rowCount: f,
                                      rowCountBySection: p,
                                      rowHeight: n > tS ? tR : tO,
                                      sectionHeaderHeight: X,
                                      sectionFooterHeight: Q,
                                      stickyHeaders: !0,
                                      ref: C,
                                  }),
                            Y,
                        ],
                    }),
                    (0, l.jsx)(to, { stickersGrid: x }),
                ],
            }),
        })
    );
};
var tB = n(602034),
    tK = n(683438),
    tG = n(909802);
let tH = function (e) {
    let { onKeyDown: t, stickersListRef: n, channel: r, ref: s } = e,
        a = (0, _.ZO)(r),
        o = i.useRef(null),
        { searchQuery: u, isSearchSuggestion: c } = (0, W.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            L.x,
        ),
        d = V.bM.useStore((e) => e.searchPlaceholder),
        [h, m] = V.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], L.x),
        f = i.useCallback(
            (e) => {
                (V.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    V.bM.setInspectedExpressionPosition(0, 0),
                    V.bM.setSearchPlaceholder(null),
                    (0, W.Ri)(e),
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
            className: tG.i,
            children: (0, l.jsx)(tK.I, {
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
                    "aria-controls": eK.lq,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, tB.Aq)(eK.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
};
n(321073);
var tz = n(802842),
    tq = n(330422),
    t$ = n(609178);
function tQ(e) {
    let { onUpsellClicked: t } = e,
        { location: n } = (0, P.p)(),
        { analyticsLocations: i } = (0, U.Ay)(D.A.STICKER_PICKER),
        r = (0, W.RQ)((e) => e.searchQuery);
    return (0, l.jsx)(t$.A, {
        title: eC.intl.string(eC.t.Eukdgl),
        description: eC.intl.string(eC.t.sMmd7s),
        analyticsLocationSection: eS.JJy.STICKER_PICKER_UPSELL,
        onClose: () => ee(!1),
        onUpsellClicked: t,
        upsellViewedTrackingData: {
            type: eG.e.STICKER_PICKER_UPSELL,
            location: { ...n, object: eS.ZSU.STICKER },
            location_stack: i,
            sku_id: (0, eJ.mH)(eJ.Ay.getSkuIdForPremiumType(eG.PremiumTypes.TIER_2)),
            has_search_query: "" !== r,
        },
        graphic: (0, l.jsx)(tq.n, { alt: "", ariaHidden: !0 }),
        useNitroGradient: !0,
    });
}
var tZ = n(789645),
    tX = n(964486),
    tJ = n(420136),
    tY = n(939383);
function t0() {
    return ee(!1);
}
function t1(e) {
    let { onLearnMore: t } = e,
        { analyticsLocations: n } = (0, U.Ay)(D.A.PREMIUM_UPSELL);
    (0, i.useEffect)(() => {
        ($.default.track(eS.HAw.PREMIUM_UPSELL_VIEWED, {
            location_section: eS.JJy.STICKER_PICKER_UPSELL,
            type: eG.e.STICKER_PICKER_UPSELL,
            location_stack: n,
        }),
            (0, eP.sq)(eS.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, eD.uq)(eG.e.STICKER_PICKER_UPSELL)));
    }, [n]);
    let r = (0, i.useRef)(null);
    (0, tX.Ay)(() => {
        r.current?.focus();
    });
    let a = (0, H.V)(),
        o = (0, eU.O)(),
        u = a?.subscriptionTrial?.skuId === eG.pe.TIER_0,
        c = null != a || null != o;
    return (0, l.jsxs)("div", {
        ref: r,
        tabIndex: -1,
        "aria-label": eC.intl.string(eC.t.jJG1pl),
        className: s()(tJ.VL, { [tJ.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(eV.Ay, {
                      trialOffer: a,
                      discountOffer: o,
                      onClose: t0,
                      type: eG.e.STICKER_PICKER_UPSELL,
                      subscriptionTier: a?.subscriptionTrial?.skuId ?? eG.pe.TIER_2,
                      children: u
                          ? eC.intl.format(eC.t.MAGagw, {
                                planName: (0, eJ.RH)(eG.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : eC.intl.format(eC.t.jt7JX6, { onClick: t }),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: tJ.Tn, src: tY, alt: eC.intl.string(eC.t.do7AoM) }),
                          (0, l.jsx)(eM.E, {
                              className: tJ.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: eC.intl.string(eC.t.jJG1pl),
                          }),
                          (0, l.jsx)(eM.E, {
                              className: tJ.GR,
                              variant: "text-md/normal",
                              children: eC.intl.format(eC.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eB, { analyticsSection: eS.JJy.EXPRESSION_PICKER }),
            (0, l.jsx)(f.D, {
                className: tJ.kz,
                onClick: t0,
                "aria-label": eC.intl.string(eC.t.cpT0Cq),
                children: (0, l.jsx)(tZ.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var t2 = n(970099);
let t5 = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    t6 = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    t8 = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    t3 = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    t7 = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    t4 = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    t9 = (0, Q.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    ne = t4 + 2,
    nt = t9 + 2,
    nn = O()(et.Qz, 200),
    nl = O()(et.HA, 200);
function ni(e) {
    let { containerWidth: t, channel: r, onSelectSticker: s, closePopout: a, ref: o } = e,
        u = G("web.StickerPicker"),
        { location: c } = (0, P.p)(),
        { analyticsLocations: h } = (0, U.Ay)(D.A.STICKER_PICKER),
        f = (0, H.V)()?.subscriptionTrial != null,
        p = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        E = Y((e) => e.showPremiumUpsell),
        [S, y] = (0, W.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], L.x),
        C = i.useRef("");
    i.useImperativeHandle(o, () => ({ onPickerOpen: ep }));
    let A = (0, _.pD)(r),
        b = (0, d.bG)([q.default], () => q.default.getCurrentUser()),
        I = eE(A, b, r, u),
        v = 0 === I.filter((e) => e.type !== en.Z2.EMPTY_GUILD_UPSELL).length,
        N = (0, F.oV)({
            gridWrapperRef: p,
            containerWidth: t,
            showingEmptyState: v,
            listPaddingLeft: t6,
            listScrollbarWidth: 8,
        }),
        T = z.tP.useSetting(),
        j = i.useMemo(() => new Set(T), [T]),
        R = i.useMemo(
            () =>
                (function (e, t, n) {
                    if ("" === e) return null;
                    let l = [],
                        i = [];
                    return (
                        tz.Ay.queryStickers([e], !0)
                            .map((e) => {
                                let { sticker: t } = e;
                                return t;
                            })
                            .forEach((e) => {
                                let r = (0, eg.W$)(e, t, n);
                                r === eg.Ux.SENDABLE ? l.push(e) : r === eg.Ux.SENDABLE_WITH_PREMIUM && i.push(e);
                            }),
                        { sendable: l, sendableWithPremium: i }
                    );
                })(S, b, r),
            [S, b, r],
        ),
        O = (0, _.Gc)(),
        w = (0, _.UT)(),
        M = (0, d.cf)([k.A], () => k.A.getAllGuildStickers()),
        { sendable: K = [], sendableWithPremium: Q = [] } = R ?? {},
        Z = K.length + Q.length,
        X = i.useCallback(
            (e) => {
                ("" === S ? (0, et.ry)(e) : (0, et.nQ)(e, S, Z), s(e.sticker, en.D6.STICKER_PICKER));
            },
            [s, S, Z],
        ),
        J = null != N && N > t5,
        {
            rowCount: er,
            rowCountBySection: es,
            stickersGrid: ea,
            gutterWidth: eo,
            columnCounts: eu,
        } = (0, _._c)({
            filteredStickers: R,
            stickersCategories: I,
            collapsedStickersCategories: j,
            collapsePremiumSearchSection: u && j.has(tP),
            listWidth: N,
            listPaddingRight: t8,
            stickerNodeMargin: J ? t3 : t7,
            stickerNodeWidth: J ? ne : nt,
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
                u = (0, P.p)(),
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
                } = (0, F.Ff)({
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
                                l !== ei.t.GRID_NAVIGATOR_EVENT && h({ type: el.n.SET_FOCUSED_POSITION, x: t, y: n });
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
                        case en.op.CREATE_STICKER:
                            ($.default.track(eS.HAw.OPEN_MODAL, { type: eS.JJy.CREATE_STICKER_MODAL, location: c }),
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
                        case en.op.STICKER:
                            if (null == e.sticker) break;
                            tx({ descriptor: e, currentUser: b, channel: r, onSelect: X });
                    }
                },
                [c, b, r, X],
            ),
            store: V.bM,
            setInspectedStickerPosition: V.bM.setInspectedExpressionPosition,
            gridNavigatorId: eK.lq,
        });
    function ep() {
        let e = r.getGuildId(),
            n = [];
        null !== e && (n = k.A.getStickersByGuildId(e) ?? []);
        let l = 0;
        (null != M &&
            [...M.values()].forEach((e) => {
                l += e.length;
            }),
            (0, et.p4)({
                containerWidth: t,
                favoriteStickers: O,
                frequentlyUsedStickers: w,
                guildStickers: n,
                stickersTotal: l,
            }));
    }
    (i.useEffect(
        () => () => {
            (V.bM.resetStoreState(), ee(!1));
        },
        [],
    ),
        i.useEffect(() => {
            ("" === C.current && "" !== S && (0, et.Fg)(), (C.current = S));
        }, [S]),
        i.useEffect(() => {
            0 === Z ? nn(S) : nl(S, Z, y);
        }, [S, Z, y]),
        i.useLayoutEffect(() => {
            x.current?.focus();
        }, []));
    let ex = i.useCallback(() => {
        (a(),
            $.default.track(eS.HAw.PREMIUM_PROMOTION_OPENED, { location_section: eS.JJy.STICKER_PICKER_UPSELL }),
            (0, B.e)());
    }, [a]);
    return (0, l.jsxs)(U.f5, {
        value: h,
        children: [
            !(f && v) &&
                (0, l.jsx)("div", {
                    className: t2.wx,
                    children: (0, l.jsx)(tH, { ref: x, onKeyDown: em, stickersListRef: g, channel: r }),
                }),
            v
                ? (0, l.jsx)(ez, { className: t2.p$, onClose: a })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              ref: p,
                              className: t2.AD,
                              id: eK.lq,
                              ...eh,
                              children:
                                  null != N
                                      ? (0, l.jsx)(tF, {
                                            ref: g,
                                            collapsedStickersCategories: j,
                                            filteredStickers: R,
                                            getStickerItemProps: ec,
                                            getStickerRowProps: ed,
                                            gridWidth: N,
                                            gutterWidth: eo,
                                            isUsingKeyboardNavigation: ef,
                                            onSelectSticker: X,
                                            rowCount: er,
                                            rowCountBySection: es,
                                            stickersCategories: I,
                                            stickersGrid: ea,
                                            channel: r,
                                        })
                                      : null,
                          }),
                          (0, l.jsx)(eL, { stickersListRef: g, channel: r }),
                      ],
                  }),
            E && (u ? (0, l.jsx)(tQ, { onUpsellClicked: a }) : (0, l.jsx)(t1, { onLearnMore: ex })),
        ],
    });
}
let nr = function (e) {
    let { ref: t, ...n } = e;
    return (
        (0, _.XQ)(),
        (0, l.jsx)("div", {
            className: t2.iE,
            id: eK.GX,
            "aria-labelledby": eK.LD,
            role: "tabpanel",
            children: n.isLoading ? (0, l.jsx)(M.y, { className: t2.Mz }) : (0, l.jsx)(ni, { ...n, ref: t }),
        })
    );
};
var ns = n(964404),
    na = n(712687),
    no = n(625494),
    nu = n(49999),
    nc = n(732139),
    nd = n(307731),
    nh = n(818625);
let nm = 498 + nc.as.MEDIUM,
    nf = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: r = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(f.D, {
            role: "tab",
            autoFocus: r,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                (y.Ay.trackWithMetadata(eS.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, W.U)(i));
            },
            "aria-current": t ? "page" : void 0,
            className: s()(n, nh.oi, nh.pc, { [nh.Mv]: t }),
        });
    }),
    np = i.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: r,
                onSelectEmoji: a,
                onSelectSticker: f,
                onSelectSound: R,
                channel: O,
                type: L,
                position: w,
                align: M,
                positionLayerClassName: P,
                closeOnModalOuterClick: D = !1,
                parentModalKey: U,
            } = e,
            V = i.useRef(null),
            F = i.useRef(!1),
            B = i.useRef(null),
            K = i.useRef(null),
            { drawerWidth: G, handleDrawerResizeHandleMouseDown: H } = (function (e) {
                let { positionContainerRef: t, drawerRef: n, orientation: l } = e,
                    r = (0, d.bG)([ns.Ay], () => ns.Ay.expressionPickerWidth),
                    [s, a] = i.useState(window.innerWidth),
                    [u, c] = i.useState(r ?? ey.wp.MIN),
                    h = i.useMemo(() => {
                        switch (u) {
                            case ey.wp.MIN:
                                return 498;
                            case ey.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    m = i.useCallback(
                        (e) => {
                            let t = e >= s ? ey.wp.MAX : e <= 498 ? ey.wp.MIN : e;
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
            z = (0, W.RQ)((e) => e.activeView),
            q = (0, _.ZO)(O),
            { renderWindow: $, windowDispatch: Q } = i.useContext(N.Ay),
            Z = (0, d.bG)([k.A], () => !k.A.hasLoadedStickerPacks),
            X = (0, T.tj)({ location: "expression_picker" }),
            J = (0, b.H)("expression_picker"),
            [Y, ee] = i.useState(!1),
            et = (0, d.bG)([na.A], () => na.A.isOpen()),
            en = null != U,
            el = (0, m.useIsModalAtTop)(U ?? ""),
            ei = L.gifs?.allowSending && !u.Fr && null != r,
            er = L.stickers?.allowSending && null != f,
            es = !L.expressionPicker?.onlyEmojis && (ei || er),
            ea = es && !Y,
            eo = i.useCallback(
                (e) => {
                    if ((!en && (0, m.hasAnyModalOpen)()) || (en && !(el && D)) || et || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + ey.VQ)) return;
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
                    (0, W.v8)();
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && no._.dispatchToLastSubscribed(eS.jej.TEXTAREA_FOCUS);
                },
                [D, el, en, et],
            ),
            eu = i.useCallback(() => {
                (0, W.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                z === ey.kx.GIF && (0, W.v8)();
            }
            return (
                $.addEventListener("mousedown", eo),
                $.addEventListener("contextmenu", eo),
                Q.subscribe(eS.jej.POPOUT_CLOSE, eu),
                no._.subscribe(eS.jej.CLOSE_GIF_PICKER, e),
                () => {
                    ($.removeEventListener("mousedown", eo),
                        $.removeEventListener("contextmenu", eo),
                        Q.unsubscribe(eS.jej.POPOUT_CLOSE, eu),
                        no._.unsubscribe(eS.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [z, eu, eo, $, Q]),
            (0, p.tj)(V));
        let [ec, ed] = (0, C.kn)(X ? [h.M.SOUNDMOJI_BADGE] : []),
            [eh, em] = i.useState(!1);
        (i.useEffect(() => {
            z === ey.kx.SOUNDBOARD && em(!0);
        }, [z]),
            i.useEffect(
                () => () => {
                    eh && ed(nu.i.TAKE_ACTION);
                },
                [eh, ed],
            ),
            i.useEffect(() => {
                (0, W.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!en && (0, m.hasAnyModalOpen)()) || (en && !el)) && (0, W.v8)();
            }, [el, en]),
            i.useEffect(() => {
                null != K.current &&
                    !F.current &&
                    (z === ey.kx.EMOJI
                        ? B?.current?.onPickerOpen != null && (B?.current?.onPickerOpen(), (F.current = !0))
                        : z === ey.kx.STICKER
                          ? B?.current?.onPickerOpen == null || Z || (B?.current?.onPickerOpen(), (F.current = !0))
                          : (y.Ay.trackWithMetadata(eS.HAw.EXPRESSION_PICKER_OPENED, {
                                width: K.current.offsetWidth,
                                tab: z,
                                badged: !1,
                            }),
                            (F.current = !0)));
            }));
        let ef = i.useCallback((e, t) => R?.(e, "emoji_picker", t), [R]),
            ep = i.useCallback((e, t) => R?.(e, "soundboard_picker", t), [R]),
            eg = L.soundmoji?.allowSending === !0 && null != R,
            ex = "left" === M ? "right" : "left",
            eE = null != P ? P : "left" === M ? nh.sj : nh.Jg,
            eA = ei
                ? (0, l.jsx)(nf, {
                      id: nc.g9,
                      "aria-controls": nc.ni,
                      "aria-selected": z === ey.kx.GIF,
                      isActive: z === ey.kx.GIF,
                      viewType: ey.kx.GIF,
                      children: eC.intl.string(eC.t["6gUTsS"]),
                  })
                : null,
            eb = er
                ? (0, l.jsx)(nf, {
                      id: eK.LD,
                      "aria-controls": eK.GX,
                      "aria-selected": z === ey.kx.STICKER,
                      isActive: z === ey.kx.STICKER,
                      autoFocus: !q,
                      viewType: ey.kx.STICKER,
                      children: (0, l.jsx)("div", { className: nh.dG, children: eC.intl.string(eC.t.nf1s3u) }),
                  })
                : null,
            eI = (0, l.jsx)(nf, {
                id: nc.k1,
                "aria-controls": nc.Do,
                "aria-selected": z === ey.kx.EMOJI,
                isActive: z === ey.kx.EMOJI,
                viewType: ey.kx.EMOJI,
                children: eC.intl.string(eC.t.Xu3wE3),
            });
        return (0, l.jsx)(E.A, {
            section: eS.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(v.nE, {
                className: s()(nh.T8, eE),
                targetRef: t,
                position: w,
                align: M,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: s()(nh.V6, { [nh.D0]: !es }),
                        ref: V,
                        role: "dialog",
                        "aria-label": eC.intl.string(eC.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: nh.jP,
                                  style: { width: null == G ? void 0 : G, [M]: 0 },
                                  ref: K,
                                  children: [
                                      (0, l.jsx)("div", { className: nh.Di, onMouseDown: H, style: { [ex]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: s()(nh.FG, { [nh.$D]: Y }),
                                          children: [
                                              ea
                                                  ? (0, l.jsx)("nav", {
                                                        className: nh.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: nh.CT,
                                                            role: "tablist",
                                                            "aria-label": eC.intl.string(eC.t["2j4Vgd"]),
                                                            children: [
                                                                eA,
                                                                eb,
                                                                eI,
                                                                X &&
                                                                    eg &&
                                                                    (0, l.jsx)(nf, {
                                                                        id: nc.N6,
                                                                        "aria-controls": nc.AA,
                                                                        "aria-selected": z === ey.kx.SOUNDBOARD,
                                                                        isActive: z === ey.kx.SOUNDBOARD,
                                                                        viewType: ey.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: nh.sd,
                                                                            children: [
                                                                                eC.intl.string(eC.t.EHlAMc),
                                                                                null != ec &&
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
                                              z === ey.kx.STICKER && er
                                                  ? (0, l.jsx)(nr, {
                                                        isLoading: Z,
                                                        channel: O,
                                                        containerWidth: G,
                                                        onSelectSticker: f,
                                                        closePopout: eu,
                                                        ref: (e) => {
                                                            B.current = e;
                                                        },
                                                    })
                                                  : null,
                                              z === ey.kx.GIF && ei
                                                  ? (0, l.jsx)(I.A, {
                                                        onSelectGIF: r,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              z === ey.kx.EMOJI || L.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(A.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: O,
                                                        containerWidth: G,
                                                        emojiSize: null != G && G < nm ? nc.as.MEDIUM : nc.as.LARGE,
                                                        pickerIntention:
                                                            L.expressionPicker?.emojiIntention ??
                                                            nd.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == O || null != O.guild_id,
                                                        closePopout: eu,
                                                        onSelectEmoji: a,
                                                        onSelectSoundmoji: ef,
                                                        ref: (e) => {
                                                            B.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            L.soundmoji?.allowSending === !0,
                                                        isViewingEmojiPacks: Y,
                                                        onViewEmojiPacksChange: J ? ee : void 0,
                                                    })
                                                  : null,
                                              z === ey.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: nh.z,
                                                        children: (0, l.jsx)(j.A, {
                                                            guildId: O.guild_id,
                                                            channel: O,
                                                            containerWidth: G,
                                                            onClose: eu,
                                                            onSelect: ep,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: nh.BG, children: e }),
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
