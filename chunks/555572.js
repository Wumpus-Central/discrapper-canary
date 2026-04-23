n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(477782),
    s = n(625903),
    a = n(688810),
    r = n(474397),
    o = n(780964),
    d = n(858897),
    c = n(652215),
    u = n(985018);
function h(e) {
    let { analyticsLocations: t } = (0, a.Ay)();
    return (0, i.jsx)(l.Dr, {
        id: "video-settings",
        label: u.intl.string(u.t.LKzQSF),
        action: () => {
            (0, d.openUserSettings)(o.X.CAMERA_CATEGORY, { analyticsLocations: t }), (0, r.A)(e, e === c.BRT.POPOUT);
        },
        icon: s.Z,
        leadingAccessory: { type: "icon", icon: s.Z },
    });
}
