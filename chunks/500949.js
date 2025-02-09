n.d(t, {
    $R: () => V,
    A0: () => Q,
    GU: () => Y,
    H8: () => K,
    HI: () => X,
    HW: () => M,
    Ib: () => ei,
    KB: () => ec,
    S2: () => G,
    W6: () => et,
    XM: () => en,
    YC: () => eu,
    YE: () => er,
    h9: () => el,
    iw: () => ee,
    jC: () => U,
    jQ: () => F,
    lT: () => W,
    rd: () => es,
    t4: () => eo,
    uF: () => ed,
    zn: () => J
}),
    n(47120),
    n(724458),
    n(653041);
var a,
    r,
    l = n(192379),
    i = n(216397),
    o = n(764160),
    s = n(808131),
    c = n(757028),
    d = n(694626),
    u = n(855930),
    h = n(385787),
    m = n(566162),
    x = n(567027),
    _ = n(461195),
    p = n(857702),
    f = n(20450),
    b = n(312976),
    g = n(147591),
    v = n(135164),
    j = n(940172),
    C = n(81011),
    N = n(981613),
    T = n(762399),
    E = n(232112),
    S = n(53796),
    y = n(723757),
    k = n(375924),
    I = n(596136),
    R = n(341901),
    O = n(856308),
    Z = n(665352),
    w = n(394900),
    A = n(661105),
    L = n(525169),
    P = n(433517),
    D = n(190558),
    B = n(231338);
let M = {
        sRGB: i.Z,
        A98RGB: o.Z,
        ACEScc: s.Z,
        ACEScg: c.Z,
        HPLuv: d.Z,
        HSL: u.Z,
        HSLuv: h.Z,
        HSV: m.Z,
        HWB: x.Z,
        ICTCP: _.Z,
        JzCzHz: p.Z,
        Jzazbz: f.Z,
        LCH: b.Z,
        LCHuv: g.Z,
        Lab: v.Z,
        Lab_D65: j.Z,
        Luv: C.Z,
        OKLCH: N.Z,
        OKLab: T.Z,
        P3: E.Z,
        ProPhoto: S.Z,
        REC_2020: y.Z,
        REC_2100_HLG: k.Z,
        REC_2100_PQ: I.Z,
        XYZ_D50: R.Z,
        XYZ_D65: O.Z
    },
    F = Object.fromEntries(Object.keys(M).map((e) => [e, e]));
Object.values(M).forEach((e) => Z.Z.register(e));
let { SemanticColors: z } = D.V,
    U = z,
    G = CSS.supports('color', 'color(display-p3 1 0 0)') && CSS.supports('color', 'color(display-p3 1 0 0 / 1)');
function H(e, t) {
    let [n, a] = l.useState(() => {
        let n = P.K.get(e);
        return null != n ? n : t;
    });
    return (
        l.useEffect(() => {
            P.K.set(e, n);
        }, [e, n]),
        [n, a]
    );
}
function V(e) {
    let t = U[e];
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
function W(e, t, n, a, r) {
    return {
        name: t,
        colors: {
            ...e.colors,
            [r]: {
                color: n,
                opacity: a
            }
        },
        highlight: !1
    };
}
function Y(e) {
    return {
        ...e,
        highlight: !e.highlight
    };
}
function X(e) {
    return (0, w.Z)((0, A.Z)(e, i.Z), { format: 'hex' });
}
var K = (((a = {}).TOKENS = 'Tokens'), (a.PALETTES = 'Palettes'), a);
function J() {
    return (function (e, t) {
        let [n, a] = H(''.concat(e, '-states'), [t]),
            [r, i] = H(''.concat(e, '-index'), 0),
            o = n[r],
            s = l.useCallback(
                (e) => {
                    a(['function' == typeof e ? e(o) : e, ...n].slice(0, 20)), i(0);
                },
                [i, a, n, o]
            ),
            c = l.useCallback(() => {
                i(Math.min(n.length - 1, r + 1));
            }, [r, i, n.length]),
            d = l.useCallback(() => {
                i(Math.max(0, r - 1));
            }, [r, i]);
        return [o, s, c, d, r < n.length - 1, r > 0];
    })('color-override-9-24-2024', {
        semanticColorOverrides: {},
        rawColorOverrides: {},
        tab: 'Tokens',
        scales: []
    });
}
let q = [100, 130, 160, 200, 230, 260, 300, 330, 345, 360, 400, 430, 460, 500, 530, 560, 600, 630, 660, 700, 730, 760, 800, 830, 860, 900],
    $ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
function Q(e) {
    return 'plum' === e ? $ : q;
}
var ee = (((r = {}).LINEAR = 'Linear'), (r.EASE_IN = 'Ease In'), (r.EASE_OUT = 'Ease Out'), (r.EASE_IN_OUT = 'Ease In Out'), r);
function et(e, t) {
    let n = Q(t),
        a = Object.keys(e).map((e) => parseInt(e.split('-')[1])),
        r = Math.max(...a) / (n.length - 1),
        l = {};
    return (
        n.forEach((e, n) => {
            let i = Math.round(n * r),
                o = a.reduce((e, t) => (Math.abs(t - i) < Math.abs(e - i) ? t : e));
            l[''.concat(t, '-').concat(o)] = ''.concat(t, '-').concat(e);
        }),
        l
    );
}
function en(e) {
    let { name: t, base: n, steps: a = 26, darkness: r, lightness: l, easingStrength: o = 1 } = e,
        s = M[e.colorSpace],
        c = (0, A.Z)(n, s),
        d = (0, L.CD)(c, 'white', 1 - r, {
            space: s,
            outputSpace: i.Z
        }),
        u = (0, L.CD)(c, 'black', 1 - l, {
            space: s,
            outputSpace: i.Z
        }),
        h = Math.floor(a / 2),
        m = a - h,
        x = (0, L.w6)(d, c, {
            steps: h,
            outputSpace: s,
            space: s,
            progression: (e) => e ** o
        }),
        _ = (0, L.w6)(u, c, {
            steps: m,
            outputSpace: s,
            space: s,
            progression: (e) => e ** o
        }),
        p = [];
    for (let e = 0; e < h; e++) {
        let t = x(e / h);
        p.push(t);
    }
    p.push(c);
    for (let e = 1; e < m; e++) {
        let t = _(1 - e / m);
        p.push(t);
    }
    return Object.fromEntries(p.map((e, n) => [''.concat(t, '-').concat(n), e]));
}
function ea(e, t, n) {
    n((n) =>
        null == n.scales.find((t) => t.name === e)
            ? n
            : {
                  ...n,
                  scales: n.scales.map((n) => (n.name === e ? t(n) : n))
              }
    );
}
function er(e, t, n) {
    ea(
        e,
        (e) => ({
            ...e,
            darkness: t
        }),
        n
    );
}
function el(e, t, n) {
    ea(
        e,
        (e) => ({
            ...e,
            lightness: t
        }),
        n
    );
}
function ei(e, t, n) {
    ea(
        e,
        (e) => ({
            ...e,
            base: t
        }),
        n
    );
}
function eo(e, t, n) {
    ea(
        e,
        (e) => ({
            ...e,
            colorSpace: t
        }),
        n
    );
}
function es(e, t, n) {
    ea(
        e,
        (e) => ({
            ...e,
            easingStrength: t
        }),
        n
    );
}
function ec(e, t, n) {
    ea(
        e,
        (e) => ({
            ...e,
            showColumnarPalettePreview: t
        }),
        n
    );
}
function ed(e, t, n) {
    ea(
        e,
        (e) => ({
            ...e,
            useP3ColorSpace: t
        }),
        n
    );
}
function eu(e, t, n) {
    ea(
        e,
        (e) => ({
            ...e,
            steps: t
        }),
        n
    );
}
