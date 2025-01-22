var i = r(67867),
    a = r(476508),
    o = r(228042),
    s = r(146321),
    l = r(292137),
    u = s.Map,
    c = s.set;
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        mapKeys: function (e) {
            var n = o(this),
                r = a(e, arguments.length > 1 ? arguments[1] : void 0),
                i = new u();
            return (
                l(n, function (e, a) {
                    c(i, r(e, a, n), e);
                }),
                i
            );
        }
    }
);
