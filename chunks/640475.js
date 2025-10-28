t.d(a, {
    FD: () => h,
    IO: () => y,
    Mw: () => p,
    WG: () => f,
    ZI: () => o,
    ZU: () => D,
    fW: () => g,
    fk: () => v,
    xA: () => m,
});
var u = t(720479),
    n = t(580608),
    r = t(274738),
    i = t(533426);
function o(e) {
    return (
        (e = p(e, new (0, r.IQ)())),
        l((0, r.J4)(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
    );
}
function l(e, a, t, u, n, r, i) {
    let o = new Date();
    return o.setUTCHours(u, n, r, i), o.setUTCFullYear(e, a - 1, t), o.getTime();
}
function s(e, a) {
    if ("UTC" === a) return 0;
    if (e > 0 && a === (0, i.iT)()) return -60000 * new Date(e).getTimezoneOffset();
    let { year: t, month: u, day: n, hour: r, minute: o, second: s } = c(e, a);
    return l(t, u, n, r, o, s, 0) - 1000 * Math.floor(e / 1000);
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
    let u = t.formatToParts(new Date(e)),
        n = {};
    for (let e of u) "literal" !== e.type && (n[e.type] = e.value);
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
    var u, n, l;
    let d = y(e);
    if ("UTC" === a) return o(d);
    if (a === (0, i.iT)() && "compatible" === t) {
        d = p(d, new (0, r.IQ)());
        let e = new Date(),
            a = (0, r.J4)(d.era, d.year);
        return e.setFullYear(a, d.month - 1, d.day), e.setHours(d.hour, d.minute, d.second, d.millisecond), e.getTime();
    }
    let D = o(d),
        h = s(D - 86400000, a),
        f = s(D + 86400000, a),
        g =
            ((u = d),
            ((n = D - h) == (l = D - f) ? [n] : [n, l]).filter((e) => {
                var t;
                let n;
                return (
                    (t = u),
                    (n = c(e, a)),
                    t.year === n.year &&
                        t.month === n.month &&
                        t.day === n.day &&
                        t.hour === n.hour &&
                        t.minute === n.minute &&
                        t.second === n.second
                );
            }));
    if (1 === g.length) return g[0];
    if (g.length > 1)
        switch (t) {
            case "compatible":
            case "earlier":
                return g[0];
            case "later":
                return g[g.length - 1];
            case "reject":
                throw RangeError("Multiple possible absolute times found");
        }
    switch (t) {
        case "earlier":
            return Math.min(D - h, D - f);
        case "compatible":
        case "later":
            return Math.max(D - h, D - f);
        case "reject":
            throw RangeError("No such absolute time found");
    }
}
function D(e, a, t = "compatible") {
    return new Date(m(e, a, t));
}
function h(e, a) {
    let t = s(e, a),
        n = new Date(e + t),
        r = n.getUTCFullYear(),
        i = n.getUTCMonth() + 1,
        o = n.getUTCDate(),
        l = n.getUTCHours(),
        d = n.getUTCMinutes(),
        c = n.getUTCSeconds(),
        m = n.getUTCMilliseconds();
    return new (0, u.AQ)(r < 1 ? "BC" : "AD", r < 1 ? -r + 1 : r, i, o, a, t, l, d, c, m);
}
function f(e) {
    return new (0, u.aw)(e.calendar, e.era, e.year, e.month, e.day);
}
function y(e, a) {
    let t = 0,
        n = 0,
        r = 0,
        i = 0;
    if ("timeZone" in e) ({ hour: t, minute: n, second: r, millisecond: i } = e);
    else if ("hour" in e && !a) return e;
    return (
        a && ({ hour: t, minute: n, second: r, millisecond: i } = a),
        new (0, u.oz)(e.calendar, e.era, e.year, e.month, e.day, t, n, r, i)
    );
}
function p(e, a) {
    if ((0, i.jv)(e.calendar, a)) return e;
    let t = a.fromJulianDay(e.calendar.toJulianDay(e)),
        u = e.copy();
    return (u.calendar = a), (u.era = t.era), (u.year = t.year), (u.month = t.month), (u.day = t.day), (0, n.jH)(u), u;
}
function g(e, a, t) {
    if (e instanceof u.AQ) {
        var n, r;
        return e.timeZone === a ? e : ((n = e), (r = a), p(h(o(n) - n.offset, r), n.calendar));
    }
    return h(m(e, a, t), a);
}
function v(e) {
    return new Date(o(e) - e.offset);
}
