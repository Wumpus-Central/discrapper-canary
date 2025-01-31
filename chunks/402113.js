n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(513202),
    s = n(861254),
    o = n(871499),
    l = n(388032);
function u(e) {
    let { location: t, applicationId: n, centerButton: u = !1, ...c } = e,
        { groupedButtons: d } = (0, s.ZP)({ location: 'LeaveActivityButton' }),
        f = u ? o.d : o.Z,
        _ = () => {
            a.Z.leaveActivity({
                location: t,
                applicationId: n,
                showFeedback: !0
            });
        };
    return (0, i.jsx)(f, {
        ...c,
        fullRegionButton: d,
        onClick: _,
        iconComponent: r.PBZ,
        label: l.intl.string(l.t['R/FK4O'])
    });
}
