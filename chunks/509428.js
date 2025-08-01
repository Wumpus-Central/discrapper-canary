(i.d(e, { default: () => y }), i(388685));
var s = i(255367),
    n = i(73800),
    o = i(505266),
    r = i(399606),
    a = i(667202),
    c = i(481060),
    u = i(100527),
    d = i(906732),
    l = i(975298),
    p = i(350327),
    f = i(55935),
    C = i(1870),
    L = i(429368),
    v = i(635552),
    E = i(905357),
    h = i(530618),
    m = i(372654),
    I = i(197831),
    _ = i(755419),
    j = i(58201),
    x = i(391594),
    P = i(215023),
    k = i(854402);
let O = () => {
        let t = (0, l.Z)({ forceFetch: !0 }),
            e = (0, f.vc)(t.endsAt, 'L');
        return {
            isLoading: !t.fetched,
            isFractionalPremiumActive: t.isFractionalPremiumActive,
            expiresAt: e
        };
    },
    y = (t) => {
        let { transitionState: e, product: i, onClose: l, analyticsLocations: f, overrideTitle: y, overrideDescription: N, itemConsumed: S = !0, purchaseType: A = P.o8.ORB } = t,
            Z = (0, r.e7)([C.Z], () => C.Z.purchases),
            g = (0, L.o)(i, Z),
            B = (0, j.W)(i, g),
            { analyticsLocations: R } = (0, d.ZP)([...f, u.Z.COLLECTIBLES_COLLECTED_MODAL]);
        n.useEffect(() => {
            P.Vt.ORB_PROFILE_BADGE === B.skuId && (0, p.Ls)([(0, _.X)()], 600);
        }, [B.skuId]);
        let { isLoading: T, isFractionalPremiumActive: b, expiresAt: w } = O(),
            { environment: F, modalRef: G, confettiCanvas: $, setConfettiCanvas: D, customConfettiDisplayOptions: V } = (0, x.$0)(B, A);
        (0, x.f1)(B, R);
        let W = (0, E.k)(B),
            { handleUseNow: X, isApplying: K } = (0, v.W)({
                product: B,
                onSuccess: l,
                onError: l
            });
        if (T) return (0, s.jsx)(c.$jN, { type: c.$jN.Type.SPINNING_CIRCLE });
        let M = (0, x.Xw)({
                product: B,
                pairedProduct: void 0,
                overrideTitle: y,
                isVariantsGroupEnabled: !1,
                shouldShowPromotionalExperience: !1,
                productName: W,
                pairedProductName: void 0,
                itemConsumed: S
            }),
            q = (0, x.ys)({
                product: B,
                overrideDescription: N,
                productName: W,
                itemConsumed: S,
                isFractionalPremiumActive: b,
                expiresAt: w
            }),
            z = (0, x.cf)({
                product: B,
                onClose: l,
                analyticsLocations: R,
                handleUseNow: X,
                isApplying: K,
                itemConsumed: S
            });
        return (0, s.jsx)(d.Gt, {
            value: R,
            children: (0, s.jsxs)('div', {
                ref: G,
                children: [
                    (0, s.jsx)(o.O_, {
                        ref: D,
                        className: k.confettiCanvas,
                        environment: F
                    }),
                    (0, s.jsx)(a.I, {
                        graphic: {
                            type: 'dynamic',
                            component: c.AX$.COLLECTIBLES_PREVIEW,
                            props: {
                                product: B,
                                itemConsumed: S
                            }
                        },
                        title: M,
                        subtitle: null != q ? q : void 0,
                        onClose: l,
                        transitionState: e,
                        actions: z
                    }),
                    null != V
                        ? (0, s.jsx)(I.i, { options: V })
                        : (0, s.jsx)(h.Z, {
                              confettiTarget: G.current,
                              confettiCanvas: $,
                              sprites: (0, m.vK)(B.categorySkuId)
                          })
                ]
            })
        });
    };
