var i = n(582128),
    r = n(570138),
    a = n(855986),
    s = n(778383),
    l = n(46653),
    o = n(290863),
    d = n(894768);
let c = new Set([r.y.XBOX, r.y.PLAYSTATION_4, r.y.PLAYSTATION_5]);
function u(e) {
    return (0, s.A)(e) && !c.has(e?.platform ?? "");
}
n.d(
    t,
    {},
    {
        Ay: function (e, t) {
            let n = (0, a.bG)([d.A, o.A, l.default], () =>
                l.default.getId() === e ? d.A.getActivities() : o.A.getActivities(e, t),
            );
            return i.useMemo(() => n.filter(u), [n]);
        },
        F9: u,
        nn: function (e, t) {
            return (l.default.getId() === e ? d.A.getActivities() : o.A.getActivities(e, t)).filter(u);
        },
    },
);
