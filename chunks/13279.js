t.d(n, { z: () => o });
var i = t(359119),
    l = t(897769),
    a = t(237292),
    r = t(403485),
    u = t(604849);
function o(e, n) {
    let t = (0, a.y0)({ location: n }),
        o = (0, u.c)(),
        d = (0, r.h)(e),
        s = (0, l.S)(e, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (!(!t || !o || 0 === d.length || d.some((e) => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || (e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)))) return s;
}
