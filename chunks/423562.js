"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(86147),
    r = n(729475),
    a = n(869146),
    o = n(531685),
    c = n(475815),
    u = n(709562),
    d = n(985018);
let h = l.Ay.connectStores([o.A, a.A], (e) => {
    let { node: t, guestWindow: n } = e;
    return { enabled: (0, c._U)(t, n?.document) };
})(function (e) {
    let { enabled: t, ...n } = e,
        l = t ? d.intl.string(d.t.Z7MyNB) : d.intl.string(d.t.OIDkcp),
        a = t ? s.z : r.T;
    return (0, i.jsx)(u.A, { label: l, iconComponent: a, ...n });
});
