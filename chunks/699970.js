t.d(n, { X: () => c });
var i = t(582128),
    l = t(17928),
    s = t(734057),
    a = t(488926),
    r = t(849736),
    o = t(652215);
function c(e) {
    let n = (0, l.bG)([s.A], () => s.A.getChannel(e), [e]),
        t = a.MJ(o.xBc.REQUEST_TO_SPEAK, n),
        [c, u] = i.useState(t);
    return (
        t !== c && u(t),
        [
            c,
            function (e) {
                null != n && (u(e), (0, r.b6)(n, o.xBc.REQUEST_TO_SPEAK, e));
            },
        ]
    );
}
