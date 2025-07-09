(a.d(t, {
    $R: () => K,
    A0: () => et,
    GU: () => Y,
    H8: () => q,
    HI: () => J,
    HW: () => z,
    Ib: () => eo,
    KB: () => eu,
    S2: () => H,
    W6: () => en,
    XM: () => er,
    YC: () => ex,
    YE: () => ei,
    h9: () => es,
    iw: () => ea,
    jC: () => V,
    jQ: () => U,
    lT: () => X,
    rd: () => ed,
    t4: () => ec,
    uF: () => em,
    zn: () => $
}),
    a(467055),
    a(388685),
    a(35282),
    a(539854));
var n,
    r,
    l = a(73800),
    i = a(216397),
    s = a(764160),
    o = a(808131),
    c = a(757028),
    d = a(694626),
    u = a(855930),
    m = a(385787),
    x = a(566162),
    p = a(567027),
    h = a(461195),
    b = a(857702),
    f = a(20450),
    v = a(312976),
    j = a(147591),
    g = a(135164),
    _ = a(940172),
    y = a(81011),
    C = a(981613),
    O = a(762399),
    N = a(232112),
    T = a(53796),
    E = a(723757),
    S = a(375924),
    P = a(596136),
    w = a(341901),
    I = a(856308),
    R = a(665352),
    k = a(394900),
    Z = a(661105),
    A = a(525169),
    D = a(433517),
    L = a(521904),
    M = a(231338);
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
              }),
        e
    );
}
let z = {
        sRGB: i.Z,
        A98RGB: s.Z,
        ACEScc: o.Z,
        ACEScg: c.Z,
        HPLuv: d.Z,
        HSL: u.Z,
        HSLuv: m.Z,
        HSV: x.Z,
        HWB: p.Z,
        ICTCP: h.Z,
        JzCzHz: b.Z,
        Jzazbz: f.Z,
        LCH: v.Z,
        LCHuv: j.Z,
        Lab: g.Z,
        Lab_D65: _.Z,
        Luv: y.Z,
        OKLCH: C.Z,
        OKLab: O.Z,
        P3: N.Z,
        ProPhoto: T.Z,
        REC_2020: E.Z,
        REC_2100_HLG: S.Z,
        REC_2100_PQ: P.Z,
        XYZ_D50: w.Z,
        XYZ_D65: I.Z
    },
    U = Object.fromEntries(Object.keys(z).map((e) => [e, e]));
Object.values(z).forEach((e) => R.Z.register(e));
let { SemanticColors: G } = L.V,
    V = G,
    H = CSS.supports('color', 'color(display-p3 1 0 0)') && CSS.supports('color', 'color(display-p3 1 0 0 / 1)');
function W(e, t) {
    let [a, n] = l.useState(() => {
        let a = D.K.get(e);
        return null != a ? a : t;
    });
    return (
        l.useEffect(() => {
            D.K.set(e, a);
        }, [e, a]),
        [a, n]
    );
}
function K(e) {
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
function X(e, t, a, n, r) {
    return {
        name: t,
        colors: F(B({}, e.colors), {
            [r]: {
                color: a,
                opacity: n
            }
        }),
        highlight: !1
    };
}
function Y(e) {
    return F(B({}, e), { highlight: !e.highlight });
}
function J(e) {
    return (0, k.Z)((0, Z.Z)(e, i.Z), { format: 'hex' });
}
var q = (((n = {}).TOKENS = 'Tokens'), (n.PALETTES = 'Palettes'), n);
function $() {
    return (function (e, t) {
        let [a, n] = W(''.concat(e, '-states'), [t]),
            [r, i] = W(''.concat(e, '-index'), 0),
            s = a[r],
            o = l.useCallback(
                (e) => {
                    (n(['function' == typeof e ? e(s) : e, ...a].slice(0, 20)), i(0));
                },
                [i, n, a, s]
            ),
            c = l.useCallback(() => {
                i(Math.min(a.length - 1, r + 1));
            }, [r, i, a.length]),
            d = l.useCallback(() => {
                i(Math.max(0, r - 1));
            }, [r, i]);
        return [s, o, c, d, r < a.length - 1, r > 0];
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
var ea = (((r = {}).LINEAR = 'Linear'), (r.EASE_IN = 'Ease In'), (r.EASE_OUT = 'Ease Out'), (r.EASE_IN_OUT = 'Ease In Out'), r);
function en(e, t) {
    let a = et(t),
        n = Object.keys(e).map((e) => parseInt(e.split('-')[1])),
        r = Math.max(...n) / (a.length - 1),
        l = {};
    return (
        a.forEach((e, a) => {
            let i = Math.round(a * r),
                s = n.reduce((e, t) => (Math.abs(t - i) < Math.abs(e - i) ? t : e));
            l[''.concat(t, '-').concat(s)] = ''.concat(t, '-').concat(e);
        }),
        l
    );
}
function er(e) {
    let { name: t, base: a, steps: n = 26, darkness: r, lightness: l, easingStrength: s = 1 } = e,
        o = z[e.colorSpace],
        c = (0, Z.Z)(a, o),
        d = (0, A.CD)(c, 'white', 1 - r, {
            space: o,
            outputSpace: i.Z
        }),
        u = (0, A.CD)(c, 'black', 1 - l, {
            space: o,
            outputSpace: i.Z
        }),
        m = Math.floor(n / 2),
        x = n - m,
        p = (0, A.w6)(d, c, {
            steps: m,
            outputSpace: o,
            space: o,
            progression: (e) => e ** s
        }),
        h = (0, A.w6)(u, c, {
            steps: x,
            outputSpace: o,
            space: o,
            progression: (e) => e ** s
        }),
        b = [];
    for (let e = 0; e < m; e++) {
        let t = p(e / m);
        b.push(t);
    }
    b.push(c);
    for (let e = 1; e < x; e++) {
        let t = h(1 - e / x);
        b.push(t);
    }
    return Object.fromEntries(b.map((e, a) => [''.concat(t, '-').concat(a), e]));
}
function el(e, t, a) {
    a((a) => (null == a.scales.find((t) => t.name === e) ? a : F(B({}, a), { scales: a.scales.map((a) => (a.name === e ? t(a) : a)) })));
}
function ei(e, t, a) {
    el(e, (e) => F(B({}, e), { darkness: t }), a);
}
function es(e, t, a) {
    el(e, (e) => F(B({}, e), { lightness: t }), a);
}
function eo(e, t, a) {
    el(e, (e) => F(B({}, e), { base: t }), a);
}
function ec(e, t, a) {
    el(e, (e) => F(B({}, e), { colorSpace: t }), a);
}
function ed(e, t, a) {
    el(e, (e) => F(B({}, e), { easingStrength: t }), a);
}
function eu(e, t, a) {
    el(e, (e) => F(B({}, e), { showColumnarPalettePreview: t }), a);
}
function em(e, t, a) {
    el(e, (e) => F(B({}, e), { useP3ColorSpace: t }), a);
}
function ex(e, t, a) {
    el(e, (e) => F(B({}, e), { steps: t }), a);
}
