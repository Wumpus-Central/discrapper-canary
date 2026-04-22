"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(70688),
    s = n(869003),
    a = n(688810),
    o = n(384059),
    l = n(709562),
    u = n(985018);
function d(e) {
    let { location: t, applicationId: n, centerButton: d = !1, ...c } = e,
        { parentAnalyticsLocation: _ } = (0, a.Ay)(),
        f = d ? l.l : l.A;
    return (0, r.jsx)(f, {
        ...c,
        isTrayButton: !1,
        onClick: () => {
            (0, o.X)(_, o.O.LEAVE_ACTIVITY), s.A.leaveActivity({ location: t, applicationId: n, showFeedback: !0 });
        },
        iconComponent: i.o,
        label: u.intl.string(u.t["R/FK4A"]),
    });
}
