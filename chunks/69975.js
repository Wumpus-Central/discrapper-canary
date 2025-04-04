var r = n(220159),
    o = n(324474),
    a = n(519467),
    i = n(613694),
    s = n(717853),
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
        mapKeys: function (e) {
            var t = a(this),
                n = o(e, arguments.length > 1 ? arguments[1] : void 0),
                r = new c();
            return (
                s(t, function (e, o) {
                    l(r, n(e, o, t), e);
                }),
                r
            );
        }
    }
);
