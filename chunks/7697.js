t.d(n, { Z: () => p }), t(388685);
var i = t(647438),
    a = t(392711),
    r = t.n(a),
    l = t(442837),
    o = t(699682),
    c = t(70956),
    s = t(709054),
    d = t(897285),
    u = t(924301),
    _ = t(954313);
function p(e, n, t) {
    let a = (0, l.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(e)),
        p = (0, o.Z)(t),
        [b, g] = i.useState(null != t && null != a ? (0, _.PJ)(4, (0, _.Ho)(t), new Date(a.scheduled_start_time)) : []);
    i.useEffect(() => {
        if (null == p || null == t || null == a || r().isEqual(p, t)) return;
        let e = (0, _.Ho)(t);
        g((0, _.PJ)(b.length, e, new Date(a.scheduled_start_time)));
    }, [t, b.length, a, p]),
        i.useEffect(() => {
            if (null == n) return;
            let t = b.map((e) =>
                s.default.fromTimestamp(Math.floor(e.getTime() / c.Z.Millis.SECOND) * c.Z.Millis.SECOND),
            );
            d.Z.getGuildEventUserCounts(n, e, t);
        }, [e, n, b]);
    let h = i.useMemo(() => {
        if (null == t || 0 === b.length || (null == a ? void 0 : a.scheduled_start_time) == null) return !1;
        let e = new Date();
        e.setFullYear(e.getFullYear() + _.hn);
        let n = b[b.length - 1],
            i = (0, _.Ho)(t).after(n);
        return null != i && i <= e;
    }, [t, b, null == a ? void 0 : a.scheduled_start_time]);
    return {
        recurrenceStartTimes: b,
        canViewMoreRecurrences: h,
        updateRecurrenceStartTimes: () => {
            if (null == t || null == a) return;
            let e = (0, _.Ho)(t),
                n = b[b.length - 1];
            g([...b, ...(0, _.PJ)(4, e, n, !0)]);
        },
    };
}
