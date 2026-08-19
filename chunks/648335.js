n.d(t, { Dd: () => p, PE: () => S, R8: () => P, Wn: () => y, eI: () => l, mr: () => u });
var a = n(166532),
    i = n(71532),
    A = n(818348),
    h = n(375708);
let o = new Set([
        ...new Set([A.he.CARD, A.he.PAYMENT_REQUEST, A.he.PAYPAL]),
        ...new Set([
            A.he.IDEAL,
            A.he.BANCONTACT,
            A.he.GOPAY_WALLET,
            A.he.KAKAOPAY,
            A.he.VENMO,
            A.he.CASH_APP,
            A.he.GCASH,
            A.he.PAYSAFE_CARD,
            A.he.GRABPAY_MY,
            A.he.MOMO_WALLET,
            A.he.PRZELEWY24,
            A.he.EPS,
            A.he.PIX,
        ]),
    ]),
    s = new Set([]),
    r = {
        [A.he.PAYPAL]: {
            paymentSourceType: A.he.PAYPAL,
            subtitleTranslationKey: h.t.Djzd7L,
            isRegionalPaymentMethod: !1,
            toStep: a.pn.PAYPAL_INFORMATION,
        },
        [A.he.VENMO]: {
            paymentSourceType: A.he.VENMO,
            subtitleTranslationKey: h.t["4KoTLM"],
            isRegionalPaymentMethod: !0,
            toStep: a.pn.VENMO_INFORMATION,
        },
        [A.he.CASH_APP]: {
            paymentSourceType: A.he.CASH_APP,
            subtitleTranslationKey: h.t["9ALP8w"],
            isRegionalPaymentMethod: !0,
            toStep: a.pn.CASH_APP_INFORMATION,
        },
        [A.he.GOPAY_WALLET]: {
            paymentSourceType: A.he.GOPAY_WALLET,
            subtitleTranslationKey: h.t["43J8JK"],
            isRegionalPaymentMethod: !0,
            isStaffOnly: !0,
        },
        [A.he.KAKAOPAY]: {
            paymentSourceType: A.he.KAKAOPAY,
            subtitleTranslationKey: h.t.CSVexi,
            isRegionalPaymentMethod: !0,
        },
        [A.he.GCASH]: {
            paymentSourceType: A.he.GCASH,
            subtitleTranslationKey: h.t.PjehcF,
            isRegionalPaymentMethod: !0,
        },
        [A.he.PAYSAFE_CARD]: {
            paymentSourceType: A.he.PAYSAFE_CARD,
            subtitleTranslationKey: h.t.boznHN,
            isRegionalPaymentMethod: !0,
        },
        [A.he.GRABPAY_MY]: {
            paymentSourceType: A.he.GRABPAY_MY,
            subtitleTranslationKey: h.t.T5davE,
            isRegionalPaymentMethod: !0,
        },
        [A.he.MOMO_WALLET]: {
            paymentSourceType: A.he.MOMO_WALLET,
            subtitleTranslationKey: h.t.J0A1Vk,
            isRegionalPaymentMethod: !0,
        },
        [A.he.PRZELEWY24]: {
            paymentSourceType: A.he.PRZELEWY24,
            subtitleTranslationKey: h.t.u25uL0,
            isRegionalPaymentMethod: !0,
            toStep: a.pn.PRZELEWY24_INFORMATION,
        },
        [A.he.EPS]: {
            paymentSourceType: A.he.EPS,
            subtitleTranslationKey: h.t["5BSDU6"],
            isRegionalPaymentMethod: !0,
            toStep: a.pn.EPS_INFORMATION,
        },
    };
function p(e) {
    return e.map((e) => ({
        id: e.custom_payment_method_id,
        options: {
            type: "static",
            subtitle:
                e.payment_source_type in r ? h.intl.string(r[e.payment_source_type].subtitleTranslationKey) : void 0,
        },
    }));
}
let u = {
    [A.he.CARD]: "card",
    [A.he.IDEAL]: "ideal",
    [A.he.BANCONTACT]: "bancontact",
    [A.he.PAYPAL]: "paypal",
    [A.he.VENMO]: "venmo",
    [A.he.CASH_APP]: "cashapp",
    [A.he.GOPAY_WALLET]: "gopay",
    [A.he.KAKAOPAY]: "kakaopay",
    [A.he.GCASH]: "gcash",
    [A.he.PAYSAFE_CARD]: "paysafecard",
    [A.he.GRABPAY_MY]: "grabpay",
    [A.he.MOMO_WALLET]: "momo",
    [A.he.PRZELEWY24]: "p24",
    [A.he.EPS]: "eps",
    [A.he.PIX]: "pix",
};
function P(e) {
    return e in r;
}
function l(e) {
    return P(e) ? (r[e].toStep ?? null) : null;
}
function y(e, t) {
    if ("card" === e || "link_card_brand" === e) return A.he.CARD;
    if ("ideal" === e) return A.he.IDEAL;
    if ("bancontact" === e) return A.he.BANCONTACT;
    if ("pix" === e) return A.he.PIX;
    if ("google_pay" === e || "apple_pay" === e) return A.he.PAYMENT_REQUEST;
    return e in t ? t[e] : null;
}
function S(e) {
    return s.size > 0 && s.has(e) ? "test" === (0, i.ux)() : o.has(e);
}
