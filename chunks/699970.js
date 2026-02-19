"use strict";
n.d(t, { X: () => c });
var i = n(64700),
    s = n(311907),
    l = n(734057),
    r = n(488926),
    a = n(849736),
    o = n(652215);
function c(e) {
    let t = (0, s.bG)([l.A], () => l.A.getChannel(e), [e]),
        n = r.MJ(o.xBc.REQUEST_TO_SPEAK, t),
        [c, d] = i.useState(n);
    return (
        n !== c && d(n),
        [
            c,
            (e) => {
                null != t && (d(e), (0, a.b6)(t, o.xBc.REQUEST_TO_SPEAK, e));
            },
        ]
    );
}
