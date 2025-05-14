var e = r(351196),
    o = r(840475),
    i = r(15998),
    u = r(77826),
    c = r(190475),
    a = o.aTypedArray,
    f = o.getTypedArrayConstructor;
(0, o.exportTypedArrayMethod)(
    'with',
    {
        with: function (t, n) {
            var r = a(this),
                o = u(t),
                s = i(r) ? c(n) : +n;
            return e(r, f(r), o, s);
        }
    }.with,
    !(function () {
        try {
            new Int8Array(1).with(2, {
                valueOf: function () {
                    throw 8;
                }
            });
        } catch (t) {
            return 8 === t;
        }
    })()
);
