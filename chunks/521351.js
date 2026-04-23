"use strict";
var r = n(503628),
    i = n(339626),
    s = /#|\.prototype\./,
    a = function (e, t) {
        var n = l[o(e)];
        return n === c || (n !== u && (i(t) ? r(t) : !!t));
    },
    o = (a.normalize = function (e) {
        return String(e).replace(s, ".").toLowerCase();
    }),
    l = (a.data = {}),
    u = (a.NATIVE = "N"),
    c = (a.POLYFILL = "P");
e.exports = a;
