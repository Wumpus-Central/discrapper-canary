n.d(t, { N: () => h });
var l = n(627968),
    a = n(64700),
    i = n(17928),
    r = n(606267),
    s = n(834252),
    o = n(351906),
    u = n(364995),
    c = n(944355),
    d = n(94420),
    p = n(375708);
let m = (e) => {
        let {
                label: t,
                additionalPaymentSourceDropdownProps: n,
                disabled: d,
                setPaymentSourceId: m,
                location: h,
                subscriptionPaymentSourceId: C,
                onPaymentSourceAdd: A,
                paymentSourceId: y,
                hideCurrencySelect: E,
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
                        walletCoversSubtotal: y,
                    } = (0, r.Y0)({
                        checkoutPaymentSources: d,
                        paymentSourceId: t,
                        setPaymentSourceId: n,
                        location: l ?? "BaseStatefulPaymentSourceSelector",
                        subscriptionPaymentSourceId: s,
                        isReady: c,
                    }),
                    E = a.useMemo(() => {
                        let e = p.find((e) => e.isDefault);
                        return null != e ? e.id : void 0;
                    }, [p]),
                    P = (0, i.bG)([o.A], () => o.A.hidePersonalInformation ?? !1);
                return {
                    giftCardsEnabled: m,
                    giftCardCheckboxProps: A,
                    walletCoversSubtotal: y,
                    basePaymentSourceDropdownProps: a.useMemo(
                        () => ({
                            selectedPaymentSourceId: h,
                            paymentSources: p,
                            defaultPaymentSourceId: E,
                            hidePersonalInformation: P,
                            onChange: C,
                        }),
                        [h, p, E, P, C],
                    ),
                };
            })({ paymentSourceId: y, setPaymentSourceId: m, subscriptionPaymentSourceId: C, location: h }),
            { priceOptions: f, currencies: I, displayCurrency: N, setCurrency: x } = (0, s.P5)(),
            g = a.useMemo(() => {
                if (!E)
                    return {
                        label: p.intl.string(p.t["/AAR02"]),
                        selectedCurrency: f.currency ?? N,
                        currencies: I,
                        onChange: x,
                        disabled: d,
                    };
            }, [E, f.currency, N, I, x, d]),
            v = a.useMemo(() => ({ ...T, ...n, onPaymentSourceAdd: A }), [T, A, n]);
        return (0, l.jsx)(c.nL, {
            label: t,
            giftCardsEnabled: P,
            giftCardCheckboxProps: S,
            paymentSourceDropdownProps: v,
            showCheckboxAboveDropdown: _,
            disabled: d,
            currencySelectProps: g,
        });
    },
    h = (e) => {
        let { setPaymentSourceId: t, paymentSourceId: n } = (0, d.t4)((e) => ({
                setPaymentSourceId: e.setPaymentSourceId,
                paymentSourceId: e.paymentSourceId,
            })),
            { setPaymentSourceId: i, paymentSourceId: r } = a.useMemo(
                () => ({ setPaymentSourceId: e.setPaymentSourceId ?? t, paymentSourceId: e.paymentSourceId ?? n }),
                [e.setPaymentSourceId, e.paymentSourceId, t, n],
            );
        return (0, l.jsx)(m, { ...e, setPaymentSourceId: i, paymentSourceId: r });
    };
