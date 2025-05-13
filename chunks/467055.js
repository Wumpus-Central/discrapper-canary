var r = n(98405),
    i = n(683385),
    a = n(480296);
r(
    {
        target: 'Object',
        stat: !0
    },
    {
        fromEntries: function (e) {
            var t = {};
            return (
                i(
                    e,
                    function (e, n) {
                        a(t, e, n);
                    },
                    { AS_ENTRIES: !0 }
                ),
                t
            );
        }
    }
);
