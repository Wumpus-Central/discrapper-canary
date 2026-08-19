var n = e(710821),
    o = e(739305),
    a = e(464046),
    i = e(120394),
    p = e(900923),
    f = o.aTypedArray,
    u = o.getTypedArrayConstructor;
(0, o.exportTypedArrayMethod)(
    "with",
    {
        with: function (r, t) {
            var e = f(this),
                o = i(r),
                y = a(e) ? p(t) : +t;
            return n(e, u(e), o, y);
        },
    }.with,
    !(function () {
        try {
            new Int8Array(1).with(2, {
                valueOf: function () {
                    throw 8;
                },
            });
        } catch (r) {
            return 8 === r;
        }
    })(),
);
