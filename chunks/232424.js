var n = e(860511),
    o = e(446474),
    a = e(739305),
    i = e(503199),
    p = e(777718),
    f = e(250594),
    u = e(503628),
    y = n.RangeError,
    c = n.Int8Array,
    s = c && c.prototype,
    d = s && s.set,
    h = a.aTypedArray,
    v = a.exportTypedArrayMethod,
    A = !u(function () {
        var r = new Uint8ClampedArray(2);
        return o(d, r, { length: 1, 0: 3 }, 1), 3 !== r[1];
    }),
    g =
        A &&
        a.NATIVE_ARRAY_BUFFER_VIEWS &&
        u(function () {
            var r = new c(2);
            return r.set(1), r.set("2", 1), 0 !== r[0] || 2 !== r[1];
        });
v(
    "set",
    function (r) {
        h(this);
        var t = p(arguments.length > 1 ? arguments[1] : void 0, 1),
            e = f(r);
        if (A) return o(d, this, e, t);
        var n = this.length,
            a = i(e),
            u = 0;
        if (a + t > n) throw new y("Wrong length");
        for (; u < a; ) this[t + u] = e[u++];
    },
    !A || g,
);
