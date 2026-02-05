"use strict";
n.d(t, { J: () => d, V: () => c }), n(321073);
var r = n(607399),
    i = n(887555),
    a = n(652215);
let s = [a.hes.CARD, a.hes.PAYPAL],
    o = new Set([
        "DE",
        "BG",
        "CZ",
        "DK",
        "HU",
        "RO",
        "SE",
        "CH",
        "SI",
        "IE",
        "LV",
        "MT",
        "FR",
        "SK",
        "FI",
        "GR",
        "PT",
        "LU",
        "LT",
        "CY",
        "NO",
        "NL",
        "ES",
        "BE",
        "AT",
        "IT",
    ]),
    l = new Map([
        [a.hes.SOFORT, new Set([])],
        [a.hes.PRZELEWY24, new Set(["ALL", "PL"])],
        [a.hes.GIROPAY, new Set(["ALL", "DE"])],
        [a.hes.PAYSAFE_CARD, new Set(["ALL", ...o])],
        [a.hes.GCASH, new Set(["ALL", "PH"])],
        [a.hes.GRABPAY_MY, new Set(["ALL", "MY"])],
        [a.hes.MOMO_WALLET, new Set(["ALL", "VN"])],
        [a.hes.VENMO, new Set(["ALL", "US"])],
        [a.hes.KAKAOPAY, new Set(["ALL", "KR"])],
        [a.hes.GOPAY_WALLET, new Set(["ALL", "ID"])],
        [a.hes.BANCONTACT, new Set(["ALL", "BE"])],
        [a.hes.EPS, new Set(["ALL", "AT"])],
        [a.hes.IDEAL, new Set(["ALL", "NL"])],
        [a.hes.CASH_APP, new Set(["ALL", "US"])],
    ]),
    u = new Map([[a.hes.PAYSAFE_CARD, new Set(["DE"])]]),
    c = ["city", "country", "line1"];
function d(e) {
    let { ipCountryCode: t, location: n } = e,
        {
            enabledPaymentTypes: o,
            forceCountryCode: c,
            validCountryCodes: d,
        } = i.Ay.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }),
        _ = t ?? "ALL";
    d.length > 0 && null != c && null != t && (_ = d.includes(t) ? t : c);
    let f = new Set(),
        p = [];
    return (
        l.forEach((e, t) => {
            o.includes(t) && (e.has(_) ? f.add(t) : p.push(t));
        }),
        u.forEach((e, t) => {
            e.has(_) && f.add(t);
        }),
        (r.KY || r.Ct) && (f.delete(a.hes.VENMO), (p = p.filter((e) => e !== a.hes.VENMO))),
        { countryPaymentMethods: [...s, ...Array.from(f)], remainingPaymentMethods: p }
    );
}
