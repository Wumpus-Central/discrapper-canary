"use strict";
var i = n(757431),
    r = n(567242),
    s = n(933300),
    a = n(605468),
    o = n(154613),
    l = n(547210),
    u = n(475694),
    c = n(499018),
    d = n(795734),
    _ = n(906046),
    h = n(400696),
    f = Object("a"),
    p = "a" !== f[0] || !(0 in f),
    E = _("String.prototype.split");
e.exports = function (e) {
    var t,
        n = c(this),
        _ = u((p && h(n) ? E(n, "") : n).length);
    if (!l(e)) throw TypeError("Array.prototype.map callback must be a function");
    arguments.length > 1 && (t = arguments[1]);
    for (var f = i(n, _), m = 0; m < _; ) {
        var g = d(m);
        if (o(n, g)) {
            var A = r(e, t, [a(n, g), m, n]);
            s(f, g, A);
        }
        m += 1;
    }
    return f;
};
