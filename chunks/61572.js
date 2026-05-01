n.d(t, { N: () => p });
var l = n(627968),
    a = n(64700),
    i = n(17928),
    r = n(606267),
    s = n(902958),
    o = n(351906),
    u = n(364995),
    c = n(474367);
let d = (e) => {
        let {
                label: t,
                additionalPaymentSourceDropdownProps: n,
                disabled: s,
                setPaymentSourceId: d,
                location: p,
                subscriptionPaymentSourceId: m,
                onPaymentSourceAdd: h,
                paymentSourceId: C,
            } = e,
            {
                giftCardsEnabled: A,
                giftCardCheckboxProps: E,
                walletCoversSubtotal: y,
                basePaymentSourceDropdownProps: P,
            } = ((e) => {
                let { paymentSourceId: t, setPaymentSourceId: n, location: l, subscriptionPaymentSourceId: s } = e,
                    { hasInvoiceOrderContextLoaded: c, checkoutPaymentSources: d } = (0, u.t6)(),
                    {
                        dropdownPaymentSources: p,
                        giftCardsEnabled: m,
                        dropdownPaymentSourceId: h,
                        handleDropdownPaymentSourceChange: C,
                        giftCardCheckboxProps: A,
                        walletCoversSubtotal: E,
                    } = (0, r.Y0)({
                        checkoutPaymentSources: d,
                        paymentSourceId: t,
                        setPaymentSourceId: n,
                        location: l ?? "BaseStatefulPaymentSourceSelector",
                        subscriptionPaymentSourceId: s,
                        isReady: c,
                    }),
                    y = a.useMemo(() => {
                        let e = p.find((e) => e.isDefault);
                        return null != e ? e.id : void 0;
                    }, [p]),
                    P = (0, i.bG)([o.A], () => o.A.hidePersonalInformation ?? !1);
                return {
                    giftCardsEnabled: m,
                    giftCardCheckboxProps: A,
                    walletCoversSubtotal: E,
                    basePaymentSourceDropdownProps: a.useMemo(
                        () => ({
                            selectedPaymentSourceId: h,
                            paymentSources: p,
                            defaultPaymentSourceId: y,
                            hidePersonalInformation: P,
                            onChange: C,
                        }),
                        [h, p, y, P, C],
                    ),
                };
            })({ paymentSourceId: C, setPaymentSourceId: d, subscriptionPaymentSourceId: m, location: p }),
            S = a.useMemo(() => ({ ...P, ...n, onPaymentSourceAdd: h }), [P, h, n]);
        return (0, l.jsx)(c.nL, {
            label: t,
            giftCardsEnabled: A,
            giftCardCheckboxProps: E,
            paymentSourceDropdownProps: S,
            showCheckboxAboveDropdown: y,
            disabled: s,
        });
    },
    p = (e) => {
        let { setPaymentSourceId: t, paymentSourceId: n } = (0, s.P5)(),
            { setPaymentSourceId: i, paymentSourceId: r } = a.useMemo(
                () => ({ setPaymentSourceId: e.setPaymentSourceId ?? t, paymentSourceId: e.paymentSourceId ?? n }),
                [e.setPaymentSourceId, e.paymentSourceId, t, n],
            );
        return (0, l.jsx)(d, { ...e, setPaymentSourceId: i, paymentSourceId: r });
    };
