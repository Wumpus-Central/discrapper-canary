n.d(t, {
    Q: () => d,
    _: () => u,
}),
    n(388685),
    n(539854);
var r = n(873546),
    i = n(987032),
    a = n(981631);
let o = [a.HeQ.CARD, a.HeQ.PAYPAL],
    s = new Set([
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
        [a.HeQ.SOFORT, new Set([])],
        [a.HeQ.PRZELEWY24, new Set(["ALL", "PL"])],
        [a.HeQ.GIROPAY, new Set(["ALL", "DE"])],
        [a.HeQ.PAYSAFE_CARD, new Set(["ALL", ...s])],
        [a.HeQ.GCASH, new Set(["ALL", "PH"])],
        [a.HeQ.GRABPAY_MY, new Set(["ALL", "MY"])],
        [a.HeQ.MOMO_WALLET, new Set(["ALL", "VN"])],
        [a.HeQ.VENMO, new Set(["ALL", "US"])],
        [a.HeQ.KAKAOPAY, new Set(["ALL", "KR"])],
        [a.HeQ.GOPAY_WALLET, new Set(["ALL", "ID"])],
        [a.HeQ.BANCONTACT, new Set(["ALL", "BE"])],
        [a.HeQ.EPS, new Set(["ALL", "AT"])],
        [a.HeQ.IDEAL, new Set(["ALL", "NL"])],
        [a.HeQ.CASH_APP, new Set(["ALL", "US"])],
    ]),
    c = new Map([[a.HeQ.PAYSAFE_CARD, new Set(["DE"])]]),
    u = ["city", "country", "line1"];
function d(e) {
    let { ipCountryCode: t, location: n } = e,
        {
            enabledPaymentTypes: s,
            forceCountryCode: u,
            validCountryCodes: d,
        } = i.ZP.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }),
        f = null != t ? t : "ALL";
    d.length > 0 && null != u && null != t && (f = d.includes(t) ? t : u);
    let p = new Set(),
        _ = [];
    return (
        l.forEach((e, t) => {
            s.includes(t) && (e.has(f) ? p.add(t) : _.push(t));
        }),
        c.forEach((e, t) => {
            e.has(f) && p.add(t);
        }),
        (r.bO || r.eL) && (p.delete(a.HeQ.VENMO), (_ = _.filter((e) => e !== a.HeQ.VENMO))),
        {
            countryPaymentMethods: [...o, ...Array.from(p)],
            remainingPaymentMethods: _,
        }
    );
}
