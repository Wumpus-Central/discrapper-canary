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
    A = t(935462),
    j = t(408278),
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
    F = t(139286),
    B = t(262295),
    w = t(320095),
    V = t(963852),
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
    eA = t(466459),
    ej = t(442759),
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
    eF = t(337817),
    eB = t(452255),
    ew = t(641405),
    eV = t(231540),
    eH = t(110629),
    eU = t(184659),
    eW = t(561769),
    ez = t(63574),
    eG = t(661847),
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
    e4 = t(61750),
    e7 = t(758836),
    e1 = t(788868),
    e6 = t(818348),
    e3 = t(127157);
let e8 = (e) => {
        let { item: s, product: t, user: n } = e,
            r = (0, ed.aw)(t),
            { firstAvatarDecoration: a } = (0, ej.f5)(t);
        switch (s.type) {
            case o.R.AVATAR_DECORATION:
                return (0, i.jsx)("div", {
                    className: r ? e3.X2 : e3.h1,
                    children: (0, i.jsx)(eQ.i, { user: n, item: s, isHighlighted: !0 }),
                });
            case o.R.PROFILE_EFFECT:
                return (0, i.jsx)("div", {
                    className: r ? e3.ME : e3.sm,
                    children: (0, i.jsx)(eN.A, {
                        skuId: s.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case o.R.PROFILE_FRAME:
                return (0, i.jsx)("div", { className: e3.ob, children: (0, i.jsx)(ek.A, { frame: s }) });
            case o.R.NAMEPLATE:
                return (0, i.jsx)("div", {
                    className: e3.Dz,
                    children: (0, i.jsx)(eE.A, {
                        className: e3.M4,
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
    e2 = (e) => {
        let { product: s, user: t, activeSlide: n = 0 } = e,
            r = s.items.length;
        return (0, i.jsx)("div", {
            className: e3.g4,
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
                                className: e3.Kg,
                                children: [
                                    (0, i.jsx)(e8, { item: e, product: s, user: t }),
                                    (0, i.jsxs)(I.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: e3.gx,
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
            ? (0, i.jsx)(e2, { product: s, user: t, activeSlide: n })
            : (0, e7.pQ)(s.skuId)
              ? (0, i.jsx)(eZ.B, { animationState: "on_hover", product: s })
              : s.items.length > 0
                ? (0, i.jsx)(e8, { item: s.items[0], product: s, user: t })
                : null;
    },
    se = (e) => {
        let { skuId: s } = e;
        return (0, e7.EZ)(s)
            ? (0, i.jsx)(I.E, {
                  variant: "text-sm/normal",
                  className: e3.CU,
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
                previewingVariantIndexProps: A,
                selectedVariantIndex: j,
                activeBundleSlide: g,
                giftRecipient: v,
                giftingOrigin: O,
                onTrackClick: _,
            } = e,
            { analyticsLocations: b } = (0, L.Ay)(),
            { cardId: S, sessionId: D, tilePosition: y } = (0, ea.uM)() ?? {},
            F = (0, G.L)(e1.PremiumTypes.TIER_2),
            B = (0, ed.xM)(t),
            { previewingVariantIndex: w, handleEntering: V, handleLeaving: H } = A,
            U = (0, eY.q)(s, w),
            Z = (0, eR.rb)(s, j);
        c()(null != Z, "Selected product should not be null");
        let $ = (0, eh.Do)("CollectiblesShopProductDetailsModal") && Z.type === o.R.PROFILE_FRAME,
            Q = ei.Ay.canUseShopDiscounts(t) || $,
            Y = (0, eA.h)(s),
            { isPurchased: ee, isPartiallyOwnedBundle: es } = (0, eA.h)(Z),
            { isDisabled: et, disabledReason: ec } = (0, ep.I)(Z.skuId),
            em = (0, ed.Zu)({ product: Z, isPartiallyOwnedBundle: es, isPurchased: ee }),
            eI = (0, m.bG)([el.A], () => el.A.isClaiming === Z?.skuId),
            ev = (0, P.Ay)(),
            eE = (0, x.M)(ev),
            eN = (0, ed.G0)(Z),
            ek = (0, ed.yt)(Z, T.lid.DEFAULT),
            eC = ek?.amount === 0,
            { firstAvatarDecoration: e_ } = (0, ej.f5)(U ?? Z),
            eT = n.useMemo(() => (0, ed.fT)(Z, Q), [Z, Q]),
            eb = (0, ef.VG)(s),
            eD = (0, eX.X)(Z),
            { enabled: eV } = (0, K.Z)({ location: "collectibles_shop_product_details_modal" }),
            eU = (0, ex.r)(Z, !1),
            eZ = (0, eJ.V_)(s),
            eq = null != eZ,
            eQ = (s.variants?.length ?? 0) > 8,
            eK = (0, eu.W)("CollectiblesShopProductDetailsModal"),
            e0 = d === e7.G2.ORBS && l ? eW.Hi.ORBS : eK ? eW.Hi.FIAT : void 0,
            e8 = (0, eo.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: e2,
                isOrbExclusive: ss,
                hasSufficientOrbs: st,
            } = (0, e5.F)({ product: Z, hasShopDiscount: Q, hasDiscountOffer: eq, prioritizedCurrency: e0 }),
            si = (0, eg.A)({ location: "CollectiblesShopProductDetailsModal", product: Z }),
            sn = n.useMemo(() => e2.some((e) => e.currency === e6.Yr.DISCORD_ORB), [e2]);
        (0, J.W)({ disableFetch: !sn });
        let sr = n.useCallback(() => {
            _(e7.sH.BUY_WITH_FIAT),
                (0, W.A)({ skuId: Z.skuId, analyticsLocations: b, onClose: (e) => (e ? u() : (0, e6.tE)()) });
        }, [b, u, Z.skuId, _]);
        n.useEffect(() => {
            if (null != e_) return (0, q.p)({ avatarDecoration: e_ }), () => (0, q.p)({ avatarDecoration: void 0 });
        }, [e_]);
        let sa = function (e) {
                let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = (0, i.jsx)(z.A, {
                        subscriptionTier: e1.pe.TIER_2,
                        fullWidth: !0,
                        buttonTextOverride: e,
                        onClick: () => {
                            _(e7.sH.UNLOCK_WITH_NITRO), (0, eB.M)();
                        },
                        onSubscribeModalClose: () => {
                            (0, eB.t)({
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
            className: e3.qA,
            children: [
                (0, i.jsx)("div", { className: e3.gn, children: !sl && (0, i.jsx)(ey.A, { category: r }) }),
                (0, i.jsx)(e9, { product: U ?? Z, user: t, activeSlide: g }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: e3.h_,
                            children: [
                                !sl && $
                                    ? (0, i.jsx)("div", {
                                          className: e3.LM,
                                          children: (0, i.jsx)(eH.A, {
                                              location: "CollectiblesShopProductDetailsModal",
                                          }),
                                      })
                                    : (0, i.jsx)(eP, { product: Z, isDarkText: !eE, isOrbExclusive: ss }),
                                (0, i.jsx)(R.D, { variant: "heading-xl/extrabold", className: e3.v7, children: eb }),
                                (0, i.jsx)(I.E, { variant: "text-sm/normal", children: eU }),
                                (0, i.jsx)(se, { skuId: Z.skuId }),
                                Y.isPurchased || Y.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(eO.c, { className: e3.On, isPartiallyPurchased: es })
                                    : eN
                                      ? (0, i.jsx)(I.E, {
                                            variant: "text-md/semibold",
                                            className: e3.On,
                                            children: eS.intl.string(eS.t.rt69oo),
                                        })
                                      : eV
                                        ? (0, i.jsx)(e$.B, {
                                              prices: e2,
                                              product: Z,
                                              hasShopDiscount: Q,
                                              discountSource: B,
                                              discount: eT,
                                              hasSufficientOrbs: st,
                                              isProductDisabled: et,
                                              discountOfferAmount: eZ,
                                              onTrackClick: _,
                                          })
                                        : ss
                                          ? null
                                          : (0, i.jsxs)("div", {
                                                className: e3.pw,
                                                children: [
                                                    (0, i.jsx)(eL.A, {
                                                        product: Z,
                                                        discount: eT,
                                                        hasShopDiscount: Q,
                                                        discountSource: B,
                                                        hideStrikethroughPrice: !Q || eq,
                                                        discountIconDisplayMode: "tooltip",
                                                        discountIconSize: "xs",
                                                        discountOfferAmount: eZ,
                                                    }),
                                                    Q || eq ? null : (0, i.jsx)(eF.A, { product: Z, onTrackClick: _ }),
                                                ],
                                            }),
                            ],
                        }),
                        (0, eR.B1)(s) &&
                            (0, i.jsx)(C.M, {
                                children: (0, i.jsxs)("div", {
                                    className: a()(e3.Oj, { [e3.OJ]: eQ }),
                                    children: [
                                        eQ &&
                                            (0, i.jsx)(ez.A, {
                                                skuId: s.skuId,
                                                overrideVariantIndex: w,
                                                className: e3.L$,
                                            }),
                                        (0, i.jsx)(eG.A, {
                                            skuId: s.skuId,
                                            onVariantEnter: V,
                                            onVariantExit: H,
                                            wrap: !0,
                                        }),
                                        !eQ &&
                                            (0, i.jsx)(ez.A, {
                                                skuId: s.skuId,
                                                overrideVariantIndex: w,
                                                className: e3.L$,
                                            }),
                                    ],
                                }),
                            }),
                        null !== ec && (0, i.jsx)(I.E, { variant: "text-xs/normal", className: e3.H$, children: ec }),
                        (0, i.jsx)(f.B, {
                            direction: "vertical",
                            gap: 8,
                            children:
                                !eN || F || eC
                                    ? em
                                        ? ee
                                            ? eD
                                                ? (0, i.jsxs)(k.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, i.jsx)(ew.A, {
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
                                                : (0, i.jsx)(ew.A, { product: Z, onSuccess: u, onTrackClick: _ })
                                            : si
                                              ? sa(eS.intl.string(eS.t.IvmZVF), !0)
                                              : eN
                                                ? (0, i.jsx)(E.$, {
                                                      loading: eI,
                                                      loadingStartedLabel: eS.intl.string(eS.t["TYw+9s"]),
                                                      loadingFinishedLabel: eS.intl.string(eS.t.Pg1UP5),
                                                      onClick: async () => {
                                                          _(e7.sH.ADD_TO_COLLECTION),
                                                              await (0, er.iJ)(Z.skuId),
                                                              u(),
                                                              (0, e4.A)({
                                                                  product: Z,
                                                                  analyticsLocations: b,
                                                                  purchaseType: e7.gs.PREMIUM_PURCHASE,
                                                              });
                                                      },
                                                      text: eS.intl.string(eS.t.zp6caO),
                                                      fullWidth: !0,
                                                  })
                                                : (0, i.jsx)(i.Fragment, {
                                                      children: e2.map((e, s) => {
                                                          let t,
                                                              n = 0 === s;
                                                          if (e.currency === e6.Yr.DISCORD_ORB) {
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
                                                                              _(e7.sH.BUY_WITH_ORBS),
                                                                                  (0, X.B4)({
                                                                                      skuId: Z.skuId,
                                                                                      onComplete: (e) => {
                                                                                          (0, er.gB)(),
                                                                                              u(),
                                                                                              (0, e4.A)({
                                                                                                  product: Z,
                                                                                                  analyticsLocations: b,
                                                                                                  itemConsumed:
                                                                                                      e
                                                                                                          ?.entitlements?.[0]
                                                                                                          ?.consumed,
                                                                                                  purchaseType:
                                                                                                      e7.gs.ORB,
                                                                                              });
                                                                                      },
                                                                                      analyticsLocations: b,
                                                                                  });
                                                                          },
                                                                          disabled: t,
                                                                          "aria-label": a,
                                                                          text: eS.intl.format(
                                                                              e8 ? eS.t.JC15qj : eS.t.lOtBOI,
                                                                              {
                                                                                  orbPrice: e.amount,
                                                                                  orbIconHook: () =>
                                                                                      (0, i.jsx)(N.C, {
                                                                                          className: e3.fN,
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
                                                                  : eV &&
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
                            className: a()(e3.ed, !eE && e3.un),
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
            className: e3.mV,
            children: (0, i.jsx)(B.A, {
                avatar: (0, i.jsx)(O.eu, {
                    src: s.avatarSrc,
                    size: _._3.SIZE_32,
                    "aria-label": s.name,
                    status: T.clD.ONLINE,
                }),
                name: s.name,
                innerClassName: a()(e3.$L, t),
            }),
        });
    },
    si = (e) => {
        let { user: s, nameplate: t, avatarDecoration: n } = e,
            r = (0, ev.Ov)();
        return (0, i.jsx)("div", {
            className: e3.nJ,
            role: "img",
            "aria-label": eS.intl.string(eS.t.SZeUdR),
            children: (0, i.jsxs)(C.M, {
                children: [
                    (0, i.jsx)(st, { user: r.mallow, innerClassName: e3.ab }),
                    (0, i.jsxs)(I.E, {
                        variant: "text-sm/semibold",
                        className: e3.OS,
                        children: [eS.intl.string(eS.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, i.jsx)(st, { user: r.phibi, innerClassName: e3.e9 }),
                    (0, i.jsx)("div", {
                        className: e3.mV,
                        children: (0, i.jsx)(eE.A, {
                            className: e3.M4,
                            innerClassName: e3.e9,
                            user: s,
                            nameplate: t,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: n,
                            hideDecorators: !0,
                        }),
                    }),
                    (0, i.jsx)(st, { user: r.locke, innerClassName: e3.e9 }),
                    (0, i.jsxs)(I.E, {
                        variant: "text-sm/semibold",
                        className: e3.OS,
                        children: [eS.intl.string(eS.t["NG43/6"]), " - 12"],
                    }),
                    (0, i.jsx)(st, { user: r.boom, innerClassName: e3.bD }),
                    (0, i.jsx)(st, { user: r.cherry, innerClassName: e3.bD }),
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
                firstAvatarDecoration: A,
                firstProfileEffect: j,
                firstNameplate: g,
                firstProfileFrame: I,
            } = (0, ej.f5)(s),
            v = null != j,
            E = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(Z.A, {
                            ...u,
                            pendingAvatar: h,
                            user: t,
                            canUsePremiumCustomization: c,
                            pendingAvatarDecoration: A,
                            pendingProfileEffect: j,
                            pendingProfileFrame: I,
                            disabledInputs: !0,
                            hideMessageInput: !v,
                            hideCustomStatus: !0,
                            hideBioSection: x,
                            hideExampleButton: !0,
                            interactive: !1,
                            containerClassName: x ? e3.Bb : void 0,
                        }),
                        x && (0, i.jsx)(sr, { user: t }),
                    ],
                }),
            N = (e) => (0, i.jsx)(si, { user: t, nameplate: e, avatarDecoration: A });
        if (s.type === o.R.BUNDLE) {
            if (!(0, eC.Wb)(s))
                return (0, i.jsx)("div", {
                    className: e3.RA,
                    children: (0, i.jsx)("div", { className: e3.bo, children: E() }),
                });
            {
                let e = n ?? 0,
                    t = s.items[e],
                    c = s.items[Math.max(0, e - 1)],
                    d = c?.type !== t?.type && !l;
                return t.type === o.R.NAMEPLATE
                    ? (0, i.jsx)("div", { className: a()(e3.Zj, r && d ? e3.p2 : ""), children: N(t) })
                    : (0, i.jsx)("div", { className: a()(e3.Ak, r && d ? e3.p2 : ""), children: E() });
            }
        }
        return null != g
            ? (0, i.jsx)("div", { className: e3.Zj, children: N(g) })
            : (0, i.jsx)("div", { className: p?.type === o.R.AVATAR_DECORATION ? e3.RA : e3.Ak, children: E() });
    },
    sr = (e) => {
        let { user: s } = e,
            t = ((e) => {
                let { author: s } = e;
                return (0, w.rh)({
                    ...(0, V.Ay)({ author: s, channelId: "1337", content: eS.intl.string(eS.t.d5YwK5) }),
                    state: T.cmJ.SENT,
                    id: "0",
                });
            })({ author: s });
        return (0, i.jsx)("div", {
            role: "img",
            "aria-label": eS.intl.string(eS.t["TN+ZvB"]),
            children: (0, i.jsx)(C.M, {
                children: (0, i.jsxs)(b.Z, {
                    className: e3.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsx)(U.A, { className: e3.G5, author: (0, H.p_)(t), message: t }, t.id),
                        (0, i.jsxs)("div", {
                            className: e3.lG,
                            children: [
                                (0, i.jsx)(S.U, { size: "md", color: "currentColor", className: e3.hq }),
                                (0, i.jsx)(D.n, { size: "md", color: "currentColor", className: e3.hq }),
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
        let { cardId: B, sessionId: w, tilePosition: V } = (0, ea.uM)() ?? {},
            H = n.useMemo(() => (0, eR.v8)(r), [r]),
            U = (0, eI.R)({ skuId: S.skuId, productSkuIds: H, analyticsLocations: D });
        (0, F.A)({
            type: d.ImpressionTypes.MODAL,
            name: d.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: S.skuId,
                card_id: B,
                shop_session_id: w,
                position_in_section: V,
                product_sku_ids: H,
                location_stack: D,
            },
        });
        let W = (0, X.o6)(),
            z = s === p.ip.EXITING,
            G = (0, eJ.$R)(r),
            Z = G?.amount,
            $ = null != Z && (G?.discountId === e1.eR || G?.discountId === e1.Qz),
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
                  children: (0, i.jsxs)(A.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: e3.CR,
                      returnRef: h,
                      transitionState: s,
                      size: A.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, i.jsxs)(A.$m, {
                              "data-migration-pending": !0,
                              className: e3.jE,
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
                                          e3.i1,
                                          (0, e7.EZ)(S.skuId)
                                              ? e3.bF
                                              : S.type === o.R.AVATAR_DECORATION
                                                ? e3.Jq
                                                : e3.eF,
                                      ),
                                      style: { backgroundImage: `url(${P})` },
                                      children: [
                                          (0, e7.pQ)(r.skuId)
                                              ? r.skuId === e7.Dp.ORB_PROFILE_BADGE
                                                  ? W || z
                                                      ? null
                                                      : (0, i.jsx)(eU.z, { user: C })
                                                  : (0, e7.EZ)(r.skuId)
                                                    ? (0, i.jsx)(eV.I, {})
                                                    : (0, i.jsx)(eZ.B, { product: r, className: e3.Ms })
                                              : (0, i.jsx)(sn, {
                                                    user: C,
                                                    product: b ?? S,
                                                    activeBundleSlide: q,
                                                    isTransitioning: Q,
                                                }),
                                          (0, i.jsxs)("div", {
                                              className: e3.VG,
                                              children: [
                                                  (0, i.jsx)(eq.R, {
                                                      product: r,
                                                      selectedVariantIndex: _,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: U,
                                                  }),
                                                  (0, i.jsx)(e_.V, { skuId: S.skuId, tab: N, onTrackClick: U }),
                                                  (0, i.jsx)(j.K, {
                                                      "aria-label": eS.intl.string(eS.t.cpT0Cq),
                                                      onClick: () => {
                                                          U(e7.sH.CLOSE_DETAIL), t();
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
                                  children: (0, i.jsxs)(A.jl, {
                                      "data-migration-pending": !0,
                                      className: e3.Hx,
                                      children: [
                                          (0, i.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: e3.OC,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: e3.do,
                                              children: [
                                                  (0, i.jsx)(I.E, {
                                                      variant: "text-sm/semibold",
                                                      className: e3.Q2,
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
