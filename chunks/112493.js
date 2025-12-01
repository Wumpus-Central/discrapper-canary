var r,
    i,
    a,
    o = n(621523),
    s = n(880181),
    l = n(434431),
    c = n(713411),
    u = n(961050),
    d = n(556585),
    f = n(751736),
    p = n(511696),
    _ = f("iterator"),
    m = !1;
[].keys && ("next" in (a = [].keys()) ? (i = u(u(a))) !== Object.prototype && (r = i) : (m = !0)),
    !l(r) ||
    o(function () {
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
        BUGGY_SAFARI_ITERATORS: m,
    });
