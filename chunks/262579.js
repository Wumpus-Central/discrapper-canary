"use strict";
n.d(t, { A: () => d });
var i = n(477900),
    r = n(582128),
    a = n(789645),
    s = n(204651),
    l = n(580954),
    o = n(375708);
function d(e) {
    let { frameId: t, centerButton: n = !1, ...d } = e,
        c = r.useCallback(() => {
            (0, l.A)().leaveFrame(t);
        }, [t]),
        u = n ? s.l : s.A;
    return (0, i.jsx)(u, { ...d, isTrayButton: !1, onClick: c, iconComponent: a.P, label: o.intl.string(o.t.cpT0Cq) });
}
