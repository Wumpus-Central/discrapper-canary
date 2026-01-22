var r,
    i,
    a,
    s = n(503628),
    o = n(339626),
    l = n(598349),
    c = n(482779),
    u = n(42756),
    d = n(693655),
    f = n(380744),
    p = n(105712),
    _ = f("iterator"),
    h = !1;
[].keys && ("next" in (a = [].keys()) ? (i = u(u(a))) !== Object.prototype && (r = i) : (h = !0)),
    !l(r) ||
    s(function () {
        var e = {};
        return r[_].call(e) !== e;
    })
        ? (r = {})
        : p && (r = c(r)),
    o(r[_]) ||
        d(r, _, function () {
            return this;
        }),
    (e.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: h,
    });
