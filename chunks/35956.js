var t = a(257943),
    n = a(410323),
    i = a(485155),
    o = URLSearchParams.prototype,
    h = n(o.forEach);
!t ||
    "size" in o ||
    i(o, "size", {
        get: function () {
            var e = 0;
            return (
                h(this, function () {
                    e++;
                }),
                e
            );
        },
        configurable: !0,
        enumerable: !0,
    });
