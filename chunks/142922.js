t.d(a, { FG: () => d, LA: () => o, U_: () => l, f5: () => u, rG: () => i });
var n = t(99478),
    r = t(526531);
function i(e, a, t, n) {
    let r = (a = o(e, a)) - 1,
        i = -2;
    return (
        t <= 2 ? (i = 0) : l(a) && (i = -1),
        1721425 +
            365 * r +
            Math.floor(r / 4) -
            Math.floor(r / 100) +
            Math.floor(r / 400) +
            Math.floor((367 * t - 362) / 12 + i + n)
    );
}
function l(e) {
    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function o(e, a) {
    return "BC" === e ? 1 - a : a;
}
function u(e) {
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
            o = (0, r.z)(a, 146097),
            s = Math.floor(o / 36524),
            d = (0, r.z)(o, 36524),
            c = Math.floor(d / 1461),
            m = Math.floor((0, r.z)(d, 1461) / 365),
            [h, D] = u(400 * t + 100 * s + 4 * c + m + +(4 !== s && 4 !== m)),
            y = e - i(h, D, 1, 1),
            g = 2;
        e < i(h, D, 3, 1) ? (g = 0) : l(D) && (g = 1);
        let p = Math.floor(((y + g) * 12 + 373) / 367),
            f = e - i(h, D, p, 1) + 1;
        return new (0, n.ng)(h, D, p, f);
    }
    toJulianDay(e) {
        return i(e.era, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        return s[l(e.year) ? "leapyear" : "standard"][e.month - 1];
    }
    getMonthsInYear(e) {
        return 12;
    }
    getDaysInYear(e) {
        return l(e.year) ? 366 : 365;
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
