"use strict";
var n = e(683570),
    o = e(530383),
    s = e(61748),
    i = e(414123),
    u = s("species");
t.exports = function (t) {
    var r = n(t);
    i &&
        r &&
        !r[u] &&
        o(r, u, {
            configurable: !0,
            get: function () {
                return this;
            },
        });
};
