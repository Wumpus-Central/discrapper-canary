n.d(t, { Z: () => g }), n(388685);
var i = n(647438),
    l = n(392711),
    r = n.n(l),
    a = n(442837),
    c = n(699682),
    o = n(70956),
    s = n(709054),
    u = n(897285),
    d = n(924301),
    _ = n(954313);
function g(e, t, n) {
    let l = (0, a.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(e)),
        g = (0, c.Z)(n),
        [h, p] = i.useState(null != n && null != l ? (0, _.PJ)(4, (0, _.Ho)(n), new Date(l.scheduled_start_time)) : []);
    i.useEffect(() => {
        if (null == g || null == n || null == l || r().isEqual(g, n)) return;
        let e = (0, _.Ho)(n);
        p((0, _.PJ)(h.length, e, new Date(l.scheduled_start_time)));
    }, [n, h.length, l, g]),
        i.useEffect(() => {
            if (null == t) return;
            let n = h.map((e) =>
                s.default.fromTimestamp(Math.floor(e.getTime() / o.Z.Millis.SECOND) * o.Z.Millis.SECOND),
            );
            u.Z.getGuildEventUserCounts(t, e, n);
        }, [e, t, h]);
    let v = i.useMemo(() => {
        if (null == n || 0 === h.length || (null == l ? void 0 : l.scheduled_start_time) == null) return !1;
        let e = new Date();
        e.setFullYear(e.getFullYear() + _.hn);
        let t = h[h.length - 1],
            i = (0, _.Ho)(n).after(t);
        return null != i && i <= e;
    }, [n, h, null == l ? void 0 : l.scheduled_start_time]);
    return {
        recurrenceStartTimes: h,
        canViewMoreRecurrences: v,
        updateRecurrenceStartTimes: () => {
            if (null == n || null == l) return;
            let e = (0, _.Ho)(n),
                t = h[h.length - 1];
            p([...h, ...(0, _.PJ)(4, e, t, !0)]);
        },
    };
}
