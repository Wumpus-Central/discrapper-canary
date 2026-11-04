var n = t(582128),
    l = t(855986),
    s = t(46653),
    a = t(290863),
    r = t(894768),
    d = t(778383);
let o = [];
t.d(
    i,
    {},
    {
        A: function (e, i) {
            let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                u = (0, l.bG)([r.A, a.A, s.default], () =>
                    t ? (s.default.getId() === e ? r.A.getActivities() : a.A.getActivities(e, i)) : o,
                );
            return n.useMemo(() => u.filter(d.A), [u]);
        },
    },
);
