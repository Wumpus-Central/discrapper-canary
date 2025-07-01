(n.d(t, {
    K3: () => _,
    Lq: () => d,
    Sl: () => f
}),
    n(704826),
    n(35282));
var r = n(73800),
    i = n(688619),
    a = n.n(i),
    o = n(691324),
    s = n(399606),
    l = n(900089),
    c = n(607070);
function u(e) {
    return e.toUpperCase().replace(/-/g, '_');
}
function d(e) {
    return (0, l.Fw)(u(e));
}
function f(e) {
    return null != e ? o.b[e] : null;
}
function _(e) {
    let t = (0, s.e7)([c.Z], () => c.Z.saturation);
    return r.useMemo(() => {
        if (null == e) return null;
        if ('currentColor' === e || e.startsWith('var(')) return e;
        let n = a()(e);
        return n.set('hsl.s', n.get('hsl.s') * t).hex();
    }, [e, t]);
}
n(981631);
