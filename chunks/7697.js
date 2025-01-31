l.d(n, { Z: () => k }), l(47120);
var e = l(192379),
    i = l(392711),
    s = l.n(i),
    r = l(442837),
    o = l(699682),
    a = l(70956),
    u = l(709054),
    c = l(897285),
    d = l(924301),
    x = l(854698);
function k(t, n, l) {
    let i = (0, r.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(t)),
        k = (0, o.Z)(l),
        [h, m] = e.useState(null != l && null != i ? (0, x.PJ)(4, (0, x.Ho)(l), new Date(i.scheduled_start_time)) : []);
    e.useEffect(() => {
        if (null == k || null == l || null == i || s().isEqual(k, l)) return;
        let t = (0, x.Ho)(l);
        m((0, x.PJ)(h.length, t, new Date(i.scheduled_start_time)));
    }, [l, h.length, i, k]),
        e.useEffect(() => {
            if (null == n) return;
            let l = h.map((t) => u.default.fromTimestamp(Math.floor(t.getTime() / a.Z.Millis.SECOND) * a.Z.Millis.SECOND));
            c.Z.getGuildEventUserCounts(n, t, l);
        }, [t, n, h]);
    let z = e.useMemo(() => {
        if (null == l || 0 === h.length || (null == i ? void 0 : i.scheduled_start_time) == null) return !1;
        let t = new Date();
        t.setFullYear(t.getFullYear() + x.hn);
        let n = h[h.length - 1],
            e = (0, x.Ho)(l).after(n);
        return null != e && e <= t;
    }, [l, h, null == i ? void 0 : i.scheduled_start_time]);
    return {
        recurrenceStartTimes: h,
        canViewMoreRecurrences: z,
        updateRecurrenceStartTimes: () => {
            if (null == l || null == i) return;
            let t = (0, x.Ho)(l),
                n = h[h.length - 1];
            m([...h, ...(0, x.PJ)(4, t, n, !0)]);
        }
    };
}
