n.d(e, { M: () => u });
var l = n(913527),
    r = n.n(l),
    i = n(709054),
    o = n(765305);
function u(t, e, n, l) {
    let u = r()(),
        c = new Date(t.scheduled_start_time).getTime(),
        a = {
            start: c - o.VF,
            end: c,
        };
    if (u.isBetween(a.start, a.end)) {
        if (null != e) {
            let t = r()(e),
                n = t.isBetween(a.start, a.end),
                i = t.isBetween(r()(c).subtract(o.zV, "days"), c);
            return n || (i && !l) ? void 0 : o.X_.EVENT_STARTING_SOON;
        }
        return o.X_.EVENT_STARTING_SOON;
    }
    let s = i.default.extractTimestamp(t.id),
        d = Math.min((null != n ? n : s) + o.Fc, c);
    if (u.isBetween(s, d) && null == e && !l) return o.X_.NEW_EVENT;
}
