"use strict";
n.d(t, {
    Fe: () => y,
    K7: () => b,
    Tf: () => R,
    Xm: () => D,
    c_: () => g,
    i$: () => I,
    m_: () => p,
    mk: () => T,
    ro: () => E,
    uN: () => O,
    v0: () => A,
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
function h(e) {
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
function p(e, t) {
    return Math.floor((h(e, !1) - h(t, !1)) / _);
}
function g(e, t) {
    return (e.getTime() - t.getTime()) / _;
}
function E(e, t) {
    return Math.abs(e - t) <= _ && e.getDate() === t.getDate();
}
function A(e, t, n) {
    return Math.abs(e.valueOf() - t.valueOf()) < n;
}
function I(e, t, n) {
    let r = v(e).locale(),
        i = `${r}:${t}:${n ?? l.PZ.getSetting()}`,
        s = f[i];
    return null == s && (s = f[i] = (0, a.A)(t)), s(C(e));
}
function T(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 ? arguments[2] : void 0,
        a = i().localeData(),
        s = i()(),
        o = p(C(e), s.toDate());
    if (o < -1) return I(e, "L LT", r);
    if (o < 0) t = "lastDay";
    else if (o < 1) {
        if (n) return I(e, "LT", r);
        t = "sameDay";
    } else t = o < 2 ? "nextDay" : "sameElse";
    return I(e, a.calendar(t, v(e), s), r);
}
function y(e, t) {
    let n = i().localeData(),
        r = i()(),
        a = p(C(e), r.toDate());
    return 0 === a
        ? I(e, "LT", t)
        : -1 === a
          ? I(e, n.calendar("lastDay", v(e), r), t)
          : a > -7
            ? I(e, "dddd", t)
            : I(e, "L", t);
}
function S(e) {
    if (e.length >= 200) throw Error("Date string exceeds maximum length");
    return i()(e);
}
function v(e) {
    return i().isMoment(e) ? e : i()(e);
}
function C(e) {
    return i().isMoment(e) ? e.toDate() : e;
}
function b(e) {
    let t,
        n = i().localeData(),
        r = new Date(),
        a = p(e, r);
    return "sameElse" ==
        (t = a < -1 ? "sameElse" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : "sameElse")
        ? I(e, "LLL")
        : I(e, n.calendar(t, i()(e), i()(r)));
}
o.default.addChangeListener(() => {
    f = Object.create(null);
});
let N = [
    { key: "days", millisecondsInUnit: 864e5 },
    { key: "hours", millisecondsInUnit: 36e5 },
    { key: "minutes", millisecondsInUnit: 6e4 },
    { key: "seconds", millisecondsInUnit: 1e3 },
];
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = { days: 0, hours: 0, minutes: 0, seconds: +!!n };
    if (e > t || (n && Number(e) + 1200 > Number(t))) return r;
    let i = Number(t) - Number(e);
    return (
        N.forEach((e) => {
            let { key: t, millisecondsInUnit: n } = e;
            (r[t] = Math.floor(i / n)), (i -= r[t] * n);
        }),
        r
    );
}
function O(e, t) {
    return e.days > 0
        ? u.intl.formatToPlainString(t.days, { days: e.days, hours: e.hours })
        : e.hours > 0
          ? u.intl.formatToPlainString(t.hours, { hours: e.hours, minutes: e.minutes })
          : u.intl.formatToPlainString(t.minutes, { minutes: Math.max(1, e.minutes) });
}
function D(e) {
    return null == e ? "" : S(e).format("YYYY-MM-DDTHH:mm");
}
