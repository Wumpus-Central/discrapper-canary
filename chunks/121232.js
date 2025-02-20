var r = n(67867),
    i = n(476508),
    o = n(228042),
    a = n(292137);
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        every: function (e) {
            var t = o(this),
                n = i(e, arguments.length > 1 ? arguments[1] : void 0);
            return (
                !1 !==
                a(
                    t,
                    function (e, r) {
                        if (!n(e, r, t)) return !1;
                    },
                    !0
                )
            );
        }
    }
);
