"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(110259),
    s = n(821609),
    a = n(414499),
    o = n(688810),
    l = n(139286),
    u = n(359549),
    c = n(985018);
function d(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: d } = (0, o.Ay)(n),
        _ = (0, u.A)({ application: t, analyticsLocations: d });
    return (
        (0, l.A)({
            name: i.ImpressionNames.CLOUD_PLAY_CTA,
            type: i.ImpressionTypes.VIEW,
            properties: { location_stack: d },
        }),
        (0, r.jsx)(
            s.$,
            {
                variant: "primary",
                size: "md",
                icon: a.h,
                text: c.intl.string(c.t["jaYS/h"]),
                onClick: () => {
                    _?.();
                },
                fullWidth: !0,
            },
            "cloud-play",
        )
    );
}
