t.d(n, { Z: () => p }), t(388685);
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
function p(e, n, t) {
    let r = (0, l.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(e)),
        p = (0, o.Z)(t),
        [v, m] = i.useState(null != t && null != r ? (0, _.PJ)(4, (0, _.Ho)(t), new Date(r.scheduled_start_time)) : []);
    i.useEffect(() => {
        if (null == p || null == t || null == r || a().isEqual(p, t)) return;
        let e = (0, _.Ho)(t);
        m((0, _.PJ)(v.length, e, new Date(r.scheduled_start_time)));
    }, [t, v.length, r, p]),
        i.useEffect(() => {
            if (null == n) return;
            let t = v.map((e) =>
                s.default.fromTimestamp(Math.floor(e.getTime() / c.Z.Millis.SECOND) * c.Z.Millis.SECOND),
            );
            d.Z.getGuildEventUserCounts(n, e, t);
        }, [e, n, v]);
    let f = i.useMemo(() => {
        if (null == t || 0 === v.length || (null == r ? void 0 : r.scheduled_start_time) == null) return !1;
        let e = new Date();
        e.setFullYear(e.getFullYear() + _.hn);
        let n = v[v.length - 1],
            i = (0, _.Ho)(t).after(n);
        return null != i && i <= e;
    }, [t, v, null == r ? void 0 : r.scheduled_start_time]);
    return {
        recurrenceStartTimes: v,
        canViewMoreRecurrences: f,
        updateRecurrenceStartTimes: () => {
            if (null == t || null == r) return;
            let e = (0, _.Ho)(t),
                n = v[v.length - 1];
            m([...v, ...(0, _.PJ)(4, e, n, !0)]);
        },
    };
}
