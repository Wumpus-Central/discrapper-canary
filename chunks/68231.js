n.d(t, {
    GC: () => h,
    kh: () => y,
}),
    n(896048);
var r = n(64700),
    i = n(648335),
    a = n(166532),
    s = n(818348);
let o = [a.pn.PAYMENT_TYPE],
    l = [a.pn.PAYMENT_TYPE, a.pn.CREDIT_CARD_INFORMATION, a.pn.ADDRESS],
    c = [a.pn.PAYMENT_TYPE, a.pn.PAYPAL_INFORMATION, a.pn.ADDRESS],
    u = [a.pn.PAYMENT_TYPE, a.pn.VENMO_INFORMATION, a.pn.ADDRESS],
    d = [a.pn.PAYMENT_TYPE, a.pn.CASH_APP_INFORMATION, a.pn.ADDRESS],
    f = [a.pn.PAYMENT_TYPE, a.pn.PRZELEWY24_INFORMATION, a.pn.ADDRESS],
    p = [a.pn.PAYMENT_TYPE, a.pn.EPS_INFORMATION, a.pn.ADDRESS],
    _ = [a.pn.PAYMENT_TYPE, a.pn.IDEAL_INFORMATION, a.pn.ADDRESS],
    h = [a.pn.PAYMENT_TYPE, a.pn.ADDRESS],
    m = {
        SHARED_ADD_PAYMENT_STEPS: o,
        SHARED_CREDIT_CARD_STEPS: l,
        SHARED_PAYPAL_STEPS: c,
        SHARED_VENMO_STEPS: u,
        SHARED_PRZELEWY24_STEPS: f,
        SHARED_EPS_STEPS: p,
        SHARED_IDEAL_STEPS: _,
        SHARED_CASH_APP_STEPS: d,
        SHARED_TYPE_AND_ADDRESS_STEPS: h,
    },
    g = {
        SHARED_ADD_PAYMENT_STEPS: [a.pn.PAYMENT_ELEMENT],
        SHARED_CREDIT_CARD_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.ADDRESS],
        SHARED_PAYPAL_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.PAYPAL_INFORMATION, a.pn.ADDRESS],
        SHARED_VENMO_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.VENMO_INFORMATION, a.pn.ADDRESS],
        SHARED_CASH_APP_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.CASH_APP_INFORMATION, a.pn.ADDRESS],
        SHARED_PRZELEWY24_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.PRZELEWY24_INFORMATION, a.pn.ADDRESS],
        SHARED_EPS_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.EPS_INFORMATION, a.pn.ADDRESS],
        SHARED_IDEAL_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.ADDRESS],
        SHARED_TYPE_AND_ADDRESS_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.ADDRESS],
    },
    E = (e) => null == e || e === s.he.UNKNOWN || (0, i.PE)(e),
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
            [a, o, l, c, u, d, f, p, _, h] = (0, r.useMemo)(
                () =>
                    b(
                        [
                            {
                                sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS",
                                methodType: s.he.UNKNOWN,
                            },
                            {
                                sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS",
                                methodType: s.he.PAYMENT_REQUEST,
                            },
                            {
                                sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS",
                            },
                            {
                                sharedStepsKey: "SHARED_CREDIT_CARD_STEPS",
                                methodType: s.he.CARD,
                            },
                            {
                                sharedStepsKey: "SHARED_PAYPAL_STEPS",
                                methodType: s.he.PAYPAL,
                            },
                            {
                                sharedStepsKey: "SHARED_IDEAL_STEPS",
                                methodType: s.he.IDEAL,
                            },
                            {
                                sharedStepsKey: "SHARED_VENMO_STEPS",
                                methodType: s.he.VENMO,
                            },
                            {
                                sharedStepsKey: "SHARED_PRZELEWY24_STEPS",
                                methodType: s.he.PRZELEWY24,
                            },
                            {
                                sharedStepsKey: "SHARED_EPS_STEPS",
                                methodType: s.he.EPS,
                            },
                            {
                                sharedStepsKey: "SHARED_CASH_APP_STEPS",
                                methodType: s.he.CASH_APP,
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
                    [s.he.CARD]: c,
                    [s.he.PAYPAL]: u,
                    [s.he.PAYMENT_REQUEST]: o,
                    [s.he.VENMO]: f,
                    [s.he.CASH_APP]: h,
                    [s.he.IDEAL]: d,
                    [s.he.PRZELEWY24]: p,
                    [s.he.EPS]: _,
                    [s.he.BANCONTACT]: a,
                    [s.he.GOPAY_WALLET]: a,
                    [s.he.KAKAOPAY]: a,
                    [s.he.GCASH]: a,
                    [s.he.PAYSAFE_CARD]: a,
                    [s.he.GRABPAY_MY]: a,
                    [s.he.MOMO_WALLET]: a,
                }),
                [a, c, u, f, o, d, h, p, _],
            );
        return {
            DEFAULT_PAYMENT_ELEMENT_STEPS: a,
            CREDIT_CARD_STEPS: c,
            PAYPAL_STEPS: u,
            IDEAL_STEPS: d,
            PAYMENT_REQUEST_STEPS: o,
            VENMO_STEPS: f,
            ADD_PAYMENT_STEPS: l,
            PRZELEWY24_STEPS: p,
            EPS_STEPS: _,
            CASH_APP_STEPS: h,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: m,
        };
    };
