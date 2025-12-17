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
    h = s(58201),
    x = s(29121),
    I = s(391594),
    _ = s(215023),
    j = s(505281);
let k = (t) => {
    let {
            transitionState: e,
            product: s,
            onClose: k,
            analyticsLocations: O,
            overrideTitle: m,
            overrideDescription: y,
            itemConsumed: S = !0,
            purchaseType: N = _.o8.ORB,
        } = t,
        b = (0, l.o)(s),
        B = (0, h.W)(s, b),
        { analyticsLocations: P } = (0, u.ZP)([...O, c.Z.COLLECTIBLES_COLLECTED_MODAL]);
    o.useEffect(() => {
        _.Vt.ORB_PROFILE_BADGE === B.skuId && (0, d.Ls)([(0, v.X)()], 600);
    }, [B.skuId]);
    let { isLoading: R, isFractionalPremiumActive: T, expiresAt: g } = (0, C.Kd)(),
        {
            environment: w,
            modalRef: G,
            confettiCanvas: $,
            setConfettiCanvas: A,
            customConfettiDisplayOptions: D,
        } = (0, I.$0)(B, N);
    (0, I.f1)(B, P);
    let V = (0, x.kd)(B),
        { handleUseNow: W, isApplying: X } = (0, p.W)({
            product: B,
            onSuccess: k,
            onError: k,
        });
    if (R) return (0, n.jsx)(r.$jN, { type: r.$jN.Type.SPINNING_CIRCLE });
    let Z = (0, I.Xw)({
            product: B,
            overrideTitle: m,
            isVariantsGroupEnabled: !1,
            shouldShowPromotionalExperience: !1,
            productName: V,
            itemConsumed: S,
        }),
        K = (0, I.ys)({
            product: B,
            overrideDescription: y,
            productName: V,
            itemConsumed: S,
            isFractionalPremiumActive: T,
            expiresAt: g,
        }),
        M = (0, I.cf)({
            product: B,
            onClose: k,
            analyticsLocations: P,
            handleUseNow: W,
            isApplying: X,
            itemConsumed: S,
        });
    return (0, n.jsx)(u.Gt, {
        value: P,
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
                            product: B,
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
                          sprites: (0, f.vK)(B.categorySkuId),
                      }),
            ],
        }),
    });
};
