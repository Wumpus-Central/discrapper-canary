var i = r(67867),
    a = r(821819),
    o = r(729605),
    s = r(65007).f,
    l = r(447631);
i(
    {
        target: 'Object',
        stat: !0,
        forced:
            !l ||
            a(function () {
                s(1);
            }),
        sham: !l
    },
    {
        getOwnPropertyDescriptor: function (e, n) {
            return s(o(e), n);
        }
    }
);
