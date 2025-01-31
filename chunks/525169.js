r.d(t, {
    CD: () => d,
    w6: () => h
});
var a = r(665352),
    n = r(37484),
    s = r(181568),
    o = r(830927),
    i = r(661105),
    c = r(262281),
    l = r(605700),
    u = r(811534),
    f = r(798192),
    b = r(656653);
function d(e, t, r = 0.5, a = {}) {
    return ([e, t] = [(0, s.Z)(e), (0, s.Z)(t)]), 'object' === (0, n.dt)(r) && ([r, a] = [0.5, r]), h(e, t, a)(r);
}
function h(e, t, r = {}) {
    var d;
    if (((d = e), 'function' === (0, n.dt)(d) && d.rangeArgs)) {
        let [r, a] = [e, t];
        return h(...r.rangeArgs.colors, {
            ...r.rangeArgs.options,
            ...a
        });
    }
    let { space: p, outputSpace: m, progression: g, premultiplied: y } = r;
    (e = (0, s.Z)(e)), (t = (0, s.Z)(t)), (e = (0, o.Z)(e)), (t = (0, o.Z)(t));
    let v = {
        colors: [e, t],
        options: r
    };
    if (((p = p ? a.Z.get(p) : a.Z.registry[f.Z.interpolationSpace] || e.space), (m = m ? a.Z.get(m) : p), (e = (0, i.Z)(e, p)), (t = (0, i.Z)(t, p)), (e = (0, c.Z)(e)), (t = (0, c.Z)(t)), p.coords.h && 'angle' === p.coords.h.type)) {
        let a = (r.hue = r.hue || 'shorter'),
            n = [p, 'h'],
            [s, o] = [(0, l.Z)(e, n), (0, l.Z)(t, n)];
        isNaN(s) && !isNaN(o) ? (s = o) : isNaN(o) && !isNaN(s) && (o = s), ([s, o] = b.z(a, [s, o])), (0, u.Z)(e, n, s), (0, u.Z)(t, n, o);
    }
    return (
        y && ((e.coords = e.coords.map((t) => t * e.alpha)), (t.coords = t.coords.map((e) => e * t.alpha))),
        Object.assign(
            (r) => {
                r = g ? g(r) : r;
                let a = e.coords.map((e, a) => {
                        let s = t.coords[a];
                        return (0, n.sX)(e, s, r);
                    }),
                    s = (0, n.sX)(e.alpha, t.alpha, r),
                    o = {
                        space: p,
                        coords: a,
                        alpha: s
                    };
                return y && (o.coords = o.coords.map((e) => e / s)), m !== p && (o = (0, i.Z)(o, m)), o;
            },
            { rangeArgs: v }
        )
    );
}
f.Z.interpolationSpace = 'lab';
