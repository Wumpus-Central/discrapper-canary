n.d(t, {
    $R: () => H,
    A0: () => Q,
    GU: () => X,
    H8: () => K,
    HI: () => Y,
    HW: () => M,
    Ib: () => ei,
    KB: () => ec,
    S2: () => G,
    W6: () => et,
    XM: () => en,
    YC: () => eu,
    YE: () => el,
    h9: () => er,
    iw: () => ee,
    jC: () => U,
    jQ: () => z,
    lT: () => V,
    rd: () => es,
    t4: () => eo,
    uF: () => ed,
    zn: () => J
}),
    n(47120),
    n(724458),
    n(653041);
var a,
    l,
    r = n(192379),
    i = n(216397),
    o = n(764160),
    s = n(808131),
    c = n(757028),
    d = n(694626),
    u = n(855930),
    m = n(385787),
    h = n(566162),
    x = n(567027),
    p = n(461195),
    f = n(857702),
    _ = n(20450),
    b = n(312976),
    g = n(147591),
    v = n(135164),
    j = n(940172),
    C = n(81011),
    N = n(981613),
    T = n(762399),
    E = n(232112),
    y = n(53796),
    S = n(402332),
    k = n(375924),
    I = n(596136),
    Z = n(341901),
    O = n(856308),
    w = n(665352),
    R = n(394900),
    P = n(661105),
    A = n(525169),
    L = n(433517),
    D = n(190558),
    B = n(231338);
let M = {
        sRGB: i.Z,
        A98RGB: o.Z,
        ACEScc: s.Z,
        ACEScg: c.Z,
        HPLuv: d.Z,
        HSL: u.Z,
        HSLuv: m.Z,
        HSV: h.Z,
        HWB: x.Z,
        ICTCP: p.Z,
        JzCzHz: f.Z,
        Jzazbz: _.Z,
        LCH: b.Z,
        LCHuv: g.Z,
        Lab: v.Z,
        Lab_D65: j.Z,
        Luv: C.Z,
        OKLCH: N.Z,
        OKLab: T.Z,
        P3: E.Z,
        ProPhoto: y.Z,
        REC_2020: S.Z,
        REC_2100_HLG: k.Z,
        REC_2100_PQ: I.Z,
        XYZ_D50: Z.Z,
        XYZ_D65: O.Z
    },
    z = Object.fromEntries(Object.keys(M).map((e) => [e, e]));
Object.values(M).forEach((e) => w.Z.register(e));
let { SemanticColors: F } = D.V,
    U = F,
    G = CSS.supports('color', 'color(display-p3 1 0 0)') && CSS.supports('color', 'color(display-p3 1 0 0 / 1)');
function W(e, t) {
    let [n, a] = r.useState(() => {
        let n = L.K.get(e);
        return null != n ? n : t;
    });
    return (
        r.useEffect(() => {
            L.K.set(e, n);
        }, [e, n]),
        [n, a]
    );
}
function H(e) {
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
function V(e, t, n, a, l) {
    return {
        name: t,
        colors: {
            ...e.colors,
            [l]: {
                color: n,
                opacity: a
            }
        },
        highlight: !1
    };
}
function X(e) {
    return {
        ...e,
        highlight: !e.highlight
    };
}
function Y(e) {
    return (0, R.Z)((0, P.Z)(e, i.Z), { format: 'hex' });
}
var K = (((a = {}).TOKENS = 'Tokens'), (a.PALETTES = 'Palettes'), a);
function J() {
    return (function (e, t) {
        let [n, a] = W(''.concat(e, '-states'), [t]),
            [l, i] = W(''.concat(e, '-index'), 0),
            o = n[l],
            s = r.useCallback(
                (e) => {
                    a(['function' == typeof e ? e(o) : e, ...n].slice(0, 20)), i(0);
                },
                [i, a, n, o]
            ),
            c = r.useCallback(() => {
                i(Math.min(n.length - 1, l + 1));
            }, [l, i, n.length]),
            d = r.useCallback(() => {
                i(Math.max(0, l - 1));
            }, [l, i]);
        return [o, s, c, d, l < n.length - 1, l > 0];
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
var ee = (((l = {}).LINEAR = 'Linear'), (l.EASE_IN = 'Ease In'), (l.EASE_OUT = 'Ease Out'), (l.EASE_IN_OUT = 'Ease In Out'), l);
function et(e, t) {
    let n = Q(t),
        a = Object.keys(e).map((e) => parseInt(e.split('-')[1])),
        l = Math.max(...a) / (n.length - 1),
        r = {};
    return (
        n.forEach((e, n) => {
            let i = Math.round(n * l),
                o = a.reduce((e, t) => (Math.abs(t - i) < Math.abs(e - i) ? t : e));
            r[''.concat(t, '-').concat(o)] = ''.concat(t, '-').concat(e);
        }),
        r
    );
}
function en(e) {
    let { name: t, base: n, steps: a = 26, darkness: l, lightness: r, easingStrength: o = 1 } = e,
        s = M[e.colorSpace],
        c = (0, P.Z)(n, s),
        d = (0, A.CD)(c, 'white', 1 - l, {
            space: s,
            outputSpace: i.Z
        }),
        u = (0, A.CD)(c, 'black', 1 - r, {
            space: s,
            outputSpace: i.Z
        }),
        m = Math.floor(a / 2),
        h = a - m,
        x = (0, A.w6)(d, c, {
            steps: m,
            outputSpace: s,
            space: s,
            progression: (e) => e ** o
        }),
        p = (0, A.w6)(u, c, {
            steps: h,
            outputSpace: s,
            space: s,
            progression: (e) => e ** o
        }),
        f = [];
    for (let e = 0; e < m; e++) {
        let t = x(e / m);
        f.push(t);
    }
    f.push(c);
    for (let e = 1; e < h; e++) {
        let t = p(1 - e / h);
        f.push(t);
    }
    return Object.fromEntries(f.map((e, n) => [''.concat(t, '-').concat(n), e]));
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
function el(e, t, n) {
    ea(
        e,
        (e) => ({
            ...e,
            darkness: t
        }),
        n
    );
}
function er(e, t, n) {
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
