n.d(e, { M: () => d });
var i = n(913527),
    l = n.n(i),
    r = n(709054),
    a = n(765305);
function d(t, e, n, i) {
    let d = l()(),
        s = new Date(t.scheduled_start_time).getTime(),
        u = {
            start: s - a.VF,
            end: s
        };
    if (d.isBetween(u.start, u.end)) {
        if (null != e) {
            let t = l()(e),
                n = t.isBetween(u.start, u.end),
                r = t.isBetween(l()(s).subtract(a.zV, 'days'), s);
            return n || (r && !i) ? void 0 : a.X_.EVENT_STARTING_SOON;
        }
        return a.X_.EVENT_STARTING_SOON;
    }
    let o = r.default.extractTimestamp(t.id),
        _ = Math.min((null != n ? n : o) + a.Fc, s);
    if (d.isBetween(o, _) && null == e && !i) return a.X_.NEW_EVENT;
}
