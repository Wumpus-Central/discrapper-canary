"use strict";
n.d(t, {
    Fe: () => T,
    K7: () => C,
    Tf: () => N,
    Xm: () => O,
    c_: () => m,
    i$: () => A,
    m_: () => h,
    mk: () => I,
    ro: () => g,
    uN: () => R,
    v0: () => E,
});
var r = n(989349),
    i = n.n(r),
    a = n(83168),
    s = n(626584),
    o = n(773669),
    l = n(253932),
    u = n(985018);
let c = new s.A("DateUtils"),
    d = 6e4,
    _ = 864e5,
    f = Object.create(null);
function p(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
    "string" == typeof e ||
        "number" == typeof e ||
        e instanceof Date ||
        (c.error("Invalid date given to startOfDay", { d: e }), (n = new Date()));
    let r = new Date(n),
        i = r.getTime();
    return t || (i -= r.getTimezoneOffset() * d), Math.floor(i / _) * _;
}
function h(e, t) {
    return Math.floor((p(e, !1) - p(t, !1)) / _);
}
function m(e, t) {
    return (e.getTime() - t.getTime()) / _;
}
function g(e, t) {
    return Math.abs(e - t) <= _ && e.getDate() === t.getDate();
}
function E(e, t, n) {
    return Math.abs(e.valueOf() - t.valueOf()) < n;
}
function A(e, t) {
    let n = S(e).locale(),
        r = l.PZ.getSetting(),
        i = `${n}:${t}:${r}`,
        s = f[i];
    return null == s && (s = f[i] = (0, a.A)(t)), s(v(e));
}
function I(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = i().localeData(),
        a = i()(),
        s = h(v(e), a.toDate());
    if (s < -1) return A(e, "L LT");
    if (s < 0) t = "lastDay";
    else if (s < 1) {
        if (n) return A(e, "LT");
        t = "sameDay";
    } else t = s < 2 ? "nextDay" : "sameElse";
    return A(e, r.calendar(t, S(e), a));
}
function T(e) {
    let t = i().localeData(),
        n = i()(),
        r = h(v(e), n.toDate());
    return 0 === r ? A(e, "LT") : -1 === r ? A(e, t.calendar("lastDay", S(e), n)) : r > -7 ? A(e, "dddd") : A(e, "L");
}
function y(e) {
    if (e.length >= 200) throw Error("Date string exceeds maximum length");
    return i()(e);
}
function S(e) {
    return i().isMoment(e) ? e : i()(e);
}
function v(e) {
    return i().isMoment(e) ? e.toDate() : e;
}
function C(e) {
    let t,
        n = i().localeData(),
        r = new Date(),
        a = h(e, r);
    return "sameElse" ==
        (t = a < -1 ? "sameElse" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : "sameElse")
        ? A(e, "LLL")
        : A(e, n.calendar(t, i()(e), i()(r)));
}
o.default.addChangeListener(() => {
    f = Object.create(null);
});
let b = [
    { key: "days", millisecondsInUnit: 864e5 },
    { key: "hours", millisecondsInUnit: 36e5 },
    { key: "minutes", millisecondsInUnit: 6e4 },
    { key: "seconds", millisecondsInUnit: 1e3 },
];
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = { days: 0, hours: 0, minutes: 0, seconds: +!!n };
    if (e > t || (n && Number(e) + 1200 > Number(t))) return r;
    let i = Number(t) - Number(e);
    return (
        b.forEach((e) => {
            let { key: t, millisecondsInUnit: n } = e;
            (r[t] = Math.floor(i / n)), (i -= r[t] * n);
        }),
        r
    );
}
function R(e, t) {
    return e.days > 0
        ? u.intl.formatToPlainString(t.days, { days: e.days, hours: e.hours })
        : e.hours > 0
          ? u.intl.formatToPlainString(t.hours, { hours: e.hours, minutes: e.minutes })
          : u.intl.formatToPlainString(t.minutes, { minutes: Math.max(1, e.minutes) });
}
function O(e) {
    return null == e ? "" : y(e).format("YYYY-MM-DDTHH:mm");
}
