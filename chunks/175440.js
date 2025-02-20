var r = n(980855),
    i = n(49693),
    o = n(182867),
    a = Array,
    s = Math.max;
e.exports = function (e, t, n) {
    for (var l = i(e), c = r(t, l), u = r(void 0 === n ? l : n, l), d = a(s(u - c, 0)), f = 0; c < u; c++, f++) o(d, f, e[c]);
    return (d.length = f), d;
};
