var i = n(161581),
    r = n(926515),
    a = n(192291),
    s = n(49693),
    o = n(18316),
    l = n(339718),
    u = n(936940),
    c = i.RangeError,
    d = i.Int8Array,
    f = d && d.prototype,
    _ = f && f.set,
    p = a.aTypedArray,
    h = a.exportTypedArrayMethod,
    m = !u(function () {
        var e = new Uint8ClampedArray(2);
        return (
            r(
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
        a.NATIVE_ARRAY_BUFFER_VIEWS &&
        u(function () {
            var e = new d(2);
            return e.set(1), e.set('2', 1), 0 !== e[0] || 2 !== e[1];
        });
h(
    'set',
    function (e) {
        p(this);
        var t = o(arguments.length > 1 ? arguments[1] : void 0, 1),
            n = l(e);
        if (m) return r(_, this, n, t);
        var i = this.length,
            a = s(n),
            u = 0;
        if (a + t > i) throw c('Wrong length');
        for (; u < a; ) this[t + u] = n[u++];
    },
    !m || g
);
