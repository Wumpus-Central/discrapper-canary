n.d(t, { default: () => eW }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    s = n.n(o),
    c = n(979554),
    u = n(314794),
    d = n(311570),
    m = n(399606),
    f = n(28664),
    p = n(780384),
    v = n(481060),
    b = n(410030),
    h = n(607070),
    g = n(100527),
    x = n(906732),
    P = n(570908),
    j = n(786761),
    O = n(3148),
    C = n(739566),
    I = n(753206),
    T = n(4242),
    y = n(566697),
    w = n(333867),
    E = n(767714),
    A = n(150039),
    S = n(678135),
    N = n(876917),
    R = n(643879),
    k = n(567400),
    _ = n(484459),
    L = n(706454),
    B = n(825102),
    Z = n(275388),
    D = n(25990),
    U = n(594174),
    M = n(626135),
    F = n(63063),
    G = n(74538),
    H = n(937615),
    V = n(335131),
    z = n(1870),
    W = n(429368),
    q = n(884697),
    K = n(635552),
    Y = n(83479),
    J = n(290175),
    Q = n(724994),
    X = n(328456),
    $ = n(27123),
    ee = n(330349),
    et = n(556971),
    en = n(390698),
    er = n(525518),
    ei = n(168020),
    ea = n(426171),
    el = n(224068),
    eo = n(813083),
    es = n(680942),
    ec = n(558060),
    eu = n(539598),
    ed = n(237031),
    em = n(38914),
    ef = n(259673),
    ep = n(749068),
    ev = n(406667),
    eb = n(508925),
    eh = n(953405),
    eg = n(143941),
    ex = n(616066),
    eP = n(332246),
    ej = n(58201),
    eO = n(445794),
    eC = n(794324),
    eI = n(694364),
    eT = n(361110),
    ey = n(29121),
    ew = n(956472),
    eE = n(832149),
    eA = n(215023),
    eS = n(981631),
    eN = n(474936),
    eR = n(231338),
    ek = n(388032),
    e_ = n(260321);
function eL(e) {
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
function eB(e, t) {
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
            o = (0, q.x6)(n),
            { firstAvatarDecoration: s } = (0, X.Rj)(n);
        return t.type === c.Z.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: o ? e_.bundleAvatarPreviewContainer : e_.avatarPreviewContainer,
                  children: (0, r.jsx)(ex.R, {
                      user: a,
                      item: t,
                      isHighlighted: !0,
                  }),
              })
            : t.type === c.Z.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: o ? e_.bundlePfxPreviewContainer : e_.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(N.Z, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === c.Z.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: l,
                      className: e_.nameplatePreviewContainer,
                      children: (0, r.jsx)(y.Z, {
                          className: e_.nameplatePreview,
                          nameplate: t,
                          showPlaceholderUser: !0,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: s,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    eD = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            a = t.items.length;
        return (0, r.jsx)("div", {
            className: e_.bundlePreviewContainer,
            children: (0, r.jsx)(v.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        o = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = "(".concat(i + 1, "/").concat(a, ")");
                    return (0, r.jsx)(
                        v.Mi4,
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
                                    (0, r.jsxs)(v.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: e_.bundleSlideTitle,
                                        children: [null == o ? void 0 : o.name, " ", s],
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
    eU = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, q.x6)(t)
            ? (0, r.jsx)(eD, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, eA.o0)(t.skuId)
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
    eM = (e) => {
        let { skuId: t } = e;
        return t === u.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(v.Text, {
                  variant: "text-sm/normal",
                  className: e_.learnMoreLink,
                  children: ek.intl.format(ek.t.Q1scdE, {
                      helpdeskArticle: F.Z.getArticleURL(eS.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eF = (e) => {
        let {
                product: t,
                user: n,
                category: a,
                shouldCheckoutWithOrbs: o,
                onClose: u,
                returnRef: h,
                previewingVariantIndexProps: g,
                selectedVariantIndex: P,
                activeBundleSlide: j,
                rentalDuration: O,
            } = e,
            { analyticsLocations: C } = (0, x.ZP)(),
            I = (0, m.e7)([L.default], () => L.default.locale),
            T = G.ZP.canUseCollectibles(n),
            { previewingVariantIndex: y, handleEntering: S, handleLeaving: N } = g,
            R = (0, eP.N)(t, y),
            k = (0, ej.W)(t, P);
        s()(null != k, "Selected product should not be null");
        let _ = (0, Q.L)(t),
            { isPurchased: D, isPartiallyOwnedBundle: U, isRented: M } = (0, Q.L)(k),
            { isDisabled: F, disabledReason: W } = (0, J.G)(k.skuId),
            ee = (0, q.ne)({
                product: k,
                isPartiallyOwnedBundle: U,
                isPurchased: D,
            }),
            et = null != O,
            er = (0, m.e7)([z.Z], () => z.Z.isClaiming === (null == k ? void 0 : k.skuId)),
            ei = (0, b.ZP)(),
            ea = (0, p.wj)(ei),
            em = (0, q.G1)(k),
            ef = (0, q.ql)(k, eS.tuJ.DEFAULT),
            eb = (null == ef ? void 0 : ef.amount) === 0,
            { firstAvatarDecoration: eg } = (0, X.Rj)(null != R ? R : k),
            ex = i.useMemo(() => (0, q.BH)(k, T), [k, T]),
            { handleUseNow: eC, isApplying: eT } = (0, K.W)({
                product: k,
                onSuccess: u,
            }),
            eL = (0, ey.To)(k),
            eB = (0, eI.J)(k),
            { enabled: eZ } = (0, B.W)({ location: "collectibles_shop_product_details_modal" }),
            eD = (0, Y.G)(k, !1, O),
            eF = (0, eO.Iw)(t),
            eG = null != eF,
            {
                checkoutEligiblePrices: eH,
                isOrbExclusive: eV,
                hasSufficientOrbs: ez,
            } = (0, ew.Ip)({
                product: k,
                isPremiumUser: T,
                hasDiscountOffer: eG,
                isRental: null != O,
            }),
            eW = i.useCallback(
                () =>
                    (0, w.Z)({
                        skuId: k.skuId,
                        analyticsLocations: C,
                        variantsReturnStyle: d.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? u() : (0, eR.dG)()),
                    }),
                [C, u, k.skuId],
            );
        return (
            i.useEffect(() => {
                if (null != eg) return (0, A.PO)(eg), () => (0, A.PO)(void 0);
            }, [eg]),
            (0, r.jsxs)("div", {
                className: e_.collectibleInfoContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: e_.titleContainer,
                        children: (0, r.jsx)(eo.Z, { category: a }),
                    }),
                    (0, r.jsx)(eU, {
                        product: null != R ? R : k,
                        user: n,
                        activeSlide: j,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: e_.description,
                                children: [
                                    (0, r.jsx)(el.Z, {
                                        product: k,
                                        isDarkText: !ea,
                                        isOrbExclusive: eV,
                                        rentalDuration: O,
                                    }),
                                    (0, r.jsx)(v.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: e_.headingWithItemTypePill,
                                        children: eL,
                                    }),
                                    (0, r.jsx)(v.Text, {
                                        variant: "text-sm/normal",
                                        children: eD,
                                    }),
                                    (0, r.jsx)(eM, { skuId: k.skuId }),
                                    _.isPurchased || _.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(en.U, {
                                              className: e_.priceTag,
                                              isPartiallyPurchased: U,
                                          })
                                        : em
                                          ? (0, r.jsx)(v.Text, {
                                                variant: "text-md/semibold",
                                                className: e_.priceTag,
                                                children: ek.intl.string(ek.t.rt69oo),
                                            })
                                          : eZ
                                            ? (0, r.jsx)(eh.a, {
                                                  prices: eH,
                                                  product: k,
                                                  isPremiumUser: T,
                                                  discount: ex,
                                                  hasSufficientOrbs: ez,
                                                  isProductDisabled: F,
                                                  discountOfferAmount: eF,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: e_.priceTagContainer,
                                                  children: [
                                                      (0, r.jsx)(ec.Z, {
                                                          product: k,
                                                          discount: ex,
                                                          isPremiumUser: T,
                                                          hideStrikethroughPrice: !T || eG,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eF,
                                                      }),
                                                      T || eG ? null : (0, r.jsx)(eu.Z, { product: k }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, $.ox)(t) &&
                                (0, r.jsx)(v.Rny, {
                                    children: (0, r.jsxs)("div", {
                                        className: e_.variantsContainer,
                                        children: [
                                            (0, r.jsx)(ev.Z, {
                                                skuId: t.skuId,
                                                onVariantEnter: S,
                                                onVariantExit: N,
                                            }),
                                            (0, r.jsx)(ep.Z, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: y,
                                            }),
                                        ],
                                    }),
                                }),
                            null !== W &&
                                (0, r.jsx)(v.Text, {
                                    variant: "text-xs/normal",
                                    className: e_.disabledReason,
                                    children: W,
                                }),
                            (0, r.jsx)(v.Kqy, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (em && !T && !eb) {
                                        let e;
                                        return (
                                            (e = ek.intl.string(ek.t.sEAnVH)),
                                            (0, r.jsx)(E.Z, {
                                                subscriptionTier: eN.Si.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: ed.v,
                                                onSubscribeModalClose: () => {
                                                    (0, ed.T)({
                                                        product: k,
                                                        category: a,
                                                        shouldCheckoutWithOrbs: o,
                                                        returnRef: h,
                                                        analyticsLocations: C,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    if (!ee) return null;
                                    let e = (0, r.jsx)(v.Button, {
                                        variant: "primary",
                                        onClick: eC,
                                        loading: eT,
                                        text: ek.intl.string(ek.t.MAS7uK),
                                        fullWidth: !0,
                                    });
                                    if (et) {
                                        if (D) return e;
                                    } else if (D && !M) return e;
                                    return em
                                        ? (0, r.jsx)(v.Button, {
                                              loading: er,
                                              loadingStartedLabel: ek.intl.string(ek.t["TYw+9s"]),
                                              loadingFinishedLabel: ek.intl.string(ek.t.Pg1UP5),
                                              onClick: async () => {
                                                  await (0, V.fK)(k.skuId),
                                                      u(),
                                                      (0, eE.Z)({
                                                          product: k,
                                                          analyticsLocations: C,
                                                          purchaseType: eA.o8.PREMIUM_PURCHASE,
                                                      });
                                              },
                                              text: ek.intl.string(ek.t.zp6caO),
                                              fullWidth: !0,
                                          })
                                        : (0, r.jsx)(r.Fragment, {
                                              children: eH.map((e, t) => {
                                                  let n,
                                                      i = 0 === t;
                                                  if (e.currency === eR.pK.DISCORD_ORB) {
                                                      if (null != O)
                                                          return ((e) => {
                                                              let t = F
                                                                      ? ek.intl.string(ek.t.cTdr3x)
                                                                      : ek.intl.string(ek.t.zqh7ZM),
                                                                  n = !ez || F,
                                                                  i = ek.intl.formatToPlainString(ek.t.DlNs2T, {
                                                                      orbPrice: eA.As,
                                                                  }),
                                                                  a = n ? "".concat(i, ", ").concat(t) : i,
                                                                  o = new Date(),
                                                                  s = null == O ? null : o.setDate(o.getDate() + O),
                                                                  c =
                                                                      null != s
                                                                          ? new Date(s).toLocaleDateString(I, {
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
                                                                          children: (0, r.jsx)(v.Button, {
                                                                              variant: e ? "primary" : "secondary",
                                                                              onClick: () => {
                                                                                  (0, Z.qA)({
                                                                                      skuId: k.skuId,
                                                                                      onCheckoutSuccess: (e) => {
                                                                                          var t, n;
                                                                                          let { entitlements: r } = e;
                                                                                          (0, V.qg)({
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
                                                                                          (0, eE.Z)({
                                                                                              product: k,
                                                                                              analyticsLocations: C,
                                                                                              itemConsumed:
                                                                                                  null == (n = r[0])
                                                                                                      ? void 0
                                                                                                      : n.consumed,
                                                                                              purchaseType: eA.o8.ORB,
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
                                                                              text: ek.intl.format(ek.t["4NKuqc"], {
                                                                                  orbPrice: eA.As,
                                                                                  orbIconHook: () =>
                                                                                      (0, r.jsx)(v.aQr, {
                                                                                          className: e_.orbIconAligned,
                                                                                          size: "sm",
                                                                                          color: "currentColor",
                                                                                      }),
                                                                              }),
                                                                              fullWidth: !0,
                                                                          }),
                                                                      }),
                                                                      null != c &&
                                                                          (0, r.jsx)(v.Text, {
                                                                              variant: "text-xs/normal",
                                                                              className: l()(
                                                                                  e_.disclaimer,
                                                                                  !ea && e_.disclaimerLight,
                                                                              ),
                                                                              children: ek.intl.format(ek.t.pLAiJ4, {
                                                                                  date: c,
                                                                              }),
                                                                          }),
                                                                  ],
                                                              });
                                                          })(i);
                                                      let t = F
                                                              ? ek.intl.string(ek.t.cTdr3x)
                                                              : ek.intl.string(ek.t.zqh7ZM),
                                                          n = !ez || F,
                                                          a = ek.intl.formatToPlainString(ek.t["fNG/05"], {
                                                              orbPrice: e.amount,
                                                          }),
                                                          o = n ? "".concat(a, ", ").concat(t) : a;
                                                      return (0, r.jsx)(f.u, {
                                                          position: "top",
                                                          text: t,
                                                          shouldShow: n,
                                                          "aria-label": !1,
                                                          children: (0, r.jsx)(v.Button, {
                                                              variant: i ? "primary" : "secondary",
                                                              onClick: () => {
                                                                  (0, Z.qA)({
                                                                      skuId: k.skuId,
                                                                      onCheckoutSuccess: (e) => {
                                                                          var t;
                                                                          let { entitlements: n } = e;
                                                                          (0, V.qg)({
                                                                              variantsReturnStyle: d.v.VARIANTS_GROUP,
                                                                          }),
                                                                              u(),
                                                                              (0, eE.Z)({
                                                                                  product: k,
                                                                                  analyticsLocations: C,
                                                                                  itemConsumed:
                                                                                      null == (t = n[0])
                                                                                          ? void 0
                                                                                          : t.consumed,
                                                                                  purchaseType: eA.o8.ORB,
                                                                              });
                                                                      },
                                                                      analyticsLocations: C,
                                                                  });
                                                              },
                                                              disabled: n,
                                                              "aria-label": o,
                                                              text: ek.intl.format(ek.t.kAgx5L, {
                                                                  orbPrice: e.amount,
                                                                  orbIconHook: () =>
                                                                      (0, r.jsx)(v.aQr, {
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
                                                      (n = (0, q.x6)(k)
                                                          ? ek.intl.string(ek.t.V1AWw0)
                                                          : k.type === c.Z.PROFILE_EFFECT
                                                            ? ek.intl.string(ek.t.kAeDcK)
                                                            : k.type === c.Z.NAMEPLATE
                                                              ? ek.intl.string(ek.t.H3vhqU)
                                                              : ek.intl.string(ek.t.AQ0Veg)),
                                                      eG
                                                          ? (n = ek.intl.formatToPlainString(ek.t["5U5RB5"], {
                                                                discountOfferAmount: eF,
                                                            }))
                                                          : eZ &&
                                                            (n = ek.intl.formatToPlainString(ek.t["cNSL/j"], {
                                                                price: (0, H.T4)(e.amount, e.currency),
                                                            })),
                                                      (0, r.jsxs)(v.ButtonGroup, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, r.jsx)(v.Button, {
                                                                  variant: i ? "primary" : "secondary",
                                                                  onClick: eW,
                                                                  text: n,
                                                                  fullWidth: !0,
                                                              }),
                                                              eB &&
                                                                  (0, r.jsx)(es.Z, {
                                                                      primary: i,
                                                                      product: k,
                                                                      onSuccess: u,
                                                                  }),
                                                          ],
                                                      })
                                                  );
                                              }),
                                          });
                                })(),
                            }),
                            (0, r.jsx)(v.Text, {
                                className: l()(e_.disclaimer, !ea && e_.disclaimerLight),
                                variant: "text-xxs/normal",
                                children: em && !D ? ek.intl.string(ek.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eG = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: e_.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(P.Z, {
                avatar: (0, r.jsx)(v.qEK, {
                    src: t.avatarSrc,
                    size: v.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: v.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(e_.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eH = (e) => {
        let { user: t, nameplate: n, avatarDecoration: i } = e,
            a = (0, T.w$)();
        return (0, r.jsx)("div", {
            className: e_.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": ek.intl.string(ek.t.SZeUdR),
            children: (0, r.jsxs)(v.Rny, {
                children: [
                    (0, r.jsx)(eG, {
                        user: a.mallow,
                        innerClassName: e_.userBlue,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: e_.nameplateRightPanePreviewSectionGroup,
                        children: [ek.intl.string(ek.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eG, {
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
                    (0, r.jsx)(eG, {
                        user: a.locke,
                        innerClassName: e_.userPink,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: e_.nameplateRightPanePreviewSectionGroup,
                        children: [ek.intl.string(ek.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eG, {
                        user: a.boom,
                        innerClassName: e_.userGreen,
                    }),
                    (0, r.jsx)(eG, {
                        user: a.cherry,
                        innerClassName: e_.userGreen,
                    }),
                ],
            }),
        });
    },
    eV = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: a } = e,
            o = (0, m.e7)([h.Z], () => h.Z.useReducedMotion),
            s = G.ZP.canUsePremiumProfileCustomization(n),
            u = (0, m.cj)([D.Z], () => D.Z.getAllPending()),
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
            v = t.type === c.Z.AVATAR_DECORATION,
            [b] = t.items,
            { firstAvatarDecoration: g, firstProfileEffect: x, firstNameplate: P } = (0, X.Rj)(t),
            j = null != x,
            O = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            S.Z,
                            eB(eL({}, f), {
                                pendingAvatar: p,
                                user: n,
                                canUsePremiumCustomization: s,
                                pendingAvatarDecoration: g,
                                pendingProfileEffect: x,
                                disabledInputs: !0,
                                hideMessageInput: !j,
                                hideCustomStatus: !0,
                                hideBioSection: v,
                                hideExampleButton: !0,
                                interactive: !1,
                            }),
                        ),
                        v && (0, r.jsx)(ez, { user: n }),
                    ],
                }),
            C = (e) =>
                (0, r.jsx)(eH, {
                    user: n,
                    nameplate: e,
                    avatarDecoration: g,
                });
        if (t.type === c.Z.BUNDLE) {
            if (!(0, ee.L)(t))
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
                    s = t.items[Math.max(0, e - 1)],
                    u = (null == s ? void 0 : s.type) !== (null == n ? void 0 : n.type) && !o;
                return n.type === c.Z.NAMEPLATE
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
                      (null == b ? void 0 : b.type) === c.Z.AVATAR_DECORATION
                          ? e_.previewsContainerInner
                          : e_.profileEffectPreviewsContainerInner,
                  children: O(),
              });
    },
    ez = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, j.e5)(
                    eB(
                        eL(
                            {},
                            (0, O.ZP)({
                                author: t,
                                channelId: "1337",
                                content: ek.intl.string(ek.t.d5YwK5),
                            }),
                        ),
                        {
                            state: eS.yb.SENT,
                            id: "0",
                        },
                    ),
                );
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": ek.intl.string(ek.t["TN+ZvB"]),
            children: (0, r.jsx)(v.Rny, {
                children: (0, r.jsxs)(v.Zbd, {
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
                                (0, r.jsx)(v.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: e_.mockInputButton,
                                }),
                                (0, r.jsx)(v.EO4, {
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
    eW = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: a,
                category: o,
                returnRef: d,
                analyticsSource: f,
                analyticsLocations: p,
                shouldCheckoutWithOrbs: b,
                tab: h,
                rentalDuration: P,
            } = e,
            j = (0, m.e7)([U.default], () => U.default.getCurrentUser()),
            O = (0, eT.f)(a),
            { previewingVariantIndex: C } = O,
            I = (0, W.o)(a),
            T = (0, eP.N)(a, C),
            y = (0, ej.W)(a, I);
        s()(null != y, "Selected product should not be null");
        let { analyticsLocations: w } = (0, x.ZP)([
            ...p,
            g.Z.COLLECTIBLES_SHOP_DETAILS_MODAL,
            ...(null != P ? [g.Z.COLLECTIBLES_SHOP_DETAILS_RENTAL_MODAL] : []),
        ]);
        (0, ea.u9)(y.skuId);
        let E = (0, eC.kc)(o),
            A = (0, k.Y)({ location: "CollectiblesShopProductDetailsModal" });
        i.useEffect(() => {
            null != j && (0, _.Z)(j.id, j.getAvatarURL(void 0, 80));
        }, [j]);
        let S = i.useMemo(() => (0, q.jm)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            M.default.track(eS.rMx.OPEN_MODAL, {
                type: eS.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: f,
                location_stack: w,
                sku_id: y.skuId,
                product_type: S,
            }),
                y.items.forEach(V.oK);
        }, [f, w, y.skuId, y.items, S]);
        let N = (0, Z.r9)(),
            R = t === v.Dvm.EXITING,
            L = (0, eO.t0)(a),
            B = null == L ? void 0 : L.amount,
            D = i.useMemo(() => ((0, q.x6)(y) ? y.items.length : 0), [y]),
            { activeSlide: F, isTransitioning: G } = (0, et.b)({
                slideCount: D,
                intervalMs: 5000,
            });
        return null == j
            ? null
            : (0, r.jsx)(x.Gt, {
                  value: w,
                  children: (0, r.jsxs)(v.Y0X, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: e_.modalRoot,
                      returnRef: d,
                      transitionState: t,
                      size: v.CgR.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(v.hzk, {
                              "data-migration-pending": !0,
                              className: e_.modalContent,
                              children: [
                                  (0, r.jsx)(eF, {
                                      user: j,
                                      product: a,
                                      category: o,
                                      onClose: n,
                                      previewingVariantIndexProps: O,
                                      selectedVariantIndex: I,
                                      shouldCheckoutWithOrbs: b,
                                      activeBundleSlide: F,
                                      rentalDuration: P,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          e_.previewContainer,
                                          y.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                              ? e_.fractionalNitroPreviewContainer
                                              : y.type === c.Z.AVATAR_DECORATION
                                                ? e_.collectiblePreviewsContainerWithChat
                                                : e_.collectiblePreviewsContainerNoChat,
                                      ),
                                      style: { backgroundImage: "url(".concat(E, ")") },
                                      children: [
                                          (0, eA.o0)(a.skuId)
                                              ? a.skuId === eA.Vt.ORB_PROFILE_BADGE
                                                  ? N || R
                                                      ? null
                                                      : (0, r.jsx)(ef.M, { user: j })
                                                  : a.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(em.q, {})
                                                    : (0, r.jsx)(eb.b, {
                                                          product: a,
                                                          className: e_.externalProductProfilePreview,
                                                      })
                                              : (0, r.jsx)(eV, {
                                                    user: j,
                                                    product: null != T ? T : y,
                                                    activeBundleSlide: F,
                                                    isTransitioning: G,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: e_.pdpControls,
                                              children: [
                                                  A &&
                                                      (0, r.jsx)(eg.a, {
                                                          product: a,
                                                          selectedVariantIndex: I,
                                                          className: e_.wishlistButton,
                                                          iconSize: 16,
                                                          enableHoverEffect: !0,
                                                      }),
                                                  (0, r.jsx)(er.n, {
                                                      skuId: y.skuId,
                                                      tab: h,
                                                  }),
                                                  (0, r.jsx)(v.hU, {
                                                      "aria-label": ek.intl.string(ek.t.cpT0Cq),
                                                      onClick: n,
                                                      icon: v.Uz9,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          null != B &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(v.mzw, {
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
                                                  (0, r.jsx)(v.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: e_.modalFooterText,
                                                      children: ek.intl.format(ek.t["78ph4b"], {
                                                          discountOfferAmount: B,
                                                      }),
                                                  }),
                                                  (null == L ? void 0 : L.expiresAt) != null &&
                                                      (0, r.jsx)(ei.R, { endDate: L.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
