var i = r(67867),
    a = r(476508),
    o = r(228042),
    s = r(292137);
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        every: function (e) {
            var n = o(this),
                r = a(e, arguments.length > 1 ? arguments[1] : void 0);
            return (
                !1 !==
                s(
                    n,
                    function (e, i) {
                        if (!r(e, i, n)) return !1;
                    },
                    !0
                )
            );
        }
    }
);
