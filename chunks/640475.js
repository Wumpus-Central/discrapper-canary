n.d(t, {
    FD: () => g,
    IO: () => b,
    Mw: () => y,
    WG: () => E,
    ZI: () => s,
    ZU: () => h,
    fW: () => O,
    fk: () => v,
    xA: () => m,
});
var r = n(720479),
    i = n(580608),
    a = n(274738),
    o = n(533426);
function s(e) {
    return (
        (e = y(e, new (0, a.IQ)())),
        l((0, a.J4)(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
    );
}
function l(e, t, n, r, i, a, o) {
    let s = new Date();
    return s.setUTCHours(r, i, a, o), s.setUTCFullYear(e, t - 1, n), s.getTime();
}
function c(e, t) {
    if ("UTC" === t) return 0;
    if (e > 0 && t === (0, o.iT)()) return -60000 * new Date(e).getTimezoneOffset();
    let { year: n, month: r, day: i, hour: a, minute: s, second: c } = d(e, t);
    return l(n, r, i, a, s, c, 0) - 1000 * Math.floor(e / 1000);
}
let u = new Map();
function d(e, t) {
    let n = u.get(t);
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
        u.set(t, n));
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
let f = 86400000;
function p(e, t, n, r) {
    return (n === r ? [n] : [n, r]).filter((n) => _(e, t, n));
}
function _(e, t, n) {
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
function m(e, t, n = "compatible") {
    let r = b(e);
    if ("UTC" === t) return s(r);
    if (t === (0, o.iT)() && "compatible" === n) {
        r = y(r, new (0, a.IQ)());
        let e = new Date(),
            t = (0, a.J4)(r.era, r.year);
        return e.setFullYear(t, r.month - 1, r.day), e.setHours(r.hour, r.minute, r.second, r.millisecond), e.getTime();
    }
    let i = s(r),
        l = c(i - f, t),
        u = c(i + f, t),
        d = p(r, t, i - l, i - u);
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
            return Math.min(i - l, i - u);
        case "compatible":
        case "later":
            return Math.max(i - l, i - u);
        case "reject":
            throw RangeError("No such absolute time found");
    }
}
function h(e, t, n = "compatible") {
    return new Date(m(e, t, n));
}
function g(e, t) {
    let n = c(e, t),
        i = new Date(e + n),
        a = i.getUTCFullYear(),
        o = i.getUTCMonth() + 1,
        s = i.getUTCDate(),
        l = i.getUTCHours(),
        u = i.getUTCMinutes(),
        d = i.getUTCSeconds(),
        f = i.getUTCMilliseconds();
    return new (0, r.AQ)(a < 1 ? "BC" : "AD", a < 1 ? -a + 1 : a, o, s, t, n, l, u, d, f);
}
function E(e) {
    return new (0, r.aw)(e.calendar, e.era, e.year, e.month, e.day);
}
function b(e, t) {
    let n = 0,
        i = 0,
        a = 0,
        o = 0;
    if ("timeZone" in e) ({ hour: n, minute: i, second: a, millisecond: o } = e);
    else if ("hour" in e && !t) return e;
    return (
        t && ({ hour: n, minute: i, second: a, millisecond: o } = t),
        new (0, r.oz)(e.calendar, e.era, e.year, e.month, e.day, n, i, a, o)
    );
}
function y(e, t) {
    if ((0, o.jv)(e.calendar, t)) return e;
    let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
        r = e.copy();
    return (r.calendar = t), (r.era = n.era), (r.year = n.year), (r.month = n.month), (r.day = n.day), (0, i.jH)(r), r;
}
function O(e, t, n) {
    return e instanceof r.AQ ? (e.timeZone === t ? e : S(e, t)) : g(m(e, t, n), t);
}
function v(e) {
    return new Date(s(e) - e.offset);
}
function S(e, t) {
    return y(g(s(e) - e.offset, t), e.calendar);
}
