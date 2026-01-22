var t = Array,
    n = Math.abs,
    r = Math.pow,
    i = Math.floor,
    a = Math.log,
    s = Math.LN2;
e.exports = {
    pack: function (e, o, l) {
        var c,
            u,
            d,
            f = t(l),
            p = 8 * l - o - 1,
            _ = (1 << p) - 1,
            h = _ >> 1,
            m = 23 === o ? r(2, -24) - r(2, -77) : 0,
            g = +(e < 0 || (0 === e && 1 / e < 0)),
            E = 0;
        for (
            (e = n(e)) != e || e === 1 / 0
                ? ((u = +(e != e)), (c = _))
                : ((d = r(2, -(c = i(a(e) / s)))),
                  e * d < 1 && (c--, (d *= 2)),
                  c + h >= 1 ? (e += m / d) : (e += m * r(2, 1 - h)),
                  e * d >= 2 && (c++, (d /= 2)),
                  c + h >= _
                      ? ((u = 0), (c = _))
                      : c + h >= 1
                        ? ((u = (e * d - 1) * r(2, o)), (c += h))
                        : ((u = e * r(2, h - 1) * r(2, o)), (c = 0)));
            o >= 8;
        )
            (f[E++] = 255 & u), (u /= 256), (o -= 8);
        for (c = (c << o) | u, p += o; p > 0; ) (f[E++] = 255 & c), (c /= 256), (p -= 8);
        return (f[E - 1] |= 128 * g), f;
    },
    unpack: function (e, t) {
        var n,
            i = e.length,
            a = 8 * i - t - 1,
            s = (1 << a) - 1,
            o = s >> 1,
            l = a - 7,
            c = i - 1,
            u = e[c--],
            d = 127 & u;
        for (u >>= 7; l > 0; ) (d = 256 * d + e[c--]), (l -= 8);
        for (n = d & ((1 << -l) - 1), d >>= -l, l += t; l > 0; ) (n = 256 * n + e[c--]), (l -= 8);
        if (0 === d) d = 1 - o;
        else {
            if (d === s) return n ? NaN : u ? -1 / 0 : 1 / 0;
            (n += r(2, t)), (d -= o);
        }
        return (u ? -1 : 1) * n * r(2, d - t);
    },
};
