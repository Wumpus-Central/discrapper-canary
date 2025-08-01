(l.d(t, { default: () => D }), l(388685));
var o = l(255367),
    r = l(73800),
    n = l(505266),
    i = l(979554),
    s = l(399606),
    a = l(667202),
    u = l(481060),
    c = l(100527),
    d = l(906732),
    p = l(286961),
    C = l(300284),
    f = l(594174),
    E = l(597688),
    h = l(1870),
    v = l(429368),
    P = l(884697),
    _ = l(587792),
    A = l(228624),
    L = l(635552),
    T = l(905357),
    m = l(328456),
    x = l(530618),
    I = l(372654),
    O = l(197831),
    Z = l(58201),
    g = l(391594),
    S = l(302800),
    k = l(215023),
    y = l(854402);
let R = (e) => {
        let t = (0, _.o)('CollectiblesCollectedModal'),
            l = (0, s.e7)([f.default], () => {
                var e, t;
                return null != (t = null == (e = f.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
            });
        return r.useMemo(() => {
            if (!t || e.type !== i.Z.AVATAR_DECORATION) return;
            let o = (0, S.R9)(e.skuId, l);
            if (null == o) return;
            let r = E.Z.getProduct(o);
            return null != r ? r : void 0;
        }, [t, e.skuId, e.type, l]);
    },
    w = (e) => {
        let { firstProfileEffect: t, firstAvatarDecoration: l } = (0, m.Rj)(e),
            o = (0, P.x6)(e);
        return {
            firstAvatarDecoration: l,
            firstProfileEffect: t,
            isBundle: o,
            hasRequiredProductItems: o ? null != l && null != t : null != l || null != t || e.type === i.Z.NAMEPLATE
        };
    },
    b = (e) => {
        var t;
        let l = (0, A.ed)('CollectiblesCollectedModal'),
            o = (0, p.Z)(),
            r = (0, A.hv)('CollectiblesShopGiftButton'),
            n = (0, C.Z)({ analyticsLocations: e });
        return {
            isVariantsGroupEnabled: l,
            giftingPromotionConfig: o,
            promotionalRewardCollectedText: null == o || null == (t = o.giftPurchaseConfirmation) ? void 0 : t.rewardCollectedText(),
            variantsReturnStyle: r,
            openProfileSettings: n
        };
    },
    D = (e) => {
        let { transitionState: t, product: l, onClose: r, analyticsLocations: p, overrideTitle: C, overrideDescription: f, shouldShowPromotionalExperience: E, purchaseType: P = k.o8.FIAT } = e,
            _ = (0, s.e7)([h.Z], () => h.Z.purchases),
            A = (0, v.o)(l, _),
            m = (0, Z.W)(l, A),
            { analyticsLocations: S } = (0, d.ZP)([...p, c.Z.COLLECTIBLES_COLLECTED_MODAL]),
            D = R(m),
            { hasRequiredProductItems: j } = w(m),
            { isVariantsGroupEnabled: M, promotionalRewardCollectedText: N, variantsReturnStyle: B, openProfileSettings: U } = b(S),
            { environment: V, modalRef: W, confettiCanvas: $, setConfettiCanvas: G, customConfettiDisplayOptions: X } = (0, g.$0)(m, P);
        (0, g.f1)(m, S);
        let q = (0, T.k)(m),
            F = (0, T.k)(D),
            { handleUseNow: H, isApplying: K } = (0, L.W)({
                product: m,
                onSuccess: r,
                onError: r
            }),
            z = (0, g.Xw)({
                product: m,
                pairedProduct: D,
                overrideTitle: C,
                isVariantsGroupEnabled: M,
                shouldShowPromotionalExperience: E,
                productName: q,
                pairedProductName: F
            }),
            J = (0, g.ys)({
                product: m,
                pairedProduct: D,
                overrideDescription: f,
                productName: q,
                pairedProductName: F,
                shouldShowPromotionalExperience: E,
                promotionalRewardCollectedText: N
            }),
            Q = (0, g.cf)({
                product: m,
                pairedProduct: D,
                onClose: r,
                analyticsLocations: S,
                hasRequiredProductItems: j,
                handleUseNow: H,
                isApplying: K,
                variantsReturnStyle: B,
                openProfileSettings: U
            });
        return (0, o.jsx)(d.Gt, {
            value: S,
            children: (0, o.jsxs)('div', {
                ref: W,
                children: [
                    (0, o.jsx)(n.O_, {
                        ref: G,
                        className: y.confettiCanvas,
                        environment: V
                    }),
                    (0, o.jsx)(a.I, {
                        graphic: {
                            type: 'dynamic',
                            component: u.AX$.COLLECTIBLES_PREVIEW,
                            aspectRatio: m.type === i.Z.NAMEPLATE || m.type === i.Z.AVATAR_DECORATION ? '16/9' : '6/4',
                            props: {
                                product: m,
                                pairedProduct: D
                            }
                        },
                        title: z,
                        subtitle: null != J ? J : void 0,
                        onClose: r,
                        transitionState: t,
                        actions: Q
                    }),
                    null != X
                        ? (0, o.jsx)(O.i, { options: X })
                        : (0, o.jsx)(x.Z, {
                              confettiTarget: W.current,
                              confettiCanvas: $,
                              sprites: (0, I.vK)(m.categorySkuId)
                          })
                ]
            })
        });
    };
