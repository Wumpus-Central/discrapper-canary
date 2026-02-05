"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(110259),
    a = n(397927),
    s = n(688810),
    o = n(139286),
    l = n(359549),
    u = n(985018);
function c(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: c } = (0, s.Ay)(n),
        d = (0, l.A)({ application: t, analyticsLocations: c });
    (0, o.A)({
        name: i.ImpressionNames.CLOUD_PLAY_CTA,
        type: i.ImpressionTypes.VIEW,
        properties: { location_stack: c },
    });
    let _ = () => {
        d?.();
    };
    return (0, r.jsx)(
        a.Button,
        { variant: "primary", size: "md", icon: a.hpF, text: u.intl.string(u.t["jaYS/h"]), onClick: _, fullWidth: !0 },
        "cloud-play",
    );
}
