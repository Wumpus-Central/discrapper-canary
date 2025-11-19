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
    XM: () => el,
    YC: () => ep,
    YE: () => ei,
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
    l,
    r = n(473749),
    i = n(973805),
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
    O = n(53796),
    T = n(723757),
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
        sRGB: i.Z,
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
        ProPhoto: O.Z,
        REC_2020: T.Z,
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
function q(e, t, n, a, l) {
    return {
        name: t,
        colors: F(U({}, e.colors), {
            [l]: {
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
    return (0, R.Z)((0, A.Z)(e, i.Z), { format: "hex" });
}
var X = (((a = {}).TOKENS = "Tokens"), (a.PALETTES = "Palettes"), a);
function Q() {
    return (function (e, t) {
        let [n, a] = W("".concat(e, "-states"), [t]),
            [l, i] = W("".concat(e, "-index"), 0),
            s = n[l],
            o = r.useCallback(
                (e) => {
                    a(["function" == typeof e ? e(s) : e, ...n].slice(0, 20)), i(0);
                },
                [i, a, n, s],
            ),
            c = r.useCallback(() => {
                i(Math.min(n.length - 1, l + 1));
            }, [l, i, n.length]),
            d = r.useCallback(() => {
                i(Math.max(0, l - 1));
            }, [l, i]);
        return [s, o, c, d, l < n.length - 1, l > 0];
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
    (((l = {}).LINEAR = "Linear"),
    (l.EASE_IN = "Ease In"),
    (l.EASE_OUT = "Ease Out"),
    (l.EASE_IN_OUT = "Ease In Out"),
    l);
function ea(e, t) {
    let n = et(t),
        a = Object.keys(e).map((e) => parseInt(e.split("-")[1])),
        l = Math.max(...a) / (n.length - 1),
        r = {};
    return (
        n.forEach((e, n) => {
            let i = Math.round(n * l),
                s = a.reduce((e, t) => (Math.abs(t - i) < Math.abs(e - i) ? t : e));
            r["".concat(t, "-").concat(s)] = "".concat(t, "-").concat(e);
        }),
        r
    );
}
function el(e) {
    let { name: t, base: n, steps: a = 26, darkness: l, lightness: r, easingStrength: s = 1 } = e,
        o = B[e.colorSpace],
        c = (0, A.Z)(n, o),
        d = (0, Z.CD)(c, "white", 1 - l, {
            space: o,
            outputSpace: i.Z,
        }),
        u = (0, Z.CD)(c, "black", 1 - r, {
            space: o,
            outputSpace: i.Z,
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
function ei(e, t, n) {
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
