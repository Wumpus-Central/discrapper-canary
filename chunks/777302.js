"use strict";
var n = e(610475),
    o = e(208909).has,
    s = e(433979),
    i = e(500968),
    u = e(349674),
    c = e(858534);
t.exports = function (t) {
    var r = n(this),
        e = i(t);
    if (s(r) < e.size) return !1;
    var a = e.getIterator();
    return (
        !1 !==
        u(a, function (t) {
            if (!o(r, t)) return c(a, "normal", !1);
        })
    );
};
