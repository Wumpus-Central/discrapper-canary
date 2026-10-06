t.d(e, { Dd: () => i, R8: () => o, Wn: () => d, eI: () => u, eX: () => m, mr: () => c });
var l = t(166532),
    n = t(818348),
    s = t(375708);
let r = new Set([
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
    h = {
        [n.he.PAYPAL]: {
            paymentSourceType: n.he.PAYPAL,
            subtitleTranslationKey: s.t.Djzd7L,
            isRegionalPaymentMethod: !1,
            toStep: l.pn.PAYPAL_INFORMATION,
        },
        [n.he.VENMO]: {
            paymentSourceType: n.he.VENMO,
            subtitleTranslationKey: s.t["4KoTLM"],
            isRegionalPaymentMethod: !0,
            toStep: l.pn.VENMO_INFORMATION,
        },
        [n.he.CASH_APP]: {
            paymentSourceType: n.he.CASH_APP,
            subtitleTranslationKey: s.t["9ALP8w"],
            isRegionalPaymentMethod: !0,
            toStep: l.pn.CASH_APP_INFORMATION,
        },
        [n.he.GOPAY_WALLET]: {
            paymentSourceType: n.he.GOPAY_WALLET,
            subtitleTranslationKey: s.t["43J8JK"],
            isRegionalPaymentMethod: !0,
            isStaffOnly: !0,
        },
        [n.he.KAKAOPAY]: {
            paymentSourceType: n.he.KAKAOPAY,
            subtitleTranslationKey: s.t.CSVexi,
            isRegionalPaymentMethod: !0,
        },
        [n.he.GCASH]: {
            paymentSourceType: n.he.GCASH,
            subtitleTranslationKey: s.t.PjehcF,
            isRegionalPaymentMethod: !0,
        },
        [n.he.PAYSAFE_CARD]: {
            paymentSourceType: n.he.PAYSAFE_CARD,
            subtitleTranslationKey: s.t.boznHN,
            isRegionalPaymentMethod: !0,
        },
        [n.he.GRABPAY_MY]: {
            paymentSourceType: n.he.GRABPAY_MY,
            subtitleTranslationKey: s.t.T5davE,
            isRegionalPaymentMethod: !0,
        },
        [n.he.MOMO_WALLET]: {
            paymentSourceType: n.he.MOMO_WALLET,
            subtitleTranslationKey: s.t.J0A1Vk,
            isRegionalPaymentMethod: !0,
        },
        [n.he.PRZELEWY24]: {
            paymentSourceType: n.he.PRZELEWY24,
            subtitleTranslationKey: s.t.u25uL0,
            isRegionalPaymentMethod: !0,
            toStep: l.pn.PRZELEWY24_INFORMATION,
        },
        [n.he.EPS]: {
            paymentSourceType: n.he.EPS,
            subtitleTranslationKey: s.t["5BSDU6"],
            isRegionalPaymentMethod: !0,
            toStep: l.pn.EPS_INFORMATION,
        },
    };
function i(a) {
    return a.map((a) => ({
        id: a.custom_payment_method_id,
        options: {
            type: "static",
            subtitle:
                a.payment_source_type in h ? s.intl.string(h[a.payment_source_type].subtitleTranslationKey) : void 0,
        },
    }));
}
let c = {
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
function o(a) {
    return a in h;
}
function u(a) {
    return o(a) ? (h[a].toStep ?? null) : null;
}
function d(a, e) {
    if ("card" === a || "link_card_brand" === a) return n.he.CARD;
    if ("ideal" === a) return n.he.IDEAL;
    if ("bancontact" === a) return n.he.BANCONTACT;
    if ("pix" === a) return n.he.PIX;
    if ("google_pay" === a || "apple_pay" === a) return n.he.PAYMENT_REQUEST;
    return a in e ? e[a] : null;
}
function m(a) {
    return r.has(a);
}
