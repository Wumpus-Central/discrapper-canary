var r = n(67867),
    i = n(476508),
    o = n(228042),
    a = n(146321),
    s = n(292137),
    l = a.Map,
    c = a.set;
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        filter: function (e) {
            var t = o(this),
                n = i(e, arguments.length > 1 ? arguments[1] : void 0),
                r = new l();
            return (
                s(t, function (e, i) {
                    n(e, i, t) && c(r, i, e);
                }),
                r
            );
        }
    }
);
