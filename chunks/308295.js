var r = n(220159),
    o = n(691593),
    a = n(519467),
    i = n(717853),
    s = TypeError;
r(
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
                r = n ? void 0 : arguments[1];
            if (
                (o(e),
                i(t, function (o, a) {
                    n ? ((n = !1), (r = o)) : (r = e(r, o, a, t));
                }),
                n)
            )
                throw new s('Reduce of empty map with no initial value');
            return r;
        }
    }
);
