"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(709562),
    o = n(625180),
    l = n(985018);
function u(e) {
    let { applicationId: t, centerButton: n = !1, ...u } = e,
        c = i.useCallback(() => {
            o.A.stopFrame({ applicationId: t });
        }, [t]),
        d = n ? s.l : s.A;
    return (0, r.jsx)(d, {
        ...u,
        isTrayButton: !1,
        onClick: c,
        iconComponent: a.PGe,
        label: l.intl.string(l.t.cpT0Cq),
    });
}
