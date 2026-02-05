"use strict";
var n = e(155084),
    o = e(858534);
t.exports = function (t, r, e, s) {
    try {
        return s ? r(n(e)[0], e[1]) : r(e);
    } catch (r) {
        o(t, "throw", r);
    }
};
