"use strict";
n.d(t, {
    Tr: () => h,
    Yd: () => g,
    ay: () => m,
    cd: () => y,
    gw: () => E,
    oU: () => o,
    tR: () => A,
    uB: () => T,
    yP: () => I,
});
var r = n(99478),
    i = n(440491),
    a = n(142922),
    s = n(352404);
function o(e) {
    return (
        (e = I(e, new (0, a.FG)())),
        l((0, a.LA)(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
    );
}
function l(e, t, n, r, i, a, s) {
    let o = new Date();
    return o.setUTCHours(r, i, a, s), o.setUTCFullYear(e, t - 1, n), o.getTime();
}
function u(e, t) {
    if ("UTC" === t) return 0;
    if (e > 0 && t === (0, s.Xj)()) return -6e4 * new Date(e).getTimezoneOffset();
    let { year: n, month: r, day: i, hour: a, minute: o, second: u } = d(e, t);
    return l(n, r, i, a, o, u, 0) - 1e3 * Math.floor(e / 1e3);
}
let c = new Map();
function d(e, t) {
    let n = c.get(t);
    n ||
        ((n = new Intl.DateTimeFormat("en-US", {
            timeZone: t,
            hour12: !1,
            era: "short",
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        })),
        c.set(t, n));
    let r = n.formatToParts(new Date(e)),
        i = {};
    for (let e of r) "literal" !== e.type && (i[e.type] = e.value);
    return {
        year: "BC" === i.era || "B" === i.era ? -i.year + 1 : +i.year,
        month: +i.month,
        day: +i.day,
        hour: "24" === i.hour ? 0 : +i.hour,
        minute: +i.minute,
        second: +i.second,
    };
}
let _ = 864e5;
function f(e, t, n, r) {
    return (n === r ? [n] : [n, r]).filter((n) => p(e, t, n));
}
function p(e, t, n) {
    let r = d(n, t);
    return (
        e.year === r.year &&
        e.month === r.month &&
        e.day === r.day &&
        e.hour === r.hour &&
        e.minute === r.minute &&
        e.second === r.second
    );
}
function h(e, t, n = "compatible") {
    let r = A(e);
    if ("UTC" === t) return o(r);
    if (t === (0, s.Xj)() && "compatible" === n) {
        r = I(r, new (0, a.FG)());
        let e = new Date(),
            t = (0, a.LA)(r.era, r.year);
        return e.setFullYear(t, r.month - 1, r.day), e.setHours(r.hour, r.minute, r.second, r.millisecond), e.getTime();
    }
    let i = o(r),
        l = u(i - _, t),
        c = u(i + _, t),
        d = f(r, t, i - l, i - c);
    if (1 === d.length) return d[0];
    if (d.length > 1)
        switch (n) {
            case "compatible":
            case "earlier":
                return d[0];
            case "later":
                return d[d.length - 1];
            case "reject":
                throw RangeError("Multiple possible absolute times found");
        }
    switch (n) {
        case "earlier":
            return Math.min(i - l, i - c);
        case "compatible":
        case "later":
            return Math.max(i - l, i - c);
        case "reject":
            throw RangeError("No such absolute time found");
    }
}
function m(e, t, n = "compatible") {
    return new Date(h(e, t, n));
}
function g(e, t) {
    let n = u(e, t),
        i = new Date(e + n),
        a = i.getUTCFullYear(),
        s = i.getUTCMonth() + 1,
        o = i.getUTCDate(),
        l = i.getUTCHours(),
        c = i.getUTCMinutes(),
        d = i.getUTCSeconds(),
        _ = i.getUTCMilliseconds();
    return new (0, r.Ip)(a < 1 ? "BC" : "AD", a < 1 ? -a + 1 : a, s, o, t, n, l, c, d, _);
}
function E(e) {
    return new (0, r.ng)(e.calendar, e.era, e.year, e.month, e.day);
}
function A(e, t) {
    let n = 0,
        i = 0,
        a = 0,
        s = 0;
    if ("timeZone" in e) ({ hour: n, minute: i, second: a, millisecond: s } = e);
    else if ("hour" in e && !t) return e;
    return (
        t && ({ hour: n, minute: i, second: a, millisecond: s } = t),
        new (0, r._l)(e.calendar, e.era, e.year, e.month, e.day, n, i, a, s)
    );
}
function I(e, t) {
    if ((0, s.Jg)(e.calendar, t)) return e;
    let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
        r = e.copy();
    return (r.calendar = t), (r.era = n.era), (r.year = n.year), (r.month = n.month), (r.day = n.day), (0, i.AU)(r), r;
}
function T(e, t, n) {
    return e instanceof r.Ip ? (e.timeZone === t ? e : S(e, t)) : g(h(e, t, n), t);
}
function y(e) {
    return new Date(o(e) - e.offset);
}
function S(e, t) {
    return I(g(o(e) - e.offset, t), e.calendar);
}
