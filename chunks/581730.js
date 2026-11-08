var n = i(684013),
    l = i(532624),
    a = i(373954),
    r = i(350535),
    o = i(870373),
    s = i(887287),
    u = i(672396),
    c = i(652215);
function d() {
    return a.default.isLocked(s.A.getTargetPID()) ? c.ThZ.LOCKED_OVERLAY : c.ThZ.UNLOCKED_OVERLAY;
}
i.d(
    e,
    {},
    {
        Jn: function () {
            let t;
            return (null != (t = l.Ay.getOverlayKeybind()) ? (0, r.dI)(t.shortcut, !0) : "???").split(" + ");
        },
        Y9: function (t, e) {
            return {
                trackView() {
                    let i = d();
                    ((0, o.g)(c.HAw.NOTIFICATION_VIEWED, { ...e, location: i }), n.A.notificationEvent(t, u.uj.Viewed));
                },
                trackClick(i) {
                    let l = d();
                    ((0, o.g)(c.HAw.NOTIFICATION_CLICKED, { ...e, location: l, action_type: i }),
                        n.A.notificationEvent(t, u.uj.Clicked));
                },
            };
        },
    },
);
