"use strict";
n.d(t, { Ay: () => o, YR: () => d, nh: () => l });
var i = n(17928),
    r = n(698441),
    s = n(722260),
    a = n(974930);
function o(e, t) {
    t = t ?? (0, a.G3)(e);
    let n = (0, s.A)(t, e.id);
    return _(e, n, t);
}
function l(e, t) {
    let n = (0, i.bG)([r.Ay], () => r.Ay.getGuildScheduledEvent(e));
    t = t ?? (0, a.G3)(n);
    let o = (0, s.A)(t, n?.id);
    return null == n ? null : _(n, o, t);
}
function d(e, t) {
    let n = (0, s.m)(t, e.id);
    return _(e, n, t);
}
function _(e, t, n) {
    if (null == e.recurrence_rule || null == n)
        return {
            startTime: new Date(e.scheduled_start_time),
            endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null,
        };
    let i = (0, a.CI)(n, e),
        { startDate: r, endDate: s } = (0, a.Ri)(i, t);
    return { startTime: r.toDate(), endTime: s?.toDate() };
}
