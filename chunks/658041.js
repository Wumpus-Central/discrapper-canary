n.d(t, { M: () => o });
var i = n(913527),
    r = n.n(i),
    l = n(709054),
    a = n(765305);
function o(e, t, n, i) {
    let o = r()(),
        s = new Date(e.scheduled_start_time).getTime(),
        c = {
            start: s - a.VF,
            end: s,
        };
    if (o.isBetween(c.start, c.end)) {
        if (null != t) {
            let e = r()(t),
                n = e.isBetween(c.start, c.end),
                l = e.isBetween(r()(s).subtract(a.zV, "days"), s);
            return n || (l && !i) ? void 0 : a.X_.EVENT_STARTING_SOON;
        }
        return a.X_.EVENT_STARTING_SOON;
    }
    let u = l.default.extractTimestamp(e.id),
        d = Math.min((null != n ? n : u) + a.Fc, s);
    if (o.isBetween(u, d) && null == t && !i) return a.X_.NEW_EVENT;
}
