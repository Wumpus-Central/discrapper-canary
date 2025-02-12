n.d(t, { default: () => eP }), n(47120), n(627341);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(278074),
    d = n(873546),
    u = n(979554),
    m = n(399606),
    v = n(780384),
    h = n(481060),
    f = n(809206),
    C = n(727637),
    x = n(410030),
    p = n(100527),
    g = n(906732),
    P = n(786761),
    _ = n(3148),
    I = n(739566),
    b = n(753206),
    k = n(333867),
    w = n(197115),
    T = n(921813),
    j = n(876917),
    N = n(484459),
    E = n(25990),
    L = n(594174),
    S = n(626135),
    A = n(74538),
    Z = n(335131),
    y = n(1870),
    B = n(429368),
    O = n(884697),
    R = n(72462),
    D = n(228624),
    z = n(188584),
    M = n(635552),
    F = n(905357),
    V = n(724994),
    U = n(328456),
    H = n(390698),
    W = n(141011),
    G = n(525518),
    K = n(426171),
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
    el = n(58201),
    er = n(361110),
    ea = n(832149),
    es = n(215023),
    eo = n(981631),
    ec = n(474936),
    ed = n(231338),
    eu = n(388032),
    em = n(894165);
let ev = (e) => {
        let { item: t, user: n, isBundleItem: r = !1 } = e,
            a = l.useRef(null),
            s = (0, C.Z)(a);
        return (0, c.EQ)(t.type)
            .with(u.Z.AVATAR_DECORATION, () =>
                (0, i.jsx)('div', {
                    className: r ? em.bundleAvatarPreviewContainer : em.avatarPreviewContainer,
                    children: (0, i.jsx)(en.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, i.jsx)('div', {
                    className: r ? em.bundlePfxPreviewContainer : em.pfxPreviewContainer,
                    ref: a,
                    children: (0, i.jsx)(j.Z, {
                        profileEffectId: t.id,
                        isHovering: s,
                        removeSetHeight: !0
                    })
                })
            )
            .otherwise(() => null);
    },
    eh = (e) => {
        let { product: t, user: n } = e,
            [r, a] = l.useState(0);
        l.useEffect(() => {
            let e = setInterval(() => {
                t.items.length > 0 && a((e) => (e + 1) % t.items.length);
            }, 5000);
            return () => {
                clearInterval(e);
            };
        }, [t.skuId, t.items.length, n.id]);
        let s = t.items.length;
        return (0, i.jsx)('div', {
            className: em.bundlePreviewContainer,
            children: (0, i.jsx)(h.MyZ, {
                activeSlide: String(r),
                children: t.items.map((e, l) => {
                    let r = String(l),
                        a = null != t.bundledProducts ? t.bundledProducts[l] : void 0,
                        o = '('.concat(l + 1, '/').concat(s, ')');
                    return (0, i.jsx)(
                        h.Mi4,
                        {
                            id: r,
                            children: (0, i.jsxs)('div', {
                                className: em.bundlePreviewSlide,
                                children: [
                                    (0, i.jsx)(ev, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, i.jsxs)(h.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: em.bundleSlideTitle,
                                        children: [null == a ? void 0 : a.name, ' ', o]
                                    })
                                ]
                            })
                        },
                        r
                    );
                })
            })
        });
    },
    ef = (e) => {
        let { product: t, user: n } = e;
        return (0, O.x6)(t)
            ? (0, i.jsx)(eh, {
                  product: t,
                  user: n
              })
            : t.items.length > 0
              ? (0, i.jsx)(ev, {
                    item: t.items[0],
                    user: n
                })
              : null;
    },
    eC = (e) => {
        var t, n;
        let r;
        let { product: s, user: c, category: C, onClose: p, returnRef: P, previewingVariantIndexProps: _, selectedVariantIndex: I } = e,
            { analyticsLocations: b } = (0, g.ZP)(),
            T = A.ZP.canUseCollectibles(c),
            { previewingVariantIndex: j } = _,
            N = (0, ei.N)(s, j),
            E = (0, el.W)(s, I);
        o()(null != E, 'Selected product should not be null');
        let L = (0, V.L)(s),
            { isPurchased: S, isPartiallyOwnedBundle: B } = (0, V.L)(E),
            R = (0, m.e7)([y.Z], () => y.Z.purchases),
            W = (0, m.e7)([y.Z], () => y.Z.isClaiming === (null == E ? void 0 : E.skuId)),
            G = (0, x.ZP)(),
            K = (0, v.wj)(G),
            Q = (0, O.G1)(E),
            ee = (0, O.ql)(E, eo.tuJ.DEFAULT),
            en = (null == ee ? void 0 : ee.amount) === 0,
            { firstAvatarDecoration: er } = (0, U.R)(null != N ? N : E),
            es = l.useMemo(() => (0, O.BH)(E, T), [E, T]),
            { handleUseNow: ev, isApplying: eh } = (0, M.W)({
                product: E,
                onSuccess: p
            }),
            eC = (0, D.hv)('CollectiblesProductPreviewInfo'),
            ex = (0, F.T)(E);
        l.useEffect(() => {
            if (null != er) return (0, f.cV)(er), () => (0, f.cV)(void 0);
        }, [er]);
        let { firstAvatarDecoration: ep, firstProfileEffect: eg } = (0, z.k)(E),
            eP =
                E.type === u.Z.BUNDLE
                    ? eu.intl.formatToPlainString(eu.t['jM8/7+'], {
                          avatarDecorationName: null !== (t = null == ep ? void 0 : ep.name) && void 0 !== t ? t : '',
                          profileEffectName: null !== (n = null == eg ? void 0 : eg.name) && void 0 !== n ? n : ''
                      })
                    : E.summary;
        return (0, i.jsxs)('div', {
            className: em.collectibleInfoContainer,
            children: [
                (0, i.jsx)('div', {
                    className: em.titleContainer,
                    children: (0, i.jsx)(Y.Z, {
                        category: C,
                        display: 'modal'
                    })
                }),
                (0, i.jsx)(ef, {
                    product: null != N ? N : E,
                    user: c
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsxs)('div', {
                            className: em.description,
                            children: [
                                (0, i.jsx)(q.Z, {
                                    product: E,
                                    isDarkText: !K
                                }),
                                (0, i.jsx)(h.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: em.headingWithItemTypePill,
                                    children: ex
                                }),
                                (0, i.jsx)(h.Text, {
                                    variant: 'text-sm/normal',
                                    children: eP
                                }),
                                L.isPurchased || L.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(H.U, {
                                          className: em.priceTag,
                                          isPartiallyPurchased: B
                                      })
                                    : Q
                                      ? (0, i.jsx)(h.Text, {
                                            variant: 'text-md/semibold',
                                            className: em.priceTag,
                                            children: eu.intl.string(eu.t.rt69oq)
                                        })
                                      : (0, i.jsx)(J.Z, {
                                            product: E,
                                            discount: es,
                                            isPremiumUser: T,
                                            className: T ? em.priceTag : em.priceTagContainer,
                                            nitroUpsell: !T
                                        })
                            ]
                        }),
                        (0, i.jsx)(et.P, {
                            variantGroupProduct: s,
                            previewingVariantIndexProps: _,
                            className: em.variantsSwitch,
                            purchases: R
                        }),
                        (0, i.jsx)('div', {
                            className: em.buttonsContainer,
                            children: (0, i.jsxs)('div', {
                                className: em.primaryButtons,
                                children: [
                                    !Q || T || en
                                        ? S
                                            ? (0, i.jsx)(h.zxk, {
                                                  className: em.button,
                                                  look: h.zxk.Looks.FILLED,
                                                  onClick: ev,
                                                  submitting: eh,
                                                  children: eu.intl.string(eu.t.MAS7uL)
                                              })
                                            : B
                                              ? null
                                              : Q
                                                ? (0, i.jsx)(h.zxk, {
                                                      className: em.button,
                                                      look: h.zxk.Looks.FILLED,
                                                      submitting: W,
                                                      submittingStartedLabel: eu.intl.string(eu.t['TYw+9v']),
                                                      submittingFinishedLabel: eu.intl.string(eu.t.Pg1UPz),
                                                      onClick: async () => {
                                                          await (0, Z.fK)(E.skuId),
                                                              p(),
                                                              (0, ea.Z)({
                                                                  product: E,
                                                                  analyticsLocations: b
                                                              });
                                                      },
                                                      children: eu.intl.string(eu.t.zp6caG)
                                                  })
                                                : (0, i.jsx)(h.zxk, {
                                                      className: em.button,
                                                      look: h.zxk.Looks.FILLED,
                                                      onClick: () =>
                                                          (0, k.Z)({
                                                              skuId: E.skuId,
                                                              analyticsLocations: b,
                                                              variantsReturnStyle: eC,
                                                              onClose: (e) => (e ? p() : (0, ed.dG)())
                                                          }),
                                                      children: (0, O.x6)(E) ? eu.intl.string(eu.t.V1AWw8) : E.type === u.Z.PROFILE_EFFECT ? eu.intl.string(eu.t.kAeDcH) : eu.intl.string(eu.t.AQ0Ven)
                                                  })
                                        : ((r = eu.intl.string(eu.t.sEAnVF)),
                                          (0, i.jsx)(w.Z, {
                                              subscriptionTier: ec.Si.TIER_2,
                                              fullWidth: !0,
                                              buttonText: r,
                                              onClick: $.v,
                                              onSubscribeModalClose: () => {
                                                  (0, $.T)({
                                                      product: E,
                                                      category: C,
                                                      returnRef: P,
                                                      analyticsLocations: b
                                                  });
                                              }
                                          })),
                                    !Q &&
                                        !en &&
                                        !d.tq &&
                                        (0, i.jsx)(X.Z, {
                                            product: E,
                                            onSuccess: p,
                                            disableCustomColor: !0
                                        })
                                ]
                            })
                        }),
                        (0, i.jsx)(h.Text, {
                            className: a()(em.disclaimer, !K && em.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: S ? null : Q ? eu.intl.string(eu.t.O2K0xM) : (0, O.x6)(E) ? eu.intl.string(eu.t.Ifvd7O) : E.type === u.Z.PROFILE_EFFECT ? eu.intl.string(eu.t.pxunjo) : eu.intl.string(eu.t.IA8coq)
                        })
                    ]
                })
            ]
        });
    },
    ex = (e) => {
        let { product: t, user: n } = e,
            l = A.ZP.canUsePremiumProfileCustomization(n),
            r = (0, m.cj)([E.Z], () => E.Z.getAllPending()),
            a = t.type === u.Z.AVATAR_DECORATION,
            [s] = t.items,
            { firstAvatarDecoration: o, firstProfileEffect: c } = (0, U.R)(t),
            d = null != c;
        return (0, i.jsxs)('div', {
            className: (null == s ? void 0 : s.type) === u.Z.AVATAR_DECORATION ? em.previewsContainerInner : em.profileEffectPreviewsContainerInner,
            children: [
                (0, i.jsx)(T.Z, {
                    ...r,
                    user: n,
                    canUsePremiumCustomization: l,
                    pendingAvatarDecoration: o,
                    pendingProfileEffectId: null == c ? void 0 : c.id,
                    disabledInputs: !0,
                    hideMessageInput: !d,
                    hideExampleButton: !0,
                    hideCustomStatus: !0,
                    hideBioSection: a
                }),
                a && (0, i.jsx)(eg, { user: n })
            ]
        });
    },
    ep = (e) => {
        let { author: t } = e;
        return (0, P.e5)({
            ...(0, _.ZP)({
                author: t,
                channelId: '1337',
                content: eu.intl.string(eu.t.d5YwKy)
            }),
            state: eo.yb.SENT,
            id: '0'
        });
    },
    eg = (e) => {
        let { user: t } = e,
            n = ep({ author: t });
        return (0, i.jsx)(h.Rny, {
            children: (0, i.jsxs)(h.Zbd, {
                className: em.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, i.jsx)(
                        b.Z,
                        {
                            className: em.mockMessage,
                            author: (0, I.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, i.jsxs)('div', {
                        className: em.mockInput,
                        children: [
                            (0, i.jsx)(h.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: em.mockInputButton
                            }),
                            (0, i.jsx)(h.EO4, {
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
    eP = (e) => {
        var t;
        let { transitionState: n, onClose: r, product: a, category: s, returnRef: c, analyticsSource: d, analyticsLocations: v } = e,
            f = (0, m.e7)([L.default], () => L.default.getCurrentUser()),
            C = (0, er.f)(a),
            { previewingVariantIndex: x } = C,
            P = (0, m.e7)([y.Z], () => y.Z.purchases),
            _ = (0, B.o)(a, P),
            I = (0, ei.N)(a, x),
            b = (0, el.W)(a, _);
        o()(null != b, 'Selected product should not be null');
        let { analyticsLocations: k } = (0, g.ZP)([...v, p.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, K.u9)(b.skuId);
        let [w] = b.items,
            T = (0, R.s)('CollectiblesShopProductDetailsModal');
        if (
            (l.useEffect(() => {
                null != f && (0, N.Z)(f.id, f.getAvatarURL(void 0, 80));
            }, [f]),
            l.useEffect(() => {
                let e = (null == w ? void 0 : w.type) === u.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                S.default.track(eo.rMx.OPEN_MODAL, {
                    type: eo.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: d,
                    location_stack: k,
                    sku_id: b.skuId,
                    product_type: e
                }),
                    b.items.map(Z.oK);
            }, [d, k, null == w ? void 0 : w.type, b.skuId, b.items]),
            null == f)
        )
            return null;
        let j = (0, es.ZS)(s.skuId);
        return (0, i.jsx)(g.Gt, {
            value: k,
            children: (0, i.jsx)(h.Y0X, {
                hideShadow: !0,
                className: em.modalRoot,
                returnRef: c,
                transitionState: n,
                size: h.CgR.DYNAMIC,
                children: (0, i.jsxs)(h.hzk, {
                    className: em.modalContent,
                    children: [
                        (0, i.jsx)(eC, {
                            user: f,
                            product: a,
                            category: s,
                            onClose: r,
                            previewingVariantIndexProps: C,
                            selectedVariantIndex: _
                        }),
                        (0, i.jsxs)('div', {
                            className: b.type === u.Z.AVATAR_DECORATION ? em.collectiblePreviewsContainerWithChat : em.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, i.jsx)(W.Z, {
                                    asset: null !== (t = s.pdpBg) && void 0 !== t ? t : a.banner,
                                    size: (0, ee.ML)(540),
                                    className: em.categoryBanner,
                                    categoryBannerOverride: j
                                }),
                                (0, i.jsx)(ex, {
                                    user: f,
                                    product: null != I ? I : b
                                }),
                                (0, i.jsxs)('div', {
                                    className: em.profilePreviewHeader,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: em.titleImageContainer,
                                            children: (0, i.jsx)('img', {
                                                className: em.titleImage,
                                                style: null == j ? void 0 : j.pdpLogoStyle,
                                                src: (0, O.uV)(s.logo, { size: Q.n }),
                                                alt: s.name
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: em.headerButtonContainer,
                                            children: [
                                                T && (0, i.jsx)(G.B, { skuId: b.skuId }),
                                                (0, i.jsx)(h.olH, {
                                                    onClick: r,
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
