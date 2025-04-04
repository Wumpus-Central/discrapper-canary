var r = n(220159),
    o = n(519467),
    a = n(795462),
    i = n(613694).set;
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        arity: 1,
        forced: !0
    },
    {
        merge: function (e) {
            for (var t = o(this), n = arguments.length, r = 0; r < n; )
                a(
                    arguments[r++],
                    function (e, n) {
                        i(t, e, n);
                    },
                    { AS_ENTRIES: !0 }
                );
            return t;
        }
    }
);
