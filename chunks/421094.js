n.d(t, { K: () => o });
var l = n(627968),
    a = n(64700),
    i = n(61572),
    s = n(93159),
    r = n(985018);
let o = (e) => {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            isDiscount: o,
            disabled: u,
            hasEntitlements: c,
            eligiblePaymentGateways: d,
            currencyDropdownProps: p,
            label: m = r.intl.string(r.t["u+Cw58"]),
            shouldUseUnifiedCheckoutUI: h,
            paymentSourceDropdownClassName: A,
            paymentSourceDropdownPrependOption: C,
            location: E = "PremiumSubscriptionReview",
        } = e,
        y = a.useMemo(() => (o || null == p ? null : (0, l.jsx)(s.qX, { ...p })), [o, p]),
        P = a.useMemo(
            () => ({
                newPaymentMethodOptionLabel: c && !n ? r.intl.string(r.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: d,
                shouldUseUnifiedCheckoutUI: h,
                className: A,
                prependOption: C,
            }),
            [c, n, d, h, A, C],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.N, {
                label: m,
                disabled: u,
                onPaymentSourceAdd: t,
                additionalPaymentSourceDropdownProps: P,
                location: E,
            }),
            y,
        ],
    });
};
