n.d(t, { D: () => C }), n(388685);
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
    b = n(957759),
    y = n(982404),
    h = n(299156);
function C(e) {
    let {
            premiumSubscription: t,
            premiumType: n,
            onClose: C,
            confettiCanvas: g,
            userWasChurned: E = !1,
            userDiscountOffer: j,
        } = e,
        N = (0, l.ZP)(),
        I = (0, s.wj)(N) ? y : h,
        v = r.useRef(null),
        [O, P] = r.useState(!1),
        T = (0, p._)(t, f.Xh.PREMIUM_MONTH_TIER_2, j),
        R = (0, d.aS)(f.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
        }),
        S = (0, m.T4)(R.amount, R.currency),
        D = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
    if (
        (r.useEffect(() => {
            null != v.current && null != T && P(!0);
        }, [v, O, T]),
        null == j || null == T)
    )
        return null;
    let w = x.intl.format(x.t.gPzMHR, {
            numMonths: j.discount.user_usage_limit,
            discountedPrice: T,
            regularPrice: S,
        }),
        k = (0, i.jsx)("div", {
            className: b.whatYouLoseButtonContainer,
            children: (0, i.jsx)(o.zxk, {
                variant: "primary",
                text: x.intl.string(x.t["/r8g/v"]),
                onClick: C,
            }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.Z, {
                premiumType: n,
                className: b.cancellationHeader,
                onClose: C,
            }),
            (0, i.jsx)("div", {
                ref: v,
                children: (0, i.jsx)(o.hzk, {
                    "data-migration-pending": !0,
                    className: b.body,
                    children:
                        null != T
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: b.discountAppliedBody,
                                          children: [
                                              (0, i.jsx)("img", {
                                                  alt: "",
                                                  src: I,
                                                  className: b.nitroIcon,
                                              }),
                                              (0, i.jsx)(o.X6q, {
                                                  variant: "heading-xl/bold",
                                                  children: E ? x.intl.string(x.t.gOOPaG) : x.intl.string(x.t.PZSyRk),
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)("div", {
                                          className: b.bodyString,
                                          children: w,
                                      }),
                                      k,
                                  ],
                              })
                            : (0, i.jsx)(o.$jN, {}),
                }),
            }),
            !D &&
                O &&
                (0, i.jsx)(u.Z, {
                    confettiTarget: v.current,
                    confettiCanvas: g,
                    confettiVelocityMultiplier: 0.75,
                }),
        ],
    });
}
