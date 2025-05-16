var r = n(880181),
    i = n(117895),
    a = n(494465),
    o = n(587218);
e.exports = function (e, t, n, s) {
    s || (s = {});
    var l = s.enumerable,
        c = void 0 !== s.name ? s.name : t;
    if ((r(n) && a(n, c, s), s.global)) l ? (e[t] = n) : o(t, n);
    else {
        try {
            s.unsafe ? e[t] && (l = !0) : delete e[t];
        } catch (e) {}
        l
            ? (e[t] = n)
            : i.f(e, t, {
                  value: n,
                  enumerable: !1,
                  configurable: !s.nonConfigurable,
                  writable: !s.nonWritable
              });
    }
    return e;
};
