var n = e(710821),
    o = e(739305),
    i = e(464046),
    a = e(120394),
    u = e(900923),
    c = o.aTypedArray,
    f = o.getTypedArrayConstructor;
(0, o.exportTypedArrayMethod)(
    "with",
    {
        with: function (r, t) {
            var e = c(this),
                o = a(r),
                p = i(e) ? u(t) : +t;
            return n(e, f(e), o, p);
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
