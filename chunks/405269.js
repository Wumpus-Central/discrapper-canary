"use strict";
n.d(t, {
    Fe: () => v,
    K7: () => O,
    Tf: () => D,
    Xm: () => w,
    c_: () => A,
    i$: () => S,
    m_: () => g,
    mk: () => y,
    ro: () => I,
    uN: () => L,
    v0: () => T,
});
var r = n(989349),
    i = n.n(r),
    s = n(873298),
    a = n(73153),
    o = n(83168),
    l = n(626584);
n(382627);
var u = n(773669),
    c = n(253932),
    d = n(985018);
let _ = new l.A("DateUtils"),
    f = 6e4,
    p = 864e5,
    h = Object.create(null);
function m() {
    let e = c.PZ.getSetting(),
        t = e !== s.PZ.AUTO;
    for (let n of Object.values(d.intl.formatConfig.time)) {
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
function E(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
    "string" == typeof e ||
        "number" == typeof e ||
        e instanceof Date ||
        (_.error("Invalid date given to startOfDay", { d: e }), (n = new Date()));
    let r = new Date(n),
        i = r.getTime();
    return t || (i -= r.getTimezoneOffset() * f), Math.floor(i / p) * p;
}
function g(e, t) {
    return Math.floor((E(e, !1) - E(t, !1)) / p);
}
function A(e, t) {
    return (e.getTime() - t.getTime()) / p;
}
function I(e, t) {
    return Math.abs(e - t) <= p && e.getDate() === t.getDate();
}
function T(e, t, n) {
    return Math.abs(e.valueOf() - t.valueOf()) < n;
}
function S(e, t, n) {
    let r = C(e).locale(),
        i = `${r}:${t}:${n ?? c.PZ.getSetting()}`,
        s = h[i];
    return null == s && (s = h[i] = (0, o.A)(t)), s(R(e));
}
function y(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 ? arguments[2] : void 0,
        s = i().localeData(),
        a = i()(),
        o = g(R(e), a.toDate());
    if (o < -1) return S(e, "L LT", r);
    if (o < 0) t = "lastDay";
    else if (o < 1) {
        if (n) return S(e, "LT", r);
        t = "sameDay";
    } else t = o < 2 ? "nextDay" : "sameElse";
    return S(e, s.calendar(t, C(e), a), r);
}
function v(e, t) {
    let n = i().localeData(),
        r = i()(),
        s = g(R(e), r.toDate());
    return 0 === s
        ? S(e, "LT", t)
        : -1 === s
          ? S(e, n.calendar("lastDay", C(e), r), t)
          : s > -7
            ? S(e, "dddd", t)
            : S(e, "L", t);
}
function N(e) {
    if (e.length >= 200) throw Error("Date string exceeds maximum length");
    return i()(e);
}
function C(e) {
    return i().isMoment(e) ? e : i()(e);
}
function R(e) {
    return i().isMoment(e) ? e.toDate() : e;
}
function O(e) {
    let t,
        n = i().localeData(),
        r = new Date(),
        s = g(e, r);
    return "sameElse" ==
        (t = s < -1 ? "sameElse" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : "sameElse")
        ? S(e, "LLL")
        : S(e, n.calendar(t, i()(e), i()(r)));
}
u.default.addChangeListener(() => {
    h = Object.create(null);
}),
    a.h.subscribe("USER_SETTINGS_PROTO_UPDATE", m),
    a.h.subscribe("CONNECTION_OPEN", m);
let b = [
    { key: "days", millisecondsInUnit: 864e5 },
    { key: "hours", millisecondsInUnit: 36e5 },
    { key: "minutes", millisecondsInUnit: 6e4 },
    { key: "seconds", millisecondsInUnit: 1e3 },
];
function D(e, t) {
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
function L(e, t) {
    return e.days > 0
        ? d.intl.formatToPlainString(t.days, { days: e.days, hours: e.hours })
        : e.hours > 0
          ? d.intl.formatToPlainString(t.hours, { hours: e.hours, minutes: e.minutes })
          : d.intl.formatToPlainString(t.minutes, { minutes: Math.max(1, e.minutes) });
}
function w(e) {
    return null == e ? "" : N(e).format("YYYY-MM-DDTHH:mm");
}
