n.d(t, { D: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(780384),
    l = n(481060),
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
    N = n(982404),
    x = n(299156);
function _(e) {
    let { premiumSubscription: t, premiumType: n, onClose: _, confettiCanvas: E, userWasChurned: j = !1, userDiscountOffer: O } = e,
        C = (0, o.ZP)(),
        S = (0, a.wj)(C) ? N : x,
        v = i.useRef(null),
        [T, I] = i.useState(!1),
        y = (0, g._)(t, h.Xh.PREMIUM_MONTH_TIER_2, O),
        A = (0, u.aS)(h.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        P = (0, m.T4)(A.amount, A.currency),
        R = (0, s.e7)([c.Z], () => c.Z.useReducedMotion);
    if (
        (i.useEffect(() => {
            null != v.current && null != y && I(!0);
        }, [v, T, y]),
        null == O || null == y)
    )
        return null;
    let D = f.NW.format(f.t.gPzMHR, {
            numMonths: O.discount.user_usage_limit,
            discountedPrice: y,
            regularPrice: P
        }),
        Z = (0, r.jsx)('div', {
            className: b.whatYouLoseButtonContainer,
            children: (0, r.jsx)(l.zxk, {
                color: l.zxk.Colors.BRAND,
                onClick: _,
                children: f.NW.string(f.t['/r8g/v'])
            })
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.Z, {
                premiumType: n,
                className: b.cancellationHeader,
                onClose: _
            }),
            (0, r.jsx)('div', {
                ref: v,
                children: (0, r.jsx)(l.hzk, {
                    className: b.body,
                    children:
                        null != y
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: b.discountAppliedBody,
                                          children: [
                                              (0, r.jsx)('img', {
                                                  alt: '',
                                                  src: S,
                                                  className: b.nitroIcon
                                              }),
                                              (0, r.jsx)(l.X6q, {
                                                  variant: 'heading-xl/bold',
                                                  children: j ? f.NW.string(f.t.gOOPaG) : f.NW.string(f.t.PZSyRk)
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)('div', {
                                          className: b.bodyString,
                                          children: D
                                      }),
                                      Z
                                  ]
                              })
                            : (0, r.jsx)(l.$jN, {})
                })
            }),
            !R &&
                T &&
                (0, r.jsx)(d.Z, {
                    confettiTarget: v.current,
                    confettiCanvas: E,
                    confettiVelocityMultiplier: 0.75
                })
        ]
    });
}
