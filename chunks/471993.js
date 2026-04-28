"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(401843),
    a = n(327649),
    o = n(734057),
    l = n(71393),
    _ = n(969341),
    d = n(287809),
    u = n(723702),
    c = n(753070);
function E(e, t, E) {
    if (u.isPlatformEmbedded)
        (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("77598"),
                n.e("93816"),
                n.e("17918"),
                n.e("48486"),
                n.e("207"),
                n.e("98552"),
                n.e("34530"),
                n.e("88077"),
                n.e("18401"),
                n.e("53729"),
                n.e("84103"),
                n.e("27168"),
                n.e("87225"),
                n.e("30770"),
                n.e("72832"),
                n.e("91942"),
                n.e("86672"),
                n.e("44801"),
                n.e("38601"),
                n.e("36946"),
                n.e("6809"),
                n.e("25241"),
                n.e("44727"),
                n.e("6565"),
                n.e("14304"),
                n.e("13337"),
                n.e("82001"),
                n.e("93609"),
                n.e("90088"),
            ]).then(n.bind(n, 266536));
            return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: E });
        });
    else {
        let n = o.A.getChannel(t),
            i = (0, a.A)(
                c.jQ.PRESET_CUSTOM,
                c.on.RESOLUTION_1080,
                c.kn.FPS_30,
                d.default.getCurrentUser(),
                l.A.getGuild(e)?.premiumTier,
                n,
            )
                ? { width: 1920, height: 1080 }
                : { width: 1280, height: 720 };
        (0, s.Xd)({ preset: c.jQ.PRESET_CUSTOM, resolution: i.height, frameRate: c.kn.FPS_30, soundshareEnabled: !0 }),
            _.Ay.getMediaEngine()
                .getDesktopSource(i, !0)
                .then((n) => {
                    (0, s.XI)(e, t, { pid: null, sourceId: n, sourceName: null, analyticsLocations: E });
                });
    }
}
