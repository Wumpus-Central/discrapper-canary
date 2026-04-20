"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(401843),
    a = n(874124),
    o = n(734057),
    l = n(71393),
    u = n(430452),
    c = n(287809),
    d = n(723702),
    _ = n(753070);
function f(e, t, f) {
    if (d.isPlatformEmbedded)
        (0, i.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("96811"), n.e("48697")]).then(n.bind(n, 648230));
            return (t) => (0, r.jsx)(e, { ...t, analyticsLocations: f });
        });
    else {
        let n = o.A.getChannel(t),
            r = (0, a.A)(
                _.jQ.PRESET_CUSTOM,
                _.on.RESOLUTION_1080,
                _.kn.FPS_30,
                c.default.getCurrentUser(),
                l.A.getGuild(e)?.premiumTier,
                n,
            )
                ? { width: 1920, height: 1080 }
                : { width: 1280, height: 720 };
        (0, s.Xd)({ preset: _.jQ.PRESET_CUSTOM, resolution: r.height, frameRate: _.kn.FPS_30, soundshareEnabled: !0 }),
            u.Ay.getMediaEngine()
                .getDesktopSource(r, !0)
                .then((n) => {
                    (0, s.XI)(e, t, { pid: null, sourceId: n, sourceName: null, analyticsLocations: f });
                });
    }
}
