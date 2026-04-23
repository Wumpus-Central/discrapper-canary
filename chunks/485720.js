let n, r;
t.d(a, { d: () => H });
var i = t(99478),
    l = t(142922);
class o extends l.FG {
    fromJulianDay(e) {
        let a = super.fromJulianDay(e),
            t = (0, l.LA)(a.era, a.year);
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
    let [a, t] = (0, l.f5)(e.year + -543);
    return new (0, i.ng)(a, t, e.month, e.day);
}
function s(e, a, t, n) {
    return e + 365 * a + Math.floor(a / 4) + 30 * (t - 1) + n - 1;
}
function d(e, a) {
    let t = Math.floor((4 * (a - e)) / 1461),
        n = 1 + Math.floor((a - s(e, t, 1, 1)) / 30),
        r = a + 1 - s(e, t, n, 1);
    return [t, n, r];
}
function c(e) {
    return Math.floor((e % 4) / 3);
}
function m(e, a) {
    return a % 13 != 0 ? 30 : c(e) + 5;
}
class h {
    fromJulianDay(e) {
        let [a, t, n] = d(1723856, e),
            r = "AM";
        return a <= 0 && ((r = "AA"), (a += 5500)), new (0, i.ng)(this, r, a, t, n);
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
class D extends h {
    fromJulianDay(e) {
        let [a, t, n] = d(1723856, e);
        return (a += 5500), new (0, i.ng)(this, "AA", a, t, n);
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
class y extends h {
    fromJulianDay(e) {
        let [a, t, n] = d(1824665, e),
            r = "CE";
        return a <= 0 && ((r = "BCE"), (a = 1 - a)), new (0, i.ng)(this, r, a, t, n);
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
var p = t(526531);
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
function R(e) {
    return b(e + 1) - b(e);
}
function $(e, a) {
    if ((a >= 6 && !f(e) && a++, 4 === a || 7 === a || 9 === a || 11 === a || 13 === a)) return 29;
    let t = (function (e) {
        let a = R(e);
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
class w {
    fromJulianDay(e) {
        let a = e - 347997,
            t = Math.floor((((25920 * a) / g) * 19 + 234) / 235) + 1,
            n = b(t),
            r = Math.floor(a - n);
        for (; r < 1; ) r = Math.floor(a - (n = b(--t)));
        let l = 1,
            o = 0;
        for (; o < r; ) (o += $(t, l)), l++;
        let u = r - (o -= $(t, --l));
        return new (0, i.ng)(this, t, l, u);
    }
    toJulianDay(e) {
        let a = b(e.year);
        for (let t = 1; t < e.month; t++) a += $(e.year, t);
        return a + e.day + 347997;
    }
    getDaysInMonth(e) {
        return $(e.year, e.month);
    }
    getMonthsInYear(e) {
        return f(e.year) ? 13 : 12;
    }
    getDaysInYear(e) {
        return R(e.year);
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
class P extends l.FG {
    fromJulianDay(e) {
        let a,
            t,
            n,
            r = super.fromJulianDay(e),
            o = r.year - 78,
            u = e - (0, l.rG)(r.era, r.year, 1, 1);
        if (
            (u < 80
                ? (o--, (u += (a = (0, l.U_)(r.year - 1) ? 31 : 30) + 155 + 90 + 10))
                : ((a = (0, l.U_)(r.year) ? 31 : 30), (u -= 80)),
            u < a)
        )
            (t = 1), (n = u + 1);
        else {
            let e = u - a;
            e < 155
                ? ((t = Math.floor(e / 31) + 2), (n = (e % 31) + 1))
                : ((e -= 155), (t = Math.floor(e / 30) + 7), (n = (e % 30) + 1));
        }
        return new (0, i.ng)(this, o, t, n);
    }
    toJulianDay(e) {
        let a,
            t,
            n = e.year + 78,
            [r, i] = (0, l.f5)(n);
        return ((0, l.U_)(i) ? ((a = 31), (t = (0, l.rG)(r, i, 3, 21))) : ((a = 30), (t = (0, l.rG)(r, i, 3, 22))),
        1 === e.month)
            ? t + e.day - 1
            : ((t += a + 31 * Math.min(e.month - 2, 5)), e.month >= 8 && (t += (e.month - 7) * 30), (t += e.day - 1));
    }
    getDaysInMonth(e) {
        return (1 === e.month && (0, l.U_)(e.year + 78)) || (e.month >= 2 && e.month <= 6) ? 31 : 30;
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
function C(e, a, t, n) {
    return n + Math.ceil(29.5 * (t - 1)) + (a - 1) * 354 + Math.floor((3 + 11 * a) / 30) + e - 1;
}
function k(e, a, t) {
    let n = Math.floor((30 * (t - a) + 10646) / 10631),
        r = Math.min(12, Math.ceil((t - (29 + C(a, n, 1, 1))) / 29.5) + 1),
        l = t - C(a, n, r, 1) + 1;
    return new (0, i.ng)(e, n, r, l);
}
function x(e) {
    return (14 + 11 * e) % 30 < 11;
}
class E {
    fromJulianDay(e) {
        return k(this, 1948440, e);
    }
    toJulianDay(e) {
        return C(1948440, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        let a = 29 + (e.month % 2);
        return 12 === e.month && x(e.year) && a++, a;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(e) {
        return x(e.year) ? 355 : 354;
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
class S extends E {
    fromJulianDay(e) {
        return k(this, 1948439, e);
    }
    toJulianDay(e) {
        return C(1948439, e.year, e.month, e.day);
    }
    constructor(...e) {
        super(...e), (this.identifier = "islamic-tbla");
    }
}
function V(e) {
    return 460322 + r[e - 1300];
}
function F(e, a) {
    return (n[e - 1300] & (1 << (11 - (a - 1)))) == 0 ? 29 : 30;
}
function B(e, a) {
    let t = V(e);
    for (let n = 1; n < a; n++) t += F(e, n);
    return t;
}
function M(e) {
    return r[e + 1 - 1300] - r[e - 1300];
}
class I extends E {
    fromJulianDay(e) {
        let a = e - 1948440,
            t = V(1300),
            n = V(1600);
        if (a < t || a > n) return super.fromJulianDay(e);
        {
            let e = 1299,
                t = 1,
                n = 1;
            for (; n > 0; ) {
                n = a - V(++e) + 1;
                let r = M(e);
                if (n === r) {
                    t = 12;
                    break;
                }
                if (n < r) {
                    let a = F(e, t);
                    for (t = 1; n > a; ) (n -= a), (a = F(e, ++t));
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
    constructor() {
        if (
            (super(),
            (this.identifier = "islamic-umalqura"),
            n ||
                (n = new Uint16Array(
                    Uint8Array.from(
                        atob(
                            "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=",
                        ),
                        (e) => e.charCodeAt(0),
                    ).buffer,
                )),
            !r)
        ) {
            r = new Uint32Array(301);
            let e = 0;
            for (let a = 1300; a <= 1600; a++) {
                r[a - 1300] = e;
                for (let t = 1; t <= 12; t++) e += F(a, t);
            }
        }
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
        ([a, t, n]) =>
            !!(e.year < a) || (e.year === a && !!(e.month < t)) || (e.year === a && e.month === t && !!(e.day < n)),
    );
    return -1 === a ? A.length - 1 : 0 === a ? 0 : a - 1;
}
function z(e) {
    let a = O[N.indexOf(e.era)];
    if (!a) throw Error("Unknown era: " + e.era);
    return new (0, i.ng)(e.year + a, e.month, e.day);
}
class U extends l.FG {
    fromJulianDay(e) {
        let a = super.fromJulianDay(e),
            t = Z(a);
        return new (0, i.ng)(this, N[t], a.year - O[t], a.month, a.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(z(e));
    }
    balanceDate(e) {
        let a = z(e),
            t = Z(a);
        N[t] !== e.era && ((e.era = N[t]), (e.year = a.year - O[t])), this.constrainDate(e);
    }
    constrainDate(e) {
        let a = N.indexOf(e.era),
            t = T[a];
        if (null != t) {
            let [n, r, i] = t,
                l = n - O[a];
            (e.year = Math.max(1, Math.min(l, e.year))),
                e.year === l && ((e.month = Math.min(r, e.month)), e.month === r && (e.day = Math.min(i, e.day)));
        }
        if (1 === e.year && a >= 0) {
            let [, t, n] = A[a];
            (e.month = Math.max(t, e.month)), e.month === t && (e.day = Math.max(n, e.day));
        }
    }
    getEras() {
        return N;
    }
    getYearsInEra(e) {
        let a = N.indexOf(e.era),
            t = A[a],
            n = A[a + 1];
        if (null == n) return 9999 - t[0] + 1;
        let r = n[0] - t[0];
        return (e.month < n[1] || (e.month === n[1] && e.day < n[2])) && r++, r;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(z(e));
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
            n = a - (365 * (t - 1) + Math.floor((8 * t + 21) / 33)),
            r = n < 216 ? Math.floor(n / 31) : Math.floor((n - 6) / 30),
            l = n - K[r] + 1;
        return new (0, i.ng)(this, t, r + 1, l);
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
function W(e) {
    let a = e - 1911;
    return a > 0 ? ["minguo", a] : ["before_minguo", 1 - a];
}
class Y extends l.FG {
    fromJulianDay(e) {
        let a = super.fromJulianDay(e),
            [t, n] = W((0, l.LA)(a.era, a.year));
        return new (0, i.ng)(this, t, n, a.month, a.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(G(e));
    }
    getEras() {
        return ["before_minguo", "minguo"];
    }
    balanceDate(e) {
        let [a, t] = W(J(e));
        (e.era = a), (e.year = t);
    }
    isInverseEra(e) {
        return "before_minguo" === e.era;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(G(e));
    }
    getYearsInEra(e) {
        return "before_minguo" === e.era ? 9999 : 8088;
    }
    constructor(...e) {
        super(...e), (this.identifier = "roc");
    }
}
function G(e) {
    let [a, t] = (0, l.f5)(J(e));
    return new (0, i.ng)(a, t, e.month, e.day);
}
function H(e) {
    switch (e) {
        case "buddhist":
            return new o();
        case "ethiopic":
            return new h();
        case "ethioaa":
            return new D();
        case "coptic":
            return new y();
        case "hebrew":
            return new w();
        case "indian":
            return new P();
        case "islamic-civil":
            return new E();
        case "islamic-tbla":
            return new S();
        case "islamic-umalqura":
            return new I();
        case "japanese":
            return new U();
        case "persian":
            return new L();
        case "roc":
            return new Y();
        default:
            return new (0, l.FG)();
    }
}
