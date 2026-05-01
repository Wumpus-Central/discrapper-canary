"use strict";
var i = n(210140),
    r = n(501346),
    s = n(873078),
    a = n(4940);
e.exports = function (e, t, n) {
    for (var o = r(t), l = a.f, u = s.f, c = 0; c < o.length; c++) {
        var d = o[c];
        i(e, d) || (n && i(n, d)) || l(e, d, u(t, d));
    }
};
