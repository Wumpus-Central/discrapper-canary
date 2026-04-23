"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(86147),
    a = n(729475),
    o = n(869146),
    l = n(531685),
    d = n(475815),
    _ = n(709562),
    u = n(985018);
let c = r.Ay.connectStores([l.A, o.A], (e) => {
    let { node: t, guestWindow: n } = e;
    return { enabled: (0, d._U)(t, n?.document) };
})(function (e) {
    let { enabled: t, ...n } = e,
        r = t ? u.intl.string(u.t.Z7MyNB) : u.intl.string(u.t.OIDkcp),
        o = t ? s.z : a.T;
    return (0, i.jsx)(_.A, { label: r, iconComponent: o, ...n });
});
