function r(t, e) {
    return (null == t && null == e) || (null != t && null != e && t.amount === e.amount && t.currency === e.currency);
}
function i() {
    let t = new Date(),
        e = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth() + 1, 1));
    return new Intl.DateTimeFormat(void 0, { dateStyle: "short", timeZone: "UTC" }).format(e);
}
function l(t) {
    try {
        let e = new Intl.NumberFormat(void 0, { style: "currency", currency: t.toUpperCase() }).formatToParts(0);
        return e.find((t) => "currency" === t.type)?.value ?? t.toUpperCase();
    } catch {
        return t.toUpperCase();
    }
}
function o(t, e) {
    if (0 === e) return t.replace(/[^0-9]/g, "");
    let n = t.replace(/[^0-9.]/g, ""),
        r = n.split(".");
    return 1 === r.length ? n : `${r[0]}.${r.slice(1).join("").slice(0, e)}`;
}
n.d(e, { Ky: () => r, Qn: () => l, cU: () => o, o3: () => i });
