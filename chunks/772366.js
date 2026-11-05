var i = n(477900);
n(582128);
var s = n(192308),
    a = n(71393);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { onCloseCallback: t, analyticsLocations: r, ...l } = e;
            (0, s.mM)(
                async () => {
                    let { default: e } = await Promise.all([n.e(935205), n.e(677668), n.e(843117), n.e(122969)]).then(
                        n.bind(n, 716480),
                    );
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            ...l,
                            analyticsLocations: r,
                            guildCount: a.A.getGuildCount(),
                            "aria-labelledby": "nitro-guild-cap-upsell",
                        });
                },
                { onCloseCallback: t },
            );
        },
    },
);
