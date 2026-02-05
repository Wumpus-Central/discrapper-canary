"use strict";
n.d(t, { $g: () => g, CE: () => E, Gp: () => p, RS: () => y, _J: () => I, l9: () => A, ze: () => m });
var r = n(465323),
    i = n(307006),
    a = n(773669),
    s = n(615405),
    o = n(723702),
    l = n(927578),
    u = n(788868),
    c = n(818348),
    d = n(985018);
let _ = Object.freeze(["en-CA", "en-AU", "en-NZ"]),
    f = 1.95583;
function p(e, t, n) {
    let i = { ...(n ?? {}) },
        s = n?.localeOverride ?? a.default.locale;
    "en-US" === s && _.includes(a.default.systemLocale) && (i.currencyDisplay = "code"),
        "en-US" === s && (0, o.isWindows)() && "en-GB" === a.default.systemLocale && (i.currencyDisplay = "code");
    let { maximumFractionDigits: l, minimumFractionDigits: u } = i;
    return 0 === l && null == u && (i.minimumFractionDigits = 0), (0, r.$g)(e, t, s, i);
}
function h(e) {
    if (Date.now() >= new Date("2026-08-05T22:00:00Z").getTime()) return !1;
    let t = null;
    switch ((0, o.getPlatformName)()) {
        case "android":
            t = n(5255).A.getUserCountry();
            break;
        case "ios":
            t = i.A.getStoreFront()?.country;
            break;
        default:
            t = s.A.ipCountryCode;
    }
    return "BG" === t && e?.toLowerCase() === c.Yr.EUR;
}
function m(e, t) {
    let n = p(e, c.Yr.EUR, t),
        r = p(e * f, c.Yr.BGN, t);
    return `${n} (${r})`;
}
function g(e, t, n) {
    return h(t) ? m(e, n) : p(e, t, n);
}
function E(e, t, n) {
    if (t === u.WT.YEAR) return d.intl.formatToPlainString(d.t["rS8FA+"], { price: e });
    if (t === u.WT.MONTH && 1 === n) return d.intl.formatToPlainString(d.t.AbOLNu, { price: e });
    if (t === u.WT.MONTH && n > 1) return d.intl.formatToPlainString(d.t["Qc+9ww"], { price: e, intervalCount: n });
    throw Error(`Unsupported interval type: ${t}, and interval count: ${n}`);
}
function A(e, t) {
    return Intl.NumberFormat(e, { style: "percent", minimumFractionDigits: 0 }).format(t);
}
function I(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = (0, l.y8)(e.id);
    return E(g(n.amount, n.currency), e.interval, t);
}
function T(e) {
    return e.length > 5 ? e.replace(/\.00(?=[\s)]|$)/g, "") : e;
}
function y(e, t, n) {
    return T(g(e, t, n));
}
