"use strict";
var i = n(503628),
    r = n(339626),
    s = /#|\.prototype\./,
    a = function (e, t) {
        var n = l[o(e)];
        return n === c || (n !== u && (r(t) ? i(t) : !!t));
    },
    o = (a.normalize = function (e) {
        return String(e).replace(s, ".").toLowerCase();
    }),
    l = (a.data = {}),
    u = (a.NATIVE = "N"),
    c = (a.POLYFILL = "P");
e.exports = a;
