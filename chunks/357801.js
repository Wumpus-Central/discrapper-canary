n.d(t, {
    F: () => s,
});
var r = n(989349),
    l = n.n(r),
    i = n(661191),
    a = n(988794);

function s(e, t, n, r) {
    let s = l()(),
        o = new Date(e.scheduled_start_time).getTime(),
        c = {
            start: o - a.Oz,
            end: o,
        };
    if (s.isBetween(c.start, c.end)) {
        if (null != t) {
            let e = l()(t),
                n = e.isBetween(c.start, c.end),
                i = e.isBetween(l()(o).subtract(a.nN, "days"), o);
            return n || (i && !r) ? void 0 : a.w0.EVENT_STARTING_SOON;
        }
        return a.w0.EVENT_STARTING_SOON;
    }
    let u = i.default.extractTimestamp(e.id),
        d = Math.min((null != n ? n : u) + a.aj, o);
    if (s.isBetween(u, d) && null == t && !r) return a.w0.NEW_EVENT;
}
