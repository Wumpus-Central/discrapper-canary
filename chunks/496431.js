n.d(t, { A: () => l });
var i = n(582128),
    r = n(265431),
    a = n(58703),
    s = n(396583);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
        n = arguments.length > 2 ? arguments[2] : void 0,
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = (0, a.Tf)(Date.now(), e),
        d = (0, r.A)(),
        c = (0, i.useCallback)(() => {
            let t = (0, a.Tf)(Date.now(), e);
            (0 === t.days && 0 === t.hours && 0 === t.minutes && 0 === t.seconds) || l || (d(), n?.());
        }, [e, l, d, n]);
    return (0, s.A)(c, l ? null : t), o;
}
