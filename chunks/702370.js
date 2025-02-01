n.d(t, { default: () => ew }), n(47120), n(627341);
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
    f = n(481060),
    h = n(37234),
    C = n(809206),
    x = n(727637),
    p = n(410030),
    g = n(100527),
    P = n(906732),
    _ = n(1585),
    I = n(786761),
    b = n(3148),
    k = n(739566),
    w = n(753206),
    T = n(333867),
    j = n(197115),
    N = n(300284),
    E = n(921813),
    S = n(876917),
    L = n(642619),
    Z = n(484459),
    A = n(25990),
    y = n(594174),
    B = n(626135),
    O = n(74538),
    R = n(335131),
    D = n(1870),
    z = n(429368),
    M = n(884697),
    F = n(72462),
    V = n(890249),
    H = n(228624),
    U = n(188584),
    W = n(635552),
    G = n(905357),
    K = n(724994),
    q = n(328456),
    Y = n(390698),
    Q = n(141011),
    X = n(525518),
    J = n(426171),
    $ = n(224068),
    ee = n(813083),
    et = n(823941),
    en = n(680942),
    ei = n(558060),
    el = n(237031),
    er = n(372654),
    ea = n(453713),
    es = n(616066),
    eo = n(332246),
    ec = n(58201),
    ed = n(361110),
    eu = n(832149),
    em = n(215023),
    ev = n(981631),
    ef = n(474936),
    eh = n(231338),
    eC = n(388032),
    ex = n(147334);
let ep = (e) => {
        let { item: t, user: n, isBundleItem: r = !1 } = e,
            a = l.useRef(null),
            s = (0, x.Z)(a);
        return (0, c.EQ)(t.type)
            .with(u.Z.AVATAR_DECORATION, () =>
                (0, i.jsx)('div', {
                    className: r ? ex.bundleAvatarPreviewContainer : ex.avatarPreviewContainer,
                    children: (0, i.jsx)(es.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(u.Z.PROFILE_EFFECT, () =>
                (0, i.jsx)('div', {
                    className: r ? ex.bundlePfxPreviewContainer : ex.pfxPreviewContainer,
                    ref: a,
                    children: (0, i.jsx)(S.Z, {
                        profileEffectId: t.id,
                        isHovering: s,
                        removeSetHeight: !0
                    })
                })
            )
            .otherwise(() => null);
    },
    eg = (e) => {
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
            className: ex.bundlePreviewContainer,
            children: (0, i.jsx)(f.MyZ, {
                activeSlide: String(r),
                children: t.items.map((e, l) => {
                    let r = String(l),
                        a = null != t.bundledProducts ? t.bundledProducts[l] : void 0,
                        o = '('.concat(l + 1, '/').concat(s, ')');
                    return (0, i.jsx)(
                        f.Mi4,
                        {
                            id: r,
                            children: (0, i.jsxs)('div', {
                                className: ex.bundlePreviewSlide,
                                children: [
                                    (0, i.jsx)(ep, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, i.jsxs)(f.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: ex.bundleSlideTitle,
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
    eP = (e) => {
        let { product: t, user: n } = e;
        return (0, M.x6)(t)
            ? (0, i.jsx)(eg, {
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
    e_ = (e) => {
        var t, n;
        let r;
        let { product: s, user: c, category: x, onClose: g, returnRef: I, previewingVariantIndexProps: b, selectedVariantIndex: k } = e,
            { analyticsLocations: w } = (0, P.ZP)(),
            E = O.ZP.canUseCollectibles(c),
            { previewingVariantIndex: S } = b,
            Z = (0, eo.N)(s, S),
            A = (0, ec.W)(s, k);
        o()(null != A, 'Selected product should not be null');
        let y = (0, K.L)(s),
            { isPurchased: B, isPartiallyOwnedBundle: z } = (0, K.L)(A),
            F = (0, m.e7)([D.Z], () => D.Z.purchases),
            Q = (0, m.e7)([D.Z], () => D.Z.isClaiming === (null == A ? void 0 : A.skuId)),
            X = (0, N.Z)({ analyticsLocations: w }),
            J = (0, p.ZP)(),
            et = (0, v.wj)(J),
            er = (0, M.G1)(A),
            es = (0, M.ql)(A, ev.tuJ.DEFAULT),
            ed = (null == es ? void 0 : es.amount) === 0,
            { firstAvatarDecoration: em, firstProfileEffect: ep } = (0, q.R)(null != Z ? Z : A),
            eg = l.useMemo(() => (0, M.BH)(A, E), [A, E]),
            e_ = (0, V.m)('CollectiblesCollectedModal'),
            eI = (0, M.x6)(A) || e_,
            { handleUseNow: eb, isApplying: ek } = (0, W.W)({
                product: A,
                onSuccess: g
            }),
            ew = (0, H.hv)('CollectiblesProductPreviewInfo'),
            eT = (0, G.T)(A),
            ej = l.useCallback(() => {
                if ((g(), (0, h.xf)(), X(), null != em)) {
                    (0, _.ps)({
                        initialSelectedDecoration: em,
                        analyticsLocations: w
                    });
                    return;
                }
                null != ep &&
                    (0, L.H)({
                        initialSelectedEffectId: ep.id,
                        analyticsLocations: w
                    });
            }, [w, em, ep, g, X]);
        l.useEffect(() => {
            if (null != em) return (0, C.cV)(em), () => (0, C.cV)(void 0);
        }, [em]);
        let { firstAvatarDecoration: eN, firstProfileEffect: eE } = (0, U.k)(A),
            eS =
                A.type === u.Z.BUNDLE
                    ? eC.intl.formatToPlainString(eC.t['jM8/7+'], {
                          avatarDecorationName: null !== (t = null == eN ? void 0 : eN.name) && void 0 !== t ? t : '',
                          profileEffectName: null !== (n = null == eE ? void 0 : eE.name) && void 0 !== n ? n : ''
                      })
                    : A.summary;
        return (0, i.jsxs)('div', {
            className: ex.collectibleInfoContainer,
            children: [
                (0, i.jsx)('div', {
                    className: ex.titleContainer,
                    children: (0, i.jsx)(ee.Z, {
                        category: x,
                        display: 'modal'
                    })
                }),
                (0, i.jsx)(eP, {
                    product: null != Z ? Z : A,
                    user: c
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsxs)('div', {
                            className: ex.description,
                            children: [
                                (0, i.jsx)($.Z, {
                                    product: A,
                                    isDarkText: !et
                                }),
                                (0, i.jsx)(f.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: ex.headingWithItemTypePill,
                                    children: eT
                                }),
                                (0, i.jsx)(f.Text, {
                                    variant: 'text-sm/normal',
                                    children: eS
                                }),
                                y.isPurchased || y.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(Y.U, {
                                          className: ex.priceTag,
                                          isPartiallyPurchased: z
                                      })
                                    : er
                                      ? (0, i.jsx)(f.Text, {
                                            variant: 'text-md/semibold',
                                            className: ex.priceTag,
                                            children: eC.intl.string(eC.t.rt69oq)
                                        })
                                      : (0, i.jsx)(ei.Z, {
                                            product: A,
                                            discount: eg,
                                            isPremiumUser: E,
                                            className: E ? ex.priceTag : ex.priceTagContainer,
                                            nitroUpsell: !E
                                        })
                            ]
                        }),
                        (0, i.jsx)(ea.P, {
                            variantGroupProduct: s,
                            previewingVariantIndexProps: b,
                            className: ex.variantsSwitch,
                            purchases: F
                        }),
                        (0, i.jsx)('div', {
                            className: ex.buttonsContainer,
                            children: (0, i.jsxs)('div', {
                                className: ex.primaryButtons,
                                children: [
                                    !er || E || ed
                                        ? B
                                            ? (0, i.jsx)(f.zxk, {
                                                  className: ex.button,
                                                  look: f.zxk.Looks.FILLED,
                                                  onClick: eI ? eb : ej,
                                                  submitting: ek,
                                                  children: eC.intl.string(eC.t.MAS7uL)
                                              })
                                            : z
                                              ? null
                                              : er
                                                ? (0, i.jsx)(f.zxk, {
                                                      className: ex.button,
                                                      look: f.zxk.Looks.FILLED,
                                                      submitting: Q,
                                                      submittingStartedLabel: eC.intl.string(eC.t['TYw+9v']),
                                                      submittingFinishedLabel: eC.intl.string(eC.t.Pg1UPz),
                                                      onClick: async () => {
                                                          await (0, R.fK)(A.skuId),
                                                              g(),
                                                              (0, eu.Z)({
                                                                  product: A,
                                                                  analyticsLocations: w
                                                              });
                                                      },
                                                      children: eC.intl.string(eC.t.zp6caG)
                                                  })
                                                : (0, i.jsx)(f.zxk, {
                                                      className: ex.button,
                                                      look: f.zxk.Looks.FILLED,
                                                      onClick: () =>
                                                          (0, T.Z)({
                                                              skuId: A.skuId,
                                                              analyticsLocations: w,
                                                              variantsReturnStyle: ew,
                                                              onClose: (e) => (e ? g() : (0, eh.dG)())
                                                          }),
                                                      children: (0, M.x6)(A) ? eC.intl.string(eC.t.V1AWw8) : A.type === u.Z.PROFILE_EFFECT ? eC.intl.string(eC.t.kAeDcH) : eC.intl.string(eC.t.AQ0Ven)
                                                  })
                                        : ((r = eC.intl.string(eC.t.sEAnVF)),
                                          (0, i.jsx)(j.Z, {
                                              subscriptionTier: ef.Si.TIER_2,
                                              fullWidth: !0,
                                              buttonText: r,
                                              onClick: el.v,
                                              onSubscribeModalClose: () => {
                                                  (0, el.T)({
                                                      product: A,
                                                      category: x,
                                                      returnRef: I,
                                                      analyticsLocations: w
                                                  });
                                              }
                                          })),
                                    !er &&
                                        !ed &&
                                        !d.tq &&
                                        (0, i.jsx)(en.Z, {
                                            product: A,
                                            onSuccess: g,
                                            disableCustomColor: !0
                                        })
                                ]
                            })
                        }),
                        (0, i.jsx)(f.Text, {
                            className: a()(ex.disclaimer, !et && ex.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: B ? null : er ? eC.intl.string(eC.t.O2K0xM) : (0, M.x6)(A) ? eC.intl.string(eC.t.Ifvd7O) : A.type === u.Z.PROFILE_EFFECT ? eC.intl.string(eC.t.pxunjo) : eC.intl.string(eC.t.IA8coq)
                        })
                    ]
                })
            ]
        });
    },
    eI = (e) => {
        let { product: t, user: n } = e,
            l = O.ZP.canUsePremiumProfileCustomization(n),
            r = (0, m.cj)([A.Z], () => A.Z.getAllPending()),
            a = t.type === u.Z.AVATAR_DECORATION,
            [s] = t.items,
            { firstAvatarDecoration: o, firstProfileEffect: c } = (0, q.R)(t),
            d = null != c;
        return (0, i.jsxs)('div', {
            className: (null == s ? void 0 : s.type) === u.Z.AVATAR_DECORATION ? ex.previewsContainerInner : ex.profileEffectPreviewsContainerInner,
            children: [
                (0, i.jsx)(E.Z, {
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
                a && (0, i.jsx)(ek, { user: n })
            ]
        });
    },
    eb = (e) => {
        let { author: t } = e;
        return (0, I.e5)({
            ...(0, b.ZP)({
                author: t,
                channelId: '1337',
                content: eC.intl.string(eC.t.d5YwKy)
            }),
            state: ev.yb.SENT,
            id: '0'
        });
    },
    ek = (e) => {
        let { user: t } = e,
            n = eb({ author: t });
        return (0, i.jsx)(f.Rny, {
            children: (0, i.jsxs)(f.Zbd, {
                className: ex.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, i.jsx)(
                        w.Z,
                        {
                            className: ex.mockMessage,
                            author: (0, k.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, i.jsxs)('div', {
                        className: ex.mockInput,
                        children: [
                            (0, i.jsx)(f.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: ex.mockInputButton
                            }),
                            (0, i.jsx)(f.EO4, {
                                size: 'md',
                                color: 'currentColor',
                                className: ex.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    },
    ew = (e) => {
        var t;
        let { transitionState: n, onClose: r, product: a, category: s, returnRef: c, analyticsSource: d, analyticsLocations: v } = e,
            h = (0, m.e7)([y.default], () => y.default.getCurrentUser()),
            C = (0, ed.f)(a),
            { previewingVariantIndex: x } = C,
            p = (0, m.e7)([D.Z], () => D.Z.purchases),
            _ = (0, z.o)(a, p),
            I = (0, eo.N)(a, x),
            b = (0, ec.W)(a, _);
        o()(null != b, 'Selected product should not be null');
        let { analyticsLocations: k } = (0, P.ZP)([...v, g.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, J.u9)(b.skuId);
        let [w] = b.items,
            T = (0, F.s)('CollectiblesShopProductDetailsModal');
        if (
            (l.useEffect(() => {
                null != h && (0, Z.Z)(h.id, h.getAvatarURL(void 0, 80));
            }, [h]),
            l.useEffect(() => {
                let e = (null == w ? void 0 : w.type) === u.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                B.default.track(ev.rMx.OPEN_MODAL, {
                    type: ev.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: d,
                    location_stack: k,
                    sku_id: b.skuId,
                    product_type: e
                }),
                    b.items.map(R.oK);
            }, [d, k, null == w ? void 0 : w.type, b.skuId, b.items]),
            null == h)
        )
            return null;
        let j = (0, em.ZS)(s.skuId);
        return (0, i.jsx)(P.Gt, {
            value: k,
            children: (0, i.jsx)(f.Y0X, {
                hideShadow: !0,
                className: ex.modalRoot,
                returnRef: c,
                transitionState: n,
                size: f.CgR.DYNAMIC,
                children: (0, i.jsxs)(f.hzk, {
                    className: ex.modalContent,
                    children: [
                        (0, i.jsx)(e_, {
                            user: h,
                            product: a,
                            category: s,
                            onClose: r,
                            previewingVariantIndexProps: C,
                            selectedVariantIndex: _
                        }),
                        (0, i.jsxs)('div', {
                            className: b.type === u.Z.AVATAR_DECORATION ? ex.collectiblePreviewsContainerWithChat : ex.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, i.jsx)(Q.Z, {
                                    asset: null !== (t = s.pdpBg) && void 0 !== t ? t : a.banner,
                                    size: (0, er.ML)(540),
                                    className: ex.categoryBanner,
                                    categoryBannerOverride: j
                                }),
                                (0, i.jsx)(eI, {
                                    user: h,
                                    product: null != I ? I : b
                                }),
                                (0, i.jsxs)('div', {
                                    className: ex.profilePreviewHeader,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: ex.titleImageContainer,
                                            children: (0, i.jsx)('img', {
                                                className: ex.titleImage,
                                                style: null == j ? void 0 : j.pdpLogoStyle,
                                                src: (0, M.uV)(s.logo, { size: et.n }),
                                                alt: s.name
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: ex.headerButtonContainer,
                                            children: [
                                                T && (0, i.jsx)(X.B, { skuId: b.skuId }),
                                                (0, i.jsx)(f.olH, {
                                                    onClick: r,
                                                    className: ex.modalCloseButton,
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
