n.d(t, { h: () => c }), n(388685);
var r = n(73800),
    i = n(442837),
    l = n(592125),
    a = n(700785),
    s = n(471253),
    o = n(981631);
function c(e) {
    let t = (0, i.e7)([l.Z], () => l.Z.getChannel(e), [e]),
        n = a.Uu(o.Plq.REQUEST_TO_SPEAK, t),
        [c, u] = r.useState(n);
    return (
        n !== c && u(n),
        [
            c,
            (e) => {
                null != t && (u(e), (0, s.Pq)(t, o.Plq.REQUEST_TO_SPEAK, e));
            },
        ]
    );
}
