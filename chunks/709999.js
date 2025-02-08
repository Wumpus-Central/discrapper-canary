n.d(t, { Z: () => en }), n(47120), n(627341);
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
    f = n(727637),
    x = n(607070),
    _ = n(100527),
    b = n(906732),
    v = n(333867),
    k = n(197115),
    j = n(876917),
    L = n(210887),
    E = n(74538),
    S = n(335131),
    B = n(1870),
    T = n(429368),
    I = n(884697),
    y = n(664018),
    Z = n(228624),
    N = n(635552),
    F = n(905357),
    P = n(724994),
    w = n(297651),
    A = n(390698),
    O = n(813083),
    R = n(680942),
    H = n(558060),
    M = n(237031),
    V = n(453713),
    D = n(616066),
    W = n(216541),
    U = n(67409),
    G = n(58201),
    z = n(201964),
    q = n(361110),
    $ = n(832149),
    K = n(474936),
    Y = n(388032),
    J = n(176500);
let X = (e) => {
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
    Q = (e) => {
        let { className: t, ...n } = e;
        return (0, r.jsx)(g.zxk, {
            color: g.Ttl.BRAND,
            look: g.zxk.Looks.FILLED,
            size: g.PhG.ICON,
            className: a()(J.previewButton, t),
            innerClassName: J.previewButtonInner,
            'aria-label': Y.intl.string(Y.t.SKNnqq),
            ...n,
            children: (0, r.jsx)(g.tEF, {
                size: 'md',
                color: 'currentColor'
            })
        });
    },
    ee = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: l } = e;
        return (0, r.jsx)('div', {
            className: J.profileEffectShopPreview,
            children: (0, r.jsx)(j.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: l && !n,
                removeSetHeight: !0
            })
        });
    },
    et = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: l, user: i, item: s } = e;
        return (0, r.jsx)('div', {
            className: a()(J.avatarContainer, t && J.mysteryAvatarContainer),
            children: (0, r.jsx)(D.R, {
                item: s,
                user: i,
                isPurchased: l,
                isHighlighted: n
            })
        });
    },
    en = function (e) {
        let { product: t, user: n, category: i, onMount: s, isGiftEasterEggEnabled: j, isInFeedView: D } = e,
            { analyticsLocations: en } = (0, b.ZP)([...(D ? [_.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), _.Z.COLLECTIBLES_SHOP_CARD]),
            er = l.useRef(null),
            el = (0, f.Z)(er),
            [ei, ea] = l.useState(!1),
            es = el || ei,
            eo = (0, q.f)(t),
            { previewingVariantIndex: ed } = eo,
            ec = (0, F.T)(t),
            eu = (0, h.e7)([x.Z], () => x.Z.useReducedMotion),
            eC = E.ZP.canUseCollectibles(n),
            eh = l.useMemo(() => (0, I.BH)(t, eC), [t, eC]),
            ep = (0, I.G1)(t),
            em = (0, I.rN)(t),
            [eg, ef, ex] = (0, h.Wu)([B.Z], () => [B.Z.isClaiming === t.skuId, null != B.Z.isClaiming && B.Z.isClaiming !== t.skuId, B.Z.purchases]),
            e_ = (0, z.o)(t, ex, ed),
            eb = (0, h.e7)([L.Z], () => (0, m.wj)(L.Z.theme)),
            ev = (0, I.Yq)(t.skuId),
            { hoverVariant: ek } = (0, y.E)('CollectiblesShopTallCard'),
            ej = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
            eL = (0, Z.hv)('CollectiblesShopTallCard'),
            eE = (0, T.o)(t, ex),
            eS = (0, G.W)(t, eE),
            eB = (0, I.XM)(eS, eC, !1),
            { isPurchased: eT, isPartiallyOwnedBundle: eI } = (0, P.L)(eS),
            ey = null !== ed ? ed : eE,
            [eZ, eN] = l.useState(!1),
            { handleCardVisibilityChange: eF } = (0, w.E)(eS.skuId, D ? 'home' : 'full');
        l.useEffect(() => {
            let { current: e } = er;
            if (null == e) return;
            let t = () => ea(!0);
            return (
                e.addEventListener('focusin', t),
                e.blur(),
                () => {
                    e.removeEventListener('focusin', t);
                }
            );
        }, []),
            l.useEffect(() => {
                null == s || s(er);
            }, [s]);
        let eP = l.useRef(null),
            { handleUseNow: ew, isApplying: eA } = (0, N.W)({ product: eS }),
            eO = (e) => (n) => {
                (eP.current = n.currentTarget),
                    (0, M.T)({
                        product: t,
                        category: i,
                        analyticsLocations: en,
                        analyticsSource: e,
                        returnRef: eP
                    });
            },
            eR = eO(_.Z.COLLECTIBLES_SHOP_CARD),
            eH = eO(_.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
            eM = () =>
                (0, r.jsx)('div', {
                    className: J.hoverUpsellContainer,
                    children: (0, r.jsx)(k.Z, {
                        fullWidth: !0,
                        className: J.__invalid_premiumSubscribeButton,
                        disabled: ef,
                        onClick: (e) => e.stopPropagation(),
                        buttonText: Y.intl.string(Y.t.sEAnVF),
                        subscriptionTier: K.Si.TIER_2
                    })
                }),
            eV = () =>
                ep || c.tq
                    ? null
                    : em
                      ? (0, r.jsx)(Q, { onClick: eH })
                      : (0, r.jsx)(R.Z, {
                            product: t,
                            selectedVariantIndex: eE,
                            returnRef: er,
                            isGiftEasterEggEnabled: j,
                            disableCustomColor: !0,
                            tooltipDelay: 250
                        });
        return (0, I.x6)(t) && null != eh && eh.discountPercentage < 0
            ? null
            : (0, r.jsx)(p.$, {
                  onChange: eF,
                  threshold: 0,
                  children: (0, r.jsx)(g.tEY, {
                      children: (0, r.jsxs)(g.kL8, {
                          className: a()(eb ? J.shopCardDark : J.shopCard, {
                              [J.partiallyOwned]: eI && !es,
                              [J.shopCardAnimation]: !eu && ek !== y.D.NO_MOVEMENT,
                              [eb ? J.shopCardDarkHighlighted : J.shopCardHighlighted]: es,
                              [J.mysteryShopCard]: ej
                          }),
                          ref: er,
                          onBlur: () => ea(!1),
                          onClick: eR,
                          'aria-label': t.name,
                          children: [
                              ep &&
                                  (0, r.jsx)(g.ua7, {
                                      tooltipContentClassName: J.premiumWheelTooltipContent,
                                      color: g.ua7.Colors.PRIMARY,
                                      text: Y.intl.string(Y.t.O2K0xM),
                                      children: (e) =>
                                          (0, r.jsx)(g.IGR, {
                                              ...e,
                                              className: J.premiumWheelBadge,
                                              text: (0, r.jsx)(g.SrA, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: J.premiumWheel
                                              })
                                          })
                                  }),
                              (0, r.jsx)('div', {
                                  className: J.preview,
                                  children: (0, d.EQ)(t.type)
                                      .with(C.Z.PROFILE_EFFECT, () =>
                                          (0, r.jsx)(ee, {
                                              isHighlighted: es,
                                              profileEffectId: e_.id,
                                              isPurchased: eT
                                          })
                                      )
                                      .with(
                                          C.Z.AVATAR_DECORATION,
                                          () => (
                                              o()(e_.type === C.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                              (0, r.jsx)(et, {
                                                  item: e_,
                                                  user: n,
                                                  isStormMysteryItem: ej,
                                                  isHighlighted: es,
                                                  isPurchased: eT
                                              })
                                          )
                                      )
                                      .with(C.Z.BUNDLE, () =>
                                          (0, r.jsx)(W.d, {
                                              product: t,
                                              user: n,
                                              isPurchased: eT,
                                              isHighlighted: es
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
                                                        return (0, r.jsx)(ee, {
                                                            isHighlighted: es,
                                                            profileEffectId: t.id,
                                                            isPurchased: eT && !eZ
                                                        });
                                                    })
                                                    .with(C.Z.AVATAR_DECORATION, () => {
                                                        let [t] = e.items;
                                                        return (
                                                            o()(t.type === C.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                            (0, r.jsx)(et, {
                                                                item: t,
                                                                user: n,
                                                                isStormMysteryItem: ej,
                                                                isHighlighted: es,
                                                                isPurchased: eT
                                                            })
                                                        );
                                                    })
                                                    .otherwise(() => null);
                                      })
                                      .otherwise(() => null)
                              }),
                              eT
                                  ? (0, r.jsx)('div', {
                                        className: J.checkmarkWrapper,
                                        children: (0, r.jsx)(g.sV5, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 38,
                                            height: 38,
                                            className: J.checkmark
                                        })
                                    })
                                  : null,
                              (0, r.jsxs)('div', {
                                  className: a()(J.cardText, eb ? J.darkCardBackground : J.lightCardBackground, { [J.variantsGroup]: t.type === C.Z.VARIANTS_GROUP }),
                                  children: [
                                      (0, r.jsx)(g.Text, {
                                          variant: 'text-lg/bold',
                                          className: J.productName,
                                          children: ec
                                      }),
                                      t.type === C.Z.VARIANTS_GROUP
                                          ? (0, r.jsx)(V.P, {
                                                variantGroupProduct: t,
                                                previewingVariantIndexProps: eo,
                                                setIsHoveringOnSwitch: eN,
                                                purchases: ex,
                                                minimal: !es,
                                                alternativeBackgroundColor: (null == e_ ? void 0 : e_.type) === C.Z.PROFILE_EFFECT
                                            })
                                          : null,
                                      (0, r.jsxs)('div', {
                                          className: J.detailsWrapper,
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: eI ? void 0 : J.innerBlur,
                                                  children:
                                                      eT || eI
                                                          ? (0, r.jsx)(A.U, {
                                                                className: J.priceTag,
                                                                isPartiallyPurchased: eI
                                                            })
                                                          : ep
                                                            ? (0, r.jsx)(g.Text, {
                                                                  variant: 'text-md/semibold',
                                                                  className: J.priceTag,
                                                                  children: Y.intl.string(Y.t.rt69oq)
                                                              })
                                                            : (0, r.jsx)(H.Z, {
                                                                  product: eS,
                                                                  discount: eh,
                                                                  isPremiumUser: eC,
                                                                  className: J.priceTag
                                                              })
                                              }),
                                              (0, r.jsx)('div', {
                                                  className: J.innerHover,
                                                  children: (() => {
                                                      if (ep && !eC && !em) return eM();
                                                      let e = ep
                                                          ? {
                                                                submitting: eg,
                                                                submittingStartedLabel: Y.intl.string(Y.t['TYw+9v']),
                                                                submittingFinishedLabel: Y.intl.string(Y.t.Pg1UPz),
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
                                                                            selectedVariantIndex: eE
                                                                        }),
                                                                        analyticsLocations: en,
                                                                        returnRef: er,
                                                                        variantsReturnStyle: eL
                                                                    })
                                                            };
                                                      return (0, r.jsxs)('div', {
                                                          className: J.buttonsContainer,
                                                          children: [
                                                              eI
                                                                  ? null
                                                                  : eT
                                                                    ? (0, r.jsx)(X, {
                                                                          disabled: ef,
                                                                          onClick: ew,
                                                                          submitting: eA,
                                                                          children: Y.intl.string(Y.t.MAS7uL)
                                                                      })
                                                                    : (0, r.jsx)(X, {
                                                                          disabled: ef,
                                                                          ...e,
                                                                          children: ep ? Y.intl.string(Y.t.zp6caG) : Y.intl.formatToPlainString(Y.t['cNSL/v'], { price: eB })
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
                              (0, r.jsx)(O.Z, {
                                  category: i,
                                  className: J.limitedTimeBadge,
                                  display: 'card'
                              }),
                              ev &&
                                  !eI &&
                                  !eT &&
                                  i.skuId !== u.T.ROBERT &&
                                  (0, r.jsx)(g.IGR, {
                                      text: Y.intl.string(Y.t.y2b7CA),
                                      disableColor: !0,
                                      className: J.newBadge
                                  })
                          ]
                      })
                  })
              });
    };
