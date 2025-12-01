n.d(t, {
    Eg: () => s,
    IQ: () => d,
    J4: () => l,
    JD: () => c,
    g_: () => o,
});
var r = n(720479),
    i = n(745597);
let a = 1721426;
function o(e, t, n, r) {
    let i = (t = l(e, t)) - 1,
        o = -2;
    return (
        n <= 2 ? (o = 0) : s(t) && (o = -1),
        a -
            1 +
            365 * i +
            Math.floor(i / 4) -
            Math.floor(i / 100) +
            Math.floor(i / 400) +
            Math.floor((367 * n - 362) / 12 + o + r)
    );
}
function s(e) {
    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function l(e, t) {
    return "BC" === e ? 1 - t : t;
}
function c(e) {
    let t = "AD";
    return e <= 0 && ((t = "BC"), (e = 1 - e)), [t, e];
}
let u = {
    standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
};
class d {
    fromJulianDay(e) {
        let t = e,
            n = t - a,
            l = Math.floor(n / 146097),
            u = (0, i.w)(n, 146097),
            d = Math.floor(u / 36524),
            f = (0, i.w)(u, 36524),
            p = Math.floor(f / 1461),
            _ = Math.floor((0, i.w)(f, 1461) / 365),
            [m, h] = c(400 * l + 100 * d + 4 * p + _ + +(4 !== d && 4 !== _)),
            g = t - o(m, h, 1, 1),
            E = 2;
        t < o(m, h, 3, 1) ? (E = 0) : s(h) && (E = 1);
        let b = Math.floor(((g + E) * 12 + 373) / 367),
            y = t - o(m, h, b, 1) + 1;
        return new (0, r.aw)(m, h, b, y);
    }
    toJulianDay(e) {
        return o(e.era, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        return u[s(e.year) ? "leapyear" : "standard"][e.month - 1];
    }
    getMonthsInYear(e) {
        return 12;
    }
    getDaysInYear(e) {
        return s(e.year) ? 366 : 365;
    }
    getYearsInEra(e) {
        return 9999;
    }
    getEras() {
        return ["BC", "AD"];
    }
    isInverseEra(e) {
        return "BC" === e.era;
    }
    balanceDate(e) {
        e.year <= 0 && ((e.era = "BC" === e.era ? "AD" : "BC"), (e.year = 1 - e.year));
    }
    constructor() {
        this.identifier = "gregory";
    }
}
