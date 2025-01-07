n.d(t, {
    h: function () {
        return c;
    }
}),
    n(47120);
var i = n(192379),
    l = n(442837),
    r = n(592125),
    a = n(700785),
    s = n(471253),
    o = n(981631);
function c(e) {
    let t = (0, l.e7)([r.Z], () => r.Z.getChannel(e), [e]),
        n = a.Uu(o.Plq.REQUEST_TO_SPEAK, t),
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
