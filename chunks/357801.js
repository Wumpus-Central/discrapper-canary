"use strict";
n.d(t, { F: () => a });
var i = n(989349),
    s = n.n(i),
    l = n(661191),
    r = n(988794);
function a(e, t, n, i) {
    let a = s()(),
        o = new Date(e.scheduled_start_time).getTime(),
        c = { start: o - r.Oz, end: o };
    if (a.isBetween(c.start, c.end)) {
        if (null != t) {
            let e = s()(t),
                n = e.isBetween(c.start, c.end),
                l = e.isBetween(s()(o).subtract(r.nN, "days"), o);
            return n || (l && !i) ? void 0 : r.w0.EVENT_STARTING_SOON;
        }
        return r.w0.EVENT_STARTING_SOON;
    }
    let d = l.default.extractTimestamp(e.id),
        u = Math.min((n ?? d) + r.aj, o);
    if (a.isBetween(d, u) && null == t && !i) return r.w0.NEW_EVENT;
}
