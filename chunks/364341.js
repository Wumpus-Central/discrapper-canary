var r = n(127849),
    i = n(580983),
    o = n(840475),
    a = n(914331),
    s = n(425105),
    l = n(527160),
    c = n(621523),
    u = r.RangeError,
    d = r.Int8Array,
    f = d && d.prototype,
    _ = f && f.set,
    p = o.aTypedArray,
    h = o.exportTypedArrayMethod,
    m = !c(function () {
        var e = new Uint8ClampedArray(2);
        return (
            i(
                _,
                e,
                {
                    length: 1,
                    0: 3
                },
                1
            ),
            3 !== e[1]
        );
    }),
    g =
        m &&
        o.NATIVE_ARRAY_BUFFER_VIEWS &&
        c(function () {
            var e = new d(2);
            return e.set(1), e.set('2', 1), 0 !== e[0] || 2 !== e[1];
        });
h(
    'set',
    function (e) {
        p(this);
        var t = s(arguments.length > 1 ? arguments[1] : void 0, 1),
            n = l(e);
        if (m) return i(_, this, n, t);
        var r = this.length,
            o = a(n),
            c = 0;
        if (o + t > r) throw new u('Wrong length');
        for (; c < o; ) this[t + c] = n[c++];
    },
    !m || g
);
