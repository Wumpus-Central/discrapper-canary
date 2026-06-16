n.d(e, { A: () => l });
var s = n(627968);
n(64700);
var i = n(192308),
    a = n(71393);
function l(t) {
    let { onCloseCallback: e, analyticsLocations: l, ...o } = t;
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("51762"), n.e("76649"), n.e("66901"), n.e("56430")]).then(
                n.bind(n, 39613),
            );
            return (e) =>
                (0, s.jsx)(t, {
                    ...e,
                    ...o,
                    analyticsLocations: l,
                    guildCount: a.A.getGuildCount(),
                    "aria-labelledby": "nitro-guild-cap-upsell",
                });
        },
        { onCloseCallback: e },
    );
}
