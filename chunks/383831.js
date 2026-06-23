"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(70688),
    s = n(869003),
    a = n(688810),
    o = n(384059),
    l = n(204651),
    u = n(375708);
function c(e) {
    let { location: t, applicationId: n, centerButton: c = !1, ...d } = e,
        { parentAnalyticsLocation: _ } = (0, a.Ay)(),
        h = c ? l.l : l.A;
    return (0, i.jsx)(h, {
        ...d,
        isTrayButton: !1,
        onClick: function () {
            (0, o.X)(_, o.O.LEAVE_ACTIVITY), s.A.leaveActivity({ location: t, applicationId: n, showFeedback: !0 });
        },
        iconComponent: r.o,
        label: u.intl.string(u.t["R/FK4A"]),
    });
}
