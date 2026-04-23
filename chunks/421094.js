"use strict";
n.d(t, { K: () => l });
var i = n(627968),
    r = n(64700),
    s = n(61572),
    a = n(232467),
    o = n(985018);
let l = (e) => {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            isDiscount: l,
            disabled: d,
            hasEntitlements: _,
            eligiblePaymentGateways: u,
            currencyDropdownProps: c,
            label: E = o.intl.string(o.t["u+Cw58"]),
            shouldUseUnifiedCheckoutUI: h,
            paymentSourceDropdownClassName: m,
            paymentSourceDropdownPrependOption: f,
            location: g = "PremiumSubscriptionReview",
        } = e,
        p = r.useMemo(() => (l || null == c ? null : (0, i.jsx)(a.qX, { ...c })), [l, c]),
        A = r.useMemo(
            () => ({
                newPaymentMethodOptionLabel: _ && !n ? o.intl.string(o.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: u,
                shouldUseUnifiedCheckoutUI: h,
                className: m,
                prependOption: f,
            }),
            [_, n, u, h, m, f],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.N, {
                label: E,
                disabled: d,
                onPaymentSourceAdd: t,
                additionalPaymentSourceDropdownProps: A,
                location: g,
            }),
            p,
        ],
    });
};
