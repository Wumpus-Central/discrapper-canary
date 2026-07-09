l.d(t, { A: () => n });
var a = l(627968);
l(64700);
var s = l(192308),
    i = l(71393);
function n(e) {
    let { onCloseCallback: t, analyticsLocations: n, ...r } = e;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([l.e("85029"), l.e("66901"), l.e("56430")]).then(l.bind(l, 39613));
            return (t) =>
                (0, a.jsx)(e, {
                    ...t,
                    ...r,
                    analyticsLocations: n,
                    guildCount: i.A.getGuildCount(),
                    "aria-labelledby": "nitro-guild-cap-upsell",
                });
        },
        { onCloseCallback: t },
    );
}
