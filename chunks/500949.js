n.d(t, {
    $R: () => K,
    A0: () => et,
    GU: () => Y,
    H8: () => X,
    HI: () => J,
    HW: () => B,
    Ib: () => eo,
    KB: () => eu,
    S2: () => H,
    W6: () => ea,
    XM: () => ei,
    YC: () => ep,
    YE: () => el,
    h9: () => es,
    iw: () => en,
    jC: () => V,
    jQ: () => G,
    lT: () => q,
    rd: () => ed,
    t4: () => ec,
    uF: () => em,
    zn: () => Q,
}),
    n(467055),
    n(388685),
    n(35282),
    n(539854);
var a,
    i,
    r = n(647438),
    l = n(216397),
    s = n(764160),
    o = n(808131),
    c = n(757028),
    d = n(694626),
    u = n(855930),
    m = n(385787),
    p = n(566162),
    h = n(567027),
    x = n(461195),
    g = n(857702),
    f = n(20450),
    b = n(312976),
    v = n(147591),
    j = n(135164),
    _ = n(940172),
    y = n(81011),
    C = n(981613),
    S = n(762399),
    E = n(232112),
    T = n(53796),
    O = n(723757),
    N = n(375924),
    P = n(596136),
    I = n(341901),
    w = n(856308),
    k = n(665352),
    R = n(394900),
    A = n(661105),
    Z = n(525169),
    D = n(433517),
    L = n(521904),
    M = n(231338);
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function F(e, t) {
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
        sRGB: l.Z,
        A98RGB: s.Z,
        ACEScc: o.Z,
        ACEScg: c.Z,
        HPLuv: d.Z,
        HSL: u.Z,
        HSLuv: m.Z,
        HSV: p.Z,
        HWB: h.Z,
        ICTCP: x.Z,
        JzCzHz: g.Z,
        Jzazbz: f.Z,
        LCH: b.Z,
        LCHuv: v.Z,
        Lab: j.Z,
        Lab_D65: _.Z,
        Luv: y.Z,
        OKLCH: C.Z,
        OKLab: S.Z,
        P3: E.Z,
        ProPhoto: T.Z,
        REC_2020: O.Z,
        REC_2100_HLG: N.Z,
        REC_2100_PQ: P.Z,
        XYZ_D50: I.Z,
        XYZ_D65: w.Z,
    },
    G = Object.fromEntries(Object.keys(B).map((e) => [e, e]));
Object.values(B).forEach((e) => k.Z.register(e));
let { SemanticColors: z } = L.V,
    V = z,
    H = CSS.supports("color", "color(display-p3 1 0 0)") && CSS.supports("color", "color(display-p3 1 0 0 / 1)");
function W(e, t) {
    let [n, a] = r.useState(() => {
        let n = D.K.get(e);
        return null != n ? n : t;
    });
    return (
        r.useEffect(() => {
            D.K.set(e, n);
        }, [e, n]),
        [n, a]
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
                    opacity: t[e].opacity,
                },
            ]),
        ),
        highlight: !1,
    };
}
function q(e, t, n, a, i) {
    return {
        name: t,
        colors: F(U({}, e.colors), {
            [i]: {
                color: n,
                opacity: a,
            },
        }),
        highlight: !1,
    };
}
function Y(e) {
    return F(U({}, e), { highlight: !e.highlight });
}
function J(e) {
    return (0, R.Z)((0, A.Z)(e, l.Z), { format: "hex" });
}
var X = (((a = {}).TOKENS = "Tokens"), (a.PALETTES = "Palettes"), a);
function Q() {
    return (function (e, t) {
        let [n, a] = W("".concat(e, "-states"), [t]),
            [i, l] = W("".concat(e, "-index"), 0),
            s = n[i],
            o = r.useCallback(
                (e) => {
                    a(["function" == typeof e ? e(s) : e, ...n].slice(0, 20)), l(0);
                },
                [l, a, n, s],
            ),
            c = r.useCallback(() => {
                l(Math.min(n.length - 1, i + 1));
            }, [i, l, n.length]),
            d = r.useCallback(() => {
                l(Math.max(0, i - 1));
            }, [i, l]);
        return [s, o, c, d, i < n.length - 1, i > 0];
    })("color-override-9-24-2024", {
        semanticColorOverrides: {},
        rawColorOverrides: {},
        tab: "Tokens",
        scales: [],
    });
}
let $ = [
        100, 130, 160, 200, 230, 260, 300, 330, 345, 360, 400, 430, 460, 500, 530, 560, 600, 630, 660, 700, 730, 760,
        800, 830, 860, 900,
    ],
    ee = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
function et(e) {
    return "plum" === e ? ee : $;
}
var en =
    (((i = {}).LINEAR = "Linear"),
    (i.EASE_IN = "Ease In"),
    (i.EASE_OUT = "Ease Out"),
    (i.EASE_IN_OUT = "Ease In Out"),
    i);
function ea(e, t) {
    let n = et(t),
        a = Object.keys(e).map((e) => parseInt(e.split("-")[1])),
        i = Math.max(...a) / (n.length - 1),
        r = {};
    return (
        n.forEach((e, n) => {
            let l = Math.round(n * i),
                s = a.reduce((e, t) => (Math.abs(t - l) < Math.abs(e - l) ? t : e));
            r["".concat(t, "-").concat(s)] = "".concat(t, "-").concat(e);
        }),
        r
    );
}
function ei(e) {
    let { name: t, base: n, steps: a = 26, darkness: i, lightness: r, easingStrength: s = 1 } = e,
        o = B[e.colorSpace],
        c = (0, A.Z)(n, o),
        d = (0, Z.CD)(c, "white", 1 - i, {
            space: o,
            outputSpace: l.Z,
        }),
        u = (0, Z.CD)(c, "black", 1 - r, {
            space: o,
            outputSpace: l.Z,
        }),
        m = Math.floor(a / 2),
        p = a - m,
        h = (0, Z.w6)(d, c, {
            steps: m,
            outputSpace: o,
            space: o,
            progression: (e) => e ** s,
        }),
        x = (0, Z.w6)(u, c, {
            steps: p,
            outputSpace: o,
            space: o,
            progression: (e) => e ** s,
        }),
        g = [];
    for (let e = 0; e < m; e++) {
        let t = h(e / m);
        g.push(t);
    }
    g.push(c);
    for (let e = 1; e < p; e++) {
        let t = x(1 - e / p);
        g.push(t);
    }
    return Object.fromEntries(g.map((e, n) => ["".concat(t, "-").concat(n), e]));
}
function er(e, t, n) {
    n((n) =>
        null == n.scales.find((t) => t.name === e)
            ? n
            : F(U({}, n), { scales: n.scales.map((n) => (n.name === e ? t(n) : n)) }),
    );
}
function el(e, t, n) {
    er(e, (e) => F(U({}, e), { darkness: t }), n);
}
function es(e, t, n) {
    er(e, (e) => F(U({}, e), { lightness: t }), n);
}
function eo(e, t, n) {
    er(e, (e) => F(U({}, e), { base: t }), n);
}
function ec(e, t, n) {
    er(e, (e) => F(U({}, e), { colorSpace: t }), n);
}
function ed(e, t, n) {
    er(e, (e) => F(U({}, e), { easingStrength: t }), n);
}
function eu(e, t, n) {
    er(e, (e) => F(U({}, e), { showColumnarPalettePreview: t }), n);
}
function em(e, t, n) {
    er(e, (e) => F(U({}, e), { useP3ColorSpace: t }), n);
}
function ep(e, t, n) {
    er(e, (e) => F(U({}, e), { steps: t }), n);
}
