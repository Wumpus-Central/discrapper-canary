"use strict";
n.d(t, { k: () => s });
var r = n(476575),
    i = n(233710),
    s = function (e, t, n) {
        if (i.is.fun(e)) return e;
        if (i.is.arr(e)) return s({ range: e, output: t, extrapolate: n });
        if (i.is.str(e.output[0])) return r.createStringInterpolator(e);
        var a = e.output,
            o = e.range || [0, 1],
            l = e.extrapolateLeft || e.extrapolate || "extend",
            u = e.extrapolateRight || e.extrapolate || "extend",
            d =
                e.easing ||
                function (e) {
                    return e;
                };
        return function (t) {
            var n = (function (e, t) {
                for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                return n - 1;
            })(t, o);
            return (function (e, t, n, r, i, s, a, o, l) {
                var u = l ? l(e) : e;
                if (u < t)
                    if ("identity" === a) return u;
                    else "clamp" === a && (u = t);
                if (u > n)
                    if ("identity" === o) return u;
                    else "clamp" === o && (u = n);
                return r === i
                    ? r
                    : t === n
                      ? e <= t
                          ? r
                          : i
                      : (t === -1 / 0 ? (u = -u) : n === 1 / 0 ? (u -= t) : (u = (u - t) / (n - t)),
                        (u = s(u)),
                        r === -1 / 0 ? (u = -u) : i === 1 / 0 ? (u += r) : (u = u * (i - r) + r),
                        u);
            })(t, o[n], o[n + 1], a[n], a[n + 1], d, l, u, e.map);
        };
    };
