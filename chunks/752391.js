var r = n(739305),
    i = n(380296),
    a = n(900923),
    s = n(324988),
    o = n(446474),
    l = n(410323),
    c = n(503628),
    u = r.aTypedArray,
    d = r.exportTypedArrayMethod,
    f = l("".slice);
d(
    "fill",
    function (e) {
        var t = arguments.length;
        return (
            u(this),
            o(
                i,
                this,
                "Big" === f(s(this), 0, 3) ? a(e) : +e,
                t > 1 ? arguments[1] : void 0,
                t > 2 ? arguments[2] : void 0,
            )
        );
    },
    c(function () {
        var e = 0;
        return (
            new Int8Array(2).fill({
                valueOf: function () {
                    return e++;
                },
            }),
            1 !== e
        );
    }),
);
