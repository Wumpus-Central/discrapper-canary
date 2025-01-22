n.d(e, {
    M: function () {
        return a;
    }
});
var i = n(913527),
    l = n.n(i),
    r = n(709054),
    d = n(765305);
function a(t, e, n, i) {
    let a = l()(),
        u = new Date(t.scheduled_start_time).getTime(),
        s = {
            start: u - d.VF,
            end: u
        };
    if (a.isBetween(s.start, s.end)) {
        if (null != e) {
            let t = l()(e),
                n = t.isBetween(s.start, s.end),
                r = t.isBetween(l()(u).subtract(d.zV, 'days'), u);
            return n || (r && !i) ? void 0 : d.X_.EVENT_STARTING_SOON;
        }
        return d.X_.EVENT_STARTING_SOON;
    }
    let o = r.default.extractTimestamp(t.id),
        _ = Math.min((null != n ? n : o) + d.Fc, u);
    if (a.isBetween(o, _) && null == e && !i) return d.X_.NEW_EVENT;
}
