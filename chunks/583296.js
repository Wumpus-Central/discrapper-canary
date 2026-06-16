"use strict";
var n,
    o,
    s,
    i = e(486816),
    u = e(309270),
    c = e(407057),
    a = e(991207),
    f = e(517480),
    p = e(735811),
    l = e(61748),
    v = e(780940),
    y = l("iterator"),
    h = !1;
[].keys && ("next" in (s = [].keys()) ? (o = f(f(s))) !== Object.prototype && (n = o) : (h = !0)),
    !c(n) ||
    i(function () {
        var t = {};
        return n[y].call(t) !== t;
    })
        ? (n = {})
        : v && (n = a(n)),
    u(n[y]) ||
        p(n, y, function () {
            return this;
        }),
    (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: h });
