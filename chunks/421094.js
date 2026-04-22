n.d(t, { K: () => o });
var l = n(627968),
    i = n(64700),
    a = n(61572),
    r = n(93159),
    s = n(985018);
let o = (e) => {
    let {
            handlePaymentSourceAdd: t,
            isTrial: n,
            isDiscount: o,
            disabled: u,
            hasEntitlements: c,
            eligiblePaymentGateways: d,
            currencyDropdownProps: p,
            label: m = s.intl.string(s.t["u+Cw58"]),
            shouldUseUnifiedCheckoutUI: h,
            paymentSourceDropdownClassName: A,
            paymentSourceDropdownPrependOption: _,
            location: C = "PremiumSubscriptionReview",
        } = e,
        E = i.useMemo(() => (o || null == p ? null : (0, l.jsx)(r.qX, { ...p })), [o, p]),
        y = i.useMemo(
            () => ({
                newPaymentMethodOptionLabel: c && !n ? s.intl.string(s.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: d,
                shouldUseUnifiedCheckoutUI: h,
                className: A,
                prependOption: _,
            }),
            [c, n, d, h, A, _],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.N, {
                label: m,
                disabled: u,
                onPaymentSourceAdd: t,
                additionalPaymentSourceDropdownProps: y,
                location: C,
            }),
            E,
        ],
    });
};
