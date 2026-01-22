n.d(t, {
    j: () => o,
});
var r = n(349435),
    l = n(963555),
    i = n(617641),
    a = n(168447),
    s = n(546140);

function o(e, t) {
    let n = (0, i.Lc)({
            location: t,
        }),
        o = (0, s.L)(),
        c = (0, a.Y)(e),
        u = (0, l.F)(e, r._j.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (
        n &&
        o &&
        0 !== c.length &&
        !c.some(
            (e) =>
                e.type === r._j.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (e.type === r._j.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp),
        )
    )
        return u;
}
