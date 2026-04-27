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
                paymentSourceId: C,
                isReady: A,
                checkoutPaymentSources: _,
            } = e,
            {
                giftCardsEnabled: y,
                giftCardCheckboxProps: E,
                walletCoversSubtotal: P,
                basePaymentSourceDropdownProps: f,
            } = ((e) => {
                let {
                        paymentSourceId: t,
                        setPaymentSourceId: n,
                        location: l,
                        subscriptionPaymentSourceId: s,
                        isReady: c,
                        checkoutPaymentSources: d,
                    } = e,
                    p = (0, u.D)(),
                    {
                        dropdownPaymentSources: m,
                        giftCardsEnabled: h,
                        dropdownPaymentSourceId: C,
                        handleDropdownPaymentSourceChange: A,
                        giftCardCheckboxProps: _,
                        walletCoversSubtotal: y,
                    } = (0, r.Y0)({
                        checkoutPaymentSources: d ?? p,
                        paymentSourceId: t,
                        setPaymentSourceId: n,
                        location: l ?? "BaseStatefulPaymentSourceSelector",
                        subscriptionPaymentSourceId: s,
                        isReady: c ?? !0,
                    }),
                    E = a.useMemo(() => {
                        let e = m.find((e) => e.isDefault);
                        return null != e ? e.id : void 0;
                    }, [m]),
                    P = (0, i.bG)([o.A], () => o.A.hidePersonalInformation ?? !1);
                return {
                    giftCardsEnabled: h,
                    giftCardCheckboxProps: _,
                    walletCoversSubtotal: y,
                    basePaymentSourceDropdownProps: a.useMemo(
                        () => ({
                            selectedPaymentSourceId: C,
                            paymentSources: m,
                            defaultPaymentSourceId: E,
                            hidePersonalInformation: P,
                            onChange: A,
                        }),
                        [C, m, E, P, A],
                    ),
                };
            })({
                paymentSourceId: C,
                setPaymentSourceId: d,
                subscriptionPaymentSourceId: m,
                location: p,
                isReady: A,
                checkoutPaymentSources: _,
            }),
            S = a.useMemo(() => ({ ...f, ...n, onPaymentSourceAdd: h }), [f, h, n]);
        return (0, l.jsx)(c.nL, {
            label: t,
            giftCardsEnabled: y,
            giftCardCheckboxProps: E,
            paymentSourceDropdownProps: S,
            showCheckboxAboveDropdown: P,
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
