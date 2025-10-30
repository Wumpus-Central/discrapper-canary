n.d(t, {
    Hl: () => h,
    gj: () => y,
}),
    n(388685);
var r = n(647438),
    i = n(561448),
    a = n(409813),
    o = n(231338);
let s = [a.h8.PAYMENT_TYPE],
    l = [a.h8.PAYMENT_TYPE, a.h8.CREDIT_CARD_INFORMATION, a.h8.ADDRESS],
    c = [a.h8.PAYMENT_TYPE, a.h8.PAYPAL_INFORMATION, a.h8.ADDRESS],
    u = [a.h8.PAYMENT_TYPE, a.h8.VENMO_INFORMATION, a.h8.ADDRESS],
    d = [a.h8.PAYMENT_TYPE, a.h8.CASH_APP_INFORMATION, a.h8.ADDRESS],
    f = [a.h8.PAYMENT_TYPE, a.h8.PRZELEWY24_INFORMATION, a.h8.ADDRESS],
    _ = [a.h8.PAYMENT_TYPE, a.h8.EPS_INFORMATION, a.h8.ADDRESS],
    p = [a.h8.PAYMENT_TYPE, a.h8.IDEAL_INFORMATION, a.h8.ADDRESS],
    h = [a.h8.PAYMENT_TYPE, a.h8.ADDRESS],
    m = {
        SHARED_ADD_PAYMENT_STEPS: s,
        SHARED_CREDIT_CARD_STEPS: l,
        SHARED_PAYPAL_STEPS: c,
        SHARED_VENMO_STEPS: u,
        SHARED_PRZELEWY24_STEPS: f,
        SHARED_EPS_STEPS: _,
        SHARED_IDEAL_STEPS: p,
        SHARED_CASH_APP_STEPS: d,
        SHARED_TYPE_AND_ADDRESS_STEPS: h,
    },
    g = {
        SHARED_ADD_PAYMENT_STEPS: [a.h8.PAYMENT_ELEMENT],
        SHARED_CREDIT_CARD_STEPS: [a.h8.PAYMENT_ELEMENT, a.h8.ADDRESS],
        SHARED_PAYPAL_STEPS: [a.h8.PAYMENT_ELEMENT, a.h8.PAYPAL_INFORMATION, a.h8.ADDRESS],
        SHARED_VENMO_STEPS: [a.h8.PAYMENT_ELEMENT, a.h8.VENMO_INFORMATION, a.h8.ADDRESS],
        SHARED_CASH_APP_STEPS: [a.h8.PAYMENT_ELEMENT, a.h8.CASH_APP_INFORMATION, a.h8.ADDRESS],
        SHARED_PRZELEWY24_STEPS: [a.h8.PAYMENT_ELEMENT, a.h8.PRZELEWY24_INFORMATION, a.h8.ADDRESS],
        SHARED_EPS_STEPS: [a.h8.PAYMENT_ELEMENT, a.h8.EPS_INFORMATION, a.h8.ADDRESS],
        SHARED_IDEAL_STEPS: [a.h8.PAYMENT_ELEMENT, a.h8.ADDRESS],
        SHARED_TYPE_AND_ADDRESS_STEPS: [a.h8.PAYMENT_ELEMENT, a.h8.ADDRESS],
    },
    E = (e) => null == e || e === o.He.UNKNOWN || (0, i.qH)(e),
    b = (e, t) => {
        let { prependSteps: n, appendSteps: r, paymentElementsEnabled: i } = t;
        return e.map((e) => {
            let { sharedStepsKey: t, methodType: a } = e;
            return {
                steps: [...n, ...(i && E(a) ? g[t] : m[t]), ...r],
                methodType: a,
            };
        });
    },
    y = (e) => {
        let { prependSteps: t, appendSteps: n, paymentElementsEnabled: i } = e,
            [a, s, l, c, u, d, f, _, p, h] = (0, r.useMemo)(
                () =>
                    b(
                        [
                            {
                                sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS",
                                methodType: o.He.UNKNOWN,
                            },
                            {
                                sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS",
                                methodType: o.He.PAYMENT_REQUEST,
                            },
                            { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS" },
                            {
                                sharedStepsKey: "SHARED_CREDIT_CARD_STEPS",
                                methodType: o.He.CARD,
                            },
                            {
                                sharedStepsKey: "SHARED_PAYPAL_STEPS",
                                methodType: o.He.PAYPAL,
                            },
                            {
                                sharedStepsKey: "SHARED_IDEAL_STEPS",
                                methodType: o.He.IDEAL,
                            },
                            {
                                sharedStepsKey: "SHARED_VENMO_STEPS",
                                methodType: o.He.VENMO,
                            },
                            {
                                sharedStepsKey: "SHARED_PRZELEWY24_STEPS",
                                methodType: o.He.PRZELEWY24,
                            },
                            {
                                sharedStepsKey: "SHARED_EPS_STEPS",
                                methodType: o.He.EPS,
                            },
                            {
                                sharedStepsKey: "SHARED_CASH_APP_STEPS",
                                methodType: o.He.CASH_APP,
                            },
                        ],
                        {
                            prependSteps: t,
                            appendSteps: n,
                            paymentElementsEnabled: i,
                        },
                    ),
                [t, n, i],
            ),
            m = (0, r.useMemo)(
                () => ({
                    [o.He.CARD]: c,
                    [o.He.PAYPAL]: u,
                    [o.He.PAYMENT_REQUEST]: s,
                    [o.He.VENMO]: f,
                    [o.He.CASH_APP]: h,
                    [o.He.IDEAL]: d,
                    [o.He.PRZELEWY24]: _,
                    [o.He.EPS]: p,
                    [o.He.GOPAY_WALLET]: a,
                    [o.He.KAKAOPAY]: a,
                    [o.He.GCASH]: a,
                    [o.He.PAYSAFE_CARD]: a,
                    [o.He.GRABPAY_MY]: a,
                    [o.He.MOMO_WALLET]: a,
                }),
                [a, c, u, f, s, d, h, _, p],
            );
        return {
            DEFAULT_PAYMENT_ELEMENT_STEPS: a,
            CREDIT_CARD_STEPS: c,
            PAYPAL_STEPS: u,
            IDEAL_STEPS: d,
            PAYMENT_REQUEST_STEPS: s,
            VENMO_STEPS: f,
            ADD_PAYMENT_STEPS: l,
            PRZELEWY24_STEPS: _,
            EPS_STEPS: p,
            CASH_APP_STEPS: h,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: m,
        };
    };
