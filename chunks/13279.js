e.d(t, {
    z: function () {
        return o;
    }
});
var r = e(359119),
    i = e(897769),
    u = e(237292),
    l = e(403485),
    a = e(604849);
function o(n, t) {
    let e = (0, u.y0)({ location: t }),
        o = (0, a.c)(),
        d = (0, l.h)(n),
        c = (0, i.S)(n, r.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (!(!e || !o || 0 === d.length || d.some((n) => n.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || (n.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != n.dismiss_timestamp)))) return c;
}
