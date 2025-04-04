n.d(t, {
    K3: () => p,
    Lq: () => f,
    O0: () => h,
    Sl: () => _
}),
    n(757143),
    n(301563);
var r = n(192379),
    i = n(688619),
    o = n.n(i),
    a = n(691324),
    s = n(399606),
    l = n(900089),
    c = n(410030),
    u = n(607070);
function d(e) {
    return e.toUpperCase().replace(/-/g, '_');
}
function f(e) {
    return (0, l.Fw)(d(e));
}
function _(e) {
    return null != e ? a.b[e] : null;
}
function p(e) {
    let t = (0, s.e7)([u.Z], () => u.Z.saturation);
    return r.useMemo(() => {
        if (null == e) return null;
        if ('currentColor' === e || e.startsWith('var(')) return e;
        let n = o()(e);
        return n.set('hsl.s', n.get('hsl.s') * t).hex();
    }, [e, t]);
}
function h(e, t) {
    let n = (0, c.Fg)(),
        i = (0, s.e7)([u.Z], () => u.Z.saturation);
    return r.useMemo(
        () =>
            null == e
                ? null
                : {
                      hex: (0, l.uJ)(d(e), {
                          theme: null != t ? t : n,
                          saturation: i
                      })
                  },
        [e, i, n, t]
    );
}
n(981631);
