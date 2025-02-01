var i = n(67867),
    r = n(228042),
    a = n(730427),
    s = n(146321).set;
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
            for (var t = r(this), n = arguments.length, i = 0; i < n; )
                a(
                    arguments[i++],
                    function (e, n) {
                        s(t, e, n);
                    },
                    { AS_ENTRIES: !0 }
                );
            return t;
        }
    }
);
