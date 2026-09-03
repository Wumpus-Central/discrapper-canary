n.d(t, { $g: () => A, CE: () => h, Gp: () => _, RS: () => p, _J: () => f, l9: () => I, ze: () => E });
var i = n(465323),
    r = n(773669),
    a = n(615405),
    s = n(723702),
    l = n(158045),
    o = n(202541),
    d = n(818348),
    c = n(375708);
let u = Object.freeze(["en-CA", "en-AU", "en-NZ"]);
function _(e, t, n) {
    let a = { ...(n ?? {}) },
        l = n?.localeOverride ?? r.default.locale;
    "en-US" === l && u.includes(r.default.systemLocale) && (a.currencyDisplay = "code"),
        "en-US" === l && (0, s.isWindows)() && "en-GB" === r.default.systemLocale && (a.currencyDisplay = "code");
    let { maximumFractionDigits: o, minimumFractionDigits: d } = a;
    return 0 === o && null == d && (a.minimumFractionDigits = 0), (0, i.$g)(e, t, l, a);
}
function E(e, t) {
    let n = _(e, d.Yr.EUR, t),
        i = _(1.95583 * e, d.Yr.BGN, t);
    return `${n} (${i})`;
}
function A(e, t, i) {
    return !(function (e) {
        if (Date.now() >= new Date("2026-08-05T22:00:00Z").getTime()) return !1;
        let t = null;
        switch ((0, s.getPlatformName)()) {
            case "android":
                t = n(373727).A.getUserCountry();
                break;
            case "ios":
                let i = n(748368).A;
                t = i.getStoreFront()?.country;
                break;
            default:
                t = a.A.ipCountryCode;
        }
        return "BG" === t && e?.toLowerCase() === d.Yr.EUR;
    })(t)
        ? _(e, t, i)
        : E(e, i);
}
function h(e, t, n) {
    if (t === o.WT.YEAR) return c.intl.formatToPlainString(c.t["rS8FA+"], { price: e });
    if (t === o.WT.MONTH && 1 === n) return c.intl.formatToPlainString(c.t.AbOLNu, { price: e });
    if (t === o.WT.MONTH && n > 1) return c.intl.formatToPlainString(c.t["Qc+9ww"], { price: e, intervalCount: n });
    throw Error(`Unsupported interval type: ${t}, and interval count: ${n}`);
}
function I(e, t) {
    return Intl.NumberFormat(e, { style: "percent", minimumFractionDigits: 0 }).format(t);
}
function f(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = (0, l.y8)(e.id);
    return h(A(n.amount, n.currency), e.interval, t);
}
function p(e, t, n) {
    var i;
    return (i = A(e, t, n)).length > 5 ? i.replace(/\.00(?=[\s)]|$)/g, "") : i;
}
