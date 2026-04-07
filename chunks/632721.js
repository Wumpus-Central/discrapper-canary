"use strict";
n.d(t, { GC: () => h, kh: () => I });
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
    m = {
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
    E = {
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
    g = (e) => null == e || e === a.he.UNKNOWN || (0, i.PE)(e),
    A = (e, t) => {
        let { prependSteps: n, appendSteps: r, paymentElementsEnabled: i } = t;
        return e.map((e) => {
            let { sharedStepsKey: t, methodType: s } = e;
            return { steps: [...n, ...(i && g(s) ? E[t] : m[t]), ...r], methodType: s };
        });
    },
    I = (e) => {
        let { prependSteps: t, appendSteps: n, paymentElementsEnabled: i } = e,
            [s, o, l, u, c, d, _, f, p, h] = (0, r.useMemo)(
                () =>
                    A(
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
                        { prependSteps: t, appendSteps: n, paymentElementsEnabled: i },
                    ),
                [t, n, i],
            ),
            m = (0, r.useMemo)(
                () => ({
                    [a.he.CARD]: u,
                    [a.he.PAYPAL]: c,
                    [a.he.PAYMENT_REQUEST]: o,
                    [a.he.VENMO]: _,
                    [a.he.CASH_APP]: h,
                    [a.he.IDEAL]: d,
                    [a.he.PRZELEWY24]: f,
                    [a.he.EPS]: p,
                    [a.he.BANCONTACT]: s,
                    [a.he.GOPAY_WALLET]: s,
                    [a.he.KAKAOPAY]: s,
                    [a.he.GCASH]: s,
                    [a.he.PAYSAFE_CARD]: s,
                    [a.he.GRABPAY_MY]: s,
                    [a.he.MOMO_WALLET]: s,
                }),
                [s, u, c, _, o, d, h, f, p],
            );
        return {
            DEFAULT_PAYMENT_ELEMENT_STEPS: s,
            CREDIT_CARD_STEPS: u,
            PAYPAL_STEPS: c,
            IDEAL_STEPS: d,
            PAYMENT_REQUEST_STEPS: o,
            VENMO_STEPS: _,
            ADD_PAYMENT_STEPS: l,
            PRZELEWY24_STEPS: f,
            EPS_STEPS: p,
            CASH_APP_STEPS: h,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: m,
        };
    };
