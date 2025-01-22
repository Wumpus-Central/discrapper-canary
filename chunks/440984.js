n.d(t, {
    D: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(780384),
    l = n(481060),
    o = n(410030),
    c = n(607070),
    d = n(530618),
    u = n(74538),
    m = n(937615),
    g = n(230916),
    h = n(798769),
    p = n(474936),
    x = n(388032),
    f = n(783899),
    _ = n(982404),
    E = n(299156);
function C(e) {
    let { premiumSubscription: t, premiumType: n, onClose: C, confettiCanvas: T, userWasChurned: S = !1, userDiscountOffer: b } = e,
        I = (0, o.ZP)(),
        N = (0, a.wj)(I) ? _ : E,
        v = r.useRef(null),
        [A, j] = r.useState(!1),
        O = (0, g._)(t, p.Xh.PREMIUM_MONTH_TIER_2, b),
        R = (0, u.aS)(p.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        P = (0, m.T4)(R.amount, R.currency),
        D = (0, s.e7)([c.Z], () => c.Z.useReducedMotion);
    if (
        (r.useEffect(() => {
            null != v.current && null != O && j(!0);
        }, [v, A, O]),
        null == b || null == O)
    )
        return null;
    let y = x.intl.format(x.t.gPzMHR, {
            numMonths: b.discount.user_usage_limit,
            discountedPrice: O,
            regularPrice: P
        }),
        B = (0, i.jsx)('div', {
            className: f.whatYouLoseButtonContainer,
            children: (0, i.jsx)(l.Button, {
                color: l.Button.Colors.BRAND,
                onClick: C,
                children: x.intl.string(x.t['/r8g/v'])
            })
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.Z, {
                premiumType: n,
                className: f.cancellationHeader,
                onClose: C
            }),
            (0, i.jsx)('div', {
                ref: v,
                children: (0, i.jsx)(l.ModalContent, {
                    className: f.body,
                    children:
                        null != O
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: f.discountAppliedBody,
                                          children: [
                                              (0, i.jsx)('img', {
                                                  alt: '',
                                                  src: N,
                                                  className: f.nitroIcon
                                              }),
                                              (0, i.jsx)(l.Heading, {
                                                  variant: 'heading-xl/bold',
                                                  children: S ? x.intl.string(x.t.gOOPaG) : x.intl.string(x.t.PZSyRk)
                                              })
                                          ]
                                      }),
                                      (0, i.jsx)('div', {
                                          className: f.bodyString,
                                          children: y
                                      }),
                                      B
                                  ]
                              })
                            : (0, i.jsx)(l.Spinner, {})
                })
            }),
            !D &&
                A &&
                (0, i.jsx)(d.Z, {
                    confettiTarget: v.current,
                    confettiCanvas: T,
                    confettiVelocityMultiplier: 0.75
                })
        ]
    });
}
