n.d(t, { z: () => l });
var r = n(359119),
    i = n(897769),
    o = n(237292),
    a = n(403485),
    s = n(604849);
function l(e, t) {
    let n = (0, o.y0)({ location: t }),
        l = (0, s.c)(),
        c = (0, a.h)(e),
        u = (0, i.S)(e, r.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (
        n &&
        l &&
        0 !== c.length &&
        !c.some(
            (e) =>
                e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp),
        )
    )
        return u;
}
