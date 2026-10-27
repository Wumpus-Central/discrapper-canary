t.d(a, { Dd: () => h, R8: () => c, Wn: () => d, eI: () => o, eX: () => m, mr: () => u });
var l = t(166532),
    n = t(818348),
    r = t(105292);
let s = new Set([
        ...new Set([n.he.CARD, n.he.PAYMENT_REQUEST, n.he.PAYPAL]),
        ...new Set([
            n.he.IDEAL,
            n.he.BANCONTACT,
            n.he.GOPAY_WALLET,
            n.he.KAKAOPAY,
            n.he.VENMO,
            n.he.CASH_APP,
            n.he.GCASH,
            n.he.PAYSAFE_CARD,
            n.he.GRABPAY_MY,
            n.he.MOMO_WALLET,
            n.he.PRZELEWY24,
            n.he.EPS,
            n.he.PIX,
        ]),
    ]),
    i = {
        [n.he.PAYPAL]: {
            paymentSourceType: n.he.PAYPAL,
            subtitleTranslationKey: r.t.Djzd7L,
            isRegionalPaymentMethod: !1,
            toStep: l.pn.PAYPAL_INFORMATION,
        },
        [n.he.VENMO]: {
            paymentSourceType: n.he.VENMO,
            subtitleTranslationKey: r.t["4KoTLM"],
            isRegionalPaymentMethod: !0,
            toStep: l.pn.VENMO_INFORMATION,
        },
        [n.he.CASH_APP]: {
            paymentSourceType: n.he.CASH_APP,
            subtitleTranslationKey: r.t["9ALP8w"],
            isRegionalPaymentMethod: !0,
            toStep: l.pn.CASH_APP_INFORMATION,
        },
        [n.he.GOPAY_WALLET]: {
            paymentSourceType: n.he.GOPAY_WALLET,
            subtitleTranslationKey: r.t["43J8JK"],
            isRegionalPaymentMethod: !0,
            isStaffOnly: !0,
        },
        [n.he.KAKAOPAY]: {
            paymentSourceType: n.he.KAKAOPAY,
            subtitleTranslationKey: r.t.CSVexi,
            isRegionalPaymentMethod: !0,
        },
        [n.he.GCASH]: {
            paymentSourceType: n.he.GCASH,
            subtitleTranslationKey: r.t.PjehcF,
            isRegionalPaymentMethod: !0,
        },
        [n.he.PAYSAFE_CARD]: {
            paymentSourceType: n.he.PAYSAFE_CARD,
            subtitleTranslationKey: r.t.boznHN,
            isRegionalPaymentMethod: !0,
        },
        [n.he.GRABPAY_MY]: {
            paymentSourceType: n.he.GRABPAY_MY,
            subtitleTranslationKey: r.t.T5davE,
            isRegionalPaymentMethod: !0,
        },
        [n.he.MOMO_WALLET]: {
            paymentSourceType: n.he.MOMO_WALLET,
            subtitleTranslationKey: r.t.J0A1Vk,
            isRegionalPaymentMethod: !0,
        },
        [n.he.PRZELEWY24]: {
            paymentSourceType: n.he.PRZELEWY24,
            subtitleTranslationKey: r.t.u25uL0,
            isRegionalPaymentMethod: !0,
            toStep: l.pn.PRZELEWY24_INFORMATION,
        },
        [n.he.EPS]: {
            paymentSourceType: n.he.EPS,
            subtitleTranslationKey: r.t["5BSDU6"],
            isRegionalPaymentMethod: !0,
            toStep: l.pn.EPS_INFORMATION,
        },
    };
function h(e) {
    return e.map((e) => ({
        id: e.custom_payment_method_id,
        options: {
            type: "static",
            subtitle:
                e.payment_source_type in i ? r.intl.string(i[e.payment_source_type].subtitleTranslationKey) : void 0,
        },
    }));
}
let u = {
    [n.he.CARD]: "card",
    [n.he.IDEAL]: "ideal",
    [n.he.BANCONTACT]: "bancontact",
    [n.he.PAYPAL]: "paypal",
    [n.he.VENMO]: "venmo",
    [n.he.CASH_APP]: "cashapp",
    [n.he.GOPAY_WALLET]: "gopay",
    [n.he.KAKAOPAY]: "kakaopay",
    [n.he.GCASH]: "gcash",
    [n.he.PAYSAFE_CARD]: "paysafecard",
    [n.he.GRABPAY_MY]: "grabpay",
    [n.he.MOMO_WALLET]: "momo",
    [n.he.PRZELEWY24]: "p24",
    [n.he.EPS]: "eps",
    [n.he.PIX]: "pix",
};
function c(e) {
    return e in i;
}
function o(e) {
    return c(e) ? (i[e].toStep ?? null) : null;
}
function d(e, a) {
    if ("card" === e || "link_card_brand" === e) return n.he.CARD;
    if ("ideal" === e) return n.he.IDEAL;
    if ("bancontact" === e) return n.he.BANCONTACT;
    if ("pix" === e) return n.he.PIX;
    if ("google_pay" === e || "apple_pay" === e) return n.he.PAYMENT_REQUEST;
    return e in a ? a[e] : null;
}
function m(e) {
    return s.has(e);
}
