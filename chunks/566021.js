n.d(t, {
    A: () => u,
});
var r = n(627968),
    i = n(110259),
    a = n(397927),
    s = n(688810),
    o = n(139286),
    l = n(359549),
    c = n(985018);

function u(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: u } = (0, s.Ay)(n),
        d = (0, l.A)({
            application: t,
            analyticsLocations: u,
        });
    (0, o.A)({
        name: i.ImpressionNames.CLOUD_PLAY_CTA,
        type: i.ImpressionTypes.VIEW,
        properties: {
            location_stack: u,
        },
    });
    let f = () => {
        null == d || d();
    };
    return (0, r.jsx)(
        a.Button,
        {
            variant: "primary",
            size: "md",
            icon: a.hpF,
            text: c.intl.string(c.t["jaYS/h"]),
            onClick: f,
            fullWidth: !0,
        },
        "cloud-play",
    );
}
