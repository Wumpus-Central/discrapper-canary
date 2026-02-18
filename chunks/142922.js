t.d(a, { FG: () => d, LA: () => u, U_: () => o, f5: () => l, rG: () => i });
var r = t(99478),
    n = t(526531);
function i(e, a, t, r) {
    let n = (a = u(e, a)) - 1,
        i = -2;
    return (
        t <= 2 ? (i = 0) : o(a) && (i = -1),
        1721425 +
            365 * n +
            Math.floor(n / 4) -
            Math.floor(n / 100) +
            Math.floor(n / 400) +
            Math.floor((367 * t - 362) / 12 + i + r)
    );
}
function o(e) {
    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function u(e, a) {
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
            u = (0, n.z)(a, 146097),
            s = Math.floor(u / 36524),
            d = (0, n.z)(u, 36524),
            c = Math.floor(d / 1461),
            m = Math.floor((0, n.z)(d, 1461) / 365),
            [h, D] = l(400 * t + 100 * s + 4 * c + m + +(4 !== s && 4 !== m)),
            y = e - i(h, D, 1, 1),
            p = 2;
        e < i(h, D, 3, 1) ? (p = 0) : o(D) && (p = 1);
        let g = Math.floor(((y + p) * 12 + 373) / 367),
            f = e - i(h, D, g, 1) + 1;
        return new (0, r.ng)(h, D, g, f);
    }
    toJulianDay(e) {
        return i(e.era, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        return s[o(e.year) ? "leapyear" : "standard"][e.month - 1];
    }
    getMonthsInYear(e) {
        return 12;
    }
    getDaysInYear(e) {
        return o(e.year) ? 366 : 365;
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
