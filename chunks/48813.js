(n.d(t, { I: () => j }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(505266),
    a = n(512722),
    s = n.n(a),
    l = n(906732),
    c = n(626135),
    u = n(74538),
    d = n(140465),
    m = n(562218),
    _ = n(284829),
    p = n(586920),
    f = n(45474),
    C = n(594135),
    h = n(407965),
    x = n(501090),
    y = n(474936),
    b = n(981631),
    g = n(301692);
let j = (e) => {
    var t;
    let { analyticsLocation: n, analyticsLocations: a, onClose: j, transitionState: I, premiumSubscription: v, discountPrimary: T } = e,
        { initialStep: E } = e,
        P = i.useRef(new o.qA()),
        [O, S] = i.useState(null),
        N = null == (t = (0, u.Af)(v)) ? void 0 : t.planId,
        R = null != N ? u.ZP.getPremiumType(N) : null;
    s()(null != R, 'Should not be cancelling Nitro without premiumType');
    let D = R === y.p9.TIER_0 || R === y.p9.TIER_1 || R === y.p9.TIER_2;
    null == E && (E = D ? f.R.WHAT_YOU_LOSE : f.R.CONFIRM);
    let [w, A, L, k] = (0, x.q)(E, v, a),
        M = (0, d.UV)(),
        { churnUserDiscountOffer: U, isFetchingChurnDiscountOffer: F } = (0, d.WR)(!M || w !== f.R.WHAT_YOU_LOSE),
        B = (e) => {
            (j(),
                c.default.track(
                    b.rMx.CANCELLATION_FLOW_STEP,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })(
                        {
                            from_step: f.O[e],
                            to_step: null,
                            step_duration_ms: Date.now() - L,
                            flow_duration_ms: Date.now() - k,
                            location_stack: a
                        },
                        (0, x.b)(v)
                    )
                ));
        },
        Z = i.useCallback(() => {
            switch (w) {
                case f.R.CONFIRM:
                    return (0, r.jsx)(m.G, {});
                case f.R.CONFIRM_DISCOUNT:
                    return (0, r.jsx)(_.U, {});
                case f.R.DISCOUNT_APPLIED:
                    return (0, r.jsx)(p.i, {});
                case f.R.WHAT_YOU_LOSE:
                default:
                    return (0, r.jsx)(h.n, {});
            }
        }, [w]);
    return (0, r.jsx)(l.Gt, {
        value: a,
        children: (0, r.jsxs)(C.D.Provider, {
            value: {
                setStep: A,
                premiumType: R,
                onClose: () => B(w),
                transitionState: I,
                premiumSubscription: v,
                analyticsLocations: a,
                analyticsLocation: n,
                confettiCanvas: O,
                discountPrimary: T,
                churnUserDiscountOffer: U,
                isFetchingChurnDiscountOffer: M && F
            },
            children: [
                (0, r.jsx)(o.O_, {
                    ref: S,
                    className: g.confettiCanvas,
                    environment: P.current
                }),
                Z()
            ]
        })
    });
};
