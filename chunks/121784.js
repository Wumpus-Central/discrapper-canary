var r = n(351196),
    i = n(840475),
    a = n(15998),
    o = n(77826),
    s = n(190475),
    l = i.aTypedArray,
    c = i.getTypedArrayConstructor;
(0, i.exportTypedArrayMethod)(
    'with',
    {
        with: function (e, t) {
            var n = l(this),
                i = o(e),
                u = a(n) ? s(t) : +t;
            return r(n, c(n), i, u);
        }
    }.with,
    !(function () {
        try {
            new Int8Array(1).with(2, {
                valueOf: function () {
                    throw 8;
                }
            });
        } catch (e) {
            return 8 === e;
        }
    })()
);
