t.r(s), t.d(s, { default: () => sa });
var i = t(627968),
    a = t(64700),
    n = t(503698),
    r = t.n(n),
    l = t(284009),
    d = t.n(l),
    c = t(562708),
    o = t(575593),
    u = t(334279),
    m = t(702841),
    x = t(990078),
    h = t(462887),
    p = t(231723),
    j = t(935462),
    g = t(408278),
    A = t(972213),
    I = t(834730),
    v = t(430690),
    N = t(821609),
    k = t(318254),
    E = t(825484),
    C = t(534514),
    f = t(247928),
    R = t(331322),
    O = t(97808),
    b = t(778712),
    _ = t(652215),
    T = t(359778),
    S = t(245604),
    y = t(460905),
    D = t(736653),
    P = t(775602),
    L = t(793574),
    M = t(688810),
    B = t(139286),
    F = t(262295),
    w = t(320095),
    H = t(963852),
    U = t(763754),
    V = t(20851),
    W = t(44120),
    z = t(465794),
    $ = t(757036),
    G = t(986687),
    Z = t(101058),
    q = t(84540),
    Q = t(836602),
    Y = t(903209),
    J = t(761705),
    K = t(652165),
    X = t(287809),
    ee = t(174459),
    es = t(975571),
    et = t(428262),
    ei = t(580630),
    ea = t(859040),
    en = t(440938),
    er = t(4227),
    el = t(298072),
    ed = t(993408),
    ec = t(640634),
    eo = t(940980),
    eu = t(503089),
    em = t(13875),
    ex = t(495565),
    eh = t(740076),
    ep = t(466459),
    ej = t(442759),
    eg = t(395068),
    eA = t(966619),
    eI = t(780898),
    ev = t(344346),
    eN = t(139136),
    ek = t(395744),
    eE = t(623373),
    eC = t(660653),
    ef = t(536572),
    eR = t(49620),
    eO = t(586445),
    eb = t(854818),
    e_ = t(177366),
    eT = t(375708),
    eS = t(674019);
function ey(e) {
    let { product: s, isDarkText: t = !1, isOrbExclusive: a = !1 } = e,
        n = (function (e, s) {
            if (s) return eT.intl.string(eT.t["0TmQRG"]);
            switch (e) {
                case o.R.AVATAR_DECORATION:
                    return eT.intl.string(eT.t["7v0T9P"]);
                case o.R.PROFILE_EFFECT:
                    return eT.intl.string(eT.t.wR5wOo);
                case o.R.PROFILE_FRAME:
                    return eT.intl.string(eT.t.GWrZOd);
                case o.R.NAMEPLATE:
                    return eT.intl.string(eT.t.x5CoXR);
            }
            return null;
        })(s.type, a);
    return null === n
        ? null
        : (0, i.jsx)(I.E, { variant: "text-xxs/normal", className: r()([eS.kL, t ? eS.ap : eS.aK]), children: n });
}
var eD = t(203312),
    eP = t(878112),
    eL = t(452255),
    eM = t(641405),
    eB = t(231540),
    eF = t(110629),
    ew = t(839863),
    eH = t(184659),
    eU = t(561769);
let eV = (e) => {
    let { skuId: s, overrideVariantIndex: t, className: a } = e,
        n = (0, eU.Vm)(s),
        r = (0, el.Q)(n);
    return null != n && (0, eE.B1)(n)
        ? (0, i.jsx)(I.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: a,
              lineClamp: 1,
              children: n.variants[t ?? r].variantLabel,
          })
        : null;
};
var eW = t(661847),
    ez = t(846957),
    e$ = t(680262),
    eG = t(139146),
    eZ = t(929283),
    eq = t(827066),
    eQ = t(525723),
    eY = t(212407),
    eJ = t(347722),
    eK = t(935094),
    eX = t(57020),
    e0 = t(61750),
    e5 = t(758836),
    e8 = t(788868),
    e1 = t(818348),
    e4 = t(127157);
let e6 = (e) => {
        let { item: s, product: t, user: a } = e,
            n = (0, ed.aw)(t),
            { firstAvatarDecoration: r } = (0, ej.f5)(t);
        switch (s.type) {
            case o.R.AVATAR_DECORATION:
                return (0, i.jsx)("div", {
                    className: n ? e4.X2 : e4.h1,
                    children: (0, i.jsx)(eZ.i, { user: a, item: s, isHighlighted: !0 }),
                });
            case o.R.PROFILE_EFFECT:
                return (0, i.jsx)("div", {
                    className: n ? e4.ME : e4.sm,
                    children: (0, i.jsx)(eN.A, {
                        skuId: s.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case o.R.PROFILE_FRAME:
                return (0, i.jsx)("div", { className: e4.ob, children: (0, i.jsx)(ek.A, { frame: s }) });
            case o.R.NAMEPLATE:
                return (0, i.jsx)("div", {
                    className: e4.Dz,
                    children: (0, i.jsx)(ev.A, {
                        className: e4.M4,
                        nameplate: s,
                        user: a,
                        nameplatePreviewSize: "large",
                        pendingAvatarDecoration: r,
                        isHighlighted: !0,
                        hideDecorators: !0,
                    }),
                });
            default:
                return null;
        }
    },
    e2 = (e) => {
        let { product: s, user: t, activeSlide: a = 0 } = e,
            n = s.items.length;
        return (0, i.jsx)("div", {
            className: e4.g4,
            children: (0, i.jsx)(v.t, {
                activeSlide: String(a),
                children: s.items.map((e, a) => {
                    let r = String(a),
                        l = null != s.bundledProducts ? s.bundledProducts[a] : void 0,
                        d = `(${a + 1}/${n})`;
                    return (0, i.jsx)(
                        v.q,
                        {
                            id: r,
                            children: (0, i.jsxs)("div", {
                                className: e4.Kg,
                                children: [
                                    (0, i.jsx)(e6, { item: e, product: s, user: t }),
                                    (0, i.jsxs)(I.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: e4.gx,
                                        children: [l?.name, " ", d],
                                    }),
                                ],
                            }),
                        },
                        r,
                    );
                }),
            }),
        });
    },
    e7 = (e) => {
        let { product: s, user: t, activeSlide: a } = e;
        return (0, ed.aw)(s)
            ? (0, i.jsx)(e2, { product: s, user: t, activeSlide: a })
            : (0, e5.pQ)(s.skuId)
              ? (0, i.jsx)(ez.B, { animationState: "on_hover", product: s })
              : s.items.length > 0
                ? (0, i.jsx)(e6, { item: s.items[0], product: s, user: t })
                : null;
    },
    e3 = (e) => {
        let { skuId: s } = e;
        return (0, e5.EZ)(s)
            ? (0, i.jsx)(I.E, {
                  variant: "text-sm/normal",
                  className: e4.CU,
                  children: eT.intl.format(eT.t.Q1scdE, {
                      helpdeskArticle: es.A.getArticleURL(_.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    e9 = (e) => {
        let {
                product: s,
                user: t,
                category: n,
                shouldCheckoutWithOrbs: l,
                tab: c,
                onClose: u,
                returnRef: p,
                previewingVariantIndexProps: j,
                selectedVariantIndex: g,
                activeBundleSlide: A,
                giftRecipient: v,
                giftingOrigin: O,
                onTrackClick: b,
            } = e,
            { analyticsLocations: T } = (0, M.Ay)(),
            { cardId: S, sessionId: y, tilePosition: P } = (0, en.uM)() ?? {},
            L = (0, $.L)(e8.PremiumTypes.TIER_2),
            B = (0, ed.xM)(t),
            { previewingVariantIndex: F, handleEntering: w, handleLeaving: H } = j,
            U = (0, eq.q)(s, F),
            V = (0, eE.rb)(s, g);
        d()(null != V, "Selected product should not be null");
        let G = (0, em.Do)("CollectiblesShopProductDetailsModal") && V.type === o.R.PROFILE_FRAME,
            Z = et.Ay.canUseShopDiscounts(t) || G,
            Q = (0, ep.h)(s),
            { isPurchased: Y, isPartiallyOwnedBundle: X } = (0, ep.h)(V),
            { isDisabled: ee, disabledReason: es } = (0, eh.I)(V.skuId),
            el = (0, ed.Zu)({ product: V, isPartiallyOwnedBundle: X, isPurchased: Y }),
            eu = (0, m.bG)([er.A], () => er.A.isClaiming === V?.skuId),
            eA = (0, D.Ay)(),
            eI = (0, h.M)(eA),
            ev = (0, ed.G0)(V),
            eN = (0, ed.yt)(V, _.lid.DEFAULT),
            ek = eN?.amount === 0,
            { firstAvatarDecoration: eC } = (0, ej.f5)(U ?? V),
            eO = a.useMemo(() => (0, ed.fT)(V, Z), [V, Z]),
            eb = (0, ef.VG)(s),
            e_ = (0, eJ.X)(V),
            eS = (0, ex.r)(V, !1),
            eB = (0, eQ.V_)(s),
            eH = null != eB,
            ez = (s.variants?.length ?? 0) > 8,
            eG = (0, eo.W)("CollectiblesShopProductDetailsModal"),
            eZ = c === e5.G2.ORBS && l ? eU.Hi.ORBS : eG ? eU.Hi.FIAT : void 0,
            eY = (0, ec.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: eK,
                isOrbExclusive: e6,
                hasSufficientOrbs: e2,
            } = (0, eX.F)({ product: V, hasShopDiscount: Z, hasDiscountOffer: eH, prioritizedCurrency: eZ }),
            e9 = (0, eg.A)({ location: "CollectiblesShopProductDetailsModal", product: V }),
            se = a.useMemo(() => eK.some((e) => e.currency === e1.Yr.DISCORD_ORB), [eK]);
        (0, J.W)({ disableFetch: !se });
        let ss = a.useCallback(() => {
            b(e5.sH.BUY_WITH_FIAT),
                (0, W.A)({ skuId: V.skuId, analyticsLocations: T, onClose: (e) => (e ? u() : (0, e1.tE)()) });
        }, [T, u, V.skuId, b]);
        a.useEffect(() => {
            if (null != eC) return (0, q.p)({ avatarDecoration: eC }), () => (0, q.p)({ avatarDecoration: void 0 });
        }, [eC]);
        let st = function (e) {
                let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = (0, i.jsx)(z.A, {
                        subscriptionTier: e8.pe.TIER_2,
                        fullWidth: !0,
                        buttonTextOverride: e,
                        onClick: () => {
                            b(e5.sH.UNLOCK_WITH_NITRO), (0, eL.M)();
                        },
                        onSubscribeModalClose: () => {
                            (0, eL.t)({
                                product: V,
                                category: n,
                                shouldCheckoutWithOrbs: l,
                                returnRef: p,
                                analyticsLocations: T,
                                tab: c,
                                giftRecipient: v,
                                giftingOrigin: O,
                                cardId: S,
                                sessionId: y,
                                tilePosition: P,
                            });
                        },
                    });
                return s ? (0, i.jsx)(ew.A, { analyticsLocations: T, children: t }) : t;
            },
            si = s.hideBadge;
        return (0, i.jsxs)("div", {
            className: e4.qA,
            children: [
                (0, i.jsx)("div", {
                    className: e4.gn,
                    children: si
                        ? null
                        : (0, i.jsxs)("div", {
                              className: e4.fC,
                              children: [
                                  G && (0, i.jsx)(eF.A, { location: "CollectiblesShopProductDetailsModal" }),
                                  (0, i.jsx)(eD.A, { category: n }),
                              ],
                          }),
                }),
                (0, i.jsx)(e7, { product: U ?? V, user: t, activeSlide: A }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: e4.h_,
                            children: [
                                (0, i.jsx)(ey, { product: V, isDarkText: !eI, isOrbExclusive: e6 }),
                                (0, i.jsx)(C.D, { variant: "heading-xl/extrabold", className: e4.v7, children: eb }),
                                (0, i.jsx)(I.E, { variant: "text-sm/normal", children: eS }),
                                (0, i.jsx)(e3, { skuId: V.skuId }),
                                Q.isPurchased || Q.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(eR.c, { className: e4.On, isPartiallyPurchased: X })
                                    : ev
                                      ? (0, i.jsx)(I.E, {
                                            variant: "text-md/semibold",
                                            className: e4.On,
                                            children: eT.intl.string(eT.t.rt69oo),
                                        })
                                      : (0, i.jsx)(e$.B, {
                                            prices: eK,
                                            product: V,
                                            hasShopDiscount: Z,
                                            discountSource: B,
                                            discount: eO,
                                            hasSufficientOrbs: e2,
                                            isProductDisabled: ee,
                                            discountOfferAmount: eB,
                                            onTrackClick: b,
                                        }),
                            ],
                        }),
                        (0, eE.B1)(s) &&
                            (0, i.jsx)(f.M, {
                                children: (0, i.jsxs)("div", {
                                    className: r()(e4.Oj, { [e4.OJ]: ez }),
                                    children: [
                                        ez &&
                                            (0, i.jsx)(eV, {
                                                skuId: s.skuId,
                                                overrideVariantIndex: F,
                                                className: e4.L$,
                                            }),
                                        (0, i.jsx)(eW.A, {
                                            skuId: s.skuId,
                                            onVariantEnter: w,
                                            onVariantExit: H,
                                            wrap: !0,
                                        }),
                                        !ez &&
                                            (0, i.jsx)(eV, {
                                                skuId: s.skuId,
                                                overrideVariantIndex: F,
                                                className: e4.L$,
                                            }),
                                    ],
                                }),
                            }),
                        null !== es && (0, i.jsx)(I.E, { variant: "text-xs/normal", className: e4.H$, children: es }),
                        (0, i.jsx)(R.B, {
                            direction: "vertical",
                            gap: 8,
                            children:
                                !ev || L || ek
                                    ? el
                                        ? Y
                                            ? e_
                                                ? (0, i.jsxs)(E.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, i.jsx)(eM.A, {
                                                              product: V,
                                                              onSuccess: u,
                                                              onTrackClick: b,
                                                          }),
                                                          (0, i.jsx)(eP.A, {
                                                              primary: !0,
                                                              product: V,
                                                              onSuccess: u,
                                                              giftRecipient: v,
                                                              giftingOrigin: O,
                                                              onTrackClick: b,
                                                          }),
                                                      ],
                                                  })
                                                : (0, i.jsx)(eM.A, { product: V, onSuccess: u, onTrackClick: b })
                                            : e9
                                              ? st(eT.intl.string(eT.t["9wfL34"]), !0)
                                              : ev
                                                ? (0, i.jsx)(N.$, {
                                                      loading: eu,
                                                      loadingStartedLabel: eT.intl.string(eT.t["TYw+9s"]),
                                                      loadingFinishedLabel: eT.intl.string(eT.t.Pg1UP5),
                                                      onClick: async () => {
                                                          b(e5.sH.ADD_TO_COLLECTION),
                                                              await (0, ea.iJ)(V.skuId),
                                                              u(),
                                                              (0, e0.A)({
                                                                  product: V,
                                                                  analyticsLocations: T,
                                                                  purchaseType: e5.gs.PREMIUM_PURCHASE,
                                                              });
                                                      },
                                                      text: eT.intl.string(eT.t.zp6caO),
                                                      fullWidth: !0,
                                                  })
                                                : (0, i.jsx)(i.Fragment, {
                                                      children: eK.map((e, s) => {
                                                          let t,
                                                              a = 0 === s;
                                                          if (e.currency === e1.Yr.DISCORD_ORB) {
                                                              let s, t, n, r;
                                                              return (
                                                                  (s = ee
                                                                      ? eT.intl.string(eT.t.cTdr3x)
                                                                      : eT.intl.string(eT.t.zqh7ZM)),
                                                                  (t = !e2 || ee),
                                                                  (n = eT.intl.formatToPlainString(eT.t.yi41qQ, {
                                                                      orbPrice: e.amount,
                                                                  })),
                                                                  (r = t ? `${n}, ${s}` : n),
                                                                  (0, i.jsx)(x.m, {
                                                                      position: "top",
                                                                      text: s,
                                                                      shouldShow: t,
                                                                      "aria-label": !1,
                                                                      children: (0, i.jsx)(N.$, {
                                                                          variant: a ? "primary" : "secondary",
                                                                          onClick: () => {
                                                                              b(e5.sH.BUY_WITH_ORBS),
                                                                                  (0, K.B4)({
                                                                                      skuId: V.skuId,
                                                                                      onComplete: (e) => {
                                                                                          (0, ea.gB)(),
                                                                                              u(),
                                                                                              (0, e0.A)({
                                                                                                  product: V,
                                                                                                  analyticsLocations: T,
                                                                                                  itemConsumed:
                                                                                                      e
                                                                                                          ?.entitlements?.[0]
                                                                                                          ?.consumed,
                                                                                                  purchaseType:
                                                                                                      e5.gs.ORB,
                                                                                              });
                                                                                      },
                                                                                      analyticsLocations: T,
                                                                                  });
                                                                          },
                                                                          disabled: t,
                                                                          "aria-label": r,
                                                                          text: eT.intl.format(
                                                                              eY ? eT.t.JC15qj : eT.t.lOtBOI,
                                                                              {
                                                                                  orbPrice: e.amount,
                                                                                  orbIconHook: () =>
                                                                                      (0, i.jsx)(k.C, {
                                                                                          className: e4.fN,
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
                                                              (t = eH
                                                                  ? eT.intl.formatToPlainString(eT.t["5U5RB5"], {
                                                                        discountOfferAmount: eB,
                                                                    })
                                                                  : eT.intl.formatToPlainString(eT.t["cNSL/j"], {
                                                                        price: (0, ei.$g)(e.amount, e.currency),
                                                                    })),
                                                              (0, i.jsxs)(E.e, {
                                                                  wrap: !1,
                                                                  fullWidth: !0,
                                                                  children: [
                                                                      (0, i.jsx)(N.$, {
                                                                          variant: a ? "primary" : "secondary",
                                                                          onClick: ss,
                                                                          text: t,
                                                                          fullWidth: !0,
                                                                      }),
                                                                      e_ &&
                                                                          (0, i.jsx)(eP.A, {
                                                                              primary: a,
                                                                              product: V,
                                                                              onSuccess: u,
                                                                              giftRecipient: v,
                                                                              giftingOrigin: O,
                                                                              onTrackClick: b,
                                                                          }),
                                                                  ],
                                                              })
                                                          );
                                                      }),
                                                  })
                                        : e_
                                          ? (0, i.jsx)(eP.A, {
                                                primary: !0,
                                                product: V,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: v,
                                                giftingOrigin: O,
                                                onTrackClick: b,
                                            })
                                          : null
                                    : st(eT.intl.string(eT.t.sEAnVH)),
                        }),
                        (0, i.jsx)(I.E, {
                            className: r()(e4.ed, !eI && e4.un),
                            variant: "text-xxs/normal",
                            children: ev && !Y ? eT.intl.string(eT.t.nKdAlO) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    se = (e) => {
        let { user: s, innerClassName: t } = e;
        return (0, i.jsx)("div", {
            className: e4.mV,
            children: (0, i.jsx)(F.A, {
                avatar: (0, i.jsx)(O.eu, {
                    src: s.avatarSrc,
                    size: b._3.SIZE_32,
                    "aria-label": s.name,
                    status: _.clD.ONLINE,
                }),
                name: s.name,
                innerClassName: r()(e4.$L, t),
            }),
        });
    },
    ss = (e) => {
        let { user: s, nameplate: t, avatarDecoration: a } = e,
            n = (0, eI.Ov)();
        return (0, i.jsx)("div", {
            className: e4.nJ,
            role: "img",
            "aria-label": eT.intl.string(eT.t.SZeUdR),
            children: (0, i.jsxs)(f.M, {
                children: [
                    (0, i.jsx)(se, { user: n.mallow, innerClassName: e4.ab }),
                    (0, i.jsxs)(I.E, {
                        variant: "text-sm/semibold",
                        className: e4.OS,
                        children: [eT.intl.string(eT.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, i.jsx)(se, { user: n.phibi, innerClassName: e4.e9 }),
                    (0, i.jsx)("div", {
                        className: e4.mV,
                        children: (0, i.jsx)(ev.A, {
                            className: e4.M4,
                            innerClassName: e4.e9,
                            user: s,
                            nameplate: t,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: a,
                            hideDecorators: !0,
                        }),
                    }),
                    (0, i.jsx)(se, { user: n.locke, innerClassName: e4.e9 }),
                    (0, i.jsxs)(I.E, {
                        variant: "text-sm/semibold",
                        className: e4.OS,
                        children: [eT.intl.string(eT.t["NG43/6"]), " - 12"],
                    }),
                    (0, i.jsx)(se, { user: n.boom, innerClassName: e4.bD }),
                    (0, i.jsx)(se, { user: n.cherry, innerClassName: e4.bD }),
                ],
            }),
        });
    },
    st = (e) => {
        let { product: s, user: t, activeBundleSlide: a, isTransitioning: n } = e,
            l = (0, m.bG)([P.A], () => P.A.useReducedMotion),
            d = et.Ay.canUsePremiumProfileCustomization(t),
            { pendingAvatar: c, ...u } = (0, m.cf)([Q.A], () => Q.A.getPendingChanges()),
            x = (0, Z.V7)({ userId: t.id, image: c }),
            h = s.type === o.R.AVATAR_DECORATION,
            [p] = s.items,
            {
                firstAvatarDecoration: j,
                firstProfileEffect: g,
                firstNameplate: A,
                firstProfileFrame: I,
            } = (0, ej.f5)(s),
            v = null != g,
            N = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(G.A, {
                            ...u,
                            pendingAvatar: x,
                            user: t,
                            canUsePremiumCustomization: d,
                            pendingAvatarDecoration: j,
                            pendingProfileEffect: g,
                            pendingProfileFrame: I,
                            disabledInputs: !0,
                            hideMessageInput: !v,
                            hideCustomStatus: !0,
                            hideBioSection: h,
                            hideExampleButton: !0,
                            interactive: !1,
                            containerClassName: h ? e4.Bb : void 0,
                        }),
                        h && (0, i.jsx)(si, { user: t }),
                    ],
                }),
            k = (e) => (0, i.jsx)(ss, { user: t, nameplate: e, avatarDecoration: j });
        if (s.type === o.R.BUNDLE) {
            if (!(0, eC.Wb)(s))
                return (0, i.jsx)("div", {
                    className: e4.RA,
                    children: (0, i.jsx)("div", { className: e4.bo, children: N() }),
                });
            {
                let e = a ?? 0,
                    t = s.items[e],
                    d = s.items[Math.max(0, e - 1)],
                    c = d?.type !== t?.type && !l;
                return t.type === o.R.NAMEPLATE
                    ? (0, i.jsx)("div", { className: r()(e4.Zj, n && c ? e4.p2 : ""), children: k(t) })
                    : (0, i.jsx)("div", { className: r()(e4.Ak, n && c ? e4.p2 : ""), children: N() });
            }
        }
        return null != A
            ? (0, i.jsx)("div", { className: e4.Zj, children: k(A) })
            : (0, i.jsx)("div", { className: p?.type === o.R.AVATAR_DECORATION ? e4.RA : e4.Ak, children: N() });
    },
    si = (e) => {
        let { user: s } = e,
            t = ((e) => {
                let { author: s } = e;
                return (0, w.rh)({
                    ...(0, H.Ay)({ author: s, channelId: "1337", content: eT.intl.string(eT.t.d5YwK5) }),
                    state: _.cmJ.SENT,
                    id: "0",
                });
            })({ author: s });
        return (0, i.jsx)("div", {
            role: "img",
            "aria-label": eT.intl.string(eT.t["TN+ZvB"]),
            children: (0, i.jsx)(f.M, {
                children: (0, i.jsxs)(T.Z, {
                    className: e4.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsx)(V.A, { className: e4.G5, author: (0, U.p_)(t), message: t }, t.id),
                        (0, i.jsxs)("div", {
                            className: e4.lG,
                            children: [
                                (0, i.jsx)(S.U, { size: "md", color: "currentColor", className: e4.hq }),
                                (0, i.jsx)(y.n, { size: "md", color: "currentColor", className: e4.hq }),
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
                product: n,
                category: l,
                returnRef: x,
                analyticsSource: h,
                analyticsLocations: v,
                shouldCheckoutWithOrbs: N,
                tab: k,
                giftRecipient: E,
                giftingOrigin: C,
            } = e,
            f = (0, m.bG)([X.default], () => X.default.getCurrentUser()),
            R = (0, eK.f)(n),
            { previewingVariantIndex: O } = R,
            b = (0, el.Q)(n),
            T = (0, eq.q)(n, O),
            S = (0, eE.rb)(n, b);
        d()(null != S, "Selected product should not be null");
        let { analyticsLocations: y } = (0, M.Ay)([...v, L.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, e_.Yr)(S.skuId);
        let D = (0, eY.U1)(l);
        a.useEffect(() => {
            null != f && (0, Y.A)(f.id, f.getAvatarURL(void 0, 80));
        }, [f]);
        let P = a.useMemo(() => (0, ed.V6)(n.type, n.skuId), [n.type, n.skuId]);
        a.useEffect(() => {
            ee.default.track(_.HAw.OPEN_MODAL, {
                type: _.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: h,
                location_stack: y,
                sku_id: S.skuId,
                product_type: P,
            }),
                (0, ea.RD)(S.skuId);
        }, [h, y, S.skuId, P]);
        let { cardId: F, sessionId: w, tilePosition: H } = (0, en.uM)() ?? {},
            U = a.useMemo(() => (0, eE.v8)(n), [n]),
            V = (0, eA.R)({ skuId: S.skuId, productSkuIds: U, analyticsLocations: y });
        (0, B.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: S.skuId,
                card_id: F,
                shop_session_id: w,
                position_in_section: H,
                product_sku_ids: U,
                location_stack: y,
            },
        });
        let W = (0, K.o6)(),
            z = s === p.ip.EXITING,
            $ = (0, eQ.$R)(n),
            G = $?.amount,
            Z = null != G && ($?.discountId === e8.eR || $?.discountId === e8.Qz),
            { activeSlide: q, isTransitioning: Q } = (function (e) {
                let { slideCount: s, intervalMs: t = 3e3 } = e,
                    [i, n] = (0, a.useState)(0),
                    [r, l] = (0, a.useState)(!1),
                    d = (0, a.useCallback)(
                        (e) => {
                            r ||
                                e < 0 ||
                                e >= s ||
                                (l(!0),
                                setTimeout(() => {
                                    n(e), l(!1);
                                }, 300));
                        },
                        [r, s, 300],
                    );
                return (
                    (0, a.useEffect)(() => {
                        if (s <= 1) return;
                        let e = setInterval(() => {
                            d((i + 1) % s);
                        }, t);
                        return () => clearInterval(e);
                    }, [s, t, i, d]),
                    { activeSlide: i, isTransitioning: r }
                );
            })({ slideCount: a.useMemo(() => ((0, ed.aw)(S) ? S.items.length : 0), [S]), intervalMs: 5e3 }),
            J = (0, eu.c)("product_details_modal");
        return null != f && (n.skuId !== u.j.PREMIUM_TIER_2_1_DAY || J)
            ? (0, i.jsx)(M.f5, {
                  value: y,
                  children: (0, i.jsxs)(j.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: e4.CR,
                      returnRef: x,
                      transitionState: s,
                      size: j.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, i.jsxs)(j.$m, {
                              "data-migration-pending": !0,
                              className: e4.jE,
                              children: [
                                  (0, i.jsx)(e9, {
                                      user: f,
                                      product: n,
                                      category: l,
                                      onClose: t,
                                      previewingVariantIndexProps: R,
                                      selectedVariantIndex: b,
                                      shouldCheckoutWithOrbs: N,
                                      tab: k,
                                      activeBundleSlide: q,
                                      giftRecipient: E?.id !== f.id ? E : void 0,
                                      giftingOrigin: E?.id !== f.id ? C : void 0,
                                      onTrackClick: V,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: r()(
                                          e4.i1,
                                          (0, e5.EZ)(S.skuId)
                                              ? e4.bF
                                              : S.type === o.R.AVATAR_DECORATION
                                                ? e4.Jq
                                                : e4.eF,
                                      ),
                                      style: { backgroundImage: `url(${D})` },
                                      children: [
                                          (0, e5.pQ)(n.skuId)
                                              ? n.skuId === e5.Dp.ORB_PROFILE_BADGE
                                                  ? W || z
                                                      ? null
                                                      : (0, i.jsx)(eH.z, { user: f })
                                                  : (0, e5.EZ)(n.skuId)
                                                    ? (0, i.jsx)(eB.I, {})
                                                    : (0, i.jsx)(ez.B, { product: n, className: e4.Ms })
                                              : (0, i.jsx)(st, {
                                                    user: f,
                                                    product: T ?? S,
                                                    activeBundleSlide: q,
                                                    isTransitioning: Q,
                                                }),
                                          (0, i.jsxs)("div", {
                                              className: e4.VG,
                                              children: [
                                                  (0, i.jsx)(eG.R, {
                                                      product: n,
                                                      selectedVariantIndex: b,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: V,
                                                  }),
                                                  (0, i.jsx)(eO.V, { skuId: S.skuId, tab: k, onTrackClick: V }),
                                                  (0, i.jsx)(g.K, {
                                                      "aria-label": eT.intl.string(eT.t.cpT0Cq),
                                                      onClick: () => {
                                                          V(e5.sH.CLOSE_DETAIL), t();
                                                      },
                                                      icon: A.d,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          Z &&
                              (0, i.jsx)(i.Fragment, {
                                  children: (0, i.jsxs)(j.jl, {
                                      "data-migration-pending": !0,
                                      className: e4.Hx,
                                      children: [
                                          (0, i.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: e4.OC,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: e4.do,
                                              children: [
                                                  (0, i.jsx)(I.E, {
                                                      variant: "text-sm/semibold",
                                                      className: e4.Q2,
                                                      children: eT.intl.format(eT.t["78ph4b"], {
                                                          discountOfferAmount: G,
                                                      }),
                                                  }),
                                                  $?.expiresAt != null && (0, i.jsx)(eb.e, { endDate: $.expiresAt }),
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
