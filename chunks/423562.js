"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(86147),
    a = n(729475),
    o = n(869146),
    l = n(531685),
    u = n(475815),
    c = n(709562),
    d = n(985018);
let _ = i.Ay.connectStores([l.A, o.A], (e) => {
    let { node: t, guestWindow: n } = e;
    return { enabled: (0, u._U)(t, n?.document) };
})(function (e) {
    let { enabled: t, ...n } = e,
        i = t ? d.intl.string(d.t.Z7MyNB) : d.intl.string(d.t.OIDkcp),
        o = t ? s.z : a.T;
    return (0, r.jsx)(c.A, { label: i, iconComponent: o, ...n });
});
