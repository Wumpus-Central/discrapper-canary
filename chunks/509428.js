(i.d(e, { default: () => S }), i(388685));
var s = i(255367),
    n = i(73800),
    o = i(505266),
    r = i(399606),
    a = i(834023),
    c = i(667202),
    u = i(481060),
    d = i(100527),
    l = i(906732),
    p = i(975298),
    f = i(350327),
    C = i(55935),
    L = i(1870),
    v = i(429368),
    E = i(635552),
    h = i(905357),
    I = i(530618),
    _ = i(372654),
    m = i(197831),
    j = i(755419),
    x = i(58201),
    P = i(391594),
    k = i(215023),
    O = i(854402);
let N = () => {
        let t = (0, p.Z)({ forceFetch: !0 }),
            e = (0, C.vc)(t.endsAt, 'L');
        return {
            isLoading: !t.fetched,
            isFractionalPremiumActive: t.isFractionalPremiumActive,
            expiresAt: e
        };
    },
    S = (t) => {
        let { transitionState: e, product: i, onClose: p, analyticsLocations: C, overrideTitle: S, overrideDescription: y, itemConsumed: Z = !0, purchaseType: g = k.o8.ORB } = t,
            A = (0, r.e7)([L.Z], () => L.Z.purchases),
            B = (0, v.o)(i, A),
            R = (0, x.W)(i, B),
            { analyticsLocations: T } = (0, l.ZP)([...C, d.Z.COLLECTIBLES_COLLECTED_MODAL]);
        n.useEffect(() => {
            k.Vt.ORB_PROFILE_BADGE === R.skuId && (0, f.Ls)([(0, j.X)()], 600);
        }, [R.skuId]);
        let { isLoading: b, isFractionalPremiumActive: w, expiresAt: F } = N(),
            { environment: G, modalRef: D, confettiCanvas: V, setConfettiCanvas: W, customConfettiDisplayOptions: $ } = (0, P.$0)(R, g);
        (0, P.f1)(R, T);
        let K = (0, h.k)(R),
            { handleUseNow: X, isApplying: M } = (0, E.W)({
                product: R,
                onSuccess: p,
                onError: p
            });
        if (b) return (0, s.jsx)(u.$jN, { type: u.$jN.Type.SPINNING_CIRCLE });
        let q = (0, P.Xw)({
                product: R,
                pairedProduct: void 0,
                overrideTitle: S,
                isVariantsGroupEnabled: !1,
                shouldShowPromotionalExperience: !1,
                productName: K,
                pairedProductName: void 0,
                itemConsumed: Z
            }),
            z = (0, P.ys)({
                product: R,
                overrideDescription: y,
                productName: K,
                itemConsumed: Z,
                isFractionalPremiumActive: w,
                expiresAt: F
            }),
            H = (0, P.cf)({
                product: R,
                onClose: p,
                analyticsLocations: T,
                handleUseNow: X,
                isApplying: M,
                itemConsumed: Z
            });
        return (0, s.jsx)(l.Gt, {
            value: T,
            children: (0, s.jsxs)('div', {
                ref: D,
                children: [
                    (0, s.jsx)(o.O_, {
                        ref: W,
                        className: O.confettiCanvas,
                        environment: G
                    }),
                    (0, s.jsx)(c.I, {
                        graphic: {
                            type: a.tK.COLLECTIBLES_PREVIEW,
                            props: {
                                product: R,
                                itemConsumed: Z
                            }
                        },
                        title: q,
                        subtitle: null != z ? z : void 0,
                        onClose: p,
                        transitionState: e,
                        actions: H
                    }),
                    null != $
                        ? (0, s.jsx)(m.i, { options: $ })
                        : (0, s.jsx)(I.Z, {
                              confettiTarget: D.current,
                              confettiCanvas: V,
                              sprites: (0, _.vK)(R.categorySkuId)
                          })
                ]
            })
        });
    };
