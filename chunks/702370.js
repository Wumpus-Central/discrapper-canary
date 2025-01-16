n.r(t), n(47120), n(627341);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    s = n.n(o),
    c = n(278074),
    u = n(873546),
    d = n(979554),
    m = n(399606),
    f = n(780384),
    v = n(481060),
    C = n(37234),
    h = n(809206),
    p = n(727637),
    x = n(410030),
    g = n(100527),
    I = n(906732),
    P = n(1585),
    _ = n(786761),
    b = n(3148),
    w = n(739566),
    T = n(753206),
    j = n(333867),
    k = n(197115),
    N = n(300284),
    E = n(921813),
    S = n(876917),
    L = n(642619),
    A = n(484459),
    B = n(25990),
    Z = n(594174),
    y = n(626135),
    O = n(74538),
    R = n(335131),
    D = n(1870),
    M = n(429368),
    F = n(884697),
    V = n(72462),
    H = n(890249),
    U = n(228624),
    z = n(188584),
    W = n(635552),
    G = n(905357),
    K = n(724994),
    q = n(328456),
    Q = n(390698),
    Y = n(141011),
    J = n(525518),
    X = n(426171),
    $ = n(224068),
    ee = n(813083),
    et = n(823941),
    en = n(680942),
    ei = n(558060),
    el = n(237031),
    er = n(372654),
    ea = n(453713),
    eo = n(616066),
    es = n(332246),
    ec = n(58201),
    eu = n(361110),
    ed = n(832149),
    em = n(215023),
    ef = n(981631),
    ev = n(474936),
    eC = n(231338),
    eh = n(388032),
    ep = n(147334);
let ex = (e) => {
        let { item: t, user: n, isBundleItem: r = !1 } = e,
            a = l.useRef(null),
            o = (0, p.Z)(a);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, i.jsx)('div', {
                    className: r ? ep.bundleAvatarPreviewContainer : ep.avatarPreviewContainer,
                    children: (0, i.jsx)(eo.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, i.jsx)('div', {
                    className: r ? ep.bundlePfxPreviewContainer : ep.pfxPreviewContainer,
                    ref: a,
                    children: (0, i.jsx)(S.Z, {
                        profileEffectId: t.id,
                        isHovering: o,
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
        let o = t.items.length;
        return (0, i.jsx)('div', {
            className: ep.bundlePreviewContainer,
            children: (0, i.jsx)(v.Slides, {
                activeSlide: String(r),
                children: t.items.map((e, l) => {
                    let r = String(l),
                        a = null != t.bundledProducts ? t.bundledProducts[l] : void 0,
                        s = '('.concat(l + 1, '/').concat(o, ')');
                    return (0, i.jsx)(
                        v.Slide,
                        {
                            id: r,
                            children: (0, i.jsxs)('div', {
                                className: ep.bundlePreviewSlide,
                                children: [
                                    (0, i.jsx)(ex, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, i.jsxs)(v.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: ep.bundleSlideTitle,
                                        children: [null == a ? void 0 : a.name, ' ', s]
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
    eI = (e) => {
        let { product: t, user: n } = e;
        return (0, F.x6)(t)
            ? (0, i.jsx)(eg, {
                  product: t,
                  user: n
              })
            : t.items.length > 0
              ? (0, i.jsx)(ex, {
                    item: t.items[0],
                    user: n
                })
              : null;
    },
    eP = (e) => {
        var t, n;
        let { product: r, user: o, category: c, onClose: p, returnRef: g, previewingVariantIndexProps: _, selectedVariantIndex: b } = e,
            { analyticsLocations: w } = (0, I.ZP)(),
            T = O.ZP.canUseCollectibles(o),
            { previewingVariantIndex: E } = _,
            S = (0, es.N)(r, E),
            A = (0, ec.W)(r, b);
        s()(null != A, 'Selected product should not be null');
        let B = (0, K.L)(r),
            { isPurchased: Z, isPartiallyOwnedBundle: y } = (0, K.L)(A),
            M = (0, m.e7)([D.Z], () => D.Z.purchases),
            V = (0, m.e7)([D.Z], () => D.Z.isClaiming === (null == A ? void 0 : A.skuId)),
            Y = (0, N.Z)({ analyticsLocations: w }),
            J = (0, x.ZP)(),
            X = (0, f.wj)(J),
            et = (0, F.G1)(A),
            er = (0, F.ql)(A, ef.tuJ.DEFAULT),
            eo = (null == er ? void 0 : er.amount) === 0,
            { firstAvatarDecoration: eu, firstProfileEffect: em } = (0, q.R)(null != S ? S : A),
            ex = l.useMemo(() => (0, F.BH)(A, T), [A, T]),
            eg = (0, H.m)('CollectiblesCollectedModal'),
            eP = (0, F.x6)(A) || eg,
            { handleUseNow: e_, isApplying: eb } = (0, W.W)({
                product: A,
                onSuccess: p
            }),
            ew = (0, U.hv)('CollectiblesProductPreviewInfo'),
            eT = (0, G.T)(A),
            ej = l.useCallback(() => {
                if ((p(), (0, C.xf)(), Y(), null != eu)) {
                    (0, P.ps)({
                        initialSelectedDecoration: eu,
                        analyticsLocations: w
                    });
                    return;
                }
                null != em &&
                    (0, L.H)({
                        initialSelectedEffectId: em.id,
                        analyticsLocations: w
                    });
            }, [w, eu, em, p, Y]);
        l.useEffect(() => {
            if (null != eu) return (0, h.cV)(eu), () => (0, h.cV)(void 0);
        }, [eu]);
        let ek = (e) =>
                (0, i.jsx)(k.Z, {
                    subscriptionTier: ev.Si.TIER_2,
                    fullWidth: !0,
                    buttonText: e,
                    onClick: el.v,
                    onSubscribeModalClose: () => {
                        (0, el.T)({
                            product: A,
                            category: c,
                            returnRef: g,
                            analyticsLocations: w
                        });
                    }
                }),
            { firstAvatarDecoration: eN, firstProfileEffect: eE } = (0, z.k)(A),
            eS =
                A.type === d.Z.BUNDLE
                    ? eh.intl.formatToPlainString(eh.t['jM8/7+'], {
                          avatarDecorationName: null !== (t = null == eN ? void 0 : eN.name) && void 0 !== t ? t : '',
                          profileEffectName: null !== (n = null == eE ? void 0 : eE.name) && void 0 !== n ? n : ''
                      })
                    : A.summary;
        return (0, i.jsxs)('div', {
            className: ep.collectibleInfoContainer,
            children: [
                (0, i.jsx)('div', {
                    className: ep.titleContainer,
                    children: (0, i.jsx)(ee.Z, {
                        category: c,
                        display: 'modal'
                    })
                }),
                (0, i.jsx)(eI, {
                    product: null != S ? S : A,
                    user: o
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsxs)('div', {
                            className: ep.description,
                            children: [
                                (0, i.jsx)($.Z, {
                                    product: A,
                                    isDarkText: !X
                                }),
                                (0, i.jsx)(v.Heading, {
                                    variant: 'heading-xl/extrabold',
                                    className: ep.headingWithItemTypePill,
                                    children: eT
                                }),
                                (0, i.jsx)(v.Text, {
                                    variant: 'text-sm/normal',
                                    children: eS
                                }),
                                B.isPurchased || B.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(Q.U, {
                                          className: ep.priceTag,
                                          isPartiallyPurchased: y
                                      })
                                    : et
                                      ? (0, i.jsx)(v.Text, {
                                            variant: 'text-md/semibold',
                                            className: ep.priceTag,
                                            children: eh.intl.string(eh.t.rt69oq)
                                        })
                                      : (0, i.jsx)(ei.Z, {
                                            product: A,
                                            discount: ex,
                                            isPremiumUser: T,
                                            className: T ? ep.priceTag : ep.priceTagContainer,
                                            nitroUpsell: !T
                                        })
                            ]
                        }),
                        (0, i.jsx)(ea.P, {
                            variantGroupProduct: r,
                            previewingVariantIndexProps: _,
                            className: ep.variantsSwitch,
                            purchases: M
                        }),
                        (0, i.jsx)('div', {
                            className: ep.buttonsContainer,
                            children: (0, i.jsxs)('div', {
                                className: ep.primaryButtons,
                                children: [
                                    !et || T || eo
                                        ? Z
                                            ? (0, i.jsx)(v.Button, {
                                                  className: ep.button,
                                                  look: v.Button.Looks.FILLED,
                                                  onClick: eP ? e_ : ej,
                                                  submitting: eb,
                                                  children: eh.intl.string(eh.t.MAS7uL)
                                              })
                                            : y
                                              ? null
                                              : et
                                                ? (0, i.jsx)(v.Button, {
                                                      className: ep.button,
                                                      look: v.Button.Looks.FILLED,
                                                      submitting: V,
                                                      submittingStartedLabel: eh.intl.string(eh.t['TYw+9v']),
                                                      submittingFinishedLabel: eh.intl.string(eh.t.Pg1UPz),
                                                      onClick: async () => {
                                                          await (0, R.fK)(A.skuId),
                                                              p(),
                                                              (0, ed.Z)({
                                                                  product: A,
                                                                  analyticsLocations: w
                                                              });
                                                      },
                                                      children: eh.intl.string(eh.t.zp6caG)
                                                  })
                                                : (0, i.jsx)(v.Button, {
                                                      className: ep.button,
                                                      look: v.Button.Looks.FILLED,
                                                      onClick: () =>
                                                          (0, j.Z)({
                                                              skuId: A.skuId,
                                                              analyticsLocations: w,
                                                              variantsReturnStyle: ew,
                                                              onClose: (e) => (e ? p() : (0, eC.dG)())
                                                          }),
                                                      children: (0, F.x6)(A) ? eh.intl.string(eh.t.V1AWw8) : A.type === d.Z.PROFILE_EFFECT ? eh.intl.string(eh.t.kAeDcH) : eh.intl.string(eh.t.AQ0Ven)
                                                  })
                                        : ek(eh.intl.string(eh.t.sEAnVF)),
                                    !et &&
                                        !eo &&
                                        !u.tq &&
                                        (0, i.jsx)(en.Z, {
                                            product: A,
                                            onSuccess: p,
                                            disableCustomColor: !0
                                        })
                                ]
                            })
                        }),
                        (0, i.jsx)(v.Text, {
                            className: a()(ep.disclaimer, !X && ep.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: Z ? null : et ? eh.intl.string(eh.t.O2K0xM) : (0, F.x6)(A) ? eh.intl.string(eh.t.Ifvd7O) : A.type === d.Z.PROFILE_EFFECT ? eh.intl.string(eh.t.pxunjo) : eh.intl.string(eh.t.IA8coq)
                        })
                    ]
                })
            ]
        });
    },
    e_ = (e) => {
        let { product: t, user: n } = e,
            l = O.ZP.canUsePremiumProfileCustomization(n),
            r = (0, m.cj)([B.Z], () => B.Z.getAllPending()),
            a = t.type === d.Z.AVATAR_DECORATION,
            [o] = t.items,
            { firstAvatarDecoration: s, firstProfileEffect: c } = (0, q.R)(t),
            u = null != c;
        return (0, i.jsxs)('div', {
            className: (null == o ? void 0 : o.type) === d.Z.AVATAR_DECORATION ? ep.previewsContainerInner : ep.profileEffectPreviewsContainerInner,
            children: [
                (0, i.jsx)(E.Z, {
                    ...r,
                    user: n,
                    canUsePremiumCustomization: l,
                    pendingAvatarDecoration: s,
                    pendingProfileEffectId: null == c ? void 0 : c.id,
                    disabledInputs: !0,
                    hideMessageInput: !u,
                    hideExampleButton: !0,
                    hideCustomStatus: !0,
                    hideBioSection: a
                }),
                a && (0, i.jsx)(ew, { user: n })
            ]
        });
    },
    eb = (e) => {
        let { author: t } = e;
        return (0, _.e5)({
            ...(0, b.ZP)({
                author: t,
                channelId: '1337',
                content: eh.intl.string(eh.t.d5YwKy)
            }),
            state: ef.yb.SENT,
            id: '0'
        });
    },
    ew = (e) => {
        let { user: t } = e,
            n = eb({ author: t });
        return (0, i.jsx)(v.FocusBlock, {
            children: (0, i.jsxs)(v.Card, {
                className: ep.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, i.jsx)(
                        T.Z,
                        {
                            className: ep.mockMessage,
                            author: (0, w.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, i.jsxs)('div', {
                        className: ep.mockInput,
                        children: [
                            (0, i.jsx)(v.CirclePlusIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: ep.mockInputButton
                            }),
                            (0, i.jsx)(v.ReactionIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: ep.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    };
t.default = (e) => {
    var t;
    let { transitionState: n, onClose: r, product: a, category: o, returnRef: c, analyticsSource: u, analyticsLocations: f } = e,
        C = (0, m.e7)([Z.default], () => Z.default.getCurrentUser()),
        h = (0, eu.f)(a),
        { previewingVariantIndex: p } = h,
        x = (0, m.e7)([D.Z], () => D.Z.purchases),
        P = (0, M.o)(a, x),
        _ = (0, es.N)(a, p),
        b = (0, ec.W)(a, P);
    s()(null != b, 'Selected product should not be null');
    let { analyticsLocations: w } = (0, I.ZP)([...f, g.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, X.u9)(b.skuId);
    let [T] = b.items,
        j = (0, V.s)('CollectiblesShopProductDetailsModal');
    if (
        (l.useEffect(() => {
            null != C && (0, A.Z)(C.id, C.getAvatarURL(void 0, 80));
        }, [C]),
        l.useEffect(() => {
            let e = (null == T ? void 0 : T.type) === d.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
            y.default.track(ef.rMx.OPEN_MODAL, {
                type: ef.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: u,
                location_stack: w,
                sku_id: b.skuId,
                product_type: e
            }),
                b.items.map(R.oK);
        }, [u, w, null == T ? void 0 : T.type, b.skuId, b.items]),
        null == C)
    )
        return null;
    let k = (0, em.ZS)(o.skuId);
    return (0, i.jsx)(I.Gt, {
        value: w,
        children: (0, i.jsx)(v.ModalRoot, {
            hideShadow: !0,
            className: ep.modalRoot,
            returnRef: c,
            transitionState: n,
            size: v.ModalSize.DYNAMIC,
            children: (0, i.jsxs)(v.ModalContent, {
                className: ep.modalContent,
                children: [
                    (0, i.jsx)(eP, {
                        user: C,
                        product: a,
                        category: o,
                        onClose: r,
                        previewingVariantIndexProps: h,
                        selectedVariantIndex: P
                    }),
                    (0, i.jsxs)('div', {
                        className: b.type === d.Z.AVATAR_DECORATION ? ep.collectiblePreviewsContainerWithChat : ep.collectiblePreviewsContainerNoChat,
                        children: [
                            (0, i.jsx)(Y.Z, {
                                asset: null !== (t = o.pdpBg) && void 0 !== t ? t : a.banner,
                                size: (0, er.ML)(540),
                                className: ep.categoryBanner,
                                categoryBannerOverride: k
                            }),
                            (0, i.jsx)(e_, {
                                user: C,
                                product: null != _ ? _ : b
                            }),
                            (0, i.jsxs)('div', {
                                className: ep.profilePreviewHeader,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: ep.titleImageContainer,
                                        children: (0, i.jsx)('img', {
                                            className: ep.titleImage,
                                            style: null == k ? void 0 : k.pdpLogoStyle,
                                            src: (0, F.uV)(o.logo, { size: et.n }),
                                            alt: o.name
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: ep.headerButtonContainer,
                                        children: [
                                            j && (0, i.jsx)(J.B, { skuId: b.skuId }),
                                            (0, i.jsx)(v.ModalCloseButton, {
                                                onClick: r,
                                                className: ep.modalCloseButton,
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
