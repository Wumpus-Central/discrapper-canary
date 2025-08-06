n.d(t, { M: () => s });
var r = n(913527),
    i = n.n(r),
    o = n(709054),
    a = n(765305);
function s(e, t, n, r) {
    let s = i()(),
        l = new Date(e.scheduled_start_time).getTime(),
        c = {
            start: l - a.VF,
            end: l,
        };
    if (s.isBetween(c.start, c.end)) {
        if (null != t) {
            let e = i()(t),
                n = e.isBetween(c.start, c.end),
                o = e.isBetween(i()(l).subtract(a.zV, "days"), l);
            return n || (o && !r) ? void 0 : a.X_.EVENT_STARTING_SOON;
        }
        return a.X_.EVENT_STARTING_SOON;
    }
    let u = o.default.extractTimestamp(e.id),
        d = Math.min((null != n ? n : u) + a.Fc, l);
    if (s.isBetween(u, d) && null == t && !r) return a.X_.NEW_EVENT;
}
