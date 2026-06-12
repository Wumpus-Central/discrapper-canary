"use strict";
var i = n(439619),
    r = n(142896),
    s = n(870064),
    a = i("%Promise.resolve%", !0),
    o = a && r(a);
e.exports = function (e, t) {
    if (!o) throw new s("This environment does not support Promises.");
    return o(e, t);
};
