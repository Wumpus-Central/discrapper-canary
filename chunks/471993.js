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
                n.e("37249"),
                n.e("17239"),
                n.e("62290"),
                n.e("27713"),
                n.e("5362"),
            ]).then(n.bind(n, 301400));
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
