"use strict";
n.d(t, { N: () => p });
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
                handleDropdownPaymentSourceChange: m,
                giftCardCheckboxProps: E,
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
            giftCardCheckboxProps: E,
            basePaymentSourceDropdownProps: i.useMemo(
                () => ({
                    selectedPaymentSourceId: h,
                    paymentSources: f,
                    defaultPaymentSourceId: g,
                    hidePersonalInformation: A,
                    onChange: m,
                }),
                [h, f, g, A, m],
            ),
        };
    },
    f = (e) => {
        let {
                label: t,
                additionalPaymentSourceDropdownProps: n,
                disabled: s,
                setPaymentSourceId: a,
                location: o,
                subscriptionPaymentSourceId: l,
                onPaymentSourceAdd: u,
                paymentSourceId: d,
            } = e,
            {
                giftCardsEnabled: f,
                giftCardCheckboxProps: p,
                basePaymentSourceDropdownProps: h,
            } = _({ paymentSourceId: d, setPaymentSourceId: a, subscriptionPaymentSourceId: l, location: o }),
            m = i.useMemo(() => ({ ...h, ...n, onPaymentSourceAdd: u }), [h, u, n]);
        return (0, r.jsx)(c.nL, {
            label: t,
            giftCardsEnabled: f,
            giftCardCheckboxProps: p,
            paymentSourceDropdownProps: m,
            disabled: s,
        });
    },
    p = (e) => {
        let { setPaymentSourceId: t, paymentSourceId: n } = (0, o.P5)(),
            { setPaymentSourceId: s, paymentSourceId: a } = i.useMemo(
                () => ({ setPaymentSourceId: e.setPaymentSourceId ?? t, paymentSourceId: e.paymentSourceId ?? n }),
                [e.setPaymentSourceId, e.paymentSourceId, t, n],
            );
        return (0, r.jsx)(f, { ...e, setPaymentSourceId: s, paymentSourceId: a });
    };
