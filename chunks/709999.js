n(47120), n(627341);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(278074),
    d = n(873546),
    u = n(180650),
    C = n(979554),
    h = n(399606),
    p = n(622535),
    f = n(663002),
    m = n(481060),
    g = n(37234),
    b = n(727637),
    x = n(607070),
    v = n(100527),
    _ = n(906732),
    k = n(1585),
    j = n(333867),
    E = n(197115),
    L = n(300284),
    I = n(876917),
    S = n(642619),
    B = n(210887),
    T = n(74538),
    y = n(335131),
    Z = n(1870),
    N = n(429368),
    F = n(884697),
    P = n(664018),
    w = n(890249),
    A = n(228624),
    O = n(635552),
    R = n(905357),
    H = n(724994),
    M = n(297651),
    D = n(390698),
    V = n(813083),
    W = n(680942),
    U = n(558060),
    G = n(237031),
    z = n(453713),
    $ = n(616066),
    K = n(216541),
    q = n(67409),
    J = n(58201),
    Y = n(201964),
    Q = n(361110),
    X = n(832149),
    ee = n(474936),
    et = n(388032),
    en = n(176500);
let er = (e) => {
        let { children: t, onClick: n, ...i } = e;
        return (0, r.jsx)(m.Button, {
            fullWidth: !0,
            look: m.Button.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), n();
            },
            ...i,
            children: t
        });
    },
    ei = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(m.Button, {
            color: m.ButtonColors.BRAND,
            look: m.Button.Looks.FILLED,
            size: m.ButtonSizes.ICON,
            className: a()(en.previewButton, t),
            innerClassName: en.previewButtonInner,
            'aria-label': et.intl.string(et.t.SKNnqq),
            ...n,
            children: (0, r.jsx)(m.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    },
    el = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: i } = e;
        return (0, r.jsx)('div', {
            className: en.profileEffectShopPreview,
            children: (0, r.jsx)(I.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: i && !n,
                removeSetHeight: !0
            })
        });
    },
    ea = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: i, user: l, item: s } = e;
        return (0, r.jsx)('div', {
            className: a()(en.avatarContainer, t && en.mysteryAvatarContainer),
            children: (0, r.jsx)($.R, {
                item: s,
                user: l,
                isPurchased: i,
                isHighlighted: n
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: n, category: l, onMount: s, isGiftEasterEggEnabled: I, isInFeedView: $ } = e,
        { analyticsLocations: es } = (0, _.ZP)([...($ ? [v.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), v.Z.COLLECTIBLES_SHOP_CARD]),
        eo = i.useRef(null),
        ec = (0, b.Z)(eo),
        [ed, eu] = i.useState(!1),
        eC = ec || ed,
        eh = (0, Q.f)(t),
        { previewingVariantIndex: ep } = eh,
        ef = (0, R.T)(t),
        em = (0, h.e7)([x.Z], () => x.Z.useReducedMotion),
        eg = T.ZP.canUseCollectibles(n),
        eb = i.useMemo(() => (0, F.BH)(t, eg), [t, eg]),
        ex = (0, F.G1)(t),
        ev = (0, F.rN)(t),
        [e_, ek, ej] = (0, h.Wu)([Z.Z], () => [Z.Z.isClaiming === t.skuId, null != Z.Z.isClaiming && Z.Z.isClaiming !== t.skuId, Z.Z.purchases]),
        eE = (0, Y.o)(t, ej, ep),
        eL = (0, h.e7)([B.Z], () => (0, f.wj)(B.Z.theme)),
        eI = (0, w.m)('CollectiblesCollectedModal'),
        eS = (0, F.x6)(t) || eI,
        eB = (0, F.Yq)(t.skuId),
        { hoverVariant: eT } = (0, P.E)('CollectiblesShopTallCard'),
        ey = l.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
        eZ = (0, A.hv)('CollectiblesShopTallCard'),
        eN = (0, N.o)(t, ej),
        eF = (0, J.W)(t, eN),
        eP = (0, F.XM)(eF, eg, !1),
        { isPurchased: ew, isPartiallyOwnedBundle: eA } = (0, H.L)(eF),
        eO = null !== ep ? ep : eN,
        [eR, eH] = i.useState(!1),
        { handleCardVisibilityChange: eM } = (0, M.E)(eF.skuId, $ ? 'home' : 'full');
    i.useEffect(() => {
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
        i.useEffect(() => {
            null == s || s(eo);
        }, [s]);
    let eD = (0, L.Z)({ analyticsLocations: es }),
        eV = i.useRef(null),
        { handleUseNow: eW, isApplying: eU } = (0, O.W)({ product: eF }),
        eG = () => {
            if (((0, g.xf)(), eD(), t.type === C.Z.AVATAR_DECORATION && null != eE)) {
                o()(eE.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, k.ps)({
                        initialSelectedDecoration: eE,
                        analyticsLocations: es
                    });
                return;
            }
            t.type === C.Z.PROFILE_EFFECT &&
                (0, S.H)({
                    initialSelectedEffectId: eE.id,
                    analyticsLocations: es
                });
        },
        ez = (e) => (n) => {
            (eV.current = n.currentTarget),
                (0, G.T)({
                    product: t,
                    category: l,
                    analyticsLocations: es,
                    analyticsSource: e,
                    returnRef: eV
                });
        },
        e$ = ez(v.Z.COLLECTIBLES_SHOP_CARD),
        eK = ez(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        eq = () =>
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
        eJ = () =>
            ew || eA
                ? (0, r.jsx)(D.U, {
                      className: en.priceTag,
                      isPartiallyPurchased: eA
                  })
                : ex
                  ? (0, r.jsx)(m.Text, {
                        variant: 'text-md/semibold',
                        className: en.priceTag,
                        children: et.intl.string(et.t.rt69oq)
                    })
                  : (0, r.jsx)(U.Z, {
                        product: eF,
                        discount: eb,
                        isPremiumUser: eg,
                        className: en.priceTag
                    }),
        eY = () =>
            ex || d.tq
                ? null
                : ev
                  ? (0, r.jsx)(ei, { onClick: eK })
                  : (0, r.jsx)(W.Z, {
                        product: t,
                        selectedVariantIndex: eN,
                        returnRef: eo,
                        isGiftEasterEggEnabled: I,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        eQ = () => {
            if (ex && !eg && !ev) return eq();
            let e = ex
                ? {
                      submitting: e_,
                      submittingStartedLabel: et.intl.string(et.t['TYw+9v']),
                      submittingFinishedLabel: et.intl.string(et.t.Pg1UPz),
                      onClick: async () => {
                          await (0, y.fK)(t.skuId),
                              (0, X.Z)({
                                  product: t,
                                  analyticsLocations: es
                              });
                      }
                  }
                : {
                      onClick: () =>
                          (0, j.Z)({
                              skuId: (0, q.S)({
                                  product: t,
                                  selectedVariantIndex: eN
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
                                children: ex ? et.intl.string(et.t.zp6caG) : et.intl.formatToPlainString(et.t['cNSL/v'], { price: eP })
                            }),
                    eY()
                ]
            });
        };
    return (0, F.x6)(t) && null != eb && eb.discountPercentage < 0
        ? null
        : (0, r.jsx)(p.$, {
              onChange: eM,
              threshold: 0,
              children: (0, r.jsx)(m.FocusRing, {
                  children: (0, r.jsxs)(m.Clickable, {
                      innerRef: eo,
                      className: a()(eL ? en.shopCardDark : en.shopCard, {
                          [en.partiallyOwned]: eA && !eC,
                          [en.shopCardAnimation]: !em && eT !== P.D.NO_MOVEMENT,
                          [eL ? en.shopCardDarkHighlighted : en.shopCardHighlighted]: eC,
                          [en.mysteryShopCard]: ey
                      }),
                      onBlur: () => eu(!1),
                      onClick: e$,
                      id: 'shop-item-'.concat(t.skuId),
                      children: [
                          ex &&
                              (0, r.jsx)(m.Tooltip, {
                                  tooltipContentClassName: en.premiumWheelTooltipContent,
                                  color: m.Tooltip.Colors.PRIMARY,
                                  text: et.intl.string(et.t.O2K0xM),
                                  children: (e) =>
                                      (0, r.jsx)(m.TextBadge, {
                                          ...e,
                                          className: en.premiumWheelBadge,
                                          text: (0, r.jsx)(m.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: en.premiumWheel
                                          })
                                      })
                              }),
                          (0, r.jsx)('div', {
                              className: en.preview,
                              children: (0, c.EQ)(t.type)
                                  .with(C.Z.PROFILE_EFFECT, () =>
                                      (0, r.jsx)(el, {
                                          isHighlighted: eC,
                                          profileEffectId: eE.id,
                                          isPurchased: ew
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
                                              isPurchased: ew
                                          })
                                      )
                                  )
                                  .with(C.Z.BUNDLE, () =>
                                      (0, r.jsx)(K.d, {
                                          product: t,
                                          user: n,
                                          isPurchased: ew,
                                          isHighlighted: eC
                                      })
                                  )
                                  .with(C.Z.VARIANTS_GROUP, () => {
                                      if (null == t.variants || 0 === t.variants.length) return null;
                                      let e = t.variants[eO];
                                      return null == e
                                          ? null
                                          : (0, c.EQ)(e.type)
                                                .with(C.Z.PROFILE_EFFECT, () => {
                                                    let [t] = e.items;
                                                    return (0, r.jsx)(el, {
                                                        isHighlighted: eC,
                                                        profileEffectId: t.id,
                                                        isPurchased: ew && !eR
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
                                    children: (0, r.jsx)(m.CheckmarkLargeBoldIcon, {
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
                                  (0, r.jsx)(m.Text, {
                                      variant: 'text-lg/bold',
                                      className: en.productName,
                                      children: ef
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
                                              children: eJ()
                                          }),
                                          (0, r.jsx)('div', {
                                              className: en.innerHover,
                                              children: eQ()
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)(V.Z, {
                              category: l,
                              className: en.limitedTimeBadge,
                              display: 'card'
                          }),
                          eB &&
                              !eA &&
                              !ew &&
                              l.skuId !== u.T.ROBERT &&
                              (0, r.jsx)(m.TextBadge, {
                                  text: et.intl.string(et.t.y2b7CA),
                                  disableColor: !0,
                                  className: en.newBadge
                              })
                      ]
                  })
              })
          });
};
