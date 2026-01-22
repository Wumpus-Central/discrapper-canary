var r = n(339626),
    i = n(4940),
    a = n(313400),
    s = n(88388);
e.exports = function (e, t, n, o) {
    o || (o = {});
    var l = o.enumerable,
        c = void 0 !== o.name ? o.name : t;
    if ((r(n) && a(n, c, o), o.global)) l ? (e[t] = n) : s(t, n);
    else {
        try {
            o.unsafe ? e[t] && (l = !0) : delete e[t];
        } catch (e) {}
        l
            ? (e[t] = n)
            : i.f(e, t, {
                  value: n,
                  enumerable: !1,
                  configurable: !o.nonConfigurable,
                  writable: !o.nonWritable,
              });
    }
    return e;
};
