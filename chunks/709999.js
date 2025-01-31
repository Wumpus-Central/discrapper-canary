n.d(t, { Z: () => ea }), n(47120), n(627341);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(512722),
    o = n.n(a),
    d = n(278074),
    c = n(873546),
    u = n(180650),
    C = n(979554),
    h = n(399606),
    p = n(622535),
    m = n(663002),
    f = n(481060),
    g = n(37234),
    x = n(727637),
    _ = n(607070),
    v = n(100527),
    b = n(906732),
    k = n(1585),
    j = n(333867),
    E = n(197115),
    L = n(300284),
    I = n(876917),
    S = n(642619),
    T = n(210887),
    Z = n(74538),
    y = n(335131),
    B = n(1870),
    F = n(429368),
    N = n(884697),
    P = n(664018),
    w = n(890249),
    O = n(228624),
    R = n(635552),
    A = n(905357),
    H = n(724994),
    M = n(297651),
    V = n(390698),
    D = n(813083),
    W = n(680942),
    U = n(558060),
    G = n(237031),
    z = n(453713),
    q = n(616066),
    $ = n(216541),
    K = n(67409),
    Y = n(58201),
    J = n(201964),
    X = n(361110),
    Q = n(832149),
    ee = n(474936),
    et = n(388032),
    en = n(176500);
let er = (e) => {
        let { children: t, onClick: n, ...l } = e;
        return (0, r.jsx)(f.zxk, {
            fullWidth: !0,
            look: f.zxk.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), n();
            },
            ...l,
            children: t
        });
    },
    el = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(f.zxk, {
            color: f.Ttl.BRAND,
            look: f.zxk.Looks.FILLED,
            size: f.PhG.ICON,
            className: s()(en.previewButton, t),
            innerClassName: en.previewButtonInner,
            'aria-label': et.intl.string(et.t.SKNnqq),
            ...n,
            children: (0, r.jsx)(f.tEF, {
                size: 'md',
                color: 'currentColor'
            })
        });
    },
    ei = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: l } = e;
        return (0, r.jsx)('div', {
            className: en.profileEffectShopPreview,
            children: (0, r.jsx)(I.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: l && !n,
                removeSetHeight: !0
            })
        });
    },
    es = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: l, user: i, item: a } = e;
        return (0, r.jsx)('div', {
            className: s()(en.avatarContainer, t && en.mysteryAvatarContainer),
            children: (0, r.jsx)(q.R, {
                item: a,
                user: i,
                isPurchased: l,
                isHighlighted: n
            })
        });
    },
    ea = function (e) {
        let { product: t, user: n, category: i, onMount: a, isGiftEasterEggEnabled: I, isInFeedView: q } = e,
            { analyticsLocations: ea } = (0, b.ZP)([...(q ? [v.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), v.Z.COLLECTIBLES_SHOP_CARD]),
            eo = l.useRef(null),
            ed = (0, x.Z)(eo),
            [ec, eu] = l.useState(!1),
            eC = ed || ec,
            eh = (0, X.f)(t),
            { previewingVariantIndex: ep } = eh,
            em = (0, A.T)(t),
            ef = (0, h.e7)([_.Z], () => _.Z.useReducedMotion),
            eg = Z.ZP.canUseCollectibles(n),
            ex = l.useMemo(() => (0, N.BH)(t, eg), [t, eg]),
            e_ = (0, N.G1)(t),
            ev = (0, N.rN)(t),
            [eb, ek, ej] = (0, h.Wu)([B.Z], () => [B.Z.isClaiming === t.skuId, null != B.Z.isClaiming && B.Z.isClaiming !== t.skuId, B.Z.purchases]),
            eE = (0, J.o)(t, ej, ep),
            eL = (0, h.e7)([T.Z], () => (0, m.wj)(T.Z.theme)),
            eI = (0, w.m)('CollectiblesCollectedModal'),
            eS = (0, N.x6)(t) || eI,
            eT = (0, N.Yq)(t.skuId),
            { hoverVariant: eZ } = (0, P.E)('CollectiblesShopTallCard'),
            ey = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
            eB = (0, O.hv)('CollectiblesShopTallCard'),
            eF = (0, F.o)(t, ej),
            eN = (0, Y.W)(t, eF),
            eP = (0, N.XM)(eN, eg, !1),
            { isPurchased: ew, isPartiallyOwnedBundle: eO } = (0, H.L)(eN),
            eR = null !== ep ? ep : eF,
            [eA, eH] = l.useState(!1),
            { handleCardVisibilityChange: eM } = (0, M.E)(eN.skuId, q ? 'home' : 'full');
        l.useEffect(() => {
            let { current: e } = eo;
            if (null == e) return;
            let t = () => eu(!0);
            return (
                e.addEventListener('focusin', t),
                e.blur(),
                () => {
                    e.removeEventListener('focusin', t);
                }
            );
        }, []),
            l.useEffect(() => {
                null == a || a(eo);
            }, [a]);
        let eV = (0, L.Z)({ analyticsLocations: ea }),
            eD = l.useRef(null),
            { handleUseNow: eW, isApplying: eU } = (0, R.W)({ product: eN }),
            eG = () => {
                if (((0, g.xf)(), eV(), t.type === C.Z.AVATAR_DECORATION && null != eE)) {
                    o()(eE.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                        (0, k.ps)({
                            initialSelectedDecoration: eE,
                            analyticsLocations: ea
                        });
                    return;
                }
                t.type === C.Z.PROFILE_EFFECT &&
                    (0, S.H)({
                        initialSelectedEffectId: eE.id,
                        analyticsLocations: ea
                    });
            },
            ez = (e) => (n) => {
                (eD.current = n.currentTarget),
                    (0, G.T)({
                        product: t,
                        category: i,
                        analyticsLocations: ea,
                        analyticsSource: e,
                        returnRef: eD
                    });
            },
            eq = ez(v.Z.COLLECTIBLES_SHOP_CARD),
            e$ = ez(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
            eK = () =>
                (0, r.jsx)('div', {
                    className: en.hoverUpsellContainer,
                    children: (0, r.jsx)(E.Z, {
                        fullWidth: !0,
                        className: en.__invalid_premiumSubscribeButton,
                        disabled: ek,
                        onClick: (e) => e.stopPropagation(),
                        buttonText: et.intl.string(et.t.sEAnVF),
                        subscriptionTier: ee.Si.TIER_2
                    })
                }),
            eY = () =>
                e_ || c.tq
                    ? null
                    : ev
                      ? (0, r.jsx)(el, { onClick: e$ })
                      : (0, r.jsx)(W.Z, {
                            product: t,
                            selectedVariantIndex: eF,
                            returnRef: eo,
                            isGiftEasterEggEnabled: I,
                            disableCustomColor: !0,
                            tooltipDelay: 250
                        });
        return (0, N.x6)(t) && null != ex && ex.discountPercentage < 0
            ? null
            : (0, r.jsx)(p.$, {
                  onChange: eM,
                  threshold: 0,
                  children: (0, r.jsx)(f.tEY, {
                      children: (0, r.jsxs)(f.kL8, {
                          className: s()(eL ? en.shopCardDark : en.shopCard, {
                              [en.partiallyOwned]: eO && !eC,
                              [en.shopCardAnimation]: !ef && eZ !== P.D.NO_MOVEMENT,
                              [eL ? en.shopCardDarkHighlighted : en.shopCardHighlighted]: eC,
                              [en.mysteryShopCard]: ey
                          }),
                          onBlur: () => eu(!1),
                          onClick: eq,
                          'aria-label': t.name,
                          children: [
                              e_ &&
                                  (0, r.jsx)(f.ua7, {
                                      tooltipContentClassName: en.premiumWheelTooltipContent,
                                      color: f.ua7.Colors.PRIMARY,
                                      text: et.intl.string(et.t.O2K0xM),
                                      children: (e) =>
                                          (0, r.jsx)(f.IGR, {
                                              ...e,
                                              className: en.premiumWheelBadge,
                                              text: (0, r.jsx)(f.SrA, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: en.premiumWheel
                                              })
                                          })
                                  }),
                              (0, r.jsx)('div', {
                                  className: en.preview,
                                  children: (0, d.EQ)(t.type)
                                      .with(C.Z.PROFILE_EFFECT, () =>
                                          (0, r.jsx)(ei, {
                                              isHighlighted: eC,
                                              profileEffectId: eE.id,
                                              isPurchased: ew
                                          })
                                      )
                                      .with(
                                          C.Z.AVATAR_DECORATION,
                                          () => (
                                              o()(eE.type === C.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                              (0, r.jsx)(es, {
                                                  item: eE,
                                                  user: n,
                                                  isStormMysteryItem: ey,
                                                  isHighlighted: eC,
                                                  isPurchased: ew
                                              })
                                          )
                                      )
                                      .with(C.Z.BUNDLE, () =>
                                          (0, r.jsx)($.d, {
                                              product: t,
                                              user: n,
                                              isPurchased: ew,
                                              isHighlighted: eC
                                          })
                                      )
                                      .with(C.Z.VARIANTS_GROUP, () => {
                                          if (null == t.variants || 0 === t.variants.length) return null;
                                          let e = t.variants[eR];
                                          return null == e
                                              ? null
                                              : (0, d.EQ)(e.type)
                                                    .with(C.Z.PROFILE_EFFECT, () => {
                                                        let [t] = e.items;
                                                        return (0, r.jsx)(ei, {
                                                            isHighlighted: eC,
                                                            profileEffectId: t.id,
                                                            isPurchased: ew && !eA
                                                        });
                                                    })
                                                    .with(C.Z.AVATAR_DECORATION, () => {
                                                        let [t] = e.items;
                                                        return (
                                                            o()(t.type === C.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                            (0, r.jsx)(es, {
                                                                item: t,
                                                                user: n,
                                                                isStormMysteryItem: ey,
                                                                isHighlighted: eC,
                                                                isPurchased: ew
                                                            })
                                                        );
                                                    })
                                                    .otherwise(() => null);
                                      })
                                      .otherwise(() => null)
                              }),
                              ew
                                  ? (0, r.jsx)('div', {
                                        className: en.checkmarkWrapper,
                                        children: (0, r.jsx)(f.sV5, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 38,
                                            height: 38,
                                            className: en.checkmark
                                        })
                                    })
                                  : null,
                              (0, r.jsxs)('div', {
                                  className: s()(en.cardText, eL ? en.darkCardBackground : en.lightCardBackground, { [en.variantsGroup]: t.type === C.Z.VARIANTS_GROUP }),
                                  children: [
                                      (0, r.jsx)(f.Text, {
                                          variant: 'text-lg/bold',
                                          className: en.productName,
                                          children: em
                                      }),
                                      t.type === C.Z.VARIANTS_GROUP
                                          ? (0, r.jsx)(z.P, {
                                                variantGroupProduct: t,
                                                previewingVariantIndexProps: eh,
                                                setIsHoveringOnSwitch: eH,
                                                purchases: ej,
                                                minimal: !eC,
                                                alternativeBackgroundColor: (null == eE ? void 0 : eE.type) === C.Z.PROFILE_EFFECT
                                            })
                                          : null,
                                      (0, r.jsxs)('div', {
                                          className: en.detailsWrapper,
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: eO ? void 0 : en.innerBlur,
                                                  children:
                                                      ew || eO
                                                          ? (0, r.jsx)(V.U, {
                                                                className: en.priceTag,
                                                                isPartiallyPurchased: eO
                                                            })
                                                          : e_
                                                            ? (0, r.jsx)(f.Text, {
                                                                  variant: 'text-md/semibold',
                                                                  className: en.priceTag,
                                                                  children: et.intl.string(et.t.rt69oq)
                                                              })
                                                            : (0, r.jsx)(U.Z, {
                                                                  product: eN,
                                                                  discount: ex,
                                                                  isPremiumUser: eg,
                                                                  className: en.priceTag
                                                              })
                                              }),
                                              (0, r.jsx)('div', {
                                                  className: en.innerHover,
                                                  children: (() => {
                                                      if (e_ && !eg && !ev) return eK();
                                                      let e = e_
                                                          ? {
                                                                submitting: eb,
                                                                submittingStartedLabel: et.intl.string(et.t['TYw+9v']),
                                                                submittingFinishedLabel: et.intl.string(et.t.Pg1UPz),
                                                                onClick: async () => {
                                                                    await (0, y.fK)(t.skuId),
                                                                        (0, Q.Z)({
                                                                            product: t,
                                                                            analyticsLocations: ea
                                                                        });
                                                                }
                                                            }
                                                          : {
                                                                onClick: () =>
                                                                    (0, j.Z)({
                                                                        skuId: (0, K.S)({
                                                                            product: t,
                                                                            selectedVariantIndex: eF
                                                                        }),
                                                                        analyticsLocations: ea,
                                                                        returnRef: eo,
                                                                        variantsReturnStyle: eB
                                                                    })
                                                            };
                                                      return (0, r.jsxs)('div', {
                                                          className: en.buttonsContainer,
                                                          children: [
                                                              eO
                                                                  ? null
                                                                  : ew
                                                                    ? (0, r.jsx)(er, {
                                                                          disabled: ek,
                                                                          onClick: eS ? eW : eG,
                                                                          submitting: eU,
                                                                          children: et.intl.string(et.t.MAS7uL)
                                                                      })
                                                                    : (0, r.jsx)(er, {
                                                                          disabled: ek,
                                                                          ...e,
                                                                          children: e_ ? et.intl.string(et.t.zp6caG) : et.intl.formatToPlainString(et.t['cNSL/v'], { price: eP })
                                                                      }),
                                                              eY()
                                                          ]
                                                      });
                                                  })()
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, r.jsx)(D.Z, {
                                  category: i,
                                  className: en.limitedTimeBadge,
                                  display: 'card'
                              }),
                              eT &&
                                  !eO &&
                                  !ew &&
                                  i.skuId !== u.T.ROBERT &&
                                  (0, r.jsx)(f.IGR, {
                                      text: et.intl.string(et.t.y2b7CA),
                                      disableColor: !0,
                                      className: en.newBadge
                                  })
                          ]
                      })
                  })
              });
    };
