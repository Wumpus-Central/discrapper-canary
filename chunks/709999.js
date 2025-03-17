n.d(t, {
    Z: () => ef,
    d: () => ep
}),
    n(47120),
    n(627341);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(278074),
    d = n(873546),
    u = n(180650),
    m = n(979554),
    g = n(399606),
    p = n(622535),
    h = n(481060),
    f = n(727637),
    x = n(607070),
    b = n(100527),
    N = n(906732),
    _ = n(497578),
    E = n(333867),
    j = n(197115),
    C = n(876917),
    O = n(210887),
    v = n(822857),
    S = n(960919),
    T = n(74538),
    I = n(335131),
    y = n(1870),
    A = n(429368),
    P = n(884697),
    R = n(664018),
    D = n(819570),
    Z = n(228624),
    w = n(635552),
    k = n(905357),
    W = n(724994),
    L = n(297651),
    B = n(390698),
    M = n(813083),
    U = n(680942),
    V = n(558060),
    G = n(237031),
    F = n(508925),
    H = n(385797),
    z = n(453713),
    Y = n(616066),
    K = n(216541),
    q = n(22267),
    X = n(67409),
    J = n(58201),
    Q = n(201964),
    $ = n(361110),
    ee = n(956472),
    et = n(832149),
    en = n(981631),
    er = n(474936),
    ei = n(231338),
    es = n(388032),
    ea = n(661252);
function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function eo(e, t) {
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
function ec(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let ed = (e) => {
        var { children: t, onClick: n } = e,
            i = ec(e, ['children', 'onClick']);
        return (0, r.jsx)(
            h.zxk,
            eo(
                el(
                    {
                        fullWidth: !0,
                        look: h.zxk.Looks.FILLED,
                        innerClassName: ea.cardButtonInner,
                        onClick: (e) => {
                            e.stopPropagation(), n(e);
                        }
                    },
                    i
                ),
                { children: t }
            )
        );
    },
    eu = (e) => {
        var { className: t } = e,
            n = ec(e, ['className']);
        return (0, r.jsx)(
            h.zxk,
            eo(
                el(
                    {
                        color: h.Ttl.BRAND,
                        look: h.zxk.Looks.FILLED,
                        size: h.PhG.ICON,
                        className: a()(ea.previewButton, t),
                        innerClassName: ea.previewButtonInner,
                        'aria-label': es.NW.string(es.t.SKNnqq)
                    },
                    n
                ),
                {
                    children: (0, r.jsx)(h.tEF, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }
            )
        );
    },
    em = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: i } = e;
        return (0, r.jsx)('div', {
            className: ea.profileEffectShopPreview,
            children: (0, r.jsx)(C.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: i && !n,
                removeSetHeight: !0
            })
        });
    },
    eg = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: i, user: s, item: l } = e;
        return (0, r.jsx)('div', {
            className: a()(ea.avatarContainer, t && ea.mysteryAvatarContainer),
            children: (0, r.jsx)(Y.R, {
                item: l,
                user: s,
                isPurchased: i,
                isHighlighted: n
            })
        });
    },
    ep = (e) => {
        let { showStatus: t, width: n, opacity: i } = e;
        return (0, r.jsxs)('div', {
            className: a()(ea.nameplatePreviewSampleItem, ea.placeholderItem),
            style: { opacity: i },
            children: [
                (0, r.jsx)(h.qEK, {
                    src: null,
                    size: h.EFr.SIZE_32,
                    status: t ? en.Skl.ONLINE : void 0,
                    statusColor: 'var(--background-modifier-accent)',
                    'aria-hidden': !0
                }),
                (0, r.jsx)('div', {
                    className: ea.placeholderBar,
                    style: { maxWidth: null != n ? n : '100px' }
                })
            ]
        });
    },
    eh = (e) => {
        let { user: t, nameplate: n, isHighlighted: i, isPurchased: s } = e;
        return (0, r.jsx)('div', {
            className: ea.nameplatePreviewRootContainer,
            children: (0, r.jsxs)('div', {
                className: ea.nameplatePreviewList,
                children: [
                    (0, r.jsxs)('div', {
                        className: ea.fadeIn,
                        children: [
                            (0, r.jsx)(ep, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            }),
                            (0, r.jsx)(ep, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            })
                        ]
                    }),
                    (0, r.jsx)(q.Z, {
                        user: t,
                        nameplate: n,
                        className: ea.nameplatePreviewSampleItem,
                        isHighlighted: i,
                        showWumpus: !i,
                        showStatus: !0,
                        isPurchased: s
                    }),
                    (0, r.jsxs)('div', {
                        className: ea.fadeOut,
                        children: [
                            (0, r.jsx)(ep, {
                                showStatus: !0,
                                width: 110,
                                opacity: 0.85
                            }),
                            (0, r.jsx)(ep, {
                                showStatus: !0,
                                width: 94,
                                opacity: 0.7
                            })
                        ]
                    })
                ]
            })
        });
    },
    ef =
        12633 == n.j
            ? function (e) {
                  let { product: t, user: n, category: s, onMount: l, isGiftEasterEggEnabled: C, isInFeedView: Y, tab: q } = e,
                      { analyticsLocations: en } = (0, N.ZP)([...(Y ? [b.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), b.Z.COLLECTIBLES_SHOP_CARD]),
                      ec = i.useRef(null),
                      ep = (0, f.Z)(ec),
                      [ef, ex] = i.useState(!1),
                      eb = ep || ef,
                      eN = (0, $.f)(t),
                      { previewingVariantIndex: e_ } = eN,
                      eE = (0, k.T)(t),
                      ej = (0, g.e7)([x.Z], () => x.Z.useReducedMotion),
                      eC = T.ZP.canUseCollectibles(n),
                      eO = i.useMemo(() => (0, P.BH)(t, eC), [t, eC]),
                      ev = (0, P.G1)(t),
                      eS = (0, P.rN)(t),
                      [eT, eI, ey] = (0, g.Wu)([y.Z], () => [y.Z.isClaiming === t.skuId, null != y.Z.isClaiming && y.Z.isClaiming !== t.skuId, y.Z.purchases]),
                      eA = (0, Q.o)(t, ey, e_),
                      eP = (0, g.e7)([O.Z], () => (0, h.wjy)(O.Z.theme)),
                      eR = (0, P.Yq)(t.skuId),
                      eD = s.skuId === u.T.ANIME_V3 && (0, P.WW)(t.skuId),
                      { hoverVariant: eZ } = (0, R.E)('CollectiblesShopTallCard'),
                      ew = s.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
                      ek = (0, Z.hv)('CollectiblesShopTallCard'),
                      eW = (0, A.o)(t, ey),
                      eL = (0, J.W)(t, eW),
                      eB = (0, P.XM)(eL, eC, !1),
                      { isPurchased: eM, isPartiallyOwnedBundle: eU } = (0, W.L)(eL),
                      eV = (0, P.ne)({
                          product: eL,
                          isPartiallyOwnedBundle: eU,
                          isPurchased: eM
                      }),
                      eG = null !== e_ ? e_ : eW,
                      [eF, eH] = i.useState(!1),
                      { enabled: ez } = (0, v.W)({ location: 'collectibles_shop_tall_card' }),
                      eY = (0, _.N)('CollectiblesShopTallCard'),
                      { handleCardVisibilityChange: eK } = (0, L.E)(eL.skuId, Y ? 'home' : 'full'),
                      eq = (0, D.E)('shop_tall_card');
                  i.useEffect(() => {
                      let { current: e } = ec;
                      if (null == e) return;
                      let t = () => ex(!0),
                          n = (t) => {
                              e.contains(t.relatedTarget) || ex(!1);
                          };
                      return (
                          e.addEventListener('focusin', t),
                          e.addEventListener('focusout', n),
                          e.blur(),
                          () => {
                              e.removeEventListener('focusin', t), e.removeEventListener('focusout', n);
                          }
                      );
                  }, []),
                      i.useEffect(() => {
                          null == l || l(ec);
                      }, [l]);
                  let eX = i.useRef(null),
                      { handleUseNow: eJ, isApplying: eQ } = (0, w.W)({ product: eL }),
                      {
                          displayPrices: e$,
                          checkoutEligiblePrices: e0,
                          isOrbExclusive: e1,
                          shouldCheckoutWithOrbs: e2
                      } = (0, ee.Ip)({
                          product: t,
                          isPremiumUser: eC,
                          tab: q
                      }),
                      e6 = (e) => (n) => {
                          (eX.current = n.currentTarget),
                              (0, G.T)({
                                  product: t,
                                  category: s,
                                  shouldCheckoutWithOrbs: e2,
                                  analyticsLocations: en,
                                  analyticsSource: e,
                                  returnRef: eX,
                                  tab: q
                              });
                      },
                      e3 = e6(b.Z.COLLECTIBLES_SHOP_CARD),
                      e8 = e6(b.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
                      e4 = () =>
                          (0, r.jsx)('div', {
                              className: ea.hoverUpsellContainer,
                              children: (0, r.jsx)(j.Z, {
                                  fullWidth: !0,
                                  className: ea.__invalid_premiumSubscribeButton,
                                  disabled: eI,
                                  onClick: (e) => e.stopPropagation(),
                                  buttonText: es.NW.string(es.t.sEAnVF),
                                  subscriptionTier: er.Si.TIER_2
                              })
                          });
                  if (0 === e$.length) return null;
                  let e9 = () =>
                      ev || d.tq || e1 || t.type === m.Z.NAMEPLATE || !eV
                          ? null
                          : eS
                            ? (0, r.jsx)(eu, { onClick: e8 })
                            : (0, r.jsx)(U.Z, {
                                  product: t,
                                  selectedVariantIndex: eW,
                                  returnRef: ec,
                                  isGiftEasterEggEnabled: C,
                                  disableCustomColor: !0,
                                  tooltipDelay: 250
                              });
                  return (0, P.x6)(t) && null != eO && eO.discountPercentage < 0
                      ? null
                      : (0, r.jsx)(p.$, {
                            onChange: eK,
                            threshold: 0,
                            children: (0, r.jsx)(h.tEY, {
                                children: (0, r.jsxs)(h.kL8, {
                                    className: a()(eP ? ea.shopCardDark : ea.shopCard, {
                                        [ea.partiallyOwned]: eU && !eb,
                                        [ea.shopCardAnimation]: !ej && eZ !== R.D.NO_MOVEMENT,
                                        [eP ? ea.shopCardDarkHighlighted : ea.shopCardHighlighted]: eb,
                                        [ea.mysteryShopCard]: ew
                                    }),
                                    ref: ec,
                                    onClick: e3,
                                    'aria-label': t.name,
                                    children: [
                                        ev &&
                                            (0, r.jsx)(h.ua7, {
                                                tooltipContentClassName: ea.premiumWheelTooltipContent,
                                                color: h.ua7.Colors.PRIMARY,
                                                text: es.NW.string(es.t.O2K0xM),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        h.IGR,
                                                        eo(el({}, e), {
                                                            className: ea.premiumWheelBadge,
                                                            text: (0, r.jsx)(h.SrA, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: ea.premiumWheel
                                                            })
                                                        })
                                                    )
                                            }),
                                        (0, r.jsx)('div', {
                                            className: ea.preview,
                                            children: (0, c.EQ)(t.type)
                                                .with(m.Z.PROFILE_EFFECT, () =>
                                                    (0, r.jsx)(em, {
                                                        isHighlighted: eb,
                                                        profileEffectId: eA.id,
                                                        isPurchased: eM
                                                    })
                                                )
                                                .with(
                                                    m.Z.AVATAR_DECORATION,
                                                    () => (
                                                        o()(eA.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                        (0, r.jsx)(eg, {
                                                            item: eA,
                                                            user: n,
                                                            isStormMysteryItem: ew,
                                                            isHighlighted: eb,
                                                            isPurchased: eM
                                                        })
                                                    )
                                                )
                                                .with(m.Z.NAMEPLATE, () =>
                                                    (0, r.jsx)(eh, {
                                                        user: n,
                                                        nameplate: eA,
                                                        isHighlighted: eb,
                                                        isPurchased: eM
                                                    })
                                                )
                                                .with(m.Z.BUNDLE, () =>
                                                    (0, r.jsx)(K.d, {
                                                        product: t,
                                                        user: n,
                                                        isPurchased: eM,
                                                        isHighlighted: eb
                                                    })
                                                )
                                                .with(m.Z.VARIANTS_GROUP, () => {
                                                    if (null == t.variants || 0 === t.variants.length) return null;
                                                    let e = t.variants[eG];
                                                    return null == e
                                                        ? null
                                                        : (0, c.EQ)(e.type)
                                                              .with(m.Z.PROFILE_EFFECT, () => {
                                                                  let [t] = e.items;
                                                                  return (0, r.jsx)(em, {
                                                                      isHighlighted: eb,
                                                                      profileEffectId: t.id,
                                                                      isPurchased: eM && !eF
                                                                  });
                                                              })
                                                              .with(m.Z.AVATAR_DECORATION, () => {
                                                                  let [t] = e.items;
                                                                  return (
                                                                      o()(t.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                                      (0, r.jsx)(eg, {
                                                                          item: t,
                                                                          user: n,
                                                                          isStormMysteryItem: ew,
                                                                          isHighlighted: eb,
                                                                          isPurchased: eM
                                                                      })
                                                                  );
                                                              })
                                                              .otherwise(() => null);
                                                })
                                                .with(m.Z.EXTERNAL_SKU, () =>
                                                    (0, r.jsx)(F.b, {
                                                        product: t,
                                                        animationState: eb ? 'on' : 'off'
                                                    })
                                                )
                                                .otherwise(() => null)
                                        }),
                                        eM
                                            ? (0, r.jsx)('div', {
                                                  className: ea.checkmarkWrapper,
                                                  children: (0, r.jsx)(h.sV5, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 38,
                                                      height: 38,
                                                      className: ea.checkmark
                                                  })
                                              })
                                            : null,
                                        (0, r.jsxs)('div', {
                                            className: a()(ea.cardText, eP ? ea.darkCardBackground : ea.lightCardBackground, { [ea.variantsGroup]: t.type === m.Z.VARIANTS_GROUP }),
                                            children: [
                                                (0, r.jsx)(h.Text, {
                                                    variant: 'text-lg/bold',
                                                    className: ea.productName,
                                                    children: eE
                                                }),
                                                t.type === m.Z.VARIANTS_GROUP
                                                    ? (0, r.jsx)(z.P, {
                                                          variantGroupProduct: t,
                                                          previewingVariantIndexProps: eN,
                                                          setIsHoveringOnSwitch: eH,
                                                          purchases: ey,
                                                          minimal: !eb,
                                                          alternativeBackgroundColor: (null == eA ? void 0 : eA.type) === m.Z.PROFILE_EFFECT
                                                      })
                                                    : null,
                                                (0, r.jsxs)('div', {
                                                    className: ea.detailsWrapper,
                                                    children: [
                                                        (0, r.jsx)('div', {
                                                            className: eV ? ea.innerBlur : void 0,
                                                            children:
                                                                eM || eU
                                                                    ? (0, r.jsx)(B.U, {
                                                                          className: ea.priceTag,
                                                                          isPartiallyPurchased: eU
                                                                      })
                                                                    : ev
                                                                      ? (0, r.jsx)(h.Text, {
                                                                            variant: 'text-md/semibold',
                                                                            className: ea.priceTag,
                                                                            children: es.NW.string(es.t.rt69oq)
                                                                        })
                                                                      : ez
                                                                        ? (0, r.jsx)(H.Z, {
                                                                              displayPrices: e$,
                                                                              isPremiumUser: eC
                                                                          })
                                                                        : (0, r.jsx)(V.Z, {
                                                                              product: eL,
                                                                              discount: eO,
                                                                              isPremiumUser: eC,
                                                                              className: ea.priceTag,
                                                                              hideStrikethroughPrice: eq
                                                                          })
                                                        }),
                                                        (0, r.jsx)('div', {
                                                            className: ea.innerHover,
                                                            children: (() => {
                                                                var e;
                                                                if (ev && !eC && !eS) return e4();
                                                                let n = ez && (null === (e = e0[0]) || void 0 === e ? void 0 : e.currency) === ei.pK.DISCORD_ORB,
                                                                    i = ev
                                                                        ? {
                                                                              submitting: eT,
                                                                              submittingStartedLabel: es.NW.string(es.t['TYw+9v']),
                                                                              submittingFinishedLabel: es.NW.string(es.t.Pg1UPz),
                                                                              onClick: async () => {
                                                                                  await (0, I.fK)(t.skuId),
                                                                                      (0, et.Z)({
                                                                                          product: t,
                                                                                          analyticsLocations: en
                                                                                      });
                                                                              }
                                                                          }
                                                                        : {
                                                                              onClick: (e) => {
                                                                                  n
                                                                                      ? e8(e)
                                                                                      : (0, E.Z)({
                                                                                            skuId: (0, X.S)({
                                                                                                product: t,
                                                                                                selectedVariantIndex: eW
                                                                                            }),
                                                                                            analyticsLocations: en,
                                                                                            returnRef: ec,
                                                                                            variantsReturnStyle: ek
                                                                                        });
                                                                              }
                                                                          };
                                                                return (0, r.jsxs)('div', {
                                                                    className: ea.buttonsContainer,
                                                                    children: [
                                                                        eV
                                                                            ? eM
                                                                                ? (0, r.jsx)(ed, {
                                                                                      disabled: eI,
                                                                                      onClick: eJ,
                                                                                      submitting: eQ,
                                                                                      children: es.NW.string(es.t.MAS7uL)
                                                                                  })
                                                                                : (0, r.jsx)(
                                                                                      ed,
                                                                                      eo(el({ disabled: eI }, i), {
                                                                                          children: ev
                                                                                              ? es.NW.string(es.t.zp6caG)
                                                                                              : n
                                                                                                ? es.NW.format(es.t.kAgx5O, {
                                                                                                      orbPrice: e0[0].amount,
                                                                                                      orbIconHook: () => (0, r.jsx)(S.Z, {})
                                                                                                  })
                                                                                                : es.NW.formatToPlainString(es.t['cNSL/v'], { price: eB })
                                                                                      })
                                                                                  )
                                                                            : null,
                                                                        e9()
                                                                    ]
                                                                });
                                                            })()
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(M.Z, {
                                            category: s,
                                            className: ea.limitedTimeBadge,
                                            display: 'card'
                                        }),
                                        eU || eM || !eR
                                            ? e1
                                                ? (0, r.jsx)(h.IGR, {
                                                      text: es.NW.string(es.t.Q2K5pa),
                                                      disableColor: !0,
                                                      className: ea.badge
                                                  })
                                                : eD
                                                  ? (0, r.jsx)(h.IGR, {
                                                        text: es.NW.string(es.t.S6kE9v),
                                                        disableColor: !0,
                                                        className: ea.badge
                                                    })
                                                  : s.skuId === u.T.NAMEPLATE && eY
                                                    ? (0, r.jsx)(h.IGR, {
                                                          text: es.NW.string(es.t['soka7+']),
                                                          disableColor: !0,
                                                          className: ea.badge
                                                      })
                                                    : null
                                            : (0, r.jsx)(h.IGR, {
                                                  text: es.NW.string(es.t.y2b7CA),
                                                  disableColor: !0,
                                                  className: ea.badge
                                              })
                                    ]
                                })
                            })
                        });
              }
            : null;
