n.d(t, { M: () => d }), n(230036), n(852437);
var r = n(70956),
    i = n(359119),
    l = n(116347),
    o = n(444957),
    a = n(403485),
    s = n(276618);
let c = +r.Z.Millis.HOUR,
    u = 12 * r.Z.Millis.HOUR;
function d(e) {
    var t;
    let n = (0, o.h)(e),
        r = (0, a.h)(e),
        d = (0, s.o)(e);
    if (null == n || d || (0, l.tX)(r)) return;
    let p = r.some((e) => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1),
        h = r.filter((e) => null != e.dismiss_timestamp).sort((e, t) => (t.dismiss_timestamp < e.dismiss_timestamp ? -1 : 1));
    if (
        h.length < 1 ||
        !(function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == e) return !0;
            let n = new Date(e).getTime() + (t ? c : u);
            return new Date().getTime() >= n;
        })(h[0].dismiss_timestamp, p)
    )
        return;
    let f = r.filter((e) => null == e.dismiss_timestamp);
    return null != (t = f.findLast((e) => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1)) ? t : f.findLast((e) => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
}
