t.r(s), t.d(s, { default: () => si });
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
    f = t(331322),
    R = t(97808),
    O = t(778712),
    T = t(652215),
    b = t(346055),
    _ = t(993077),
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
    ea = t(564064),
    en = t(440938),
    er = t(4227),
    el = t(298072),
    ed = t(993408),
    ec = t(940980),
    eo = t(503089),
    eu = t(13875),
    em = t(495565),
    ex = t(740076),
    eh = t(466459),
    ep = t(442759),
    ej = t(395068),
    eg = t(966619),
    eA = t(780898),
    eI = t(344346),
    ev = t(139136),
    eN = t(395744),
    ek = t(623373),
    eE = t(660653),
    eC = t(536572),
    ef = t(49620),
    eR = t(586445),
    eO = t(854818),
    eT = t(177366),
    eb = t(375708),
    e_ = t(278307);
function eS(e) {
    let { product: s, isDarkText: t = !1, isOrbExclusive: a = !1 } = e,
        n = (function (e, s) {
            if (s) return eb.intl.string(eb.t["0TmQRG"]);
            switch (e) {
                case o.R.AVATAR_DECORATION:
                    return eb.intl.string(eb.t["7v0T9P"]);
                case o.R.PROFILE_EFFECT:
                    return eb.intl.string(eb.t.wR5wOo);
                case o.R.PROFILE_FRAME:
                    return eb.intl.string(eb.t.GWrZOd);
                case o.R.NAMEPLATE:
                    return eb.intl.string(eb.t.x5CoXR);
            }
            return null;
        })(s.type, a);
    return null === n
        ? null
        : (0, i.jsx)(I.E, { variant: "text-xxs/normal", className: r()([e_.kL, t ? e_.ap : e_.aK]), children: n });
}
var ey = t(203312),
    eD = t(878112),
    eP = t(572595),
    eL = t(641405),
    eM = t(231540),
    eB = t(110629),
    eF = t(839863),
    ew = t(184659),
    eH = t(561769);
let eU = (e) => {
    let { skuId: s, overrideVariantIndex: t, className: a } = e,
        n = (0, eH.Vm)(s),
        r = (0, el.Q)(n);
    return null != n && (0, ek.B1)(n)
        ? (0, i.jsx)(I.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: a,
              lineClamp: 1,
              children: n.variants[t ?? r].variantLabel,
          })
        : null;
};
var eV = t(661847),
    eW = t(846957),
    ez = t(680262),
    e$ = t(139146),
    eG = t(929283),
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
    e6 = t(269493);
let e4 = (e) => {
        let { item: s, product: t, user: a } = e,
            n = (0, ed.aw)(t),
            { firstAvatarDecoration: r } = (0, ep.f5)(t);
        switch (s.type) {
            case o.R.AVATAR_DECORATION:
                return (0, i.jsx)("div", {
                    className: n ? e6.X2 : e6.h1,
                    children: (0, i.jsx)(eG.i, { user: a, item: s, isHighlighted: !0 }),
                });
            case o.R.PROFILE_EFFECT:
                return (0, i.jsx)("div", {
                    className: n ? e6.ME : e6.sm,
                    children: (0, i.jsx)(ev.A, {
                        skuId: s.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case o.R.PROFILE_FRAME:
                return (0, i.jsx)("div", { className: e6.ob, children: (0, i.jsx)(eN.A, { frame: s }) });
            case o.R.NAMEPLATE:
                return (0, i.jsx)("div", {
                    className: e6.Dz,
                    children: (0, i.jsx)(eI.A, {
                        className: e6.M4,
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
    e1 = (e) => {
        let { product: s, user: t, activeSlide: a = 0 } = e,
            n = s.items.length;
        return (0, i.jsx)("div", {
            className: e6.g4,
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
                                className: e6.Kg,
                                children: [
                                    (0, i.jsx)(e4, { item: e, product: s, user: t }),
                                    (0, i.jsxs)(I.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: e6.gx,
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
    e2 = (e) => {
        let { product: s, user: t, activeSlide: a } = e;
        return (0, ed.aw)(s)
            ? (0, i.jsx)(e1, { product: s, user: t, activeSlide: a })
            : (0, e0.pQ)(s.skuId)
              ? (0, i.jsx)(eW.B, { animationState: "on_hover", product: s })
              : s.items.length > 0
                ? (0, i.jsx)(e4, { item: s.items[0], product: s, user: t })
                : null;
    },
    e3 = (e) => {
        let { skuId: s } = e;
        return (0, e0.EZ)(s)
            ? (0, i.jsx)(I.E, {
                  variant: "text-sm/normal",
                  className: e6.CU,
                  children: eb.intl.format(eb.t.Q1scdE, {
                      helpdeskArticle: es.A.getArticleURL(T.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    e7 = (e) => {
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
                giftingOrigin: R,
                onTrackClick: O,
            } = e,
            { analyticsLocations: b } = (0, M.Ay)(),
            { cardId: _, sessionId: S, tilePosition: y } = (0, en.uM)() ?? {},
            P = (0, $.L)(e5.PremiumTypes.TIER_2),
            L = (0, ed.xM)(t),
            { previewingVariantIndex: B, handleEntering: F, handleLeaving: w } = j,
            H = (0, eZ.q)(s, B),
            U = (0, ek.rb)(s, g);
        d()(null != U, "Selected product should not be null");
        let V = (0, eu.Do)("CollectiblesShopProductDetailsModal") && U.type === o.R.PROFILE_FRAME,
            G = et.Ay.canUseShopDiscounts(t) || V,
            Z = (0, eh.h)(s),
            { isPurchased: Q, isPartiallyOwnedBundle: Y } = (0, eh.h)(U),
            { isDisabled: X, disabledReason: ee } = (0, ex.I)(U.skuId),
            es = (0, ed.Zu)({ product: U, isPartiallyOwnedBundle: Y, isPurchased: Q }),
            el = (0, m.bG)([er.A], () => er.A.isClaiming === U?.skuId),
            eo = (0, D.Ay)(),
            eg = (0, h.M)(eo),
            eA = (0, ed.G0)(U),
            eI = (0, ed.yt)(U, T.lid.DEFAULT),
            ev = eI?.amount === 0,
            { firstAvatarDecoration: eN } = (0, ep.f5)(H ?? U),
            eE = a.useMemo(() => (0, ed.fT)(U, G), [U, G]),
            eR = (0, eC.VG)(s),
            eO = (0, eY.X)(U),
            eT = (0, em.r)(U, !1),
            e_ = (0, eq.V_)(s),
            eM = null != e_,
            ew = (s.variants?.length ?? 0) > 8,
            eW = (0, ec.W)("CollectiblesShopProductDetailsModal"),
            e$ = c === e0.G2.ORBS && l ? eH.Hi.ORBS : eW ? eH.Hi.FIAT : void 0,
            {
                checkoutEligiblePrices: eG,
                isOrbExclusive: eQ,
                hasSufficientOrbs: eJ,
            } = (0, eK.F)({ product: U, hasShopDiscount: G, hasDiscountOffer: eM, prioritizedCurrency: e$ }),
            e4 = (0, ej.A)({ location: "CollectiblesShopProductDetailsModal", product: U }),
            e1 = a.useMemo(() => eG.some((e) => e.currency === e8.Yr.DISCORD_ORB), [eG]);
        (0, J.W)({ disableFetch: !e1 });
        let e7 = a.useCallback(() => {
            O(e0.sH.BUY_WITH_FIAT),
                (0, W.A)({ skuId: U.skuId, analyticsLocations: b, onClose: (e) => (e ? u() : (0, e8.tE)()) });
        }, [b, u, U.skuId, O]);
        a.useEffect(() => {
            if (null != eN) return (0, q.p)({ avatarDecoration: eN }), () => (0, q.p)({ avatarDecoration: void 0 });
        }, [eN]);
        let e9 = function (e) {
                let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = (0, i.jsx)(z.A, {
                        subscriptionTier: e5.pe.TIER_2,
                        fullWidth: !0,
                        buttonTextOverride: e,
                        onClick: () => {
                            O(e0.sH.UNLOCK_WITH_NITRO), (0, eP.M)();
                        },
                        onSubscribeModalClose: () => {
                            (0, eP.t)({
                                product: U,
                                category: n,
                                shouldCheckoutWithOrbs: l,
                                returnRef: p,
                                analyticsLocations: b,
                                tab: c,
                                giftRecipient: v,
                                giftingOrigin: R,
                                cardId: _,
                                sessionId: S,
                                tilePosition: y,
                            });
                        },
                    });
                return s ? (0, i.jsx)(eF.A, { analyticsLocations: b, children: t }) : t;
            },
            se = s.hideBadge;
        return (0, i.jsxs)("div", {
            className: e6.qA,
            children: [
                (0, i.jsx)("div", {
                    className: e6.gn,
                    children: se
                        ? null
                        : (0, i.jsxs)("div", {
                              className: e6.fC,
                              children: [
                                  V && (0, i.jsx)(eB.A, { location: "CollectiblesShopProductDetailsModal" }),
                                  (0, i.jsx)(ey.A, { category: n }),
                              ],
                          }),
                }),
                (0, i.jsx)(e2, { product: H ?? U, user: t, activeSlide: A }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: e6.h_,
                            children: [
                                (0, i.jsx)(eS, { product: U, isDarkText: !eg, isOrbExclusive: eQ }),
                                (0, i.jsx)(C.D, { variant: "heading-xl/extrabold", className: e6.v7, children: eR }),
                                (0, i.jsx)(I.E, { variant: "text-sm/normal", children: eT }),
                                (0, i.jsx)(e3, { skuId: U.skuId }),
                                Z.isPurchased || Z.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(ef.c, { className: e6.On, isPartiallyPurchased: Y })
                                    : eA
                                      ? (0, i.jsx)(I.E, {
                                            variant: "text-md/semibold",
                                            className: e6.On,
                                            children: eb.intl.string(eb.t.rt69oo),
                                        })
                                      : (0, i.jsx)(ez.B, {
                                            prices: eG,
                                            product: U,
                                            hasShopDiscount: G,
                                            discountSource: L,
                                            discount: eE,
                                            hasSufficientOrbs: eJ,
                                            isProductDisabled: X,
                                            discountOfferAmount: e_,
                                            onTrackClick: O,
                                        }),
                            ],
                        }),
                        (0, ek.B1)(s) &&
                            (0, i.jsxs)("div", {
                                className: r()(e6.Oj, { [e6.OJ]: ew }),
                                children: [
                                    ew && (0, i.jsx)(eU, { skuId: s.skuId, overrideVariantIndex: B, className: e6.L$ }),
                                    (0, i.jsx)(eV.A, { skuId: s.skuId, onVariantEnter: F, onVariantExit: w, wrap: !0 }),
                                    !ew &&
                                        (0, i.jsx)(eU, { skuId: s.skuId, overrideVariantIndex: B, className: e6.L$ }),
                                ],
                            }),
                        null !== ee && (0, i.jsx)(I.E, { variant: "text-xs/normal", className: e6.H$, children: ee }),
                        (0, i.jsx)(f.B, {
                            direction: "vertical",
                            gap: 8,
                            children:
                                !eA || P || ev
                                    ? es
                                        ? Q
                                            ? eO
                                                ? (0, i.jsxs)(E.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, i.jsx)(eL.A, {
                                                              product: U,
                                                              onSuccess: u,
                                                              onTrackClick: O,
                                                          }),
                                                          (0, i.jsx)(eD.A, {
                                                              primary: !0,
                                                              product: U,
                                                              onSuccess: u,
                                                              giftRecipient: v,
                                                              giftingOrigin: R,
                                                              onTrackClick: O,
                                                          }),
                                                      ],
                                                  })
                                                : (0, i.jsx)(eL.A, { product: U, onSuccess: u, onTrackClick: O })
                                            : e4
                                              ? e9(eb.intl.string(eb.t["9wfL34"]), !0)
                                              : eA
                                                ? (0, i.jsx)(N.$, {
                                                      loading: el,
                                                      loadingStartedLabel: eb.intl.string(eb.t["TYw+9s"]),
                                                      loadingFinishedLabel: eb.intl.string(eb.t.Pg1UP5),
                                                      onClick: async () => {
                                                          O(e0.sH.ADD_TO_COLLECTION),
                                                              await (0, ea.iJ)(U.skuId),
                                                              u(),
                                                              (0, eX.A)({
                                                                  product: U,
                                                                  analyticsLocations: b,
                                                                  purchaseType: e0.gs.PREMIUM_PURCHASE,
                                                              });
                                                      },
                                                      text: eb.intl.string(eb.t.zp6caO),
                                                      fullWidth: !0,
                                                  })
                                                : (0, i.jsx)(i.Fragment, {
                                                      children: eG.map((e, s) => {
                                                          let t,
                                                              a = 0 === s;
                                                          if (e.currency === e8.Yr.DISCORD_ORB) {
                                                              let s, t, n, r;
                                                              return (
                                                                  (s = X
                                                                      ? eb.intl.string(eb.t.cTdr3x)
                                                                      : eb.intl.string(eb.t.zqh7ZM)),
                                                                  (t = !eJ || X),
                                                                  (n = eb.intl.formatToPlainString(eb.t.yi41qQ, {
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
                                                                              O(e0.sH.BUY_WITH_ORBS),
                                                                                  (0, K.B4)({
                                                                                      skuId: U.skuId,
                                                                                      onComplete: (e) => {
                                                                                          (0, ea.gB)(),
                                                                                              u(),
                                                                                              (0, eX.A)({
                                                                                                  product: U,
                                                                                                  analyticsLocations: b,
                                                                                                  itemConsumed:
                                                                                                      e
                                                                                                          ?.entitlements?.[0]
                                                                                                          ?.consumed,
                                                                                                  purchaseType:
                                                                                                      e0.gs.ORB,
                                                                                              });
                                                                                      },
                                                                                      analyticsLocations: b,
                                                                                  });
                                                                          },
                                                                          disabled: t,
                                                                          "aria-label": r,
                                                                          text: eb.intl.format(eb.t.JC15qj, {
                                                                              orbPrice: e.amount,
                                                                              orbIconHook: () =>
                                                                                  (0, i.jsx)(k.C, {
                                                                                      className: e6.fN,
                                                                                      size: "sm",
                                                                                      color: "currentColor",
                                                                                  }),
                                                                          }),
                                                                          fullWidth: !0,
                                                                      }),
                                                                  })
                                                              );
                                                          }
                                                          return (
                                                              (t = eM
                                                                  ? eb.intl.formatToPlainString(eb.t["5U5RB5"], {
                                                                        discountOfferAmount: e_,
                                                                    })
                                                                  : eb.intl.formatToPlainString(eb.t["cNSL/j"], {
                                                                        price: (0, ei.$g)(e.amount, e.currency),
                                                                    })),
                                                              (0, i.jsxs)(E.e, {
                                                                  wrap: !1,
                                                                  fullWidth: !0,
                                                                  children: [
                                                                      (0, i.jsx)(N.$, {
                                                                          variant: a ? "primary" : "secondary",
                                                                          onClick: e7,
                                                                          text: t,
                                                                          fullWidth: !0,
                                                                      }),
                                                                      eO &&
                                                                          (0, i.jsx)(eD.A, {
                                                                              primary: a,
                                                                              product: U,
                                                                              onSuccess: u,
                                                                              giftRecipient: v,
                                                                              giftingOrigin: R,
                                                                              onTrackClick: O,
                                                                          }),
                                                                  ],
                                                              })
                                                          );
                                                      }),
                                                  })
                                        : eO
                                          ? (0, i.jsx)(eD.A, {
                                                primary: !0,
                                                product: U,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: v,
                                                giftingOrigin: R,
                                                onTrackClick: O,
                                            })
                                          : null
                                    : e9(eb.intl.string(eb.t.sEAnVH)),
                        }),
                        (0, i.jsx)(I.E, {
                            className: r()(e6.ed, !eg && e6.un),
                            variant: "text-xxs/normal",
                            children: eA && !Q ? eb.intl.string(eb.t.nKdAlO) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    e9 = (e) => {
        let { user: s, innerClassName: t } = e;
        return (0, i.jsx)("div", {
            className: e6.mV,
            children: (0, i.jsx)(F.A, {
                avatar: (0, i.jsx)(R.eu, {
                    src: s.avatarSrc,
                    size: O._3.SIZE_32,
                    "aria-label": s.name,
                    status: T.clD.ONLINE,
                }),
                name: s.name,
                innerClassName: r()(e6.$L, t),
            }),
        });
    },
    se = (e) => {
        let { user: s, nameplate: t, avatarDecoration: a } = e,
            n = (0, eA.Ov)();
        return (0, i.jsx)("div", {
            className: e6.nJ,
            role: "img",
            "aria-label": eb.intl.string(eb.t.SZeUdR),
            children: (0, i.jsxs)(b.M, {
                children: [
                    (0, i.jsx)(e9, { user: n.mallow, innerClassName: e6.ab }),
                    (0, i.jsxs)(I.E, {
                        variant: "text-sm/semibold",
                        className: e6.OS,
                        children: [eb.intl.string(eb.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, i.jsx)(e9, { user: n.phibi, innerClassName: e6.e9 }),
                    (0, i.jsx)("div", {
                        className: e6.mV,
                        children: (0, i.jsx)(eI.A, {
                            className: e6.M4,
                            innerClassName: e6.e9,
                            user: s,
                            nameplate: t,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: a,
                            hideDecorators: !0,
                        }),
                    }),
                    (0, i.jsx)(e9, { user: n.locke, innerClassName: e6.e9 }),
                    (0, i.jsxs)(I.E, {
                        variant: "text-sm/semibold",
                        className: e6.OS,
                        children: [eb.intl.string(eb.t["NG43/6"]), " - 12"],
                    }),
                    (0, i.jsx)(e9, { user: n.boom, innerClassName: e6.bD }),
                    (0, i.jsx)(e9, { user: n.cherry, innerClassName: e6.bD }),
                ],
            }),
        });
    },
    ss = (e) => {
        let { product: s, user: t, activeBundleSlide: a, isTransitioning: n } = e,
            l = (0, m.bG)([P.Ay], () => P.Ay.useReducedMotion),
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
            } = (0, ep.f5)(s),
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
                            className: h ? e6.oB : void 0,
                        }),
                        h && (0, i.jsx)(st, { user: t }),
                    ],
                }),
            k = (e) => (0, i.jsx)(se, { user: t, nameplate: e, avatarDecoration: j });
        if (s.type === o.R.BUNDLE) {
            if (!(0, eE.Wb)(s))
                return (0, i.jsx)("div", {
                    className: e6.RA,
                    children: (0, i.jsx)("div", { className: e6.bo, children: N() }),
                });
            {
                let e = a ?? 0,
                    t = s.items[e],
                    d = s.items[Math.max(0, e - 1)],
                    c = d?.type !== t?.type && !l;
                return t.type === o.R.NAMEPLATE
                    ? (0, i.jsx)("div", { className: r()(e6.Zj, n && c ? e6.p2 : ""), children: k(t) })
                    : (0, i.jsx)("div", { className: r()(e6.Ak, n && c ? e6.p2 : ""), children: N() });
            }
        }
        return null != A
            ? (0, i.jsx)("div", { className: e6.Zj, children: k(A) })
            : (0, i.jsx)("div", { className: p?.type === o.R.AVATAR_DECORATION ? e6.RA : e6.Ak, children: N() });
    },
    st = (e) => {
        let { user: s } = e,
            t = ((e) => {
                let { author: s } = e;
                return (0, w.rh)({
                    ...(0, H.Ay)({ author: s, channelId: "1337", content: eb.intl.string(eb.t.d5YwK5) }),
                    state: T.cmJ.SENT,
                    id: "0",
                });
            })({ author: s });
        return (0, i.jsx)("div", {
            role: "img",
            "aria-label": eb.intl.string(eb.t["TN+ZvB"]),
            children: (0, i.jsx)(b.M, {
                children: (0, i.jsxs)(_.Z, {
                    className: e6.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsx)(V.A, { className: e6.G5, author: (0, U.p_)(t), message: t }, t.id),
                        (0, i.jsxs)("div", {
                            className: e6.lG,
                            children: [
                                (0, i.jsx)(S.U, { size: "md", color: "currentColor", className: e6.hq }),
                                (0, i.jsx)(y.n, { size: "md", color: "currentColor", className: e6.hq }),
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
            R = (0, eJ.f)(n),
            { previewingVariantIndex: O } = R,
            b = (0, el.Q)(n),
            _ = (0, eZ.q)(n, O),
            S = (0, ek.rb)(n, b);
        d()(null != S, "Selected product should not be null");
        let { analyticsLocations: y } = (0, M.Ay)([...v, L.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eT.Yr)(S.skuId);
        let D = (0, eQ.U1)(l);
        a.useEffect(() => {
            null != f && (0, Y.A)(f.id, f.getAvatarURL(void 0, 80));
        }, [f]);
        let P = a.useMemo(() => (0, ed.V6)(n.type, n.skuId), [n.type, n.skuId]);
        a.useEffect(() => {
            ee.default.track(T.HAw.OPEN_MODAL, {
                type: T.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: h,
                location_stack: y,
                sku_id: S.skuId,
                product_type: P,
            }),
                (0, ea.RD)(S.skuId);
        }, [h, y, S.skuId, P]);
        let { cardId: F, sessionId: w, tilePosition: H } = (0, en.uM)() ?? {},
            U = a.useMemo(() => (0, ek.v8)(n), [n]),
            V = (0, eg.R)({ skuId: S.skuId, productSkuIds: U, analyticsLocations: y });
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
            $ = (0, eq.$R)(n),
            G = $?.amount,
            Z = null != G && ($?.discountId === e5.eR || $?.discountId === e5.Qz),
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
            J = (0, eo.c)("product_details_modal");
        return null != f && (n.skuId !== u.j.PREMIUM_TIER_2_1_DAY || J)
            ? (0, i.jsx)(M.f5, {
                  value: y,
                  children: (0, i.jsxs)(j.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: e6.CR,
                      returnRef: x,
                      transitionState: s,
                      size: j.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, i.jsxs)(j.$m, {
                              "data-migration-pending": !0,
                              className: e6.jE,
                              children: [
                                  (0, i.jsx)(e7, {
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
                                          e6.i1,
                                          (0, e0.EZ)(S.skuId)
                                              ? e6.bF
                                              : S.type === o.R.AVATAR_DECORATION
                                                ? e6.Jq
                                                : e6.eF,
                                      ),
                                      style: { backgroundImage: `url(${D})` },
                                      children: [
                                          (0, e0.pQ)(n.skuId)
                                              ? n.skuId === e0.Dp.ORB_PROFILE_BADGE
                                                  ? W || z
                                                      ? null
                                                      : (0, i.jsx)(ew.z, { user: f })
                                                  : (0, e0.EZ)(n.skuId)
                                                    ? (0, i.jsx)(eM.I, {})
                                                    : (0, i.jsx)(eW.B, { product: n, className: e6.Ms })
                                              : (0, i.jsx)(ss, {
                                                    user: f,
                                                    product: _ ?? S,
                                                    activeBundleSlide: q,
                                                    isTransitioning: Q,
                                                }),
                                          (0, i.jsxs)("div", {
                                              className: e6.VG,
                                              children: [
                                                  (0, i.jsx)(e$.R, {
                                                      product: n,
                                                      selectedVariantIndex: b,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: V,
                                                  }),
                                                  (0, i.jsx)(eR.V, { skuId: S.skuId, tab: k, onTrackClick: V }),
                                                  (0, i.jsx)(g.K, {
                                                      "aria-label": eb.intl.string(eb.t.cpT0Cq),
                                                      onClick: () => {
                                                          V(e0.sH.CLOSE_DETAIL), t();
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
                                                      children: eb.intl.format(eb.t["78ph4b"], {
                                                          discountOfferAmount: G,
                                                      }),
                                                  }),
                                                  $?.expiresAt != null && (0, i.jsx)(eO.e, { endDate: $.expiresAt }),
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
