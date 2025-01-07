r.d(t, {
    CD: function () {
        return h;
    },
    w6: function () {
        return d;
    }
});
var a = r(665352),
    n = r(37484),
    s = r(181568),
    o = r(830927),
    i = r(661105),
    c = r(262281),
    u = r(605700),
    l = r(811534),
    f = r(798192),
    b = r(656653);
function h(e, t, r = 0.5, a = {}) {
    return ([e, t] = [(0, s.Z)(e), (0, s.Z)(t)]), 'object' === (0, n.dt)(r) && ([r, a] = [0.5, r]), d(e, t, a)(r);
}
function d(e, t, r = {}) {
    if (
        (function (e) {
            return 'function' === (0, n.dt)(e) && !!e.rangeArgs;
        })(e)
    ) {
        let [r, a] = [e, t];
        return d(...r.rangeArgs.colors, {
            ...r.rangeArgs.options,
            ...a
        });
    }
    let { space: h, outputSpace: p, progression: m, premultiplied: g } = r;
    (e = (0, s.Z)(e)), (t = (0, s.Z)(t)), (e = (0, o.Z)(e)), (t = (0, o.Z)(t));
    let y = {
        colors: [e, t],
        options: r
    };
    if (((h = h ? a.Z.get(h) : a.Z.registry[f.Z.interpolationSpace] || e.space), (p = p ? a.Z.get(p) : h), (e = (0, i.Z)(e, h)), (t = (0, i.Z)(t, h)), (e = (0, c.Z)(e)), (t = (0, c.Z)(t)), h.coords.h && 'angle' === h.coords.h.type)) {
        let a = (r.hue = r.hue || 'shorter'),
            n = [h, 'h'],
            [s, o] = [(0, u.Z)(e, n), (0, u.Z)(t, n)];
        isNaN(s) && !isNaN(o) ? (s = o) : isNaN(o) && !isNaN(s) && (o = s), ([s, o] = b.z(a, [s, o])), (0, l.Z)(e, n, s), (0, l.Z)(t, n, o);
    }
    return (
        g && ((e.coords = e.coords.map((t) => t * e.alpha)), (t.coords = t.coords.map((e) => e * t.alpha))),
        Object.assign(
            (r) => {
                r = m ? m(r) : r;
                let a = e.coords.map((e, a) => {
                        let s = t.coords[a];
                        return (0, n.sX)(e, s, r);
                    }),
                    s = (0, n.sX)(e.alpha, t.alpha, r),
                    o = {
                        space: h,
                        coords: a,
                        alpha: s
                    };
                return g && (o.coords = o.coords.map((e) => e / s)), p !== h && (o = (0, i.Z)(o, p)), o;
            },
            { rangeArgs: y }
        )
    );
}
f.Z.interpolationSpace = 'lab';
