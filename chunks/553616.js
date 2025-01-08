var a = r(296585),
    n = {};
for (var o in a) a.hasOwnProperty(o) && (n[a[o]] = o);
var s = (e.exports = {
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
for (var i in s)
    if (s.hasOwnProperty(i)) {
        if (!('channels' in s[i])) throw Error('missing channels property: ' + i);
        if (!('labels' in s[i])) throw Error('missing channel labels property: ' + i);
        if (s[i].labels.length !== s[i].channels) throw Error('channel and label counts mismatch: ' + i);
        var c = s[i].channels,
            u = s[i].labels;
        delete s[i].channels, delete s[i].labels, Object.defineProperty(s[i], 'channels', { value: c }), Object.defineProperty(s[i], 'labels', { value: u });
    }
(s.rgb.hsl = function (e) {
    var t,
        r,
        a,
        n = e[0] / 255,
        o = e[1] / 255,
        s = e[2] / 255,
        i = Math.min(n, o, s),
        c = Math.max(n, o, s),
        u = c - i;
    return c === i ? (t = 0) : n === c ? (t = (o - s) / u) : o === c ? (t = 2 + (s - n) / u) : s === c && (t = 4 + (n - o) / u), (t = Math.min(60 * t, 360)) < 0 && (t += 360), (a = (i + c) / 2), [t, 100 * (r = c === i ? 0 : a <= 0.5 ? u / (c + i) : u / (2 - c - i)), 100 * a];
}),
    (s.rgb.hsv = function (e) {
        var t,
            r,
            a,
            n,
            o,
            s = e[0] / 255,
            i = e[1] / 255,
            c = e[2] / 255,
            u = Math.max(s, i, c),
            l = u - Math.min(s, i, c),
            f = function (e) {
                return (u - e) / 6 / l + 0.5;
            };
        return 0 === l ? (n = o = 0) : ((o = l / u), (t = f(s)), (r = f(i)), (a = f(c)), s === u ? (n = a - r) : i === u ? (n = 1 / 3 + t - a) : c === u && (n = 2 / 3 + r - t), n < 0 ? (n += 1) : n > 1 && (n -= 1)), [360 * n, 100 * o, 100 * u];
    }),
    (s.rgb.hwb = function (e) {
        var t = e[0],
            r = e[1],
            a = e[2],
            n = s.rgb.hsl(e)[0];
        return [n, (1 / 255) * Math.min(t, Math.min(r, a)) * 100, 100 * (a = 1 - (1 / 255) * Math.max(t, Math.max(r, a)))];
    }),
    (s.rgb.cmyk = function (e) {
        var t,
            r = e[0] / 255,
            a = e[1] / 255,
            n = e[2] / 255;
        return (t = Math.min(1 - r, 1 - a, 1 - n)), [100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - a - t) / (1 - t) || 0), 100 * ((1 - n - t) / (1 - t) || 0), 100 * t];
    });
(s.rgb.keyword = function (e) {
    var t,
        r = n[e];
    if (r) return r;
    var o = 1 / 0;
    for (var s in a)
        if (a.hasOwnProperty(s)) {
            var i,
                c,
                u = a[s];
            var l = ((i = e), (c = u), Math.pow(i[0] - c[0], 2) + Math.pow(i[1] - c[1], 2) + Math.pow(i[2] - c[2], 2));
            l < o && ((o = l), (t = s));
        }
    return t;
}),
    (s.keyword.rgb = function (e) {
        return a[e];
    }),
    (s.rgb.xyz = function (e) {
        var t = e[0] / 255,
            r = e[1] / 255,
            a = e[2] / 255;
        return [100 * (0.4124 * (t = t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92) + 0.3576 * (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92) + 0.1805 * (a = a > 0.04045 ? Math.pow((a + 0.055) / 1.055, 2.4) : a / 12.92)), 100 * (0.2126 * t + 0.7152 * r + 0.0722 * a), 100 * (0.0193 * t + 0.1192 * r + 0.9505 * a)];
    }),
    (s.rgb.lab = function (e) {
        var t = s.rgb.xyz(e),
            r = t[0],
            a = t[1],
            n = t[2];
        return (r /= 95.047), (a /= 100), (n /= 108.883), (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116), [116 * (a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116) - 16, 500 * (r - a), 200 * (a - (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))];
    }),
    (s.hsl.rgb = function (e) {
        var t,
            r,
            a,
            n,
            o,
            s = e[0] / 360,
            i = e[1] / 100,
            c = e[2] / 100;
        if (0 === i) return [(o = 255 * c), o, o];
        (r = c < 0.5 ? c * (1 + i) : c + i - c * i), (t = 2 * c - r), (n = [0, 0, 0]);
        for (var u = 0; u < 3; u++) (a = s + -((1 / 3) * (u - 1))) < 0 && a++, a > 1 && a--, (o = 6 * a < 1 ? t + (r - t) * 6 * a : 2 * a < 1 ? r : 3 * a < 2 ? t + (r - t) * (2 / 3 - a) * 6 : t), (n[u] = 255 * o);
        return n;
    }),
    (s.hsl.hsv = function (e) {
        var t,
            r = e[0],
            a = e[1] / 100,
            n = e[2] / 100,
            o = a,
            s = Math.max(n, 0.01);
        return (n *= 2), (a *= n <= 1 ? n : 2 - n), (o *= s <= 1 ? s : 2 - s), (t = (n + a) / 2), [r, 100 * (0 === n ? (2 * o) / (s + o) : (2 * a) / (n + a)), 100 * t];
    }),
    (s.hsv.rgb = function (e) {
        var t = e[0] / 60,
            r = e[1] / 100,
            a = e[2] / 100,
            n = Math.floor(t) % 6,
            o = t - Math.floor(t),
            s = 255 * a * (1 - r),
            i = 255 * a * (1 - r * o),
            c = 255 * a * (1 - r * (1 - o));
        switch (((a *= 255), n)) {
            case 0:
                return [a, c, s];
            case 1:
                return [i, a, s];
            case 2:
                return [s, a, c];
            case 3:
                return [s, i, a];
            case 4:
                return [c, s, a];
            case 5:
                return [a, s, i];
        }
    }),
    (s.hsv.hsl = function (e) {
        var t,
            r,
            a,
            n = e[0],
            o = e[1] / 100,
            s = e[2] / 100,
            i = Math.max(s, 0.01);
        return (a = (2 - o) * s), (t = (2 - o) * i), (r = (r = (o * i) / (t <= 1 ? t : 2 - t)) || 0), [n, 100 * r, 100 * (a /= 2)];
    }),
    (s.hwb.rgb = function (e) {
        var t,
            r,
            a,
            n,
            o,
            s,
            i,
            c = e[0] / 360,
            u = e[1] / 100,
            l = e[2] / 100,
            f = u + l;
        switch ((f > 1 && ((u /= f), (l /= f)), (t = Math.floor(6 * c)), (r = 1 - l), (a = 6 * c - t), (1 & t) != 0 && (a = 1 - a), (n = u + a * (r - u)), t)) {
            default:
            case 6:
            case 0:
                (o = r), (s = n), (i = u);
                break;
            case 1:
                (o = n), (s = r), (i = u);
                break;
            case 2:
                (o = u), (s = r), (i = n);
                break;
            case 3:
                (o = u), (s = n), (i = r);
                break;
            case 4:
                (o = n), (s = u), (i = r);
                break;
            case 5:
                (o = r), (s = u), (i = n);
        }
        return [255 * o, 255 * s, 255 * i];
    }),
    (s.cmyk.rgb = function (e) {
        var t = e[0] / 100,
            r = e[1] / 100,
            a = e[2] / 100,
            n = e[3] / 100;
        return [255 * (1 - Math.min(1, t * (1 - n) + n)), 255 * (1 - Math.min(1, r * (1 - n) + n)), 255 * (1 - Math.min(1, a * (1 - n) + n))];
    }),
    (s.xyz.rgb = function (e) {
        var t,
            r,
            a,
            n = e[0] / 100,
            o = e[1] / 100,
            s = e[2] / 100;
        return (t = 3.2406 * n + -1.5372 * o + -0.4986 * s), (r = -0.9689 * n + 1.8758 * o + 0.0415 * s), (a = 0.0557 * n + -0.204 * o + 1.057 * s), (t = t > 0.0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055 : 12.92 * t), (r = r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r), (a = a > 0.0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - 0.055 : 12.92 * a), [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (r = Math.min(Math.max(0, r), 1)), 255 * (a = Math.min(Math.max(0, a), 1))];
    }),
    (s.xyz.lab = function (e) {
        var t = e[0],
            r = e[1],
            a = e[2];
        return (t /= 95.047), (r /= 100), (a /= 108.883), (t = t > 0.008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116), [116 * (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (t - r), 200 * (r - (a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))];
    }),
    (s.lab.xyz = function (e) {
        var t,
            r,
            a,
            n = e[0],
            o = e[1],
            s = e[2];
        (t = o / 500 + (r = (n + 16) / 116)), (a = r - s / 200);
        var i = Math.pow(r, 3),
            c = Math.pow(t, 3),
            u = Math.pow(a, 3);
        return (r = (i > 0.008856 ? i : (r - 16 / 116) / 7.787) * 100), [(t = (c > 0.008856 ? c : (t - 16 / 116) / 7.787) * 95.047), r, (a = (u > 0.008856 ? u : (a - 16 / 116) / 7.787) * 108.883)];
    }),
    (s.lab.lch = function (e) {
        var t,
            r = e[0],
            a = e[1],
            n = e[2];
        return (t = (360 * Math.atan2(n, a)) / 2 / Math.PI) < 0 && (t += 360), [r, Math.sqrt(a * a + n * n), t];
    }),
    (s.lch.lab = function (e) {
        var t,
            r,
            a = e[0],
            n = e[1];
        return (t = n * Math.cos((r = (e[2] / 360) * 2 * Math.PI))), [a, t, n * Math.sin(r)];
    }),
    (s.rgb.ansi16 = function (e) {
        var t = e[0],
            r = e[1],
            a = e[2],
            n = 1 in arguments ? arguments[1] : s.rgb.hsv(e)[2];
        if (0 === (n = Math.round(n / 50))) return 30;
        var o = 30 + ((Math.round(a / 255) << 2) | (Math.round(r / 255) << 1) | Math.round(t / 255));
        return 2 === n && (o += 60), o;
    }),
    (s.hsv.ansi16 = function (e) {
        return s.rgb.ansi16(s.hsv.rgb(e), e[2]);
    }),
    (s.rgb.ansi256 = function (e) {
        var t = e[0],
            r = e[1],
            a = e[2];
        if (t === r && r === a) return t < 8 ? 16 : t > 248 ? 231 : Math.round(((t - 8) / 247) * 24) + 232;
        return 16 + 36 * Math.round((t / 255) * 5) + 6 * Math.round((r / 255) * 5) + Math.round((a / 255) * 5);
    }),
    (s.ansi16.rgb = function (e) {
        var t = e % 10;
        if (0 === t || 7 === t) return e > 50 && (t += 3.5), [(t = (t / 10.5) * 255), t, t];
        var r = (~~(e > 50) + 1) * 0.5;
        return [(1 & t) * r * 255, ((t >> 1) & 1) * r * 255, ((t >> 2) & 1) * r * 255];
    }),
    (s.ansi256.rgb = function (e) {
        if (e >= 232) {
            var t,
                r = (e - 232) * 10 + 8;
            return [r, r, r];
        }
        var a = (Math.floor((e -= 16) / 36) / 5) * 255,
            n = (Math.floor((t = e % 36) / 6) / 5) * 255;
        return [a, n, ((t % 6) / 5) * 255];
    }),
    (s.rgb.hex = function (e) {
        var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
        return '000000'.substring(t.length) + t;
    }),
    (s.hex.rgb = function (e) {
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
    (s.rgb.hcg = function (e) {
        var t,
            r,
            a = e[0] / 255,
            n = e[1] / 255,
            o = e[2] / 255,
            s = Math.max(Math.max(a, n), o),
            i = Math.min(Math.min(a, n), o),
            c = s - i;
        return (t = c < 1 ? i / (1 - c) : 0), [360 * (r = ((c <= 0 ? 0 : s === a ? ((n - o) / c) % 6 : s === n ? 2 + (o - a) / c : 4 + (a - n) / c + 4) / 6) % 1), 100 * c, 100 * t];
    }),
    (s.hsl.hcg = function (e) {
        var t = e[1] / 100,
            r = e[2] / 100,
            a = 1,
            n = 0;
        return (a = r < 0.5 ? 2 * t * r : 2 * t * (1 - r)) < 1 && (n = (r - 0.5 * a) / (1 - a)), [e[0], 100 * a, 100 * n];
    }),
    (s.hsv.hcg = function (e) {
        var t = e[1] / 100,
            r = e[2] / 100,
            a = t * r,
            n = 0;
        return a < 1 && (n = (r - a) / (1 - a)), [e[0], 100 * a, 100 * n];
    }),
    (s.hcg.rgb = function (e) {
        var t = e[0] / 360,
            r = e[1] / 100,
            a = e[2] / 100;
        if (0 === r) return [255 * a, 255 * a, 255 * a];
        var n = [0, 0, 0],
            o = (t % 1) * 6,
            s = o % 1,
            i = 1 - s,
            c = 0;
        switch (Math.floor(o)) {
            case 0:
                (n[0] = 1), (n[1] = s), (n[2] = 0);
                break;
            case 1:
                (n[0] = i), (n[1] = 1), (n[2] = 0);
                break;
            case 2:
                (n[0] = 0), (n[1] = 1), (n[2] = s);
                break;
            case 3:
                (n[0] = 0), (n[1] = i), (n[2] = 1);
                break;
            case 4:
                (n[0] = s), (n[1] = 0), (n[2] = 1);
                break;
            default:
                (n[0] = 1), (n[1] = 0), (n[2] = i);
        }
        return (c = (1 - r) * a), [(r * n[0] + c) * 255, (r * n[1] + c) * 255, (r * n[2] + c) * 255];
    }),
    (s.hcg.hsv = function (e) {
        var t = e[1] / 100,
            r = t + (e[2] / 100) * (1 - t),
            a = 0;
        return r > 0 && (a = t / r), [e[0], 100 * a, 100 * r];
    }),
    (s.hcg.hsl = function (e) {
        var t = e[1] / 100,
            r = (e[2] / 100) * (1 - t) + 0.5 * t,
            a = 0;
        return r > 0 && r < 0.5 ? (a = t / (2 * r)) : r >= 0.5 && r < 1 && (a = t / (2 * (1 - r))), [e[0], 100 * a, 100 * r];
    }),
    (s.hcg.hwb = function (e) {
        var t = e[1] / 100,
            r = t + (e[2] / 100) * (1 - t);
        return [e[0], (r - t) * 100, (1 - r) * 100];
    }),
    (s.hwb.hcg = function (e) {
        var t = e[1] / 100,
            r = 1 - e[2] / 100,
            a = r - t,
            n = 0;
        return a < 1 && (n = (r - a) / (1 - a)), [e[0], 100 * a, 100 * n];
    }),
    (s.apple.rgb = function (e) {
        return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255];
    }),
    (s.rgb.apple = function (e) {
        return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535];
    }),
    (s.gray.rgb = function (e) {
        return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
    }),
    (s.gray.hsl = s.gray.hsv =
        function (e) {
            return [0, 0, e[0]];
        }),
    (s.gray.hwb = function (e) {
        return [0, 100, e[0]];
    }),
    (s.gray.cmyk = function (e) {
        return [0, 0, 0, e[0]];
    }),
    (s.gray.lab = function (e) {
        return [e[0], 0, 0];
    }),
    (s.gray.hex = function (e) {
        var t = 255 & Math.round((e[0] / 100) * 255),
            r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
        return '000000'.substring(r.length) + r;
    }),
    (s.rgb.gray = function (e) {
        return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
    });
