n.d(t, { Z: () => u });
var r = n(54381),
    i = n(990547),
    a = n(481060),
    o = n(906732),
    s = n(213609),
    l = n(206074),
    c = n(388032);
function u(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: u } = (0, o.ZP)(n),
        d = (0, l.Z)({
            application: t,
            analyticsLocations: u,
        });
    (0, s.Z)({
        name: i.ImpressionNames.CLOUD_PLAY_CTA,
        type: i.ImpressionTypes.VIEW,
        properties: { location_stack: u },
    });
    let f = () => {
        null == d || d();
    };
    return (0, r.jsx)(
        a.Button,
        {
            variant: "primary",
            size: "md",
            icon: a.v3n,
            text: c.intl.string(c.t["jaYS/h"]),
            onClick: f,
            fullWidth: !0,
        },
        "cloud-play",
    );
}
