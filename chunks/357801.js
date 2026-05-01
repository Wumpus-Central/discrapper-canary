"use strict";
n.d(t, { F: () => o });
var i = n(989349),
    r = n.n(i),
    s = n(935208),
    a = n(988794);
function o(e, t, n, i) {
    let o = r()(),
        l = new Date(e.scheduled_start_time).getTime(),
        u = { start: l - a.Oz, end: l };
    if (o.isBetween(u.start, u.end)) {
        if (null != t) {
            let e = r()(t),
                n = e.isBetween(u.start, u.end),
                s = e.isBetween(r()(l).subtract(a.nN, "days"), l);
            return n || (s && !i) ? void 0 : a.w0.EVENT_STARTING_SOON;
        }
        return a.w0.EVENT_STARTING_SOON;
    }
    let c = s.default.extractTimestamp(e.id),
        d = Math.min((n ?? c) + a.aj, l);
    if (o.isBetween(c, d) && null == t && !i) return a.w0.NEW_EVENT;
}
