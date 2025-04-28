var e = r(127849),
    o = r(580983),
    i = r(840475),
    u = r(914331),
    c = r(425105),
    a = r(527160),
    f = r(621523),
    s = e.RangeError,
    l = e.Int8Array,
    p = l && l.prototype,
    d = p && p.set,
    _ = i.aTypedArray,
    h = i.exportTypedArrayMethod,
    y = !f(function () {
        var t = new Uint8ClampedArray(2);
        return (
            o(
                d,
                t,
                {
                    length: 1,
                    0: 3
                },
                1
            ),
            3 !== t[1]
        );
    }),
    b =
        y &&
        i.NATIVE_ARRAY_BUFFER_VIEWS &&
        f(function () {
            var t = new l(2);
            return t.set(1), t.set('2', 1), 0 !== t[0] || 2 !== t[1];
        });
h(
    'set',
    function (t) {
        _(this);
        var n = c(arguments.length > 1 ? arguments[1] : void 0, 1),
            r = a(t);
        if (y) return o(d, this, r, n);
        var e = this.length,
            i = u(r),
            f = 0;
        if (i + n > e) throw new s('Wrong length');
        for (; f < i; ) this[n + f] = r[f++];
    },
    !y || b
);
