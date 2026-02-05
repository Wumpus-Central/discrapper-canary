"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(869146),
    o = n(531685),
    l = n(475815),
    u = n(709562),
    c = n(985018);
function d(e) {
    let { enabled: t, ...n } = e,
        i = t ? c.intl.string(c.t.Z7MyNB) : c.intl.string(c.t.OIDkcp),
        s = t ? a.z7w : a.TM1;
    return (0, r.jsx)(u.A, { label: i, iconComponent: s, ...n });
}
let _ = i.Ay.connectStores([o.A, s.A], (e) => {
    let { node: t, guestWindow: n } = e;
    return { enabled: (0, l._U)(t, n?.document) };
})(d);
