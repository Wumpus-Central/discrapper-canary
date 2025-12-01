n.d(t, {
    Hg: () => T,
    KC: () => g,
    QX: () => N,
    TD: () => C,
    Xf: () => O,
    Y4: () => y,
    _w: () => E,
    jc: () => h,
    mm: () => P,
    vc: () => b,
    wY: () => m,
}),
    n(415506);
var r = n(913527),
    i = n.n(r),
    a = n(232551),
    o = n(710845),
    s = n(706454),
    l = n(695346),
    c = n(388032);
let u = new o.Z("DateUtils"),
    d = 60000,
    f = 86400000,
    p = Object.create(null);
function _(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
    "string" == typeof e ||
        "number" == typeof e ||
        e instanceof Date ||
        (u.error("Invalid date given to startOfDay", { d: e }), (n = new Date()));
    let r = new Date(n),
        i = r.getTime();
    return t || (i -= r.getTimezoneOffset() * d), Math.floor(i / f) * f;
}
function m(e, t) {
    return Math.floor((_(e, !1) - _(t, !1)) / f);
}
function h(e, t) {
    return (e.getTime() - t.getTime()) / f;
}
function g(e, t) {
    return Math.abs(e - t) <= f && e.getDate() === t.getDate();
}
function E(e, t, n) {
    return Math.abs(e.valueOf() - t.valueOf()) < n;
}
function b(e, t) {
    let n = S(e).locale(),
        r = l.hg.getSetting(),
        i = "".concat(n, ":").concat(t, ":").concat(r),
        o = p[i];
    return null == o && (o = p[i] = (0, a.Z)(t)), o(I(e));
}
function y(e) {
    let t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = i().localeData(),
        a = i()(),
        o = m(I(e), a.toDate());
    if (o < -1) return b(e, "L LT");
    if (o < 0) t = "lastDay";
    else if (o < 1) {
        if (n) return b(e, "LT");
        t = "sameDay";
    } else t = o < 2 ? "nextDay" : "sameElse";
    return b(e, r.calendar(t, S(e), a));
}
function O(e) {
    let t = i().localeData(),
        n = i()(),
        r = m(I(e), n.toDate());
    return 0 === r ? b(e, "LT") : -1 === r ? b(e, t.calendar("lastDay", S(e), n)) : r > -7 ? b(e, "dddd") : b(e, "L");
}
function v(e) {
    if (e.length >= 200) throw Error("Date string exceeds maximum length");
    return i()(e);
}
function S(e) {
    return i().isMoment(e) ? e : i()(e);
}
function I(e) {
    return i().isMoment(e) ? e.toDate() : e;
}
function T(e) {
    let t,
        n = i().localeData(),
        r = new Date(),
        a = m(e, r);
    return "sameElse" ==
        (t = a < -1 ? "sameElse" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : "sameElse")
        ? b(e, "LLL")
        : b(e, n.calendar(t, i()(e), i()(r)));
}
s.default.addChangeListener(() => {
    p = Object.create(null);
});
let A = [
    {
        key: "days",
        millisecondsInUnit: 86400000,
    },
    {
        key: "hours",
        millisecondsInUnit: 3600000,
    },
    {
        key: "minutes",
        millisecondsInUnit: 60000,
    },
    {
        key: "seconds",
        millisecondsInUnit: 1000,
    },
];
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: +!!n,
        };
    if (e > t || (n && Number(e) + 1200 > Number(t))) return r;
    let i = Number(t) - Number(e);
    return (
        A.forEach((e) => {
            let { key: t, millisecondsInUnit: n } = e;
            (r[t] = Math.floor(i / n)), (i -= r[t] * n);
        }),
        r
    );
}
function N(e, t) {
    return e.days > 0
        ? c.intl.formatToPlainString(t.days, {
              days: e.days,
              hours: e.hours,
          })
        : e.hours > 0
          ? c.intl.formatToPlainString(t.hours, {
                hours: e.hours,
                minutes: e.minutes,
            })
          : c.intl.formatToPlainString(t.minutes, { minutes: Math.max(1, e.minutes) });
}
function P(e) {
    return null == e ? "" : v(e).format("YYYY-MM-DDTHH:mm");
}
