n.d(t, { D: () => g }), n(388685);
var i = n(255367),
    r = n(73800),
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
function g(e) {
    let {
            premiumSubscription: t,
            premiumType: n,
            onClose: g,
            confettiCanvas: C,
            userWasChurned: j = !1,
            userDiscountOffer: E,
        } = e,
        O = (0, l.ZP)(),
        P = (0, s.wj)(O) ? y : h,
        v = r.useRef(null),
        [N, I] = r.useState(!1),
        T = (0, p._)(t, f.Xh.PREMIUM_MONTH_TIER_2, E),
        S = (0, d.aS)(f.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
        }),
        R = (0, m.T4)(S.amount, S.currency),
        w = (0, a.e7)([c.Z], () => c.Z.useReducedMotion);
    if (
        (r.useEffect(() => {
            null != v.current && null != T && I(!0);
        }, [v, N, T]),
        null == E || null == T)
    )
        return null;
    let D = b.intl.format(b.t.gPzMHR, {
            numMonths: E.discount.user_usage_limit,
            discountedPrice: T,
            regularPrice: R,
        }),
        k = (0, i.jsx)("div", {
            className: x.whatYouLoseButtonContainer,
            children: (0, i.jsx)(o.zxk, {
                variant: "primary",
                text: b.intl.string(b.t["/r8g/v"]),
                onClick: g,
            }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.Z, {
                premiumType: n,
                className: x.cancellationHeader,
                onClose: g,
            }),
            (0, i.jsx)("div", {
                ref: v,
                children: (0, i.jsx)(o.hzk, {
                    "data-migration-pending": !0,
                    className: x.body,
                    children:
                        null != T
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: x.discountAppliedBody,
                                          children: [
                                              (0, i.jsx)("img", {
                                                  alt: "",
                                                  src: P,
                                                  className: x.nitroIcon,
                                              }),
                                              (0, i.jsx)(o.X6q, {
                                                  variant: "heading-xl/bold",
                                                  children: j ? b.intl.string(b.t.gOOPaG) : b.intl.string(b.t.PZSyRk),
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)("div", {
                                          className: x.bodyString,
                                          children: D,
                                      }),
                                      k,
                                  ],
                              })
                            : (0, i.jsx)(o.$jN, {}),
                }),
            }),
            !w &&
                N &&
                (0, i.jsx)(u.Z, {
                    confettiTarget: v.current,
                    confettiCanvas: C,
                    confettiVelocityMultiplier: 0.75,
                }),
        ],
    });
}
