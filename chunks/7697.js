(n.d(e, { Z: () => g }), n(388685));
var r = n(73800),
    l = n(392711),
    i = n.n(l),
    s = n(442837),
    c = n(699682),
    o = n(70956),
    a = n(709054),
    u = n(897285),
    d = n(924301),
    p = n(854698);
function g(t, e, n) {
    let l = (0, s.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(t)),
        g = (0, c.Z)(n),
        [b, f] = r.useState(null != n && null != l ? (0, p.PJ)(4, (0, p.Ho)(n), new Date(l.scheduled_start_time)) : []);
    (r.useEffect(() => {
        if (null == g || null == n || null == l || i().isEqual(g, n)) return;
        let t = (0, p.Ho)(n);
        f((0, p.PJ)(b.length, t, new Date(l.scheduled_start_time)));
    }, [n, b.length, l, g]),
        r.useEffect(() => {
            if (null == e) return;
            let n = b.map((t) => a.default.fromTimestamp(Math.floor(t.getTime() / o.Z.Millis.SECOND) * o.Z.Millis.SECOND));
            u.Z.getGuildEventUserCounts(e, t, n);
        }, [t, e, b]));
    let m = r.useMemo(() => {
        if (null == n || 0 === b.length || (null == l ? void 0 : l.scheduled_start_time) == null) return !1;
        let t = new Date();
        t.setFullYear(t.getFullYear() + p.hn);
        let e = b[b.length - 1],
            r = (0, p.Ho)(n).after(e);
        return null != r && r <= t;
    }, [n, b, null == l ? void 0 : l.scheduled_start_time]);
    return {
        recurrenceStartTimes: b,
        canViewMoreRecurrences: m,
        updateRecurrenceStartTimes: () => {
            if (null == n || null == l) return;
            let t = (0, p.Ho)(n),
                e = b[b.length - 1];
            f([...b, ...(0, p.PJ)(4, t, e, !0)]);
        }
    };
}
