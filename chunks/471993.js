"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(401843),
    a = n(327649),
    o = n(734057),
    l = n(71393),
    u = n(472444),
    c = n(287809),
    d = n(723702),
    _ = n(753070);
function h(e, t, h) {
    if (d.isPlatformEmbedded)
        (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("4615"),
                n.e("81218"),
                n.e("76171"),
                n.e("86672"),
                n.e("58337"),
                n.e("38601"),
                n.e("36946"),
                n.e("6809"),
                n.e("44801"),
                n.e("44727"),
                n.e("59778"),
                n.e("25241"),
                n.e("28724"),
                n.e("82013"),
                n.e("76229"),
                n.e("91782"),
                n.e("90088"),
            ]).then(n.bind(n, 477156));
            return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: h });
        });
    else {
        let n = o.A.getChannel(t),
            i = (0, a.A)(
                _.jQ.PRESET_CUSTOM,
                _.on.RESOLUTION_1080,
                _.kn.FPS_30,
                c.default.getCurrentUser(),
                l.A.getGuild(e)?.premiumTier,
                n,
            )
                ? { width: 1920, height: 1080 }
                : { width: 1280, height: 720 };
        (0, s.Xd)({ preset: _.jQ.PRESET_CUSTOM, resolution: i.height, frameRate: _.kn.FPS_30, soundshareEnabled: !0 }),
            u.Ay.getMediaEngine()
                .getDesktopSource(i, !0)
                .then((n) => {
                    (0, s.XI)(e, t, { pid: null, sourceId: n, sourceName: null, analyticsLocations: h });
                });
    }
}
