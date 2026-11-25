var n = i(477900);
i(582128);
var a = i(192308),
    l = i(401843),
    s = i(676030),
    r = i(734057),
    d = i(71393),
    h = i(988468),
    o = i(287809),
    u = i(723702),
    c = i(753070);
i.d(
    t,
    {},
    {
        A: function (e, t, g) {
            if (u.isPlatformEmbedded)
                (0, a.mM)(async () => {
                    let { default: e } = await Promise.all([
                        i.e(249169),
                        i.e(506933),
                        i.e(879641),
                        i.e(473782),
                        i.e(662387),
                        i.e(553464),
                        i.e(668756),
                        i.e(130662),
                        i.e(342551),
                        i.e(498552),
                        i.e(253729),
                        i.e(234236),
                        i.e(827708),
                        i.e(757598),
                        i.e(721690),
                        i.e(988077),
                        i.e(76705),
                        i.e(718573),
                        i.e(784103),
                        i.e(376883),
                        i.e(647211),
                        i.e(499941),
                        i.e(464242),
                        i.e(858337),
                        i.e(944801),
                        i.e(236946),
                        i.e(338601),
                        i.e(482511),
                        i.e(944727),
                        i.e(943371),
                        i.e(725241),
                        i.e(114792),
                        i.e(461582),
                        i.e(758913),
                        i.e(489876),
                        i.e(352435),
                        i.e(191782),
                        i.e(190088),
                    ]).then(i.bind(i, 742527));
                    return (t) => (0, n.jsx)(e, { ...t, analyticsLocations: g });
                });
            else {
                let i = r.A.getChannel(t),
                    n = (0, s.A)(
                        c.jQ.PRESET_CUSTOM,
                        c.on.RESOLUTION_1080,
                        c.kn.FPS_30,
                        o.default.getCurrentUser(),
                        d.A.getGuild(e)?.premiumTier,
                        i,
                    )
                        ? { width: 1920, height: 1080 }
                        : { width: 1280, height: 720 };
                ((0, l.Xd)({
                    preset: c.jQ.PRESET_CUSTOM,
                    resolution: n.height,
                    frameRate: c.kn.FPS_30,
                    soundshareEnabled: !0,
                }),
                    h.Ay.getMediaEngine()
                        .getDesktopSource(n, !0)
                        .then((i) => {
                            (0, l.XI)(e, t, { pid: null, sourceId: i, sourceName: null, analyticsLocations: g });
                        }));
            }
        },
    },
);
