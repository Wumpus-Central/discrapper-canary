n.d(t, { default: () => ez }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(979554),
    u = n(314794),
    d = n(311570),
    m = n(399606),
    p = n(28664),
    f = n(780384),
    v = n(481060),
    g = n(410030),
    h = n(607070),
    b = n(100527),
    x = n(906732),
    P = n(570908),
    j = n(786761),
    O = n(3148),
    _ = n(739566),
    y = n(753206),
    C = n(4242),
    I = n(566697),
    S = n(333867),
    w = n(767714),
    T = n(150039),
    A = n(678135),
    N = n(876917),
    E = n(643879),
    R = n(567400),
    k = n(484459),
    L = n(706454),
    Z = n(825102),
    B = n(275388),
    D = n(25990),
    U = n(594174),
    M = n(626135),
    F = n(63063),
    G = n(74538),
    V = n(937615),
    z = n(335131),
    H = n(1870),
    W = n(429368),
    K = n(884697),
    q = n(635552),
    Y = n(83479),
    J = n(290175),
    X = n(724994),
    Q = n(328456),
    $ = n(330349),
    ee = n(556971),
    et = n(390698),
    en = n(525518),
    er = n(168020),
    ei = n(426171),
    el = n(224068),
    ea = n(813083),
    eo = n(680942),
    es = n(558060),
    ec = n(539598),
    eu = n(237031),
    ed = n(38914),
    em = n(259673),
    ep = n(508925),
    ef = n(953405),
    ev = n(453713),
    eg = n(143941),
    eh = n(616066),
    eb = n(332246),
    ex = n(58201),
    eP = n(445794),
    ej = n(794324),
    eO = n(694364),
    e_ = n(361110),
    ey = n(29121),
    eC = n(956472),
    eI = n(832149),
    eS = n(215023),
    ew = n(981631),
    eT = n(474936),
    eA = n(231338),
    eN = n(388032),
    eE = n(188336);
function eR(e) {
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
function ek(e, t) {
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
let eL = (e) => {
        let { item: t, product: n, user: l } = e,
            a = i.useRef(null),
            o = (0, K.x6)(n),
            { firstAvatarDecoration: s } = (0, Q.Rj)(n);
        return t.type === c.Z.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: o ? eE.bundleAvatarPreviewContainer : eE.avatarPreviewContainer,
                  children: (0, r.jsx)(eh.R, {
                      user: l,
                      item: t,
                      isHighlighted: !0,
                  }),
              })
            : t.type === c.Z.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: o ? eE.bundlePfxPreviewContainer : eE.pfxPreviewContainer,
                    ref: a,
                    children: (0, r.jsx)(N.Z, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === c.Z.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: a,
                      className: eE.nameplatePreviewContainer,
                      children: (0, r.jsx)(I.Z, {
                          className: eE.nameplatePreview,
                          nameplate: t,
                          showPlaceholderUser: !0,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: s,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    eZ = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            l = t.items.length;
        return (0, r.jsx)("div", {
            className: eE.bundlePreviewContainer,
            children: (0, r.jsx)(v.MyZ, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        o = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = "(".concat(i + 1, "/").concat(l, ")");
                    return (0, r.jsx)(
                        v.Mi4,
                        {
                            id: a,
                            children: (0, r.jsxs)("div", {
                                className: eE.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eL, {
                                        item: e,
                                        product: t,
                                        user: n,
                                    }),
                                    (0, r.jsxs)(v.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eE.bundleSlideTitle,
                                        children: [null == o ? void 0 : o.name, " ", s],
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
    eB = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, K.x6)(t)
            ? (0, r.jsx)(eZ, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, eS.o0)(t.skuId)
              ? (0, r.jsx)(ep.b, {
                    animationState: "on_hover",
                    product: t,
                })
              : t.items.length > 0
                ? (0, r.jsx)(eL, {
                      item: t.items[0],
                      product: t,
                      user: n,
                  })
                : null;
    },
    eD = (e) => {
        let { skuId: t } = e;
        return t === u.a.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(v.Text, {
                  variant: "text-sm/normal",
                  className: eE.learnMoreLink,
                  children: eN.intl.format(eN.t.Q1scdE, {
                      helpdeskArticle: F.Z.getArticleURL(ew.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eU = (e) => {
        let {
                product: t,
                user: n,
                category: l,
                shouldCheckoutWithOrbs: o,
                onClose: u,
                returnRef: h,
                previewingVariantIndexProps: b,
                selectedVariantIndex: P,
                activeBundleSlide: j,
                rentalDuration: O,
            } = e,
            { analyticsLocations: _ } = (0, x.ZP)(),
            y = (0, m.e7)([L.default], () => L.default.locale),
            C = G.ZP.canUseCollectibles(n),
            { previewingVariantIndex: I } = b,
            A = (0, eb.N)(t, I),
            N = (0, ex.W)(t, P);
        s()(null != N, "Selected product should not be null");
        let E = (0, X.L)(t),
            { isPurchased: R, isPartiallyOwnedBundle: k, isRented: D } = (0, X.L)(N),
            { isDisabled: U, disabledReason: M } = (0, J.G)(N.skuId),
            F = (0, K.ne)({
                product: N,
                isPartiallyOwnedBundle: k,
                isPurchased: R,
            }),
            W = null != O,
            $ = (0, m.e7)([H.Z], () => H.Z.isClaiming === (null == N ? void 0 : N.skuId)),
            ee = (0, g.ZP)(),
            en = (0, f.wj)(ee),
            er = (0, K.G1)(N),
            ei = (0, K.ql)(N, ew.tuJ.DEFAULT),
            ed = (null == ei ? void 0 : ei.amount) === 0,
            { firstAvatarDecoration: em } = (0, Q.Rj)(null != A ? A : N),
            ep = i.useMemo(() => (0, K.BH)(N, C), [N, C]),
            { handleUseNow: eg, isApplying: eh } = (0, q.W)({
                product: N,
                onSuccess: u,
            }),
            ej = (0, ey.To)(N),
            e_ = (0, eO.J)(N),
            { enabled: eR } = (0, Z.WX)({ location: "collectibles_shop_product_details_modal" }),
            ek = (0, Y.G)(N, !1, O),
            eL = (0, eP.Iw)(t),
            eZ = null != eL,
            {
                checkoutEligiblePrices: eU,
                isOrbExclusive: eM,
                hasSufficientOrbs: eF,
            } = (0, eC.Ip)({
                product: N,
                isPremiumUser: C,
                hasDiscountOffer: eZ,
                isRental: null != O,
            }),
            eG = i.useCallback(
                () =>
                    (0, S.Z)({
                        skuId: N.skuId,
                        analyticsLocations: _,
                        variantsReturnStyle: d.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? u() : (0, eA.dG)()),
                    }),
                [_, u, N.skuId],
            );
        return (
            i.useEffect(() => {
                if (null != em) return (0, T.PO)(em), () => (0, T.PO)(void 0);
            }, [em]),
            (0, r.jsxs)("div", {
                className: eE.collectibleInfoContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: eE.titleContainer,
                        children: (0, r.jsx)(ea.Z, { category: l }),
                    }),
                    (0, r.jsx)(eB, {
                        product: null != A ? A : N,
                        user: n,
                        activeSlide: j,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: eE.description,
                                children: [
                                    (0, r.jsx)(el.Z, {
                                        product: N,
                                        isDarkText: !en,
                                        isOrbExclusive: eM,
                                        rentalDuration: O,
                                    }),
                                    (0, r.jsx)(v.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eE.headingWithItemTypePill,
                                        children: ej,
                                    }),
                                    (0, r.jsx)(v.Text, {
                                        variant: "text-sm/normal",
                                        children: ek,
                                    }),
                                    (0, r.jsx)(eD, { skuId: N.skuId }),
                                    E.isPurchased || E.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(et.U, {
                                              className: eE.priceTag,
                                              isPartiallyPurchased: k,
                                          })
                                        : er
                                          ? (0, r.jsx)(v.Text, {
                                                variant: "text-md/semibold",
                                                className: eE.priceTag,
                                                children: eN.intl.string(eN.t.rt69oo),
                                            })
                                          : eR
                                            ? (0, r.jsx)(ef.a, {
                                                  prices: eU,
                                                  product: N,
                                                  isPremiumUser: C,
                                                  discount: ep,
                                                  hasSufficientOrbs: eF,
                                                  isProductDisabled: U,
                                                  discountOfferAmount: eL,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: eE.priceTagContainer,
                                                  children: [
                                                      (0, r.jsx)(es.Z, {
                                                          product: N,
                                                          discount: ep,
                                                          isPremiumUser: C,
                                                          hideStrikethroughPrice: !C || eZ,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eL,
                                                      }),
                                                      C || eZ ? null : (0, r.jsx)(ec.Z, { product: N }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, r.jsx)(v.Rny, {
                                children: (0, r.jsx)(ev.P, {
                                    selectedVariantIndex: P,
                                    variantGroupProduct: t,
                                    previewingVariantIndexProps: b,
                                    className: eE.variantsSwitch,
                                }),
                            }),
                            null !== M &&
                                (0, r.jsx)(v.Text, {
                                    variant: "text-xs/normal",
                                    className: eE.disabledReason,
                                    children: M,
                                }),
                            (0, r.jsx)(v.Kqy, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (er && !C && !ed) {
                                        let e;
                                        return (
                                            (e = eN.intl.string(eN.t.sEAnVH)),
                                            (0, r.jsx)(w.Z, {
                                                subscriptionTier: eT.Si.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: eu.v,
                                                onSubscribeModalClose: () => {
                                                    (0, eu.T)({
                                                        product: N,
                                                        category: l,
                                                        shouldCheckoutWithOrbs: o,
                                                        returnRef: h,
                                                        analyticsLocations: _,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    if (!F) return null;
                                    let e = (0, r.jsx)(v.Button, {
                                        variant: "primary",
                                        onClick: eg,
                                        loading: eh,
                                        text: eN.intl.string(eN.t.MAS7uK),
                                        fullWidth: !0,
                                    });
                                    if (W) {
                                        if (R) return e;
                                    } else if (R && !D) return e;
                                    return er
                                        ? (0, r.jsx)(v.Button, {
                                              loading: $,
                                              loadingStartedLabel: eN.intl.string(eN.t["TYw+9s"]),
                                              loadingFinishedLabel: eN.intl.string(eN.t.Pg1UP5),
                                              onClick: async () => {
                                                  await (0, z.fK)(N.skuId),
                                                      u(),
                                                      (0, eI.Z)({
                                                          product: N,
                                                          analyticsLocations: _,
                                                          purchaseType: eS.o8.PREMIUM_PURCHASE,
                                                      });
                                              },
                                              text: eN.intl.string(eN.t.zp6caO),
                                              fullWidth: !0,
                                          })
                                        : (0, r.jsx)(r.Fragment, {
                                              children: eU.map((e, t) => {
                                                  let n,
                                                      i = 0 === t;
                                                  if (e.currency === eA.pK.DISCORD_ORB) {
                                                      if (null != O) {
                                                          let e = U
                                                                  ? eN.intl.string(eN.t.cTdr3x)
                                                                  : eN.intl.string(eN.t.zqh7ZM),
                                                              t = !eF || U,
                                                              n = eN.intl.formatToPlainString(eN.t.DlNs2T, {
                                                                  orbPrice: eS.As,
                                                              }),
                                                              l = t ? "".concat(n, ", ").concat(e) : n;
                                                          return (0, r.jsx)(p.u, {
                                                              position: "top",
                                                              text: e,
                                                              shouldShow: t,
                                                              "aria-label": !1,
                                                              children: (0, r.jsx)(v.Button, {
                                                                  variant: i ? "primary" : "secondary",
                                                                  onClick: () => {
                                                                      (0, B.qA)({
                                                                          skuId: N.skuId,
                                                                          onCheckoutSuccess: (e) => {
                                                                              var t, n;
                                                                              let { entitlements: r } = e;
                                                                              (0, z.qg)({
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
                                                                                        ).toLocaleDateString(y, {
                                                                                            minute: "numeric",
                                                                                            hour: "numeric",
                                                                                            day: "numeric",
                                                                                            month: "long",
                                                                                            year: "numeric",
                                                                                        })
                                                                                      : void 0;
                                                                              (0, eI.Z)({
                                                                                  product: N,
                                                                                  analyticsLocations: _,
                                                                                  itemConsumed:
                                                                                      null == (n = r[0])
                                                                                          ? void 0
                                                                                          : n.consumed,
                                                                                  purchaseType: eS.o8.ORB,
                                                                                  rentalDuration: O,
                                                                                  rentalExpiresAt: i,
                                                                              });
                                                                          },
                                                                          analyticsLocations: _,
                                                                          rentalDuration: O,
                                                                      });
                                                                  },
                                                                  disabled: t,
                                                                  "aria-label": l,
                                                                  text: eN.intl.format(eN.t["4NKuqc"], {
                                                                      orbPrice: eS.As,
                                                                      orbIconHook: () =>
                                                                          (0, r.jsx)(v.aQr, {
                                                                              className: eE.orbIconAligned,
                                                                              size: "sm",
                                                                              color: "currentColor",
                                                                          }),
                                                                  }),
                                                                  fullWidth: !0,
                                                              }),
                                                          });
                                                      }
                                                      let t = U
                                                              ? eN.intl.string(eN.t.cTdr3x)
                                                              : eN.intl.string(eN.t.zqh7ZM),
                                                          n = !eF || U,
                                                          l = eN.intl.formatToPlainString(eN.t["fNG/05"], {
                                                              orbPrice: e.amount,
                                                          }),
                                                          a = n ? "".concat(l, ", ").concat(t) : l;
                                                      return (0, r.jsx)(p.u, {
                                                          position: "top",
                                                          text: t,
                                                          shouldShow: n,
                                                          "aria-label": !1,
                                                          children: (0, r.jsx)(v.Button, {
                                                              variant: i ? "primary" : "secondary",
                                                              onClick: () => {
                                                                  (0, B.qA)({
                                                                      skuId: N.skuId,
                                                                      onCheckoutSuccess: (e) => {
                                                                          var t;
                                                                          let { entitlements: n } = e;
                                                                          (0, z.qg)({
                                                                              variantsReturnStyle: d.v.VARIANTS_GROUP,
                                                                          }),
                                                                              u(),
                                                                              (0, eI.Z)({
                                                                                  product: N,
                                                                                  analyticsLocations: _,
                                                                                  itemConsumed:
                                                                                      null == (t = n[0])
                                                                                          ? void 0
                                                                                          : t.consumed,
                                                                                  purchaseType: eS.o8.ORB,
                                                                              });
                                                                      },
                                                                      analyticsLocations: _,
                                                                  });
                                                              },
                                                              disabled: n,
                                                              "aria-label": a,
                                                              text: eN.intl.format(eN.t.kAgx5L, {
                                                                  orbPrice: e.amount,
                                                                  orbIconHook: () =>
                                                                      (0, r.jsx)(v.aQr, {
                                                                          className: eE.orbIconAligned,
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                              }),
                                                              fullWidth: !0,
                                                          }),
                                                      });
                                                  }
                                                  return (
                                                      (n = (0, K.x6)(N)
                                                          ? eN.intl.string(eN.t.V1AWw0)
                                                          : N.type === c.Z.PROFILE_EFFECT
                                                            ? eN.intl.string(eN.t.kAeDcK)
                                                            : N.type === c.Z.NAMEPLATE
                                                              ? eN.intl.string(eN.t.H3vhqU)
                                                              : eN.intl.string(eN.t.AQ0Veg)),
                                                      eZ
                                                          ? (n = eN.intl.formatToPlainString(eN.t["5U5RB5"], {
                                                                discountOfferAmount: eL,
                                                            }))
                                                          : eR &&
                                                            (n = eN.intl.formatToPlainString(eN.t["cNSL/j"], {
                                                                price: (0, V.T4)(e.amount, e.currency),
                                                            })),
                                                      (0, r.jsxs)(v.ButtonGroup, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, r.jsx)(v.Button, {
                                                                  variant: i ? "primary" : "secondary",
                                                                  onClick: eG,
                                                                  text: n,
                                                                  fullWidth: !0,
                                                              }),
                                                              e_ &&
                                                                  (0, r.jsx)(eo.Z, {
                                                                      primary: i,
                                                                      product: N,
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
                                className: a()(eE.disclaimer, !en && eE.disclaimerLight),
                                variant: "text-xxs/normal",
                                children: er && !R ? eN.intl.string(eN.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eM = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eE.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(P.Z, {
                avatar: (0, r.jsx)(v.qEK, {
                    src: t.avatarSrc,
                    size: v.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: v.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: a()(eE.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eF = (e) => {
        let { user: t, nameplate: n, avatarDecoration: i } = e,
            l = (0, C.w$)();
        return (0, r.jsx)("div", {
            className: eE.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eN.intl.string(eN.t.SZeUdR),
            children: (0, r.jsxs)(v.Rny, {
                children: [
                    (0, r.jsx)(eM, {
                        user: l.mallow,
                        innerClassName: eE.userBlue,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: eE.nameplateRightPanePreviewSectionGroup,
                        children: [eN.intl.string(eN.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eM, {
                        user: l.phibi,
                        innerClassName: eE.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: eE.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(I.Z, {
                            className: eE.nameplatePreview,
                            innerClassName: eE.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, r.jsx)(eM, {
                        user: l.locke,
                        innerClassName: eE.userPink,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: eE.nameplateRightPanePreviewSectionGroup,
                        children: [eN.intl.string(eN.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eM, {
                        user: l.boom,
                        innerClassName: eE.userGreen,
                    }),
                    (0, r.jsx)(eM, {
                        user: l.cherry,
                        innerClassName: eE.userGreen,
                    }),
                ],
            }),
        });
    },
    eG = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: l } = e,
            o = (0, m.e7)([h.Z], () => h.Z.useReducedMotion),
            s = G.ZP.canUsePremiumProfileCustomization(n),
            u = (0, m.cj)([D.Z], () => D.Z.getAllPending()),
            { pendingAvatar: d } = u,
            p = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(u, ["pendingAvatar"]),
            f = (0, E.SD)({
                userId: n.id,
                image: d,
            }),
            v = t.type === c.Z.AVATAR_DECORATION,
            [g] = t.items,
            { firstAvatarDecoration: b, firstProfileEffect: x, firstNameplate: P } = (0, Q.Rj)(t),
            j = null != x,
            O = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            A.Z,
                            ek(eR({}, p), {
                                pendingAvatar: f,
                                user: n,
                                canUsePremiumCustomization: s,
                                pendingAvatarDecoration: b,
                                pendingProfileEffect: x,
                                disabledInputs: !0,
                                hideMessageInput: !j,
                                hideCustomStatus: !0,
                                hideBioSection: v,
                                hideExampleButton: !0,
                                interactive: !1,
                            }),
                        ),
                        v && (0, r.jsx)(eV, { user: n }),
                    ],
                }),
            _ = (e) =>
                (0, r.jsx)(eF, {
                    user: n,
                    nameplate: e,
                    avatarDecoration: b,
                });
        if (t.type === c.Z.BUNDLE) {
            if (!(0, $.L)(t))
                return (0, r.jsx)("div", {
                    className: eE.previewsContainerInner,
                    children: (0, r.jsx)("div", {
                        className: eE.combinedPreviewContent,
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
                          className: a()(eE.nameplatePreviewContainerInner, l && u ? eE.sliding : ""),
                          children: _(n),
                      })
                    : (0, r.jsx)("div", {
                          className: a()(eE.profileEffectPreviewsContainerInner, l && u ? eE.sliding : ""),
                          children: O(),
                      });
            }
        }
        return null != P
            ? (0, r.jsx)("div", {
                  className: eE.nameplatePreviewContainerInner,
                  children: _(P),
              })
            : (0, r.jsx)("div", {
                  className:
                      (null == g ? void 0 : g.type) === c.Z.AVATAR_DECORATION
                          ? eE.previewsContainerInner
                          : eE.profileEffectPreviewsContainerInner,
                  children: O(),
              });
    },
    eV = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, j.e5)(
                    ek(
                        eR(
                            {},
                            (0, O.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eN.intl.string(eN.t.d5YwK5),
                            }),
                        ),
                        {
                            state: ew.yb.SENT,
                            id: "0",
                        },
                    ),
                );
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eN.intl.string(eN.t["TN+ZvB"]),
            children: (0, r.jsx)(v.Rny, {
                children: (0, r.jsxs)(v.Zbd, {
                    className: eE.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            y.Z,
                            {
                                className: eE.mockMessage,
                                author: (0, _.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: eE.mockInput,
                            children: [
                                (0, r.jsx)(v.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eE.mockInputButton,
                                }),
                                (0, r.jsx)(v.EO4, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eE.mockInputButton,
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
                product: l,
                category: o,
                returnRef: d,
                analyticsSource: p,
                analyticsLocations: f,
                shouldCheckoutWithOrbs: g,
                tab: h,
                rentalDuration: P,
            } = e,
            j = (0, m.e7)([U.default], () => U.default.getCurrentUser()),
            O = (0, e_.f)(l),
            { previewingVariantIndex: _ } = O,
            y = (0, W.o)(l),
            C = (0, eb.N)(l, _),
            I = (0, ex.W)(l, y);
        s()(null != I, "Selected product should not be null");
        let { analyticsLocations: S } = (0, x.ZP)([...f, b.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ei.u9)(I.skuId);
        let w = (0, ej.kc)(o),
            T = (0, R.Y)({ location: "CollectiblesShopProductDetailsModal" });
        i.useEffect(() => {
            null != j && (0, k.Z)(j.id, j.getAvatarURL(void 0, 80));
        }, [j]);
        let A = i.useMemo(() => (0, K.jm)(l.type, l.skuId), [l.type, l.skuId]);
        i.useEffect(() => {
            M.default.track(ew.rMx.OPEN_MODAL, {
                type: ew.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: S,
                sku_id: I.skuId,
                product_type: A,
            }),
                I.items.forEach(z.oK);
        }, [p, S, I.skuId, I.items, A]);
        let N = (0, B.r9)(),
            E = t === v.Dvm.EXITING,
            L = (0, eP.t0)(l),
            Z = null == L ? void 0 : L.amount,
            D = i.useMemo(() => ((0, K.x6)(I) ? I.items.length : 0), [I]),
            { activeSlide: F, isTransitioning: G } = (0, ee.b)({
                slideCount: D,
                intervalMs: 5000,
            });
        return null == j
            ? null
            : (0, r.jsx)(x.Gt, {
                  value: S,
                  children: (0, r.jsxs)(v.Y0X, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eE.modalRoot,
                      returnRef: d,
                      transitionState: t,
                      size: v.CgR.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(v.hzk, {
                              "data-migration-pending": !0,
                              className: eE.modalContent,
                              children: [
                                  (0, r.jsx)(eU, {
                                      user: j,
                                      product: l,
                                      category: o,
                                      onClose: n,
                                      previewingVariantIndexProps: O,
                                      selectedVariantIndex: y,
                                      shouldCheckoutWithOrbs: g,
                                      activeBundleSlide: F,
                                      rentalDuration: P,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: a()(
                                          eE.previewContainer,
                                          I.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                              ? eE.fractionalNitroPreviewContainer
                                              : I.type === c.Z.AVATAR_DECORATION
                                                ? eE.collectiblePreviewsContainerWithChat
                                                : eE.collectiblePreviewsContainerNoChat,
                                      ),
                                      style: { backgroundImage: "url(".concat(w, ")") },
                                      children: [
                                          (0, eS.o0)(l.skuId)
                                              ? l.skuId === eS.Vt.ORB_PROFILE_BADGE
                                                  ? N || E
                                                      ? null
                                                      : (0, r.jsx)(em.M, { user: j })
                                                  : l.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(ed.q, {})
                                                    : (0, r.jsx)(ep.b, {
                                                          product: l,
                                                          className: eE.externalProductProfilePreview,
                                                      })
                                              : (0, r.jsx)(eG, {
                                                    user: j,
                                                    product: null != C ? C : I,
                                                    activeBundleSlide: F,
                                                    isTransitioning: G,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: eE.pdpControls,
                                              children: [
                                                  T &&
                                                      (0, r.jsx)(eg.a, {
                                                          product: l,
                                                          selectedVariantIndex: y,
                                                          className: eE.wishlistButton,
                                                          iconSize: 16,
                                                          enableHoverEffect: !0,
                                                      }),
                                                  (0, r.jsx)(en.n, {
                                                      skuId: I.skuId,
                                                      tab: h,
                                                  }),
                                                  (0, r.jsx)(v.hU, {
                                                      "aria-label": eN.intl.string(eN.t.cpT0Cq),
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
                          null != Z &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(v.mzw, {
                                      "data-migration-pending": !0,
                                      className: eE.modalFooter,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eE.modalFooterBackgroundImg,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: eE.modalFooterContentContainer,
                                              children: [
                                                  (0, r.jsx)(v.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eE.modalFooterText,
                                                      children: eN.intl.format(eN.t["78ph4b"], {
                                                          discountOfferAmount: Z,
                                                      }),
                                                  }),
                                                  (null == L ? void 0 : L.expiresAt) != null &&
                                                      (0, r.jsx)(er.R, { endDate: L.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
