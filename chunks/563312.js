n.d(t, {
    Ay: () => o,
    YR: () => c,
    nh: () => l,
});
var r = n(311907),
    i = n(698441),
    a = n(722260),
    s = n(974930);

function o(e, t) {
    t = null != t ? t : (0, s.G3)(e);
    let n = (0, a.A)(t, e.id);
    return u(e, n, t);
}

function l(e, t) {
    let n = (0, r.bG)([i.Ay], () => i.Ay.getGuildScheduledEvent(e));
    t = null != t ? t : (0, s.G3)(n);
    let o = (0, a.A)(t, null == n ? void 0 : n.id);
    return null == n ? null : u(n, o, t);
}

function c(e, t) {
    let n = (0, a.m)(t, e.id);
    return u(e, n, t);
}

function u(e, t, n) {
    if (null == e.recurrence_rule || null == n)
        return {
            startTime: new Date(e.scheduled_start_time),
            endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null,
        };
    let r = (0, s.CI)(n, e),
        { startDate: i, endDate: a } = (0, s.Ri)(r, t);
    return {
        startTime: i.toDate(),
        endTime: null == a ? void 0 : a.toDate(),
    };
}
