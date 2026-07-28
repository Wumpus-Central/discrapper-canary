"use strict";
n.d(t, { F: () => l });
var i = n(989349),
    r = n.n(i),
    a = n(935208),
    s = n(988794);
function l(e, t, n, i) {
    let l = r()(),
        o = new Date(e.scheduled_start_time).getTime(),
        d = { start: o - s.Oz, end: o };
    if (l.isBetween(d.start, d.end)) {
        if (null != t) {
            let e = r()(t),
                n = e.isBetween(d.start, d.end),
                a = e.isBetween(r()(o).subtract(s.nN, "days"), o);
            return n || (a && !i) ? void 0 : s.w0.EVENT_STARTING_SOON;
        }
        return s.w0.EVENT_STARTING_SOON;
    }
    let c = a.default.extractTimestamp(e.id),
        u = Math.min((n ?? c) + s.aj, o);
    if (l.isBetween(c, u) && null == t && !i) return s.w0.NEW_EVENT;
}
