var r = n(757431),
    i = n(567242),
    a = n(933300),
    s = n(605468),
    o = n(154613),
    l = n(547210),
    c = n(475694),
    u = n(499018),
    d = n(795734),
    f = n(906046),
    p = n(400696),
    _ = Object("a"),
    h = "a" !== _[0] || !(0 in _),
    m = f("String.prototype.split");
e.exports = function (e) {
    var t,
        n = u(this),
        f = c((h && p(n) ? m(n, "") : n).length);
    if (!l(e)) throw TypeError("Array.prototype.map callback must be a function");
    arguments.length > 1 && (t = arguments[1]);
    for (var _ = r(n, f), g = 0; g < f; ) {
        var E = d(g);
        if (o(n, E)) {
            var b = i(e, t, [s(n, E), g, n]);
            a(_, E, b);
        }
        g += 1;
    }
    return _;
};
