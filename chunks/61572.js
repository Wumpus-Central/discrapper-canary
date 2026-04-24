n.d(t, { N: () => p });
var l = n(627968),
    a = n(64700),
    i = n(17928),
    r = n(606267),
    s = n(156312),
    o = n(351906),
    u = n(935899),
    c = n(93159);
let d = (e) => {
        let {
                label: t,
                additionalPaymentSourceDropdownProps: n,
                disabled: s,
                setPaymentSourceId: d,
                location: p,
                subscriptionPaymentSourceId: m,
                onPaymentSourceAdd: h,
                paymentSourceId: A,
            } = e,
            {
                giftCardsEnabled: C,
                giftCardCheckboxProps: _,
                walletCoversSubtotal: E,
                basePaymentSourceDropdownProps: y,
            } = ((e) => {
                let { paymentSourceId: t, setPaymentSourceId: n, location: l, subscriptionPaymentSourceId: s } = e,
                    c = (0, u.D)(),
                    {
                        dropdownPaymentSources: d,
                        giftCardsEnabled: p,
                        dropdownPaymentSourceId: m,
                        handleDropdownPaymentSourceChange: h,
                        giftCardCheckboxProps: A,
                        walletCoversSubtotal: C,
                    } = (0, r.Y0)({
                        checkoutPaymentSources: c,
                        paymentSourceId: t,
                        setPaymentSourceId: n,
                        location: l ?? "BaseStatefulPaymentSourceSelector",
                        subscriptionPaymentSourceId: s,
                    }),
                    _ = a.useMemo(() => {
                        let e = d.find((e) => e.isDefault);
                        return null != e ? e.id : void 0;
                    }, [d]),
                    E = (0, i.bG)([o.A], () => o.A.hidePersonalInformation ?? !1);
                return {
                    giftCardsEnabled: p,
                    giftCardCheckboxProps: A,
                    walletCoversSubtotal: C,
                    basePaymentSourceDropdownProps: a.useMemo(
                        () => ({
                            selectedPaymentSourceId: m,
                            paymentSources: d,
                            defaultPaymentSourceId: _,
                            hidePersonalInformation: E,
                            onChange: h,
                        }),
                        [m, d, _, E, h],
                    ),
                };
            })({ paymentSourceId: A, setPaymentSourceId: d, subscriptionPaymentSourceId: m, location: p }),
            f = a.useMemo(() => ({ ...y, ...n, onPaymentSourceAdd: h }), [y, h, n]);
        return (0, l.jsx)(c.nL, {
            label: t,
            giftCardsEnabled: C,
            giftCardCheckboxProps: _,
            paymentSourceDropdownProps: f,
            showCheckboxAboveDropdown: E,
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
