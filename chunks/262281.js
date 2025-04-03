r.d(t, { Z: () => y });
var a = r(37484),
    n = r(665352),
    s = r(798192),
    o = r(25412),
    i = r(433135),
    c = r(103671),
    l = r(661105),
    u = r(605700),
    f = r(762399),
    b = r(811534),
    d = r(830927),
    h = r(181568),
    p = r(613046),
    m = r(629990);
let g = {
    hct: {
        method: 'hct.c',
        jnd: 2,
        deltaEMethod: 'hct',
        blackWhiteClamp: {}
    },
    'hct-tonal': {
        method: 'hct.c',
        jnd: 0,
        deltaEMethod: 'hct',
        blackWhiteClamp: {
            channel: 'hct.t',
            min: 0,
            max: 100
        }
    }
};
function y(e, { method: t = s.Z.gamut_mapping, space: r, deltaEMethod: f = '', jnd: Z = 2, blackWhiteClamp: w = {} } = {}) {
    let M;
    if (((e = (0, h.Z)(e)), a.HD(arguments[1]) ? (r = arguments[1]) : r || (r = e.space), (r = n.Z.get(r)), (0, c.Z)(e, r, { epsilon: 0 }))) return e;
    if ('css' === t)
        M = (function (e, { space: t } = {}) {
            (e = (0, h.Z)(e)), t || (t = e.space), (t = n.Z.get(t));
            let r = n.Z.get('oklch');
            if (t.isUnbounded) return (0, l.Z)(e, t);
            let s = (0, l.Z)(e, r),
                o = s.coords[0];
            if (o >= 1) {
                let r = (0, l.Z)(v.WHITE, t);
                return (r.alpha = e.alpha), (0, l.Z)(r, t);
            }
            if (o <= 0) {
                let r = (0, l.Z)(v.BLACK, t);
                return (r.alpha = e.alpha), (0, l.Z)(r, t);
            }
            if ((0, c.Z)(s, t, { epsilon: 0 })) return (0, l.Z)(s, t);
            function u(e) {
                let r = (0, l.Z)(e, t),
                    n = Object.values(t.coords);
                return (
                    (r.coords = r.coords.map((e, t) => {
                        if ('range' in n[t]) {
                            let [r, s] = n[t].range;
                            return a.uZ(r, e, s);
                        }
                        return e;
                    })),
                    r
                );
            }
            let f = 0,
                b = s.coords[1],
                p = !0,
                m = (0, d.Z)(s),
                g = u(m),
                y = (0, i.Z)(g, m);
            if (y < 0.02) return g;
            for (; b - f > 0.0001; ) {
                let e = (f + b) / 2;
                if (((m.coords[1] = e), p && (0, c.Z)(m, t, { epsilon: 0 }))) f = e;
                else if (((g = u(m)), (y = (0, i.Z)(g, m)) < 0.02))
                    if (0.02 - y < 0.0001) break;
                    else (p = !1), (f = e);
                else b = e;
            }
            return g;
        })(e, { space: r });
    else {
        if ('clip' === t || (0, c.Z)(e, r)) M = (0, l.Z)(e, r);
        else {
            Object.prototype.hasOwnProperty.call(g, t) && ({ method: t, jnd: Z, deltaEMethod: f, blackWhiteClamp: w } = g[t]);
            let s = o.Z;
            if ('' !== f) {
                for (let e in p.ZP)
                    if ('deltae' + f.toLowerCase() === e.toLowerCase()) {
                        s = p.ZP[e];
                        break;
                    }
            }
            let i = y((0, l.Z)(e, r), {
                method: 'clip',
                space: r
            });
            if (s(e, i) > Z) {
                if (3 === Object.keys(w).length) {
                    let t = n.Z.resolveCoord(w.channel),
                        r = (0, u.Z)((0, l.Z)(e, t.space), t.id);
                    if ((a.Wi(r) && (r = 0), r >= w.max))
                        return (0, l.Z)(
                            {
                                space: 'xyz-d65',
                                coords: m.mh.D65
                            },
                            e.space
                        );
                    if (r <= w.min)
                        return (0, l.Z)(
                            {
                                space: 'xyz-d65',
                                coords: [0, 0, 0]
                            },
                            e.space
                        );
                }
                let o = n.Z.resolveCoord(t),
                    i = o.space,
                    c = o.id,
                    f = (0, l.Z)(e, i);
                f.coords.forEach((e, t) => {
                    a.Wi(e) && (f.coords[t] = 0);
                });
                let h = (o.range || o.refRange)[0],
                    p = (function (e) {
                        let t = e ? Math.floor(Math.log10(Math.abs(e))) : 0;
                        return Math.max(parseFloat(`1e${t - 2}`), 0.000001);
                    })(Z),
                    g = h,
                    v = (0, u.Z)(f, c);
                for (; v - g > p; ) {
                    let e = (0, d.Z)(f);
                    s(
                        f,
                        (e = y(e, {
                            space: r,
                            method: 'clip'
                        }))
                    ) -
                        Z <
                    p
                        ? (g = (0, u.Z)(f, c))
                        : (v = (0, u.Z)(f, c)),
                        (0, b.Z)(f, c, (g + v) / 2);
                }
                M = (0, l.Z)(f, r);
            } else M = i;
        }
        if ('clip' === t || !(0, c.Z)(M, r, { epsilon: 0 })) {
            let e = Object.values(r.coords).map((e) => e.range || []);
            M.coords = M.coords.map((t, r) => {
                let [a, n] = e[r];
                return void 0 !== a && (t = Math.max(a, t)), void 0 !== n && (t = Math.min(t, n)), t;
            });
        }
    }
    return r !== e.space && (M = (0, l.Z)(M, e.space)), (e.coords = M.coords), e;
}
y.returns = 'color';
let v = {
    WHITE: {
        space: f.Z,
        coords: [1, 0, 0]
    },
    BLACK: {
        space: f.Z,
        coords: [0, 0, 0]
    }
};
