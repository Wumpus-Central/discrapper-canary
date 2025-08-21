t.d(n, { Z: () => p }), t(388685);
var r = t(647438),
    i = t(392711),
    a = t.n(i),
    l = t(442837),
    o = t(699682),
    c = t(70956),
    s = t(709054),
    d = t(897285),
    u = t(924301),
    _ = t(954313);
function p(e, n, t) {
    let i = (0, l.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(e)),
        p = (0, o.Z)(t),
        [b, h] = r.useState(null != t && null != i ? (0, _.PJ)(4, (0, _.Ho)(t), new Date(i.scheduled_start_time)) : []);
    r.useEffect(() => {
        if (null == p || null == t || null == i || a().isEqual(p, t)) return;
        let e = (0, _.Ho)(t);
        h((0, _.PJ)(b.length, e, new Date(i.scheduled_start_time)));
    }, [t, b.length, i, p]),
        r.useEffect(() => {
            if (null == n) return;
            let t = b.map((e) =>
                s.default.fromTimestamp(Math.floor(e.getTime() / c.Z.Millis.SECOND) * c.Z.Millis.SECOND),
            );
            d.Z.getGuildEventUserCounts(n, e, t);
        }, [e, n, b]);
    let m = r.useMemo(() => {
        if (null == t || 0 === b.length || (null == i ? void 0 : i.scheduled_start_time) == null) return !1;
        let e = new Date();
        e.setFullYear(e.getFullYear() + _.hn);
        let n = b[b.length - 1],
            r = (0, _.Ho)(t).after(n);
        return null != r && r <= e;
    }, [t, b, null == i ? void 0 : i.scheduled_start_time]);
    return {
        recurrenceStartTimes: b,
        canViewMoreRecurrences: m,
        updateRecurrenceStartTimes: () => {
            if (null == t || null == i) return;
            let e = (0, _.Ho)(t),
                n = b[b.length - 1];
            h([...b, ...(0, _.PJ)(4, e, n, !0)]);
        },
    };
}
