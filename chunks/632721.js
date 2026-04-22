n.d(t, { GC: () => A, kh: () => E });
var l = n(64700),
    i = n(648335),
    a = n(166532),
    r = n(818348);
let s = [a.pn.PAYMENT_TYPE],
    o = [a.pn.PAYMENT_TYPE, a.pn.CREDIT_CARD_INFORMATION, a.pn.ADDRESS],
    u = [a.pn.PAYMENT_TYPE, a.pn.PAYPAL_INFORMATION, a.pn.ADDRESS],
    c = [a.pn.PAYMENT_TYPE, a.pn.VENMO_INFORMATION, a.pn.ADDRESS],
    d = [a.pn.PAYMENT_TYPE, a.pn.CASH_APP_INFORMATION, a.pn.ADDRESS],
    p = [a.pn.PAYMENT_TYPE, a.pn.PRZELEWY24_INFORMATION, a.pn.ADDRESS],
    m = [a.pn.PAYMENT_TYPE, a.pn.EPS_INFORMATION, a.pn.ADDRESS],
    h = [a.pn.PAYMENT_TYPE, a.pn.IDEAL_INFORMATION, a.pn.ADDRESS],
    A = [a.pn.PAYMENT_TYPE, a.pn.ADDRESS],
    _ = {
        SHARED_ADD_PAYMENT_STEPS: s,
        SHARED_CREDIT_CARD_STEPS: o,
        SHARED_PAYPAL_STEPS: u,
        SHARED_VENMO_STEPS: c,
        SHARED_PRZELEWY24_STEPS: p,
        SHARED_EPS_STEPS: m,
        SHARED_IDEAL_STEPS: h,
        SHARED_CASH_APP_STEPS: d,
        SHARED_TYPE_AND_ADDRESS_STEPS: A,
    },
    C = {
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
    E = (e) => {
        let { prependSteps: t, appendSteps: n, paymentElementsEnabled: a } = e,
            [s, o, u, c, d, p, m, h, A, E] = (0, l.useMemo)(
                () =>
                    ((e, t) => {
                        let { prependSteps: n, appendSteps: l, paymentElementsEnabled: a } = t;
                        return e.map((e) => {
                            let { sharedStepsKey: t, methodType: s } = e;
                            return {
                                steps: [
                                    ...n,
                                    ...(a && (null == s || s === r.he.UNKNOWN || (0, i.PE)(s)) ? C[t] : _[t]),
                                    ...l,
                                ],
                                methodType: s,
                            };
                        });
                    })(
                        [
                            { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: r.he.UNKNOWN },
                            { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: r.he.PAYMENT_REQUEST },
                            { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS" },
                            { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: r.he.CARD },
                            { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: r.he.PAYPAL },
                            { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: r.he.IDEAL },
                            { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: r.he.VENMO },
                            { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: r.he.PRZELEWY24 },
                            { sharedStepsKey: "SHARED_EPS_STEPS", methodType: r.he.EPS },
                            { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: r.he.CASH_APP },
                        ],
                        { prependSteps: t, appendSteps: n, paymentElementsEnabled: a },
                    ),
                [t, n, a],
            ),
            y = (0, l.useMemo)(
                () => ({
                    [r.he.CARD]: c,
                    [r.he.PAYPAL]: d,
                    [r.he.PAYMENT_REQUEST]: o,
                    [r.he.VENMO]: m,
                    [r.he.CASH_APP]: E,
                    [r.he.IDEAL]: p,
                    [r.he.PRZELEWY24]: h,
                    [r.he.EPS]: A,
                    [r.he.BANCONTACT]: s,
                    [r.he.GOPAY_WALLET]: s,
                    [r.he.KAKAOPAY]: s,
                    [r.he.GCASH]: s,
                    [r.he.PAYSAFE_CARD]: s,
                    [r.he.GRABPAY_MY]: s,
                    [r.he.MOMO_WALLET]: s,
                }),
                [s, c, d, m, o, p, E, h, A],
            );
        return {
            DEFAULT_PAYMENT_ELEMENT_STEPS: s,
            CREDIT_CARD_STEPS: c,
            PAYPAL_STEPS: d,
            IDEAL_STEPS: p,
            PAYMENT_REQUEST_STEPS: o,
            VENMO_STEPS: m,
            ADD_PAYMENT_STEPS: u,
            PRZELEWY24_STEPS: h,
            EPS_STEPS: A,
            CASH_APP_STEPS: E,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: y,
        };
    };
