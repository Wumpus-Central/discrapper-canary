"use strict";
n.d(t, { A: () => E });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(401843),
    s = n(327649),
    l = n(734057),
    o = n(71393),
    d = n(453028),
    c = n(287809),
    u = n(723702),
    _ = n(753070);
function E(e, t, E) {
    if (u.isPlatformEmbedded)
        (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("249169"),
                n.e("879641"),
                n.e("473782"),
                n.e("490978"),
                n.e("702154"),
                n.e("553464"),
                n.e("205035"),
                n.e("130662"),
                n.e("342551"),
                n.e("498552"),
                n.e("253729"),
                n.e("234236"),
                n.e("721690"),
                n.e("827708"),
                n.e("988077"),
                n.e("784103"),
                n.e("781300"),
                n.e("499941"),
                n.e("757598"),
                n.e("486672"),
                n.e("858337"),
                n.e("338601"),
                n.e("236946"),
                n.e("706809"),
                n.e("944801"),
                n.e("944727"),
                n.e("59778"),
                n.e("725241"),
                n.e("308421"),
                n.e("531296"),
                n.e("476229"),
                n.e("960677"),
                n.e("191782"),
                n.e("190088"),
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
