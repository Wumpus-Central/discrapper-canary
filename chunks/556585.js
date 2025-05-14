var e = r(880181),
    o = r(117895),
    i = r(494465),
    u = r(587218);
t.exports = function (t, n, r, c) {
    c || (c = {});
    var a = c.enumerable,
        f = void 0 !== c.name ? c.name : n;
    if ((e(r) && i(r, f, c), c.global)) a ? (t[n] = r) : u(n, r);
    else {
        try {
            c.unsafe ? t[n] && (a = !0) : delete t[n];
        } catch (t) {}
        a
            ? (t[n] = r)
            : o.f(t, n, {
                  value: r,
                  enumerable: !1,
                  configurable: !c.nonConfigurable,
                  writable: !c.nonWritable
              });
    }
    return t;
};
