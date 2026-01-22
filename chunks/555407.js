n.d(t, {
    A: () => b,
}),
    n(896048);
var l = n(64700),
    a = n(735438),
    i = n.n(a),
    c = n(311907),
    r = n(919796),
    s = n(927813),
    d = n(661191),
    u = n(285059),
    o = n(698441),
    f = n(974930);

function b(e, t, n) {
    let a = (0, c.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(e)),
        b = (0, r.A)(n),
        [h, _] = l.useState(null != n && null != a ? (0, f.er)(4, (0, f.X7)(n), new Date(a.scheduled_start_time)) : []);
    l.useEffect(() => {
        if (null == b || null == n || null == a || i().isEqual(b, n)) return;
        let e = (0, f.X7)(n);
        _((0, f.er)(h.length, e, new Date(a.scheduled_start_time)));
    }, [n, h.length, a, b]),
        l.useEffect(() => {
            if (null == t) return;
            let n = h.map((e) =>
                d.default.fromTimestamp(Math.floor(e.getTime() / s.A.Millis.SECOND) * s.A.Millis.SECOND),
            );
            u.A.getGuildEventUserCounts(t, e, n);
        }, [e, t, h]);
    let m = l.useMemo(() => {
        if (null == n || 0 === h.length || (null == a ? void 0 : a.scheduled_start_time) == null) return !1;
        let e = new Date();
        e.setFullYear(e.getFullYear() + f.Ze);
        let t = h[h.length - 1],
            l = (0, f.X7)(n).after(t);
        return null != l && l <= e;
    }, [n, h, null == a ? void 0 : a.scheduled_start_time]);
    return {
        recurrenceStartTimes: h,
        canViewMoreRecurrences: m,
        updateRecurrenceStartTimes: () => {
            if (null == n || null == a) return;
            let e = (0, f.X7)(n),
                t = h[h.length - 1];
            _([...h, ...(0, f.er)(4, e, t, !0)]);
        },
    };
}
