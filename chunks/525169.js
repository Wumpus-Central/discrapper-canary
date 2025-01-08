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
    o = r(181568),
    s = r(830927),
    i = r(661105),
    c = r(262281),
    u = r(605700),
    l = r(811534),
    f = r(798192),
    b = r(656653);
function h(e, t, r = 0.5, a = {}) {
    return ([e, t] = [(0, o.Z)(e), (0, o.Z)(t)]), 'object' === (0, n.dt)(r) && ([r, a] = [0.5, r]), d(e, t, a)(r);
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
    (e = (0, o.Z)(e)), (t = (0, o.Z)(t)), (e = (0, s.Z)(e)), (t = (0, s.Z)(t));
    let y = {
        colors: [e, t],
        options: r
    };
    if (((h = h ? a.Z.get(h) : a.Z.registry[f.Z.interpolationSpace] || e.space), (p = p ? a.Z.get(p) : h), (e = (0, i.Z)(e, h)), (t = (0, i.Z)(t, h)), (e = (0, c.Z)(e)), (t = (0, c.Z)(t)), h.coords.h && 'angle' === h.coords.h.type)) {
        let a = (r.hue = r.hue || 'shorter'),
            n = [h, 'h'],
            [o, s] = [(0, u.Z)(e, n), (0, u.Z)(t, n)];
        isNaN(o) && !isNaN(s) ? (o = s) : isNaN(s) && !isNaN(o) && (s = o), ([o, s] = b.z(a, [o, s])), (0, l.Z)(e, n, o), (0, l.Z)(t, n, s);
    }
    return (
        g && ((e.coords = e.coords.map((t) => t * e.alpha)), (t.coords = t.coords.map((e) => e * t.alpha))),
        Object.assign(
            (r) => {
                r = m ? m(r) : r;
                let a = e.coords.map((e, a) => {
                        let o = t.coords[a];
                        return (0, n.sX)(e, o, r);
                    }),
                    o = (0, n.sX)(e.alpha, t.alpha, r),
                    s = {
                        space: h,
                        coords: a,
                        alpha: o
                    };
                return g && (s.coords = s.coords.map((e) => e / o)), p !== h && (s = (0, i.Z)(s, p)), s;
            },
            { rangeArgs: y }
        )
    );
}
f.Z.interpolationSpace = 'lab';
