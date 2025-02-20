var r = n(192291),
    i = n(692994),
    o = n(165915),
    a = n(974971),
    s = n(926515),
    l = n(581031),
    c = n(936940),
    u = r.aTypedArray,
    d = r.exportTypedArrayMethod,
    f = l(''.slice);
d(
    'fill',
    function (e) {
        var t = arguments.length;
        return u(this), s(i, this, 'Big' === f(a(this), 0, 3) ? o(e) : +e, t > 1 ? arguments[1] : void 0, t > 2 ? arguments[2] : void 0);
    },
    c(function () {
        var e = 0;
        return (
            new Int8Array(2).fill({
                valueOf: function () {
                    return e++;
                }
            }),
            1 !== e
        );
    })
);
