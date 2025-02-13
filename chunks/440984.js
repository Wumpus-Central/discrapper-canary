n.d(t, { D: () => N }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(607070),
    d = n(530618),
    u = n(74538),
    h = n(937615),
    m = n(230916),
    g = n(798769),
    x = n(474936),
    _ = n(388032),
    p = n(804247),
    E = n(982404),
    C = n(299156);
function N(e) {
    let { premiumSubscription: t, premiumType: n, onClose: N, confettiCanvas: f, userWasChurned: I = !1, userDiscountOffer: T } = e,
        S = (0, o.ZP)(),
        j = (0, r.wj)(S) ? E : C,
        v = s.useRef(null),
        [b, A] = s.useState(!1),
        O = (0, m._)(t, x.Xh.PREMIUM_MONTH_TIER_2, T),
        R = (0, u.aS)(x.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        D = (0, h.T4)(R.amount, R.currency),
        P = (0, l.e7)([c.Z], () => c.Z.useReducedMotion);
    if (
        (s.useEffect(() => {
            null != v.current && null != O && A(!0);
        }, [v, b, O]),
        null == T || null == O)
    )
        return null;
    let y = _.intl.format(_.t.gPzMHR, {
            numMonths: T.discount.user_usage_limit,
            discountedPrice: O,
            regularPrice: D
        }),
        Z = (0, i.jsx)('div', {
            className: p.whatYouLoseButtonContainer,
            children: (0, i.jsx)(a.zxk, {
                color: a.zxk.Colors.BRAND,
                onClick: N,
                children: _.intl.string(_.t['/r8g/v'])
            })
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.Z, {
                premiumType: n,
                className: p.cancellationHeader,
                onClose: N
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
                                                  src: j,
                                                  className: p.nitroIcon
                                              }),
                                              (0, i.jsx)(a.X6q, {
                                                  variant: 'heading-xl/bold',
                                                  children: I ? _.intl.string(_.t.gOOPaG) : _.intl.string(_.t.PZSyRk)
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
            !P &&
                b &&
                (0, i.jsx)(d.Z, {
                    confettiTarget: v.current,
                    confettiCanvas: f,
                    confettiVelocityMultiplier: 0.75
                })
        ]
    });
}
