"use strict";
n.d(t, { A: () => h });
var l = n(627968);
n(64700);
var i = n(17928),
    s = n(86147),
    a = n(729475),
    r = n(869146),
    o = n(531685),
    c = n(475815),
    u = n(709562),
    d = n(985018);
let h = i.Ay.connectStores([o.A, r.A], (e) => {
    let { node: t, guestWindow: n } = e;
    return { enabled: (0, c._U)(t, n?.document) };
})(function (e) {
    let { enabled: t, ...n } = e,
        i = t ? d.intl.string(d.t.Z7MyNB) : d.intl.string(d.t.OIDkcp),
        r = t ? s.z : a.T;
    return (0, l.jsx)(u.A, { label: i, iconComponent: r, ...n });
});
