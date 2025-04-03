n.d(t, { z: () => u });
var r = n(359119),
    i = n(897769),
    l = n(237292),
    a = n(403485),
    o = n(604849);
function u(e, t) {
    let n = (0, l.y0)({ location: t }),
        u = (0, o.c)(),
        d = (0, a.h)(e),
        s = (0, i.S)(e, r.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (n && u && 0 !== d.length && !d.some((e) => e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || (e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp))) return s;
}
