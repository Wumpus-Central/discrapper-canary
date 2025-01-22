r.d(n, {
    t: function () {
        return l;
    }
});
var i = r(927521),
    a = r(165352);
let o = 78,
    s = 80;
class l extends a.IQ {
    fromJulianDay(e) {
        let n,
            r,
            l,
            u = super.fromJulianDay(e),
            c = u.year - o,
            d = e - (0, a.g_)(u.era, u.year, 1, 1);
        if ((d < s ? (c--, (d += (n = (0, a.Eg)(u.year - 1) ? 31 : 30) + 155 + 90 + 10)) : ((n = (0, a.Eg)(u.year) ? 31 : 30), (d -= s)), d < n)) (r = 1), (l = d + 1);
        else {
            let e = d - n;
            e < 155 ? ((r = Math.floor(e / 31) + 2), (l = (e % 31) + 1)) : ((e -= 155), (r = Math.floor(e / 30) + 7), (l = (e % 30) + 1));
        }
        return new i.aw(this, c, r, l);
    }
    toJulianDay(e) {
        let n,
            r,
            i = e.year + o,
            [s, l] = (0, a.JD)(i);
        return ((0, a.Eg)(l) ? ((n = 31), (r = (0, a.g_)(s, l, 3, 21))) : ((n = 30), (r = (0, a.g_)(s, l, 3, 22))), 1 === e.month) ? r + e.day - 1 : ((r += n + 31 * Math.min(e.month - 2, 5)), e.month >= 8 && (r += (e.month - 7) * 30), (r += e.day - 1));
    }
    getDaysInMonth(e) {
        return (1 === e.month && (0, a.Eg)(e.year + o)) || (e.month >= 2 && e.month <= 6) ? 31 : 30;
    }
    getYearsInEra() {
        return 9919;
    }
    getEras() {
        return ['saka'];
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = 'indian');
    }
}
