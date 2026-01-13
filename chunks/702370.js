n.d(t, { default: () => ez }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    c = n.n(o),
    s = n(979554),
    u = n(314794),
    d = n(311570),
    m = n(399606),
    f = n(28664),
    p = n(780384),
    b = n(481060),
    v = n(410030),
    h = n(607070),
    x = n(100527),
    g = n(906732),
    P = n(570908),
    j = n(786761),
    O = n(3148),
    C = n(739566),
    I = n(753206),
    T = n(4242),
    y = n(566697),
    w = n(333867),
    E = n(767714),
    N = n(150039),
    S = n(678135),
    A = n(876917),
    R = n(643879),
    _ = n(484459),
    k = n(706454),
    L = n(825102),
    Z = n(275388),
    B = n(25990),
    D = n(594174),
    U = n(626135),
    M = n(63063),
    F = n(74538),
    G = n(937615),
    H = n(335131),
    V = n(1870),
    z = n(429368),
    W = n(884697),
    q = n(83479),
    K = n(290175),
    J = n(724994),
    Y = n(328456),
    Q = n(27123),
    X = n(330349),
    $ = n(556971),
    ee = n(390698),
    et = n(525518),
    en = n(168020),
    er = n(426171),
    ei = n(224068),
    ea = n(813083),
    el = n(680942),
    eo = n(558060),
    ec = n(539598),
    es = n(237031),
    eu = n(17137),
    ed = n(38914),
    em = n(259673),
    ef = n(749068),
    ep = n(406667),
    eb = n(508925),
    ev = n(953405),
    eh = n(143941),
    ex = n(616066),
    eg = n(332246),
    eP = n(58201),
    ej = n(445794),
    eO = n(794324),
    eC = n(694364),
    eI = n(361110),
    eT = n(29121),
    ey = n(956472),
    ew = n(832149),
    eE = n(215023),
    eN = n(981631),
    eS = n(474936),
    eA = n(231338),
    eR = n(388032),
    e_ = n(260321);
function ek(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function eL(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eZ = (e) => {
        let { item: t, product: n, user: a } = e,
            l = i.useRef(null),
            o = (0, W.x6)(n),
            { firstAvatarDecoration: c } = (0, Y.Rj)(n);
        return t.type === s.Z.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: o ? e_.bundleAvatarPreviewContainer : e_.avatarPreviewContainer,
                  children: (0, r.jsx)(ex.R, {
                      user: a,
                      item: t,
                      isHighlighted: !0,
                  }),
              })
            : t.type === s.Z.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: o ? e_.bundlePfxPreviewContainer : e_.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(A.Z, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === s.Z.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: l,
                      className: e_.nameplatePreviewContainer,
                      children: (0, r.jsx)(y.Z, {
                          className: e_.nameplatePreview,
                          nameplate: t,
                          showPlaceholderUser: !0,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: c,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    eB = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            a = t.items.length;
        return (0, r.jsx)("div", {
            className: e_.bundlePreviewContainer,
            children: (0, r.jsx)(b.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        o = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        c = "(".concat(i + 1, "/").concat(a, ")");
                    return (0, r.jsx)(
                        b.Mi4,
                        {
                            id: l,
                            children: (0, r.jsxs)("div", {
                                className: e_.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eZ, {
                                        item: e,
                                        product: t,
                                        user: n,
                                    }),
                                    (0, r.jsxs)(b.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: e_.bundleSlideTitle,
                                        children: [null == o ? void 0 : o.name, " ", c],
                                    }),
                                ],
                            }),
                        },
                        l,
                    );
                }),
            }),
        });
    },
    eD = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, W.x6)(t)
            ? (0, r.jsx)(eB, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, eE.o0)(t.skuId)
              ? (0, r.jsx)(eb.b, {
                    animationState: "on_hover",
                    product: t,
                })
              : t.items.length > 0
                ? (0, r.jsx)(eZ, {
                      item: t.items[0],
                      product: t,
                      user: n,
                  })
                : null;
    },
    eU = (e) => {
        let { skuId: t } = e;
        return t === u.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(b.Text, {
                  variant: "text-sm/normal",
                  className: e_.learnMoreLink,
                  children: eR.intl.format(eR.t.Q1scdE, {
                      helpdeskArticle: M.Z.getArticleURL(eN.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eM = (e) => {
        let {
                product: t,
                user: n,
                category: a,
                shouldCheckoutWithOrbs: o,
                onClose: u,
                returnRef: h,
                previewingVariantIndexProps: x,
                selectedVariantIndex: P,
                activeBundleSlide: j,
                rentalDuration: O,
            } = e,
            { analyticsLocations: C } = (0, g.ZP)(),
            I = (0, m.e7)([k.default], () => k.default.locale),
            T = F.ZP.canUseCollectibles(n),
            { previewingVariantIndex: y, handleEntering: S, handleLeaving: A } = x,
            R = (0, eg.N)(t, y),
            _ = (0, eP.W)(t, P);
        c()(null != _, "Selected product should not be null");
        let B = (0, J.L)(t),
            { isPurchased: D, isPartiallyOwnedBundle: U, isRented: M } = (0, J.L)(_),
            { isDisabled: z, disabledReason: X } = (0, K.G)(_.skuId),
            $ = (0, W.ne)({
                product: _,
                isPartiallyOwnedBundle: U,
                isPurchased: D,
            }),
            et = null != O,
            en = (0, m.e7)([V.Z], () => V.Z.isClaiming === (null == _ ? void 0 : _.skuId)),
            er = (0, v.ZP)(),
            ed = (0, p.wj)(er),
            em = (0, W.G1)(_),
            eb = (0, W.ql)(_, eN.tuJ.DEFAULT),
            eh = (null == eb ? void 0 : eb.amount) === 0,
            { firstAvatarDecoration: ex } = (0, Y.Rj)(null != R ? R : _),
            eO = i.useMemo(() => (0, W.BH)(_, T), [_, T]),
            eI = (0, eT.To)(_),
            ek = (0, eC.J)(_),
            { enabled: eL } = (0, L.W)({ location: "collectibles_shop_product_details_modal" }),
            eZ = (0, q.G)(_, !1, O),
            eB = (0, ej.Iw)(t),
            eM = null != eB,
            {
                checkoutEligiblePrices: eF,
                isOrbExclusive: eG,
                hasSufficientOrbs: eH,
            } = (0, ey.Ip)({
                product: _,
                isPremiumUser: T,
                hasDiscountOffer: eM,
                isRental: null != O,
            }),
            eV = i.useCallback(
                () =>
                    (0, w.Z)({
                        skuId: _.skuId,
                        analyticsLocations: C,
                        variantsReturnStyle: d.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? u() : (0, eA.dG)()),
                    }),
                [C, u, _.skuId],
            );
        return (
            i.useEffect(() => {
                if (null != ex) return (0, N.PO)(ex), () => (0, N.PO)(void 0);
            }, [ex]),
            (0, r.jsxs)("div", {
                className: e_.collectibleInfoContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: e_.titleContainer,
                        children: (0, r.jsx)(ea.Z, { category: a }),
                    }),
                    (0, r.jsx)(eD, {
                        product: null != R ? R : _,
                        user: n,
                        activeSlide: j,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: e_.description,
                                children: [
                                    (0, r.jsx)(ei.Z, {
                                        product: _,
                                        isDarkText: !ed,
                                        isOrbExclusive: eG,
                                        rentalDuration: O,
                                    }),
                                    (0, r.jsx)(b.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: e_.headingWithItemTypePill,
                                        children: eI,
                                    }),
                                    (0, r.jsx)(b.Text, {
                                        variant: "text-sm/normal",
                                        children: eZ,
                                    }),
                                    (0, r.jsx)(eU, { skuId: _.skuId }),
                                    B.isPurchased || B.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(ee.U, {
                                              className: e_.priceTag,
                                              isPartiallyPurchased: U,
                                          })
                                        : em
                                          ? (0, r.jsx)(b.Text, {
                                                variant: "text-md/semibold",
                                                className: e_.priceTag,
                                                children: eR.intl.string(eR.t.rt69oo),
                                            })
                                          : eL
                                            ? (0, r.jsx)(ev.a, {
                                                  prices: eF,
                                                  product: _,
                                                  isPremiumUser: T,
                                                  discount: eO,
                                                  hasSufficientOrbs: eH,
                                                  isProductDisabled: z,
                                                  discountOfferAmount: eB,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: e_.priceTagContainer,
                                                  children: [
                                                      (0, r.jsx)(eo.Z, {
                                                          product: _,
                                                          discount: eO,
                                                          isPremiumUser: T,
                                                          hideStrikethroughPrice: !T || eM,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eB,
                                                      }),
                                                      T || eM ? null : (0, r.jsx)(ec.Z, { product: _ }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, Q.ox)(t) &&
                                (0, r.jsx)(b.Rny, {
                                    children: (0, r.jsxs)("div", {
                                        className: e_.variantsContainer,
                                        children: [
                                            (0, r.jsx)(ep.Z, {
                                                skuId: t.skuId,
                                                onVariantEnter: S,
                                                onVariantExit: A,
                                            }),
                                            (0, r.jsx)(ef.Z, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: y,
                                            }),
                                        ],
                                    }),
                                }),
                            null !== X &&
                                (0, r.jsx)(b.Text, {
                                    variant: "text-xs/normal",
                                    className: e_.disabledReason,
                                    children: X,
                                }),
                            (0, r.jsx)(b.Kqy, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (em && !T && !eh) {
                                        let e;
                                        return (
                                            (e = eR.intl.string(eR.t.sEAnVH)),
                                            (0, r.jsx)(E.Z, {
                                                subscriptionTier: eS.Si.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: es.v,
                                                onSubscribeModalClose: () => {
                                                    (0, es.T)({
                                                        product: _,
                                                        category: a,
                                                        shouldCheckoutWithOrbs: o,
                                                        returnRef: h,
                                                        analyticsLocations: C,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    if (!$)
                                        return ek
                                            ? (0, r.jsx)(el.Z, {
                                                  primary: !0,
                                                  product: _,
                                                  onSuccess: u,
                                                  fullWidth: !0,
                                              })
                                            : null;
                                    if (et) {
                                        if (D)
                                            return (0, r.jsx)(eu.Z, {
                                                product: _,
                                                onSuccess: u,
                                            });
                                    } else if (D && !M)
                                        return ek
                                            ? (0, r.jsxs)(b.ButtonGroup, {
                                                  wrap: !1,
                                                  fullWidth: !0,
                                                  children: [
                                                      (0, r.jsx)(eu.Z, {
                                                          product: _,
                                                          onSuccess: u,
                                                      }),
                                                      (0, r.jsx)(el.Z, {
                                                          primary: !0,
                                                          product: _,
                                                          onSuccess: u,
                                                      }),
                                                  ],
                                              })
                                            : (0, r.jsx)(eu.Z, {
                                                  product: _,
                                                  onSuccess: u,
                                              });
                                    return em
                                        ? (0, r.jsx)(b.Button, {
                                              loading: en,
                                              loadingStartedLabel: eR.intl.string(eR.t["TYw+9s"]),
                                              loadingFinishedLabel: eR.intl.string(eR.t.Pg1UP5),
                                              onClick: async () => {
                                                  await (0, H.fK)(_.skuId),
                                                      u(),
                                                      (0, ew.Z)({
                                                          product: _,
                                                          analyticsLocations: C,
                                                          purchaseType: eE.o8.PREMIUM_PURCHASE,
                                                      });
                                              },
                                              text: eR.intl.string(eR.t.zp6caO),
                                              fullWidth: !0,
                                          })
                                        : (0, r.jsx)(r.Fragment, {
                                              children: eF.map((e, t) => {
                                                  let n,
                                                      i = 0 === t;
                                                  if (e.currency === eA.pK.DISCORD_ORB) {
                                                      if (null != O)
                                                          return ((e) => {
                                                              let t = z
                                                                      ? eR.intl.string(eR.t.cTdr3x)
                                                                      : eR.intl.string(eR.t.zqh7ZM),
                                                                  n = !eH || z,
                                                                  i = eR.intl.formatToPlainString(eR.t.DlNs2T, {
                                                                      orbPrice: eE.As,
                                                                  }),
                                                                  a = n ? "".concat(i, ", ").concat(t) : i,
                                                                  o = new Date(),
                                                                  c = null == O ? null : o.setDate(o.getDate() + O),
                                                                  s =
                                                                      null != c
                                                                          ? new Date(c).toLocaleDateString(I, {
                                                                                minute: "numeric",
                                                                                hour: "numeric",
                                                                                day: "numeric",
                                                                                month: "long",
                                                                                year: "numeric",
                                                                            })
                                                                          : null;
                                                              return (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)(f.u, {
                                                                          position: "top",
                                                                          text: t,
                                                                          shouldShow: n,
                                                                          "aria-label": !1,
                                                                          children: (0, r.jsx)(b.Button, {
                                                                              variant: e ? "primary" : "secondary",
                                                                              onClick: () => {
                                                                                  (0, Z.qA)({
                                                                                      skuId: _.skuId,
                                                                                      onCheckoutSuccess: (e) => {
                                                                                          var t, n;
                                                                                          let { entitlements: r } = e;
                                                                                          (0, H.qg)({
                                                                                              variantsReturnStyle:
                                                                                                  d.v.VARIANTS_GROUP,
                                                                                          }),
                                                                                              u();
                                                                                          let i =
                                                                                              (null == (t = r[0])
                                                                                                  ? void 0
                                                                                                  : t.ends_at) != null
                                                                                                  ? new Date(
                                                                                                        r[0].ends_at,
                                                                                                    ).toLocaleDateString(
                                                                                                        I,
                                                                                                        {
                                                                                                            minute: "numeric",
                                                                                                            hour: "numeric",
                                                                                                            day: "numeric",
                                                                                                            month: "long",
                                                                                                            year: "numeric",
                                                                                                        },
                                                                                                    )
                                                                                                  : void 0;
                                                                                          (0, ew.Z)({
                                                                                              product: _,
                                                                                              analyticsLocations: C,
                                                                                              itemConsumed:
                                                                                                  null == (n = r[0])
                                                                                                      ? void 0
                                                                                                      : n.consumed,
                                                                                              purchaseType: eE.o8.ORB,
                                                                                              rentalDuration: O,
                                                                                              rentalExpiresAt: i,
                                                                                          });
                                                                                      },
                                                                                      analyticsLocations: C,
                                                                                      rentalDuration: O,
                                                                                  });
                                                                              },
                                                                              disabled: n,
                                                                              "aria-label": a,
                                                                              text: eR.intl.format(eR.t["4NKuqc"], {
                                                                                  orbPrice: eE.As,
                                                                                  orbIconHook: () =>
                                                                                      (0, r.jsx)(b.aQr, {
                                                                                          className: e_.orbIconAligned,
                                                                                          size: "sm",
                                                                                          color: "currentColor",
                                                                                      }),
                                                                              }),
                                                                              fullWidth: !0,
                                                                          }),
                                                                      }),
                                                                      null != s &&
                                                                          (0, r.jsx)(b.Text, {
                                                                              variant: "text-xs/normal",
                                                                              className: l()(
                                                                                  e_.disclaimer,
                                                                                  !ed && e_.disclaimerLight,
                                                                              ),
                                                                              children: eR.intl.format(eR.t.pLAiJ4, {
                                                                                  date: s,
                                                                              }),
                                                                          }),
                                                                  ],
                                                              });
                                                          })(i);
                                                      let t = z
                                                              ? eR.intl.string(eR.t.cTdr3x)
                                                              : eR.intl.string(eR.t.zqh7ZM),
                                                          n = !eH || z,
                                                          a = eR.intl.formatToPlainString(eR.t["fNG/05"], {
                                                              orbPrice: e.amount,
                                                          }),
                                                          o = n ? "".concat(a, ", ").concat(t) : a;
                                                      return (0, r.jsx)(f.u, {
                                                          position: "top",
                                                          text: t,
                                                          shouldShow: n,
                                                          "aria-label": !1,
                                                          children: (0, r.jsx)(b.Button, {
                                                              variant: i ? "primary" : "secondary",
                                                              onClick: () => {
                                                                  (0, Z.qA)({
                                                                      skuId: _.skuId,
                                                                      onCheckoutSuccess: (e) => {
                                                                          var t;
                                                                          let { entitlements: n } = e;
                                                                          (0, H.qg)({
                                                                              variantsReturnStyle: d.v.VARIANTS_GROUP,
                                                                          }),
                                                                              u(),
                                                                              (0, ew.Z)({
                                                                                  product: _,
                                                                                  analyticsLocations: C,
                                                                                  itemConsumed:
                                                                                      null == (t = n[0])
                                                                                          ? void 0
                                                                                          : t.consumed,
                                                                                  purchaseType: eE.o8.ORB,
                                                                              });
                                                                      },
                                                                      analyticsLocations: C,
                                                                  });
                                                              },
                                                              disabled: n,
                                                              "aria-label": o,
                                                              text: eR.intl.format(eR.t.kAgx5L, {
                                                                  orbPrice: e.amount,
                                                                  orbIconHook: () =>
                                                                      (0, r.jsx)(b.aQr, {
                                                                          className: e_.orbIconAligned,
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                              }),
                                                              fullWidth: !0,
                                                          }),
                                                      });
                                                  }
                                                  return (
                                                      (n = (0, W.x6)(_)
                                                          ? eR.intl.string(eR.t.V1AWw0)
                                                          : _.type === s.Z.PROFILE_EFFECT
                                                            ? eR.intl.string(eR.t.kAeDcK)
                                                            : _.type === s.Z.NAMEPLATE
                                                              ? eR.intl.string(eR.t.H3vhqU)
                                                              : eR.intl.string(eR.t.AQ0Veg)),
                                                      eM
                                                          ? (n = eR.intl.formatToPlainString(eR.t["5U5RB5"], {
                                                                discountOfferAmount: eB,
                                                            }))
                                                          : eL &&
                                                            (n = eR.intl.formatToPlainString(eR.t["cNSL/j"], {
                                                                price: (0, G.T4)(e.amount, e.currency),
                                                            })),
                                                      (0, r.jsxs)(b.ButtonGroup, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, r.jsx)(b.Button, {
                                                                  variant: i ? "primary" : "secondary",
                                                                  onClick: eV,
                                                                  text: n,
                                                                  fullWidth: !0,
                                                              }),
                                                              ek &&
                                                                  (0, r.jsx)(el.Z, {
                                                                      primary: i,
                                                                      product: _,
                                                                      onSuccess: u,
                                                                  }),
                                                          ],
                                                      })
                                                  );
                                              }),
                                          });
                                })(),
                            }),
                            (0, r.jsx)(b.Text, {
                                className: l()(e_.disclaimer, !ed && e_.disclaimerLight),
                                variant: "text-xxs/normal",
                                children: em && !D ? eR.intl.string(eR.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eF = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: e_.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(P.Z, {
                avatar: (0, r.jsx)(b.qEK, {
                    src: t.avatarSrc,
                    size: b.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: b.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(e_.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eG = (e) => {
        let { user: t, nameplate: n, avatarDecoration: i } = e,
            a = (0, T.w$)();
        return (0, r.jsx)("div", {
            className: e_.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eR.intl.string(eR.t.SZeUdR),
            children: (0, r.jsxs)(b.Rny, {
                children: [
                    (0, r.jsx)(eF, {
                        user: a.mallow,
                        innerClassName: e_.userBlue,
                    }),
                    (0, r.jsxs)(b.Text, {
                        variant: "text-sm/semibold",
                        className: e_.nameplateRightPanePreviewSectionGroup,
                        children: [eR.intl.string(eR.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eF, {
                        user: a.phibi,
                        innerClassName: e_.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: e_.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(y.Z, {
                            className: e_.nameplatePreview,
                            innerClassName: e_.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, r.jsx)(eF, {
                        user: a.locke,
                        innerClassName: e_.userPink,
                    }),
                    (0, r.jsxs)(b.Text, {
                        variant: "text-sm/semibold",
                        className: e_.nameplateRightPanePreviewSectionGroup,
                        children: [eR.intl.string(eR.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eF, {
                        user: a.boom,
                        innerClassName: e_.userGreen,
                    }),
                    (0, r.jsx)(eF, {
                        user: a.cherry,
                        innerClassName: e_.userGreen,
                    }),
                ],
            }),
        });
    },
    eH = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: a } = e,
            o = (0, m.e7)([h.Z], () => h.Z.useReducedMotion),
            c = F.ZP.canUsePremiumProfileCustomization(n),
            u = (0, m.cj)([B.Z], () => B.Z.getAllPending()),
            { pendingAvatar: d } = u,
            f = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        (n = a[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(u, ["pendingAvatar"]),
            p = (0, R.SD)({
                userId: n.id,
                image: d,
            }),
            b = t.type === s.Z.AVATAR_DECORATION,
            [v] = t.items,
            { firstAvatarDecoration: x, firstProfileEffect: g, firstNameplate: P } = (0, Y.Rj)(t),
            j = null != g,
            O = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            S.Z,
                            eL(ek({}, f), {
                                pendingAvatar: p,
                                user: n,
                                canUsePremiumCustomization: c,
                                pendingAvatarDecoration: x,
                                pendingProfileEffect: g,
                                disabledInputs: !0,
                                hideMessageInput: !j,
                                hideCustomStatus: !0,
                                hideBioSection: b,
                                hideExampleButton: !0,
                                interactive: !1,
                            }),
                        ),
                        b && (0, r.jsx)(eV, { user: n }),
                    ],
                }),
            C = (e) =>
                (0, r.jsx)(eG, {
                    user: n,
                    nameplate: e,
                    avatarDecoration: x,
                });
        if (t.type === s.Z.BUNDLE) {
            if (!(0, X.L)(t))
                return (0, r.jsx)("div", {
                    className: e_.previewsContainerInner,
                    children: (0, r.jsx)("div", {
                        className: e_.combinedPreviewContent,
                        children: O(),
                    }),
                });
            {
                let e = null != i ? i : 0,
                    n = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    u = (null == c ? void 0 : c.type) !== (null == n ? void 0 : n.type) && !o;
                return n.type === s.Z.NAMEPLATE
                    ? (0, r.jsx)("div", {
                          className: l()(e_.nameplatePreviewContainerInner, a && u ? e_.sliding : ""),
                          children: C(n),
                      })
                    : (0, r.jsx)("div", {
                          className: l()(e_.profileEffectPreviewsContainerInner, a && u ? e_.sliding : ""),
                          children: O(),
                      });
            }
        }
        return null != P
            ? (0, r.jsx)("div", {
                  className: e_.nameplatePreviewContainerInner,
                  children: C(P),
              })
            : (0, r.jsx)("div", {
                  className:
                      (null == v ? void 0 : v.type) === s.Z.AVATAR_DECORATION
                          ? e_.previewsContainerInner
                          : e_.profileEffectPreviewsContainerInner,
                  children: O(),
              });
    },
    eV = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, j.e5)(
                    eL(
                        ek(
                            {},
                            (0, O.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eR.intl.string(eR.t.d5YwK5),
                            }),
                        ),
                        {
                            state: eN.yb.SENT,
                            id: "0",
                        },
                    ),
                );
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eR.intl.string(eR.t["TN+ZvB"]),
            children: (0, r.jsx)(b.Rny, {
                children: (0, r.jsxs)(b.Zbd, {
                    className: e_.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            I.Z,
                            {
                                className: e_.mockMessage,
                                author: (0, C.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: e_.mockInput,
                            children: [
                                (0, r.jsx)(b.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: e_.mockInputButton,
                                }),
                                (0, r.jsx)(b.EO4, {
                                    size: "md",
                                    color: "currentColor",
                                    className: e_.mockInputButton,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    ez = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: a,
                category: o,
                returnRef: d,
                analyticsSource: f,
                analyticsLocations: p,
                shouldCheckoutWithOrbs: v,
                tab: h,
                rentalDuration: P,
            } = e,
            j = (0, m.e7)([D.default], () => D.default.getCurrentUser()),
            O = (0, eI.f)(a),
            { previewingVariantIndex: C } = O,
            I = (0, z.o)(a),
            T = (0, eg.N)(a, C),
            y = (0, eP.W)(a, I);
        c()(null != y, "Selected product should not be null");
        let { analyticsLocations: w } = (0, g.ZP)([
            ...p,
            x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL,
            ...(null != P ? [x.Z.COLLECTIBLES_SHOP_DETAILS_RENTAL_MODAL] : []),
        ]);
        (0, er.u9)(y.skuId);
        let E = (0, eO.kc)(o);
        i.useEffect(() => {
            null != j && (0, _.Z)(j.id, j.getAvatarURL(void 0, 80));
        }, [j]);
        let N = i.useMemo(() => (0, W.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            U.default.track(eN.rMx.OPEN_MODAL, {
                type: eN.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: f,
                location_stack: w,
                sku_id: y.skuId,
                product_type: N,
            }),
                y.items.forEach(H.oK);
        }, [f, w, y.skuId, y.items, N]);
        let S = (0, Z.r9)(),
            A = t === b.Dvm.EXITING,
            R = (0, ej.t0)(a),
            k = null == R ? void 0 : R.amount,
            L = i.useMemo(() => ((0, W.x6)(y) ? y.items.length : 0), [y]),
            { activeSlide: B, isTransitioning: M } = (0, $.b)({
                slideCount: L,
                intervalMs: 5000,
            });
        return null == j
            ? null
            : (0, r.jsx)(g.Gt, {
                  value: w,
                  children: (0, r.jsxs)(b.Y0X, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: e_.modalRoot,
                      returnRef: d,
                      transitionState: t,
                      size: b.CgR.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(b.hzk, {
                              "data-migration-pending": !0,
                              className: e_.modalContent,
                              children: [
                                  (0, r.jsx)(eM, {
                                      user: j,
                                      product: a,
                                      category: o,
                                      onClose: n,
                                      previewingVariantIndexProps: O,
                                      selectedVariantIndex: I,
                                      shouldCheckoutWithOrbs: v,
                                      activeBundleSlide: B,
                                      rentalDuration: P,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          e_.previewContainer,
                                          y.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                              ? e_.fractionalNitroPreviewContainer
                                              : y.type === s.Z.AVATAR_DECORATION
                                                ? e_.collectiblePreviewsContainerWithChat
                                                : e_.collectiblePreviewsContainerNoChat,
                                      ),
                                      style: { backgroundImage: "url(".concat(E, ")") },
                                      children: [
                                          (0, eE.o0)(a.skuId)
                                              ? a.skuId === eE.Vt.ORB_PROFILE_BADGE
                                                  ? S || A
                                                      ? null
                                                      : (0, r.jsx)(em.M, { user: j })
                                                  : a.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(ed.q, {})
                                                    : (0, r.jsx)(eb.b, {
                                                          product: a,
                                                          className: e_.externalProductProfilePreview,
                                                      })
                                              : (0, r.jsx)(eH, {
                                                    user: j,
                                                    product: null != T ? T : y,
                                                    activeBundleSlide: B,
                                                    isTransitioning: M,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: e_.pdpControls,
                                              children: [
                                                  (0, r.jsx)(eh.a, {
                                                      product: a,
                                                      selectedVariantIndex: I,
                                                      className: e_.wishlistButton,
                                                      iconSize: 16,
                                                      enableHoverEffect: !0,
                                                  }),
                                                  (0, r.jsx)(et.n, {
                                                      skuId: y.skuId,
                                                      tab: h,
                                                  }),
                                                  (0, r.jsx)(b.hU, {
                                                      "aria-label": eR.intl.string(eR.t.cpT0Cq),
                                                      onClick: n,
                                                      icon: b.Uz9,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          null != k &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(b.mzw, {
                                      "data-migration-pending": !0,
                                      className: e_.modalFooter,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: e_.modalFooterBackgroundImg,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: e_.modalFooterContentContainer,
                                              children: [
                                                  (0, r.jsx)(b.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: e_.modalFooterText,
                                                      children: eR.intl.format(eR.t["78ph4b"], {
                                                          discountOfferAmount: k,
                                                      }),
                                                  }),
                                                  (null == R ? void 0 : R.expiresAt) != null &&
                                                      (0, r.jsx)(en.R, { endDate: R.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
