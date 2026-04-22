n.d(t, { Dd: () => c, PE: () => A, R8: () => p, Wn: () => h, eI: () => m, mr: () => d });
var l = n(166532),
    i = n(71532),
    a = n(818348),
    r = n(985018);
let s = new Set([
        ...new Set([a.he.CARD, a.he.PAYMENT_REQUEST, a.he.PAYPAL]),
        ...new Set([
            a.he.IDEAL,
            a.he.BANCONTACT,
            a.he.GOPAY_WALLET,
            a.he.KAKAOPAY,
            a.he.VENMO,
            a.he.CASH_APP,
            a.he.GCASH,
            a.he.PAYSAFE_CARD,
            a.he.GRABPAY_MY,
            a.he.MOMO_WALLET,
            a.he.PRZELEWY24,
            a.he.EPS,
        ]),
    ]),
    o = new Set([]),
    u = {
        [a.he.PAYPAL]: {
            paymentSourceType: a.he.PAYPAL,
            subtitleTranslationKey: r.t.Djzd7L,
            isRegionalPaymentMethod: !1,
            toStep: l.pn.PAYPAL_INFORMATION,
        },
        [a.he.VENMO]: {
            paymentSourceType: a.he.VENMO,
            subtitleTranslationKey: r.t["4KoTLM"],
            isRegionalPaymentMethod: !0,
            toStep: l.pn.VENMO_INFORMATION,
        },
        [a.he.CASH_APP]: {
            paymentSourceType: a.he.CASH_APP,
            subtitleTranslationKey: r.t["9ALP8w"],
            isRegionalPaymentMethod: !0,
            toStep: l.pn.CASH_APP_INFORMATION,
        },
        [a.he.GOPAY_WALLET]: {
            paymentSourceType: a.he.GOPAY_WALLET,
            subtitleTranslationKey: r.t["43J8JK"],
            isRegionalPaymentMethod: !0,
            isStaffOnly: !0,
        },
        [a.he.KAKAOPAY]: {
            paymentSourceType: a.he.KAKAOPAY,
            subtitleTranslationKey: r.t.CSVexi,
            isRegionalPaymentMethod: !0,
        },
        [a.he.GCASH]: {
            paymentSourceType: a.he.GCASH,
            subtitleTranslationKey: r.t.PjehcF,
            isRegionalPaymentMethod: !0,
        },
        [a.he.PAYSAFE_CARD]: {
            paymentSourceType: a.he.PAYSAFE_CARD,
            subtitleTranslationKey: r.t.boznHN,
            isRegionalPaymentMethod: !0,
        },
        [a.he.GRABPAY_MY]: {
            paymentSourceType: a.he.GRABPAY_MY,
            subtitleTranslationKey: r.t.T5davE,
            isRegionalPaymentMethod: !0,
        },
        [a.he.MOMO_WALLET]: {
            paymentSourceType: a.he.MOMO_WALLET,
            subtitleTranslationKey: r.t.J0A1Vk,
            isRegionalPaymentMethod: !0,
        },
        [a.he.PRZELEWY24]: {
            paymentSourceType: a.he.PRZELEWY24,
            subtitleTranslationKey: r.t.u25uL0,
            isRegionalPaymentMethod: !0,
            toStep: l.pn.PRZELEWY24_INFORMATION,
        },
        [a.he.EPS]: {
            paymentSourceType: a.he.EPS,
            subtitleTranslationKey: r.t["5BSDU6"],
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
                        ? r.intl.string(u[e.payment_source_type].subtitleTranslationKey)
                        : void 0,
            },
        })),
    d = {
        [a.he.CARD]: "card",
        [a.he.IDEAL]: "ideal",
        [a.he.BANCONTACT]: "bancontact",
        [a.he.PAYPAL]: "paypal",
        [a.he.VENMO]: "venmo",
        [a.he.CASH_APP]: "cashapp",
        [a.he.GOPAY_WALLET]: "gopay",
        [a.he.KAKAOPAY]: "kakaopay",
        [a.he.GCASH]: "gcash",
        [a.he.PAYSAFE_CARD]: "paysafecard",
        [a.he.GRABPAY_MY]: "grabpay",
        [a.he.MOMO_WALLET]: "momo",
        [a.he.PRZELEWY24]: "p24",
        [a.he.EPS]: "eps",
    };
function p(e) {
    return e in u;
}
function m(e) {
    return p(e) ? (u[e].toStep ?? null) : null;
}
let h = (e, t) =>
    "card" === e || "link_card_brand" === e
        ? a.he.CARD
        : "ideal" === e
          ? a.he.IDEAL
          : "bancontact" === e
            ? a.he.BANCONTACT
            : "google_pay" === e || "apple_pay" === e
              ? a.he.PAYMENT_REQUEST
              : e in t
                ? t[e]
                : null;
function A(e) {
    return o.size > 0 && o.has(e) ? "test" === (0, i.ux)() : s.has(e);
}
