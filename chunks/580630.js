"use strict";
n.d(t, { $g: () => E, CE: () => h, Gp: () => _, RS: () => g, _J: () => m, l9: () => p, ze: () => f });
var r = n(465323),
    i = n(773669),
    s = n(615405),
    a = n(723702),
    o = n(927578),
    l = n(788868),
    u = n(818348),
    d = n(985018);
let c = Object.freeze(["en-CA", "en-AU", "en-NZ"]);
function _(e, t, n) {
    let s = { ...(n ?? {}) },
        o = n?.localeOverride ?? i.default.locale;
    "en-US" === o && c.includes(i.default.systemLocale) && (s.currencyDisplay = "code"),
        "en-US" === o && (0, a.isWindows)() && "en-GB" === i.default.systemLocale && (s.currencyDisplay = "code");
    let { maximumFractionDigits: l, minimumFractionDigits: u } = s;
    return 0 === l && null == u && (s.minimumFractionDigits = 0), (0, r.$g)(e, t, o, s);
}
function f(e, t) {
    let n = _(e, u.Yr.EUR, t),
        r = _(1.95583 * e, u.Yr.BGN, t);
    return `${n} (${r})`;
}
function E(e, t, r) {
    return !(function (e) {
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
    })(t)
        ? _(e, t, r)
        : f(e, r);
}
function h(e, t, n) {
    if (t === l.WT.YEAR) return d.intl.formatToPlainString(d.t["rS8FA+"], { price: e });
    if (t === l.WT.MONTH && 1 === n) return d.intl.formatToPlainString(d.t.AbOLNu, { price: e });
    if (t === l.WT.MONTH && n > 1) return d.intl.formatToPlainString(d.t["Qc+9ww"], { price: e, intervalCount: n });
    throw Error(`Unsupported interval type: ${t}, and interval count: ${n}`);
}
function p(e, t) {
    return Intl.NumberFormat(e, { style: "percent", minimumFractionDigits: 0 }).format(t);
}
function m(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = (0, o.y8)(e.id);
    return h(E(n.amount, n.currency), e.interval, t);
}
function g(e, t, n) {
    var r;
    return (r = E(e, t, n)).length > 5 ? r.replace(/\.00(?=[\s)]|$)/g, "") : r;
}
