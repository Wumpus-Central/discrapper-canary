n.d(t, { K: () => s });
var l = n(627968),
    a = n(64700),
    i = n(61572),
    r = n(375708);
let s = (e) => {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            isDiscount: s,
            disabled: o,
            hasEntitlements: u,
            eligiblePaymentGateways: c,
            label: d = r.intl.string(r.t["u+Cw58"]),
            shouldUseUnifiedCheckoutUI: p,
            paymentSourceDropdownClassName: m,
            paymentSourceDropdownPrependOption: h,
            location: C = "PremiumSubscriptionReview",
        } = e,
        A = a.useMemo(
            () => ({
                newPaymentMethodOptionLabel: u && !n ? r.intl.string(r.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: c,
                shouldUseUnifiedCheckoutUI: p,
                className: m,
                prependOption: h,
            }),
            [u, n, c, p, m, h],
        );
    return (0, l.jsx)(i.N, {
        label: d,
        disabled: o,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: A,
        location: C,
        hideCurrencySelect: s,
    });
};
