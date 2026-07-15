n.d(t, { j: () => l });
var i = n(349435),
    a = n(963555),
    r = n(617641),
    s = n(168447),
    u = n(546140);
function l(e, t) {
    let n = (0, r.Lc)({ location: t }),
        l = (0, u.L)(),
        o = (0, s.Y)(e),
        p = (0, a.F)(e, i._j.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (
        n &&
        l &&
        0 !== o.length &&
        !o.some(
            (e) =>
                e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (e.type === i._j.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp),
        )
    )
        return p;
}
