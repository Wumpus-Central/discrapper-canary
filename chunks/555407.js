n.d(e, { A: () => g });
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
function g(t, e, n) {
    let i = (0, s.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(t)),
        g = (0, a.A)(n),
        [m, v] = l.useState(null != n && null != i ? (0, h.er)(4, (0, h.X7)(n), new Date(i.scheduled_start_time)) : []);
    l.useEffect(() => {
        if (null == g || null == n || null == i || r().isEqual(g, n)) return;
        let t = (0, h.X7)(n);
        v((0, h.er)(m.length, t, new Date(i.scheduled_start_time)));
    }, [n, m.length, i, g]),
        l.useEffect(() => {
            if (null == e) return;
            let n = m.map((t) =>
                c.default.fromTimestamp(Math.floor(t.getTime() / u.A.Millis.SECOND) * u.A.Millis.SECOND),
            );
            d.A.getGuildEventUserCounts(e, t, n);
        }, [t, e, m]);
    let x = l.useMemo(() => {
        if (null == n || 0 === m.length || i?.scheduled_start_time == null) return !1;
        let t = new Date();
        t.setFullYear(t.getFullYear() + h.Ze);
        let e = m[m.length - 1],
            l = (0, h.X7)(n).after(e);
        return null != l && l <= t;
    }, [n, m, i?.scheduled_start_time]);
    return {
        recurrenceStartTimes: m,
        canViewMoreRecurrences: x,
        updateRecurrenceStartTimes: () => {
            if (null == n || null == i) return;
            let t = (0, h.X7)(n),
                e = m[m.length - 1];
            v([...m, ...(0, h.er)(4, t, e, !0)]);
        },
    };
}
