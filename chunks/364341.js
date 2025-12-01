var r = n(127849),
    i = n(580983),
    a = n(840475),
    o = n(914331),
    s = n(425105),
    l = n(527160),
    c = n(621523),
    u = r.RangeError,
    d = r.Int8Array,
    f = d && d.prototype,
    p = f && f.set,
    _ = a.aTypedArray,
    m = a.exportTypedArrayMethod,
    h = !c(function () {
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
        h &&
        a.NATIVE_ARRAY_BUFFER_VIEWS &&
        c(function () {
            var e = new d(2);
            return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1];
        });
m(
    "set",
    function (e) {
        _(this);
        var t = s(arguments.length > 1 ? arguments[1] : void 0, 1),
            n = l(e);
        if (h) return i(p, this, n, t);
        var r = this.length,
            a = o(n),
            c = 0;
        if (a + t > r) throw new u("Wrong length");
        for (; c < a; ) this[t + c] = n[c++];
    },
    !h || g,
);
