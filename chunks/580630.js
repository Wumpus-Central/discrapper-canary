"use strict";
n.d(t, { $g: () => f, CE: () => p, Gp: () => _, RS: () => g, _J: () => m, l9: () => E, ze: () => h });
var i = n(465323),
    r = n(773669),
    s = n(615405),
    a = n(723702),
    o = n(428262),
    l = n(788868),
    u = n(818348),
    c = n(375708);
let d = Object.freeze(["en-CA", "en-AU", "en-NZ"]);
function _(e, t, n) {
    let s = { ...(n ?? {}) },
        o = n?.localeOverride ?? r.default.locale;
    "en-US" === o && d.includes(r.default.systemLocale) && (s.currencyDisplay = "code"),
        "en-US" === o && (0, a.isWindows)() && "en-GB" === r.default.systemLocale && (s.currencyDisplay = "code");
    let { maximumFractionDigits: l, minimumFractionDigits: u } = s;
    return 0 === l && null == u && (s.minimumFractionDigits = 0), (0, i.$g)(e, t, o, s);
}
function h(e, t) {
    let n = _(e, u.Yr.EUR, t),
        i = _(1.95583 * e, u.Yr.BGN, t);
    return `${n} (${i})`;
}
function f(e, t, i) {
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
        return "BG" === t && e?.toLowerCase() === u.Yr.EUR;
    })(t)
        ? _(e, t, i)
        : h(e, i);
}
function p(e, t, n) {
    if (t === l.WT.YEAR) return c.intl.formatToPlainString(c.t["rS8FA+"], { price: e });
    if (t === l.WT.MONTH && 1 === n) return c.intl.formatToPlainString(c.t.AbOLNu, { price: e });
    if (t === l.WT.MONTH && n > 1) return c.intl.formatToPlainString(c.t["Qc+9ww"], { price: e, intervalCount: n });
    throw Error(`Unsupported interval type: ${t}, and interval count: ${n}`);
}
function E(e, t) {
    return Intl.NumberFormat(e, { style: "percent", minimumFractionDigits: 0 }).format(t);
}
function m(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = (0, o.y8)(e.id);
    return p(f(n.amount, n.currency), e.interval, t);
}
function g(e, t, n) {
    var i;
    return (i = f(e, t, n)).length > 5 ? i.replace(/\.00(?=[\s)]|$)/g, "") : i;
}
