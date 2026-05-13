n.d(t, { N: () => m });
var l = n(627968),
    a = n(64700),
    i = n(17928),
    r = n(606267),
    s = n(49960),
    o = n(351906),
    u = n(364995),
    c = n(944355),
    d = n(375708);
let p = (e) => {
        let {
                label: t,
                additionalPaymentSourceDropdownProps: n,
                disabled: p,
                setPaymentSourceId: m,
                location: h,
                subscriptionPaymentSourceId: C,
                onPaymentSourceAdd: A,
                paymentSourceId: E,
                hideCurrencySelect: y,
            } = e,
            {
                giftCardsEnabled: P,
                giftCardCheckboxProps: S,
                walletCoversSubtotal: _,
                basePaymentSourceDropdownProps: T,
            } = ((e) => {
                let { paymentSourceId: t, setPaymentSourceId: n, location: l, subscriptionPaymentSourceId: s } = e,
                    { hasInvoiceOrderContextLoaded: c, checkoutPaymentSources: d } = (0, u.t)(),
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
            })({ paymentSourceId: E, setPaymentSourceId: m, subscriptionPaymentSourceId: C, location: h }),
            { priceOptions: f, currencies: x, displayCurrency: N, setCurrency: I } = (0, s.P5)(),
            g = a.useMemo(() => {
                if (!y)
                    return {
                        label: d.intl.string(d.t["/AAR02"]),
                        selectedCurrency: f.currency ?? N,
                        currencies: x,
                        onChange: I,
                        disabled: p,
                    };
            }, [y, f.currency, N, x, I, p]),
            v = a.useMemo(() => ({ ...T, ...n, onPaymentSourceAdd: A }), [T, A, n]);
        return (0, l.jsx)(c.nL, {
            label: t,
            giftCardsEnabled: P,
            giftCardCheckboxProps: S,
            paymentSourceDropdownProps: v,
            showCheckboxAboveDropdown: _,
            disabled: p,
            currencySelectProps: g,
        });
    },
    m = (e) => {
        let { setPaymentSourceId: t, paymentSourceId: n } = (0, s.P5)(),
            { setPaymentSourceId: i, paymentSourceId: r } = a.useMemo(
                () => ({ setPaymentSourceId: e.setPaymentSourceId ?? t, paymentSourceId: e.paymentSourceId ?? n }),
                [e.setPaymentSourceId, e.paymentSourceId, t, n],
            );
        return (0, l.jsx)(p, { ...e, setPaymentSourceId: i, paymentSourceId: r });
    };
