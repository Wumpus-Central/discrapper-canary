var e = r(840475),
    o = r(760751),
    i = r(190475),
    u = r(214027),
    c = r(580983),
    a = r(46015),
    f = r(621523),
    s = e.aTypedArray,
    l = e.exportTypedArrayMethod,
    p = a(''.slice);
l(
    'fill',
    function (t) {
        var n = arguments.length;
        return s(this), c(o, this, 'Big' === p(u(this), 0, 3) ? i(t) : +t, n > 1 ? arguments[1] : void 0, n > 2 ? arguments[2] : void 0);
    },
    f(function () {
        var t = 0;
        return (
            new Int8Array(2).fill({
                valueOf: function () {
                    return t++;
                }
            }),
            1 !== t
        );
    })
);
