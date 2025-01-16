n(47120), n(627341);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(512722),
    o = n.n(s),
    c = n(278074),
    d = n(873546),
    u = n(180650),
    m = n(979554),
    h = n(399606),
    g = n(622535),
    p = n(663002),
    f = n(481060),
    C = n(37234),
    b = n(727637),
    v = n(607070),
    x = n(100527),
    _ = n(906732),
    k = n(1585),
    I = n(333867),
    S = n(197115),
    E = n(300284),
    j = n(876917),
    T = n(642619),
    B = n(210887),
    N = n(74538),
    y = n(335131),
    L = n(1870),
    P = n(429368),
    Z = n(884697),
    O = n(664018),
    w = n(890249),
    A = n(228624),
    R = n(635552),
    F = n(905357),
    H = n(724994),
    D = n(297651),
    V = n(390698),
    M = n(813083),
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
        let { children: t, onClick: n, ...a } = e;
        return (0, r.jsx)(f.Button, {
            fullWidth: !0,
            look: f.Button.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), n();
            },
            ...a,
            children: t
        });
    },
    ea = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(f.Button, {
            color: f.ButtonColors.BRAND,
            look: f.Button.Looks.FILLED,
            size: f.ButtonSizes.ICON,
            className: l()(en.previewButton, t),
            innerClassName: en.previewButtonInner,
            'aria-label': et.intl.string(et.t.SKNnqq),
            ...n,
            children: (0, r.jsx)(f.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    },
    ei = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: a } = e;
        return (0, r.jsx)('div', {
            className: en.profileEffectShopPreview,
            children: (0, r.jsx)(j.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: a && !n,
                removeSetHeight: !0
            })
        });
    },
    el = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: a, user: i, item: s } = e;
        return (0, r.jsx)('div', {
            className: l()(en.avatarContainer, t && en.mysteryAvatarContainer),
            children: (0, r.jsx)($.R, {
                item: s,
                user: i,
                isPurchased: a,
                isHighlighted: n
            })
        });
    };
t.Z = function (e) {
    let { product: t, user: n, category: i, onMount: s, isGiftEasterEggEnabled: j, isInFeedView: $ } = e,
        { analyticsLocations: es } = (0, _.ZP)([...($ ? [x.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), x.Z.COLLECTIBLES_SHOP_CARD]),
        eo = a.useRef(null),
        ec = (0, b.Z)(eo),
        [ed, eu] = a.useState(!1),
        em = ec || ed,
        eh = (0, Q.f)(t),
        { previewingVariantIndex: eg } = eh,
        ep = (0, F.T)(t),
        ef = (0, h.e7)([v.Z], () => v.Z.useReducedMotion),
        eC = N.ZP.canUseCollectibles(n),
        eb = a.useMemo(() => (0, Z.BH)(t, eC), [t, eC]),
        ev = (0, Z.G1)(t),
        ex = (0, Z.rN)(t),
        [e_, ek, eI] = (0, h.Wu)([L.Z], () => [L.Z.isClaiming === t.skuId, null != L.Z.isClaiming && L.Z.isClaiming !== t.skuId, L.Z.purchases]),
        eS = (0, Y.o)(t, eI, eg),
        eE = (0, h.e7)([B.Z], () => (0, p.wj)(B.Z.theme)),
        ej = (0, w.m)('CollectiblesCollectedModal'),
        eT = (0, Z.x6)(t) || ej,
        eB = (0, Z.Yq)(t.skuId),
        { hoverVariant: eN } = (0, O.E)('CollectiblesShopTallCard'),
        ey = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
        eL = (0, A.hv)('CollectiblesShopTallCard'),
        eP = (0, P.o)(t, eI),
        eZ = (0, J.W)(t, eP),
        eO = (0, Z.XM)(eZ, eC, !1),
        { isPurchased: ew, isPartiallyOwnedBundle: eA } = (0, H.L)(eZ),
        eR = null !== eg ? eg : eP,
        [eF, eH] = a.useState(!1),
        { handleCardVisibilityChange: eD } = (0, D.E)(eZ.skuId, $ ? 'home' : 'full');
    a.useEffect(() => {
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
        a.useEffect(() => {
            null == s || s(eo);
        }, [s]);
    let eV = (0, E.Z)({ analyticsLocations: es }),
        eM = a.useRef(null),
        { handleUseNow: eW, isApplying: eU } = (0, R.W)({ product: eZ }),
        eG = () => {
            if (((0, C.xf)(), eV(), t.type === m.Z.AVATAR_DECORATION && null != eS)) {
                o()(eS.type === t.type, "product type is equivlant to first item's check for avatar deco"),
                    (0, k.ps)({
                        initialSelectedDecoration: eS,
                        analyticsLocations: es
                    });
                return;
            }
            t.type === m.Z.PROFILE_EFFECT &&
                (0, T.H)({
                    initialSelectedEffectId: eS.id,
                    analyticsLocations: es
                });
        },
        ez = (e) => (n) => {
            (eM.current = n.currentTarget),
                (0, G.T)({
                    product: t,
                    category: i,
                    analyticsLocations: es,
                    analyticsSource: e,
                    returnRef: eM
                });
        },
        e$ = ez(x.Z.COLLECTIBLES_SHOP_CARD),
        eK = ez(x.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
        eq = () =>
            (0, r.jsx)('div', {
                className: en.hoverUpsellContainer,
                children: (0, r.jsx)(S.Z, {
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
                ? (0, r.jsx)(V.U, {
                      className: en.priceTag,
                      isPartiallyPurchased: eA
                  })
                : ev
                  ? (0, r.jsx)(f.Text, {
                        variant: 'text-md/semibold',
                        className: en.priceTag,
                        children: et.intl.string(et.t.rt69oq)
                    })
                  : (0, r.jsx)(U.Z, {
                        product: eZ,
                        discount: eb,
                        isPremiumUser: eC,
                        className: en.priceTag
                    }),
        eY = () =>
            ev || d.tq
                ? null
                : ex
                  ? (0, r.jsx)(ea, { onClick: eK })
                  : (0, r.jsx)(W.Z, {
                        product: t,
                        selectedVariantIndex: eP,
                        returnRef: eo,
                        isGiftEasterEggEnabled: j,
                        disableCustomColor: !0,
                        tooltipDelay: 250
                    }),
        eQ = () => {
            if (ev && !eC && !ex) return eq();
            let e = ev
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
                          (0, I.Z)({
                              skuId: (0, q.S)({
                                  product: t,
                                  selectedVariantIndex: eP
                              }),
                              analyticsLocations: es,
                              returnRef: eo,
                              variantsReturnStyle: eL
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
                                onClick: eT ? eW : eG,
                                submitting: eU,
                                children: et.intl.string(et.t.MAS7uL)
                            })
                          : (0, r.jsx)(er, {
                                disabled: ek,
                                ...e,
                                children: ev ? et.intl.string(et.t.zp6caG) : et.intl.formatToPlainString(et.t['cNSL/v'], { price: eO })
                            }),
                    eY()
                ]
            });
        };
    return (0, Z.x6)(t) && null != eb && eb.discountPercentage < 0
        ? null
        : (0, r.jsx)(g.$, {
              onChange: eD,
              threshold: 0,
              children: (0, r.jsx)(f.FocusRing, {
                  children: (0, r.jsxs)(f.Clickable, {
                      innerRef: eo,
                      className: l()(eE ? en.shopCardDark : en.shopCard, {
                          [en.partiallyOwned]: eA && !em,
                          [en.shopCardAnimation]: !ef && eN !== O.D.NO_MOVEMENT,
                          [eE ? en.shopCardDarkHighlighted : en.shopCardHighlighted]: em,
                          [en.mysteryShopCard]: ey
                      }),
                      onBlur: () => eu(!1),
                      onClick: e$,
                      id: 'shop-item-'.concat(t.skuId),
                      children: [
                          ev &&
                              (0, r.jsx)(f.Tooltip, {
                                  tooltipContentClassName: en.premiumWheelTooltipContent,
                                  color: f.Tooltip.Colors.PRIMARY,
                                  text: et.intl.string(et.t.O2K0xM),
                                  children: (e) =>
                                      (0, r.jsx)(f.TextBadge, {
                                          ...e,
                                          className: en.premiumWheelBadge,
                                          text: (0, r.jsx)(f.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: en.premiumWheel
                                          })
                                      })
                              }),
                          (0, r.jsx)('div', {
                              className: en.preview,
                              children: (0, c.EQ)(t.type)
                                  .with(m.Z.PROFILE_EFFECT, () =>
                                      (0, r.jsx)(ei, {
                                          isHighlighted: em,
                                          profileEffectId: eS.id,
                                          isPurchased: ew
                                      })
                                  )
                                  .with(
                                      m.Z.AVATAR_DECORATION,
                                      () => (
                                          o()(eS.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                          (0, r.jsx)(el, {
                                              item: eS,
                                              user: n,
                                              isStormMysteryItem: ey,
                                              isHighlighted: em,
                                              isPurchased: ew
                                          })
                                      )
                                  )
                                  .with(m.Z.BUNDLE, () =>
                                      (0, r.jsx)(K.d, {
                                          product: t,
                                          user: n,
                                          isPurchased: ew,
                                          isHighlighted: em
                                      })
                                  )
                                  .with(m.Z.VARIANTS_GROUP, () => {
                                      if (null == t.variants || 0 === t.variants.length) return null;
                                      let e = t.variants[eR];
                                      return null == e
                                          ? null
                                          : (0, c.EQ)(e.type)
                                                .with(m.Z.PROFILE_EFFECT, () => {
                                                    let [t] = e.items;
                                                    return (0, r.jsx)(ei, {
                                                        isHighlighted: em,
                                                        profileEffectId: t.id,
                                                        isPurchased: ew && !eF
                                                    });
                                                })
                                                .with(m.Z.AVATAR_DECORATION, () => {
                                                    let [t] = e.items;
                                                    return (
                                                        o()(t.type === m.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                        (0, r.jsx)(el, {
                                                            item: t,
                                                            user: n,
                                                            isStormMysteryItem: ey,
                                                            isHighlighted: em,
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
                                    children: (0, r.jsx)(f.CheckmarkLargeBoldIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 38,
                                        height: 38,
                                        className: en.checkmark
                                    })
                                })
                              : null,
                          (0, r.jsxs)('div', {
                              className: l()(en.cardText, eE ? en.darkCardBackground : en.lightCardBackground, { [en.variantsGroup]: t.type === m.Z.VARIANTS_GROUP }),
                              children: [
                                  (0, r.jsx)(f.Text, {
                                      variant: 'text-lg/bold',
                                      className: en.productName,
                                      children: ep
                                  }),
                                  t.type === m.Z.VARIANTS_GROUP
                                      ? (0, r.jsx)(z.P, {
                                            variantGroupProduct: t,
                                            previewingVariantIndexProps: eh,
                                            setIsHoveringOnSwitch: eH,
                                            purchases: eI,
                                            minimal: !em,
                                            alternativeBackgroundColor: (null == eS ? void 0 : eS.type) === m.Z.PROFILE_EFFECT
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
                          (0, r.jsx)(M.Z, {
                              category: i,
                              className: en.limitedTimeBadge,
                              display: 'card'
                          }),
                          eB &&
                              !eA &&
                              !ew &&
                              i.skuId !== u.T.ROBERT &&
                              (0, r.jsx)(f.TextBadge, {
                                  text: et.intl.string(et.t.y2b7CA),
                                  disableColor: !0,
                                  className: en.newBadge
                              })
                      ]
                  })
              })
          });
};
