"use strict";
n.d(t, { GC: () => h, kh: () => g });
var r = n(64700),
    i = n(648335),
    s = n(166532),
    a = n(818348);
let o = [s.pn.PAYMENT_TYPE],
    l = [s.pn.PAYMENT_TYPE, s.pn.CREDIT_CARD_INFORMATION, s.pn.ADDRESS],
    u = [s.pn.PAYMENT_TYPE, s.pn.PAYPAL_INFORMATION, s.pn.ADDRESS],
    c = [s.pn.PAYMENT_TYPE, s.pn.VENMO_INFORMATION, s.pn.ADDRESS],
    d = [s.pn.PAYMENT_TYPE, s.pn.CASH_APP_INFORMATION, s.pn.ADDRESS],
    _ = [s.pn.PAYMENT_TYPE, s.pn.PRZELEWY24_INFORMATION, s.pn.ADDRESS],
    f = [s.pn.PAYMENT_TYPE, s.pn.EPS_INFORMATION, s.pn.ADDRESS],
    p = [s.pn.PAYMENT_TYPE, s.pn.IDEAL_INFORMATION, s.pn.ADDRESS],
    h = [s.pn.PAYMENT_TYPE, s.pn.ADDRESS],
    E = {
        SHARED_ADD_PAYMENT_STEPS: o,
        SHARED_CREDIT_CARD_STEPS: l,
        SHARED_PAYPAL_STEPS: u,
        SHARED_VENMO_STEPS: c,
        SHARED_PRZELEWY24_STEPS: _,
        SHARED_EPS_STEPS: f,
        SHARED_IDEAL_STEPS: p,
        SHARED_CASH_APP_STEPS: d,
        SHARED_TYPE_AND_ADDRESS_STEPS: h,
    },
    m = {
        SHARED_ADD_PAYMENT_STEPS: [s.pn.PAYMENT_ELEMENT],
        SHARED_CREDIT_CARD_STEPS: [s.pn.PAYMENT_ELEMENT, s.pn.ADDRESS],
        SHARED_PAYPAL_STEPS: [s.pn.PAYMENT_ELEMENT, s.pn.PAYPAL_INFORMATION, s.pn.ADDRESS],
        SHARED_VENMO_STEPS: [s.pn.PAYMENT_ELEMENT, s.pn.VENMO_INFORMATION, s.pn.ADDRESS],
        SHARED_CASH_APP_STEPS: [s.pn.PAYMENT_ELEMENT, s.pn.CASH_APP_INFORMATION, s.pn.ADDRESS],
        SHARED_PRZELEWY24_STEPS: [s.pn.PAYMENT_ELEMENT, s.pn.PRZELEWY24_INFORMATION, s.pn.ADDRESS],
        SHARED_EPS_STEPS: [s.pn.PAYMENT_ELEMENT, s.pn.EPS_INFORMATION, s.pn.ADDRESS],
        SHARED_IDEAL_STEPS: [s.pn.PAYMENT_ELEMENT, s.pn.ADDRESS],
        SHARED_TYPE_AND_ADDRESS_STEPS: [s.pn.PAYMENT_ELEMENT, s.pn.ADDRESS],
    },
    g = (e) => {
        let { prependSteps: t, appendSteps: n, paymentElementsEnabled: s } = e,
            [o, l, u, c, d, _, f, p, h, g] = (0, r.useMemo)(
                () =>
                    ((e, t) => {
                        let { prependSteps: n, appendSteps: r, paymentElementsEnabled: s } = t;
                        return e.map((e) => {
                            let { sharedStepsKey: t, methodType: o } = e;
                            return {
                                steps: [
                                    ...n,
                                    ...(s && (null == o || o === a.he.UNKNOWN || (0, i.PE)(o)) ? m[t] : E[t]),
                                    ...r,
                                ],
                                methodType: o,
                            };
                        });
                    })(
                        [
                            { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: a.he.UNKNOWN },
                            { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: a.he.PAYMENT_REQUEST },
                            { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS" },
                            { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: a.he.CARD },
                            { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: a.he.PAYPAL },
                            { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: a.he.IDEAL },
                            { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: a.he.VENMO },
                            { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: a.he.PRZELEWY24 },
                            { sharedStepsKey: "SHARED_EPS_STEPS", methodType: a.he.EPS },
                            { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: a.he.CASH_APP },
                        ],
                        { prependSteps: t, appendSteps: n, paymentElementsEnabled: s },
                    ),
                [t, n, s],
            ),
            A = (0, r.useMemo)(
                () => ({
                    [a.he.CARD]: c,
                    [a.he.PAYPAL]: d,
                    [a.he.PAYMENT_REQUEST]: l,
                    [a.he.VENMO]: f,
                    [a.he.CASH_APP]: g,
                    [a.he.IDEAL]: _,
                    [a.he.PRZELEWY24]: p,
                    [a.he.EPS]: h,
                    [a.he.BANCONTACT]: o,
                    [a.he.GOPAY_WALLET]: o,
                    [a.he.KAKAOPAY]: o,
                    [a.he.GCASH]: o,
                    [a.he.PAYSAFE_CARD]: o,
                    [a.he.GRABPAY_MY]: o,
                    [a.he.MOMO_WALLET]: o,
                }),
                [o, c, d, f, l, _, g, p, h],
            );
        return {
            DEFAULT_PAYMENT_ELEMENT_STEPS: o,
            CREDIT_CARD_STEPS: c,
            PAYPAL_STEPS: d,
            IDEAL_STEPS: _,
            PAYMENT_REQUEST_STEPS: l,
            VENMO_STEPS: f,
            ADD_PAYMENT_STEPS: u,
            PRZELEWY24_STEPS: p,
            EPS_STEPS: h,
            CASH_APP_STEPS: g,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: A,
        };
    };
