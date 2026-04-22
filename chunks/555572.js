l.d(t, { A: () => h });
var n = l(627968);
l(64700);
var i = l(477782),
    s = l(625903),
    a = l(688810),
    r = l(474397),
    o = l(780964),
    c = l(858897),
    d = l(652215),
    u = l(985018);
function h(e) {
    let { analyticsLocations: t } = (0, a.Ay)();
    return (0, n.jsx)(i.Dr, {
        id: "video-settings",
        label: u.intl.string(u.t.LKzQSF),
        action: () => {
            (0, c.openUserSettings)(o.X.CAMERA_CATEGORY, { analyticsLocations: t }), (0, r.A)(e, e === d.BRT.POPOUT);
        },
        icon: s.Z,
        leadingAccessory: { type: "icon", icon: s.Z },
    });
}
