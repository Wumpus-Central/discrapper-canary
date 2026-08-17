"use strict";
n.d(t, { A: () => c });
var i = n(477900);
n(582128);
var r = n(70688),
    a = n(869003),
    s = n(688810),
    l = n(384059),
    o = n(204651),
    d = n(375708);
function c(e) {
    let { location: t, applicationId: n, centerButton: c = !1, ...u } = e,
        { parentAnalyticsLocation: _ } = (0, s.Ay)(),
        E = c ? o.l : o.A;
    return (0, i.jsx)(E, {
        ...u,
        isTrayButton: !1,
        onClick: function () {
            (0, l.X)(_, l.O.LEAVE_ACTIVITY), a.A.leaveActivity({ location: t, applicationId: n, showFeedback: !0 });
        },
        iconComponent: r.DoorExitIcon,
        label: d.intl.string(d.t["R/FK4A"]),
    });
}
