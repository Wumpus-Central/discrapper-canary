var i = n(477900);
n(582128);
var r = n(70688),
    a = n(988534),
    s = n(688810),
    l = n(384059),
    o = n(457827),
    d = n(693409),
    c = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { location: t, applicationId: n, frameId: u, centerButton: _ = !1, ...E } = e,
                { parentAnalyticsLocation: A } = (0, s.Ay)(),
                h = _ ? d.l : d.A;
            return (0, i.jsx)(h, {
                ...E,
                isTrayButton: !1,
                onClick: function () {
                    ((0, l.XJ)(A, l.OP.LEAVE_ACTIVITY),
                        null != u ? (0, o.r)(u) : (0, a.d)({ location: t, applicationId: n, showFeedback: !0 }));
                },
                iconComponent: r.DoorExitIcon,
                label: c.intl.string(c.t["R/FK4A"]),
            });
        },
    },
);
