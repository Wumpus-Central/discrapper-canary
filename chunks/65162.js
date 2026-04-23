var n = e(710821),
    o = e(739305),
    a = e(464046),
    i = e(120394),
    p = e(900923),
    u = o.aTypedArray,
    y = o.getTypedArrayConstructor;
(0, o.exportTypedArrayMethod)(
    "with",
    {
        with: function (r, t) {
            var e = u(this),
                o = i(r),
                f = a(e) ? p(t) : +t;
            return n(e, y(e), o, f);
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
