n.d(t, { e: () => d }), n(638769), n(775443);
var r = n(927813),
    l = n(349435),
    i = n(557279),
    a = n(338510),
    s = n(168447),
    o = n(151119);
let c = +r.A.Millis.HOUR,
    u = 12 * r.A.Millis.HOUR;
function d(e) {
    var t;
    let n = (0, a.u)(e),
        r = (0, s.Y)(e),
        d = (0, o.S)(e);
    if (null == n || d || (0, i.S)(r)) return;
    let f = r.some((e) => e.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_1),
        p = r
            .filter((e) => null != e.dismiss_timestamp)
            .sort((e, t) => (t.dismiss_timestamp < e.dismiss_timestamp ? -1 : 1));
    if (
        p.length < 1 ||
        !(function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == e) return !0;
            let n = new Date(e).getTime() + (t ? c : u);
            return new Date().getTime() >= n;
        })(p[0].dismiss_timestamp, f)
    )
        return;
    let h = r.filter((e) => null == e.dismiss_timestamp);
    return null != (t = h.findLast((e) => e.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_1))
        ? t
        : h.findLast((e) => e.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_2);
}
