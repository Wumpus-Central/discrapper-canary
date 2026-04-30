n.d(t, { N: () => p });
var l = n(627968),
    a = n(64700),
    i = n(17928),
    s = n(606267),
    r = n(156312),
    o = n(351906),
    u = n(364995),
    c = n(93159);
let d = (e) => {
        let {
                label: t,
                additionalPaymentSourceDropdownProps: n,
                disabled: r,
                setPaymentSourceId: d,
                location: p,
                subscriptionPaymentSourceId: m,
                onPaymentSourceAdd: h,
                paymentSourceId: A,
            } = e,
            {
                giftCardsEnabled: C,
                giftCardCheckboxProps: E,
                walletCoversSubtotal: y,
                basePaymentSourceDropdownProps: P,
            } = ((e) => {
                let { paymentSourceId: t, setPaymentSourceId: n, location: l, subscriptionPaymentSourceId: r } = e,
                    { hasInvoiceOrderContextLoaded: c, checkoutPaymentSources: d } = (0, u.t6)(),
                    {
                        dropdownPaymentSources: p,
                        giftCardsEnabled: m,
                        dropdownPaymentSourceId: h,
                        handleDropdownPaymentSourceChange: A,
                        giftCardCheckboxProps: C,
                        walletCoversSubtotal: E,
                    } = (0, s.Y0)({
                        checkoutPaymentSources: d,
                        paymentSourceId: t,
                        setPaymentSourceId: n,
                        location: l ?? "BaseStatefulPaymentSourceSelector",
                        subscriptionPaymentSourceId: r,
                        isReady: c,
                    }),
                    y = a.useMemo(() => {
                        let e = p.find((e) => e.isDefault);
                        return null != e ? e.id : void 0;
                    }, [p]),
                    P = (0, i.bG)([o.A], () => o.A.hidePersonalInformation ?? !1);
                return {
                    giftCardsEnabled: m,
                    giftCardCheckboxProps: C,
                    walletCoversSubtotal: E,
                    basePaymentSourceDropdownProps: a.useMemo(
                        () => ({
                            selectedPaymentSourceId: h,
                            paymentSources: p,
                            defaultPaymentSourceId: y,
                            hidePersonalInformation: P,
                            onChange: A,
                        }),
                        [h, p, y, P, A],
                    ),
                };
            })({ paymentSourceId: A, setPaymentSourceId: d, subscriptionPaymentSourceId: m, location: p }),
            S = a.useMemo(() => ({ ...P, ...n, onPaymentSourceAdd: h }), [P, h, n]);
        return (0, l.jsx)(c.nL, {
            label: t,
            giftCardsEnabled: C,
            giftCardCheckboxProps: E,
            paymentSourceDropdownProps: S,
            showCheckboxAboveDropdown: y,
            disabled: r,
        });
    },
    p = (e) => {
        let { setPaymentSourceId: t, paymentSourceId: n } = (0, r.P5)(),
            { setPaymentSourceId: i, paymentSourceId: s } = a.useMemo(
                () => ({ setPaymentSourceId: e.setPaymentSourceId ?? t, paymentSourceId: e.paymentSourceId ?? n }),
                [e.setPaymentSourceId, e.paymentSourceId, t, n],
            );
        return (0, l.jsx)(d, { ...e, setPaymentSourceId: i, paymentSourceId: s });
    };
