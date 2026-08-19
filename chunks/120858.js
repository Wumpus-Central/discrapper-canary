"use strict";
var n = r(439619),
    o = r(142896),
    i = r(870064),
    a = n("%Promise.resolve%", !0),
    s = a && o(a);
e.exports = function (e, t) {
    if (!s) throw new i("This environment does not support Promises.");
    return s(e, t);
};
