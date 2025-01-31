var i = n(796774),
    r = n(680625),
    a = Array,
    s = Math.abs,
    o = Math.pow,
    l = Math.floor,
    u = Math.log,
    c = Math.LN2,
    d = function (e) {
        var t = r(e),
            n = s(e - t);
        return n > 0.5 || (0.5 === n && t % 2 != 0) ? t + i(e) : t;
    },
    f = function (e, t, n) {
        var i,
            r,
            f,
            _ = a(n),
            p = 8 * n - t - 1,
            h = (1 << p) - 1,
            m = h >> 1,
            g = 23 === t ? o(2, -24) - o(2, -77) : 0,
            E = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0,
            v = 0;
        for ((e = s(e)) != e || e === 1 / 0 ? ((r = e != e ? 1 : 0), (i = h)) : ((f = o(2, -(i = l(u(e) / c)))), e * f < 1 && (i--, (f *= 2)), i + m >= 1 ? (e += g / f) : (e += g * o(2, 1 - m)), e * f >= 2 && (i++, (f /= 2)), i + m >= h ? ((r = 0), (i = h)) : i + m >= 1 ? ((r = d((e * f - 1) * o(2, t))), (i += m)) : ((r = d(e * o(2, m - 1) * o(2, t))), (i = 0))); t >= 8; ) (_[v++] = 255 & r), (r /= 256), (t -= 8);
        for (i = (i << t) | r, p += t; p > 0; ) (_[v++] = 255 & i), (i /= 256), (p -= 8);
        return (_[--v] |= 128 * E), _;
    },
    _ = function (e, t) {
        var n,
            i = e.length,
            r = 8 * i - t - 1,
            a = (1 << r) - 1,
            s = a >> 1,
            l = r - 7,
            u = i - 1,
            c = e[u--],
            d = 127 & c;
        for (c >>= 7; l > 0; ) (d = 256 * d + e[u--]), (l -= 8);
        for (n = d & ((1 << -l) - 1), d >>= -l, l += t; l > 0; ) (n = 256 * n + e[u--]), (l -= 8);
        if (0 === d) d = 1 - s;
        else {
            if (d === a) return n ? NaN : c ? -1 / 0 : 1 / 0;
            (n += o(2, t)), (d -= s);
        }
        return (c ? -1 : 1) * n * o(2, d - t);
    };
e.exports = {
    pack: f,
    unpack: _
};
