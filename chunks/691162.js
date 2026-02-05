"use strict";
var r = n(757431),
    i = n(567242),
    a = n(933300),
    s = n(605468),
    o = n(154613),
    l = n(547210),
    u = n(475694),
    c = n(499018),
    d = n(795734),
    _ = n(906046),
    f = n(400696),
    p = Object("a"),
    h = "a" !== p[0] || !(0 in p),
    m = _("String.prototype.split");
e.exports = function (e) {
    var t,
        n = c(this),
        _ = u((h && f(n) ? m(n, "") : n).length);
    if (!l(e)) throw TypeError("Array.prototype.map callback must be a function");
    arguments.length > 1 && (t = arguments[1]);
    for (var p = r(n, _), g = 0; g < _; ) {
        var E = d(g);
        if (o(n, E)) {
            var A = i(e, t, [s(n, E), g, n]);
            a(p, E, A);
        }
        g += 1;
    }
    return p;
};
