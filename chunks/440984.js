n.d(t, { D: () => g }), n(388685);
var i = n(951288),
    r = n(647438),
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
    x = n(388032),
    y = n(957759),
    b = n(982404),
    h = n(299156);
function g(e) {
    let {
            premiumSubscription: t,
            premiumType: n,
            onClose: g,
            confettiCanvas: C,
            userWasChurned: j = !1,
            userDiscountOffer: E,
        } = e,
        I = (0, l.ZP)(),
        v = (0, s.wj)(I) ? b : h,
        N = r.useRef(null),
        [P, O] = r.useState(!1),
        T = (0, p._)(t, f.Xh.PREMIUM_MONTH_TIER_2, E),
        R = (0, d.aS)(f.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
        }),
        S = (0, m.T4)(R.amount, R.currency),
        w = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
    if (
        (r.useEffect(() => {
            null != N.current && null != T && O(!0);
        }, [N, P, T]),
        null == E || null == T)
    )
        return null;
    let D = x.intl.format(x.t.gPzMHR, {
            numMonths: E.discount.user_usage_limit,
            discountedPrice: T,
            regularPrice: S,
        }),
        k = (0, i.jsx)("div", {
            className: y.whatYouLoseButtonContainer,
            children: (0, i.jsx)(o.zxk, {
                variant: "primary",
                text: x.intl.string(x.t["/r8g/v"]),
                onClick: g,
            }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.Z, {
                premiumType: n,
                className: y.cancellationHeader,
                onClose: g,
            }),
            (0, i.jsx)("div", {
                ref: N,
                children: (0, i.jsx)(o.hzk, {
                    "data-migration-pending": !0,
                    className: y.body,
                    children:
                        null != T
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: y.discountAppliedBody,
                                          children: [
                                              (0, i.jsx)("img", {
                                                  alt: "",
                                                  src: v,
                                                  className: y.nitroIcon,
                                              }),
                                              (0, i.jsx)(o.X6q, {
                                                  variant: "heading-xl/bold",
                                                  children: j ? x.intl.string(x.t.gOOPaG) : x.intl.string(x.t.PZSyRk),
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)("div", {
                                          className: y.bodyString,
                                          children: D,
                                      }),
                                      k,
                                  ],
                              })
                            : (0, i.jsx)(o.$jN, {}),
                }),
            }),
            !w &&
                P &&
                (0, i.jsx)(u.Z, {
                    confettiTarget: N.current,
                    confettiCanvas: C,
                    confettiVelocityMultiplier: 0.75,
                }),
        ],
    });
}
