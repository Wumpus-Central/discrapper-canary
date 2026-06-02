t.r(s), t.d(s, { default: () => si });
var i = t(627968),
    a = t(64700),
    r = t(503698),
    n = t.n(r),
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
    E = t(821609),
    N = t(318254),
    k = t(825484),
    C = t(534514),
    R = t(247928),
    f = t(331322),
    O = t(97808),
    _ = t(778712),
    b = t(652215),
    T = t(359778),
    S = t(245604),
    y = t(460905),
    D = t(736653),
    P = t(775602),
    M = t(793574),
    L = t(688810),
    B = t(139286),
    F = t(262295),
    H = t(320095),
    V = t(963852),
    w = t(763754),
    U = t(20851),
    W = t(44120),
    z = t(465794),
    G = t(757036),
    $ = t(986687),
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
    er = t(440938),
    en = t(4227),
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
    eE = t(139136),
    eN = t(395744),
    ek = t(623373),
    eC = t(660653),
    eR = t(536572),
    ef = t(49620),
    eO = t(586445),
    e_ = t(854818),
    eb = t(177366),
    eT = t(375708),
    eS = t(674019);
function ey(e) {
    let { product: s, isDarkText: t = !1, isOrbExclusive: a = !1 } = e,
        r = (function (e, s) {
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
    return null === r
        ? null
        : (0, i.jsx)(I.E, { variant: "text-xxs/normal", className: n()([eS.kL, t ? eS.ap : eS.aK]), children: r });
}
var eD = t(203312),
    eP = t(878112),
    eM = t(452255),
    eL = t(641405),
    eB = t(231540),
    eF = t(110629),
    eH = t(184659),
    eV = t(561769);
let ew = (e) => {
    let { skuId: s, overrideVariantIndex: t, className: a } = e,
        r = (0, eV.Vm)(s),
        n = (0, el.Q)(r);
    return null != r && (0, ek.B1)(r)
        ? (0, i.jsx)(I.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: a,
              lineClamp: 1,
              children: r.variants[t ?? n].variantLabel,
          })
        : null;
};
var eU = t(661847),
    eW = t(846957),
    ez = t(680262),
    eG = t(139146),
    e$ = t(929283),
    eZ = t(827066),
    eq = t(525723),
    eQ = t(212407),
    eY = t(347722),
    eJ = t(935094),
    eK = t(57020),
    eX = t(61750),
    e0 = t(758836),
    e5 = t(788868),
    e8 = t(818348),
    e1 = t(127157);
let e4 = (e) => {
        let { item: s, product: t, user: a } = e,
            r = (0, ed.aw)(t),
            { firstAvatarDecoration: n } = (0, ej.f5)(t);
        switch (s.type) {
            case o.R.AVATAR_DECORATION:
                return (0, i.jsx)("div", {
                    className: r ? e1.X2 : e1.h1,
                    children: (0, i.jsx)(e$.i, { user: a, item: s, isHighlighted: !0 }),
                });
            case o.R.PROFILE_EFFECT:
                return (0, i.jsx)("div", {
                    className: r ? e1.ME : e1.sm,
                    children: (0, i.jsx)(eE.A, {
                        skuId: s.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case o.R.PROFILE_FRAME:
                return (0, i.jsx)("div", { className: e1.ob, children: (0, i.jsx)(eN.A, { frame: s }) });
            case o.R.NAMEPLATE:
                return (0, i.jsx)("div", {
                    className: e1.Dz,
                    children: (0, i.jsx)(ev.A, {
                        className: e1.M4,
                        nameplate: s,
                        user: a,
                        nameplatePreviewSize: "large",
                        pendingAvatarDecoration: n,
                        isHighlighted: !0,
                        hideDecorators: !0,
                    }),
                });
            default:
                return null;
        }
    },
    e6 = (e) => {
        let { product: s, user: t, activeSlide: a = 0 } = e,
            r = s.items.length;
        return (0, i.jsx)("div", {
            className: e1.g4,
            children: (0, i.jsx)(v.t, {
                activeSlide: String(a),
                children: s.items.map((e, a) => {
                    let n = String(a),
                        l = null != s.bundledProducts ? s.bundledProducts[a] : void 0,
                        d = `(${a + 1}/${r})`;
                    return (0, i.jsx)(
                        v.q,
                        {
                            id: n,
                            children: (0, i.jsxs)("div", {
                                className: e1.Kg,
                                children: [
                                    (0, i.jsx)(e4, { item: e, product: s, user: t }),
                                    (0, i.jsxs)(I.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: e1.gx,
                                        children: [l?.name, " ", d],
                                    }),
                                ],
                            }),
                        },
                        n,
                    );
                }),
            }),
        });
    },
    e2 = (e) => {
        let { product: s, user: t, activeSlide: a } = e;
        return (0, ed.aw)(s)
            ? (0, i.jsx)(e6, { product: s, user: t, activeSlide: a })
            : (0, e0.pQ)(s.skuId)
              ? (0, i.jsx)(eW.B, { animationState: "on_hover", product: s })
              : s.items.length > 0
                ? (0, i.jsx)(e4, { item: s.items[0], product: s, user: t })
                : null;
    },
    e7 = (e) => {
        let { skuId: s } = e;
        return (0, e0.EZ)(s)
            ? (0, i.jsx)(I.E, {
                  variant: "text-sm/normal",
                  className: e1.CU,
                  children: eT.intl.format(eT.t.Q1scdE, {
                      helpdeskArticle: es.A.getArticleURL(b.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    e3 = (e) => {
        let {
                product: s,
                user: t,
                category: r,
                shouldCheckoutWithOrbs: l,
                tab: c,
                onClose: u,
                returnRef: p,
                previewingVariantIndexProps: j,
                selectedVariantIndex: g,
                activeBundleSlide: A,
                giftRecipient: v,
                giftingOrigin: O,
                onTrackClick: _,
            } = e,
            { analyticsLocations: T } = (0, L.Ay)(),
            { cardId: S, sessionId: y, tilePosition: P } = (0, er.uM)() ?? {},
            B = (0, G.L)(e5.PremiumTypes.TIER_2),
            F = (0, ed.xM)(t),
            { previewingVariantIndex: H, handleEntering: V, handleLeaving: w } = j,
            U = (0, eZ.q)(s, H),
            $ = (0, ek.rb)(s, g);
        d()(null != $, "Selected product should not be null");
        let Z = (0, em.Do)("CollectiblesShopProductDetailsModal") && $.type === o.R.PROFILE_FRAME,
            Q = et.Ay.canUseShopDiscounts(t) || Z,
            Y = (0, ep.h)(s),
            { isPurchased: X, isPartiallyOwnedBundle: ee } = (0, ep.h)($),
            { isDisabled: es, disabledReason: el } = (0, eh.I)($.skuId),
            eu = (0, ed.Zu)({ product: $, isPartiallyOwnedBundle: ee, isPurchased: X }),
            eA = (0, m.bG)([en.A], () => en.A.isClaiming === $?.skuId),
            eI = (0, D.Ay)(),
            ev = (0, h.M)(eI),
            eE = (0, ed.G0)($),
            eN = (0, ed.yt)($, b.lid.DEFAULT),
            eC = eN?.amount === 0,
            { firstAvatarDecoration: eO } = (0, ej.f5)(U ?? $),
            e_ = a.useMemo(() => (0, ed.fT)($, Q), [$, Q]),
            eb = (0, eR.VG)(s),
            eS = (0, eY.X)($),
            eB = (0, ex.r)($, !1),
            eH = (0, eq.V_)(s),
            eW = null != eH,
            eG = (s.variants?.length ?? 0) > 8,
            e$ = (0, eo.W)("CollectiblesShopProductDetailsModal"),
            eQ = c === e0.G2.ORBS && l ? eV.Hi.ORBS : e$ ? eV.Hi.FIAT : void 0,
            eJ = (0, ec.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: e4,
                isOrbExclusive: e6,
                hasSufficientOrbs: e3,
            } = (0, eK.F)({ product: $, hasShopDiscount: Q, hasDiscountOffer: eW, prioritizedCurrency: eQ }),
            e9 = (0, eg.A)({ location: "CollectiblesShopProductDetailsModal", product: $ }),
            se = a.useMemo(() => e4.some((e) => e.currency === e8.Yr.DISCORD_ORB), [e4]);
        (0, J.W)({ disableFetch: !se });
        let ss = a.useCallback(() => {
            _(e0.sH.BUY_WITH_FIAT),
                (0, W.A)({ skuId: $.skuId, analyticsLocations: T, onClose: (e) => (e ? u() : (0, e8.tE)()) });
        }, [T, u, $.skuId, _]);
        a.useEffect(() => {
            if (null != eO) return (0, q.p)({ avatarDecoration: eO }), () => (0, q.p)({ avatarDecoration: void 0 });
        }, [eO]);
        let st = function (e) {
                let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = (0, i.jsx)(z.A, {
                        subscriptionTier: e5.pe.TIER_2,
                        fullWidth: !0,
                        buttonTextOverride: e,
                        onClick: () => {
                            _(e0.sH.UNLOCK_WITH_NITRO), (0, eM.M)();
                        },
                        onSubscribeModalClose: () => {
                            (0, eM.t)({
                                product: $,
                                category: r,
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
                return s ? (0, i.jsx)(L.f5, { value: [...T, M.A.PROFILE_FRAMES_EA_MARKETING], children: t }) : t;
            },
            si = s.hideBadge;
        return (0, i.jsxs)("div", {
            className: e1.qA,
            children: [
                (0, i.jsx)("div", { className: e1.gn, children: !si && (0, i.jsx)(eD.A, { category: r }) }),
                (0, i.jsx)(e2, { product: U ?? $, user: t, activeSlide: A }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: e1.h_,
                            children: [
                                !si && Z
                                    ? (0, i.jsx)("div", {
                                          className: e1.LM,
                                          children: (0, i.jsx)(eF.A, {
                                              location: "CollectiblesShopProductDetailsModal",
                                          }),
                                      })
                                    : (0, i.jsx)(ey, { product: $, isDarkText: !ev, isOrbExclusive: e6 }),
                                (0, i.jsx)(C.D, { variant: "heading-xl/extrabold", className: e1.v7, children: eb }),
                                (0, i.jsx)(I.E, { variant: "text-sm/normal", children: eB }),
                                (0, i.jsx)(e7, { skuId: $.skuId }),
                                Y.isPurchased || Y.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(ef.c, { className: e1.On, isPartiallyPurchased: ee })
                                    : eE
                                      ? (0, i.jsx)(I.E, {
                                            variant: "text-md/semibold",
                                            className: e1.On,
                                            children: eT.intl.string(eT.t.rt69oo),
                                        })
                                      : (0, i.jsx)(ez.B, {
                                            prices: e4,
                                            product: $,
                                            hasShopDiscount: Q,
                                            discountSource: F,
                                            discount: e_,
                                            hasSufficientOrbs: e3,
                                            isProductDisabled: es,
                                            discountOfferAmount: eH,
                                            onTrackClick: _,
                                        }),
                            ],
                        }),
                        (0, ek.B1)(s) &&
                            (0, i.jsx)(R.M, {
                                children: (0, i.jsxs)("div", {
                                    className: n()(e1.Oj, { [e1.OJ]: eG }),
                                    children: [
                                        eG &&
                                            (0, i.jsx)(ew, {
                                                skuId: s.skuId,
                                                overrideVariantIndex: H,
                                                className: e1.L$,
                                            }),
                                        (0, i.jsx)(eU.A, {
                                            skuId: s.skuId,
                                            onVariantEnter: V,
                                            onVariantExit: w,
                                            wrap: !0,
                                        }),
                                        !eG &&
                                            (0, i.jsx)(ew, {
                                                skuId: s.skuId,
                                                overrideVariantIndex: H,
                                                className: e1.L$,
                                            }),
                                    ],
                                }),
                            }),
                        null !== el && (0, i.jsx)(I.E, { variant: "text-xs/normal", className: e1.H$, children: el }),
                        (0, i.jsx)(f.B, {
                            direction: "vertical",
                            gap: 8,
                            children:
                                !eE || B || eC
                                    ? eu
                                        ? X
                                            ? eS
                                                ? (0, i.jsxs)(k.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, i.jsx)(eL.A, {
                                                              product: $,
                                                              onSuccess: u,
                                                              onTrackClick: _,
                                                          }),
                                                          (0, i.jsx)(eP.A, {
                                                              primary: !0,
                                                              product: $,
                                                              onSuccess: u,
                                                              giftRecipient: v,
                                                              giftingOrigin: O,
                                                              onTrackClick: _,
                                                          }),
                                                      ],
                                                  })
                                                : (0, i.jsx)(eL.A, { product: $, onSuccess: u, onTrackClick: _ })
                                            : e9
                                              ? st(eT.intl.string(eT.t.IvmZVF), !0)
                                              : eE
                                                ? (0, i.jsx)(E.$, {
                                                      loading: eA,
                                                      loadingStartedLabel: eT.intl.string(eT.t["TYw+9s"]),
                                                      loadingFinishedLabel: eT.intl.string(eT.t.Pg1UP5),
                                                      onClick: async () => {
                                                          _(e0.sH.ADD_TO_COLLECTION),
                                                              await (0, ea.iJ)($.skuId),
                                                              u(),
                                                              (0, eX.A)({
                                                                  product: $,
                                                                  analyticsLocations: T,
                                                                  purchaseType: e0.gs.PREMIUM_PURCHASE,
                                                              });
                                                      },
                                                      text: eT.intl.string(eT.t.zp6caO),
                                                      fullWidth: !0,
                                                  })
                                                : (0, i.jsx)(i.Fragment, {
                                                      children: e4.map((e, s) => {
                                                          let t,
                                                              a = 0 === s;
                                                          if (e.currency === e8.Yr.DISCORD_ORB) {
                                                              let s, t, r, n;
                                                              return (
                                                                  (s = es
                                                                      ? eT.intl.string(eT.t.cTdr3x)
                                                                      : eT.intl.string(eT.t.zqh7ZM)),
                                                                  (t = !e3 || es),
                                                                  (r = eT.intl.formatToPlainString(eT.t.yi41qQ, {
                                                                      orbPrice: e.amount,
                                                                  })),
                                                                  (n = t ? `${r}, ${s}` : r),
                                                                  (0, i.jsx)(x.m, {
                                                                      position: "top",
                                                                      text: s,
                                                                      shouldShow: t,
                                                                      "aria-label": !1,
                                                                      children: (0, i.jsx)(E.$, {
                                                                          variant: a ? "primary" : "secondary",
                                                                          onClick: () => {
                                                                              _(e0.sH.BUY_WITH_ORBS),
                                                                                  (0, K.B4)({
                                                                                      skuId: $.skuId,
                                                                                      onComplete: (e) => {
                                                                                          (0, ea.gB)(),
                                                                                              u(),
                                                                                              (0, eX.A)({
                                                                                                  product: $,
                                                                                                  analyticsLocations: T,
                                                                                                  itemConsumed:
                                                                                                      e
                                                                                                          ?.entitlements?.[0]
                                                                                                          ?.consumed,
                                                                                                  purchaseType:
                                                                                                      e0.gs.ORB,
                                                                                              });
                                                                                      },
                                                                                      analyticsLocations: T,
                                                                                  });
                                                                          },
                                                                          disabled: t,
                                                                          "aria-label": n,
                                                                          text: eT.intl.format(
                                                                              eJ ? eT.t.JC15qj : eT.t.lOtBOI,
                                                                              {
                                                                                  orbPrice: e.amount,
                                                                                  orbIconHook: () =>
                                                                                      (0, i.jsx)(N.C, {
                                                                                          className: e1.fN,
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
                                                              (t = eW
                                                                  ? eT.intl.formatToPlainString(eT.t["5U5RB5"], {
                                                                        discountOfferAmount: eH,
                                                                    })
                                                                  : eT.intl.formatToPlainString(eT.t["cNSL/j"], {
                                                                        price: (0, ei.$g)(e.amount, e.currency),
                                                                    })),
                                                              (0, i.jsxs)(k.e, {
                                                                  wrap: !1,
                                                                  fullWidth: !0,
                                                                  children: [
                                                                      (0, i.jsx)(E.$, {
                                                                          variant: a ? "primary" : "secondary",
                                                                          onClick: ss,
                                                                          text: t,
                                                                          fullWidth: !0,
                                                                      }),
                                                                      eS &&
                                                                          (0, i.jsx)(eP.A, {
                                                                              primary: a,
                                                                              product: $,
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
                                        : eS
                                          ? (0, i.jsx)(eP.A, {
                                                primary: !0,
                                                product: $,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: v,
                                                giftingOrigin: O,
                                                onTrackClick: _,
                                            })
                                          : null
                                    : st(eT.intl.string(eT.t.sEAnVH)),
                        }),
                        (0, i.jsx)(I.E, {
                            className: n()(e1.ed, !ev && e1.un),
                            variant: "text-xxs/normal",
                            children: eE && !X ? eT.intl.string(eT.t.nKdAlO) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    e9 = (e) => {
        let { user: s, innerClassName: t } = e;
        return (0, i.jsx)("div", {
            className: e1.mV,
            children: (0, i.jsx)(F.A, {
                avatar: (0, i.jsx)(O.eu, {
                    src: s.avatarSrc,
                    size: _._3.SIZE_32,
                    "aria-label": s.name,
                    status: b.clD.ONLINE,
                }),
                name: s.name,
                innerClassName: n()(e1.$L, t),
            }),
        });
    },
    se = (e) => {
        let { user: s, nameplate: t, avatarDecoration: a } = e,
            r = (0, eI.Ov)();
        return (0, i.jsx)("div", {
            className: e1.nJ,
            role: "img",
            "aria-label": eT.intl.string(eT.t.SZeUdR),
            children: (0, i.jsxs)(R.M, {
                children: [
                    (0, i.jsx)(e9, { user: r.mallow, innerClassName: e1.ab }),
                    (0, i.jsxs)(I.E, {
                        variant: "text-sm/semibold",
                        className: e1.OS,
                        children: [eT.intl.string(eT.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, i.jsx)(e9, { user: r.phibi, innerClassName: e1.e9 }),
                    (0, i.jsx)("div", {
                        className: e1.mV,
                        children: (0, i.jsx)(ev.A, {
                            className: e1.M4,
                            innerClassName: e1.e9,
                            user: s,
                            nameplate: t,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: a,
                            hideDecorators: !0,
                        }),
                    }),
                    (0, i.jsx)(e9, { user: r.locke, innerClassName: e1.e9 }),
                    (0, i.jsxs)(I.E, {
                        variant: "text-sm/semibold",
                        className: e1.OS,
                        children: [eT.intl.string(eT.t["NG43/6"]), " - 12"],
                    }),
                    (0, i.jsx)(e9, { user: r.boom, innerClassName: e1.bD }),
                    (0, i.jsx)(e9, { user: r.cherry, innerClassName: e1.bD }),
                ],
            }),
        });
    },
    ss = (e) => {
        let { product: s, user: t, activeBundleSlide: a, isTransitioning: r } = e,
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
            E = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)($.A, {
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
                            containerClassName: h ? e1.Bb : void 0,
                        }),
                        h && (0, i.jsx)(st, { user: t }),
                    ],
                }),
            N = (e) => (0, i.jsx)(se, { user: t, nameplate: e, avatarDecoration: j });
        if (s.type === o.R.BUNDLE) {
            if (!(0, eC.Wb)(s))
                return (0, i.jsx)("div", {
                    className: e1.RA,
                    children: (0, i.jsx)("div", { className: e1.bo, children: E() }),
                });
            {
                let e = a ?? 0,
                    t = s.items[e],
                    d = s.items[Math.max(0, e - 1)],
                    c = d?.type !== t?.type && !l;
                return t.type === o.R.NAMEPLATE
                    ? (0, i.jsx)("div", { className: n()(e1.Zj, r && c ? e1.p2 : ""), children: N(t) })
                    : (0, i.jsx)("div", { className: n()(e1.Ak, r && c ? e1.p2 : ""), children: E() });
            }
        }
        return null != A
            ? (0, i.jsx)("div", { className: e1.Zj, children: N(A) })
            : (0, i.jsx)("div", { className: p?.type === o.R.AVATAR_DECORATION ? e1.RA : e1.Ak, children: E() });
    },
    st = (e) => {
        let { user: s } = e,
            t = ((e) => {
                let { author: s } = e;
                return (0, H.rh)({
                    ...(0, V.Ay)({ author: s, channelId: "1337", content: eT.intl.string(eT.t.d5YwK5) }),
                    state: b.cmJ.SENT,
                    id: "0",
                });
            })({ author: s });
        return (0, i.jsx)("div", {
            role: "img",
            "aria-label": eT.intl.string(eT.t["TN+ZvB"]),
            children: (0, i.jsx)(R.M, {
                children: (0, i.jsxs)(T.Z, {
                    className: e1.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsx)(U.A, { className: e1.G5, author: (0, w.p_)(t), message: t }, t.id),
                        (0, i.jsxs)("div", {
                            className: e1.lG,
                            children: [
                                (0, i.jsx)(S.U, { size: "md", color: "currentColor", className: e1.hq }),
                                (0, i.jsx)(y.n, { size: "md", color: "currentColor", className: e1.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    si = (e) => {
        let {
                transitionState: s,
                onClose: t,
                product: r,
                category: l,
                returnRef: x,
                analyticsSource: h,
                analyticsLocations: v,
                shouldCheckoutWithOrbs: E,
                tab: N,
                giftRecipient: k,
                giftingOrigin: C,
            } = e,
            R = (0, m.bG)([X.default], () => X.default.getCurrentUser()),
            f = (0, eJ.f)(r),
            { previewingVariantIndex: O } = f,
            _ = (0, el.Q)(r),
            T = (0, eZ.q)(r, O),
            S = (0, ek.rb)(r, _);
        d()(null != S, "Selected product should not be null");
        let { analyticsLocations: y } = (0, L.Ay)([...v, M.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eb.Yr)(S.skuId);
        let D = (0, eQ.U1)(l);
        a.useEffect(() => {
            null != R && (0, Y.A)(R.id, R.getAvatarURL(void 0, 80));
        }, [R]);
        let P = a.useMemo(() => (0, ed.V6)(r.type, r.skuId), [r.type, r.skuId]);
        a.useEffect(() => {
            ee.default.track(b.HAw.OPEN_MODAL, {
                type: b.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: h,
                location_stack: y,
                sku_id: S.skuId,
                product_type: P,
            }),
                (0, ea.RD)(S.skuId);
        }, [h, y, S.skuId, P]);
        let { cardId: F, sessionId: H, tilePosition: V } = (0, er.uM)() ?? {},
            w = a.useMemo(() => (0, ek.v8)(r), [r]),
            U = (0, eA.R)({ skuId: S.skuId, productSkuIds: w, analyticsLocations: y });
        (0, B.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: S.skuId,
                card_id: F,
                shop_session_id: H,
                position_in_section: V,
                product_sku_ids: w,
                location_stack: y,
            },
        });
        let W = (0, K.o6)(),
            z = s === p.ip.EXITING,
            G = (0, eq.$R)(r),
            $ = G?.amount,
            Z = null != $ && (G?.discountId === e5.eR || G?.discountId === e5.Qz),
            { activeSlide: q, isTransitioning: Q } = (function (e) {
                let { slideCount: s, intervalMs: t = 3e3 } = e,
                    [i, r] = (0, a.useState)(0),
                    [n, l] = (0, a.useState)(!1),
                    d = (0, a.useCallback)(
                        (e) => {
                            n ||
                                e < 0 ||
                                e >= s ||
                                (l(!0),
                                setTimeout(() => {
                                    r(e), l(!1);
                                }, 300));
                        },
                        [n, s, 300],
                    );
                return (
                    (0, a.useEffect)(() => {
                        if (s <= 1) return;
                        let e = setInterval(() => {
                            d((i + 1) % s);
                        }, t);
                        return () => clearInterval(e);
                    }, [s, t, i, d]),
                    { activeSlide: i, isTransitioning: n }
                );
            })({ slideCount: a.useMemo(() => ((0, ed.aw)(S) ? S.items.length : 0), [S]), intervalMs: 5e3 }),
            J = (0, eu.c)("product_details_modal");
        return null != R && (r.skuId !== u.j.PREMIUM_TIER_2_1_DAY || J)
            ? (0, i.jsx)(L.f5, {
                  value: y,
                  children: (0, i.jsxs)(j.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: e1.CR,
                      returnRef: x,
                      transitionState: s,
                      size: j.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, i.jsxs)(j.$m, {
                              "data-migration-pending": !0,
                              className: e1.jE,
                              children: [
                                  (0, i.jsx)(e3, {
                                      user: R,
                                      product: r,
                                      category: l,
                                      onClose: t,
                                      previewingVariantIndexProps: f,
                                      selectedVariantIndex: _,
                                      shouldCheckoutWithOrbs: E,
                                      tab: N,
                                      activeBundleSlide: q,
                                      giftRecipient: k?.id !== R.id ? k : void 0,
                                      giftingOrigin: k?.id !== R.id ? C : void 0,
                                      onTrackClick: U,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: n()(
                                          e1.i1,
                                          (0, e0.EZ)(S.skuId)
                                              ? e1.bF
                                              : S.type === o.R.AVATAR_DECORATION
                                                ? e1.Jq
                                                : e1.eF,
                                      ),
                                      style: { backgroundImage: `url(${D})` },
                                      children: [
                                          (0, e0.pQ)(r.skuId)
                                              ? r.skuId === e0.Dp.ORB_PROFILE_BADGE
                                                  ? W || z
                                                      ? null
                                                      : (0, i.jsx)(eH.z, { user: R })
                                                  : (0, e0.EZ)(r.skuId)
                                                    ? (0, i.jsx)(eB.I, {})
                                                    : (0, i.jsx)(eW.B, { product: r, className: e1.Ms })
                                              : (0, i.jsx)(ss, {
                                                    user: R,
                                                    product: T ?? S,
                                                    activeBundleSlide: q,
                                                    isTransitioning: Q,
                                                }),
                                          (0, i.jsxs)("div", {
                                              className: e1.VG,
                                              children: [
                                                  (0, i.jsx)(eG.R, {
                                                      product: r,
                                                      selectedVariantIndex: _,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: U,
                                                  }),
                                                  (0, i.jsx)(eO.V, { skuId: S.skuId, tab: N, onTrackClick: U }),
                                                  (0, i.jsx)(g.K, {
                                                      "aria-label": eT.intl.string(eT.t.cpT0Cq),
                                                      onClick: () => {
                                                          U(e0.sH.CLOSE_DETAIL), t();
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
                                      className: e1.Hx,
                                      children: [
                                          (0, i.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: e1.OC,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: e1.do,
                                              children: [
                                                  (0, i.jsx)(I.E, {
                                                      variant: "text-sm/semibold",
                                                      className: e1.Q2,
                                                      children: eT.intl.format(eT.t["78ph4b"], {
                                                          discountOfferAmount: $,
                                                      }),
                                                  }),
                                                  G?.expiresAt != null && (0, i.jsx)(e_.e, { endDate: G.expiresAt }),
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
