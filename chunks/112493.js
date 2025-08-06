var r,
    i,
    o,
    a = n(621523),
    s = n(880181),
    l = n(434431),
    c = n(713411),
    u = n(961050),
    d = n(556585),
    f = n(751736),
    _ = n(511696),
    p = f("iterator"),
    h = !1;
[].keys && ("next" in (o = [].keys()) ? (i = u(u(o))) !== Object.prototype && (r = i) : (h = !0)),
    !l(r) ||
    a(function () {
        var e = {};
        return r[p].call(e) !== e;
    })
        ? (r = {})
        : _ && (r = c(r)),
    s(r[p]) ||
        d(r, p, function () {
            return this;
        }),
    (e.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: h,
    });
