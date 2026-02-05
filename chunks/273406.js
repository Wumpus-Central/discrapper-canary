"use strict";
n.d(t, { k: () => a });
var r = n(476575),
    i = n(233710),
    a = function (e, t, n) {
        if (i.is.fun(e)) return e;
        if (i.is.arr(e)) return a({ range: e, output: t, extrapolate: n });
        if (i.is.str(e.output[0])) return r.createStringInterpolator(e);
        var l = e,
            u = l.output,
            c = l.range || [0, 1],
            d = l.extrapolateLeft || l.extrapolate || "extend",
            _ = l.extrapolateRight || l.extrapolate || "extend",
            f =
                l.easing ||
                function (e) {
                    return e;
                };
        return function (e) {
            var t = o(e, c);
            return s(e, c[t], c[t + 1], u[t], u[t + 1], f, d, _, l.map);
        };
    };
function s(e, t, n, r, i, a, s, o, l) {
    var u = l ? l(e) : e;
    if (u < t)
        if ("identity" === s) return u;
        else "clamp" === s && (u = t);
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
            (u = a(u)),
            r === -1 / 0 ? (u = -u) : i === 1 / 0 ? (u += r) : (u = u * (i - r) + r),
            u);
}
function o(e, t) {
    for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
    return n - 1;
}
