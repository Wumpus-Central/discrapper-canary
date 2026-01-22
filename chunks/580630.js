n.d(t, {
    $g: () => b,
    CE: () => y,
    Gp: () => m,
    RS: () => S,
    _J: () => A,
    l9: () => O,
    ze: () => E,
}),
    n(65821),
    n(747238),
    n(812715);
var r = n(465323),
    i = n(307006),
    a = n(773669),
    s = n(615405),
    o = n(723702),
    l = n(927578),
    c = n(788868),
    u = n(818348),
    d = n(985018);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = Object.freeze(["en-CA", "en-AU", "en-NZ"]),
    h = 1.95583;

function m(e, t, n) {
    var i;
    let s = p({}, null != n ? n : {}),
        l = null != (i = null == n ? void 0 : n.localeOverride) ? i : a.default.locale;
    "en-US" === l && _.includes(a.default.systemLocale) && (s.currencyDisplay = "code"),
        "en-US" === l && (0, o.isWindows)() && "en-GB" === a.default.systemLocale && (s.currencyDisplay = "code");
    let { maximumFractionDigits: c, minimumFractionDigits: u } = s;
    return 0 === c && null == u && (s.minimumFractionDigits = 0), (0, r.$g)(e, t, l, s);
}

function g(e) {
    if (Date.now() >= new Date("2026-08-05T22:00:00Z").getTime()) return !1;
    let t = null;
    switch ((0, o.getPlatformName)()) {
        case "android":
            t = n(5255).A.getUserCountry();
            break;
        case "ios":
            var r;
            t = null == (r = i.A.getStoreFront()) ? void 0 : r.country;
            break;
        default:
            t = s.A.ipCountryCode;
    }
    return "BG" === t && (null == e ? void 0 : e.toLowerCase()) === u.Yr.EUR;
}

function E(e, t) {
    let n = m(e, u.Yr.EUR, t),
        r = m(e * h, u.Yr.BGN, t);
    return "".concat(n, " (").concat(r, ")");
}

function b(e, t, n) {
    return g(t) ? E(e, n) : m(e, t, n);
}

function y(e, t, n) {
    if (t === c.WT.YEAR)
        return d.intl.formatToPlainString(d.t["rS8FA+"], {
            price: e,
        });
    if (t === c.WT.MONTH && 1 === n)
        return d.intl.formatToPlainString(d.t.AbOLNu, {
            price: e,
        });
    if (t === c.WT.MONTH && n > 1)
        return d.intl.formatToPlainString(d.t["Qc+9ww"], {
            price: e,
            intervalCount: n,
        });
    throw Error("Unsupported interval type: ".concat(t, ", and interval count: ").concat(n));
}

function O(e, t) {
    return Intl.NumberFormat(e, {
        style: "percent",
        minimumFractionDigits: 0,
    }).format(t);
}

function A(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = (0, l.y8)(e.id);
    return y(b(n.amount, n.currency), e.interval, t);
}

function v(e) {
    return e.length > 5 ? e.replace(/\.00(?=[\s)]|$)/g, "") : e;
}

function S(e, t, n) {
    return v(b(e, t, n));
}
