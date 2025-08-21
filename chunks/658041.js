n.d(t, { M: () => a });
var l = n(913527),
    i = n.n(l),
    r = n(709054),
    u = n(765305);
function a(e, t, n, l) {
    let a = i()(),
        o = new Date(e.scheduled_start_time).getTime(),
        s = {
            start: o - u.VF,
            end: o,
        };
    if (a.isBetween(s.start, s.end)) {
        if (null != t) {
            let e = i()(t),
                n = e.isBetween(s.start, s.end),
                r = e.isBetween(i()(o).subtract(u.zV, "days"), o);
            return n || (r && !l) ? void 0 : u.X_.EVENT_STARTING_SOON;
        }
        return u.X_.EVENT_STARTING_SOON;
    }
    let c = r.default.extractTimestamp(e.id),
        d = Math.min((null != n ? n : c) + u.Fc, o);
    if (a.isBetween(c, d) && null == t && !l) return u.X_.NEW_EVENT;
}
