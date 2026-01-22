n.d(t, {
    FG: () => d,
    LA: () => l,
    U_: () => o,
    f5: () => c,
    rG: () => s,
});
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
            u = (0, i.z)(n, 146097),
            d = Math.floor(u / 36524),
            f = (0, i.z)(u, 36524),
            p = Math.floor(f / 1461),
            _ = Math.floor((0, i.z)(f, 1461) / 365),
            [h, m] = c(400 * l + 100 * d + 4 * p + _ + +(4 !== d && 4 !== _)),
            g = t - s(h, m, 1, 1),
            E = 2;
        t < s(h, m, 3, 1) ? (E = 0) : o(m) && (E = 1);
        let b = Math.floor(((g + E) * 12 + 373) / 367),
            y = t - s(h, m, b, 1) + 1;
        return new (0, r.ng)(h, m, b, y);
    }
    toJulianDay(e) {
        return s(e.era, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        return u[o(e.year) ? "leapyear" : "standard"][e.month - 1];
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
