n.d(t, { M: () => c });
var l = n(913527),
    r = n.n(l),
    u = n(709054),
    i = n(765305);
function c(e, t, n, l) {
    let c = r()(),
        E = new Date(e.scheduled_start_time).getTime(),
        d = {
            start: E - i.VF,
            end: E
        };
    if (c.isBetween(d.start, d.end)) {
        if (null != t) {
            let e = r()(t),
                n = e.isBetween(d.start, d.end),
                u = e.isBetween(r()(E).subtract(i.zV, 'days'), E);
            return n || (u && !l) ? void 0 : i.X_.EVENT_STARTING_SOON;
        }
        return i.X_.EVENT_STARTING_SOON;
    }
    let o = u.default.extractTimestamp(e.id),
        a = Math.min((null != n ? n : o) + i.Fc, E);
    if (c.isBetween(o, a) && null == t && !l) return i.X_.NEW_EVENT;
}
