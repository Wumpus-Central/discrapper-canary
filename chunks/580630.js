"use strict";
n.d(t, { $g: () => h, CE: () => m, Gp: () => c, RS: () => p, _J: () => g, l9: () => f, ze: () => E });
var i = n(465323),
    r = n(773669),
    s = n(615405),
    a = n(723702),
    o = n(927578),
    l = n(788868),
    d = n(818348),
    _ = n(985018);
let u = Object.freeze(["en-CA", "en-AU", "en-NZ"]);
function c(e, t, n) {
    let s = { ...(n ?? {}) },
        o = n?.localeOverride ?? r.default.locale;
    "en-US" === o && u.includes(r.default.systemLocale) && (s.currencyDisplay = "code"),
        "en-US" === o && (0, a.isWindows)() && "en-GB" === r.default.systemLocale && (s.currencyDisplay = "code");
    let { maximumFractionDigits: l, minimumFractionDigits: d } = s;
    return 0 === l && null == d && (s.minimumFractionDigits = 0), (0, i.$g)(e, t, o, s);
}
function E(e, t) {
    let n = c(e, d.Yr.EUR, t),
        i = c(1.95583 * e, d.Yr.BGN, t);
    return `${n} (${i})`;
}
function h(e, t, i) {
    return !(function (e) {
        if (Date.now() >= new Date("2026-08-05T22:00:00Z").getTime()) return !1;
        let t = null;
        switch ((0, a.getPlatformName)()) {
            case "android":
                t = n(373727).A.getUserCountry();
                break;
            case "ios":
                let i = n(748368).A;
                t = i.getStoreFront()?.country;
                break;
            default:
                t = s.A.ipCountryCode;
        }
        return "BG" === t && e?.toLowerCase() === d.Yr.EUR;
    })(t)
        ? c(e, t, i)
        : E(e, i);
}
function m(e, t, n) {
    if (t === l.WT.YEAR) return _.intl.formatToPlainString(_.t["rS8FA+"], { price: e });
    if (t === l.WT.MONTH && 1 === n) return _.intl.formatToPlainString(_.t.AbOLNu, { price: e });
    if (t === l.WT.MONTH && n > 1) return _.intl.formatToPlainString(_.t["Qc+9ww"], { price: e, intervalCount: n });
    throw Error(`Unsupported interval type: ${t}, and interval count: ${n}`);
}
function f(e, t) {
    return Intl.NumberFormat(e, { style: "percent", minimumFractionDigits: 0 }).format(t);
}
function g(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = (0, o.y8)(e.id);
    return m(h(n.amount, n.currency), e.interval, t);
}
function p(e, t, n) {
    var i;
    return (i = h(e, t, n)).length > 5 ? i.replace(/\.00(?=[\s)]|$)/g, "") : i;
}
