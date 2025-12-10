n.d(t, { default: () => eW }), n(388685), n(953529);
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
    h = n(410030),
    g = n(607070),
    x = n(100527),
    b = n(906732),
    P = n(570908),
    j = n(786761),
    _ = n(3148),
    C = n(739566),
    O = n(753206),
    I = n(4242),
    y = n(566697),
    T = n(333867),
    w = n(767714),
    E = n(150039),
    A = n(678135),
    N = n(876917),
    S = n(643879),
    R = n(567400),
    k = n(484459),
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
    X = n(724994),
    Q = n(328456),
    $ = n(27123),
    ee = n(330349),
    et = n(556971),
    en = n(390698),
    er = n(525518),
    ei = n(168020),
    el = n(426171),
    ea = n(224068),
    eo = n(813083),
    es = n(680942),
    ec = n(558060),
    eu = n(539598),
    ed = n(237031),
    em = n(38914),
    ep = n(259673),
    ef = n(749068),
    ev = n(406667),
    eh = n(508925),
    eg = n(953405),
    ex = n(143941),
    eb = n(616066),
    eP = n(332246),
    ej = n(58201),
    e_ = n(445794),
    eC = n(794324),
    eO = n(694364),
    eI = n(361110),
    ey = n(29121),
    eT = n(956472),
    ew = n(832149),
    eE = n(215023),
    eA = n(981631),
    eN = n(474936),
    eS = n(231338),
    eR = n(388032),
    ek = n(188336);
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
        let { item: t, product: n, user: l } = e,
            a = i.useRef(null),
            o = (0, q.x6)(n),
            { firstAvatarDecoration: s } = (0, Q.Rj)(n);
        return t.type === c.Z.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: o ? ek.bundleAvatarPreviewContainer : ek.avatarPreviewContainer,
                  children: (0, r.jsx)(eb.R, {
                      user: l,
                      item: t,
                      isHighlighted: !0,
                  }),
              })
            : t.type === c.Z.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: o ? ek.bundlePfxPreviewContainer : ek.pfxPreviewContainer,
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
                      className: ek.nameplatePreviewContainer,
                      children: (0, r.jsx)(y.Z, {
                          className: ek.nameplatePreview,
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
            l = t.items.length;
        return (0, r.jsx)("div", {
            className: ek.bundlePreviewContainer,
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
                                className: ek.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eZ, {
                                        item: e,
                                        product: t,
                                        user: n,
                                    }),
                                    (0, r.jsxs)(v.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: ek.bundleSlideTitle,
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
    eU = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, q.x6)(t)
            ? (0, r.jsx)(eD, {
                  product: t,
                  user: n,
                  activeSlide: i,
              })
            : (0, eE.o0)(t.skuId)
              ? (0, r.jsx)(eh.b, {
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
                  className: ek.learnMoreLink,
                  children: eR.intl.format(eR.t.Q1scdE, {
                      helpdeskArticle: F.Z.getArticleURL(eA.BhN.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eF = (e) => {
        let {
                product: t,
                user: n,
                category: l,
                shouldCheckoutWithOrbs: o,
                onClose: u,
                returnRef: g,
                previewingVariantIndexProps: x,
                selectedVariantIndex: P,
                activeBundleSlide: j,
                rentalDuration: _,
            } = e,
            { analyticsLocations: C } = (0, b.ZP)(),
            O = (0, m.e7)([L.default], () => L.default.locale),
            I = G.ZP.canUseCollectibles(n),
            { previewingVariantIndex: y, handleEntering: A, handleLeaving: N } = x,
            S = (0, eP.N)(t, y),
            R = (0, ej.W)(t, P);
        s()(null != R, "Selected product should not be null");
        let k = (0, X.L)(t),
            { isPurchased: D, isPartiallyOwnedBundle: U, isRented: M } = (0, X.L)(R),
            { isDisabled: F, disabledReason: W } = (0, J.G)(R.skuId),
            ee = (0, q.ne)({
                product: R,
                isPartiallyOwnedBundle: U,
                isPurchased: D,
            }),
            et = null != _,
            er = (0, m.e7)([z.Z], () => z.Z.isClaiming === (null == R ? void 0 : R.skuId)),
            ei = (0, h.ZP)(),
            el = (0, f.wj)(ei),
            em = (0, q.G1)(R),
            ep = (0, q.ql)(R, eA.tuJ.DEFAULT),
            eh = (null == ep ? void 0 : ep.amount) === 0,
            { firstAvatarDecoration: ex } = (0, Q.Rj)(null != S ? S : R),
            eb = i.useMemo(() => (0, q.BH)(R, I), [R, I]),
            { handleUseNow: eC, isApplying: eI } = (0, K.W)({
                product: R,
                onSuccess: u,
            }),
            eL = (0, ey.To)(R),
            eB = (0, eO.J)(R),
            { enabled: eZ } = (0, B.WX)({ location: "collectibles_shop_product_details_modal" }),
            eD = (0, Y.G)(R, !1, _),
            eF = (0, e_.Iw)(t),
            eG = null != eF,
            {
                checkoutEligiblePrices: eH,
                isOrbExclusive: eV,
                hasSufficientOrbs: ez,
            } = (0, eT.Ip)({
                product: R,
                isPremiumUser: I,
                hasDiscountOffer: eG,
                isRental: null != _,
            }),
            eW = i.useCallback(
                () =>
                    (0, T.Z)({
                        skuId: R.skuId,
                        analyticsLocations: C,
                        variantsReturnStyle: d.v.VARIANTS_GROUP,
                        onClose: (e) => (e ? u() : (0, eS.dG)()),
                    }),
                [C, u, R.skuId],
            );
        return (
            i.useEffect(() => {
                if (null != ex) return (0, E.PO)(ex), () => (0, E.PO)(void 0);
            }, [ex]),
            (0, r.jsxs)("div", {
                className: ek.collectibleInfoContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: ek.titleContainer,
                        children: (0, r.jsx)(eo.Z, { category: l }),
                    }),
                    (0, r.jsx)(eU, {
                        product: null != S ? S : R,
                        user: n,
                        activeSlide: j,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: ek.description,
                                children: [
                                    (0, r.jsx)(ea.Z, {
                                        product: R,
                                        isDarkText: !el,
                                        isOrbExclusive: eV,
                                        rentalDuration: _,
                                    }),
                                    (0, r.jsx)(v.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: ek.headingWithItemTypePill,
                                        children: eL,
                                    }),
                                    (0, r.jsx)(v.Text, {
                                        variant: "text-sm/normal",
                                        children: eD,
                                    }),
                                    (0, r.jsx)(eM, { skuId: R.skuId }),
                                    k.isPurchased || k.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(en.U, {
                                              className: ek.priceTag,
                                              isPartiallyPurchased: U,
                                          })
                                        : em
                                          ? (0, r.jsx)(v.Text, {
                                                variant: "text-md/semibold",
                                                className: ek.priceTag,
                                                children: eR.intl.string(eR.t.rt69oo),
                                            })
                                          : eZ
                                            ? (0, r.jsx)(eg.a, {
                                                  prices: eH,
                                                  product: R,
                                                  isPremiumUser: I,
                                                  discount: eb,
                                                  hasSufficientOrbs: ez,
                                                  isProductDisabled: F,
                                                  discountOfferAmount: eF,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: ek.priceTagContainer,
                                                  children: [
                                                      (0, r.jsx)(ec.Z, {
                                                          product: R,
                                                          discount: eb,
                                                          isPremiumUser: I,
                                                          hideStrikethroughPrice: !I || eG,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eF,
                                                      }),
                                                      I || eG ? null : (0, r.jsx)(eu.Z, { product: R }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, $.ox)(t) &&
                                (0, r.jsx)(v.Rny, {
                                    children: (0, r.jsxs)("div", {
                                        className: ek.variantsContainer,
                                        children: [
                                            (0, r.jsx)(ev.Z, {
                                                skuId: t.skuId,
                                                onVariantEnter: A,
                                                onVariantExit: N,
                                            }),
                                            (0, r.jsx)(ef.Z, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: y,
                                            }),
                                        ],
                                    }),
                                }),
                            null !== W &&
                                (0, r.jsx)(v.Text, {
                                    variant: "text-xs/normal",
                                    className: ek.disabledReason,
                                    children: W,
                                }),
                            (0, r.jsx)(v.Kqy, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (em && !I && !eh) {
                                        let e;
                                        return (
                                            (e = eR.intl.string(eR.t.sEAnVH)),
                                            (0, r.jsx)(w.Z, {
                                                subscriptionTier: eN.Si.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: ed.v,
                                                onSubscribeModalClose: () => {
                                                    (0, ed.T)({
                                                        product: R,
                                                        category: l,
                                                        shouldCheckoutWithOrbs: o,
                                                        returnRef: g,
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
                                        loading: eI,
                                        text: eR.intl.string(eR.t.MAS7uK),
                                        fullWidth: !0,
                                    });
                                    if (et) {
                                        if (D) return e;
                                    } else if (D && !M) return e;
                                    return em
                                        ? (0, r.jsx)(v.Button, {
                                              loading: er,
                                              loadingStartedLabel: eR.intl.string(eR.t["TYw+9s"]),
                                              loadingFinishedLabel: eR.intl.string(eR.t.Pg1UP5),
                                              onClick: async () => {
                                                  await (0, V.fK)(R.skuId),
                                                      u(),
                                                      (0, ew.Z)({
                                                          product: R,
                                                          analyticsLocations: C,
                                                          purchaseType: eE.o8.PREMIUM_PURCHASE,
                                                      });
                                              },
                                              text: eR.intl.string(eR.t.zp6caO),
                                              fullWidth: !0,
                                          })
                                        : (0, r.jsx)(r.Fragment, {
                                              children: eH.map((e, t) => {
                                                  let n,
                                                      i = 0 === t;
                                                  if (e.currency === eS.pK.DISCORD_ORB) {
                                                      if (null != _) {
                                                          let e = F
                                                                  ? eR.intl.string(eR.t.cTdr3x)
                                                                  : eR.intl.string(eR.t.zqh7ZM),
                                                              t = !ez || F,
                                                              n = eR.intl.formatToPlainString(eR.t.DlNs2T, {
                                                                  orbPrice: eE.As,
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
                                                                      (0, Z.qA)({
                                                                          skuId: R.skuId,
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
                                                                                        ).toLocaleDateString(O, {
                                                                                            minute: "numeric",
                                                                                            hour: "numeric",
                                                                                            day: "numeric",
                                                                                            month: "long",
                                                                                            year: "numeric",
                                                                                        })
                                                                                      : void 0;
                                                                              (0, ew.Z)({
                                                                                  product: R,
                                                                                  analyticsLocations: C,
                                                                                  itemConsumed:
                                                                                      null == (n = r[0])
                                                                                          ? void 0
                                                                                          : n.consumed,
                                                                                  purchaseType: eE.o8.ORB,
                                                                                  rentalDuration: _,
                                                                                  rentalExpiresAt: i,
                                                                              });
                                                                          },
                                                                          analyticsLocations: C,
                                                                          rentalDuration: _,
                                                                      });
                                                                  },
                                                                  disabled: t,
                                                                  "aria-label": l,
                                                                  text: eR.intl.format(eR.t["4NKuqc"], {
                                                                      orbPrice: eE.As,
                                                                      orbIconHook: () =>
                                                                          (0, r.jsx)(v.aQr, {
                                                                              className: ek.orbIconAligned,
                                                                              size: "sm",
                                                                              color: "currentColor",
                                                                          }),
                                                                  }),
                                                                  fullWidth: !0,
                                                              }),
                                                          });
                                                      }
                                                      let t = F
                                                              ? eR.intl.string(eR.t.cTdr3x)
                                                              : eR.intl.string(eR.t.zqh7ZM),
                                                          n = !ez || F,
                                                          l = eR.intl.formatToPlainString(eR.t["fNG/05"], {
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
                                                                  (0, Z.qA)({
                                                                      skuId: R.skuId,
                                                                      onCheckoutSuccess: (e) => {
                                                                          var t;
                                                                          let { entitlements: n } = e;
                                                                          (0, V.qg)({
                                                                              variantsReturnStyle: d.v.VARIANTS_GROUP,
                                                                          }),
                                                                              u(),
                                                                              (0, ew.Z)({
                                                                                  product: R,
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
                                                              "aria-label": a,
                                                              text: eR.intl.format(eR.t.kAgx5L, {
                                                                  orbPrice: e.amount,
                                                                  orbIconHook: () =>
                                                                      (0, r.jsx)(v.aQr, {
                                                                          className: ek.orbIconAligned,
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                              }),
                                                              fullWidth: !0,
                                                          }),
                                                      });
                                                  }
                                                  return (
                                                      (n = (0, q.x6)(R)
                                                          ? eR.intl.string(eR.t.V1AWw0)
                                                          : R.type === c.Z.PROFILE_EFFECT
                                                            ? eR.intl.string(eR.t.kAeDcK)
                                                            : R.type === c.Z.NAMEPLATE
                                                              ? eR.intl.string(eR.t.H3vhqU)
                                                              : eR.intl.string(eR.t.AQ0Veg)),
                                                      eG
                                                          ? (n = eR.intl.formatToPlainString(eR.t["5U5RB5"], {
                                                                discountOfferAmount: eF,
                                                            }))
                                                          : eZ &&
                                                            (n = eR.intl.formatToPlainString(eR.t["cNSL/j"], {
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
                                                                      product: R,
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
                                className: a()(ek.disclaimer, !el && ek.disclaimerLight),
                                variant: "text-xxs/normal",
                                children: em && !D ? eR.intl.string(eR.t.nKdAlO) : null,
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
            className: ek.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(P.Z, {
                avatar: (0, r.jsx)(v.qEK, {
                    src: t.avatarSrc,
                    size: v.EFr.SIZE_32,
                    "aria-label": t.name,
                    status: v.Skl.ONLINE,
                }),
                name: t.name,
                innerClassName: a()(ek.nameplateRightPanePreviewAvatarInner, n),
            }),
        });
    },
    eH = (e) => {
        let { user: t, nameplate: n, avatarDecoration: i } = e,
            l = (0, I.w$)();
        return (0, r.jsx)("div", {
            className: ek.nameplateRightPanePreviewContainer,
            role: "img",
            "aria-label": eR.intl.string(eR.t.SZeUdR),
            children: (0, r.jsxs)(v.Rny, {
                children: [
                    (0, r.jsx)(eG, {
                        user: l.mallow,
                        innerClassName: ek.userBlue,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: ek.nameplateRightPanePreviewSectionGroup,
                        children: [eR.intl.string(eR.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eG, {
                        user: l.phibi,
                        innerClassName: ek.userPink,
                    }),
                    (0, r.jsx)("div", {
                        className: ek.nameplateRightPanePreviewAvatarContainer,
                        children: (0, r.jsx)(y.Z, {
                            className: ek.nameplatePreview,
                            innerClassName: ek.userPink,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, r.jsx)(eG, {
                        user: l.locke,
                        innerClassName: ek.userPink,
                    }),
                    (0, r.jsxs)(v.Text, {
                        variant: "text-sm/semibold",
                        className: ek.nameplateRightPanePreviewSectionGroup,
                        children: [eR.intl.string(eR.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eG, {
                        user: l.boom,
                        innerClassName: ek.userGreen,
                    }),
                    (0, r.jsx)(eG, {
                        user: l.cherry,
                        innerClassName: ek.userGreen,
                    }),
                ],
            }),
        });
    },
    eV = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: l } = e,
            o = (0, m.e7)([g.Z], () => g.Z.useReducedMotion),
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
            f = (0, S.SD)({
                userId: n.id,
                image: d,
            }),
            v = t.type === c.Z.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: x, firstProfileEffect: b, firstNameplate: P } = (0, Q.Rj)(t),
            j = null != b,
            _ = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            A.Z,
                            eB(eL({}, p), {
                                pendingAvatar: f,
                                user: n,
                                canUsePremiumCustomization: s,
                                pendingAvatarDecoration: x,
                                pendingProfileEffect: b,
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
                    avatarDecoration: x,
                });
        if (t.type === c.Z.BUNDLE) {
            if (!(0, ee.L)(t))
                return (0, r.jsx)("div", {
                    className: ek.previewsContainerInner,
                    children: (0, r.jsx)("div", {
                        className: ek.combinedPreviewContent,
                        children: _(),
                    }),
                });
            {
                let e = null != i ? i : 0,
                    n = t.items[e],
                    s = t.items[Math.max(0, e - 1)],
                    u = (null == s ? void 0 : s.type) !== (null == n ? void 0 : n.type) && !o;
                return n.type === c.Z.NAMEPLATE
                    ? (0, r.jsx)("div", {
                          className: a()(ek.nameplatePreviewContainerInner, l && u ? ek.sliding : ""),
                          children: C(n),
                      })
                    : (0, r.jsx)("div", {
                          className: a()(ek.profileEffectPreviewsContainerInner, l && u ? ek.sliding : ""),
                          children: _(),
                      });
            }
        }
        return null != P
            ? (0, r.jsx)("div", {
                  className: ek.nameplatePreviewContainerInner,
                  children: C(P),
              })
            : (0, r.jsx)("div", {
                  className:
                      (null == h ? void 0 : h.type) === c.Z.AVATAR_DECORATION
                          ? ek.previewsContainerInner
                          : ek.profileEffectPreviewsContainerInner,
                  children: _(),
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
                            (0, _.ZP)({
                                author: t,
                                channelId: "1337",
                                content: eR.intl.string(eR.t.d5YwK5),
                            }),
                        ),
                        {
                            state: eA.yb.SENT,
                            id: "0",
                        },
                    ),
                );
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eR.intl.string(eR.t["TN+ZvB"]),
            children: (0, r.jsx)(v.Rny, {
                children: (0, r.jsxs)(v.Zbd, {
                    className: ek.chatPreview,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            O.Z,
                            {
                                className: ek.mockMessage,
                                author: (0, C.ZH)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: ek.mockInput,
                            children: [
                                (0, r.jsx)(v.oFk, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ek.mockInputButton,
                                }),
                                (0, r.jsx)(v.EO4, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ek.mockInputButton,
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
                product: l,
                category: o,
                returnRef: d,
                analyticsSource: p,
                analyticsLocations: f,
                shouldCheckoutWithOrbs: h,
                tab: g,
                rentalDuration: P,
            } = e,
            j = (0, m.e7)([U.default], () => U.default.getCurrentUser()),
            _ = (0, eI.f)(l),
            { previewingVariantIndex: C } = _,
            O = (0, W.o)(l),
            I = (0, eP.N)(l, C),
            y = (0, ej.W)(l, O);
        s()(null != y, "Selected product should not be null");
        let { analyticsLocations: T } = (0, b.ZP)([...f, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, el.u9)(y.skuId);
        let w = (0, eC.kc)(o),
            E = (0, R.Y)({ location: "CollectiblesShopProductDetailsModal" });
        i.useEffect(() => {
            null != j && (0, k.Z)(j.id, j.getAvatarURL(void 0, 80));
        }, [j]);
        let A = i.useMemo(() => (0, q.jm)(l.type, l.skuId), [l.type, l.skuId]);
        i.useEffect(() => {
            M.default.track(eA.rMx.OPEN_MODAL, {
                type: eA.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: T,
                sku_id: y.skuId,
                product_type: A,
            }),
                y.items.forEach(V.oK);
        }, [p, T, y.skuId, y.items, A]);
        let N = (0, Z.r9)(),
            S = t === v.Dvm.EXITING,
            L = (0, e_.t0)(l),
            B = null == L ? void 0 : L.amount,
            D = i.useMemo(() => ((0, q.x6)(y) ? y.items.length : 0), [y]),
            { activeSlide: F, isTransitioning: G } = (0, et.b)({
                slideCount: D,
                intervalMs: 5000,
            });
        return null == j
            ? null
            : (0, r.jsx)(b.Gt, {
                  value: T,
                  children: (0, r.jsxs)(v.Y0X, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: ek.modalRoot,
                      returnRef: d,
                      transitionState: t,
                      size: v.CgR.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(v.hzk, {
                              "data-migration-pending": !0,
                              className: ek.modalContent,
                              children: [
                                  (0, r.jsx)(eF, {
                                      user: j,
                                      product: l,
                                      category: o,
                                      onClose: n,
                                      previewingVariantIndexProps: _,
                                      selectedVariantIndex: O,
                                      shouldCheckoutWithOrbs: h,
                                      activeBundleSlide: F,
                                      rentalDuration: P,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: a()(
                                          ek.previewContainer,
                                          y.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                              ? ek.fractionalNitroPreviewContainer
                                              : y.type === c.Z.AVATAR_DECORATION
                                                ? ek.collectiblePreviewsContainerWithChat
                                                : ek.collectiblePreviewsContainerNoChat,
                                      ),
                                      style: { backgroundImage: "url(".concat(w, ")") },
                                      children: [
                                          (0, eE.o0)(l.skuId)
                                              ? l.skuId === eE.Vt.ORB_PROFILE_BADGE
                                                  ? N || S
                                                      ? null
                                                      : (0, r.jsx)(ep.M, { user: j })
                                                  : l.skuId === u.a.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(em.q, {})
                                                    : (0, r.jsx)(eh.b, {
                                                          product: l,
                                                          className: ek.externalProductProfilePreview,
                                                      })
                                              : (0, r.jsx)(eV, {
                                                    user: j,
                                                    product: null != I ? I : y,
                                                    activeBundleSlide: F,
                                                    isTransitioning: G,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: ek.pdpControls,
                                              children: [
                                                  E &&
                                                      (0, r.jsx)(ex.a, {
                                                          product: l,
                                                          selectedVariantIndex: O,
                                                          className: ek.wishlistButton,
                                                          iconSize: 16,
                                                          enableHoverEffect: !0,
                                                      }),
                                                  (0, r.jsx)(er.n, {
                                                      skuId: y.skuId,
                                                      tab: g,
                                                  }),
                                                  (0, r.jsx)(v.hU, {
                                                      "aria-label": eR.intl.string(eR.t.cpT0Cq),
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
                                      className: ek.modalFooter,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: ek.modalFooterBackgroundImg,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: ek.modalFooterContentContainer,
                                              children: [
                                                  (0, r.jsx)(v.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: ek.modalFooterText,
                                                      children: eR.intl.format(eR.t["78ph4b"], {
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
