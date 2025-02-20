var r = n(67867),
    i = n(828596),
    o = n(821819),
    a = n(502640),
    s = n(611345);
r(
    {
        target: 'Object',
        stat: !0,
        forced:
            !i ||
            o(function () {
                a.f(1);
            })
    },
    {
        getOwnPropertySymbols: function (e) {
            var t = a.f;
            return t ? t(s(e)) : [];
        }
    }
);
