"use strict";
var n = r(757431),
    o = r(567242),
    i = r(933300),
    a = r(605468),
    s = r(154613),
    l = r(547210),
    u = r(475694),
    c = r(499018),
    f = r(795734),
    p = r(906046),
    d = r(400696),
    h = Object("a"),
    m = "a" !== h[0] || !(0 in h),
    v = p("String.prototype.split");
e.exports = function (e) {
    var t,
        r = c(this),
        p = u((m && d(r) ? v(r, "") : r).length);
    if (!l(e)) throw TypeError("Array.prototype.map callback must be a function");
    arguments.length > 1 && (t = arguments[1]);
    for (var h = n(r, p), y = 0; y < p; ) {
        var g = f(y);
        if (s(r, g)) {
            var b = o(e, t, [a(r, g), y, r]);
            i(h, g, b);
        }
        y += 1;
    }
    return h;
};
