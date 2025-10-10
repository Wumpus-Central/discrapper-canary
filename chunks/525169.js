r.d(t, {
    CD: () => d,
    w6: () => h,
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
function d(e, t, r = 0.5, a = {}) {
    return ([e, t] = [(0, o.Z)(e), (0, o.Z)(t)]), "object" === (0, n.dt)(r) && ([r, a] = [0.5, r]), h(e, t, a)(r);
}
function h(e, t, r = {}) {
    var d;
    if (((d = e), "function" === (0, n.dt)(d) && d.rangeArgs)) {
        let [r, a] = [e, t];
        return h(...r.rangeArgs.colors, {
            ...r.rangeArgs.options,
            ...a,
        });
    }
    let { space: p, outputSpace: m, progression: g, premultiplied: y } = r;
    (e = (0, o.Z)(e)), (t = (0, o.Z)(t)), (e = (0, s.Z)(e)), (t = (0, s.Z)(t));
    let v = {
        colors: [e, t],
        options: r,
    };
    if (
        ((p = p ? a.Z.get(p) : a.Z.registry[f.Z.interpolationSpace] || e.space),
        (m = m ? a.Z.get(m) : p),
        (e = (0, i.Z)(e, p)),
        (t = (0, i.Z)(t, p)),
        (e = (0, c.Z)(e)),
        (t = (0, c.Z)(t)),
        p.coords.h && "angle" === p.coords.h.type)
    ) {
        let a = (r.hue = r.hue || "shorter"),
            n = [p, "h"],
            [o, s] = [(0, u.Z)(e, n), (0, u.Z)(t, n)];
        isNaN(o) && !isNaN(s) ? (o = s) : isNaN(s) && !isNaN(o) && (s = o),
            ([o, s] = b.z(a, [o, s])),
            (0, l.Z)(e, n, o),
            (0, l.Z)(t, n, s);
    }
    return (
        y && ((e.coords = e.coords.map((t) => t * e.alpha)), (t.coords = t.coords.map((e) => e * t.alpha))),
        Object.assign(
            (r) => {
                r = g ? g(r) : r;
                let a = e.coords.map((e, a) => {
                        let o = t.coords[a];
                        return (0, n.sX)(e, o, r);
                    }),
                    o = (0, n.sX)(e.alpha, t.alpha, r),
                    s = {
                        space: p,
                        coords: a,
                        alpha: o,
                    };
                return y && (s.coords = s.coords.map((e) => e / o)), m !== p && (s = (0, i.Z)(s, m)), s;
            },
            { rangeArgs: v },
        )
    );
}
f.Z.interpolationSpace = "lab";
