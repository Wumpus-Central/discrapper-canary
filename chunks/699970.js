n.d(t, { X: () => d });
var i = n(64700),
    l = n(311907),
    s = n(734057),
    a = n(488926),
    r = n(849736),
    o = n(652215);
function d(e) {
    let t = (0, l.bG)([s.A], () => s.A.getChannel(e), [e]),
        n = a.MJ(o.xBc.REQUEST_TO_SPEAK, t),
        [d, c] = i.useState(n);
    return (
        n !== d && c(n),
        [
            d,
            (e) => {
                null != t && (c(e), (0, r.b6)(t, o.xBc.REQUEST_TO_SPEAK, e));
            },
        ]
    );
}
