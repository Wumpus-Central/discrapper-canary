r.d(t, {
    P: function () {
        return f;
    }
});
var a = r(665352),
    n = r(656653),
    o = r(856308),
    s = r(440255);
let i = r(629990).mh.D65,
    c = 216 / 24389,
    u = 24389 / 27;
function l(e) {
    return e > 8 ? Math.pow((e + 16) / 116, 3) : e / u;
}
let f = (0, s.NZ)(i, (200 / Math.PI) * l(50), 100 * l(50), 'average', !1);
t.Z = new a.Z({
    id: 'hct',
    name: 'HCT',
    coords: {
        h: {
            refRange: [0, 360],
            type: 'angle',
            name: 'Hue'
        },
        c: {
            refRange: [0, 145],
            name: 'Colorfulness'
        },
        t: {
            refRange: [0, 100],
            name: 'Tone'
        }
    },
    base: o.Z,
    fromBase: (e) =>
        (function (e, t) {
            var r;
            let a = 116 * ((r = e[1]) > c ? Math.cbrt(r) : (u * r + 16) / 116) - 16;
            if (0 === a) return [0, 0, 0];
            let o = (0, s.S5)(e, f);
            return [(0, n.j)(o.h), o.C, a];
        })(e, 0),
    toBase: (e) =>
        (function (e, t) {
            let [r, a, n] = e,
                o = [],
                i = 0;
            if (0 === n) return [0, 0, 0];
            let c = l(n);
            i = n > 0 ? 0.00379058511492914 * n ** 2 + 0.608983189401032 * n + 0.9155088574762233 : 0.000009514440756550361 * n ** 2 + 0.08693057439788597 * n - 21.928975842194614;
            let u = 0,
                f = 1 / 0;
            for (; u <= 15; ) {
                let e = Math.abs(
                    (o = (0, s.Zk)(
                        {
                            J: i,
                            C: a,
                            h: r
                        },
                        t
                    ))[1] - c
                );
                if (e < f) {
                    if (e <= 2e-12) return o;
                    f = e;
                }
                (i -= ((o[1] - c) * i) / (2 * o[1])), (u += 1);
            }
            return (0, s.Zk)(
                {
                    J: i,
                    C: a,
                    h: r
                },
                t
            );
        })(e, f),
    formats: {
        color: {
            id: '--hct',
            coords: ['<number> | <angle>', '<percentage> | <number>', '<percentage> | <number>']
        }
    }
});
