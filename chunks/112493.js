var r,
    n,
    _,
    o = a(621523),
    i = a(880181),
    c = a(434431),
    s = a(713411),
    E = a(961050),
    l = a(556585),
    u = a(751736),
    I = a(511696),
    R = u('iterator'),
    d = !1;
[].keys && ('next' in (_ = [].keys()) ? (n = E(E(_))) !== Object.prototype && (r = n) : (d = !0)),
    !c(r) ||
    o(function () {
        var t = {};
        return r[R].call(t) !== t;
    })
        ? (r = {})
        : I && (r = s(r)),
    i(r[R]) ||
        l(r, R, function () {
            return this;
        }),
    (t.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: d
    });
