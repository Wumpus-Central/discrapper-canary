"use strict";
var r = n(210140),
    i = n(501346),
    s = n(873078),
    a = n(4940);
e.exports = function (e, t, n) {
    for (var o = i(t), l = a.f, u = s.f, c = 0; c < o.length; c++) {
        var d = o[c];
        r(e, d) || (n && r(n, d)) || l(e, d, u(t, d));
    }
};
