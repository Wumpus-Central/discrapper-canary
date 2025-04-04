var t = Array,
    n = Math.abs,
    r = Math.pow,
    i = Math.floor,
    o = Math.log,
    a = Math.LN2;
e.exports = {
    pack: function (e, s, l) {
        var c,
            u,
            d,
            f = t(l),
            _ = 8 * l - s - 1,
            p = (1 << _) - 1,
            h = p >> 1,
            m = 23 === s ? r(2, -24) - r(2, -77) : 0,
            g = +(e < 0 || (0 === e && 1 / e < 0)),
            E = 0;
        for ((e = n(e)) != e || e === 1 / 0 ? ((u = +(e != e)), (c = p)) : ((d = r(2, -(c = i(o(e) / a)))), e * d < 1 && (c--, (d *= 2)), c + h >= 1 ? (e += m / d) : (e += m * r(2, 1 - h)), e * d >= 2 && (c++, (d /= 2)), c + h >= p ? ((u = 0), (c = p)) : c + h >= 1 ? ((u = (e * d - 1) * r(2, s)), (c += h)) : ((u = e * r(2, h - 1) * r(2, s)), (c = 0))); s >= 8; ) (f[E++] = 255 & u), (u /= 256), (s -= 8);
        for (c = (c << s) | u, _ += s; _ > 0; ) (f[E++] = 255 & c), (c /= 256), (_ -= 8);
        return (f[E - 1] |= 128 * g), f;
    },
    unpack: function (e, t) {
        var n,
            i = e.length,
            o = 8 * i - t - 1,
            a = (1 << o) - 1,
            s = a >> 1,
            l = o - 7,
            c = i - 1,
            u = e[c--],
            d = 127 & u;
        for (u >>= 7; l > 0; ) (d = 256 * d + e[c--]), (l -= 8);
        for (n = d & ((1 << -l) - 1), d >>= -l, l += t; l > 0; ) (n = 256 * n + e[c--]), (l -= 8);
        if (0 === d) d = 1 - s;
        else {
            if (d === a) return n ? NaN : u ? -1 / 0 : 1 / 0;
            (n += r(2, t)), (d -= s);
        }
        return (u ? -1 : 1) * n * r(2, d - t);
    }
};
