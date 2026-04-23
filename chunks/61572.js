"use strict";
n.d(t, { N: () => f });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(918022),
    o = n(156312),
    l = n(351906),
    u = n(935899),
    c = n(93159),
    d = n(94420);
let _ = (e) => {
        let {
                label: t,
                additionalPaymentSourceDropdownProps: n,
                disabled: o,
                setPaymentSourceId: _,
                location: f,
                subscriptionPaymentSourceId: p,
                onPaymentSourceAdd: h,
                paymentSourceId: E,
            } = e,
            {
                giftCardsEnabled: m,
                giftCardCheckboxProps: g,
                basePaymentSourceDropdownProps: A,
            } = ((e) => {
                let { paymentSourceId: t, setPaymentSourceId: n, location: r, subscriptionPaymentSourceId: o } = e,
                    c = (0, u.D)(),
                    _ = (0, d.t4)((e) => {
                        let { checkoutInvoicePreview: t } = e;
                        return null != t ? t.total : void 0;
                    }),
                    {
                        dropdownPaymentSources: f,
                        giftCardsEnabled: p,
                        dropdownPaymentSourceId: h,
                        handleDropdownPaymentSourceChange: E,
                        giftCardCheckboxProps: m,
                    } = (0, a.Y)({
                        checkoutPaymentSources: c,
                        paymentSourceId: t,
                        setPaymentSourceId: n,
                        location: r ?? "BaseStatefulPaymentSourceSelector",
                        subscriptionPaymentSourceId: o,
                        itemAmount: _,
                    }),
                    g = i.useMemo(() => {
                        let e = f.find((e) => e.isDefault);
                        return null != e ? e.id : void 0;
                    }, [f]),
                    A = (0, s.bG)([l.A], () => l.A.hidePersonalInformation ?? !1);
                return {
                    giftCardsEnabled: p,
                    giftCardCheckboxProps: m,
                    basePaymentSourceDropdownProps: i.useMemo(
                        () => ({
                            selectedPaymentSourceId: h,
                            paymentSources: f,
                            defaultPaymentSourceId: g,
                            hidePersonalInformation: A,
                            onChange: E,
                        }),
                        [h, f, g, A, E],
                    ),
                };
            })({ paymentSourceId: E, setPaymentSourceId: _, subscriptionPaymentSourceId: p, location: f }),
            I = i.useMemo(() => ({ ...A, ...n, onPaymentSourceAdd: h }), [A, h, n]);
        return (0, r.jsx)(c.nL, {
            label: t,
            giftCardsEnabled: m,
            giftCardCheckboxProps: g,
            paymentSourceDropdownProps: I,
            disabled: o,
        });
    },
    f = (e) => {
        let { setPaymentSourceId: t, paymentSourceId: n } = (0, o.P5)(),
            { setPaymentSourceId: s, paymentSourceId: a } = i.useMemo(
                () => ({ setPaymentSourceId: e.setPaymentSourceId ?? t, paymentSourceId: e.paymentSourceId ?? n }),
                [e.setPaymentSourceId, e.paymentSourceId, t, n],
            );
        return (0, r.jsx)(_, { ...e, setPaymentSourceId: s, paymentSourceId: a });
    };
