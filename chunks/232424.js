var n = e(860511),
    o = e(446474),
    i = e(739305),
    a = e(503199),
    u = e(777718),
    c = e(250594),
    f = e(503628),
    p = n.RangeError,
    s = n.Int8Array,
    y = s && s.prototype,
    v = y && y.set,
    l = i.aTypedArray,
    h = i.exportTypedArrayMethod,
    d = !f(function () {
        var r = new Uint8ClampedArray(2);
        return o(v, r, { length: 1, 0: 3 }, 1), 3 !== r[1];
    }),
    g =
        d &&
        i.NATIVE_ARRAY_BUFFER_VIEWS &&
        f(function () {
            var r = new s(2);
            return r.set(1), r.set("2", 1), 0 !== r[0] || 2 !== r[1];
        });
h(
    "set",
    function (r) {
        l(this);
        var t = u(arguments.length > 1 ? arguments[1] : void 0, 1),
            e = c(r);
        if (d) return o(v, this, e, t);
        var n = this.length,
            i = a(e),
            f = 0;
        if (i + t > n) throw new p("Wrong length");
        for (; f < i; ) this[t + f] = e[f++];
    },
    !d || g,
);
