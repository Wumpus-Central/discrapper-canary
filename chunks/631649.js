var a = u(582128),
    s = u(855986),
    i = u(496431),
    p = u(287809),
    r = u(927813),
    c = u(773527),
    l = u(211824);
let n = 60 * r.A.Millis.SECOND,
    d = Object.values(l.vB);
u.d(
    t,
    {},
    {
        k: function (e) {
            let t = (0, s.bG)([p.default], () => p.default.getCurrentUser()?.premiumType),
                u = a.useMemo(() => (null != e ? (0, c.cC)(e, t) : Math.min(...d.map((e) => (0, c.cC)(e, t)))), [e, t]),
                { days: r, hours: l } = (0, i.A)(u, n);
            return Math.max(r + +(l > 0), 1);
        },
    },
);
