t.r(s), t.d(s, { default: () => sa });
var i = t(627968),
    n = t(64700),
    r = t(503698),
    a = t.n(r),
    l = t(284009),
    c = t.n(l),
    d = t(562708),
    o = t(575593),
    u = t(334279),
    m = t(702841),
    h = t(990078),
    x = t(462887),
    p = t(231723),
    j = t(935462),
    A = t(408278),
    g = t(972213),
    I = t(834730),
    v = t(430690),
    E = t(821609),
    N = t(318254),
    k = t(825484),
    R = t(534514),
    C = t(247928),
    f = t(331322),
    O = t(97808),
    _ = t(778712),
    T = t(652215),
    b = t(359778),
    S = t(245604),
    D = t(460905),
    P = t(736653),
    y = t(775602),
    M = t(793574),
    L = t(688810),
    B = t(139286),
    F = t(262295),
    V = t(320095),
    w = t(963852),
    H = t(763754),
    U = t(20851),
    W = t(44120),
    z = t(465794),
    G = t(757036),
    Z = t(986687),
    $ = t(101058),
    q = t(84540),
    Q = t(836602),
    Y = t(903209),
    J = t(761705),
    K = t(371446),
    X = t(652165),
    ee = t(287809),
    es = t(174459),
    et = t(975571),
    ei = t(428262),
    en = t(580630),
    er = t(859040),
    ea = t(440938),
    el = t(4227),
    ec = t(298072),
    ed = t(993408),
    eo = t(640634),
    eu = t(940980),
    em = t(503089),
    eh = t(13875),
    ex = t(495565),
    ep = t(740076),
    ej = t(466459),
    eA = t(442759),
    eg = t(395068),
    eI = t(966619),
    ev = t(780898),
    eE = t(344346),
    eN = t(139136),
    ek = t(395744),
    eR = t(623373),
    eC = t(660653),
    ef = t(536572),
    eO = t(49620),
    e_ = t(586445),
    eT = t(854818),
    eb = t(177366),
    eS = t(375708),
    eD = t(674019);
function eP(e) {
    let { product: s, isDarkText: t = !1, isOrbExclusive: n = !1 } = e,
        r = (function (e, s) {
            if (s) return eS.intl.string(eS.t["0TmQRG"]);
            switch (e) {
                case o.R.AVATAR_DECORATION:
                    return eS.intl.string(eS.t["7v0T9P"]);
                case o.R.PROFILE_EFFECT:
                    return eS.intl.string(eS.t.wR5wOo);
                case o.R.PROFILE_FRAME:
                    return eS.intl.string(eS.t.GWrZOd);
                case o.R.NAMEPLATE:
                    return eS.intl.string(eS.t.x5CoXR);
            }
            return null;
        })(s.type, n);
    return null === r
        ? null
        : (0, i.jsx)(I.E, { variant: "text-xxs/normal", className: a()([eD.kL, t ? eD.ap : eD.aK]), children: r });
}
var ey = t(203312),
    eM = t(878112),
    eL = t(366174),
    eB = t(337817),
    eF = t(452255),
    eV = t(641405),
    ew = t(231540),
    eH = t(110629),
    eU = t(184659),
    eW = t(561769);
let ez = (e) => {
    let { skuId: s, overrideVariantIndex: t, className: n } = e,
        r = (0, eW.Vm)(s),
        a = (0, ec.Q)(r);
    return null != r && (0, eR.B1)(r)
        ? (0, i.jsx)(I.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: n,
              lineClamp: 1,
              children: r.variants[t ?? a].variantLabel,
          })
        : null;
};
var eG = t(661847),
    eZ = t(846957),
    e$ = t(293477),
    eq = t(139146),
    eQ = t(929283),
    eY = t(827066),
    eJ = t(525723),
    eK = t(212407),
    eX = t(347722),
    e0 = t(935094),
    e5 = t(57020),
    e1 = t(61750),
    e4 = t(758836),
    e7 = t(788868),
    e8 = t(818348),
    e6 = t(127157);
let e2 = (e) => {
        let { item: s, product: t, user: n } = e,
            r = (0, ed.aw)(t),
            { firstAvatarDecoration: a } = (0, eA.f5)(t);
        switch (s.type) {
            case o.R.AVATAR_DECORATION:
                return (0, i.jsx)("div", {
                    className: r ? e6.X2 : e6.h1,
                    children: (0, i.jsx)(eQ.i, { user: n, item: s, isHighlighted: !0 }),
                });
            case o.R.PROFILE_EFFECT:
                return (0, i.jsx)("div", {
                    className: r ? e6.ME : e6.sm,
                    children: (0, i.jsx)(eN.A, {
                        skuId: s.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case o.R.PROFILE_FRAME:
                return (0, i.jsx)("div", { className: e6.ob, children: (0, i.jsx)(ek.A, { frame: s }) });
            case o.R.NAMEPLATE:
                return (0, i.jsx)("div", {
                    className: e6.Dz,
                    children: (0, i.jsx)(eE.A, {
                        className: e6.M4,
                        nameplate: s,
                        user: n,
                        nameplatePreviewSize: "large",
                        pendingAvatarDecoration: a,
                        isHighlighted: !0,
                        hideDecorators: !0,
                    }),
                });
            default:
                return null;
        }
    },
    e3 = (e) => {
        let { product: s, user: t, activeSlide: n = 0 } = e,
            r = s.items.length;
        return (0, i.jsx)("div", {
            className: e6.g4,
            children: (0, i.jsx)(v.t, {
                activeSlide: String(n),
                children: s.items.map((e, n) => {
                    let a = String(n),
                        l = null != s.bundledProducts ? s.bundledProducts[n] : void 0,
                        c = `(${n + 1}/${r})`;
                    return (0, i.jsx)(
                        v.q,
                        {
                            id: a,
                            children: (0, i.jsxs)("div", {
                                className: e6.Kg,
                                children: [
                                    (0, i.jsx)(e2, { item: e, product: s, user: t }),
                                    (0, i.jsxs)(I.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: e6.gx,
                                        children: [l?.name, " ", c],
                                    }),
                                ],
                            }),
                        },
                        a,
                    );
                }),
            }),
        });
    },
    e9 = (e) => {
        let { product: s, user: t, activeSlide: n } = e;
        return (0, ed.aw)(s)
            ? (0, i.jsx)(e3, { product: s, user: t, activeSlide: n })
            : (0, e4.pQ)(s.skuId)
              ? (0, i.jsx)(eZ.B, { animationState: "on_hover", product: s })
              : s.items.length > 0
                ? (0, i.jsx)(e2, { item: s.items[0], product: s, user: t })
                : null;
    },
    se = (e) => {
        let { skuId: s } = e;
        return (0, e4.EZ)(s)
            ? (0, i.jsx)(I.E, {
                  variant: "text-sm/normal",
                  className: e6.CU,
                  children: eS.intl.format(eS.t.Q1scdE, {
                      helpdeskArticle: et.A.getArticleURL(T.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    ss = (e) => {
        let {
                product: s,
                user: t,
                category: r,
                shouldCheckoutWithOrbs: l,
                tab: d,
                onClose: u,
                returnRef: p,
                previewingVariantIndexProps: j,
                selectedVariantIndex: A,
                activeBundleSlide: g,
                giftRecipient: v,
                giftingOrigin: O,
                onTrackClick: _,
            } = e,
            { analyticsLocations: b } = (0, L.Ay)(),
            { cardId: S, sessionId: D, tilePosition: y } = (0, ea.uM)() ?? {},
            B = (0, G.L)(e7.PremiumTypes.TIER_2),
            F = (0, ed.xM)(t),
            { previewingVariantIndex: V, handleEntering: w, handleLeaving: H } = j,
            U = (0, eY.q)(s, V),
            Z = (0, eR.rb)(s, A);
        c()(null != Z, "Selected product should not be null");
        let $ = (0, eh.Do)("CollectiblesShopProductDetailsModal") && Z.type === o.R.PROFILE_FRAME,
            Q = ei.Ay.canUseShopDiscounts(t) || $,
            Y = (0, ej.h)(s),
            { isPurchased: ee, isPartiallyOwnedBundle: es } = (0, ej.h)(Z),
            { isDisabled: et, disabledReason: ec } = (0, ep.I)(Z.skuId),
            em = (0, ed.Zu)({ product: Z, isPartiallyOwnedBundle: es, isPurchased: ee }),
            eI = (0, m.bG)([el.A], () => el.A.isClaiming === Z?.skuId),
            ev = (0, P.Ay)(),
            eE = (0, x.M)(ev),
            eN = (0, ed.G0)(Z),
            ek = (0, ed.yt)(Z, T.lid.DEFAULT),
            eC = ek?.amount === 0,
            { firstAvatarDecoration: e_ } = (0, eA.f5)(U ?? Z),
            eT = n.useMemo(() => (0, ed.fT)(Z, Q), [Z, Q]),
            eb = (0, ef.VG)(s),
            eD = (0, eX.X)(Z),
            { enabled: ew } = (0, K.Z)({ location: "collectibles_shop_product_details_modal" }),
            eU = (0, ex.r)(Z, !1),
            eZ = (0, eJ.V_)(s),
            eq = null != eZ,
            eQ = (s.variants?.length ?? 0) > 8,
            eK = (0, eu.W)("CollectiblesShopProductDetailsModal"),
            e0 = d === e4.G2.ORBS && l ? eW.Hi.ORBS : eK ? eW.Hi.FIAT : void 0,
            e2 = (0, eo.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: e3,
                isOrbExclusive: ss,
                hasSufficientOrbs: st,
            } = (0, e5.F)({ product: Z, hasShopDiscount: Q, hasDiscountOffer: eq, prioritizedCurrency: e0 }),
            si = (0, eg.A)({ location: "CollectiblesShopProductDetailsModal", product: Z }),
            sn = n.useMemo(() => e3.some((e) => e.currency === e8.Yr.DISCORD_ORB), [e3]);
        (0, J.W)({ disableFetch: !sn });
        let sr = n.useCallback(() => {
            _(e4.sH.BUY_WITH_FIAT),
                (0, W.A)({ skuId: Z.skuId, analyticsLocations: b, onClose: (e) => (e ? u() : (0, e8.tE)()) });
        }, [b, u, Z.skuId, _]);
        n.useEffect(() => {
            if (null != e_) return (0, q.p)({ avatarDecoration: e_ }), () => (0, q.p)({ avatarDecoration: void 0 });
        }, [e_]);
        let sa = function (e) {
                let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = (0, i.jsx)(z.A, {
                        subscriptionTier: e7.pe.TIER_2,
                        fullWidth: !0,
                        buttonTextOverride: e,
                        onClick: () => {
                            _(e4.sH.UNLOCK_WITH_NITRO), (0, eF.M)();
                        },
                        onSubscribeModalClose: () => {
                            (0, eF.t)({
                                product: Z,
                                category: r,
                                shouldCheckoutWithOrbs: l,
                                returnRef: p,
                                analyticsLocations: b,
                                tab: d,
                                giftRecipient: v,
                                giftingOrigin: O,
                                cardId: S,
                                sessionId: D,
                                tilePosition: y,
                            });
                        },
                    });
                return s ? (0, i.jsx)(L.f5, { value: [...b, M.A.PROFILE_FRAMES_EA_MARKETING], children: t }) : t;
            },
            sl = s.hideBadge;
        return (0, i.jsxs)("div", {
            className: e6.qA,
            children: [
                (0, i.jsx)("div", { className: e6.gn, children: !sl && (0, i.jsx)(ey.A, { category: r }) }),
                (0, i.jsx)(e9, { product: U ?? Z, user: t, activeSlide: g }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: e6.h_,
                            children: [
                                !sl && $
                                    ? (0, i.jsx)("div", {
                                          className: e6.LM,
                                          children: (0, i.jsx)(eH.A, {
                                              location: "CollectiblesShopProductDetailsModal",
                                          }),
                                      })
                                    : (0, i.jsx)(eP, { product: Z, isDarkText: !eE, isOrbExclusive: ss }),
                                (0, i.jsx)(R.D, { variant: "heading-xl/extrabold", className: e6.v7, children: eb }),
                                (0, i.jsx)(I.E, { variant: "text-sm/normal", children: eU }),
                                (0, i.jsx)(se, { skuId: Z.skuId }),
                                Y.isPurchased || Y.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(eO.c, { className: e6.On, isPartiallyPurchased: es })
                                    : eN
                                      ? (0, i.jsx)(I.E, {
                                            variant: "text-md/semibold",
                                            className: e6.On,
                                            children: eS.intl.string(eS.t.rt69oo),
                                        })
                                      : ew
                                        ? (0, i.jsx)(e$.B, {
                                              prices: e3,
                                              product: Z,
                                              hasShopDiscount: Q,
                                              discountSource: F,
                                              discount: eT,
                                              hasSufficientOrbs: st,
                                              isProductDisabled: et,
                                              discountOfferAmount: eZ,
                                              onTrackClick: _,
                                          })
                                        : ss
                                          ? null
                                          : (0, i.jsxs)("div", {
                                                className: e6.pw,
                                                children: [
                                                    (0, i.jsx)(eL.A, {
                                                        product: Z,
                                                        discount: eT,
                                                        hasShopDiscount: Q,
                                                        discountSource: F,
                                                        hideStrikethroughPrice: !Q || eq,
                                                        discountIconDisplayMode: "tooltip",
                                                        discountIconSize: "xs",
                                                        discountOfferAmount: eZ,
                                                    }),
                                                    Q || eq ? null : (0, i.jsx)(eB.A, { product: Z, onTrackClick: _ }),
                                                ],
                                            }),
                            ],
                        }),
                        (0, eR.B1)(s) &&
                            (0, i.jsx)(C.M, {
                                children: (0, i.jsxs)("div", {
                                    className: a()(e6.Oj, { [e6.OJ]: eQ }),
                                    children: [
                                        eQ &&
                                            (0, i.jsx)(ez, {
                                                skuId: s.skuId,
                                                overrideVariantIndex: V,
                                                className: e6.L$,
                                            }),
                                        (0, i.jsx)(eG.A, {
                                            skuId: s.skuId,
                                            onVariantEnter: w,
                                            onVariantExit: H,
                                            wrap: !0,
                                        }),
                                        !eQ &&
                                            (0, i.jsx)(ez, {
                                                skuId: s.skuId,
                                                overrideVariantIndex: V,
                                                className: e6.L$,
                                            }),
                                    ],
                                }),
                            }),
                        null !== ec && (0, i.jsx)(I.E, { variant: "text-xs/normal", className: e6.H$, children: ec }),
                        (0, i.jsx)(f.B, {
                            direction: "vertical",
                            gap: 8,
                            children:
                                !eN || B || eC
                                    ? em
                                        ? ee
                                            ? eD
                                                ? (0, i.jsxs)(k.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, i.jsx)(eV.A, {
                                                              product: Z,
                                                              onSuccess: u,
                                                              onTrackClick: _,
                                                          }),
                                                          (0, i.jsx)(eM.A, {
                                                              primary: !0,
                                                              product: Z,
                                                              onSuccess: u,
                                                              giftRecipient: v,
                                                              giftingOrigin: O,
                                                              onTrackClick: _,
                                                          }),
                                                      ],
                                                  })
                                                : (0, i.jsx)(eV.A, { product: Z, onSuccess: u, onTrackClick: _ })
                                            : si
                                              ? sa(eS.intl.string(eS.t.IvmZVF), !0)
                                              : eN
                                                ? (0, i.jsx)(E.$, {
                                                      loading: eI,
                                                      loadingStartedLabel: eS.intl.string(eS.t["TYw+9s"]),
                                                      loadingFinishedLabel: eS.intl.string(eS.t.Pg1UP5),
                                                      onClick: async () => {
                                                          _(e4.sH.ADD_TO_COLLECTION),
                                                              await (0, er.iJ)(Z.skuId),
                                                              u(),
                                                              (0, e1.A)({
                                                                  product: Z,
                                                                  analyticsLocations: b,
                                                                  purchaseType: e4.gs.PREMIUM_PURCHASE,
                                                              });
                                                      },
                                                      text: eS.intl.string(eS.t.zp6caO),
                                                      fullWidth: !0,
                                                  })
                                                : (0, i.jsx)(i.Fragment, {
                                                      children: e3.map((e, s) => {
                                                          let t,
                                                              n = 0 === s;
                                                          if (e.currency === e8.Yr.DISCORD_ORB) {
                                                              let s, t, r, a;
                                                              return (
                                                                  (s = et
                                                                      ? eS.intl.string(eS.t.cTdr3x)
                                                                      : eS.intl.string(eS.t.zqh7ZM)),
                                                                  (t = !st || et),
                                                                  (r = eS.intl.formatToPlainString(eS.t.yi41qQ, {
                                                                      orbPrice: e.amount,
                                                                  })),
                                                                  (a = t ? `${r}, ${s}` : r),
                                                                  (0, i.jsx)(h.m, {
                                                                      position: "top",
                                                                      text: s,
                                                                      shouldShow: t,
                                                                      "aria-label": !1,
                                                                      children: (0, i.jsx)(E.$, {
                                                                          variant: n ? "primary" : "secondary",
                                                                          onClick: () => {
                                                                              _(e4.sH.BUY_WITH_ORBS),
                                                                                  (0, X.B4)({
                                                                                      skuId: Z.skuId,
                                                                                      onComplete: (e) => {
                                                                                          (0, er.gB)(),
                                                                                              u(),
                                                                                              (0, e1.A)({
                                                                                                  product: Z,
                                                                                                  analyticsLocations: b,
                                                                                                  itemConsumed:
                                                                                                      e
                                                                                                          ?.entitlements?.[0]
                                                                                                          ?.consumed,
                                                                                                  purchaseType:
                                                                                                      e4.gs.ORB,
                                                                                              });
                                                                                      },
                                                                                      analyticsLocations: b,
                                                                                  });
                                                                          },
                                                                          disabled: t,
                                                                          "aria-label": a,
                                                                          text: eS.intl.format(
                                                                              e2 ? eS.t.JC15qj : eS.t.lOtBOI,
                                                                              {
                                                                                  orbPrice: e.amount,
                                                                                  orbIconHook: () =>
                                                                                      (0, i.jsx)(N.C, {
                                                                                          className: e6.fN,
                                                                                          size: "sm",
                                                                                          color: "currentColor",
                                                                                      }),
                                                                              },
                                                                          ),
                                                                          fullWidth: !0,
                                                                      }),
                                                                  })
                                                              );
                                                          }
                                                          return (
                                                              (t = ((e) => {
                                                                  switch (e.type) {
                                                                      case o.R.BUNDLE:
                                                                          return eS.intl.string(eS.t.V1AWw0);
                                                                      case o.R.PROFILE_EFFECT:
                                                                          return eS.intl.string(eS.t.kAeDcK);
                                                                      case o.R.NAMEPLATE:
                                                                          return eS.intl.string(eS.t.H3vhqU);
                                                                      case o.R.PROFILE_FRAME:
                                                                          return eS.intl.string(eS.t.BlSW1e);
                                                                      case o.R.AVATAR_DECORATION:
                                                                      default:
                                                                          return eS.intl.string(eS.t.AQ0Veg);
                                                                  }
                                                              })(Z)),
                                                              eq
                                                                  ? (t = eS.intl.formatToPlainString(eS.t["5U5RB5"], {
                                                                        discountOfferAmount: eZ,
                                                                    }))
                                                                  : ew &&
                                                                    (t = eS.intl.formatToPlainString(eS.t["cNSL/j"], {
                                                                        price: (0, en.$g)(e.amount, e.currency),
                                                                    })),
                                                              (0, i.jsxs)(k.e, {
                                                                  wrap: !1,
                                                                  fullWidth: !0,
                                                                  children: [
                                                                      (0, i.jsx)(E.$, {
                                                                          variant: n ? "primary" : "secondary",
                                                                          onClick: sr,
                                                                          text: t,
                                                                          fullWidth: !0,
                                                                      }),
                                                                      eD &&
                                                                          (0, i.jsx)(eM.A, {
                                                                              primary: n,
                                                                              product: Z,
                                                                              onSuccess: u,
                                                                              giftRecipient: v,
                                                                              giftingOrigin: O,
                                                                              onTrackClick: _,
                                                                          }),
                                                                  ],
                                                              })
                                                          );
                                                      }),
                                                  })
                                        : eD
                                          ? (0, i.jsx)(eM.A, {
                                                primary: !0,
                                                product: Z,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: v,
                                                giftingOrigin: O,
                                                onTrackClick: _,
                                            })
                                          : null
                                    : sa(eS.intl.string(eS.t.sEAnVH)),
                        }),
                        (0, i.jsx)(I.E, {
                            className: a()(e6.ed, !eE && e6.un),
                            variant: "text-xxs/normal",
                            children: eN && !ee ? eS.intl.string(eS.t.nKdAlO) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    st = (e) => {
        let { user: s, innerClassName: t } = e;
        return (0, i.jsx)("div", {
            className: e6.mV,
            children: (0, i.jsx)(F.A, {
                avatar: (0, i.jsx)(O.eu, {
                    src: s.avatarSrc,
                    size: _._3.SIZE_32,
                    "aria-label": s.name,
                    status: T.clD.ONLINE,
                }),
                name: s.name,
                innerClassName: a()(e6.$L, t),
            }),
        });
    },
    si = (e) => {
        let { user: s, nameplate: t, avatarDecoration: n } = e,
            r = (0, ev.Ov)();
        return (0, i.jsx)("div", {
            className: e6.nJ,
            role: "img",
            "aria-label": eS.intl.string(eS.t.SZeUdR),
            children: (0, i.jsxs)(C.M, {
                children: [
                    (0, i.jsx)(st, { user: r.mallow, innerClassName: e6.ab }),
                    (0, i.jsxs)(I.E, {
                        variant: "text-sm/semibold",
                        className: e6.OS,
                        children: [eS.intl.string(eS.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, i.jsx)(st, { user: r.phibi, innerClassName: e6.e9 }),
                    (0, i.jsx)("div", {
                        className: e6.mV,
                        children: (0, i.jsx)(eE.A, {
                            className: e6.M4,
                            innerClassName: e6.e9,
                            user: s,
                            nameplate: t,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: n,
                            hideDecorators: !0,
                        }),
                    }),
                    (0, i.jsx)(st, { user: r.locke, innerClassName: e6.e9 }),
                    (0, i.jsxs)(I.E, {
                        variant: "text-sm/semibold",
                        className: e6.OS,
                        children: [eS.intl.string(eS.t["NG43/6"]), " - 12"],
                    }),
                    (0, i.jsx)(st, { user: r.boom, innerClassName: e6.bD }),
                    (0, i.jsx)(st, { user: r.cherry, innerClassName: e6.bD }),
                ],
            }),
        });
    },
    sn = (e) => {
        let { product: s, user: t, activeBundleSlide: n, isTransitioning: r } = e,
            l = (0, m.bG)([y.A], () => y.A.useReducedMotion),
            c = ei.Ay.canUsePremiumProfileCustomization(t),
            { pendingAvatar: d, ...u } = (0, m.cf)([Q.A], () => Q.A.getPendingChanges()),
            h = (0, $.V7)({ userId: t.id, image: d }),
            x = s.type === o.R.AVATAR_DECORATION,
            [p] = s.items,
            {
                firstAvatarDecoration: j,
                firstProfileEffect: A,
                firstNameplate: g,
                firstProfileFrame: I,
            } = (0, eA.f5)(s),
            v = null != A,
            E = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(Z.A, {
                            ...u,
                            pendingAvatar: h,
                            user: t,
                            canUsePremiumCustomization: c,
                            pendingAvatarDecoration: j,
                            pendingProfileEffect: A,
                            pendingProfileFrame: I,
                            disabledInputs: !0,
                            hideMessageInput: !v,
                            hideCustomStatus: !0,
                            hideBioSection: x,
                            hideExampleButton: !0,
                            interactive: !1,
                            containerClassName: x ? e6.Bb : void 0,
                        }),
                        x && (0, i.jsx)(sr, { user: t }),
                    ],
                }),
            N = (e) => (0, i.jsx)(si, { user: t, nameplate: e, avatarDecoration: j });
        if (s.type === o.R.BUNDLE) {
            if (!(0, eC.Wb)(s))
                return (0, i.jsx)("div", {
                    className: e6.RA,
                    children: (0, i.jsx)("div", { className: e6.bo, children: E() }),
                });
            {
                let e = n ?? 0,
                    t = s.items[e],
                    c = s.items[Math.max(0, e - 1)],
                    d = c?.type !== t?.type && !l;
                return t.type === o.R.NAMEPLATE
                    ? (0, i.jsx)("div", { className: a()(e6.Zj, r && d ? e6.p2 : ""), children: N(t) })
                    : (0, i.jsx)("div", { className: a()(e6.Ak, r && d ? e6.p2 : ""), children: E() });
            }
        }
        return null != g
            ? (0, i.jsx)("div", { className: e6.Zj, children: N(g) })
            : (0, i.jsx)("div", { className: p?.type === o.R.AVATAR_DECORATION ? e6.RA : e6.Ak, children: E() });
    },
    sr = (e) => {
        let { user: s } = e,
            t = ((e) => {
                let { author: s } = e;
                return (0, V.rh)({
                    ...(0, w.Ay)({ author: s, channelId: "1337", content: eS.intl.string(eS.t.d5YwK5) }),
                    state: T.cmJ.SENT,
                    id: "0",
                });
            })({ author: s });
        return (0, i.jsx)("div", {
            role: "img",
            "aria-label": eS.intl.string(eS.t["TN+ZvB"]),
            children: (0, i.jsx)(C.M, {
                children: (0, i.jsxs)(b.Z, {
                    className: e6.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsx)(U.A, { className: e6.G5, author: (0, H.p_)(t), message: t }, t.id),
                        (0, i.jsxs)("div", {
                            className: e6.lG,
                            children: [
                                (0, i.jsx)(S.U, { size: "md", color: "currentColor", className: e6.hq }),
                                (0, i.jsx)(D.n, { size: "md", color: "currentColor", className: e6.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    sa = (e) => {
        let {
                transitionState: s,
                onClose: t,
                product: r,
                category: l,
                returnRef: h,
                analyticsSource: x,
                analyticsLocations: v,
                shouldCheckoutWithOrbs: E,
                tab: N,
                giftRecipient: k,
                giftingOrigin: R,
            } = e,
            C = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            f = (0, e0.f)(r),
            { previewingVariantIndex: O } = f,
            _ = (0, ec.Q)(r),
            b = (0, eY.q)(r, O),
            S = (0, eR.rb)(r, _);
        c()(null != S, "Selected product should not be null");
        let { analyticsLocations: D } = (0, L.Ay)([...v, M.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eb.Yr)(S.skuId);
        let P = (0, eK.U1)(l);
        n.useEffect(() => {
            null != C && (0, Y.A)(C.id, C.getAvatarURL(void 0, 80));
        }, [C]);
        let y = n.useMemo(() => (0, ed.V6)(r.type, r.skuId), [r.type, r.skuId]);
        n.useEffect(() => {
            es.default.track(T.HAw.OPEN_MODAL, {
                type: T.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: x,
                location_stack: D,
                sku_id: S.skuId,
                product_type: y,
            }),
                (0, er.RD)(S.skuId);
        }, [x, D, S.skuId, y]);
        let { cardId: F, sessionId: V, tilePosition: w } = (0, ea.uM)() ?? {},
            H = n.useMemo(() => (0, eR.v8)(r), [r]),
            U = (0, eI.R)({ skuId: S.skuId, productSkuIds: H, analyticsLocations: D });
        (0, B.A)({
            type: d.ImpressionTypes.MODAL,
            name: d.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: S.skuId,
                card_id: F,
                shop_session_id: V,
                position_in_section: w,
                product_sku_ids: H,
                location_stack: D,
            },
        });
        let W = (0, X.o6)(),
            z = s === p.ip.EXITING,
            G = (0, eJ.$R)(r),
            Z = G?.amount,
            $ = null != Z && (G?.discountId === e7.eR || G?.discountId === e7.Qz),
            { activeSlide: q, isTransitioning: Q } = (function (e) {
                let { slideCount: s, intervalMs: t = 3e3 } = e,
                    [i, r] = (0, n.useState)(0),
                    [a, l] = (0, n.useState)(!1),
                    c = (0, n.useCallback)(
                        (e) => {
                            a ||
                                e < 0 ||
                                e >= s ||
                                (l(!0),
                                setTimeout(() => {
                                    r(e), l(!1);
                                }, 300));
                        },
                        [a, s, 300],
                    );
                return (
                    (0, n.useEffect)(() => {
                        if (s <= 1) return;
                        let e = setInterval(() => {
                            c((i + 1) % s);
                        }, t);
                        return () => clearInterval(e);
                    }, [s, t, i, c]),
                    { activeSlide: i, isTransitioning: a }
                );
            })({ slideCount: n.useMemo(() => ((0, ed.aw)(S) ? S.items.length : 0), [S]), intervalMs: 5e3 }),
            J = (0, em.c)("product_details_modal");
        return null != C && (r.skuId !== u.j.PREMIUM_TIER_2_1_DAY || J)
            ? (0, i.jsx)(L.f5, {
                  value: D,
                  children: (0, i.jsxs)(j.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: e6.CR,
                      returnRef: h,
                      transitionState: s,
                      size: j.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, i.jsxs)(j.$m, {
                              "data-migration-pending": !0,
                              className: e6.jE,
                              children: [
                                  (0, i.jsx)(ss, {
                                      user: C,
                                      product: r,
                                      category: l,
                                      onClose: t,
                                      previewingVariantIndexProps: f,
                                      selectedVariantIndex: _,
                                      shouldCheckoutWithOrbs: E,
                                      tab: N,
                                      activeBundleSlide: q,
                                      giftRecipient: k?.id !== C.id ? k : void 0,
                                      giftingOrigin: k?.id !== C.id ? R : void 0,
                                      onTrackClick: U,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: a()(
                                          e6.i1,
                                          (0, e4.EZ)(S.skuId)
                                              ? e6.bF
                                              : S.type === o.R.AVATAR_DECORATION
                                                ? e6.Jq
                                                : e6.eF,
                                      ),
                                      style: { backgroundImage: `url(${P})` },
                                      children: [
                                          (0, e4.pQ)(r.skuId)
                                              ? r.skuId === e4.Dp.ORB_PROFILE_BADGE
                                                  ? W || z
                                                      ? null
                                                      : (0, i.jsx)(eU.z, { user: C })
                                                  : (0, e4.EZ)(r.skuId)
                                                    ? (0, i.jsx)(ew.I, {})
                                                    : (0, i.jsx)(eZ.B, { product: r, className: e6.Ms })
                                              : (0, i.jsx)(sn, {
                                                    user: C,
                                                    product: b ?? S,
                                                    activeBundleSlide: q,
                                                    isTransitioning: Q,
                                                }),
                                          (0, i.jsxs)("div", {
                                              className: e6.VG,
                                              children: [
                                                  (0, i.jsx)(eq.R, {
                                                      product: r,
                                                      selectedVariantIndex: _,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: U,
                                                  }),
                                                  (0, i.jsx)(e_.V, { skuId: S.skuId, tab: N, onTrackClick: U }),
                                                  (0, i.jsx)(A.K, {
                                                      "aria-label": eS.intl.string(eS.t.cpT0Cq),
                                                      onClick: () => {
                                                          U(e4.sH.CLOSE_DETAIL), t();
                                                      },
                                                      icon: g.d,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          $ &&
                              (0, i.jsx)(i.Fragment, {
                                  children: (0, i.jsxs)(j.jl, {
                                      "data-migration-pending": !0,
                                      className: e6.Hx,
                                      children: [
                                          (0, i.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: e6.OC,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: e6.do,
                                              children: [
                                                  (0, i.jsx)(I.E, {
                                                      variant: "text-sm/semibold",
                                                      className: e6.Q2,
                                                      children: eS.intl.format(eS.t["78ph4b"], {
                                                          discountOfferAmount: Z,
                                                      }),
                                                  }),
                                                  G?.expiresAt != null && (0, i.jsx)(eT.e, { endDate: G.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              })
            : null;
    };
