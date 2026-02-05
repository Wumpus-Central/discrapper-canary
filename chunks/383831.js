"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(869003),
    s = n(688810),
    o = n(384059),
    l = n(709562),
    u = n(985018);
function c(e) {
    let { location: t, applicationId: n, centerButton: c = !1, ...d } = e,
        { parentAnalyticsLocation: _ } = (0, s.Ay)(),
        f = c ? l.l : l.A,
        p = () => {
            (0, o.X)(_, o.O.LEAVE_ACTIVITY), a.A.leaveActivity({ location: t, applicationId: n, showFeedback: !0 });
        };
    return (0, r.jsx)(f, {
        ...d,
        isTrayButton: !1,
        onClick: p,
        iconComponent: i.oLl,
        label: u.intl.string(u.t["R/FK4A"]),
    });
}
