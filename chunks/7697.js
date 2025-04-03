n.d(t, { Z: () => b }), n(47120);
var r = n(192379),
    l = n(392711),
    i = n.n(l),
    s = n(442837),
    o = n(699682),
    c = n(70956),
    u = n(709054),
    a = n(897285),
    d = n(924301),
    p = n(854698);
function b(e, t, n) {
    let l = (0, s.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(e)),
        b = (0, o.Z)(n),
        [g, x] = r.useState(null != n && null != l ? (0, p.PJ)(4, (0, p.Ho)(n), new Date(l.scheduled_start_time)) : []);
    r.useEffect(() => {
        if (null == b || null == n || null == l || i().isEqual(b, n)) return;
        let e = (0, p.Ho)(n);
        x((0, p.PJ)(g.length, e, new Date(l.scheduled_start_time)));
    }, [n, g.length, l, b]),
        r.useEffect(() => {
            if (null == t) return;
            let n = g.map((e) => u.default.fromTimestamp(Math.floor(e.getTime() / c.Z.Millis.SECOND) * c.Z.Millis.SECOND));
            a.Z.getGuildEventUserCounts(t, e, n);
        }, [e, t, g]);
    let f = r.useMemo(() => {
        if (null == n || 0 === g.length || (null == l ? void 0 : l.scheduled_start_time) == null) return !1;
        let e = new Date();
        e.setFullYear(e.getFullYear() + p.hn);
        let t = g[g.length - 1],
            r = (0, p.Ho)(n).after(t);
        return null != r && r <= e;
    }, [n, g, null == l ? void 0 : l.scheduled_start_time]);
    return {
        recurrenceStartTimes: g,
        canViewMoreRecurrences: f,
        updateRecurrenceStartTimes: () => {
            if (null == n || null == l) return;
            let e = (0, p.Ho)(n),
                t = g[g.length - 1];
            x([...g, ...(0, p.PJ)(4, e, t, !0)]);
        }
    };
}
