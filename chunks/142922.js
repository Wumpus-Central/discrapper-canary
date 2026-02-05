"use strict";
n.d(t, { FG: () => d, LA: () => l, U_: () => o, f5: () => u, rG: () => s });
var r = n(99478),
    i = n(526531);
let a = 1721426;
function s(e, t, n, r) {
    let i = (t = l(e, t)) - 1,
        s = -2;
    return (
        n <= 2 ? (s = 0) : o(t) && (s = -1),
        a -
            1 +
            365 * i +
            Math.floor(i / 4) -
            Math.floor(i / 100) +
            Math.floor(i / 400) +
            Math.floor((367 * n - 362) / 12 + s + r)
    );
}
function o(e) {
    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function l(e, t) {
    return "BC" === e ? 1 - t : t;
}
function u(e) {
    let t = "AD";
    return e <= 0 && ((t = "BC"), (e = 1 - e)), [t, e];
}
let c = {
    standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
};
class d {
    fromJulianDay(e) {
        let t = e,
            n = t - a,
            l = Math.floor(n / 146097),
            c = (0, i.z)(n, 146097),
            d = Math.floor(c / 36524),
            _ = (0, i.z)(c, 36524),
            f = Math.floor(_ / 1461),
            p = Math.floor((0, i.z)(_, 1461) / 365),
            [h, m] = u(400 * l + 100 * d + 4 * f + p + +(4 !== d && 4 !== p)),
            g = t - s(h, m, 1, 1),
            E = 2;
        t < s(h, m, 3, 1) ? (E = 0) : o(m) && (E = 1);
        let A = Math.floor(((g + E) * 12 + 373) / 367),
            I = t - s(h, m, A, 1) + 1;
        return new (0, r.ng)(h, m, A, I);
    }
    toJulianDay(e) {
        return s(e.era, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        return c[o(e.year) ? "leapyear" : "standard"][e.month - 1];
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
