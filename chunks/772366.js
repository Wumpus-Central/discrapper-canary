n.d(t, { A: () => a });
var s = n(477900);
n(582128);
var i = n(192308),
    l = n(71393);
function a(e) {
    let { onCloseCallback: t, analyticsLocations: a, ...o } = e;
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("935205"), n.e("677668"), n.e("766901"), n.e("256430")]).then(
                n.bind(n, 39613),
            );
            return (t) =>
                (0, s.jsx)(e, {
                    ...t,
                    ...o,
                    analyticsLocations: a,
                    guildCount: l.A.getGuildCount(),
                    "aria-labelledby": "nitro-guild-cap-upsell",
                });
        },
        { onCloseCallback: t },
    );
}
