n.d(t, {
    J2: () => u,
    V3: () => c,
    ZB: () => d,
    oU: () => _
}),
    n(388685);
var r = n(688619),
    i = n.n(r),
    a = n(392711),
    o = n(866442),
    s = n(780384);
n(564334);
var l = n(981631);
function c(e) {
    return null == e ? null : (0, o.Bd)(e) > 0.5 ? l.BRd.DARK : l.BRd.LIGHT;
}
function u(e, t, n) {
    let r = n / 100,
        i = 1 - r;
    return [Math.round(e[0] * i + t[0] * r), Math.round(e[1] * i + t[1] * r), Math.round(e[2] * i + t[2] * r)];
}
let d = (0, a.memoize)(
        (e) => {
            let t = (0, s.Qg)(e, {
                base: '#ffffff',
                contrastRatio: s.S3.HighContrastText
            });
            return (0, o._i)(t);
        },
        (e) => e
    ),
    _ = (0, a.memoize)(
        (e, t, n) => {
            let r = (null != n ? n : c(e)) !== l.BRd.LIGHT,
                o = 0.5,
                s = 0.1,
                u = 0.8,
                d = i().mix(i()(e), i()(t), o, 'lab'),
                _ = Math.round(100 * d.get('hsl.l')) / 100,
                f = r ? (0, a.clamp)(_, 0, s) : (0, a.clamp)(_, u, 1);
            return i()(d).set('hsl.l', f).num();
        },
        (e, t, n) => ''.concat(e, '-').concat(t, '-').concat(n)
    );
