var l = n(536637),
    i = n.n(l),
    u = n(811091),
    r = n(988794);
n.d(
    t,
    {},
    {
        F: function (e, t, n, l) {
            let E = i()(),
                s = new Date(e.scheduled_start_time).getTime(),
                d = { start: s - r.Oz, end: s };
            if (E.isBetween(d.start, d.end)) {
                if (null != t) {
                    let e = i()(t),
                        n = e.isBetween(d.start, d.end),
                        u = e.isBetween(i()(s).subtract(4, "days"), s);
                    return n || (u && !l) ? void 0 : r.w0.EVENT_STARTING_SOON;
                }
                return r.w0.EVENT_STARTING_SOON;
            }
            let a = u.default.extractTimestamp(e.id),
                c = Math.min((n ?? a) + r.aj, s);
            if (E.isBetween(a, c) && null == t && !l) return r.w0.NEW_EVENT;
        },
    },
);
