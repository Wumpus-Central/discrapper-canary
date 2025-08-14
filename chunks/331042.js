l.d(t, { default: () => k }), l(388685);
var r = l(255367),
    n = l(73800),
    o = l(505266),
    i = l(979554),
    s = l(311570),
    a = l(399606),
    u = l(667202),
    d = l(481060),
    c = l(100527),
    p = l(906732),
    f = l(286961),
    C = l(300284),
    E = l(594174),
    v = l(597688),
    h = l(1870),
    A = l(429368),
    P = l(884697),
    _ = l(587792),
    T = l(635552),
    L = l(328456),
    m = l(530618),
    I = l(372654),
    O = l(197831),
    R = l(58201),
    x = l(29121),
    S = l(391594),
    Z = l(302800),
    g = l(215023),
    y = l(222311);
let k = (e) => {
    let {
            transitionState: t,
            product: l,
            onClose: k,
            analyticsLocations: w,
            overrideTitle: D,
            overrideDescription: b,
            shouldShowPromotionalExperience: j,
            purchaseType: N = g.o8.FIAT,
        } = e,
        U = (0, a.e7)([h.Z], () => h.Z.purchases),
        M = (0, A.o)(l, U),
        V = (0, R.W)(l, M),
        { analyticsLocations: B } = (0, p.ZP)([...w, c.Z.COLLECTIBLES_COLLECTED_MODAL]),
        G = ((e) => {
            let t = (0, _.o)("CollectiblesCollectedModal"),
                l = (0, a.e7)([E.default], () => {
                    var e, t;
                    return null != (t = null == (e = E.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
                });
            return n.useMemo(() => {
                if (!t || e.type !== i.Z.AVATAR_DECORATION) return;
                let r = (0, Z.R9)(e.skuId, l);
                if (null == r) return;
                let n = v.Z.getProduct(r);
                return null != n ? n : void 0;
            }, [t, e.skuId, e.type, l]);
        })(V),
        { hasRequiredProductItems: W } = ((e) => {
            let { firstProfileEffect: t, firstAvatarDecoration: l } = (0, L.Rj)(e),
                r = (0, P.x6)(e);
            return {
                firstAvatarDecoration: l,
                firstProfileEffect: t,
                isBundle: r,
                hasRequiredProductItems: r
                    ? null != l && null != t
                    : null != l || null != t || e.type === i.Z.NAMEPLATE,
            };
        })(V),
        { promotionalRewardCollectedText: $, openProfileSettings: X } = ((e) => {
            var t;
            let l = (0, f.Z)(),
                r = (0, C.Z)({ analyticsLocations: e });
            return {
                giftingPromotionConfig: l,
                promotionalRewardCollectedText:
                    null == l || null == (t = l.giftPurchaseConfirmation) ? void 0 : t.rewardCollectedText(),
                openProfileSettings: r,
            };
        })(B),
        {
            environment: q,
            modalRef: F,
            confettiCanvas: H,
            setConfettiCanvas: K,
            customConfettiDisplayOptions: z,
        } = (0, S.$0)(V, N);
    (0, S.f1)(V, B);
    let J = (0, x.kd)(V),
        Q = (0, x.kd)(G),
        { handleUseNow: Y, isApplying: ee } = (0, T.W)({
            product: V,
            onSuccess: k,
            onError: k,
        }),
        et = (0, S.Xw)({
            product: V,
            pairedProduct: G,
            overrideTitle: D,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: j,
            productName: J,
            pairedProductName: Q,
        }),
        el = (0, S.ys)({
            product: V,
            pairedProduct: G,
            overrideDescription: b,
            productName: J,
            pairedProductName: Q,
            shouldShowPromotionalExperience: j,
            promotionalRewardCollectedText: $,
        }),
        er = (0, S.cf)({
            product: V,
            pairedProduct: G,
            onClose: k,
            analyticsLocations: B,
            hasRequiredProductItems: W,
            handleUseNow: Y,
            isApplying: ee,
            variantsReturnStyle: s.v.VARIANTS_GROUP,
            openProfileSettings: X,
        });
    return (0, r.jsx)(p.Gt, {
        value: B,
        children: (0, r.jsxs)("div", {
            ref: F,
            children: [
                (0, r.jsx)(o.O_, {
                    ref: K,
                    className: y.confettiCanvas,
                    environment: q,
                }),
                (0, r.jsx)(u.I, {
                    graphic: {
                        type: "dynamic",
                        component: d.AX$.COLLECTIBLES_PREVIEW,
                        aspectRatio: V.type === i.Z.NAMEPLATE || V.type === i.Z.AVATAR_DECORATION ? "16/9" : "6/4",
                        props: {
                            product: V,
                            pairedProduct: G,
                        },
                    },
                    title: et,
                    subtitle: null != el ? el : void 0,
                    onClose: k,
                    transitionState: t,
                    actions: er,
                }),
                null != z
                    ? (0, r.jsx)(O.i, { options: z })
                    : (0, r.jsx)(m.Z, {
                          confettiTarget: F.current,
                          confettiCanvas: H,
                          sprites: (0, I.vK)(V.categorySkuId),
                      }),
            ],
        }),
    });
};
