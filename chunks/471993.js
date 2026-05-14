"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(401843),
    a = n(327649),
    o = n(734057),
    l = n(71393),
    u = n(235058),
    c = n(287809),
    d = n(723702),
    _ = n(753070);
function f(e, t, f) {
    if (d.isPlatformEmbedded)
        (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("95840"),
                n.e("54266"),
                n.e("17918"),
                n.e("81156"),
                n.e("207"),
                n.e("76171"),
                n.e("34530"),
                n.e("88077"),
                n.e("18401"),
                n.e("53729"),
                n.e("84103"),
                n.e("53614"),
                n.e("87225"),
                n.e("86672"),
                n.e("38601"),
                n.e("36946"),
                n.e("6809"),
                n.e("44801"),
                n.e("44727"),
                n.e("25241"),
                n.e("6565"),
                n.e("14304"),
                n.e("82001"),
                n.e("91782"),
                n.e("90088"),
            ]).then(n.bind(n, 266536));
            return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: f });
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
                    (0, s.XI)(e, t, { pid: null, sourceId: n, sourceName: null, analyticsLocations: f });
                });
    }
}
