var i = r(67867),
    a = r(228042),
    o = r(730427),
    s = r(146321).set;
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        arity: 1,
        forced: !0
    },
    {
        merge: function (e) {
            for (var n = a(this), r = arguments.length, i = 0; i < r; )
                o(
                    arguments[i++],
                    function (e, r) {
                        s(n, e, r);
                    },
                    { AS_ENTRIES: !0 }
                );
            return n;
        }
    }
);
