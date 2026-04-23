var n = e(860511),
    o = e(446474),
    a = e(739305),
    i = e(503199),
    p = e(777718),
    u = e(250594),
    y = e(503628),
    f = n.RangeError,
    c = n.Int8Array,
    s = c && c.prototype,
    d = s && s.set,
    v = a.aTypedArray,
    A = a.exportTypedArrayMethod,
    h = !y(function () {
        var r = new Uint8ClampedArray(2);
        return o(d, r, { length: 1, 0: 3 }, 1), 3 !== r[1];
    }),
    g =
        h &&
        a.NATIVE_ARRAY_BUFFER_VIEWS &&
        y(function () {
            var r = new c(2);
            return r.set(1), r.set("2", 1), 0 !== r[0] || 2 !== r[1];
        });
A(
    "set",
    function (r) {
        v(this);
        var t = p(arguments.length > 1 ? arguments[1] : void 0, 1),
            e = u(r);
        if (h) return o(d, this, e, t);
        var n = this.length,
            a = i(e),
            y = 0;
        if (a + t > n) throw new f("Wrong length");
        for (; y < a; ) this[t + y] = e[y++];
    },
    !h || g,
);
