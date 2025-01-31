n.d(t, { h: () => c }), n(47120);
var i = n(192379),
    l = n(442837),
    a = n(592125),
    r = n(700785),
    s = n(471253),
    o = n(981631);
function c(e) {
    let t = (0, l.e7)([a.Z], () => a.Z.getChannel(e), [e]),
        n = r.Uu(o.Plq.REQUEST_TO_SPEAK, t),
        [c, d] = i.useState(n);
    return (
        n !== c && d(n),
        [
            c,
            (e) => {
                null != t && (d(e), (0, s.Pq)(t, o.Plq.REQUEST_TO_SPEAK, e));
            }
        ]
    );
}
