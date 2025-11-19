s.d(e, { default: () => k }), s(388685);
var n = s(54381),
    o = s(473749),
    i = s(921254),
    a = s(793030),
    r = s(481060),
    c = s(100527),
    u = s(906732),
    d = s(350327),
    l = s(429368),
    p = s(635552),
    C = s(578976),
    E = s(530618),
    f = s(372654),
    L = s(197831),
    v = s(755419),
    _ = s(58201),
    h = s(29121),
    x = s(391594),
    I = s(215023),
    j = s(722982);
let k = (t) => {
    let {
            transitionState: e,
            product: s,
            onClose: k,
            analyticsLocations: O,
            overrideTitle: m,
            overrideDescription: y,
            itemConsumed: S = !0,
            purchaseType: N = I.o8.ORB,
        } = t,
        B = (0, l.o)(s),
        P = (0, _.W)(s, B),
        { analyticsLocations: R } = (0, u.ZP)([...O, c.Z.COLLECTIBLES_COLLECTED_MODAL]);
    o.useEffect(() => {
        I.Vt.ORB_PROFILE_BADGE === P.skuId && (0, d.Ls)([(0, v.X)()], 600);
    }, [P.skuId]);
    let { isLoading: T, isFractionalPremiumActive: b, expiresAt: g } = (0, C.Kd)(),
        {
            environment: w,
            modalRef: G,
            confettiCanvas: $,
            setConfettiCanvas: A,
            customConfettiDisplayOptions: D,
        } = (0, x.$0)(P, N);
    (0, x.f1)(P, R);
    let V = (0, h.kd)(P),
        { handleUseNow: W, isApplying: X } = (0, p.W)({
            product: P,
            onSuccess: k,
            onError: k,
        });
    if (T) return (0, n.jsx)(r.$jN, { type: r.$jN.Type.SPINNING_CIRCLE });
    let Z = (0, x.Xw)({
            product: P,
            overrideTitle: m,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: V,
            itemConsumed: S,
        }),
        K = (0, x.ys)({
            product: P,
            overrideDescription: y,
            productName: V,
            itemConsumed: S,
            isFractionalPremiumActive: b,
            expiresAt: g,
        }),
        M = (0, x.cf)({
            product: P,
            onClose: k,
            analyticsLocations: R,
            handleUseNow: W,
            isApplying: X,
            itemConsumed: S,
        });
    return (0, n.jsx)(u.Gt, {
        value: R,
        children: (0, n.jsxs)("div", {
            ref: G,
            children: [
                (0, n.jsx)(i.O_, {
                    ref: A,
                    className: j.confettiCanvas,
                    environment: w,
                }),
                (0, n.jsx)(a.ExpressiveModal, {
                    graphic: {
                        type: "dynamic",
                        component: r.AX$.COLLECTIBLES_PREVIEW,
                        props: {
                            product: P,
                            itemConsumed: S,
                        },
                    },
                    title: Z,
                    subtitle: null != K ? K : void 0,
                    onClose: k,
                    transitionState: e,
                    actions: M,
                }),
                null != D
                    ? (0, n.jsx)(L.i, { options: D })
                    : (0, n.jsx)(E.Z, {
                          confettiTarget: G.current,
                          confettiCanvas: $,
                          sprites: (0, f.vK)(P.categorySkuId),
                      }),
            ],
        }),
    });
};
