n.d(t, { N: () => m });
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(918022),
    s = n(156312),
    o = n(351906),
    u = n(935899),
    c = n(93159),
    d = n(94420);
let p = (e) => {
        let {
                label: t,
                additionalPaymentSourceDropdownProps: n,
                disabled: s,
                setPaymentSourceId: p,
                location: m,
                subscriptionPaymentSourceId: h,
                onPaymentSourceAdd: A,
                paymentSourceId: _,
            } = e,
            {
                giftCardsEnabled: C,
                giftCardCheckboxProps: E,
                basePaymentSourceDropdownProps: y,
            } = ((e) => {
                let { paymentSourceId: t, setPaymentSourceId: n, location: l, subscriptionPaymentSourceId: s } = e,
                    c = (0, u.D)(),
                    p = (0, d.t4)((e) => {
                        let { checkoutInvoicePreview: t } = e;
                        return null != t ? t.total : void 0;
                    }),
                    {
                        dropdownPaymentSources: m,
                        giftCardsEnabled: h,
                        dropdownPaymentSourceId: A,
                        handleDropdownPaymentSourceChange: _,
                        giftCardCheckboxProps: C,
                    } = (0, r.Y)({
                        checkoutPaymentSources: c,
                        paymentSourceId: t,
                        setPaymentSourceId: n,
                        location: l ?? "BaseStatefulPaymentSourceSelector",
                        subscriptionPaymentSourceId: s,
                        itemAmount: p,
                    }),
                    E = i.useMemo(() => {
                        let e = m.find((e) => e.isDefault);
                        return null != e ? e.id : void 0;
                    }, [m]),
                    y = (0, a.bG)([o.A], () => o.A.hidePersonalInformation ?? !1);
                return {
                    giftCardsEnabled: h,
                    giftCardCheckboxProps: C,
                    basePaymentSourceDropdownProps: i.useMemo(
                        () => ({
                            selectedPaymentSourceId: A,
                            paymentSources: m,
                            defaultPaymentSourceId: E,
                            hidePersonalInformation: y,
                            onChange: _,
                        }),
                        [A, m, E, y, _],
                    ),
                };
            })({ paymentSourceId: _, setPaymentSourceId: p, subscriptionPaymentSourceId: h, location: m }),
            f = i.useMemo(() => ({ ...y, ...n, onPaymentSourceAdd: A }), [y, A, n]);
        return (0, l.jsx)(c.nL, {
            label: t,
            giftCardsEnabled: C,
            giftCardCheckboxProps: E,
            paymentSourceDropdownProps: f,
            disabled: s,
        });
    },
    m = (e) => {
        let { setPaymentSourceId: t, paymentSourceId: n } = (0, s.P5)(),
            { setPaymentSourceId: a, paymentSourceId: r } = i.useMemo(
                () => ({ setPaymentSourceId: e.setPaymentSourceId ?? t, paymentSourceId: e.paymentSourceId ?? n }),
                [e.setPaymentSourceId, e.paymentSourceId, t, n],
            );
        return (0, l.jsx)(p, { ...e, setPaymentSourceId: a, paymentSourceId: r });
    };
