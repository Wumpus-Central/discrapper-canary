l.d(t, { default: () => b }), l(388685);
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
    y = l(629755);
let k = (e) => {
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
    },
    w = (e) => {
        let { firstProfileEffect: t, firstAvatarDecoration: l } = (0, L.Rj)(e),
            r = (0, P.x6)(e);
        return {
            firstAvatarDecoration: l,
            firstProfileEffect: t,
            isBundle: r,
            hasRequiredProductItems: r ? null != l && null != t : null != l || null != t || e.type === i.Z.NAMEPLATE,
        };
    },
    D = (e) => {
        var t;
        let l = (0, f.Z)(),
            r = (0, C.Z)({ analyticsLocations: e });
        return {
            giftingPromotionConfig: l,
            promotionalRewardCollectedText:
                null == l || null == (t = l.giftPurchaseConfirmation) ? void 0 : t.rewardCollectedText(),
            openProfileSettings: r,
        };
    },
    b = (e) => {
        let {
                transitionState: t,
                product: l,
                onClose: n,
                analyticsLocations: f,
                overrideTitle: C,
                overrideDescription: E,
                shouldShowPromotionalExperience: v,
                purchaseType: P = g.o8.FIAT,
            } = e,
            _ = (0, a.e7)([h.Z], () => h.Z.purchases),
            L = (0, A.o)(l, _),
            Z = (0, R.W)(l, L),
            { analyticsLocations: b } = (0, p.ZP)([...f, c.Z.COLLECTIBLES_COLLECTED_MODAL]),
            j = k(Z),
            { hasRequiredProductItems: N } = w(Z),
            { promotionalRewardCollectedText: U, openProfileSettings: M } = D(b),
            {
                environment: V,
                modalRef: B,
                confettiCanvas: G,
                setConfettiCanvas: W,
                customConfettiDisplayOptions: $,
            } = (0, S.$0)(Z, P);
        (0, S.f1)(Z, b);
        let X = (0, x.kd)(Z),
            q = (0, x.kd)(j),
            { handleUseNow: F, isApplying: H } = (0, T.W)({
                product: Z,
                onSuccess: n,
                onError: n,
            }),
            K = (0, S.Xw)({
                product: Z,
                pairedProduct: j,
                overrideTitle: C,
                isVariantsGroupEnabled: !0,
                shouldShowPromotionalExperience: v,
                productName: X,
                pairedProductName: q,
            }),
            z = (0, S.ys)({
                product: Z,
                pairedProduct: j,
                overrideDescription: E,
                productName: X,
                pairedProductName: q,
                shouldShowPromotionalExperience: v,
                promotionalRewardCollectedText: U,
            }),
            J = (0, S.cf)({
                product: Z,
                pairedProduct: j,
                onClose: n,
                analyticsLocations: b,
                hasRequiredProductItems: N,
                handleUseNow: F,
                isApplying: H,
                variantsReturnStyle: s.v.VARIANTS_GROUP,
                openProfileSettings: M,
            });
        return (0, r.jsx)(p.Gt, {
            value: b,
            children: (0, r.jsxs)("div", {
                ref: B,
                children: [
                    (0, r.jsx)(o.O_, {
                        ref: W,
                        className: y.confettiCanvas,
                        environment: V,
                    }),
                    (0, r.jsx)(u.I, {
                        graphic: {
                            type: "dynamic",
                            component: d.AX$.COLLECTIBLES_PREVIEW,
                            aspectRatio: Z.type === i.Z.NAMEPLATE || Z.type === i.Z.AVATAR_DECORATION ? "16/9" : "6/4",
                            props: {
                                product: Z,
                                pairedProduct: j,
                            },
                        },
                        title: K,
                        subtitle: null != z ? z : void 0,
                        onClose: n,
                        transitionState: t,
                        actions: J,
                    }),
                    null != $
                        ? (0, r.jsx)(O.i, { options: $ })
                        : (0, r.jsx)(m.Z, {
                              confettiTarget: B.current,
                              confettiCanvas: G,
                              sprites: (0, I.vK)(Z.categorySkuId),
                          }),
                ],
            }),
        });
    };
