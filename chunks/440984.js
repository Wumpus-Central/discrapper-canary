n.d(e, { D: () => E }), n(388685);
var i = n(951288),
    a = n(647438),
    r = n(442837),
    s = n(780384),
    l = n(481060),
    o = n(410030),
    c = n(607070),
    u = n(530618),
    d = n(74538),
    m = n(937615),
    p = n(230916),
    x = n(798769),
    f = n(474936),
    _ = n(388032),
    y = n(957759),
    h = n(982404),
    j = n(299156);
function E(t) {
    let {
            premiumSubscription: e,
            premiumType: n,
            onClose: E,
            confettiCanvas: g,
            userWasChurned: C = !1,
            userDiscountOffer: b,
        } = t,
        N = (0, o.ZP)(),
        O = (0, s.wj)(N) ? h : j,
        P = a.useRef(null),
        [I, T] = a.useState(!1),
        R = (0, p._n)(e, f.Xh.PREMIUM_MONTH_TIER_2, b),
        v = (0, d.aS)(f.Xh.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: e.currency,
            paymentSourceId: e.paymentSourceId,
        }),
        S = (0, m.T4)(v.amount, v.currency),
        w = (0, r.e7)([c.Z], () => c.Z.useReducedMotion);
    if (
        (a.useEffect(() => {
            null != P.current && null != R && T(!0);
        }, [P, I, R]),
        null == b || null == R)
    )
        return null;
    let D = _.intl.format(_.t.gPzMHR, {
            numMonths: b.discount.user_usage_limit,
            discountedPrice: R,
            regularPrice: S,
        }),
        k = (0, i.jsx)("div", {
            className: y.whatYouLoseButtonContainer,
            children: (0, i.jsx)(l.zxk, {
                variant: "primary",
                text: _.intl.string(_.t["/r8g/v"]),
                onClick: E,
            }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.Z, {
                premiumType: n,
                className: y.cancellationHeader,
                onClose: E,
            }),
            (0, i.jsx)("div", {
                ref: P,
                children: (0, i.jsx)(l.hzk, {
                    "data-migration-pending": !0,
                    className: y.body,
                    children:
                        null != R
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: y.discountAppliedBody,
                                          children: [
                                              (0, i.jsx)("img", {
                                                  alt: "",
                                                  src: O,
                                                  className: y.nitroIcon,
                                              }),
                                              (0, i.jsx)(l.X6q, {
                                                  variant: "heading-xl/bold",
                                                  children: C ? _.intl.string(_.t.gOOPaG) : _.intl.string(_.t.PZSyRk),
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
                            : (0, i.jsx)(l.$jN, {}),
                }),
            }),
            !w &&
                I &&
                (0, i.jsx)(u.Z, {
                    confettiTarget: P.current,
                    confettiCanvas: g,
                    confettiVelocityMultiplier: 0.75,
                }),
        ],
    });
}
