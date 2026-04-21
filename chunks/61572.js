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
        let { setPaymentSourceId: t, location: n, subscriptionPaymentSourceId: r } = e,
            o = (0, u.D)(),
            c = (0, d.t4)((e) => {
                let { checkoutInvoicePreview: t } = e;
                return null != t ? t.total : void 0;
            }),
            {
                dropdownPaymentSources: _,
                giftCardsEnabled: f,
                dropdownPaymentSourceId: p,
                handleDropdownPaymentSourceChange: h,
                giftCardCheckboxProps: m,
            } = (0, a.Y)({
                checkoutPaymentSources: o,
                setPaymentSourceId: t,
                location: n ?? "BaseStatefulPaymentSourceSelector",
                subscriptionPaymentSourceId: r,
                itemAmount: c,
            }),
            E = i.useMemo(() => {
                let e = _.find((e) => e.isDefault);
                return null != e ? e.id : void 0;
            }, [_]),
            g = (0, s.bG)([l.A], () => l.A.hidePersonalInformation ?? !1);
        return {
            giftCardsEnabled: f,
            giftCardCheckboxProps: m,
            basePaymentSourceDropdownProps: i.useMemo(
                () => ({
                    selectedPaymentSourceId: p,
                    paymentSources: _,
                    defaultPaymentSourceId: E,
                    hidePersonalInformation: g,
                    onChange: h,
                }),
                [p, _, E, g, h],
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
            } = e,
            {
                giftCardsEnabled: d,
                giftCardCheckboxProps: f,
                basePaymentSourceDropdownProps: p,
            } = _({ setPaymentSourceId: a, subscriptionPaymentSourceId: l, location: o }),
            h = i.useMemo(() => ({ ...p, ...n, onPaymentSourceAdd: u }), [p, u, n]);
        return (0, r.jsx)(c.nL, {
            label: t,
            giftCardsEnabled: d,
            giftCardCheckboxProps: f,
            paymentSourceDropdownProps: h,
            disabled: s,
        });
    },
    p = (e) => {
        let { setPaymentSourceId: t } = (0, o.P5)(),
            n = i.useMemo(() => e.setPaymentSourceId ?? t, [e.setPaymentSourceId, t]);
        return (0, r.jsx)(f, { ...e, setPaymentSourceId: n });
    };
