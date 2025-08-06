n.d(e, { Z: () => g }), n(388685);
var l = n(73800),
    i = n(392711),
    r = n.n(i),
    s = n(442837),
    a = n(699682),
    u = n(70956),
    c = n(709054),
    o = n(897285),
    d = n(924301),
    h = n(854698);
function g(t, e, n) {
    let i = (0, s.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(t)),
        g = (0, a.Z)(n),
        [m, p] = l.useState(null != n && null != i ? (0, h.PJ)(4, (0, h.Ho)(n), new Date(i.scheduled_start_time)) : []);
    l.useEffect(() => {
        if (null == g || null == n || null == i || r().isEqual(g, n)) return;
        let t = (0, h.Ho)(n);
        p((0, h.PJ)(m.length, t, new Date(i.scheduled_start_time)));
    }, [n, m.length, i, g]),
        l.useEffect(() => {
            if (null == e) return;
            let n = m.map((t) =>
                c.default.fromTimestamp(Math.floor(t.getTime() / u.Z.Millis.SECOND) * u.Z.Millis.SECOND),
            );
            o.Z.getGuildEventUserCounts(e, t, n);
        }, [t, e, m]);
    let v = l.useMemo(() => {
        if (null == n || 0 === m.length || (null == i ? void 0 : i.scheduled_start_time) == null) return !1;
        let t = new Date();
        t.setFullYear(t.getFullYear() + h.hn);
        let e = m[m.length - 1],
            l = (0, h.Ho)(n).after(e);
        return null != l && l <= t;
    }, [n, m, null == i ? void 0 : i.scheduled_start_time]);
    return {
        recurrenceStartTimes: m,
        canViewMoreRecurrences: v,
        updateRecurrenceStartTimes: () => {
            if (null == n || null == i) return;
            let t = (0, h.Ho)(n),
                e = m[m.length - 1];
            p([...m, ...(0, h.PJ)(4, t, e, !0)]);
        },
    };
}
