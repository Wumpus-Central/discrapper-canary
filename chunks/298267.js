var i = n(147018),
    r = n(339718),
    a = n(49693),
    s = n(959318),
    o = n(345374);
i(
    {
        target: 'Array',
        proto: !0
    },
    {
        at: function (e) {
            var t = r(this),
                n = a(t),
                i = s(e),
                o = i >= 0 ? i : n + i;
            return o < 0 || o >= n ? void 0 : t[o];
        }
    }
),
    o('at');
