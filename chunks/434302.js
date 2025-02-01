var i = n(67867),
    r = n(828596),
    a = n(821819),
    s = n(502640),
    o = n(611345);
i(
    {
        target: 'Object',
        stat: !0,
        forced:
            !r ||
            a(function () {
                s.f(1);
            })
    },
    {
        getOwnPropertySymbols: function (e) {
            var t = s.f;
            return t ? t(o(e)) : [];
        }
    }
);
