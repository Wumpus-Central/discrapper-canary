"use strict";
n.d(t, {
    Fe: () => C,
    K7: () => D,
    N5: () => x,
    P6: () => k,
    Tf: () => w,
    Xm: () => U,
    c_: () => T,
    i$: () => v,
    m_: () => I,
    mk: () => N,
    ro: () => S,
    uN: () => M,
    v0: () => y,
});
var r = n(989349),
    i = n.n(r),
    s = n(873298),
    a = n(73153),
    o = n(83168),
    l = n(658735),
    u = n(626584);
n(382627);
var c = n(773669),
    d = n(253932),
    _ = n(985018);
let f = new u.A("DateUtils"),
    p = 6e4,
    h = 864e5,
    m = Object.create(null);
function E() {
    m = Object.create(null);
}
function g() {
    let e = d.PZ.getSetting(),
        t = e !== s.PZ.AUTO;
    for (let n of Object.values(_.intl.formatConfig.time)) {
        let r = n;
        null != r &&
            "hour" in r &&
            (t && e === s.PZ.H12
                ? (r.hourCycle = "h12")
                : t && e === s.PZ.H23
                  ? (r.hourCycle = "h23")
                  : delete r.hourCycle);
    }
}
function A(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
    "string" == typeof e ||
        "number" == typeof e ||
        e instanceof Date ||
        (f.error("Invalid date given to startOfDay", { d: e }), (n = new Date()));
    let r = new Date(n),
        i = r.getTime();
    return t || (i -= r.getTimezoneOffset() * p), Math.floor(i / h) * h;
}
function I(e, t) {
    return Math.floor((A(e, !1) - A(t, !1)) / h);
}
function T(e, t) {
    return (e.getTime() - t.getTime()) / h;
}
function S(e, t) {
    return Math.abs(e - t) <= h && e.getDate() === t.getDate();
}
function y(e, t, n) {
    return Math.abs(e.valueOf() - t.valueOf()) < n;
}
function v(e, t, n) {
    let r = O(e).locale(),
        i = `${r}:${t}:${n ?? d.PZ.getSetting()}`,
        s = m[i];
    return null == s && (s = m[i] = (0, o.A)(t)), s(b(e));
}
function N(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 ? arguments[2] : void 0,
        s = i().localeData(),
        a = i()(),
        o = I(b(e), a.toDate());
    if (o < -1) return v(e, "L LT", r);
    if (o < 0) t = "lastDay";
    else if (o < 1) {
        if (n) return v(e, "LT", r);
        t = "sameDay";
    } else t = o < 2 ? "nextDay" : "sameElse";
    return v(e, s.calendar(t, O(e), a), r);
}
function C(e, t) {
    let n = i().localeData(),
        r = i()(),
        s = I(b(e), r.toDate());
    return 0 === s
        ? v(e, "LT", t)
        : -1 === s
          ? v(e, n.calendar("lastDay", O(e), r), t)
          : s > -7
            ? v(e, "dddd", t)
            : v(e, "L", t);
}
function R(e) {
    if (e.length >= 200) throw Error("Date string exceeds maximum length");
    return i()(e);
}
function O(e) {
    return i().isMoment(e) ? e : i()(e);
}
function b(e) {
    return i().isMoment(e) ? e.toDate() : e;
}
function D(e) {
    let t,
        n = i().localeData(),
        r = new Date(),
        s = I(e, r);
    return "sameElse" ==
        (t = s < -1 ? "sameElse" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : "sameElse")
        ? v(e, "LLL")
        : v(e, n.calendar(t, i()(e), i()(r)));
}
c.default.addChangeListener(E),
    (0, l.A)(E),
    a.h.subscribe("USER_SETTINGS_PROTO_UPDATE", g),
    a.h.subscribe("CONNECTION_OPEN", g);
let L = [
    { key: "days", millisecondsInUnit: 864e5 },
    { key: "hours", millisecondsInUnit: 36e5 },
    { key: "minutes", millisecondsInUnit: 6e4 },
    { key: "seconds", millisecondsInUnit: 1e3 },
];
function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = { days: 0, hours: 0, minutes: 0, seconds: +!!n };
    if (e > t || (n && Number(e) + 1200 > Number(t))) return r;
    let i = Number(t) - Number(e);
    return (
        L.forEach((e) => {
            let { key: t, millisecondsInUnit: n } = e;
            (r[t] = Math.floor(i / n)), (i -= r[t] * n);
        }),
        r
    );
}
function M(e, t) {
    return e.days > 0
        ? _.intl.formatToPlainString(t.days, { days: e.days, hours: e.hours })
        : e.hours > 0
          ? _.intl.formatToPlainString(t.hours, { hours: e.hours, minutes: e.minutes })
          : _.intl.formatToPlainString(t.minutes, { minutes: Math.max(1, e.minutes) });
}
function P() {
    return new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
}
function x() {
    let e = P(),
        t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
    return (e.getDate() / t) * 100;
}
function k() {
    let e = P();
    return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() - e.getDate();
}
function U(e) {
    return null == e ? "" : R(e).format("YYYY-MM-DDTHH:mm");
}
