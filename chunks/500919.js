var i = n(67867),
    r = n(476508),
    a = n(228042),
    s = n(292137);
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        some: function (e) {
            var t = a(this),
                n = r(e, arguments.length > 1 ? arguments[1] : void 0);
            return (
                !0 ===
                s(
                    t,
                    function (e, i) {
                        if (n(e, i, t)) return !0;
                    },
                    !0
                )
            );
        }
    }
);
