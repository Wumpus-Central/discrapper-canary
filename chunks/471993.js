a.d(t, { A: () => g });
var i = a(477900);
a(582128);
var l = a(192308),
    n = a(401843),
    s = a(327649),
    d = a(734057),
    r = a(71393),
    h = a(192820),
    o = a(287809),
    c = a(723702),
    u = a(753070);
function g(e, t, g) {
    if (c.isPlatformEmbedded)
        (0, l.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                a.e("249169"),
                a.e("329172"),
                a.e("879641"),
                a.e("473782"),
                a.e("662387"),
                a.e("553464"),
                a.e("205035"),
                a.e("130662"),
                a.e("342551"),
                a.e("498552"),
                a.e("253729"),
                a.e("827708"),
                a.e("721690"),
                a.e("234236"),
                a.e("988077"),
                a.e("784103"),
                a.e("718573"),
                a.e("537894"),
                a.e("128534"),
                a.e("499941"),
                a.e("976148"),
                a.e("622825"),
                a.e("858337"),
                a.e("236946"),
                a.e("757598"),
                a.e("338601"),
                a.e("486672"),
                a.e("944801"),
                a.e("944727"),
                a.e("943371"),
                a.e("725241"),
                a.e("561547"),
                a.e("937494"),
                a.e("82001"),
                a.e("352435"),
                a.e("191782"),
                a.e("190088"),
            ]).then(a.bind(a, 266536));
            return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: g });
        });
    else {
        let a = d.A.getChannel(t),
            i = (0, s.A)(
                u.jQ.PRESET_CUSTOM,
                u.on.RESOLUTION_1080,
                u.kn.FPS_30,
                o.default.getCurrentUser(),
                r.A.getGuild(e)?.premiumTier,
                a,
            )
                ? { width: 1920, height: 1080 }
                : { width: 1280, height: 720 };
        ((0, n.Xd)({ preset: u.jQ.PRESET_CUSTOM, resolution: i.height, frameRate: u.kn.FPS_30, soundshareEnabled: !0 }),
            h.Ay.getMediaEngine()
                .getDesktopSource(i, !0)
                .then((a) => {
                    (0, n.XI)(e, t, { pid: null, sourceId: a, sourceName: null, analyticsLocations: g });
                }));
    }
}
