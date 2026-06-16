"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    s = n(789645),
    a = n(204651),
    o = n(113854),
    l = n(375708);
function u(e) {
    let { applicationId: t, centerButton: n = !1, ...u } = e,
        c = r.useCallback(() => {
            o.A.stopFrame({ applicationId: t });
        }, [t]),
        d = n ? a.l : a.A;
    return (0, i.jsx)(d, { ...u, isTrayButton: !1, onClick: c, iconComponent: s.P, label: l.intl.string(l.t.cpT0Cq) });
}
