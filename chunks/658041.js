n.d(t, { M: () => c });
var r = n(913527),
    l = n.n(r),
    i = n(709054),
    u = n(765305);
function c(e, t, n, r) {
    let c = l()(),
        o = new Date(e.scheduled_start_time).getTime(),
        a = {
            start: o - u.VF,
            end: o,
        };
    if (c.isBetween(a.start, a.end)) {
        if (null != t) {
            let e = l()(t),
                n = e.isBetween(a.start, a.end),
                i = e.isBetween(l()(o).subtract(u.zV, "days"), o);
            return n || (i && !r) ? void 0 : u.X_.EVENT_STARTING_SOON;
        }
        return u.X_.EVENT_STARTING_SOON;
    }
    let s = i.default.extractTimestamp(e.id),
        d = Math.min((null != n ? n : s) + u.Fc, o);
    if (c.isBetween(s, d) && null == t && !r) return u.X_.NEW_EVENT;
}
