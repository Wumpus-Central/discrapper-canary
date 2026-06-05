n.d(t, { Dd: () => c, PE: () => A, R8: () => p, Wn: () => h, eI: () => m, mr: () => d });
var l = n(166532),
    r = n(71532),
    i = n(818348),
    a = n(375708);
let s = new Set([
        ...new Set([i.he.CARD, i.he.PAYMENT_REQUEST, i.he.PAYPAL]),
        ...new Set([
            i.he.IDEAL,
            i.he.BANCONTACT,
            i.he.GOPAY_WALLET,
            i.he.KAKAOPAY,
            i.he.VENMO,
            i.he.CASH_APP,
            i.he.GCASH,
            i.he.PAYSAFE_CARD,
            i.he.GRABPAY_MY,
            i.he.MOMO_WALLET,
            i.he.PRZELEWY24,
            i.he.EPS,
            i.he.PIX,
        ]),
    ]),
    o = new Set([]),
    u = {
        [i.he.PAYPAL]: {
            paymentSourceType: i.he.PAYPAL,
            subtitleTranslationKey: a.t.Djzd7L,
            isRegionalPaymentMethod: !1,
            toStep: l.pn.PAYPAL_INFORMATION,
        },
        [i.he.VENMO]: {
            paymentSourceType: i.he.VENMO,
            subtitleTranslationKey: a.t["4KoTLM"],
            isRegionalPaymentMethod: !0,
            toStep: l.pn.VENMO_INFORMATION,
        },
        [i.he.CASH_APP]: {
            paymentSourceType: i.he.CASH_APP,
            subtitleTranslationKey: a.t["9ALP8w"],
            isRegionalPaymentMethod: !0,
            toStep: l.pn.CASH_APP_INFORMATION,
        },
        [i.he.GOPAY_WALLET]: {
            paymentSourceType: i.he.GOPAY_WALLET,
            subtitleTranslationKey: a.t["43J8JK"],
            isRegionalPaymentMethod: !0,
            isStaffOnly: !0,
        },
        [i.he.KAKAOPAY]: {
            paymentSourceType: i.he.KAKAOPAY,
            subtitleTranslationKey: a.t.CSVexi,
            isRegionalPaymentMethod: !0,
        },
        [i.he.GCASH]: {
            paymentSourceType: i.he.GCASH,
            subtitleTranslationKey: a.t.PjehcF,
            isRegionalPaymentMethod: !0,
        },
        [i.he.PAYSAFE_CARD]: {
            paymentSourceType: i.he.PAYSAFE_CARD,
            subtitleTranslationKey: a.t.boznHN,
            isRegionalPaymentMethod: !0,
        },
        [i.he.GRABPAY_MY]: {
            paymentSourceType: i.he.GRABPAY_MY,
            subtitleTranslationKey: a.t.T5davE,
            isRegionalPaymentMethod: !0,
        },
        [i.he.MOMO_WALLET]: {
            paymentSourceType: i.he.MOMO_WALLET,
            subtitleTranslationKey: a.t.J0A1Vk,
            isRegionalPaymentMethod: !0,
        },
        [i.he.PRZELEWY24]: {
            paymentSourceType: i.he.PRZELEWY24,
            subtitleTranslationKey: a.t.u25uL0,
            isRegionalPaymentMethod: !0,
            toStep: l.pn.PRZELEWY24_INFORMATION,
        },
        [i.he.EPS]: {
            paymentSourceType: i.he.EPS,
            subtitleTranslationKey: a.t["5BSDU6"],
            isRegionalPaymentMethod: !0,
            toStep: l.pn.EPS_INFORMATION,
        },
    },
    c = (e) =>
        e.map((e) => ({
            id: e.custom_payment_method_id,
            options: {
                type: "static",
                subtitle:
                    e.payment_source_type in u
                        ? a.intl.string(u[e.payment_source_type].subtitleTranslationKey)
                        : void 0,
            },
        })),
    d = {
        [i.he.CARD]: "card",
        [i.he.IDEAL]: "ideal",
        [i.he.BANCONTACT]: "bancontact",
        [i.he.PAYPAL]: "paypal",
        [i.he.VENMO]: "venmo",
        [i.he.CASH_APP]: "cashapp",
        [i.he.GOPAY_WALLET]: "gopay",
        [i.he.KAKAOPAY]: "kakaopay",
        [i.he.GCASH]: "gcash",
        [i.he.PAYSAFE_CARD]: "paysafecard",
        [i.he.GRABPAY_MY]: "grabpay",
        [i.he.MOMO_WALLET]: "momo",
        [i.he.PRZELEWY24]: "p24",
        [i.he.EPS]: "eps",
        [i.he.PIX]: "pix",
    };
function p(e) {
    return e in u;
}
function m(e) {
    return p(e) ? (u[e].toStep ?? null) : null;
}
let h = (e, t) => {
    if ("card" === e || "link_card_brand" === e) return i.he.CARD;
    if ("ideal" === e) return i.he.IDEAL;
    if ("bancontact" === e) return i.he.BANCONTACT;
    if ("pix" === e) return i.he.PIX;
    if ("google_pay" === e || "apple_pay" === e) return i.he.PAYMENT_REQUEST;
    return e in t ? t[e] : null;
};
function A(e) {
    return o.size > 0 && o.has(e) ? "test" === (0, r.ux)() : s.has(e);
}
