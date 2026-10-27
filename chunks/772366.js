n.d(t, { A: () => l });
var i = n(477900);
n(582128);
var a = n(192308),
    s = n(71393);
function l(e) {
    let { onCloseCallback: t, analyticsLocations: l, ...r } = e;
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("935205"), n.e("677668"), n.e("766901"), n.e("256430")]).then(
                n.bind(n, 39613),
            );
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    ...r,
                    analyticsLocations: l,
                    guildCount: s.A.getGuildCount(),
                    "aria-labelledby": "nitro-guild-cap-upsell",
                });
        },
        { onCloseCallback: t },
    );
}
