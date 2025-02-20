var r,
    i,
    o,
    a = n(821819),
    s = n(735471),
    l = n(982665),
    c = n(224106),
    u = n(646948),
    d = n(691244),
    f = n(360518),
    p = n(414629),
    _ = f('iterator'),
    h = !1;
[].keys && ('next' in (o = [].keys()) ? (i = u(u(o))) !== Object.prototype && (r = i) : (h = !0)),
    !l(r) ||
    a(function () {
        var e = {};
        return r[_].call(e) !== e;
    })
        ? (r = {})
        : p && (r = c(r)),
    s(r[_]) ||
        d(r, _, function () {
            return this;
        }),
    (e.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: h
    });
