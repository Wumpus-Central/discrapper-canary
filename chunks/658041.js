n.d(t, { M: () => s });
var r = n(913527),
    i = n.n(r),
    a = n(709054),
    o = n(765305);
function s(e, t, n, r) {
    let s = i()(),
        l = new Date(e.scheduled_start_time).getTime(),
        c = {
            start: l - o.VF,
            end: l
        };
    if (s.isBetween(c.start, c.end)) {
        if (null != t) {
            let e = i()(t),
                n = e.isBetween(c.start, c.end),
                a = e.isBetween(i()(l).subtract(o.zV, 'days'), l);
            return n || (a && !r) ? void 0 : o.X_.EVENT_STARTING_SOON;
        }
        return o.X_.EVENT_STARTING_SOON;
    }
    let u = a.default.extractTimestamp(e.id),
        d = Math.min((null != n ? n : u) + o.Fc, l);
    if (s.isBetween(u, d) && null == t && !r) return o.X_.NEW_EVENT;
}
