var e,
    o,
    i,
    u = n(779688),
    s = n(971428),
    c = n(829575),
    f = n(425184),
    a = n(709583),
    p = n(342930),
    l = n(394370),
    v = n(253462),
    y = l('iterator'),
    h = !1;
[].keys && ('next' in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (e = o) : (h = !0)),
    !c(e) ||
    u(function () {
        var t = {};
        return e[y].call(t) !== t;
    })
        ? (e = {})
        : v && (e = f(e)),
    s(e[y]) ||
        p(e, y, function () {
            return this;
        }),
    (t.exports = {
        IteratorPrototype: e,
        BUGGY_SAFARI_ITERATORS: h
    });
