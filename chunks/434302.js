var i = r(67867),
    a = r(828596),
    o = r(821819),
    s = r(502640),
    l = r(611345);
i(
    {
        target: 'Object',
        stat: !0,
        forced:
            !a ||
            o(function () {
                s.f(1);
            })
    },
    {
        getOwnPropertySymbols: function (e) {
            var n = s.f;
            return n ? n(l(e)) : [];
        }
    }
);
