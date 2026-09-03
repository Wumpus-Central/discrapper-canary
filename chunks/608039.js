var r = n(664886),
    a = n(999843),
    o = n(309270),
    i = n(155084),
    s = TypeError;
e.exports = function (e, t) {
    var n,
        l = i(this),
        c = a(l.get),
        u = a(l.has),
        d = a(l.set),
        p = arguments.length > 2 ? arguments[2] : void 0;
    if (!o(t) && !o(p)) throw new s("At least one callback required");
    return r(u, l, e) ? ((n = r(c, l, e)), o(t) && r(d, l, e, (n = t(n)))) : o(p) && r(d, l, e, (n = p())), n;
};
