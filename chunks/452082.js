n.d(t, { j: () => u });
var a = n(349435),
    i = n(963555),
    r = n(617641),
    s = n(168447),
    l = n(546140);
function u(e, t) {
    let n = (0, r.Lc)({ location: t }),
        u = (0, l.L)(),
        o = (0, s.Y)(e),
        p = (0, i.F)(e, a._j.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (
        n &&
        u &&
        0 !== o.length &&
        !o.some(
            (e) =>
                e.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (e.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp),
        )
    )
        return p;
}
