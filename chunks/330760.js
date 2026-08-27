let r, n;
t.d(a, { d: () => q });
var i = t(569737),
    o = t(576463);
class l extends o.FG {
    fromJulianDay(e) {
        let a = super.fromJulianDay(e),
            t = (0, o.LA)(a.era, a.year);
        return new (0, i.ng)(this, t - -543, a.month, a.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(u(e));
    }
    getEras() {
        return ["BE"];
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(u(e));
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = "buddhist");
    }
}
function u(e) {
    let [a, t] = (0, o.f5)(e.year + -543);
    return new (0, i.ng)(a, t, e.month, e.day);
}
function s(e, a, t, r) {
    return e + 365 * a + Math.floor(a / 4) + 30 * (t - 1) + r - 1;
}
function d(e, a) {
    let t = Math.floor((4 * (a - e)) / 1461),
        r = 1 + Math.floor((a - s(e, t, 1, 1)) / 30),
        n = a + 1 - s(e, t, r, 1);
    return [t, r, n];
}
function c(e) {
    return Math.floor((e % 4) / 3);
}
function m(e, a) {
    return a % 13 != 0 ? 30 : c(e) + 5;
}
class h {
    fromJulianDay(e) {
        let [a, t, r] = d(1723856, e),
            n = "AM";
        return a <= 0 && ((n = "AA"), (a += 5500)), new (0, i.ng)(this, n, a, t, r);
    }
    toJulianDay(e) {
        let a = e.year;
        return "AA" === e.era && (a -= 5500), s(1723856, a, e.month, e.day);
    }
    getDaysInMonth(e) {
        return m(e.year, e.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(e) {
        return 365 + c(e.year);
    }
    getMaximumMonthsInYear() {
        return 13;
    }
    getMaximumDaysInMonth() {
        return 30;
    }
    getYearsInEra(e) {
        return "AA" === e.era ? 9999 : 9991;
    }
    getEras() {
        return ["AA", "AM"];
    }
    constructor() {
        this.identifier = "ethiopic";
    }
}
class y extends h {
    fromJulianDay(e) {
        let [a, t, r] = d(1723856, e);
        return (a += 5500), new (0, i.ng)(this, "AA", a, t, r);
    }
    getEras() {
        return ["AA"];
    }
    getYearsInEra() {
        return 9999;
    }
    constructor(...e) {
        super(...e), (this.identifier = "ethioaa");
    }
}
class D extends h {
    fromJulianDay(e) {
        let [a, t, r] = d(1824665, e),
            n = "CE";
        return a <= 0 && ((n = "BCE"), (a = 1 - a)), new (0, i.ng)(this, n, a, t, r);
    }
    toJulianDay(e) {
        let a = e.year;
        return "BCE" === e.era && (a = 1 - a), s(1824665, a, e.month, e.day);
    }
    getDaysInMonth(e) {
        let a = e.year;
        return "BCE" === e.era && (a = 1 - a), m(a, e.month);
    }
    isInverseEra(e) {
        return "BCE" === e.era;
    }
    balanceDate(e) {
        e.year <= 0 && ((e.era = "BCE" === e.era ? "CE" : "BCE"), (e.year = 1 - e.year));
    }
    getEras() {
        return ["BCE", "CE"];
    }
    getYearsInEra(e) {
        return "BCE" === e.era ? 9999 : 9715;
    }
    constructor(...e) {
        super(...e), (this.identifier = "coptic");
    }
}
var p = t(489138);
let g = 765433;
function f(e) {
    return 7 > (0, p.z)(7 * e + 1, 19);
}
function v(e) {
    let a = Math.floor((235 * e - 234) / 19),
        t = 29 * a + Math.floor((12084 + 13753 * a) / 25920);
    return 3 > (0, p.z)(3 * (t + 1), 7) && (t += 1), t;
}
function b(e) {
    let a, t;
    return v(e) + ((a = v(e - 1)), (t = v(e)), v(e + 1) - t == 356 ? 2 : +(t - a == 382));
}
function $(e) {
    return b(e + 1) - b(e);
}
function R(e, a) {
    if ((a >= 6 && !f(e) && a++, 4 === a || 7 === a || 9 === a || 11 === a || 13 === a)) return 29;
    let t = (function (e) {
        let a = $(e);
        switch ((a > 380 && (a -= 30), a)) {
            case 353:
                return 0;
            case 354:
                return 1;
            case 355:
                return 2;
        }
    })(e);
    return 2 === a ? (2 === t ? 30 : 29) : 3 === a ? (0 === t ? 29 : 30) : 6 === a ? 30 * !!f(e) : 30;
}
class P {
    fromJulianDay(e) {
        let a = e - 347997,
            t = Math.floor((((25920 * a) / g) * 19 + 234) / 235) + 1,
            r = b(t),
            n = Math.floor(a - r);
        for (; n < 1; ) n = Math.floor(a - (r = b(--t)));
        let o = 1,
            l = 0;
        for (; l < n; ) (l += R(t, o)), o++;
        let u = n - (l -= R(t, --o));
        return new (0, i.ng)(this, t, o, u);
    }
    toJulianDay(e) {
        let a = b(e.year);
        for (let t = 1; t < e.month; t++) a += R(e.year, t);
        return a + e.day + 347997;
    }
    getDaysInMonth(e) {
        return R(e.year, e.month);
    }
    getMonthsInYear(e) {
        return f(e.year) ? 13 : 12;
    }
    getDaysInYear(e) {
        return $(e.year);
    }
    getMaximumMonthsInYear() {
        return 13;
    }
    getMaximumDaysInMonth() {
        return 30;
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return ["AM"];
    }
    balanceYearMonth(e, a) {
        a.year !== e.year &&
            (f(a.year) && !f(e.year) && a.month > 6 ? e.month-- : !f(a.year) && f(e.year) && a.month > 6 && e.month++);
    }
    constructor() {
        this.identifier = "hebrew";
    }
}
class w extends o.FG {
    fromJulianDay(e) {
        let a,
            t,
            r,
            n = super.fromJulianDay(e),
            l = n.year - 78,
            u = e - (0, o.rG)(n.era, n.year, 1, 1);
        if (
            (u < 80
                ? (l--, (u += (a = (0, o.U_)(n.year - 1) ? 31 : 30) + 155 + 90 + 10))
                : ((a = (0, o.U_)(n.year) ? 31 : 30), (u -= 80)),
            u < a)
        )
            (t = 1), (r = u + 1);
        else {
            let e = u - a;
            e < 155
                ? ((t = Math.floor(e / 31) + 2), (r = (e % 31) + 1))
                : ((e -= 155), (t = Math.floor(e / 30) + 7), (r = (e % 30) + 1));
        }
        return new (0, i.ng)(this, l, t, r);
    }
    toJulianDay(e) {
        let a,
            t,
            r = e.year + 78,
            [n, i] = (0, o.f5)(r);
        return ((0, o.U_)(i) ? ((a = 31), (t = (0, o.rG)(n, i, 3, 21))) : ((a = 30), (t = (0, o.rG)(n, i, 3, 22))),
        1 === e.month)
            ? t + e.day - 1
            : ((t += a + 31 * Math.min(e.month - 2, 5)), e.month >= 8 && (t += (e.month - 7) * 30), (t += e.day - 1));
    }
    getDaysInMonth(e) {
        return (1 === e.month && (0, o.U_)(e.year + 78)) || (e.month >= 2 && e.month <= 6) ? 31 : 30;
    }
    getYearsInEra() {
        return 9919;
    }
    getEras() {
        return ["saka"];
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = "indian");
    }
}
function C(e, a, t, r) {
    return r + Math.ceil(29.5 * (t - 1)) + (a - 1) * 354 + Math.floor((3 + 11 * a) / 30) + e - 1;
}
function x(e, a, t) {
    let r = Math.floor((30 * (t - a) + 10646) / 10631),
        n = Math.min(12, Math.ceil((t - (29 + C(a, r, 1, 1))) / 29.5) + 1),
        o = t - C(a, r, n, 1) + 1;
    return new (0, i.ng)(e, r, n, o);
}
function k(e) {
    return (14 + 11 * e) % 30 < 11;
}
class S {
    fromJulianDay(e) {
        return x(this, 1948440, e);
    }
    toJulianDay(e) {
        return C(1948440, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        let a = 29 + (e.month % 2);
        return 12 === e.month && k(e.year) && a++, a;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(e) {
        return k(e.year) ? 355 : 354;
    }
    getMaximumMonthsInYear() {
        return 12;
    }
    getMaximumDaysInMonth() {
        return 30;
    }
    getYearsInEra() {
        return 9665;
    }
    getEras() {
        return ["AH"];
    }
    constructor() {
        this.identifier = "islamic-civil";
    }
}
class E extends S {
    fromJulianDay(e) {
        return x(this, 1948439, e);
    }
    toJulianDay(e) {
        return C(1948439, e.year, e.month, e.day);
    }
    constructor(...e) {
        super(...e), (this.identifier = "islamic-tbla");
    }
}
function V(e) {
    return 460322 + n[e - 1300];
}
function F(e, a) {
    return (r[e - 1300] & (1 << (11 - (a - 1)))) == 0 ? 29 : 30;
}
function B(e, a) {
    let t = V(e);
    for (let r = 1; r < a; r++) t += F(e, r);
    return t;
}
function M(e) {
    return n[e + 1 - 1300] - n[e - 1300];
}
class I extends S {
    constructor() {
        if (
            (super(),
            (this.identifier = "islamic-umalqura"),
            r ||
                (r = new Uint16Array(
                    Uint8Array.from(
                        atob(
                            "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=",
                        ),
                        (e) => e.charCodeAt(0),
                    ).buffer,
                )),
            !n)
        ) {
            n = new Uint32Array(301);
            let e = 0;
            for (let a = 1300; a <= 1600; a++) {
                n[a - 1300] = e;
                for (let t = 1; t <= 12; t++) e += F(a, t);
            }
        }
    }
    fromJulianDay(e) {
        let a = e - 1948440,
            t = V(1300),
            r = V(1600);
        if (a < t || a > r) return super.fromJulianDay(e);
        {
            let e = 1299,
                t = 1,
                r = 1;
            for (; r > 0; ) {
                r = a - V(++e) + 1;
                let n = M(e);
                if (r === n) {
                    t = 12;
                    break;
                }
                if (r < n) {
                    let a = F(e, t);
                    for (t = 1; r > a; ) (r -= a), (a = F(e, ++t));
                    break;
                }
            }
            return new (0, i.ng)(this, e, t, a - B(e, t) + 1);
        }
    }
    toJulianDay(e) {
        return e.year < 1300 || e.year > 1600 ? super.toJulianDay(e) : 1948440 + B(e.year, e.month) + (e.day - 1);
    }
    getDaysInMonth(e) {
        return e.year < 1300 || e.year > 1600 ? super.getDaysInMonth(e) : F(e.year, e.month);
    }
    getDaysInYear(e) {
        return e.year < 1300 || e.year > 1600 ? super.getDaysInYear(e) : M(e.year);
    }
}
let A = [
        [1868, 9, 8],
        [1912, 7, 30],
        [1926, 12, 25],
        [1989, 1, 8],
        [2019, 5, 1],
    ],
    T = [
        [1912, 7, 29],
        [1926, 12, 24],
        [1989, 1, 7],
        [2019, 4, 30],
    ],
    O = [1867, 1911, 1925, 1988, 2018],
    N = ["meiji", "taisho", "showa", "heisei", "reiwa"];
function Z(e) {
    let a = A.findIndex(
        ([a, t, r]) =>
            !!(e.year < a) || (e.year === a && !!(e.month < t)) || (e.year === a && e.month === t && !!(e.day < r)),
    );
    return -1 === a ? A.length - 1 : 0 === a ? 0 : a - 1;
}
function U(e) {
    let a = O[N.indexOf(e.era)];
    if (!a) throw Error("Unknown era: " + e.era);
    return new (0, i.ng)(e.year + a, e.month, e.day);
}
class z extends o.FG {
    fromJulianDay(e) {
        let a = super.fromJulianDay(e),
            t = Z(a);
        return new (0, i.ng)(this, N[t], a.year - O[t], a.month, a.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(U(e));
    }
    balanceDate(e) {
        let a = U(e),
            t = Z(a);
        N[t] !== e.era && ((e.era = N[t]), (e.year = a.year - O[t])), this.constrainDate(e);
    }
    constrainDate(e) {
        let a = N.indexOf(e.era),
            t = T[a];
        if (null != t) {
            let [r, n, i] = t,
                o = r - O[a];
            (e.year = Math.max(1, Math.min(o, e.year))),
                e.year === o && ((e.month = Math.min(n, e.month)), e.month === n && (e.day = Math.min(i, e.day)));
        }
        if (1 === e.year && a >= 0) {
            let [, t, r] = A[a];
            (e.month = Math.max(t, e.month)), e.month === t && (e.day = Math.max(r, e.day));
        }
    }
    getEras() {
        return N;
    }
    getYearsInEra(e) {
        let a = N.indexOf(e.era),
            t = A[a],
            r = A[a + 1];
        if (null == r) return 9999 - t[0] + 1;
        let n = r[0] - t[0];
        return (e.month < r[1] || (e.month === r[1] && e.day < r[2])) && n++, n;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(U(e));
    }
    getMinimumMonthInYear(e) {
        let a = j(e);
        return a ? a[1] : 1;
    }
    getMinimumDayInMonth(e) {
        let a = j(e);
        return a && e.month === a[1] ? a[2] : 1;
    }
    constructor(...e) {
        super(...e), (this.identifier = "japanese");
    }
}
function j(e) {
    if (1 === e.year) return A[N.indexOf(e.era)];
}
let K = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
class L {
    fromJulianDay(e) {
        let a = e - 1948320,
            t = 1 + Math.floor((33 * a + 3) / 12053),
            r = a - (365 * (t - 1) + Math.floor((8 * t + 21) / 33)),
            n = r < 216 ? Math.floor(r / 31) : Math.floor((r - 6) / 30),
            o = r - K[n] + 1;
        return new (0, i.ng)(this, t, n + 1, o);
    }
    toJulianDay(e) {
        let a = 1948319 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
        return (a += K[e.month - 1]), (a += e.day);
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(e) {
        return e.month <= 6 ? 31 : e.month <= 11 || 8 > (0, p.z)(25 * e.year + 11, 33) ? 30 : 29;
    }
    getMaximumMonthsInYear() {
        return 12;
    }
    getMaximumDaysInMonth() {
        return 31;
    }
    getEras() {
        return ["AP"];
    }
    getYearsInEra() {
        return 9377;
    }
    constructor() {
        this.identifier = "persian";
    }
}
function J(e) {
    return "minguo" === e.era ? e.year + 1911 : 1 - e.year + 1911;
}
function Y(e) {
    let a = e - 1911;
    return a > 0 ? ["minguo", a] : ["before_minguo", 1 - a];
}
class G extends o.FG {
    fromJulianDay(e) {
        let a = super.fromJulianDay(e),
            [t, r] = Y((0, o.LA)(a.era, a.year));
        return new (0, i.ng)(this, t, r, a.month, a.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(W(e));
    }
    getEras() {
        return ["before_minguo", "minguo"];
    }
    balanceDate(e) {
        let [a, t] = Y(J(e));
        (e.era = a), (e.year = t);
    }
    isInverseEra(e) {
        return "before_minguo" === e.era;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(W(e));
    }
    getYearsInEra(e) {
        return "before_minguo" === e.era ? 9999 : 8088;
    }
    constructor(...e) {
        super(...e), (this.identifier = "roc");
    }
}
function W(e) {
    let [a, t] = (0, o.f5)(J(e));
    return new (0, i.ng)(a, t, e.month, e.day);
}
function q(e) {
    switch (e) {
        case "buddhist":
            return new l();
        case "ethiopic":
            return new h();
        case "ethioaa":
            return new y();
        case "coptic":
            return new D();
        case "hebrew":
            return new P();
        case "indian":
            return new w();
        case "islamic-civil":
            return new S();
        case "islamic-tbla":
            return new E();
        case "islamic-umalqura":
            return new I();
        case "japanese":
            return new z();
        case "persian":
            return new L();
        case "roc":
            return new G();
        default:
            return new (0, o.FG)();
    }
}
