var t = 4,
    n = 0.001,
    r = 1e-7,
    i = 10,
    o = 11,
    a = 0.1,
    s = 'function' == typeof Float32Array;
function l(e, t) {
    return 1 - 3 * t + 3 * e;
}
function c(e, t) {
    return 3 * t - 6 * e;
}
function u(e) {
    return 3 * e;
}
function d(e, t, n) {
    return ((l(t, n) * e + c(t, n)) * e + u(t)) * e;
}
function f(e, t, n) {
    return 3 * l(t, n) * e * e + 2 * c(t, n) * e + u(t);
}
function _(e, t, n, o, a) {
    var s,
        l,
        c = 0;
    do (s = d((l = t + (n - t) / 2), o, a) - e) > 0 ? (n = l) : (t = l);
    while (Math.abs(s) > r && ++c < i);
    return l;
}
function p(e, n, r, i) {
    for (var o = 0; o < t; ++o) {
        var a = f(n, r, i);
        if (0 === a) break;
        var s = d(n, r, i) - e;
        n -= s / a;
    }
    return n;
}
e.exports = function (e, t, r, i) {
    if (!(0 <= e && e <= 1 && 0 <= r && r <= 1)) throw Error('bezier x values must be in [0, 1] range');
    var l = s ? new Float32Array(o) : Array(o);
    if (e !== t || r !== i) for (var c = 0; c < o; ++c) l[c] = d(c * a, e, r);
    function u(t) {
        for (var i = 0, s = 1, c = o - 1; s !== c && l[s] <= t; ++s) i += a;
        var u = i + ((t - l[--s]) / (l[s + 1] - l[s])) * a,
            d = f(u, e, r);
        return d >= n ? p(t, u, e, r) : 0 === d ? u : _(t, i, i + a, e, r);
    }
    return function (n) {
        return e === t && r === i ? n : 0 === n ? 0 : 1 === n ? 1 : d(u(n), t, i);
    };
};
