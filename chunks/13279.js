n.d(t, { z: () => s });
var r = n(359119),
    i = n(897769),
    l = n(237292),
    a = n(403485),
    o = n(604849);
function s(e, t) {
    let n = (0, l.y0)({ location: t }),
        s = (0, o.c)(),
        c = (0, a.h)(e),
        u = (0, i.S)(e, r.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (
        n &&
        s &&
        0 !== c.length &&
        !c.some(
            (e) =>
                e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp),
        )
    )
        return u;
}
