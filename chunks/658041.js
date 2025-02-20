n.d(t, { M: () => c });
var l = n(913527),
    r = n.n(l),
    i = n(709054),
    u = n(765305);
function c(e, t, n, l) {
    let c = r()(),
        d = new Date(e.scheduled_start_time).getTime(),
        o = {
            start: d - u.VF,
            end: d
        };
    if (c.isBetween(o.start, o.end)) {
        if (null != t) {
            let e = r()(t),
                n = e.isBetween(o.start, o.end),
                i = e.isBetween(r()(d).subtract(u.zV, 'days'), d);
            return n || (i && !l) ? void 0 : u.X_.EVENT_STARTING_SOON;
        }
        return u.X_.EVENT_STARTING_SOON;
    }
    let E = i.default.extractTimestamp(e.id),
        a = Math.min((null != n ? n : E) + u.Fc, d);
    if (c.isBetween(E, a) && null == t && !l) return u.X_.NEW_EVENT;
}
