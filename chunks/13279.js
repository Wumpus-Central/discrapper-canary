t.d(n, { z: () => u });
var i = t(359119),
    l = t(897769),
    a = t(237292),
    r = t(403485),
    o = t(604849);
function u(e, n) {
    let t = (0, a.y0)({ location: n }),
        u = (0, o.c)(),
        d = (0, r.h)(e),
        s = (0, l.S)(e, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (!(!t || !u || 0 === d.length || d.some((e) => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || (e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)))) return s;
}
