n.d(t, { A: () => nA });
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
    A = n(989040),
    I = n(490035),
    b = n(636537),
    N = n(73153),
    v = n(626584),
    T = n(38405),
    j = n(182159),
    _ = n(652215);
let k = new v.A("EmojiPackActionCreators");
async function R() {
    if ("NOT_FETCHED" === j.A.getFetchState()) {
        N.h.dispatch({ type: "EMOJI_PACKS_FETCH_START" });
        try {
            let e = (await b.Bo.get({ url: _.Rsh.EMOJI_PACKS, rejectWithError: !0 })).body;
            (k.log("GET /emoji-packs response", JSON.stringify(e, null, 2)),
                N.h.dispatch({ type: "EMOJI_PACKS_FETCH_SUCCESS", packs: e }));
        } catch (e) {
            (e instanceof b.oh && 404 === e.status
                ? k.log("GET /emoji-packs returned 404: emoji packs are not enabled for this user")
                : e instanceof b.oh && e.status >= 400 && e.status < 500
                  ? k.warn(`GET /emoji-packs failed with status ${e.status}`)
                  : T.A.captureException(e),
                N.h.dispatch({ type: "EMOJI_PACKS_FETCH_FAIL" }));
        }
    }
}
var O = n(813703),
    L = n(750506),
    w = n(267102),
    M = n(926972),
    P = n(476254),
    D = n(256449),
    U = n(750385),
    V = n(649852),
    W = n.n(V),
    F = n(462180),
    B = n(319060),
    K = n(289873),
    G = n(212245),
    H = n(793574),
    z = n(688810),
    q = n(850992),
    $ = n(151271),
    Q = n(887695),
    Z = n(87719);
let J = (0, n(945810).mj)({
    name: "2026-09-web-sticker-picker-upsell-restyle",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
function X(e) {
    return J.useConfig({ location: e });
}
var Y = n(732280),
    ee = n(885386),
    et = n(287809),
    en = n(174459),
    el = n(240248),
    ei = n(196765),
    er = n(121894);
let es = Object.freeze({ showPremiumUpsell: !1 }),
    ea = (0, ei.v)((e) => es);
function eo(e) {
    (0, er.r)(() => ea.setState({ showPremiumUpsell: e }));
}
var eu = n(891090),
    ec = n(194004),
    ed = n(788413),
    eh = n(60587),
    em = n(27232),
    ef = n(406810),
    ep = n(866665),
    eg = n(797285),
    ex = n(713517),
    eE = n(724511),
    eS = n(88218),
    ey = n(941971),
    eC = n(71393),
    eA = n(378058),
    eI = n(148355),
    eb = n(361670);
function eN(e, t, n) {
    return e.stickers.filter((e) => (0, eb.W$)(e, t, n) !== eb.Ux.SENDABLE_WITH_BOOSTED_GUILD);
}
function ev(e, t, n, l) {
    return i.useMemo(
        () =>
            l
                ? e.flatMap((e) => {
                      let l = (function (e, t, n) {
                          switch (e.type) {
                              case ec.Z2.FAVORITE:
                              case ec.Z2.RECENT: {
                                  let l = eN(e, t, n);
                                  return 0 === l.length ? null : { ...e, stickers: l, isNitroLocked: !1 };
                              }
                              case ec.Z2.GUILD: {
                                  var l;
                                  let i = eN(e, t, n);
                                  if (
                                      i.length > 0 &&
                                      ((l = { ...e, stickers: i }),
                                      l.type === ec.Z2.GUILD &&
                                          0 !== l.stickers.length &&
                                          l.stickers.every((e) => (0, eb.W$)(e, t, n) === eb.Ux.SENDABLE_WITH_PREMIUM))
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
var eT = n(698279),
    ej = n(105292),
    e_ = n(161975);
let ek = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    eR = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    eO = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eL = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    ew = (0, el.xI)(B.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eM = (0, el.xI)(B.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    eP = [ek, ek, ek, ek],
    eD = (eR + eO) * 2 + ek,
    eU = ew + 2 * eM;
function eV(e) {
    let { ariaLabel: t, children: n, className: r, isSelected: s, onClick: a } = e,
        o = i.useRef(null),
        { isHoveringOrFocusing: u } = (0, ex.A)(o);
    return (0, l.jsxs)(f.D, {
        innerRef: o,
        "aria-label": t,
        className: r,
        onClick: a,
        children: [
            (0, l.jsx)("div", {
                className: e_.a$,
                children: (0, l.jsx)(ey.A, { hovered: u, selected: s, size: "small" }),
            }),
            n,
        ],
    });
}
let eW = (e) => {
    let { stickersListRef: t, channel: n } = e,
        r = i.useRef(null),
        [a, o] = i.useState(!0),
        u = q.bM.useStore((e) => e.activeCategoryIndex),
        c = ev(
            (0, D.pD)(n),
            (0, d.bG)([et.default], () => et.default.getCurrentUser()),
            n,
            X("web.StickerPickerCategoryList"),
        ),
        {
            firstStandardStickerCategoryIndex: h,
            firstStandardStickerCategoryOffsetTop: m,
            guildCategoryCount: p,
            hasFirstPartyStickerPacks: g,
        } = i.useMemo(() => {
            let e = c.filter((e) => e.type === ec.Z2.GUILD).length,
                t = e + +(c[0]?.type === ec.Z2.RECENT) + +(c[0]?.type === ec.Z2.FAVORITE),
                n = t * (eR + eO) - eO + eU;
            return {
                firstStandardStickerCategoryIndex: t + 1,
                firstStandardStickerCategoryOffsetTop: n,
                guildCategoryCount: e,
                hasFirstPartyStickerPacks: null != c.find((e) => e.type === ec.Z2.PACK),
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
                u = (0, G.p)(),
                c = (0, $.RQ)((e) => "" !== e.searchQuery),
                d = i.useCallback(
                    (e, r, a) => {
                        let o,
                            d = n[0]?.type === ec.Z2.FAVORITE,
                            h = +!!d,
                            m = n[h]?.type === ec.Z2.RECENT,
                            f = n.length;
                        if (0 === r && d) {
                            let e = !c && 0 === t;
                            return (0, l.jsx)(
                                "div",
                                {
                                    role: "listitem",
                                    "aria-setsize": f,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(eV, {
                                        ariaLabel: ej.intl.string(ej.t.y3LQCG),
                                        className: s()(e_._0, e_.dC, { [e_.k1]: e, [e_.ls]: !m }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(em.StarIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: e_.AB,
                                            height: eL,
                                            width: eL,
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
                                    children: (0, l.jsx)(eV, {
                                        ariaLabel: ej.intl.string(ej.t.RxAmVC),
                                        className: s()(e_._0, e_.dC, e_.ls, { [e_.k1]: e }),
                                        isSelected: e,
                                        onClick: a,
                                        children: (0, l.jsx)(ef.ClockIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: e_.AB,
                                            height: eL,
                                            width: eL,
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
                            S = null != E && x.type === ec.Z2.GUILD && E.type !== ec.Z2.GUILD,
                            y = x.type === ec.Z2.PACK,
                            C = "",
                            A = null;
                        if (x.type === ec.Z2.GUILD || x.type === ec.Z2.EMPTY_GUILD_UPSELL) {
                            let e = eC.A.getGuild(x.id);
                            null != e &&
                                ((o = e.id),
                                (C = e.name),
                                (A = (0, l.jsx)(eE.A, { guild: e, isSelected: p, isLocked: !0 === x.isNitroLocked })));
                        } else if (y) {
                            let e = U.A.getStickerPack(x.id);
                            null != e &&
                                ((C = e.name),
                                (A = (0, l.jsx)(eI.A, {
                                    disableAnimation: !p || c,
                                    size: eR,
                                    sticker: (0, eA.Id)(e),
                                })));
                        }
                        return (0, l.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, l.jsx)(ep.m, {
                                        position: "right",
                                        text: C,
                                        children: (0, l.jsx)("div", {
                                            role: "listitem",
                                            "aria-setsize": f,
                                            "aria-posinset": r,
                                            children: (0, l.jsx)(eV, {
                                                ariaLabel: C,
                                                className: s()(e_._0, { [e_.ND]: y, [e_.Ms]: g && y }),
                                                isSelected: g,
                                                onClick: () => {
                                                    (x.type === ec.Z2.PACK &&
                                                        en.default.track(_.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                            location: u?.location,
                                                            tab: eT.kx.STICKER,
                                                            sticker_pack_id: x.id,
                                                            guild_id: o,
                                                        }),
                                                        a());
                                                },
                                                children: A,
                                            }),
                                        }),
                                    }),
                                    S ? (0, l.jsx)("hr", { className: e_.ny }, "separator") : null,
                                ],
                            },
                            x.id,
                        );
                    },
                    [t, u, c, n],
                ),
                h = i.useCallback((e, t) => (t ? eD : 0), []);
            return {
                getScrollOffsetForIndex: h,
                renderCategoryListItem: d,
                rowHeight: i.useCallback(
                    (e, t) => {
                        let l = n[t],
                            i = n[t + 1];
                        return eR + (null != i && l.type === ec.Z2.GUILD && i.type !== ec.Z2.GUILD ? eU : eO);
                    },
                    [n],
                ),
                onScroll: i.useCallback(
                    (e) => {
                        let t = r.current?.getListDimensions();
                        null == t || o(e + t.height - ew < a);
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
    return (0, l.jsx)(eS.A, {
        className: e_.jv,
        categoryListRef: r,
        expressionsListRef: t,
        store: q.bM,
        listPadding: eP,
        onScroll: S,
        renderCategoryListItem: x,
        rowCount: c.length,
        categories: c,
        categoryHeight: E,
        children: (e) =>
            g &&
            a &&
            (0, l.jsx)(f.D, {
                className: s()(e_.Fe, { [e_.Q6]: !a }),
                onClick: () => y(e),
                children: (0, l.jsx)(eg.t, { size: "md", color: "currentColor" }),
            }),
    });
};
var eF = n(297264),
    eB = n(834730),
    eK = n(10392),
    eG = n(82498),
    eH = n(724651),
    ez = n(811611),
    eq = n(821609),
    e$ = n(403581);
function eQ(e) {
    let { analyticsSection: t, buttonText: i } = e;
    return (0, l.jsx)(eq.$, {
        variant: "expressive",
        icon: e$.t,
        text: i ?? ej.intl.string(ej.t["8Sh5fg"]),
        onClick: () => {
            var e;
            return (
                (e = { section: t }),
                void (en.default.track(_.HAw.OPEN_MODAL, {
                    type: _.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
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
var eZ = n(823894),
    eJ = n(202541),
    eX = n(768857);
function eY(e) {
    let { className: t, onClose: n } = e;
    (0, D.XQ)();
    let { analyticsLocations: r } = (0, z.Ay)(H.A.EMPTY_STATE),
        a = (0, d.yK)([U.A], () => eZ.vX.map((e) => U.A.getStickerById(e)));
    i.useEffect(() => {
        (en.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eJ.e.EMPTY_STICKER_PICKER_UPSELL,
            source: { section: _.JJy.EMPTY_STICKER_PICKER_UPSELL },
            location_stack: r,
        }),
            (0, eK.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, r, () => (0, eG.uq)(eJ.e.EMPTY_STICKER_PICKER_UPSELL)));
    }, [r]);
    let o = (0, Y.V)(),
        u = (0, eH.O)(),
        c = null != o || null != u;
    return (0, l.jsxs)("div", {
        className: s()(eX.p$, t, { [eX.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(ez.Ay, {
                      discountOffer: u,
                      trialOffer: o,
                      onClose: n,
                      type: eJ.e.EMPTY_STICKER_PICKER_UPSELL,
                      subscriptionTier: o?.subscriptionTrial?.skuId ?? eJ.pe.TIER_2,
                      children: ej.intl.string(ej.t.FnNud4),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eF.D, {
                              className: eX.wx,
                              variant: "heading-xl/semibold",
                              children: ej.intl.string(ej.t.HEm04J),
                          }),
                          (0, l.jsx)(eB.E, {
                              className: eX.VA,
                              color: "text-default",
                              variant: "text-md/normal",
                              children: ej.intl.string(ej.t.FnNud4),
                          }),
                          (0, l.jsx)("div", {
                              className: eX.l1,
                              children: a
                                  .filter((e) => null != e)
                                  .map((e) => (0, l.jsx)(eI.A, { sticker: e, className: eX.yI, size: 80 }, e?.id)),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eQ, { analyticsSection: _.JJy.EXPRESSION_PICKER }),
        ],
    });
}
n(30146);
var e0 = n(404778),
    e1 = n(537652),
    e2 = n(962125),
    e5 = n(286509),
    e8 = n(414872),
    e6 = n(158045),
    e3 = n(631576),
    e7 = n(369163),
    e4 = n(123292),
    e9 = n(631305),
    te = n(468689),
    tt = n(931991),
    tn = n(473145),
    tl = n(625633),
    ti = n(136123);
let tr = function (e) {
    let { className: t, guildId: n, channel: r, shouldTrackUpsellViewed: a, setTrackedUpsellViewed: o } = e,
        { location: u } = (0, G.p)(),
        { analyticsLocations: c } = (0, z.Ay)(),
        h = (0, d.bG)([eC.A], () => eC.A.getGuild(n)),
        { canManageAllExpressions: m } = (0, tt.nr)(h),
        f = null != h && 0 === (0, tn.aG)(h.premiumTier) && !h.features.has(_.GuildFeatures.MORE_STICKERS);
    return (i.useEffect(() => {
        m &&
            f &&
            a &&
            ((0, y.zV)(_.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
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
                  className: s()(ti.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(e7.v, { size: "md", color: "currentColor", className: ti.Kk }),
                      (0, l.jsx)(eB.E, {
                          color: "interactive-text-default",
                          className: ti.rf,
                          variant: "text-sm/normal",
                          children: ej.intl.format(ej.t.AXWla1, { count: (0, tn.aG)(_.TVA.TIER_1) }),
                      }),
                      (0, l.jsx)(e4.Q, {
                          variant: "primary",
                          text: ej.intl.string(ej.t["Gb+BJD"]),
                          onClick: function () {
                              null != h &&
                                  (0, e9.A)({
                                      analyticsLocations: c,
                                      analyticsSourceLocation: u,
                                      guild: h,
                                      perks: (0, tl.q5)(),
                                  });
                          },
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: s()(ti.UX, t),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                      (0, l.jsx)(eg.t, {
                          size: "custom",
                          color: "currentColor",
                          className: ti.Kk,
                          width: 20,
                          height: 20,
                      }),
                      (0, l.jsx)(eB.E, {
                          color: "interactive-text-default",
                          className: ti.rf,
                          variant: "text-sm/normal",
                          children: ej.intl.string(ej.t.S83wgh),
                      }),
                      (0, l.jsx)(e4.Q, {
                          variant: "primary",
                          text: ej.intl.string(ej.t.bwNjug),
                          onClick: function () {
                              ((0, $.v8)(), te.A.open(n, _.BEX.STICKERS, u));
                          },
                      }),
                  ],
              })
        : null;
};
var ts = n(240864),
    ta = n(89366),
    to = n(202639);
let tu = (0, a.throttle)(
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
            { areOnlyNitroLockedSectionsVisible: o } = (0, ts.s)({
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
var tc = n(307301),
    td = n(182922),
    th = n(683522);
let tm = (0, el.xI)(B.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
    tf = (0, el.xI)(B.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
    tp = i.memo(function (e) {
        let { stickersGrid: t } = e,
            n = q.bM.useStore((e) => e.inspectedExpressionPosition),
            r = i.useMemo(() => {
                let { rowIndex: e, columnIndex: l } = n,
                    i = t[e]?.[l];
                if (null == i) return null;
                switch (i.type) {
                    case ec.op.CREATE_STICKER:
                        return { guild_id: i.guild_id, name: i.name };
                    case ec.op.STICKER:
                        return i.sticker;
                    default:
                        return null;
                }
            }, [t, n]);
        if (null == r) return null;
        let { graphic: s, title: a } = (function (e) {
                let t = null,
                    n = null;
                if ((!(0, eA.FD)(e) && !(0, eA.Xw)(e)) || (0, eA.Xw)(e)) {
                    let i = eC.A.getGuild(e.guild_id);
                    null != i &&
                        ((t = ej.intl.format(ej.t.cZOkbs, { source: i.name })), (n = (0, l.jsx)(eE.A, { guild: i })));
                } else if ((0, eA.FD)(e)) {
                    let i = U.A.getStickerPack(e.pack_id);
                    null != i &&
                        ((t = ej.intl.format(ej.t.cZOkbs, { source: i.name })),
                        (n = (0, l.jsx)(eI.A, { size: tf, sticker: (0, eA.Id)(i), disableAnimation: !0 })));
                }
                return { title: t, graphic: n };
            })(r),
            o =
                (0, eA.FD)(r) || (0, eA.Xw)(r)
                    ? (0, l.jsx)(eI.A, { isInteracting: !0, size: tm, sticker: r, disableAnimation: !0 })
                    : (0, l.jsx)("div", {
                          className: th.P,
                          children: (0, l.jsx)(tc.j, { size: "md", color: "currentColor", className: th.K }),
                      });
        return (0, l.jsx)(td.A, {
            graphicPrimary: o,
            graphicSecondary: s,
            titlePrimary: r.name,
            titleSecondary: (0, eA.FD)(r) || (0, eA.Xw)(r) ? a : null,
        });
    });
var tg = n(140735),
    tx = n(194261),
    tE = n(442433),
    tS = n(304072),
    ty = n(513902);
let tC = function (e) {
    let { size: t } = e;
    return (0, l.jsx)("div", {
        className: ty.G,
        style: { width: t, height: t },
        children: (0, l.jsx)(tx.LockIcon, { size: "xxs", color: "currentColor", className: ty.I }),
    });
};
var tA = n(777371);
let tI = i.memo(function (e) {
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
            ownedStickerPacks: I,
            enlargeOnInteraction: b = !1,
            channel: N,
            currentUser: v,
            checkSendability: T = !0,
            upsellRestyleEnabled: j = !1,
            isSectionNitroLocked: k = !1,
        } = e,
        { location: R } = (0, G.p)(),
        O = A + 2 * C,
        L = i.useMemo(
            () => ({
                gridColumnGap: c,
                gridTemplateColumns: `repeat(auto-fill, ${O}px)`,
                height: O,
                paddingRight: t ? void 0 : O,
            }),
            [t, c, O],
        ),
        w = i.useMemo(() => ({ width: A, height: A, padding: C }), [C, A]),
        [M, P] = (0, tS.A)(null, 300);
    return (0, l.jsx)("div", {
        className: tA.nM,
        style: L,
        ...u?.(E),
        children: y.map((e) => {
            let u = e.visibleRowIndex === d?.rowIndex && e.columnIndex === d?.columnIndex,
                c = e.type === ec.op.STICKER && b && u,
                y = (0, a.throttle)(() => {
                    h?.current === !0 || p?.current === !0 || u || g?.(e);
                }, 250),
                { ref: C, tabIndex: O, onFocus: L, ...D } = o?.(e.columnIndex, E) ?? {};
            switch (e.type) {
                case ec.op.CREATE_STICKER:
                    return (0, l.jsx)(
                        "div",
                        {
                            ...D,
                            children: (0, l.jsxs)(f.D, {
                                "aria-label": e.name,
                                className: s()(tA.wP, S, { [tA.Kj]: u }),
                                innerRef: C,
                                tabIndex: O,
                                onFocus: L ?? y,
                                onMouseMove: y,
                                onClick: function () {
                                    e.type === ec.op.CREATE_STICKER &&
                                        (en.default.track(_.HAw.OPEN_MODAL, {
                                            type: _.JJy.CREATE_STICKER_MODAL,
                                            location: R,
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
                                style: w,
                                children: [
                                    !b && (0, l.jsx)("div", { className: tA.fw }),
                                    (0, l.jsx)("div", {
                                        className: tA.P0,
                                        children: (0, l.jsx)(tc.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: tA.Kk,
                                        }),
                                    }),
                                    (0, l.jsx)(eB.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: ej.intl.string(ej.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case ec.op.STICKER: {
                    let a = (T ? (0, eb.W$)(e.sticker, v, N) : eb.Ux.SENDABLE) !== eb.Ux.SENDABLE,
                        o = j && a && !k,
                        m = !j && a,
                        g = t && null != I && (0, eA.FD)(e.sticker) && !I.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...D, key: e.sticker.id },
                        (0, l.jsxs)(f.D, {
                            className: s()(tA.yI, S, { [tA.PV]: u, [tA.TV]: M === e.sticker.id }),
                            innerRef: C,
                            tabIndex: O,
                            onFocus: L ?? y,
                            onMouseMove: y,
                            onClick: function (t) {
                                if (h?.current === !0 || p?.current === !0) return;
                                let n = t.altKey;
                                (n && e.type === ec.op.STICKER && !(0, eA.o1)(e.sticker.id) && P(e.sticker.id),
                                    x?.(e, n));
                            },
                            onContextMenu: function (e) {
                                (0, tE.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("638221"),
                                        n.e("904774"),
                                        n.e("446132"),
                                    ]).then(n.bind(n, 233503));
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                            style: w,
                            "data-type": eh.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, l.jsx)(tg.A, { children: (0, eI.h)(e.sticker) }),
                                (0, l.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !b && (0, l.jsx)("div", { className: tA.fw }),
                                        (0, l.jsx)(eI.A, {
                                            className: s()(tA.SI, {
                                                [tA.ot]:
                                                    b && !u && null != d && -1 !== d.rowIndex && -1 !== d.columnIndex,
                                                [tA.Q$]: c,
                                                [tA.No]: m,
                                                [tA.UK]: o,
                                            }),
                                            disableAnimation: !u && !r,
                                            enlargeOnInteraction: b,
                                            isInteracting: u,
                                            maskAsset: u,
                                            sticker: e.sticker,
                                            size: A,
                                        }),
                                        g ? (0, l.jsx)(tC, { size: 20 }) : null,
                                        o
                                            ? (0, l.jsx)("div", {
                                                  className: tA.MC,
                                                  children: (0, l.jsx)(tx.LockIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: tA.hz,
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
function tb(e) {
    let { descriptor: t, currentUser: n, channel: l, onSelect: i } = e;
    switch ((0, eb.W$)(t.sticker, n, l)) {
        case eb.Ux.SENDABLE:
            i(t);
            break;
        case eb.Ux.SENDABLE_WITH_PREMIUM:
            (en.default.track(_.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: _.JJy.STICKER_PICKER_UPSELL,
                location_object: _.ZSU.STICKER,
            }),
                eo(!0));
        case eb.Ux.SENDABLE_WITH_BOOSTED_GUILD:
        case eb.Ux.NONSENDABLE:
    }
}
var tN = n(457231);
let tv = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tT = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    tj = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    t_ = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tk = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tR = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tO = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tL = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    tw = (0, el.xI)(B.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tM = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tP = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tD = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tU = tM + 2 + tD,
    tV = tP + 2 + tD,
    tW = [tj, tk, tR, tO],
    tF = [t_, tk, tR, tO],
    tB = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tK = "sticker-search-nitro",
    tG = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
function tH(e) {
    let { onSuggestionClick: t } = e;
    return (0, l.jsx)("div", {
        className: tN.yB,
        children: tG.map((e) =>
            (0, l.jsx)(
                f.D,
                {
                    className: tN.x_,
                    onClick: () => t(e),
                    children: (0, l.jsx)(eB.E, { variant: "text-sm/normal", color: "text-default", children: e }),
                },
                e,
            ),
        ),
    });
}
function tz(e, t) {
    return null != t && 0 !== t.sendableWithPremium.length && e === +(t.sendable.length > 0);
}
function tq(e, t) {
    return null != t && 0 === e && t.sendable.length > 0 && t.sendableWithPremium.length > 0;
}
let t$ = function (e) {
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
        [A, I] = q.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], F.x),
        { analyticsLocations: b } = (0, z.Ay)(H.A.STICKER_PICKER),
        N = (0, $.RQ)((e) => e.searchQuery),
        v = (0, d.bG)([U.A], () => U.A.getPremiumPacks()),
        T = (0, d.bG)([et.default], () => et.default.getCurrentUser()),
        j = e6.Ay.canUseCustomStickersEverywhere(T),
        [k, R] = i.useState(0),
        O = X("web.StickerPickerList"),
        L = i.useMemo(() => new Set(v.map((e) => e.id)), [v]),
        w = ev(g, T, E, O),
        {
            renderRow: M,
            renderSection: P,
            renderSectionFooter: D,
            sectionFooterHeight: V,
            renderSectionHeader: W,
            sectionHeaderHeight: B,
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
                C = (0, G.p)(),
                { handleStickerInspect: A, handleSelect: I } = (function (e) {
                    let { onSelectSticker: t, channel: n, currentUser: l } = e,
                        r = (0, G.p)(),
                        s = (0, $.RQ)((e) => e.searchQuery);
                    return {
                        handleStickerInspect: i.useCallback((e) => {
                            let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: l } = e;
                            (q.bM.setActiveCategoryIndex(l),
                                q.bM.setInspectedExpressionPosition(n, t, eh.t.MOUSE_EVENT),
                                e.type === ec.op.STICKER && q.bM.setSearchPlaceholder(e.sticker.name));
                        }, []),
                        handleSelect: i.useCallback(
                            (e, i) => {
                                if (e.type !== ec.op.STICKER) return;
                                let { sticker: a } = e;
                                if (null == a) return;
                                let o = {
                                    ...r.location,
                                    object: "" === s ? _.ZSU.STICKER_PICKER_VIEW_ALL : _.ZSU.STICKER_SEARCH_VIEW_ALL,
                                };
                                (0, eb.W$)(a, l, n) !== eb.Ux.SENDABLE
                                    ? tb({ descriptor: e, currentUser: l, channel: n, onSelect: t })
                                    : i
                                      ? (0, eA.o1)(a.id)
                                          ? (0, e3.vr)(a.id)
                                          : ((0, eu.Dt)({ sticker: a, location: { ...o, object: _.ZSU.STICKER } }),
                                            (0, e3.uK)(a.id))
                                      : t(e);
                            },
                            [r.location, s, l, n, t],
                        ),
                    };
                })({ onSelectSticker: r, channel: x, currentUser: E }),
                [b, N] = i.useState(!1),
                v = i.useCallback((e) => {
                    ee.tP.updateSetting(Array.from(e));
                }, []),
                T = i.useCallback(
                    (e) => {
                        let t = m[e],
                            i = t?.[0]?.gridSectionIndex,
                            r = null != i && ((y && tz(i, p)) || (null == p && f[i]?.isNitroLocked === !0));
                        return null != t
                            ? (0, l.jsx)(
                                  tI,
                                  {
                                      getStickerItemProps: a,
                                      getStickerRowProps: o,
                                      gutterWidth: u,
                                      inspectedStickerPosition: c,
                                      isScrolling: d,
                                      isUsingKeyboardNavigation: h,
                                      onInspect: A,
                                      onSelect: I,
                                      rowIndex: e,
                                      stickerClassName: tN.yI,
                                      stickerDescriptors: t,
                                      stickerSize: n > tv ? tM : tP,
                                      stickerPadding: 1,
                                      preferAnimation: n <= tT,
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
                    [m, a, o, u, c, d, h, A, I, n, g, x, E, p, f, y],
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
                R = i.useCallback(
                    (e, t) => {
                        let n = f[e],
                            i = y && tz(e, p),
                            r = i || (null == p && n?.isNitroLocked === !0),
                            a = i || (null == p && j(e));
                        return null == p || r
                            ? (0, l.jsx)(
                                  "div",
                                  { role: "rowgroup", className: s()({ [tN.cW]: r, [tN.fV]: a }), children: t },
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
                            en.default.track(_.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                                location: C?.location,
                                tab: eT.kx.STICKER,
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
                            if (y && tz(e, p)) {
                                let n = S === e;
                                return (0, l.jsx)(
                                    e5.A,
                                    {
                                        className: s()(tN.jH, tN.M0, { [tN.RA]: !n, [tN.sp]: n }),
                                        "aria-label": ej.intl.string(ej.t.pAF6xE),
                                        icon: (0, l.jsx)(e$.t, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(tK),
                                        onClick: () => O(tK, { isStickerPack: !1 }),
                                        children: ej.intl.string(ej.t.pAF6xE),
                                    },
                                    "stickers-available-with-nitro-header",
                                );
                            }
                            let r = n.length > 0 && i.length > 0;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    r ? (0, l.jsx)("div", { className: tN.yF, children: (0, l.jsx)(e0.c, {}) }) : null,
                                    (0, l.jsx)(
                                        e5.A,
                                        {
                                            className: tN.jH,
                                            "aria-label": ej.intl.string(ej.t.wbfJFh),
                                            children: ej.intl.string(ej.t["05Z/0l"]),
                                        },
                                        "stickers-you-might-like-header",
                                    ),
                                ],
                            });
                        }
                        let i = f[e]?.isNitroLocked === !0,
                            r = s()(tN.jH, { [tN.M0]: y, [tN.RA]: i && S !== e, [tN.sp]: i && S === e });
                        switch (n.type) {
                            case ec.Z2.FAVORITE:
                                return (0, l.jsx)(
                                    e5.A,
                                    {
                                        className: r,
                                        "aria-label": ej.intl.formatToPlainString(ej.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(em.StarIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => O(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case ec.Z2.RECENT:
                                return (0, l.jsx)(
                                    e5.A,
                                    {
                                        className: r,
                                        "aria-label": ej.intl.formatToPlainString(ej.t["7lLCjZ"], {
                                            categoryName: n.name,
                                        }),
                                        icon: (0, l.jsx)(ef.ClockIcon, { size: "xs", color: "currentColor" }),
                                        isCollapsed: t.has(n.id),
                                        onClick: () => O(n.id, { isStickerPack: !1 }),
                                        children: n.name,
                                    },
                                    `header-${n.id}`,
                                );
                            case ec.Z2.GUILD:
                            case ec.Z2.EMPTY_GUILD_UPSELL: {
                                let e = eC.A.getGuild(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(
                                    e5.A,
                                    {
                                        className: r,
                                        "aria-label": ej.intl.formatToPlainString(ej.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(eE.A, { guild: e, height: 16, width: 16 }),
                                        isCollapsed: t.has(e.id),
                                        onClick: () => O(e.id),
                                        children: e.name,
                                    },
                                    `h${e.id}`,
                                );
                            }
                            case ec.Z2.PACK: {
                                let e = U.A.getStickerPack(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(
                                    e5.A,
                                    {
                                        className: r,
                                        "aria-label": ej.intl.formatToPlainString(ej.t["7lLCjZ"], {
                                            categoryName: e.name,
                                        }),
                                        icon: (0, l.jsx)(eI.A, {
                                            disableAnimation: !0,
                                            size: 12,
                                            sticker: (0, eA.Id)(e),
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
                                : y && tz(e, p)
                                  ? tw + 16
                                  : tw + (t.length > 0 && n.length > 0 ? tL : 0);
                        }
                        return tw + 16 * (f[e]?.isNitroLocked === !0);
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
                                ? tz(e, p)
                                    ? (0, l.jsx)("div", { className: tN.pQ })
                                    : tq(e, p)
                                      ? (0, l.jsx)(e8.Ay, { className: tN.$2 })
                                      : null
                                : null;
                        let n = f[e],
                            i = t.has(n.id),
                            r =
                                n.type !== ec.Z2.EMPTY_GUILD_UPSELL || i
                                    ? null
                                    : (0, l.jsx)(
                                          tr,
                                          {
                                              className: tN.Ij,
                                              guildId: n.id,
                                              channel: x,
                                              shouldTrackUpsellViewed: !b,
                                              setTrackedUpsellViewed: N,
                                          },
                                          `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                                      ),
                            s = null;
                        return (
                            k(e)
                                ? (s = (0, l.jsx)(e8.Ay, { className: tN.$2 }))
                                : j(e) && (s = (0, l.jsx)("div", { className: tN.pQ })),
                            null == r && null == s ? null : (0, l.jsxs)(l.Fragment, { children: [r, s] })
                        );
                    },
                    [f, t, p, x, b, y, k, j],
                ),
                sectionFooterHeight: i.useCallback(
                    (e) => {
                        if (null != p) return y ? (tz(e, p) ? 33 : tq(e, p) ? e8.kg : 0) : 0;
                        let n = f[e],
                            l = t.has(n.id),
                            i = 0;
                        return (
                            n.type !== ec.Z2.EMPTY_GUILD_UPSELL || l || (i += tB),
                            k(e) ? (i += e8.kg) : j(e) && (i += 33),
                            i
                        );
                    },
                    [p, y, f, t, k, j],
                ),
            };
        })({
            collapsedStickersCategories: t,
            gridWidth: n,
            stickersCategories: w,
            stickersGrid: x,
            isScrolling: y,
            isUsingKeyboardNavigation: h,
            onSelectSticker: m,
            getStickerItemProps: a,
            getStickerRowProps: o,
            gutterWidth: c,
            inspectedStickerPosition: I,
            filteredStickers: r,
            ownedStickerPacks: L,
            channel: E,
            currentUser: T,
            activeSectionIndex: k,
            upsellRestyleEnabled: O,
        }),
        { onScroll: K, upsell: Z } = (function (e) {
            let {
                    upsellRestyleEnabled: t,
                    canUseStickersEverywhere: n,
                    listRef: r,
                    searchQuery: s,
                    categories: a,
                    sectionHeaderHeight: o,
                    sectionFooterHeight: c,
                } = e,
                { location: d } = (0, G.p)(),
                { analyticsLocations: h } = (0, z.Ay)(H.A.STICKER_PICKER),
                [m, f] = i.useState(!1),
                p = i.useMemo(() => a.map((e) => ({ isNitroLocked: !0 === e.isNitroLocked })), [a]),
                g = i.useCallback(
                    (e) => {
                        t &&
                            tu({
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
                        (en.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                            type: eJ.e.STICKER_PICKER_FLOATING_UPSELL,
                            location: d,
                            location_stack: h,
                        }),
                        (0, eK.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, h, () =>
                            (0, eG.uq)(eJ.e.STICKER_PICKER_FLOATING_UPSELL),
                        ));
                }, [d, h, n, x]),
                !t || n || u.Fr)
            )
                return { onScroll: g, upsell: null };
            let E = ej.intl.format(ej.t.eontIh, {
                    nitroTierName: (0, e6.Dd)(eJ.PremiumTypes.TIER_2),
                    onClick: () => {
                        (en.default.track(_.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_section: _.JJy.STICKER_PICKER_FLOATING_UPSELL,
                        }),
                            eo(!0));
                    },
                }),
                S = (0, e6.LE)((0, ta.qD)(), eJ.pe.TIER_2) ?? ej.intl.string(ej.t.BmJkbd);
            return {
                onScroll: g,
                upsell: (0, l.jsx)(to.d, {
                    showUpsell: x,
                    text: E,
                    button: S,
                    buttonAnalyticsObject: { section: _.JJy.STICKER_PICKER_FLOATING_UPSELL },
                }),
            };
        })({
            upsellRestyleEnabled: O,
            canUseStickersEverywhere: j,
            listRef: C,
            searchQuery: N,
            categories: w,
            sectionHeaderHeight: B,
            sectionFooterHeight: V,
        });
    i.useEffect(() => {
        O && K(C.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [O, K, p]);
    let J = (0, Q.Fk)({
            activeCategoryIndex: A,
            isScrolling: y,
            listRef: C,
            onActiveCategoryIndexChange: q.bM.setActiveCategoryIndex,
            scrollOffset: 20,
            searchQuery: N,
        }),
        Y = i.useCallback((e) => {
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
        O && Y(C.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [O, Y, r, p]);
    let el = i.useCallback(
        (e) => {
            (J(e), O && Y(e), K(e));
        },
        [J, K, Y, O],
    );
    return (
        (0, Q.FV)({ searchQuery: N, activeCategoryIndex: A, listRef: C }),
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
        (0, l.jsx)(z.f5, {
            value: b,
            children: (0, l.jsxs)("div", {
                className: tN.iE,
                children: [
                    (0, l.jsxs)("div", {
                        className: tN.AD,
                        children: [
                            null != r && 0 === r.sendable.length && 0 === r.sendableWithPremium.length
                                ? (0, l.jsx)(e1.A, {
                                      message: ej.intl.string(ej.t["zc+LQd"]),
                                      className: tN.__invalid_noSearchResultsContainer,
                                      suggestions: (0, l.jsx)(tH, { onSuggestionClick: (e) => (0, $.Ri)(e, !0) }),
                                  })
                                : (0, l.jsx)(e2.A, {
                                      role: "none presentation",
                                      listPadding: null != r ? tF : tW,
                                      onScroll: el,
                                      renderRow: M,
                                      renderSection: P,
                                      renderSectionHeader: W,
                                      renderSectionFooter: D,
                                      rowCount: f,
                                      rowCountBySection: p,
                                      rowHeight: n > tv ? tU : tV,
                                      sectionHeaderHeight: B,
                                      sectionFooterHeight: V,
                                      stickyHeaders: !0,
                                      ref: C,
                                  }),
                            Z,
                        ],
                    }),
                    (0, l.jsx)(tp, { stickersGrid: x }),
                ],
            }),
        })
    );
};
var tQ = n(602034),
    tZ = n(683438),
    tJ = n(909802);
let tX = function (e) {
    let { onKeyDown: t, stickersListRef: n, channel: r, ref: s } = e,
        a = (0, D.ZO)(r),
        o = i.useRef(null),
        { searchQuery: u, isSearchSuggestion: c } = (0, $.RQ)(
            (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
            F.x,
        ),
        d = q.bM.useStore((e) => e.searchPlaceholder),
        [h, m] = q.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], F.x),
        f = i.useCallback(
            (e) => {
                (q.bM.setActiveCategoryIndex("" === e ? 0 : -1),
                    q.bM.setInspectedExpressionPosition(0, 0),
                    q.bM.setSearchPlaceholder(null),
                    (0, $.Ri)(e),
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
            className: tJ.i,
            children: (0, l.jsx)(tZ.I, {
                autoFocus: a,
                disabled: !a,
                query: u,
                ref: o,
                placeholder: d ?? (a ? ej.intl.string(ej.t.dt5h1C) : ej.intl.string(ej.t["Pck/4U"])),
                onClear: p,
                onKeyDown: t,
                onChange: f,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": eZ.lq,
                    "aria-expanded": !0,
                    ...(m ? { "aria-activedescendant": (0, tQ.Aq)(eZ.lq, h.columnIndex, h.rowIndex) } : void 0),
                },
            }),
        })
    );
};
n(321073);
var tY = n(802842),
    t0 = n(330422),
    t1 = n(609178);
function t2(e) {
    let { onUpsellClicked: t } = e,
        { location: n } = (0, G.p)(),
        { analyticsLocations: i } = (0, z.Ay)(H.A.STICKER_PICKER),
        r = (0, $.RQ)((e) => e.searchQuery);
    return (0, l.jsx)(t1.A, {
        title: ej.intl.string(ej.t.Eukdgl),
        description: ej.intl.string(ej.t.sMmd7s),
        analyticsLocationSection: _.JJy.STICKER_PICKER_UPSELL,
        onClose: () => eo(!1),
        onUpsellClicked: t,
        upsellViewedTrackingData: {
            type: eJ.e.STICKER_PICKER_UPSELL,
            location: { ...n, object: _.ZSU.STICKER },
            location_stack: i,
            sku_id: (0, e6.mH)(e6.Ay.getSkuIdForPremiumType(eJ.PremiumTypes.TIER_2)),
            has_search_query: "" !== r,
        },
        graphic: (0, l.jsx)(t0.n, { alt: "", ariaHidden: !0 }),
        useNitroGradient: !0,
    });
}
var t5 = n(789645),
    t8 = n(964486),
    t6 = n(420136),
    t3 = n(939383);
function t7() {
    return eo(!1);
}
function t4(e) {
    let { onLearnMore: t } = e,
        { analyticsLocations: n } = (0, z.Ay)(H.A.PREMIUM_UPSELL);
    (0, i.useEffect)(() => {
        (en.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
            location_section: _.JJy.STICKER_PICKER_UPSELL,
            type: eJ.e.STICKER_PICKER_UPSELL,
            location_stack: n,
        }),
            (0, eK.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, eG.uq)(eJ.e.STICKER_PICKER_UPSELL)));
    }, [n]);
    let r = (0, i.useRef)(null);
    (0, t8.Ay)(() => {
        r.current?.focus();
    });
    let a = (0, Y.V)(),
        o = (0, eH.O)(),
        u = a?.subscriptionTrial?.skuId === eJ.pe.TIER_0,
        c = null != a || null != o;
    return (0, l.jsxs)("div", {
        ref: r,
        tabIndex: -1,
        "aria-label": ej.intl.string(ej.t.jJG1pl),
        className: s()(t6.VL, { [t6.Hz]: c }),
        children: [
            c
                ? (0, l.jsx)(ez.Ay, {
                      trialOffer: a,
                      discountOffer: o,
                      onClose: t7,
                      type: eJ.e.STICKER_PICKER_UPSELL,
                      subscriptionTier: a?.subscriptionTrial?.skuId ?? eJ.pe.TIER_2,
                      children: u
                          ? ej.intl.format(ej.t.MAGagw, {
                                planName: (0, e6.RH)(eJ.gD.PREMIUM_MONTH_TIER_0),
                                onClick: t,
                            })
                          : ej.intl.format(ej.t.jt7JX6, { onClick: t }),
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: t6.Tn, src: t3, alt: ej.intl.string(ej.t.do7AoM) }),
                          (0, l.jsx)(eB.E, {
                              className: t6.ex,
                              color: "text-strong",
                              variant: "text-lg/semibold",
                              children: ej.intl.string(ej.t.jJG1pl),
                          }),
                          (0, l.jsx)(eB.E, {
                              className: t6.GR,
                              variant: "text-md/normal",
                              children: ej.intl.format(ej.t.jt7JX6, { onClick: t }),
                          }),
                      ],
                  }),
            !c && (0, l.jsx)(eQ, { analyticsSection: _.JJy.EXPRESSION_PICKER }),
            (0, l.jsx)(f.D, {
                className: t6.kz,
                onClick: t7,
                "aria-label": ej.intl.string(ej.t.cpT0Cq),
                children: (0, l.jsx)(t5.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
var t9 = n(970099);
let ne = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    nt = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    nn = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    nl = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    ni = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    nr = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    ns = (0, el.xI)(B.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    na = nr + 2,
    no = ns + 2,
    nu = W()(eu.Qz, 200),
    nc = W()(eu.HA, 200);
function nd(e) {
    let { containerWidth: t, channel: r, onSelectSticker: s, closePopout: a, ref: o } = e,
        u = X("web.StickerPicker"),
        { location: c } = (0, G.p)(),
        { analyticsLocations: h } = (0, z.Ay)(H.A.STICKER_PICKER),
        f = (0, Y.V)()?.subscriptionTrial != null,
        p = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        E = ea((e) => e.showPremiumUpsell),
        [S, y] = (0, $.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], F.x),
        C = i.useRef("");
    i.useImperativeHandle(o, () => ({ onPickerOpen: eg }));
    let A = (0, D.pD)(r),
        I = (0, d.bG)([et.default], () => et.default.getCurrentUser()),
        b = ev(A, I, r, u),
        N = 0 === b.filter((e) => e.type !== ec.Z2.EMPTY_GUILD_UPSELL).length,
        v = (0, Q.oV)({
            gridWrapperRef: p,
            containerWidth: t,
            showingEmptyState: N,
            listPaddingLeft: nt,
            listScrollbarWidth: 8,
        }),
        T = ee.tP.useSetting(),
        j = i.useMemo(() => new Set(T), [T]),
        k = i.useMemo(
            () =>
                (function (e, t, n) {
                    if ("" === e) return null;
                    let l = [],
                        i = [];
                    return (
                        tY.Ay.queryStickers([e], !0)
                            .map((e) => {
                                let { sticker: t } = e;
                                return t;
                            })
                            .forEach((e) => {
                                let r = (0, eb.W$)(e, t, n);
                                r === eb.Ux.SENDABLE ? l.push(e) : r === eb.Ux.SENDABLE_WITH_PREMIUM && i.push(e);
                            }),
                        { sendable: l, sendableWithPremium: i }
                    );
                })(S, I, r),
            [S, I, r],
        ),
        R = (0, D.Gc)(),
        O = (0, D.UT)(),
        L = (0, d.cf)([U.A], () => U.A.getAllGuildStickers()),
        { sendable: w = [], sendableWithPremium: M = [] } = k ?? {},
        P = w.length + M.length,
        V = i.useCallback(
            (e) => {
                ("" === S ? (0, eu.ry)(e) : (0, eu.nQ)(e, S, P), s(e.sticker, ec.D6.STICKER_PICKER));
            },
            [s, S, P],
        ),
        W = null != v && v > ne,
        {
            rowCount: B,
            rowCountBySection: K,
            stickersGrid: J,
            gutterWidth: el,
            columnCounts: ei,
        } = (0, D._c)({
            filteredStickers: k,
            stickersCategories: b,
            collapsedStickersCategories: j,
            collapsePremiumSearchSection: u && j.has(tK),
            listWidth: v,
            listPaddingRight: nn,
            stickerNodeMargin: W ? nl : ni,
            stickerNodeWidth: W ? na : no,
        }),
        {
            getItemProps: er,
            getRowProps: es,
            gridContainerProps: em,
            handleGridContainerKeyDown: ef,
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
                u = (0, G.p)(),
                c = i.useCallback(
                    (e) => {
                        o(e, u);
                    },
                    [o, u],
                ),
                d = i.useCallback(
                    (e, t) => {
                        a(e, t, eh.t.GRID_NAVIGATOR_EVENT);
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
                } = (0, Q.Ff)({
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
                                l !== eh.t.GRID_NAVIGATOR_EVENT && h({ type: ed.n.SET_FOCUSED_POSITION, x: t, y: n });
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
            columnCounts: ei,
            stickersListRef: g,
            stickersGrid: J,
            onGridItemSelect: i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case ec.op.CREATE_STICKER:
                            (en.default.track(_.HAw.OPEN_MODAL, { type: _.JJy.CREATE_STICKER_MODAL, location: c }),
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
                        case ec.op.STICKER:
                            if (null == e.sticker) break;
                            tb({ descriptor: e, currentUser: I, channel: r, onSelect: V });
                    }
                },
                [c, I, r, V],
            ),
            store: q.bM,
            setInspectedStickerPosition: q.bM.setInspectedExpressionPosition,
            gridNavigatorId: eZ.lq,
        });
    function eg() {
        let e = r.getGuildId(),
            n = [];
        null !== e && (n = U.A.getStickersByGuildId(e) ?? []);
        let l = 0;
        (null != L &&
            [...L.values()].forEach((e) => {
                l += e.length;
            }),
            (0, eu.p4)({
                containerWidth: t,
                favoriteStickers: R,
                frequentlyUsedStickers: O,
                guildStickers: n,
                stickersTotal: l,
            }));
    }
    (i.useEffect(
        () => () => {
            (q.bM.resetStoreState(), eo(!1));
        },
        [],
    ),
        i.useEffect(() => {
            ("" === C.current && "" !== S && (0, eu.Fg)(), (C.current = S));
        }, [S]),
        i.useEffect(() => {
            0 === P ? nu(S) : nc(S, P, y);
        }, [S, P, y]),
        i.useLayoutEffect(() => {
            x.current?.focus();
        }, []));
    let ex = i.useCallback(() => {
        (a(),
            en.default.track(_.HAw.PREMIUM_PROMOTION_OPENED, { location_section: _.JJy.STICKER_PICKER_UPSELL }),
            (0, Z.e)());
    }, [a]);
    return (0, l.jsxs)(z.f5, {
        value: h,
        children: [
            !(f && N) &&
                (0, l.jsx)("div", {
                    className: t9.wx,
                    children: (0, l.jsx)(tX, { ref: x, onKeyDown: ef, stickersListRef: g, channel: r }),
                }),
            N
                ? (0, l.jsx)(eY, { className: t9.p$, onClose: a })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              ref: p,
                              className: t9.AD,
                              id: eZ.lq,
                              ...em,
                              children:
                                  null != v
                                      ? (0, l.jsx)(t$, {
                                            ref: g,
                                            collapsedStickersCategories: j,
                                            filteredStickers: k,
                                            getStickerItemProps: er,
                                            getStickerRowProps: es,
                                            gridWidth: v,
                                            gutterWidth: el,
                                            isUsingKeyboardNavigation: ep,
                                            onSelectSticker: V,
                                            rowCount: B,
                                            rowCountBySection: K,
                                            stickersCategories: b,
                                            stickersGrid: J,
                                            channel: r,
                                        })
                                      : null,
                          }),
                          (0, l.jsx)(eW, { stickersListRef: g, channel: r }),
                      ],
                  }),
            E && (u ? (0, l.jsx)(t2, { onUpsellClicked: a }) : (0, l.jsx)(t4, { onLearnMore: ex })),
        ],
    });
}
let nh = function (e) {
    let { ref: t, ...n } = e;
    return (
        (0, D.XQ)(),
        (0, l.jsx)("div", {
            className: t9.iE,
            id: eZ.GX,
            "aria-labelledby": eZ.LD,
            role: "tabpanel",
            children: n.isLoading ? (0, l.jsx)(K.y, { className: t9.Mz }) : (0, l.jsx)(nd, { ...n, ref: t }),
        })
    );
};
var nm = n(964404),
    nf = n(712687),
    np = n(625494),
    ng = n(49999),
    nx = n(732139),
    nE = n(307731),
    nS = n(818625);
let ny = 498 + nx.as.MEDIUM,
    nC = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: r = !1, "aria-controls": a, ...o } = e;
        return (0, l.jsx)(f.D, {
            role: "tab",
            autoFocus: r,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                (y.Ay.trackWithMetadata(_.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, $.U)(i));
            },
            "aria-current": t ? "page" : void 0,
            className: s()(n, nS.oi, nS.pc, { [nS.Mv]: t }),
        });
    }),
    nA = i.memo(function (e) {
        let t,
            {
                positionTargetRef: n,
                hideGifFavorites: r,
                onSelectGIF: a,
                onSelectEmoji: f,
                onSelectSticker: b,
                onSelectSound: N,
                channel: v,
                type: T,
                position: j,
                align: k,
                positionLayerClassName: V,
                closeOnModalOuterClick: W = !1,
                parentModalKey: F,
            } = e,
            B = i.useRef(null),
            K = i.useRef(!1),
            G = i.useRef(null),
            H = i.useRef(null),
            { drawerWidth: z, handleDrawerResizeHandleMouseDown: q } = (function (e) {
                let { positionContainerRef: t, drawerRef: n, orientation: l } = e,
                    r = (0, d.bG)([nm.Ay], () => nm.Ay.expressionPickerWidth),
                    [s, a] = i.useState(window.innerWidth),
                    [u, c] = i.useState(r ?? eT.wp.MIN),
                    h = i.useMemo(() => {
                        switch (u) {
                            case eT.wp.MIN:
                                return 498;
                            case eT.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    m = i.useCallback(
                        (e) => {
                            let t = e >= s ? eT.wp.MAX : e <= 498 ? eT.wp.MIN : e;
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
                positionContainerRef: B,
                drawerRef: H,
                orientation: "left" === k ? S.R.HORIZONTAL_RIGHT : S.R.HORIZONTAL_LEFT,
            }),
            Q = (0, $.RQ)((e) => e.activeView),
            Z = (0, D.ZO)(v),
            { renderWindow: J, windowDispatch: X } = i.useContext(w.Ay),
            Y = (0, d.bG)([U.A], () => !U.A.hasLoadedStickerPacks),
            ee = (0, M.tj)({ location: "expression_picker" }),
            [et, en] = i.useState(!1),
            el = (0, d.bG)([nf.A], () => nf.A.isOpen()),
            ei = null != F,
            er = (0, m.useIsModalAtTop)(F ?? ""),
            es = T.gifs?.allowSending && !u.Fr && null != a,
            ea = T.stickers?.allowSending && null != b,
            eo = !T.expressionPicker?.onlyEmojis && (es || ea),
            eu = eo && !et,
            ec =
                ((t = (0, I.H)("expression_picker")),
                i.useEffect(() => {
                    t && R();
                }, [t]),
                t),
            ed = i.useCallback(
                (e) => {
                    if ((!ei && (0, m.hasAnyModalOpen)()) || (ei && !(er && W)) || el || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + eT.VQ)) return;
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
                    (0, $.v8)();
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && np._.dispatchToLastSubscribed(_.jej.TEXTAREA_FOCUS);
                },
                [W, er, ei, el],
            ),
            eh = i.useCallback(() => {
                (0, $.v8)();
            }, []);
        (i.useLayoutEffect(() => {
            function e() {
                Q === eT.kx.GIF && (0, $.v8)();
            }
            return (
                J.addEventListener("mousedown", ed),
                J.addEventListener("contextmenu", ed),
                X.subscribe(_.jej.POPOUT_CLOSE, eh),
                np._.subscribe(_.jej.CLOSE_GIF_PICKER, e),
                () => {
                    (J.removeEventListener("mousedown", ed),
                        J.removeEventListener("contextmenu", ed),
                        X.unsubscribe(_.jej.POPOUT_CLOSE, eh),
                        np._.unsubscribe(_.jej.CLOSE_GIF_PICKER, e));
                }
            );
        }, [Q, eh, ed, J, X]),
            (0, p.tj)(B));
        let [em, ef] = (0, C.kn)(ee ? [h.M.SOUNDMOJI_BADGE] : []),
            [ep, eg] = i.useState(!1);
        (i.useEffect(() => {
            Q === eT.kx.SOUNDBOARD && eg(!0);
        }, [Q]),
            i.useEffect(
                () => () => {
                    ep && ef(ng.i.TAKE_ACTION);
                },
                [ep, ef],
            ),
            i.useEffect(() => {
                (0, $.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!ei && (0, m.hasAnyModalOpen)()) || (ei && !er)) && (0, $.v8)();
            }, [er, ei]),
            i.useEffect(() => {
                null != H.current &&
                    !K.current &&
                    (Q === eT.kx.EMOJI
                        ? G?.current?.onPickerOpen != null && (G?.current?.onPickerOpen(), (K.current = !0))
                        : Q === eT.kx.STICKER
                          ? G?.current?.onPickerOpen == null || Y || (G?.current?.onPickerOpen(), (K.current = !0))
                          : (y.Ay.trackWithMetadata(_.HAw.EXPRESSION_PICKER_OPENED, {
                                width: H.current.offsetWidth,
                                tab: Q,
                                badged: !1,
                            }),
                            (K.current = !0)));
            }));
        let ex = i.useCallback((e, t) => N?.(e, "emoji_picker", t), [N]),
            eE = i.useCallback((e, t) => N?.(e, "soundboard_picker", t), [N]),
            eS = T.soundmoji?.allowSending === !0 && null != N,
            ey = "left" === k ? "right" : "left",
            eC = null != V ? V : "left" === k ? nS.sj : nS.Jg,
            eA = es
                ? (0, l.jsx)(nC, {
                      id: nx.g9,
                      "aria-controls": nx.ni,
                      "aria-selected": Q === eT.kx.GIF,
                      isActive: Q === eT.kx.GIF,
                      viewType: eT.kx.GIF,
                      children: ej.intl.string(ej.t["6gUTsS"]),
                  })
                : null,
            eI = ea
                ? (0, l.jsx)(nC, {
                      id: eZ.LD,
                      "aria-controls": eZ.GX,
                      "aria-selected": Q === eT.kx.STICKER,
                      isActive: Q === eT.kx.STICKER,
                      autoFocus: !Z,
                      viewType: eT.kx.STICKER,
                      children: (0, l.jsx)("div", { className: nS.dG, children: ej.intl.string(ej.t.nf1s3u) }),
                  })
                : null,
            eb = (0, l.jsx)(nC, {
                id: nx.k1,
                "aria-controls": nx.Do,
                "aria-selected": Q === eT.kx.EMOJI,
                isActive: Q === eT.kx.EMOJI,
                viewType: eT.kx.EMOJI,
                children: ej.intl.string(ej.t.Xu3wE3),
            });
        return (0, l.jsx)(E.A, {
            section: _.JJy.EXPRESSION_PICKER,
            children: (0, l.jsx)(L.nE, {
                className: s()(nS.T8, eC),
                targetRef: n,
                position: j,
                align: k,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, l.jsx)("section", {
                        className: s()(nS.V6, { [nS.D0]: !eo }),
                        ref: B,
                        role: "dialog",
                        "aria-label": ej.intl.string(ej.t.Utlwvi),
                        children: t
                            ? (0, l.jsxs)("div", {
                                  className: nS.jP,
                                  style: { width: null == z ? void 0 : z, [k]: 0 },
                                  ref: H,
                                  children: [
                                      (0, l.jsx)("div", { className: nS.Di, onMouseDown: q, style: { [ey]: -2 } }),
                                      (0, l.jsxs)("div", {
                                          className: s()(nS.FG, { [nS.$D]: et }),
                                          children: [
                                              eu
                                                  ? (0, l.jsx)("nav", {
                                                        className: nS.C$,
                                                        children: (0, l.jsxs)("div", {
                                                            className: nS.CT,
                                                            role: "tablist",
                                                            "aria-label": ej.intl.string(ej.t["2j4Vgd"]),
                                                            children: [
                                                                eA,
                                                                eI,
                                                                eb,
                                                                ee &&
                                                                    eS &&
                                                                    (0, l.jsx)(nC, {
                                                                        id: nx.N6,
                                                                        "aria-controls": nx.AA,
                                                                        "aria-selected": Q === eT.kx.SOUNDBOARD,
                                                                        isActive: Q === eT.kx.SOUNDBOARD,
                                                                        viewType: eT.kx.SOUNDBOARD,
                                                                        children: (0, l.jsxs)("div", {
                                                                            className: nS.sd,
                                                                            children: [
                                                                                ej.intl.string(ej.t.EHlAMc),
                                                                                null != em &&
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
                                              Q === eT.kx.STICKER && ea
                                                  ? (0, l.jsx)(nh, {
                                                        isLoading: Y,
                                                        channel: v,
                                                        containerWidth: z,
                                                        onSelectSticker: b,
                                                        closePopout: eh,
                                                        ref: (e) => {
                                                            G.current = e;
                                                        },
                                                    })
                                                  : null,
                                              Q === eT.kx.GIF && es
                                                  ? (0, l.jsx)(O.A, {
                                                        onSelectGIF: a,
                                                        hideFavorites: r,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              Q === eT.kx.EMOJI || T.expressionPicker?.onlyEmojis === !0
                                                  ? (0, l.jsx)(A.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: v,
                                                        containerWidth: z,
                                                        emojiSize: null != z && z < ny ? nx.as.MEDIUM : nx.as.LARGE,
                                                        pickerIntention:
                                                            T.expressionPicker?.emojiIntention ??
                                                            nE.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == v || null != v.guild_id,
                                                        closePopout: eh,
                                                        onSelectEmoji: f,
                                                        onSelectSoundmoji: ex,
                                                        ref: (e) => {
                                                            G.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            T.soundmoji?.allowSending === !0,
                                                        isViewingEmojiPacks: et,
                                                        onViewEmojiPacksChange: ec ? en : void 0,
                                                    })
                                                  : null,
                                              Q === eT.kx.SOUNDBOARD
                                                  ? (0, l.jsx)("div", {
                                                        className: nS.z,
                                                        children: (0, l.jsx)(P.A, {
                                                            guildId: v.guild_id,
                                                            channel: v,
                                                            containerWidth: z,
                                                            onClose: eh,
                                                            onSelect: eE,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, l.jsx)("div", { className: nS.BG, children: e }),
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
