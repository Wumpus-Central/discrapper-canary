n.d(t, {
    Ho: () => m,
    hR: () => u,
    lS: () => y,
    qH: () => _,
}),
    n(388685);
var r = n(622999),
    i = n(231338),
    a = n(388032);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = (e) => {
        if ("card" === e || "link_card_brand" === e) return i.He.CARD;
        if ("ideal" === e) return i.He.IDEAL;
        let t = v[(0, r.rI)()];
        return e in t ? t[e] : null;
    },
    d = new Set([i.He.CARD, i.He.PAYPAL]),
    f = new Set([i.He.IDEAL, i.He.GOPAY_WALLET, i.He.KAKAOPAY]);
function _(e) {
    if (d.has(e)) return !0;
    let t = (0, r.rI)();
    return (!p(e) || "live" !== t || null != g(e, t)) && f.has(e);
}
function p(e) {
    return e in h;
}
let h = {
        [i.He.PAYPAL]: {
            paymentSourceType: i.He.PAYPAL,
            liveId: "cpmt_1RbPZnCR4aIufmH2qyrDhNFa",
            testId: "cpmt_1RRMZZCR4aIufmH2ZzcE5aS4",
            subtitleTranslationKey: a.t.Djzd7L,
            isRegionalPaymentMethod: !1,
        },
        [i.He.GOPAY_WALLET]: {
            paymentSourceType: i.He.GOPAY_WALLET,
            liveId: "cpmt_1Re1C5CR4aIufmH2YKUuWN9N",
            testId: "cpmt_1RdkCFCR4aIufmH2CNjO11CE",
            subtitleTranslationKey: a.t["43J8JK"],
            isRegionalPaymentMethod: !0,
            isStaffOnly: !0,
        },
        [i.He.KAKAOPAY]: {
            paymentSourceType: i.He.KAKAOPAY,
            liveId: null,
            testId: "cpmt_1ReOr3CR4aIufmH29WgZlgkT",
            subtitleTranslationKey: a.t.CSVexi,
            isRegionalPaymentMethod: !0,
        },
    },
    m = c(
        s(
            {},
            {
                [i.He.CARD]: "card",
                [i.He.IDEAL]: "ideal",
            },
        ),
        {
            [i.He.PAYPAL]: "paypal",
            [i.He.GOPAY_WALLET]: "gopay",
            [i.He.KAKAOPAY]: "kakaopay",
        },
    ),
    g = (e, t) => {
        let n = h[e];
        return "live" === t ? n.liveId : n.testId;
    };
function E(e) {
    return Object.values(h)
        .map((t) => ({
            id: g(t.paymentSourceType, e),
            options: {
                type: "static",
                subtitle: a.intl.string(t.subtitleTranslationKey),
            },
            isRegionalPaymentMethod: t.isRegionalPaymentMethod,
            isStaffOnly: t.isStaffOnly,
            paymentSourceType: t.paymentSourceType,
        }))
        .filter((e) => null != e.id);
}
let b = {
        unknown: E("test"),
        test: E("test"),
        live: E("live"),
    },
    y = (e, t) =>
        b[(0, r.rI)()].filter(
            (n) => (!n.isStaffOnly || !!t) && (!n.isRegionalPaymentMethod || !!e.includes(n.paymentSourceType)),
        );
function O(e) {
    let t = {};
    for (let n of Object.values(h)) {
        let r = g(n.paymentSourceType, e);
        null != r && (t[r] = n.paymentSourceType);
    }
    return t;
}
let v = {
    unknown: O("test"),
    test: O("test"),
    live: O("live"),
};
