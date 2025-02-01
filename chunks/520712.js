var i = n(192291),
    r = n(692994),
    a = n(165915),
    s = n(974971),
    o = n(926515),
    l = n(581031),
    u = n(936940),
    c = i.aTypedArray,
    d = i.exportTypedArrayMethod,
    f = l(''.slice);
d(
    'fill',
    function (e) {
        var t = arguments.length;
        return c(this), o(r, this, 'Big' === f(s(this), 0, 3) ? a(e) : +e, t > 1 ? arguments[1] : void 0, t > 2 ? arguments[2] : void 0);
    },
    u(function () {
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
