n.d(t, { X: () => c });
var i = n(64700),
    l = n(311907),
    a = n(734057),
    s = n(488926),
    r = n(849736),
    o = n(652215);
function c(e) {
    let t = (0, l.bG)([a.A], () => a.A.getChannel(e), [e]),
        n = s.MJ(o.xBc.REQUEST_TO_SPEAK, t),
        [c, d] = i.useState(n);
    return (
        n !== c && d(n),
        [
            c,
            (e) => {
                null != t && (d(e), (0, r.b6)(t, o.xBc.REQUEST_TO_SPEAK, e));
            },
        ]
    );
}
