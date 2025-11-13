t.d(n, { Z: () => h }), t(388685);
var i = t(647438),
    l = t(392711),
    r = t.n(l),
    a = t(442837),
    c = t(699682),
    s = t(70956),
    o = t(709054),
    u = t(897285),
    d = t(924301),
    _ = t(954313);
function h(e, n, t) {
    let l = (0, a.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(e)),
        h = (0, c.Z)(t),
        [g, v] = i.useState(null != t && null != l ? (0, _.PJ)(4, (0, _.Ho)(t), new Date(l.scheduled_start_time)) : []);
    i.useEffect(() => {
        if (null == h || null == t || null == l || r().isEqual(h, t)) return;
        let e = (0, _.Ho)(t);
        v((0, _.PJ)(g.length, e, new Date(l.scheduled_start_time)));
    }, [t, g.length, l, h]),
        i.useEffect(() => {
            if (null == n) return;
            let t = g.map((e) =>
                o.default.fromTimestamp(Math.floor(e.getTime() / s.Z.Millis.SECOND) * s.Z.Millis.SECOND),
            );
            u.Z.getGuildEventUserCounts(n, e, t);
        }, [e, n, g]);
    let f = i.useMemo(() => {
        if (null == t || 0 === g.length || (null == l ? void 0 : l.scheduled_start_time) == null) return !1;
        let e = new Date();
        e.setFullYear(e.getFullYear() + _.hn);
        let n = g[g.length - 1],
            i = (0, _.Ho)(t).after(n);
        return null != i && i <= e;
    }, [t, g, null == l ? void 0 : l.scheduled_start_time]);
    return {
        recurrenceStartTimes: g,
        canViewMoreRecurrences: f,
        updateRecurrenceStartTimes: () => {
            if (null == t || null == l) return;
            let e = (0, _.Ho)(t),
                n = g[g.length - 1];
            v([...g, ...(0, _.PJ)(4, e, n, !0)]);
        },
    };
}
