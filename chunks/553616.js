var a = r(296585),
    n = {};
for (var s in a) a.hasOwnProperty(s) && (n[a[s]] = s);
var o = (e.exports = {
    rgb: {
        channels: 3,
        labels: 'rgb'
    },
    hsl: {
        channels: 3,
        labels: 'hsl'
    },
    hsv: {
        channels: 3,
        labels: 'hsv'
    },
    hwb: {
        channels: 3,
        labels: 'hwb'
    },
    cmyk: {
        channels: 4,
        labels: 'cmyk'
    },
    xyz: {
        channels: 3,
        labels: 'xyz'
    },
    lab: {
        channels: 3,
        labels: 'lab'
    },
    lch: {
        channels: 3,
        labels: 'lch'
    },
    hex: {
        channels: 1,
        labels: ['hex']
    },
    keyword: {
        channels: 1,
        labels: ['keyword']
    },
    ansi16: {
        channels: 1,
        labels: ['ansi16']
    },
    ansi256: {
        channels: 1,
        labels: ['ansi256']
    },
    hcg: {
        channels: 3,
        labels: ['h', 'c', 'g']
    },
    apple: {
        channels: 3,
        labels: ['r16', 'g16', 'b16']
    },
    gray: {
        channels: 1,
        labels: ['gray']
    }
});
for (var i in o)
    if (o.hasOwnProperty(i)) {
        if (!('channels' in o[i])) throw Error('missing channels property: ' + i);
        if (!('labels' in o[i])) throw Error('missing channel labels property: ' + i);
        if (o[i].labels.length !== o[i].channels) throw Error('channel and label counts mismatch: ' + i);
        var c = o[i].channels,
            l = o[i].labels;
        delete o[i].channels, delete o[i].labels, Object.defineProperty(o[i], 'channels', { value: c }), Object.defineProperty(o[i], 'labels', { value: l });
    }
(o.rgb.hsl = function (e) {
    var t,
        r,
        a = e[0] / 255,
        n = e[1] / 255,
        s = e[2] / 255,
        o = Math.min(a, n, s),
        i = Math.max(a, n, s),
        c = i - o;
    return i === o ? (t = 0) : a === i ? (t = (n - s) / c) : n === i ? (t = 2 + (s - a) / c) : s === i && (t = 4 + (a - n) / c), (t = Math.min(60 * t, 360)) < 0 && (t += 360), (r = (o + i) / 2), [t, 100 * (i === o ? 0 : r <= 0.5 ? c / (i + o) : c / (2 - i - o)), 100 * r];
}),
    (o.rgb.hsv = function (e) {
        var t,
            r,
            a,
            n,
            s,
            o = e[0] / 255,
            i = e[1] / 255,
            c = e[2] / 255,
            l = Math.max(o, i, c),
            u = l - Math.min(o, i, c),
            f = function (e) {
                return (l - e) / 6 / u + 0.5;
            };
        return 0 === u ? (n = s = 0) : ((s = u / l), (t = f(o)), (r = f(i)), (a = f(c)), o === l ? (n = a - r) : i === l ? (n = 1 / 3 + t - a) : c === l && (n = 2 / 3 + r - t), n < 0 ? (n += 1) : n > 1 && (n -= 1)), [360 * n, 100 * s, 100 * l];
    }),
    (o.rgb.hwb = function (e) {
        var t = e[0],
            r = e[1],
            a = e[2];
        return [o.rgb.hsl(e)[0], (1 / 255) * Math.min(t, Math.min(r, a)) * 100, 100 * (a = 1 - (1 / 255) * Math.max(t, Math.max(r, a)))];
    }),
    (o.rgb.cmyk = function (e) {
        var t,
            r = e[0] / 255,
            a = e[1] / 255,
            n = e[2] / 255;
        return (t = Math.min(1 - r, 1 - a, 1 - n)), [100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - a - t) / (1 - t) || 0), 100 * ((1 - n - t) / (1 - t) || 0), 100 * t];
    }),
    (o.rgb.keyword = function (e) {
        var t,
            r = n[e];
        if (r) return r;
        var s = 1 / 0;
        for (var o in a)
            if (a.hasOwnProperty(o)) {
                var i = a[o],
                    c = Math.pow(e[0] - i[0], 2) + Math.pow(e[1] - i[1], 2) + Math.pow(e[2] - i[2], 2);
                c < s && ((s = c), (t = o));
            }
        return t;
    }),
    (o.keyword.rgb = function (e) {
        return a[e];
    }),
    (o.rgb.xyz = function (e) {
        var t = e[0] / 255,
            r = e[1] / 255,
            a = e[2] / 255;
        return [100 * (0.4124 * (t = t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92) + 0.3576 * (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92) + 0.1805 * (a = a > 0.04045 ? Math.pow((a + 0.055) / 1.055, 2.4) : a / 12.92)), 100 * (0.2126 * t + 0.7152 * r + 0.0722 * a), 100 * (0.0193 * t + 0.1192 * r + 0.9505 * a)];
    }),
    (o.rgb.lab = function (e) {
        var t = o.rgb.xyz(e),
            r = t[0],
            a = t[1],
            n = t[2];
        return (r /= 95.047), (a /= 100), (n /= 108.883), (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116), [116 * (a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116) - 16, 500 * (r - a), 200 * (a - (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))];
    }),
    (o.hsl.rgb = function (e) {
        var t,
            r,
            a,
            n,
            s,
            o = e[0] / 360,
            i = e[1] / 100,
            c = e[2] / 100;
        if (0 === i) return [(s = 255 * c), s, s];
        (r = c < 0.5 ? c * (1 + i) : c + i - c * i), (t = 2 * c - r), (n = [0, 0, 0]);
        for (var l = 0; l < 3; l++) (a = o + -((1 / 3) * (l - 1))) < 0 && a++, a > 1 && a--, (s = 6 * a < 1 ? t + (r - t) * 6 * a : 2 * a < 1 ? r : 3 * a < 2 ? t + (r - t) * (2 / 3 - a) * 6 : t), (n[l] = 255 * s);
        return n;
    }),
    (o.hsl.hsv = function (e) {
        var t,
            r = e[0],
            a = e[1] / 100,
            n = e[2] / 100,
            s = a,
            o = Math.max(n, 0.01);
        return (n *= 2), (a *= n <= 1 ? n : 2 - n), (s *= o <= 1 ? o : 2 - o), (t = (n + a) / 2), [r, 100 * (0 === n ? (2 * s) / (o + s) : (2 * a) / (n + a)), 100 * t];
    }),
    (o.hsv.rgb = function (e) {
        var t = e[0] / 60,
            r = e[1] / 100,
            a = e[2] / 100,
            n = Math.floor(t) % 6,
            s = t - Math.floor(t),
            o = 255 * a * (1 - r),
            i = 255 * a * (1 - r * s),
            c = 255 * a * (1 - r * (1 - s));
        switch (((a *= 255), n)) {
            case 0:
                return [a, c, o];
            case 1:
                return [i, a, o];
            case 2:
                return [o, a, c];
            case 3:
                return [o, i, a];
            case 4:
                return [c, o, a];
            case 5:
                return [a, o, i];
        }
    }),
    (o.hsv.hsl = function (e) {
        var t,
            r,
            a,
            n = e[0],
            s = e[1] / 100,
            o = e[2] / 100,
            i = Math.max(o, 0.01);
        return (a = (2 - s) * o), (t = (2 - s) * i), [n, 100 * (r = (r = (s * i) / (t <= 1 ? t : 2 - t)) || 0), 100 * (a /= 2)];
    }),
    (o.hwb.rgb = function (e) {
        var t,
            r,
            a,
            n,
            s,
            o,
            i,
            c = e[0] / 360,
            l = e[1] / 100,
            u = e[2] / 100,
            f = l + u;
        switch ((f > 1 && ((l /= f), (u /= f)), (t = Math.floor(6 * c)), (r = 1 - u), (a = 6 * c - t), (1 & t) != 0 && (a = 1 - a), (n = l + a * (r - l)), t)) {
            default:
            case 6:
            case 0:
                (s = r), (o = n), (i = l);
                break;
            case 1:
                (s = n), (o = r), (i = l);
                break;
            case 2:
                (s = l), (o = r), (i = n);
                break;
            case 3:
                (s = l), (o = n), (i = r);
                break;
            case 4:
                (s = n), (o = l), (i = r);
                break;
            case 5:
                (s = r), (o = l), (i = n);
        }
        return [255 * s, 255 * o, 255 * i];
    }),
    (o.cmyk.rgb = function (e) {
        var t = e[0] / 100,
            r = e[1] / 100,
            a = e[2] / 100,
            n = e[3] / 100;
        return [255 * (1 - Math.min(1, t * (1 - n) + n)), 255 * (1 - Math.min(1, r * (1 - n) + n)), 255 * (1 - Math.min(1, a * (1 - n) + n))];
    }),
    (o.xyz.rgb = function (e) {
        var t,
            r,
            a,
            n = e[0] / 100,
            s = e[1] / 100,
            o = e[2] / 100;
        return (t = 3.2406 * n + -1.5372 * s + -0.4986 * o), (r = -0.9689 * n + 1.8758 * s + 0.0415 * o), (a = 0.0557 * n + -0.204 * s + 1.057 * o), (t = t > 0.0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055 : 12.92 * t), (r = r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r), (a = a > 0.0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - 0.055 : 12.92 * a), [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (r = Math.min(Math.max(0, r), 1)), 255 * (a = Math.min(Math.max(0, a), 1))];
    }),
    (o.xyz.lab = function (e) {
        var t = e[0],
            r = e[1],
            a = e[2];
        return (t /= 95.047), (r /= 100), (a /= 108.883), (t = t > 0.008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116), [116 * (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (t - r), 200 * (r - (a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))];
    }),
    (o.lab.xyz = function (e) {
        var t,
            r,
            a,
            n = e[0],
            s = e[1],
            o = e[2];
        (t = s / 500 + (r = (n + 16) / 116)), (a = r - o / 200);
        var i = Math.pow(r, 3),
            c = Math.pow(t, 3),
            l = Math.pow(a, 3);
        return (r = (i > 0.008856 ? i : (r - 16 / 116) / 7.787) * 100), [(t = (c > 0.008856 ? c : (t - 16 / 116) / 7.787) * 95.047), r, (a = (l > 0.008856 ? l : (a - 16 / 116) / 7.787) * 108.883)];
    }),
    (o.lab.lch = function (e) {
        var t,
            r = e[0],
            a = e[1],
            n = e[2];
        return (t = (360 * Math.atan2(n, a)) / 2 / Math.PI) < 0 && (t += 360), [r, Math.sqrt(a * a + n * n), t];
    }),
    (o.lch.lab = function (e) {
        var t,
            r = e[0],
            a = e[1];
        return [r, a * Math.cos((t = (e[2] / 360) * 2 * Math.PI)), a * Math.sin(t)];
    }),
    (o.rgb.ansi16 = function (e) {
        var t = e[0],
            r = e[1],
            a = e[2],
            n = 1 in arguments ? arguments[1] : o.rgb.hsv(e)[2];
        if (0 === (n = Math.round(n / 50))) return 30;
        var s = 30 + ((Math.round(a / 255) << 2) | (Math.round(r / 255) << 1) | Math.round(t / 255));
        return 2 === n && (s += 60), s;
    }),
    (o.hsv.ansi16 = function (e) {
        return o.rgb.ansi16(o.hsv.rgb(e), e[2]);
    }),
    (o.rgb.ansi256 = function (e) {
        var t = e[0],
            r = e[1],
            a = e[2];
        return t === r && r === a ? (t < 8 ? 16 : t > 248 ? 231 : Math.round(((t - 8) / 247) * 24) + 232) : 16 + 36 * Math.round((t / 255) * 5) + 6 * Math.round((r / 255) * 5) + Math.round((a / 255) * 5);
    }),
    (o.ansi16.rgb = function (e) {
        var t = e % 10;
        if (0 === t || 7 === t) return e > 50 && (t += 3.5), [(t = (t / 10.5) * 255), t, t];
        var r = (~~(e > 50) + 1) * 0.5;
        return [(1 & t) * r * 255, ((t >> 1) & 1) * r * 255, ((t >> 2) & 1) * r * 255];
    }),
    (o.ansi256.rgb = function (e) {
        if (e >= 232) {
            var t,
                r = (e - 232) * 10 + 8;
            return [r, r, r];
        }
        return [(Math.floor((e -= 16) / 36) / 5) * 255, (Math.floor((t = e % 36) / 6) / 5) * 255, ((t % 6) / 5) * 255];
    }),
    (o.rgb.hex = function (e) {
        var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
        return '000000'.substring(t.length) + t;
    }),
    (o.hex.rgb = function (e) {
        var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!t) return [0, 0, 0];
        var r = t[0];
        3 === t[0].length &&
            (r = r
                .split('')
                .map(function (e) {
                    return e + e;
                })
                .join(''));
        var a = parseInt(r, 16);
        return [(a >> 16) & 255, (a >> 8) & 255, 255 & a];
    }),
    (o.rgb.hcg = function (e) {
        var t,
            r,
            a = e[0] / 255,
            n = e[1] / 255,
            s = e[2] / 255,
            o = Math.max(Math.max(a, n), s),
            i = Math.min(Math.min(a, n), s),
            c = o - i;
        return (t = c < 1 ? i / (1 - c) : 0), [360 * (((c <= 0 ? 0 : o === a ? ((n - s) / c) % 6 : o === n ? 2 + (s - a) / c : 4 + (a - n) / c + 4) / 6) % 1), 100 * c, 100 * t];
    }),
    (o.hsl.hcg = function (e) {
        var t = e[1] / 100,
            r = e[2] / 100,
            a = 1,
            n = 0;
        return (a = r < 0.5 ? 2 * t * r : 2 * t * (1 - r)) < 1 && (n = (r - 0.5 * a) / (1 - a)), [e[0], 100 * a, 100 * n];
    }),
    (o.hsv.hcg = function (e) {
        var t = e[1] / 100,
            r = e[2] / 100,
            a = t * r,
            n = 0;
        return a < 1 && (n = (r - a) / (1 - a)), [e[0], 100 * a, 100 * n];
    }),
    (o.hcg.rgb = function (e) {
        var t = e[0] / 360,
            r = e[1] / 100,
            a = e[2] / 100;
        if (0 === r) return [255 * a, 255 * a, 255 * a];
        var n = [0, 0, 0],
            s = (t % 1) * 6,
            o = s % 1,
            i = 1 - o,
            c = 0;
        switch (Math.floor(s)) {
            case 0:
                (n[0] = 1), (n[1] = o), (n[2] = 0);
                break;
            case 1:
                (n[0] = i), (n[1] = 1), (n[2] = 0);
                break;
            case 2:
                (n[0] = 0), (n[1] = 1), (n[2] = o);
                break;
            case 3:
                (n[0] = 0), (n[1] = i), (n[2] = 1);
                break;
            case 4:
                (n[0] = o), (n[1] = 0), (n[2] = 1);
                break;
            default:
                (n[0] = 1), (n[1] = 0), (n[2] = i);
        }
        return (c = (1 - r) * a), [(r * n[0] + c) * 255, (r * n[1] + c) * 255, (r * n[2] + c) * 255];
    }),
    (o.hcg.hsv = function (e) {
        var t = e[1] / 100,
            r = t + (e[2] / 100) * (1 - t),
            a = 0;
        return r > 0 && (a = t / r), [e[0], 100 * a, 100 * r];
    }),
    (o.hcg.hsl = function (e) {
        var t = e[1] / 100,
            r = (e[2] / 100) * (1 - t) + 0.5 * t,
            a = 0;
        return r > 0 && r < 0.5 ? (a = t / (2 * r)) : r >= 0.5 && r < 1 && (a = t / (2 * (1 - r))), [e[0], 100 * a, 100 * r];
    }),
    (o.hcg.hwb = function (e) {
        var t = e[1] / 100,
            r = t + (e[2] / 100) * (1 - t);
        return [e[0], (r - t) * 100, (1 - r) * 100];
    }),
    (o.hwb.hcg = function (e) {
        var t = e[1] / 100,
            r = 1 - e[2] / 100,
            a = r - t,
            n = 0;
        return a < 1 && (n = (r - a) / (1 - a)), [e[0], 100 * a, 100 * n];
    }),
    (o.apple.rgb = function (e) {
        return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255];
    }),
    (o.rgb.apple = function (e) {
        return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535];
    }),
    (o.gray.rgb = function (e) {
        return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
    }),
    (o.gray.hsl = o.gray.hsv =
        function (e) {
            return [0, 0, e[0]];
        }),
    (o.gray.hwb = function (e) {
        return [0, 100, e[0]];
    }),
    (o.gray.cmyk = function (e) {
        return [0, 0, 0, e[0]];
    }),
    (o.gray.lab = function (e) {
        return [e[0], 0, 0];
    }),
    (o.gray.hex = function (e) {
        var t = 255 & Math.round((e[0] / 100) * 255),
            r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
        return '000000'.substring(r.length) + r;
    }),
    (o.rgb.gray = function (e) {
        return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
    });
