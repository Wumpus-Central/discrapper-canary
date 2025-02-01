var i = n(147018),
    r = n(581031),
    a = n(676125),
    s = n(959318),
    o = n(714050),
    l = n(936940),
    u = r(''.charAt);
i(
    {
        target: 'String',
        proto: !0,
        forced: l(function () {
            return '\uD842' !== '\uD842\uDFB7'.at(-2);
        })
    },
    {
        at: function (e) {
            var t = o(a(this)),
                n = t.length,
                i = s(e),
                r = i >= 0 ? i : n + i;
            return r < 0 || r >= n ? void 0 : u(t, r);
        }
    }
);
