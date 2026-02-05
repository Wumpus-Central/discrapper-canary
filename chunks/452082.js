l.d(n, { j: () => d });
var t = l(349435),
    i = l(963555),
    s = l(617641),
    a = l(168447),
    r = l(546140);
function d(e, n) {
    let l = (0, s.Lc)({ location: n }),
        d = (0, r.L)(),
        c = (0, a.Y)(e),
        o = (0, i.F)(e, t._j.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (
        l &&
        d &&
        0 !== c.length &&
        !c.some(
            (e) =>
                e.type === t._j.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (e.type === t._j.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp),
        )
    )
        return o;
}
