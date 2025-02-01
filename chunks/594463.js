var i,
    r,
    a,
    s = n(821819),
    o = n(735471),
    l = n(982665),
    u = n(224106),
    c = n(646948),
    d = n(691244),
    f = n(360518),
    _ = n(414629),
    p = f('iterator'),
    h = !1;
[].keys && ('next' in (a = [].keys()) ? (r = c(c(a))) !== Object.prototype && (i = r) : (h = !0)),
    !l(i) ||
    s(function () {
        var e = {};
        return i[p].call(e) !== e;
    })
        ? (i = {})
        : _ && (i = u(i)),
    o(i[p]) ||
        d(i, p, function () {
            return this;
        }),
    (e.exports = {
        IteratorPrototype: i,
        BUGGY_SAFARI_ITERATORS: h
    });
