n.d(e, { A: () => a });
var s = n(627968);
n(64700);
var i = n(192308),
    o = n(71393);
function a(t) {
    let { onCloseCallback: e, analyticsLocations: a, ...u } = t;
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("2125"), n.e("66901"), n.e("56430")]).then(n.bind(n, 39613));
            return (e) =>
                (0, s.jsx)(t, {
                    ...e,
                    ...u,
                    analyticsLocations: a,
                    guildCount: o.A.getGuildCount(),
                    "aria-labelledby": "nitro-guild-cap-upsell",
                });
        },
        { onCloseCallback: e },
    );
}
