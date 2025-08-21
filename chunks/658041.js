t.d(n, { M: () => o });
var r = t(913527),
    l = t.n(r),
    i = t(709054),
    c = t(765305);
function o(e, n, t, r) {
    let o = l()(),
        a = new Date(e.scheduled_start_time).getTime(),
        u = {
            start: a - c.VF,
            end: a,
        };
    if (o.isBetween(u.start, u.end)) {
        if (null != n) {
            let e = l()(n),
                t = e.isBetween(u.start, u.end),
                i = e.isBetween(l()(a).subtract(c.zV, "days"), a);
            return t || (i && !r) ? void 0 : c.X_.EVENT_STARTING_SOON;
        }
        return c.X_.EVENT_STARTING_SOON;
    }
    let s = i.default.extractTimestamp(e.id),
        d = Math.min((null != t ? t : s) + c.Fc, a);
    if (o.isBetween(s, d) && null == n && !r) return c.X_.NEW_EVENT;
}
