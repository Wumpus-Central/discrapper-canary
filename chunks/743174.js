var r = n(67867),
    o = n(476508),
    a = n(228042),
    i = n(146321),
    s = n(292137),
    c = i.Map,
    l = i.set;
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        mapValues: function (e) {
            var t = a(this),
                n = o(e, arguments.length > 1 ? arguments[1] : void 0),
                r = new c();
            return (
                s(t, function (e, o) {
                    l(r, o, n(e, o, t));
                }),
                r
            );
        }
    }
);
