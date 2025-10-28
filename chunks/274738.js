t.d(a, {
    Eg: () => i,
    IQ: () => d,
    J4: () => o,
    JD: () => l,
    g_: () => r,
});
var u = t(720479),
    n = t(745597);
function r(e, a, t, u) {
    let n = (a = o(e, a)) - 1,
        r = -2;
    return (
        t <= 2 ? (r = 0) : i(a) && (r = -1),
        1721425 +
            365 * n +
            Math.floor(n / 4) -
            Math.floor(n / 100) +
            Math.floor(n / 400) +
            Math.floor((367 * t - 362) / 12 + r + u)
    );
}
function i(e) {
    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function o(e, a) {
    return "BC" === e ? 1 - a : a;
}
function l(e) {
    let a = "AD";
    return e <= 0 && ((a = "BC"), (e = 1 - e)), [a, e];
}
let s = {
    standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
};
class d {
    fromJulianDay(e) {
        let a = e - 1721426,
            t = Math.floor(a / 146097),
            o = (0, n.w)(a, 146097),
            s = Math.floor(o / 36524),
            d = (0, n.w)(o, 36524),
            c = Math.floor(d / 1461),
            m = Math.floor((0, n.w)(d, 1461) / 365),
            [D, h] = l(400 * t + 100 * s + 4 * c + m + +(4 !== s && 4 !== m)),
            f = e - r(D, h, 1, 1),
            y = 2;
        e < r(D, h, 3, 1) ? (y = 0) : i(h) && (y = 1);
        let p = Math.floor(((f + y) * 12 + 373) / 367),
            g = e - r(D, h, p, 1) + 1;
        return new (0, u.aw)(D, h, p, g);
    }
    toJulianDay(e) {
        return r(e.era, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        return s[i(e.year) ? "leapyear" : "standard"][e.month - 1];
    }
    getMonthsInYear(e) {
        return 12;
    }
    getDaysInYear(e) {
        return i(e.year) ? 366 : 365;
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
