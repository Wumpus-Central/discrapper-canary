var i = r(67867),
    a = r(43740),
    o = r(818140).indexOf,
    s = r(54659),
    l = a([].indexOf),
    u = !!l && 1 / l([1], 1, -0) < 0;
i(
    {
        target: 'Array',
        proto: !0,
        forced: u || !s('indexOf')
    },
    {
        indexOf: function (e) {
            var n = arguments.length > 1 ? arguments[1] : void 0;
            return u ? l(this, e, n) || 0 : o(this, e, n);
        }
    }
);
