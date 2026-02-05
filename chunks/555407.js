n.d(e, { A: () => m });
var l = n(64700),
    i = n(735438),
    r = n.n(i),
    s = n(311907),
    a = n(919796),
    u = n(927813),
    c = n(661191),
    d = n(285059),
    o = n(698441),
    h = n(974930);
function m(t, e, n) {
    let i = (0, s.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(t)),
        m = (0, a.A)(n),
        [g, x] = l.useState(null != n && null != i ? (0, h.er)(4, (0, h.X7)(n), new Date(i.scheduled_start_time)) : []);
    l.useEffect(() => {
        if (null == m || null == n || null == i || r().isEqual(m, n)) return;
        let t = (0, h.X7)(n);
        x((0, h.er)(g.length, t, new Date(i.scheduled_start_time)));
    }, [n, g.length, i, m]),
        l.useEffect(() => {
            if (null == e) return;
            let n = g.map((t) =>
                c.default.fromTimestamp(Math.floor(t.getTime() / u.A.Millis.SECOND) * u.A.Millis.SECOND),
            );
            d.A.getGuildEventUserCounts(e, t, n);
        }, [t, e, g]);
    let v = l.useMemo(() => {
        if (null == n || 0 === g.length || i?.scheduled_start_time == null) return !1;
        let t = new Date();
        t.setFullYear(t.getFullYear() + h.Ze);
        let e = g[g.length - 1],
            l = (0, h.X7)(n).after(e);
        return null != l && l <= t;
    }, [n, g, i?.scheduled_start_time]);
    return {
        recurrenceStartTimes: g,
        canViewMoreRecurrences: v,
        updateRecurrenceStartTimes: () => {
            if (null == n || null == i) return;
            let t = (0, h.X7)(n),
                e = g[g.length - 1];
            x([...g, ...(0, h.er)(4, t, e, !0)]);
        },
    };
}
