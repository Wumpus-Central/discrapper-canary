"use strict";
n.d(t, { Dd: () => c, PE: () => h, R8: () => _, Wn: () => p, eI: () => f, mr: () => d });
var r = n(166532),
    i = n(71532),
    s = n(818348),
    a = n(985018);
let o = new Set([
        ...new Set([s.he.CARD, s.he.PAYMENT_REQUEST, s.he.PAYPAL]),
        ...new Set([
            s.he.IDEAL,
            s.he.BANCONTACT,
            s.he.GOPAY_WALLET,
            s.he.KAKAOPAY,
            s.he.VENMO,
            s.he.CASH_APP,
            s.he.GCASH,
            s.he.PAYSAFE_CARD,
            s.he.GRABPAY_MY,
            s.he.MOMO_WALLET,
            s.he.PRZELEWY24,
            s.he.EPS,
        ]),
    ]),
    l = new Set([]),
    u = {
        [s.he.PAYPAL]: {
            paymentSourceType: s.he.PAYPAL,
            subtitleTranslationKey: a.t.Djzd7L,
            isRegionalPaymentMethod: !1,
            toStep: r.pn.PAYPAL_INFORMATION,
        },
        [s.he.VENMO]: {
            paymentSourceType: s.he.VENMO,
            subtitleTranslationKey: a.t["4KoTLM"],
            isRegionalPaymentMethod: !0,
            toStep: r.pn.VENMO_INFORMATION,
        },
        [s.he.CASH_APP]: {
            paymentSourceType: s.he.CASH_APP,
            subtitleTranslationKey: a.t["9ALP8w"],
            isRegionalPaymentMethod: !0,
            toStep: r.pn.CASH_APP_INFORMATION,
        },
        [s.he.GOPAY_WALLET]: {
            paymentSourceType: s.he.GOPAY_WALLET,
            subtitleTranslationKey: a.t["43J8JK"],
            isRegionalPaymentMethod: !0,
            isStaffOnly: !0,
        },
        [s.he.KAKAOPAY]: {
            paymentSourceType: s.he.KAKAOPAY,
            subtitleTranslationKey: a.t.CSVexi,
            isRegionalPaymentMethod: !0,
        },
        [s.he.GCASH]: {
            paymentSourceType: s.he.GCASH,
            subtitleTranslationKey: a.t.PjehcF,
            isRegionalPaymentMethod: !0,
        },
        [s.he.PAYSAFE_CARD]: {
            paymentSourceType: s.he.PAYSAFE_CARD,
            subtitleTranslationKey: a.t.boznHN,
            isRegionalPaymentMethod: !0,
        },
        [s.he.GRABPAY_MY]: {
            paymentSourceType: s.he.GRABPAY_MY,
            subtitleTranslationKey: a.t.T5davE,
            isRegionalPaymentMethod: !0,
        },
        [s.he.MOMO_WALLET]: {
            paymentSourceType: s.he.MOMO_WALLET,
            subtitleTranslationKey: a.t.J0A1Vk,
            isRegionalPaymentMethod: !0,
        },
        [s.he.PRZELEWY24]: {
            paymentSourceType: s.he.PRZELEWY24,
            subtitleTranslationKey: a.t.u25uL0,
            isRegionalPaymentMethod: !0,
            toStep: r.pn.PRZELEWY24_INFORMATION,
        },
        [s.he.EPS]: {
            paymentSourceType: s.he.EPS,
            subtitleTranslationKey: a.t["5BSDU6"],
            isRegionalPaymentMethod: !0,
            toStep: r.pn.EPS_INFORMATION,
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
        [s.he.CARD]: "card",
        [s.he.IDEAL]: "ideal",
        [s.he.BANCONTACT]: "bancontact",
        [s.he.PAYPAL]: "paypal",
        [s.he.VENMO]: "venmo",
        [s.he.CASH_APP]: "cashapp",
        [s.he.GOPAY_WALLET]: "gopay",
        [s.he.KAKAOPAY]: "kakaopay",
        [s.he.GCASH]: "gcash",
        [s.he.PAYSAFE_CARD]: "paysafecard",
        [s.he.GRABPAY_MY]: "grabpay",
        [s.he.MOMO_WALLET]: "momo",
        [s.he.PRZELEWY24]: "p24",
        [s.he.EPS]: "eps",
    };
function _(e) {
    return e in u;
}
function f(e) {
    return _(e) ? (u[e].toStep ?? null) : null;
}
let p = (e, t) =>
    "card" === e || "link_card_brand" === e
        ? s.he.CARD
        : "ideal" === e
          ? s.he.IDEAL
          : "bancontact" === e
            ? s.he.BANCONTACT
            : "google_pay" === e || "apple_pay" === e
              ? s.he.PAYMENT_REQUEST
              : e in t
                ? t[e]
                : null;
function h(e) {
    return l.size > 0 && l.has(e) ? "test" === (0, i.ux)() : o.has(e);
}
