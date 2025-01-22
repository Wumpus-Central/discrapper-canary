n.d(t, {
    $R: function () {
        return K;
    },
    A0: function () {
        return ee;
    },
    GU: function () {
        return X;
    },
    H8: function () {
        return a;
    },
    HI: function () {
        return $;
    },
    HW: function () {
        return H;
    },
    Ib: function () {
        return ei;
    },
    KB: function () {
        return ec;
    },
    S2: function () {
        return V;
    },
    W6: function () {
        return et;
    },
    XM: function () {
        return en;
    },
    YC: function () {
        return eu;
    },
    YE: function () {
        return er;
    },
    h9: function () {
        return el;
    },
    iw: function () {
        return r;
    },
    jC: function () {
        return z;
    },
    jQ: function () {
        return G;
    },
    lT: function () {
        return Y;
    },
    rd: function () {
        return es;
    },
    t4: function () {
        return eo;
    },
    uF: function () {
        return ed;
    },
    zn: function () {
        return q;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var a,
    r,
    l,
    i,
    o = n(192379),
    s = n(216397),
    c = n(764160),
    d = n(808131),
    u = n(757028),
    h = n(694626),
    m = n(855930),
    x = n(385787),
    f = n(566162),
    p = n(567027),
    b = n(461195),
    g = n(857702),
    v = n(20450),
    j = n(312976),
    C = n(147591),
    _ = n(135164),
    T = n(940172),
    S = n(81011),
    N = n(981613),
    y = n(762399),
    I = n(232112),
    E = n(53796),
    Z = n(402332),
    k = n(375924),
    w = n(596136),
    O = n(341901),
    R = n(856308),
    B = n(665352),
    P = n(394900),
    L = n(661105),
    A = n(525169),
    F = n(433517),
    D = n(190558),
    M = n(231338);
let H = {
        sRGB: s.Z,
        A98RGB: c.Z,
        ACEScc: d.Z,
        ACEScg: u.Z,
        HPLuv: h.Z,
        HSL: m.Z,
        HSLuv: x.Z,
        HSV: f.Z,
        HWB: p.Z,
        ICTCP: b.Z,
        JzCzHz: g.Z,
        Jzazbz: v.Z,
        LCH: j.Z,
        LCHuv: C.Z,
        Lab: _.Z,
        Lab_D65: T.Z,
        Luv: S.Z,
        OKLCH: N.Z,
        OKLab: y.Z,
        P3: I.Z,
        ProPhoto: E.Z,
        REC_2020: Z.Z,
        REC_2100_HLG: k.Z,
        REC_2100_PQ: w.Z,
        XYZ_D50: O.Z,
        XYZ_D65: R.Z
    },
    G = Object.fromEntries(Object.keys(H).map((e) => [e, e]));
Object.values(H).forEach((e) => B.Z.register(e));
let { SemanticColors: U } = D.V,
    z = U,
    V = CSS.supports('color', 'color(display-p3 1 0 0)') && CSS.supports('color', 'color(display-p3 1 0 0 / 1)');
function W(e, t) {
    let [n, a] = o.useState(() => {
        let n = F.K.get(e);
        return null != n ? n : t;
    });
    return (
        o.useEffect(() => {
            F.K.set(e, n);
        }, [e, n]),
        [n, a]
    );
}
function K(e) {
    let t = z[e];
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
function Y(e, t, n, a, r) {
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
function X(e) {
    return {
        ...e,
        highlight: !e.highlight
    };
}
function $(e) {
    return (0, P.Z)((0, L.Z)(e, s.Z), { format: 'hex' });
}
function q() {
    return (function (e, t) {
        let [n, a] = W(''.concat(e, '-states'), [t]),
            [r, l] = W(''.concat(e, '-index'), 0),
            i = n[r],
            s = o.useCallback(
                (e) => {
                    a(['function' == typeof e ? e(i) : e, ...n].slice(0, 20)), l(0);
                },
                [l, a, n, i]
            ),
            c = o.useCallback(() => {
                l(Math.min(n.length - 1, r + 1));
            }, [r, l, n.length]),
            d = o.useCallback(() => {
                l(Math.max(0, r - 1));
            }, [r, l]),
            u = r < n.length - 1;
        return [i, s, c, d, u, r > 0];
    })('color-override-9-24-2024', {
        semanticColorOverrides: {},
        rawColorOverrides: {},
        tab: 'Tokens',
        scales: []
    });
}
((l = a || (a = {})).TOKENS = 'Tokens'), (l.PALETTES = 'Palettes');
let J = [100, 130, 160, 200, 230, 260, 300, 330, 345, 360, 400, 430, 460, 500, 530, 560, 600, 630, 660, 700, 730, 760, 800, 830, 860, 900],
    Q = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
function ee(e) {
    return 'plum' === e ? Q : J;
}
function et(e, t) {
    let n = ee(t),
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
    let { name: t, base: n, steps: a = 26, darkness: r, lightness: l, easingStrength: i = 1 } = e,
        o = H[e.colorSpace],
        c = (0, L.Z)(n, o),
        d = (0, A.CD)(c, 'white', 1 - r, {
            space: o,
            outputSpace: s.Z
        }),
        u = (0, A.CD)(c, 'black', 1 - l, {
            space: o,
            outputSpace: s.Z
        }),
        h = Math.floor(a / 2),
        m = a - h,
        x = (0, A.w6)(d, c, {
            steps: h,
            outputSpace: o,
            space: o,
            progression: (e) => e ** i
        }),
        f = (0, A.w6)(u, c, {
            steps: m,
            outputSpace: o,
            space: o,
            progression: (e) => e ** i
        }),
        p = [];
    for (let e = 0; e < h; e++) {
        let t = x(e / h);
        p.push(t);
    }
    p.push(c);
    for (let e = 1; e < m; e++) {
        let t = f(1 - e / m);
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
((i = r || (r = {})).LINEAR = 'Linear'), (i.EASE_IN = 'Ease In'), (i.EASE_OUT = 'Ease Out'), (i.EASE_IN_OUT = 'Ease In Out');
