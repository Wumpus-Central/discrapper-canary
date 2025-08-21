t.d(n, { Z: () => b }), t(388685);
var i = t(647438),
    r = t(392711),
    a = t.n(r),
    l = t(442837),
    o = t(699682),
    c = t(70956),
    s = t(709054),
    d = t(897285),
    u = t(924301),
    _ = t(954313);
function b(e, n, t) {
    let r = (0, l.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(e)),
        b = (0, o.Z)(t),
        [p, h] = i.useState(null != t && null != r ? (0, _.PJ)(4, (0, _.Ho)(t), new Date(r.scheduled_start_time)) : []);
    i.useEffect(() => {
        if (null == b || null == t || null == r || a().isEqual(b, t)) return;
        let e = (0, _.Ho)(t);
        h((0, _.PJ)(p.length, e, new Date(r.scheduled_start_time)));
    }, [t, p.length, r, b]),
        i.useEffect(() => {
            if (null == n) return;
            let t = p.map((e) =>
                s.default.fromTimestamp(Math.floor(e.getTime() / c.Z.Millis.SECOND) * c.Z.Millis.SECOND),
            );
            d.Z.getGuildEventUserCounts(n, e, t);
        }, [e, n, p]);
    let f = i.useMemo(() => {
        if (null == t || 0 === p.length || (null == r ? void 0 : r.scheduled_start_time) == null) return !1;
        let e = new Date();
        e.setFullYear(e.getFullYear() + _.hn);
        let n = p[p.length - 1],
            i = (0, _.Ho)(t).after(n);
        return null != i && i <= e;
    }, [t, p, null == r ? void 0 : r.scheduled_start_time]);
    return {
        recurrenceStartTimes: p,
        canViewMoreRecurrences: f,
        updateRecurrenceStartTimes: () => {
            if (null == t || null == r) return;
            let e = (0, _.Ho)(t),
                n = p[p.length - 1];
            h([...p, ...(0, _.PJ)(4, e, n, !0)]);
        },
    };
}
