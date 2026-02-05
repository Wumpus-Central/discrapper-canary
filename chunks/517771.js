"use strict";
var r = n(210140),
    i = n(501346),
    a = n(873078),
    s = n(4940);
e.exports = function (e, t, n) {
    for (var o = i(t), l = s.f, u = a.f, c = 0; c < o.length; c++) {
        var d = o[c];
        r(e, d) || (n && r(n, d)) || l(e, d, u(t, d));
    }
};
