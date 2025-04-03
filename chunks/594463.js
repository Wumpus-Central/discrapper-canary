var e,
    o,
    i,
    u = n(821819),
    s = n(735471),
    c = n(982665),
    f = n(224106),
    a = n(646948),
    p = n(691244),
    v = n(360518),
    l = n(414629),
    y = v('iterator'),
    h = !1;
[].keys && ('next' in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (e = o) : (h = !0)),
    !c(e) ||
    u(function () {
        var t = {};
        return e[y].call(t) !== t;
    })
        ? (e = {})
        : l && (e = f(e)),
    s(e[y]) ||
        p(e, y, function () {
            return this;
        }),
    (t.exports = {
        IteratorPrototype: e,
        BUGGY_SAFARI_ITERATORS: h
    });
