n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(688810),
    o = n(474397),
    s = n(780964),
    l = n(840065),
    c = n(652215),
    u = n(355097),
    d = n(985018);

function f(e) {
    let { analyticsLocations: t } = (0, a.Ay)();
    return (0, r.jsx)(i.Drp, {
        id: "video-settings",
        label: d.intl.string(d.t.LKzQSF),
        action: () => {
            (0, l.openUserSettings)(s.X.CAMERA_CATEGORY, {
                section: c.nc_.VOICE,
                subsection: u.Ss,
                analyticsLocations: t,
            }),
                (0, o.A)(e, e === c.BRT.POPOUT);
        },
        icon: i.Zes,
        leadingAccessory: {
            type: "icon",
            icon: i.Zes,
        },
    });
}
