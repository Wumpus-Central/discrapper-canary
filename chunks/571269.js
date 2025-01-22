var i = r(147018),
    a = r(581031),
    o = r(676125),
    s = r(959318),
    l = r(714050),
    u = r(936940),
    c = a(''.charAt);
i(
    {
        target: 'String',
        proto: !0,
        forced: u(function () {
            return '\uD842' !== '\uD842\uDFB7'.at(-2);
        })
    },
    {
        at: function (e) {
            var n = l(o(this)),
                r = n.length,
                i = s(e),
                a = i >= 0 ? i : r + i;
            return a < 0 || a >= r ? void 0 : c(n, a);
        }
    }
);
