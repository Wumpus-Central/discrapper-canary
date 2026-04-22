"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    s = n(789645),
    a = n(709562),
    o = n(625180),
    l = n(985018);
function u(e) {
    let { applicationId: t, centerButton: n = !1, ...u } = e,
        d = i.useCallback(() => {
            o.A.stopFrame({ applicationId: t });
        }, [t]),
        c = n ? a.l : a.A;
    return (0, r.jsx)(c, { ...u, isTrayButton: !1, onClick: d, iconComponent: s.P, label: l.intl.string(l.t.cpT0Cq) });
}
