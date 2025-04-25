n.d(t, { D: () => E }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(607070),
    d = n(530618),
    u = n(74538),
    m = n(937615),
    p = n(230916),
    g = n(798769),
    h = n(474936),
    f = n(388032),
    b = n(583532),
    _ = n(982404),
    x = n(299156);
function E(e) {
    let { premiumSubscription: t, premiumType: n, onClose: E, confettiCanvas: j, userWasChurned: C = !1, userDiscountOffer: O } = e,
        S = (0, o.ZP)(),
        v = (0, l.wj)(S) ? _ : x,
        T = r.useRef(null),
        [I, N] = r.useState(!1),
        y = (0, p._)(t, h.Xh.PREMIUM_MONTH_TIER_2, O),
        A = (0, u.aS)(h.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        P = (0, m.T4)(A.amount, A.currency),
        R = (0, s.e7)([c.Z], () => c.Z.useReducedMotion);
    if (
        (r.useEffect(() => {
            null != T.current && null != y && N(!0);
        }, [T, I, y]),
        null == O || null == y)
    )
        return null;
    let D = f.intl.format(f.t.gPzMHR, {
            numMonths: O.discount.user_usage_limit,
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
            (0, i.jsx)(g.Z, {
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
                                                  children: C ? f.intl.string(f.t.gOOPaG) : f.intl.string(f.t.PZSyRk)
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
                I &&
                (0, i.jsx)(d.Z, {
                    confettiTarget: T.current,
                    confettiCanvas: j,
                    confettiVelocityMultiplier: 0.75
                })
        ]
    });
}
