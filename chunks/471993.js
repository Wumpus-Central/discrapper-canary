"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(401843),
    s = n(327649),
    l = n(734057),
    o = n(71393),
    d = n(451409),
    c = n(287809),
    u = n(723702),
    _ = n(753070);
function E(e, t, E) {
    if (u.isPlatformEmbedded)
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
            return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: E });
        });
    else {
        let n = l.A.getChannel(t),
            i = (0, s.A)(
                _.jQ.PRESET_CUSTOM,
                _.on.RESOLUTION_1080,
                _.kn.FPS_30,
                c.default.getCurrentUser(),
                o.A.getGuild(e)?.premiumTier,
                n,
            )
                ? { width: 1920, height: 1080 }
                : { width: 1280, height: 720 };
        (0, a.Xd)({ preset: _.jQ.PRESET_CUSTOM, resolution: i.height, frameRate: _.kn.FPS_30, soundshareEnabled: !0 }),
            d.Ay.getMediaEngine()
                .getDesktopSource(i, !0)
                .then((n) => {
                    (0, a.XI)(e, t, { pid: null, sourceId: n, sourceName: null, analyticsLocations: E });
                });
    }
}
