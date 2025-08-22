n.d(e, { default: () => B }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(238651),
    a = n(979554),
    s = n(311570),
    u = n(399606),
    d = n(667202),
    o = n(481060),
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
    g = n(330349),
    R = n(530618),
    k = n(372654),
    L = n(197831),
    P = n(58201),
    b = n(29121),
    y = n(391594),
    S = n(302800),
    v = n(215023),
    N = n(222311);
let B = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: B,
            analyticsLocations: Z,
            overrideTitle: x,
            overrideDescription: M,
            shouldShowPromotionalExperience: D,
            purchaseType: U = v.o8.FIAT,
        } = t,
        F = (0, u.e7)([A.Z], () => A.Z.purchases),
        w = (0, O.o)(n, F),
        j = (0, P.W)(n, w),
        { analyticsLocations: V } = (0, p.ZP)([...Z, c.Z.COLLECTIBLES_COLLECTED_MODAL]),
        G = ((t) => {
            let e = (0, I.o)("CollectiblesCollectedModal"),
                n = (0, u.e7)([E.default], () => {
                    var t, e;
                    return null != (e = null == (t = E.default.getCurrentUser()) ? void 0 : t.isStaff()) && e;
                });
            return r.useMemo(() => {
                if (!e || t.type !== a.Z.AVATAR_DECORATION) return;
                let i = (0, S.R9)(t.skuId, n);
                if (null == i) return;
                let r = C.Z.getProduct(i);
                return null != r ? r : void 0;
            }, [e, t.skuId, t.type, n]);
        })(j),
        { hasRequiredProductItems: H } = ((t) => {
            let { firstProfileEffect: e, firstAvatarDecoration: n, firstNameplate: i } = (0, m.Rj)(t),
                r = (0, _.x6)(t);
            return {
                firstAvatarDecoration: n,
                firstProfileEffect: e,
                firstNameplate: i,
                isBundle: r,
                hasRequiredProductItems: r ? (0, g.N)(t) : null != n || null != e || null != i,
            };
        })(j),
        { promotionalRewardCollectedText: W, openProfileSettings: X } = ((t) => {
            var e;
            let n = (0, f.Z)(),
                i = (0, h.Z)({ analyticsLocations: t });
            return {
                giftingPromotionConfig: n,
                promotionalRewardCollectedText:
                    null == n || null == (e = n.giftPurchaseConfirmation) ? void 0 : e.rewardCollectedText(),
                openProfileSettings: i,
            };
        })(V),
        {
            environment: $,
            modalRef: Q,
            confettiCanvas: Y,
            setConfettiCanvas: q,
            customConfettiDisplayOptions: z,
        } = (0, y.$0)(j, U);
    (0, y.f1)(j, V);
    let K = (0, b.kd)(j),
        J = (0, b.kd)(G),
        { handleUseNow: tt, isApplying: te } = (0, T.W)({
            product: j,
            onSuccess: B,
            onError: B,
        }),
        tn = (0, y.Xw)({
            product: j,
            pairedProduct: G,
            overrideTitle: x,
            isVariantsGroupEnabled: !0,
            shouldShowPromotionalExperience: D,
            productName: K,
            pairedProductName: J,
        }),
        ti = (0, y.ys)({
            product: j,
            pairedProduct: G,
            overrideDescription: M,
            productName: K,
            pairedProductName: J,
            shouldShowPromotionalExperience: D,
            promotionalRewardCollectedText: W,
        }),
        tr = (0, y.cf)({
            product: j,
            pairedProduct: G,
            onClose: B,
            analyticsLocations: V,
            hasRequiredProductItems: H,
            handleUseNow: tt,
            isApplying: te,
            variantsReturnStyle: s.v.VARIANTS_GROUP,
            openProfileSettings: X,
        }),
        tl = "6/4";
    switch (j.type) {
        case a.Z.NAMEPLATE:
        case a.Z.AVATAR_DECORATION:
            tl = "16/9";
            break;
        case a.Z.BUNDLE:
        case a.Z.PROFILE_EFFECT:
        default:
            tl = "6/4";
    }
    return (0, i.jsx)(p.Gt, {
        value: V,
        children: (0, i.jsxs)("div", {
            ref: Q,
            children: [
                (0, i.jsx)(l.O_, {
                    ref: q,
                    className: N.confettiCanvas,
                    environment: $,
                }),
                (0, i.jsx)(d.I, {
                    graphic: {
                        type: "dynamic",
                        component: o.AX$.COLLECTIBLES_PREVIEW,
                        aspectRatio: tl,
                        props: {
                            product: j,
                            pairedProduct: G,
                            forCollectedModal: !0,
                        },
                    },
                    title: tn,
                    subtitle: null != ti ? ti : void 0,
                    onClose: B,
                    transitionState: e,
                    actions: tr,
                }),
                null != z
                    ? (0, i.jsx)(L.i, { options: z })
                    : (0, i.jsx)(R.Z, {
                          confettiTarget: Q.current,
                          confettiCanvas: Y,
                          sprites: (0, k.vK)(j.categorySkuId),
                      }),
            ],
        }),
    });
};
