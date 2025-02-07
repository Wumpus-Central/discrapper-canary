n.d(t, { Z: () => es }), n(47120), n(627341);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(512722),
    o = n.n(s),
    d = n(278074),
    c = n(873546),
    u = n(180650),
    C = n(979554),
    h = n(399606),
    p = n(622535),
    m = n(663002),
    g = n(481060),
    f = n(37234),
    x = n(727637),
    _ = n(607070),
    b = n(100527),
    v = n(906732),
    k = n(1585),
    j = n(333867),
    E = n(197115),
    L = n(300284),
    S = n(876917),
    B = n(642619),
    T = n(210887),
    I = n(74538),
    y = n(335131),
    Z = n(1870),
    F = n(429368),
    N = n(884697),
    w = n(664018),
    P = n(890249),
    A = n(228624),
    O = n(635552),
    R = n(905357),
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
        return (0, r.jsx)(g.zxk, {
            fullWidth: !0,
            look: g.zxk.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), n();
            },
            ...l,
            children: t
        });
    },
    el = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(g.zxk, {
            color: g.Ttl.BRAND,
            look: g.zxk.Looks.FILLED,
            size: g.PhG.ICON,
            className: a()(en.previewButton, t),
            innerClassName: en.previewButtonInner,
            'aria-label': et.intl.string(et.t.SKNnqq),
            ...n,
            children: (0, r.jsx)(g.tEF, {
                size: 'md',
                color: 'currentColor'
            })
        });
    },
    ei = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: l } = e;
        return (0, r.jsx)('div', {
            className: en.profileEffectShopPreview,
            children: (0, r.jsx)(S.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: l && !n,
                removeSetHeight: !0
            })
        });
    },
    ea = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: l, user: i, item: s } = e;
        return (0, r.jsx)('div', {
            className: a()(en.avatarContainer, t && en.mysteryAvatarContainer),
            children: (0, r.jsx)(q.R, {
                item: s,
                user: i,
                isPurchased: l,
                isHighlighted: n
            })
        });
    },
    es = function (e) {
        let { product: t, user: n, category: i, onMount: s, isGiftEasterEggEnabled: S, isInFeedView: q } = e,
            { analyticsLocations: es } = (0, v.ZP)([...(q ? [b.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), b.Z.COLLECTIBLES_SHOP_CARD]),
            eo = l.useRef(null),
            ed = (0, x.Z)(eo),
            [ec, eu] = l.useState(!1),
            eC = ed || ec,
            eh = (0, X.f)(t),
            { previewingVariantIndex: ep } = eh,
            em = (0, R.T)(t),
            eg = (0, h.e7)([_.Z], () => _.Z.useReducedMotion),
            ef = I.ZP.canUseCollectibles(n),
            ex = l.useMemo(() => (0, N.BH)(t, ef), [t, ef]),
            e_ = (0, N.G1)(t),
            eb = (0, N.rN)(t),
            [ev, ek, ej] = (0, h.Wu)([Z.Z], () => [Z.Z.isClaiming === t.skuId, null != Z.Z.isClaiming && Z.Z.isClaiming !== t.skuId, Z.Z.purchases]),
            eE = (0, J.o)(t, ej, ep),
            eL = (0, h.e7)([T.Z], () => (0, m.wj)(T.Z.theme)),
            eS = (0, P.m)('CollectiblesCollectedModal'),
            eB = (0, N.x6)(t) || eS,
            eT = (0, N.Yq)(t.skuId),
            { hoverVariant: eI } = (0, w.E)('CollectiblesShopTallCard'),
            ey = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
            eZ = (0, A.hv)('CollectiblesShopTallCard'),
            eF = (0, F.o)(t, ej),
            eN = (0, Y.W)(t, eF),
            ew = (0, N.XM)(eN, ef, !1),
            { isPurchased: eP, isPartiallyOwnedBundle: eA } = (0, H.L)(eN),
            eO = null !== ep ? ep : eF,
            [eR, eH] = l.useState(!1),
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
                null == s || s(eo);
            }, [s]);
        let eV = (0, L.Z)({ analyticsLocations: es }),
            eD = l.useRef(null),
            { handleUseNow: eW, isApplying: eU } = (0, O.W)({ product: eN }),
            eG = () => {
                if (((0, f.xf)(), eV(), t.type === C.Z.AVATAR_DECORATION && null != eE)) {
                    o()(eE.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                        (0, k.ps)({
                            initialSelectedDecoration: eE,
                            analyticsLocations: es
                        });
                    return;
                }
                t.type === C.Z.PROFILE_EFFECT &&
                    (0, B.H)({
                        initialSelectedEffectId: eE.id,
                        analyticsLocations: es
                    });
            },
            ez = (e) => (n) => {
                (eD.current = n.currentTarget),
                    (0, G.T)({
                        product: t,
                        category: i,
                        analyticsLocations: es,
                        analyticsSource: e,
                        returnRef: eD
                    });
            },
            eq = ez(b.Z.COLLECTIBLES_SHOP_CARD),
            e$ = ez(b.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
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
                    : eb
                      ? (0, r.jsx)(el, { onClick: e$ })
                      : (0, r.jsx)(W.Z, {
                            product: t,
                            selectedVariantIndex: eF,
                            returnRef: eo,
                            isGiftEasterEggEnabled: S,
                            disableCustomColor: !0,
                            tooltipDelay: 250
                        });
        return (0, N.x6)(t) && null != ex && ex.discountPercentage < 0
            ? null
            : (0, r.jsx)(p.$, {
                  onChange: eM,
                  threshold: 0,
                  children: (0, r.jsx)(g.tEY, {
                      children: (0, r.jsxs)(g.kL8, {
                          className: a()(eL ? en.shopCardDark : en.shopCard, {
                              [en.partiallyOwned]: eA && !eC,
                              [en.shopCardAnimation]: !eg && eI !== w.D.NO_MOVEMENT,
                              [eL ? en.shopCardDarkHighlighted : en.shopCardHighlighted]: eC,
                              [en.mysteryShopCard]: ey
                          }),
                          ref: eo,
                          onBlur: () => eu(!1),
                          onClick: eq,
                          'aria-label': t.name,
                          children: [
                              e_ &&
                                  (0, r.jsx)(g.ua7, {
                                      tooltipContentClassName: en.premiumWheelTooltipContent,
                                      color: g.ua7.Colors.PRIMARY,
                                      text: et.intl.string(et.t.O2K0xM),
                                      children: (e) =>
                                          (0, r.jsx)(g.IGR, {
                                              ...e,
                                              className: en.premiumWheelBadge,
                                              text: (0, r.jsx)(g.SrA, {
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
                                              isPurchased: eP
                                          })
                                      )
                                      .with(
                                          C.Z.AVATAR_DECORATION,
                                          () => (
                                              o()(eE.type === C.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                              (0, r.jsx)(ea, {
                                                  item: eE,
                                                  user: n,
                                                  isStormMysteryItem: ey,
                                                  isHighlighted: eC,
                                                  isPurchased: eP
                                              })
                                          )
                                      )
                                      .with(C.Z.BUNDLE, () =>
                                          (0, r.jsx)($.d, {
                                              product: t,
                                              user: n,
                                              isPurchased: eP,
                                              isHighlighted: eC
                                          })
                                      )
                                      .with(C.Z.VARIANTS_GROUP, () => {
                                          if (null == t.variants || 0 === t.variants.length) return null;
                                          let e = t.variants[eO];
                                          return null == e
                                              ? null
                                              : (0, d.EQ)(e.type)
                                                    .with(C.Z.PROFILE_EFFECT, () => {
                                                        let [t] = e.items;
                                                        return (0, r.jsx)(ei, {
                                                            isHighlighted: eC,
                                                            profileEffectId: t.id,
                                                            isPurchased: eP && !eR
                                                        });
                                                    })
                                                    .with(C.Z.AVATAR_DECORATION, () => {
                                                        let [t] = e.items;
                                                        return (
                                                            o()(t.type === C.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                            (0, r.jsx)(ea, {
                                                                item: t,
                                                                user: n,
                                                                isStormMysteryItem: ey,
                                                                isHighlighted: eC,
                                                                isPurchased: eP
                                                            })
                                                        );
                                                    })
                                                    .otherwise(() => null);
                                      })
                                      .otherwise(() => null)
                              }),
                              eP
                                  ? (0, r.jsx)('div', {
                                        className: en.checkmarkWrapper,
                                        children: (0, r.jsx)(g.sV5, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 38,
                                            height: 38,
                                            className: en.checkmark
                                        })
                                    })
                                  : null,
                              (0, r.jsxs)('div', {
                                  className: a()(en.cardText, eL ? en.darkCardBackground : en.lightCardBackground, { [en.variantsGroup]: t.type === C.Z.VARIANTS_GROUP }),
                                  children: [
                                      (0, r.jsx)(g.Text, {
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
                                                  className: eA ? void 0 : en.innerBlur,
                                                  children:
                                                      eP || eA
                                                          ? (0, r.jsx)(V.U, {
                                                                className: en.priceTag,
                                                                isPartiallyPurchased: eA
                                                            })
                                                          : e_
                                                            ? (0, r.jsx)(g.Text, {
                                                                  variant: 'text-md/semibold',
                                                                  className: en.priceTag,
                                                                  children: et.intl.string(et.t.rt69oq)
                                                              })
                                                            : (0, r.jsx)(U.Z, {
                                                                  product: eN,
                                                                  discount: ex,
                                                                  isPremiumUser: ef,
                                                                  className: en.priceTag
                                                              })
                                              }),
                                              (0, r.jsx)('div', {
                                                  className: en.innerHover,
                                                  children: (() => {
                                                      if (e_ && !ef && !eb) return eK();
                                                      let e = e_
                                                          ? {
                                                                submitting: ev,
                                                                submittingStartedLabel: et.intl.string(et.t['TYw+9v']),
                                                                submittingFinishedLabel: et.intl.string(et.t.Pg1UPz),
                                                                onClick: async () => {
                                                                    await (0, y.fK)(t.skuId),
                                                                        (0, Q.Z)({
                                                                            product: t,
                                                                            analyticsLocations: es
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
                                                                        analyticsLocations: es,
                                                                        returnRef: eo,
                                                                        variantsReturnStyle: eZ
                                                                    })
                                                            };
                                                      return (0, r.jsxs)('div', {
                                                          className: en.buttonsContainer,
                                                          children: [
                                                              eA
                                                                  ? null
                                                                  : eP
                                                                    ? (0, r.jsx)(er, {
                                                                          disabled: ek,
                                                                          onClick: eB ? eW : eG,
                                                                          submitting: eU,
                                                                          children: et.intl.string(et.t.MAS7uL)
                                                                      })
                                                                    : (0, r.jsx)(er, {
                                                                          disabled: ek,
                                                                          ...e,
                                                                          children: e_ ? et.intl.string(et.t.zp6caG) : et.intl.formatToPlainString(et.t['cNSL/v'], { price: ew })
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
                                  !eA &&
                                  !eP &&
                                  i.skuId !== u.T.ROBERT &&
                                  (0, r.jsx)(g.IGR, {
                                      text: et.intl.string(et.t.y2b7CA),
                                      disableColor: !0,
                                      className: en.newBadge
                                  })
                          ]
                      })
                  })
              });
    };
