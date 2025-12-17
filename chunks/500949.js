n.d(t, {
    $R: () => K,
    A0: () => et,
    GU: () => Y,
    H8: () => X,
    HI: () => Q,
    HW: () => F,
    Ib: () => eo,
    KB: () => eu,
    S2: () => z,
    W6: () => ea,
    XM: () => er,
    YC: () => ep,
    YE: () => ei,
    h9: () => es,
    iw: () => en,
    jC: () => H,
    jQ: () => G,
    lT: () => q,
    rd: () => ed,
    t4: () => ec,
    uF: () => em,
    zn: () => J,
}),
    n(467055),
    n(388685),
    n(35282),
    n(539854);
var a,
    r,
    l = n(473749),
    i = n(216397),
    s = n(764160),
    o = n(808131),
    c = n(757028),
    d = n(694626),
    u = n(855930),
    m = n(385787),
    p = n(566162),
    h = n(567027),
    f = n(461195),
    x = n(857702),
    b = n(20450),
    g = n(312976),
    v = n(147591),
    j = n(135164),
    y = n(940172),
    C = n(81011),
    _ = n(981613),
    S = n(762399),
    E = n(232112),
    T = n(53796),
    O = n(723757),
    N = n(375924),
    w = n(596136),
    P = n(341901),
    I = n(856308),
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
function B(e, t) {
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
let F = {
        sRGB: i.Z,
        A98RGB: s.Z,
        ACEScc: o.Z,
        ACEScg: c.Z,
        HPLuv: d.Z,
        HSL: u.Z,
        HSLuv: m.Z,
        HSV: p.Z,
        HWB: h.Z,
        ICTCP: f.Z,
        JzCzHz: x.Z,
        Jzazbz: b.Z,
        LCH: g.Z,
        LCHuv: v.Z,
        Lab: j.Z,
        Lab_D65: y.Z,
        Luv: C.Z,
        OKLCH: _.Z,
        OKLab: S.Z,
        P3: E.Z,
        ProPhoto: T.Z,
        REC_2020: O.Z,
        REC_2100_HLG: N.Z,
        REC_2100_PQ: w.Z,
        XYZ_D50: P.Z,
        XYZ_D65: I.Z,
    },
    G = Object.fromEntries(Object.keys(F).map((e) => [e, e]));
Object.values(F).forEach((e) => k.Z.register(e));
let { SemanticColors: V } = L.V,
    H = V,
    z = CSS.supports("color", "color(display-p3 1 0 0)") && CSS.supports("color", "color(display-p3 1 0 0 / 1)");
function W(e, t) {
    let [n, a] = l.useState(() => {
        let n = D.K.get(e);
        return null != n ? n : t;
    });
    return (
        l.useEffect(() => {
            D.K.set(e, n);
        }, [e, n]),
        [n, a]
    );
}
function K(e) {
    let t = H[e];
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
function q(e, t, n, a, r) {
    return {
        name: t,
        colors: B(U({}, e.colors), {
            [r]: {
                color: n,
                opacity: a,
            },
        }),
        highlight: !1,
    };
}
function Y(e) {
    return B(U({}, e), { highlight: !e.highlight });
}
function Q(e) {
    return (0, R.Z)((0, A.Z)(e, i.Z), { format: "hex" });
}
var X = (((a = {}).TOKENS = "Tokens"), (a.PALETTES = "Palettes"), a);
function J() {
    return (function (e, t) {
        let [n, a] = W("".concat(e, "-states"), [t]),
            [r, i] = W("".concat(e, "-index"), 0),
            s = n[r],
            o = l.useCallback(
                (e) => {
                    a(["function" == typeof e ? e(s) : e, ...n].slice(0, 20)), i(0);
                },
                [i, a, n, s],
            ),
            c = l.useCallback(() => {
                i(Math.min(n.length - 1, r + 1));
            }, [r, i, n.length]),
            d = l.useCallback(() => {
                i(Math.max(0, r - 1));
            }, [r, i]);
        return [s, o, c, d, r < n.length - 1, r > 0];
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
    (((r = {}).LINEAR = "Linear"),
    (r.EASE_IN = "Ease In"),
    (r.EASE_OUT = "Ease Out"),
    (r.EASE_IN_OUT = "Ease In Out"),
    r);
function ea(e, t) {
    let n = et(t),
        a = Object.keys(e).map((e) => parseInt(e.split("-")[1])),
        r = Math.max(...a) / (n.length - 1),
        l = {};
    return (
        n.forEach((e, n) => {
            let i = Math.round(n * r),
                s = a.reduce((e, t) => (Math.abs(t - i) < Math.abs(e - i) ? t : e));
            l["".concat(t, "-").concat(s)] = "".concat(t, "-").concat(e);
        }),
        l
    );
}
function er(e) {
    let { name: t, base: n, steps: a = 26, darkness: r, lightness: l, easingStrength: s = 1 } = e,
        o = F[e.colorSpace],
        c = (0, A.Z)(n, o),
        d = (0, Z.CD)(c, "white", 1 - r, {
            space: o,
            outputSpace: i.Z,
        }),
        u = (0, Z.CD)(c, "black", 1 - l, {
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
        f = (0, Z.w6)(u, c, {
            steps: p,
            outputSpace: o,
            space: o,
            progression: (e) => e ** s,
        }),
        x = [];
    for (let e = 0; e < m; e++) {
        let t = h(e / m);
        x.push(t);
    }
    x.push(c);
    for (let e = 1; e < p; e++) {
        let t = f(1 - e / p);
        x.push(t);
    }
    return Object.fromEntries(x.map((e, n) => ["".concat(t, "-").concat(n), e]));
}
function el(e, t, n) {
    n((n) =>
        null == n.scales.find((t) => t.name === e)
            ? n
            : B(U({}, n), { scales: n.scales.map((n) => (n.name === e ? t(n) : n)) }),
    );
}
function ei(e, t, n) {
    el(e, (e) => B(U({}, e), { darkness: t }), n);
}
function es(e, t, n) {
    el(e, (e) => B(U({}, e), { lightness: t }), n);
}
function eo(e, t, n) {
    el(e, (e) => B(U({}, e), { base: t }), n);
}
function ec(e, t, n) {
    el(e, (e) => B(U({}, e), { colorSpace: t }), n);
}
function ed(e, t, n) {
    el(e, (e) => B(U({}, e), { easingStrength: t }), n);
}
function eu(e, t, n) {
    el(e, (e) => B(U({}, e), { showColumnarPalettePreview: t }), n);
}
function em(e, t, n) {
    el(e, (e) => B(U({}, e), { useP3ColorSpace: t }), n);
}
function ep(e, t, n) {
    el(e, (e) => B(U({}, e), { steps: t }), n);
}
