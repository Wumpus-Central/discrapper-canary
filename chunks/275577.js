t.d(a, { o: () => c });
var u = t(720479),
    n = t(274738);
let r = [
        [1868, 9, 8],
        [1912, 7, 30],
        [1926, 12, 25],
        [1989, 1, 8],
        [2019, 5, 1],
    ],
    i = [
        [1912, 7, 29],
        [1926, 12, 24],
        [1989, 1, 7],
        [2019, 4, 30],
    ],
    o = [1867, 1911, 1925, 1988, 2018],
    l = ["meiji", "taisho", "showa", "heisei", "reiwa"];
function s(e) {
    let a = r.findIndex(
        ([a, t, u]) =>
            !!(e.year < a) || (e.year === a && !!(e.month < t)) || (e.year === a && e.month === t && !!(e.day < u)),
    );
    return -1 === a ? r.length - 1 : 0 === a ? 0 : a - 1;
}
function d(e) {
    let a = o[l.indexOf(e.era)];
    if (!a) throw Error("Unknown era: " + e.era);
    return new (0, u.aw)(e.year + a, e.month, e.day);
}
class c extends n.IQ {
    fromJulianDay(e) {
        let a = super.fromJulianDay(e),
            t = s(a);
        return new (0, u.aw)(this, l[t], a.year - o[t], a.month, a.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(d(e));
    }
    balanceDate(e) {
        let a = d(e),
            t = s(a);
        l[t] !== e.era && ((e.era = l[t]), (e.year = a.year - o[t])), this.constrainDate(e);
    }
    constrainDate(e) {
        let a = l.indexOf(e.era),
            t = i[a];
        if (null != t) {
            let [u, n, r] = t,
                i = u - o[a];
            (e.year = Math.max(1, Math.min(i, e.year))),
                e.year === i && ((e.month = Math.min(n, e.month)), e.month === n && (e.day = Math.min(r, e.day)));
        }
        if (1 === e.year && a >= 0) {
            let [, t, u] = r[a];
            (e.month = Math.max(t, e.month)), e.month === t && (e.day = Math.max(u, e.day));
        }
    }
    getEras() {
        return l;
    }
    getYearsInEra(e) {
        let a = l.indexOf(e.era),
            t = r[a],
            u = r[a + 1];
        if (null == u) return 9999 - t[0] + 1;
        let n = u[0] - t[0];
        return (e.month < u[1] || (e.month === u[1] && e.day < u[2])) && n++, n;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(d(e));
    }
    getMinimumMonthInYear(e) {
        let a = m(e);
        return a ? a[1] : 1;
    }
    getMinimumDayInMonth(e) {
        let a = m(e);
        return a && e.month === a[1] ? a[2] : 1;
    }
    constructor(...e) {
        super(...e), (this.identifier = "japanese");
    }
}
function m(e) {
    if (1 === e.year) return r[l.indexOf(e.era)];
}
