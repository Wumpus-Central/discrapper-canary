var i = n(855986),
    r = n(698441),
    a = n(722260),
    s = n(974930);
function l(e, t, n) {
    if (null == e.recurrence_rule || null == n)
        return {
            startTime: new Date(e.scheduled_start_time),
            endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null,
        };
    let i = (0, s.CI)(n, e),
        { startDate: r, endDate: a } = (0, s.Ri)(i, t);
    return { startTime: r.toDate(), endTime: a?.toDate() };
}
n.d(
    t,
    {},
    {
        Ay: function (e, t) {
            t = t ?? (0, s.G3)(e);
            let n = (0, a.A)(t, e.id);
            return l(e, n, t);
        },
        YR: function (e, t) {
            let n = (0, a.m)(t, e.id);
            return l(e, n, t);
        },
        nh: function (e, t) {
            let n = (0, i.bG)([r.Ay], () => r.Ay.getGuildScheduledEvent(e));
            t = t ?? (0, s.G3)(n);
            let o = (0, a.A)(t, n?.id);
            return null == n ? null : l(n, o, t);
        },
    },
);
