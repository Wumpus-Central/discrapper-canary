var i = n(67867),
    r = n(43740),
    a = n(818140).indexOf,
    s = n(54659),
    o = r([].indexOf),
    l = !!o && 1 / o([1], 1, -0) < 0;
i(
    {
        target: 'Array',
        proto: !0,
        forced: l || !s('indexOf')
    },
    {
        indexOf: function (e) {
            var t = arguments.length > 1 ? arguments[1] : void 0;
            return l ? o(this, e, t) || 0 : a(this, e, t);
        }
    }
);
