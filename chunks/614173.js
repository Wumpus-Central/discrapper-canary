n.d(t, { h: () => c }), n(47120);
var r = n(192379),
    i = n(442837),
    l = n(592125),
    o = n(700785),
    a = n(471253),
    s = n(981631);
function c(e) {
    let t = (0, i.e7)([l.Z], () => l.Z.getChannel(e), [e]),
        n = o.Uu(s.Plq.REQUEST_TO_SPEAK, t),
        [c, u] = r.useState(n);
    return (
        n !== c && u(n),
        [
            c,
            (e) => {
                null != t && (u(e), (0, a.Pq)(t, s.Plq.REQUEST_TO_SPEAK, e));
            }
        ]
    );
}
