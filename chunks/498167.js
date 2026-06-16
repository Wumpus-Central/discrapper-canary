"use strict";
var n = e(610475),
    o = e(208909),
    s = e(523005),
    i = e(500968),
    u = e(349674),
    c = o.add,
    a = o.has,
    f = o.remove;
t.exports = function (t) {
    var r = n(this),
        e = i(t).getIterator(),
        o = s(r);
    return (
        u(e, function (t) {
            a(r, t) ? f(o, t) : c(o, t);
        }),
        o
    );
};
