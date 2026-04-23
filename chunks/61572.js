"use strict";
n.d(t, { N: () => c });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(606267),
    o = n(156312),
    l = n(351906),
    d = n(935899),
    _ = n(232467);
let u = (e) => {
        let {
                label: t,
                additionalPaymentSourceDropdownProps: n,
                disabled: o,
                setPaymentSourceId: u,
                location: c,
                subscriptionPaymentSourceId: E,
                onPaymentSourceAdd: h,
                paymentSourceId: m,
            } = e,
            {
                giftCardsEnabled: f,
                giftCardCheckboxProps: g,
                walletCoversSubtotal: p,
                basePaymentSourceDropdownProps: A,
            } = ((e) => {
                let { paymentSourceId: t, setPaymentSourceId: n, location: i, subscriptionPaymentSourceId: o } = e,
                    _ = (0, d.D)(),
                    {
                        dropdownPaymentSources: u,
                        giftCardsEnabled: c,
                        dropdownPaymentSourceId: E,
                        handleDropdownPaymentSourceChange: h,
                        giftCardCheckboxProps: m,
                        walletCoversSubtotal: f,
                    } = (0, a.Y0)({
                        checkoutPaymentSources: _,
                        paymentSourceId: t,
                        setPaymentSourceId: n,
                        location: i ?? "BaseStatefulPaymentSourceSelector",
                        subscriptionPaymentSourceId: o,
                    }),
                    g = r.useMemo(() => {
                        let e = u.find((e) => e.isDefault);
                        return null != e ? e.id : void 0;
                    }, [u]),
                    p = (0, s.bG)([l.A], () => l.A.hidePersonalInformation ?? !1);
                return {
                    giftCardsEnabled: c,
                    giftCardCheckboxProps: m,
                    walletCoversSubtotal: f,
                    basePaymentSourceDropdownProps: r.useMemo(
                        () => ({
                            selectedPaymentSourceId: E,
                            paymentSources: u,
                            defaultPaymentSourceId: g,
                            hidePersonalInformation: p,
                            onChange: h,
                        }),
                        [E, u, g, p, h],
                    ),
                };
            })({ paymentSourceId: m, setPaymentSourceId: u, subscriptionPaymentSourceId: E, location: c }),
            I = r.useMemo(() => ({ ...A, ...n, onPaymentSourceAdd: h }), [A, h, n]);
        return (0, i.jsx)(_.nL, {
            label: t,
            giftCardsEnabled: f,
            giftCardCheckboxProps: g,
            paymentSourceDropdownProps: I,
            showCheckboxAboveDropdown: p,
            disabled: o,
        });
    },
    c = (e) => {
        let { setPaymentSourceId: t, paymentSourceId: n } = (0, o.P5)(),
            { setPaymentSourceId: s, paymentSourceId: a } = r.useMemo(
                () => ({ setPaymentSourceId: e.setPaymentSourceId ?? t, paymentSourceId: e.paymentSourceId ?? n }),
                [e.setPaymentSourceId, e.paymentSourceId, t, n],
            );
        return (0, i.jsx)(u, { ...e, setPaymentSourceId: s, paymentSourceId: a });
    };
