var r = n(840475),
    i = n(760751),
    o = n(190475),
    a = n(214027),
    s = n(580983),
    l = n(46015),
    c = n(621523),
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
