r.d(t, {
    P: () => f,
    Z: () => b
});
var a = r(665352),
    n = r(656653),
    s = r(856308),
    o = r(440255);
let i = r(629990).mh.D65,
    c = 216 / 24389,
    l = 24389 / 27;
function u(e) {
    return e > 8 ? Math.pow((e + 16) / 116, 3) : e / l;
}
let f = (0, o.NZ)(i, (200 / Math.PI) * u(50), 100 * u(50), 'average', !1),
    b = new a.Z({
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
        base: s.Z,
        fromBase: (e) =>
            (function (e, t) {
                var r;
                let a = 116 * ((r = e[1]) > c ? Math.cbrt(r) : (l * r + 16) / 116) - 16;
                if (0 === a) return [0, 0, 0];
                let s = (0, o.S5)(e, f);
                return [(0, n.j)(s.h), s.C, a];
            })(e, 0),
        toBase: (e) =>
            (function (e, t) {
                let [r, a, n] = e,
                    s = [],
                    i = 0;
                if (0 === n) return [0, 0, 0];
                let c = u(n);
                i = n > 0 ? 0.00379058511492914 * n ** 2 + 0.608983189401032 * n + 0.9155088574762233 : 0.000009514440756550361 * n ** 2 + 0.08693057439788597 * n - 21.928975842194614;
                let l = 0,
                    f = 1 / 0;
                for (; l <= 15; ) {
                    let e = Math.abs(
                        (s = (0, o.Zk)(
                            {
                                J: i,
                                C: a,
                                h: r
                            },
                            t
                        ))[1] - c
                    );
                    if (e < f) {
                        if (e <= 2e-12) return s;
                        f = e;
                    }
                    (i -= ((s[1] - c) * i) / (2 * s[1])), (l += 1);
                }
                return (0, o.Zk)(
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
