n.d(t, { default: () => ek }), n(47120), n(627341), n(266796);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(512722),
    a = n.n(s),
    c = n(278074),
    u = n(873546),
    d = n(979554),
    m = n(399606),
    f = n(780384),
    p = n(481060),
    v = n(809206);
n(276264);
var h = n(727637),
    C = n(410030),
    x = n(100527),
    b = n(906732);
n(570908);
var g = n(786761),
    P = n(3148),
    _ = n(739566),
    N = n(753206),
    I = n(333867),
    w = n(197115),
    j = n(921813),
    k = n(876917),
    T = n(484459),
    O = n(43747),
    E = n(822857),
    S = n(960919),
    y = n(25990),
    L = n(594174),
    Z = n(626135),
    A = n(74538),
    W = n(335131),
    B = n(1870),
    R = n(429368),
    D = n(884697),
    z = n(72462),
    M = n(228624),
    F = n(188584),
    V = n(635552),
    H = n(905357),
    U = n(724994),
    K = n(328456),
    q = n(390698),
    G = n(141011),
    Y = n(525518),
    Q = n(426171),
    X = n(224068),
    J = n(813083),
    $ = n(823941),
    ee = n(680942),
    et = n(558060),
    en = n(237031),
    ei = n(372654),
    er = n(385797),
    el = n(453713),
    eo = n(616066),
    es = n(332246),
    ea = n(58201),
    ec = n(361110),
    eu = n(956472),
    ed = n(832149),
    em = n(215023),
    ef = n(981631),
    ep = n(474936),
    ev = n(231338),
    eh = n(388032),
    eC = n(453803);
function ex(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function eb(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
eh.NW.string(eh.t.SbKDHh), eh.NW.string(eh.t['LMSo+P']), eh.NW.string(eh.t.g5Dump), eh.NW.string(eh.t.p5Z3Oj), eh.NW.string(eh.t.ncsliY);
let eg = (e) => {
        let { item: t, user: n, isBundleItem: l = !1 } = e,
            o = r.useRef(null),
            s = (0, h.Z)(o);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, i.jsx)('div', {
                    className: l ? eC.bundleAvatarPreviewContainer : eC.avatarPreviewContainer,
                    children: (0, i.jsx)(eo.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, i.jsx)('div', {
                    className: l ? eC.bundlePfxPreviewContainer : eC.pfxPreviewContainer,
                    ref: o,
                    children: (0, i.jsx)(k.Z, {
                        profileEffectId: t.id,
                        isHovering: s,
                        removeSetHeight: !0
                    })
                })
            )
            .otherwise(() => null);
    },
    eP = (e) => {
        let { product: t, user: n } = e,
            [l, o] = r.useState(0);
        r.useEffect(() => {
            let e = setInterval(() => {
                t.items.length > 0 && o((e) => (e + 1) % t.items.length);
            }, 5000);
            return () => {
                clearInterval(e);
            };
        }, [t.skuId, t.items.length, n.id]);
        let s = t.items.length;
        return (0, i.jsx)('div', {
            className: eC.bundlePreviewContainer,
            children: (0, i.jsx)(p.MyZ, {
                activeSlide: String(l),
                children: t.items.map((e, r) => {
                    let l = String(r),
                        o = null != t.bundledProducts ? t.bundledProducts[r] : void 0,
                        a = '('.concat(r + 1, '/').concat(s, ')');
                    return (0, i.jsx)(
                        p.Mi4,
                        {
                            id: l,
                            children: (0, i.jsxs)('div', {
                                className: eC.bundlePreviewSlide,
                                children: [
                                    (0, i.jsx)(eg, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, i.jsxs)(p.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eC.bundleSlideTitle,
                                        children: [null == o ? void 0 : o.name, ' ', a]
                                    })
                                ]
                            })
                        },
                        l
                    );
                })
            })
        });
    },
    e_ = (e) => {
        let { product: t, user: n } = e;
        return (0, D.x6)(t)
            ? (0, i.jsx)(eP, {
                  product: t,
                  user: n
              })
            : t.items.length > 0
              ? (0, i.jsx)(eg, {
                    item: t.items[0],
                    user: n
                })
              : null;
    },
    eN = (e) => {
        var t, n, l;
        let s;
        let { product: c, user: h, category: x, onClose: g, returnRef: P, previewingVariantIndexProps: _, selectedVariantIndex: N, tab: j } = e,
            { analyticsLocations: k } = (0, b.ZP)(),
            T = A.ZP.canUseCollectibles(h),
            { previewingVariantIndex: y } = _,
            L = (0, es.N)(c, y),
            Z = (0, ea.W)(c, N);
        a()(null != Z, 'Selected product should not be null');
        let R = (0, U.L)(c),
            { isPurchased: z, isPartiallyOwnedBundle: G } = (0, U.L)(Z),
            Y = (0, m.e7)([B.Z], () => B.Z.purchases),
            Q = (0, m.e7)([B.Z], () => B.Z.isClaiming === (null == Z ? void 0 : Z.skuId)),
            $ = (0, C.ZP)(),
            ei = (0, f.wj)($),
            eo = (0, D.G1)(Z),
            ec = (0, D.ql)(Z, ef.tuJ.DEFAULT),
            em = (null == ec ? void 0 : ec.amount) === 0,
            { firstAvatarDecoration: ex } = (0, K.R)(null != L ? L : Z),
            eb = r.useMemo(() => (0, D.BH)(Z, T), [Z, T]),
            { handleUseNow: eg, isApplying: eP } = (0, V.W)({
                product: Z,
                onSuccess: g
            }),
            eN = (0, M.hv)('CollectiblesProductPreviewInfo'),
            eI = (0, H.T)(Z),
            { enabled: ew } = (0, E.W)({ location: 'collectibles_shop_product_details_modal' }),
            { displayPrices: ej, checkoutEligiblePrices: ek } = (0, eu.I)({
                product: Z,
                isPremiumUser: T,
                tab: j
            }),
            eT = ew && (null === (t = ek[0]) || void 0 === t ? void 0 : t.currency) === ev.pK.DISCORD_ORB,
            { redeemVirtualCurrency: eO, isSubmitting: eE } = (0, O.f)();
        r.useEffect(() => {
            if (null != ex) return (0, v.cV)(ex), () => (0, v.cV)(void 0);
        }, [ex]);
        let { firstAvatarDecoration: eS, firstProfileEffect: ey } = (0, F.k)(Z),
            eL =
                Z.type === d.Z.BUNDLE
                    ? eh.NW.formatToPlainString(eh.t['jM8/7+'], {
                          avatarDecorationName: null !== (n = null == eS ? void 0 : eS.name) && void 0 !== n ? n : '',
                          profileEffectName: null !== (l = null == ey ? void 0 : ey.name) && void 0 !== l ? l : ''
                      })
                    : Z.summary;
        return (0, i.jsxs)('div', {
            className: eC.collectibleInfoContainer,
            children: [
                (0, i.jsx)('div', {
                    className: eC.titleContainer,
                    children: (0, i.jsx)(J.Z, {
                        category: x,
                        display: 'modal'
                    })
                }),
                (0, i.jsx)(e_, {
                    product: null != L ? L : Z,
                    user: h
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsxs)('div', {
                            className: eC.description,
                            children: [
                                (0, i.jsx)(X.Z, {
                                    product: Z,
                                    isDarkText: !ei
                                }),
                                (0, i.jsx)(p.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eC.headingWithItemTypePill,
                                    children: eI
                                }),
                                (0, i.jsx)(p.Text, {
                                    variant: 'text-sm/normal',
                                    children: eL
                                }),
                                R.isPurchased || R.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(q.U, {
                                          className: eC.priceTag,
                                          isPartiallyPurchased: G
                                      })
                                    : eo
                                      ? (0, i.jsx)(p.Text, {
                                            variant: 'text-md/semibold',
                                            className: eC.priceTag,
                                            children: eh.NW.string(eh.t.rt69oq)
                                        })
                                      : ew
                                        ? (0, i.jsx)(er.Z, {
                                              displayPrices: ej,
                                              isPremiumUser: T
                                          })
                                        : (0, i.jsx)(et.Z, {
                                              product: Z,
                                              discount: eb,
                                              isPremiumUser: T,
                                              className: T ? eC.priceTag : eC.priceTagContainer,
                                              nitroUpsell: !T
                                          })
                            ]
                        }),
                        (0, i.jsx)(el.P, {
                            variantGroupProduct: c,
                            previewingVariantIndexProps: _,
                            className: eC.variantsSwitch,
                            purchases: Y
                        }),
                        (0, i.jsx)('div', {
                            className: eC.buttonsContainer,
                            children: (0, i.jsxs)('div', {
                                className: eC.primaryButtons,
                                children: [
                                    !eo || T || em
                                        ? z
                                            ? (0, i.jsx)(p.zxk, {
                                                  className: eC.button,
                                                  look: p.zxk.Looks.FILLED,
                                                  onClick: eg,
                                                  submitting: eP,
                                                  children: eh.NW.string(eh.t.MAS7uL)
                                              })
                                            : G
                                              ? null
                                              : eo
                                                ? (0, i.jsx)(p.zxk, {
                                                      className: eC.button,
                                                      look: p.zxk.Looks.FILLED,
                                                      submitting: Q,
                                                      submittingStartedLabel: eh.NW.string(eh.t['TYw+9v']),
                                                      submittingFinishedLabel: eh.NW.string(eh.t.Pg1UPz),
                                                      onClick: async () => {
                                                          await (0, W.fK)(Z.skuId),
                                                              g(),
                                                              (0, ed.Z)({
                                                                  product: Z,
                                                                  analyticsLocations: k
                                                              });
                                                      },
                                                      children: eh.NW.string(eh.t.zp6caG)
                                                  })
                                                : (0, i.jsx)(p.zxk, {
                                                      className: eC.button,
                                                      innerClassName: eC.buttonInner,
                                                      look: p.zxk.Looks.FILLED,
                                                      submitting: eE,
                                                      onClick: () => {
                                                          eT
                                                              ? eO(Z.skuId, (e) => {
                                                                    e &&
                                                                        (g(),
                                                                        (0, W.qg)({
                                                                            variantsReturnStyle: eN,
                                                                            location: 'collectible_checkout_with_orb'
                                                                        }),
                                                                        (0, ed.Z)({
                                                                            product: Z,
                                                                            analyticsLocations: k
                                                                        }));
                                                                })
                                                              : (0, I.Z)({
                                                                    skuId: Z.skuId,
                                                                    analyticsLocations: k,
                                                                    variantsReturnStyle: eN,
                                                                    onClose: (e) => (e ? g() : (0, ev.dG)())
                                                                });
                                                      },
                                                      children: eT
                                                          ? eh.NW.format(eh.t.kAgx5O, {
                                                                orbPrice: ek[0].amount,
                                                                orbIconHook: () => (0, i.jsx)(S.Z, {})
                                                            })
                                                          : (0, D.x6)(Z)
                                                            ? eh.NW.string(eh.t.V1AWw8)
                                                            : Z.type === d.Z.PROFILE_EFFECT
                                                              ? eh.NW.string(eh.t.kAeDcH)
                                                              : eh.NW.string(eh.t.AQ0Ven)
                                                  })
                                        : ((s = eh.NW.string(eh.t.sEAnVF)),
                                          (0, i.jsx)(w.Z, {
                                              subscriptionTier: ep.Si.TIER_2,
                                              fullWidth: !0,
                                              buttonText: s,
                                              onClick: en.v,
                                              onSubscribeModalClose: () => {
                                                  (0, en.T)({
                                                      product: Z,
                                                      category: x,
                                                      returnRef: P,
                                                      analyticsLocations: k
                                                  });
                                              }
                                          })),
                                    !eo &&
                                        !em &&
                                        !u.tq &&
                                        (0, i.jsx)(ee.Z, {
                                            product: Z,
                                            onSuccess: g,
                                            disableCustomColor: !0
                                        })
                                ]
                            })
                        }),
                        (0, i.jsx)(p.Text, {
                            className: o()(eC.disclaimer, !ei && eC.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: z ? null : eo ? eh.NW.string(eh.t.O2K0xM) : (0, D.x6)(Z) ? eh.NW.string(eh.t.Ifvd7O) : Z.type === d.Z.PROFILE_EFFECT ? eh.NW.string(eh.t.pxunjo) : eh.NW.string(eh.t.IA8coq)
                        })
                    ]
                })
            ]
        });
    },
    eI = (e) => {
        let { product: t, user: n } = e,
            r = A.ZP.canUsePremiumProfileCustomization(n),
            l = (0, m.cj)([y.Z], () => y.Z.getAllPending()),
            o = t.type === d.Z.AVATAR_DECORATION,
            [s] = t.items,
            { firstAvatarDecoration: a, firstProfileEffect: c } = (0, K.R)(t),
            u = null != c;
        return (0, i.jsxs)('div', {
            className: (null == s ? void 0 : s.type) === d.Z.AVATAR_DECORATION ? eC.previewsContainerInner : eC.profileEffectPreviewsContainerInner,
            children: [
                (0, i.jsx)(
                    j.Z,
                    eb(ex({}, l), {
                        user: n,
                        canUsePremiumCustomization: r,
                        pendingAvatarDecoration: a,
                        pendingProfileEffectId: null == c ? void 0 : c.id,
                        disabledInputs: !0,
                        hideMessageInput: !u,
                        hideExampleButton: !0,
                        hideCustomStatus: !0,
                        hideBioSection: o
                    })
                ),
                o && (0, i.jsx)(ej, { user: n })
            ]
        });
    },
    ew = (e) => {
        let { author: t } = e;
        return (0, g.e5)(
            eb(
                ex(
                    {},
                    (0, P.ZP)({
                        author: t,
                        channelId: '1337',
                        content: eh.NW.string(eh.t.d5YwKy)
                    })
                ),
                {
                    state: ef.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    ej = (e) => {
        let { user: t } = e,
            n = ew({ author: t });
        return (0, i.jsx)(p.Rny, {
            children: (0, i.jsxs)(p.Zbd, {
                className: eC.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, i.jsx)(
                        N.Z,
                        {
                            className: eC.mockMessage,
                            author: (0, _.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, i.jsxs)('div', {
                        className: eC.mockInput,
                        children: [
                            (0, i.jsx)(p.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: eC.mockInputButton
                            }),
                            (0, i.jsx)(p.EO4, {
                                size: 'md',
                                color: 'currentColor',
                                className: eC.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    },
    ek = (e) => {
        var t;
        let { transitionState: n, onClose: l, product: o, category: s, returnRef: c, analyticsSource: u, analyticsLocations: f, tab: v } = e,
            h = (0, m.e7)([L.default], () => L.default.getCurrentUser()),
            C = (0, ec.f)(o),
            { previewingVariantIndex: g } = C,
            P = (0, m.e7)([B.Z], () => B.Z.purchases),
            _ = (0, R.o)(o, P),
            N = (0, es.N)(o, g),
            I = (0, ea.W)(o, _);
        a()(null != I, 'Selected product should not be null');
        let { analyticsLocations: w } = (0, b.ZP)([...f, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, Q.u9)(I.skuId);
        let [j] = I.items,
            k = (0, z.s)('CollectiblesShopProductDetailsModal');
        if (
            (r.useEffect(() => {
                null != h && (0, T.Z)(h.id, h.getAvatarURL(void 0, 80));
            }, [h]),
            r.useEffect(() => {
                let e = (null == j ? void 0 : j.type) === d.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                Z.default.track(ef.rMx.OPEN_MODAL, {
                    type: ef.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: u,
                    location_stack: w,
                    sku_id: I.skuId,
                    product_type: e
                }),
                    I.items.map(W.oK);
            }, [u, w, null == j ? void 0 : j.type, I.skuId, I.items]),
            null == h)
        )
            return null;
        let O = (0, em.ZS)(s.skuId);
        return (0, i.jsx)(b.Gt, {
            value: w,
            children: (0, i.jsx)(p.Y0X, {
                hideShadow: !0,
                className: eC.modalRoot,
                returnRef: c,
                transitionState: n,
                size: p.CgR.DYNAMIC,
                children: (0, i.jsxs)(p.hzk, {
                    className: eC.modalContent,
                    children: [
                        (0, i.jsx)(eN, {
                            user: h,
                            product: o,
                            category: s,
                            onClose: l,
                            previewingVariantIndexProps: C,
                            selectedVariantIndex: _,
                            tab: v
                        }),
                        (0, i.jsxs)('div', {
                            className: I.type === d.Z.AVATAR_DECORATION ? eC.collectiblePreviewsContainerWithChat : eC.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, i.jsx)(G.Z, {
                                    asset: null !== (t = s.pdpBg) && void 0 !== t ? t : o.banner,
                                    size: (0, ei.ML)(540),
                                    className: eC.categoryBanner,
                                    categoryBannerOverride: O
                                }),
                                (0, i.jsx)(eI, {
                                    user: h,
                                    product: null != N ? N : I
                                }),
                                (0, i.jsxs)('div', {
                                    className: eC.profilePreviewHeader,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: eC.titleImageContainer,
                                            children: (0, i.jsx)('img', {
                                                className: eC.titleImage,
                                                style: null == O ? void 0 : O.pdpLogoStyle,
                                                src: (0, D.uV)(s.logo, { size: $.n }),
                                                alt: s.name
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: eC.headerButtonContainer,
                                            children: [
                                                k && (0, i.jsx)(Y.B, { skuId: I.skuId }),
                                                (0, i.jsx)(p.olH, {
                                                    onClick: l,
                                                    className: eC.modalCloseButton,
                                                    withCircleBackground: !0
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        });
    };
