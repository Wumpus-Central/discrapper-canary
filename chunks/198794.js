var i = n(67867),
    r = n(548828),
    a = n(228042),
    s = n(292137),
    o = TypeError;
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        reduce: function (e) {
            var t = a(this),
                n = arguments.length < 2,
                i = n ? void 0 : arguments[1];
            if (
                (r(e),
                s(t, function (r, a) {
                    n ? ((n = !1), (i = r)) : (i = e(i, r, a, t));
                }),
                n)
            )
                throw new o('Reduce of empty map with no initial value');
            return i;
        }
    }
);
