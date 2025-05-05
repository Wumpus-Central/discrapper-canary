var t = 4,
    n = 0.001,
    r = 1e-7,
    i = 10,
    a = 11,
    o = 0.1,
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
function _(e, t, n, a, o) {
    var s,
        l,
        c = 0;
    do (s = d((l = t + (n - t) / 2), a, o) - e) > 0 ? (n = l) : (t = l);
    while (Math.abs(s) > r && ++c < i);
    return l;
}
function p(e, n, r, i) {
    for (var a = 0; a < t; ++a) {
        var o = f(n, r, i);
        if (0 === o) break;
        var s = d(n, r, i) - e;
        n -= s / o;
    }
    return n;
}
e.exports = function (e, t, r, i) {
    if (!(0 <= e && e <= 1 && 0 <= r && r <= 1)) throw Error('bezier x values must be in [0, 1] range');
    var l = s ? new Float32Array(a) : Array(a);
    if (e !== t || r !== i) for (var c = 0; c < a; ++c) l[c] = d(c * o, e, r);
    function u(t) {
        for (var i = 0, s = 1, c = a - 1; s !== c && l[s] <= t; ++s) i += o;
        var u = i + ((t - l[--s]) / (l[s + 1] - l[s])) * o,
            d = f(u, e, r);
        return d >= n ? p(t, u, e, r) : 0 === d ? u : _(t, i, i + o, e, r);
    }
    return function (n) {
        return e === t && r === i ? n : 0 === n ? 0 : 1 === n ? 1 : d(u(n), t, i);
    };
};
