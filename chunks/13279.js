n.d(t, { z: () => o });
var i = n(359119),
    l = n(897769),
    a = n(237292),
    r = n(403485),
    s = n(604849);
function o(e, t) {
    let n = (0, a.y0)({ location: t }),
        o = (0, s.c)(),
        c = (0, r.h)(e),
        d = (0, l.S)(e, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (!(!n || !o || 0 === c.length || c.some((e) => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || (e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)))) return d;
}
