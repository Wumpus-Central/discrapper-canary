n.d(e, { default: () => Z }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(238651),
    a = n(979554),
    s = n(311570),
    u = n(399606),
    o = n(667202),
    d = n(481060),
    c = n(100527),
    p = n(906732),
    f = n(347896),
    h = n(300284),
    E = n(594174),
    C = n(597688),
    A = n(1870),
    O = n(429368),
    _ = n(884697),
    I = n(587792),
    T = n(635552),
    m = n(328456),
    g = n(624377),
    R = n(330349),
    k = n(530618),
    L = n(372654),
    P = n(197831),
    y = n(58201),
    b = n(29121),
    S = n(391594),
    v = n(302800),
    N = n(215023),
    B = n(222311);
let Z = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: Z,
            analyticsLocations: x,
            overrideTitle: M,
            overrideDescription: D,
            shouldShowPromotionalExperience: U,
            purchaseType: F = N.o8.FIAT,
        } = t,
        w = (0, u.e7)([A.Z], () => A.Z.purchases),
        j = (0, O.o)(n, w),
        V = (0, y.W)(n, j),
        { analyticsLocations: G } = (0, p.ZP)([...x, c.Z.COLLECTIBLES_COLLECTED_MODAL]),
        H = ((t) => {
            let e = (0, I.o)("CollectiblesCollectedModal"),
                n = (0, u.e7)([E.default], () => {
                    var t, e;
                    return null != (e = null == (t = E.default.getCurrentUser()) ? void 0 : t.isStaff()) && e;
                });
            return r.useMemo(() => {
                if (!e || t.type !== a.Z.AVATAR_DECORATION) return;
                let i = (0, v.R9)(t.skuId, n);
                if (null == i) return;
                let r = C.Z.getProduct(i);
                return null != r ? r : void 0;
            }, [e, t.skuId, t.type, n]);
        })(V),
        { hasRequiredProductItems: W } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: n, firstNameplate: i } = (0, m.Rj)(t),
                r = (0, _.x6)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: i,
                isBundle: r,
                hasRequiredProductItems: r ? (0, R.N)(t) : null != n || null != e || null != i,
            };
        })(V),
        { promotionalRewardCollectedText: X, openProfileSettings: $ } = ((t) => {
            var e;
            let n = (0, f.Z)(),
                i = (0, h.Z)({ analyticsLocations: t });
            return {
                giftingPromotionConfig: n,
                promotionalRewardCollectedText:
                    null == n || null == (e = n.giftPurchaseConfirmation) ? void 0 : e.rewardCollectedText(),
                openProfileSettings: i,
            };
        })(G),
        {
            environment: Q,
            modalRef: Y,
            confettiCanvas: q,
            setConfettiCanvas: z,
            customConfettiDisplayOptions: K,
        } = (0, S.$0)(V, F);
    (0, S.f1)(V, G);
    let J = (0, b.kd)(V),
        tt = (0, b.kd)(H),
        { handleUseNow: te, isApplying: tn } = (0, T.W)({
            product: V,
            onSuccess: Z,
            onError: Z,
        }),
        ti = (0, S.Xw)({
            product: V,
            pairedProduct: H,
            overrideTitle: M,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: U,
            productName: J,
            pairedProductName: tt,
        }),
        tr = (0, S.ys)({
            product: V,
            pairedProduct: H,
            overrideDescription: D,
            productName: J,
            pairedProductName: tt,
            shouldShowPromotionalExperience: U,
            promotionalRewardCollectedText: X,
        }),
        tl = (0, S.cf)({
            product: V,
            pairedProduct: H,
            onClose: Z,
            analyticsLocations: G,
            hasRequiredProductItems: W,
            handleUseNow: te,
            isApplying: tn,
            variantsReturnStyle: s.v.VARIANTS_GROUP,
            openProfileSettings: $,
        }),
        ta = "6/4";
    switch (V.type) {
        case a.Z.NAMEPLATE:
        case a.Z.AVATAR_DECORATION:
            ta = "16/9";
            break;
        case a.Z.BUNDLE:
        case a.Z.PROFILE_EFFECT:
        default:
            ta = "6/4";
    }
    let { confettiColors: ts } = (0, g.Z)(V.styles);
    return (0, i.jsx)(p.Gt, {
        value: G,
        children: (0, i.jsxs)("div", {
            ref: Y,
            children: [
                (0, i.jsx)(l.O_, {
                    ref: z,
                    className: B.confettiCanvas,
                    environment: Q,
                }),
                (0, i.jsx)(o.I, {
                    graphic: {
                        type: "dynamic",
                        component: d.AX$.COLLECTIBLES_PREVIEW,
                        aspectRatio: ta,
                        props: {
                            product: V,
                            pairedProduct: H,
                            forCollectedModal: !0,
                        },
                    },
                    title: ti,
                    subtitle: null != tr ? tr : void 0,
                    onClose: Z,
                    transitionState: e,
                    actions: tl,
                }),
                null != K
                    ? (0, i.jsx)(P.i, { options: K })
                    : (0, i.jsx)(k.Z, {
                          confettiTarget: Y.current,
                          confettiCanvas: q,
                          sprites: (0, L.vK)(V.categorySkuId),
                          colors: null == ts ? void 0 : ts.map((t) => t.toHexString()),
                      }),
            ],
        }),
    });
};
