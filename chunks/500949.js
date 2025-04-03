n.d(t, {
    $R: () => X,
    A0: () => et,
    GU: () => K,
    H8: () => q,
    HI: () => J,
    HW: () => F,
    Ib: () => es,
    KB: () => eu,
    S2: () => H,
    W6: () => er,
    XM: () => ea,
    YC: () => ex,
    YE: () => ei,
    h9: () => eo,
    iw: () => en,
    jC: () => W,
    jQ: () => G,
    lT: () => Y,
    rd: () => ed,
    t4: () => ec,
    uF: () => em,
    zn: () => $
}),
    n(977457),
    n(47120),
    n(301563),
    n(653041);
var r,
    a,
    l = n(192379),
    i = n(216397),
    o = n(764160),
    s = n(808131),
    c = n(757028),
    d = n(694626),
    u = n(855930),
    m = n(385787),
    x = n(566162),
    h = n(567027),
    p = n(461195),
    b = n(857702),
    f = n(20450),
    _ = n(312976),
    g = n(147591),
    v = n(135164),
    j = n(940172),
    y = n(81011),
    C = n(981613),
    T = n(762399),
    S = n(232112),
    N = n(53796),
    O = n(723757),
    k = n(375924),
    E = n(596136),
    w = n(341901),
    P = n(856308),
    I = n(665352),
    Z = n(394900),
    R = n(661105),
    L = n(525169),
    D = n(433517),
    A = n(190558),
    B = n(231338);
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = {
        sRGB: i.Z,
        A98RGB: o.Z,
        ACEScc: s.Z,
        ACEScg: c.Z,
        HPLuv: d.Z,
        HSL: u.Z,
        HSLuv: m.Z,
        HSV: x.Z,
        HWB: h.Z,
        ICTCP: p.Z,
        JzCzHz: b.Z,
        Jzazbz: f.Z,
        LCH: _.Z,
        LCHuv: g.Z,
        Lab: v.Z,
        Lab_D65: j.Z,
        Luv: y.Z,
        OKLCH: C.Z,
        OKLab: T.Z,
        P3: S.Z,
        ProPhoto: N.Z,
        REC_2020: O.Z,
        REC_2100_HLG: k.Z,
        REC_2100_PQ: E.Z,
        XYZ_D50: w.Z,
        XYZ_D65: P.Z
    },
    G = Object.fromEntries(Object.keys(F).map((e) => [e, e]));
Object.values(F).forEach((e) => I.Z.register(e));
let { SemanticColors: U } = A.V,
    W = U,
    H = CSS.supports('color', 'color(display-p3 1 0 0)') && CSS.supports('color', 'color(display-p3 1 0 0 / 1)');
function V(e, t) {
    let [n, r] = l.useState(() => {
        let n = D.K.get(e);
        return null != n ? n : t;
    });
    return (
        l.useEffect(() => {
            D.K.set(e, n);
        }, [e, n]),
        [n, r]
    );
}
function X(e) {
    let t = W[e];
    return {
        name: e,
        colors: Object.fromEntries(
            Object.values(B.BR).map((e) => [
                e,
                {
                    color: t[e].raw,
                    opacity: t[e].opacity
                }
            ])
        ),
        highlight: !1
    };
}
function Y(e, t, n, r, a) {
    return {
        name: t,
        colors: M(z({}, e.colors), {
            [a]: {
                color: n,
                opacity: r
            }
        }),
        highlight: !1
    };
}
function K(e) {
    return M(z({}, e), { highlight: !e.highlight });
}
function J(e) {
    return (0, Z.Z)((0, R.Z)(e, i.Z), { format: 'hex' });
}
var q = (((r = {}).TOKENS = 'Tokens'), (r.PALETTES = 'Palettes'), r);
function $() {
    return (function (e, t) {
        let [n, r] = V(''.concat(e, '-states'), [t]),
            [a, i] = V(''.concat(e, '-index'), 0),
            o = n[a],
            s = l.useCallback(
                (e) => {
                    r(['function' == typeof e ? e(o) : e, ...n].slice(0, 20)), i(0);
                },
                [i, r, n, o]
            ),
            c = l.useCallback(() => {
                i(Math.min(n.length - 1, a + 1));
            }, [a, i, n.length]),
            d = l.useCallback(() => {
                i(Math.max(0, a - 1));
            }, [a, i]);
        return [o, s, c, d, a < n.length - 1, a > 0];
    })('color-override-9-24-2024', {
        semanticColorOverrides: {},
        rawColorOverrides: {},
        tab: 'Tokens',
        scales: []
    });
}
let Q = [100, 130, 160, 200, 230, 260, 300, 330, 345, 360, 400, 430, 460, 500, 530, 560, 600, 630, 660, 700, 730, 760, 800, 830, 860, 900],
    ee = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
function et(e) {
    return 'plum' === e ? ee : Q;
}
var en = (((a = {}).LINEAR = 'Linear'), (a.EASE_IN = 'Ease In'), (a.EASE_OUT = 'Ease Out'), (a.EASE_IN_OUT = 'Ease In Out'), a);
function er(e, t) {
    let n = et(t),
        r = Object.keys(e).map((e) => parseInt(e.split('-')[1])),
        a = Math.max(...r) / (n.length - 1),
        l = {};
    return (
        n.forEach((e, n) => {
            let i = Math.round(n * a),
                o = r.reduce((e, t) => (Math.abs(t - i) < Math.abs(e - i) ? t : e));
            l[''.concat(t, '-').concat(o)] = ''.concat(t, '-').concat(e);
        }),
        l
    );
}
function ea(e) {
    let { name: t, base: n, steps: r = 26, darkness: a, lightness: l, easingStrength: o = 1 } = e,
        s = F[e.colorSpace],
        c = (0, R.Z)(n, s),
        d = (0, L.CD)(c, 'white', 1 - a, {
            space: s,
            outputSpace: i.Z
        }),
        u = (0, L.CD)(c, 'black', 1 - l, {
            space: s,
            outputSpace: i.Z
        }),
        m = Math.floor(r / 2),
        x = r - m,
        h = (0, L.w6)(d, c, {
            steps: m,
            outputSpace: s,
            space: s,
            progression: (e) => e ** o
        }),
        p = (0, L.w6)(u, c, {
            steps: x,
            outputSpace: s,
            space: s,
            progression: (e) => e ** o
        }),
        b = [];
    for (let e = 0; e < m; e++) {
        let t = h(e / m);
        b.push(t);
    }
    b.push(c);
    for (let e = 1; e < x; e++) {
        let t = p(1 - e / x);
        b.push(t);
    }
    return Object.fromEntries(b.map((e, n) => [''.concat(t, '-').concat(n), e]));
}
function el(e, t, n) {
    n((n) => (null == n.scales.find((t) => t.name === e) ? n : M(z({}, n), { scales: n.scales.map((n) => (n.name === e ? t(n) : n)) })));
}
function ei(e, t, n) {
    el(e, (e) => M(z({}, e), { darkness: t }), n);
}
function eo(e, t, n) {
    el(e, (e) => M(z({}, e), { lightness: t }), n);
}
function es(e, t, n) {
    el(e, (e) => M(z({}, e), { base: t }), n);
}
function ec(e, t, n) {
    el(e, (e) => M(z({}, e), { colorSpace: t }), n);
}
function ed(e, t, n) {
    el(e, (e) => M(z({}, e), { easingStrength: t }), n);
}
function eu(e, t, n) {
    el(e, (e) => M(z({}, e), { showColumnarPalettePreview: t }), n);
}
function em(e, t, n) {
    el(e, (e) => M(z({}, e), { useP3ColorSpace: t }), n);
}
function ex(e, t, n) {
    el(e, (e) => M(z({}, e), { steps: t }), n);
}
