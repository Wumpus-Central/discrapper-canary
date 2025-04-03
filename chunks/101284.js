a.d(e, {
    Z1: () => o,
    ph: () => _,
    yW: () => n
});
var r = a(899517);
function n() {
    return Date.now() / 1000;
}
let _ = (function () {
        let { performance: t } = r.n;
        if (!t || !t.now) return n;
        let e = Date.now() - t.now(),
            a = void 0 == t.timeOrigin ? e : t.timeOrigin;
        return () => (a + t.now()) / 1000;
    })(),
    o = (() => {
        let { performance: t } = r.n;
        if (!t || !t.now) return;
        let e = t.now(),
            a = Date.now(),
            n = t.timeOrigin ? Math.abs(t.timeOrigin + e - a) : 3600000,
            _ = t.timing && t.timing.navigationStart,
            o = 'number' == typeof _ ? Math.abs(_ + e - a) : 3600000;
        if (n < 3600000 || o < 3600000)
            if (n <= o) return t.timeOrigin;
            else return _;
        return a;
    })();
