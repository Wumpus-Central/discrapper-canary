n.d(t, { K: () => s });
var l = n(627968),
    i = n(64700),
    r = n(376843),
    a = n(375708);
let s = (e) => {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            isDiscount: s,
            disabled: o,
            hasEntitlements: u,
            eligiblePaymentGateways: c,
            label: d = a.intl.string(a.t["u+Cw58"]),
            shouldUseUnifiedCheckoutUI: p,
            paymentSourceDropdownClassName: m,
            paymentSourceDropdownPrependOption: h,
            location: C = "PremiumSubscriptionReview",
        } = e,
        A = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: u && !n ? a.intl.string(a.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: c,
                shouldUseUnifiedCheckoutUI: p,
                className: m,
                prependOption: h,
            }),
            [u, n, c, p, m, h],
        );
    return (0, l.jsx)(r.N, {
        label: d,
        disabled: o,
        onPaymentSourceAdd: t,
        additionalPaymentSourceDropdownProps: A,
        location: C,
        hideCurrencySelect: s,
    });
};
