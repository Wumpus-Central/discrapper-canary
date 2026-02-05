"use strict";
n.d(t, { A: () => o });
var r = n(29583),
    i = n(892227),
    a = n(618027);
function s(e, t) {
    var n =
        e.getFullYear() - t.getFullYear() ||
        e.getMonth() - t.getMonth() ||
        e.getDate() - t.getDate() ||
        e.getHours() - t.getHours() ||
        e.getMinutes() - t.getMinutes() ||
        e.getSeconds() - t.getSeconds() ||
        e.getMilliseconds() - t.getMilliseconds();
    return n < 0 ? -1 : n > 0 ? 1 : n;
}
function o(e, t) {
    (0, a.A)(2, arguments);
    var n = (0, r.default)(e),
        o = (0, r.default)(t),
        l = s(n, o),
        u = Math.abs((0, i.default)(n, o));
    n.setDate(n.getDate() - l * u);
    var c = Number(s(n, o) === -l),
        d = l * (u - c);
    return 0 === d ? 0 : d;
}
