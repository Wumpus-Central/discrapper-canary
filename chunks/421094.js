"use strict";
n.d(t, { K: () => l });
var r = n(627968),
    i = n(64700),
    s = n(61572),
    a = n(93159),
    o = n(985018);
let l = (e) => {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            isDiscount: l,
            disabled: u,
            hasEntitlements: c,
            eligiblePaymentGateways: d,
            currencyDropdownProps: _,
            label: f = o.intl.string(o.t["u+Cw58"]),
            shouldUseUnifiedCheckoutUI: p,
            paymentSourceDropdownClassName: h,
            paymentSourceDropdownPrependOption: E,
            location: m = "PremiumSubscriptionReview",
        } = e,
        g = i.useMemo(() => (l || null == _ ? null : (0, r.jsx)(a.qX, { ..._ })), [l, _]),
        A = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: c && !n ? o.intl.string(o.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: d,
                shouldUseUnifiedCheckoutUI: p,
                className: h,
                prependOption: E,
            }),
            [c, n, d, p, h, E],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.N, {
                label: f,
                disabled: u,
                onPaymentSourceAdd: t,
                additionalPaymentSourceDropdownProps: A,
                location: m,
            }),
            g,
        ],
    });
};
