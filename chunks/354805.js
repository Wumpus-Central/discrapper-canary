o.d(a, {
    a: () => d,
    c: () => m,
    i: () => l,
    l: () => M,
    n: () => S,
    o: () => f,
    r: () => R,
    s: () => u,
    t: () => T,
    u: () => i,
});
var t = o(257300),
    r = o(209688),
    n = o(171251),
    s = o(64755);
let i = Object.values({
        AL: { code: "AL", name: "Alabama" },
        AK: { code: "AK", name: "Alaska" },
        AZ: { code: "AZ", name: "Arizona" },
        AR: { code: "AR", name: "Arkansas" },
        CA: { code: "CA", name: "California" },
        CO: { code: "CO", name: "Colorado" },
        CT: { code: "CT", name: "Connecticut" },
        DE: { code: "DE", name: "Delaware" },
        FL: { code: "FL", name: "Florida" },
        GA: { code: "GA", name: "Georgia" },
        HI: { code: "HI", name: "Hawaii" },
        ID: { code: "ID", name: "Idaho" },
        IL: { code: "IL", name: "Illinois" },
        IN: { code: "IN", name: "Indiana" },
        IA: { code: "IA", name: "Iowa" },
        KS: { code: "KS", name: "Kansas" },
        KY: { code: "KY", name: "Kentucky" },
        LA: { code: "LA", name: "Louisiana" },
        ME: { code: "ME", name: "Maine" },
        MD: { code: "MD", name: "Maryland" },
        MA: { code: "MA", name: "Massachusetts" },
        MI: { code: "MI", name: "Michigan" },
        MN: { code: "MN", name: "Minnesota" },
        MS: { code: "MS", name: "Mississippi" },
        MO: { code: "MO", name: "Missouri" },
        MT: { code: "MT", name: "Montana" },
        NE: { code: "NE", name: "Nebraska" },
        NV: { code: "NV", name: "Nevada" },
        NH: { code: "NH", name: "New Hampshire" },
        NJ: { code: "NJ", name: "New Jersey" },
        NM: { code: "NM", name: "New Mexico" },
        NY: { code: "NY", name: "New York" },
        NC: { code: "NC", name: "North Carolina" },
        ND: { code: "ND", name: "North Dakota" },
        OH: { code: "OH", name: "Ohio" },
        OK: { code: "OK", name: "Oklahoma" },
        OR: { code: "OR", name: "Oregon" },
        PA: { code: "PA", name: "Pennsylvania" },
        RI: { code: "RI", name: "Rhode Island" },
        SC: { code: "SC", name: "South Carolina" },
        SD: { code: "SD", name: "South Dakota" },
        TN: { code: "TN", name: "Tennessee" },
        TX: { code: "TX", name: "Texas" },
        UT: { code: "UT", name: "Utah" },
        VT: { code: "VT", name: "Vermont" },
        VA: { code: "VA", name: "Virginia" },
        WA: { code: "WA", name: "Washington" },
        WV: { code: "WV", name: "West Virginia" },
        WI: { code: "WI", name: "Wisconsin" },
        WY: { code: "WY", name: "Wyoming" },
    }).map((e) => ({ value: e.code, label: e.name })),
    c = { US: 10, BR: 9, GB: 8, UK: 8, AR: 8, CA: 7, IL: 7, CN: 6, NG: 6, DE: 5, ES: 5, FR: 5, IT: 5, KE: 5, MX: 5 },
    d = new Set([
        "verification.errors.zipCodeInvalidFormat",
        "verification.errors.postalCodeInvalidFormat",
        "verification.errors.invalidPostalCodeFixedLength",
        "verification.errors.CAPostalCodeInvalidFormat",
        "verification.errors.UKPostalCodeInvalidFormat",
        "verification.errors.ARPostalCodeInvalidFormat",
    ]),
    l = { DE: 5, ES: 5, FR: 5, IT: 5, KE: 5, MX: 5, CN: 6, NG: 6, IL: 7 };
function m(e) {
    return c[e] ?? 8;
}
function u(e) {
    return e in l
        ? "verification.errors.invalidPostalCodeFixedLength"
        : "CA" === e
          ? "verification.errors.CAPostalCodeInvalidFormat"
          : "AR" === e
            ? "verification.errors.ARPostalCodeInvalidFormat"
            : "GB" === e || "UK" === e
              ? "verification.errors.UKPostalCodeInvalidFormat"
              : "US" === e
                ? "verification.errors.zipCodeInvalidFormat"
                : "verification.errors.postalCodeInvalidFormat";
}
let A = /^(?:\d{5}|\d{9}|\d{5}-\d{4})$/,
    C = /^(?:\d{5}|\d{8}|\d{5}-\d{3})$/,
    p = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
    N = /^(?:[A-Z]{2}\d|[A-Z]{2}\d{2}|[A-Z]\d|[A-Z]\d{2}|[A-Z]\d[A-Z]|[A-Z]{2}\d[A-Z]) \d[A-Z]{2}$/,
    h = /^[A-Za-z]\d{4}[A-Za-z]{3}$/,
    I = /^\d{5}$/,
    g = /^\d{6}$/,
    v = /^\d{7}$/;
function M(e, a) {
    if (!e) return !1;
    switch (a) {
        case "US":
            return A.test(e);
        case "BR":
            return C.test(e);
        case "CA":
            return p.test(e);
        case "GB":
        case "UK":
            return N.test(e.toUpperCase());
        case "AR":
            return h.test(e.replace(/\s/g, "").toUpperCase());
        case "IL":
            return v.test(e);
        case "CN":
        case "NG":
            return g.test(e);
        case "DE":
        case "FR":
        case "IT":
        case "ES":
        case "MX":
        case "KE":
            return I.test(e);
        case "CM":
            return e.length > 0;
        default: {
            let a = e.replace(/\D/g, "");
            return /^\d+$/.test(a) && [5, 8].includes(a.length);
        }
    }
}
function f(e, a) {
    if ("US" === a || "BR" === a) {
        let o = e.includes("-"),
            t = e.replace(/\D/g, "").slice(0, "US" === a ? 9 : 8);
        return t.length <= 5 ? (o && 5 === t.length ? `${t}-` : t) : o ? `${t.slice(0, 5)}-${t.slice(5)}` : t;
    }
    if ("ES" === a) return e.replace(/\D/g, "").slice(0, 5);
    if ("CA" === a) {
        let a = e
            .replace(/[^A-Za-z0-9]/g, "")
            .toUpperCase()
            .slice(0, 6);
        return a.length <= 3 ? a : `${a.slice(0, 3)} ${a.slice(3)}`;
    }
    if ("GB" === a || "UK" === a) {
        let a = e
            .replace(/[^A-Za-z0-9]/g, "")
            .toUpperCase()
            .slice(0, 7);
        return a.length <= 3 ? a : `${a.slice(0, -3)} ${a.slice(-3)}`;
    }
    return "AR" === a
        ? e
              .replace(/[^A-Za-z0-9]/g, "")
              .toUpperCase()
              .slice(0, 8)
        : "IL" === a
          ? e.replace(/\D/g, "").slice(0, 7)
          : "CN" === a || "NG" === a
            ? e.replace(/\D/g, "").slice(0, 6)
            : "DE" === a || "FR" === a || "IT" === a || "MX" === a || "KE" === a
              ? e.replace(/\D/g, "").slice(0, 5)
              : e.slice(0, 8);
}
let R = "verification.errors.fieldRequiredDynamic";
function S(e, a, o, t) {
    var r, n;
    let s = { ...e },
        i = { ...a },
        c = !t || t.has("houseNo"),
        d = ((r = o.street), (n = o.houseNumber), c ? (r ?? "") : n && r ? `${n} ${r}` : (n ?? r ?? ""));
    return (
        d && ((s.street = d), (i.street = !0)),
        o.city && ((s.city = o.city), (i.city = !0)),
        o.stateCode && ((s.state = o.stateCode), (i.state = !0)),
        o.postalCode && ((s.postalCode = o.postalCode), (i.postalCode = !0)),
        o.houseNumber && c && ((s.houseNo = o.houseNumber), (i.houseNo = !0)),
        { values: s, touched: i }
    );
}
async function D(e, a) {
    let o = await r.t.post(n.t.addressAutocomplete, { search: e }, { signal: a });
    if (!o.ok) throw Error(`POST ${n.t.addressAutocomplete} failed: ${o.status} ${o.statusText}`);
    return {
        apiResponse: {
            items: (o.data.apiResponse?.items ?? []).map((e, a) => {
                let o = e.address ?? e;
                return {
                    id: e.id ?? a,
                    label: o.label ?? e.title ?? "",
                    street: o.street,
                    city: o.city,
                    stateCode: o.stateCode ?? o.state,
                    postalCode: o.postalCode,
                    houseNumber: o.houseNumber,
                    countryCode: o.countryCode,
                };
            }),
        },
    };
}
let T = (0, s.i)(({ input: e, sendBack: a }) => {
    let o = t.t.getInstance(),
        r = new AbortController(),
        n = o.setTimeout(async () => {
            try {
                a({ type: "RESULTS", suggestions: (await D(e.query, r.signal)).apiResponse?.items ?? [] });
            } catch {
                r.signal.aborted || a({ type: "RESULTS", suggestions: [] });
            }
        }, 300);
    return () => {
        o.clearTimeout(n), r.abort();
    };
});
