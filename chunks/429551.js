n.d(t, {
    Z: () => l,
    m: () => o
}),
    n(47120);
var i = n(192379),
    r = n(846519),
    a = n(70956);
let s = (e) => String(e).padStart(2, '0'),
    o = (e) => {
        let t = Math.floor(e) % a.Z.Seconds.MINUTE,
            n = Math.floor(e / a.Z.Seconds.MINUTE) % a.Z.Seconds.MINUTE,
            i = Math.floor(e / a.Z.Seconds.HOUR);
        return 0 === i ? ''.concat(s(n), ':').concat(s(t)) : ''.concat(s(i), ':').concat(s(n), ':').concat(s(t));
    };
function l(e) {
    let { start: t, end: n } = e,
        [s] = (0, i.useState)(new r.Xp()),
        [o, l] = (0, i.useState)(Date.now());
    (0, i.useEffect)(() => (s.start(a.Z.Millis.HALF_SECOND, () => l(Date.now())), () => s.stop()), [s]);
    let u = (n - t) / a.Z.Millis.SECOND,
        c = Math.max(Math.min((o - t) / a.Z.Millis.SECOND, u), 0);
    return {
        elapsed: c,
        duration: u,
        percentage: Math.max(Math.min(c / u, 1), 0)
    };
}
