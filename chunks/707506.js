n.d(t, { m: () => a });
var i = n(239189),
    r = n(217348),
    a = function (e, t, n) {
        if (r.is.fun(e)) return e;
        if (r.is.arr(e))
            return a({
                range: e,
                output: t,
                extrapolate: n
            });
        if (r.is.str(e.output[0])) return i.createStringInterpolator(e);
        var l = e,
            u = l.output,
            c = l.range || [0, 1],
            d = l.extrapolateLeft || l.extrapolate || 'extend',
            f = l.extrapolateRight || l.extrapolate || 'extend',
            _ =
                l.easing ||
                function (e) {
                    return e;
                };
        return function (e) {
            var t = o(e, c);
            return s(e, c[t], c[t + 1], u[t], u[t + 1], _, d, f, l.map);
        };
    };
function s(e, t, n, i, r, a, s, o, l) {
    var u = l ? l(e) : e;
    if (u < t) {
        if ('identity' === s) return u;
        'clamp' === s && (u = t);
    }
    if (u > n) {
        if ('identity' === o) return u;
        'clamp' === o && (u = n);
    }
    return i === r ? i : t === n ? (e <= t ? i : r) : (t === -1 / 0 ? (u = -u) : n === 1 / 0 ? (u -= t) : (u = (u - t) / (n - t)), (u = a(u)), i === -1 / 0 ? (u = -u) : r === 1 / 0 ? (u += i) : (u = u * (r - i) + i), u);
}
function o(e, t) {
    for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
    return n - 1;
}
