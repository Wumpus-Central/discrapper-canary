function r(e, t) {
    return (null == e && null == t) || (null != e && null != t && e.amount === t.amount && e.currency === t.currency);
}
function l() {
    let e = new Date(),
        t = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth() + 1, 1));
    return new Intl.DateTimeFormat(void 0, { dateStyle: "short", timeZone: "UTC" }).format(t);
}
function i(e) {
    try {
        let t = new Intl.NumberFormat(void 0, { style: "currency", currency: e.toUpperCase() }).formatToParts(0);
        return t.find((e) => "currency" === e.type)?.value ?? e.toUpperCase();
    } catch {
        return e.toUpperCase();
    }
}
function o(e, t) {
    if (0 === t) return e.replace(/[^0-9]/g, "");
    let n = e.replace(/[^0-9.]/g, ""),
        r = n.split(".");
    return 1 === r.length ? n : `${r[0]}.${r.slice(1).join("").slice(0, t)}`;
}
n.d(t, { Ky: () => r, Qn: () => i, cU: () => o, o3: () => l });
