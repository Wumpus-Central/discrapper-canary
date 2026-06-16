"use strict";
var n = e(675879),
    o = e(512008),
    s = e(958498),
    i = e(654272).indexOf,
    u = e(760326),
    c = n([].push);
t.exports = function (t, r) {
    var e,
        n = s(t),
        a = 0,
        f = [];
    for (e in n) !o(u, e) && o(n, e) && c(f, e);
    for (; r.length > a; ) o(n, (e = r[a++])) && (~i(f, e) || c(f, e));
    return f;
};
