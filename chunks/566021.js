"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    l = n(110259),
    s = n(821609),
    r = n(414499),
    a = n(688810),
    o = n(139286),
    c = n(359549),
    u = n(985018);
function d(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: d } = (0, a.Ay)(n),
        h = (0, c.A)({ application: t, analyticsLocations: d });
    return (
        (0, o.A)({
            name: l.ImpressionNames.CLOUD_PLAY_CTA,
            type: l.ImpressionTypes.VIEW,
            properties: { location_stack: d },
        }),
        (0, i.jsx)(
            s.$,
            {
                variant: "primary",
                size: "md",
                icon: r.h,
                text: u.intl.string(u.t["jaYS/h"]),
                onClick: () => {
                    h?.();
                },
                fullWidth: !0,
            },
            "cloud-play",
        )
    );
}
