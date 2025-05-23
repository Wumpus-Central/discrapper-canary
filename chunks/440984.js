n.d(t, { D: () => E }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(607070),
    d = n(530618),
    u = n(74538),
    m = n(937615),
    g = n(230916),
    p = n(798769),
    h = n(474936),
    f = n(388032),
    b = n(583532),
    _ = n(982404),
    x = n(299156);
function E(e) {
    let { premiumSubscription: t, premiumType: n, onClose: E, confettiCanvas: C, userWasChurned: O = !1, userDiscountOffer: j } = e,
        S = (0, o.ZP)(),
        v = (0, l.wj)(S) ? _ : x,
        T = r.useRef(null),
        [N, I] = r.useState(!1),
        y = (0, g._)(t, h.Xh.PREMIUM_MONTH_TIER_2, j),
        A = (0, u.aS)(h.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        P = (0, m.T4)(A.amount, A.currency),
        R = (0, s.e7)([c.Z], () => c.Z.useReducedMotion);
    if (
        (r.useEffect(() => {
            null != T.current && null != y && I(!0);
        }, [T, N, y]),
        null == j || null == y)
    )
        return null;
    let D = f.intl.format(f.t.gPzMHR, {
            numMonths: j.discount.user_usage_limit,
            discountedPrice: y,
            regularPrice: P
        }),
        Z = (0, i.jsx)('div', {
            className: b.whatYouLoseButtonContainer,
            children: (0, i.jsx)(a.zxk, {
                color: a.zxk.Colors.BRAND,
                onClick: E,
                children: f.intl.string(f.t['/r8g/v'])
            })
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.Z, {
                premiumType: n,
                className: b.cancellationHeader,
                onClose: E
            }),
            (0, i.jsx)('div', {
                ref: T,
                children: (0, i.jsx)(a.hzk, {
                    className: b.body,
                    children:
                        null != y
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: b.discountAppliedBody,
                                          children: [
                                              (0, i.jsx)('img', {
                                                  alt: '',
                                                  src: v,
                                                  className: b.nitroIcon
                                              }),
                                              (0, i.jsx)(a.X6q, {
                                                  variant: 'heading-xl/bold',
                                                  children: O ? f.intl.string(f.t.gOOPaG) : f.intl.string(f.t.PZSyRk)
                                              })
                                          ]
                                      }),
                                      (0, i.jsx)('div', {
                                          className: b.bodyString,
                                          children: D
                                      }),
                                      Z
                                  ]
                              })
                            : (0, i.jsx)(a.$jN, {})
                })
            }),
            !R &&
                N &&
                (0, i.jsx)(d.Z, {
                    confettiTarget: T.current,
                    confettiCanvas: C,
                    confettiVelocityMultiplier: 0.75
                })
        ]
    });
}
