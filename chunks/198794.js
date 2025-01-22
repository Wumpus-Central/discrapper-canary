var i = r(67867),
    a = r(548828),
    o = r(228042),
    s = r(292137),
    l = TypeError;
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        reduce: function (e) {
            var n = o(this),
                r = arguments.length < 2,
                i = r ? void 0 : arguments[1];
            if (
                (a(e),
                s(n, function (a, o) {
                    r ? ((r = !1), (i = a)) : (i = e(i, a, o, n));
                }),
                r)
            )
                throw new l('Reduce of empty map with no initial value');
            return i;
        }
    }
);
