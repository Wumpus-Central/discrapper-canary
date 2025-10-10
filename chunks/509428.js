n.d(e, { default: () => k }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(238651),
    a = n(793030),
    s = n(399606),
    u = n(481060),
    d = n(100527),
    o = n(906732),
    c = n(350327),
    p = n(1870),
    h = n(429368),
    E = n(635552),
    f = n(578976),
    A = n(530618),
    O = n(372654),
    C = n(197831),
    I = n(755419),
    _ = n(58201),
    T = n(29121),
    y = n(391594),
    L = n(215023),
    R = n(222311);
let k = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: k,
            analyticsLocations: m,
            overrideTitle: b,
            overrideDescription: g,
            itemConsumed: S = !0,
            purchaseType: P = L.o8.ORB,
        } = t,
        v = (0, s.e7)([p.Z], () => p.Z.purchases),
        N = (0, h.o)(n, v),
        B = (0, _.W)(n, N),
        { analyticsLocations: M } = (0, o.ZP)([...m, d.Z.COLLECTIBLES_COLLECTED_MODAL]);
    r.useEffect(() => {
        L.Vt.ORB_PROFILE_BADGE === B.skuId && (0, c.Ls)([(0, I.X)()], 600);
    }, [B.skuId]);
    let { isLoading: x, isFractionalPremiumActive: Z, expiresAt: U } = (0, f.Kd)(),
        {
            environment: D,
            modalRef: j,
            confettiCanvas: F,
            setConfettiCanvas: w,
            customConfettiDisplayOptions: V,
        } = (0, y.$0)(B, P);
    (0, y.f1)(B, M);
    let G = (0, T.kd)(B),
        { handleUseNow: W, isApplying: X } = (0, E.W)({
            product: B,
            onSuccess: k,
            onError: k,
        });
    if (x) return (0, i.jsx)(u.$jN, { type: u.$jN.Type.SPINNING_CIRCLE });
    let H = (0, y.Xw)({
            product: B,
            overrideTitle: b,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: G,
            itemConsumed: S,
        }),
        $ = (0, y.ys)({
            product: B,
            overrideDescription: g,
            productName: G,
            itemConsumed: S,
            isFractionalPremiumActive: Z,
            expiresAt: U,
        }),
        z = (0, y.cf)({
            product: B,
            onClose: k,
            analyticsLocations: M,
            handleUseNow: W,
            isApplying: X,
            itemConsumed: S,
        });
    return (0, i.jsx)(o.Gt, {
        value: M,
        children: (0, i.jsxs)("div", {
            ref: j,
            children: [
                (0, i.jsx)(l.O_, {
                    ref: w,
                    className: R.confettiCanvas,
                    environment: D,
                }),
                (0, i.jsx)(a.ExpressiveModal, {
                    graphic: {
                        type: "dynamic",
                        component: u.AX$.COLLECTIBLES_PREVIEW,
                        props: {
                            product: B,
                            itemConsumed: S,
                        },
                    },
                    title: H,
                    subtitle: null != $ ? $ : void 0,
                    onClose: k,
                    transitionState: e,
                    actions: z,
                }),
                null != V
                    ? (0, i.jsx)(C.i, { options: V })
                    : (0, i.jsx)(A.Z, {
                          confettiTarget: j.current,
                          confettiCanvas: F,
                          sprites: (0, O.vK)(B.categorySkuId),
                      }),
            ],
        }),
    });
};
