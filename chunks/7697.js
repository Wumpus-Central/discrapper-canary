t.d(n, { Z: () => f }), t(388685);
var a = t(473749),
    i = t(392711),
    r = t.n(i),
    l = t(442837),
    o = t(699682),
    c = t(70956),
    d = t(709054),
    s = t(897285),
    u = t(924301),
    b = t(854698);
function f(e, n, t) {
    let i = (0, l.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(e)),
        f = (0, o.Z)(t),
        [h, p] = a.useState(null != t && null != i ? (0, b.PJ)(4, (0, b.Ho)(t), new Date(i.scheduled_start_time)) : []);
    a.useEffect(() => {
        if (null == f || null == t || null == i || r().isEqual(f, t)) return;
        let e = (0, b.Ho)(t);
        p((0, b.PJ)(h.length, e, new Date(i.scheduled_start_time)));
    }, [t, h.length, i, f]),
        a.useEffect(() => {
            if (null == n) return;
            let t = h.map((e) =>
                d.default.fromTimestamp(Math.floor(e.getTime() / c.Z.Millis.SECOND) * c.Z.Millis.SECOND),
            );
            s.Z.getGuildEventUserCounts(n, e, t);
        }, [e, n, h]);
    let m = a.useMemo(() => {
        if (null == t || 0 === h.length || (null == i ? void 0 : i.scheduled_start_time) == null) return !1;
        let e = new Date();
        e.setFullYear(e.getFullYear() + b.hn);
        let n = h[h.length - 1],
            a = (0, b.Ho)(t).after(n);
        return null != a && a <= e;
    }, [t, h, null == i ? void 0 : i.scheduled_start_time]);
    return {
        recurrenceStartTimes: h,
        canViewMoreRecurrences: m,
        updateRecurrenceStartTimes: () => {
            if (null == t || null == i) return;
            let e = (0, b.Ho)(t),
                n = h[h.length - 1];
            p([...h, ...(0, b.PJ)(4, e, n, !0)]);
        },
    };
}
