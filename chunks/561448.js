n.d(t, {
    Ho: () => u,
    Hx: () => g,
    hR: () => b,
    lS: () => E,
    qH: () => y,
}),
    n(388685);
var r = n(409813),
    i = n(622999),
    a = n(231338),
    o = n(388032);
let s = new Set([a.He.CARD, a.He.PAYPAL]),
    l = new Set([a.He.IDEAL, a.He.GOPAY_WALLET, a.He.KAKAOPAY, a.He.VENMO, a.He.CASH_APP]),
    c = {
        [a.He.PAYPAL]: {
            paymentSourceType: a.He.PAYPAL,
            liveId: "cpmt_1RbPZnCR4aIufmH2qyrDhNFa",
            testId: "cpmt_1RRMZZCR4aIufmH2ZzcE5aS4",
            subtitleTranslationKey: o.t.Djzd7L,
            isRegionalPaymentMethod: !1,
            toStep: r.h8.PAYPAL_INFORMATION,
        },
        [a.He.VENMO]: {
            paymentSourceType: a.He.VENMO,
            liveId: "cpmt_1SNGR1CR4aIufmH2OyvrvPHn",
            testId: "cpmt_1SN3ZeCR4aIufmH2Ak0G4dGD",
            subtitleTranslationKey: o.t["4KoTLM"],
            isRegionalPaymentMethod: !0,
            toStep: r.h8.VENMO_INFORMATION,
        },
        [a.He.CASH_APP]: {
            paymentSourceType: a.He.CASH_APP,
            liveId: "cpmt_1SNGSMCR4aIufmH2x3oZxmWO",
            testId: "cpmt_1SNF4fCR4aIufmH2LJUAvNQh",
            subtitleTranslationKey: o.t["9ALP8w"],
            isRegionalPaymentMethod: !0,
            toStep: r.h8.CASH_APP_INFORMATION,
        },
        [a.He.GOPAY_WALLET]: {
            paymentSourceType: a.He.GOPAY_WALLET,
            liveId: "cpmt_1Re1C5CR4aIufmH2YKUuWN9N",
            testId: "cpmt_1RdkCFCR4aIufmH2CNjO11CE",
            subtitleTranslationKey: o.t["43J8JK"],
            isRegionalPaymentMethod: !0,
            isStaffOnly: !0,
        },
        [a.He.KAKAOPAY]: {
            paymentSourceType: a.He.KAKAOPAY,
            liveId: null,
            testId: "cpmt_1ReOr3CR4aIufmH29WgZlgkT",
            subtitleTranslationKey: o.t.CSVexi,
            isRegionalPaymentMethod: !0,
        },
    },
    u = {
        [a.He.CARD]: "card",
        [a.He.IDEAL]: "ideal",
        [a.He.PAYPAL]: "paypal",
        [a.He.VENMO]: "venmo",
        [a.He.CASH_APP]: "cashapp",
        [a.He.GOPAY_WALLET]: "gopay",
        [a.He.KAKAOPAY]: "kakaopay",
    },
    d = (e, t) => {
        let n = c[e];
        return "live" === t ? n.liveId : n.testId;
    };
function f(e) {
    let t = {};
    for (let n of Object.values(c)) {
        let r = d(n.paymentSourceType, e);
        null != r && (t[r] = n.paymentSourceType);
    }
    return t;
}
let _ = {
    unknown: f("test"),
    test: f("test"),
    live: f("live"),
};
function p(e) {
    return Object.values(c)
        .map((t) => ({
            id: d(t.paymentSourceType, e),
            options: {
                type: "static",
                subtitle: o.intl.string(t.subtitleTranslationKey),
            },
            isRegionalPaymentMethod: t.isRegionalPaymentMethod,
            isStaffOnly: t.isStaffOnly,
            paymentSourceType: t.paymentSourceType,
        }))
        .filter((e) => null != e.id);
}
let h = {
    unknown: p("test"),
    test: p("test"),
    live: p("live"),
};
function m(e) {
    return e in c;
}
function g(e) {
    if (m(e)) {
        var t;
        return null != (t = c[e].toStep) ? t : null;
    }
    return null;
}
let E = (e, t) =>
        h[(0, i.rI)()]
            .filter((n) => (!n.isStaffOnly || !!t) && (!n.isRegionalPaymentMethod || !!e.includes(n.paymentSourceType)))
            .map((e) => {
                let { id: t, options: n } = e;
                return {
                    id: t,
                    options: n,
                };
            }),
    b = (e) => {
        if ("card" === e || "link_card_brand" === e) return a.He.CARD;
        if ("ideal" === e) return a.He.IDEAL;
        let t = _[(0, i.rI)()];
        return e in t ? t[e] : null;
    };
function y(e) {
    if (s.has(e)) return !0;
    let t = (0, i.rI)();
    return (!m(e) || "live" !== t || null != d(e, t)) && l.has(e);
}
