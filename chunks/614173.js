n.d(t, { h: () => d }), n(388685);
var r = n(647438),
    i = n(442837),
    l = n(592125),
    a = n(700785),
    s = n(471253),
    o = n(647767),
    c = n(981631);
function d(e) {
    let t = (0, i.e7)([l.Z], () => l.Z.getChannel(e), [e]),
        n = (0, o.s)(),
        d = a.Uu(c.Plq.REQUEST_TO_SPEAK, t) && !n,
        [u, p] = r.useState(d);
    return (
        d !== u && p(d),
        [
            u,
            (e) => {
                null != t && (p(e), (0, s.Pq)(t, c.Plq.REQUEST_TO_SPEAK, e));
            },
        ]
    );
}
