n.d(e, { M: () => a });
var i = n(913527),
    l = n.n(i),
    d = n(709054),
    r = n(765305);
function a(t, e, n, i) {
    let a = l()(),
        s = new Date(t.scheduled_start_time).getTime(),
        u = {
            start: s - r.VF,
            end: s
        };
    if (a.isBetween(u.start, u.end)) {
        if (null != e) {
            let t = l()(e),
                n = t.isBetween(u.start, u.end),
                d = t.isBetween(l()(s).subtract(r.zV, 'days'), s);
            return n || (d && !i) ? void 0 : r.X_.EVENT_STARTING_SOON;
        }
        return r.X_.EVENT_STARTING_SOON;
    }
    let _ = d.default.extractTimestamp(t.id),
        E = Math.min((null != n ? n : _) + r.Fc, s);
    if (a.isBetween(_, E) && null == e && !i) return r.X_.NEW_EVENT;
}
