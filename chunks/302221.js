r.d(n, {
    AZ: function () {
        return x;
    },
    BM: function () {
        return G;
    },
    Cj: function () {
        return f;
    },
    WY: function () {
        return O;
    },
    YD: function () {
        return k;
    },
    ZJ: function () {
        return g;
    },
    aD: function () {
        return _;
    },
    j: function () {
        return P;
    },
    k8: function () {
        return M;
    },
    oo: function () {
        return p;
    },
    pz: function () {
        return m;
    },
    vq: function () {
        return E;
    },
    xj: function () {
        return B;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(653041);
var s = r(688619),
    l = r.n(s),
    u = r(866442);
r(710845);
var c = r(564334),
    d = r(388032);
function f(e, n) {
    let r, i, a, o;
    if (7 === e.length) return e + ((255 * n) | 0).toString(16).padStart(2, '0').toUpperCase();
    let s = '#' === e.charAt(0) ? e.slice(1) : e;
    switch (s.length) {
        case 3:
            return (r = s.charAt(0)), (i = s.charAt(1)), (a = s.charAt(2)), (r += r), (i += i), (a += a), (o = ((255 * n) | 0).toString(16).padStart(2, '0').toUpperCase()), '#' + r + i + a + o;
        case 4:
            (r = s.charAt(0)), (i = s.charAt(1)), (a = s.charAt(2)), (o = s.charAt(3)), (r += r), (i += i), (a += a), (o += o);
            let l = (parseInt(o, 16) / 255) * n,
                u = ((255 * l) | 0).toString(16).padStart(2, '0').toUpperCase();
            return '#' + r + i + a + u;
        case 6:
            return '#' + s + ((255 * n) | 0).toString(16).padStart(2, '0').toUpperCase();
        case 8:
            let c = '#' + s.slice(0, 6);
            return c + (((parseInt(s.slice(6), 16) / 255) * n * 255) | 0).toString(16).padStart(2, '0').toUpperCase();
        default:
            throw Error('Invalid hex color format');
    }
}
function p(e) {
    let [n, r, i] = l()(e).rgb();
    return {
        r: n,
        g: r,
        b: i
    };
}
function h(e) {
    let [n, r, i, a] = chroma(e).rgba();
    return {
        r: n,
        g: r,
        b: i,
        a
    };
}
function _(e, n) {
    let { r, g: i, b: a } = p(e);
    return 'rgba('.concat(r, ', ').concat(i, ', ').concat(a, ', ').concat(n, ')');
}
function m(e, n, r) {
    let i = Math.min((e /= 255), (n /= 255), (r /= 255)),
        a = Math.max(e, n, r),
        o = a - i,
        s = 0,
        l = 0,
        u = 0;
    return (
        (s = Math.round(60 * (s = 0 === o ? 0 : a === e ? ((n - r) / o) % 6 : a === n ? (r - e) / o + 2 : (e - n) / o + 4))) < 0 && (s += 360),
        (u = (a + i) / 2),
        (l = +(100 * (l = 0 === o ? 0 : o / (1 - Math.abs(2 * u - 1)))).toFixed(1)),
        {
            h: s,
            s: l,
            l: (u = +(100 * u).toFixed(1))
        }
    );
}
function g(e, n, r) {
    return 'hsl('.concat(e, ', calc(var(--saturation-factor, 1) * ').concat(n, '%), ').concat(r, '%)');
}
function E(e, n, r) {
    return '#' + (16777216 + (e << 16) + (n << 8) + r).toString(16).slice(1);
}
function v(e, n, r) {
    let i = (n * Math.min((r /= 100), 1 - r)) / 100,
        a = (n) => {
            let a = (n + e / 30) % 12;
            return Math.round(255 * (r - i * Math.max(Math.min(a - 3, 9 - a, 1), -1)))
                .toString(16)
                .padStart(2, '0');
        };
    return '#'.concat(a(0)).concat(a(8)).concat(a(4));
}
let y = {
    '#1abc9c': () => d.intl.string(d.t.fBawRk),
    '#2ecc71': () => d.intl.string(d.t.hvv3QU),
    '#3498db': () => d.intl.string(d.t.JwX6JS),
    '#9b59b6': () => d.intl.string(d.t.H3xljo),
    '#e91e63': () => d.intl.string(d.t.X9izyc),
    '#11806a': () => d.intl.string(d.t.Kw7K29),
    '#1f8b4c': () => d.intl.string(d.t.z5AZKS),
    '#206694': () => d.intl.string(d.t.JqBqKy),
    '#71368a': () => d.intl.string(d.t.edPgnJ),
    '#ad1457': () => d.intl.string(d.t.ti7gsb),
    '#f1c40f': () => d.intl.string(d.t['H9jz+f']),
    '#e67e22': () => d.intl.string(d.t.UmsfHB),
    '#e74c3c': () => d.intl.string(d.t.GoDlAA),
    '#95a5a6': () => d.intl.string(d.t['9GpDYG']),
    '#607d8b': () => d.intl.string(d.t.lwrNQE),
    '#c27c0e': () => d.intl.string(d.t.Lf10GB),
    '#a84300': () => d.intl.string(d.t['H+AjY2']),
    '#992d22': () => d.intl.string(d.t.XTkde3),
    '#979c9f': () => d.intl.string(d.t.Ve0Lio),
    '#546e7a': () => d.intl.string(d.t.BwbOAA),
    '#99aab5': () => d.intl.string(d.t['/po5rK']),
    '#5865f2': () => d.intl.string(d.t['Cn/LJy'])
};
function b(e) {
    let n, r, i, a, o;
    var s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    if (null == s) return null;
    var l = parseInt(s[1], 16),
        u = parseInt(s[2], 16),
        c = parseInt(s[3], 16);
    let d = l / 255,
        f = u / 255,
        p = c / 255,
        h = Math.max(d, f, p),
        _ = h - Math.min(d, f, p),
        m = (e) => (h - e) / 6 / _ + 0.5,
        g = (e) => Math.round(100 * e) / 100;
    return (
        0 === _ ? (a = o = 0) : ((o = _ / h), (n = m(d)), (r = m(f)), (i = m(p)), (a = d === h ? i - r : f === h ? 1 / 3 + n - i : p === h ? 2 / 3 + r - n : 0) < 0 ? (a += 1) : a > 1 && (a -= 1)),
        {
            h: Math.round(360 * a),
            s: g(100 * o),
            v: g(100 * h)
        }
    );
}
function I(e, n, r) {
    return p(v(e, n, r));
}
let T = 30,
    S = 80,
    A = 20,
    C = 30,
    N = 40,
    R = 15;
function O(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        r = [],
        { h: i, s: a, l: o } = m(e[0], e[1], e[2]),
        s = i,
        l = a,
        u = o;
    l < T && (l += C), u > S && (u -= N), u < A && (u += R);
    let c = 360 / (n + 1);
    for (; r.length < n; ) {
        (s -= c) < 0 && (s += 360);
        let { r: e, g: n, b: i } = I(s, l, u);
        r.push([e, n, i]);
    }
    return r;
}
function D(e) {
    let { red: n, green: r, blue: i } = e,
        a = [n, r, i].map((e) => ((e /= 255) <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)));
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}
function L(e) {
    let n = e[0],
        r = e[1],
        i = D(n),
        a = D(r);
    return (Math.max(i, a) + 0.05) / (Math.min(i, a) + 0.05);
}
function x(e, n, r) {
    let i, a;
    let o = Math.max((e /= 255), (n /= 255), (r /= 255)),
        s = Math.min(e, n, r),
        l = (o + s) / 2;
    if (o === s) i = a = 0;
    else {
        let u = o - s;
        switch (((a = l > 0.5 ? u / (2 - o - s) : u / (o + s)), o)) {
            case e:
                i = (n - r) / u + (n < r ? 6 : 0);
                break;
            case n:
                i = (r - e) / u + 2;
                break;
            case r:
                i = (e - n) / u + 4;
        }
        null == i ? (i = 0) : (i /= 6);
    }
    return {
        hue: 360 * i,
        saturation: a,
        lightness: l,
        alpha: 1
    };
}
function w(e, n, r) {
    let i, a, o;
    if (((e /= 360), 0 === n)) i = a = o = r;
    else {
        let s = function (e, n, r) {
                return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (n - e) * 6 * r : r < 0.5 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e;
            },
            l = r < 0.5 ? r * (1 + n) : r + n - r * n,
            u = 2 * r - l;
        (i = s(u, l, e + 1 / 3)), (a = s(u, l, e)), (o = s(u, l, e - 1 / 3));
    }
    return new c.Z(Math.round(255 * i), Math.round(255 * a), Math.round(255 * o), 1);
}
function P(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = x(e.red, e.green, e.blue);
    return r ? (i.lightness = i.lightness + n > 1 ? 0.9 : i.lightness + n) : (i.lightness = i.lightness - n < 0 ? 0.1 : i.lightness - n), w(i.hue, i.saturation, i.lightness);
}
function M(e) {
    let { colors: n, ratio: r = 5, saturationFactor: i = 1 } = e;
    if (n.length < 2) return;
    let a = n[0],
        o = n[1];
    if (null == o || null == a) return;
    let s = (0, u._i)(o.toHexString()),
        l = (0, u.Bd)(s) > 0.5,
        c = L([a, o]),
        d = x(a.red, a.green, a.blue);
    for (d.saturation *= i; c < r && null != d; ) {
        if (l) {
            if (d.lightness < 0.95) d.lightness += 0.05;
            else break;
        } else if (d.lightness > 0.05) d.lightness -= 0.05;
        else break;
        c = L([w(d.hue, d.saturation, d.lightness), n[1]]);
    }
    return w(d.hue, d.saturation, d.lightness);
}
function k(e) {
    return e
        .slice(0, 3)
        .map((e) => {
            var n;
            return {
                hex: e,
                hsv:
                    null !== (n = b(e)) && void 0 !== n
                        ? n
                        : {
                              h: 0,
                              s: 0,
                              v: 0
                          }
            };
        })
        .sort(U)[0].hex;
}
function U(e, n) {
    let r = e.hsv,
        i = n.hsv;
    return i.s + i.v - (r.s + r.v);
}
function B(e) {
    var n;
    let { colorRGB: r, saturationFactor: i = 1 } = e;
    if (null == r) return r;
    let a = x(r.red, r.green, r.blue);
    if (null == a) return null == r ? void 0 : r.toHexString();
    return null === (n = w(a.hue, a.saturation * i, a.lightness)) || void 0 === n ? void 0 : n.toHexString();
}
function G(e, n, r) {
    let i = parseInt(e.substring(1, 3), 16),
        a = parseInt(e.substring(3, 5), 16),
        o = parseInt(e.substring(5, 7), 16),
        s = parseInt(n.substring(1, 3), 16),
        l = parseInt(n.substring(3, 5), 16),
        u = parseInt(n.substring(5, 7), 16),
        c = Math.round(i + (s - i) * r)
            .toString(16)
            .padStart(2, '0'),
        d = Math.round(a + (l - a) * r)
            .toString(16)
            .padStart(2, '0'),
        f = Math.round(o + (u - o) * r)
            .toString(16)
            .padStart(2, '0');
    return '#'.concat(c).concat(d).concat(f);
}
