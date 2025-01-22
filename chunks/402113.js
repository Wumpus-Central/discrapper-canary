r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(513202),
    s = r(861254),
    l = r(871499),
    u = r(388032);
function c(e) {
    let { location: n, applicationId: r, centerButton: c = !1, ...d } = e,
        { groupedButtons: f } = (0, s.ZP)({ location: 'LeaveActivityButton' }),
        p = c ? l.d : l.Z,
        h = () => {
            o.Z.leaveActivity({
                location: n,
                applicationId: r,
                showFeedback: !0
            });
        };
    return (0, i.jsx)(p, {
        ...d,
        fullRegionButton: f,
        onClick: h,
        iconComponent: a.DoorExitIcon,
        label: u.intl.string(u.t['R/FK4O'])
    });
}
