n.d(t, { A: () => r });
var s = n(627968);
n(64700);
var i = n(192308),
    l = n(71393);
function r(e) {
    let { onCloseCallback: t, analyticsLocations: r, ...a } = e;
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await n.e("29202").then(n.bind(n, 39613));
            return (t) =>
                (0, s.jsx)(e, {
                    ...t,
                    ...a,
                    analyticsLocations: r,
                    guildCount: l.A.getGuildCount(),
                    "aria-labelledby": "nitro-guild-cap-upsell",
                });
        },
        { onCloseCallback: t },
    );
}
