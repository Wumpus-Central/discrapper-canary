n.d(t, { e: () => u }), n(775443);
var i = n(927813),
    l = n(349435),
    s = n(557279),
    a = n(338510),
    r = n(168447),
    o = n(151119);
let c = +i.A.Millis.HOUR,
    d = 12 * i.A.Millis.HOUR;
function u(e) {
    let t = (0, a.u)(e),
        n = (0, r.Y)(e),
        i = (0, o.S)(e);
    if (null == t || i || (0, s.S)(n)) return;
    let u = n.some((e) => e.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_1),
        h = n
            .filter((e) => null != e.dismiss_timestamp)
            .sort((e, t) => (t.dismiss_timestamp < e.dismiss_timestamp ? -1 : 1));
    if (
        h.length < 1 ||
        !(function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == e) return !0;
            let n = new Date(e).getTime() + (t ? c : d);
            return new Date().getTime() >= n;
        })(h[0].dismiss_timestamp, u)
    )
        return;
    let A = n.filter((e) => null == e.dismiss_timestamp);
    return (
        A.findLast((e) => e.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_1) ??
        A.findLast((e) => e.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_2)
    );
}
