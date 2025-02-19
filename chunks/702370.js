n.d(t, { default: () => eN }), n(47120), n(627341), n(266796);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(278074),
    u = n(873546),
    d = n(979554),
    m = n(399606),
    f = n(780384),
    v = n(481060),
    p = n(809206);
n(276264);
var h = n(727637),
    C = n(410030),
    x = n(100527),
    g = n(906732);
n(570908);
var b = n(786761),
    P = n(3148),
    N = n(739566),
    w = n(753206),
    _ = n(333867),
    j = n(197115),
    I = n(921813),
    k = n(876917),
    T = n(484459),
    E = n(25990),
    O = n(594174),
    S = n(626135),
    y = n(74538),
    L = n(335131),
    Z = n(1870),
    A = n(429368),
    B = n(884697),
    W = n(72462),
    R = n(228624),
    D = n(188584),
    z = n(635552),
    M = n(905357),
    F = n(724994),
    V = n(328456),
    H = n(390698),
    U = n(141011),
    K = n(525518),
    G = n(426171),
    q = n(224068),
    Y = n(813083),
    Q = n(823941),
    X = n(680942),
    J = n(558060),
    $ = n(237031),
    ee = n(372654),
    et = n(453713),
    en = n(616066),
    ei = n(332246),
    er = n(58201),
    el = n(361110),
    es = n(832149),
    ea = n(215023),
    eo = n(981631),
    ec = n(474936),
    eu = n(231338),
    ed = n(388032),
    em = n(453803);
function ef(e) {
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
function ev(e, t) {
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
ed.NW.string(ed.t.SbKDHh), ed.NW.string(ed.t['LMSo+P']), ed.NW.string(ed.t.g5Dump), ed.NW.string(ed.t.p5Z3Oj), ed.NW.string(ed.t.ncsliY);
let ep = (e) => {
        let { item: t, user: n, isBundleItem: l = !1 } = e,
            s = r.useRef(null),
            a = (0, h.Z)(s);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, i.jsx)('div', {
                    className: l ? em.bundleAvatarPreviewContainer : em.avatarPreviewContainer,
                    children: (0, i.jsx)(en.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, i.jsx)('div', {
                    className: l ? em.bundlePfxPreviewContainer : em.pfxPreviewContainer,
                    ref: s,
                    children: (0, i.jsx)(k.Z, {
                        profileEffectId: t.id,
                        isHovering: a,
                        removeSetHeight: !0
                    })
                })
            )
            .otherwise(() => null);
    },
    eh = (e) => {
        let { product: t, user: n } = e,
            [l, s] = r.useState(0);
        r.useEffect(() => {
            let e = setInterval(() => {
                t.items.length > 0 && s((e) => (e + 1) % t.items.length);
            }, 5000);
            return () => {
                clearInterval(e);
            };
        }, [t.skuId, t.items.length, n.id]);
        let a = t.items.length;
        return (0, i.jsx)('div', {
            className: em.bundlePreviewContainer,
            children: (0, i.jsx)(v.MyZ, {
                activeSlide: String(l),
                children: t.items.map((e, r) => {
                    let l = String(r),
                        s = null != t.bundledProducts ? t.bundledProducts[r] : void 0,
                        o = '('.concat(r + 1, '/').concat(a, ')');
                    return (0, i.jsx)(
                        v.Mi4,
                        {
                            id: l,
                            children: (0, i.jsxs)('div', {
                                className: em.bundlePreviewSlide,
                                children: [
                                    (0, i.jsx)(ep, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, i.jsxs)(v.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: em.bundleSlideTitle,
                                        children: [null == s ? void 0 : s.name, ' ', o]
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
    eC = (e) => {
        let { product: t, user: n } = e;
        return (0, B.x6)(t)
            ? (0, i.jsx)(eh, {
                  product: t,
                  user: n
              })
            : t.items.length > 0
              ? (0, i.jsx)(ep, {
                    item: t.items[0],
                    user: n
                })
              : null;
    },
    ex = (e) => {
        var t, n;
        let l;
        let { product: a, user: c, category: h, onClose: x, returnRef: b, previewingVariantIndexProps: P, selectedVariantIndex: N } = e,
            { analyticsLocations: w } = (0, g.ZP)(),
            I = y.ZP.canUseCollectibles(c),
            { previewingVariantIndex: k } = P,
            T = (0, ei.N)(a, k),
            E = (0, er.W)(a, N);
        o()(null != E, 'Selected product should not be null');
        let O = (0, F.L)(a),
            { isPurchased: S, isPartiallyOwnedBundle: A } = (0, F.L)(E),
            W = (0, m.e7)([Z.Z], () => Z.Z.purchases),
            U = (0, m.e7)([Z.Z], () => Z.Z.isClaiming === (null == E ? void 0 : E.skuId)),
            K = (0, C.ZP)(),
            G = (0, f.wj)(K),
            Q = (0, B.G1)(E),
            ee = (0, B.ql)(E, eo.tuJ.DEFAULT),
            en = (null == ee ? void 0 : ee.amount) === 0,
            { firstAvatarDecoration: el } = (0, V.R)(null != T ? T : E),
            ea = r.useMemo(() => (0, B.BH)(E, I), [E, I]),
            { handleUseNow: ef, isApplying: ev } = (0, z.W)({
                product: E,
                onSuccess: x
            }),
            ep = (0, R.hv)('CollectiblesProductPreviewInfo'),
            eh = (0, M.T)(E);
        r.useEffect(() => {
            if (null != el) return (0, p.cV)(el), () => (0, p.cV)(void 0);
        }, [el]);
        let { firstAvatarDecoration: ex, firstProfileEffect: eg } = (0, D.k)(E),
            eb =
                E.type === d.Z.BUNDLE
                    ? ed.NW.formatToPlainString(ed.t['jM8/7+'], {
                          avatarDecorationName: null !== (t = null == ex ? void 0 : ex.name) && void 0 !== t ? t : '',
                          profileEffectName: null !== (n = null == eg ? void 0 : eg.name) && void 0 !== n ? n : ''
                      })
                    : E.summary;
        return (0, i.jsxs)('div', {
            className: em.collectibleInfoContainer,
            children: [
                (0, i.jsx)('div', {
                    className: em.titleContainer,
                    children: (0, i.jsx)(Y.Z, {
                        category: h,
                        display: 'modal'
                    })
                }),
                (0, i.jsx)(eC, {
                    product: null != T ? T : E,
                    user: c
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsxs)('div', {
                            className: em.description,
                            children: [
                                (0, i.jsx)(q.Z, {
                                    product: E,
                                    isDarkText: !G
                                }),
                                (0, i.jsx)(v.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: em.headingWithItemTypePill,
                                    children: eh
                                }),
                                (0, i.jsx)(v.Text, {
                                    variant: 'text-sm/normal',
                                    children: eb
                                }),
                                O.isPurchased || O.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(H.U, {
                                          className: em.priceTag,
                                          isPartiallyPurchased: A
                                      })
                                    : Q
                                      ? (0, i.jsx)(v.Text, {
                                            variant: 'text-md/semibold',
                                            className: em.priceTag,
                                            children: ed.NW.string(ed.t.rt69oq)
                                        })
                                      : (0, i.jsx)(J.Z, {
                                            product: E,
                                            discount: ea,
                                            isPremiumUser: I,
                                            className: I ? em.priceTag : em.priceTagContainer,
                                            nitroUpsell: !I
                                        })
                            ]
                        }),
                        (0, i.jsx)(et.P, {
                            variantGroupProduct: a,
                            previewingVariantIndexProps: P,
                            className: em.variantsSwitch,
                            purchases: W
                        }),
                        (0, i.jsx)('div', {
                            className: em.buttonsContainer,
                            children: (0, i.jsxs)('div', {
                                className: em.primaryButtons,
                                children: [
                                    !Q || I || en
                                        ? S
                                            ? (0, i.jsx)(v.zxk, {
                                                  className: em.button,
                                                  look: v.zxk.Looks.FILLED,
                                                  onClick: ef,
                                                  submitting: ev,
                                                  children: ed.NW.string(ed.t.MAS7uL)
                                              })
                                            : A
                                              ? null
                                              : Q
                                                ? (0, i.jsx)(v.zxk, {
                                                      className: em.button,
                                                      look: v.zxk.Looks.FILLED,
                                                      submitting: U,
                                                      submittingStartedLabel: ed.NW.string(ed.t['TYw+9v']),
                                                      submittingFinishedLabel: ed.NW.string(ed.t.Pg1UPz),
                                                      onClick: async () => {
                                                          await (0, L.fK)(E.skuId),
                                                              x(),
                                                              (0, es.Z)({
                                                                  product: E,
                                                                  analyticsLocations: w
                                                              });
                                                      },
                                                      children: ed.NW.string(ed.t.zp6caG)
                                                  })
                                                : (0, i.jsx)(v.zxk, {
                                                      className: em.button,
                                                      look: v.zxk.Looks.FILLED,
                                                      onClick: () =>
                                                          (0, _.Z)({
                                                              skuId: E.skuId,
                                                              analyticsLocations: w,
                                                              variantsReturnStyle: ep,
                                                              onClose: (e) => (e ? x() : (0, eu.dG)())
                                                          }),
                                                      children: (0, B.x6)(E) ? ed.NW.string(ed.t.V1AWw8) : E.type === d.Z.PROFILE_EFFECT ? ed.NW.string(ed.t.kAeDcH) : ed.NW.string(ed.t.AQ0Ven)
                                                  })
                                        : ((l = ed.NW.string(ed.t.sEAnVF)),
                                          (0, i.jsx)(j.Z, {
                                              subscriptionTier: ec.Si.TIER_2,
                                              fullWidth: !0,
                                              buttonText: l,
                                              onClick: $.v,
                                              onSubscribeModalClose: () => {
                                                  (0, $.T)({
                                                      product: E,
                                                      category: h,
                                                      returnRef: b,
                                                      analyticsLocations: w
                                                  });
                                              }
                                          })),
                                    !Q &&
                                        !en &&
                                        !u.tq &&
                                        (0, i.jsx)(X.Z, {
                                            product: E,
                                            onSuccess: x,
                                            disableCustomColor: !0
                                        })
                                ]
                            })
                        }),
                        (0, i.jsx)(v.Text, {
                            className: s()(em.disclaimer, !G && em.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: S ? null : Q ? ed.NW.string(ed.t.O2K0xM) : (0, B.x6)(E) ? ed.NW.string(ed.t.Ifvd7O) : E.type === d.Z.PROFILE_EFFECT ? ed.NW.string(ed.t.pxunjo) : ed.NW.string(ed.t.IA8coq)
                        })
                    ]
                })
            ]
        });
    },
    eg = (e) => {
        let { product: t, user: n } = e,
            r = y.ZP.canUsePremiumProfileCustomization(n),
            l = (0, m.cj)([E.Z], () => E.Z.getAllPending()),
            s = t.type === d.Z.AVATAR_DECORATION,
            [a] = t.items,
            { firstAvatarDecoration: o, firstProfileEffect: c } = (0, V.R)(t),
            u = null != c;
        return (0, i.jsxs)('div', {
            className: (null == a ? void 0 : a.type) === d.Z.AVATAR_DECORATION ? em.previewsContainerInner : em.profileEffectPreviewsContainerInner,
            children: [
                (0, i.jsx)(
                    I.Z,
                    ev(ef({}, l), {
                        user: n,
                        canUsePremiumCustomization: r,
                        pendingAvatarDecoration: o,
                        pendingProfileEffectId: null == c ? void 0 : c.id,
                        disabledInputs: !0,
                        hideMessageInput: !u,
                        hideExampleButton: !0,
                        hideCustomStatus: !0,
                        hideBioSection: s
                    })
                ),
                s && (0, i.jsx)(eP, { user: n })
            ]
        });
    },
    eb = (e) => {
        let { author: t } = e;
        return (0, b.e5)(
            ev(
                ef(
                    {},
                    (0, P.ZP)({
                        author: t,
                        channelId: '1337',
                        content: ed.NW.string(ed.t.d5YwKy)
                    })
                ),
                {
                    state: eo.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eP = (e) => {
        let { user: t } = e,
            n = eb({ author: t });
        return (0, i.jsx)(v.Rny, {
            children: (0, i.jsxs)(v.Zbd, {
                className: em.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, i.jsx)(
                        w.Z,
                        {
                            className: em.mockMessage,
                            author: (0, N.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, i.jsxs)('div', {
                        className: em.mockInput,
                        children: [
                            (0, i.jsx)(v.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: em.mockInputButton
                            }),
                            (0, i.jsx)(v.EO4, {
                                size: 'md',
                                color: 'currentColor',
                                className: em.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    },
    eN = (e) => {
        var t;
        let { transitionState: n, onClose: l, product: s, category: a, returnRef: c, analyticsSource: u, analyticsLocations: f } = e,
            p = (0, m.e7)([O.default], () => O.default.getCurrentUser()),
            h = (0, el.f)(s),
            { previewingVariantIndex: C } = h,
            b = (0, m.e7)([Z.Z], () => Z.Z.purchases),
            P = (0, A.o)(s, b),
            N = (0, ei.N)(s, C),
            w = (0, er.W)(s, P);
        o()(null != w, 'Selected product should not be null');
        let { analyticsLocations: _ } = (0, g.ZP)([...f, x.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, G.u9)(w.skuId);
        let [j] = w.items,
            I = (0, W.s)('CollectiblesShopProductDetailsModal');
        if (
            (r.useEffect(() => {
                null != p && (0, T.Z)(p.id, p.getAvatarURL(void 0, 80));
            }, [p]),
            r.useEffect(() => {
                let e = (null == j ? void 0 : j.type) === d.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                S.default.track(eo.rMx.OPEN_MODAL, {
                    type: eo.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: u,
                    location_stack: _,
                    sku_id: w.skuId,
                    product_type: e
                }),
                    w.items.map(L.oK);
            }, [u, _, null == j ? void 0 : j.type, w.skuId, w.items]),
            null == p)
        )
            return null;
        let k = (0, ea.ZS)(a.skuId);
        return (0, i.jsx)(g.Gt, {
            value: _,
            children: (0, i.jsx)(v.Y0X, {
                hideShadow: !0,
                className: em.modalRoot,
                returnRef: c,
                transitionState: n,
                size: v.CgR.DYNAMIC,
                children: (0, i.jsxs)(v.hzk, {
                    className: em.modalContent,
                    children: [
                        (0, i.jsx)(ex, {
                            user: p,
                            product: s,
                            category: a,
                            onClose: l,
                            previewingVariantIndexProps: h,
                            selectedVariantIndex: P
                        }),
                        (0, i.jsxs)('div', {
                            className: w.type === d.Z.AVATAR_DECORATION ? em.collectiblePreviewsContainerWithChat : em.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, i.jsx)(U.Z, {
                                    asset: null !== (t = a.pdpBg) && void 0 !== t ? t : s.banner,
                                    size: (0, ee.ML)(540),
                                    className: em.categoryBanner,
                                    categoryBannerOverride: k
                                }),
                                (0, i.jsx)(eg, {
                                    user: p,
                                    product: null != N ? N : w
                                }),
                                (0, i.jsxs)('div', {
                                    className: em.profilePreviewHeader,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: em.titleImageContainer,
                                            children: (0, i.jsx)('img', {
                                                className: em.titleImage,
                                                style: null == k ? void 0 : k.pdpLogoStyle,
                                                src: (0, B.uV)(a.logo, { size: Q.n }),
                                                alt: a.name
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: em.headerButtonContainer,
                                            children: [
                                                I && (0, i.jsx)(K.B, { skuId: w.skuId }),
                                                (0, i.jsx)(v.olH, {
                                                    onClick: l,
                                                    className: em.modalCloseButton,
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
