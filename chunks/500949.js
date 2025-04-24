n.d(t, {
    $R: () => X,
    A0: () => et,
    GU: () => Y,
    H8: () => q,
    HI: () => J,
    HW: () => B,
    Ib: () => eo,
    KB: () => eu,
    S2: () => H,
    W6: () => ea,
    XM: () => er,
    YC: () => ex,
    YE: () => ei,
    h9: () => es,
    iw: () => en,
    jC: () => V,
    jQ: () => G,
    lT: () => K,
    rd: () => ed,
    t4: () => ec,
    uF: () => em,
    zn: () => $
}),
    n(467055),
    n(388685),
    n(35282),
    n(539854);
var a,
    r,
    l = n(192379),
    i = n(216397),
    s = n(764160),
    o = n(808131),
    c = n(757028),
    d = n(694626),
    u = n(855930),
    m = n(385787),
    x = n(566162),
    h = n(567027),
    p = n(461195),
    b = n(857702),
    f = n(20450),
    v = n(312976),
    g = n(147591),
    j = n(135164),
    _ = n(940172),
    y = n(81011),
    O = n(981613),
    C = n(762399),
    N = n(232112),
    E = n(53796),
    T = n(723757),
    S = n(375924),
    P = n(596136),
    w = n(341901),
    k = n(856308),
    I = n(665352),
    R = n(394900),
    Z = n(661105),
    L = n(525169),
    A = n(433517),
    D = n(190558),
    M = n(231338);
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let B = {
        sRGB: i.Z,
        A98RGB: s.Z,
        ACEScc: o.Z,
        ACEScg: c.Z,
        HPLuv: d.Z,
        HSL: u.Z,
        HSLuv: m.Z,
        HSV: x.Z,
        HWB: h.Z,
        ICTCP: p.Z,
        JzCzHz: b.Z,
        Jzazbz: f.Z,
        LCH: v.Z,
        LCHuv: g.Z,
        Lab: j.Z,
        Lab_D65: _.Z,
        Luv: y.Z,
        OKLCH: O.Z,
        OKLab: C.Z,
        P3: N.Z,
        ProPhoto: E.Z,
        REC_2020: T.Z,
        REC_2100_HLG: S.Z,
        REC_2100_PQ: P.Z,
        XYZ_D50: w.Z,
        XYZ_D65: k.Z
    },
    G = Object.fromEntries(Object.keys(B).map((e) => [e, e]));
Object.values(B).forEach((e) => I.Z.register(e));
let { SemanticColors: F } = D.V,
    V = F,
    H = CSS.supports('color', 'color(display-p3 1 0 0)') && CSS.supports('color', 'color(display-p3 1 0 0 / 1)');
function W(e, t) {
    let [n, a] = l.useState(() => {
        let n = A.K.get(e);
        return null != n ? n : t;
    });
    return (
        l.useEffect(() => {
            A.K.set(e, n);
        }, [e, n]),
        [n, a]
    );
}
function X(e) {
    let t = V[e];
    return {
        name: e,
        colors: Object.fromEntries(
            Object.values(M.BR).map((e) => [
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
function K(e, t, n, a, r) {
    return {
        name: t,
        colors: U(z({}, e.colors), {
            [r]: {
                color: n,
                opacity: a
            }
        }),
        highlight: !1
    };
}
function Y(e) {
    return U(z({}, e), { highlight: !e.highlight });
}
function J(e) {
    return (0, R.Z)((0, Z.Z)(e, i.Z), { format: 'hex' });
}
var q = (((a = {}).TOKENS = 'Tokens'), (a.PALETTES = 'Palettes'), a);
function $() {
    return (function (e, t) {
        let [n, a] = W(''.concat(e, '-states'), [t]),
            [r, i] = W(''.concat(e, '-index'), 0),
            s = n[r],
            o = l.useCallback(
                (e) => {
                    a(['function' == typeof e ? e(s) : e, ...n].slice(0, 20)), i(0);
                },
                [i, a, n, s]
            ),
            c = l.useCallback(() => {
                i(Math.min(n.length - 1, r + 1));
            }, [r, i, n.length]),
            d = l.useCallback(() => {
                i(Math.max(0, r - 1));
            }, [r, i]);
        return [s, o, c, d, r < n.length - 1, r > 0];
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
var en = (((r = {}).LINEAR = 'Linear'), (r.EASE_IN = 'Ease In'), (r.EASE_OUT = 'Ease Out'), (r.EASE_IN_OUT = 'Ease In Out'), r);
function ea(e, t) {
    let n = et(t),
        a = Object.keys(e).map((e) => parseInt(e.split('-')[1])),
        r = Math.max(...a) / (n.length - 1),
        l = {};
    return (
        n.forEach((e, n) => {
            let i = Math.round(n * r),
                s = a.reduce((e, t) => (Math.abs(t - i) < Math.abs(e - i) ? t : e));
            l[''.concat(t, '-').concat(s)] = ''.concat(t, '-').concat(e);
        }),
        l
    );
}
function er(e) {
    let { name: t, base: n, steps: a = 26, darkness: r, lightness: l, easingStrength: s = 1 } = e,
        o = B[e.colorSpace],
        c = (0, Z.Z)(n, o),
        d = (0, L.CD)(c, 'white', 1 - r, {
            space: o,
            outputSpace: i.Z
        }),
        u = (0, L.CD)(c, 'black', 1 - l, {
            space: o,
            outputSpace: i.Z
        }),
        m = Math.floor(a / 2),
        x = a - m,
        h = (0, L.w6)(d, c, {
            steps: m,
            outputSpace: o,
            space: o,
            progression: (e) => e ** s
        }),
        p = (0, L.w6)(u, c, {
            steps: x,
            outputSpace: o,
            space: o,
            progression: (e) => e ** s
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
    n((n) => (null == n.scales.find((t) => t.name === e) ? n : U(z({}, n), { scales: n.scales.map((n) => (n.name === e ? t(n) : n)) })));
}
function ei(e, t, n) {
    el(e, (e) => U(z({}, e), { darkness: t }), n);
}
function es(e, t, n) {
    el(e, (e) => U(z({}, e), { lightness: t }), n);
}
function eo(e, t, n) {
    el(e, (e) => U(z({}, e), { base: t }), n);
}
function ec(e, t, n) {
    el(e, (e) => U(z({}, e), { colorSpace: t }), n);
}
function ed(e, t, n) {
    el(e, (e) => U(z({}, e), { easingStrength: t }), n);
}
function eu(e, t, n) {
    el(e, (e) => U(z({}, e), { showColumnarPalettePreview: t }), n);
}
function em(e, t, n) {
    el(e, (e) => U(z({}, e), { useP3ColorSpace: t }), n);
}
function ex(e, t, n) {
    el(e, (e) => U(z({}, e), { steps: t }), n);
}
