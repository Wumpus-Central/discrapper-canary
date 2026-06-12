e.d(i, { e: () => p }), e(775443);
var s = e(927813),
    n = e(349435),
    l = e(557279),
    r = e(338510),
    m = e(168447),
    u = e(151119);
let a = +s.A.Millis.HOUR,
    _ = 12 * s.A.Millis.HOUR;
function p(t) {
    let i = (0, r.u)(t),
        e = (0, m.Y)(t),
        s = (0, u.S)(t);
    if (null == i || s || (0, l.S)(e)) return;
    let p = e.some((t) => t.type === n._j.INAPPROPRIATE_CONVERSATION_TIER_1),
        o = e
            .filter((t) => null != t.dismiss_timestamp)
            .sort((t, i) => (i.dismiss_timestamp < t.dismiss_timestamp ? -1 : 1));
    if (
        o.length < 1 ||
        !(function (t) {
            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == t) return !0;
            let e = new Date(t).getTime() + (i ? a : _);
            return new Date().getTime() >= e;
        })(o[0].dismiss_timestamp, p)
    )
        return;
    let d = e.filter((t) => null == t.dismiss_timestamp);
    return (
        d.findLast((t) => t.type === n._j.INAPPROPRIATE_CONVERSATION_TIER_1) ??
        d.findLast((t) => t.type === n._j.INAPPROPRIATE_CONVERSATION_TIER_2)
    );
}
