n.d(t, {
    K3: () => p,
    Lq: () => f,
    O0: () => h,
    Sl: () => _
}),
    n(757143);
var i = n(192379),
    r = n(688619),
    a = n.n(r),
    s = n(691324),
    o = n(399606),
    l = n(692547),
    u = n(410030),
    c = n(607070);
function d(e) {
    return e.toUpperCase().replace(/-/g, '_');
}
function f(e) {
    return l.Z.unsafe_rawColors[d(e)].css;
}
function _(e) {
    return null != e ? s.b[e] : null;
}
function p(e) {
    let t = (0, o.e7)([c.Z], () => c.Z.saturation);
    return i.useMemo(() => {
        if (null == e) return null;
        if ('currentColor' === e || e.startsWith('var(')) return e;
        let n = a()(e);
        return n.set('hsl.s', n.get('hsl.s') * t).hex();
    }, [e, t]);
}
function h(e, t) {
    let n = (0, u.Fg)(),
        r = (0, o.e7)([c.Z], () => c.Z.saturation);
    return i.useMemo(
        () =>
            null == e
                ? null
                : {
                      hex: l.Z.colors[d(e)]
                          .resolve({
                              theme: null != t ? t : n,
                              saturation: r
                          })
                          .hex()
                  },
        [e, r, n, t]
    );
}
n(981631);
