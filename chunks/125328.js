var n = Array,
    r = Math.abs,
    e = Math.pow,
    o = Math.floor,
    i = Math.log,
    u = Math.LN2;
t.exports = {
    pack: function (t, c, a) {
        var f,
            s,
            l,
            p = n(a),
            d = 8 * a - c - 1,
            _ = (1 << d) - 1,
            h = _ >> 1,
            y = 23 === c ? e(2, -24) - e(2, -77) : 0,
            b = +(t < 0 || (0 === t && 1 / t < 0)),
            g = 0;
        for ((t = r(t)) != t || t === 1 / 0 ? ((s = +(t != t)), (f = _)) : ((l = e(2, -(f = o(i(t) / u)))), t * l < 1 && (f--, (l *= 2)), f + h >= 1 ? (t += y / l) : (t += y * e(2, 1 - h)), t * l >= 2 && (f++, (l /= 2)), f + h >= _ ? ((s = 0), (f = _)) : f + h >= 1 ? ((s = (t * l - 1) * e(2, c)), (f += h)) : ((s = t * e(2, h - 1) * e(2, c)), (f = 0))); c >= 8; ) (p[g++] = 255 & s), (s /= 256), (c -= 8);
        for (f = (f << c) | s, d += c; d > 0; ) (p[g++] = 255 & f), (f /= 256), (d -= 8);
        return (p[g - 1] |= 128 * b), p;
    },
    unpack: function (t, n) {
        var r,
            o = t.length,
            i = 8 * o - n - 1,
            u = (1 << i) - 1,
            c = u >> 1,
            a = i - 7,
            f = o - 1,
            s = t[f--],
            l = 127 & s;
        for (s >>= 7; a > 0; ) (l = 256 * l + t[f--]), (a -= 8);
        for (r = l & ((1 << -a) - 1), l >>= -a, a += n; a > 0; ) (r = 256 * r + t[f--]), (a -= 8);
        if (0 === l) l = 1 - c;
        else {
            if (l === u) return r ? NaN : s ? -1 / 0 : 1 / 0;
            (r += e(2, n)), (l -= c);
        }
        return (s ? -1 : 1) * r * e(2, l - n);
    }
};
