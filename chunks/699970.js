n.d(t, {
    X: () => c,
}),
    n(896048);
var r = n(64700),
    l = n(311907),
    i = n(734057),
    a = n(488926),
    s = n(849736),
    o = n(652215);

function c(e) {
    let t = (0, l.bG)([i.A], () => i.A.getChannel(e), [e]),
        n = a.MJ(o.xBc.REQUEST_TO_SPEAK, t),
        [c, u] = r.useState(n);
    return (
        n !== c && u(n),
        [
            c,
            (e) => {
                null != t && (u(e), (0, s.b6)(t, o.xBc.REQUEST_TO_SPEAK, e));
            },
        ]
    );
}
