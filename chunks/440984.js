(n.d(t, { D: () => C }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    s = n(780384),
    o = n(481060),
    l = n(410030),
    c = n(607070),
    u = n(530618),
    d = n(74538),
    m = n(937615),
    p = n(230916),
    _ = n(798769),
    f = n(474936),
    b = n(388032),
    x = n(583532),
    y = n(982404),
    h = n(299156);
function C(e) {
    let { premiumSubscription: t, premiumType: n, onClose: C, confettiCanvas: j, userWasChurned: E = !1, userDiscountOffer: O } = e,
        P = (0, l.ZP)(),
        g = (0, s.wj)(P) ? y : h,
        v = i.useRef(null),
        [N, I] = i.useState(!1),
        T = (0, p._)(t, f.Xh.PREMIUM_MONTH_TIER_2, O),
        S = (0, d.aS)(f.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        R = (0, m.T4)(S.amount, S.currency),
        w = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
    if (
        (i.useEffect(() => {
            null != v.current && null != T && I(!0);
        }, [v, N, T]),
        null == O || null == T)
    )
        return null;
    let D = b.intl.format(b.t.gPzMHR, {
            numMonths: O.discount.user_usage_limit,
            discountedPrice: T,
            regularPrice: R
        }),
        k = (0, r.jsx)('div', {
            className: x.whatYouLoseButtonContainer,
            children: (0, r.jsx)(o.zxk, {
                variant: 'primary',
                text: b.intl.string(b.t['/r8g/v']),
                onClick: C
            })
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_.Z, {
                premiumType: n,
                className: x.cancellationHeader,
                onClose: C
            }),
            (0, r.jsx)('div', {
                ref: v,
                children: (0, r.jsx)(o.hzk, {
                    className: x.body,
                    children:
                        null != T
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: x.discountAppliedBody,
                                          children: [
                                              (0, r.jsx)('img', {
                                                  alt: '',
                                                  src: g,
                                                  className: x.nitroIcon
                                              }),
                                              (0, r.jsx)(o.X6q, {
                                                  variant: 'heading-xl/bold',
                                                  children: E ? b.intl.string(b.t.gOOPaG) : b.intl.string(b.t.PZSyRk)
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)('div', {
                                          className: x.bodyString,
                                          children: D
                                      }),
                                      k
                                  ]
                              })
                            : (0, r.jsx)(o.$jN, {})
                })
            }),
            !w &&
                N &&
                (0, r.jsx)(u.Z, {
                    confettiTarget: v.current,
                    confettiCanvas: j,
                    confettiVelocityMultiplier: 0.75
                })
        ]
    });
}
