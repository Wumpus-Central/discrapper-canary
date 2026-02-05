"use strict";
var r = n(503628),
    i = n(339626),
    a = /#|\.prototype\./,
    s = function (e, t) {
        var n = l[o(e)];
        return n === c || (n !== u && (i(t) ? r(t) : !!t));
    },
    o = (s.normalize = function (e) {
        return String(e).replace(a, ".").toLowerCase();
    }),
    l = (s.data = {}),
    u = (s.NATIVE = "N"),
    c = (s.POLYFILL = "P");
e.exports = s;
