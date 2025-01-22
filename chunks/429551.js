r.d(n, {
    Z: function () {
        return c;
    },
    m: function () {
        return u;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(846519),
    s = r(70956);
let l = (e) => String(e).padStart(2, '0'),
    u = (e) => {
        let n = Math.floor(e) % s.Z.Seconds.MINUTE,
            r = Math.floor(e / s.Z.Seconds.MINUTE) % s.Z.Seconds.MINUTE,
            i = Math.floor(e / s.Z.Seconds.HOUR);
        return 0 === i ? ''.concat(l(r), ':').concat(l(n)) : ''.concat(l(i), ':').concat(l(r), ':').concat(l(n));
    };
function c(e) {
    let { start: n, end: r } = e,
        [i] = (0, a.useState)(new o.Xp()),
        [l, u] = (0, a.useState)(Date.now());
    (0, a.useEffect)(() => (i.start(s.Z.Millis.HALF_SECOND, () => u(Date.now())), () => i.stop()), [i]);
    let c = (r - n) / s.Z.Millis.SECOND,
        d = Math.max(Math.min((l - n) / s.Z.Millis.SECOND, c), 0);
    return {
        elapsed: d,
        duration: c,
        percentage: Math.max(Math.min(d / c, 1), 0)
    };
}
