var i = n(67867),
    r = n(476508),
    a = n(228042),
    s = n(146321),
    o = n(292137),
    l = s.Map,
    u = s.set;
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        mapValues: function (e) {
            var t = a(this),
                n = r(e, arguments.length > 1 ? arguments[1] : void 0),
                i = new l();
            return (
                o(t, function (e, r) {
                    u(i, r, n(e, r, t));
                }),
                i
            );
        }
    }
);
