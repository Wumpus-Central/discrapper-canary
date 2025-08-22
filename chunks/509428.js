n.d(e, { default: () => y }), n(388685);
var i = n(951288),
    r = n(647438),
    a = n(238651),
    s = n(399606),
    l = n(667202),
    u = n(481060),
    d = n(100527),
    o = n(906732),
    c = n(975298),
    p = n(350327),
    h = n(55935),
    f = n(1870),
    E = n(429368),
    A = n(635552),
    C = n(530618),
    O = n(372654),
    _ = n(197831),
    I = n(755419),
    m = n(58201),
    L = n(29121),
    g = n(391594),
    k = n(215023),
    T = n(222311);
let y = (t) => {
    let {
            transitionState: e,
            product: n,
            onClose: y,
            analyticsLocations: R,
            overrideTitle: b,
            overrideDescription: P,
            itemConsumed: v = !0,
            purchaseType: S = k.o8.ORB,
        } = t,
        N = (0, s.e7)([f.Z], () => f.Z.purchases),
        B = (0, E.o)(n, N),
        x = (0, m.W)(n, B),
        { analyticsLocations: M } = (0, o.ZP)([...R, d.Z.COLLECTIBLES_COLLECTED_MODAL]);
    r.useEffect(() => {
        k.Vt.ORB_PROFILE_BADGE === x.skuId && (0, p.Ls)([(0, I.X)()], 600);
    }, [x.skuId]);
    let {
            isLoading: Z,
            isFractionalPremiumActive: D,
            expiresAt: F,
        } = (() => {
            let t = (0, c.Z)({ forceFetch: !0 }),
                e = (0, h.vc)(t.endsAt, "L");
            return {
                isLoading: !t.fetched,
                isFractionalPremiumActive: t.isFractionalPremiumActive,
                expiresAt: e,
            };
        })(),
        {
            environment: U,
            modalRef: j,
            confettiCanvas: G,
            setConfettiCanvas: w,
            customConfettiDisplayOptions: V,
        } = (0, g.$0)(x, S);
    (0, g.f1)(x, M);
    let H = (0, L.kd)(x),
        { handleUseNow: W, isApplying: X } = (0, A.W)({
            product: x,
            onSuccess: y,
            onError: y,
        });
    if (Z) return (0, i.jsx)(u.$jN, { type: u.$jN.Type.SPINNING_CIRCLE });
    let $ = (0, g.Xw)({
            product: x,
            pairedProduct: void 0,
            overrideTitle: b,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: H,
            pairedProductName: void 0,
            itemConsumed: v,
        }),
        Q = (0, g.ys)({
            product: x,
            overrideDescription: P,
            productName: H,
            itemConsumed: v,
            isFractionalPremiumActive: D,
            expiresAt: F,
        }),
        Y = (0, g.cf)({
            product: x,
            onClose: y,
            analyticsLocations: M,
            handleUseNow: W,
            isApplying: X,
            itemConsumed: v,
        });
    return (0, i.jsx)(o.Gt, {
        value: M,
        children: (0, i.jsxs)("div", {
            ref: j,
            children: [
                (0, i.jsx)(a.O_, {
                    ref: w,
                    className: T.confettiCanvas,
                    environment: U,
                }),
                (0, i.jsx)(l.I, {
                    graphic: {
                        type: "dynamic",
                        component: u.AX$.COLLECTIBLES_PREVIEW,
                        props: {
                            product: x,
                            itemConsumed: v,
                        },
                    },
                    title: $,
                    subtitle: null != Q ? Q : void 0,
                    onClose: y,
                    transitionState: e,
                    actions: Y,
                }),
                null != V
                    ? (0, i.jsx)(_.i, { options: V })
                    : (0, i.jsx)(C.Z, {
                          confettiTarget: j.current,
                          confettiCanvas: G,
                          sprites: (0, O.vK)(x.categorySkuId),
                      }),
            ],
        }),
    });
};
