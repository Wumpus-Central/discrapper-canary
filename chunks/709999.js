n.d(t, { Z: () => es }), n(47120), n(627341);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(512722),
    o = n.n(s),
    d = n(278074),
    c = n(873546),
    u = n(180650),
    C = n(979554),
    h = n(399606),
    m = n(622535),
    p = n(663002),
    g = n(481060),
    f = n(276264),
    x = n(727637),
    b = n(607070),
    v = n(100527),
    _ = n(906732),
    j = n(693728),
    k = n(333867),
    E = n(197115),
    L = n(876917),
    S = n(210887),
    T = n(74538),
    I = n(335131),
    B = n(1870),
    y = n(429368),
    Z = n(884697),
    N = n(664018),
    w = n(228624),
    P = n(635552),
    F = n(905357),
    O = n(724994),
    A = n(297651),
    R = n(390698),
    H = n(813083),
    M = n(680942),
    V = n(558060),
    D = n(237031),
    W = n(453713),
    U = n(616066),
    G = n(216541),
    z = n(67409),
    q = n(58201),
    $ = n(201964),
    K = n(361110),
    J = n(832149),
    X = n(474936),
    Y = n(388032),
    Q = n(147961),
    ee = n(374958);
let et = (e) => {
        let { children: t, onClick: n, ...r } = e;
        return (0, l.jsx)(g.zxk, {
            fullWidth: !0,
            look: g.zxk.Looks.FILLED,
            onClick: (e) => {
                e.stopPropagation(), n();
            },
            ...r,
            children: t
        });
    },
    en = (e) => {
        let { className: t, ...n } = e;
        return (0, l.jsx)(g.zxk, {
            color: g.Ttl.BRAND,
            look: g.zxk.Looks.FILLED,
            size: g.PhG.ICON,
            className: a()(Q.previewButton, t),
            innerClassName: Q.previewButtonInner,
            'aria-label': Y.intl.string(Y.t.SKNnqq),
            ...n,
            children: (0, l.jsx)(g.tEF, {
                size: 'md',
                color: 'currentColor'
            })
        });
    },
    el = (e) => {
        let { profileEffectId: t, isHighlighted: n, isPurchased: r } = e;
        return (0, l.jsx)('div', {
            className: Q.profileEffectShopPreview,
            children: (0, l.jsx)(L.Z, {
                profileEffectId: t,
                isHovering: n,
                isPurchased: r && !n,
                removeSetHeight: !0
            })
        });
    },
    er = (e) => {
        let { isStormMysteryItem: t, isHighlighted: n, isPurchased: r, user: i, item: s } = e;
        return (0, l.jsx)('div', {
            className: a()(Q.avatarContainer, t && Q.mysteryAvatarContainer),
            children: (0, l.jsx)(U.R, {
                item: s,
                user: i,
                isPurchased: r,
                isHighlighted: n
            })
        });
    },
    ei = (e) => {
        let { isDarkTheme: t } = e;
        return (0, l.jsx)(j.Z, {
            avatarSize: g.EFr.SIZE_32,
            className: a()(ee.placeholder, Q.nameplatePreviewSampleItem),
            childrenClassName: t ? Q.placeholderItemChildrenDark : Q.placeholderItemChildrenLight,
            doNotAnimate: !0
        });
    },
    ea = (e) => {
        let { user: t, isDarkTheme: n } = e;
        return (0, l.jsx)('div', {
            className: Q.nameplatePreviewRootContainer,
            children: (0, l.jsxs)('div', {
                className: Q.nameplatePreviewList,
                children: [
                    (0, l.jsx)(ei, { isDarkTheme: n }),
                    (0, l.jsx)(ei, { isDarkTheme: n }),
                    (0, l.jsx)(f.Z, {
                        user: t,
                        className: Q.nameplatePreviewSampleItem,
                        hideClanTag: !0,
                        hideSubtext: !0
                    }),
                    (0, l.jsx)(ei, { isDarkTheme: n }),
                    (0, l.jsx)(ei, { isDarkTheme: n })
                ]
            })
        });
    },
    es = function (e) {
        let { product: t, user: n, category: i, onMount: s, isGiftEasterEggEnabled: f, isInFeedView: j } = e,
            { analyticsLocations: L } = (0, _.ZP)([...(j ? [v.Z.COLLECTIBLES_SHOP_HOME_SCREEN] : []), v.Z.COLLECTIBLES_SHOP_CARD]),
            U = r.useRef(null),
            ee = (0, x.Z)(U),
            [ei, es] = r.useState(!1),
            eo = ee || ei,
            ed = (0, K.f)(t),
            { previewingVariantIndex: ec } = ed,
            eu = (0, F.T)(t),
            eC = (0, h.e7)([b.Z], () => b.Z.useReducedMotion),
            eh = T.ZP.canUseCollectibles(n),
            em = r.useMemo(() => (0, Z.BH)(t, eh), [t, eh]),
            ep = (0, Z.G1)(t),
            eg = (0, Z.rN)(t),
            [ef, ex, eb] = (0, h.Wu)([B.Z], () => [B.Z.isClaiming === t.skuId, null != B.Z.isClaiming && B.Z.isClaiming !== t.skuId, B.Z.purchases]),
            ev = (0, $.o)(t, eb, ec),
            e_ = (0, h.e7)([S.Z], () => (0, p.wj)(S.Z.theme)),
            ej = (0, Z.Yq)(t.skuId),
            { hoverVariant: ek } = (0, N.E)('CollectiblesShopTallCard'),
            eE = i.skuId === u.T.STORM && '1268362891946627103' === t.skuId,
            eL = (0, w.hv)('CollectiblesShopTallCard'),
            eS = (0, y.o)(t, eb),
            eT = (0, q.W)(t, eS),
            eI = (0, Z.XM)(eT, eh, !1),
            { isPurchased: eB, isPartiallyOwnedBundle: ey } = (0, O.L)(eT),
            eZ = null !== ec ? ec : eS,
            [eN, ew] = r.useState(!1),
            { handleCardVisibilityChange: eP } = (0, A.E)(eT.skuId, j ? 'home' : 'full');
        r.useEffect(() => {
            let { current: e } = U;
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
                null == s || s(U);
            }, [s]);
        let eF = r.useRef(null),
            { handleUseNow: eO, isApplying: eA } = (0, P.W)({ product: eT }),
            eR = (e) => (n) => {
                (eF.current = n.currentTarget),
                    (0, D.T)({
                        product: t,
                        category: i,
                        analyticsLocations: L,
                        analyticsSource: e,
                        returnRef: eF
                    });
            },
            eH = eR(v.Z.COLLECTIBLES_SHOP_CARD),
            eM = eR(v.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
            eV = () =>
                (0, l.jsx)('div', {
                    className: Q.hoverUpsellContainer,
                    children: (0, l.jsx)(E.Z, {
                        fullWidth: !0,
                        className: Q.__invalid_premiumSubscribeButton,
                        disabled: ex,
                        onClick: (e) => e.stopPropagation(),
                        buttonText: Y.intl.string(Y.t.sEAnVF),
                        subscriptionTier: X.Si.TIER_2
                    })
                }),
            eD = () =>
                ep || c.tq
                    ? null
                    : eg
                      ? (0, l.jsx)(en, { onClick: eM })
                      : (0, l.jsx)(M.Z, {
                            product: t,
                            selectedVariantIndex: eS,
                            returnRef: U,
                            isGiftEasterEggEnabled: f,
                            disableCustomColor: !0,
                            tooltipDelay: 250
                        });
        return (0, Z.x6)(t) && null != em && em.discountPercentage < 0
            ? null
            : (0, l.jsx)(m.$, {
                  onChange: eP,
                  threshold: 0,
                  children: (0, l.jsx)(g.tEY, {
                      children: (0, l.jsxs)(g.kL8, {
                          className: a()(e_ ? Q.shopCardDark : Q.shopCard, {
                              [Q.partiallyOwned]: ey && !eo,
                              [Q.shopCardAnimation]: !eC && ek !== N.D.NO_MOVEMENT,
                              [e_ ? Q.shopCardDarkHighlighted : Q.shopCardHighlighted]: eo,
                              [Q.mysteryShopCard]: eE
                          }),
                          ref: U,
                          onClick: eH,
                          'aria-label': t.name,
                          children: [
                              ep &&
                                  (0, l.jsx)(g.ua7, {
                                      tooltipContentClassName: Q.premiumWheelTooltipContent,
                                      color: g.ua7.Colors.PRIMARY,
                                      text: Y.intl.string(Y.t.O2K0xM),
                                      children: (e) =>
                                          (0, l.jsx)(g.IGR, {
                                              ...e,
                                              className: Q.premiumWheelBadge,
                                              text: (0, l.jsx)(g.SrA, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: Q.premiumWheel
                                              })
                                          })
                                  }),
                              (0, l.jsx)('div', {
                                  className: Q.preview,
                                  children: (0, d.EQ)(t.type)
                                      .with(C.Z.PROFILE_EFFECT, () =>
                                          (0, l.jsx)(el, {
                                              isHighlighted: eo,
                                              profileEffectId: ev.id,
                                              isPurchased: eB
                                          })
                                      )
                                      .with(
                                          C.Z.AVATAR_DECORATION,
                                          () => (
                                              o()(ev.type === C.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                              (0, l.jsx)(er, {
                                                  item: ev,
                                                  user: n,
                                                  isStormMysteryItem: eE,
                                                  isHighlighted: eo,
                                                  isPurchased: eB
                                              })
                                          )
                                      )
                                      .with(C.Z.NAMEPLATE, () =>
                                          (0, l.jsx)(ea, {
                                              user: n,
                                              isDarkTheme: e_
                                          })
                                      )
                                      .with(C.Z.BUNDLE, () =>
                                          (0, l.jsx)(G.d, {
                                              product: t,
                                              user: n,
                                              isPurchased: eB,
                                              isHighlighted: eo
                                          })
                                      )
                                      .with(C.Z.VARIANTS_GROUP, () => {
                                          if (null == t.variants || 0 === t.variants.length) return null;
                                          let e = t.variants[eZ];
                                          return null == e
                                              ? null
                                              : (0, d.EQ)(e.type)
                                                    .with(C.Z.PROFILE_EFFECT, () => {
                                                        let [t] = e.items;
                                                        return (0, l.jsx)(el, {
                                                            isHighlighted: eo,
                                                            profileEffectId: t.id,
                                                            isPurchased: eB && !eN
                                                        });
                                                    })
                                                    .with(C.Z.AVATAR_DECORATION, () => {
                                                        let [t] = e.items;
                                                        return (
                                                            o()(t.type === C.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
                                                            (0, l.jsx)(er, {
                                                                item: t,
                                                                user: n,
                                                                isStormMysteryItem: eE,
                                                                isHighlighted: eo,
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
                                        className: Q.checkmarkWrapper,
                                        children: (0, l.jsx)(g.sV5, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 38,
                                            height: 38,
                                            className: Q.checkmark
                                        })
                                    })
                                  : null,
                              (0, l.jsxs)('div', {
                                  className: a()(Q.cardText, e_ ? Q.darkCardBackground : Q.lightCardBackground, { [Q.variantsGroup]: t.type === C.Z.VARIANTS_GROUP }),
                                  children: [
                                      (0, l.jsx)(g.Text, {
                                          variant: 'text-lg/bold',
                                          className: Q.productName,
                                          children: eu
                                      }),
                                      t.type === C.Z.VARIANTS_GROUP
                                          ? (0, l.jsx)(W.P, {
                                                variantGroupProduct: t,
                                                previewingVariantIndexProps: ed,
                                                setIsHoveringOnSwitch: ew,
                                                purchases: eb,
                                                minimal: !eo,
                                                alternativeBackgroundColor: (null == ev ? void 0 : ev.type) === C.Z.PROFILE_EFFECT
                                            })
                                          : null,
                                      (0, l.jsxs)('div', {
                                          className: Q.detailsWrapper,
                                          children: [
                                              (0, l.jsx)('div', {
                                                  className: ey ? void 0 : Q.innerBlur,
                                                  children:
                                                      eB || ey
                                                          ? (0, l.jsx)(R.U, {
                                                                className: Q.priceTag,
                                                                isPartiallyPurchased: ey
                                                            })
                                                          : ep
                                                            ? (0, l.jsx)(g.Text, {
                                                                  variant: 'text-md/semibold',
                                                                  className: Q.priceTag,
                                                                  children: Y.intl.string(Y.t.rt69oq)
                                                              })
                                                            : (0, l.jsx)(V.Z, {
                                                                  product: eT,
                                                                  discount: em,
                                                                  isPremiumUser: eh,
                                                                  className: Q.priceTag
                                                              })
                                              }),
                                              (0, l.jsx)('div', {
                                                  className: Q.innerHover,
                                                  children: (() => {
                                                      if (ep && !eh && !eg) return eV();
                                                      let e = ep
                                                          ? {
                                                                submitting: ef,
                                                                submittingStartedLabel: Y.intl.string(Y.t['TYw+9v']),
                                                                submittingFinishedLabel: Y.intl.string(Y.t.Pg1UPz),
                                                                onClick: async () => {
                                                                    await (0, I.fK)(t.skuId),
                                                                        (0, J.Z)({
                                                                            product: t,
                                                                            analyticsLocations: L
                                                                        });
                                                                }
                                                            }
                                                          : {
                                                                onClick: () =>
                                                                    (0, k.Z)({
                                                                        skuId: (0, z.S)({
                                                                            product: t,
                                                                            selectedVariantIndex: eS
                                                                        }),
                                                                        analyticsLocations: L,
                                                                        returnRef: U,
                                                                        variantsReturnStyle: eL
                                                                    })
                                                            };
                                                      return (0, l.jsxs)('div', {
                                                          className: Q.buttonsContainer,
                                                          children: [
                                                              ey
                                                                  ? null
                                                                  : eB
                                                                    ? (0, l.jsx)(et, {
                                                                          disabled: ex,
                                                                          onClick: eO,
                                                                          submitting: eA,
                                                                          children: Y.intl.string(Y.t.MAS7uL)
                                                                      })
                                                                    : (0, l.jsx)(et, {
                                                                          disabled: ex,
                                                                          ...e,
                                                                          children: ep ? Y.intl.string(Y.t.zp6caG) : Y.intl.formatToPlainString(Y.t['cNSL/v'], { price: eI })
                                                                      }),
                                                              eD()
                                                          ]
                                                      });
                                                  })()
                                              })
                                          ]
                                      })
                                  ]
                              }),
                              (0, l.jsx)(H.Z, {
                                  category: i,
                                  className: Q.limitedTimeBadge,
                                  display: 'card'
                              }),
                              ej &&
                                  !ey &&
                                  !eB &&
                                  i.skuId !== u.T.ROBERT &&
                                  (0, l.jsx)(g.IGR, {
                                      text: Y.intl.string(Y.t.y2b7CA),
                                      disableColor: !0,
                                      className: Q.newBadge
                                  })
                          ]
                      })
                  })
              });
    };
