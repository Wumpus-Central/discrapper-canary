"use strict";
n.d(t, { N: () => E });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(918022),
    o = n(156312),
    l = n(351906),
    d = n(826469),
    _ = n(94420),
    u = n(232467);
let c = (e) => {
        let {
                label: t,
                additionalPaymentSourceDropdownProps: n,
                disabled: o,
                setPaymentSourceId: c,
                location: E,
                subscriptionPaymentSourceId: h,
                onPaymentSourceAdd: m,
                paymentSourceId: f,
            } = e,
            {
                giftCardsEnabled: g,
                giftCardCheckboxProps: p,
                basePaymentSourceDropdownProps: A,
            } = ((e) => {
                let t,
                    { paymentSourceId: n, setPaymentSourceId: i, location: o, subscriptionPaymentSourceId: u } = e,
                    c =
                        ((t = (0, _.t4)((e) => e.checkoutInvoicePreview)),
                        r.useMemo(() => {
                            if (null == t) return [];
                            let e = t.checkoutContext;
                            return null == e || null == e.payment_sources
                                ? []
                                : e.payment_sources.map(d.A.createFromCheckoutContext);
                        }, [t])),
                    E = (0, _.t4)((e) => {
                        let { checkoutInvoicePreview: t } = e;
                        return null != t ? t.total : void 0;
                    }),
                    {
                        dropdownPaymentSources: h,
                        giftCardsEnabled: m,
                        dropdownPaymentSourceId: f,
                        handleDropdownPaymentSourceChange: g,
                        giftCardCheckboxProps: p,
                    } = (0, a.Y)({
                        checkoutPaymentSources: c,
                        paymentSourceId: n,
                        setPaymentSourceId: i,
                        location: o ?? "BaseStatefulPaymentSourceSelector",
                        subscriptionPaymentSourceId: u,
                        itemAmount: E,
                    }),
                    A = r.useMemo(() => {
                        let e = h.find((e) => e.isDefault);
                        return null != e ? e.id : void 0;
                    }, [h]),
                    I = (0, s.bG)([l.A], () => l.A.hidePersonalInformation ?? !1);
                return {
                    giftCardsEnabled: m,
                    giftCardCheckboxProps: p,
                    basePaymentSourceDropdownProps: r.useMemo(
                        () => ({
                            selectedPaymentSourceId: f,
                            paymentSources: h,
                            defaultPaymentSourceId: A,
                            hidePersonalInformation: I,
                            onChange: g,
                        }),
                        [f, h, A, I, g],
                    ),
                };
            })({ paymentSourceId: f, setPaymentSourceId: c, subscriptionPaymentSourceId: h, location: E }),
            I = r.useMemo(() => ({ ...A, ...n, onPaymentSourceAdd: m }), [A, m, n]);
        return (0, i.jsx)(u.nL, {
            label: t,
            giftCardsEnabled: g,
            giftCardCheckboxProps: p,
            paymentSourceDropdownProps: I,
            disabled: o,
        });
    },
    E = (e) => {
        let { setPaymentSourceId: t, paymentSourceId: n } = (0, o.P5)(),
            { setPaymentSourceId: s, paymentSourceId: a } = r.useMemo(
                () => ({ setPaymentSourceId: e.setPaymentSourceId ?? t, paymentSourceId: e.paymentSourceId ?? n }),
                [e.setPaymentSourceId, e.paymentSourceId, t, n],
            );
        return (0, i.jsx)(c, { ...e, setPaymentSourceId: s, paymentSourceId: a });
    };
