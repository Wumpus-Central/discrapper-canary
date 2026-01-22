var r = n(860511),
    i = n(446474),
    a = n(739305),
    s = n(503199),
    o = n(777718),
    l = n(250594),
    c = n(503628),
    u = r.RangeError,
    d = r.Int8Array,
    f = d && d.prototype,
    p = f && f.set,
    _ = a.aTypedArray,
    h = a.exportTypedArrayMethod,
    m = !c(function () {
        var e = new Uint8ClampedArray(2);
        return (
            i(
                p,
                e,
                {
                    length: 1,
                    0: 3,
                },
                1,
            ),
            3 !== e[1]
        );
    }),
    g =
        m &&
        a.NATIVE_ARRAY_BUFFER_VIEWS &&
        c(function () {
            var e = new d(2);
            return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1];
        });
h(
    "set",
    function (e) {
        _(this);
        var t = o(arguments.length > 1 ? arguments[1] : void 0, 1),
            n = l(e);
        if (m) return i(p, this, n, t);
        var r = this.length,
            a = s(n),
            c = 0;
        if (a + t > r) throw new u("Wrong length");
        for (; c < a; ) this[t + c] = n[c++];
    },
    !m || g,
);
