n.d(t, { z: () => a });
var r = n(359119),
    i = n(897769),
    l = n(237292),
    o = n(403485),
    u = n(604849);
function a(e, t) {
    let n = (0, l.y0)({ location: t }),
        a = (0, u.c)(),
        c = (0, o.h)(e),
        s = (0, i.S)(e, r.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (n && a && 0 !== c.length && !c.some((e) => e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || (e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp))) return s;
}
