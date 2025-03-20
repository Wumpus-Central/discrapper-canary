n.d(t, { default: () => eW }), n(47120), n(627341), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(512722),
    s = n.n(o),
    c = n(278074),
    u = n(873546),
    d = n(979554),
    m = n(399606),
    p = n(780384),
    f = n(481060),
    v = n(809206),
    h = n(727637),
    b = n(410030),
    P = n(100527),
    x = n(906732),
    g = n(570908),
    C = n(786761),
    j = n(3148),
    w = n(739566),
    O = n(753206),
    I = n(333867),
    N = n(197115),
    _ = n(921813),
    k = n(876917),
    S = n(643879),
    E = n(484459),
    y = n(822857),
    T = n(82856),
    L = n(960919),
    Z = n(275388),
    A = n(25990),
    R = n(594174),
    B = n(626135),
    W = n(74538),
    D = n(937615),
    z = n(335131),
    M = n(1870),
    H = n(429368),
    F = n(884697),
    U = n(72462),
    V = n(228624),
    G = n(188584),
    K = n(635552),
    q = n(905357),
    Y = n(724994),
    X = n(328456),
    Q = n(390698),
    J = n(141011),
    $ = n(525518),
    ee = n(426171),
    et = n(224068),
    en = n(813083),
    er = n(680942),
    ei = n(558060),
    ea = n(237031),
    el = n(372654),
    eo = n(259673),
    es = n(508925),
    ec = n(755419),
    eu = n(953405),
    ed = n(453713),
    em = n(616066),
    ep = n(22267),
    ef = n(332246),
    ev = n(58201),
    eh = n(794324),
    eb = n(361110),
    eP = n(956472),
    ex = n(832149),
    eg = n(215023),
    eC = n(981631),
    ej = n(474936),
    ew = n(231338),
    eO = n(388032),
    eI = n(885611);
function eN(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function e_(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ek = {
        mallow: {
            name: eO.NW.string(eO.t.SbKDHh),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png'
        },
        phibi: {
            name: eO.NW.string(eO.t['LMSo+P']),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png'
        },
        locke: {
            name: eO.NW.string(eO.t.g5Dump),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png'
        },
        cherry: {
            name: eO.NW.string(eO.t.p5Z3Oj),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png'
        },
        boom: {
            name: eO.NW.string(eO.t.ncsliY),
            avatarSrc: 'https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png'
        }
    },
    eS = (e) => {
        let { item: t, user: n, isBundleItem: a = !1 } = e,
            l = i.useRef(null),
            o = (0, h.Z)(l);
        return (0, c.EQ)(t.type)
            .with(d.Z.AVATAR_DECORATION, () =>
                (0, r.jsx)('div', {
                    className: a ? eI.bundleAvatarPreviewContainer : eI.avatarPreviewContainer,
                    children: (0, r.jsx)(em.R, {
                        user: n,
                        item: t
                    })
                })
            )
            .with(d.Z.PROFILE_EFFECT, () =>
                (0, r.jsx)('div', {
                    className: a ? eI.bundlePfxPreviewContainer : eI.pfxPreviewContainer,
                    ref: l,
                    children: (0, r.jsx)(k.Z, {
                        profileEffectId: t.id,
                        isHovering: o,
                        removeSetHeight: !0
                    })
                })
            )
            .with(d.Z.NAMEPLATE, () =>
                (0, r.jsx)('div', {
                    ref: l,
                    className: eI.nameplatePreviewContainer,
                    children: (0, r.jsx)(ep.Z, {
                        className: eI.nameplatePreview,
                        user: n,
                        nameplate: t,
                        isHighlighted: o
                    })
                })
            )
            .otherwise(() => null);
    },
    eE = (e) => {
        let { product: t, user: n } = e,
            [a, l] = i.useState(0);
        i.useEffect(() => {
            let e = setInterval(() => {
                t.items.length > 0 && l((e) => (e + 1) % t.items.length);
            }, 5000);
            return () => {
                clearInterval(e);
            };
        }, [t.skuId, t.items.length, n.id]);
        let o = t.items.length;
        return (0, r.jsx)('div', {
            className: eI.bundlePreviewContainer,
            children: (0, r.jsx)(f.MyZ, {
                activeSlide: String(a),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        l = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        s = '('.concat(i + 1, '/').concat(o, ')');
                    return (0, r.jsx)(
                        f.Mi4,
                        {
                            id: a,
                            children: (0, r.jsxs)('div', {
                                className: eI.bundlePreviewSlide,
                                children: [
                                    (0, r.jsx)(eS, {
                                        item: e,
                                        user: n,
                                        isBundleItem: !0
                                    }),
                                    (0, r.jsxs)(f.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: eI.bundleSlideTitle,
                                        children: [null == l ? void 0 : l.name, ' ', s]
                                    })
                                ]
                            })
                        },
                        a
                    );
                })
            })
        });
    },
    ey = (e) => {
        let { product: t, user: n } = e;
        return (0, F.x6)(t)
            ? (0, r.jsx)(eE, {
                  product: t,
                  user: n
              })
            : (0, ec.o0)(t.skuId)
              ? (0, r.jsx)(es.b, {
                    animationState: 'on_hover',
                    product: t
                })
              : t.items.length > 0
                ? (0, r.jsx)(eS, {
                      item: t.items[0],
                      user: n
                  })
                : null;
    },
    eT = (e) => {
        var t, n;
        let a;
        let { product: o, user: c, category: h, shouldCheckoutWithOrbs: P, onClose: g, returnRef: C, previewingVariantIndexProps: j, selectedVariantIndex: w, tab: O } = e,
            { analyticsLocations: _ } = (0, x.ZP)(),
            k = W.ZP.canUseCollectibles(c),
            { previewingVariantIndex: S } = j,
            E = (0, ef.N)(o, S),
            A = (0, ev.W)(o, w);
        s()(null != A, 'Selected product should not be null');
        let R = (0, Y.L)(o),
            { isPurchased: B, isPartiallyOwnedBundle: H } = (0, Y.L)(A),
            U = (0, F.ne)({
                product: A,
                isPartiallyOwnedBundle: H,
                isPurchased: B
            }),
            J = (0, m.e7)([M.Z], () => M.Z.purchases),
            $ = (0, m.e7)([M.Z], () => M.Z.isClaiming === (null == A ? void 0 : A.skuId)),
            ee = (0, b.ZP)(),
            el = (0, p.wj)(ee),
            eo = (0, F.G1)(A),
            es = (0, F.ql)(A, eC.tuJ.DEFAULT),
            ec = (null == es ? void 0 : es.amount) === 0,
            { firstAvatarDecoration: em } = (0, X.R)(null != E ? E : A),
            ep = i.useMemo(() => (0, F.BH)(A, k), [A, k]),
            { handleUseNow: eh, isApplying: eb } = (0, K.W)({
                product: A,
                onSuccess: g
            }),
            eg = (0, V.hv)('CollectiblesProductPreviewInfo'),
            eN = (0, q.T)(A),
            { enabled: e_ } = (0, y.W)({ location: 'collectibles_shop_product_details_modal' }),
            {
                checkoutEligiblePrices: ek,
                isOrbExclusive: eS,
                hasSufficientOrbs: eE
            } = (0, eP.Ip)({
                product: A,
                isPremiumUser: k,
                tab: O
            }),
            eT = i.useCallback(
                () =>
                    (0, I.Z)({
                        skuId: A.skuId,
                        analyticsLocations: _,
                        variantsReturnStyle: eg,
                        onClose: (e) => (e ? g() : (0, ew.dG)())
                    }),
                [_, g, A.skuId, eg]
            );
        i.useEffect(() => {
            if (null != em) return (0, v.cV)(em), () => (0, v.cV)(void 0);
        }, [em]);
        let eL = (e, t) =>
                (0, r.jsx)(f.zxk, {
                    innerClassName: eI.button,
                    look: f.zxk.Looks.FILLED,
                    onClick: () => {
                        (0, Z.q)({
                            skuId: A.skuId,
                            onCheckoutSuccess: (e) => {
                                var t;
                                let { entitlements: n } = e;
                                g(!0),
                                    (0, z.qg)({
                                        variantsReturnStyle: eg,
                                        location: 'collectible_checkout_with_orb'
                                    }),
                                    (0, ex.Z)({
                                        product: A,
                                        analyticsLocations: _,
                                        onCloseCallback: () => {
                                            (0, T.vp)();
                                        },
                                        itemConsumed: null === (t = n[0]) || void 0 === t ? void 0 : t.consumed
                                    });
                            },
                            analyticsLocations: _
                        });
                    },
                    disabled: !eE,
                    color: t ? f.zxk.Colors.BRAND : f.zxk.Colors.PRIMARY,
                    children: eO.NW.format(eO.t.kAgx5O, {
                        orbPrice: e.amount,
                        orbIconHook: () => (0, r.jsx)(L.Z, {})
                    })
                }),
            eZ = (e, t) => {
                let n = !eo && !ec && !u.tq && !eS && U && A.type !== d.Z.NAMEPLATE,
                    i = t ? f.zxk.Colors.BRAND : f.zxk.Colors.PRIMARY,
                    a = (0, F.x6)(A) ? eO.NW.string(eO.t.V1AWw8) : A.type === d.Z.PROFILE_EFFECT ? eO.NW.string(eO.t.kAeDcH) : A.type === d.Z.NAMEPLATE ? eO.NW.string(eO.t.H3vhqa) : eO.NW.string(eO.t.AQ0Ven),
                    l = e_ ? eO.NW.formatToPlainString(eO.t['cNSL/v'], { price: (0, D.T4)(e.amount, e.currency) }) : a;
                return (0, r.jsxs)('div', {
                    className: eI.checkoutButtonsRow,
                    children: [
                        (0, r.jsx)(f.zxk, {
                            className: eI.primaryButton,
                            innerClassName: eI.button,
                            look: f.zxk.Looks.FILLED,
                            onClick: eT,
                            color: i,
                            children: l
                        }),
                        n &&
                            (0, r.jsx)(er.Z, {
                                product: A,
                                onSuccess: g,
                                color: i
                            })
                    ]
                });
            },
            { firstAvatarDecoration: eA, firstProfileEffect: eR } = (0, G.k)(A),
            eB =
                A.type === d.Z.BUNDLE
                    ? eO.NW.formatToPlainString(eO.t['jM8/7+'], {
                          avatarDecorationName: null !== (t = null == eA ? void 0 : eA.name) && void 0 !== t ? t : '',
                          profileEffectName: null !== (n = null == eR ? void 0 : eR.name) && void 0 !== n ? n : ''
                      })
                    : A.summary;
        return (0, r.jsxs)('div', {
            className: eI.collectibleInfoContainer,
            children: [
                (0, r.jsx)('div', {
                    className: eI.titleContainer,
                    children: (0, r.jsx)(en.Z, {
                        category: h,
                        display: 'modal'
                    })
                }),
                (0, r.jsx)(ey, {
                    product: null != E ? E : A,
                    user: c
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: eI.description,
                            children: [
                                (0, r.jsx)(et.Z, {
                                    product: A,
                                    isDarkText: !el,
                                    isOrbExclusive: eS
                                }),
                                (0, r.jsx)(f.X6q, {
                                    variant: 'heading-xl/extrabold',
                                    className: eI.headingWithItemTypePill,
                                    children: eN
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-sm/normal',
                                    children: eB
                                }),
                                R.isPurchased || R.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(Q.U, {
                                          className: eI.priceTag,
                                          isPartiallyPurchased: H
                                      })
                                    : eo
                                      ? (0, r.jsx)(f.Text, {
                                            variant: 'text-md/semibold',
                                            className: eI.priceTag,
                                            children: eO.NW.string(eO.t.rt69oq)
                                        })
                                      : e_
                                        ? (0, r.jsx)(eu.a, {
                                              prices: ek,
                                              product: A,
                                              isPremiumUser: k,
                                              discount: ep
                                          })
                                        : (0, r.jsx)(ei.Z, {
                                              product: A,
                                              discount: ep,
                                              isPremiumUser: k,
                                              className: k ? eI.priceTag : eI.priceTagContainer,
                                              nitroUpsell: !k
                                          })
                            ]
                        }),
                        (0, r.jsx)(ed.P, {
                            variantGroupProduct: o,
                            previewingVariantIndexProps: j,
                            className: eI.variantsSwitch,
                            purchases: J
                        }),
                        (0, r.jsx)('div', {
                            className: eI.buttonsContainer,
                            children:
                                !eo || k || ec
                                    ? U
                                        ? B
                                            ? (0, r.jsx)(f.zxk, {
                                                  className: eI.button,
                                                  look: f.zxk.Looks.FILLED,
                                                  onClick: eh,
                                                  submitting: eb,
                                                  children: eO.NW.string(eO.t.MAS7uL)
                                              })
                                            : eo
                                              ? (0, r.jsx)(f.zxk, {
                                                    className: eI.button,
                                                    look: f.zxk.Looks.FILLED,
                                                    submitting: $,
                                                    submittingStartedLabel: eO.NW.string(eO.t['TYw+9v']),
                                                    submittingFinishedLabel: eO.NW.string(eO.t.Pg1UPz),
                                                    onClick: async () => {
                                                        await (0, z.fK)(A.skuId),
                                                            g(),
                                                            (0, ex.Z)({
                                                                product: A,
                                                                analyticsLocations: _
                                                            });
                                                    },
                                                    children: eO.NW.string(eO.t.zp6caG)
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: ek.map((e, t) => {
                                                        let n = 0 === t;
                                                        return e.currency === ew.pK.DISCORD_ORB ? eL(e, n) : eZ(e, n);
                                                    })
                                                })
                                        : null
                                    : ((a = eO.NW.string(eO.t.sEAnVF)),
                                      (0, r.jsx)(N.Z, {
                                          subscriptionTier: ej.Si.TIER_2,
                                          fullWidth: !0,
                                          buttonText: a,
                                          onClick: ea.v,
                                          onSubscribeModalClose: () => {
                                              (0, ea.T)({
                                                  product: A,
                                                  category: h,
                                                  shouldCheckoutWithOrbs: P,
                                                  returnRef: C,
                                                  analyticsLocations: _
                                              });
                                          }
                                      }))
                        }),
                        (0, r.jsx)(f.Text, {
                            className: l()(eI.disclaimer, !el && eI.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: eo && !B ? eO.NW.string(eO.t.O2K0xM) : null
                        })
                    ]
                })
            ]
        });
    },
    eL = (e) => {
        let { user: t } = e;
        return (0, r.jsx)('div', {
            className: eI.nameplateRightPanePreviewAvatarContainer,
            children: (0, r.jsx)(g.Z, {
                avatar: (0, r.jsx)(f.qEK, {
                    src: t.avatarSrc,
                    size: f.EFr.SIZE_32,
                    'aria-label': t.name,
                    status: f.Skl.ONLINE
                }),
                name: t.name,
                selected: !1,
                innerClassName: eI.nameplateRightPanePreviewAvatarInner
            })
        });
    },
    eZ = (e) => {
        let { user: t, nameplate: n } = e;
        return (0, r.jsxs)('div', {
            className: eI.nameplateRightPanePreviewContainer,
            children: [
                (0, r.jsx)(eL, { user: ek.mallow }),
                (0, r.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: eI.namplateRightPanePreviewSectionGroup,
                    children: [eO.NW.string(eO.t['yzW/fX']), ' - 3']
                }),
                (0, r.jsx)(eL, { user: ek.phibi }),
                (0, r.jsx)('div', {
                    className: eI.nameplateRightPanePreviewAvatarContainer,
                    children: (0, r.jsx)(ep.Z, {
                        className: eI.nameplatePreview,
                        user: t,
                        nameplate: n,
                        showStatus: !0,
                        isHighlighted: !0
                    })
                }),
                (0, r.jsx)(eL, { user: ek.locke }),
                (0, r.jsxs)(f.Text, {
                    variant: 'text-sm/semibold',
                    className: eI.namplateRightPanePreviewSectionGroup,
                    children: [eO.NW.string(eO.t['NG43//']), ' - 12']
                }),
                (0, r.jsx)(eL, { user: ek.boom }),
                (0, r.jsx)(eL, { user: ek.cherry })
            ]
        });
    },
    eA = (e) => {
        let { product: t, user: n } = e,
            i = W.ZP.canUsePremiumProfileCustomization(n),
            a = (0, m.cj)([A.Z], () => A.Z.getAllPending()),
            { pendingAvatar: l } = a,
            o = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(a, ['pendingAvatar']),
            s = (0, S.SD)({
                userId: n.id,
                image: l
            }),
            c = t.type === d.Z.AVATAR_DECORATION,
            [u] = t.items,
            { firstAvatarDecoration: p, firstProfileEffect: f } = (0, X.R)(t),
            v = null != f;
        return (0, r.jsx)('div', {
            className: (null == u ? void 0 : u.type) === d.Z.AVATAR_DECORATION ? eI.previewsContainerInner : eI.profileEffectPreviewsContainerInner,
            children:
                (null == u ? void 0 : u.type) === d.Z.NAMEPLATE
                    ? (0, r.jsx)(eZ, {
                          user: n,
                          nameplate: u
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  _.Z,
                                  e_(eN({}, o), {
                                      pendingAvatar: s,
                                      user: n,
                                      canUsePremiumCustomization: i,
                                      pendingAvatarDecoration: p,
                                      pendingProfileEffectId: null == f ? void 0 : f.id,
                                      disabledInputs: !0,
                                      hideMessageInput: !v,
                                      hideExampleButton: !0,
                                      hideCustomStatus: !0,
                                      hideBioSection: c
                                  })
                              ),
                              c && (0, r.jsx)(eB, { user: n })
                          ]
                      })
        });
    },
    eR = (e) => {
        let { author: t } = e;
        return (0, C.e5)(
            e_(
                eN(
                    {},
                    (0, j.ZP)({
                        author: t,
                        channelId: '1337',
                        content: eO.NW.string(eO.t.d5YwKy)
                    })
                ),
                {
                    state: eC.yb.SENT,
                    id: '0'
                }
            )
        );
    },
    eB = (e) => {
        let { user: t } = e,
            n = eR({ author: t });
        return (0, r.jsx)(f.Rny, {
            children: (0, r.jsxs)(f.Zbd, {
                className: eI.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, r.jsx)(
                        O.Z,
                        {
                            className: eI.mockMessage,
                            author: (0, w.ZH)(n),
                            message: n
                        },
                        n.id
                    ),
                    (0, r.jsxs)('div', {
                        className: eI.mockInput,
                        children: [
                            (0, r.jsx)(f.oFk, {
                                size: 'md',
                                color: 'currentColor',
                                className: eI.mockInputButton
                            }),
                            (0, r.jsx)(f.EO4, {
                                size: 'md',
                                color: 'currentColor',
                                className: eI.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    },
    eW = (e) => {
        let { transitionState: t, onClose: n, product: a, category: l, returnRef: o, analyticsSource: c, analyticsLocations: u, shouldCheckoutWithOrbs: p, tab: v } = e,
            h = (0, m.e7)([R.default], () => R.default.getCurrentUser()),
            b = (0, eb.f)(a),
            { previewingVariantIndex: g } = b,
            C = (0, m.e7)([M.Z], () => M.Z.purchases),
            j = (0, H.o)(a, C),
            w = (0, ef.N)(a, g),
            O = (0, ev.W)(a, j);
        s()(null != O, 'Selected product should not be null');
        let { analyticsLocations: I } = (0, x.ZP)([...u, P.Z.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ee.u9)(O.skuId);
        let [N] = O.items,
            _ = (0, U.s)('CollectiblesShopProductDetailsModal'),
            { pdpBackground: k, logo: S } = (0, eh.OR)(l, a);
        i.useEffect(() => {
            null != h && (0, E.Z)(h.id, h.getAvatarURL(void 0, 80));
        }, [h]),
            i.useEffect(() => {
                let e = (null == N ? void 0 : N.type) === d.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
                B.default.track(eC.rMx.OPEN_MODAL, {
                    type: eC.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
                    source: c,
                    location_stack: I,
                    sku_id: O.skuId,
                    product_type: e
                }),
                    O.items.map(z.oK);
            }, [c, I, null == N ? void 0 : N.type, O.skuId, O.items]);
        let y = t === f.Dvm.EXITING;
        if (null == h) return null;
        let L = (0, eg.ZS)(l.skuId),
            Z = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                n(), e || (0, T.vp)();
            };
        return (0, r.jsx)(x.Gt, {
            value: I,
            children: (0, r.jsx)(f.Y0X, {
                hideShadow: !0,
                className: eI.modalRoot,
                returnRef: o,
                transitionState: t,
                size: f.CgR.DYNAMIC,
                children: (0, r.jsxs)(f.hzk, {
                    className: eI.modalContent,
                    children: [
                        (0, r.jsx)(eT, {
                            user: h,
                            product: a,
                            category: l,
                            onClose: Z,
                            previewingVariantIndexProps: b,
                            selectedVariantIndex: j,
                            shouldCheckoutWithOrbs: p,
                            tab: v
                        }),
                        (0, r.jsxs)('div', {
                            className: O.type === d.Z.AVATAR_DECORATION ? eI.collectiblePreviewsContainerWithChat : eI.collectiblePreviewsContainerNoChat,
                            children: [
                                (0, r.jsx)(J.Z, {
                                    asset: k,
                                    size: (0, el.ML)(540),
                                    className: eI.categoryBanner,
                                    categoryBannerOverride: L
                                }),
                                (0, ec.o0)(a.skuId)
                                    ? a.skuId === eg.xJ
                                        ? y
                                            ? null
                                            : (0, r.jsx)(eo.M, { user: h })
                                        : (0, r.jsx)(es.b, {
                                              product: a,
                                              className: eI.externalProductProfilePreview
                                          })
                                    : (0, r.jsx)(eA, {
                                          user: h,
                                          product: null != w ? w : O
                                      }),
                                (0, r.jsxs)('div', {
                                    className: eI.profilePreviewHeader,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: eI.titleImageContainer,
                                            children: (0, r.jsx)('img', {
                                                className: eI.titleImage,
                                                style: null == L ? void 0 : L.pdpLogoStyle,
                                                src: S,
                                                alt: l.name
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: eI.headerButtonContainer,
                                            children: [
                                                _ &&
                                                    (0, r.jsx)($.B, {
                                                        skuId: O.skuId,
                                                        tab: v
                                                    }),
                                                (0, r.jsx)(f.olH, {
                                                    onClick: () => Z(),
                                                    className: eI.modalCloseButton,
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
