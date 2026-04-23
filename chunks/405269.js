"use strict";
n.d(t, {
    Fe: () => v,
    K7: () => R,
    N5: () => M,
    P6: () => P,
    Tf: () => D,
    Xm: () => x,
    c_: () => I,
    i$: () => y,
    m_: () => A,
    mk: () => N,
    ro: () => T,
    uN: () => L,
    v0: () => S,
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
    h = Object.create(null);
function E() {
    h = Object.create(null);
}
function m() {
    let e = _.PZ.getSetting(),
        t = e !== s.PZ.AUTO && (0, c.A)();
    for (let n of Object.values(f.intl.formatConfig.time))
        null != n &&
            "hour" in n &&
            (t && e === s.PZ.H12
                ? (n.hourCycle = "h12")
                : t && e === s.PZ.H23
                  ? (n.hourCycle = "h23")
                  : delete n.hourCycle);
}
function g(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
    "string" == typeof e ||
        "number" == typeof e ||
        e instanceof Date ||
        (p.error("Invalid date given to startOfDay", { d: e }), (n = new Date()));
    let r = new Date(n),
        i = r.getTime();
    return t || (i -= 6e4 * r.getTimezoneOffset()), 864e5 * Math.floor(i / 864e5);
}
function A(e, t) {
    return Math.floor((g(e, !1) - g(t, !1)) / 864e5);
}
function I(e, t) {
    return (e.getTime() - t.getTime()) / 864e5;
}
function T(e, t) {
    return 864e5 >= Math.abs(e - t) && e.getDate() === t.getDate();
}
function S(e, t, n) {
    return Math.abs(e.valueOf() - t.valueOf()) < n;
}
function y(e, t, n) {
    let r = C(e).locale(),
        i = `${r}:${t}:${n ?? _.PZ.getSetting()}`,
        s = h[i];
    return null == s && (s = h[i] = (0, o.A)(t)), s(O(e));
}
function N(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 ? arguments[2] : void 0,
        s = i().localeData(),
        a = i()(),
        o = A(O(e), a.toDate());
    if (o < -1) return y(e, "L LT", r);
    if (o < 0) t = "lastDay";
    else if (o < 1) {
        if (n) return y(e, "LT", r);
        t = "sameDay";
    } else t = o < 2 ? "nextDay" : "sameElse";
    return y(e, s.calendar(t, C(e), a), r);
}
function v(e, t) {
    let n = i().localeData(),
        r = i()(),
        s = A(O(e), r.toDate());
    return 0 === s
        ? y(e, "LT", t)
        : -1 === s
          ? y(e, n.calendar("lastDay", C(e), r), t)
          : s > -7
            ? y(e, "dddd", t)
            : y(e, "L", t);
}
function C(e) {
    return i().isMoment(e) ? e : i()(e);
}
function O(e) {
    return i().isMoment(e) ? e.toDate() : e;
}
function R(e) {
    let t,
        n = i().localeData(),
        r = new Date(),
        s = A(e, r);
    return "sameElse" ==
        (t = s < -1 ? "sameElse" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : "sameElse")
        ? y(e, "LLL")
        : y(e, n.calendar(t, i()(e), i()(r)));
}
d.default.addChangeListener(E),
    (0, l.A)(E),
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
        ? f.intl.formatToPlainString(t.days, { days: e.days, hours: e.hours })
        : e.hours > 0
          ? f.intl.formatToPlainString(t.hours, { hours: e.hours, minutes: e.minutes })
          : f.intl.formatToPlainString(t.minutes, { minutes: Math.max(1, e.minutes) });
}
function w() {
    return new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
}
function M() {
    let e = w(),
        t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
    return (e.getDate() / t) * 100;
}
function P() {
    let e = w();
    return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() - e.getDate();
}
function x(e) {
    return null == e
        ? ""
        : (function (e) {
              if (e.length >= 200) throw Error("Date string exceeds maximum length");
              return i()(e);
          })(e).format("YYYY-MM-DDTHH:mm");
}
