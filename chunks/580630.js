"use strict";
n.d(t, { $g: () => m, CE: () => E, Gp: () => f, RS: () => T, _J: () => A, l9: () => g, ze: () => h });
var r = n(465323),
    i = n(773669),
    s = n(615405),
    a = n(723702),
    o = n(927578),
    l = n(788868),
    u = n(818348),
    c = n(985018);
let d = Object.freeze(["en-CA", "en-AU", "en-NZ"]),
    _ = 1.95583;
function f(e, t, n) {
    let s = { ...(n ?? {}) },
        o = n?.localeOverride ?? i.default.locale;
    "en-US" === o && d.includes(i.default.systemLocale) && (s.currencyDisplay = "code"),
        "en-US" === o && (0, a.isWindows)() && "en-GB" === i.default.systemLocale && (s.currencyDisplay = "code");
    let { maximumFractionDigits: l, minimumFractionDigits: u } = s;
    return 0 === l && null == u && (s.minimumFractionDigits = 0), (0, r.$g)(e, t, o, s);
}
function p(e) {
    if (Date.now() >= new Date("2026-08-05T22:00:00Z").getTime()) return !1;
    let t = null;
    switch ((0, a.getPlatformName)()) {
        case "android":
            t = n(5255).A.getUserCountry();
            break;
        case "ios":
            let r = n(307006).A;
            t = r.getStoreFront()?.country;
            break;
        default:
            t = s.A.ipCountryCode;
    }
    return "BG" === t && e?.toLowerCase() === u.Yr.EUR;
}
function h(e, t) {
    let n = f(e, u.Yr.EUR, t),
        r = f(e * _, u.Yr.BGN, t);
    return `${n} (${r})`;
}
function m(e, t, n) {
    return p(t) ? h(e, n) : f(e, t, n);
}
function E(e, t, n) {
    if (t === l.WT.YEAR) return c.intl.formatToPlainString(c.t["rS8FA+"], { price: e });
    if (t === l.WT.MONTH && 1 === n) return c.intl.formatToPlainString(c.t.AbOLNu, { price: e });
    if (t === l.WT.MONTH && n > 1) return c.intl.formatToPlainString(c.t["Qc+9ww"], { price: e, intervalCount: n });
    throw Error(`Unsupported interval type: ${t}, and interval count: ${n}`);
}
function g(e, t) {
    return Intl.NumberFormat(e, { style: "percent", minimumFractionDigits: 0 }).format(t);
}
function A(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = (0, o.y8)(e.id);
    return E(m(n.amount, n.currency), e.interval, t);
}
function I(e) {
    return e.length > 5 ? e.replace(/\.00(?=[\s)]|$)/g, "") : e;
}
function T(e, t, n) {
    return I(m(e, t, n));
}
