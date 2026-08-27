t.d(a, {
    Ou: () => $,
    Tr: () => m,
    Yd: () => y,
    ay: () => h,
    cd: () => v,
    gw: () => D,
    oU: () => l,
    tR: () => p,
    uB: () => f,
    yP: () => g,
});
var r = t(569737),
    n = t(468508),
    i = t(576463),
    o = t(620409);
function l(e) {
    return (
        (e = g(e, new (0, i.FG)())),
        u((0, i.LA)(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
    );
}
function u(e, a, t, r, n, i, o) {
    let l = new Date();
    return l.setUTCHours(r, n, i, o), l.setUTCFullYear(e, a - 1, t), l.getTime();
}
function s(e, a) {
    if ("UTC" === a) return 0;
    if (e > 0 && a === (0, o.Xj)() && !(0, o.rS)()) return -6e4 * new Date(e).getTimezoneOffset();
    let { year: t, month: r, day: n, hour: i, minute: l, second: s } = c(e, a);
    return u(t, r, n, i, l, s, 0) - 1e3 * Math.floor(e / 1e3);
}
let d = new Map();
function c(e, a) {
    let t = d.get(a);
    t ||
        ((t = new Intl.DateTimeFormat("en-US", {
            timeZone: a,
            hour12: !1,
            era: "short",
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        })),
        d.set(a, t));
    let r = t.formatToParts(new Date(e)),
        n = {};
    for (let e of r) "literal" !== e.type && (n[e.type] = e.value);
    return {
        year: "BC" === n.era || "B" === n.era ? -n.year + 1 : +n.year,
        month: +n.month,
        day: +n.day,
        hour: "24" === n.hour ? 0 : +n.hour,
        minute: +n.minute,
        second: +n.second,
    };
}
function m(e, a, t = "compatible") {
    var r, n, u;
    let d = p(e);
    if ("UTC" === a) return l(d);
    if (a === (0, o.Xj)() && "compatible" === t && !(0, o.rS)()) {
        d = g(d, new (0, i.FG)());
        let e = new Date(),
            a = (0, i.LA)(d.era, d.year);
        return e.setFullYear(a, d.month - 1, d.day), e.setHours(d.hour, d.minute, d.second, d.millisecond), e.getTime();
    }
    let h = l(d),
        y = s(h - 864e5, a),
        D = s(h + 864e5, a),
        f =
            ((r = d),
            ((n = h - y) == (u = h - D) ? [n] : [n, u]).filter((e) => {
                var t;
                let n;
                return (
                    (t = r),
                    (n = c(e, a)),
                    t.year === n.year &&
                        t.month === n.month &&
                        t.day === n.day &&
                        t.hour === n.hour &&
                        t.minute === n.minute &&
                        t.second === n.second
                );
            }));
    if (1 === f.length) return f[0];
    if (f.length > 1)
        switch (t) {
            case "compatible":
            case "earlier":
                return f[0];
            case "later":
                return f[f.length - 1];
            case "reject":
                throw RangeError("Multiple possible absolute times found");
        }
    switch (t) {
        case "earlier":
            return Math.min(h - y, h - D);
        case "compatible":
        case "later":
            return Math.max(h - y, h - D);
        case "reject":
            throw RangeError("No such absolute time found");
    }
}
function h(e, a, t = "compatible") {
    return new Date(m(e, a, t));
}
function y(e, a) {
    let t = s(e, a),
        n = new Date(e + t),
        i = n.getUTCFullYear(),
        o = n.getUTCMonth() + 1,
        l = n.getUTCDate(),
        u = n.getUTCHours(),
        d = n.getUTCMinutes(),
        c = n.getUTCSeconds(),
        m = n.getUTCMilliseconds();
    return new (0, r.Ip)(i < 1 ? "BC" : "AD", i < 1 ? -i + 1 : i, o, l, a, t, u, d, c, m);
}
function D(e) {
    return new (0, r.ng)(e.calendar, e.era, e.year, e.month, e.day);
}
function p(e, a) {
    let t = 0,
        n = 0,
        i = 0,
        o = 0;
    if ("timeZone" in e) ({ hour: t, minute: n, second: i, millisecond: o } = e);
    else if ("hour" in e && !a) return e;
    return (
        a && ({ hour: t, minute: n, second: i, millisecond: o } = a),
        new (0, r._l)(e.calendar, e.era, e.year, e.month, e.day, t, n, i, o)
    );
}
function g(e, a) {
    if ((0, o.Jg)(e.calendar, a)) return e;
    let t = a.fromJulianDay(e.calendar.toJulianDay(e)),
        r = e.copy();
    return (r.calendar = a), (r.era = t.era), (r.year = t.year), (r.month = t.month), (r.day = t.day), (0, n.AU)(r), r;
}
function f(e, a, t) {
    return e instanceof r.Ip ? (e.timeZone === a ? e : b(e, a)) : y(m(e, a, t), a);
}
function v(e) {
    return new Date(l(e) - e.offset);
}
function b(e, a) {
    return g(y(l(e) - e.offset, a), e.calendar);
}
function $(e) {
    return b(e, (0, o.Xj)());
}
