(l.d(t, { default: () => D }), l(388685));
var o = l(255367),
    r = l(73800),
    n = l(505266),
    i = l(979554),
    s = l(399606),
    u = l(834023),
    a = l(667202),
    c = l(100527),
    d = l(906732),
    p = l(286961),
    C = l(300284),
    f = l(594174),
    h = l(597688),
    v = l(1870),
    E = l(429368),
    P = l(884697),
    _ = l(587792),
    L = l(228624),
    x = l(635552),
    T = l(905357),
    g = l(328456),
    m = l(530618),
    I = l(372654),
    S = l(197831),
    k = l(58201),
    O = l(391594),
    Z = l(302800),
    w = l(215023),
    b = l(854402);
let A = (e) => {
        let t = (0, _.o)('CollectiblesCollectedModal'),
            l = (0, s.e7)([f.default], () => {
                var e, t;
                return null != (t = null == (e = f.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
            });
        return r.useMemo(() => {
            if (!t || e.type !== i.Z.AVATAR_DECORATION) return;
            let o = (0, Z.R9)(e.skuId, l);
            if (null == o) return;
            let r = h.Z.getProduct(o);
            return null != r ? r : void 0;
        }, [t, e.skuId, e.type, l]);
    },
    j = (e) => {
        let { firstProfileEffect: t, firstAvatarDecoration: l } = (0, g.Rj)(e),
            o = (0, P.x6)(e);
        return {
            firstAvatarDecoration: l,
            firstProfileEffect: t,
            isBundle: o,
            hasRequiredProductItems: o ? null != l && null != t : null != l || null != t || e.type === i.Z.NAMEPLATE
        };
    },
    y = (e) => {
        var t;
        let l = (0, L.ed)('CollectiblesCollectedModal'),
            o = (0, p.Z)(),
            r = (0, L.hv)('CollectiblesShopGiftButton'),
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
        let { transitionState: t, product: l, onClose: r, analyticsLocations: i, overrideTitle: p, overrideDescription: C, shouldShowPromotionalExperience: f, purchaseType: h = w.o8.FIAT } = e,
            P = (0, s.e7)([v.Z], () => v.Z.purchases),
            _ = (0, E.o)(l, P),
            L = (0, k.W)(l, _),
            { analyticsLocations: g } = (0, d.ZP)([...i, c.Z.COLLECTIBLES_COLLECTED_MODAL]),
            Z = A(L),
            { hasRequiredProductItems: D } = j(L),
            { isVariantsGroupEnabled: R, promotionalRewardCollectedText: B, variantsReturnStyle: M, openProfileSettings: U } = y(g),
            { environment: N, modalRef: W, confettiCanvas: G, setConfettiCanvas: K, customConfettiDisplayOptions: V } = (0, O.$0)(L, h);
        (0, O.f1)(L, g);
        let $ = (0, T.k)(L),
            q = (0, T.k)(Z),
            { handleUseNow: F, isApplying: H } = (0, x.W)({
                product: L,
                onSuccess: r,
                onError: r
            }),
            X = (0, O.Xw)({
                product: L,
                pairedProduct: Z,
                overrideTitle: p,
                isVariantsGroupEnabled: R,
                shouldShowPromotionalExperience: f,
                productName: $,
                pairedProductName: q
            }),
            z = (0, O.ys)({
                product: L,
                pairedProduct: Z,
                overrideDescription: C,
                productName: $,
                pairedProductName: q,
                shouldShowPromotionalExperience: f,
                promotionalRewardCollectedText: B
            }),
            J = (0, O.cf)({
                product: L,
                pairedProduct: Z,
                onClose: r,
                analyticsLocations: g,
                hasRequiredProductItems: D,
                handleUseNow: F,
                isApplying: H,
                variantsReturnStyle: M,
                openProfileSettings: U
            });
        return (0, o.jsx)(d.Gt, {
            value: g,
            children: (0, o.jsxs)('div', {
                ref: W,
                children: [
                    (0, o.jsx)(n.O_, {
                        ref: K,
                        className: b.confettiCanvas,
                        environment: N
                    }),
                    (0, o.jsx)(a.I, {
                        graphic: {
                            type: u.tK.COLLECTIBLES_PREVIEW,
                            props: {
                                product: L,
                                pairedProduct: Z
                            }
                        },
                        title: X,
                        subtitle: null != z ? z : void 0,
                        onClose: r,
                        transitionState: t,
                        actions: J
                    }),
                    null != V
                        ? (0, o.jsx)(S.i, { options: V })
                        : (0, o.jsx)(m.Z, {
                              confettiTarget: W.current,
                              confettiCanvas: G,
                              sprites: (0, I.vK)(L.categorySkuId)
                          })
                ]
            })
        });
    };
