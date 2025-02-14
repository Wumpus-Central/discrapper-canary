n.d(t, { Z: () => en }), n(47120), n(627341);
var l = n(200651),
    r = n(192379),
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
    g = n(727637),
    x = n(607070),
    b = n(100527),
    _ = n(906732),
    v = n(333867),
    j = n(197115),
    k = n(876917),
    E = n(210887),
    L = n(74538),
    S = n(335131),
    T = n(1870),
    B = n(429368),
    I = n(884697),
    y = n(664018),
    Z = n(228624),
    N = n(635552),
    F = n(905357),
    w = n(724994),
    P = n(297651),
    O = n(390698),
    A = n(813083),
    R = n(680942),
    H = n(558060),
    M = n(237031),
    V = n(453713),
    W = n(616066),
    D = n(216541),
    U = n(67409),
    G = n(58201),
    z = n(201964),
    q = n(361110),
    $ = n(832149),
    K = n(474936),
    J = n(388032),
    X = n(147961);
let Y = (e) => {
        let { children: t, onClick: n, ...r } = e;
        return (0, l.jsx)(f.zxk, {
            fullWidth: !0,
            look: f.zxk.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), n();
            },
            ...r,
            children: t
        });
    },
    Q = (e) => {
        let { className: t, ...n } = e;
        return (0, l.jsx)(f.zxk, {
            color: f.Ttl.BRAND,
            look: f.zxk.Looks.FILLED,
            size: f.PhG.ICON,
            className: s()(X.previewButton, t),
            innerClassName: X.previewButtonInner,
            'aria-label': J.intl.string(J.t.SKNnqq),
            ...n,
            children: (0, l.jsx)(f.tEF, {
                size: 'md',
                color: 'currentColor'
            })
        });
    },
    ee = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: r } = e;
        return (0, l.jsx)('div', {
            className: X.profileEffectShopPreview,
            children: (0, l.jsx)(k.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: r && !n,
                removeSetHeight: !0
            })
        });
    },
    et = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: r, user: i, item: a } = e;
        return (0, l.jsx)('div', {
            className: s()(X.avatarContainer, t && X.mysteryAvatarContainer),
            children: (0, l.jsx)(W.R, {
                item: a,
                user: i,
                isPurchased: r,
                isHighlighted: n
            })
        });
    },
    en = function (e) {
        let { product: t, user: n, category: i, onMount: a, isGiftEasterEggEnabled: k, isInFeedView: W } = e,
            { analyticsLocations: en } = (0, _.ZP)([...(W ? [b.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), b.Z.COLLECTIBLES_SHOP_CARD]),
            el = r.useRef(null),
            er = (0, g.Z)(el),
            [ei, es] = r.useState(!1),
            ea = er || ei,
            eo = (0, q.f)(t),
            { previewingVariantIndex: ed } = eo,
            ec = (0, F.T)(t),
            eu = (0, h.e7)([x.Z], () => x.Z.useReducedMotion),
            eC = L.ZP.canUseCollectibles(n),
            eh = r.useMemo(() => (0, I.BH)(t, eC), [t, eC]),
            ep = (0, I.G1)(t),
            em = (0, I.rN)(t),
            [ef, eg, ex] = (0, h.Wu)([T.Z], () => [T.Z.isClaiming === t.skuId, null != T.Z.isClaiming && T.Z.isClaiming !== t.skuId, T.Z.purchases]),
            eb = (0, z.o)(t, ex, ed),
            e_ = (0, h.e7)([E.Z], () => (0, m.wj)(E.Z.theme)),
            ev = (0, I.Yq)(t.skuId),
            { hoverVariant: ej } = (0, y.E)('CollectiblesShopTallCard'),
            ek = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
            eE = (0, Z.hv)('CollectiblesShopTallCard'),
            eL = (0, B.o)(t, ex),
            eS = (0, G.W)(t, eL),
            eT = (0, I.XM)(eS, eC, !1),
            { isPurchased: eB, isPartiallyOwnedBundle: eI } = (0, w.L)(eS),
            ey = null !== ed ? ed : eL,
            [eZ, eN] = r.useState(!1),
            { handleCardVisibilityChange: eF } = (0, P.E)(eS.skuId, W ? 'home' : 'full');
        r.useEffect(() => {
            let { current: e } = el;
            if (null == e) return;
            let t = () => es(!0),
                n = (t) => {
                    e.contains(t.relatedTarget) || es(!1);
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
            r.useEffect(() => {
                null == a || a(el);
            }, [a]);
        let ew = r.useRef(null),
            { handleUseNow: eP, isApplying: eO } = (0, N.W)({ product: eS }),
            eA = (e) => (n) => {
                (ew.current = n.currentTarget),
                    (0, M.T)({
                        product: t,
                        category: i,
                        analyticsLocations: en,
                        analyticsSource: e,
                        returnRef: ew
                    });
            },
            eR = eA(b.Z.COLLECTIBLES_SHOP_CARD),
            eH = eA(b.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
            eM = () =>
                (0, l.jsx)('div', {
                    className: X.hoverUpsellContainer,
                    children: (0, l.jsx)(j.Z, {
                        fullWidth: !0,
                        className: X.__invalid_premiumSubscribeButton,
                        disabled: eg,
                        onClick: (e) => e.stopPropagation(),
                        buttonText: J.intl.string(J.t.sEAnVF),
                        subscriptionTier: K.Si.TIER_2
                    })
                }),
            eV = () =>
                ep || c.tq
                    ? null
                    : em
                      ? (0, l.jsx)(Q, { onClick: eH })
                      : (0, l.jsx)(R.Z, {
                            product: t,
                            selectedVariantIndex: eL,
                            returnRef: el,
                            isGiftEasterEggEnabled: k,
                            disableCustomColor: !0,
                            tooltipDelay: 250
                        });
        return (0, I.x6)(t) && null != eh && eh.discountPercentage < 0
            ? null
            : (0, l.jsx)(p.$, {
                  onChange: eF,
                  threshold: 0,
                  children: (0, l.jsx)(f.tEY, {
                      children: (0, l.jsxs)(f.kL8, {
                          className: s()(e_ ? X.shopCardDark : X.shopCard, {
                              [X.partiallyOwned]: eI && !ea,
                              [X.shopCardAnimation]: !eu && ej !== y.D.NO_MOVEMENT,
                              [e_ ? X.shopCardDarkHighlighted : X.shopCardHighlighted]: ea,
                              [X.mysteryShopCard]: ek
                          }),
                          ref: el,
                          onClick: eR,
                          'aria-label': t.name,
                          children: [
                              ep &&
                                  (0, l.jsx)(f.ua7, {
                                      tooltipContentClassName: X.premiumWheelTooltipContent,
                                      color: f.ua7.Colors.PRIMARY,
                                      text: J.intl.string(J.t.O2K0xM),
                                      children: (e) =>
                                          (0, l.jsx)(f.IGR, {
                                              ...e,
                                              className: X.premiumWheelBadge,
                                              text: (0, l.jsx)(f.SrA, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: X.premiumWheel
                                              })
                                          })
                                  }),
                              (0, l.jsx)('div', {
                                  className: X.preview,
                                  children: (0, d.EQ)(t.type)
                                      .with(C.Z.PROFILE_EFFECT, () =>
                                          (0, l.jsx)(ee, {
                                              isHighlighted: ea,
                                              profileEffectId: eb.id,
                                              isPurchased: eB
                                          })
                                      )
                                      .with(
                                          C.Z.AVATAR_DECORATION,
                                          () => (
                                              o()(eb.type === C.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                              (0, l.jsx)(et, {
                                                  item: eb,
                                                  user: n,
                                                  isStormMysteryItem: ek,
                                                  isHighlighted: ea,
                                                  isPurchased: eB
                                              })
                                          )
                                      )
                                      .with(C.Z.BUNDLE, () =>
                                          (0, l.jsx)(D.d, {
                                              product: t,
                                              user: n,
                                              isPurchased: eB,
                                              isHighlighted: ea
                                          })
                                      )
                                      .with(C.Z.VARIANTS_GROUP, () => {
                                          if (null == t.variants || 0 === t.variants.length) return null;
                                          let e = t.variants[ey];
                                          return null == e
                                              ? null
                                              : (0, d.EQ)(e.type)
                                                    .with(C.Z.PROFILE_EFFECT, () => {
                                                        let [t] = e.items;
                                                        return (0, l.jsx)(ee, {
                                                            isHighlighted: ea,
                                                            profileEffectId: t.id,
                                                            isPurchased: eB && !eZ
                                                        });
                                                    })
                                                    .with(C.Z.AVATAR_DECORATION, () => {
                                                        let [t] = e.items;
                                                        return (
                                                            o()(t.type === C.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                            (0, l.jsx)(et, {
                                                                item: t,
                                                                user: n,
                                                                isStormMysteryItem: ek,
                                                                isHighlighted: ea,
                                                                isPurchased: eB
                                                            })
                                                        );
                                                    })
                                                    .otherwise(() => null);
                                      })
                                      .otherwise(() => null)
                              }),
                              eB
                                  ? (0, l.jsx)('div', {
                                        className: X.checkmarkWrapper,
                                        children: (0, l.jsx)(f.sV5, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 38,
                                            height: 38,
                                            className: X.checkmark
                                        })
                                    })
                                  : null,
                              (0, l.jsxs)('div', {
                                  className: s()(X.cardText, e_ ? X.darkCardBackground : X.lightCardBackground, { [X.variantsGroup]: t.type === C.Z.VARIANTS_GROUP }),
                                  children: [
                                      (0, l.jsx)(f.Text, {
                                          variant: 'text-lg/bold',
                                          className: X.productName,
                                          children: ec
                                      }),
                                      t.type === C.Z.VARIANTS_GROUP
                                          ? (0, l.jsx)(V.P, {
                                                variantGroupProduct: t,
                                                previewingVariantIndexProps: eo,
                                                setIsHoveringOnSwitch: eN,
                                                purchases: ex,
                                                minimal: !ea,
                                                alternativeBackgroundColor: (null == eb ? void 0 : eb.type) === C.Z.PROFILE_EFFECT
                                            })
                                          : null,
                                      (0, l.jsxs)('div', {
                                          className: X.detailsWrapper,
                                          children: [
                                              (0, l.jsx)('div', {
                                                  className: eI ? void 0 : X.innerBlur,
                                                  children:
                                                      eB || eI
                                                          ? (0, l.jsx)(O.U, {
                                                                className: X.priceTag,
                                                                isPartiallyPurchased: eI
                                                            })
                                                          : ep
                                                            ? (0, l.jsx)(f.Text, {
                                                                  variant: 'text-md/semibold',
                                                                  className: X.priceTag,
                                                                  children: J.intl.string(J.t.rt69oq)
                                                              })
                                                            : (0, l.jsx)(H.Z, {
                                                                  product: eS,
                                                                  discount: eh,
                                                                  isPremiumUser: eC,
                                                                  className: X.priceTag
                                                              })
                                              }),
                                              (0, l.jsx)('div', {
                                                  className: X.innerHover,
                                                  children: (() => {
                                                      if (ep && !eC && !em) return eM();
                                                      let e = ep
                                                          ? {
                                                                submitting: ef,
                                                                submittingStartedLabel: J.intl.string(J.t['TYw+9v']),
                                                                submittingFinishedLabel: J.intl.string(J.t.Pg1UPz),
                                                                onClick: async () => {
                                                                    await (0, S.fK)(t.skuId),
                                                                        (0, $.Z)({
                                                                            product: t,
                                                                            analyticsLocations: en
                                                                        });
                                                                }
                                                            }
                                                          : {
                                                                onClick: () =>
                                                                    (0, v.Z)({
                                                                        skuId: (0, U.S)({
                                                                            product: t,
                                                                            selectedVariantIndex: eL
                                                                        }),
                                                                        analyticsLocations: en,
                                                                        returnRef: el,
                                                                        variantsReturnStyle: eE
                                                                    })
                                                            };
                                                      return (0, l.jsxs)('div', {
                                                          className: X.buttonsContainer,
                                                          children: [
                                                              eI
                                                                  ? null
                                                                  : eB
                                                                    ? (0, l.jsx)(Y, {
                                                                          disabled: eg,
                                                                          onClick: eP,
                                                                          submitting: eO,
                                                                          children: J.intl.string(J.t.MAS7uL)
                                                                      })
                                                                    : (0, l.jsx)(Y, {
                                                                          disabled: eg,
                                                                          ...e,
                                                                          children: ep ? J.intl.string(J.t.zp6caG) : J.intl.formatToPlainString(J.t['cNSL/v'], { price: eT })
                                                                      }),
                                                              eV()
                                                          ]
                                                      });
                                                  })()
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, l.jsx)(A.Z, {
                                  category: i,
                                  className: X.limitedTimeBadge,
                                  display: 'card'
                              }),
                              ev &&
                                  !eI &&
                                  !eB &&
                                  i.skuId !== u.T.ROBERT &&
                                  (0, l.jsx)(f.IGR, {
                                      text: J.intl.string(J.t.y2b7CA),
                                      disableColor: !0,
                                      className: X.newBadge
                                  })
                          ]
                      })
                  })
              });
    };
