n.d(t, {
    J: () => d,
    V: () => u,
}),
    n(896048),
    n(321073);
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
    c = new Map([[a.hes.PAYSAFE_CARD, new Set(["DE"])]]),
    u = ["city", "country", "line1"];

function d(e) {
    let { ipCountryCode: t, location: n } = e,
        {
            enabledPaymentTypes: o,
            forceCountryCode: u,
            validCountryCodes: d,
        } = i.Ay.getCurrentConfig(
            {
                location: n,
            },
            {
                autoTrackExposure: !1,
            },
        ),
        f = null != t ? t : "ALL";
    d.length > 0 && null != u && null != t && (f = d.includes(t) ? t : u);
    let p = new Set(),
        _ = [];
    return (
        l.forEach((e, t) => {
            o.includes(t) && (e.has(f) ? p.add(t) : _.push(t));
        }),
        c.forEach((e, t) => {
            e.has(f) && p.add(t);
        }),
        (r.KY || r.Ct) && (p.delete(a.hes.VENMO), (_ = _.filter((e) => e !== a.hes.VENMO))),
        {
            countryPaymentMethods: [...s, ...Array.from(p)],
            remainingPaymentMethods: _,
        }
    );
}
