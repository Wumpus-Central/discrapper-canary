"use strict";
n.d(t, { K: () => p });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(918022),
    o = n(935899),
    l = n(93159),
    u = n(94420),
    c = n(351906),
    d = n(156312),
    _ = n(985018);
let f = () => {
        let e = (0, o.D)(),
            { setPaymentSourceId: t } = (0, d.P5)(),
            n = (0, u.t4)((e) => {
                let { checkoutInvoicePreview: t } = e;
                return null != t ? t.total : void 0;
            }),
            {
                dropdownPaymentSources: r,
                giftCardsEnabled: l,
                dropdownPaymentSourceId: _,
                handleDropdownPaymentSourceChange: f,
                giftCardCheckboxProps: p,
            } = (0, a.Y)({
                checkoutPaymentSources: e,
                setPaymentSourceId: t,
                location: "PremiumSubscriptionReview",
                itemAmount: n,
            }),
            h = i.useMemo(() => {
                let e = r.find((e) => e.isDefault);
                return null != e ? e.id : void 0;
            }, [r]),
            m = (0, s.bG)([c.A], () => c.A.enabled);
        return {
            giftCardsEnabled: l,
            giftCardCheckboxProps: p,
            basePaymentSourceDropdownProps: i.useMemo(
                () => ({
                    selectedPaymentSourceId: _,
                    paymentSources: r,
                    defaultPaymentSourceId: h,
                    hidePersonalInformation: m,
                    onChange: f,
                }),
                [_, r, h, m, f],
            ),
        };
    },
    p = (e) => {
        let {
                handlePaymentSourceAdd: t,
                isTrial: n,
                isDiscount: s,
                disabled: a,
                hasEntitlements: o,
                eligiblePaymentGateways: u,
                currencyDropdownProps: c,
                label: d = _.intl.string(_.t["u+Cw58"]),
                shouldUseUnifiedCheckoutUI: p,
                paymentSourceDropdownClassName: h,
                paymentSourceDropdownPrependOption: m,
            } = e,
            { giftCardsEnabled: E, giftCardCheckboxProps: g, basePaymentSourceDropdownProps: A } = f(),
            I = i.useMemo(() => (s || null == c ? null : (0, r.jsx)(l.qX, { ...c })), [s, c]),
            T = {
                ...A,
                onPaymentSourceAdd: t,
                newPaymentMethodOptionLabel: o && !n ? _.intl.string(_.t.IGU7El) : null,
                isTrial: n,
                paymentGatewayRestrictions: u,
                shouldUseUnifiedCheckoutUI: p,
                className: h,
                prependOption: m,
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.nL, {
                    label: d,
                    giftCardsEnabled: E,
                    giftCardCheckboxProps: g,
                    paymentSourceDropdownProps: T,
                    disabled: a,
                }),
                I,
            ],
        });
    };
