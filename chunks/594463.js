var i,
    a,
    o,
    s = r(821819),
    l = r(735471),
    u = r(982665),
    c = r(224106),
    d = r(646948),
    f = r(691244),
    p = r(360518),
    h = r(414629),
    _ = p('iterator'),
    m = !1;
[].keys && ('next' in (o = [].keys()) ? (a = d(d(o))) !== Object.prototype && (i = a) : (m = !0)),
    !u(i) ||
    s(function () {
        var e = {};
        return i[_].call(e) !== e;
    })
        ? (i = {})
        : h && (i = c(i)),
    !l(i[_]) &&
        f(i, _, function () {
            return this;
        }),
    (e.exports = {
        IteratorPrototype: i,
        BUGGY_SAFARI_ITERATORS: m
    });
