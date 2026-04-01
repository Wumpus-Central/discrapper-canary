"use strict";
n.d(t, {
    Fe: () => R,
    K7: () => L,
    N5: () => k,
    P6: () => U,
    Tf: () => M,
    Xm: () => G,
    c_: () => S,
    i$: () => N,
    m_: () => T,
    mk: () => C,
    ro: () => y,
    uN: () => x,
    v0: () => v,
});
var r = n(989349),
    i = n.n(r),
    s = n(873298),
    a = n(73153),
    o = n(83168),
    l = n(658735),
    u = n(626584),
    c = n(151258),
    d = n(773669),
    _ = n(253932),
    f = n(985018);
let p = new u.A("DateUtils"),
    h = 6e4,
    m = 864e5,
    E = Object.create(null);
function g() {
    E = Object.create(null);
}
function A() {
    let e = _.PZ.getSetting(),
        t = e !== s.PZ.AUTO && (0, c.A)();
    for (let n of Object.values(f.intl.formatConfig.time)) {
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
function I(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
    "string" == typeof e ||
        "number" == typeof e ||
        e instanceof Date ||
        (p.error("Invalid date given to startOfDay", { d: e }), (n = new Date()));
    let r = new Date(n),
        i = r.getTime();
    return t || (i -= r.getTimezoneOffset() * h), Math.floor(i / m) * m;
}
function T(e, t) {
    return Math.floor((I(e, !1) - I(t, !1)) / m);
}
function S(e, t) {
    return (e.getTime() - t.getTime()) / m;
}
function y(e, t) {
    return Math.abs(e - t) <= m && e.getDate() === t.getDate();
}
function v(e, t, n) {
    return Math.abs(e.valueOf() - t.valueOf()) < n;
}
function N(e, t, n) {
    let r = b(e).locale(),
        i = `${r}:${t}:${n ?? _.PZ.getSetting()}`,
        s = E[i];
    return null == s && (s = E[i] = (0, o.A)(t)), s(D(e));
}
function C(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 ? arguments[2] : void 0,
        s = i().localeData(),
        a = i()(),
        o = T(D(e), a.toDate());
    if (o < -1) return N(e, "L LT", r);
    if (o < 0) t = "lastDay";
    else if (o < 1) {
        if (n) return N(e, "LT", r);
        t = "sameDay";
    } else t = o < 2 ? "nextDay" : "sameElse";
    return N(e, s.calendar(t, b(e), a), r);
}
function R(e, t) {
    let n = i().localeData(),
        r = i()(),
        s = T(D(e), r.toDate());
    return 0 === s
        ? N(e, "LT", t)
        : -1 === s
          ? N(e, n.calendar("lastDay", b(e), r), t)
          : s > -7
            ? N(e, "dddd", t)
            : N(e, "L", t);
}
function O(e) {
    if (e.length >= 200) throw Error("Date string exceeds maximum length");
    return i()(e);
}
function b(e) {
    return i().isMoment(e) ? e : i()(e);
}
function D(e) {
    return i().isMoment(e) ? e.toDate() : e;
}
function L(e) {
    let t,
        n = i().localeData(),
        r = new Date(),
        s = T(e, r);
    return "sameElse" ==
        (t = s < -1 ? "sameElse" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : "sameElse")
        ? N(e, "LLL")
        : N(e, n.calendar(t, i()(e), i()(r)));
}
d.default.addChangeListener(g),
    (0, l.A)(g),
    a.h.subscribe("USER_SETTINGS_PROTO_UPDATE", A),
    a.h.subscribe("CONNECTION_OPEN", A);
let w = [
    { key: "days", millisecondsInUnit: 864e5 },
    { key: "hours", millisecondsInUnit: 36e5 },
    { key: "minutes", millisecondsInUnit: 6e4 },
    { key: "seconds", millisecondsInUnit: 1e3 },
];
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = { days: 0, hours: 0, minutes: 0, seconds: +!!n };
    if (e > t || (n && Number(e) + 1200 > Number(t))) return r;
    let i = Number(t) - Number(e);
    return (
        w.forEach((e) => {
            let { key: t, millisecondsInUnit: n } = e;
            (r[t] = Math.floor(i / n)), (i -= r[t] * n);
        }),
        r
    );
}
function x(e, t) {
    return e.days > 0
        ? f.intl.formatToPlainString(t.days, { days: e.days, hours: e.hours })
        : e.hours > 0
          ? f.intl.formatToPlainString(t.hours, { hours: e.hours, minutes: e.minutes })
          : f.intl.formatToPlainString(t.minutes, { minutes: Math.max(1, e.minutes) });
}
function P() {
    return new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
}
function k() {
    let e = P(),
        t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
    return (e.getDate() / t) * 100;
}
function U() {
    let e = P();
    return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() - e.getDate();
}
function G(e) {
    return null == e ? "" : O(e).format("YYYY-MM-DDTHH:mm");
}
