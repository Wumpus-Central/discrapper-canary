var n,
    o,
    i,
    a = e(621523),
    s = e(880181),
    u = e(434431),
    c = e(713411),
    f = e(961050),
    l = e(556585),
    p = e(751736),
    v = e(511696),
    h = p('iterator'),
    d = !1;
[].keys && ('next' in (i = [].keys()) ? (o = f(f(i))) !== Object.prototype && (n = o) : (d = !0)),
    !u(n) ||
    a(function () {
        var t = {};
        return n[h].call(t) !== t;
    })
        ? (n = {})
        : v && (n = c(n)),
    s(n[h]) ||
        l(n, h, function () {
            return this;
        }),
    (t.exports = {
        IteratorPrototype: n,
        BUGGY_SAFARI_ITERATORS: d
    });
