var i = n(477900);
n(582128);
var s = n(192308),
    a = n(71393);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { onCloseCallback: t, analyticsLocations: l, ...r } = e;
            (0, s.mM)(
                async () => {
                    let { default: e } = await Promise.all([n.e(935205), n.e(677668), n.e(843117), n.e(122969)]).then(
                        n.bind(n, 716480),
                    );
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            ...r,
                            analyticsLocations: l,
                            guildCount: a.A.getGuildCount(),
                            "aria-labelledby": "nitro-guild-cap-upsell",
                        });
                },
                { onCloseCallback: t },
            );
        },
    },
);
