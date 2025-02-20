r.d(t, {
    NZ: () => Z,
    S5: () => k,
    Zk: () => M
});
var a = r(665352),
    n = r(37484),
    s = r(99978),
    o = r(656653),
    i = r(856308);
let c = r(629990).mh.D65,
    l = 2 * Math.PI,
    u = [
        [0.401288, 0.650173, -0.051461],
        [-0.250268, 1.204414, 0.045854],
        [-0.002079, 0.048952, 0.953127]
    ],
    f = [
        [1.8620678550872327, -1.0112546305316843, 0.14918677544445175],
        [0.38752654323613717, 0.6214474419314753, -0.008973985167612518],
        [-0.015841498849333856, -0.03412293802851557, 1.0499644368778496]
    ],
    b = [
        [460, 451, 288],
        [460, -891, -261],
        [460, -220, -6300]
    ],
    d = {
        dark: [0.8, 0.525, 0.8],
        dim: [0.9, 0.59, 0.9],
        average: [1, 0.69, 1]
    },
    h = [20.14, 90, 164.25, 237.53, 380.14],
    p = [0.8, 0.7, 1, 1.2, 0.8],
    m = [0, 100, 200, 300, 400],
    g = 180 / Math.PI,
    y = Math.PI / 180;
function v(e, t) {
    return e.map((e) => {
        let r = (0, n.$7)(t * Math.abs(e) * 0.01, 0.42);
        return (400 * (0, n.g6)(r, e)) / (r + 27.13);
    });
}
function Z(e, t, r, a, o) {
    let i = {};
    (i.discounting = o), (i.refWhite = e), (i.surround = a);
    let c = e.map((e) => 100 * e);
    (i.la = t), (i.yb = r);
    let l = c[1],
        f = (0, s.Z)(u, c),
        b = (a = d[i.surround])[0];
    (i.c = a[1]), (i.nc = a[2]);
    let h = (1 / (5 * i.la + 1)) ** 4;
    (i.fl = h * i.la + 0.1 * (1 - h) * (1 - h) * Math.cbrt(5 * i.la)), (i.flRoot = i.fl ** 0.25), (i.n = i.yb / l), (i.z = 1.48 + Math.sqrt(i.n)), (i.nbb = 0.725 * i.n ** -0.2), (i.ncb = i.nbb);
    let p = o ? 1 : Math.max(Math.min(b * (1 - (1 / 3.6) * Math.exp((-i.la - 42) / 92)), 1), 0);
    (i.dRgb = f.map((e) => (0, n.sX)(1, l / e, p))), (i.dRgbInv = i.dRgb.map((e) => 1 / e));
    let m = v(
        f.map((e, t) => e * i.dRgb[t]),
        i.fl
    );
    return (i.aW = i.nbb * (2 * m[0] + m[1] + 0.05 * m[2])), i;
}
let w = Z(c, (64 / Math.PI) * 0.2, 20, 'average', !1);
function M(e, t) {
    if (!((void 0 !== e.J) ^ (void 0 !== e.Q))) throw Error("Conversion requires one and only one: 'J' or 'Q'");
    if (!((void 0 !== e.C) ^ (void 0 !== e.M) ^ (void 0 !== e.s))) throw Error("Conversion requires one and only one: 'C', 'M' or 's'");
    if (!((void 0 !== e.h) ^ (void 0 !== e.H))) throw Error("Conversion requires one and only one: 'h' or 'H'");
    if (0 === e.J || 0 === e.Q) return [0, 0, 0];
    let r = 0,
        a = Math.cos(
            (r =
                void 0 !== e.h
                    ? (0, o.j)(e.h) * y
                    : (function (e) {
                          let t = ((e % 400) + 400) % 400,
                              r = Math.floor(0.01 * t);
                          t %= 100;
                          let [a, n] = h.slice(r, r + 2),
                              [s, i] = p.slice(r, r + 2);
                          return (0, o.j)((t * (i * a - s * n) - 100 * a * i) / (t * (i - s) - 100 * i));
                      })(e.H) * y)
        ),
        i = Math.sin(r),
        c = 0;
    void 0 !== e.J ? (c = 0.1 * (0, n.$7)(e.J, 0.5)) : void 0 !== e.Q && (c = (0.25 * t.c * e.Q) / ((t.aW + 4) * t.flRoot));
    let l = 0;
    void 0 !== e.C ? (l = e.C / c) : void 0 !== e.M ? (l = e.M / t.flRoot / c) : void 0 !== e.s && (l = (0.0004 * e.s ** 2 * (t.aW + 4)) / t.c);
    let u = (0, n.$7)(l * Math.pow(1.64 - Math.pow(0.29, t.n), -0.73), 10 / 9),
        d = 0.25 * (Math.cos(r + 2) + 3.8),
        m = t.aW * (0, n.$7)(c, 2 / t.c / t.z),
        g = (50000 / 13) * t.nc * t.ncb * d,
        v = m / t.nbb,
        Z = 23 * (v + 0.305) * (0, n.rY)(u, 23 * g + u * (11 * a + 108 * i)),
        w = (function (e, t) {
            let r = (100 / t) * 2588.068098016295;
            return e.map((e) => {
                let t = Math.abs(e);
                return (0, n.g6)(r * (0, n.$7)(t / (400 - t), 2.380952380952381), e);
            });
        })(
            (0, s.Z)(b, [v, Z * a, Z * i]).map((e) => +e / 1403),
            t.fl
        );
    return (0, s.Z)(
        f,
        w.map((e, r) => e * t.dRgbInv[r])
    ).map((e) => e / 100);
}
function k(e, t) {
    let r = e.map((e) => 100 * e),
        a = v(
            (0, s.Z)(u, r).map((e, r) => e * t.dRgb[r]),
            t.fl
        ),
        i = a[0] + (-12 * a[1] + a[2]) / 11,
        c = (a[0] + a[1] - 2 * a[2]) / 9,
        f = ((Math.atan2(c, i) % l) + l) % l,
        b = 0.25 * (Math.cos(f + 2) + 3.8),
        d = (50000 / 13) * t.nc * t.ncb * (0, n.rY)(b * Math.sqrt(i ** 2 + c ** 2), a[0] + a[1] + 1.05 * a[2] + 0.305),
        y = (0, n.$7)(d, 0.9) * Math.pow(1.64 - Math.pow(0.29, t.n), 0.73),
        Z = t.nbb * (2 * a[0] + a[1] + 0.05 * a[2]),
        w = (0, n.$7)(Z / t.aW, 0.5 * t.c * t.z),
        M = 100 * (0, n.$7)(w, 2),
        k = (4 / t.c) * w * (t.aW + 4) * t.flRoot,
        O = y * w,
        C = O * t.flRoot,
        E = (0, o.j)(f * g),
        j = (function (e) {
            let t = (0, o.j)(e);
            t <= h[0] && (t += 360);
            let r = (0, n.Nw)(h, t) - 1,
                [a, s] = h.slice(r, r + 2),
                [i, c] = p.slice(r, r + 2),
                l = m[r],
                u = (t - a) / i;
            return l + (100 * u) / (u + (s - t) / c);
        })(E);
    return {
        J: M,
        C: O,
        h: E,
        s: 50 * (0, n.$7)((t.c * y) / (t.aW + 4), 0.5),
        Q: k,
        M: C,
        H: j
    };
}
new a.Z({
    id: 'cam16-jmh',
    cssId: '--cam16-jmh',
    name: 'CAM16-JMh',
    coords: {
        j: {
            refRange: [0, 100],
            name: 'J'
        },
        m: {
            refRange: [0, 105],
            name: 'Colorfulness'
        },
        h: {
            refRange: [0, 360],
            type: 'angle',
            name: 'Hue'
        }
    },
    base: i.Z,
    fromBase(e) {
        let t = k(e, w);
        return [t.J, t.M, t.h];
    },
    toBase: (e) =>
        M(
            {
                J: e[0],
                M: e[1],
                h: e[2]
            },
            w
        )
});
