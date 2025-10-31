n.d(t, { M: () => o });
var r = n(913527),
    i = n.n(r),
    l = n(709054),
    a = n(765305);
function o(e, t, n, r) {
    let o = i()(),
        s = new Date(e.scheduled_start_time).getTime(),
        c = {
            start: s - a.VF,
            end: s,
        };
    if (o.isBetween(c.start, c.end)) {
        if (null != t) {
            let e = i()(t),
                n = e.isBetween(c.start, c.end),
                l = e.isBetween(i()(s).subtract(a.zV, "days"), s);
            return n || (l && !r) ? void 0 : a.X_.EVENT_STARTING_SOON;
        }
        return a.X_.EVENT_STARTING_SOON;
    }
    let u = l.default.extractTimestamp(e.id),
        d = Math.min((null != n ? n : u) + a.Fc, s);
    if (o.isBetween(u, d) && null == t && !r) return a.X_.NEW_EVENT;
}
