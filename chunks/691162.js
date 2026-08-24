"use strict";
var n = r(757431),
    i = r(567242),
    o = r(933300),
    a = r(605468),
    s = r(154613),
    l = r(547210),
    u = r(475694),
    c = r(499018),
    f = r(795734),
    d = r(906046),
    p = r(400696),
    h = Object("a"),
    m = "a" !== h[0] || !(0 in h),
    v = d("String.prototype.split");
e.exports = function (e) {
    var t,
        r = c(this),
        d = u((m && p(r) ? v(r, "") : r).length);
    if (!l(e)) throw TypeError("Array.prototype.map callback must be a function");
    arguments.length > 1 && (t = arguments[1]);
    for (var h = n(r, d), y = 0; y < d; ) {
        var g = f(y);
        if (s(r, g)) {
            var b = i(e, t, [a(r, g), y, r]);
            o(h, g, b);
        }
        y += 1;
    }
    return h;
};
