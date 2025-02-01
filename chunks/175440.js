var i = n(980855),
    r = n(49693),
    a = n(182867),
    s = Array,
    o = Math.max;
e.exports = function (e, t, n) {
    for (var l = r(e), u = i(t, l), c = i(void 0 === n ? l : n, l), d = s(o(c - u, 0)), f = 0; u < c; u++, f++) a(d, f, e[u]);
    return (d.length = f), d;
};
