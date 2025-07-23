(n.d(t, { D: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(607070),
    u = n(530618),
    d = n(74538),
    m = n(937615),
    _ = n(230916),
    p = n(798769),
    f = n(474936),
    C = n(388032),
    h = n(583532),
    x = n(982404),
    y = n(299156);
function b(e) {
    let { premiumSubscription: t, premiumType: n, onClose: b, confettiCanvas: g, userWasChurned: j = !1, userDiscountOffer: v } = e,
        I = (0, l.ZP)(),
        T = (0, a.wj)(I) ? x : y,
        E = i.useRef(null),
        [P, O] = i.useState(!1),
        S = (0, _._)(t, f.Xh.PREMIUM_MONTH_TIER_2, v),
        N = (0, d.aS)(f.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        R = (0, m.T4)(N.amount, N.currency),
        D = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
    if (
        (i.useEffect(() => {
            null != E.current && null != S && O(!0);
        }, [E, P, S]),
        null == v || null == S)
    )
        return null;
    let w = C.intl.format(C.t.gPzMHR, {
            numMonths: v.discount.user_usage_limit,
            discountedPrice: S,
            regularPrice: R
        }),
        A = (0, r.jsx)('div', {
            className: h.whatYouLoseButtonContainer,
            children: (0, r.jsx)(s.zxk, {
                variant: 'primary',
                text: C.intl.string(C.t['/r8g/v']),
                onClick: b
            })
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.Z, {
                premiumType: n,
                className: h.cancellationHeader,
                onClose: b
            }),
            (0, r.jsx)('div', {
                ref: E,
                children: (0, r.jsx)(s.hzk, {
                    className: h.body,
                    children:
                        null != S
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: h.discountAppliedBody,
                                          children: [
                                              (0, r.jsx)('img', {
                                                  alt: '',
                                                  src: T,
                                                  className: h.nitroIcon
                                              }),
                                              (0, r.jsx)(s.X6q, {
                                                  variant: 'heading-xl/bold',
                                                  children: j ? C.intl.string(C.t.gOOPaG) : C.intl.string(C.t.PZSyRk)
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)('div', {
                                          className: h.bodyString,
                                          children: w
                                      }),
                                      A
                                  ]
                              })
                            : (0, r.jsx)(s.$jN, {})
                })
            }),
            !D &&
                P &&
                (0, r.jsx)(u.Z, {
                    confettiTarget: E.current,
                    confettiCanvas: g,
                    confettiVelocityMultiplier: 0.75
                })
        ]
    });
}
