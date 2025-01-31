n.d(t, { D: () => f }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(607070),
    d = n(530618),
    u = n(74538),
    m = n(937615),
    h = n(230916),
    g = n(798769),
    _ = n(474936),
    x = n(388032),
    p = n(783899),
    E = n(982404),
    C = n(299156);
function f(e) {
    let { premiumSubscription: t, premiumType: n, onClose: f, confettiCanvas: T, userWasChurned: N = !1, userDiscountOffer: I } = e,
        S = (0, o.ZP)(),
        b = (0, l.wj)(S) ? E : C,
        v = s.useRef(null),
        [j, A] = s.useState(!1),
        O = (0, h._)(t, _.Xh.PREMIUM_MONTH_TIER_2, I),
        R = (0, u.aS)(_.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        P = (0, m.T4)(R.amount, R.currency),
        D = (0, r.e7)([c.Z], () => c.Z.useReducedMotion);
    if (
        (s.useEffect(() => {
            null != v.current && null != O && A(!0);
        }, [v, j, O]),
        null == I || null == O)
    )
        return null;
    let y = x.intl.format(x.t.gPzMHR, {
            numMonths: I.discount.user_usage_limit,
            discountedPrice: O,
            regularPrice: P
        }),
        Z = (0, i.jsx)('div', {
            className: p.whatYouLoseButtonContainer,
            children: (0, i.jsx)(a.zxk, {
                color: a.zxk.Colors.BRAND,
                onClick: f,
                children: x.intl.string(x.t['/r8g/v'])
            })
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.Z, {
                premiumType: n,
                className: p.cancellationHeader,
                onClose: f
            }),
            (0, i.jsx)('div', {
                ref: v,
                children: (0, i.jsx)(a.hzk, {
                    className: p.body,
                    children:
                        null != O
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: p.discountAppliedBody,
                                          children: [
                                              (0, i.jsx)('img', {
                                                  alt: '',
                                                  src: b,
                                                  className: p.nitroIcon
                                              }),
                                              (0, i.jsx)(a.X6q, {
                                                  variant: 'heading-xl/bold',
                                                  children: N ? x.intl.string(x.t.gOOPaG) : x.intl.string(x.t.PZSyRk)
                                              })
                                          ]
                                      }),
                                      (0, i.jsx)('div', {
                                          className: p.bodyString,
                                          children: y
                                      }),
                                      Z
                                  ]
                              })
                            : (0, i.jsx)(a.$jN, {})
                })
            }),
            !D &&
                j &&
                (0, i.jsx)(d.Z, {
                    confettiTarget: v.current,
                    confettiCanvas: T,
                    confettiVelocityMultiplier: 0.75
                })
        ]
    });
}
